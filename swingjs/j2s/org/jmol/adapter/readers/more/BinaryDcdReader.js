(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'Boolean','javajs.util.SB','org.jmol.util.Logger','javajs.util.BS','org.jmol.util.Escape','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BinaryDcdReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nModels','nAtoms','nFree','crystGroup'],'O',['bsFree','javajs.util.BS','xAll','float[]','+yAll','+zAll']]]

Clazz.newMeth(C$, 'setup$S$java_util_Map$O', function (fullPath, htParams, reader) {
this.isBinary=true;
this.requiresBSFilter=true;
this.setupASCR$S$java_util_Map$O(fullPath, htParams, reader);
});

Clazz.newMeth(C$, 'initializeReader$', function () {
this.initializeTrajectoryFile$();
this.asc.setInfo$S$O("ignoreUnitCell", $I$(1).TRUE);
});

Clazz.newMeth(C$, 'processBinaryDocument$', function () {
var bytes=Clazz.array(Byte.TYPE, [40]);
this.binaryDoc.setStream$java_io_BufferedInputStream$Z(null, this.binaryDoc.readInt$() == 84);
this.binaryDoc.readInt$();
this.nModels=this.binaryDoc.readInt$();
var nPriv=this.binaryDoc.readInt$();
var nSaveC=this.binaryDoc.readInt$();
var nStep=this.binaryDoc.readInt$();
this.binaryDoc.readInt$();
this.binaryDoc.readInt$();
this.binaryDoc.readInt$();
var ndegf=this.binaryDoc.readInt$();
this.nFree=(ndegf/3|0);
var nFixed=this.binaryDoc.readInt$();
var delta4=this.binaryDoc.readInt$();
this.crystGroup=this.binaryDoc.readInt$();
this.binaryDoc.readByteArray$BA$I$I(bytes, 0, 32);
this.binaryDoc.readInt$();
this.binaryDoc.readInt$();
this.binaryDoc.readInt$();
var sb=Clazz.new_($I$(2,1));
for (var i=0, n=this.binaryDoc.readInt$(); i < n; i++) sb.append$S(p$1.trimString$S.apply(this, [this.binaryDoc.readString$I(80)])).appendC$C("\n");

this.binaryDoc.readInt$();
$I$(3).info$S("BinaryDcdReadaer:\n" + sb);
this.binaryDoc.readInt$();
this.nAtoms=this.binaryDoc.readInt$();
this.binaryDoc.readInt$();
this.nFree=this.nAtoms - nFixed;
if (nFixed != 0) {
this.binaryDoc.readInt$();
this.bsFree=$I$(4).newN$I(this.nFree);
for (var i=0; i < this.nFree; i++) this.bsFree.set$I(this.binaryDoc.readInt$() - 1);

this.binaryDoc.readInt$();
(function(a,f){return f.apply(null,a)})(["free: " + this.bsFree.cardinality$() + " " + $I$(5).eBS$javajs_util_BS(this.bsFree) ],$I$(3).info$S);
}p$1.readCoordinates.apply(this, []);
(function(a,f){return f.apply(null,a)})(["Total number of trajectory steps=" + this.trajectorySteps.size$()],$I$(3).info$S);
});

Clazz.newMeth(C$, 'trimString$S', function (s) {
var pt=s.indexOf$I("\u0000");
if (pt >= 0) s=s.substring$I$I(0, pt);
return s.trim$();
}, p$1);

Clazz.newMeth(C$, 'readFloatArray', function () {
var n=(this.binaryDoc.readInt$()/4|0);
var data=Clazz.array(Float.TYPE, [n]);
for (var i=0; i < n; i++) data[i]=this.binaryDoc.readFloat$();

this.binaryDoc.readInt$();
return data;
}, p$1);

Clazz.newMeth(C$, 'readDoubleArray', function () {
var n=(this.binaryDoc.readInt$()/8|0);
var data=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) data[i]=this.binaryDoc.readDouble$();

this.binaryDoc.readInt$();
return data;
}, p$1);

Clazz.newMeth(C$, 'readCoordinates', function () {
var ac=(this.bsFilter == null  ? this.templateAtomCount : (this.htParams.get$O("filteredAtomCount")).intValue$());
for (var i=0; i < this.nModels; i++) if (this.doGetModel$I$S(++this.modelNumber, null)) {
var trajectoryStep=Clazz.array($I$(6), [ac]);
if (!p$1.getTrajectoryStep$javajs_util_P3A.apply(this, [trajectoryStep])) return;
this.trajectorySteps.addLast$O(trajectoryStep);
if (this.isLastModel$I(this.modelNumber)) return;
} else {
if (this.crystGroup > 0) p$1.readDoubleArray.apply(this, []);
p$1.readFloatArray.apply(this, []);
p$1.readFloatArray.apply(this, []);
p$1.readFloatArray.apply(this, []);
}
}, p$1);

Clazz.newMeth(C$, 'getTrajectoryStep$javajs_util_P3A', function (trajectoryStep) {
try {
var ac=trajectoryStep.length;
var n=-1;
if (this.crystGroup > 0) p$1.calcUnitCell$DA.apply(this, [p$1.readDoubleArray.apply(this, [])]);
var x=p$1.readFloatArray.apply(this, []);
var y=p$1.readFloatArray.apply(this, []);
var z=p$1.readFloatArray.apply(this, []);
var bs=(this.xAll == null  ? null : this.bsFree);
if (bs == null ) {
this.xAll=x;
this.yAll=y;
this.zAll=z;
}for (var i=0, vpt=0; i < this.nAtoms; i++) {
var pt=Clazz.new_($I$(6,1));
if (bs == null  || bs.get$I(i) ) {
pt.set$F$F$F(x[vpt], y[vpt], z[vpt]);
vpt++;
} else {
pt.set$F$F$F(this.xAll[i], this.yAll[i], this.zAll[i]);
}if (this.bsFilter == null  || this.bsFilter.get$I(i) ) {
if (++n == ac) return true;
trajectoryStep[n]=pt;
}}
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'calcUnitCell$DA', function (abc) {
var a=abc[0];
var angle1=abc[1];
var b=abc[2];
var angle2=abc[3];
var angle3=abc[4];
var c=abc[5];
var alpha=(1.5707963267948966 - Math.asin(angle3)) * 180 / 3.141592653589793;
var beta=(1.5707963267948966 - Math.asin(angle2)) * 180 / 3.141592653589793;
var gamma=(1.5707963267948966 - Math.asin(angle1)) * 180 / 3.141592653589793;
System.out.println$S("unitcell:[" + new Double(a).toString() + " " + new Double(b).toString() + " " + new Double(c).toString() + " " + new Double(alpha).toString() + " " + new Double(beta).toString() + " " + new Double(gamma).toString() + "]" );
return Clazz.array(Float.TYPE, -1, [a, b, c, alpha, beta, gamma]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
