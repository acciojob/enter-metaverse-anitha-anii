
const statusElement = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");
let head = document.getElementById('status');

 enterButton.addEventListener("click", function() {
   const h1Element = document.createElement("h1");
  h1Element.id ="status";
    h1Element.textContent = "Entered Metaverse";
	 head.appendChild(h1Element);
     statusElement.parentNode.replaceChild(h1Element, statusElement);
});




