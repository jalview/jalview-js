(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTextField','javax.swing.JTextArea','javax.swing.JSpinner','java.awt.Dimension','javax.swing.JLabel','jalview.util.MessageManager','jalview.schemes.FeatureColour','jalview.gui.JalviewColourChooser','jalview.gui.Desktop','jalview.gui.FeatureEditor','jalview.gui.FeatureTypeSettings','java.awt.event.MouseAdapter','java.awt.GridLayout','javax.swing.JComboBox','java.util.ArrayList','jalview.datamodel.SearchResults','jalview.util.ColorUtils','java.awt.Font','java.awt.Color','jalview.gui.JvSwingUtils','javax.swing.JScrollPane','jalview.gui.JvOptionPane','jalview.datamodel.SequenceFeature','jalview.io.FeaturesFile','jalview.gui.FeatureSettings']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureEditor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['forCreate'],'I',['featureIndex'],'O',['sequences','java.util.List','+features','oldColour','jalview.api.FeatureColourI','+featureColour','fr','jalview.gui.FeatureRenderer','ap','jalview.gui.AlignmentPanel','name','javax.swing.JTextField','+group','description','javax.swing.JTextArea','start','javax.swing.JSpinner','+end','mainPanel','javax.swing.JPanel']]
,['S',['lastFeatureAdded','lastFeatureGroupAdded']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$java_util_List$java_util_List$Z',  function (alignPanel, seqs, feats, create) {
;C$.$init$.apply(this);
this.ap=alignPanel;
this.fr=alignPanel.getSeqPanel$().seqCanvas.fr;
this.sequences=seqs;
this.features=feats;
this.forCreate=create;
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.featureIndex=0;
this.mainPanel=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
this.name=Clazz.new_($I$(3,1).c$$I,[25]);
this.name.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.FeatureEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].warnIfTypeHidden$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.b$['jalview.gui.FeatureEditor'].name.getText$()]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].warnIfTypeHidden$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.b$['jalview.gui.FeatureEditor'].name.getText$()]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].warnIfTypeHidden$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.b$['jalview.gui.FeatureEditor'].name.getText$()]);
});
})()
), Clazz.new_(P$.FeatureEditor$1.$init$,[this, null])));
this.group=Clazz.new_($I$(3,1).c$$I,[25]);
this.group.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.FeatureEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].warnIfGroupHidden$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.b$['jalview.gui.FeatureEditor'].group.getText$()]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].warnIfGroupHidden$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.b$['jalview.gui.FeatureEditor'].group.getText$()]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].warnIfGroupHidden$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.b$['jalview.gui.FeatureEditor'].group.getText$()]);
});
})()
), Clazz.new_(P$.FeatureEditor$2.$init$,[this, null])));
this.description=Clazz.new_($I$(4,1).c$$I$I,[3, 25]);
this.start=Clazz.new_($I$(5,1));
this.end=Clazz.new_($I$(5,1));
this.start.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[80, 20]));
this.end.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[80, 20]));
this.start.addChangeListener$javax_swing_event_ChangeListener(((P$.FeatureEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var startVal=this.b$['jalview.gui.FeatureEditor'].start.getValue$();
(this.b$['jalview.gui.FeatureEditor'].end.getModel$()).setMinimum$Comparable(startVal);
});
})()
), Clazz.new_(P$.FeatureEditor$3.$init$,[this, null])));
this.end.addChangeListener$javax_swing_event_ChangeListener(((P$.FeatureEditor$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var endVal=this.b$['jalview.gui.FeatureEditor'].end.getValue$();
(this.b$['jalview.gui.FeatureEditor'].start.getModel$()).setMaximum$Comparable(endVal);
});
})()
), Clazz.new_(P$.FeatureEditor$4.$init$,[this, null])));
var colour=Clazz.new_($I$(7,1));
colour.setOpaque$Z(true);
colour.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[30, 16]));
colour.addMouseListener$java_awt_event_MouseListener(((P$.FeatureEditor$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
if (this.b$['jalview.gui.FeatureEditor'].featureColour.isSimpleColour$()) {
var title=$I$(8).getString$S("label.select_feature_colour");
var listener=((P$.FeatureEditor$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color',  function (c) {
this.b$['jalview.gui.FeatureEditor'].featureColour=Clazz.new_($I$(9,1).c$$java_awt_Color,[c]);
this.b$['jalview.gui.FeatureEditor'].updateColourButton$javax_swing_JPanel$javax_swing_JLabel$jalview_api_FeatureColourI.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.$finals$.colour, this.b$['jalview.gui.FeatureEditor'].featureColour]);
});
})()
), Clazz.new_(P$.FeatureEditor$5$1.$init$,[this, {colour:this.$finals$.colour}]));
$I$(10,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[$I$(11).getDesktop$(), title, this.b$['jalview.gui.FeatureEditor'].featureColour.getColour$(), listener]);
} else {
var ft=this.b$['jalview.gui.FeatureEditor'].features.get$I(this.b$['jalview.gui.FeatureEditor'].featureIndex).getType$();
var type=ft == null  ? $I$(12).lastFeatureAdded : ft;
var fcc=Clazz.new_($I$(13,1).c$$jalview_gui_FeatureRenderer$S,[this.b$['jalview.gui.FeatureEditor'].fr, type]);
fcc.setRequestFocusEnabled$Z(true);
fcc.requestFocus$();
fcc.addActionListener$java_awt_event_ActionListener(((P$.FeatureEditor$5$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$5$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.FeatureEditor'].featureColour=this.b$['jalview.gui.FeatureEditor'].fr.getFeatureStyle$S(this.$finals$.ft);
this.b$['jalview.gui.FeatureEditor'].fr.setColour$S$jalview_api_FeatureColourI(this.$finals$.type, this.b$['jalview.gui.FeatureEditor'].featureColour);
this.b$['jalview.gui.FeatureEditor'].updateColourButton$javax_swing_JPanel$javax_swing_JLabel$jalview_api_FeatureColourI.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.$finals$.colour, this.b$['jalview.gui.FeatureEditor'].featureColour]);
});
})()
), Clazz.new_(P$.FeatureEditor$5$2.$init$,[this, {colour:this.$finals$.colour,ft:ft,type:type}])));
}});
})()
), Clazz.new_($I$(14,1),[this, {colour:colour}],P$.FeatureEditor$5)));
var gridPanel=Clazz.new_([Clazz.new_($I$(15,1).c$$I$I,[3, 1])],$I$(1,1).c$$java_awt_LayoutManager);
if (!this.forCreate && this.features.size$() > 1 ) {
gridPanel=Clazz.new_([Clazz.new_($I$(15,1).c$$I$I,[4, 1])],$I$(1,1).c$$java_awt_LayoutManager);
var choosePanel=Clazz.new_($I$(1,1));
choosePanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.select_feature") + ":"],$I$(7,1).c$$S));
var overlaps=Clazz.new_($I$(16,1));
var added=Clazz.new_($I$(17,1));
for (var sf, $sf = this.features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var text=String.format$S$OA("%s/%d-%d (%s)", Clazz.array(java.lang.Object, -1, [sf.getType$(), Integer.valueOf$I(sf.getBegin$()), Integer.valueOf$I(sf.getEnd$()), sf.getFeatureGroup$()]));
while (added.contains$O(text)){
text+=" ";
}
overlaps.addItem$O(text);
added.add$O(text);
}
choosePanel.add$java_awt_Component(overlaps);
overlaps.addItemListener$java_awt_event_ItemListener(((P$.FeatureEditor$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var index=this.$finals$.overlaps.getSelectedIndex$();
if (index != -1) {
this.b$['jalview.gui.FeatureEditor'].featureIndex=index;
var sf=this.b$['jalview.gui.FeatureEditor'].features.get$I(index);
this.b$['jalview.gui.FeatureEditor'].name.setText$S(sf.getType$());
this.b$['jalview.gui.FeatureEditor'].description.setText$S(sf.getDescription$());
this.b$['jalview.gui.FeatureEditor'].group.setText$S(sf.getFeatureGroup$());
this.b$['jalview.gui.FeatureEditor'].start.setValue$O( new Integer(sf.getBegin$()));
this.b$['jalview.gui.FeatureEditor'].end.setValue$O( new Integer(sf.getEnd$()));
(this.b$['jalview.gui.FeatureEditor'].start.getModel$()).setMaximum$Comparable(Integer.valueOf$I(sf.getEnd$()));
(this.b$['jalview.gui.FeatureEditor'].end.getModel$()).setMinimum$Comparable(Integer.valueOf$I(sf.getBegin$()));
var highlight=Clazz.new_($I$(18,1));
highlight.addResult$jalview_datamodel_SequenceI$I$I(this.b$['jalview.gui.FeatureEditor'].sequences.get$I(0), sf.getBegin$(), sf.getEnd$());
this.b$['jalview.gui.FeatureEditor'].ap.getSeqPanel$().seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(highlight);
}var col=this.b$['jalview.gui.FeatureEditor'].fr.getFeatureStyle$S(this.b$['jalview.gui.FeatureEditor'].name.getText$());
if (col == null ) {
col=Clazz.new_([$I$(19,"createColourFromName$S",[this.b$['jalview.gui.FeatureEditor'].name.getText$()])],$I$(9,1).c$$java_awt_Color);
}this.b$['jalview.gui.FeatureEditor'].oldColour=this.b$['jalview.gui.FeatureEditor'].featureColour=col;
this.b$['jalview.gui.FeatureEditor'].updateColourButton$javax_swing_JPanel$javax_swing_JLabel$jalview_api_FeatureColourI.apply(this.b$['jalview.gui.FeatureEditor'], [this.b$['jalview.gui.FeatureEditor'].mainPanel, this.$finals$.colour, col]);
});
})()
), Clazz.new_(P$.FeatureEditor$6.$init$,[this, {colour:colour,overlaps:overlaps}])));
gridPanel.add$java_awt_Component(choosePanel);
}var namePanel=Clazz.new_($I$(1,1));
gridPanel.add$java_awt_Component(namePanel);
namePanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.name:"), 4],$I$(7,1).c$$S$I));
namePanel.add$java_awt_Component(this.name);
var groupPanel=Clazz.new_($I$(1,1));
gridPanel.add$java_awt_Component(groupPanel);
groupPanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.group:"), 4],$I$(7,1).c$$S$I));
groupPanel.add$java_awt_Component(this.group);
var colourPanel=Clazz.new_($I$(1,1));
gridPanel.add$java_awt_Component(colourPanel);
colourPanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.colour"), 4],$I$(7,1).c$$S$I));
colourPanel.add$java_awt_Component(colour);
colour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[150, 15]));
colour.setFont$java_awt_Font(Clazz.new_($I$(20,1).c$$S$I$I,["Verdana", 0, 9]));
colour.setForeground$java_awt_Color($I$(21).black);
colour.setHorizontalAlignment$I(0);
colour.setVerticalAlignment$I(0);
colour.setHorizontalTextPosition$I(0);
colour.setVerticalTextPosition$I(0);
this.mainPanel.add$java_awt_Component$O(gridPanel, "North");
var descriptionPanel=Clazz.new_($I$(1,1));
descriptionPanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.description:"), 4],$I$(7,1).c$$S$I));
this.description.setFont$java_awt_Font($I$(22).getTextAreaFont$());
this.description.setLineWrap$Z(true);
descriptionPanel.add$java_awt_Component(Clazz.new_($I$(23,1).c$$java_awt_Component,[this.description]));
if (!this.forCreate) {
this.mainPanel.add$java_awt_Component$O(descriptionPanel, "South");
var startEndPanel=Clazz.new_($I$(1,1));
startEndPanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.start"), 4],$I$(7,1).c$$S$I));
startEndPanel.add$java_awt_Component(this.start);
startEndPanel.add$java_awt_Component(Clazz.new_([$I$(8).getString$S("label.end"), 4],$I$(7,1).c$$S$I));
startEndPanel.add$java_awt_Component(this.end);
this.mainPanel.add$java_awt_Component$O(startEndPanel, "Center");
} else {
this.mainPanel.add$java_awt_Component$O(descriptionPanel, "Center");
}var firstFeature=this.features.get$I(0);
var useLastDefaults=firstFeature.getType$() == null ;
var featureType=useLastDefaults ? C$.lastFeatureAdded : firstFeature.getType$();
var featureGroup=useLastDefaults ? C$.lastFeatureGroupAdded : firstFeature.getFeatureGroup$();
this.name.setText$S(featureType);
this.group.setText$S(featureGroup);
this.start.setValue$O( new Integer(firstFeature.getBegin$()));
this.end.setValue$O( new Integer(firstFeature.getEnd$()));
(this.start.getModel$()).setMaximum$Comparable(Integer.valueOf$I(firstFeature.getEnd$()));
(this.end.getModel$()).setMinimum$Comparable(Integer.valueOf$I(firstFeature.getBegin$()));
this.description.setText$S(firstFeature.getDescription$());
this.featureColour=this.fr.getFeatureStyle$S(featureType);
this.oldColour=this.featureColour;
this.updateColourButton$javax_swing_JPanel$javax_swing_JLabel$jalview_api_FeatureColourI(this.mainPanel, colour, this.oldColour);
});

Clazz.newMeth(C$, 'showDialog$',  function () {
var okAction=this.forCreate ? this.getCreateAction$() : this.getAmendAction$();
var cancelAction=this.getCancelAction$();
var dialog=$I$(24).newOptionDialog$java_awt_Component(this.ap.alignFrame).setResponseHandler$O$Runnable(Integer.valueOf$I(0), okAction).setResponseHandler$O$Runnable(Integer.valueOf$I(2), cancelAction);
if (!this.forCreate) {
dialog.setResponseHandler$O$Runnable(Integer.valueOf$I(1), this.getDeleteAction$());
}var title=null;
var options=null;
if (this.forCreate) {
title=$I$(8).getString$S("label.create_new_sequence_features");
options=Clazz.array(java.lang.Object, -1, [$I$(8).getString$S("action.ok"), $I$(8).getString$S("action.cancel")]);
} else {
title=$I$(8,"formatMessage$S$SA",["label.amend_delete_features", Clazz.array(String, -1, [this.sequences.get$I(0).getName$()])]);
options=Clazz.array(java.lang.Object, -1, [$I$(8).getString$S("label.amend"), $I$(8).getString$S("action.delete"), $I$(8).getString$S("action.cancel")]);
}dialog.showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S(this.mainPanel, title, 1, -1, null, options, $I$(8).getString$S("action.ok"));
});

Clazz.newMeth(C$, 'getCancelAction$',  function () {
var okAction=((P$.FeatureEditor$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.FeatureEditor'].ap.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
this.b$['jalview.gui.FeatureEditor'].ap.paintAlignment$Z$Z(false, false);
});
})()
), Clazz.new_(P$.FeatureEditor$7.$init$,[this, null]));
return okAction;
});

Clazz.newMeth(C$, 'getCreateAction$',  function () {
var okAction=((P$.FeatureEditor$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.useLastDefaults=this.b$['jalview.gui.FeatureEditor'].features.get$I(0).getType$() == null ;
},1);

C$.$fields$=[['Z',['useLastDefaults']]]

Clazz.newMeth(C$, 'run$',  function () {
var enteredType=this.b$['jalview.gui.FeatureEditor'].name.getText$().trim$();
var enteredGroup=this.b$['jalview.gui.FeatureEditor'].group.getText$().trim$();
var enteredDescription=this.b$['jalview.gui.FeatureEditor'].description.getText$().replaceAll$S$S("\n", " ");
if (enteredType.length$() > 0) {
if (this.useLastDefaults) {
$I$(12).lastFeatureAdded=enteredType;
$I$(12).lastFeatureGroupAdded=enteredGroup;
if ($I$(12).lastFeatureGroupAdded.length$() < 1) {
$I$(12).lastFeatureGroupAdded=null;
}}}if (enteredType.length$() > 0) {
for (var i=0; i < this.b$['jalview.gui.FeatureEditor'].sequences.size$(); i++) {
var sf=this.b$['jalview.gui.FeatureEditor'].features.get$I(i);
var sf2=Clazz.new_([enteredType, enteredDescription, sf.getBegin$(), sf.getEnd$(), enteredGroup],$I$(25,1).c$$S$S$I$I$S);
Clazz.new_($I$(26,1)).parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z(sf2, false);
this.b$['jalview.gui.FeatureEditor'].sequences.get$I(i).addSequenceFeature$jalview_datamodel_SequenceFeature(sf2);
}
this.b$['jalview.gui.FeatureEditor'].fr.setColour$S$jalview_api_FeatureColourI(enteredType, this.b$['jalview.gui.FeatureEditor'].featureColour);
this.b$['jalview.gui.FeatureEditor'].fr.featuresAdded$();
this.b$['jalview.gui.FeatureEditor'].repaintPanel$.apply(this.b$['jalview.gui.FeatureEditor'], []);
}});
})()
), Clazz.new_(P$.FeatureEditor$8.$init$,[this, null]));
return okAction;
});

Clazz.newMeth(C$, 'getDeleteAction$',  function () {
var deleteAction=((P$.FeatureEditor$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var sf=this.b$['jalview.gui.FeatureEditor'].features.get$I(this.b$['jalview.gui.FeatureEditor'].featureIndex);
this.b$['jalview.gui.FeatureEditor'].sequences.get$I(0).getDatasetSequence$().deleteFeature$jalview_datamodel_SequenceFeature(sf);
this.b$['jalview.gui.FeatureEditor'].fr.featuresAdded$();
this.b$['jalview.gui.FeatureEditor'].ap.getSeqPanel$().seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
this.b$['jalview.gui.FeatureEditor'].ap.paintAlignment$Z$Z(true, true);
});
})()
), Clazz.new_(P$.FeatureEditor$9.$init$,[this, null]));
return deleteAction;
});

Clazz.newMeth(C$, 'updateColourButton$javax_swing_JPanel$javax_swing_JLabel$jalview_api_FeatureColourI',  function (bigPanel, colour, col) {
colour.removeAll$();
colour.setIcon$javax_swing_Icon(null);
colour.setText$S("");
if (col.isSimpleColour$()) {
colour.setToolTipText$S(null);
colour.setBackground$java_awt_Color(col.getColour$());
} else {
colour.setBackground$java_awt_Color(bigPanel.getBackground$());
colour.setForeground$java_awt_Color($I$(21).black);
colour.setToolTipText$S($I$(27).getColorTooltip$jalview_api_FeatureColourI$Z(col, false));
$I$(27).renderGraduatedColor$javax_swing_JLabel$jalview_api_FeatureColourI(colour, col);
}});

Clazz.newMeth(C$, 'warnIfGroupHidden$javax_swing_JPanel$S',  function (panel, group) {
if (!this.fr.isGroupVisible$S(group)) {
var msg=$I$(8,"formatMessage$S$OA",["label.warning_hidden", Clazz.array(java.lang.Object, -1, [$I$(8).getString$S("label.group"), group])]);
$I$(24).showMessageDialog$java_awt_Component$S$S$I(panel, msg, "", 0);
}});

Clazz.newMeth(C$, 'warnIfTypeHidden$javax_swing_JPanel$S',  function (panel, type) {
if (this.fr.getRenderOrder$().contains$O(type)) {
if (!this.fr.showFeatureOfType$S(type)) {
var msg=$I$(8,"formatMessage$S$OA",["label.warning_hidden", Clazz.array(java.lang.Object, -1, [$I$(8).getString$S("label.feature_type"), type])]);
$I$(24).showMessageDialog$java_awt_Component$S$S$I(panel, msg, "", 0);
}}});

Clazz.newMeth(C$, 'repaintPanel$',  function () {
this.ap.alignFrame.showSeqFeatures.setSelected$Z(true);
this.ap.av.setShowSequenceFeatures$Z(true);
this.ap.av.setSearchResults$jalview_datamodel_SearchResultsI(null);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'getAmendAction$',  function () {
var okAction=((P$.FeatureEditor$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureEditor$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.useLastDefaults=this.b$['jalview.gui.FeatureEditor'].features.get$I(0).getType$() == null ;
this.featureType=this.b$['jalview.gui.FeatureEditor'].name.getText$();
this.featureGroup=this.b$['jalview.gui.FeatureEditor'].group.getText$();
},1);

C$.$fields$=[['Z',['useLastDefaults'],'S',['featureType','featureGroup']]]

Clazz.newMeth(C$, 'run$',  function () {
var enteredType=this.b$['jalview.gui.FeatureEditor'].name.getText$().trim$();
var enteredGroup=this.b$['jalview.gui.FeatureEditor'].group.getText$().trim$();
var enteredDescription=this.b$['jalview.gui.FeatureEditor'].description.getText$().replaceAll$S$S("\n", " ");
if (enteredType.length$() > 0) {
if (this.useLastDefaults) {
$I$(12).lastFeatureAdded=enteredType;
$I$(12).lastFeatureGroupAdded=enteredGroup;
if ($I$(12).lastFeatureGroupAdded.length$() < 1) {
$I$(12).lastFeatureGroupAdded=null;
}}}var sf=this.b$['jalview.gui.FeatureEditor'].features.get$I(this.b$['jalview.gui.FeatureEditor'].featureIndex);
var refreshSettings=(!this.featureType.equals$O(enteredType) || !this.featureGroup.equals$O(enteredGroup) );
refreshSettings=!!(refreshSettings|((this.b$['jalview.gui.FeatureEditor'].featureColour !== this.b$['jalview.gui.FeatureEditor'].oldColour )));
this.b$['jalview.gui.FeatureEditor'].fr.setColour$S$jalview_api_FeatureColourI(enteredType, this.b$['jalview.gui.FeatureEditor'].featureColour);
var newBegin=sf.begin;
var newEnd=sf.end;
try {
newBegin=(this.b$['jalview.gui.FeatureEditor'].start.getValue$()).intValue$();
newEnd=(this.b$['jalview.gui.FeatureEditor'].end.getValue$()).intValue$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
this.b$['jalview.gui.FeatureEditor'].sequences.get$I(0).deleteFeature$jalview_datamodel_SequenceFeature(sf);
var newSf=Clazz.new_([sf, enteredType, newBegin, newEnd, enteredGroup, sf.getScore$()],$I$(25,1).c$$jalview_datamodel_SequenceFeature$S$I$I$S$F);
newSf.setDescription$S(enteredDescription);
Clazz.new_($I$(26,1)).parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z(newSf, false);
this.b$['jalview.gui.FeatureEditor'].sequences.get$I(0).addSequenceFeature$jalview_datamodel_SequenceFeature(newSf);
if (refreshSettings) {
this.b$['jalview.gui.FeatureEditor'].fr.featuresAdded$();
}this.b$['jalview.gui.FeatureEditor'].repaintPanel$.apply(this.b$['jalview.gui.FeatureEditor'], []);
});
})()
), Clazz.new_(P$.FeatureEditor$10.$init$,[this, null]));
return okAction;
});

C$.$static$=function(){C$.$static$=0;
C$.lastFeatureAdded="feature_1";
C$.lastFeatureGroupAdded="Jalview";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
