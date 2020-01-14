(function(){var P$=Clazz.newPackage("java.awt.print"),I$=[[0,['java.awt.geom.Rectangle2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Paper", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mHeight=0;
this.mWidth=0;
this.mImageableArea=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.mHeight=792.0;
this.mWidth=612.0;
this.mImageableArea=Clazz.new_($I$(1).c$$D$D$D$D,[72, 72, this.mWidth - 144, this.mHeight - 144]);
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var newPaper;
try {
newPaper=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
e.printStackTrace$();
newPaper=null;
} else {
throw e;
}
}
return newPaper;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.mHeight;
});

Clazz.newMeth(C$, 'setSize$D$D', function (width, height) {
this.mWidth=width;
this.mHeight=height;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.mWidth;
});

Clazz.newMeth(C$, 'setImageableArea$D$D$D$D', function (x, y, width, height) {
this.mImageableArea=Clazz.new_($I$(1).c$$D$D$D$D,[x, y, width, height]);
});

Clazz.newMeth(C$, 'getImageableX$', function () {
return this.mImageableArea.getX$();
});

Clazz.newMeth(C$, 'getImageableY$', function () {
return this.mImageableArea.getY$();
});

Clazz.newMeth(C$, 'getImageableWidth$', function () {
return this.mImageableArea.getWidth$();
});

Clazz.newMeth(C$, 'getImageableHeight$', function () {
return this.mImageableArea.getHeight$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
