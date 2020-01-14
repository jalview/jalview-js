(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Pfam", null, 'jalview.ws.dbsources.Xfam');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$', function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return null;
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return null;
});

Clazz.newMeth(C$, 'getURLPrefix$', function () {
return $I$(1).getDefault$S$S("PFAM_BASEURL", "https://pfam.xfam.org");
});

Clazz.newMeth(C$, 'isValidReference$S', function (accession) {
return accession.indexOf$S("PF") == 0;
});

Clazz.newMeth(C$, 'getXfamSource$', function () {
return "PFAM";
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
