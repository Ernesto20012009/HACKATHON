// Catálogo general de productos deportivos (50 artículos con imágenes corregidas)
const productos = [
  // 1. Calzado y fútbol
  {
    id: 1,
    nombre: "Nike Total 90 Dorados",
    precio: 1299,
    imagen: "https://th.bing.com/th/id/R.6d229052e0189af62253e7575f4cb55d?rik=%2fg1xPVW07aqgcg&riu=http%3a%2f%2fperufc.com%2fwp-content%2fuploads%2f2025%2f05%2fZ9006-1.png&ehk=fuhC2W80Po8vvAUSca13KjKTqmVB6EaCMat1AJky7nY%3d&risl=&pid=ImgRaw&r=0",
    categoria: "Calzado"
  },
  {
    id: 2,
    nombre: "Nike Total 90 Azul",
    precio: 1299,
    imagen: "https://sneakersbr.co/wp-content/uploads/2025/07/nike-total-90-iii-fc-barcelona-hq2851-401-release-info-004.jpg",
    categoria: "Calzado"
  },
  {
    id: 3,
    nombre: "Tenis Running Ultraligeros",
    precio: 1450,
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    categoria: "Calzado"
  },
  {
    id: 4,
    nombre: "Tacos de Fútbol Césped Sintético",
    precio: 1350,
    imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60",
    categoria: "Calzado"
  },
  {
    id: 5,
    nombre: "Calcetas Antideslizantes Pro",
    precio: 160,
    imagen: "https://th.bing.com/th/id/OPHS.IB69wYpSU3Dz2A474C474?w=592&h=550&o=5&pid=21.1",
    categoria: "Calzado"
  },

  // 2. Deportes de contacto
  {
    id: 6,
    nombre: "Guantes de boxeo 14oz Platino",
    precio: 1500,
    imagen: "https://www.cletoreyes.net/wp-content/uploads/2018/03/guantes-entrenamiento-pulgar-sujeto-piel-res-platino-300x300.jpg",
    categoria: "Deportes de contacto"
  },
  {
    id: 7,
    nombre: "Guantes de MMA Profesionales",
    precio: 800,
    imagen: "https://th.bing.com/th/id/R.466d2c4e9f817adc99cf4aab7c30ba4a?rik=TmvSlC0A6zWsXQ&pid=ImgRaw&r=0",
    categoria: "Deportes de contacto"
  },
  {
    id: 8,
    nombre: "Bucal de Gel Termoformable",
    precio: 100,
    imagen: "https://tse1.mm.bing.net/th/id/OIP.JZZKDedUqnMoLQ3uKiKupAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    categoria: "Deportes de contacto"
  },
  {
    id: 9,
    nombre: "Careta de Protección Abierta",
    precio: 2000,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61GZQive0ZL._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Deportes de contacto"
  },
  {
    id: 10,
    nombre: "Vendas Elásticas de Boxeo 4.5m",
    precio: 180,
    imagen: "https://th.bing.com/th?id=OPHS.j%2fvpN3FD22qGQw474C474&w=248&h=248&o=5&pid=21.1",
    categoria: "Deportes de contacto"
  },
  {
    id: 11,
    nombre: "Espinilleras Muay Thai Reforzadas",
    precio: 950,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/71toUVglCQL._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Deportes de contacto"
  },
  {
    id: 12,
    nombre: "Costal de Boxeo Profesional 120cm",
    precio: 1850,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/41T5IZgCATL._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Deportes de contacto"
  },
  {
    id: 13,
    nombre: "Manoplas de Golpeo Curvas",
    precio: 650,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/71cOnZE6ZrL._AC_SX300_SY300_QL70_ML2_.jpg",
    categoria: "Deportes de contacto"
  },

  // 3. Ropa deportiva
  {
    id: 14,
    nombre: "Playera Dry-Fit Negra",
    precio: 250,
    imagen: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00693355099073L.jpg",
    categoria: "Ropa deportiva"
  },
  {
    id: 15,
    nombre: "Short Deportivo Negro",
    precio: 200,
    imagen: "https://tse1.mm.bing.net/th/id/OIP.YjfSjuDc5tbZJ7vCwggHMgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    categoria: "Ropa deportiva"
  },
  {
    id: 16,
    nombre: "Sudadera de Entrenamiento con Capucha",
    precio: 650,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/71GXJSVualL._AC_SX425_.jpg",
    categoria: "Ropa deportiva"
  },
  {
    id: 17,
    nombre: "Licra de Compresión Térmica",
    precio: 380,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/515cSOSZhVL._AC_SX385_.jpg",
    categoria: "Ropa deportiva"
  },
  {
    id: 18,
    nombre: "Pants Deportivo Slim Fit",
    precio: 490,
    imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60",
    categoria: "Ropa deportiva"
  },
  {
    id: 19,
    nombre: "Rompevientos Deportivo Impermeable",
    precio: 720,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61QcN0pk9+L._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Ropa deportiva"
  },
  {
    id: 20,
    nombre: "Top Deportivo Alto Impacto",
    precio: 340,
    imagen: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop&q=60",
    categoria: "Ropa deportiva"
  },

  // 4. Natación
  {
    id: 21,
    nombre: "Gorra de Silicón para Natación",
    precio: 150,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/31Sk2rADWyL._AC_SX300_SY300_QL70_ML2_.jpg",
    categoria: "Natacion"
  },
  {
    id: 22,
    nombre: "Goggles Antiempañantes Polarizados",
    precio: 250,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61A3KIR36LL._AC_SL1500_.jpg",
    categoria: "Natacion"
  },
  {
    id: 23,
    nombre: "Aletas Cortas de Entrenamiento",
    precio: 480,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/616fXHZyI9L._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Natacion"
  },
  {
    id: 24,
    nombre: "Tabla Flotadora Ergonómica",
    precio: 220,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/41Nav2il6yL._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Natacion"
  },
  {
    id: 25,
    nombre: "Tapones de Oído y Clip Nariz",
    precio: 90,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61TaSeq7LTL._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Natacion"
  },

  // 5. Balones y canchas
  {
    id: 26,
    nombre: "Balón de Fútbol Match Pro #5",
    precio: 550,
    imagen: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&auto=format&fit=crop&q=60",
    categoria: "Futbol"
  },
  {
    id: 27,
    nombre: "Espinilleras Anatómicas Pro",
    precio: 290,
    imagen: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61e7qkPYybL._AC_SY300_SX300_QL70_ML2_.jpg",
    categoria: "Futbol"
  },
  {
    id: 28,
    nombre: "Balón de Baloncesto Grip #7",
    precio: 600,
    imagen: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&auto=format&fit=crop&q=60",
    categoria: "Basquetbol"
  },
  {
    id: 29,
    nombre: "Balón de Voleibol Oficial MVA",
    precio: 480,
    imagen: "https://m.media-amazon.com/images/I/61Fy5EzoXuL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Voleibol"
  },
  {
    id: 30,
    nombre: "Guantes de Portero Grip Plus",
    precio: 750,
    imagen: "https://m.media-amazon.com/images/I/51pfA8WVbxL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Futbol"
  },

  // 6. Fitness y levantamiento
  {
    id: 31,
    nombre: "Set de Mancuernas Neopreno 5kg",
    precio: 520,
    imagen: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=500&auto=format&fit=crop&q=60",
    categoria: "Fitness"
  },
  {
    id: 32,
    nombre: "Cuerda de Salto de Alta Velocidad",
    precio: 180,
    imagen: "https://m.media-amazon.com/images/I/81kGfuOM3tL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Fitness"
  },
  {
    id: 33,
    nombre: "Tapete de Yoga Antideslizante 6mm",
    precio: 360,
    imagen: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60",
    categoria: "Fitness"
  },
  {
    id: 34,
    nombre: "Bandas de Resistencia (Set 5 piezas)",
    precio: 230,
    imagen: "https://m.media-amazon.com/images/I/51M2ZNLsstL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Fitness"
  },
  {
    id: 35,
    nombre: "Pesa Rusa Kettlebell 12kg",
    precio: 680,
    imagen: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60",
    categoria: "Fitness"
  },
  {
    id: 36,
    nombre: "Cinturón de Cuero para Pesas",
    precio: 550,
    imagen: "https://m.media-amazon.com/images/I/71XxRLHZjCL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Fitness"
  },
  {
    id: 37,
    nombre: "Rodillo de Espuma",
    precio: 290,
    imagen: "https://m.media-amazon.com/images/I/81WssjfYAGL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Fitness"
  },
  {
    id: 38,
    nombre: "Barra de Dominadas Ajustable",
    precio: 450,
    imagen: "https://m.media-amazon.com/images/I/61dG9RPLITL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Fitness"
  },
  {
    id: 39,
    nombre: "Muñequeras de Compresión y Soporte",
    precio: 140,
    imagen: "https://m.media-amazon.com/images/I/614JCzRXOxL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Fitness"
  },

  // 7. Ciclismo
  {
    id: 40,
    nombre: "Casco de Ciclismo Aerodinámico",
    precio: 890,
    imagen: "https://m.media-amazon.com/images/I/81UU7R02tEL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Ciclismo"
  },
  {
    id: 41,
    nombre: "Guantes de Ciclismo con Almohadilla Gel",
    precio: 240,
    imagen: "https://m.media-amazon.com/images/I/71Z6HBRElUL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Ciclismo"
  },
  {
    id: 42,
    nombre: "Luz LED Trasera y Delantera para Bici",
    precio: 190,
    imagen: "https://m.media-amazon.com/images/I/71WzZ5hQPtL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Ciclismo"
  },

  // 8. Raquetas y Pádel
  {
    id: 43,
    nombre: "Pala de Pádel Carbono Pro",
    precio: 2100,
    imagen: "https://m.media-amazon.com/images/I/51p70Z4YjHL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Raquetas"
  },
  {
    id: 44,
    nombre: "Pelotas de Pádel / Tenis (Bote con 3)",
    precio: 130,
    imagen: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=500&auto=format&fit=crop&q=60",
    categoria: "Raquetas"
  },
  {
    id: 45,
    nombre: "Raqueta de Tenis Grafito Titanium",
    precio: 1850,
    imagen: "https://m.media-amazon.com/images/I/51HSL57qMeL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Raquetas"
  },

  // 9. Accesorios y entrenamiento funcional
  {
    id: 46,
    nombre: "Termo Deportivo Acero Inox 1L",
    precio: 320,
    imagen: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
    categoria: "Accesorios"
  },
  {
    id: 47,
    nombre: "Maleta Deportiva Gym Bag 40L",
    precio: 580,
    imagen: "https://m.media-amazon.com/images/I/416hr+WNUFL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Accesorios"
  },
  {
    id: 48,
    nombre: "Conos de Agilidad y Entrenamiento (10 pzas)",
    precio: 190,
    imagen: "https://m.media-amazon.com/images/I/51cTmf7G8gL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Accesorios"
  },
  {
    id: 49,
    nombre: "Escalera de Agilidad y Coordinación",
    precio: 280,
    imagen: "https://m.media-amazon.com/images/I/61z9iZNYvRL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Accesorios"
  },
  {
    id: 50,
    nombre: "Cinta Kinesiológica Muscular 5m",
    precio: 120,
    imagen: "https://m.media-amazon.com/images/I/71cccHiUfEL._AC_UL480_FMwebp_QL65_AIweblab1378949,T1_.jpg",
    categoria: "Accesorios"
  }
];
const imagenRespaldo="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=500&auto=format&fit=crop&q=60"; //si el enlace de imagen falla
let carrito = []; //arreglo de carrtio en 0
// funcion Cargar Productos inicio de catalogo
 function cargarProductos(){
    const contenedor = document.getElementById("container-products");
    if (!contenedor) return;
    contenedor.innerHTML="";
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("card-product");

        card.innerHTML=`
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio} MXN</p>
      <button class="btn-agregar" type="button" onclick="agregarAcarrito(${producto.id})">Agregar al Carrito</button>
    `;

    contenedor.appendChild(card);
    });
}// fin cargarProductos


// inicio funcion agregarAcarrito
function agregarAcarrito(id) {
  try {
    const productoEncontrado = productos.find((item) => item.id === id);
    if (!productoEncontrado) {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }

    carrito.push(productoEncontrado);

    const badgeContador = document.getElementById("cart-count");
    if (badgeContador) {
      badgeContador.textContent = carrito.length;
    }

    const toastElement = document.getElementById("cart-toast");
    const toastMessage = document.getElementById("toast-message");

    if (toastElement && window.bootstrap) {
      toastMessage.textContent = `¡${productoEncontrado.nombre} agregado al carrito!`;
      const toast = new bootstrap.Toast(toastElement, { delay: 2500 });
      toast.show();
    }
  } catch (error) {
    console.error("Error al procesar la compra:", error.message);
  }
}

document.addEventListener("DOMContentLoaded", cargarProductos);