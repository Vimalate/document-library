function debounse(fn,wait){
    let timer=null
    return function(){
        if(timer) clearTimeout(timer)
        timer=setTimeout(
            fn,wait)
    }
}
function fn(){
console.log('')
}