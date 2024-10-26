const throttle = (callback, delay) => {
    let timer;
    return (event) => {
        // 타이머가 호출되면, 함수를 실행하고 타이머 제거
        if (timer) return;
        timer = setTimeout(async () => {
            await callback(event);
            timer = null;
        }, delay);
    };
};

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

const wheel_logic = (e) => {
    e.preventDefault();
    index = parseInt(location.hash.substring(1));
    if (isNaN(index)){
        location.hash = '#0'
        index = 0;
    }

    if (e.wheelDeltaY > 0) {
        index--;
    }
    if (e.wheelDeltaY < 0) {
        index++;
    }

    const element = document.querySelectorAll("#inner-content");
    if (index >= element.length) {
        index = element.length - 1;
    }
    if (index < 0) {
        index = 0;
    }
    //element[index].scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    
    let elt_coordinates = element[index].getBoundingClientRect();
    window.scrollTo({
        top: Math.floor(elt_coordinates.top + window.pageYOffset),
        behavior: "smooth",
        });
    location.hash = "#"+(index);
}

window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
window.addEventListener('keydown', preventDefaultForScrollKeys, false);
window.addEventListener(wheelEvent, 
    throttle(wheel_logic, 100)
    , wheelOpt); // modern desktop


//initial setting
var fragment = location.hash;
if (fragment.length < 1)
{
    location.hash = '#0'
}
var index = parseInt(fragment.substring(1), 10);
if (isNaN(index)){
    location.hash = '#0'
}