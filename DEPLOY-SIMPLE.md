# 🚀 Cómo desplegar en Vercel - PASO A PASO

## ✅ Verificación previa

1. **Verifica que tu código funciona localmente**:
   ```bash
   npm run build
   ```
   - Debe completarse sin errores fatales (warnings están bien)

## 🔄 Pasos para desplegar

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub**:

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Ve a Vercel**:

   - Abre [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Click "New Project"

3. **Importa tu repositorio**:

   - Busca tu repositorio
   - Click "Import"

4. **Configuración automática**:
   - Framework: Angular (auto-detectado)
   - Build Command: `npm run build`
   - Output Directory: `dist/mi-app-angular/browser`
   - Click "Deploy"

### Opción 2: Despliegue con CLI

1. **Instala Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión**:

   ```bash
   vercel login
   ```

3. **Despliega**:
   ```bash
   vercel
   ```

## 🛠️ Si hay problemas

### Error: "Build failed"

- Ejecuta `npm run build` localmente para verificar errores
- Asegúrate de que `package.json` tenga el script `build`

### Error: "No output directory"

- Verifica que `vercel.json` tenga `outputDirectory: "dist/mi-app-angular/browser"`

### Error: "404 en rutas"

- Verifica que `vercel.json` tenga la configuración de `rewrites`

## 📁 Archivos importantes

- ✅ `vercel.json` - Configuración de Vercel
- ✅ `package.json` - Scripts de construcción
- ✅ `dist/mi-app-angular/browser/` - Archivos de salida (generados por `npm run build`)

## 🎯 Configuración actual

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/mi-app-angular/browser",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

¡Tu aplicación debería desplegarse correctamente en Vercel!
