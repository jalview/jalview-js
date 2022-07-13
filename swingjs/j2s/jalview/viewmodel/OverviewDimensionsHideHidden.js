(function(){var P$=Clazz.newPackage("jalview.viewmodel"),I$=[[0,'jalview.datamodel.VisibleColsCollection','jalview.datamodel.VisibleRowsCollection']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OverviewDimensionsHideHidden", null, 'jalview.viewmodel.OverviewDimensions');

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
this.updateViewportFromTopLeft$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(xAsRes, yAsSeq, hiddenSeqs, hiddenCols);
});

Clazz.newMeth(C$, 'adjustViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (mousex, mousey, hiddenSeqs, hiddenCols) {
this.resetAlignmentDims$();
var vpx=Math.round(mousex * this.widthRatio);
var vpy=Math.round(mousey * this.heightRatio);
this.updateViewportFromTopLeft$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(vpx + this.xdiff, vpy + this.ydiff, hiddenSeqs, hiddenCols);
});

Clazz.newMeth(C$, 'updateViewportFromTopLeft$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (leftx, topy, hiddenSeqs, hiddenCols) {
var xAsRes=leftx;
var yAsSeq=topy;
if (xAsRes < 0) {
xAsRes=0;
}if (yAsSeq < 0) {
yAsSeq=0;
}if (this.ranges.isWrappedMode$()) {
yAsSeq=0;
}var vpwidth=this.ranges.getViewportWidth$();
if (xAsRes + vpwidth > this.alwidth) {
if (this.ranges.getStartRes$() < this.alwidth) {
xAsRes=this.alwidth - vpwidth;
} else {
xAsRes=this.ranges.getStartRes$();
}}var vpheight=this.ranges.getViewportHeight$();
if (yAsSeq + vpheight > this.alheight) {
if (this.ranges.getEndSeq$() < this.alheight) {
yAsSeq=this.alheight - vpheight;
} else {
yAsSeq=this.ranges.getStartSeq$();
}}this.ranges.setStartResAndSeq$I$I(xAsRes, yAsSeq);
});

Clazz.newMeth(C$, 'setBoxPosition$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (hiddenSeqs, hiddenCols) {
this.setBoxPosition$I$I$I$I(this.ranges.getStartRes$(), this.ranges.getStartSeq$(), this.ranges.getViewportWidth$(), this.ranges.getViewportHeight$());
});

Clazz.newMeth(C$, 'getColumns$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_([0, this.ranges.getAbsoluteAlignmentWidth$() - 1, al.getHiddenColumns$()],$I$(1,1).c$$I$I$jalview_datamodel_HiddenColumns);
});

Clazz.newMeth(C$, 'getRows$jalview_datamodel_AlignmentI',  function (al) {
return Clazz.new_([0, this.ranges.getAbsoluteAlignmentHeight$() - 1, al],$I$(2,1).c$$I$I$jalview_datamodel_AlignmentI);
});

Clazz.newMeth(C$, 'resetAlignmentDims$',  function () {
this.alwidth=this.ranges.getVisibleAlignmentWidth$();
this.alheight=this.ranges.getVisibleAlignmentHeight$();
this.widthRatio=this.alwidth / this.width;
this.heightRatio=this.alheight / this.sequencesHeight;
});

Clazz.newMeth(C$, 'getLeftXFromCentreX$I$jalview_datamodel_HiddenColumns',  function (mousex, hidden) {
var vpx=Math.round(mousex * this.widthRatio);
return vpx - (this.ranges.getViewportWidth$()/2|0);
});

Clazz.newMeth(C$, 'getTopYFromCentreY$I$jalview_datamodel_HiddenSequences',  function (mousey, hidden) {
var vpy=Math.round(mousey * this.heightRatio);
return vpy - (this.ranges.getViewportHeight$()/2|0);
});

Clazz.newMeth(C$, 'setDragPoint$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns',  function (x, y, hiddenSeqs, hiddenCols) {
this.resetAlignmentDims$();
var vpx=Math.round(x * this.widthRatio);
var vpy=Math.round(y * this.heightRatio);
this.xdiff=this.ranges.getStartRes$() - vpx;
this.ydiff=this.ranges.getStartSeq$() - vpy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
