(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'org.apache.axis.description.TypeDesc','vamsas.objects.simple.Result','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Result_Helper");
C$.typeDesc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.typeDesc=Clazz.new_($I$(1).c$$Class$Z,[Clazz.getClass($I$(2)), true]);
{
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["simple.objects.vamsas", "Result"]));
var elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("broken");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "broken"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("failed");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "failed"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("finished");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "finished"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("invalid");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "invalid"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("jobFailed");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "jobFailed"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("queued");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "queued"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("running");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "running"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("serverError");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "serverError"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("state");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "state"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "int"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("status");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "status"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("suspended");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "suspended"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
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
