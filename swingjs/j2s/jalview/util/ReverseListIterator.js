(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "ReverseListIterator", null, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iterator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (stuff) {
C$.$init$.apply(this);
this.iterator=stuff.listIterator$I(stuff.size$());
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.iterator.hasPrevious$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.iterator.previous$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.iterator.remove$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
