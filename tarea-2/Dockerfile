# Imagen base de Node.js
FROM node:18-alpine AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos y paquetes
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# Imagen para servir la aplicación
FROM nginx:alpine

# Copiar los archivos estáticos al servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
