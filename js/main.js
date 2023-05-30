$(document).ready(function() {
  let cart = [];

  $('.comprar').click(function() {
    const card = $(this).parent();
    const imagen = card.find('img').attr('src');
    const referencia = card.find('.referencia').text();
    const nombre = card.find('.nombre').text();
    const precio = parseFloat(card.find('.precio').text().replace('$', ''));
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

  $('.cart').on('click', '.eliminar', function() {
    const row = $(this).parent().parent();
    const index = row.index();
    cart.splice(index, 1);

    updateCart();
  });

  $('.comprar-articulos').click(function() {
    let title = $('.titulo-secciones').text();
    let message = `*Hola Mimooi*✨\n*Deseo comprar lo siguiente:*\n*Sección ${title}*\n\n`;
    let total = 0;

    cart.forEach(item => {
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
    const tbody = $('.cart table tbody');
    let total = 0;

    tbody.empty();

    cart.forEach(item => {
      const tr = $('<tr>');

      // tr.append(`<td><img src="${item.imagen}" width="80" height="80"></td>`);
      tr.append(`<td>${item.referencia}</td>`);
      tr.append(`<td>${item.nombre}</td>`);
      tr.append(`<td>$${item.precio.toFixed(2)}</td>`);
      // tr.append(`<td>$${item.total.toFixed(2)}</td>`);
      tr.append('<td><button class="eliminar">X</button></td>');

      tbody.append(tr);

      total += item.total;
    });

    $('.cart .total').text(`Total: $${total.toFixed(2)}`);
  }
});
