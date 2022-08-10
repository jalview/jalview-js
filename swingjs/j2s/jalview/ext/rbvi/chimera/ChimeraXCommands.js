(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[[0,'jalview.structure.StructureCommand','java.util.Arrays','jalview.structure.StructureCommandI','StringBuilder',['jalview.structure.StructureCommandsI','.AtomSpecType'],'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraXCommands", null, 'jalview.ext.rbvi.chimera.ChimeraCommands');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$LIST_RESIDUE_ATTRIBUTES','jalview.structure.StructureCommand','+CLOSE_CHIMERAX','+$STOP_NOTIFY_SELECTION','+$STOP_NOTIFY_MODELS','+$GET_SELECTION','+$SHOW_BACKBONE','+$FOCUS_VIEW','$COLOUR_BY_CHARGE','jalview.structure.StructureCommandI']]]

Clazz.newMeth(C$, 'colourByCharge$',  function () {
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [C$.$COLOUR_BY_CHARGE])]);
});

Clazz.newMeth(C$, 'getResidueSpec$S',  function (residue) {
return ":" + residue;
});

Clazz.newMeth(C$, 'colourResidues$S$java_awt_Color',  function (atomSpec, colour) {
var colourCode=this.getColourString$java_awt_Color(colour);
return Clazz.new_(["color " + atomSpec + " " + colourCode , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'focusView$',  function () {
return C$.$FOCUS_VIEW;
});

Clazz.newMeth(C$, 'getModelStartNo$',  function () {
return 1;
});

Clazz.newMeth(C$, 'setAttribute$S$S$jalview_structure_AtomSpecModel',  function (attributeName, attributeValue, atomSpecModel) {
var sb=Clazz.new_($I$(4,1).c$$I,[128]);
sb.append$S("setattr ").append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpecModel, $I$(5).RESIDUE_ONLY));
sb.append$S(" res ").append$S(attributeName).append$S(" \'").append$S(attributeValue).append$S("\'");
sb.append$S(" create true");
return Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'openCommandFile$S',  function (path) {
return Clazz.new_(["open " + path, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'saveSession$S',  function (filepath) {
return Clazz.new_(["save " + filepath + " format session" , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (atomSpec, specType) {
var sb=Clazz.new_($I$(4,1).c$$I,[128]);
var firstModel=true;
for (var model, $model = atomSpec.getModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (!firstModel) {
sb.append$S("|");
}firstModel=false;
this.appendModel$StringBuilder$S$jalview_structure_AtomSpecModel(sb, model, atomSpec);
if (specType === $I$(5).ALPHA ) {
sb.append$S("@CA");
}if (specType === $I$(5).PHOSPHATE ) {
sb.append$S("@P");
}}
return sb.toString();
});

Clazz.newMeth(C$, 'appendModel$StringBuilder$S$jalview_structure_AtomSpecModel',  function (sb, model, atomSpec) {
sb.append$S("#").append$S(model);
for (var chain, $chain = atomSpec.getChains$S(model).iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var firstPositionForChain=true;
sb.append$S("/").append$S(chain.trim$()).append$S(":");
var rangeList=atomSpec.getRanges$S$S(model, chain);
var first=true;
for (var range, $range = rangeList.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (!first) {
sb.append$S(",");
}first=false;
this.appendRange$StringBuilder$I$I$S$Z$Z(sb, range[0], range[1], chain, firstPositionForChain, true);
}
}
});

Clazz.newMeth(C$, 'showBackbone$',  function () {
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [C$.$SHOW_BACKBONE])]);
});

Clazz.newMeth(C$, 'superposeStructures$jalview_structure_AtomSpecModel$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (ref, spec, backbone) {
var cmd=Clazz.new_($I$(4,1));
var atomSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(spec, backbone);
var refSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(ref, backbone);
cmd.append$S("align ").append$S(atomSpec).append$S(" toAtoms ").append$S(refSpec);
cmd.append$S("; ribbon ");
cmd.append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(spec, $I$(5).RESIDUE_ONLY)).append$S("|");
cmd.append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(ref, $I$(5).RESIDUE_ONLY)).append$S("; view");
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [Clazz.new_([cmd.toString(), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA)])]);
});

Clazz.newMeth(C$, 'openSession$S',  function (filepath) {
return Clazz.new_(["open " + filepath + " format session" , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'closeViewer$',  function () {
return C$.CLOSE_CHIMERAX;
});

Clazz.newMeth(C$, 'startNotifications$S',  function (uri) {
var cmds=Clazz.new_($I$(6,1));
cmds.add$O(Clazz.new_(["info notify start models jalview prefix ModelChanged url " + uri, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA));
cmds.add$O(Clazz.new_(["info notify start selection jalview prefix SelectionChanged url " + uri, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA));
return cmds;
});

Clazz.newMeth(C$, 'stopNotifications$',  function () {
var cmds=Clazz.new_($I$(6,1));
cmds.add$O(C$.$STOP_NOTIFY_MODELS);
cmds.add$O(C$.$STOP_NOTIFY_SELECTION);
return cmds;
});

Clazz.newMeth(C$, 'getSelectedResidues$',  function () {
return C$.$GET_SELECTION;
});

Clazz.newMeth(C$, 'listResidueAttributes$',  function () {
return C$.$LIST_RESIDUE_ATTRIBUTES;
});

C$.$static$=function(){C$.$static$=0;
C$.$LIST_RESIDUE_ATTRIBUTES=Clazz.new_(["info resattr", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.CLOSE_CHIMERAX=Clazz.new_(["exit", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.$STOP_NOTIFY_SELECTION=Clazz.new_(["info notify stop selection jalview", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.$STOP_NOTIFY_MODELS=Clazz.new_(["info notify stop models jalview", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.$GET_SELECTION=Clazz.new_(["info selection level residue", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.$SHOW_BACKBONE=Clazz.new_(["~display all;~ribbon;show @CA|P atoms", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.$FOCUS_VIEW=Clazz.new_(["view", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.$COLOUR_BY_CHARGE=Clazz.new_(["color white;color :ASP,GLU red;color :LYS,ARG blue;color :CYS yellow", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
