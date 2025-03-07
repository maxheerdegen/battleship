function createShip (length) {

    let numberOfHits = 0;

    const hit = () => numberOfHits++;

    const isSunk = () => length === numberOfHits ? true : false;

    return { hit, isSunk }
}

