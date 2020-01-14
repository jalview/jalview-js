(function(){var P$=Clazz.newPackage("jalview.renderer"),I$=[[0,'java.awt.Color','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OverviewResColourFinder", null, 'jalview.renderer.ResidueColourFinder');
C$.OVERVIEW_DEFAULT_GAP=null;
C$.OVERVIEW_DEFAULT_LEGACY_GAP=null;
C$.OVERVIEW_DEFAULT_HIDDEN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OVERVIEW_DEFAULT_GAP=$I$(1).lightGray;
C$.OVERVIEW_DEFAULT_LEGACY_GAP=$I$(1).white;
C$.OVERVIEW_DEFAULT_HIDDEN=$I$(1).darkGray.darker$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.GAP_COLOUR=null;
this.RESIDUE_COLOUR=null;
this.HIDDEN_COLOUR=null;
this.useLegacy=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.useLegacy=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z$java_awt_Color$java_awt_Color.apply(this, [false, C$.OVERVIEW_DEFAULT_GAP, C$.OVERVIEW_DEFAULT_HIDDEN]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$java_awt_Color$java_awt_Color', function (useLegacyColouring, gapCol, hiddenCol) {
Clazz.super_(C$, this,1);
if (useLegacyColouring) {
this.GAP_COLOUR=$I$(1).white;
this.RESIDUE_COLOUR=$I$(1).lightGray;
this.HIDDEN_COLOUR=hiddenCol;
} else {
this.GAP_COLOUR=gapCol;
this.RESIDUE_COLOUR=$I$(1).white;
this.HIDDEN_COLOUR=hiddenCol;
}}, 1);

Clazz.newMeth(C$, 'getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I', function (shader, seq, i) {
var resBoxColour=this.RESIDUE_COLOUR;
var currentChar=seq.getCharAt$I(i);
if (shader.getColourScheme$() != null ) {
if ($I$(2).isGap$C(currentChar) && (!shader.getColourScheme$().hasGapColour$()) ) {
resBoxColour=this.GAP_COLOUR;
} else {
resBoxColour=shader.findColour$C$I$jalview_datamodel_SequenceI(currentChar, i, seq);
}} else if ($I$(2).isGap$C(currentChar)) {
resBoxColour=this.GAP_COLOUR;
}return resBoxColour;
});

Clazz.newMeth(C$, 'getResidueBoxColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I', function (showBoxes, shader, allGroups, seq, i) {
var currentShader;
var currentSequenceGroup=this.getCurrentSequenceGroup$jalview_datamodel_SequenceGroupA$I(allGroups, i);
if (currentSequenceGroup != null ) {
currentShader=currentSequenceGroup.getGroupColourScheme$();
} else {
currentShader=shader;
}return this.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(currentShader, seq, i);
});

Clazz.newMeth(C$, 'getHiddenColour$', function () {
return this.HIDDEN_COLOUR;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
