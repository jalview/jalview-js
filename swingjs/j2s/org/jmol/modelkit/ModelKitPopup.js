(function(){var P$=Clazz.newPackage("org.jmol.modelkit"),p$1={},I$=[[0,'org.jmol.modelkit.ModelKitPopupResourceBundle','javajs.util.P3','org.jmol.i18n.GT','javajs.util.BS','java.util.Hashtable','javajs.util.PT','Boolean','org.jmol.util.BSUtil','org.jmol.util.Elements','javajs.util.V3','org.jmol.util.Edge','org.jmol.util.Logger','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModelKitPopup", null, 'org.jmol.popup.JmolGenericPopup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentModelIndex=-1;
this.atomHoverLabel="C";
this.bondHoverLabel=$I$(3).$$S("increase order");
this.pickAtomAssignType="C";
this.pickBondAssignType="p";
this.bsHighlight=Clazz.new_($I$(4,1));
this.bondIndex=-1;
this.bondAtomIndex1=-1;
this.bondAtomIndex2=-1;
this.screenXY=Clazz.array(Integer.TYPE, [2]);
this.mkdata=Clazz.new_($I$(5,1));
this.showSymopInfo=true;
this.addXtalHydrogens=true;
this.clickToSetElement=true;
this.centerAtomIndex=-1;
this.secondAtomIndex=-1;
this.atomIndexSphere=-1;
this.state=0;
this.lastCenter="0 0 0";
this.lastOffset="0 0 0";
},1);

C$.$fields$=[['Z',['hasUnitCell','alertedNoEdit','isPickAtomAssignCharge','isRotateBond','showSymopInfo','addXtalHydrogens','clickToSetElement'],'F',['centerDistance','rotationDeg'],'I',['currentModelIndex','bondIndex','bondAtomIndex1','bondAtomIndex2','branchAtomIndex','centerAtomIndex','secondAtomIndex','atomIndexSphere','iatom0','state'],'S',['atomHoverLabel','bondHoverLabel','xtalHoverLabel','activeMenu','pickAtomAssignType','pickBondAssignType','drawData','drawScript','lastCenter','lastOffset'],'O',['allOperators','String[]','lastModelSet','org.jmol.modelset.ModelSet','bsHighlight','javajs.util.BS','+bsRotateBranch','screenXY','int[]','mkdata','java.util.Map','centerPoint','javajs.util.P3','+spherePoint','+viewOffset','symop','java.lang.Object']]
,['O',['bundle','org.jmol.popup.PopupResource','Pt000','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_viewer_Viewer$org_jmol_popup_PopupResource$S', function (vwr, bundle, title) {
C$.superclazz.prototype.initialize$org_jmol_viewer_Viewer$org_jmol_popup_PopupResource$S.apply(this, [vwr, bundle, title]);
this.initializeForModel$();
});

Clazz.newMeth(C$, 'getBundle$S', function (menu) {
return C$.bundle;
});

Clazz.newMeth(C$, 'initializeForModel$', function () {
p$1.resetBondFields$S.apply(this, ["init"]);
this.allOperators=null;
this.currentModelIndex=-999;
this.iatom0=0;
this.atomIndexSphere=this.centerAtomIndex=this.secondAtomIndex=-1;
this.centerPoint=this.spherePoint=null;
this.hasUnitCell=(this.vwr.getCurrentUnitCell$() != null );
this.symop=null;
p$1.setDefaultState$I.apply(this, [this.hasUnitCell ? 1 : 0]);
});

Clazz.newMeth(C$, 'jpiUpdateComputedMenus$', function () {
this.hasUnitCell=(this.vwr.getCurrentUnitCell$() != null );
if (!p$1.checkUpdateSymmetryInfo.apply(this, [])) p$1.updateAllXtalMenus.apply(this, []);
});

Clazz.newMeth(C$, 'appUpdateForShow$', function () {
p$1.updateAllXtalMenuOptions.apply(this, []);
});

Clazz.newMeth(C$, 'checkUpdateSymmetryInfo', function () {
this.htMenus.get$O("xtalMenu").setEnabled$Z(this.hasUnitCell);
var isOK=true;
if (this.vwr.ms !== this.lastModelSet ) {
this.lastModelSet=this.vwr.ms;
isOK=false;
} else if (this.currentModelIndex == -1 || this.currentModelIndex != this.vwr.am.cmi ) {
isOK=false;
}this.currentModelIndex=Math.max(this.vwr.am.cmi, 0);
this.iatom0=this.vwr.ms.am[this.currentModelIndex].firstAtomIndex;
if (!isOK) {
this.allOperators=null;
}return isOK;
}, p$1);

Clazz.newMeth(C$, 'updateAllXtalMenus', function () {
p$1.updateOperatorMenu.apply(this, []);
p$1.updateAllXtalMenuOptions.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'updateOperatorMenu', function () {
if (this.allOperators != null ) return;
var data=p$1.runScriptBuffered$S.apply(this, ["show symop"]);
this.allOperators=(function(a,f){return f.apply(null,a)})([data.trim$().replace$C$C("\t", " "), "\n"],$I$(6).split$S$S);
p$1.addAllCheckboxItems$org_jmol_api_SC$SA.apply(this, [this.htMenus.get$O("xtalOp!PersistMenu"), this.allOperators]);
}, p$1);

Clazz.newMeth(C$, 'addAllCheckboxItems$org_jmol_api_SC$SA', function (menu, labels) {
this.menuRemoveAll$org_jmol_api_SC$I(menu, 0);
var subMenu=menu;
var pt=(labels.length > 32 ? 0 : -2147483648);
for (var i=0; i < labels.length; i++) {
if (pt >= 0 && (pt++ % 32) == 0 ) {
var id="mtsymop" + pt + "Menu" ;
subMenu=this.menuNewSubMenu$S$S((i + 1) + "..." + Math.min(i + 32, labels.length) , this.menuGetId$org_jmol_api_SC(menu) + "." + id );
this.menuAddSubMenu$org_jmol_api_SC$org_jmol_api_SC(menu, subMenu);
this.htMenus.put$O$O(id, subMenu);
pt=1;
}if (i == 0) this.menuEnable$org_jmol_api_SC$Z(this.menuCreateItem$org_jmol_api_SC$S$S$S(subMenu, $I$(3).$$S("none"), "draw sym_* delete", null), true);
var sym=labels[i];
this.menuEnable$org_jmol_api_SC$Z(this.menuCreateItem$org_jmol_api_SC$S$S$S(subMenu, sym, sym, subMenu.getName$() + "." + "mkop_" + (i + 1) ), true);
}
}, p$1);

Clazz.newMeth(C$, 'updateAllXtalMenuOptions', function () {
var text="";
switch (p$1.getMKState.apply(this, [])) {
case 0:
text=" (not enabled)";
break;
case 1:
text=" (view)";
break;
case 2:
text=" (edit)";
break;
}
p$1.setLabel$S$S.apply(this, ["xtalModePersistMenu", "Crystal Mode: " + text]);
text=(this.centerAtomIndex < 0 && this.centerPoint == null   ? "(not selected)" : this.centerAtomIndex >= 0 ? this.vwr.getAtomInfo$I(this.centerAtomIndex) : this.centerPoint.toString());
p$1.setLabel$S$S.apply(this, ["xtalSelPersistMenu", "Center: " + text]);
text=(this.symop == null  ? "(no operator selected)" : Clazz.instanceOf(this.symop, "java.lang.Integer") ? this.allOperators[(this.symop).intValue$() - 1] : this.symop.toString());
p$1.setLabel$S$S.apply(this, ["operator", text]);
switch (p$1.getSymEditState.apply(this, [])) {
case 0:
text="do not apply symmetry";
break;
case 64:
text="retain local symmetry";
break;
case 32:
text="apply local symmetry";
break;
case 128:
text="apply full symmetry";
break;
}
p$1.setLabel$S$S.apply(this, ["xtalSymmetryPersistMenu", "Edit option: " + text]);
switch (p$1.getUnitCellState.apply(this, [])) {
case 0:
text="packed";
break;
case 256:
text="unpacked" + (this.viewOffset == null  ? "(no view offset)" : "(view offset=" + this.viewOffset + ")" );
break;
}
p$1.setLabel$S$S.apply(this, ["xtalPackingPersistMenu", "Packing: " + text]);
}, p$1);

Clazz.newMeth(C$, 'setLabel$S$S', function (key, label) {
this.menuSetLabel$org_jmol_api_SC$S(this.htMenus.get$O(key), label);
}, p$1);

Clazz.newMeth(C$, 'getActiveMenu$', function () {
return this.activeMenu;
});

Clazz.newMeth(C$, 'setActiveMenu$S', function (name) {
var active=(name.indexOf$S("xtalMenu") >= 0 ? "xtalMenu" : name.indexOf$S("atomMenu") >= 0 ? "atomMenu" : name.indexOf$S("bondMenu") >= 0 ? "bondMenu" : null);
if (active != null ) {
this.activeMenu=active;
if ((active == "xtalMenu") == (p$1.getMKState.apply(this, []) == 0) ) p$1.setMKState$I.apply(this, [active == "xtalMenu" ? 1 : 0]);
this.vwr.refresh$I$S(1, "modelkit");
}return active;
});

Clazz.newMeth(C$, 'appUpdateSpecialCheckBoxValue$org_jmol_api_SC$S$Z', function (source, actionCommand, selected) {
var name=source.getName$();
System.out.println$S("MKP name=" + name);
if (!this.updatingForShow && this.setActiveMenu$S(name) != null  ) {
var text=source.getText$();
if (name.indexOf$S("Bond") >= 0) {
this.bondHoverLabel=text;
} else if (name.indexOf$S("assignAtom") >= 0) this.atomHoverLabel=text;
 else if (this.activeMenu == "xtalMenu") this.xtalHoverLabel=this.atomHoverLabel=text;
}});

Clazz.newMeth(C$, 'isXtalState', function () {
return ((this.state & 3) != 0);
}, p$1);

Clazz.newMeth(C$, 'setMKState$I', function (bits) {
this.state=(this.state & ~3) | (this.hasUnitCell ? bits : 0);
}, p$1);

Clazz.newMeth(C$, 'getMKState', function () {
return this.state & 3;
}, p$1);

Clazz.newMeth(C$, 'setSymEdit$I', function (bits) {
this.state=(this.state & ~224) | bits;
}, p$1);

Clazz.newMeth(C$, 'getSymEditState', function () {
return this.state & 224;
}, p$1);

Clazz.newMeth(C$, 'getViewState', function () {
return this.state & 28;
}, p$1);

Clazz.newMeth(C$, 'setSymViewState$I', function (bits) {
this.state=(this.state & ~28) | bits;
}, p$1);

Clazz.newMeth(C$, 'getSymViewState', function () {
return this.state & 28;
}, p$1);

Clazz.newMeth(C$, 'setUnitCell$I', function (bits) {
this.state=(this.state & ~1792) | bits;
}, p$1);

Clazz.newMeth(C$, 'getUnitCellState', function () {
return this.state & 1792;
}, p$1);

Clazz.newMeth(C$, 'isPickAtomAssignCharge$', function () {
return this.isPickAtomAssignCharge;
});

Clazz.newMeth(C$, 'getProperty$O', function (data) {
var key=(Clazz.instanceOf(data, "java.lang.String") ? data : (data)[0]).toString();
var value=(Clazz.instanceOf(data, "java.lang.String") ? null : (data)[1]);
return this.setProperty$S$O(key, value);
});

Clazz.newMeth(C$, 'setProperty$S$O', function (name, value) {
name=name.toLowerCase$().intern$();
if (name == "isMolecular") {
return (function(a,f){return f.apply(null,a)})([p$1.getMKState.apply(this, []) == 0],$I$(7).valueOf$Z);
}if (name == "hoverlabel") {
return p$1.getHoverLabel$I.apply(this, [(value).intValue$()]);
}if (name == "alloperators") {
return this.allOperators;
}if (name == "data") {
return p$1.getData$S.apply(this, [value == null  ? null : value.toString()]);
}if (name == "invariant") {
var iatom=(Clazz.instanceOf(value, "javajs.util.BS") ? (value).nextSetBit$I(0) : -1);
var atom=this.vwr.ms.getAtom$I(iatom);
if (atom == null ) return null;
return this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(iatom, null, -1, atom, atom, 1275068418, null, 0, 0, 0);
}if (name == "assignatom") {
var o=(value);
var type=o[0];
var data=o[1];
var atomIndex=data[0];
if (p$1.isVwrRotateBond.apply(this, [])) {
this.bondAtomIndex1=atomIndex;
} else if (!p$1.processAtomClick$I.apply(this, [data[0]]) && (this.clickToSetElement || this.vwr.ms.getAtom$I(atomIndex).getElementNumber$() == 1 ) ) p$1.assignAtom$I$S$Z$Z.apply(this, [atomIndex, type, data[1] >= 0, data[2] >= 0]);
return null;
}if (name == "bondatomindex") {
var i=(value).intValue$();
if (i != this.bondAtomIndex2) this.bondAtomIndex1=i;
this.bsRotateBranch=null;
return null;
}if (name == "highlight") {
if (value == null ) this.bsHighlight=Clazz.new_($I$(4,1));
 else this.bsHighlight=value;
return null;
}if (name == "mode") {
var isEdit=("edit".equals$O(value));
p$1.setMKState$I.apply(this, ["view".equals$O(value) ? 1 : isEdit ? 2 : 0]);
if (isEdit) this.addXtalHydrogens=false;
return null;
}if (name == "symmetry") {
p$1.setDefaultState$I.apply(this, [2]);
name=(value).toLowerCase$().intern$();
p$1.setSymEdit$I.apply(this, [name == "applylocal" ? 32 : name == "retainlocal" ? 64 : name == "applyfull" ? 128 : 0]);
p$1.showXtalSymmetry.apply(this, []);
return null;
}if (name == "unitcell") {
var isPacked="packed".equals$O(value);
p$1.setUnitCell$I.apply(this, [isPacked ? 0 : 256]);
this.viewOffset=(isPacked ? C$.Pt000 : null);
return null;
}if (name == "symop") {
p$1.setDefaultState$I.apply(this, [1]);
if (value != null ) {
this.symop=value;
p$1.showSymop$O.apply(this, [this.symop]);
}return this.symop;
}if (name == "center") {
p$1.setDefaultState$I.apply(this, [1]);
var centerAtom=value;
this.lastCenter=new Float(centerAtom.x).toString() + " " + new Float(centerAtom.y).toString() + " " + new Float(centerAtom.z).toString() ;
this.centerAtomIndex=(Clazz.instanceOf(centerAtom, "org.jmol.modelset.Atom") ? (centerAtom).i : -1);
this.atomIndexSphere=-1;
this.secondAtomIndex=-1;
p$1.processAtomClick$I.apply(this, [this.centerAtomIndex]);
return null;
}if (name == "scriptassignbond") {
this.appRunScript$S("assign bond [{" + value + "}] \"" + this.pickBondAssignType + "\"" );
return null;
}if (name == "assignbond") {
var data=value;
return p$1.assignBond$I$I.apply(this, [data[0], data[1]]);
}if (name == "atomtype") {
System.out.println$S("MKP atomtype=" + value);
if (value != null ) {
this.pickAtomAssignType=value;
this.isPickAtomAssignCharge=(this.pickAtomAssignType.equals$O("pl") || this.pickAtomAssignType.equals$O("mi") );
}return this.pickAtomAssignType;
}if (name == "bondtype") {
if (value != null ) {
this.pickBondAssignType=(value).substring$I$I(0, 1).toLowerCase$();
}return this.pickBondAssignType;
}if (name == "bondindex") {
if (value != null ) {
p$1.setBondIndex$I$Z.apply(this, [(value).intValue$(), false]);
}return (this.bondIndex < 0 ? null : Integer.valueOf$I(this.bondIndex));
}if (name == "rotatebondindex") {
if (value != null ) {
p$1.setBondIndex$I$Z.apply(this, [(value).intValue$(), true]);
}return (this.bondIndex < 0 ? null : Integer.valueOf$I(this.bondIndex));
}if (name == "addhydrogen" || name == "addhydrogens" ) {
if (value != null ) this.addXtalHydrogens=C$.isTrue$O(value);
return $I$(7).valueOf$Z(this.addXtalHydrogens);
}if (name == "clicktosetelement") {
if (value != null ) this.clickToSetElement=C$.isTrue$O(value);
return $I$(7).valueOf$Z(this.clickToSetElement);
}if (name == "showsymopinfo") {
if (value != null ) this.showSymopInfo=C$.isTrue$O(value);
return $I$(7).valueOf$Z(this.showSymopInfo);
}if (name == "offset") {
if (value === "none" ) {
this.viewOffset=null;
} else if (value != null ) {
this.viewOffset=(Clazz.instanceOf(value, "javajs.util.P3") ? value : C$.pointFromTriad$S(value.toString()));
if (this.viewOffset != null ) p$1.setSymViewState$I.apply(this, [8]);
}p$1.showXtalSymmetry.apply(this, []);
return this.viewOffset;
}if (name == "distance") {
p$1.setDefaultState$I.apply(this, [2]);
var d=(value == null  ? NaN : Clazz.instanceOf(value, "java.lang.Float") ? (value).floatValue$() : $I$(6).parseFloat$S(value));
if (!Float.isNaN$F(d)) {
C$.notImplemented$S("setProperty: distance");
this.centerDistance=d;
}return Float.valueOf$F(this.centerDistance);
}if (name == "point") {
if (value != null ) {
C$.notImplemented$S("setProperty: point");
p$1.setDefaultState$I.apply(this, [2]);
this.spherePoint=value;
this.atomIndexSphere=(Clazz.instanceOf(this.spherePoint, "org.jmol.modelset.Atom") ? (this.spherePoint).i : -1);
}return this.spherePoint;
}if (name == "screenxy") {
if (value != null ) {
this.screenXY=value;
}return this.screenXY;
}if (name == "addconstraint") {
C$.notImplemented$S("setProperty: addConstraint");
}if (name == "removeconstraint") {
C$.notImplemented$S("setProperty: removeConstraint");
}if (name == "removeallconstraints") {
C$.notImplemented$S("setProperty: removeAllConstraints");
}System.err.println$S("ModelKitPopup.setProperty? " + name + " " + value );
return null;
});

Clazz.newMeth(C$, 'isTrue$O', function (value) {
return ((function(a,f){return f.apply(null,a)})([value.toString()],$I$(7).valueOf$S) === $I$(7).TRUE );
}, 1);

Clazz.newMeth(C$, 'getData$S', function (key) {
p$1.addData$S$O.apply(this, ["centerPoint", this.centerPoint]);
p$1.addData$S$O.apply(this, ["centerAtomIndex", Integer.valueOf$I(this.centerAtomIndex)]);
p$1.addData$S$O.apply(this, ["secondAtomIndex", Integer.valueOf$I(this.secondAtomIndex)]);
p$1.addData$S$O.apply(this, ["symop", this.symop]);
p$1.addData$S$O.apply(this, ["offset", this.viewOffset]);
p$1.addData$S$O.apply(this, ["drawData", this.drawData]);
p$1.addData$S$O.apply(this, ["drawScript", this.drawScript]);
return this.mkdata;
}, p$1);

Clazz.newMeth(C$, 'addData$S$O', function (key, value) {
this.mkdata.put$O$O(key, value == null  ? "null" : value);
}, p$1);

Clazz.newMeth(C$, 'processAtomClick$I', function (atomIndex) {
switch (p$1.getMKState.apply(this, [])) {
case 0:
return p$1.isVwrRotateBond.apply(this, []);
case 1:
this.centerAtomIndex=atomIndex;
if (p$1.getSymViewState.apply(this, []) == 0) p$1.setSymViewState$I.apply(this, [8]);
p$1.showXtalSymmetry.apply(this, []);
return true;
case 2:
if (atomIndex == this.centerAtomIndex) return true;
C$.notImplemented$S("edit click");
return false;
}
C$.notImplemented$S("atom click unknown XTAL state");
return false;
}, p$1);

Clazz.newMeth(C$, 'getHoverLabel$I', function (atomIndex) {
var state=p$1.getMKState.apply(this, []);
if (state != 1 && atomIndex >= 0  && !this.vwr.ms.isAtomInLastModel$I(atomIndex) ) {
return "Only atoms in the last model may be edited.";
}var msg=null;
switch (state) {
case 1:
if (this.symop == null ) this.symop=Integer.valueOf$I(1);
msg="view symop " + this.symop + " for " + this.vwr.getAtomInfo$I(atomIndex) ;
break;
case 2:
msg="start editing for " + this.vwr.getAtomInfo$I(atomIndex);
break;
case 0:
if (this.isRotateBond) {
if (atomIndex == this.bondAtomIndex1 || atomIndex == this.bondAtomIndex2 ) {
msg="rotate branch";
this.branchAtomIndex=atomIndex;
this.bsRotateBranch=null;
} else {
msg="rotate bond";
this.bsRotateBranch=null;
this.branchAtomIndex=-1;
}}if (this.bondIndex < 0) {
if (this.atomHoverLabel.length$() <= 2) {
msg=this.atomHoverLabel="Click to change to " + this.atomHoverLabel + " or drag to add " + this.atomHoverLabel ;
} else {
msg=this.atomHoverLabel;
this.vwr.highlight$javajs_util_BS($I$(8).newAndSetBit$I(atomIndex));
}} else {
if (msg == null ) {
switch (this.bsHighlight.cardinality$()) {
case 0:
this.vwr.highlight$javajs_util_BS($I$(8).newAndSetBit$I(atomIndex));
case 1:
msg=this.atomHoverLabel;
break;
case 2:
msg=this.bondHoverLabel;
break;
}
}}break;
}
return msg;
}, p$1);

Clazz.newMeth(C$, 'setDefaultState$I', function (mode) {
if (!this.hasUnitCell) mode=0;
if (!this.hasUnitCell || p$1.isXtalState.apply(this, []) != this.hasUnitCell  ) {
p$1.setMKState$I.apply(this, [mode]);
switch (mode) {
case 0:
break;
case 1:
if (p$1.getSymViewState.apply(this, []) == 0) p$1.setSymViewState$I.apply(this, [8]);
break;
case 2:
break;
}
}}, p$1);

Clazz.newMeth(C$, 'appGetBooleanProperty$S', function (name) {
if (name.startsWith$S("mk")) {
return (this.getProperty$O(name.substring$I(2))).booleanValue$();
}return this.vwr.getBooleanProperty$S(name);
});

Clazz.newMeth(C$, 'getUnknownCheckBoxScriptToRun$org_jmol_api_SC$S$S$Z', function (item, name, what, TF) {
if (name.startsWith$S("mk")) {
p$1.processMKPropertyItem$S$Z.apply(this, [name, TF]);
return null;
}var element=p$1.promptUser$S$S.apply(this, [$I$(3).$$S("Element?"), ""]);
if (element == null  || $I$(9).elementNumberFromSymbol$S$Z(element, true) == 0 ) return null;
this.menuSetLabel$org_jmol_api_SC$S(item, element);
item.setActionCommand$S("assignAtom_" + element + "P!:??" );
this.atomHoverLabel="Click or click+drag for " + element;
return "set picking assignAtom_" + element;
});

Clazz.newMeth(C$, 'processMKPropertyItem$S$Z', function (name, TF) {
name=name.substring$I(2);
var pt=name.indexOf$S("_");
if (pt > 0) {
this.setProperty$S$O(name.substring$I$I(0, pt), name.substring$I(pt + 1));
} else {
this.setProperty$S$O(name, $I$(7).valueOf$Z(TF));
}}, p$1);

Clazz.newMeth(C$, 'showXtalSymmetry', function () {
var script=null;
switch (p$1.getSymViewState.apply(this, [])) {
case 0:
script="draw * delete";
break;
case 8:
default:
var offset=null;
if (this.secondAtomIndex >= 0) {
script="draw ID sym symop " + (this.centerAtomIndex < 0 ? this.centerPoint : " {atomindex=" + this.centerAtomIndex + "}" ) + " {atomindex=" + this.secondAtomIndex + "}" ;
} else {
offset=this.viewOffset;
if (this.symop == null ) this.symop=Integer.valueOf$I(1);
var iatom=(this.centerAtomIndex >= 0 ? this.centerAtomIndex : this.centerPoint != null  ? -1 : this.iatom0);
script="draw ID sym symop " + (this.symop == null  ? "1" : Clazz.instanceOf(this.symop, "java.lang.String") ? "'" + this.symop + "'"  : $I$(6).toJSON$S$O(null, this.symop)) + (iatom < 0 ? this.centerPoint : " {atomindex=" + iatom + "}" ) + (offset == null  ? "" : " offset " + offset) ;
}this.drawData=p$1.runScriptBuffered$S.apply(this, [script]);
this.drawScript=script;
this.drawData=(this.showSymopInfo ? this.drawData.substring$I$I(0, this.drawData.indexOf$S("\n") + 1) : "");
this.appRunScript$S(";refresh;set echo top right;echo " + this.drawData.replace$C$C("\t", " "));
break;
}
}, p$1);

Clazz.newMeth(C$, 'assignAtom$I$S$Z$Z', function (atomIndex, type, autoBond, addHsAndBond) {
this.vwr.ms.clearDB$I(atomIndex);
if (type == null ) type="C";
var atom=this.vwr.ms.at[atomIndex];
var bs=Clazz.new_($I$(4,1));
var wasH=(atom.getElementNumber$() == 1);
var atomicNumber=((function(a,f){return f.apply(null,a)})([type.charAt$I(0)],$I$(6).isUpperCase$C) ? $I$(9).elementNumberFromSymbol$S$Z(type, true) : -1);
var isDelete=false;
if (atomicNumber > 0) {
this.vwr.ms.setElement$org_jmol_modelset_Atom$I$Z(atom, atomicNumber, !addHsAndBond);
this.vwr.shm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(0, 0, this.vwr.rd, $I$(8).newAndSetBit$I(atomIndex));
this.vwr.ms.setAtomName$I$S$Z(atomIndex, type + atom.getAtomNumber$(), !addHsAndBond);
if (this.vwr.getBoolean$I(603983903)) this.vwr.ms.am[atom.mi].isModelKit=true;
if (!this.vwr.ms.am[atom.mi].isModelKit) this.vwr.ms.taintAtom$I$I(atomIndex, 0);
} else if (type.toLowerCase$().equals$O("pl")) {
atom.setFormalCharge$I(atom.getFormalCharge$() + 1);
} else if (type.toLowerCase$().equals$O("mi")) {
atom.setFormalCharge$I(atom.getFormalCharge$() - 1);
} else if (type.equals$O("X")) {
isDelete=true;
} else if (!type.equals$O(".")) {
return;
}if (!addHsAndBond) return;
this.vwr.ms.removeUnnecessaryBonds$org_jmol_modelset_Atom$Z(atom, isDelete);
var dx=0;
if (atom.getCovalentBondCount$() == 1) if (wasH) {
dx=1.5;
} else if (!wasH && atomicNumber == 1 ) {
dx=1.0;
}if (dx != 0 ) {
var v=(function(a,f){return f.apply(null,a)})([atom, this.vwr.ms.at[atom.getBondedAtomIndex$I(0)]],$I$(10).newVsub$javajs_util_T3$javajs_util_T3);
var d=v.length$();
v.normalize$();
v.scale$F(dx - d);
this.vwr.ms.setAtomCoordRelative$I$F$F$F(atomIndex, v.x, v.y, v.z);
}var bsA=$I$(8).newAndSetBit$I(atomIndex);
if (isDelete) {
this.vwr.deleteAtoms$javajs_util_BS$Z(bsA, false);
}if (atomicNumber != 1 && autoBond ) {
this.vwr.ms.validateBspf$Z(false);
bs=this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(1.0, bsA, false, null);
bs.andNot$javajs_util_BS(bsA);
if (bs.nextSetBit$I(0) >= 0) this.vwr.deleteAtoms$javajs_util_BS$Z(bs, false);
bs=this.vwr.getModelUndeletedAtomsBitSet$I(atom.mi);
bs.andNot$javajs_util_BS(this.vwr.ms.getAtomBitsMDa$I$O$javajs_util_BS(1612709900, null, Clazz.new_($I$(4,1))));
this.vwr.ms.makeConnections2$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(0.1, 1.8, 1, 1073741904, bsA, bs, null, false, false, 0);
}if (this.addXtalHydrogens) this.vwr.addHydrogens$javajs_util_BS$Z$Z(bsA, false, true);
}, p$1);

Clazz.newMeth(C$, 'assignBond$I$I', function (bondIndex, type) {
var bondOrder=type - 48;
var bond=this.vwr.ms.bo[bondIndex];
this.vwr.ms.clearDB$I(bond.atom1.i);
switch (type) {
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
break;
case 112:
case 109:
bondOrder=((function(a,f){return f.apply(null,a)})([bond.getCovalentOrder$()],$I$(11).getBondOrderNumberFromOrder$I).charCodeAt$I(0)) - 48 + (type == 112  ? 1 : -1);
if (bondOrder > 3) bondOrder=1;
 else if (bondOrder < 0) bondOrder=3;
break;
default:
return null;
}
var bsAtoms=Clazz.new_($I$(4,1));
try {
if (bondOrder == 0) {
var bs=Clazz.new_($I$(4,1));
bs.set$I(bond.index);
bsAtoms.set$I(bond.atom1.i);
bsAtoms.set$I(bond.atom2.i);
this.vwr.ms.deleteBonds$javajs_util_BS$Z(bs, false);
} else {
bond.setOrder$I(bondOrder | 131072);
if (bond.atom1.getElementNumber$() != 1 && bond.atom2.getElementNumber$() != 1 ) {
this.vwr.ms.removeUnnecessaryBonds$org_jmol_modelset_Atom$Z(bond.atom1, false);
this.vwr.ms.removeUnnecessaryBonds$org_jmol_modelset_Atom$Z(bond.atom2, false);
}bsAtoms.set$I(bond.atom1.i);
bsAtoms.set$I(bond.atom2.i);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})(["Exception in seBondOrder: " + e.toString()],$I$(12).error$S);
} else {
throw e;
}
}
if (type != 48  && this.addXtalHydrogens ) this.vwr.addHydrogens$javajs_util_BS$Z$Z(bsAtoms, false, true);
return bsAtoms;
}, p$1);

Clazz.newMeth(C$, 'isVwrRotateBond', function () {
return (this.vwr.acm.getBondPickingMode$() == 34);
}, p$1);

Clazz.newMeth(C$, 'getRotateBondIndex$', function () {
return (p$1.getMKState.apply(this, []) == 0 && this.isRotateBond  ? this.bondIndex : -1);
});

Clazz.newMeth(C$, 'resetBondFields$S', function (where) {
this.bsRotateBranch=null;
this.branchAtomIndex=this.bondAtomIndex1=this.bondAtomIndex2=-1;
}, p$1);

Clazz.newMeth(C$, 'setBondIndex$I$Z', function (index, isRotate) {
if (!isRotate && p$1.isVwrRotateBond.apply(this, []) ) {
this.vwr.setModelKitRotateBondIndex$I(index);
return;
}var haveBond=(this.bondIndex >= 0);
if (!haveBond && index < 0 ) return;
if (index < 0) {
p$1.resetBondFields$S.apply(this, ["setbondindex<0"]);
return;
}this.bsRotateBranch=null;
this.branchAtomIndex=-1;
this.bondIndex=index;
this.isRotateBond=isRotate;
this.bondAtomIndex1=this.vwr.ms.bo[index].getAtomIndex1$();
this.bondAtomIndex2=this.vwr.ms.bo[index].getAtomIndex2$();
this.setActiveMenu$S("bondMenu");
}, p$1);

Clazz.newMeth(C$, 'actionRotateBond$I$I$I$I$Z', function (deltaX, deltaY, x, y, forceFull) {
if (this.bondIndex < 0) return;
var bsBranch=this.bsRotateBranch;
var atomFix;
var atomMove;
var ms=this.vwr.ms;
if (forceFull) {
bsBranch=null;
this.branchAtomIndex=-1;
}if (bsBranch == null ) {
var b=ms.bo[this.bondIndex];
atomMove=(this.branchAtomIndex == b.atom1.i ? b.atom1 : b.atom2);
atomFix=(atomMove === b.atom1  ? b.atom2 : b.atom1);
this.vwr.undoMoveActionClear$I$I$Z(atomFix.i, 2, true);
if (this.branchAtomIndex >= 0) bsBranch=this.vwr.getBranchBitSet$I$I$Z(atomMove.i, atomFix.i, true);
if (bsBranch != null ) for (var n=0, i=atomFix.bonds.length; --i >= 0; ) {
if (bsBranch.get$I(atomFix.getBondedAtomIndex$I(i)) && ++n == 2 ) {
bsBranch=null;
break;
}}
if (bsBranch == null ) {
bsBranch=ms.getMoleculeBitSetForAtom$I(atomFix.i);
}this.bsRotateBranch=bsBranch;
this.bondAtomIndex1=atomFix.i;
this.bondAtomIndex2=atomMove.i;
} else {
atomFix=ms.at[this.bondAtomIndex1];
atomMove=ms.at[this.bondAtomIndex2];
}var v1=$I$(10).new3$F$F$F(atomMove.sX - atomFix.sX, atomMove.sY - atomFix.sY, 0);
var v2=$I$(10).new3$F$F$F(deltaX, deltaY, 0);
v1.cross$javajs_util_T3$javajs_util_T3(v1, v2);
var degrees=(v1.z > 0  ? 1 : -1) * v2.length$();
var bs=$I$(8).copy$javajs_util_BS(bsBranch);
bs.andNot$javajs_util_BS(this.vwr.slm.getMotionFixedAtoms$());
this.vwr.rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_P3$F$F$Z$javajs_util_BS$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4(null, atomFix, atomMove, 0, degrees, false, bs, null, null, null, null);
});

Clazz.newMeth(C$, 'menuFocusCallback$S$S$Z', function (name, actionCommand, gained) {
if (gained && !p$1.processSymop$S$Z.apply(this, [name, true]) ) this.setActiveMenu$S(name);
});

Clazz.newMeth(C$, 'menuClickCallback$org_jmol_api_SC$S', function (source, script) {
this.doMenuClickCallbackMK$org_jmol_api_SC$S(source, script);
});

Clazz.newMeth(C$, 'doMenuClickCallbackMK$org_jmol_api_SC$S', function (source, script) {
if (p$1.processSymop$S$Z.apply(this, [source.getName$(), false])) return;
if (script.equals$O("clearQPersist")) {
for (var item, $item = this.htCheckbox.values$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (item.getActionCommand$().indexOf$S(":??") < 0) continue;
this.menuSetLabel$org_jmol_api_SC$S(item, "??");
item.setActionCommand$S("_??P!:");
item.setSelected$Z(false);
}
this.appRunScript$S("set picking assignAtom_C");
return;
}this.doMenuClickCallback$org_jmol_api_SC$S(source, script);
});

Clazz.newMeth(C$, 'getScriptForCallback$org_jmol_api_SC$S$S', function (source, id, script) {
if (script.startsWith$S("mk")) {
p$1.processXtalClick$S$S.apply(this, [id, script]);
script=null;
}return script;
});

Clazz.newMeth(C$, 'processXtalClick$S$S', function (id, action) {
if (p$1.processSymop$S$Z.apply(this, [id, false])) return;
action=action.intern$();
if (action.startsWith$S("mkmode_")) {
if (!this.alertedNoEdit && action == "mkmode_edit" ) {
this.alertedNoEdit=true;
this.vwr.alert$S("ModelKit xtal edit has not been implemented");
return;
}p$1.processModeClick$S.apply(this, [action]);
} else if (action.startsWith$S("mksel_")) {
p$1.processSelClick$S.apply(this, [action]);
} else if (action.startsWith$S("mkselop_")) {
p$1.processSelOpClick$S.apply(this, [action]);
} else if (action.startsWith$S("mksymmetry_")) {
p$1.processSymClick$S.apply(this, [action]);
} else if (action.startsWith$S("mkunitcell_")) {
p$1.processUCClick$S.apply(this, [action]);
} else {
C$.notImplemented$S("XTAL click " + action);
}p$1.updateAllXtalMenuOptions.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'processSelOpClick$S', function (action) {
this.secondAtomIndex=-1;
if (action == "mkselop_addoffset") {
var pos=p$1.promptUser$S$S.apply(this, ["Enter i j k for an offset for viewing the operator - leave blank to clear", this.lastOffset]);
if (pos == null ) return;
this.lastOffset=pos;
if (pos.length$() == 0 || pos == "none" ) {
this.setProperty$S$O("offset", "none");
return;
}var p=C$.pointFromTriad$S(pos);
if (p == null ) {
p$1.processSelOpClick$S.apply(this, [action]);
} else {
this.setProperty$S$O("offset", p);
}} else if (action == "mkselop_atom2") {
C$.notImplemented$S(action);
}}, p$1);

Clazz.newMeth(C$, 'processSymop$S$Z', function (id, isFocus) {
var pt=id.indexOf$S(".mkop_");
if (pt >= 0) {
var op=this.symop;
this.symop=Integer.valueOf$S(id.substring$I(pt + 6));
p$1.showSymop$O.apply(this, [this.symop]);
if (isFocus) this.symop=op;
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'showSymop$O', function (symop) {
this.secondAtomIndex=-1;
this.symop=symop;
p$1.showXtalSymmetry.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'processModeClick$S', function (action) {
p$1.processMKPropertyItem$S$Z.apply(this, [action, false]);
}, p$1);

Clazz.newMeth(C$, 'processSelClick$S', function (action) {
if (action == "mksel_atom") {
this.centerPoint=null;
this.centerAtomIndex=-1;
this.secondAtomIndex=-1;
} else if (action == "mksel_position") {
var pos=p$1.promptUser$S$S.apply(this, ["Enter three fractional coordinates", this.lastCenter]);
if (pos == null ) return;
this.lastCenter=pos;
var p=C$.pointFromTriad$S(pos);
if (p == null ) {
p$1.processSelClick$S.apply(this, [action]);
return;
}this.centerAtomIndex=-2147483647;
this.centerPoint=p;
p$1.showXtalSymmetry.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'processSymClick$S', function (action) {
if (action == "mksymmetry_none") {
p$1.setSymEdit$I.apply(this, [0]);
} else {
p$1.processMKPropertyItem$S$Z.apply(this, [action, false]);
}}, p$1);

Clazz.newMeth(C$, 'processUCClick$S', function (action) {
p$1.processMKPropertyItem$S$Z.apply(this, [action, false]);
p$1.showXtalSymmetry.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'handleDragAtom$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$IA', function (pressed, dragged, countPlusIndices) {
switch (p$1.getMKState.apply(this, [])) {
case 0:
return false;
case 2:
if (countPlusIndices[0] > 2) return true;
C$.notImplemented$S("drag atom for XTAL edit");
break;
case 1:
if (p$1.getSymViewState.apply(this, []) == 0) p$1.setSymViewState$I.apply(this, [8]);
switch (countPlusIndices[0]) {
case 1:
this.centerAtomIndex=countPlusIndices[1];
this.secondAtomIndex=-1;
break;
case 2:
this.centerAtomIndex=countPlusIndices[1];
this.secondAtomIndex=countPlusIndices[2];
break;
}
p$1.showXtalSymmetry.apply(this, []);
return true;
}
return true;
});

Clazz.newMeth(C$, 'pointFromTriad$S', function (pos) {
var a=(function(a,f){return f.apply(null,a)})([$I$(6).replaceAllCharacters$S$S$S(pos, "{,}", " ")],$I$(6).parseFloatArray$S);
return (a.length == 3 && !Float.isNaN$F(a[2])  ? $I$(2).new3$F$F$F(a[0], a[1], a[2]) : null);
}, 1);

Clazz.newMeth(C$, 'notImplemented$S', function (action) {
System.err.println$S("ModelKitPopup.notImplemented(" + action + ")" );
}, 1);

Clazz.newMeth(C$, 'promptUser$S$S', function (msg, def) {
return this.vwr.prompt$S$S$SA$Z(msg, def, null, false);
}, p$1);

Clazz.newMeth(C$, 'runScriptBuffered$S', function (script) {
var sb=Clazz.new_($I$(13,1));
try {
System.out.println$S("MKP\n" + script);
(this.vwr.eval).runBufferedSafely$S$javajs_util_SB(script, sb);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'handleAssignNew$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$org_jmol_modelset_MeasurementPending$I', function (pressed, dragged, mp, dragAtomIndex) {
var inRange=pressed.inRange$I$I$I(10, dragged.x, dragged.y);
if (inRange) {
dragged.x=pressed.x;
dragged.y=pressed.y;
}if (this.handleDragAtom$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$IA(pressed, dragged, mp.countPlusIndices)) return true;
var isCharge=this.isPickAtomAssignCharge;
var atomType=this.pickAtomAssignType;
if (mp.count == 2) {
this.vwr.undoMoveActionClear$I$I$Z(-1, 4146, true);
this.appRunScript$S("assign connect " + mp.getMeasurementScript$S$Z(" ", false));
} else if (atomType.equals$O("Xx")) {
return false;
} else {
if (inRange) {
var s="assign atom ({" + dragAtomIndex + "}) \"" + atomType + "\"" ;
if (isCharge) {
s += ";{atomindex=" + dragAtomIndex + "}.label='%C'; " ;
this.vwr.undoMoveActionClear$I$I$Z(dragAtomIndex, 4, true);
} else {
this.vwr.undoMoveActionClear$I$I$Z(-1, 4146, true);
}this.appRunScript$S(s);
} else if (!isCharge) {
this.vwr.undoMoveActionClear$I$I$Z(-1, 4146, true);
var a=this.vwr.ms.at[dragAtomIndex];
if (a.getElementNumber$() == 1) {
this.vwr.assignAtom$I$S$javajs_util_P3(dragAtomIndex, "X", null);
} else {
var x=dragged.x;
var y=dragged.y;
if (this.vwr.antialiased) {
x<<=1;
y<<=1;
}var ptNew=$I$(2).new3$F$F$F(x, y, a.sZ);
this.vwr.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptNew, ptNew);
this.vwr.assignAtom$I$S$javajs_util_P3(dragAtomIndex, atomType, ptNew);
}}}return true;
});

C$.$static$=function(){C$.$static$=0;
C$.bundle=Clazz.new_($I$(1,1).c$$S$java_util_Properties,[null, null]);
C$.Pt000=Clazz.new_($I$(2,1));
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
