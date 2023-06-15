
const statusElement = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");


 enterButton.addEventListener("click", function() {
   const h1Element = document.createElement("h1");
  h1Element.id ="status";
    h1Element.textContent = "Entered Metaverse";
     statusElement.parentNode.replaceChild(h1Element, statusElement);
});




