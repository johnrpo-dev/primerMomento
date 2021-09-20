

let robarPlano = (id, despegarNave) => {
    if (id > 0 && id <= 10){
        despegarNave(true);
    }else{
        despegarNave(false);
    }
}
robarPlano(5, bandera => bandera ? console.log('Despegando') : console.log('No puedes despegar') );