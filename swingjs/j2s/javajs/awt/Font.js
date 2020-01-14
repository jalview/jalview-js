(function(){var P$=Clazz.newPackage("javajs.awt"),I$=[[0,'javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Font");
C$.fontkeyCount=0;
C$.fontkeys=null;
C$.font3ds=null;
C$.fontFaces=null;
C$.fontStyles=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.fontkeyCount=1;
C$.fontkeys=Clazz.array(Integer.TYPE, [8]);
C$.font3ds=Clazz.array(C$, [8]);
C$.fontFaces=Clazz.array(String, -1, ["SansSerif", "Serif", "Monospaced", ""]);
C$.fontStyles=Clazz.array(String, -1, ["Plain", "Bold", "Italic", "BoldItalic"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fid=0;
this.fontFace=null;
this.fontStyle=null;
this.fontSizeNominal=0;
this.idFontFace=0;
this.idFontStyle=0;
this.fontSize=0;
this.font=null;
this.fontMetrics=null;
this.manager=null;
this.ascent=0;
this.descent=0;
this.isBold=false;
this.isItalic=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javajs_awt_FontManager$B$I$I$F$F$O', function (manager, fid, idFontFace, idFontStyle, fontSize, fontSizeNominal, graphics) {
C$.$init$.apply(this);
this.manager=manager;
this.fid=($b$[0] = fid, $b$[0]);
this.fontFace=C$.fontFaces[idFontFace];
this.fontStyle=C$.fontStyles[idFontStyle];
this.idFontFace=idFontFace;
this.idFontStyle=idFontStyle;
this.fontSize=fontSize;
this.isBold=(idFontStyle & 1) == 1;
this.isItalic=(idFontStyle & 2) == 2;
this.fontSizeNominal=fontSizeNominal;
this.font=manager.newFont$S$Z$Z$F(C$.fontFaces[idFontFace], this.isBold, this.isItalic, fontSize);
this.fontMetrics=manager.getFontMetrics$javajs_awt_Font$O(this, graphics);
this.descent=manager.getFontDescent$O(this.fontMetrics);
this.ascent=manager.getFontAscent$O(this.fontMetrics);
}, 1);

Clazz.newMeth(C$, 'getFont3D$B', function (fontID) {
return C$.font3ds[fontID & 255];
}, 1);

Clazz.newMeth(C$, 'createFont3D$I$I$F$F$javajs_awt_FontManager$O', function (fontface, fontstyle, fontsize, fontsizeNominal, manager, graphicsForMetrics) {
if (fontsize > 255 ) fontsize=255;
var fontsizeX16=((fontsize|0)) << 4;
var fontkey=((fontface & 3) | ((fontstyle & 3) << 2) | (fontsizeX16 << 4) );
for (var i=C$.fontkeyCount; --i > 0; ) if (fontkey == C$.fontkeys[i] && C$.font3ds[i].fontSizeNominal == fontsizeNominal  ) return C$.font3ds[i];

var fontIndexNext=C$.fontkeyCount++;
if (fontIndexNext == C$.fontkeys.length) C$.fontkeys=$I$(1).arrayCopyI$IA$I(C$.fontkeys, fontIndexNext + 8);
C$.font3ds=$I$(1).arrayCopyObject$O$I(C$.font3ds, fontIndexNext + 8);
var font3d=Clazz.new_(C$.c$$javajs_awt_FontManager$B$I$I$F$F$O,[manager, ($b$[0] = (fontIndexNext|0), $b$[0]), fontface, fontstyle, fontsize, fontsizeNominal, graphicsForMetrics]);
C$.font3ds[fontIndexNext]=font3d;
C$.fontkeys[fontIndexNext]=fontkey;
return font3d;
}, 1);

Clazz.newMeth(C$, 'getFontFaceID$S', function (fontface) {
return ("Monospaced".equalsIgnoreCase$S(fontface) ? 2 : "Serif".equalsIgnoreCase$S(fontface) ? 1 : 0);
}, 1);

Clazz.newMeth(C$, 'getFontStyleID$S', function (fontstyle) {
for (var i=4; --i >= 0; ) if (C$.fontStyles[i].equalsIgnoreCase$S(fontstyle)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'getAscent$', function () {
return this.ascent;
});

Clazz.newMeth(C$, 'getDescent$', function () {
return this.descent;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.getAscent$() + this.getDescent$();
});

Clazz.newMeth(C$, 'getFontMetrics$', function () {
return this.fontMetrics;
});

Clazz.newMeth(C$, 'stringWidth$S', function (text) {
return this.manager.fontStringWidth$javajs_awt_Font$S(this, text);
});

Clazz.newMeth(C$, 'getInfo$', function () {
return new Float(this.fontSizeNominal).toString() + " " + this.fontFace + " " + this.fontStyle ;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
