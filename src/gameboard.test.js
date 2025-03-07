import { createShip } from "./gameboard.js"

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