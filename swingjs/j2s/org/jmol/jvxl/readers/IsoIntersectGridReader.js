(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IsoIntersectGridReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.readers=null;
this.factors=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initSR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
var data=sg.getReaderData$();
this.readers=data[0];
this.factors=data[1];
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
for (var i=this.readers.length; --i >= 0; ) if (!this.readers[i].readVolumeParameters$Z(isMapData)) return false;

return true;
});

Clazz.newMeth(C$, 'getNextVoxelValue$', function () {
var f=0;
for (var i=this.readers.length; --i >= 0; ) f += this.factors[i] * this.readers[i].getNextVoxelValue$();

return f;
});

Clazz.newMeth(C$, 'closeReader$', function () {
if (this.readerClosed) return;
this.readerClosed=true;
for (var i=this.readers.length; --i >= 0; ) this.readers[i].closeReaderSFR$();

if (this.nData == 0 || this.dataMax == -3.4028235E38  ) return;
this.dataMean /= this.nData;
$I$(1).info$S("IsoIntersectFileReader closing file: " + this.nData + " points read \ndata min/max/mean = " + new Float(this.dataMin).toString() + "/" + new Float(this.dataMax).toString() + "/" + new Float(this.dataMean).toString() );
});

Clazz.newMeth(C$, 'readParameters$', function () {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
