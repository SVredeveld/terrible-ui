let completedSliderNumber;

function changeSliderValue(value) {
    var numberOfZeros = 0;
    for(var i = value.length; i < 10; i++) {
        numberOfZeros += 1;
    }
    let stringBuilder = [];
    for(var i = 0; i < numberOfZeros; i++) {
        stringBuilder.push('0');
    }

    completedSliderNumber =  stringBuilder.join("") + value; 

    document.getElementById("sliderValue").innerHTML = completedSliderNumber;
}

function setSliderOutputResult() {
    document.getElementById("outputResultLabel").style.visibility = "visible";
    document.getElementById("outputResult").innerHTML = completedSliderNumber;

}