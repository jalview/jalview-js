(function(){var P$=Clazz.newPackage("jalview.viewmodel.styles"),I$=[[0,'java.awt.Color','Boolean']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ViewStyle", null, null, 'jalview.api.ViewStyleI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.abovePIDThreshold=false;
this.idWidth=-1;
this.centreColumnLabels=false;
this.colourByReferenceSeq=false;
this.conservationColourSelected=false;
this.displayReferenceSeq=false;
this.renderGaps=true;
this.rightAlignIds=false;
this.scaleAboveWrapped=false;
this.scaleLeftWrapped=true;
this.scaleRightWrapped=true;
this.showAnnotation=true;
this.showBoxes=true;
this.showColourText=false;
this.showHiddenMarkers=true;
this.showJVSuffix=true;
this.showSequenceFeatures=false;
this.showText=true;
this.showUnconserved=false;
this.textColour=$I$(1).black;
this.textColour2=$I$(1).white;
this.thresholdTextColour=0;
this.upperCasebold=false;
this.scaleProteinAsCdna=true;
this.proteinFontAsCdna=true;
this.wrapAlignment=false;
},1);

C$.$fields$=[['Z',['abovePIDThreshold','colourAppliesToAllGroups','centreColumnLabels','showdbrefs','shownpfeats','colourByReferenceSeq','conservationColourSelected','displayReferenceSeq','renderGaps','rightAlignIds','scaleAboveWrapped','scaleLeftWrapped','scaleRightWrapped','seqNameItalics','showAnnotation','showBoxes','showColourText','showHiddenMarkers','showJVSuffix','showSeqFeaturesHeight','showSequenceFeatures','showText','showUnconserved','upperCasebold','scaleProteinAsCdna','proteinFontAsCdna','wrapAlignment','showComplementFeatures','showComplementFeaturesOnTop'],'I',['charHeight','charWidth','idWidth','increment','threshold','thresholdTextColour','fontSize','wrappedWidth','fontStyle'],'S',['fontName'],'O',['textColour','java.awt.Color','+textColour2']]]

Clazz.newMeth(C$, 'c$$jalview_api_ViewStyleI', function (vs) {
;C$.$init$.apply(this);
this.setAbovePIDThreshold$Z(vs.getAbovePIDThreshold$());
this.setCentreColumnLabels$Z(vs.isCentreColumnLabels$());
this.setCharHeight$I(vs.getCharHeight$());
this.setCharWidth$I(vs.getCharWidth$());
this.setColourAppliesToAllGroups$Z(vs.getColourAppliesToAllGroups$());
this.setColourByReferenceSeq$Z(vs.isColourByReferenceSeq$());
this.setColourText$Z(vs.getColourText$());
this.setConservationColourSelected$Z(vs.isConservationColourSelected$());
this.setConservationSelected$Z(vs.getConservationSelected$());
this.setDisplayReferenceSeq$Z(vs.isDisplayReferenceSeq$());
this.setFontName$S(vs.getFontName$());
this.setFontSize$I(vs.getFontSize$());
this.setFontStyle$I(vs.getFontStyle$());
this.setIdWidth$I(vs.getIdWidth$());
this.setIncrement$I(vs.getIncrement$());
this.setRenderGaps$Z(vs.isRenderGaps$());
this.setRightAlignIds$Z(vs.isRightAlignIds$());
this.setScaleAboveWrapped$Z(vs.getScaleAboveWrapped$());
this.setScaleLeftWrapped$Z(vs.getScaleLeftWrapped$());
this.setScaleProteinAsCdna$Z(vs.isScaleProteinAsCdna$());
this.setProteinFontAsCdna$Z(vs.isProteinFontAsCdna$());
this.setScaleRightWrapped$Z(vs.getScaleRightWrapped$());
this.setSeqNameItalics$Z(vs.isSeqNameItalics$());
this.setShowAnnotation$Z(vs.isShowAnnotation$());
this.setShowBoxes$Z(vs.getShowBoxes$());
this.setShowColourText$Z(vs.isShowColourText$());
this.setShowDBRefs$Z(vs.isShowDBRefs$());
this.setShowHiddenMarkers$Z(vs.getShowHiddenMarkers$());
this.setShowJVSuffix$Z(vs.getShowJVSuffix$());
this.setShowNPFeats$Z(vs.isShowNPFeats$());
this.setShowSequenceFeaturesHeight$Z(vs.isShowSequenceFeaturesHeight$());
this.setShowSequenceFeatures$Z(vs.isShowSequenceFeatures$());
this.setShowComplementFeatures$Z(vs.isShowComplementFeatures$());
this.setShowComplementFeaturesOnTop$Z(vs.isShowComplementFeaturesOnTop$());
this.setShowText$Z(vs.getShowText$());
this.setShowUnconserved$Z(vs.getShowUnconserved$());
this.setTextColour$java_awt_Color(vs.getTextColour$());
this.setTextColour2$java_awt_Color(vs.getTextColour2$());
this.setThreshold$I(vs.getThreshold$());
this.setThresholdTextColour$I(vs.getThresholdTextColour$());
this.setUpperCasebold$Z(vs.isUpperCasebold$());
this.setWrapAlignment$Z(vs.getWrapAlignment$());
this.setWrappedWidth$I(vs.getWrappedWidth$());
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (other) {
if (other == null  || !(Clazz.instanceOf(other, "jalview.viewmodel.styles.ViewStyle")) ) {
return false;
}var vs=other;
var match=(this.getAbovePIDThreshold$() == vs.getAbovePIDThreshold$()  && this.isCentreColumnLabels$() == vs.isCentreColumnLabels$()   && this.getCharHeight$() == vs.getCharHeight$()  && this.getCharWidth$() == vs.getCharWidth$()  && this.getColourAppliesToAllGroups$() == vs.getColourAppliesToAllGroups$()   && this.isColourByReferenceSeq$() == vs.isColourByReferenceSeq$()   && this.getColourText$() == vs.getColourText$()   && this.isConservationColourSelected$() == vs.isConservationColourSelected$()   && this.getConservationSelected$() == vs.getConservationSelected$()   && this.isDisplayReferenceSeq$() == vs.isDisplayReferenceSeq$()   && this.getFontSize$() == vs.getFontSize$()  && this.getFontStyle$() == vs.getFontStyle$()  && this.getIdWidth$() == vs.getIdWidth$()  && this.getIncrement$() == vs.getIncrement$()  && this.isRenderGaps$() == vs.isRenderGaps$()   && this.isRightAlignIds$() == vs.isRightAlignIds$()   && this.getScaleAboveWrapped$() == vs.getScaleAboveWrapped$()   && this.getScaleLeftWrapped$() == vs.getScaleLeftWrapped$()   && this.isScaleProteinAsCdna$() == vs.isScaleProteinAsCdna$()   && this.isProteinFontAsCdna$() == vs.isProteinFontAsCdna$()   && this.getScaleRightWrapped$() == vs.getScaleRightWrapped$()   && this.isSeqNameItalics$() == vs.isSeqNameItalics$()   && this.isShowAnnotation$() == vs.isShowAnnotation$()   && this.getShowBoxes$() == vs.getShowBoxes$()   && this.isShowColourText$() == vs.isShowColourText$()   && this.isShowDBRefs$() == vs.isShowDBRefs$()   && this.getShowHiddenMarkers$() == vs.getShowHiddenMarkers$()   && this.getShowJVSuffix$() == vs.getShowJVSuffix$()   && this.isShowNPFeats$() == vs.isShowNPFeats$()   && this.isShowSequenceFeaturesHeight$() == vs.isShowSequenceFeaturesHeight$()   && this.isShowSequenceFeatures$() == vs.isShowSequenceFeatures$()   && this.isShowComplementFeatures$() == vs.isShowComplementFeatures$()   && this.isShowComplementFeaturesOnTop$() == vs.isShowComplementFeaturesOnTop$()   && this.getShowText$() == vs.getShowText$()   && this.getShowUnconserved$() == vs.getShowUnconserved$()   && this.getThreshold$() == vs.getThreshold$()  && this.getThresholdTextColour$() == vs.getThresholdTextColour$()  && this.isUpperCasebold$() == vs.isUpperCasebold$()   && this.getWrapAlignment$() == vs.getWrapAlignment$()   && this.getWrappedWidth$() == vs.getWrappedWidth$() );
match=match && String.valueOf$O(this.getFontName$()).equals$O(String.valueOf$O(vs.getFontName$())) ;
match=match && String.valueOf$O(this.getTextColour$()).equals$O(String.valueOf$O(vs.getTextColour$())) ;
match=match && String.valueOf$O(this.getTextColour2$()).equals$O(String.valueOf$O(vs.getTextColour2$())) ;
return match;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hash=0;
var m=1;
hash+=m++ * $I$(2).valueOf$Z(this.abovePIDThreshold).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.centreColumnLabels).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.colourAppliesToAllGroups).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.displayReferenceSeq).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.renderGaps).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.rightAlignIds).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.scaleProteinAsCdna).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.scaleRightWrapped).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.seqNameItalics).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.showAnnotation).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.showBoxes).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.showdbrefs).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.showJVSuffix).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.showSequenceFeatures).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.showUnconserved).hashCode$();
hash+=m++ * $I$(2).valueOf$Z(this.wrapAlignment).hashCode$();
hash+=m++ * this.charHeight;
hash+=m++ * this.charWidth;
hash+=m++ * this.fontSize;
hash+=m++ * this.fontStyle;
hash+=m++ * this.idWidth;
hash+=String.valueOf$O(this.fontName).hashCode$();
return hash;
});

Clazz.newMeth(C$, 'isUpperCasebold$', function () {
return this.upperCasebold;
});

Clazz.newMeth(C$, 'setUpperCasebold$Z', function (upperCasebold) {
this.upperCasebold=upperCasebold;
});

Clazz.newMeth(C$, 'getAbovePIDThreshold$', function () {
return this.abovePIDThreshold;
});

Clazz.newMeth(C$, 'getCharHeight$', function () {
return this.charHeight;
});

Clazz.newMeth(C$, 'getCharWidth$', function () {
return this.charWidth;
});

Clazz.newMeth(C$, 'getColourAppliesToAllGroups$', function () {
return this.colourAppliesToAllGroups;
});

Clazz.newMeth(C$, 'getColourText$', function () {
return this.showColourText;
});

Clazz.newMeth(C$, 'getConservationSelected$', function () {
return this.conservationColourSelected;
});

Clazz.newMeth(C$, 'getIncrement$', function () {
return this.increment;
});

Clazz.newMeth(C$, 'getScaleAboveWrapped$', function () {
return this.scaleAboveWrapped;
});

Clazz.newMeth(C$, 'getScaleLeftWrapped$', function () {
return this.scaleLeftWrapped;
});

Clazz.newMeth(C$, 'getScaleRightWrapped$', function () {
return this.scaleRightWrapped;
});

Clazz.newMeth(C$, 'getShowBoxes$', function () {
return this.showBoxes;
});

Clazz.newMeth(C$, 'getShowHiddenMarkers$', function () {
return this.showHiddenMarkers;
});

Clazz.newMeth(C$, 'getShowJVSuffix$', function () {
return this.showJVSuffix;
});

Clazz.newMeth(C$, 'getShowText$', function () {
return this.showText;
});

Clazz.newMeth(C$, 'getShowUnconserved$', function () {
return this.showUnconserved;
});

Clazz.newMeth(C$, 'getTextColour$', function () {
return this.textColour;
});

Clazz.newMeth(C$, 'getTextColour2$', function () {
return this.textColour2;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'getThresholdTextColour$', function () {
return this.thresholdTextColour;
});

Clazz.newMeth(C$, 'getWrapAlignment$', function () {
return this.wrapAlignment;
});

Clazz.newMeth(C$, 'getWrappedWidth$', function () {
return this.wrappedWidth;
});

Clazz.newMeth(C$, 'isColourByReferenceSeq$', function () {
return this.colourByReferenceSeq;
});

Clazz.newMeth(C$, 'isConservationColourSelected$', function () {
return this.conservationColourSelected;
});

Clazz.newMeth(C$, 'isDisplayReferenceSeq$', function () {
return this.displayReferenceSeq;
});

Clazz.newMeth(C$, 'isRenderGaps$', function () {
return this.renderGaps;
});

Clazz.newMeth(C$, 'isRightAlignIds$', function () {
return this.rightAlignIds;
});

Clazz.newMeth(C$, 'isSeqNameItalics$', function () {
return this.seqNameItalics;
});

Clazz.newMeth(C$, 'isShowAnnotation$', function () {
return this.showAnnotation;
});

Clazz.newMeth(C$, 'isShowColourText$', function () {
return this.showColourText;
});

Clazz.newMeth(C$, 'isShowSequenceFeaturesHeight$', function () {
return this.showSeqFeaturesHeight;
});

Clazz.newMeth(C$, 'isShowSequenceFeatures$', function () {
return this.showSequenceFeatures;
});

Clazz.newMeth(C$, 'setAbovePIDThreshold$Z', function (b) {
this.abovePIDThreshold=b;
});

Clazz.newMeth(C$, 'setCharHeight$I', function (h) {
this.charHeight=h;
});

Clazz.newMeth(C$, 'setCharWidth$I', function (w) {
this.charWidth=w;
});

Clazz.newMeth(C$, 'setColourAppliesToAllGroups$Z', function (b) {
this.colourAppliesToAllGroups=b;
});

Clazz.newMeth(C$, 'setColourByReferenceSeq$Z', function (colourByReferenceSeq) {
this.colourByReferenceSeq=colourByReferenceSeq;
});

Clazz.newMeth(C$, 'setColourText$Z', function (state) {
this.showColourText=state;
});

Clazz.newMeth(C$, 'setConservationColourSelected$Z', function (conservationColourSelected) {
this.conservationColourSelected=conservationColourSelected;
});

Clazz.newMeth(C$, 'setConservationSelected$Z', function (b) {
this.conservationColourSelected=b;
});

Clazz.newMeth(C$, 'setDisplayReferenceSeq$Z', function (displayReferenceSeq) {
this.displayReferenceSeq=displayReferenceSeq;
});

Clazz.newMeth(C$, 'setIncrement$I', function (inc) {
this.increment=inc;
});

Clazz.newMeth(C$, 'setRenderGaps$Z', function (state) {
this.renderGaps=state;
});

Clazz.newMeth(C$, 'setRightAlignIds$Z', function (rightAlignIds) {
this.rightAlignIds=rightAlignIds;
});

Clazz.newMeth(C$, 'setScaleAboveWrapped$Z', function (b) {
this.scaleAboveWrapped=b;
});

Clazz.newMeth(C$, 'setScaleLeftWrapped$Z', function (b) {
this.scaleLeftWrapped=b;
});

Clazz.newMeth(C$, 'setScaleRightWrapped$Z', function (b) {
this.scaleRightWrapped=b;
});

Clazz.newMeth(C$, 'setSeqNameItalics$Z', function (italics) {
this.seqNameItalics=italics;
});

Clazz.newMeth(C$, 'setShowAnnotation$Z', function (b) {
this.showAnnotation=b;
});

Clazz.newMeth(C$, 'setShowBoxes$Z', function (state) {
this.showBoxes=state;
});

Clazz.newMeth(C$, 'setShowColourText$Z', function (showColourText) {
this.showColourText=showColourText;
});

Clazz.newMeth(C$, 'setShowHiddenMarkers$Z', function (show) {
this.showHiddenMarkers=show;
});

Clazz.newMeth(C$, 'setShowJVSuffix$Z', function (b) {
this.showJVSuffix=b;
});

Clazz.newMeth(C$, 'setShowSequenceFeaturesHeight$Z', function (selected) {
this.showSeqFeaturesHeight=selected;
});

Clazz.newMeth(C$, 'setShowSequenceFeatures$Z', function (b) {
this.showSequenceFeatures=b;
});

Clazz.newMeth(C$, 'setShowText$Z', function (state) {
this.showText=state;
});

Clazz.newMeth(C$, 'setShowUnconserved$Z', function (showunconserved) {
this.showUnconserved=showunconserved;
});

Clazz.newMeth(C$, 'setTextColour$java_awt_Color', function (textColour) {
this.textColour=textColour;
});

Clazz.newMeth(C$, 'setTextColour2$java_awt_Color', function (textColour2) {
this.textColour2=textColour2;
});

Clazz.newMeth(C$, 'setThreshold$I', function (thresh) {
this.threshold=thresh;
});

Clazz.newMeth(C$, 'setThresholdTextColour$I', function (thresholdTextColour) {
this.thresholdTextColour=thresholdTextColour;
});

Clazz.newMeth(C$, 'setWrapAlignment$Z', function (state) {
this.wrapAlignment=state;
});

Clazz.newMeth(C$, 'setWrappedWidth$I', function (w) {
this.wrappedWidth=w;
});

Clazz.newMeth(C$, 'sameStyle$jalview_api_ViewStyleI', function (that) {
return this.equals$O(that);
});

Clazz.newMeth(C$, 'getFontName$', function () {
return this.fontName;
});

Clazz.newMeth(C$, 'getFontSize$', function () {
return this.fontSize;
});

Clazz.newMeth(C$, 'getFontStyle$', function () {
return this.fontStyle;
});

Clazz.newMeth(C$, 'setFontName$S', function (name) {
this.fontName=name;
});

Clazz.newMeth(C$, 'setFontSize$I', function (size) {
this.fontSize=size;
});

Clazz.newMeth(C$, 'setFontStyle$I', function (style) {
this.fontStyle=style;
});

Clazz.newMeth(C$, 'getIdWidth$', function () {
return this.idWidth;
});

Clazz.newMeth(C$, 'setIdWidth$I', function (idWidth) {
this.idWidth=idWidth;
});

Clazz.newMeth(C$, 'isCentreColumnLabels$', function () {
return this.centreColumnLabels;
});

Clazz.newMeth(C$, 'setCentreColumnLabels$Z', function (centreColumnLabels) {
this.centreColumnLabels=centreColumnLabels;
});

Clazz.newMeth(C$, 'isShowDBRefs$', function () {
return this.showdbrefs;
});

Clazz.newMeth(C$, 'setShowDBRefs$Z', function (showdbrefs) {
this.showdbrefs=showdbrefs;
});

Clazz.newMeth(C$, 'isShowNPFeats$', function () {
return this.shownpfeats;
});

Clazz.newMeth(C$, 'setShowNPFeats$Z', function (shownpfeats) {
this.shownpfeats=shownpfeats;
});

Clazz.newMeth(C$, 'isScaleProteinAsCdna$', function () {
return this.scaleProteinAsCdna;
});

Clazz.newMeth(C$, 'setScaleProteinAsCdna$Z', function (b) {
this.scaleProteinAsCdna=b;
});

Clazz.newMeth(C$, 'isProteinFontAsCdna$', function () {
return this.proteinFontAsCdna;
});

Clazz.newMeth(C$, 'setProteinFontAsCdna$Z', function (b) {
this.proteinFontAsCdna=b;
});

Clazz.newMeth(C$, 'setShowComplementFeatures$Z', function (b) {
this.showComplementFeatures=b;
});

Clazz.newMeth(C$, 'isShowComplementFeatures$', function () {
return this.showComplementFeatures;
});

Clazz.newMeth(C$, 'setShowComplementFeaturesOnTop$Z', function (b) {
this.showComplementFeaturesOnTop=b;
});

Clazz.newMeth(C$, 'isShowComplementFeaturesOnTop$', function () {
return this.showComplementFeaturesOnTop;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
