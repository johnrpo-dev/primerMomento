

const matricPadawan = (nombre, edad, planeta, estatura, clasificar) => {
    let padawan = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura:estatura
    }
    clasificar(padawan.edad)
}
matricPadawan( 'Yoda', 14, 'Yavin84', 1.20, edad => {
    if (edad <=15) {
        console.log('Vas para el manejo de armas');
    }else{
        console.log('Manejaras el sable luz');
    }
})
