(function(){var P$=Clazz.newPackage("org.jmol.popup"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.popup.AwtSwingComponent','javax.swing.ButtonGroup']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AwtSwingPopupHelper", null, null, ['java.awt.event.ActionListener', 'java.awt.event.ItemListener', 'java.awt.event.MouseListener', 'org.jmol.popup.PopupHelper']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.popup=null;
this.htSources=null;
this.buttonGroup=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.htSources=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_GenericMenuInterface', function (popup) {
C$.$init$.apply(this);
this.popup=popup;
}, 1);

Clazz.newMeth(C$, 'menuCreatePopup$S$O', function (title, applet) {
return $I$(2).getPopup$S$java_util_Map(title, this.htSources);
});

Clazz.newMeth(C$, 'getRadio$S', function (name) {
return $I$(2).getRadio$S$java_util_Map(name, this.htSources);
});

Clazz.newMeth(C$, 'getCheckBox$S', function (name) {
return $I$(2).getCheckBox$S$java_util_Map(name, this.htSources);
});

Clazz.newMeth(C$, 'getMenu$S', function (name) {
return $I$(2).getMenu$S$java_util_Map(name, this.htSources);
});

Clazz.newMeth(C$, 'getMenuItem$S', function (name) {
return $I$(2).getMenuItem$S$java_util_Map(name, this.htSources);
});

Clazz.newMeth(C$, 'menuAddButtonGroup$javajs_awt_SC', function (item) {
if (item == null ) {
this.buttonGroup=null;
return;
}if (this.buttonGroup == null ) this.buttonGroup=Clazz.new_($I$(3));
this.buttonGroup.add$javax_swing_AbstractButton(item);
});

Clazz.newMeth(C$, 'getButtonGroup$', function () {
return this.buttonGroup;
});

Clazz.newMeth(C$, 'menuInsertSubMenu$javajs_awt_SC$javajs_awt_SC$I', function (menu, subMenu, index) {
menu.insert$javajs_awt_SC$I(subMenu, index);
});

Clazz.newMeth(C$, 'getItemType$javajs_awt_SC', function (m) {
if (m == null ) return 0;
var jc=(m).jc;
return (Clazz.instanceOf(jc, "javax.swing.JMenu") ? 4 : Clazz.instanceOf(jc, "javax.swing.JRadioButtonMenuItem") ? 3 : Clazz.instanceOf(jc, "javax.swing.JCheckBoxMenuItem") ? 2 : m.getText$() != null  ? 1 : 0);
});

Clazz.newMeth(C$, 'getSwingComponent$O', function (component) {
return (component == null  ? null : this.htSources.get$O(component));
});

Clazz.newMeth(C$, 'menuClearListeners$javajs_awt_SC', function (c) {
if (c == null ) return;
p$1.clearListeners$OA.apply(this, [c.getComponents$()]);
p$1.clearListener$javax_swing_AbstractButton.apply(this, [(c).ab]);
});

Clazz.newMeth(C$, 'clearListener$javax_swing_AbstractButton', function (ab) {
if (ab != null ) try {
ab.removeMouseListener$java_awt_event_MouseListener(this);
ab.removeActionListener$java_awt_event_ActionListener(this);
ab.removeItemListener$java_awt_event_ItemListener(this);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'clearListeners$OA', function (subMenus) {
for (var i=0; i < subMenus.length; i++) {
var m=subMenus[i];
if (Clazz.instanceOf(m, "javax.swing.JMenu")) p$1.clearListeners$OA.apply(this, [m.getComponents$()]);
}
}, p$1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.popup.menuCheckBoxCallback$javajs_awt_SC(p$1.getSource$java_util_EventObject.apply(this, [e]));
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.popup.menuClickCallback$javajs_awt_SC$S(p$1.getSource$java_util_EventObject.apply(this, [e]), e.getActionCommand$());
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JMenuItem")) {
var jmi=e.getSource$();
this.popup.menuFocusCallback$S$S$Z(jmi.getName$(), jmi.getActionCommand$(), true);
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JMenuItem")) {
var jmi=e.getSource$();
this.popup.menuFocusCallback$S$S$Z(jmi.getName$(), jmi.getActionCommand$(), false);
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'getSource$java_util_EventObject', function (e) {
return this.getSwingComponent$O(e.getSource$());
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
