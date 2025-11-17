---
sidebar_position: 1
---

# Guia de inicio

Bienvenido a la guia de incio de CronoSENA.

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

Gestionar Fichas y Programas
Acceda a un subconjunto de recursos en comparación con el panel de administración.
Trabajar dentro de cuatro grupos de navegación (sin gestion academicagrupo) PlanificacionAcademicaPanelProvider.php:69-84

### Diagrama de flujo del panel del instructor ( /instructor)
Utiliza un instructorsistema de autenticación independiente para el acceso específico de los instructores . Los instructores pueden:

- Consulta su panel de control
- Edita su perfil a través de EditProfilela página
- Acceda a la función de restablecimiento de contraseña