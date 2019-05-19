function click(e) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="' + e.target.id + '"'
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll("button");
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", click);
  }
});
