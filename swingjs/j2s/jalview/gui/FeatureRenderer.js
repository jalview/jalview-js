(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[];
var C$=Clazz.newClass(P$, "FeatureRenderer", null, 'jalview.renderer.seqfeatures.FeatureRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.resBoxColour=null;
this.ap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (alignPanel) {
C$.superclazz.c$$jalview_api_AlignViewportI.apply(this, [alignPanel.av]);
C$.$init$.apply(this);
this.ap=alignPanel;
if (alignPanel.getSeqPanel$() != null  && alignPanel.getSeqPanel$().seqCanvas != null   && alignPanel.getSeqPanel$().seqCanvas.fr != null  ) {
this.transferSettings$jalview_api_FeatureRenderer(alignPanel.getSeqPanel$().seqCanvas.fr);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
