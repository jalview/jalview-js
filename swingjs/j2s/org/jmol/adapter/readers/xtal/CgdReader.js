(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.Lst','org.jmol.util.Logger','javajs.util.PT','java.util.Hashtable','javajs.util.P3','javajs.util.M3','org.jmol.adapter.smarter.Bond']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CgdReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['noBondSym'],'S',['lastName'],'O',['tokens','String[]','htEdges','java.util.Map','edgeData','javajs.util.Lst']]
,['O',['vecs','javajs.util.V3[]']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setFractionalCoordinates$Z(true);
this.asc.setNoAutoBond$();
this.asc.vibScale=1;
this.forceSymmetry$Z(!this.checkFilterKey$S("NOPACK"));
this.noBondSym=this.checkFilterKey$S("NOBONDSYM");
});

Clazz.newMeth(C$, 'checkLine$', function () {
this.line=this.line.trim$();
if (this.line.length$() == 0 || this.line.startsWith$S("#") ) return true;
if (!Character.isLetter$C(this.line.charAt$I(0))) this.line=this.lastName + " " + this.line ;
this.tokens=this.getTokens$();
if (this.tokens.length > 0) {
this.lastName=this.tokens[0].toUpperCase$();
var pt="NAME |CELL |GROUP|ATOM |EDGE |".indexOf$S(this.lastName);
if (this.tokens.length > 1 && (pt == 0 || this.doProcessLines ) ) switch (pt) {
case 0:
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
this.applySymmetryAndSetTrajectory$();
this.setFractionalCoordinates$Z(true);
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(this.line.substring$I(6).trim$());
this.htEdges=null;
this.edgeData=null;
break;
case 6:
for (var i=0; i < 6; i++) this.setUnitCellItem$I$F(i, (i < 3 ? 10 : 1) * this.parseFloatStr$S(this.tokens[i + 1]));

break;
case 12:
this.setSpaceGroupName$S("bilbao:" + p$1.group$S.apply(this, [this.tokens[1]]));
break;
case 18:
p$1.atom.apply(this, []);
break;
case 24:
if (!this.doApplySymmetry) break;
if (this.edgeData == null ) this.edgeData=Clazz.new_($I$(2,1));
this.edgeData.addLast$O(this.line);
break;
}
}return true;
});

Clazz.newMeth(C$, 'group$S', function (name) {
var name0=null;
if (name.charAt$I(0) == "\"") name=name.substring$I$I(1, name.length$() - 1);
var pt=";P2=P121;P21=P1211;C2=C121;A2=A121;I2=I121;Pm=P1m1;Pc=P1c1;Pn=P1n1;Pa=P1a1;Cm=C1m1;Am=A1m1;Im=I1m1;Cc=C1c1;An=A1n1;Ia=I1a1;Aa=A1a1;Cn=C1n1;Ic=I1c1;P2/m=P12/m1;P21/m=P121/m1;C2/m=C12/m1;A2/m=A12/m1;I2/m=I12/m1;P2/c=P12/c1;P2/n=P12/n1;P2/a=P12/a1;P21/c=P121/c1;P21/n=P121/n1;P21/a=P121/a1;C2/c=C12/c1;A2/n=A12/n1;I2/a=I12/a1;A2/a=A12/a1;C2/n=C12/n1;I2/c=I12/c1;Pm3=Pm-3;Pn3=Pn-3;Fm3=Fm-3;Fd3=Fd-3;Im3=Im-3;Pa3=Pa-3;Ia3=Ia-3;Pm3m=Pm-3m;Pn3n=Pn-3n;Pm3n=Pm-3n;Pn3m=Pn-3m;Fm3m=Fm-3m;Fm3c=Fm-3c;Fd3m=Fd-3m;Fd3c=Fd-3c;Im3m=Im-3m;Ia3d=Ia-3d;".indexOf$S(";" + name + "=" );
if (pt >= 0) {
name0=name;
name=";P2=P121;P21=P1211;C2=C121;A2=A121;I2=I121;Pm=P1m1;Pc=P1c1;Pn=P1n1;Pa=P1a1;Cm=C1m1;Am=A1m1;Im=I1m1;Cc=C1c1;An=A1n1;Ia=I1a1;Aa=A1a1;Cn=C1n1;Ic=I1c1;P2/m=P12/m1;P21/m=P121/m1;C2/m=C12/m1;A2/m=A12/m1;I2/m=I12/m1;P2/c=P12/c1;P2/n=P12/n1;P2/a=P12/a1;P21/c=P121/c1;P21/n=P121/n1;P21/a=P121/a1;C2/c=C12/c1;A2/n=A12/n1;I2/a=I12/a1;A2/a=A12/a1;C2/n=C12/n1;I2/c=I12/c1;Pm3=Pm-3;Pn3=Pn-3;Fm3=Fm-3;Fd3=Fd-3;Im3=Im-3;Pa3=Pa-3;Ia3=Ia-3;Pm3m=Pm-3m;Pn3n=Pn-3n;Pm3n=Pm-3n;Pn3m=Pn-3m;Fm3m=Fm-3m;Fm3c=Fm-3c;Fd3m=Fd-3m;Fd3c=Fd-3c;Im3m=Im-3m;Ia3d=Ia-3d;".substring$I$I(";P2=P121;P21=P1211;C2=C121;A2=A121;I2=I121;Pm=P1m1;Pc=P1c1;Pn=P1n1;Pa=P1a1;Cm=C1m1;Am=A1m1;Im=I1m1;Cc=C1c1;An=A1n1;Ia=I1a1;Aa=A1a1;Cn=C1n1;Ic=I1c1;P2/m=P12/m1;P21/m=P121/m1;C2/m=C12/m1;A2/m=A12/m1;I2/m=I12/m1;P2/c=P12/c1;P2/n=P12/n1;P2/a=P12/a1;P21/c=P121/c1;P21/n=P121/n1;P21/a=P121/a1;C2/c=C12/c1;A2/n=A12/n1;I2/a=I12/a1;A2/a=A12/a1;C2/n=C12/n1;I2/c=I12/c1;Pm3=Pm-3;Pn3=Pn-3;Fm3=Fm-3;Fd3=Fd-3;Im3=Im-3;Pa3=Pa-3;Ia3=Ia-3;Pm3m=Pm-3m;Pn3n=Pn-3n;Pm3n=Pm-3n;Pn3m=Pn-3m;Fm3m=Fm-3m;Fm3c=Fm-3c;Fd3m=Fd-3m;Fd3c=Fd-3c;Im3m=Im-3m;Ia3d=Ia-3d;".indexOf$S$I("=", pt) + 1, ";P2=P121;P21=P1211;C2=C121;A2=A121;I2=I121;Pm=P1m1;Pc=P1c1;Pn=P1n1;Pa=P1a1;Cm=C1m1;Am=A1m1;Im=I1m1;Cc=C1c1;An=A1n1;Ia=I1a1;Aa=A1a1;Cn=C1n1;Ic=I1c1;P2/m=P12/m1;P21/m=P121/m1;C2/m=C12/m1;A2/m=A12/m1;I2/m=I12/m1;P2/c=P12/c1;P2/n=P12/n1;P2/a=P12/a1;P21/c=P121/c1;P21/n=P121/n1;P21/a=P121/a1;C2/c=C12/c1;A2/n=A12/n1;I2/a=I12/a1;A2/a=A12/a1;C2/n=C12/n1;I2/c=I12/c1;Pm3=Pm-3;Pn3=Pn-3;Fm3=Fm-3;Fd3=Fd-3;Im3=Im-3;Pa3=Pa-3;Ia3=Ia-3;Pm3m=Pm-3m;Pn3n=Pn-3n;Pm3n=Pm-3n;Pn3m=Pn-3m;Fm3m=Fm-3m;Fm3c=Fm-3c;Fd3m=Fd-3m;Fd3c=Fd-3c;Im3m=Im-3m;Ia3d=Ia-3d;".indexOf$S$I(";", pt + 1));
}$I$(3,"info$S",["CgdReader using GROUP " + name + (name0 == null  ? "" : " alias of " + name0) ]);
return name;
}, p$1);

Clazz.newMeth(C$, 'atom', function () {
var name=p$1.getName$S.apply(this, [this.tokens[1]]);
var edgeCount=this.parseIntStr$S(this.tokens[2]);
for (var i=3; i < 6; i++) if (this.tokens[i].indexOf$S("/") >= 0) this.tokens[i]="" + new Float($I$(4).parseFloatFraction$S(this.tokens[i])).toString();

var a=this.addAtomXYZSymName$SA$I$S$S(this.tokens, 3, null, name);
if (!this.doApplySymmetry) return;
this.asc.atomSymbolicMap.put$O$O(name, a);
this.asc.addVibrationVector$I$F$F$F(a.index, 1.0, 3.0, 7.0);
if (this.htEdges == null ) this.htEdges=Clazz.new_($I$(5,1));
this.htEdges.put$O$O(a, Clazz.array($I$(1), [edgeCount]));
}, p$1);

Clazz.newMeth(C$, 'getName$S', function (name) {
return (name.charAt$I(0) == "\"" ? name.substring$I$I(1, name.length$() - 1) : Character.isDigit$C(name.charAt$I(0)) ? "C" + name : name);
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderASCR$();
if (this.doApplySymmetry) p$1.finalizeNet.apply(this, []);
});

Clazz.newMeth(C$, 'finalizeEdges', function () {
var p;
var name;
var a;
var atomEdges;
for (var j=0; j < this.edgeData.size$(); j++) {
this.tokens=$I$(4,"getTokens$S",[this.line=this.edgeData.get$I(j)]);
switch (this.tokens.length) {
case 3:
name=p$1.getName$S.apply(this, [this.tokens[1]]);
a=this.asc.getAtomFromName$S(name);
atomEdges=this.htEdges.get$O(a);
p=this.asc.getAtomFromName$S(p$1.getName$S.apply(this, [this.tokens[2]]));
break;
case 5:
name=p$1.getName$S.apply(this, [this.tokens[1]]);
a=this.asc.getAtomFromName$S(name);
atomEdges=this.htEdges.get$O(a);
p=p$1.getCoord$I.apply(this, [2]);
break;
case 7:
atomEdges=this.htEdges.get$O(p$1.findAtom$javajs_util_P3.apply(this, [p$1.getCoord$I.apply(this, [1])]));
p=p$1.getCoord$I.apply(this, [4]);
break;
default:
$I$(3).error$S("EDGE record skipped: " + this.line);
continue;
}
for (var i=0, n=atomEdges.length; i < n; i++) if (atomEdges[i] == null ) {
atomEdges[i]=$I$(1).newV$javajs_util_T3(p);
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'getCoord$I', function (i) {
return $I$(6,"new3$F$F$F",[$I$(4).parseFloatFraction$S(this.tokens[i++]), $I$(4).parseFloatFraction$S(this.tokens[i++]), $I$(4).parseFloatFraction$S(this.tokens[i++])]);
}, p$1);

Clazz.newMeth(C$, 'finalizeNet', function () {
p$1.finalizeEdges.apply(this, []);
var m=Clazz.new_($I$(7,1));
var pt=Clazz.new_($I$(6,1));
for (var i=0, n=this.asc.ac; i < n; i++) {
var a=this.asc.atoms[i];
var a0=this.asc.atoms[a.atomSite];
if (this.noBondSym && a !== a0  ) continue;
var edges=this.htEdges.get$O(a0);
if (edges == null ) continue;
var ix=(a.vib.x|0) + 7;
var iy=(a.vib.y|0) + 7;
var iz=(a.vib.z|0) + 7;
m.setRowV$I$javajs_util_T3(0, C$.vecs[ix]);
m.setRowV$I$javajs_util_T3(1, C$.vecs[iy]);
m.setRowV$I$javajs_util_T3(2, C$.vecs[iz]);
for (var j=0, n1=edges.length; j < n1; j++) {
pt.sub2$javajs_util_T3$javajs_util_T3(edges[j], a0);
m.rotate$javajs_util_T3(pt);
pt.add$javajs_util_T3(a);
var b=p$1.findAtom$javajs_util_P3.apply(this, [pt]);
if (b != null ) this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(8,1).c$$I$I$I,[a.index, b.index, 1]));
 else if (pt.x >= 0  && pt.x <= 1   && pt.y >= 0   && pt.y <= 1   && pt.z >= 0   && pt.z <= 1  ) $I$(3,"error$S",[" not found: i=" + i + "  pt=" + pt + " for a=" + a + "\n a0=" + a0 + " edge[" + j + "]=" + edges[j] + "\n a.vib=" + a.vib + "\n m=" + m ]);
}
a.vib=null;
}
}, p$1);

Clazz.newMeth(C$, 'findAtom$javajs_util_P3', function (pt) {
for (var i=this.asc.ac; --i >= 0; ) if (this.asc.atoms[i].distanceSquared$javajs_util_T3(pt) < 1.0E-5 ) return this.asc.atoms[i];

return null;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.vecs=Clazz.array($I$(1), -1, [$I$(1).new3$F$F$F(0, 0, -1), $I$(1).new3$F$F$F(1, 0, -1), null, $I$(1).new3$F$F$F(0, 1, -1), $I$(1).new3$F$F$F(0, -1, 0), $I$(1).new3$F$F$F(1, -1, 0), $I$(1).new3$F$F$F(-1, 0, 0), null, $I$(1).new3$F$F$F(1, 0, 0), $I$(1).new3$F$F$F(-1, 1, 0), $I$(1).new3$F$F$F(0, 1, 0), $I$(1).new3$F$F$F(0, -1, 1), null, $I$(1).new3$F$F$F(-1, 0, 1), $I$(1).new3$F$F$F(0, 0, 1)]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
