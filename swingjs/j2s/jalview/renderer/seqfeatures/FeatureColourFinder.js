(function(){var P$=Clazz.newPackage("jalview.renderer.seqfeatures"),I$=[[0,'java.awt.image.BufferedImage','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureColourFinder");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.featureRenderer=null;
this.offscreenImage=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_FeatureRenderer', function (fr) {
C$.$init$.apply(this);
this.featureRenderer=fr;
this.offscreenImage=Clazz.new_($I$(1).c$$I$I$I,[1, 1, 2]);
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
c=Clazz.new_($I$(2).c$$I,[this.offscreenImage.getRGB$I$I(0, 0)]);
}return c;
});

Clazz.newMeth(C$, 'noFeaturesDisplayed$', function () {
if (this.featureRenderer == null  || !this.featureRenderer.getViewport$().isShowSequenceFeatures$() ) {
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
