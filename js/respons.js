Burger=document.querySelector('.burger')
Navbar=document.querySelector('.navbar')
LeftNav=document.querySelector('.leftnav')
RightNav=document.querySelector('.rightnav')


Burger.addEventListener('click',()=>{
    
    LeftNav.classList.toggle('vclass');
    RightNav.classList.toggle('vclass');
    Navbar.classList.toggle('h-nav');
})

function res(){
    var username=document.getElementById("name");
    var useremail=document.getElementById("email");
    var userphone=document.getElementById("phone");
   
    if(username.value.trim()==""){
        alert("Enter your Name");
        return false;
    }
    if(useremail.value.trim()==""){
        alert("Enter your Email");
        return false;
    }
  
    if(userphone.value.trim()==""){
        alert("Enter your phone");
        return false;
    }
    return true;
}