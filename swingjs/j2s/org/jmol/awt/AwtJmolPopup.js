(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'org.jmol.awt.AwtPopupHelper']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AwtJmolPopup", null, 'org.jmol.popup.JmolPopup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.helper=Clazz.new_($I$(1,1).c$$org_jmol_popup_GenericPopup,[this]);
}, 1);

Clazz.newMeth(C$, 'addMenu$S$S$org_jmol_api_SC$S$org_jmol_popup_PopupResource', function (id, item, subMenu, label, popupResourceBundle) {
var c=subMenu;
c.deferred=true;
c.jm.addMenuListener$javax_swing_event_MenuListener(((P$.AwtJmolPopup$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AwtJmolPopup$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
if (this.$finals$.c.deferred) {
this.$finals$.c.deferred=false;
if (this.$finals$.item.indexOf$S("Computed") < 0) this.b$['org.jmol.popup.GenericPopup'].addMenuItems$S$S$org_jmol_api_SC$org_jmol_popup_PopupResource.apply(this.b$['org.jmol.popup.GenericPopup'], [this.$finals$.id, this.$finals$.item, this.$finals$.subMenu, this.$finals$.popupResourceBundle]);
this.b$['org.jmol.popup.JmolPopup'].appCheckSpecialMenu$S$org_jmol_api_SC$S.apply(this.b$['org.jmol.popup.JmolPopup'], [this.$finals$.item, this.$finals$.subMenu, this.$finals$.label]);
this.b$['org.jmol.awt.AwtJmolPopup'].updateAwtMenus$S.apply(this.b$['org.jmol.awt.AwtJmolPopup'], [this.$finals$.item]);
}});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.AwtJmolPopup$1.$init$,[this, {item:item,c:c,popupResourceBundle:popupResourceBundle,label:label,subMenu:subMenu,id:id}])));
});

Clazz.newMeth(C$, 'updateAwtMenus$S', function (item) {
switch (item) {
case "fileMenu":
this.updateFileMenu$();
break;
case "elementsComputedMenu":
this.updateElementsComputedMenu$javajs_util_BS(this.vwr.getElementsPresentBitSet$I(this.modelIndex));
break;
case "FRAMESbyModelComputedMenu":
this.updateFRAMESbyModelComputedMenu$();
break;
case "PDBheteroComputedMenu":
this.updateHeteroComputedMenu$java_util_Map(this.vwr.ms.getHeteroList$I(this.modelIndex));
break;
case "modelSetMenu":
this.updateModelSetComputedMenu$();
break;
case "spectraMenu":
this.updateSpectraMenu$();
break;
case "sceneComputedMenu":
this.updateSceneComputedMenu$();
break;
case "selectMenuText":
this.updatePDBComputedMenus$();
break;
case "languageComputedMenu":
this.updateLanguageSubmenu$();
break;
case "SYMMETRYSelectComputedMenu":
this.updateSYMMETRYSelectComputedMenu$();
break;
case "SYMMETRYShowComputedMenu":
this.updateSYMMETRYShowComputedMenu$();
break;
case "configurationComputedMenu":
this.updateConfigurationComputedMenu$();
break;
case "surfMoComputedMenuText":
this.updateSurfMoComputedMenu$java_util_Map(this.modelInfo.get$O("moData"));
break;
case "systemMenu":
this.updateAboutSubmenu$();
break;
}
this.updateFileTypeDependentMenus$();
for (var i=this.Special.size$(); --i >= 0; ) this.updateSpecialMenuItem$org_jmol_api_SC(this.Special.get$I(i));

});

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
