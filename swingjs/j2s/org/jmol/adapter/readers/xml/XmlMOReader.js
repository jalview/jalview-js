(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','org.jmol.adapter.smarter.Resolver','org.jmol.quantum.QS','javajs.util.PT','org.jmol.adapter.readers.quantum.BasisFunctionReader','org.jmol.util.Logger','javajs.util.AU']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlMOReader", null, 'org.jmol.adapter.readers.xml.XmlCmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['skipMOs','isSpherical','iHaveCoefMaps'],'F',['orbOcc','orbEnergy'],'I',['minL','maxL','gaussianCount','slaterCount','coefCount','groupCount','moCount','iModelMO','maxContraction'],'S',['basisId','calcType','dclist','dslist','fclist','fslist'],'O',['moReader','org.jmol.adapter.readers.quantum.MOReader','htSlaterIDs','java.util.Map','basisData','javajs.util.Lst','basisIds','String[]','+basisAtoms','lstGaussians','javajs.util.Lst']]]

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
this.htModelAtomMap=Clazz.new_($I$(1,1));
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
});

Clazz.newMeth(C$, 'processStartMO$S', function (localName) {
if (!this.parent.doReadMolecularOrbitals) return false;
if (localName.equals$O("molecule")) {
var method=this.atts.get$O("method");
if (method != null ) this.calcType=method + "(" + this.atts.get$O("basis") + ")" ;
return true;
}if (localName.equals$O("basisset")) {
this.iModelMO=this.asc.iSet;
this.lstGaussians=Clazz.new_($I$(2,1));
this.htSlaterIDs=Clazz.new_($I$(1,1));
this.coefCount=this.groupCount=this.gaussianCount=this.slaterCount=0;
if (this.moReader == null  && !this.skipMOs ) {
var rdr=$I$(3).getReader$S$java_util_Map("MO", this.parent.htParams);
if ((Clazz.instanceOf(rdr, "java.lang.String"))) {
this.skipMOs=true;
} else {
this.moReader=rdr;
this.moReader.asc=this.asc;
if (this.iHaveCoefMaps) {
var m=this.moReader.getDfCoefMaps$();
if (this.dclist != null ) $I$(4).createDFMap$IA$S$S$I(m[4], this.dclist, "DXX   DYY   DZZ   DXY   DXZ   DYZ", 2);
if (this.dslist != null ) $I$(4).createDFMap$IA$S$S$I(m[3], this.dslist, "d0    d1+   d1-   d2+   d2-", 2);
if (this.fclist != null ) $I$(4).createDFMap$IA$S$S$I(m[6], this.fclist, "XXX   YYY   ZZZ   XYY   XXY   XXZ   XZZ   YZZ   YYZ   XYZ", 2);
if (this.fslist != null ) $I$(4).createDFMap$IA$S$S$I(m[5], this.fslist, "f0    f1+   f1-   f2+   f2-   f3+   f3-", 2);
}}}if (this.moReader != null ) this.moReader.calculationType=this.calcType;
return true;
}if (this.moReader != null ) {
if (localName.equals$O("basisgroup")) {
this.groupCount++;
this.basisId=this.atts.get$O("id");
this.isSpherical="spherical".equalsIgnoreCase$S(this.atts.get$O("angular"));
this.minL=$I$(5,"parseInt$S",[this.atts.get$O("minl")]);
this.maxL=$I$(5,"parseInt$S",[this.atts.get$O("maxl")]);
var nContractions=$I$(5,"parseInt$S",[this.atts.get$O("contractions")]);
var n=nContractions * (this.isSpherical ? this.minL * 2 + 1 : (this.minL * (this.minL + 3)/2|0) + 1);
this.htModelAtomMap.put$O$O(this.basisId + "_count", Integer.valueOf$I(n));
return true;
}if (localName.equals$O("basisexponents") || localName.equals$O("basiscontraction") ) {
this.setKeepChars$Z(true);
return true;
}if (localName.equals$O("orbital") && this.gaussianCount > 0 ) {
this.orbOcc=$I$(5,"parseFloat$S",[this.atts.get$O("occupation")]);
this.orbEnergy=$I$(5,"parseFloat$S",[this.atts.get$O("energy")]);
this.setKeepChars$Z(true);
return true;
}}return false;
});

Clazz.newMeth(C$, 'processEndMO$S', function (localName) {
if (this.moReader != null ) {
if (localName.equals$O("basisexponents")) {
this.basisData=Clazz.new_($I$(2,1));
this.basisData.addLast$O($I$(5,"parseFloatArray$S",[this.chars.toString()]));
this.setKeepChars$Z(false);
return true;
}if (localName.equals$O("basiscontraction")) {
var data=$I$(5,"parseFloatArray$S",[this.chars.toString()]);
this.basisData.addLast$O(data);
if (this.basisData.size$() > this.maxContraction) this.maxContraction=this.basisData.size$();
this.setKeepChars$Z(false);
return true;
}if (localName.equals$O("basisgroup")) {
var otype;
switch (this.minL) {
case 0:
otype=(this.maxL == 1 ? "L" : "S");
break;
case 1:
otype="P";
break;
default:
otype=(this.minL <= 7 ? "SPDFGHI".substring$I$I(this.minL, this.minL + 1) : "?");
if (this.isSpherical) otype=(2 * (this.minL) + 1) + otype;
}
this.lstGaussians.addLast$O(this.basisData);
var nPrimitives=this.basisData.get$I(0).length;
for (var i=1, n=this.basisData.size$(); i < n; i++) {
this.htSlaterIDs.put$O$O(this.basisId + "_" + i , Clazz.array(Integer.TYPE, -1, [-1, $I$(6).getQuantumShellTagID$S(otype), this.gaussianCount + 1, nPrimitives]));
this.gaussianCount+=nPrimitives;
}
return true;
}if (localName.equals$O("basisset")) {
p$1.buildSlaters.apply(this, []);
return true;
}if (localName.equals$O("orbital")) {
if (this.gaussianCount == 0) return true;
var coef=$I$(5,"parseFloatArray$S",[this.chars.toString()]);
if (this.moCount == 0) {
if (coef.length != this.coefCount) {
$I$(7,"error$S",["Number of orbital coefficients (" + coef.length + ") does not agree with expected number (" + this.coefCount + ")" ]);
this.moReader=null;
return this.skipMOs=true;
}$I$(7).info$S(this.coefCount + " coefficients found");
}this.moReader.addCoef$java_util_Map$FA$S$F$F$I(Clazz.new_($I$(1,1)), coef, null, this.orbEnergy, this.orbOcc, this.moCount++);
this.setKeepChars$Z(false);
return true;
}if (localName.equals$O("orbitals")) {
this.moReader.setMOData$Z(true);
$I$(7).info$S("XmlMOReader created\n " + this.gaussianCount + " gaussians\n " + this.slaterCount + " slaters\n " + this.groupCount + " groups\n " + this.coefCount + " orbital coefficients\n " + this.moCount + " orbitals" );
return true;
}if (this.state == 19) {
if (localName.equals$O("bases")) {
this.basisIds=p$1.getXlink$S$S$Z.apply(this, [this.atts.get$O("href"), "basisGroup", false]);
} else if (localName.equals$O("atoms")) {
this.basisAtoms=p$1.getXlink$S$S$Z.apply(this, [this.atts.get$O("href"), "atom", true]);
} else if (localName.equals$O("association")) {
this.state=6;
for (var i=this.basisAtoms.length; --i >= 0; ) {
var a=this.htModelAtomMap.get$O(this.basisAtoms[i]);
if (a == null ) {
$I$(7).error$S("XmlMOReader atom not found; orbitals skipped: " + a);
this.moReader=null;
return this.skipMOs=true;
}this.htModelAtomMap.put$O$O(this.basisAtoms[i] + "_basis", this.basisIds);
}
this.slaterCount+=this.basisIds.length * this.basisAtoms.length;
}return true;
}}return false;
});

Clazz.newMeth(C$, 'buildSlaters', function () {
var gaussians=$I$(8).newFloat2$I(this.gaussianCount);
for (var i=0, p=0, n=this.lstGaussians.size$(); i < n; i++) {
this.basisData=this.lstGaussians.get$I(i);
var exp=this.basisData.get$I(0);
for (var ii=1, nn=this.basisData.size$(); ii < nn; ii++) {
var coef=this.basisData.get$I(ii);
for (var j=0; j < exp.length; j++) gaussians[p++]=Clazz.array(Float.TYPE, -1, [exp[j], coef[j], 0]);

}
}
this.moReader.gaussians=gaussians;
var slaters=Clazz.new_($I$(2,1));
var modelID=this.htModelAtomMap.get$O("" + this.iModelMO);
var i0=this.asc.getAtomSetAtomIndex$I(this.iModelMO);
for (var i=0, n=this.asc.getAtomSetAtomCount$I(this.iModelMO); i < n; i++) {
var ids=this.htModelAtomMap.get$O(modelID + this.asc.atoms[i0 + i].atomName + "_basis" );
if (ids == null ) continue;
for (var k=0; k < ids.length; k++) {
var key=ids[k] + "_count";
this.coefCount+=(this.htModelAtomMap.get$O(key)).intValue$();
for (var kk=1; kk < this.maxContraction; kk++) {
var slater=this.htSlaterIDs.get$O(ids[k] + "_" + kk );
if (slater == null ) break;
slater=$I$(8).arrayCopyI$IA$I(slater, -1);
this.moReader.shells=slaters;
slater[0]=i + 1;
slaters.addLast$O(slater);
}
}
}
}, p$1);

Clazz.newMeth(C$, 'getXlink$S$S$Z', function (href, key, addMoleculeID) {
var p=href.indexOf$S(key + "[") + 1;
var tokens=$I$(5,"split$S$S",[href.substring$I(p), "\'"]);
var data=Clazz.array(String, [(tokens.length/2|0)]);
var molID=(addMoleculeID ? $I$(5,"getQuotedAttribute$S$S",[href.substring$I$I(0, p).replace$C$C("\'", "\""), "molecule[@id"]) : "");
for (var i=1, pt=0; i < tokens.length; i+=2) data[pt++]=molID + tokens[i];

return data;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
