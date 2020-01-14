(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Insets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EmptyBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.left=0;
this.right=0;
this.top=0;
this.bottom=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (top, left, bottom, right) {
Clazz.super_(C$, this,1);
this.top=top;
this.right=right;
this.bottom=bottom;
this.left=left;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Insets', function (borderInsets) {
Clazz.super_(C$, this,1);
this.top=borderInsets.top;
this.right=borderInsets.right;
this.bottom=borderInsets.bottom;
this.left=borderInsets.left;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I', function (c, g, x, y, width, height) {
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component', function (c) {
return this.getBorderInsets$();
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets', function (c, insets) {
insets.left=this.left;
insets.top=this.top;
insets.right=this.right;
insets.bottom=this.bottom;
return insets;
});

Clazz.newMeth(C$, 'getBorderInsets$', function () {
return Clazz.new_($I$(1).c$$I$I$I$I,[this.top, this.left, this.bottom, this.right]);
});

Clazz.newMeth(C$, 'isBorderOpaque$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
