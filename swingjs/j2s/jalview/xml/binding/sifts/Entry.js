(function(){var P$=Clazz.newPackage("jalview.xml.binding.sifts"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Entry", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listDB=null;
this.entryDetail=null;
this.entity=null;
this.alignment=null;
this.date=null;
this.dbEntryVersion=null;
this.dbSource=null;
this.dbCoordSys=null;
this.dbAccessionId=null;
this.dbEvidence=null;
this.dbVersion=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getListDB$', function () {
return this.listDB;
});

Clazz.newMeth(C$, 'setListDB$jalview_xml_binding_sifts_Entry_ListDB', function (value) {
this.listDB=value;
});

Clazz.newMeth(C$, 'getEntryDetail$', function () {
if (this.entryDetail == null ) {
this.entryDetail=Clazz.new_($I$(1));
}return this.entryDetail;
});

Clazz.newMeth(C$, 'getEntity$', function () {
if (this.entity == null ) {
this.entity=Clazz.new_($I$(1));
}return this.entity;
});

Clazz.newMeth(C$, 'getAlignment$', function () {
if (this.alignment == null ) {
this.alignment=Clazz.new_($I$(1));
}return this.alignment;
});

Clazz.newMeth(C$, 'getDate$', function () {
return this.date;
});

Clazz.newMeth(C$, 'setDate$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.date=value;
});

Clazz.newMeth(C$, 'getDbEntryVersion$', function () {
return this.dbEntryVersion;
});

Clazz.newMeth(C$, 'setDbEntryVersion$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.dbEntryVersion=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$', function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S', function (value) {
this.dbCoordSys=value;
});

Clazz.newMeth(C$, 'getDbAccessionId$', function () {
return this.dbAccessionId;
});

Clazz.newMeth(C$, 'setDbAccessionId$S', function (value) {
this.dbAccessionId=value;
});

Clazz.newMeth(C$, 'getDbEvidence$', function () {
return this.dbEvidence;
});

Clazz.newMeth(C$, 'setDbEvidence$S', function (value) {
this.dbEvidence=value;
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S', function (value) {
this.dbVersion=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"listDB"  "entryDetail"  "entity"  "alignment"  } )','@XmlRootElement(name="entry" )']],
  [['listDB','jalview.xml.binding.sifts.Entry.ListDB'],['@XmlElement(required="true" )']],
  [['entity','java.util.List<jalview.xml.binding.sifts.Entry.Entity>'],['@XmlElement(required="true" )']],
  [['date','javax.xml.datatype.XMLGregorianCalendar'],['@XmlAttribute(name="date" required="true" )','@XmlSchemaType(name="date" )']],
  [['dbEntryVersion','.'],['@XmlAttribute(name="dbEntryVersion" required="true" )','@XmlSchemaType(name="date" )']],
  [['dbSource','String'],['@XmlAttribute(name="dbSource" required="true" )']],
  [['dbCoordSys','.'],['@XmlAttribute(name="dbCoordSys" required="true" )']],
  [['dbAccessionId','.'],['@XmlAttribute(name="dbAccessionId" required="true" )']],
  [['dbEvidence','.'],['@XmlAttribute(name="dbEvidence" )']],
  [['dbVersion','.'],['@XmlAttribute(name="dbVersion" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.EntryDetail'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.ListDB'],['!XmlInner']],
  [['entryDetail','java.util.List<jalview.xml.binding.sifts.Entry.EntryDetail>'],['@XmlElement']],
  [['alignment','java.util.List<jalview.xml.binding.sifts.Alignment>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Entry, "Entity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.entityDetail=null;
this.segment=null;
this.type=null;
this.entityId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getEntityDetail$', function () {
if (this.entityDetail == null ) {
this.entityDetail=Clazz.new_($I$(1));
}return this.entityDetail;
});

Clazz.newMeth(C$, 'getSegment$', function () {
if (this.segment == null ) {
this.segment=Clazz.new_($I$(1));
}return this.segment;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$jalview_xml_binding_sifts_EntityType', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return this.entityId;
});

Clazz.newMeth(C$, 'setEntityId$S', function (value) {
this.entityId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"entityDetail"  "segment"  } )']],
  [['segment','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment>'],['@XmlElement(required="true" )']],
  [['type','jalview.xml.binding.sifts.EntityType'],['@XmlAttribute(name="type" required="true" )']],
  [['entityId','String'],['@XmlAttribute(name="entityId" required="true" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.EntityDetail'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment'],['!XmlInner']],
  [['entityDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.EntityDetail>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity, "EntityDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.content=null;
this.dbSource=null;
this.property=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S', function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S', function (value) {
this.property=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.EntityDetail'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"content"  } )']],
  [['content','String'],['@XmlValue']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" )']],
  [['property','.'],['@XmlAttribute(name="property" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity, "Segment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listResidue=null;
this.listMapRegion=null;
this.segmentDetail=null;
this.segId=null;
this.start=null;
this.end=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getListResidue$', function () {
return this.listResidue;
});

Clazz.newMeth(C$, 'setListResidue$jalview_xml_binding_sifts_Entry_Entity_Segment_ListResidue', function (value) {
this.listResidue=value;
});

Clazz.newMeth(C$, 'getListMapRegion$', function () {
return this.listMapRegion;
});

Clazz.newMeth(C$, 'setListMapRegion$jalview_xml_binding_sifts_Entry_Entity_Segment_ListMapRegion', function (value) {
this.listMapRegion=value;
});

Clazz.newMeth(C$, 'getSegmentDetail$', function () {
if (this.segmentDetail == null ) {
this.segmentDetail=Clazz.new_($I$(1));
}return this.segmentDetail;
});

Clazz.newMeth(C$, 'getSegId$', function () {
return this.segId;
});

Clazz.newMeth(C$, 'setSegId$S', function (value) {
this.segId=value;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$S', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$S', function (value) {
this.end=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"listResidue"  "listMapRegion"  "segmentDetail"  } )']],
  [['segId','String'],['@XmlAttribute(name="segId" required="true" )']],
  [['start','.'],['@XmlAttribute(name="start" )']],
  [['end','.'],['@XmlAttribute(name="end" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.SegmentDetail'],['!XmlInner']],
  [['listResidue','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue'],['@XmlElement']],
  [['listMapRegion','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion'],['@XmlElement']],
  [['segmentDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.SegmentDetail>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment, "ListMapRegion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mapRegion=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMapRegion$', function () {
if (this.mapRegion == null ) {
this.mapRegion=Clazz.new_($I$(1));
}return this.mapRegion;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"mapRegion"  } )']],
  [['mapRegion','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion>'],['@XmlElement(required="true" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListMapRegion, "MapRegion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.db=null;
this.start=null;
this.end=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDb$', function () {
return this.db;
});

Clazz.newMeth(C$, 'setDb$jalview_xml_binding_sifts_Entry_Entity_Segment_ListMapRegion_MapRegion_Db', function (value) {
this.db=value;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$S', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$S', function (value) {
this.end=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"db"  } )']],
  [['db','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db'],['@XmlElement(required="true" )']],
  [['start','String'],['@XmlAttribute(name="start" )']],
  [['end','.'],['@XmlAttribute(name="end" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListMapRegion.MapRegion, "Db", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbDetail=null;
this.dbChainId=null;
this.dbSource=null;
this.dbCoordSys=null;
this.dbAccessionId=null;
this.dbEvidence=null;
this.dbVersion=null;
this.start=null;
this.end=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDbDetail$', function () {
if (this.dbDetail == null ) {
this.dbDetail=Clazz.new_($I$(1));
}return this.dbDetail;
});

Clazz.newMeth(C$, 'getDbChainId$', function () {
return this.dbChainId;
});

Clazz.newMeth(C$, 'setDbChainId$S', function (value) {
this.dbChainId=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$', function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S', function (value) {
this.dbCoordSys=value;
});

Clazz.newMeth(C$, 'getDbAccessionId$', function () {
return this.dbAccessionId;
});

Clazz.newMeth(C$, 'setDbAccessionId$S', function (value) {
this.dbAccessionId=value;
});

Clazz.newMeth(C$, 'getDbEvidence$', function () {
return this.dbEvidence;
});

Clazz.newMeth(C$, 'setDbEvidence$S', function (value) {
this.dbEvidence=value;
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S', function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$S', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$S', function (value) {
this.end=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"dbDetail"  } )']],
  [['dbChainId','String'],['@XmlAttribute(name="dbChainId" )']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" required="true" )']],
  [['dbCoordSys','.'],['@XmlAttribute(name="dbCoordSys" required="true" )']],
  [['dbAccessionId','.'],['@XmlAttribute(name="dbAccessionId" required="true" )']],
  [['dbEvidence','.'],['@XmlAttribute(name="dbEvidence" )']],
  [['dbVersion','.'],['@XmlAttribute(name="dbVersion" )']],
  [['start','.'],['@XmlAttribute(name="start" )']],
  [['end','.'],['@XmlAttribute(name="end" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db.DbDetail'],['!XmlInner']],
  [['dbDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db.DbDetail>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListMapRegion.MapRegion.Db, "DbDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.content=null;
this.dbSource=null;
this.property=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S', function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S', function (value) {
this.property=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db.DbDetail'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"content"  } )']],
  [['content','String'],['@XmlValue']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" )']],
  [['property','.'],['@XmlAttribute(name="property" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment, "ListResidue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.residue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getResidue$', function () {
if (this.residue == null ) {
this.residue=Clazz.new_($I$(1));
}return this.residue;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"residue"  } )']],
  [['residue','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue>'],['@XmlElement(required="true" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListResidue, "Residue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.crossRefDb=null;
this.residueDetail=null;
this.dbResNum=null;
this.dbResName=null;
this.dbVersion=null;
this.dbSource=null;
this.dbCoordSys=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCrossRefDb$', function () {
if (this.crossRefDb == null ) {
this.crossRefDb=Clazz.new_($I$(1));
}return this.crossRefDb;
});

Clazz.newMeth(C$, 'getResidueDetail$', function () {
if (this.residueDetail == null ) {
this.residueDetail=Clazz.new_($I$(1));
}return this.residueDetail;
});

Clazz.newMeth(C$, 'getDbResNum$', function () {
return this.dbResNum;
});

Clazz.newMeth(C$, 'setDbResNum$S', function (value) {
this.dbResNum=value;
});

Clazz.newMeth(C$, 'getDbResName$', function () {
return this.dbResName;
});

Clazz.newMeth(C$, 'setDbResName$S', function (value) {
this.dbResName=value;
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S', function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$', function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S', function (value) {
this.dbCoordSys=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"crossRefDb"  "residueDetail"  } )']],
  [['dbResNum','String'],['@XmlAttribute(name="dbResNum" required="true" )']],
  [['dbResName','.'],['@XmlAttribute(name="dbResName" required="true" )']],
  [['dbVersion','.'],['@XmlAttribute(name="dbVersion" )']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" required="true" )']],
  [['dbCoordSys','.'],['@XmlAttribute(name="dbCoordSys" required="true" )']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.CrossRefDb'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.ResidueDetail'],['!XmlInner']],
  [['crossRefDb','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.CrossRefDb>'],['@XmlElement']],
  [['residueDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.ResidueDetail>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListResidue.Residue, "CrossRefDb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbChainId=null;
this.dbSource=null;
this.dbCoordSys=null;
this.dbAccessionId=null;
this.dbEvidence=null;
this.dbVersion=null;
this.dbResNum=null;
this.dbResName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDbChainId$', function () {
return this.dbChainId;
});

Clazz.newMeth(C$, 'setDbChainId$S', function (value) {
this.dbChainId=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$', function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S', function (value) {
this.dbCoordSys=value;
});

Clazz.newMeth(C$, 'getDbAccessionId$', function () {
return this.dbAccessionId;
});

Clazz.newMeth(C$, 'setDbAccessionId$S', function (value) {
this.dbAccessionId=value;
});

Clazz.newMeth(C$, 'getDbEvidence$', function () {
return this.dbEvidence;
});

Clazz.newMeth(C$, 'setDbEvidence$S', function (value) {
this.dbEvidence=value;
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S', function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getDbResNum$', function () {
return this.dbResNum;
});

Clazz.newMeth(C$, 'setDbResNum$S', function (value) {
this.dbResNum=value;
});

Clazz.newMeth(C$, 'getDbResName$', function () {
return this.dbResName;
});

Clazz.newMeth(C$, 'setDbResName$S', function (value) {
this.dbResName=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.CrossRefDb'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['dbChainId','String'],['@XmlAttribute(name="dbChainId" )']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" required="true" )']],
  [['dbCoordSys','.'],['@XmlAttribute(name="dbCoordSys" required="true" )']],
  [['dbAccessionId','.'],['@XmlAttribute(name="dbAccessionId" required="true" )']],
  [['dbEvidence','.'],['@XmlAttribute(name="dbEvidence" )']],
  [['dbVersion','.'],['@XmlAttribute(name="dbVersion" )']],
  [['dbResNum','.'],['@XmlAttribute(name="dbResNum" required="true" )']],
  [['dbResName','.'],['@XmlAttribute(name="dbResName" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListResidue.Residue, "ResidueDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.content=null;
this.dbSource=null;
this.property=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S', function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S', function (value) {
this.property=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.ResidueDetail'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"content"  } )']],
  [['content','String'],['@XmlValue']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" )']],
  [['property','.'],['@XmlAttribute(name="property" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Entry.Entity.Segment, "SegmentDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.content=null;
this.dbSource=null;
this.property=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S', function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S', function (value) {
this.property=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.SegmentDetail'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"content"  } )']],
  [['content','String'],['@XmlValue']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" )']],
  [['property','.'],['@XmlAttribute(name="property" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Entry, "EntryDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.content=null;
this.dbSource=null;
this.property=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S', function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S', function (value) {
this.property=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.EntryDetail'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"content"  } )']],
  [['content','String'],['@XmlValue']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" )']],
  [['property','.'],['@XmlAttribute(name="property" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Entry, "ListDB", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.db=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDb$', function () {
if (this.db == null ) {
this.db=Clazz.new_($I$(1));
}return this.db;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.ListDB'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"db"  } )']],
  [['db','java.util.List<jalview.xml.binding.sifts.Entry.ListDB.Db>'],['@XmlElement(required="true" )']],
  [['null','jalview.xml.binding.sifts.Entry.ListDB.Db'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.Entry.ListDB, "Db", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbVersion=null;
this.dbSource=null;
this.dbCoordSys=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDbVersion$', function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S', function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S', function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$', function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S', function (value) {
this.dbCoordSys=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.sifts.Entry.ListDB.Db'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['dbVersion','String'],['@XmlAttribute(name="dbVersion" )']],
  [['dbSource','.'],['@XmlAttribute(name="dbSource" required="true" )']],
  [['dbCoordSys','.'],['@XmlAttribute(name="dbCoordSys" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
