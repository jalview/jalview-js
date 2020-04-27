(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureMatcher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['condition','value'],'O',['attributeName','java.util.List','by','jalview.xml.binding.jalview.FilterBy']]]

Clazz.newMeth(C$, 'getAttributeName$', function () {
if (this.attributeName == null ) {
this.attributeName=Clazz.new_($I$(1,1));
}return this.attributeName;
});

Clazz.newMeth(C$, 'getCondition$', function () {
return this.condition;
});

Clazz.newMeth(C$, 'setCondition$S', function (value) {
this.condition=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getBy$', function () {
return this.by;
});

Clazz.newMeth(C$, 'setBy$jalview_xml_binding_jalview_FilterBy', function (value) {
this.by=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.FeatureMatcher',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="FeatureMatcher" namespace="www.jalview.org/colours" propOrder={"attributeName"  "condition"  "value"  } ']],
  [['attributeName','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['condition','String',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" required="true" ']],
  [['value','.',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" required="true" ']],
  [['by','jalview.xml.binding.jalview.FilterBy',null,['javax.xml.bind.annotation.XmlAttribute']],['name="by" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
