# Devsu-Practica-Angular

## Sobre el Proyecto

Este proyecto ha sido desarrollado por Jaime Benalcazar como una solución moderna para la gestión de productos financieros utilizando Angular. Destaca por su interfaz intuitiva y funcionalidades avanzadas, diseñadas para ofrecer una experiencia de usuario óptima.

## Características

- **Listado y gestión de productos financieros:** Permite a los usuarios visualizar, agregar, editar y eliminar productos.
- **Interfaz de Usuario Amigable:** Diseño responsive y fácil de navegar.
- **Notificaciones y Validaciones:** Implementa notificaciones para acciones de usuario y validaciones para el ingreso de datos.

## Tecnologías Utilizadas

- Angular 15.2.0
- TypeScript 4.9.4
- Jest para pruebas unitarias

## Demostración en Vivo

Este proyecto está desplegado y disponible para su acceso público en Firebase. Puedes ver la aplicación en funcionamiento a través del siguiente enlace:

[Devsu-Practica-Angular en Firebase](https://devsu-practica-angular.web.app)

## Instalación y Ejecución

Para ejecutar este proyecto localmente:

```bash
npm install
npm start
```

Para construir el proyecto para producción:

```bash
npm run build
```

Para ejecutar las pruebas unitarias:

```bash
npm run test
```

### Resultados de los Test

| File                                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                 |
| ---------------------------------------- | ------- | -------- | ------- | ------- | --------------------------------- |
| All files                                | 79.91   | 55.88    | 70.58   | 79.48   |                                   |
| core/models                              | 81.81   | 100      | 60      | 81.81   |                                   |
| financial-product.model.ts               | 81.81   | 100      | 60      | 81.81   | 38-43                             |
| core/services                            | 54.38   | 40       | 38.88   | 52.72   |                                   |
| financial-products.service.ts            | 63.41   | 66.66    | 53.84   | 62.5    | 44-54,72-73,117-128               |
| notification.service.ts                  | 31.25   | 0        | 0       | 26.66   | 20-62                             |
| features/product-list                    | 93.75   | 60       | 88.88   | 95.08   |                                   |
| product-list.component.html              | 100     | 100      | 100     | 100     |                                   |
| product-list.component.ts                | 93.65   | 60       | 88.88   | 95      | 52-55                             |
| features/product-registration            | 82.35   | 64.28    | 82.35   | 82.08   |                                   |
| product-registration.component.html      | 100     | 100      | 100     | 100     |                                   |
| product-registration.component.ts        | 82.08   | 64.28    | 82.35   | 81.81   | 92-94,104-105,129,132,167,183-191 |
| shared/components/banco-logo             | 100     | 100      | 100     | 100     |                                   |
| banco-logo.component.html                | 100     | 100      | 100     | 100     |                                   |
| banco-logo.component.ts                  | 100     | 100      | 100     | 100     |                                   |
| shared/components/notification-confirmar | 100     | 100      | 100     | 100     |                                   |
| notification-confirmar.component.html    | 100     | 100      | 100     | 100     |                                   |
| notification-confirmar.component.ts      | 100     | 100      | 100     | 100     |                                   |
| shared/components/notification-pop-up    | 61.53   | 100      | 33.33   | 58.33   |                                   |
| notification-pop-up.component.html       | 100     | 100      | 100     | 100     |                                   |
| notification-pop-up.component.ts         | 58.33   | 100      | 33.33   | 54.54   | 21-28                             |

### Interfaz de Usuario

Interfaz Principal
![Interfaz Principal](screenshots/Captura%201.JPG)

Gestión de Productos
![Gestión de Productos](screenshots/Captura%20.JPG)

Errores en el Formulario
![Errores Formulario](screenshots/Captura%202.JPG)

Notificaciones
![Notificaciones](screenshots/Captura%203.JPG)

Búsqueda y Paginación
![Búsqueda y Paginación](screenshots/Captura%208.JPG)

Eliminar Producto
![Eliminar Producto](screenshots/Captura%207.JPG)

Editar Producto
![Editar Producto](screenshots/Captura%206.JPG)

## Contribuciones

Las contribuciones son bienvenidas. Por favor, realiza un fork del proyecto y envía un pull request con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo `LICENSE` para obtener más detalles.

## Acerca del Desarrollador

**Jaime Benalcazar** - Apasionado por el desarrollo de soluciones tecnológicas eficientes y efectivas.
