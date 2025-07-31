# 🚀 Guía de Despliegue en Vercel

## 📋 Pasos para desplegar en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. **Preparar el repositorio**:

   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Conectar con Vercel**:

   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Click en "New Project"
   - Importa este repositorio

3. **Configuración automática**:
   - Vercel detectará Angular automáticamente
   - Usará la configuración de `vercel.json`
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/mi-app-angular/browser`

### Opción 2: Despliegue con Vercel CLI

1. **Instalar Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Iniciar sesión**:

   ```bash
   vercel login
   ```

3. **Desplegar**:

   ```bash
   # Para desarrollo/preview
   vercel

   # Para producción
   vercel --prod
   ```

## 🔧 Archivos de configuración incluidos

- ✅ `vercel.json` - Configuración principal de Vercel
- ✅ `.vercelignore` - Archivos a ignorar en el despliegue
- ✅ `server.js` - Servidor Node.js para Vercel
- ✅ `build.sh` - Script de construcción opcional

## 🌍 Variables de entorno

No se requieren variables de entorno especiales para esta aplicación, ya que usa la API pública de GitHub.

## 📊 Optimizaciones incluidas

- ✅ Cache headers para assets estáticos
- ✅ Compresión automática
- ✅ Server-Side Rendering (SSR)
- ✅ Optimización de bundles
- ✅ Lazy loading

## 🐛 Solución de problemas

### Build falla en Vercel:

1. Verificar que `package.json` tenga `vercel-build` script
2. Verificar que Node.js version sea >= 18
3. Verificar que no haya errores TypeScript

### Aplicación no carga:

1. Verificar que `vercel.json` apunte al output correcto
2. Verificar que las rutas estén configuradas correctamente

### API de GitHub no funciona:

1. Verificar que la aplicación esté usando HTTPS
2. Verificar que no haya errores CORS

## 📈 Métricas esperadas

- **Lighthouse Score**: 90+ en todas las categorías
- **Tiempo de carga**: < 3 segundos
- **First Contentful Paint**: < 1.5 segundos
- **Bundle size**: ~320KB inicial

## 🔗 Enlaces útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Angular + Vercel](https://vercel.com/guides/deploying-angular-with-vercel)
- [GitHub API Docs](https://docs.github.com/en/rest)
