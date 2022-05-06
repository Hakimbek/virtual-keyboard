/* Button class */
class Button {
    constructor(key, enValue, ruValue, enShift, ruShift, color = '#444444', width = 40, height = 40) {
        this.enValue = enValue; // english keyboard value
        this.ruValue = ruValue; // russian keyboard value
        this.enShift = enShift; // english keyboard Shift value
        this.ruShift = ruShift; // russian keyboard Shift value
        this.color = color; // button color
        this.key = key; // keyboard.code
        this.width = width; // button width
        this.height = height; // button height
    }
}
/*  */

/* Creating buttons */
const a = new Button('KeyA', 'a', 'ф', 'A', 'Ф');
const b = new Button('KeyB', 'b', 'и', 'B', 'И');
const c = new Button('KeyC', 'c', 'с', 'C', 'С');
const d = new Button('KeyD', 'd', 'в', 'D', 'В');
const e = new Button('KeyE', 'e', 'у', 'E', 'У');
const f = new Button('KeyF', 'f', 'а', 'F', 'А');
const g = new Button('KeyG', 'g', 'п', 'G', 'П');
const h = new Button('KeyH', 'h', 'р', 'H', 'Р');
const i = new Button('KeyI', 'i', 'ш', 'I', 'Ш');
const j = new Button('KeyJ', 'j', 'о', 'J', 'О');
const k = new Button('KeyK', 'k', 'л', 'K', 'Л');
const l = new Button('KeyL', 'l', 'д', 'L', 'Д');
const m = new Button('KeyM', 'm', 'ь', 'M', 'Ь');
const n = new Button('KeyN', 'n', 'т', 'N', 'Т');
const o = new Button('KeyO', 'o', 'щ', 'O', 'Щ');
const p = new Button('KeyP', 'p', 'з', 'P', 'З');
const q = new Button('KeyQ', 'q', 'й', 'Q', 'Й');
const r = new Button('KeyR', 'r', 'к', 'R', 'К');
const s = new Button('KeyS', 's', 'ы', 'S', 'Ы');
const t = new Button('KeyT', 't', 'е', 'T', 'Е');
const u = new Button('KeyU', 'u', 'г', 'U', 'Г');
const v = new Button('KeyV', 'v', 'м', 'V', 'М');
const w = new Button('KeyW', 'w', 'ц', 'W', 'Ц');
const x = new Button('KeyX', 'x', 'ч', 'X', 'Ч');
const y = new Button('KeyY', 'y', 'н', 'Y', 'Н');
const z = new Button('KeyZ', 'z', 'я', 'Z', 'Я');

const one = new Button('Digit1', '1', '1', '!', '!');
const two = new Button('Digit2', '2', '2', '@', '"');
const three = new Button('Digit3', '3', '3', '#', '№');
const four = new Button('Digit4', '4', '4', '$', ';');
const five = new Button('Digit5', '5', '5', '%', '%');
const six = new Button('Digit6', '6', '6', '^', ':');
const seven = new Button('Digit7', '7', '7', '&', '?');
const eight = new Button('Digit8', '8', '8', '*', '*');
const nine = new Button('Digit9', '9', '9', '(', '(');
const zero = new Button('Digit0', '0', '0', ')', ')');
const minus = new Button('Minus', '-', '-', '_', '_');
const equal = new Button('Equal', '=', '=', '+', '+');

const comma = new Button('Comma', ',', 'б', '<', 'Б');
const dot = new Button('Period', '.', 'ю', '>', 'Ю');
const slash = new Button('Slash', '/', '.', '?', ',');
const backSlash = new Button('Backslash', '\\', '\\', '|', '/');
const leftSquareBracket = new Button('BracketLeft', '[', 'х', '{', 'Х');
const rightSquareBracket = new Button('BracketRight', ']', 'ъ', '}', 'Ъ');
const semicolon = new Button('Semicolon', ';', 'ж', ':', 'Ж');
const quote = new Button('Quote', '&#39', 'э', '"', 'Э');
const backtick = new Button('Backquote', '`', 'ё', '~', 'Ё');
const space = new Button('Space', ' ', ' ', ' ', ' ', '#444444', 330);

const tab = new Button('Tab', 'Tab', 'Tab', 'Tab', 'Tab', '#222222', 50);
const del = new Button('Delete', 'Del', 'Del', 'Del', 'Del', '#222222', 44);
const capsLock = new Button('CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', '#222222', 100);
const leftShift = new Button('ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', '#222222', 100);
const rightShift = new Button('ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', '#222222', 86);
const enter = new Button('Enter', 'Enter', 'Enter', 'Enter', 'Enter', '#222222', 86);
const up = new Button('ArrowUp', '&#9650', '&#9650', '&#9650', '&#9650', '#222222', 40);
const down = new Button('ArrowDown', '&#9660', '&#9660', '&#9660', '&#9660', '#222222', 40);
const left = new Button('ArrowLeft', '&#9668', '&#9668', '&#9668', '&#9668', '#222222', 40);
const right = new Button('ArrowRight', '&#9658', '&#9658', '&#9658', '&#9658', '#222222', 40);
const leftCtrl = new Button('ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', '#222222', 40);
const rightCtrl = new Button('ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', '#222222', 40);
const win = new Button('MetaLeft', 'Win', 'Win', 'Win', 'Win', '#222222', 40);
const leftAlt = new Button('AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', '#222222', 40);
const rightAlt = new Button('AltRight', 'Alt', 'Alt', 'Alt', 'Alt', '#222222', 40);
const backspace = new Button('Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', '#222222', 100);
/*  */