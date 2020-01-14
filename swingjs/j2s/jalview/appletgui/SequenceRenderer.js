(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'jalview.renderer.ResidueColourFinder','java.awt.Color','java.awt.Font','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceRenderer", null, null, 'jalview.api.SequenceRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.fm=null;
this.renderGaps=false;
this.allGroups=null;
this.resBoxColour=null;
this.graphics=null;
this.resColourFinder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.renderGaps=true;
this.allGroups=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport', function (av) {
C$.$init$.apply(this);
this.av=av;
this.resColourFinder=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'prepare$java_awt_Graphics$Z', function (g, renderGaps) {
this.graphics=g;
this.fm=g.getFontMetrics$();
this.renderGaps=renderGaps;
});

Clazz.newMeth(C$, ['getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder','getResidueColour$'], function (seq, position, finder) {
return this.resColourFinder.getResidueColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(this.av.getShowBoxes$(), this.av.getResidueShading$(), this.allGroups, seq, position, finder);
});

Clazz.newMeth(C$, 'findSequenceColour$jalview_datamodel_SequenceI$I', function (seq, i) {
this.allGroups=this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(seq);
this.drawBoxes$jalview_datamodel_SequenceI$I$I$I(seq, i, i, 0);
return this.resBoxColour;
});

Clazz.newMeth(C$, 'drawSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroupA$I$I$I', function (seq, sg, start, end, y1) {
if (seq == null ) {
return;
}this.allGroups=sg;
this.drawBoxes$jalview_datamodel_SequenceI$I$I$I(seq, start, end, y1);
if (this.av.validCharWidth) {
this.drawText$jalview_datamodel_SequenceI$I$I$I(seq, start, end, y1);
}});

Clazz.newMeth(C$, 'drawBoxes$jalview_datamodel_SequenceI$I$I$I', function (seq, start, end, y1) {
var i=start;
var length=seq.getLength$();
var curStart=-1;
var curWidth=this.av.getCharWidth$();
var avCharWidth=this.av.getCharWidth$();
var avCharHeight=this.av.getCharHeight$();
var resBoxColour=$I$(2).white;
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
this.graphics.fillRect$I$I$I$I(avCharWidth * (curStart - start), y1, curWidth, avCharHeight);
}this.graphics.setColor$java_awt_Color(resBoxColour);
curStart=i;
curWidth=avCharWidth;
tempColour=resBoxColour;
} else {
curWidth+=avCharWidth;
}i++;
}
this.graphics.fillRect$I$I$I$I(avCharWidth * (curStart - start), y1, curWidth, avCharHeight);
});

Clazz.newMeth(C$, 'drawText$jalview_datamodel_SequenceI$I$I$I', function (seq, start, end, y1) {
var avCharWidth=this.av.getCharWidth$();
var avCharHeight=this.av.getCharHeight$();
var boldFont=null;
var bold=false;
if (this.av.isUpperCasebold$()) {
boldFont=Clazz.new_($I$(3).c$$S$I$I,[this.av.getFont$().getName$(), 1, avCharHeight]);
this.graphics.setFont$java_awt_Font(this.av.getFont$());
}y1+=avCharHeight - (avCharHeight/5|0);
var charOffset=0;
if (end + 1 >= seq.getLength$()) {
end=seq.getLength$() - 1;
}var s=" ";
var srep=this.av.isDisplayReferenceSeq$();
for (var i=start; i <= end; i++) {
this.graphics.setColor$java_awt_Color($I$(2).black);
s=seq.getCharAt$I(i);
if (!this.renderGaps && $I$(4).isGap$C(s) ) {
continue;
}var currentSequenceGroup=this.resColourFinder.getCurrentSequenceGroup$jalview_datamodel_SequenceGroupA$I(this.allGroups, i);
if (currentSequenceGroup != null ) {
if (!currentSequenceGroup.getDisplayText$()) {
continue;
}if (currentSequenceGroup.getColourText$()) {
this.resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(currentSequenceGroup.getGroupColourScheme$(), seq, i);
this.graphics.setColor$java_awt_Color(this.resBoxColour.darker$());
}if (currentSequenceGroup.getShowNonconserved$()) {
s=p$1.getDisplayChar$Z$I$C$C$jalview_datamodel_SequenceGroup.apply(this, [srep, i, s, ".", currentSequenceGroup]);
}} else {
if (!this.av.getShowText$()) {
continue;
}if (this.av.getColourText$()) {
this.resBoxColour=this.resColourFinder.getBoxColour$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceI$I(this.av.getResidueShading$(), seq, i);
if (this.av.getShowBoxes$()) {
this.graphics.setColor$java_awt_Color(this.resBoxColour.darker$());
} else {
this.graphics.setColor$java_awt_Color(this.resBoxColour);
}}if (this.av.getShowUnconserved$()) {
s=p$1.getDisplayChar$Z$I$C$C$jalview_datamodel_SequenceGroup.apply(this, [srep, i, s, ".", null]);
}}if (this.av.isUpperCasebold$()) {
this.fm=this.graphics.getFontMetrics$();
if ("A" <= s && s <= "Z" ) {
if (!bold) {
this.graphics.setFont$java_awt_Font(boldFont);
}bold=true;
} else if (bold) {
this.graphics.setFont$java_awt_Font(this.av.font);
bold=false;
}}charOffset=((avCharWidth - this.fm.charWidth$C(s))/2|0);
this.graphics.drawString$S$I$I(String.valueOf$C(s), charOffset + avCharWidth * (i - start), y1);
}
});

Clazz.newMeth(C$, 'getDisplayChar$Z$I$C$C$jalview_datamodel_SequenceGroup', function (usesrep, position, sequenceChar, conservedChar, currentGroup) {
var conschar=(usesrep) ? (currentGroup == null  || position < currentGroup.getStartRes$()  || position > currentGroup.getEndRes$()  ? this.av.getAlignment$().getSeqrep$().getCharAt$I(position) : (currentGroup.getSeqrep$() != null  ? currentGroup.getSeqrep$().getCharAt$I(position) : this.av.getAlignment$().getSeqrep$().getCharAt$I(position))) : (currentGroup != null  && currentGroup.getConsensus$() != null   && position >= currentGroup.getStartRes$()  && position <= currentGroup.getEndRes$()  && currentGroup.getConsensus$().annotations.length > position ) ? currentGroup.getConsensus$().annotations[position].displayCharacter.charAt$I(0) : this.av.getAlignmentConsensusAnnotation$().annotations[position].displayCharacter.charAt$I(0);
if (!$I$(4).isGap$C(conschar) && (sequenceChar == conschar || sequenceChar.$c() + -32 == conschar.$c()  ) ) {
sequenceChar=conservedChar;
}return sequenceChar;
}, p$1);

Clazz.newMeth(C$, 'drawHighlightedText$jalview_datamodel_SequenceI$I$I$I$I', function (seq, start, end, x1, y1) {
var avCharWidth=this.av.getCharWidth$();
var avCharHeight=this.av.getCharHeight$();
var pady=(avCharHeight/5|0);
var charOffset=0;
this.graphics.setColor$java_awt_Color($I$(2).black);
this.graphics.fillRect$I$I$I$I(x1, y1, avCharWidth * (end - start + 1), avCharHeight);
this.graphics.setColor$java_awt_Color($I$(2).white);
var s="~";
if (this.av.validCharWidth) {
for (var i=start; i <= end; i++) {
if (i < seq.getLength$()) {
s=seq.getCharAt$I(i);
}charOffset=((avCharWidth - this.fm.charWidth$C(s))/2|0);
this.graphics.drawString$S$I$I(String.valueOf$C(s), charOffset + x1 + avCharWidth * (i - start) , y1 + avCharHeight - pady);
}
}});

Clazz.newMeth(C$, 'drawCursor$jalview_datamodel_SequenceI$I$I$I', function (seq, res, x1, y1) {
var pady=(this.av.getCharHeight$()/5|0);
var charOffset=0;
this.graphics.setColor$java_awt_Color($I$(2).black);
this.graphics.fillRect$I$I$I$I(x1, y1, this.av.getCharWidth$(), this.av.getCharHeight$());
this.graphics.setColor$java_awt_Color($I$(2).white);
this.graphics.setColor$java_awt_Color($I$(2).white);
var s=seq.getCharAt$I(res);
if (this.av.validCharWidth) {
charOffset=((this.av.getCharWidth$() - this.fm.charWidth$C(s))/2|0);
this.graphics.drawString$S$I$I(String.valueOf$C(s), charOffset + x1, (y1 + this.av.getCharHeight$()) - pady);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
