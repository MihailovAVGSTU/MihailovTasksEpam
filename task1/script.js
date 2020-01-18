var check = true;
var result = 0;
var thisOperation;
function get_number(number) {
    if(check)
    {
        document.getElementById('result').value = number;
        check = false;
    }
    else document.getElementById('result').value += number;
}

function cClear() {
    document.getElementById('result').value = '';
    check = true;
    result = 0;
}

function fullClear() {
    cClear();
}

function get_operations(operation) {
    var sum = document.getElementById('result').value;
    if(check && thisOperation != '=') {
        document.getElementById('result').value = result;
    }
    else {
        check = true;
        if (thisOperation == '+')
            result += parseFloat(sum);
        else if (thisOperation == '-')
            result -= parseFloat(sum);
        else if (thisOperation == '*')
            result *= parseFloat(sum);
        else if (thisOperation == '/')
            result /= parseFloat(sum);
        else result = parseFloat(sum);
        document.getElementById('result').value = result;
        thisOperation = operation;
    }
}