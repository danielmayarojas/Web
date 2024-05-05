let cartItems = [];
let cartTotal = 0;

function addProduct(name, price) {
    cartItems.push({ name: name, price: price });
    cartTotal += price;
    showBasket();
}

function removeProduct(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;
    showBasket();
}

function showBasket() {
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - €${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            removeProduct(index);
        };
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
    cartTotalElement.textContent = cartTotal;
}

function showWindow() {
    document.getElementById("pop-upWindow").style.display = "block";
}

function closeWindow() {
    document.getElementById("pop-upWindow").style.display = "none";
}