(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XmlMagResReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
parent.doProcessLines=true;
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
if (this.debugging) $I$(1).debug$S("xmlmagres: start " + localName);
if (!this.parent.continuing) return;
if ("calculation".equals$O(localName)) {
this.setKeepChars$Z(true);
return;
}if ("atoms".equals$O(localName)) {
this.setKeepChars$Z(true);
return;
}});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if (this.debugging) $I$(1).debug$S("xmlmagres: end " + localName);
while (true){
if ("calculation".equals$O(localName)) {
break;
}if (!this.parent.doProcessLines) break;
if ("atoms".equals$O(localName)) {
break;
}return;
}
this.setKeepChars$Z(false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
