const APIURL = 'https://app.nocodb.com/api/v2/tables/mmd50a27btkwqm7/records';
const TOKEN = '7n-WZzsyp4jM9OoEqoLI0htxkBo2gXXCvLN_g9wo';

class GetViajesComprados {
    constructor() {
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async guardarViaje(nuevoViaje) {
        try {
            const response = await fetch(`${this.apiUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                },
                body: JSON.stringify(nuevoViaje)
            });
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding new viaje:', error);
            throw error; 
        }
    }
    

    async getAllViajes() {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                }
            });
    
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de viajes');
            }
    
            let data = await response.json();
            data = data.list.map(e => {
                let Imagen = (e.Imagen && e.Imagen[0].signedUrl) ? e.Imagen[0].signedUrl : "";
                delete e.Imagen;
                e.Imagen = Imagen;
                return e;
            }); // Asumiendo que 'list' contiene los viajes
    
            return data; // ¡Asegúrate de devolver los datos transformados!
        } catch (error) {
            console.error('Error al obtener todos los viajes:', error);
            throw error;
        }
    }
    

    async addViajeComprado(nuevoViajeComprado) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}` // Ajusta según tus necesidades de autenticación
                },
                body: JSON.stringify(nuevoViajeComprado)
            });

            if (!response.ok) {
                throw new Error('No se pudo añadir el viaje comprado');
            }

            const data = await response.json();
            return data; // Puedes retornar algún dato si lo necesitas
        } catch (error) {
            console.error('Error al añadir el viaje comprado:', error);
            throw error;
        }
    }
}

export default GetViajesComprados;
