(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSToolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFontMetrics", null, 'java.awt.FontMetrics');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.FIRST_PRINTABLE=32;
},1);

C$.$fields$=[['I',['FIRST_PRINTABLE'],'O',['fwidths','float[]','iwidths','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Font.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
this.font=f;
});

Clazz.newMeth(C$, 'getLeading$',  function () {
return (C$.fontLeading$java_awt_Font(this.font)|0);
});

Clazz.newMeth(C$, 'fontLeading$java_awt_Font',  function (font) {
return font.getSize$() / 20.0 + 1;
}, 1);

Clazz.newMeth(C$, 'getAscent$',  function () {
return (C$.fontAscent$java_awt_Font(this.font)|0);
});

Clazz.newMeth(C$, 'fontAscent$java_awt_Font',  function (font) {
return font.getSize$();
}, 1);

Clazz.newMeth(C$, 'getDescent$',  function () {
return (C$.fontDescent$java_awt_Font(this.font)|0);
});

Clazz.newMeth(C$, 'fontDescent$java_awt_Font',  function (font) {
return font.getSize$() / 4.0 + 1;
}, 1);

Clazz.newMeth(C$, 'charWidth$C',  function (pt) {
return (pt.$c() < 256  ? (this.getWidthsFloat$()[pt.$c()]|0) : this.stringWidth$S("" + pt));
});

Clazz.newMeth(C$, 'charWidth$I',  function (pt) {
{
var spt; return ((pt + 0 == pt ? pt : (pt = (spt = pt).charCodeAt(0))) < 256 ? (this.getWidthsFloat$()[pt] | 0) : this.stringWidth$S(isChar ? spt : String.fromCharCode(pt)));
}
});

Clazz.newMeth(C$, 'stringWidth$S',  function (s) {
return ($I$(1).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.font, s)|0);
});

Clazz.newMeth(C$, 'getWidths$',  function () {
if (this.iwidths != null ) return this.iwidths;
this.iwidths=Clazz.array(Integer.TYPE, [256]);
this.getWidthsFloat$();
for (var ch=this.FIRST_PRINTABLE; ch < 256; ch++) {
this.iwidths[ch]=(this.fwidths[ch]|0);
}
return this.iwidths;
});

Clazz.newMeth(C$, 'getWidthsFloat$',  function () {
if (this.fwidths != null ) return this.fwidths;
this.fwidths=Clazz.array(Float.TYPE, [256]);
for (var ch=this.FIRST_PRINTABLE; ch < 256; ch++) {
this.fwidths[ch]=$I$(1,"getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S",[null, this.font, "" + String.fromCharCode(ch)]);
}
return this.fwidths;
});

Clazz.newMeth(C$, 'getFloatWidth$I',  function (ch) {
var s=(1 ? String.fromCharCode(ch) :"");
return $I$(1).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.font, s);
});

Clazz.newMeth(C$, 'getLineMetrics$S$java_awt_Graphics',  function (str, context) {
return this.font.getLineMetrics$S$java_awt_font_FontRenderContext(str, this.getFontRenderContext$());
});

Clazz.newMeth(C$, 'getLineMetrics$S$I$I$java_awt_Graphics',  function (str, beginIndex, limit, context) {
return this.font.getLineMetrics$S$I$I$java_awt_font_FontRenderContext(str, beginIndex, limit, null);
});

Clazz.newMeth(C$, 'getLineMetrics$CA$I$I$java_awt_Graphics',  function (chars, beginIndex, limit, context) {
return this.font.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(chars, beginIndex, limit, null);
});

Clazz.newMeth(C$, 'getLineMetrics$java_text_CharacterIterator$I$I$java_awt_Graphics',  function (ci, beginIndex, limit, context) {
return this.font.getLineMetrics$java_text_CharacterIterator$I$I$java_awt_font_FontRenderContext(ci, beginIndex, limit, null);
});

Clazz.newMeth(C$, 'getMetrics$java_awt_geom_AffineTransform$O$O$FA',  function (identityTx, anRtiAliasingHint, fractionalMetricsHint, metrics) {
metrics[0]=C$.fontAscent$java_awt_Font(this.font);
metrics[1]=C$.fontDescent$java_awt_Font(this.font);
metrics[2]=C$.fontLeading$java_awt_Font(this.font);
metrics[3]=0;
if (metrics.length >= 8) {
metrics[4]=this.font.getSize2D$() / -4.0;
metrics[5]=metrics[6]=metrics[7]=1;
}});

Clazz.newMeth(C$, 'getMetrics$java_awt_font_FontRenderContext$FA',  function (frc, metrics) {
this.getMetrics$java_awt_geom_AffineTransform$O$O$FA(null, null, null, metrics);
});

Clazz.newMeth(C$, 'charsToGlyphs$I$CA$IA',  function (count, text, glyphs) {
for (var i=0; i < count; i++) glyphs[i]=text[i].$c();

}, 1);

Clazz.newMeth(C$, 'layout$sun_font_Font2D$FA$I$I$sun_font_TextRecord$I$java_awt_geom_Point2D_Float$sun_font_GlyphLayout_GVData',  function (font2d, mat, gmask, baseIndex, tr, typo_flags, pt, data) {
var f=font2d;
var fm=f.getFontMetrics$();
var g2=0;
var x=0;
var y=0;
var w;
for (var g=0, p=tr.start; p < tr.limit; p++, g++) {
var ch=tr.text[p].$c();
if (Character.isHighSurrogate$C(String.fromCharCode(ch)) && p < tr.limit - 1  && Character.isLowSurrogate$C(tr.text[++p]) ) {
ch=Character.toCodePoint$C$C(String.fromCharCode(ch), tr.text[p]);
w=fm.getFloatWidth$I(ch);
} else if (ch > 255) {
w=fm.getFloatWidth$I(ch);
} else {
w=fm.getWidthsFloat$()[ch];
}data._indices[g]=p + baseIndex;
data._positions[g2++]=x;
data._positions[g2++]=y;
data._glyphs[g]=ch;
++data._count;
x+=w;
}
data._positions[g2++]=x;
data._positions[g2++]=y;
}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:17 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
