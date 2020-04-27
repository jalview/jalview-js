(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'org.jmol.awt.AwtPopupHelper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AwtJmolPopup", null, 'org.jmol.popup.JmolPopup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.helper=Clazz.new_($I$(1,1).c$$org_jmol_popup_GenericPopup,[this]);
}, 1);

Clazz.newMeth(C$, 'menuShowPopup$org_jmol_api_SC$I$I', function (popup, x, y) {
try {
((popup).jc).show$java_awt_Component$I$I(this.vwr.display, x, y);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getUnknownCheckBoxScriptToRun$org_jmol_api_SC$S$S$Z', function (item, name, what, TF) {
return null;
});

Clazz.newMeth(C$, 'getImageIcon$S', function (fileName) {
return null;
});

Clazz.newMeth(C$, 'menuFocusCallback$S$S$Z', function (name, actionCommand, b) {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
