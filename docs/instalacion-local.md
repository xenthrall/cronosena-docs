---
sidebar_position: 2
---

# Instalacion local

Antes de correr **CronoSENA** de manera local, asegúrate de contar con las siguientes herramientas instaladas en tu sistema:

##  Instalación de herramientas necesarias
- **Git**: Descárgalo e instálalo desde [git-scm.com](https://git-scm.com/downloads).
- **Visual studio code**: Descárgalo e instálalo desde [code.visualstudio.com](https://code.visualstudio.com/)
- **nvm** Para el control de versiones de node.js [nvm/github.com](https://github.com/coreybutler/nvm-windows/releases)
- **node.js** Descárgalo e instálalo desde: [nodejs.org](https://nodejs.org/es/download)
- **npm** Cuando instalas Node.js, npm viene instalado automáticamente.No necesitas instalar npm aparte.
- **composer** Descárgalo e instálalo desde: [compose.org](https://getcomposer.org/download/)   
- **php** Descarga el lenguaje de programacion en [php.com](https://windows.php.net/download/)
    (En Windows es recomendable instalarlo con XAMPP, WampServer o Laragon para evitar configuraciones manuales).
    Si deseas instalarlo de manera manual aqui te dejo los pasos para hacerlo:

# Proceso de Instalación

Esta guía explica cómo instalar y ejecutar **CronoSENA** en tu entorno local utilizando PHP, Composer y Node.js.  
Es la instalación tradicional (sin Docker).

---

## 2. Clonar el Repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/xenthrall/CronoSENA.git
```
---
## 3. Configurar Variables de Entorno

copia el archivo de ejemplo para crear tu archivo ```.env```:

```bash
cp .env.example .env
```

Edita las variables necesarias como:
```bash
- APP_NAME=CronoSENA
- APP_ENV=local
- APP_DEBUG=true
- APP_KEY=
- APP_URL=http://localhost:8080

- DB_CONNECTION=sqlite
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=cronosena
- DB_USERNAME=root
- DB_PASSWORD=
```
---

# 4. Instalar Dependencias del Backend

Dentro del directorio src ejecuta:
```bash
composer install
```
Genera la clave criptográfica:
```bash
php artisan key:generate
```
Una vez tengas listo la clave criptografica vamos con un paso importante y es instalar las dependencias de npm:

Con el siguiente comando 
```bash
npm install
```
Ejecuta migraciones:
```bash
php artisan migrate
```
#### Instalacion y documentacion de Filament y requisitos para funcionar:


- [Tailwind CSS v4.0+](https://tailwindcss.com/docs/installation/using-vite)

- [Filamentphp.com](https://filamentphp.com/docs/4.x/introduction/installation)

- [Laravel v11.28+](https://laravel.com/docs/12.x/installation)

---

## 5. Iniciar el Servidor de Desarrollo
```bash
php artisan serve --port=8080
```
---
## 6. Acceder al Sistema

Abre en tu navegador:

👉 http://localhost:8080

