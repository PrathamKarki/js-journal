const toggleIcons = document.querySelectorAll('.favorite-icon');



toggleIcons.forEach((icon)=>{
    icon.addEventListener('click', ()=>{
       if(icon.textContent === '♡'){
        icon.textContent = '❤';
       } else {
        icon.textContent = '♡'
       }
    })

});