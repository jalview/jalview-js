(function(){var P$=Clazz.newPackage("org.jmol.modelkit"),I$=[[0,'org.jmol.popup.AwtSwingPopupHelper','org.jmol.i18n.GT','org.jmol.modelkit.ModelKitPopupResourceBundle','javax.swing.JOptionPane','org.jmol.util.Elements','javax.swing.ImageIcon']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModelKitPopup", null, 'org.jmol.popup.JmolGenericPopup');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.helper=Clazz.new_($I$(1).c$$org_jmol_api_GenericMenuInterface,[this]);
}, 1);

Clazz.newMeth(C$, 'jpiInitialize$org_jmol_api_PlatformViewer$S', function (vwr, menu) {
this.updateMode=-1;
var doTranslate=$I$(2).setDoTranslate$Z(true);
var bundle=Clazz.new_($I$(3).c$$S$java_util_Properties,[null, null]);
this.initialize$org_jmol_viewer_Viewer$org_jmol_popup_PopupResource$S(vwr, bundle, bundle.getMenuName$());
$I$(2).setDoTranslate$Z(doTranslate);
});

Clazz.newMeth(C$, 'menuShowPopup$javajs_awt_SC$I$I', function (popup, x, y) {
try {
((popup).jc).show$java_awt_Component$I$I(this.vwr.display, x, y);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'menuSetCheckBoxOption$javajs_awt_SC$S$S', function (item, name, what) {
var element=$I$(4).showInputDialog$O$O($I$(2).$$S("Element?"), "");
if (element == null  || $I$(5).elementNumberFromSymbol$S$Z(element, true) == 0 ) return null;
this.menuSetLabel$javajs_awt_SC$S(item, element);
(item).setActionCommand$S("assignAtom_" + element + "P!:??" );
return "set picking assignAtom_" + element;
});

Clazz.newMeth(C$, 'menuClickCallback$javajs_awt_SC$S', function (source, script) {
if (script.equals$O("clearQ")) {
for (var item, $item = this.htCheckbox.values$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (item.getActionCommand$().indexOf$S(":??") < 0) continue;
this.menuSetLabel$javajs_awt_SC$S(item, "??");
item.setActionCommand$S("_??P!:");
item.setSelected$Z(false);
}
this.vwr.evalStringQuiet$S("set picking assignAtom_C");
return;
}C$.superclazz.prototype.menuClickCallback$javajs_awt_SC$S.apply(this, [source, script]);
});

Clazz.newMeth(C$, 'getImageIcon$S', function (fileName) {
var imageName="org/jmol/modelkit/images/" + fileName;
var imageUrl=this.getClass$().getClassLoader$().getResource$S(imageName);
return (imageUrl == null  ? null : Clazz.new_($I$(6).c$$java_net_URL,[imageUrl]));
});

Clazz.newMeth(C$, 'menuFocusCallback$S$S$Z', function (name, actionCommand, b) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
