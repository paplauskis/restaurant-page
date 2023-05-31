 export const loadContent = (() => {
  const content = document.getElementById('content');
  content.innerHTML = `<div id="content" /><div class="nav-bar">
    <div class="logo">
      <img class="logo-img" src="../assets/logo.png" alt="Logo" />
      <h3 class="title">Wicked Wok</h3>
    </div>
    <h5 class="slogan"> <em> The Finest Asian Food </em> </h5>
    <div class="links">
      <button class="home-button">Home</button>
      <button class="menu-button">Menu</button>
      <button class="contact-button">Contact</button>
    </div>
  </div><div class="description">
      <div class="why-us">
        <h2>Why us?</h2>
        <p>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Wicked Wok is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>
      </div>
      <div class="working-hours">
        <h2>Working hours</h2>
        <p>Mon: 10:00 - 22:00</p>
        <p>Tue: 10:00 - 22:00</p>
        <p>Wed: 10:00 - 22:00</p>
        <p>Thu: 10:00 - 22:00</p>
        <p>Fri: 10:00 - 00:00</p>
        <p>Sat: 08:00 - 00:00</p>
        <p>Sun: 08:00 - 22:00</p>
      </div>
      <div class="review">
        <h2>What people think</h2>
        <p>We stumbled across this place after a day of travel and were pleasantly surprised by the quality of food. We went back the next day and were greeted with delight. Love the woks here, some of the best I have tasted.</p>
      </div>
    </div><img src="../assets/home-img.jpeg" alt="banner" />`
})();