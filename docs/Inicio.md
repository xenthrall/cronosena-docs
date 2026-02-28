---
sidebar_position: 3
---

# Inicio

Bienvenido a la sección de **Desarrollo** de CronoSENA.  
Este apartado reúne toda la información necesaria para trabajar con el proyecto en un entorno local.

---

## ¿Qué es esta sección?

Aquí encontrarás la información esencial para:

- Configurar tu entorno de desarrollo.
- Ejecutar el proyecto en local.
- Conocer la estructura general de la aplicación.
- Entender dónde se ubican los archivos y módulos más importantes.

---

## ¿Para quién está dirigida?

- Desarrolladores que van a modificar o mantener el proyecto.  
- Colaboradores que necesitan correr CronoSENA en su máquina.  
- Usuarios técnicos que requieren revisar o probar funcionalidades.

---
## Estructura general (vista rápida)

```txt
CronoSENA
|_app/          Código principal y lógica del sistema
|_config/       Configuración del framework y servicios
|_resources/    Vistas, componentes y assets
|_routes/       Definición de rutas de la aplicación
|_database/     Migraciones y seeders
```
---
## ¿Por dónde empezar?

 **[Ir a Instalación Local](./instalacion-local)**  
Este es el primer paso para tener CronoSENA funcionando en tu entorno.

---
# Arquitectura Principal

**CronoSENA** es una plataforma administrativa basada en Laravel y construida sobre Filament 4.0 que proporciona tres paneles distintos orientados al usuario:

| **Panel**                            | **Ruta de la URL** | **Usuarios principales**    | **Objetivo**                                                                                      |
| ------------------------------------ | ------------------ | --------------------------- | ------------------------------------------------------------------------------------------------- |
| **Panel de administración**          | `/admin`           | Administradores de sistemas | Gestión completa del sistema, administración de usuarios y roles, CRUD integral de Ficha.         |
| **Panel de Planificación Académica** | `/planificacion`   | Planificadores académicos   | Planificación académica, gestión de fichas con alcance definido, panel de control de cronogramas. |
| **Panel de instructores**            | `/instructor`      | Instructores                | Gestión de perfiles y visualización de ejecuciones asignadas.                                     |


La aplicación se centra en las Fichas : instancias de programas de formación con fechas de inicio y fin específicas, competencias asignadas e instructores asociados. Cada Ficha realiza un seguimiento del progreso en la ejecución de las competencias, medido en horas, con validaciones para evitar conflictos de horarios entre los instructores.

[src/resources/views/welcome.blade.php](https://github.com/xenthrall/CronoSENA/blob/main/src/resources/views/welcome.blade.php)
(1 - 313)

<div className="fileLinksContainer">

  <a
    href="https://github.com/xenthrall/CronoSENA/blob/main/src/resources/views/welcome.blade.php"
    target="_blank"
    className="fileBadge"
  >
    <img src="/img/github.png" width="16" className="fileBadgeIcon" />
    src/resources/views/welcome.blade.php
    <span className="fileBadgeRange">1–313</span>
  </a>

  <a
    href="https://github.com/xenthrall/CronoSENA/blob/main/bootstrap/proveedores.php"
    target="_blank"
    className="fileBadge"
  >
    <img src="/img/github.png" width="16" className="fileBadgeIcon" />
    bootstrap/proveedores.php
    <span className="fileBadgeRange">1–9</span>
  </a>

</div>




bootstrap/proveedores.php
1-9

---
# Flujo de uso de la aplicación
CronoSENA implementa una arquitectura de paneles múltiples con una página de inicio central que dirige a los usuarios a tres interfaces administrativas distintas según su rol (welcome.blade.php). El flujo de la aplicación sigue este patrón:

Punto de entrada y selección de panel
Los usuarios comienzan en la página de bienvenida ( /) que sirve como centro de navegación ```welcome.blade.php```. Esta página muestra tres botones de acceso:
```
Administración General → /adminpanel
Planificación Académica → /planificacionpanel
Espacio del Instructor → /instructorpanel
```

CronoSENA implementa tres paneles Filament independientes, cada uno registrado como proveedor de servicios y configurado con rutas, mecanismos de autenticación y conjuntos de recursos distintos.

![paneles](/img/arquitectura.png)


# Flujos específicos del panel

### Flujo del panel de administración ( /admin)

El panel de administración utiliza el websistema de autenticación predeterminado y proporciona acceso completo al sistema (AdminPanelProvider.php:31-33) . Los usuarios con los permisos adecuados pueden:

Consulta y gestiona las fichas (programas de formación) a través del ListFichas→ ManageFichacentro de control.
Recursos para programas , instructores , usuarios y roles de acceso
Navegue a través de cinco grupos organizados: gestion academica, programas, fichas, instructores, y sistema AdminPanelProvider.php:72-92

### Planificación del flujo del panel ( /planificacion)
Este panel comparte la webvigilancia, pero proporciona acceso restringido centrado en la planificación académica (PlanificaciónAcademicaPanelProvider.php:32-34 ). Los usuarios pueden:

- Gestionar Fichas y Programas
- Acceda a un subconjunto de recursos en comparación con el panel de administración.
- Trabajar dentro de cuatro grupos de navegación (sin gestion academicagrupo) PlanificacionAcademicaPanelProvider.php:69-84

### Diagrama de flujo del panel del instructor ( /instructor)
Utiliza un instructorsistema de autenticación independiente para el acceso específico de los instructores . Los instructores pueden:

- Consulta su panel de control
- Edita su perfil a través de EditProfilela página
- Acceda a la función de restablecimiento de contraseña