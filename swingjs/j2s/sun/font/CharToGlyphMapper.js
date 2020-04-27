(function(){var P$=Clazz.newPackage("sun.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharToGlyphMapper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.missingGlyph=-1;
},1);

C$.$fields$=[['I',['missingGlyph']]]

Clazz.newMeth(C$, 'getMissingGlyphCode$', function () {
return this.missingGlyph;
});

Clazz.newMeth(C$, 'canDisplay$C', function (ch) {
var glyph=this.charToGlyph$C(ch);
return glyph != this.missingGlyph;
});

Clazz.newMeth(C$, 'canDisplay$I', function (cp) {
var glyph=this.charToGlyph$I(cp);
return glyph != this.missingGlyph;
});

Clazz.newMeth(C$, 'charToGlyph$C', function (unicode) {
var chars=Clazz.array(Character.TYPE, [1]);
var glyphs=Clazz.array(Integer.TYPE, [1]);
chars[0]=unicode;
this.charsToGlyphs$I$CA$IA(1, chars, glyphs);
return glyphs[0];
});

Clazz.newMeth(C$, 'charToGlyph$I', function (unicode) {
var chars=Clazz.array(Integer.TYPE, [1]);
var glyphs=Clazz.array(Integer.TYPE, [1]);
chars[0]=unicode;
this.charsToGlyphs$I$IA$IA(1, chars, glyphs);
return glyphs[0];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.8-v2');//Created 2020-02-19 17:35:44 Java2ScriptVisitor version 3.2.8-v2 net.sf.j2s.core.jar version 3.2.8-v2
