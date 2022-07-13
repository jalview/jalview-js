(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'javajs.util.BS','org.jmol.adapter.smarter.Atom','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlXsdReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bsBackbone=Clazz.new_($I$(1,1));
this.iChain=-1;
this.iGroup=0;
this.iAtom=0;
},1);

C$.$fields$=[['I',['iChain','iGroup','iAtom'],'O',['bsBackbone','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
parent.htParams.put$O$O("backboneAtoms", this.bsBackbone);
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
this.asc.atomSymbolicMap.clear$();
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
var tokens;
if ("molecule".equals$O(localName)) {
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(this.atts.get$O("name"));
return;
}if ("linearchain".equals$O(localName)) {
this.iGroup=0;
this.iChain++;
}if ("repeatunit".equals$O(localName)) {
this.iGroup++;
}if ("atom3d".equals$O(localName)) {
this.atom=Clazz.new_($I$(2,1));
this.atom.elementSymbol=this.atts.get$O("components");
this.atom.atomName=this.atts.get$O("id");
this.atom.atomSerial=++this.iAtom;
if (this.iChain >= 0) this.parent.setChainID$org_jmol_adapter_smarter_Atom$S(this.atom, "" + String.fromCharCode(((this.iChain - 1) % 26 + 65)));
this.atom.group3="UNK";
if (this.iGroup == 0) this.iGroup=1;
this.atom.sequenceNumber=this.iGroup;
var xyz=this.atts.get$O("xyz");
if (xyz != null ) {
tokens=$I$(3,"getTokens$S",[xyz.replace$C$C(",", " ")]);
this.atom.set$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]));
}var isBackbone="1".equals$O(this.atts.get$O("isbackboneatom"));
if (isBackbone) this.bsBackbone.set$I(this.iAtom);
return;
}if ("bond".equals$O(localName)) {
var atoms=$I$(3,"split$S$S",[this.atts.get$O("connects"), ","]);
var order=1;
if (this.atts.containsKey$O("type")) {
var type=this.atts.get$O("type");
if (type.equals$O("Double")) order=2;
 else if (type.equals$O("Triple")) order=3;
}this.asc.addNewBondFromNames$S$S$I(atoms[0], atoms[1], order);
return;
}});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if ("atom3d".equalsIgnoreCase$S(localName)) {
if (this.atom.elementSymbol != null  && !Float.isNaN$F(this.atom.z) ) {
this.parent.setAtomCoord$org_jmol_adapter_smarter_Atom(this.atom);
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(this.atom);
}this.atom=null;
return;
}this.setKeepChars$Z(false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
