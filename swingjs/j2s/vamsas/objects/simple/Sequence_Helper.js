(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'org.apache.axis.description.TypeDesc','vamsas.objects.simple.Sequence','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Sequence_Helper");
C$.typeDesc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.typeDesc=Clazz.new_($I$(1).c$$Class$Z,[Clazz.getClass($I$(2)), true]);
{
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["simple.objects.vamsas", "Sequence"]));
var elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("id");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "id"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("seq");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "seq"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTypeDesc$', function () {
return C$.typeDesc;
}, 1);

Clazz.newMeth(C$, 'getSerializer$S$Class$javax_xml_namespace_QName', function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(5).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$, 'getDeserializer$S$Class$javax_xml_namespace_QName', function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(6).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
