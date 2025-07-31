# Mi Aplicación Angular 🚀

Una aplicación web básica construida con Angular 19 que demuestra las funcionalidades principales del framework.

## 🚀 Despliegue en Vercel

### ⚡ Despliegue automático:

1. **Fork o clona este repositorio**
2. **Conecta con Vercel**:
   - Ve a [Vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Importa este repositorio
   - Vercel detectará automáticamente que es una aplicación Angular

3. **Configuración automática**:
   - Vercel usará la configuración de `vercel.json`
   - El comando de build será: `npm run vercel-build`
   - La carpeta de salida será: `dist/mi-app-angular/browser`

4. **Variables de entorno** (opcional):
   - No se requieren variables de entorno especiales
   - La aplicación usa la API pública de GitHub

### 🔧 Despliegue manual:

```bash
# Instalar Vercel CLI
npm i -g vercel

# En el directorio del proyecto
cd mi-app-angular

# Desplegar
vercel

# Para deploys de producción
vercel --prod
```

## 🌟 Características

### ✨ Funcionalidades implementadas:

- **🔍 Búsqueda de usuarios de GitHub**: Busca cualquier usuario y ve sus repositorios
- **👤 Perfil completo**: Avatar, nombre, bio, estadísticas y enlaces
- **📊 Filtros avanzados**: Por lenguaje, fecha, estrellas, nombre
- **📦 Información detallada**: Cada repo muestra estrellas, forks, lenguaje, topics
- **🎨 Diseño moderno**: Responsive design con tema GitHub-style
- **⚡ SSR optimizado**: Server-Side Rendering para mejor SEO y performance

### 🎨 Tecnologías utilizadas:

- **Angular 19**: Framework principal
- **TypeScript**: Lenguaje de programación
- **CSS3**: Estilos modernos con variables CSS
- **HTML5**: Estructura semántica
- **Angular CLI**: Herramientas de desarrollo

## 🚀 Instalación y ejecución

### Prerrequisitos:

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Pasos para ejecutar:

1. **Clonar o navegar al directorio del proyecto**

   ```bash
   cd mi-app-angular
   ```

2. **Instalar dependencias** (si es necesario)

   ```bash
   npm install
   ```

3. **Ejecutar la aplicación en modo desarrollo**

   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:4200`
   - Se abrirá automáticamente en tu navegador predeterminado

## 📱 Estructura de la aplicación

```
src/
├── app/
│   ├── app.component.ts      # Componente principal con lógica
│   ├── app.component.html    # Template HTML
│   ├── app.component.css     # Estilos del componente
│   ├── app.config.ts         # Configuración de la app
│   └── app.routes.ts         # Configuración de rutas
├── styles.css                # Estilos globales
└── main.ts                   # Punto de entrada de la aplicación
```

## 🎯 Características de cada sección

### 🏠 Inicio

- **Contador interactivo**: Botones para incrementar, decrementar y resetear
- **Lista de tareas**: Agregar nuevas tareas, marcar como completadas, eliminar
- Demostración de data binding y event handling

### ℹ️ Acerca de

- Información sobre las tecnologías utilizadas
- Lista de características implementadas
- Badges de tecnologías

### 📧 Contacto

- Formulario con validación
- Campos: nombre, email, mensaje
- Mensaje de confirmación tras envío
- Auto-reset del formulario

## 🛠️ Comandos útiles

```bash
# Ejecutar en modo desarrollo
ng serve

# Ejecutar y abrir en navegador
ng serve --open

# Construir para producción
ng build

# Ejecutar tests
ng test

# Ejecutar e2e tests
ng e2e

# Generar componente
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio
```

## 🎨 Personalización

### Modificar colores:

Los colores principales se definen en `app.component.css` usando variables CSS:

```css
:host {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --success-color: #10b981;
  --danger-color: #ef4444;
  /* ... más variables */
}
```

### Agregar nueva funcionalidad:

1. Modifica `app.component.ts` para agregar nuevas propiedades y métodos
2. Actualiza `app.component.html` para incluir la nueva UI
3. Ajusta `app.component.css` para los estilos

## 📚 Conceptos de Angular demostrados

- **Componentes**: Estructura modular de la aplicación
- **Templates**: Sintaxis de template de Angular
- **Data Binding**: Interpolación `{{}}`, property binding `[]`, event binding `()`
- **Directivas**: `*ngIf`, `*ngFor`, `[class]`
- **FormsModule**: Para formularios reactivos
- **Interfaces TypeScript**: Para tipado fuerte
- **Lifecycle**: Manejo del ciclo de vida del componente

## 🌐 Navegación

La aplicación utiliza un sistema de navegación simple basado en una propiedad `currentView` que controla qué vista se muestra:

- **Inicio**: Vista principal con contador y lista de tareas
- **Acerca de**: Información sobre la aplicación
- **Contacto**: Formulario de contacto

## 📱 Responsive Design

La aplicación está optimizada para diferentes tamaños de pantalla:

- **Desktop**: Layout completo con sidebar
- **Tablet**: Layout adaptado
- **Mobile**: Layout en columna con navegación vertical

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar esta aplicación:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Desarrollado con ❤️ usando Angular 19**
