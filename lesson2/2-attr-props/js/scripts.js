window.addEventListener('load', function(e){
   
    let checkbox = document.querySelector('.some');
    let btn = document.querySelector('.go');

    checkbox.addEventListener('change', function(){
        console.log(checkbox.checked);
        console.log(checkbox.getAttribute('checked'));

    });

    btn.addEventListener('click', function(){
       

        checkbox.checked = false;
        //checkbox.removeAttribute('checked');
        
    });
});

