(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'javajs.util.P3','javajs.util.PT']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SmilesMeasure");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.indices=Clazz.array(Integer.TYPE, [4]);
this.points=Clazz.array($I$(1), [4]);
},1);

C$.$fields$=[['Z',['isNot'],'I',['nPoints','type','index'],'O',['search','org.jmol.smiles.SmilesSearch','indices','int[]','minmax','float[]','points','javajs.util.P3[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_smiles_SmilesSearch$I$I$Z$FA', function (search, index, type, isNot, minmax) {
;C$.$init$.apply(this);
this.search=search;
this.type=Math.min(4, Math.max(type, 2));
this.index=index;
this.isNot=isNot;
this.minmax=minmax;
for (var i=minmax.length - 2; i >= 0; i-=2) if (minmax[i] > minmax[i + 1] ) {
var min=minmax[i + 1];
minmax[i + 1]=minmax[i];
minmax[i]=min;
}
}, 1);

Clazz.newMeth(C$, 'addPoint$I', function (index) {
if (this.nPoints == this.type) return false;
if (this.nPoints == 0) for (var i=1; i < this.type; i++) this.indices[i]=index + i;

this.indices[this.nPoints++]=index;
return true;
});

Clazz.newMeth(C$, 'check$', function () {
for (var i=0; i < this.type; i++) {
var iAtom=this.search.patternAtoms[this.indices[i]].getMatchingAtomIndex$();
this.points[i]=this.search.targetAtoms[iAtom];
}
var d=0;
switch (this.type) {
case 2:
d=this.points[0].distance$javajs_util_T3(this.points[1]);
break;
case 3:
this.search.v.vA.sub2$javajs_util_T3$javajs_util_T3(this.points[0], this.points[1]);
this.search.v.vB.sub2$javajs_util_T3$javajs_util_T3(this.points[2], this.points[1]);
d=this.search.v.vA.angle$javajs_util_V3(this.search.v.vB) / 0.017453292;
break;
case 4:
d=C$.setTorsionData$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$org_jmol_smiles_VTemp$Z(this.points[0], this.points[1], this.points[2], this.points[3], this.search.v, true);
break;
}
for (var i=this.minmax.length - 2; i >= 0; i-=2) if (d >= this.minmax[i]  && d <= this.minmax[i + 1]  ) return !this.isNot;

return this.isNot;
});

Clazz.newMeth(C$, 'setTorsionData$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$org_jmol_smiles_VTemp$Z', function (pt1a, pt1, pt2, pt2a, v, withDihedral) {
v.vTemp1.sub2$javajs_util_T3$javajs_util_T3(pt1a, pt1);
v.vTemp2.sub2$javajs_util_T3$javajs_util_T3(pt2a, pt2);
if (!withDihedral) return 0;
v.vNorm2.sub2$javajs_util_T3$javajs_util_T3(pt1, pt2);
v.vNorm2.normalize$();
v.vTemp1.cross$javajs_util_T3$javajs_util_T3(v.vTemp1, v.vNorm2);
v.vTemp1.normalize$();
v.vTemp2.cross$javajs_util_T3$javajs_util_T3(v.vTemp2, v.vNorm2);
v.vTemp2.normalize$();
v.vNorm3.cross$javajs_util_T3$javajs_util_T3(v.vTemp1, v.vTemp2);
return v.vTemp1.angle$javajs_util_V3(v.vTemp2) / 0.017453292 * (v.vNorm2.dot$javajs_util_T3(v.vNorm3) < 0  ? 1 : -1);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var s="(." + "__dat".charAt$I(this.type) + this.index + ":" + $I$(2).toJSON$S$O(null, this.minmax) + ") for" ;
for (var i=0; i < this.type; i++) s += " " + (i >= this.nPoints ? "?" : "" + this.indices[i]);

return s;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
