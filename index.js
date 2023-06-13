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

  const checkStatusInterval = () => {
    checkAppStatus(); // Verifica el estado de la aplicación

    setTimeout(checkStatusInterval, 5000); // Espera 5 segundos y vuelve a verificar el estado de la aplicación
  };

  checkStatusInterval(); // Inicia el intervalo de verificación del estado de la aplicación
});
