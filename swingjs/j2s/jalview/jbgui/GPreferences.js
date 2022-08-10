(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'jalview.util.MessageManager','javax.swing.JRadioButton','jalview.gui.JvSwingUtils','javax.swing.JCheckBox','javax.swing.JComboBox','javax.swing.JTextField','javax.swing.ButtonGroup','javax.swing.JPanel','javax.swing.JTable','javax.swing.JButton','javax.swing.JLabel','javax.swing.JPasswordField','javax.swing.JSpinner','jalview.gui.JalviewBooleanRadioButtons','javax.swing.JTextArea','javax.swing.JTabbedPane','javax.swing.JSlider','java.awt.BorderLayout','jalview.util.Platform','java.awt.Color',['jalview.jbgui.GPreferences','.TabRef'],'java.awt.Rectangle','javax.swing.border.TitledBorder','java.awt.GridLayout','java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.Insets','javax.swing.JScrollPane','jalview.bin.Cache','StringBuilder','java.awt.FlowLayout','javax.swing.BorderFactory','java.awt.Dimension','java.awt.event.MouseAdapter',['jalview.gui.StructureViewer','.ViewerType'],'jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'jalview.fts.service.pdb.PDBFTSRestClient','javax.swing.JFileChooser','javax.swing.DefaultListCellRenderer','javax.swing.border.EtchedBorder','javax.swing.border.EmptyBorder','jalview.io.BackupFilesPresetEntry','jalview.bin.MemorySetting','javax.swing.BoxLayout','jalview.util.StringUtils','java.util.Arrays','jalview.bin.Console','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.io.BackupFilenameParts','javax.swing.SpinnerNumberModel']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GPreferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['TabRef',25],['RadioButtonRenderer',1],['RadioButtonEditor',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fullScreen=Clazz.new_($I$(4,1));
this.openoverv=Clazz.new_($I$(4,1));
this.seqLimit=Clazz.new_($I$(4,1));
this.rightAlign=Clazz.new_($I$(4,1));
this.fontSizeCB=Clazz.new_($I$(5,1));
this.fontStyleCB=Clazz.new_($I$(5,1));
this.fontNameCB=Clazz.new_($I$(5,1));
this.showOccupancy=Clazz.new_($I$(4,1));
this.showUnconserved=Clazz.new_($I$(4,1));
this.idItalics=Clazz.new_($I$(4,1));
this.smoothFont=Clazz.new_($I$(4,1));
this.scaleProteinToCdna=Clazz.new_($I$(4,1));
this.gapSymbolCB=Clazz.new_($I$(5,1));
this.wrap=Clazz.new_($I$(4,1));
this.sortby=Clazz.new_($I$(5,1));
this.sortAnnBy=Clazz.new_($I$(5,1));
this.sortAutocalc=Clazz.new_($I$(5,1));
this.startupCheckbox=Clazz.new_($I$(4,1));
this.startupFileTextfield=Clazz.new_($I$(6,1));
this.annotations=Clazz.new_($I$(4,1));
this.quality=Clazz.new_($I$(4,1));
this.conservation=Clazz.new_($I$(4,1));
this.identity=Clazz.new_($I$(4,1));
this.showGroupConsensus=Clazz.new_($I$(4,1));
this.showGroupConservation=Clazz.new_($I$(4,1));
this.showConsensHistogram=Clazz.new_($I$(4,1));
this.showConsensLogo=Clazz.new_($I$(4,1));
this.showDbRefTooltip=Clazz.new_($I$(4,1));
this.showNpTooltip=Clazz.new_($I$(4,1));
this.structFromPdb=Clazz.new_($I$(4,1));
this.addSecondaryStructure=Clazz.new_($I$(4,1));
this.addTempFactor=Clazz.new_($I$(4,1));
this.structViewer=Clazz.new_($I$(5,1));
this.structureViewerPath=Clazz.new_($I$(6,1));
this.mappingMethod=Clazz.new_($I$(7,1));
this.siftsMapping=Clazz.new_($I$(2,1));
this.nwMapping=Clazz.new_($I$(2,1));
this.minColour=Clazz.new_($I$(8,1));
this.maxColour=Clazz.new_($I$(8,1));
this.protColour=Clazz.new_($I$(5,1));
this.nucColour=Clazz.new_($I$(5,1));
this.gapColour=Clazz.new_($I$(8,1));
this.hiddenColour=Clazz.new_($I$(8,1));
this.linkUrlTable=Clazz.new_($I$(9,1));
this.editLink=Clazz.new_($I$(10,1));
this.deleteLink=Clazz.new_($I$(10,1));
this.filterTB=Clazz.new_($I$(6,1));
this.doReset=Clazz.new_($I$(10,1));
this.userOnly=Clazz.new_($I$(10,1));
this.httpLabel=Clazz.new_($I$(11,1));
this.httpsLabel=Clazz.new_($I$(11,1));
this.portLabel=Clazz.new_($I$(11,1));
this.serverLabel=Clazz.new_($I$(11,1));
this.portLabel2=Clazz.new_($I$(11,1));
this.serverLabel2=Clazz.new_($I$(11,1));
this.proxyAuthUsernameLabel=Clazz.new_($I$(11,1));
this.proxyAuthPasswordLabel=Clazz.new_($I$(11,1));
this.passwordNotStoredLabel=Clazz.new_($I$(11,1));
this.proxyServerHttpTB=Clazz.new_($I$(6,1));
this.proxyPortHttpTB=Clazz.new_($I$(6,1));
this.proxyServerHttpsTB=Clazz.new_($I$(6,1));
this.proxyPortHttpsTB=Clazz.new_($I$(6,1));
this.proxyAuth=Clazz.new_($I$(4,1));
this.proxyAuthUsernameTB=Clazz.new_($I$(6,1));
this.proxyAuthPasswordPB=Clazz.new_($I$(12,1));
this.proxyType=Clazz.new_($I$(7,1));
this.noProxy=Clazz.new_($I$(2,1));
this.systemProxy=Clazz.new_($I$(2,1));
this.customProxy=Clazz.new_($I$(2,1));
this.applyProxyButton=Clazz.new_($I$(10,1));
this.usagestats=Clazz.new_($I$(4,1));
this.questionnaire=Clazz.new_($I$(4,1));
this.versioncheck=Clazz.new_($I$(4,1));
this.epsRendering=Clazz.new_($I$(5,1));
this.htmlRendering=Clazz.new_($I$(5,1));
this.svgRendering=Clazz.new_($I$(5,1));
this.userIdWidthlabel=Clazz.new_($I$(11,1));
this.autoIdWidth=Clazz.new_($I$(4,1));
this.userIdWidth=Clazz.new_($I$(6,1));
this.blcjv=Clazz.new_($I$(4,1));
this.pileupjv=Clazz.new_($I$(4,1));
this.clustaljv=Clazz.new_($I$(4,1));
this.msfjv=Clazz.new_($I$(4,1));
this.fastajv=Clazz.new_($I$(4,1));
this.pfamjv=Clazz.new_($I$(4,1));
this.pirjv=Clazz.new_($I$(4,1));
this.modellerOutput=Clazz.new_($I$(4,1));
this.embbedBioJSON=Clazz.new_($I$(4,1));
this.autoCalculateConsCheck=Clazz.new_($I$(4,1));
this.padGaps=Clazz.new_($I$(4,1));
this.sortByTree=Clazz.new_($I$(4,1));
this.wsTab=Clazz.new_($I$(8,1));
this.enableBackupFiles=Clazz.new_($I$(4,1));
this.presetsPanel=Clazz.new_($I$(8,1));
this.presetsComboLabel=Clazz.new_($I$(11,1));
this.customiseCheckbox=Clazz.new_($I$(4,1));
this.revertButton=Clazz.new_($I$(10,1));
this.backupfilesPresetsCombo=Clazz.new_($I$(5,1));
this.backupfilesPresetsComboLastSelected=0;
this.suffixPanel=Clazz.new_($I$(8,1));
this.keepfilesPanel=Clazz.new_($I$(8,1));
this.exampleFilesPanel=Clazz.new_($I$(8,1));
this.suffixTemplate=Clazz.new_($I$(6,1).c$$S$I,[null, 8]);
this.suffixTemplateLabel=Clazz.new_($I$(11,1));
this.suffixDigitsLabel=Clazz.new_($I$(11,1));
this.suffixDigitsSpinner=Clazz.new_($I$(13,1));
this.suffixReverse=Clazz.new_($I$(14,1));
this.backupfilesKeepAll=Clazz.new_($I$(14,1));
this.backupfilesRollMaxSpinner=Clazz.new_($I$(13,1));
this.oldBackupFilesLabel=Clazz.new_($I$(11,1));
this.backupfilesConfirmDelete=Clazz.new_($I$(14,1));
this.backupfilesExampleLabel=Clazz.new_($I$(15,1));
this.tabbedPane=Clazz.new_($I$(16,1));
this.messageLabel=Clazz.new_($I$(11,1).c$$S$I,["", 0]);
this.customiseMemorySetting=Clazz.new_($I$(4,1));
this.exampleMemoryLabel=Clazz.new_($I$(11,1));
this.exampleMemoryMessageTextArea=Clazz.new_($I$(15,1));
this.maxMemoryLabel=Clazz.new_($I$(11,1));
this.jvmMemoryPercentLabel=Clazz.new_($I$(11,1));
this.jvmMemoryPercentSlider=Clazz.new_($I$(17,1));
this.jvmMemoryPercentDisplay=Clazz.new_($I$(11,1));
this.jvmMemoryMaxLabel=Clazz.new_($I$(11,1));
this.jvmMemoryMaxTextField=Clazz.new_($I$(6,1).c$$S$I,[null, 8]);
this.lafCombo=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['I',['backupfilesPresetsComboLastSelected'],'O',['fullScreen','javax.swing.JCheckBox','+openoverv','+seqLimit','+rightAlign','fontSizeCB','javax.swing.JComboBox','+fontStyleCB','+fontNameCB','showOccupancy','javax.swing.JCheckBox','+showUnconserved','+idItalics','+smoothFont','+scaleProteinToCdna','gapSymbolCB','javax.swing.JComboBox','wrap','javax.swing.JCheckBox','sortby','javax.swing.JComboBox','+sortAnnBy','+sortAutocalc','startupCheckbox','javax.swing.JCheckBox','startupFileTextfield','javax.swing.JTextField','annotations','javax.swing.JCheckBox','+quality','+conservation','+identity','+showGroupConsensus','+showGroupConservation','+showConsensHistogram','+showConsensLogo','+showDbRefTooltip','+showNpTooltip','structureTab','javax.swing.JPanel','structFromPdb','javax.swing.JCheckBox','+addSecondaryStructure','+addTempFactor','structViewer','javax.swing.JComboBox','structureViewerPathLabel','javax.swing.JLabel','structureViewerPath','javax.swing.JTextField','mappingMethod','javax.swing.ButtonGroup','siftsMapping','javax.swing.JRadioButton','+nwMapping','minColour','javax.swing.JPanel','+maxColour','protColour','javax.swing.JComboBox','+nucColour','gapColour','javax.swing.JPanel','+hiddenColour','useLegacyGap','javax.swing.JCheckBox','+showHiddenAtStart','gapLabel','javax.swing.JLabel','connectTab','javax.swing.JPanel','linkUrlTable','javax.swing.JTable','editLink','javax.swing.JButton','+deleteLink','filterTB','javax.swing.JTextField','doReset','javax.swing.JButton','+userOnly','httpLabel','javax.swing.JLabel','+httpsLabel','+portLabel','+serverLabel','+portLabel2','+serverLabel2','+proxyAuthUsernameLabel','+proxyAuthPasswordLabel','+passwordNotStoredLabel','proxyServerHttpTB','javax.swing.JTextField','+proxyPortHttpTB','+proxyServerHttpsTB','+proxyPortHttpsTB','proxyAuth','javax.swing.JCheckBox','proxyAuthUsernameTB','javax.swing.JTextField','proxyAuthPasswordPB','javax.swing.JPasswordField','proxyType','javax.swing.ButtonGroup','noProxy','javax.swing.JRadioButton','+systemProxy','+customProxy','applyProxyButton','javax.swing.JButton','usagestats','javax.swing.JCheckBox','+questionnaire','+versioncheck','epsRendering','javax.swing.JComboBox','+htmlRendering','+svgRendering','userIdWidthlabel','javax.swing.JLabel','autoIdWidth','javax.swing.JCheckBox','userIdWidth','javax.swing.JTextField','blcjv','javax.swing.JCheckBox','+pileupjv','+clustaljv','+msfjv','+fastajv','+pfamjv','+pirjv','+modellerOutput','+embbedBioJSON','+autoCalculateConsCheck','+padGaps','+sortByTree','wsTab','javax.swing.JPanel','enableBackupFiles','javax.swing.JCheckBox','presetsPanel','javax.swing.JPanel','presetsComboLabel','javax.swing.JLabel','customiseCheckbox','javax.swing.JCheckBox','revertButton','javax.swing.JButton','backupfilesPresetsCombo','javax.swing.JComboBox','suffixPanel','javax.swing.JPanel','+keepfilesPanel','+exampleFilesPanel','suffixTemplate','javax.swing.JTextField','suffixTemplateLabel','javax.swing.JLabel','+suffixDigitsLabel','suffixDigitsSpinner','javax.swing.JSpinner','suffixReverse','jalview.gui.JalviewBooleanRadioButtons','+backupfilesKeepAll','backupfilesRollMaxSpinner','javax.swing.JSpinner','oldBackupFilesLabel','javax.swing.JLabel','backupfilesConfirmDelete','jalview.gui.JalviewBooleanRadioButtons','backupfilesExampleLabel','javax.swing.JTextArea','tabbedPane','javax.swing.JTabbedPane','messageLabel','javax.swing.JLabel','customiseMemorySetting','javax.swing.JCheckBox','exampleMemoryLabel','javax.swing.JLabel','exampleMemoryMessageTextArea','javax.swing.JTextArea','maxMemoryLabel','javax.swing.JLabel','+jvmMemoryPercentLabel','jvmMemoryPercentSlider','javax.swing.JSlider','jvmMemoryPercentDisplay','javax.swing.JLabel','+jvmMemoryMaxLabel','jvmMemoryMaxTextField','javax.swing.JTextField','lafCombo','javax.swing.JComboBox']]
,['O',['LABEL_FONT','java.awt.Font','+LABEL_FONT_ITALIC','+LABEL_FONT_BOLD']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18,1)));
this.add$java_awt_Component$O(this.messageLabel, "North");
var okCancelPanel=p$1.initOkCancelPanel.apply(this, []);
this.add$java_awt_Component$O(this.tabbedPane, "Center");
this.add$java_awt_Component$O(okCancelPanel, "South");
this.tabbedPane.add$java_awt_Component$O(p$1.initVisualTab.apply(this, []), $I$(1).getString$S("label.visual"));
this.tabbedPane.add$java_awt_Component$O(p$1.initColoursTab.apply(this, []), $I$(1).getString$S("label.colours"));
this.tabbedPane.add$java_awt_Component$O(p$1.initOverviewTab.apply(this, []), $I$(1).getString$S("label.overview"));
this.tabbedPane.add$java_awt_Component$O(p$1.initStructureTab.apply(this, []), $I$(1).getString$S("label.structure"));
this.tabbedPane.add$java_awt_Component$O(p$1.initConnectionsTab.apply(this, []), $I$(1).getString$S("label.connections"));
if (!$I$(19).isJS$()) {
this.tabbedPane.add$java_awt_Component$O(p$1.initBackupsTab.apply(this, []), $I$(1).getString$S("label.backups"));
}this.tabbedPane.add$java_awt_Component$O(p$1.initLinksTab.apply(this, []), $I$(1).getString$S("label.urllinks"));
this.tabbedPane.add$java_awt_Component$O(p$1.initOutputTab.apply(this, []), $I$(1).getString$S("label.output"));
this.tabbedPane.add$java_awt_Component$O(p$1.initEditingTab.apply(this, []), $I$(1).getString$S("label.editing"));
this.tabbedPane.add$java_awt_Component$O(p$1.initStartupTab.apply(this, []), $I$(1).getString$S("label.startup"));
if (!$I$(19).isJS$()) {
this.wsTab.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18,1)));
this.tabbedPane.add$java_awt_Component$O(this.wsTab, $I$(1).getString$S("label.web_services"));
}this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.GPreferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastTab','java.awt.Component']]]

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.lastTab === this.b$['jalview.jbgui.GPreferences'].structureTab  && this.b$['jalview.jbgui.GPreferences'].tabbedPane.getSelectedComponent$() !== this.b$['jalview.jbgui.GPreferences'].structureTab  ) {
if (!this.b$['jalview.jbgui.GPreferences'].validateStructure$.apply(this.b$['jalview.jbgui.GPreferences'], [])) {
this.b$['jalview.jbgui.GPreferences'].tabbedPane.setSelectedComponent$java_awt_Component(this.b$['jalview.jbgui.GPreferences'].structureTab);
return;
}}this.lastTab=this.b$['jalview.jbgui.GPreferences'].tabbedPane.getSelectedComponent$();
this.b$['jalview.jbgui.GPreferences'].clearMessage$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$1.$init$,[this, null])));
}, p$1);

Clazz.newMeth(C$, 'setMessage$S',  function (message) {
if (message != null ) {
this.messageLabel.setText$S(message);
this.messageLabel.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.messageLabel.setForeground$java_awt_Color($I$(20).RED.darker$());
this.messageLabel.revalidate$();
this.messageLabel.repaint$();
}this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'clearMessage$',  function () {
if (this.messageLabel.getText$() != null  && this.messageLabel.getText$().length$() > 0 ) {
this.messageLabel.setText$S("");
this.messageLabel.revalidate$();
this.messageLabel.repaint$();
this.revalidate$();
this.repaint$();
}});

Clazz.newMeth(C$, 'selectTab$jalview_jbgui_GPreferences_TabRef',  function (selectTab) {
switch (selectTab) {
case $I$(21).CONNECTIONS_TAB:
this.tabbedPane.setSelectedComponent$java_awt_Component(this.connectTab);
break;
case $I$(21).STRUCTURE_TAB:
this.tabbedPane.setSelectedComponent$java_awt_Component(this.structureTab);
break;
default:
}
});

Clazz.newMeth(C$, 'initEditingTab',  function () {
var editingTab=Clazz.new_($I$(8,1));
editingTab.setLayout$java_awt_LayoutManager(null);
this.autoCalculateConsCheck.setFont$java_awt_Font(C$.LABEL_FONT);
this.autoCalculateConsCheck.setText$S($I$(1).getString$S("label.autocalculate_consensus"));
this.autoCalculateConsCheck.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[21, 52, 209, 23]));
this.padGaps.setFont$java_awt_Font(C$.LABEL_FONT);
this.padGaps.setText$S($I$(1).getString$S("label.pad_gaps_when_editing"));
this.padGaps.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[22, 94, 168, 23]));
this.sortByTree.setFont$java_awt_Font(C$.LABEL_FONT);
this.sortByTree.setText$S($I$(1).getString$S("label.sort_with_new_tree"));
this.sortByTree.setToolTipText$S($I$(1).getString$S("label.any_trees_calculated_or_loaded_alignment_automatically_sort"));
this.sortByTree.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[22, 136, 168, 23]));
editingTab.add$java_awt_Component(this.autoCalculateConsCheck);
editingTab.add$java_awt_Component(this.padGaps);
editingTab.add$java_awt_Component(this.sortByTree);
return editingTab;
}, p$1);

Clazz.newMeth(C$, 'initOutputTab',  function () {
var outputTab=Clazz.new_($I$(8,1));
outputTab.setLayout$java_awt_LayoutManager(null);
var epsLabel=Clazz.new_([$I$(1,"formatMessage$S$OA",["label.rendering_style", Clazz.array(java.lang.Object, -1, ["EPS"])])],$I$(11,1).c$$S);
epsLabel.setFont$java_awt_Font(C$.LABEL_FONT);
epsLabel.setHorizontalAlignment$I(4);
epsLabel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[9, 31, 160, 24]));
this.epsRendering.setFont$java_awt_Font(C$.LABEL_FONT);
this.epsRendering.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[174, 34, 187, 21]));
var htmlLabel=Clazz.new_([$I$(1,"formatMessage$S$OA",["label.rendering_style", Clazz.array(java.lang.Object, -1, ["HTML"])])],$I$(11,1).c$$S);
htmlLabel.setFont$java_awt_Font(C$.LABEL_FONT);
htmlLabel.setHorizontalAlignment$I(4);
htmlLabel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[9, 55, 160, 24]));
this.htmlRendering.setFont$java_awt_Font(C$.LABEL_FONT);
this.htmlRendering.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[174, 58, 187, 21]));
var svgLabel=Clazz.new_([$I$(1,"formatMessage$S$OA",["label.rendering_style", Clazz.array(java.lang.Object, -1, ["SVG"])])],$I$(11,1).c$$S);
svgLabel.setFont$java_awt_Font(C$.LABEL_FONT);
svgLabel.setHorizontalAlignment$I(4);
svgLabel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[9, 79, 160, 24]));
this.svgRendering.setFont$java_awt_Font(C$.LABEL_FONT);
this.svgRendering.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[174, 82, 187, 21]));
var jLabel1=Clazz.new_($I$(11,1));
jLabel1.setFont$java_awt_Font(C$.LABEL_FONT);
jLabel1.setHorizontalAlignment$I(0);
jLabel1.setText$S($I$(1).getString$S("label.append_start_end"));
jLabel1.setFont$java_awt_Font(C$.LABEL_FONT);
this.fastajv.setFont$java_awt_Font(C$.LABEL_FONT);
this.fastajv.setHorizontalAlignment$I(2);
this.clustaljv.setText$S($I$(1).getString$S("label.clustal") + "     ");
this.blcjv.setText$S($I$(1).getString$S("label.blc") + "     ");
this.fastajv.setText$S($I$(1).getString$S("label.fasta") + "     ");
this.msfjv.setText$S($I$(1).getString$S("label.msf") + "     ");
this.pfamjv.setText$S($I$(1).getString$S("label.pfam") + "     ");
this.pileupjv.setText$S($I$(1).getString$S("label.pileup") + "     ");
this.msfjv.setFont$java_awt_Font(C$.LABEL_FONT);
this.msfjv.setHorizontalAlignment$I(2);
this.pirjv.setText$S($I$(1).getString$S("label.pir") + "     ");
var jPanel11=Clazz.new_($I$(8,1));
jPanel11.setFont$java_awt_Font(C$.LABEL_FONT);
var titledBorder2=Clazz.new_([$I$(1).getString$S("label.file_output")],$I$(23,1).c$$S);
jPanel11.setBorder$javax_swing_border_Border(titledBorder2);
jPanel11.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[30, 120, 196, 182]));
var gridLayout3=Clazz.new_($I$(24,1));
jPanel11.setLayout$java_awt_LayoutManager(gridLayout3);
gridLayout3.setRows$I(8);
this.blcjv.setFont$java_awt_Font(C$.LABEL_FONT);
this.blcjv.setHorizontalAlignment$I(2);
this.clustaljv.setFont$java_awt_Font(C$.LABEL_FONT);
this.clustaljv.setHorizontalAlignment$I(2);
this.pfamjv.setFont$java_awt_Font(C$.LABEL_FONT);
this.pfamjv.setHorizontalAlignment$I(2);
this.pileupjv.setFont$java_awt_Font(C$.LABEL_FONT);
this.pileupjv.setHorizontalAlignment$I(2);
this.pirjv.setFont$java_awt_Font(C$.LABEL_FONT);
this.pirjv.setHorizontalAlignment$I(2);
this.autoIdWidth.setFont$java_awt_Font(C$.LABEL_FONT);
this.autoIdWidth.setText$S($I$(1).getString$S("label.automatically_set_id_width"));
this.autoIdWidth.setToolTipText$S($I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.adjusts_width_generated_eps_png")]));
this.autoIdWidth.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[228, 144, 320, 23]));
this.autoIdWidth.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].autoIdWidth_actionPerformed$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$2.$init$,[this, null])));
this.userIdWidthlabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.userIdWidthlabel.setText$S($I$(1).getString$S("label.figure_id_column_width"));
this.userIdWidth.setToolTipText$S($I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.manually_specify_width_left_column")]));
this.userIdWidthlabel.setToolTipText$S($I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.manually_specify_width_left_column")]));
this.userIdWidthlabel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[236, 168, 320, 23]));
this.userIdWidth.setFont$java_awt_Font($I$(3).getTextAreaFont$());
this.userIdWidth.setText$S("");
this.userIdWidth.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[232, 192, 84, 23]));
this.userIdWidth.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].userIdWidth_actionPerformed$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$3.$init$,[this, null])));
this.modellerOutput.setFont$java_awt_Font(C$.LABEL_FONT);
this.modellerOutput.setText$S($I$(1).getString$S("label.use_modeller_output"));
this.modellerOutput.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[228, 274, 320, 23]));
this.embbedBioJSON.setFont$java_awt_Font(C$.LABEL_FONT);
this.embbedBioJSON.setText$S($I$(1).getString$S("label.embbed_biojson"));
this.embbedBioJSON.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[228, 248, 250, 23]));
jPanel11.add$java_awt_Component(jLabel1);
jPanel11.add$java_awt_Component(this.blcjv);
jPanel11.add$java_awt_Component(this.clustaljv);
jPanel11.add$java_awt_Component(this.fastajv);
jPanel11.add$java_awt_Component(this.msfjv);
jPanel11.add$java_awt_Component(this.pfamjv);
jPanel11.add$java_awt_Component(this.pileupjv);
jPanel11.add$java_awt_Component(this.pirjv);
outputTab.add$java_awt_Component(this.autoIdWidth);
outputTab.add$java_awt_Component(this.userIdWidth);
outputTab.add$java_awt_Component(this.userIdWidthlabel);
outputTab.add$java_awt_Component(this.modellerOutput);
if (!$I$(19).isJS$()) {
outputTab.add$java_awt_Component(this.embbedBioJSON);
outputTab.add$java_awt_Component(epsLabel);
outputTab.add$java_awt_Component(this.epsRendering);
outputTab.add$java_awt_Component(htmlLabel);
outputTab.add$java_awt_Component(this.htmlRendering);
outputTab.add$java_awt_Component(svgLabel);
outputTab.add$java_awt_Component(this.svgRendering);
}outputTab.add$java_awt_Component(jPanel11);
return outputTab;
}, p$1);

Clazz.newMeth(C$, 'initConnectionsTab',  function () {
this.connectTab=Clazz.new_($I$(8,1));
this.connectTab.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
var proxyPanel=p$1.initConnTabProxyPanel.apply(this, []);
p$1.initConnTabCheckboxes.apply(this, []);
this.connectTab.add$java_awt_Component$O(proxyPanel, Clazz.new_([0, 1, 2, 1, 1.0, 0.0, 10, 2, Clazz.new_($I$(27,1).c$$I$I$I$I,[10, 0, 5, 12]), 4, 10],$I$(26,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
this.connectTab.add$java_awt_Component$O(this.usagestats, Clazz.new_([0, 2, 1, 1, 1.0, 0.0, 17, 2, Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 2, 5, 5]), 70, 1],$I$(26,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
this.connectTab.add$java_awt_Component$O(this.questionnaire, Clazz.new_([1, 2, 1, 1, 1.0, 0.0, 17, 2, Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 2, 5, 10]), 70, 1],$I$(26,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
this.connectTab.add$java_awt_Component$O(this.versioncheck, Clazz.new_([0, 3, 1, 1, 1.0, 0.0, 17, 2, Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 2, 5, 5]), 70, 1],$I$(26,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
this.versioncheck.setVisible$Z(false);
var spacePanel=Clazz.new_($I$(8,1));
this.connectTab.add$java_awt_Component$O(spacePanel, Clazz.new_([0, 4, 1, 1, 1.0, 1.0, 17, 1, Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 0, 5]), 70, 1],$I$(26,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
return this.connectTab;
}, p$1);

Clazz.newMeth(C$, 'initLinksTab',  function () {
var linkTab=Clazz.new_($I$(8,1));
linkTab.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
this.linkUrlTable.getTableHeader$().setReorderingAllowed$Z(false);
this.linkUrlTable.setFillsViewportHeight$Z(true);
this.linkUrlTable.setAutoResizeMode$I(4);
this.linkUrlTable.setAutoCreateRowSorter$Z(true);
this.linkUrlTable.setSelectionMode$I(0);
var temp=Clazz.new_($I$(2,1));
this.linkUrlTable.setRowHeight$I(temp.getMinimumSize$().height);
var linkScrollPane=Clazz.new_($I$(28,1).c$$java_awt_Component,[this.linkUrlTable]);
linkScrollPane.setBorder$javax_swing_border_Border(null);
var linkPanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(8,1).c$$java_awt_LayoutManager);
linkPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.url_linkfrom_sequence_id")],$I$(23,1).c$$S));
var buttonPanel=p$1.initLinkTabUrlButtons.apply(this, []);
var linkConstraints1=Clazz.new_($I$(26,1));
linkConstraints1.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 5, 0]);
linkConstraints1.gridx=0;
linkConstraints1.gridy=0;
linkConstraints1.weightx=1.0;
linkConstraints1.fill=2;
linkTab.add$java_awt_Component$O(buttonPanel, linkConstraints1);
var linkConstraints2=Clazz.new_($I$(26,1));
linkConstraints2.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 5, 5]);
linkConstraints2.gridx=0;
linkConstraints2.gridy=1;
linkConstraints2.weightx=1.0;
linkConstraints2.weighty=1.0;
linkConstraints2.fill=1;
linkTab.add$java_awt_Component$O(linkScrollPane, linkConstraints2);
var filterPanel=p$1.initLinkTabFilterPanel.apply(this, []);
var linkConstraints3=Clazz.new_($I$(26,1));
linkConstraints3.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 0, 5]);
linkConstraints3.gridx=0;
linkConstraints3.gridy=2;
linkConstraints3.weightx=1.0;
linkConstraints3.fill=2;
linkTab.add$java_awt_Component$O(filterPanel, linkConstraints3);
return linkTab;
}, p$1);

Clazz.newMeth(C$, 'initLinkTabFilterPanel',  function () {
var filterLabel=Clazz.new_([$I$(1).getString$S("label.filter")],$I$(11,1).c$$S);
filterLabel.setFont$java_awt_Font(C$.LABEL_FONT);
filterLabel.setHorizontalAlignment$I(4);
filterLabel.setHorizontalTextPosition$I(10);
this.filterTB.setFont$java_awt_Font(C$.LABEL_FONT);
this.filterTB.setText$S("");
this.doReset.setText$S($I$(1).getString$S("action.showall"));
this.userOnly.setText$S($I$(1).getString$S("action.customfilter"));
var filterPanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(8,1).c$$java_awt_LayoutManager);
filterPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(23,1).c$$S,["Filter"]));
var gbc=Clazz.new_($I$(26,1));
gbc.gridx=0;
gbc.gridy=0;
gbc.fill=0;
gbc.anchor=17;
filterPanel.add$java_awt_Component$O(filterLabel, gbc);
var gbc1=Clazz.new_($I$(26,1));
gbc1.gridx=1;
gbc1.gridwidth=2;
gbc1.fill=2;
gbc1.anchor=17;
gbc1.weightx=1.0;
filterPanel.add$java_awt_Component$O(this.filterTB, gbc1);
var gbc2=Clazz.new_($I$(26,1));
gbc2.gridx=3;
gbc2.fill=0;
gbc2.anchor=17;
filterPanel.add$java_awt_Component$O(this.doReset, gbc2);
var gbc3=Clazz.new_($I$(26,1));
gbc3.gridx=4;
gbc3.fill=0;
gbc3.anchor=17;
filterPanel.add$java_awt_Component$O(this.userOnly, gbc3);
return filterPanel;
}, p$1);

Clazz.newMeth(C$, 'initLinkTabUrlButtons',  function () {
var newLink=Clazz.new_($I$(10,1));
newLink.setText$S($I$(1).getString$S("action.new"));
this.editLink.setText$S($I$(1).getString$S("action.edit"));
this.deleteLink.setText$S($I$(1).getString$S("action.delete"));
this.editLink.setEnabled$Z(false);
this.deleteLink.setEnabled$Z(false);
newLink.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].newLink_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$4.$init$,[this, null])));
this.editLink.setText$S($I$(1).getString$S("action.edit"));
this.editLink.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].editLink_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$5.$init$,[this, null])));
this.deleteLink.setText$S($I$(1).getString$S("action.delete"));
this.deleteLink.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].deleteLink_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$6.$init$,[this, null])));
var buttonPanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(8,1).c$$java_awt_LayoutManager);
buttonPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(23,1).c$$S,["Edit links"]));
var gbc=Clazz.new_($I$(26,1));
gbc.gridx=0;
gbc.gridy=0;
gbc.fill=0;
buttonPanel.add$java_awt_Component$O(newLink, gbc);
var gbc1=Clazz.new_($I$(26,1));
gbc1.gridx=1;
gbc1.gridy=0;
gbc1.fill=0;
buttonPanel.add$java_awt_Component$O(this.editLink, gbc1);
var gbc2=Clazz.new_($I$(26,1));
gbc2.gridx=2;
gbc2.gridy=0;
gbc2.fill=0;
buttonPanel.add$java_awt_Component$O(this.deleteLink, gbc2);
var gbc3=Clazz.new_($I$(26,1));
gbc3.gridx=3;
gbc3.gridy=0;
gbc3.fill=2;
gbc3.weightx=1.0;
var spacePanel=Clazz.new_($I$(8,1));
spacePanel.setBorder$javax_swing_border_Border(null);
buttonPanel.add$java_awt_Component$O(spacePanel, gbc3);
return buttonPanel;
}, p$1);

Clazz.newMeth(C$, 'initConnTabProxyPanel',  function () {
this.serverLabel.setText$S($I$(1).getString$S("label.host") + ": ");
this.serverLabel.setHorizontalAlignment$I(4);
this.serverLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.serverLabel2.setText$S($I$(1).getString$S("label.host") + ": ");
this.serverLabel2.setHorizontalAlignment$I(4);
this.serverLabel2.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyServerHttpTB.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyServerHttpTB.setColumns$I(40);
this.proxyPortHttpTB.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyPortHttpTB.setColumns$I(4);
this.proxyServerHttpsTB.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyServerHttpsTB.setColumns$I(40);
this.proxyPortHttpsTB.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyPortHttpsTB.setColumns$I(4);
this.proxyAuthUsernameTB.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyAuthUsernameTB.setColumns$I(30);
var d=((P$.GPreferences$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].applyProxyButtonEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].applyProxyButtonEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].applyProxyButtonEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});
})()
), Clazz.new_(P$.GPreferences$7.$init$,[this, null]));
this.proxyServerHttpTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(d);
this.proxyPortHttpTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(d);
this.proxyServerHttpsTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(d);
this.proxyPortHttpsTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(d);
this.proxyAuthUsernameTB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(d);
this.proxyAuthPasswordPB.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyAuthPasswordPB.setColumns$I(30);
this.proxyAuthPasswordPB.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.GPreferences$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].proxyAuthPasswordCheckHighlight$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].applyProxyButtonEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].proxyAuthPasswordCheckHighlight$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].applyProxyButtonEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].proxyAuthPasswordCheckHighlight$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].applyProxyButtonEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});
})()
), Clazz.new_(P$.GPreferences$8.$init$,[this, null])));
this.portLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.portLabel.setHorizontalAlignment$I(4);
this.portLabel.setText$S($I$(1).getString$S("label.port") + ": ");
this.portLabel2.setFont$java_awt_Font(C$.LABEL_FONT);
this.portLabel2.setHorizontalAlignment$I(4);
this.portLabel2.setText$S($I$(1).getString$S("label.port") + ": ");
this.httpLabel.setText$S("HTTP");
this.httpLabel.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.httpLabel.setHorizontalAlignment$I(2);
this.httpsLabel.setText$S("HTTPS");
this.httpsLabel.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.httpsLabel.setHorizontalAlignment$I(2);
this.proxyAuthUsernameLabel.setText$S($I$(1).getString$S("label.username") + ": ");
this.proxyAuthUsernameLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyAuthUsernameLabel.setHorizontalAlignment$I(4);
this.proxyAuthPasswordLabel.setText$S($I$(1).getString$S("label.password") + ": ");
this.proxyAuthPasswordLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyAuthPasswordLabel.setHorizontalAlignment$I(4);
this.passwordNotStoredLabel.setText$S("(" + $I$(1).getString$S("label.not_stored") + ")" );
this.passwordNotStoredLabel.setFont$java_awt_Font(C$.LABEL_FONT_ITALIC);
this.passwordNotStoredLabel.setHorizontalAlignment$I(2);
this.noProxy.setFont$java_awt_Font(C$.LABEL_FONT);
this.noProxy.setHorizontalAlignment$I(2);
this.noProxy.setText$S($I$(1).getString$S("label.no_proxy"));
this.systemProxy.setFont$java_awt_Font(C$.LABEL_FONT);
this.systemProxy.setHorizontalAlignment$I(2);
this.systemProxy.setText$S($I$(1,"formatMessage$S$OA",["label.system_proxy", Clazz.array(java.lang.Object, -1, [p$1.displayUserHostPort$S$S$S.apply(this, [$I$(29).startupProxyProperties[4], $I$(29).startupProxyProperties[0], $I$(29).startupProxyProperties[1]]), p$1.displayUserHostPort$S$S$S.apply(this, [$I$(29).startupProxyProperties[6], $I$(29).startupProxyProperties[2], $I$(29).startupProxyProperties[3]])])]));
this.customProxy.setFont$java_awt_Font(C$.LABEL_FONT);
this.customProxy.setHorizontalAlignment$I(2);
this.customProxy.setText$S($I$(1).getString$S("label.use_proxy_server") + ":");
var al=((P$.GPreferences$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].proxyType_actionPerformed$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$9.$init$,[this, null]));
this.noProxy.addActionListener$java_awt_event_ActionListener(al);
this.systemProxy.addActionListener$java_awt_event_ActionListener(al);
this.customProxy.addActionListener$java_awt_event_ActionListener(al);
this.proxyType.add$javax_swing_AbstractButton(this.noProxy);
this.proxyType.add$javax_swing_AbstractButton(this.systemProxy);
this.proxyType.add$javax_swing_AbstractButton(this.customProxy);
this.proxyAuth.setFont$java_awt_Font(C$.LABEL_FONT);
this.proxyAuth.setHorizontalAlignment$I(2);
this.proxyAuth.setText$S($I$(1).getString$S("label.auth_required"));
this.proxyAuth.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].proxyAuth_actionPerformed$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$10.$init$,[this, null])));
this.setCustomProxyEnabled$();
var proxyPanel=Clazz.new_($I$(8,1));
var titledBorder1=Clazz.new_([$I$(1).getString$S("label.proxy_servers")],$I$(23,1).c$$S);
proxyPanel.setBorder$javax_swing_border_Border(titledBorder1);
proxyPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
var gbc=Clazz.new_($I$(26,1));
gbc.fill=2;
gbc.weightx=1.0;
var c=Clazz.new_($I$(26,1));
var ptPanel=Clazz.new_($I$(8,1));
ptPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
c.weightx=1.0;
c.gridy=0;
c.gridx=0;
c.gridwidth=1;
c.fill=2;
ptPanel.add$java_awt_Component$O(this.noProxy, c);
++c.gridy;
ptPanel.add$java_awt_Component$O(this.systemProxy, c);
++c.gridy;
ptPanel.add$java_awt_Component$O(this.customProxy, c);
gbc.gridy=0;
proxyPanel.add$java_awt_Component$O(ptPanel, gbc);
var hpPanel=Clazz.new_($I$(8,1));
hpPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
c.gridy=0;
c.gridx=0;
c.weightx=0.1;
c.anchor=21;
hpPanel.add$java_awt_Component$O(this.httpLabel, c);
++c.gridx;
c.weightx=0.1;
c.anchor=22;
hpPanel.add$java_awt_Component$O(this.serverLabel, c);
++c.gridx;
c.weightx=1.0;
c.anchor=21;
hpPanel.add$java_awt_Component$O(this.proxyServerHttpTB, c);
++c.gridx;
c.weightx=0.1;
c.anchor=22;
hpPanel.add$java_awt_Component$O(this.portLabel, c);
++c.gridx;
c.weightx=0.2;
c.anchor=21;
hpPanel.add$java_awt_Component$O(this.proxyPortHttpTB, c);
++c.gridy;
c.gridx=0;
c.gridwidth=1;
c.anchor=21;
hpPanel.add$java_awt_Component$O(this.httpsLabel, c);
++c.gridx;
c.anchor=22;
hpPanel.add$java_awt_Component$O(this.serverLabel2, c);
++c.gridx;
c.anchor=21;
hpPanel.add$java_awt_Component$O(this.proxyServerHttpsTB, c);
++c.gridx;
c.anchor=22;
hpPanel.add$java_awt_Component$O(this.portLabel2, c);
++c.gridx;
c.anchor=21;
hpPanel.add$java_awt_Component$O(this.proxyPortHttpsTB, c);
++gbc.gridy;
proxyPanel.add$java_awt_Component$O(hpPanel, gbc);
if (!$I$(19).isJS$()) 
{}
this.applyProxyButton.setText$S($I$(1).getString$S("action.apply"));
this.applyProxyButton.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].saveProxySettings$.apply(this.b$['jalview.jbgui.GPreferences'], []);
this.b$['jalview.jbgui.GPreferences'].applyProxyButton.setEnabled$Z(false);
});
})()
), Clazz.new_(P$.GPreferences$11.$init$,[this, null])));
++gbc.gridy;
gbc.fill=0;
gbc.anchor=22;
proxyPanel.add$java_awt_Component$O(this.applyProxyButton, gbc);
return proxyPanel;
}, p$1);

Clazz.newMeth(C$, 'proxyAuthPasswordCheckHighlight$Z',  function (enabled) {
this.proxyAuthPasswordCheckHighlight$Z$Z(enabled, false);
});

Clazz.newMeth(C$, 'proxyAuthPasswordCheckHighlight$Z$Z',  function (enabled, grabFocus) {
if (enabled && this.proxyType.isSelected$javax_swing_ButtonModel(this.customProxy.getModel$()) && this.proxyAuth.isSelected$() && !this.proxyAuthUsernameTB.getText$().isEmpty$() && this.proxyAuthPasswordPB.getDocument$().getLength$() == 0  ) {
if (grabFocus) this.proxyAuthPasswordPB.grabFocus$();
this.proxyAuthPasswordPB.setBackground$java_awt_Color($I$(20).PINK);
} else {
this.proxyAuthPasswordPB.setBackground$java_awt_Color($I$(20).WHITE);
}});

Clazz.newMeth(C$, 'applyProxyButtonEnabled$Z',  function (enabled) {
this.applyProxyButton.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'saveProxySettings$',  function () {
});

Clazz.newMeth(C$, 'displayUserHostPort$S$S$S',  function (user, host, port) {
var hostBlank=(host == null  || host.isEmpty$() );
var portBlank=(port == null  || port.isEmpty$() );
if (hostBlank && portBlank ) {
return $I$(1).getString$S("label.none");
}var sb=Clazz.new_($I$(30,1));
if (user != null ) {
sb.append$S(user.isEmpty$() || user.indexOf$S(" ") > -1  ? '\"' + user + '\"'  : user);
sb.append$S("@");
}sb.append$S(hostBlank ? "" : host);
if (!portBlank) {
sb.append$S(":");
sb.append$S(port);
}return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'initConnTabCheckboxes',  function () {
this.usagestats.setText$S($I$(1).getString$S("label.send_usage_statistics"));
this.usagestats.setFont$java_awt_Font(C$.LABEL_FONT);
this.usagestats.setHorizontalAlignment$I(4);
this.usagestats.setHorizontalTextPosition$I(10);
this.questionnaire.setText$S($I$(1).getString$S("label.check_for_questionnaires"));
this.questionnaire.setFont$java_awt_Font(C$.LABEL_FONT);
this.questionnaire.setHorizontalAlignment$I(4);
this.questionnaire.setHorizontalTextPosition$I(10);
this.versioncheck.setText$S($I$(1).getString$S("label.check_for_latest_version"));
this.versioncheck.setFont$java_awt_Font(C$.LABEL_FONT);
this.versioncheck.setHorizontalAlignment$I(4);
this.versioncheck.setHorizontalTextPosition$I(10);
}, p$1);

Clazz.newMeth(C$, 'initOkCancelPanel',  function () {
var ok=Clazz.new_($I$(10,1));
ok.setText$S($I$(1).getString$S("action.ok"));
ok.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].ok_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$12.$init$,[this, null])));
var cancel=Clazz.new_($I$(10,1));
cancel.setText$S($I$(1).getString$S("action.cancel"));
cancel.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$13.$init$,[this, null])));
var okCancelPanel=Clazz.new_($I$(8,1));
okCancelPanel.add$java_awt_Component(ok);
okCancelPanel.add$java_awt_Component(cancel);
return okCancelPanel;
}, p$1);

Clazz.newMeth(C$, 'initColoursTab',  function () {
var coloursTab=Clazz.new_($I$(8,1));
coloursTab.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("action.open_new_alignment")],$I$(23,1).c$$S));
coloursTab.setLayout$java_awt_LayoutManager(Clazz.new_($I$(31,1)));
var mincolourLabel=Clazz.new_($I$(11,1));
mincolourLabel.setFont$java_awt_Font(C$.LABEL_FONT);
mincolourLabel.setHorizontalAlignment$I(4);
mincolourLabel.setText$S($I$(1).getString$S("label.min_colour"));
this.minColour.setFont$java_awt_Font(C$.LABEL_FONT);
this.minColour.setBorder$javax_swing_border_Border($I$(32).createEtchedBorder$());
this.minColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(33,1).c$$I$I,[40, 20]));
this.minColour.addMouseListener$java_awt_event_MouseListener(((P$.GPreferences$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].minColour_actionPerformed$javax_swing_JPanel.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].minColour]);
});
})()
), Clazz.new_($I$(34,1),[this, null],P$.GPreferences$14)));
var maxcolourLabel=Clazz.new_($I$(11,1));
maxcolourLabel.setFont$java_awt_Font(C$.LABEL_FONT);
maxcolourLabel.setHorizontalAlignment$I(4);
maxcolourLabel.setText$S($I$(1).getString$S("label.max_colour"));
this.maxColour.setFont$java_awt_Font(C$.LABEL_FONT);
this.maxColour.setBorder$javax_swing_border_Border($I$(32).createEtchedBorder$());
this.maxColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(33,1).c$$I$I,[40, 20]));
this.maxColour.addMouseListener$java_awt_event_MouseListener(((P$.GPreferences$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].maxColour_actionPerformed$javax_swing_JPanel.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].maxColour]);
});
})()
), Clazz.new_($I$(34,1),[this, null],P$.GPreferences$15)));
this.protColour.setFont$java_awt_Font(C$.LABEL_FONT);
this.protColour.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 225, 155, 21]));
var protColourLabel=Clazz.new_($I$(11,1));
protColourLabel.setFont$java_awt_Font(C$.LABEL_FONT);
protColourLabel.setHorizontalAlignment$I(2);
protColourLabel.setText$S($I$(1).getString$S("label.prot_alignment_colour") + " ");
$I$(3,"addtoLayout$javax_swing_JPanel$S$javax_swing_JComponent$javax_swing_JComponent",[coloursTab, $I$(1).getString$S("label.default_colour_scheme_for_alignment"), protColourLabel, this.protColour]);
this.nucColour.setFont$java_awt_Font(C$.LABEL_FONT);
this.nucColour.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 240, 155, 21]));
var nucColourLabel=Clazz.new_($I$(11,1));
nucColourLabel.setFont$java_awt_Font(C$.LABEL_FONT);
nucColourLabel.setHorizontalAlignment$I(2);
nucColourLabel.setText$S($I$(1).getString$S("label.nuc_alignment_colour") + " ");
$I$(3,"addtoLayout$javax_swing_JPanel$S$javax_swing_JComponent$javax_swing_JComponent",[coloursTab, $I$(1).getString$S("label.default_colour_scheme_for_alignment"), nucColourLabel, this.nucColour]);
var annotationShding=Clazz.new_($I$(8,1));
annotationShding.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.annotation_shading_default")],$I$(23,1).c$$S));
annotationShding.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1).c$$I$I,[1, 2]));
$I$(3,"addtoLayout$javax_swing_JPanel$S$javax_swing_JComponent$javax_swing_JComponent",[annotationShding, $I$(1).getString$S("label.default_minimum_colour_annotation_shading"), mincolourLabel, this.minColour]);
$I$(3,"addtoLayout$javax_swing_JPanel$S$javax_swing_JComponent$javax_swing_JComponent",[annotationShding, $I$(1).getString$S("label.default_maximum_colour_annotation_shading"), maxcolourLabel, this.maxColour]);
coloursTab.add$java_awt_Component(annotationShding);
return coloursTab;
}, p$1);

Clazz.newMeth(C$, 'initOverviewTab',  function () {
var overviewPanel=Clazz.new_($I$(8,1));
overviewPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.overview_settings")],$I$(23,1).c$$S));
this.gapColour.setFont$java_awt_Font(C$.LABEL_FONT);
this.gapColour.setBorder$javax_swing_border_Border($I$(32,"createEtchedBorder$java_awt_Color$java_awt_Color",[$I$(20).white, $I$(20).lightGray]));
this.gapColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(33,1).c$$I$I,[40, 20]));
this.gapColour.addMouseListener$java_awt_event_MouseListener(((P$.GPreferences$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].gapColour_actionPerformed$javax_swing_JPanel.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].gapColour]);
});
})()
), Clazz.new_($I$(34,1),[this, null],P$.GPreferences$16)));
this.hiddenColour.setFont$java_awt_Font(C$.LABEL_FONT);
this.hiddenColour.setBorder$javax_swing_border_Border($I$(32,"createEtchedBorder$java_awt_Color$java_awt_Color",[$I$(20).white, $I$(20).lightGray]));
this.hiddenColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(33,1).c$$I$I,[40, 20]));
this.hiddenColour.addMouseListener$java_awt_event_MouseListener(((P$.GPreferences$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].hiddenColour_actionPerformed$javax_swing_JPanel.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].hiddenColour]);
});
})()
), Clazz.new_($I$(34,1),[this, null],P$.GPreferences$17)));
this.useLegacyGap=Clazz.new_([$I$(1).getString$S("label.ov_legacy_gap")],$I$(4,1).c$$S);
this.useLegacyGap.setFont$java_awt_Font(C$.LABEL_FONT);
this.useLegacyGap.setHorizontalAlignment$I(2);
this.useLegacyGap.setVerticalTextPosition$I(1);
this.gapLabel=Clazz.new_([$I$(1).getString$S("label.gap_colour")],$I$(11,1).c$$S);
this.gapLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.gapLabel.setHorizontalAlignment$I(2);
this.gapLabel.setVerticalTextPosition$I(1);
this.showHiddenAtStart=Clazz.new_([$I$(1).getString$S("label.ov_show_hide_default")],$I$(4,1).c$$S);
this.showHiddenAtStart.setFont$java_awt_Font(C$.LABEL_FONT);
this.showHiddenAtStart.setHorizontalAlignment$I(2);
this.showHiddenAtStart.setVerticalTextPosition$I(1);
var hiddenLabel=Clazz.new_([$I$(1).getString$S("label.hidden_colour")],$I$(11,1).c$$S);
hiddenLabel.setFont$java_awt_Font(C$.LABEL_FONT);
hiddenLabel.setHorizontalAlignment$I(2);
hiddenLabel.setVerticalTextPosition$I(1);
this.useLegacyGap.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].useLegacyGaps_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$18.$init$,[this, null])));
overviewPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
var c1=Clazz.new_($I$(26,1));
c1.fill=2;
c1.gridx=0;
c1.gridy=0;
c1.weightx=1;
c1.ipady=20;
c1.anchor=23;
overviewPanel.add$java_awt_Component$O(this.useLegacyGap, c1);
var c2=Clazz.new_($I$(26,1));
c2.fill=2;
c2.gridx=1;
c2.gridy=0;
c2.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 15, 0, 10]);
overviewPanel.add$java_awt_Component$O(this.gapLabel, c2);
var c3=Clazz.new_($I$(26,1));
c3.fill=2;
c3.gridx=2;
c3.gridy=0;
c3.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 0, 15]);
overviewPanel.add$java_awt_Component$O(this.gapColour, c3);
var c4=Clazz.new_($I$(26,1));
c4.fill=2;
c4.gridx=0;
c4.gridy=1;
c4.weightx=1;
overviewPanel.add$java_awt_Component$O(this.showHiddenAtStart, c4);
var c5=Clazz.new_($I$(26,1));
c5.fill=2;
c5.gridx=1;
c5.gridy=1;
c5.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 15, 0, 10]);
overviewPanel.add$java_awt_Component$O(hiddenLabel, c5);
var c6=Clazz.new_($I$(26,1));
c6.fill=2;
c6.gridx=2;
c6.gridy=1;
c6.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 0, 15]);
overviewPanel.add$java_awt_Component$O(this.hiddenColour, c6);
var resetButton=Clazz.new_([$I$(1).getString$S("label.reset_to_defaults")],$I$(10,1).c$$S);
resetButton.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].resetOvDefaults_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$19.$init$,[this, null])));
var c7=Clazz.new_($I$(26,1));
c7.fill=0;
c7.gridx=0;
c7.gridy=2;
c7.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[10, 0, 0, 0]);
c7.anchor=17;
overviewPanel.add$java_awt_Component$O(resetButton, c7);
var spacePanel=Clazz.new_($I$(8,1));
overviewPanel.add$java_awt_Component$O(spacePanel, Clazz.new_([0, 3, 1, 1, 1.0, 1.0, 17, 1, Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 0, 0, 5]), 0, 0],$I$(26,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
return overviewPanel;
}, p$1);

Clazz.newMeth(C$, 'initStructureTab',  function () {
this.structureTab=Clazz.new_($I$(8,1));
this.structureTab.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.structure_options")],$I$(23,1).c$$S));
this.structureTab.setLayout$java_awt_LayoutManager(null);
var width=420;
var height=22;
var lineSpacing=25;
var ypos=15;
this.structFromPdb.setFont$java_awt_Font(C$.LABEL_FONT);
this.structFromPdb.setText$S($I$(1).getString$S("label.struct_from_pdb"));
this.structFromPdb.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[5, ypos, 420, 22]));
this.structFromPdb.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var selected=this.b$['jalview.jbgui.GPreferences'].structFromPdb.isSelected$();
this.b$['jalview.jbgui.GPreferences'].addSecondaryStructure.setEnabled$Z(selected);
this.b$['jalview.jbgui.GPreferences'].addTempFactor.setEnabled$Z(selected);
});
})()
), Clazz.new_(P$.GPreferences$20.$init$,[this, null])));
this.structureTab.add$java_awt_Component(this.structFromPdb);
ypos+=25;
this.addSecondaryStructure.setFont$java_awt_Font(C$.LABEL_FONT);
this.addSecondaryStructure.setText$S($I$(1).getString$S("label.autoadd_secstr"));
this.addSecondaryStructure.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[25, ypos, 420, 22]));
this.structureTab.add$java_awt_Component(this.addSecondaryStructure);
ypos+=25;
this.addTempFactor.setFont$java_awt_Font(C$.LABEL_FONT);
this.addTempFactor.setText$S($I$(1).getString$S("label.autoadd_temp"));
this.addTempFactor.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[25, ypos, 420, 22]));
this.structureTab.add$java_awt_Component(this.addTempFactor);
ypos+=25;
var viewerLabel=Clazz.new_($I$(11,1));
viewerLabel.setFont$java_awt_Font(C$.LABEL_FONT);
viewerLabel.setHorizontalAlignment$I(2);
viewerLabel.setText$S($I$(1).getString$S("label.structure_viewer"));
viewerLabel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[10, ypos, 220, 22]));
this.structureTab.add$java_awt_Component(viewerLabel);
this.structViewer.setFont$java_awt_Font(C$.LABEL_FONT);
this.structViewer.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[190, ypos, 120, 22]));
this.structViewer.addItem$O($I$(35).JMOL.name$());
this.structViewer.addItem$O($I$(35).CHIMERA.name$());
this.structViewer.addItem$O($I$(35).CHIMERAX.name$());
this.structViewer.addItem$O($I$(35).PYMOL.name$());
this.structViewer.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].structureViewer_actionPerformed$S.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].structViewer.getSelectedItem$()]);
});
})()
), Clazz.new_(P$.GPreferences$21.$init$,[this, null])));
this.structureTab.add$java_awt_Component(this.structViewer);
ypos+=25;
this.structureViewerPathLabel=Clazz.new_($I$(11,1));
this.structureViewerPathLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.structureViewerPathLabel.setHorizontalAlignment$I(2);
this.structureViewerPathLabel.setText$S($I$(1,"formatMessage$S$OA",["label.viewer_path", Clazz.array(java.lang.Object, -1, ["Chimera(X)"])]));
this.structureViewerPathLabel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[10, ypos, 170, 22]));
this.structureViewerPathLabel.setEnabled$Z(false);
this.structureTab.add$java_awt_Component(this.structureViewerPathLabel);
this.structureViewerPath.setFont$java_awt_Font(C$.LABEL_FONT);
this.structureViewerPath.setText$S("");
this.structureViewerPath.setEnabled$Z(false);
var tooltip=$I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.viewer_path_tip")]);
this.structureViewerPath.setToolTipText$S(tooltip);
this.structureViewerPath.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[190, ypos, 290, 22]));
this.structureViewerPath.addMouseListener$java_awt_event_MouseListener(((P$.GPreferences$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (this.b$['jalview.jbgui.GPreferences'].structureViewerPath.isEnabled$() && e.getClickCount$() == 2 ) {
var chosen=this.b$['jalview.jbgui.GPreferences'].openFileChooser$.apply(this.b$['jalview.jbgui.GPreferences'], []);
if (chosen != null ) {
this.b$['jalview.jbgui.GPreferences'].structureViewerPath.setText$S(chosen);
}}});
})()
), Clazz.new_($I$(34,1),[this, null],P$.GPreferences$22)));
this.structureTab.add$java_awt_Component(this.structureViewerPath);
ypos+=25;
this.nwMapping.setFont$java_awt_Font(C$.LABEL_FONT);
this.nwMapping.setText$S($I$(1).getString$S("label.nw_mapping"));
this.siftsMapping.setFont$java_awt_Font(C$.LABEL_FONT);
this.siftsMapping.setText$S($I$(1).getString$S("label.sifts_mapping"));
this.mappingMethod.add$javax_swing_AbstractButton(this.nwMapping);
this.mappingMethod.add$javax_swing_AbstractButton(this.siftsMapping);
var mappingPanel=Clazz.new_($I$(8,1));
mappingPanel.setFont$java_awt_Font(C$.LABEL_FONT);
var mmTitledBorder=Clazz.new_([$I$(1).getString$S("label.mapping_method")],$I$(23,1).c$$S);
mmTitledBorder.setTitleFont$java_awt_Font(C$.LABEL_FONT);
mappingPanel.setBorder$javax_swing_border_Border(mmTitledBorder);
mappingPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[10, ypos, 472, 45]));
mappingPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1)));
mappingPanel.add$java_awt_Component(this.nwMapping);
mappingPanel.add$java_awt_Component(this.siftsMapping);
this.structureTab.add$java_awt_Component(mappingPanel);
ypos+=25;
ypos+=25;
var docFieldPref=Clazz.new_([$I$(37).PREFERENCES, $I$(38).getInstance$()],$I$(36,1).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI);
docFieldPref.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[10, ypos, 470, 120]));
this.structureTab.add$java_awt_Component(docFieldPref);
if ($I$(19).isJS$()) {
this.structureViewerPathLabel.setVisible$Z(false);
this.structureViewerPath.setVisible$Z(false);
viewerLabel.setVisible$Z(false);
this.structViewer.setVisible$Z(false);
}return this.structureTab;
}, p$1);

Clazz.newMeth(C$, 'structureViewer_actionPerformed$S',  function (selectedItem) {
});

Clazz.newMeth(C$, 'openFileChooser$',  function () {
var choice=null;
var chooser=Clazz.new_($I$(39,1));
if ($I$(19).isMac$()) {
chooser.putClientProperty$O$O("JFileChooser.appBundleIsTraversable", Boolean.valueOf$Z(true));
}chooser.setDialogTitle$S($I$(1).getString$S("label.open_local_file"));
chooser.setToolTipText$S($I$(1).getString$S("action.open"));
var value=chooser.showOpenDialog$java_awt_Component(this);
if (value == 0) {
choice=chooser.getSelectedFile$().getPath$();
}return choice;
});

Clazz.newMeth(C$, 'validateStructure$java_awt_event_FocusEvent',  function (e) {
if (!this.validateStructure$()) {
e.getComponent$().requestFocusInWindow$();
return false;
}return true;
});

Clazz.newMeth(C$, 'validateStructure$',  function () {
return false;
});

Clazz.newMeth(C$, 'initVisualTab',  function () {
var visualTab=Clazz.new_($I$(8,1));
visualTab.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("action.open_new_alignment")],$I$(23,1).c$$S));
visualTab.setLayout$java_awt_LayoutManager(null);
this.fullScreen.setFont$java_awt_Font(C$.LABEL_FONT);
this.fullScreen.setHorizontalAlignment$I(4);
this.fullScreen.setHorizontalTextPosition$I(2);
this.fullScreen.setText$S($I$(1).getString$S("label.maximize_window"));
this.quality.setEnabled$Z(false);
this.quality.setFont$java_awt_Font(C$.LABEL_FONT);
this.quality.setHorizontalAlignment$I(4);
this.quality.setHorizontalTextPosition$I(2);
this.quality.setSelected$Z(true);
this.quality.setText$S($I$(1).getString$S("label.quality"));
this.conservation.setEnabled$Z(false);
this.conservation.setFont$java_awt_Font(C$.LABEL_FONT);
this.conservation.setHorizontalAlignment$I(4);
this.conservation.setHorizontalTextPosition$I(2);
this.conservation.setSelected$Z(true);
this.conservation.setText$S($I$(1).getString$S("label.conservation"));
this.identity.setEnabled$Z(false);
this.identity.setFont$java_awt_Font(C$.LABEL_FONT);
this.identity.setHorizontalAlignment$I(4);
this.identity.setHorizontalTextPosition$I(2);
this.identity.setSelected$Z(true);
this.identity.setText$S($I$(1).getString$S("label.consensus"));
this.showOccupancy.setFont$java_awt_Font(C$.LABEL_FONT);
this.showOccupancy.setEnabled$Z(false);
this.showOccupancy.setHorizontalAlignment$I(4);
this.showOccupancy.setHorizontalTextPosition$I(2);
this.showOccupancy.setSelected$Z(true);
this.showOccupancy.setText$S($I$(1).getString$S("label.occupancy"));
var showGroupbits=Clazz.new_($I$(11,1));
showGroupbits.setFont$java_awt_Font(C$.LABEL_FONT);
showGroupbits.setHorizontalAlignment$I(4);
showGroupbits.setHorizontalTextPosition$I(2);
showGroupbits.setText$S($I$(1).getString$S("action.show_group") + ":");
var showConsensbits=Clazz.new_($I$(11,1));
showConsensbits.setFont$java_awt_Font(C$.LABEL_FONT);
showConsensbits.setHorizontalAlignment$I(4);
showConsensbits.setHorizontalTextPosition$I(2);
showConsensbits.setText$S($I$(1).getString$S("label.consensus") + ":");
this.showConsensHistogram.setEnabled$Z(false);
this.showConsensHistogram.setFont$java_awt_Font(C$.LABEL_FONT);
this.showConsensHistogram.setHorizontalAlignment$I(4);
this.showConsensHistogram.setHorizontalTextPosition$I(2);
this.showConsensHistogram.setSelected$Z(true);
this.showConsensHistogram.setText$S($I$(1).getString$S("label.histogram"));
this.showConsensLogo.setEnabled$Z(false);
this.showConsensLogo.setFont$java_awt_Font(C$.LABEL_FONT);
this.showConsensLogo.setHorizontalAlignment$I(4);
this.showConsensLogo.setHorizontalTextPosition$I(2);
this.showConsensLogo.setSelected$Z(true);
this.showConsensLogo.setText$S($I$(1).getString$S("label.logo"));
this.showGroupConsensus.setEnabled$Z(false);
this.showGroupConsensus.setFont$java_awt_Font(C$.LABEL_FONT);
this.showGroupConsensus.setHorizontalAlignment$I(4);
this.showGroupConsensus.setHorizontalTextPosition$I(2);
this.showGroupConsensus.setSelected$Z(true);
this.showGroupConsensus.setText$S($I$(1).getString$S("label.consensus"));
this.showGroupConservation.setEnabled$Z(false);
this.showGroupConservation.setFont$java_awt_Font(C$.LABEL_FONT);
this.showGroupConservation.setHorizontalAlignment$I(4);
this.showGroupConservation.setHorizontalTextPosition$I(2);
this.showGroupConservation.setSelected$Z(true);
this.showGroupConservation.setText$S($I$(1).getString$S("label.conservation"));
this.showNpTooltip.setEnabled$Z(true);
this.showNpTooltip.setFont$java_awt_Font(C$.LABEL_FONT);
this.showNpTooltip.setHorizontalAlignment$I(4);
this.showNpTooltip.setHorizontalTextPosition$I(2);
this.showNpTooltip.setSelected$Z(true);
this.showNpTooltip.setText$S($I$(1).getString$S("label.non_positional_features"));
this.showDbRefTooltip.setEnabled$Z(true);
this.showDbRefTooltip.setFont$java_awt_Font(C$.LABEL_FONT);
this.showDbRefTooltip.setHorizontalAlignment$I(4);
this.showDbRefTooltip.setHorizontalTextPosition$I(2);
this.showDbRefTooltip.setSelected$Z(true);
this.showDbRefTooltip.setText$S($I$(1).getString$S("label.database_references"));
this.annotations.setFont$java_awt_Font(C$.LABEL_FONT);
this.annotations.setHorizontalAlignment$I(4);
this.annotations.setHorizontalTextPosition$I(2);
this.annotations.setSelected$Z(true);
this.annotations.setText$S($I$(1).getString$S("label.show_annotations"));
this.annotations.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].annotations_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$23.$init$,[this, null])));
this.identity.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].annotations_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$24.$init$,[this, null])));
this.showGroupConsensus.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].annotations_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$25.$init$,[this, null])));
this.showUnconserved.setFont$java_awt_Font(C$.LABEL_FONT);
this.showUnconserved.setHorizontalAlignment$I(4);
this.showUnconserved.setHorizontalTextPosition$I(2);
this.showUnconserved.setSelected$Z(true);
this.showUnconserved.setText$S($I$(1).getString$S("action.show_unconserved"));
this.showUnconserved.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].showunconserved_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GPreferences'], [e]);
});
})()
), Clazz.new_(P$.GPreferences$26.$init$,[this, null])));
this.seqLimit.setFont$java_awt_Font(C$.LABEL_FONT);
this.seqLimit.setHorizontalAlignment$I(4);
this.seqLimit.setHorizontalTextPosition$I(2);
this.seqLimit.setText$S($I$(1).getString$S("label.full_sequence_id"));
this.smoothFont.setFont$java_awt_Font(C$.LABEL_FONT);
this.smoothFont.setHorizontalAlignment$I(4);
this.smoothFont.setHorizontalTextPosition$I(10);
this.smoothFont.setText$S($I$(1).getString$S("label.smooth_font"));
this.scaleProteinToCdna.setFont$java_awt_Font(C$.LABEL_FONT);
this.scaleProteinToCdna.setHorizontalAlignment$I(4);
this.scaleProteinToCdna.setHorizontalTextPosition$I(10);
this.scaleProteinToCdna.setText$S($I$(1).getString$S("label.scale_protein_to_cdna"));
this.scaleProteinToCdna.setToolTipText$S($I$(1).getString$S("label.scale_protein_to_cdna_tip"));
var gapLabel=Clazz.new_($I$(11,1));
gapLabel.setFont$java_awt_Font(C$.LABEL_FONT);
gapLabel.setHorizontalAlignment$I(4);
gapLabel.setText$S($I$(1).getString$S("label.gap_symbol") + " ");
var fontLabel=Clazz.new_($I$(11,1));
fontLabel.setFont$java_awt_Font(C$.LABEL_FONT);
fontLabel.setHorizontalAlignment$I(4);
fontLabel.setText$S($I$(1).getString$S("label.font"));
this.fontSizeCB.setFont$java_awt_Font(C$.LABEL_FONT);
this.fontSizeCB.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[320, 112, 65, 23]));
this.fontStyleCB.setFont$java_awt_Font(C$.LABEL_FONT);
this.fontStyleCB.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[382, 112, 80, 23]));
this.fontNameCB.setFont$java_awt_Font(C$.LABEL_FONT);
this.fontNameCB.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 112, 147, 23]));
this.gapSymbolCB.setFont$java_awt_Font(C$.LABEL_FONT);
this.gapSymbolCB.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 215, 69, 23]));
var dlcr=Clazz.new_($I$(40,1));
dlcr.setHorizontalAlignment$I(0);
this.gapSymbolCB.setRenderer$javax_swing_ListCellRenderer(dlcr);
this.startupCheckbox.setText$S($I$(1).getString$S("action.open_file"));
this.startupCheckbox.setFont$java_awt_Font(C$.LABEL_FONT);
this.startupCheckbox.setHorizontalAlignment$I(4);
this.startupCheckbox.setHorizontalTextPosition$I(2);
this.startupCheckbox.setSelected$Z(true);
this.startupFileTextfield.setFont$java_awt_Font(C$.LABEL_FONT);
this.startupFileTextfield.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 310, 330, 20]));
var tooltip=$I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.double_click_to_browse")]);
this.startupFileTextfield.setToolTipText$S(tooltip);
this.startupFileTextfield.addMouseListener$java_awt_event_MouseListener(((P$.GPreferences$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() > 1) {
this.b$['jalview.jbgui.GPreferences'].startupFileTextfield_mouseClicked$.apply(this.b$['jalview.jbgui.GPreferences'], []);
}});
})()
), Clazz.new_($I$(34,1),[this, null],P$.GPreferences$27)));
this.sortby.setFont$java_awt_Font(C$.LABEL_FONT);
this.sortby.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 260, 155, 21]));
var sortLabel=Clazz.new_($I$(11,1));
sortLabel.setFont$java_awt_Font(C$.LABEL_FONT);
sortLabel.setHorizontalAlignment$I(4);
sortLabel.setText$S($I$(1).getString$S("label.sort_by"));
this.sortAnnBy.setFont$java_awt_Font(C$.LABEL_FONT);
this.sortAnnBy.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[172, 285, 110, 21]));
var sortAnnLabel=Clazz.new_($I$(11,1));
sortAnnLabel.setFont$java_awt_Font(C$.LABEL_FONT);
sortAnnLabel.setHorizontalAlignment$I(4);
sortAnnLabel.setText$S($I$(1).getString$S("label.sort_ann_by"));
this.sortAutocalc.setFont$java_awt_Font(C$.LABEL_FONT);
this.sortAutocalc.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[290, 285, 165, 21]));
var annsettingsPanel=Clazz.new_($I$(8,1));
annsettingsPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[173, 13, 320, 96]));
annsettingsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(31,1).c$$I$I$I,[0, 0, 0]));
annsettingsPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(41,1)));
visualTab.add$java_awt_Component(annsettingsPanel);
var jb=Clazz.new_($I$(42,1).c$$I$I$I$I,[1, 1, 4, 5]);
this.annotations.setBorder$javax_swing_border_Border(jb);
this.showOccupancy.setBorder$javax_swing_border_Border(jb);
this.quality.setBorder$javax_swing_border_Border(jb);
this.conservation.setBorder$javax_swing_border_Border(jb);
this.identity.setBorder$javax_swing_border_Border(jb);
showConsensbits.setBorder$javax_swing_border_Border(jb);
showGroupbits.setBorder$javax_swing_border_Border(jb);
this.showGroupConsensus.setBorder$javax_swing_border_Border(jb);
this.showGroupConservation.setBorder$javax_swing_border_Border(jb);
this.showConsensHistogram.setBorder$javax_swing_border_Border(jb);
this.showConsensLogo.setBorder$javax_swing_border_Border(jb);
var autoAnnotSettings=Clazz.new_($I$(8,1));
annsettingsPanel.add$java_awt_Component(autoAnnotSettings);
autoAnnotSettings.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1).c$$I$I,[0, 2]));
autoAnnotSettings.add$java_awt_Component(this.annotations);
autoAnnotSettings.add$java_awt_Component(this.quality);
autoAnnotSettings=Clazz.new_($I$(8,1));
annsettingsPanel.add$java_awt_Component(autoAnnotSettings);
autoAnnotSettings.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1).c$$I$I,[0, 3]));
autoAnnotSettings.add$java_awt_Component(this.conservation);
autoAnnotSettings.add$java_awt_Component(this.identity);
autoAnnotSettings.add$java_awt_Component(this.showOccupancy);
autoAnnotSettings.add$java_awt_Component(showGroupbits);
autoAnnotSettings.add$java_awt_Component(this.showGroupConservation);
autoAnnotSettings.add$java_awt_Component(this.showGroupConsensus);
autoAnnotSettings.add$java_awt_Component(showConsensbits);
autoAnnotSettings.add$java_awt_Component(this.showConsensHistogram);
autoAnnotSettings.add$java_awt_Component(this.showConsensLogo);
var tooltipSettings=Clazz.new_($I$(8,1));
tooltipSettings.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.sequence_id_tooltip")],$I$(23,1).c$$S));
tooltipSettings.setBounds$I$I$I$I(173, 140, 220, 62);
tooltipSettings.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1).c$$I$I,[2, 1]));
tooltipSettings.add$java_awt_Component(this.showDbRefTooltip);
tooltipSettings.add$java_awt_Component(this.showNpTooltip);
visualTab.add$java_awt_Component(tooltipSettings);
this.wrap.setFont$java_awt_Font(C$.LABEL_FONT);
this.wrap.setHorizontalAlignment$I(11);
this.wrap.setHorizontalTextPosition$I(10);
this.wrap.setText$S($I$(1).getString$S("label.wrap_alignment"));
this.rightAlign.setFont$java_awt_Font(C$.LABEL_FONT);
this.rightAlign.setForeground$java_awt_Color($I$(20).black);
this.rightAlign.setHorizontalAlignment$I(4);
this.rightAlign.setHorizontalTextPosition$I(2);
this.rightAlign.setText$S($I$(1).getString$S("label.right_align_ids"));
this.idItalics.setFont$java_awt_Font(C$.LABEL_FONT_ITALIC);
this.idItalics.setHorizontalAlignment$I(4);
this.idItalics.setHorizontalTextPosition$I(10);
this.idItalics.setText$S($I$(1).getString$S("label.sequence_name_italics"));
this.openoverv.setFont$java_awt_Font(C$.LABEL_FONT);
this.openoverv.setActionCommand$S($I$(1).getString$S("label.open_overview"));
this.openoverv.setHorizontalAlignment$I(4);
this.openoverv.setHorizontalTextPosition$I(2);
this.openoverv.setText$S($I$(1).getString$S("label.open_overview"));
var jPanel2=Clazz.new_($I$(8,1));
jPanel2.setBounds$java_awt_Rectangle(Clazz.new_($I$(22,1).c$$I$I$I$I,[7, 17, 158, 310]));
jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1).c$$I$I,[14, 1]));
jPanel2.add$java_awt_Component(this.fullScreen);
jPanel2.add$java_awt_Component(this.openoverv);
jPanel2.add$java_awt_Component(this.seqLimit);
jPanel2.add$java_awt_Component(this.rightAlign);
jPanel2.add$java_awt_Component(fontLabel);
jPanel2.add$java_awt_Component(this.showUnconserved);
jPanel2.add$java_awt_Component(this.idItalics);
jPanel2.add$java_awt_Component(this.smoothFont);
jPanel2.add$java_awt_Component(this.scaleProteinToCdna);
jPanel2.add$java_awt_Component(gapLabel);
jPanel2.add$java_awt_Component(this.wrap);
jPanel2.add$java_awt_Component(sortLabel);
jPanel2.add$java_awt_Component(sortAnnLabel);
jPanel2.add$java_awt_Component(this.startupCheckbox);
visualTab.add$java_awt_Component(jPanel2);
visualTab.add$java_awt_Component(this.startupFileTextfield);
visualTab.add$java_awt_Component(this.sortby);
visualTab.add$java_awt_Component(this.sortAnnBy);
visualTab.add$java_awt_Component(this.sortAutocalc);
visualTab.add$java_awt_Component(this.gapSymbolCB);
visualTab.add$java_awt_Component(this.fontNameCB);
visualTab.add$java_awt_Component(this.fontSizeCB);
visualTab.add$java_awt_Component(this.fontStyleCB);
if ($I$(19).isJS$()) {
this.startupCheckbox.setVisible$Z(false);
this.startupFileTextfield.setVisible$Z(false);
}return visualTab;
}, p$1);

Clazz.newMeth(C$, 'loadLastSavedBackupsOptions$',  function () {
var savedPreset=$I$(43).getSavedBackupEntry$();
this.enableBackupFiles.setSelected$Z($I$(29,"getDefault$S$Z",["BACKUPFILES_ENABLED", !$I$(19).isJS$()]));
var backupfilesCustomEntry=$I$(43,"createBackupFilesPresetEntry$S",[$I$(29).getDefault$S$S("BACKUPFILES_CUSTOM", null)]);
if (backupfilesCustomEntry == null ) {
backupfilesCustomEntry=$I$(43).backupfilesPresetEntriesValues.get$O(Integer.valueOf$I(1));
}$I$(43).backupfilesPresetEntriesValues.put$O$O(Integer.valueOf$I(0), backupfilesCustomEntry);
this.setComboIntStringKey$javax_swing_JComboBox$I(this.backupfilesPresetsCombo, $I$(29).getDefault$S$I("BACKUPFILES_PRESET", 1));
this.backupsSetOptions$jalview_io_BackupFilesPresetEntry(savedPreset);
this.backupsOptionsSetEnabled$();
this.updateBackupFilesExampleLabel$();
});

Clazz.newMeth(C$, 'loadLastSavedMemorySettings$',  function () {
this.customiseMemorySetting.setSelected$Z($I$(29).getDefault$S$Z("MEMORY_CUSTOMISED_SETTINGS", false));
this.jvmMemoryPercentSlider.setValue$I($I$(29,"getDefault$S$I",[$I$(44).MEMORY_JVMMEMPC, 90]));
this.jvmMemoryMaxTextField.setText$S($I$(29,"getDefault$S$S",[$I$(44).MEMORY_JVMMEMMAX, "32g"]));
});

Clazz.newMeth(C$, 'warnAboutSuffixReverseChange',  function () {
var bfpe=$I$(43).getSavedBackupEntry$();
var savedSuffixReverse=bfpe.reverse;
var savedSuffixDigits=bfpe.digits;
var savedSuffixTemplate=bfpe.suffix;
var nowSuffixReverse=this.suffixReverse.isSelected$();
var nowSuffixDigits=C$.getSpinnerInt$javax_swing_JSpinner$I(this.suffixDigitsSpinner, 3);
var nowSuffixTemplate=this.suffixTemplate.getText$();
return nowSuffixReverse != savedSuffixReverse  && nowSuffixDigits == savedSuffixDigits  && nowSuffixTemplate != null   && nowSuffixTemplate.equals$O(savedSuffixTemplate) ;
}, p$1);

Clazz.newMeth(C$, 'initStartupTab',  function () {
var startupTab=Clazz.new_($I$(8,1));
startupTab.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.memory")],$I$(23,1).c$$S));
startupTab.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
var gbc=Clazz.new_($I$(26,1));
gbc.weightx=0.0;
gbc.weighty=0.0;
gbc.anchor=23;
gbc.fill=0;
p$1.initMemoryPanel.apply(this, []);
gbc.gridheight=1;
gbc.gridwidth=3;
gbc.gridy=0;
gbc.gridx=0;
var memoryText=Clazz.new_($I$(11,1));
memoryText.setFont$java_awt_Font(C$.LABEL_FONT_ITALIC);
memoryText.setText$S($I$(1).getString$S("label.memory_setting_text"));
startupTab.add$java_awt_Component$O(memoryText, gbc);
++gbc.gridy;
gbc.gridx=0;
var exampleMemoryPanel=Clazz.new_($I$(8,1));
exampleMemoryPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(45,1).c$$java_awt_Container$I,[exampleMemoryPanel, 1]));
exampleMemoryPanel.setToolTipText$S($I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.memory_example_tooltip")]));
var exampleTextLabel=Clazz.new_($I$(11,1));
exampleTextLabel.setText$S($I$(1).getString$S("label.memory_example_text"));
exampleTextLabel.setForeground$java_awt_Color($I$(20).GRAY);
exampleTextLabel.setFont$java_awt_Font(C$.LABEL_FONT);
exampleMemoryPanel.add$java_awt_Component(exampleTextLabel);
exampleMemoryPanel.add$java_awt_Component(this.exampleMemoryLabel);
exampleMemoryPanel.setBackground$java_awt_Color($I$(20).WHITE);
exampleMemoryPanel.setBorder$javax_swing_border_Border($I$(32).createEtchedBorder$());
startupTab.add$java_awt_Component$O(exampleMemoryPanel, gbc);
++gbc.gridy;
gbc.gridx=0;
startupTab.add$java_awt_Component$O(this.customiseMemorySetting, gbc);
gbc.gridy+=2;
gbc.gridx=0;
startupTab.add$java_awt_Component$O(this.maxMemoryLabel, gbc);
gbc.gridy+=2;
gbc.gridx=0;
gbc.gridwidth=1;
startupTab.add$java_awt_Component$O(this.jvmMemoryPercentLabel, gbc);
++gbc.gridx;
startupTab.add$java_awt_Component$O(this.jvmMemoryPercentSlider, gbc);
++gbc.gridx;
startupTab.add$java_awt_Component$O(this.jvmMemoryPercentDisplay, gbc);
gbc.gridwidth=3;
++gbc.gridy;
gbc.gridx=0;
startupTab.add$java_awt_Component$O(this.jvmMemoryMaxLabel, gbc);
++gbc.gridx;
startupTab.add$java_awt_Component$O(this.jvmMemoryMaxTextField, gbc);
++gbc.gridy;
gbc.gridx=0;
gbc.gridwidth=4;
this.exampleMemoryMessageTextArea.setBackground$java_awt_Color(startupTab.getBackground$());
var sp=Clazz.new_($I$(28,1).c$$java_awt_Component,[this.exampleMemoryMessageTextArea]);
sp.setBorder$javax_swing_border_Border($I$(32).createEmptyBorder$());
sp.setHorizontalScrollBarPolicy$I(31);
sp.setVerticalScrollBarPolicy$I(21);
startupTab.add$java_awt_Component$O(sp, gbc);
++gbc.gridy;
gbc.weighty=1.0;
gbc.gridx=100;
gbc.gridwidth=1;
gbc.weightx=1.0;
startupTab.add$java_awt_Component$O(Clazz.new_($I$(8,1)), gbc);
p$1.setMemoryPercentDisplay.apply(this, []);
p$1.memoryOptionsSetEnabled.apply(this, []);
return startupTab;
}, p$1);

Clazz.newMeth(C$, 'initMemoryPanel',  function () {
this.customiseMemorySetting.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.customiseMemorySetting.setText$S($I$(1).getString$S("label.customise_memory_settings"));
this.customiseMemorySetting.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.memoryOptionsSetEnabled.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$28.$init$,[this, null])));
this.loadLastSavedMemorySettings$();
this.exampleMemoryLabel.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.exampleMemoryLabel.setBackground$java_awt_Color($I$(20).WHITE);
this.maxMemoryLabel=Clazz.new_([$I$(1).getString$S("label.maximum_memory_used")],$I$(11,1).c$$S);
this.maxMemoryLabel.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.jvmMemoryPercentLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.jvmMemoryPercentLabel.setText$S($I$(1).getString$S("label.percent_of_physical_memory"));
this.jvmMemoryPercentSlider.setPaintLabels$Z(true);
this.jvmMemoryPercentSlider.setPaintTicks$Z(true);
this.jvmMemoryPercentSlider.setPaintTrack$Z(true);
this.jvmMemoryPercentSlider.setMajorTickSpacing$I(50);
this.jvmMemoryPercentSlider.setMinorTickSpacing$I(10);
this.jvmMemoryPercentSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.GPreferences$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.setMemoryPercentDisplay.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$29.$init$,[this, null])));
this.jvmMemoryPercentDisplay.setFont$java_awt_Font(C$.LABEL_FONT);
p$1.setMemoryPercentDisplay.apply(this, []);
this.jvmMemoryMaxLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.jvmMemoryMaxLabel.setText$S($I$(1).getString$S("label.maximum_memory"));
p$1.initMemoryMaxTextField.apply(this, []);
this.exampleMemoryMessageTextArea.setFont$java_awt_Font(C$.LABEL_FONT_ITALIC);
this.exampleMemoryMessageTextArea.setForeground$java_awt_Color($I$(20).GRAY);
this.exampleMemoryMessageTextArea.setEditable$Z(false);
this.exampleMemoryMessageTextArea.setLineWrap$Z(true);
this.exampleMemoryMessageTextArea.setWrapStyleWord$Z(true);
this.exampleMemoryMessageTextArea.setText$S(" ");
this.exampleMemoryMessageTextArea.setRows$I(2);
this.exampleMemoryMessageTextArea.setColumns$I(40);
p$1.setExampleMemoryLabel.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'initMemoryMaxTextField',  function () {
this.jvmMemoryMaxTextField.setToolTipText$S($I$(1).getString$S("label.maximum_memory_tooltip"));
this.jvmMemoryMaxTextField.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (arg0) {
p$1.validateMemoryMaxTextField.apply(this.b$['jalview.jbgui.GPreferences'], []);
p$1.setExampleMemoryLabel.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$30.$init$,[this, null])));
this.jvmMemoryMaxTextField.addKeyListener$java_awt_event_KeyListener(((P$.GPreferences$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
p$1.validateMemoryMaxTextField.apply(this.b$['jalview.jbgui.GPreferences'], []);
p$1.setExampleMemoryLabel.apply(this.b$['jalview.jbgui.GPreferences'], []);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
var c=Character.toLowerCase$C(e.getKeyChar$());
var text=this.b$['jalview.jbgui.GPreferences'].jvmMemoryMaxTextField.getText$();
var suffixes="tgmkb";
var pos=this.b$['jalview.jbgui.GPreferences'].jvmMemoryMaxTextField.getCaretPosition$();
var suffixPos=$I$(46).firstCharPosIgnoreCase$S$S(text, suffixes);
if (!((("0" <= c && c <= "9" ) && (suffixPos == -1 || pos <= suffixPos ) ) || (suffixes.indexOf$I(Character.toLowerCase$C(c)) >= 0 && pos == text.length$()  && suffixPos == -1 ) )) {
e.consume$();
}});
})()
), Clazz.new_(P$.GPreferences$31.$init$,[this, null])));
}, p$1);

Clazz.newMeth(C$, 'isMemoryMaxTextFieldValid',  function () {
return $I$(44,"isValidMemoryString$S",[this.jvmMemoryMaxTextField.getText$()]);
}, p$1);

Clazz.newMeth(C$, 'validateMemoryMaxTextField',  function () {
if (p$1.isMemoryMaxTextFieldValid.apply(this, [])) {
this.jvmMemoryMaxTextField.setBackground$java_awt_Color($I$(20).WHITE);
} else {
this.jvmMemoryMaxTextField.setBackground$java_awt_Color($I$(20).PINK);
}}, p$1);

Clazz.newMeth(C$, 'setMemoryPercentDisplay',  function () {
this.jvmMemoryPercentDisplay.setText$S(this.jvmMemoryPercentSlider.getValue$() + "%");
p$1.setExampleMemoryLabel.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setExampleMemoryLabel',  function () {
var selected=this.customiseMemorySetting.isSelected$();
var jvmmempc=this.jvmMemoryPercentSlider.getValue$();
var jvmmemmax=this.jvmMemoryMaxTextField.getText$();
var mem;
if (selected && (0 <= jvmmempc && jvmmempc <= 100 ) && $I$(44).isValidMemoryString$S(jvmmemmax)  ) {
mem=$I$(44,"getMemorySetting$S$S$Z$Z",[jvmmemmax, String.valueOf$I(jvmmempc), false, true]);
} else {
mem=$I$(44).getMemorySetting$S$S$Z$Z(null, null, false, true);
}this.exampleMemoryLabel.setText$S($I$(44).memoryLongToString$J(mem));
var message=$I$(44).getAdjustmentMessage$();
this.exampleMemoryMessageTextArea.setText$S($I$(1).getString$S("label.adjustments_for_this_computer") + ": " + (message == null  ? $I$(1).getString$S("label.none") : message) );
}, p$1);

Clazz.newMeth(C$, 'memoryOptionsSetEnabled',  function () {
var enabled=this.customiseMemorySetting.isSelected$();
this.maxMemoryLabel.setEnabled$Z(enabled);
this.jvmMemoryPercentLabel.setEnabled$Z(enabled);
this.jvmMemoryPercentSlider.setEnabled$Z(enabled);
this.jvmMemoryPercentDisplay.setEnabled$Z(enabled);
this.jvmMemoryMaxLabel.setEnabled$Z(enabled);
this.jvmMemoryMaxTextField.setEnabled$Z(enabled);
this.exampleMemoryMessageTextArea.setEnabled$Z(enabled);
p$1.setExampleMemoryLabel.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'initBackupsTab',  function () {
var backupsTab=Clazz.new_($I$(8,1));
backupsTab.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.backup_files")],$I$(23,1).c$$S));
backupsTab.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
var gbc=Clazz.new_($I$(26,1));
gbc.weightx=0.0;
gbc.weighty=0.0;
gbc.anchor=23;
gbc.fill=0;
p$1.initBackupsTabPresetsPanel.apply(this, []);
p$1.initBackupsTabSuffixPanel.apply(this, []);
p$1.initBackupsTabKeepFilesPanel.apply(this, []);
p$1.initBackupsTabFilenameExamplesPanel.apply(this, []);
this.enableBackupFiles.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
this.enableBackupFiles.setText$S($I$(1).getString$S("label.enable_backupfiles"));
this.enableBackupFiles.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].backupsOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$32.$init$,[this, null])));
gbc.gridwidth=1;
gbc.gridheight=1;
gbc.gridx=0;
gbc.gridy=0;
backupsTab.add$java_awt_Component$O(this.enableBackupFiles, gbc);
gbc.gridx=1;
gbc.weightx=0.0;
gbc.gridheight=2;
gbc.anchor=24;
gbc.fill=1;
backupsTab.add$java_awt_Component$O(this.exampleFilesPanel, gbc);
gbc.gridheight=1;
gbc.anchor=23;
gbc.fill=0;
++gbc.gridx;
gbc.weightx=1.0;
backupsTab.add$java_awt_Component$O(Clazz.new_($I$(8,1)), gbc);
gbc.weightx=0.0;
gbc.gridx=0;
++gbc.gridy;
backupsTab.add$java_awt_Component$O(this.presetsPanel, gbc);
gbc.gridwidth=2;
gbc.gridheight=1;
gbc.gridx=0;
++gbc.gridy;
backupsTab.add$java_awt_Component$O(this.keepfilesPanel, gbc);
++gbc.gridy;
backupsTab.add$java_awt_Component$O(this.suffixPanel, gbc);
++gbc.gridy;
gbc.weighty=1.0;
backupsTab.add$java_awt_Component$O(Clazz.new_($I$(8,1)), gbc);
this.backupsOptionsSetEnabled$();
return backupsTab;
}, p$1);

Clazz.newMeth(C$, 'initBackupsTabPresetsPanel',  function () {
var title=$I$(1).getString$S("label.schemes");
this.presetsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
var gbc=Clazz.new_($I$(26,1));
gbc.weightx=0.0;
gbc.weighty=0.0;
gbc.anchor=512;
gbc.fill=0;
gbc.gridwidth=1;
gbc.gridheight=1;
gbc.gridx=0;
gbc.gridy=0;
this.presetsComboLabel=Clazz.new_($I$(11,1).c$$S,[title + ":"]);
this.presetsPanel.add$java_awt_Component$O(this.presetsComboLabel, gbc);
var entries=$I$(47,"asList$OA",[$I$(43).backupfilesPresetEntries]);
var tooltips=$I$(47,"asList$OA",[$I$(43).backupfilesPresetEntryDescriptions]);
this.backupfilesPresetsCombo=$I$(3).buildComboWithTooltips$java_util_List$java_util_List(entries, tooltips);
this.backupfilesPresetsCombo.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var key=this.b$['jalview.jbgui.GPreferences'].getComboIntStringKey$javax_swing_JComboBox.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsCombo]);
if (!this.b$['jalview.jbgui.GPreferences'].customiseCheckbox.isSelected$()) {
this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsComboLastSelected=key;
}if (key == 0) {
if (this.b$['jalview.jbgui.GPreferences'].customiseCheckbox.isSelected$()) {
this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
} else {
p$1.backupsTabUpdatePresets.apply(this.b$['jalview.jbgui.GPreferences'], []);
this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
}} else {
this.b$['jalview.jbgui.GPreferences'].customiseCheckbox.setSelected$Z(false);
p$1.backupsTabUpdatePresets.apply(this.b$['jalview.jbgui.GPreferences'], []);
this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
}});
})()
), Clazz.new_(P$.GPreferences$33.$init$,[this, null])));
gbc.gridx=1;
this.presetsPanel.add$java_awt_Component$O(this.backupfilesPresetsCombo, gbc);
this.revertButton.setText$S($I$(1).getString$S("label.cancel_changes"));
this.revertButton.setToolTipText$S($I$(1).getString$S("label.cancel_changes_description"));
this.revertButton.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].backupsSetOptions$jalview_io_BackupFilesPresetEntry.apply(this.b$['jalview.jbgui.GPreferences'], [$I$(43).backupfilesPresetEntriesValues.get$O(Integer.valueOf$I(0))]);
this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$34.$init$,[this, null])));
this.revertButton.setFont$java_awt_Font(C$.LABEL_FONT);
this.customiseCheckbox.setFont$java_awt_Font(C$.LABEL_FONT);
this.customiseCheckbox.setText$S($I$(1).getString$S("label.customise"));
this.customiseCheckbox.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var currently=this.b$['jalview.jbgui.GPreferences'].getComboIntStringKey$javax_swing_JComboBox.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsCombo]);
if (this.b$['jalview.jbgui.GPreferences'].customiseCheckbox.isSelected$()) {
this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsComboLastSelected=currently;
this.b$['jalview.jbgui.GPreferences'].setComboIntStringKey$javax_swing_JComboBox$I.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsCombo, 0]);
} else {
this.b$['jalview.jbgui.GPreferences'].setComboIntStringKey$javax_swing_JComboBox$I.apply(this.b$['jalview.jbgui.GPreferences'], [this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsCombo, this.b$['jalview.jbgui.GPreferences'].backupfilesPresetsComboLastSelected]);
}this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$35.$init$,[this, null])));
this.customiseCheckbox.setToolTipText$S($I$(1).getString$S("label.customise_description"));
gbc.gridx=0;
++gbc.gridy;
this.presetsPanel.add$java_awt_Component$O(this.customiseCheckbox, gbc);
gbc.gridx=1;
this.presetsPanel.add$java_awt_Component$O(this.revertButton, gbc);
return this.presetsPanel;
}, p$1);

Clazz.newMeth(C$, 'initBackupsTabFilenameExamplesPanel',  function () {
var title=$I$(1).getString$S("label.scheme_examples");
var tb=Clazz.new_($I$(23,1).c$$S,[title]);
this.exampleFilesPanel.setBorder$javax_swing_border_Border(tb);
this.exampleFilesPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
this.backupfilesExampleLabel.setEditable$Z(false);
this.backupfilesExampleLabel.setBackground$java_awt_Color(this.exampleFilesPanel.getBackground$());
this.updateBackupFilesExampleLabel$();
var gbc=Clazz.new_($I$(26,1));
gbc.weightx=1.0;
gbc.weighty=1.0;
gbc.fill=0;
gbc.anchor=23;
this.exampleFilesPanel.add$java_awt_Component$O(this.backupfilesExampleLabel, gbc);
return this.exampleFilesPanel;
}, p$1);

Clazz.newMeth(C$, 'backupsTabUpdatePresets',  function () {
var entry=this.backupfilesPresetsCombo.getSelectedItem$();
var key=entry.k;
var value=entry.v;
if ($I$(43).backupfilesPresetEntriesValues.containsKey$O(Integer.valueOf$I(key))) {
this.backupsSetOptions$jalview_io_BackupFilesPresetEntry($I$(43).backupfilesPresetEntriesValues.get$O(Integer.valueOf$I(key)));
} else {
$I$(48).error$S("Preset '" + value + "' [key:" + key + "] not implemented" );
}this.updateBackupFilesExampleLabel$();
}, p$1);

Clazz.newMeth(C$, 'getComboIntStringKey$javax_swing_JComboBox',  function (backupfilesPresetsCombo2) {
var e;
try {
e=backupfilesPresetsCombo2.getSelectedItem$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(48).error$S("Problem casting Combo entry to IntKeyStringValueEntry.");
e=null;
} else {
throw ex;
}
}
return e != null  ? e.k : 0;
});

Clazz.newMeth(C$, 'setComboIntStringKey$javax_swing_JComboBox$I',  function (backupfilesPresetsCombo2, key) {
for (var i=0; i < backupfilesPresetsCombo2.getItemCount$(); i++) {
var e;
try {
e=backupfilesPresetsCombo2.getItemAt$I(i);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(48).error$S("Problem casting Combo entry to IntKeyStringValueEntry. Skipping item. ");
continue;
} else {
throw ex;
}
}
if (e.k == key) {
backupfilesPresetsCombo2.setSelectedIndex$I(i);
break;
}}
});

Clazz.newMeth(C$, 'initBackupsTabSuffixPanel',  function () {
this.suffixPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.backup_filename_strategy")],$I$(23,1).c$$S));
this.suffixPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
this.suffixTemplateLabel.setText$S($I$(1).getString$S("label.append_to_filename"));
this.suffixTemplateLabel.setHorizontalAlignment$I(2);
this.suffixTemplateLabel.setFont$java_awt_Font(C$.LABEL_FONT);
var tooltip=$I$(3,"wrapTooltip$Z$S",[true, $I$(1).getString$S("label.append_to_filename_tooltip")]);
this.suffixTemplate.setToolTipText$S(tooltip);
this.suffixTemplate.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});
})()
), Clazz.new_(P$.GPreferences$36.$init$,[this, null])));
this.suffixTemplate.addKeyListener$java_awt_event_KeyListener(((P$.GPreferences$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
this.b$['jalview.jbgui.GPreferences'].backupfilesCustomOptionsSetEnabled$.apply(this.b$['jalview.jbgui.GPreferences'], []);
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
var c=e.getKeyChar$();
if (c == ":" || c == "/"  || c == "\\" ) {
e.consume$();
}});
})()
), Clazz.new_(P$.GPreferences$37.$init$,[this, null])));
this.suffixDigitsLabel.setText$S($I$(1).getString$S("label.index_digits"));
this.suffixDigitsLabel.setHorizontalAlignment$I(2);
this.suffixDigitsLabel.setFont$java_awt_Font(C$.LABEL_FONT);
var c=((P$.GPreferences$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$38.$init$,[this, null]));
this.setIntegerSpinner$javax_swing_JSpinner$I$I$I$javax_swing_event_ChangeListener(this.suffixDigitsSpinner, 1, 6, 3, c);
this.suffixReverse.setLabels$S$S($I$(1).getString$S("label.reverse_roll"), $I$(1).getString$S("label.increment_index"));
this.suffixReverse.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var okay=true;
if (p$1.warnAboutSuffixReverseChange.apply(this.b$['jalview.jbgui.GPreferences'], [])) {
okay=p$1.confirmSuffixReverseChange.apply(this.b$['jalview.jbgui.GPreferences'], []);
}if (okay) {
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
} else {
var savedSuffixReverse=$I$(43).getSavedBackupEntry$().reverse;
this.b$['jalview.jbgui.GPreferences'].suffixReverse.setSelected$Z(savedSuffixReverse);
}});
})()
), Clazz.new_(P$.GPreferences$39.$init$,[this, null])));
var sgbc=Clazz.new_($I$(26,1));
sgbc.anchor=17;
sgbc.gridx=0;
sgbc.gridy=0;
sgbc.gridwidth=1;
sgbc.gridheight=1;
sgbc.weightx=1.0;
sgbc.weighty=0.0;
sgbc.fill=0;
this.suffixPanel.add$java_awt_Component$O(this.suffixTemplateLabel, sgbc);
sgbc.gridx=1;
sgbc.fill=2;
this.suffixPanel.add$java_awt_Component$O(this.suffixTemplate, sgbc);
sgbc.gridy=1;
sgbc.gridx=0;
sgbc.fill=0;
this.suffixPanel.add$java_awt_Component$O(this.suffixDigitsLabel, sgbc);
sgbc.gridx=1;
sgbc.fill=2;
this.suffixPanel.add$java_awt_Component$O(this.suffixDigitsSpinner, sgbc);
sgbc.gridx=0;
sgbc.gridy=2;
sgbc.gridwidth=0;
sgbc.fill=2;
this.suffixPanel.add$java_awt_Component$O(this.suffixReverse.getFalseButton$(), sgbc);
sgbc.gridy=3;
this.suffixPanel.add$java_awt_Component$O(this.suffixReverse.getTrueButton$(), sgbc);
return this.suffixPanel;
}, p$1);

Clazz.newMeth(C$, 'confirmSuffixReverseChange',  function () {
var ret=false;
var warningMessage=$I$(1).getString$S("label.warning_confirm_change_reverse");
var confirm=$I$(49,"showConfirmDialog$java_awt_Component$O$S$I$I",[$I$(50).desktop, warningMessage, $I$(1).getString$S("label.change_increment_decrement"), 0, 2]);
ret=(confirm == 0);
return ret;
}, p$1);

Clazz.newMeth(C$, 'initBackupsTabKeepFilesPanel',  function () {
this.keepfilesPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(1).getString$S("label.keep_files")],$I$(23,1).c$$S));
this.keepfilesPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1)));
this.backupfilesKeepAll.setLabels$S$S($I$(1).getString$S("label.keep_all_backup_files"), $I$(1).getString$S("label.keep_only_this_number_of_backup_files"));
this.backupfilesKeepAll.addTrueActionListener$java_awt_event_ActionListener(((P$.GPreferences$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$40.$init$,[this, null])));
this.backupfilesKeepAll.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
p$1.keepRollMaxOptionsEnabled.apply(this.b$['jalview.jbgui.GPreferences'], []);
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$41.$init$,[this, null])));
var c=((P$.GPreferences$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
this.b$['jalview.jbgui.GPreferences'].updateBackupFilesExampleLabel$.apply(this.b$['jalview.jbgui.GPreferences'], []);
});
})()
), Clazz.new_(P$.GPreferences$42.$init$,[this, null]));
this.setIntegerSpinner$javax_swing_JSpinner$I$I$I$Z$javax_swing_event_ChangeListener(this.backupfilesRollMaxSpinner, 1, 999, 4, true, c);
this.backupfilesConfirmDelete.setLabels$S$S($I$(1).getString$S("label.always_ask"), $I$(1).getString$S("label.auto_delete"));
this.backupfilesConfirmDelete.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this.b$['jalview.jbgui.GPreferences'], [true]);
});
})()
), Clazz.new_(P$.GPreferences$43.$init$,[this, null])));
p$1.keepRollMaxOptionsEnabled.apply(this, []);
var kgbc=Clazz.new_($I$(26,1));
kgbc.anchor=17;
kgbc.gridx=0;
kgbc.gridy=0;
kgbc.gridwidth=0;
kgbc.gridheight=1;
kgbc.weightx=1.0;
kgbc.weighty=0.0;
kgbc.fill=2;
this.keepfilesPanel.add$java_awt_Component$O(this.backupfilesKeepAll.getTrueButton$(), kgbc);
kgbc.gridy=1;
kgbc.gridx=0;
kgbc.gridwidth=-1;
this.keepfilesPanel.add$java_awt_Component$O(this.backupfilesKeepAll.getFalseButton$(), kgbc);
kgbc.gridx=1;
kgbc.gridwidth=0;
this.keepfilesPanel.add$java_awt_Component$O(this.backupfilesRollMaxSpinner, kgbc);
kgbc.gridy=2;
kgbc.insets=Clazz.new_($I$(27,1).c$$I$I$I$I,[0, 20, 0, 0]);
kgbc.gridx=0;
kgbc.gridwidth=0;
kgbc.fill=2;
kgbc.weightx=1.0;
var jp=Clazz.new_($I$(8,1));
jp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(31,1)));
this.oldBackupFilesLabel.setText$S($I$(1).getString$S("label.autodelete_old_backup_files"));
this.oldBackupFilesLabel.setFont$java_awt_Font(C$.LABEL_FONT);
this.oldBackupFilesLabel.setHorizontalAlignment$I(2);
jp.add$java_awt_Component(this.oldBackupFilesLabel);
jp.add$java_awt_Component(this.backupfilesConfirmDelete.getTrueButton$());
jp.add$java_awt_Component(this.backupfilesConfirmDelete.getFalseButton$());
this.keepfilesPanel.add$java_awt_Component$O(jp, kgbc);
return this.keepfilesPanel;
}, p$1);

Clazz.newMeth(C$, 'updateBackupFilesExampleLabel$',  function () {
var exampleindex=12;
var base=$I$(1).getString$S("label.filename") + ".fa";
if (base == null  || base.length$() == 0 ) {
base="file_name.fa";
}var reverse=this.suffixReverse.isSelected$();
var keepAll=this.backupfilesKeepAll.isSelected$();
var rollMax=4;
var suffix=this.suffixTemplate.getText$();
var digits=3;
this.backupfilesExampleLabel.setFont$java_awt_Font(C$.LABEL_FONT_ITALIC);
if (suffix == null  || suffix.length$() == 0 ) {
this.backupfilesExampleLabel.setText$S($I$(1).getString$S("label.no_backup_files"));
this.backupfilesExampleLabel.setFont$java_awt_Font(C$.LABEL_FONT_BOLD);
return;
}rollMax=C$.getSpinnerInt$javax_swing_JSpinner$I(this.backupfilesRollMaxSpinner, 4);
rollMax=rollMax < 1 ? 1 : rollMax;
if (suffix.indexOf$S("%n") == -1) {
rollMax=1;
}digits=C$.getSpinnerInt$javax_swing_JSpinner$I(this.suffixDigitsSpinner, 3);
digits=digits < 1 ? 1 : digits;
var lowersurround=2;
var uppersurround=0;
var exampleSB=Clazz.new_($I$(30,1));
var firstLine=true;
var lineNumber=0;
if (reverse) {
var min=1;
var max=keepAll ? exampleindex : rollMax;
for (var index=min; index <= max; index++) {
if (index == min + lowersurround && index < max - uppersurround - 1  ) {
exampleSB.append$S("\n...");
++lineNumber;
} else if (index > min + lowersurround && index < max - uppersurround ) {
} else {
if (firstLine) {
firstLine=false;
} else {
exampleSB.append$S("\n");
++lineNumber;
}exampleSB.append$S($I$(51).getBackupFilename$I$S$S$I(index, base, suffix, digits));
if (min == max) {
} else if (index == min) {
var newest=$I$(1).getString$S("label.braced_newest");
if (newest != null  && newest.length$() > 0 ) {
exampleSB.append$S(" " + newest);
}} else if (index == max) {
var oldest=$I$(1).getString$S("label.braced_oldest");
if (oldest != null  && oldest.length$() > 0 ) {
exampleSB.append$S(" " + oldest);
}}}}
} else {
var min=(keepAll || exampleindex - rollMax < 0 ) ? 1 : exampleindex - rollMax + 1;
var max=exampleindex;
for (var index=min; index <= max; index++) {
if (index == min + lowersurround && index < max - uppersurround - 1  ) {
exampleSB.append$S("\n...");
++lineNumber;
} else if (index > min + lowersurround && index < max - uppersurround ) {
} else {
if (firstLine) {
firstLine=false;
} else {
exampleSB.append$S("\n");
++lineNumber;
}exampleSB.append$S($I$(51).getBackupFilename$I$S$S$I(index, base, suffix, digits));
if (min == max) {
} else if (index == min) {
var oldest=$I$(1).getString$S("label.braced_oldest");
if (oldest != null  && oldest.length$() > 0 ) {
exampleSB.append$S(" " + oldest);
}} else if (index == max) {
var newest=$I$(1).getString$S("label.braced_newest");
if (newest != null  && newest.length$() > 0 ) {
exampleSB.append$S(" " + newest);
}}}}
}var remainingLines=lowersurround + uppersurround + 1  - lineNumber;
if (remainingLines > 0) {
for (var i=0; i < remainingLines; i++) {
exampleSB.append$S("\n ");
++lineNumber;
}
}this.backupfilesExampleLabel.setText$S(exampleSB.toString());
});

Clazz.newMeth(C$, 'setIntegerSpinner$javax_swing_JSpinner$I$I$I$Z$javax_swing_event_ChangeListener',  function (s, min, max, def, useExistingVal, c) {
var i=def;
if (useExistingVal) {
try {
i=(s.getValue$()).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(48,"error$S",["Exception casting the initial value of s.getValue()"]);
} else {
throw e;
}
}
}this.setIntegerSpinner$javax_swing_JSpinner$I$I$I$javax_swing_event_ChangeListener(s, min, max, i, c);
});

Clazz.newMeth(C$, 'setIntegerSpinner$javax_swing_JSpinner$I$I$I$javax_swing_event_ChangeListener',  function (s, min, max, def, c) {
if (def > max) {
max=def;
}if (def < min) {
def=min;
}var sModel=Clazz.new_($I$(52,1).c$$I$I$I$I,[def, min, max, 1]);
s.setModel$javax_swing_SpinnerModel(sModel);
s.addChangeListener$javax_swing_event_ChangeListener(c);
});

Clazz.newMeth(C$, 'getSpinnerInt$javax_swing_JSpinner$I',  function (s, def) {
var i=def;
try {
s.commitEdit$();
i=(s.getValue$()).$c();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(48,"error$S",["Failed casting (Integer) JSpinner s.getValue()"]);
} else {
throw e;
}
}
return i;
}, 1);

Clazz.newMeth(C$, 'keepRollMaxOptionsEnabled',  function () {
var enabled=this.backupfilesKeepAll.isEnabled$() && !this.backupfilesKeepAll.isSelected$() ;
this.oldBackupFilesLabel.setEnabled$Z(enabled);
this.backupfilesRollMaxSpinner.setEnabled$Z(enabled);
this.backupfilesConfirmDelete.setEnabled$Z(enabled);
}, p$1);

Clazz.newMeth(C$, 'backupfilesKeepAllSetEnabled$Z',  function (tryEnabled) {
var enabled=tryEnabled && this.enableBackupFiles.isSelected$() && this.customiseCheckbox.isSelected$() && this.suffixTemplate.getText$().indexOf$S("%n") > -1  ;
this.keepfilesPanel.setEnabled$Z(enabled);
this.backupfilesKeepAll.setEnabled$Z(enabled);
this.oldBackupFilesLabel.setEnabled$Z(enabled);
p$1.keepRollMaxOptionsEnabled.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'backupfilesSuffixTemplateDigitsSetEnabled',  function () {
var enabled=this.suffixTemplate.isEnabled$() && this.suffixTemplate.getText$().indexOf$S("%n") > -1 ;
this.suffixDigitsLabel.setEnabled$Z(enabled);
this.suffixDigitsSpinner.setEnabled$Z(enabled);
this.suffixReverse.setEnabled$Z(enabled);
}, p$1);

Clazz.newMeth(C$, 'backupfilesSuffixTemplateSetEnabled$Z',  function (tryEnabled) {
var enabled=tryEnabled && this.enableBackupFiles.isSelected$() && this.customiseCheckbox.isSelected$()  ;
this.suffixPanel.setEnabled$Z(enabled);
this.suffixTemplateLabel.setEnabled$Z(enabled);
this.suffixTemplate.setEnabled$Z(enabled);
p$1.backupfilesSuffixTemplateDigitsSetEnabled.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'backupfilesRevertButtonSetEnabled$Z',  function (tryEnabled) {
var enabled=tryEnabled && this.enableBackupFiles.isSelected$() && this.customiseCheckbox.isSelected$() && p$1.backupfilesCustomChanged.apply(this, [])  ;
this.revertButton.setEnabled$Z(enabled);
}, p$1);

Clazz.newMeth(C$, 'backupfilesCustomChanged',  function () {
var custom=$I$(43).backupfilesPresetEntriesValues.get$O(Integer.valueOf$I(0));
var current=this.getBackupfilesCurrentEntry$();
return !custom.equals$jalview_io_BackupFilesPresetEntry(current);
}, p$1);

Clazz.newMeth(C$, 'getBackupfilesCurrentEntry$',  function () {
var suffix=this.suffixTemplate.getText$();
var digits=C$.getSpinnerInt$javax_swing_JSpinner$I(this.suffixDigitsSpinner, 3);
var reverse=this.suffixReverse.isSelected$();
var keepAll=this.backupfilesKeepAll.isSelected$();
var rollMax=C$.getSpinnerInt$javax_swing_JSpinner$I(this.backupfilesRollMaxSpinner, 3);
var confirmDelete=this.backupfilesConfirmDelete.isSelected$();
var bfpe=Clazz.new_($I$(43,1).c$$S$I$Z$Z$I$Z,[suffix, digits, reverse, keepAll, rollMax, confirmDelete]);
return bfpe;
});

Clazz.newMeth(C$, 'backupfilesCustomOptionsSetEnabled$',  function () {
var enabled=this.customiseCheckbox.isSelected$();
p$1.backupfilesRevertButtonSetEnabled$Z.apply(this, [enabled]);
p$1.backupfilesSuffixTemplateSetEnabled$Z.apply(this, [enabled]);
p$1.backupfilesKeepAllSetEnabled$Z.apply(this, [enabled]);
});

Clazz.newMeth(C$, 'backupfilesSummarySetEnabled',  function () {
var enabled=this.enableBackupFiles.isSelected$();
this.backupfilesExampleLabel.setEnabled$Z(enabled);
this.exampleFilesPanel.setEnabled$Z(enabled);
}, p$1);

Clazz.newMeth(C$, 'backupfilesPresetsSetEnabled',  function () {
var enabled=this.enableBackupFiles.isSelected$();
this.presetsPanel.setEnabled$Z(enabled);
this.presetsComboLabel.setEnabled$Z(enabled);
this.backupfilesPresetsCombo.setEnabled$Z(enabled);
this.customiseCheckbox.setEnabled$Z(enabled);
this.revertButton.setEnabled$Z(enabled);
}, p$1);

Clazz.newMeth(C$, 'backupsOptionsSetEnabled$',  function () {
p$1.backupfilesPresetsSetEnabled.apply(this, []);
p$1.backupfilesSummarySetEnabled.apply(this, []);
this.backupfilesCustomOptionsSetEnabled$();
});

Clazz.newMeth(C$, 'backupsSetOptions$S$I$Z$Z$I$Z',  function (suffix, digits, reverse, keepAll, rollMax, confirmDelete) {
this.suffixTemplate.setText$S(suffix);
this.suffixDigitsSpinner.setValue$O(Integer.valueOf$I(digits));
this.suffixReverse.setSelected$Z(reverse);
this.backupfilesKeepAll.setSelected$Z(keepAll);
this.backupfilesRollMaxSpinner.setValue$O(Integer.valueOf$I(rollMax));
this.backupfilesConfirmDelete.setSelected$Z(confirmDelete);
});

Clazz.newMeth(C$, 'backupsSetOptions$jalview_io_BackupFilesPresetEntry',  function (p) {
this.backupsSetOptions$S$I$Z$Z$I$Z(p.suffix, p.digits, p.reverse, p.keepAll, p.rollMax, p.confirmDelete);
});

Clazz.newMeth(C$, 'autoIdWidth_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'userIdWidth_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'maxColour_actionPerformed$javax_swing_JPanel',  function (panel) {
});

Clazz.newMeth(C$, 'minColour_actionPerformed$javax_swing_JPanel',  function (panel) {
});

Clazz.newMeth(C$, 'gapColour_actionPerformed$javax_swing_JPanel',  function (panel) {
});

Clazz.newMeth(C$, 'hiddenColour_actionPerformed$javax_swing_JPanel',  function (panel) {
});

Clazz.newMeth(C$, 'showunconserved_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'useLegacyGaps_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'resetOvDefaults_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'annotations_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'startupFileTextfield_mouseClicked$',  function () {
});

Clazz.newMeth(C$, 'newLink_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'editLink_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'deleteLink_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'linkURLList_keyTyped$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'setProxyAuthEnabled$',  function () {
var enabled=this.proxyAuth.isSelected$() && this.proxyAuth.isEnabled$() ;
this.proxyAuthUsernameLabel.setEnabled$Z(enabled);
this.proxyAuthPasswordLabel.setEnabled$Z(enabled);
this.passwordNotStoredLabel.setEnabled$Z(enabled);
this.proxyAuthUsernameTB.setEnabled$Z(enabled);
this.proxyAuthPasswordPB.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'setCustomProxyEnabled$',  function () {
var enabled=this.customProxy.isSelected$();
this.portLabel.setEnabled$Z(enabled);
this.serverLabel.setEnabled$Z(enabled);
this.portLabel2.setEnabled$Z(enabled);
this.serverLabel2.setEnabled$Z(enabled);
this.httpLabel.setEnabled$Z(enabled);
this.httpsLabel.setEnabled$Z(enabled);
this.proxyServerHttpTB.setEnabled$Z(enabled);
this.proxyPortHttpTB.setEnabled$Z(enabled);
this.proxyServerHttpsTB.setEnabled$Z(enabled);
this.proxyPortHttpsTB.setEnabled$Z(enabled);
this.proxyAuth.setEnabled$Z(enabled);
this.setProxyAuthEnabled$();
});

Clazz.newMeth(C$, 'proxyType_actionPerformed$',  function () {
this.setCustomProxyEnabled$();
this.proxyAuthPasswordCheckHighlight$Z(true);
this.applyProxyButtonEnabled$Z(true);
});

Clazz.newMeth(C$, 'proxyAuth_actionPerformed$',  function () {
this.setProxyAuthEnabled$();
this.proxyAuthPasswordCheckHighlight$Z(true);
this.applyProxyButtonEnabled$Z(true);
});

C$.$static$=function(){C$.$static$=0;
C$.LABEL_FONT=$I$(3).getLabelFont$();
C$.LABEL_FONT_ITALIC=$I$(3).getLabelFont$Z$Z(false, true);
C$.LABEL_FONT_BOLD=$I$(3).getLabelFont$Z$Z(true, false);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.GPreferences, "TabRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CONNECTIONS_TAB", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STRUCTURE_TAB", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GPreferences, "RadioButtonRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JRadioButton', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setHorizontalAlignment$I(0);
this.setToolTipText$S($I$(1).getString$S("label.urltooltip"));
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
this.setSelected$Z(!!((value).valueOf()));
if (isSelected) {
this.setBackground$java_awt_Color(table.getSelectionBackground$());
this.setForeground$java_awt_Color(table.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(table.getBackground$());
this.setForeground$java_awt_Color(table.getForeground$());
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GPreferences, "RadioButtonEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.button=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['button','javax.swing.JRadioButton']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.button.setHorizontalAlignment$I(0);
this.button.addActionListener$java_awt_event_ActionListener(((P$.GPreferences$RadioButtonEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPreferences$RadioButtonEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.AbstractCellEditor'].fireEditingStopped$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
});
})()
), Clazz.new_(P$.GPreferences$RadioButtonEditor$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.button.setSelected$Z(!!((value).valueOf()));
return this.button;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return Boolean.valueOf$Z(this.button.isSelected$());
});
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
