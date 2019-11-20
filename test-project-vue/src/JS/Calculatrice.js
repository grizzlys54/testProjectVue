export class CalculatriceJS {
    constructor(){}

    calculate = function(operation = ""){
        if(operation != ""){
            separateOperations(operation);
        }else{
            return 'error';
        }
    }

    add = function(a = 0, b = 0){
        return a + b;
    }

    substract = function(a = 0, b = 0){
        return a - b;
    }

    multiply = function(a = 0, b = 0){
        return a * b;
    }

    divise = function(a = 0, b = 0){
        if(b === 0){
            return 'error'
        }else{
            return a / b;
        }
    }

    separateOperations = function(operation = ""){
        let operand = [],
            number = "",
            reg = /^\d$/;
        for(let i=0; i<operation.length; i++){
            let element = operation.charAt(i);
            if(!reg.test(element)){
                operand.push(element)
                number = "";
            }
            else{
                number = number + element;
                if(number != "" && operation.charAt(i+1) && !reg.test(operation.charAt(i+1))){
                    operand.push(parseInt(number));
                }
            }
        }

        if(operand.length > 0){
            createSmallChunk(operand);
        }
    }

    createSmallChunk = function(array = []){
        let smallChunk;

        array.forEach(function(element){
            switch(element){
                case("("):break;
                case(")"):break;
                case("+"):break;
                case("-"):break;
                case("/"):break;
                case("x"):break;
                default: break;
            }
        })
    }
}