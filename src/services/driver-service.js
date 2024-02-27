import { driver } from "driver.js";

export const handlerDriver = () => {
    const driverInstance = driver({
        showProgress: true,
        steps: [
          { element: '#nome', popover: { title: 'Nome', description: 'Aqui você deve informar o seu nome ou apelido 😊' } },
          { element: '#comidaFavorita', popover: { title: 'Comida Favorita', description: 'Aqui você deve informar a sua comida favorita 😋' } },
          { element: '#btn-submit', popover: { title: 'Enviar', description: 'Para enviar o seu nome e(ou) a sua comida favorita basta clicar neste botão!' } },
        ]
      });
      
      driverInstance.drive();
  };