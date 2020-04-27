(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),p$1={},I$=[[0,'java.util.ArrayList',['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],'javax.swing.JColorChooser','fr.orsay.lri.varna.models.VARNAConfig','fr.orsay.lri.varna.views.VueBPThickness','javax.swing.JOptionPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControleurMenu", null, null, ['fr.orsay.lri.varna.interfaces.InterfaceVARNAListener', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_type','_color'],'O',['_vp','fr.orsay.lri.varna.VARNAPanel','_vm','fr.orsay.lri.varna.views.VueMenu','_source','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_views_VueMenu', function (_varnaPanel, _vueMenu) {
;C$.$init$.apply(this);
this._vp=_varnaPanel;
this._vm=_vueMenu;
this._vp.getRNA$().addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var temp=e.getActionCommand$().split$S(",");
this._source=e.getSource$();
this._type=temp[0];
if (temp.length > 1) this._color=temp[1];
 else this._color="";
if (!p$1.optionRedraw.apply(this, [])) if (!p$1.optionExport.apply(this, [])) if (!p$1.optionImport.apply(this, [])) if (!p$1.optionRNADisplay.apply(this, [])) if (!p$1.optionTitle.apply(this, [])) if (!p$1.optionColorMap.apply(this, [])) if (!p$1.optionView.apply(this, [])) if (!p$1.optionBase.apply(this, [])) if (!p$1.optionBasePair.apply(this, [])) if (!p$1.optionLoop.apply(this, [])) if (!p$1.option3prime.apply(this, [])) if (!p$1.option5prime.apply(this, [])) if (!p$1.optionHelix.apply(this, [])) if (!p$1.optionStem.apply(this, [])) if (!p$1.optionBulge.apply(this, [])) if (!p$1.optionAnnotation.apply(this, [])) if (!p$1.optionEditRNA.apply(this, [])) this._vp.errorDialog$Exception(Clazz.new_(Clazz.load('Exception').c$$S,["Uknown action command '" + this._type + "'" ]));
});

Clazz.newMeth(C$, 'optionEditRNA', function () {
if (this._type.equals$O("editallbps")) {
this._vp.getVARNAUI$().UIEditAllBasePairs$();
} else if (this._type.equals$O("editallbases")) {
this._vp.getVARNAUI$().UIEditAllBases$();
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'optionAnnotation', function () {
if (!this._type.contains$CharSequence("annotation")) return false;
if (this._type.equals$O("annotationsaddPosition")) {
this._vp.getVARNAUI$().UIAnnotationsAddPosition$I$I(this._vp.getPopup$().getSpawnPoint$().x, this._vp.getPopup$().getSpawnPoint$().y);
} else if (this._type.equals$O("annotationsaddBase")) {
this._vp.getVARNAUI$().UIAnnotationsAddBase$I$I(this._vp.getPopup$().getSpawnPoint$().x, this._vp.getPopup$().getSpawnPoint$().y);
} else if (this._type.equals$O("annotationsaddLoop")) {
this._vp.getVARNAUI$().UIAnnotationsAddLoop$I$I(this._vp.getPopup$().getSpawnPoint$().x, this._vp.getPopup$().getSpawnPoint$().y);
} else if (this._type.equals$O("annotationsaddChemProb")) {
this._vp.getVARNAUI$().UIAnnotationsAddChemProb$I$I(this._vp.getPopup$().getSpawnPoint$().x, this._vp.getPopup$().getSpawnPoint$().y);
} else if (this._type.equals$O("annotationsaddRegion")) {
this._vp.getVARNAUI$().UIAnnotationsAddRegion$I$I(this._vp.getPopup$().getSpawnPoint$().x, this._vp.getPopup$().getSpawnPoint$().y);
} else if (this._type.equals$O("annotationsaddHelix")) {
this._vp.getVARNAUI$().UIAnnotationsAddHelix$I$I(this._vp.getPopup$().getSpawnPoint$().x, this._vp.getPopup$().getSpawnPoint$().y);
} else if (this._type.equals$O("annotationsautohelices")) {
this._vp.getVARNAUI$().UIAutoAnnotateHelices$();
} else if (this._type.equals$O("annotationsautointerior")) {
this._vp.getVARNAUI$().UIAutoAnnotateInteriorLoops$();
} else if (this._type.equals$O("annotationsautoterminal")) {
this._vp.getVARNAUI$().UIAutoAnnotateTerminalLoops$();
} else if (this._type.equals$O("annotationsautohelices")) {
this._vp.getVARNAUI$().UIAutoAnnotateHelices$();
} else if (this._type.equals$O("annotationsremove")) {
this._vp.getVARNAUI$().UIAnnotationsRemove$();
} else if (this._type.equals$O("annotationsautoextremites")) {
this._vp.getVARNAUI$().UIAutoAnnotateStrandEnds$();
} else if (this._type.equals$O("annotationsedit")) {
this._vp.getVARNAUI$().UIAnnotationsEdit$();
} else if (this._type.equals$O("Selectionannotationremove")) {
this._vp.getVARNAUI$().UIAnnotationRemoveFromAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(this._vp.get_selectedAnnotation$());
} else if (this._type.equals$O("Selectionannotationedit")) {
this._vp.getVARNAUI$().UIAnnotationEditFromAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(this._vp.get_selectedAnnotation$());
} else if (this._type.endsWith$S("annotationadd") || this._type.contains$CharSequence("annotationremove") || this._type.contains$CharSequence("annotationedit")  ) {
try {
var type=p$1.trouverAncrage.apply(this, []);
var listeIndex=Clazz.new_($I$(1,1));
switch (type) {
case $I$(2).BASE:
listeIndex.add$O(this._vp.getNearestBase$());
case $I$(2).LOOP:
if (this._type.startsWith$S("loop1")) listeIndex=this._vp.getRNA$().findLoopForward$I((this._vp.getNearestBase$()).valueOf());
 else if (this._type.startsWith$S("loop2")) listeIndex=this._vp.getRNA$().findLoopBackward$I((this._vp.getNearestBase$()).valueOf());
 else listeIndex=this._vp.getRNA$().findLoop$I((this._vp.getNearestBase$()).valueOf());
break;
case $I$(2).HELIX:
listeIndex=this._vp.getRNA$().findHelix$I((this._vp.getNearestBase$()).valueOf());
break;
}
if (this._type.endsWith$S("annotationadd")) {
this._vp.getVARNAUI$().UIAnnotationAddFromStructure$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$java_util_ArrayList(type, listeIndex);
} else if (this._type.contains$CharSequence("annotationremove")) {
this._vp.getVARNAUI$().UIAnnotationRemoveFromStructure$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$java_util_ArrayList(p$1.trouverAncrage.apply(this, []), listeIndex);
} else if (this._type.contains$CharSequence("annotationedit")) {
this._vp.getVARNAUI$().UIAnnotationEditFromStructure$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$java_util_ArrayList(p$1.trouverAncrage.apply(this, []), listeIndex);
}} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
e2.printStackTrace$();
} else {
throw e2;
}
}
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'trouverAncrage', function () {
if (this._type.contains$CharSequence("loop")) return $I$(2).LOOP;
if (this._type.contains$CharSequence("helix")) return $I$(2).HELIX;
if (this._type.contains$CharSequence("base")) return $I$(2).BASE;
this.errorDialog$Exception(Clazz.new_(Clazz.load('Exception').c$$S,["probleme d\'identification de l\'ancrage"]));
return $I$(2).POSITION;
}, p$1);

Clazz.newMeth(C$, 'option5prime', function () {
return p$1.colorBases.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'option3prime', function () {
return p$1.colorBases.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'optionBulge', function () {
return p$1.colorBases.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'optionStem', function () {
return p$1.colorBases.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'optionHelix', function () {
return p$1.colorBases.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'colorBases', function () {
var listBase=Clazz.new_($I$(1,1));
var phrase="Choose new " + this._type;
if (this._color.equals$O("InnerColor")) {
phrase += " inner color";
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, phrase, $I$(4).BASE_INNER_COLOR_DEFAULT]);
if (c != null ) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
for (var i=0; i < listBase.size$(); i++) {
this._vp.getRNA$().get_listeBases$().get$I((listBase.get$I(i)).valueOf()).getStyleBase$().setBaseInnerColor$java_awt_Color(c);
}
this._vp.repaint$();
}} else if (this._color.equals$O("OutlineColor")) {
phrase += " outline color";
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, phrase, $I$(4).BASE_OUTLINE_COLOR_DEFAULT]);
if (c != null ) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
for (var i=0; i < listBase.size$(); i++) {
this._vp.getRNA$().get_listeBases$().get$I((listBase.get$I(i)).valueOf()).getStyleBase$().setBaseOutlineColor$java_awt_Color(c);
}
this._vp.repaint$();
}} else if (this._color.equals$O("NameColor")) {
phrase += " name color";
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, phrase, $I$(4).BASE_NAME_COLOR_DEFAULT]);
if (c != null ) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
for (var i=0; i < listBase.size$(); i++) {
this._vp.getRNA$().get_listeBases$().get$I((listBase.get$I(i)).valueOf()).getStyleBase$().setBaseNameColor$java_awt_Color(c);
}
this._vp.repaint$();
}} else if (this._color.equals$O("NumberColor")) {
phrase += " number color";
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, phrase, $I$(4).BASE_NUMBER_COLOR_DEFAULT]);
if (c != null ) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
for (var i=0; i < listBase.size$(); i++) {
this._vp.getRNA$().get_listeBases$().get$I((listBase.get$I(i)).valueOf()).getStyleBase$().setBaseNumberColor$java_awt_Color(c);
}
this._vp.repaint$();
}} else if (this._color.equals$O("BPColor")) {
phrase += " base-pair color";
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, phrase, $I$(4).BASE_NUMBER_COLOR_DEFAULT]);
if (c != null ) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
for (var i=0; i < listBase.size$(); i++) {
for (var msbp, $msbp = this._vp.getRNA$().getBPsAt$I((listBase.get$I(i)).valueOf()).iterator$(); $msbp.hasNext$()&&((msbp=($msbp.next$())),1);) {
if (msbp != null ) {
msbp.getStyle$().setCustomColor$java_awt_Color(c);
}}
}
this._vp.repaint$();
}} else if (this._color.equals$O("BPColor")) {
phrase += " base-pair color";
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, phrase, $I$(4).BASE_NUMBER_COLOR_DEFAULT]);
if (c != null ) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
for (var i=0; i < listBase.size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((listBase.get$I(i)).valueOf());
if (mb.getElementStructure$() != -1) {
mb.getStyleBP$().getStyle$().setCustomColor$java_awt_Color(c);
}}
this._vp.repaint$();
}} else if (this._color.equals$O("BPThickness")) {
listBase=p$1.listSwitchType$S.apply(this, [this._type]);
var styleBPs=Clazz.new_($I$(1,1));
for (var i=0; i < listBase.size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((listBase.get$I(i)).valueOf());
if (mb.getElementStructure$() != -1) {
styleBPs.add$O(mb.getStyleBP$());
}}
var vbpt=Clazz.new_($I$(5,1).c$$fr_orsay_lri_varna_VARNAPanel$java_util_ArrayList,[this._vp, styleBPs]);
if ($I$(6,"showConfirmDialog$java_awt_Component$O$S$I",[this._vp, vbpt.getPanel$(), "Set base pair(s) thickness", 2]) != 0) {
vbpt.restoreThicknesses$();
this._vp.repaint$();
}} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'listSwitchType$S', function (_type) {
if (_type.equals$O("helix")) return this._vp.getRNA$().findHelix$I((this._vp.getNearestBase$()).valueOf());
if (_type.equals$O("current")) {
return this._vp.getSelectionIndices$();
}if (_type.equals$O("allBases")) {
return this._vp.getRNA$().findAll$();
}if (_type.equals$O("loop1")) {
return this._vp.getRNA$().findLoopForward$I((this._vp.getNearestBase$()).valueOf());
}if (_type.equals$O("loop2")) {
return this._vp.getRNA$().findLoopBackward$I((this._vp.getNearestBase$()).valueOf());
}if (_type.equals$O("stem")) return this._vp.getRNA$().findStem$I((this._vp.getNearestBase$()).valueOf());
if (_type.equals$O("base")) {
var list=Clazz.new_($I$(1,1));
list.add$O(this._vp.getNearestBase$());
return list;
}if (_type.equals$O("basepair") || _type.equals$O("bpcolor") || _type.equals$O("bp")  ) {
var list=Clazz.new_($I$(1,1));
var i=(this._vp.getNearestBase$()).valueOf();
list.add$O(new Integer(i));
var mb=this._vp.getRNA$().get_listeBases$().get$I(i);
var j=mb.getElementStructure$();
if (mb.getElementStructure$() != -1) {
list.add$O(new Integer(i));
list.add$O(new Integer(j));
}return list;
}if (_type.equals$O("5\'")) return this._vp.getRNA$().findNonPairedBaseGroup$Integer(this._vp.getNearestBase$());
if (_type.equals$O("3\'")) return this._vp.getRNA$().findNonPairedBaseGroup$Integer(this._vp.getNearestBase$());
if (_type.equals$O("bulge")) return this._vp.getRNA$().findNonPairedBaseGroup$Integer(this._vp.getNearestBase$());
if (_type.equals$O("all")) return this._vp.getRNA$().findAll$();
return Clazz.new_($I$(1,1));
}, p$1);

Clazz.newMeth(C$, 'optionLoop', function () {
return p$1.colorBases.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'optionBase', function () {
if (this._type.equals$O("baseChar")) {
this._vp.getVARNAUI$().UISetBaseCharacter$();
return true;
} else {
return p$1.colorBases.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'optionBasePair', function () {
if (this._type.equals$O("basepair")) {
this._vp.getVARNAUI$().UIEditBasePair$();
return true;
} else if (this._type.equals$O("bpcolor")) {
this._vp.getVARNAUI$().UIColorBasePair$();
return true;
} else if (this._type.equals$O("thickness")) {
this._vp.getVARNAUI$().UIThicknessBasePair$();
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'optionView', function () {
if (this._type.equals$O("background")) {
this._vp.getVARNAUI$().UISetBackground$();
} else if (this._type.equals$O("shownc")) {
this._vp.getVARNAUI$().UIToggleShowNCBP$();
} else if (this._type.equals$O("showbackbone")) {
this._vp.getVARNAUI$().UIToggleDrawBackbone$();
} else if (this._type.equals$O("shownp")) {
this._vp.getVARNAUI$().UIToggleShowNonPlanar$();
} else if (this._type.equals$O("spaceBetweenBases")) {
this._vp.getVARNAUI$().UISetSpaceBetweenBases$();
} else if (this._type.equals$O("bpheightincrement")) {
this._vp.getVARNAUI$().UISetBPHeightIncrement$();
} else if (this._type.equals$O("borderSize")) {
this._vp.getVARNAUI$().UISetBorder$();
} else if (this._type.startsWith$S("zoom")) {
if (this._type.equals$O("zoom")) {
this._vp.getVARNAUI$().UICustomZoom$();
} else {
var factor=this._type.substring$I("zoom".length$());
var pc=Integer.parseInt$S(factor);
pc /= 100.0;
this._vp.setZoom$O( new Double(pc));
this._vp.repaint$();
}} else if (this._type.equals$O("rotation")) {
this._vp.getVARNAUI$().UIGlobalRotation$();
} else if (this._type.equals$O("rescale")) {
this._vp.getVARNAUI$().UIGlobalRescale$();
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'optionTitle', function () {
if (this._type.equals$O("titleDisplay")) {
this._vp.getVARNAUI$().UISetTitleFont$();
} else if (this._type.equals$O("setTitle")) {
this._vp.getVARNAUI$().UISetTitle$();
} else if (this._type.equals$O("titleColor")) {
this._vp.getVARNAUI$().UISetTitleColor$();
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'optionColorMap', function () {
if (this._type.equals$O("toggleshowcolormap")) {
this._vp.getVARNAUI$().UIToggleColorMap$();
} else if (this._type.equals$O("colormapcaption")) {
this._vp.getVARNAUI$().UISetColorMapCaption$();
} else if (this._type.equals$O("colormapstyle")) {
this._vp.getVARNAUI$().UISetColorMapStyle$();
} else if (this._type.equals$O("colormaploadvalues")) {
this._vp.getVARNAUI$().UILoadColorMapValues$();
} else if (this._type.equals$O("colormapvalues")) {
this._vp.getVARNAUI$().UISetColorMapValues$();
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'optionRNADisplay', function () {
if (this._type.equals$O("gaspin")) {
this._vp.getVARNAUI$().UIToggleGaspinMode$();
} else if (this._type.equals$O("backbone")) {
this._vp.getVARNAUI$().UISetBackboneColor$();
} else if (this._type.equals$O("bonds")) {
var c=$I$(3,"showDialog$java_awt_Component$S$java_awt_Color",[this._vp, "Choose new bonds color", this._vp.getBackground$()]);
if (c != null ) {
this._vp.setDefaultBPColor$java_awt_Color(c);
this._vp.repaint$();
}} else if (this._type.equals$O("basecolorforBP")) {
if (this._source != null ) {
if (Clazz.instanceOf(this._source, "javax.swing.JCheckBoxMenuItem")) {
var check=this._source;
this._vp.setUseBaseColorsForBPs$Z(check.getState$());
this._vp.repaint$();
}}} else if (this._type.equals$O("bpstyle")) {
this._vp.getVARNAUI$().UISetBPStyle$();
} else if (this._type.equals$O("specialbasecolored")) {
this._vp.getVARNAUI$().UIToggleColorSpecialBases$();
} else if (this._type.equals$O("showwarnings")) {
this._vp.getVARNAUI$().UIToggleShowWarnings$();
} else if (this._type.equals$O("dashbasecolored")) {
this._vp.getVARNAUI$().UIToggleColorGapsBases$();
} else if (this._type.equals$O("numPeriod")) {
this._vp.getVARNAUI$().UISetNumPeriod$();
} else if (this._type.equals$O("eachKind")) {
if (this._vp.getRNA$().get_listeBases$() != null ) {
this._vp.getVARNAUI$().UIBaseTypeColor$();
} else {
this._vp.emitWarning$S("No base");
}} else if (this._type.equals$O("eachCouple")) {
if (this._vp.getRNA$().get_listeBases$() != null  && this._vp.getRNA$().get_listeBases$().size$() != 0 ) {
this._vp.getVARNAUI$().UIBasePairTypeColor$();
} else {
this._vp.emitWarning$S("No base");
}} else if (this._type.equals$O("eachBase")) {
if (this._vp.getRNA$().get_listeBases$() != null  && this._vp.getRNA$().get_listeBases$().size$() != 0 ) {
this._vp.getVARNAUI$().UIBaseAllColor$();
} else {
this._vp.emitWarning$S("No base");
}} else if (this._type.equals$O("specialBasesColor")) {
this._vp.getVARNAUI$().UIPickSpecialBasesColor$();
} else if (this._type.equals$O("dashBasesColor")) {
this._vp.getVARNAUI$().UIPickGapsBasesColor$();
} else return p$1.colorBases.apply(this, []);
return true;
}, p$1);

Clazz.newMeth(C$, 'optionImport', function () {
if (this._type.equals$O("userInput")) {
try {
this._vp.getVARNAUI$().UIManualInput$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.text.ParseException")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
var e2 = e$$;
{
this.errorDialog$Exception(e2);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("file")) {
try {
this._vp.getVARNAUI$().UIFile$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
this.errorDialog$Exception(e1);
} else {
throw e1;
}
}
} else if (this._type.equals$O("print")) {
this._vp.getVARNAUI$().UIPrint$();
} else if (this._type.equals$O("about")) {
this._vp.getVARNAUI$().UIAbout$();
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'optionRedraw', function () {
if (this._type.equals$O("reset")) {
this._vp.getVARNAUI$().UIReset$();
} else if (this._type.equals$O("circular")) {
this._vp.getVARNAUI$().UICircular$();
} else if (this._type.equals$O("radiate")) {
this._vp.getVARNAUI$().UIRadiate$();
} else if (this._type.equals$O("naview")) {
this._vp.getVARNAUI$().UINAView$();
} else if (this._type.equals$O("varnaview")) {
this._vp.getVARNAUI$().UIVARNAView$();
} else if (this._type.equals$O("motifview")) {
this._vp.getVARNAUI$().UIMOTIFView$();
} else if (this._type.equals$O("line")) {
this._vp.getVARNAUI$().UILine$();
} else if (this._type.equals$O("flat")) {
this._vp.getVARNAUI$().UIToggleFlatExteriorLoop$();
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'optionExport', function () {
if (this._type.equals$O("saveas")) {
try {
this._vp.getVARNAUI$().UISaveAs$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("dbn")) {
try {
this._vp.getVARNAUI$().UISaveAsDBN$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("bpseq")) {
try {
this._vp.getVARNAUI$().UISaveAsBPSEQ$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("ct")) {
try {
this._vp.getVARNAUI$().UISaveAsCT$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("eps")) {
try {
this._vp.getVARNAUI$().UIExportEPS$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("tikz")) {
try {
this._vp.getVARNAUI$().UIExportTIKZ$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("xfig")) {
try {
this._vp.getVARNAUI$().UIExportXFIG$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("svg")) {
try {
this._vp.getVARNAUI$().UIExportSVG$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("jpeg")) {
try {
this._vp.getVARNAUI$().UIExportJPEG$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionJPEGEncoding")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else {
throw e$$;
}
}
} else if (this._type.equals$O("png")) {
try {
this._vp.getVARNAUI$().UIExportPNG$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
this.errorDialog$Exception(e1);
} else {
throw e1;
}
}
} else return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'getExtension$java_io_File', function (f) {
var s=f.getName$();
return this.getExtension$S(s);
});

Clazz.newMeth(C$, 'getExtension$S', function (s) {
var ext=null;
var i=s.lastIndexOf$I(".");
if (i > 0 && i < s.length$() - 1 ) {
ext=s.substring$I(i + 1).toLowerCase$();
}return ext;
});

Clazz.newMeth(C$, 'errorDialog$Exception', function (e1) {
if (this._vp.isErrorsOn$()) $I$(6,"showMessageDialog$java_awt_Component$O$S$I",[this._vp, e1.getMessage$(), "VARNA Error", 0]);
});

Clazz.newMeth(C$, 'onStructureRedrawn$', function () {
});

Clazz.newMeth(C$, 'onWarningEmitted$S', function (s) {
if (this._vp.isErrorsOn$()) $I$(6).showMessageDialog$java_awt_Component$O$S$I(this._vp, s, "VARNA Warning", 0);
});

Clazz.newMeth(C$, 'onLoad$S', function (path) {
});

Clazz.newMeth(C$, 'onLoaded$', function () {
});

Clazz.newMeth(C$, 'onUINewStructure$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA', function (v, r) {
});

Clazz.newMeth(C$, 'onZoomLevelChanged$', function () {
});

Clazz.newMeth(C$, 'onTranslationChanged$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
