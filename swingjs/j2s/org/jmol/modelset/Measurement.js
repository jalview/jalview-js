(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'org.jmol.util.Point3fi','javajs.util.SB','org.jmol.modelset.Atom','org.jmol.c.VDW','org.jmol.modelset.LabelToken','javajs.util.Measure','org.jmol.util.Escape','javajs.util.PT',['org.jmol.atomdata.RadiusData','.EnumType']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Measurement");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isVisible=true;
this.isHidden=false;
this.isTrajectory=false;
this.isValid=true;
this.labelColix=($s$[0] = -1, $s$[0]);
this.traceX=-2147483648;
this.countPlusIndices=Clazz.array(Integer.TYPE, [5]);
},1);

C$.$fields$=[['Z',['isVisible','isHidden','isTrajectory','isValid','tainted'],'F',['value'],'I',['index','mad','traceX','traceY','count'],'H',['colix','labelColix'],'S',['thisID','strFormat','strMeasurement','type','newUnits'],'O',['ms','org.jmol.modelset.ModelSet','tickInfo','org.jmol.modelset.TickInfo','countPlusIndices','int[]','pts','org.jmol.util.Point3fi[]','text','org.jmol.modelset.Text','vwr','org.jmol.viewer.Viewer','renderAxis','javajs.util.A4','renderArc','javajs.util.P3']]]

Clazz.newMeth(C$, 'isTainted$', function () {
return (this.tainted && !(this.tainted=false) );
});

Clazz.newMeth(C$, 'setM$org_jmol_modelset_ModelSet$org_jmol_modelset_Measurement$F$H$S$I', function (modelSet, m, value, colix, strFormat, index) {
this.ms=modelSet;
this.index=index;
this.vwr=modelSet.vwr;
this.colix=colix;
this.strFormat=strFormat;
if (m != null ) {
this.tickInfo=m.tickInfo;
this.pts=m.pts;
this.mad=m.mad;
this.thisID=m.thisID;
this.text=m.text;
if (this.thisID != null  && this.text != null  ) this.labelColix=this.text.colix;
}if (this.pts == null ) this.pts=Clazz.array($I$(1), [4]);
var indices=(m == null  ? null : m.countPlusIndices);
this.count=(indices == null  ? 0 : indices[0]);
if (this.count > 0) {
System.arraycopy$O$I$O$I$I(indices, 0, this.countPlusIndices, 0, this.count + 1);
this.isTrajectory=modelSet.isTrajectoryMeasurement$IA(this.countPlusIndices);
}this.value=(Float.isNaN$F(value) || this.isTrajectory  ? this.getMeasurement$org_jmol_util_Point3fiA(null) : value);
this.formatMeasurement$S(null);
return this;
});

Clazz.newMeth(C$, 'setPoints$org_jmol_modelset_ModelSet$IA$org_jmol_util_Point3fiA$org_jmol_modelset_TickInfo', function (modelSet, indices, points, tickInfo) {
this.ms=modelSet;
this.countPlusIndices=indices;
this.count=indices[0];
this.pts=(points == null  ? Clazz.array($I$(1), [4]) : points);
this.vwr=modelSet.vwr;
this.tickInfo=tickInfo;
return this;
});

Clazz.newMeth(C$, 'setCount$I', function (count) {
this.setCountM$I(count);
});

Clazz.newMeth(C$, 'setCountM$I', function (count) {
this.count=this.countPlusIndices[0]=count;
});

Clazz.newMeth(C$, 'getAtomIndex$I', function (n) {
return (n > 0 && n <= this.count  ? this.countPlusIndices[n] : -1);
});

Clazz.newMeth(C$, 'getAtom$I', function (n) {
var pt=this.countPlusIndices[n];
return (pt < -1 ? this.pts[-2 - pt] : this.ms.at[pt]);
});

Clazz.newMeth(C$, 'getLastIndex$', function () {
return (this.count > 0 ? this.countPlusIndices[this.count] : -1);
});

Clazz.newMeth(C$, 'getString$', function () {
return this.strMeasurement;
});

Clazz.newMeth(C$, 'getStringUsing$org_jmol_viewer_Viewer$S$S', function (vwr, strFormat, units) {
this.vwr=vwr;
this.value=this.getMeasurement$org_jmol_util_Point3fiA(null);
this.formatMeasurementAs$S$S$Z(strFormat, units, true);
if (strFormat == null ) return this.getInfoAsString$S(units);
return this.strMeasurement;
});

Clazz.newMeth(C$, 'getStringDetail$', function () {
return (this.count == 2 ? "Distance" : this.count == 3 ? "Angle" : "Torsion") + this.getMeasurementScript$S$Z(" - ", false) + " : " + new Float(this.value).toString() ;
});

Clazz.newMeth(C$, 'refresh$org_jmol_util_Point3fiA', function (pts) {
this.value=this.getMeasurement$org_jmol_util_Point3fiA(pts);
this.isTrajectory=this.ms.isTrajectoryMeasurement$IA(this.countPlusIndices);
this.formatMeasurement$S(null);
});

Clazz.newMeth(C$, 'getMeasurementScript$S$Z', function (sep, withModelIndex) {
var sb=Clazz.new_($I$(2,1));
var asBitSet=(sep.equals$O(" "));
for (var i=1; i <= this.count; i++) sb.append$S(i > 1 ? sep : " ").append$S(this.getLabel$I$Z$Z(i, asBitSet, withModelIndex));

return sb.toString();
});

Clazz.newMeth(C$, 'formatMeasurementAs$S$S$Z', function (strFormat, units, useDefault) {
if (strFormat != null  && strFormat.length$() == 0 ) strFormat=null;
if (!useDefault && strFormat != null   && strFormat.indexOf$S(this.countPlusIndices[0] + ":") != 0 ) return;
this.strFormat=strFormat;
this.formatMeasurement$S(units);
});

Clazz.newMeth(C$, 'formatMeasurement$S', function (units) {
this.tainted=true;
switch (Float.isNaN$F(this.value) ? 0 : this.count) {
default:
this.strMeasurement=null;
return;
case 2:
this.strMeasurement=p$1.formatDistance$S.apply(this, [units]);
return;
case 3:
case 4:
this.strMeasurement=p$1.formatAngle$F.apply(this, [this.value]);
return;
}
});

Clazz.newMeth(C$, 'reformatDistanceIfSelected$', function () {
if (this.count != 2) return;
if (this.vwr.slm.isSelected$I(this.countPlusIndices[1]) && this.vwr.slm.isSelected$I(this.countPlusIndices[2]) ) this.formatMeasurement$S(null);
});

Clazz.newMeth(C$, 'formatDistance$S', function (units) {
var label=p$1.getLabelString.apply(this, []);
if (label == null ) return "";
if (units == null ) {
var pt=this.strFormat.indexOf$S("//");
units=(pt >= 0 ? this.strFormat.substring$I(pt + 2) : null);
if (units == null ) {
units=this.vwr.g.measureDistanceUnits;
this.strFormat += "//" + units;
}}units=C$.fixUnits$S(units);
var pt=label.indexOf$S("//");
if (pt >= 0) {
label=label.substring$I$I(0, pt);
if (label.length$() == 0) label="%VALUE";
}var f=this.fixValue$S$Z(units, (label.indexOf$S("%V") >= 0));
return p$1.formatString$F$S$S.apply(this, [f, this.newUnits, label]);
}, p$1);

Clazz.newMeth(C$, 'fixUnits$S', function (units) {
if (units.equals$O("nanometers")) return "nm";
 else if (units.equals$O("picometers")) return "pm";
 else if (units.equals$O("angstroms")) return "\u00c5";
 else if (units.equals$O("vanderwaals") || units.equals$O("vdw") ) return "%";
return units;
}, 1);

Clazz.newMeth(C$, 'fixValue$S$Z', function (units, andRound) {
this.newUnits=units;
if (this.count != 2) return this.value;
var dist=this.value;
if (units != null ) {
var isPercent=units.equals$O("%");
if (isPercent || units.endsWith$S("hz") ) {
var i1=this.getAtomIndex$I(1);
var i2=this.getAtomIndex$I(2);
if (i1 >= 0 && i2 >= 0 ) {
var a1=this.getAtom$I(1);
var a2=this.getAtom$I(2);
var itype=C$.nmrType$S(units);
var isDC=(!isPercent && itype == 1 );
this.type=(isPercent ? "percent" : isDC ? "dipoleCouplingConstant" : itype == 3 ? "NOE or 3JHH" : "J-CouplingConstant");
if (itype == 3) {
var result=this.vwr.getNMRCalculation$().getNOEorJHH$org_jmol_modelset_AtomA$I(Clazz.array($I$(3), -1, [a1, null, null, a2]), 11);
if (result == null ) {
dist=NaN;
this.newUnits=units="";
} else {
dist=result[1];
units=this.newUnits=(result.length == 2 ? "noe" : "hz");
}} else {
dist=(isPercent ? dist / (a1.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, $I$(4).AUTO) + a2.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, $I$(4).AUTO)) : isDC ? this.vwr.getNMRCalculation$().getDipolarConstantHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom(a1, a2) : this.vwr.getNMRCalculation$().getIsoOrAnisoHz$Z$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor(true, a1, a2, units, null));
}this.isValid=!Float.isNaN$F(dist);
if (isPercent) units="pm";
}}if (units.equals$O("hz")) return (andRound ? Math.round(dist * 10) / 10.0 : dist);
if (units.equals$O("noe")) return (andRound ? Math.round(dist * 100) / 100.0 : dist);
if (units.equals$O("nm")) return (andRound ? Math.round(dist * 100) / 1000.0 : dist / 10);
if (units.equals$O("pm")) return (andRound ? Math.round(dist * 1000) / 10.0 : dist * 100);
if (units.equals$O("au")) return (andRound ? Math.round(dist / 0.5291772 * 1000) / 1000.0 : dist / 0.5291772);
if (units.endsWith$S("khz")) return (andRound ? Math.round(dist / 10) / 100.0 : dist / 1000);
}return (andRound ? Math.round(dist * 100) / 100.0 : dist);
});

Clazz.newMeth(C$, 'nmrType$S', function (units) {
return (units.indexOf$S("hz") < 0 ? 0 : units.equals$O("noe_hz") ? 3 : units.startsWith$S("dc_") || units.equals$O("khz")  ? 1 : 2);
}, 1);

Clazz.newMeth(C$, 'formatAngle$F', function (angle) {
var label=p$1.getLabelString.apply(this, []);
if (label.indexOf$S("%V") >= 0) angle=Math.round(angle * 10) / 10.0;
return p$1.formatString$F$S$S.apply(this, [angle, "\u00b0", label]);
}, p$1);

Clazz.newMeth(C$, 'getLabelString', function () {
var s=this.countPlusIndices[0] + ":";
var label=null;
if (this.strFormat != null ) {
if (this.strFormat.length$() == 0) return null;
label=(this.strFormat.length$() > 2 && this.strFormat.indexOf$S(s) == 0  ? this.strFormat : null);
}if (label == null ) {
this.strFormat=null;
label=this.vwr.getDefaultMeasurementLabel$I(this.countPlusIndices[0]);
}if (label.indexOf$S(s) == 0) label=label.substring$I(2);
if (this.strFormat == null ) this.strFormat=s + label;
return label;
}, p$1);

Clazz.newMeth(C$, 'formatString$F$S$S', function (value, units, label) {
return $I$(5).formatLabelMeasure$org_jmol_viewer_Viewer$org_jmol_modelset_Measurement$S$F$S(this.vwr, this, label, value, units);
}, p$1);

Clazz.newMeth(C$, 'sameAsPoints$IA$org_jmol_util_Point3fiA', function (indices, points) {
if (this.count != indices[0]) return false;
var isSame=true;
for (var i=1; i <= this.count && isSame ; i++) isSame=(this.countPlusIndices[i] == indices[i]);

if (isSame) for (var i=0; i < this.count && isSame ; i++) {
if (points[i] != null ) isSame=(this.pts[i].distance$javajs_util_T3(points[i]) < 0.01 );
}
if (isSame) return true;
switch (this.count) {
default:
return true;
case 2:
return p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 1, 2]) && p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 2, 1]) ;
case 3:
return p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 1, 3]) && p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 2, 2]) && p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 3, 1])  ;
case 4:
return p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 1, 4]) && p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 2, 3]) && p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 3, 2]) && p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [indices, points, 4, 1])  ;
}
});

Clazz.newMeth(C$, 'sameAsIJ$IA$org_jmol_util_Point3fiA$I$I', function (atoms, points, i, j) {
var ipt=this.countPlusIndices[i];
var jpt=atoms[j];
return (ipt >= 0 || jpt >= 0  ? ipt == jpt : this.pts[-2 - ipt].distance$javajs_util_T3(points[-2 - jpt]) < 0.01 );
}, p$1);

Clazz.newMeth(C$, 'sameAs$I$I', function (i, j) {
return p$1.sameAsIJ$IA$org_jmol_util_Point3fiA$I$I.apply(this, [this.countPlusIndices, this.pts, i, j]);
});

Clazz.newMeth(C$, 'getMeasurement$org_jmol_util_Point3fiA', function (pts) {
if (this.countPlusIndices == null ) return NaN;
if (this.count < 2) return NaN;
for (var i=this.count; --i >= 0; ) if (this.countPlusIndices[i + 1] == -1) {
return NaN;
}
var ptA=(pts == null  ? this.getAtom$I(1) : pts[0]);
var ptB=(pts == null  ? this.getAtom$I(2) : pts[1]);
var ptC;
switch (this.count) {
case 2:
return ptA.distance$javajs_util_T3(ptB);
case 3:
ptC=(pts == null  ? this.getAtom$I(3) : pts[2]);
return $I$(6).computeAngleABC$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(ptA, ptB, ptC, true);
case 4:
ptC=(pts == null  ? this.getAtom$I(3) : pts[2]);
var ptD=(pts == null  ? this.getAtom$I(4) : pts[3]);
return $I$(6).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(ptA, ptB, ptC, ptD, true);
default:
return NaN;
}
});

Clazz.newMeth(C$, 'getLabel$I$Z$Z', function (i, asBitSet, withModelIndex) {
var atomIndex=this.countPlusIndices[i];
return (atomIndex < 0 ? (withModelIndex ? "modelIndex " + this.getAtom$I(i).mi + " "  : "") + (function(a,f){return f.apply(null,a)})([this.getAtom$I(i)],$I$(7).eP$javajs_util_T3) : asBitSet ? "({" + atomIndex + "})"  : this.vwr.getAtomInfo$I(atomIndex));
});

Clazz.newMeth(C$, 'setModelIndex$H', function (modelIndex) {
if (this.pts == null ) return;
for (var i=0; i < this.count; i++) {
if (this.pts[i] != null ) this.pts[i].mi=modelIndex;
}
});

Clazz.newMeth(C$, 'isValid$', function () {
return !(this.sameAs$I$I(1, 2) || this.count > 2 && this.sameAs$I$I(1, 3)   || this.count == 4 && this.sameAs$I$I(2, 4)  );
});

Clazz.newMeth(C$, 'find$javajs_util_Lst$org_jmol_modelset_Measurement', function (measurements, m) {
var indices=m.countPlusIndices;
var points=m.pts;
for (var i=measurements.size$(); --i >= 0; ) if (measurements.get$I(i).sameAsPoints$IA$org_jmol_util_Point3fiA(indices, points)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'isConnected$org_jmol_modelset_AtomA$I', function (atoms, count) {
var atomIndexLast=-1;
for (var i=1; i <= count; i++) {
var atomIndex=this.getAtomIndex$I(i);
if (atomIndex < 0) continue;
if (atomIndexLast >= 0 && !atoms[atomIndex].isBonded$org_jmol_modelset_Atom(atoms[atomIndexLast]) ) return false;
atomIndexLast=atomIndex;
}
return true;
});

Clazz.newMeth(C$, 'getInfoAsString$S', function (units) {
var f=this.fixValue$S$Z(units, true);
var sb=Clazz.new_($I$(2,1));
sb.append$S(this.count == 2 ? (this.type == null  ? "distance" : this.type) : this.count == 3 ? "angle" : "dihedral");
sb.append$S(" \t").appendF$F(f);
sb.append$S(" \t").append$S($I$(8).esc$S(this.strMeasurement));
for (var i=1; i <= this.count; i++) sb.append$S(" \t").append$S(this.getLabel$I$Z$Z(i, false, false));

if (this.thisID != null ) sb.append$S(" \t").append$S(this.thisID);
return sb.toString();
});

Clazz.newMeth(C$, 'isInRange$org_jmol_atomdata_RadiusData$F', function (radiusData, value) {
if (radiusData.factorType === $I$(9).FACTOR ) {
var atom1=this.getAtom$I(1);
var atom2=this.getAtom$I(2);
var d=(atom1.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, radiusData.vdwType) + atom2.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, radiusData.vdwType)) * radiusData.value;
return (value <= d );
}return (radiusData.values[0] == 3.4028235E38  || value >= radiusData.values[0]  && value <= radiusData.values[1]   );
});

Clazz.newMeth(C$, 'isIntramolecular$org_jmol_modelset_AtomA$I', function (atoms, count) {
var molecule=-1;
for (var i=1; i <= count; i++) {
var atomIndex=this.getAtomIndex$I(i);
if (atomIndex < 0) continue;
var m=atoms[atomIndex].getMoleculeNumber$Z(false);
if (molecule < 0) molecule=m;
 else if (m != molecule) return false;
}
return true;
});

Clazz.newMeth(C$, 'isMin$java_util_Map', function (htMin) {
var a1=this.getAtom$I(1);
var a2=this.getAtom$I(2);
var d=((a2.distanceSquared$javajs_util_T3(a1) * 100)|0);
var n1=a1.getAtomName$();
var n2=a2.getAtomName$();
var key=(n1.compareTo$S(n2) < 0 ? n1 + n2 : n2 + n1);
var min=htMin.get$O(key);
return (min != null  && d == min.intValue$() );
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
