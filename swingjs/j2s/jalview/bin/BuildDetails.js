(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[];
var C$=Clazz.newClass(P$, "BuildDetails", null, null, 'jalview.api.BuildDetailsI');
C$.buildDate=null;
C$.version=null;
C$.installation=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (version, buildDate, installation) {
C$.$init$.apply(this);
C$.version=version;
C$.buildDate=buildDate;
C$.installation=installation;
}, 1);

Clazz.newMeth(C$, 'getBuildDate$', function () {
return C$.buildDate;
});

Clazz.newMeth(C$, 'setBuilddate$S', function (buildDate) {
C$.buildDate=buildDate;
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
return C$.version;
});

Clazz.newMeth(C$, 'setVersion$S', function (version) {
C$.version=version;
}, 1);

Clazz.newMeth(C$, 'getInstallation$', function () {
return C$.installation;
});

Clazz.newMeth(C$, 'setInstallation$S', function (installation) {
C$.installation=installation;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
