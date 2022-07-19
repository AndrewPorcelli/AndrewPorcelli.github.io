//javascript for navigation bar effects on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navigation.classList.remove('active');
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', function () {
  scrollBtn.classList.toggle('active', window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

document.getElementById('project-1').addEventListener('click', () => {
  location.href =
    'https://www.youtube.com/watch?v=5u6JjHNL2U4&ab_channel=AndrewPorcelli';
});
document.getElementById('project-2').addEventListener('click', () => {
  location.href = 'https://chikara.fitness/';
});
document.getElementById('email-icon').addEventListener('click', () => {
  let link = 'andrewjporcelli@gmail.com';
  location.href = link;
});
document.getElementById('website-icon').addEventListener('click', () => {
  let link = 'https://andrewporcelli.github.io';
  location.href = link;
});

document.getElementById('address-icon').addEventListener('click', () => {
  let link =
    'https://www.google.com/maps/place/Saratoga+Springs,+NY/@43.0616205,-73.8419577,12z/data=!3m1!4b1!4m5!3m4!1s0x89de384ec75bd439:0x641d456a1b94a2a8!8m2!3d43.0831301!4d-73.7845651';
  location.href = link;
});
document.getElementById('insta').addEventListener('click', () => {
  let link = 'https://www.instagram.com/andrew_porcelli/?hl=en';
  location.href = link;
});
document.getElementById('git-hub').addEventListener('click', () => {
  let link = 'https://github.com/AndrewPorcelli';
  location.href = link;
});
document.getElementById('discord').addEventListener('click', () => {
  let link = 'https://discordapp.com/users/3732/';
  location.href = link;
});
document.getElementById('facebook').addEventListener('click', () => {
  let link = 'https://www.facebook.com/andrew.porcelli.52/';
  location.href = link;
});
document.getElementById('venmo').addEventListener('click', () => {
  let link = 'https://account.venmo.com/u/';
  location.href = link;
});
