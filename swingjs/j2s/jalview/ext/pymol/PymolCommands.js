(function(){var P$=Clazz.newPackage("jalview.ext.pymol"),I$=[[0,'jalview.structure.StructureCommand','java.util.Arrays','jalview.structure.StructureCommandI','java.util.ArrayList','StringBuilder',['jalview.structure.StructureCommandsI','.AtomSpecType']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PymolCommands", null, 'jalview.structure.StructureCommandsBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FOCUS_VIEW','jalview.structure.StructureCommand','+CLOSE_PYMOL','+COLOUR_BY_CHAIN','COLOR_BY_CHARGE','java.util.List','+SHOW_BACKBONE']]]

Clazz.newMeth(C$, 'colourByChain$',  function () {
return C$.COLOUR_BY_CHAIN;
});

Clazz.newMeth(C$, 'colourByCharge$',  function () {
return C$.COLOR_BY_CHARGE;
});

Clazz.newMeth(C$, 'setBackgroundColour$java_awt_Color',  function (col) {
return Clazz.new_(["bg_color", Clazz.array(String, -1, [this.getColourString$java_awt_Color(col)])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getColourString$java_awt_Color',  function (c) {
return String.format$S$OA("0x%02x%02x%02x", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(c.getRed$()), Integer.valueOf$I(c.getGreen$()), Integer.valueOf$I(c.getBlue$())]));
});

Clazz.newMeth(C$, 'focusView$',  function () {
return C$.FOCUS_VIEW;
});

Clazz.newMeth(C$, 'showChains$java_util_List',  function (toShow) {
var commands=Clazz.new_($I$(4,1));
commands.add$O(Clazz.new_(["hide", Clazz.array(String, -1, ["everything"])],$I$(1,1).c$$S$SA));
commands.add$O(Clazz.new_(["show", Clazz.array(String, -1, ["lines"])],$I$(1,1).c$$S$SA));
var chains=Clazz.new_($I$(5,1));
for (var chain, $chain = toShow.iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chains.append$S(" chain ").append$S(chain);
}
commands.add$O(Clazz.new_(["show", Clazz.array(String, -1, ["cartoon", chains.toString()])],$I$(1,1).c$$S$SA));
return commands;
});

Clazz.newMeth(C$, 'superposeStructures$jalview_structure_AtomSpecModel$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (refAtoms, atomSpec, specType) {
var commands=Clazz.new_($I$(4,1));
var refAtomsAlphaOnly="(" + this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(refAtoms, specType) + " and (altloc '' or altloc 'a'))" ;
var atomSpec2AlphaOnly="(" + this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpec, specType) + " and (altloc '' or altloc 'a'))" ;
commands.add$O(Clazz.new_(["undo_disable", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA));
commands.add$O(Clazz.new_(["pair_fit", Clazz.array(String, -1, [atomSpec2AlphaOnly, refAtomsAlphaOnly])],$I$(1,1).c$$S$SA));
commands.add$O(Clazz.new_(["undo_enable", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA));
var refAtomsAll=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(refAtoms, $I$(6).RESIDUE_ONLY);
var atomSpec2All=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpec, $I$(6).RESIDUE_ONLY);
commands.add$O(Clazz.new_(["show", Clazz.array(String, -1, ["cartoon", refAtomsAll + " " + atomSpec2All ])],$I$(1,1).c$$S$SA));
return commands;
});

Clazz.newMeth(C$, 'openCommandFile$S',  function (path) {
return Clazz.new_(["run", Clazz.array(String, -1, [path])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'saveSession$S',  function (filepath) {
return Clazz.new_(["save", Clazz.array(String, -1, [filepath])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (model, specType) {
var sb=Clazz.new_($I$(5,1).c$$I,[64]);
var first=true;
for (var modelId, $modelId = model.getModels$().iterator$(); $modelId.hasNext$()&&((modelId=($modelId.next$())),1);) {
for (var chain, $chain = model.getChains$S(modelId).iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (!first) {
sb.append$S(" ");
}first=false;
var rangeList=model.getRanges$S$S(modelId, chain);
chain=chain.trim$();
sb.append$S(modelId).append$S("//").append$S(chain).append$S("/");
var firstRange=true;
for (var range, $range = rangeList.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (!firstRange) {
sb.append$S("+");
}firstRange=false;
sb.append$S(String.valueOf$I(range[0]));
if (range[0] != range[1]) {
sb.append$S("-").append$S(String.valueOf$I(range[1]));
}}
sb.append$S("/");
if (specType === $I$(6).ALPHA ) {
sb.append$S("CA");
}if (specType === $I$(6).PHOSPHATE ) {
sb.append$S("P");
}}
}
return sb.toString();
});

Clazz.newMeth(C$, 'showBackbone$',  function () {
return C$.SHOW_BACKBONE;
});

Clazz.newMeth(C$, 'colourResidues$S$java_awt_Color',  function (atomSpec, colour) {
return Clazz.new_(["color", Clazz.array(String, -1, [this.getColourString$java_awt_Color(colour), atomSpec])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getResidueSpec$S',  function (residue) {
return "resn " + residue;
});

Clazz.newMeth(C$, 'loadFile$S',  function (file) {
return Clazz.new_(["load", Clazz.array(String, -1, [file])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'colourBySequence$java_util_Map',  function (colourMap) {
var commands=Clazz.new_($I$(4,1));
for (var key, $key = colourMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var colour=key;
var colourData=colourMap.get$O(colour);
commands.add$O(this.getColourCommand$jalview_structure_AtomSpecModel$java_awt_Color(colourData, colour));
}
return commands;
});

Clazz.newMeth(C$, 'setAttribute$S$S$jalview_structure_AtomSpecModel',  function (attributeName, attributeValue, atomSpecModel) {
var sb=Clazz.new_($I$(5,1).c$$I,[128]);
sb.append$S("p.").append$S(attributeName).append$S("=\'").append$S(attributeValue).append$S("\'");
var atomSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpecModel, $I$(6).RESIDUE_ONLY);
return Clazz.new_(["iterate", Clazz.array(String, -1, [atomSpec, sb.toString()])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'setAttributes$java_util_Map',  function (featureMap) {
var commands=Clazz.new_($I$(4,1));
for (var featureType, $featureType = featureMap.keySet$().iterator$(); $featureType.hasNext$()&&((featureType=($featureType.next$())),1);) {
var attributeName=this.makeAttributeName$S(featureType);
var values=featureMap.get$O(featureType);
for (var value, $value = values.keySet$().iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
var atomSpecModel=values.get$O(value);
var featureValue=value.toString();
featureValue=featureValue.replaceAll$S$S("\\\'", "&#39;");
var cmd=this.setAttribute$S$S$jalview_structure_AtomSpecModel(attributeName, featureValue, atomSpecModel);
commands.add$O(cmd);
}
}
return commands;
});

Clazz.newMeth(C$, 'openSession$S',  function (filepath) {
return Clazz.new_(["load", Clazz.array(String, -1, [filepath, "", "0", "pse"])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'closeViewer$',  function () {
return C$.CLOSE_PYMOL;
});

C$.$static$=function(){C$.$static$=0;
C$.FOCUS_VIEW=Clazz.new_(["zoom", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.CLOSE_PYMOL=Clazz.new_(["quit", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.COLOUR_BY_CHAIN=Clazz.new_(["spectrum", Clazz.array(String, -1, ["chain"])],$I$(1,1).c$$S$SA);
C$.COLOR_BY_CHARGE=$I$(2,"asList$OA",[Clazz.array($I$(3), -1, [Clazz.new_(["color", Clazz.array(String, -1, ["white", "*"])],$I$(1,1).c$$S$SA), Clazz.new_(["color", Clazz.array(String, -1, ["red", "resn ASP resn GLU"])],$I$(1,1).c$$S$SA), Clazz.new_(["color", Clazz.array(String, -1, ["blue", "resn LYS resn ARG"])],$I$(1,1).c$$S$SA), Clazz.new_(["color", Clazz.array(String, -1, ["yellow", "resn CYS"])],$I$(1,1).c$$S$SA)])]);
C$.SHOW_BACKBONE=$I$(2,"asList$OA",[Clazz.array($I$(3), -1, [Clazz.new_(["hide", Clazz.array(String, -1, ["everything"])],$I$(1,1).c$$S$SA), Clazz.new_(["show", Clazz.array(String, -1, ["ribbon"])],$I$(1,1).c$$S$SA)])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
