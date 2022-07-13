(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FeatureRenderer", null, 'jalview.renderer.seqfeatures.FeatureRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ap','jalview.gui.AlignmentPanel']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (alignPanel) {
;C$.superclazz.c$$jalview_api_AlignViewportI.apply(this,[alignPanel.av]);C$.$init$.apply(this);
this.ap=alignPanel;
if (alignPanel.getSeqPanel$() != null  && alignPanel.getSeqPanel$().seqCanvas != null   && alignPanel.getSeqPanel$().seqCanvas.fr != null  ) {
this.transferSettings$jalview_api_FeatureRenderer(alignPanel.getSeqPanel$().seqCanvas.fr);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
