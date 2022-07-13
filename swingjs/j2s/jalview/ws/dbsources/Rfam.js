(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.util.Platform','jalview.bin.Cache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Rfam", null, 'jalview.ws.dbsources.Xfam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getURLPrefix$',  function () {
return $I$(2).getDefault$S$S("RFAM_BASEURL", "https://rfam.xfam.org");
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return null;
});

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
return accession.indexOf$S("RF") == 0;
});

Clazz.newMeth(C$, 'getXfamSource$',  function () {
return "RFAM";
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1).addJ2SDirectDatabaseCall$S("https://rfam.xfam.org");
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
