// plus part
function calculate_sum(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var option = document.getElementById('option').value;

    if(option === 'plus'){
        var result = document.getElementById('result').value = +first + +second;
    }

    if(option === 'minus'){
        var result = document.getElementById('result').value = first - second;
    }

    if(option === 'gon'){
        var result = document.getElementById('result').value = first * second;
    }

    if(option === 'vhag'){
        var result = document.getElementById('result').value = first / second;
    }
}
