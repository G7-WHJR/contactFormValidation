function validate()
{
    //1. Take input from name and contact fields , store them in variables
    var name = document.getElementById("uname").value;
    var phone = document.getElementById("contact").value;

    //2. calculate length of contact number and store it in a variable named "count"
    var count= phone.length;
    
    //3. if name input is blank, display the 'err1' element, else hide it
    if(name == ''){
        document.getElementById("err1").style.display="block";
    }
    else{
        document.getElementById("err1").style.display="none";
    }

    //4. if count is not equal to 10, display the 'err2' element, else hide it*/
    if(count != 10){
        document.getElementById("err2").style.display="block";
    }
    else{
        document.getElementById("err2").style.display="none";
    }
    
}

