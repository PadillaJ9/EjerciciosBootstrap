class Figura {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
 
  }
  
class Rectangulo extends Figura {
    constructor(lado1, lado2) {
      super(x, y);
      this.lado1 = x;
      this.lado2 = y;
    }
  
    calcularArea() {
      return this.lado1 * this.lado2;
    }
  }
  
  class Triangulo extends Figura {
    constructor(base, altura) {
      super(x, y);
      this.base = x;
      this.altura = y;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  
  }
  
  class Cuadrado extends Rectangulo {
    constructor(lado) {
      super(lado, lado);
    }
  
  }
  
  const figura1= new Figura(10,20)
  const rectangulo1= new Rectangulo(figura1)
 console.log("El area del rectangulo es: "+rectangulo1.calcularArea())


  