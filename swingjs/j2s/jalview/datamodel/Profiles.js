(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Profiles", null, null, 'jalview.datamodel.ProfilesI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['profiles','jalview.datamodel.ProfileI[]']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_ProfileIA',  function (p) {
;C$.$init$.apply(this);
this.profiles=p;
}, 1);

Clazz.newMeth(C$, 'get$I',  function (col) {
return this.profiles != null  && col >= 0  && col < this.profiles.length  ? this.profiles[col] : null;
});

Clazz.newMeth(C$, 'getStartColumn$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getEndColumn$',  function () {
return this.profiles == null  ? 0 : this.profiles.length - 1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
