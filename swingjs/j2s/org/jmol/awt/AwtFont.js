(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.util.Hashtable','java.awt.font.TextAttribute','java.awt.Font']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AwtFont");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newFont$S$Z$Z$F', function (fontFace, isBold, isItalic, fontSize) {
var fontMap=Clazz.new_($I$(1,1));
fontMap.put$O$O($I$(2).FAMILY, fontFace);
if (isBold) fontMap.put$O$O($I$(2).WEIGHT, $I$(2).WEIGHT_BOLD);
if (isItalic) fontMap.put$O$O($I$(2).POSTURE, $I$(2).POSTURE_OBLIQUE);
fontMap.put$O$O($I$(2).SIZE, Float.valueOf$F(fontSize));
return Clazz.new_($I$(3,1).c$$java_util_Map,[fontMap]);
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$org_jmol_util_Font$O', function (font, graphics) {
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
