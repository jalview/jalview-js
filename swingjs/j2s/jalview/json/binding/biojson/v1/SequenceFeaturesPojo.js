(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1");
/*c*/var C$=Clazz.newClass(P$, "SequenceFeaturesPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['xStart','xEnd'],'S',['sequenceRef','type','description','fillColor','featureGroup'],'O',['score','Float','otherDetails','java.util.Map','links','java.util.Vector']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (sequenceRef) {
;C$.$init$.apply(this);
this.sequenceRef=sequenceRef;
}, 1);

Clazz.newMeth(C$, 'getFillColor$', function () {
return "#" + this.fillColor;
});

Clazz.newMeth(C$, 'setFillColor$S', function (fillColor) {
this.fillColor=fillColor;
});

Clazz.newMeth(C$, 'getXstart$', function () {
return this.xStart;
});

Clazz.newMeth(C$, 'setXstart$I', function (xStart) {
this.xStart=xStart;
});

Clazz.newMeth(C$, 'getXend$', function () {
return this.xEnd;
});

Clazz.newMeth(C$, 'setXend$I', function (xend) {
this.xEnd=xend;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$Float', function (score) {
this.score=score;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getOtherDetails$', function () {
return this.otherDetails;
});

Clazz.newMeth(C$, 'setOtherDetails$java_util_Map', function (otherDetails) {
this.otherDetails=otherDetails;
});

Clazz.newMeth(C$, 'getLinks$', function () {
return this.links;
});

Clazz.newMeth(C$, 'setLinks$java_util_Vector', function (links) {
this.links=links;
});

Clazz.newMeth(C$, 'getFeatureGroup$', function () {
return this.featureGroup;
});

Clazz.newMeth(C$, 'setFeatureGroup$S', function (featureGroup) {
this.featureGroup=featureGroup;
});

Clazz.newMeth(C$, 'getSequenceRef$', function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S', function (sequenceRef) {
this.sequenceRef=sequenceRef;
});
C$.$getAnn$ = function(){ return [
[['xStart','int',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="Start residue position for the sequence feature" ']],
  [['xEnd','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="End residue position for the sequence feature" ']],
  [['sequenceRef','String',null,['com.github.reinert.jjschema.Attributes']],['required="true" minItems="1" maxItems="2147483647" description="Reference to the sequence in the alignment<br> (more like a foreign key)" ']],
  [['type','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="The name or type of the SequenceFeature" ']],
  [['score','Float',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Score" ']],
  [['description','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Description for the feature" ']],
  [['otherDetails','java.util.Map',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Additional metadata for the feature" ']],
  [['fillColor','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Fill colour" ']],
  [['featureGroup','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="Feature group" ']],
  [['links','java.util.Vector',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="URL links associated to the feature" ']],
  [['M:getFillColor','String'],['@XmlElement']],
  [['M:getXstart','int'],['@XmlElement']],
  [['M:getXend','int'],['@XmlElement']],
  [['M:getType','String'],['@XmlElement']],
  [['M:getScore','Float'],['@XmlElement']],
  [['M:getDescription','String'],['@XmlElement']],
  [['M:getOtherDetails','java.util.Map<java.lang.String,java.lang.Object>'],['@XmlElement']],
  [['M:getLinks','java.util.Vector<java.lang.String>'],['@XmlElement']],
  [['M:getFeatureGroup','String'],['@XmlElement']],
  [['M:getSequenceRef','String'],['@XmlElement']]]}
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
