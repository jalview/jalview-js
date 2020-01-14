(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.util.Platform','jalview.gui.Desktop','jalview.structure.StructureSelectionManager','javax.swing.event.InternalFrameAdapter','java.awt.event.KeyAdapter','javax.swing.KeyStroke','java.awt.Toolkit','javax.swing.AbstractAction','java.util.Arrays','jalview.gui.AlignFrame','jalview.gui.Finder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SplitFrame", null, 'jalview.jbgui.GSplitFrame', 'jalview.api.SplitContainerI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame', function (top, bottom) {
C$.superclazz.c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame.apply(this, [top, bottom]);
C$.$init$.apply(this);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
this.getTopFrame$().setSplitFrame$jalview_api_SplitContainerI(this);
this.getBottomFrame$().setSplitFrame$jalview_api_SplitContainerI(this);
this.getTopFrame$().setVisible$Z(true);
this.getBottomFrame$().setVisible$Z(true);
(this.getTopFrame$()).getViewport$().setCodingComplement$jalview_api_AlignViewportI((this.getBottomFrame$()).getViewport$());
var widthFudge=$I$(1).isAMacAndNotJS$() ? 28 : 28;
var heightFudge=$I$(1).isAMacAndNotJS$() ? 50 : 50;
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
var newHeight=Math.min(height, $I$(2).instance.getHeight$() - 65);
if (newHeight != height) {
var oldDividerLocation=this.getDividerLocation$();
this.setDividerLocation$I((oldDividerLocation * newHeight/height|0));
}return newHeight;
});

Clazz.newMeth(C$, 'addCommandListeners$', function () {
var ssm=$I$(3).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider($I$(2).instance);
ssm.addCommandListener$jalview_structure_CommandListener((this.getTopFrame$()).getViewport$());
ssm.addCommandListener$jalview_structure_CommandListener((this.getBottomFrame$()).getViewport$());
});

Clazz.newMeth(C$, 'adjustLayout$', function () {
var w1=(this.getTopFrame$()).getViewport$().getIdWidth$();
var w2=(this.getBottomFrame$()).getViewport$().getIdWidth$();
var w3=Math.max(w1, w2);
if (w1 != w3) {
(this.getTopFrame$()).getViewport$().setIdWidth$I(w3);
}if (w2 != w3) {
(this.getBottomFrame$()).getViewport$().setIdWidth$I(w3);
}var topViewport=(this.getTopFrame$()).viewport;
var bottomViewport=(this.getBottomFrame$()).viewport;
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
var insets=$I$(1).isAMacAndNotJS$() ? 50 : 50;
var topHeight=insets + (3 + topCount) * topCharHeight + (topAnnotations ? topViewport.calcPanelHeight$() : 0);
var bottomHeight=insets + (3 + bottomCount) * bottomCharHeight + (bottomAnnotations ? bottomViewport.calcPanelHeight$() : 0);
var ratio=(topHeight) / (topHeight + bottomHeight);
ratio=Math.min(ratio, maxRatio);
ratio=Math.max(ratio, minRatio);
this.setRelativeDividerLocation$D(ratio);
});

Clazz.newMeth(C$, 'addCloseFrameListener$', function () {
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.SplitFrame$1||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
this.b$['jalview.gui.SplitFrame'].close$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(4), [this, null],P$.SplitFrame$1)));
});

Clazz.newMeth(C$, 'addKeyListener$', function () {
this.addKeyListener$java_awt_event_KeyListener(((P$.SplitFrame$2||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_($I$(5), [this, null],P$.SplitFrame$2)));
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
var key_cmdW=$I$(6).getKeyStroke$I$I$Z(87, $I$(7).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
action=((P$.SplitFrame$3||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.SplitFrame'].closeView_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.SplitFrame$3));
this.overrideKeyBinding$javax_swing_KeyStroke$javax_swing_AbstractAction(key_cmdW, action);
});

Clazz.newMeth(C$, 'overrideNewView$', function () {
var key_cmdT=$I$(6).getKeyStroke$I$I$Z(84, $I$(7).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
var action=((P$.SplitFrame$4||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.SplitFrame'].newView_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.SplitFrame$4));
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
(function(){var C$=Clazz.newClass(P$, "SplitFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var c=this.b$['jalview.jbgui.GSplitFrame'].getFrameAtMouse$.apply(this.b$['jalview.jbgui.GSplitFrame'], []);
if (c != null  && Clazz.instanceOf(c, "jalview.gui.AlignFrame") ) {
for (var a, $a = 0, $$a = (c).getAccelerators$().get$O(this.$finals$.ks).getActionListeners$(); $a<$$a.length&&((a=($$a[$a])),1);$a++) {
a.actionPerformed$(null);
}
}});
})()
), Clazz.new_($I$(8), [this, {ks: ks}],P$.SplitFrame$5)));
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
var ssm=$I$(3).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider($I$(2).instance);
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
var key_X=$I$(6).getKeyStroke$I$I$Z(88, 0, false);
var action=((P$.SplitFrame$6||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.SplitFrame'].expandViews_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.SplitFrame$6));
p$1.overrideMenuItem$javax_swing_KeyStroke$javax_swing_AbstractAction.apply(this, [key_X, action]);
});

Clazz.newMeth(C$, 'overrideGatherViews$', function () {
var key_G=$I$(6).getKeyStroke$I$I$Z(71, 0, false);
var action=((P$.SplitFrame$7||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.SplitFrame'].gatherViews_actionPerformed$.apply(this.b$['jalview.gui.SplitFrame'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.SplitFrame$7));
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
(function(){var C$=Clazz.newClass(P$, "SplitFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.action.actionPerformed$(e);
});
})()
), Clazz.new_(P$.SplitFrame$8.$init$, [this, {action: action}])));
}}}, p$1);

Clazz.newMeth(C$, 'expandViews_actionPerformed$', function () {
$I$(2).instance.explodeViews$jalview_gui_SplitFrame(this);
});

Clazz.newMeth(C$, 'gatherViews_actionPerformed$', function () {
$I$(2).instance.gatherViews$jalview_jbgui_GSplitFrame(this);
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
return $I$(9).asList$TTA(Clazz.array($I$(10), -1, [this.getTopFrame$(), this.getBottomFrame$()]));
});

Clazz.newMeth(C$, 'overrideFind$', function () {
var key_cmdF=$I$(6).getKeyStroke$I$I$Z(70, $I$(7).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
var action=((P$.SplitFrame$9||
(function(){var C$=Clazz.newClass(P$, "SplitFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var c=this.b$['jalview.jbgui.GSplitFrame'].getFrameAtMouse$.apply(this.b$['jalview.jbgui.GSplitFrame'], []);
if (c != null  && Clazz.instanceOf(c, "jalview.gui.AlignFrame") ) {
var af=c;
Clazz.new_($I$(11).c$$jalview_viewmodel_AlignmentViewport$jalview_gui_AlignmentPanel,[af.viewport, af.alignPanel]);
}});
})()
), Clazz.new_($I$(8), [this, null],P$.SplitFrame$9));
this.overrideKeyBinding$javax_swing_KeyStroke$javax_swing_AbstractAction(key_cmdF, action);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
