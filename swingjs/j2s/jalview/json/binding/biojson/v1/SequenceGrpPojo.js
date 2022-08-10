(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceGrpPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sequenceRefs=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['displayBoxes','displayText','colourText','showNonconserved'],'I',['startRes','endRes'],'S',['colourScheme','groupName','description'],'O',['sequenceRefs','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getColourScheme$',  function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S',  function (colourScheme) {
this.colourScheme=colourScheme;
});

Clazz.newMeth(C$, 'getGroupName$',  function () {
return this.groupName;
});

Clazz.newMeth(C$, 'setGroupName$S',  function (groupName) {
this.groupName=groupName;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'isDisplayBoxes$',  function () {
return this.displayBoxes;
});

Clazz.newMeth(C$, 'setDisplayBoxes$Z',  function (displayBoxes) {
this.displayBoxes=displayBoxes;
});

Clazz.newMeth(C$, 'isDisplayText$',  function () {
return this.displayText;
});

Clazz.newMeth(C$, 'setDisplayText$Z',  function (displayText) {
this.displayText=displayText;
});

Clazz.newMeth(C$, 'isColourText$',  function () {
return this.colourText;
});

Clazz.newMeth(C$, 'setColourText$Z',  function (colourText) {
this.colourText=colourText;
});

Clazz.newMeth(C$, 'isShowNonconserved$',  function () {
return this.showNonconserved;
});

Clazz.newMeth(C$, 'setShowNonconserved$Z',  function (showNonconserved) {
this.showNonconserved=showNonconserved;
});

Clazz.newMeth(C$, 'getStartRes$',  function () {
return this.startRes;
});

Clazz.newMeth(C$, 'setStartRes$I',  function (startRes) {
this.startRes=startRes;
});

Clazz.newMeth(C$, 'getEndRes$',  function () {
return this.endRes;
});

Clazz.newMeth(C$, 'setEndRes$I',  function (endRes) {
this.endRes=endRes;
});

Clazz.newMeth(C$, 'getSequenceRefs$',  function () {
return this.sequenceRefs;
});

Clazz.newMeth(C$, 'setSequenceRefs$java_util_ArrayList',  function (sequenceRefs) {
this.sequenceRefs=sequenceRefs;
});
C$.$getAnn$ = function(){ return [
[['colourScheme','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="The <a href="#colourScheme">Colour Scheme</a> applied to the Sequence Group" ']],
  [['groupName','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="The name assigned to the seqGroup" ']],
  [['description','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Serial version identifier for the <b>seqGroup</b> object model" ']],
  [['displayBoxes','boolean',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Determines if the seqGroup border should be visible or not" ']],
  [['displayText','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Determines if the texts of the group is displayed or not" ']],
  [['colourText','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Determines if the residues text for the group is coloured" ']],
  [['showNonconserved','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Boolean value indicating whether residues should only be shown <br/>that are different from current reference or consensus sequence" ']],
  [['startRes','int',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="The index of the group’s first residue in the alignment space" ']],
  [['endRes','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="The index of the group’s last residue in the alignment space" ']],
  [['sequenceRefs','java.util.ArrayList',null,['com.github.reinert.jjschema.Attributes']],['required="true" minItems="1" uniqueItems="true" description="An array of the unique id\'s for the sequences belonging to the group" ']],
  [['M:getColourScheme','String'],['@XmlElement']],
  [['M:getGroupName','String'],['@XmlElement']],
  [['M:getDescription','String'],['@XmlElement']],
  [['M:isDisplayBoxes','boolean'],['@XmlElement']],
  [['M:isDisplayText','boolean'],['@XmlElement']],
  [['M:isColourText','boolean'],['@XmlElement']],
  [['M:isShowNonconserved','boolean'],['@XmlElement']],
  [['M:getStartRes','int'],['@XmlElement']],
  [['M:getEndRes','int'],['@XmlElement']],
  [['M:getSequenceRefs','java.util.ArrayList<java.lang.String>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
