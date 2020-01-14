(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Insets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TitledPanel", null, 'java.awt.Panel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.insets=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.insets=Clazz.new_($I$(1).c$$I$I$I$I,[10, 10, 10, 10]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, [""]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (title) {
Clazz.super_(C$, this,1);
this.setTitle$S(title);
}, 1);

Clazz.newMeth(C$, 'getInsets$', function () {
return this.insets;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
g.setColor$java_awt_Color(this.getForeground$());
g.drawRect$I$I$I$I(5, 5, this.getWidth$() - 10, this.getHeight$() - 10);
var width=g.getFontMetrics$().stringWidth$S(this.getTitle$());
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(10, 0, width, 10);
g.setColor$java_awt_Color(this.getForeground$());
g.drawString$S$I$I(this.getTitle$(), 10, 10);
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (title) {
this.title=title;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
