(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),I$=[[0,'javajs.util.Lst','org.jmol.quantum.SlaterData','org.jmol.util.Logger','java.util.Arrays',['org.jmol.adapter.readers.quantum.SlaterReader','.SlaterSorter'],'java.util.Map',['org.jmol.adapter.readers.quantum.SlaterReader','.OrbitalSorter']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SlaterReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.adapter.readers.quantum.BasisFunctionReader');
C$.$classes$=[['SlaterSorter',0],['OrbitalSorter',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.slaters=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['slaters','javajs.util.Lst','slaterArray','org.jmol.quantum.SlaterData[]']]
,['O',['fact1','double[]','+dfact2']]]

Clazz.newMeth(C$, 'addSlater$I$I$I$I$I$D$F', function (iAtom, a, b, c, d, zeta, coef) {
this.slaters.addLast$O(Clazz.new_($I$(2,1).c$$I$I$I$I$I$D$D,[iAtom, a, b, c, d, zeta, coef]));
});

Clazz.newMeth(C$, 'addSlater$org_jmol_quantum_SlaterData$I', function (sd, n) {
sd.index=n;
this.slaters.addLast$O(sd);
});

Clazz.newMeth(C$, 'setSlaters$Z$Z', function (doScale, doSort) {
if (this.slaterArray == null ) {
var nSlaters=this.slaters.size$();
this.slaterArray=Clazz.array($I$(2), [nSlaters]);
for (var i=0; i < this.slaterArray.length; i++) this.slaterArray[i]=this.slaters.get$I(i);

}if (doScale) for (var i=0; i < this.slaterArray.length; i++) {
var sd=this.slaterArray[i];
sd.coef *= this.scaleSlater$I$I$I$I$D(sd.x, sd.y, sd.z, sd.r, sd.zeta);
if (this.debugging) {
(function(a,f){return f.apply(null,a)})(["SlaterReader " + i + ": " + sd.atomNo + " " + sd.x + " " + sd.y + " " + sd.z + " " + sd.r + " " + new Double(sd.zeta).toString() + " " + new Double(sd.coef).toString() ],$I$(3).debug$S);
}}
if (doSort) {
(function(a,f){return f.apply(null,a)})([this.slaterArray, Clazz.new_($I$(5,1),[this, null])],$I$(4).sort$OA$java_util_Comparator);
var pointers=Clazz.array(Integer.TYPE, [this.slaterArray.length]);
for (var i=0; i < this.slaterArray.length; i++) pointers[i]=this.slaterArray[i].index;

this.sortOrbitalCoefficients$IA(pointers);
}this.moData.put$O$O("slaters", this.slaterArray);
this.asc.setCurrentModelInfo$S$O("moData", this.moData);
});

Clazz.newMeth(C$, 'setMOs$S', function (units) {
this.moData.put$O$O("mos", this.orbitals);
this.moData.put$O$O("energyUnits", units);
this.finalizeMOData$java_util_Map(this.moData);
});

Clazz.newMeth(C$, 'sortOrbitalCoefficients$IA', function (pointers) {
for (var i=this.orbitals.size$(); --i >= 0; ) {
var mo=this.orbitals.get$I(i);
var coefs=mo.get$O("coefficients");
var sorted=Clazz.array(Float.TYPE, [pointers.length]);
for (var j=0; j < pointers.length; j++) {
var k=pointers[j];
if (k < coefs.length) sorted[j]=coefs[k];
}
mo.put$O$O("coefficients", sorted);
}
});

Clazz.newMeth(C$, 'sortOrbitals$', function () {
var array=this.orbitals.toArray$OA(Clazz.array($I$(6), [0]));
(function(a,f){return f.apply(null,a)})([array, Clazz.new_($I$(7,1),[this, null])],$I$(4).sort$OA$java_util_Comparator);
this.orbitals.clear$();
for (var i=0; i < array.length; i++) this.orbitals.addLast$O(array[i]);

});

Clazz.newMeth(C$, 'scaleSlater$I$I$I$I$D', function (ex, ey, ez, er, zeta) {
var el=ex + ey + ez ;
switch (el) {
case 0:
case 1:
ez=-1;
break;
}
return C$.getSlaterConstCartesian$I$D$I$I$I$I(el + er + 1 , Math.abs(zeta), el, ex, ey, ez);
});

Clazz.newMeth(C$, 'fact$D$D$I', function (f, zeta, n) {
return Math.pow(2 * zeta, n + 0.5) * Math.sqrt(f * 0.07957747154594767 / C$.fact1[n]);
}, 1);

Clazz.newMeth(C$, 'getSlaterConstCartesian$I$D$I$I$I$I', function (n, zeta, el, ex, ey, ez) {
return C$.fact$D$D$I(ez < 0 ? C$.dfact2[el + 1] : C$.dfact2[el + 1] / C$.dfact2[ex] / C$.dfact2[ey] / C$.dfact2[ez] , zeta, n);
}, 1);

Clazz.newMeth(C$, 'getSlaterConstDSpherical$I$D$I$I', function (n, zeta, ex, ey) {
return C$.fact$D$D$I((15/(ex < 0 ? 12 : ey < 0 ? 4 : 1)|0), zeta, n);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.fact1=Clazz.array(Double.TYPE, -1, [1.0, 2.0, 24.0, 720.0, 40320.0, 362880.0, 8.71782912E10]);
C$.dfact2=Clazz.array(Double.TYPE, -1, [1, 1, 3, 15, 105]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SlaterReader, "SlaterSorter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_jmol_quantum_SlaterData$org_jmol_quantum_SlaterData','compare$O$O'], function (sd1, sd2) {
return (sd1.atomNo < sd2.atomNo ? -1 : sd1.atomNo > sd2.atomNo ? 1 : 0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SlaterReader, "OrbitalSorter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$java_util_Map$java_util_Map','compare$O$O'], function (mo1, mo2) {
var e1=(mo1.get$O("energy")).floatValue$();
var e2=(mo2.get$O("energy")).floatValue$();
return (e1 < e2  ? -1 : e2 < e1  ? 1 : 0);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
