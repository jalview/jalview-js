(function(){var P$=Clazz.newPackage("jalview.structure"),p$1={},I$=[[0,'jalview.structure.AtomSpecModel','StringBuilder','java.util.ArrayList','jalview.structure.StructureCommand',['jalview.structure.StructureCommandsI','.AtomSpecType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureCommandsBase", null, null, 'jalview.structure.StructureCommandsI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getCommandSeparator$',  function () {
return ";";
});

Clazz.newMeth(C$, 'getModelStartNo$',  function () {
return 0;
});

Clazz.newMeth(C$, 'addAtomSpecRange$java_util_Map$O$S$I$I$S',  function (map, value, model, startPos, endPos, chain) {
var atomSpec=map.get$O(value);
if (atomSpec == null ) {
atomSpec=Clazz.new_($I$(1,1));
map.put$O$O(value, atomSpec);
}atomSpec.addRange$S$I$I$S(model, startPos, endPos, chain);
}, 1);

Clazz.newMeth(C$, 'makeAttributeName$S',  function (featureType) {
var sb=Clazz.new_($I$(2,1));
if (featureType != null ) {
for (var c, $c = 0, $$c = featureType.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
sb.append$C(Character.isLetterOrDigit$C(c) ? c : "_");
}
}var attName="jv_" + sb.toString();
return attName;
});

Clazz.newMeth(C$, 'colourBySequence$java_util_Map',  function (colourMap) {
var commands=Clazz.new_($I$(3,1));
var sb=Clazz.new_([colourMap.size$() * 20],$I$(2,1).c$$I);
var first=true;
for (var key, $key = colourMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var colour=key;
var colourData=colourMap.get$O(colour);
var command=this.getColourCommand$jalview_structure_AtomSpecModel$java_awt_Color(colourData, colour);
if (!first) {
sb.append$S(this.getCommandSeparator$());
}first=false;
sb.append$S(command.getCommand$());
}
commands.add$O(Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(4,1).c$$S$SA));
return commands;
});

Clazz.newMeth(C$, 'getColourCommand$jalview_structure_AtomSpecModel$java_awt_Color',  function (atomSpecModel, colour) {
var atomSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpecModel, $I$(5).RESIDUE_ONLY);
return this.colourResidues$S$java_awt_Color(atomSpec, colour);
});

Clazz.newMeth(C$, 'colourByResidues$java_util_Map',  function (colours) {
var commands=Clazz.new_($I$(3,1));
for (var entry, $entry = colours.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
commands.add$O(p$1.colourResidue$S$java_awt_Color.apply(this, [entry.getKey$(), entry.getValue$()]));
}
return commands;
});

Clazz.newMeth(C$, 'colourResidue$S$java_awt_Color',  function (resName, col) {
var atomSpec=this.getResidueSpec$S(resName);
return this.colourResidues$S$java_awt_Color(atomSpec, col);
}, p$1);

Clazz.newMeth(C$, 'appendRange$StringBuilder$I$I$S$Z$Z',  function (sb, start, end, chain, firstPositionForModel, isChimeraX) {
if (!firstPositionForModel) {
sb.append$S(",");
}if (end == start) {
sb.append$I(start);
} else {
sb.append$I(start).append$S("-").append$I(end);
}if (!isChimeraX) {
sb.append$S(".");
if (!" ".equals$O(chain)) {
sb.append$S(chain);
}}});

Clazz.newMeth(C$, 'setAttributes$java_util_Map',  function (featureValues) {
return null;
});

Clazz.newMeth(C$, 'startNotifications$S',  function (uri) {
return null;
});

Clazz.newMeth(C$, 'stopNotifications$',  function () {
return null;
});

Clazz.newMeth(C$, 'getSelectedResidues$',  function () {
return null;
});

Clazz.newMeth(C$, 'listResidueAttributes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getResidueAttributes$S',  function (attName) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
