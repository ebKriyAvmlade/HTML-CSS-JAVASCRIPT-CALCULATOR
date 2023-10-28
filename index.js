
let output = '';
const outputEl= document.getElementById('output-el')

function append(value) {
    output += value
    outputEl.value += value
}

function calculateResult() {
    try {
        output = eval(output).toString()
        outputEl.value = output
    } catch (error) {
        outputEl.value = error
        output = ''
    }
    output = ''
}
    

function clearInput() {
    output = ''
    outputEl.value = ''
}

