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

/* Button maker function */
/* Return ready button with all necessary tags and styles */
function makeButton(button) {
  return `<div class='button'
               enValue = '${button.enValue}'
               ruValue = '${button.ruValue}' 
               enShift = '${button.enShift}' 
               ruShift = '${button.ruShift}' 
               color='${button.color}' 
               key='${button.key}' 
               style="background-color: ${button.color}; 
               width: ${button.width}px;
               height: ${button.height}px;
               color: white;
               display: flex;
               justify-content: center;
               align-items: center;
               margin: 3px;
               border-radius: 5px;
               font-size: 15px;
               font-family: sans-serif;
               transition: 0.25s ease-in-out;"></div>`;
}
/*  */

/* HTML */
const body = document.getElementById('body'); // body
body.style.cssText = `width: 720px;
                      margin: 20px auto;`;

body.innerHTML = `${`<h1 id="title" style="text-align: center;
                                           font-family: sans-serif;
                                           color: #097179;">` // title
    + 'hakim\'s keyboard'
    + '</h1>'

    + `<textarea id="textarea" style="width: 100%;
                                                height: 230px;
                                                font-size: 25px;
                                                padding: 15px;
                                                box-sizing: border-box;"></textarea>` // textare
    + `<div id="keyboard" style="width: 100%;
                                 height: auto;
                                 border: 4px solid #222222;
                                 border-radius: 5px;
                                 background-color: #888888;
                                 box-sizing: border-box;
                                 margin-top: 20px;
                                 padding: 3px;">` // keyboard
    + '<div style="display: flex;">'}
        ${makeButton(backtick)}
        ${makeButton(one)}
        ${makeButton(two)}
        ${makeButton(three)}
        ${makeButton(four)}
        ${makeButton(five)}
        ${makeButton(six)}
        ${makeButton(seven)}
        ${makeButton(eight)}
        ${makeButton(nine)}
        ${makeButton(zero)}
        ${makeButton(minus)}
        ${makeButton(equal)}
        ${makeButton(backspace)}
       </div>`
    + `<div style="display: flex;">
        ${makeButton(tab)}
        ${makeButton(q)}
        ${makeButton(w)}
        ${makeButton(e)}
        ${makeButton(r)}
        ${makeButton(t)}
        ${makeButton(y)}
        ${makeButton(u)}
        ${makeButton(i)}
        ${makeButton(o)}
        ${makeButton(p)}
        ${makeButton(leftSquareBracket)}
        ${makeButton(rightSquareBracket)}
        ${makeButton(backSlash)}
        ${makeButton(del)}
       </div>`
    + `<div style="display: flex;">
        ${makeButton(capsLock)}
        ${makeButton(a)}
        ${makeButton(s)}
        ${makeButton(d)}
        ${makeButton(f)}
        ${makeButton(g)}
        ${makeButton(h)}
        ${makeButton(j)}
        ${makeButton(k)}
        ${makeButton(l)}
        ${makeButton(semicolon)}
        ${makeButton(quote)}
        ${makeButton(enter)}
       </div>`
    + `<div style="display: flex;">
        ${makeButton(leftShift)}
        ${makeButton(z)}
        ${makeButton(x)}
        ${makeButton(c)}
        ${makeButton(v)}
        ${makeButton(b)}
        ${makeButton(n)}
        ${makeButton(m)}
        ${makeButton(comma)}
        ${makeButton(dot)}
        ${makeButton(slash)}
        ${makeButton(up)}
        ${makeButton(rightShift)}
       </div>`
    + `<div style="display: flex;">
        ${makeButton(leftCtrl)}
        ${makeButton(win)}
        ${makeButton(leftAlt)}
        ${makeButton(space)}
        ${makeButton(rightAlt)}
        ${makeButton(left)}
        ${makeButton(down)}
        ${makeButton(right)}
        ${makeButton(rightCtrl)}
       </div>`
    + '</div>'
    + `<div>
        <p style="text-align: center;
                  font-size: 20px;
                  margin-top: 40px">Клавиатура создана в системе Windows</p>
        <p style="text-align: center;
                  font-size: 20px;">Для переключения языка комбинация: ctrl + alt</p>
       </div>`;

let index = 0;
let bool = true;

/* Functionality */
/* Button animation */
Object.values(document.getElementsByClassName('button')).forEach((button) => {
  let style = null;

  button.addEventListener('mouseenter', (event) => {
    style = button.getAttribute('style');
    const btn = event;
    if (btn.target.textContent !== 'CapsLock') {
      btn.target.style.backgroundColor = '#5a7059';
      btn.target.style.cursor = 'pointer';
    }
  });

  button.addEventListener('mouseleave', (event) => {
    const btn = event;
    if (btn.target.textContent !== 'CapsLock') {
      btn.target.style.cssText = style;
    }
  });

  button.addEventListener('mousedown', (event) => {
    const btn = event;
    btn.preventDefault();
    btn.target.style.backgroundColor = '#16c95d';
    btn.target.style.borderRadius = '50px';

    // get textarea
    const textarea = document.getElementById('textarea');

    bool = textarea.selectionStart < index;

    if (bool) {
      if (textarea.selectionStart < index) {
        index = textarea.selectionStart;
        bool = false;
      }
    } else if (textarea.selectionStart > index && textarea.selectionStart < textarea.value.length) {
      index = textarea.selectionStart;
      bool = true;
    }

    const start = textarea.value.slice(0, index);
    const end = textarea.value.slice(index);

    // write some value into textarea
    // when backspace is clicked
    if (event.target.getAttribute('key') === 'Backspace') {
      if (index) {
        textarea.value = textarea.value.slice(0, index - 1) + textarea.value.slice(index);
        index -= 1;
      }
    } else if (event.target.getAttribute('key') === 'Tab') { // when tab is clicked
      textarea.value = `${start}    ${end}`;
      index += 4;
    } else if (event.target.textContent === 'Alt' || event.target.textContent === 'Ctrl' || event.target.textContent === 'Win') {

      // do not write anything when Alt, Ctrl, Del, Meta is clicked

    } else if (btn.target.getAttribute('key') === 'Delete') {
      textarea.value = textarea.value.slice(0, index) + textarea.value.slice(index + 1);
    } else if (event.target.getAttribute('key') === 'Enter') { // when enter is clicked
      textarea.value = `${start}\n${end}`;
      index += 1;
    } else if (event.target.getAttribute('key') === 'CapsLock') { // when capslock is clicked
      Object.values(document.getElementsByClassName('button')).forEach((value) => {
        const element = value;

        if (element.textContent.match(/[a-zA-Zа-яА-Я]/) && element.textContent.length === 1) {
          if (element.textContent === element.textContent.toLowerCase()) {
            // make buttons UpperCase
            element.textContent = element.textContent.toUpperCase();
            localStorage.capslock = 'up';
          } else {
            // make buttons LowerCase
            element.textContent = element.textContent.toLowerCase();
            localStorage.capslock = 'low';
          }
        }

        if (element.getAttribute('key') === 'Backquote') {
          if (element.textContent === element.textContent.toLowerCase()) {
            element.textContent = element.textContent.toUpperCase();
          } else {
            element.textContent = element.textContent.toLowerCase();
          }
        }
      });
    } else if (event.target.textContent === 'Shift') { // when shift is clicked
      localStorage.shift = 'on';

      Object.values(document.getElementsByClassName('button')).forEach((value) => {
        const element = value;

        if (localStorage.getItem('lang') === 'en') {
          element.textContent = element.getAttribute('enShift');
        } else {
          element.textContent = element.getAttribute('ruShift');
        }
      });
    } else { // other buttons is clicked
      Object.values(document.getElementsByClassName('button')).forEach((value) => {
        const element = value;

        if (element.getAttribute('key') === btn.target.getAttribute('key')) {
          if (localStorage.shift === 'on') {
            if (localStorage.getItem('lang') === 'en') {
              textarea.value = start + element.getAttribute('enShift') + end;
            } else {
              textarea.value = start + element.getAttribute('ruShift') + end;
            }
          } else if (localStorage.capslock === 'up') {
            if (localStorage.getItem('lang') === 'en') {
              textarea.value = start + element.getAttribute('enValue').toUpperCase() + end;
            } else {
              textarea.value = start + element.getAttribute('ruValue').toUpperCase() + end;
            }
          } else if (localStorage.getItem('lang') === 'en') {
            textarea.value = start + element.getAttribute('enValue') + end;
          } else {
            textarea.value = start + element.getAttribute('ruValue') + end;
          }
        }
      });
      index += 1;
    }
  });

  button.addEventListener('mouseup', (event) => {
    const btn = event;
    // btn.target.style.cssText = style;
    // btn.target.style.backgroundColor = '#5a7059';
    btn.target.style.cursor = 'pointer';

    if (btn.target.textContent === 'Shift') {
      localStorage.shift = 'off';
    }

    Object.values(document.getElementsByClassName('button')).forEach((value) => {
      const element = value;

      if (localStorage.shift === 'on') {
        if (localStorage.getItem('lang') === 'en') {
          element.textContent = element.getAttribute('enShift');
        } else {
          element.textContent = element.getAttribute('ruShift');
        }
      } else if (localStorage.capslock === 'up') {
        if (localStorage.getItem('lang') === 'en') {
          if (element.textContent.match(/[a-zA-Z]/) && element.textContent.length === 1) {
            element.textContent = element.getAttribute('enValue').toUpperCase();
          } else {
            element.textContent = element.getAttribute('enValue');
          }
        } else {
          if (element.textContent.match(/[а-яА-Я]/) && element.textContent.length === 1) {
            element.textContent = element.getAttribute('ruValue').toUpperCase();
          } else {
            element.textContent = element.getAttribute('ruValue');
          }

          if (element.getAttribute('key') === 'Backquote') {
            element.textContent = element.getAttribute('ruValue').toUpperCase();
          }
        }
      } else if (localStorage.getItem('lang') === 'en') {
        element.textContent = element.getAttribute('enValue');
      } else {
        element.textContent = element.getAttribute('ruValue');
      }

      if (element.getAttribute('key') === 'CapsLock') {
        if (localStorage.capslock === 'low') {
          element.style.cssText += `background-color: ${element.getAttribute('color')};
                                         border-radius: 5px;`;
        }
      } else if (localStorage.shift === 'on') {
        if (element.getAttribute('key') !== 'ShiftLeft' || element.getAttribute('key') !== 'ShiftLeft') {
          element.style.cssText += `background-color: ${element.getAttribute('color')};
                                         border-radius: 5px;`;
        }
      } else {
        element.style.cssText += `background-color: ${element.getAttribute('color')};
                                         border-radius: 5px;`;
      }
    });
  });
});

/* Change keyboard language with Alt+Ctrl or Ctrl+Alt combination */
window.addEventListener('keydown', (event) => {
  // if Ctrl+Alt or Alt+Ctrl clicked
  if ((event.ctrlKey && event.key === 'Alt') || (event.altKey && event.key === 'Control')) {
    Object.values(document.getElementsByClassName('button')).forEach((value) => {
      const button = value;
      // change language
      if (localStorage.getItem('lang') === 'en') {
        button.textContent = button.getAttribute('enValue');
      } else {
        button.textContent = button.getAttribute('ruValue');
      }
    });

    // change lang property in localstorage
    if (localStorage.getItem('lang') === 'en') {
      localStorage.setItem('lang', 'ru');
    } else {
      localStorage.setItem('lang', 'en');
    }
  }
});

document.getElementById('textarea').addEventListener('click', () => {
  if (document.getElementById('textarea').selectionStart === document.getElementById('textarea').value.length) {
    index = document.getElementById('textarea').selectionStart;
  }
});

/* Works after keydown */
window.addEventListener('keydown', (event) => {
  event.preventDefault(); // clear all default functions of buttons

  // change button background color
  Object.values(document.getElementsByClassName('button')).forEach((value) => {
    const button = value;
    if (button.getAttribute('key') === event.code) {
      button.style.cssText += `background-color: #16c95d;
                               border-radius: 50px;`;
    }
  });

  // get textarea
  const textarea = document.getElementById('textarea');

  // console.log(textarea.value.length)
  bool = textarea.selectionStart < index;

  if (bool) {
    if (textarea.selectionStart < index) {
      index = textarea.selectionStart;
      bool = false;
    }
  } else if (textarea.selectionStart > index && textarea.selectionStart < textarea.value.length) {
    index = textarea.selectionStart;
    bool = true;
  }

  const start = textarea.value.slice(0, index);
  const end = textarea.value.slice(index);

  // write some value into textarea
  // when backspace is clicked
  if (event.key === 'Backspace') {
    if (index) {
      textarea.value = textarea.value.slice(0, index - 1) + textarea.value.slice(index);
      index -= 1;
    }
  } else if (event.key === 'Tab') { // when tab is clicked
    textarea.value = `${start}    ${end}`;
    index += 4;
  } else if (event.key === 'Alt' || event.key === 'Control' || event.key === 'Meta') {

    // do not write anything when Alt, Ctrl, Meta is clicked

  } else if (event.key === 'Delete') {
    textarea.value = textarea.value.slice(0, index) + textarea.value.slice(index + 1);
  } else if (event.key === 'Enter') { // when enter is clicked
    textarea.value = `${start}\n${end}`;
    index += 1;
  } else if (event.code === 'CapsLock') { // when capslock is clicked
    Object.values(document.getElementsByClassName('button')).forEach((value) => {
      const button = value;

      if (button.textContent.match(/[a-zA-Zа-яА-Я]/) && button.textContent.length === 1) {
        if (button.textContent === button.textContent.toLowerCase()) {
          // make buttons UpperCase
          button.textContent = button.textContent.toUpperCase();
          localStorage.capslock = 'up';
        } else {
          // make buttons LowerCase
          button.textContent = button.textContent.toLowerCase();
          localStorage.capslock = 'low';
        }
      }

      if (button.getAttribute('key') === 'Backquote') {
        if (button.textContent === button.textContent.toLowerCase()) {
          button.textContent = button.textContent.toUpperCase();
        } else {
          button.textContent = button.textContent.toLowerCase();
        }
      }
    });
  } else if (event.key === 'Shift') { // when shift is clicked
    localStorage.shift = 'on';

    Object.values(document.getElementsByClassName('button')).forEach((value) => {
      const button = value;

      if (localStorage.getItem('lang') === 'en') {
        button.textContent = button.getAttribute('enShift');
      } else {
        button.textContent = button.getAttribute('ruShift');
      }
    });
  } else { // other buttons is clicked
    Object.values(document.getElementsByClassName('button')).forEach((value) => {
      const button = value;
      if (button.getAttribute('key') === event.code) {
        if (localStorage.shift === 'on') {
          if (localStorage.getItem('lang') === 'en') {
            textarea.value = start + button.getAttribute('enShift') + end;
          } else {
            textarea.value = start + button.getAttribute('ruShift') + end;
          }
        } else if (localStorage.capslock === 'up') {
          if (localStorage.getItem('lang') === 'en') {
            textarea.value = start + button.getAttribute('enValue').toUpperCase() + end;
          } else {
            textarea.value = start + button.getAttribute('ruValue').toUpperCase() + end;
          }
        } else if (localStorage.getItem('lang') === 'en') {
          textarea.value = start + button.getAttribute('enValue') + end;
        } else {
          textarea.value = start + button.getAttribute('ruValue') + end;
        }
      }
    });
    index += 1;
  }
});
/*  */

/* Works when keyup */
window.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    localStorage.shift = 'off';
  }

  Object.values(document.getElementsByClassName('button')).forEach((value) => {
    const button = value;

    if (localStorage.shift === 'on') {
      if (localStorage.getItem('lang') === 'en') {
        button.textContent = button.getAttribute('enShift');
      } else {
        button.textContent = button.getAttribute('ruShift');
      }
    } else if (localStorage.capslock === 'up') {
      if (localStorage.getItem('lang') === 'en') {
        if (button.textContent.match(/[a-zA-Z]/) && button.textContent.length === 1) {
          button.textContent = button.getAttribute('enValue').toUpperCase();
        } else {
          button.textContent = button.getAttribute('enValue');
        }
      } else {
        if (button.textContent.match(/[а-яА-Я]/) && button.textContent.length === 1) {
          button.textContent = button.getAttribute('ruValue').toUpperCase();
        } else {
          button.textContent = button.getAttribute('ruValue');
        }

        if (button.getAttribute('key') === 'Backquote') {
          button.textContent = button.getAttribute('ruValue').toUpperCase();
        }
      }
    } else if (localStorage.getItem('lang') === 'en') {
      button.textContent = button.getAttribute('enValue');
    } else {
      button.textContent = button.getAttribute('ruValue');
    }

    if (button.getAttribute('key') === 'CapsLock') {
      if (localStorage.capslock === 'low') {
        button.style.cssText += `background-color: ${button.getAttribute('color')};
                                         border-radius: 5px;`;
      }
    } else if (localStorage.shift === 'on') {
      if (button.getAttribute('key') !== 'ShiftLeft' || button.getAttribute('key') !== 'ShiftLeft') {
        button.style.cssText += `background-color: ${button.getAttribute('color')};
                                         border-radius: 5px;`;
      }
    } else {
      button.style.cssText += `background-color: ${button.getAttribute('color')};
                                         border-radius: 5px;`;
    }
  });
});
/*  */

/* Work after page load */
window.addEventListener('load', () => {
  // if page is loaded set local storage properties
  if (!localStorage.initialLoad) {
    localStorage.lang = 'en'; // set lang
    localStorage.capslock = 'low'; // set capslock
    localStorage.shift = 'off'; // set shift
    localStorage.initialLoad = true; // do not run this code after first load
  }

  // render buttons value
  Object.values(document.getElementsByClassName('button')).forEach((value) => {
    const button = value;
    if (localStorage.getItem('lang') === 'en') {
      button.textContent = button.getAttribute('enValue');
    } else {
      button.textContent = button.getAttribute('ruValue');
    }
  });
});
/*  */
