# Instrucciones para Desplegar en Vercel

## ✅ El proyecto está listo para desplegar

### Opción 1: Desde la Web (Más Fácil)

1. **Ve a [vercel.com](https://vercel.com)**
   - Inicia sesión con GitHub, GitLab o email

2. **Crea un nuevo proyecto**
   - Haz clic en "Add New Project"
   - Si tienes el código en GitHub/GitLab, conéctalo
   - Si no, puedes arrastrar la carpeta `project 2` directamente

3. **Configuración automática**
   - Vercel detectará automáticamente que es un proyecto Vite
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `project 2` (si está en un subdirectorio)

4. **Despliega**
   - Haz clic en "Deploy"
   - Espera 1-2 minutos
   - ¡Listo! Obtendrás una URL como: `tu-proyecto.vercel.app`

### Opción 2: Desde la Terminal (CLI)

```bash
# 1. Instala Vercel CLI globalmente
npm install -g vercel

# 2. Navega al directorio del proyecto
cd "project 2"

# 3. Inicia el despliegue
vercel

# 4. Sigue las instrucciones:
#    - ¿Set up and deploy? Y
#    - ¿Which scope? (tu cuenta)
#    - ¿Link to existing project? N (primera vez)
#    - ¿Project name? (presiona Enter para el nombre por defecto)
#    - ¿Directory? ./ (o "project 2" si estás en el directorio padre)
#    - ¿Override settings? N

# 5. Para producción:
vercel --prod
```

## 📝 Notas Importantes

- ✅ El archivo `vercel.json` ya está configurado
- ✅ El build funciona correctamente (`npm run build`)
- ✅ No se requieren variables de entorno
- ✅ Todos los assets en `/public` se servirán correctamente

## 🔗 Después del Despliegue

- Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`
- Cada push a la rama principal se desplegará automáticamente
- Puedes configurar un dominio personalizado desde el dashboard de Vercel



