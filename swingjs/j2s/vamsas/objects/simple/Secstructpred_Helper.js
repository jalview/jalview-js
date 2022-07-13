(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'org.apache.axis.description.TypeDesc','vamsas.objects.simple.Secstructpred','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Secstructpred_Helper");

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
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "Secstructpred"]));
var elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("output");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "output"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
