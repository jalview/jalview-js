(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.JPanel','swingjs.plaf.CenterLayout','javax.swing.colorchooser.ColorChooserComponentFactory','javax.swing.JTabbedPane','java.awt.BorderLayout','sun.swing.DefaultLookup','javax.swing.border.TitledBorder','java.awt.Dimension','javax.swing.LookAndFeel','Boolean',['swingjs.plaf.JSColorChooserUI','.Handler']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSColorChooserUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.chooser=null;
this.tabbedPane=null;
this.singlePanel=null;
this.previewPanelHolder=null;
this.previewPanel=null;
this.isMultiPanel=false;
this.defaultChoosers=null;
this.previewListener=null;
this.propertyChangeListener=null;
this.handler=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isMultiPanel=false;
}, 1);

Clazz.newMeth(C$, 'createUI$javax_swing_JComponent', function (c) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'createDefaultChoosers$', function () {
var panels=$I$(3).getDefaultChooserPanels$();
return panels;
});

Clazz.newMeth(C$, 'uninstallDefaultChoosers$', function () {
var choosers=this.chooser.getChooserPanels$();
for (var i=0; i < choosers.length; i++) {
this.chooser.removeChooserPanel$javax_swing_colorchooser_AbstractColorChooserPanel(choosers[i]);
}
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (c) {
this.chooser=c;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [c]);
this.installDefaults$();
this.installListeners$();
this.tabbedPane=Clazz.new_($I$(4));
this.tabbedPane.setName$S("ColorChooser.tabPane");
this.tabbedPane.setInheritsPopupMenu$Z(true);
this.singlePanel=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2))]);
this.singlePanel.setName$S("ColorChooser.panel");
this.singlePanel.setInheritsPopupMenu$Z(true);
this.chooser.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5)));
this.defaultChoosers=this.createDefaultChoosers$();
this.chooser.setChooserPanels$javax_swing_colorchooser_AbstractColorChooserPanelA(this.defaultChoosers);
this.previewPanelHolder=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2))]);
this.previewPanelHolder.setName$S("ColorChooser.previewPanelHolder");
if ($I$(6).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.chooser, this, "ColorChooser.showPreviewPanelText", true)) {
var previewString="Preview";
this.previewPanelHolder.setBorder$javax_swing_border_Border(Clazz.new_($I$(7).c$$S,[previewString]));
}this.previewPanelHolder.setInheritsPopupMenu$Z(true);
this.chooser.add$java_awt_Component$O(this.previewPanelHolder, "South");
this.installPreviewPanel$();
this.chooser.applyComponentOrientation$java_awt_ComponentOrientation(c.getComponentOrientation$());
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (c) {
this.chooser.remove$java_awt_Component(this.tabbedPane);
this.chooser.remove$java_awt_Component(this.singlePanel);
this.chooser.remove$java_awt_Component(this.previewPanelHolder);
this.uninstallDefaultChoosers$();
this.uninstallListeners$();
this.uninstallDefaults$();
this.previewPanelHolder.remove$java_awt_Component(this.previewPanel);
if (Clazz.instanceOf(this.previewPanel, "javax.swing.plaf.UIResource")) {
this.chooser.setPreviewPanel$javax_swing_JComponent(null);
}this.previewPanelHolder=null;
this.previewPanel=null;
this.defaultChoosers=null;
this.chooser=null;
this.tabbedPane=null;
this.handler=null;
});

Clazz.newMeth(C$, 'installPreviewPanel$', function () {
if (this.previewPanel != null ) {
this.previewPanelHolder.remove$java_awt_Component(this.previewPanel);
this.previewPanel.removeMouseListener$java_awt_event_MouseListener(p$1.getHandler.apply(this, []));
}this.previewPanel=this.chooser.getPreviewPanel$();
var layoutSize=Clazz.new_($I$(8));
if (this.previewPanel != null ) {
layoutSize=Clazz.new_($I$(5)).minimumLayoutSize$java_awt_Container(this.previewPanel);
if ((this.previewPanelHolder != null ) && (this.chooser != null ) && (layoutSize.getWidth$() + layoutSize.getHeight$() == 0 )  ) {
this.chooser.remove$java_awt_Component(this.previewPanelHolder);
return;
}}if (this.previewPanel == null  || Clazz.instanceOf(this.previewPanel, "javax.swing.plaf.UIResource") ) {
this.previewPanel=$I$(3).getPreviewPanel$();
this.chooser.setPreviewPanel$javax_swing_JComponent(this.previewPanel);
}this.previewPanel.setForeground$java_awt_Color(this.chooser.getColor$());
this.previewPanelHolder.add$java_awt_Component(this.previewPanel);
this.previewPanel.addMouseListener$java_awt_event_MouseListener(p$1.getHandler.apply(this, []));
this.previewPanel.setInheritsPopupMenu$Z(true);
});

Clazz.newMeth(C$, 'installDefaults$', function () {
$I$(9).installColorsAndFont$javax_swing_JComponent$S$S$S(this.chooser, "ColorChooser.background", "ColorChooser.foreground", "ColorChooser.font");
$I$(9).installProperty$javax_swing_JComponent$S$O(this.chooser, "opaque", $I$(10).TRUE);
});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
});

Clazz.newMeth(C$, 'installListeners$', function () {
this.propertyChangeListener=this.createPropertyChangeListener$();
this.chooser.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.previewListener=p$1.getHandler.apply(this, []);
this.chooser.getSelectionModel$().addChangeListener$javax_swing_event_ChangeListener(this.previewListener);
});

Clazz.newMeth(C$, 'getHandler', function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(11), [this, null]);
}return this.handler;
}, p$1);

Clazz.newMeth(C$, 'createPropertyChangeListener$', function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'uninstallListeners$', function () {
this.chooser.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.chooser.getSelectionModel$().removeChangeListener$javax_swing_event_ChangeListener(this.previewListener);
this.previewPanel.removeMouseListener$java_awt_event_MouseListener(p$1.getHandler.apply(this, []));
});
;
(function(){var C$=Clazz.newClass(P$.JSColorChooserUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.awt.event.MouseListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (evt) {
var model=evt.getSource$();
if (this.this$0.previewPanel != null ) {
this.this$0.previewPanel.setForeground$java_awt_Color(model.getSelectedColor$());
this.this$0.previewPanel.repaint$();
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if (this.this$0.chooser.getDragEnabled$()) {
var th=this.this$0.chooser.getTransferHandler$();
th.exportAsDrag$javax_swing_JComponent$java_awt_event_InputEvent$I(this.this$0.chooser, evt, 1);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var prop=evt.getPropertyName$();
if (prop == "chooserPanels") {
var oldPanels=evt.getOldValue$();
var newPanels=evt.getNewValue$();
for (var i=0; i < oldPanels.length; i++) {
var wrapper=oldPanels[i].getParent$();
if (wrapper != null ) {
var parent=wrapper.getParent$();
if (parent != null ) parent.remove$java_awt_Component(wrapper);
oldPanels[i].uninstallChooserPanel$javax_swing_JColorChooser(this.this$0.chooser);
}}
var numNewPanels=newPanels.length;
if (numNewPanels == 0) {
this.this$0.chooser.remove$java_awt_Component(this.this$0.tabbedPane);
return;
} else if (numNewPanels == 1) {
this.this$0.chooser.remove$java_awt_Component(this.this$0.tabbedPane);
var centerWrapper=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2))]);
centerWrapper.setInheritsPopupMenu$Z(true);
centerWrapper.add$java_awt_Component(newPanels[0]);
this.this$0.singlePanel.add$java_awt_Component$O(centerWrapper, "Center");
this.this$0.chooser.add$java_awt_Component(this.this$0.singlePanel);
} else {
if (oldPanels.length < 2) {
this.this$0.chooser.remove$java_awt_Component(this.this$0.singlePanel);
this.this$0.chooser.add$java_awt_Component$O(this.this$0.tabbedPane, "Center");
}for (var i=0; i < newPanels.length; i++) {
var centerWrapper=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2))]);
centerWrapper.setInheritsPopupMenu$Z(true);
var name=newPanels[i].getDisplayName$();
var mnemonic=newPanels[i].getMnemonic$();
centerWrapper.add$java_awt_Component(newPanels[i]);
this.this$0.tabbedPane.addTab$S$java_awt_Component(name, centerWrapper);
if (mnemonic > 0) {
this.this$0.tabbedPane.setMnemonicAt$I$I(i, mnemonic);
this.this$0.tabbedPane.setDisplayedMnemonicIndexAt$I$I(i, newPanels[i].getDisplayedMnemonicIndex$());
}}
}this.this$0.chooser.applyComponentOrientation$java_awt_ComponentOrientation(this.this$0.chooser.getComponentOrientation$());
for (var i=0; i < newPanels.length; i++) {
newPanels[i].installChooserPanel$javax_swing_JColorChooser(this.this$0.chooser);
}
}if (prop == "previewPanel") {
if (evt.getNewValue$() !== this.this$0.previewPanel ) {
this.this$0.installPreviewPanel$.apply(this.this$0, []);
}}if (prop == "componentOrientation") {
var o=evt.getNewValue$();
var cc=evt.getSource$();
if (o !== evt.getOldValue$() ) {
cc.applyComponentOrientation$java_awt_ComponentOrientation(o);
cc.updateUI$();
}}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSColorChooserUI, "PropertyHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
p$1.getHandler.apply(this.this$0, []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
