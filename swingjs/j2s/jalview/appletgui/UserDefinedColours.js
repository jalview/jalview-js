(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.util.Vector','java.awt.Panel','java.awt.GridLayout','java.awt.Button','java.awt.Scrollbar','java.awt.Label','java.awt.TextField','jalview.schemes.FeatureColour','java.awt.Rectangle','jalview.util.MessageManager','java.awt.Dialog','Error','java.awt.Frame','jalview.bin.JalviewLite','jalview.schemes.ResidueProperties','java.awt.Color','java.awt.Font','java.awt.event.MouseAdapter','jalview.schemes.UserColourScheme','jalview.renderer.ResidueShader','jalview.analysis.AAFrequency']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UserDefinedColours", null, 'java.awt.Panel', ['java.awt.event.ActionListener', 'java.awt.event.AdjustmentListener', 'java.awt.event.FocusListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.oldColours=Clazz.new_($I$(1,1));
this.R=0;
this.G=0;
this.B=0;
this.buttonPanel=Clazz.new_($I$(2,1));
this.gridLayout=Clazz.new_($I$(3,1));
this.okcancelPanel=Clazz.new_($I$(2,1));
this.okButton=Clazz.new_($I$(4,1));
this.applyButton=Clazz.new_($I$(4,1));
this.cancelButton=Clazz.new_($I$(4,1));
this.rScroller=Clazz.new_($I$(5,1));
this.label1=Clazz.new_($I$(6,1));
this.rText=Clazz.new_($I$(7,1));
this.label4=Clazz.new_($I$(6,1));
this.gScroller=Clazz.new_($I$(5,1));
this.gText=Clazz.new_($I$(7,1));
this.label5=Clazz.new_($I$(6,1));
this.bScroller=Clazz.new_($I$(5,1));
this.bText=Clazz.new_($I$(7,1));
this.target=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['R','G','B'],'S',['originalLabel'],'O',['ap','jalview.appletgui.AlignmentPanel','seqGroup','jalview.datamodel.SequenceGroup','selectedButton','java.awt.Button','oldColours','java.util.Vector','oldColourScheme','jalview.schemes.ColourSchemeI','frame','java.awt.Frame','pdbcanvas','mc_view.AppletPDBCanvas','jmol','jalview.appletgui.AppletJmol','dialog','java.awt.Dialog','$caller','java.lang.Object','originalColour','jalview.api.FeatureColourI','buttonPanel','java.awt.Panel','gridLayout','java.awt.GridLayout','okcancelPanel','java.awt.Panel','okButton','java.awt.Button','+applyButton','+cancelButton','rScroller','java.awt.Scrollbar','label1','java.awt.Label','rText','java.awt.TextField','label4','java.awt.Label','gScroller','java.awt.Scrollbar','gText','java.awt.TextField','label5','java.awt.Label','bScroller','java.awt.Scrollbar','bText','java.awt.TextField','target','java.awt.Panel']]]

Clazz.newMeth(C$, 'loadDefaultColours$', function () {
return null;
});

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceGroup', function (ap, sg) {
Clazz.super_(C$, this);
this.ap=ap;
this.seqGroup=sg;
if (this.seqGroup != null ) {
this.oldColourScheme=this.seqGroup.getColourScheme$();
} else {
this.oldColourScheme=ap.av.getGlobalColourScheme$();
}this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$mc_view_AppletPDBCanvas', function (pdb) {
Clazz.super_(C$, this);
this.pdbcanvas=pdb;
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AppletJmol', function (jmol) {
Clazz.super_(C$, this);
this.jmol=jmol;
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_FeatureRenderer$java_awt_Frame', function (fr, alignframe) {
Clazz.super_(C$, this);
this.$caller=fr;
this.originalColour=Clazz.new_([fr.colourPanel.getBackground$()],$I$(8,1).c$$java_awt_Color);
this.originalLabel="Feature Colour";
this.setForDialog$S$java_awt_Container("Select Feature Colour", alignframe);
this.setTargetColour$java_awt_Color(fr.colourPanel.getBackground$());
this.dialog.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_Color$java_awt_Frame', function ($caller, col1, alignframe) {
C$.c$$java_awt_Component$java_awt_Color$java_awt_Frame$S.apply(this, [$caller, col1, alignframe, "Select Colour"]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_Color$java_awt_Frame$S', function ($caller, col, alignframe, title) {
Clazz.super_(C$, this);
this.$caller=$caller;
this.originalColour=Clazz.new_($I$(8,1).c$$java_awt_Color,[col]);
this.originalLabel=title;
this.setForDialog$S$java_awt_Container(title, alignframe);
this.setTargetColour$java_awt_Color(col);
this.dialog.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$O$S$java_awt_Color', function ($caller, label, colour) {
C$.c$$O$S$jalview_api_FeatureColourI$java_awt_Color.apply(this, [$caller, label, Clazz.new_($I$(8,1).c$$java_awt_Color,[colour]), colour]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_FeatureSettings$S$jalview_api_FeatureColourI', function (me, type, graduatedColor) {
C$.c$$O$S$jalview_api_FeatureColourI$java_awt_Color.apply(this, [me, type, graduatedColor, graduatedColor.getMaxColour$()]);
}, 1);

Clazz.newMeth(C$, 'c$$O$S$jalview_api_FeatureColourI$java_awt_Color', function ($caller, label, ocolour, colour) {
Clazz.super_(C$, this);
this.$caller=$caller;
this.originalColour=ocolour;
this.originalLabel=label;
this.init$();
this.remove$java_awt_Component(this.buttonPanel);
this.setTargetColour$java_awt_Color(colour);
this.okcancelPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 113, 400, 35]));
this.frame.setTitle$S($I$(10).getString$S("label.user_defined_colours") + " - " + label );
this.frame.setSize$I$I(420, 200);
}, 1);

Clazz.newMeth(C$, 'setForDialog$S$java_awt_Container', function (title, alignframe) {
this.init$();
this.frame.setVisible$Z(false);
this.remove$java_awt_Component(this.buttonPanel);
if (Clazz.instanceOf(alignframe, "java.awt.Frame")) {
this.dialog=Clazz.new_($I$(11,1).c$$java_awt_Frame$S$Z,[alignframe, title, true]);
} else {
throw Clazz.new_([$I$(10).getString$S("label.error_unsupported_owwner_user_colour_scheme")],$I$(12,1).c$$S);
}this.dialog.add$java_awt_Component(this);
this.setSize$I$I(400, 123);
this.okcancelPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 123, 400, 35]));
var height=160 + alignframe.getInsets$().top + this.getInsets$().bottom ;
var width=400;
this.dialog.setBounds$I$I$I$I(alignframe.getBounds$().x + ((alignframe.getSize$().width - width)/2|0), alignframe.getBounds$().y + ((alignframe.getSize$().height - height)/2|0), width, height);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
var source=evt.getSource$();
if (source === this.okButton ) {
this.okButton_actionPerformed$();
} else if (source === this.applyButton ) {
this.applyButton_actionPerformed$();
} else if (source === this.cancelButton ) {
this.cancelButton_actionPerformed$();
} else if (source === this.rText ) {
this.rText_actionPerformed$();
} else if (source === this.gText ) {
this.gText_actionPerformed$();
} else if (source === this.bText ) {
this.bText_actionPerformed$();
}});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (evt) {
if (evt.getSource$() === this.rScroller ) {
this.rScroller_adjustmentValueChanged$();
} else if (evt.getSource$() === this.gScroller ) {
this.gScroller_adjustmentValueChanged$();
} else if (evt.getSource$() === this.bScroller ) {
this.bScroller_adjustmentValueChanged$();
}});

Clazz.newMeth(C$, 'init$', function () {
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.frame=Clazz.new_($I$(13,1));
this.frame.add$java_awt_Component(this);
$I$(14,"addFrame$java_awt_Frame$S$I$I",[this.frame, $I$(10).getString$S("label.user_defined_colours"), 420, 345]);
if (this.seqGroup != null ) {
this.frame.setTitle$S(this.frame.getTitle$() + " (" + this.seqGroup.getName$() + ")" );
}for (var i=0; i < 20; i++) {
this.makeButton$S$S($I$(15).aa2Triplet.get$O($I$(15).aa[i]) + "", $I$(15).aa[i]);
}
this.makeButton$S$S("B", "B");
this.makeButton$S$S("Z", "Z");
this.makeButton$S$S("X", "X");
this.makeButton$S$S("Gap", "\'.\',\'-\',\' \'");
this.validate$();
});

Clazz.newMeth(C$, 'rText_actionPerformed$', function () {
try {
var i=Integer.parseInt$S(this.rText.getText$());
this.rScroller.setValue$I(i);
this.rScroller_adjustmentValueChanged$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'gText_actionPerformed$', function () {
try {
var i=Integer.parseInt$S(this.gText.getText$());
this.gScroller.setValue$I(i);
this.gScroller_adjustmentValueChanged$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'bText_actionPerformed$', function () {
try {
var i=Integer.parseInt$S(this.bText.getText$());
this.bScroller.setValue$I(i);
this.bScroller_adjustmentValueChanged$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'rScroller_adjustmentValueChanged$', function () {
this.R=this.rScroller.getValue$();
this.rText.setText$S(this.R + "");
this.colourChanged$();
});

Clazz.newMeth(C$, 'gScroller_adjustmentValueChanged$', function () {
this.G=this.gScroller.getValue$();
this.gText.setText$S(this.G + "");
this.colourChanged$();
});

Clazz.newMeth(C$, 'bScroller_adjustmentValueChanged$', function () {
this.B=this.bScroller.getValue$();
this.bText.setText$S(this.B + "");
this.colourChanged$();
});

Clazz.newMeth(C$, 'colourChanged$', function () {
var col=Clazz.new_($I$(16,1).c$$I$I$I,[this.R, this.G, this.B]);
this.target.setBackground$java_awt_Color(col);
this.target.repaint$();
if (this.selectedButton != null ) {
this.selectedButton.setBackground$java_awt_Color(col);
this.selectedButton.repaint$();
}});

Clazz.newMeth(C$, 'setTargetColour$java_awt_Color', function (col) {
this.R=col.getRed$();
this.G=col.getGreen$();
this.B=col.getBlue$();
this.rScroller.setValue$I(this.R);
this.gScroller.setValue$I(this.G);
this.bScroller.setValue$I(this.B);
this.rText.setText$S(this.R + "");
this.gText.setText$S(this.G + "");
this.bText.setText$S(this.B + "");
this.colourChanged$();
});

Clazz.newMeth(C$, 'colourButtonPressed$java_awt_event_MouseEvent', function (e) {
this.selectedButton=e.getSource$();
this.setTargetColour$java_awt_Color(this.selectedButton.getBackground$());
});

Clazz.newMeth(C$, 'makeButton$S$S', function (label, aa) {
var button=Clazz.new_($I$(4,1));
var col=$I$(16).white;
if (this.oldColourScheme != null  && this.oldColourScheme.isSimple$() ) {
col=this.oldColourScheme.findColour$C$I$jalview_datamodel_SequenceI$S$F(aa.charAt$I(0), 0, null, null, 0.0);
}button.setBackground$java_awt_Color(col);
this.oldColours.addElement$O(col);
button.setLabel$S(label);
button.setForeground$java_awt_Color(col.darker$().darker$().darker$());
button.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Verdana", 1, 10]));
button.addMouseListener$java_awt_event_MouseListener(((P$.UserDefinedColours$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UserDefinedColours$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.appletgui.UserDefinedColours'].colourButtonPressed$java_awt_event_MouseEvent.apply(this.b$['jalview.appletgui.UserDefinedColours'], [e]);
});
})()
), Clazz.new_($I$(18,1),[this, null],P$.UserDefinedColours$1)));
this.buttonPanel.add$java_awt_Component$O(button, null);
});

Clazz.newMeth(C$, 'okButton_actionPerformed$', function () {
this.applyButton_actionPerformed$();
if (this.dialog != null ) {
this.dialog.setVisible$Z(false);
}this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'getColor$', function () {
return Clazz.new_($I$(16,1).c$$I$I$I,[this.R, this.G, this.B]);
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$', function () {
if (this.$caller != null ) {
if (Clazz.instanceOf(this.$caller, "jalview.appletgui.FeatureSettings")) {
(this.$caller).setUserColour$S$jalview_api_FeatureColourI(this.originalLabel, Clazz.new_([this.getColor$()],$I$(8,1).c$$java_awt_Color));
} else if (Clazz.instanceOf(this.$caller, "jalview.appletgui.AnnotationColourChooser")) {
if (this.originalLabel.equals$O("Min Colour")) {
(this.$caller).minColour_actionPerformed$java_awt_Color(this.getColor$());
} else {
(this.$caller).maxColour_actionPerformed$java_awt_Color(this.getColor$());
}} else if (Clazz.instanceOf(this.$caller, "jalview.appletgui.FeatureRenderer")) {
(this.$caller).colourPanel.updateColor$jalview_api_FeatureColourI(Clazz.new_([this.getColor$()],$I$(8,1).c$$java_awt_Color));
} else if (Clazz.instanceOf(this.$caller, "jalview.appletgui.FeatureColourChooser")) {
if (this.originalLabel.indexOf$S("inimum") > -1) {
(this.$caller).minColour_actionPerformed$java_awt_Color(this.getColor$());
} else {
(this.$caller).maxColour_actionPerformed$java_awt_Color(this.getColor$());
}}return;
}var newColours=Clazz.array($I$(16), [24]);
for (var i=0; i < 24; i++) {
var button=this.buttonPanel.getComponent$I(i);
newColours[i]=button.getBackground$();
}
var ucs=Clazz.new_($I$(19,1).c$$java_awt_ColorA,[newColours]);
if (this.ap != null ) {
if (this.seqGroup != null ) {
this.seqGroup.cs=Clazz.new_($I$(20,1).c$$jalview_schemes_ColourSchemeI,[ucs]);
this.seqGroup.getGroupColourScheme$().setThreshold$I$Z(0, this.ap.av.isIgnoreGapsConsensus$());
} else {
this.ap.av.setGlobalColourScheme$jalview_schemes_ColourSchemeI(ucs);
this.ap.av.getResidueShading$().setThreshold$I$Z(0, this.ap.av.isIgnoreGapsConsensus$());
}this.ap.seqPanel.seqCanvas.img=null;
this.ap.paintAlignment$Z$Z(true, true);
} else if (this.jmol != null ) {
this.jmol.setJalviewColourScheme$jalview_schemes_UserColourScheme(ucs);
} else if (this.pdbcanvas != null ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(ucs);
}});

Clazz.newMeth(C$, 'cancelButton_actionPerformed$', function () {
if (this.$caller != null ) {
if (Clazz.instanceOf(this.$caller, "jalview.appletgui.FeatureSettings")) {
(this.$caller).setUserColour$S$jalview_api_FeatureColourI(this.originalLabel, this.originalColour);
} else if (Clazz.instanceOf(this.$caller, "jalview.appletgui.AnnotationColourChooser")) {
if (this.originalLabel.equals$O("Min Colour")) {
(this.$caller).minColour_actionPerformed$java_awt_Color(this.originalColour.getColour$());
} else {
(this.$caller).maxColour_actionPerformed$java_awt_Color(this.originalColour.getColour$());
}} else if (Clazz.instanceOf(this.$caller, "jalview.appletgui.FeatureRenderer")) {
(this.$caller).colourPanel.updateColor$jalview_api_FeatureColourI(this.originalColour);
} else if (Clazz.instanceOf(this.$caller, "jalview.appletgui.FeatureColourChooser")) {
if (this.originalLabel.indexOf$S("inimum") > -1) {
(this.$caller).minColour_actionPerformed$java_awt_Color(this.originalColour.getColour$());
} else {
(this.$caller).maxColour_actionPerformed$java_awt_Color(this.originalColour.getColour$());
}}if (this.dialog != null ) {
this.dialog.setVisible$Z(false);
}this.frame.setVisible$Z(false);
return;
}if (this.ap != null ) {
if (this.seqGroup != null ) {
this.seqGroup.cs=Clazz.new_($I$(20,1).c$$jalview_schemes_ColourSchemeI,[this.oldColourScheme]);
if (Clazz.instanceOf(this.oldColourScheme, "jalview.schemes.PIDColourScheme") || Clazz.instanceOf(this.oldColourScheme, "jalview.schemes.Blosum62ColourScheme") ) {
this.seqGroup.cs.setConsensus$jalview_datamodel_ProfilesI($I$(21,"calculate$java_util_List$I$I",[this.seqGroup.getSequences$java_util_Map(this.ap.av.getHiddenRepSequences$()), 0, this.ap.av.getAlignment$().getWidth$()]));
}} else {
this.ap.av.setGlobalColourScheme$jalview_schemes_ColourSchemeI(this.oldColourScheme);
}this.ap.paintAlignment$Z$Z(true, true);
}this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(null);
this.buttonPanel.setLayout$java_awt_LayoutManager(this.gridLayout);
this.gridLayout.setColumns$I(6);
this.gridLayout.setRows$I(4);
this.okButton.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Verdana", 0, 11]));
this.okButton.setLabel$S($I$(10).getString$S("action.ok"));
this.okButton.addActionListener$java_awt_event_ActionListener(this);
this.applyButton.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Verdana", 0, 11]));
this.applyButton.setLabel$S($I$(10).getString$S("action.apply"));
this.applyButton.addActionListener$java_awt_event_ActionListener(this);
this.cancelButton.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Verdana", 0, 11]));
this.cancelButton.setLabel$S($I$(10).getString$S("action.cancel"));
this.cancelButton.addActionListener$java_awt_event_ActionListener(this);
this.setBackground$java_awt_Color(Clazz.new_($I$(16,1).c$$I$I$I,[212, 208, 223]));
this.okcancelPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 265, 400, 35]));
this.buttonPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 123, 400, 142]));
this.rScroller.setMaximum$I(256);
this.rScroller.setMinimum$I(0);
this.rScroller.setOrientation$I(0);
this.rScroller.setUnitIncrement$I(1);
this.rScroller.setVisibleAmount$I(1);
this.rScroller.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[36, 27, 119, 19]));
this.rScroller.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.label1.setAlignment$I(2);
this.label1.setText$S("R");
this.label1.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[19, 30, 16, 15]));
this.rText.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Dialog", 0, 10]));
this.rText.setText$S("0        ");
this.rText.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[156, 27, 53, 19]));
this.rText.addActionListener$java_awt_event_ActionListener(this);
this.rText.addFocusListener$java_awt_event_FocusListener(this);
this.label4.setAlignment$I(2);
this.label4.setText$S("G");
this.label4.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[15, 56, 20, 15]));
this.gScroller.setMaximum$I(256);
this.gScroller.setMinimum$I(0);
this.gScroller.setOrientation$I(0);
this.gScroller.setUnitIncrement$I(1);
this.gScroller.setVisibleAmount$I(1);
this.gScroller.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[35, 52, 120, 20]));
this.gScroller.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.gText.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Dialog", 0, 10]));
this.gText.setText$S("0        ");
this.gText.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[156, 52, 53, 20]));
this.gText.addActionListener$java_awt_event_ActionListener(this);
this.gText.addFocusListener$java_awt_event_FocusListener(this);
this.label5.setAlignment$I(2);
this.label5.setText$S("B");
this.label5.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[14, 82, 20, 15]));
this.bScroller.setMaximum$I(256);
this.bScroller.setMinimum$I(0);
this.bScroller.setOrientation$I(0);
this.bScroller.setUnitIncrement$I(1);
this.bScroller.setVisibleAmount$I(1);
this.bScroller.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[35, 78, 120, 20]));
this.bScroller.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.bText.setFont$java_awt_Font(Clazz.new_($I$(17,1).c$$S$I$I,["Dialog", 0, 10]));
this.bText.setText$S("0        ");
this.bText.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[157, 78, 52, 20]));
this.bText.addActionListener$java_awt_event_ActionListener(this);
this.bText.addFocusListener$java_awt_event_FocusListener(this);
this.target.setBackground$java_awt_Color($I$(16).black);
this.target.setBounds$java_awt_Rectangle(Clazz.new_($I$(9,1).c$$I$I$I$I,[229, 26, 134, 79]));
this.add$java_awt_Component$O(this.okcancelPanel, null);
this.okcancelPanel.add$java_awt_Component$O(this.okButton, null);
this.okcancelPanel.add$java_awt_Component$O(this.applyButton, null);
this.okcancelPanel.add$java_awt_Component$O(this.cancelButton, null);
this.add$java_awt_Component(this.rText);
this.add$java_awt_Component(this.gText);
this.add$java_awt_Component(this.bText);
this.add$java_awt_Component$O(this.buttonPanel, null);
this.add$java_awt_Component$O(this.target, null);
this.add$java_awt_Component(this.gScroller);
this.add$java_awt_Component(this.rScroller);
this.add$java_awt_Component(this.bScroller);
this.add$java_awt_Component(this.label5);
this.add$java_awt_Component(this.label4);
this.add$java_awt_Component(this.label1);
}, p$1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
var c=e.getComponent$();
if (c === this.rText ) {
this.rText_actionPerformed$();
} else {
if (c === this.gText ) {
this.gText_actionPerformed$();
} else {
if (c === this.bText ) {
this.bText_actionPerformed$();
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
