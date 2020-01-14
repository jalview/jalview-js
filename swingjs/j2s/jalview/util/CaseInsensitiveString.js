(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "CaseInsensitiveString");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.value=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.value;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o == null ) {
return false;
}if (!(Clazz.instanceOf(o, "jalview.util.CaseInsensitiveString"))) {
return false;
}var obj=o;
if (this.value == null ) {
return obj.value == null ;
}return this.value.equalsIgnoreCase$S(obj.value);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.value == null  ? C$.superclazz.prototype.hashCode$.apply(this, []) : this.value.toUpperCase$().hashCode$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
