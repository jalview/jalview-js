(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),p$1={},I$=[[0,'javajs.util.SB','java.util.Hashtable','org.jmol.adapter.smarter.AtomSetCollection','org.jmol.adapter.smarter.Resolver','javajs.util.Rdr','org.jmol.api.Interface','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.adapter.smarter.AtomSetCollectionReader');
C$.$classes$=[['NVPair',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chars=$I$(1).newN$I(2000);
this.domObj=Clazz.array(java.lang.Object, [1]);
this.nullObj=Clazz.array(java.lang.Object, [0]);
},1);

C$.$fields$=[['Z',['keepChars'],'O',['atom','org.jmol.adapter.smarter.Atom','bond','org.jmol.adapter.smarter.Bond','parent','org.jmol.adapter.readers.xml.XmlReader','atts','java.util.Map','chars','javajs.util.SB','domObj','Object[]','+attribs','+attArgs','+nullObj']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.initCML$();
});

Clazz.newMeth(C$, 'initCML$', function () {
this.atts=Clazz.new_($I$(2,1));
p$1.setMyError$S.apply(this, [p$1.parseXML.apply(this, [])]);
this.continuing=false;
});

Clazz.newMeth(C$, 'setMyError$S', function (err) {
if (err != null  && (this.asc == null  || this.asc.errorMessage == null  ) ) {
this.asc=Clazz.new_($I$(3,1).c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst,["xml", this, null, null]);
this.asc.errorMessage=err;
}}, p$1);

Clazz.newMeth(C$, 'parseXML', function () {
var saxReader=null;
{

}
return p$1.selectReaderAndGo$O.apply(this, [saxReader]);
}, p$1);

Clazz.newMeth(C$, 'selectReaderAndGo$O', function (saxReader) {
this.asc=Clazz.new_($I$(3,1).c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst,[this.readerName, this, null, null]);
var className=null;
var thisReader=null;
var pt=this.readerName.indexOf$S("(");
var name=(pt < 0 ? this.readerName : this.readerName.substring$I$I(0, pt));
className=$I$(4).getReaderClassBase$S(name);
if ((thisReader=this.getInterface$S(className)) == null ) return "File reader was not found: " + className;
try {
thisReader.processXml$org_jmol_adapter_readers_xml_XmlReader$O(this, saxReader);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "Error reading XML: " + (e.getMessage$());
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
});

Clazz.newMeth(C$, 'processXml2$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
this.parent=parent;
this.asc=parent.asc;
this.reader=parent.reader;
this.atts=parent.atts;
if (saxReader == null ) {
this.attribs=Clazz.array(java.lang.Object, [1]);
this.attArgs=Clazz.array(java.lang.Object, [1]);
this.domObj=Clazz.array(java.lang.Object, [1]);
var o="";
var data=null;
{
o = this.reader.lock.lock; if (o.$in) data = o.$in.buf;
}
if (Clazz.instanceOf(o, "java.io.BufferedInputStream")) o=$I$(5,"streamToUTF8String$java_io_BufferedInputStream",[$I$(5).getBIS$BA(data)]);
var isjs=false;
{
isjs = true;
}
if (isjs) {
this.domObj[0]=this.createDomNodeJS$S$O("xmlReader", o);
p$1.walkDOMTree.apply(this, []);
this.createDomNodeJS$S$O("xmlReader", null);
}} else {
($I$(6).getOption$S$org_jmol_viewer_Viewer$S("adapter.readers.xml.XmlHandler", this.vwr, "file")).parseXML$org_jmol_adapter_readers_xml_XmlReader$O$java_io_BufferedReader(this, saxReader, this.reader);
}});

Clazz.newMeth(C$, 'createDomNodeJS$S$O', function (id, data) {
var applet=this.parent.vwr.html5Applet;
var d=null;
{
if (!data) return null;
if (data.indexOf("<?") == 0) data = data.substring(data.indexOf("<", 1));
if (data.indexOf("/>") >= 0) { var D = data.split("/>");
for (var i = D.length - 1; --i >= 0;) { var s = D[i];
var pt = s.lastIndexOf("<") + 1;
var pt2 = pt;
var len = s.length;
var name = "";
while (++pt2 < len) { if (" \t\n\r".indexOf(s.charAt(pt2))>= 0) { var name = s.substring(pt, pt2);
D[i] = s + "></"+name+">";
break;
} } } data = D.join('');
} d = document.createElement("_xml");
d.innerHTML = data;
}
return d;
});

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
try {
if (this.parent == null ) this.applySymTrajASCR$();
 else this.parent.applySymmetryAndSetTrajectory$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(7).error$S("applySymmetry failed: " + e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'processDOM$O', function (DOMNode) {
this.domObj=Clazz.array(java.lang.Object, -1, [DOMNode]);
p$1.setMyError$S.apply(this, [p$1.selectReaderAndGo$O.apply(this, [null])]);
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
});

Clazz.newMeth(C$, 'setKeepChars$Z', function (TF) {
this.keepChars=TF;
this.chars.setLength$I(0);
});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
});

Clazz.newMeth(C$, 'walkDOMTree', function () {
var localName;
{
localName = "nodeName";
}
var nodeName=(p$1.jsObjectGetMember$OA$S.apply(this, [this.domObj, localName]));
localName=p$1.fixLocal$S.apply(this, [nodeName]);
if (localName == null ) return;
if (localName.equals$O("#text")) {
if (this.keepChars) this.chars.append$S(p$1.jsObjectGetMember$OA$S.apply(this, [this.domObj, "data"]));
return;
}localName=localName.toLowerCase$();
nodeName=nodeName.toLowerCase$();
this.attribs[0]=p$1.jsObjectGetMember$OA$S.apply(this, [this.domObj, "attributes"]);
p$1.getDOMAttributesA$OA.apply(this, [this.attribs]);
this.processStartElement$S$S(localName, nodeName);
var haveChildren;
{
haveChildren = this.domObj[0].hasChildNodes;
}
if (haveChildren) {
var nextNode=p$1.jsObjectGetMember$OA$S.apply(this, [this.domObj, "firstChild"]);
while (nextNode != null ){
this.domObj[0]=nextNode;
p$1.walkDOMTree.apply(this, []);
this.domObj[0]=nextNode;
nextNode=p$1.jsObjectGetMember$OA$S.apply(this, [this.domObj, "nextSibling"]);
}
}this.processEndElement$S(localName);
}, p$1);

Clazz.newMeth(C$, 'fixLocal$S', function (name) {
{
var pt = (name== null ? -1 : name.indexOf(":")); return (pt >= 0 ? name.substring(pt+1) : name);
}
}, p$1);

Clazz.newMeth(C$, 'getDOMAttributesA$OA', function (attributes) {
this.atts.clear$();
if (attributes == null ) return;
var nodes=null;
{
nodes = attributes[0];
}
for (var i=nodes.length; --i >= 0; ) this.atts.put$O$O(p$1.fixLocal$S.apply(this, [nodes[i].name]).toLowerCase$(), nodes[i].value);

}, p$1);

Clazz.newMeth(C$, 'jsObjectGetMember$OA$S', function (jsObject, name) {
{
return jsObject[0][name];
}
}, p$1);

Clazz.newMeth(C$, 'endDocument$', function () {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.XmlReader, "NVPair", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','value']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
