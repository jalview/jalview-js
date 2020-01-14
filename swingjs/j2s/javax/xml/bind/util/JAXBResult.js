(function(){var P$=Clazz.newPackage("javax.xml.bind.util"),I$=[[0,'javax.xml.bind.util.Messages']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JAXBResult", null, 'javax.xml.transform.sax.SAXResult');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unmarshallerHandler=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_bind_JAXBContext', function (context) {
C$.c$$javax_xml_bind_Unmarshaller.apply(this, [(context == null ) ? C$.assertionFailed$() : context.createUnmarshaller$()]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_bind_Unmarshaller', function (_unmarshaller) {
Clazz.super_(C$, this,1);
if (_unmarshaller == null ) throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(1).format$S("JAXBResult.NullUnmarshaller")]);
this.unmarshallerHandler=_unmarshaller.getUnmarshallerHandler$();
C$.superclazz.prototype.setHandler$org_xml_sax_ContentHandler.apply(this, [this.unmarshallerHandler]);
}, 1);

Clazz.newMeth(C$, 'getResult$', function () {
return this.unmarshallerHandler.getResult$();
});

Clazz.newMeth(C$, 'assertionFailed$', function () {
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(1).format$S("JAXBResult.NullContext")]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
