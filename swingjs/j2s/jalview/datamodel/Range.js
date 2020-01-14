(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "Range", null, null, 'jalview.datamodel.ContiguousI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.end=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'c$$I$I', function (i, j) {
C$.$init$.apply(this);
this.start=i;
this.end=j;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return String.valueOf$I(this.start) + "-" + String.valueOf$I(this.end) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.start * 31 + this.end;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "jalview.datamodel.Range")) {
var r=obj;
return (this.start == r.start && this.end == r.end );
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
