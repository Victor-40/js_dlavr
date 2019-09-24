window.addEventListener('load', function(e){
    
    let myForm = document.querySelector('.mySubmit');
    let inputFields = document.querySelectorAll('.check');
    let minInputLength = 2;

    myForm.addEventListener('submit', validateForm);
 
    for(let i=0; i < inputFields.length; i++){
        inputFields[i].addEventListener('input', checkInput);
    }
    
    function checkInput(){
        if(this.value.length >= minInputLength) {
            this.className = this.className.replace(/ err/g, "");
        }
    }

    function validateForm(e) {
        let emptyFields = false;
        inputFields.forEach(function(element){ 
            if(element.value.length < minInputLength){
                emptyFields = true;
                if(!element.className.includes("err")){
                    element.className += "  err";
                }
            }
        });

        if(emptyFields){
            e.preventDefault();
            return false;
        }
    }
});
