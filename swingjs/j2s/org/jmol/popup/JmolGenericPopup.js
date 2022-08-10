(function(){var P$=Clazz.newPackage("org.jmol.popup"),I$=[[0,'java.util.Properties','org.jmol.i18n.GT','org.jmol.viewer.Viewer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolGenericPopup", null, 'org.jmol.popup.GenericPopup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nFrankList=0;
this.menuText=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['nFrankList'],'O',['frankPopup','org.jmol.api.SC','vwr','org.jmol.viewer.Viewer','menuText','java.util.Properties']]]

Clazz.newMeth(C$, 'jpiInitialize$org_jmol_api_PlatformViewer$S', function (vwr, menu) {
var doTranslate=$I$(2).setDoTranslate$Z(true);
var bundle=this.getBundle$S(menu);
this.initialize$org_jmol_viewer_Viewer$org_jmol_popup_PopupResource$S(vwr, bundle, bundle.getMenuName$());
$I$(2).setDoTranslate$Z(doTranslate);
});

Clazz.newMeth(C$, 'initialize$org_jmol_viewer_Viewer$org_jmol_popup_PopupResource$S', function (vwr, bundle, title) {
this.vwr=vwr;
this.initSwing$S$org_jmol_popup_PopupResource$O$Z$Z$Z(title, bundle, vwr.isJSNoAWT ? vwr.html5Applet : null, vwr.isJSNoAWT, vwr.getBooleanProperty$S("_signedApplet"), $I$(3).isWebGL);
});

Clazz.newMeth(C$, 'jpiShow$I$I', function (x, y) {
if (!this.vwr.haveDisplay) return;
this.thisx=x;
this.thisy=y;
this.show$I$I$Z(x, y, false);
if (x < 0 && this.showFrankMenu$() ) return;
this.appRestorePopupMenu$();
this.menuShowPopup$org_jmol_api_SC$I$I(this.popupMenu, this.thisx, this.thisy);
});

Clazz.newMeth(C$, 'showFrankMenu$', function () {
return true;
});

Clazz.newMeth(C$, 'jpiDispose$', function () {
this.helper.menuClearListeners$org_jmol_api_SC(this.popupMenu);
this.popupMenu=this.thisPopup=null;
});

Clazz.newMeth(C$, 'jpiGetMenuAsObject$', function () {
return this.popupMenu;
});

Clazz.newMeth(C$, 'appFixLabel$S', function (label) {
return label;
});

Clazz.newMeth(C$, 'appGetBooleanProperty$S', function (name) {
return this.vwr.getBooleanProperty$S(name);
});

Clazz.newMeth(C$, 'appRunSpecialCheckBox$org_jmol_api_SC$S$S$Z', function (item, basename, script, TF) {
if (this.appGetBooleanProperty$S(basename) == TF ) return true;
if (basename.indexOf$S("mk") < 0 && !basename.endsWith$S("P!") ) return false;
if (basename.indexOf$S("mk") >= 0 || basename.indexOf$S("??") >= 0 ) {
script=this.getUnknownCheckBoxScriptToRun$org_jmol_api_SC$S$S$Z(item, basename, script, TF);
} else {
if (!TF) return true;
script="set picking " + basename.substring$I$I(0, basename.length$() - 2);
}if (script != null ) this.appRunScript$S(script);
return true;
});

Clazz.newMeth(C$, 'appRestorePopupMenu$', function () {
this.thisPopup=this.popupMenu;
});

Clazz.newMeth(C$, 'appRunScript$S', function (script) {
this.vwr.evalStringQuiet$S(script);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
