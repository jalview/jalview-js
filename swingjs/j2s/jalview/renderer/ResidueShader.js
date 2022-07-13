(function(){var P$=Clazz.newPackage("jalview.renderer"),I$=[[0,'java.awt.Color','jalview.util.Comparison','jalview.util.ColorUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResidueShader", null, null, 'jalview.renderer.ResidueShaderI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.conservationIncrement=30;
},1);

C$.$fields$=[['Z',['conservationColouring','ignoreGaps'],'I',['pidThreshold','conservationIncrement'],'O',['colourScheme','jalview.schemes.ColourSchemeI','consensus','jalview.datamodel.ProfilesI','conservation','char[]']]]

Clazz.newMeth(C$, 'c$$jalview_schemes_ColourSchemeI',  function (cs) {
;C$.$init$.apply(this);
this.colourScheme=cs;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_ViewStyleI',  function (viewStyle) {
C$.c$.apply(this, []);
this.setConservationApplied$Z(viewStyle.isConservationColourSelected$());
}, 1);

Clazz.newMeth(C$, 'c$$jalview_renderer_ResidueShader',  function (rs) {
;C$.$init$.apply(this);
this.colourScheme=rs.colourScheme;
this.consensus=rs.consensus;
this.conservation=rs.conservation;
this.conservationColouring=rs.conservationColouring;
this.conservationIncrement=rs.conservationIncrement;
this.ignoreGaps=rs.ignoreGaps;
this.pidThreshold=rs.pidThreshold;
}, 1);

Clazz.newMeth(C$, 'setConsensus$jalview_datamodel_ProfilesI',  function (cons) {
this.consensus=cons;
});

Clazz.newMeth(C$, 'conservationApplied$',  function () {
return this.conservationColouring;
});

Clazz.newMeth(C$, 'setConservationApplied$Z',  function (conservationApplied) {
this.conservationColouring=conservationApplied;
});

Clazz.newMeth(C$, 'setConservation$jalview_analysis_Conservation',  function (cons) {
if (cons == null ) {
this.conservationColouring=false;
this.conservation=null;
} else {
this.conservationColouring=true;
this.conservation=cons.getConsSequence$().getSequenceAsString$().toCharArray$();
}});

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map',  function (alignment, hiddenReps) {
if (this.colourScheme != null ) {
this.colourScheme.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(alignment, hiddenReps);
}});

Clazz.newMeth(C$, 'setThreshold$I$Z',  function (consensusThreshold, ignoreGaps) {
this.pidThreshold=consensusThreshold;
this.ignoreGaps=ignoreGaps;
});

Clazz.newMeth(C$, 'setConservationInc$I',  function (i) {
this.conservationIncrement=i;
});

Clazz.newMeth(C$, 'getConservationInc$',  function () {
return this.conservationIncrement;
});

Clazz.newMeth(C$, 'getThreshold$',  function () {
return this.pidThreshold;
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI',  function (symbol, position, seq) {
if (this.colourScheme == null ) {
return $I$(1).white;
}var profile=this.consensus == null  ? null : this.consensus.get$I(position);
var modalResidue=profile == null  ? null : profile.getModalResidue$();
var pid=profile == null  ? 0.0 : profile.getPercentageIdentity$Z(this.ignoreGaps);
var colour=this.colourScheme.findColour$C$I$jalview_datamodel_SequenceI$S$F(symbol, position, seq, modalResidue, pid);
if (!$I$(2).isGap$C(symbol)) {
colour=this.adjustColour$C$I$java_awt_Color(symbol, position, colour);
}return colour;
});

Clazz.newMeth(C$, 'adjustColour$C$I$java_awt_Color',  function (symbol, column, colour) {
if (!this.aboveThreshold$C$I(symbol, column)) {
colour=$I$(1).white;
}if (this.conservationColouring) {
colour=this.applyConservation$java_awt_Color$I(colour, column);
}return colour;
});

Clazz.newMeth(C$, 'aboveThreshold$C$I',  function (residue, column) {
if (this.pidThreshold == 0) {
return true;
}if ("a" <= residue && residue <= "z" ) {
residue = String.fromCharCode(residue.$c()- (32));
}if (this.consensus == null ) {
return false;
}var profile=this.consensus.get$I(column);
if (profile != null  && profile.getModalResidue$().contains$CharSequence(String.valueOf$C(residue)) ) {
if (profile.getPercentageIdentity$Z(this.ignoreGaps) >= this.pidThreshold ) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'applyConservation$java_awt_Color$I',  function (currentColour, column) {
if (this.conservation == null  || this.conservation.length <= column ) {
return currentColour;
}var conservationScore=this.conservation[column];
if (conservationScore == "*" || conservationScore == "+"  || conservationScore == "\n"  || conservationScore == "\u000b" ) {
return currentColour;
}if ($I$(2).isGap$C(conservationScore)) {
return $I$(1).white;
}var bleachFactor=(11 - (conservationScore.$c() - 48)) / 10.0;
bleachFactor*=(this.conservationIncrement / 20.0);
return $I$(3).bleachColour$java_awt_Color$F(currentColour, bleachFactor);
});

Clazz.newMeth(C$, 'getColourScheme$',  function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$jalview_schemes_ColourSchemeI',  function (cs) {
this.colourScheme=cs;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
