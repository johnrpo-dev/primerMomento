
const tempEndor = (a, b, c, d) => {
    const max = Math.max(a, b, c, d);
    const min = Math.min(a, b, c, d);
    const promedio = (max + min) / 2;
    return (promedio)
}
console.log(`El promedio de la temperatura de la luna de Endor es de: ${tempEndor(154,178,322,190)}°Endius`);