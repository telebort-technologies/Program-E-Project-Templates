var a = document.querySelectorAll("a");
a.forEach(function(item) {
  item.onmouseover = function() {
    item.style.backgroundColor = "#ff944d";
  };
  item.onmouseout = function() {
    item.style.backgroundColor = "#ff751a";
  };
});
