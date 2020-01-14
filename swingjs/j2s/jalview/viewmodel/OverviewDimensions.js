(function(){var P$=Clazz.newPackage("jalview.viewmodel"),I$=[];
var C$=Clazz.newClass(P$, "OverviewDimensions");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.width=0;
this.sequencesHeight=0;
this.graphHeight=0;
this.boxX=0;
this.boxY=0;
this.boxWidth=0;
this.boxHeight=0;
this.alwidth=0;
this.alheight=0;
this.widthRatio=0;
this.heightRatio=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.graphHeight=20;
this.boxX=-1;
this.boxY=-1;
this.boxWidth=-1;
this.boxHeight=-1;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_ViewportRanges$Z', function (ranges, showAnnotationPanel) {
C$.$init$.apply(this);
var initialScale=ranges.getAbsoluteAlignmentWidth$() / ranges.getAbsoluteAlignmentHeight$();
if (!showAnnotationPanel) {
this.graphHeight=0;
}if (ranges.getAbsoluteAlignmentWidth$() > ranges.getAbsoluteAlignmentHeight$()) {
this.width=400;
this.sequencesHeight=Math.round(400 / initialScale);
if (this.sequencesHeight < 40) {
this.sequencesHeight=40;
}} else {
this.width=Math.round(400 * initialScale);
this.sequencesHeight=300;
if (this.width < 120) {
this.width=120;
}}}, 1);

Clazz.newMeth(C$, 'drawBox$java_awt_Graphics', function (g) {
g.drawRect$I$I$I$I(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
g.drawRect$I$I$I$I(this.boxX + 1, this.boxY + 1, this.boxWidth - 2, this.boxHeight - 2);
});

Clazz.newMeth(C$, 'getBoxX$', function () {
return this.boxX;
});

Clazz.newMeth(C$, 'getBoxY$', function () {
return this.boxY;
});

Clazz.newMeth(C$, 'getBoxWidth$', function () {
return this.boxWidth;
});

Clazz.newMeth(C$, 'getBoxHeight$', function () {
return this.boxHeight;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.sequencesHeight + this.graphHeight;
});

Clazz.newMeth(C$, 'getSequencesHeight$', function () {
return this.sequencesHeight;
});

Clazz.newMeth(C$, 'getGraphHeight$', function () {
return this.graphHeight;
});

Clazz.newMeth(C$, 'getPixelsPerCol$', function () {
this.resetAlignmentDims$();
return 1 / this.widthRatio;
});

Clazz.newMeth(C$, 'getPixelsPerSeq$', function () {
this.resetAlignmentDims$();
return 1 / this.heightRatio;
});

Clazz.newMeth(C$, 'setWidth$I', function (w) {
this.width=w;
this.widthRatio=this.alwidth / this.width;
});

Clazz.newMeth(C$, 'setHeight$I', function (h) {
this.sequencesHeight=h - this.graphHeight;
this.heightRatio=this.alheight / this.sequencesHeight;
});

Clazz.newMeth(C$, 'setBoxPosition$I$I$I$I', function (startRes, startSeq, vpwidth, vpheight) {
this.resetAlignmentDims$();
var xPos=Math.min(startRes, this.alwidth - vpwidth + 1);
this.boxX=Math.round(xPos / this.widthRatio);
this.boxY=Math.round(startSeq / this.heightRatio);
this.boxWidth=Math.round(vpwidth / this.widthRatio);
this.boxHeight=Math.round(vpheight / this.heightRatio);
});

Clazz.newMeth(C$, 'isPositionInBox$I$I', function (x, y) {
return (x > this.boxX && y > this.boxY  && x < this.boxX + this.boxWidth  && y < this.boxY + this.boxHeight );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
