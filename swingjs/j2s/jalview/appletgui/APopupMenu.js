(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Menu','java.awt.MenuItem','java.awt.CheckboxMenuItem','jalview.util.MessageManager','jalview.io.FileFormats','java.util.LinkedHashMap','jalview.util.UrlLink','java.util.Collections','java.util.Arrays','java.util.TreeMap','jalview.analysis.AlignmentUtils','StringBuilder','jalview.appletgui.EditNameDialog','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'jalview.commands.ChangeCaseCommand','java.util.ArrayList','jalview.datamodel.SequenceFeature','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.bin.JalviewLite','jalview.io.AppletFormatAdapter','jalview.datamodel.SequenceI','jalview.io.SequenceAnnotationReport','jalview.appletgui.AppletJmol','jalview.io.DataSourceType','mc_view.AppletPDBViewer','jalview.schemes.JalviewColourScheme','jalview.renderer.ResidueShader','jalview.schemes.ClustalxColourScheme','jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.NucleotideColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.analysis.AAFrequency','jalview.appletgui.SliderPanel','jalview.appletgui.UserDefinedColours','jalview.schemes.PIDColourScheme','jalview.schemes.Blosum62ColourScheme','jalview.analysis.Conservation','jalview.analysis.AlignmentAnnotationUtils']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "APopupMenu", null, 'java.awt.PopupMenu', ['java.awt.event.ActionListener', 'java.awt.event.ItemListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.groupMenu=Clazz.new_($I$(1,1));
this.editGroupName=Clazz.new_($I$(2,1));
this.noColour=Clazz.new_($I$(3,1));
this.clustalColour=Clazz.new_($I$(3,1));
this.zappoColour=Clazz.new_($I$(3,1));
this.taylorColour=Clazz.new_($I$(3,1));
this.hydrophobicityColour=Clazz.new_($I$(3,1));
this.helixColour=Clazz.new_($I$(3,1));
this.strandColour=Clazz.new_($I$(3,1));
this.turnColour=Clazz.new_($I$(3,1));
this.buriedColour=Clazz.new_($I$(3,1));
this.PIDColour=Clazz.new_($I$(3,1));
this.BLOSUM62Colour=Clazz.new_($I$(3,1));
this.nucleotideColour=Clazz.new_($I$(3,1));
this.purinePyrimidineColour=Clazz.new_($I$(3,1));
this.userDefinedColour=Clazz.new_($I$(2,1));
this.abovePIDColour=Clazz.new_($I$(3,1));
this.modifyPID=Clazz.new_($I$(2,1));
this.conservationColour=Clazz.new_($I$(3,1));
this.modifyConservation=Clazz.new_($I$(2,1));
this.noColourmenuItem=Clazz.new_($I$(2,1));
this.unGroupMenuItem=Clazz.new_($I$(2,1));
this.createGroupMenuItem=Clazz.new_($I$(2,1));
this.colourMenu=Clazz.new_($I$(1,1));
this.showBoxes=Clazz.new_($I$(3,1));
this.showText=Clazz.new_($I$(3,1));
this.showColourText=Clazz.new_($I$(3,1));
this.displayNonconserved=Clazz.new_($I$(3,1));
this.seqShowAnnotationsMenu=Clazz.new_([$I$(4).getString$S("label.show_annotations")],$I$(1,1).c$$S);
this.seqHideAnnotationsMenu=Clazz.new_([$I$(4).getString$S("label.hide_annotations")],$I$(1,1).c$$S);
this.seqAddReferenceAnnotations=Clazz.new_([$I$(4).getString$S("label.add_reference_annotations")],$I$(2,1).c$$S);
this.groupShowAnnotationsMenu=Clazz.new_([$I$(4).getString$S("label.show_annotations")],$I$(1,1).c$$S);
this.groupHideAnnotationsMenu=Clazz.new_([$I$(4).getString$S("label.hide_annotations")],$I$(1,1).c$$S);
this.groupAddReferenceAnnotations=Clazz.new_([$I$(4).getString$S("label.add_reference_annotations")],$I$(2,1).c$$S);
this.editMenu=Clazz.new_([$I$(4).getString$S("action.edit")],$I$(1,1).c$$S);
this.copy=Clazz.new_([$I$(4).getString$S("action.copy")],$I$(2,1).c$$S);
this.cut=Clazz.new_([$I$(4).getString$S("action.cut")],$I$(2,1).c$$S);
this.toUpper=Clazz.new_([$I$(4).getString$S("label.to_upper_case")],$I$(2,1).c$$S);
this.toLower=Clazz.new_([$I$(4).getString$S("label.to_lower_case")],$I$(2,1).c$$S);
this.toggleCase=Clazz.new_([$I$(4).getString$S("label.toggle_case")],$I$(2,1).c$$S);
this.outputmenu=Clazz.new_($I$(1,1));
this.seqMenu=Clazz.new_($I$(1,1));
this.pdb=Clazz.new_($I$(2,1));
this.hideSeqs=Clazz.new_($I$(2,1));
this.repGroup=Clazz.new_($I$(2,1));
this.sequenceName=Clazz.new_([$I$(4).getString$S("label.edit_name_description")],$I$(2,1).c$$S);
this.sequenceFeature=Clazz.new_([$I$(4).getString$S("label.create_sequence_feature")],$I$(2,1).c$$S);
this.editSequence=Clazz.new_([$I$(4).getString$S("label.edit_sequence")],$I$(2,1).c$$S);
this.sequenceDetails=Clazz.new_([$I$(4).getString$S("label.sequence_details")],$I$(2,1).c$$S);
this.selSeqDetails=Clazz.new_([$I$(4).getString$S("label.sequence_details")],$I$(2,1).c$$S);
this.makeReferenceSeq=Clazz.new_($I$(2,1));
this.revealAll=Clazz.new_($I$(2,1));
this.revealSeq=Clazz.new_($I$(2,1));
this.revealSeq_index=-1;
this.menu1=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['revealSeq_index'],'O',['groupMenu','java.awt.Menu','editGroupName','java.awt.MenuItem','noColour','java.awt.CheckboxMenuItem','+clustalColour','+zappoColour','+taylorColour','+hydrophobicityColour','+helixColour','+strandColour','+turnColour','+buriedColour','+PIDColour','+BLOSUM62Colour','+nucleotideColour','+purinePyrimidineColour','userDefinedColour','java.awt.MenuItem','abovePIDColour','java.awt.CheckboxMenuItem','modifyPID','java.awt.MenuItem','conservationColour','java.awt.CheckboxMenuItem','modifyConservation','java.awt.MenuItem','+noColourmenuItem','ap','jalview.appletgui.AlignmentPanel','unGroupMenuItem','java.awt.MenuItem','+createGroupMenuItem','colourMenu','java.awt.Menu','showBoxes','java.awt.CheckboxMenuItem','+showText','+showColourText','+displayNonconserved','seqShowAnnotationsMenu','java.awt.Menu','+seqHideAnnotationsMenu','seqAddReferenceAnnotations','java.awt.MenuItem','groupShowAnnotationsMenu','java.awt.Menu','+groupHideAnnotationsMenu','groupAddReferenceAnnotations','java.awt.MenuItem','editMenu','java.awt.Menu','copy','java.awt.MenuItem','+cut','+toUpper','+toLower','+toggleCase','outputmenu','java.awt.Menu','+seqMenu','pdb','java.awt.MenuItem','+hideSeqs','+repGroup','+sequenceName','+sequenceFeature','+editSequence','+sequenceDetails','+selSeqDetails','+makeReferenceSeq','seq','jalview.datamodel.SequenceI','revealAll','java.awt.MenuItem','+revealSeq','menu1','java.awt.Menu']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List', function (apanel, seq, links) {
Clazz.super_(C$, this);
this.ap=apanel;
this.seq=seq;
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
for (var ff, $ff = $I$(5).getInstance$().getWritableFormats$Z(true).iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var item=Clazz.new_($I$(2,1).c$$S,[ff]);
item.addActionListener$java_awt_event_ActionListener(this);
this.outputmenu.add$java_awt_MenuItem(item);
}
p$1.buildAnnotationSubmenus.apply(this, []);
var sg=this.ap.av.getSelectionGroup$();
if (sg != null  && sg.getSize$() > 0 ) {
if (sg.isNucleotide$()) {
this.conservationColour.setEnabled$Z(false);
this.clustalColour.setEnabled$Z(false);
this.BLOSUM62Colour.setEnabled$Z(false);
this.zappoColour.setEnabled$Z(false);
this.taylorColour.setEnabled$Z(false);
this.hydrophobicityColour.setEnabled$Z(false);
this.helixColour.setEnabled$Z(false);
this.strandColour.setEnabled$Z(false);
this.turnColour.setEnabled$Z(false);
this.buriedColour.setEnabled$Z(false);
} else {
this.purinePyrimidineColour.setEnabled$Z(false);
this.nucleotideColour.setEnabled$Z(false);
}this.editGroupName.setLabel$S($I$(4,"formatMessage$S$OA",["label.name_param", Clazz.array(java.lang.Object, -1, [sg.getName$()])]));
this.showText.setState$Z(sg.getDisplayText$());
this.showColourText.setState$Z(sg.getColourText$());
this.showBoxes.setState$Z(sg.getDisplayBoxes$());
this.displayNonconserved.setState$Z(sg.getShowNonconserved$());
if (!this.ap.av.getAlignment$().getGroups$().contains$O(sg)) {
this.menu1.setLabel$S($I$(4).getString$S("action.edit_new_group"));
this.groupMenu.remove$java_awt_MenuComponent(this.unGroupMenuItem);
} else {
this.menu1.setLabel$S($I$(4).getString$S("action.edit_group"));
this.groupMenu.remove$java_awt_MenuComponent(this.createGroupMenuItem);
if (sg.cs != null ) {
this.abovePIDColour.setState$Z(sg.cs.getThreshold$() > 0);
this.conservationColour.setState$Z(sg.cs.conservationApplied$());
this.modifyPID.setEnabled$Z(this.abovePIDColour.getState$());
this.modifyConservation.setEnabled$Z(this.conservationColour.getState$());
}}this.setSelectedColour$jalview_renderer_ResidueShaderI(sg.cs);
} else {
this.remove$java_awt_MenuComponent(this.hideSeqs);
this.remove$java_awt_MenuComponent(this.groupMenu);
}if (links != null  && links.size$() > 0 ) {
this.addFeatureLinks$jalview_datamodel_SequenceI$java_util_List(seq, links);
}if (seq != null ) {
this.seqMenu.setLabel$S(seq.getName$());
if (seq === this.ap.av.getAlignment$().getSeqrep$() ) {
this.makeReferenceSeq.setLabel$S($I$(4).getString$S("action.unmark_as_reference"));
} else {
this.makeReferenceSeq.setLabel$S($I$(4).getString$S("action.set_as_reference"));
}this.repGroup.setLabel$S($I$(4,"formatMessage$S$OA",["label.represent_group_with", Clazz.array(java.lang.Object, -1, [seq.getName$()])]));
} else {
this.remove$java_awt_MenuComponent(this.seqMenu);
}if (!this.ap.av.hasHiddenRows$()) {
this.remove$java_awt_MenuComponent(this.revealAll);
this.remove$java_awt_MenuComponent(this.revealSeq);
} else {
var index=this.ap.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(seq);
if (this.ap.av.adjustForHiddenSeqs$I(index) - this.ap.av.adjustForHiddenSeqs$I(index - 1) > 1) {
this.revealSeq_index=index;
} else {
this.remove$java_awt_MenuComponent(this.revealSeq);
}}}, 1);

Clazz.newMeth(C$, 'setSelectedColour$jalview_renderer_ResidueShaderI', function (cs) {
if (cs == null  || cs.getColourScheme$() == null  ) {
this.noColour.setState$Z(true);
} else {
var name=cs.getColourScheme$().getSchemeName$();
for (var i=0; i < this.colourMenu.getItemCount$(); i++) {
var item=this.colourMenu.getItem$I(i);
if (Clazz.instanceOf(item, "java.awt.CheckboxMenuItem")) {
if (name.equals$O(item.getName$())) {
(item).setState$Z(true);
}}}
}});

Clazz.newMeth(C$, 'addFeatureLinks$jalview_datamodel_SequenceI$java_util_List', function (seq, links) {
var linkMenu=Clazz.new_([$I$(4).getString$S("action.link")],$I$(1,1).c$$S);
var linkset=Clazz.new_($I$(6,1));
for (var link, $link = links.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
var urlLink=null;
try {
urlLink=Clazz.new_($I$(7,1).c$$S,[link]);
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
System.err.println$S("Exception for URLLink '" + link + "': " + foo.getMessage$() );
continue;
} else {
throw foo;
}
}
if (!urlLink.isValid$()) {
System.err.println$S(urlLink.getInvalidMessage$());
continue;
}urlLink.createLinksFromSeq$jalview_datamodel_SequenceI$java_util_Map(seq, linkset);
}
p$1.addshowLinks$java_awt_Menu$java_util_Collection.apply(this, [linkMenu, linkset.values$()]);
if (linkMenu.getItemCount$() > 0) {
linkMenu.setEnabled$Z(true);
} else {
linkMenu.setEnabled$Z(false);
}if (seq != null ) {
this.seqMenu.add$java_awt_MenuItem(linkMenu);
} else {
this.add$java_awt_MenuItem(linkMenu);
}});

Clazz.newMeth(C$, 'addshowLinks$java_awt_Menu$java_util_Collection', function (linkMenu, linkset) {
for (var linkstrset, $linkstrset = linkset.iterator$(); $linkstrset.hasNext$()&&((linkstrset=($linkstrset.next$())),1);) {
p$1.addshowLink$java_awt_Menu$S$S.apply(this, [linkMenu, linkstrset.get$I(1), linkstrset.get$I(3)]);
}
}, p$1);

Clazz.newMeth(C$, 'buildAnnotationSubmenus', function () {
var selectedSequence=(this.seq == null  ? $I$(8).emptyList$() : $I$(9).asList$OA([this.seq]));
this.buildAnnotationTypesMenus$java_awt_Menu$java_awt_Menu$java_util_List(this.seqShowAnnotationsMenu, this.seqHideAnnotationsMenu, selectedSequence);
p$1.configureReferenceAnnotationsMenu$java_awt_MenuItem$java_util_List.apply(this, [this.seqAddReferenceAnnotations, selectedSequence]);
var selectedGroup=(this.ap.av.getSelectionGroup$() == null  ? $I$(8).emptyList$() : this.ap.av.getSelectionGroup$().getSequences$());
this.buildAnnotationTypesMenus$java_awt_Menu$java_awt_Menu$java_util_List(this.groupShowAnnotationsMenu, this.groupHideAnnotationsMenu, selectedGroup);
p$1.configureReferenceAnnotationsMenu$java_awt_MenuItem$java_util_List.apply(this, [this.groupAddReferenceAnnotations, selectedGroup]);
}, p$1);

Clazz.newMeth(C$, 'configureReferenceAnnotationsMenu$java_awt_MenuItem$java_util_List', function (menuItem, forSequences) {
menuItem.setEnabled$Z(false);
var tipEntries=Clazz.new_($I$(10,1));
var candidates=Clazz.new_($I$(6,1));
var al=this.ap.av.getAlignment$();
$I$(11).findAddableReferenceAnnotations$java_util_List$java_util_Map$java_util_Map$jalview_datamodel_AlignmentI(forSequences, tipEntries, candidates, al);
if (!candidates.isEmpty$()) {
var tooltip=Clazz.new_($I$(12,1).c$$I,[64]);
tooltip.append$S($I$(4).getString$S("label.add_annotations_for"));
menuItem.setEnabled$Z(true);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.APopupMenu$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "APopupMenu$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.APopupMenu'].addReferenceAnnotations_actionPerformed$java_util_Map.apply(this.b$['jalview.appletgui.APopupMenu'], [this.$finals$.candidates]);
});
})()
), Clazz.new_(P$.APopupMenu$1.$init$,[this, {candidates:candidates}])));
}}, p$1);

Clazz.newMeth(C$, 'addReferenceAnnotations_actionPerformed$java_util_Map', function (candidates) {
var selectionGroup=this.ap.av.getSelectionGroup$();
var alignment=this.ap.getAlignment$();
$I$(11).addReferenceAnnotations$java_util_Map$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup(candidates, alignment, selectionGroup);
this.refresh$();
});

Clazz.newMeth(C$, 'addshowLink$java_awt_Menu$S$S', function (linkMenu, target, url) {
p$1.addshowLink$java_awt_Menu$S$S$S.apply(this, [linkMenu, target, target, url]);
}, p$1);

Clazz.newMeth(C$, 'addshowLink$java_awt_Menu$S$S$S', function (linkMenu, target, label, url) {
var item=Clazz.new_($I$(2,1).c$$S,[label]);
item.addActionListener$java_awt_event_ActionListener(((P$.APopupMenu$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "APopupMenu$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.APopupMenu'].ap.alignFrame.showURL$S$S(this.$finals$.url, this.$finals$.target);
});
})()
), Clazz.new_(P$.APopupMenu$2.$init$,[this, {target:target,url:url}])));
linkMenu.add$java_awt_MenuItem(item);
}, p$1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (evt) {
var source=evt.getSource$();
if (source === this.noColour ) {
this.noColourmenuItem_actionPerformed$();
} else if (source === this.clustalColour ) {
this.clustalColour_actionPerformed$();
} else if (source === this.BLOSUM62Colour ) {
this.BLOSUM62Colour_actionPerformed$();
} else if (evt.getSource$() === this.PIDColour ) {
this.PIDColour_actionPerformed$();
} else if (source === this.zappoColour ) {
this.zappoColour_actionPerformed$();
} else if (source === this.taylorColour ) {
this.taylorColour_actionPerformed$();
} else if (source === this.hydrophobicityColour ) {
this.hydrophobicityColour_actionPerformed$();
} else if (source === this.helixColour ) {
this.helixColour_actionPerformed$();
} else if (source === this.strandColour ) {
this.strandColour_actionPerformed$();
} else if (source === this.turnColour ) {
this.turnColour_actionPerformed$();
} else if (source === this.buriedColour ) {
this.buriedColour_actionPerformed$();
} else if (source === this.nucleotideColour ) {
this.nucleotideMenuItem_actionPerformed$();
} else if (source === this.purinePyrimidineColour ) {
this.purinePyrimidineColour_actionPerformed$();
} else if (source === this.abovePIDColour ) {
this.abovePIDColour_itemStateChanged$();
} else if (source === this.conservationColour ) {
this.conservationMenuItem_itemStateChanged$();
} else if (source === this.showColourText ) {
this.showColourText_itemStateChanged$();
} else if (source === this.showText ) {
this.showText_itemStateChanged$();
} else if (source === this.showBoxes ) {
this.showBoxes_itemStateChanged$();
} else if (source === this.displayNonconserved ) {
this.showNonconserved_itemStateChanged$();
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
var source=evt.getSource$();
if (source === this.userDefinedColour ) {
this.userDefinedColour_actionPerformed$();
} else if (source === this.modifyConservation ) {
this.conservationMenuItem_itemStateChanged$();
} else if (source === this.modifyPID ) {
this.abovePIDColour_itemStateChanged$();
} else if (source === this.unGroupMenuItem ) {
this.unGroupMenuItem_actionPerformed$();
} else if (source === this.createGroupMenuItem ) {
this.createGroupMenuItem_actionPerformed$();
} else if (source === this.sequenceName ) {
this.editName$();
} else if (source === this.makeReferenceSeq ) {
this.makeReferenceSeq_actionPerformed$();
} else if (source === this.sequenceDetails ) {
this.showSequenceDetails$();
} else if (source === this.selSeqDetails ) {
this.showSequenceSelectionDetails$();
} else if (source === this.pdb ) {
this.addPDB$();
} else if (source === this.hideSeqs ) {
this.hideSequences$Z(false);
} else if (source === this.repGroup ) {
this.hideSequences$Z(true);
} else if (source === this.revealSeq ) {
this.ap.av.showSequence$I(this.revealSeq_index);
} else if (source === this.revealAll ) {
this.ap.av.showAllHiddenSeqs$();
} else if (source === this.editGroupName ) {
var dialog=Clazz.new_([this.getGroup$().getName$(), this.getGroup$().getDescription$(), "       Group Name", "Group Description", this.ap.alignFrame, "Edit Group Name / Description", 500, 100, true],$I$(13,1).c$$S$S$S$S$java_awt_Frame$S$I$I$Z);
if (dialog.accept) {
this.getGroup$().setName$S(dialog.getName$().replace$C$C(" ", "_"));
this.getGroup$().setDescription$S(dialog.getDescription$());
}} else if (source === this.copy ) {
this.ap.alignFrame.copy_actionPerformed$();
} else if (source === this.cut ) {
this.ap.alignFrame.cut_actionPerformed$();
} else if (source === this.editSequence ) {
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
if (this.seq == null ) {
this.seq=sg.getSequenceAt$I(0);
}var dialog=Clazz.new_([this.seq.getSequenceAsString$I$I(sg.getStartRes$(), sg.getEndRes$() + 1), null, "Edit Sequence ", null, this.ap.alignFrame, "Edit Sequence", 500, 100, true],$I$(13,1).c$$S$S$S$S$java_awt_Frame$S$I$I$Z);
if (dialog.accept) {
var editCommand=Clazz.new_([$I$(4).getString$S("label.edit_sequences"), $I$(15).REPLACE, dialog.getName$().replace$C$C(" ", this.ap.av.getGapCharacter$()), sg.getSequencesAsArray$java_util_Map(this.ap.av.getHiddenRepSequences$()), sg.getStartRes$(), sg.getEndRes$() + 1, this.ap.av.getAlignment$()],$I$(14,1).c$$S$jalview_commands_EditCommand_Action$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI);
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(editCommand);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}}} else if (source === this.toUpper  || source === this.toLower   || source === this.toggleCase  ) {
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
var startEnd=this.ap.av.getVisibleRegionBoundaries$I$I(sg.getStartRes$(), sg.getEndRes$() + 1);
var description;
var caseChange;
if (source === this.toggleCase ) {
description="Toggle Case";
caseChange=$I$(16).TOGGLE_CASE;
} else if (source === this.toUpper ) {
description="To Upper Case";
caseChange=$I$(16).TO_UPPER;
} else {
description="To Lower Case";
caseChange=$I$(16).TO_LOWER;
}var caseCommand=Clazz.new_([description, sg.getSequencesAsArray$java_util_Map(this.ap.av.getHiddenRepSequences$()), startEnd, caseChange],$I$(16,1).c$$S$jalview_datamodel_SequenceIA$java_util_List$I);
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(caseCommand);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}} else if (source === this.sequenceFeature ) {
var sg=this.ap.av.getSelectionGroup$();
if (sg == null ) {
return;
}var gSize=sg.getSize$();
var seqs=Clazz.new_($I$(17,1));
var features=Clazz.new_($I$(17,1));
for (var i=0; i < gSize; i++) {
var start=sg.getSequenceAt$I(i).findPosition$I(sg.getStartRes$());
var end=sg.findEndRes$jalview_datamodel_SequenceI(sg.getSequenceAt$I(i));
if (start <= end) {
seqs.add$O(sg.getSequenceAt$I(i));
features.add$O(Clazz.new_($I$(18,1).c$$S$S$I$I$S,[null, null, start, end, "Jalview"]));
}}
if (!seqs.isEmpty$()) {
if (this.ap.seqPanel.seqCanvas.getFeatureRenderer$().amendFeatures$java_util_List$java_util_List$Z$jalview_appletgui_AlignmentPanel(seqs, features, true, this.ap)) {
this.ap.alignFrame.sequenceFeatures.setState$Z(true);
this.ap.av.setShowSequenceFeatures$Z(true);
this.ap.av.setSearchResults$jalview_datamodel_SearchResultsI(null);
this.ap.repaint$();
}}} else {
this.outputText$java_awt_event_ActionEvent(evt);
}});

Clazz.newMeth(C$, 'outputText$java_awt_event_ActionEvent', function (e) {
var cap=Clazz.new_($I$(19,1).c$$Z$jalview_appletgui_AlignFrame,[true, this.ap.alignFrame]);
var frame=Clazz.new_($I$(20,1));
frame.add$java_awt_Component(cap);
$I$(21,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(4,"formatMessage$S$OA",["label.selection_output_command", Clazz.array(java.lang.Object, -1, [e.getActionCommand$()])]), 600, 500]);
var fileFormat=$I$(5).getInstance$().forName$S(e.getActionCommand$());
cap.setText$S(Clazz.new_($I$(22,1)).formatSequences$jalview_io_FileFormatI$Z$jalview_api_AlignmentViewPanel$Z(fileFormat, this.ap.av.getShowJVSuffix$(), this.ap, true));
});

Clazz.newMeth(C$, 'showSequenceSelectionDetails$', function () {
this.createSequenceDetailsReport$jalview_datamodel_SequenceIA(this.ap.av.getSequenceSelection$());
});

Clazz.newMeth(C$, 'showSequenceDetails$', function () {
this.createSequenceDetailsReport$jalview_datamodel_SequenceIA(Clazz.array($I$(23), -1, [this.seq]));
});

Clazz.newMeth(C$, 'createSequenceDetailsReport$jalview_datamodel_SequenceIA', function (sequences) {
var cap=Clazz.new_($I$(19,1).c$$Z$jalview_appletgui_AlignFrame,[false, this.ap.alignFrame]);
var contents=Clazz.new_($I$(12,1).c$$I,[128]);
for (var seq, $seq = 0, $$seq = sequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
contents.append$S($I$(4,"formatMessage$S$OA",["label.annotation_for_displayid", Clazz.array(java.lang.Object, -1, [seq.getDisplayId$Z(true)])]));
Clazz.new_($I$(24,1).c$$S,[null]).createSequenceAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel(contents, seq, true, true, this.ap.seqPanel.seqCanvas.fr);
contents.append$S("</p>");
}
var frame=Clazz.new_($I$(20,1));
frame.add$java_awt_Component(cap);
$I$(21,"addFrame$java_awt_Frame$S$I$I",[frame, "Sequence Details for " + (sequences.length == 1 ? sequences[0].getDisplayId$Z(true) : "Selection"), 600, 500]);
cap.setText$S($I$(4,"formatMessage$S$OA",["label.html_content", Clazz.array(java.lang.Object, -1, [contents.toString()])]));
});

Clazz.newMeth(C$, 'editName$', function () {
var dialog=Clazz.new_([this.seq.getName$(), this.seq.getDescription$(), "       Sequence Name", "Sequence Description", this.ap.alignFrame, "Edit Sequence Name / Description", 500, 100, true],$I$(13,1).c$$S$S$S$S$java_awt_Frame$S$I$I$Z);
if (dialog.accept) {
this.seq.setName$S(dialog.getName$());
this.seq.setDescription$S(dialog.getDescription$());
this.ap.paintAlignment$Z$Z(false, false);
}});

Clazz.newMeth(C$, 'addPDB$', function () {
var pdbs=this.seq.getAllPDBEntries$();
if (pdbs != null  && !pdbs.isEmpty$() ) {
var entry=pdbs.firstElement$();
if (this.ap.av.applet.jmolAvailable) {
Clazz.new_([entry, Clazz.array($I$(23), -1, [this.seq]), null, this.ap, $I$(26).URL],$I$(25,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType);
} else {
Clazz.new_([entry, Clazz.array($I$(23), -1, [this.seq]), null, this.ap, $I$(26).URL],$I$(27,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType);
}} else {
var cap=Clazz.new_($I$(19,1).c$$Z$jalview_appletgui_AlignFrame,[true, this.ap.alignFrame]);
cap.setText$S($I$(4).getString$S("label.paste_pdb_file"));
cap.setPDBImport$jalview_datamodel_SequenceI(this.seq);
var frame=Clazz.new_($I$(20,1));
frame.add$java_awt_Component(cap);
$I$(21,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(4,"formatMessage$S$OA",["label.paste_pdb_file_for_sequence", Clazz.array(java.lang.Object, -1, [this.seq.getName$()])]), 400, 300]);
}});

Clazz.newMeth(C$, 'jbInit', function () {
this.groupMenu.setLabel$S($I$(4).getString$S("label.selection"));
this.sequenceFeature.addActionListener$java_awt_event_ActionListener(this);
this.editGroupName.addActionListener$java_awt_event_ActionListener(this);
this.unGroupMenuItem.setLabel$S($I$(4).getString$S("action.remove_group"));
this.unGroupMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.createGroupMenuItem.setLabel$S($I$(4).getString$S("action.create_group"));
this.createGroupMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.modifyPID.setEnabled$Z(this.abovePIDColour.getState$());
this.modifyConservation.setEnabled$Z(this.conservationColour.getState$());
this.colourMenu.setLabel$S($I$(4).getString$S("label.group_colour"));
this.showBoxes.setLabel$S($I$(4).getString$S("action.boxes"));
this.showBoxes.setState$Z(true);
this.showBoxes.addItemListener$java_awt_event_ItemListener(this);
this.sequenceName.addActionListener$java_awt_event_ActionListener(this);
this.sequenceDetails.addActionListener$java_awt_event_ActionListener(this);
this.selSeqDetails.addActionListener$java_awt_event_ActionListener(this);
this.displayNonconserved.setLabel$S($I$(4).getString$S("label.show_non_conserved"));
this.displayNonconserved.setState$Z(false);
this.displayNonconserved.addItemListener$java_awt_event_ItemListener(this);
this.showText.setLabel$S($I$(4).getString$S("action.text"));
this.showText.addItemListener$java_awt_event_ItemListener(this);
this.showColourText.setLabel$S($I$(4).getString$S("label.colour_text"));
this.showColourText.addItemListener$java_awt_event_ItemListener(this);
this.outputmenu.setLabel$S($I$(4).getString$S("label.out_to_textbox"));
this.seqMenu.setLabel$S($I$(4).getString$S("label.sequence"));
this.pdb.setLabel$S($I$(4).getString$S("label.view_pdb_structure"));
this.hideSeqs.setLabel$S($I$(4).getString$S("action.hide_sequences"));
this.repGroup.setLabel$S($I$(4,"formatMessage$S$OA",["label.represent_group_with", Clazz.array(java.lang.Object, -1, [""])]));
this.revealAll.setLabel$S($I$(4).getString$S("action.reveal_all"));
this.revealSeq.setLabel$S($I$(4).getString$S("action.reveal_sequences"));
this.menu1.setLabel$S($I$(4).getString$S("label.group:"));
this.add$java_awt_MenuItem(this.groupMenu);
this.add$java_awt_MenuItem(this.seqMenu);
this.add$java_awt_MenuItem(this.hideSeqs);
this.add$java_awt_MenuItem(this.revealSeq);
this.add$java_awt_MenuItem(this.revealAll);
this.groupMenu.add$java_awt_MenuItem(this.groupShowAnnotationsMenu);
this.groupMenu.add$java_awt_MenuItem(this.groupHideAnnotationsMenu);
this.groupMenu.add$java_awt_MenuItem(this.groupAddReferenceAnnotations);
this.groupMenu.add$java_awt_MenuItem(this.editMenu);
this.groupMenu.add$java_awt_MenuItem(this.outputmenu);
this.groupMenu.add$java_awt_MenuItem(this.sequenceFeature);
this.groupMenu.add$java_awt_MenuItem(this.createGroupMenuItem);
this.groupMenu.add$java_awt_MenuItem(this.unGroupMenuItem);
this.groupMenu.add$java_awt_MenuItem(this.menu1);
this.colourMenu.add$java_awt_MenuItem(this.noColour);
this.colourMenu.add$java_awt_MenuItem(this.clustalColour);
this.colourMenu.add$java_awt_MenuItem(this.BLOSUM62Colour);
this.colourMenu.add$java_awt_MenuItem(this.PIDColour);
this.colourMenu.add$java_awt_MenuItem(this.zappoColour);
this.colourMenu.add$java_awt_MenuItem(this.taylorColour);
this.colourMenu.add$java_awt_MenuItem(this.hydrophobicityColour);
this.colourMenu.add$java_awt_MenuItem(this.helixColour);
this.colourMenu.add$java_awt_MenuItem(this.strandColour);
this.colourMenu.add$java_awt_MenuItem(this.turnColour);
this.colourMenu.add$java_awt_MenuItem(this.buriedColour);
this.colourMenu.add$java_awt_MenuItem(this.nucleotideColour);
this.colourMenu.add$java_awt_MenuItem(this.purinePyrimidineColour);
this.colourMenu.add$java_awt_MenuItem(this.userDefinedColour);
this.colourMenu.addSeparator$();
this.colourMenu.add$java_awt_MenuItem(this.conservationColour);
this.colourMenu.add$java_awt_MenuItem(this.modifyConservation);
this.colourMenu.add$java_awt_MenuItem(this.abovePIDColour);
this.colourMenu.add$java_awt_MenuItem(this.modifyPID);
this.noColour.setLabel$S($I$(4).getString$S("label.none"));
this.noColour.addItemListener$java_awt_event_ItemListener(this);
this.clustalColour.setLabel$S($I$(4).getString$S("label.colourScheme_clustal"));
this.clustalColour.setName$S($I$(28).Clustal.toString());
this.clustalColour.addItemListener$java_awt_event_ItemListener(this);
this.BLOSUM62Colour.setLabel$S($I$(4).getString$S("label.colourScheme_blosum62"));
this.BLOSUM62Colour.setName$S($I$(28).Blosum62.toString());
this.BLOSUM62Colour.addItemListener$java_awt_event_ItemListener(this);
this.PIDColour.setLabel$S($I$(4).getString$S("label.colourScheme_%_identity"));
this.PIDColour.setName$S($I$(28).PID.toString());
this.PIDColour.addItemListener$java_awt_event_ItemListener(this);
this.zappoColour.setLabel$S($I$(4).getString$S("label.colourScheme_zappo"));
this.zappoColour.setName$S($I$(28).Zappo.toString());
this.zappoColour.addItemListener$java_awt_event_ItemListener(this);
this.taylorColour.setLabel$S($I$(4).getString$S("label.colourScheme_taylor"));
this.taylorColour.setName$S($I$(28).Taylor.toString());
this.taylorColour.addItemListener$java_awt_event_ItemListener(this);
this.hydrophobicityColour.setLabel$S($I$(4).getString$S("label.colourScheme_hydrophobic"));
this.hydrophobicityColour.setName$S($I$(28).Hydrophobic.toString());
this.hydrophobicityColour.addItemListener$java_awt_event_ItemListener(this);
this.helixColour.setLabel$S($I$(4).getString$S("label.colourScheme_helix_propensity"));
this.helixColour.setName$S($I$(28).Helix.toString());
this.helixColour.addItemListener$java_awt_event_ItemListener(this);
this.strandColour.setLabel$S($I$(4).getString$S("label.colourScheme_strand_propensity"));
this.strandColour.setName$S($I$(28).Strand.toString());
this.strandColour.addItemListener$java_awt_event_ItemListener(this);
this.turnColour.setLabel$S($I$(4).getString$S("label.colourScheme_turn_propensity"));
this.turnColour.setName$S($I$(28).Turn.toString());
this.turnColour.addItemListener$java_awt_event_ItemListener(this);
this.buriedColour.setLabel$S($I$(4).getString$S("label.colourScheme_buried_index"));
this.buriedColour.setName$S($I$(28).Buried.toString());
this.buriedColour.addItemListener$java_awt_event_ItemListener(this);
this.nucleotideColour.setLabel$S($I$(4).getString$S("label.colourScheme_nucleotide"));
this.nucleotideColour.setName$S($I$(28).Nucleotide.toString());
this.nucleotideColour.addItemListener$java_awt_event_ItemListener(this);
this.purinePyrimidineColour.setLabel$S($I$(4).getString$S("label.colourScheme_purine/pyrimidine"));
this.purinePyrimidineColour.setName$S($I$(28).PurinePyrimidine.toString());
this.purinePyrimidineColour.addItemListener$java_awt_event_ItemListener(this);
this.userDefinedColour.setLabel$S($I$(4).getString$S("action.user_defined"));
this.userDefinedColour.addActionListener$java_awt_event_ActionListener(this);
this.abovePIDColour.setLabel$S($I$(4).getString$S("label.above_identity_threshold"));
this.abovePIDColour.addItemListener$java_awt_event_ItemListener(this);
this.modifyPID.setLabel$S($I$(4).getString$S("label.modify_identity_threshold"));
this.modifyPID.addActionListener$java_awt_event_ActionListener(this);
this.conservationColour.setLabel$S($I$(4).getString$S("action.by_conservation"));
this.conservationColour.addItemListener$java_awt_event_ItemListener(this);
this.modifyConservation.setLabel$S($I$(4).getString$S("label.modify_conservation_threshold"));
this.modifyConservation.addActionListener$java_awt_event_ActionListener(this);
this.PIDColour.addActionListener$java_awt_event_ActionListener(this);
this.BLOSUM62Colour.addActionListener$java_awt_event_ActionListener(this);
this.editMenu.add$java_awt_MenuItem(this.copy);
this.copy.addActionListener$java_awt_event_ActionListener(this);
this.editMenu.add$java_awt_MenuItem(this.cut);
this.cut.addActionListener$java_awt_event_ActionListener(this);
this.editMenu.add$java_awt_MenuItem(this.editSequence);
this.editSequence.addActionListener$java_awt_event_ActionListener(this);
this.editMenu.add$java_awt_MenuItem(this.toUpper);
this.toUpper.addActionListener$java_awt_event_ActionListener(this);
this.editMenu.add$java_awt_MenuItem(this.toLower);
this.toLower.addActionListener$java_awt_event_ActionListener(this);
this.editMenu.add$java_awt_MenuItem(this.toggleCase);
this.seqMenu.add$java_awt_MenuItem(this.seqShowAnnotationsMenu);
this.seqMenu.add$java_awt_MenuItem(this.seqHideAnnotationsMenu);
this.seqMenu.add$java_awt_MenuItem(this.seqAddReferenceAnnotations);
this.seqMenu.add$java_awt_MenuItem(this.sequenceName);
this.seqMenu.add$java_awt_MenuItem(this.makeReferenceSeq);
if (!this.ap.av.applet.useXtrnalSviewer) {
this.seqMenu.add$java_awt_MenuItem(this.pdb);
}this.seqMenu.add$java_awt_MenuItem(this.repGroup);
this.menu1.add$java_awt_MenuItem(this.editGroupName);
this.menu1.add$java_awt_MenuItem(this.colourMenu);
this.menu1.add$java_awt_MenuItem(this.showBoxes);
this.menu1.add$java_awt_MenuItem(this.showText);
this.menu1.add$java_awt_MenuItem(this.showColourText);
this.menu1.add$java_awt_MenuItem(this.displayNonconserved);
this.toggleCase.addActionListener$java_awt_event_ActionListener(this);
this.pdb.addActionListener$java_awt_event_ActionListener(this);
this.hideSeqs.addActionListener$java_awt_event_ActionListener(this);
this.repGroup.addActionListener$java_awt_event_ActionListener(this);
this.revealAll.addActionListener$java_awt_event_ActionListener(this);
this.revealSeq.addActionListener$java_awt_event_ActionListener(this);
this.makeReferenceSeq.addActionListener$java_awt_event_ActionListener(this);
}, p$1);

Clazz.newMeth(C$, 'refresh$', function () {
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'clustalColour_actionPerformed$', function () {
var sg=this.getGroup$();
sg.cs=Clazz.new_([Clazz.new_([sg, this.ap.av.getHiddenRepSequences$()],$I$(30,1).c$$jalview_datamodel_AnnotatedCollectionI$java_util_Map)],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'zappoColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(31,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'taylorColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(32,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'hydrophobicityColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(33,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'helixColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(34,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'strandColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(35,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'turnColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(36,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'buriedColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(37,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'nucleotideMenuItem_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(38,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'purinePyrimidineColour_actionPerformed$', function () {
this.getGroup$().cs=Clazz.new_([Clazz.new_($I$(39,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
this.refresh$();
});

Clazz.newMeth(C$, 'abovePIDColour_itemStateChanged$', function () {
var sg=this.getGroup$();
if (sg.cs == null ) {
return;
}if (this.abovePIDColour.getState$()) {
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(40,"calculate$java_util_List$I$I",[sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), 0, this.ap.av.getAlignment$().getWidth$()]));
var threshold=$I$(41,"setPIDSliderSource$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, sg.cs, this.getGroup$().getName$()]);
sg.cs.setThreshold$I$Z(threshold, this.ap.av.isIgnoreGapsConsensus$());
$I$(41).showPIDSlider$();
} else {
$I$(41).hidePIDSlider$();
sg.cs.setThreshold$I$Z(0, this.ap.av.isIgnoreGapsConsensus$());
}this.modifyPID.setEnabled$Z(this.abovePIDColour.getState$());
this.refresh$();
});

Clazz.newMeth(C$, 'userDefinedColour_actionPerformed$', function () {
Clazz.new_([this.ap, this.getGroup$()],$I$(42,1).c$$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceGroup);
});

Clazz.newMeth(C$, 'PIDColour_actionPerformed$', function () {
var sg=this.getGroup$();
sg.cs=Clazz.new_([Clazz.new_($I$(43,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(40,"calculate$java_util_List$I$I",[sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), 0, this.ap.av.getAlignment$().getWidth$()]));
this.refresh$();
});

Clazz.newMeth(C$, 'BLOSUM62Colour_actionPerformed$', function () {
var sg=this.getGroup$();
sg.cs=Clazz.new_([Clazz.new_($I$(44,1))],$I$(29,1).c$$jalview_schemes_ColourSchemeI);
sg.cs.setConsensus$jalview_datamodel_ProfilesI($I$(40,"calculate$java_util_List$I$I",[sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), 0, this.ap.av.getAlignment$().getWidth$()]));
this.refresh$();
});

Clazz.newMeth(C$, 'noColourmenuItem_actionPerformed$', function () {
this.getGroup$().cs=null;
this.refresh$();
});

Clazz.newMeth(C$, 'conservationMenuItem_itemStateChanged$', function () {
var sg=this.getGroup$();
if (sg.cs == null ) {
return;
}if (this.conservationColour.getState$()) {
var conservation=$I$(45,"calculateConservation$S$java_util_List$I$I$Z$I$Z",["Group", sg.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), 0, this.ap.av.getAlignment$().getWidth$(), false, this.ap.av.getConsPercGaps$(), false]);
sg.getGroupColourScheme$().setConservation$jalview_analysis_Conservation(conservation);
$I$(41,"setConservationSlider$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, sg.cs, sg.getName$()]);
$I$(41).showConservationSlider$();
} else {
$I$(41).hideConservationSlider$();
sg.cs.setConservation$jalview_analysis_Conservation(null);
}this.modifyConservation.setEnabled$Z(this.conservationColour.getState$());
this.refresh$();
});

Clazz.newMeth(C$, 'getGroup$', function () {
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
this.ap.av.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(sg);
}return sg;
});

Clazz.newMeth(C$, 'unGroupMenuItem_actionPerformed$', function () {
var sg=this.ap.av.getSelectionGroup$();
this.ap.av.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(sg);
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'createGroupMenuItem_actionPerformed$', function () {
this.getGroup$();
this.refresh$();
});

Clazz.newMeth(C$, 'showColourText_itemStateChanged$', function () {
this.getGroup$().setColourText$Z(this.showColourText.getState$());
this.refresh$();
});

Clazz.newMeth(C$, 'showText_itemStateChanged$', function () {
this.getGroup$().setDisplayText$Z(this.showText.getState$());
this.refresh$();
});

Clazz.newMeth(C$, 'makeReferenceSeq_actionPerformed$', function () {
if (!this.ap.av.getAlignment$().hasSeqrep$()) {
this.ap.av.setDisplayReferenceSeq$Z(true);
this.ap.av.setColourByReferenceSeq$Z(true);
this.ap.av.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(this.seq);
} else {
if (this.ap.av.getAlignment$().getSeqrep$() === this.seq ) {
this.ap.av.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(null);
} else {
this.ap.av.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(this.seq);
}}this.refresh$();
});

Clazz.newMeth(C$, 'showNonconserved_itemStateChanged$', function () {
this.getGroup$().setShowNonconserved$Z(this.displayNonconserved.getState$());
this.refresh$();
});

Clazz.newMeth(C$, 'showBoxes_itemStateChanged$', function () {
this.getGroup$().setDisplayBoxes$Z(this.showBoxes.getState$());
this.refresh$();
});

Clazz.newMeth(C$, 'hideSequences$Z', function (representGroup) {
this.ap.av.hideSequences$jalview_datamodel_SequenceI$Z(this.seq, representGroup);
});

Clazz.newMeth(C$, 'buildAnnotationTypesMenus$java_awt_Menu$java_awt_Menu$java_util_List', function (showMenu, hideMenu, forSequences) {
showMenu.removeAll$();
hideMenu.removeAll$();
var all=$I$(9,"asList$OA",[Clazz.array(String, -1, [$I$(4).getString$S("label.all")])]);
this.addAnnotationTypeToShowHide$java_awt_Menu$java_util_List$S$java_util_List$Z$Z(showMenu, forSequences, "", all, true, true);
this.addAnnotationTypeToShowHide$java_awt_Menu$java_util_List$S$java_util_List$Z$Z(hideMenu, forSequences, "", all, true, false);
showMenu.addSeparator$();
hideMenu.addSeparator$();
var annotations=this.ap.getAlignment$().getAlignmentAnnotation$();
var shownTypes=Clazz.new_($I$(6,1));
var hiddenTypes=Clazz.new_($I$(6,1));
$I$(46,"getShownHiddenTypes$java_util_Map$java_util_Map$java_util_List$java_util_List",[shownTypes, hiddenTypes, $I$(46).asList$jalview_datamodel_AlignmentAnnotationA(annotations), forSequences]);
for (var calcId, $calcId = hiddenTypes.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
for (var type, $type = hiddenTypes.get$O(calcId).iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
this.addAnnotationTypeToShowHide$java_awt_Menu$java_util_List$S$java_util_List$Z$Z(showMenu, forSequences, calcId, type, false, true);
}
}
showMenu.setEnabled$Z(!hiddenTypes.isEmpty$());
for (var calcId, $calcId = shownTypes.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
for (var type, $type = shownTypes.get$O(calcId).iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
this.addAnnotationTypeToShowHide$java_awt_Menu$java_util_List$S$java_util_List$Z$Z(hideMenu, forSequences, calcId, type, false, false);
}
}
hideMenu.setEnabled$Z(!shownTypes.isEmpty$());
});

Clazz.newMeth(C$, 'addAnnotationTypeToShowHide$java_awt_Menu$java_util_List$S$java_util_List$Z$Z', function (showOrHideMenu, forSequences, calcId, types, allTypes, actionIsShow) {
var label=types.toString();
label=label.substring$I$I(1, label.length$() - 1);
var item=Clazz.new_($I$(2,1).c$$S,[label]);
item.addActionListener$java_awt_event_ActionListener(((P$.APopupMenu$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "APopupMenu$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(11,"showOrHideSequenceAnnotations$jalview_datamodel_AlignmentI$java_util_Collection$java_util_List$Z$Z",[this.b$['jalview.appletgui.APopupMenu'].ap.getAlignment$(), this.$finals$.types, this.$finals$.forSequences, this.$finals$.allTypes, this.$finals$.actionIsShow]);
this.b$['jalview.appletgui.APopupMenu'].refresh$.apply(this.b$['jalview.appletgui.APopupMenu'], []);
});
})()
), Clazz.new_(P$.APopupMenu$3.$init$,[this, {allTypes:allTypes,types:types,actionIsShow:actionIsShow,forSequences:forSequences}])));
showOrHideMenu.add$java_awt_MenuItem(item);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:43 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
