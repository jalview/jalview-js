(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[[0,'org.jmol.awtjs2d.Platform']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Image");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getWidth$O', function (canvas) {
{
return (canvas.imageWidth ? canvas.imageWidth : canvas.width);
}
}, 1);

Clazz.newMeth(C$, 'getHeight$O', function (canvas) {
{
return (canvas.imageHeight ? canvas.imageHeight : canvas.height);
}
}, 1);

Clazz.newMeth(C$, 'grabPixels$O$I$I', function (context, width, height) {
var data=null;
{
data = context.getImageData(0, 0, width, height).data;
}
return C$.toIntARGB$IA(data);
}, 1);

Clazz.newMeth(C$, 'toIntARGB$IA', function (imgData) {
var n=(imgData.length/4|0);
var iData=Clazz.array(Integer.TYPE, [n]);
for (var i=0, j=0; i < n; ) {
iData[i++]=(imgData[j++] << 16) | (imgData[j++] << 8) | imgData[j++] | (imgData[j++] << 24) ;
}
return iData;
}, 1);

Clazz.newMeth(C$, 'getTextPixels$S$javajs_awt_Font$O$I$I$I', function (text, font3d, context, width, height, ascent) {
{
context.fillStyle = "#000000";
context.fillRect(0, 0, width, height);
context.fillStyle = "#FFFFFF";
context.font = font3d.font;
context.fillText(text, 0, ascent);
}
return C$.grabPixels$O$I$I(context, width, height);
}, 1);

Clazz.newMeth(C$, 'allocateRgbImage$I$I$IA$I$Z$O', function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, canvas) {
{
if (canvas == null) canvas = {width:windowWidth,height:windowHeight};
canvas.buf32 = pBuffer;
}
return canvas;
}, 1);

Clazz.newMeth(C$, 'getImageDialog$org_jmol_viewer_Viewer$S$java_util_Map', function (vwr, title, imageMap) {
return $I$(1).Jmol$()._consoleGetImageDialog(vwr, title, imageMap);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
