(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WebServiceParameterSet");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.version=null;
this.description=null;
this.serviceURL=null;
this.parameters=null;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getServiceURL$', function () {
if (this.serviceURL == null ) {
this.serviceURL=Clazz.new_($I$(1));
}return this.serviceURL;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return this.parameters;
});

Clazz.newMeth(C$, 'setParameters$S', function (value) {
this.parameters=value;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.WebServiceParameterSet'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="WebServiceParameterSet" namespace="www.jalview.org/xml/wsparamset" propOrder={"version"  "description"  "serviceURL"  "parameters"  } )','@XmlSeeAlso("jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam.class" )']],
  [['version','String'],['@XmlElement(name="Version" namespace="" )']],
  [['description','.'],['@XmlElement(namespace="" )']],
  [['serviceURL','java.util.List<java.lang.String>'],['@XmlElement(namespace="" required="true" )','@XmlSchemaType(name="anyURI" )']],
  [['parameters','String'],['@XmlElement(namespace="" required="true" )']],
  [['name','.'],['@XmlAttribute(name="name" required="true" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
