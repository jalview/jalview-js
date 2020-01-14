(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'java.awt.Font','javax.swing.JComboBox','javax.swing.JButton','javax.swing.JCheckBox','java.awt.Color','javax.swing.JLabel','jalview.util.MessageManager','java.awt.Dimension','jalview.gui.JvSwingUtils','java.awt.Rectangle','javax.swing.JPanel','java.awt.BorderLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GFontChooser", null, 'javax.swing.JPanel');
C$.VERDANA_11PT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.VERDANA_11PT=Clazz.new_($I$(1).c$$S$I$I,["Verdana", 0, 11]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fontSize=null;
this.fontStyle=null;
this.fontName=null;
this.defaultButton=null;
this.smoothFont=null;
this.monospaced=null;
this.scaleAsCdna=null;
this.fontAsCdna=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fontSize=Clazz.new_($I$(2));
this.fontStyle=Clazz.new_($I$(2));
this.fontName=Clazz.new_($I$(2));
this.defaultButton=Clazz.new_($I$(3));
this.smoothFont=Clazz.new_($I$(4));
this.monospaced=Clazz.new_($I$(4));
this.scaleAsCdna=Clazz.new_($I$(4));
this.fontAsCdna=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(null);
this.setBackground$java_awt_Color($I$(5).white);
var fontLabel=Clazz.new_($I$(6).c$$S,[$I$(7).getString$S("label.font")]);
fontLabel.setFont$java_awt_Font(C$.VERDANA_11PT);
fontLabel.setHorizontalAlignment$I(4);
fontLabel.setVerticalTextPosition$I(0);
this.fontSize.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontSize.setOpaque$Z(false);
this.fontSize.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[50, 21]));
this.fontSize.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$1||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].fontSize_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$1.$init$, [this, null])));
this.fontStyle.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontStyle.setOpaque$Z(false);
this.fontStyle.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[90, 21]));
this.fontStyle.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$2||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].fontStyle_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$2.$init$, [this, null])));
var sizeLabel=Clazz.new_($I$(6).c$$S,[$I$(7).getString$S("label.size")]);
sizeLabel.setFont$java_awt_Font(C$.VERDANA_11PT);
sizeLabel.setHorizontalAlignment$I(4);
sizeLabel.setVerticalTextPosition$I(0);
var styleLabel=Clazz.new_($I$(6).c$$S,[$I$(7).getString$S("label.style")]);
styleLabel.setFont$java_awt_Font(C$.VERDANA_11PT);
styleLabel.setHorizontalAlignment$I(4);
styleLabel.setVerticalTextPosition$I(0);
this.fontName.setFont$java_awt_Font(C$.VERDANA_11PT);
this.fontName.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[32767, 32767]));
this.fontName.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[300, 21]));
this.fontName.setOpaque$Z(false);
this.fontName.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[180, 21]));
this.fontName.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$3||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].fontName_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$3.$init$, [this, null])));
var ok=Clazz.new_($I$(3).c$$S,[$I$(7).getString$S("action.ok")]);
ok.setFont$java_awt_Font(C$.VERDANA_11PT);
ok.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$4||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].ok_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$4.$init$, [this, null])));
var cancel=Clazz.new_($I$(3).c$$S,[$I$(7).getString$S("action.cancel")]);
cancel.setFont$java_awt_Font(C$.VERDANA_11PT);
cancel.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$5||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].cancel_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$5.$init$, [this, null])));
this.defaultButton.setFont$java_awt_Font($I$(9).getLabelFont$());
this.defaultButton.setText$S($I$(7).getString$S("label.set_as_default"));
this.defaultButton.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$6||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].defaultButton_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$6.$init$, [this, null])));
this.smoothFont.setFont$java_awt_Font($I$(9).getLabelFont$());
this.smoothFont.setOpaque$Z(false);
this.smoothFont.setText$S($I$(7).getString$S("label.anti_alias_fonts"));
this.smoothFont.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[1, 65, 300, 23]));
this.smoothFont.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$7||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].smoothFont_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$7.$init$, [this, null])));
this.scaleAsCdna.setVisible$Z(false);
this.scaleAsCdna.setFont$java_awt_Font($I$(9).getLabelFont$());
this.scaleAsCdna.setOpaque$Z(false);
this.scaleAsCdna.setText$S($I$(7).getString$S("label.scale_as_cdna"));
this.scaleAsCdna.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[1, 85, 300, 23]));
this.scaleAsCdna.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$8||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].scaleAsCdna_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$8.$init$, [this, null])));
this.fontAsCdna.setVisible$Z(false);
this.fontAsCdna.setFont$java_awt_Font($I$(9).getLabelFont$());
this.fontAsCdna.setOpaque$Z(false);
this.fontAsCdna.setText$S($I$(7).getString$S("label.font_as_cdna"));
this.fontAsCdna.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[1, 105, 350, 23]));
this.fontAsCdna.addActionListener$java_awt_event_ActionListener(((P$.GFontChooser$9||
(function(){var C$=Clazz.newClass(P$, "GFontChooser$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GFontChooser'].mirrorFonts_actionPerformed$.apply(this.b$['jalview.jbgui.GFontChooser'], []);
});
})()
), Clazz.new_(P$.GFontChooser$9.$init$, [this, null])));
this.monospaced.setEnabled$Z(false);
this.monospaced.setFont$java_awt_Font($I$(9).getLabelFont$());
this.monospaced.setOpaque$Z(false);
this.monospaced.setToolTipText$S($I$(7).getString$S("label.monospaced_fonts_faster_to_render"));
this.monospaced.setText$S($I$(7).getString$S("label.monospaced_font"));
var jPanel1=Clazz.new_($I$(11));
jPanel1.setOpaque$Z(false);
jPanel1.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[5, 6, 308, 23]));
jPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12)));
jPanel1.add$java_awt_Component$O(fontLabel, "West");
jPanel1.add$java_awt_Component$O(this.fontName, "Center");
jPanel1.add$java_awt_Component$O(this.monospaced, "East");
var jPanel2=Clazz.new_($I$(11));
jPanel2.setOpaque$Z(false);
jPanel2.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[5, 37, 128, 21]));
jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12)));
jPanel2.add$java_awt_Component$O(this.fontSize, "Center");
jPanel2.add$java_awt_Component$O(sizeLabel, "West");
var jPanel3=Clazz.new_($I$(11));
jPanel3.setOpaque$Z(false);
jPanel3.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[174, 38, 134, 21]));
jPanel3.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12)));
jPanel3.add$java_awt_Component$O(styleLabel, "West");
jPanel3.add$java_awt_Component$O(this.fontStyle, "Center");
var jPanel4=Clazz.new_($I$(11));
jPanel4.setOpaque$Z(false);
jPanel4.setBounds$java_awt_Rectangle(Clazz.new_($I$(10).c$$I$I$I$I,[24, 132, 300, 35]));
jPanel4.add$java_awt_Component(this.defaultButton);
jPanel4.add$java_awt_Component(ok);
jPanel4.add$java_awt_Component(cancel);
this.add$java_awt_Component(this.smoothFont);
this.add$java_awt_Component(this.scaleAsCdna);
this.add$java_awt_Component(this.fontAsCdna);
this.add$java_awt_Component$O(jPanel3, null);
this.add$java_awt_Component$O(jPanel2, null);
this.add$java_awt_Component(jPanel4);
this.add$java_awt_Component$O(jPanel1, null);
}, p$1);

Clazz.newMeth(C$, 'mirrorFonts_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'scaleAsCdna_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'ok_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'fontName_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'fontSize_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'fontStyle_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'defaultButton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'smoothFont_actionPerformed$', function () {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
