(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MapListType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MapListFrom',9],['MapListTo',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mapListFrom','java.util.List','+mapListTo','mapFromUnit','java.math.BigInteger','+mapToUnit']]]

Clazz.newMeth(C$, 'getMapListFrom$', function () {
if (this.mapListFrom == null ) {
this.mapListFrom=Clazz.new_($I$(1,1));
}return this.mapListFrom;
});

Clazz.newMeth(C$, 'getMapListTo$', function () {
if (this.mapListTo == null ) {
this.mapListTo=Clazz.new_($I$(1,1));
}return this.mapListTo;
});

Clazz.newMeth(C$, 'getMapFromUnit$', function () {
return this.mapFromUnit;
});

Clazz.newMeth(C$, 'setMapFromUnit$java_math_BigInteger', function (value) {
this.mapFromUnit=value;
});

Clazz.newMeth(C$, 'getMapToUnit$', function () {
return this.mapToUnit;
});

Clazz.newMeth(C$, 'setMapToUnit$java_math_BigInteger', function (value) {
this.mapToUnit=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.MapListType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlSeeAlso']],['XmlAccessType.FIELD','name="mapListType" propOrder={"mapListFrom"  "mapListTo"  } ','"jalview.xml.binding.jalview.Mapping.class" ']],
  [['mapFromUnit','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="mapFromUnit" required="true" ','name="positiveInteger" ']],
  [['mapToUnit','.',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="mapToUnit" required="true" ','name="positiveInteger" ']],
  [['null','jalview.xml.binding.jalview.MapListType.MapListFrom'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.MapListType.MapListTo'],['!XmlInner']],
  [['mapListFrom','java.util.List<jalview.xml.binding.jalview.MapListType.MapListFrom>'],['@XmlElement']],
  [['mapListTo','java.util.List<jalview.xml.binding.jalview.MapListType.MapListTo>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.MapListType, "MapListFrom", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end']]]

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (value) {
this.end=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.MapListType.MapListFrom',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['start','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MapListType, "MapListTo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end']]]

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (value) {
this.end=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.MapListType.MapListTo',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['start','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
