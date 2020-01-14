(function(){var P$=Clazz.newPackage("jalview.renderer"),I$=[[0,'java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ResidueColourFinder");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getResidueColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder', function (showBoxes, shader, allGroups, seq, position, finder) {
var col=this.getResidueBoxColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I(showBoxes, shader, allGroups, seq, position);
if (finder != null ) {
col=finder.findFeatureColour$java_awt_Color$jalview_datamodel_SequenceI$I(col, seq, position);
}return col;
});

Clazz.newMeth(C$, 'getResidueBoxColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I', function (showBoxes, shader, allGroups, seq, i) {
var currentSequenceGroup=this.getCurrentSequenceGroup$jalview_datamodel_SequenceGroupA$I(allGroups, i);
if (currentSequenceGroup != null ) {
if (currentSequenceGroup.getDisplayBoxes$()) {
return this.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(currentSequenceGroup.getGroupColourScheme$(), seq, i);
}} else if (showBoxes) {
return this.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(shader, seq, i);
}return $I$(1).white;
});

Clazz.newMeth(C$, 'getCurrentSequenceGroup$jalview_datamodel_SequenceGroupA$I', function (allGroups, res) {
if (allGroups == null ) {
return null;
}for (var i=0; i < allGroups.length; i++) {
if ((allGroups[i].getStartRes$() <= res) && (allGroups[i].getEndRes$() >= res) ) {
return (allGroups[i]);
}}
return null;
});

Clazz.newMeth(C$, 'getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I', function (shader, seq, i) {
var resBoxColour=$I$(1).white;
if (shader.getColourScheme$() != null ) {
resBoxColour=shader.findColour$C$I$jalview_datamodel_SequenceI(seq.getCharAt$I(i), i, seq);
}return resBoxColour;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
