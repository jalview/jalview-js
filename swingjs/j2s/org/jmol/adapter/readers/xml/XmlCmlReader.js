(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),p$1={},I$=[[0,'org.jmol.adapter.smarter.Atom','org.jmol.adapter.smarter.Bond','javajs.util.Lst','java.util.Hashtable','javajs.util.BS','javajs.util.PT','org.jmol.api.JmolAdapter','org.jmol.util.Logger','org.jmol.adapter.smarter.AtomSetCollectionReader','java.util.Properties','java.util.StringTokenizer','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XmlCmlReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.moleculeNesting=0;
this.latticeVectorPtr=0;
this.embeddedCrystal=false;
this.tokens=Clazz.array(String, [16]);
this.atomArray=Clazz.array($I$(1), [100]);
this.bondArray=Clazz.array($I$(2), [100]);
this.moduleNestingLevel=0;
this.haveMolecule=false;
this.processing=true;
this.state=0;
},1);

C$.$fields$=[['Z',['checkedSerial','isSerial','embeddedCrystal','haveMolecule','processing','optimize2d'],'I',['moleculeNesting','latticeVectorPtr','aaLen','bondCount','tokenCount','moduleNestingLevel','state','atomIndex0'],'S',['scalarDictRef','scalarDictValue','scalarTitle','cellParameterType','localSpaceGroupName','moleculeID'],'O',['atomIdNames','java.util.Properties','tokens','String[]','atomArray','org.jmol.adapter.smarter.Atom[]','bondArray','org.jmol.adapter.smarter.Bond[]','joinList','javajs.util.Lst','mapRtoA','java.util.Map','deleteAtoms','javajs.util.BS','htModelAtomMap','java.util.Map']]
,['O',['unitCellParamTags','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
this.optimize2d=parent.checkFilterKey$S("2D");
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
if (this.optimize2d) this.set2D$();
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (name, nodeName) {
if (!this.processing) return;
this.processStart2$S(name);
});

Clazz.newMeth(C$, 'processStart2$S', function (name) {
name=name.toLowerCase$();
var val;
switch (this.state) {
case 0:
if (name.equals$O("molecule")) {
this.moleculeID=this.atts.get$O("id");
this.state=6;
this.haveMolecule=true;
if (this.moleculeNesting == 0) p$1.createNewAtomSet.apply(this, []);
this.moleculeNesting++;
} else if (name.equals$O("crystal")) {
this.state=2;
} else if (name.equals$O("symmetry")) {
this.state=17;
if ((val=this.atts.get$O("spacegroup")) != null ) {
this.localSpaceGroupName=val;
} else {
this.localSpaceGroupName="P1";
this.parent.clearUnitCell$();
}} else if (name.equals$O("module")) {
this.moduleNestingLevel++;
} else if (name.equals$O("latticevector")) {
this.state=18;
this.setKeepChars$Z(true);
}break;
case 2:
this.checkedSerial=true;
this.isSerial=false;
if (name.equals$O("scalar")) {
this.state=3;
this.setKeepChars$Z(true);
this.scalarTitle=this.atts.get$O("title");
p$1.getDictRefValue.apply(this, []);
} else if (name.equals$O("symmetry")) {
this.state=4;
if ((val=this.atts.get$O("spacegroup")) != null ) {
this.localSpaceGroupName=val;
for (var i=0; i < this.localSpaceGroupName.length$(); i++) if (this.localSpaceGroupName.charAt$I(i) == "_") this.localSpaceGroupName=this.localSpaceGroupName.substring$I$I(0, i) + this.localSpaceGroupName.substring$I((i--) + 1);

}} else if (name.equals$O("cellparameter")) {
if ((val=this.atts.get$O("parametertype")) != null ) {
this.cellParameterType=val;
this.setKeepChars$Z(true);
}}break;
case 18:
this.setKeepChars$Z(true);
break;
case 17:
case 3:
case 4:
if (name.equals$O("transform3")) {
this.state=5;
this.setKeepChars$Z(true);
}break;
case 5:
case 6:
if (name.equals$O("fragmentlist")) {
this.joinList=Clazz.new_($I$(3,1));
this.mapRtoA=Clazz.new_($I$(4,1));
if (this.deleteAtoms == null ) this.deleteAtoms=Clazz.new_($I$(5,1));
} else if (name.equals$O("crystal")) {
this.state=2;
this.embeddedCrystal=true;
} else if (name.equals$O("molecule")) {
this.state=6;
this.moleculeNesting++;
} else if (name.equals$O("join")) {
var order=-1;
this.tokenCount=0;
if ((val=this.atts.get$O("atomrefs2")) != null ) {
p$1.breakOutTokens$S.apply(this, [val]);
if ((val=this.atts.get$O("order")) != null ) order=p$1.parseBondToken$S.apply(this, [val]);
if (this.tokenCount == 2 && order > 0 ) this.joinList.addLast$O(Clazz.array(String, -1, [this.tokens[0], this.tokens[1], "" + order]));
}} else if (name.equals$O("bondarray")) {
this.state=10;
this.bondCount=0;
if ((val=this.atts.get$O("order")) != null ) {
this.breakOutBondTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.bondArray[i].order=p$1.parseBondToken$S.apply(this, [this.tokens[i]]);

}if ((val=this.atts.get$O("atomref1")) != null ) {
this.breakOutBondTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.bondArray[i].atomIndex1=p$1.getAtomIndex$S.apply(this, [this.tokens[i]]);

}if ((val=this.atts.get$O("atomref2")) != null ) {
this.breakOutBondTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.bondArray[i].atomIndex2=p$1.getAtomIndex$S.apply(this, [this.tokens[i]]);

}} else if (name.equals$O("atomarray")) {
this.state=7;
this.aaLen=0;
var coords3D=false;
if ((val=this.atts.get$O("atomid")) != null ) {
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].atomName=this.tokens[i];

}var is3d=(!this.optimize2d && (val=this.atts.get$O("x3")) != null  );
if (is3d) {
is3d=true;
coords3D=true;
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].x=this.parseFloatStr$S(this.tokens[i]);

if ((val=this.atts.get$O("y3")) != null ) {
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].y=this.parseFloatStr$S(this.tokens[i]);

}if ((val=this.atts.get$O("z3")) != null ) {
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].z=this.parseFloatStr$S(this.tokens[i]);

}} else {
if ((val=this.atts.get$O("x2")) != null ) {
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].x=this.parseFloatStr$S(this.tokens[i]);

}if ((val=this.atts.get$O("y2")) != null ) {
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].y=this.parseFloatStr$S(this.tokens[i]);

}}if ((val=this.atts.get$O("elementtype")) != null ) {
this.breakOutAtomTokens$S(val);
for (var i=this.tokenCount; --i >= 0; ) this.atomArray[i].elementSymbol=this.tokens[i];

}for (var i=this.aaLen; --i >= 0; ) {
var atom=this.atomArray[i];
if (!coords3D) atom.z=0;
p$1.addAtom$org_jmol_adapter_smarter_Atom.apply(this, [atom]);
}
} else if (name.equals$O("formula")) {
this.state=13;
} else if (name.equals$O("association")) {
this.state=19;
}break;
case 10:
if (name.equals$O("bond")) {
this.state=11;
var order=-1;
this.tokenCount=0;
if ((val=this.atts.get$O("atomrefs2")) != null ) p$1.breakOutTokens$S.apply(this, [val]);
if ((val=this.atts.get$O("order")) != null ) order=p$1.parseBondToken$S.apply(this, [val]);
if (this.tokenCount == 2 && order > 0 ) {
p$1.addNewBond$S$S$I.apply(this, [this.tokens[0], this.tokens[1], order]);
}}break;
case 7:
if (name.equals$O("atom")) {
this.state=8;
this.atom=Clazz.new_($I$(1,1));
this.parent.setFractionalCoordinates$Z(false);
var id=this.atts.get$O("id");
if ((val=this.atts.get$O("name")) != null ) this.atom.atomName=val;
 else if ((val=this.atts.get$O("title")) != null ) this.atom.atomName=val;
 else if ((val=this.atts.get$O("label")) != null ) this.atom.atomName=val;
 else this.atom.atomName=id;
if (!this.checkedSerial) {
this.isSerial=(id != null  && id.length$() > 1  && id.startsWith$S("a")  && (function(a,f){return f.apply(null,a)})([id.substring$I(1)],$I$(6).parseInt$S) != -2147483648 );
this.checkedSerial=true;
}if (this.isSerial) this.atom.atomSerial=(function(a,f){return f.apply(null,a)})([id.substring$I(1)],$I$(6).parseInt$S);
if ((val=this.atts.get$O("xfract")) != null  && (this.parent.iHaveUnitCell || !this.atts.containsKey$O("x3") ) ) {
this.parent.setFractionalCoordinates$Z(true);
this.atom.set$F$F$F(this.parseFloatStr$S(val), this.parseFloatStr$S(this.atts.get$O("yfract")), this.parseFloatStr$S(this.atts.get$O("zfract")));
} else if ((val=this.atts.get$O("x3")) != null ) {
this.atom.set$F$F$F(this.parseFloatStr$S(val), this.parseFloatStr$S(this.atts.get$O("y3")), this.parseFloatStr$S(this.atts.get$O("z3")));
} else if ((val=this.atts.get$O("x2")) != null ) {
this.atom.set$F$F$F(this.parseFloatStr$S(val), this.parseFloatStr$S(this.atts.get$O("y2")), 0);
}if ((val=this.atts.get$O("elementtype")) != null ) {
var sym=val;
if ((val=this.atts.get$O("isotope")) != null ) this.atom.elementNumber=($s$[0] = ((this.parseIntStr$S(val) << 7) + $I$(7).getElementNumber$S(sym)), $s$[0]);
this.atom.elementSymbol=sym;
}if ((val=this.atts.get$O("formalcharge")) != null ) this.atom.formalCharge=this.parseIntStr$S(val);
}break;
case 11:
if ((val=this.atts.get$O("builtin")) != null ) {
this.setKeepChars$Z(true);
this.state=15;
this.scalarDictValue=val;
} else if (name.equals$O("bondstereo")) {
this.state=12;
}break;
case 12:
this.setKeepChars$Z(true);
this.state=12;
break;
case 8:
if (name.equals$O("scalar")) {
this.state=9;
this.setKeepChars$Z(true);
this.scalarTitle=this.atts.get$O("title");
p$1.getDictRefValue.apply(this, []);
} else if ((val=this.atts.get$O("builtin")) != null ) {
this.setKeepChars$Z(true);
this.state=14;
this.scalarDictValue=val;
}break;
case 9:
break;
case 13:
break;
case 14:
break;
case 15:
break;
}
});

Clazz.newMeth(C$, 'getAtomIndex$S', function (label) {
return this.asc.getAtomIndex$S(this.isSerial ? label.substring$I(1) : label);
}, p$1);

Clazz.newMeth(C$, 'processEndElement$S', function (name) {
if (!this.processing) return;
this.processEnd2$S(name);
});

Clazz.newMeth(C$, 'processEnd2$S', function (name) {
name=name.toLowerCase$();
switch (this.state) {
case 0:
if (name.equals$O("module")) {
if (--this.moduleNestingLevel == 0) {
if (this.parent.iHaveUnitCell) this.applySymmetryAndSetTrajectory$();
p$1.setAtomNames.apply(this, []);
}}break;
case 19:
if (name.equals$O("association")) this.state=6;
break;
case 2:
if (name.equals$O("crystal")) {
if (this.embeddedCrystal) {
this.state=6;
this.embeddedCrystal=false;
} else {
this.state=0;
}} else if (name.equals$O("cellparameter") && this.keepChars ) {
var tokens=(function(a,f){return f.apply(null,a)})([this.chars.toString()],$I$(6).getTokens$S);
this.setKeepChars$Z(false);
if (tokens.length != 3 || this.cellParameterType == null  ) {
} else if (this.cellParameterType.equals$O("length")) {
for (var i=0; i < 3; i++) this.parent.setUnitCellItem$I$F(i, this.parseFloatStr$S(tokens[i]));

break;
} else if (this.cellParameterType.equals$O("angle")) {
for (var i=0; i < 3; i++) this.parent.setUnitCellItem$I$F(i + 3, this.parseFloatStr$S(tokens[i]));

break;
}(function(a,f){return f.apply(null,a)})(["bad cellParameter information: parameterType=" + this.cellParameterType + " data=" + this.chars ],$I$(8).error$S);
this.parent.setFractionalCoordinates$Z(false);
}break;
case 3:
if (name.equals$O("scalar")) {
this.state=2;
if (this.scalarTitle != null ) p$1.checkUnitCellItem$SA$S.apply(this, [C$.unitCellParamTags, this.scalarTitle]);
 else if (this.scalarDictRef != null ) p$1.checkUnitCellItem$SA$S.apply(this, [$I$(7).cellParamNames, (this.scalarDictValue.startsWith$S("_") ? this.scalarDictValue : "_" + this.scalarDictValue)]);
}this.setKeepChars$Z(false);
this.scalarTitle=null;
this.scalarDictRef=null;
break;
case 5:
if (name.equals$O("transform3")) {
this.setKeepChars$Z(false);
this.state=4;
}break;
case 18:
var values=(function(a,f){return f.apply(null,a)})([this.chars.toString(), null, 3],$I$(9).getTokensFloat$S$FA$I);
this.parent.addExplicitLatticeVector$I$FA$I(this.latticeVectorPtr, values, 0);
this.latticeVectorPtr=(this.latticeVectorPtr + 1) % 3;
this.setKeepChars$Z(false);
this.state=0;
break;
case 4:
case 17:
if (name.equals$O("symmetry")) this.state=(this.state == 4 ? 2 : 0);
if (this.moduleNestingLevel == 0 && this.parent.iHaveUnitCell  && !this.embeddedCrystal ) this.applySymmetryAndSetTrajectory$();
break;
case 6:
if (name.equals$O("fragmentlist")) {
for (var i=this.joinList.size$(); --i >= 0; ) {
var join=this.joinList.get$I(i);
var r1=this.asc.getAtomFromName$S(p$1.fixSerialName$S.apply(this, [join[0]]));
var r2=this.asc.getAtomFromName$S(p$1.fixSerialName$S.apply(this, [join[1]]));
if (r1 != null  && r2 != null  ) {
this.deleteAtoms.set$I(r1.index);
this.deleteAtoms.set$I(r2.index);
p$1.addNewBond$S$S$I.apply(this, [this.mapRtoA.get$O(r1), this.mapRtoA.get$O(r2), this.parseIntStr$S(join[2])]);
}}
this.joinList=null;
this.mapRtoA=null;
}if (name.equals$O("molecule")) {
if (--this.moleculeNesting == 0) {
this.applySymmetryAndSetTrajectory$();
p$1.setAtomNames.apply(this, []);
this.state=0;
} else {
this.state=6;
}}break;
case 10:
if (name.equals$O("bondarray")) {
this.state=6;
for (var i=0; i < this.bondCount; ++i) p$1.addBond$org_jmol_adapter_smarter_Bond.apply(this, [this.bondArray[i]]);

this.parent.applySymmetryToBonds=true;
}break;
case 7:
if (name.equals$O("atomarray")) {
this.state=6;
}break;
case 11:
if (name.equals$O("bond")) {
this.state=10;
}break;
case 8:
if (name.equals$O("atom")) {
this.state=7;
p$1.addAtom$org_jmol_adapter_smarter_Atom.apply(this, [this.atom]);
this.atom=null;
}break;
case 9:
if (name.equals$O("scalar")) {
this.state=8;
if ("jmol:charge".equals$O(this.scalarDictRef)) {
this.atom.partialCharge=this.parseFloatStr$S(this.chars.toString());
} else if (this.scalarDictRef != null  && "_atom_site_label".equals$O(this.scalarDictValue) ) {
if (this.atomIdNames == null ) this.atomIdNames=Clazz.new_($I$(10,1));
this.atomIdNames.put$O$O(this.atom.atomName, this.chars.toString());
}}this.setKeepChars$Z(false);
this.scalarTitle=null;
this.scalarDictRef=null;
break;
case 14:
this.state=8;
if (this.scalarDictValue.equals$O("x3")) this.atom.x=this.parseFloatStr$S(this.chars.toString());
 else if (this.scalarDictValue.equals$O("y3")) this.atom.y=this.parseFloatStr$S(this.chars.toString());
 else if (this.scalarDictValue.equals$O("z3")) this.atom.z=this.parseFloatStr$S(this.chars.toString());
 else if (this.scalarDictValue.equals$O("elementType")) this.atom.elementSymbol=this.chars.toString();
this.setKeepChars$Z(false);
break;
case 12:
var stereo=this.chars.toString();
if (this.bond.order == 1) this.bond.order=(stereo.equals$O("H") ? 1041 : 1025);
this.setKeepChars$Z(false);
this.state=11;
break;
case 15:
this.state=11;
if (this.scalarDictValue.equals$O("atomRef")) {
if (this.tokenCount == 0) this.tokens=Clazz.array(String, [2]);
if (this.tokenCount < 2) this.tokens[this.tokenCount++]=this.chars.toString();
} else if (this.scalarDictValue.equals$O("order")) {
var order=p$1.parseBondToken$S.apply(this, [this.chars.toString()]);
if (order > 0 && this.tokenCount == 2 ) p$1.addNewBond$S$S$I.apply(this, [this.tokens[0], this.tokens[1], order]);
}this.setKeepChars$Z(false);
break;
case 13:
this.state=6;
break;
}
});

Clazz.newMeth(C$, 'addBond$org_jmol_adapter_smarter_Bond', function (bond) {
var a1=this.asc.atoms[bond.atomIndex1];
var a2=this.asc.atoms[bond.atomIndex2];
if (this.joinList != null  && !p$1.checkBondToR$S$S.apply(this, [a1.atomName, a2.atomName]) ) this.asc.addBond$org_jmol_adapter_smarter_Bond(bond);
}, p$1);

Clazz.newMeth(C$, 'checkBondToR$S$S', function (a1name, a2name) {
var a1=this.asc.getAtomFromName$S(a1name);
var a2=this.asc.getAtomFromName$S(a2name);
if (a1 == null  || a2 == null  ) return true;
if ("R".equals$O(a1.elementSymbol)) {
this.mapRtoA.put$O$O(a1, a2.atomName);
return true;
} else if ("R".equals$O(a2.elementSymbol)) {
this.mapRtoA.put$O$O(a2, a1.atomName);
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'setAtomNames', function () {
if (this.atomIdNames == null ) return;
var s;
var atoms=this.asc.atoms;
for (var i=this.atomIndex0; i < this.asc.ac; i++) if ((s=this.atomIdNames.getProperty$S(atoms[i].atomName)) != null ) atoms[i].atomName=s;

this.atomIdNames=null;
this.atomIndex0=this.asc.ac;
}, p$1);

Clazz.newMeth(C$, 'addNewBond$S$S$I', function (a1, a2, order) {
if (a1 == null  || a2 == null  ) return;
this.parent.applySymmetryToBonds=true;
a1=p$1.fixSerialName$S.apply(this, [a1]);
a2=p$1.fixSerialName$S.apply(this, [a2]);
if (this.joinList == null  || !p$1.checkBondToR$S$S.apply(this, [a1, a2]) ) {
this.asc.addNewBondFromNames$S$S$I(a1, a2, order);
this.bond=this.asc.bonds[this.asc.bondCount - 1];
}}, p$1);

Clazz.newMeth(C$, 'fixSerialName$S', function (a) {
return (this.isSerial ? a.substring$I(1) : a);
}, p$1);

Clazz.newMeth(C$, 'getDictRefValue', function () {
this.scalarDictRef=this.atts.get$O("dictref");
if (this.scalarDictRef != null ) {
var iColon=this.scalarDictRef.indexOf$S(":");
this.scalarDictValue=this.scalarDictRef.substring$I(iColon + 1);
}}, p$1);

Clazz.newMeth(C$, 'checkUnitCellItem$SA$S', function (tags, value) {
for (var i=tags.length; --i >= 0; ) if (value.equals$O(tags[i])) {
this.parent.setUnitCellItem$I$F(i, this.parseFloatStr$S(this.chars.toString()));
return;
}
}, p$1);

Clazz.newMeth(C$, 'addAtom$org_jmol_adapter_smarter_Atom', function (atom) {
if ((atom.elementSymbol == null  && atom.elementNumber < 0 ) || Float.isNaN$F(atom.z) ) return;
this.parent.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
if (this.htModelAtomMap != null ) this.htModelAtomMap.put$O$O(this.moleculeID + atom.atomName, atom);
if (this.isSerial) this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(atom);
 else this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(atom);
}, p$1);

Clazz.newMeth(C$, 'parseBondToken$S', function (str) {
var floatOrder=this.parseFloatStr$S(str);
if (Float.isNaN$F(floatOrder) && str.length$() >= 1 ) {
str=str.toUpperCase$();
switch ((str.charCodeAt$I(0))) {
case 83:
return 1;
case 68:
return 2;
case 84:
return 3;
case 65:
return 515;
case 80:
return 66;
}
return this.parseIntStr$S(str);
}if (floatOrder == 1.5 ) return 515;
if (floatOrder == 2 ) return 2;
if (floatOrder == 3 ) return 3;
return 1;
}, p$1);

Clazz.newMeth(C$, 'breakOutTokens$S', function (str) {
var st=Clazz.new_($I$(11,1).c$$S,[str]);
this.tokenCount=st.countTokens$();
if (this.tokenCount > this.tokens.length) this.tokens=Clazz.array(String, [this.tokenCount]);
for (var i=0; i < this.tokenCount; ++i) {
try {
this.tokens[i]=st.nextToken$();
} catch (nsee) {
if (Clazz.exceptionOf(nsee,"java.util.NoSuchElementException")){
this.tokens[i]=null;
} else {
throw nsee;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'breakOutAtomTokens$S', function (str) {
p$1.breakOutTokens$S.apply(this, [str]);
this.checkAtomArrayLength$I(this.tokenCount);
});

Clazz.newMeth(C$, 'checkAtomArrayLength$I', function (newAtomCount) {
if (this.aaLen == 0) {
if (newAtomCount > this.atomArray.length) this.atomArray=Clazz.array($I$(1), [newAtomCount]);
for (var i=newAtomCount; --i >= 0; ) this.atomArray[i]=Clazz.new_($I$(1,1));

this.aaLen=newAtomCount;
} else if (newAtomCount != this.aaLen) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bad atom attribute length"]);
}});

Clazz.newMeth(C$, 'breakOutBondTokens$S', function (str) {
p$1.breakOutTokens$S.apply(this, [str]);
this.checkBondArrayLength$I(this.tokenCount);
});

Clazz.newMeth(C$, 'checkBondArrayLength$I', function (newBondCount) {
if (this.bondCount == 0) {
if (newBondCount > this.bondArray.length) this.bondArray=Clazz.array($I$(2), [newBondCount]);
for (var i=newBondCount; --i >= 0; ) this.bondArray[i]=Clazz.new_($I$(2,1).c$$I$I$I,[-1, -1, 1]);

this.bondCount=newBondCount;
} else if (newBondCount != this.bondCount) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bad bond attribute length"]);
}});

Clazz.newMeth(C$, 'createNewAtomSet', function () {
this.asc.newAtomSet$();
var val;
if (this.htModelAtomMap != null ) this.htModelAtomMap.put$O$O("" + this.asc.iSet, "" + this.moleculeID);
var collectionName=((val=this.atts.get$O("title")) != null  || (val=this.atts.get$O("id")) != null   ? val : null);
if (collectionName != null ) {
this.asc.setAtomSetName$S(collectionName);
}}, p$1);

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
if (this.moduleNestingLevel > 0 || !this.haveMolecule  || this.localSpaceGroupName == null  ) return;
this.parent.setSpaceGroupName$S(this.localSpaceGroupName);
this.parent.iHaveSymmetryOperators=this.iHaveSymmetryOperators;
this.parent.applySymmetryAndSetTrajectory$();
});

Clazz.newMeth(C$, 'endDocument$', function () {
if (this.deleteAtoms != null ) {
var bs=(this.asc.bsAtoms == null  ? this.asc.bsAtoms=$I$(12).newBitSet2$I$I(0, this.asc.ac) : this.asc.bsAtoms);
bs.andNot$javajs_util_BS(this.deleteAtoms);
}});

C$.$static$=function(){C$.$static$=0;
C$.unitCellParamTags=Clazz.array(String, -1, ["a", "b", "c", "alpha", "beta", "gamma"]);
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
