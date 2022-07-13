(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'org.apache.axis.description.TypeDesc','vamsas.objects.simple.Result','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Result_Helper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['typeDesc','org.apache.axis.description.TypeDesc']]]

Clazz.newMeth(C$, 'getTypeDesc$',  function () {
return C$.typeDesc;
}, 1);

Clazz.newMeth(C$, 'getSerializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(5,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$, 'getDeserializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(6,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.typeDesc=Clazz.new_([Clazz.getClass($I$(2)), true],$I$(1,1).c$$Class$Z);
{
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Result"]));
var elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("broken");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "broken"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("failed");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "failed"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("finished");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "finished"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("invalid");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "invalid"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("jobFailed");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "jobFailed"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("queued");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "queued"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("running");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "running"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("serverError");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "serverError"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("state");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "state"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "int"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("status");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "status"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("suspended");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "suspended"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
