(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.urls.desktop.DesktopUrlProviderFactory','jalview.urls.UrlLinkTableModel','java.util.ArrayList',['jalview.gui.Preferences','.OptionsParam'],'jalview.util.MessageManager','javax.swing.JInternalFrame','jalview.util.Platform','jalview.gui.Desktop','java.awt.Dimension','java.awt.GraphicsEnvironment',['jalview.analysis.AnnotationSorter','.SequenceAnnotationOrder'],'jalview.schemes.ColourSchemes','java.awt.Color','jalview.renderer.OverviewResColourFinder',['jalview.gui.StructureViewer','.ViewerType'],'jalview.ws.sifts.SiftsSettings','javax.swing.table.TableRowSorter',['javax.swing.RowSorter','.SortKey'],'javax.swing.SortOrder','javax.swing.RowFilter',['jalview.gui.Preferences','.UrlListSelectionHandler'],['jalview.jbgui.GPreferences','.RadioButtonRenderer'],['jalview.jbgui.GPreferences','.RadioButtonEditor'],'Boolean','jalview.util.BrowserLauncher','jalview.io.PIRFile','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.jbgui.GSequenceLink','jalview.gui.JvOptionPane','jalview.gui.JalviewColourChooser','java.io.File','ext.edu.ucsf.rbvi.strucviz2.StructureManager','javax.swing.JOptionPane','jalview.gui.JvSwingUtils','jalview.gui.Help',['jalview.gui.Help','.HelpId']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Preferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GPreferences');
C$.sequenceUrlLinks=null;
C$.dataModel=null;
C$.groupURLLinks=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
var inMenuString=$I$(1).getDefault$S$S("SEQUENCE_LINKS", "");
var notInMenuString=$I$(1).getDefault$S$S("STORED_LINKS", "");
var defaultUrl=$I$(1).getDefault$S$S("DEFAULT_URL", "EMBL-EBI Search");
if (inMenuString.isEmpty$() && notInMenuString.isEmpty$() ) {
inMenuString="EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$";
}var factory=Clazz.new_($I$(2).c$$S$S$S,[defaultUrl, inMenuString, notInMenuString]);
C$.sequenceUrlLinks=factory.createUrlProvider$();
C$.dataModel=Clazz.new_($I$(3).c$$jalview_urls_api_UrlProviderI,[C$.sequenceUrlLinks]);
C$.groupURLLinks=Clazz.new_($I$(4));
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frame=null;
this.wsPrefs=null;
this.promptEachTimeOpt=null;
this.lineArtOpt=null;
this.textOpt=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.promptEachTimeOpt=Clazz.new_($I$(5).c$$S$S, [this, null, $I$(6).getString$S("label.prompt_each_time"), "Prompt each time"]);
this.lineArtOpt=Clazz.new_($I$(5).c$$S$S, [this, null, $I$(6).getString$S("label.lineart"), "Lineart"]);
this.textOpt=Clazz.new_($I$(5).c$$S$S, [this, null, $I$(6).getString$S("action.text"), "Text"]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.frame=Clazz.new_($I$(7));
this.frame.setContentPane$java_awt_Container(this);
if (!$I$(8).isJS$()) 
{}
var width=500;
var height=450;
if ($I$(8).isAMacAndNotJS$()) {
width=570;
height=480;
}$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.frame, $I$(6).getString$S("label.preferences"), width, height);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(10).c$$I$I,[width, height]));
this.seqLimit.setSelected$Z($I$(1).getDefault$S$Z("SHOW_JVSUFFIX", true));
this.rightAlign.setSelected$Z($I$(1).getDefault$S$Z("RIGHT_ALIGN_IDS", false));
this.fullScreen.setSelected$Z($I$(1).getDefault$S$Z("SHOW_FULLSCREEN", false));
this.annotations.setSelected$Z($I$(1).getDefault$S$Z("SHOW_ANNOTATIONS", true));
this.conservation.setSelected$Z($I$(1).getDefault$S$Z("SHOW_CONSERVATION", true));
this.quality.setSelected$Z($I$(1).getDefault$S$Z("SHOW_QUALITY", true));
this.identity.setSelected$Z($I$(1).getDefault$S$Z("SHOW_IDENTITY", true));
this.openoverv.setSelected$Z($I$(1).getDefault$S$Z("SHOW_OVERVIEW", false));
this.showUnconserved.setSelected$Z($I$(1).getDefault$S$Z("SHOW_UNCONSERVED", false));
this.showOccupancy.setSelected$Z($I$(1).getDefault$S$Z("SHOW_OCCUPANCY", false));
this.showGroupConsensus.setSelected$Z($I$(1).getDefault$S$Z("SHOW_GROUP_CONSENSUS", false));
this.showGroupConservation.setSelected$Z($I$(1).getDefault$S$Z("SHOW_GROUP_CONSERVATION", false));
this.showConsensHistogram.setSelected$Z($I$(1).getDefault$S$Z("SHOW_CONSENSUS_HISTOGRAM", true));
this.showConsensLogo.setSelected$Z($I$(1).getDefault$S$Z("SHOW_CONSENSUS_LOGO", false));
this.showNpTooltip.setSelected$Z($I$(1).getDefault$S$Z("SHOW_NPFEATS_TOOLTIP", true));
this.showDbRefTooltip.setSelected$Z($I$(1).getDefault$S$Z("SHOW_DBREFS_TOOLTIP", true));
var fonts=$I$(11).getLocalGraphicsEnvironment$().getAvailableFontFamilyNames$();
for (var i=0; i < fonts.length; i++) {
this.fontNameCB.addItem$TE(fonts[i]);
}
for (var i=1; i <= 30; i++) {
this.fontSizeCB.addItem$TE(i + "");
}
this.fontStyleCB.addItem$TE("plain");
this.fontStyleCB.addItem$TE("bold");
this.fontStyleCB.addItem$TE("italic");
this.fontNameCB.setSelectedItem$O($I$(1).getDefault$S$S("FONT_NAME", "SansSerif"));
this.fontSizeCB.setSelectedItem$O($I$(1).getDefault$S$S("FONT_SIZE", "10"));
this.fontStyleCB.setSelectedItem$O($I$(1).getDefault$S$S("FONT_STYLE", "0"));
this.smoothFont.setSelected$Z($I$(1).getDefault$S$Z("ANTI_ALIAS", false));
this.scaleProteinToCdna.setSelected$Z($I$(1).getDefault$S$Z("SCALE_PROTEIN_TO_CDNA", false));
this.idItalics.setSelected$Z($I$(1).getDefault$S$Z("ID_ITALICS", true));
this.wrap.setSelected$Z($I$(1).getDefault$S$Z("WRAP_ALIGNMENT", false));
this.gapSymbolCB.addItem$TE("-");
this.gapSymbolCB.addItem$TE(".");
this.gapSymbolCB.setSelectedItem$O($I$(1).getDefault$S$S("GAP_SYMBOL", "-"));
this.sortby.addItem$TE("No sort");
this.sortby.addItem$TE("Id");
this.sortby.addItem$TE("Pairwise Identity");
this.sortby.setSelectedItem$O($I$(1).getDefault$S$S("SORT_ALIGNMENT", "No sort"));
this.sortAnnBy.addItem$TE($I$(12).NONE.toString());
this.sortAnnBy.addItem$TE($I$(12).SEQUENCE_AND_LABEL.toString());
this.sortAnnBy.addItem$TE($I$(12).LABEL_AND_SEQUENCE.toString());
var savedSort=$I$(12).valueOf$S($I$(1).getDefault$S$S("SORT_ANNOTATIONS", $I$(12).NONE.name$()));
this.sortAnnBy.setSelectedItem$O(savedSort.toString());
this.sortAutocalc.addItem$TE("Autocalculated first");
this.sortAutocalc.addItem$TE("Autocalculated last");
var showAbove=$I$(1).getDefault$S$Z("SHOW_AUTOCALC_ABOVE", true);
this.sortAutocalc.setSelectedItem$O(showAbove ? this.sortAutocalc.getItemAt$I(0) : this.sortAutocalc.getItemAt$I(1));
this.startupCheckbox.setSelected$Z($I$(1).getDefault$S$Z("SHOW_STARTUP_FILE", true));
this.startupFileTextfield.setText$S($I$(1).getDefault$S$S("STARTUP_FILE", $I$(1).getDefault$S$S("www.jalview.org", "http://www.jalview.org") + "/examples/exampleFile_2_3.jar"));
this.protColour.addItem$TE("None");
this.nucColour.addItem$TE("None");
for (var cs, $cs = $I$(13).getInstance$().getColourSchemes$().iterator$(); $cs.hasNext$()&&((cs=($cs.next$())),1);) {
var name=cs.getSchemeName$();
this.protColour.addItem$TE(name);
this.nucColour.addItem$TE(name);
}
var oldProp=$I$(1).getDefault$S$S("DEFAULT_COLOUR", "None");
var newProp=$I$(1).getDefault$S$S("DEFAULT_COLOUR_PROT", null);
this.protColour.setSelectedItem$O(newProp != null  ? newProp : oldProp);
newProp=$I$(1).getDefault$S$S("DEFAULT_COLOUR_NUC", null);
this.nucColour.setSelectedItem$O(newProp != null  ? newProp : oldProp);
this.minColour.setBackground$java_awt_Color($I$(1).getDefaultColour$S$java_awt_Color("ANNOTATIONCOLOUR_MIN", $I$(14).orange));
this.maxColour.setBackground$java_awt_Color($I$(1).getDefaultColour$S$java_awt_Color("ANNOTATIONCOLOUR_MAX", $I$(14).red));
this.gapColour.setBackground$java_awt_Color($I$(1).getDefaultColour$S$java_awt_Color("GAP_COLOUR", $I$(15).OVERVIEW_DEFAULT_GAP));
this.hiddenColour.setBackground$java_awt_Color($I$(1).getDefaultColour$S$java_awt_Color("HIDDEN_COLOUR", $I$(15).OVERVIEW_DEFAULT_HIDDEN));
this.useLegacyGap.setSelected$Z($I$(1).getDefault$S$Z("USE_LEGACY_GAP", false));
this.gapLabel.setEnabled$Z(!this.useLegacyGap.isSelected$());
this.gapColour.setEnabled$Z(!this.useLegacyGap.isSelected$());
this.showHiddenAtStart.setSelected$Z($I$(1).getDefault$S$Z("SHOW_OV_HIDDEN_AT_START", false));
var structSelected=$I$(1).getDefault$S$Z("STRUCT_FROM_PDB", false);
this.structFromPdb.setSelected$Z(structSelected);
this.useRnaView.setSelected$Z($I$(1).getDefault$S$Z("USE_RNAVIEW", false));
this.useRnaView.setEnabled$Z(structSelected);
this.addSecondaryStructure.setSelected$Z($I$(1).getDefault$S$Z("ADD_SS_ANN", false));
this.addSecondaryStructure.setEnabled$Z(structSelected);
this.addTempFactor.setSelected$Z($I$(1).getDefault$S$Z("ADD_TEMPFACT_ANN", false));
this.addTempFactor.setEnabled$Z(structSelected);
this.structViewer.setSelectedItem$O($I$(1).getDefault$S$S("STRUCTURE_DISPLAY", $I$(16).JMOL.name$()));
this.chimeraPath.setText$S($I$(1).getDefault$S$S("CHIMERA_PATH", ""));
this.chimeraPath.addActionListener$java_awt_event_ActionListener(((P$.Preferences$1||
(function(){var C$=Clazz.newClass(P$, "Preferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
p$1.validateChimeraPath.apply(this.b$['jalview.gui.Preferences'], []);
});
})()
), Clazz.new_(P$.Preferences$1.$init$, [this, null])));
if ($I$(1).getDefault$S$Z("MAP_WITH_SIFTS", false)) {
this.siftsMapping.setSelected$Z(true);
} else {
this.nwMapping.setSelected$Z(true);
}$I$(17).setMapWithSifts$Z($I$(1).getDefault$S$Z("MAP_WITH_SIFTS", false));
this.linkUrlTable.setModel$javax_swing_table_TableModel(C$.dataModel);
var sorter=Clazz.new_($I$(18).c$$TM,[this.linkUrlTable.getModel$()]);
this.linkUrlTable.setRowSorter$javax_swing_RowSorter(sorter);
var sortKeys=Clazz.new_($I$(4));
var m=this.linkUrlTable.getModel$();
sortKeys.add$TE(Clazz.new_($I$(19).c$$I$javax_swing_SortOrder,[m.getPrimaryColumn$(), $I$(20).DESCENDING]));
sortKeys.add$TE(Clazz.new_($I$(19).c$$I$javax_swing_SortOrder,[m.getSelectedColumn$(), $I$(20).DESCENDING]));
sortKeys.add$TE(Clazz.new_($I$(19).c$$I$javax_swing_SortOrder,[m.getNameColumn$(), $I$(20).ASCENDING]));
sorter.setSortKeys$java_util_List(sortKeys);
var onReset;
onReset=((P$.Preferences$2||
(function(){var C$=Clazz.newClass(P$, "Preferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.Preferences'].filterTB.setText$S("");
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(21).regexFilter$S$IA("", []));
});
})()
), Clazz.new_(P$.Preferences$2.$init$, [this, {sorter: sorter}]));
this.doReset.addActionListener$java_awt_event_ActionListener(onReset);
var customUrlFilter=((P$.Preferences$3||
(function(){var C$=Clazz.newClass(P$, "Preferences$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.RowFilter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry', function (entry) {
return (entry.getModel$()).isUserEntry$javax_swing_RowFilter_Entry(entry);
});
})()
), Clazz.new_($I$(21), [this, null],P$.Preferences$3));
var customSorter=Clazz.new_($I$(18).c$$TM,[this.linkUrlTable.getModel$()]);
customSorter.setRowFilter$javax_swing_RowFilter(customUrlFilter);
var onCustomOnly;
onCustomOnly=((P$.Preferences$4||
(function(){var C$=Clazz.newClass(P$, "Preferences$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.Preferences'].filterTB.setText$S("");
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter(this.$finals$.customUrlFilter);
});
})()
), Clazz.new_(P$.Preferences$4.$init$, [this, {sorter: sorter, customUrlFilter: customUrlFilter}]));
this.userOnly.addActionListener$java_awt_event_ActionListener(onCustomOnly);
this.filterTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.Preferences$5||
(function(){var C$=Clazz.newClass(P$, "Preferences$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.caseInsensitiveFlag=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.caseInsensitiveFlag="(?i)";
}, 1);

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(21).regexFilter$S$IA(this.caseInsensitiveFlag + this.b$['jalview.gui.Preferences'].filterTB.getText$(), []));
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(21).regexFilter$S$IA(this.caseInsensitiveFlag + this.b$['jalview.gui.Preferences'].filterTB.getText$(), []));
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(21).regexFilter$S$IA(this.caseInsensitiveFlag + this.b$['jalview.gui.Preferences'].filterTB.getText$(), []));
});
})()
), Clazz.new_(P$.Preferences$5.$init$, [this, {sorter: sorter}])));
this.linkUrlTable.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(Clazz.new_($I$(22), [this, null]));
var onClickCol=(this.linkUrlTable.getModel$()).getPrimaryColumn$();
var onClickName=this.linkUrlTable.getColumnName$I(onClickCol);
this.linkUrlTable.getColumn$O(onClickName).setCellRenderer$javax_swing_table_TableCellRenderer(Clazz.new_($I$(23), [this, null]));
this.linkUrlTable.getColumn$O(onClickName).setCellEditor$javax_swing_table_TableCellEditor(Clazz.new_($I$(24), [this, null]));
for (var column=0; column < this.linkUrlTable.getColumnCount$(); column++) {
if (this.linkUrlTable.getModel$().getColumnClass$I(column).equals$O(Clazz.getClass($I$(25)))) {
var tableColumn=this.linkUrlTable.getColumnModel$().getColumn$I(column);
var preferredWidth=tableColumn.getMinWidth$();
var cellRenderer=this.linkUrlTable.getCellRenderer$I$I(0, column);
var c=this.linkUrlTable.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(cellRenderer, 0, column);
var cwidth=c.getPreferredSize$().width + this.linkUrlTable.getIntercellSpacing$().width;
preferredWidth=Math.max(preferredWidth, cwidth);
tableColumn.setPreferredWidth$I(preferredWidth);
}}
this.useProxy.setSelected$Z($I$(1).getDefault$S$Z("USE_PROXY", false));
this.useProxy_actionPerformed$();
this.proxyServerTB.setText$S($I$(1).getDefault$S$S("PROXY_SERVER", ""));
this.proxyPortTB.setText$S($I$(1).getDefault$S$S("PROXY_PORT", ""));
this.defaultBrowser.setText$S($I$(1).getDefault$S$S("DEFAULT_BROWSER", ""));
this.usagestats.setSelected$Z($I$(1).getDefault$S$Z("USAGESTATS", false));
this.questionnaire.setSelected$Z($I$(1).getProperty$S("NOQUESTIONNAIRES") == null );
this.versioncheck.setSelected$Z($I$(1).getDefault$S$Z("VERSION_CHECK", true));
this.setupOutputCombo$javax_swing_JComboBox$S(this.epsRendering, "EPS_RENDERING");
this.setupOutputCombo$javax_swing_JComboBox$S(this.htmlRendering, "HTML_RENDERING");
this.setupOutputCombo$javax_swing_JComboBox$S(this.svgRendering, "SVG_RENDERING");
this.autoIdWidth.setSelected$Z($I$(1).getDefault$S$Z("FIGURE_AUTOIDWIDTH", false));
this.userIdWidth.setEnabled$Z(!this.autoIdWidth.isSelected$());
this.userIdWidthlabel.setEnabled$Z(!this.autoIdWidth.isSelected$());
var wi=$I$(1).getIntegerProperty$S("FIGURE_FIXEDIDWIDTH");
this.userIdWidth.setText$S(wi == null  ? "" : wi.toString());
this.blcjv.setSelected$Z($I$(1).getDefault$S$Z("BLC_JVSUFFIX", true));
this.clustaljv.setSelected$Z($I$(1).getDefault$S$Z("CLUSTAL_JVSUFFIX", true));
this.fastajv.setSelected$Z($I$(1).getDefault$S$Z("FASTA_JVSUFFIX", true));
this.msfjv.setSelected$Z($I$(1).getDefault$S$Z("MSF_JVSUFFIX", true));
this.pfamjv.setSelected$Z($I$(1).getDefault$S$Z("PFAM_JVSUFFIX", true));
this.pileupjv.setSelected$Z($I$(1).getDefault$S$Z("PILEUP_JVSUFFIX", true));
this.pirjv.setSelected$Z($I$(1).getDefault$S$Z("PIR_JVSUFFIX", true));
this.modellerOutput.setSelected$Z($I$(1).getDefault$S$Z("PIR_MODELLER", false));
this.embbedBioJSON.setSelected$Z($I$(1).getDefault$S$Z("EXPORT_EMBBED_BIOJSON", true));
this.autoCalculateConsCheck.setSelected$Z($I$(1).getDefault$S$Z("AUTO_CALC_CONSENSUS", true));
this.padGaps.setSelected$Z($I$(1).getDefault$S$Z("PAD_GAPS", false));
this.sortByTree.setSelected$Z($I$(1).getDefault$S$Z("SORT_BY_TREE", false));
this.annotations_actionPerformed$java_awt_event_ActionEvent(null);
this.loadLastSavedBackupsOptions$();
}, 1);

Clazz.newMeth(C$, 'setupOutputCombo$javax_swing_JComboBox$S', function (comboBox, propertyKey) {
comboBox.addItem$TE(this.promptEachTimeOpt);
comboBox.addItem$TE(this.lineArtOpt);
comboBox.addItem$TE(this.textOpt);
var defaultOption=$I$(8).isJS$() ? "Text" : $I$(1).getDefault$S$S(propertyKey, "Prompt each time");
if (defaultOption.equalsIgnoreCase$S("Text")) {
comboBox.setSelectedItem$O(this.textOpt);
} else if (defaultOption.equalsIgnoreCase$S("Lineart")) {
comboBox.setSelectedItem$O(this.lineArtOpt);
} else {
comboBox.setSelectedItem$O(this.promptEachTimeOpt);
}});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (!p$1.validateSettings.apply(this, [])) {
return;
}$I$(1).applicationProperties.setProperty$S$S("SHOW_JVSUFFIX", $I$(25).toString$Z(this.seqLimit.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("RIGHT_ALIGN_IDS", $I$(25).toString$Z(this.rightAlign.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_FULLSCREEN", $I$(25).toString$Z(this.fullScreen.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_OVERVIEW", $I$(25).toString$Z(this.openoverv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_ANNOTATIONS", $I$(25).toString$Z(this.annotations.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_CONSERVATION", $I$(25).toString$Z(this.conservation.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_QUALITY", $I$(25).toString$Z(this.quality.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_IDENTITY", $I$(25).toString$Z(this.identity.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("GAP_SYMBOL", this.gapSymbolCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("FONT_NAME", this.fontNameCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("FONT_STYLE", this.fontStyleCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("FONT_SIZE", this.fontSizeCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("ID_ITALICS", $I$(25).toString$Z(this.idItalics.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_UNCONSERVED", $I$(25).toString$Z(this.showUnconserved.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_OCCUPANCY", $I$(25).toString$Z(this.showOccupancy.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_GROUP_CONSENSUS", $I$(25).toString$Z(this.showGroupConsensus.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_GROUP_CONSERVATION", $I$(25).toString$Z(this.showGroupConservation.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_CONSENSUS_HISTOGRAM", $I$(25).toString$Z(this.showConsensHistogram.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_CONSENSUS_LOGO", $I$(25).toString$Z(this.showConsensLogo.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("ANTI_ALIAS", $I$(25).toString$Z(this.smoothFont.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SCALE_PROTEIN_TO_CDNA", $I$(25).toString$Z(this.scaleProteinToCdna.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_NPFEATS_TOOLTIP", $I$(25).toString$Z(this.showNpTooltip.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_DBREFS_TOOLTIP", $I$(25).toString$Z(this.showDbRefTooltip.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("WRAP_ALIGNMENT", $I$(25).toString$Z(this.wrap.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("STARTUP_FILE", this.startupFileTextfield.getText$());
$I$(1).applicationProperties.setProperty$S$S("SHOW_STARTUP_FILE", $I$(25).toString$Z(this.startupCheckbox.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SORT_ALIGNMENT", this.sortby.getSelectedItem$().toString());
var annSortOrder=$I$(12).forDescription$S(this.sortAnnBy.getSelectedItem$().toString());
if (annSortOrder != null ) {
$I$(1).applicationProperties.setProperty$S$S("SORT_ANNOTATIONS", annSortOrder.name$());
}var showAutocalcFirst=this.sortAutocalc.getSelectedIndex$() == 0;
$I$(1).applicationProperties.setProperty$S$S("SHOW_AUTOCALC_ABOVE", $I$(25).valueOf$Z(showAutocalcFirst).toString());
$I$(1).applicationProperties.setProperty$S$S("DEFAULT_COLOUR_PROT", this.protColour.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("DEFAULT_COLOUR_NUC", this.nucColour.getSelectedItem$().toString());
$I$(1).setColourProperty$S$java_awt_Color("ANNOTATIONCOLOUR_MIN", this.minColour.getBackground$());
$I$(1).setColourProperty$S$java_awt_Color("ANNOTATIONCOLOUR_MAX", this.maxColour.getBackground$());
$I$(1).setColourProperty$S$java_awt_Color("GAP_COLOUR", this.gapColour.getBackground$());
$I$(1).setColourProperty$S$java_awt_Color("HIDDEN_COLOUR", this.hiddenColour.getBackground$());
$I$(1).applicationProperties.setProperty$S$S("USE_LEGACY_GAP", $I$(25).toString$Z(this.useLegacyGap.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_OV_HIDDEN_AT_START", $I$(25).toString$Z(this.showHiddenAtStart.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("ADD_TEMPFACT_ANN", $I$(25).toString$Z(this.addTempFactor.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("ADD_SS_ANN", $I$(25).toString$Z(this.addSecondaryStructure.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("USE_RNAVIEW", $I$(25).toString$Z(this.useRnaView.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("STRUCT_FROM_PDB", $I$(25).toString$Z(this.structFromPdb.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("STRUCTURE_DISPLAY", this.structViewer.getSelectedItem$().toString());
$I$(1).setOrRemove$S$S("CHIMERA_PATH", this.chimeraPath.getText$());
$I$(1).applicationProperties.setProperty$S$S("MAP_WITH_SIFTS", $I$(25).toString$Z(this.siftsMapping.isSelected$()));
$I$(17).setMapWithSifts$Z(this.siftsMapping.isSelected$());
$I$(1).applicationProperties.setProperty$S$S("EPS_RENDERING", (this.epsRendering.getSelectedItem$()).getCode$());
$I$(1).applicationProperties.setProperty$S$S("HTML_RENDERING", (this.htmlRendering.getSelectedItem$()).getCode$());
$I$(1).applicationProperties.setProperty$S$S("SVG_RENDERING", (this.svgRendering.getSelectedItem$()).getCode$());
$I$(1).setOrRemove$S$S("DEFAULT_BROWSER", this.defaultBrowser.getText$());
$I$(26).resetBrowser$();
var menuLinks=C$.sequenceUrlLinks.writeUrlsAsString$Z(true);
if (menuLinks.isEmpty$()) {
$I$(1).applicationProperties.remove$O("SEQUENCE_LINKS");
} else {
$I$(1).applicationProperties.setProperty$S$S("SEQUENCE_LINKS", menuLinks.toString());
}var nonMenuLinks=C$.sequenceUrlLinks.writeUrlsAsString$Z(false);
if (nonMenuLinks.isEmpty$()) {
$I$(1).applicationProperties.remove$O("STORED_LINKS");
} else {
$I$(1).applicationProperties.setProperty$S$S("STORED_LINKS", nonMenuLinks.toString());
}$I$(1).applicationProperties.setProperty$S$S("DEFAULT_URL", C$.sequenceUrlLinks.getPrimaryUrlId$());
$I$(1).applicationProperties.setProperty$S$S("USE_PROXY", $I$(25).toString$Z(this.useProxy.isSelected$()));
$I$(1).setOrRemove$S$S("PROXY_SERVER", this.proxyServerTB.getText$());
$I$(1).setOrRemove$S$S("PROXY_PORT", this.proxyPortTB.getText$());
if (this.useProxy.isSelected$()) {
System.setProperty$S$S("http.proxyHost", this.proxyServerTB.getText$());
System.setProperty$S$S("http.proxyPort", this.proxyPortTB.getText$());
} else {
System.setProperty$S$S("http.proxyHost", "");
System.setProperty$S$S("http.proxyPort", "");
}$I$(1).setProperty$S$S("VERSION_CHECK", $I$(25).toString$Z(this.versioncheck.isSelected$()));
if ($I$(1).getProperty$S("USAGESTATS") != null  || this.usagestats.isSelected$() ) {
$I$(1).setProperty$S$S("USAGESTATS", $I$(25).toString$Z(this.usagestats.isSelected$()));
}if (!this.questionnaire.isSelected$()) {
$I$(1).setProperty$S$S("NOQUESTIONNAIRES", "true");
} else {
$I$(1).removeProperty$S("NOQUESTIONNAIRES");
}$I$(1).applicationProperties.setProperty$S$S("BLC_JVSUFFIX", $I$(25).toString$Z(this.blcjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("CLUSTAL_JVSUFFIX", $I$(25).toString$Z(this.clustaljv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("FASTA_JVSUFFIX", $I$(25).toString$Z(this.fastajv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("MSF_JVSUFFIX", $I$(25).toString$Z(this.msfjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PFAM_JVSUFFIX", $I$(25).toString$Z(this.pfamjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PILEUP_JVSUFFIX", $I$(25).toString$Z(this.pileupjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PIR_JVSUFFIX", $I$(25).toString$Z(this.pirjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PIR_MODELLER", $I$(25).toString$Z(this.modellerOutput.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("EXPORT_EMBBED_BIOJSON", $I$(25).toString$Z(this.embbedBioJSON.isSelected$()));
$I$(27).useModellerOutput=this.modellerOutput.isSelected$();
$I$(1).applicationProperties.setProperty$S$S("FIGURE_AUTOIDWIDTH", $I$(25).toString$Z(this.autoIdWidth.isSelected$()));
this.userIdWidth_actionPerformed$();
$I$(1).applicationProperties.setProperty$S$S("FIGURE_FIXEDIDWIDTH", this.userIdWidth.getText$());
$I$(1).applicationProperties.setProperty$S$S("AUTO_CALC_CONSENSUS", $I$(25).toString$Z(this.autoCalculateConsCheck.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SORT_BY_TREE", $I$(25).toString$Z(this.sortByTree.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PAD_GAPS", $I$(25).toString$Z(this.padGaps.isSelected$()));
if (!$I$(8).isJS$()) {
this.wsPrefs.updateAndRefreshWsMenuConfig$Z(false);
}$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_CONFIRM_DELETE_OLD", $I$(25).toString$Z(this.backupfilesConfirmDelete.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_ENABLED", $I$(25).toString$Z(this.enableBackupFiles.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_NO_MAX", $I$(25).toString$Z(this.backupfilesKeepAll.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_REVERSE_ORDER", $I$(25).toString$Z(this.suffixReverse.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_SUFFIX", this.suffixTemplate.getText$());
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_ROLL_MAX", Integer.toString$I(jalview.jbgui.GPreferences.getSpinnerInt$javax_swing_JSpinner$I(this.backupfilesRollMaxSpinner, 4)));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_SUFFIX_DIGITS", Integer.toString$I(jalview.jbgui.GPreferences.getSpinnerInt$javax_swing_JSpinner$I(this.suffixDigitsSpinner, 3)));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_PRESET", Integer.toString$I(this.getComboIntStringKey$javax_swing_JComboBox(this.backupfilesPresetsCombo)));
$I$(1).saveProperties$();
$I$(9).instance.doConfigureStructurePrefs$();
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'validateSettings', function () {
if (!this.validateStructure$()) {
this.structureTab.requestFocusInWindow$();
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'validateStructure$', function () {
return p$1.validateChimeraPath.apply(this, []);
});

Clazz.newMeth(C$, 'startupFileTextfield_mouseClicked$', function () {
var fileFormat=$I$(1).getProperty$S("DEFAULT_FILE_FORMAT");
var chooser=$I$(28).forRead$S$S($I$(1).getProperty$S("LAST_DIRECTORY"), fileFormat);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(29)));
chooser.setDialogTitle$S($I$(6).getString$S("label.select_startup_file"));
var value=chooser.showOpenDialog$java_awt_Component(this);
if (value == 0) {
var format=chooser.getSelectedFormat$();
if (format != null ) {
$I$(1).applicationProperties.setProperty$S$S("DEFAULT_FILE_FORMAT", format.getName$());
}this.startupFileTextfield.setText$S(chooser.getSelectedFile$().getAbsolutePath$());
}});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
if (!$I$(8).isJS$()) {
this.wsPrefs.updateWsMenuConfig$Z(true);
this.wsPrefs.refreshWs_actionPerformed$java_awt_event_ActionEvent(e);
}this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'annotations_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.conservation.setEnabled$Z(this.annotations.isSelected$());
this.quality.setEnabled$Z(this.annotations.isSelected$());
this.identity.setEnabled$Z(this.annotations.isSelected$());
this.showOccupancy.setEnabled$Z(this.annotations.isSelected$());
this.showGroupConsensus.setEnabled$Z(this.annotations.isSelected$());
this.showGroupConservation.setEnabled$Z(this.annotations.isSelected$());
this.showConsensHistogram.setEnabled$Z(this.annotations.isSelected$() && (this.identity.isSelected$() || this.showGroupConsensus.isSelected$() ) );
this.showConsensLogo.setEnabled$Z(this.annotations.isSelected$() && (this.identity.isSelected$() || this.showGroupConsensus.isSelected$() ) );
});

Clazz.newMeth(C$, 'newLink_actionPerformed$java_awt_event_ActionEvent', function (e) {
var link=Clazz.new_($I$(30));
var valid=false;
while (!valid){
if ($I$(31).showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon($I$(9).desktop, link, $I$(6).getString$S("label.new_sequence_url_link"), 2, -1, null) == 0) {
if (link.checkValid$()) {
if ((this.linkUrlTable.getModel$()).isUniqueName$S(link.getName$())) {
(this.linkUrlTable.getModel$()).insertRow$S$S(link.getName$(), link.getURL$());
valid=true;
} else {
link.notifyDuplicate$();
continue;
}}} else {
break;
}}
});

Clazz.newMeth(C$, 'editLink_actionPerformed$java_awt_event_ActionEvent', function (e) {
var link=Clazz.new_($I$(30));
var index=this.linkUrlTable.getSelectedRow$();
if (index == -1) {
$I$(1).log.debug$O("Edit with no row selected in linkUrlTable");
return;
}var nameCol=(this.linkUrlTable.getModel$()).getNameColumn$();
var urlCol=(this.linkUrlTable.getModel$()).getUrlColumn$();
var oldName=this.linkUrlTable.getValueAt$I$I(index, nameCol).toString();
link.setName$S(oldName);
link.setURL$S(this.linkUrlTable.getValueAt$I$I(index, urlCol).toString());
var valid=false;
while (!valid){
if ($I$(31).showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon($I$(9).desktop, link, $I$(6).getString$S("label.edit_sequence_url_link"), 2, -1, null) == 0) {
if (link.checkValid$()) {
if ((oldName.equals$O(link.getName$())) || ((this.linkUrlTable.getModel$()).isUniqueName$S(link.getName$())) ) {
this.linkUrlTable.setValueAt$O$I$I(link.getName$(), index, nameCol);
this.linkUrlTable.setValueAt$O$I$I(link.getURL$(), index, urlCol);
valid=true;
} else {
link.notifyDuplicate$();
continue;
}}} else {
break;
}}
});

Clazz.newMeth(C$, 'deleteLink_actionPerformed$java_awt_event_ActionEvent', function (e) {
var index=this.linkUrlTable.getSelectedRow$();
var modelIndex=-1;
if (index == -1) {
$I$(1).log.debug$O("Delete with no row selected in linkUrlTable");
return;
} else {
modelIndex=this.linkUrlTable.convertRowIndexToModel$I(index);
}(this.linkUrlTable.getModel$()).removeRow$I(modelIndex);
});

Clazz.newMeth(C$, 'defaultBrowser_mouseClicked$java_awt_event_MouseEvent', function (e) {
if (!$I$(8).isJS$()) 
{}
});

Clazz.newMeth(C$, 'showunconserved_actionPerformed$java_awt_event_ActionEvent', function (e) {
C$.superclazz.prototype.showunconserved_actionPerformed$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getGroupURLLinks$', function () {
return C$.groupURLLinks;
}, 1);

Clazz.newMeth(C$, 'minColour_actionPerformed$javax_swing_JPanel', function (panel) {
$I$(32).showColourChooser$java_awt_Component$S$javax_swing_JComponent(this, $I$(6).getString$S("label.select_colour_minimum_value"), panel);
});

Clazz.newMeth(C$, 'maxColour_actionPerformed$javax_swing_JPanel', function (panel) {
$I$(32).showColourChooser$java_awt_Component$S$javax_swing_JComponent(this, $I$(6).getString$S("label.select_colour_maximum_value"), panel);
});

Clazz.newMeth(C$, 'gapColour_actionPerformed$javax_swing_JPanel', function (gap) {
if (!this.useLegacyGap.isSelected$()) {
$I$(32).showColourChooser$java_awt_Component$S$javax_swing_JComponent(this, $I$(6).getString$S("label.select_gap_colour"), gap);
}});

Clazz.newMeth(C$, 'hiddenColour_actionPerformed$javax_swing_JPanel', function (hidden) {
$I$(32).showColourChooser$java_awt_Component$S$javax_swing_JComponent(this, $I$(6).getString$S("label.select_hidden_colour"), hidden);
});

Clazz.newMeth(C$, 'useLegacyGaps_actionPerformed$java_awt_event_ActionEvent', function (e) {
var enabled=this.useLegacyGap.isSelected$();
if (enabled) {
this.gapColour.setBackground$java_awt_Color($I$(15).OVERVIEW_DEFAULT_LEGACY_GAP);
} else {
this.gapColour.setBackground$java_awt_Color($I$(15).OVERVIEW_DEFAULT_GAP);
}this.gapColour.setEnabled$Z(!enabled);
this.gapLabel.setEnabled$Z(!enabled);
});

Clazz.newMeth(C$, 'resetOvDefaults_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.useLegacyGap.setSelected$Z(false);
this.useLegacyGaps_actionPerformed$java_awt_event_ActionEvent(null);
this.showHiddenAtStart.setSelected$Z(false);
this.hiddenColour.setBackground$java_awt_Color($I$(15).OVERVIEW_DEFAULT_HIDDEN);
});

Clazz.newMeth(C$, 'userIdWidth_actionPerformed$', function () {
try {
var val=this.userIdWidth.getText$().trim$();
if (val.length$() > 0) {
var iw=new Integer(Integer.parseInt$S(val));
if (iw.intValue$() < 12) {
throw Clazz.new_(Clazz.load('NumberFormatException'));
}this.userIdWidth.setText$S(iw.toString());
}} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
this.userIdWidth.setText$S("");
$I$(31).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, $I$(6).getString$S("warn.user_defined_width_requirements"), $I$(6).getString$S("label.invalid_id_column_width"), 2);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'autoIdWidth_actionPerformed$', function () {
this.userIdWidth.setEnabled$Z(!this.autoIdWidth.isSelected$());
this.userIdWidthlabel.setEnabled$Z(!this.autoIdWidth.isSelected$());
});

Clazz.newMeth(C$, 'validateChimeraPath', function () {
if (this.chimeraPath.getText$().trim$().length$() > 0) {
var f=Clazz.new_($I$(33).c$$S,[this.chimeraPath.getText$()]);
if (!f.canExecute$()) {
$I$(31).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, $I$(6).getString$S("label.invalid_chimera_path"), $I$(6).getString$S("label.invalid_name"), 0);
return false;
}}return true;
}, p$1);

Clazz.newMeth(C$, 'structureViewer_actionPerformed$S', function (selectedItem) {
if (!selectedItem.equals$O($I$(16).CHIMERA.name$())) {
return;
}var found=false;
var paths=$I$(34).getChimeraPaths$();
paths.add$I$TE(0, this.chimeraPath.getText$());
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (Clazz.new_($I$(33).c$$S,[path.trim$()]).canExecute$()) {
found=true;
break;
}}
if (!found) {
var options=Clazz.array(String, -1, ["OK", "Help"]);
var showHelp=$I$(35).showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O($I$(9).desktop, $I$(36).wrapTooltip$Z$S(true, $I$(6).getString$S("label.chimera_missing")), "", 0, 2, null, options, options[0]);
if (showHelp == 1) {
try {
$I$(37).showHelpWindow$jalview_gui_Help_HelpId($I$(38).StructureViewer);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.help.HelpSetException")){
e.printStackTrace$();
} else {
throw e;
}
}
}}});
;
(function(){var C$=Clazz.newClass(P$.Preferences, "OptionsParam", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.code=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, code) {
C$.$init$.apply(this);
this.name=name;
this.code=code;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'setCode$S', function (code) {
this.code=code;
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'equals$O', function (that) {
if (!(Clazz.instanceOf(that, "jalview.gui.Preferences.OptionsParam"))) {
return false;
}return this.code.equalsIgnoreCase$S((that).code);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.name.hashCode$() + this.code.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Preferences, "UrlListSelectionHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ListSelectionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_ListSelectionEvent','valueChanged$'], function (e) {
var lsm=e.getSource$();
var index=lsm.getMinSelectionIndex$();
if (index == -1) {
this.this$0.editLink.setEnabled$Z(false);
this.this$0.deleteLink.setEnabled$Z(false);
return;
}var modelIndex=this.this$0.linkUrlTable.convertRowIndexToModel$I(index);
if ((this.this$0.linkUrlTable.getModel$()).isRowDeletable$I(modelIndex)) {
this.this$0.deleteLink.setEnabled$Z(true);
} else {
this.this$0.deleteLink.setEnabled$Z(false);
}if ((this.this$0.linkUrlTable.getModel$()).isRowEditable$I(modelIndex)) {
this.this$0.editLink.setEnabled$Z(true);
} else {
this.this$0.editLink.setEnabled$Z(false);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
