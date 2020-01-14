(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation"),I$=[[0,'javax.xml.transform.dom.DOMResult','javax.xml.transform.dom.DOMSource']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "W3CDomHandler", null, null, 'javax.xml.bind.annotation.DomHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.builder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.builder=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_parsers_DocumentBuilder', function (builder) {
C$.$init$.apply(this);
if (builder == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.builder=builder;
}, 1);

Clazz.newMeth(C$, 'getBuilder$', function () {
return this.builder;
});

Clazz.newMeth(C$, 'setBuilder$javax_xml_parsers_DocumentBuilder', function (builder) {
this.builder=builder;
});

Clazz.newMeth(C$, 'createUnmarshaller$javax_xml_bind_ValidationEventHandler', function (errorHandler) {
if (this.builder == null ) return Clazz.new_($I$(1));
 else return Clazz.new_($I$(1).c$$org_w3c_dom_Node,[this.builder.newDocument$()]);
});

Clazz.newMeth(C$, ['getElement$javax_xml_transform_dom_DOMResult','getElement$TResultT'], function (r) {
var n=r.getNode$();
if (Clazz.instanceOf(n, "org.w3c.dom.Document")) {
return (n).getDocumentElement$();
}if (Clazz.instanceOf(n, "org.w3c.dom.Element")) return n;
if (Clazz.instanceOf(n, "org.w3c.dom.DocumentFragment")) return n.getChildNodes$().item$I(0);
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[n.toString()]);
});

Clazz.newMeth(C$, ['marshal$org_w3c_dom_Element$javax_xml_bind_ValidationEventHandler','marshal$TElementT$javax_xml_bind_ValidationEventHandler'], function (element, errorHandler) {
return Clazz.new_($I$(2).c$$org_w3c_dom_Node,[element]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
