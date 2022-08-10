(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WebServiceParameterSet");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['version','description','parameters','name'],'O',['serviceURL','java.util.List']]]

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getServiceURL$',  function () {
if (this.serviceURL == null ) {
this.serviceURL=Clazz.new_($I$(1,1));
}return this.serviceURL;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return this.parameters;
});

Clazz.newMeth(C$, 'setParameters$S',  function (value) {
this.parameters=value;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (value) {
this.name=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.WebServiceParameterSet',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlSeeAlso']],['XmlAccessType.FIELD','name="WebServiceParameterSet" namespace="www.jalview.org/xml/wsparamset" propOrder={"version"  "description"  "serviceURL"  "parameters"  } ','"jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam.class" ']],
  [['version','String',null,['javax.xml.bind.annotation.XmlElement']],['name="Version" namespace="" ']],
  [['description','.',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['serviceURL','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlSchemaType']],['namespace="" required="true" ','name="anyURI" ']],
  [['parameters','String',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" required="true" ']],
  [['name','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" required="true" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
