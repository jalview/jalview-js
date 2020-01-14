(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','swingjs.JSUtil','java.io.BufferedInputStream','javajs.util.Rdr','java.io.BufferedReader','javajs.util.PT','swingjs.xml.JSSAXContentHandler','swingjs.api.js.DOMNode','swingjs.xml.JSSAXAttributes','javajs.util.AU','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSSAXParser", null, null, ['org.xml.sax.Parser', 'org.xml.sax.XMLReader']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.resolver=null;
this.dtdHandler=null;
this.docHandler=null;
this.contentHandler=null;
this.errorHandler=null;
this.havePre=false;
this.uniqueSeq=null;
this.ver2=false;
this.htPrefixMap=null;
this.tempChars=null;
this.currentNode=null;
this.props=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.htPrefixMap=Clazz.new_($I$(1));
this.tempChars=Clazz.array(Character.TYPE, [1024]);
}, 1);

Clazz.newMeth(C$, 'getXMLReader$', function () {
return this;
});

Clazz.newMeth(C$, 'setLocale$java_util_Locale', function (locale) {
});

Clazz.newMeth(C$, 'setEntityResolver$org_xml_sax_EntityResolver', function (resolver) {
this.resolver=resolver;
});

Clazz.newMeth(C$, 'setDTDHandler$org_xml_sax_DTDHandler', function (handler) {
this.dtdHandler=handler;
});

Clazz.newMeth(C$, 'setDocumentHandler$org_xml_sax_DocumentHandler', function (handler) {
this.docHandler=handler;
});

Clazz.newMeth(C$, 'setErrorHandler$org_xml_sax_ErrorHandler', function (handler) {
this.errorHandler=handler;
});

Clazz.newMeth(C$, 'parse$S', function (fileName) {
this.parseXMLString$S($I$(2).getFileAsString$S(fileName));
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource', function (source) {
this.parse$org_xml_sax_InputSource$I(source, 0);
});

Clazz.newMeth(C$, 'parseXMLString$S', function (data) {
try {
this.parseDocument$swingjs_api_js_DOMNode$I(this.parseXML$S(data), 0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
p$1.error$Exception.apply(this, [e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler', function (source, handler) {
this.setContentHandler$org_xml_sax_ContentHandler(handler);
this.parse$org_xml_sax_InputSource$I(source, 0);
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource$I', function (source, mode) {
var rdr=source.getCharacterStream$();
var data=Clazz.array(String, [1]);
if (rdr == null ) {
var bs=source.getByteStream$();
if (!(Clazz.instanceOf(bs, "java.io.BufferedInputStream"))) bs=Clazz.new_($I$(3).c$$java_io_InputStream,[bs]);
data[0]=$I$(4).fixUTF$BA($I$(4).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(bs, null));
} else {
if (!(Clazz.instanceOf(rdr, "java.io.BufferedReader"))) rdr=Clazz.new_($I$(5).c$$java_io_Reader,[rdr]);
$I$(4).readAllAsString$java_io_BufferedReader$I$Z$SA$I(rdr, -1, false, data, 0);
}try {
this.parseDocument$swingjs_api_js_DOMNode$I(this.parseXML$S(data[0]), mode);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
p$1.error$Exception.apply(this, [e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parseXML$S', function (data) {
return $I$(2).jQuery.parseXML(p$1.removeProcessing$S.apply(this, [data]));
});

Clazz.newMeth(C$, 'removeProcessing$S', function (data) {
if (false && data.indexOf$S("<?") >= 0 ) {
p$1.getUniqueSequence$S.apply(this, [data]);
data=$I$(6).rep$S$S$S($I$(6).rep$S$S$S(data, "<?", "<![CDATA[" + this.uniqueSeq), "?>", "]]>");
if (data.startsWith$S("<!")) {
data="<pre>" + data + "</pre>" ;
this.havePre=true;
}}return data;
}, p$1);

Clazz.newMeth(C$, 'getUniqueSequence$S', function (data) {
var s="~";
while (data.indexOf$S("<![CDATA[" + s) >= 0)s += "~";

this.uniqueSeq=s;
}, p$1);

Clazz.newMeth(C$, 'error$Exception', function (e) {
var ee=Clazz.new_(Clazz.load('org.xml.sax.SAXParseException').c$$S$org_xml_sax_Locator,["Invalid Document", null]);
if (this.errorHandler == null ) throw (ee);
 else this.errorHandler.fatalError$org_xml_sax_SAXParseException(ee);
}, p$1);

Clazz.newMeth(C$, 'registerPrefixes$swingjs_api_js_DOMNode', function (node) {
var names=Clazz.array(String, [0]);

names = node.getAttributeNames();
for (var i=names.length; --i >= 0; ) {
var name=names[i];
var isDefault;
if (!(isDefault=name.equals$O("xmlns")) && !name.startsWith$S("xmlns:") ) continue;
var prefix=(isDefault ? "##default:" : name.substring$I(6) + ":");
var val=C$.getAttribute$swingjs_api_js_DOMNode$S(node, name);
this.htPrefixMap.put$TK$TV(prefix, val);
this.htPrefixMap.put$TK$TV(val + ":", val);
this.htPrefixMap.put$TK$TV(val, prefix);
}
});

Clazz.newMeth(C$, 'getNamespaceForAttributeName$S', function (name) {
var pt=name.indexOf$S(":");
if (pt < 0) return "";
var uri=this.htPrefixMap.get$O(name.substring$I$I(0, pt + 1));
if (uri != null ) return uri;
System.out.println$S("!! JSSAXParser could not find " + name);
return "";
});

Clazz.newMeth(C$, 'getAttribute$swingjs_api_js_DOMNode$S', function (node, name) {
return (node.getAttribute(name) ||null);
}, 1);

Clazz.newMeth(C$, 'parseDocument$swingjs_api_js_DOMNode$I', function (doc, mode) {
if (this.docHandler == null  && this.contentHandler == null  ) this.contentHandler=Clazz.new_($I$(7));
this.ver2=(this.contentHandler != null );
p$1.setNode$swingjs_api_js_DOMNode.apply(this, [doc]);
if (mode == 2) return;
if (this.ver2) this.contentHandler.startDocument$();
 else this.docHandler.startDocument$();
var element=$I$(8).getAttr(doc, "firstChild");

var type;
while (element && (type = element.nodeType) != 1) { element = element.nextSibling;
}
p$1.walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I.apply(this, [null, element, this.havePre, mode]);
if (this.ver2) this.contentHandler.endDocument$();
 else this.docHandler.endDocument$();
});

Clazz.newMeth(C$, 'walkDOMTree$swingjs_api_js_DOMNode$I', function (node, mode) {
p$1.walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I.apply(this, [null, node, false, mode]);
});

Clazz.newMeth(C$, 'walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I', function (root, node, skipTag, mode) {
var localName=($I$(8).getAttr(node, "localName"));
var nodeName=$I$(8).getAttr(node, "nodeName");
var uri=$I$(8).getAttr(node, "namespaceURI");
if (localName == null ) {
if (mode != 0) return;
p$1.getTextData$swingjs_api_js_DOMNode$Z.apply(this, [node, true]);
} else if (!skipTag) {
this.registerPrefixes$swingjs_api_js_DOMNode(node);
var atts=Clazz.new_($I$(9).c$$swingjs_api_js_DOMNode,[node]);
p$1.setNode$swingjs_api_js_DOMNode.apply(this, [node]);
if (this.ver2) this.contentHandler.startElement$S$S$S$org_xml_sax_Attributes(uri, localName, nodeName, atts);
 else this.docHandler.startElement$S$org_xml_sax_AttributeList(localName, atts);
}if (root == null ) root=node;
var isRoot=(node === root );
node=$I$(8).getAttr(node, "firstChild");
while (node != null ){
if (isRoot || mode == 0 ) p$1.walkDOMTreePrivate$swingjs_api_js_DOMNode$swingjs_api_js_DOMNode$Z$I.apply(this, [root, node, false, mode]);
node=$I$(8).getAttr(node, "nextSibling");
}
if (localName == null  || skipTag ) return;
if (this.ver2) this.contentHandler.endElement$S$S$S(uri, localName, nodeName);
 else this.docHandler.endElement$S(localName);
}, p$1);

Clazz.newMeth(C$, 'getChildren$swingjs_api_js_DOMNode', function (node) {
return $I$(8).getAttr(node, "children");
}, 1);

Clazz.newMeth(C$, 'getSimpleInnerText$swingjs_api_js_DOMNode', function (node) {
var children=C$.getChildren$swingjs_api_js_DOMNode(node);
return (children == null  || children.length > 0  ? "" : $I$(8).getAttr(node, "textContent"));
}, 1);

Clazz.newMeth(C$, 'getTextData$swingjs_api_js_DOMNode$Z', function (node, doProcess) {
var nodeName=$I$(8).getAttr(node, "nodeName");
var isText="#text".equals$O(nodeName);
if (isText || "#cdata-section".equals$O(nodeName) ) {
var data=$I$(8).getAttr(node, "textContent");
if (!doProcess) return data;
if (isText || this.uniqueSeq == null   || !data.startsWith$S(this.uniqueSeq) ) {
var len=data.length$();
var ch=this.tempChars;
if (len > ch.length) ch=this.tempChars=$I$(10).ensureLength$O$I(ch, len * 2);
for (var i=len; --i >= 0; ) ch[i]=data.charAt$I(i);

p$1.setNode$swingjs_api_js_DOMNode.apply(this, [node]);
if (this.ver2) this.contentHandler.characters$CA$I$I(ch, 0, len);
 else this.docHandler.characters$CA$I$I(ch, 0, len);
return null;
}data=data.substring$I(this.uniqueSeq.length$());
var target=data + " ";
target=target.substring$I$I(0, target.indexOf$S(" "));
data=data.substring$I(target.length$()).trim$();
if (this.ver2) this.contentHandler.processingInstruction$S$S(target, data);
 else this.docHandler.processingInstruction$S$S(target, data);
}return null;
}, p$1);

Clazz.newMeth(C$, 'setNode$swingjs_api_js_DOMNode', function (node) {
this.currentNode=node;
}, p$1);

Clazz.newMeth(C$, 'getNode$', function () {
return this.currentNode;
});

Clazz.newMeth(C$, 'getFeature$S', function (name) {
return (this.getProperty$S("\1" + name) != null );
});

Clazz.newMeth(C$, 'setFeature$S$Z', function (name, value) {
this.setProperty$S$O("\1" + name, value ? $I$(11).TRUE : null);
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
return (this.props == null  ? null : this.props.get$O(name));
});

Clazz.newMeth(C$, 'setProperty$S$O', function (name, value) {
if (value == null ) {
if (this.props != null ) this.props.remove$O(name);
return;
}if (this.props == null ) this.props=Clazz.new_($I$(1));
this.props.put$TK$TV(name, value);
});

Clazz.newMeth(C$, 'getEntityResolver$', function () {
return this.resolver;
});

Clazz.newMeth(C$, 'getDTDHandler$', function () {
return this.dtdHandler;
});

Clazz.newMeth(C$, 'setContentHandler$org_xml_sax_ContentHandler', function (handler) {
this.contentHandler=handler;
});

Clazz.newMeth(C$, 'getContentHandler$', function () {
return this.contentHandler;
});

Clazz.newMeth(C$, 'getErrorHandler$', function () {
return this.errorHandler;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
