window.addEventListener("scroll", function(ev) {

  var scrollHeight = document.documentElement.scrollTop;
  console.log(scrollHeight)

  if (scrollHeight < 216) {
    document.getElementById("marker_star").style.display = "none";
  }
  else if (scrollHeight > 216) {
    document.getElementById("marker_star").style.display = "block";
  }

  if (scrollHeight < 216) {
    pathScroll(path1,0,150);
    document.getElementById("path1").style.stroke = "#F2C800";
    document.getElementById("text_tag1").style.display = "block";
    document.getElementById("text_tag2").style.display = "none";
    document.getElementById("text_tag3").style.display = "none";
    document.getElementById("text_tag4").style.display = "none";
  }
  else if (scrollHeight > 216 && scrollHeight < 1100) {
    pathScroll(path2,216,900);
    document.getElementById("path1").style.stroke = "grey";
    document.getElementById("path2").style.stroke = "#F2C800";
    document.getElementById("text_tag2").style.display = "block";
    document.getElementById("text_tag1").style.display = "none";
    document.getElementById("text_tag3").style.display = "none";
    document.getElementById("text_tag4").style.display = "none";
  }
  else if (scrollHeight > 1200 && scrollHeight < 2200) {
    pathScroll(path3, 1200, 900)
    document.getElementById("path1").style.stroke = "grey";
    document.getElementById("path2").style.stroke = "grey";
    document.getElementById("path3").style.stroke = "#F2C800";
    document.getElementById("text_tag3").style.display = "block";
    document.getElementById("text_tag1").style.display = "none";
    document.getElementById("text_tag2").style.display = "none";
    document.getElementById("text_tag4").style.display = "none";
  }
  else if (scrollHeight > 2200 && scrollHeight < 3500) {
    pathScroll(path4, 2200, 500)
    document.getElementById("path1").style.stroke = "grey";
    document.getElementById("path2").style.stroke = "grey";
    document.getElementById("path3").style.stroke = "grey";
    document.getElementById("path4").style.stroke = "#F2C800";
    document.getElementById("text_tag4").style.display = "block";
    document.getElementById("text_tag1").style.display = "none";
    document.getElementById("text_tag2").style.display = "none";
    document.getElementById("text_tag3").style.display = "none";
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
