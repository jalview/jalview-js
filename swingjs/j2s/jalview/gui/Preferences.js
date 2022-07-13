(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.urls.desktop.DesktopUrlProviderFactory','jalview.urls.UrlLinkTableModel','java.util.ArrayList',['jalview.gui.Preferences','.OptionsParam'],'jalview.util.MessageManager','javax.swing.JInternalFrame','jalview.util.Platform','jalview.gui.Desktop','java.awt.Dimension','java.awt.GraphicsEnvironment',['jalview.analysis.AnnotationSorter','.SequenceAnnotationOrder'],'jalview.schemes.ColourSchemes','java.awt.Color','jalview.renderer.OverviewResColourFinder',['jalview.gui.StructureViewer','.ViewerType'],'jalview.bin.Console','jalview.ws.sifts.SiftsSettings','javax.swing.table.TableRowSorter',['javax.swing.RowSorter','.SortKey'],'javax.swing.SortOrder','javax.swing.RowFilter',['jalview.gui.Preferences','.UrlListSelectionHandler'],['jalview.jbgui.GPreferences','.RadioButtonRenderer'],['jalview.jbgui.GPreferences','.RadioButtonEditor'],'jalview.io.PIRFile','jalview.io.BackupFilesPresetEntry','jalview.bin.MemorySetting','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.jbgui.GSequenceLink','jalview.gui.JvOptionPane','jalview.gui.JalviewColourChooser','java.io.File','ext.edu.ucsf.rbvi.strucviz2.StructureManager','jalview.ext.pymol.PymolManager','javax.swing.JOptionPane','jalview.gui.JvSwingUtils',['jalview.jbgui.GPreferences','.TabRef'],'jalview.gui.Help',['jalview.gui.Help','.HelpId'],'java.util.concurrent.CompletableFuture','Thread']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Preferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GPreferences');
C$.$classes$=[['OptionsParam',1],['UrlListSelectionHandler',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.promptEachTimeOpt=Clazz.new_([this, null, $I$(6).getString$S("label.prompt_each_time"), "Prompt each time"],$I$(5,1).c$$S$S);
this.lineArtOpt=Clazz.new_([this, null, $I$(6).getString$S("label.lineart"), "Lineart"],$I$(5,1).c$$S$S);
this.textOpt=Clazz.new_([this, null, $I$(6).getString$S("action.text"), "Text"],$I$(5,1).c$$S$S);
},1);

C$.$fields$=[['S',['previousProxyType'],'O',['frame','javax.swing.JInternalFrame','wsPrefs','jalview.gui.WsPreferences','promptEachTimeOpt','jalview.gui.Preferences.OptionsParam','+lineArtOpt','+textOpt']]
,['O',['INSTANCE','jalview.gui.Preferences','sequenceUrlLinks','jalview.urls.api.UrlProviderI','dataModel','jalview.urls.UrlLinkTableModel','groupURLLinks','java.util.List']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.INSTANCE == null  || C$.INSTANCE.frame == null   || C$.INSTANCE.frame.isClosed$() ) {
C$.INSTANCE=Clazz.new_(C$);
}return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'openPreferences$',  function () {
C$.openPreferences$jalview_jbgui_GPreferences_TabRef$S(null, null);
}, 1);

Clazz.newMeth(C$, 'openPreferences$jalview_jbgui_GPreferences_TabRef$S',  function (selectTab, message) {
var p=C$.getInstance$();
if (selectTab != null ) p.selectTab$jalview_jbgui_GPreferences_TabRef$S(selectTab, message);
p.frame.show$();
p.frame.moveToFront$();
p.frame.grabFocus$();
}, 1);

Clazz.newMeth(C$, 'selectTab$jalview_jbgui_GPreferences_TabRef$S',  function (selectTab, message) {
this.selectTab$jalview_jbgui_GPreferences_TabRef(selectTab);
if (message != null ) this.setMessage$S(message);
this.frame.show$();
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.frame=Clazz.new_($I$(7,1));
this.frame.setContentPane$java_awt_Container(this);
if (!$I$(8).isJS$()) 
{}
var width=500;
var height=450;
if ($I$(8).isAMacAndNotJS$()) {
width=570;
height=480;
}$I$(9,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this.frame, $I$(6).getString$S("label.preferences"), width, height]);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[width, height]));
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
this.fontNameCB.addItem$O(fonts[i]);
}
for (var i=1; i <= 30; i++) {
this.fontSizeCB.addItem$O(i + "");
}
this.fontStyleCB.addItem$O("plain");
this.fontStyleCB.addItem$O("bold");
this.fontStyleCB.addItem$O("italic");
this.fontNameCB.setSelectedItem$O($I$(1).getDefault$S$S("FONT_NAME", "SansSerif"));
this.fontSizeCB.setSelectedItem$O($I$(1).getDefault$S$S("FONT_SIZE", "10"));
this.fontStyleCB.setSelectedItem$O($I$(1).getDefault$S$S("FONT_STYLE", "0"));
this.smoothFont.setSelected$Z($I$(1).getDefault$S$Z("ANTI_ALIAS", true));
this.scaleProteinToCdna.setSelected$Z($I$(1).getDefault$S$Z("SCALE_PROTEIN_TO_CDNA", false));
this.idItalics.setSelected$Z($I$(1).getDefault$S$Z("ID_ITALICS", true));
this.wrap.setSelected$Z($I$(1).getDefault$S$Z("WRAP_ALIGNMENT", false));
this.gapSymbolCB.addItem$O("-");
this.gapSymbolCB.addItem$O(".");
this.gapSymbolCB.setSelectedItem$O($I$(1).getDefault$S$S("GAP_SYMBOL", "-"));
this.sortby.addItem$O("No sort");
this.sortby.addItem$O("Id");
this.sortby.addItem$O("Pairwise Identity");
this.sortby.setSelectedItem$O($I$(1).getDefault$S$S("SORT_ALIGNMENT", "No sort"));
this.sortAnnBy.addItem$O($I$(12).NONE.toString());
this.sortAnnBy.addItem$O($I$(12).SEQUENCE_AND_LABEL.toString());
this.sortAnnBy.addItem$O($I$(12).LABEL_AND_SEQUENCE.toString());
var savedSort=$I$(12,"valueOf$S",[$I$(1,"getDefault$S$S",["SORT_ANNOTATIONS", $I$(12).NONE.name$()])]);
this.sortAnnBy.setSelectedItem$O(savedSort.toString());
this.sortAutocalc.addItem$O("Autocalculated first");
this.sortAutocalc.addItem$O("Autocalculated last");
var showAbove=$I$(1).getDefault$S$Z("SHOW_AUTOCALC_ABOVE", true);
this.sortAutocalc.setSelectedItem$O(showAbove ? this.sortAutocalc.getItemAt$I(0) : this.sortAutocalc.getItemAt$I(1));
this.startupCheckbox.setSelected$Z($I$(1).getDefault$S$Z("SHOW_STARTUP_FILE", true));
this.startupFileTextfield.setText$S($I$(1,"getDefault$S$S",["STARTUP_FILE", $I$(1).getDefault$S$S("www.jalview.org", "https://www.jalview.org") + "/examples/exampleFile_2_7.jvp"]));
this.protColour.addItem$O("None");
this.nucColour.addItem$O("None");
for (var cs, $cs = $I$(13).getInstance$().getColourSchemes$().iterator$(); $cs.hasNext$()&&((cs=($cs.next$())),1);) {
var name=cs.getSchemeName$();
this.protColour.addItem$O(name);
this.nucColour.addItem$O(name);
}
var oldProp=$I$(1).getDefault$S$S("DEFAULT_COLOUR", "None");
var newProp=$I$(1).getDefault$S$S("DEFAULT_COLOUR_PROT", null);
this.protColour.setSelectedItem$O(newProp != null  ? newProp : oldProp);
newProp=$I$(1).getDefault$S$S("DEFAULT_COLOUR_NUC", null);
this.nucColour.setSelectedItem$O(newProp != null  ? newProp : oldProp);
this.minColour.setBackground$java_awt_Color($I$(1,"getDefaultColour$S$java_awt_Color",["ANNOTATIONCOLOUR_MIN", $I$(14).orange]));
this.maxColour.setBackground$java_awt_Color($I$(1,"getDefaultColour$S$java_awt_Color",["ANNOTATIONCOLOUR_MAX", $I$(14).red]));
this.gapColour.setBackground$java_awt_Color($I$(1,"getDefaultColour$S$java_awt_Color",["GAP_COLOUR", $I$(15).OVERVIEW_DEFAULT_GAP]));
this.hiddenColour.setBackground$java_awt_Color($I$(1,"getDefaultColour$S$java_awt_Color",["HIDDEN_COLOUR", $I$(15).OVERVIEW_DEFAULT_HIDDEN]));
this.useLegacyGap.setSelected$Z($I$(1).getDefault$S$Z("USE_LEGACY_GAP", false));
this.gapLabel.setEnabled$Z(!this.useLegacyGap.isSelected$());
this.gapColour.setEnabled$Z(!this.useLegacyGap.isSelected$());
this.showHiddenAtStart.setSelected$Z($I$(1).getDefault$S$Z("SHOW_OV_HIDDEN_AT_START", false));
var structSelected=$I$(1).getDefault$S$Z("STRUCT_FROM_PDB", true);
this.structFromPdb.setSelected$Z(structSelected);
this.addSecondaryStructure.setSelected$Z($I$(1).getDefault$S$Z("ADD_SS_ANN", true));
this.addSecondaryStructure.setEnabled$Z(structSelected);
this.addTempFactor.setSelected$Z($I$(1).getDefault$S$Z("ADD_TEMPFACT_ANN", true));
this.addTempFactor.setEnabled$Z(structSelected);
var viewerType=$I$(1,"getDefault$S$S",["STRUCTURE_DISPLAY", $I$(16).JMOL.name$()]);
this.structViewer.setSelectedItem$O(viewerType);
var viewerPath="";
var type=null;
try {
type=$I$(16).valueOf$S(viewerType);
switch (type) {
case $I$(16).JMOL:
break;
case $I$(16).CHIMERA:
viewerPath=$I$(1).getDefault$S$S("CHIMERA_PATH", "");
break;
case $I$(16).CHIMERAX:
viewerPath=$I$(1).getDefault$S$S("CHIMERAX_PATH", "");
break;
case $I$(16).PYMOL:
viewerPath=$I$(1).getDefault$S$S("PYMOL_PATH", "");
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
$I$(17).error$S("Unknown structure viewer type: " + viewerType + ", defaulting to Jmol" );
type=$I$(16).JMOL;
} else {
throw e;
}
}
this.structureViewerPath.setText$S(viewerPath);
this.structureViewerPath.addActionListener$java_awt_event_ActionListener(((P$.Preferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (p$1.validateViewerPath.apply(this.b$['jalview.gui.Preferences'], [])) {
var path=this.b$['jalview.gui.Preferences'].structureViewerPath.getText$();
try {
var type=$I$(16).valueOf$S(this.$finals$.viewerType);
switch (type) {
case $I$(16).JMOL:
break;
case $I$(16).CHIMERA:
$I$(1).setProperty$S$S("CHIMERA_PATH", path);
break;
case $I$(16).CHIMERAX:
$I$(1).setProperty$S$S("CHIMERAX_PATH", path);
break;
case $I$(16).PYMOL:
$I$(1).setProperty$S$S("PYMOL_PATH", path);
break;
}
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
$I$(17).error$S$Throwable("Failed to set path - unknown viewer type", x);
} else {
throw x;
}
}
}});
})()
), Clazz.new_(P$.Preferences$1.$init$,[this, {viewerType:viewerType}])));
if ($I$(1).getDefault$S$Z("MAP_WITH_SIFTS", false)) {
this.siftsMapping.setSelected$Z(true);
} else {
this.nwMapping.setSelected$Z(true);
}$I$(18,"setMapWithSifts$Z",[$I$(1).getDefault$S$Z("MAP_WITH_SIFTS", false)]);
this.linkUrlTable.setModel$javax_swing_table_TableModel(C$.dataModel);
var sorter=Clazz.new_([this.linkUrlTable.getModel$()],$I$(19,1).c$$javax_swing_table_TableModel);
this.linkUrlTable.setRowSorter$javax_swing_RowSorter(sorter);
var sortKeys=Clazz.new_($I$(4,1));
var m=this.linkUrlTable.getModel$();
sortKeys.add$O(Clazz.new_([m.getPrimaryColumn$(), $I$(21).DESCENDING],$I$(20,1).c$$I$javax_swing_SortOrder));
sortKeys.add$O(Clazz.new_([m.getSelectedColumn$(), $I$(21).DESCENDING],$I$(20,1).c$$I$javax_swing_SortOrder));
sortKeys.add$O(Clazz.new_([m.getNameColumn$(), $I$(21).ASCENDING],$I$(20,1).c$$I$javax_swing_SortOrder));
sorter.setSortKeys$java_util_List(sortKeys);
var onReset;
onReset=((P$.Preferences$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.Preferences'].filterTB.setText$S("");
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(22,"regexFilter$S$IA",["", Clazz.array(Integer.TYPE, -1, [])]));
});
})()
), Clazz.new_(P$.Preferences$2.$init$,[this, {sorter:sorter}]));
this.doReset.addActionListener$java_awt_event_ActionListener(onReset);
var customUrlFilter=((P$.Preferences$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.RowFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry',  function (entry) {
return (entry.getModel$()).isUserEntry$javax_swing_RowFilter_Entry(entry);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.Preferences$3));
var customSorter=Clazz.new_([this.linkUrlTable.getModel$()],$I$(19,1).c$$javax_swing_table_TableModel);
customSorter.setRowFilter$javax_swing_RowFilter(customUrlFilter);
var onCustomOnly;
onCustomOnly=((P$.Preferences$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.Preferences'].filterTB.setText$S("");
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter(this.$finals$.customUrlFilter);
});
})()
), Clazz.new_(P$.Preferences$4.$init$,[this, {sorter:sorter,customUrlFilter:customUrlFilter}]));
this.userOnly.addActionListener$java_awt_event_ActionListener(onCustomOnly);
this.filterTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.Preferences$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.caseInsensitiveFlag="(?i)";
},1);

C$.$fields$=[['S',['caseInsensitiveFlag']]]

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(22,"regexFilter$S$IA",[this.caseInsensitiveFlag + this.b$['jalview.gui.Preferences'].filterTB.getText$(), Clazz.array(Integer.TYPE, -1, [])]));
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(22,"regexFilter$S$IA",[this.caseInsensitiveFlag + this.b$['jalview.gui.Preferences'].filterTB.getText$(), Clazz.array(Integer.TYPE, -1, [])]));
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.$finals$.sorter.setRowFilter$javax_swing_RowFilter($I$(22,"regexFilter$S$IA",[this.caseInsensitiveFlag + this.b$['jalview.gui.Preferences'].filterTB.getText$(), Clazz.array(Integer.TYPE, -1, [])]));
});
})()
), Clazz.new_(P$.Preferences$5.$init$,[this, {sorter:sorter}])));
this.linkUrlTable.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(Clazz.new_($I$(23,1),[this, null]));
var onClickCol=(this.linkUrlTable.getModel$()).getPrimaryColumn$();
var onClickName=this.linkUrlTable.getColumnName$I(onClickCol);
this.linkUrlTable.getColumn$O(onClickName).setCellRenderer$javax_swing_table_TableCellRenderer(Clazz.new_($I$(24,1),[this, null]));
this.linkUrlTable.getColumn$O(onClickName).setCellEditor$javax_swing_table_TableCellEditor(Clazz.new_($I$(25,1),[this, null]));
for (var column=0; column < this.linkUrlTable.getColumnCount$(); column++) {
if (this.linkUrlTable.getModel$().getColumnClass$I(column).equals$O(Clazz.getClass(Boolean))) {
var tableColumn=this.linkUrlTable.getColumnModel$().getColumn$I(column);
var preferredWidth=tableColumn.getMinWidth$();
var cellRenderer=this.linkUrlTable.getCellRenderer$I$I(0, column);
var c=this.linkUrlTable.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(cellRenderer, 0, column);
var cwidth=c.getPreferredSize$().width + this.linkUrlTable.getIntercellSpacing$().width;
preferredWidth=Math.max(preferredWidth, cwidth);
tableColumn.setPreferredWidth$I(preferredWidth);
}}
var proxyTypeString=$I$(1).getDefault$S$S("USE_PROXY", "false");
this.previousProxyType=proxyTypeString;
switch (proxyTypeString) {
case "none":
this.proxyType.setSelected$javax_swing_ButtonModel$Z(this.noProxy.getModel$(), true);
break;
case "false":
this.proxyType.setSelected$javax_swing_ButtonModel$Z(this.systemProxy.getModel$(), true);
break;
case "true":
this.proxyType.setSelected$javax_swing_ButtonModel$Z(this.customProxy.getModel$(), true);
break;
default:
$I$(17,"warn$S",["Incorrect PROXY_TYPE - should be 'none' (clear proxy properties), 'false' (system settings), 'true' (custom settings): " + proxyTypeString]);
}
this.proxyServerHttpTB.setText$S($I$(1).getDefault$S$S("PROXY_SERVER", ""));
this.proxyPortHttpTB.setText$S($I$(1).getDefault$S$S("PROXY_PORT", ""));
this.proxyServerHttpsTB.setText$S($I$(1).getDefault$S$S("PROXY_SERVER_HTTPS", ""));
this.proxyPortHttpsTB.setText$S($I$(1).getDefault$S$S("PROXY_PORT_HTTPS", ""));
this.proxyAuth.setSelected$Z($I$(1).getDefault$S$Z("PROXY_AUTH", false));
this.proxyAuthUsernameTB.setText$S($I$(1).getDefault$S$S("PROXY_AUTH_USERNAME", ""));
this.proxyAuthPasswordPB.setText$S($I$(1).proxyAuthPassword == null  ? "" :  String.instantialize($I$(1).proxyAuthPassword));
this.setCustomProxyEnabled$();
this.applyProxyButtonEnabled$Z(false);
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

Clazz.newMeth(C$, 'setupOutputCombo$javax_swing_JComboBox$S',  function (comboBox, propertyKey) {
comboBox.addItem$O(this.promptEachTimeOpt);
comboBox.addItem$O(this.lineArtOpt);
comboBox.addItem$O(this.textOpt);
var defaultOption=$I$(8).isJS$() ? "Text" : $I$(1).getDefault$S$S(propertyKey, "Prompt each time");
if (defaultOption.equalsIgnoreCase$S("Text")) {
comboBox.setSelectedItem$O(this.textOpt);
} else if (defaultOption.equalsIgnoreCase$S("Lineart")) {
comboBox.setSelectedItem$O(this.lineArtOpt);
} else {
comboBox.setSelectedItem$O(this.promptEachTimeOpt);
}});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!p$1.validateSettings.apply(this, [])) {
return;
}this.saveProxySettings$();
$I$(1).applicationProperties.setProperty$S$S("SHOW_JVSUFFIX", Boolean.toString$Z(this.seqLimit.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("RIGHT_ALIGN_IDS", Boolean.toString$Z(this.rightAlign.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_FULLSCREEN", Boolean.toString$Z(this.fullScreen.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_OVERVIEW", Boolean.toString$Z(this.openoverv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_ANNOTATIONS", Boolean.toString$Z(this.annotations.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_CONSERVATION", Boolean.toString$Z(this.conservation.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_QUALITY", Boolean.toString$Z(this.quality.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_IDENTITY", Boolean.toString$Z(this.identity.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("GAP_SYMBOL", this.gapSymbolCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("FONT_NAME", this.fontNameCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("FONT_STYLE", this.fontStyleCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("FONT_SIZE", this.fontSizeCB.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("ID_ITALICS", Boolean.toString$Z(this.idItalics.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_UNCONSERVED", Boolean.toString$Z(this.showUnconserved.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_OCCUPANCY", Boolean.toString$Z(this.showOccupancy.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_GROUP_CONSENSUS", Boolean.toString$Z(this.showGroupConsensus.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_GROUP_CONSERVATION", Boolean.toString$Z(this.showGroupConservation.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_CONSENSUS_HISTOGRAM", Boolean.toString$Z(this.showConsensHistogram.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_CONSENSUS_LOGO", Boolean.toString$Z(this.showConsensLogo.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("ANTI_ALIAS", Boolean.toString$Z(this.smoothFont.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SCALE_PROTEIN_TO_CDNA", Boolean.toString$Z(this.scaleProteinToCdna.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_NPFEATS_TOOLTIP", Boolean.toString$Z(this.showNpTooltip.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_DBREFS_TOOLTIP", Boolean.toString$Z(this.showDbRefTooltip.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("WRAP_ALIGNMENT", Boolean.toString$Z(this.wrap.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("STARTUP_FILE", this.startupFileTextfield.getText$());
$I$(1).applicationProperties.setProperty$S$S("SHOW_STARTUP_FILE", Boolean.toString$Z(this.startupCheckbox.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SORT_ALIGNMENT", this.sortby.getSelectedItem$().toString());
var annSortOrder=$I$(12,"forDescription$S",[this.sortAnnBy.getSelectedItem$().toString()]);
if (annSortOrder != null ) {
$I$(1).applicationProperties.setProperty$S$S("SORT_ANNOTATIONS", annSortOrder.name$());
}var showAutocalcFirst=this.sortAutocalc.getSelectedIndex$() == 0;
$I$(1).applicationProperties.setProperty$S$S("SHOW_AUTOCALC_ABOVE", Boolean.valueOf$Z(showAutocalcFirst).toString());
$I$(1).applicationProperties.setProperty$S$S("DEFAULT_COLOUR_PROT", this.protColour.getSelectedItem$().toString());
$I$(1).applicationProperties.setProperty$S$S("DEFAULT_COLOUR_NUC", this.nucColour.getSelectedItem$().toString());
$I$(1,"setColourProperty$S$java_awt_Color",["ANNOTATIONCOLOUR_MIN", this.minColour.getBackground$()]);
$I$(1,"setColourProperty$S$java_awt_Color",["ANNOTATIONCOLOUR_MAX", this.maxColour.getBackground$()]);
$I$(1,"setColourProperty$S$java_awt_Color",["GAP_COLOUR", this.gapColour.getBackground$()]);
$I$(1,"setColourProperty$S$java_awt_Color",["HIDDEN_COLOUR", this.hiddenColour.getBackground$()]);
$I$(1).applicationProperties.setProperty$S$S("USE_LEGACY_GAP", Boolean.toString$Z(this.useLegacyGap.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SHOW_OV_HIDDEN_AT_START", Boolean.toString$Z(this.showHiddenAtStart.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("ADD_TEMPFACT_ANN", Boolean.toString$Z(this.addTempFactor.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("ADD_SS_ANN", Boolean.toString$Z(this.addSecondaryStructure.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("STRUCT_FROM_PDB", Boolean.toString$Z(this.structFromPdb.isSelected$()));
var viewer=this.structViewer.getSelectedItem$().toString();
var viewerPath=this.structureViewerPath.getText$();
$I$(1).applicationProperties.setProperty$S$S("STRUCTURE_DISPLAY", viewer);
if (viewer.equals$O($I$(16).CHIMERA.name$())) {
$I$(1).setOrRemove$S$S("CHIMERA_PATH", viewerPath);
} else if (viewer.equals$O($I$(16).CHIMERAX.name$())) {
$I$(1).setOrRemove$S$S("CHIMERAX_PATH", viewerPath);
} else if (viewer.equals$O($I$(16).PYMOL.name$())) {
$I$(1).setOrRemove$S$S("PYMOL_PATH", viewerPath);
}$I$(1).applicationProperties.setProperty$S$S("MAP_WITH_SIFTS", Boolean.toString$Z(this.siftsMapping.isSelected$()));
$I$(18,"setMapWithSifts$Z",[this.siftsMapping.isSelected$()]);
$I$(1).applicationProperties.setProperty$S$S("EPS_RENDERING", (this.epsRendering.getSelectedItem$()).getCode$());
$I$(1).applicationProperties.setProperty$S$S("HTML_RENDERING", (this.htmlRendering.getSelectedItem$()).getCode$());
$I$(1).applicationProperties.setProperty$S$S("SVG_RENDERING", (this.svgRendering.getSelectedItem$()).getCode$());
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
$I$(1,"setProperty$S$S",["VERSION_CHECK", Boolean.toString$Z(this.versioncheck.isSelected$())]);
if ($I$(1).getProperty$S("USAGESTATS") != null  || this.usagestats.isSelected$() ) {
$I$(1,"setProperty$S$S",["USAGESTATS", Boolean.toString$Z(this.usagestats.isSelected$())]);
}if (!this.questionnaire.isSelected$()) {
$I$(1).setProperty$S$S("NOQUESTIONNAIRES", "true");
} else {
$I$(1).removeProperty$S("NOQUESTIONNAIRES");
}$I$(1).applicationProperties.setProperty$S$S("BLC_JVSUFFIX", Boolean.toString$Z(this.blcjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("CLUSTAL_JVSUFFIX", Boolean.toString$Z(this.clustaljv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("FASTA_JVSUFFIX", Boolean.toString$Z(this.fastajv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("MSF_JVSUFFIX", Boolean.toString$Z(this.msfjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PFAM_JVSUFFIX", Boolean.toString$Z(this.pfamjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PILEUP_JVSUFFIX", Boolean.toString$Z(this.pileupjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PIR_JVSUFFIX", Boolean.toString$Z(this.pirjv.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PIR_MODELLER", Boolean.toString$Z(this.modellerOutput.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("EXPORT_EMBBED_BIOJSON", Boolean.toString$Z(this.embbedBioJSON.isSelected$()));
$I$(26).useModellerOutput=this.modellerOutput.isSelected$();
$I$(1).applicationProperties.setProperty$S$S("FIGURE_AUTOIDWIDTH", Boolean.toString$Z(this.autoIdWidth.isSelected$()));
this.userIdWidth_actionPerformed$();
$I$(1).applicationProperties.setProperty$S$S("FIGURE_FIXEDIDWIDTH", this.userIdWidth.getText$());
$I$(1).applicationProperties.setProperty$S$S("AUTO_CALC_CONSENSUS", Boolean.toString$Z(this.autoCalculateConsCheck.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("SORT_BY_TREE", Boolean.toString$Z(this.sortByTree.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S("PAD_GAPS", Boolean.toString$Z(this.padGaps.isSelected$()));
if (!$I$(8).isJS$()) {
this.wsPrefs.updateAndRefreshWsMenuConfig$Z(false);
}$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_ENABLED", Boolean.toString$Z(this.enableBackupFiles.isSelected$()));
var preset=this.getComboIntStringKey$javax_swing_JComboBox(this.backupfilesPresetsCombo);
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_PRESET", Integer.toString$I(preset));
if (preset == 0) {
var customBFPE=this.getBackupfilesCurrentEntry$();
$I$(27).backupfilesPresetEntriesValues.put$O$O(Integer.valueOf$I(0), customBFPE);
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_CUSTOM", customBFPE.toString());
}var savedBFPE=$I$(27).backupfilesPresetEntriesValues.get$O(Integer.valueOf$I(preset));
$I$(1).applicationProperties.setProperty$S$S("BACKUPFILES_SAVED", savedBFPE.toString());
$I$(1).applicationProperties.setProperty$S$S("MEMORY_CUSTOMISED_SETTINGS", Boolean.toString$Z(this.customiseMemorySetting.isSelected$()));
$I$(1).applicationProperties.setProperty$S$S($I$(28).MEMORY_JVMMEMPC, Integer.toString$I(this.jvmMemoryPercentSlider.getValue$()));
$I$(1).applicationProperties.setProperty$S$S($I$(28).MEMORY_JVMMEMMAX, this.jvmMemoryMaxTextField.getText$());
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

Clazz.newMeth(C$, 'saveProxySettings$',  function () {
var newProxyType=this.customProxy.isSelected$() ? "true" : this.noProxy.isSelected$() ? "none" : "false";
$I$(1).applicationProperties.setProperty$S$S("USE_PROXY", newProxyType);
$I$(1,"setOrRemove$S$S",["PROXY_SERVER", this.proxyServerHttpTB.getText$()]);
$I$(1,"setOrRemove$S$S",["PROXY_PORT", this.proxyPortHttpTB.getText$()]);
$I$(1,"setOrRemove$S$S",["PROXY_SERVER_HTTPS", this.proxyServerHttpsTB.getText$()]);
$I$(1,"setOrRemove$S$S",["PROXY_PORT_HTTPS", this.proxyPortHttpsTB.getText$()]);
$I$(1,"setOrRemove$S$S",["PROXY_AUTH", Boolean.toString$Z(this.proxyAuth.isSelected$())]);
$I$(1,"setOrRemove$S$S",["PROXY_AUTH_USERNAME", this.proxyAuthUsernameTB.getText$()]);
$I$(1).proxyAuthPassword=this.proxyAuthPasswordPB.getPassword$();
$I$(1).setProxyPropertiesFromPreferences$S(this.previousProxyType);
if (newProxyType.equals$O("true") || !newProxyType.equals$O(this.previousProxyType) ) {
(this.wsPrefs.update=Long.$inc(this.wsPrefs.update,1));
}this.previousProxyType=newProxyType;
});

Clazz.newMeth(C$, 'validateSettings',  function () {
if (!this.validateStructure$()) {
this.structureTab.requestFocusInWindow$();
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'validateStructure$',  function () {
return p$1.validateViewerPath.apply(this, []);
});

Clazz.newMeth(C$, 'startupFileTextfield_mouseClicked$',  function () {
var fileFormat=$I$(1).getProperty$S("DEFAULT_FILE_FORMAT");
var chooser=$I$(29,"forRead$S$S",[$I$(1).getProperty$S("LAST_DIRECTORY"), fileFormat]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(30,1)));
chooser.setDialogTitle$S($I$(6).getString$S("label.select_startup_file"));
var value=chooser.showOpenDialog$java_awt_Component(this);
if (value == 0) {
var format=chooser.getSelectedFormat$();
if (format != null ) {
$I$(1).applicationProperties.setProperty$S$S("DEFAULT_FILE_FORMAT", format.getName$());
}this.startupFileTextfield.setText$S(chooser.getSelectedFile$().getAbsolutePath$());
}});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent',  function (e) {
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

Clazz.newMeth(C$, 'annotations_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.conservation.setEnabled$Z(this.annotations.isSelected$());
this.quality.setEnabled$Z(this.annotations.isSelected$());
this.identity.setEnabled$Z(this.annotations.isSelected$());
this.showOccupancy.setEnabled$Z(this.annotations.isSelected$());
this.showGroupConsensus.setEnabled$Z(this.annotations.isSelected$());
this.showGroupConservation.setEnabled$Z(this.annotations.isSelected$());
this.showConsensHistogram.setEnabled$Z(this.annotations.isSelected$() && (this.identity.isSelected$() || this.showGroupConsensus.isSelected$() ) );
this.showConsensLogo.setEnabled$Z(this.annotations.isSelected$() && (this.identity.isSelected$() || this.showGroupConsensus.isSelected$() ) );
});

Clazz.newMeth(C$, 'newLink_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var link=Clazz.new_($I$(31,1));
var valid=false;
while (!valid){
if ($I$(32,"showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon",[$I$(9).desktop, link, $I$(6).getString$S("label.new_sequence_url_link"), 2, -1, null]) == 0) {
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

Clazz.newMeth(C$, 'editLink_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var link=Clazz.new_($I$(31,1));
var index=this.linkUrlTable.getSelectedRow$();
if (index == -1) {
$I$(17).debug$S("Edit with no row selected in linkUrlTable");
return;
}var nameCol=(this.linkUrlTable.getModel$()).getNameColumn$();
var urlCol=(this.linkUrlTable.getModel$()).getUrlColumn$();
var oldName=this.linkUrlTable.getValueAt$I$I(index, nameCol).toString();
link.setName$S(oldName);
link.setURL$S(this.linkUrlTable.getValueAt$I$I(index, urlCol).toString());
var valid=false;
while (!valid){
if ($I$(32,"showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon",[$I$(9).desktop, link, $I$(6).getString$S("label.edit_sequence_url_link"), 2, -1, null]) == 0) {
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

Clazz.newMeth(C$, 'deleteLink_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var index=this.linkUrlTable.getSelectedRow$();
var modelIndex=-1;
if (index == -1) {
$I$(17).debug$S("Delete with no row selected in linkUrlTable");
return;
} else {
modelIndex=this.linkUrlTable.convertRowIndexToModel$I(index);
}(this.linkUrlTable.getModel$()).removeRow$I(modelIndex);
});

Clazz.newMeth(C$, 'showunconserved_actionPerformed$java_awt_event_ActionEvent',  function (e) {
C$.superclazz.prototype.showunconserved_actionPerformed$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getGroupURLLinks$',  function () {
return C$.groupURLLinks;
}, 1);

Clazz.newMeth(C$, 'minColour_actionPerformed$javax_swing_JPanel',  function (panel) {
$I$(33,"showColourChooser$java_awt_Component$S$javax_swing_JComponent",[this, $I$(6).getString$S("label.select_colour_minimum_value"), panel]);
});

Clazz.newMeth(C$, 'maxColour_actionPerformed$javax_swing_JPanel',  function (panel) {
$I$(33,"showColourChooser$java_awt_Component$S$javax_swing_JComponent",[this, $I$(6).getString$S("label.select_colour_maximum_value"), panel]);
});

Clazz.newMeth(C$, 'gapColour_actionPerformed$javax_swing_JPanel',  function (gap) {
if (!this.useLegacyGap.isSelected$()) {
$I$(33,"showColourChooser$java_awt_Component$S$javax_swing_JComponent",[this, $I$(6).getString$S("label.select_gap_colour"), gap]);
}});

Clazz.newMeth(C$, 'hiddenColour_actionPerformed$javax_swing_JPanel',  function (hidden) {
$I$(33,"showColourChooser$java_awt_Component$S$javax_swing_JComponent",[this, $I$(6).getString$S("label.select_hidden_colour"), hidden]);
});

Clazz.newMeth(C$, 'useLegacyGaps_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var enabled=this.useLegacyGap.isSelected$();
if (enabled) {
this.gapColour.setBackground$java_awt_Color($I$(15).OVERVIEW_DEFAULT_LEGACY_GAP);
} else {
this.gapColour.setBackground$java_awt_Color($I$(15).OVERVIEW_DEFAULT_GAP);
}this.gapColour.setEnabled$Z(!enabled);
this.gapLabel.setEnabled$Z(!enabled);
});

Clazz.newMeth(C$, 'resetOvDefaults_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.useLegacyGap.setSelected$Z(false);
this.useLegacyGaps_actionPerformed$java_awt_event_ActionEvent(null);
this.showHiddenAtStart.setSelected$Z(false);
this.hiddenColour.setBackground$java_awt_Color($I$(15).OVERVIEW_DEFAULT_HIDDEN);
});

Clazz.newMeth(C$, 'userIdWidth_actionPerformed$',  function () {
try {
var val=this.userIdWidth.getText$().trim$();
if (val.length$() > 0) {
var iw=Integer.valueOf$I(Integer.parseInt$S(val));
if (iw.intValue$() < 12) {
throw Clazz.new_(Clazz.load('NumberFormatException'));
}this.userIdWidth.setText$S(iw.toString());
}} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
this.userIdWidth.setText$S("");
$I$(32,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(9).desktop, $I$(6).getString$S("warn.user_defined_width_requirements"), $I$(6).getString$S("label.invalid_id_column_width"), 2]);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'autoIdWidth_actionPerformed$',  function () {
this.userIdWidth.setEnabled$Z(!this.autoIdWidth.isSelected$());
this.userIdWidthlabel.setEnabled$Z(!this.autoIdWidth.isSelected$());
});

Clazz.newMeth(C$, 'validateViewerPath',  function () {
if (this.structureViewerPath.getText$().trim$().length$() > 0) {
var f=Clazz.new_([this.structureViewerPath.getText$()],$I$(34,1).c$$S);
if (!f.canExecute$()) {
$I$(32,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(9).desktop, $I$(6).getString$S("label.invalid_viewer_path"), $I$(6).getString$S("label.invalid_viewer_path"), 0]);
return false;
}}return true;
}, p$1);

Clazz.newMeth(C$, 'structureViewer_actionPerformed$S',  function (selectedItem) {
if (selectedItem.equals$O($I$(16).JMOL.name$())) {
this.structureViewerPath.setEnabled$Z(false);
this.structureViewerPathLabel.setEnabled$Z(false);
return;
}var found=false;
this.structureViewerPath.setEnabled$Z(true);
this.structureViewerPathLabel.setEnabled$Z(true);
this.structureViewerPathLabel.setText$S($I$(6,"formatMessage$S$OA",["label.viewer_path", Clazz.array(java.lang.Object, -1, [selectedItem])]));
var viewerPath="";
var paths=null;
try {
var viewerType=$I$(16).valueOf$S(selectedItem);
switch (viewerType) {
case $I$(16).JMOL:
break;
case $I$(16).CHIMERA:
viewerPath=$I$(1).getDefault$S$S("CHIMERA_PATH", "");
paths=$I$(35).getChimeraPaths$Z(false);
break;
case $I$(16).CHIMERAX:
viewerPath=$I$(1).getDefault$S$S("CHIMERAX_PATH", "");
paths=$I$(35).getChimeraPaths$Z(true);
break;
case $I$(16).PYMOL:
viewerPath=$I$(1).getDefault$S$S("PYMOL_PATH", "");
paths=$I$(36).getPymolPaths$();
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
} else {
throw e;
}
}
this.structureViewerPath.setText$S(viewerPath);
paths.add$I$O(0, this.structureViewerPath.getText$());
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (Clazz.new_([path.trim$()],$I$(34,1).c$$S).canExecute$()) {
found=true;
break;
}}
if (!found) {
var options=Clazz.array(String, -1, ["OK", "Help"]);
var showHelp=$I$(37,"showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[$I$(9).desktop, $I$(38,"wrapTooltip$Z$S",[true, $I$(6).getString$S("label.viewer_missing")]), "", 0, 2, null, options, options[0]]);
if (showHelp == 1) {
this.selectTab$jalview_jbgui_GPreferences_TabRef$S($I$(39).STRUCTURE_TAB, null);
try {
$I$(40,"showHelpWindow$jalview_gui_Help_HelpId",[$I$(41).StructureViewer]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.help.HelpSetException")){
e.printStackTrace$();
} else {
throw e;
}
}
} else if (showHelp == 0) {
this.selectTab$jalview_jbgui_GPreferences_TabRef$S($I$(39).STRUCTURE_TAB, null);
var cf=$I$(42,"runAsync$Runnable",[((P$.Preferences$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Preferences$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
try {
for (var i=0; i < 3; i++) {
this.b$['jalview.gui.Preferences'].structureViewerPath.setBackground$java_awt_Color($I$(14).PINK);
$I$(43).sleep$J(500);
this.b$['jalview.gui.Preferences'].structureViewerPath.setBackground$java_awt_Color($I$(14).WHITE);
$I$(43).sleep$J(500);
}
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.Preferences$lambda1.$init$,[this, null]))]);
}}});

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=null;
{
var inMenuString=$I$(1).getDefault$S$S("SEQUENCE_LINKS", "");
var notInMenuString=$I$(1).getDefault$S$S("STORED_LINKS", "");
var defaultUrl=$I$(1).getDefault$S$S("DEFAULT_URL", "EMBL-EBI Search");
if (inMenuString.isEmpty$() && notInMenuString.isEmpty$() ) {
inMenuString="EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$";
}var factory=Clazz.new_($I$(2,1).c$$S$S$S,[defaultUrl, inMenuString, notInMenuString]);
C$.sequenceUrlLinks=factory.createUrlProvider$();
C$.dataModel=Clazz.new_($I$(3,1).c$$jalview_urls_api_UrlProviderI,[C$.sequenceUrlLinks]);
C$.groupURLLinks=Clazz.new_($I$(4,1));
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Preferences, "OptionsParam", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','code']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, code) {
;C$.$init$.apply(this);
this.name=name;
this.code=code;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getCode$',  function () {
return this.code;
});

Clazz.newMeth(C$, 'setCode$S',  function (code) {
this.code=code;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
if (!(Clazz.instanceOf(that, "jalview.gui.Preferences.OptionsParam"))) {
return false;
}return this.code.equalsIgnoreCase$S((that).code);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.name.hashCode$() + this.code.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Preferences, "UrlListSelectionHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ListSelectionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
var lsm=e.getSource$();
var index=lsm.getMinSelectionIndex$();
if (index == -1) {
this.b$['jalview.gui.Preferences'].editLink.setEnabled$Z(false);
this.b$['jalview.gui.Preferences'].deleteLink.setEnabled$Z(false);
return;
}var modelIndex=this.b$['jalview.gui.Preferences'].linkUrlTable.convertRowIndexToModel$I(index);
if ((this.b$['jalview.gui.Preferences'].linkUrlTable.getModel$()).isRowDeletable$I(modelIndex)) {
this.b$['jalview.gui.Preferences'].deleteLink.setEnabled$Z(true);
} else {
this.b$['jalview.gui.Preferences'].deleteLink.setEnabled$Z(false);
}if ((this.b$['jalview.gui.Preferences'].linkUrlTable.getModel$()).isRowEditable$I(modelIndex)) {
this.b$['jalview.gui.Preferences'].editLink.setEnabled$Z(true);
} else {
this.b$['jalview.gui.Preferences'].editLink.setEnabled$Z(false);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
