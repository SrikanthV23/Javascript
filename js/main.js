window.onload= function(){
    var myForm = document.forms.signUp_Form;
 
    myForm[0].addEventListener('blur',function(e){
       if(myForm[0].value == '' || myForm[0].value == null){
           document.getElementById('nameErrMsg').innerHTML='First Name cannot be empty';
       }
       else{
        console.log(myForm[0].value);
        document.getElementById('nameErrMsg').innerHTML='';
       }
    });
    myForm[1].addEventListener('blur',function(e){
        if(myForm[1].value == '' || myForm[1].value == null){
            document.getElementById('emailErrMsg').innerHTML='Email cannot be empty';
        }
        else{
         console.log(myForm[1].value);
         document.getElementById('emailErrMsg').innerHTML='';
        }
     });
     myForm[2].addEventListener('blur',function(e){
        if(myForm[2].value == '' || myForm[2].value == null){
            document.getElementById('passwordErrMsg').innerHTML='Password cannot be empty';
        }
        else{
         console.log(myForm[2].value);
         document.getElementById('passwordErrMsg').innerHTML='';
        }
     });
     myForm[3].addEventListener('blur',function(e){
        if(myForm[3].value == '' || myForm[3].value == null ){
            document.getElementById('cPwdErrMsg').innerHTML='Confirm Password cannot be empty';
        }
        else if(myForm[3].value != myForm[2].value){
            document.getElementById('cPwdErrMsg').innerHTML='Password and Confirm Password do not match';
        }
        else{
         console.log(myForm[3].value);
         document.getElementById('cPwdErrMsg').innerHTML='';
        }
     });
    myForm.addEventListener('click',function(e){
        e.preventDefault();
        var jobject={};
        var jsonData = JSON.stringify(jobject);
        console.log(jsonData);
    });
}