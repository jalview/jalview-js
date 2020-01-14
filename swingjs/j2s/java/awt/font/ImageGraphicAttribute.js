(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageGraphicAttribute", null, 'java.awt.font.GraphicAttribute');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fImage=null;
this.fImageWidth=0;
this.fImageHeight=0;
this.fOriginX=0;
this.fOriginY=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image$I', function (image, alignment) {
C$.c$$java_awt_Image$I$F$F.apply(this, [image, alignment, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image$I$F$F', function (image, alignment, originX, originY) {
C$.superclazz.c$$I.apply(this, [alignment]);
C$.$init$.apply(this);
this.fImage=image;
this.fImageWidth=image.getWidth$java_awt_image_ImageObserver(null);
this.fImageHeight=image.getHeight$java_awt_image_ImageObserver(null);
this.fOriginX=originX;
this.fOriginY=originY;
}, 1);

Clazz.newMeth(C$, 'getAscent$', function () {
return Math.max(0, this.fOriginY);
});

Clazz.newMeth(C$, 'getDescent$', function () {
return Math.max(0, this.fImageHeight - this.fOriginY);
});

Clazz.newMeth(C$, 'getAdvance$', function () {
return Math.max(0, this.fImageWidth - this.fOriginX);
});

Clazz.newMeth(C$, 'getBounds$', function () {
return Clazz.new_($I$(1).c$$F$F$F$F,[-this.fOriginX, -this.fOriginY, this.fImageWidth, this.fImageHeight]);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F', function (graphics, x, y) {
graphics.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.fImage, ((x - this.fOriginX)|0), ((y - this.fOriginY)|0), null);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.fImage.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (rhs) {
try {
return this.equals$java_awt_font_ImageGraphicAttribute(rhs);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$java_awt_font_ImageGraphicAttribute', function (rhs) {
if (rhs == null ) {
return false;
}if (this === rhs ) {
return true;
}if (this.fOriginX != rhs.fOriginX  || this.fOriginY != rhs.fOriginY  ) {
return false;
}if (this.getAlignment$() != rhs.getAlignment$()) {
return false;
}if (!this.fImage.equals$O(rhs.fImage)) {
return false;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
