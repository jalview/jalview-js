(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Sequence", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.xml.binding.jalview.SequenceType');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbRef=null;
this.dsseqid=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDBRef$', function () {
if (this.dbRef == null ) {
this.dbRef=Clazz.new_($I$(1));
}return this.dbRef;
});

Clazz.newMeth(C$, 'getDsseqid$', function () {
return this.dsseqid;
});

Clazz.newMeth(C$, 'setDsseqid$S', function (value) {
this.dsseqid=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Sequence'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"dbRef"  } )','@XmlRootElement(name="Sequence" )']],
  [['dbRef','java.util.List<jalview.xml.binding.jalview.Sequence.DBRef>'],['@XmlElement(name="DBRef" )']],
  [['dsseqid','String'],['@XmlAttribute(name="dsseqid" )']],
  [['null','jalview.xml.binding.jalview.Sequence.DBRef'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.Sequence, "DBRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mapping=null;
this.source=null;
this.version=null;
this.accessionId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'setMapping$jalview_xml_binding_jalview_Mapping', function (value) {
this.mapping=value;
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$S', function (value) {
this.source=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getAccessionId$', function () {
return this.accessionId;
});

Clazz.newMeth(C$, 'setAccessionId$S', function (value) {
this.accessionId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Sequence.DBRef'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"mapping"  } )']],
  [['mapping','jalview.xml.binding.jalview.Mapping'],['@XmlElement(name="Mapping" )']],
  [['source','String'],['@XmlAttribute(name="source" )']],
  [['version','.'],['@XmlAttribute(name="version" )']],
  [['accessionId','.'],['@XmlAttribute(name="accessionId" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
