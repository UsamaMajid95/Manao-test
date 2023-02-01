$(document).ready(function(){
    $("#login").on("input",function(){
        checklogin();
    });
    $("#p1").on("input",function(){
        checkpass();

    });
    $("#p2").on("input",function(){
        checkpass2();

    });
    $("#email").on("input",function(){
        checkemail();

    });
    $("#name").on("input",function(){
        checkname();

    });

    $("#submit").on("click",function(e){
        if (checkfields()==false){
            alert("please fill all fields");
        }else if(checklogin()==false){
            alert("your login is wrong");
        }else if(checkpass()==false){
            alert("your password is wrong");
        }else if(checkpass2()==false){
            alert("your confirm password is wrong");
        }else if(checkemail()==false){
            alert("your email is wrong");
        }else if(checkname()==false){
            alert("your name is wrong");
        }else{
            e.preventDefault();
            $.ajax({
                method:"POST",
                url:"registration.php",
                datatype:"json",
                data:{login:$('#login').val(),
                p1:$('#p1').val(),
                p2:$('#p2').val(),
                email:$('#email').val(),
                name:$('#name').val()},

                success:function(data,status,xhr){
                    
                    if(data['text']==1){
                        
                        alert('register successfully'); 
                        
                    }
                    else if(data['text']==10){

                        alert('This user already exist');
                        

                    }
                    else if(data['text']==7){

                        alert('This email already exist');
                    }    
                    else if(data['text']==100){

                        alert('password dosenot match');

                    }else{
                        $("#show").html(data);

                    }
                        
                }

                
            });

        }
        
            
    });
});            
            
function checklogin(){
    var cond = /^[A-Za-z0-9](?!.*[\s])(?!.*[\!@#$%^&*()~=+_-]){6,}/;
    var login = $("#login").val();
    var valilogin = cond.test(login);
    if($("#login").val() == ""){
        $("#login_error").html("plese fill this field");
        return false;
    }
    else if($("#login").val().length<6){
        $("#login_error").html("your login must be more than 6 letters");
        return false;
    }
    else if(!valilogin){
        $("#login_error").html("username error");
        return false;
    }
    else{
        $("#login_error").html("");
        return true; 
    }
} 

function checkpass(){
    var cond = /^[A-Za-z](?!.*[\s]).(?!.*[\!@#$%^&*()~+=_-]).*[0-9]$|^[0-9](?!.*[\s])(?!.*[\!@#$%^&*()~=+_-]).*[A-Za-z]$/;
    var pass = $("#p1").val();
    var valipass = cond.test(pass);
    if($("#p1").val() == ""){
        $("#pass_error").html("plese fill this field");
        return false;
    }
    else if($("#p1").val().length<6){
        $("#pass_error").html("your password must be more than 6 characters");
        return false;
    }
    else if(!valipass){
        $("#pass_error").html("password error : must be combination of letters and numbers");
        return false;
    }
    else{
        $("#pass_error").html("");
        return true; 
    }
}

function checkpass2(){
    var pass = $("#p1").val();
    var pass2 = $("#p2").val();
    
    if($("#p2").val() == ""){
        $("#pass2_error").html("plese fill this field");
        return false;
    }
    else if(pass !== pass2 ){
        $("#pass2_error").html("confirm password did not match");
        return false;
    }else{
        $("#pass2_error").html("");
        return true; 
    }
}   
function checkemail(){
    var cond = /^[a-zA-Z0-9\\s]+@[a-z\\s]+\.[a-z\\s](?!.*[\s]){2,3}/;
    var em = $("#email").val();
    var valiemail = cond.test(em);
    if($("#email").val() == ""){
        $("#email_error").html("plese fill this field");
        return false;
    }
    
    else if(!valiemail){
        $("#email_error").html("email error");
        return false;
    }
    else{
        $("#email_error").html("");
        return true; 
    }
}

function checkname(){
    var cond = /^[a-zA-Z](?!.*[\s])(?!.*[\!@#$%^&*()~=+_-]){2,}/;
    var name = $("#name").val();
    var valiname = cond.test(name);
    if($("#name").val() == ""){
        $("#name_error").html("plese fill this field");
        return false;
    }
    else if($("#name").val().length<2){
        $("#name_error").html("your name must be more than 2 letters");
        return false;
    }
    else if(!valiname){
        $("#name_error").html("name error : your name must be only letters");
        return false;
    }
    else{
        $("#name_error").html("");
        return true; 
    }
}

function checkfields(){
    if($("#login").val() == "" & $("#p1").val() == "" & $("#p2").val() == "" & $("#email").val() == "" & $("#name").val() == ""){
        return false;
    }else if
        ($("#login").val() == "" || $("#p1").val() == "" || $("#p2").val() == "" || $("#email").val() == "" || $("#name").val() == ""){
        return false;
        
    }else{
        return true;
    } 
}
