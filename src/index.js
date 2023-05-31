import { loadContent } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";


const content = document.getElementById('content');
content.innerHTML = `<div class="nav-bar">
  <div class="logo">
    <img class="logo-img" src="../assets/logo.png" alt="Logo">
    <h3 class="title">Wicked Wok</h3>
  </div>
  <h5 class="slogan"><em>The Finest Asian Food</em></h5>
  <div class="links">
    <button class="home-button">Home</button>
    <button class="menu-button">Menu</button>
    <button class="contact-button">Contact</button>
  </div>
</div>`

const load = document.querySelector('#load');

loadContent(load);

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => loadMenu(load));

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', () => loadContact(load));

const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', () => loadContent(load));
