(function(){var P$=Clazz.newPackage("jalview.xml.binding.sifts"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Entry", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Entity',9],['EntryDetail',9],['ListDB',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dbSource','dbCoordSys','dbAccessionId','dbEvidence','dbVersion'],'O',['listDB','jalview.xml.binding.sifts.Entry.ListDB','entryDetail','java.util.List','+entity','+alignment','date','javax.xml.datatype.XMLGregorianCalendar','+dbEntryVersion']]]

Clazz.newMeth(C$, 'getListDB$',  function () {
return this.listDB;
});

Clazz.newMeth(C$, 'setListDB$jalview_xml_binding_sifts_Entry_ListDB',  function (value) {
this.listDB=value;
});

Clazz.newMeth(C$, 'getEntryDetail$',  function () {
if (this.entryDetail == null ) {
this.entryDetail=Clazz.new_($I$(1,1));
}return this.entryDetail;
});

Clazz.newMeth(C$, 'getEntity$',  function () {
if (this.entity == null ) {
this.entity=Clazz.new_($I$(1,1));
}return this.entity;
});

Clazz.newMeth(C$, 'getAlignment$',  function () {
if (this.alignment == null ) {
this.alignment=Clazz.new_($I$(1,1));
}return this.alignment;
});

Clazz.newMeth(C$, 'getDate$',  function () {
return this.date;
});

Clazz.newMeth(C$, 'setDate$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.date=value;
});

Clazz.newMeth(C$, 'getDbEntryVersion$',  function () {
return this.dbEntryVersion;
});

Clazz.newMeth(C$, 'setDbEntryVersion$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.dbEntryVersion=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$',  function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S',  function (value) {
this.dbCoordSys=value;
});

Clazz.newMeth(C$, 'getDbAccessionId$',  function () {
return this.dbAccessionId;
});

Clazz.newMeth(C$, 'setDbAccessionId$S',  function (value) {
this.dbAccessionId=value;
});

Clazz.newMeth(C$, 'getDbEvidence$',  function () {
return this.dbEvidence;
});

Clazz.newMeth(C$, 'setDbEvidence$S',  function (value) {
this.dbEvidence=value;
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S',  function (value) {
this.dbVersion=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"listDB"  "entryDetail"  "entity"  "alignment"  } ','name="entry" ']],
  [['listDB','jalview.xml.binding.sifts.Entry.ListDB',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['entity','java.util.List<jalview.xml.binding.sifts.Entry.Entity>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['date','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="date" required="true" ','name="date" ']],
  [['dbEntryVersion','.',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="dbEntryVersion" required="true" ','name="date" ']],
  [['dbSource','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" required="true" ']],
  [['dbCoordSys','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbCoordSys" required="true" ']],
  [['dbAccessionId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbAccessionId" required="true" ']],
  [['dbEvidence','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbEvidence" ']],
  [['dbVersion','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbVersion" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.EntryDetail'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.ListDB'],['!XmlInner']],
  [['entryDetail','java.util.List<jalview.xml.binding.sifts.Entry.EntryDetail>'],['@XmlElement']],
  [['alignment','java.util.List<jalview.xml.binding.sifts.Alignment>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry, "Entity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['EntityDetail',9],['Segment',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['entityId'],'O',['entityDetail','java.util.List','+segment','type','jalview.xml.binding.sifts.EntityType']]]

Clazz.newMeth(C$, 'getEntityDetail$',  function () {
if (this.entityDetail == null ) {
this.entityDetail=Clazz.new_($I$(1,1));
}return this.entityDetail;
});

Clazz.newMeth(C$, 'getSegment$',  function () {
if (this.segment == null ) {
this.segment=Clazz.new_($I$(1,1));
}return this.segment;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$jalview_xml_binding_sifts_EntityType',  function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getEntityId$',  function () {
return this.entityId;
});

Clazz.newMeth(C$, 'setEntityId$S',  function (value) {
this.entityId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"entityDetail"  "segment"  } ']],
  [['segment','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['type','jalview.xml.binding.sifts.EntityType',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['entityId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="entityId" required="true" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.EntityDetail'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment'],['!XmlInner']],
  [['entityDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.EntityDetail>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity, "EntityDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['content','dbSource','property']]]

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S',  function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$',  function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S',  function (value) {
this.property=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.EntityDetail',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" ']],
  [['property','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="property" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity, "Segment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['ListMapRegion',9],['ListResidue',9],['SegmentDetail',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['segId','start','end'],'O',['listResidue','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue','listMapRegion','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion','segmentDetail','java.util.List']]]

Clazz.newMeth(C$, 'getListResidue$',  function () {
return this.listResidue;
});

Clazz.newMeth(C$, 'setListResidue$jalview_xml_binding_sifts_Entry_Entity_Segment_ListResidue',  function (value) {
this.listResidue=value;
});

Clazz.newMeth(C$, 'getListMapRegion$',  function () {
return this.listMapRegion;
});

Clazz.newMeth(C$, 'setListMapRegion$jalview_xml_binding_sifts_Entry_Entity_Segment_ListMapRegion',  function (value) {
this.listMapRegion=value;
});

Clazz.newMeth(C$, 'getSegmentDetail$',  function () {
if (this.segmentDetail == null ) {
this.segmentDetail=Clazz.new_($I$(1,1));
}return this.segmentDetail;
});

Clazz.newMeth(C$, 'getSegId$',  function () {
return this.segId;
});

Clazz.newMeth(C$, 'setSegId$S',  function (value) {
this.segId=value;
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$S',  function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$S',  function (value) {
this.end=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"listResidue"  "listMapRegion"  "segmentDetail"  } ']],
  [['segId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="segId" required="true" ']],
  [['start','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.SegmentDetail'],['!XmlInner']],
  [['listResidue','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue'],['@XmlElement']],
  [['listMapRegion','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion'],['@XmlElement']],
  [['segmentDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.SegmentDetail>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment, "ListMapRegion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['MapRegion',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mapRegion','java.util.List']]]

Clazz.newMeth(C$, 'getMapRegion$',  function () {
if (this.mapRegion == null ) {
this.mapRegion=Clazz.new_($I$(1,1));
}return this.mapRegion;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"mapRegion"  } ']],
  [['mapRegion','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListMapRegion, "MapRegion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Db',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['start','end'],'O',['db','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db']]]

Clazz.newMeth(C$, 'getDb$',  function () {
return this.db;
});

Clazz.newMeth(C$, 'setDb$jalview_xml_binding_sifts_Entry_Entity_Segment_ListMapRegion_MapRegion_Db',  function (value) {
this.db=value;
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$S',  function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$S',  function (value) {
this.end=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"db"  } ']],
  [['db','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['start','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListMapRegion.MapRegion, "Db", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['DbDetail',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dbChainId','dbSource','dbCoordSys','dbAccessionId','dbEvidence','dbVersion','start','end'],'O',['dbDetail','java.util.List']]]

Clazz.newMeth(C$, 'getDbDetail$',  function () {
if (this.dbDetail == null ) {
this.dbDetail=Clazz.new_($I$(1,1));
}return this.dbDetail;
});

Clazz.newMeth(C$, 'getDbChainId$',  function () {
return this.dbChainId;
});

Clazz.newMeth(C$, 'setDbChainId$S',  function (value) {
this.dbChainId=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$',  function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S',  function (value) {
this.dbCoordSys=value;
});

Clazz.newMeth(C$, 'getDbAccessionId$',  function () {
return this.dbAccessionId;
});

Clazz.newMeth(C$, 'setDbAccessionId$S',  function (value) {
this.dbAccessionId=value;
});

Clazz.newMeth(C$, 'getDbEvidence$',  function () {
return this.dbEvidence;
});

Clazz.newMeth(C$, 'setDbEvidence$S',  function (value) {
this.dbEvidence=value;
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S',  function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$S',  function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$S',  function (value) {
this.end=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"dbDetail"  } ']],
  [['dbChainId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbChainId" ']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" required="true" ']],
  [['dbCoordSys','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbCoordSys" required="true" ']],
  [['dbAccessionId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbAccessionId" required="true" ']],
  [['dbEvidence','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbEvidence" ']],
  [['dbVersion','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbVersion" ']],
  [['start','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db.DbDetail'],['!XmlInner']],
  [['dbDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db.DbDetail>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListMapRegion.MapRegion.Db, "DbDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['content','dbSource','property']]]

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S',  function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$',  function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S',  function (value) {
this.property=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListMapRegion.MapRegion.Db.DbDetail',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" ']],
  [['property','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="property" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment, "ListResidue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Residue',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['residue','java.util.List']]]

Clazz.newMeth(C$, 'getResidue$',  function () {
if (this.residue == null ) {
this.residue=Clazz.new_($I$(1,1));
}return this.residue;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"residue"  } ']],
  [['residue','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListResidue, "Residue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['CrossRefDb',9],['ResidueDetail',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dbResNum','dbResName','dbVersion','dbSource','dbCoordSys'],'O',['crossRefDb','java.util.List','+residueDetail']]]

Clazz.newMeth(C$, 'getCrossRefDb$',  function () {
if (this.crossRefDb == null ) {
this.crossRefDb=Clazz.new_($I$(1,1));
}return this.crossRefDb;
});

Clazz.newMeth(C$, 'getResidueDetail$',  function () {
if (this.residueDetail == null ) {
this.residueDetail=Clazz.new_($I$(1,1));
}return this.residueDetail;
});

Clazz.newMeth(C$, 'getDbResNum$',  function () {
return this.dbResNum;
});

Clazz.newMeth(C$, 'setDbResNum$S',  function (value) {
this.dbResNum=value;
});

Clazz.newMeth(C$, 'getDbResName$',  function () {
return this.dbResName;
});

Clazz.newMeth(C$, 'setDbResName$S',  function (value) {
this.dbResName=value;
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S',  function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$',  function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S',  function (value) {
this.dbCoordSys=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"crossRefDb"  "residueDetail"  } ']],
  [['dbResNum','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbResNum" required="true" ']],
  [['dbResName','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbResName" required="true" ']],
  [['dbVersion','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbVersion" ']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" required="true" ']],
  [['dbCoordSys','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbCoordSys" required="true" ']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.CrossRefDb'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.ResidueDetail'],['!XmlInner']],
  [['crossRefDb','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.CrossRefDb>'],['@XmlElement']],
  [['residueDetail','java.util.List<jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.ResidueDetail>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListResidue.Residue, "CrossRefDb", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dbChainId','dbSource','dbCoordSys','dbAccessionId','dbEvidence','dbVersion','dbResNum','dbResName']]]

Clazz.newMeth(C$, 'getDbChainId$',  function () {
return this.dbChainId;
});

Clazz.newMeth(C$, 'setDbChainId$S',  function (value) {
this.dbChainId=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$',  function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S',  function (value) {
this.dbCoordSys=value;
});

Clazz.newMeth(C$, 'getDbAccessionId$',  function () {
return this.dbAccessionId;
});

Clazz.newMeth(C$, 'setDbAccessionId$S',  function (value) {
this.dbAccessionId=value;
});

Clazz.newMeth(C$, 'getDbEvidence$',  function () {
return this.dbEvidence;
});

Clazz.newMeth(C$, 'setDbEvidence$S',  function (value) {
this.dbEvidence=value;
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S',  function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getDbResNum$',  function () {
return this.dbResNum;
});

Clazz.newMeth(C$, 'setDbResNum$S',  function (value) {
this.dbResNum=value;
});

Clazz.newMeth(C$, 'getDbResName$',  function () {
return this.dbResName;
});

Clazz.newMeth(C$, 'setDbResName$S',  function (value) {
this.dbResName=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.CrossRefDb',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['dbChainId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbChainId" ']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" required="true" ']],
  [['dbCoordSys','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbCoordSys" required="true" ']],
  [['dbAccessionId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbAccessionId" required="true" ']],
  [['dbEvidence','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbEvidence" ']],
  [['dbVersion','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbVersion" ']],
  [['dbResNum','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbResNum" required="true" ']],
  [['dbResName','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbResName" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment.ListResidue.Residue, "ResidueDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['content','dbSource','property']]]

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S',  function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$',  function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S',  function (value) {
this.property=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.ListResidue.Residue.ResidueDetail',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" ']],
  [['property','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="property" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.Entity.Segment, "SegmentDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['content','dbSource','property']]]

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S',  function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$',  function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S',  function (value) {
this.property=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.Entity.Segment.SegmentDetail',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" ']],
  [['property','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="property" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry, "EntryDetail", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['content','dbSource','property']]]

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S',  function (value) {
this.content=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getProperty$',  function () {
return this.property;
});

Clazz.newMeth(C$, 'setProperty$S',  function (value) {
this.property=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.EntryDetail',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" ']],
  [['property','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="property" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry, "ListDB", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Db',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['db','java.util.List']]]

Clazz.newMeth(C$, 'getDb$',  function () {
if (this.db == null ) {
this.db=Clazz.new_($I$(1,1));
}return this.db;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.ListDB',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"db"  } ']],
  [['db','java.util.List<jalview.xml.binding.sifts.Entry.ListDB.Db>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.sifts.Entry.ListDB.Db'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Entry.ListDB, "Db", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dbVersion','dbSource','dbCoordSys']]]

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return this.dbVersion;
});

Clazz.newMeth(C$, 'setDbVersion$S',  function (value) {
this.dbVersion=value;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return this.dbSource;
});

Clazz.newMeth(C$, 'setDbSource$S',  function (value) {
this.dbSource=value;
});

Clazz.newMeth(C$, 'getDbCoordSys$',  function () {
return this.dbCoordSys;
});

Clazz.newMeth(C$, 'setDbCoordSys$S',  function (value) {
this.dbCoordSys=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Entry.ListDB.Db',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['dbVersion','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbVersion" ']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" required="true" ']],
  [['dbCoordSys','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbCoordSys" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
