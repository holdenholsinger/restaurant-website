let menuContainer = document.querySelector('.menu-container')

let pizzaButton = document.querySelector('#pizzas')

pizzaButton.onclick = showPizza


function showPizza() {
    const pizzaHTML = `
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
    `;
    menuContainer.innerHTML = pizzaHTML

}

