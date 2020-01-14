(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Font']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OffScreenImage", null, 'java.awt.image.BufferedImage');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
this.defaultFont=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (width, height, imageType) {
C$.superclazz.c$$I$I$I.apply(this, [width, height, imageType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getGraphics$', function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'createGraphics$', function () {
if (this.c == null ) {
var env=$I$(1).getLocalGraphicsEnvironment$();
return env.createGraphics$java_awt_image_BufferedImage(this);
}var font=this.c.getFont$();
if (font == null ) {
if (this.defaultFont == null ) {
this.defaultFont=Clazz.new_($I$(2).c$$S$I$I,["Dialog", 0, 12]);
}font=this.defaultFont;
}return null;
});

Clazz.newMeth(C$, 'getSource$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
