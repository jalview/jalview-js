(function(){var P$=Clazz.newPackage("uk.ac.ebi.www"),I$=[[0,'org.apache.axis.description.TypeDesc','org.apache.axis.description.ElementDesc','javax.xml.namespace.QName','org.apache.axis.encoding.ser.BeanSerializer','org.apache.axis.encoding.ser.BeanDeserializer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputParams", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['echofilter','async','__hashCodeCalc'],'F',['exp'],'I',['numal','scores','topcombon'],'S',['program','database','matrix','filter','sensitivity','sort','stats','strand','outformat','email'],'O',['__equalsCalc','java.lang.Object']]
,['O',['typeDesc','org.apache.axis.description.TypeDesc']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getProgram$',  function () {
return this.program;
});

Clazz.newMeth(C$, 'setProgram$S',  function (program) {
this.program=program;
});

Clazz.newMeth(C$, 'getDatabase$',  function () {
return this.database;
});

Clazz.newMeth(C$, 'setDatabase$S',  function (database) {
this.database=database;
});

Clazz.newMeth(C$, 'getMatrix$',  function () {
return this.matrix;
});

Clazz.newMeth(C$, 'setMatrix$S',  function (matrix) {
this.matrix=matrix;
});

Clazz.newMeth(C$, 'getExp$',  function () {
return this.exp;
});

Clazz.newMeth(C$, 'setExp$F',  function (exp) {
this.exp=exp;
});

Clazz.newMeth(C$, 'isEchofilter$',  function () {
return this.echofilter;
});

Clazz.newMeth(C$, 'setEchofilter$Z',  function (echofilter) {
this.echofilter=echofilter;
});

Clazz.newMeth(C$, 'getFilter$',  function () {
return this.filter;
});

Clazz.newMeth(C$, 'setFilter$S',  function (filter) {
this.filter=filter;
});

Clazz.newMeth(C$, 'getNumal$',  function () {
return this.numal;
});

Clazz.newMeth(C$, 'setNumal$I',  function (numal) {
this.numal=numal;
});

Clazz.newMeth(C$, 'getScores$',  function () {
return this.scores;
});

Clazz.newMeth(C$, 'setScores$I',  function (scores) {
this.scores=scores;
});

Clazz.newMeth(C$, 'getSensitivity$',  function () {
return this.sensitivity;
});

Clazz.newMeth(C$, 'setSensitivity$S',  function (sensitivity) {
this.sensitivity=sensitivity;
});

Clazz.newMeth(C$, 'getSort$',  function () {
return this.sort;
});

Clazz.newMeth(C$, 'setSort$S',  function (sort) {
this.sort=sort;
});

Clazz.newMeth(C$, 'getStats$',  function () {
return this.stats;
});

Clazz.newMeth(C$, 'setStats$S',  function (stats) {
this.stats=stats;
});

Clazz.newMeth(C$, 'getStrand$',  function () {
return this.strand;
});

Clazz.newMeth(C$, 'setStrand$S',  function (strand) {
this.strand=strand;
});

Clazz.newMeth(C$, 'getOutformat$',  function () {
return this.outformat;
});

Clazz.newMeth(C$, 'setOutformat$S',  function (outformat) {
this.outformat=outformat;
});

Clazz.newMeth(C$, 'getTopcombon$',  function () {
return this.topcombon;
});

Clazz.newMeth(C$, 'setTopcombon$I',  function (topcombon) {
this.topcombon=topcombon;
});

Clazz.newMeth(C$, 'isAsync$',  function () {
return this.async;
});

Clazz.newMeth(C$, 'setAsync$Z',  function (async) {
this.async=async;
});

Clazz.newMeth(C$, 'getEmail$',  function () {
return this.email;
});

Clazz.newMeth(C$, 'setEmail$S',  function (email) {
this.email=email;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "uk.ac.ebi.www.InputParams"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.program == null  && other.getProgram$() == null  ) || (this.program != null  && this.program.equals$O(other.getProgram$()) ) ) && ((this.database == null  && other.getDatabase$() == null  ) || (this.database != null  && this.database.equals$O(other.getDatabase$()) ) ) && ((this.matrix == null  && other.getMatrix$() == null  ) || (this.matrix != null  && this.matrix.equals$O(other.getMatrix$()) ) ) && this.exp == other.getExp$()    && this.echofilter == other.isEchofilter$()   && ((this.filter == null  && other.getFilter$() == null  ) || (this.filter != null  && this.filter.equals$O(other.getFilter$()) ) )  && this.numal == other.getNumal$()  && this.scores == other.getScores$()  && ((this.sensitivity == null  && other.getSensitivity$() == null  ) || (this.sensitivity != null  && this.sensitivity.equals$O(other.getSensitivity$()) ) )  && ((this.sort == null  && other.getSort$() == null  ) || (this.sort != null  && this.sort.equals$O(other.getSort$()) ) )  && ((this.stats == null  && other.getStats$() == null  ) || (this.stats != null  && this.stats.equals$O(other.getStats$()) ) )  && ((this.strand == null  && other.getStrand$() == null  ) || (this.strand != null  && this.strand.equals$O(other.getStrand$()) ) )  && ((this.outformat == null  && other.getOutformat$() == null  ) || (this.outformat != null  && this.outformat.equals$O(other.getOutformat$()) ) )  && this.topcombon == other.getTopcombon$()  && this.async == other.isAsync$()   && ((this.email == null  && other.getEmail$() == null  ) || (this.email != null  && this.email.equals$O(other.getEmail$()) ) ) ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getProgram$() != null ) {
_hashCode+=this.getProgram$().hashCode$();
}if (this.getDatabase$() != null ) {
_hashCode+=this.getDatabase$().hashCode$();
}if (this.getMatrix$() != null ) {
_hashCode+=this.getMatrix$().hashCode$();
}_hashCode+=Float.valueOf$F(this.getExp$()).hashCode$();
_hashCode+=Boolean.valueOf$Z(this.isEchofilter$()).hashCode$();
if (this.getFilter$() != null ) {
_hashCode+=this.getFilter$().hashCode$();
}_hashCode+=this.getNumal$();
_hashCode+=this.getScores$();
if (this.getSensitivity$() != null ) {
_hashCode+=this.getSensitivity$().hashCode$();
}if (this.getSort$() != null ) {
_hashCode+=this.getSort$().hashCode$();
}if (this.getStats$() != null ) {
_hashCode+=this.getStats$().hashCode$();
}if (this.getStrand$() != null ) {
_hashCode+=this.getStrand$().hashCode$();
}if (this.getOutformat$() != null ) {
_hashCode+=this.getOutformat$().hashCode$();
}_hashCode+=this.getTopcombon$();
_hashCode+=Boolean.valueOf$Z(this.isAsync$()).hashCode$();
if (this.getEmail$() != null ) {
_hashCode+=this.getEmail$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});

Clazz.newMeth(C$, 'getTypeDesc$',  function () {
return C$.typeDesc;
}, 1);

Clazz.newMeth(C$, 'getSerializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(4,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

Clazz.newMeth(C$, 'getDeserializer$S$Class$javax_xml_namespace_QName',  function (mechType, _javaType, _xmlType) {
return Clazz.new_($I$(5,1).c$$Class$javax_xml_namespace_QName$org_apache_axis_description_TypeDesc,[_javaType, _xmlType, C$.typeDesc]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.typeDesc=Clazz.new_([Clazz.getClass(C$)],$I$(1,1).c$$Class);
{
var field=Clazz.new_($I$(2,1));
field.setFieldName$S("program");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "program"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("database");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "database"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("matrix");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "matrix"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("exp");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "exp"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "float"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("echofilter");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "echofilter"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("filter");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "filter"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("numal");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "numal"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "int"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("scores");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "scores"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "int"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("sensitivity");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "sensitivity"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("sort");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "sort"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("stats");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "stats"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("strand");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "strand"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("outformat");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "outformat"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("topcombon");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "topcombon"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "int"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("async");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "async"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
field=Clazz.new_($I$(2,1));
field.setFieldName$S("email");
field.setXmlName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "email"]));
field.setXmlType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
C$.typeDesc.addFieldDesc$org_apache_axis_description_FieldDesc(field);
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
