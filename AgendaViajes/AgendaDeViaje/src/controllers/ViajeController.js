const APIURL = 'https://app.nocodb.com/api/v2/tables/mgble2kq1sii5sv/records';
const TOKEN = '7n-WZzsyp4jM9OoEqoLI0htxkBo2gXXCvLN_g9wo';

class ViajesController {
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
            const response = await fetch(`${this.apiUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                }
            });
    
            let data = await response.json();
            data = data.list;
            data = data.map(e => {
                let Imagen = (e.Imagen && e.Imagen[0].signedUrl) ? e.Imagen[0].signedUrl : "";
                delete e.Imagen;
                e.Imagen = Imagen;
                return e;
            });
            return data;
        } catch (error) {
            console.error('Error fetching all viajes:', error);
            throw error;
        }
    }
    

 
   

    async updateViaje(id, pais, descripcion, imagen) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                },
                body: JSON.stringify({
                    pais,
                    descripcion,
                    imagen
                })
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating viaje:', error);
            throw error; 
        }
    }

    async deleteViaje(id) {
        try {
            const response = await fetch(`${this.apiUrl}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                },
                body: JSON.stringify({
                    Id: id
                })
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error deleting viaje:', error);
            throw error; 
        }
    }


    async getViajeById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                }
            });

            const data = await response.json();
            if (data && data.Imagen && data.Imagen[0] && data.Imagen[0].signedUrl) {
                data.Imagen = data.Imagen[0].signedUrl;
            } else {
                data.Imagen = "";
            }
            return data;
        } catch (error) {
            console.error('Error fetching viaje by id:', error);
            throw error;
        }
    
}






}

export default ViajesController;
