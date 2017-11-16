// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {

  one()
  two()
  three()
  four()
}

function one () {

  var one = document.getElementById('one')


  one.addEventListener('mouseenter', makeBlue)


  one.addEventListener('mouseleave', makeWhite)
}


function two () {
  var two = document.getElementByID('two')
  two.addEventListener('mouseenter', makeGreen)
  two.addEventListener('mouseleave', makeWhite)

}



function three () {
  var three = document.getElementByID('three')
  three.addEventListener('mouseenter', makeYellow)
  three.addEventListener('mouseleave', makeWhite)

}



function four () {
  var four = document.getElementByID('four')
  four.addEventListener('mouseenter', makeRed)
  four.addEventListener('mouseleave', makeWhite)

}



function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}
function makeYellow (evt) {
  evt.target.style.backgroundColor = 'yellow'
}

function makeRed (evt) {
  evt.target.style.backgroundColor = 'red'
}
