(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','swingjs.api.js.DOMNode']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSSAXAttributes", null, null, ['org.xml.sax.ext.Attributes2', 'org.xml.sax.AttributeList']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nodes=null;
this.nameMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createNameMap', function () {
this.nameMap=Clazz.new_($I$(1));
for (var i=this.nodes.length; --i >= 0; ) {
var ii=Integer.valueOf$I(i);
this.nameMap.put$TK$TV(C$.getFullName$S$S$S(this.getURI$I(i), this.getLocalName$I(i), null), ii);
this.nameMap.put$TK$TV(this.getQName$I(i), ii);
}
}, p$1);

Clazz.newMeth(C$, 'c$$swingjs_api_js_DOMNode', function (node) {
C$.$init$.apply(this);
this.nodes=$I$(2).getAttr(node, "attributes");
}, 1);

Clazz.newMeth(C$, 'debugDump', function () {
for (var i=0; i < this.nodes.length; i++) {
System.out.println$S("JSSAXAttribute " + i + ": uri::" + this.getURI$I(i) + " localName::" + this.getLocalName$I(i) + " qName::" + this.getQName$I(i) + " value::" + this.getValue$I(i) );
}
}, p$1);

Clazz.newMeth(C$, 'getLength$', function () {
return this.nodes.length;
});

Clazz.newMeth(C$, 'getAttr$I$S', function (index, key) {
if (index < 0 || index >= this.nodes.length ) return null;
var s=$I$(2).getAttr(this.nodes[index], key);
return (s == null  ? "" : s);
}, p$1);

Clazz.newMeth(C$, 'getURI$I', function (index) {
return p$1.getAttr$I$S.apply(this, [index, "nameSpaceURI"]);
});

Clazz.newMeth(C$, 'getLocalName$I', function (index) {
return p$1.getAttr$I$S.apply(this, [index, "localName"]);
});

Clazz.newMeth(C$, 'getQName$I', function (index) {
return p$1.getAttr$I$S.apply(this, [index, "nodeName"]);
});

Clazz.newMeth(C$, 'getType$I', function (index) {
return "CDATA";
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
return p$1.getAttr$I$S.apply(this, [index, "value"]);
});

Clazz.newMeth(C$, 'getIndex$S$S', function (uri, localName) {
return this.getIndex2$S$S(uri, localName);
});

Clazz.newMeth(C$, 'getIndex2$S$S', function (uri, localName) {
if (this.nameMap == null ) p$1.createNameMap.apply(this, []);
var ii=this.nameMap.get$O(C$.getFullName$S$S$S(uri, localName, null));
return (ii == null  ? -1 : ii.intValue$());
});

Clazz.newMeth(C$, 'getIndex$S', function (qName) {
return this.getIndex1$S(qName);
});

Clazz.newMeth(C$, 'getIndex1$S', function (qName) {
if (this.nameMap == null ) p$1.createNameMap.apply(this, []);
var ii=this.nameMap.get$O(qName);
return (ii == null  ? -1 : ii.intValue$());
});

Clazz.newMeth(C$, 'getType$S$S', function (uri, localName) {
var i=this.getIndex2$S$S(uri, localName);
return (i < 0 ? null : this.getType$I(i));
});

Clazz.newMeth(C$, 'getType$S', function (qName) {
var i=this.getIndex$S(qName);
return (i < 0 ? null : this.getType$I(i));
});

Clazz.newMeth(C$, 'getValue$S$S', function (uri, localName) {
var i=this.getIndex2$S$S(uri, localName);
return (i < 0 ? null : this.getType$I(i));
});

Clazz.newMeth(C$, 'getValue$S', function (qName) {
var i=this.getIndex$S(qName);
return (i < 0 ? null : this.getValue$I(i));
});

Clazz.newMeth(C$, 'getName$I', function (i) {
return p$1.getAttr$I$S.apply(this, [i, "name"]);
});

Clazz.newMeth(C$, 'isDeclared$I', function (index) {
return false;
});

Clazz.newMeth(C$, 'isDeclared$S', function (qName) {
return false;
});

Clazz.newMeth(C$, 'isDeclared$S$S', function (uri, localName) {
return false;
});

Clazz.newMeth(C$, 'isSpecified$I', function (index) {
return false;
});

Clazz.newMeth(C$, 'isSpecified$S$S', function (uri, localName) {
return false;
});

Clazz.newMeth(C$, 'isSpecified$S', function (qName) {
return false;
});

Clazz.newMeth(C$, 'getFullName$S$S$S', function (uri, localName, qName) {
return (uri == null  || uri.length$() == 0  ? "" : uri + "#") + (qName == null  || qName.length$() == 0  || qName.equals$O(localName)  ? localName : qName);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
