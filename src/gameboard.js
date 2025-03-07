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

    const receiveAttack = (coordinate) => {

        if (attacks.includes(coordinate)) {
            return "You already attacked this field!";
        } else {
            attacks.push(coordinate);
        }

        const xCoordinate = calculateX(coordinate);
        const yCoordinate = calculateY(coordinate);
        const valueInBoard = board[yCoordinate][xCoordinate];
        
        if (valueInBoard !== undefined) {
            valueInBoard.hit();
            if (valueInBoard.isSunk()) {
                return "Ship sank!"
            } else {
                return "Hit!"
            }
        }
        return "Miss!";
    }

    const isBoardDefeated = () => {
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                if (board[i][j] !== undefined) {
                    if (!board[i][j].isSunk()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    return { board, placeShip, receiveAttack, isBoardDefeated }
}

function createPlayer(name) {
    const playerName = name;
    const board = createGameboad();

    return { playerName, board }
}

export { createShip, createGameboad, createPlayer };