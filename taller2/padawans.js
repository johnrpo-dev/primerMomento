


function asignarPadawan () {
    let padawan = {
        nombre: 'yuyun',
        planeta: 'Dead star',
        edad: 16,
        estatura: 87
    }
    if(padawan.edad <= 15) {
        console.log('Vas para el manejo de armas');
    }else{
        console.log('Manejaras el sable luz');
    }   
}
console.log(asignarPadawan);
