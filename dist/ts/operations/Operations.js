export class Operations {
    constructor() {
        this.type = "default";
    }
    setType(type) {
        this.type = type;
    }
    //Create operation using Math ramdom with min && max value or not--------------
    createOperation(min = 0, max = 9999) {
        if (this.type === "default") {
            throw new Error("Operação inválida");
        }
        let firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let result;
        switch (this.type) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                throw new Error("Tipo inválido");
        }
        return {
            expression: `${firstNumber} ${this.type} ${secondNumber}`,
            result,
        };
    }
}
//# sourceMappingURL=Operations.js.map