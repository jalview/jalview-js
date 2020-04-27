(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'sun.font.StrikeMetrics',['java.awt.geom.Rectangle2D','.Float'],'java.awt.geom.GeneralPath']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NullFontScaler", null, 'sun.font.FontScaler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_Font2D$I$Z$I', function (font, indexInCollection, supportsCJK, filesize) {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$J', function (pScalerContext) {
return Clazz.new_($I$(1,1).c$$F$F$F$F$F$F$F$F$F$F,[240, 240, 240, 240, 240, 240, 240, 240, 240, 240]);
});

Clazz.newMeth(C$, 'getGlyphAdvance$J$I', function (pScalerContext, glyphCode) {
return 0.0;
});

Clazz.newMeth(C$, 'getGlyphMetrics$J$I$java_awt_geom_Point2D_Float', function (pScalerContext, glyphCode, metrics) {
metrics.x=0;
metrics.y=0;
});

Clazz.newMeth(C$, 'getGlyphOutlineBounds$J$I', function (pContext, glyphCode) {
return Clazz.new_($I$(2,1).c$$F$F$F$F,[0, 0, 0, 0]);
});

Clazz.newMeth(C$, 'getGlyphOutline$J$I$F$F', function (pScalerContext, glyphCode, x, y) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getGlyphVectorOutline$J$IA$I$F$F', function (pScalerContext, glyphs, numGlyphs, x, y) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getLayoutTableCache$', function () {
return 0;
});

Clazz.newMeth(C$, 'createScalerContext$DA$I$I$F$F$Z', function (matrix, aa, fm, boldness, italic, disableHinting) {
return C$.getNullScalerContext$();
});

Clazz.newMeth(C$, 'invalidateScalerContext$J', function (ppScalerContext) {
});

Clazz.newMeth(C$, 'getNumGlyphs$', function () {
return 1;
});

Clazz.newMeth(C$, 'getMissingGlyphCode$', function () {
return 0;
});

Clazz.newMeth(C$, 'getGlyphCode$C', function (charCode) {
return 0;
});

Clazz.newMeth(C$, 'getUnitsPerEm$', function () {
return 2048;
});

Clazz.newMeth(C$, 'getGlyphPoint$J$I$I', function (pScalerContext, glyphCode, ptNumber) {
return null;
});

Clazz.newMeth(C$, 'getNullScalerContext$', function () {
alert('native method must be replaced! getNullScalerContext');
}
, 2);

Clazz.newMeth(C$, 'getGlyphImage$J$I', function (pScalerContext, glyphCode) {
alert('native method must be replaced! getGlyphImage');
}
);
})();
;Clazz.setTVer('3.2.8-v2');//Created 2020-02-19 18:46:59 Java2ScriptVisitor version 3.2.8-v2 net.sf.j2s.core.jar version 3.2.8-v2
