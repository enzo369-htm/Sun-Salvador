# 🔐 Cómo Subir el Proyecto a GitHub

## El problema:
GitHub requiere autenticación para subir archivos. Tienes 3 opciones:

---

## ✅ Opción 1: GitHub Desktop (MÁS FÁCIL)

1. Descarga [GitHub Desktop](https://desktop.github.com/) si no lo tienes
2. Abre GitHub Desktop
3. **File → Add Local Repository**
4. Selecciona la carpeta: `/Users/macbookpro/Desktop/Sun Salvador /project 2`
5. Haz clic en **"Publish repository"**
6. Selecciona el repositorio `Sun-Salvador`
7. Haz clic en **"Publish repository"**
8. ¡Listo! Todos los archivos se subirán automáticamente

---

## ✅ Opción 2: Token de Acceso Personal (HTTPS)

### Paso 1: Crear el Token
1. Ve a: https://github.com/settings/tokens
2. Haz clic en **"Generate new token" → "Generate new token (classic)"**
3. **Nombre**: `Vercel Deploy` (o cualquier nombre)
4. **Expiration**: 90 days (o el que prefieras)
5. **Selecciona el scope**: ✅ `repo` (marca la casilla completa)
6. Haz clic en **"Generate token"**
7. **⚠️ COPIA EL TOKEN** (solo se muestra una vez, guárdalo bien)

### Paso 2: Usar el Token
Cuando Git te pida usuario y contraseña:
- **Usuario**: `enzo369-htm`
- **Contraseña**: Pega el token que copiaste (NO tu contraseña de GitHub)

Ejecuta:
```bash
cd "/Users/macbookpro/Desktop/Sun Salvador /project 2"
git push -u origin main
```

---

## ✅ Opción 3: SSH (Si ya tienes claves SSH configuradas)

1. Cambia la URL del remote:
```bash
cd "/Users/macbookpro/Desktop/Sun Salvador /project 2"
git remote set-url origin git@github.com:enzo369-htm/Sun-Salvador.git
git push -u origin main
```

---

## 🎯 Recomendación

**Usa GitHub Desktop** (Opción 1) - Es la forma más fácil y visual. No necesitas escribir comandos ni tokens.

---

## 📝 Después de subir a GitHub:

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio `Sun-Salvador`
4. Vercel detectará automáticamente que es Vite
5. Haz clic en **"Deploy"**
6. ¡Tu sitio estará en línea en 1-2 minutos! 🚀

