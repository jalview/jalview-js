(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.util.MessageManager','jalview.util.Platform','jalview.gui.Desktop','jalview.structure.StructureSelectionManager','javax.swing.event.InternalFrameAdapter','java.awt.event.KeyAdapter','javax.swing.KeyStroke','jalview.util.ShortcutKeyMaskExWrapper','javax.swing.AbstractAction','java.util.Arrays','jalview.gui.AlignFrame','jalview.gui.Finder','javax.swing.JTabbedPane','javax.swing.JInternalFrame','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JButton','java.awt.Dimension','javax.swing.JLayeredPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SplitFrame", null, 'jalview.jbgui.GSplitFrame', 'jalview.api.SplitContainerI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabName=Clazz.array(String, -1, [$I$(1).getString$S("label.CDS"), $I$(1).getString$S("label.protein")]);
},1);

C$.$fields$=[['O',['featureSettingsUI','javax.swing.JInternalFrame','featureSettingsPanels','javax.swing.JTabbedPane','tabName','String[]']]]

Clazz.newMeth(C$, 'c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame', function (top, bottom) {
;C$.superclazz.c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame.apply(this,[top, bottom]);C$.$init$.apply(this);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
this.getTopFrame$().setSplitFrame$jalview_api_SplitContainerI(this);
this.getBottomFrame$().setSplitFrame$jalview_api_SplitContainerI(this);
this.getTopFrame$().setVisible$Z(true);
this.getBottomFrame$().setVisible$Z(true);
(this.getTopFrame$()).getViewport$().setCodingComplement$jalview_api_AlignViewportI((this.getBottomFrame$()).getViewport$());
var widthFudge=$I$(2).isAMacAndNotJS$() ? 28 : 28;
var heightFudge=$I$(2).isAMacAndNotJS$() ? 50 : 50;
var width=(this.getTopFrame$()).getWidth$() + widthFudge;
var height=(this.getTopFrame$()).getHeight$() + (this.getBottomFrame$()).getHeight$() + 5 + heightFudge ;
height=this.fitHeightToDesktop$I(height);
this.setSize$I$I(width, height);
this.adjustLayout$();
this.addCloseFrameListener$();
this.addKeyListener$();
p$1.addKeyBindings.apply(this, []);
this.addCommandListeners$();
});

Clazz.newMeth(C$, 'fitHeightToDesktop$I', function (height) {
var newHeight=Math.min(height, $I$(3).instance.getHeight$() - 65);
if (newHeight != height) {
var oldDividerLocation=this.getDividerLocation$();
this.setDividerLocation$I((oldDividerLocation * newHeight/height|0));
}return newHeight;
});

Clazz.newMeth(C$, 'addCommandListeners$', function () {
var ssm=$I$(4,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(3).instance]);
ssm.addCommandListener$jalview_structure_CommandListener((this.getTopFrame$()).getViewport$());
ssm.addCommandListener$jalview_structure_CommandListener((this.getBottomFrame$()).getViewport$());
});

Clazz.newMeth(C$, 'adjustLayout$', function () {
var topViewport=(this.getTopFrame$()).viewport;
var bottomViewport=(this.getBottomFrame$()).viewport;
var w1=topViewport.getIdWidth$();
var w2=bottomViewport.getIdWidth$();
var w3=Math.max(w1, w2);
topViewport.setIdWidth$I(w3);
bottomViewport.setIdWidth$I(w3);
var topAlignment=topViewport.getAlignment$();
var bottomAlignment=bottomViewport.getAlignment$();
var cdna=topAlignment.isNucleotide$() ? topViewport : (bottomAlignment.isNucleotide$() ? bottomViewport : null);
var protein=!topAlignment.isNucleotide$() ? topViewport : (!bottomAlignment.isNucleotide$() ? bottomViewport : null);
if (protein != null  && cdna != null  ) {
var scale=protein.isScaleProteinAsCdna$() ? 3 : 1;
protein.setCharWidth$I(scale * cdna.getViewStyle$().getCharWidth$());
}});

Clazz.newMeth(C$, 'adjustInitialLayout$', function () {
var topFrame=this.getTopFrame$();
var bottomFrame=this.getBottomFrame$();
topFrame.alignPanel.adjustAnnotationHeight$();
bottomFrame.alignPanel.adjustAnnotationHeight$();
var topViewport=topFrame.viewport;
var bottomViewport=bottomFrame.viewport;
var topAlignment=topViewport.getAlignment$();
var bottomAlignment=bottomViewport.getAlignment$();
var topAnnotations=topViewport.isShowAnnotation$();
var bottomAnnotations=bottomViewport.isShowAnnotation$();
var topCount=topAlignment.getHeight$();
var bottomCount=bottomAlignment.getHeight$();
var topCharHeight=topViewport.getViewStyle$().getCharHeight$();
var bottomCharHeight=bottomViewport.getViewStyle$().getCharHeight$();
var topPanelHeight=topFrame.getHeight$();
var bottomPanelHeight=bottomFrame.getHeight$();
var topSequencesHeight=topFrame.alignPanel.getSeqPanel$().seqCanvas.getHeight$();
var topPanelMinHeight=topPanelHeight - Math.max(0, topSequencesHeight - 3 * topCharHeight);
var totalHeight=topPanelHeight + bottomPanelHeight;
var minRatio=topPanelMinHeight / totalHeight;
var bottomSequencesHeight=bottomFrame.alignPanel.getSeqPanel$().seqCanvas.getHeight$();
var bottomPanelMinHeight=bottomPanelHeight - Math.max(0, bottomSequencesHeight - 3 * bottomCharHeight);
var maxRatio=(totalHeight - bottomPanelMinHeight) / totalHeight;
var insets=$I$(2).isAMacAndNotJS$() ? 50 : 50;
var topHeight=insets + (3 + topCount) * topCharHeight + (topAnnotations ? topViewport.calcPanelHeight$() : 0);
var bottomHeight=insets + (3 + bottomCount) * bottomCharHeight + (bottomAnnotations ? bottomViewport.calcPanelHeight$() : 0);
var ratio=(topHeight) / (topHeight + bottomHeight);
ratio=Math.min(ratio, maxRatio);
ratio=Math.max(ratio, minRatio);
this.setRelativeDividerLocation$D(ratio);
});

Clazz.newMeth(C$, 'addCloseFrameListener$', function () {
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.SplitFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
this.b$['jalview.gui.SplitFrame'].close$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.SplitFrame$1)));
});

Clazz.newMeth(C$, 'addKeyListener$', function () {
this.addKeyListener$java_awt_event_KeyListener(((P$.SplitFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
var af=this.b$['jalview.jbgui.GSplitFrame'].getFrameAtMouse$.apply(this.b$['jalview.jbgui.GSplitFrame'], []);
if (!this.b$['jalview.gui.SplitFrame'].overrideKey$java_awt_event_KeyEvent$jalview_gui_AlignFrame.apply(this.b$['jalview.gui.SplitFrame'], [e, af])) {
if (af != null ) {
for (var kl, $kl = 0, $$kl = af.getKeyListeners$(); $kl<$$kl.length&&((kl=($$kl[$kl])),1);$kl++) {
kl.keyPressed$java_awt_event_KeyEvent(e);
}
}}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
var c=this.b$['jalview.jbgui.GSplitFrame'].getFrameAtMouse$.apply(this.b$['jalview.jbgui.GSplitFrame'], []);
if (c != null ) {
for (var kl, $kl = 0, $$kl = c.getKeyListeners$(); $kl<$$kl.length&&((kl=($$kl[$kl])),1);$kl++) {
kl.keyReleased$java_awt_event_KeyEvent(e);
}
}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.SplitFrame$2)));
});

Clazz.newMeth(C$, 'overrideKey$java_awt_event_KeyEvent$jalview_gui_AlignFrame', function (e, af) {
var actioned=false;
var keyCode=e.getKeyCode$();
switch (keyCode) {
case 40:
if (e.isAltDown$() || !af.viewport.cursorMode ) {
(this.getTopFrame$()).moveSelectedSequences$Z(false);
(this.getBottomFrame$()).moveSelectedSequences$Z(false);
actioned=true;
e.consume$();
}break;
case 38:
if (e.isAltDown$() || !af.viewport.cursorMode ) {
(this.getTopFrame$()).moveSelectedSequences$Z(true);
(this.getBottomFrame$()).moveSelectedSequences$Z(true);
actioned=true;
e.consume$();
}break;
default:
}
return actioned;
});

Clazz.newMeth(C$, 'addKeyBindings', function () {
this.overrideDelegatedKeyBindings$();
this.overrideImplementedKeyBindings$();
}, p$1);

Clazz.newMeth(C$, 'overrideImplementedKeyBindings$', function () {
this.overrideFind$();
this.overrideNewView$();
this.overrideCloseView$();
this.overrideExpandViews$();
this.overrideGatherViews$();
});

Clazz.newMeth(C$, 'overrideCloseView$', function () {
var action;
var key_cmdW=$I$(7,"getKeyStroke$I$I$Z",[87, $I$(8).getMenuShortcutKeyMaskEx$(), false]);
action=((P$.SplitFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SplitFrame'].closeView_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.SplitFrame$3));
this.overrideKeyBinding$javax_swing_KeyStroke$javax_swing_AbstractAction(key_cmdW, action);
});

Clazz.newMeth(C$, 'overrideNewView$', function () {
var key_cmdT=$I$(7,"getKeyStroke$I$I$Z",[84, $I$(8).getMenuShortcutKeyMaskEx$(), false]);
var action=((P$.SplitFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SplitFrame'].newView_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.SplitFrame$4));
this.overrideKeyBinding$javax_swing_KeyStroke$javax_swing_AbstractAction(key_cmdT, action);
});

Clazz.newMeth(C$, 'overrideDelegatedKeyBindings$', function () {
if (Clazz.instanceOf(this.getTopFrame$(), "jalview.gui.AlignFrame")) {
for (var acc, $acc = (this.getTopFrame$()).getAccelerators$().entrySet$().iterator$(); $acc.hasNext$()&&((acc=($acc.next$())),1);) {
p$1.overrideKeyBinding$java_util_Map_Entry.apply(this, [acc]);
}
}});

Clazz.newMeth(C$, 'overrideKeyBinding$java_util_Map_Entry', function (acc) {
var ks=acc.getKey$();
var inputMap=this.getInputMap$I(0);
inputMap.put$javax_swing_KeyStroke$O(ks, ks);
this.getActionMap$().put$O$javax_swing_Action(ks, ((P$.SplitFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var c=this.b$['jalview.jbgui.GSplitFrame'].getFrameAtMouse$.apply(this.b$['jalview.jbgui.GSplitFrame'], []);
if (c != null  && Clazz.instanceOf(c, "jalview.gui.AlignFrame") ) {
for (var a, $a = 0, $$a = (c).getAccelerators$().get$O(this.$finals$.ks).getActionListeners$(); $a<$$a.length&&((a=($$a[$a])),1);$a++) {
a.actionPerformed$java_awt_event_ActionEvent(null);
}
}});
})()
), Clazz.new_($I$(9,1),[this, {ks:ks}],P$.SplitFrame$5)));
}, p$1);

Clazz.newMeth(C$, 'overrideKeyBinding$javax_swing_KeyStroke$javax_swing_AbstractAction', function (ks, action) {
this.getActionMap$().put$O$javax_swing_Action(ks, action);
p$1.overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction.apply(this, [ks, action]);
});

Clazz.newMeth(C$, 'newView_actionPerformed$', function () {
var topFrame=this.getTopFrame$();
var bottomFrame=this.getBottomFrame$();
var scaleProteinAsCdna=topFrame.viewport.isScaleProteinAsCdna$();
var newTopPanel=topFrame.newView$S$Z(null, true);
var newBottomPanel=bottomFrame.newView$S$Z(null, true);
if (topFrame.getTabIndex$() != bottomFrame.getTabIndex$()) {
topFrame.setDisplayedView$jalview_gui_AlignmentPanel(newTopPanel);
}newBottomPanel.av.setViewName$S(newTopPanel.av.getViewName$());
newTopPanel.av.setCodingComplement$jalview_api_AlignViewportI(newBottomPanel.av);
newTopPanel.av.setScaleProteinAsCdna$Z(scaleProteinAsCdna);
newBottomPanel.av.setScaleProteinAsCdna$Z(scaleProteinAsCdna);
this.adjustLayout$();
var ssm=$I$(4,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(3).instance]);
ssm.addCommandListener$jalview_structure_CommandListener(newTopPanel.av);
ssm.addCommandListener$jalview_structure_CommandListener(newBottomPanel.av);
});

Clazz.newMeth(C$, 'closeView_actionPerformed$', function () {
var viewCount=(this.getTopFrame$()).getAlignPanels$().size$();
if (viewCount < 2) {
this.close$();
return;
}var topPanel=(this.getTopFrame$()).alignPanel;
var bottomPanel=(this.getBottomFrame$()).alignPanel;
(this.getTopFrame$()).closeView$jalview_gui_AlignmentPanel(topPanel);
(this.getBottomFrame$()).closeView$jalview_gui_AlignmentPanel(bottomPanel);
});

Clazz.newMeth(C$, 'close$', function () {
(this.getTopFrame$()).closeMenuItem_actionPerformed$Z(true);
(this.getBottomFrame$()).closeMenuItem_actionPerformed$Z(true);
try {
this.setClosed$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'overrideExpandViews$', function () {
var key_X=$I$(7).getKeyStroke$I$I$Z(88, 0, false);
var action=((P$.SplitFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SplitFrame'].expandViews_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.SplitFrame$6));
p$1.overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction.apply(this, [key_X, action]);
});

Clazz.newMeth(C$, 'overrideGatherViews$', function () {
var key_G=$I$(7).getKeyStroke$I$I$Z(71, 0, false);
var action=((P$.SplitFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SplitFrame'].gatherViews_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.SplitFrame$7));
p$1.overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction.apply(this, [key_G, action]);
});

Clazz.newMeth(C$, 'overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction', function (ks, action) {
p$1.overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction$javax_swing_JComponent.apply(this, [ks, action, this.getTopFrame$()]);
p$1.overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction$javax_swing_JComponent.apply(this, [ks, action, this.getBottomFrame$()]);
}, p$1);

Clazz.newMeth(C$, 'overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction$javax_swing_JComponent', function (key, action, comp) {
if (Clazz.instanceOf(comp, "jalview.gui.AlignFrame")) {
var mi=(comp).getAccelerators$().get$O(key);
if (mi != null ) {
for (var al, $al = 0, $$al = mi.getActionListeners$(); $al<$$al.length&&((al=($$al[$al])),1);$al++) {
mi.removeActionListener$java_awt_event_ActionListener(al);
}
mi.addActionListener$java_awt_event_ActionListener(((P$.SplitFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.action.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.SplitFrame$8.$init$,[this, {action:action}])));
}}}, p$1);

Clazz.newMeth(C$, 'expandViews_actionPerformed$', function () {
$I$(3).instance.explodeViews$jalview_gui_SplitFrame(this);
});

Clazz.newMeth(C$, 'gatherViews_actionPerformed$', function () {
$I$(3).instance.gatherViews$jalview_jbgui_GSplitFrame(this);
});

Clazz.newMeth(C$, 'getComplement$O', function (alignFrame) {
if (alignFrame === this.getTopFrame$() ) {
return (this.getBottomFrame$()).viewport.getAlignment$();
} else if (alignFrame === this.getBottomFrame$() ) {
return (this.getTopFrame$()).viewport.getAlignment$();
}return null;
});

Clazz.newMeth(C$, 'getComplementTitle$O', function (alignFrame) {
if (alignFrame === this.getTopFrame$() ) {
return (this.getBottomFrame$()).getTitle$();
} else if (alignFrame === this.getBottomFrame$() ) {
return (this.getTopFrame$()).getTitle$();
}return null;
});

Clazz.newMeth(C$, 'setComplementVisible$O$Z', function (alignFrame, show) {
if (alignFrame === this.getTopFrame$() ) {
(this.getBottomFrame$()).alignPanel.setVisible$Z(show);
} else if (alignFrame === this.getBottomFrame$() ) {
(this.getTopFrame$()).alignPanel.setVisible$Z(show);
}C$.superclazz.prototype.setComplementVisible$O$Z.apply(this, [alignFrame, show]);
});

Clazz.newMeth(C$, 'getAlignFrames$', function () {
return $I$(10,"asList$OA",[Clazz.array($I$(11), -1, [this.getTopFrame$(), this.getBottomFrame$()])]);
});

Clazz.newMeth(C$, 'getComplementAlignFrame$jalview_api_AlignViewControllerGuiI', function (alignFrame) {
if (this.getTopFrame$() === alignFrame ) {
return this.getBottomFrame$();
}if (this.getBottomFrame$() === alignFrame ) {
return this.getTopFrame$();
}return null;
});

Clazz.newMeth(C$, 'overrideFind$', function () {
var key_cmdF=$I$(7,"getKeyStroke$I$I$Z",[70, $I$(8).getMenuShortcutKeyMaskEx$(), false]);
var action=((P$.SplitFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var c=this.b$['jalview.jbgui.GSplitFrame'].getFrameAtMouse$.apply(this.b$['jalview.jbgui.GSplitFrame'], []);
if (c != null  && Clazz.instanceOf(c, "jalview.gui.AlignFrame") ) {
var af=c;
Clazz.new_($I$(12,1).c$$jalview_viewmodel_AlignmentViewport$jalview_gui_AlignmentPanel,[af.viewport, af.alignPanel]);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.SplitFrame$9));
this.overrideKeyBinding$javax_swing_KeyStroke$javax_swing_AbstractAction(key_cmdF, action);
});

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
var desktopPane=this.getDesktopPane$();
var fr=desktopPane == null  ? null : desktopPane.getSelectedFrame$();
if (fr === this.getTopFrame$()  || fr === this.getBottomFrame$()  ) {
if (selected) {
this.moveToFront$();
}return;
}C$.superclazz.prototype.setSelected$Z.apply(this, [selected]);
});

Clazz.newMeth(C$, 'addFeatureSettingsUI$jalview_controller_FeatureSettingsControllerGuiI', function (featureSettings) {
var showInternalFrame=false;
if (this.featureSettingsUI == null  || this.featureSettingsPanels == null  ) {
showInternalFrame=true;
this.featureSettingsPanels=Clazz.new_($I$(13,1));
this.featureSettingsPanels.addChangeListener$javax_swing_event_ChangeListener(((P$.SplitFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
if (e.getSource$() !== this.b$['jalview.gui.SplitFrame'].featureSettingsPanels  || this.b$['jalview.gui.SplitFrame'].featureSettingsUI == null   || this.b$['jalview.gui.SplitFrame'].featureSettingsUI.isClosed$()  || !this.b$['jalview.gui.SplitFrame'].featureSettingsUI.isVisible$() ) {
return;
}var tab=this.b$['jalview.gui.SplitFrame'].featureSettingsPanels.getSelectedIndex$();
if (tab < 0 || Clazz.instanceOf(this.b$['jalview.gui.SplitFrame'].featureSettingsPanels.getSelectedComponent$(), "jalview.controller.FeatureSettingsControllerGuiI") ) {
return;
}this.b$['jalview.gui.SplitFrame'].getAlignFrames$.apply(this.b$['jalview.gui.SplitFrame'], []).get$I(tab).showFeatureSettingsUI$();
});
})()
), Clazz.new_(P$.SplitFrame$10.$init$,[this, null])));
this.featureSettingsUI=Clazz.new_([$I$(1).getString$S("label.sequence_feature_settings_for_CDS_and_Protein")],$I$(14,1).c$$S);
this.featureSettingsPanels.setOpaque$Z(true);
var dialog=Clazz.new_($I$(15,1));
dialog.setOpaque$Z(true);
dialog.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1)));
dialog.add$java_awt_Component$O(this.featureSettingsPanels, "Center");
var buttons=Clazz.new_($I$(15,1));
var ok=Clazz.new_([$I$(1).getString$S("action.ok")],$I$(17,1).c$$S);
ok.addActionListener$java_awt_event_ActionListener(((P$.SplitFrame$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
this.b$['jalview.gui.SplitFrame'].featureSettingsUI.setClosed$Z(true);
} catch (pv) {
if (Clazz.exceptionOf(pv,"java.beans.PropertyVetoException")){
pv.printStackTrace$();
} else {
throw pv;
}
}
});
})()
), Clazz.new_(P$.SplitFrame$11.$init$,[this, null])));
var cancel=Clazz.new_([$I$(1).getString$S("action.cancel")],$I$(17,1).c$$S);
cancel.addActionListener$java_awt_event_ActionListener(((P$.SplitFrame$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
for (var fspanel, $fspanel = 0, $$fspanel = this.b$['jalview.gui.SplitFrame'].featureSettingsPanels.getComponents$(); $fspanel<$$fspanel.length&&((fspanel=($$fspanel[$fspanel])),1);$fspanel++) {
if (Clazz.instanceOf(fspanel, "jalview.controller.FeatureSettingsControllerGuiI")) {
(fspanel).revert$();
}}
this.b$['jalview.gui.SplitFrame'].featureSettingsUI.setClosed$Z(true);
} catch (pv) {
if (Clazz.exceptionOf(pv,"Exception")){
pv.printStackTrace$();
} else {
throw pv;
}
}
});
})()
), Clazz.new_(P$.SplitFrame$12.$init$,[this, null])));
buttons.add$java_awt_Component(ok);
buttons.add$java_awt_Component(cancel);
dialog.add$java_awt_Component$O(buttons, "South");
this.featureSettingsUI.setContentPane$java_awt_Container(dialog);
p$1.createDummyTabs.apply(this, []);
}if (this.featureSettingsPanels.indexOfTabComponent$java_awt_Component(featureSettings) > -1) {
this.featureSettingsPanels.setSelectedComponent$java_awt_Component(featureSettings);
return;
}var pos=this.getAlignFrames$().indexOf$O(featureSettings.getAlignframe$());
if (pos == 0) {
this.featureSettingsPanels.removeTabAt$I(0);
this.featureSettingsPanels.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(this.tabName[0], null, featureSettings, $I$(1).formatMessage$S$OA("label.sequence_feature_settings_for", [this.tabName[0]]), 0);
}if (pos == 1) {
this.featureSettingsPanels.removeTabAt$I(1);
this.featureSettingsPanels.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(this.tabName[1], null, featureSettings, $I$(1).formatMessage$S$OA("label.sequence_feature_settings_for", [this.tabName[1]]), 1);
}this.featureSettingsPanels.setSelectedComponent$java_awt_Component(featureSettings);
if (showInternalFrame) {
if ($I$(2).isAMacAndNotJS$()) {
$I$(3,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this.featureSettingsUI, $I$(1).getString$S("label.sequence_feature_settings_for_CDS_and_Protein"), 600, 480]);
} else {
$I$(3,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this.featureSettingsUI, $I$(1).getString$S("label.sequence_feature_settings_for_CDS_and_Protein"), 600, 450]);
}this.featureSettingsUI.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[400, 400]));
this.featureSettingsUI.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.SplitFrame$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplitFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
for (var tab=0; tab < this.b$['jalview.gui.SplitFrame'].featureSettingsPanels.getTabCount$(); ) {
var fsettings=this.b$['jalview.gui.SplitFrame'].featureSettingsPanels.getTabComponentAt$I(tab);
if (fsettings != null ) {
this.b$['jalview.gui.SplitFrame'].featureSettingsPanels.removeTabAt$I(tab);
fsettings.featureSettings_isClosed$();
} else {
tab++;
}}
this.b$['jalview.gui.SplitFrame'].featureSettingsPanels=null;
this.b$['jalview.gui.SplitFrame'].featureSettingsUI=null;
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.SplitFrame$13)));
this.featureSettingsUI.setLayer$Integer($I$(19).PALETTE_LAYER);
}});

Clazz.newMeth(C$, 'createDummyTabs', function () {
for (var tabIndex=0; tabIndex < 2; tabIndex++) {
var dummyTab=Clazz.new_($I$(15,1));
this.featureSettingsPanels.addTab$S$java_awt_Component(this.tabName[tabIndex], dummyTab);
}
}, p$1);

Clazz.newMeth(C$, 'replaceWithDummyTab$jalview_api_FeatureSettingsControllerI', function (toClose) {
var dummyTab=null;
for (var tabIndex=0; tabIndex < 2; tabIndex++) {
if (this.featureSettingsPanels.getTabCount$() > tabIndex) {
dummyTab=this.featureSettingsPanels.getTabComponentAt$I(tabIndex);
if (Clazz.instanceOf(dummyTab, "jalview.controller.FeatureSettingsControllerGuiI") && !dummyTab.isVisible$() ) {
this.featureSettingsPanels.removeTabAt$I(tabIndex);
(dummyTab).featureSettings_isClosed$();
dummyTab=Clazz.new_($I$(15,1));
this.featureSettingsPanels.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(this.tabName[tabIndex], null, dummyTab, $I$(1).formatMessage$S$OA("label.sequence_feature_settings_for", [this.tabName[tabIndex]]), tabIndex);
}}}
}, p$1);

Clazz.newMeth(C$, 'closeFeatureSettings$jalview_api_FeatureSettingsControllerI$Z', function (featureSettings, closeContainingFrame) {
if (this.featureSettingsUI != null ) {
if (closeContainingFrame) {
try {
this.featureSettingsUI.setClosed$Z(true);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
this.featureSettingsUI=null;
} else {
p$1.replaceWithDummyTab$jalview_api_FeatureSettingsControllerI.apply(this, [featureSettings]);
}}});

Clazz.newMeth(C$, 'isFeatureSettingsOpen$', function () {
return this.featureSettingsUI != null  && !this.featureSettingsUI.isClosed$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
