(function(){var P$=Clazz.newPackage("jalview.urls"),I$=[];
var C$=Clazz.newClass(P$, "IdOrgSettings");
C$.url=null;
C$.location=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setUrl$S', function (seturl) {
C$.url=seturl;
}, 1);

Clazz.newMeth(C$, 'setDownloadLocation$S', function (setloc) {
C$.location=setloc;
}, 1);

Clazz.newMeth(C$, 'getUrl$', function () {
return C$.url;
}, 1);

Clazz.newMeth(C$, 'getDownloadLocation$', function () {
return C$.location;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
