export class Operations {
  private type: string = "default";

  setType(type: string) {
    this.type = type;
  }

//Create operation using Math ramdom with min && max value or not--------------
  createOperation(min: number = 0, max: number = 9999) {
    if (this.type === "default") {
      throw new Error("Operação inválida");
    }
    let firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let result: number;

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
