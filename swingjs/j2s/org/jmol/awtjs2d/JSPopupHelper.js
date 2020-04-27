(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[[0,'org.jmol.awtjs.swing.JPopupMenu','org.jmol.awtjs.swing.JMenu','org.jmol.awtjs.swing.JMenuItem','org.jmol.awtjs.swing.JRadioButtonMenuItem','org.jmol.awtjs.swing.JCheckBoxMenuItem','org.jmol.awtjs.swing.ButtonGroup']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSPopupHelper", null, null, 'org.jmol.popup.PopupHelper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['popup','org.jmol.popup.GenericPopup','buttonGroup','org.jmol.awtjs.swing.ButtonGroup']]]

Clazz.newMeth(C$, 'c$$org_jmol_popup_GenericPopup', function (popup) {
;C$.$init$.apply(this);
this.popup=popup;
}, 1);

Clazz.newMeth(C$, 'menuCreatePopup$S$O', function (name, applet) {
var j=Clazz.new_($I$(1,1).c$$S,[name]);
j.setInvoker$O(applet);
return j;
});

Clazz.newMeth(C$, 'getMenu$S', function (name) {
var jm=Clazz.new_($I$(2,1));
jm.setName$S(name);
return jm;
});

Clazz.newMeth(C$, 'getMenuItem$S', function (text) {
return Clazz.new_($I$(3,1).c$$S,[text]);
});

Clazz.newMeth(C$, 'getRadio$S', function (name) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'getCheckBox$S', function (name) {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'menuAddButtonGroup$org_jmol_api_SC', function (item) {
if (item == null ) {
this.buttonGroup=null;
return;
}if (this.buttonGroup == null ) this.buttonGroup=Clazz.new_($I$(6,1));
this.buttonGroup.add$org_jmol_api_SC(item);
});

Clazz.newMeth(C$, 'getItemType$org_jmol_api_SC', function (m) {
return (m).btnType;
});

Clazz.newMeth(C$, 'menuInsertSubMenu$org_jmol_api_SC$org_jmol_api_SC$I', function (menu, subMenu, index) {
(subMenu).setParent$O(menu);
});

Clazz.newMeth(C$, 'getSwingComponent$O', function (component) {
return component;
});

Clazz.newMeth(C$, 'menuClearListeners$org_jmol_api_SC', function (menu) {
if (menu != null ) (menu).disposeMenu$();
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.popup.menuCheckBoxCallback$org_jmol_api_SC(e.getSource$());
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.popup.menuClickCallback$org_jmol_api_SC$S(e.getSource$(), e.getActionCommand$());
});

Clazz.newMeth(C$, 'getButtonGroup$', function () {
return this.buttonGroup;
});

Clazz.newMeth(C$, 'handleEvent$java_awt_event_MouseEvent', function (e) {
var type="" + e.getID$();
if (type == "mouseenter") this.mouseEntered$java_awt_event_MouseEvent(e);
 else if (type == "mouseleave") this.mouseExited$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
var jmi=e.getSource$();
this.popup.menuFocusCallback$S$S$Z(jmi.getName$(), jmi.getActionCommand$(), true);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
var jmi=e.getSource$();
this.popup.menuFocusCallback$S$S$Z(jmi.getName$(), jmi.getActionCommand$(), false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
