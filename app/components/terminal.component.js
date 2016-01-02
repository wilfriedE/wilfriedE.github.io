(function(app) {
  var global = {};

  var Theme = {
    'default' : function (shell) {
        shell.fillStyle = "black";
        shell.fillRect(0, 0, global.width, global.height);
    }
  };

  app.Terminal = ng.core
    .Component({
      selector: 'terminal',
      templateUrl: '/app/views/terminal.html'
    })
    .Class({
      constructor: function() {
      	this.terminal = document.getElementById('terminal');
        global['width'] = window.innerWidth;
        global['height'] = window.innerHeight;
        global['cursor'] = {x:0,y:0};
        global['font'] = "20px Inconsolata";
        global['font_size'] = 20;
        global['prompt_name'] = "[guest@wilfriedE] $ ";
        global['PIXEL_RATIO'] = (function () {
            var ctx = this.terminal.getContext("2d"),
                dpr = window.devicePixelRatio || 1,
                bsr = ctx.webkitBackingStorePixelRatio ||
                      ctx.mozBackingStorePixelRatio ||
                      ctx.msBackingStorePixelRatio ||
                      ctx.oBackingStorePixelRatio ||
                      ctx.backingStorePixelRatio || 1;
            return dpr / bsr;
        })();
        this.shell = this.createHiDPICanvas(global.width, global.height).getContext("2d");
        this.startup();
      },
      startup: function () {
        var shell = this.shell;
        this.setTheme('default');
        shell.font = global.font;
        shell.fillStyle = "white";
        this.setPrompt();
        this.drawCursor();
      },
      setTheme: function(theme) {
        if (Theme[theme]) {Theme[theme](this.shell)} else{console.log("invalid theme")};
      },
      setPrompt: function() {
        this.shell.fillStyle = global.prompt_color;
        this.handleCarriageReturn();
        this.drawPrompt();
      },
      handleCarriageReturn: function () {
        global.cursor.y += global.font_size;
        global.cursor.x = 0;
      },
      drawPrompt: function () {
        this.shell.fillText(global.prompt_name, global.cursor.x, global.cursor.y);
        this.ajustCursor(this.shell.measureText(global.prompt_name).width);
      },
      drawCursor: function() {
        var line_pos;
        var drawLine = function () {
          line_pos = {x:global.cursor.x, y:global.cursor.y}
          this.shell.fillStyle = "white";
          this.shell.fillRect(line_pos.x, line_pos.y-global.font_size, 2, global.font_size);
          setTimeout( function(){clearLine()}, 500);
        }.bind(this);
        var clearLine = function () {
          this.shell.fillStyle = "black";
          this.shell.fillRect(line_pos.x, line_pos.y-global.font_size, 2, global.font_size);
          setTimeout(function(){drawLine()}, 500);
        }.bind(this);
        drawLine();
      },
      ajustCursor: function(Dx) {
        global.cursor.x = Dx;
      },
      createHiDPICanvas: function(w, h, ratio) {
        if (!ratio) { ratio = global.PIXEL_RATIO; }
        var can = this.terminal;
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        return can;
      }
    });
})(window.app || (window.app = {}));