(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),p$1={},I$=[[0,'org.jmol.adapter.smarter.Atom','javajs.util.PT','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XmlOdysseyReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modelName=null;
this.formula=null;
this.phase=null;
this.formalCharge=-2147483648;
},1);

C$.$fields$=[['I',['formalCharge'],'S',['modelName','formula','phase']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
if ("structure".equals$O(localName)) {
this.asc.newAtomSet$();
return;
}if ("atom".equals$O(localName)) {
var id=this.atts.get$O("id");
(this.atom=Clazz.new_($I$(1,1))).atomName=this.atts.get$O(this.atts.containsKey$O("label") ? "label" : "id");
if (id != null  && this.stateScriptVersionInt >= 140400 ) this.asc.atomSymbolicMap.put$O$O(id, this.atom);
if (this.atts.containsKey$O("xyz")) {
var xyz=this.atts.get$O("xyz");
var tokens=$I$(2).getTokens$S(xyz);
this.atom.set$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]));
}if (this.atts.containsKey$O("element")) {
this.atom.elementSymbol=this.atts.get$O("element");
}return;
}if ("bond".equals$O(localName)) {
var atom1=this.atts.get$O("a");
var atom2=this.atts.get$O("b");
var order=1;
if (this.atts.containsKey$O("order")) order=p$1.parseBondToken$S.apply(this, [this.atts.get$O("order")]);
this.asc.addNewBondFromNames$S$S$I(atom1, atom2, order);
return;
}if ("group".equals$O(localName)) {
var charge=this.atts.get$O("charge");
if (charge != null  && charge.indexOf$S(".") < 0 ) {
this.formalCharge=$I$(2).parseInt$S(charge);
}return;
}if ("member".equals$O(localName) && this.formalCharge != -2147483648 ) {
var atom=this.asc.getAtomFromName$S(this.atts.get$O("entity"));
if (atom != null ) atom.formalCharge=this.formalCharge;
return;
}if ("boundary".equals$O(localName)) {
var boxDim=(function(a,f){return f.apply(null,a)})([this.atts.get$O("box")],$I$(2).getTokens$S);
var x=this.parseFloatStr$S(boxDim[0]);
var y=this.parseFloatStr$S(boxDim[1]);
var z=this.parseFloatStr$S(boxDim[2]);
this.parent.setUnitCellItem$I$F(0, x);
this.parent.setUnitCellItem$I$F(1, y);
this.parent.setUnitCellItem$I$F(2, z);
this.parent.setUnitCellItem$I$F(3, 90);
this.parent.setUnitCellItem$I$F(4, 90);
this.parent.setUnitCellItem$I$F(5, 90);
var pt=$I$(3).new3$F$F$F(-x / 2, -y / 2, -z / 2);
var atoms=this.asc.atoms;
for (var i=this.asc.ac; --i >= 0; ) {
atoms[i].sub$javajs_util_T3(pt);
this.parent.setAtomCoord$org_jmol_adapter_smarter_Atom(atoms[i]);
}
if (this.parent.latticeCells[0] == 0) this.parent.latticeCells[0]=this.parent.latticeCells[1]=this.parent.latticeCells[2]=1;
return;
}if ("odyssey_simulation".equals$O(localName)) {
if (this.modelName != null  && this.phase != null  ) this.modelName += " - " + this.phase;
if (this.modelName != null ) this.asc.setAtomSetName$S(this.modelName);
if (this.formula != null ) this.asc.setCurrentModelInfo$S$O("formula", this.formula);
}if ("title".equals$O(localName) || "formula".equals$O(localName) || "phase".equals$O(localName)  ) this.setKeepChars$Z(true);
});

Clazz.newMeth(C$, 'parseBondToken$S', function (str) {
if (str.length$() >= 1) {
switch ((str.charCodeAt$I(0))) {
case 115:
return 1;
case 100:
return 2;
case 116:
return 3;
case 97:
return 515;
}
return this.parseIntStr$S(str);
}return 1;
}, p$1);

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if ("atom".equals$O(localName)) {
if (this.atom.elementSymbol != null  && !Float.isNaN$F(this.atom.z) ) {
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(this.atom);
}this.atom=null;
return;
}if ("group".equals$O(localName)) {
this.formalCharge=-2147483648;
} else if ("title".equals$O(localName)) {
this.modelName=this.chars.toString();
} else if ("formula".equals$O(localName)) {
this.formula=this.chars.toString();
} else if ("phase".equals$O(localName)) {
this.phase=this.chars.toString();
}this.setKeepChars$Z(false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
