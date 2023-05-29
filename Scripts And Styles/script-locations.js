function openPopup(imageSrc, title, description) {
  // Get references to the popup elements
  var popupOverlay = document.getElementById('location-popup-overlay');
  var popupContainer = document.getElementById('location-popup-container');
  
  // Create new elements for the popup content
  var popupTitle = document.createElement('h2');
  var popupImage = document.createElement('img');
  var popupDescription = document.createElement('p');
  
  // Set the source, title, and description of the popup content
  popupImage.src = imageSrc;
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  
  // Clear the existing content and add the new content to the popup container
  popupContainer.innerHTML = '';
  popupContainer.appendChild(popupImage);
  popupContainer.appendChild(popupTitle);
  popupContainer.appendChild(popupDescription);
  
  // Display the popup overlay and container
  popupOverlay.style.display = 'block';
  popupContainer.style.display = 'block';
}

function closePopup() {
  // Get references to the popup elements
  var popupOverlay = document.getElementById('location-popup-overlay');
  var popupContainer = document.getElementById('location-popup-container');
  
  // Hide the popup overlay and container
  popupOverlay.style.display = 'none';
  popupContainer.style.display = 'none';
}