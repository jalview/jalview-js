(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'org.apache.axis.description.TypeDesc','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','java.util.Arrays','java.lang.reflect.Array','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ServiceHandles", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'O',['services','ext.vamsas.ServiceHandle[]','__equalsCalc','java.lang.Object']]
,['O',['typeDesc','org.apache.axis.description.TypeDesc']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandleA',  function (services) {
;C$.$init$.apply(this);
this.services=services;
}, 1);

Clazz.newMeth(C$, 'getServices$',  function () {
return this.services;
});

Clazz.newMeth(C$, 'setServices$ext_vamsas_ServiceHandleA',  function (services) {
this.services=services;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "ext.vamsas.ServiceHandles"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.services == null  && other.getServices$() == null  ) || (this.services != null  && $I$(4,"equals$OA$OA",[this.services, other.getServices$()]) ) ) ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getServices$() != null ) {
for (var i=0; i < $I$(5,"getLength$O",[this.getServices$()]); i++) {
var obj=$I$(5,"get$O$I",[this.getServices$(), i]);
if (obj != null  && !obj.getClass$().isArray$() ) {
_hashCode+=obj.hashCode$();
}}
}this.__hashCodeCalc=false;
return _hashCode;
});

Clazz.newMeth(C$, 'getTypeDesc$',  function () {
return C$.typeDesc;
}, 1);

Clazz.newMeth(C$, 'getSerializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(6,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$, 'getDeserializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(7,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.typeDesc=Clazz.new_([Clazz.getClass(C$), true],$I$(1,1).c$$Class$Z);
{
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2,1).c$$S$S,["registry.objects.vamsas", "ServiceHandles"]));
var elemField=Clazz.new_($I$(3,1));
elemField.setFieldName$S("services");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(2,1).c$$S$S,["", "services"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2,1).c$$S$S,["registry.objects.vamsas", "ServiceHandle"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
