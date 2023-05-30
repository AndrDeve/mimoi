// Obtener referencias a todos los botones
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  
// Recorrer todos los botones y agregar un evento 'click' a cada uno
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Crear la ventana modal
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Agregar contenido a la ventana modal
    modal.innerHTML = `
      <div class="modal-content">
        <p>Agregado al carrito.</p>
      </div>
    `;

    // Agregar la ventana modal al cuerpo del documento
    document.body.appendChild(modal);

    // Establecer un temporizador para ocultar la ventana modal después de un segundo
  setTimeout(() => {
    document.body.removeChild(modal);
  }, 1000);
  });
});