const modal = document.querySelector('.modal-wrapper')
const btn = document.querySelector('#openModal')
btn.addEventListener('click', openModal)

function openModal () {
  modal.classList.remove('invisible')  
}
document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'
  if (isEscKey){
    modal.classList.add('invisible')
  }
})