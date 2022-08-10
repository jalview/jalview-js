(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.util.AU','javajs.util.SB','org.jmol.jvxl.data.JvxlCoder','javajs.util.PT','org.jmol.shape.Shape','org.jmol.util.Escape','org.jmol.quantum.QS']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MolecularOrbital", null, 'org.jmol.shapesurface.Isosurface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.moFill=1073742046;
this.moMesh=1073742018;
this.moDots=1073742042;
this.moFrontOnly=1073741960;
this.moShell=1073742057;
},1);

C$.$fields$=[['Z',['moIsPositiveOnly','moDebug'],'I',['moFill','moMesh','moDots','moFrontOnly','moShell','myColorPt','$moNumber'],'S',['moTranslucency','moTitleFormat','strID','nboType'],'O',['moTranslucentLevel','Float','moPlane','javajs.util.P4','moCutoff','Float','+moResolution','+moScale','moColorPos','Integer','+moColorNeg','+moMonteCarloCount','moSquareData','Boolean','+moSquareLinear','moRandomSeed','Integer','$moLinearCombination','float[]','htModels','java.util.Map','+thisModel','moSlab','javajs.util.Lst','moSlabValue','Integer']]]

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.myType="mo";
this.setPropI$S$O$javajs_util_BS("thisID", this.myType, null);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("init" === propertyName ) {
this.myColorPt=0;
this.moDebug=false;
var modelIndex=(value).intValue$();
this.strID=p$1.getId$I.apply(this, [modelIndex]);
this.setPropI$S$O$javajs_util_BS("init", null, null);
this.setPropI$S$O$javajs_util_BS("modelIndex", Integer.valueOf$I(modelIndex), null);
if (this.htModels == null ) this.htModels=Clazz.new_($I$(1,1));
if (!this.htModels.containsKey$O(this.strID)) this.htModels.put$O$O(this.strID, Clazz.new_($I$(1,1)));
this.thisModel=this.htModels.get$O(this.strID);
this.$moNumber=(!this.thisModel.containsKey$O("moNumber") ? 0 : (this.thisModel.get$O("moNumber")).intValue$());
this.$moLinearCombination=this.thisModel.get$O("moLinearCombination");
this.moSquareData=(this.$moLinearCombination != null  ? null : this.thisModel.get$O("moSquareData"));
this.moSquareLinear=(this.$moLinearCombination == null  ? null : this.thisModel.get$O("moSquareLinear"));
return;
}if (this.htModels != null  && this.strID != null  ) this.thisModel=this.htModels.get$O(this.strID);
if ("slab" === propertyName ) {
if (Clazz.instanceOf(value, "java.lang.Integer")) {
this.thisModel.put$O$O("slabValue", value);
} else {
var slabInfo=value;
var tok=(slabInfo[0]).intValue$();
this.moSlab=this.thisModel.get$O("slab");
if (this.moSlab == null ) this.thisModel.put$O$O("slab", this.moSlab=Clazz.new_($I$(2,1)));
if (tok == 1073742333) {
this.moSlab=null;
this.thisModel.remove$O("slab");
return;
}this.moSlab.addLast$O(value);
}return;
}if ("cutoff" === propertyName ) {
this.thisModel.put$O$O("moCutoff", value);
this.thisModel.put$O$O("moIsPositiveOnly", Boolean.FALSE);
return;
}if ("scale" === propertyName ) {
this.thisModel.put$O$O("moScale", value);
return;
}if ("squareData" === propertyName ) {
if (value === Boolean.TRUE ) this.thisModel.put$O$O("moSquareData", Boolean.TRUE);
 else this.thisModel.remove$O("moSquareData");
this.moSquareData=value;
return;
}if ("squareLinear" === propertyName ) {
if (value === Boolean.TRUE ) this.thisModel.put$O$O("moSquareLinear", Boolean.TRUE);
 else this.thisModel.remove$O("moSquareLinear");
this.moSquareLinear=value;
return;
}if ("cutoffPositive" === propertyName ) {
this.thisModel.put$O$O("moCutoff", value);
this.thisModel.put$O$O("moIsPositiveOnly", Boolean.TRUE);
return;
}if ("resolution" === propertyName ) {
this.thisModel.put$O$O("moResolution", value);
return;
}if ("titleFormat" === propertyName ) {
this.moTitleFormat=value;
return;
}if ("color" === propertyName ) {
if (!(Clazz.instanceOf(value, "java.lang.Integer"))) return;
this.thisModel.remove$O("moTranslucency");
this.setPropI$S$O$javajs_util_BS("color", value, bs);
propertyName="colorRGB";
this.myColorPt=0;
}if ("colorRGB" === propertyName ) {
this.moColorPos=value;
if (this.myColorPt++ == 0) this.moColorNeg=this.moColorPos;
this.thisModel.put$O$O("moColorNeg", this.moColorNeg);
this.thisModel.put$O$O("moColorPos", this.moColorPos);
return;
}if ("plane" === propertyName ) {
if (value == null ) this.thisModel.remove$O("moPlane");
 else this.thisModel.put$O$O("moPlane", value);
return;
}if ("monteCarloCount" === propertyName ) {
this.thisModel.put$O$O("monteCarloCount", value);
return;
}if ("randomSeed" === propertyName ) {
if (value == null ) this.thisModel.remove$O("randomSeed");
 else this.thisModel.put$O$O("randomSeed", value);
return;
}if ("molecularOrbital" === propertyName ) {
if (Clazz.instanceOf(value, "java.lang.Integer")) {
this.$moNumber=(value).intValue$();
this.thisModel.put$O$O("moNumber", value);
this.thisModel.remove$O("moLinearCombination");
this.$moLinearCombination=null;
} else {
this.$moNumber=0;
this.$moLinearCombination=value;
this.thisModel.put$O$O("moNumber", Integer.valueOf$I(0));
this.thisModel.put$O$O("moLinearCombination", this.$moLinearCombination);
}if (this.moSquareData === Boolean.TRUE ) this.thisModel.put$O$O("moSquareData", Boolean.TRUE);
 else this.thisModel.remove$O("moSquareData");
if (this.moSquareLinear === Boolean.TRUE ) this.thisModel.put$O$O("moSquareLinear", Boolean.TRUE);
 else this.thisModel.remove$O("moSquareLinear");
p$1.setOrbital$I$FA.apply(this, [this.$moNumber, this.$moLinearCombination]);
return;
}if (propertyName === "deleteModelAtoms" ) {
var modelIndex=((value)[2])[0];
var htModelsNew=Clazz.new_($I$(1,1));
for (var i=this.meshCount; --i >= 0; ) {
if (this.meshes[i] == null ) continue;
if (this.meshes[i].modelIndex == modelIndex) {
this.meshCount--;
if (this.meshes[i] === this.currentMesh ) {
this.currentMesh=null;
this.thisModel=null;
}this.meshes=$I$(3).deleteElements$O$I$I(this.meshes, i, 1);
continue;
}var htModel=this.htModels.get$O(this.meshes[i].thisID);
if (this.meshes[i].modelIndex > modelIndex) {
this.meshes[i].modelIndex--;
this.meshes[i].thisID=p$1.getId$I.apply(this, [this.meshes[i].modelIndex]);
}htModelsNew.put$O$O(this.meshes[i].thisID, htModel);
}
this.htModels=htModelsNew;
return;
}if ("moData" === propertyName ) {
var moData=value;
this.nboType=moData.get$O("nboType");
this.thisModel=this.htModels.get$O(this.strID);
if (this.nboType == null ) this.thisModel.remove$O("nboType");
 else this.thisModel.put$O$O("nboType", this.nboType);
} else if ("translucentLevel" === propertyName ) {
if (this.thisModel == null ) {
if (this.currentMesh == null ) return;
this.thisModel=this.htModels.get$O(this.currentMesh.thisID);
}this.thisModel.put$O$O("moTranslucentLevel", value);
} else if ("delete" === propertyName ) {
this.htModels.remove$O(this.strID);
this.$moNumber=0;
this.$moLinearCombination=null;
} else if ("token" === propertyName ) {
var tok=(value).intValue$();
switch (tok) {
case 1112150019:
case 1073742042:
this.moDots=tok;
break;
case 1073741938:
case 1073742046:
this.moFill=tok;
break;
case 1073742018:
case 1073742052:
this.moMesh=tok;
break;
case 1073741862:
case 1073742057:
this.moShell=tok;
break;
case 1073741960:
case 1073742058:
this.moFrontOnly=tok;
break;
}
} else if ("translucency" === propertyName ) {
if (this.thisModel == null ) {
if (this.currentMesh == null ) return;
this.thisModel=this.htModels.get$O(this.currentMesh.thisID);
}this.thisModel.put$O$O("moTranslucency", value);
}this.setPropI$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'getId$I', function (modelIndex) {
return "mo_model" + this.vwr.getModelNumberDotted$I(modelIndex);
}, p$1);

Clazz.newMeth(C$, 'getProperty$S$I', function (propertyName, index) {
if (propertyName.startsWith$S("list")) {
var s="";
if (propertyName.equals$O("list")) {
s=this.getPropI$S$I("list", index);
if (s.length$() > 1) s += "cutoff = " + new Float(this.jvxlData.cutoff).toString() + "\n" ;
s="\n" + s;
}return this.getMoInfo$I(-1) + s;
}if (propertyName === "moNumber" ) return Integer.valueOf$I(this.$moNumber);
if (propertyName === "moLinearCombination" ) return this.$moLinearCombination;
if (propertyName === "moSquareData" ) return this.moSquareData;
if (propertyName === "moSquareLinear" ) return this.moSquareLinear;
if (propertyName === "showMO" ) {
var str=Clazz.new_($I$(4,1));
var mos=(this.sg.params.moData.get$O("mos"));
var nOrb=(mos == null  ? 0 : mos.size$());
var thisMO=index;
var currentMO=this.$moNumber;
var isShowCurrent=(thisMO == -2147483648 || thisMO == 2147483647 );
if (isShowCurrent) thisMO=currentMO;
if (nOrb == 0 || isShowCurrent && currentMO == 0  ) return "";
var doOneMo=(thisMO != 0);
if (currentMO == 0) thisMO=0;
var haveHeader=false;
var nTotal=(thisMO > 0 ? 1 : nOrb);
var i0=(nTotal == 1 && currentMO > 0  ? currentMO : 1);
for (var i=i0; i <= nOrb; i++) if (thisMO == 0 || thisMO == i  || !doOneMo && i == currentMO  ) {
if (!doOneMo) {
this.setPropI$S$O$javajs_util_BS("init", this.sg.params, null);
p$1.setOrbital$I$FA.apply(this, [i, null]);
}this.jvxlData.moleculeXml=this.vwr.getModelCml$javajs_util_BS$I$Z$Z(this.vwr.getModelUndeletedAtomsBitSet$I(this.thisMesh.modelIndex), 100, true, false);
if (!haveHeader) {
str.append$S($I$(5).jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S(this.jvxlData, null, null, "HEADERONLY", true, nTotal, null, null));
haveHeader=true;
}str.append$S($I$(5,"jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S",[this.jvxlData, null, this.jvxlData.title, null, false, 1, this.thisMesh.getState$S(this.myType), (this.thisMesh.scriptCommand == null  ? "" : this.thisMesh.scriptCommand)]));
if (!doOneMo) this.setPropI$S$O$javajs_util_BS("delete", "mo_show", null);
if (nTotal == 1) break;
}
str.append$S($I$(5).jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S(this.jvxlData, null, null, "TRAILERONLY", true, 0, null, null));
return str.toString();
}if (propertyName === "moLabel" ) {
var labels=this.sg.params.moData.get$O("nboLabels");
if (this.$moNumber > 0 && labels != null  ) return labels[(this.$moNumber - 1) % labels.length];
return "";
}return this.getPropI$S$I(propertyName, index);
});

Clazz.newMeth(C$, 'getMoInfo$I', function (modelIndex) {
var sb=Clazz.new_($I$(4,1));
for (var m=0, mc=this.vwr.ms.mc; m < mc; m++) {
if (modelIndex >= 0 && m != modelIndex ) continue;
var moData=this.vwr.ms.getInfo$I$S(m, "moData");
if (moData == null ) continue;
var mos=(moData.get$O("mos"));
var nOrb=(mos == null  ? 0 : mos.size$());
if (nOrb == 0) continue;
var moType=moData.get$O("nboType");
if (moType == null ) moType="mo";
for (var i=nOrb; --i >= 0; ) {
var mo=mos.get$I(i);
var type=mo.get$O("type");
if (type == null ) type="";
var units=mo.get$O("energyUnits");
if (units == null ) units="";
var occ=mo.get$O("occupancy");
if (occ != null ) type="occupancy " + new Float(occ.floatValue$()).toString() + " " + type ;
var sym=mo.get$O("symmetry");
if (sym != null ) type += sym;
var energy="" + mo.get$O("energy");
if (Float.isNaN$F($I$(6).parseFloat$S(energy))) sb.append$S($I$(6,"sprintf$S$S$OA",["model %-2s; %s %-2i # %s\n", "ssis", Clazz.array(java.lang.Object, -1, [this.vwr.ms.getModelNumberDotted$I(m), moType, Integer.valueOf$I(i + 1), type])]));
 else sb.append$S($I$(6,"sprintf$S$S$OA",["model %-2s;  %s %-2i # energy %-8.3f %s %s\n", "ssifss", Clazz.array(java.lang.Object, -1, [this.vwr.ms.getModelNumberDotted$I(m), moType, Integer.valueOf$I(i + 1), mo.get$O("energy"), units, type])]));
}
}
return sb.toString();
});

Clazz.newMeth(C$, 'clearSg$', function () {
});

Clazz.newMeth(C$, 'getSettings$S', function (strID) {
this.thisModel=this.htModels.get$O(strID);
if (this.thisModel == null  || this.thisModel.get$O("moNumber") == null  ) return false;
this.moTranslucency=this.thisModel.get$O("moTranslucency");
this.moTranslucentLevel=this.thisModel.get$O("moTranslucentLevel");
this.moPlane=this.thisModel.get$O("moPlane");
this.moCutoff=this.thisModel.get$O("moCutoff");
if (this.moCutoff == null ) this.moCutoff=this.sg.params.moData.get$O("defaultCutoff");
if (this.moCutoff == null ) {
this.moCutoff=Float.valueOf$F(0.05);
}this.thisModel.put$O$O("moCutoff", Float.valueOf$F(this.moCutoff.floatValue$()));
this.moResolution=this.thisModel.get$O("moResolution");
this.moScale=this.thisModel.get$O("moScale");
this.nboType=this.thisModel.get$O("moType");
this.moColorPos=this.thisModel.get$O("moColorPos");
this.moColorNeg=this.thisModel.get$O("moColorNeg");
this.moSquareData=this.thisModel.get$O("moSquareData");
this.moSquareLinear=this.thisModel.get$O("moSquareLinear");
this.moMonteCarloCount=this.thisModel.get$O("monteCarloCount");
this.moRandomSeed=this.thisModel.get$O("randomSeed");
this.moSlabValue=this.thisModel.get$O("slabValue");
this.moSlab=this.thisModel.get$O("slab");
if (this.moRandomSeed == null ) this.thisModel.put$O$O("randomSeed", this.moRandomSeed=Integer.valueOf$I(((-System.currentTimeMillis$()|0)) % 10000));
this.$moNumber=(this.thisModel.get$O("moNumber")).intValue$();
this.$moLinearCombination=this.thisModel.get$O("moLinearCombination");
var b=this.thisModel.get$O("moIsPositiveOnly");
this.moIsPositiveOnly=(b != null  && ((b)).booleanValue$() );
return true;
}, p$1);

Clazz.newMeth(C$, 'setOrbital$I$FA', function (moNumber, linearCombination) {
this.setPropI$S$O$javajs_util_BS("reset", this.strID, null);
if (this.moDebug) this.setPropI$S$O$javajs_util_BS("debug", Boolean.TRUE, null);
p$1.getSettings$S.apply(this, [this.strID]);
if (this.moScale != null ) this.setPropI$S$O$javajs_util_BS("scale", this.moScale, null);
if (this.moResolution != null ) this.setPropI$S$O$javajs_util_BS("resolution", this.moResolution, null);
if (this.moPlane != null ) {
this.setPropI$S$O$javajs_util_BS("plane", this.moPlane, null);
if (this.moCutoff != null ) {
var max=this.moCutoff.floatValue$();
if (this.moSquareData === Boolean.TRUE  || this.moSquareLinear === Boolean.TRUE  ) max=max * max;
this.setPropI$S$O$javajs_util_BS("red", Float.valueOf$F(-max), null);
this.setPropI$S$O$javajs_util_BS("blue", Float.valueOf$F(max), null);
}} else {
if (this.moCutoff != null ) this.setPropI$S$O$javajs_util_BS((this.moIsPositiveOnly ? "cutoffPositive" : "cutoff"), this.moCutoff, null);
if (this.moColorNeg != null ) this.setPropI$S$O$javajs_util_BS("colorRGB", this.moColorNeg, null);
if (this.moColorPos != null ) this.setPropI$S$O$javajs_util_BS("colorRGB", this.moColorPos, null);
if (this.moMonteCarloCount != null ) {
this.setPropI$S$O$javajs_util_BS("randomSeed", this.moRandomSeed, null);
this.setPropI$S$O$javajs_util_BS("monteCarloCount", this.moMonteCarloCount, null);
}}this.setPropI$S$O$javajs_util_BS("squareData", this.moSquareData, null);
this.setPropI$S$O$javajs_util_BS("squareLinear", this.moSquareLinear, null);
this.setPropI$S$O$javajs_util_BS("title", this.moTitleFormat, null);
this.setPropI$S$O$javajs_util_BS("fileName", this.vwr.fm.getFileName$(), null);
this.currentMesh.modelIndex=this.modelIndex;
this.setPropI$S$O$javajs_util_BS("molecularOrbital", linearCombination == null  ? Integer.valueOf$I(moNumber) : linearCombination, null);
if (this.moPlane != null  && this.moColorNeg != null  ) this.setPropI$S$O$javajs_util_BS("colorRGB", this.moColorNeg, null);
if (this.moPlane != null  && this.moColorPos != null  ) this.setPropI$S$O$javajs_util_BS("colorRGB", this.moColorPos, null);
this.currentMesh.isColorSolid=false;
if (this.moSlabValue != null ) this.setPropI$S$O$javajs_util_BS("slab", this.moSlabValue, null);
if (this.moSlab != null ) for (var i=0; i < this.moSlab.size$(); i++) this.setPropI$S$O$javajs_util_BS("slab", this.moSlab.get$I(i), null);

if (this.moTranslucentLevel != null ) this.setPropI$S$O$javajs_util_BS("translucentLevel", this.moTranslucentLevel, null);
if (this.moTranslucency != null ) this.setPropI$S$O$javajs_util_BS("translucency", this.moTranslucency, null);
this.setPropI$S$O$javajs_util_BS("token", Integer.valueOf$I(this.moFill), null);
this.setPropI$S$O$javajs_util_BS("token", Integer.valueOf$I(this.moMesh), null);
this.setPropI$S$O$javajs_util_BS("token", Integer.valueOf$I(this.moShell), null);
this.setPropI$S$O$javajs_util_BS("token", Integer.valueOf$I(this.moDots), null);
this.setPropI$S$O$javajs_util_BS("token", Integer.valueOf$I(this.moFrontOnly), null);
this.thisModel.put$O$O("mesh", this.currentMesh);
return;
}, p$1);

Clazz.newMeth(C$, 'getShapeState$', function () {
if (this.htModels == null ) return "";
var s=Clazz.new_($I$(4,1));
var modelCount=this.vwr.ms.mc;
for (var iModel=0; iModel < modelCount; iModel++) {
if (!p$1.getSettings$S.apply(this, [p$1.getId$I.apply(this, [iModel])])) continue;
if (modelCount > 1) $I$(7,"appendCmd$javajs_util_SB$S",[s, "frame " + this.vwr.getModelNumberDotted$I(iModel)]);
if (this.nboType != null ) $I$(7).appendCmd$javajs_util_SB$S(s, "nbo type " + this.nboType);
if (this.moCutoff != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " cutoff " + (this.sg.params.isPositiveOnly ? "+" : "") + this.moCutoff.toString() ]);
if (this.moScale != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " scale " + this.moScale.toString() ]);
if (this.moMonteCarloCount != null ) $I$(7).appendCmd$javajs_util_SB$S(s, this.myType + " points " + this.moMonteCarloCount + " " + this.moRandomSeed );
if (this.moResolution != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " resolution " + this.moResolution.toString() ]);
if (this.moPlane != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " plane {" + new Float(this.moPlane.x).toString() + " " + new Float(this.moPlane.y).toString() + " " + new Float(this.moPlane.z).toString() + " " + new Float(this.moPlane.w).toString() + "}" ]);
if (this.moTitleFormat != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " titleFormat " + $I$(6).esc$S(this.moTitleFormat) ]);
if (this.moColorNeg != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " color " + $I$(8,"escapeColor$I",[this.moColorNeg.intValue$()]) + (this.moColorNeg.equals$O(this.moColorPos) ? "" : " " + $I$(8,"escapeColor$I",[this.moColorPos.intValue$()])) ]);
if (this.moSlab != null ) {
if (this.thisMesh.slabOptions != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.thisMesh.slabOptions.toString()]);
if (this.thisMesh.jvxlData.slabValue != -2147483648) $I$(7).appendCmd$javajs_util_SB$S(s, this.myType + " slab " + this.thisMesh.jvxlData.slabValue );
}if (this.$moLinearCombination == null ) {
$I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " " + (this.moSquareData === Boolean.TRUE  ? "squared " : "") + this.$moNumber ]);
} else {
$I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " " + $I$(9).getMOString$FA(this.$moLinearCombination) + (this.moSquareLinear === Boolean.TRUE  ? " squared" : "") ]);
}if (this.moTranslucency != null ) $I$(7,"appendCmd$javajs_util_SB$S",[s, this.myType + " translucent " + this.moTranslucentLevel.toString() ]);
$I$(7,"appendCmd$javajs_util_SB$S",[s, (this.thisModel.get$O("mesh")).getState$S(this.myType)]);
}
return s.toString();
});

Clazz.newMeth(C$, 'merge$org_jmol_shape_MeshCollection', function (shape) {
var mo=shape;
this.moColorNeg=mo.moColorNeg;
this.moColorPos=mo.moColorPos;
this.moCutoff=mo.moCutoff;
this.moPlane=mo.moPlane;
this.moResolution=mo.moResolution;
this.moScale=mo.moScale;
this.moSlab=mo.moSlab;
this.moSlabValue=mo.moSlabValue;
this.moTitleFormat=mo.moTitleFormat;
this.moTranslucency=mo.moTranslucency;
if (this.htModels == null ) this.htModels=Clazz.new_($I$(1,1));
var ht=mo.htModels;
if (ht != null ) {
for (var entry, $entry = ht.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
this.htModels.put$O$O(key, entry.getValue$());
}
}C$.superclazz.prototype.merge$org_jmol_shape_MeshCollection.apply(this, [shape]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
