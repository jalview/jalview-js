(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[[0,'org.jmol.modelset.ModelLoader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModelManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['modelSetPathName','fileName'],'O',['vwr','org.jmol.viewer.Viewer','modelSet','org.jmol.modelset.ModelSet']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
;C$.$init$.apply(this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'zap$', function () {
this.modelSetPathName=this.fileName=null;
Clazz.new_([this.vwr, this.vwr.getZapName$(), null, null, null, null],$I$(1,1).c$$org_jmol_viewer_Viewer$S$javajs_util_SB$O$org_jmol_modelset_ModelSet$javajs_util_BS);
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
}Clazz.new_([this.vwr, modelSetName, loadScript, atomSetCollection, (isAppend ? this.modelSet : null), bsNew],$I$(1,1).c$$org_jmol_viewer_Viewer$S$javajs_util_SB$O$org_jmol_modelset_ModelSet$javajs_util_BS);
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
return (function(a,f){return f.apply(null,a)})([this.vwr, this.modelSet, tokType, atomSetCollection, this.vwr.bsA$()],$I$(1).createAtomDataSet$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$I$O$javajs_util_BS);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
