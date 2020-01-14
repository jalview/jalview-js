(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JCheckBoxMenuItem','jalview.util.MessageManager','jalview.gui.Preferences','jalview.util.UrlLink','java.util.ArrayList','java.util.LinkedHashMap','jalview.bin.Cache','Thread','jalview.util.BrowserLauncher','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.io.FileFormats','java.util.Collections','java.util.Arrays','jalview.gui.AppVarna','jalview.gui.ColourMenuHelper','java.util.Hashtable','jalview.datamodel.PDBEntry','jalview.util.StringUtils','jalview.util.Platform','javax.swing.JInternalFrame','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Color','javax.swing.JLabel','jalview.analysis.AlignmentAnnotationUtils','jalview.analysis.AlignmentUtils','jalview.util.GroupUrlLink','jalview.datamodel.SequenceI','jalview.gui.StructureChooser','javax.swing.JRadioButtonMenuItem','jalview.gui.SliderPanel','java.util.TreeMap','StringBuilder','jalview.gui.JvSwingUtils','java.util.BitSet','jalview.io.SequenceAnnotationReport','javax.swing.JScrollPane','jalview.gui.PaintRefresher','jalview.analysis.AAFrequency','jalview.gui.AnnotationChooser','jalview.analysis.Conservation','jalview.gui.EditNameDialog','jalview.gui.JalviewColourChooser','jalview.commands.ChangeCaseCommand','jalview.gui.CutAndPasteTransfer','jalview.io.FormatAdapter','jalview.datamodel.SequenceFeature','jalview.gui.FeatureEditor','jalview.gui.TextColourChooser','jalview.datamodel.AlignmentAnnotation','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'jalview.schemes.ColourSchemes']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PopupMenu", null, 'javax.swing.JPopupMenu', [['jalview.gui.ColourMenuHelper','jalview.gui.ColourMenuHelper.ColourChangeListener']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.groupMenu=null;
this.groupName=null;
this.abovePIDColour=null;
this.modifyPID=null;
this.conservationMenuItem=null;
this.annotationColour=null;
this.modifyConservation=null;
this.ap=null;
this.sequenceMenu=null;
this.sequenceName=null;
this.sequenceDetails=null;
this.sequenceSelDetails=null;
this.makeReferenceSeq=null;
this.chooseAnnotations=null;
this.sequence=null;
this.createGroupMenuItem=null;
this.unGroupMenuItem=null;
this.outline=null;
this.colourMenu=null;
this.showBoxes=null;
this.showText=null;
this.showColourText=null;
this.displayNonconserved=null;
this.editMenu=null;
this.cut=null;
this.copy=null;
this.upperCase=null;
this.lowerCase=null;
this.toggle=null;
this.pdbMenu=null;
this.outputMenu=null;
this.seqShowAnnotationsMenu=null;
this.seqHideAnnotationsMenu=null;
this.seqAddReferenceAnnotations=null;
this.groupShowAnnotationsMenu=null;
this.groupHideAnnotationsMenu=null;
this.groupAddReferenceAnnotations=null;
this.sequenceFeature=null;
this.textColour=null;
this.jMenu1=null;
this.pdbStructureDialog=null;
this.rnaStructureMenu=null;
this.editSequence=null;
this.groupLinksMenu=null;
this.hideInsertions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.groupMenu=Clazz.new_($I$(1));
this.groupName=Clazz.new_($I$(2));
this.abovePIDColour=Clazz.new_($I$(3));
this.modifyPID=Clazz.new_($I$(2));
this.conservationMenuItem=Clazz.new_($I$(3));
this.modifyConservation=Clazz.new_($I$(2));
this.sequenceMenu=Clazz.new_($I$(1));
this.sequenceName=Clazz.new_($I$(2));
this.sequenceDetails=Clazz.new_($I$(2));
this.sequenceSelDetails=Clazz.new_($I$(2));
this.makeReferenceSeq=Clazz.new_($I$(2));
this.chooseAnnotations=Clazz.new_($I$(2));
this.createGroupMenuItem=Clazz.new_($I$(2));
this.unGroupMenuItem=Clazz.new_($I$(2));
this.outline=Clazz.new_($I$(2));
this.colourMenu=Clazz.new_($I$(1));
this.showBoxes=Clazz.new_($I$(3));
this.showText=Clazz.new_($I$(3));
this.showColourText=Clazz.new_($I$(3));
this.displayNonconserved=Clazz.new_($I$(3));
this.editMenu=Clazz.new_($I$(1));
this.cut=Clazz.new_($I$(2));
this.copy=Clazz.new_($I$(2));
this.upperCase=Clazz.new_($I$(2));
this.lowerCase=Clazz.new_($I$(2));
this.toggle=Clazz.new_($I$(2));
this.pdbMenu=Clazz.new_($I$(1));
this.outputMenu=Clazz.new_($I$(1));
this.seqShowAnnotationsMenu=Clazz.new_($I$(1));
this.seqHideAnnotationsMenu=Clazz.new_($I$(1));
this.seqAddReferenceAnnotations=Clazz.new_($I$(2).c$$S,[$I$(4).getString$S("label.add_reference_annotations")]);
this.groupShowAnnotationsMenu=Clazz.new_($I$(1));
this.groupHideAnnotationsMenu=Clazz.new_($I$(1));
this.groupAddReferenceAnnotations=Clazz.new_($I$(2).c$$S,[$I$(4).getString$S("label.add_reference_annotations")]);
this.sequenceFeature=Clazz.new_($I$(2));
this.textColour=Clazz.new_($I$(2));
this.jMenu1=Clazz.new_($I$(1));
this.pdbStructureDialog=Clazz.new_($I$(2));
this.rnaStructureMenu=Clazz.new_($I$(1));
this.editSequence=Clazz.new_($I$(2));
this.hideInsertions=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'buildLinkMenu$jalview_datamodel_SequenceI$java_util_List', function (seq, features) {
var linkMenu=Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.link")]);
var nlinks=null;
if (seq != null ) {
nlinks=$I$(5).sequenceUrlLinks.getLinksForMenu$();
$I$(6).sort$java_util_List(nlinks);
} else {
nlinks=Clazz.new_($I$(7));
}if (features != null ) {
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.links != null ) {
for (var link, $link = sf.links.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
nlinks.add$TE(link);
}
}}
}var linkset=Clazz.new_($I$(8));
for (var link, $link = nlinks.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
var urlLink=null;
try {
urlLink=Clazz.new_($I$(6).c$$S,[link]);
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
$I$(9).log.error$O$Throwable("Exception for URLLink '" + link + "'" , foo);
continue;
} else {
throw foo;
}
}
if (!urlLink.isValid$()) {
$I$(9).log.error$O(urlLink.getInvalidMessage$());
continue;
}urlLink.createLinksFromSeq$jalview_datamodel_SequenceI$java_util_Map(seq, linkset);
}
C$.addUrlLinks$javax_swing_JMenu$java_util_Collection(linkMenu, linkset.values$());
return linkMenu;
}, 1);

Clazz.newMeth(C$, 'addUrlLinks$javax_swing_JMenu$java_util_Collection', function (linkMenu, linkset) {
for (var linkstrset, $linkstrset = linkset.iterator$(); $linkstrset.hasNext$()&&((linkstrset=($linkstrset.next$())),1);) {
var url=linkstrset.get$I(3);
var item=Clazz.new_($I$(2).c$$S,[linkstrset.get$I(1)]);
item.setToolTipText$S($I$(4).formatMessage$S$OA("label.open_url_param", Clazz.array(java.lang.Object, -1, [url])));
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$1||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(10).c$$Runnable,[((P$.PopupMenu$1$1||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
P$.PopupMenu.showLink$S(this.$finals$.url);
});
})()
), Clazz.new_(P$.PopupMenu$1$1.$init$, [this, {url: this.$finals$.url}]))]).start$();
});
})()
), Clazz.new_(P$.PopupMenu$1.$init$, [this, {url: url}])));
linkMenu.add$javax_swing_JMenuItem(item);
}
}, 1);

Clazz.newMeth(C$, 'showLink$S', function (url) {
try {
$I$(11).openURL$S(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(13).desktop, $I$(4).getString$S("label.web_browser_not_found_unix"), $I$(4).getString$S("label.web_browser_not_found"), 2);
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'addshowLink$javax_swing_JMenu$S$jalview_util_GroupUrlLink$OA', function (linkMenu, label, urlgenerator, urlstub) {
var item=Clazz.new_($I$(2).c$$S,[label]);
item.setToolTipText$S($I$(4).formatMessage$S$OA("label.open_url_seqs_param", Clazz.array(java.lang.Object, -1, [urlgenerator.getUrl_prefix$(), new Integer(urlgenerator.getNumberInvolved$OA(urlstub))])));
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$2||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(10).c$$Runnable,[((P$.PopupMenu$2$1||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
P$.PopupMenu.showLink$S(this.$finals$.urlgenerator.constructFrom$OA(this.$finals$.urlstub));
} catch (e2) {
if (Clazz.exceptionOf(e2,"jalview.util.GroupUrlLink.UrlStringTooLongException")){
} else {
throw e2;
}
}
});
})()
), Clazz.new_(P$.PopupMenu$2$1.$init$, [this, {urlgenerator: this.$finals$.urlgenerator, urlstub: this.$finals$.urlstub}]))]).start$();
});
})()
), Clazz.new_(P$.PopupMenu$2.$init$, [this, {urlstub: urlstub, urlgenerator: urlgenerator}])));
linkMenu.add$javax_swing_JMenuItem(item);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List', function (ap, seq, features) {
C$.c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List$java_util_List.apply(this, [ap, seq, features, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List$java_util_List', function (alignPanel, seq, features, groupLinks) {
Clazz.super_(C$, this,1);
this.ap=alignPanel;
this.sequence=seq;
for (var ff, $ff = $I$(14).getInstance$().getWritableFormats$Z(true).iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var item=Clazz.new_($I$(2).c$$S,[ff]);
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$3||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].outputText_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$3.$init$, [this, null])));
this.outputMenu.add$javax_swing_JMenuItem(item);
}
var selectedSequence=(seq == null  ? $I$(15).emptyList$() : $I$(16).asList$TTA([seq]));
this.buildAnnotationTypesMenus$javax_swing_JMenu$javax_swing_JMenu$java_util_List(this.seqShowAnnotationsMenu, this.seqHideAnnotationsMenu, selectedSequence);
this.configureReferenceAnnotationsMenu$javax_swing_JMenuItem$java_util_List(this.seqAddReferenceAnnotations, selectedSequence);
var selectedGroup=(alignPanel.av.getSelectionGroup$() == null  ? $I$(15).emptyList$() : alignPanel.av.getSelectionGroup$().getSequences$());
this.buildAnnotationTypesMenus$javax_swing_JMenu$javax_swing_JMenu$java_util_List(this.groupShowAnnotationsMenu, this.groupHideAnnotationsMenu, selectedGroup);
this.configureReferenceAnnotationsMenu$javax_swing_JMenuItem$java_util_List(this.groupAddReferenceAnnotations, selectedGroup);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
var menuItem;
if (seq != null ) {
this.sequenceMenu.setText$S(this.sequence.getName$());
if (seq === alignPanel.av.getAlignment$().getSeqrep$() ) {
this.makeReferenceSeq.setText$S($I$(4).getString$S("action.unmark_as_reference"));
} else {
this.makeReferenceSeq.setText$S($I$(4).getString$S("action.set_as_reference"));
}if (!alignPanel.av.getAlignment$().isNucleotide$()) {
this.remove$java_awt_Component(this.rnaStructureMenu);
} else {
var origCount=this.rnaStructureMenu.getItemCount$();
var aas=alignPanel.av.getAlignment$().getAlignmentAnnotation$();
if (aas != null ) {
for (var aa, $aa = 0, $$aa = aas; $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa.isValidStruc$() && aa.sequenceRef == null  ) {
menuItem=Clazz.new_($I$(2));
menuItem.setText$S($I$(4).formatMessage$S$OA("label.2d_rna_structure_line", Clazz.array(java.lang.Object, -1, [aa.label])));
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$4||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(17).c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotation$jalview_gui_AlignmentPanel,[this.$finals$.seq, this.$finals$.aa, this.$finals$.alignPanel]);
});
})()
), Clazz.new_(P$.PopupMenu$4.$init$, [this, {seq: seq, aa: aa, alignPanel: alignPanel}])));
this.rnaStructureMenu.add$javax_swing_JMenuItem(menuItem);
}}
}if (seq.getAnnotation$() != null ) {
var seqAnns=seq.getAnnotation$();
for (var aa, $aa = 0, $$aa = seqAnns; $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa.isValidStruc$()) {
menuItem=Clazz.new_($I$(2));
menuItem.setText$S($I$(4).formatMessage$S$OA("label.2d_rna_sequence_name", Clazz.array(java.lang.Object, -1, [seq.getName$()])));
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$5||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(17).c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotation$jalview_gui_AlignmentPanel,[this.$finals$.seq, this.$finals$.aa, this.$finals$.alignPanel]);
});
})()
), Clazz.new_(P$.PopupMenu$5.$init$, [this, {seq: seq, aa: aa, alignPanel: alignPanel}])));
this.rnaStructureMenu.add$javax_swing_JMenuItem(menuItem);
}}
}if (this.rnaStructureMenu.getItemCount$() == origCount) {
this.remove$java_awt_Component(this.rnaStructureMenu);
}}menuItem=Clazz.new_($I$(2).c$$S,[$I$(4).getString$S("action.hide_sequences")]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$6||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].hideSequences$Z.apply(this.b$['jalview.gui.PopupMenu'], [false]);
});
})()
), Clazz.new_(P$.PopupMenu$6.$init$, [this, null])));
this.add$javax_swing_JMenuItem(menuItem);
if (alignPanel.av.getSelectionGroup$() != null  && alignPanel.av.getSelectionGroup$().getSize$() > 1 ) {
menuItem=Clazz.new_($I$(2).c$$S,[$I$(4).formatMessage$S$OA("label.represent_group_with", Clazz.array(java.lang.Object, -1, [seq.getName$()]))]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$7||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].hideSequences$Z.apply(this.b$['jalview.gui.PopupMenu'], [true]);
});
})()
), Clazz.new_(P$.PopupMenu$7.$init$, [this, null])));
this.sequenceMenu.add$javax_swing_JMenuItem(menuItem);
}if (alignPanel.av.hasHiddenRows$()) {
var index=alignPanel.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(seq);
if (alignPanel.av.adjustForHiddenSeqs$I(index) - alignPanel.av.adjustForHiddenSeqs$I(index - 1) > 1) {
menuItem=Clazz.new_($I$(2).c$$S,[$I$(4).getString$S("action.reveal_sequences")]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$8||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.alignPanel.av.showSequence$I(this.$finals$.index);
if (this.$finals$.alignPanel.overviewPanel != null ) {
this.$finals$.alignPanel.overviewPanel.updateOverviewImage$();
}});
})()
), Clazz.new_(P$.PopupMenu$8.$init$, [this, {alignPanel: alignPanel, index: index}])));
this.add$javax_swing_JMenuItem(menuItem);
}}}if (alignPanel.av.hasHiddenRows$()) {
var addOption=seq != null ;
if (!addOption && alignPanel.av.getAlignment$().getHeight$() == 0 ) {
addOption=true;
}if (addOption) {
menuItem=Clazz.new_($I$(2).c$$S,[$I$(4).getString$S("action.reveal_all")]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$9||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.alignPanel.av.showAllHiddenSeqs$();
if (this.$finals$.alignPanel.overviewPanel != null ) {
this.$finals$.alignPanel.overviewPanel.updateOverviewImage$();
}});
})()
), Clazz.new_(P$.PopupMenu$9.$init$, [this, {alignPanel: alignPanel}])));
this.add$javax_swing_JMenuItem(menuItem);
}}var sg=alignPanel.av.getSelectionGroup$();
var isDefinedGroup=(sg != null ) ? alignPanel.av.getAlignment$().getGroups$().contains$O(sg) : false;
if (sg != null  && sg.getSize$() > 0 ) {
this.groupName.setText$S($I$(4).getString$S("label.edit_name_and_description_current_group"));
$I$(18).setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI(this.colourMenu, sg.getColourScheme$());
this.conservationMenuItem.setEnabled$Z(!sg.isNucleotide$());
if (sg.cs != null ) {
if (sg.cs.conservationApplied$()) {
this.conservationMenuItem.setSelected$Z(true);
}if (sg.cs.getThreshold$() > 0) {
this.abovePIDColour.setSelected$Z(true);
}}this.modifyConservation.setEnabled$Z(this.conservationMenuItem.isSelected$());
this.modifyPID.setEnabled$Z(this.abovePIDColour.isSelected$());
this.displayNonconserved.setSelected$Z(sg.getShowNonconserved$());
this.showText.setSelected$Z(sg.getDisplayText$());
this.showColourText.setSelected$Z(sg.getColourText$());
this.showBoxes.setSelected$Z(sg.getDisplayBoxes$());
if (groupLinks != null  && groupLinks.size$() > 0 ) {
p$1.buildGroupURLMenu$jalview_datamodel_SequenceGroup$java_util_List.apply(this, [sg, groupLinks]);
}var pdbe=Clazz.new_($I$(19));
var reppdb=Clazz.new_($I$(19));
var sqass=null;
for (var sq, $sq = 0, $$sq = alignPanel.av.getSequenceSelection$(); $sq<$$sq.length&&((sq=($$sq[$sq])),1);$sq++) {
var pes=sq.getDatasetSequence$().getAllPDBEntries$();
if (pes != null  && pes.size$() > 0 ) {
reppdb.put$TK$TV(pes.get$I(0).getId$(), pes.get$I(0));
for (var pe, $pe = pes.iterator$(); $pe.hasNext$()&&((pe=($pe.next$())),1);) {
pdbe.put$TK$TV(pe.getId$(), pe);
if (sqass == null ) {
sqass=sq;
}}
}}
if (pdbe.size$() > 0) {
var pe=pdbe.values$().toArray$TTA(Clazz.array($I$(20), [pdbe.size$()]));
var pr=reppdb.values$().toArray$TTA(Clazz.array($I$(20), [reppdb.size$()]));
var gpdbview;
var rpdbview;
}} else {
this.groupMenu.setVisible$Z(false);
this.editMenu.setVisible$Z(false);
}if (!isDefinedGroup) {
this.createGroupMenuItem.setVisible$Z(true);
this.unGroupMenuItem.setVisible$Z(false);
this.jMenu1.setText$S($I$(4).getString$S("action.edit_new_group"));
} else {
this.createGroupMenuItem.setVisible$Z(false);
this.unGroupMenuItem.setVisible$Z(true);
this.jMenu1.setText$S($I$(4).getString$S("action.edit_group"));
}if (seq == null ) {
this.sequenceMenu.setVisible$Z(false);
this.pdbStructureDialog.setVisible$Z(false);
this.rnaStructureMenu.setVisible$Z(false);
}this.addLinks$jalview_datamodel_SequenceI$java_util_List(seq, features);
if (seq == null ) {
this.addFeatureDetails$java_util_List(features);
}}, 1);

Clazz.newMeth(C$, 'addFeatureDetails$java_util_List', function (features) {
if (features == null  || features.isEmpty$() ) {
return;
}var details=Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("label.feature_details")]);
this.add$javax_swing_JMenuItem(details);
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var start=sf.getBegin$();
var end=sf.getEnd$();
var desc=null;
if (start == end) {
desc=String.format$S$OA("%s %d", [sf.getType$(), new Integer(start)]);
} else {
desc=String.format$S$OA("%s %d-%d", [sf.getType$(), new Integer(start), new Integer(end)]);
}var tooltip=desc;
var description=sf.getDescription$();
if (description != null ) {
description=$I$(21).stripHtmlTags$S(description);
if (description.length$() > 12) {
desc=desc + " " + description.substring$I$I(0, 12) + ".." ;
} else {
desc=desc + " " + description ;
}tooltip=tooltip + " " + description ;
}if (sf.getFeatureGroup$() != null ) {
tooltip=tooltip + (" (" + sf.getFeatureGroup$() + ")" );
}var item=Clazz.new_($I$(2).c$$S,[desc]);
item.setToolTipText$S(tooltip);
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$10||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].showFeatureDetails$jalview_datamodel_SequenceFeature.apply(this.b$['jalview.gui.PopupMenu'], [this.$finals$.sf]);
});
})()
), Clazz.new_(P$.PopupMenu$10.$init$, [this, {sf: sf}])));
details.add$javax_swing_JMenuItem(item);
}
});

Clazz.newMeth(C$, 'showFeatureDetails$jalview_datamodel_SequenceFeature', function (sf) {
var details;
if ($I$(22).isJS$()) {
details=Clazz.new_($I$(23));
var panel=Clazz.new_($I$(24).c$$java_awt_LayoutManager,[Clazz.new_($I$(25))]);
panel.setOpaque$Z(true);
panel.setBackground$java_awt_Color($I$(26).white);
var reprt=Clazz.new_($I$(27).c$$S,[$I$(4).formatMessage$S$OA("label.html_content", Clazz.array(java.lang.Object, -1, [sf.getDetailsReport$()]))]);
reprt.setBackground$java_awt_Color($I$(26).WHITE);
reprt.setOpaque$Z(true);
panel.add$java_awt_Component$O(reprt, "Center");
details.setContentPane$java_awt_Container(panel);
details.pack$();
} else 
{}
$I$(13).addInternalFrame$javax_swing_JInternalFrame$S$I$I(details, $I$(4).getString$S("label.feature_details"), 500, 500);
});

Clazz.newMeth(C$, 'addLinks$jalview_datamodel_SequenceI$java_util_List', function (seq, features) {
var linkMenu=C$.buildLinkMenu$jalview_datamodel_SequenceI$java_util_List(seq, features);
if (linkMenu.getItemCount$() > 0) {
if (this.sequence != null ) {
this.sequenceMenu.add$javax_swing_JMenuItem(linkMenu);
} else {
this.add$javax_swing_JMenuItem(linkMenu);
}}});

Clazz.newMeth(C$, 'buildAnnotationTypesMenus$javax_swing_JMenu$javax_swing_JMenu$java_util_List', function (showMenu, hideMenu, forSequences) {
showMenu.removeAll$();
hideMenu.removeAll$();
var all=$I$(16).asList$TTA(Clazz.array(String, -1, [$I$(4).getString$S("label.all")]));
this.addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z(showMenu, forSequences, "", all, true, true);
this.addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z(hideMenu, forSequences, "", all, true, false);
showMenu.addSeparator$();
hideMenu.addSeparator$();
var annotations=this.ap.getAlignment$().getAlignmentAnnotation$();
var shownTypes=Clazz.new_($I$(8));
var hiddenTypes=Clazz.new_($I$(8));
$I$(28).getShownHiddenTypes$java_util_Map$java_util_Map$java_util_List$java_util_List(shownTypes, hiddenTypes, $I$(28).asList$jalview_datamodel_AlignmentAnnotationA(annotations), forSequences);
for (var calcId, $calcId = hiddenTypes.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
for (var type, $type = hiddenTypes.get$O(calcId).iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
this.addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z(showMenu, forSequences, calcId, type, false, true);
}
}
showMenu.setEnabled$Z(!hiddenTypes.isEmpty$());
for (var calcId, $calcId = shownTypes.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
for (var type, $type = shownTypes.get$O(calcId).iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
this.addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z(hideMenu, forSequences, calcId, type, false, false);
}
}
hideMenu.setEnabled$Z(!shownTypes.isEmpty$());
});

Clazz.newMeth(C$, 'getSequenceScope$jalview_datamodel_SequenceI', function (seq) {
var forSequences=null;
var selectionGroup=this.ap.av.getSelectionGroup$();
if (selectionGroup != null  && selectionGroup.getSize$() > 0 ) {
forSequences=selectionGroup.getSequences$();
} else {
forSequences=seq == null  ? $I$(15).emptyList$() : $I$(16).asList$TTA([seq]);
}return forSequences;
});

Clazz.newMeth(C$, 'addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z', function (showOrHideMenu, forSequences, calcId, types, allTypes, actionIsShow) {
var label=types.toString();
label=label.substring$I$I(1, label.length$() - 1);
var item=Clazz.new_($I$(2).c$$S,[label]);
item.setToolTipText$S(calcId);
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$11||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
$I$(29).showOrHideSequenceAnnotations$jalview_datamodel_AlignmentI$java_util_Collection$java_util_List$Z$Z(this.b$['jalview.gui.PopupMenu'].ap.getAlignment$(), this.$finals$.types, this.$finals$.forSequences, this.$finals$.allTypes, this.$finals$.actionIsShow);
this.b$['jalview.gui.PopupMenu'].refresh$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$11.$init$, [this, {types: types, forSequences: forSequences, allTypes: allTypes, actionIsShow: actionIsShow}])));
showOrHideMenu.add$javax_swing_JMenuItem(item);
});

Clazz.newMeth(C$, 'buildGroupURLMenu$jalview_datamodel_SequenceGroup$java_util_List', function (sg, groupLinks) {
this.groupLinksMenu=Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.group_link")]);
var linkMenus=Clazz.array($I$(1), -1, [null, Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.ids")]), Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.sequences")]), Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.ids_sequences")])]);
var seqs=this.ap.av.getSelectionAsNewSequence$();
var idandseqs=$I$(30).formStrings$jalview_datamodel_SequenceIA(seqs);
var commonDbrefs=Clazz.new_($I$(19));
for (var sq=0; sq < seqs.length; sq++) {
var start=seqs[sq].findPosition$I(sg.getStartRes$());
var end=seqs[sq].findPosition$I(sg.getEndRes$());
var sqi=seqs[sq];
while (sqi.getDatasetSequence$() != null ){
sqi=sqi.getDatasetSequence$();
}
var dbr=sqi.getDBRefs$();
var nd;
if (dbr != null  && (nd=dbr.size$()) > 0 ) {
for (var d=0; d < nd; d++) {
var e=dbr.get$I(d);
var src=e.getSource$();
var sarray=commonDbrefs.get$O(src);
if (sarray == null ) {
sarray=Clazz.array(java.lang.Object, [2]);
sarray[0]=Clazz.array(Integer.TYPE, -1, [0]);
sarray[1]=Clazz.array(String, [seqs.length]);
commonDbrefs.put$TK$TV(src, sarray);
}if ((sarray[1])[sq] == null ) {
if (!e.hasMap$() || (e.getMap$().locateMappedRange$I$I(start, end) != null ) ) {
(sarray[1])[sq]=e.getAccessionId$();
(sarray[0])[0]++;
}}}
}}
var addMenu=false;
for (var link, $link = groupLinks.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
var urlLink=null;
try {
urlLink=Clazz.new_($I$(30).c$$S,[link]);
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
$I$(9).log.error$O$Throwable("Exception for GroupURLLink '" + link + "'" , foo);
continue;
} else {
throw foo;
}
}
;if (!urlLink.isValid$()) {
$I$(9).log.error$O(urlLink.getInvalidMessage$());
continue;
}var label=urlLink.getLabel$();
var usingNames=false;
var ltarget=urlLink.getTarget$();
var idset=commonDbrefs.get$O(ltarget.toUpperCase$());
var seqstr;
var ids;
if (idset != null ) {
var numinput=(idset[0])[0];
var allids=(idset[1]);
seqstr=Clazz.array(String, [numinput]);
ids=Clazz.array(String, [numinput]);
for (var sq=0, idcount=0; sq < seqs.length; sq++) {
if (allids[sq] != null ) {
ids[idcount]=allids[sq];
seqstr[idcount++]=idandseqs[1][sq];
}}
} else {
seqstr=idandseqs[1];
ids=idandseqs[0];
usingNames=true;
}var urlset=null;
try {
urlset=urlLink.makeUrlStubs$SA$SA$S$Z(ids, seqstr, "FromJalview" + System.currentTimeMillis$(), false);
} catch (e) {
if (Clazz.exceptionOf(e,"jalview.util.GroupUrlLink.UrlStringTooLongException")){
} else {
throw e;
}
}
if (urlset != null ) {
var type=urlLink.getGroupURLType$() & 3;
C$.addshowLink$javax_swing_JMenu$S$jalview_util_GroupUrlLink$OA(linkMenus[type], label + (((type & 1) == 1) ? ("(" + (usingNames ? "Names" : ltarget) + ")" ) : ""), urlLink, urlset);
addMenu=true;
}}
if (addMenu) {
this.groupLinksMenu=Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.group_link")]);
for (var m=0; m < linkMenus.length; m++) {
if (linkMenus[m] != null  && linkMenus[m].getMenuComponentCount$() > 0 ) {
this.groupLinksMenu.add$javax_swing_JMenuItem(linkMenus[m]);
}}
this.groupMenu.add$javax_swing_JMenuItem(this.groupLinksMenu);
}}, p$1);

Clazz.newMeth(C$, 'jbInit', function () {
this.groupMenu.setText$S($I$(4).getString$S("label.selection"));
this.groupName.setText$S($I$(4).getString$S("label.name"));
this.groupName.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$12||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].groupName_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$12.$init$, [this, null])));
this.sequenceMenu.setText$S($I$(4).getString$S("label.sequence"));
this.sequenceName.setText$S($I$(4).getString$S("label.edit_name_description"));
this.sequenceName.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$13||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].sequenceName_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$13.$init$, [this, null])));
this.chooseAnnotations.setText$S($I$(4).getString$S("action.choose_annotations"));
this.chooseAnnotations.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$14||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].chooseAnnotations_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$14.$init$, [this, null])));
this.sequenceDetails.setText$S($I$(4).getString$S("label.sequence_details"));
this.sequenceDetails.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$15||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].sequenceDetails_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$15.$init$, [this, null])));
this.sequenceSelDetails.setText$S($I$(4).getString$S("label.sequence_details"));
this.sequenceSelDetails.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$16||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].sequenceSelectionDetails_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$16.$init$, [this, null])));
this.unGroupMenuItem.setText$S($I$(4).getString$S("action.remove_group"));
this.unGroupMenuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$17||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].unGroupMenuItem_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$17.$init$, [this, null])));
this.createGroupMenuItem.setText$S($I$(4).getString$S("action.create_group"));
this.createGroupMenuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$18||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].createGroupMenuItem_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$18.$init$, [this, null])));
this.outline.setText$S($I$(4).getString$S("action.border_colour"));
this.outline.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$19||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].outline_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$19.$init$, [this, null])));
this.showBoxes.setText$S($I$(4).getString$S("action.boxes"));
this.showBoxes.setState$Z(true);
this.showBoxes.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$20||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].showBoxes_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$20.$init$, [this, null])));
this.showText.setText$S($I$(4).getString$S("action.text"));
this.showText.setState$Z(true);
this.showText.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$21||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].showText_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$21.$init$, [this, null])));
this.showColourText.setText$S($I$(4).getString$S("label.colour_text"));
this.showColourText.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$22||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].showColourText_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$22.$init$, [this, null])));
this.displayNonconserved.setText$S($I$(4).getString$S("label.show_non_conserved"));
this.displayNonconserved.setState$Z(true);
this.displayNonconserved.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$23||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].showNonconserved_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$23.$init$, [this, null])));
this.editMenu.setText$S($I$(4).getString$S("action.edit"));
this.cut.setText$S($I$(4).getString$S("action.cut"));
this.cut.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$24||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].cut_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$24.$init$, [this, null])));
this.upperCase.setText$S($I$(4).getString$S("label.to_upper_case"));
this.upperCase.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$25||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].changeCase$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$25.$init$, [this, null])));
this.copy.setText$S($I$(4).getString$S("action.copy"));
this.copy.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$26||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].copy_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$26.$init$, [this, null])));
this.lowerCase.setText$S($I$(4).getString$S("label.to_lower_case"));
this.lowerCase.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$27||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].changeCase$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$27.$init$, [this, null])));
this.toggle.setText$S($I$(4).getString$S("label.toggle_case"));
this.toggle.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$28||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].changeCase$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$28.$init$, [this, null])));
this.outputMenu.setText$S($I$(4).getString$S("label.out_to_textbox") + "...");
this.seqShowAnnotationsMenu.setText$S($I$(4).getString$S("label.show_annotations"));
this.seqHideAnnotationsMenu.setText$S($I$(4).getString$S("label.hide_annotations"));
this.groupShowAnnotationsMenu.setText$S($I$(4).getString$S("label.show_annotations"));
this.groupHideAnnotationsMenu.setText$S($I$(4).getString$S("label.hide_annotations"));
this.sequenceFeature.setText$S($I$(4).getString$S("label.create_sequence_feature"));
this.sequenceFeature.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$29||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].sequenceFeature_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$29.$init$, [this, null])));
this.jMenu1.setText$S($I$(4).getString$S("label.group"));
this.pdbStructureDialog.setText$S($I$(4).getString$S("label.show_pdbstruct_dialog"));
this.pdbStructureDialog.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$30||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
var selectedSeqs=Clazz.array($I$(31), -1, [this.b$['jalview.gui.PopupMenu'].sequence]);
if (this.b$['jalview.gui.PopupMenu'].ap.av.getSelectionGroup$() != null ) {
selectedSeqs=this.b$['jalview.gui.PopupMenu'].ap.av.getSequenceSelection$();
}Clazz.new_($I$(32).c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceI$jalview_gui_AlignmentPanel,[selectedSeqs, this.b$['jalview.gui.PopupMenu'].sequence, this.b$['jalview.gui.PopupMenu'].ap]);
});
})()
), Clazz.new_(P$.PopupMenu$30.$init$, [this, null])));
this.rnaStructureMenu.setText$S($I$(4).getString$S("label.view_rna_structure"));
this.editSequence.setText$S($I$(4).getString$S("label.edit_sequence") + "...");
this.editSequence.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$31||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.PopupMenu'].editSequence_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$31.$init$, [this, null])));
this.makeReferenceSeq.setText$S($I$(4).getString$S("label.mark_as_representative"));
this.makeReferenceSeq.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$32||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.PopupMenu'].makeReferenceSeq_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [actionEvent]);
});
})()
), Clazz.new_(P$.PopupMenu$32.$init$, [this, null])));
this.hideInsertions.setText$S($I$(4).getString$S("label.hide_insertions"));
this.hideInsertions.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$33||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].hideInsertions_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$33.$init$, [this, null])));
this.groupMenu.add$javax_swing_JMenuItem(this.sequenceSelDetails);
this.add$javax_swing_JMenuItem(this.groupMenu);
this.add$javax_swing_JMenuItem(this.sequenceMenu);
this.add$javax_swing_JMenuItem(this.rnaStructureMenu);
this.add$javax_swing_JMenuItem(this.pdbStructureDialog);
if (this.sequence != null ) {
this.add$javax_swing_JMenuItem(this.hideInsertions);
}this.sequenceMenu.add$javax_swing_JMenuItem(this.seqShowAnnotationsMenu);
this.sequenceMenu.add$javax_swing_JMenuItem(this.seqHideAnnotationsMenu);
this.sequenceMenu.add$javax_swing_JMenuItem(this.seqAddReferenceAnnotations);
this.groupMenu.add$javax_swing_JMenuItem(this.groupShowAnnotationsMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.groupHideAnnotationsMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.groupAddReferenceAnnotations);
this.groupMenu.add$javax_swing_JMenuItem(this.editMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.outputMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.sequenceFeature);
this.groupMenu.add$javax_swing_JMenuItem(this.createGroupMenuItem);
this.groupMenu.add$javax_swing_JMenuItem(this.unGroupMenuItem);
this.groupMenu.add$javax_swing_JMenuItem(this.jMenu1);
this.sequenceMenu.add$javax_swing_JMenuItem(this.sequenceName);
this.sequenceMenu.add$javax_swing_JMenuItem(this.sequenceDetails);
this.sequenceMenu.add$javax_swing_JMenuItem(this.makeReferenceSeq);
this.initColourMenu$();
this.buildColourMenu$();
this.editMenu.add$javax_swing_JMenuItem(this.copy);
this.editMenu.add$javax_swing_JMenuItem(this.cut);
this.editMenu.add$javax_swing_JMenuItem(this.editSequence);
this.editMenu.add$javax_swing_JMenuItem(this.upperCase);
this.editMenu.add$javax_swing_JMenuItem(this.lowerCase);
this.editMenu.add$javax_swing_JMenuItem(this.toggle);
this.jMenu1.add$javax_swing_JMenuItem(this.groupName);
this.jMenu1.add$javax_swing_JMenuItem(this.colourMenu);
this.jMenu1.add$javax_swing_JMenuItem(this.showBoxes);
this.jMenu1.add$javax_swing_JMenuItem(this.showText);
this.jMenu1.add$javax_swing_JMenuItem(this.showColourText);
this.jMenu1.add$javax_swing_JMenuItem(this.outline);
this.jMenu1.add$javax_swing_JMenuItem(this.displayNonconserved);
}, p$1);

Clazz.newMeth(C$, 'initColourMenu$', function () {
this.colourMenu.setText$S($I$(4).getString$S("label.group_colour"));
this.textColour.setText$S($I$(4).getString$S("label.text_colour"));
this.textColour.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$34||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].textColour_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$34.$init$, [this, null])));
this.abovePIDColour.setText$S($I$(4).getString$S("label.above_identity_threshold"));
this.abovePIDColour.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$35||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].abovePIDColour_actionPerformed$Z.apply(this.b$['jalview.gui.PopupMenu'], [this.b$['jalview.gui.PopupMenu'].abovePIDColour.isSelected$()]);
});
})()
), Clazz.new_(P$.PopupMenu$35.$init$, [this, null])));
this.modifyPID.setText$S($I$(4).getString$S("label.modify_identity_threshold"));
this.modifyPID.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$36||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].modifyPID_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$36.$init$, [this, null])));
this.conservationMenuItem.setText$S($I$(4).getString$S("action.by_conservation"));
this.conservationMenuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$37||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].conservationMenuItem_actionPerformed$Z.apply(this.b$['jalview.gui.PopupMenu'], [this.b$['jalview.gui.PopupMenu'].conservationMenuItem.isSelected$()]);
});
})()
), Clazz.new_(P$.PopupMenu$37.$init$, [this, null])));
this.annotationColour=Clazz.new_($I$(33).c$$S,[$I$(4).getString$S("action.by_annotation")]);
this.annotationColour.setName$S("Annotation");
this.annotationColour.setEnabled$Z(false);
this.annotationColour.setToolTipText$S($I$(4).getString$S("label.by_annotation_tooltip"));
this.modifyConservation.setText$S($I$(4).getString$S("label.modify_conservation_threshold"));
this.modifyConservation.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$38||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].modifyConservation_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$38.$init$, [this, null])));
});

Clazz.newMeth(C$, 'buildColourMenu$', function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg == null ) {
return;
}this.colourMenu.removeAll$();
this.colourMenu.add$javax_swing_JMenuItem(this.textColour);
this.colourMenu.addSeparator$();
var bg=$I$(18).addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z(this.colourMenu, this, sg, false);
bg.add$javax_swing_AbstractButton(this.annotationColour);
this.colourMenu.add$javax_swing_JMenuItem(this.annotationColour);
this.colourMenu.addSeparator$();
this.colourMenu.add$javax_swing_JMenuItem(this.conservationMenuItem);
this.colourMenu.add$javax_swing_JMenuItem(this.modifyConservation);
this.colourMenu.add$javax_swing_JMenuItem(this.abovePIDColour);
this.colourMenu.add$javax_swing_JMenuItem(this.modifyPID);
});

Clazz.newMeth(C$, 'modifyConservation_actionPerformed$', function () {
var sg=this.getGroup$();
if (sg.cs != null ) {
$I$(34).setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S(this.ap, sg.cs, sg.getName$());
$I$(34).showConservationSlider$();
}});

Clazz.newMeth(C$, 'modifyPID_actionPerformed$', function () {
var sg=this.getGroup$();
if (sg.cs != null ) {
$I$(34).setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S(this.ap, sg.cs, this.getGroup$().getName$());
$I$(34).showPIDSlider$();
}});

Clazz.newMeth(C$, 'configureReferenceAnnotationsMenu$javax_swing_JMenuItem$java_util_List', function (menuItem, forSequences) {
menuItem.setEnabled$Z(false);
var tipEntries=Clazz.new_($I$(35));
var candidates=Clazz.new_($I$(8));
var al=this.ap.av.getAlignment$();
$I$(29).findAddableReferenceAnnotations$java_util_List$java_util_Map$java_util_Map$jalview_datamodel_AlignmentI(forSequences, tipEntries, candidates, al);
if (!candidates.isEmpty$()) {
var tooltip=Clazz.new_($I$(36).c$$I,[64]);
tooltip.append$S($I$(4).getString$S("label.add_annotations_for"));
menuItem.setEnabled$Z(true);
for (var calcId, $calcId = tipEntries.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
tooltip.append$S("<br/>" + calcId + "/" + tipEntries.get$O(calcId) );
}
var tooltipText=$I$(37).wrapTooltip$Z$S(true, tooltip.toString());
menuItem.setToolTipText$S(tooltipText);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$39||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.PopupMenu'].addReferenceAnnotations_actionPerformed$java_util_Map.apply(this.b$['jalview.gui.PopupMenu'], [this.$finals$.candidates]);
});
})()
), Clazz.new_(P$.PopupMenu$39.$init$, [this, {candidates: candidates}])));
}});

Clazz.newMeth(C$, 'addReferenceAnnotations_actionPerformed$java_util_Map', function (candidates) {
var selectionGroup=this.ap.av.getSelectionGroup$();
var alignment=this.ap.getAlignment$();
$I$(29).addReferenceAnnotations$java_util_Map$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup(candidates, alignment, selectionGroup);
this.refresh$();
});

Clazz.newMeth(C$, 'makeReferenceSeq_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
if (!this.ap.av.getAlignment$().hasSeqrep$()) {
this.ap.av.setDisplayReferenceSeq$Z(true);
this.ap.av.setColourByReferenceSeq$Z(true);
this.ap.av.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(this.sequence);
} else {
if (this.ap.av.getAlignment$().getSeqrep$() === this.sequence ) {
this.ap.av.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(null);
} else {
this.ap.av.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(this.sequence);
}}this.refresh$();
});

Clazz.newMeth(C$, 'hideInsertions_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
var hidden=this.ap.av.getAlignment$().getHiddenColumns$();
var inserts=Clazz.new_($I$(38));
var markedPopup=false;
if (this.ap.av.getSelectionGroup$() != null ) {
inserts.set$I$I(this.ap.av.getSelectionGroup$().getStartRes$(), this.ap.av.getSelectionGroup$().getEndRes$() + 1);
for (var sq, $sq = this.ap.av.getSelectionGroup$().getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (sq === this.sequence ) {
markedPopup=true;
}inserts.and$java_util_BitSet(sq.getInsertionsAsBits$());
}
hidden.clearAndHideColumns$java_util_BitSet$I$I(inserts, this.ap.av.getSelectionGroup$().getStartRes$(), this.ap.av.getSelectionGroup$().getEndRes$());
} else if (!markedPopup && this.sequence != null  ) {
inserts.or$java_util_BitSet(this.sequence.getInsertionsAsBits$());
hidden.hideColumns$java_util_BitSet(inserts);
}this.refresh$();
});

Clazz.newMeth(C$, 'sequenceSelectionDetails_actionPerformed$', function () {
this.createSequenceDetailsReport$jalview_datamodel_SequenceIA(this.ap.av.getSequenceSelection$());
});

Clazz.newMeth(C$, 'sequenceDetails_actionPerformed$', function () {
this.createSequenceDetailsReport$jalview_datamodel_SequenceIA(Clazz.array($I$(31), -1, [this.sequence]));
});

Clazz.newMeth(C$, 'createSequenceDetailsReport$jalview_datamodel_SequenceIA', function (sequences) {
var contents=Clazz.new_($I$(36).c$$I,[128]);
contents.append$S("<html><body>");
for (var seq, $seq = 0, $$seq = sequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
contents.append$S("<p><h2>" + $I$(4).formatMessage$S$OA("label.create_sequence_details_report_annotation_for", Clazz.array(java.lang.Object, -1, [seq.getDisplayId$Z(true)])) + "</h2></p><p>" );
Clazz.new_($I$(39).c$$S,[null]).createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel(contents, seq, true, true, this.ap.getSeqPanel$().seqCanvas.fr);
contents.append$S("</p>");
}
contents.append$S("</body></html>");
var report=contents.toString();
var frame;
if ($I$(22).isJS$()) {
var textLabel=Clazz.new_($I$(27));
textLabel.setText$S(report);
textLabel.setBackground$java_awt_Color($I$(26).WHITE);
var pane=Clazz.new_($I$(24).c$$java_awt_LayoutManager,[Clazz.new_($I$(25))]);
pane.setOpaque$Z(true);
pane.setBackground$java_awt_Color($I$(26).WHITE);
pane.add$java_awt_Component$O(textLabel, "North");
frame=Clazz.new_($I$(23));
frame.getContentPane$().add$java_awt_Component(Clazz.new_($I$(40).c$$java_awt_Component,[pane]));
} else 
{}
$I$(13).addInternalFrame$javax_swing_JInternalFrame$S$I$I(frame, $I$(4).formatMessage$S$OA("label.sequence_details_for", (sequences.length == 1 ? Clazz.array(java.lang.Object, -1, [sequences[0].getDisplayId$Z(true)]) : Clazz.array(java.lang.Object, -1, [$I$(4).getString$S("label.selection")]))), 500, 400);
});

Clazz.newMeth(C$, 'showNonconserved_actionPerformed$', function () {
this.getGroup$().setShowNonconserved$Z(this.displayNonconserved.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'refresh$', function () {
this.ap.updateAnnotation$();
$I$(41).Refresh$java_awt_Component$S(this, this.ap.av.getSequenceSetId$());
});

Clazz.newMeth(C$, 'abovePIDColour_actionPerformed$Z', function (selected) {
var sg=this.getGroup$();
if (sg.cs == null ) {
return;
}if (selected) {
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(42).calculate$java_util_List$I$I(sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1));
var threshold=$I$(34).setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S(this.ap, sg.getGroupColourScheme$(), this.getGroup$().getName$());
sg.cs.setThreshold$I$Z(threshold, this.ap.av.isIgnoreGapsConsensus$());
$I$(34).showPIDSlider$();
} else {
sg.cs.setThreshold$I$Z(0, this.ap.av.isIgnoreGapsConsensus$());
$I$(34).hidePIDSlider$();
}this.modifyPID.setEnabled$Z(selected);
this.refresh$();
});

Clazz.newMeth(C$, 'chooseAnnotations_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(43).c$$jalview_gui_AlignmentPanel,[this.ap]);
});

Clazz.newMeth(C$, 'conservationMenuItem_actionPerformed$Z', function (selected) {
var sg=this.getGroup$();
if (sg.cs == null ) {
return;
}if (selected) {
var c=Clazz.new_($I$(44).c$$S$java_util_List$I$I,["Group", sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1]);
c.calculate$();
c.verdict$Z$F(false, this.ap.av.getConsPercGaps$());
sg.cs.setConservation$jalview_analysis_Conservation(c);
$I$(34).setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S(this.ap, sg.getGroupColourScheme$(), sg.getName$());
$I$(34).showConservationSlider$();
} else {
sg.cs.setConservation$jalview_analysis_Conservation(null);
$I$(34).hideConservationSlider$();
}this.modifyConservation.setEnabled$Z(selected);
this.refresh$();
});

Clazz.newMeth(C$, 'groupName_actionPerformed$', function () {
var sg=this.getGroup$();
var dialog=Clazz.new_($I$(45).c$$S$S$S$S,[sg.getName$(), sg.getDescription$(), $I$(4).getString$S("label.group_name"), $I$(4).getString$S("label.group_description")]);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, $I$(4).getString$S("label.edit_group_name_description"), ((P$.PopupMenu$40||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.sg.setName$S(this.$finals$.dialog.getName$());
this.$finals$.sg.setDescription$S(this.$finals$.dialog.getDescription$());
this.b$['jalview.gui.PopupMenu'].refresh$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$40.$init$, [this, {sg: sg, dialog: dialog}])));
});

Clazz.newMeth(C$, 'getGroup$', function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
this.ap.av.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(sg);
}return sg;
});

Clazz.newMeth(C$, 'sequenceName_actionPerformed$', function () {
var dialog=Clazz.new_($I$(45).c$$S$S$S$S,[this.sequence.getName$(), this.sequence.getDescription$(), $I$(4).getString$S("label.sequence_name"), $I$(4).getString$S("label.sequence_description")]);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, $I$(4).getString$S("label.edit_sequence_name_description"), ((P$.PopupMenu$41||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.$finals$.dialog.getName$() != null ) {
if (this.$finals$.dialog.getName$().indexOf$S(" ") > -1) {
$I$(12).showMessageDialog$java_awt_Component$S$S$I(this.b$['jalview.gui.PopupMenu'].ap, $I$(4).getString$S("label.spaces_converted_to_underscores"), $I$(4).getString$S("label.no_spaces_allowed_sequence_name"), 2);
}this.b$['jalview.gui.PopupMenu'].sequence.setName$S(this.$finals$.dialog.getName$().replace$C$C(" ", "_"));
this.b$['jalview.gui.PopupMenu'].ap.paintAlignment$Z$Z(false, false);
}this.b$['jalview.gui.PopupMenu'].sequence.setDescription$S(this.$finals$.dialog.getDescription$());
this.b$['jalview.gui.PopupMenu'].ap.av.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.PopupMenu'].ap.av.getAlignment$().getSequences$());
});
})()
), Clazz.new_(P$.PopupMenu$41.$init$, [this, {dialog: dialog}])));
});

Clazz.newMeth(C$, 'unGroupMenuItem_actionPerformed$', function () {
var sg=this.ap.av.getSelectionGroup$();
this.ap.av.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(sg);
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.refresh$();
});

Clazz.newMeth(C$, 'createGroupMenuItem_actionPerformed$', function () {
this.getGroup$();
this.refresh$();
});

Clazz.newMeth(C$, 'outline_actionPerformed$', function () {
var title=$I$(4).getString$S("label.select_outline_colour");
var listener=((P$.PopupMenu$42||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['colourSelected$java_awt_Color','colourSelected$'], function (c) {
this.b$['jalview.gui.PopupMenu'].getGroup$.apply(this.b$['jalview.gui.PopupMenu'], []).setOutlineColour$java_awt_Color(c);
this.b$['jalview.gui.PopupMenu'].refresh$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$42.$init$, [this, null]));
$I$(46).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener($I$(13).getDesktop$(), title, $I$(26).BLUE, listener);
});

Clazz.newMeth(C$, 'showBoxes_actionPerformed$', function () {
this.getGroup$().setDisplayBoxes$Z(this.showBoxes.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'showText_actionPerformed$', function () {
this.getGroup$().setDisplayText$Z(this.showText.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'showColourText_actionPerformed$', function () {
this.getGroup$().setColourText$Z(this.showColourText.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'hideSequences$Z', function (representGroup) {
this.ap.av.hideSequences$jalview_datamodel_SequenceI$Z(this.sequence, representGroup);
});

Clazz.newMeth(C$, 'copy_actionPerformed$', function () {
this.ap.alignFrame.copy_actionPerformed$();
});

Clazz.newMeth(C$, 'cut_actionPerformed$', function () {
this.ap.alignFrame.cut_actionPerformed$();
});

Clazz.newMeth(C$, 'changeCase$java_awt_event_ActionEvent', function (e) {
var source=e.getSource$();
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
var startEnd=this.ap.av.getVisibleRegionBoundaries$I$I(sg.getStartRes$(), sg.getEndRes$() + 1);
var description;
var caseChange;
if (source === this.toggle ) {
description=$I$(4).getString$S("label.toggle_case");
caseChange=$I$(47).TOGGLE_CASE;
} else if (source === this.upperCase ) {
description=$I$(4).getString$S("label.to_upper_case");
caseChange=$I$(47).TO_UPPER;
} else {
description=$I$(4).getString$S("label.to_lower_case");
caseChange=$I$(47).TO_LOWER;
}var caseCommand=Clazz.new_($I$(47).c$$S$jalview_datamodel_SequenceIA$java_util_List$I,[description, sg.getSequencesAsArray$java_util_Map(this.ap.av.getHiddenRepSequences$()), startEnd, caseChange]);
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(caseCommand);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'outputText_actionPerformed$java_awt_event_ActionEvent', function (e) {
var cap=Clazz.new_($I$(48));
cap.setForInput$jalview_api_AlignmentViewPanel(null);
$I$(13).addInternalFrame$javax_swing_JInternalFrame$S$I$I(cap, $I$(4).formatMessage$S$OA("label.alignment_output_command", Clazz.array(java.lang.Object, -1, [e.getActionCommand$()])), 600, 500);
var omitHidden=null;
System.out.println$S("PROMPT USER HERE");
var fileFormat=$I$(14).getInstance$().forName$S(e.getActionCommand$());
cap.setText$S(Clazz.new_($I$(49).c$$jalview_api_AlignmentViewPanel,[this.ap]).formatSequences$jalview_io_FileFormatI$jalview_api_AlignmentViewPanel$Z(fileFormat, this.ap, true));
});

Clazz.newMeth(C$, 'sequenceFeature_actionPerformed$', function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg == null ) {
return;
}var seqs=Clazz.new_($I$(7));
var features=Clazz.new_($I$(7));
var gSize=sg.getSize$();
for (var i=0; i < gSize; i++) {
var start=sg.getSequenceAt$I(i).findPosition$I(sg.getStartRes$());
var end=sg.findEndRes$jalview_datamodel_SequenceI(sg.getSequenceAt$I(i));
if (start <= end) {
seqs.add$TE(sg.getSequenceAt$I(i).getDatasetSequence$());
features.add$TE(Clazz.new_($I$(50).c$$S$S$I$I$S,[null, null, start, end, null]));
}}
if (!seqs.isEmpty$()) {
Clazz.new_($I$(51).c$$jalview_gui_AlignmentPanel$java_util_List$java_util_List$Z,[this.ap, seqs, features, true]).showDialog$();
}});

Clazz.newMeth(C$, 'textColour_actionPerformed$', function () {
var sg=this.getGroup$();
if (sg != null ) {
Clazz.new_($I$(52)).chooseColour$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceGroup(this.ap, sg);
}});

Clazz.newMeth(C$, 'colourByStructure$S', function (pdbid) {
var anots=this.ap.av.getStructureSelectionManager$().colourSequenceFromStructure$jalview_datamodel_SequenceI$S(this.sequence, pdbid);
var an=Clazz.new_($I$(53).c$$S$S$jalview_datamodel_AnnotationA,["Structure", "Coloured by " + pdbid, anots]);
this.ap.av.getAlignment$().addAnnotation$jalview_datamodel_AlignmentAnnotation(an);
an.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(this.sequence, 0, true);
this.ap.av.getAlignment$().setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(an, 0);
this.ap.adjustAnnotationHeight$();
this.sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(an);
});

Clazz.newMeth(C$, 'editSequence_actionPerformed$', function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
if (this.sequence == null ) {
this.sequence=sg.getSequenceAt$I(0);
}var dialog=Clazz.new_($I$(45).c$$S$S$S$S,[this.sequence.getSequenceAsString$I$I(sg.getStartRes$(), sg.getEndRes$() + 1), null, $I$(4).getString$S("label.edit_sequence"), null]);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, $I$(4).getString$S("label.edit_sequence"), ((P$.PopupMenu$43||
(function(){var C$=Clazz.newClass(P$, "PopupMenu$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var editCommand=Clazz.new_($I$(54).c$$S$jalview_commands_EditCommand_Action$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI,[$I$(4).getString$S("label.edit_sequences"), $I$(55).REPLACE, this.$finals$.dialog.getName$().replace$C$C(" ", this.b$['jalview.gui.PopupMenu'].ap.av.getGapCharacter$()), this.$finals$.sg.getSequencesAsArray$java_util_Map(this.b$['jalview.gui.PopupMenu'].ap.av.getHiddenRepSequences$()), this.$finals$.sg.getStartRes$(), this.$finals$.sg.getEndRes$() + 1, this.b$['jalview.gui.PopupMenu'].ap.av.getAlignment$()]);
this.b$['jalview.gui.PopupMenu'].ap.alignFrame.addHistoryItem$jalview_commands_CommandI(editCommand);
this.b$['jalview.gui.PopupMenu'].ap.av.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.PopupMenu'].ap.av.getAlignment$().getSequences$());
});
})()
), Clazz.new_(P$.PopupMenu$43.$init$, [this, {dialog: dialog, sg: sg}])));
}});

Clazz.newMeth(C$, ['changeColour_actionPerformed$S','changeColour_actionPerformed$'], function (colourSchemeName) {
var sg=this.getGroup$();
var colourScheme=$I$(56).getInstance$().getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(colourSchemeName, this.ap.av, sg, this.ap.av.getHiddenRepSequences$());
sg.setColourScheme$jalview_schemes_ColourSchemeI(colourScheme);
if (Clazz.instanceOf(colourScheme, "jalview.schemes.Blosum62ColourScheme") || Clazz.instanceOf(colourScheme, "jalview.schemes.PIDColourScheme") ) {
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(42).calculate$java_util_List$I$I(sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1));
}this.refresh$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
