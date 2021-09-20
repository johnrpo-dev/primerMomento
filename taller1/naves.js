
const getName = (name) => {
    const clasificar = name.split(':')
    return (`El nombre del piloto es: ${clasificar[1]}`);
}
console.log(getName('ASW3215:Obi-Wan Kenobi'));
console.log(getName('AtQ8655:Sara Bel-Sun'));
console.log(getName('AWQ557:Finn'));
console.log(getName('AXQ1957:Nodin Chavdri'));
