(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,['org.jmol.atomdata.RadiusData','.EnumType']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomIteratorWithinModel", null, null, 'org.jmol.api.AtomIndexIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modelIndex=2147483647;
this.atomIndex=-1;
},1);

C$.$fields$=[['Z',['threadSafe','hemisphereOnly','isZeroBased','isGreaterOnly','checkGreater','isVdw'],'F',['distanceSquared','vdw1'],'I',['modelIndex','atomIndex','zeroBase','iNext'],'O',['cubeIterator','org.jmol.bspt.CubeIterator','bspf','org.jmol.bspt.Bspf','bsSelected','javajs.util.BS','radiusData','org.jmol.atomdata.RadiusData','atoms','org.jmol.modelset.Atom[]','vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_bspt_Bspf$javajs_util_BS$Z$Z$Z$Z', function (bspf, bsSelected, isGreaterOnly, isZeroBased, hemisphereOnly, threadSafe) {
this.bspf=bspf;
this.bsSelected=bsSelected;
this.isGreaterOnly=isGreaterOnly;
this.isZeroBased=isZeroBased;
this.hemisphereOnly=hemisphereOnly;
this.threadSafe=threadSafe;
this.cubeIterator=null;
});

Clazz.newMeth(C$, 'setModel$org_jmol_modelset_ModelSet$I$I$I$javajs_util_T3$F$org_jmol_atomdata_RadiusData', function (modelSet, modelIndex, firstModelAtom, atomIndex, center, distance, rd) {
if (this.threadSafe) modelIndex=-1 - modelIndex;
if (modelIndex != this.modelIndex || this.cubeIterator == null  ) {
this.cubeIterator=this.bspf.getCubeIterator$I(modelIndex);
this.modelIndex=modelIndex;
}this.zeroBase=(this.isZeroBased ? firstModelAtom : 0);
if (distance == -2147483648 ) return;
this.atomIndex=(distance < 0  ? -1 : atomIndex);
this.isVdw=(rd != null );
if (this.isVdw) {
this.radiusData=rd;
this.atoms=modelSet.at;
this.vwr=modelSet.vwr;
distance=(rd.factorType === $I$(1).OFFSET  ? 5.0 + rd.value : 5.0 * rd.value);
this.vdw1=this.atoms[atomIndex].getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, rd.vdwType);
}this.checkGreater=(this.isGreaterOnly && atomIndex != 2147483647 );
this.setCenter$javajs_util_T3$F(center, distance);
});

Clazz.newMeth(C$, 'setCenter$javajs_util_T3$F', function (center, distance) {
this.setCenter2$javajs_util_T3$F(center, distance);
});

Clazz.newMeth(C$, 'setCenter2$javajs_util_T3$F', function (center, distance) {
if (this.cubeIterator == null ) return;
this.cubeIterator.initialize$javajs_util_T3$F$Z(center, distance, this.hemisphereOnly);
this.distanceSquared=distance * distance;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.hasNext2$();
});

Clazz.newMeth(C$, 'hasNext2$', function () {
if (this.atomIndex >= 0) while (this.cubeIterator.hasMoreElements$()){
var a=this.cubeIterator.nextElement$();
if ((this.iNext=a.i) != this.atomIndex && (!this.checkGreater || this.iNext > this.atomIndex )  && (this.bsSelected == null  || this.bsSelected.get$I(this.iNext) ) ) {
return true;
}}
 else if (this.cubeIterator.hasMoreElements$()) {
var a=this.cubeIterator.nextElement$();
this.iNext=a.i;
return true;
}this.iNext=-1;
return false;
});

Clazz.newMeth(C$, 'next$', function () {
return this.iNext - this.zeroBase;
});

Clazz.newMeth(C$, 'foundDistance2$', function () {
return (this.cubeIterator == null  ? -1 : this.cubeIterator.foundDistance2$());
});

Clazz.newMeth(C$, 'addAtoms$javajs_util_BS', function (bsResult) {
var iAtom;
while (this.hasNext$())if ((iAtom=this.next$()) >= 0) {
var d;
if (this.isVdw) {
d=this.atoms[iAtom].getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, this.radiusData.vdwType) + this.vdw1;
switch (this.radiusData.factorType) {
case $I$(1).OFFSET:
d += this.radiusData.value * 2;
break;
case $I$(1).FACTOR:
d *= this.radiusData.value;
break;
}
d *= d;
} else {
d=this.distanceSquared;
}if (this.foundDistance2$() <= d ) bsResult.set$I(iAtom);
}
});

Clazz.newMeth(C$, 'release$', function () {
if (this.cubeIterator != null ) {
this.cubeIterator.release$();
this.cubeIterator=null;
}});

Clazz.newMeth(C$, 'getPosition$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
