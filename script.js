//your JS code here. If required.
let button = document.getElementById('enterBtn');
let para = document.getElementById('status');
let body = document.body;

button.addEventListener('click', function () {
  let header = document.createElement('h1');
  header.innerText = "Entered Metaverse";

  if (body.contains(para)) {
    body.replaceChild(header, para);
  }
});



