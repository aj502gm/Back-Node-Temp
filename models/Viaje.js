import Sequelize from 'sequelize';
import db from '../config/db';

const Viaje = db.define('viajes', {
    titulo: {type: Sequelize.STRING},
    precio: {type: Sequelize.NUMBER},
    fecha_salida: {type: Sequelize.DATE},
    fecha_regreso: {type: Sequelize.DATE},
    imagen: {type: Sequelize.STRING},
    descripcion: {type: Sequelize.TEXT},
    slug: {type: Sequelize.STRING} //NOMBRE DE LA RUTA QUE SE ARMARÁ
});

export default Viaje;