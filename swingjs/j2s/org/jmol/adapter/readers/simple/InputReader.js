(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','javajs.util.P3','javajs.util.V3','javajs.util.P4','javajs.util.PT','org.jmol.adapter.smarter.Bond','org.jmol.util.Logger','org.jmol.adapter.smarter.Atom','org.jmol.api.JmolAdapter','javajs.util.Quat','javajs.util.Measure']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "InputReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ac=0;
this.vAtoms=null;
this.atomMap=null;
this.tokens=null;
this.isJmolZformat=false;
this.lineBuffer=null;
this.symbolicMap=null;
this.isMopac=false;
this.isHeader=false;
this.firstLine=false;
this.pt0=null;
this.v1=null;
this.v2=null;
this.plane1=null;
this.plane2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vAtoms=Clazz.new_($I$(1));
this.atomMap=Clazz.new_($I$(2));
this.lineBuffer=Clazz.new_($I$(1));
this.symbolicMap=Clazz.new_($I$(2));
this.isHeader=true;
this.firstLine=true;
this.pt0=Clazz.new_($I$(3));
this.v1=Clazz.new_($I$(4));
this.v2=Clazz.new_($I$(4));
this.plane1=Clazz.new_($I$(5));
this.plane2=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.firstLine) {
this.firstLine=false;
var tokens=this.getTokens$();
if (tokens.length == 3 && this.parseIntStr$S(tokens[0]) > 0  && this.parseIntStr$S(tokens[1]) > 0  && this.parseIntStr$S(tokens[2]) > 0 ) {
p$1.readConFile.apply(this, []);
return this.continuing=false;
}}p$1.cleanLine.apply(this, []);
if (this.line.length$() <= 2) this.isHeader=false;
if (this.line.startsWith$S("#") || this.line.startsWith$S("*") || this.isMopac && this.isHeader   ) {
if (this.line.startsWith$S("#ZMATRIX")) this.isJmolZformat=this.line.toUpperCase$().indexOf$S("GAUSSIAN") < 0 && !(this.isMopac=(this.line.toUpperCase$().indexOf$S("MOPAC") >= 0)) ;
this.checkCurrentLineForScript$();
return true;
}if (this.line.indexOf$S("#") >= 0) this.line=this.line.substring$I$I(0, this.line.indexOf$S("#"));
if (this.line.indexOf$S(":") >= 0) return true;
if (this.line.contains$CharSequence("$molecule")) {
this.rd$();
return p$1.readBlock$S.apply(this, ["$end"]);
}if (this.line.startsWith$S("$")) return true;
if (this.line.contains$CharSequence("%mem")) {
this.discardLinesUntilBlank$();
this.discardLinesUntilBlank$();
this.rd$();
return p$1.readBlock$S.apply(this, [null]);
}if (this.line.contains$CharSequence("ATOMS cartesian")) {
return p$1.readBlock$S.apply(this, ["END"]);
}if (this.line.contains$CharSequence("geometry units angstroms")) {
return p$1.readBlock$S.apply(this, ["end"]);
}if (this.line.contains$CharSequence("&zmat")) {
return p$1.readBlock$S.apply(this, ["&"]);
}if (this.line.contains$CharSequence("%coords")) {
this.discardLinesUntilContains$S("coords");
return p$1.readBlock$S.apply(this, ["end"]);
}if (this.line.contains$CharSequence("GEOM=PQS")) {
return p$1.readBlock$S.apply(this, ["BASIS"]);
}if (this.line.contains$CharSequence("geometry={")) {
this.readLines$I(2);
return p$1.readBlock$S.apply(this, ["}"]);
}this.tokens=this.getTokens$();
if (this.tokens.length > 10) return p$1.readVFI.apply(this, []);
switch (this.tokens.length) {
case 1:
if (this.tokens[0].indexOf$S("=") < 0) {
this.lineBuffer.clear$();
break;
}this.tokens=$I$(6).split$S$S(this.tokens[0], "=");
case 2:
if (this.parseIntStr$S(this.line) > 0 && this.parseInt$() >= 0 ) {
p$1.readCFI.apply(this, []);
return (this.continuing=false);
}p$1.getSymbolic.apply(this, []);
return true;
case 10:
if (this.tokens[0].equals$O("0")) return (this.continuing=false);
if (this.tokens[1].indexOf$S(".") < 0) return true;
if (this.lineBuffer.size$() > 0 && this.lineBuffer.get$I(this.lineBuffer.size$() - 1).length < 8 ) this.lineBuffer.clear$();
break;
}
this.lineBuffer.addLast$TV(this.tokens);
return true;
});

Clazz.newMeth(C$, 'readConFile', function () {
this.rd$();
var map=Clazz.new_($I$(2));
var lstTokens=Clazz.new_($I$(1));
var n=0;
while (this.rd$() != null  && this.line.length$() > 40 ){
n++;
var tokens=this.getTokens$();
lstTokens.addLast$TV(tokens);
map.put$TK$TV(tokens[1], this.addAtomXYZSymName$SA$I$S$S(tokens, 2, tokens[0], null));
}
for (var i=0; i < n; i++) {
var tokens=lstTokens.get$I(i);
var a=map.get$O(tokens[1]);
for (var j=6; j < tokens.length; j++) this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(7).c$$I$I$I,[a.index, map.get$O(tokens[j]).index, 1]));

}
}, p$1);

Clazz.newMeth(C$, 'readCFI', function () {
this.tokens=this.getTokens$();
var nAtoms=(p$1.getValue$I.apply(this, [0])|0);
var nBonds=(p$1.getValue$I.apply(this, [1])|0);
var map=Clazz.new_($I$(2));
for (var i=0; i < nAtoms; i++) {
this.tokens=$I$(6).getTokens$S(this.rd$());
if (this.tokens[1].equals$O("0") || this.tokens[1].equals$O("2") ) continue;
var a=this.addAtomXYZSymName$SA$I$S$S(this.tokens, 2, null, null);
a.elementNumber=($s$[0] = p$1.getValue$I.apply(this, [1]), $s$[0]);
map.put$TK$TV(this.tokens[0], a);
}
var bonds=this.fillFloatArray$S$I$FA(null, 0, Clazz.array(Float.TYPE, [nBonds * 2]));
var orders=this.fillFloatArray$S$I$FA(null, 0, Clazz.array(Float.TYPE, [nBonds]));
for (var i=0, pt=0; i < nBonds; i++) this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(7).c$$I$I$I,[map.get$O("" + (bonds[pt++]|0)).index, map.get$O("" + (bonds[pt++]|0)).index, (orders[i]|0)]));

}, p$1);

Clazz.newMeth(C$, 'readVFI', function () {
var map=Clazz.new_($I$(2));
var bonds=Clazz.new_($I$(1));
while (this.tokens != null  && this.tokens.length > 0 ){
for (var i=this.tokens.length; --i >= 11; ) bonds.addLast$TV(Clazz.array(String, -1, [this.tokens[3], this.tokens[i]]));

var id=this.tokens[3];
this.tokens=(this.tokens[2].equals$O("0") ? Clazz.array(String, -1, [this.tokens[4]]) : this.tokens[1].equals$O("0") ? Clazz.array(String, -1, [this.tokens[4], this.tokens[2], this.tokens[5]]) : this.tokens[0].equals$O("0") ? Clazz.array(String, -1, [this.tokens[4], this.tokens[2], this.tokens[5], this.tokens[1], this.tokens[7]]) : Clazz.array(String, -1, [this.tokens[4], this.tokens[2], this.tokens[5], this.tokens[1], this.tokens[7], this.tokens[0], this.tokens[9]]));
var atom=p$1.getAtom.apply(this, []);
map.put$TK$TV(id, atom);
this.tokens=$I$(6).getTokens$S(this.rd$());
}
for (var i=bonds.size$(); --i >= 0; ) {
var b=bonds.get$I(i);
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(7).c$$I$I$I,[map.get$O(b[0]).index, map.get$O(b[1]).index, 1]));
}
return (this.continuing=false);
}, p$1);

Clazz.newMeth(C$, 'readBlock$S', function (strEnd) {
this.lineBuffer.clear$();
while (this.rd$() != null  && p$1.cleanLine.apply(this, []) != null   && (strEnd == null  ? this.line.length$() > 0 : this.line.indexOf$S(strEnd) < 0) )this.lineBuffer.addLast$TV(this.getTokens$());

return (this.continuing=false);
}, p$1);

Clazz.newMeth(C$, 'cleanLine', function () {
this.line=this.line.replace$C$C(",", " ");
var pt1;
var pt2;
while ((pt1=this.line.indexOf$I("(")) >= 0 && (pt2=this.line.indexOf$I$I("(", pt1)) >= 0 )this.line=this.line.substring$I$I(0, pt1) + " " + this.line.substring$I(pt2 + 1) ;

return (this.line=this.line.trim$());
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
var firstLine=0;
for (var i=firstLine; i < this.lineBuffer.size$(); i++) if ((this.tokens=this.lineBuffer.get$I(i)).length > 0) p$1.getAtom.apply(this, []);

this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'getSymbolic', function () {
if (this.symbolicMap.containsKey$O(this.tokens[0])) return;
var f=this.parseFloatStr$S(this.tokens[1]);
this.symbolicMap.put$TK$TV(this.tokens[0], Float.valueOf$F(f));
$I$(8).info$S("symbolic " + this.tokens[0] + " = " + new Float(f).toString() );
}, p$1);

Clazz.newMeth(C$, 'getAtom', function () {
var atom=Clazz.new_($I$(9));
var element=this.tokens[0];
var i=element.length$();
while (--i >= 0 && $I$(6).isDigit$C(element.charAt$I(i)) ){
}
if (++i == 0) element=$I$(10).getElementSymbol$I(this.parseIntStr$S(element));
if (i == 0 || i == element.length$() ) {
atom.atomName=element + (this.ac + 1);
} else {
atom.atomName=element;
element=element.substring$I$I(0, i);
}if (this.isMopac && i != this.tokens[0].length$() ) element=this.tokens[0].substring$I(i) + element;
p$1.parseAtomTokens$org_jmol_adapter_smarter_Atom$S.apply(this, [atom, element]);
return atom;
}, p$1);

Clazz.newMeth(C$, 'parseAtomTokens$org_jmol_adapter_smarter_Atom$S', function (atom, element) {
this.setElementAndIsotope$org_jmol_adapter_smarter_Atom$S(atom, element);
if (this.tokens.length > 5 && this.tokens[1].indexOf$S(".") >= 0 ) {
var t=this.tokens;
var l=t.length;
this.tokens=(t[l - 3].equals$O("0") ? Clazz.array(String, -1, [t[0]]) : t[l - 2].equals$O("0") ? Clazz.array(String, -1, [t[0], t[l - 3], t[1]]) : t[l - 1].equals$O("0") ? Clazz.array(String, -1, [t[0], t[l - 3], t[1], t[l - 2], t[3]]) : Clazz.array(String, -1, [t[0], t[l - 3], t[1], t[l - 2], t[3], t[l - 1], t[5]]));
}var ia=p$1.getAtomIndex$I.apply(this, [1]);
var bondOrder=0;
switch (this.tokens.length) {
case 8:
case 6:
atom=p$1.getAtomGeneral$org_jmol_adapter_smarter_Atom$I$I.apply(this, [atom, ia, bondOrder=(p$1.getValue$I.apply(this, [this.tokens.length - 1])|0)]);
break;
case 5:
if (this.tokens[1].equals$O("0")) {
atom.set$F$F$F(p$1.getValue$I.apply(this, [2]), p$1.getValue$I.apply(this, [3]), p$1.getValue$I.apply(this, [4]));
break;
}case 7:
atom=p$1.getAtomGeneral$org_jmol_adapter_smarter_Atom$I$I.apply(this, [atom, ia, 0]);
break;
case 4:
if (p$1.getAtomIndex$I.apply(this, [1]) < 0) {
atom.set$F$F$F(p$1.getValue$I.apply(this, [1]), p$1.getValue$I.apply(this, [2]), p$1.getValue$I.apply(this, [3]));
break;
}bondOrder=(p$1.getValue$I.apply(this, [3])|0);
case 3:
if (this.ac != 1 || (ia=p$1.getAtomIndex$I.apply(this, [1])) != 0 ) {
atom=null;
} else {
atom.set$F$F$F(p$1.getValue$I.apply(this, [2]), 0, 0);
}break;
case 1:
if (this.ac != 0) atom=null;
 else atom.set$F$F$F(0, 0, 0);
break;
default:
atom=null;
}
if (atom == null ) throw Clazz.new_(Clazz.load('Exception').c$$S,["bad Z-Matrix line"]);
this.vAtoms.addLast$TV(atom);
this.atomMap.put$TK$TV(atom.atomName, Integer.valueOf$I(this.ac++));
if (element.startsWith$S("X") && $I$(10).getElementNumber$S(element) < 1 ) {
$I$(8).info$S("#dummy atom ignored: atom " + this.ac + " - " + atom.atomName );
} else {
this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
$I$(8).info$S(atom.atomName + " " + new Float(atom.x).toString() + " " + new Float(atom.y).toString() + " " + new Float(atom.z).toString() );
if (bondOrder < 0 || this.isJmolZformat && bondOrder > 0  ) this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(7).c$$I$I$I,[atom.index, this.vAtoms.get$I(ia).index, Math.abs(bondOrder)]));
}}, p$1);

Clazz.newMeth(C$, 'getAtomGeneral$org_jmol_adapter_smarter_Atom$I$I', function (atom, ia, bondOrder) {
var ib;
var ic;
if (this.tokens.length < 7 && this.ac != 2  || (ib=p$1.getAtomIndex$I.apply(this, [3])) < 0  || (ic=(this.tokens.length < 7 ? -2 : p$1.getAtomIndex$I.apply(this, [5]))) == -1 ) {
return null;
}var d=p$1.getValue$I.apply(this, [2]);
var theta1=p$1.getValue$I.apply(this, [4]);
var theta2=(this.tokens.length < 7 ? 3.4028235E38 : p$1.getValue$I.apply(this, [6]));
if (this.tokens.length == 8 && !this.isJmolZformat  && !this.isMopac  && bondOrder == 1 ) d=-Math.abs(d);
return atom=this.setAtom$org_jmol_adapter_smarter_Atom$I$I$I$F$F$F(atom, ia, ib, ic, d, theta1, theta2);
}, p$1);

Clazz.newMeth(C$, 'getSymbolic$S', function (key) {
var isNeg=key.startsWith$S("-");
var F=this.symbolicMap.get$O(isNeg ? key.substring$I(1) : key);
if (F == null ) return NaN;
var f=F.floatValue$();
return (isNeg ? -f : f);
}, p$1);

Clazz.newMeth(C$, 'getValue$I', function (i) {
var f=p$1.getSymbolic$S.apply(this, [this.tokens[i]]);
if (Float.isNaN$F(f)) {
f=this.parseFloatStr$S(this.tokens[i]);
if (Float.isNaN$F(f)) throw Clazz.new_(Clazz.load('Exception').c$$S,["Bad Z-matrix value: " + this.tokens[i]]);
}return f;
}, p$1);

Clazz.newMeth(C$, 'getAtomIndex$I', function (i) {
var name;
if (i >= this.tokens.length || (name=this.tokens[i]).indexOf$S(".") >= 0  || !$I$(6).isLetterOrDigit$C(name.charAt$I(0)) ) return -1;
var ia=this.parseIntStr$S(name);
if (ia <= 0 || name.length$() != ("" + ia).length$() ) {
var I=this.atomMap.get$O(name);
if (I == null ) {
for (i=this.vAtoms.size$(); --i >= 0; ) {
var atom=this.vAtoms.get$I(i);
if (atom.atomName.startsWith$S(name) && atom.atomName.length$() > name.length$()  && $I$(6).isDigit$C(atom.atomName.charAt$I(name.length$())) ) {
I=this.atomMap.get$O(atom.atomName);
break;
}}
}if (I == null ) ia=-1;
 else ia=I.intValue$();
} else {
ia--;
}return ia;
}, p$1);

Clazz.newMeth(C$, 'setAtom$org_jmol_adapter_smarter_Atom$I$I$I$F$F$F', function (atom, ia, ib, ic, d, theta1, theta2) {
if (Float.isNaN$F(theta1) || Float.isNaN$F(theta2) ) return null;
this.pt0.setT$javajs_util_T3(this.vAtoms.get$I(ia));
this.v1.sub2$javajs_util_T3$javajs_util_T3(this.vAtoms.get$I(ib), this.pt0);
this.v1.normalize$();
if (theta2 == 3.4028235E38 ) {
this.v2.set$F$F$F(0, 0, 1);
($I$(11).newVA$javajs_util_T3$F(this.v2, theta1)).transform2$javajs_util_T3$javajs_util_T3(this.v1, this.v2);
} else if (d >= 0 ) {
this.v2.sub2$javajs_util_T3$javajs_util_T3(this.vAtoms.get$I(ic), this.pt0);
this.v2.cross$javajs_util_T3$javajs_util_T3(this.v1, this.v2);
($I$(11).newVA$javajs_util_T3$F(this.v2, theta1)).transform2$javajs_util_T3$javajs_util_T3(this.v1, this.v2);
($I$(11).newVA$javajs_util_T3$F(this.v1, -theta2)).transform2$javajs_util_T3$javajs_util_T3(this.v2, this.v2);
} else {
$I$(12).getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(this.setAtom$org_jmol_adapter_smarter_Atom$I$I$I$F$F$F(atom, ia, ib, ic, -d, theta1, 0), this.v1, this.plane1);
$I$(12).getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(this.setAtom$org_jmol_adapter_smarter_Atom$I$I$I$F$F$F(atom, ia, ic, ib, -d, theta2, 0), this.v1, this.plane2);
var list=$I$(12).getIntersectionPP$javajs_util_P4$javajs_util_P4(this.plane1, this.plane2);
if (list.size$() == 0) return null;
this.pt0.setT$javajs_util_T3(list.get$I(0));
d=Math.sqrt(d * d - this.pt0.distanceSquared$javajs_util_T3(this.vAtoms.get$I(ia))) * Math.signum(theta1) * Math.signum(theta2) ;
this.v2.setT$javajs_util_T3(list.get$I(1));
}atom.scaleAdd2$F$javajs_util_T3$javajs_util_T3(d, this.v2, this.pt0);
return atom;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
