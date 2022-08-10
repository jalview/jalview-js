(function(){var P$=Clazz.newPackage("uk.ac.ebi.picr.model"),I$=[[0,'org.apache.axis.description.TypeDesc','uk.ac.ebi.picr.model.UPEntry','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UPEntry_Helper");

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
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "UPEntry"]));
var elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("CRC64");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "CRC64"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("UPI");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "UPI"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("identicalCrossReferences");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "identicalCrossReferences"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "CrossReference"]));
elemField.setMinOccurs$I(0);
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("logicalCrossReferences");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "logicalCrossReferences"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "CrossReference"]));
elemField.setMinOccurs$I(0);
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("sequence");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "sequence"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4,1));
elemField.setFieldName$S("timestamp");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://model.picr.ebi.ac.uk", "timestamp"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "dateTime"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
