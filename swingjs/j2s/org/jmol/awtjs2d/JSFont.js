(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[];
var C$=Clazz.newClass(P$, "JSFont");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newFont$S$Z$Z$F$S', function (fontFace, isBold, isItalic, fontSize, type) {
fontFace=(fontFace.equals$O("Monospaced") ? "Courier" : fontFace.startsWith$S("Sans") ? "Helvetica Neue, Sans-serif" : "Serif");
return (isBold ? "bold " : "") + (isItalic ? "italic " : "") + new Float(fontSize).toString() + type + " " + fontFace ;
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javajs_awt_Font$O', function (font, context) {
{
if (context.font != font.font) { context.font = font.font;
font.font = context.font;
context._fontAscent = Math.ceil(font.fontSize); //pt, not px
// the descent is actually (px - pt)
// but I know of no way of getting access to the drawn height
context._fontDescent = Math.ceil(font.fontSize * 0.25);//approx
}
}
return context;
}, 1);

Clazz.newMeth(C$, 'getAscent$O', function (context) {
{
return Math.ceil(context._fontAscent);
}
}, 1);

Clazz.newMeth(C$, 'getDescent$O', function (context) {
{
return Math.ceil(context._fontDescent);
}
}, 1);

Clazz.newMeth(C$, 'stringWidth$javajs_awt_Font$O$S', function (font, context, text) {
{
context.font = font.font;
return Math.ceil(context.measureText(text).width);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
