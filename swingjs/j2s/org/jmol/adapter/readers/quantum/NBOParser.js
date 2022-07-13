(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.Lst','javajs.util.PT','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NBOParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['haveBeta'],'O',['vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
return this;
});

Clazz.newMeth(C$, 'getAllStructures$S$javajs_util_Lst', function (output, list) {
if (output == null ) return null;
if (list == null ) list=Clazz.new_($I$(1,1));
output=$I$(2).rep$S$S$S(output, "the $CHOOSE", "");
this.getStructures$S$S$javajs_util_Lst(p$1.getBlock$S$S.apply(this, [output, "$CHOOSE"]), "CHOOSE", list);
this.getStructures$S$S$javajs_util_Lst(p$1.getBlock$S$S.apply(this, [output, "$NRTSTR"]), "NRTSTR", list);
this.getStructures$S$S$javajs_util_Lst(p$1.getBlock$S$S.apply(this, [output, "$NRTSTRA"]), "NRTSTRA", list);
this.getStructures$S$S$javajs_util_Lst(p$1.getBlock$S$S.apply(this, [output, "$NRTSTRB"]), "NRTSTRB", list);
p$1.getStructuresTOPO$S$S$javajs_util_Lst.apply(this, [p$1.getData$S$S$S$I.apply(this, [output, "TOPO matrix", "* Total *", 1]), "RSA", list]);
p$1.getStructuresTOPO$S$S$javajs_util_Lst.apply(this, [p$1.getData$S$S$S$I.apply(this, [output, "TOPO matrix", "* Total *", 2]), "RSB", list]);
return list;
});

Clazz.newMeth(C$, 'getBlock$S$S', function (output, key) {
var pt=output.indexOf$S(key);
var pt1=output.indexOf$S$I("$END", pt + 1);
return (pt < 0 || pt1 < 0  ? null : output.substring$I$I(pt + key.length$(), pt1));
}, p$1);

Clazz.newMeth(C$, 'getStructures46$SA$S$javajs_util_Lst$I', function (tokens, type, structures, nAtoms) {
if (tokens == null ) return;
var htData=Clazz.new_($I$(3,1));
structures.addLast$O(htData);
var matrix=Clazz.array(Integer.TYPE, [nAtoms, nAtoms]);
htData.put$O$O("matrix", matrix);
htData.put$O$O("type", type);
htData.put$O$O("spin", type);
htData.put$O$O("index", Integer.valueOf$I(0));
for (var n=tokens.length, i=0; i < n; i++) {
var org=tokens[i];
if (org.contains$CharSequence("(ry)")) break;
if (org.contains$CharSequence("*") || org.contains$CharSequence("(cr)") ) continue;
var isLP=org.endsWith$S("(lp)");
var isRY=org.endsWith$S("(ry)");
if (isLP || org.endsWith$S("(lv)") ) {
var ia=C$.getAtomIndex$S(org.substring$I$I(0, org.length$() - 4));
matrix[ia][ia]+=(isLP ? 1 : 10);
continue;
}var names=$I$(2).split$S$S(org, "-");
if (names.length == 3) {
System.out.println$S("NBOParser 3-center bonnd " + org + " ignored for Kekule structure" );
continue;
}var ia=C$.getAtomIndex$S(names[0]);
var ib=C$.getAtomIndex$S(names[1]);
matrix[ia][ib]++;
}
C$.dumpMatrix$S$I$IAA(type, 0, matrix);
}, 1);

Clazz.newMeth(C$, 'getAtomIndex$S', function (xx99) {
for (var n=xx99.length$(), i=n, val=0, pow=1, ch=0; --i >= 0; ) {
if ((ch=xx99.charAt$I(i).$c()) < 48 || ch > 57 ) return val - 1;
val+=(ch - 48) * pow;
pow*=10;
}
return 0;
}, 1);

Clazz.newMeth(C$, 'getStructuresTOPO$S$S$javajs_util_Lst', function (data, nrtType, list) {
if (data == null  || data.length$() == 0 ) return;
var parts=$I$(2).split$S$S(data, "Resonance");
if (parts.length < 2) return;
var pt=parts[0].lastIndexOf$S(".");
var nAtoms=$I$(2,"parseInt$S",[parts[0].substring$I$I(pt - 3, pt)]);
if (nAtoms < 0) return;
var tokens=$I$(2,"getTokens$S",[$I$(2,"rep$S$S$S",[$I$(2).rep$S$S$S(parts[0], ".", ".1"), "Atom", "-1"])]);
var raw=Clazz.array(Float.TYPE, [tokens.length]);
var n=$I$(2).parseFloatArrayInfested$SA$FA(tokens, raw);
var table=Clazz.array(Integer.TYPE, [nAtoms, nAtoms]);
var atom1=-1;
var atom2=0;
var atom0=0;
for (var i=0; i < n; i++) {
var f=raw[i];
if (f < 0 ) {
atom1=-1;
continue;
}if (f % 1 == 0 ) {
if (atom1 == -1) {
atom0=((f)|0);
atom1=-2;
}if (atom1 < 0) continue;
table[atom1][atom2++]=(f|0);
} else {
atom1=((f - 1)|0);
atom2=atom0 - 1;
}}
var matrix=null;
tokens=parts[1].split$S("\n");
var s="";
for (var i=3; i < tokens.length; i++) if (tokens[i].indexOf$S("--") < 0) s += tokens[i].substring$I(10) + "\n";

s=s.replace$C$C("-", " ");
s=$I$(2).rep$S$S$S(s, ".", ".1");
s=$I$(2,"rep$S$S$S",[s, "(", " -1 "]);
s=$I$(2).rep$S$S$S(s, ")", " -2 ");
s=$I$(2).rep$S$S$S(s, ",", " -3 ");
tokens=$I$(2).getTokens$S(s);
raw=Clazz.array(Float.TYPE, [tokens.length]);
n=$I$(2).parseFloatArrayInfested$SA$FA(tokens, raw);
var htData=null;
var dir=1;
atom1=atom2=-1;
for (var i=0, index=0; i < n; i++) {
var f=raw[i];
var remain=f % 1;
if (remain == 0 ) {
var v=(f|0);
switch (v) {
case -1:
dir=-1;
atom1=atom2=-1;
continue;
case -2:
break;
case -3:
if (atom1 < 0) continue;
break;
default:
if (atom1 < 0) {
atom1=atom2=v - 1;
} else {
atom2=v - 1;
}continue;
}
matrix[atom1][atom2]+=dir;
atom1=atom2=-1;
dir=1;
} else {
if (htData == null ) matrix=table;
C$.dumpMatrix$S$I$IAA(nrtType, index, matrix);
if (raw[i + 2] == 0 ) break;
list.addLast$O(htData=Clazz.new_($I$(3,1)));
s="" + ((f|0) * 100 + (((remain - 0.0999999) * 1000)|0));
var len=s.length$();
s=(len == 2 ? "0" : "") + s.substring$I$I(0, len - 2) + "." + s.substring$I(len - 2) ;
htData.put$O$O("weight", s);
htData.put$O$O("index", Integer.valueOf$I(index++));
htData.put$O$O("type", nrtType.toLowerCase$());
htData.put$O$O("spin", nrtType.indexOf$S("B") >= 0 ? "beta" : "alpha");
matrix=Clazz.array(Integer.TYPE, [nAtoms, nAtoms]);
htData.put$O$O("matrix", matrix);
for (var j=0; j < nAtoms; j++) for (var k=0; k < nAtoms; k++) matrix[j][k]=table[j][k];


}}
}, p$1);

Clazz.newMeth(C$, 'dumpMatrix$S$I$IAA', function (nrtType, index, matrix) {
System.out.println$S("NBOParser matrix " + nrtType + " " + index );
for (var j=0, nAtoms=matrix.length; j < nAtoms; j++) System.out.println$S($I$(2).toJSON$S$O(null, matrix[j]));

System.out.println$S("-------------------");
}, 1);

Clazz.newMeth(C$, 'getData$S$S$S$I', function (output, start, end, n) {
var pt=0;
var pt1=0;
for (var i=0; i < n; i++) {
pt=output.indexOf$S$I(start, pt1 + 1);
pt1=output.indexOf$S$I(end, pt + 1);
}
return (pt < 0 || pt1 < 0  ? null : output.substring$I$I(pt, pt1));
}, p$1);

Clazz.newMeth(C$, 'getStructures$S$S$javajs_util_Lst', function (data, nrtType, list) {
if (data == null  || data.length$() == 0 ) return 0;
var n=0;
try {
var ignoreSTR=(data.indexOf$S("ALPHA") >= 0);
if (!ignoreSTR && !data.contains$CharSequence("STR") ) data="STR " + data + " END" ;
nrtType=nrtType.toLowerCase$();
var spin=(nrtType.equals$O("nrtstrb") ? "beta" : "alpha");
if (nrtType.equals$O("choose")) nrtType=null;
var htData=null;
var tokens=$I$(2,"getTokens$S",[data.replace$C$C("\r", " ").replace$C$C("\n", " ").replace$C$C("\t", " ")]);
var lastType="";
var index=0;
for (var i=0, nt=tokens.length; i < nt; i++) {
var tok=tokens[i];
switch ("STR  =    ALPHABETA LONE BOND 3C".indexOf$S(tok)) {
case 0:
if (ignoreSTR) continue;
tok=spin;
case 10:
case 15:
list.addLast$O(htData=Clazz.new_($I$(3,1)));
if (!lastType.equals$O(tok)) {
lastType=tok;
index=0;
}htData.put$O$O("index", Integer.valueOf$I(index++));
htData.put$O$O("spin", spin=tok.toLowerCase$());
if (spin.equals$O("beta")) this.haveBeta=true;
htData.put$O$O("type", nrtType == null  ? "choose" + spin.substring$I$I(0, 1) : nrtType);
n++;
break;
case 5:
htData.put$O$O("weight", tokens[++i]);
break;
case 20:
var lone=Clazz.new_($I$(1,1));
htData.put$O$O("lone", lone);
while (!(tok=tokens[++i]).equals$O("END")){
var at1=Integer.parseInt$S(tok);
var nlp=Integer.parseInt$S(tokens[++i]);
lone.addLast$O(Clazz.array(Integer.TYPE, -1, [nlp, at1]));
}
break;
case 25:
var bonds=Clazz.new_($I$(1,1));
htData.put$O$O("bond", bonds);
while (!(tok=tokens[++i]).equals$O("END")){
var order="DTQ".indexOf$I(tok.charAt$I(0)) + 2;
var at1=Integer.parseInt$S(tokens[++i]);
var at2=Integer.parseInt$S(tokens[++i]);
bonds.addLast$O(Clazz.array(Integer.TYPE, -1, [order, at1, at2]));
}
break;
case 30:
var threeCenter=Clazz.new_($I$(1,1));
htData.put$O$O("3c", threeCenter);
while (!(tok=tokens[++i]).equals$O("END")){
var order="DTQ".indexOf$I(tok.charAt$I(0)) + 2;
var at1=Integer.parseInt$S(tokens[++i]);
var at2=Integer.parseInt$S(tokens[++i]);
var at3=Integer.parseInt$S(tokens[++i]);
threeCenter.addLast$O(Clazz.array(Integer.TYPE, -1, [order, at1, at2, at3]));
}
break;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
list.clear$();
return -1;
} else {
throw e;
}
}
return n;
});

Clazz.newMeth(C$, 'isOpenShell$', function () {
return this.haveBeta;
});

Clazz.newMeth(C$, 'getStructureMap$javajs_util_Lst$S$I', function (structureList, type, index) {
if (type == null  || structureList == null  ) return null;
type=type.toLowerCase$();
var spin=(type.indexOf$S("b") < 0 ? "alpha" : "beta");
for (var i=0; i < structureList.size$(); i++) {
var map=structureList.get$I(i);
if (spin.equals$O(map.get$O("spin")) && type.equals$O(map.get$O("type")) && (index < 0 || index == (map.get$O("index")).intValue$() )  ) {
return map;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'connectNBO$I$S', function (modelIndex, type) {
try {
if (type == null ) type="alpha";
type=type.toLowerCase$();
if (type.length$() == 0 || type.equals$O("46") ) type="alpha";
var map=this.vwr.ms.getModelAuxiliaryInfo$I(modelIndex);
this.haveBeta=map.containsKey$O("isOpenShell");
var list=map.get$O("nboStructures");
if (list == null  || list.size$() == 0 ) return false;
type=type.toLowerCase$();
var index=type.indexOf$S("_");
if (index > 0) {
if (list.size$() <= 2) {
var fname=map.get$O("fileName");
if (fname != null  && !fname.endsWith$S(".nbo") ) {
fname=fname.substring$I$I(0, fname.lastIndexOf$S(".")) + ".nbo";
this.getAllStructures$S$javajs_util_Lst(this.vwr.getAsciiFileOrNull$S(fname), list);
}}var tokens=$I$(2).split$S$S(type, "_");
index=$I$(2).parseInt$S(tokens[1]) - 1;
type=tokens[0];
} else {
index=0;
}var structureMap=C$.getStructureMap$javajs_util_Lst$S$I(list, type, index);
if (structureMap == null  || !p$1.setJmolLewisStructure$java_util_Map$I$I.apply(this, [structureMap, modelIndex, index + 1]) ) {
return false;
}map.put$O$O("nboStructure", structureMap);
} catch (e) {
e.printStackTrace$();
return false;
}
return true;
});

Clazz.newMeth(C$, 'setJmolLewisStructure$java_util_Map$I$I', function (structureMap, modelIndex, resNo) {
if (structureMap == null  || modelIndex < 0 ) return false;
var type=structureMap.get$O("type");
System.out.println$S("creating structure " + modelIndex + " " + type );
var bonds=structureMap.get$O("bond");
var lonePairs=structureMap.get$O("lone");
var matrix=structureMap.get$O("matrix");
var lplv=structureMap.get$O("lplv");
var bondCounts=structureMap.get$O("bondCounts");
var needLP=(lplv == null );
var bsAtoms=this.vwr.ms.getModelAtomBitSetIncludingDeleted$I$Z(modelIndex, false);
var atomCount=bsAtoms.cardinality$();
var iatom0=bsAtoms.nextSetBit$I(0);
if (matrix != null  && atomCount != matrix.length ) return false;
if (matrix != null ) C$.dumpMatrix$S$I$IAA(type, resNo, matrix);
if (needLP) {
structureMap.put$O$O("lplv", lplv=Clazz.array(Integer.TYPE, [atomCount]));
structureMap.put$O$O("bondCounts", bondCounts=Clazz.array(Integer.TYPE, [atomCount]));
}if (needLP) {
if (lonePairs != null ) {
for (var i=lonePairs.size$(); --i >= 0; ) {
var na=lonePairs.get$I(i);
var nlp=na[0];
var a1=na[1] - 1;
lplv[a1]=nlp;
}
} else if (matrix != null ) {
for (var i=atomCount; --i >= 0; ) {
lplv[i]=matrix[i][i];
}
}}this.vwr.ms.deleteModelBonds$I(modelIndex);
var mad=this.vwr.ms.getDefaultMadFromOrder$I(1);
if (bonds != null ) {
for (var i=bonds.size$(); --i >= 0; ) {
var oab=bonds.get$I(i);
var a1=iatom0 + oab[1] - 1;
var a2=iatom0 + oab[2] - 1;
var order=oab[0];
if (needLP) {
bondCounts[a1]+=order;
bondCounts[a2]+=order;
}this.vwr.ms.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(this.vwr.ms.at[a1], this.vwr.ms.at[a2], order, ($s$[0] = mad, $s$[0]), bsAtoms, 0, true, true);
}
} else if (matrix != null ) {
for (var i=0; i < atomCount - 1; i++) {
var m=matrix[i];
for (var j=i + 1; j < atomCount; j++) {
var order=m[j];
if (order == 0) continue;
System.out.println$S("adding bond " + this.vwr.ms.at[i + iatom0] + " " + this.vwr.ms.at[j + iatom0] );
this.vwr.ms.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(this.vwr.ms.at[i + iatom0], this.vwr.ms.at[j + iatom0], order, ($s$[0] = mad, $s$[0]), null, 0, false, true);
if (needLP) {
bondCounts[i]+=order;
bondCounts[j]+=order;
}}
}
}for (var i=0, ia=bsAtoms.nextSetBit$I(0); ia >= 0; ia=bsAtoms.nextSetBit$I(ia + 1), i++) {
var a=this.vwr.ms.at[ia];
a.setValence$I(bondCounts[i]);
a.setFormalCharge$I(0);
var nH=this.vwr.ms.getMissingHydrogenCount$org_jmol_modelset_Atom$Z(a, true);
if (a.getElementNumber$() == 6 && nH == 1 ) {
if (bondCounts[i] == 3 && lplv[i] % 10 == 0  || bondCounts[i] == 2 ) nH-=2;
}a.setFormalCharge$I(-nH);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'getNBOAtomLabel$org_jmol_modelset_Atom', function (a) {
var name=a.getAtomName$();
var modelIndex=a.getModelIndex$();
var structureMap=this.vwr.ms.getModelAuxiliaryInfo$I(modelIndex).get$O("nboStructure");
if (this.vwr == null  || structureMap == null  ) return name;
var lplv=structureMap.get$O("lplv");
var i=a.i - this.vwr.ms.am[modelIndex].firstAtomIndex;
var addFormalCharge=this.vwr.getBoolean$I(603979891);
var charge=(addFormalCharge ? this.vwr.ms.at[i].getFormalCharge$() : 0);
if (lplv[i] == 0 && charge == 0 ) return name;
if (lplv[i] % 10 > 0) name="<sup>(" + (lplv[i] % 10) + ")</sup>" + name ;
if (lplv[i] >= 10) name="*" + name;
if (addFormalCharge) {
if (charge != 0) name += "<sup>" + Math.abs(charge) + (charge > 0 ? "+" : charge < 0 ? "-" : "") + "</sup>" ;
}return name;
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
