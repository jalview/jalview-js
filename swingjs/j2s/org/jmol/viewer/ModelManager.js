(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[[0,'org.jmol.modelset.ModelLoader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModelManager");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.modelSet=null;
this.modelSetPathName=null;
this.fileName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
C$.$init$.apply(this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'zap$', function () {
this.modelSetPathName=this.fileName=null;
Clazz.new_($I$(1).c$$org_jmol_viewer_Viewer$S$javajs_util_SB$O$org_jmol_modelset_ModelSet$javajs_util_BS,[this.vwr, this.vwr.getZapName$(), null, null, null, null]);
});

Clazz.newMeth(C$, 'createModelSet$S$S$javajs_util_SB$O$javajs_util_BS$Z', function (fullPathName, fileName, loadScript, atomSetCollection, bsNew, isAppend) {
var modelSetName=null;
if (isAppend) {
modelSetName=this.modelSet.modelSetName;
if (modelSetName.equals$O("zapped")) modelSetName=null;
 else if (modelSetName.indexOf$S(" (modified)") < 0) modelSetName += " (modified)";
} else if (atomSetCollection == null ) {
this.zap$();
} else {
this.modelSetPathName=fullPathName;
this.fileName=fileName;
}if (atomSetCollection != null ) {
if (modelSetName == null ) {
modelSetName=this.vwr.getModelAdapter$().getAtomSetCollectionName$O(atomSetCollection);
if (modelSetName != null ) {
modelSetName=modelSetName.trim$();
if (modelSetName.length$() == 0) modelSetName=null;
}if (modelSetName == null ) modelSetName=C$.reduceFilename$S(fileName);
}Clazz.new_($I$(1).c$$org_jmol_viewer_Viewer$S$javajs_util_SB$O$org_jmol_modelset_ModelSet$javajs_util_BS,[this.vwr, modelSetName, loadScript, atomSetCollection, (isAppend ? this.modelSet : null), bsNew]);
}if (this.modelSet.ac == 0 && !this.modelSet.getMSInfoB$S("isPyMOL") ) this.zap$();
});

Clazz.newMeth(C$, 'reduceFilename$S', function (fileName) {
if (fileName == null ) return null;
var ichDot=fileName.indexOf$I(".");
if (ichDot > 0) fileName=fileName.substring$I$I(0, ichDot);
if (fileName.length$() > 24) fileName=fileName.substring$I$I(0, 20) + " ...";
return fileName;
}, 1);

Clazz.newMeth(C$, 'createAtomDataSet$O$I', function (atomSetCollection, tokType) {
return $I$(1).createAtomDataSet$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$I$O$javajs_util_BS(this.vwr, this.modelSet, tokType, atomSetCollection, this.vwr.bsA$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
