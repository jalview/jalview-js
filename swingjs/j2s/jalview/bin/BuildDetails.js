(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BuildDetails", null, null, 'jalview.api.BuildDetailsI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['buildDate','version','installation']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (version, buildDate, installation) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
