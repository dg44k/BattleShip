import Ship from "../scripts/Ship";

let obj;
describe("function hit", () => {
    beforeEach(() => {
        obj = new Ship(3);
    })

    test("Checking for slow hit damage", () => {
        expect(obj.hit()).toBe(1);
    });
    test("Checking for slow hit damage", () => {
        obj.hit()
        obj.hit()
        expect(obj.hit()).toBe(3);
    });
})

describe("function isSunk", () => {
    beforeEach(() => {
        obj = new Ship(3);
    })

    test("Checking if our ship is hit", () => {
        expect(obj.isSunk()).toBe(false);
    });
    test("Checking if our ship is hit", () => {
        obj.hit()
        obj.hit()
        expect(obj.isSunk()).toBe(false);
    });
    test("Checking if our ship is hit", () => {
        obj.hit()
        obj.hit()
        obj.hit()
        expect(obj.isSunk()).toBe(true);
    });
})