(function(){var P$=Clazz.newPackage("jalview.ext.jmol"),I$=[[0,'jalview.structure.StructureCommand','java.util.Arrays','jalview.structure.StructureCommandI','StringBuilder',['jalview.structure.StructureCommandsI','.AtomSpecType'],'jalview.util.Platform','jalview.renderer.seqfeatures.FeatureColourFinder','java.util.ArrayList','jalview.util.Comparison','java.awt.Color']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolCommands", null, 'jalview.structure.StructureCommandsBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['SHOW_BACKBONE','jalview.structure.StructureCommand','+FOCUS_VIEW','+COLOUR_ALL_WHITE','COLOUR_BY_CHARGE','jalview.structure.StructureCommandI','+COLOUR_BY_CHAIN']]]

Clazz.newMeth(C$, 'getModelStartNo$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getColourString$java_awt_Color',  function (c) {
return c == null  ? null : String.format$S$OA("[%d,%d,%d]", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(c.getRed$()), Integer.valueOf$I(c.getGreen$()), Integer.valueOf$I(c.getBlue$())]));
});

Clazz.newMeth(C$, 'colourByChain$',  function () {
return C$.COLOUR_BY_CHAIN;
});

Clazz.newMeth(C$, 'colourByCharge$',  function () {
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [C$.COLOUR_BY_CHARGE])]);
});

Clazz.newMeth(C$, 'colourByResidues$java_util_Map',  function (colours) {
var cmds=C$.superclazz.prototype.colourByResidues$java_util_Map.apply(this, [colours]);
cmds.add$I$O(0, C$.COLOUR_ALL_WHITE);
return cmds;
});

Clazz.newMeth(C$, 'setBackgroundColour$java_awt_Color',  function (col) {
return Clazz.new_(["background " + this.getColourString$java_awt_Color(col), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'focusView$',  function () {
return C$.FOCUS_VIEW;
});

Clazz.newMeth(C$, 'showChains$java_util_List',  function (toShow) {
var atomSpec=Clazz.new_($I$(4,1).c$$I,[128]);
var first=true;
for (var chain, $chain = toShow.iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var tokens=chain.split$S(":");
if (tokens.length == 2) {
if (!first) {
atomSpec.append$S(" or ");
}first=false;
atomSpec.append$S(":").append$S(tokens[1]).append$S(" /").append$S(tokens[0]);
}}
var spec=atomSpec.toString();
var command="select *;restrict " + spec + ";cartoon;center " + spec ;
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [Clazz.new_([command, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA)])]);
});

Clazz.newMeth(C$, 'superposeStructures$jalview_structure_AtomSpecModel$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (refAtoms, atomSpec, backbone) {
var sb=Clazz.new_($I$(4,1).c$$I,[64]);
var refModel=refAtoms.getModels$().iterator$().next$();
var model2=atomSpec.getModels$().iterator$().next$();
sb.append$S(String.format$S$OA("compare {%s.1} {%s.1}", Clazz.array(java.lang.Object, -1, [model2, refModel])));
sb.append$S(" SUBSET {(*.CA | *.P) and conformation=1} ATOMS {");
sb.append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpec, backbone)).append$S("}{");
sb.append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(refAtoms, backbone)).append$S("}");
sb.append$S(" ROTATE TRANSLATE ");
sb.append$S(this.getCommandSeparator$());
sb.append$S("select ").append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpec, $I$(5).RESIDUE_ONLY)).append$S("|");
sb.append$S(this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(refAtoms, $I$(5).RESIDUE_ONLY)).append$S(this.getCommandSeparator$()).append$S("cartoons");
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA)])]);
});

Clazz.newMeth(C$, 'openCommandFile$S',  function (path) {
return Clazz.new_(["script " + path, Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'saveSession$S',  function (filepath) {
return Clazz.new_(["write STATE \"" + filepath + "\"" , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'colourResidues$S$java_awt_Color',  function (atomSpec, colour) {
var sb=Clazz.new_([atomSpec.length$() + 20],$I$(4,1).c$$I);
sb.append$S("select ").append$S(atomSpec).append$S(this.getCommandSeparator$()).append$S("color").append$S(this.getColourString$java_awt_Color(colour));
return Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'getResidueSpec$S',  function (residue) {
return residue;
});

Clazz.newMeth(C$, 'getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType',  function (model, specType) {
var sb=Clazz.new_($I$(4,1).c$$I,[128]);
var first=true;
for (var modelNo, $modelNo = model.getModels$().iterator$(); $modelNo.hasNext$()&&((modelNo=($modelNo.next$())),1);) {
for (var chain, $chain = model.getChains$S(modelNo).iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
for (var range, $range = model.getRanges$S$S(modelNo, chain).iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (!first) {
sb.append$S("|");
}first=false;
if (range[0] == range[1]) {
sb.append$I(range[0]);
} else {
sb.append$I(range[0]).append$S("-").append$I(range[1]);
}sb.append$S(":").append$S(chain.trim$()).append$S("/");
sb.append$S(String.valueOf$O(modelNo)).append$S(".1");
}
}
}
return sb.toString();
});

Clazz.newMeth(C$, 'showBackbone$',  function () {
return $I$(2,"asList$OA",[Clazz.array($I$(3), -1, [C$.SHOW_BACKBONE])]);
});

Clazz.newMeth(C$, 'loadFile$S',  function (file) {
return Clazz.new_(["load FILES \"" + $I$(6).escapeBackslashes$S(file) + "\"" , Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
});

Clazz.newMeth(C$, 'colourBySequence$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel',  function (ssm, files, sequence, sr, viewPanel) {
var fr=viewPanel.getFeatureRenderer$();
var finder=Clazz.new_($I$(7,1).c$$jalview_api_FeatureRenderer,[fr]);
var viewport=viewPanel.getAlignViewport$();
var cs=viewport.getAlignment$().getHiddenColumns$();
var al=viewport.getAlignment$();
var cset=Clazz.new_($I$(8,1));
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var mapping=ssm.getMapping$S(files[pdbfnum]);
var command=Clazz.new_($I$(4,1).c$$I,[128]);
var str=Clazz.new_($I$(8,1));
if (mapping == null  || mapping.length < 1 ) {
continue;
}for (var s=0; s < sequence[pdbfnum].length; s++) {
for (var sp, m=0; m < mapping.length; m++) {
if (mapping[m].getSequence$() === sequence[pdbfnum][s]  && (sp=al.findIndex$jalview_datamodel_SequenceI(sequence[pdbfnum][s])) > -1 ) {
var lastPos=-2147483648;
var asp=al.getSequenceAt$I(sp);
for (var r=0; r < asp.getLength$(); r++) {
if ($I$(9,"isGap$C",[asp.getCharAt$I(r)])) {
continue;
}var pos=mapping[m].getPDBResNum$I(asp.findPosition$I(r));
if (pos == lastPos) {
continue;
}if (pos == -2147483648) {
if (command.length$() > 0 && command.charAt$I(command.length$() - 1) != ";" ) {
command.append$S(";");
}lastPos=-2147483648;
continue;
}lastPos=pos;
var col=sr.getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(sequence[pdbfnum][s], r, finder);
if (!cs.isVisible$I(r)) {
col=$I$(10).GRAY;
}var newSelcom=(mapping[m].getChain$() !== " "  ? ":" + mapping[m].getChain$() : "") + "/" + (pdbfnum + 1) + ".1" + ";color" + this.getColourString$java_awt_Color(col) ;
if (command.length$() > newSelcom.length$() && command.substring$I(command.length$() - newSelcom.length$()).equals$O(newSelcom) ) {
command=C$.condenseCommand$StringBuilder$I(command, pos);
continue;
}if (command.length$() > 0 && command.charAt$I(command.length$() - 1) != ";" ) {
command.append$S(";");
}if (command.length$() > 51200) {
str.add$O(command.toString());
command.setLength$I(0);
}command.append$S("select " + pos);
command.append$S(newSelcom);
}
}}
}
{
str.add$O(command.toString());
command.setLength$I(0);
}cset.addAll$java_util_Collection(str);
}
return cset.toArray$OA(Clazz.array(String, [cset.size$()]));
});

Clazz.newMeth(C$, 'condenseCommand$StringBuilder$I',  function (command, pos) {
var p=command.length$();
var q=p;
do {
p-=6;
if (p < 1) {
p=0;
};} while ((q=command.indexOf$S$I("select", p)) == -1 && p > 0 );
var sb=Clazz.new_([command.substring$I$I(0, q + 7)],$I$(4,1).c$$S);
command=command.delete$I$I(0, q + 7);
var start;
if (command.indexOf$S("-") > -1) {
start=command.substring$I$I(0, command.indexOf$S("-"));
} else {
start=command.substring$I$I(0, command.indexOf$S(":"));
}sb.append$S(start + "-" + pos + command.substring$I(command.indexOf$S(":")) );
return sb;
}, 1);

Clazz.newMeth(C$, 'openSession$S',  function (filepath) {
return this.loadFile$S(filepath);
});

Clazz.newMeth(C$, 'closeViewer$',  function () {
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.SHOW_BACKBONE=Clazz.new_(["select *; cartoons off; backbone", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.FOCUS_VIEW=Clazz.new_(["zoom 0", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.COLOUR_ALL_WHITE=Clazz.new_(["select *;color white;", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.COLOUR_BY_CHARGE=Clazz.new_(["select *;color white;select ASP,GLU;color red;select LYS,ARG;color blue;select CYS;color yellow", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
C$.COLOUR_BY_CHAIN=Clazz.new_(["select *;color chain", Clazz.array(String, -1, [])],$I$(1,1).c$$S$SA);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
