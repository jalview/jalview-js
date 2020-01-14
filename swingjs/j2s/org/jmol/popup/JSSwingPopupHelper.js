(function(){var P$=Clazz.newPackage("org.jmol.popup"),I$=[[0,'org.jmol.awtjs.swing.JPopupMenu','org.jmol.awtjs.swing.JMenu','org.jmol.awtjs.swing.JMenuItem','org.jmol.awtjs.swing.JRadioButtonMenuItem','org.jmol.awtjs.swing.JCheckBoxMenuItem','org.jmol.awtjs.swing.ButtonGroup']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSSwingPopupHelper", null, null, 'org.jmol.popup.PopupHelper');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.popup=null;
this.buttonGroup=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_GenericMenuInterface', function (popup) {
C$.$init$.apply(this);
this.popup=popup;
}, 1);

Clazz.newMeth(C$, 'menuCreatePopup$S$O', function (name, applet) {
var j=Clazz.new_($I$(1).c$$S,[name]);
j.setInvoker$O(applet);
return j;
});

Clazz.newMeth(C$, 'getMenu$S', function (name) {
return Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'getMenuItem$S', function (name) {
return Clazz.new_($I$(3).c$$S,[name]);
});

Clazz.newMeth(C$, 'getRadio$S', function (name) {
return Clazz.new_($I$(4));
});

Clazz.newMeth(C$, 'getCheckBox$S', function (name) {
return Clazz.new_($I$(5));
});

Clazz.newMeth(C$, 'menuAddButtonGroup$javajs_awt_SC', function (item) {
if (item == null ) {
this.buttonGroup=null;
return;
}if (this.buttonGroup == null ) this.buttonGroup=Clazz.new_($I$(6));
this.buttonGroup.add$javajs_awt_SC(item);
});

Clazz.newMeth(C$, 'getItemType$javajs_awt_SC', function (m) {
return (m).btnType;
});

Clazz.newMeth(C$, 'menuInsertSubMenu$javajs_awt_SC$javajs_awt_SC$I', function (menu, subMenu, index) {
(subMenu).setParent$O(menu);
});

Clazz.newMeth(C$, 'getSwingComponent$O', function (component) {
return component;
});

Clazz.newMeth(C$, 'menuClearListeners$javajs_awt_SC', function (menu) {
if (menu != null ) (menu).disposeMenu$();
});

Clazz.newMeth(C$, 'itemStateChanged$javajs_awt_event_ItemEvent', function (e) {
this.popup.menuCheckBoxCallback$javajs_awt_SC(e.getSource$());
});

Clazz.newMeth(C$, 'actionPerformed$javajs_awt_event_ActionEvent', function (e) {
this.popup.menuClickCallback$javajs_awt_SC$S(e.getSource$(), e.getActionCommand$());
});

Clazz.newMeth(C$, 'getButtonGroup$', function () {
return this.buttonGroup;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
