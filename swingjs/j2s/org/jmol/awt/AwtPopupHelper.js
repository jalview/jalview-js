(function(){var P$=Clazz.newPackage("org.jmol.awt"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.awt.AwtSwingComponent','javax.swing.ButtonGroup','javax.swing.MenuSelectionManager']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AwtPopupHelper", null, null, ['java.awt.event.ActionListener', 'java.awt.event.ItemListener', 'java.awt.event.MouseListener', 'org.jmol.popup.PopupHelper']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htSources=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['popup','org.jmol.popup.GenericPopup','htSources','java.util.Map','buttonGroup','javax.swing.ButtonGroup']]]

Clazz.newMeth(C$, 'c$$org_jmol_popup_GenericPopup', function (popup) {
;C$.$init$.apply(this);
this.popup=popup;
}, 1);

Clazz.newMeth(C$, 'menuCreatePopup$S$O', function (title, applet) {
return $I$(2).getPopup$S$java_util_Map(title, this.htSources);
});

Clazz.newMeth(C$, 'getRadio$S', function (name) {
return $I$(2).getRadio$org_jmol_awt_AwtPopupHelper$S$java_util_Map(this, name, this.htSources);
});

Clazz.newMeth(C$, 'getCheckBox$S', function (name) {
return $I$(2).getCheckBox$org_jmol_awt_AwtPopupHelper$S$java_util_Map(this, name, this.htSources);
});

Clazz.newMeth(C$, 'getMenu$S', function (name) {
return $I$(2).getMenu$S$java_util_Map(name, this.htSources);
});

Clazz.newMeth(C$, 'getMenuItem$S', function (name) {
return $I$(2).getMenuItem$org_jmol_awt_AwtPopupHelper$S$java_util_Map(this, name, this.htSources);
});

Clazz.newMeth(C$, 'menuAddButtonGroup$org_jmol_api_SC', function (item) {
if (item == null ) {
this.buttonGroup=null;
return;
}if (this.buttonGroup == null ) this.buttonGroup=Clazz.new_($I$(3,1));
this.buttonGroup.add$javax_swing_AbstractButton((item).ab);
});

Clazz.newMeth(C$, 'getButtonGroup$', function () {
return this.buttonGroup;
});

Clazz.newMeth(C$, 'menuInsertSubMenu$org_jmol_api_SC$org_jmol_api_SC$I', function (menu, subMenu, index) {
menu.insert$org_jmol_api_SC$I(subMenu, index);
});

Clazz.newMeth(C$, 'getItemType$org_jmol_api_SC', function (m) {
if (m == null ) return 0;
var jc=(m).jc;
return (Clazz.instanceOf(jc, "javax.swing.JMenu") ? 4 : Clazz.instanceOf(jc, "javax.swing.JRadioButtonMenuItem") ? 3 : Clazz.instanceOf(jc, "javax.swing.JCheckBoxMenuItem") ? 2 : m.getText$() != null  ? 1 : 0);
});

Clazz.newMeth(C$, 'getSwingComponent$O', function (component) {
return (component == null  ? null : this.htSources.get$O(component));
});

Clazz.newMeth(C$, 'menuClearListeners$org_jmol_api_SC', function (c) {
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

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.popup.menuCheckBoxCallback$org_jmol_api_SC(p$1.getSource$java_util_EventObject.apply(this, [e]));
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.popup.menuClickCallback$org_jmol_api_SC$S(p$1.getSource$java_util_EventObject.apply(this, [e]), e.getActionCommand$());
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

Clazz.newMeth(C$, 'reinstateMenu$javax_swing_JMenuItem$javax_swing_MenuElementA', function (item, path) {
var name="" + item.getName$();
if (name.indexOf$S("Persist") >= 0 && name.indexOf$S("!Persist") < 0 ) {
this.popup.jpiShow$I$I(this.popup.thisx, this.popup.thisy);
$I$(4).defaultManager$().setSelectedPath$javax_swing_MenuElementA(path);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
