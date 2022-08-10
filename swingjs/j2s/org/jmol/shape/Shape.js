(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.viewer.JC','org.jmol.util.Logger','org.jmol.util.C','org.jmol.c.PAL']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Shape");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.translucentAllowed=true;
},1);

C$.$fields$=[['Z',['translucentAllowed','isBioShape'],'F',['translucentLevel'],'I',['shapeID','vf'],'S',['myType'],'O',['vwr','org.jmol.viewer.Viewer','ms','org.jmol.modelset.ModelSet','bsSizeSet','javajs.util.BS','+bsColixSet']]]

Clazz.newMeth(C$, 'initializeShape$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$I', function (vwr, modelSet, shapeID) {
this.vwr=vwr;
this.shapeID=shapeID;
this.vf=$I$(1).getShapeVisibilityFlag$I(shapeID);
this.setModelSet$org_jmol_modelset_ModelSet(modelSet);
this.initShape$();
});

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
});

Clazz.newMeth(C$, 'getSize$I', function (atomIndex) {
return 0;
});

Clazz.newMeth(C$, 'getSizeG$org_jmol_modelset_Group', function (group) {
return 0;
});

Clazz.newMeth(C$, 'replaceGroup$org_jmol_modelset_Group$org_jmol_modelset_Group', function (g0, g1) {
});

Clazz.newMeth(C$, 'setModelSet$org_jmol_modelset_ModelSet', function (modelSet) {
this.ms=modelSet;
this.initModelSet$();
});

Clazz.newMeth(C$, 'initModelSet$', function () {
});

Clazz.newMeth(C$, 'setShapeSizeRD$I$org_jmol_atomdata_RadiusData$javajs_util_BS', function (size, rd, bsSelected) {
if (rd == null ) this.setSize$I$javajs_util_BS(size, bsSelected);
 else this.setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS(rd, bsSelected);
});

Clazz.newMeth(C$, 'setSize$I$javajs_util_BS', function (size, bsSelected) {
});

Clazz.newMeth(C$, 'setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS', function (rd, bsSelected) {
});

Clazz.newMeth(C$, 'setPropS$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if (propertyName === "setProperties" ) {
if (bsSelected == null ) bsSelected=this.vwr.bsA$();
var propertyList=value;
while (propertyList.size$() > 0){
var data=propertyList.removeItemAt$I(0);
this.setProperty$S$O$javajs_util_BS((data[0]).intern$(), data[1], bsSelected);
}
return;
}if (propertyName === "translucentLevel" ) {
this.translucentLevel=(value).floatValue$();
return;
}if (propertyName === "refreshTrajectories" ) {
return;
}$I$(2,"warn$S",["unassigned " + $I$(1).shapeClassBases[this.shapeID] + " + shape setProperty:" + propertyName + ":" + value ]);
});

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
return this.getPropShape$S$OA(property, data);
});

Clazz.newMeth(C$, 'getPropShape$S$OA', function (property, data) {
if (Clazz.instanceOf(data[1], "java.lang.Integer")) {
var index=(data[1]).intValue$();
data[1]=this.getProperty$S$I(property, index);
return (data[1] != null );
}return false;
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
return null;
});

Clazz.newMeth(C$, 'getIndexFromName$S', function (thisID) {
return -1;
});

Clazz.newMeth(C$, 'wasClicked$I$I', function (x, y) {
return false;
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS', function (xMouse, yMouse, closest, bsNot) {
});

Clazz.newMeth(C$, 'checkBoundsMinMax$javajs_util_P3$javajs_util_P3', function (pointMin, pointMax) {
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, modifiers, bsVisible, drawPicking) {
return null;
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS', function (x, y, bsVisible) {
return false;
});

Clazz.newMeth(C$, 'checkObjectDragged$I$I$I$I$I$javajs_util_BS', function (prevX, prevY, x, y, dragAction, bsVisible) {
return false;
});

Clazz.newMeth(C$, 'coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i', function (x, y, vertex, dmin2, ptXY) {
this.vwr.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(vertex, ptXY);
var d2=(x - ptXY.x) * (x - ptXY.x) + (y - ptXY.y) * (y - ptXY.y);
return (d2 < dmin2 ? d2 : -1);
});

Clazz.newMeth(C$, 'getColixI$H$B$I', function (colix, paletteID, atomIndex) {
return this.getColixA$H$B$org_jmol_modelset_Atom(colix, paletteID, this.ms.at[atomIndex]);
});

Clazz.newMeth(C$, 'getColixA$H$B$org_jmol_modelset_Atom', function (colix, paletteID, atom) {
return (colix == 2 ? this.vwr.cm.getColixAtomPalette$org_jmol_modelset_Atom$B(atom, paletteID) : colix);
});

Clazz.newMeth(C$, 'getColixB$H$I$org_jmol_modelset_Bond', function (colix, pid, bond) {
return (colix == 2 ? this.vwr.cm.getColixBondPalette$org_jmol_modelset_Bond$I(bond, pid) : colix);
});

Clazz.newMeth(C$, 'getShapeDetail$', function () {
return null;
});

Clazz.newMeth(C$, 'getColix$HA$I$org_jmol_modelset_Atom', function (colixes, i, atom) {
return $I$(3,"getColixInherited$H$H",[(colixes == null  || i >= colixes.length  ? 0 : colixes[i]), atom.colixAtom]);
}, 1);

Clazz.newMeth(C$, 'getFontCommand$S$org_jmol_util_Font', function (type, font) {
if (font == null ) return "";
return "font " + type + " " + font.getInfo$() ;
}, 1);

Clazz.newMeth(C$, 'getColorCommandUnk$S$H$Z', function (type, colix, translucentAllowed) {
return C$.getColorCommand$S$B$H$Z(type, $I$(4).UNKNOWN.id, colix, translucentAllowed);
}, 1);

Clazz.newMeth(C$, 'getColorCommand$S$B$H$Z', function (type, pid, colix, translucentAllowed) {
if (pid == $I$(4).UNKNOWN.id && colix == 0 ) return "";
var s=(pid == $I$(4).UNKNOWN.id && colix == 0  ? "" : (translucentAllowed ? C$.getTranslucentLabel$H(colix) + " " : "") + (pid != $I$(4).UNKNOWN.id && !$I$(4).isPaletteVariable$B(pid)  ? $I$(4).getPaletteName$B(pid) : C$.encodeColor$H(colix)));
return "color " + type + " " + s ;
}, 1);

Clazz.newMeth(C$, 'encodeColor$H', function (colix) {
return ($I$(3).isColixColorInherited$H(colix) ? "none" : $I$(3).getHexCode$H(colix));
}, 1);

Clazz.newMeth(C$, 'getTranslucentLabel$H', function (colix) {
return ($I$(3).isColixTranslucent$H(colix) ? $I$(3).getColixTranslucencyLabel$H(colix) : "opaque");
}, 1);

Clazz.newMeth(C$, 'appendCmd$javajs_util_SB$S', function (s, cmd) {
if (cmd.length$() == 0) return;
s.append$S("  ").append$S(cmd).append$S(";\n");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
