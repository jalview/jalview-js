(function(){var P$=Clazz.newPackage("org.jmol.popup"),p$1={},I$=[[0,'java.util.Properties','javajs.util.Lst','org.jmol.viewer.Viewer','javajs.util.PT','org.jmol.popup.MainPopupResourceBundle','Boolean','java.util.Hashtable','org.jmol.i18n.GT','org.jmol.util.Elements','org.jmol.modelset.Group','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolGenericPopup", null, 'org.jmol.popup.GenericSwingPopup');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.updateMode=0;
this.menuText=null;
this.frankPopup=null;
this.nFrankList=0;
this.itemMax=0;
this.titleWidthMax=0;
this.nullModelSetName=null;
this.modelSetName=null;
this.modelSetFileName=null;
this.modelSetRoot=null;
this.currentFrankId=null;
this.configurationSelected=null;
this.altlocs=null;
this.frankList=null;
this.modelSetInfo=null;
this.modelInfo=null;
this.NotPDB=null;
this.PDBOnly=null;
this.FileUnitOnly=null;
this.FileMolOnly=null;
this.UnitcellOnly=null;
this.SingleModelOnly=null;
this.FramesOnly=null;
this.VibrationOnly=null;
this.Special=null;
this.SymmetryOnly=null;
this.ChargesOnly=null;
this.TemperatureOnly=null;
this.fileHasUnitCell=false;
this.haveBFactors=false;
this.haveCharges=false;
this.isLastFrame=false;
this.isMultiConfiguration=false;
this.isMultiFrame=false;
this.isPDB=false;
this.hasSymmetry=false;
this.isUnitCell=false;
this.isVibration=false;
this.isZapped=false;
this.modelIndex=0;
this.modelCount=0;
this.ac=0;
this.group3List=null;
this.group3Counts=null;
this.cnmrPeaks=null;
this.hnmrPeaks=null;
this.noZapped=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.menuText=Clazz.new_($I$(1));
this.nFrankList=0;
this.itemMax=25;
this.titleWidthMax=20;
this.currentFrankId=null;
this.configurationSelected="";
this.frankList=Clazz.array(java.lang.Object, [10, null]);
this.NotPDB=Clazz.new_($I$(2));
this.PDBOnly=Clazz.new_($I$(2));
this.FileUnitOnly=Clazz.new_($I$(2));
this.FileMolOnly=Clazz.new_($I$(2));
this.UnitcellOnly=Clazz.new_($I$(2));
this.SingleModelOnly=Clazz.new_($I$(2));
this.FramesOnly=Clazz.new_($I$(2));
this.VibrationOnly=Clazz.new_($I$(2));
this.Special=Clazz.new_($I$(2));
this.SymmetryOnly=Clazz.new_($I$(2));
this.ChargesOnly=Clazz.new_($I$(2));
this.TemperatureOnly=Clazz.new_($I$(2));
this.noZapped=Clazz.array(String, -1, ["surfaceMenu", "measureMenu", "pickingMenu", "computationMenu", "SIGNEDJAVAcaptureMenuSPECIAL"]);
}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_viewer_Viewer$org_jmol_popup_PopupResource$S', function (vwr, bundle, title) {
this.vwr=vwr;
this.initSwing$S$org_jmol_popup_PopupResource$O$Z$Z$Z(title, bundle, vwr.html5Applet, vwr.isJSNoAWT, vwr.getBooleanProperty$S("_signedApplet"), $I$(3).isWebGL);
});

Clazz.newMeth(C$, 'jpiDispose$', function () {
this.helper.menuClearListeners$javajs_awt_SC(this.popupMenu);
this.helper.menuClearListeners$javajs_awt_SC(this.frankPopup);
this.popupMenu=this.frankPopup=this.thisPopup=null;
});

Clazz.newMeth(C$, 'jpiGetMenuAsObject$', function () {
return this.popupMenu;
});

Clazz.newMeth(C$, 'jpiShow$I$I', function (x, y) {
if (!this.vwr.haveDisplay) return;
this.show$I$I$Z(x, y, false);
if (x < 0) {
p$1.getViewerData.apply(this, []);
p$1.setFrankMenu$S.apply(this, [this.currentMenuItemId]);
this.thisx=-x - 50;
if (this.nFrankList > 1) {
this.thisy=y - this.nFrankList * 20;
this.menuShowPopup$javajs_awt_SC$I$I(this.frankPopup, this.thisx, this.thisy);
return;
}}this.appRestorePopupMenu$();
this.menuShowPopup$javajs_awt_SC$I$I(this.popupMenu, this.thisx, this.thisy);
});

Clazz.newMeth(C$, 'jpiUpdateComputedMenus$', function () {
if (this.updateMode == -1) return;
this.isTainted=true;
this.updateMode=0;
p$1.getViewerData.apply(this, []);
p$1.updateSelectMenu.apply(this, []);
p$1.updateFileMenu.apply(this, []);
p$1.updateElementsComputedMenu$javajs_util_BS.apply(this, [this.vwr.getElementsPresentBitSet$I(this.modelIndex)]);
p$1.updateHeteroComputedMenu$java_util_Map.apply(this, [this.vwr.ms.getHeteroList$I(this.modelIndex)]);
p$1.updateSurfMoComputedMenu$java_util_Map.apply(this, [this.modelInfo.get$O("moData")]);
p$1.updateFileTypeDependentMenus.apply(this, []);
p$1.updatePDBComputedMenus.apply(this, []);
this.updateMode=1;
p$1.updateConfigurationComputedMenu.apply(this, []);
p$1.updateSYMMETRYComputedMenus.apply(this, []);
p$1.updateFRAMESbyModelComputedMenu.apply(this, []);
p$1.updateModelSetComputedMenu.apply(this, []);
p$1.updateLanguageSubmenu.apply(this, []);
p$1.updateAboutSubmenu.apply(this, []);
});

Clazz.newMeth(C$, 'appCheckItem$S$javajs_awt_SC', function (item, newMenu) {
if (item.indexOf$S("!PDB") >= 0) {
this.NotPDB.addLast$TV(newMenu);
} else if (item.indexOf$S("PDB") >= 0) {
this.PDBOnly.addLast$TV(newMenu);
}if (item.indexOf$S("CHARGE") >= 0) {
this.ChargesOnly.addLast$TV(newMenu);
} else if (item.indexOf$S("BFACTORS") >= 0) {
this.TemperatureOnly.addLast$TV(newMenu);
} else if (item.indexOf$S("UNITCELL") >= 0) {
this.UnitcellOnly.addLast$TV(newMenu);
} else if (item.indexOf$S("FILEUNIT") >= 0) {
this.FileUnitOnly.addLast$TV(newMenu);
} else if (item.indexOf$S("FILEMOL") >= 0) {
this.FileMolOnly.addLast$TV(newMenu);
}if (item.indexOf$S("!FRAMES") >= 0) {
this.SingleModelOnly.addLast$TV(newMenu);
} else if (item.indexOf$S("FRAMES") >= 0) {
this.FramesOnly.addLast$TV(newMenu);
}if (item.indexOf$S("VIBRATION") >= 0) {
this.VibrationOnly.addLast$TV(newMenu);
} else if (item.indexOf$S("SYMMETRY") >= 0) {
this.SymmetryOnly.addLast$TV(newMenu);
}if (item.indexOf$S("SPECIAL") >= 0) this.Special.addLast$TV(newMenu);
});

Clazz.newMeth(C$, 'appFixLabel$S', function (label) {
return label;
});

Clazz.newMeth(C$, 'appFixScript$S$S', function (id, script) {
var pt;
if (script == "" || id.endsWith$S("Checkbox") ) return script;
if (script.indexOf$S("SELECT") == 0) {
return "select thisModel and (" + script.substring$I(6) + ")" ;
}if ((pt=id.lastIndexOf$S("[")) >= 0) {
id=id.substring$I(pt + 1);
if ((pt=id.indexOf$S("]")) >= 0) id=id.substring$I$I(0, pt);
id=id.replace$C$C("_", " ");
if (script.indexOf$S("[]") < 0) script="[] " + script;
script=script.replace$C$C("_", " ");
return $I$(4).rep$S$S$S(script, "[]", id);
} else if (script.indexOf$S("?FILEROOT?") >= 0) {
script=$I$(4).rep$S$S$S(script, "FILEROOT?", this.modelSetRoot);
} else if (script.indexOf$S("?FILE?") >= 0) {
script=$I$(4).rep$S$S$S(script, "FILE?", this.modelSetFileName);
} else if (script.indexOf$S("?PdbId?") >= 0) {
script=$I$(4).rep$S$S$S(script, "PdbId?", "=xxxx");
}return script;
});

Clazz.newMeth(C$, 'appGetBooleanProperty$S', function (name) {
return this.vwr.getBooleanProperty$S(name);
});

Clazz.newMeth(C$, 'appGetMenuAsString$S', function (title) {
return (Clazz.new_($I$(5).c$$S$java_util_Properties,[this.strMenuStructure, null])).getMenuAsText$S(title);
});

Clazz.newMeth(C$, 'appIsSpecialCheckBox$javajs_awt_SC$S$S$Z', function (item, basename, what, TF) {
if (this.appGetBooleanProperty$S(basename) == TF ) return true;
if (!basename.endsWith$S("P!")) return false;
if (basename.indexOf$S("??") >= 0) {
what=this.menuSetCheckBoxOption$javajs_awt_SC$S$S(item, basename, what);
} else {
if (!TF) return true;
what="set picking " + basename.substring$I$I(0, basename.length$() - 2);
}this.appRunScript$S(what);
return true;
});

Clazz.newMeth(C$, 'appRestorePopupMenu$', function () {
this.thisPopup=this.popupMenu;
if (this.vwr.isJSNoAWT || this.nFrankList < 2 ) return;
for (var i=this.nFrankList; --i > 0; ) {
var f=this.frankList[i];
this.helper.menuInsertSubMenu$javajs_awt_SC$javajs_awt_SC$I(f[0], f[1], (f[2]).intValue$());
}
this.nFrankList=1;
});

Clazz.newMeth(C$, 'appRunScript$S', function (script) {
this.vwr.evalStringQuiet$S(script);
});

Clazz.newMeth(C$, 'appUpdateSpecialCheckBoxValue$javajs_awt_SC$S$Z', function (item, what, TF) {
if (what.indexOf$S("#CONFIG") >= 0) {
this.configurationSelected=what;
p$1.updateConfigurationComputedMenu.apply(this, []);
p$1.updateModelSetComputedMenu.apply(this, []);
}});

Clazz.newMeth(C$, 'setFrankMenu$S', function (id) {
if (this.currentFrankId != null  && this.currentFrankId == id  && this.nFrankList > 0 ) return;
if (this.frankPopup == null ) this.frankPopup=this.helper.menuCreatePopup$S$O("Frank", this.vwr.html5Applet);
this.thisPopup=this.frankPopup;
this.menuRemoveAll$javajs_awt_SC$I(this.frankPopup, 0);
this.menuCreateItem$javajs_awt_SC$S$S$S(this.frankPopup, p$1.getMenuText$S.apply(this, ["mainMenuText"]), "MAIN", "");
this.currentFrankId=id;
this.nFrankList=0;
this.frankList[this.nFrankList++]=Clazz.array(java.lang.Object, -1, [null, null, null]);
if (id != null ) for (var i=id.indexOf$S$I(".", 2) + 1; ; ) {
var iNew=id.indexOf$S$I(".", i);
if (iNew < 0) break;
var menu=this.htMenus.get$O(id.substring$I$I(i, iNew));
this.frankList[this.nFrankList++]=Clazz.array(java.lang.Object, -1, [menu.getParent$(), menu, Integer.valueOf$I(this.vwr.isJSNoAWT ? 0 : this.menuGetListPosition$javajs_awt_SC(menu))]);
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(this.frankPopup, menu);
i=iNew + 1;
}
this.thisPopup=this.popupMenu;
}, p$1);

Clazz.newMeth(C$, 'checkBoolean$S', function (key) {
return (this.modelSetInfo != null  && this.modelSetInfo.get$O(key) === $I$(6).TRUE  );
}, p$1);

Clazz.newMeth(C$, 'getViewerData', function () {
this.modelSetName=this.vwr.ms.modelSetName;
this.modelSetFileName=this.vwr.getModelSetFileName$();
var i=this.modelSetFileName.lastIndexOf$S(".");
this.isZapped=("zapped".equals$O(this.modelSetName));
if (this.isZapped || "string".equals$O(this.modelSetFileName) || "String[]".equals$O(this.modelSetFileName)  ) this.modelSetFileName="";
this.modelSetRoot=this.modelSetFileName.substring$I$I(0, i < 0 ? this.modelSetFileName.length$() : i);
if (this.modelSetRoot.length$() == 0) this.modelSetRoot="Jmol";
this.modelIndex=this.vwr.am.cmi;
this.modelCount=this.vwr.ms.mc;
this.ac=this.vwr.ms.getAtomCountInModel$I(this.modelIndex);
this.modelSetInfo=this.vwr.getModelSetAuxiliaryInfo$();
this.modelInfo=this.vwr.ms.getModelAuxiliaryInfo$I(this.modelIndex);
if (this.modelInfo == null ) this.modelInfo=Clazz.new_($I$(7));
this.isPDB=p$1.checkBoolean$S.apply(this, ["isPDB"]);
this.isMultiFrame=(this.modelCount > 1);
this.hasSymmetry=this.modelInfo.containsKey$O("hasSymmetry");
this.isUnitCell=this.modelInfo.containsKey$O("unitCellParams");
this.fileHasUnitCell=(this.isPDB && this.isUnitCell  || p$1.checkBoolean$S.apply(this, ["fileHasUnitCell"]) );
this.isLastFrame=(this.modelIndex == this.modelCount - 1);
this.altlocs=this.vwr.ms.getAltLocListInModel$I(this.modelIndex);
this.isMultiConfiguration=(this.altlocs.length$() > 0);
this.isVibration=(this.vwr.modelHasVibrationVectors$I(this.modelIndex));
this.haveCharges=(this.vwr.ms.getPartialCharges$() != null );
this.haveBFactors=(this.vwr.getBooleanProperty$S("haveBFactors"));
this.cnmrPeaks=this.modelInfo.get$O("jdxAtomSelect_13CNMR");
this.hnmrPeaks=this.modelInfo.get$O("jdxAtomSelect_1HNMR");
}, p$1);

Clazz.newMeth(C$, 'appCheckSpecialMenu$S$javajs_awt_SC$S', function (item, subMenu, word) {
if ("modelSetMenu".equals$O(item)) {
this.nullModelSetName=word;
this.menuEnable$javajs_awt_SC$Z(subMenu, false);
}});

Clazz.newMeth(C$, 'appUpdateForShow$', function () {
if (this.updateMode == -1) return;
this.isTainted=true;
p$1.getViewerData.apply(this, []);
this.updateMode=2;
p$1.updateSelectMenu.apply(this, []);
p$1.updateSpectraMenu.apply(this, []);
p$1.updateFRAMESbyModelComputedMenu.apply(this, []);
p$1.updateSceneComputedMenu.apply(this, []);
p$1.updateModelSetComputedMenu.apply(this, []);
p$1.updateAboutSubmenu.apply(this, []);
for (var i=this.Special.size$(); --i >= 0; ) p$1.updateSpecialMenuItem$javajs_awt_SC.apply(this, [this.Special.get$I(i)]);

});

Clazz.newMeth(C$, 'updateFileMenu', function () {
var menu=this.htMenus.get$O("fileMenu");
if (menu == null ) return;
var text=p$1.getMenuText$S.apply(this, ["writeFileTextVARIABLE"]);
menu=this.htMenus.get$O("writeFileTextVARIABLE");
var ignore=(this.modelSetFileName.equals$O("zapped") || this.modelSetFileName.equals$O("") );
if (ignore) {
this.menuSetLabel$javajs_awt_SC$S(menu, "");
this.menuEnable$javajs_awt_SC$Z(menu, false);
} else {
this.menuSetLabel$javajs_awt_SC$S(menu, $I$(8).o$S$O($I$(8).$$S(text), this.modelSetFileName));
this.menuEnable$javajs_awt_SC$Z(menu, true);
}}, p$1);

Clazz.newMeth(C$, 'getMenuText$S', function (key) {
var str=this.menuText.getProperty$S(key);
return (str == null  ? key : str);
}, p$1);

Clazz.newMeth(C$, 'updateSelectMenu', function () {
var menu=this.htMenus.get$O("selectMenuText");
if (menu == null ) return;
this.menuEnable$javajs_awt_SC$Z(menu, this.ac != 0);
this.menuSetLabel$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["selectMenuText", this.vwr.slm.getSelectionCount$()]));
}, p$1);

Clazz.newMeth(C$, 'updateElementsComputedMenu$javajs_util_BS', function (elementsPresentBitSet) {
var menu=this.htMenus.get$O("elementsComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuEnable$javajs_awt_SC$Z(menu, false);
if (elementsPresentBitSet == null ) return;
for (var i=elementsPresentBitSet.nextSetBit$I(0); i >= 0; i=elementsPresentBitSet.nextSetBit$I(i + 1)) {
var elementName=$I$(9).elementNameFromNumber$I(i);
var elementSymbol=$I$(9).elementSymbolFromNumber$I(i);
var entryName=elementSymbol + " - " + elementName ;
this.menuCreateItem$javajs_awt_SC$S$S$S(menu, entryName, "SELECT " + elementName, null);
}
for (var i=4; i < $I$(9).altElementMax; ++i) {
var n=$I$(9).elementNumberMax + i;
if (elementsPresentBitSet.get$I(n)) {
n=$I$(9).altElementNumberFromIndex$I(i);
var elementName=$I$(9).elementNameFromNumber$I(n);
var elementSymbol=$I$(9).elementSymbolFromNumber$I(n);
var entryName=elementSymbol + " - " + elementName ;
this.menuCreateItem$javajs_awt_SC$S$S$S(menu, entryName, "SELECT " + elementName, null);
}}
this.menuEnable$javajs_awt_SC$Z(menu, true);
}, p$1);

Clazz.newMeth(C$, 'updateSpectraMenu', function () {
var menuh=this.htMenus.get$O("hnmrMenu");
var menuc=this.htMenus.get$O("cnmrMenu");
if (menuh != null ) this.menuRemoveAll$javajs_awt_SC$I(menuh, 0);
if (menuc != null ) this.menuRemoveAll$javajs_awt_SC$I(menuc, 0);
var menu=this.htMenus.get$O("spectraMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
var isOK=!!(p$1.setSpectraMenu$javajs_awt_SC$javajs_util_Lst.apply(this, [menuh, this.hnmrPeaks]) | p$1.setSpectraMenu$javajs_awt_SC$javajs_util_Lst.apply(this, [menuc, this.cnmrPeaks]));
if (isOK) {
if (menuh != null ) this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, menuh);
if (menuc != null ) this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, menuc);
}this.menuEnable$javajs_awt_SC$Z(menu, isOK);
}, p$1);

Clazz.newMeth(C$, 'setSpectraMenu$javajs_awt_SC$javajs_util_Lst', function (menu, peaks) {
if (menu == null ) return false;
this.menuEnable$javajs_awt_SC$Z(menu, false);
var n=(peaks == null  ? 0 : peaks.size$());
if (n == 0) return false;
for (var i=0; i < n; i++) {
var peak=peaks.get$I(i);
var title=$I$(4).getQuotedAttribute$S$S(peak, "title");
var atoms=$I$(4).getQuotedAttribute$S$S(peak, "atoms");
if (atoms != null ) this.menuCreateItem$javajs_awt_SC$S$S$S(menu, title, "select visible & (@" + $I$(4).rep$S$S$S(atoms, ",", " or @") + ")" , "Focus" + i);
}
this.menuEnable$javajs_awt_SC$Z(menu, true);
return true;
}, p$1);

Clazz.newMeth(C$, 'updateHeteroComputedMenu$java_util_Map', function (htHetero) {
var menu=this.htMenus.get$O("PDBheteroComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuEnable$javajs_awt_SC$Z(menu, false);
if (htHetero == null ) return;
var n=0;
for (var hetero, $hetero = htHetero.entrySet$().iterator$(); $hetero.hasNext$()&&((hetero=($hetero.next$())),1);) {
var heteroCode=hetero.getKey$();
var heteroName=hetero.getValue$();
if (heteroName.length$() > 20) heteroName=heteroName.substring$I$I(0, 20) + "...";
var entryName=heteroCode + " - " + heteroName ;
this.menuCreateItem$javajs_awt_SC$S$S$S(menu, entryName, "SELECT [" + heteroCode + "]" , null);
n++;
}
this.menuEnable$javajs_awt_SC$Z(menu, (n > 0));
}, p$1);

Clazz.newMeth(C$, 'updateSurfMoComputedMenu$java_util_Map', function (moData) {
var menu=this.htMenus.get$O("surfMoComputedMenuText");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
var mos=(moData == null  ? null : (moData.get$O("mos")));
var nOrb=(mos == null  ? 0 : mos.size$());
var text=p$1.getMenuText$S.apply(this, ["surfMoComputedMenuText"]);
if (nOrb == 0) {
this.menuSetLabel$javajs_awt_SC$S(menu, $I$(8).o$S$O($I$(8).$$S(text), ""));
this.menuEnable$javajs_awt_SC$Z(menu, false);
return;
}this.menuSetLabel$javajs_awt_SC$S(menu, $I$(8).i$S$I($I$(8).$$S(text), nOrb));
this.menuEnable$javajs_awt_SC$Z(menu, true);
var subMenu=menu;
var nmod=(nOrb % this.itemMax);
if (nmod == 0) nmod=this.itemMax;
var pt=(nOrb > this.itemMax ? 0 : -2147483648);
for (var i=nOrb; --i >= 0; ) {
if (pt >= 0 && (pt++ % nmod) == 0 ) {
if (pt == nmod + 1) nmod=this.itemMax;
var id="mo" + pt + "Menu" ;
subMenu=this.menuNewSubMenu$S$S(Math.max(i + 2 - nmod, 1) + "..." + (i + 1) , this.menuGetId$javajs_awt_SC(menu) + "." + id );
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, subMenu);
this.htMenus.put$TK$TV(id, subMenu);
pt=1;
}var mo=mos.get$I(i);
var entryName="#" + (i + 1) + " " + (mo.containsKey$O("type") ? mo.get$O("type") + " " : "") + (mo.containsKey$O("symmetry") ? mo.get$O("symmetry") + " " : "") + (mo.containsKey$O("occupancy") ? "(" + mo.get$O("occupancy") + ") "  : "") + (mo.containsKey$O("energy") ? mo.get$O("energy") : "") ;
var script="mo " + (i + 1);
this.menuCreateItem$javajs_awt_SC$S$S$S(subMenu, entryName, script, null);
}
}, p$1);

Clazz.newMeth(C$, 'updateFileTypeDependentMenus', function () {
for (var i=this.NotPDB.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.NotPDB.get$I(i), !this.isPDB);

for (var i=this.PDBOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.PDBOnly.get$I(i), this.isPDB);

for (var i=this.UnitcellOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.UnitcellOnly.get$I(i), this.isUnitCell);

for (var i=this.FileUnitOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.FileUnitOnly.get$I(i), this.isUnitCell || this.fileHasUnitCell );

for (var i=this.FileMolOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.FileMolOnly.get$I(i), this.isUnitCell || this.fileHasUnitCell );

for (var i=this.SingleModelOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.SingleModelOnly.get$I(i), this.isLastFrame);

for (var i=this.FramesOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.FramesOnly.get$I(i), this.isMultiFrame);

for (var i=this.VibrationOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.VibrationOnly.get$I(i), this.isVibration);

for (var i=this.SymmetryOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.SymmetryOnly.get$I(i), this.hasSymmetry && this.isUnitCell );

for (var i=this.ChargesOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.ChargesOnly.get$I(i), this.haveCharges);

for (var i=this.TemperatureOnly.size$(); --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.TemperatureOnly.get$I(i), this.haveBFactors);

this.updateSignedAppletItems$();
}, p$1);

Clazz.newMeth(C$, 'updateSceneComputedMenu', function () {
var menu=this.htMenus.get$O("sceneComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuEnable$javajs_awt_SC$Z(menu, false);
var scenes=this.vwr.ms.getInfoM$S("scenes");
if (scenes == null ) return;
for (var i=0; i < scenes.length; i++) this.menuCreateItem$javajs_awt_SC$S$S$S(menu, scenes[i], "restore scene " + $I$(4).esc$S(scenes[i]) + " 1.0" , null);

this.menuEnable$javajs_awt_SC$Z(menu, true);
}, p$1);

Clazz.newMeth(C$, 'updatePDBComputedMenus', function () {
var menu=this.htMenus.get$O("PDBaaResiduesComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuEnable$javajs_awt_SC$Z(menu, false);
var menu1=this.htMenus.get$O("PDBnucleicResiduesComputedMenu");
if (menu1 == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu1, 0);
this.menuEnable$javajs_awt_SC$Z(menu1, false);
var menu2=this.htMenus.get$O("PDBcarboResiduesComputedMenu");
if (menu2 == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu2, 0);
this.menuEnable$javajs_awt_SC$Z(menu2, false);
if (this.modelSetInfo == null ) return;
var n=(this.modelIndex < 0 ? 0 : this.modelIndex + 1);
var lists=(this.modelSetInfo.get$O("group3Lists"));
this.group3List=(lists == null  ? null : lists[n]);
this.group3Counts=(lists == null  ? null : (this.modelSetInfo.get$O("group3Counts"))[n]);
if (this.group3List == null ) return;
var nItems=0;
var groupList=$I$(10).standardGroupList;
for (var i=1; i < 24; ++i) nItems+=p$1.updateGroup3List$javajs_awt_SC$S.apply(this, [menu, groupList.substring$I$I(i * 6 - 4, i * 6 - 1).trim$()]);

nItems+=p$1.augmentGroup3List$javajs_awt_SC$S$Z.apply(this, [menu, "p>", true]);
this.menuEnable$javajs_awt_SC$Z(menu, (nItems > 0));
this.menuEnable$javajs_awt_SC$Z(this.htMenus.get$O("PDBproteinMenu"), (nItems > 0));
nItems=p$1.augmentGroup3List$javajs_awt_SC$S$Z.apply(this, [menu1, "n>", false]);
this.menuEnable$javajs_awt_SC$Z(menu1, nItems > 0);
this.menuEnable$javajs_awt_SC$Z(this.htMenus.get$O("PDBnucleicMenu"), (nItems > 0));
var dssr=(nItems > 0 && this.modelIndex >= 0  ? this.vwr.ms.getInfo$I$S(this.modelIndex, "dssr") : null);
if (dssr != null ) p$1.setSecStrucMenu$javajs_awt_SC$java_util_Map.apply(this, [this.htMenus.get$O("aaStructureMenu"), dssr]);
nItems=p$1.augmentGroup3List$javajs_awt_SC$S$Z.apply(this, [menu2, "c>", false]);
this.menuEnable$javajs_awt_SC$Z(menu2, nItems > 0);
this.menuEnable$javajs_awt_SC$Z(this.htMenus.get$O("PDBcarboMenu"), (nItems > 0));
}, p$1);

Clazz.newMeth(C$, 'setSecStrucMenu$javajs_awt_SC$java_util_Map', function (menu, dssr) {
var counts=dssr.get$O("counts");
if (counts == null ) return false;
var keys=Clazz.array(String, [counts.size$()]);
counts.keySet$().toArray$TTA(keys);
$I$(11).sort$OA(keys);
if (keys.length == 0) return false;
menu.removeAll$();
for (var i=0; i < keys.length; i++) this.menuCreateItem$javajs_awt_SC$S$S$S(menu, keys[i] + " (" + counts.get$O(keys[i]) + ")" , "select modelIndex=" + this.modelIndex + " && within('dssr', '" + keys[i] + "');" , null);

return true;
}, p$1);

Clazz.newMeth(C$, 'updateGroup3List$javajs_awt_SC$S', function (menu, name) {
var nItems=0;
var n=this.group3Counts[(this.group3List.indexOf$S(name)/6|0)];
name=name.trim$();
var script=null;
if (n > 0) {
script="SELECT " + name;
name += "  (" + n + ")" ;
nItems++;
}var item=this.menuCreateItem$javajs_awt_SC$S$S$S(menu, name, script, this.menuGetId$javajs_awt_SC(menu) + "." + name );
if (n == 0) this.menuEnable$javajs_awt_SC$Z(item, false);
return nItems;
}, p$1);

Clazz.newMeth(C$, 'augmentGroup3List$javajs_awt_SC$S$Z', function (menu, type, addSeparator) {
var pt=138;
var nItems=0;
while (true){
pt=this.group3List.indexOf$S$I(type, pt);
if (pt < 0) break;
if (nItems++ == 0 && addSeparator ) this.menuAddSeparator$javajs_awt_SC(menu);
var n=this.group3Counts[(pt/6|0)];
var heteroCode=this.group3List.substring$I$I(pt + 2, pt + 5);
var name=heteroCode + "  (" + n + ")" ;
this.menuCreateItem$javajs_awt_SC$S$S$S(menu, name, "SELECT [" + heteroCode + "]" , this.menuGetId$javajs_awt_SC(menu) + "." + name );
pt++;
}
return nItems;
}, p$1);

Clazz.newMeth(C$, 'updateSYMMETRYComputedMenus', function () {
p$1.updateSYMMETRYSelectComputedMenu.apply(this, []);
p$1.updateSYMMETRYShowComputedMenu.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'updateSYMMETRYShowComputedMenu', function () {
var menu=this.htMenus.get$O("SYMMETRYShowComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuEnable$javajs_awt_SC$Z(menu, false);
if (!this.hasSymmetry || this.modelIndex < 0 ) return;
var info=this.vwr.getProperty$S$S$O("DATA_API", "spaceGroupInfo", null);
if (info == null ) return;
var infolist=info.get$O("operations");
if (infolist == null ) return;
var name=info.get$O("spaceGroupName");
this.menuSetLabel$javajs_awt_SC$S(menu, name == null  ? $I$(8).$$S("Space Group") : name);
var subMenu=menu;
var nmod=this.itemMax;
var pt=(infolist.length > this.itemMax ? 0 : -2147483648);
for (var i=0; i < infolist.length; i++) {
if (pt >= 0 && (pt++ % nmod) == 0 ) {
var id="drawsymop" + pt + "Menu" ;
subMenu=this.menuNewSubMenu$S$S((i + 1) + "..." + Math.min(i + this.itemMax, infolist.length) , this.menuGetId$javajs_awt_SC(menu) + "." + id );
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, subMenu);
this.htMenus.put$TK$TV(id, subMenu);
pt=1;
}if (i == 0) this.menuEnable$javajs_awt_SC$Z(this.menuCreateItem$javajs_awt_SC$S$S$S(subMenu, $I$(8).$$S("none"), "draw sym_* delete", null), true);
var sym=infolist[i][1];
if (sym.indexOf$S("x1") < 0) sym=infolist[i][0];
var entryName=(i + 1) + " " + infolist[i][2] + " (" + sym + ")" ;
this.menuEnable$javajs_awt_SC$Z(this.menuCreateItem$javajs_awt_SC$S$S$S(subMenu, entryName, "draw SYMOP " + (i + 1), null), true);
}
this.menuEnable$javajs_awt_SC$Z(menu, true);
}, p$1);

Clazz.newMeth(C$, 'updateSYMMETRYSelectComputedMenu', function () {
var menu=this.htMenus.get$O("SYMMETRYSelectComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuEnable$javajs_awt_SC$Z(menu, false);
if (!this.hasSymmetry || this.modelIndex < 0 ) return;
var list=this.modelInfo.get$O("symmetryOperations");
if (list == null ) return;
var cellRange=this.modelInfo.get$O("unitCellRange");
var haveUnitCellRange=(cellRange != null );
var subMenu=menu;
var nmod=this.itemMax;
var pt=(list.length > this.itemMax ? 0 : -2147483648);
for (var i=0; i < list.length; i++) {
if (pt >= 0 && (pt++ % nmod) == 0 ) {
var id="symop" + pt + "Menu" ;
subMenu=this.menuNewSubMenu$S$S((i + 1) + "..." + Math.min(i + this.itemMax, list.length) , this.menuGetId$javajs_awt_SC(menu) + "." + id );
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, subMenu);
this.htMenus.put$TK$TV(id, subMenu);
pt=1;
}var entryName="symop=" + (i + 1) + " # " + list[i] ;
this.menuEnable$javajs_awt_SC$Z(this.menuCreateItem$javajs_awt_SC$S$S$S(subMenu, entryName, "SELECT symop=" + (i + 1), null), haveUnitCellRange);
}
this.menuEnable$javajs_awt_SC$Z(menu, true);
}, p$1);

Clazz.newMeth(C$, 'updateFRAMESbyModelComputedMenu', function () {
var menu=this.htMenus.get$O("FRAMESbyModelComputedMenu");
if (menu == null ) return;
this.menuEnable$javajs_awt_SC$Z(menu, (this.modelCount > 0));
this.menuSetLabel$javajs_awt_SC$S(menu, (this.modelIndex < 0 ? p$1.gti$S$I.apply(this, ["allModelsText", this.modelCount]) : p$1.gto$S$O.apply(this, ["modelMenuText", (this.modelIndex + 1) + "/" + this.modelCount ])));
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
if (this.modelCount < 1) return;
if (this.modelCount > 1) this.menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z(menu, $I$(8).$$S("All"), "frame 0 ##", null, (this.modelIndex < 0), false);
var subMenu=menu;
var nmod=this.itemMax;
var pt=(this.modelCount > this.itemMax ? 0 : -2147483648);
for (var i=0; i < this.modelCount; i++) {
if (pt >= 0 && (pt++ % nmod) == 0 ) {
var id="model" + pt + "Menu" ;
subMenu=this.menuNewSubMenu$S$S((i + 1) + "..." + Math.min(i + this.itemMax, this.modelCount) , this.menuGetId$javajs_awt_SC(menu) + "." + id );
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, subMenu);
this.htMenus.put$TK$TV(id, subMenu);
pt=1;
}var script="" + this.vwr.getModelNumberDotted$I(i);
var entryName=this.vwr.getModelName$I(i);
var spectrumTypes=this.vwr.ms.getInfo$I$S(i, "spectrumTypes");
if (spectrumTypes != null  && entryName.startsWith$S(spectrumTypes) ) spectrumTypes=null;
if (!entryName.equals$O(script)) {
var ipt=entryName.indexOf$S(";PATH");
if (ipt >= 0) entryName=entryName.substring$I$I(0, ipt);
if (entryName.indexOf$S("Model[") == 0 && (ipt=entryName.indexOf$S("]:")) >= 0 ) entryName=entryName.substring$I(ipt + 2);
entryName=script + ": " + entryName ;
}if (entryName.length$() > 60) entryName=entryName.substring$I$I(0, 55) + "...";
if (spectrumTypes != null ) entryName += " (" + spectrumTypes + ")" ;
this.menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z(subMenu, entryName, "model " + script + " ##" , null, (this.modelIndex == i), false);
}
}, p$1);

Clazz.newMeth(C$, 'updateConfigurationComputedMenu', function () {
var menu=this.htMenus.get$O("configurationComputedMenu");
if (menu == null ) return;
this.menuEnable$javajs_awt_SC$Z(menu, this.isMultiConfiguration);
if (!this.isMultiConfiguration) return;
var nAltLocs=this.altlocs.length$();
this.menuSetLabel$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["configurationMenuText", nAltLocs]));
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
var script="hide none ##CONFIG";
this.menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z(menu, $I$(8).$$S("All"), script, null, (this.updateMode == 1 && this.configurationSelected.equals$O(script) ), false);
for (var i=0; i < nAltLocs; i++) {
script="configuration " + (i + 1) + "; hide thisModel and not selected ##CONFIG" ;
var entryName="" + (i + 1) + " -- \"" + this.altlocs.charAt$I(i) + "\"" ;
this.menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z(menu, entryName, script, null, (this.updateMode == 1 && this.configurationSelected.equals$O(script) ), false);
}
}, p$1);

Clazz.newMeth(C$, 'updateModelSetComputedMenu', function () {
var menu=this.htMenus.get$O("modelSetMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
this.menuSetLabel$javajs_awt_SC$S(menu, this.nullModelSetName);
this.menuEnable$javajs_awt_SC$Z(menu, false);
for (var i=this.noZapped.length; --i >= 0; ) this.menuEnable$javajs_awt_SC$Z(this.htMenus.get$O(this.noZapped[i]), !this.isZapped);

if (this.modelSetName == null  || this.isZapped ) return;
if (this.isMultiFrame) {
this.modelSetName=p$1.gti$S$I.apply(this, ["modelSetCollectionText", this.modelCount]);
if (this.modelSetName.length$() > this.titleWidthMax) this.modelSetName=this.modelSetName.substring$I$I(0, this.titleWidthMax) + "...";
} else if (this.vwr.getBooleanProperty$S("hideNameInPopup")) {
this.modelSetName=p$1.getMenuText$S.apply(this, ["hiddenModelSetText"]);
} else if (this.modelSetName.length$() > this.titleWidthMax) {
this.modelSetName=this.modelSetName.substring$I$I(0, this.titleWidthMax) + "...";
}this.menuSetLabel$javajs_awt_SC$S(menu, this.modelSetName);
this.menuEnable$javajs_awt_SC$Z(menu, true);
this.menuEnable$javajs_awt_SC$Z(this.htMenus.get$O("computationMenu"), this.ac <= 100);
this.addMenuItem$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["atomsText", this.ac]));
this.addMenuItem$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["bondsText", this.vwr.ms.getBondCountInModel$I(this.modelIndex)]));
if (this.isPDB) {
this.menuAddSeparator$javajs_awt_SC(menu);
this.addMenuItem$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["groupsText", this.vwr.ms.getGroupCountInModel$I(this.modelIndex)]));
this.addMenuItem$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["chainsText", this.vwr.ms.getChainCountInModelWater$I$Z(this.modelIndex, false)]));
this.addMenuItem$javajs_awt_SC$S(menu, p$1.gti$S$I.apply(this, ["polymersText", this.vwr.ms.getBioPolymerCountInModel$I(this.modelIndex)]));
var submenu=this.htMenus.get$O("BiomoleculesMenu");
if (submenu == null ) {
submenu=this.menuNewSubMenu$S$S($I$(8).$$S(p$1.getMenuText$S.apply(this, ["biomoleculesMenuText"])), this.menuGetId$javajs_awt_SC(menu) + ".biomolecules");
this.menuAddSubMenu$javajs_awt_SC$javajs_awt_SC(menu, submenu);
}this.menuRemoveAll$javajs_awt_SC$I(submenu, 0);
this.menuEnable$javajs_awt_SC$Z(submenu, false);
var biomolecules;
if (this.modelIndex >= 0 && (biomolecules=this.vwr.ms.getInfo$I$S(this.modelIndex, "biomolecules")) != null  ) {
this.menuEnable$javajs_awt_SC$Z(submenu, true);
var nBiomolecules=biomolecules.size$();
for (var i=0; i < nBiomolecules; i++) {
var script=(this.isMultiFrame ? "" : "save orientation;load \"\" FILTER \"biomolecule " + (i + 1) + "\";restore orientation;" );
var nAtoms=(biomolecules.get$I(i).get$O("atomCount")).intValue$();
var entryName=p$1.gto$S$O.apply(this, [this.isMultiFrame ? "biomoleculeText" : "loadBiomoleculeText", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(i + 1), Integer.valueOf$I(nAtoms)])]);
this.menuCreateItem$javajs_awt_SC$S$S$S(submenu, entryName, script, null);
}
}}if (this.isApplet && !this.vwr.getBooleanProperty$S("hideNameInPopup") ) {
this.menuAddSeparator$javajs_awt_SC(menu);
this.menuCreateItem$javajs_awt_SC$S$S$S(menu, p$1.gto$S$O.apply(this, ["viewMenuText", this.modelSetFileName]), "show url", null);
}}, p$1);

Clazz.newMeth(C$, 'gti$S$I', function (s, n) {
return $I$(8).i$S$I($I$(8).$$S(p$1.getMenuText$S.apply(this, [s])), n);
}, p$1);

Clazz.newMeth(C$, 'gto$S$O', function (s, o) {
return $I$(8).o$S$O($I$(8).$$S(p$1.getMenuText$S.apply(this, [s])), o);
}, p$1);

Clazz.newMeth(C$, 'updateAboutSubmenu', function () {
if (this.isApplet) this.setText$S$S("APPLETid", this.vwr.appletName);
{

}
}, p$1);

Clazz.newMeth(C$, 'updateLanguageSubmenu', function () {
var menu=this.htMenus.get$O("languageComputedMenu");
if (menu == null ) return;
this.menuRemoveAll$javajs_awt_SC$I(menu, 0);
var language=$I$(8).getLanguage$();
var id=this.menuGetId$javajs_awt_SC(menu);
var languages=$I$(8).getLanguageList$org_jmol_i18n_GT(null);
for (var i=0, p=0; i < languages.length; i++) {
if (language.equals$O(languages[i].code)) languages[i].display=true;
if (languages[i].display) {
var code=languages[i].code;
var name=languages[i].language;
var nativeName=languages[i].nativeLanguage;
var menuLabel=code + " - " + $I$(8).$$S(name) ;
if ((nativeName != null ) && (!nativeName.equals$O($I$(8).$$S(name))) ) {
menuLabel += " - " + nativeName;
}if (p++ > 0 && (p % 4 == 1) ) this.menuAddSeparator$javajs_awt_SC(menu);
this.menuCreateCheckboxItem$javajs_awt_SC$S$S$S$Z$Z(menu, menuLabel, "language = \"" + code + "\" ##" + name , id + "." + code , language.equals$O(code), false);
}}
}, p$1);

Clazz.newMeth(C$, 'updateSpecialMenuItem$javajs_awt_SC', function (m) {
m.setText$S(this.getSpecialLabel$S$S(m.getName$(), m.getText$()));
}, p$1);

Clazz.newMeth(C$, 'getSpecialLabel$S$S', function (name, text) {
var pt=text.indexOf$S(" (");
if (pt < 0) pt=text.length$();
var info=null;
if (name.indexOf$S("captureLooping") >= 0) info=(this.vwr.am.animationReplayMode == 1073742070 ? "ONCE" : "LOOP");
 else if (name.indexOf$S("captureFps") >= 0) info="" + this.vwr.getInt$I(553648132);
 else if (name.indexOf$S("captureMenu") >= 0) info=(this.vwr.captureParams == null  ? $I$(8).$$S("not capturing") : this.vwr.fm.getFilePath$S$Z$Z(this.vwr.captureParams.get$O("captureFileName"), false, true) + " " + this.vwr.captureParams.get$O("captureCount") );
return (info == null  ? text : text.substring$I$I(0, pt) + " (" + info + ")" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
