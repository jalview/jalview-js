(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.util.SB','javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.Atom','org.jmol.util.Escape','org.jmol.util.Tensor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MagresReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentBlock=-1;
this.magresUnits=Clazz.new_($I$(1,1));
this.interactionTensors=Clazz.new_($I$(2,1));
this.header=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['I',['currentBlock'],'O',['cellParams','float[]','magresUnits','java.util.Map','interactionTensors','javajs.util.Lst','header','javajs.util.SB']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setFractionalCoordinates$Z(false);
this.ignoreFileSpaceGroupName=true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.asc.setInfo$S$O("fileHeader", this.header.toString());
this.finalizeReaderASCR$();
if (this.interactionTensors.size$() > 0) this.asc.setCurrentModelInfo$S$O("interactionTensors", this.interactionTensors);
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (!p$1.trimLine.apply(this, [])) return true;
switch (p$1.checkBlock.apply(this, [])) {
case 0:
this.header.append$S(this.line).append$S("\n");
this.appendLoadNote$S(this.line);
break;
case 1:
if (this.cellParams == null  && this.line.startsWith$S("lattice") ) return p$1.readCellParams.apply(this, []);
if (this.line.startsWith$S("symmetry")) return p$1.readSymmetry.apply(this, []);
if (this.line.startsWith$S("units")) return p$1.setUnits$Z.apply(this, [false]);
if (this.line.startsWith$S("atom")) return p$1.readAtom.apply(this, []);
break;
case 2:
if (this.line.startsWith$S("units")) return p$1.setUnits$Z.apply(this, [true]);
return p$1.readTensor.apply(this, []);
}
return true;
});

Clazz.newMeth(C$, 'trimLine', function () {
var pt=this.line.indexOf$S("#");
if (pt >= 0) this.line=this.line.substring$I$I(0, pt);
this.line=this.line.trim$();
return (this.line.length$() > 0);
}, p$1);

Clazz.newMeth(C$, 'checkBlock', function () {
if (!(this.line.startsWith$S("<") && this.line.endsWith$S(">") ) && !(this.line.startsWith$S("[") && this.line.endsWith$S("]") ) ) return this.currentBlock;
this.line=$I$(4).rep$S$S$S(this.line, "<", "[");
this.line=$I$(4).rep$S$S$S(this.line, ">", "]");
switch ((("...............[calculation]..[/calculation].[atoms]........[/atoms].......[magres].......[/magres]......").indexOf$S(this.line + ".")/15|0)) {
case 0:
$I$(5).info$S("block indicator ignored: " + this.line);
break;
case 1:
if (this.currentBlock == -1) this.currentBlock=0;
break;
case 2:
if (this.currentBlock == 0) this.currentBlock=-1;
break;
case 3:
if (this.currentBlock == -1) {
this.currentBlock=1;
this.asc.newAtomSet$();
this.magresUnits=Clazz.new_($I$(1,1));
}break;
case 4:
if (this.currentBlock == 1) this.currentBlock=-1;
break;
case 5:
if (this.currentBlock == -1) {
this.currentBlock=2;
this.magresUnits=Clazz.new_($I$(1,1));
this.asc.setCurrentModelInfo$S$O("magresUnits", this.magresUnits);
}break;
case 6:
if (this.currentBlock == 2) this.currentBlock=-1;
break;
}
return -2;
}, p$1);

Clazz.newMeth(C$, 'setUnits$Z', function (isMagresBlock) {
var tokens=this.getTokens$();
var id=tokens[1];
if (isMagresBlock) this.appendLoadNote$S("Ellipsoid set " + $I$(4).esc$S(id) + ": " + (id.startsWith$S("ms") ? "Magnetic Shielding" : id.startsWith$S("efg") ? "Electric Field Gradient" : id.startsWith$S("isc") ? "J-Coupling" : "?") );
this.magresUnits.put$O$O(id, tokens[2]);
return true;
}, p$1);

Clazz.newMeth(C$, 'readSymmetry', function () {
this.setSymmetryOperator$S(this.getTokens$()[1]);
return true;
}, p$1);

Clazz.newMeth(C$, 'readCellParams', function () {
var tokens=this.getTokens$();
this.cellParams=Clazz.array(Float.TYPE, [9]);
for (var i=0; i < 9; i++) this.cellParams[i]=this.parseFloatStr$S(tokens[i + 1]);

this.addExplicitLatticeVector$I$FA$I(0, this.cellParams, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.cellParams, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.cellParams, 6);
this.setSpaceGroupName$S("P1");
return true;
}, p$1);

Clazz.newMeth(C$, 'readAtom', function () {
var units=this.magresUnits.get$O("atom");
if (units == null ) return true;
var f=(units.startsWith$S("A") ? 1 : 0.5291772);
var tokens=this.getTokens$();
var atom=Clazz.new_($I$(6,1));
var pt=1;
atom.elementSymbol=tokens[pt++];
atom.atomName=C$.getAtomName$S$S(tokens[pt++], tokens[pt++]);
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(atom);
var x=this.parseFloatStr$S(tokens[pt++]) * f;
var y=this.parseFloatStr$S(tokens[pt++]) * f;
var z=this.parseFloatStr$S(tokens[pt++]) * f;
atom.set$F$F$F(x, y, z);
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
return true;
}, p$1);

Clazz.newMeth(C$, 'getAtomName$S$S', function (name, index) {
return name + "_" + index ;
}, 1);

Clazz.newMeth(C$, 'readTensor', function () {
var tokens=this.getTokens$();
var type=tokens[0];
var units=this.magresUnits.get$O(type);
if (units == null ) {
$I$(5).warn$S(type + " ignored; no units defined; line: " + this.line );
return true;
}var isIsc=type.startsWith$S("isc");
if (tokens.length == 10) {
this.magresUnits.remove$O(type);
var data=Clazz.array(Float.TYPE, [9]);
for (var i=0; i < 9; ) data[i]=this.parseFloatStr$S(tokens[++i]);

(function(a,f){return f.apply(null,a)})(["Magres reader creating magres_" + type + ": " + $I$(7).eAF$FA(data) ],$I$(5).info$S);
this.asc.setCurrentModelInfo$S$O("magres_" + type, data);
}var atomName1=C$.getAtomName$S$S(tokens[1], tokens[2]);
var pt=3;
var atomName2=(isIsc ? C$.getAtomName$S$S(tokens[pt++], tokens[pt++]) : null);
if (atomName1.equals$O(atomName2)) {
(function(a,f){return f.apply(null,a)})([type + " ignored; atom1 == atom2 for " + atomName1 + " line: " + this.line ],$I$(5).warn$S);
return true;
}var id=atomName1;
if (atomName2 != null ) id += "//" + atomName2;
var a=this.fill3x3$SA$I(tokens, pt);
var a1=this.asc.getAtomFromName$S(atomName1);
if (a1 == null ) return true;
var a2=null;
var t=Clazz.new_($I$(8,1)).setFromAsymmetricTensor$DAA$S$S(a, type, id);
if (atomName2 == null ) {
a1.addTensor$org_jmol_util_Tensor$S$Z(t, null, false);
} else {
a2=this.asc.getAtomFromName$S(atomName2);
if (a2 == null ) return true;
this.interactionTensors.addLast$O(t);
}t.setAtomIndexes$I$I(a1.index, (a2 == null  ? -1 : a2.index));
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
