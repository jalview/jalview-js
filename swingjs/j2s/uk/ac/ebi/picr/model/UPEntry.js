(function(){var P$=Clazz.newPackage("uk.ac.ebi.picr.model"),I$=[[0,'java.util.Arrays','java.lang.reflect.Array']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UPEntry", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'S',['CRC64','UPI','sequence'],'O',['identicalCrossReferences','uk.ac.ebi.picr.model.CrossReference[]','+logicalCrossReferences','timestamp','java.util.Calendar','__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$uk_ac_ebi_picr_model_CrossReferenceA$uk_ac_ebi_picr_model_CrossReferenceA$S$java_util_Calendar', function (CRC64, UPI, identicalCrossReferences, logicalCrossReferences, sequence, timestamp) {
;C$.$init$.apply(this);
this.CRC64=CRC64;
this.UPI=UPI;
this.identicalCrossReferences=identicalCrossReferences;
this.logicalCrossReferences=logicalCrossReferences;
this.sequence=sequence;
this.timestamp=timestamp;
}, 1);

Clazz.newMeth(C$, 'getCRC64$', function () {
return this.CRC64;
});

Clazz.newMeth(C$, 'setCRC64$S', function (CRC64) {
this.CRC64=CRC64;
});

Clazz.newMeth(C$, 'getUPI$', function () {
return this.UPI;
});

Clazz.newMeth(C$, 'setUPI$S', function (UPI) {
this.UPI=UPI;
});

Clazz.newMeth(C$, 'getIdenticalCrossReferences$', function () {
return this.identicalCrossReferences;
});

Clazz.newMeth(C$, 'setIdenticalCrossReferences$uk_ac_ebi_picr_model_CrossReferenceA', function (identicalCrossReferences) {
this.identicalCrossReferences=identicalCrossReferences;
});

Clazz.newMeth(C$, 'getIdenticalCrossReferences$I', function (i) {
return this.identicalCrossReferences[i];
});

Clazz.newMeth(C$, 'setIdenticalCrossReferences$I$uk_ac_ebi_picr_model_CrossReference', function (i, _value) {
this.identicalCrossReferences[i]=_value;
});

Clazz.newMeth(C$, 'getLogicalCrossReferences$', function () {
return this.logicalCrossReferences;
});

Clazz.newMeth(C$, 'setLogicalCrossReferences$uk_ac_ebi_picr_model_CrossReferenceA', function (logicalCrossReferences) {
this.logicalCrossReferences=logicalCrossReferences;
});

Clazz.newMeth(C$, 'getLogicalCrossReferences$I', function (i) {
return this.logicalCrossReferences[i];
});

Clazz.newMeth(C$, 'setLogicalCrossReferences$I$uk_ac_ebi_picr_model_CrossReference', function (i, _value) {
this.logicalCrossReferences[i]=_value;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S', function (sequence) {
this.sequence=sequence;
});

Clazz.newMeth(C$, 'getTimestamp$', function () {
return this.timestamp;
});

Clazz.newMeth(C$, 'setTimestamp$java_util_Calendar', function (timestamp) {
this.timestamp=timestamp;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "uk.ac.ebi.picr.model.UPEntry"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.CRC64 == null  && other.getCRC64$() == null  ) || (this.CRC64 != null  && this.CRC64.equals$O(other.getCRC64$()) ) ) && ((this.UPI == null  && other.getUPI$() == null  ) || (this.UPI != null  && this.UPI.equals$O(other.getUPI$()) ) ) && ((this.identicalCrossReferences == null  && other.getIdenticalCrossReferences$() == null  ) || (this.identicalCrossReferences != null  && $I$(1,"equals$OA$OA",[this.identicalCrossReferences, other.getIdenticalCrossReferences$()]) ) ) && ((this.logicalCrossReferences == null  && other.getLogicalCrossReferences$() == null  ) || (this.logicalCrossReferences != null  && $I$(1,"equals$OA$OA",[this.logicalCrossReferences, other.getLogicalCrossReferences$()]) ) ) && ((this.sequence == null  && other.getSequence$() == null  ) || (this.sequence != null  && this.sequence.equals$O(other.getSequence$()) ) ) && ((this.timestamp == null  && other.getTimestamp$() == null  ) || (this.timestamp != null  && this.timestamp.equals$O(other.getTimestamp$()) ) )  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getCRC64$() != null ) {
_hashCode+=this.getCRC64$().hashCode$();
}if (this.getUPI$() != null ) {
_hashCode+=this.getUPI$().hashCode$();
}if (this.getIdenticalCrossReferences$() != null ) {
for (var i=0; i < $I$(2,"getLength$O",[this.getIdenticalCrossReferences$()]); i++) {
var obj=$I$(2,"get$O$I",[this.getIdenticalCrossReferences$(), i]);
if (obj != null  && !obj.getClass$().isArray$() ) {
_hashCode+=obj.hashCode$();
}}
}if (this.getLogicalCrossReferences$() != null ) {
for (var i=0; i < $I$(2,"getLength$O",[this.getLogicalCrossReferences$()]); i++) {
var obj=$I$(2,"get$O$I",[this.getLogicalCrossReferences$(), i]);
if (obj != null  && !obj.getClass$().isArray$() ) {
_hashCode+=obj.hashCode$();
}}
}if (this.getSequence$() != null ) {
_hashCode+=this.getSequence$().hashCode$();
}if (this.getTimestamp$() != null ) {
_hashCode+=this.getTimestamp$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
