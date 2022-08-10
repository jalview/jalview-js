(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.c.PAL','org.jmol.viewer.JC','javajs.util.PT','javajs.util.CU','org.jmol.util.Logger','javajs.util.AU','org.jmol.util.C','javajs.util.Lst','org.jmol.util.Escape']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentPalette=0;
this.currentSegmentCount=1;
this.isTranslucent=false;
this.userScale=Clazz.array(Integer.TYPE, -1, [-8355712]);
this.thisScale=Clazz.array(Integer.TYPE, -1, [-8355712]);
this.thisName="scheme";
},1);

C$.$fields$=[['Z',['isTranslucent','isReversed','isColorIndex'],'F',['lo','hi'],'I',['ihalf','currentPalette','currentSegmentCount'],'S',['thisName'],'O',['vwr','org.jmol.viewer.Viewer','paletteBW','int[]','+paletteWB','+paletteFriendly','+argbsCpk','+argbsRoygb','+argbsRwb','+argbsShapely','+argbsAmino','+argbsNucleic','schemes','java.util.Map','userScale','int[]','+thisScale','ce','org.jmol.util.ColorEncoder']]
,['O',['colorSchemes','String[]','rasmolScale','int[]','+argbsChainAtom','+argbsChainHetero']]]

Clazz.newMeth(C$, 'c$$org_jmol_util_ColorEncoder$org_jmol_viewer_Viewer', function (ce, vwr) {
;C$.$init$.apply(this);
if (ce == null ) {
this.vwr=vwr;
this.schemes=Clazz.new_($I$(1,1));
this.argbsCpk=$I$(2).argbsCpk;
this.argbsRoygb=$I$(3).argbsRoygbScale;
this.argbsRwb=$I$(3).argbsRwbScale;
this.argbsAmino=this.argbsNucleic=this.argbsShapely=null;
this.ihalf=($I$(3).argbsRoygbScale.length/3|0);
this.ce=this;
} else {
this.ce=ce;
this.vwr=ce.vwr;
this.schemes=ce.schemes;
}}, 1);

Clazz.newMeth(C$, 'getSchemeIndex$S', function (colorScheme) {
for (var i=0; i < C$.colorSchemes.length; i++) if (C$.colorSchemes[i].equalsIgnoreCase$S(colorScheme)) return (i >= 16 ? i - 16 : i < - -13 ? i : -i);

return -1;
}, 1);

Clazz.newMeth(C$, 'fixName$S', function (name) {
if (name.equalsIgnoreCase$S("byelement")) return "byelement_jmol";
var ipt=C$.getSchemeIndex$S(name);
return (ipt >= 0 ? C$.colorSchemes[ipt] : name.toLowerCase$());
}, 1);

Clazz.newMeth(C$, 'makeColorScheme$S$IA$Z', function (name, scale, isOverloaded) {
name=C$.fixName$S(name);
if (scale == null ) {
this.schemes.remove$O(name);
var iScheme=this.createColorScheme$S$Z$Z(name, false, isOverloaded);
if (isOverloaded) switch (iScheme) {
case 2147483647:
return 0;
case 12:
this.paletteFriendly=p$1.getPaletteAC.apply(this, []);
break;
case 10:
this.paletteBW=p$1.getPaletteBW.apply(this, []);
break;
case 11:
this.paletteWB=p$1.getPaletteWB.apply(this, []);
break;
case 0:
case 1:
this.argbsRoygb=$I$(3).argbsRoygbScale;
break;
case 6:
case 7:
this.argbsRwb=$I$(3).argbsRwbScale;
break;
case 2:
this.argbsCpk=$I$(2).argbsCpk;
break;
case 3:
C$.getRasmolScale$();
break;
case 17:
p$1.getNucleic.apply(this, []);
break;
case 5:
p$1.getAmino.apply(this, []);
break;
case 4:
p$1.getShapely.apply(this, []);
break;
}
return iScheme;
}this.schemes.put$O$O(name, scale);
p$1.setThisScheme$S$IA.apply(this, [name, scale]);
var iScheme=this.createColorScheme$S$Z$Z(name, false, isOverloaded);
if (isOverloaded) switch (iScheme) {
case 10:
this.paletteBW=this.thisScale;
break;
case 11:
this.paletteWB=this.thisScale;
break;
case 0:
case 1:
this.argbsRoygb=this.thisScale;
this.ihalf=(this.argbsRoygb.length/3|0);
break;
case 6:
case 7:
this.argbsRwb=this.thisScale;
break;
case 2:
this.argbsCpk=this.thisScale;
break;
case 3:
break;
case 5:
this.argbsAmino=this.thisScale;
break;
case 17:
this.argbsNucleic=this.thisScale;
break;
case 4:
this.argbsShapely=this.thisScale;
break;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'getShapely', function () {
return (this.argbsShapely == null  ? this.argbsShapely=this.vwr.getJBR$().getArgbs$I(1073742144) : this.argbsShapely);
}, p$1);

Clazz.newMeth(C$, 'getAmino', function () {
return (this.argbsAmino == null  ? this.argbsAmino=this.vwr.getJBR$().getArgbs$I(2097154) : this.argbsAmino);
}, p$1);

Clazz.newMeth(C$, 'getNucleic', function () {
return (this.argbsNucleic == null  ? this.argbsNucleic=this.vwr.getJBR$().getArgbs$I(2097166) : this.argbsNucleic);
}, p$1);

Clazz.newMeth(C$, 'createColorScheme$S$Z$Z', function (colorScheme, defaultToRoygb, isOverloaded) {
colorScheme=colorScheme.toLowerCase$();
if (colorScheme.equals$O("inherit")) return 15;
var pt=Math.max(colorScheme.indexOf$S("="), colorScheme.indexOf$S("["));
if (pt >= 0) {
var name=$I$(4,"replaceAllCharacters$S$S$S",[colorScheme.substring$I$I(0, pt), " =", ""]);
if (name.length$() > 0) isOverloaded=true;
var n=0;
if (colorScheme.length$() > pt + 1 && !colorScheme.contains$CharSequence("[") ) {
colorScheme="[" + colorScheme.substring$I(pt + 1).trim$() + "]" ;
colorScheme=$I$(4,"rep$S$S$S",[colorScheme.replace$C$C("\n", " "), "  ", " "]);
colorScheme=$I$(4).rep$S$S$S(colorScheme, ", ", ",").replace$C$C(" ", ",");
colorScheme=$I$(4).rep$S$S$S(colorScheme, ",", "][");
}pt=-1;
while ((pt=colorScheme.indexOf$S$I("[", pt + 1)) >= 0)n++;

if (n == 0) return p$1.makeColorScheme$S$IA$Z.apply(this, [name, null, isOverloaded]);
var scale=Clazz.array(Integer.TYPE, [n]);
n=0;
while ((pt=colorScheme.indexOf$S$I("[", pt + 1)) >= 0){
var pt2=colorScheme.indexOf$S$I("]", pt);
if (pt2 < 0) pt2=colorScheme.length$() - 1;
var c=$I$(5,"getArgbFromString$S",[colorScheme.substring$I$I(pt, pt2 + 1)]);
if (c == 0) c=$I$(5,"getArgbFromString$S",[colorScheme.substring$I$I(pt + 1, pt2).trim$()]);
if (c == 0) {
$I$(6,"error$S",["error in color value: " + colorScheme.substring$I$I(pt, pt2 + 1)]);
return 0;
}scale[n++]=c;
}
if (name.equals$O("user")) {
this.setUserScale$IA(scale);
return -13;
}return p$1.makeColorScheme$S$IA$Z.apply(this, [name, scale, isOverloaded]);
}colorScheme=C$.fixName$S(colorScheme);
var ipt=C$.getSchemeIndex$S(colorScheme);
if (this.schemes.containsKey$O(colorScheme)) {
p$1.setThisScheme$S$IA.apply(this, [colorScheme, this.schemes.get$O(colorScheme)]);
return ipt;
}return (ipt != -1 ? ipt : defaultToRoygb ? 0 : 2147483647);
});

Clazz.newMeth(C$, 'setUserScale$IA', function (scale) {
this.ce.userScale=scale;
p$1.makeColorScheme$S$IA$Z.apply(this, ["user", scale, false]);
});

Clazz.newMeth(C$, 'getColorSchemeArray$I', function (palette) {
var b;
switch (palette) {
case -1:
return this.thisScale;
case 0:
return this.ce.argbsRoygb;
case 1:
return $I$(7).arrayCopyRangeRevI$IA$I$I(this.ce.argbsRoygb, 0, -1);
case 8:
return $I$(7).arrayCopyRangeI$IA$I$I(this.ce.argbsRoygb, 0, this.ce.ihalf);
case 9:
var a=$I$(7).arrayCopyRangeI$IA$I$I(this.ce.argbsRoygb, this.ce.argbsRoygb.length - 2 * this.ce.ihalf, -1);
b=Clazz.array(Integer.TYPE, [this.ce.ihalf]);
for (var i=b.length, j=a.length; --i >= 0 && --j >= 0 ; ) b[i]=a[j--];

return b;
case 12:
return p$1.getPaletteAC.apply(this, []);
case 10:
return p$1.getPaletteBW.apply(this, []);
case 11:
return p$1.getPaletteWB.apply(this, []);
case 6:
return this.ce.argbsRwb;
case 7:
return $I$(7).arrayCopyRangeRevI$IA$I$I(this.ce.argbsRwb, 0, -1);
case 2:
return this.ce.argbsCpk;
case 3:
return C$.getRasmolScale$();
case 4:
return p$1.getShapely.apply(this.ce, []);
case 17:
return p$1.getNucleic.apply(this.ce, []);
case 5:
return p$1.getAmino.apply(this.ce, []);
case -13:
return this.ce.userScale;
case -14:
return $I$(7).arrayCopyRangeRevI$IA$I$I(this.ce.userScale, 0, -1);
default:
return null;
}
});

Clazz.newMeth(C$, 'getColorIndexFromPalette$F$F$F$I$Z', function (val, lo, hi, palette, isTranslucent) {
var colix=$I$(8,"getColix$I",[this.getArgbFromPalette$F$F$F$I(val, lo, hi, palette)]);
if (isTranslucent) {
var f=(hi - val) / (hi - lo);
if (f > 1 ) f=1;
 else if (f < 0.125 ) f=0.125;
colix=$I$(8).getColixTranslucent3$H$Z$F(colix, true, f);
}return colix;
});

Clazz.newMeth(C$, 'getPaletteColorCount$I', function (palette) {
switch (palette) {
case -1:
return this.thisScale.length;
case 10:
case 11:
return p$1.getPaletteBW.apply(this, []).length;
case 0:
case 1:
return this.ce.argbsRoygb.length;
case 8:
case 9:
return this.ce.ihalf;
case 6:
case 7:
return this.ce.argbsRwb.length;
case -13:
case -14:
return this.ce.userScale.length;
case 2:
return this.ce.argbsCpk.length;
case 3:
return C$.getRasmolScale$().length;
case 4:
return p$1.getShapely.apply(this.ce, []).length;
case 17:
return p$1.getNucleic.apply(this.ce, []).length;
case 5:
return p$1.getAmino.apply(this.ce, []).length;
case 12:
return p$1.getPaletteAC.apply(this, []).length;
default:
return 0;
}
}, p$1);

Clazz.newMeth(C$, 'getArgbFromPalette$F$F$F$I', function (val, lo, hi, palette) {
if (Float.isNaN$F(val)) return -8355712;
var n=p$1.getPaletteColorCount$I.apply(this, [palette]);
switch (palette) {
case -1:
if (this.isColorIndex) {
lo=0;
hi=this.thisScale.length;
}return this.thisScale[C$.quantize4$F$F$F$I(val, lo, hi, n)];
case 10:
return p$1.getPaletteBW.apply(this, [])[C$.quantize4$F$F$F$I(val, lo, hi, n)];
case 11:
return p$1.getPaletteWB.apply(this, [])[C$.quantize4$F$F$F$I(val, lo, hi, n)];
case 0:
return this.ce.argbsRoygb[C$.quantize4$F$F$F$I(val, lo, hi, n)];
case 1:
return this.ce.argbsRoygb[C$.quantize4$F$F$F$I(-val, -hi, -lo, n)];
case 8:
return this.ce.argbsRoygb[C$.quantize4$F$F$F$I(val, lo, hi, n)];
case 9:
return this.ce.argbsRoygb[this.ce.ihalf + C$.quantize4$F$F$F$I(val, lo, hi, n) * 2];
case 6:
return this.ce.argbsRwb[C$.quantize4$F$F$F$I(val, lo, hi, n)];
case 7:
return this.ce.argbsRwb[C$.quantize4$F$F$F$I(-val, -hi, -lo, n)];
case -13:
return (this.ce.userScale.length == 0 ? -8355712 : this.ce.userScale[C$.quantize4$F$F$F$I(val, lo, hi, n)]);
case -14:
return (this.ce.userScale.length == 0 ? -8355712 : this.ce.userScale[C$.quantize4$F$F$F$I(-val, -hi, -lo, n)]);
case 2:
return this.ce.argbsCpk[C$.colorIndex$F$I(val, n)];
case 3:
return C$.getRasmolScale$()[C$.colorIndex$F$I(val, n)];
case 4:
return p$1.getShapely.apply(this.ce, [])[C$.colorIndex$F$I(val, n)];
case 5:
return p$1.getAmino.apply(this.ce, [])[C$.colorIndex$F$I(val, n)];
case 17:
return p$1.getNucleic.apply(this.ce, [])[C$.colorIndex$F$I(val - 24 + 2, n)];
case 12:
return p$1.getPaletteAC.apply(this, [])[C$.colorIndexRepeat$F$I(val, n)];
default:
return -8355712;
}
});

Clazz.newMeth(C$, 'setThisScheme$S$IA', function (name, scale) {
this.thisName=name;
this.thisScale=scale;
if (name.equals$O("user")) this.userScale=scale;
this.isColorIndex=(name.indexOf$S("byelement") == 0 || name.indexOf$S("byresidue") == 0 );
}, p$1);

Clazz.newMeth(C$, 'getArgb$F', function (val) {
return (this.isReversed ? this.getArgbFromPalette$F$F$F$I(-val, -this.hi, -this.lo, this.currentPalette) : this.getArgbFromPalette$F$F$F$I(val, this.lo, this.hi, this.currentPalette));
});

Clazz.newMeth(C$, 'getArgbMinMax$F$F$F', function (val, min, max) {
return (this.isReversed ? this.getArgbFromPalette$F$F$F$I(-val, -max, -min, this.currentPalette) : this.getArgbFromPalette$F$F$F$I(val, min, max, this.currentPalette));
});

Clazz.newMeth(C$, 'getColorIndex$F', function (val) {
return (this.isReversed ? this.getColorIndexFromPalette$F$F$F$I$Z(-val, -this.hi, -this.lo, this.currentPalette, this.isTranslucent) : this.getColorIndexFromPalette$F$F$F$I$Z(val, this.lo, this.hi, this.currentPalette, this.isTranslucent));
});

Clazz.newMeth(C$, 'getColorKey$', function () {
var info=Clazz.new_($I$(1,1));
var segmentCount=p$1.getPaletteColorCount$I.apply(this, [this.currentPalette]);
var colors=Clazz.new_($I$(9,1));
var values=Clazz.array(Float.TYPE, [segmentCount + 1]);
var quantum=(this.hi - this.lo) / segmentCount;
var f=quantum * (this.isReversed ? -0.5 : 0.5);
for (var i=0; i < segmentCount; i++) {
values[i]=(this.isReversed ? this.hi - i * quantum : this.lo + i * quantum);
colors.addLast$O($I$(5,"colorPtFromInt$I$javajs_util_P3",[this.getArgb$F(values[i] + f), null]));
}
values[segmentCount]=(this.isReversed ? this.lo : this.hi);
info.put$O$O("values", values);
info.put$O$O("colors", colors);
info.put$O$O("min", Float.valueOf$F(this.lo));
info.put$O$O("max", Float.valueOf$F(this.hi));
info.put$O$O("reversed", Boolean.valueOf$Z(this.isReversed));
info.put$O$O("name", this.getCurrentColorSchemeName$());
return info;
});

Clazz.newMeth(C$, 'getColorScheme$', function () {
return (this.isTranslucent ? "translucent " : "") + (this.currentPalette < 0 ? C$.getColorSchemeList$IA(this.getColorSchemeArray$I(this.currentPalette)) : this.getColorSchemeName$I(this.currentPalette));
});

Clazz.newMeth(C$, 'setColorScheme$S$Z', function (colorScheme, isTranslucent) {
this.isTranslucent=isTranslucent;
if (colorScheme != null ) this.currentPalette=this.createColorScheme$S$Z$Z(colorScheme, true, false);
});

Clazz.newMeth(C$, 'setRange$F$F$Z', function (lo, hi, isReversed) {
if (hi == 3.4028235E38 ) {
lo=1;
hi=p$1.getPaletteColorCount$I.apply(this, [this.currentPalette]) + 1;
}this.lo=Math.min(lo, hi);
this.hi=Math.max(lo, hi);
this.isReversed=isReversed;
});

Clazz.newMeth(C$, 'getCurrentColorSchemeName$', function () {
return this.getColorSchemeName$I(this.currentPalette);
});

Clazz.newMeth(C$, 'getColorSchemeName$I', function (i) {
var absi=Math.abs(i);
return (i == -1 ? this.thisName : absi < C$.colorSchemes.length && absi >= 0  ? C$.colorSchemes[absi] : null);
});

Clazz.newMeth(C$, 'getColorSchemeList$IA', function (scheme) {
if (scheme == null ) return "";
var colors="";
for (var i=0; i < scheme.length; i++) colors += (i == 0 ? "" : " ") + $I$(10).escapeColor$I(scheme[i]);

return colors;
}, 1);

Clazz.newMeth(C$, 'getRasmolScale$', function () {
if (C$.rasmolScale != null ) return C$.rasmolScale;
C$.rasmolScale=Clazz.array(Integer.TYPE, [$I$(2).argbsCpk.length]);
var argb=$I$(2).argbsCpkRasmol[0] | -16777216;
for (var i=C$.rasmolScale.length; --i >= 0; ) C$.rasmolScale[i]=argb;

for (var i=$I$(2).argbsCpkRasmol.length; --i >= 0; ) {
argb=$I$(2).argbsCpkRasmol[i];
C$.rasmolScale[argb >> 24]=argb | -16777216;
}
return C$.rasmolScale;
}, 1);

Clazz.newMeth(C$, 'getPaletteAC', function () {
return (this.ce.paletteFriendly == null  ? this.ce.paletteFriendly=Clazz.array(Integer.TYPE, -1, [8421504, 1067945, 11141282, 13235712, 16753152, 2640510, 8331387, 10467374, 12553008, 339310, 7209065, 8626176, 10906112, 4488148, 13907405, 14219839, 16759360, 6984660, 13918415, 14809713, 16764019]) : this.ce.paletteFriendly);
}, p$1);

Clazz.newMeth(C$, 'getPaletteWB', function () {
if (this.ce.paletteWB != null ) return this.ce.paletteWB;
var b=Clazz.array(Integer.TYPE, [$I$(3).argbsRoygbScale.length]);
for (var i=0; i < b.length; i++) {
var xff=(1.0 / b.length * (b.length - i));
b[i]=$I$(5).colorTriadToFFRGB$F$F$F(xff, xff, xff);
}
return this.ce.paletteWB=b;
}, p$1);

Clazz.newMeth(C$, 'getPaletteAtoB$I$I$I', function (color1, color2, n) {
if (n < 2) n=$I$(3).argbsRoygbScale.length;
var b=Clazz.array(Integer.TYPE, [n]);
var rgb1=Clazz.array(Float.TYPE, [3]);
var rgb2=Clazz.array(Float.TYPE, [3]);
$I$(5).toRGB3f$I$FA(color1, rgb1);
$I$(5).toRGB3f$I$FA(color2, rgb2);
var dr=(rgb2[0] - rgb1[0]) / (n - 1);
var dg=(rgb2[1] - rgb1[1]) / (n - 1);
var db=(rgb2[2] - rgb1[2]) / (n - 1);
for (var i=0; i < n; i++) b[i]=$I$(5).colorTriadToFFRGB$F$F$F(rgb1[0] + dr * i, rgb1[1] + dg * i, rgb1[2] + db * i);

return b;
}, 1);

Clazz.newMeth(C$, 'getPaletteBW', function () {
if (this.ce.paletteBW != null ) return this.ce.paletteBW;
var b=Clazz.array(Integer.TYPE, [$I$(3).argbsRoygbScale.length]);
for (var i=0; i < b.length; i++) {
var xff=(1.0 / b.length * i);
b[i]=$I$(5).colorTriadToFFRGB$F$F$F(xff, xff, xff);
}
return this.ce.paletteBW=b;
}, p$1);

Clazz.newMeth(C$, 'quantize$F$Z', function (x, isLowEnd) {
var n=p$1.getPaletteColorCount$I.apply(this, [this.currentPalette]);
x=((((x * n)|0)) + (isLowEnd ? 0.0 : 1.0)) / n;
return (x <= 0  ? this.lo : x >= 1  ? this.hi : this.lo + (this.hi - this.lo) * x);
});

Clazz.newMeth(C$, 'quantize4$F$F$F$I', function (val, lo, hi, segmentCount) {
var range=hi - lo;
if (range <= 0  || Float.isNaN$F(val) ) return (segmentCount/2|0);
var t=val - lo;
if (t <= 0 ) return 0;
var quanta=range / segmentCount;
var q=((t / quanta + 1.0E-4)|0);
if (q >= segmentCount) q=segmentCount - 1;
return q;
}, 1);

Clazz.newMeth(C$, 'colorIndex$F$I', function (q, segmentCount) {
return (Math.floor(q <= 0  || q >= segmentCount   ? 0 : q)|0);
}, 1);

Clazz.newMeth(C$, 'colorIndexRepeat$F$I', function (q, segmentCount) {
var i=(Math.floor(q <= 0  ? 0 : q)|0);
return i % segmentCount;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.colorSchemes=Clazz.array(String, -1, ["roygb", "bgyor", "byelement_jmol", "byelement_rasmol", "byresidue_shapely", "byresidue_amino", "rwb", "bwr", "low", "high", "bw", "wb", "friendly", "user", "resu", "inherit", "rgb", "bgr", "jmol", "rasmol", "byresidue", "byresidue_nucleic"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
