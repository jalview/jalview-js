(function(){var P$=Clazz.newPackage("org.jmol.quantum"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.util.BS','org.jmol.util.Logger','javajs.util.V3','org.jmol.viewer.FileManager','javajs.util.PT','org.jmol.util.Escape','org.jmol.util.Tensor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NMRCalculation", null, null, 'org.jmol.api.JmolNMRInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.isotopeData=null;
this.shiftRefsPPM=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.shiftRefsPPM=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
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
var list=Clazz.new_($I$(2));
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
var tensors=this.vwr.ms.getInfo$I$S(i, "interactionTensors");
if (tensors == null ) continue;
var n=tensors.size$();
for (var j=0; j < n; j++) {
var t=tensors.get$I(j);
if (type == null  || t.type.equals$O(type) && t.isSelected$javajs_util_BS$I(bs1, iAtom)  ) list.addLast$TV(t);
}
}
return list;
}, p$1);

Clazz.newMeth(C$, 'getAtomSiteBS$javajs_util_BS', function (bsA) {
if (bsA == null ) return null;
var bs=Clazz.new_($I$(3));
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
var bs=Clazz.new_($I$(3));
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

Clazz.newMeth(C$, 'getIsoOrAnisoHz$Z$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor', function (isIso, a1, a2, type, isc) {
if (isc == null ) {
type=p$1.getISCtype$org_jmol_modelset_Atom$S.apply(this, [a1, type]);
if (type == null  || a1.mi != a2.mi ) return 0;
var bs=Clazz.new_($I$(3));
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
if ($I$(4).debugging) $I$(4).debug$S(a1 + " g=" + new Double(p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a1, 1])).toString() + "; " + a2 + " g=" + new Double(p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a2, 1])).toString() );
var v=(-p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a1, 1]) * p$1.getIsotopeData$org_jmol_modelset_Atom$I.apply(this, [a2, 1]) / Math.pow(a1.distance$javajs_util_T3(a2), 3) * 1054.5717253362893);
return (v == 0  || a1 === a2   ? NaN : v);
});

Clazz.newMeth(C$, 'getDipolarCouplingHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3', function (a1, a2, vField) {
var v12=$I$(5).newVsub$javajs_util_T3$javajs_util_T3(a2, a1);
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
var debugging=$I$(4).debugging;
br=$I$(6).getBufferedReaderForResource$org_jmol_viewer_Viewer$O$S$S(this.vwr, this, "org/jmol/quantum/", "nmr_data.txt");
this.isotopeData=Clazz.new_($I$(1));
var line;
while ((line=br.readLine$()) != null ){
if (debugging) $I$(4).info$S(line);
if (line.indexOf$S("#") >= 0) continue;
var tokens=$I$(7).getTokens$S(line);
var name=tokens[0];
var defaultIso=tokens[2] + name;
if (debugging) $I$(4).info$S(name + " default isotope " + defaultIso );
for (var i=3; i < tokens.length; i+=3) {
var n=Integer.parseInt$S(tokens[i]);
var isoname=n + name;
var dataGQ=Clazz.array(Double.TYPE, -1, [n, Double.parseDouble$S(tokens[i + 1]), Double.parseDouble$S(tokens[i + 2])]);
if (debugging) $I$(4).info$S(isoname + "  " + $I$(8).eAD$DA(dataGQ) );
this.isotopeData.put$TK$TV(isoname, dataGQ);
}
var defdata=this.isotopeData.get$O(defaultIso);
if (defdata == null ) {
$I$(4).error$S("Cannot find default NMR data in nmr_data.txt for " + defaultIso);
throw Clazz.new_(Clazz.load('NullPointerException'));
}defdata[0]=-defdata[0];
this.isotopeData.put$TK$TV(name, defdata);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4).error$S("Exception " + e.toString() + " reading " + "nmr_data.txt" );
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
var map=Clazz.new_($I$(1));
map.put$TK$TV("isotopes", this.isotopeData);
map.put$TK$TV("shiftRefsPPM", this.shiftRefsPPM);
return map;
}if ($I$(7).isDigit$C(what.charAt$I(0))) return this.isotopeData.get$O(what);
var info=Clazz.new_($I$(2));
for (var e, $e = this.isotopeData.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
if ($I$(7).isDigit$C(key.charAt$I(0)) && key.endsWith$S(what) ) info.addLast$TV(e.getValue$());
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
this.shiftRefsPPM.put$TK$TV(element, Float.valueOf$F(value));
return true;
});

Clazz.newMeth(C$, 'getTensorInfo$S$S$javajs_util_BS', function (tensorType, infoType, bs) {
if ("".equals$O(tensorType)) tensorType=null;
infoType=(infoType == null  ? ";all." : ";" + infoType + "." );
var data=Clazz.new_($I$(2));
var list1;
if (";dc.".equals$O(infoType)) {
var atoms=this.vwr.ms.at;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) for (var j=bs.nextSetBit$I(i + 1); j >= 0; j=bs.nextSetBit$I(j + 1)) {
list1=Clazz.new_($I$(2));
list1.addLast$TV(Integer.valueOf$I(atoms[i].i));
list1.addLast$TV(Integer.valueOf$I(atoms[j].i));
list1.addLast$TV(Float.valueOf$F(this.getDipolarConstantHz$org_jmol_modelset_Atom$org_jmol_modelset_Atom(atoms[i], atoms[j])));
data.addLast$TV(list1);
}

return data;
}if (tensorType == null  || tensorType.startsWith$S("isc") ) {
var isJ=infoType.equals$O(";j.");
var isEta=infoType.equals$O(";eta.");
var list=p$1.getInteractionTensorList$S$javajs_util_BS.apply(this, [tensorType, bs]);
var n=(list == null  ? 0 : list.size$());
for (var i=0; i < n; i++) {
var t=list.get$I(i);
list1=Clazz.new_($I$(2));
list1.addLast$TV(Integer.valueOf$I(t.atomIndex1));
list1.addLast$TV(Integer.valueOf$I(t.atomIndex2));
list1.addLast$TV(isEta || isJ  ? Float.valueOf$F(this.getIsoOrAnisoHz$Z$org_jmol_modelset_Atom$org_jmol_modelset_Atom$S$org_jmol_util_Tensor(isJ, null, null, null, t)) : t.getInfo$S(infoType));
data.addLast$TV(list1);
}
if (tensorType != null ) return data;
}var isChi=tensorType != null  && tensorType.startsWith$S("efg")  && infoType.equals$O(";chi.") ;
var isFloat=(isChi || $I$(9).isFloatInfo$S(infoType) );
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (tensorType == null ) {
var a=this.vwr.ms.getAtomTensorList$I(i);
if (a != null ) for (var j=0; j < a.length; j++) data.addLast$TV((a[j]).getInfo$S(infoType));

} else {
var t=this.vwr.ms.getAtomTensor$I$S(i, tensorType);
data.addLast$TV(t == null  ? (isFloat ? Float.valueOf$F(0) : "") : isChi ? Float.valueOf$F(this.getQuadrupolarConstant$org_jmol_util_Tensor(t)) : t.getInfo$S(infoType));
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
var htMin=Clazz.new_($I$(1));
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
htMin.put$TK$TV(key, min);
continue;
}if (d < min.intValue$()) htMin.put$TK$TV(key, Integer.valueOf$I(d));
}
}
return htMin;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
