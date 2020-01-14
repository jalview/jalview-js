(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'swingjs.JSFontMetrics','sun.font.AttributeValues','sun.font.EAttribute','java.awt.font.TextAttribute','java.awt.geom.AffineTransform','swingjs.JSToolkit','sun.font.AttributeMap',['java.text.AttributedCharacterIterator','.Attribute'],'javajs.util.SB',['java.awt.geom.Rectangle2D','.Float'],'java.util.Hashtable','swingjs.JSLineMetrics']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Font");
C$.haveMasks=false;
C$.RECOGNIZED_MASK=0;
C$.PRIMARY_MASK=0;
C$.SECONDARY_MASK=0;
C$.LAYOUT_MASK=0;
C$.EXTRA_MASK=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fm=null;
this.family=null;
this.name=null;
this.style=0;
this.size=0;
this.pointSize=0;
this.font2DHandle=null;
this.values=null;
this.hasLayoutAttributes=false;
this.createdFont=false;
this.nonIdentityTx=false;
this.hash=0;
this.mapLineMetrics=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.createdFont=false;
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$', function () {
if (this.fm == null ) ((this.fm=Clazz.new_($I$(1)))).setFont$java_awt_Font(this);
return this.fm;
});

Clazz.newMeth(C$, 'setFontMetrics$java_awt_FontMetrics', function (fm) {
this.fm=fm;
});

Clazz.newMeth(C$, 'getAttributeValues', function () {
if (this.values == null ) {
C$.initMasks$();
this.values=Clazz.new_($I$(2));
this.values.setFamily$S(this.name);
this.values.setSize$F(this.pointSize);
if ((this.style & 1) != 0) {
this.values.setWeight$F(2);
}if ((this.style & 2) != 0) {
this.values.setPosture$F(0.2);
}this.values.defineAll$I(C$.PRIMARY_MASK);
}return this.values;
}, p$1);

Clazz.newMeth(C$, 'c$$S$I$I', function (name, style, size) {
C$.$init$.apply(this);
this.name=(name != null ) ? name : "Default";
this.style=(style & ~0x03) == 0 ? style : 0;
this.size=size;
this.pointSize=size;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle', function (values, oldName, oldStyle, created, handle) {
C$.$init$.apply(this);
this.createdFont=created;
if (created) {
this.font2DHandle=handle;
var newName=null;
if (oldName != null ) {
newName=values.getFamily$();
if (oldName.equals$O(newName)) newName=null;
}var newStyle=0;
if (oldStyle == -1) {
newStyle=-1;
} else {
if (values.getWeight$() >= 2.0 ) newStyle=1;
if (values.getPosture$() >= 0.2 ) newStyle|=2;
if (oldStyle == newStyle) newStyle=-1;
}if (newName != null ) {
this.createdFont=false;
this.font2DHandle=null;
}}p$1.initFromValues$sun_font_AttributeValues.apply(this, [values]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (attributes) {
C$.$init$.apply(this);
C$.initMasks$();
p$1.initFromValues$sun_font_AttributeValues.apply(this, [$I$(2).fromMap$java_util_Map$I(attributes, C$.RECOGNIZED_MASK)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font', function (font) {
C$.$init$.apply(this);
if (font.values != null ) {
p$1.initFromValues$sun_font_AttributeValues.apply(this, [p$1.getAttributeValues.apply(font, []).clone$()]);
} else {
this.name=font.name;
this.style=font.style;
this.size=font.size;
this.pointSize=font.pointSize;
}}, 1);

Clazz.newMeth(C$, 'initMasks$', function () {
if (C$.haveMasks) return;
C$.RECOGNIZED_MASK=$I$(2).MASK_ALL & ~$I$(2).getMask$sun_font_EAttribute($I$(3).EFONT);
C$.PRIMARY_MASK=$I$(2).getMask$sun_font_EAttributeA([$I$(3).EFAMILY, $I$(3).EWEIGHT, $I$(3).EWIDTH, $I$(3).EPOSTURE, $I$(3).ESIZE, $I$(3).ETRANSFORM, $I$(3).ESUPERSCRIPT, $I$(3).ETRACKING]);
C$.SECONDARY_MASK=C$.RECOGNIZED_MASK & ~C$.PRIMARY_MASK;
C$.LAYOUT_MASK=$I$(2).getMask$sun_font_EAttributeA([$I$(3).ECHAR_REPLACEMENT, $I$(3).EFOREGROUND, $I$(3).EBACKGROUND, $I$(3).EUNDERLINE, $I$(3).ESTRIKETHROUGH, $I$(3).ERUN_DIRECTION, $I$(3).EBIDI_EMBEDDING, $I$(3).EJUSTIFICATION, $I$(3).EINPUT_METHOD_HIGHLIGHT, $I$(3).EINPUT_METHOD_UNDERLINE, $I$(3).ESWAP_COLORS, $I$(3).ENUMERIC_SHAPING, $I$(3).EKERNING, $I$(3).ELIGATURES, $I$(3).ETRACKING]);
C$.EXTRA_MASK=$I$(2).getMask$sun_font_EAttributeA([$I$(3).ETRANSFORM, $I$(3).ESUPERSCRIPT, $I$(3).EWIDTH]);
C$.haveMasks=true;
}, 1);

Clazz.newMeth(C$, 'initFromValues$sun_font_AttributeValues', function (values) {
this.values=values;
C$.initMasks$();
values.defineAll$I(C$.PRIMARY_MASK);
this.name=values.getFamily$();
this.pointSize=values.getSize$();
this.size=((values.getSize$() + 0.5)|0);
if (values.getWeight$() >= 2.0 ) this.style|=1;
if (values.getPosture$() >= 0.2 ) this.style|=2;
this.nonIdentityTx=values.anyNonDefault$I(C$.EXTRA_MASK);
this.hasLayoutAttributes=values.anyNonDefault$I(C$.LAYOUT_MASK);
}, p$1);

Clazz.newMeth(C$, 'getFont$java_util_Map', function (attributes) {
C$.initMasks$();
if (Clazz.instanceOf(attributes, "sun.font.AttributeMap") && (attributes).getValues$() != null  ) {
var values=(attributes).getValues$();
if (values.isNonDefault$sun_font_EAttribute($I$(3).EFONT)) {
var font=values.getFont$();
if (!values.anyDefined$I(C$.SECONDARY_MASK)) {
return font;
}values=p$1.getAttributeValues.apply(font, []).clone$();
values.merge$java_util_Map$I(attributes, C$.SECONDARY_MASK);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[values, font.name, font.style, font.createdFont, font.font2DHandle]);
}return Clazz.new_(C$.c$$java_util_Map,[attributes]);
}var font=attributes.get$O($I$(4).FONT);
if (font != null ) {
if (attributes.size$() > 1) {
var values=p$1.getAttributeValues.apply(font, []).clone$();
values.merge$java_util_Map$I(attributes, C$.SECONDARY_MASK);
return Clazz.new_(C$.c$$sun_font_AttributeValues$S$I$Z$sun_font_Font2DHandle,[values, font.name, font.style, font.createdFont, font.font2DHandle]);
}return font;
}return Clazz.new_(C$.c$$java_util_Map,[attributes]);
}, 1);

Clazz.newMeth(C$, 'getTransform$', function () {
return Clazz.new_($I$(5));
});

Clazz.newMeth(C$, 'getFamily$', function () {
return (this.family == null  ? this.family=$I$(6).getFontFamily$java_awt_Font(this) : this.family);
});

Clazz.newMeth(C$, 'getPSName$', function () {
switch (this.name) {
case "TimesRoman":
this.name="Serif";
break;
case "Helvetica":
this.name="SansSerif";
break;
case "Courier":
this.name="Monospaced";
break;
default:
case "Monospaced":
case "Serif":
case "SansSerif":
case "Dialog":
case "DialogInput":
break;
}
return this.name + (this.isPlain$() ? ".plain" : "." + (this.isBold$() ? "bold" : "") + (this.isItalic$() ? "italic" : "") );
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getFontName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getStyle$', function () {
return this.style;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.size;
});

Clazz.newMeth(C$, 'getSize2D$', function () {
return this.pointSize;
});

Clazz.newMeth(C$, 'isPlain$', function () {
return this.style == 0;
});

Clazz.newMeth(C$, 'isBold$', function () {
return (this.style & 1) != 0;
});

Clazz.newMeth(C$, 'isItalic$', function () {
return (this.style & 2) != 0;
});

Clazz.newMeth(C$, 'isTransformed$', function () {
return this.nonIdentityTx;
});

Clazz.newMeth(C$, 'hasLayoutAttributes$', function () {
return this.hasLayoutAttributes;
});

Clazz.newMeth(C$, 'getFont$S', function (nm) {
return C$.getFont$S$java_awt_Font(nm, null);
}, 1);

Clazz.newMeth(C$, 'decode$S', function (str) {
var fontName=str;
var styleName="";
var fontSize=12;
var fontStyle=0;
if (str == null ) {
return Clazz.new_(C$.c$$S$I$I,["Dialog", fontStyle, fontSize]);
}var lastHyphen=str.lastIndexOf$I("-");
var lastSpace=str.lastIndexOf$I(" ");
var sepChar=(lastHyphen > lastSpace) ? "-" : " ";
var sizeIndex=str.lastIndexOf$I(sepChar);
var styleIndex=str.lastIndexOf$I$I(sepChar, sizeIndex - 1);
var strlen=str.length$();
if (sizeIndex > 0 && sizeIndex + 1 < strlen ) {
try {
fontSize=Integer.valueOf$S(str.substring$I(sizeIndex + 1)).intValue$();
if (fontSize <= 0) {
fontSize=12;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
styleIndex=sizeIndex;
sizeIndex=strlen;
if (str.charAt$I(sizeIndex - 1) == sepChar) {
sizeIndex--;
}} else {
throw e;
}
}
}if (styleIndex >= 0 && styleIndex + 1 < strlen ) {
styleName=str.substring$I$I(styleIndex + 1, sizeIndex);
styleName=styleName.toLowerCase$();
if (styleName.equals$O("bolditalic")) {
fontStyle=3;
} else if (styleName.equals$O("italic")) {
fontStyle=2;
} else if (styleName.equals$O("bold")) {
fontStyle=1;
} else if (styleName.equals$O("plain")) {
fontStyle=0;
} else {
styleIndex=sizeIndex;
if (str.charAt$I(styleIndex - 1) == sepChar) {
styleIndex--;
}}fontName=str.substring$I$I(0, styleIndex);
} else {
var fontEnd=strlen;
if (styleIndex > 0) {
fontEnd=styleIndex;
} else if (sizeIndex > 0) {
fontEnd=sizeIndex;
}if (fontEnd > 0 && str.charAt$I(fontEnd - 1) == sepChar ) {
fontEnd--;
}fontName=str.substring$I$I(0, fontEnd);
}return Clazz.new_(C$.c$$S$I$I,[fontName, fontStyle, fontSize]);
}, 1);

Clazz.newMeth(C$, 'getFont$S$java_awt_Font', function (nm, font) {
var str=null;
try {
str=System.getProperty$S(nm);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
} else {
throw e;
}
}
if (str == null ) {
return font;
}return C$.decode$S(str);
}, 1);

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.hash == 0) {
this.hash=this.name.hashCode$() ^ this.style ^ this.size ;
}return this.hash;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj === this ) {
return true;
}if (obj != null ) {
try {
var font=obj;
if (this.size == font.size && this.style == font.style  && this.nonIdentityTx == font.nonIdentityTx   && this.hasLayoutAttributes == font.hasLayoutAttributes   && this.pointSize == font.pointSize   && this.name.equals$O(font.name) ) {
return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
}return false;
});

Clazz.newMeth(C$, 'toString', function () {
var strStyle;
if (this.isBold$()) {
strStyle=this.isItalic$() ? "bolditalic" : "bold";
} else {
strStyle=this.isItalic$() ? "italic" : "plain";
}return this.getClass$().getName$() + "[family=" + this.getFamily$() + ",name=" + this.name + ",style=" + strStyle + ",size=" + this.size + "]" ;
});

Clazz.newMeth(C$, 'getAttributes$', function () {
return Clazz.new_($I$(7).c$$sun_font_AttributeValues,[p$1.getAttributeValues.apply(this, [])]);
});

Clazz.newMeth(C$, 'getAvailableAttributes$', function () {
var attributes=Clazz.array($I$(8), -1, [$I$(4).FAMILY, $I$(4).WEIGHT, $I$(4).WIDTH, $I$(4).SIZE, $I$(4).UNDERLINE, $I$(4).STRIKETHROUGH]);
return attributes;
});

Clazz.newMeth(C$, 'deriveFont$I$F', function (style, sizePts) {
var f=Clazz.new_(C$.c$$S$I$I,[this.name, style, ((sizePts + 0.5)|0)]);
f.pointSize=sizePts;
return f;
});

Clazz.newMeth(C$, 'deriveFont$F', function (sizePts) {
var f=Clazz.new_(C$.c$$S$I$I,[this.name, this.style, ((sizePts + 0.5)|0)]);
f.pointSize=sizePts;
return f;
});

Clazz.newMeth(C$, 'deriveFont$I', function (style) {
return Clazz.new_(C$.c$$S$I$I,[this.name, style, this.size]);
});

Clazz.newMeth(C$, 'hasUniformLineMetrics$', function () {
return false;
});

Clazz.newMeth(C$, 'getStringBounds$S$java_awt_font_FontRenderContext', function (str, frc) {
return this.getStringBoundsStr$S$I$I(str, 0, -1);
});

Clazz.newMeth(C$, 'getStringBounds$S$I$I$java_awt_font_FontRenderContext', function (str, beginIndex, limit, frc) {
return this.getStringBoundsStr$S$I$I(str, beginIndex, limit);
});

Clazz.newMeth(C$, 'getStringBounds$CA$I$I$java_awt_font_FontRenderContext', function (chars, beginIndex, limit, frc) {
var sb=Clazz.new_($I$(9));
sb.appendCB$CA$I$I(chars, beginIndex, limit);
return this.getStringBoundsStr$S$I$I(sb.toString(), 0, -1);
});

Clazz.newMeth(C$, 'getStringBoundsStr$S$I$I', function (s, i, j) {
if (j >= i) s=s.substring$I$I(i, j);
var fm=this.getFontMetrics$();
var dec=fm.getDescent$();
var asc=fm.getAscent$();
var width=fm.stringWidth$S(s);
return Clazz.new_($I$(10).c$$F$F$F$F,[0, -dec, width, asc + dec]);
});

Clazz.newMeth(C$, 'finalize$', function () {
});

Clazz.newMeth(C$, 'getLineMetrics$S', function (s) {
if (this.mapLineMetrics == null ) this.mapLineMetrics=Clazz.new_($I$(11));
var lm=this.mapLineMetrics.get$O(s);
return (lm == null  ? Clazz.new_($I$(12).c$$java_awt_Font$S,[this, s]) : lm);
}, p$1);

Clazz.newMeth(C$, 'getLineMetrics$java_text_CharacterIterator$I$I$O', function (ci, beginIndex, limit, object) {
return null;
});

Clazz.newMeth(C$, 'getLineMetrics$CA$I$I$O', function (chars, beginIndex, limit, object) {
return null;
});

Clazz.newMeth(C$, 'getLineMetrics$S$I$I$O', function (str, beginIndex, limit, object) {
return null;
});

Clazz.newMeth(C$, 'getLineMetrics$S$O', function (str, object) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
