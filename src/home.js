 export const loadContent = (() => {
  const content = document.getElementById('content');
  const navBarDiv = document.createElement('div');
  navBarDiv.classList.add('nav-bar');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = 'Wicked Wok';
  const logoImg = document.createElement('img');
  logoImg.classList.add('logo-img');
  logoImg.src = '../assets/logo.png';
  const slogan = document.createElement('h5');
  slogan.classList.add('slogan');
  slogan.textContent = 'The Finest Asian Food';
  const linksDiv = document.createElement('div');
  linksDiv.classList.add('links');
  const homeButton = document.createElement('button');
  homeButton.classList.add('home-button');
  homeButton.textContent = 'Home';
  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'Menu';
  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-button');
  contactButton.textContent = 'Contact';
  
  content.appendChild(navBarDiv);
  navBarDiv.appendChild(logo);
  navBarDiv.appendChild(slogan);
  logo.appendChild(logoImg);
  logo.appendChild(title);
  navBarDiv.appendChild(linksDiv);
  linksDiv.appendChild(homeButton);
  linksDiv.appendChild(menuButton);
  linksDiv.appendChild(contactButton);
})();

// export { loadContent }