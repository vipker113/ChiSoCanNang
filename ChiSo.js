function check() {
    let canNang= parseInt(document.getElementById("kilogram").value);
    console.log(canNang)
    let chieuCao= document.getElementById("height").value;
    console.log(chieuCao)
    let BMI= canNang/(chieuCao*chieuCao);
    console.log(BMI);
    if(BMI < 16) {
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Gầy độ III "
        document.getElementById("icon").src= "./images/cute2.gif"
    }
    else if (BMI >= 16 && BMI < 17){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Gầy độ II"
        document.getElementById("icon").src= "./images/cute7.gif"
    }
    else if (BMI >= 17 && BMI < 18.5){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Gầy độ I"
        document.getElementById("icon").src= "./images/cute6.gif"
    }
    else if (BMI >= 18.5 && BMI < 25){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Bình Thường"
        document.getElementById("icon").src= "./images/cute.gif"
    }
    else if (BMI >= 25 && BMI < 30){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI + "<br>" +" Thừa Cân"
        document.getElementById("icon").src= "./images/cute3.gif"
    }
    else if (BMI >= 30 && BMI < 35){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Béo độ I"
        document.getElementById("icon").src= "./images/cute3.gif"
    }
    else if (BMI >= 35 && BMI < 40){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Béo độ II"
        document.getElementById("icon").src= "./images/cute4.gif"
    }
    else if (BMI >= 40){
        document.getElementById("result").innerHTML="Chỉ số BMI: " + BMI +"<br>" +" Béo độ III"
        document.getElementById("icon").src= "./images/cute5.gif"
    }
}