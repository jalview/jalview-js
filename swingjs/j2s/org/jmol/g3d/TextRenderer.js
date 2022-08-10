(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.CU']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextRenderer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isInvalid'],'I',['height','ascent','width','mapWidth','size'],'O',['tmap','byte[]']]
,['Z',['working'],'O',['translucency','byte[]','htFont3d','java.util.Map','+htFont3dAntialias']]]

Clazz.newMeth(C$, 'clearFontCache$', function () {
if (C$.working) return;
C$.htFont3d.clear$();
C$.htFont3dAntialias.clear$();
}, 1);

Clazz.newMeth(C$, 'plot$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_g3d_Graphics3D$org_jmol_api_JmolRendererInterface$Z', function (x, y, z, argb, bgargb, text, font3d, g3d, jr, antialias) {
if (text.length$() == 0) return 0;
if (text.indexOf$S("<su") >= 0 || text.indexOf$S("<color") >= 0 ) return C$.plotByCharacter$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_g3d_Graphics3D$org_jmol_api_JmolRendererInterface$Z(x, y, z, argb, bgargb, text, font3d, g3d, jr, antialias);
var offset=font3d.getAscent$();
y-=offset;
var text3d=C$.getPlotText3D$I$I$org_jmol_g3d_Graphics3D$S$org_jmol_util_Font$Z(x, y, g3d, text, font3d, antialias);
if (text3d.isInvalid) return text3d.width;
if (antialias && (argb & 12632256) == 0 ) {
argb=argb | 263172;
}var textHeight=text3d.height;
var textWidth=text3d.width;
var tmap=text3d.tmap;
var g=g3d;
var width=g.width;
var height=g.height;
var zbuf=g.zbuf;
var p=g.pixel;
var tLog=g.translucencyLog;
if (jr != null  || (x < 0 || x + text3d.width > width  || y < 0  || y + text3d.height > height ) && (jr=g3d) != null   ) {
for (var off=0, i=0; i < textHeight; i++) {
for (var j=0; j < textWidth; j++) {
var shade=tmap[off++];
if (shade != 0) jr.plotImagePixel$I$I$I$I$B$I$I$I$IA$O$I(argb, x + j, y + i, z, shade, bgargb, width, height, zbuf, p, tLog);
}
}
} else {
for (var i=0, off=0, pbufOffset=y * width + x; i < textHeight; i++, pbufOffset+=(width - textWidth)) for (var j=0; j < textWidth; j++) p.addImagePixel$B$I$I$I$I$I(tmap[off++], tLog, pbufOffset++, z, argb, bgargb);


}return text3d.width;
}, 1);

Clazz.newMeth(C$, 'plotByCharacter$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_g3d_Graphics3D$org_jmol_api_JmolRendererInterface$Z', function (x, y, z, argb, bgargb, text, font3d, g3d, jmolRenderer, antialias) {
var w=0;
var len=text.length$();
var suboffset=Math.round(font3d.getHeight$() * 0.25);
var supoffset=-Math.round(font3d.getHeight$() * 0.3);
var argb0=0;
for (var i=0; i < len; i++) {
if (text.charAt$I(i) == "<") {
if (i + 5 < len && text.substring$I$I(i, i + 6).equals$O("<color") ) {
argb0=argb;
var pt=text.indexOf$S$I(">", i);
if (pt < 0) continue;
argb=$I$(2,"getArgbFromString$S",[text.substring$I$I(i + 7, pt).trim$()]);
i=pt;
continue;
}if (i + 7 < len && text.substring$I$I(i, i + 8).equals$O("</color>") ) {
i+=7;
argb=argb0;
continue;
}if (i + 4 < len && text.substring$I$I(i, i + 5).equals$O("<sub>") ) {
i+=4;
y+=suboffset;
continue;
}if (i + 4 < len && text.substring$I$I(i, i + 5).equals$O("<sup>") ) {
i+=4;
y+=supoffset;
continue;
}if (i + 5 < len && text.substring$I$I(i, i + 6).equals$O("</sub>") ) {
i+=5;
y-=suboffset;
continue;
}if (i + 5 < len && text.substring$I$I(i, i + 6).equals$O("</sup>") ) {
i+=5;
y-=supoffset;
continue;
}}var width=C$.plot$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_g3d_Graphics3D$org_jmol_api_JmolRendererInterface$Z(x + w, y, z, argb, bgargb, text.substring$I$I(i, i + 1), font3d, g3d, jmolRenderer, antialias);
w+=width;
}
return w;
}, 1);

Clazz.newMeth(C$, 'c$$S$org_jmol_util_Font', function (text, font3d) {
;C$.$init$.apply(this);
this.ascent=font3d.getAscent$();
this.height=font3d.getHeight$();
this.width=font3d.stringWidth$S(text);
if (this.width == 0) return;
this.mapWidth=this.width;
this.size=this.mapWidth * this.height;
}, 1);

Clazz.newMeth(C$, 'getPlotText3D$I$I$org_jmol_g3d_Graphics3D$S$org_jmol_util_Font$Z', function (x, y, g3d, text, font3d, antialias) {
C$.working=true;
var ht=(antialias ? C$.htFont3dAntialias : C$.htFont3d);
var htForThisFont=ht.get$O(font3d);
var text3d=null;
var newFont=false;
var newText=false;
if (htForThisFont != null ) {
text3d=htForThisFont.get$O(text);
} else {
htForThisFont=Clazz.new_($I$(1,1));
newFont=true;
}if (text3d == null ) {
text3d=Clazz.new_(C$.c$$S$org_jmol_util_Font,[text, font3d]);
newText=true;
}text3d.isInvalid=(text3d.width == 0 || x + text3d.width <= 0  || x >= g3d.width  || y + text3d.height <= 0  || y >= g3d.height );
if (text3d.isInvalid) return text3d;
if (newFont) ht.put$O$O(font3d, htForThisFont);
if (newText) {
p$1.setTranslucency$S$org_jmol_util_Font$org_jmol_g3d_Graphics3D.apply(text3d, [text, font3d, g3d]);
htForThisFont.put$O$O(text, text3d);
}C$.working=false;
return text3d;
}, 1);

Clazz.newMeth(C$, 'setTranslucency$S$org_jmol_util_Font$org_jmol_g3d_Graphics3D', function (text, font3d, g3d) {
var pixels=g3d.apiPlatform.getTextPixels$S$org_jmol_util_Font$O$O$I$I$I(text, font3d, g3d.platform.getGraphicsForTextOrImage$I$I(this.mapWidth, this.height), g3d.platform.offscreenImage, this.mapWidth, this.height, this.ascent);
if (pixels == null ) return;
this.tmap=Clazz.array(Byte.TYPE, [this.size]);
for (var i=pixels.length; --i >= 0; ) {
var p=pixels[i] & 255;
if (p != 0) {
this.tmap[i]=C$.translucency[p >> 5];
}}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.translucency=Clazz.array(Byte.TYPE, -1, [7, 6, 5, 4, 3, 2, 1, 8]);
C$.htFont3d=Clazz.new_($I$(1,1));
C$.htFont3dAntialias=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
