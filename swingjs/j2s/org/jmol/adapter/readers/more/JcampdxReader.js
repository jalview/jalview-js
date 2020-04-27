(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'javajs.util.Lst','org.jmol.util.Logger','javajs.util.PT','org.jmol.api.Interface','org.jmol.adapter.smarter.SmarterJmolAdapter','javajs.util.Rdr','org.jmol.viewer.JC','javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JcampdxReader", null, 'org.jmol.adapter.readers.molxyz.MolReader', 'org.jmol.api.JmolJDXMOLReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nucleus="";
this.peakData=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['selectedModel','nPeaks'],'S',['acdMolFile','title','nucleus','type','allTypes'],'O',['mpr','org.jmol.api.JmolJDXMOLParser','acdAssignments','javajs.util.Lst','+peakData']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.vwr.setBooleanProperty$S$Z("_JSpecView".toLowerCase$(), true);
if (this.isTrajectory) {
$I$(2).warn$S("TRAJECTORY keyword ignored");
this.isTrajectory=false;
}if (this.reverseModels) {
$I$(2).warn$S("REVERSE keyword ignored");
this.reverseModels=false;
}this.selectedModel=this.desiredModelNumber;
this.desiredModelNumber=-2147483648;
if (!this.checkFilterKey$S("NOSYNC")) this.addJmolScript$S("sync on");
});

Clazz.newMeth(C$, 'checkLine$', function () {
var i=this.line.indexOf$S("=");
if (i < 0 || !this.line.startsWith$S("##") ) return true;
var label=(function(a,f){return f.apply(null,a)})([this.line.substring$I$I(0, i).trim$(), " ", ""],$I$(3).replaceAllCharacters$S$S$S).toUpperCase$();
if (label.length$() > 12) label=label.substring$I$I(0, 12);
var pt=("##$MODELS   ##$PEAKS    ##$SIGNALS  ##$MOLFILE  ##NPOINTS   ##TITLE     ##PEAKASSIGN##$UVIR_ASSI##$MS_FRAGME##.OBSERVENU##DATATYPE  ").indexOf$S(label);
if (pt < 0) return true;
if (this.mpr == null ) this.mpr=($I$(4).getOption$S$org_jmol_viewer_Viewer$S("jsv.JDXMOLParser", this.vwr, "file")).set$org_jmol_api_JmolJDXMOLReader$S$java_util_Map(this, this.filePath, this.htParams);
var value=this.line.substring$I(i + 1).trim$();
this.mpr.setLine$S(value);
switch (pt) {
case 0:
this.mpr.readModels$();
break;
case 12:
case 24:
this.mpr.readPeaks$Z$I(pt == 24, -1);
break;
case 36:
this.acdMolFile=this.mpr.readACDMolFile$();
this.processModelData$S$S$S$S$S$F$F$Z(this.acdMolFile, this.title + " (assigned)", "MOL", "mol", "", 0.01, NaN, true);
if (this.asc.errorMessage != null ) {
this.continuing=false;
return false;
}break;
case 48:
this.nPeaks=$I$(3).parseInt$S(value);
break;
case 60:
this.title=$I$(3).split$S$S(value, "$$")[0].trim$();
break;
case 72:
case 84:
case 96:
this.acdAssignments=this.mpr.readACDAssignments$I$Z(this.nPeaks, pt == 72);
break;
case 108:
this.nucleus=value.substring$I(1);
break;
case 120:
this.type=value;
if ((pt=this.type.indexOf$S(" ")) >= 0) this.type=this.type.substring$I$I(0, pt);
break;
}
return true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (this.mpr != null ) p$1.processPeakData.apply(this, []);
this.finalizeReaderMR$();
});

Clazz.newMeth(C$, 'processModelData$S$S$S$S$S$F$F$Z', function (data, id, type, base, last, modelScale, vibScale, isFirst) {
var model0=this.asc.iSet;
var model=null;
while (true){
var ret=(function(a,f){return f.apply(null,a)})([this.filePath, type, $I$(6).getBR$S(data), this.htParams],$I$(5).staticGetAtomSetCollectionReader$S$S$O$java_util_Map);
if (Clazz.instanceOf(ret, "java.lang.String")) {
$I$(2).warn$S("" + ret);
if ((ret).startsWith$S($I$(7).READER_NOT_FOUND)) this.asc.errorMessage=ret;
break;
}ret=$I$(5).staticGetAtomSetCollection$org_jmol_adapter_smarter_AtomSetCollectionReader(ret);
if (Clazz.instanceOf(ret, "java.lang.String")) {
$I$(2).warn$S("" + ret);
break;
}model=ret;
var baseModel=base;
if (baseModel.length$() == 0) baseModel=last;
if (baseModel.length$() != 0) {
var ibase=p$1.findModelById$S.apply(this, [baseModel]);
if (ibase >= 0) {
this.asc.setModelInfoForSet$S$O$I("jdxModelID", baseModel, ibase);
for (var i=model.atomSetCount; --i >= 0; ) model.setModelInfoForSet$S$O$I("jdxBaseModel", baseModel, i);

if (model.bondCount == 0) p$1.setBonding$org_jmol_adapter_smarter_AtomSetCollection$I.apply(this, [model, ibase]);
}}if (!Float.isNaN$F(vibScale)) {
(function(a,f){return f.apply(null,a)})(["JcampdxReader applying vibration scaling of " + new Float(vibScale).toString() + " to " + model.ac + " atoms" ],$I$(2).info$S);
var atoms=model.atoms;
for (var i=model.ac; --i >= 0; ) {
if (atoms[i].vib != null  && !Float.isNaN$F(atoms[i].vib.z) ) atoms[i].vib.scale$F(vibScale);
}
}if (!Float.isNaN$F(modelScale)) {
(function(a,f){return f.apply(null,a)})(["JcampdxReader applying model scaling of " + new Float(modelScale).toString() + " to " + model.ac + " atoms" ],$I$(2).info$S);
var atoms=model.atoms;
for (var i=model.ac; --i >= 0; ) atoms[i].scale$F(modelScale);

}(function(a,f){return f.apply(null,a)})(["jdx model=" + id + " type=" + model.fileTypeName ],$I$(2).info$S);
this.asc.appendAtomSetCollection$I$org_jmol_adapter_smarter_AtomSetCollection(-1, model);
break;
}
p$1.updateModelIDs$S$I$Z.apply(this, [id, model0, isFirst]);
});

Clazz.newMeth(C$, 'setBonding$org_jmol_adapter_smarter_AtomSetCollection$I', function (a, ibase) {
var n0=this.asc.getAtomSetAtomCount$I(ibase);
var n=a.ac;
if (n % n0 != 0) {
(function(a,f){return f.apply(null,a)})(["atom count in secondary model (" + n + ") is not a multiple of " + n0 + " -- bonding ignored" ],$I$(2).warn$S);
return;
}var bonds=this.asc.bonds;
var b0=0;
for (var i=0; i < ibase; i++) b0+=this.asc.getAtomSetBondCount$I(i);

var b1=b0 + this.asc.getAtomSetBondCount$I(ibase);
var ii0=this.asc.getAtomSetAtomIndex$I(ibase);
var nModels=a.atomSetCount;
for (var j=0; j < nModels; j++) {
var i0=a.getAtomSetAtomIndex$I(j) - ii0;
if (a.getAtomSetAtomCount$I(j) != n0) {
(function(a,f){return f.apply(null,a)})(["atom set atom count in secondary model (" + a.getAtomSetAtomCount$I(j) + ") is not equal to " + n0 + " -- bonding ignored" ],$I$(2).warn$S);
return;
}for (var i=b0; i < b1; i++) a.addNewBondWithOrder$I$I$I(bonds[i].atomIndex1 + i0, bonds[i].atomIndex2 + i0, bonds[i].order);

}
}, p$1);

Clazz.newMeth(C$, 'updateModelIDs$S$I$Z', function (id, model0, isFirst) {
var n=this.asc.atomSetCount;
if (isFirst && n == model0 + 2 ) {
this.asc.setCurrentModelInfo$S$O("modelID", id);
return;
}for (var pt=0, i=model0; ++i < n; ) this.asc.setModelInfoForSet$S$O$I("modelID", id + "." + (++pt) , i);

}, p$1);

Clazz.newMeth(C$, 'addPeakData$S', function (info) {
this.peakData.addLast$O(info);
});

Clazz.newMeth(C$, 'processPeakData', function () {
if (this.acdAssignments != null ) {
try {
this.mpr.setACDAssignments$S$S$I$javajs_util_Lst$S(this.title, this.nucleus + this.type, 0, this.acdAssignments, this.acdMolFile);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}var n=this.peakData.size$();
if (n == 0) return;
var bsModels=Clazz.new_($I$(8,1));
var havePeaks=(n > 0);
for (var p=0; p < n; p++) {
this.line=this.peakData.get$I(p);
var type=this.mpr.getAttribute$S$S(this.line, "type");
var id=this.mpr.getAttribute$S$S(this.line, "model");
var i=p$1.findModelById$S.apply(this, [id]);
if (i < 0) {
$I$(2).warn$S("cannot find model " + id + " required for " + this.line );
continue;
}p$1.addType$I$S.apply(this, [i, type]);
var title=type + ": " + this.mpr.getAttribute$S$S(this.line, "title") ;
var key="jdxAtomSelect_" + this.mpr.getAttribute$S$S(this.line, "type");
bsModels.set$I(i);
var s;
if (this.mpr.getAttribute$S$S(this.line, "atoms").length$() != 0) {
p$1.processPeakSelectAtom$I$S$S.apply(this, [i, key, this.line]);
s=type + ": ";
} else if (p$1.processPeakSelectModel$I$S.apply(this, [i, title])) {
s="model: ";
} else {
s="ignored: ";
}$I$(2).info$S(s + this.line);
}
n=this.asc.atomSetCount;
for (var i=n; --i >= 0; ) {
var id=this.asc.getAtomSetAuxiliaryInfoValue$I$S(i, "modelID");
if (havePeaks && !bsModels.get$I(i) && id.indexOf$S(".") >= 0  ) {
this.asc.removeAtomSet$I(i);
n--;
}}
if (this.selectedModel == -2147483648) {
if (this.allTypes != null ) this.appendLoadNote$S(this.allTypes);
} else {
if (this.selectedModel == 0) this.selectedModel=n - 1;
for (var i=this.asc.atomSetCount; --i >= 0; ) if (i + 1 != this.selectedModel) this.asc.removeAtomSet$I(i);

if (n > 0) this.appendLoadNote$S(this.asc.getAtomSetAuxiliaryInfoValue$I$S(0, "name"));
}for (var i=this.asc.atomSetCount; --i >= 0; ) this.asc.setAtomSetNumber$I$I(i, i + 1);

this.asc.centralize$();
}, p$1);

Clazz.newMeth(C$, 'findModelById$S', function (modelID) {
for (var i=this.asc.atomSetCount; --i >= 0; ) {
var id=this.asc.getAtomSetAuxiliaryInfoValue$I$S(i, "modelID");
if (modelID.equals$O(id)) return i;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'addType$I$S', function (imodel, type) {
var types=p$1.addTypeStr$S$S.apply(this, [this.asc.getAtomSetAuxiliaryInfoValue$I$S(imodel, "spectrumTypes"), type]);
if (types == null ) return;
this.asc.setModelInfoForSet$S$O$I("spectrumTypes", types, imodel);
var s=p$1.addTypeStr$S$S.apply(this, [this.allTypes, type]);
if (s != null ) this.allTypes=s;
}, p$1);

Clazz.newMeth(C$, 'addTypeStr$S$S', function (types, type) {
if (types != null  && types.contains$CharSequence(type) ) return null;
if (types == null ) types="";
 else types += ",";
return types + type;
}, p$1);

Clazz.newMeth(C$, 'processPeakSelectAtom$I$S$S', function (i, key, data) {
var peaks=this.asc.getAtomSetAuxiliaryInfoValue$I$S(i, key);
if (peaks == null ) this.asc.setModelInfoForSet$S$O$I(key, peaks=Clazz.new_($I$(1,1)), i);
peaks.addLast$O(data);
}, p$1);

Clazz.newMeth(C$, 'processPeakSelectModel$I$S', function (i, title) {
if (this.asc.getAtomSetAuxiliaryInfoValue$I$S(i, "jdxModelSelect") != null ) return false;
this.asc.setModelInfoForSet$S$O$I("name", title, i);
this.asc.setModelInfoForSet$S$O$I("jdxModelSelect", this.line, i);
return true;
}, p$1);

Clazz.newMeth(C$, 'setSpectrumPeaks$I$S$S', function (nH, piUnitsX, piUnitsY) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
