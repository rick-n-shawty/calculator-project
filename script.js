const previousOperandDiv = document.getElementById('previousOperand')
const currentOperandDiv = document.getElementById('currentOperand')
const numberButtons = document.querySelectorAll('[data-type = "number"]')
const AC = document.querySelector('[data-type = "all-clear"]')
const DELETE = document.querySelector('[data-type = "delete"]')
const EQUAL = document.querySelector('[data-type = "equal-sign"]')
const operationButtons = document.querySelectorAll('[data-type = "operation"]')

class Calculator{
    constructor(){
        this.previousDiv = previousOperandDiv
        this.currentDiv = currentOperandDiv
        this.operation = ''
        this.previousNum = ''
        this.currentNum = ''
    }
    getNumbers(number){
        this.currentNum += number
    }
    getOperation(operation){
        this.operation = operation
        this.previousNum = this.currentNum
        this.currentNum = ''
    }
    delete(){
        this.currentNum = this.currentNum.slice(0, this.currentNum.length - 1)
        console.log(this.currentNum);
    }
    display(){
        this.previousDiv.textContent = this.previousNum
        this.currentDiv.textContent = this.currentNum
    }
    calculate(){
        if(this.operation === '+'){
            this.currentNum = String(Number(this.currentNum) + Number(this.previousNum))
            this.previousNum = ''
        }else if(this.operation === '*'){
            this.currentNum = String(Number(this.currentNum) * Number(this.previousNum))
            this.previousNum = ''
        }else if(this.operation === '-'){
            this.currentNum = String(Number(this.currentNum) - Number(this.previousNum))
            this.previousNum = ''
        }else if(this.operation === '/'){
            this.currentNum = String(Number(this.previousNum) / Number(this.currentNum))
            this.previousNum = ''
        }
   
    }
    clear(){
        this.currentNum = ''
        this.previousNum = ''
        this.operation = ''
    }
    rickRoll(){
        if(this.currentNum === '777'){
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }
        else{
            return
        }
    }
}
const calculator = new Calculator()

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.getNumbers(button.textContent)
        console.log(calculator);
        calculator.display()
        calculator.rickRoll()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.getOperation(button.textContent)
        calculator.display()
        calculator.rickRoll()
    })
})
DELETE.addEventListener('click', () =>{
    calculator.delete()
    calculator.display()
    calculator.rickRoll()
})

EQUAL.addEventListener('click', () =>{
    calculator.calculate()
    calculator.display()
    console.log(calculator);
    calculator.rickRoll()
})
AC.addEventListener('click', () =>{
    calculator.clear()
    calculator.display()
    calculator.rickRoll()
})