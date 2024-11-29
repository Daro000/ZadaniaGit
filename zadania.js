const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {
    if (removeSpecialChars) {
        text = text.replace(/[^a-zA-Z0-9 ]/g, ''); //szuka znakow z poza zakresu
    }

    if (uppercase) {
        text = text.toUpperCase();
    }

    if (reverse) {
        text = text.split('').reverse().join('');
    }

    console.log(`Przetworzony tekst: ${text}`);
};

processText('Hello World', { uppercase: true , removeSpecialChars: true });

/////////////////////////////////////////////////

class Calculator{
    add({num1,num2}){
        const result = num1 + num2
        console.log(`Wynik dodawania ${num1} + ${num2} = ${result}`)
        return result
    }

    subtract({num1,num2}){
        const result = num1 - num2
        console.log(`Wynik odejmowania ${num1} - ${num2} = ${result}`)
        return result
    }

    multiply({num1,num2}){
        const result = num1 * num2
        console.log(`Wynik mnozenia ${num1} * ${num2} = ${result}`)
        return result
    }

    divide({ num1, num2 }) {
        if (num2 === 0) {
            console.log("Nie da się dzielić przez 0!");
            return;
        }

        const result = num1 / num2
        console.log(`Wynik dzielenia ${num1} / ${num2} = ${result}`)
    }
}

const calculator = new Calculator()

const addResult = calculator.add({ num1: 5, num2: 3 });
const subtractResult = calculator.subtract({ num1: 10, num2: 4 });
const multiplyResult = calculator.multiply({ num1: 7, num2: 6 });
const divideResult = calculator.divide({ num1: 8, num2: 0 });

////////////////////////////////////////

class Student{
    constructor({name,age,grades=[]}){
        this.name = name
        this.age = age
        this.grades = grades

}

    addGrade(newGrade){
        this.grades=[...this.grades,newGrade]
        console.log(`Dodano nowa ocene`)
    }

    getAverage() {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        const average = total / this.grades.length;
        return average;
    }


    displayInfo() {
        const average = this.getAverage();
        console.log(`${this.name}, wiek: ${this.age}, średnia ocen: ${average.toFixed(2)}`);
    }
}

const student1 = new Student({ name: 'Robert Lewandowski', age: 20, grades: [5, 4, 3, 4] });
const student2 = new Student({ name: 'Anna Lewandowska', age: 22, grades: [3, 5, 4] });
const student3 = new Student({ name: 'Piotr Zieliński', age: 21, grades: [2, 3, 4] });

student1.addGrade(5);
student2.addGrade(3);


student1.displayInfo();
student2.displayInfo(); 
student3.displayInfo(); 


//////////////////////////////////////////////

//tablica obiektow
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 50, category: 'Clothing' },
    { name: 'Smartphone', price: 900, category: 'Electronics' },
    { name: 'Socks', price: 10, category: 'Clothing' },
    { name: 'Headphones', price: 200, category: 'Electronics' },
    { name: 'Jacket', price: 150, category: 'Clothing' }
];


function filterProducts(category, minPrice, maxPrice) {
    
    const filteredByCategory = products.filter(product => product.category === category); //filtruje kazdy produkt po kategorii

    
    const filteredByPrice = filteredByCategory.filter(({ price }) => price >= minPrice && price <= maxPrice); // uzycie poprzedniego flitrowania filteredByCategory 
    //uzycie destrukturyzacji aby dostac sie bezposrednio do ceny

    
    if (filteredByPrice.length === 0) {
        console.log('Nie znaleziono produktow');
    } else {
        filteredByPrice.forEach(({ name, price, category }) => {  //iteracja po kazdym przeflitrowanym produkcie filteredByPrice
            console.log(`Product: ${name}, Category: ${category}, Price: $${price}`);// destrukturyzacja aby wyswieltic dane produktow
        });
    }
}

// przyklad użycia funkcji - filtracja produktów z kategorii 'Electronics' w cenie od 100 do 1000
filterProducts('Electronics', 100, 1000);


//////////////////////////////////////////////

class Produkt{
    constructor(nazwa,cena,ilosc){
        this.nazwa = nazwa;
        this.cena = cena;
        this.ilosc = ilosc;
    }
}

class Cart{
    constructor(){
        this.produkt = [];
    };



    dodajProdukt(produkt){
        this.produkt =[...this.produkt,produkt];
    }

    usunProdukt(nazwaProduktu){
        this.produkt = this.produkt.filter(p => p.nazwa !== nazwaProduktu);
    }

    pokazKoszyk(){
        console.log("Zawartość koszyka:");
      this.produkt.forEach(produkt => {
        console.log(`${produkt.nazwa} - Cena: ${produkt.cena} PLN, Ilość: ${produkt.ilosc}`);
      });
    }

}
