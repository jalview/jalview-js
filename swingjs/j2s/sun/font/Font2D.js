(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'java.awt.font.FontRenderContext','java.util.concurrent.ConcurrentHashMap','java.lang.ref.SoftReference','sun.font.FontStrikeDesc']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Font2D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.style=0;
this.fontRank=4;
this.strikeCache=Clazz.new_($I$(2,1));
this.lastFontStrike=Clazz.new_($I$(3,1).c$$O,[null]);
},1);

C$.$fields$=[['I',['style','fontRank'],'S',['familyName','fullName'],'O',['handle','sun.font.Font2DHandle','family','sun.font.FontFamily','mapper','sun.font.CharToGlyphMapper','strikeCache','java.util.concurrent.ConcurrentHashMap','lastFontStrike','java.lang.ref.Reference']]
,['O',['boldNames','String[]','+italicNames','+boldItalicNames','DEFAULT_FRC','java.awt.font.FontRenderContext']]]

Clazz.newMeth(C$, 'getStyle$', function () {
return this.style;
});

Clazz.newMeth(C$, 'setStyle$', function () {
var fName=this.fullName.toLowerCase$();
for (var i=0; i < C$.boldItalicNames.length; i++) {
if (fName.indexOf$S(C$.boldItalicNames[i]) != -1) {
this.style=3;
return;
}}
for (var i=0; i < C$.italicNames.length; i++) {
if (fName.indexOf$S(C$.italicNames[i]) != -1) {
this.style=2;
return;
}}
for (var i=0; i < C$.boldNames.length; i++) {
if (fName.indexOf$S(C$.boldNames[i]) != -1) {
this.style=1;
return;
}}
});

Clazz.newMeth(C$, 'getRank$', function () {
return this.fontRank;
});

Clazz.newMeth(C$, 'setRank$I', function (rank) {
this.fontRank=rank;
});

Clazz.newMeth(C$, 'getValidatedGlyphCode$I', function (glyphCode) {
if (glyphCode < 0 || glyphCode >= this.getMapper$().getNumGlyphs$() ) {
glyphCode=this.getMapper$().getMissingGlyphCode$();
}return glyphCode;
});

Clazz.newMeth(C$, 'getStrike$java_awt_Font$java_awt_geom_AffineTransform$I$I', function (font, devTx, aa, fm) {
var ptSize=font.getSize2D$();
var glyphTx=devTx.clone$();
glyphTx.scale$D$D(ptSize, ptSize);
if (font.isTransformed$()) {
glyphTx.concatenate$java_awt_geom_AffineTransform(font.getTransform$());
}if (glyphTx.getTranslateX$() != 0  || glyphTx.getTranslateY$() != 0  ) {
glyphTx.setTransform$D$D$D$D$D$D(glyphTx.getScaleX$(), glyphTx.getShearY$(), glyphTx.getShearX$(), glyphTx.getScaleY$(), 0.0, 0.0);
}var desc=Clazz.new_($I$(4,1).c$$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform$I$I$I,[devTx, glyphTx, font.getStyle$(), aa, fm]);
return ;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font$java_awt_geom_AffineTransform$O$O$FA', function (font, at, aaHint, fmHint, metrics) {
var aa=$I$(4).getAAHintIntVal$O$sun_font_Font2D$I(aaHint, this, font.getSize$());
var fm=$I$(4).getFMHintIntVal$O(fmHint);
var strike=this.getStrike$java_awt_Font$java_awt_geom_AffineTransform$I$I(font, at, aa, fm);
var strikeMetrics=strike.getFontMetrics$();
metrics[0]=strikeMetrics.getAscent$();
metrics[1]=strikeMetrics.getDescent$();
metrics[2]=strikeMetrics.getLeading$();
metrics[3]=strikeMetrics.getMaxAdvance$();
this.getStyleMetrics$F$FA$I(font.getSize2D$(), metrics, 4);
});

Clazz.newMeth(C$, 'getStyleMetrics$F$FA$I', function (pointSize, metrics, offset) {
metrics[offset]=-metrics[0] / 2.5;
metrics[offset + 1]=pointSize / 12;
metrics[offset + 2]=metrics[offset + 1] / 1.5;
metrics[offset + 3]=metrics[offset + 1];
});

Clazz.newMeth(C$, 'getTableBytes$I', function (tag) {
return null;
});

Clazz.newMeth(C$, 'getUnitsPerEm$', function () {
return 2048;
});

Clazz.newMeth(C$, 'supportsEncoding$S', function (encoding) {
return false;
});

Clazz.newMeth(C$, 'canDoStyle$I', function (style) {
return (style == this.style);
});

Clazz.newMeth(C$, 'useAAForPtSize$I', function (ptsize) {
return true;
});

Clazz.newMeth(C$, 'hasSupplementaryChars$', function () {
return false;
});

Clazz.newMeth(C$, 'getPostscriptName$', function () {
return this.fullName;
});

Clazz.newMeth(C$, 'getFontName$java_util_Locale', function (l) {
return this.fullName;
});

Clazz.newMeth(C$, 'getFamilyName$java_util_Locale', function (l) {
return this.familyName;
});

Clazz.newMeth(C$, 'getNumGlyphs$', function () {
return this.getMapper$().getNumGlyphs$();
});

Clazz.newMeth(C$, 'charToGlyph$I', function (wchar) {
return this.getMapper$().charToGlyph$I(wchar);
});

Clazz.newMeth(C$, 'getMissingGlyphCode$', function () {
return this.getMapper$().getMissingGlyphCode$();
});

Clazz.newMeth(C$, 'canDisplay$C', function (c) {
return this.getMapper$().canDisplay$C(c);
});

Clazz.newMeth(C$, 'canDisplay$I', function (cp) {
return this.getMapper$().canDisplay$I(cp);
});

Clazz.newMeth(C$, 'getBaselineFor$C', function (c) {
return $b$[0] = 0, $b$[0];
});

Clazz.newMeth(C$, 'getItalicAngle$java_awt_Font$java_awt_geom_AffineTransform$O$O', function (font, at, aaHint, fmHint) {
var aa=$I$(4).getAAHintIntVal$O$sun_font_Font2D$I(aaHint, this, 12);
var fm=$I$(4).getFMHintIntVal$O(fmHint);
var strike=this.getStrike$java_awt_Font$java_awt_geom_AffineTransform$I$I(font, at, aa, fm);
var metrics=strike.getFontMetrics$();
if (metrics.ascentY == 0  || metrics.ascentX == 0  ) {
return 0.0;
} else {
return metrics.ascentX / -metrics.ascentY;
}});

C$.$static$=function(){C$.$static$=0;
C$.boldNames=Clazz.array(String, -1, ["bold", "demibold", "demi-bold", "demi bold", "negreta", "demi"]);
C$.italicNames=Clazz.array(String, -1, ["italic", "cursiva", "oblique", "inclined"]);
C$.boldItalicNames=Clazz.array(String, -1, ["bolditalic", "bold-italic", "bold italic", "boldoblique", "bold-oblique", "bold oblique", "demibold italic", "negreta cursiva", "demi oblique"]);
C$.DEFAULT_FRC=Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.8-v2');//Created 2020-02-19 19:02:09 Java2ScriptVisitor version 3.2.8-v2 net.sf.j2s.core.jar version 3.2.8-v2
