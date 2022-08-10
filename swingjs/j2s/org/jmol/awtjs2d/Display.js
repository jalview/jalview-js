(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Display");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
