(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.AU']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Font");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isBold','isItalic'],'B',['fid'],'F',['fontSizeNominal','fontSize'],'I',['idFontFace','idFontStyle','ascent','descent'],'S',['fontFace','fontStyle'],'O',['font','java.lang.Object','+fontMetrics','manager','org.jmol.api.FontManager']]
,['I',['fontkeyCount'],'O',['fontkeys','int[]','font3ds','org.jmol.util.Font[]','fontFaces','String[]','+fontStyles']]]

Clazz.newMeth(C$, 'c$$org_jmol_api_FontManager$B$I$I$F$F$O', function (manager, fid, idFontFace, idFontStyle, fontSize, fontSizeNominal, graphics) {
;C$.$init$.apply(this);
this.manager=manager;
this.fid=fid;
this.fontFace=C$.fontFaces[idFontFace];
this.fontStyle=C$.fontStyles[idFontStyle];
this.idFontFace=idFontFace;
this.idFontStyle=idFontStyle;
this.fontSize=fontSize;
this.isBold=(idFontStyle & 1) == 1;
this.isItalic=(idFontStyle & 2) == 2;
this.fontSizeNominal=fontSizeNominal;
this.font=manager.newFont$S$Z$Z$F(C$.fontFaces[idFontFace], this.isBold, this.isItalic, fontSize);
this.fontMetrics=manager.getFontMetrics$org_jmol_util_Font$O(this, graphics);
this.descent=manager.getFontDescent$O(this.fontMetrics);
this.ascent=manager.getFontAscent$O(this.fontMetrics);
}, 1);

Clazz.newMeth(C$, 'getFont3D$B', function (fontID) {
return C$.font3ds[fontID & 255];
}, 1);

Clazz.newMeth(C$, 'createFont3D$I$I$F$F$org_jmol_api_FontManager$O', function (fontface, fontstyle, fontsize, fontsizeNominal, manager, graphicsForMetrics) {
if (fontsize > 255 ) fontsize=255;
var fontsizeX16=((fontsize|0)) << 4;
var fontkey=((fontface & 3) | ((fontstyle & 3) << 2) | (fontsizeX16 << 4) );
for (var i=C$.fontkeyCount; --i > 0; ) if (fontkey == C$.fontkeys[i] && C$.font3ds[i].fontSizeNominal == fontsizeNominal  ) return C$.font3ds[i];

var fontIndexNext=C$.fontkeyCount++;
if (fontIndexNext == C$.fontkeys.length) C$.fontkeys=$I$(1).arrayCopyI$IA$I(C$.fontkeys, fontIndexNext + 8);
C$.font3ds=$I$(1).arrayCopyObject$O$I(C$.font3ds, fontIndexNext + 8);
var font3d=Clazz.new_(C$.c$$org_jmol_api_FontManager$B$I$I$F$F$O,[manager, ($b$[0] = fontIndexNext, $b$[0]), fontface, fontstyle, fontsize, fontsizeNominal, graphicsForMetrics]);
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
return this.manager.fontStringWidth$org_jmol_util_Font$S(this, text);
});

Clazz.newMeth(C$, 'getInfo$', function () {
return new Float(this.fontSizeNominal).toString() + " " + this.fontFace + " " + this.fontStyle ;
});

Clazz.newMeth(C$, 'toString', function () {
return "[" + this.getInfo$() + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.fontkeyCount=1;
C$.fontkeys=Clazz.array(Integer.TYPE, [8]);
C$.font3ds=Clazz.array(C$, [8]);
C$.fontFaces=Clazz.array(String, -1, ["SansSerif", "Serif", "Monospaced", ""]);
C$.fontStyles=Clazz.array(String, -1, ["Plain", "Bold", "Italic", "BoldItalic"]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
