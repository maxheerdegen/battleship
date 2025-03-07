import { createShip, createGameboad } from "./gameboard.js"

describe('test ship factory', () => {
  const ship = createShip(1);

  ship.hit();

  test('ship of length 1 got hit once so is expected to be sunk', () => {
    expect(ship.isSunk()).toBeTruthy();
  })
}) 

describe('test ship factory', () => {
  const ship = createShip(2);

  ship.hit();
  ship.hit();

  test('ship of length 2 got hit twice so is expected to be sunk', () => {
    expect(ship.isSunk()).toBeTruthy();
  })
}) 

describe('test ship factory', () => {
  const ship = createShip(2);

  ship.hit();

  test('ship of length 2 got hit once so is expected not to be sunk', () => {
    expect(ship.isSunk()).toBeFalsy();
  })
}) 

describe('test gameboard factory', () => {
  const ship = createShip(2);
  const gameboard = createGameboad();
  gameboard.placeShip("B3", ship, "horizontal");
  gameboard.placeShip("D9", ship, "vertical");

  test('expect board at B3 to be of type object', () => {
    expect(typeof gameboard.board[1][2]).toBe('object')
  })

  test('expect board at B4 to be of type object', () => {
    expect(typeof gameboard.board[1][3]).toBe('object')
  })

  test('expect board at B5 to be undefined', () => {
    expect(gameboard.board[1][4]).toBeUndefined();
  })

  test('expect board at E9 to be of type object', () => {
    expect(typeof gameboard.board[4][8]).toBe('object');
  })
})