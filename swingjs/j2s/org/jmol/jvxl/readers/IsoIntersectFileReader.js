(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IsoIntersectFileReader", null, 'org.jmol.jvxl.readers.VolumeDataReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rdrA=null;
this.rdrB=null;
this.funcType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.funcType=2;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValueAB$F$F', function (va, vb) {
if (va == 3.4028235E38  || vb == 3.4028235E38   || Float.isNaN$F(va)  || Float.isNaN$F(vb) ) return 3.4028235E38;
switch (this.funcType) {
case 1:
return (va + vb);
case 2:
return (va - vb);
case 3:
return (va > vb  ? va : vb);
default:
return 3.4028235E38;
}
}, p$1);

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
return this.rdrA.readVolumeParameters$Z(isMapData) && this.rdrB.readVolumeData$Z(isMapData) ;
});

Clazz.newMeth(C$, 'closeReader$', function () {
if (readerClosed) return;
;
this.rdrA.closeReaderSFR$();
this.rdrB.closeReaderSFR$();
if () return;
;
Clazz.load('org.jmol.util.Logger').info$S();
});
})();
;Clazz.setTVer('3.2.2.04');//Created 2018-09-01 23:18:50 Java2ScriptVisitor version 3.2.2.04 net.sf.j2s.core.jar version 3.2.2.04
