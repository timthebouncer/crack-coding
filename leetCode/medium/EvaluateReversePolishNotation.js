

const evaluateReversePolishNotation=(list, target)=>{

    let stack = []
    for (let i = 0; i<list.length; i++){
        if(!['+','-','*','/'].includes(list[i])){
            stack.push(list[i])
        }else {
            let n2 = parseInt(stack.pop())
            let n1 = parseInt(stack.pop())
            let n = 0
            switch (list[i]) {
                case '+':
                    n = n1 + n2
                    break;
                case '-':
                    n = n1 - n2
                    break;
                case '*':
                    n = n1 * n2
                    break;
                case '/':
                    n = n1 / n2
                    break;
            }
            stack.push(n)

        }
    }
    console.log(stack.pop())

}

evaluateReversePolishNotation(["2", "1", "+", "3", "*"],9)