(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'org.apache.axis.description.TypeDesc','javax.xml.namespace.QName','org.apache.axis.description.ElementDesc','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ServiceHandle", null, null, 'java.io.Serializable');
C$.typeDesc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.typeDesc=Clazz.new_($I$(1).c$$Class$Z,[Clazz.getClass(C$), true]);
{
C$.typeDesc.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["registry.objects.vamsas", "ServiceHandle"]));
var elemField=Clazz.new_($I$(3));
elemField.setFieldName$S("abstractName");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["", "abstractName"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(3));
elemField.setFieldName$S("description");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["", "description"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(3));
elemField.setFieldName$S("endpointURL");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["", "endpointURL"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
elemField=Clazz.new_($I$(3));
elemField.setFieldName$S("name");
elemField.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["", "name"]));
elemField.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(2).c$$S$S,["http://schemas.xmlsoap.org/soap/encoding/", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(elemField);
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.abstractName=null;
this.description=null;
this.endpointURL=null;
this.name=null;
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

Clazz.newMeth(C$, 'c$$S$S$S$S', function (abstractName, description, endpointURL, name) {
C$.$init$.apply(this);
this.abstractName=abstractName;
this.description=description;
this.endpointURL=endpointURL;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getAbstractName$', function () {
return this.abstractName;
});

Clazz.newMeth(C$, 'setAbstractName$S', function (abstractName) {
this.abstractName=abstractName;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getEndpointURL$', function () {
return this.endpointURL;
});

Clazz.newMeth(C$, 'setEndpointURL$S', function (endpointURL) {
this.endpointURL=endpointURL;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "ext.vamsas.ServiceHandle"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.abstractName == null  && other.getAbstractName$() == null  ) || (this.abstractName != null  && this.abstractName.equals$O(other.getAbstractName$()) ) ) && ((this.description == null  && other.getDescription$() == null  ) || (this.description != null  && this.description.equals$O(other.getDescription$()) ) ) && ((this.endpointURL == null  && other.getEndpointURL$() == null  ) || (this.endpointURL != null  && this.endpointURL.equals$O(other.getEndpointURL$()) ) ) && ((this.name == null  && other.getName$() == null  ) || (this.name != null  && this.name.equals$O(other.getName$()) ) )  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getAbstractName$() != null ) {
_hashCode+=this.getAbstractName$().hashCode$();
}if (this.getDescription$() != null ) {
_hashCode+=this.getDescription$().hashCode$();
}if (this.getEndpointURL$() != null ) {
_hashCode+=this.getEndpointURL$().hashCode$();
}if (this.getName$() != null ) {
_hashCode+=this.getName$().hashCode$();
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
