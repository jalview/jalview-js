(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[];
var C$=Clazz.newClass(P$, "Display");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getFullScreenDimensions$O$IA', function (canvas, widthHeight) {
{
widthHeight[0] = canvas.width;
widthHeight[1] = canvas.height;
}
}, 1);

Clazz.newMeth(C$, 'hasFocus$O', function (canvas) {
{

}
return true;
}, 1);

Clazz.newMeth(C$, 'requestFocusInWindow$O', function (canvas) {
{

}
}, 1);

Clazz.newMeth(C$, 'renderScreenImage$org_jmol_api_PlatformViewer$O$O', function (vwr, g, size) {
{

}
}, 1);

Clazz.newMeth(C$, 'prompt$S$S$SA$Z', function (label, data, list, asButtons) {
{
var s = (data == null ? alert(label) : prompt(label, data));
if (s != null)return s;
}
return "null";
}, 1);

Clazz.newMeth(C$, 'convertPointFromScreen$O$javajs_util_P3', function (canvas, ptTemp) {
{

}
}, 1);

Clazz.newMeth(C$, 'drawImage$O$O$I$I$I$I$Z', function (context, canvas, x, y, width, height, isDTI) {
{
var buf8 = canvas.buf8;
var buf32 = canvas.buf32;
var n = canvas.width * canvas.height;
var di = 1;
if (isDTI) { var diw = width % 2;
width = Math.floor(width/2);
di = Math.floor(canvas.width/width);
} var dw = (canvas.width - width || x) * 4;
for (var i = 0, p = 0, j = x * 4; i < n;) { buf8[j++] = (buf32[i] >> 16) & 0xFF;
buf8[j++] = (buf32[i] >> 8) & 0xFF;
buf8[j++] = buf32[i] & 0xFF;
buf8[j++] = 0xFF;
i += di;
if (++p%width==0) { if (diw) { i += 1;
buf8[j] = 0;
buf8[j+1] = 0;
buf8[j+2] = 0;
buf8[j+3] = 0;
} j += dw;
} } context.putImageData(canvas.imgdata,0,0);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
