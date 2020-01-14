(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Int2IntHash','javajs.util.AU','javajs.util.CU','org.jmol.c.PAL','org.jmol.util.Logger','javajs.util.PT','org.jmol.util.Escape','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "C");
C$.colixMax=0;
C$.argbs=null;
C$.argbsGreyscale=null;
C$.colixHash=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.colixMax=4;
C$.argbs=Clazz.array(Integer.TYPE, [128]);
C$.colixHash=Clazz.new_($I$(1).c$$I,[256]);
{
var predefinedArgbs=Clazz.array(Integer.TYPE, -1, [-16777216, -23296, -16181, -16776961, -1, -16711681, -65536, -16744448, -8355712, -4144960, -16711936, -8388608, -16777088, -8355840, -8388480, -16744320, -65281, -256, -38476, -10496]);
for (var i=0; i < predefinedArgbs.length; ++i) C$.getColix$I(predefinedArgbs[i]);

};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getColix$I', function (argb) {
if (argb == 0) return $s$[0] = 0, $s$[0];
var translucentFlag=0;
if ((argb & -16777216) != (-16777216)) {
translucentFlag=C$.getTranslucentFlag$F((argb >> 24) & 255);
argb|=-16777216;
}var c=C$.colixHash.get$I(argb);
if ((c & 3) == 3) translucentFlag=0;
return ($s$[0] = ((c > 0 ? c : C$.allocateColix$I$Z(argb, false)) | translucentFlag), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'allocateColix$I$Z', function (argb, forceLast) {
var n;
if (forceLast) {
n=2047;
} else {
for (var i=C$.colixMax; --i >= 4; ) if ((argb & 16777215) == (C$.argbs[i] & 16777215)) return i;

n=C$.colixMax;
}if (n >= C$.argbs.length) {
var newSize=(forceLast ? n + 1 : C$.colixMax * 2);
if (newSize > 2048) newSize=2048;
C$.argbs=$I$(2).arrayCopyI$IA$I(C$.argbs, newSize);
if (C$.argbsGreyscale != null ) C$.argbsGreyscale=$I$(2).arrayCopyI$IA$I(C$.argbsGreyscale, newSize);
}C$.argbs[n]=argb;
if (C$.argbsGreyscale != null ) C$.argbsGreyscale[n]=$I$(3).toFFGGGfromRGB$I(argb);
C$.colixHash.put$I$I(argb, n);
return (n < 2047 ? C$.colixMax++ : C$.colixMax);
}, 1);

Clazz.newMeth(C$, 'setLastGrey$I', function (argb) {
C$.calcArgbsGreyscale$();
C$.argbsGreyscale[2047]=$I$(3).toFFGGGfromRGB$I(argb);
}, 1);

Clazz.newMeth(C$, 'calcArgbsGreyscale$', function () {
if (C$.argbsGreyscale != null ) return;
var a=Clazz.array(Integer.TYPE, [C$.argbs.length]);
for (var i=C$.argbs.length; --i >= 4; ) a[i]=$I$(3).toFFGGGfromRGB$I(C$.argbs[i]);

C$.argbsGreyscale=a;
}, 1);

Clazz.newMeth(C$, 'getArgbGreyscale$H', function (colix) {
if (C$.argbsGreyscale == null ) C$.calcArgbsGreyscale$();
return C$.argbsGreyscale[colix & -30721];
}, 1);

Clazz.newMeth(C$, 'getColixO$O', function (obj) {
if (obj == null ) return 0;
if (Clazz.instanceOf(obj, "org.jmol.c.PAL")) return ((obj) === $I$(4).NONE  ? 0 : 2);
if (Clazz.instanceOf(obj, "java.lang.Integer")) return C$.getColix$I((obj).intValue$());
if (Clazz.instanceOf(obj, "java.lang.String")) return C$.getColixS$S(obj);
if (Clazz.instanceOf(obj, "java.lang.Byte")) return ((obj).byteValue$() == 0 ? 0 : 2);
if ($I$(5).debugging) {
$I$(5).debug$S("?? getColix(" + obj + ")" );
}return 22;
}, 1);

Clazz.newMeth(C$, 'getTranslucentFlag$F', function (translucentLevel) {
if (translucentLevel == 0 ) return 0;
if (translucentLevel < 0 ) return 30720;
if (Float.isNaN$F(translucentLevel) || translucentLevel >= 255   || translucentLevel == 1.0  ) return 16384;
var iLevel=(Math.floor(translucentLevel < 1  ? translucentLevel * 256 : translucentLevel >= 15  ? translucentLevel : translucentLevel <= 9  ? ((Math.floor(translucentLevel - 1)|0)) << 5 : 256)|0);
return (((iLevel >> 5) & 15) << 11);
}, 1);

Clazz.newMeth(C$, 'isColixLastAvailable$H', function (colix) {
return (colix > 0 && (colix & 2047) == 2047 );
}, 1);

Clazz.newMeth(C$, 'getArgb$H', function (colix) {
return C$.argbs[colix & -30721];
}, 1);

Clazz.newMeth(C$, 'isColixColorInherited$H', function (colix) {
switch (colix) {
case 0:
case 1:
return true;
default:
return (colix & -30721) == 1;
}
}, 1);

Clazz.newMeth(C$, 'getColixInherited$H$H', function (myColix, parentColix) {
switch (myColix) {
case 0:
return parentColix;
case 1:
return ($s$[0] = (parentColix & -30721), $s$[0]);
default:
return ((myColix & -30721) == 1 ? ($s$[0] = (parentColix & -30721 | myColix & 30720), $s$[0]) : myColix);
}
}, 1);

Clazz.newMeth(C$, 'renderPass2$H', function (colix) {
var c=colix & 30720;
return (c != 0 && c != 30720 );
}, 1);

Clazz.newMeth(C$, 'isColixTranslucent$H', function (colix) {
return ((colix & 30720) != 0);
}, 1);

Clazz.newMeth(C$, 'getChangeableColixIndex$H', function (colix) {
return (colix >= 0 ? ($s$[0] = -1, $s$[0]) : ($s$[0] = (colix & 2047), $s$[0]));
}, 1);

Clazz.newMeth(C$, 'getColixTranslucent3$H$Z$F', function (colix, isTranslucent, translucentLevel) {
colix=($s$[0] = colix&(~30720), $s$[0]);
if (colix == 0) colix=1;
return (isTranslucent ? ($s$[0] = (colix | C$.getTranslucentFlag$F(translucentLevel)), $s$[0]) : colix);
}, 1);

Clazz.newMeth(C$, 'copyColixTranslucency$H$H', function (colixFrom, colixTo) {
return C$.getColixTranslucent3$H$Z$F(colixTo, C$.isColixTranslucent$H(colixFrom), C$.getColixTranslucencyLevel$H(colixFrom));
}, 1);

Clazz.newMeth(C$, 'getColixTranslucencyFractional$H', function (colix) {
var translevel=C$.getColixTranslucencyLevel$H(colix);
return (translevel == -1 ? 0.5 : translevel == 0 ? 0 : translevel == 255 ? 1 : translevel / 256.0);
}, 1);

Clazz.newMeth(C$, 'getColixTranslucencyLabel$H', function (colix) {
return "translucent " + (new Float((colix & 30720) == 30720 ? -1 : C$.getColixTranslucencyFractional$H(colix)).toString());
}, 1);

Clazz.newMeth(C$, 'getColixTranslucencyLevel$H', function (colix) {
var logAlpha=(colix >> 11) & 15;
switch (logAlpha) {
case 0:
return 0;
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
return logAlpha << 5;
case 15:
return -1;
default:
return 255;
}
}, 1);

Clazz.newMeth(C$, 'getColixS$S', function (colorName) {
var argb=$I$(3).getArgbFromString$S(colorName);
if (argb != 0) return C$.getColix$I(argb);
if ("none".equalsIgnoreCase$S(colorName)) return 0;
if ("opaque".equalsIgnoreCase$S(colorName)) return 1;
return 2;
}, 1);

Clazz.newMeth(C$, 'getColixArray$S', function (colorNames) {
if (colorNames == null  || colorNames.length$() == 0 ) return null;
var colors=$I$(6).getTokens$S(colorNames);
var colixes=Clazz.array(Short.TYPE, [colors.length]);
for (var j=0; j < colors.length; j++) {
colixes[j]=C$.getColix$I($I$(3).getArgbFromString$S(colors[j]));
if (colixes[j] == 0) return null;
}
return colixes;
}, 1);

Clazz.newMeth(C$, 'getHexCode$H', function (colix) {
return $I$(7).escapeColor$I(C$.getArgb$H(colix));
}, 1);

Clazz.newMeth(C$, 'getHexCodes$HA', function (colixes) {
if (colixes == null ) return null;
var s=Clazz.new_($I$(8));
for (var i=0; i < colixes.length; i++) s.append$S(i == 0 ? "" : " ").append$S(C$.getHexCode$H(colixes[i]));

return s.toString();
}, 1);

Clazz.newMeth(C$, 'getColixTranslucent$I', function (argb) {
var a=(argb >> 24) & 255;
return (a == 255 ? C$.getColix$I(argb) : C$.getColixTranslucent3$H$Z$F(C$.getColix$I(argb), true, a / 255.0));
}, 1);

Clazz.newMeth(C$, 'getBgContrast$I', function (argb) {
return (($I$(3).toFFGGGfromRGB$I(argb) & 255) < 128 ? 8 : 4);
}, 1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
