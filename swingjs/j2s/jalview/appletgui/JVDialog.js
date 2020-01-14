(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Button','java.awt.Panel','java.awt.FlowLayout','java.awt.event.WindowAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JVDialog", null, 'java.awt.Dialog', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ap=null;
this.buttonPanel=null;
this.ok=null;
this.cancel=null;
this.accept=false;
this.owner=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ok=Clazz.new_($I$(1).c$$S,["Accept"]);
this.cancel=Clazz.new_($I$(1).c$$S,["Cancel"]);
this.accept=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$I$I', function (owner, title, modal, width, height) {
C$.superclazz.c$$java_awt_Frame$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
this.owner=owner;
height+=owner.getInsets$().top + this.getInsets$().bottom;
this.setBounds$I$I$I$I(owner.getBounds$().x + ((owner.getSize$().width - width)/2|0), owner.getBounds$().y + ((owner.getSize$().height - height)/2|0), width, height);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$java_awt_Panel$S$Z$I$I', function (owner, mainPanel, title, modal, width, height) {
C$.superclazz.c$$java_awt_Frame$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
this.owner=owner;
height+=owner.getInsets$().top + this.getInsets$().bottom;
this.setBounds$I$I$I$I(owner.getBounds$().x + ((owner.getSize$().width - width)/2|0), owner.getBounds$().y + ((owner.getSize$().height - height)/2|0), width, height);
this.setMainPanel$java_awt_Panel(mainPanel);
}, 1);

Clazz.newMeth(C$, 'setMainPanel$java_awt_Panel', function (panel) {
this.add$java_awt_Component$O(panel, "North");
this.buttonPanel=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
this.buttonPanel.add$java_awt_Component(this.ok);
this.buttonPanel.add$java_awt_Component(this.cancel);
this.ok.addActionListener$java_awt_event_ActionListener(this);
this.cancel.addActionListener$java_awt_event_ActionListener(this);
this.add$java_awt_Component$O(this.buttonPanel, "South");
this.addWindowListener$java_awt_event_WindowListener(((P$.JVDialog$1||
(function(){var C$=Clazz.newClass(P$, "JVDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (ev) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_($I$(4), [this, null],P$.JVDialog$1)));
this.pack$();
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
if (evt.getSource$() === this.ok ) {
this.accept=true;
}this.setVisible$Z(false);
this.dispose$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
