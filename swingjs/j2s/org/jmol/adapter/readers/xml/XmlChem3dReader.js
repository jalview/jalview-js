(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'javajs.util.Lst','org.jmol.adapter.smarter.Atom','javajs.util.PT','org.jmol.api.Interface','java.util.Hashtable','Boolean','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XmlChem3dReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.orbitals=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['orbitals','javajs.util.Lst','moData','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
this.finalizeMOData$java_util_Map(this.moData);
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
var tokens;
if ("model".equals$O(localName)) {
this.asc.newAtomSet$();
return;
}if ("atom".equals$O(localName)) {
this.atom=Clazz.new_($I$(2,1));
this.atom.atomName=this.atts.get$O("id");
this.atom.elementSymbol=this.atts.get$O("symbol");
if (this.atts.containsKey$O("cartcoords")) {
var xyz=this.atts.get$O("cartcoords");
tokens=$I$(3).getTokens$S(xyz);
this.atom.set$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]));
}return;
}if ("bond".equals$O(localName)) {
var atom1=this.atts.get$O("bondatom1");
var atom2=this.atts.get$O("bondatom2");
var order=1;
if (this.atts.containsKey$O("bondorder")) order=this.parseIntStr$S(this.atts.get$O("bondorder"));
this.asc.addNewBondFromNames$S$S$I(atom1, atom2, order);
return;
}if ("electronicstructurecalculation".equals$O(localName)) {
tokens=(function(a,f){return f.apply(null,a)})([this.atts.get$O("calcpartialcharges")],$I$(3).getTokens$S);
var tokens2=(function(a,f){return f.apply(null,a)})([this.atts.get$O("calcatoms")],$I$(3).getTokens$S);
for (var i=this.parseIntStr$S(tokens[0]); --i >= 0; ) this.asc.mapPartialCharge$S$F(tokens2[i + 1], this.parseFloatStr$S(tokens[i + 1]));

}if ("griddata".equals$O(localName)) {
var nPointsX=this.parseIntStr$S(this.atts.get$O("griddatxdim"));
var nPointsY=this.parseIntStr$S(this.atts.get$O("griddatydim"));
var nPointsZ=this.parseIntStr$S(this.atts.get$O("griddatzdim"));
var xStep=this.parseFloatStr$S(this.atts.get$O("griddatxsize")) / (nPointsX);
var yStep=this.parseFloatStr$S(this.atts.get$O("griddatysize")) / (nPointsY);
var zStep=this.parseFloatStr$S(this.atts.get$O("griddatzsize")) / (nPointsZ);
tokens=(function(a,f){return f.apply(null,a)})([this.atts.get$O("griddatorigin")],$I$(3).getTokens$S);
var ox=this.parseFloatStr$S(tokens[0]);
var oy=this.parseFloatStr$S(tokens[1]);
var oz=this.parseFloatStr$S(tokens[2]);
tokens=(function(a,f){return f.apply(null,a)})([this.atts.get$O("griddatdata")],$I$(3).getTokens$S);
var pt=1;
var voxelData=Clazz.array(Float.TYPE, [nPointsX, nPointsY, nPointsZ]);
var sum=0;
for (var z=0; z < nPointsZ; z++) for (var y=0; y < nPointsY; y++) for (var x=0; x < nPointsX; x++) {
var f=this.parseFloatStr$S(tokens[pt++]);
voxelData[x][y][z]=f;
sum += f * f;
}


sum=(1 / Math.sqrt(sum));
for (var z=0; z < nPointsZ; z++) for (var y=0; y < nPointsY; y++) for (var x=0; x < nPointsX; x++) {
voxelData[x][y][z] *= sum;
}


var vd=$I$(4).getOption$S$org_jmol_viewer_Viewer$S("jvxl.data.VolumeData", this.vwr, "file");
vd.setVoxelCounts$I$I$I(nPointsX, nPointsY, nPointsZ);
vd.setVolumetricVector$I$F$F$F(0, xStep, 0, 0);
vd.setVolumetricVector$I$F$F$F(1, 0, yStep, 0);
vd.setVolumetricVector$I$F$F$F(2, 0, 0, zStep);
vd.setVolumetricOrigin$F$F$F(ox, oy, oz);
vd.setVoxelDataAsArray$FAAA(voxelData);
if (this.moData == null ) {
this.moData=Clazz.new_($I$(5,1));
this.moData.put$O$O("defaultCutoff", Float.valueOf$F(0.01));
this.moData.put$O$O("haveVolumeData", $I$(6).TRUE);
this.moData.put$O$O("calculationType", "Chem3D");
this.orbitals=Clazz.new_($I$(1,1));
this.moData.put$O$O("mos", this.orbitals);
}var mo=Clazz.new_($I$(5,1));
mo.put$O$O("volumeData", vd);
this.orbitals.addLast$O(mo);
(function(a,f){return f.apply(null,a)})(["Chem3D molecular orbital data displayable using ISOSURFACE MO " + this.orbitals.size$()],$I$(7).info$S);
return;
}});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if ("atom".equals$O(localName)) {
if (this.atom.elementSymbol != null  && !Float.isNaN$F(this.atom.z) ) {
this.parent.setAtomCoord$org_jmol_adapter_smarter_Atom(this.atom);
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(this.atom);
}this.atom=null;
return;
}this.setKeepChars$Z(false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
