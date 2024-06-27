let menuContainer = document.querySelector('.menu-container')

let pizzaButton = document.querySelector('#pizzas')
let pastaButton = document.querySelector('#pastas')
let saladButton = document.querySelector('#salads')

pastaButton.onclick = showPastas
pizzaButton.onclick = showPizzas
saladButton.onclick = showSalads

const menuSectionsHtml = {
  'pastas': `
  <div class="menu-container">
    <div class="menu-section">
      <h2>Pastas</h2>
      <div class="menu-item">
        <div class="menu-item-top">
          <p class="food">cacio e pepe</p>
          <p class="price">$12.00</p>
        </div>
        <p class="description">a Roman classic of pasta with creamy Pecorino Romano cheese and black pepper</p>
        <hr>
      </div>

      <div class="menu-item">
        <div class="menu-item-top">
          <p class="food">bucatini all'amatriciana</p>
          <p class="price">$14.00</p>
        </div>
        <p class="description">bucatini pasta in a savory tomato sauce with guanciale and chili pepper</p>
        <hr>
      </div>

      <div class="menu-item">
        <div class="menu-item-top">
          <p class="food">pasta alla gricia</p>
          <p class="price">$14.00</p>
        </div>
        <p class="description">crispy guanciale and Pecorino Romano tossed with al dente pasta</p>
        <hr>
      </div>

      <div class="menu-item">
        <div class="menu-item-top">
          <p class="food">spaghetti alla carbonara</p>
          <p class="price">$13.00</p>
        </div>
      <p class="description">creamy pasta with eggs, guanciale, Pecorino Romano, and black pepper</p>
      <hr>
    </div>`,

    'pizzas': `
    <div class="menu-section">
    <h2>Pizzas</h2>
    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Margherita</p>
        <p class="price">$12.00</p>
      </div>
      <p class="description">Classic pizza with tomato sauce, mozzarella, and fresh basil</p>
      <hr>
    </div>

    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Pepperoni</p>
        <p class="price">$14.00</p>
      </div>
      <p class="description">Loaded with pepperoni slices, mozzarella, and tomato sauce</p>
      <hr>
    </div>

    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">BBQ Chicken</p>
        <p class="price">$15.00</p>
      </div>
      <p class="description">Topped with BBQ sauce, grilled chicken, red onions, and cilantro</p>
      <hr>
    </div>

    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Veggie</p>
        <p class="price">$13.00</p>
      </div>
      <p class="description">A mix of bell peppers, onions, mushrooms, olives, and mozzarella</p>
      <hr></div>
    `,
    'salads': `
    <div class="menu-section">
    <h2>Salads</h2>
    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Caesar Salad</p>
        <p class="price">$10.00</p>
      </div>
      <p class="description">Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing</p>
      <hr>
    </div>

    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Greek Salad</p>
        <p class="price">$11.00</p>
      </div>
      <p class="description">Mixed greens with feta cheese, olives, tomatoes, cucumbers, and red onions</p>
      <hr>
    </div>

    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Caprese Salad</p>
        <p class="price">$12.00</p>
      </div>
      <p class="description">Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze</p>
      <hr>
    </div>

    <div class="menu-item">
      <div class="menu-item-top">
        <p class="food">Cobb Salad</p>
        <p class="price">$13.00</p>
      </div>
      <p class="description">Romaine lettuce topped with grilled chicken, bacon, avocado, eggs, and blue cheese</p>
      <hr>
    </div>`
}

function showPastas() {
    
    menuContainer.innerHTML = menuSectionsHtml['pastas']

}

function showPizzas() {
    
  menuContainer.innerHTML = menuSectionsHtml['pizzas']

}

function showSalads() {
    
  menuContainer.innerHTML = menuSectionsHtml['salads']

}

console.log(menuSectionsHtml['pastas'])

function clearButtonBackground() {
  let menuButtons = document.getElementsByClassName('menu-button')
  for (let i=0; i < menuButtons.length; i++);
    // change the class of every element to have the normal background
}

// function