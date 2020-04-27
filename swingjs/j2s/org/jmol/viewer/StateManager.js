(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','java.util.Arrays','org.jmol.util.BSUtil','javajs.util.BS','org.jmol.modelset.Orientation','org.jmol.viewer.Scene','org.jmol.viewer.Connections','org.jmol.viewer.Connection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StateManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.saved=Clazz.new_($I$(1,1));
this.lastOrientation="";
this.lastContext="";
this.lastConnections="";
this.lastScene="";
this.lastSelected="";
this.lastState="";
this.lastShape="";
this.lastCoordinates="";
},1);

C$.$fields$=[['S',['lastOrientation','lastContext','lastConnections','lastScene','lastSelected','lastState','lastShape','lastCoordinates'],'O',['vwr','org.jmol.viewer.Viewer','saved','java.util.Map']]]

Clazz.newMeth(C$, 'getVariableList$java_util_Map$I$Z$Z', function (htVariables, nMax, withSites, definedOnly) {
var sb=Clazz.new_($I$(2,1));
var n=0;
var list=Clazz.array(String, [htVariables.size$()]);
for (var entry, $entry = htVariables.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var $var=entry.getValue$();
if ((withSites || !key.startsWith$S("site_") ) && (!definedOnly || key.charAt$I(0) == "@" ) ) list[n++]=key + (key.charAt$I(0) == "@" ? " " + $var.asString$() : " = " + C$.varClip$S$S$I(key, $var.escape$(), nMax));
}
$I$(3).sort$OA$I$I(list, 0, n);
for (var i=0; i < n; i++) if (list[i] != null ) sb.append$S("  ").append$S(list[i]).append$S(";\n");

if (n == 0 && !definedOnly ) sb.append$S("# --no global user variables defined--;\n");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getObjectIdFromName$S', function (name) {
if (name == null ) return -1;
var objID="background axis1      axis2      axis3      boundbox   unitcell   frank      ".indexOf$S(name.toLowerCase$());
return (objID < 0 ? objID : (objID/11|0));
}, 1);

Clazz.newMeth(C$, 'getObjectNameFromId$I', function (objId) {
if (objId < 0 || objId >= 7 ) return null;
return "background axis1      axis2      axis3      boundbox   unitcell   frank      ".substring$I$I(objId * 11, objId * 11 + 11).trim$();
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
;C$.$init$.apply(this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'clear$org_jmol_viewer_GlobalSettings', function (global) {
this.vwr.setShowAxes$Z(false);
this.vwr.setShowBbcage$Z(false);
this.vwr.setShowUnitCell$Z(false);
global.clear$();
});

Clazz.newMeth(C$, 'resetLighting$', function () {
this.vwr.setIntProperty$S$I("ambientPercent", 45);
this.vwr.setIntProperty$S$I("celShadingPower", 10);
this.vwr.setIntProperty$S$I("diffusePercent", 84);
this.vwr.setIntProperty$S$I("phongExponent", 64);
this.vwr.setIntProperty$S$I("specularExponent", 6);
this.vwr.setIntProperty$S$I("specularPercent", 22);
this.vwr.setIntProperty$S$I("specularPower", 40);
this.vwr.setIntProperty$S$I("zDepth", 0);
this.vwr.setIntProperty$S$I("zShadePower", 3);
this.vwr.setIntProperty$S$I("zSlab", 50);
this.vwr.setBooleanProperty$S$Z("specular", true);
this.vwr.setBooleanProperty$S$Z("celShading", false);
this.vwr.setBooleanProperty$S$Z("zshade", false);
});

Clazz.newMeth(C$, 'setCrystallographicDefaults$', function () {
this.vwr.setAxesMode$I(603979808);
this.vwr.setShowAxes$Z(true);
this.vwr.setShowUnitCell$Z(true);
this.vwr.setBooleanProperty$S$Z("perspectiveDepth", false);
});

Clazz.newMeth(C$, 'setCommonDefaults', function () {
this.vwr.setBooleanProperty$S$Z("perspectiveDepth", true);
this.vwr.setFloatProperty$S$F("bondTolerance", 0.45);
this.vwr.setFloatProperty$S$F("minBondDistance", 0.4);
this.vwr.setIntProperty$S$I("bondingVersion", 0);
this.vwr.setBooleanProperty$S$Z("translucent", true);
}, p$1);

Clazz.newMeth(C$, 'setJmolDefaults$', function () {
p$1.setCommonDefaults.apply(this, []);
this.vwr.setStringProperty$S$S("defaultColorScheme", "Jmol");
this.vwr.setBooleanProperty$S$Z("axesOrientationRasmol", false);
this.vwr.setBooleanProperty$S$Z("zeroBasedXyzRasmol", false);
this.vwr.setIntProperty$S$I("percentVdwAtom", 23);
this.vwr.setIntProperty$S$I("bondRadiusMilliAngstroms", 150);
this.vwr.setVdwStr$S("auto");
});

Clazz.newMeth(C$, 'setRasMolDefaults$', function () {
p$1.setCommonDefaults.apply(this, []);
this.vwr.setStringProperty$S$S("defaultColorScheme", "RasMol");
this.vwr.setBooleanProperty$S$Z("axesOrientationRasmol", true);
this.vwr.setBooleanProperty$S$Z("zeroBasedXyzRasmol", true);
this.vwr.setIntProperty$S$I("percentVdwAtom", 0);
this.vwr.setIntProperty$S$I("bondRadiusMilliAngstroms", 1);
this.vwr.setVdwStr$S("Rasmol");
});

Clazz.newMeth(C$, 'setPyMOLDefaults$', function () {
p$1.setCommonDefaults.apply(this, []);
this.vwr.setStringProperty$S$S("measurementUnits", "ANGSTROMS");
this.vwr.setBooleanProperty$S$Z("zoomHeight", true);
});

Clazz.newMeth(C$, 'getNoCase$java_util_Map$S', function (saved, name) {
for (var e, $e = saved.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e.getKey$().equalsIgnoreCase$S(name)) return e.getValue$();

return null;
}, 1);

Clazz.newMeth(C$, 'listSavedStates$', function () {
var names="";
for (var name, $name = this.saved.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) names += "\n" + name;

return names;
});

Clazz.newMeth(C$, 'deleteSavedType$S', function (type) {
var e=this.saved.keySet$().iterator$();
while (e.hasNext$())if (e.next$().startsWith$S(type)) e.remove$();

}, p$1);

Clazz.newMeth(C$, 'deleteSaved$S', function (namelike) {
var e=this.saved.keySet$().iterator$();
while (e.hasNext$()){
var name=e.next$();
if (name.startsWith$S(namelike) || name.endsWith$S("_" + namelike) && name.indexOf$S("_") == name.lastIndexOf$S("_" + namelike)  ) e.remove$();
}
});

Clazz.newMeth(C$, 'saveSelection$S$javajs_util_BS', function (saveName, bsSelected) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Selected_"]);
return;
}saveName=this.lastSelected="Selected_" + saveName;
this.saved.put$O$O(saveName, $I$(4).copy$javajs_util_BS(bsSelected));
});

Clazz.newMeth(C$, 'restoreSelection$S', function (saveName) {
var name=(saveName.length$() > 0 ? "Selected_" + saveName : this.lastSelected);
var bsSelected=C$.getNoCase$java_util_Map$S(this.saved, name);
if (bsSelected == null ) {
this.vwr.select$javajs_util_BS$Z$I$Z(Clazz.new_($I$(5,1)), false, 0, false);
return false;
}this.vwr.select$javajs_util_BS$Z$I$Z(bsSelected, false, 0, false);
return true;
});

Clazz.newMeth(C$, 'saveState$S', function (saveName) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["State_"]);
return;
}saveName=this.lastState="State_" + saveName;
this.saved.put$O$O(saveName, this.vwr.getStateInfo$());
});

Clazz.newMeth(C$, 'getSavedState$S', function (saveName) {
var name=(saveName.length$() > 0 ? "State_" + saveName : this.lastState);
var script=C$.getNoCase$java_util_Map$S(this.saved, name);
return (script == null  ? "" : script);
});

Clazz.newMeth(C$, 'saveStructure$S', function (saveName) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Shape_"]);
return;
}saveName=this.lastShape="Shape_" + saveName;
this.saved.put$O$O(saveName, this.vwr.getStructureState$());
});

Clazz.newMeth(C$, 'getSavedStructure$S', function (saveName) {
var name=(saveName.length$() > 0 ? "Shape_" + saveName : this.lastShape);
var script=C$.getNoCase$java_util_Map$S(this.saved, name);
return (script == null  ? "" : script);
});

Clazz.newMeth(C$, 'saveCoordinates$S$javajs_util_BS', function (saveName, bsSelected) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Coordinates_"]);
return;
}saveName=this.lastCoordinates="Coordinates_" + saveName;
this.saved.put$O$O(saveName, this.vwr.getCoordinateState$javajs_util_BS(bsSelected));
});

Clazz.newMeth(C$, 'getSavedCoordinates$S', function (saveName) {
var name=(saveName.length$() > 0 ? "Coordinates_" + saveName : this.lastCoordinates);
var script=C$.getNoCase$java_util_Map$S(this.saved, name);
return (script == null  ? "" : script);
});

Clazz.newMeth(C$, 'getOrientation$', function () {
return Clazz.new_($I$(6,1).c$$org_jmol_viewer_Viewer$Z$FA,[this.vwr, false, null]);
});

Clazz.newMeth(C$, 'getSavedOrientationText$S', function (saveName) {
var o;
if (saveName != null ) {
o=p$1.getOrientationFor$S.apply(this, [saveName]);
return (o == null  ? "" : o.getMoveToText$Z(true));
}var sb=Clazz.new_($I$(2,1));
for (var e, $e = this.saved.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
if (name.startsWith$S("Orientation_")) sb.append$S((e.getValue$()).getMoveToText$Z(true));
}
return sb.toString();
});

Clazz.newMeth(C$, 'saveScene$S$java_util_Map', function (saveName, scene) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Scene_"]);
return;
}var o=Clazz.new_($I$(7,1).c$$java_util_Map,[scene]);
o.saveName=this.lastScene="Scene_" + saveName;
this.saved.put$O$O(o.saveName, o);
});

Clazz.newMeth(C$, 'restoreScene$S$F', function (saveName, timeSeconds) {
var o=C$.getNoCase$java_util_Map$S(this.saved, (saveName.length$() > 0 ? "Scene_" + saveName : this.lastScene));
return (o != null  && o.restore$org_jmol_viewer_Viewer$F(this.vwr, timeSeconds) );
});

Clazz.newMeth(C$, 'saveOrientation$S$FA', function (saveName, pymolView) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Orientation_"]);
return;
}var o=Clazz.new_([this.vwr, saveName.equalsIgnoreCase$S("default"), pymolView],$I$(6,1).c$$org_jmol_viewer_Viewer$Z$FA);
o.saveName=this.lastOrientation="Orientation_" + saveName;
this.saved.put$O$O(o.saveName, o);
});

Clazz.newMeth(C$, 'restoreOrientation$S$F$Z', function (saveName, timeSeconds, isAll) {
var o=p$1.getOrientationFor$S.apply(this, [saveName]);
return (o != null  && o.restore$F$Z(timeSeconds, isAll) );
});

Clazz.newMeth(C$, 'getOrientationFor$S', function (saveName) {
var name=(saveName.length$() > 0 ? "Orientation_" + saveName : this.lastOrientation);
return C$.getNoCase$java_util_Map$S(this.saved, name);
}, p$1);

Clazz.newMeth(C$, 'saveContext$S$O', function (saveName, context) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Context_"]);
return;
}this.saved.put$O$O((this.lastContext="Context_" + saveName), context);
});

Clazz.newMeth(C$, 'getContext$S', function (saveName) {
return this.saved.get$O(saveName.length$() == 0 ? this.lastContext : "Context_" + saveName);
});

Clazz.newMeth(C$, 'saveBonds$S', function (saveName) {
if (saveName.equalsIgnoreCase$S("DELETE")) {
p$1.deleteSavedType$S.apply(this, ["Bonds_"]);
return;
}var b=Clazz.new_($I$(8,1).c$$org_jmol_viewer_Viewer,[this.vwr]);
b.saveName=this.lastConnections="Bonds_" + saveName;
this.saved.put$O$O(b.saveName, b);
});

Clazz.newMeth(C$, 'restoreBonds$S', function (saveName) {
this.vwr.clearModelDependentObjects$();
var name=(saveName.length$() > 0 ? "Bonds_" + saveName : this.lastConnections);
var c=C$.getNoCase$java_util_Map$S(this.saved, name);
return (c != null  && c.restore$() );
});

Clazz.newMeth(C$, 'varClip$S$S$I', function (name, sv, nMax) {
if (nMax > 0 && sv.length$() > nMax ) sv=sv.substring$I$I(0, nMax) + " #...more (" + sv.length$() + " bytes -- use SHOW " + name + " or MESSAGE @" + name + " to view)" ;
return sv;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
