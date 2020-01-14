(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'java.util.Collections','javax.xml.bind.ContextFinder','org.w3c.dom.Node','Thread','java.security.AccessController']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JAXBContext");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$S', function (contextPath) {
return C$.newInstance$S$ClassLoader(contextPath, C$.getContextClassLoader$());
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader', function (contextPath, classLoader) {
return C$.newInstance$S$ClassLoader$java_util_Map(contextPath, classLoader, $I$(1).emptyMap$());
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader$java_util_Map', function (contextPath, classLoader, properties) {
return $I$(2).find$S$S$ClassLoader$java_util_Map("javax.xml.bind.JAXBContextFactory", contextPath, classLoader, properties);
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassA', function (classesToBeBound) {
return C$.newInstance$ClassA$java_util_Map(classesToBeBound, $I$(1).emptyMap$());
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassA$java_util_Map', function (classesToBeBound, properties) {
if (classesToBeBound == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}for (var i=classesToBeBound.length - 1; i >= 0; i--) {
if (classesToBeBound[i] == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}
return $I$(2).find$ClassA$java_util_Map(classesToBeBound, properties);
}, 1);

Clazz.newMeth(C$, 'createBinder$Class', function (domType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'createBinder$', function () {
return this.createBinder$Class(Clazz.getClass($I$(3),['appendChild$org_w3c_dom_Node','cloneNode$Z','compareDocumentPosition$org_w3c_dom_Node','getAttributes$','getBaseURI$','getChildNodes$','getFeature$S$S','getFirstChild$','getLastChild$','getLocalName$','getNamespaceURI$','getNextSibling$','getNodeName$','getNodeType$','getNodeValue$','getOwnerDocument$','getParentNode$','getPrefix$','getPreviousSibling$','getTextContent$','getUserData$S','hasAttributes$','hasChildNodes$','insertBefore$org_w3c_dom_Node$org_w3c_dom_Node','isDefaultNamespace$S','isEqualNode$org_w3c_dom_Node','isSameNode$org_w3c_dom_Node','isSupported$S$S','lookupNamespaceURI$S','lookupPrefix$S','normalize$','removeChild$org_w3c_dom_Node','replaceChild$org_w3c_dom_Node$org_w3c_dom_Node','setNodeValue$S','setPrefix$S','setTextContent$S','setUserData$S$O$org_w3c_dom_UserDataHandler']));
});

Clazz.newMeth(C$, 'createJAXBIntrospector$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'generateSchema$javax_xml_bind_SchemaOutputResolver', function (outputResolver) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
if (System.getSecurityManager$() == null ) {
return $I$(4).currentThread$().getContextClassLoader$();
} else {
return $I$(5).doPrivileged$java_security_PrivilegedAction(((P$.JAXBContext$1||
(function(){var C$=Clazz.newClass(P$, "JAXBContext$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return $I$(4).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.JAXBContext$1.$init$, [this, null])));
}}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
