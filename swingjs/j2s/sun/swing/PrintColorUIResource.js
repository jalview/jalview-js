(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'javax.swing.plaf.ColorUIResource']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PrintColorUIResource", null, 'javax.swing.plaf.ColorUIResource');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.printColor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color', function (rgb, printColor) {
C$.superclazz.c$$I.apply(this, [rgb]);
C$.$init$.apply(this);
this.printColor=printColor;
}, 1);

Clazz.newMeth(C$, 'getPrintColor$', function () {
return ((this.printColor != null ) ? this.printColor : this);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(1).c$$java_awt_Color,[this]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
