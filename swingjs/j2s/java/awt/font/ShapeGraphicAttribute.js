(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ShapeGraphicAttribute", null, 'java.awt.font.GraphicAttribute');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fShape=null;
this.fStroke=false;
this.fShapeBounds=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape$I$Z', function (shape, alignment, stroke) {
C$.superclazz.c$$I.apply(this, [alignment]);
C$.$init$.apply(this);
this.fShape=shape;
this.fStroke=stroke;
this.fShapeBounds=this.fShape.getBounds2D$();
}, 1);

Clazz.newMeth(C$, 'getAscent$', function () {
return Math.max(0, -this.fShapeBounds.getMinY$());
});

Clazz.newMeth(C$, 'getDescent$', function () {
return Math.max(0, this.fShapeBounds.getMaxY$());
});

Clazz.newMeth(C$, 'getAdvance$', function () {
return Math.max(0, this.fShapeBounds.getMaxX$());
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F', function (graphics, x, y) {
graphics.translate$I$I((x|0), (y|0));
try {
if (this.fStroke == true ) {
graphics.draw$java_awt_Shape(this.fShape);
} else {
graphics.fill$java_awt_Shape(this.fShape);
}} finally {
graphics.translate$I$I(-(x|0), -(y|0));
}
});

Clazz.newMeth(C$, 'getBounds$', function () {
var bounds=Clazz.new_($I$(1));
bounds.setRect$java_awt_geom_Rectangle2D(this.fShapeBounds);
if (this.fStroke == true ) {
++bounds.width;
++bounds.height;
}return bounds;
});

Clazz.newMeth(C$, 'getOutline$java_awt_geom_AffineTransform', function (tx) {
return tx == null  ? this.fShape : tx.createTransformedShape$java_awt_Shape(this.fShape);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.fShape.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (rhs) {
try {
return this.equals$java_awt_font_ShapeGraphicAttribute(rhs);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$java_awt_font_ShapeGraphicAttribute', function (rhs) {
if (rhs == null ) {
return false;
}if (this === rhs ) {
return true;
}if (this.fStroke != rhs.fStroke ) {
return false;
}if (this.getAlignment$() != rhs.getAlignment$()) {
return false;
}if (!this.fShape.equals$O(rhs.fShape)) {
return false;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
