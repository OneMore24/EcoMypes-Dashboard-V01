// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- Base de datos de prueba actualizada ---
    // Ahora incluye la contraseña y la URL del dashboard para cada usuario.
    const dbUsuarios = {
        // MYPE de prueba
        "808080141414": {
            nombre: "Bodega Mi Bodeguita",
            rubro: "Venta minorista de abarrotes",
            ubicacion: "Breña, Lima",
            rol: "mype",
            password: "rosa123", // Contraseña de Rosa
            dashboardUrl: "dashboard_mype.html" // Su panel
        },
        // Proveedor de prueba
        "141414151515": {
            nombre: "Proveedor de Bebidas S.A.C.",
            rubro: "Distribución de bebidas y licores",
            ubicacion: "San Miguel, Lima",
            rol: "proveedor",
            password: "juan123", // Contraseña de Juan
            dashboardUrl: "dashboard_proveedor.html" // Su panel
        }
    };

    // Obtenemos los elementos del HTML con los que vamos a trabajar
    const loginForm = document.getElementById('loginForm');
    const rucInput = document.getElementById('ruc');
    const passwordInput = document.getElementById('password'); // <-- Nuevo: obtenemos el input de la contraseña
    const messageContainer = document.getElementById('message-container');

    // Agregamos un "escuchador" al formulario para que cuando el usuario le dé a "Ingresar",
    // se ejecute nuestra función.
    loginForm.addEventListener('submit', function(event) {
        // Prevenimos que el formulario se envíe de la forma tradicional (recargando la página)
        event.preventDefault();

        const ruc = rucInput.value;
        const password = passwordInput.value; // <-- Nuevo: obtenemos el valor de la contraseña
        
        // Limpiamos mensajes anteriores
        messageContainer.innerHTML = '';
        messageContainer.className = 'message-container';

        // Buscamos el RUC en nuestra base de datos de prueba
        const usuario = dbUsuarios[ruc];

        // --- Lógica de validación mejorada ---
        if (usuario) {
            // El RUC existe, ahora comprobamos la contraseña
            if (usuario.password === password) {
                // ¡ÉXITO! La contraseña también coincide.
                messageContainer.classList.add('success');
                messageContainer.innerHTML = `
                    <p><strong>¡Acceso Concedido!</strong></p>
                    <p>Bienvenido, ${usuario.nombre}.</p>
                    <p><small>Serás redirigido a tu panel en un momento...</small></p>
                `;

                // --- La magia de la redirección ---
                // Esperamos 2 segundos para que el usuario lea el mensaje y luego lo redirigimos.
                setTimeout(() => {
                    window.location.href = usuario.dashboardUrl;
                }, 2000); // 2000 milisegundos = 2 segundos

            } else {
                // El RUC es correcto, pero la contraseña no.
                messageContainer.classList.add('error');
                messageContainer.innerHTML = `<p><strong>Error de Acceso</strong></p><p>La contraseña es incorrecta. Por favor, inténtalo de nuevo.</p>`;
            }
        } else {
            // El RUC no se encuentra en nuestra base de datos.
            messageContainer.classList.add('error');
            messageContainer.innerHTML = `
                <p><strong>RUC no registrado</strong></p>
                <p>Para registrarte en SUNAT y formalizar tu negocio, puedes seguir estos pasos:</p>
                <ul>
                    <li>1. Acércate a un Centro de Servicios al Contribuyente.</li>
                    <li>2. Presenta tu DNI y un recibo de servicio.</li>
                    <li>3. Completa el formulario de inscripción.</li>
                </ul>
            `;
        }
    });
});