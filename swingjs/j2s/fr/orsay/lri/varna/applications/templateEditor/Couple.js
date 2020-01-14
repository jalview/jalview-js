(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),I$=[];
var C$=Clazz.newClass(P$, "Couple");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=null;
this.second=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$TT$TU', function (a, b) {
C$.$init$.apply(this);
this.first=a;
this.second=b;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (c) {
if (!(Clazz.instanceOf(c, "fr.orsay.lri.varna.applications.templateEditor.Couple"))) {
return false;
}var cc=c;
return (cc.first.equals$O(this.first) && (cc.second.equals$O(this.second)) );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return 1000003 * this.first.hashCode$() + this.second.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return "(" + this.first + "," + this.second + ")" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
