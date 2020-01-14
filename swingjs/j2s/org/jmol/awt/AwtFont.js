(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.util.Hashtable','java.awt.font.TextAttribute','java.awt.Font']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AwtFont");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newFont$S$Z$Z$F', function (fontFace, isBold, isItalic, fontSize) {
var fontMap=Clazz.new_($I$(1));
fontMap.put$TK$TV($I$(2).FAMILY, fontFace);
if (isBold) fontMap.put$TK$TV($I$(2).WEIGHT, $I$(2).WEIGHT_BOLD);
if (isItalic) fontMap.put$TK$TV($I$(2).POSTURE, $I$(2).POSTURE_OBLIQUE);
fontMap.put$TK$TV($I$(2).SIZE, Float.valueOf$F(fontSize));
return Clazz.new_($I$(3).c$$java_util_Map,[fontMap]);
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javajs_awt_Font$O', function (font, graphics) {
return (graphics).getFontMetrics$java_awt_Font(font.font);
}, 1);

Clazz.newMeth(C$, 'getAscent$O', function (fontMetrics) {
return (fontMetrics).getAscent$();
}, 1);

Clazz.newMeth(C$, 'getDescent$O', function (fontMetrics) {
return (fontMetrics).getDescent$();
}, 1);

Clazz.newMeth(C$, 'stringWidth$O$S', function (fontMetrics, text) {
return (fontMetrics).stringWidth$S(text);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
