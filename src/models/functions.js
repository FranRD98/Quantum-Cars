// Cargar contenedor de novedades en 'NovedadesSection.astro'

// script.js
import coches from '../models/cars_importer'; // Asegúrate de que la ruta sea correcta

// Selecciona el contenedor donde se añadirán los coches
const carContainer = document.getElementById('car-news-container');

// Itera sobre el array de coches y crea los elementos HTML
coches.forEach(coche => {
    const cocheDiv = document.createElement('div');
    cocheDiv.className = 'w-[calc(25%-16px)] mx-2 text-center relative';

    cocheDiv.innerHTML = `
        <div class="relative">
            <!-- Primera imagen -->
            <img 
                class="transition-opacity duration-300 ease-in-out w-full h-auto" 
                src="${coche.imagenes[0]}" 
                alt="${coche.marca} ${coche.modelo}" 
            />
            <!-- Segunda imagen -->
            <img 
                class="transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-auto opacity-0" 
                src="${coche.imagenes[1]}" 
                alt="${coche.marca} ${coche.modelo}" 
            />
        </div>
        <h2 class="text-xl">${coche.marca} ${coche.modelo} - ${coche.motor}</h2>
        <p>${coche.combustible}</p>
        <p class="text-red-700">${coche.precio.toFixed(2).replace('.', ',')} €</p>
    `;

    // Seleccionar las imágenes dentro del cocheDiv
    const imgElement1 = cocheDiv.querySelector('img:first-child'); // Primera imagen
    const imgElement2 = cocheDiv.querySelector('img:nth-child(2)'); // Segunda imagen

    // Manejo de eventos para el hover
    cocheDiv.onmouseover = () => {
        imgElement1.classList.add('opacity-0'); // Oculta la primera imagen
        imgElement2.classList.remove('opacity-0'); // Muestra la segunda imagen
    };

    cocheDiv.onmouseout = () => {
        imgElement1.classList.remove('opacity-0'); // Muestra la primera imagen
        imgElement2.classList.add('opacity-0'); // Oculta la segunda imagen
    };

    // Añade el div del coche al contenedor
    carContainer.appendChild(cocheDiv);
});

