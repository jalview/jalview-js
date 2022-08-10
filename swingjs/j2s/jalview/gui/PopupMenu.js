(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JCheckBoxMenuItem','jalview.util.MessageManager','jalview.gui.Preferences','jalview.util.UrlLink','java.util.ArrayList','java.util.LinkedHashMap','jalview.bin.Console','Thread','jalview.gui.PopupMenu','jalview.util.BrowserLauncher','jalview.gui.JvOptionPane','jalview.gui.Desktop','java.util.Objects','jalview.io.FileFormats','java.util.Arrays','jalview.datamodel.SequenceI','java.util.Collections','jalview.gui.AppVarna','jalview.gui.ColourMenuHelper','java.util.Hashtable','jalview.datamodel.PDBEntry','jalview.util.Comparison','StringBuilder','jalview.util.StringUtils','jalview.gui.JvSwingUtils','jalview.util.Platform','javax.swing.JInternalFrame','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Color','javax.swing.JLabel','jalview.analysis.AlignmentAnnotationUtils','jalview.analysis.AlignmentUtils','jalview.util.GroupUrlLink','java.util.Locale','jalview.gui.StructureChooser','javax.swing.JRadioButtonMenuItem','jalview.gui.SliderPanel','java.util.TreeMap','java.util.BitSet','jalview.io.SequenceAnnotationReport','javax.swing.JScrollPane','jalview.gui.PaintRefresher','jalview.analysis.AAFrequency','jalview.gui.AnnotationChooser','jalview.analysis.Conservation','jalview.gui.EditNameDialog','jalview.gui.JalviewColourChooser','jalview.commands.ChangeCaseCommand','jalview.gui.CutAndPasteTransfer','jalview.io.FormatAdapter','jalview.datamodel.SequenceFeature','jalview.gui.FeatureEditor','jalview.gui.TextColourChooser','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'jalview.schemes.ColourSchemes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PopupMenu", null, 'javax.swing.JPopupMenu', [['jalview.gui.ColourMenuHelper','jalview.gui.ColourMenuHelper.ColourChangeListener']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.groupMenu=Clazz.new_($I$(1,1));
this.groupName=Clazz.new_($I$(2,1));
this.abovePIDColour=Clazz.new_($I$(3,1));
this.modifyPID=Clazz.new_($I$(2,1));
this.conservationMenuItem=Clazz.new_($I$(3,1));
this.modifyConservation=Clazz.new_($I$(2,1));
this.sequenceMenu=Clazz.new_($I$(1,1));
this.makeReferenceSeq=Clazz.new_($I$(2,1));
this.createGroupMenuItem=Clazz.new_($I$(2,1));
this.unGroupMenuItem=Clazz.new_($I$(2,1));
this.colourMenu=Clazz.new_($I$(1,1));
this.showBoxes=Clazz.new_($I$(3,1));
this.showText=Clazz.new_($I$(3,1));
this.showColourText=Clazz.new_($I$(3,1));
this.displayNonconserved=Clazz.new_($I$(3,1));
this.editMenu=Clazz.new_($I$(1,1));
this.upperCase=Clazz.new_($I$(2,1));
this.lowerCase=Clazz.new_($I$(2,1));
this.toggle=Clazz.new_($I$(2,1));
this.outputMenu=Clazz.new_($I$(1,1));
this.seqShowAnnotationsMenu=Clazz.new_($I$(1,1));
this.seqHideAnnotationsMenu=Clazz.new_($I$(1,1));
this.seqAddReferenceAnnotations=Clazz.new_([$I$(4).getString$S("label.add_reference_annotations")],$I$(2,1).c$$S);
this.groupShowAnnotationsMenu=Clazz.new_($I$(1,1));
this.groupHideAnnotationsMenu=Clazz.new_($I$(1,1));
this.groupAddReferenceAnnotations=Clazz.new_([$I$(4).getString$S("label.add_reference_annotations")],$I$(2,1).c$$S);
this.textColour=Clazz.new_($I$(2,1));
this.editGroupMenu=Clazz.new_($I$(1,1));
this.chooseStructure=Clazz.new_($I$(2,1));
this.rnaStructureMenu=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['forIdPanel'],'O',['ap','jalview.gui.AlignmentPanel','sequence','jalview.datamodel.SequenceI','groupMenu','javax.swing.JMenu','groupName','javax.swing.JMenuItem','abovePIDColour','javax.swing.JCheckBoxMenuItem','modifyPID','javax.swing.JMenuItem','conservationMenuItem','javax.swing.JCheckBoxMenuItem','annotationColour','javax.swing.JRadioButtonMenuItem','modifyConservation','javax.swing.JMenuItem','sequenceMenu','javax.swing.JMenu','makeReferenceSeq','javax.swing.JMenuItem','+createGroupMenuItem','+unGroupMenuItem','colourMenu','javax.swing.JMenu','showBoxes','javax.swing.JCheckBoxMenuItem','+showText','+showColourText','+displayNonconserved','editMenu','javax.swing.JMenu','upperCase','javax.swing.JMenuItem','+lowerCase','+toggle','outputMenu','javax.swing.JMenu','+seqShowAnnotationsMenu','+seqHideAnnotationsMenu','seqAddReferenceAnnotations','javax.swing.JMenuItem','groupShowAnnotationsMenu','javax.swing.JMenu','+groupHideAnnotationsMenu','groupAddReferenceAnnotations','javax.swing.JMenuItem','+textColour','editGroupMenu','javax.swing.JMenu','chooseStructure','javax.swing.JMenuItem','rnaStructureMenu','javax.swing.JMenu']]]

Clazz.newMeth(C$, 'buildLinkMenu$jalview_datamodel_SequenceI$java_util_List',  function (seq, features) {
var linkMenu=Clazz.new_([$I$(4).getString$S("action.link")],$I$(1,1).c$$S);
var nlinks=null;
if (seq != null ) {
nlinks=$I$(5).sequenceUrlLinks.getLinksForMenu$();
$I$(6).sort$java_util_List(nlinks);
} else {
nlinks=Clazz.new_($I$(7,1));
}if (features != null ) {
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.links != null ) {
for (var link, $link = sf.links.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
nlinks.add$O(link);
}
}}
}var linkset=Clazz.new_($I$(8,1));
for (var link, $link = nlinks.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
var urlLink=null;
try {
urlLink=Clazz.new_($I$(6,1).c$$S,[link]);
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
$I$(9).error$S$Throwable("Exception for URLLink '" + link + "'" , foo);
continue;
} else {
throw foo;
}
}
if (!urlLink.isValid$()) {
$I$(9,"error$S",[urlLink.getInvalidMessage$()]);
continue;
}urlLink.createLinksFromSeq$jalview_datamodel_SequenceI$java_util_Map(seq, linkset);
}
C$.addUrlLinks$javax_swing_JMenu$java_util_Collection(linkMenu, linkset.values$());
return linkMenu;
}, 1);

Clazz.newMeth(C$, 'addUrlLinks$javax_swing_JMenu$java_util_Collection',  function (linkMenu, linkset) {
for (var linkstrset, $linkstrset = linkset.iterator$(); $linkstrset.hasNext$()&&((linkstrset=($linkstrset.next$())),1);) {
var url=linkstrset.get$I(3);
var item=Clazz.new_([linkstrset.get$I(1)],$I$(2,1).c$$S);
item.setToolTipText$S($I$(4,"formatMessage$S$OA",["label.open_url_param", Clazz.array(java.lang.Object, -1, [url])]));
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_([((P$.PopupMenu$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(11).showLink$S(this.$finals$.url);
});
})()
), Clazz.new_(P$.PopupMenu$1$1.$init$,[this, {url:this.$finals$.url}]))],$I$(10,1).c$$Runnable).start$();
});
})()
), Clazz.new_(P$.PopupMenu$1.$init$,[this, {url:url}])));
linkMenu.add$javax_swing_JMenuItem(item);
}
}, 1);

Clazz.newMeth(C$, 'showLink$S',  function (url) {
try {
$I$(12).openURL$S(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(13,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(14).desktop, $I$(4).getString$S("label.web_browser_not_found_unix"), $I$(4).getString$S("label.web_browser_not_found"), 2]);
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'addshowLink$javax_swing_JMenu$S$jalview_util_GroupUrlLink$OA',  function (linkMenu, label, urlgenerator, urlstub) {
var item=Clazz.new_($I$(2,1).c$$S,[label]);
item.setToolTipText$S($I$(4,"formatMessage$S$OA",["label.open_url_seqs_param", Clazz.array(java.lang.Object, -1, [urlgenerator.getUrl_prefix$(), Integer.valueOf$I(urlgenerator.getNumberInvolved$OA(urlstub))])]));
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_([((P$.PopupMenu$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
$I$(11,"showLink$S",[this.$finals$.urlgenerator.constructFrom$OA(this.$finals$.urlstub)]);
} catch (e2) {
if (Clazz.exceptionOf(e2,"jalview.util.GroupUrlLink.UrlStringTooLongException")){
} else {
throw e2;
}
}
});
})()
), Clazz.new_(P$.PopupMenu$2$1.$init$,[this, {urlstub:this.$finals$.urlstub,urlgenerator:this.$finals$.urlgenerator}]))],$I$(10,1).c$$Runnable).start$();
});
})()
), Clazz.new_(P$.PopupMenu$2.$init$,[this, {urlstub:urlstub,urlgenerator:urlgenerator}])));
linkMenu.add$javax_swing_JMenuItem(item);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$I',  function (ap, seq, column) {
C$.c$$Z$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$I$java_util_List.apply(this, [false, ap, seq, column, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List',  function (alignPanel, seq, groupLinks) {
C$.c$$Z$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$I$java_util_List.apply(this, [true, alignPanel, seq, -1, groupLinks]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$I$java_util_List',  function (fromIdPanel, alignPanel, seq, column, groupLinks) {
Clazz.super_(C$, this);
$I$(15).requireNonNull$O(seq);
this.forIdPanel=fromIdPanel;
this.ap=alignPanel;
this.sequence=seq;
for (var ff, $ff = $I$(16).getInstance$().getWritableFormats$Z(true).iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var item=Clazz.new_($I$(2,1).c$$S,[ff]);
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].outputText_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$3.$init$,[this, null])));
this.outputMenu.add$javax_swing_JMenuItem(item);
}
var selectedSequence=(this.forIdPanel && seq != null   ? $I$(17,"asList$OA",[Clazz.array($I$(18), -1, [seq])]) : $I$(19).emptyList$());
this.buildAnnotationTypesMenus$javax_swing_JMenu$javax_swing_JMenu$java_util_List(this.seqShowAnnotationsMenu, this.seqHideAnnotationsMenu, selectedSequence);
this.configureReferenceAnnotationsMenu$javax_swing_JMenuItem$java_util_List(this.seqAddReferenceAnnotations, selectedSequence);
var selectedGroup=(alignPanel.av.getSelectionGroup$() == null  ? $I$(19).emptyList$() : alignPanel.av.getSelectionGroup$().getSequences$());
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
if (this.forIdPanel) {
var menuItem;
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
menuItem=Clazz.new_($I$(2,1));
menuItem.setText$S($I$(4,"formatMessage$S$OA",["label.2d_rna_structure_line", Clazz.array(java.lang.Object, -1, [aa.label])]));
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(20,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotation$jalview_gui_AlignmentPanel,[this.$finals$.seq, this.$finals$.aa, this.$finals$.alignPanel]);
});
})()
), Clazz.new_(P$.PopupMenu$4.$init$,[this, {seq:seq,alignPanel:alignPanel,aa:aa}])));
this.rnaStructureMenu.add$javax_swing_JMenuItem(menuItem);
}}
}if (seq.getAnnotation$() != null ) {
var seqAnns=seq.getAnnotation$();
for (var aa, $aa = 0, $$aa = seqAnns; $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa.isValidStruc$()) {
menuItem=Clazz.new_($I$(2,1));
menuItem.setText$S($I$(4,"formatMessage$S$OA",["label.2d_rna_sequence_name", Clazz.array(java.lang.Object, -1, [seq.getName$()])]));
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(20,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotation$jalview_gui_AlignmentPanel,[this.$finals$.seq, this.$finals$.aa, this.$finals$.alignPanel]);
});
})()
), Clazz.new_(P$.PopupMenu$5.$init$,[this, {seq:seq,alignPanel:alignPanel,aa:aa}])));
this.rnaStructureMenu.add$javax_swing_JMenuItem(menuItem);
}}
}if (this.rnaStructureMenu.getItemCount$() == origCount) {
this.remove$java_awt_Component(this.rnaStructureMenu);
}}menuItem=Clazz.new_([$I$(4).getString$S("action.hide_sequences")],$I$(2,1).c$$S);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].hideSequences$Z.apply(this.b$['jalview.gui.PopupMenu'], [false]);
});
})()
), Clazz.new_(P$.PopupMenu$6.$init$,[this, null])));
this.add$javax_swing_JMenuItem(menuItem);
if (alignPanel.av.getSelectionGroup$() != null  && alignPanel.av.getSelectionGroup$().getSize$() > 1 ) {
menuItem=Clazz.new_([$I$(4,"formatMessage$S$OA",["label.represent_group_with", Clazz.array(java.lang.Object, -1, [seq.getName$()])])],$I$(2,1).c$$S);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].hideSequences$Z.apply(this.b$['jalview.gui.PopupMenu'], [true]);
});
})()
), Clazz.new_(P$.PopupMenu$7.$init$,[this, null])));
this.sequenceMenu.add$javax_swing_JMenuItem(menuItem);
}if (alignPanel.av.hasHiddenRows$()) {
var index=alignPanel.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(seq);
if (alignPanel.av.adjustForHiddenSeqs$I(index) - alignPanel.av.adjustForHiddenSeqs$I(index - 1) > 1) {
menuItem=Clazz.new_([$I$(4).getString$S("action.reveal_sequences")],$I$(2,1).c$$S);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.alignPanel.av.showSequence$I(this.$finals$.index);
if (this.$finals$.alignPanel.overviewPanel != null ) {
this.$finals$.alignPanel.overviewPanel.updateOverviewImage$();
}});
})()
), Clazz.new_(P$.PopupMenu$8.$init$,[this, {index:index,alignPanel:alignPanel}])));
this.add$javax_swing_JMenuItem(menuItem);
}}}if (alignPanel.av.hasHiddenRows$()) {
var addOption=seq != null ;
if (!addOption && alignPanel.av.getAlignment$().getHeight$() == 0 ) {
addOption=true;
}if (addOption) {
var menuItem=Clazz.new_([$I$(4).getString$S("action.reveal_all")],$I$(2,1).c$$S);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.alignPanel.av.showAllHiddenSeqs$();
if (this.$finals$.alignPanel.overviewPanel != null ) {
this.$finals$.alignPanel.overviewPanel.updateOverviewImage$();
}});
})()
), Clazz.new_(P$.PopupMenu$9.$init$,[this, {alignPanel:alignPanel}])));
this.add$javax_swing_JMenuItem(menuItem);
}}var sg=alignPanel.av.getSelectionGroup$();
var isDefinedGroup=(sg != null ) ? alignPanel.av.getAlignment$().getGroups$().contains$O(sg) : false;
if (sg != null  && sg.getSize$() > 0 ) {
this.groupName.setText$S($I$(4).getString$S("label.edit_name_and_description_current_group"));
$I$(21,"setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI",[this.colourMenu, sg.getColourScheme$()]);
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
}var pdbe=Clazz.new_($I$(22,1));
var reppdb=Clazz.new_($I$(22,1));
var sqass=null;
for (var sq, $sq = 0, $$sq = alignPanel.av.getSequenceSelection$(); $sq<$$sq.length&&((sq=($$sq[$sq])),1);$sq++) {
var pes=sq.getDatasetSequence$().getAllPDBEntries$();
if (pes != null  && pes.size$() > 0 ) {
reppdb.put$O$O(pes.get$I(0).getId$(), pes.get$I(0));
for (var pe, $pe = pes.iterator$(); $pe.hasNext$()&&((pe=($pe.next$())),1);) {
pdbe.put$O$O(pe.getId$(), pe);
if (sqass == null ) {
sqass=sq;
}}
}}
if (pdbe.size$() > 0) {
var pe=pdbe.values$().toArray$OA(Clazz.array($I$(23), [pdbe.size$()]));
var pr=reppdb.values$().toArray$OA(Clazz.array($I$(23), [reppdb.size$()]));
var gpdbview;
var rpdbview;
}} else {
this.groupMenu.setVisible$Z(false);
this.editMenu.setVisible$Z(false);
}if (!isDefinedGroup) {
this.createGroupMenuItem.setVisible$Z(true);
this.unGroupMenuItem.setVisible$Z(false);
this.editGroupMenu.setText$S($I$(4).getString$S("action.edit_new_group"));
} else {
this.createGroupMenuItem.setVisible$Z(false);
this.unGroupMenuItem.setVisible$Z(true);
this.editGroupMenu.setText$S($I$(4).getString$S("action.edit_group"));
}if (!this.forIdPanel) {
this.sequenceMenu.setVisible$Z(false);
this.chooseStructure.setVisible$Z(false);
this.rnaStructureMenu.setVisible$Z(false);
}this.addLinksAndFeatures$jalview_datamodel_SequenceI$I(seq, column);
}, 1);

Clazz.newMeth(C$, 'addLinksAndFeatures$jalview_datamodel_SequenceI$I',  function (seq, column) {
var features=null;
if (this.forIdPanel) {
features=this.sequence.getFeatures$().getNonPositionalFeatures$SA(Clazz.array(String, -1, []));
} else {
features=this.ap.getFeatureRenderer$().findFeaturesAtColumn$jalview_datamodel_SequenceI$I(this.sequence, column + 1);
}this.addLinks$jalview_datamodel_SequenceI$java_util_List(seq, features);
if (!this.forIdPanel) {
this.addFeatureDetails$java_util_List$jalview_datamodel_SequenceI$I(features, seq, column);
}});

Clazz.newMeth(C$, 'addFeatureDetails$java_util_List$jalview_datamodel_SequenceI$I',  function (features, seq, column) {
var mf=null;
if (this.ap.av.isShowComplementFeatures$()) {
if (!$I$(24,"isGap$C",[this.sequence.getCharAt$I(column)])) {
var complement=this.ap.getAlignViewport$().getCodingComplement$();
var af=$I$(14).getAlignFrameFor$jalview_api_AlignViewportI(complement);
var fr2=af.getFeatureRenderer$();
var seqPos=this.sequence.findPosition$I(column);
mf=fr2.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(this.sequence, seqPos);
}}if (features.isEmpty$() && mf == null  ) {
return;
}var details=Clazz.new_([$I$(4).getString$S("label.feature_details")],$I$(1,1).c$$S);
this.add$javax_swing_JMenuItem(details);
var name=seq.getName$();
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
this.addFeatureDetailsMenuItem$javax_swing_JMenu$S$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures(details, name, sf, null);
}
if (mf != null ) {
for (var sf, $sf = mf.features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
this.addFeatureDetailsMenuItem$javax_swing_JMenu$S$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures(details, name, sf, mf);
}
}});

Clazz.newMeth(C$, 'addFeatureDetailsMenuItem$javax_swing_JMenu$S$jalview_datamodel_SequenceFeature$jalview_datamodel_MappedFeatures',  function (details, seqName, sf, mf) {
var start=sf.getBegin$();
var end=sf.getEnd$();
if (mf != null ) {
var localRange=mf.getMappedPositions$I$I(start, end);
if (localRange == null ) {
return;
}start=localRange[0];
end=localRange[localRange.length - 1];
}var desc=Clazz.new_($I$(25,1));
desc.append$S(sf.getType$()).append$S(" ").append$S(String.valueOf$I(start));
if (start != end) {
desc.append$S(sf.isContactFeature$() ? ":" : "-");
desc.append$S(String.valueOf$I(end));
}var description=sf.getDescription$();
if (description != null ) {
desc.append$S(" ");
description=$I$(26).stripHtmlTags$S(description);
var hasLink=description.indexOf$S("a href") > -1;
if (description.length$() > 40 && !hasLink ) {
description=description.substring$I$I(0, 40) + "...";
}desc.append$S(description);
}var featureGroup=sf.getFeatureGroup$();
if (featureGroup != null ) {
desc.append$S(" (").append$S(featureGroup).append$S(")");
}var htmlText=$I$(27,"wrapTooltip$Z$S",[true, desc.toString()]);
var item=Clazz.new_($I$(2,1).c$$S,[htmlText]);
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].showFeatureDetails$jalview_datamodel_SequenceFeature$S$jalview_datamodel_MappedFeatures.apply(this.b$['jalview.gui.PopupMenu'], [this.$finals$.sf, this.$finals$.seqName, this.$finals$.mf]);
});
})()
), Clazz.new_(P$.PopupMenu$10.$init$,[this, {seqName:seqName,sf:sf,mf:mf}])));
details.add$javax_swing_JMenuItem(item);
});

Clazz.newMeth(C$, 'showFeatureDetails$jalview_datamodel_SequenceFeature$S$jalview_datamodel_MappedFeatures',  function (sf, seqName, mf) {
var details;
if ($I$(28).isJS$()) {
details=Clazz.new_($I$(29,1));
var panel=Clazz.new_([Clazz.new_($I$(31,1))],$I$(30,1).c$$java_awt_LayoutManager);
panel.setOpaque$Z(true);
panel.setBackground$java_awt_Color($I$(32).white);
var reprt=Clazz.new_([$I$(4,"formatMessage$S$OA",["label.html_content", Clazz.array(java.lang.Object, -1, [sf.getDetailsReport$S$jalview_datamodel_MappedFeatures(seqName, mf)])])],$I$(33,1).c$$S);
reprt.setBackground$java_awt_Color($I$(32).WHITE);
reprt.setOpaque$Z(true);
panel.add$java_awt_Component$O(reprt, "Center");
details.setContentPane$java_awt_Container(panel);
details.pack$();
} else 
{}
$I$(14,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[details, $I$(4).getString$S("label.feature_details"), 500, 500]);
});

Clazz.newMeth(C$, 'addLinks$jalview_datamodel_SequenceI$java_util_List',  function (seq, features) {
var linkMenu=C$.buildLinkMenu$jalview_datamodel_SequenceI$java_util_List(this.forIdPanel ? seq : null, features);
if (linkMenu.getItemCount$() > 0) {
if (this.forIdPanel) {
this.sequenceMenu.add$javax_swing_JMenuItem(linkMenu);
} else {
this.add$javax_swing_JMenuItem(linkMenu);
}}});

Clazz.newMeth(C$, 'buildAnnotationTypesMenus$javax_swing_JMenu$javax_swing_JMenu$java_util_List',  function (showMenu, hideMenu, forSequences) {
showMenu.removeAll$();
hideMenu.removeAll$();
var all=$I$(17,"asList$OA",[Clazz.array(String, -1, [$I$(4).getString$S("label.all")])]);
this.addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z(showMenu, forSequences, "", all, true, true);
this.addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z(hideMenu, forSequences, "", all, true, false);
showMenu.addSeparator$();
hideMenu.addSeparator$();
var annotations=this.ap.getAlignment$().getAlignmentAnnotation$();
var shownTypes=Clazz.new_($I$(8,1));
var hiddenTypes=Clazz.new_($I$(8,1));
$I$(34,"getShownHiddenTypes$java_util_Map$java_util_Map$java_util_List$java_util_List",[shownTypes, hiddenTypes, $I$(34).asList$jalview_datamodel_AlignmentAnnotationA(annotations), forSequences]);
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

Clazz.newMeth(C$, 'getSequenceScope$jalview_datamodel_SequenceI',  function (seq) {
var forSequences=null;
var selectionGroup=this.ap.av.getSelectionGroup$();
if (selectionGroup != null  && selectionGroup.getSize$() > 0 ) {
forSequences=selectionGroup.getSequences$();
} else {
forSequences=seq == null  ? $I$(19).emptyList$() : $I$(17,"asList$OA",[Clazz.array($I$(18), -1, [seq])]);
}return forSequences;
});

Clazz.newMeth(C$, 'addAnnotationTypeToShowHide$javax_swing_JMenu$java_util_List$S$java_util_List$Z$Z',  function (showOrHideMenu, forSequences, calcId, types, allTypes, actionIsShow) {
var label=types.toString();
label=label.substring$I$I(1, label.length$() - 1);
var item=Clazz.new_($I$(2,1).c$$S,[label]);
item.setToolTipText$S(calcId);
item.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(35,"showOrHideSequenceAnnotations$jalview_datamodel_AlignmentI$java_util_Collection$java_util_List$Z$Z",[this.b$['jalview.gui.PopupMenu'].ap.getAlignment$(), this.$finals$.types, this.$finals$.forSequences, this.$finals$.allTypes, this.$finals$.actionIsShow]);
this.b$['jalview.gui.PopupMenu'].refresh$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$11.$init$,[this, {actionIsShow:actionIsShow,allTypes:allTypes,forSequences:forSequences,types:types}])));
showOrHideMenu.add$javax_swing_JMenuItem(item);
});

Clazz.newMeth(C$, 'buildGroupURLMenu$jalview_datamodel_SequenceGroup$java_util_List',  function (sg, groupLinks) {
var groupLinksMenu=Clazz.new_([$I$(4).getString$S("action.group_link")],$I$(1,1).c$$S);
var linkMenus=Clazz.array($I$(1), -1, [null, Clazz.new_([$I$(4).getString$S("action.ids")],$I$(1,1).c$$S), Clazz.new_([$I$(4).getString$S("action.sequences")],$I$(1,1).c$$S), Clazz.new_([$I$(4).getString$S("action.ids_sequences")],$I$(1,1).c$$S)]);
var seqs=this.ap.av.getSelectionAsNewSequence$();
var idandseqs=$I$(36).formStrings$jalview_datamodel_SequenceIA(seqs);
var commonDbrefs=Clazz.new_($I$(22,1));
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
commonDbrefs.put$O$O(src, sarray);
}if ((sarray[1])[sq] == null ) {
if (!e.hasMap$() || (e.getMap$().locateMappedRange$I$I(start, end) != null ) ) {
(sarray[1])[sq]=e.getAccessionId$();
++(sarray[0])[0];
}}}
}}
var addMenu=false;
for (var link, $link = groupLinks.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
var urlLink=null;
try {
urlLink=Clazz.new_($I$(36,1).c$$S,[link]);
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
$I$(9).error$S$Throwable("Exception for GroupURLLink '" + link + "'" , foo);
continue;
} else {
throw foo;
}
}
if (!urlLink.isValid$()) {
$I$(9,"error$S",[urlLink.getInvalidMessage$()]);
continue;
}var label=urlLink.getLabel$();
var usingNames=false;
var ltarget=urlLink.getTarget$();
var idset=commonDbrefs.get$O(ltarget.toUpperCase$java_util_Locale($I$(37).ROOT));
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
urlset=urlLink.makeUrlStubs$SA$SA$S$Z(ids, seqstr, "FromJalview" + Long.$s(System.currentTimeMillis$()), false);
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
groupLinksMenu=Clazz.new_([$I$(4).getString$S("action.group_link")],$I$(1,1).c$$S);
for (var m=0; m < linkMenus.length; m++) {
if (linkMenus[m] != null  && linkMenus[m].getMenuComponentCount$() > 0 ) {
groupLinksMenu.add$javax_swing_JMenuItem(linkMenus[m]);
}}
this.groupMenu.add$javax_swing_JMenuItem(groupLinksMenu);
}}, p$1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.groupMenu.setText$S($I$(4).getString$S("label.selection"));
this.groupName.setText$S($I$(4).getString$S("label.name"));
this.groupName.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].groupName_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$12.$init$,[this, null])));
this.sequenceMenu.setText$S($I$(4).getString$S("label.sequence"));
var sequenceName=Clazz.new_([$I$(4).getString$S("label.edit_name_description")],$I$(2,1).c$$S);
sequenceName.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].sequenceName_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$13.$init$,[this, null])));
var chooseAnnotations=Clazz.new_([$I$(4).getString$S("action.choose_annotations")],$I$(2,1).c$$S);
chooseAnnotations.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].chooseAnnotations_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$14.$init$,[this, null])));
var sequenceDetails=Clazz.new_([$I$(4).getString$S("label.sequence_details")],$I$(2,1).c$$S);
sequenceDetails.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].createSequenceDetailsReport$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.PopupMenu'], [Clazz.array($I$(18), -1, [this.b$['jalview.gui.PopupMenu'].sequence])]);
});
})()
), Clazz.new_(P$.PopupMenu$15.$init$,[this, null])));
var sequenceSelDetails=Clazz.new_([$I$(4).getString$S("label.sequence_details")],$I$(2,1).c$$S);
sequenceSelDetails.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].createSequenceDetailsReport$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.PopupMenu'], [this.b$['jalview.gui.PopupMenu'].ap.av.getSequenceSelection$()]);
});
})()
), Clazz.new_(P$.PopupMenu$16.$init$,[this, null])));
this.unGroupMenuItem.setText$S($I$(4).getString$S("action.remove_group"));
this.unGroupMenuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].unGroupMenuItem_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$17.$init$,[this, null])));
this.createGroupMenuItem.setText$S($I$(4).getString$S("action.create_group"));
this.createGroupMenuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].createGroupMenuItem_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$18.$init$,[this, null])));
var outline=Clazz.new_([$I$(4).getString$S("action.border_colour")],$I$(2,1).c$$S);
outline.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].outline_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$19.$init$,[this, null])));
this.showBoxes.setText$S($I$(4).getString$S("action.boxes"));
this.showBoxes.setState$Z(true);
this.showBoxes.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].showBoxes_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$20.$init$,[this, null])));
this.showText.setText$S($I$(4).getString$S("action.text"));
this.showText.setState$Z(true);
this.showText.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].showText_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$21.$init$,[this, null])));
this.showColourText.setText$S($I$(4).getString$S("label.colour_text"));
this.showColourText.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].showColourText_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$22.$init$,[this, null])));
this.displayNonconserved.setText$S($I$(4).getString$S("label.show_non_conserved"));
this.displayNonconserved.setState$Z(true);
this.displayNonconserved.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].showNonconserved_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$23.$init$,[this, null])));
this.editMenu.setText$S($I$(4).getString$S("action.edit"));
var cut=Clazz.new_([$I$(4).getString$S("action.cut")],$I$(2,1).c$$S);
cut.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].cut_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$24.$init$,[this, null])));
this.upperCase.setText$S($I$(4).getString$S("label.to_upper_case"));
this.upperCase.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].changeCase$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$25.$init$,[this, null])));
var copy=Clazz.new_([$I$(4).getString$S("action.copy")],$I$(2,1).c$$S);
copy.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].copy_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$26.$init$,[this, null])));
this.lowerCase.setText$S($I$(4).getString$S("label.to_lower_case"));
this.lowerCase.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].changeCase$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$27.$init$,[this, null])));
this.toggle.setText$S($I$(4).getString$S("label.toggle_case"));
this.toggle.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].changeCase$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$28.$init$,[this, null])));
this.outputMenu.setText$S($I$(4).getString$S("label.out_to_textbox") + "...");
this.seqShowAnnotationsMenu.setText$S($I$(4).getString$S("label.show_annotations"));
this.seqHideAnnotationsMenu.setText$S($I$(4).getString$S("label.hide_annotations"));
this.groupShowAnnotationsMenu.setText$S($I$(4).getString$S("label.show_annotations"));
this.groupHideAnnotationsMenu.setText$S($I$(4).getString$S("label.hide_annotations"));
var sequenceFeature=Clazz.new_([$I$(4).getString$S("label.create_sequence_feature")],$I$(2,1).c$$S);
sequenceFeature.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].sequenceFeature_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$29.$init$,[this, null])));
this.editGroupMenu.setText$S($I$(4).getString$S("label.group"));
this.chooseStructure.setText$S($I$(4).getString$S("label.show_pdbstruct_dialog"));
this.chooseStructure.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
var selectedSeqs=Clazz.array($I$(18), -1, [this.b$['jalview.gui.PopupMenu'].sequence]);
if (this.b$['jalview.gui.PopupMenu'].ap.av.getSelectionGroup$() != null ) {
selectedSeqs=this.b$['jalview.gui.PopupMenu'].ap.av.getSequenceSelection$();
}Clazz.new_($I$(38,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceI$jalview_gui_AlignmentPanel,[selectedSeqs, this.b$['jalview.gui.PopupMenu'].sequence, this.b$['jalview.gui.PopupMenu'].ap]);
});
})()
), Clazz.new_(P$.PopupMenu$30.$init$,[this, null])));
this.rnaStructureMenu.setText$S($I$(4).getString$S("label.view_rna_structure"));
var editSequence=Clazz.new_([$I$(4).getString$S("label.edit_sequence") + "..."],$I$(2,1).c$$S);
editSequence.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.PopupMenu'].editSequence_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$31.$init$,[this, null])));
this.makeReferenceSeq.setText$S($I$(4).getString$S("label.mark_as_representative"));
this.makeReferenceSeq.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.PopupMenu'].makeReferenceSeq_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [actionEvent]);
});
})()
), Clazz.new_(P$.PopupMenu$32.$init$,[this, null])));
this.groupMenu.add$javax_swing_JMenuItem(sequenceSelDetails);
this.add$javax_swing_JMenuItem(this.groupMenu);
this.add$javax_swing_JMenuItem(this.sequenceMenu);
this.add$javax_swing_JMenuItem(this.rnaStructureMenu);
this.add$javax_swing_JMenuItem(this.chooseStructure);
if (this.forIdPanel) {
var hideInsertions=Clazz.new_([$I$(4).getString$S("label.hide_insertions")],$I$(2,1).c$$S);
hideInsertions.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].hideInsertions_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.PopupMenu'], [e]);
});
})()
), Clazz.new_(P$.PopupMenu$33.$init$,[this, null])));
this.add$javax_swing_JMenuItem(hideInsertions);
}this.sequenceMenu.add$javax_swing_JMenuItem(this.seqShowAnnotationsMenu);
this.sequenceMenu.add$javax_swing_JMenuItem(this.seqHideAnnotationsMenu);
this.sequenceMenu.add$javax_swing_JMenuItem(this.seqAddReferenceAnnotations);
this.groupMenu.add$javax_swing_JMenuItem(this.groupShowAnnotationsMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.groupHideAnnotationsMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.groupAddReferenceAnnotations);
this.groupMenu.add$javax_swing_JMenuItem(this.editMenu);
this.groupMenu.add$javax_swing_JMenuItem(this.outputMenu);
this.groupMenu.add$javax_swing_JMenuItem(sequenceFeature);
this.groupMenu.add$javax_swing_JMenuItem(this.createGroupMenuItem);
this.groupMenu.add$javax_swing_JMenuItem(this.unGroupMenuItem);
this.groupMenu.add$javax_swing_JMenuItem(this.editGroupMenu);
this.sequenceMenu.add$javax_swing_JMenuItem(sequenceName);
this.sequenceMenu.add$javax_swing_JMenuItem(sequenceDetails);
this.sequenceMenu.add$javax_swing_JMenuItem(this.makeReferenceSeq);
this.initColourMenu$();
this.buildColourMenu$();
this.editMenu.add$javax_swing_JMenuItem(copy);
this.editMenu.add$javax_swing_JMenuItem(cut);
this.editMenu.add$javax_swing_JMenuItem(editSequence);
this.editMenu.add$javax_swing_JMenuItem(this.upperCase);
this.editMenu.add$javax_swing_JMenuItem(this.lowerCase);
this.editMenu.add$javax_swing_JMenuItem(this.toggle);
this.editGroupMenu.add$javax_swing_JMenuItem(this.groupName);
this.editGroupMenu.add$javax_swing_JMenuItem(this.colourMenu);
this.editGroupMenu.add$javax_swing_JMenuItem(this.showBoxes);
this.editGroupMenu.add$javax_swing_JMenuItem(this.showText);
this.editGroupMenu.add$javax_swing_JMenuItem(this.showColourText);
this.editGroupMenu.add$javax_swing_JMenuItem(outline);
this.editGroupMenu.add$javax_swing_JMenuItem(this.displayNonconserved);
}, p$1);

Clazz.newMeth(C$, 'initColourMenu$',  function () {
this.colourMenu.setText$S($I$(4).getString$S("label.group_colour"));
this.textColour.setText$S($I$(4).getString$S("label.text_colour"));
this.textColour.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].textColour_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$34.$init$,[this, null])));
this.abovePIDColour.setText$S($I$(4).getString$S("label.above_identity_threshold"));
this.abovePIDColour.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].abovePIDColour_actionPerformed$Z.apply(this.b$['jalview.gui.PopupMenu'], [this.b$['jalview.gui.PopupMenu'].abovePIDColour.isSelected$()]);
});
})()
), Clazz.new_(P$.PopupMenu$35.$init$,[this, null])));
this.modifyPID.setText$S($I$(4).getString$S("label.modify_identity_threshold"));
this.modifyPID.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].modifyPID_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$36.$init$,[this, null])));
this.conservationMenuItem.setText$S($I$(4).getString$S("action.by_conservation"));
this.conservationMenuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].conservationMenuItem_actionPerformed$Z.apply(this.b$['jalview.gui.PopupMenu'], [this.b$['jalview.gui.PopupMenu'].conservationMenuItem.isSelected$()]);
});
})()
), Clazz.new_(P$.PopupMenu$37.$init$,[this, null])));
this.annotationColour=Clazz.new_([$I$(4).getString$S("action.by_annotation")],$I$(39,1).c$$S);
this.annotationColour.setName$S("Annotation");
this.annotationColour.setEnabled$Z(false);
this.annotationColour.setToolTipText$S($I$(4).getString$S("label.by_annotation_tooltip"));
this.modifyConservation.setText$S($I$(4).getString$S("label.modify_conservation_threshold"));
this.modifyConservation.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].modifyConservation_actionPerformed$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$38.$init$,[this, null])));
});

Clazz.newMeth(C$, 'buildColourMenu$',  function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg == null ) {
return;
}this.colourMenu.removeAll$();
this.colourMenu.add$javax_swing_JMenuItem(this.textColour);
this.colourMenu.addSeparator$();
var bg=$I$(21).addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z(this.colourMenu, this, sg, false);
bg.add$javax_swing_AbstractButton(this.annotationColour);
this.colourMenu.add$javax_swing_JMenuItem(this.annotationColour);
this.colourMenu.addSeparator$();
this.colourMenu.add$javax_swing_JMenuItem(this.conservationMenuItem);
this.colourMenu.add$javax_swing_JMenuItem(this.modifyConservation);
this.colourMenu.add$javax_swing_JMenuItem(this.abovePIDColour);
this.colourMenu.add$javax_swing_JMenuItem(this.modifyPID);
});

Clazz.newMeth(C$, 'modifyConservation_actionPerformed$',  function () {
var sg=this.getGroup$();
if (sg.cs != null ) {
$I$(40,"setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, sg.cs, sg.getName$()]);
$I$(40).showConservationSlider$();
}});

Clazz.newMeth(C$, 'modifyPID_actionPerformed$',  function () {
var sg=this.getGroup$();
if (sg.cs != null ) {
$I$(40,"setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, sg.cs, this.getGroup$().getName$()]);
$I$(40).showPIDSlider$();
}});

Clazz.newMeth(C$, 'configureReferenceAnnotationsMenu$javax_swing_JMenuItem$java_util_List',  function (menuItem, forSequences) {
menuItem.setEnabled$Z(false);
var tipEntries=Clazz.new_($I$(41,1));
var candidates=Clazz.new_($I$(8,1));
var al=this.ap.av.getAlignment$();
$I$(35).findAddableReferenceAnnotations$java_util_List$java_util_Map$java_util_Map$jalview_datamodel_AlignmentI(forSequences, tipEntries, candidates, al);
if (!candidates.isEmpty$()) {
var tooltip=Clazz.new_($I$(25,1).c$$I,[64]);
tooltip.append$S($I$(4).getString$S("label.add_annotations_for"));
menuItem.setEnabled$Z(true);
for (var calcId, $calcId = tipEntries.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
tooltip.append$S("<br/>" + calcId + "/" + tipEntries.get$O(calcId) );
}
var tooltipText=$I$(27,"wrapTooltip$Z$S",[true, tooltip.toString()]);
menuItem.setToolTipText$S(tooltipText);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.PopupMenu$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PopupMenu'].addReferenceAnnotations_actionPerformed$java_util_Map.apply(this.b$['jalview.gui.PopupMenu'], [this.$finals$.candidates]);
});
})()
), Clazz.new_(P$.PopupMenu$39.$init$,[this, {candidates:candidates}])));
}});

Clazz.newMeth(C$, 'addReferenceAnnotations_actionPerformed$java_util_Map',  function (candidates) {
var selectionGroup=this.ap.av.getSelectionGroup$();
var alignment=this.ap.getAlignment$();
$I$(35).addReferenceAnnotations$java_util_Map$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup(candidates, alignment, selectionGroup);
this.refresh$();
});

Clazz.newMeth(C$, 'makeReferenceSeq_actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
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

Clazz.newMeth(C$, 'hideInsertions_actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
var hidden=this.ap.av.getAlignment$().getHiddenColumns$();
var inserts=Clazz.new_($I$(42,1));
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

Clazz.newMeth(C$, 'sequenceSelectionDetails_actionPerformed$',  function () {
this.createSequenceDetailsReport$jalview_datamodel_SequenceIA(this.ap.av.getSequenceSelection$());
});

Clazz.newMeth(C$, 'createSequenceDetailsReport$jalview_datamodel_SequenceIA',  function (sequences) {
var contents=Clazz.new_($I$(25,1).c$$I,[128]);
contents.append$S("<html><body>");
for (var seq, $seq = 0, $$seq = sequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
contents.append$S("<p><h2>" + $I$(4,"formatMessage$S$OA",["label.create_sequence_details_report_annotation_for", Clazz.array(java.lang.Object, -1, [seq.getDisplayId$Z(true)])]) + "</h2></p>\n<p>" );
Clazz.new_($I$(43,1).c$$Z,[false]).createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel(contents, seq, true, true, this.ap.getSeqPanel$().seqCanvas.fr);
contents.append$S("</p>");
}
contents.append$S("</body></html>");
var report=contents.toString();
var frame;
if ($I$(28).isJS$()) {
var textLabel=Clazz.new_($I$(33,1));
textLabel.setText$S(report);
textLabel.setBackground$java_awt_Color($I$(32).WHITE);
var pane=Clazz.new_([Clazz.new_($I$(31,1))],$I$(30,1).c$$java_awt_LayoutManager);
pane.setOpaque$Z(true);
pane.setBackground$java_awt_Color($I$(32).WHITE);
pane.add$java_awt_Component$O(textLabel, "North");
frame=Clazz.new_($I$(29,1));
frame.getContentPane$().add$java_awt_Component(Clazz.new_($I$(44,1).c$$java_awt_Component,[pane]));
} else 
{}
$I$(14,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[frame, $I$(4,"formatMessage$S$OA",["label.sequence_details_for", (sequences.length == 1 ? Clazz.array(java.lang.Object, -1, [sequences[0].getDisplayId$Z(true)]) : Clazz.array(java.lang.Object, -1, [$I$(4).getString$S("label.selection")]))]), 500, 400]);
});

Clazz.newMeth(C$, 'showNonconserved_actionPerformed$',  function () {
this.getGroup$().setShowNonconserved$Z(this.displayNonconserved.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'refresh$',  function () {
this.ap.updateAnnotation$();
$I$(45,"Refresh$java_awt_Component$S",[this, this.ap.av.getSequenceSetId$()]);
});

Clazz.newMeth(C$, 'abovePIDColour_actionPerformed$Z',  function (selected) {
var sg=this.getGroup$();
if (sg.cs == null ) {
return;
}if (selected) {
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(46,"calculate$java_util_List$I$I",[sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1]));
var threshold=$I$(40,"setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, sg.getGroupColourScheme$(), this.getGroup$().getName$()]);
sg.cs.setThreshold$I$Z(threshold, this.ap.av.isIgnoreGapsConsensus$());
$I$(40).showPIDSlider$();
} else {
sg.cs.setThreshold$I$Z(0, this.ap.av.isIgnoreGapsConsensus$());
$I$(40).hidePIDSlider$();
}this.modifyPID.setEnabled$Z(selected);
this.refresh$();
});

Clazz.newMeth(C$, 'chooseAnnotations_actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(47,1).c$$jalview_gui_AlignmentPanel,[this.ap]);
});

Clazz.newMeth(C$, 'conservationMenuItem_actionPerformed$Z',  function (selected) {
var sg=this.getGroup$();
if (sg.cs == null ) {
return;
}if (selected) {
var c=Clazz.new_(["Group", sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1],$I$(48,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, this.ap.av.getConsPercGaps$());
sg.cs.setConservation$jalview_analysis_Conservation(c);
$I$(40,"setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, sg.getGroupColourScheme$(), sg.getName$()]);
$I$(40).showConservationSlider$();
} else {
sg.cs.setConservation$jalview_analysis_Conservation(null);
$I$(40).hideConservationSlider$();
}this.modifyConservation.setEnabled$Z(selected);
this.refresh$();
});

Clazz.newMeth(C$, 'groupName_actionPerformed$',  function () {
var sg=this.getGroup$();
var dialog=Clazz.new_([sg.getName$(), sg.getDescription$(), $I$(4).getString$S("label.group_name"), $I$(4).getString$S("label.group_description")],$I$(49,1).c$$S$S$S$S);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, $I$(4).getString$S("label.edit_group_name_description"), ((P$.PopupMenu$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.sg.setName$S(this.$finals$.dialog.getName$());
this.$finals$.sg.setDescription$S(this.$finals$.dialog.getDescription$());
this.b$['jalview.gui.PopupMenu'].refresh$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$40.$init$,[this, {dialog:dialog,sg:sg}])));
});

Clazz.newMeth(C$, 'getGroup$',  function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
this.ap.av.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(sg);
}return sg;
});

Clazz.newMeth(C$, 'sequenceName_actionPerformed$',  function () {
var dialog=Clazz.new_([this.sequence.getName$(), this.sequence.getDescription$(), $I$(4).getString$S("label.sequence_name"), $I$(4).getString$S("label.sequence_description")],$I$(49,1).c$$S$S$S$S);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, $I$(4).getString$S("label.edit_sequence_name_description"), ((P$.PopupMenu$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.dialog.getName$() != null ) {
if (this.$finals$.dialog.getName$().indexOf$S(" ") > -1) {
$I$(13,"showMessageDialog$java_awt_Component$S$S$I",[this.b$['jalview.gui.PopupMenu'].ap, $I$(4).getString$S("label.spaces_converted_to_underscores"), $I$(4).getString$S("label.no_spaces_allowed_sequence_name"), 2]);
}this.b$['jalview.gui.PopupMenu'].sequence.setName$S(this.$finals$.dialog.getName$().replace$C$C(" ", "_"));
this.b$['jalview.gui.PopupMenu'].ap.paintAlignment$Z$Z(false, false);
}this.b$['jalview.gui.PopupMenu'].sequence.setDescription$S(this.$finals$.dialog.getDescription$());
this.b$['jalview.gui.PopupMenu'].ap.av.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.PopupMenu'].ap.av.getAlignment$().getSequences$());
});
})()
), Clazz.new_(P$.PopupMenu$41.$init$,[this, {dialog:dialog}])));
});

Clazz.newMeth(C$, 'unGroupMenuItem_actionPerformed$',  function () {
var sg=this.ap.av.getSelectionGroup$();
this.ap.av.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(sg);
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.refresh$();
});

Clazz.newMeth(C$, 'createGroupMenuItem_actionPerformed$',  function () {
this.getGroup$();
this.refresh$();
});

Clazz.newMeth(C$, 'outline_actionPerformed$',  function () {
var title=$I$(4).getString$S("label.select_outline_colour");
var listener=((P$.PopupMenu$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color',  function (c) {
this.b$['jalview.gui.PopupMenu'].getGroup$.apply(this.b$['jalview.gui.PopupMenu'], []).setOutlineColour$java_awt_Color(c);
this.b$['jalview.gui.PopupMenu'].refresh$.apply(this.b$['jalview.gui.PopupMenu'], []);
});
})()
), Clazz.new_(P$.PopupMenu$42.$init$,[this, null]));
$I$(50,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[$I$(14).getDesktop$(), title, $I$(32).BLUE, listener]);
});

Clazz.newMeth(C$, 'showBoxes_actionPerformed$',  function () {
this.getGroup$().setDisplayBoxes$Z(this.showBoxes.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'showText_actionPerformed$',  function () {
this.getGroup$().setDisplayText$Z(this.showText.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'showColourText_actionPerformed$',  function () {
this.getGroup$().setColourText$Z(this.showColourText.isSelected$());
this.refresh$();
});

Clazz.newMeth(C$, 'hideSequences$Z',  function (representGroup) {
this.ap.av.hideSequences$jalview_datamodel_SequenceI$Z(this.sequence, representGroup);
});

Clazz.newMeth(C$, 'copy_actionPerformed$',  function () {
this.ap.alignFrame.copy_actionPerformed$();
});

Clazz.newMeth(C$, 'cut_actionPerformed$',  function () {
this.ap.alignFrame.cut_actionPerformed$();
});

Clazz.newMeth(C$, 'changeCase$java_awt_event_ActionEvent',  function (e) {
var source=e.getSource$();
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
var startEnd=this.ap.av.getVisibleRegionBoundaries$I$I(sg.getStartRes$(), sg.getEndRes$() + 1);
var description;
var caseChange;
if (source === this.toggle ) {
description=$I$(4).getString$S("label.toggle_case");
caseChange=$I$(51).TOGGLE_CASE;
} else if (source === this.upperCase ) {
description=$I$(4).getString$S("label.to_upper_case");
caseChange=$I$(51).TO_UPPER;
} else {
description=$I$(4).getString$S("label.to_lower_case");
caseChange=$I$(51).TO_LOWER;
}var caseCommand=Clazz.new_([description, sg.getSequencesAsArray$java_util_Map(this.ap.av.getHiddenRepSequences$()), startEnd, caseChange],$I$(51,1).c$$S$jalview_datamodel_SequenceIA$java_util_List$I);
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(caseCommand);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'outputText_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cap=Clazz.new_($I$(52,1));
cap.setForInput$jalview_api_AlignmentViewPanel(null);
$I$(14,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, $I$(4,"formatMessage$S$OA",["label.alignment_output_command", Clazz.array(java.lang.Object, -1, [e.getActionCommand$()])]), 600, 500]);
var omitHidden=null;
System.out.println$S("PROMPT USER HERE");
var fileFormat=$I$(16).getInstance$().forName$S(e.getActionCommand$());
cap.setText$S(Clazz.new_($I$(53,1).c$$jalview_api_AlignmentViewPanel,[this.ap]).formatSequences$jalview_io_FileFormatI$jalview_api_AlignmentViewPanel$Z(fileFormat, this.ap, true));
});

Clazz.newMeth(C$, 'sequenceFeature_actionPerformed$',  function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg == null ) {
return;
}var seqs=Clazz.new_($I$(7,1));
var features=Clazz.new_($I$(7,1));
var gSize=sg.getSize$();
for (var i=0; i < gSize; i++) {
var start=sg.getSequenceAt$I(i).findPosition$I(sg.getStartRes$());
var end=sg.findEndRes$jalview_datamodel_SequenceI(sg.getSequenceAt$I(i));
if (start <= end) {
seqs.add$O(sg.getSequenceAt$I(i).getDatasetSequence$());
features.add$O(Clazz.new_($I$(54,1).c$$S$S$I$I$S,[null, null, start, end, null]));
}}
if (!seqs.isEmpty$()) {
Clazz.new_($I$(55,1).c$$jalview_gui_AlignmentPanel$java_util_List$java_util_List$Z,[this.ap, seqs, features, true]).showDialog$();
}});

Clazz.newMeth(C$, 'textColour_actionPerformed$',  function () {
var sg=this.getGroup$();
if (sg != null ) {
Clazz.new_($I$(56,1)).chooseColour$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceGroup(this.ap, sg);
}});

Clazz.newMeth(C$, 'editSequence_actionPerformed$',  function () {
var sg=this.ap.av.getSelectionGroup$();
var seq=this.sequence;
if (sg != null ) {
if (seq == null ) {
seq=sg.getSequenceAt$I(0);
}var dialog=Clazz.new_([seq.getSequenceAsString$I$I(sg.getStartRes$(), sg.getEndRes$() + 1), null, $I$(4).getString$S("label.edit_sequence"), null],$I$(49,1).c$$S$S$S$S);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, $I$(4).getString$S("label.edit_sequence"), ((P$.PopupMenu$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "PopupMenu$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var editCommand=Clazz.new_([$I$(4).getString$S("label.edit_sequences"), $I$(58).REPLACE, this.$finals$.dialog.getName$().replace$C$C(" ", this.b$['jalview.gui.PopupMenu'].ap.av.getGapCharacter$()), this.$finals$.sg.getSequencesAsArray$java_util_Map(this.b$['jalview.gui.PopupMenu'].ap.av.getHiddenRepSequences$()), this.$finals$.sg.getStartRes$(), this.$finals$.sg.getEndRes$() + 1, this.b$['jalview.gui.PopupMenu'].ap.av.getAlignment$()],$I$(57,1).c$$S$jalview_commands_EditCommand_Action$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI);
this.b$['jalview.gui.PopupMenu'].ap.alignFrame.addHistoryItem$jalview_commands_CommandI(editCommand);
this.b$['jalview.gui.PopupMenu'].ap.av.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.PopupMenu'].ap.av.getAlignment$().getSequences$());
});
})()
), Clazz.new_(P$.PopupMenu$43.$init$,[this, {sg:sg,dialog:dialog}])));
}});

Clazz.newMeth(C$, 'changeColour_actionPerformed$S',  function (colourSchemeName) {
var sg=this.getGroup$();
var colourScheme=$I$(59).getInstance$().getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(colourSchemeName, this.ap.av, sg, this.ap.av.getHiddenRepSequences$());
sg.setColourScheme$jalview_schemes_ColourSchemeI(colourScheme);
if (Clazz.instanceOf(colourScheme, "jalview.schemes.Blosum62ColourScheme") || Clazz.instanceOf(colourScheme, "jalview.schemes.PIDColourScheme") ) {
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(46,"calculate$java_util_List$I$I",[sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1]));
}this.refresh$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
