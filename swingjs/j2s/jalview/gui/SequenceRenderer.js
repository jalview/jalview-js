(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.renderer.ResidueColourFinder','java.awt.Color','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceRenderer", null, null, 'jalview.api.SequenceRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.fm=null;
this.renderGaps=false;
this.allGroups=null;
this.graphics=null;
this.monospacedFont=false;
this.resColourFinder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.renderGaps=true;
this.allGroups=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI', function (viewport) {
C$.$init$.apply(this);
this.av=viewport;
this.resColourFinder=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'prepare$java_awt_Graphics$Z', function (g, renderGaps) {
this.graphics=g;
this.fm=g.getFontMetrics$();
var dwidth=this.fm.getStringBounds$S$java_awt_Graphics("M", g).getWidth$();
this.monospacedFont=(dwidth == this.fm.getStringBounds$S$java_awt_Graphics("|", g).getWidth$()  && this.av.getCharWidth$() == dwidth  );
this.renderGaps=renderGaps;
});

Clazz.newMeth(C$, ['getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder','getResidueColour$'], function (seq, position, finder) {
this.allGroups=this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(seq);
return this.resColourFinder.getResidueColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(this.av.getShowBoxes$(), this.av.getResidueShading$(), this.allGroups, seq, position, finder);
});

Clazz.newMeth(C$, 'drawSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroupA$I$I$I', function (seq, sg, start, end, y1) {
this.allGroups=sg;
this.drawBoxes$jalview_datamodel_SequenceI$I$I$I(seq, start, end, y1);
if (this.av.isValidCharWidth$()) {
this.drawText$jalview_datamodel_SequenceI$I$I$I(seq, start, end, y1);
}});

Clazz.newMeth(C$, 'drawBoxes$jalview_datamodel_SequenceI$I$I$I', function (seq, start, end, y1) {
var resBoxColour=$I$(2).white;
if (seq == null ) {
return;
}var i=start;
var length=seq.getLength$();
var curStart=-1;
var curWidth=this.av.getCharWidth$();
var avWidth=this.av.getCharWidth$();
var avHeight=this.av.getCharHeight$();
var tempColour=null;
while (i <= end){
resBoxColour=$I$(2).white;
if (i < length) {
var currentSequenceGroup=this.resColourFinder.getCurrentSequenceGroup$jalview_datamodel_SequenceGroupA$I(this.allGroups, i);
if (currentSequenceGroup != null ) {
if (currentSequenceGroup.getDisplayBoxes$()) {
resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(currentSequenceGroup.getGroupColourScheme$(), seq, i);
}} else if (this.av.getShowBoxes$()) {
resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(this.av.getResidueShading$(), seq, i);
}}if (resBoxColour !== tempColour ) {
if (tempColour != null ) {
this.graphics.fillRect$I$I$I$I(avWidth * (curStart - start), y1, curWidth, avHeight);
}this.graphics.setColor$java_awt_Color(resBoxColour);
curStart=i;
curWidth=avWidth;
tempColour=resBoxColour;
} else {
curWidth+=avWidth;
}i++;
}
this.graphics.fillRect$I$I$I$I(avWidth * (curStart - start), y1, curWidth, avHeight);
});

Clazz.newMeth(C$, 'drawText$jalview_datamodel_SequenceI$I$I$I', function (seq, start, end, y1) {
y1+=this.av.getCharHeight$() - (this.av.getCharHeight$()/5|0);
var charOffset=0;
var s;
if (end + 1 >= seq.getLength$()) {
end=seq.getLength$() - 1;
}this.graphics.setColor$java_awt_Color(this.av.getTextColour$());
if (this.monospacedFont && this.av.getShowText$() && this.allGroups.length == 0   && !this.av.getColourText$()  && this.av.getThresholdTextColour$() == 0 ) {
if (this.av.isRenderGaps$()) {
this.graphics.drawString$S$I$I(seq.getSequenceAsString$I$I(start, end + 1), 0, y1);
} else {
var gap=this.av.getGapCharacter$();
this.graphics.drawString$S$I$I(seq.getSequenceAsString$I$I(start, end + 1).replace$C$C(gap, " "), 0, y1);
}} else {
var srep=this.av.isDisplayReferenceSeq$();
var getboxColour=false;
var isarep=this.av.getAlignment$().getSeqrep$() === seq ;
var resBoxColour=$I$(2).white;
for (var i=start; i <= end; i++) {
this.graphics.setColor$java_awt_Color(this.av.getTextColour$());
getboxColour=false;
s=seq.getCharAt$I(i);
if (!this.renderGaps && $I$(3).isGap$C(s) ) {
continue;
}var currentSequenceGroup=this.resColourFinder.getCurrentSequenceGroup$jalview_datamodel_SequenceGroupA$I(this.allGroups, i);
if (currentSequenceGroup != null ) {
if (!currentSequenceGroup.getDisplayText$()) {
continue;
}if (currentSequenceGroup.thresholdTextColour > 0 || currentSequenceGroup.getColourText$() ) {
getboxColour=true;
resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(currentSequenceGroup.getGroupColourScheme$(), seq, i);
if (currentSequenceGroup.getColourText$()) {
this.graphics.setColor$java_awt_Color(resBoxColour.darker$());
}if (currentSequenceGroup.thresholdTextColour > 0) {
if (resBoxColour.getRed$() + resBoxColour.getBlue$() + resBoxColour.getGreen$()  < currentSequenceGroup.thresholdTextColour) {
this.graphics.setColor$java_awt_Color(currentSequenceGroup.textColour2);
}}} else {
this.graphics.setColor$java_awt_Color(currentSequenceGroup.textColour);
}var isgrep=currentSequenceGroup != null  ? currentSequenceGroup.getSeqrep$() === seq  : false;
if (!isarep && !isgrep && currentSequenceGroup.getShowNonconserved$()  ) {
s=p$1.getDisplayChar$Z$I$C$C$jalview_datamodel_SequenceGroup.apply(this, [srep, i, s, ".", currentSequenceGroup]);
}} else {
if (!this.av.getShowText$()) {
continue;
}if (this.av.getColourText$()) {
getboxColour=true;
resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(this.av.getResidueShading$(), seq, i);
if (this.av.getShowBoxes$()) {
this.graphics.setColor$java_awt_Color(resBoxColour.darker$());
} else {
this.graphics.setColor$java_awt_Color(resBoxColour);
}}if (this.av.getThresholdTextColour$() > 0) {
if (!getboxColour) {
resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(this.av.getResidueShading$(), seq, i);
}if (resBoxColour.getRed$() + resBoxColour.getBlue$() + resBoxColour.getGreen$()  < this.av.getThresholdTextColour$()) {
this.graphics.setColor$java_awt_Color(this.av.getTextColour2$());
}}if (!isarep && this.av.getShowUnconserved$() ) {
s=p$1.getDisplayChar$Z$I$C$C$jalview_datamodel_SequenceGroup.apply(this, [srep, i, s, ".", null]);
}}charOffset=((this.av.getCharWidth$() - this.fm.charWidth$C(s))/2|0);
this.graphics.drawString$S$I$I(String.valueOf$C(s), charOffset + this.av.getCharWidth$() * (i - start), y1);
}
}});

Clazz.newMeth(C$, 'getDisplayChar$Z$I$C$C$jalview_datamodel_SequenceGroup', function (usesrep, position, sequenceChar, conservedChar, currentGroup) {
var conschar=(usesrep) ? (currentGroup == null  || position < currentGroup.getStartRes$()  || position > currentGroup.getEndRes$()  ? this.av.getAlignment$().getSeqrep$().getCharAt$I(position) : (currentGroup.getSeqrep$() != null  ? currentGroup.getSeqrep$().getCharAt$I(position) : this.av.getAlignment$().getSeqrep$().getCharAt$I(position))) : (currentGroup != null  && currentGroup.getConsensus$() != null   && position >= currentGroup.getStartRes$()  && position <= currentGroup.getEndRes$()  && currentGroup.getConsensus$().annotations.length > position ) ? currentGroup.getConsensus$().annotations[position].displayCharacter.charAt$I(0) : this.av.getAlignmentConsensusAnnotation$().annotations[position].displayCharacter.charAt$I(0);
if (!$I$(3).isGap$C(conschar) && (sequenceChar == conschar || sequenceChar.$c() + -32 == conschar.$c()  ) ) {
sequenceChar=conservedChar;
}return sequenceChar;
}, p$1);

Clazz.newMeth(C$, 'drawHighlightedText$jalview_datamodel_SequenceI$I$I$I$I', function (seq, start, end, x1, y1) {
var pady=(this.av.getCharHeight$()/5|0);
var charOffset=0;
this.graphics.setColor$java_awt_Color($I$(2).BLACK);
this.graphics.fillRect$I$I$I$I(x1, y1, this.av.getCharWidth$() * (end - start + 1), this.av.getCharHeight$());
this.graphics.setColor$java_awt_Color($I$(2).white);
var s="~";
if (this.av.isValidCharWidth$()) {
for (var i=start; i <= end; i++) {
if (i < seq.getLength$()) {
s=seq.getCharAt$I(i);
}charOffset=((this.av.getCharWidth$() - this.fm.charWidth$C(s))/2|0);
this.graphics.drawString$S$I$I(String.valueOf$C(s), charOffset + x1 + (this.av.getCharWidth$() * (i - start)) , (y1 + this.av.getCharHeight$()) - pady);
}
}});

Clazz.newMeth(C$, 'drawCursor$java_awt_Graphics$C$I$I', function (g, s, x1, y1) {
var pady=(this.av.getCharHeight$()/5|0);
var charOffset=0;
g.setColor$java_awt_Color($I$(2).black);
g.fillRect$I$I$I$I(x1, y1, this.av.getCharWidth$(), this.av.getCharHeight$());
if (this.av.isValidCharWidth$()) {
g.setColor$java_awt_Color($I$(2).white);
charOffset=((this.av.getCharWidth$() - this.fm.charWidth$C(s))/2|0);
g.drawString$S$I$I(String.valueOf$C(s), charOffset + x1, (y1 + this.av.getCharHeight$()) - pady);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
