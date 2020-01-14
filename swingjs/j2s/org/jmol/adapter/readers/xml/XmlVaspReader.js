(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'org.jmol.util.Logger','javajs.util.PT','javajs.util.SB','javajs.util.V3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XmlVaspReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.name=null;
this.ac=0;
this.iAtom=0;
this.isE_wo_entrp=false;
this.isE_fr_energy=false;
this.enthalpy=null;
this.gibbsEnergy=null;
this.haveUnitCell=false;
this.atomNames=null;
this.atomSyms=null;
this.atomName=null;
this.atomSym=null;
this.a=0;
this.b=0;
this.c=0;
this.alpha=0;
this.beta=0;
this.gamma=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isE_wo_entrp=false;
this.isE_fr_energy=false;
this.enthalpy=null;
this.gibbsEnergy=null;
this.haveUnitCell=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
parent.doProcessLines=true;
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
if (this.debugging) $I$(1).debug$S("xmlvasp: start " + localName);
if (!this.parent.continuing) return;
if ("calculation".equals$O(localName)) {
this.enthalpy=null;
this.gibbsEnergy=null;
return;
}if ("i".equals$O(localName)) {
var s=this.atts.get$O("name");
if (s.charAt$I(0) != "e") return;
this.isE_wo_entrp=s.equals$O("e_wo_entrp");
this.isE_fr_energy=s.equals$O("e_fr_energy");
this.setKeepChars$Z(this.isE_wo_entrp || this.isE_fr_energy );
return;
}if ("structure".equals$O(localName)) {
if (!this.parent.doGetModel$I$S(++this.parent.modelNumber, null)) {
this.parent.checkLastModel$();
return;
}this.parent.setFractionalCoordinates$Z(true);
this.asc.doFixPeriodic=true;
this.asc.newAtomSet$();
if (this.enthalpy != null ) {
this.asc.setCurrentModelInfo$S$O("enthalpy", Double.valueOf$S(this.enthalpy));
}if (this.gibbsEnergy != null ) {
this.asc.setAtomSetEnergy$S$F("" + this.gibbsEnergy, this.parseFloatStr$S(this.gibbsEnergy));
this.asc.setCurrentModelInfo$S$O("gibbsEnergy", Double.valueOf$S(this.gibbsEnergy));
}if (this.enthalpy != null  && this.gibbsEnergy != null  ) this.asc.setAtomSetName$S("Enthalpy = " + this.enthalpy + " eV Gibbs Energy = " + this.gibbsEnergy + " eV" );
return;
}if (!this.parent.doProcessLines) return;
if ("v".equals$O(localName)) {
this.setKeepChars$Z(this.data != null );
return;
}if ("c".equals$O(localName)) {
this.setKeepChars$Z(this.iAtom < this.ac);
return;
}if ("varray".equals$O(localName)) {
this.name=this.atts.get$O("name");
if (this.name != null  && $I$(2).isOneOf$S$S(this.name, ";basis;positions;forces;") ) this.data=Clazz.new_($I$(3));
return;
}if ("atoms".equals$O(localName)) {
this.setKeepChars$Z(true);
return;
}});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if (this.debugging) $I$(1).debug$S("xmlvasp: end " + localName);
while (true){
if (!this.parent.doProcessLines) break;
if (this.isE_wo_entrp) {
this.isE_wo_entrp=false;
this.enthalpy=this.chars.toString().trim$();
break;
}if (this.isE_fr_energy) {
this.isE_fr_energy=false;
this.gibbsEnergy=this.chars.toString().trim$();
break;
}if ("v".equals$O(localName) && this.data != null  ) {
this.data.append$S(this.chars.toString());
break;
}if ("c".equals$O(localName)) {
if (this.iAtom < this.ac) {
if (this.atomName == null ) {
this.atomName=this.atomSym=this.chars.toString().trim$();
} else {
this.atomNames[this.iAtom++]=this.atomName + this.chars.toString().trim$();
this.atomName=null;
}}break;
}if ("atoms".equals$O(localName)) {
this.ac=this.parseIntStr$S(this.chars.toString());
this.atomNames=Clazz.array(String, [this.ac]);
this.atomSyms=Clazz.array(String, [this.ac]);
this.iAtom=0;
break;
}if ("varray".equals$O(localName) && this.data != null  ) {
if (this.name == null ) {
} else if ("basis".equals$O(this.name) && !this.haveUnitCell ) {
this.haveUnitCell=true;
var ijk=org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.data.toString(), null, 9);
var va=$I$(4).new3$F$F$F(ijk[0], ijk[1], ijk[2]);
var vb=$I$(4).new3$F$F$F(ijk[3], ijk[4], ijk[5]);
var vc=$I$(4).new3$F$F$F(ijk[6], ijk[7], ijk[8]);
this.a=va.length$();
this.b=vb.length$();
this.c=vc.length$();
va.normalize$();
vb.normalize$();
vc.normalize$();
this.alpha=(Math.acos(vb.dot$javajs_util_T3(vc)) * 180 / 3.141592653589793);
this.beta=(Math.acos(va.dot$javajs_util_T3(vc)) * 180 / 3.141592653589793);
this.gamma=(Math.acos(va.dot$javajs_util_T3(vb)) * 180 / 3.141592653589793);
} else if ("positions".equals$O(this.name)) {
this.parent.setUnitCell$F$F$F$F$F$F(this.a, this.b, this.c, this.alpha, this.beta, this.gamma);
var fdata=Clazz.array(Float.TYPE, [this.ac * 3]);
org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.data.toString(), fdata, this.ac * 3);
var fpt=0;
for (var i=0; i < this.ac; i++) {
var atom=this.asc.addNewAtom$();
this.parent.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, fdata[fpt++], fdata[fpt++], fdata[fpt++]);
atom.elementSymbol=this.atomSyms[i];
atom.atomName=this.atomNames[i];
}
} else if ("forces".equals$O(this.name)) {
var fdata=Clazz.array(Float.TYPE, [this.ac * 3]);
org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.data.toString(), fdata, this.ac * 3);
var fpt=0;
var i0=this.asc.getLastAtomSetAtomIndex$();
for (var i=0; i < this.ac; i++) this.asc.addVibrationVector$I$F$F$F(i0 + i, fdata[fpt++], fdata[fpt++], fdata[fpt++]);

}this.data=null;
break;
}if ("structure".equals$O(localName)) {
try {
this.parent.applySymmetryAndSetTrajectory$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
break;
}return;
}
this.setKeepChars$Z(false);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
