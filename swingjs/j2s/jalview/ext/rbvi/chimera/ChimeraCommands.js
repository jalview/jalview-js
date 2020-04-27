(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[[0,'jalview.structure.StructureMappingcommandSet','java.util.ArrayList','StringBuilder','jalview.util.ColorUtils','jalview.renderer.seqfeatures.FeatureColourFinder','java.util.LinkedHashMap','jalview.util.Comparison','java.awt.Color','jalview.ext.rbvi.chimera.AtomSpecModel','jalview.gui.Desktop','java.util.HashMap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraCommands");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColourBySequenceCommand$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel', function (ssm, files, sequence, sr, viewPanel) {
var colourMap=C$.buildColoursMap$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel(ssm, files, sequence, sr, viewPanel);
var colourCommands=C$.buildColourCommands$java_util_Map(colourMap);
var cs=Clazz.new_([Clazz.getClass(C$), null, colourCommands.toArray$OA(Clazz.array(String, [colourCommands.size$()]))],$I$(1,1).c$$O$S$SA);
return Clazz.array($I$(1), -1, [cs]);
}, 1);

Clazz.newMeth(C$, 'buildColourCommands$java_util_Map', function (colourMap) {
var commands=Clazz.new_($I$(2,1));
var sb=Clazz.new_($I$(3,1).c$$I,[256]);
var firstColour=true;
for (var key, $key = colourMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var colour=key;
var colourCode=$I$(4).toTkCode$java_awt_Color(colour);
if (!firstColour) {
sb.append$S("; ");
}sb.append$S("color ").append$S(colourCode).append$S(" ");
firstColour=false;
var colourData=colourMap.get$O(colour);
sb.append$S(colourData.getAtomSpec$());
}
commands.add$O(sb.toString());
return commands;
}, 1);

Clazz.newMeth(C$, 'getAtomSpec$java_util_Map', function (modelAndChainRanges) {
var sb=Clazz.new_($I$(3,1).c$$I,[128]);
var firstModelForColour=true;
for (var model, $model = modelAndChainRanges.keySet$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
var firstPositionForModel=true;
if (!firstModelForColour) {
sb.append$S("|");
}firstModelForColour=false;
sb.append$S("#").append$O(model).append$S(":");
var modelData=modelAndChainRanges.get$O(model);
for (var chain, $chain = modelData.keySet$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var hasChain=!"".equals$O(chain.trim$());
for (var range, $range = modelData.get$O(chain).iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (!firstPositionForModel) {
sb.append$S(",");
}if (range[0] == range[1]) {
sb.append$I(range[0]);
} else {
sb.append$I(range[0]).append$S("-").append$I(range[1]);
}if (hasChain) {
sb.append$S(".").append$S(chain);
}firstPositionForModel=false;
}
}
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'buildColoursMap$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel', function (ssm, files, sequence, sr, viewPanel) {
var fr=viewPanel.getFeatureRenderer$();
var finder=Clazz.new_($I$(5,1).c$$jalview_api_FeatureRenderer,[fr]);
var viewport=viewPanel.getAlignViewport$();
var cs=viewport.getAlignment$().getHiddenColumns$();
var al=viewport.getAlignment$();
var colourMap=Clazz.new_($I$(6,1));
var lastColour=null;
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var mapping=ssm.getMapping$S(files[pdbfnum]);
if (mapping == null  || mapping.length < 1 ) {
continue;
}var startPos=-1;
var lastPos=-1;
var lastChain="";
for (var s=0; s < sequence[pdbfnum].length; s++) {
for (var sp, m=0; m < mapping.length; m++) {
var seq=sequence[pdbfnum][s];
if (mapping[m].getSequence$() === seq  && (sp=al.findIndex$jalview_datamodel_SequenceI(seq)) > -1 ) {
var asp=al.getSequenceAt$I(sp);
for (var r=0; r < asp.getLength$(); r++) {
if ($I$(7,"isGap$C",[asp.getCharAt$I(r)])) {
continue;
}var pos=mapping[m].getPDBResNum$I(asp.findPosition$I(r));
if (pos < 1 || pos == lastPos ) {
continue;
}var colour=sr.getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(seq, r, finder);
if (!cs.isVisible$I(r)) {
colour=$I$(8).GRAY;
}var chain=mapping[m].getChain$();
var newColour=!colour.equals$O(lastColour);
var nonContig=lastPos + 1 != pos;
var newChain=!chain.equals$O(lastChain);
if (newColour || nonContig || newChain  ) {
if (startPos != -1) {
C$.addAtomSpecRange$java_util_Map$O$I$I$I$S(colourMap, lastColour, pdbfnum, startPos, lastPos, lastChain);
}startPos=pos;
}lastColour=colour;
lastPos=pos;
lastChain=chain;
}
if (lastColour != null ) {
C$.addAtomSpecRange$java_util_Map$O$I$I$I$S(colourMap, lastColour, pdbfnum, startPos, lastPos, lastChain);
}}}
}
}
return colourMap;
}, 1);

Clazz.newMeth(C$, 'addAtomSpecRange$java_util_Map$O$I$I$I$S', function (map, value, model, startPos, endPos, chain) {
var atomSpec=map.get$O(value);
if (atomSpec == null ) {
atomSpec=Clazz.new_($I$(9,1));
map.put$O$O(value, atomSpec);
}atomSpec.addRange$I$I$I$S(model, startPos, endPos, chain);
}, 1);

Clazz.newMeth(C$, 'getSetAttributeCommandsForFeatures$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_AlignmentViewPanel', function (ssm, files, seqs, viewPanel) {
var featureMap=C$.buildFeaturesMap$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_AlignmentViewPanel(ssm, files, seqs, viewPanel);
var commands=C$.buildSetAttributeCommands$java_util_Map(featureMap);
var cs=Clazz.new_([Clazz.getClass(C$), null, commands.toArray$OA(Clazz.array(String, [commands.size$()]))],$I$(1,1).c$$O$S$SA);
return cs;
}, 1);

Clazz.newMeth(C$, 'buildFeaturesMap$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_AlignmentViewPanel', function (ssm, files, seqs, viewPanel) {
var theMap=Clazz.new_($I$(6,1));
var fr=viewPanel.getFeatureRenderer$();
if (fr == null ) {
return theMap;
}var viewport=viewPanel.getAlignViewport$();
var visibleFeatures=fr.getDisplayedFeatureTypes$();
var showLinkedFeatures=viewport.isShowComplementFeatures$();
var complementFeatures=Clazz.new_($I$(2,1));
var complementRenderer=null;
if (showLinkedFeatures) {
var comp=fr.getViewport$().getCodingComplement$();
if (comp != null ) {
complementRenderer=$I$(10).getAlignFrameFor$jalview_api_AlignViewportI(comp).getFeatureRenderer$();
complementFeatures=complementRenderer.getDisplayedFeatureTypes$();
}}if (visibleFeatures.isEmpty$() && complementFeatures.isEmpty$() ) {
return theMap;
}var alignment=viewPanel.getAlignment$();
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var mapping=ssm.getMapping$S(files[pdbfnum]);
if (mapping == null  || mapping.length < 1 ) {
continue;
}for (var seqNo=0; seqNo < seqs[pdbfnum].length; seqNo++) {
for (var m=0; m < mapping.length; m++) {
var seq=seqs[pdbfnum][seqNo];
var sp=alignment.findIndex$jalview_datamodel_SequenceI(seq);
var structureMapping=mapping[m];
if (structureMapping.getSequence$() === seq  && sp > -1 ) {
if (!visibleFeatures.isEmpty$()) {
C$.scanSequenceFeatures$java_util_List$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$I(visibleFeatures, structureMapping, seq, theMap, pdbfnum);
}if (showLinkedFeatures) {
C$.scanComplementFeatures$jalview_api_FeatureRenderer$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$I(complementRenderer, structureMapping, seq, theMap, pdbfnum);
}}}
}
}
return theMap;
}, 1);

Clazz.newMeth(C$, 'scanComplementFeatures$jalview_api_FeatureRenderer$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$I', function (complementRenderer, structureMapping, seq, theMap, modelNumber) {
for (var seqPos, $seqPos = structureMapping.getMapping$().keySet$().iterator$(); $seqPos.hasNext$()&&((seqPos=($seqPos.next$()).intValue$()),1);) {
var mf=complementRenderer.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(seq, seqPos);
if (mf != null ) {
for (var sf, $sf = mf.features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var type=sf.getType$();
if ("Chimera".equals$O(sf.getFeatureGroup$())) {
continue;
}var mappedRanges=structureMapping.getPDBResNumRanges$I$I(seqPos, seqPos);
if (!mappedRanges.isEmpty$()) {
var value=sf.getDescription$();
if (value == null  || value.length$() == 0 ) {
value=type;
}var score=sf.getScore$();
if (score != 0.0  && !Float.isNaN$F(score) ) {
value=Float.toString$F(score);
}var featureValues=theMap.get$O(type);
if (featureValues == null ) {
featureValues=Clazz.new_($I$(11,1));
theMap.put$O$O(type, featureValues);
}for (var range, $range = mappedRanges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
C$.addAtomSpecRange$java_util_Map$O$I$I$I$S(featureValues, value, modelNumber, range[0], range[1], structureMapping.getChain$());
}
}}
}}
}, 1);

Clazz.newMeth(C$, 'scanSequenceFeatures$java_util_List$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$I', function (visibleFeatures, mapping, seq, theMap, modelNumber) {
var sfs=seq.getFeatures$().getPositionalFeatures$SA(visibleFeatures.toArray$OA(Clazz.array(String, [visibleFeatures.size$()])));
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var type=sf.getType$();
if ("Chimera".equals$O(sf.getFeatureGroup$())) {
continue;
}var mappedRanges=mapping.getPDBResNumRanges$I$I(sf.getBegin$(), sf.getEnd$());
if (!mappedRanges.isEmpty$()) {
var value=sf.getDescription$();
if (value == null  || value.length$() == 0 ) {
value=type;
}var score=sf.getScore$();
if (score != 0.0  && !Float.isNaN$F(score) ) {
value=Float.toString$F(score);
}var featureValues=theMap.get$O(type);
if (featureValues == null ) {
featureValues=Clazz.new_($I$(11,1));
theMap.put$O$O(type, featureValues);
}for (var range, $range = mappedRanges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
C$.addAtomSpecRange$java_util_Map$O$I$I$I$S(featureValues, value, modelNumber, range[0], range[1], mapping.getChain$());
}
}}
}, 1);

Clazz.newMeth(C$, 'buildSetAttributeCommands$java_util_Map', function (featureMap) {
var commands=Clazz.new_($I$(2,1));
for (var featureType, $featureType = featureMap.keySet$().iterator$(); $featureType.hasNext$()&&((featureType=($featureType.next$())),1);) {
var attributeName=C$.makeAttributeName$S(featureType);
var values=featureMap.get$O(featureType);
for (var value, $value = values.keySet$().iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
var sb=Clazz.new_($I$(3,1).c$$I,[128]);
var featureValue=value.toString();
featureValue=featureValue.replaceAll$S$S("\\\'", "&#39;");
sb.append$S("setattr r ").append$S(attributeName).append$S(" \'").append$S(featureValue).append$S("\' ");
sb.append$S(values.get$O(value).getAtomSpec$());
commands.add$O(sb.toString());
}
}
return commands;
}, 1);

Clazz.newMeth(C$, 'makeAttributeName$S', function (featureType) {
var sb=Clazz.new_($I$(3,1));
if (featureType != null ) {
for (var c, $c = 0, $$c = featureType.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
sb.append$C(Character.isLetterOrDigit$C(c) ? c : "_");
}
}var attName="jv_" + sb.toString();
if (attName.toUpperCase$().endsWith$S("COLOR")) {
attName += "_";
}return attName;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
