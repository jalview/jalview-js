(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JButton','Thread','javax.swing.JDialog','jalview.gui.Desktop','java.awt.Rectangle','java.awt.Dimension','jalview.util.MessageManager','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewDialog", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ok=Clazz.new_($I$(1,1));
this.cancel=Clazz.new_($I$(1,1));
this.block=false;
},1);

C$.$fields$=[['Z',['block'],'O',['frame','javax.swing.JDialog','ok','javax.swing.JButton','+cancel']]]

Clazz.newMeth(C$, 'waitForInput$',  function () {
if (!this.block) {
Clazz.new_([((P$.JalviewDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.JalviewDialog'].frame.setVisible$Z(true);
});
})()
), Clazz.new_(P$.JalviewDialog$1.$init$,[this, null]))],$I$(2,1).c$$Runnable).start$();
} else {
this.frame.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'initDialogFrame$java_awt_Container$Z$Z$S$I$I',  function (content, modal, block, title, width, height) {
this.frame=Clazz.new_([$I$(4).instance, modal],$I$(3,1).c$$java_awt_Frame$Z);
this.frame.setTitle$S(title);
if ($I$(4).instance != null ) {
var deskr=$I$(4).instance.getBounds$();
this.frame.setBounds$java_awt_Rectangle(Clazz.new_([((deskr.getCenterX$() - (width/2|0))|0), ((deskr.getCenterY$() - (height/2|0))|0), width, height],$I$(5,1).c$$I$I$I$I));
} else {
this.frame.setSize$I$I(width, height);
}var minWidth=width - 100;
var minHeight=height - 100;
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[minWidth, minHeight]));
this.frame.setContentPane$java_awt_Container(content);
this.block=block;
this.ok.setOpaque$Z(false);
this.ok.setText$S($I$(7).getString$S("action.ok"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.JalviewDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.JalviewDialog'].okPressed$.apply(this.b$['jalview.gui.JalviewDialog'], []);
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
});
})()
), Clazz.new_(P$.JalviewDialog$2.$init$,[this, null])));
this.cancel.setOpaque$Z(false);
this.cancel.setText$S($I$(7).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.JalviewDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.JalviewDialog'].cancelPressed$.apply(this.b$['jalview.gui.JalviewDialog'], []);
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
});
})()
), Clazz.new_(P$.JalviewDialog$3.$init$,[this, null])));
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.JalviewDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.JalviewDialog$4)));
});

Clazz.newMeth(C$, 'closeDialog$',  function () {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
