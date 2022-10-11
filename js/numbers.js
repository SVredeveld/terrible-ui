function changeSliderValue(value) {
    var numberOfZeros = 0;
    for(var i = value.length; i < 10; i++) {
        numberOfZeros += 1;
    }
    let stringBuilder = [];
    for(var i = 0; i < numberOfZeros; i++) {
        stringBuilder.push('0');
    }
    document.getElementById("sliderValue").innerHTML = stringBuilder.join("") + value;
}