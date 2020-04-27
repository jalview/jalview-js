(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CitationType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','locator','type','date','name','volume','first','last','publisher','city','db','number','institute','country'],'O',['editorList','jalview.xml.binding.uniprot.NameListType','+authorList','dbReference','java.util.List']]]

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getEditorList$', function () {
return this.editorList;
});

Clazz.newMeth(C$, 'setEditorList$jalview_xml_binding_uniprot_NameListType', function (value) {
this.editorList=value;
});

Clazz.newMeth(C$, 'getAuthorList$', function () {
return this.authorList;
});

Clazz.newMeth(C$, 'setAuthorList$jalview_xml_binding_uniprot_NameListType', function (value) {
this.authorList=value;
});

Clazz.newMeth(C$, 'getLocator$', function () {
return this.locator;
});

Clazz.newMeth(C$, 'setLocator$S', function (value) {
this.locator=value;
});

Clazz.newMeth(C$, 'getDbReference$', function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1,1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getDate$', function () {
return this.date;
});

Clazz.newMeth(C$, 'setDate$S', function (value) {
this.date=value;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getVolume$', function () {
return this.volume;
});

Clazz.newMeth(C$, 'setVolume$S', function (value) {
this.volume=value;
});

Clazz.newMeth(C$, 'getFirst$', function () {
return this.first;
});

Clazz.newMeth(C$, 'setFirst$S', function (value) {
this.first=value;
});

Clazz.newMeth(C$, 'getLast$', function () {
return this.last;
});

Clazz.newMeth(C$, 'setLast$S', function (value) {
this.last=value;
});

Clazz.newMeth(C$, 'getPublisher$', function () {
return this.publisher;
});

Clazz.newMeth(C$, 'setPublisher$S', function (value) {
this.publisher=value;
});

Clazz.newMeth(C$, 'getCity$', function () {
return this.city;
});

Clazz.newMeth(C$, 'setCity$S', function (value) {
this.city=value;
});

Clazz.newMeth(C$, 'getDb$', function () {
return this.db;
});

Clazz.newMeth(C$, 'setDb$S', function (value) {
this.db=value;
});

Clazz.newMeth(C$, 'getNumber$', function () {
return this.number;
});

Clazz.newMeth(C$, 'setNumber$S', function (value) {
this.number=value;
});

Clazz.newMeth(C$, 'getInstitute$', function () {
return this.institute;
});

Clazz.newMeth(C$, 'setInstitute$S', function (value) {
this.institute=value;
});

Clazz.newMeth(C$, 'getCountry$', function () {
return this.country;
});

Clazz.newMeth(C$, 'setCountry$S', function (value) {
this.country=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CitationType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="citationType" propOrder={"title"  "editorList"  "authorList"  "locator"  "dbReference"  } ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['date','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="date" ']],
  [['name','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" ']],
  [['volume','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="volume" ']],
  [['first','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="first" ']],
  [['last','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="last" ']],
  [['publisher','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="publisher" ']],
  [['city','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="city" ']],
  [['db','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="db" ']],
  [['number','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="number" ']],
  [['institute','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="institute" ']],
  [['country','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="country" ']],
  [['title','String'],['@XmlElement']],
  [['editorList','jalview.xml.binding.uniprot.NameListType'],['@XmlElement']],
  [['authorList','jalview.xml.binding.uniprot.NameListType'],['@XmlElement']],
  [['locator','String'],['@XmlElement']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
