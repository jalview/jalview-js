(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'java.awt.Font','java.awt.BorderLayout','javax.swing.JPanel','java.awt.GridLayout','javax.swing.JLabel','jalview.util.MessageManager','jalview.io.cache.JvCacheableInputBox','java.awt.event.KeyAdapter','javax.swing.JCheckBox','javax.swing.JButton','javax.swing.SwingUtilities','jalview.io.FormatAdapter','jalview.io.DataSourceType','jalview.io.FileFormat','jalview.analysis.AlignSeq','jalview.util.Comparison']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GFinder", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['createFeatures','javax.swing.JButton','searchBox','jalview.io.cache.JvCacheableInputBox','caseSensitive','javax.swing.JCheckBox','+searchDescription','+ignoreHidden']]
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
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
var eastPanel=Clazz.new_($I$(3,1));
eastPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1).c$$I$I,[4, 1]));
this.add$java_awt_Component$O(eastPanel, "East");
var centrePanel=Clazz.new_($I$(3,1));
centrePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1).c$$I$I,[4, 1]));
this.add$java_awt_Component$O(centrePanel, "Center");
var westPanel=Clazz.new_($I$(3,1));
westPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1).c$$I$I,[4, 1]));
this.add$java_awt_Component$O(westPanel, "West");
var findLabel=Clazz.new_([" " + $I$(6).getString$S("label.find") + " " ],$I$(5,1).c$$S);
findLabel.setFont$java_awt_Font(C$.VERDANA_12);
westPanel.add$java_awt_Component(findLabel);
this.searchBox=Clazz.new_($I$(7,1).c$$S$I,["CACHE.FINDER", 25]);
this.searchBox.getComponent$().setFont$java_awt_Font(C$.VERDANA_12);
this.searchBox.addCaretListener$javax_swing_event_CaretListener(((P$.GFinder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.CaretListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'caretUpdate$javax_swing_event_CaretEvent',  function (e) {
this.b$['jalview.jbgui.GFinder'].textfield_caretUpdate$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$1.$init$,[this, null])));
this.searchBox.addKeyListener$java_awt_event_KeyListener(((P$.GFinder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.jbgui.GFinder'].textfield_keyPressed$java_awt_event_KeyEvent.apply(this.b$['jalview.jbgui.GFinder'], [e]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.GFinder$2)));
centrePanel.add$java_awt_Component(this.searchBox.getComponent$());
this.caseSensitive=Clazz.new_($I$(9,1));
this.caseSensitive.setHorizontalAlignment$I(2);
this.caseSensitive.setText$S($I$(6).getString$S("label.match_case"));
this.searchDescription=Clazz.new_($I$(9,1));
this.searchDescription.setText$S($I$(6).getString$S("label.include_description"));
this.ignoreHidden=Clazz.new_($I$(9,1));
this.ignoreHidden.setText$S($I$(6).getString$S("label.ignore_hidden"));
this.ignoreHidden.setToolTipText$S($I$(6).getString$S("label.ignore_hidden_tooltip"));
centrePanel.add$java_awt_Component(this.caseSensitive);
centrePanel.add$java_awt_Component(this.searchDescription);
centrePanel.add$java_awt_Component(this.ignoreHidden);
var findAll=Clazz.new_([$I$(6).getString$S("action.find_all")],$I$(10,1).c$$S);
findAll.setFont$java_awt_Font(C$.VERDANA_12);
findAll.addActionListener$java_awt_event_ActionListener(((P$.GFinder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GFinder'].findAll_actionPerformed$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$3.$init$,[this, null])));
var findNext=Clazz.new_([$I$(6).getString$S("action.find_next")],$I$(10,1).c$$S);
findNext.setFont$java_awt_Font(C$.VERDANA_12);
findNext.addActionListener$java_awt_event_ActionListener(((P$.GFinder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GFinder'].findNext_actionPerformed$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$4.$init$,[this, null])));
this.createFeatures=Clazz.new_($I$(10,1));
this.createFeatures.setEnabled$Z(false);
this.createFeatures.setFont$java_awt_Font(C$.VERDANA_12);
this.createFeatures.setText$S($I$(6).getString$S("label.new_feature"));
this.createFeatures.addActionListener$java_awt_event_ActionListener(((P$.GFinder$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GFinder'].createFeatures_actionPerformed$.apply(this.b$['jalview.jbgui.GFinder'], []);
});
})()
), Clazz.new_(P$.GFinder$5.$init$,[this, null])));
eastPanel.add$java_awt_Component(findNext);
eastPanel.add$java_awt_Component(findAll);
eastPanel.add$java_awt_Component(this.createFeatures);
}, p$1);

Clazz.newMeth(C$, 'textfield_keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
if (!this.searchBox.isPopupVisible$()) {
e.consume$();
this.findNext_actionPerformed$();
}}});

Clazz.newMeth(C$, 'findNext_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'findAll_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'createFeatures_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'textfield_caretUpdate$',  function () {
if (false && this.searchBox.getUserInput$().indexOf$S(">") > -1 ) {
$I$(11,"invokeLater$Runnable",[((P$.GFinder$6480||
(function(){/*a*/var C$=Clazz.newClass(P$, "GFinder$6480", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var str=this.b$['jalview.jbgui.GFinder'].searchBox.getUserInput$();
var al=null;
try {
al=Clazz.new_($I$(12,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(str, $I$(13).PASTE, $I$(14).Fasta);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (al != null  && al.getHeight$() > 0 ) {
str=$I$(15,"extractGaps$S$S",[$I$(16).GapChars, al.getSequenceAt$I(0).getSequenceAsString$()]);
}});
})()
), Clazz.new_(P$.GFinder$6480.$init$,[this, null]))]);
}});

C$.$static$=function(){C$.$static$=0;
C$.VERDANA_12=Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 0, 12]);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
