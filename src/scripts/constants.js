const EMPTY = "empty";
const MISS = "miss";
const WRECKED_SHIP = "wrecked";
const DESTROY_WHOLE = "destroy";
const WHOLE_SHIP = "whole";
const STOP_ZONE = "stop";

const LAST_NUMBER_BOARD = 9;
const FIRST_NUMBER_BOARD = 0;

// This can be any number except 0 and 1, it is needed to determine the axis
const NUMBER_DEFINE_AXIS = 4;

const AXIS_X = "X";
const AXIS_Y = "Y";

const CONFIG_ARRAY_SHIPS = [
    {
        name: "four_deck",
        length: 4,
        count: 1
    },
    {
        name: "triple_deck",
        length: 3,
        count: 2
    },
    {
        name: "dual_deck",
        length: 2,
        count: 3
    },
    {
        name: "single_deck",
        length: 1,
        count: 4
    }
]

export {EMPTY, MISS, WHOLE_SHIP, WRECKED_SHIP, STOP_ZONE, DESTROY_WHOLE, LAST_NUMBER_BOARD, FIRST_NUMBER_BOARD, NUMBER_DEFINE_AXIS, AXIS_X, AXIS_Y, CONFIG_ARRAY_SHIPS};