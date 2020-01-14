(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Pdbentry", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.property=null;
this.id=null;
this.type=null;
this.file=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getProperty$', function () {
if (this.property == null ) {
this.property=Clazz.new_($I$(1));
}return this.property;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getFile$', function () {
return this.file;
});

Clazz.newMeth(C$, 'setFile$S', function (value) {
this.file=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Pdbentry'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="pdbentry" namespace="www.jalview.org" propOrder={"property"  } )','@XmlSeeAlso("jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.class" )']],
  [['id','String'],['@XmlAttribute(name="id" required="true" )']],
  [['type','.'],['@XmlAttribute(name="type" )']],
  [['file','.'],['@XmlAttribute(name="file" )']],
  [['null','jalview.xml.binding.jalview.Pdbentry.Property'],['!XmlInner']],
  [['property','java.util.List<jalview.xml.binding.jalview.Pdbentry.Property>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Pdbentry, "Property", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Pdbentry.Property'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['name','String'],['@XmlAttribute(name="name" required="true" )']],
  [['value','.'],['@XmlAttribute(name="value" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
