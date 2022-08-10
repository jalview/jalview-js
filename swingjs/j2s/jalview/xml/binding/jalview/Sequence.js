(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Sequence", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.xml.binding.jalview.SequenceType');
C$.$classes$=[['DBRef',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dsseqid','biotype'],'O',['dbRef','java.util.List']]]

Clazz.newMeth(C$, 'getDBRef$',  function () {
if (this.dbRef == null ) {
this.dbRef=Clazz.new_($I$(1,1));
}return this.dbRef;
});

Clazz.newMeth(C$, 'getDsseqid$',  function () {
return this.dsseqid;
});

Clazz.newMeth(C$, 'setDsseqid$S',  function (value) {
this.dsseqid=value;
});

Clazz.newMeth(C$, 'getBiotype$',  function () {
return this.biotype;
});

Clazz.newMeth(C$, 'setBiotype$S',  function (value) {
this.biotype=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Sequence',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"dbRef"  } ','name="Sequence" ']],
  [['dbRef','java.util.List<jalview.xml.binding.jalview.Sequence.DBRef>',null,['javax.xml.bind.annotation.XmlElement']],['name="DBRef" ']],
  [['dsseqid','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dsseqid" ']],
  [['biotype','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="biotype" ']],
  [['null','jalview.xml.binding.jalview.Sequence.DBRef'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Sequence, "DBRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['source','version','accessionId'],'O',['mapping','jalview.xml.binding.jalview.Mapping','locus','Boolean','+canonical']]]

Clazz.newMeth(C$, 'getMapping$',  function () {
return this.mapping;
});

Clazz.newMeth(C$, 'setMapping$jalview_xml_binding_jalview_Mapping',  function (value) {
this.mapping=value;
});

Clazz.newMeth(C$, 'getSource$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$S',  function (value) {
this.source=value;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getAccessionId$',  function () {
return this.accessionId;
});

Clazz.newMeth(C$, 'setAccessionId$S',  function (value) {
this.accessionId=value;
});

Clazz.newMeth(C$, 'isLocus$',  function () {
if (this.locus == null ) {
return false;
} else {
return (this.locus).valueOf();
}});

Clazz.newMeth(C$, 'setLocus$Boolean',  function (value) {
this.locus=value;
});

Clazz.newMeth(C$, 'isCanonical$',  function () {
if (this.canonical == null ) {
return false;
} else {
return (this.canonical).valueOf();
}});

Clazz.newMeth(C$, 'setCanonical$Boolean',  function (value) {
this.canonical=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Sequence.DBRef',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"mapping"  } ']],
  [['mapping','jalview.xml.binding.jalview.Mapping',null,['javax.xml.bind.annotation.XmlElement']],['name="Mapping" ']],
  [['source','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="source" ']],
  [['version','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" ']],
  [['accessionId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="accessionId" ']],
  [['locus','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="locus" ']],
  [['canonical','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="canonical" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
