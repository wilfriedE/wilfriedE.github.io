(function(H) {
  var videos = ["Snapchat-2215806980292823000.mp4", "Snapchat-3166549212292376752.mp4", "Snapchat-3485455848712275875.mp4", "Snapchat--3626258608703107147.mp4", "Snapchat--4759859706494108437.mp4", "Snapchat-5124817905564498579.mp4", "Snapchat-6438875661634950297.mp4", "Snapchat-75171592187623375.mp4", "Snapchat--7743599100833374540.mp4", "Snapchat-7760856770452692948.mp4", "Snapchat--7871058938903653887.mp4", "Snapchat-911289867205014763.mp4"];
  var images = ["IMG_1145.JPG","IMG_3460.JPG","IMG_3503.JPG","IMG_5682.JPG","IMG_5685.JPG","IMG_5800.CR2.JPG","IMG_5801.JPG","IMG_5824.JPG","IMG_5838.JPG","IMG_5849.JPG","IMG_5852.JPG","IMG_5855.JPG","IMG_5858.JPG","IMG_5860.JPG","IMG_6750.JPG","IMG_6850.JPG","IMG_6906.JPG","IMG_6914.JPG","WP_000037.JPG"];
  H.setCookie = function (name,value,days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
  }

  H.getCookie = function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  H.deleteCookie  = function(name) {
      createCookie(name,"",-1);
  }

  H.shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  H.getnvids = function(n){
    var vids = H.shuffle(videos);
    return [];//vids.slice(0,n);
  }

  H.getrandombg = function() {
      return images[Math.floor(Math.random() * images.length)];
  }

})(window.H = {});
//Helper.js because Angular.io stuff are not all working for plain js yet.
