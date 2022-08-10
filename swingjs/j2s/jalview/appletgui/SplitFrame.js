(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'jalview.structure.StructureSelectionManager','java.awt.Panel','java.awt.GridLayout','java.awt.Dimension','java.awt.BorderLayout','jalview.bin.JalviewLite']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SplitFrame", null, 'jalview.appletgui.EmbmenuFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['topFrame','jalview.appletgui.AlignFrame','+bottomFrame','outermost','java.awt.Panel']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignFrame$jalview_appletgui_AlignFrame',  function (af1, af2) {
Clazz.super_(C$, this);
var af1IsNucleotide=af1.viewport.getAlignment$().isNucleotide$();
this.topFrame=af1IsNucleotide ? af1 : af2;
this.bottomFrame=this.topFrame === af1  ? af2 : af1;
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.constructSplit$();
var topViewport=this.topFrame.viewport;
var bottomViewport=this.bottomFrame.viewport;
var topAlignment=topViewport.getAlignment$();
var bottomAlignment=bottomViewport.getAlignment$();
var cdna=topAlignment.isNucleotide$() ? topViewport : (bottomAlignment.isNucleotide$() ? bottomViewport : null);
var protein=!topAlignment.isNucleotide$() ? topViewport : (!bottomAlignment.isNucleotide$() ? bottomViewport : null);
var ssm=$I$(1).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(topViewport.applet);
ssm.registerMappings$java_util_List(protein.getAlignment$().getCodonFrames$());
topViewport.setCodingComplement$jalview_api_AlignViewportI(bottomViewport);
ssm.addCommandListener$jalview_structure_CommandListener(cdna);
ssm.addCommandListener$jalview_structure_CommandListener(protein);
protein.initComplementConsensus$();
var ap=topAlignment.isNucleotide$() ? this.bottomFrame.alignPanel : this.topFrame.alignPanel;
protein.updateConsensus$jalview_api_AlignmentViewPanel(ap);
this.adjustLayout$();
});

Clazz.newMeth(C$, 'constructSplit$',  function () {
this.setMenuBar$java_awt_MenuBar(null);
this.outermost=Clazz.new_([Clazz.new_($I$(3,1).c$$I$I,[2, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var topPanel=Clazz.new_($I$(2,1));
var bottomPanel=Clazz.new_($I$(2,1));
this.outermost.add$java_awt_Component(topPanel);
this.outermost.add$java_awt_Component(bottomPanel);
p$1.addAlignFrameComponents$jalview_appletgui_AlignFrame$java_awt_Panel.apply(this, [this.topFrame, topPanel]);
p$1.addAlignFrameComponents$jalview_appletgui_AlignFrame$java_awt_Panel.apply(this, [this.bottomFrame, bottomPanel]);
});

Clazz.newMeth(C$, 'adjustLayout$',  function () {
var cdna=this.topFrame.getAlignViewport$().getAlignment$().isNucleotide$() ? this.topFrame.viewport : this.bottomFrame.viewport;
var protein=cdna === this.topFrame.viewport  ? this.bottomFrame.viewport : this.topFrame.viewport;
var w1=this.topFrame.alignPanel.idPanel.idCanvas.getWidth$();
var w2=this.bottomFrame.alignPanel.idPanel.idCanvas.getWidth$();
var w3=Math.max(w1, w2);
if (w1 != w3) {
var d=this.topFrame.alignPanel.idPanel.idCanvas.getSize$();
this.topFrame.alignPanel.idPanel.idCanvas.setSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[w3, d.height]));
}if (w2 != w3) {
var d=this.bottomFrame.alignPanel.idPanel.idCanvas.getSize$();
this.bottomFrame.alignPanel.idPanel.idCanvas.setSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[w3, d.height]));
}if (protein != null  && cdna != null  ) {
var vs=protein.getViewStyle$();
var scale=vs.isScaleProteinAsCdna$() ? 3 : 1;
vs.setCharWidth$I(scale * cdna.getViewStyle$().getCharWidth$());
protein.setViewStyle$jalview_api_ViewStyleI(vs);
}});

Clazz.newMeth(C$, 'addAlignFrameComponents$jalview_appletgui_AlignFrame$java_awt_Panel',  function (af, panel) {
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
var menuPanel=af.makeEmbeddedPopupMenu$java_awt_MenuBar$Z$Z(af.getMenuBar$(), true, false);
panel.add$java_awt_Component$O(menuPanel, "North");
panel.add$java_awt_Component$O(af.statusBar, "South");
panel.add$java_awt_Component$O(af.alignPanel, "Center");
af.setSplitFrame$jalview_appletgui_SplitFrame(this);
}, p$1);

Clazz.newMeth(C$, 'addToDisplay$Z$jalview_bin_JalviewLite',  function (embedded, applet) {
this.createSplitFrameWindow$Z$jalview_bin_JalviewLite(embedded, applet);
this.validate$();
this.topFrame.alignPanel.adjustAnnotationHeight$();
this.topFrame.alignPanel.paintAlignment$Z$Z(true, true);
this.bottomFrame.alignPanel.adjustAnnotationHeight$();
this.bottomFrame.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'createSplitFrameWindow$Z$jalview_bin_JalviewLite',  function (embed, applet) {
if (embed) {
applet.add$java_awt_Component(this.outermost);
applet.validate$();
} else {
this.add$java_awt_Component(this.outermost);
var width=Math.max(this.topFrame.frameWidth, this.bottomFrame.frameWidth);
var height=this.topFrame.frameHeight + this.bottomFrame.frameHeight;
$I$(6,"addFrame$java_awt_Frame$S$I$I",[this, this.getTitle$(), width, height]);
}});

Clazz.newMeth(C$, 'getComplement$jalview_appletgui_AlignFrame',  function (af) {
if (this.topFrame === af ) {
return this.bottomFrame;
} else if (this.bottomFrame === af ) {
return this.topFrame;
}return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
