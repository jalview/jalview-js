(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MdCrdReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ptFloat=0;
this.lenLine=0;
},1);

C$.$fields$=[['I',['ptFloat','lenLine']]]

Clazz.newMeth(C$, 'setup$S$java_util_Map$O', function (fullPath, htParams, readerOrDocument) {
this.requiresBSFilter=true;
this.setupASCR$S$java_util_Map$O(fullPath, htParams, readerOrDocument);
});

Clazz.newMeth(C$, 'initializeReader$', function () {
this.initializeTrajectoryFile$();
});

Clazz.newMeth(C$, 'checkLine$', function () {
p$1.readCoordinates.apply(this, []);
(function(a,f){return f.apply(null,a)})(["Total number of trajectory steps=" + this.trajectorySteps.size$()],$I$(1).info$S);
this.continuing=false;
return false;
});

Clazz.newMeth(C$, 'readCoordinates', function () {
this.line=null;
var ac=(this.bsFilter == null  ? this.templateAtomCount : (this.htParams.get$O("filteredAtomCount")).intValue$());
var isPeriodic=this.htParams.containsKey$O("isPeriodic");
var floatCount=this.templateAtomCount * 3 + (isPeriodic ? 3 : 0);
while (true)if (this.doGetModel$I$S(++this.modelNumber, null)) {
var trajectoryStep=Clazz.array($I$(2), [ac]);
if (!p$1.getTrajectoryStep$javajs_util_P3A$Z.apply(this, [trajectoryStep, isPeriodic])) return;
this.trajectorySteps.addLast$O(trajectoryStep);
if (this.isLastModel$I(this.modelNumber)) return;
} else {
if (!p$1.skipFloats$I.apply(this, [floatCount])) return;
}
}, p$1);

Clazz.newMeth(C$, 'getFloat', function () {
while (this.line == null  || this.ptFloat >= this.lenLine ){
if (this.rd$() == null ) return NaN;
this.ptFloat=0;
this.lenLine=this.line.length$();
}
this.ptFloat+=8;
return this.parseFloatRange$S$I$I(this.line, this.ptFloat - 8, this.ptFloat);
}, p$1);

Clazz.newMeth(C$, 'getPoint', function () {
var x=p$1.getFloat.apply(this, []);
var y=p$1.getFloat.apply(this, []);
var z=p$1.getFloat.apply(this, []);
return (Float.isNaN$F(z) ? null : $I$(2).new3$F$F$F(x, y, z));
}, p$1);

Clazz.newMeth(C$, 'getTrajectoryStep$javajs_util_P3A$Z', function (trajectoryStep, isPeriodic) {
var ac=trajectoryStep.length;
var n=-1;
for (var i=0; i < this.templateAtomCount; i++) {
var pt=p$1.getPoint.apply(this, []);
if (pt == null ) return false;
if (this.bsFilter == null  || this.bsFilter.get$I(i) ) {
if (++n == ac) return false;
trajectoryStep[n]=pt;
}}
if (isPeriodic) p$1.getPoint.apply(this, []);
return (this.line != null );
}, p$1);

Clazz.newMeth(C$, 'skipFloats$I', function (n) {
var i=0;
while (i < n && this.rd$() != null  )i+=this.getTokens$().length;

return (this.line != null );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
