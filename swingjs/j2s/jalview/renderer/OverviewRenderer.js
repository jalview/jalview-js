(function(){var P$=Clazz.newPackage("jalview.renderer"),p$1={},I$=[[0,'java.beans.PropertyChangeSupport','jalview.renderer.seqfeatures.FeatureColourFinder','java.awt.image.BufferedImage','java.awt.Color','java.awt.AlphaComposite']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OverviewRenderer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.TRANSPARENCY=0;
this.changeSupport=null;
this.finder=null;
this.miniMe=null;
this.pixelsPerCol=0;
this.pixelsPerSeq=0;
this.graphHeight=0;
this.redraw=false;
this.al=null;
this.shader=null;
this.resColFinder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.TRANSPARENCY=0.5;
this.changeSupport=Clazz.new_($I$(1).c$$O,[this]);
this.redraw=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_renderer_seqfeatures_FeatureRenderer$jalview_viewmodel_OverviewDimensions$jalview_datamodel_AlignmentI$jalview_renderer_ResidueShaderI$jalview_renderer_OverviewResColourFinder', function (fr, od, alignment, resshader, colFinder) {
C$.$init$.apply(this);
this.finder=Clazz.new_($I$(2).c$$jalview_api_FeatureRenderer,[fr]);
this.resColFinder=colFinder;
this.al=alignment;
this.shader=resshader;
this.pixelsPerCol=od.getPixelsPerCol$();
this.pixelsPerSeq=od.getPixelsPerSeq$();
this.graphHeight=od.getGraphHeight$();
this.miniMe=Clazz.new_($I$(3).c$$I$I$I,[od.getWidth$(), od.getHeight$(), 1]);
}, 1);

Clazz.newMeth(C$, 'draw$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI', function (rows, cols) {
var rgbcolor=$I$(4).white.getRGB$();
var seqIndex=0;
var pixelRow=0;
var alignmentHeight=this.miniMe.getHeight$() - this.graphHeight;
var totalPixels=this.miniMe.getWidth$() * alignmentHeight;
var lastRowUpdate=0;
var lastUpdate=0;
this.changeSupport.firePropertyChange$S$I$I("OverviewUpdate", -1, 0);
for (var alignmentRow, $alignmentRow = rows.iterator$(); $alignmentRow.hasNext$()&&((alignmentRow=($alignmentRow.next$()).intValue$()),1);) {
if (this.redraw) {
break;
}var seq=rows.getSequence$I(alignmentRow);
var allGroups=this.al.findAllGroups$jalview_datamodel_SequenceI(seq);
var endRow=Math.min(Math.round((seqIndex + 1) * this.pixelsPerSeq) - 1, this.miniMe.getHeight$() - 1);
var colIndex=0;
var pixelCol=0;
for (var alignmentCol, $alignmentCol = cols.iterator$(); $alignmentCol.hasNext$()&&((alignmentCol=($alignmentCol.next$()).intValue$()),1);) {
if (this.redraw) {
break;
}var endCol=Math.min(Math.round((colIndex + 1) * this.pixelsPerCol) - 1, this.miniMe.getWidth$() - 1);
if (pixelCol <= endCol) {
rgbcolor=this.getColumnColourFromSequence$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I(allGroups, seq, alignmentCol);
for (var row=pixelRow; row <= endRow; ++row) {
for (var col=pixelCol; col <= endCol; ++col) {
this.miniMe.setRGB$I$I$I(col, row, rgbcolor);
}
}
lastUpdate=p$1.sendProgressUpdate$I$I$I$I.apply(this, [(pixelCol + 1) * (endRow - pixelRow), totalPixels, lastRowUpdate, lastUpdate]);
pixelCol=endCol + 1;
}colIndex++;
}
if (pixelRow != endRow + 1) {
lastRowUpdate=p$1.sendProgressUpdate$I$I$I$I.apply(this, [endRow + 1, alignmentHeight, 0, lastUpdate]);
lastUpdate=lastRowUpdate;
pixelRow=endRow + 1;
}seqIndex++;
}
p$1.overlayHiddenRegions$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI.apply(this, [rows, cols]);
if (this.redraw) {
p$1.sendProgressUpdate$I$I$I$I.apply(this, [pixelRow - 1, alignmentHeight, 0, 0]);
} else {
p$1.sendProgressUpdate$I$I$I$I.apply(this, [alignmentHeight, this.miniMe.getHeight$(), 0, 0]);
}return this.miniMe;
});

Clazz.newMeth(C$, 'sendProgressUpdate$I$I$I$I', function (position, maximum, rowOffset, lastUpdate) {
var newUpdate=rowOffset + Math.round(100 * (position / maximum));
if (newUpdate > lastUpdate) {
this.changeSupport.firePropertyChange$S$I$I("OverviewUpdate", rowOffset, newUpdate);
return newUpdate;
}return newUpdate;
}, p$1);

Clazz.newMeth(C$, 'getColumnColourFromSequence$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I', function (allGroups, seq, lastcol) {
var color=this.resColFinder.GAP_COLOUR;
if ((seq != null ) && (seq.getLength$() > lastcol) ) {
color=this.resColFinder.getResidueColour$Z$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroupA$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(true, this.shader, allGroups, seq, lastcol, this.finder);
}return color.getRGB$();
});

Clazz.newMeth(C$, 'overlayHiddenRegions$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI', function (rows, cols) {
if (cols.hasHidden$() || rows.hasHidden$() ) {
var mask=p$1.buildHiddenImage$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI$I$I.apply(this, [rows, cols, this.miniMe.getWidth$(), this.miniMe.getHeight$()]);
var g=this.miniMe.getGraphics$();
g.setComposite$java_awt_Composite($I$(5).getInstance$I$F(3, 0.5));
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(mask, 0, 0, this.miniMe.getWidth$(), this.miniMe.getHeight$(), null);
}}, p$1);

Clazz.newMeth(C$, 'buildHiddenImage$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI$I$I', function (rows, cols, width, height) {
var hiddenImage=Clazz.new_($I$(3).c$$I$I$I,[width, height, 2]);
var colIndex=0;
var pixelCol=0;
var hidden=this.resColFinder.getHiddenColour$();
var g2d=hiddenImage.getGraphics$();
g2d.setComposite$java_awt_Composite($I$(5).Src);
for (var alignmentCol, $alignmentCol = cols.iterator$(); $alignmentCol.hasNext$()&&((alignmentCol=($alignmentCol.next$()).intValue$()),1);) {
if (this.redraw) {
break;
}var endCol=Math.min(Math.round((colIndex + 1) * this.pixelsPerCol) - 1, hiddenImage.getWidth$() - 1);
if (pixelCol <= endCol) {
if (cols.isHidden$I(alignmentCol)) {
g2d.setColor$java_awt_Color(hidden);
g2d.fillRect$I$I$I$I(pixelCol, 0, endCol - pixelCol + 1, height);
}pixelCol=endCol + 1;
}colIndex++;
}
var seqIndex=0;
var pixelRow=0;
for (var alignmentRow, $alignmentRow = rows.iterator$(); $alignmentRow.hasNext$()&&((alignmentRow=($alignmentRow.next$()).intValue$()),1);) {
if (this.redraw) {
break;
}var endRow=Math.min(Math.round((seqIndex + 1) * this.pixelsPerSeq) - 1, this.miniMe.getHeight$() - 1);
if (rows.isHidden$I(alignmentRow)) {
g2d.setColor$java_awt_Color(hidden);
g2d.fillRect$I$I$I$I(0, pixelRow, width, endRow - pixelRow + 1);
}pixelRow=endRow + 1;
seqIndex++;
}
return hiddenImage;
}, p$1);

Clazz.newMeth(C$, 'drawGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$I$jalview_api_AlignmentColsCollectionI', function (g, anno, y, cols) {
var annotations=anno.annotations;
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(0, 0, this.miniMe.getWidth$(), y);
var height;
var colIndex=0;
var pixelCol=0;
for (var alignmentCol, $alignmentCol = cols.iterator$(); $alignmentCol.hasNext$()&&((alignmentCol=($alignmentCol.next$()).intValue$()),1);) {
if (this.redraw) {
this.changeSupport.firePropertyChange$S$I$I("OverviewUpdate", 99, 0);
break;
}if (alignmentCol >= annotations.length) {
break;
} else {
var endCol=Math.min(Math.round((colIndex + 1) * this.pixelsPerCol) - 1, this.miniMe.getWidth$() - 1);
if (annotations[alignmentCol] != null ) {
if (annotations[alignmentCol].colour == null ) {
g.setColor$java_awt_Color($I$(4).black);
} else {
g.setColor$java_awt_Color(annotations[alignmentCol].colour);
}height=(((annotations[alignmentCol].value / anno.graphMax) * y)|0);
if (height > y) {
height=y;
}g.fillRect$I$I$I$I(pixelCol, y - height, endCol - pixelCol + 1, height);
}pixelCol=endCol + 1;
colIndex++;
}}
this.changeSupport.firePropertyChange$S$I$I("OverviewUpdate", 99, 100);
});

Clazz.newMeth(C$, 'setRedraw$Z', function (b) {
{
this.redraw=b;
}});

Clazz.newMeth(C$, 'addPropertyChangeListener$jalview_api_RendererListenerI', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$jalview_api_RendererListenerI', function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
