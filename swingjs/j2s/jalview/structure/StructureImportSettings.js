(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[[0,['jalview.datamodel.PDBEntry','.Type'],['jalview.structure.StructureImportSettings','.StructureParser'],'java.util.Locale']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureImportSettings", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StructureParser',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['visibleChainAnnotation','processSecStr','externalSecondaryStructure','showSeqFeatures'],'O',['defaultStructureFileFormat','jalview.datamodel.PDBEntry.Type','defaultPDBFileParser','jalview.structure.StructureImportSettings.StructureParser']]]

Clazz.newMeth(C$, 'addSettings$Z$Z$Z',  function (addAlignmentAnnotations, processSecStr, externalSecStr) {
C$.visibleChainAnnotation=addAlignmentAnnotations;
C$.processSecStr=processSecStr;
C$.externalSecondaryStructure=externalSecStr;
C$.showSeqFeatures=true;
}, 1);

Clazz.newMeth(C$, 'isVisibleChainAnnotation$',  function () {
return C$.visibleChainAnnotation;
}, 1);

Clazz.newMeth(C$, 'setVisibleChainAnnotation$Z',  function (visibleChainAnnotation) {
C$.visibleChainAnnotation=visibleChainAnnotation;
}, 1);

Clazz.newMeth(C$, 'isProcessSecondaryStructure$',  function () {
return C$.processSecStr;
}, 1);

Clazz.newMeth(C$, 'setProcessSecondaryStructure$Z',  function (processSecondaryStructure) {
C$.processSecStr=processSecondaryStructure;
}, 1);

Clazz.newMeth(C$, 'isExternalSecondaryStructure$',  function () {
return C$.externalSecondaryStructure;
}, 1);

Clazz.newMeth(C$, 'setExternalSecondaryStructure$Z',  function (externalSecondaryStructure) {
C$.externalSecondaryStructure=externalSecondaryStructure;
}, 1);

Clazz.newMeth(C$, 'isShowSeqFeatures$',  function () {
return C$.showSeqFeatures;
}, 1);

Clazz.newMeth(C$, 'setShowSeqFeatures$Z',  function (showSeqFeatures) {
C$.showSeqFeatures=showSeqFeatures;
}, 1);

Clazz.newMeth(C$, 'getDefaultStructureFileFormat$',  function () {
return C$.defaultStructureFileFormat;
}, 1);

Clazz.newMeth(C$, 'setDefaultStructureFileFormat$S',  function (defaultStructureFileFormat) {
C$.defaultStructureFileFormat=$I$(1,"valueOf$S",[defaultStructureFileFormat.toUpperCase$java_util_Locale($I$(3).ROOT)]);
}, 1);

Clazz.newMeth(C$, 'getDefaultPDBFileParser$',  function () {
return C$.defaultPDBFileParser.toString();
}, 1);

Clazz.newMeth(C$, 'setDefaultPDBFileParser$jalview_structure_StructureImportSettings_StructureParser',  function (defaultPDBFileParser) {
C$.defaultPDBFileParser=defaultPDBFileParser;
}, 1);

Clazz.newMeth(C$, 'setDefaultPDBFileParser$S',  function (defaultPDBFileParser) {
C$.defaultPDBFileParser=$I$(2,"valueOf$S",[defaultPDBFileParser.toUpperCase$java_util_Locale($I$(3).ROOT)]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.visibleChainAnnotation=false;
C$.processSecStr=false;
C$.externalSecondaryStructure=false;
C$.showSeqFeatures=true;
C$.defaultStructureFileFormat=$I$(1).PDB;
C$.defaultPDBFileParser=$I$(2).JMOL_PARSER;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructureImportSettings, "StructureParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "JMOL_PARSER", 0, []);
Clazz.newEnumConst($vals, C$.c$, "JALVIEW_PARSER", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
