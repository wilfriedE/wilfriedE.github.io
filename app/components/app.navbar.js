(function(app, H) {
  app.AppNavbar =
    ng.core.Component({
      selector: 'navbar',
      styleUrls: ['css/navbar.css'],
      templateUrl: '/app/views/navbar.html'
    })
    .Class({
      constructor: function() {
      },
      ngOnInit: function() {
        this.portfolioNavListener();
        this.blogNavListener();
        this.playgroundNavListener();
        this.socialNavListener();
      },
      portfolioNavListener: function() {
        var canvasVideo = new CanvasVideoPlayer({
            videoSelector: '#portfolio-vid',
            canvasSelector: '#portfolio-canvas',
            framesPerSecond: 30,
            hideVideo: true,
            autoplay: false,
            audio: false, // can be true/false (it will use video file for audio), or selector for a separate audio file
            resetOnLastFrame: true, // should video reset back to the first frame after it finishes playing
            loop: true
        });
        canvasVideo.drawFrame();
        var nav_item = document.getElementById('portfolio-nav');
        if(nav_item){
          nav_item.addEventListener('mouseenter', function(e) {
              canvasVideo.play();
          }, false);
          nav_item.addEventListener('mouseleave', function(e) {
              canvasVideo.pause();
          }, false);
        }
      },
      blogNavListener: function() {
        var canvasVideo = new CanvasVideoPlayer({
            videoSelector: '#blog-vid',
            canvasSelector: '#blog-canvas',
            framesPerSecond: 30,
            hideVideo: true,
            autoplay: false,
            audio: false, // can be true/false (it will use video file for audio), or selector for a separate audio file
            resetOnLastFrame: true, // should video reset back to the first frame after it finishes playing
            loop: true
        });
        canvasVideo.drawFrame();
        var nav_item = document.getElementById('blog-nav');
        if(nav_item){
          nav_item.addEventListener('mouseenter', function(e) {
              canvasVideo.play();
          }, false);
          nav_item.addEventListener('mouseleave', function(e) {
              canvasVideo.pause();
          }, false);
        }
      },
      playgroundNavListener: function() {
        var canvasVideo = new CanvasVideoPlayer({
            videoSelector: '#playground-vid',
            canvasSelector: '#playground-canvas',
            framesPerSecond: 30,
            hideVideo: true,
            autoplay: false,
            audio: false, // can be true/false (it will use video file for audio), or selector for a separate audio file
            resetOnLastFrame: true, // should video reset back to the first frame after it finishes playing
            loop: true
        });
        canvasVideo.drawFrame();
        var nav_item = document.getElementById('playground-nav');
        if(nav_item){
          nav_item.addEventListener('mouseenter', function(e) {
              canvasVideo.play();
          }, false);
          nav_item.addEventListener('mouseleave', function(e) {
              canvasVideo.pause();
          }, false);
        }
      },
      socialNavListener: function() {
        var canvasVideo = new CanvasVideoPlayer({
            videoSelector: '#social-vid',
            canvasSelector: '#social-canvas',
            framesPerSecond: 30,
            hideVideo: true,
            autoplay: false,
            audio: false, // can be true/false (it will use video file for audio), or selector for a separate audio file
            resetOnLastFrame: true, // should video reset back to the first frame after it finishes playing
            loop: true
        });
        canvasVideo.drawFrame();
        var nav_item = document.getElementById('social-nav');
        if(nav_item){
          nav_item.addEventListener('mouseenter', function(e) {
              canvasVideo.play();
          }, false);
          nav_item.addEventListener('mouseleave', function(e) {
              canvasVideo.pause();
          }, false);
        }
      }
    });
})(window.app || (window.app = {}), window.H);
