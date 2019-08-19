
let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
    /* console.log(e); */
    c2Cursor = getComputedStyle(cursor);
    var cWidth = c2Cursor.width;
    var pxCursor = cWidth.slice(0,6);
    pxCursor = Math.round(pxCursor);
    cursor.setAttribute("style", "top: " + (e.pageY - (pxCursor/2)) + "px; left: " + (e.pageX -(pxCursor/2)) + "px");
    /* var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px"; */
});


/* Cambio de color del mouse circular */
var btnHero = document.getElementById('btnH');
btnHero.addEventListener('mouseenter', function () {
    /* let cStyle = cursor.getAttribute("style");
    console.log(cStyle);
    cStyle += " width: " + 2 + "rem; " + "height: " + 2 + "rem";
    cursor.setAttribute("style", "");
    cursor.setAttribute("style", cStyle); */
    cursor.classList.add("cursorHover");
});
btnHero.addEventListener('mouseleave', function () {
    cursor.classList.remove('cursorHover');
});
btnHero.addEventListener('onclick', function () {
    console.log('Es clickeable');
});


var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var vc1 = document.getElementById('vc1');
var vc2 = document.getElementById('vc2');
/* var main_text = document.querySelectorAll('.main-text'); */

v1.addEventListener('click', function () {
    if (v1.classList.contains('flex90')) {
        return;
    } else {
        if (v1.classList.contains('flex15')) v1.classList.toggle('flex15');
        v2.classList.toggle('flex90');
        v1.classList.toggle('flex90');
        cursor.classList.toggle('cursorHover2');
    }
    /* videoContent.classList.toggle('displayNoneToggle'); */
});
v2.addEventListener('click', function () {
    if (v2.classList.contains('flex90')) {
        return;
    } else {
        if (v2.classList.contains('flex15')) v2.classList.toggle('flex15');
        v1.classList.toggle('flex90');
        v2.classList.toggle('flex90');
        cursor.classList.toggle('cursorHover2');
    }
    /* videoContent.classList.toggle('displayNoneToggle'); */
});


v1.addEventListener('mouseenter', function () {
    if (v2.classList.contains('flex90') ) {
         v1.classList.toggle('flex15');
         cursor.classList.toggle('cursorHover2');
    }
});
v1.addEventListener('mouseleave', function () {
    if (v2.classList.contains('flex90') ) {
         v1.classList.toggle('flex15');
         cursor.classList.toggle('cursorHover2');
    }
});
v2.addEventListener('mouseenter', function () {
    if (v1.classList.contains('flex90') ) {
         v2.classList.toggle('flex15');
         cursor.classList.toggle('cursorHover2');
    }
});
v2.addEventListener('mouseleave', function () {
    if (v1.classList.contains('flex90') ) {
         v2.classList.toggle('flex15');
         cursor.classList.toggle('cursorHover2');
    }
});


/* Cambio de color del mouse circular */
var btnHero = document.querySelector('.btnHero');
btnHero.addEventListener('mouseenter', function () {
    cursor.classList.toggle('cursorHover1');
    cursor.classList.toggle('cursorHover2');
});
btnHero.addEventListener('mouseleave', function () {
    cursor.classList.toggle('cursorHover1');
    cursor.classList.toggle('cursorHover2');
});
btnHero.addEventListener('click', function () {
    console.log('click boton hero');
});


