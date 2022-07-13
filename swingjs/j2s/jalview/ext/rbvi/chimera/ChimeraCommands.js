(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[[0,'jalview.structure.StructureCommand','jalview.util.ColorUtils','java.util.ArrayList','StringBuilder',['jalview.structure.StructureCommandsI','.AtomSpecType'],'java.util.Locale','java.util.Arrays','jalview.structure.StructureCommandI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraCommands", null, 'jalview.structure.StructureCommandsBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FOCUS_VIEW','jalview.structure.StructureCommand','+LIST_RESIDUE_ATTRIBUTES','+CLOSE_CHIMERA','+STOP_NOTIFY_SELECTION','+STOP_NOTIFY_MODELS','+GET_SELECTION','+SHOW_BACKBONE','COLOUR_BY_CHARGE','jalview.structure.StructureCommandI','+COLOUR_BY_CHAIN']]]

Clazz.newMeth(C$, 'colourResidues$S$java_awt_Color',  function (atomSpec, colour) {
var colourCode=this.getColourString$java_awt_Color(colour);
return Clazz.new_(["color " + colourCode + " " + atomSpec , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getColourString$java_awt_Color',  function (colour) {
return $I$(2).toTkCode$java_awt_Color(colour);
});

Clazz.newMeth(C$, 'setAttributes$java_util_Map',  function (featureMap) {
var commands=Clazz.new_($I$(3,1));
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

Clazz.newMeth(C$, 'setAttribute$S$S$jalview_structure_AtomSpecModel',  function (attributeName, attributeValue, atomSpecModel) {
var sb=Clazz.new_($I$(4,1).c$$I,[128]);
sb.append$S("setattr res ").append$S(attributeName).append$S(" \'").append$S(attributeValue).append$S("\' ");
sb.append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpecModel, $I$(5).RESIDUE_ONLY));
return Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'makeAttributeName$S',  function (featureType) {
var attName=C$.superclazz.prototype.makeAttributeName$S.apply(this, [featureType]);
if (attName.toUpperCase$java_util_Locale($I$(6).ROOT).endsWith$S("COLOR")) {
attName+="_";
}return attName;
});

Clazz.newMeth(C$, 'colourByChain$',  function () {
return C$.COLOUR_BY_CHAIN;
});

Clazz.newMeth(C$, 'colourByCharge$',  function () {
return $I$(7,"asList$OA",[Clazz.array($I$(8), -1, [C$.COLOUR_BY_CHARGE])]);
});

Clazz.newMeth(C$, 'getResidueSpec$S',  function (residue) {
return "::" + residue;
});

Clazz.newMeth(C$, 'setBackgroundColour$java_awt_Color',  function (col) {
return Clazz.new_(["set bgColor " + $I$(2).toTkCode$java_awt_Color(col), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'focusView$',  function () {
return C$.FOCUS_VIEW;
});

Clazz.newMeth(C$, 'showChains$java_util_List',  function (toShow) {
var cmd=Clazz.new_($I$(4,1).c$$I,[64]);
var first=true;
for (var chain, $chain = toShow.iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var tokens=chain.split$S(":");
if (tokens.length == 2) {
var showChainCmd=tokens[0] + ":." + tokens[1] ;
if (!first) {
cmd.append$S(",");
}cmd.append$S(showChainCmd);
first=false;
}}
var command="~display #*; ~ribbon #*; ribbon :" + cmd.toString();
return $I$(7,"asList$OA",[Clazz.array($I$(8), -1, [Clazz.new_([command, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA)])]);
});

Clazz.newMeth(C$, 'superposeStructures$jalview_structure_AtomSpecModel$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (ref, spec, backbone) {
var cmd=Clazz.new_($I$(4,1));
var atomSpecAlphaOnly=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(spec, backbone);
var refSpecAlphaOnly=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(ref, backbone);
cmd.append$S("match ").append$S(atomSpecAlphaOnly).append$S(" ").append$S(refSpecAlphaOnly);
var atomSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(spec, $I$(5).RESIDUE_ONLY);
var refSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(ref, $I$(5).RESIDUE_ONLY);
cmd.append$S("; ribbon ");
cmd.append$S(atomSpec).append$S("|").append$S(refSpec).append$S("; focus");
return $I$(7,"asList$OA",[Clazz.array($I$(8), -1, [Clazz.new_([cmd.toString(), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA)])]);
});

Clazz.newMeth(C$, 'openCommandFile$S',  function (path) {
return Clazz.new_(["open cmd:" + path, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'saveSession$S',  function (filepath) {
return Clazz.new_(["save " + filepath, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (atomSpec, specType) {
var sb=Clazz.new_($I$(4,1).c$$I,[128]);
var firstModel=true;
for (var model, $model = atomSpec.getModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (!firstModel) {
sb.append$S("|");
}firstModel=false;
this.appendModel$StringBuilder$S$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(sb, model, atomSpec, specType);
}
return sb.toString();
});

Clazz.newMeth(C$, 'appendModel$StringBuilder$S$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (sb, model, atomSpec, specType) {
sb.append$S("#").append$S(model).append$S(":");
var firstPositionForModel=true;
for (var chain, $chain = atomSpec.getChains$S(model).iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain=" ".equals$O(chain) ? chain : chain.trim$();
var rangeList=atomSpec.getRanges$S$S(model, chain);
for (var range, $range = rangeList.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
this.appendRange$StringBuilder$I$I$S$Z$Z(sb, range[0], range[1], chain, firstPositionForModel, false);
firstPositionForModel=false;
}
}
if (specType === $I$(5).ALPHA ) {
sb.append$S("@CA").append$S("&~@.B-Z&~@.2-9");
}if (specType === $I$(5).PHOSPHATE ) {
sb.append$S("@P").append$S("&~@.B-Z&~@.2-9");
}});

Clazz.newMeth(C$, 'showBackbone$',  function () {
return $I$(7,"asList$OA",[Clazz.array($I$(8), -1, [C$.SHOW_BACKBONE])]);
});

Clazz.newMeth(C$, 'loadFile$S',  function (file) {
return Clazz.new_(["open " + file, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'openSession$S',  function (filepath) {
return Clazz.new_(["open chimera:" + filepath, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'closeViewer$',  function () {
return C$.CLOSE_CHIMERA;
});

Clazz.newMeth(C$, 'startNotifications$S',  function (uri) {
var cmds=Clazz.new_($I$(3,1));
cmds.add$O(Clazz.new_(["listen start models url " + uri, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA));
cmds.add$O(Clazz.new_(["listen start select prefix SelectionChanged url " + uri, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA));
return cmds;
});

Clazz.newMeth(C$, 'stopNotifications$',  function () {
var cmds=Clazz.new_($I$(3,1));
cmds.add$O(C$.STOP_NOTIFY_MODELS);
cmds.add$O(C$.STOP_NOTIFY_SELECTION);
return cmds;
});

Clazz.newMeth(C$, 'getSelectedResidues$',  function () {
return C$.GET_SELECTION;
});

Clazz.newMeth(C$, 'listResidueAttributes$',  function () {
return C$.LIST_RESIDUE_ATTRIBUTES;
});

Clazz.newMeth(C$, 'getResidueAttributes$S',  function (attName) {
return Clazz.new_(["list residues attr '" + attName + "'" , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

C$.$static$=function(){C$.$static$=0;
C$.FOCUS_VIEW=Clazz.new_(["focus", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.LIST_RESIDUE_ATTRIBUTES=Clazz.new_(["list resattr", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.CLOSE_CHIMERA=Clazz.new_(["stop really", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.STOP_NOTIFY_SELECTION=Clazz.new_(["listen stop selection", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.STOP_NOTIFY_MODELS=Clazz.new_(["listen stop models", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.GET_SELECTION=Clazz.new_(["list selection level residue", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.SHOW_BACKBONE=Clazz.new_(["~display all;~ribbon;chain @CA|P", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.COLOUR_BY_CHARGE=Clazz.new_(["color white;color red ::ASP,GLU;color blue ::LYS,ARG;color yellow ::CYS", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.COLOUR_BY_CHAIN=Clazz.new_(["rainbow chain", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
