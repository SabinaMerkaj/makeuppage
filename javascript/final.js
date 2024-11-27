function kontakt(event){
    event.preventDefault()
    let name=document.getElementById("name").value;
    let lastnamename=document.getElementById("lastname").value;
    let inputEmail4=document.getElementById("inputEmail4").value;
    let inputAddress=document.getElementById("inputAddress").value;
    let inputCity=document.getElementById("inputCity").value;
    let inputState=document.getElementById("inputState").value;
    let inputZip=document.getElementById("inputZip").value;

    let sms=document.getElementById("sms");


    if(name==null|| lastname==null || inputEmail4==null || inputAddress==null || inputCity==null|| inputState==null||inputZip==null){
        sms.textContent="Please fill in all the fields"
    }else{
        sms.textContent="Thank you" +name+ " "+lastname+"!"
    }
}


