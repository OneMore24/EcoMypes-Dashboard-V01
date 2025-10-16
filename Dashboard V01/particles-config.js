// Configuración para tsParticles
// Este objeto define toda la apariencia y comportamiento de la animación de fondo.

tsParticles.load({
  id: "tsparticles", // El ID del div en tu index.html
  options: {
    // Preset para un efecto de fondo agradable
    preset: "links",

    // Configuración del fondo
    background: {
      color: {
        value: "#1a0404", // Un fondo rojo muy oscuro, casi negro
      },
    },

    // Configuración de las partículas
    particles: {
      number: {
        value: 80, // Cantidad de partículas en pantalla
        density: {
          enable: true,
        },
      },
      color: {
        // Usa tus colores corporativos
        value: ["#ce1126", "#ffa740", "#ffffff"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.1, max: 0.6 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      // Configuración de las líneas que conectan las partículas
      links: {
        color: {
          value: "#ffa740", // Las conexiones en color naranja/ámbar
        },
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      // Movimiento de las partículas
      move: {
        enable: true,
        speed: { min: 0.5, max: 1 },
      },
    },

    // Configuración de la interactividad con el mouse
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // El mouse "agarra" las partículas cercanas
        },
        onClick: {
          enable: true,
          mode: "push", // Al hacer clic, "empuja" partículas (crea nuevas)
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4, // Cuántas partículas se crean al hacer clic
        },
      },
    },
    // Detección de retina para mayor calidad en pantallas de alta resolución
    detectRetina: true,
  },
});