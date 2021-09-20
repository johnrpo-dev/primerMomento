const distancia = (x1,x2,y1,y2) => {
    const planetaNaboo = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
    return (planetaNaboo.toFixed(3))
}
console.log(`la distancia al planeta naboo es de: ${distancia(-578,98,-874,56)} KmUA`);