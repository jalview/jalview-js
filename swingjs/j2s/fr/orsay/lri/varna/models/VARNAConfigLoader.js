(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models"),p$1={},I$=[[0,'java.util.ArrayList','fr.orsay.lri.varna.models.rna.RNA','fr.orsay.lri.varna.models.VARNAConfig','java.awt.Dimension','java.awt.Color',['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],'fr.orsay.lri.varna.exceptions.ExceptionParameterError','fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.VARNAPanel','Boolean','java.net.URL','java.io.InputStreamReader','fr.orsay.lri.varna.factories.RNAFactory','java.io.BufferedReader','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','fr.orsay.lri.varna.models.rna.ModeleColorMap','java.io.File','java.io.FileReader','fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation','fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','fr.orsay.lri.varna.models.rna.ModeleBP','fr.orsay.lri.varna.models.annotations.TextAnnotation']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAConfigLoader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._colorMapMin=4.9E-324;
this._colorMapMax=1.7976931348623157E308;
this._spaceBetweenBases=4.9E-324;
this._VARNAPanelList=Clazz.new_($I$(1,1));
this._defaultRNA=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['_autoHelices','_autoInteriorLoops','_autoTerminalLoops','_drawBackbone','_flatExteriorLoop','_drawNC','_drawBases','_drawTertiary','_drawColorMap','_fillBases','_warning','_error','_modifiable','_comparisonMode','_useNonStandardColor','_useGapsColor','_useInnerBaseColor','_useBaseNameColor','_useBaseNumbersColor','_useBaseOutlineColor'],'D',['_rotation','_colorMapMin','_colorMapMax','_spaceBetweenBases','_zoom','_zoomAmount','_bpIncrement'],'I',['_numRows','_numColumns','_titleSize','_periodResNum'],'S',['_algo','_annotations','_chemProbs','_sseq','_sstruct','_title','_auxBPs','_highlightRegion','_flip','_customBases','_customBPs','_colorMapStyle','_colorMapCaption','_colorMapValues','_orientation','_firstSequence','_secondSequence','_firstStructure','_secondStructure','_URL'],'O',['_titleColor','java.awt.Color','+_backboneColor','+_bondColor','_bpStyle','fr.orsay.lri.varna.models.VARNAConfig.BP_STYLE','_baseOutlineColor','java.awt.Color','+_baseInnerColor','+_baseNumColor','+_baseNameColor','+_gapsColor','+_nonStandardColor','_border','java.awt.Dimension','_backgroundColor','java.awt.Color','_basesStyleList','java.util.ArrayList','_mainSurface','fr.orsay.lri.varna.VARNAPanel','_VARNAPanelList','java.util.ArrayList','_optionProducer','fr.orsay.lri.varna.interfaces.InterfaceParameterLoader','_defaultRNA','fr.orsay.lri.varna.models.rna.RNA']]
,['S',['algoOpt','annotationsOpt','applyBasesStyleOpt','auxBPsOpt','autoHelicesOpt','autoInteriorLoopsOpt','autoTerminalLoopsOpt','backboneColorOpt','backgroundColorOpt','baseInnerColorOpt','baseNameColorOpt','baseNumbersColorOpt','baseOutlineColorOpt','basesStyleOpt','borderOpt','bondColorOpt','bpIncrementOpt','bpStyleOpt','colorMapOpt','colorMapCaptionOpt','colorMapDefOpt','colorMapMinOpt','colorMapMaxOpt','comparisonModeOpt','chemProbOpt','customBasesOpt','customBPsOpt','drawNCOpt','drawBasesOpt','drawTertiaryOpt','drawColorMapOpt','drawBackboneOpt','errorOpt','fillBasesOpt','firstSequenceForComparisonOpt','firstStructureForComparisonOpt','flatExteriorLoopOpt','flipOpt','gapsBaseColorOpt','highlightRegionOpt','nonStandardColorOpt','numColumnsOpt','numRowsOpt','orientationOpt','modifiableOpt','periodNumOpt','rotationOpt','secondSequenceForComparisonOpt','secondStructureForComparisonOpt','sequenceOpt','spaceBetweenBasesOpt','structureOpt','titleOpt','titleColorOpt','titleSizeOpt','URLOpt','warningOpt','zoomOpt','zoomAmountOpt']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_interfaces_InterfaceParameterLoader', function (il) {
;C$.$init$.apply(this);
this._optionProducer=il;
}, 1);

Clazz.newMeth(C$, 'createVARNAPanels$', function () {
this._VARNAPanelList.clear$();
p$1.retrieveParametersValues.apply(this, []);
return this._VARNAPanelList;
});

Clazz.newMeth(C$, 'getNbRows$', function () {
return this._numRows;
});

Clazz.newMeth(C$, 'getNbColumns$', function () {
return this._numColumns;
});

Clazz.newMeth(C$, 'initValues', function () {
this._algo="radiate";
this._auxBPs="";
this._autoHelices=false;
this._autoInteriorLoops=false;
this._autoTerminalLoops=false;
this._annotations="";
this._backgroundColor=$I$(3).DEFAULT_BACKGROUND_COLOR;
this._customBases="";
this._customBPs="";
this._chemProbs="";
this._colorMapStyle="";
this._colorMapValues="";
this._colorMapCaption="";
this._drawColorMap=false;
this._drawBases=true;
this._fillBases=true;
this._drawNC=true;
this._drawTertiary=true;
this._border=Clazz.new_($I$(4,1).c$$I$I,[0, 0]);
this._sseq="";
this._sstruct="";
this._periodResNum=10;
this._rotation=0.0;
this._title="";
this._titleSize=$I$(3).DEFAULT_TITLE_FONT.getSize$();
this._backboneColor=$I$(3).DEFAULT_BACKBONE_COLOR;
this._drawBackbone=true;
this._bondColor=$I$(3).DEFAULT_BOND_COLOR;
this._bpStyle=$I$(3).DEFAULT_BP_STYLE;
this._highlightRegion="";
this._baseOutlineColor=$I$(3).BASE_OUTLINE_COLOR_DEFAULT;
this._baseInnerColor=$I$(3).BASE_INNER_COLOR_DEFAULT;
this._baseNumColor=$I$(3).BASE_NUMBER_COLOR_DEFAULT;
this._baseNameColor=$I$(3).BASE_NAME_COLOR_DEFAULT;
this._titleColor=$I$(3).DEFAULT_TITLE_COLOR;
this._warning=false;
this._error=true;
this._modifiable=true;
this._zoom=1.0;
this._zoomAmount=1.2;
this._comparisonMode=false;
this._firstSequence="";
this._firstStructure="";
this._secondSequence="";
this._secondStructure="";
this._gapsColor=$I$(3).DEFAULT_DASH_BASE_COLOR;
this._useGapsColor=false;
this._nonStandardColor=$I$(3).DEFAULT_SPECIAL_BASE_COLOR;
this._useNonStandardColor=false;
this._useInnerBaseColor=false;
this._useBaseNameColor=false;
this._useBaseNumbersColor=false;
this._useBaseOutlineColor=false;
this._bpIncrement=0.65;
this._URL="";
this._flatExteriorLoop=true;
this._flip="";
this._orientation="";
this._spaceBetweenBases=$I$(3).DEFAULT_SPACE_BETWEEN_BASES;
}, p$1);

Clazz.newMeth(C$, 'getSafeColor$S$java_awt_Color', function (col, def) {
var result;
try {
result=$I$(5).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
try {
result=$I$(5).getColor$S$java_awt_Color(col, def);
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
return def;
} else {
throw e2;
}
}
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'getSafeBPStyle$S$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE', function (opt, def) {
var b=$I$(6).getStyle$S(opt);
if (b != null ) {
return b;
} else {
return def;
}}, p$1);

Clazz.newMeth(C$, 'getParameterInfo$', function () {
var info=Clazz.array(String, -2, [Clazz.array(String, -1, [C$.algoOpt, "String", "Drawing algorithm, choosen from [naview,line,radiate,circular]"]), Clazz.array(String, -1, [C$.annotationsOpt, "string", "A set of textual annotations"]), Clazz.array(String, -1, [C$.applyBasesStyleOpt, "String", "Base style application"]), Clazz.array(String, -1, [C$.auxBPsOpt, "String", "Adds a list of (possibly non-canonical) base-pairs to those already defined by the main secondary structure (Ex: \"(1,10);(2,11);(3,12)\"). Custom BP styles can be specified (Ex: \"(2,11):thickness=4;(3,12):color=#FF0000\")."]), Clazz.array(String, -1, [C$.autoHelicesOpt, "", ""]), Clazz.array(String, -1, [C$.autoInteriorLoopsOpt, "", ""]), Clazz.array(String, -1, [C$.autoTerminalLoopsOpt, "", ""]), Clazz.array(String, -1, [C$.backboneColorOpt, "Color", "Backbone color (Ex: #334455)"]), Clazz.array(String, -1, [C$.backgroundColorOpt, "Color", "Background color (Ex: #334455)"]), Clazz.array(String, -1, [C$.baseInnerColorOpt, "Color", "Default value for inner base color (Ex: #334455)"]), Clazz.array(String, -1, [C$.baseNameColorOpt, "Color", "Residues font color (Ex: #334455)"]), Clazz.array(String, -1, [C$.baseNumbersColorOpt, "Color", "Base numbers font color (Ex: #334455)"]), Clazz.array(String, -1, [C$.baseOutlineColorOpt, "Color", "Base outline color (Ex: #334455)"]), Clazz.array(String, -1, [C$.basesStyleOpt, "String", "Base style declaration"]), Clazz.array(String, -1, [C$.borderOpt, "String", "Border width and height in pixels (Ex: \"20x40\")"]), Clazz.array(String, -1, [C$.bondColorOpt, "Color", "Base pair color (Ex: #334455)"]), Clazz.array(String, -1, [C$.bpIncrementOpt, "float", "Distance between nested base-pairs (i.e. arcs) in linear representation"]), Clazz.array(String, -1, [C$.bpStyleOpt, "String", "Look and feel for base pairs drawings, choosen from [lw,lwalt,none,simple,rnaviz]"]), Clazz.array(String, -1, [C$.chemProbOpt, "", ""]), Clazz.array(String, -1, [C$.colorMapOpt, "String", "Associates a list of numerical values (eg \'0.2,0.4,0.6,0.8\') with the RNA bases with respect to their natural order, and modifies the color used to fill these bases according to current color map style."]), Clazz.array(String, -1, [C$.colorMapCaptionOpt, "String", "Sets current color map caption."]), Clazz.array(String, -1, [C$.colorMapDefOpt, "String", "Selects a specific color map style. It can be either one of the predefined styles (eg \'red\', \'green\', \'blue\', \'bw\', \'heat\', \'energy\') or a new one (eg \'0:#FFFF00;1:#ffFFFF;6:#FF0000\')."]), Clazz.array(String, -1, [C$.colorMapMinOpt, "", ""]), Clazz.array(String, -1, [C$.colorMapMaxOpt, "", ""]), Clazz.array(String, -1, [C$.comparisonModeOpt, "boolean", "Activates comparison mode"]), Clazz.array(String, -1, [C$.customBasesOpt, "", ""]), Clazz.array(String, -1, [C$.customBPsOpt, "", ""]), Clazz.array(String, -1, [C$.drawBackboneOpt, "boolean", "True if the backbone must be drawn, false otherwise"]), Clazz.array(String, -1, [C$.drawColorMapOpt, "", ""]), Clazz.array(String, -1, [C$.drawNCOpt, "boolean", "Toggles on/off display of non-canonical base-pairs"]), Clazz.array(String, -1, [C$.drawBasesOpt, "boolean", "Shows/hide the outline of bases"]), Clazz.array(String, -1, [C$.drawTertiaryOpt, "boolean", "Toggles on/off display of tertiary interaction, ie pseudoknots"]), Clazz.array(String, -1, [C$.errorOpt, "boolean", "Show errors"]), Clazz.array(String, -1, [C$.fillBasesOpt, "boolean", "Fills or leaves empty the inner portions of bases"]), Clazz.array(String, -1, [C$.firstSequenceForComparisonOpt, "String", "In comparison mode, sequence of first RNA"]), Clazz.array(String, -1, [C$.firstStructureForComparisonOpt, "String", "In comparison mode, structure of first RNA"]), Clazz.array(String, -1, [C$.flatExteriorLoopOpt, "boolean", "Toggles on/off (true/false) drawing exterior bases on a straight line"]), Clazz.array(String, -1, [C$.flipOpt, "String", "Draws a set of exterior helices, identified by the argument string, in clockwise order (default drawing is counter-clockwise). The argument is a semicolon-separated list of helices, each identified by a base or a base-pair (eg. \"2;20-34\")."]), Clazz.array(String, -1, [C$.gapsBaseColorOpt, "Color", "Define and use custom color for gaps bases in comparison mode"]), Clazz.array(String, -1, [C$.highlightRegionOpt, "string", "Highlight a set of contiguous regions"]), Clazz.array(String, -1, [C$.modifiableOpt, "boolean", "Allows/prohibits modifications"]), Clazz.array(String, -1, [C$.nonStandardColorOpt, "Color", "Define and use custom color for non-standard bases in comparison mode"]), Clazz.array(String, -1, [C$.numColumnsOpt, "int", "Sets number of columns"]), Clazz.array(String, -1, [C$.numRowsOpt, "int", "Sets number of rows"]), Clazz.array(String, -1, [C$.orientationOpt, "float", "Sets the general orientation of an RNA, i.e. the deviation of the longest axis (defined by the most distant couple of bases) from the horizontal axis."]), Clazz.array(String, -1, [C$.periodNumOpt, "int", "Periodicity of base-numbering"]), Clazz.array(String, -1, [C$.secondSequenceForComparisonOpt, "String", "In comparison mode, sequence of second RNA"]), Clazz.array(String, -1, [C$.secondStructureForComparisonOpt, "String", "In comparison mode, structure of second RNA"]), Clazz.array(String, -1, [C$.sequenceOpt, "String", "Raw RNA sequence"]), Clazz.array(String, -1, [C$.structureOpt, "String", "RNA structure given in dot bracket notation (DBN)"]), Clazz.array(String, -1, [C$.rotationOpt, "float", "Rotates RNA after initial drawing (Ex: \'20\' for a 20 degree counter-clockwise rotation)"]), Clazz.array(String, -1, [C$.titleOpt, "String", "RNA drawing title"]), Clazz.array(String, -1, [C$.titleColorOpt, "Color", "Title color (Ex: #334455)"]), Clazz.array(String, -1, [C$.titleSizeOpt, "int", "Title font size"]), Clazz.array(String, -1, [C$.spaceBetweenBasesOpt, "float", "Sets the space between consecutive bases"]), Clazz.array(String, -1, [C$.warningOpt, "boolean", "Show warnings"]), Clazz.array(String, -1, [C$.zoomOpt, "int", "Zoom coefficient"]), Clazz.array(String, -1, [C$.zoomAmountOpt, "int", "Zoom increment on user interaction"])]);
return info;
}, 1);

Clazz.newMeth(C$, 'retrieveParametersValues', function () {
this._numRows=1;
this._numColumns=1;
this._basesStyleList=Clazz.new_($I$(1,1));
try {
this._numRows=Integer.parseInt$S(this._optionProducer.getParameterValue$S$S(C$.numRowsOpt, "" + this._numRows));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.numRowsOpt, "" + this._numRows) + "' is not a integer value for the number of rows !" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._numColumns=Integer.parseInt$S(this._optionProducer.getParameterValue$S$S(C$.numColumnsOpt, "" + this._numColumns));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.numColumnsOpt, "" + this._numColumns) + "' is not a integer value for the number of columns !" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
var tmp=null;
for (var i=0; i < 50; i++) {
var opt=C$.basesStyleOpt + i;
tmp=this._optionProducer.getParameterValue$S$S(opt, null);
if (tmp != null ) {
var msb=Clazz.new_($I$(8,1));
try {
msb.assignParameters$S(tmp);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError")){
$I$(9).emitWarningStatic$Exception$java_awt_Component(e, null);
} else {
throw e;
}
}
this._basesStyleList.add$O(msb);
} else {
this._basesStyleList.add$O(null);
}}
var x;
var n;
p$1.initValues.apply(this, []);
for (var i=0; i < this._numColumns; i++) {
for (var j=0; j < this._numRows; j++) {
try {
x=1 + j + i * this._numRows ;
n="" + x;
if ((this._numColumns == 1) && (this._numRows == 1) ) {
n="";
}this._useGapsColor=false;
this._useNonStandardColor=false;
tmp=this._optionProducer.getParameterValue$S$S(C$.baseNameColorOpt + n, "");
if (!tmp.equals$O("")) {
this._useBaseNameColor=true;
this._baseNameColor=C$.getSafeColor$S$java_awt_Color(tmp, this._baseNameColor);
}tmp=this._optionProducer.getParameterValue$S$S(C$.baseNumbersColorOpt + n, "");
if (!tmp.equals$O("")) {
this._useBaseNumbersColor=true;
this._baseNumColor=C$.getSafeColor$S$java_awt_Color(tmp, this._baseNumColor);
}tmp=this._optionProducer.getParameterValue$S$S(C$.baseOutlineColorOpt + n, "");
if (!tmp.equals$O("")) {
this._useBaseOutlineColor=true;
this._baseOutlineColor=C$.getSafeColor$S$java_awt_Color(tmp, this._baseOutlineColor);
}tmp=this._optionProducer.getParameterValue$S$S(C$.baseInnerColorOpt + n, "");
if (!tmp.equals$O("")) {
this._useInnerBaseColor=true;
this._baseInnerColor=C$.getSafeColor$S$java_awt_Color(tmp, this._baseInnerColor);
}tmp=this._optionProducer.getParameterValue$S$S(C$.nonStandardColorOpt + n, "");
if (!tmp.equals$O("")) {
this._nonStandardColor=C$.getSafeColor$S$java_awt_Color(tmp, this._nonStandardColor);
this._useNonStandardColor=true;
}tmp=this._optionProducer.getParameterValue$S$S(C$.gapsBaseColorOpt + n, this._gapsColor.toString());
if (!tmp.equals$O("")) {
this._gapsColor=C$.getSafeColor$S$java_awt_Color(tmp, this._gapsColor);
this._useGapsColor=true;
}try {
this._rotation=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.rotationOpt + n, Double.toString$D(this._rotation)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.rotationOpt + n, "" + new Double(this._rotation).toString()) + "' is not a valid float value for rotation!" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._colorMapMin=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.colorMapMinOpt + n, Double.toString$D(this._colorMapMin)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.colorMapMinOpt + n, "" + new Double(this._colorMapMin).toString()) + "' is not a valid double value for min color map values range!" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._colorMapMax=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.colorMapMaxOpt + n, Double.toString$D(this._colorMapMax)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.colorMapMaxOpt + n, "" + new Double(this._colorMapMax).toString()) + "' is not a valid double value for max color map values range!" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._bpIncrement=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.bpIncrementOpt + n, Double.toString$D(this._bpIncrement)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
try {
this._periodResNum=Integer.parseInt$S(this._optionProducer.getParameterValue$S$S(C$.periodNumOpt + n, "" + this._periodResNum));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.periodNumOpt + n, "" + this._periodResNum) + "' is not a valid integer value for the period of residue numbers!" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._titleSize=Integer.parseInt$S(this._optionProducer.getParameterValue$S$S(C$.titleSizeOpt + n, "" + this._titleSize));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.titleSizeOpt + n, "" + this._titleSize) + "' is not a valid integer value for the number of rows !" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._zoom=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.zoomOpt + n, "" + new Double(this._zoom).toString()));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.zoomOpt + n, "" + new Double(this._zoom).toString()) + "' is not a valid integer value for the zoom !" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._zoomAmount=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.zoomAmountOpt + n, "" + new Double(this._zoomAmount).toString()));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.zoomAmountOpt + n, "" + new Double(this._zoomAmount).toString()) + "' is not a valid integer value for the zoom amount!" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
try {
this._spaceBetweenBases=Double.parseDouble$S(this._optionProducer.getParameterValue$S$S(C$.spaceBetweenBasesOpt + n, "" + new Double(this._spaceBetweenBases).toString()));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "'" + this._optionProducer.getParameterValue$S$S(C$.spaceBetweenBasesOpt + n, "" + new Double(this._spaceBetweenBases).toString()) + "' is not a valid integer value for the base spacing!" ],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
this._drawBases=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.drawBasesOpt + n, "" + this._drawBases)]);
this._fillBases=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.fillBasesOpt + n, "" + this._fillBases)]);
this._autoHelices=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.autoHelicesOpt + n, "" + this._autoHelices)]);
this._drawColorMap=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.drawColorMapOpt + n, "" + this._drawColorMap)]);
this._drawBackbone=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.drawBackboneOpt + n, "" + this._drawBackbone)]);
this._colorMapValues=this._optionProducer.getParameterValue$S$S(C$.colorMapOpt + n, this._colorMapValues);
this._autoTerminalLoops=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.autoTerminalLoopsOpt + n, "" + this._autoTerminalLoops)]);
this._autoInteriorLoops=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.autoInteriorLoopsOpt + n, "" + this._autoInteriorLoops)]);
this._drawNC=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.drawNCOpt + n, "" + this._drawNC)]);
this._flatExteriorLoop=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.flatExteriorLoopOpt + n, "" + this._flatExteriorLoop)]);
this._drawTertiary=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.drawTertiaryOpt + n, "" + this._drawTertiary)]);
this._warning=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.warningOpt + n, "false")]);
this._error=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.errorOpt + n, "true")]);
this._border=p$1.parseDimension$S.apply(this, [this._optionProducer.getParameterValue$S$S(C$.borderOpt + n, "0X0")]);
this._comparisonMode=$I$(10,"parseBoolean$S",[this._optionProducer.getParameterValue$S$S(C$.comparisonModeOpt + n, "false")]);
this._firstSequence=this._optionProducer.getParameterValue$S$S(C$.firstSequenceForComparisonOpt + n, this._firstSequence);
this._firstStructure=this._optionProducer.getParameterValue$S$S(C$.firstStructureForComparisonOpt + n, this._firstStructure);
this._secondSequence=this._optionProducer.getParameterValue$S$S(C$.secondSequenceForComparisonOpt + n, this._secondSequence);
this._secondStructure=this._optionProducer.getParameterValue$S$S(C$.secondStructureForComparisonOpt + n, this._secondStructure);
this._annotations=this._optionProducer.getParameterValue$S$S(C$.annotationsOpt + n, this._annotations);
this._URL=this._optionProducer.getParameterValue$S$S(C$.URLOpt + n, this._URL);
this._algo=this._optionProducer.getParameterValue$S$S(C$.algoOpt + n, this._algo);
this._customBases=this._optionProducer.getParameterValue$S$S(C$.customBasesOpt + n, this._customBases);
this._auxBPs=this._optionProducer.getParameterValue$S$S(C$.auxBPsOpt + n, this._auxBPs);
this._highlightRegion=this._optionProducer.getParameterValue$S$S(C$.highlightRegionOpt + n, this._highlightRegion);
this._chemProbs=this._optionProducer.getParameterValue$S$S(C$.chemProbOpt + n, this._chemProbs);
this._customBPs=this._optionProducer.getParameterValue$S$S(C$.customBPsOpt + n, this._customBPs);
this._colorMapStyle=this._optionProducer.getParameterValue$S$S(C$.colorMapDefOpt + n, this._colorMapStyle);
this._colorMapCaption=this._optionProducer.getParameterValue$S$S(C$.colorMapCaptionOpt + n, this._colorMapCaption);
this._backboneColor=C$.getSafeColor$S$java_awt_Color(this._optionProducer.getParameterValue$S$S(C$.backboneColorOpt + n, this._backboneColor.toString()), this._backboneColor);
this._backgroundColor=C$.getSafeColor$S$java_awt_Color(this._optionProducer.getParameterValue$S$S(C$.backgroundColorOpt + n, this._backgroundColor.toString()), this._backgroundColor);
this._bondColor=C$.getSafeColor$S$java_awt_Color(this._optionProducer.getParameterValue$S$S(C$.bondColorOpt + n, this._bondColor.toString()), this._bondColor);
this._bpStyle=p$1.getSafeBPStyle$S$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE.apply(this, [this._optionProducer.getParameterValue$S$S(C$.bpStyleOpt + n, ""), this._bpStyle]);
this._flip=this._optionProducer.getParameterValue$S$S(C$.flipOpt + n, this._flip);
this._orientation=this._optionProducer.getParameterValue$S$S(C$.orientationOpt + n, this._orientation);
this._titleColor=C$.getSafeColor$S$java_awt_Color(this._optionProducer.getParameterValue$S$S(C$.titleColorOpt + n, this._titleColor.toString()), this._titleColor);
if (!this._URL.equals$O("")) {
this._sstruct="";
this._sseq="";
this._title="";
}this._title=this._optionProducer.getParameterValue$S$S(C$.titleOpt + n, this._title);
if (this._comparisonMode && this._firstSequence != null   && this._firstStructure != null   && this._secondSequence != null   && this._secondStructure != null  ) {
} else {
this._sseq=this._optionProducer.getParameterValue$S$S(C$.sequenceOpt + n, this._sseq);
this._sstruct=this._optionProducer.getParameterValue$S$S(C$.structureOpt + n, this._sstruct);
if (!this._sseq.equals$O("") && !this._sstruct.equals$O("") ) {
this._URL="";
}this._comparisonMode=false;
}p$1.applyValues$S.apply(this, [n]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionParameterError")){
var e = e$$;
{
$I$(9).errorDialogStatic$Exception$java_awt_Component(e, this._mainSurface);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
var e = e$$;
{
$I$(9).errorDialogStatic$Exception$java_awt_Component(e, this._mainSurface);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
$I$(9).errorDialogStatic$Exception$java_awt_Component(e, this._mainSurface);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
$I$(9).errorDialogStatic$Exception$java_awt_Component(e, this._mainSurface);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var e = e$$;
{
$I$(9).errorDialogStatic$Exception$java_awt_Component(e, this._mainSurface);
}
} else {
throw e$$;
}
}
}
}
}, p$1);

Clazz.newMeth(C$, 'setRNA$fr_orsay_lri_varna_models_rna_RNA', function (r) {
this._defaultRNA=r;
});

Clazz.newMeth(C$, 'applyValues$S', function (n) {
var applyOptions=true;
var algoCode;
if (this._algo.equals$O("circular")) algoCode=1;
 else if (this._algo.equals$O("naview")) algoCode=3;
 else if (this._algo.equals$O("line")) algoCode=4;
 else if (this._algo.equals$O("radiate")) algoCode=2;
 else if (this._algo.equals$O("varnaview")) algoCode=5;
 else if (this._algo.equals$O("motifview")) algoCode=6;
 else algoCode=2;
if (this._comparisonMode) {
this._mainSurface=Clazz.new_($I$(9,1).c$$S$S$S$S$I$S,[this._firstSequence, this._firstStructure, this._secondSequence, this._secondStructure, algoCode, ""]);
} else {
this._mainSurface=Clazz.new_($I$(9,1));
}this._VARNAPanelList.add$O(this._mainSurface);
this._mainSurface.setSpaceBetweenBases$D(this._spaceBetweenBases);
this._mainSurface.setTitle$S(this._title);
if (!this._URL.equals$O("")) {
var url=null;
try {
this._mainSurface.setSpaceBetweenBases$D(this._spaceBetweenBases);
url=Clazz.new_($I$(11,1).c$$S,[this._URL]);
var connexion=url.openConnection$();
connexion.setUseCaches$Z(false);
var r=connexion.getInputStream$();
var inr=Clazz.new_($I$(12,1).c$$java_io_InputStream,[r]);
if (this._URL.toLowerCase$().endsWith$S($I$(9).VARNA_SESSION_EXTENSION)) {
var f;
f=$I$(9).importSession$java_io_InputStream$S(r, this._URL);
this._mainSurface.setConfig$fr_orsay_lri_varna_models_VARNAConfig(f.config);
this._mainSurface.showRNA$fr_orsay_lri_varna_models_rna_RNA(f.rna);
applyOptions=false;
} else {
var rnas=$I$(13,"loadSecStr$java_io_BufferedReader$fr_orsay_lri_varna_factories_RNAFactory_RNAFileType",[Clazz.new_($I$(14,1).c$$java_io_Reader,[inr]), $I$(13).guessFileTypeFromExtension$S(this._URL)]);
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(15,1).c$$S,["No RNA in file '" + this._URL + "'." ]);
}var rna=rnas.iterator$().next$();
rna.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(algoCode, this._mainSurface.getConfig$());
this._mainSurface.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(rna, algoCode);
}if (!this._title.isEmpty$()) {
this._mainSurface.setTitle$S(this._title);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
if (url != null ) e.setPath$S(url.getPath$());
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionDrawingAlgorithm")){
var e = e$$;
{
this._mainSurface.emitWarning$S(e.getMessage$());
}
} else {
throw e$$;
}
}
} else {
if (!this._comparisonMode) {
if (!this._sstruct.equals$O("")) {
this._mainSurface.drawRNA$S$S$I(this._sseq, this._sstruct, algoCode);
} else {
try {
System.err.println$S("Printing default RNA " + this._defaultRNA);
this._defaultRNA.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(algoCode, this._mainSurface.getConfig$());
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionDrawingAlgorithm")){
e.printStackTrace$();
} else {
throw e;
}
}
this._mainSurface.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this._defaultRNA);
}}}if (applyOptions) {
if (this._useInnerBaseColor) {
this._mainSurface.setBaseInnerColor$java_awt_Color(this._baseInnerColor);
}if (this._useBaseOutlineColor) {
this._mainSurface.setBaseOutlineColor$java_awt_Color(this._baseOutlineColor);
}if (this._useBaseNameColor) {
this._mainSurface.setBaseNameColor$java_awt_Color(this._baseNameColor);
}if (this._useBaseNumbersColor) {
this._mainSurface.setBaseNumbersColor$java_awt_Color(this._baseNumColor);
}this._mainSurface.setBackground$java_awt_Color(this._backgroundColor);
this._mainSurface.setNumPeriod$I(this._periodResNum);
this._mainSurface.setBackboneColor$java_awt_Color(this._backboneColor);
this._mainSurface.setDefaultBPColor$java_awt_Color(this._bondColor);
this._mainSurface.setBPHeightIncrement$D(this._bpIncrement);
this._mainSurface.setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE(this._bpStyle);
this._mainSurface.setDrawBackbone$Z(this._drawBackbone);
this._mainSurface.setTitleFontColor$java_awt_Color(this._titleColor);
this._mainSurface.setTitleFontSize$F(this._titleSize);
this._mainSurface.getPopupMenu$().get_itemShowWarnings$().setState$Z(this._warning);
this._mainSurface.setErrorsOn$Z(this._error);
this._mainSurface.setFlatExteriorLoop$Z(this._flatExteriorLoop);
this._mainSurface.setZoom$O(new Double(this._zoom));
this._mainSurface.setZoomIncrement$D(this._zoomAmount);
this._mainSurface.setBorderSize$java_awt_Dimension(this._border);
if (this._useGapsColor) {
this._mainSurface.setGapsBasesColor$java_awt_Color(this._gapsColor);
this._mainSurface.setColorGapsBases$Z(true);
}if (this._useNonStandardColor) {
this._mainSurface.setNonStandardBasesColor$java_awt_Color(this._nonStandardColor);
this._mainSurface.setColorNonStandardBases$Z(true);
}this._mainSurface.setShowNonPlanarBP$Z(this._drawTertiary);
this._mainSurface.setShowNonCanonicalBP$Z(this._drawNC);
p$1.applyBasesStyle$S.apply(this, [n]);
if (!this._customBases.equals$O("")) p$1.applyBasesCustomStyles$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
if (!this._highlightRegion.equals$O("")) p$1.applyHighlightRegion$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
if (!this._auxBPs.equals$O("")) p$1.applyAuxBPs$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
if (!this._chemProbs.equals$O("")) p$1.applyChemProbs$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
if (!this._customBPs.equals$O("")) p$1.applyBPsCustomStyles$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
this._mainSurface.setDrawOutlineBases$Z(this._drawBases);
this._mainSurface.setFillBases$Z(this._fillBases);
this._mainSurface.drawRNA$();
if (!this._annotations.equals$O("")) p$1.applyAnnotations$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
if (this._autoHelices) this._mainSurface.getVARNAUI$().UIAutoAnnotateHelices$();
if (this._autoTerminalLoops) this._mainSurface.getVARNAUI$().UIAutoAnnotateTerminalLoops$();
if (this._autoInteriorLoops) this._mainSurface.getVARNAUI$().UIAutoAnnotateInteriorLoops$();
if (!this._orientation.equals$O("")) {
try {
var d=360 * this._mainSurface.getOrientation$() / (6.283185307179586);
this._rotation=Double.parseDouble$S(this._orientation) - d;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}this._mainSurface.globalRotation$Double(new Double(this._rotation));
this._mainSurface.setModifiable$Z(this._modifiable);
this._mainSurface.setColorMapCaption$S(this._colorMapCaption);
p$1.applyColorMapStyle$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
p$1.applyFlips$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
p$1.applyColorMapValues$fr_orsay_lri_varna_VARNAPanel.apply(this, [this._mainSurface]);
}}, p$1);

Clazz.newMeth(C$, 'applyBasesStyle$S', function (n) {
var tmp=null;
for (var numStyle=0; numStyle < this._basesStyleList.size$(); numStyle++) {
if (this._basesStyleList.get$I(numStyle) != null ) {
tmp=this._optionProducer.getParameterValue$S$S(C$.applyBasesStyleOpt + (numStyle) + "on" + n , null);
var indicesList=Clazz.new_($I$(1,1));
if (tmp != null ) {
var basesList=tmp.split$S(",");
for (var k=0; k < basesList.length; k++) {
var cand=basesList[k].trim$();
try {
var args=cand.split$S("-");
if (args.length == 1) {
var baseNum=Integer.parseInt$S(cand);
var index=this._mainSurface.getRNA$().getIndexFromBaseNumber$I(baseNum);
if (index != -1) {
indicesList.add$O(new Integer(index));
}} else if (args.length == 2) {
var baseNumFrom=Integer.parseInt$S(args[0].trim$());
var indexFrom=this._mainSurface.getRNA$().getIndexFromBaseNumber$I(baseNumFrom);
var baseNumTo=Integer.parseInt$S(args[1].trim$());
var indexTo=this._mainSurface.getRNA$().getIndexFromBaseNumber$I(baseNumTo);
if ((indexFrom != -1) && (indexTo != -1) ) {
for (var l=indexFrom; l <= indexTo; l++) indicesList.add$O(new Integer(l));

}}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_([e.getMessage$(), "Bad Base Index: " + basesList[k]],$I$(7,1).c$$S$S);
} else {
throw e;
}
}
}
for (var k=0; k < indicesList.size$(); k++) {
var index=(indicesList.get$I(k)).valueOf();
if ((index >= 0) && (index < this._mainSurface.getRNA$().get_listeBases$().size$()) ) {
this._mainSurface.getRNA$().get_listeBases$().get$I(index).setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(this._basesStyleList.get$I(numStyle));
}}
}}}
}, p$1);

Clazz.newMeth(C$, 'applyColorMapStyle$fr_orsay_lri_varna_VARNAPanel', function (vp) {
if (this._colorMapStyle.length$() != 0) {
vp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap($I$(16).parseColorMap$S(this._colorMapStyle));
}}, p$1);

Clazz.newMeth(C$, 'applyColorMapValues$fr_orsay_lri_varna_VARNAPanel', function (vp) {
if (!this._colorMapValues.equals$O("")) {
var f=Clazz.new_($I$(17,1).c$$S,[this._colorMapValues]);
if (f.exists$() && !f.isDirectory$() ) {
try {
vp.readValues$java_io_Reader(Clazz.new_($I$(18,1).c$$java_io_File,[f]));
vp.drawColorMap$Z(true);
System.err.println$S("Loaded " + this._colorMapValues);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
} else {
var values=this._colorMapValues.split$S("[;,]");
var vals=Clazz.new_($I$(1,1));
for (var i=0; i < values.length; i++) {
try {
vals.add$O(new Double(Double.parseDouble$S(values[i])));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
var result=Clazz.array(Double, [vals.size$()]);
vals.toArray$OA(result);
vp.setColorMapValues$DoubleA(result);
}var cm=vp.getColorMap$();
if (this._colorMapMin != 4.9E-324 ) {
cm.setMinValue$D(this._colorMapMin);
}if (this._colorMapMax != 1.7976931348623157E308 ) {
cm.setMaxValue$D(this._colorMapMax);
}this._drawColorMap=true;
}}, p$1);

Clazz.newMeth(C$, 'applyBasesCustomStyles$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var baseStyles=this._customBases.split$S(";");
for (var i=0; i < baseStyles.length; i++) {
var thisStyle=baseStyles[i];
var data=thisStyle.split$S(":");
try {
if (data.length == 2) {
var baseNum=Integer.parseInt$S(data[0]);
var index=this._mainSurface.getRNA$().getIndexFromBaseNumber$I(baseNum);
if (index != -1) {
var style=data[1];
var msb=vp.getRNA$().get_listeBases$().get$I(index).getStyleBase$().clone$();
msb.assignParameters$S(style);
vp.getRNA$().get_listeBases$().get$I(index).setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(msb);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("ApplyBasesCustomStyle: " + e.toString());
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'applyHighlightRegion$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var regions=this._highlightRegion.split$S(";");
for (var i=0; i < regions.length; i++) {
var region=regions[i];
try {
var nt=$I$(19).parseHighlightRegionAnnotation$S$fr_orsay_lri_varna_VARNAPanel(region, vp);
if (nt != null ) {
vp.addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(nt);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error in applyHighlightRegion: " + e.toString());
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'parseDimension$S', function (s) {
var d=Clazz.new_($I$(4,1).c$$I$I,[0, 0]);
try {
s=s.toLowerCase$();
var i=s.indexOf$I("x");
var w=s.substring$I$I(0, i);
var h=s.substring$I(i + 1);
d.width=Integer.parseInt$S(w);
d.height=Integer.parseInt$S(h);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return d;
}, p$1);

Clazz.newMeth(C$, 'applyBPsCustomStyles$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var baseStyles=this._customBPs.split$S(";");
for (var i=0; i < baseStyles.length; i++) {
var thisStyle=baseStyles[i];
var data=thisStyle.split$S(":");
try {
if (data.length == 2) {
var indices=data[0];
var style=data[1];
var data2=indices.split$S(",");
if (data2.length == 2) {
var s1=data2[0];
var s2=data2[1];
if (s1.startsWith$S("(") && s2.endsWith$S(")") ) {
var a=Integer.parseInt$S(s1.substring$I(1));
var b=Integer.parseInt$S(s2.substring$I$I(0, s2.length$() - 1));
var msbp=vp.getRNA$().getBPStyle$I$I(a, b);
if (msbp != null ) {
msbp.assignParameters$S(style);
}}}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("ApplyBPsCustomStyle: " + e.toString());
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'applyChemProbs$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var chemProbs=this._chemProbs.split$S(";");
for (var i=0; i < chemProbs.length; i++) {
var thisAnn=chemProbs[i];
var data=thisAnn.split$S(":");
try {
if (data.length == 2) {
var indices=data[0];
var style=data[1];
var data2=indices.split$S("-");
if (data2.length == 2) {
var a=Integer.parseInt$S(data2[0]);
var b=Integer.parseInt$S(data2[1]);
var c=vp.getRNA$().getIndexFromBaseNumber$I(a);
var d=vp.getRNA$().getIndexFromBaseNumber$I(b);
var mbl=vp.getRNA$().get_listeBases$();
var cpa=Clazz.new_([mbl.get$I(c), mbl.get$I(d), style],$I$(20,1).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$S);
vp.getRNA$().addChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(cpa);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("ChempProbs: " + e.toString());
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'applyAuxBPs$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var baseStyles=this._auxBPs.split$S(";");
for (var i=0; i < baseStyles.length; i++) {
var thisStyle=baseStyles[i];
var data=thisStyle.split$S(":");
try {
if (data.length >= 1) {
var indices=data[0];
var data2=indices.split$S(",");
if (data2.length == 2) {
var s1=data2[0];
var s2=data2[1];
if (s1.startsWith$S("(") && s2.endsWith$S(")") ) {
var a=Integer.parseInt$S(s1.substring$I(1));
var b=Integer.parseInt$S(s2.substring$I$I(0, s2.length$() - 1));
var c=vp.getRNA$().getIndexFromBaseNumber$I(a);
var d=vp.getRNA$().getIndexFromBaseNumber$I(b);
var msbp=Clazz.new_([vp.getRNA$().get_listeBases$().get$I(c), vp.getRNA$().get_listeBases$().get$I(d)],$I$(21,1).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase);
if (data.length >= 2) {
var style=data[1];
msbp.assignParameters$S(style);
}vp.getRNA$().addBPToStructureUsingNumbers$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(a, b, msbp);
}}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError")){
var e1 = e$$;
{
System.err.println$S("AuxApplyBPs: " + e1.toString());
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionParameterError")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'applyFlips$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var flips=this._flip.split$S(";");
for (var s, $s = 0, $$s = flips; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (!s.isEmpty$()) {
try {
var data=s.split$S("-");
var number=-1;
if (data.length == 1) {
number=Integer.parseInt$S(data[0]);
} else if (data.length == 2) {
number=Integer.parseInt$S(data[1]);
}if (number != -1) {
var i=vp.getRNA$().getIndexFromBaseNumber$I(number);
var h=vp.getRNA$().getExteriorHelix$I(i);
vp.getRNA$().flipHelix$java_awt_Point(h);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Flip Helices: " + e.toString());
} else {
throw e;
}
}
}}
}, p$1);

Clazz.newMeth(C$, 'applyAnnotations$fr_orsay_lri_varna_VARNAPanel', function (vp) {
var annotations=this._annotations.split$S(";");
for (var i=0; i < annotations.length; i++) {
var thisAnn=annotations[i];
var ann=$I$(22).parse$S$fr_orsay_lri_varna_VARNAPanel(thisAnn, vp);
vp.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(ann);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.algoOpt="algorithm";
C$.annotationsOpt="annotations";
C$.applyBasesStyleOpt="applyBasesStyle";
C$.auxBPsOpt="auxBPs";
C$.autoHelicesOpt="autoHelices";
C$.autoInteriorLoopsOpt="autoInteriorLoops";
C$.autoTerminalLoopsOpt="autoTerminalLoops";
C$.backboneColorOpt="backbone";
C$.backgroundColorOpt="background";
C$.baseInnerColorOpt="baseInner";
C$.baseNameColorOpt="baseName";
C$.baseNumbersColorOpt="baseNum";
C$.baseOutlineColorOpt="baseOutline";
C$.basesStyleOpt="basesStyle";
C$.borderOpt="border";
C$.bondColorOpt="bp";
C$.bpIncrementOpt="bpIncrement";
C$.bpStyleOpt="bpStyle";
C$.colorMapOpt="colorMap";
C$.colorMapCaptionOpt="colorMapCaption";
C$.colorMapDefOpt="colorMapStyle";
C$.colorMapMinOpt="colorMapMin";
C$.colorMapMaxOpt="colorMapMax";
C$.comparisonModeOpt="comparisonMode";
C$.chemProbOpt="chemProb";
C$.customBasesOpt="customBases";
C$.customBPsOpt="customBPs";
C$.drawNCOpt="drawNC";
C$.drawBasesOpt="drawBases";
C$.drawTertiaryOpt="drawTertiary";
C$.drawColorMapOpt="drawColorMap";
C$.drawBackboneOpt="drawBackbone";
C$.errorOpt="error";
C$.fillBasesOpt="fillBases";
C$.firstSequenceForComparisonOpt="firstSequence";
C$.firstStructureForComparisonOpt="firstStructure";
C$.flatExteriorLoopOpt="flat";
C$.flipOpt="flip";
C$.gapsBaseColorOpt="gapsColor";
C$.highlightRegionOpt="highlightRegion";
C$.nonStandardColorOpt="nsBasesColor";
C$.numColumnsOpt="rows";
C$.numRowsOpt="columns";
C$.orientationOpt="orientation";
C$.modifiableOpt="modifiable";
C$.periodNumOpt="periodNum";
C$.rotationOpt="rotation";
C$.secondSequenceForComparisonOpt="secondSequence";
C$.secondStructureForComparisonOpt="secondStructure";
C$.sequenceOpt="sequenceDBN";
C$.spaceBetweenBasesOpt="spaceBetweenBases";
C$.structureOpt="structureDBN";
C$.titleOpt="title";
C$.titleColorOpt="titleColor";
C$.titleSizeOpt="titleSize";
C$.URLOpt="url";
C$.warningOpt="warning";
C$.zoomOpt="zoom";
C$.zoomAmountOpt="zoomAmount";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
