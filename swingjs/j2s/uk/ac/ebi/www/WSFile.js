(function(){var P$=Clazz.newPackage("uk.ac.ebi.www"),I$=[[0,'org.apache.axis.description.TypeDesc','org.apache.axis.description.ElementDesc','javax.xml.namespace.QName','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WSFile", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'S',['type','ext'],'O',['__equalsCalc','java.lang.Object']]
,['O',['typeDesc','org.apache.axis.description.TypeDesc']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getExt$',  function () {
return this.ext;
});

Clazz.newMeth(C$, 'setExt$S',  function (ext) {
this.ext=ext;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "uk.ac.ebi.www.WSFile"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.type == null  && other.getType$() == null  ) || (this.type != null  && this.type.equals$O(other.getType$()) ) ) && ((this.ext == null  && other.getExt$() == null  ) || (this.ext != null  && this.ext.equals$O(other.getExt$()) ) )  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getType$() != null ) {
_hashCode+=this.getType$().hashCode$();
}if (this.getExt$() != null ) {
_hashCode+=this.getExt$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});

Clazz.newMeth(C$, 'getTypeDesc$',  function () {
return C$.typeDesc;
}, 1);

Clazz.newMeth(C$, 'getSerializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(4,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$, 'getDeserializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(5,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.typeDesc=Clazz.new_([Clazz.getClass(C$)],$I$(1,1).c$$Class);
{
var field=Clazz.new_($I$(2,1));
field.setFieldName$S("type");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "type"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("ext");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "ext"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
