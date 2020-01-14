(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.awt.Dimension','javax.swing.BorderFactory','java.awt.Color','javax.swing.SwingUtilities','javax.swing.JFrame','test.MouseEventDemo','java.awt.GridLayout','javax.swing.JTextArea','javax.swing.JScrollPane',['test.MouseEventDemo','.BlankArea'],'javax.swing.JSplitPane','javax.swing.KeyStroke','javax.swing.AbstractAction']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MouseEventDemo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'java.awt.event.MouseListener');
C$.counter=0;
C$.NEWLINE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.counter=0;
C$.NEWLINE=System.getProperty$S("line.separator");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.blankArea=null;
this.textArea=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
$I$(4).invokeLater$Runnable(((P$.t.MouseEventDemo$4087||
(function(){var C$=Clazz.newClass(P$, "t.MouseEventDemo$4087", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
test.MouseEventDemo.createAndShowGUI$();
});
})()
), Clazz.new_(test.MouseEventDemo$4087.$init$, [this, null])));
}, 1);

Clazz.newMeth(C$, 'createAndShowGUI$', function () {
var frame=Clazz.new_($I$(5).c$$S,["MouseEventDemo (C to clear)"]);
frame.setDefaultCloseOperation$I(2);
var newContentPane=Clazz.new_($I$(6));
newContentPane.setOpaque$Z(true);
frame.setContentPane$java_awt_Container(newContentPane);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(7).c$$I$I,[0, 1])]);
C$.$init$.apply(this);
this.textArea=Clazz.new_($I$(8));
this.textArea.setEditable$Z(false);
var scrollPane=Clazz.new_($I$(9).c$$java_awt_Component,[this.textArea]);
scrollPane.setVerticalScrollBarPolicy$I(22);
scrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[400, 75]));
this.blankArea=Clazz.new_($I$(10).c$$java_awt_Color, [this, null, $I$(3).YELLOW]);
var splitPane=Clazz.new_($I$(11).c$$I$java_awt_Component$java_awt_Component,[0, this.blankArea, scrollPane]);
splitPane.setVisible$Z(true);
splitPane.setDividerLocation$D(0.2);
splitPane.setResizeWeight$D(0.5);
this.add$java_awt_Component(splitPane);
p$1.addKeyBinding.apply(this, []);
this.blankArea.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(20, 20, 20, 20));
}, 1);

Clazz.newMeth(C$, 'addKeyBinding', function () {
this.addKeyBinding$javax_swing_KeyStroke($I$(12).getKeyStroke$C("C"));
this.addKeyBinding$javax_swing_KeyStroke($I$(12).getKeyStroke$C("c"));
}, p$1);

Clazz.newMeth(C$, 'addKeyBinding$javax_swing_KeyStroke', function (ks) {
var inputMap=this.getInputMap$I(0);
inputMap.put$javax_swing_KeyStroke$O(ks, ks);
this.getActionMap$().put$O$javax_swing_Action(ks, ((P$.t.MouseEventDemo$5936||
(function(){var C$=Clazz.newClass(P$, "t.MouseEventDemo$5936", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['test.MouseEventDemo'].textArea.setText$S("");
this.b$['test.MouseEventDemo'].log$S.apply(this.b$['test.MouseEventDemo'], [""]);
});
})()
), Clazz.new_($I$(13), [this, null],test.MouseEventDemo$5936)));
});

Clazz.newMeth(C$, 'logEvent$S$java_awt_event_MouseEvent', function (eventDescription, e) {
this.log$S("------- " + $I$(6).counter++ + ": " + eventDescription );
this.log$S("e.isPopupTrigger: " + e.isPopupTrigger$());
this.log$S("SwingUtilities.isRightMouseButton: " + $I$(4).isRightMouseButton$java_awt_event_MouseEvent(e));
this.log$S("SwingUtilities.isLeftMouseButton: " + $I$(4).isLeftMouseButton$java_awt_event_MouseEvent(e));
this.log$S();
this.log$S("e.isControlDown: " + e.isControlDown$());
this.log$S("e.isAltDown: " + e.isAltDown$());
this.log$S("e.isMetaDown: " + e.isMetaDown$());
this.log$S("e.isShiftDown: " + e.isShiftDown$());
this.log$S("e.getClickCount: " + e.getClickCount$());
});

Clazz.newMeth(C$, 'log$S', function (msg) {
this.textArea.append$S(msg + $I$(6).NEWLINE);
this.textArea.setCaretPosition$I(this.textArea.getDocument$().getLength$());
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.logEvent$S$java_awt_event_MouseEvent("Mouse pressed", e);
e.consume$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.logEvent$S$java_awt_event_MouseEvent("Mouse released", e);
e.consume$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
this.logEvent$S$java_awt_event_MouseEvent("Mouse clicked", e);
e.consume$();
});
;
(function(){var C$=Clazz.newClass(P$.MouseEventDemo, "BlankArea", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$minSize=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$minSize=Clazz.new_($I$(1).c$$I$I,[200, 100]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color', function (color) {
Clazz.super_(C$, this,1);
this.setBackground$java_awt_Color(color);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border($I$(2).createLineBorder$java_awt_Color($I$(3).black));
}, 1);

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return this.$minSize;
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return this.$minSize;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-04 06:35:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
