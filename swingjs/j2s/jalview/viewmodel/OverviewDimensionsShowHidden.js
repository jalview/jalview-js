(function(){var P$=Clazz.newPackage("jalview.viewmodel"),I$=[[0,'jalview.datamodel.AllColsCollection','jalview.datamodel.AllRowsCollection']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OverviewDimensionsShowHidden", null, 'jalview.viewmodel.OverviewDimensions');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['xdiff','ydiff'],'O',['ranges','jalview.viewmodel.ViewportRanges']]]

Clazz.newMeth(C$, 'c$$jalview_viewmodel_ViewportRanges$Z',  function (vpranges, showAnnotationPanel) {
;C$.superclazz.c$$jalview_viewmodel_ViewportRanges$Z.apply(this,[vpranges, showAnnotationPanel]);C$.$init$.apply(this);
this.ranges=vpranges;
this.resetAlignmentDims$();
}, 1);

Clazz.newMeth(C$, 'updateViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (mousex, mousey, hiddenSeqs, hiddenCols) {
this.resetAlignmentDims$();
var xAsRes=this.getLeftXFromCentreX$I$jalview_datamodel_HiddenColumns(mousex, hiddenCols);
var yAsSeq=this.getTopYFromCentreY$I$jalview_datamodel_HiddenSequences(mousey, hiddenSeqs);
var visXAsRes=hiddenCols.absoluteToVisibleColumn$I(xAsRes);
yAsSeq=hiddenSeqs.adjustForHiddenSeqs$I(hiddenSeqs.findIndexWithoutHiddenSeqs$I(yAsSeq));
yAsSeq=Math.max(yAsSeq, 0);
var visYAsSeq=hiddenSeqs.findIndexWithoutHiddenSeqs$I(yAsSeq);
visYAsSeq=Math.max(visYAsSeq, 0);
this.updateViewportFromTopLeft$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(visXAsRes, visYAsSeq, hiddenSeqs, hiddenCols);
});

Clazz.newMeth(C$, 'adjustViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (mousex, mousey, hiddenSeqs, hiddenCols) {
this.resetAlignmentDims$();
var vpx=Math.round(mousex * this.alwidth / this.width);
var visXAsRes=hiddenCols.absoluteToVisibleColumn$I(vpx) + this.xdiff;
var vpy=Math.round(mousey * this.heightRatio);
var visYAsRes=hiddenSeqs.findIndexWithoutHiddenSeqs$I(vpy) + this.ydiff;
this.updateViewportFromTopLeft$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(visXAsRes, visYAsRes, hiddenSeqs, hiddenCols);
});

Clazz.newMeth(C$, 'updateViewportFromTopLeft$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (leftx, topy, hiddenSeqs, hiddenCols) {
var visXAsRes=leftx;
var visYAsSeq=topy;
if (visXAsRes < 0) {
visXAsRes=0;
}if (visYAsSeq < 0) {
visYAsSeq=0;
}if (this.ranges.isWrappedMode$()) {
visYAsSeq=0;
}var vpwidth=this.ranges.getViewportWidth$();
var visAlignWidth=hiddenCols.absoluteToVisibleColumn$I(this.alwidth - 1);
if (visXAsRes + vpwidth - 1 > visAlignWidth) {
if (this.ranges.getEndRes$() < visAlignWidth) {
visXAsRes=hiddenCols.absoluteToVisibleColumn$I(hiddenCols.offsetByVisibleColumns$I$I(-(vpwidth - 1), this.alwidth - 1));
} else {
visXAsRes=this.ranges.getStartRes$();
}}var vpheight=this.ranges.getViewportHeight$();
var visAlignHeight=hiddenSeqs.findIndexWithoutHiddenSeqs$I(this.alheight);
if (visYAsSeq + vpheight - 1 > visAlignHeight) {
if (this.ranges.getEndSeq$() < visAlignHeight) {
visYAsSeq=hiddenSeqs.findIndexWithoutHiddenSeqs$I(hiddenSeqs.subtractVisibleRows$I$I(vpheight - 1, this.alheight - 1));
} else {
visYAsSeq=this.ranges.getStartSeq$();
}}this.ranges.setStartResAndSeq$I$I(visXAsRes, visYAsSeq);
});

Clazz.newMeth(C$, 'setBoxPosition$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (hiddenSeqs, hiddenCols) {
var startRes=hiddenCols.visibleToAbsoluteColumn$I(this.ranges.getStartRes$());
var endRes=hiddenCols.visibleToAbsoluteColumn$I(this.ranges.getEndRes$());
var startSeq=hiddenSeqs.adjustForHiddenSeqs$I(this.ranges.getStartSeq$());
var endSeq=hiddenSeqs.adjustForHiddenSeqs$I(this.ranges.getEndSeq$());
this.setBoxPosition$I$I$I$I(startRes, startSeq, endRes - startRes + 1, endSeq - startSeq + 1);
});

Clazz.newMeth(C$, 'getColumns$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_([0, this.ranges.getAbsoluteAlignmentWidth$() - 1, al],$I$(1,1).c$$I$I$jalview_datamodel_AlignmentI);
});

Clazz.newMeth(C$, 'getRows$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_([0, this.ranges.getAbsoluteAlignmentHeight$() - 1, al],$I$(2,1).c$$I$I$jalview_datamodel_AlignmentI);
});

Clazz.newMeth(C$, 'resetAlignmentDims$',  function () {
this.alwidth=this.ranges.getAbsoluteAlignmentWidth$();
this.alheight=this.ranges.getAbsoluteAlignmentHeight$();
this.widthRatio=this.alwidth / this.width;
this.heightRatio=this.alheight / this.sequencesHeight;
});

Clazz.newMeth(C$, 'getLeftXFromCentreX$I$jalview_datamodel_HiddenColumns',  function (mousex, hidden) {
var vpx=Math.round(mousex * this.alwidth / this.width);
return hidden.offsetByVisibleColumns$I$I((-this.ranges.getViewportWidth$()/2|0), vpx);
});

Clazz.newMeth(C$, 'getTopYFromCentreY$I$jalview_datamodel_HiddenSequences',  function (mousey, hidden) {
var vpy=Math.round(mousey * this.heightRatio);
return hidden.subtractVisibleRows$I$I((this.ranges.getViewportHeight$()/2|0), vpy);
});

Clazz.newMeth(C$, 'setDragPoint$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (x, y, hiddenSeqs, hiddenCols) {
this.resetAlignmentDims$();
var vpx=Math.round(x * this.widthRatio);
var vpy=Math.round(y * this.heightRatio);
this.xdiff=this.ranges.getStartRes$() - hiddenCols.absoluteToVisibleColumn$I(vpx);
this.ydiff=this.ranges.getStartSeq$() - hiddenSeqs.findIndexWithoutHiddenSeqs$I(vpy);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
