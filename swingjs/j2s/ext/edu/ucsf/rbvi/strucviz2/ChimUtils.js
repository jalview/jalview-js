(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[[0,'org.slf4j.LoggerFactory','java.util.HashMap','java.awt.Color','java.util.Locale',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['MAX_SUB_MODELS'],'S',['RESIDUE_ATTR','RINALYZER_ATTR','DEFAULT_STRUCTURE_KEY'],'O',['logger','org.slf4j.Logger','aaNames','java.util.HashMap']]]

Clazz.newMeth(C$, 'parseModelNumber$S',  function (inputLine) {
var hash=inputLine.indexOf$I("#");
var space=inputLine.indexOf$I$I(" ", hash);
var decimal=inputLine.substring$I$I(hash + 1, space).indexOf$I(".");
var modelNumber=-1;
var subModelNumber=0;
try {
if (decimal > 0) {
subModelNumber=Integer.parseInt$S(inputLine.substring$I$I(decimal + hash + 2 , space));
space=decimal + hash + 1 ;
}modelNumber=Integer.parseInt$S(inputLine.substring$I$I(hash + 1, space));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.logger.warn$S$Throwable("Unexpected return from Chimera: " + inputLine, e);
} else {
throw e;
}
}
return Clazz.array(Integer.TYPE, -1, [modelNumber, subModelNumber]);
}, 1);

Clazz.newMeth(C$, 'parseOpenedModelNumber$S',  function (inputLine) {
var hash=inputLine.indexOf$I("#");
var space=-1;
if (hash == (-1)) {
hash=inputLine.indexOf$S("Model");
if (hash >= 0) {
hash=hash + 5;
}space=inputLine.indexOf$I$I(" ", hash + 1);
} else {
space=inputLine.indexOf$I$I(",", hash);
}var decimal=inputLine.substring$I$I(hash + 1, space).indexOf$I(".");
var modelNumber=-1;
var subModelNumber=0;
try {
if (decimal > 0) {
subModelNumber=Integer.parseInt$S(inputLine.substring$I$I(decimal + hash + 2 , space));
space=decimal + hash + 1 ;
}modelNumber=Integer.parseInt$S(inputLine.substring$I$I(hash + 1, space));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.logger.warn$S$Throwable("Unexpected return from Chimera: " + inputLine, e);
} else {
throw e;
}
}
return Clazz.array(Integer.TYPE, -1, [modelNumber, subModelNumber]);
}, 1);

Clazz.newMeth(C$, 'parseModelName$S',  function (inputLine) {
var start=inputLine.indexOf$S("name ");
if (start < 0) {
return null;
}if (inputLine.startsWith$S$I("\"", start + 5)) {
start+=6;
var end=inputLine.lastIndexOf$I("\"");
if (end >= 1) {
return inputLine.substring$I$I(start, end);
} else {
return inputLine.substring$I(start);
}} else {
return inputLine.substring$I(start + 5);
}}, 1);

Clazz.newMeth(C$, 'parseModelColor$S',  function (inputLine) {
try {
var colorStart=inputLine.indexOf$S("color ");
var colorString=inputLine.substring$I(colorStart + 6);
var rgbStrings=colorString.split$S(",");
var rgbValues=Clazz.array(Float.TYPE, [4]);
for (var i=0; i < rgbStrings.length; i++) {
var f=Float.valueOf$S(rgbStrings[i]);
rgbValues[i]=f.floatValue$();
}
if (rgbStrings.length == 4) {
return Clazz.new_($I$(3,1).c$$F$F$F$F,[rgbValues[0], rgbValues[1], rgbValues[2], rgbValues[3]]);
} else {
return Clazz.new_($I$(3,1).c$$F$F$F,[rgbValues[0], rgbValues[1], rgbValues[2]]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.logger.warn$S$Throwable("Unexpected return from Chimera: " + inputLine, ex);
} else {
throw ex;
}
}
return $I$(3).white;
}, 1);

Clazz.newMeth(C$, 'makeModelKey$I$I',  function (model, subModel) {
return Integer.valueOf$I(model * C$.MAX_SUB_MODELS + subModel);
}, 1);

Clazz.newMeth(C$, 'getModel$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraManager',  function (atomSpec, chimeraManager) {
var split=atomSpec.split$S(":");
if (split[0].length$() == 0) {
C$.logger.info$S("Unexpected return from Chimera: " + atomSpec);
return null;
}var model=0;
var submodel=0;
try {
var subSplit=split[0].substring$I(1).split$S("\\.");
if (subSplit.length > 0) {
model=Integer.parseInt$S(subSplit[0]);
} else {
model=Integer.parseInt$S(split[0].substring$I(1));
}if (subSplit.length > 1) {
submodel=Integer.parseInt$S(subSplit[1]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.logger.warn$S$Throwable("Unexpected return from Chimera: " + atomSpec, e);
} else {
throw e;
}
}
return chimeraManager.getChimeraModel$Integer$Integer(Integer.valueOf$I(model), Integer.valueOf$I(submodel));
}, 1);

Clazz.newMeth(C$, 'getResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraManager',  function (atomSpec, chimeraManager) {
var model=C$.getModel$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraManager(atomSpec, chimeraManager);
if (model == null ) {
model=chimeraManager.getChimeraModel$();
}return C$.getResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(atomSpec, model);
}, 1);

Clazz.newMeth(C$, 'getResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (atomSpec, model) {
var split=atomSpec.split$S(":|@");
var residueChain=split[1].split$S("\\.");
if (residueChain[0].length$() == 0) {
C$.logger.info$S("Unexpected return from Chimera: " + atomSpec);
return null;
}if (residueChain.length == 2 && residueChain[1].length$() > 0 ) {
var chain=model.getChain$S(residueChain[1]);
return chain.getResidue$S(residueChain[0]);
}return model.getResidue$S$S("_", residueChain[0]);
}, 1);

Clazz.newMeth(C$, 'getChain$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (atomSpec, model) {
var split=atomSpec.split$S(":|@");
var residueChain=split[1].split$S("\\.");
if (residueChain.length == 1) {
C$.logger.info$S("Unexpected return from Chimera: " + atomSpec);
return null;
}return model.getChain$S(residueChain[1]);
}, 1);

Clazz.newMeth(C$, 'getAtomName$S',  function (atomSpec) {
var split=atomSpec.split$S("@");
if (split.length > 1) {
return split[1];
}return atomSpec;
}, 1);

Clazz.newMeth(C$, 'isBackbone$S',  function (atom) {
if (atom.equals$O("C") || atom.equals$O("CA") || atom.equals$O("N") || atom.equals$O("O") || atom.equals$O("H")  ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getIntSubtype$S$S',  function (node, atom) {
var split=node.split$S("#| ");
var resType="";
if (split.length == 2) {
resType=split[0].trim$().toUpperCase$java_util_Locale($I$(4).ROOT);
} else if (split.length == 3) {
resType=split[1].trim$().toUpperCase$java_util_Locale($I$(4).ROOT);
}if (resType.equalsIgnoreCase$S("HOH") || resType.equalsIgnoreCase$S("WAT") ) {
return "water";
} else if (C$.aaNames.containsKey$O(resType)) {
if (atom.equals$O("C") || atom.equals$O("CA") || atom.equals$O("N") || atom.equals$O("O") || atom.equals$O("H")  ) {
return "mc";
} else {
return "sc";
}} else {
return "other";
}}, 1);

Clazz.newMeth(C$, 'getResKeyParts$S',  function (resKey) {
var resKeyParts=Clazz.array(String, [4]);
var split=resKey.split$S("#");
var resChain=null;
if (split.length == 1) {
if (resKey.length$() == 4 && resKey.indexOf$S("\\.") < 0 ) {
C$.parseModelID$S$SA(resKey, resKeyParts);
} else if (resKey.startsWith$S("\"")) {
C$.parseModelID$S$SA(resKey, resKeyParts);
} else {
var splitSplit=resKey.split$S("\\.");
if (splitSplit.length == 1) {
resChain=resKey;
} else {
try {
Integer.parseInt$S(splitSplit[1]);
C$.parseModelID$S$SA(resKey, resKeyParts);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
resChain=resKey;
} else {
throw ex;
}
}
}}} else if (split.length == 2) {
C$.parseModelID$S$SA(split[0], resKeyParts);
resChain=split[1];
} else {
C$.parseModelID$S$SA(resKey.substring$I$I(0, resKey.lastIndexOf$S("#")), resKeyParts);
resChain=resKey.substring$I$I(resKey.lastIndexOf$S("#") + 1, resKey.length$());
}if (resChain != null ) {
var resChainSplit=resChain.split$S("\\.");
if (resChainSplit.length == 1) {
if (resChainSplit[0].length$() == 1) {
try {
Integer.parseInt$S(resChainSplit[0]);
resKeyParts[3]=resChainSplit[0];
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
resKeyParts[2]=resChainSplit[0];
} else {
throw ex;
}
}
} else {
resKeyParts[3]=resChainSplit[0];
}} else if (resChainSplit.length == 2) {
resKeyParts[2]=resChainSplit[0];
resKeyParts[3]=resChainSplit[1];
} else {
C$.logger.info$S("Could not parse residue identifier: " + resKey);
}}return resKeyParts;
}, 1);

Clazz.newMeth(C$, 'parseModelID$S$SA',  function (modelID, resKeyParts) {
if (modelID.startsWith$S("\"")) {
if (modelID.endsWith$S("\"")) {
resKeyParts[0]=modelID.substring$I$I(1, modelID.length$() - 1);
return;
} else {
try {
Integer.parseInt$S(modelID.substring$I$I(modelID.lastIndexOf$S("\"") + 2, modelID.length$()));
resKeyParts[0]=modelID.substring$I$I(0, modelID.lastIndexOf$S("\"") - 1);
resKeyParts[1]=modelID.substring$I$I(modelID.lastIndexOf$S("\"") + 2, modelID.length$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
resKeyParts[0]=modelID.substring$I(1);
} else {
throw ex;
}
}
}} else {
var modelIDNo=modelID.split$S("\\.");
if (modelIDNo.length == 1) {
resKeyParts[0]=modelIDNo[0];
} else if (modelIDNo.length == 2) {
try {
Integer.parseInt$S(modelIDNo[1]);
resKeyParts[0]=modelIDNo[0];
resKeyParts[1]=modelIDNo[1];
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
resKeyParts[0]=modelID;
} else {
throw ex;
}
}
} else {
C$.logger.info$S("Could not parse model identifier: " + modelID);
resKeyParts[0]=modelID;
}}}, 1);

Clazz.newMeth(C$, 'fromAttributeOld$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraManager',  function (attrSpec, chimeraManager) {
if (attrSpec == null  || attrSpec.indexOf$I(",") > 0  || attrSpec.indexOf$I("-") > 0 ) {
C$.logger.warn$S("No support for identifier: " + attrSpec);
return null;
}var residue=null;
var model=null;
var chain=null;
var chimeraModel=null;
var chimeraChain=null;
var chimeraResidue=null;
try {
var split=attrSpec.split$S("#");
var resChain=null;
if (split.length == 1) {
resChain=split[0];
} else if (split.length == 2) {
model=split[0];
resChain=split[1];
} else {
model=attrSpec.substring$I$I(0, attrSpec.lastIndexOf$S("#"));
resChain=attrSpec.substring$I$I(attrSpec.lastIndexOf$S("#") + 1, attrSpec.length$());
}if (resChain != null ) {
var resChainSplit=resChain.split$S("\\.");
if (resChainSplit.length == 1) {
residue=resChainSplit[0];
} else if (resChainSplit.length == 2) {
residue=resChainSplit[0];
chain=resChainSplit[1];
} else {
C$.logger.warn$S("No support for identifier: " + attrSpec);
}}if (model != null ) {
var models=chimeraManager.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(model, $I$(5).PDB_MODEL);
if (models.size$() == 1) {
chimeraModel=models.get$I(0);
} else {
try {
chimeraModel=chimeraManager.getChimeraModel$Integer$Integer(Integer.valueOf$S(model), Integer.valueOf$I(0));
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
}}if (chimeraModel == null ) {
chimeraModel=chimeraManager.getChimeraModel$();
}if (chain != null ) {
chimeraChain=chimeraModel.getChain$S(chain);
}if (residue != null ) {
if (chimeraChain != null ) {
chimeraResidue=chimeraChain.getResidue$S(residue);
} else {
chimeraResidue=chimeraModel.getResidue$S$S("_", residue);
}}if (chimeraResidue != null ) {
return chimeraResidue;
}if (chimeraChain != null ) {
return chimeraChain;
}if (chimeraModel != null ) {
return chimeraModel;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.logger.warn$S$Throwable("Could not parse residue identifier: " + attrSpec, ex);
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'fromAttribute$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraManager',  function (attrSpec, chimeraManager) {
if (attrSpec == null  || attrSpec.indexOf$I(",") > 0 ) {
C$.logger.warn$S("No support for identifier: " + attrSpec);
return null;
}var modelIDNoResChain=C$.getResKeyParts$S(attrSpec);
var chimeraModel=null;
var chimeraChain=null;
var chimeraResidue=null;
try {
if (modelIDNoResChain[0] != null ) {
var modelID=modelIDNoResChain[0];
var models=chimeraManager.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelID, $I$(5).PDB_MODEL);
if (models.size$() == 1) {
chimeraModel=models.get$I(0);
} else if (models.size$() > 1 && modelIDNoResChain[1] != null  ) {
try {
var modelNo=(Integer.valueOf$S(modelIDNoResChain[1])).$c();
for (var model, $model = models.iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.getSubModelNumber$() == modelNo) {
chimeraModel=model;
break;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
} else {
try {
chimeraModel=chimeraManager.getChimeraModel$Integer$Integer(Integer.valueOf$S(modelID), Integer.valueOf$I(0));
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
}}if (chimeraModel == null ) {
return null;
}if (modelIDNoResChain[3] != null ) {
chimeraChain=chimeraModel.getChain$S(modelIDNoResChain[3]);
}if (modelIDNoResChain[2] != null ) {
var residue=modelIDNoResChain[2];
if (chimeraChain != null ) {
chimeraResidue=chimeraChain.getResidue$S(residue);
} else if (chimeraModel.getChain$S("_") != null ) {
chimeraResidue=chimeraModel.getResidue$S$S("_", residue);
} else if (chimeraModel.getChainCount$() == 1) {
chimeraResidue=chimeraModel.getResidue$S$S(chimeraModel.getChainNames$().iterator$().next$(), residue);
}}if (chimeraResidue != null ) {
return chimeraResidue;
}if (chimeraChain != null ) {
return chimeraChain;
}if (chimeraModel != null ) {
return chimeraModel;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.logger.warn$S$Throwable("Could not parse chimera identifier: " + attrSpec, ex);
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'findStructures$S',  function (residueList) {
if (residueList == null ) {
return null;
}var residues=residueList.split$S(",");
var structureNameMap=Clazz.new_($I$(2,1));
for (var i=0; i < residues.length; i++) {
var components=residues[i].split$S("#");
if (components.length > 1) {
structureNameMap.put$O$O(components[0], components[1]);
}}
if (structureNameMap.isEmpty$()) {
return null;
}var structure=null;
for (var struct, $struct = structureNameMap.keySet$().iterator$(); $struct.hasNext$()&&((struct=($struct.next$())),1);) {
if (structure == null ) {
structure= String.instantialize();
} else {
structure=structure.concat$S(",");
}structure=structure.concat$S(struct);
}
return structure;
}, 1);

Clazz.newMeth(C$, 'parseFuncRes$java_util_List$S',  function (residueNames, modelName) {
var resRanges=Clazz.new_($I$(6,1));
for (var i=0; i < residueNames.size$(); i++) {
var residue=residueNames.get$I(i);
var components=residue.split$S("#");
if (components.length > 1 && !modelName.equals$O(components[0]) ) {
continue;
} else if (components.length > 1) {
residue=components[1];
} else if (components.length == 1) {
residue=components[0];
}var resRange="";
if (residue == null  || residue.equals$O("")  || residue.length$() == 0 ) {
continue;
}var range=residue.split$S$I("-", 2);
var chain=null;
for (var res=0; res < range.length; res++) {
if (res == 1) {
resRange=resRange.concat$S("-");
if (chain != null  && range[res].indexOf$I(".") == -1 ) {
range[res]=range[res].concat$S("." + chain);
}}if (res == 0 && range.length >= 2  && range[res].indexOf$I(".") > 0 ) {
var resChain=range[res].split$S("\\.");
chain=resChain[1];
range[res]=resChain[0];
}if (range[res].indexOf$I("|") > 0 && Character.isDigit$C(range[res].charAt$I(0)) ) {
var offset=range[res].indexOf$I("|");
var str=range[res].substring$I(offset + 1) + range[res].substring$I$I(0, offset);
range[res]=str;
}if (Character.isDigit$C(range[res].charAt$I(0))) {
resRange=resRange.concat$S(range[res]);
} else if (Character.isDigit$C(range[res].charAt$I(1))) {
resRange=resRange.concat$S(range[res].substring$I(1));
} else if (range[res].charAt$I(0) == ".") {
resRange=resRange.concat$S(range[res]);
} else {
resRange=resRange.concat$S(range[res].substring$I(3));
}}
if (!resRanges.contains$O(resRange)) {
resRanges.add$O(resRange);
}}
return resRanges;
}, 1);

Clazz.newMeth(C$, 'toFullName$S',  function (aaType) {
if (!C$.aaNames.containsKey$O(aaType)) {
return aaType;
}var ids=C$.aaNames.get$O(aaType).split$S(" ");
return ids[2].replace$C$C("_", " ");
}, 1);

Clazz.newMeth(C$, 'toSingleLetter$S',  function (aaType) {
if (!C$.aaNames.containsKey$O(aaType)) {
return aaType;
}var ids=C$.aaNames.get$O(aaType).split$S(" ");
return ids[0];
}, 1);

Clazz.newMeth(C$, 'toThreeLetter$S',  function (aaType) {
if (!C$.aaNames.containsKey$O(aaType)) {
return aaType;
}var ids=C$.aaNames.get$O(aaType).split$S(" ");
return ids[1];
}, 1);

Clazz.newMeth(C$, 'toSMILES$S',  function (aaType) {
if (!C$.aaNames.containsKey$O(aaType)) {
return null;
}var ids=C$.aaNames.get$O(aaType).split$S(" ");
if (ids.length < 4) {
return null;
}return ids[3];
}, 1);

Clazz.newMeth(C$, 'getAlignName$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject',  function (chimObj) {
var name=chimObj.getChimeraModel$().toString();
if (Clazz.instanceOf(chimObj, "ext.edu.ucsf.rbvi.strucviz2.ChimeraChain")) {
name=(chimObj).toString() + " [" + name + "]" ;
}return name;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.logger=$I$(1,"getLogger$Class",[Clazz.getClass(C$)]);
C$.MAX_SUB_MODELS=1000;
C$.RESIDUE_ATTR="ChimeraResidue";
C$.RINALYZER_ATTR="RINalyzerResidue";
C$.DEFAULT_STRUCTURE_KEY="pdbFileName";
{
C$.aaNames=Clazz.new_($I$(2,1));
C$.aaNames.put$O$O("ALA", "A Ala Alanine N[C@@H](C)C(O)=O");
C$.aaNames.put$O$O("ARG", "R Arg Arginine N[C@@H](CCCNC(N)=N)C(O)=O");
C$.aaNames.put$O$O("ASN", "N Asn Asparagine N[C@@H](CC(N)=O)C(O)=O");
C$.aaNames.put$O$O("ASP", "D Asp Aspartic_acid N[C@@H](CC(O)=O)C(O)=O");
C$.aaNames.put$O$O("CYS", "C Cys Cysteine N[C@@H](CS)C(O)=O");
C$.aaNames.put$O$O("GLN", "Q Gln Glutamine N[C@H](C(O)=O)CCC(N)=O");
C$.aaNames.put$O$O("GLU", "E Glu Glumatic_acid N[C@H](C(O)=O)CCC(O)=O");
C$.aaNames.put$O$O("GLY", "G Gly Glycine NCC(O)=O");
C$.aaNames.put$O$O("HIS", "H His Histidine N[C@@H](CC1=CN=CN1)C(O)=O");
C$.aaNames.put$O$O("ILE", "I Ile Isoleucine N[C@]([C@H](C)CC)([H])C(O)=O");
C$.aaNames.put$O$O("LEU", "L Leu Leucine N[C@](CC(C)C)([H])C(O)=O");
C$.aaNames.put$O$O("LYS", "K Lys Lysine N[C@](CCCCN)([H])C(O)=O");
C$.aaNames.put$O$O("DLY", "K Dly D-Lysine NCCCC[C@@H](N)C(O)=O");
C$.aaNames.put$O$O("MET", "M Met Methionine N[C@](CCSC)([H])C(O)=O");
C$.aaNames.put$O$O("PHE", "F Phe Phenylalanine N[C@](CC1=CC=CC=C1)([H])C(O)=O");
C$.aaNames.put$O$O("PRO", "P Pro Proline OC([C@@]1([H])NCCC1)=O");
C$.aaNames.put$O$O("SER", "S Ser Serine OC[C@](C(O)=O)([H])N");
C$.aaNames.put$O$O("THR", "T Thr Threonine O[C@H](C)[C@](C(O)=O)([H])N");
C$.aaNames.put$O$O("TRP", "W Trp Tryptophan N[C@@]([H])(CC1=CN([H])C2=C1C=CC=C2)C(O)=O");
C$.aaNames.put$O$O("TYR", "Y Tyr Tyrosine N[C@@](C(O)=O)([H])CC1=CC=C(O)C=C1");
C$.aaNames.put$O$O("VAL", "V Val Valine N[C@@](C(O)=O)([H])C(C)C");
C$.aaNames.put$O$O("ASX", "B Asx Aspartic_acid_or_Asparagine");
C$.aaNames.put$O$O("GLX", "Z Glx Glutamine_or_Glutamic_acid");
C$.aaNames.put$O$O("XAA", "X Xaa Any_or_unknown_amino_acid");
C$.aaNames.put$O$O("HOH", "HOH HOH Water [H]O[H]");
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
