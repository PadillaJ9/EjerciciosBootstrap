import BaseController from "./BaseController";

class PlatController extends BaseController {

    constructor() {
        super('mewtinsve3gi1aq', 'Comidas');
    }

    async getCarta() {
        let carta = await this.getAll();
        if (!carta) {
            throw new Error("No se puede obtener la carta");
        }

        carta = carta.map(e => {
            let Imagen = (e.Imagen && e.Imagen[0].signedUrl) ? e.Imagen[0].signedUrl : '';
            delete e.Imagen;
            e.Imagen = Imagen;

            return e;
        });
        
        return carta;
    }

    async getMenu() {
        let menu = await this.getCarta();
        return menu.filter(e => e.menu); 
    }
}

export default PlatController;
