(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "Profiles", null, null, 'jalview.datamodel.ProfilesI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.profiles=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_ProfileIA', function (p) {
C$.$init$.apply(this);
this.profiles=p;
}, 1);

Clazz.newMeth(C$, 'get$I', function (col) {
return this.profiles != null  && col >= 0  && col < this.profiles.length  ? this.profiles[col] : null;
});

Clazz.newMeth(C$, 'getStartColumn$', function () {
return 0;
});

Clazz.newMeth(C$, 'getEndColumn$', function () {
return this.profiles == null  ? 0 : this.profiles.length - 1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
