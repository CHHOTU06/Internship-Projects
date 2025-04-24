function isValid(){
    const firstname=document.getElementById("firstname").value;
    const lastname=document.getElementById("lastname").value;
    const number=document.getElementById("number");
    const email=document.getElementById("email").value;
   
    if(firstname.trim()===""){
        alert("Enter Your first name");
    }
    else if(lastname.trim() ===""){
        alert("Enter your last name")
        
    }
    else if(number.value.length !=10){
        document.getElementById("form").addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            console.log("Form submitted. Name:", name);})
        alert("Enter a valid number")
    }
    else if(email.trim()===""){
        alert("Enter a valid email Id")
    }
    else{
        document.getElementById("firstname").value=""
        document.getElementById("lastname").value=""
        document.getElementById("number").value=""
        document.getElementById("email").value=""
        document.getElementById("message").value=""
        alert("Form is Submitted Succesfully")
        
    }
}