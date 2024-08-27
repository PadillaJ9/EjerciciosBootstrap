const APIURL = 'https://app.nocodb.com/api/v2';
const TOKEN = '7n-WZzsyp4jM9OoEqoLI0htxkBo2gXXCvLN_g9wo';



class BaseController {

    
    constructor(tableId, tableName) {
        this.apiUrl = `${APIURL}/tables/${tableId}/records`;
        this.token = TOKEN;
        this.tableName = tableName;
    }

    async getAll() {
        const response = await fetch(this.apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data.list;

    }

    async createItem(ob) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }

    async updateItem(id, ob) {
        ob.Id = id;
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }


    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async deleteItem(id) {
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
    }
}


export default BaseController;
