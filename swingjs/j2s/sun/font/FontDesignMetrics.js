(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.FontDesignMetrics','java.util.Hashtable',['sun.font.FontDesignMetrics','.KeyReference'],'swingjs.JSToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FontDesignMetrics", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.FontMetrics');
C$.roundingUpValue=0;
C$.metricsCache=null;
C$.recentMetrics=null;
C$.recentIndex=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.roundingUpValue=0.95;
C$.metricsCache=Clazz.new_($I$(2));
C$.recentMetrics=Clazz.array(C$, [5]);
C$.recentIndex=0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ascent=0;
this.descent=0;
this.leading=0;
this.height=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ascent=-1;
this.height=-1;
}, 1);

Clazz.newMeth(C$, 'getMetrics$java_awt_Font', function (font) {
var m=null;
var r;
r=C$.metricsCache.get$O(font);
if (r != null ) {
m=r.get$();
}if (m == null ) {
m=Clazz.new_(C$.c$$java_awt_Font,[font]);
C$.metricsCache.put$TK$TV(font, Clazz.new_($I$(3).c$$O$O,[font, m]));
}for (var i=0; i < C$.recentMetrics.length; i++) {
if (C$.recentMetrics[i] === m ) {
return m;
}}
{
C$.recentMetrics[C$.recentIndex++]=m;
if (C$.recentIndex == 5) {
C$.recentIndex=0;
}}return m;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font', function (font) {
C$.superclazz.c$$java_awt_Font.apply(this, [font]);
C$.$init$.apply(this);
this.font=font;
p$1.initMatrixAndMetrics.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initMatrixAndMetrics', function () {
{
//need to calculate ascent, descent, leading, and maxAdvance
}
}, p$1);

Clazz.newMeth(C$, 'charWidth$C', function (ch) {
return this.stringWidth$S("" + ch);
});

Clazz.newMeth(C$, 'stringWidth$S', function (str) {
return ((0.5 + p$1.getWidth$S.apply(this, [str]))|0);
});

Clazz.newMeth(C$, 'getWidth$S', function (str) {
return $I$(4).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.font, str);
}, p$1);

Clazz.newMeth(C$, 'charsWidth$CA$I$I', function (data, off, len) {
var width=0;
if (len < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["len=" + len]);
}var limit=off + len;
for (var i=off; i < limit; i++) {
var ch=data[i];
width += this.stringWidth$S("" + ch);
}
return ((0.5 + width)|0);
});

Clazz.newMeth(C$, 'getWidths$', function () {
var widths=Clazz.array(Integer.TYPE, [256]);
return widths;
});

Clazz.newMeth(C$, 'getAscent$', function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.ascent)|0);
});

Clazz.newMeth(C$, 'getDescent$', function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.descent)|0);
});

Clazz.newMeth(C$, '_getMetrics', function () {
if (this.ascent >= 0 ) return;
this.ascent=this.font.getFontMetrics$().getAscent$();
this.descent=this.font.getFontMetrics$().getDescent$();
this.leading=this.font.getFontMetrics$().getLeading$();
}, p$1);

Clazz.newMeth(C$, 'getLeading$', function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.descent + this.leading )|0) - ((C$.roundingUpValue + this.descent)|0);
});

Clazz.newMeth(C$, 'getHeight$', function () {
if (this.height < 0) {
this.height=this.getAscent$() + ((C$.roundingUpValue + this.descent + this.leading )|0);
}return this.height;
});

Clazz.newMeth(C$, 'charWidth$I', function (codePoint) {
if (!Character.isValidCodePoint$I(codePoint)) {
codePoint=65535;
}if (codePoint < 256) {
return this.getWidths$()[codePoint];
} else {
var buffer=Clazz.array(Character.TYPE, [2]);
var len=Character.toChars$I$CA$I(codePoint, buffer, 0);
return this.charsWidth$CA$I$I(buffer, 0, len);
}});
;
(function(){var C$=Clazz.newClass(P$.FontDesignMetrics, "KeyReference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.val=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$O', function (key, value) {
C$.$init$.apply(this);
this.key=key;
this.val=value;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.val;
});

Clazz.newMeth(C$, 'dispose$', function () {
if ($I$(1).metricsCache.get$O(this.key) === this ) {
$I$(1).metricsCache.remove$O(this.key);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
