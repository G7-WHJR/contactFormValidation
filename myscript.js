function validate()
{
    //1. Take input from name and contact fields , store them in variables
    var name = document.getElementById("userName").value;
    var phone = document.getElementById("contactInput").value;

    //2. calculate length of contact number and store i a variable named  "digitCount"
    var count= phone.length;
    console.log(count);
    
    //3. if name input is blank, display the 'errorName' span, else hide it
    if(name == ''){
        document.getElementById('err1').style.display="block";
    }
    else{
        document.getElementById('err1').style.display="none";
    }

    //4. if Count is not equal to 10, display the 'errorContact' span, else hide it
    if(count != 10){
        document.getElementById('err2').style.display="block";
    }
    else{
        document.getElementById('err2').style.display="none";
    }
    
}

