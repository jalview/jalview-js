(function(){var P$=Clazz.newPackage("org.jmol.shape"),p$1={},I$=[[0,'javajs.util.Lst','org.jmol.util.C','org.jmol.util.BSUtil','javajs.util.BS','org.jmol.modelset.Measurement','org.jmol.util.Point3fi','javajs.util.AU','org.jmol.modelset.MeasurementData','javajs.util.SB','javajs.util.PT','java.util.Hashtable','Boolean','org.jmol.util.Escape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Measures", null, 'org.jmol.shape.AtomShape', 'org.jmol.api.JmolMeasurementClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mustBeConnected=false;
this.mustNotBeConnected=false;
this.measurementCount=0;
this.measurements=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['mustBeConnected','mustNotBeConnected','measureAllModels'],'I',['measurementCount','tokAction'],'H',['colix'],'S',['strFormat'],'O',['bsSelected','javajs.util.BS','radiusData','org.jmol.atomdata.RadiusData','intramolecular','Boolean','measurements','javajs.util.Lst','mPending','org.jmol.modelset.MeasurementPending','tickInfo','org.jmol.modelset.TickInfo','+defaultTickInfo','htMin','java.util.Map']]
,['O',['font3d','org.jmol.util.Font']]]

Clazz.newMeth(C$, 'initModelSet$', function () {
for (var i=this.measurements.size$(); --i >= 0; ) {
var m=this.measurements.get$I(i);
if (m != null ) m.ms=this.ms;
}
this.atoms=this.ms.at;
});

Clazz.newMeth(C$, 'initShape$', function () {
if (C$.font3d == null ) C$.font3d=this.vwr.gdata.getFont3D$F(18);
});

Clazz.newMeth(C$, 'setSize$I$javajs_util_BS', function (size, bsSelected) {
this.mad=($s$[0] = size, $s$[0]);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsIgnored) {
var mt;
if ("clearModelIndex" == propertyName) {
for (var i=0; i < this.measurementCount; i++) this.measurements.get$I(i).setModelIndex$H(0);

return;
}if ("color" == propertyName) {
p$1.setColor$H.apply(this, [$I$(2).getColixO$O(value)]);
return;
}if ("font" == propertyName) {
C$.font3d=value;
return;
}if ("hideAll" == propertyName) {
p$1.showHide$Z.apply(this, [(value).booleanValue$()]);
return;
}if ("pending" == propertyName) {
this.mPending=value;
if (this.mPending == null ) return;
if (this.mPending.count > 1) this.vwr.setStatusMeasuring$S$I$S$F("measurePending", this.mPending.count, C$.getMessage$org_jmol_modelset_Measurement$Z(this.mPending, false), this.mPending.value);
return;
}var isRefresh;
if ((isRefresh=("refresh" == propertyName)) || "refreshTrajectories" == propertyName ) {
for (var i=this.measurements.size$(); --i >= 0; ) if ((mt=this.measurements.get$I(i)) != null  && (isRefresh || mt.isTrajectory ) ) mt.refresh$org_jmol_util_Point3fiA(null);

return;
}if ("select" == propertyName) {
var bs=value;
if ($I$(3).cardinalityOf$javajs_util_BS(bs) == 0) {
this.bsSelected=null;
} else {
this.bsSelected=Clazz.new_($I$(4,1));
this.bsSelected.or$javajs_util_BS(bs);
}return;
}if ("setFormats" == propertyName) {
p$1.setFormats$S.apply(this, [value]);
return;
}this.measureAllModels=this.vwr.getBoolean$I(603979877);
if ("delete" == propertyName) {
p$1.deleteO$O.apply(this, [value]);
p$1.setIndices.apply(this, []);
return;
}this.bsSelected=null;
if ("maps" == propertyName) {
var maps=value;
for (var i=0; i < maps.length; i++) {
var len=maps[i].length;
if (len < 2 || len > 4 ) continue;
var v=Clazz.array(Integer.TYPE, [len + 1]);
v[0]=len;
System.arraycopy$O$I$O$I$I(maps[i], 0, v, 1, len);
p$1.toggleOn$IA.apply(this, [v]);
}
} else if ("measure" == propertyName) {
var md=value;
this.tickInfo=md.tickInfo;
if (md.tickInfo != null  && md.tickInfo.id.equals$O("default") ) {
this.defaultTickInfo=md.tickInfo;
return;
}if (md.isAll && md.points.size$() == 2  && Clazz.instanceOf(md.points.get$I(0), "javajs.util.BS") ) {
var type=(function(a,f){return f.apply(null,a)})([this.vwr.getDistanceUnits$S(md.strFormat)],$I$(5).nmrType$S);
switch (type) {
case 2:
md.htMin=this.vwr.getNMRCalculation$().getMinDistances$org_jmol_modelset_MeasurementData(md);
}
}this.tickInfo=md.tickInfo;
this.radiusData=md.radiusData;
this.htMin=md.htMin;
this.mustBeConnected=md.mustBeConnected;
this.mustNotBeConnected=md.mustNotBeConnected;
this.intramolecular=md.intramolecular;
this.strFormat=md.strFormat;
if (md.isAll) {
if (this.tickInfo != null ) p$1.define$org_jmol_modelset_MeasurementData$I.apply(this, [md, 12291]);
p$1.define$org_jmol_modelset_MeasurementData$I.apply(this, [md, md.tokAction]);
p$1.setIndices.apply(this, []);
return;
}var m=p$1.setSingleItem$javajs_util_Lst.apply(this, [md.points]);
if (md.thisID != null ) {
m.thisID=md.thisID;
m.mad=md.mad;
if (md.colix != 0) m.colix=md.colix;
m.strFormat=md.strFormat;
m.text=md.text;
}switch (md.tokAction) {
case 266284:
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [md, md.thisID, 266284]);
break;
case 12291:
p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [-2147483648, m, true, false, false]);
p$1.setIndices.apply(this, []);
break;
case 1073742335:
p$1.showHideM$org_jmol_modelset_Measurement$Z.apply(this, [m, false]);
break;
case 1073742334:
p$1.showHideM$org_jmol_modelset_Measurement$Z.apply(this, [m, true]);
break;
case 1665140738:
if (md.thisID != null ) p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [md, md.thisID, 1665140738]);
break;
case 12290:
if (md.thisID == null ) {
p$1.deleteM$org_jmol_modelset_Measurement.apply(this, [m]);
} else {
p$1.deleteO$O.apply(this, [md.thisID]);
}p$1.toggle$org_jmol_modelset_Measurement.apply(this, [m]);
break;
case 268435538:
p$1.toggle$org_jmol_modelset_Measurement.apply(this, [m]);
}
return;
}if ("clear" == propertyName) {
this.clear$();
return;
}if ("deleteModelAtoms" == propertyName) {
this.atoms=(value)[1];
var modelIndex=((value)[2])[0];
var firstAtomDeleted=((value)[2])[1];
var nAtomsDeleted=((value)[2])[2];
var atomMax=firstAtomDeleted + nAtomsDeleted;
for (var i=this.measurementCount; --i >= 0; ) {
mt=this.measurements.get$I(i);
var indices=mt.countPlusIndices;
for (var j=1; j <= indices[0]; j++) {
var iAtom=indices[j];
if (iAtom >= firstAtomDeleted) {
if (iAtom < atomMax) {
p$1.deleteI$I.apply(this, [i]);
break;
}indices[j]-=nAtomsDeleted;
} else if (iAtom < 0) {
var pt=mt.getAtom$I(j);
if (pt.mi > modelIndex) {
($s$[0]=pt.mi,pt.mi=(--$s$[0],$s$[0]));
} else if (pt.mi == modelIndex) {
p$1.deleteI$I.apply(this, [i]);
break;
}}}
}
return;
}if ("reformatDistances" == propertyName) {
p$1.reformatDistances.apply(this, []);
return;
}if ("hide" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.String")) {
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [null, value, 12294]);
} else {
p$1.showHideM$org_jmol_modelset_Measurement$Z.apply(this, [Clazz.new_($I$(5,1)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(this.ms, value, null, null), true]);
}return;
}if ("refresh" == propertyName) {
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [value, null, 266284]);
return;
}if ("show" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.String")) {
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [null, value, 134222350]);
} else {
p$1.showHideM$org_jmol_modelset_Measurement$Z.apply(this, [Clazz.new_($I$(5,1)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(this.ms, value, null, null), false]);
}return;
}if ("toggle" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.String")) {
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [null, value, 268435538]);
} else {
p$1.toggle$org_jmol_modelset_Measurement.apply(this, [Clazz.new_($I$(5,1)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(this.ms, value, null, null)]);
}return;
}if ("toggleOn" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.String")) {
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [null, value, 1073742335]);
} else {
p$1.toggleOn$IA.apply(this, [value]);
}return;
}});

Clazz.newMeth(C$, 'setSingleItem$javajs_util_Lst', function (vector) {
var points=Clazz.array($I$(6), [4]);
var indices=Clazz.array(Integer.TYPE, [5]);
indices[0]=vector.size$();
for (var i=vector.size$(); --i >= 0; ) {
var value=vector.get$I(i);
if (Clazz.instanceOf(value, "javajs.util.BS")) {
var atomIndex=(value).nextSetBit$I(0);
if (atomIndex < 0) return null;
indices[i + 1]=atomIndex;
} else {
points[i]=value;
indices[i + 1]=-2 - i;
}}
return Clazz.new_($I$(5,1)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(this.ms, indices, points, this.tickInfo == null  ? this.defaultTickInfo : this.tickInfo);
}, p$1);

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if ("pending".equals$O(property)) return this.mPending;
if ("count".equals$O(property)) return Integer.valueOf$I(this.measurementCount);
if ("countPlusIndices".equals$O(property)) return (index < this.measurementCount ? this.measurements.get$I(index).countPlusIndices : null);
if ("stringValue".equals$O(property)) return (index < this.measurementCount ? this.measurements.get$I(index).getString$() : null);
if ("pointInfo".equals$O(property)) return this.measurements.get$I((index/10|0)).getLabel$I$Z$Z(index % 10, false, false);
if ("info".equals$O(property)) return p$1.getAllInfo.apply(this, []);
if ("infostring".equals$O(property)) return p$1.getAllInfoAsString.apply(this, []);
return null;
});

Clazz.newMeth(C$, 'clear$', function () {
if (this.measurementCount == 0) return;
this.measurementCount=0;
this.measurements.clear$();
this.mPending=null;
this.vwr.setStatusMeasuring$S$I$S$F("measureDeleted", -1, "all", 0);
});

Clazz.newMeth(C$, 'setColor$H', function (colix) {
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(4,1));
if (this.bsSelected == null ) this.colix=colix;
var mt;
for (var i=this.measurements.size$(); --i >= 0; ) if ((mt=this.measurements.get$I(i)) != null  && (this.bsSelected != null  && this.bsSelected.get$I(i)  || this.bsSelected == null  && (colix == 0 || mt.colix == 0 )  ) ) {
mt.colix=colix;
this.bsColixSet.set$I(i);
}
}, p$1);

Clazz.newMeth(C$, 'setFormats$S', function (format) {
if (format != null  && format.length$() == 0 ) format=null;
for (var i=this.measurements.size$(); --i >= 0; ) if (this.bsSelected == null  || this.bsSelected.get$I(i) ) this.measurements.get$I(i).formatMeasurementAs$S$S$Z(format, null, false);

}, p$1);

Clazz.newMeth(C$, 'showHide$Z', function (isHide) {
for (var i=this.measurements.size$(); --i >= 0; ) if (this.bsSelected == null  || this.bsSelected.get$I(i) ) this.measurements.get$I(i).isHidden=isHide;

}, p$1);

Clazz.newMeth(C$, 'showHideM$org_jmol_modelset_Measurement$Z', function (m, isHide) {
var i=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
if (i >= 0) this.measurements.get$I(i).isHidden=isHide;
}, p$1);

Clazz.newMeth(C$, 'toggle$org_jmol_modelset_Measurement', function (m) {
this.radiusData=null;
this.htMin=null;
var i=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
var mt;
if (i >= 0 && !(mt=this.measurements.get$I(i)).isHidden ) p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [i, mt, true, false, false]);
 else p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [-1, m, false, true, false]);
p$1.setIndices.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'toggleOn$IA', function (indices) {
this.radiusData=null;
this.htMin=null;
this.bsSelected=Clazz.new_($I$(4,1));
var m=Clazz.new_($I$(5,1)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(this.ms, indices, null, this.defaultTickInfo);
p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [-2147483648, m, false, true, true]);
var i=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
if (i >= 0) this.bsSelected.set$I(i);
p$1.setIndices.apply(this, []);
p$1.reformatDistances.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'deleteM$org_jmol_modelset_Measurement', function (m) {
this.radiusData=null;
this.htMin=null;
var i=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
if (i >= 0) p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [i, this.measurements.get$I(i), true, false, false]);
p$1.setIndices.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'deleteO$O', function (value) {
if (Clazz.instanceOf(value, "java.lang.Integer")) {
p$1.deleteI$I.apply(this, [(value).intValue$()]);
} else if (Clazz.instanceOf(value, "java.lang.String")) {
p$1.doAction$org_jmol_modelset_MeasurementData$S$I.apply(this, [null, value, 12291]);
} else if ($I$(7).isAI$O(value)) {
p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [-2147483648, Clazz.new_($I$(5,1)).setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo(this.ms, value, null, null), true, false, false]);
}}, p$1);

Clazz.newMeth(C$, 'defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z', function (iPt, m, isDelete, isShow, doSelect) {
if (!this.measureAllModels) {
if (isDelete) {
if (iPt == -2147483648) iPt=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
if (iPt >= 0) p$1.deleteI$I.apply(this, [iPt]);
return;
}p$1.defineMeasurement$I$org_jmol_modelset_Measurement$Z.apply(this, [iPt, m, doSelect]);
return;
}if (isShow) {
p$1.defineAll$I$org_jmol_modelset_Measurement$Z$Z$Z.apply(this, [iPt, m, true, false, false]);
if (isDelete) return;
}var points=Clazz.new_($I$(1,1));
var nPoints=m.count;
for (var i=1; i <= nPoints; i++) {
var atomIndex=m.getAtomIndex$I(i);
points.addLast$O(atomIndex >= 0 ? this.vwr.ms.getAtoms$I$O(1094715393, Integer.valueOf$I(this.atoms[atomIndex].getAtomNumber$())) : m.getAtom$I(i));
}
p$1.define$org_jmol_modelset_MeasurementData$I.apply(this, [(Clazz.new_($I$(8,1)).init$S$org_jmol_viewer_Viewer$javajs_util_Lst(null, this.vwr, points)).set$I$java_util_Map$org_jmol_atomdata_RadiusData$S$S$org_jmol_modelset_TickInfo$Z$Z$Boolean$Z$I$H$org_jmol_modelset_Text(this.tokAction, this.htMin, this.radiusData, this.strFormat, null, this.tickInfo, this.mustBeConnected, this.mustNotBeConnected, this.intramolecular, true, 0, 0, null), (isDelete ? 12291 : 12290)]);
}, p$1);

Clazz.newMeth(C$, 'find$org_jmol_modelset_Measurement', function (m) {
return (m.thisID == null  ? $I$(5).find$javajs_util_Lst$org_jmol_modelset_Measurement(this.measurements, m) : -1);
}, p$1);

Clazz.newMeth(C$, 'setIndices', function () {
for (var i=0; i < this.measurementCount; i++) this.measurements.get$I(i).index=i;

}, p$1);

Clazz.newMeth(C$, 'define$org_jmol_modelset_MeasurementData$I', function (md, tokAction) {
this.tokAction=tokAction;
md.define$org_jmol_api_JmolMeasurementClient$org_jmol_modelset_ModelSet(this, this.ms);
}, p$1);

Clazz.newMeth(C$, 'processNextMeasure$org_jmol_modelset_Measurement', function (m) {
var iThis=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
if (iThis >= 0) {
if (this.tokAction == 12291) {
p$1.deleteI$I.apply(this, [iThis]);
} else if (this.strFormat != null ) {
this.measurements.get$I(iThis).formatMeasurementAs$S$S$Z(this.strFormat, null, true);
} else {
this.measurements.get$I(iThis).isHidden=(this.tokAction == 1073742334);
}} else if (this.tokAction == 12290 || this.tokAction == 268435538 ) {
m.tickInfo=(this.tickInfo == null  ? this.defaultTickInfo : this.tickInfo);
p$1.defineMeasurement$I$org_jmol_modelset_Measurement$Z.apply(this, [-1, m, true]);
}});

Clazz.newMeth(C$, 'defineMeasurement$I$org_jmol_modelset_Measurement$Z', function (i, m, doSelect) {
var value=m.getMeasurement$org_jmol_util_Point3fiA(null);
if (this.htMin != null  && !m.isMin$java_util_Map(this.htMin)  || this.radiusData != null  && !m.isInRange$org_jmol_atomdata_RadiusData$F(this.radiusData, value)  ) return;
if (i == -2147483648) i=p$1.find$org_jmol_modelset_Measurement.apply(this, [m]);
if (i >= 0) {
this.measurements.get$I(i).isHidden=false;
if (doSelect) this.bsSelected.set$I(i);
return;
}var measureNew=Clazz.new_($I$(5,1)).setM$org_jmol_modelset_ModelSet$org_jmol_modelset_Measurement$F$H$S$I(this.ms, m, value, (m.colix == 0 ? this.colix : m.colix), this.strFormat, this.measurementCount);
if (!measureNew.isValid) return;
this.measurements.addLast$O(measureNew);
this.vwr.setStatusMeasuring$S$I$S$F("measureCompleted", this.measurementCount++, C$.getMessage$org_jmol_modelset_Measurement$Z(measureNew, false), measureNew.value);
}, p$1);

Clazz.newMeth(C$, 'getMessage$org_jmol_modelset_Measurement$Z', function (m, asBitSet) {
var sb=Clazz.new_($I$(9,1));
sb.append$S("[");
for (var i=1; i <= m.count; i++) {
if (i > 1) sb.append$S(", ");
sb.append$S(m.getLabel$I$Z$Z(i, asBitSet, false));
}
sb.append$S("]");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'deleteI$I', function (i) {
if (i >= this.measurements.size$() || i < 0 ) return;
var msg=C$.getMessage$org_jmol_modelset_Measurement$Z(this.measurements.get$I(i), true);
this.measurements.removeItemAt$I(i);
this.measurementCount--;
this.vwr.setStatusMeasuring$S$I$S$F("measureDeleted", i, msg, 0);
}, p$1);

Clazz.newMeth(C$, 'doAction$org_jmol_modelset_MeasurementData$S$I', function (md, id, tok) {
id=id.toUpperCase$().replace$C$C("?", "*");
var isWild=$I$(10).isWild$S(id);
for (var i=this.measurements.size$(); --i >= 0; ) {
var m=this.measurements.get$I(i);
if (m.thisID != null  && (m.thisID.equalsIgnoreCase$S(id) || isWild && (function(a,f){return f.apply(null,a)})([m.thisID.toUpperCase$(), id, true, true],$I$(10).isMatch$S$S$Z$Z)  ) ) switch (tok) {
case 266284:
if (md.colix != 0) m.colix=md.colix;
if (md.mad != 0) m.mad=md.mad;
if (md.strFormat != null ) {
m.strFormat=m.strFormat.substring$I$I(0, 2) + md.strFormat.substring$I(2);
}if (md.text != null ) {
if (m.text == null ) {
m.text=md.text;
} else {
if (md.text.font != null ) m.text.font=md.text.font;
m.text.text=null;
if (md.text.align != 0) m.text.align=md.text.align;
if (md.colix != 0) m.labelColix=m.text.colix=md.text.colix;
}}m.formatMeasurement$S(null);
break;
case 1665140738:
m.mad=md.mad;
break;
case 12291:
var msg=C$.getMessage$org_jmol_modelset_Measurement$Z(this.measurements.get$I(i), true);
this.measurements.removeItemAt$I(i);
this.measurementCount--;
this.vwr.setStatusMeasuring$S$I$S$F("measureDeleted", i, msg, 0);
break;
case 134222350:
m.isHidden=false;
break;
case 12294:
m.isHidden=true;
break;
case 268435538:
m.isHidden=!m.isHidden;
break;
case 1073742335:
m.isHidden=false;
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'reformatDistances', function () {
for (var i=this.measurementCount; --i >= 0; ) this.measurements.get$I(i).reformatDistanceIfSelected$();

}, p$1);

Clazz.newMeth(C$, 'getAllInfo', function () {
var info=Clazz.new_($I$(1,1));
for (var i=0; i < this.measurementCount; i++) {
info.addLast$O(p$1.getInfo$I.apply(this, [i]));
}
return info;
}, p$1);

Clazz.newMeth(C$, 'getAllInfoAsString', function () {
var info="Measurement Information";
for (var i=0; i < this.measurementCount; i++) {
info += "\n" + this.getInfoAsString$I(i);
}
return info;
}, p$1);

Clazz.newMeth(C$, 'getInfo$I', function (index) {
var m=this.measurements.get$I(index);
var count=m.count;
var info=Clazz.new_($I$(11,1));
info.put$O$O("index", Integer.valueOf$I(index));
info.put$O$O("type", (count == 2 ? "distance" : count == 3 ? "angle" : "dihedral"));
info.put$O$O("strMeasurement", m.getString$());
info.put$O$O("count", Integer.valueOf$I(count));
info.put$O$O("id", "" + m.thisID);
info.put$O$O("value", Float.valueOf$F(m.value));
info.put$O$O("hidden", $I$(12).valueOf$Z(m.isHidden));
info.put$O$O("visible", $I$(12).valueOf$Z(m.isVisible));
var tickInfo=m.tickInfo;
if (tickInfo != null ) {
info.put$O$O("ticks", tickInfo.ticks);
if (tickInfo.scale != null ) info.put$O$O("tickScale", tickInfo.scale);
if (tickInfo.tickLabelFormats != null ) info.put$O$O("tickLabelFormats", tickInfo.tickLabelFormats);
if (!Float.isNaN$F(tickInfo.first)) info.put$O$O("tickStart", Float.valueOf$F(tickInfo.first));
}var atomsInfo=Clazz.new_($I$(1,1));
for (var i=1; i <= count; i++) {
var atomInfo=Clazz.new_($I$(11,1));
var atomIndex=m.getAtomIndex$I(i);
atomInfo.put$O$O("_ipt", Integer.valueOf$I(atomIndex));
atomInfo.put$O$O("coord", (function(a,f){return f.apply(null,a)})([m.getAtom$I(i)],$I$(13).eP$javajs_util_T3));
atomInfo.put$O$O("atomno", Integer.valueOf$I(atomIndex < 0 ? -1 : this.atoms[atomIndex].getAtomNumber$()));
atomInfo.put$O$O("info", (atomIndex < 0 ? "<point>" : this.atoms[atomIndex].getInfo$()));
atomsInfo.addLast$O(atomInfo);
}
info.put$O$O("atoms", atomsInfo);
return info;
}, p$1);

Clazz.newMeth(C$, 'getInfoAsString$I', function (index) {
return this.measurements.get$I(index).getInfoAsString$S(null);
});

Clazz.newMeth(C$, 'setVisibilityInfo$', function () {
var bsModels=this.vwr.getVisibleFramesBitSet$();
 out : for (var i=this.measurementCount; --i >= 0; ) {
var m=this.measurements.get$I(i);
m.isVisible=false;
if (this.mad == 0 || m.isHidden ) continue;
for (var iAtom=m.count; iAtom > 0; iAtom--) {
var atomIndex=m.getAtomIndex$I(iAtom);
if (atomIndex >= 0) {
if (!this.ms.at[atomIndex].isClickable$()) continue out;
} else {
var modelIndex=m.getAtom$I(iAtom).mi;
if (modelIndex >= 0 && !bsModels.get$I(modelIndex) ) continue out;
}}
m.isVisible=true;
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
