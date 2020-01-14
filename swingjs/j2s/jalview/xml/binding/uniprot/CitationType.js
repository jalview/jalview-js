(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CitationType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.editorList=null;
this.authorList=null;
this.locator=null;
this.dbReference=null;
this.type=null;
this.date=null;
this.name=null;
this.volume=null;
this.first=null;
this.last=null;
this.publisher=null;
this.city=null;
this.db=null;
this.number=null;
this.institute=null;
this.country=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
this.dbReference=Clazz.new_($I$(1));
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
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CitationType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="citationType" propOrder={"title"  "editorList"  "authorList"  "locator"  "dbReference"  } )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['date','.'],['@XmlAttribute(name="date" )']],
  [['name','.'],['@XmlAttribute(name="name" )']],
  [['volume','.'],['@XmlAttribute(name="volume" )']],
  [['first','.'],['@XmlAttribute(name="first" )']],
  [['last','.'],['@XmlAttribute(name="last" )']],
  [['publisher','.'],['@XmlAttribute(name="publisher" )']],
  [['city','.'],['@XmlAttribute(name="city" )']],
  [['db','.'],['@XmlAttribute(name="db" )']],
  [['number','.'],['@XmlAttribute(name="number" )']],
  [['institute','.'],['@XmlAttribute(name="institute" )']],
  [['country','.'],['@XmlAttribute(name="country" )']],
  [['title','String'],['@XmlElement']],
  [['editorList','jalview.xml.binding.uniprot.NameListType'],['@XmlElement']],
  [['authorList','jalview.xml.binding.uniprot.NameListType'],['@XmlElement']],
  [['locator','String'],['@XmlElement']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
