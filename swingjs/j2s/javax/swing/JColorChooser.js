(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.JColorChooser','.ASYNCHRONOUS_COLOR'],'javax.swing.colorchooser.AbstractColorChooserPanel','java.awt.Color','javax.swing.ColorTracker','javax.swing.JOptionPane','javax.swing.ColorChooserDialog','javax.swing.colorchooser.DefaultColorSelectionModel','StringBuffer','java.awt.BorderLayout','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JButton','javax.swing.AbstractAction','javax.swing.KeyStroke','sun.swing.SwingUtilities2','javax.swing.JDialog','javax.swing.UIManager',['javax.swing.ColorChooserDialog','.Closer']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JColorChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent');
C$.ASYNC_RETURN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ASYNC_RETURN=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.selectionModel=null;
this.previewPanel=null;
this.chooserPanels=null;
this.dragEnabled=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.chooserPanels=Clazz.array($I$(2), [0]);
}, 1);

Clazz.newMeth(C$, 'showDialog$java_awt_Component$S$java_awt_Color', function (component, title, initialColor) {
if (!(Clazz.instanceOf(component, "java.beans.PropertyChangeListener"))) {
System.err.println$S("JOptionPanel: parentComponent is not a PropertyChangeListener");
return null;
}var pane=Clazz.new_(C$.c$$java_awt_Color,[initialColor != null  ? initialColor : $I$(3).white]);
var ok=Clazz.new_($I$(4).c$$javax_swing_JColorChooser,[pane]);
var dialog=C$.createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z(component, title, true, pane, ok, null, true);
dialog.setVisible$Z(true);
return C$.ASYNC_RETURN;
}, 1);

Clazz.newMeth(C$, 'createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener', function (c, title, modal, chooserPane, okListener, cancelListener) {
return C$.createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z(c, title, modal, chooserPane, okListener, cancelListener, false);
}, 1);

Clazz.newMeth(C$, 'createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z', function (c, title, modal, chooserPane, okListener, cancelListener, disposeOnHide) {
var window=$I$(5).getWindowForComponent$java_awt_Component(c);
var dialog;
if (Clazz.instanceOf(window, "java.awt.JSFrame")) {
dialog=Clazz.new_($I$(6).c$$java_awt_JSFrame$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z,[window, title, modal, c, chooserPane, okListener, cancelListener, disposeOnHide]);
} else {
dialog=Clazz.new_($I$(6).c$$java_awt_Dialog$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z,[window, title, modal, c, chooserPane, okListener, cancelListener, disposeOnHide]);
}return dialog;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_Color.apply(this, [$I$(3).white]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color', function (initialColor) {
C$.c$$javax_swing_colorchooser_ColorSelectionModel.apply(this, [Clazz.new_($I$(7).c$$java_awt_Color,[initialColor])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_colorchooser_ColorSelectionModel', function (model) {
Clazz.super_(C$, this,1);
this.selectionModel=model;
this.updateUI$();
this.dragEnabled=false;
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "ColorChooserUI";
});

Clazz.newMeth(C$, 'getColor$', function () {
return this.selectionModel.getSelectedColor$();
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (color) {
this.selectionModel.setSelectedColor$java_awt_Color(color);
});

Clazz.newMeth(C$, 'setColor$I$I$I', function (r, g, b) {
this.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[r, g, b]));
});

Clazz.newMeth(C$, 'setColor$I', function (c) {
this.setColor$I$I$I((c >> 16) & 255, (c >> 8) & 255, c & 255);
});

Clazz.newMeth(C$, 'setDragEnabled$Z', function (b) {
this.dragEnabled=b;
});

Clazz.newMeth(C$, 'getDragEnabled$', function () {
return this.dragEnabled;
});

Clazz.newMeth(C$, 'setPreviewPanel$javax_swing_JComponent', function (preview) {
if (this.previewPanel !== preview ) {
var oldPreview=this.previewPanel;
this.previewPanel=preview;
this.firePropertyChange$S$O$O("previewPanel", oldPreview, preview);
}});

Clazz.newMeth(C$, 'getPreviewPanel$', function () {
return this.previewPanel;
});

Clazz.newMeth(C$, 'addChooserPanel$javax_swing_colorchooser_AbstractColorChooserPanel', function (panel) {
var oldPanels=this.getChooserPanels$();
var newPanels=Clazz.array($I$(2), [oldPanels.length + 1]);
System.arraycopy$O$I$O$I$I(oldPanels, 0, newPanels, 0, oldPanels.length);
newPanels[newPanels.length - 1]=panel;
this.setChooserPanels$javax_swing_colorchooser_AbstractColorChooserPanelA(newPanels);
});

Clazz.newMeth(C$, 'removeChooserPanel$javax_swing_colorchooser_AbstractColorChooserPanel', function (panel) {
var containedAt=-1;
for (var i=0; i < this.chooserPanels.length; i++) {
if (this.chooserPanels[i] === panel ) {
containedAt=i;
break;
}}
if (containedAt == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["chooser panel not in this chooser"]);
}var newArray=Clazz.array($I$(2), [this.chooserPanels.length - 1]);
if (containedAt == this.chooserPanels.length - 1) {
System.arraycopy$O$I$O$I$I(this.chooserPanels, 0, newArray, 0, newArray.length);
} else if (containedAt == 0) {
System.arraycopy$O$I$O$I$I(this.chooserPanels, 1, newArray, 0, newArray.length);
} else {
System.arraycopy$O$I$O$I$I(this.chooserPanels, 0, newArray, 0, containedAt);
System.arraycopy$O$I$O$I$I(this.chooserPanels, containedAt + 1, newArray, containedAt, (this.chooserPanels.length - containedAt - 1 ));
}this.setChooserPanels$javax_swing_colorchooser_AbstractColorChooserPanelA(newArray);
return panel;
});

Clazz.newMeth(C$, 'setChooserPanels$javax_swing_colorchooser_AbstractColorChooserPanelA', function (panels) {
var oldValue=this.chooserPanels;
this.chooserPanels=panels;
this.firePropertyChange$S$O$O("chooserPanels", oldValue, panels);
});

Clazz.newMeth(C$, 'getChooserPanels$', function () {
return this.chooserPanels;
});

Clazz.newMeth(C$, 'getSelectionModel$', function () {
return this.selectionModel;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_colorchooser_ColorSelectionModel', function (newModel) {
var oldModel=this.selectionModel;
this.selectionModel=newModel;
this.firePropertyChange$S$O$O("selectionModel", oldModel, newModel);
});

Clazz.newMeth(C$, 'paramString$', function () {
var chooserPanelsString=Clazz.new_($I$(8).c$$S,[""]);
for (var i=0; i < this.chooserPanels.length; i++) {
chooserPanelsString.append$S("[" + this.chooserPanels[i].toString() + "]" );
}
var previewPanelString=(this.previewPanel != null  ? this.previewPanel.toString() : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",chooserPanels=" + chooserPanelsString.toString() + ",previewPanel=" + previewPanelString ;
});
;
(function(){var C$=Clazz.newClass(P$.JColorChooser, "ASYNCHRONOUS_COLOR", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.Color', 'javax.swing.plaf.UIResource');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
