(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Font','java.awt.Choice','java.awt.Checkbox','java.awt.Button','java.awt.GraphicsEnvironment','java.awt.Frame','jalview.bin.JalviewLite','jalview.util.MessageManager','jalview.appletgui.JVDialog','java.awt.Panel','java.awt.FlowLayout','java.awt.Label','java.awt.BorderLayout','java.awt.Color']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontChooser", null, 'java.awt.Panel', 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fontSize=Clazz.new_($I$(2,1));
this.fontStyle=Clazz.new_($I$(2,1));
this.fontName=Clazz.new_($I$(2,1));
this.scaleAsCdna=Clazz.new_($I$(3,1));
this.fontAsCdna=Clazz.new_($I$(3,1));
this.ok=Clazz.new_($I$(4,1));
this.cancel=Clazz.new_($I$(4,1));
this.oldCharWidth=0;
this.oldScaleProtein=false;
this.lastSelected=null;
this.lastSelStyle=0;
this.lastSelSize=0;
this.init=true;
this.inSplitFrame=false;
},1);

C$.$fields$=[['Z',['oldScaleProtein','oldMirrorFont','init','inSplitFrame'],'I',['oldCharWidth','lastSelStyle','lastSelSize'],'O',['fontSize','java.awt.Choice','+fontStyle','+fontName','scaleAsCdna','java.awt.Checkbox','+fontAsCdna','ok','java.awt.Button','+cancel','ap','jalview.appletgui.AlignmentPanel','tp','jalview.appletgui.TreePanel','oldFont','java.awt.Font','+oldComplementFont','+lastSelected','frame','java.awt.Frame']]
,['O',['VERDANA_11PT','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_TreePanel', function (tp) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.tp=tp;
this.oldFont=tp.getTreeFont$();
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.ap=ap;
this.oldFont=ap.av.getFont$();
this.oldCharWidth=ap.av.getCharWidth$();
this.oldScaleProtein=ap.av.isScaleProteinAsCdna$();
this.oldMirrorFont=ap.av.isProteinFontAsCdna$();
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
var fonts=$I$(5).getLocalGraphicsEnvironment$().getAvailableFontFamilyNames$();
for (var i=0; i < fonts.length; i++) {
this.fontName.addItem$S(fonts[i]);
}
for (var i=1; i < 31; i++) {
this.fontSize.addItem$S(i + "");
}
this.fontStyle.addItem$S("plain");
this.fontStyle.addItem$S("bold");
this.fontStyle.addItem$S("italic");
this.fontName.select$S(this.oldFont.getName$());
this.fontSize.select$S(this.oldFont.getSize$() + "");
this.fontStyle.select$I(this.oldFont.getStyle$());
this.frame=Clazz.new_($I$(6,1));
this.frame.add$java_awt_Component(this);
$I$(7,"addFrame$java_awt_Frame$S$I$I",[this.frame, $I$(8).getString$S("action.change_font"), 440, 145]);
this.init=false;
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (evt) {
var source=evt.getSource$();
if (source === this.fontName ) {
this.fontName_actionPerformed$();
} else if (source === this.fontSize ) {
this.fontSize_actionPerformed$();
} else if (source === this.fontStyle ) {
this.fontStyle_actionPerformed$();
} else if (source === this.scaleAsCdna ) {
this.scaleAsCdna_actionPerformed$();
} else if (source === this.fontAsCdna ) {
this.mirrorFont_actionPerformed$();
}});

Clazz.newMeth(C$, 'mirrorFont_actionPerformed$', function () {
var selected=this.fontAsCdna.getState$();
this.ap.av.setProteinFontAsCdna$Z(selected);
this.ap.av.getCodingComplement$().setProteinFontAsCdna$Z(selected);
if (!selected) {
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(this.oldComplementFont, true);
}this.changeFont$();
});

Clazz.newMeth(C$, 'ok_actionPerformed$', function () {
this.frame.setVisible$Z(false);
if (this.ap != null ) {
if (this.ap.getOverviewPanel$() != null ) {
this.ap.getOverviewPanel$().updateOverviewImage$();
}}});

Clazz.newMeth(C$, 'cancel_actionPerformed$', function () {
if (this.ap != null ) {
this.ap.av.setScaleProteinAsCdna$Z(this.oldScaleProtein);
this.ap.av.setProteinFontAsCdna$Z(this.oldMirrorFont);
if (this.ap.av.getCodingComplement$() != null ) {
this.ap.av.getCodingComplement$().setScaleProteinAsCdna$Z(this.oldScaleProtein);
this.ap.av.getCodingComplement$().setProteinFontAsCdna$Z(this.oldMirrorFont);
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(this.oldComplementFont, true);
var splitFrame=this.ap.alignFrame.getSplitFrame$();
splitFrame.adjustLayout$();
splitFrame.getComplement$jalview_appletgui_AlignFrame(this.ap.alignFrame).alignPanel.fontChanged$();
splitFrame.repaint$();
}this.ap.av.setFont$java_awt_Font$Z(this.oldFont, true);
if (this.ap.av.getCharWidth$() != this.oldCharWidth) {
this.ap.av.setCharWidth$I(this.oldCharWidth);
}this.ap.paintAlignment$Z$Z(true, false);
} else if (this.tp != null ) {
this.tp.setTreeFont$java_awt_Font(this.oldFont);
this.tp.treeCanvas.repaint$();
}this.fontName.select$S(this.oldFont.getName$());
this.fontSize.select$S(this.oldFont.getSize$() + "");
this.fontStyle.select$I(this.oldFont.getStyle$());
this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'changeFont$', function () {
if (this.lastSelected == null ) {
this.lastSelected=this.oldFont;
this.lastSelSize=this.oldFont.getSize$();
this.lastSelStyle=this.oldFont.getStyle$();
}var newFont=Clazz.new_([this.fontName.getSelectedItem$().toString(), this.fontStyle.getSelectedIndex$(), Integer.parseInt$S(this.fontSize.getSelectedItem$().toString())],$I$(1,1).c$$S$I$I);
var fm=this.getGraphics$().getFontMetrics$java_awt_Font(newFont);
var mw=fm.getStringBounds$S$java_awt_Graphics("M", this.getGraphics$()).getWidth$();
var iw=fm.getStringBounds$S$java_awt_Graphics("I", this.getGraphics$()).getWidth$();
if (mw < 1  || iw < 1  ) {
this.fontName.select$S(this.lastSelected.getName$());
this.fontStyle.select$I(this.lastSelStyle);
this.fontSize.select$S("" + this.lastSelSize);
var d=Clazz.new_([this.frame, $I$(8).getString$S("label.invalid_font"), true, 350, 200],$I$(9,1).c$$java_awt_Frame$S$Z$I$I);
var mp=Clazz.new_($I$(10,1));
d.cancel.setVisible$Z(false);
mp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1)));
mp.add$java_awt_Component(Clazz.new_($I$(12,1).c$$S,["Font doesn\'t have letters defined\nso cannot be used\nwith alignment data."]));
d.setMainPanel$java_awt_Panel(mp);
d.setVisible$Z(true);
return;
}if (this.tp != null ) {
this.tp.setTreeFont$java_awt_Font(newFont);
} else if (this.ap != null ) {
this.ap.av.setFont$java_awt_Font$Z(newFont, true);
this.ap.fontChanged$();
if (this.inSplitFrame) {
if (this.fontAsCdna.getState$()) {
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(newFont, true);
}var splitFrame=this.ap.alignFrame.getSplitFrame$();
splitFrame.adjustLayout$();
splitFrame.getComplement$jalview_appletgui_AlignFrame(this.ap.alignFrame).alignPanel.fontChanged$();
splitFrame.repaint$();
}}this.lastSelected=newFont;
});

Clazz.newMeth(C$, 'fontName_actionPerformed$', function () {
if (this.init) {
return;
}this.changeFont$();
});

Clazz.newMeth(C$, 'fontSize_actionPerformed$', function () {
if (this.init) {
return;
}this.changeFont$();
});

Clazz.newMeth(C$, 'fontStyle_actionPerformed$', function () {
if (this.init) {
return;
}this.changeFont$();
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
this.setBackground$java_awt_Color($I$(14).white);
var fontLabel=Clazz.new_([$I$(8).getString$S("label.font")],$I$(12,1).c$$S);
fontLabel.setFont$java_awt_Font(C$.VERDANA_11PT);
fontLabel.setAlignment$I(2);
this.fontSize.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontSize.addItemListener$java_awt_event_ItemListener(this);
this.fontStyle.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontStyle.addItemListener$java_awt_event_ItemListener(this);
var sizeLabel=Clazz.new_([$I$(8).getString$S("label.size")],$I$(12,1).c$$S);
sizeLabel.setAlignment$I(2);
sizeLabel.setFont$java_awt_Font(C$.VERDANA_11PT);
var styleLabel=Clazz.new_([$I$(8).getString$S("label.style")],$I$(12,1).c$$S);
styleLabel.setAlignment$I(2);
styleLabel.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontName.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontName.addItemListener$java_awt_event_ItemListener(this);
this.scaleAsCdna.setLabel$S($I$(8).getString$S("label.scale_as_cdna"));
this.scaleAsCdna.setFont$java_awt_Font(C$.VERDANA_11PT);
this.scaleAsCdna.addItemListener$java_awt_event_ItemListener(this);
this.scaleAsCdna.setState$Z(this.ap.av.isScaleProteinAsCdna$());
this.fontAsCdna.setLabel$S($I$(8).getString$S("label.font_as_cdna"));
this.fontAsCdna.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontAsCdna.addItemListener$java_awt_event_ItemListener(this);
this.fontAsCdna.setState$Z(this.ap.av.isProteinFontAsCdna$());
this.ok.setFont$java_awt_Font(C$.VERDANA_11PT);
this.ok.setLabel$S($I$(8).getString$S("action.ok"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.FontChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FontChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.FontChooser'].ok_actionPerformed$.apply(this.b$['jalview.appletgui.FontChooser'], []);
});
})()
), Clazz.new_(P$.FontChooser$1.$init$,[this, null])));
this.cancel.setFont$java_awt_Font(C$.VERDANA_11PT);
this.cancel.setLabel$S($I$(8).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.FontChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FontChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.FontChooser'].cancel_actionPerformed$.apply(this.b$['jalview.appletgui.FontChooser'], []);
});
})()
), Clazz.new_(P$.FontChooser$2.$init$,[this, null])));
var fontPanel=Clazz.new_($I$(10,1));
fontPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
var stylePanel=Clazz.new_($I$(10,1));
stylePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
var sizePanel=Clazz.new_($I$(10,1));
sizePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
var scalePanel=Clazz.new_($I$(10,1));
scalePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
var okCancelPanel=Clazz.new_($I$(10,1));
var optionsPanel=Clazz.new_($I$(10,1));
fontPanel.setBackground$java_awt_Color($I$(14).white);
stylePanel.setBackground$java_awt_Color($I$(14).white);
sizePanel.setBackground$java_awt_Color($I$(14).white);
okCancelPanel.setBackground$java_awt_Color($I$(14).white);
optionsPanel.setBackground$java_awt_Color($I$(14).white);
fontPanel.add$java_awt_Component$O(fontLabel, "West");
fontPanel.add$java_awt_Component$O(this.fontName, "Center");
stylePanel.add$java_awt_Component$O(styleLabel, "West");
stylePanel.add$java_awt_Component$O(this.fontStyle, "Center");
sizePanel.add$java_awt_Component$O(sizeLabel, "West");
sizePanel.add$java_awt_Component$O(this.fontSize, "Center");
scalePanel.add$java_awt_Component$O(this.scaleAsCdna, "North");
scalePanel.add$java_awt_Component$O(this.fontAsCdna, "South");
okCancelPanel.add$java_awt_Component$O(this.ok, null);
okCancelPanel.add$java_awt_Component$O(this.cancel, null);
optionsPanel.add$java_awt_Component$O(fontPanel, null);
optionsPanel.add$java_awt_Component$O(sizePanel, null);
optionsPanel.add$java_awt_Component$O(stylePanel, null);
this.add$java_awt_Component$O(optionsPanel, "North");
if (this.ap.alignFrame.getSplitFrame$() != null ) {
this.inSplitFrame=true;
this.oldComplementFont=(this.ap.av.getCodingComplement$()).getFont$();
this.add$java_awt_Component$O(scalePanel, "Center");
}this.add$java_awt_Component$O(okCancelPanel, "South");
}, p$1);

Clazz.newMeth(C$, 'scaleAsCdna_actionPerformed$', function () {
this.ap.av.setScaleProteinAsCdna$Z(this.scaleAsCdna.getState$());
this.ap.av.getCodingComplement$().setScaleProteinAsCdna$Z(this.scaleAsCdna.getState$());
this.changeFont$();
});

C$.$static$=function(){C$.$static$=0;
C$.VERDANA_11PT=Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 0, 11]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
