(function(){var P$=Clazz.newPackage("uk.ac.ebi.picr.model"),I$=[[0,'org.apache.axis.description.TypeDesc','uk.ac.ebi.picr.model.UPEntry','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UPEntry_Helper");
C$.typeDesc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.typeDesc=Clazz.new_($I$(1).c$$Class$Z,[Clazz.getClass($I$(2)), true]);
{
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "UPEntry"]));
var elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("CRC64");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "CRC64"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("UPI");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "UPI"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("identicalCrossReferences");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "identicalCrossReferences"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "CrossReference"]));
elemField.setMinOccurs$I(0);
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("logicalCrossReferences");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "logicalCrossReferences"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "CrossReference"]));
elemField.setMinOccurs$I(0);
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("sequence");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "sequence"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(4));
elemField.setFieldName$S("timestamp");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "timestamp"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "dateTime"]));
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
