function openPopup(imageSrc, title, description) {
    var popupOverlay = document.getElementById('popup-overlay');
    var popupContainer = document.getElementById('popup-container');
    var popupImage = document.createElement('img');
    var popupTitle = document.createElement('h2');
    var popupDescription = document.createElement('p');
  
    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupDescription.textContent = description;
  
    popupContainer.innerHTML = '';
    popupContainer.appendChild(popupImage);
    popupContainer.appendChild(popupTitle);
    popupContainer.appendChild(popupDescription);
  
    popupOverlay.style.display = 'block';
    popupContainer.style.display = 'block';
  }
  
  function closePopup() {
    var popupOverlay = document.getElementById('popup-overlay');
    var popupContainer = document.getElementById('popup-container');
  
    popupOverlay.style.display = 'none';
    popupContainer.style.display = 'none';
  }