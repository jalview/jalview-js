(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'java.util.Hashtable','java.util.ArrayList','javajs.util.PT','javax.xml.namespace.QName','swingjs.JSUtil','swingjs.api.js.DOMNode','swingjs.xml.JSJAXBClass']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSJAXBField", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mapEntryValue=null;
this.fieldType=0;
this.boundNode=null;
this.boundListNodes=null;
this.qualifiedTypeName=null;
this.listFields=null;
this.listValues=null;
this.listOwner=null;
this.defaultValue=null;
this.xmlCharacterData=null;
this.xmlAttributeData=null;
this.xmlType=null;
this.isNil=false;
this.holdsObjects=0;
this.qualifiedName=null;
this.qualifiedWrapName=null;
this.text=null;
this.javaName=null;
this.javaClassName=null;
this.xmlSchemaType=null;
this.typeAdapter=null;
this.mimeType=null;
this.enumValue=null;
this.mapClassNameKey=null;
this.mapClassNameValue=null;
this.listClassName=null;
this.isTransient=false;
this.isAttribute=false;
this.isXmlID=false;
this.isXmlIDREF=false;
this.isXmlValue=false;
this.asList=false;
this.isNillable=false;
this.isArray=false;
this.isByteArray=false;
this.isContainer=false;
this.methodSet=null;
this.methodGet=null;
this.isMethod=false;
this.index=0;
this.clazz=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.mapEntryValue=this;
this.fieldType=0;
this.xmlCharacterData="";
this.holdsObjects=0;
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_xml_JSJAXBField', function (listOwner) {
C$.$init$.apply(this);
this.listOwner=listOwner;
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_xml_JSJAXBClass$OAA$O$I$java_util_List', function (jaxbClass, adata, clazz, index, propOrder) {
C$.$init$.apply(this);
this.clazz=clazz;
this.index=index;
this.javaName=adata[0][0];
this.isMethod=(this.javaName != null  && this.javaName.charAt$I(1) == ":" );
this.javaClassName=adata[0][1];
this.holdsObjects=(C$.isObject$S(this.javaClassName) ? 1 : 0);
var pt=this.javaClassName.indexOf$S("<");
if (pt >= 0) {
this.isContainer=true;
var classNames=this.javaClassName.substring$I$I(pt + 1, this.javaClassName.lastIndexOf$S(">")).split$S(",");
this.fieldType=classNames.length;
for (var i=0; i < this.fieldType; i++) classNames[i]=C$.stripJavaLang$S(classNames[i]);

this.javaClassName=this.javaClassName.substring$I$I(0, pt);
switch (this.fieldType) {
case 1:
if (C$.isObject$S(this.listClassName=classNames[0])) this.holdsObjects=3;
break;
case 2:
if (C$.isObject$S(this.mapClassNameKey=classNames[0])) this.holdsObjects=4;
if (C$.isObject$S(this.mapClassNameValue=classNames[1])) this.holdsObjects+=8;
break;
}
}this.isByteArray=this.javaClassName.equals$O("byte[]");
this.isArray=!this.isByteArray && this.javaClassName.indexOf$S("[]") >= 0 ;
if (this.isArray && this.holdsObjects == 1 ) this.holdsObjects=2;
this.isContainer|=this.isArray;
if (this.isMethod) p$1.getMethods$O$O.apply(this, [jaxbClass.getJavaObject$(), clazz]);
var attr=Clazz.new_($I$(1));
this.text="";
p$1.readAnnotations$swingjs_xml_JSJAXBClass$SA$java_util_List$java_util_Map.apply(this, [jaxbClass, adata[1], propOrder, attr]);
p$1.finalizeNames$I$swingjs_xml_JSJAXBClass.apply(this, [index, jaxbClass]);
}, 1);

Clazz.newMeth(C$, 'finalizeNames$I$swingjs_xml_JSJAXBClass', function (index, jaxbClass) {
if (this.xmlSchemaType == null  && this.typeAdapter == null  ) {
if (this.javaClassName.equals$O("byte[]")) this.xmlSchemaType="base64Binary";
if (this.javaClassName.equals$O("javax.xml.datatype.XMLGregorianCalendar") || this.javaClassName.equals$O("java.util.Date") ) this.xmlSchemaType="dateTime";
}if (index == 0) {
this.qualifiedName=jaxbClass.finalizeFieldQName$javax_xml_namespace_QName$S$I(this.qualifiedName, this.javaClassName, 1);
this.qualifiedTypeName=jaxbClass.finalizeFieldQName$javax_xml_namespace_QName$S$I(this.qualifiedTypeName, this.javaClassName, 2);
jaxbClass.isAnonymous=(jaxbClass.qualifiedTypeName.getLocalPart$().length$() == 0);
} else {
if (this.javaName != null ) {
if (this.qualifiedWrapName != null ) {
this.qualifiedWrapName=jaxbClass.finalizeFieldQName$javax_xml_namespace_QName$S$I(this.qualifiedWrapName, null, 4);
}this.qualifiedName=jaxbClass.finalizeFieldQName$javax_xml_namespace_QName$S$I(this.qualifiedName, this.javaName, (this.isAttribute ? 3 : 4));
}}}, p$1);

Clazz.newMeth(C$, 'stripJavaLang$S', function (name) {
return (name.startsWith$S("java.lang.") ? name.substring$I(10) : name);
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
try {
var f=Clazz.clone(this);
f.mapEntryValue=null;
f.boundNode=null;
f.boundListNodes=null;
f.xmlCharacterData="";
f.xmlAttributeData=null;
f.xmlType=null;
f.isNil=false;
return f;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setCharacters$S', function (ch) {
this.xmlCharacterData=(ch == null  ? "" : ch);
});

Clazz.newMeth(C$, 'setAttributeData$S', function (val) {
this.xmlAttributeData=val;
});

Clazz.newMeth(C$, 'setAttributes$org_xml_sax_Attributes', function (attr) {
this.xmlType=attr.getValue$S("xsi:type");
this.isNil=(attr.getIndex$S("xsi:nil") >= 0);
});

Clazz.newMeth(C$, 'setNode$swingjs_api_js_DOMNode', function (node) {
if (this.isContainer) {
if (this.boundListNodes == null ) {
this.boundListNodes=Clazz.new_($I$(2));
}this.boundListNodes.add$TE(node);
}this.boundNode=node;
});

Clazz.newMeth(C$, 'isObject$S', function (javaClassName) {
return javaClassName.equals$O("java.lang.Object") || javaClassName.equals$O("Object") || javaClassName.equals$O("Object[]")  ;
}, 1);

Clazz.newMeth(C$, 'readAnnotations$swingjs_xml_JSJAXBClass$SA$java_util_List$java_util_Map', function (jaxbClass, javaAnnotations, propOrder, attr) {
for (var i=0; i < javaAnnotations.length; i++) {
var data=javaAnnotations[i];
this.text += data + ";";
var pt=data.indexOf$S("(");
var tag=data.substring$I$I(0, (pt < 0 ? data.length$() : pt));
tag=tag.replace$CharSequence$CharSequence("@javax.xml.bind.annotation.", "@");
data=(pt < 0 ? "" : data.substring$I$I(pt + 1, data.lastIndexOf$S(")")));
if (pt >= 0 && !tag.equals$O("@XmlElements")  && data.indexOf$S("=") >= 0 ) p$1.addXMLAttributes$S$S$java_util_Map.apply(this, [tag, data, attr]);
if (this.javaName == null ) p$1.processTypeAnnotation$swingjs_xml_JSJAXBClass$S$S$java_util_List$java_util_Map.apply(this, [jaxbClass, tag, data, propOrder, attr]);
 else p$1.processFieldAnnotation$swingjs_xml_JSJAXBClass$S$S$java_util_Map.apply(this, [jaxbClass, tag, data, attr]);
}
}, p$1);

Clazz.newMeth(C$, 'processTypeAnnotation$swingjs_xml_JSJAXBClass$S$S$java_util_List$java_util_Map', function (jaxbClass, tag, data, propOrder, attr) {
switch (tag) {
case "@XmlSchema":
return;
}
switch (tag) {
case "@XmlRootElement":
this.qualifiedName=p$1.getName$S$java_util_Map.apply(this, [tag, attr]);
return;
case "@XmlType":
this.qualifiedTypeName=p$1.getName$S$java_util_Map.apply(this, [tag, attr]);
var order=attr.get$O("@XmlType:propOrder");
if (order != null ) {
var pt=Clazz.array(Integer.TYPE, [1]);
while (pt[0] >= 0){
var prop=$I$(3).getQuotedStringNext$S$IA(order, pt).trim$();
if (prop.length$() == 0) break;
propOrder.add$TE(prop);
}
}return;
case "@XmlAccessorType":
jaxbClass.accessorType=(data.indexOf$S("FIELD") >= 0 ? 1 : data.indexOf$S("MEMBER") >= 0 ? 2 : data.indexOf$S("PROPERTY") >= 0 ? 3 : 0);
return;
case "@XmlSeeAlso":
jaxbClass.addSeeAlso$SA(C$.getSeeAlso$S(data));
return;
case "@XmlEnum":
jaxbClass.initEnum$S(data);
return;
}
System.out.println$S("JSJAXBField Unprocessed type annotation: " + this.text);
}, p$1);

Clazz.newMeth(C$, 'processFieldAnnotation$swingjs_xml_JSJAXBClass$S$S$java_util_Map', function (jaxbClass, tag, data, attr) {
switch (tag) {
case "!XmlInner":
jaxbClass.addSeeAlso$SA([this.javaClassName]);
this.javaName=null;
return;
case "@XmlTransient":
this.isTransient=true;
return;
case "@XmlAttribute":
this.isAttribute=true;
if (this.isContainer) this.asList=true;
this.qualifiedName=p$1.getName$S$java_util_Map.apply(this, [tag, attr]);
return;
case "@XmlElements":
this.listFields=Clazz.new_($I$(2));
return;
case "@XmlElement":
if (this.listFields != null ) {
var f=Clazz.new_(C$.c$$swingjs_xml_JSJAXBField,[this]);
this.listFields.add$TE(f);
p$1.processFieldAnnotation$swingjs_xml_JSJAXBClass$S$S$java_util_Map.apply(f, [jaxbClass, tag, data, attr]);
f.javaClassName=C$.stripJavaLang$S(f.javaClassName).replace$CharSequence$CharSequence(".class", "");
f.javaName=this.javaName + "::" + f.javaClassName ;
p$1.finalizeNames$I$swingjs_xml_JSJAXBClass.apply(f, [this.index, jaxbClass]);
return;
}this.qualifiedName=p$1.getName$S$java_util_Map.apply(this, [tag, attr]);
this.isNillable="true".equals$O(attr.get$O("@XmlElement:nillable"));
this.defaultValue=attr.get$O("@XmlElement:defaultValue");
var type=attr.get$O("@XmlElement:type");
if (type != null ) this.javaClassName=type;
return;
case "@XmlSchemaType":
this.xmlSchemaType=attr.get$O("@XmlSchemaType:name");
if (this.xmlSchemaType.equals$O("hexBinary")) {
this.xmlSchemaType=null;
this.typeAdapter="javax.xml.bind.annotation.adapters.HexBinaryAdapter";
}return;
case "@XmlJavaTypeAdapter":
this.typeAdapter=attr.get$O("@XmlJavaTypeAdapter:name");
if (this.typeAdapter == null ) this.typeAdapter=data;
this.typeAdapter=C$.getQuotedClass$S(data);
return;
case "@XmlValue":
jaxbClass.xmlValueField=this;
this.isXmlValue=true;
return;
case "@XmlEnumValue":
this.enumValue=data=$I$(3).trim$S$S(data, "\"");
jaxbClass.enumMap.put$TK$TV("/" + this.javaName, data);
jaxbClass.enumMap.put$TK$TV("//" + data, this.javaName);
jaxbClass.enumMap.put$TK$TV(data, this);
return;
case "@XmlList":
this.asList=true;
return;
case "@XmlID":
this.isXmlID=true;
jaxbClass.xmlIDField=this;
return;
case "@XmlIDREF":
this.isXmlIDREF=true;
return;
case "@XmlMimeType":
this.mimeType=attr.get$O("@XmlMimeType:name");
return;
case "@XmlElementWrapper":
this.qualifiedWrapName=p$1.getName$S$java_util_Map.apply(this, [tag, attr]);
return;
}
System.out.println$S("JSJAXBField Unprocessed field annotation: " + this.text);
}, p$1);

Clazz.newMeth(C$, 'getSeeAlso$S', function (data) {
var a=data.split$S(",");
for (var i=a.length; --i >= 0; ) a[i]=C$.getQuotedClass$S(a[i]);

return a;
}, 1);

Clazz.newMeth(C$, 'getQuotedClass$S', function (s) {
s=$I$(3).getQuotedStringAt$S$I(s, 0);
return s.substring$I$I(0, s.length$() - 6);
}, 1);

Clazz.newMeth(C$, 'getName$S$java_util_Map', function (tag, attr) {
var name;
var namespace;
name=attr.get$O(tag + ":name");
namespace=attr.get$O(tag + ":namespace");
return Clazz.new_($I$(4).c$$S$S$S,[namespace == null  ? "##default" : namespace, name == null  ? "##default" : name, ""]);
}, p$1);

Clazz.newMeth(C$, 'addXMLAttributes$S$S$java_util_Map', function (tag, data, attr) {
data="<__ " + data.replace$C$C("{", "\'").replace$C$C("}", "\'") + " />" ;
var doc=$I$(5).jQuery.parseXML(data);
var node=$I$(6).firstChild(doc);
var names=node.getAttributeNames();
for (var i=0; i < names.length; i++) attr.put$TK$TV(tag + ":" + names[i] , node.getAttribute(names[i]));

}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return "{" + this.javaName + "}" + this.index ;
});

Clazz.newMeth(C$, 'isSimpleType$S', function (javaClassName) {
return (javaClassName != null  ? C$.simplePackages$S(javaClassName) : this.isNil || this.asList || this.isByteArray || this.isArray || this.qualifiedWrapName != null    ? true : this.xmlType != null  ? false : this.isAttribute || C$.simplePackages$S(this.javaClassName) );
});

Clazz.newMeth(C$, 'simplePackages$S', function (javaClassName) {
return (javaClassName.indexOf$S(".") < 0 || javaClassName.startsWith$S("java.")  || javaClassName.startsWith$S("javax.")  || javaClassName.startsWith$S("javajs.") );
}, 1);

Clazz.newMeth(C$, 'findSetMethod$S$OA$OA', function (m, pm, jo) {
if (m.indexOf$S("$") < 0) m += "$";
for (var i=0; i < 2; i++) {
if (pm != null ) {

for (var a in pm){if (a.startsWith(m)) { return(pm[a]); } }
}pm=jo;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getMethods$O$O', function (javaObject, clazz) {
var methodName=this.javaName.substring$I(2);
var pm=clazz.$P$ ||null;
var jo=clazz.prototype ||null;
this.methodGet=p$1.getMethod$S$OA$OA.apply(this, [methodName, pm, jo]);
this.javaName=p$1.getJavaNameFromMethodName$S$O.apply(this, [methodName, javaObject]);
if (this.methodGet == null  && !this.isContainer ) this.methodGet=p$1.getMethod$S$OA$OA.apply(this, ["is" + methodName.substring$I(3), pm, jo]);
if (this.methodGet == null ) {
this.isMethod=false;
System.out.println$S("JSJAXBField cannot find getter for " + this.text);
return;
}if (this.isContainer) return;
methodName="set" + methodName.substring$I(methodName.startsWith$S("is") ? 2 : 3);
this.methodSet=p$1.findSetMethod$S$OA$OA.apply(this, [methodName, pm, jo]);
if (this.methodSet == null ) {
this.isMethod=false;
System.out.println$S("JSJAXBField cannot find setter for " + this.text);
}}, p$1);

Clazz.newMeth(C$, 'getJavaNameFromMethodName$S$O', function (methodName, javaObject) {
var javaName=methodName.substring$I$I(methodName.startsWith$S("is") ? 2 : 3, methodName.length$());
var lcaseName=javaName.substring$I$I(0, 1).toLowerCase$() + javaName.substring$I(1);
var name=null;
if (!p$1.isDefined$O$S.apply(this, [javaObject, name=javaName]) && !p$1.isDefined$O$S.apply(this, [javaObject, name=lcaseName]) && methodName.endsWith$S("Property")  ) {
if (!p$1.isDefined$O$S.apply(this, [javaObject, name=javaName.substring$I(javaName.length$() - 8)]) && p$1.isDefined$O$S.apply(this, [javaObject, name=lcaseName.substring$I(javaName.length$() - 8)]) ) {
System.out.println$S("JSJAXBMarshaller cannot find field for " + methodName);
name=methodName;
}}return name;
}, p$1);

Clazz.newMeth(C$, 'getMethod$S$OA$OA', function (methodName, pm, jo) {
var m=p$1.getMethodI$S$OA.apply(this, [methodName, pm]);
return (m != null  || jo == null   ? m : p$1.getMethodI$S$OA.apply(this, [methodName.indexOf$S("$") < 0 ? methodName + "$" : methodName, jo]));
}, p$1);

Clazz.newMeth(C$, 'getMethodI$S$OA', function (methodName, a) {
return a && a[methodName] ||null;
}, p$1);

Clazz.newMeth(C$, 'isDefined$O$S', function (javaObject, fieldName) {
return (javaObject && (typeof javaObject[fieldName] != "undefined") ||false);
}, p$1);

Clazz.newMeth(C$, 'getValue$O', function (javaObject) {
var o=this.mapEntryValue;
if (o === this ) return this.getObject$O(javaObject);
this.mapEntryValue=this;
return o;
});

Clazz.newMeth(C$, 'getObject$O', function (javaObject) {
if (this.enumValue != null ) {
return this.enumValue;
}var n=this.javaName;
var m=(this.isMethod ? this.methodGet : null);
{
return (m ? m.apply(javaObject, []) : javaObject[n])
}
});

Clazz.newMeth(C$, 'setValue$O$O', function (value, javaObject) {
if (this.listOwner != null ) {
p$1.addValue$O.apply(this.listOwner, [value]);
return;
}if (this.fieldType == 1) {
var l=this.getObject$O(javaObject);
if (l == null ) {
l=Clazz.new_($I$(2));
} else {
l.clear$();
}var a=value;
for (var i=0, n=a.length; i < n; i++) l.add$TE(a[i]);

if (this.isMethod) return;
value=l;
}var m=(this.isMethod ? this.methodSet : null);
var j=this.javaName;

if(m) m.apply(javaObject, [value]); else javaObject[j] = value;
});

Clazz.newMeth(C$, 'addValue$O', function (value) {
if (this.listValues == null ) this.listValues=Clazz.new_($I$(2));
this.listValues.add$TE(value);
}, p$1);

Clazz.newMeth(C$, 'getAdapter$', function () {
if (this.typeAdapter == null ) return null;
return $I$(7).getAdapter$S(this.typeAdapter);
});

Clazz.newMeth(C$, 'isknownSchemaType$S', function (xmlSchemaType) {
return $I$(3).isOneOf$S$S(xmlSchemaType, ";duration;dateTime;time;date;gYearMonth;gYear;gMonthDay;gDay;gMonth;yearMonthDuration;dayTimeDuration;dateTimeStamp;anySimpleType;anyAtomicType;string;boolean;decimal;float;double;;hexBinary;base64Binary;anyURI;QName;NOTATION;normalizedString;token;language;NMTOKEN;NMTOKENS;Name;NCName;ID;IDREF;IDREFS;ENTITY;ENTITIES;integer;nonPositiveInteger;negativeInteger;long;int;short;byte;nonNegativeInteger;unsignedLong;unsignedInt;unsignedShort;unsignedByte;positiveInteger;");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
