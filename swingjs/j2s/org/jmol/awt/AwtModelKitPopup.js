(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'org.jmol.awt.AwtPopupHelper','javax.swing.ImageIcon']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AwtModelKitPopup", null, 'org.jmol.modelkit.ModelKitPopup');

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
c.jm.addMenuListener$javax_swing_event_MenuListener(((P$.AwtModelKitPopup$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AwtModelKitPopup$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
if (this.$finals$.c.deferred) {
this.$finals$.c.deferred=false;
if (this.$finals$.item.indexOf$S("Computed") < 0) this.b$['org.jmol.popup.GenericPopup'].addMenuItems$S$S$org_jmol_api_SC$org_jmol_popup_PopupResource.apply(this.b$['org.jmol.popup.GenericPopup'], [this.$finals$.id, this.$finals$.item, this.$finals$.subMenu, this.$finals$.popupResourceBundle]);
this.b$['org.jmol.awt.AwtModelKitPopup'].updateAwtMenus$S.apply(this.b$['org.jmol.awt.AwtModelKitPopup'], [this.$finals$.item]);
}});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.AwtModelKitPopup$1.$init$,[this, {subMenu:subMenu,popupResourceBundle:popupResourceBundle,item:item,id:id,c:c}])));
});

Clazz.newMeth(C$, 'updateAwtMenus$S', function (item) {
System.out.println$S("Awtmodelkitpopup " + item);
switch (item) {
case "xtalOp!PersistMenu":
this.lastModelSet=null;
this.jpiUpdateComputedMenus$();
break;
default:
this.updateOperatorMenu$();
break;
}
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

Clazz.newMeth(C$, 'getImageIcon$S', function (fileName) {
var imageName="org/jmol/modelkit/images/" + fileName;
var imageUrl=this.getClass$().getClassLoader$().getResource$S(imageName);
return (imageUrl == null  ? null : Clazz.new_($I$(2,1).c$$java_net_URL,[imageUrl]));
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
