(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,['jalview.datamodel.features.FeatureAttributes','.Datatype'],'java.util.ArrayList','java.util.HashMap','java.util.Collections','java.util.TreeMap',['jalview.datamodel.features.FeatureAttributes','.AttributeData']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureAttributes", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Datatype',25],['AttributeData',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.comparator=((P$.FeatureAttributes$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureAttributes$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$SA$SA','compare$O$O'],  function (o1, o2) {
var i=0;
while (i < o1.length || i < o2.length ){
if (o2.length <= i) {
return o1.length <= i ? 0 : 1;
}if (o1.length <= i) {
return -1;
}var comp=String.CASE_INSENSITIVE_ORDER.compare$O$O(o1[i], o2[i]);
if (comp != 0) {
return comp;
}++i;
}
return 0;
});
})()
), Clazz.new_(P$.FeatureAttributes$1.$init$,[this, null]));
},1);

C$.$fields$=[['O',['attributes','java.util.Map','comparator','java.util.Comparator']]
,['O',['instance','jalview.datamodel.features.FeatureAttributes']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.attributes=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getAttributes$S',  function (featureType) {
if (!this.attributes.containsKey$O(featureType)) {
return $I$(4).emptyList$();
}return Clazz.new_([this.attributes.get$O(featureType).keySet$()],$I$(2,1).c$$java_util_Collection);
});

Clazz.newMeth(C$, 'hasAttributes$S',  function (featureType) {
if (this.attributes.containsKey$O(featureType)) {
if (!this.attributes.get$O(featureType).isEmpty$()) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'addAttribute$S$S$O$SA',  function (featureType, description, value, attName) {
if (featureType == null  || attName == null  ) {
return;
}if (Clazz.instanceOf(value, "java.util.Map")) {
for (var entry, $entry = (value).entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var attNames=Clazz.array(String, [attName.length + 1]);
System.arraycopy$O$I$O$I$I(attName, 0, attNames, 0, attName.length);
attNames[attName.length]=entry.getKey$().toString();
this.addAttribute$S$S$O$SA(featureType, description, entry.getValue$(), attNames);
}
return;
}var valueAsString=value.toString();
var atts=this.attributes.get$O(featureType);
if (atts == null ) {
atts=Clazz.new_($I$(5,1).c$$java_util_Comparator,[this.comparator]);
this.attributes.put$O$O(featureType, atts);
}var attData=atts.get$O(attName);
if (attData == null ) {
attData=Clazz.new_($I$(6,1),[this, null]);
atts.put$O$O(attName, attData);
}attData.addInstance$S$S(description, valueAsString);
});

Clazz.newMeth(C$, 'getDescription$S$SA',  function (featureType, attName) {
var desc=null;
var atts=this.attributes.get$O(featureType);
if (atts != null ) {
var attData=atts.get$O(attName);
if (attData != null ) {
desc=attData.getDescription$();
}}return desc;
});

Clazz.newMeth(C$, 'getMinMax$S$SA',  function (featureType, attName) {
var atts=this.attributes.get$O(featureType);
if (atts != null ) {
var attData=atts.get$O(attName);
if (attData != null  && attData.hasValue ) {
return Clazz.array(Float.TYPE, -1, [attData.min, attData.max]);
}}return null;
});

Clazz.newMeth(C$, 'addDescription$S$S$SA',  function (featureType, description, attName) {
if (featureType == null  || attName == null  ) {
return;
}var atts=this.attributes.get$O(featureType);
if (atts == null ) {
atts=Clazz.new_($I$(5,1).c$$java_util_Comparator,[this.comparator]);
this.attributes.put$O$O(featureType, atts);
}var attData=atts.get$O(attName);
if (attData == null ) {
attData=Clazz.new_($I$(6,1),[this, null]);
atts.put$O$O(attName, attData);
}attData.addDescription$S(description);
});

Clazz.newMeth(C$, 'getDatatype$S$SA',  function (featureType, attName) {
var atts=this.attributes.get$O(featureType);
if (atts != null ) {
var attData=atts.get$O(attName);
if (attData != null ) {
return attData.getType$();
}}return null;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.attributes.clear$();
});

Clazz.newMeth(C$, 'clear$S',  function (featureType) {
var map=this.attributes.get$O(featureType);
if (map != null ) {
map.clear$();
}});

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.FeatureAttributes, "Datatype", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Character", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Number", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Mixed", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FeatureAttributes, "AttributeData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.min=0.0;
this.max=0.0;
this.hasValue=false;
},1);

C$.$fields$=[['Z',['hasValue'],'F',['min','max'],'O',['description','java.util.List','type','jalview.datamodel.features.FeatureAttributes.Datatype']]]

Clazz.newMeth(C$, 'addInstance$S$S',  function (desc, value) {
this.addDescription$S(desc);
if (value != null ) {
value=value.trim$();
if (this.type == null  || this.type === $I$(1).Number  ) {
try {
var f=(Float.valueOf$S(value)).valueOf();
this.min=this.hasValue ? Math.min(this.min, f) : f;
this.max=this.hasValue ? Math.max(this.max, f) : f;
this.hasValue=true;
this.type=(this.type == null  || this.type === $I$(1).Number  ) ? $I$(1).Number : $I$(1).Mixed;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.type=(this.type == null  || this.type === $I$(1).Character  ) ? $I$(1).Character : $I$(1).Mixed;
this.min=0.0;
this.max=0.0;
this.hasValue=false;
} else {
throw e;
}
}
}}});

Clazz.newMeth(C$, 'getDescription$',  function () {
if (this.description != null  && this.description.size$() == 1 ) {
return this.description.get$I(0);
}return null;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'addDescription$S',  function (desc) {
if (desc != null ) {
if (this.description == null ) {
this.description=Clazz.new_($I$(2,1));
}if (!this.description.contains$O(desc)) {
this.description.add$O(desc);
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
