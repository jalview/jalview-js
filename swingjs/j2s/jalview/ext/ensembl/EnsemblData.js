(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[];
var C$=Clazz.newClass(P$, "EnsemblData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.domain=null;
this.expectedRestVersion=null;
this.restVersion=null;
this.dataVersion=null;
this.restAvailable=false;
this.lastAvailableCheckTime=0;
this.lastVersionCheckTime=0;
this.restMajorVersionMismatch=false;
this.retryAfter=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (theDomain, restExpected) {
C$.$init$.apply(this);
this.domain=theDomain;
this.expectedRestVersion=restExpected;
this.lastAvailableCheckTime=-1;
this.lastVersionCheckTime=-1;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
