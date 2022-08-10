(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "XrefType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['db','id','secondaryId']]]

Clazz.newMeth(C$, 'getDb$',  function () {
return this.db;
});

Clazz.newMeth(C$, 'setDb$S',  function (value) {
this.db=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getSecondaryId$',  function () {
return this.secondaryId;
});

Clazz.newMeth(C$, 'setSecondaryId$S',  function (value) {
this.secondaryId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.XrefType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="XrefType" ']],
  [['db','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="db" required="true" ']],
  [['id','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" required="true" ']],
  [['secondaryId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="secondaryId" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
