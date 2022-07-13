(function(){var P$=Clazz.newPackage("org.jmol.shapebio"),I$=[[0,'javajs.util.AU','org.jmol.c.PAL','org.jmol.util.C','java.util.Hashtable','org.jmol.viewer.JC','org.jmol.shapebio.BioShape','org.jmol.util.BSUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BioShapeCollection", null, 'org.jmol.shape.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.madOn=($s$[0] = -2, $s$[0]);
this.madHelixSheet=($s$[0] = 3000, $s$[0]);
this.madTurnRandom=($s$[0] = 800, $s$[0]);
this.madDnaRna=($s$[0] = 5000, $s$[0]);
this.isActive=false;
},1);

C$.$fields$=[['Z',['isActive'],'H',['madOn','madHelixSheet','madTurnRandom','madDnaRna'],'O',['atoms','org.jmol.modelset.Atom[]','bioShapes','org.jmol.shapebio.BioShape[]']]]

Clazz.newMeth(C$, 'initModelSet$', function () {
this.isBioShape=true;
this.atoms=this.ms.at;
this.initialize$();
});

Clazz.newMeth(C$, 'initShape$', function () {
});

Clazz.newMeth(C$, 'getSizeG$org_jmol_modelset_Group', function (group) {
var m=group;
var groupIndex=m.groupIndex;
var leadAtomIndex=m.getLeadAtom$().i;
for (var i=this.bioShapes.length; --i >= 0; ) {
var bioShape=this.bioShapes[i];
for (var j=0; j < bioShape.monomerCount; j++) {
if (bioShape.monomers[j].groupIndex == groupIndex && bioShape.monomers[j].getLeadAtom$().i == leadAtomIndex ) return bioShape.mads[j];
}
}
return 0;
});

Clazz.newMeth(C$, 'replaceGroup$org_jmol_modelset_Group$org_jmol_modelset_Group', function (g0, g1) {
for (var i=this.bioShapes.length; --i >= 0; ) {
var bioShape=this.bioShapes[i];
for (var j=0; j < bioShape.monomerCount; j++) if (bioShape.monomers[j] === g0 ) {
bioShape.monomers[j]=g1;
break;
}
}
});

Clazz.newMeth(C$, 'setShapeSizeRD$I$org_jmol_atomdata_RadiusData$javajs_util_BS', function (size, rd, bsSelected) {
var mad=($s$[0] = size, $s$[0]);
this.initialize$();
for (var i=this.bioShapes.length; --i >= 0; ) {
var bioShape=this.bioShapes[i];
if (bioShape.monomerCount > 0) bioShape.setMad$H$javajs_util_BS$FA(mad, bsSelected, (rd == null  ? null : rd.values));
}
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
this.setPropBSC$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'setPropBSC$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if (propertyName === "refreshTrajectories" ) {
var modelIndex=((value)[0]).intValue$();
for (var i=this.bioShapes.length; --i >= 0; ) {
var b=this.bioShapes[i];
if (b.modelIndex == modelIndex) b.falsifyMesh$();
}
return;
}if (propertyName === "deleteModelAtoms" ) {
this.atoms=(value)[1];
var modelIndex=((value)[2])[0];
for (var i=this.bioShapes.length; --i >= 0; ) {
var b=this.bioShapes[i];
if (b.modelIndex > modelIndex) {
b.modelIndex--;
b.leadAtomIndices=b.bioPolymer.getLeadAtomIndices$();
} else if (b.modelIndex == modelIndex) {
this.bioShapes=$I$(1).deleteElements$O$I$I(this.bioShapes, i, 1);
}}
return;
}this.initialize$();
if ("color" === propertyName ) {
var pid=$I$(2).pidOf$O(value);
var colix=$I$(3).getColixO$O(value);
for (var i=this.bioShapes.length; --i >= 0; ) {
var bioShape=this.bioShapes[i];
if (bioShape.monomerCount > 0) bioShape.setColixBS$H$B$javajs_util_BS(colix, pid, bsSelected);
}
return;
}if ("params" === propertyName ) {
var n=bsSelected.length$();
var atomMap=Clazz.array(Integer.TYPE, [n]);
for (var pt=0, i=bsSelected.nextSetBit$I(0); i >= 0; i=bsSelected.nextSetBit$I(i + 1), pt++) atomMap[i]=pt;

for (var i=this.bioShapes.length; --i >= 0; ) this.bioShapes[i].setParams$OA$IA$javajs_util_BS(value, atomMap, bsSelected);

return;
}if ("colorPhase" === propertyName ) {
var twoColors=value;
var colixBack=$I$(3).getColixO$O(twoColors[0]);
var colix=$I$(3).getColixO$O(twoColors[1]);
for (var i=this.bioShapes.length; --i >= 0; ) {
var bioShape=this.bioShapes[i];
if (bioShape.monomerCount > 0) {
bioShape.setColixBS$H$B$javajs_util_BS(colix, 64, bsSelected);
bioShape.setColixBack$H$javajs_util_BS(colixBack, bsSelected);
}}
return;
}if ("translucency" === propertyName ) {
var isTranslucent=("translucent".equals$O(value));
for (var i=this.bioShapes.length; --i >= 0; ) {
var bioShape=this.bioShapes[i];
if (bioShape.monomerCount > 0) bioShape.setTranslucent$Z$javajs_util_BS$F(isTranslucent, bsSelected, this.translucentLevel);
}
return;
}this.setPropS$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'getShapeState$', function () {
var temp=Clazz.new_($I$(4,1));
var temp2=Clazz.new_($I$(4,1));
var type=$I$(5).shapeClassBases[this.shapeID];
for (var iShape=this.bioShapes.length; --iShape >= 0; ) this.bioShapes[iShape].getBioShapeState$S$Z$java_util_Map$java_util_Map(type, this.translucentAllowed, temp, temp2);

var s="\n" + this.vwr.getCommands$java_util_Map$java_util_Map$S(temp, temp2, this.shapeID == 9 ? "Backbone" : "select");
return s;
});

Clazz.newMeth(C$, 'initialize$', function () {
var modelCount=this.ms.mc;
var models=this.ms.am;
var n=this.ms.getBioPolymerCountInModel$I(-1);
var shapes=Clazz.array($I$(6), [n--]);
for (var i=modelCount; --i >= 0; ) for (var j=this.ms.getBioPolymerCountInModel$I(i); --j >= 0; n--) {
var bp=(models[i]).bioPolymers[j];
shapes[n]=(this.bioShapes == null  || this.bioShapes.length <= n  || this.bioShapes[n] == null   || this.bioShapes[n].bioPolymer !== bp   ? Clazz.new_($I$(6,1).c$$org_jmol_shapebio_BioShapeCollection$I$org_jmol_modelsetbio_BioPolymer,[this, i, bp]) : this.bioShapes[n]);
}

this.bioShapes=shapes;
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS', function (xMouse, yMouse, closest, bsNot) {
for (var i=this.bioShapes.length; --i >= 0; ) this.bioShapes[i].findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS(xMouse, yMouse, closest, bsNot);

});

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
if (this.bioShapes == null ) return;
bsModels=$I$(7).copy$javajs_util_BS(bsModels);
if (this.ms.trajectory != null ) this.ms.trajectory.setBaseModels$javajs_util_BS(bsModels);
for (var i=this.bioShapes.length; --i >= 0; ) {
var b=this.bioShapes[i];
b.modelVisibilityFlags=(bsModels.get$I(b.modelIndex) ? this.vf : 0);
}
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
if (this.bioShapes == null ) return;
for (var i=this.bioShapes.length; --i >= 0; ) this.bioShapes[i].setAtomClickability$();

});

Clazz.newMeth(C$, 'getMpsShapeCount$', function () {
return this.bioShapes.length;
});

Clazz.newMeth(C$, 'getBioShape$I', function (i) {
return this.bioShapes[i];
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
