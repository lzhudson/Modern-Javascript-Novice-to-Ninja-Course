const btnPopup = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const btnClosePopup = document.querySelector('.popup-close')

btnPopup.addEventListener('click', ()=>{
  popup.style.display = 'block';
});
btnClosePopup.addEventListener('click', ()=>{
  popup.style.display = 'none';
})