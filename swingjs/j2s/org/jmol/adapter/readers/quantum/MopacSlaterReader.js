(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),I$=[[0,'org.jmol.adapter.readers.quantum.SlaterReader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MopacSlaterReader", null, 'org.jmol.adapter.readers.quantum.SlaterReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['+atomicNumbers']]
,['O',['sphericalDValues','int[]','+principalQuantumNumber','+npqd']]]

Clazz.newMeth(C$, 'createSphericalSlaterByType$I$I$S$F$F', function (iAtom, atomicNumber, type, zeta, coef) {
var pt="S Px Py Pz  Dx2-y2Dxz Dz2 Dyz Dxy".indexOf$S(type);
switch (pt) {
case 0:
this.addSlater$I$I$I$I$I$D$F(iAtom + 1, 0, 0, 0, C$.getNPQs$I(atomicNumber) - 1, zeta, coef);
return;
case 2:
case 5:
case 8:
this.addSlater$I$I$I$I$I$D$F(iAtom + 1, pt == 2 ? 1 : 0, pt == 5 ? 1 : 0, pt == 8 ? 1 : 0, C$.getNPQp$I(atomicNumber) - 2, zeta, coef);
return;
}
pt=(pt >> 2) * 3 - 9;
this.addSlater$I$I$I$I$I$D$F(iAtom + 1, C$.sphericalDValues[pt++], C$.sphericalDValues[pt++], C$.sphericalDValues[pt++], C$.getNPQd$I(atomicNumber) - 3, zeta, coef);
});

Clazz.newMeth(C$, 'scaleSlater$I$I$I$I$D', function (ex, ey, ez, er, zeta) {
if (ex >= 0 && ey >= 0 ) {
return C$.superclazz.prototype.scaleSlater$I$I$I$I$D.apply(this, [ex, ey, ez, er, zeta]);
}var el=Math.abs(ex + ey + ez );
if (el == 3) {
return 0;
}return $I$(1,"getSlaterConstDSpherical$I$D$I$I",[el + er + 1 , Math.abs(zeta), ex, ey]);
});

Clazz.newMeth(C$, 'getNPQ$I', function (atomicNumber) {
return (atomicNumber < C$.principalQuantumNumber.length ? C$.principalQuantumNumber[atomicNumber] : 0);
}, 1);

Clazz.newMeth(C$, 'getNPQs$I', function (atomicNumber) {
var n=C$.getNPQ$I(atomicNumber);
switch (atomicNumber) {
case 10:
case 18:
case 36:
case 54:
case 86:
return n + 1;
default:
return n;
}
}, 1);

Clazz.newMeth(C$, 'getNPQp$I', function (atomicNumber) {
var n=C$.getNPQ$I(atomicNumber);
switch (atomicNumber) {
case 2:
return n + 1;
default:
return n;
}
}, 1);

Clazz.newMeth(C$, 'getNPQd$I', function (atomicNumber) {
return (atomicNumber < C$.npqd.length ? C$.npqd[atomicNumber] : 0);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.sphericalDValues=Clazz.array(Integer.TYPE, -1, [0, -2, 0, 1, 0, 1, -2, 0, 0, 0, 1, 1, 1, 1, 0]);
C$.principalQuantumNumber=Clazz.array(Integer.TYPE, -1, [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
C$.npqd=Clazz.array(Integer.TYPE, -1, [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
