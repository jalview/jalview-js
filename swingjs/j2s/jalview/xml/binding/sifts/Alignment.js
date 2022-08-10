(function(){var P$=Clazz.newPackage("jalview.xml.binding.sifts"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Alignment", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AlignObject',9],['Block',9],['Geo3D',9],['Score',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['alignType'],'O',['alignObject','java.util.List','+score','+block','+geo3D']]]

Clazz.newMeth(C$, 'getAlignObject$',  function () {
if (this.alignObject == null ) {
this.alignObject=Clazz.new_($I$(1,1));
}return this.alignObject;
});

Clazz.newMeth(C$, 'getScore$',  function () {
if (this.score == null ) {
this.score=Clazz.new_($I$(1,1));
}return this.score;
});

Clazz.newMeth(C$, 'getBlock$',  function () {
if (this.block == null ) {
this.block=Clazz.new_($I$(1,1));
}return this.block;
});

Clazz.newMeth(C$, 'getGeo3D$',  function () {
if (this.geo3D == null ) {
this.geo3D=Clazz.new_($I$(1,1));
}return this.geo3D;
});

Clazz.newMeth(C$, 'getAlignType$',  function () {
return this.alignType;
});

Clazz.newMeth(C$, 'setAlignType$S',  function (value) {
this.alignType=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"alignObject"  "score"  "block"  "geo3D"  } ','name="alignment" ']],
  [['alignObject','java.util.List<jalview.xml.binding.sifts.Alignment.AlignObject>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['block','java.util.List<jalview.xml.binding.sifts.Alignment.Block>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['geo3D','java.util.List<jalview.xml.binding.sifts.Alignment.Geo3D>',null,['javax.xml.bind.annotation.XmlElement']],['name="geo3d" ']],
  [['alignType','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="alignType" required="true" ']],
  [['null','jalview.xml.binding.sifts.Alignment.AlignObject'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Block'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Score'],['!XmlInner']],
  [['score','java.util.List<jalview.xml.binding.sifts.Alignment.Score>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment, "AlignObject", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['AlignObjectDetail',9],['Sequence',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['objectVersion','intObjectId','type','dbSource','dbCoordSys','dbAccessionId','dbEvidence','dbVersion'],'O',['alignObjectDetail','java.util.List','sequence','jalview.xml.binding.sifts.Alignment.AlignObject.Sequence']]]

Clazz.newMeth(C$, 'getAlignObjectDetail$',  function () {
if (this.alignObjectDetail == null ) {
this.alignObjectDetail=Clazz.new_($I$(1,1));
}return this.alignObjectDetail;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_xml_binding_sifts_Alignment_AlignObject_Sequence',  function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getObjectVersion$',  function () {
return this.objectVersion;
});

Clazz.newMeth(C$, 'setObjectVersion$S',  function (value) {
this.objectVersion=value;
});

Clazz.newMeth(C$, 'getIntObjectId$',  function () {
return this.intObjectId;
});

Clazz.newMeth(C$, 'setIntObjectId$S',  function (value) {
this.intObjectId=value;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (value) {
this.type=value;
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
[[null,'jalview.xml.binding.sifts.Alignment.AlignObject',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"alignObjectDetail"  "sequence"  } ']],
  [['objectVersion','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="objectVersion" required="true" ']],
  [['intObjectId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="intObjectId" required="true" ']],
  [['type','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" ']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" required="true" ']],
  [['dbCoordSys','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbCoordSys" required="true" ']],
  [['dbAccessionId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbAccessionId" required="true" ']],
  [['dbEvidence','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbEvidence" ']],
  [['dbVersion','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbVersion" ']],
  [['null','jalview.xml.binding.sifts.Alignment.AlignObject.AlignObjectDetail'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.AlignObject.Sequence'],['!XmlInner']],
  [['alignObjectDetail','java.util.List<jalview.xml.binding.sifts.Alignment.AlignObject.AlignObjectDetail>'],['@XmlElement']],
  [['sequence','jalview.xml.binding.sifts.Alignment.AlignObject.Sequence'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.AlignObject, "AlignObjectDetail", function(){
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
[[null,'jalview.xml.binding.sifts.Alignment.AlignObject.AlignObjectDetail',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['dbSource','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dbSource" ']],
  [['property','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="property" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.AlignObject, "Sequence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['content','start','end']]]

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'setContent$S',  function (value) {
this.content=value;
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
[[null,'jalview.xml.binding.sifts.Alignment.AlignObject.Sequence',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"content"  } ']],
  [['content','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['start','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment, "Block", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Segment',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['blockScore'],'O',['segment','java.util.List','blockOrder','java.math.BigInteger']]]

Clazz.newMeth(C$, 'getSegment$',  function () {
if (this.segment == null ) {
this.segment=Clazz.new_($I$(1,1));
}return this.segment;
});

Clazz.newMeth(C$, 'getBlockScore$',  function () {
return this.blockScore;
});

Clazz.newMeth(C$, 'setBlockScore$S',  function (value) {
this.blockScore=value;
});

Clazz.newMeth(C$, 'getBlockOrder$',  function () {
return this.blockOrder;
});

Clazz.newMeth(C$, 'setBlockOrder$java_math_BigInteger',  function (value) {
this.blockOrder=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Block',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"segment"  } ']],
  [['segment','java.util.List<jalview.xml.binding.sifts.Alignment.Block.Segment>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['blockScore','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="blockScore" ']],
  [['blockOrder','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="blockOrder" required="true" ']],
  [['null','jalview.xml.binding.sifts.Alignment.Block.Segment'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Block, "Segment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['cigar','intObjectId','strand','start','end']]]

Clazz.newMeth(C$, 'getCigar$',  function () {
return this.cigar;
});

Clazz.newMeth(C$, 'setCigar$S',  function (value) {
this.cigar=value;
});

Clazz.newMeth(C$, 'getIntObjectId$',  function () {
return this.intObjectId;
});

Clazz.newMeth(C$, 'setIntObjectId$S',  function (value) {
this.intObjectId=value;
});

Clazz.newMeth(C$, 'getStrand$',  function () {
return this.strand;
});

Clazz.newMeth(C$, 'setStrand$S',  function (value) {
this.strand=value;
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
[[null,'jalview.xml.binding.sifts.Alignment.Block.Segment',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"cigar"  } ']],
  [['intObjectId','String',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="intObjectId" required="true" ','name="anySimpleType" ']],
  [['strand','.',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="strand" ','name="anySimpleType" ']],
  [['start','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']],
  [['cigar','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment, "Geo3D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Matrix',9],['Vector',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['intObjectId'],'O',['vector','jalview.xml.binding.sifts.Alignment.Geo3D.Vector','matrix','java.util.List']]]

Clazz.newMeth(C$, 'getVector$',  function () {
return this.vector;
});

Clazz.newMeth(C$, 'setVector$jalview_xml_binding_sifts_Alignment_Geo3D_Vector',  function (value) {
this.vector=value;
});

Clazz.newMeth(C$, 'getMatrix$',  function () {
if (this.matrix == null ) {
this.matrix=Clazz.new_($I$(1,1));
}return this.matrix;
});

Clazz.newMeth(C$, 'getIntObjectId$',  function () {
return this.intObjectId;
});

Clazz.newMeth(C$, 'setIntObjectId$S',  function (value) {
this.intObjectId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"vector"  "matrix"  } ']],
  [['vector','jalview.xml.binding.sifts.Alignment.Geo3D.Vector',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['matrix','java.util.List<jalview.xml.binding.sifts.Alignment.Geo3D.Matrix>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['intObjectId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="intObjectId" required="true" ']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Vector'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D, "Matrix", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Max11',9],['Max12',9],['Max13',9],['Max21',9],['Max22',9],['Max23',9],['Max31',9],['Max32',9],['Max33',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['max11','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max11','max12','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max12','max13','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max13','max21','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max21','max22','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max22','max23','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max23','max31','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max31','max32','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max32','max33','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max33']]]

Clazz.newMeth(C$, 'getMax11$',  function () {
return this.max11;
});

Clazz.newMeth(C$, 'setMax11$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max11',  function (value) {
this.max11=value;
});

Clazz.newMeth(C$, 'getMax12$',  function () {
return this.max12;
});

Clazz.newMeth(C$, 'setMax12$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max12',  function (value) {
this.max12=value;
});

Clazz.newMeth(C$, 'getMax13$',  function () {
return this.max13;
});

Clazz.newMeth(C$, 'setMax13$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max13',  function (value) {
this.max13=value;
});

Clazz.newMeth(C$, 'getMax21$',  function () {
return this.max21;
});

Clazz.newMeth(C$, 'setMax21$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max21',  function (value) {
this.max21=value;
});

Clazz.newMeth(C$, 'getMax22$',  function () {
return this.max22;
});

Clazz.newMeth(C$, 'setMax22$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max22',  function (value) {
this.max22=value;
});

Clazz.newMeth(C$, 'getMax23$',  function () {
return this.max23;
});

Clazz.newMeth(C$, 'setMax23$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max23',  function (value) {
this.max23=value;
});

Clazz.newMeth(C$, 'getMax31$',  function () {
return this.max31;
});

Clazz.newMeth(C$, 'setMax31$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max31',  function (value) {
this.max31=value;
});

Clazz.newMeth(C$, 'getMax32$',  function () {
return this.max32;
});

Clazz.newMeth(C$, 'setMax32$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max32',  function (value) {
this.max32=value;
});

Clazz.newMeth(C$, 'getMax33$',  function () {
return this.max33;
});

Clazz.newMeth(C$, 'setMax33$jalview_xml_binding_sifts_Alignment_Geo3D_Matrix_Max33',  function (value) {
this.max33=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"max11"  "max12"  "max13"  "max21"  "max22"  "max23"  "max31"  "max32"  "max33"  } ']],
  [['max11','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max11',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max12','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max12',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max13','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max13',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max21','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max21',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max22','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max22',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max23','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max23',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max31','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max31',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max32','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max32',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['max33','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max33',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max11'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max12'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max13'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max21'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max22'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max23'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max31'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max32'],['!XmlInner']],
  [['null','jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max33'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max11", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max11',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max12", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max12',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max13", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max13',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max21", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max21',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max22", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max22',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max23", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max23',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max31", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max31',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max32", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max32',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D.Matrix, "Max33", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['coord']]]

Clazz.newMeth(C$, 'getCoord$',  function () {
return this.coord;
});

Clazz.newMeth(C$, 'setCoord$F',  function (value) {
this.coord=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Matrix.Max33',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['coord','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="coord" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment.Geo3D, "Vector", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','z']]]

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$F',  function (value) {
this.x=value;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$F',  function (value) {
this.y=value;
});

Clazz.newMeth(C$, 'getZ$',  function () {
return this.z;
});

Clazz.newMeth(C$, 'setZ$F',  function (value) {
this.z=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Geo3D.Vector',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['x','float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="x" required="true" ']],
  [['y','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="y" required="true" ']],
  [['z','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="z" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Alignment, "Score", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['methodName','scoreValue']]]

Clazz.newMeth(C$, 'getMethodName$',  function () {
return this.methodName;
});

Clazz.newMeth(C$, 'setMethodName$S',  function (value) {
this.methodName=value;
});

Clazz.newMeth(C$, 'getScoreValue$',  function () {
return this.scoreValue;
});

Clazz.newMeth(C$, 'setScoreValue$S',  function (value) {
this.scoreValue=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.sifts.Alignment.Score',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['methodName','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="methodName" required="true" ']],
  [['scoreValue','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scoreValue" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
