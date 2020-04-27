(function(){var P$=Clazz.newPackage("jalview.renderer.seqfeatures"),I$=[[0,'java.awt.image.BufferedImage','java.awt.Color']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureColourFinder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['featureRenderer','jalview.api.FeatureRenderer','offscreenImage','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$jalview_api_FeatureRenderer', function (fr) {
;C$.$init$.apply(this);
this.featureRenderer=fr;
this.offscreenImage=Clazz.new_($I$(1,1).c$$I$I$I,[1, 1, 2]);
}, 1);

Clazz.newMeth(C$, 'findFeatureColour$java_awt_Color$jalview_datamodel_SequenceI$I', function (defaultColour, seq, column) {
if (this.noFeaturesDisplayed$()) {
return defaultColour;
}var g=null;
if (this.featureRenderer.getTransparency$() != 1.0 ) {
g=this.offscreenImage.getGraphics$();
if (defaultColour != null ) {
this.offscreenImage.setRGB$I$I$I(0, 0, defaultColour.getRGB$());
}}var c=this.featureRenderer.findFeatureColour$jalview_datamodel_SequenceI$I$java_awt_Graphics(seq, column + 1, g);
if (c == null ) {
return defaultColour;
}if (g != null ) {
c=Clazz.new_([this.offscreenImage.getRGB$I$I(0, 0)],$I$(2,1).c$$I);
}return c;
});

Clazz.newMeth(C$, 'noFeaturesDisplayed$', function () {
if (this.featureRenderer == null ) {
return true;
}var av=this.featureRenderer.getViewport$();
if (av.isShowComplementFeatures$()) {
return false;
}if (!av.isShowSequenceFeatures$()) {
return true;
}if (!(this.featureRenderer).hasRenderOrder$()) {
return true;
}var displayed=this.featureRenderer.getFeaturesDisplayed$();
if (displayed == null  || displayed.getVisibleFeatureCount$() == 0 ) {
return true;
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
