(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JTextField','javax.swing.JButton','javax.swing.JLabel','javax.swing.JPanel','java.awt.GridBagLayout','jalview.gui.JvSwingUtils','java.awt.Rectangle','java.awt.event.KeyAdapter','jalview.util.MessageManager','java.awt.Font','javax.swing.BorderFactory','java.awt.GridBagConstraints','java.awt.Insets','jalview.util.UrlLink','jalview.gui.JvOptionPane','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GSequenceLink", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nameTB=Clazz.new_($I$(1,1));
this.urlTB=Clazz.new_($I$(1,1));
this.insertSeq=Clazz.new_($I$(2,1));
this.insertDBAcc=Clazz.new_($I$(2,1));
this.insert=Clazz.new_($I$(3,1));
this.jLabel1=Clazz.new_($I$(3,1));
this.jLabel2=Clazz.new_($I$(3,1));
this.jLabel3=Clazz.new_($I$(3,1));
this.jLabel4=Clazz.new_($I$(3,1));
this.jLabel5=Clazz.new_($I$(3,1));
this.jLabel6=Clazz.new_($I$(3,1));
this.jPanel1=Clazz.new_($I$(4,1));
this.gridBagLayout1=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['nameTB','javax.swing.JTextField','+urlTB','insertSeq','javax.swing.JButton','+insertDBAcc','insert','javax.swing.JLabel','+jLabel1','+jLabel2','+jLabel3','+jLabel4','+jLabel5','+jLabel6','jPanel1','javax.swing.JPanel','gridBagLayout1','java.awt.GridBagLayout']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.setLayout$java_awt_LayoutManager(this.gridBagLayout1);
this.nameTB.setFont$java_awt_Font($I$(6).getLabelFont$());
this.nameTB.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[77, 10, 310, 23]));
this.nameTB.addKeyListener$java_awt_event_KeyListener(((P$.GSequenceLink$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSequenceLink$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.jbgui.GSequenceLink'].nameTB_keyTyped$java_awt_event_KeyEvent.apply(this.b$['jalview.jbgui.GSequenceLink'], [e]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.GSequenceLink$1)));
this.urlTB.setFont$java_awt_Font($I$(6).getLabelFont$());
this.urlTB.setText$S("http://");
this.urlTB.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[78, 40, 309, 23]));
this.urlTB.addKeyListener$java_awt_event_KeyListener(((P$.GSequenceLink$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSequenceLink$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.jbgui.GSequenceLink'].urlTB_keyTyped$java_awt_event_KeyEvent.apply(this.b$['jalview.jbgui.GSequenceLink'], [e]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.GSequenceLink$2)));
this.insertSeq.setLocation$I$I(77, 75);
this.insertSeq.setSize$I$I(141, 24);
this.insertSeq.setText$S($I$(9).getString$S("action.seq_id"));
this.insertSeq.addActionListener$java_awt_event_ActionListener(((P$.GSequenceLink$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSequenceLink$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GSequenceLink'].insertSeq_action$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GSequenceLink'], [e]);
});
})()
), Clazz.new_(P$.GSequenceLink$3.$init$,[this, null])));
this.insertDBAcc.setLocation$I$I(210, 75);
this.insertDBAcc.setSize$I$I(141, 24);
this.insertDBAcc.setText$S($I$(9).getString$S("action.db_acc"));
this.insertDBAcc.addActionListener$java_awt_event_ActionListener(((P$.GSequenceLink$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSequenceLink$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GSequenceLink'].insertDBAcc_action$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GSequenceLink'], [e]);
});
})()
), Clazz.new_(P$.GSequenceLink$4.$init$,[this, null])));
this.insert.setText$S($I$(9).getString$S("label.insert"));
this.insert.setFont$java_awt_Font($I$(6).getLabelFont$());
this.insert.setHorizontalAlignment$I(4);
this.insert.setBounds$I$I$I$I(17, 78, 58, 16);
this.jLabel1.setFont$java_awt_Font($I$(6).getLabelFont$());
this.jLabel1.setHorizontalAlignment$I(11);
this.jLabel1.setText$S($I$(9).getString$S("label.link_name"));
this.jLabel1.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 10, 71, 24]));
this.jLabel2.setFont$java_awt_Font($I$(6).getLabelFont$());
this.jLabel2.setHorizontalAlignment$I(11);
this.jLabel2.setText$S($I$(9).getString$S("label.url:"));
this.jLabel2.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[17, 37, 54, 27]));
this.jLabel3.setFont$java_awt_Font(Clazz.new_($I$(10,1).c$$S$I$I,["Verdana", 2, 11]));
this.jLabel3.setText$S($I$(9).getString$S("label.use_sequence_id_1"));
this.jLabel3.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[21, 102, 351, 15]));
this.jLabel4.setFont$java_awt_Font(Clazz.new_($I$(10,1).c$$S$I$I,["Verdana", 2, 11]));
this.jLabel4.setText$S($I$(9).getString$S("label.use_sequence_id_2"));
this.jLabel4.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[21, 118, 351, 15]));
this.jLabel5.setFont$java_awt_Font(Clazz.new_($I$(10,1).c$$S$I$I,["Verdana", 2, 11]));
this.jLabel5.setText$S($I$(9).getString$S("label.use_sequence_id_3"));
this.jLabel5.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[21, 136, 351, 15]));
var lastLabel=$I$(9).getString$S("label.use_sequence_id_4");
if (lastLabel.length$() > 0) {
this.jLabel6.setFont$java_awt_Font(Clazz.new_($I$(10,1).c$$S$I$I,["Verdana", 2, 11]));
this.jLabel6.setText$S(lastLabel);
this.jLabel6.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[21, 152, 351, 15]));
}this.jPanel1.setBorder$javax_swing_border_Border($I$(11).createEtchedBorder$());
this.jPanel1.setLayout$java_awt_LayoutManager(null);
this.jPanel1.add$java_awt_Component(this.jLabel1);
this.jPanel1.add$java_awt_Component(this.nameTB);
this.jPanel1.add$java_awt_Component(this.urlTB);
this.jPanel1.add$java_awt_Component(this.insertSeq);
this.jPanel1.add$java_awt_Component(this.insertDBAcc);
this.jPanel1.add$java_awt_Component(this.insert);
this.jPanel1.add$java_awt_Component(this.jLabel2);
this.jPanel1.add$java_awt_Component(this.jLabel3);
this.jPanel1.add$java_awt_Component(this.jLabel4);
this.jPanel1.add$java_awt_Component(this.jLabel5);
var height=160;
if (lastLabel.length$() > 0) {
this.jPanel1.add$java_awt_Component(this.jLabel6);
height=176;
}this.add$java_awt_Component$O(this.jPanel1, Clazz.new_([0, 0, 1, 1, 1.0, 1.0, 10, 1, Clazz.new_($I$(13,1).c$$I$I$I$I,[5, 4, 6, 5]), 390, height],$I$(12,1).c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I));
}, p$1);

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.nameTB.setText$S(name);
});

Clazz.newMeth(C$, 'setURL$S',  function (url) {
this.urlTB.setText$S(url);
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.nameTB.getText$();
});

Clazz.newMeth(C$, 'getURL$',  function () {
return this.urlTB.getText$();
});

Clazz.newMeth(C$, 'checkValid$',  function () {
var ul=Clazz.new_(["foo|" + this.urlTB.getText$().trim$()],$I$(14,1).c$$S);
if (ul.isValid$() && ul.isDynamic$() ) {
return true;
}$I$(15,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(16).desktop, $I$(9).getString$S("warn.url_must_contain"), $I$(9).getString$S("label.invalid_url"), 2]);
return false;
});

Clazz.newMeth(C$, 'notifyDuplicate$',  function () {
$I$(15,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(16).desktop, $I$(9).getString$S("warn.name_cannot_be_duplicate"), $I$(9).getString$S("label.invalid_name"), 2]);
});

Clazz.newMeth(C$, 'nameTB_keyTyped$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyChar$() == "|") {
e.consume$();
}});

Clazz.newMeth(C$, 'urlTB_keyTyped$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'insertSeq_action$java_awt_event_ActionEvent',  function (e) {
p$1.insertIntoUrl$S.apply(this, [this.insertSeq.getText$()]);
});

Clazz.newMeth(C$, 'insertDBAcc_action$java_awt_event_ActionEvent',  function (e) {
p$1.insertIntoUrl$S.apply(this, [this.insertDBAcc.getText$()]);
});

Clazz.newMeth(C$, 'insertIntoUrl$S',  function (insertion) {
var pos=this.urlTB.getCaretPosition$();
var text=this.urlTB.getText$();
var newText=text.substring$I$I(0, pos) + insertion + text.substring$I(pos) ;
this.urlTB.setText$S(newText);
}, p$1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
