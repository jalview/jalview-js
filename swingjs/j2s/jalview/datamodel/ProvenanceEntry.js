(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "ProvenanceEntry");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.user=null;
this.action=null;
this.id=null;
this.date=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_util_Date$S', function (u, a, d, i) {
C$.$init$.apply(this);
this.user=u;
this.action=a;
this.date=d;
this.id=i;
}, 1);

Clazz.newMeth(C$, 'getUser$', function () {
return this.user;
});

Clazz.newMeth(C$, 'getAction$', function () {
return this.action;
});

Clazz.newMeth(C$, 'getDate$', function () {
return this.date;
});

Clazz.newMeth(C$, 'getID$', function () {
return this.id;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
