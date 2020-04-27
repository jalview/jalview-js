(function(){var P$=Clazz.newPackage("javax.xml.transform.sax"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SAXResult", null, null, 'javax.xml.transform.Result');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['systemId'],'O',['handler','org.xml.sax.ContentHandler','lexhandler','org.xml.sax.ext.LexicalHandler']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_ContentHandler', function (handler) {
;C$.$init$.apply(this);
this.setHandler$org_xml_sax_ContentHandler(handler);
}, 1);

Clazz.newMeth(C$, 'setHandler$org_xml_sax_ContentHandler', function (handler) {
this.handler=handler;
});

Clazz.newMeth(C$, 'getHandler$', function () {
return this.handler;
});

Clazz.newMeth(C$, 'setLexicalHandler$org_xml_sax_ext_LexicalHandler', function (handler) {
this.lexhandler=handler;
});

Clazz.newMeth(C$, 'getLexicalHandler$', function () {
return this.lexhandler;
});

Clazz.newMeth(C$, 'setSystemId$S', function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'getSystemId$', function () {
return this.systemId;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
