(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),I$=[[0,'org.jmol.util.Logger','org.jmol.util.Parser','javajs.util.M3','javajs.util.PT','javajs.util.SB','javajs.util.Lst','org.jmol.api.JmolAdapter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VaspPoscarReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.haveAtomLabels=true;
this.radiusPt=-2147483648;
this.elementPt=-2147483648;
},1);

C$.$fields$=[['Z',['haveAtomLabels','atomsLabeledInline','quiet'],'F',['scaleFac'],'I',['ac','radiusPt','elementPt'],'S',['title'],'O',['atomLabels','javajs.util.Lst','defaultLabels','String[]','+elementLabel']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.isPrimitive=true;
this.readStructure$S(null);
this.continuing=false;
});

Clazz.newMeth(C$, 'readStructure$S', function (titleMsg) {
this.title=this.rd$().trim$();
var pt=this.title.indexOf$S("--params");
if ((pt=this.title.indexOf$S$I("& ", pt + 1)) >= 0) {
this.latticeType=this.title.substring$I$I(pt + 2, pt + 3);
(function(a,f){return f.apply(null,a)})(["AFLOW lattice:" + this.latticeType + " title=" + this.title ],$I$(1).info$S);
}this.readUnitCellVectors$();
this.readMolecularFormula$();
this.readCoordinates$();
this.asc.setAtomSetName$S(this.title + (titleMsg == null  ? "" : "[" + titleMsg + "]" ));
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (!this.haveAtomLabels && !this.atomsLabeledInline ) this.appendLoadNote$S("VASP POSCAR reader using pseudo atoms Al B C Db...");
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'readUnitCellVectors$', function () {
this.setSpaceGroupName$S("P1");
this.setFractionalCoordinates$Z(true);
this.scaleFac=this.parseFloatStr$S(this.rdline$().trim$());
var isVolume=(this.scaleFac < 0 );
if (isVolume) this.scaleFac=Math.pow(-this.scaleFac, 0.3333333333333333);
var unitCellData=Clazz.array(Float.TYPE, [9]);
var s=this.rdline$() + " " + this.rdline$() + " " + this.rdline$() ;
$I$(2).parseStringInfestedFloatArray$S$javajs_util_BS$FA(s, null, unitCellData);
if (isVolume) {
var m=$I$(3).newA9$FA(unitCellData);
this.scaleFac /= m.determinant3$();
}if (this.scaleFac != 1 ) for (var i=0; i < unitCellData.length; i++) unitCellData[i] *= this.scaleFac;

this.addExplicitLatticeVector$I$FA$I(0, unitCellData, 0);
this.addExplicitLatticeVector$I$FA$I(1, unitCellData, 3);
this.addExplicitLatticeVector$I$FA$I(2, unitCellData, 6);
});

Clazz.newMeth(C$, 'readMolecularFormula$', function () {
if (this.elementLabel == null ) this.elementLabel=(function(a,f){return f.apply(null,a)})([this.discardLinesUntilNonBlank$()],$I$(4).getTokens$S);
var elementCounts;
if ($I$(4).parseInt$S(this.elementLabel[0]) == -2147483648) {
this.atomsLabeledInline=false;
elementCounts=(function(a,f){return f.apply(null,a)})([this.rdline$()],$I$(4).getTokens$S);
while (this.line != null  && (elementCounts.length == 0 || this.parseIntStr$S(elementCounts[0]) == -2147483648 ) )elementCounts=(function(a,f){return f.apply(null,a)})([this.rdline$()],$I$(4).getTokens$S);

} else {
elementCounts=this.elementLabel;
this.elementLabel=$I$(4).split$S$S(this.title, " ");
if (this.elementLabel.length != elementCounts.length || this.elementLabel[0].length$() > 2 ) {
this.elementLabel=$I$(4).split$S$S("Al B C Db Eu F Ga Hf I K Li Mn N O P Ru S Te U V W Xe Yb Zn", " ");
this.haveAtomLabels=false;
}}var labels=this.elementLabel;
var mf=Clazz.new_($I$(5,1));
this.atomLabels=Clazz.new_($I$(6,1));
this.ac=0;
for (var i=0; i < elementCounts.length; i++) {
var n=Integer.parseInt$S(elementCounts[i]);
this.ac+=n;
var label=labels[i];
mf.append$S(" ").append$S(label).appendI$I(n);
for (var j=n; --j >= 0; ) this.atomLabels.addLast$O(label);

}
var s=mf.toString();
if (!this.quiet) this.appendLoadNote$S(this.ac + " atoms identified for" + s );
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(s);
});

Clazz.newMeth(C$, 'readCoordinates$', function () {
var isSelective=this.discardLinesUntilNonBlank$().toLowerCase$().contains$CharSequence("selective");
if (isSelective) this.rd$();
var isCartesian=(this.line.toLowerCase$().contains$CharSequence("cartesian"));
if (isCartesian) this.setFractionalCoordinates$Z(false);
for (var i=0; i < this.ac; i++) {
var radius=NaN;
var tokens=(function(a,f){return f.apply(null,a)})([this.rdline$()],$I$(4).getTokens$S);
if (this.radiusPt == -2147483648) {
for (var j=tokens.length; --j > 2; ) if (tokens[j].equals$O("radius")) {
this.radiusPt=j + 1;
} else if (this.getElement$S(tokens[j]) != null ) {
this.elementPt=j;
this.atomsLabeledInline=true;
}
}if (this.radiusPt >= 0) radius=this.parseFloatStr$S(tokens[this.radiusPt]);
var label=(this.atomsLabeledInline ? tokens[this.elementPt] : this.atomLabels.get$I(i));
if (isCartesian) for (var j=0; j < 3; j++) tokens[j]="" + new Float(this.parseFloatStr$S(tokens[j]) * this.scaleFac).toString();

var atom=this.addAtomXYZSymName$SA$I$S$S(tokens, 0, null, label);
if (!Float.isNaN$F(radius)) atom.radius=radius * this.scaleFac;
if (this.asc.bsAtoms != null ) this.asc.bsAtoms.set$I(atom.index);
}
});

Clazz.newMeth(C$, 'getElement$S', function (token) {
var s=null;
switch (token.length$()) {
default:
s=(token.length$() > 2 ? token.substring$I$I(0, 2) : null);
if (s != null  && $I$(7).getElementNumber$S(s) >= 0 ) return s;
case 1:
if ((function(a,f){return f.apply(null,a)})([s=token.substring$I(0)],$I$(7).getElementNumber$S) >= 0) return s;
case 0:
return null;
}
});

Clazz.newMeth(C$, 'rdline$', function () {
this.rd$();
if (this.line != null  && this.line.startsWith$S("[") ) this.line=this.line.substring$I(this.line.indexOf$S("]") + 1).trim$();
return this.line;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
