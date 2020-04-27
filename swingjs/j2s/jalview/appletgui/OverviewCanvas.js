(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Frame','jalview.renderer.seqfeatures.FeatureRenderer','java.awt.Dimension','jalview.renderer.OverviewRenderer','jalview.renderer.OverviewResColourFinder','java.awt.Color']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OverviewCanvas", null, 'java.awt.Label');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.restart=false;
this.updaterunning=false;
this.or=null;
},1);

C$.$fields$=[['Z',['restart','updaterunning'],'O',['od','jalview.viewmodel.OverviewDimensions','or','jalview.renderer.OverviewRenderer','miniMe','java.awt.Image','+offscreen','av','jalview.appletgui.AlignViewport','fr','jalview.renderer.seqfeatures.FeatureRenderer','nullFrame','java.awt.Frame']]]

Clazz.newMeth(C$, 'c$$jalview_viewmodel_OverviewDimensions$jalview_appletgui_AlignViewport', function (overviewDims, alignvp) {
Clazz.super_(C$, this);
this.od=overviewDims;
this.av=alignvp;
this.nullFrame=Clazz.new_($I$(1,1));
this.nullFrame.addNotify$();
this.fr=Clazz.new_($I$(2,1).c$$jalview_api_AlignViewportI,[this.av]);
}, 1);

Clazz.newMeth(C$, 'resetOviewDims$jalview_viewmodel_OverviewDimensions', function (overviewDims) {
this.od=overviewDims;
});

Clazz.newMeth(C$, 'restartDraw$', function () {
{
if (this.updaterunning) {
this.restart=true;
if (this.or != null ) {
this.or.setRedraw$Z(true);
}} else {
this.updaterunning=true;
}return this.restart;
}});

Clazz.newMeth(C$, 'draw$Z$Z$jalview_appletgui_FeatureRenderer', function (showSequenceFeatures, showAnnotation, transferRenderer) {
this.miniMe=null;
if (showSequenceFeatures) {
this.fr.transferSettings$jalview_api_FeatureRenderer(transferRenderer);
}this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.od.getWidth$(), this.od.getHeight$()],$I$(3,1).c$$I$I));
this.or=Clazz.new_([this.fr, this.od, this.av.getAlignment$(), this.av.getResidueShading$(), Clazz.new_($I$(5,1))],$I$(4,1).c$$jalview_renderer_seqfeatures_FeatureRenderer$jalview_viewmodel_OverviewDimensions$jalview_datamodel_AlignmentI$jalview_renderer_ResidueShaderI$jalview_renderer_OverviewResColourFinder);
this.miniMe=this.nullFrame.createImage$I$I(this.od.getWidth$(), this.od.getHeight$());
this.offscreen=this.nullFrame.createImage$I$I(this.od.getWidth$(), this.od.getHeight$());
this.miniMe=this.or.draw$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI(this.od.getRows$jalview_datamodel_AlignmentI(this.av.getAlignment$()), this.od.getColumns$jalview_datamodel_AlignmentI(this.av.getAlignment$()));
var mg=this.miniMe.getGraphics$();
if (showAnnotation) {
mg.translate$I$I(0, this.od.getSequencesHeight$());
this.or.drawGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$I$jalview_api_AlignmentColsCollectionI(mg, this.av.getAlignmentConservationAnnotation$(), this.od.getGraphHeight$(), this.od.getColumns$jalview_datamodel_AlignmentI(this.av.getAlignment$()));
mg.translate$I$I(0, -this.od.getSequencesHeight$());
}if (this.restart) {
this.restart=false;
this.draw$Z$Z$jalview_appletgui_FeatureRenderer(showSequenceFeatures, showAnnotation, transferRenderer);
} else {
this.updaterunning=false;
}});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var og=this.offscreen.getGraphics$();
if (this.miniMe != null ) {
og.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.miniMe, 0, 0, this);
og.setColor$java_awt_Color($I$(6).red);
this.od.drawBox$java_awt_Graphics(og);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offscreen, 0, 0, this);
}});

Clazz.newMeth(C$, 'dispose$', function () {
this.od=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
