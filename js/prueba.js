document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
  
    document.querySelectorAll('.comprar').forEach(function(element) {
      element.addEventListener('click', function() {
        const card = this.parentElement;
        const imagen = card.querySelector('img').getAttribute('src');
        const referencia = card.querySelector('.referencia').textContent;
        const nombre = card.querySelector('.nombre').textContent;
        const precio = parseFloat(card.querySelector('.precio').textContent.replace('$', ''));
        const total = precio;
  
        const item = {
          imagen,
          referencia,
          nombre,
          precio,
          total
        };
  
        cart.push(item);
  
        updateCart();
  
        // alert("Se ha agregado correctamente.\nEn la parte inferior de la sección encontrarás el carrito, gracias!");
      });
    });
  
    document.querySelector('.cart').addEventListener('click', function(event) {
      if (event.target.classList.contains('eliminar')) {
        const row = event.target.parentElement.parentElement;
        const index = Array.from(row.parentElement.children).indexOf(row);
        cart.splice(index, 1);
  
        updateCart();
      }
    });
  
    document.querySelector('.comprar-articulos').addEventListener('click', function() {
      let title = document.querySelector('.titulo-secciones').textContent;
      let message = `*Hola Mimooi*✨\n*Deseo comprar lo siguiente:*\n*Sección ${title}*\n\n`;
      let total = 0;
  
      cart.forEach(function(item) {
        message += `*-* ${item.referencia} - Nombre: ${item.nombre} - Precio: $${item.precio.toFixed(2)}\n\n`;
        total += item.total;
      });
  
      message += `Total: $${total.toFixed(2)}`;
  
      // Reemplaza "tu-número-de-WhatsApp" con tu número de WhatsApp
      const url = `https://api.whatsapp.com/send?phone=+593996397405&text=${encodeURIComponent(message)}`;
  
      // Abre la URL en una nueva pestaña
      window.open(url, '_blank');
  
      // Resetea el carrito
      cart = [];
      updateCart();
    });
  
    function updateCart() {
      const tbody = document.querySelector('.cart table tbody');
      let total = 0;
  
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
  
      cart.forEach(function(item) {
        const tr = document.createElement('tr');
  
        // tr.innerHTML = `<td><img src="${item.imagen}" width="80" height="80"></td>`;
        tr.innerHTML = `<td>${item.referencia}</td>`;
        tr.innerHTML += `<td>${item.nombre}</td>`;
        tr.innerHTML += `<td>$${item.precio.toFixed(2)}</td>`;
        // tr.innerHTML += `<td>$${item.total.toFixed(2)}</td>`;
  
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('eliminar');
        deleteButton.textContent = 'X';
        tr.appendChild(deleteButton);
  
        tbody.appendChild(tr);
  
        total += item.total;
      });
  
      document.querySelector('.cart .total').textContent = `Total: $${total.toFixed(2)}`;
    }
  });