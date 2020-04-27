(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EnsemblData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['restAvailable','restMajorVersionMismatch'],'J',['lastAvailableCheckTime','lastVersionCheckTime','retryAfter'],'S',['domain','expectedRestVersion','restVersion','dataVersion']]]

Clazz.newMeth(C$, 'c$$S$S', function (theDomain, restExpected) {
;C$.$init$.apply(this);
this.domain=theDomain;
this.expectedRestVersion=restExpected;
this.lastAvailableCheckTime=-1;
this.lastVersionCheckTime=-1;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
