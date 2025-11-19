function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLast() {
    const currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}