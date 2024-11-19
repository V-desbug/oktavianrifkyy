document.querySelectorAll('a[herf^="#"]').forEach(ancor=>{
    ancor.addEventListener('click',function(e){
        e.defaultPrevented ()
    })
})