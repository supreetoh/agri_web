
//navbar mobile view activation
function toggleMenu(menu){
  menu.classList.toggle('open');
}



// for preloader

var header = document.getElementById('navbar');

var preloader = document.getElementById('center');

function myLoader(){
  preloader.style.display = 'none';
  header.style.position = 'absolute'
}

// making navbar sticky from 2nd page on index.html page 
document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {myFunction()};
  
  var secPos = document.querySelector('.section1').offsetTop;
  
  var halfSecPos = secPos/2;
  
  function myFunction(){
    if(window.pageYOffset > halfSecPos){
      document.querySelector('header').classList.add('fixed')
      }
      else{
        document.querySelector('header').classList.remove('fixed')
      }
  }
  
  })

//for active tabs in navabar
var ulist = document.querySelector('ul');
var list_a = document.querySelectorAll('li a');

list_a.forEach(liActive => {
  liActive.addEventListener('click', function(){
    ulist.querySelector('.active').classList.remove('active')
    liActive.classList.add('active')
  })
})


// for contact page error handling with mobile view navbar
var button = document.getElementById('hamburger-icon')
var section = document.querySelector('#section');
button.addEventListener('click', function(){
    if(section.style.display === 'none'){
     section.style.display = 'flex'
    }else{
     section.style.display = 'none'
    }
 
} );