(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.FontDesignMetrics','java.util.Hashtable',['sun.font.FontDesignMetrics','.KeyReference'],'swingjs.JSToolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontDesignMetrics", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.FontMetrics');
C$.$classes$=[['KeyReference',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ascent=-1;
this.height=-1;
},1);

C$.$fields$=[['F',['ascent','descent','leading'],'I',['height']]
,['F',['roundingUpValue'],'I',['recentIndex'],'O',['metricsCache','java.util.Hashtable','recentMetrics','sun.font.FontDesignMetrics[]']]]

Clazz.newMeth(C$, 'getMetrics$java_awt_Font',  function (font) {
var m=null;
var r;
r=C$.metricsCache.get$O(font.toString());
if (r != null ) {
m=r.get$();
}if (m == null ) {
m=Clazz.new_(C$.c$$java_awt_Font,[font]);
C$.metricsCache.put$O$O(font.toString(), Clazz.new_($I$(3,1).c$$O$O,[font, m]));
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

Clazz.newMeth(C$, 'c$$java_awt_Font',  function (font) {
;C$.superclazz.c$$java_awt_Font.apply(this,[font]);C$.$init$.apply(this);
this.font=font;
p$1.initMatrixAndMetrics.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initMatrixAndMetrics',  function () {
{
//need to calculate ascent, descent, leading, and maxAdvance
}
}, p$1);

Clazz.newMeth(C$, 'charWidth$C',  function (ch) {
return this.stringWidth$S("" + ch);
});

Clazz.newMeth(C$, 'stringWidth$S',  function (str) {
return ((0.5 + p$1.getWidth$S.apply(this, [str]))|0);
});

Clazz.newMeth(C$, 'getWidth$S',  function (str) {
return $I$(4).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.font, str);
}, p$1);

Clazz.newMeth(C$, 'charsWidth$CA$I$I',  function (data, off, len) {
var width=0;
if (len < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["len=" + len]);
}var limit=off + len;
for (var i=off; i < limit; i++) {
var ch=data[i];
width+=this.stringWidth$S("" + ch);
}
return ((0.5 + width)|0);
});

Clazz.newMeth(C$, 'getWidths$',  function () {
var widths=Clazz.array(Integer.TYPE, [256]);
return widths;
});

Clazz.newMeth(C$, 'getAscent$',  function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.ascent)|0);
});

Clazz.newMeth(C$, 'getDescent$',  function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.descent)|0);
});

Clazz.newMeth(C$, '_getMetrics',  function () {
if (this.ascent >= 0 ) return;
this.ascent=this.font.getFontMetrics$().getAscent$();
this.descent=this.font.getFontMetrics$().getDescent$();
this.leading=this.font.getFontMetrics$().getLeading$();
}, p$1);

Clazz.newMeth(C$, 'getLeading$',  function () {
p$1._getMetrics.apply(this, []);
return ((C$.roundingUpValue + this.descent + this.leading )|0) - ((C$.roundingUpValue + this.descent)|0);
});

Clazz.newMeth(C$, 'getHeight$',  function () {
if (this.height < 0) {
this.height=this.getAscent$() + ((C$.roundingUpValue + this.descent + this.leading )|0);
}return this.height;
});

Clazz.newMeth(C$, 'charWidth$I',  function (codePoint) {
if (!Character.isValidCodePoint$I(codePoint)) {
codePoint=65535;
}if (codePoint < 256) {
return this.getWidths$()[codePoint];
} else {
var buffer=Clazz.array(Character.TYPE, [2]);
var len=Character.toChars$I$CA$I(codePoint, buffer, 0);
return this.charsWidth$CA$I$I(buffer, 0, len);
}});

C$.$static$=function(){C$.$static$=0;
C$.roundingUpValue=0.95;
C$.metricsCache=Clazz.new_($I$(2,1));
C$.recentMetrics=Clazz.array(C$, [5]);
C$.recentIndex=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FontDesignMetrics, "KeyReference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['key','java.lang.Object','+val']]]

Clazz.newMeth(C$, 'c$$O$O',  function (key, value) {
;C$.$init$.apply(this);
this.key=key;
this.val=value;
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
return this.val;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if ($I$(1).metricsCache.get$O(this.key.toString()) === this ) {
$I$(1).metricsCache.remove$O(this.key);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:04 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
