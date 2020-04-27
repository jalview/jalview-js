(function(){var P$=Clazz.newPackage("jalview.renderer"),I$=[[0,'java.awt.Color','jalview.util.Platform','jalview.analysis.Rna','jalview.schemes.NucleotideColourScheme','jalview.schemes.ZappoColourScheme','jalview.renderer.ResidueShader','jalview.analysis.AAFrequency','jalview.analysis.StructureFrequency','java.util.BitSet','java.awt.geom.AffineTransform','java.awt.BasicStroke','jalview.analysis.CodingUtils','jalview.schemes.ResidueProperties']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationRenderer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.USE_FILL_ROUND_RECT=$I$(2).isAMacAndNotJS$();
this.av_renderHistogram=true;
this.av_renderProfile=true;
this.av_normaliseProfile=false;
this.profcolour=null;
this.useClip=true;
this.canClip=false;
},1);

C$.$fields$=[['Z',['debugRedraw','validCharWidth','hasHiddenColumns','USE_FILL_ROUND_RECT','av_renderHistogram','av_renderProfile','av_normaliseProfile','av_ignoreGapsConsensus','useClip','canClip'],'I',['charWidth','endRes','charHeight','imgWidth','sOffset','visHeight'],'O',['fm','java.awt.FontMetrics','profcolour','jalview.renderer.ResidueShaderI','columnSelection','jalview.datamodel.ColumnSelection','hiddenColumns','jalview.datamodel.HiddenColumns','hconsensus','jalview.datamodel.ProfilesI','complementConsensus','java.util.Hashtable[]','+hStrucConsensus','fadedImage','java.awt.Image','annotationPanel','java.awt.image.ImageObserver']]
,['O',['GLYPHLINE_COLOR','java.awt.Color','+SHEET_COLOUR','+HELIX_COLOUR','+STEM_COLOUR']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (debugRedraw) {
;C$.$init$.apply(this);
this.debugRedraw=debugRedraw;
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
this.hconsensus=null;
this.complementConsensus=null;
this.hStrucConsensus=null;
this.fadedImage=null;
this.annotationPanel=null;
});

Clazz.newMeth(C$, 'drawStemAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z', function (g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd) {
g.setColor$java_awt_Color(C$.STEM_COLOUR);
var sCol=((lastSSX/this.charWidth|0)) + this.hiddenColumns.visibleToAbsoluteColumn$I(startRes);
var x1=lastSSX;
var x2=(x * this.charWidth);
var dc=(column == 0 || row_annotations[column - 1] == null  ) ? " " : row_annotations[column - 1].secondaryStructure;
var diffupstream=sCol == 0 || row_annotations[sCol - 1] == null   || dc != row_annotations[sCol - 1].secondaryStructure ;
var diffdownstream=!validRes || !validEnd || row_annotations[column] == null    || dc != row_annotations[column].secondaryStructure ;
if (column > 0 && $I$(3).isClosingParenthesis$C(dc) ) {
if (diffupstream) {
g.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [lastSSX + 5, lastSSX + 5, lastSSX]), Clazz.array(Integer.TYPE, -1, [y + iconOffset, y + 14 + iconOffset , y + 8 + iconOffset ]), 3);
x1+=5;
}if (diffdownstream) {
x2-=1;
}} else {
if (diffdownstream) {
g.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [x2 - 5, x2 - 5, x2]), Clazz.array(Integer.TYPE, -1, [y + iconOffset, y + 14 + iconOffset , y + 8 + iconOffset ]), 3);
x2-=5;
}if (diffupstream) {
x1+=1;
}}g.fillRect$I$I$I$I(x1, y + 4 + iconOffset , x2 - x1, 7);
});

Clazz.newMeth(C$, 'drawNotCanonicalAnnot$java_awt_Graphics$java_awt_Color$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z', function (g, nonCanColor, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd) {
g.setColor$java_awt_Color(nonCanColor);
var sCol=((lastSSX/this.charWidth|0)) + this.hiddenColumns.visibleToAbsoluteColumn$I(startRes);
var x1=lastSSX;
var x2=(x * this.charWidth);
var dc=(column == 0 || row_annotations[column - 1] == null  ) ? "" : row_annotations[column - 1].displayCharacter;
var diffupstream=sCol == 0 || row_annotations[sCol - 1] == null   || !dc.equals$O(row_annotations[sCol - 1].displayCharacter) ;
var diffdownstream=!validRes || !validEnd || row_annotations[column] == null    || !dc.equals$O(row_annotations[column].displayCharacter) ;
if (column > 0 && $I$(3).isClosingParenthesis$S(dc) ) {
if (diffupstream) {
g.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [lastSSX + 5, lastSSX + 5, lastSSX]), Clazz.array(Integer.TYPE, -1, [y + iconOffset, y + 14 + iconOffset , y + 8 + iconOffset ]), 3);
x1+=5;
}if (diffdownstream) {
x2-=1;
}} else {
if (diffdownstream) {
g.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [x2 - 5, x2 - 5, x2]), Clazz.array(Integer.TYPE, -1, [y + iconOffset, y + 14 + iconOffset , y + 8 + iconOffset ]), 3);
x2-=5;
}if (diffupstream) {
x1+=1;
}}g.fillRect$I$I$I$I(x1, y + 4 + iconOffset , x2 - x1, 7);
});

Clazz.newMeth(C$, 'updateFromAwtRenderPanel$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI', function (annotPanel, av) {
this.fm=annotPanel.getFontMetrics$();
this.annotationPanel=annotPanel;
this.fadedImage=annotPanel.getFadedImage$();
this.imgWidth=annotPanel.getFadedImageWidth$();
var bounds=annotPanel.getVisibleVRange$();
if (bounds != null ) {
this.sOffset=bounds[0];
this.visHeight=bounds[1];
if (this.visHeight == 0) {
this.useClip=false;
} else {
this.useClip=this.canClip;
}} else {
this.useClip=false;
}this.updateFromAlignViewport$jalview_api_AlignViewportI(av);
});

Clazz.newMeth(C$, 'updateFromAlignViewport$jalview_api_AlignViewportI', function (av) {
this.charWidth=av.getCharWidth$();
this.endRes=av.getRanges$().getEndRes$();
this.charHeight=av.getCharHeight$();
this.hasHiddenColumns=av.hasHiddenColumns$();
this.validCharWidth=av.isValidCharWidth$();
this.av_renderHistogram=av.isShowConsensusHistogram$();
this.av_renderProfile=av.isShowSequenceLogo$();
this.av_normaliseProfile=av.isNormaliseSequenceLogo$();
this.profcolour=av.getResidueShading$();
if (this.profcolour == null  || this.profcolour.getColourScheme$() == null  ) {
var col=av.getAlignment$().isNucleotide$() ? Clazz.new_($I$(4,1)) : Clazz.new_($I$(5,1));
this.profcolour=Clazz.new_($I$(6,1).c$$jalview_schemes_ColourSchemeI,[col]);
}this.columnSelection=av.getColumnSelection$();
this.hiddenColumns=av.getAlignment$().getHiddenColumns$();
this.hconsensus=av.getSequenceConsensusHash$();
this.complementConsensus=av.getComplementConsensusHash$();
this.hStrucConsensus=av.getRnaStructureConsensusHash$();
this.av_ignoreGapsConsensus=av.isIgnoreGapsConsensus$();
});

Clazz.newMeth(C$, 'getProfileFor$jalview_datamodel_AlignmentAnnotation$I', function (aa, column) {
if (aa.autoCalculated && (aa.label.startsWith$S("Consensus") || aa.label.startsWith$S("cDNA Consensus") ) ) {
var forComplement=aa.label.startsWith$S("cDNA Consensus");
if (aa.groupRef != null  && aa.groupRef.consensusData != null   && aa.groupRef.isShowSequenceLogo$() ) {
return $I$(7,"extractProfile$jalview_datamodel_ProfileI$Z",[aa.groupRef.consensusData.get$I(column), aa.groupRef.getIgnoreGapsConsensus$()]);
}if (aa.groupRef == null  && aa.sequenceRef == null  ) {
if (forComplement) {
return $I$(7).extractCdnaProfile$java_util_Hashtable$Z(this.complementConsensus[column], this.av_ignoreGapsConsensus);
} else {
return $I$(7,"extractProfile$jalview_datamodel_ProfileI$Z",[this.hconsensus.get$I(column), this.av_ignoreGapsConsensus]);
}}} else {
if (aa.autoCalculated && aa.label.startsWith$S("StrucConsensus") ) {
if (aa.groupRef == null  && aa.sequenceRef == null   && this.hStrucConsensus != null   && this.hStrucConsensus.length > column ) {
return $I$(8).extractProfile$java_util_Hashtable$Z(this.hStrucConsensus[column], this.av_ignoreGapsConsensus);
}}}return null;
});

Clazz.newMeth(C$, 'drawComponent$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI$java_awt_Graphics$I$I$I', function (annotPanel, av, g, activeRow, startRes, endRes) {
var stime=System.currentTimeMillis$();
var usedFaded=false;
this.updateFromAwtRenderPanel$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI(annotPanel, av);
this.fm=g.getFontMetrics$();
var aa=av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return false;
}var x=0;
var y=0;
var column=0;
var lastSS;
var lastSSX;
var iconOffset=0;
var validRes=false;
var validEnd=false;
var labelAllCols=false;
var scaleColLabel=false;
var consensusAnnot=av.getAlignmentConsensusAnnotation$();
var structConsensusAnnot=av.getAlignmentStrucConsensusAnnotation$();
var complementConsensusAnnot=av.getComplementConsensusAnnotation$();
var graphGroupDrawn=Clazz.new_($I$(9,1));
var charOffset=0;
var yfrom=0;
var f_i=0;
var yto=0;
var f_to=0;
var clipst=false;
var clipend=false;
for (var i=0; i < aa.length; i++) {
var row=aa[i];
var renderHistogram=true;
var renderProfile=false;
var normaliseProfile=false;
var isRNA=row.isRNA$();
if (row.groupRef != null  && row === row.groupRef.getConsensus$()  ) {
renderHistogram=row.groupRef.isShowConsensusHistogram$();
renderProfile=row.groupRef.isShowSequenceLogo$();
normaliseProfile=row.groupRef.isNormaliseSequenceLogo$();
} else if (row === consensusAnnot  || row === structConsensusAnnot   || row === complementConsensusAnnot  ) {
renderHistogram=this.av_renderHistogram;
renderProfile=this.av_renderProfile;
normaliseProfile=this.av_normaliseProfile;
}var row_annotations=row.annotations;
if (!row.visible) {
continue;
}labelAllCols=row.showAllColLabels;
scaleColLabel=row.scaleColLabel;
lastSS=" ";
lastSSX=0;
if (!this.useClip || ((y - this.charHeight) < this.visHeight && (y + row.height + this.charHeight * 2 ) >= this.sOffset ) ) {
if (!clipst) {
clipst=true;
yfrom=y;
f_i=i;
}yto=y;
f_to=i;
if (row.graph > 0) {
if (row.graphGroup > -1 && graphGroupDrawn.get$I(row.graphGroup) ) {
continue;
}y+=row.height;
if (row.hasText) {
iconOffset=this.charHeight - this.fm.getDescent$();
y-=this.charHeight;
}} else if (row.hasText) {
iconOffset=this.charHeight - this.fm.getDescent$();
} else {
iconOffset=0;
}if (row.autoCalculated && av.isCalculationInProgress$jalview_datamodel_AlignmentAnnotation(row) ) {
y+=this.charHeight;
usedFaded=true;
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(this.fadedImage, 0, y - row.height, this.imgWidth, y, 0, y - row.height, this.imgWidth, y, this.annotationPanel);
g.setColor$java_awt_Color($I$(1).black);
continue;
}x=(startRes == 0) ? 0 : -1;
while (x < endRes - startRes){
if (this.hasHiddenColumns) {
column=this.hiddenColumns.visibleToAbsoluteColumn$I(startRes + x);
if (column > row_annotations.length - 1) {
break;
}} else {
column=startRes + x;
}if ((row_annotations == null ) || (row_annotations.length <= column) || (row_annotations[column] == null )  ) {
validRes=false;
} else {
validRes=true;
}var displayChar=validRes ? row_annotations[column].displayCharacter : null;
if (x > -1) {
if (activeRow == i) {
g.setColor$java_awt_Color($I$(1).red);
if (this.columnSelection != null ) {
if (this.columnSelection.contains$I(column)) {
g.fillRect$I$I$I$I(x * this.charWidth, y, this.charWidth, this.charHeight);
}}}if (row.getInvalidStrucPos$() > x) {
g.setColor$java_awt_Color($I$(1).orange);
g.fillRect$I$I$I$I(x * this.charWidth, y, this.charWidth, this.charHeight);
} else if (row.getInvalidStrucPos$() == x) {
g.setColor$java_awt_Color($I$(1).orange.darker$());
g.fillRect$I$I$I$I(x * this.charWidth, y, this.charWidth, this.charHeight);
}if (this.validCharWidth && validRes && displayChar != null    && (displayChar.length$() > 0) ) {
var gg=(g);
var fmWidth=this.fm.charsWidth$CA$I$I(displayChar.toCharArray$(), 0, displayChar.length$());
var scaledToFit=false;
var fmScaling=1.0;
if (scaleColLabel && fmWidth > this.charWidth  ) {
scaledToFit=true;
fmScaling=this.charWidth;
fmScaling /= fmWidth;
fmWidth=this.charWidth;
}charOffset=(((this.charWidth - fmWidth) / 2.0)|0);
if (row_annotations[column].colour == null ) {
gg.setColor$java_awt_Color($I$(1).black);
} else {
gg.setColor$java_awt_Color(row_annotations[column].colour);
}var xPos=(x * this.charWidth) + charOffset;
var yPos=y + iconOffset;
gg.translate$I$I(xPos, yPos);
if (scaledToFit) {
gg.transform$java_awt_geom_AffineTransform($I$(10).getScaleInstance$D$D(fmScaling, 1.0));
}if (column == 0 || row.graph > 0 ) {
gg.drawString$S$I$I(displayChar, 0, 0);
} else if (row_annotations[column - 1] == null  || (labelAllCols || !displayChar.equals$O(row_annotations[column - 1].displayCharacter) || (displayChar.length$() < 2 && row_annotations[column].secondaryStructure == " " )  ) ) {
gg.drawString$S$I$I(displayChar, 0, 0);
}if (scaledToFit) {
gg.transform$java_awt_geom_AffineTransform($I$(10).getScaleInstance$D$D(1.0 / fmScaling, 1.0));
}gg.translate$I$I(-xPos, -yPos);
}}if (row.hasIcons) {
var ss=validRes ? row_annotations[column].secondaryStructure : "-";
if (ss == "(") {
if (displayChar.indexOf$I(")") > -1) {
ss=")";
}}if (ss == "[") {
if ((displayChar.indexOf$I("]") > -1)) {
ss="]";
}}if (ss == "{") {
if (displayChar.indexOf$I("}") > -1) {
ss="}";
}}if (ss == "<") {
if (displayChar.indexOf$I("<") > -1) {
ss=">";
}}if (isRNA && (ss.$c() >= 65 ) && (ss.$c() <= 90 )  ) {
var ssLowerCase=ss.$c() + 32;
if (displayChar.indexOf$I(ssLowerCase) > -1) {
ss=String.fromCharCode(ssLowerCase);
}}if (!validRes || (ss != lastSS) ) {
if (x > -1) {
switch (lastSS.$c()) {
case 40:
case 41:
this.drawStemAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
case 72:
if (!isRNA) {
this.drawHelixAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
}case 69:
if (!isRNA) {
this.drawSheetAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
}case 123:
case 125:
case 91:
case 93:
case 62:
case 60:
case 65:
case 97:
case 66:
case 98:
case 67:
case 99:
case 68:
case 100:
case 101:
case 70:
case 102:
case 71:
case 103:
case 104:
case 73:
case 105:
case 74:
case 106:
case 75:
case 107:
case 76:
case 108:
case 77:
case 109:
case 78:
case 110:
case 79:
case 111:
case 80:
case 112:
case 81:
case 113:
case 82:
case 114:
case 83:
case 115:
case 84:
case 116:
case 85:
case 117:
case 86:
case 118:
case 87:
case 119:
case 88:
case 120:
case 89:
case 121:
case 90:
case 122:
var nonCanColor=this.getNotCanonicalColor$C(lastSS);
this.drawNotCanonicalAnnot$java_awt_Graphics$java_awt_Color$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, nonCanColor, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
default:
g.setColor$java_awt_Color($I$(1).gray);
g.fillRect$I$I$I$I(lastSSX, y + 6 + iconOffset , (x * this.charWidth) - lastSSX, 2);
break;
}
}if (validRes) {
lastSS=ss;
} else {
lastSS=" ";
}if (x > -1) {
lastSSX=(x * this.charWidth);
}}}column++;
x++;
}
if (column >= row_annotations.length) {
column=row_annotations.length - 1;
validEnd=false;
} else {
validEnd=true;
}if ((row_annotations == null ) || (row_annotations.length <= column) || (row_annotations[column] == null )  ) {
validRes=false;
} else {
validRes=true;
}if (row.hasIcons) {
switch (lastSS.$c()) {
case 72:
if (!isRNA) {
this.drawHelixAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
}case 69:
if (!isRNA) {
this.drawSheetAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
}case 40:
case 41:
this.drawStemAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
case 123:
case 125:
case 91:
case 93:
case 62:
case 60:
case 65:
case 97:
case 66:
case 98:
case 67:
case 99:
case 68:
case 100:
case 101:
case 70:
case 102:
case 71:
case 103:
case 104:
case 73:
case 105:
case 74:
case 106:
case 75:
case 107:
case 76:
case 108:
case 77:
case 109:
case 78:
case 110:
case 79:
case 111:
case 80:
case 112:
case 81:
case 113:
case 82:
case 114:
case 84:
case 116:
case 85:
case 117:
case 86:
case 118:
case 87:
case 119:
case 88:
case 120:
case 89:
case 121:
case 90:
case 122:
var nonCanColor=this.getNotCanonicalColor$C(lastSS);
this.drawNotCanonicalAnnot$java_awt_Graphics$java_awt_Color$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, nonCanColor, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
default:
this.drawGlyphLine$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z(g, row_annotations, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd);
break;
}
}if (row.graph > 0 && row.graphHeight > 0 ) {
if (row.graph == 2) {
if (row.graphGroup > -1 && !graphGroupDrawn.get$I(row.graphGroup) ) {
var groupmax=-999999;
var groupmin=9999999;
for (var gg=0; gg < aa.length; gg++) {
if (aa[gg].graphGroup != row.graphGroup) {
continue;
}if (aa[gg] !== row ) {
aa[gg].visible=false;
}if (aa[gg].graphMax > groupmax ) {
groupmax=aa[gg].graphMax;
}if (aa[gg].graphMin < groupmin ) {
groupmin=aa[gg].graphMin;
}}
for (var gg=0; gg < aa.length; gg++) {
if (aa[gg].graphGroup == row.graphGroup) {
this.drawLineGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA$I$I$I$F$F$I(g, aa[gg], aa[gg].annotations, startRes, endRes, y, groupmin, groupmax, row.graphHeight);
}}
graphGroupDrawn.set$I(row.graphGroup);
} else {
this.drawLineGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA$I$I$I$F$F$I(g, row, row_annotations, startRes, endRes, y, row.graphMin, row.graphMax, row.graphHeight);
}} else if (row.graph == 1) {
this.drawBarGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA$I$I$F$F$I$Z$Z$Z(g, row, row_annotations, startRes, endRes, row.graphMin, row.graphMax, y, renderHistogram, renderProfile, normaliseProfile);
}}} else {
if (clipst && !clipend ) {
clipend=true;
}}if (row.graph > 0 && row.hasText ) {
y+=this.charHeight;
}if (row.graph == 0) {
y+=aa[i].height;
}}
if (this.debugRedraw) {
if (this.canClip) {
if (clipst) {
System.err.println$S("Start clip at : " + yfrom + " (index " + f_i + ")" );
}if (clipend) {
System.err.println$S("End clip at : " + yto + " (index " + f_to + ")" );
}};System.err.println$S("Annotation Rendering time:" + (System.currentTimeMillis$() - stime));
};return !usedFaded;
});

Clazz.newMeth(C$, 'drawGlyphLine$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z', function (g, row, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd) {
g.setColor$java_awt_Color(C$.GLYPHLINE_COLOR);
g.fillRect$I$I$I$I(lastSSX, y + 6 + iconOffset , (x * this.charWidth) - lastSSX, 2);
});

Clazz.newMeth(C$, 'drawSheetAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z', function (g, row, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd) {
g.setColor$java_awt_Color(C$.SHEET_COLOUR);
if (!validEnd || !validRes || row == null    || row[column] == null   || row[column].secondaryStructure != "E" ) {
g.fillRect$I$I$I$I(lastSSX, y + 4 + iconOffset , (x * this.charWidth) - lastSSX - 4 , 7);
g.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [(x * this.charWidth) - 4, (x * this.charWidth) - 4, (x * this.charWidth)]), Clazz.array(Integer.TYPE, -1, [y + iconOffset, y + 14 + iconOffset , y + 7 + iconOffset ]), 3);
} else {
g.fillRect$I$I$I$I(lastSSX, y + 4 + iconOffset , (x + 1) * this.charWidth - lastSSX, 7);
}});

Clazz.newMeth(C$, 'drawHelixAnnot$java_awt_Graphics$jalview_datamodel_AnnotationA$I$I$I$I$I$I$Z$Z', function (g, row, lastSSX, x, y, iconOffset, startRes, column, validRes, validEnd) {
g.setColor$java_awt_Color(C$.HELIX_COLOUR);
var sCol=((lastSSX/this.charWidth|0)) + this.hiddenColumns.visibleToAbsoluteColumn$I(startRes);
var x1=lastSSX;
var x2=(x * this.charWidth);
if (this.USE_FILL_ROUND_RECT) {
var ofs=(this.charWidth/2|0);
g.fillRoundRect$I$I$I$I$I$I(lastSSX, y + 4 + iconOffset , x2 - x1, 8, 8, 8);
if (sCol == 0 || row[sCol - 1] == null   || row[sCol - 1].secondaryStructure != "H" ) {
} else {
g.fillRoundRect$I$I$I$I$I$I(lastSSX, y + 4 + iconOffset , x2 - x1 - ofs  + 1, 8, 0, 0);
}if (!validRes || row[column] == null   || row[column].secondaryStructure != "H" ) {
} else {
g.fillRoundRect$I$I$I$I$I$I(lastSSX + ofs, y + 4 + iconOffset , x2 - x1 - ofs  + 1, 8, 0, 0);
}return;
}if (sCol == 0 || row[sCol - 1] == null   || row[sCol - 1].secondaryStructure != "H" ) {
g.fillArc$I$I$I$I$I$I(lastSSX, y + 4 + iconOffset , this.charWidth, 8, 90, 180);
x1+=(this.charWidth/2|0);
}if (!validRes || row[column] == null   || row[column].secondaryStructure != "H" ) {
g.fillArc$I$I$I$I$I$I((x * this.charWidth) - this.charWidth, y + 4 + iconOffset , this.charWidth, 8, 270, 180);
x2-=(this.charWidth/2|0);
}g.fillRect$I$I$I$I(x1, y + 4 + iconOffset , x2 - x1, 8);
});

Clazz.newMeth(C$, 'drawLineGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA$I$I$I$F$F$I', function (g, _aa, aa_annotations, sRes, eRes, y, min, max, graphHeight) {
if (sRes > aa_annotations.length) {
return;
}var x=0;
if (eRes < this.endRes) {
eRes++;
}eRes=Math.min(eRes, aa_annotations.length);
if (sRes == 0) {
x++;
}var y1=y;
var y2=y;
var range=max - min;
if (min < 0 ) {
y2=y - (((0 - min / range) * graphHeight)|0);
}g.setColor$java_awt_Color($I$(1).gray);
g.drawLine$I$I$I$I(x - this.charWidth, y2, (eRes - sRes + 1) * this.charWidth, y2);
eRes=Math.min(eRes, aa_annotations.length);
var column;
var aaMax=aa_annotations.length - 1;
while (x < eRes - sRes){
column=sRes + x;
if (this.hasHiddenColumns) {
column=this.hiddenColumns.visibleToAbsoluteColumn$I(column);
}if (column > aaMax) {
break;
}if (aa_annotations[column] == null  || aa_annotations[column - 1] == null  ) {
x++;
continue;
}if (aa_annotations[column].colour == null ) {
g.setColor$java_awt_Color($I$(1).black);
} else {
g.setColor$java_awt_Color(aa_annotations[column].colour);
}y1=y - ((((aa_annotations[column - 1].value - min) / range) * graphHeight)|0);
y2=y - ((((aa_annotations[column].value - min) / range) * graphHeight)|0);
g.drawLine$I$I$I$I(x * this.charWidth - (this.charWidth/2|0), y1, x * this.charWidth + (this.charWidth/2|0), y2);
x++;
}
if (_aa.threshold != null ) {
g.setColor$java_awt_Color(_aa.threshold.colour);
var g2=g;
g2.setStroke$java_awt_Stroke(Clazz.new_([1, 2, 1, 3.0, Clazz.array(Float.TYPE, -1, [5.0, 3.0]), 0.0],$I$(11,1).c$$F$I$I$F$FA$F));
y2=((y - ((_aa.threshold.value - min) / range) * graphHeight)|0);
g.drawLine$I$I$I$I(0, y2, (eRes - sRes) * this.charWidth, y2);
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(11,1)));
}});

Clazz.newMeth(C$, 'drawBarGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA$I$I$F$F$I$Z$Z$Z', function (g, _aa, aa_annotations, sRes, eRes, min, max, y, renderHistogram, renderProfile, normaliseProfile) {
if (sRes > aa_annotations.length) {
return;
}var ofont=g.getFont$();
eRes=Math.min(eRes, aa_annotations.length);
var x=0;
var y1=y;
var y2=y;
var range=max - min;
if (min < 0 ) {
y2=y - (((0 - min / (range)) * _aa.graphHeight)|0);
}g.setColor$java_awt_Color($I$(1).gray);
g.drawLine$I$I$I$I(x, y2, (eRes - sRes) * this.charWidth, y2);
var column;
var aaMax=aa_annotations.length - 1;
while (x < eRes - sRes){
column=sRes + x;
if (this.hasHiddenColumns) {
column=this.hiddenColumns.visibleToAbsoluteColumn$I(column);
}if (column > aaMax) {
break;
}if (aa_annotations[column] == null ) {
x++;
continue;
}if (aa_annotations[column].colour == null ) {
g.setColor$java_awt_Color($I$(1).black);
} else {
g.setColor$java_awt_Color(aa_annotations[column].colour);
}y1=y - ((((aa_annotations[column].value - min) / (range)) * _aa.graphHeight)|0);
if (renderHistogram) {
if (y1 - y2 > 0) {
g.fillRect$I$I$I$I(x * this.charWidth, y2, this.charWidth, y1 - y2);
} else {
g.fillRect$I$I$I$I(x * this.charWidth, y1, this.charWidth, y2 - y1);
}}if (renderProfile) {
var profl=this.getProfileFor$jalview_datamodel_AlignmentAnnotation$I(_aa, column);
if (profl != null  && profl[2] != 0 ) {
var isStructureProfile=profl[0] == 1;
var isCdnaProfile=profl[0] == 2;
var ht=normaliseProfile ? y - _aa.graphHeight : y1;
var normaliseFactor=normaliseProfile ? _aa.graphHeight : (y2 - y1);
var dc=Clazz.array(Character.TYPE, [isStructureProfile ? 2 : (isCdnaProfile ? 3 : 1)]);
var asc=this.fm.getAscent$();
var dec=this.fm.getDescent$();
var fht=this.fm.getHeight$();
var scale=1.0 / (normaliseProfile ? profl[2] : 100.0);
var ht2=ht;
for (var i=0, c=3, last=profl[1]; i < last; i++) {
var s;
if (isStructureProfile) {
dc[0]=String.fromCharCode(profl[c++]);
dc[1]=String.fromCharCode(profl[c++]);
s= String.instantialize(dc);
} else if (isCdnaProfile) {
$I$(12).decodeCodon2$I$CA(profl[c++], dc);
s= String.instantialize(dc);
} else {
dc[0]=String.fromCharCode(profl[c++]);
s= String.instantialize(dc);
}var percent=profl[c++];
if (percent == 0) {
continue;
}var newHeight=normaliseFactor * scale * percent ;
var colour=null;
if (isCdnaProfile) {
var codonTranslation=$I$(13).codonTranslate$S(s);
colour=this.profcolour.findColour$C$I$jalview_datamodel_SequenceI(codonTranslation.charAt$I(0), column, null);
} else {
colour=this.profcolour.findColour$C$I$jalview_datamodel_SequenceI(dc[0], column, null);
}g.setColor$java_awt_Color(colour === $I$(1).white  ? $I$(1).lightGray : colour);
var sx=1.0 * this.charWidth / this.fm.charsWidth$CA$I$I(dc, 0, dc.length);
var sy=newHeight / asc;
var newAsc=asc * sy;
var newDec=dec * sy;
if ($I$(2).isJS$()) {
var hght=((ht2 + (newAsc - newDec))|0);
var gg=g;
var xShift=(Math.round(x * this.charWidth / sx)|0);
var yShift=(Math.round(hght / sy)|0);
gg.transform$java_awt_geom_AffineTransform($I$(10).getScaleInstance$D$D(sx, sy));
gg.drawString$S$I$I(s, xShift, yShift);
gg.transform$java_awt_geom_AffineTransform($I$(10).getScaleInstance$D$D(1.0 / sx, 1.0 / sy));
ht2 += newHeight;
} else 
{}
}
}}x++;
}
if (_aa.threshold != null ) {
g.setColor$java_awt_Color(_aa.threshold.colour);
var g2=g;
g2.setStroke$java_awt_Stroke(Clazz.new_([1, 2, 1, 3.0, Clazz.array(Float.TYPE, -1, [5.0, 3.0]), 0.0],$I$(11,1).c$$F$I$I$F$FA$F));
y2=((y - ((_aa.threshold.value - min) / range) * _aa.graphHeight)|0);
g.drawLine$I$I$I$I(0, y2, (eRes - sRes) * this.charWidth, y2);
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(11,1)));
}});

Clazz.newMeth(C$, 'drawGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA$I$I$I$I', function (g, _aa, aa_annotations, width, y, sRes, eRes) {
eRes=Math.min(eRes, aa_annotations.length);
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, width, y);
g.setColor$java_awt_Color(Clazz.new_($I$(1,1).c$$I$I$I,[0, 0, 180]));
var x=0;
var height;
for (var j=sRes; j < eRes; j++) {
if (aa_annotations[j] != null ) {
if (aa_annotations[j].colour == null ) {
g.setColor$java_awt_Color($I$(1).black);
} else {
g.setColor$java_awt_Color(aa_annotations[j].colour);
}height=(((aa_annotations[j].value / _aa.graphMax) * y)|0);
if (height > y) {
height=y;
}g.fillRect$I$I$I$I(x, y - height, this.charWidth, height);
}x+=this.charWidth;
}
});

Clazz.newMeth(C$, 'getNotCanonicalColor$C', function (lastss) {
switch (lastss.$c()) {
case 123:
case 125:
return Clazz.new_($I$(1,1).c$$I$I$I,[255, 125, 5]);
case 91:
case 93:
return Clazz.new_($I$(1,1).c$$I$I$I,[245, 115, 10]);
case 62:
case 60:
return Clazz.new_($I$(1,1).c$$I$I$I,[235, 135, 15]);
case 65:
case 97:
return Clazz.new_($I$(1,1).c$$I$I$I,[225, 105, 20]);
case 66:
case 98:
return Clazz.new_($I$(1,1).c$$I$I$I,[215, 145, 30]);
case 67:
case 99:
return Clazz.new_($I$(1,1).c$$I$I$I,[205, 95, 35]);
case 68:
case 100:
return Clazz.new_($I$(1,1).c$$I$I$I,[195, 155, 45]);
case 69:
case 101:
return Clazz.new_($I$(1,1).c$$I$I$I,[185, 85, 55]);
case 70:
case 102:
return Clazz.new_($I$(1,1).c$$I$I$I,[175, 165, 65]);
case 71:
case 103:
return Clazz.new_($I$(1,1).c$$I$I$I,[170, 75, 75]);
case 72:
case 104:
return Clazz.new_($I$(1,1).c$$I$I$I,[160, 175, 85]);
case 73:
case 105:
return Clazz.new_($I$(1,1).c$$I$I$I,[150, 65, 95]);
case 74:
case 106:
return Clazz.new_($I$(1,1).c$$I$I$I,[140, 185, 105]);
case 75:
case 107:
return Clazz.new_($I$(1,1).c$$I$I$I,[130, 55, 110]);
case 76:
case 108:
return Clazz.new_($I$(1,1).c$$I$I$I,[120, 195, 120]);
case 77:
case 109:
return Clazz.new_($I$(1,1).c$$I$I$I,[110, 45, 130]);
case 78:
case 110:
return Clazz.new_($I$(1,1).c$$I$I$I,[100, 205, 140]);
case 79:
case 111:
return Clazz.new_($I$(1,1).c$$I$I$I,[90, 35, 150]);
case 80:
case 112:
return Clazz.new_($I$(1,1).c$$I$I$I,[85, 215, 160]);
case 81:
case 113:
return Clazz.new_($I$(1,1).c$$I$I$I,[75, 25, 170]);
case 82:
case 114:
return Clazz.new_($I$(1,1).c$$I$I$I,[65, 225, 180]);
case 83:
case 115:
return Clazz.new_($I$(1,1).c$$I$I$I,[55, 15, 185]);
case 84:
case 116:
return Clazz.new_($I$(1,1).c$$I$I$I,[45, 235, 195]);
case 85:
case 117:
return Clazz.new_($I$(1,1).c$$I$I$I,[35, 5, 205]);
case 86:
case 118:
return Clazz.new_($I$(1,1).c$$I$I$I,[25, 245, 215]);
case 87:
case 119:
return Clazz.new_($I$(1,1).c$$I$I$I,[15, 0, 225]);
case 88:
case 120:
return Clazz.new_($I$(1,1).c$$I$I$I,[10, 255, 235]);
case 89:
case 121:
return Clazz.new_($I$(1,1).c$$I$I$I,[5, 150, 245]);
case 90:
case 122:
return Clazz.new_($I$(1,1).c$$I$I$I,[0, 80, 255]);
default:
System.out.println$S("This is not a interaction : " + lastss);
return null;
}
});

C$.$static$=function(){C$.$static$=0;
C$.GLYPHLINE_COLOR=$I$(1).gray;
C$.SHEET_COLOUR=$I$(1).green;
C$.HELIX_COLOUR=$I$(1).red;
C$.STEM_COLOUR=$I$(1).blue;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
