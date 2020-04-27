(function(){var P$=Clazz.newPackage("org.jmol.popup"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','org.jmol.util.Logger','java.util.StringTokenizer','javajs.util.PT','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GenericPopup", null, null, 'org.jmol.api.GenericMenuInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isTainted=true;
this.htCheckbox=Clazz.new_($I$(1,1));
this.htMenus=Clazz.new_($I$(1,1));
this.SignedOnly=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['allowSignedFeatures','isJS','isApplet','isSigned','isWebGL','isTainted','updatingForShow'],'I',['thisx','thisy'],'S',['strMenuStructure','menuName','currentMenuItemId'],'O',['helper','org.jmol.popup.PopupHelper','popupMenu','org.jmol.api.SC','+thisPopup','htCheckbox','java.util.Map','buttonGroup','java.lang.Object','htMenus','java.util.Map','SignedOnly','javajs.util.Lst']]]

Clazz.newMeth(C$, 'appCheckItem$S$org_jmol_api_SC', function (item, newMenu) {
});

Clazz.newMeth(C$, 'appCheckSpecialMenu$S$org_jmol_api_SC$S', function (item, subMenu, word) {
});

Clazz.newMeth(C$, 'initSwing$S$org_jmol_popup_PopupResource$O$Z$Z$Z', function (title, bundle, applet, isJS, isSigned, isWebGL) {
this.isJS=isJS;
this.isApplet=(applet != null );
this.isSigned=isSigned;
this.isWebGL=isWebGL;
this.allowSignedFeatures=(!this.isApplet || isSigned );
this.menuName=title;
this.popupMenu=this.helper.menuCreatePopup$S$O(title, applet);
this.thisPopup=this.popupMenu;
this.htMenus.put$O$O(title, this.popupMenu);
this.addMenuItems$S$S$org_jmol_api_SC$org_jmol_popup_PopupResource("", title, this.popupMenu, bundle);
try {
this.jpiUpdateComputedMenus$();
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addMenuItems$S$S$org_jmol_api_SC$org_jmol_popup_PopupResource', function (parentId, key, menu, popupResourceBundle) {
var id=parentId + "." + key ;
var value=popupResourceBundle.getStructure$S(key);
if ($I$(3).debugging) $I$(3).debug$S(id + " --- " + value );
if (value == null ) {
this.menuCreateItem$org_jmol_api_SC$S$S$S(menu, "#" + key, "", "");
return;
}var st=Clazz.new_($I$(4,1).c$$S,[value]);
var item;
while (value.indexOf$S("@") >= 0){
var s="";
while (st.hasMoreTokens$())s += " " + ((item=st.nextToken$()).startsWith$S("@") ? popupResourceBundle.getStructure$S(item) : item);

value=s.substring$I(1);
st=Clazz.new_($I$(4,1).c$$S,[value]);
}
while (st.hasMoreTokens$()){
item=st.nextToken$();
if (!p$1.checkKey$S.apply(this, [item])) continue;
if ("-".equals$O(item)) {
this.menuAddSeparator$org_jmol_api_SC(menu);
this.helper.menuAddButtonGroup$org_jmol_api_SC(null);
continue;
}var label=popupResourceBundle.getWord$S(item);
var newItem=null;
var script="";
var isCB=false;
label=this.appFixLabel$S(label == null  ? item : label);
if (label.equals$O("null")) {
continue;
}if (item.indexOf$S("Menu") >= 0) {
if (item.indexOf$S("more") < 0) this.helper.menuAddButtonGroup$org_jmol_api_SC(null);
var subMenu=this.menuNewSubMenu$S$S(label, id + "." + item );
this.menuAddSubMenu$org_jmol_api_SC$org_jmol_api_SC(menu, subMenu);
if (item.indexOf$S("Computed") < 0) this.addMenuItems$S$S$org_jmol_api_SC$org_jmol_popup_PopupResource(id, item, subMenu, popupResourceBundle);
this.appCheckSpecialMenu$S$org_jmol_api_SC$S(item, subMenu, label);
newItem=subMenu;
} else if (item.endsWith$S("Checkbox") || (isCB=(item.endsWith$S("CB") || item.endsWith$S("RD") )) ) {
script=popupResourceBundle.getStructure$S(item);
var basename=item.substring$I$I(0, item.length$() - (!isCB ? 8 : 2));
var isRadio=(isCB && item.endsWith$S("RD") );
if (script == null  || script.length$() == 0 && !isRadio  ) script="set " + basename + " T/F" ;
newItem=this.menuCreateCheckboxItem$org_jmol_api_SC$S$S$S$Z$Z(menu, label, basename + ":" + script , id + "." + item , false, isRadio);
p$1.rememberCheckbox$S$org_jmol_api_SC.apply(this, [basename, newItem]);
if (isRadio) this.helper.menuAddButtonGroup$org_jmol_api_SC(newItem);
} else {
script=popupResourceBundle.getStructure$S(item);
if (script == null ) script=item;
newItem=this.menuCreateItem$org_jmol_api_SC$S$S$S(menu, label, script, id + "." + item );
}this.htMenus.put$O$O(item, newItem);
if (item.startsWith$S("SIGNED")) {
this.SignedOnly.addLast$O(newItem);
if (!this.allowSignedFeatures) this.menuEnable$org_jmol_api_SC$Z(newItem, false);
}this.appCheckItem$S$org_jmol_api_SC(item, newItem);
}
});

Clazz.newMeth(C$, 'updateSignedAppletItems$', function () {
for (var i=this.SignedOnly.size$(); --i >= 0; ) this.menuEnable$org_jmol_api_SC$Z(this.SignedOnly.get$I(i), this.allowSignedFeatures);

});

Clazz.newMeth(C$, 'checkKey$S', function (key) {
return (key.indexOf$S(this.isApplet ? "JAVA" : "APPLET") < 0 && (!this.isWebGL || key.indexOf$S("NOGL") < 0 ) );
}, p$1);

Clazz.newMeth(C$, 'rememberCheckbox$S$org_jmol_api_SC', function (key, checkboxMenuItem) {
this.htCheckbox.put$O$O(key + "::" + this.htCheckbox.size$() , checkboxMenuItem);
}, p$1);

Clazz.newMeth(C$, 'updateButton$org_jmol_api_SC$S$S', function (b, entry, script) {
var ret=Clazz.array(String, -1, [entry]);
var icon=this.getEntryIcon$SA(ret);
entry=ret[0];
b.init$S$O$S$org_jmol_api_SC(entry, icon, script, this.thisPopup);
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

Clazz.newMeth(C$, 'addMenuItem$org_jmol_api_SC$S', function (menuItem, entry) {
return this.menuCreateItem$org_jmol_api_SC$S$S$S(menuItem, entry, "", null);
});

Clazz.newMeth(C$, 'menuSetLabel$org_jmol_api_SC$S', function (m, entry) {
m.setText$S(entry);
this.isTainted=true;
});

Clazz.newMeth(C$, 'menuClickCallback$org_jmol_api_SC$S', function (source, script) {
this.doMenuClickCallback$org_jmol_api_SC$S(source, script);
});

Clazz.newMeth(C$, 'doMenuClickCallback$org_jmol_api_SC$S', function (source, script) {
this.appRestorePopupMenu$();
if (script == null  || script.length$() == 0 ) return;
if (script.equals$O("MAIN")) {
this.show$I$I$Z(this.thisx, this.thisy, true);
return;
}var id=this.menuGetId$org_jmol_api_SC(source);
if (id != null ) {
script=this.getScriptForCallback$org_jmol_api_SC$S$S(source, id, script);
this.currentMenuItemId=id;
}if (script != null ) this.appRunScript$S(script);
});

Clazz.newMeth(C$, 'menuCheckBoxCallback$org_jmol_api_SC', function (source) {
this.doMenuCheckBoxCallback$org_jmol_api_SC(source);
});

Clazz.newMeth(C$, 'doMenuCheckBoxCallback$org_jmol_api_SC', function (source) {
this.appRestorePopupMenu$();
var isSelected=source.isSelected$();
var what=source.getActionCommand$();
p$1.runCheckBoxScript$org_jmol_api_SC$S$Z.apply(this, [source, what, isSelected]);
this.appUpdateSpecialCheckBoxValue$org_jmol_api_SC$S$Z(source, what, isSelected);
this.isTainted=true;
var id=this.menuGetId$org_jmol_api_SC(source);
if (id != null ) {
this.currentMenuItemId=id;
}});

Clazz.newMeth(C$, 'runCheckBoxScript$org_jmol_api_SC$S$Z', function (item, what, TF) {
if (!item.isEnabled$()) return;
if (what.indexOf$S("##") < 0) {
var pt=what.indexOf$S(":");
if (pt < 0) {
$I$(3).error$S("check box " + item + " IS " + what );
return;
}var basename=what.substring$I$I(0, pt);
if (this.appRunSpecialCheckBox$org_jmol_api_SC$S$S$Z(item, basename, what, TF)) return;
what=what.substring$I(pt + 1);
if ((pt=what.indexOf$S("|")) >= 0) what=(TF ? what.substring$I$I(0, pt) : what.substring$I(pt + 1)).trim$();
what=(function(a,f){return f.apply(null,a)})([what, "T/F", (TF ? " TRUE" : " FALSE")],$I$(5).rep$S$S$S);
}this.appRunScript$S(what);
}, p$1);

Clazz.newMeth(C$, 'menuCreateItem$org_jmol_api_SC$S$S$S', function (menu, entry, script, id) {
var item=this.helper.getMenuItem$S(entry);
item.addActionListener$O(this.helper);
return p$1.newMenuItem$org_jmol_api_SC$org_jmol_api_SC$S$S$S.apply(this, [item, menu, entry, script, id]);
});

Clazz.newMeth(C$, 'menuCreateCheckboxItem$org_jmol_api_SC$S$S$S$Z$Z', function (menu, entry, basename, id, state, isRadio) {
var jmi=(isRadio ? this.helper.getRadio$S(entry) : this.helper.getCheckBox$S(entry));
jmi.setSelected$Z(state);
jmi.addItemListener$O(this.helper);
return p$1.newMenuItem$org_jmol_api_SC$org_jmol_api_SC$S$S$S.apply(this, [jmi, menu, entry, basename, id]);
});

Clazz.newMeth(C$, 'menuAddSeparator$org_jmol_api_SC', function (menu) {
menu.add$org_jmol_api_SC(this.helper.getMenuItem$S(null));
this.isTainted=true;
});

Clazz.newMeth(C$, 'menuNewSubMenu$S$S', function (entry, id) {
var jm=this.helper.getMenu$S(entry);
jm.addMouseListener$O(this.helper);
this.updateButton$org_jmol_api_SC$S$S(jm, entry, null);
jm.setName$S(id);
jm.setAutoscrolls$Z(true);
return jm;
});

Clazz.newMeth(C$, 'menuRemoveAll$org_jmol_api_SC$I', function (menu, indexFrom) {
if (indexFrom <= 0) menu.removeAll$();
 else for (var i=menu.getComponentCount$(); --i >= indexFrom; ) menu.remove$I(i);

this.isTainted=true;
});

Clazz.newMeth(C$, 'newMenuItem$org_jmol_api_SC$org_jmol_api_SC$S$S$S', function (item, menu, text, script, id) {
this.updateButton$org_jmol_api_SC$S$S(item, text, script);
item.addMouseListener$O(this.helper);
item.setName$S(id == null  ? menu.getName$() + "." : id);
p$1.menuAddItem$org_jmol_api_SC$org_jmol_api_SC.apply(this, [menu, item]);
return item;
}, p$1);

Clazz.newMeth(C$, 'setText$S$S', function (item, text) {
var m=this.htMenus.get$O(item);
if (m != null ) m.setText$S(text);
return m;
});

Clazz.newMeth(C$, 'menuAddItem$org_jmol_api_SC$org_jmol_api_SC', function (menu, item) {
menu.add$org_jmol_api_SC(item);
this.isTainted=true;
}, p$1);

Clazz.newMeth(C$, 'menuAddSubMenu$org_jmol_api_SC$org_jmol_api_SC', function (menu, subMenu) {
subMenu.addMouseListener$O(this.helper);
p$1.menuAddItem$org_jmol_api_SC$org_jmol_api_SC.apply(this, [menu, subMenu]);
});

Clazz.newMeth(C$, 'menuEnable$org_jmol_api_SC$Z', function (component, enable) {
if (component == null  || component.isEnabled$() == enable  ) return;
component.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'menuGetId$org_jmol_api_SC', function (menu) {
return menu.getName$();
});

Clazz.newMeth(C$, 'menuSetAutoscrolls$org_jmol_api_SC', function (menu) {
menu.setAutoscrolls$Z(true);
this.isTainted=true;
});

Clazz.newMeth(C$, 'menuGetListPosition$org_jmol_api_SC', function (item) {
var p=item.getParent$();
var i;
for (i=p.getComponentCount$(); --i >= 0; ) if (this.helper.getSwingComponent$O(p.getComponent$I(i)) === item ) break;

return i;
});

Clazz.newMeth(C$, 'show$I$I$Z', function (x, y, doPopup) {
this.appUpdateForShow$();
p$1.updateCheckBoxesForShow.apply(this, []);
if (doPopup) this.menuShowPopup$org_jmol_api_SC$I$I(this.popupMenu, this.thisx, this.thisy);
});

Clazz.newMeth(C$, 'updateCheckBoxesForShow', function () {
for (var entry, $entry = this.htCheckbox.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var item=entry.getValue$();
var basename=key.substring$I$I(0, key.indexOf$S(":"));
var b=this.appGetBooleanProperty$S(basename);
this.updatingForShow=true;
if (item.isSelected$() != b ) {
item.setSelected$Z(b);
this.isTainted=true;
}this.updatingForShow=false;
}
}, p$1);

Clazz.newMeth(C$, 'jpiGetMenuAsString$S', function (title) {
this.appUpdateForShow$();
var pt=title.indexOf$S("|");
if (pt >= 0) {
var type=title.substring$I(pt);
title=title.substring$I$I(0, pt);
if (type.indexOf$S("current") >= 0) {
var sb=Clazz.new_($I$(6,1));
var menu=this.htMenus.get$O(this.menuName);
p$1.menuGetAsText$javajs_util_SB$I$org_jmol_api_SC$S.apply(this, [sb, 0, menu, "PopupMenu"]);
return sb.toString();
}}return this.appGetMenuAsString$S(title);
});

Clazz.newMeth(C$, 'appGetMenuAsString$S', function (title) {
return null;
});

Clazz.newMeth(C$, 'menuGetAsText$javajs_util_SB$I$org_jmol_api_SC$S', function (sb, level, menu, menuName) {
var name=menuName;
var subMenus=menu.getComponents$();
var flags=null;
var script=null;
var text=null;
var key="S";
for (var i=0; i < subMenus.length; i++) {
var source=this.helper.getSwingComponent$O(subMenus[i]);
var type=this.helper.getItemType$org_jmol_api_SC(source);
switch (type) {
case 4:
key="M";
name=source.getName$();
flags="enabled:" + source.isEnabled$();
text=source.getText$();
script=null;
break;
case 0:
key="S";
flags=script=text=null;
break;
default:
key="I";
flags="enabled:" + source.isEnabled$();
if (type == 2 || type == 3 ) flags += ";checked:" + source.isSelected$();
script=this.getScriptForCallback$org_jmol_api_SC$S$S(source, source.getName$(), source.getActionCommand$());
name=source.getName$();
text=source.getText$();
break;
}
C$.addItemText$javajs_util_SB$C$I$S$S$S$S(sb, key, level, name, text, script, flags);
if (type == 2) p$1.menuGetAsText$javajs_util_SB$I$org_jmol_api_SC$S.apply(this, [sb, level + 1, this.helper.getSwingComponent$O(source.getPopupMenu$()), name]);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:14 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
