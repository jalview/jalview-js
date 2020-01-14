(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
var C$=Clazz.newClass(P$, "JSLineMetrics", null, 'java.awt.font.LineMetrics');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fm=null;
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$S', function (font, s) {
Clazz.super_(C$, this,1);
this.fm=font.getFontMetrics$();
}, 1);

Clazz.newMeth(C$, 'getNumChars$', function () {
return this.s.length$();
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.fm.getHeight$();
});

Clazz.newMeth(C$, 'getBaselineIndex$', function () {
return 0;
});

Clazz.newMeth(C$, 'getBaselineOffsets$', function () {
return Clazz.array(Float.TYPE, [this.s.length$()]);
});

Clazz.newMeth(C$, 'getStrikethroughOffset$', function () {
return this.fm.getAscent$() / 2.0;
});

Clazz.newMeth(C$, 'getStrikethroughThickness$', function () {
return 1;
});

Clazz.newMeth(C$, 'getUnderlineOffset$', function () {
return 2;
});

Clazz.newMeth(C$, 'getUnderlineThickness$', function () {
return 1;
});

Clazz.newMeth(C$, 'getAscent$', function () {
return this.fm.getAscent$();
});

Clazz.newMeth(C$, 'getDescent$', function () {
return this.fm.getDescent$();
});

Clazz.newMeth(C$, 'getLeading$', function () {
return this.fm.getLeading$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
