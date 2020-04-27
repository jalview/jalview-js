(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.viewer.Viewer','javajs.util.PT','org.jmol.script.T','javajs.util.SB','java.util.Hashtable','javajs.util.Lst','org.jmol.viewer.PropertyManager','org.jmol.util.Elements','javajs.util.V3','java.util.Arrays','javajs.util.Measure','org.jmol.util.Escape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MolWriter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer','ptTemp','javajs.util.P3','vNorm','javajs.util.T3','+vTemp','connections','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
return this;
});

Clazz.newMeth(C$, 'addMolFile$I$javajs_util_SB$javajs_util_BS$javajs_util_BS$Z$Z$Z$javajs_util_Quat', function (iModel, mol, bsAtoms, bsBonds, asV3000, asJSON, noAromatic, q) {
var nAtoms=bsAtoms.cardinality$();
var nBonds=bsBonds.cardinality$();
if (!asV3000 && !asJSON && (nAtoms > 999 || nBonds > 999 )  ) return false;
var asSDF=(iModel >= 0);
var molData=(asSDF ? this.vwr.ms.getInfo$I$S(iModel, "molData") : null);
var _keyList=(asSDF ? this.vwr.ms.getInfo$I$S(iModel, "molDataKeys") : null);
var ms=this.vwr.ms;
var atomMap=Clazz.array(Integer.TYPE, [ms.ac]);
var pTemp=Clazz.new_($I$(1,1));
if (asV3000) {
mol.append$S("  0  0  0  0  0  0            999 V3000");
} else if (asJSON) {
mol.append$S("{\"mol\":{\"createdBy\":\"Jmol " + $I$(2).getJmolVersion$() + "\",\"a\":[" );
} else {
$I$(3).rightJustify$javajs_util_SB$S$S(mol, "   ", "" + nAtoms);
$I$(3).rightJustify$javajs_util_SB$S$S(mol, "   ", "" + nBonds);
mol.append$S("  0  0  0  0            999 V2000");
}if (!asJSON) mol.append$S("\n");
if (asV3000) {
mol.append$S("M  V30 BEGIN CTAB\nM  V30 COUNTS ").appendI$I(nAtoms).append$S(" ").appendI$I(nBonds).append$S(" 0 0 0\n").append$S("M  V30 BEGIN ATOM\n");
}var o=(molData == null  ? null : molData.get$O("atom_value_name"));
if (Clazz.instanceOf(o, "org.jmol.script.SV")) o=(o).asString$();
var valueType=(o == null  ? 0 : $I$(4).getTokFromName$S("" + o));
var atomValues=(valueType == 0 && !asSDF  ? null : Clazz.new_($I$(5,1)));
for (var i=bsAtoms.nextSetBit$I(0), n=0; i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
p$1.getAtomRecordMOL$I$org_jmol_modelset_ModelSet$javajs_util_SB$I$org_jmol_modelset_Atom$javajs_util_Quat$javajs_util_P3$Z$Z$javajs_util_SB$I$Z.apply(this, [iModel, ms, mol, atomMap[i]=++n, ms.at[i], q, pTemp, asV3000, asJSON, atomValues, valueType, asSDF]);
}
if (asV3000) {
mol.append$S("M  V30 END ATOM\nM  V30 BEGIN BOND\n");
} else if (asJSON) {
mol.append$S("],\"b\":[");
}for (var i=bsBonds.nextSetBit$I(0), n=0; i >= 0; i=bsBonds.nextSetBit$I(i + 1)) p$1.getBondRecordMOL$javajs_util_SB$I$org_jmol_modelset_Bond$IA$Z$Z$Z.apply(this, [mol, ++n, ms.bo[i], atomMap, asV3000, asJSON, noAromatic]);

if (asV3000) {
mol.append$S("M  V30 END BOND\nM  V30 END CTAB\n");
}if (asJSON) mol.append$S("]}}");
 else {
if (atomValues != null  && atomValues.length$() > 0 ) mol.append$S(atomValues.toString());
mol.append$S("M  END\n");
}if (asSDF) {
try {
var pc=ms.getPartialCharges$();
if (molData == null ) molData=Clazz.new_($I$(6,1));
var sb=Clazz.new_($I$(5,1));
if (pc != null ) {
sb.appendI$I(nAtoms).appendC$C("\n");
for (var i=bsAtoms.nextSetBit$I(0), n=0; i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) sb.appendI$I(++n).append$S(" ").appendF$F(pc[i]).appendC$C("\n");

molData.put$O$O("jmol_partial_charges", sb.toString());
}sb.setLength$I(0);
sb.appendI$I(nAtoms).appendC$C("\n");
for (var i=bsAtoms.nextSetBit$I(0), n=0; i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var name=ms.at[i].getAtomName$().trim$();
if (name.length$() == 0) name=".";
sb.appendI$I(++n).append$S(" ").append$S(name.replace$C$C(" ", "_")).appendC$C("\n");
}
molData.put$O$O("jmol_atom_names", sb.toString());
if (_keyList == null ) _keyList=Clazz.new_($I$(7,1));
for (var key, $key = molData.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if (!_keyList.contains$O(key)) _keyList.addLast$O(key);

for (var i=0, n=_keyList.size$(); i < n; i++) {
var key=_keyList.get$I(i);
if (key.startsWith$S(">")) continue;
o=molData.get$O(key);
if (Clazz.instanceOf(o, "org.jmol.script.SV")) o=(o).asString$();
mol.append$S("> <" + key.toUpperCase$() + ">\n" );
p$1.output80CharWrap$javajs_util_SB$S$I.apply(this, [mol, o.toString(), 80]);
mol.append$S("\n\n");
}
} catch (e) {
}
mol.append$S("$$$$\n");
}return true;
});

Clazz.newMeth(C$, 'getAtomRecordMOL$I$org_jmol_modelset_ModelSet$javajs_util_SB$I$org_jmol_modelset_Atom$javajs_util_Quat$javajs_util_P3$Z$Z$javajs_util_SB$I$Z', function (iModel, ms, mol, n, a, q, pTemp, asV3000, asJSON, atomValues, tokValue, asSDF) {
$I$(8).getPointTransf$I$org_jmol_modelset_ModelSet$org_jmol_modelset_Atom$javajs_util_Quat$javajs_util_P3(iModel, ms, a, q, pTemp);
var elemNo=a.getElementNumber$();
var sym=(a.isDeleted$() ? "Xx" : $I$(9).elementSymbolFromNumber$I(elemNo));
var isotope=a.getIsotopeNumber$();
var charge=a.getFormalCharge$();
var o=Clazz.array(java.lang.Object, -1, [pTemp]);
if (asV3000) {
mol.append$S("M  V30 ").appendI$I(n).append$S(" ").append$S(sym).append$S($I$(3).sprintf$S$S$OA(" %12.5p %12.5p %12.5p 0", "p", o));
if (charge != 0) mol.append$S(" CHG=").appendI$I(charge);
if (isotope != 0) mol.append$S(" MASS=").appendI$I(isotope);
mol.append$S("\n");
} else if (asJSON) {
if (n != 1) mol.append$S(",");
mol.append$S("{");
if (a.getElementNumber$() != 6) mol.append$S("\"l\":\"").append$S(a.getElementSymbol$()).append$S("\",");
if (charge != 0) mol.append$S("\"c\":").appendI$I(charge).append$S(",");
if (isotope != 0) mol.append$S("\"m\":").appendI$I(isotope).append$S(",");
mol.append$S("\"x\":").appendF$F(a.x).append$S(",\"y\":").appendF$F(a.y).append$S(",\"z\":").appendF$F(a.z).append$S("}");
} else {
mol.append$S($I$(3).sprintf$S$S$OA("%10.4p%10.4p%10.4p", "p", o));
mol.append$S(" ").append$S(sym);
if (sym.length$() == 1) mol.append$S(" ");
(function(a,f){return f.apply(null,a)})([mol, "   ", "" + (isotope > 0 ? isotope - (function(a,f){return f.apply(null,a)})([a.getElementNumber$()],$I$(9).getNaturalIsotope$I) : 0)],$I$(3).rightJustify$javajs_util_SB$S$S);
if (asSDF && isotope > 0 ) {
atomValues.append$S("M  ISO  1");
$I$(3).rightJustify$javajs_util_SB$S$S(atomValues, "    ", "" + n);
$I$(3).rightJustify$javajs_util_SB$S$S(atomValues, "    ", "" + isotope);
atomValues.append$S("\n");
}(function(a,f){return f.apply(null,a)})([mol, "   ", "" + (charge == 0 ? 0 : 4 - charge)],$I$(3).rightJustify$javajs_util_SB$S$S);
mol.append$S("  ").append$S(p$1.getAtomParity$org_jmol_modelset_Atom.apply(this, [a]));
mol.append$S("  0  0  0\n");
var label=(tokValue == 0 || asV3000  ? null : p$1.getAtomPropertyAsString$org_jmol_modelset_Atom$I.apply(this, [a, tokValue]));
if (label != null  && (label=label.trim$()).length$() > 0 ) {
var sn="   " + n + " " ;
atomValues.append$S("V  ").append$S(sn.substring$I(sn.length$() - 4));
p$1.output80CharWrap$javajs_util_SB$S$I.apply(this, [atomValues, label, 73]);
}}}, p$1);

Clazz.newMeth(C$, 'getAtomParity$org_jmol_modelset_Atom', function (a) {
if (a.getCovalentBondCount$() == 4) {
if (this.connections == null ) {
this.connections=Clazz.array(Integer.TYPE, [4]);
this.vTemp=Clazz.new_($I$(10,1));
this.vNorm=Clazz.new_($I$(10,1));
}var bonds=a.bonds;
var nH=0;
for (var pt=0, i=bonds.length; --i >= 0; ) {
if (bonds[i].isCovalent$()) {
var b=bonds[i].getOtherAtom$org_jmol_modelset_Atom(a);
if (b.getAtomicAndIsotopeNumber$() == 1) nH++;
this.connections[pt++]=b.i;
}}
if (nH < 3) {
$I$(11).sort$IA(this.connections);
var atoms=this.vwr.ms.at;
$I$(12).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(atoms[this.connections[0]], atoms[this.connections[1]], atoms[this.connections[2]], this.vNorm, this.vTemp);
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(atoms[this.connections[3]], atoms[this.connections[0]]);
return (this.vTemp.dot$javajs_util_T3(this.vNorm) > 0  ? "1" : "2");
}}return "0";
}, p$1);

Clazz.newMeth(C$, 'getAtomPropertyAsString$org_jmol_modelset_Atom$I', function (a, tok) {
switch (tok & 1136656384) {
case 1094713344:
var i=a.atomPropertyInt$I(tok);
return (tok == 1765808134 ? (function(a,f){return f.apply(null,a)})([$I$(13).escapeColor$I(i), "[x]"],$I$(3).trim$S$S).toUpperCase$() : "" + i);
case 1086324736:
return a.atomPropertyString$org_jmol_viewer_Viewer$I(this.vwr, tok);
case 1111490560:
var f=a.atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(this.vwr, tok, null);
return (Float.isNaN$F(f) ? null : "" + new Float(f).toString());
default:
if (this.ptTemp == null ) this.ptTemp=Clazz.new_($I$(1,1));
a.atomPropertyTuple$org_jmol_viewer_Viewer$I$javajs_util_P3(this.vwr, tok, this.ptTemp);
return (this.ptTemp == null  ? null : this.ptTemp.toString());
}
}, p$1);

Clazz.newMeth(C$, 'getBondRecordMOL$javajs_util_SB$I$org_jmol_modelset_Bond$IA$Z$Z$Z', function (mol, n, b, atomMap, asV3000, asJSON, noAromatic) {
var a1=atomMap[b.atom1.i];
var a2=atomMap[b.atom2.i];
var order=b.getValence$();
if (order > 3) order=1;
switch (b.order & ~131072) {
case 515:
order=(asJSON ? -3 : 4);
break;
case 66:
order=(asJSON ? -3 : 5);
break;
case 513:
order=(asJSON || noAromatic  ? 1 : 6);
break;
case 514:
order=(asJSON || noAromatic  ? 2 : 7);
break;
case 33:
order=(asJSON ? -1 : 8);
break;
}
if (asV3000) {
mol.append$S("M  V30 ").appendI$I(n).append$S(" ").appendI$I(order).append$S(" ").appendI$I(a1).append$S(" ").appendI$I(a2).appendC$C("\n");
} else if (asJSON) {
if (n != 1) mol.append$S(",");
mol.append$S("{\"b\":").appendI$I(a1 - 1).append$S(",\"e\":").appendI$I(a2 - 1);
if (order != 1) {
mol.append$S(",\"o\":");
if (order < 0) {
mol.appendF$F(-order / 2.0);
} else {
mol.appendI$I(order);
}}mol.append$S("}");
} else {
$I$(3).rightJustify$javajs_util_SB$S$S(mol, "   ", "" + a1);
$I$(3).rightJustify$javajs_util_SB$S$S(mol, "   ", "" + a2);
mol.append$S("  ").appendI$I(order).append$S("  0  0  0\n");
}}, p$1);

Clazz.newMeth(C$, 'output80CharWrap$javajs_util_SB$S$I', function (mol, data, maxN) {
if (maxN < 80) data=$I$(3).rep$S$S$S(data, "\n", "|");
var lines=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(3).rep$S$S$S(data, "\n\n", "\n"), "\n"],$I$(3).trim$S$S), "\n"],$I$(3).split$S$S);
for (var i=0; i < lines.length; i++) p$1.outputLines$javajs_util_SB$S$I.apply(this, [mol, lines[i], maxN]);

}, p$1);

Clazz.newMeth(C$, 'outputLines$javajs_util_SB$S$I', function (mol, data, maxN) {
var done=false;
for (var i=0, n=data.length$(); i < n && !done ; i+=80) {
mol.append$S(data.substring$I$I(i, Math.min(i + maxN, n)));
if (!(done=(maxN != 80)) && i + 80 < n ) mol.append$S("+");
mol.append$S("\n");
}
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
