const showlistContact = document.querySelector('.contact-button');
const contactBox = document.querySelector('.contacts-box');
const closeContactList = document.querySelector('.close-contacts-list');

showlistContact.addEventListener('click', function() {
  contactBox.classList.add('show-contacts-box');
});

closeContactList.addEventListener('click', function() {
  contactBox.classList.remove('show-contacts-box');
});
