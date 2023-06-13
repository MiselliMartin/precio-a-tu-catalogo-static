document.addEventListener("DOMContentLoaded", () => {
    const redirectToRender = () => {
      window.location.href = "https://precio-a-tu-catalogo.onrender.com/"; // Reemplaza "https://your-render-app-url" con la URL de tu aplicación en Render
    };
  
    const checkAppStatus = () => {
      fetch("https://precio-a-tu-catalogo.onrender.com/status") // Reemplaza "https://your-render-app-url/status" con la URL del punto final /status de tu aplicación en Render
        .then(response => {
          if (response.ok) {
            redirectToRender();
          } else {
            setTimeout(checkAppStatus, 5000); // Espera 5 segundos y vuelve a verificar el estado de la aplicación
          }
        })
        .catch(() => {
          setTimeout(checkAppStatus, 5000); // Si hay un error en la solicitud, espera 5 segundos y vuelve a verificar el estado de la aplicación
        });
    };
  
    setTimeout(() => {
      checkAppStatus();
    }, 60000); // Espera 1 minuto antes de mostrar un mensaje de error
  
    // Opcional: Puedes mostrar un mensaje de carga o spinner mientras se verifica el estado de la aplicación
  
    // Opcional: Puedes agregar un botón "Actualizar" para permitir al usuario verificar manualmente el estado de la aplicación en cualquier momento
  });
  