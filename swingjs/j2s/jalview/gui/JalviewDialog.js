(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JButton','Thread','javax.swing.JDialog','jalview.gui.Desktop','java.awt.Rectangle','java.awt.Dimension','jalview.util.MessageManager','java.awt.event.WindowAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewDialog", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frame=null;
this.ok=null;
this.cancel=null;
this.block=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ok=Clazz.new_($I$(1));
this.cancel=Clazz.new_($I$(1));
this.block=false;
}, 1);

Clazz.newMeth(C$, 'waitForInput$', function () {
if (!this.block) {
Clazz.new_($I$(2).c$$Runnable,[((P$.JalviewDialog$1||
(function(){var C$=Clazz.newClass(P$, "JalviewDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.JalviewDialog'].frame.setVisible$Z(true);
});
})()
), Clazz.new_(P$.JalviewDialog$1.$init$, [this, null]))]).start$();
} else {
this.frame.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'initDialogFrame$java_awt_Container$Z$Z$S$I$I', function (content, modal, block, title, width, height) {
this.frame=Clazz.new_($I$(3).c$$java_awt_Frame$Z,[$I$(4).instance, modal]);
this.frame.setTitle$S(title);
if ($I$(4).instance != null ) {
var deskr=$I$(4).instance.getBounds$();
this.frame.setBounds$java_awt_Rectangle(Clazz.new_($I$(5).c$$I$I$I$I,[((deskr.getCenterX$() - (width/2|0))|0), ((deskr.getCenterY$() - (height/2|0))|0), width, height]));
} else {
this.frame.setSize$I$I(width, height);
}var minWidth=width - 100;
var minHeight=height - 100;
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(6).c$$I$I,[minWidth, minHeight]));
this.frame.setContentPane$java_awt_Container(content);
this.block=block;
this.ok.setOpaque$Z(false);
this.ok.setText$S($I$(7).getString$S("action.ok"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.JalviewDialog$2||
(function(){var C$=Clazz.newClass(P$, "JalviewDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.JalviewDialog'].okPressed$.apply(this.b$['jalview.gui.JalviewDialog'], []);
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
});
})()
), Clazz.new_(P$.JalviewDialog$2.$init$, [this, null])));
this.cancel.setOpaque$Z(false);
this.cancel.setText$S($I$(7).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.JalviewDialog$3||
(function(){var C$=Clazz.newClass(P$, "JalviewDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.JalviewDialog'].cancelPressed$.apply(this.b$['jalview.gui.JalviewDialog'], []);
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
});
})()
), Clazz.new_(P$.JalviewDialog$3.$init$, [this, null])));
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.JalviewDialog$4||
(function(){var C$=Clazz.newClass(P$, "JalviewDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.JalviewDialog$4)));
});

Clazz.newMeth(C$, 'closeDialog$', function () {
try {
this.raiseClosed$();
this.frame.dispose$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
