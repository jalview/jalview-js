(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.font.FontRenderContext']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontMetrics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['font','java.awt.Font']]
,['O',['DEFAULT_FRC','java.awt.font.FontRenderContext']]]

Clazz.newMeth(C$, 'c$$java_awt_Font', function (font) {
;C$.$init$.apply(this);
this.font=font;
}, 1);

Clazz.newMeth(C$, 'getFont$', function () {
return this.font;
});

Clazz.newMeth(C$, 'getFontRenderContext$', function () {
return C$.DEFAULT_FRC;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.getLeading$() + this.getAscent$() + this.getDescent$() ;
});

Clazz.newMeth(C$, 'getMaxAscent$', function () {
return this.getAscent$();
});

Clazz.newMeth(C$, 'getMaxDescent$', function () {
return this.getDescent$();
});

Clazz.newMeth(C$, 'getMaxDecent$', function () {
return this.getMaxDescent$();
});

Clazz.newMeth(C$, 'getMaxAdvance$', function () {
return this.charWidth$C("M");
});

Clazz.newMeth(C$, 'charsWidth$CA$I$I', function (data, off, len) {
return this.stringWidth$S( String.instantialize(data, off, len));
});

Clazz.newMeth(C$, 'bytesWidth$BA$I$I', function (data, off, len) {
return this.stringWidth$S( String.instantialize(data, 0, off, len));
});

Clazz.newMeth(C$, 'getStringBounds$S$java_awt_Graphics', function (str, context) {
return this.font.getStringBounds$S$java_awt_font_FontRenderContext(str, p$1.myFRC$java_awt_Graphics.apply(this, [context]));
});

Clazz.newMeth(C$, 'getStringBounds$S$I$I$java_awt_Graphics', function (str, beginIndex, limit, context) {
return this.font.getStringBounds$S$I$I$java_awt_font_FontRenderContext(str, beginIndex, limit, p$1.myFRC$java_awt_Graphics.apply(this, [context]));
});

Clazz.newMeth(C$, 'getStringBounds$CA$I$I$java_awt_Graphics', function (chars, beginIndex, limit, context) {
return this.font.getStringBounds$CA$I$I$java_awt_font_FontRenderContext(chars, beginIndex, limit, p$1.myFRC$java_awt_Graphics.apply(this, [context]));
});

Clazz.newMeth(C$, 'myFRC$java_awt_Graphics', function (context) {
return C$.DEFAULT_FRC;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[font=" + this.getFont$() + "ascent=" + this.getAscent$() + ", descent=" + this.getDescent$() + ", height=" + this.getHeight$() + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_FRC=Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
