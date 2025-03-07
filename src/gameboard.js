function createShip (length) {
    let numberOfHits = 0;

    const hit = () => numberOfHits++;

    const isSunk = () => length === numberOfHits ? true : false;

    return { hit, isSunk, length }
}

function createGameboad () {
    const board = [];
    let attacks = [];

    for (let i = 0; i < 10; i++) {
        board.push(Array(10));
    }

    const letterArr = ["A","B","C","D","E","F","G","H","I","J"];

    const calculateX = (coordinate) => coordinate.slice(1) - 1;
    const calculateY = (coordinate) => letterArr.indexOf(coordinate[0]);

    const placeShip = (firstCoordinate, ship, direction) => {
        
        const xCoordinate = calculateX(firstCoordinate);
        const yCoordinate = calculateY(firstCoordinate);
        const xEnd = xCoordinate + ship.length;
        const yEnd = yCoordinate + ship.length;
    
        if (xCoordinate < 0 || xEnd > 10 || yCoordinate < 0 || yEnd > 10) {
            return;
        }

        if (direction === "horizontal") {
            for (let i = 0; i < ship.length; i++) {
                board[yCoordinate][xCoordinate+i] = ship;
            }
        }

        if (direction === "vertical") {
            for(let i = 0; i < ship.length; i++) {
                board[yCoordinate+i][xCoordinate] = ship;
            }
        }
    }

    return { board, placeShip }
}

export { createShip, createGameboad };