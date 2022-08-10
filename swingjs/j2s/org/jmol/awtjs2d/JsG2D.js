(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),p$1={},I$=[[0,'org.jmol.awtjs.swing.Color','org.jmol.awtjs2d.Platform','javajs.util.CU']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsG2D", null, null, 'org.jmol.api.GenericGraphics');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isShifted','inPath'],'I',['windowWidth','windowHeight']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getColor4$I$I$I$I', function (r, g, b, a) {
return $I$(1).get4$I$I$I$I(r, g, b, a);
});

Clazz.newMeth(C$, 'getColor3$I$I$I', function (r, g, b) {
return $I$(1).get3$I$I$I(r, g, b);
});

Clazz.newMeth(C$, 'getColor1$I', function (rgb) {
return $I$(1).get1$I(rgb);
});

Clazz.newMeth(C$, 'newGrayScaleImage$O$O$I$I$IA', function (context, image, width, height, grayBuffer) {
return $I$(2).Jmol$().newGrayScaleImage(context, image, width, height, grayBuffer);
});

Clazz.newMeth(C$, 'drawGrayScaleImage$O$O$I$I$I$I$I$I$I$I', function (g, image, destX0, destY0, destX1, destY1, srcX0, srcY0, srcX1, srcY1) {
var iw;
var ih;
{
iw = image.w;
ih = image.h;
}
var dw=(destX1 - destX0 + 1);
var dh=(destY1 - destY0 + 1);
var sw=(srcX1 - srcX0 + 1);
var sh=(srcY1 - srcY0 + 1);
var x=-srcX0 * dw / sw;
var w=iw * dw / sw;
var y=-srcY0 * dh / sh;
var h=ih * dh / sh;
{
image.width = w;
image.height = h;
var div = image.div;
var layer = image.layer;
layer.style.left = destX0 + "px";
layer.style.top = destY0 + "px";
layer.style.width = dw + "px";
layer.style.height = dh+ "px";
div.style.left= x + "px";
div.style.top = y + "px";
div.style.width = w + "px";
div.style.height = h + "px";
}
});

Clazz.newMeth(C$, 'drawLine$O$I$I$I$I', function (g, x0, y0, x1, y1) {
var inPath=this.inPath;
{
if (!inPath) g.beginPath();
g.moveTo(x0, y0);
g.lineTo(x1, y1);
if (!inPath) g.stroke();
}
});

Clazz.newMeth(C$, 'drawCircle$O$I$I$I', function (g, x, y, diameter) {
{
var r = diameter/2;
g.beginPath();
g.arc(x + r, y + r, r, 0, 2 * Math.PI, false);
g.stroke();
}
});

Clazz.newMeth(C$, 'drawPolygon$O$IA$IA$I', function (g, ayPoints, axPoints, nPoints) {
p$1.doPoly$O$IA$IA$I$Z.apply(this, [g, ayPoints, axPoints, nPoints, false]);
});

Clazz.newMeth(C$, 'doPoly$O$IA$IA$I$Z', function (g, axPoints, ayPoints, nPoints, doFill) {
{
g.beginPath();
g.moveTo(axPoints[0], ayPoints[0]);
for (var i = 1; i < nPoints; i++) g.lineTo(axPoints[i], ayPoints[i]);
if (doFill) g.fill();
else g.stroke();
}
}, p$1);

Clazz.newMeth(C$, 'drawRect$O$I$I$I$I', function (g, x, y, width, height) {
{
g.beginPath();
g.rect(x ,y, width, height);
g.stroke();
}
});

Clazz.newMeth(C$, 'drawString$O$S$I$I', function (g, s, x, y) {
{
g.fillText(s,x,y);
}
});

Clazz.newMeth(C$, 'drawStringRotated$O$S$I$I$D', function (g, s, x, y, angle) {
});

Clazz.newMeth(C$, 'fillBackground$O$javajs_api_GenericColor', function (g, bgcolor) {
if (bgcolor == null ) {
{
if (!this.isShifted) { g.translate(-0.5, -0.5);
this.isShifted = true;
} g.clearRect(0,0, this.windowWidth, this.windowHeight);
return;
}
}this.setGraphicsColor$O$javajs_api_GenericColor(g, bgcolor);
this.fillRect$O$I$I$I$I(g, 0, 0, this.windowWidth, this.windowHeight);
});

Clazz.newMeth(C$, 'fillCircle$O$I$I$I', function (g, x, y, diameter) {
{
var r = diameter/2;
g.beginPath();
g.arc(x + r, y + r, r, 0, 2 * Math.PI, false);
g.fill();
}
});

Clazz.newMeth(C$, 'fillPolygon$O$IA$IA$I', function (g, ayPoints, axPoints, nPoints) {
p$1.doPoly$O$IA$IA$I$Z.apply(this, [g, ayPoints, axPoints, nPoints, true]);
});

Clazz.newMeth(C$, 'fillRect$O$I$I$I$I', function (g, x, y, width, height) {
{
g.fillRect(x, y, width, height);
}
});

Clazz.newMeth(C$, 'setGraphicsColor$O$javajs_api_GenericColor', function (g, c) {
var s=$I$(3).toCSSString$javajs_api_GenericColor(c);
{
g.fillStyle = g.strokeStyle = s;
}
});

Clazz.newMeth(C$, 'setFont$O$org_jmol_util_Font', function (g, font) {
var s=font.getInfo$();
var pt=s.indexOf$S(" ");
s=s.substring$I$I(0, pt) + "px" + s.substring$I(pt) ;
{
g.font = s;
}
return font;
});

Clazz.newMeth(C$, 'setStrokeBold$O$Z', function (g, tf) {
{
g.lineWidth = (tf ? 2 : 1);
}
});

Clazz.newMeth(C$, 'setWindowParameters$I$I', function (width, height) {
this.windowWidth=width;
this.windowHeight=height;
});

Clazz.newMeth(C$, 'translateScale$O$D$D$D', function (g, x, y, scale) {
});

Clazz.newMeth(C$, 'canDoLineTo$', function () {
return true;
});

Clazz.newMeth(C$, 'doStroke$O$Z', function (g, isBegin) {
this.inPath=isBegin;
{
if (isBegin) { g.beginPath();
} else { g.stroke();
}
}
});

Clazz.newMeth(C$, 'lineTo$O$I$I', function (g, x2, y2) {
{
g.lineTo(x2, y2);
}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
