(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','java.util.Arrays','org.jmol.util.BSUtil','javajs.util.BS','org.jmol.modelset.Orientation','org.jmol.viewer.Scene','org.jmol.viewer.Connections','org.jmol.viewer.Connection']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Connections");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bondCount'],'S',['saveName'],'O',['connections','org.jmol.viewer.Connection[]','vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
;C$.$init$.apply(this);
var modelSet=vwr.ms;
if (modelSet == null ) return;
this.vwr=vwr;
this.bondCount=modelSet.bondCount;
this.connections=Clazz.array($I$(9), [this.bondCount + 1]);
var bonds=modelSet.bo;
for (var i=this.bondCount; --i >= 0; ) {
var b=bonds[i];
this.connections[i]=Clazz.new_([b.atom1.i, b.atom2.i, b.mad, b.colix, b.order, b.getEnergy$(), b.shapeVisibilityFlags],$I$(9,1).c$$I$I$H$H$I$F$I);
}
}, 1);

Clazz.newMeth(C$, 'restore$', function () {
var modelSet=this.vwr.ms;
if (modelSet == null ) return false;
modelSet.deleteAllBonds$();
for (var i=this.bondCount; --i >= 0; ) {
var c=this.connections[i];
var ac=modelSet.ac;
if (c.atomIndex1 >= ac || c.atomIndex2 >= ac ) continue;
var b=modelSet.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(modelSet.at[c.atomIndex1], modelSet.at[c.atomIndex2], c.order, c.mad, null, c.energy, false, true);
b.colix=c.colix;
b.shapeVisibilityFlags=c.shapeVisibilityFlags;
}
for (var i=modelSet.bondCount; --i >= 0; ) modelSet.bo[i].index=i;

this.vwr.setShapeProperty$I$S$O(1, "reportAll", null);
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
