(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.bin.Cache']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pfam", null, 'jalview.ws.dbsources.Xfam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
