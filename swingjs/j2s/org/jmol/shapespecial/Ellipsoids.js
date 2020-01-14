(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.shapespecial.Ellipsoid','javajs.util.Lst','javajs.util.PT','org.jmol.util.C','org.jmol.c.PAL','org.jmol.api.Interface','javajs.util.SB','javajs.util.V3','org.jmol.util.Escape','javajs.util.BS','org.jmol.util.BSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Ellipsoids", null, 'org.jmol.shape.AtomShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.simpleEllipsoids=null;
this.atomEllipsoids=null;
this.typeSelected=null;
this.selectedAtoms=null;
this.ellipsoidSet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.simpleEllipsoids=Clazz.new_($I$(1));
this.atomEllipsoids=Clazz.new_($I$(1));
this.typeSelected="1";
}, 1);

Clazz.newMeth(C$, 'isActive$', function () {
return !this.atomEllipsoids.isEmpty$() || !this.simpleEllipsoids.isEmpty$() ;
});

Clazz.newMeth(C$, 'getIndexFromName$S', function (thisID) {
return (p$1.checkID$S.apply(this, [thisID]) ? 1 : -1);
});

Clazz.newMeth(C$, 'setSize$I$javajs_util_BS', function (size, bsSelected) {
if (this.atoms == null  || size == 0 && this.ms.atomTensors == null   ) return;
var isAll=(bsSelected == null );
if (!isAll && this.selectedAtoms != null  ) bsSelected=this.selectedAtoms;
var tensors=this.vwr.ms.getAllAtomTensors$S(this.typeSelected);
if (tensors == null ) return;
for (var i=tensors.size$(); --i >= 0; ) {
var t=tensors.get$I(i);
if (isAll || t.isSelected$javajs_util_BS$I(bsSelected, -1) ) {
var e=this.atomEllipsoids.get$O(t);
var isNew=(size != 0 && e == null  );
if (isNew) this.atomEllipsoids.put$TK$TV(t, e=$I$(2).getEllipsoidForAtomTensor$org_jmol_util_Tensor$org_jmol_modelset_Atom(t, this.atoms[t.atomIndex1]));
if (e != null ) {
e.setScale$F$Z(size, true);
}}}
});

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
if (property == "checkID") {
return (p$1.checkID$S.apply(this, [data[0]]));
}return this.getPropShape$S$OA(property, data);
});

Clazz.newMeth(C$, 'checkID$S', function (thisID) {
this.ellipsoidSet=Clazz.new_($I$(3));
if (thisID == null ) return false;
thisID=thisID.toLowerCase$();
if ($I$(4).isWild$S(thisID)) {
for (var e, $e = this.simpleEllipsoids.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$().toLowerCase$();
if ($I$(4).isMatch$S$S$Z$Z(key, thisID, true, true)) this.ellipsoidSet.addLast$TV(e.getValue$());
}
}var e=this.simpleEllipsoids.get$O(thisID);
if (e != null ) this.ellipsoidSet.addLast$TV(e);
return (this.ellipsoidSet.size$() > 0);
}, p$1);

Clazz.newMeth(C$, 'initEllipsoids$O', function (value) {
var haveID=(value != null );
p$1.checkID$S.apply(this, [value]);
if (haveID) this.typeSelected=null;
this.selectedAtoms=null;
return haveID;
}, p$1);

Clazz.newMeth(C$, 'initShape$', function () {
this.setProperty$S$O$javajs_util_BS("thisID", null, null);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if (propertyName == "thisID") {
if (p$1.initEllipsoids$O.apply(this, [value]) && this.ellipsoidSet.size$() == 0 ) {
var id=value;
var e=$I$(2).getEmptyEllipsoid$S$I(id, this.vwr.am.cmi);
this.ellipsoidSet.addLast$TV(e);
this.simpleEllipsoids.put$TK$TV(id, e);
}return;
}if ("atoms" == propertyName) {
this.selectedAtoms=value;
return;
}if (propertyName == "deleteModelAtoms") {
var modelIndex=((value)[2])[0];
var e=this.simpleEllipsoids.values$().iterator$();
while (e.hasNext$())if (e.next$().tensor.modelIndex == modelIndex) e.remove$();

e=this.atomEllipsoids.values$().iterator$();
while (e.hasNext$())if (e.next$().modelIndex == modelIndex) e.remove$();

this.ellipsoidSet.clear$();
return;
}var mode="ax ce co de eq mo on op sc tr".indexOf$S((propertyName + "  ").substring$I$I(0, 2));
if (this.ellipsoidSet.size$() > 0) {
if ("translucentLevel" == propertyName) {
this.setPropS$S$O$javajs_util_BS(propertyName, value, bs);
return;
}if (mode >= 0) for (var i=this.ellipsoidSet.size$(); --i >= 0; ) p$1.setProp$org_jmol_shapespecial_Ellipsoid$I$O.apply(this, [this.ellipsoidSet.get$I(i), (mode/3|0), value]);

return;
}if ("color" == propertyName) {
var colix=$I$(5).getColixO$O(value);
var pid=($b$[0] = $I$(6).pidOf$O(value), $b$[0]);
if (this.selectedAtoms != null ) bs=this.selectedAtoms;
for (var e, $e = this.atomEllipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e.tensor.type.equals$O(this.typeSelected) && e.tensor.isSelected$javajs_util_BS$I(bs, -1) ) {
e.colix=this.getColixI$H$B$I(colix, ($b$[0] = pid, $b$[0]), e.tensor.atomIndex1);
e.pid=($b$[0] = pid, $b$[0]);
}
return;
}if ("on" == propertyName) {
var isOn=(value).booleanValue$();
if (this.selectedAtoms != null ) bs=this.selectedAtoms;
if (isOn) this.setSize$I$javajs_util_BS(2147483647, bs);
for (var e, $e = this.atomEllipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var t=e.tensor;
if ((t.type.equals$O(this.typeSelected) || this.typeSelected.equals$O(t.altType) ) && t.isSelected$javajs_util_BS$I(bs, -1) ) {
e.isOn=isOn;
}(e.center).setShapeVisibility$I$Z(this.vf, isOn);
}
return;
}if ("options" == propertyName) {
var options=(value).toLowerCase$().trim$();
if (options.length$() == 0) options=null;
if (this.selectedAtoms != null ) bs=this.selectedAtoms;
if (options != null ) this.setSize$I$javajs_util_BS(2147483647, bs);
for (var e, $e = this.atomEllipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e.tensor.type.equals$O(this.typeSelected) && e.tensor.isSelected$javajs_util_BS$I(bs, -1) ) e.options=options;

return;
}if ("params" == propertyName) {
var data=value;
data[2]=null;
this.typeSelected="0";
this.setSize$I$javajs_util_BS(50, bs);
}if ("points" == propertyName) {
return;
}if ("scale" == propertyName) {
this.setSize$I$javajs_util_BS((((value).floatValue$() * 100)|0), bs);
return;
}if ("select" == propertyName) {
this.typeSelected=(value).toLowerCase$();
return;
}if ("translucency" == propertyName) {
var isTranslucent=(value.equals$O("translucent"));
for (var e, $e = this.atomEllipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e.tensor.type.equals$O(this.typeSelected) && e.tensor.isSelected$javajs_util_BS$I(bs, -1) ) e.colix=$I$(5).getColixTranslucent3$H$Z$F(e.colix, isTranslucent, this.translucentLevel);

return;
}this.setPropS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'setProp$org_jmol_shapespecial_Ellipsoid$I$O', function (e, mode, value) {
switch (mode) {
case 0:
e.setTensor$org_jmol_util_Tensor(($I$(7).getUtil$S$org_jmol_viewer_Viewer$S("Tensor", this.vwr, "script")).setFromAxes$javajs_util_V3A(value));
return;
case 1:
e.setCenter$javajs_util_P3(value);
return;
case 2:
e.colix=$I$(5).getColixO$O(value);
return;
case 3:
this.simpleEllipsoids.remove$O(e.id);
return;
case 4:
e.setTensor$org_jmol_util_Tensor(($I$(7).getUtil$S$org_jmol_viewer_Viewer$S("Tensor", this.vwr, "script")).setFromThermalEquation$DA$S(value, null));
return;
case 5:
e.tensor.modelIndex=(value).intValue$();
return;
case 6:
e.isOn=(value).booleanValue$();
return;
case 7:
e.options=(value).toLowerCase$();
return;
case 8:
e.setScale$F$Z((value).floatValue$(), false);
return;
case 9:
e.colix=$I$(5).getColixTranslucent3$H$Z$F(e.colix, value.equals$O("translucent"), this.translucentLevel);
return;
}
return;
}, p$1);

Clazz.newMeth(C$, 'getShapeState$', function () {
if (!this.isActive$()) return "";
var sb=Clazz.new_($I$(8));
sb.append$S("\n");
if (!this.simpleEllipsoids.isEmpty$()) p$1.getStateID$javajs_util_SB.apply(this, [sb]);
if (!this.atomEllipsoids.isEmpty$()) p$1.getStateAtoms$javajs_util_SB.apply(this, [sb]);
return sb.toString();
});

Clazz.newMeth(C$, 'getStateID$javajs_util_SB', function (sb) {
var v1=Clazz.new_($I$(9));
for (var ellipsoid, $ellipsoid = this.simpleEllipsoids.values$().iterator$(); $ellipsoid.hasNext$()&&((ellipsoid=($ellipsoid.next$())),1);) {
var t=ellipsoid.tensor;
if (!ellipsoid.isValid || t == null  ) continue;
sb.append$S("  Ellipsoid ID ").append$S(ellipsoid.id).append$S(" modelIndex ").appendI$I(t.modelIndex).append$S(" center ").append$S($I$(10).eP$javajs_util_T3(ellipsoid.center)).append$S(" axes");
for (var i=0; i < 3; i++) {
v1.setT$javajs_util_T3(t.eigenVectors[i]);
v1.scale$F(ellipsoid.lengths[i]);
sb.append$S(" ").append$S($I$(10).eP$javajs_util_T3(v1));
}
sb.append$S(" " + org.jmol.shape.Shape.getColorCommandUnk$S$H$Z("", ellipsoid.colix, this.translucentAllowed));
if (ellipsoid.options != null ) sb.append$S(" options ").append$S($I$(4).esc$S(ellipsoid.options));
if (!ellipsoid.isOn) sb.append$S(" off");
sb.append$S(";\n");
}
}, p$1);

Clazz.newMeth(C$, 'getStateAtoms$javajs_util_SB', function (sb) {
var bsDone=Clazz.new_($I$(11));
var temp=Clazz.new_($I$(1));
var temp2=Clazz.new_($I$(1));
for (var e, $e = this.atomEllipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var iType=e.tensor.iType;
if (bsDone.get$I(iType + 1)) continue;
bsDone.set$I(iType + 1);
var isADP=(e.tensor.iType == 1);
var cmd=(isADP ? null : "Ellipsoids set " + $I$(4).esc$S(e.tensor.type));
for (var e2, $e2 = this.atomEllipsoids.values$().iterator$(); $e2.hasNext$()&&((e2=($e2.next$())),1);) {
if (e2.tensor.iType != iType || isADP && !e2.isOn  ) continue;
var i=e2.tensor.atomIndex1;
$I$(12).setMapBitSet$java_util_Map$I$I$S(temp, i, i, (isADP ? "Ellipsoids " + e2.percent : cmd + " scale " + new Float(e2.scale).toString() + (e2.options == null  ? "" : " options " + $I$(4).esc$S(e2.options)) + (e2.isOn ? " ON" : " OFF") ));
if (e2.colix != 0) $I$(12).setMapBitSet$java_util_Map$I$I$S(temp2, i, i, org.jmol.shape.Shape.getColorCommand$S$B$H$Z(cmd, ($b$[0] = e2.pid, $b$[0]), e2.colix, this.translucentAllowed));
}
}
sb.append$S(this.vwr.getCommands$java_util_Map$java_util_Map$S(temp, temp2, "select"));
}, p$1);

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
if (!this.isActive$()) return;
p$1.setVis$java_util_Map$javajs_util_BS$org_jmol_modelset_AtomA.apply(this, [this.simpleEllipsoids, bsModels, this.atoms]);
p$1.setVis$java_util_Map$javajs_util_BS$org_jmol_modelset_AtomA.apply(this, [this.atomEllipsoids, bsModels, this.atoms]);
});

Clazz.newMeth(C$, 'setVis$java_util_Map$javajs_util_BS$org_jmol_modelset_AtomA', function (ellipsoids, bs, atoms) {
for (var e, $e = ellipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var t=e.tensor;
var isOK=(t != null  && e.isValid  && e.isOn );
if (isOK && t.atomIndex1 >= 0 ) {
if (t.iType == 1) {
var isModTensor=t.isModulated;
var isUnmodTensor=t.isUnmodulated;
var isModAtom=this.ms.isModulated$I(t.atomIndex1);
isOK=(!isModTensor && !isUnmodTensor  || isModTensor == isModAtom  );
}atoms[t.atomIndex1].setShapeVisibility$I$Z(this.vf, true);
}e.visible=isOK && (e.modelIndex < 0 || bs.get$I(e.modelIndex) ) ;
}
}, p$1);

Clazz.newMeth(C$, 'setAtomClickability$', function () {
if (this.atomEllipsoids.isEmpty$()) return;
for (var e, $e = this.atomEllipsoids.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var i=e.tensor.atomIndex1;
var atom=this.atoms[i];
if ((atom.shapeVisibilityFlags & this.vf) == 0 || this.ms.isAtomHidden$I(i) ) continue;
atom.setClickable$I(this.vf);
}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
