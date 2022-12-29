import * as alt from 'alt-server'

export const KeyCode = {
    _0: "0",
    _1: "1",
    _2: "2",
    _3: "3",
    _4: "4",
    _5: "5",
    _6: "6",
    _7: "7",
    _8: "8",
    _9: "9",
    A: "a",
    ALT_RIGHT: "alt_right",
    ALT: "alt",
    APOSTROPH: "apostroph",
    B: "b",
    BACKSLASH: "backslash",
    BACKSPACE: "backspace",
    BRACKET_CLOSE: "bracket_close",
    BRACKET_OPEN: "bracket_open",
    C: "c",
    CAPSLOCK: "capslock",
    COMMA_LT: "comma_lt",
    COMMA: "comma",
    CONTEXT_MENU: "context_menu",
    CTRL_2: "ctrl_2",
    CTRL: "ctrl",
    CURSOR_DOWN: "cursor_down",
    CURSOR_LEFT: "cursor_left",
    CURSOR_RIGHT: "cursor_right",
    CURSOR_UP: "cursor_up",
    D: "d",
    DELETE: "delete",
    E: "e",
    END: "end",
    ENTER: "enter",
    EQUALS_PLUS: "equals_plus",
    ESC: "esc",
    F: "f",
    F1: "f1",
    F10: "f10",
    F11: "f11",
    F12: "f12",
    F2: "f2",
    F3: "f3",
    F4: "f4",
    F5: "f5",
    F6: "f6",
    F7: "f7",
    F8: "f8",
    F9: "f9",
    G: "g",
    H: "h",
    HOME: "home",
    I: "i",
    INSERT: "insert",
    J: "j",
    K: "k",
    KEYPAD_0: "keypad_0",
    KEYPAD_1: "keypad_1",
    KEYPAD_2: "keypad_2",
    KEYPAD_3: "keypad_3",
    KEYPAD_4: "keypad_4",
    KEYPAD_5: "keypad_5",
    KEYPAD_6: "keypad_6",
    KEYPAD_7: "keypad_7",
    KEYPAD_8: "keypad_8",
    KEYPAD_9: "keypad_9",
    KEYPAD_ASTERIX: "keypad_asterix",
    KEYPAD_ENTER: "keypad_enter",
    KEYPAD_MINUS: "keypad_minus",
    KEYPAD_PERIOD: "keypad_period",
    KEYPAD_PLUS: "keypad_plus",
    KEYPAD_SLASH: "keypad_slash",
    L: "l",
    LOCKS: "locks",
    M: "m",
    MINUS: "minus",
    N: "n",
    NUM_LOCK: "num_lock",
    O: "o",
    P: "p",
    PAGE_DOWN: "page_down",
    PAGE_UP: "page_up",
    PAUSE: "pause",
    PERIOD_GT: "period_gt",
    POWER: "power",
    PRINT: "print",
    Q: "q",
    R: "r",
    S: "s",
    SCROLL_LOCK: "scroll_lock",
    SEMICOLON_DBLE: "semicolon_dble",
    SHIFT_RIGHT: "shift_right",
    SHIFT: "shift",
    SLASH_QUESTIONMARK: "slash_questionmark",
    SLEEP: "sleep",
    SPACEBAR: "spacebar",
    SPECIALKEY_2: "specialkey_2",
    T: "t",
    TAB: "tab",
    U: "u",
    V: "v",
    W: "w",
    WAKE_UP: "wake_up",
    WIN: "win",
    X: "x",
    Y: "y",
    Z: "z",
}

const keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shiftleft: 16,
    shiftright: 16,
    ctrlleft: 17,
    ctrlright: 17,
    altleft: 18,
    altright: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    pageup: 33,
    pagedown: 34,
    space: 32,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    _0: 48,
    _1: 49,
    _2: 50,
    _3: 51,
    _4: 52,
    _5: 53,
    _6: 54,
    _7: 55,
    _8: 56,
    _9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    metaleft: 91,
    metaright: 92,
    select: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    numpadmultiply: 106,
    numpadadd: 107,
    numpadsubtract: 109,
    numpaddecimal: 110,
    numpaddivide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    minus: 189,
    period: 190,
    slash: 191,
    backquote: 192,
    bracketleft: 219,
    backslash: 220,
    braketright: 221,
    quote: 222
};

class Interaction{
    constructor(){
        this.key = null
        this.text = null
        this.color = null
        this.position = null
        this.rtl = false
        this.isServer = false
        this.__trigger = false
        this.__on_click = null
    }

    show(){

    }

    destroy(){

    }

    onComplite(fun){

    }
}





export const Position = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    CENTER_LEFT: 'center-left',
    CENTER: 'center',
    CENTER_RIGHT: 'center-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right'
}

export const Color = {
    RED: 'red',
    BLACK: 'black',
    GREEN: 'green',
    BLUE: 'blue',
    PINK: 'pink',
    YELLOW: 'yellow'
}





export function DrawText(player, key, text, color=null, position=null, rtl=false){
    alt.emitClient(player, 'interaction:drawText', key, text, color, position, rtl)
}

export function Hide(player){
    alt.emitClient(player, 'interaction:hide')
}