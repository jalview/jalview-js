(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JSlider','javax.swing.JPanel','java.awt.Dimension','javax.swing.BorderFactory','jalview.util.MessageManager','java.awt.BorderLayout','javax.swing.JLabel','jalview.gui.JalviewColourChooser','java.awt.event.MouseAdapter','jalview.gui.JvOptionPane','java.util.HashMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextColourChooser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['originalThreshold'],'O',['ap','jalview.gui.AlignmentPanel','sg','jalview.datamodel.SequenceGroup','original1','java.awt.Color','+original2','groupColour1','java.util.Map','+groupColour2','+groupThreshold']]]

Clazz.newMeth(C$, 'chooseColour$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceGroup',  function (alignPanel, sequenceGroup) {
this.ap=alignPanel;
this.sg=sequenceGroup;
this.saveInitialSettings$();
var slider=Clazz.new_($I$(1,1).c$$I$I$I,[0, 750, this.originalThreshold]);
var col1=Clazz.new_($I$(2,1));
col1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[40, 20]));
col1.setBorder$javax_swing_border_Border($I$(4).createEtchedBorder$());
col1.setToolTipText$S($I$(5).getString$S("label.dark_colour"));
col1.setBackground$java_awt_Color(this.original1);
var col2=Clazz.new_($I$(2,1));
col2.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[40, 20]));
col2.setBorder$javax_swing_border_Border($I$(4).createEtchedBorder$());
col2.setToolTipText$S($I$(5).getString$S("label.light_colour"));
col2.setBackground$java_awt_Color(this.original2);
var bigpanel=Clazz.new_([Clazz.new_($I$(6,1))],$I$(2,1).c$$java_awt_LayoutManager);
var panel=Clazz.new_([Clazz.new_($I$(6,1))],$I$(2,1).c$$java_awt_LayoutManager);
bigpanel.add$java_awt_Component$O(panel, "Center");
bigpanel.add$java_awt_Component$O(Clazz.new_(["<html>" + $I$(5).getString$S("label.select_dark_light_set_threshold") + "</html>" ],$I$(7,1).c$$S), "North");
panel.add$java_awt_Component$O(col1, "West");
panel.add$java_awt_Component$O(slider, "Center");
panel.add$java_awt_Component$O(col2, "East");
col1.addMouseListener$java_awt_event_MouseListener(((P$.TextColourChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextColourChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var ttl=$I$(5).getString$S("label.select_colour_for_text");
var listener=((P$.TextColourChooser$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextColourChooser$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color',  function (c) {
this.b$['jalview.gui.TextColourChooser'].colour1Changed$java_awt_Color.apply(this.b$['jalview.gui.TextColourChooser'], [c]);
this.$finals$.col1.setBackground$java_awt_Color(c);
});
})()
), Clazz.new_(P$.TextColourChooser$1$1.$init$,[this, {col1:this.$finals$.col1}]));
$I$(8,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[this.$finals$.bigpanel, ttl, this.$finals$.col1.getBackground$(), listener]);
});
})()
), Clazz.new_($I$(9,1),[this, {col1:col1,bigpanel:bigpanel}],P$.TextColourChooser$1)));
col2.addMouseListener$java_awt_event_MouseListener(((P$.TextColourChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextColourChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var ttl=$I$(5).getString$S("label.select_colour_for_text");
var listener=((P$.TextColourChooser$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextColourChooser$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color',  function (c) {
this.b$['jalview.gui.TextColourChooser'].colour2Changed$java_awt_Color.apply(this.b$['jalview.gui.TextColourChooser'], [c]);
this.$finals$.col2.setBackground$java_awt_Color(c);
});
})()
), Clazz.new_(P$.TextColourChooser$2$1.$init$,[this, {col2:this.$finals$.col2}]));
$I$(8,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[this.$finals$.bigpanel, ttl, this.$finals$.col2.getBackground$(), listener]);
});
})()
), Clazz.new_($I$(9,1),[this, {col2:col2,bigpanel:bigpanel}],P$.TextColourChooser$2)));
slider.addChangeListener$javax_swing_event_ChangeListener(((P$.TextColourChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextColourChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (evt) {
this.b$['jalview.gui.TextColourChooser'].thresholdChanged$I.apply(this.b$['jalview.gui.TextColourChooser'], [this.$finals$.slider.getValue$()]);
});
})()
), Clazz.new_(P$.TextColourChooser$3.$init$,[this, {slider:slider}])));
var options=Clazz.array(java.lang.Object, -1, [$I$(5).getString$S("action.ok"), $I$(5).getString$S("action.cancel")]);
var title=$I$(5).getString$S("label.adjust_foreground_text_colour_threshold");
var action=((P$.TextColourChooser$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextColourChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.TextColourChooser'].restoreInitialSettings$.apply(this.b$['jalview.gui.TextColourChooser'], []);
});
})()
), Clazz.new_(P$.TextColourChooser$4.$init$,[this, null]));
$I$(10).newOptionDialog$java_awt_Component(alignPanel.alignFrame).setResponseHandler$O$Runnable(Integer.valueOf$I(1), action).showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S(bigpanel, title, 1, -1, null, options, $I$(5).getString$S("action.ok"));
});

Clazz.newMeth(C$, 'restoreInitialSettings$',  function () {
if (this.sg == null ) {
this.ap.av.setTextColour$java_awt_Color(this.original1);
this.ap.av.setTextColour2$java_awt_Color(this.original2);
this.ap.av.setThresholdTextColour$I(this.originalThreshold);
} else {
this.sg.textColour=this.original1;
this.sg.textColour2=this.original2;
this.sg.thresholdTextColour=this.originalThreshold;
}for (var group, $group = this.groupColour1.keySet$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
group.textColour=this.groupColour1.get$O(group);
group.textColour2=this.groupColour2.get$O(group);
group.thresholdTextColour=(this.groupThreshold.get$O(group)).$c();
}
this.ap.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'saveInitialSettings$',  function () {
this.groupColour1=Clazz.new_($I$(11,1));
this.groupColour2=Clazz.new_($I$(11,1));
this.groupThreshold=Clazz.new_($I$(11,1));
if (this.sg == null ) {
this.original1=this.ap.av.getTextColour$();
this.original2=this.ap.av.getTextColour2$();
this.originalThreshold=this.ap.av.getThresholdTextColour$();
if (this.ap.av.getColourAppliesToAllGroups$() && this.ap.av.getAlignment$().getGroups$() != null  ) {
for (var group, $group = this.ap.av.getAlignment$().getGroups$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
this.groupColour1.put$O$O(group, group.textColour);
this.groupColour2.put$O$O(group, group.textColour2);
this.groupThreshold.put$O$O(group, Integer.valueOf$I(group.thresholdTextColour));
}
}} else {
this.original1=this.sg.textColour;
this.original2=this.sg.textColour2;
this.originalThreshold=this.sg.thresholdTextColour;
}});

Clazz.newMeth(C$, 'colour1Changed$java_awt_Color',  function (col) {
if (this.sg == null ) {
this.ap.av.setTextColour$java_awt_Color(col);
if (this.ap.av.getColourAppliesToAllGroups$()) {
this.setGroupTextColour$();
}} else {
this.sg.textColour=col;
}this.ap.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'colour2Changed$java_awt_Color',  function (col) {
if (this.sg == null ) {
this.ap.av.setTextColour2$java_awt_Color(col);
if (this.ap.av.getColourAppliesToAllGroups$()) {
this.setGroupTextColour$();
}} else {
this.sg.textColour2=col;
}this.ap.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'thresholdChanged$I',  function (value) {
if (this.sg == null ) {
this.ap.av.setThresholdTextColour$I(value);
if (this.ap.av.getColourAppliesToAllGroups$()) {
this.setGroupTextColour$();
}} else {
this.sg.thresholdTextColour=value;
}this.ap.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'setGroupTextColour$',  function () {
if (this.ap.av.getAlignment$().getGroups$() == null ) {
return;
}for (var group, $group = this.ap.av.getAlignment$().getGroups$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
group.textColour=this.ap.av.getTextColour$();
group.textColour2=this.ap.av.getTextColour2$();
group.thresholdTextColour=this.ap.av.getThresholdTextColour$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
