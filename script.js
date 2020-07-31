const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document .getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value //the plus converts the string to number

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  
  const selectedSeatsCount = selectedSeats.length

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select event
movieSelect.addEventListener('change', event => {
  ticketPrice = event.target.value
  updateSelectedCount()
})

// Seat Click event
container.addEventListener('click', event => {
  if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
    event.target.classList.toggle('selected')
    
    updateSelectedCount()
  }
})