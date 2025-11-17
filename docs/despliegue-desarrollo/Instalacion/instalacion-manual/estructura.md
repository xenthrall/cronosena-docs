---
sidebar_position: 3
---



# Arquitectura de CronoSENA

 CronoSENA sigue una arquitectura estructurada que facilita el mantenimiento, la escalabilidad y la comprensión global del sistema. Cada directorio cumple un rol definido dentro de la aplicación, permitiendo separar responsabilidades y garantizar un flujo de desarrollo ordenado. La siguiente sección detalla la estructura completa del proyecto, acompañada de imágenes que ilustran su organización interna.
 
 ```
 ├── src/
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── lang/
│   ├── node_modules/
│   ├── public/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── tests/
│   ├── vendor/
│   ├── .editorconfig
│   ├── .env
│   ├── .env.example
│   ├── .gitattributes
│   ├── .gitignore
│   ├── artisan
│   ├── composer.json
│   ├── composer.lock
│   ├── package-lock.json
│   ├── package.json
│   ├── phpunit.xml
│   ├── postcss.config.js
│   ├── README.md
│   ├── vite.config.js
├── .gitignore
├── docker-compose.dev.yml.example
├── docker-compose.prod.yml.example
├── Dockerfile
├── LICENSE
├── Microsoft.PowerShell_profile.ps1
├── package-lock.json
├── README.md
 ```

 # Estructura del proyecto Docusaurus

A continuación se describen las carpetas principales del proyecto y para qué sirven cada una.

📁 app/  
Contiene toda la lógica del backend: modelos, controladores, policies, providers y todos los paneles, recursos y páginas creadas por Filament.

📁 bootstrap/  
Inicializa el proyecto. Laravel carga su núcleo aquí y genera archivos de caché para optimización.

📁 config/  
Archivos de configuración global del sistema y de Filament (paneles, plugins, autenticación, etc.).

📁 database/  
Migraciones, seeders y factories. Define la estructura de la base de datos y sus datos iniciales.

📁 lang/  
Traducciones del sistema y de Filament. Maneja los textos en diferentes idiomas.

📁 node_modules/  
Dependencias de Node necesarias para Vite, Tailwind y el frontend en general.

📁 public/  
Carpeta accesible públicamente. Incluye index.php y los assets generados del frontend.

📁 resources/  
Vistas Blade, archivos de frontend, componentes, JS, CSS y personalizaciones de Filament.

📁 routes/  
Rutas web, API, consola y canales. Filament también registra rutas aquí para cada panel.

📁 storage/  
Logs, caché, vistas compiladas y archivos cargados por usuarios o Filament.

📁 tests/  
Pruebas unitarias y funcionales del sistema.

📁 vendor/  
Dependencias PHP del proyecto, incluyendo Laravel, Filament y otros paquetes instalados.

📄 .editorconfig  
Reglas de formato del código para garantizar consistencia entre editores.

📄 .env  
Variables sensibles y de entorno (base de datos, mail, claves, etc.).

📄 .env.example  
Plantilla para generar nuevos entornos fácilmente.

📄 .gitattributes  
Reglas avanzadas para Git, como normalización de archivos.

📄 .gitignore  
Archivos y carpetas que deben excluirse del control de versiones.

📄 artisan  
CLI de Laravel. Permite ejecutar comandos de generación, migraciones, cachés y tareas de Filament.

📄 composer.json  
Lista de dependencias PHP, scripts y configuración principal del proyecto.

📄 composer.lock  
Estado exacto de las dependencias instaladas.

📄 package-lock.json  
Estado exacto de las dependencias Node instaladas.

📄 package.json  
Dependencias de frontend, scripts y configuración de Vite.

📄 phpunit.xml  
Configuración del sistema de pruebas automáticas.

📄 postcss.config.js  
Configuración de PostCSS, utilizado por Tailwind.

📄 README.md  
Documentación principal del proyecto.

📄 vite.config.js  
Configuración de Vite para compilar el frontend, incluyendo integraciones con Filament.

📄 docker-compose.dev.yml.example  
Plantilla de Docker para entorno de desarrollo.

📄 docker-compose.prod.yml.example  
Plantilla de Docker para entorno de producción.

📄 Dockerfile  
Definición de la imagen del proyecto para Docker.

📄 LICENSE  
Licencia del proyecto.

📄 Microsoft.PowerShell_profile.ps1  
Configuración personalizada de tu terminal PowerShell.

📄 package-lock.json  
Archivo repetido en la raíz con el estado exacto de dependencias Node.

📄 README.md  
Documentación raíz del proyecto.



