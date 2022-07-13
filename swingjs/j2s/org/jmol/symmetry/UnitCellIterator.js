(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.BoxInfo','javajs.util.P3i','org.jmol.util.Logger','javajs.util.Lst','org.jmol.util.Point3fi']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnitCellIterator", null, null, 'org.jmol.api.AtomIndexIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ipt=-2147483648;
},1);

C$.$fields$=[['Z',['done'],'F',['maxDistance2','distance2'],'I',['nFound','ipt','nAtoms','listPt'],'O',['atoms','org.jmol.modelset.Atom[]','center','javajs.util.T3','+translation','unitCell','org.jmol.api.SymmetryInterface','minXYZ','javajs.util.P3i','+maxXYZ','+t','p','javajs.util.P3','unitList','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_api_SymmetryInterface$org_jmol_modelset_Atom$org_jmol_modelset_AtomA$javajs_util_BS$F', function (unitCell, atom, atoms, bsAtoms, distance) {
this.unitCell=unitCell;
this.atoms=atoms;
this.addAtoms$javajs_util_BS(bsAtoms);
this.p=Clazz.new_($I$(1,1));
if (distance > 0 ) this.setCenter$javajs_util_T3$F(atom, distance);
return this;
});

Clazz.newMeth(C$, 'setModel$org_jmol_modelset_ModelSet$I$I$I$javajs_util_T3$F$org_jmol_atomdata_RadiusData', function (modelSet, modelIndex, zeroBase, atomIndex, center, distance, rd) {
});

Clazz.newMeth(C$, 'setCenter$javajs_util_T3$F', function (center, distance) {
if (distance == 0 ) return;
this.maxDistance2=distance * distance;
this.center=center;
this.translation=Clazz.new_($I$(1,1));
var pts=$I$(2).unitCubePoints;
var min=$I$(1).new3$F$F$F(3.4028235E38, 3.4028235E38, 3.4028235E38);
var max=$I$(1).new3$F$F$F(-3.4028235E38, -3.4028235E38, -3.4028235E38);
this.p=Clazz.new_($I$(1,1));
var ptC=Clazz.new_($I$(1,1));
ptC.setT$javajs_util_T3(center);
this.unitCell.toFractional$javajs_util_T3$Z(ptC, true);
for (var i=0; i < 8; i++) {
this.p.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-2.0, pts[i], pts[7]);
this.p.scaleAdd2$F$javajs_util_T3$javajs_util_T3(distance, this.p, center);
this.unitCell.toFractional$javajs_util_T3$Z(this.p, true);
if (min.x > this.p.x ) min.x=this.p.x;
if (max.x < this.p.x ) max.x=this.p.x;
if (min.y > this.p.y ) min.y=this.p.y;
if (max.y < this.p.y ) max.y=this.p.y;
if (min.z > this.p.z ) min.z=this.p.z;
if (max.z < this.p.z ) max.z=this.p.z;
}
this.minXYZ=$I$(3,"new3$I$I$I",[(Math.floor(min.x)|0), (Math.floor(min.y)|0), (Math.floor(min.z)|0)]);
this.maxXYZ=$I$(3,"new3$I$I$I",[(Math.ceil(max.x)|0), (Math.ceil(max.y)|0), (Math.ceil(max.z)|0)]);
if ($I$(4).debugging) $I$(4).info$S("UnitCellIterator minxyz/maxxyz " + this.minXYZ + " " + this.maxXYZ );
this.t=$I$(3).new3$I$I$I(this.minXYZ.x - 1, this.minXYZ.y, this.minXYZ.z);
p$1.nextCell.apply(this, []);
});

Clazz.newMeth(C$, 'addAtoms$javajs_util_BS', function (bsAtoms) {
this.done=(bsAtoms == null );
if (this.done) return;
this.unitList=Clazz.new_($I$(5,1));
var cat="";
var ops=this.unitCell.getSymmetryOperations$();
var nOps=ops.length;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var a=this.atoms[i];
for (var j=0; j < nOps; j++) {
var pt=Clazz.new_($I$(1,1));
pt.setT$javajs_util_T3(a);
if (j > 0) {
this.unitCell.toFractional$javajs_util_T3$Z(pt, false);
ops[j].rotTrans$javajs_util_T3(pt);
this.unitCell.unitize$javajs_util_T3(pt);
this.unitCell.toCartesian$javajs_util_T3$Z(pt, false);
} else {
this.unitCell.toUnitCell$javajs_util_T3$javajs_util_T3(pt, null);
}var key="_" + ((pt.x * 100)|0) + "_" + ((pt.y * 100)|0) + "_" + ((pt.z * 100)|0) + "_" ;
if (cat.indexOf$S(key) >= 0) continue;
cat += key;
this.unitList.addLast$O(Clazz.array($I$(1), -1, [a, pt]));
}
}
this.nAtoms=this.unitList.size$();
this.done=(this.nAtoms == 0);
if ($I$(4).debugging) $I$(4).info$S("UnitCellIterator " + this.nAtoms + " unique points found" );
});

Clazz.newMeth(C$, 'hasNext$', function () {
while ((this.ipt < this.nAtoms || p$1.nextCell.apply(this, []) )){
this.p.add2$javajs_util_T3$javajs_util_T3(this.unitList.get$I(this.listPt=this.ipt++)[1], this.translation);
if ((this.distance2=this.p.distanceSquared$javajs_util_T3(this.center)) < this.maxDistance2  && this.distance2 > 0.1  ) {
this.nFound++;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'nextCell', function () {
if (this.done) return false;
if (++this.t.x >= this.maxXYZ.x) {
this.t.x=this.minXYZ.x;
if (++this.t.y >= this.maxXYZ.y) {
this.t.y=this.minXYZ.y;
if (++this.t.z >= this.maxXYZ.z) {
this.done=true;
this.ipt=this.nAtoms;
return false;
}}}this.translation.set$F$F$F(this.t.x, this.t.y, this.t.z);
this.unitCell.toCartesian$javajs_util_T3$Z(this.translation, false);
this.ipt=0;
return true;
}, p$1);

Clazz.newMeth(C$, 'next$', function () {
return (this.done || this.ipt < 0  ? -1 : p$1.getAtom.apply(this, []).i);
});

Clazz.newMeth(C$, 'getAtom', function () {
return (this.unitList.get$I(this.listPt)[0]);
}, p$1);

Clazz.newMeth(C$, 'foundDistance2$', function () {
return (this.nFound > 0 ? this.distance2 : 3.4028235E38);
});

Clazz.newMeth(C$, 'getPosition$', function () {
var a=p$1.getAtom.apply(this, []);
if ($I$(4).debugging) $I$(4).info$S("draw ID p_" + this.nFound + " " + this.p + " //" + a + " " + this.t );
if (this.p.distanceSquared$javajs_util_T3(a) < 1.0E-4 ) return a;
var p=Clazz.new_($I$(6,1));
p.setT$javajs_util_T3(this.p);
p.i=a.i;
p.sD=($s$[0] = a.getElementNumber$(), $s$[0]);
return p;
});

Clazz.newMeth(C$, 'release$', function () {
this.atoms=null;
this.center=null;
this.translation=null;
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
