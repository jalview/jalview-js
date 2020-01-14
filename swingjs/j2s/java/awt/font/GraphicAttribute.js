(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float'],'java.awt.font.GlyphJustificationInfo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GraphicAttribute");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fAlignment=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (alignment) {
C$.$init$.apply(this);
if (alignment < -2 || alignment > 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad alignment"]);
}this.fAlignment=alignment;
}, 1);

Clazz.newMeth(C$, 'getBounds$', function () {
var ascent=this.getAscent$();
return Clazz.new_($I$(1).c$$F$F$F$F,[0, -ascent, this.getAdvance$(), ascent + this.getDescent$()]);
});

Clazz.newMeth(C$, 'getOutline$java_awt_geom_AffineTransform', function (tx) {
var b=this.getBounds$();
if (tx != null ) {
b=tx.createTransformedShape$java_awt_Shape(b);
}return b;
});

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.fAlignment;
});

Clazz.newMeth(C$, 'getJustificationInfo$', function () {
var advance=this.getAdvance$();
return Clazz.new_($I$(2).c$$F$Z$I$F$F$Z$I$F$F,[advance, false, 2, advance / 3, advance / 3, false, 1, 0, 0]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
