(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Color','jalview.gui.SequenceRenderer','jalview.renderer.seqfeatures.FeatureRenderer','jalview.bin.Cache','jalview.renderer.OverviewResColourFinder','java.awt.Dimension','jalview.renderer.OverviewRenderer','java.awt.image.BufferedImage']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OverviewCanvas", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.restart=false;
this.updaterunning=false;
this.dispose=false;
this.lastMiniMe=null;
this.or=null;
},1);

C$.$fields$=[['Z',['restart','updaterunning','dispose'],'O',['miniMe','java.awt.image.BufferedImage','+lastMiniMe','sr','jalview.gui.SequenceRenderer','fr','jalview.renderer.seqfeatures.FeatureRenderer','od','jalview.viewmodel.OverviewDimensions','or','jalview.renderer.OverviewRenderer','av','jalview.api.AlignViewportI','cf','jalview.renderer.OverviewResColourFinder','progressPanel','jalview.gui.ProgressPanel']]
,['O',['TRANS_GREY','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$jalview_viewmodel_OverviewDimensions$jalview_api_AlignViewportI$jalview_gui_ProgressPanel', function (overviewDims, alignvp, pp) {
Clazz.super_(C$, this);
this.od=overviewDims;
this.av=alignvp;
this.progressPanel=pp;
this.sr=Clazz.new_($I$(2,1).c$$jalview_api_AlignViewportI,[this.av]);
this.sr.renderGaps=false;
this.fr=Clazz.new_($I$(3,1).c$$jalview_api_AlignViewportI,[this.av]);
var useLegacy=$I$(4).getDefault$S$Z("USE_LEGACY_GAP", false);
var gapCol=$I$(4,"getDefaultColour$S$java_awt_Color",["GAP_COLOUR", $I$(5).OVERVIEW_DEFAULT_GAP]);
var hiddenCol=$I$(4,"getDefaultColour$S$java_awt_Color",["HIDDEN_COLOUR", $I$(5).OVERVIEW_DEFAULT_HIDDEN]);
this.cf=Clazz.new_($I$(5,1).c$$Z$java_awt_Color$java_awt_Color,[useLegacy, gapCol, hiddenCol]);
this.setSize$I$I(this.od.getWidth$(), this.od.getHeight$());
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

Clazz.newMeth(C$, 'draw$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (showSequenceFeatures, showAnnotation, transferRenderer) {
this.miniMe=null;
if (showSequenceFeatures) {
this.fr.transferSettings$jalview_api_FeatureRenderer(transferRenderer);
}this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.od.getWidth$(), this.od.getHeight$()],$I$(6,1).c$$I$I));
this.or=Clazz.new_([this.fr, this.od, this.av.getAlignment$(), this.av.getResidueShading$(), this.cf],$I$(7,1).c$$jalview_renderer_seqfeatures_FeatureRenderer$jalview_viewmodel_OverviewDimensions$jalview_datamodel_AlignmentI$jalview_renderer_ResidueShaderI$jalview_renderer_OverviewResColourFinder);
this.or.addPropertyChangeListener$jalview_api_RendererListenerI(this.progressPanel);
this.miniMe=this.or.draw$jalview_api_AlignmentRowsCollectionI$jalview_api_AlignmentColsCollectionI(this.od.getRows$jalview_datamodel_AlignmentI(this.av.getAlignment$()), this.od.getColumns$jalview_datamodel_AlignmentI(this.av.getAlignment$()));
var mg=this.miniMe.getGraphics$();
if (showAnnotation) {
mg.translate$I$I(0, this.od.getSequencesHeight$());
this.or.drawGraph$java_awt_Graphics$jalview_datamodel_AlignmentAnnotation$I$jalview_api_AlignmentColsCollectionI(mg, this.av.getAlignmentConservationAnnotation$(), this.od.getGraphHeight$(), this.od.getColumns$jalview_datamodel_AlignmentI(this.av.getAlignment$()));
mg.translate$I$I(0, -this.od.getSequencesHeight$());
}this.or.removePropertyChangeListener$jalview_api_RendererListenerI(this.progressPanel);
this.or=null;
if (this.restart) {
this.restart=false;
if (!this.dispose) {
this.draw$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel(showSequenceFeatures, showAnnotation, transferRenderer);
}} else {
this.updaterunning=false;
this.lastMiniMe=this.miniMe;
}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
if (this.restart) {
if (this.lastMiniMe == null ) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
} else {
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(this.lastMiniMe, 0, 0, this.getWidth$(), this.getHeight$(), this);
}g.setColor$java_awt_Color(C$.TRANS_GREY);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
} else if (this.lastMiniMe != null ) {
if ((this.getWidth$() > 0) && (this.getHeight$() > 0) && ((this.getWidth$() != this.od.getWidth$()) || (this.getHeight$() != this.od.getHeight$()) )  ) {
if (this.od.getGraphHeight$() > 0 && this.od.getSequencesHeight$() > 0 ) {
var topImage=this.lastMiniMe.getSubimage$I$I$I$I(0, 0, this.od.getWidth$(), this.od.getSequencesHeight$());
var bottomImage=this.lastMiniMe.getSubimage$I$I$I$I(0, this.od.getSequencesHeight$(), this.od.getWidth$(), this.od.getGraphHeight$());
this.od.setWidth$I(this.getWidth$());
this.od.setHeight$I(this.getHeight$());
this.lastMiniMe=Clazz.new_([this.od.getWidth$(), this.od.getHeight$(), 1],$I$(8,1).c$$I$I$I);
var lg=this.lastMiniMe.getGraphics$();
lg.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(topImage, 0, 0, this.od.getWidth$(), this.od.getSequencesHeight$(), null);
lg.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(bottomImage, 0, this.od.getSequencesHeight$(), this.od.getWidth$(), this.od.getGraphHeight$(), this);
lg.dispose$();
} else {
this.od.setWidth$I(this.getWidth$());
this.od.setHeight$I(this.getHeight$());
}this.od.setBoxPosition$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
}g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(this.lastMiniMe, 0, 0, this.getWidth$(), this.getHeight$(), this);
} else {
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(this.lastMiniMe, 0, 0, this.getWidth$(), this.getHeight$(), this);
}g.setColor$java_awt_Color($I$(1).red);
this.od.drawBox$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'dispose$', function () {
this.dispose=true;
this.od=null;
{
this.restart=true;
if (this.or != null ) {
this.or.setRedraw$Z(true);
}}});

C$.$static$=function(){C$.$static$=0;
C$.TRANS_GREY=Clazz.new_($I$(1,1).c$$I$I$I$I,[100, 100, 100, 25]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
