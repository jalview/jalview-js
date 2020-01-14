(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "IntRangeComparator", null, null, 'java.util.Comparator');
C$.ASCENDING=null;
C$.DESCENDING=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ASCENDING=Clazz.new_(C$.c$$Z,[true]);
C$.DESCENDING=Clazz.new_(C$.c$$Z,[false]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.forwards=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (forward) {
C$.$init$.apply(this);
this.forwards=forward;
}, 1);

Clazz.newMeth(C$, ['compare$IA$IA','compare$','compare$TT$TT'], function (o1, o2) {
var compared=Integer.compare$I$I(o1[0], o2[0]);
return this.forwards ? compared : -compared;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
