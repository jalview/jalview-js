(function(){var P$=Clazz.newPackage("uk.ac.ebi.www"),I$=[[0,'org.apache.axis.description.TypeDesc','org.apache.axis.description.ElementDesc','javax.xml.namespace.QName','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Data", null, null, 'java.io.Serializable');
C$.typeDesc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.typeDesc=Clazz.new_($I$(1).c$$Class,[Clazz.getClass(C$)]);
{
var field=Clazz.new_($I$(2));
field.setFieldName$S("type");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "type"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2));
field.setFieldName$S("content");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "content"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.content=null;
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S', function (content) {
this.content=content;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "uk.ac.ebi.www.Data"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.type == null  && other.getType$() == null  ) || (this.type != null  && this.type.equals$O(other.getType$()) ) ) && ((this.content == null  && other.getContent$() == null  ) || (this.content != null  && this.content.equals$O(other.getContent$()) ) )  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getType$() != null ) {
_hashCode+=this.getType$().hashCode$();
}if (this.getContent$() != null ) {
_hashCode+=this.getContent$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});

Clazz.newMeth(C$, 'getTypeDesc$', function () {
return C$.typeDesc;
}, 1);

Clazz.newMeth(C$, 'getSerializer$S$Class$javax_xml_namespace_QName', function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(4).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$, 'getDeserializer$S$Class$javax_xml_namespace_QName', function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(5).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
