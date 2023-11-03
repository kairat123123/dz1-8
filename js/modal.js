const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalBtn = document.querySelector('.modal_close')




const openModal = () => {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = ''
}

const checkScrollEnd = () => {
  // Check if the user has scrolled to the bottom of the page
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Call the openModal function only if it hasn't been called before
    if (!modalTrigger.hasAttribute('data-modal-opened')) {
      openModal()
      modalTrigger.setAttribute('data-modal-opened', true)
    }
  }
}

// Open modal after 10 seconds
setTimeout(openModal, 10000)

// Set up event listeners
modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

// Add scroll event listener after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', checkScrollEnd)
})