(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
var C$=Clazz.newClass(P$, "JSPopupMenuSeparatorUI", null, 'swingjs.plaf.JSSeparatorUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.isMenuItem=this.isMenuSep=true;
this.allowPaintedBackground=false;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
