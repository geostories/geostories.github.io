window.addEventListener("scroll", function(ev) {

  var scrollHeight = document.documentElement.scrollTop;
  if (scrollHeight < 1500) {
    pathScroll(path1,0,1300);
    document.getElementById("path1_2").style.display = "block";
    document.getElementById("path3").style.display = "none";
    document.getElementById("path4").style.display = "none";
  }
  else if (scrollHeight > 1500 && scrollHeight < 2500) {
    pathScroll(path3, 1500, 900)
    document.getElementById("path3").style.display = "block";
    document.getElementById("path1_2").style.display = "none";
    document.getElementById("path4").style.display = "none";
  }
  else if (scrollHeight > 2000 && scrollHeight < 3500) {
    pathScroll(path4, 2500, 500)
    document.getElementById("path4").style.display = "block";
    document.getElementById("path1_2").style.display = "none";
    document.getElementById("path3").style.display = "none";
  }
});

function pathScroll(path, offset,  indiv_scrollheight) {
      var scrollPercentage = (document.documentElement.scrollTop - offset) / (indiv_scrollheight); //1500;//(document.documentElement.scrollHeight - document.documentElement.clientHeight); // What % down is it?
      var drawLength = path.getTotalLength() * scrollPercentage; // Length to offset the dashes
      path.style.strokeDashoffset = path.getTotalLength() - drawLength; // Draw in reverse
      if (scrollPercentage >= 0.99) { // When complete, remove the dash array, otherwise shape isn't quite sharp
        path.style.strokeDasharray = "none";
      } else {
        path.style.strokeDasharray = path.getTotalLength() + ' ' + path.getTotalLength();
      }
  }
