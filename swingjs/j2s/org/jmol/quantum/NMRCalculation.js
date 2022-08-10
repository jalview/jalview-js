(function(){var P$=Clazz.newPackage("org.jmol.quantum"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.util.BS','org.jmol.modelset.Atom','org.jmol.util.Logger','javajs.util.V3','org.jmol.viewer.FileManager','javajs.util.PT','org.jmol.util.Escape','org.jmol.util.Tensor','javajs.util.Measure','org.jmol.quantum.NMRNoeMatrix']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NMRCalculation", null, null, 'org.jmol.api.JmolNMRInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.shiftRefsPPM=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer','isotopeData','java.util.Map','+shiftRefsPPM']]
,['O',['deltaElectro','java.util.Hashtable','pAltona','double[][]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
p$1.getData.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'getQuadrupolarConstant$org_jmol_util_Tensor', function (efg) {
if (efg == null ) return 0;
var a=this.vwr.ms.at[efg.atomIndex1];
return (p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a, 2]) * efg.eigenValues[2] * 2.349647144641375E8 );
});

Clazz.newMeth(C$, 'getInteractionTensorList$S$javajs_util_BS', function (type, bsA) {
if (type != null ) type=type.toLowerCase$();
var bsModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(bsA, false);
var bs1=p$1.getAtomSiteBS$javajs_util_BS.apply(this, [bsA]);
var iAtom=(bs1.cardinality$() == 1 ? bs1.nextSetBit$I(0) : -1);
var list=Clazz.new_($I$(2,1));
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
var tensors=this.vwr.ms.getInfo$I$S(i, "interactionTensors");
if (tensors == null ) continue;
var n=tensors.size$();
for (var j=0; j < n; j++) {
var t=tensors.get$I(j);
if (type == null  || t.type.equals$O(type) && t.isSelected$javajs_util_BS$I(bs1, iAtom)  ) list.addLast$O(t);
}
}
return list;
}, p$1);

Clazz.newMeth(C$, 'getAtomSiteBS$javajs_util_BS', function (bsA) {
if (bsA == null ) return null;
var bs=Clazz.new_($I$(3,1));
var atoms=this.vwr.ms.at;
var models=this.vwr.ms.am;
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) {
if (!bsA.get$I(i)) continue;
var a=atoms[i];
bs.set$I(models[a.mi].firstAtomIndex - 1 + a.atomSite);
}
return bs;
}, p$1);

Clazz.newMeth(C$, 'getUniqueTensorSet$javajs_util_BS', function (bsAtoms) {
var bs=Clazz.new_($I$(3,1));
var atoms=this.vwr.ms.at;
for (var i=this.vwr.ms.mc; --i >= 0; ) {
var bsModelAtoms=this.vwr.getModelUndeletedAtomsBitSet$I(i);
bsModelAtoms.and$javajs_util_BS(bsAtoms);
if (this.vwr.ms.getUnitCell$I(i) == null ) continue;
for (var j=bsModelAtoms.nextSetBit$I(0); j >= 0; j=bsModelAtoms.nextSetBit$I(j + 1)) if (atoms[j].atomSite != atoms[j].i + 1) bsModelAtoms.clear$I(j);

bs.or$javajs_util_BS(bsModelAtoms);
for (var j=bsModelAtoms.nextSetBit$I(0); j >= 0; j=bsModelAtoms.nextSetBit$I(j + 1)) {
var ta=atoms[j].getTensors$();
if (ta == null ) continue;
for (var jj=ta.length; --jj >= 0; ) {
var t=ta[jj];
if (t == null ) continue;
for (var k=bsModelAtoms.nextSetBit$I(j + 1); k >= 0; k=bsModelAtoms.nextSetBit$I(k + 1)) {
var tb=atoms[k].getTensors$();
if (tb == null ) continue;
for (var kk=tb.length; --kk >= 0; ) {
if (t.isEquiv$org_jmol_util_Tensor(tb[kk])) {
bsModelAtoms.clear$I(k);
bs.clear$I(k);
break;
}}
}
}
}
}
return bs;
});

Clazz.newMeth(C$, 'getJCouplingHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor', function (a1, a2, type, isc) {
return this.getIsoOrAnisoHz$Z$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor(true, a1, a2, type, isc);
});

Clazz.newMeth(C$, 'getIsoOrAnisoHz$Z$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor', function (isIso, a1, a2, units, isc) {
if (isc == null ) {
var type=p$1.getISCtype$org_jmol_modelset_Atom$S.apply(this, [a1, units]);
if (type == null  || a1.mi != a2.mi ) {
if (!units.equals$O("hz")) return 0;
var data=C$.calc2or3JorNOE$org_jmol_viewer_Viewer$org_jmol_modelset_AtomA$S$I(this.vwr, Clazz.array($I$(4), -1, [a1, null, null, a2]), null, 3);
return (data == null  ? NaN : data[1]);
}var bs=Clazz.new_($I$(3,1));
bs.set$I(a1.i);
bs.set$I(a2.i);
var list=p$1.getInteractionTensorList$S$javajs_util_BS.apply(this, [type, bs]);
if (list.size$() == 0) return NaN;
isc=list.get$I(0);
} else {
a1=this.vwr.ms.at[isc.atomIndex1];
a2=this.vwr.ms.at[isc.atomIndex2];
}return (p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a1, 1]) * p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a2, 1]) * (isIso ? isc.isotropy$() : isc.anisotropy$()) * 0.0167840302932219 );
});

Clazz.newMeth(C$, 'getISCtype$org_jmol_modelset_Atom$S', function (a1, type) {
var tensors=this.vwr.ms.getInfo$I$S(a1.mi, "interactionTensors");
if (tensors == null ) return null;
type=(type == null  ? "" : type.toLowerCase$());
var pt=-1;
if ((pt=type.indexOf$S("_hz")) >= 0 || (pt=type.indexOf$S("_khz")) >= 0  || (pt=type.indexOf$S("hz")) >= 0  || (pt=type.indexOf$S("khz")) >= 0 ) type=type.substring$I$I(0, pt);
if (type.length$() == 0) type="isc";
return type;
}, p$1);

Clazz.newMeth(C$, 'getDipolarConstantHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom', function (a1, a2) {
if ($I$(5).debugging) $I$(5,"debug$S",[a1 + " g=" + new Double(p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a1, 1])).toString() + "; " + a2 + " g=" + new Double(p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a2, 1])).toString() ]);
var v=(-p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a1, 1]) * p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a2, 1]) / Math.pow(a1.distance$javajs_util_T3(a2), 3) * 1054.5717253362893);
return (v == 0  || a1 === a2   ? NaN : v);
});

Clazz.newMeth(C$, 'getDipolarCouplingHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3', function (a1, a2, vField) {
var v12=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(a2, a1);
var r=v12.length$();
var costheta=v12.dot$javajs_util_T3(vField) / r / vField.length$() ;
return (this.getDipolarConstantHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom(a1, a2) * (3 * costheta - 1) / 2);
});

Clazz.newMeth(C$, 'getIsotopeData$org_jmol_modelset_Atom$I', function (a, iType) {
var iso=a.getIsotopeNumber$();
var sym=a.getElementSymbolIso$Z(false);
var d=this.isotopeData.get$O(iso == 0 ? sym : "" + iso + sym );
return (d == null  ? 0 : d[iType]);
}, p$1);

Clazz.newMeth(C$, 'getData', function () {
var br=null;
try {
var debugging=$I$(5).debugging;
br=$I$(7).getBufferedReaderForResource$org_jmol_viewer_Viewer$O$S$S(this.vwr, this, "org/jmol/quantum/", "nmr_data.txt");
this.isotopeData=Clazz.new_($I$(1,1));
var line;
while ((line=br.readLine$()) != null ){
if (debugging) $I$(5).info$S(line);
if (line.indexOf$S("#") >= 0) continue;
var tokens=$I$(8).getTokens$S(line);
var name=tokens[0];
var defaultIso=tokens[2] + name;
if (debugging) $I$(5).info$S(name + " default isotope " + defaultIso );
for (var i=3; i < tokens.length; i+=3) {
var n=Integer.parseInt$S(tokens[i]);
var isoname=n + name;
var dataGQ=Clazz.array(Double.TYPE, -1, [n, Double.parseDouble$S(tokens[i + 1]), Double.parseDouble$S(tokens[i + 2])]);
if (debugging) $I$(5,"info$S",[isoname + "  " + $I$(9).eAD$DA(dataGQ) ]);
this.isotopeData.put$O$O(isoname, dataGQ);
}
var defdata=this.isotopeData.get$O(defaultIso);
if (defdata == null ) {
$I$(5).error$S("Cannot find default NMR data in nmr_data.txt for " + defaultIso);
throw Clazz.new_(Clazz.load('NullPointerException'));
}defdata[0]=-defdata[0];
this.isotopeData.put$O$O(name, defdata);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5,"error$S",["Exception " + e.toString() + " reading " + "nmr_data.txt" ]);
} else {
throw e;
}
} finally {
try {
br.close$();
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
} else {
throw ee;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'getInfo$S', function (what) {
if (what.equals$O("all")) {
var map=Clazz.new_($I$(1,1));
map.put$O$O("isotopes", this.isotopeData);
map.put$O$O("shiftRefsPPM", this.shiftRefsPPM);
return map;
}if ($I$(8,"isDigit$C",[what.charAt$I(0)])) return this.isotopeData.get$O(what);
var info=Clazz.new_($I$(2,1));
for (var e, $e = this.isotopeData.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
if ($I$(8,"isDigit$C",[key.charAt$I(0)]) && key.endsWith$S(what) ) info.addLast$O(e.getValue$());
}
return info;
});

Clazz.newMeth(C$, 'getChemicalShift$org_jmol_modelset_Atom', function (atom) {
var v=this.getMagneticShielding$org_jmol_modelset_Atom(atom);
if (Float.isNaN$F(v)) return v;
var ref=this.shiftRefsPPM.get$O(atom.getElementSymbol$());
return (ref == null  ? 0 : ref.floatValue$()) - v;
});

Clazz.newMeth(C$, 'getMagneticShielding$org_jmol_modelset_Atom', function (atom) {
var t=this.vwr.ms.getAtomTensor$I$S(atom.i, "ms");
return (t == null  ? NaN : t.isotropy$());
});

Clazz.newMeth(C$, 'getState$javajs_util_SB', function (sb) {
if (this.shiftRefsPPM.isEmpty$()) return false;
for (var nuc, $nuc = this.shiftRefsPPM.entrySet$().iterator$(); $nuc.hasNext$()&&((nuc=($nuc.next$())),1);) sb.append$S("  set shift_").append$S(nuc.getKey$()).append$S(" ").appendO$O(nuc.getValue$()).append$S("\n");

return true;
});

Clazz.newMeth(C$, 'setChemicalShiftReference$S$F', function (element, value) {
if (element == null ) {
this.shiftRefsPPM.clear$();
return false;
}element=element.substring$I$I(0, 1).toUpperCase$() + element.substring$I(1);
this.shiftRefsPPM.put$O$O(element, Float.valueOf$F(value));
return true;
});

Clazz.newMeth(C$, 'getTensorInfo$S$S$javajs_util_BS', function (tensorType, infoType, bs) {
if ("".equals$O(tensorType)) tensorType=null;
infoType=(infoType == null  ? ";all." : ";" + infoType + "." );
var data=Clazz.new_($I$(2,1));
var list1;
if (";dc.".equals$O(infoType)) {
var atoms=this.vwr.ms.at;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) for (var j=bs.nextSetBit$I(i + 1); j >= 0; j=bs.nextSetBit$I(j + 1)) {
list1=Clazz.new_($I$(2,1));
list1.addLast$O(Integer.valueOf$I(atoms[i].i));
list1.addLast$O(Integer.valueOf$I(atoms[j].i));
list1.addLast$O(Float.valueOf$F(this.getDipolarConstantHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom(atoms[i], atoms[j])));
data.addLast$O(list1);
}

return data;
}if (tensorType == null  || tensorType.startsWith$S("isc") ) {
var isJ=infoType.equals$O(";j.");
var isEta=infoType.equals$O(";eta.");
var list=p$1.getInteractionTensorList$S$javajs_util_BS.apply(this, [tensorType, bs]);
var n=(list == null  ? 0 : list.size$());
for (var i=0; i < n; i++) {
var t=list.get$I(i);
list1=Clazz.new_($I$(2,1));
list1.addLast$O(Integer.valueOf$I(t.atomIndex1));
list1.addLast$O(Integer.valueOf$I(t.atomIndex2));
list1.addLast$O(isEta || isJ  ? Float.valueOf$F(this.getIsoOrAnisoHz$Z$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor(isJ, null, null, null, t)) : t.getInfo$S(infoType));
data.addLast$O(list1);
}
if (tensorType != null ) return data;
}var isChi=tensorType != null  && tensorType.startsWith$S("efg")  && infoType.equals$O(";chi.") ;
var isFloat=(isChi || $I$(10).isFloatInfo$S(infoType) );
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (tensorType == null ) {
var a=this.vwr.ms.getAtomTensorList$I(i);
if (a != null ) for (var j=0; j < a.length; j++) data.addLast$O((a[j]).getInfo$S(infoType));

} else {
var t=this.vwr.ms.getAtomTensor$I$S(i, tensorType);
data.addLast$O(t == null  ? (isFloat ? Float.valueOf$F(0) : "") : isChi ? Float.valueOf$F(this.getQuadrupolarConstant$org_jmol_util_Tensor(t)) : t.getInfo$S(infoType));
}}
return data;
});

Clazz.newMeth(C$, 'getMinDistances$org_jmol_modelset_MeasurementData', function (md) {
var bsPoints1=md.points.get$I(0);
var n1=bsPoints1.cardinality$();
if (n1 == 0 || !(Clazz.instanceOf(md.points.get$I(1), "javajs.util.BS")) ) return null;
var bsPoints2=md.points.get$I(1);
var n2=bsPoints2.cardinality$();
if (n1 < 2 && n2 < 2 ) return null;
var htMin=Clazz.new_($I$(1,1));
var atoms=this.vwr.ms.at;
for (var i=bsPoints1.nextSetBit$I(0); i >= 0; i=bsPoints1.nextSetBit$I(i + 1)) {
var a1=atoms[i];
var name=a1.getAtomName$();
for (var j=bsPoints2.nextSetBit$I(0); j >= 0; j=bsPoints2.nextSetBit$I(j + 1)) {
var a2=atoms[j];
var d=((a2.distanceSquared$javajs_util_T3(a1) * 100)|0);
if (d == 0) continue;
var name1=a2.getAtomName$();
var key=(name.compareTo$S(name1) < 0 ? name + name1 : name1 + name);
var min=htMin.get$O(key);
if (min == null ) {
min=Integer.valueOf$I(d);
htMin.put$O$O(key, min);
continue;
}if (d < min.intValue$()) htMin.put$O$O(key, Integer.valueOf$I(d));
}
}
return htMin;
});

Clazz.newMeth(C$, 'calcJKarplus$D', function (theta) {
var j0=8.5;
var j180=9.5;
var jconst=0.28;
var cos=Math.cos(theta);
var jab=0;
if (theta >= -90.0  && theta < 90.0  ) {
jab=j0 * cos * cos  - jconst;
} else {
jab=j180 * cos * cos  - jconst;
}return jab;
}, 1);

Clazz.newMeth(C$, 'getInitialJValue$I$D', function (nNonH, theta) {
var p=C$.pAltona[nNonH];
var cos=Math.cos(theta);
return p[1] * cos * cos  + p[2] * cos + p[3];
}, 1);

Clazz.newMeth(C$, 'getIncrementalJValue$I$S$javajs_util_V3$javajs_util_V3$javajs_util_V3$D$I', function (nNonH, element, sA_cA, v21, v23, theta, f) {
if (nNonH < 0 || nNonH > 5 ) return 0;
var de=C$.deltaElectro.get$O(element);
if (de == null ) return 0;
var e=de.doubleValue$();
var sign=C$.getSubSign$javajs_util_V3$javajs_util_V3$javajs_util_V3$I(sA_cA, v21, v23, f);
var p=C$.pAltona[nNonH];
var cos=Math.cos(sign * theta + p[6] * Math.abs(e));
return e * (p[4] + p[5] * cos * cos );
}, 1);

Clazz.newMeth(C$, 'getSubSign$javajs_util_V3$javajs_util_V3$javajs_util_V3$I', function (sA_cA, v21, v23, f) {
var cross=Clazz.new_($I$(6,1));
cross.cross$javajs_util_T3$javajs_util_T3(v23, v21);
return (cross.dot$javajs_util_T3(sA_cA) > 0  ? f : -f);
}, 1);

Clazz.newMeth(C$, 'calc3JHHOnly$SAA$javajs_util_V3AA$javajs_util_V3$javajs_util_V3$javajs_util_V3$D$Z', function (subElements, subVectors, v21, v34, v23, theta, is23Double) {
var nNonH=0;
for (var i=0, n=(is23Double ? 2 : 3); i < n; i++) {
if (!subElements[0][i].equals$O("H")) {
nNonH++;
}if (!subElements[1][i].equals$O("H")) {
nNonH++;
}}
var jvalue=C$.getInitialJValue$I$D(nNonH, theta);
for (var i=0, n=(is23Double ? 2 : 3); i < n; i++) {
var element=subElements[0][i];
if (!element.equals$O("H")) {
jvalue += C$.getIncrementalJValue$I$S$javajs_util_V3$javajs_util_V3$javajs_util_V3$D$I(nNonH, element, subVectors[0][i], v21, v23, theta, 1);
}element=subElements[1][i];
if (!element.equals$O("H")) {
jvalue += C$.getIncrementalJValue$I$S$javajs_util_V3$javajs_util_V3$javajs_util_V3$D$I(nNonH, element, subVectors[1][i], v34, v23, theta, -1);
}}
if (is23Double) {
if (Math.abs(theta) < 1.5707963267948966 ) jvalue *= 0.75;
 else jvalue *= 1.33;
}return jvalue;
}, 1);

Clazz.newMeth(C$, 'calc3JCH$S$D$Z', function (CHequation, theta, is23Double) {
if (CHequation == null ) CHequation="was";
if (!$I$(8).isOneOf$S$S(CHequation, ";was;tva;ayd;")) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Equation must be one of was, tva, or ayd"]);
if (CHequation.equals$O("was")) {
var A=3.56;
var C=4.26;
var j=3.56 * Math.cos(2 * theta) - Math.cos(theta) + 4.26;
return j;
} else if (CHequation.equals$O("tva")) {
var j=4.5 - 0.87 * Math.cos(theta) + Math.cos(2.0 * theta);
return j;
} else if (CHequation.equals$O("ayd")) {
var j=5.8 * Math.pow(Math.cos(theta), 2) - 1.6 * Math.cos(theta) + 0.28 * Math.sin(2.0 * theta) - 0.02 * Math.sin(theta) + 0.52;
return j;
} else {
return 0.0;
}}, 1);

Clazz.newMeth(C$, 'calcNOE$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_Atom', function (viewer, atom1, atom2) {
return C$.calc2or3JorNOE$org_jmol_viewer_Viewer$org_jmol_modelset_AtomA$S$I(viewer, Clazz.array($I$(4), -1, [atom1, null, null, atom2]), null, 7);
}, 1);

Clazz.newMeth(C$, 'calc2or3JorNOE$org_jmol_viewer_Viewer$org_jmol_modelset_AtomA$S$I', function (viewer, atoms, CHEquation, mode) {
if (CHEquation == null  || CHEquation.equals$O("none") ) mode&=~4;
var elements=Clazz.array(String, [4]);
mode=C$.getCalcType$org_jmol_modelset_AtomA$SA$I(atoms, elements, mode);
switch (mode) {
default:
case 0:
return null;
case 8:
return C$.calcNOEImpl$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_Atom(viewer, atoms[0], atoms[3]);
case 1:
return C$.calc2JHH$org_jmol_modelset_Atom$org_jmol_modelset_Atom$org_jmol_modelset_Atom(atoms[0], atoms[1], atoms[3]);
case 4:
case 2:
break;
}
var subElements=Clazz.array(String, [2, 3]);
var subVectors=Clazz.array($I$(6), [2, 3]);
var v23=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(atoms[2], atoms[1]);
var v21=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(atoms[0], atoms[1]);
var v34=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(atoms[3], atoms[2]);
var subs=Clazz.new_($I$(2,1));
var bonds=atoms[1].bonds;
var is23Double=false;
for (var pt=0, i=Math.min(bonds.length, 4); --i >= 0; ) {
var sub=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atoms[1]);
if (sub === atoms[2] ) {
is23Double=(bonds[i].order == 2);
continue;
}subElements[0][pt]=sub.getElementSymbol$();
subVectors[0][pt]=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(sub, atoms[1]);
pt++;
}
subs.clear$();
bonds=atoms[2].bonds;
for (var pt=0, i=Math.min(bonds.length, 4); --i >= 0; ) {
var sub=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atoms[2]);
if (sub === atoms[1] ) continue;
subElements[1][pt]=sub.getElementSymbol$();
subVectors[1][pt]=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(sub, atoms[2]);
pt++;
}
var theta=$I$(11).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(atoms[0], atoms[1], atoms[2], atoms[3], false);
var jvalue=NaN;
if (is23Double || subElements[0][2] != null  && subElements[1][2] != null   ) {
switch (mode) {
case 2:
jvalue=C$.calc3JHHOnly$SAA$javajs_util_V3AA$javajs_util_V3$javajs_util_V3$javajs_util_V3$D$Z(subElements, subVectors, v21, v34, v23, theta, is23Double);
break;
case 4:
if (is23Double) return null;
jvalue=C$.calc3JCH$S$D$Z(CHEquation, theta, is23Double);
break;
}
} else {
jvalue=C$.calcJKarplus$D(theta);
}return Clazz.array(Double.TYPE, -1, [theta, jvalue, atoms[1].i, atoms[2].i]);
}, 1);

Clazz.newMeth(C$, 'getCalcType$org_jmol_modelset_AtomA$SA$I', function (atoms, elementsToFill, mode) {
var atom1=atoms[0];
var atom4=atoms[3];
var bonds1=atom1.bonds;
var bonds4=atom4.bonds;
if (bonds1 == null  || bonds4 == null   || atom1.isCovalentlyBonded$org_jmol_modelset_Atom(atom4) ) return 0;
var allowNOE=((mode & 8) == 8);
var allow3JHH=((mode & 2) == 2);
var allow2JHH=((mode & 1) == 1);
var allow3JCH=((mode & 4) == 4);
var isGeminal=false;
var atom2=atoms[1];
var atom3=atoms[2];
if (atom2 == null ) {
for (var i=0; i < bonds1.length; i++) {
atom2=bonds1[i].getOtherAtom$org_jmol_modelset_Atom(atom1);
if (atom2.isCovalentlyBonded$org_jmol_modelset_Atom(atom4)) {
isGeminal=true;
break;
}for (var j=0; j < bonds4.length; j++) {
atom3=bonds4[j].getOtherAtom$org_jmol_modelset_Atom(atom4);
if (atom2.isCovalentlyBonded$org_jmol_modelset_Atom(atom3)) break;
atom3=null;
}
}
atoms[1]=atom2;
atoms[2]=atom3;
} else if (atom2.isCovalentlyBonded$org_jmol_modelset_Atom(atom4)) {
isGeminal=true;
}var e1=atom4.getElementSymbol$();
var e2=(atom2 == null  ? null : atom2.getElementSymbol$());
var e3=(atom3 == null  ? null : atom3.getElementSymbol$());
var e4=atom1.getElementSymbol$();
var isHH=e1.equals$O("H") && e4.equals$O("H") ;
if (isGeminal) {
mode=(allow2JHH && isHH && e2.equals$O("C")   ? 1 : 0);
} else if (atom3 == null ) {
mode=(allowNOE && isHH  ? 8 : 0);
} else if (allow3JHH && isHH ) {
mode=2;
} else if (allow3JCH && e2.equals$O("C") && e3.equals$O("C") && (e1.equals$O("H") && e4.equals$O("C")  || e1.equals$O("C") && e4.equals$O("H")  )  ) {
mode=4;
} else {
mode=0;
}if (mode != 0 && elementsToFill != null  ) {
elementsToFill[0]=e1;
elementsToFill[1]=e2;
elementsToFill[2]=e3;
elementsToFill[3]=e4;
}return mode;
}, 1);

Clazz.newMeth(C$, 'calc2JHH$org_jmol_modelset_Atom$org_jmol_modelset_Atom$org_jmol_modelset_Atom', function (h1, c, h2) {
var val=NaN;
switch (c.getCovalentBondCount$()) {
case 3:
val=1.5;
break;
case 4:
val=12.0;
break;
default:
return null;
}
var angle=$I$(11,"computeAngle$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$Z",[h1, c, h2, Clazz.new_($I$(6,1)), Clazz.new_($I$(6,1)), false]);
return Clazz.array(Double.TYPE, -1, [angle, val, c.i]);
}, 1);

Clazz.newMeth(C$, 'calcNOEImpl$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_Atom', function (viewer, atom1, atom2) {
try {
var noeMatrix=viewer.ms.getInfo$I$S(atom1.mi, "noeMatrix");
var dist=0;
var noe=NaN;
if (noeMatrix == null ) {
noeMatrix=$I$(12,"createMatrix$org_jmol_viewer_Viewer$javajs_util_BS$SA$org_jmol_quantum_NMRNoeMatrix_NOEParams",[viewer, viewer.getModelUndeletedAtomsBitSet$I(atom1.mi), viewer.ms.getInfo$I$S(atom1.mi, "noeLabels"), viewer.ms.getInfo$I$S(atom1.mi, "noeParams")]);
}dist=noeMatrix.getJmolDistance$I$I(atom1.i, atom2.i);
noe=noeMatrix.getJmolNoe$I$I(atom1.i, atom2.i);
return (Double.isNaN$D(noe) ? null : Clazz.array(Double.TYPE, -1, [dist, noe]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getNOEorJHH$org_jmol_modelset_AtomA$I', function (atoms, mode) {
return C$.calc2or3JorNOE$org_jmol_viewer_Viewer$org_jmol_modelset_AtomA$S$I(this.vwr, atoms, null, mode);
});

C$.$static$=function(){C$.$static$=0;
C$.deltaElectro=Clazz.new_($I$(1,1));
{
var enegH=2.2;
C$.deltaElectro.put$O$O("C",  new Double(2.6 - enegH));
C$.deltaElectro.put$O$O("O",  new Double(3.5 - enegH));
C$.deltaElectro.put$O$O("N",  new Double(3.05 - enegH));
C$.deltaElectro.put$O$O("F",  new Double(3.9 - enegH));
C$.deltaElectro.put$O$O("Cl",  new Double(3.15 - enegH));
C$.deltaElectro.put$O$O("Br",  new Double(2.95 - enegH));
C$.deltaElectro.put$O$O("I",  new Double(2.65 - enegH));
C$.deltaElectro.put$O$O("S",  new Double(2.58 - enegH));
C$.deltaElectro.put$O$O("Si",  new Double(1.9 - enegH));
};
C$.pAltona=Clazz.array(Double.TYPE, [5, 8]);
{
for (var nNonH=0; nNonH < 5; nNonH++) {
var p=C$.pAltona[nNonH];
switch (nNonH) {
case 0:
case 1:
case 2:
p[1]=13.7;
p[2]=-0.73;
p[3]=0;
p[4]=0.56;
p[5]=-2.47;
p[6]=16.9;
p[7]=0.14;
break;
case 3:
p[1]=13.22;
p[2]=-0.99;
p[3]=0;
p[4]=0.87;
p[5]=-2.46;
p[6]=19.9;
p[7]=0;
break;
case 4:
p[1]=13.24;
p[2]=-0.91;
p[3]=0;
p[4]=0.53;
p[5]=-2.41;
p[6]=15.5;
p[7]=0.19;
break;
}
p[6]=p[6] * 3.141592653589793 / 180.0;
}
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
