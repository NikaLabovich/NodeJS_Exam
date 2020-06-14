function sum(){
    var sum_1, sum_2, result;
    sum_1 = document.getElementById('inp_1').value;
    sum_1 = parseInt(sum_1);

    sum_2 = document.getElementById('inp_2').value;
    sum_2 = parseInt(sum_2);

    result = sum_1+sum_2;
    document.getElementById('result_sum').innerHTML = result;
}
