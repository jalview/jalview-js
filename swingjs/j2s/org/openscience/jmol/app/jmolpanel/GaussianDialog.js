(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'org.jmol.i18n.GT','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JSplitPane','javax.swing.BorderFactory','java.awt.GridLayout','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JComboBox','javax.swing.SpinnerNumberModel','javax.swing.JSpinner',['javax.swing.JSpinner','.NumberEditor'],'javax.swing.JTextPane','java.awt.Font','javax.swing.JScrollPane','java.awt.Dimension','java.awt.FlowLayout','java.io.File','javax.swing.JButton','java.io.BufferedWriter','java.io.FileWriter','javax.swing.JFileChooser','javajs.util.PT','org.jmol.viewer.Viewer','javax.swing.SwingUtilities']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GaussianDialog", null, 'javax.swing.JDialog', ['java.awt.event.ActionListener', 'javax.swing.event.ChangeListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['iscroll'],'S',['check','mem','proc','file','meth','route','charge','mult','select'],'O',['vwr','org.jmol.viewer.Viewer','container','javax.swing.JPanel','checkField','javax.swing.JTextField','+optsField','+fileField','+selectField','memBox','javax.swing.JComboBox','+methBox','+basisBox','+dfBox','procSpinner','javax.swing.JSpinner','+chargeSpinner','+multSpinner','fileButton','javax.swing.JButton','+saveButton','+closeButton','+refreshButton','fileChooser','javax.swing.JFileChooser','editArea','javax.swing.JTextPane','editPane','javax.swing.JScrollPane']]
,['O',['BASIS_LIST','String[]','+METHOD_LIST','+DF_LIST','+MEMORY_LIST']]]

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$org_jmol_viewer_Viewer', function (f, vwr) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[f, false]);C$.$init$.apply(this);
this.vwr=vwr;
this.setTitle$S($I$(1).$$S("Create Gaussian Input File"));
this.container=Clazz.new_($I$(2,1));
this.container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
var basicPanel=p$1.buildBasicPanel.apply(this, []);
var advancedPanel=p$1.buildAdvancedPanel.apply(this, []);
var filePanel=p$1.buildFilePanel.apply(this, []);
var buttonPanel=p$1.buildButtonPanel.apply(this, []);
var splitPane=Clazz.new_($I$(4,1).c$$I$java_awt_Component$java_awt_Component,[1, basicPanel, advancedPanel]);
this.container.add$java_awt_Component$O(splitPane, "North");
this.container.add$java_awt_Component$O(filePanel, "Center");
this.container.add$java_awt_Component$O(buttonPanel, "South");
this.getContentPane$().add$java_awt_Component(this.container);
this.pack$();
this.centerDialog$();
p$1.updateUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'buildBasicPanel', function () {
var showPanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var linkPanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var linkTitle=$I$(5).createTitledBorder$S("link0 Section");
linkPanel.setBorder$javax_swing_border_Border(linkTitle);
var linkLabels=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[3, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var linkControls=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[3, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var checkLabel=Clazz.new_([$I$(1).$$S("Checkpoint File: ")],$I$(7,1).c$$S);
linkLabels.add$java_awt_Component(checkLabel);
this.checkField=Clazz.new_($I$(8,1).c$$I,[20]);
linkControls.add$java_awt_Component(this.checkField);
this.checkField.addActionListener$java_awt_event_ActionListener(this);
var memLabel=Clazz.new_([$I$(1).$$S("Memory:")],$I$(7,1).c$$S);
linkLabels.add$java_awt_Component(memLabel);
this.memBox=Clazz.new_($I$(9,1).c$$OA,[C$.MEMORY_LIST]);
linkControls.add$java_awt_Component(this.memBox);
this.memBox.setSelectedIndex$I(0);
this.memBox.addActionListener$java_awt_event_ActionListener(this);
var procLabel=Clazz.new_([$I$(1).$$S("Processors:")],$I$(7,1).c$$S);
linkLabels.add$java_awt_Component(procLabel);
var procModel=Clazz.new_($I$(10,1).c$$I$I$I$I,[1, 1, 16, 1]);
this.procSpinner=Clazz.new_($I$(11,1).c$$javax_swing_SpinnerModel,[procModel]);
this.procSpinner.setEditor$javax_swing_JComponent(Clazz.new_($I$(12,1).c$$javax_swing_JSpinner$S,[this.procSpinner, "#"]));
linkControls.add$java_awt_Component(this.procSpinner);
this.procSpinner.addChangeListener$javax_swing_event_ChangeListener(this);
linkPanel.add$java_awt_Component$O(linkLabels, "Before");
linkPanel.add$java_awt_Component$O(linkControls, "Center");
showPanel.add$java_awt_Component$O(linkPanel, "North");
var routePanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var routeTitle=$I$(5,"createTitledBorder$S",[$I$(1).$$S("Route")]);
routePanel.setBorder$javax_swing_border_Border(routeTitle);
var routeLabels=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[4, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var routeControls=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[4, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var methLabel=Clazz.new_([$I$(1).$$S("Method: ")],$I$(7,1).c$$S);
routeLabels.add$java_awt_Component(methLabel);
this.methBox=Clazz.new_($I$(9,1).c$$OA,[C$.METHOD_LIST]);
routeControls.add$java_awt_Component(this.methBox);
this.methBox.setSelectedIndex$I(0);
this.methBox.addActionListener$java_awt_event_ActionListener(this);
var basisLabel=Clazz.new_([$I$(1).$$S("Basis Set: ")],$I$(7,1).c$$S);
routeLabels.add$java_awt_Component(basisLabel);
this.basisBox=Clazz.new_($I$(9,1).c$$OA,[C$.BASIS_LIST]);
routeControls.add$java_awt_Component(this.basisBox);
this.basisBox.setSelectedIndex$I(3);
this.basisBox.addActionListener$java_awt_event_ActionListener(this);
var dfLabel=Clazz.new_([$I$(1).$$S("DFT Density Fit: ")],$I$(7,1).c$$S);
routeLabels.add$java_awt_Component(dfLabel);
this.dfBox=Clazz.new_($I$(9,1).c$$OA,[C$.DF_LIST]);
routeControls.add$java_awt_Component(this.dfBox);
this.dfBox.setSelectedIndex$I(0);
this.dfBox.addActionListener$java_awt_event_ActionListener(this);
var optsLabel=Clazz.new_([$I$(1).$$S("Job Options: ")],$I$(7,1).c$$S);
routeLabels.add$java_awt_Component(optsLabel);
this.optsField=Clazz.new_($I$(8,1).c$$I,[20]);
routeControls.add$java_awt_Component(this.optsField);
this.optsField.setText$S("opt pop=full gfprint");
this.optsField.addActionListener$java_awt_event_ActionListener(this);
routePanel.add$java_awt_Component$O(routeLabels, "Before");
routePanel.add$java_awt_Component$O(routeControls, "Center");
showPanel.add$java_awt_Component$O(routePanel, "Center");
var molPanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var molTitle=$I$(5,"createTitledBorder$S",[$I$(1).$$S("Molecular Properties")]);
molPanel.setBorder$javax_swing_border_Border(molTitle);
var molLabels=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[3, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var molControls=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[3, 1])],$I$(2,1).c$$java_awt_LayoutManager);
var chargeLabel=Clazz.new_([$I$(1).$$S("Total Charge: ")],$I$(7,1).c$$S);
molLabels.add$java_awt_Component(chargeLabel);
var chargeModel=Clazz.new_($I$(10,1).c$$I$I$I$I,[0, -10, 10, 1]);
this.chargeSpinner=Clazz.new_($I$(11,1).c$$javax_swing_SpinnerModel,[chargeModel]);
this.chargeSpinner.setEditor$javax_swing_JComponent(Clazz.new_($I$(12,1).c$$javax_swing_JSpinner$S,[this.chargeSpinner, "#"]));
molControls.add$java_awt_Component(this.chargeSpinner);
this.chargeSpinner.addChangeListener$javax_swing_event_ChangeListener(this);
var multLabel=Clazz.new_([$I$(1).$$S("Multiplicity: ")],$I$(7,1).c$$S);
molLabels.add$java_awt_Component(multLabel);
var multModel=Clazz.new_($I$(10,1).c$$I$I$I$I,[1, 0, 10, 1]);
this.multSpinner=Clazz.new_($I$(11,1).c$$javax_swing_SpinnerModel,[multModel]);
this.multSpinner.setEditor$javax_swing_JComponent(Clazz.new_($I$(12,1).c$$javax_swing_JSpinner$S,[this.multSpinner, "#"]));
molControls.add$java_awt_Component(this.multSpinner);
this.multSpinner.addChangeListener$javax_swing_event_ChangeListener(this);
molPanel.add$java_awt_Component$O(molLabels, "Before");
molPanel.add$java_awt_Component$O(molControls, "Center");
showPanel.add$java_awt_Component$O(molPanel, "South");
return showPanel;
}, p$1);

Clazz.newMeth(C$, 'buildAdvancedPanel', function () {
var editPanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var editTitle=$I$(5).createTitledBorder$S("Edit Gaussian Input File");
editPanel.setBorder$javax_swing_border_Border(editTitle);
this.editArea=Clazz.new_($I$(13,1));
this.editArea.setContentType$S("text/html");
this.editArea.setFont$java_awt_Font(Clazz.new_($I$(14,1).c$$S$I$I,["Monospaced", 0, 8]));
this.editArea.addMouseListener$java_awt_event_MouseListener(this);
this.editPane=Clazz.new_($I$(15,1).c$$java_awt_Component,[this.editArea]);
this.editPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[150, 100]));
editPanel.add$java_awt_Component$O(this.editPane, "Center");
return editPanel;
}, p$1);

Clazz.newMeth(C$, 'buildFilePanel', function () {
var showPanel=Clazz.new_([Clazz.new_($I$(17,1).c$$I,[2])],$I$(2,1).c$$java_awt_LayoutManager);
var fileTitle=$I$(5,"createTitledBorder$S",[$I$(1).$$S("Gaussian Input File Name")]);
showPanel.setBorder$javax_swing_border_Border(fileTitle);
this.fileField=Clazz.new_($I$(8,1).c$$I,[30]);
showPanel.add$java_awt_Component(this.fileField);
this.fileField.setText$S(Clazz.new_($I$(18,1).c$$S,["my_input.com"]).getAbsolutePath$());
this.fileButton=Clazz.new_([$I$(1).$$S("File...")],$I$(19,1).c$$S);
this.fileButton.addActionListener$java_awt_event_ActionListener(this);
showPanel.add$java_awt_Component(this.fileButton);
return showPanel;
}, p$1);

Clazz.newMeth(C$, 'buildButtonPanel', function () {
var buttonPanel=Clazz.new_($I$(2,1));
buttonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17,1).c$$I,[2]));
var selectLabel=Clazz.new_([$I$(1).$$S("Selection: ")],$I$(7,1).c$$S);
buttonPanel.add$java_awt_Component(selectLabel);
this.selectField=Clazz.new_($I$(8,1).c$$I,[20]);
this.selectField.setText$S("visible");
buttonPanel.add$java_awt_Component(this.selectField);
this.selectField.addActionListener$java_awt_event_ActionListener(this);
this.refreshButton=Clazz.new_([$I$(1).$$S("Refresh")],$I$(19,1).c$$S);
this.refreshButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.refreshButton);
this.saveButton=Clazz.new_([$I$(1).$$S("Save")],$I$(19,1).c$$S);
this.saveButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.saveButton);
this.closeButton=Clazz.new_([$I$(1).$$S("Close")],$I$(19,1).c$$S);
this.closeButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.closeButton);
this.getRootPane$().setDefaultButton$javax_swing_JButton(this.saveButton);
return buttonPanel;
}, p$1);

Clazz.newMeth(C$, 'centerDialog$', function () {
var screenSize=this.getToolkit$().getScreenSize$();
var size=this.getSize$();
screenSize.height=(screenSize.height/2|0);
screenSize.width=(screenSize.width/2|0);
size.height=(size.height/2|0);
size.width=(size.width/2|0);
var y=screenSize.height - size.height;
var x=screenSize.width - size.width;
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'updateVars', function () {
this.check=this.checkField.getText$();
this.mem=this.memBox.getSelectedItem$().toString();
this.proc=this.procSpinner.getValue$().toString();
this.select=this.selectField.getText$();
if (this.select.length$() == 0) {
this.select="visible";
this.selectField.setText$S(this.select);
}this.charge=this.chargeSpinner.getValue$().toString();
if (this.charge.equals$O("")) this.charge="0";
this.mult=this.multSpinner.getValue$().toString();
if (this.mult.equals$O("")) this.mult="1";
var basis=this.basisBox.getSelectedItem$();
if (basis.equals$O("")) basis="3-21G**";
this.meth=this.methBox.getSelectedItem$().toString();
if (this.meth.equals$O("")) this.meth="HF";
if ("AM1 PM3 CNDO INDO MNDO MINDO3 ZINDO UFF AMBER DREIDING Huckel".lastIndexOf$S$I(this.meth, "AM1 PM3 CNDO INDO MNDO MINDO3 ZINDO UFF AMBER DREIDING Huckel".length$()) >= 0) basis="";
if (!basis.equals$O("")) basis="/" + basis;
var df=this.dfBox.getSelectedItem$().toString();
if ("LSDA BLYP BP86 BPW91 OLYP OP86 OPW91 PBEPBE VSXC HCTH93 NCTH147 HCTH407 TPSSTPSS B3LYP B3PW91".lastIndexOf$S$I(this.meth, "LSDA BLYP BP86 BPW91 OLYP OP86 OPW91 PBEPBE VSXC HCTH93 NCTH147 HCTH407 TPSSTPSS B3LYP B3PW91".length$()) < 0) df="None";
if (df.equals$O("None")) {
df="";
} else {
df="/" + df;
}this.file=this.fileField.getText$();
if (this.file.equals$O("")) this.file="my_input.com";
var opts=this.optsField.getText$();
this.route="# " + this.meth + basis + df + " " + opts ;
}, p$1);

Clazz.newMeth(C$, 'updateUI', function () {
p$1.updateVars.apply(this, []);
if ("AM1 PM3 CNDO INDO MNDO MINDO3 ZINDO UFF AMBER DREIDING Huckel".lastIndexOf$S$I(this.meth, "AM1 PM3 CNDO INDO MNDO MINDO3 ZINDO UFF AMBER DREIDING Huckel".length$()) >= 0) {
this.basisBox.setEnabled$Z(false);
} else {
this.basisBox.setEnabled$Z(true);
}if ("LSDA BLYP BP86 BPW91 OLYP OP86 OPW91 PBEPBE VSXC HCTH93 NCTH147 HCTH407 TPSSTPSS B3LYP B3PW91".lastIndexOf$S$I(this.meth, "LSDA BLYP BP86 BPW91 OLYP OP86 OPW91 PBEPBE VSXC HCTH93 NCTH147 HCTH407 TPSSTPSS B3LYP B3PW91".length$()) >= 0) {
this.dfBox.setEnabled$Z(true);
} else {
this.dfBox.setEnabled$Z(false);
}this.getCommand$I$Z(-2, true);
return;
}, p$1);

Clazz.newMeth(C$, 'save', function () {
var output=null;
try {
var s=this.editArea.getText$();
if (s.indexOf$S("<pre>") < 0) {
this.getCommand$I$Z(-1, true);
s=this.editArea.getText$();
}var outputFile=Clazz.new_([this.fileField.getText$()],$I$(18,1).c$$S);
this.fileField.setText$S(outputFile.getAbsolutePath$());
output=Clazz.new_([Clazz.new_($I$(21,1).c$$java_io_File,[outputFile])],$I$(20,1).c$$java_io_Writer);
output.write$S(this.asHTML$S$Z(s, false));
output.close$();
} catch (err) {
if (Clazz.exceptionOf(err,"Exception")){
return;
} else {
throw err;
}
}
}, p$1);

Clazz.newMeth(C$, 'cancel', function () {
this.dispose$();
}, p$1);

Clazz.newMeth(C$, 'dispose$', function () {
this.vwr.script$S("select off");
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'setFile', function () {
this.fileChooser=Clazz.new_($I$(22,1));
var fname=this.fileField.getText$();
this.fileChooser.setSelectedFile$java_io_File(Clazz.new_($I$(18,1).c$$S,[fname]));
var ierr=this.fileChooser.showDialog$java_awt_Component$S(this, "Set");
if (ierr == 0) {
var file=this.fileChooser.getSelectedFile$();
this.fileField.setText$S(file.getAbsolutePath$());
}}, p$1);

Clazz.newMeth(C$, 'getCommand$I$Z', function (iAtom, doScroll) {
p$1.updateVars.apply(this, []);
var c=this.check;
if (!c.equals$O("")) c="%chk=" + c + "\n" ;
var m=this.mem;
if (!m.equals$O("Default")) {
m="%mem=" + m + "\n" ;
} else {
m="";
}var p=this.proc;
if (!p.equals$O("1")) {
p="%nproc=" + p + "\n" ;
} else {
p="";
}var format="USER:%-2e %10.5x %10.5y %10.5z";
var data=this.vwr.getData$S$S(this.select, format);
this.iscroll=0;
if (iAtom >= 0) {
var a=this.vwr.getData$S$S("atomIndex=" + iAtom, format);
this.iscroll=data.indexOf$S(a);
if (this.iscroll >= 0) {
data=$I$(23,"rep$S$S$S",[data, a, "<b><font color=\"red\">" + $I$(23).rep$S$S$S(a, "\n", "") + "&#160;&#160;&lt;&lt;&lt;</font></b>\n" ]);
}var mm=this.editPane.getVerticalScrollBar$().getMaximum$();
this.iscroll=((this.iscroll * 1.0 / data.length$() * mm)|0);
} else if (iAtom == -1) {
this.iscroll=-1;
}if (!doScroll) this.iscroll=this.editPane.getVerticalScrollBar$().getValue$();
this.editArea.setText$S(this.asHTML$S$Z(c + m + p + this.route + "\n\n" + "Title: <b>Created by Jmol</b> version " + $I$(24).getJmolVersion$() + "\n\n" + this.charge + " " + this.mult + "\n" + data + "\n" , true));
if (this.iscroll >= 0) $I$(25,"invokeLater$Runnable",[((P$.GaussianDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GaussianDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].editPane.getVerticalScrollBar$().setValue$I(this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].iscroll);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].editPane.getVerticalScrollBar$().setValue$I(0);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.GaussianDialog$1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'asHTML$S$Z', function (s, toHTML) {
if (toHTML) return "<html><small><pre>" + s + "</pre></small></html>" ;
if (s.indexOf$S("<pre>") >= 0) {
s=$I$(23).rep$S$S$S(s, "<b>", "");
s=$I$(23).rep$S$S$S(s, "</b>", "");
s=$I$(23,"rep$S$S$S",[s, "<font color=\"red\">", ""]);
s=$I$(23).rep$S$S$S(s, "</font>", "");
s=$I$(23).rep$S$S$S(s, "&lt;", "");
s=$I$(23).rep$S$S$S(s, "&#160;", "");
s=$I$(23).split$S$S(s, "<pre>")[1];
s=$I$(23).split$S$S(s, "</pre>")[0];
}return s.trim$() + "\n";
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (event) {
var c=event.getSource$();
if (c === this.saveButton ) {
p$1.save.apply(this, []);
} else if (c === this.closeButton ) {
p$1.cancel.apply(this, []);
} else if (c === this.fileButton ) {
p$1.setFile.apply(this, []);
} else if (c === this.refreshButton ) {
this.getCommand$I$Z(-2, true);
} else {
p$1.updateUI.apply(this, []);
}});

Clazz.newMeth(C$, 'updateModel$I', function (iAtom) {
this.getCommand$I$Z(iAtom, true);
if (iAtom >= 0) this.vwr.script$S("select on atomindex=" + iAtom);
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this.getCommand$I$Z(-2, true);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this.editArea ) {
$I$(25,"invokeLater$Runnable",[((P$.GaussianDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GaussianDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
var s=this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].asHTML$S$Z.apply(this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'], [this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].editArea.getText$(), false]);
var pt=this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].editArea.getCaretPosition$();
var i0=s.lastIndexOf$S$I("\n", pt) + 5;
var i1=s.indexOf$S$I("\n", pt);
var coord=s.substring$I$I(i0, i1);
if (Float.isNaN$F($I$(23).parseFloat$S(coord))) return;
this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].vwr.scriptWait$S("select on within(0.1,{" + coord + "})" );
this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].getCommand$I$Z.apply(this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'], [this.b$['org.openscience.jmol.app.jmolpanel.GaussianDialog'].vwr.bsA$().nextSetBit$I(0), false]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.GaussianDialog$2.$init$,[this, null]))]);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
});

C$.$static$=function(){C$.$static$=0;
C$.BASIS_LIST=Clazz.array(String, -1, ["Gen", "3-21G", "3-21G*", "3-21G**", "6-21G", "4-31G", "6-31G", "6-311G", "D95V", "D95", "SHC", "CEP-4G", "CEP-31G", "CEP-121G", "LanL2MB", "LanL2DZ", "SDD", "SDDAll", "cc-pVDZ", "cc-pVTZ", "cc-pVQZ", "cc-pV5Z", "cc-pV6Z", "aug-cc-pVDZ", "aug-cc-pVTZ", "aug-cc-pVQZ", "aug-cc-pV5Z", "aug-cc-pV6Z", "SV", "SVP", "TZV", "TZVP", "MidiX", "EPR-II", "EPR-III", "UGBS", "UGBS1P", "UGBS2P", "UGBS3P", "MTSmall", "DGDZVP", "DGDZVP2", "DGTZVP"]);
C$.METHOD_LIST=Clazz.array(String, -1, ["HF", "MP2", "MP3", "MP4", "CCSD(T)", "CIS", "CISD", "LSDA", "BLYP", "BP86", "BPW91", "OLYP", "OP86", "OPW91", "PBEPBE", "VSXC", "HCTH93", "HCTH147", "HCTH407", "TPSSTPSS", "B3LYP", "B3PW91", "AM1", "PM3", "CNDO", "INDO", "MNDO", "MINDO3", "ZINDO", "UFF", "AMBER", "DREIDING", "Huckel"]);
C$.DF_LIST=Clazz.array(String, -1, ["None", "Auto", "DGA1", "DGA2"]);
C$.MEMORY_LIST=Clazz.array(String, -1, ["Default", "100MB", "500MB", "1GB", "2GB", "4GB", "7GB", "15GB"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
