(function(){var P$=Clazz.newPackage("org.jmol.popup"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','org.jmol.util.Logger','java.util.StringTokenizer','javajs.util.PT','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GenericSwingPopup", null, null, 'org.jmol.api.GenericMenuInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.helper=null;
this.strMenuStructure=null;
this.allowSignedFeatures=false;
this.isJS=false;
this.isApplet=false;
this.isSigned=false;
this.isWebGL=false;
this.thisx=0;
this.thisy=0;
this.isTainted=false;
this.menuName=null;
this.popupMenu=null;
this.thisPopup=null;
this.htCheckbox=null;
this.buttonGroup=null;
this.currentMenuItemId=null;
this.htMenus=null;
this.SignedOnly=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isTainted=true;
this.htCheckbox=Clazz.new_($I$(1));
this.htMenus=Clazz.new_($I$(1));
this.SignedOnly=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'initSwing$S$org_jmol_popup_PopupResource$O$Z$Z$Z', function (title, bundle, applet, isJS, isSigned, isWebGL) {
this.isJS=isJS;
this.isApplet=(applet != null );
this.isSigned=isSigned;
this.isWebGL=isWebGL;
this.allowSignedFeatures=(!this.isApplet || isSigned );
this.menuName=title;
this.popupMenu=this.helper.menuCreatePopup$S$O(title, applet);
this.thisPopup=this.popupMenu;
this.htMenus.put$TK$TV(title, this.popupMenu);
this.addMenuItems$S$S$javajs_awt_SC$org_jmol_popup_PopupResource("", title, this.popupMenu, bundle);
try {
this.jpiUpdateComputedMenus$();
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addMenuItems$S$S$javajs_awt_SC$org_jmol_popup_PopupResource', function (parentId, key, menu, popupResourceBundle) {
var id=parentId + "." + key ;
var value=popupResourceBundle.getStructure$S(key);
if ($I$(3).debugging) $I$(3).debug$S(id + " --- " + value );
if (value == null ) {
this.menuCreateItem$javajs_awt_SC$S$S$S(menu, "#" + key, "", "");
return;
}var st=Clazz.new_($I$(4).c$$S,[value]);
var item;
while (value.indexOf$S("@") >= 0){
var s="";
while (st.hasMoreTokens$())s += " " + ((item=st.nextToken$()).startsWith$S("@") ? popupResourceBundle.getStructure$S(item) : item);

value=s.substring$I(1);
st=Clazz.new_($I$(4).c$$S,[value]);
}
while (st.hasMoreTokens$()){
item=st.nextToken$();
if (!p$1.checkKey$S.apply(this, [item])) continue;
if ("-".equals$O(item)) {
this.menuAddSeparator$javajs_awt_SC(menu);
continue;
}var label=popupResourceBundle.getWord$S(item);
var newItem=null;
var script="";
var isCB=false;
label=this.appFixLabel$S(label == null  ? item : label);
if (label.equals$O("null")) {
continue;
}if (item.indexOf$S("Menu") >= 0) {
if (item.indexOf$S("more") < 0) this.helper.menuAddButtonGroup$javajs_awt_SC(null);
var subMenu=this.menuNewSubMenu$S$S(label, id + "." + item );
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, subMenu);
if (item.indexOf$S("Computed") < 0) this.addMenuItems$S$S$javajs_awt_SC$org_jmol_popup_PopupResource(id, item, subMenu, popupResourceBundle);
this.appCheckSpecialMenu$S$javajs_awt_SC$S(item, subMenu, label);
newItem=subMenu;
} else if (item.endsWith$S("Checkbox") || (isCB=(item.endsWith$S("CB") || item.endsWith$S("RD") )) ) {
script=popupResourceBundle.getStructure$S(item);
var basename=item.substring$I$I(0, item.length$() - (!isCB ? 8 : 2));
var isRadio=(isCB && item.endsWith$S("RD") );
if (script == null  || script.length$() == 0 && !isRadio  ) script="set " + basename + " T/F" ;
newItem=this.menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z(menu, label, basename + ":" + script , id + "." + item , false, isRadio);
p$1.rememberCheckbox$S$javajs_awt_SC.apply(this, [basename, newItem]);
if (isRadio) this.helper.menuAddButtonGroup$javajs_awt_SC(newItem);
} else {
script=popupResourceBundle.getStructure$S(item);
if (script == null ) script=item;
newItem=this.menuCreateItem$javajs_awt_SC$S$S$S(menu, label, script, id + "." + item );
}this.htMenus.put$TK$TV(item, newItem);
if (item.startsWith$S("SIGNED")) {
this.SignedOnly.addLast$TV(newItem);
if (!this.allowSignedFeatures) this.menuEnable$javajs_awt_SC$Z(newItem, false);
}this.appCheckItem$S$javajs_awt_SC(item, newItem);
}
});

Clazz.newMeth(C$, 'updateSignedAppletItems$', function () {
for (var i=this.SignedOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.SignedOnly.get$I(i), this.allowSignedFeatures);

});

Clazz.newMeth(C$, 'checkKey$S', function (key) {
return (key.indexOf$S(this.isApplet ? "JAVA" : "APPLET") < 0 && (!this.isWebGL || key.indexOf$S("NOGL") < 0 ) );
}, p$1);

Clazz.newMeth(C$, 'rememberCheckbox$S$javajs_awt_SC', function (key, checkboxMenuItem) {
this.htCheckbox.put$TK$TV(key + "::" + this.htCheckbox.size$() , checkboxMenuItem);
}, p$1);

Clazz.newMeth(C$, 'updateButton$javajs_awt_SC$S$S', function (b, entry, script) {
var ret=Clazz.array(String, -1, [entry]);
var icon=this.getEntryIcon$SA(ret);
entry=ret[0];
b.init$S$O$S$javajs_awt_SC(entry, icon, script, this.thisPopup);
this.isTainted=true;
});

Clazz.newMeth(C$, 'getEntryIcon$SA', function (ret) {
var entry=ret[0];
if (!entry.startsWith$S("<")) return null;
var pt=entry.indexOf$S(">");
ret[0]=entry.substring$I(pt + 1);
var fileName=entry.substring$I$I(1, pt);
return this.getImageIcon$S(fileName);
});

Clazz.newMeth(C$, 'addMenuItem$javajs_awt_SC$S', function (menuItem, entry) {
return this.menuCreateItem$javajs_awt_SC$S$S$S(menuItem, entry, "", null);
});

Clazz.newMeth(C$, 'menuSetLabel$javajs_awt_SC$S', function (m, entry) {
m.setText$S(entry);
this.isTainted=true;
});

Clazz.newMeth(C$, 'menuSetCheckBoxValue$javajs_awt_SC', function (source) {
var isSelected=source.isSelected$();
var what=source.getActionCommand$();
p$1.checkForCheckBoxScript$javajs_awt_SC$S$Z.apply(this, [source, what, isSelected]);
this.appUpdateSpecialCheckBoxValue$javajs_awt_SC$S$Z(source, what, isSelected);
this.isTainted=true;
}, p$1);

Clazz.newMeth(C$, 'menuClickCallback$javajs_awt_SC$S', function (source, script) {
this.processClickCallback$javajs_awt_SC$S(source, script);
});

Clazz.newMeth(C$, 'processClickCallback$javajs_awt_SC$S', function (source, script) {
this.appRestorePopupMenu$();
if (script == null  || script.length$() == 0 ) return;
if (script.equals$O("MAIN")) {
this.show$I$I$Z(this.thisx, this.thisy, true);
return;
}var id=this.menuGetId$javajs_awt_SC(source);
if (id != null ) {
script=this.appFixScript$S$S(id, script);
this.currentMenuItemId=id;
}this.appRunScript$S(script);
});

Clazz.newMeth(C$, 'menuCheckBoxCallback$javajs_awt_SC', function (source) {
this.appRestorePopupMenu$();
p$1.menuSetCheckBoxValue$javajs_awt_SC.apply(this, [source]);
var id=this.menuGetId$javajs_awt_SC(source);
if (id != null ) {
this.currentMenuItemId=id;
}});

Clazz.newMeth(C$, 'checkForCheckBoxScript$javajs_awt_SC$S$Z', function (item, what, TF) {
if (!item.isEnabled$()) return;
if (what.indexOf$S("##") < 0) {
var pt=what.indexOf$S(":");
if (pt < 0) {
$I$(3).error$S("check box " + item + " IS " + what );
return;
}var basename=what.substring$I$I(0, pt);
if (this.appIsSpecialCheckBox$javajs_awt_SC$S$S$Z(item, basename, what, TF)) return;
what=what.substring$I(pt + 1);
if ((pt=what.indexOf$S("|")) >= 0) what=(TF ? what.substring$I$I(0, pt) : what.substring$I(pt + 1)).trim$();
what=$I$(5).rep$S$S$S(what, "T/F", (TF ? " TRUE" : " FALSE"));
}this.appRunScript$S(what);
}, p$1);

Clazz.newMeth(C$, 'menuCreateItem$javajs_awt_SC$S$S$S', function (menu, entry, script, id) {
var item=this.helper.getMenuItem$S(entry);
item.addActionListener$O(this.helper);
return p$1.newMenuItem$javajs_awt_SC$javajs_awt_SC$S$S$S.apply(this, [item, menu, entry, script, id]);
});

Clazz.newMeth(C$, 'menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z', function (menu, entry, basename, id, state, isRadio) {
var jmi=(isRadio ? this.helper.getRadio$S(entry) : this.helper.getCheckBox$S(entry));
jmi.setSelected$Z(state);
jmi.addItemListener$O(this.helper);
return p$1.newMenuItem$javajs_awt_SC$javajs_awt_SC$S$S$S.apply(this, [jmi, menu, entry, basename, id]);
});

Clazz.newMeth(C$, 'menuAddSeparator$javajs_awt_SC', function (menu) {
menu.add$javajs_awt_SC(this.helper.getMenuItem$S(null));
this.isTainted=true;
});

Clazz.newMeth(C$, 'menuNewSubMenu$S$S', function (entry, id) {
var jm=this.helper.getMenu$S(entry);
this.updateButton$javajs_awt_SC$S$S(jm, entry, null);
jm.setName$S(id);
jm.setAutoscrolls$Z(true);
return jm;
});

Clazz.newMeth(C$, 'menuRemoveAll$javajs_awt_SC$I', function (menu, indexFrom) {
if (indexFrom <= 0) menu.removeAll$();
 else for (var i=menu.getComponentCount$(); --i >= indexFrom; ) menu.remove$I(i);

this.isTainted=true;
});

Clazz.newMeth(C$, 'newMenuItem$javajs_awt_SC$javajs_awt_SC$S$S$S', function (item, menu, text, script, id) {
this.updateButton$javajs_awt_SC$S$S(item, text, script);
if (id != null  && id.startsWith$S("Focus") ) {
item.addMouseListener$O(this.helper);
id=menu.getName$() + "." + id ;
}item.setName$S(id == null  ? menu.getName$() + "." : id);
p$1.menuAddItem$javajs_awt_SC$javajs_awt_SC.apply(this, [menu, item]);
return item;
}, p$1);

Clazz.newMeth(C$, 'setText$S$S', function (item, text) {
var m=this.htMenus.get$O(item);
if (m != null ) m.setText$S(text);
return m;
});

Clazz.newMeth(C$, 'menuAddItem$javajs_awt_SC$javajs_awt_SC', function (menu, item) {
menu.add$javajs_awt_SC(item);
this.isTainted=true;
}, p$1);

Clazz.newMeth(C$, 'menuAddSubMenu$javajs_awt_SC$javajs_awt_SC', function (menu, subMenu) {
p$1.menuAddItem$javajs_awt_SC$javajs_awt_SC.apply(this, [menu, subMenu]);
});

Clazz.newMeth(C$, 'menuEnable$javajs_awt_SC$Z', function (component, enable) {
if (component == null  || component.isEnabled$() == enable  ) return;
component.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'menuGetId$javajs_awt_SC', function (menu) {
return menu.getName$();
});

Clazz.newMeth(C$, 'menuSetAutoscrolls$javajs_awt_SC', function (menu) {
menu.setAutoscrolls$Z(true);
this.isTainted=true;
});

Clazz.newMeth(C$, 'menuGetListPosition$javajs_awt_SC', function (item) {
var p=item.getParent$();
var i;
for (i=p.getComponentCount$(); --i >= 0; ) if (this.helper.getSwingComponent$O(p.getComponent$I(i)) === item ) break;

return i;
});

Clazz.newMeth(C$, 'show$I$I$Z', function (x, y, doPopup) {
this.thisx=x;
this.thisy=y;
this.appUpdateForShow$();
p$1.updateCheckBoxesForShow.apply(this, []);
if (doPopup) this.menuShowPopup$javajs_awt_SC$I$I(this.popupMenu, this.thisx, this.thisy);
});

Clazz.newMeth(C$, 'updateCheckBoxesForShow', function () {
for (var entry, $entry = this.htCheckbox.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var item=entry.getValue$();
var basename=key.substring$I$I(0, key.indexOf$S(":"));
var b=this.appGetBooleanProperty$S(basename);
if (item.isSelected$() != b ) {
item.setSelected$Z(b);
this.isTainted=true;
}}
}, p$1);

Clazz.newMeth(C$, 'jpiGetMenuAsString$S', function (title) {
this.appUpdateForShow$();
var pt=title.indexOf$S("|");
if (pt >= 0) {
var type=title.substring$I(pt);
title=title.substring$I$I(0, pt);
if (type.indexOf$S("current") >= 0) {
var sb=Clazz.new_($I$(6));
var menu=this.htMenus.get$O(this.menuName);
p$1.menuGetAsText$javajs_util_SB$I$javajs_awt_SC$S.apply(this, [sb, 0, menu, "PopupMenu"]);
return sb.toString();
}}return this.appGetMenuAsString$S(title);
});

Clazz.newMeth(C$, 'menuGetAsText$javajs_util_SB$I$javajs_awt_SC$S', function (sb, level, menu, menuName) {
var name=menuName;
var subMenus=menu.getComponents$();
var flags=null;
var script=null;
var text=null;
var key="S";
for (var i=0; i < subMenus.length; i++) {
var m=this.helper.getSwingComponent$O(subMenus[i]);
var type=this.helper.getItemType$javajs_awt_SC(m);
switch (type) {
case 4:
key="M";
name=m.getName$();
flags="enabled:" + m.isEnabled$();
text=m.getText$();
script=null;
break;
case 0:
key="S";
flags=script=text=null;
break;
default:
key="I";
flags="enabled:" + m.isEnabled$();
if (type == 2 || type == 3 ) flags += ";checked:" + m.isSelected$();
script=this.appFixScript$S$S(m.getName$(), m.getActionCommand$());
name=m.getName$();
text=m.getText$();
break;
}
C$.addItemText$javajs_util_SB$C$I$S$S$S$S(sb, key, level, name, text, script, flags);
if (type == 2) p$1.menuGetAsText$javajs_util_SB$I$javajs_awt_SC$S.apply(this, [sb, level + 1, this.helper.getSwingComponent$O(m.getPopupMenu$()), name]);
}
}, p$1);

Clazz.newMeth(C$, 'addItemText$javajs_util_SB$C$I$S$S$S$S', function (sb, type, level, name, label, script, flags) {
sb.appendC$C(type).appendI$I(level).appendC$C("\t").append$S(name);
if (label == null ) {
sb.append$S(".\n");
return;
}sb.append$S("\t").append$S(label).append$S("\t").append$S(script == null  || script.length$() == 0  ? "-" : script).append$S("\t").append$S(flags).append$S("\n");
}, 1);

Clazz.newMeth(C$, 'convertToMegabytes$J', function (num) {
if (num <= 9223372036854251519) num+=524288;
return (((num/(1048576)|0))|0);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
