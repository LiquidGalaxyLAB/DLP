/**
 * Created by xavi on 12/06/16.
 */
angular.module('DLPApp').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'INFORMATION': 'Information',
        'LOGISTICCENTER': 'Logistic Center',
        'DRONES': 'Drones',
        'DESCRIPTION': 'Description',
        'ADDRESS': 'Address',
        'PICTURE': 'Picture',
        'LATITUDE': 'Latitude',
        'LONGITUDE': 'Longitude',
        'ALTITUDE': 'Altitude',
        'RADIUS': 'Radius',
        'DROPPOINTS': 'Drop points',
        'DROPPOINT': 'Drop point',
        'EDIT': 'Edit',
        'CANCEL': 'Cancel',
        'CREATE_NEW': 'Create new',
        'SAVE': 'Save',
        'NAME': 'Name',
        'CITY': 'City',
        'DELETE': 'Delete',
        'TRANSPORTS': 'Deliveries',
        'DRONE': 'Drone',
        'PLATE': 'Plate',
        'ICON': 'Icon',
        'MODEL': 'Model',
        'ISTRANSPORTING': 'Is transporting?',
        'BATTERY': 'Battery life',
        'DELETE_ALERT': 'Are you sure you want to delete this',
        'TRANSPORT': 'Delivery',
        'PACKAGE': 'Package',
        'SEND_PACKAGE': 'Send package',
        'WELCOME': 'Welcome to',
        'SELECT_CITY': 'Select a city',
        'ERROR_MESSAGE_1': 'Please, select one of the cities available in the dropdown',
        'SEARCH': 'Search',
        'SELECT': 'Select',
        'REFRESH_WEATHER': 'Refresh weather information',
        'STYLE': 'Style',
        'ADD_CITY': 'Add new city',
        'COORDINATES': 'Coordinates',
        'INFORMATION_COORD': 'Press the map or left click in the map to get the Coordinates',
        'PLAY_TOUR': 'Play Tour',
        'STOP_TOUR': 'Stop Tour',
        'ADMINISTRATION': 'Administration',
        'DEMO': 'Demonstration',
        'CONFIGURATION': 'Configuration',
        'ADD': 'Add',
        'ACCESS': 'Access',
        'LOGISTICCENTERS': 'Logistic centers',
        'INFO_DELETE_LC': 'Deleting this Logistic Center all Drop Points and Drones related with it will be deleted too.',
        'ENGLISH': 'English',
        'SPANISH': 'Spanish',
        'WEATHER': 'Weather',
        'FLYING_MAX_ALTITUDE': 'Flying max altitude',
        'ERROR': 'Error',
        'SUCCESS': 'Correcto',
        'ERROR_UPDATING_FLYING_ALT': 'Flying altitude cannot be updated with this value',
        'SUCCESS_UPDATING_FLYING_ALT': 'Flying altitude have been updated',
        'UPDATE': 'Update',
        'UNSELECT': 'Unselect',
        'KML_MANAGER': 'KML Administration',
        'REFRESH': 'Refresh',
        'WAITING': 'Ready',
        'DELIVERING': 'Delivering'
    });

    $translateProvider.translations('es', {
        'INFORMATION': 'Información',
        'LOGISTICCENTER': 'Centro Logístico',
        'DRONES': 'Drones',
        'DESCRIPTION': 'Descripción',
        'ADDRESS': 'Direccion',
        'PICTURE': 'Imagen',
        'LATITUDE': 'Latitud',
        'LONGITUDE': 'Longitud',
        'ALTITUDE': 'Altitud',
        'RADIUS': 'Radio de accion',
        'DROPPOINTS': 'Puntos de entrega',
        'DROPPOINT': 'Punto de entrega',
        'EDIT': 'Editar',
        'CANCEL': 'Cancelar',
        'CREATE_NEW': 'Crear nuevo',
        'SAVE': 'Guardar',
        'NAME': 'Nombre',
        'CITY': 'Ciudad',
        'DELETE': 'Eliminar',
        'TRANSPORTS': 'Repartos',
        'DRONE': 'Dron',
        'PLATE': 'Matrícula',
        'ICON': 'Icono',
        'MODEL': 'Modelo',
        'ISTRANSPORTING': 'Esta transportando?',
        'BATTERY': 'Estado de la bateria',
        'DELETE_ALERT': 'Esta seguro que desea eliminar este',
        'TRANSPORT': 'Entrega',
        'PACKAGE': 'Paquete',
        'SEND_PACKAGE': 'Enviar paquete',
        'WELCOME': 'Bienvenido a',
        'SELECT_CITY': 'Selecciona una ciudad',
        'ERROR_MESSAGE_1': 'Por favor, seleccione una de las ciudades disponibles en el desplegable',
        'SEARCH': 'Buscar',
        'SELECT': 'Seleccionar',
        'REFRESH_WEATHER': 'Actualizar informacion meteorologica',
        'STYLE': 'Estilo',
        'ADD_CITY': 'Añadir ciudad',
        'COORDINATES': 'Coordinates',
        'INFORMATION_COORD': 'Presiona o haz clic izquierdo en el mapa para obtener las coordenadas',
        'PLAY_TOUR': 'Empezar Tour',
        'STOP_TOUR': 'Parar Tour',
        'ADMINISTRATION': 'Administracion',
        'DEMO': 'Demostracion',
        'CONFIGURATION': 'Configuracion',
        'ADD': 'Añadir',
        'ACCESS': 'Acceder',
        'LOGISTICCENTERS': 'Centros Logísticos',
        'INFO_DELETE_LC': 'Eliminando este Centro Logistico, los puntos de entrega i los drones relacionados con el tambien van a ser eliminados',
        'ENGLISH': 'Ingles',
        'SPANISH': 'Español',
        'WEATHER': 'Clima',
        'FLYING_MAX_ALTITUDE': 'Maxima altitud de vuelo',
        'ERROR': 'Error',
        'SUCCESS': 'Correcto',
        'ERROR_UPDATING_FLYING_ALT': 'La altitud de vuelo no ha podido ser actualizada',
        'SUCCESS_UPDATING_FLYING_ALT': 'La altitud de vuelo ha sido actualizada',
        'UPDATE': 'Actualizar',
        'UNSELECT': 'Cancelar',
        'KML_MANAGER': 'Administracion KML',
        'REFRESH': 'Actualizar',
        'WAITING': 'Preparado',
        'DELIVERING': 'En entrega'
    });
    $translateProvider.preferredLanguage('en');
}]);