const imagenes = document.querySelectorAll('.img-welcome')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
}


///////////////////////////////////////////////////////////////////
// const imagenes2 = document.querySelectorAll('.img-welcome2')
// const imagenLight2 = document.querySelector('.agregar-imagen2');
// const contenedorLight2 = document.querySelector('.imagen-light2')

// imagenes2.forEach(imagen2 => {
//     imagen2.addEventListener('click',()=>{
//         aparecerImagen2(imagen2.getAttribute('src'));
//     })
// });

// contenedorLight2.addEventListener('click',(e)=>{
//     if(e.target !== imagenLight2){
//         contenedorLight2.classList.toggle('show2')
//         imagenLight2.classList.toggle('showImage2')
//     }
// })

// const aparecerImagen2 = (imagen2)=>{
//     imagenLight2.src = imagen2;
//     contenedorLight2.classList.toggle('show2')
//     imagenLight2.classList.toggle('showImage2')
// }