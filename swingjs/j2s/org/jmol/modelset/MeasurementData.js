(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'org.jmol.util.BSUtil','javajs.util.Lst','org.jmol.util.Point3fi','org.jmol.modelset.Measurement']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MeasurementData", null, null, 'org.jmol.api.JmolMeasurementClient');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.client=null;
this.measurementStrings=null;
this.measurements=null;
this.points=null;
this.mustBeConnected=false;
this.mustNotBeConnected=false;
this.tickInfo=null;
this.tokAction=0;
this.radiusData=null;
this.strFormat=null;
this.note=null;
this.isAll=false;
this.colix=0;
this.intramolecular=null;
this.mad=0;
this.thisID=null;
this.text=null;
this.atoms=null;
this.units=null;
this.minArray=null;
this.ms=null;
this.vwr=null;
this.iFirstAtom=0;
this.justOneModel=false;
this.htMin=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tokAction=12290;
this.justOneModel=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'init$S$org_jmol_viewer_Viewer$javajs_util_Lst', function (id, vwr, points) {
this.vwr=vwr;
this.points=points;
this.thisID=id;
return this;
});

Clazz.newMeth(C$, 'setModelSet$org_jmol_modelset_ModelSet', function (m) {
this.ms=m;
return this;
});

Clazz.newMeth(C$, 'set$I$java_util_Map$org_jmol_atomdata_RadiusData$S$S$org_jmol_modelset_TickInfo$Z$Z$Boolean$Z$I$H$org_jmol_modelset_Text', function (tokAction, htMin, radiusData, strFormat, units, tickInfo, mustBeConnected, mustNotBeConnected, intramolecular, isAll, mad, colix, text) {
this.ms=this.vwr.ms;
this.tokAction=tokAction;
if (this.points.size$() >= 2 && Clazz.instanceOf(this.points.get$I(0), "javajs.util.BS")  && Clazz.instanceOf(this.points.get$I(1), "javajs.util.BS") ) {
this.justOneModel=$I$(1).haveCommon$javajs_util_BS$javajs_util_BS(this.vwr.ms.getModelBS$javajs_util_BS$Z(this.points.get$I(0), false), this.vwr.ms.getModelBS$javajs_util_BS$Z(this.points.get$I(1), false));
}this.htMin=htMin;
this.radiusData=radiusData;
this.strFormat=strFormat;
this.units=units;
this.tickInfo=tickInfo;
this.mustBeConnected=mustBeConnected;
this.mustNotBeConnected=mustNotBeConnected;
this.intramolecular=intramolecular;
this.isAll=isAll;
this.mad=mad;
this.colix=colix;
this.text=text;
return this;
});

Clazz.newMeth(C$, ['processNextMeasure$org_jmol_modelset_Measurement','processNextMeasure$'], function (m) {
var value=m.getMeasurement$org_jmol_util_Point3fiA(null);
if (this.htMin != null  && !m.isMin$java_util_Map(this.htMin)  || this.radiusData != null  && !m.isInRange$org_jmol_atomdata_RadiusData$F(this.radiusData, value)  ) return;
if (this.measurementStrings == null  && this.measurements == null  ) {
var f=this.minArray[this.iFirstAtom];
m.value=value;
value=m.fixValue$S$Z(this.units, false);
this.minArray[this.iFirstAtom]=(1 / f == -Infinity  ? value : Math.min(f, value));
return;
}if (this.measurementStrings != null ) this.measurementStrings.addLast$TV(m.getStringUsing$org_jmol_viewer_Viewer$S$S(this.vwr, this.strFormat, this.units));
 else this.measurements.addLast$TV(Float.valueOf$F(m.getMeasurement$org_jmol_util_Point3fiA(null)));
});

Clazz.newMeth(C$, 'getMeasurements$Z$Z', function (asArray, asMinArray) {
if (asMinArray) {
this.minArray=Clazz.array(Float.TYPE, [(this.points.get$I(0)).cardinality$()]);
for (var i=0; i < this.minArray.length; i++) this.minArray[i]=-0.0;

this.define$org_jmol_api_JmolMeasurementClient$org_jmol_modelset_ModelSet(null, this.ms);
return this.minArray;
}if (asArray) {
this.measurements=Clazz.new_($I$(2));
this.define$org_jmol_api_JmolMeasurementClient$org_jmol_modelset_ModelSet(null, this.ms);
return this.measurements;
}this.measurementStrings=Clazz.new_($I$(2));
this.define$org_jmol_api_JmolMeasurementClient$org_jmol_modelset_ModelSet(null, this.ms);
return this.measurementStrings;
});

Clazz.newMeth(C$, 'define$org_jmol_api_JmolMeasurementClient$org_jmol_modelset_ModelSet', function (client, modelSet) {
this.client=(client == null  ? this : client);
this.atoms=modelSet.at;
var nPoints=this.points.size$();
if (nPoints < 2) return;
var modelIndex=-1;
var pts=Clazz.array($I$(3), [4]);
var indices=Clazz.array(Integer.TYPE, [5]);
var m=Clazz.new_($I$(4)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(modelSet, indices, pts, null);
m.setCount$I(nPoints);
var ptLastAtom=-1;
for (var i=0; i < nPoints; i++) {
var obj=this.points.get$I(i);
if (Clazz.instanceOf(obj, "javajs.util.BS")) {
var bs=obj;
var nAtoms=bs.cardinality$();
if (nAtoms == 0) return;
if (nAtoms > 1) modelIndex=0;
ptLastAtom=i;
if (i == 0) this.iFirstAtom=0;
indices[i + 1]=bs.nextSetBit$I(0);
} else {
pts[i]=obj;
indices[i + 1]=-2 - i;
}}
p$1.nextMeasure$I$I$org_jmol_modelset_Measurement$I.apply(this, [0, ptLastAtom, m, modelIndex]);
});

Clazz.newMeth(C$, 'nextMeasure$I$I$org_jmol_modelset_Measurement$I', function (thispt, ptLastAtom, m, thisModel) {
if (thispt > ptLastAtom) {
if (m.isValid$() && (!this.mustBeConnected || m.isConnected$org_jmol_modelset_AtomA$I(this.atoms, thispt) ) && (!this.mustNotBeConnected || !m.isConnected$org_jmol_modelset_AtomA$I(this.atoms, thispt) ) && (this.intramolecular == null  || m.isIntramolecular$org_jmol_modelset_AtomA$I(this.atoms, thispt) == this.intramolecular.booleanValue$()  )  ) this.client.processNextMeasure$(m);
return;
}var bs=this.points.get$I(thispt);
var indices=m.countPlusIndices;
var thisAtomIndex=(thispt == 0 ? 2147483647 : indices[thispt]);
if (thisAtomIndex < 0) {
p$1.nextMeasure$I$I$org_jmol_modelset_Measurement$I.apply(this, [thispt + 1, ptLastAtom, m, thisModel]);
return;
}var haveNext=false;
for (var i=bs.nextSetBit$I(0), pt=0; i >= 0; i=bs.nextSetBit$I(i + 1), pt++) {
if (i == thisAtomIndex) continue;
var modelIndex=this.atoms[i].mi;
if (thisModel >= 0 && this.justOneModel ) {
if (thispt == 0) thisModel=modelIndex;
 else if (thisModel != modelIndex) continue;
}indices[thispt + 1]=i;
if (thispt == 0) this.iFirstAtom=pt;
haveNext=true;
p$1.nextMeasure$I$I$org_jmol_modelset_Measurement$I.apply(this, [thispt + 1, ptLastAtom, m, thisModel]);
}
if (!haveNext) p$1.nextMeasure$I$I$org_jmol_modelset_Measurement$I.apply(this, [thispt + 1, ptLastAtom, m, thisModel]);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
