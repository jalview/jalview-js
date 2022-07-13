(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'java.awt.Font','javax.swing.JComboBox','javax.swing.JMenu','javax.swing.JCheckBoxMenuItem','javax.swing.JLabel','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','java.awt.Color','javax.swing.JButton','jalview.util.MessageManager','javax.swing.JMenuItem',['jalview.util.ImageMaker','.TYPE'],'java.awt.GridLayout','javax.swing.JMenuBar']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GPCAPanel", null, 'javax.swing.JInternalFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xCombobox=Clazz.new_($I$(2,1));
this.yCombobox=Clazz.new_($I$(2,1));
this.zCombobox=Clazz.new_($I$(2,1));
this.viewMenu=Clazz.new_($I$(3,1));
this.showLabels=Clazz.new_($I$(4,1));
this.associateViewsMenu=Clazz.new_($I$(3,1));
this.statusBar=Clazz.new_($I$(5,1));
this.statusPanel=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['O',['xCombobox','javax.swing.JComboBox','+yCombobox','+zCombobox','viewMenu','javax.swing.JMenu','showLabels','javax.swing.JCheckBoxMenuItem','associateViewsMenu','javax.swing.JMenu','statusBar','javax.swing.JLabel','statusPanel','javax.swing.JPanel','originalSeqData','javax.swing.JMenuItem']]
,['O',['VERDANA_12','java.awt.Font']]]

Clazz.newMeth(C$, 'c$',  function () {
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
for (var i=1; i < 8; i++) {
this.xCombobox.addItem$O("dim " + i);
this.yCombobox.addItem$O("dim " + i);
this.zCombobox.addItem$O("dim " + i);
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.setName$S("jalview-pca");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
var jPanel2=Clazz.new_($I$(6,1));
jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
var jLabel1=Clazz.new_($I$(5,1));
jLabel1.setFont$java_awt_Font(C$.VERDANA_12);
jLabel1.setText$S("x=");
var jLabel2=Clazz.new_($I$(5,1));
jLabel2.setFont$java_awt_Font(C$.VERDANA_12);
jLabel2.setText$S("y=");
var jLabel3=Clazz.new_($I$(5,1));
jLabel3.setFont$java_awt_Font(C$.VERDANA_12);
jLabel3.setText$S("z=");
jPanel2.setBackground$java_awt_Color($I$(9).white);
jPanel2.setBorder$javax_swing_border_Border(null);
this.zCombobox.setFont$java_awt_Font(C$.VERDANA_12);
this.zCombobox.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].doDimensionChange$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$1.$init$,[this, null])));
this.yCombobox.setFont$java_awt_Font(C$.VERDANA_12);
this.yCombobox.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].doDimensionChange$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$2.$init$,[this, null])));
this.xCombobox.setFont$java_awt_Font(C$.VERDANA_12);
this.xCombobox.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].doDimensionChange$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$3.$init$,[this, null])));
var resetButton=Clazz.new_($I$(10,1));
resetButton.setFont$java_awt_Font(C$.VERDANA_12);
resetButton.setText$S($I$(11).getString$S("action.reset"));
resetButton.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].resetButton_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$4.$init$,[this, null])));
var fileMenu=Clazz.new_($I$(3,1));
fileMenu.setText$S($I$(11).getString$S("action.file"));
var saveMenu=Clazz.new_($I$(3,1));
saveMenu.setText$S($I$(11).getString$S("action.save_as"));
var eps=Clazz.new_($I$(12,1).c$$S,["EPS"]);
eps.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].makePCAImage$jalview_util_ImageMaker_TYPE.apply(this.b$['jalview.jbgui.GPCAPanel'], [$I$(13).EPS]);
});
})()
), Clazz.new_(P$.GPCAPanel$5.$init$,[this, null])));
var png=Clazz.new_($I$(12,1).c$$S,["PNG"]);
png.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].makePCAImage$jalview_util_ImageMaker_TYPE.apply(this.b$['jalview.jbgui.GPCAPanel'], [$I$(13).PNG]);
});
})()
), Clazz.new_(P$.GPCAPanel$6.$init$,[this, null])));
var outputValues=Clazz.new_($I$(12,1));
outputValues.setText$S($I$(11).getString$S("label.output_values"));
outputValues.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].outputValues_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$7.$init$,[this, null])));
var outputPoints=Clazz.new_($I$(12,1));
outputPoints.setText$S($I$(11).getString$S("label.output_points"));
outputPoints.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].outputPoints_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$8.$init$,[this, null])));
var outputProjPoints=Clazz.new_($I$(12,1));
outputProjPoints.setText$S($I$(11).getString$S("label.output_transformed_points"));
outputProjPoints.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].outputProjPoints_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$9.$init$,[this, null])));
var print=Clazz.new_($I$(12,1));
print.setText$S($I$(11).getString$S("action.print"));
print.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].print_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$10.$init$,[this, null])));
this.viewMenu.setText$S($I$(11).getString$S("action.view"));
this.viewMenu.addMenuListener$javax_swing_event_MenuListener(((P$.GPCAPanel$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].viewMenu_menuSelected$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.GPCAPanel$11.$init$,[this, null])));
this.showLabels.setText$S($I$(11).getString$S("label.show_labels"));
this.showLabels.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].showLabels_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$12.$init$,[this, null])));
var bgcolour=Clazz.new_($I$(12,1));
bgcolour.setText$S($I$(11).getString$S("action.background_colour"));
bgcolour.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].bgcolour_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$13.$init$,[this, null])));
this.originalSeqData=Clazz.new_($I$(12,1));
this.originalSeqData.setText$S($I$(11).getString$S("label.input_data"));
this.originalSeqData.addActionListener$java_awt_event_ActionListener(((P$.GPCAPanel$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "GPCAPanel$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GPCAPanel'].originalSeqData_actionPerformed$.apply(this.b$['jalview.jbgui.GPCAPanel'], []);
});
})()
), Clazz.new_(P$.GPCAPanel$14.$init$,[this, null])));
this.associateViewsMenu.setText$S($I$(11).getString$S("label.associate_nodes_with"));
this.statusPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
this.statusBar.setFont$java_awt_Font(C$.VERDANA_12);
var panelBar=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
panelBar.add$java_awt_Component$O(jPanel2, "North");
panelBar.add$java_awt_Component$O(this.statusPanel, "South");
this.getContentPane$().add$java_awt_Component$O(panelBar, "South");
jPanel2.add$java_awt_Component$O(jLabel1, null);
jPanel2.add$java_awt_Component$O(this.xCombobox, null);
jPanel2.add$java_awt_Component$O(jLabel2, null);
jPanel2.add$java_awt_Component$O(this.yCombobox, null);
jPanel2.add$java_awt_Component$O(jLabel3, null);
jPanel2.add$java_awt_Component$O(this.zCombobox, null);
jPanel2.add$java_awt_Component$O(resetButton, null);
var jMenuBar1=Clazz.new_($I$(15,1));
jMenuBar1.add$javax_swing_JMenu(fileMenu);
jMenuBar1.add$javax_swing_JMenu(this.viewMenu);
this.setJMenuBar$javax_swing_JMenuBar(jMenuBar1);
fileMenu.add$javax_swing_JMenuItem(saveMenu);
fileMenu.add$javax_swing_JMenuItem(outputValues);
fileMenu.add$javax_swing_JMenuItem(print);
fileMenu.add$javax_swing_JMenuItem(this.originalSeqData);
fileMenu.add$javax_swing_JMenuItem(outputPoints);
fileMenu.add$javax_swing_JMenuItem(outputProjPoints);
saveMenu.add$javax_swing_JMenuItem(eps);
saveMenu.add$javax_swing_JMenuItem(png);
this.viewMenu.add$javax_swing_JMenuItem(this.showLabels);
this.viewMenu.add$javax_swing_JMenuItem(bgcolour);
this.viewMenu.add$javax_swing_JMenuItem(this.associateViewsMenu);
}, p$1);

Clazz.newMeth(C$, 'resetButton_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'outputPoints_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'outputProjPoints_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'makePCAImage$jalview_util_ImageMaker_TYPE',  function (imageType) {
});

Clazz.newMeth(C$, 'outputValues_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'print_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'showLabels_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'bgcolour_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'originalSeqData_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'viewMenu_menuSelected$',  function () {
});

Clazz.newMeth(C$, 'doDimensionChange$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.VERDANA_12=Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 0, 12]);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
