// Define las palabras clave
const keywords = [
    "ElPozo", "Nueva Cocina Mediterránea", "Cobuco SL", "Bazar El Paso", 
    "Marín Giménez", "Frucimur", "recepción", "inspección", "almacenamiento", 
    "corte", "picado", "mezclado", "lavado", "funcionamiento de máquinas", 
    "ajustes", "manipulación segura", "tienda de informática", 
    "asesoramiento técnico", "soporte al cliente", 
    "inventario de productos tecnológicos", 
    "resolución de problemas informáticos", "trabajo en equipo", 
    "adaptabilidad"
  ];
  
  // Función para resaltar las palabras clave
  function highlightText(text) {
    if (!text) return text;
    
    // Crear expresión regular para todas las palabras clave
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    
    // Reemplazar las palabras clave con la versión resaltada
    return text.replace(regex, (matched) => 
      `<strong style="color: blue;">${matched}</strong>`
    );
  }
  
  // Ejecutar el script al cargar el DOM
  document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor donde está el texto
    const summaryContainer = document.querySelector(".text-gray-600");
    
    // Obtiene el contenido de texto actual
    const summaryText = summaryContainer.innerText;
    
    // Procesa el texto con la función
    const highlightedText = highlightText(summaryText);
  
    // Inserta el texto con las palabras resaltadas
    summaryContainer.innerHTML = highlightedText;
    
    summaryContainers.forEach(container => {
      console.log("Contenido encontrado:", container.innerText);
    });
  });
  