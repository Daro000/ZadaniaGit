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

