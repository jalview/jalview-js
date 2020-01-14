(function(){var P$=Clazz.newPackage("org.jmol.console"),p$1={},I$=[[0,'org.jmol.awt.Platform','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Color',['org.jmol.console.ImageDialog','.ImageCanvas'],'javax.swing.JMenuBar','javajs.util.PT','Thread','java.util.Hashtable','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', ['org.jmol.api.GenericImageDialog', 'java.awt.event.WindowListener', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.menubar=null;
this.image=null;
this.vwr=null;
this.canvas=null;
this.$title=null;
this.imageMap=null;
this.console=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$java_util_Map', function (vwr, title, imageMap) {
C$.superclazz.c$$java_awt_Frame$S$Z.apply(this, [Clazz.instanceOf($I$(1).getWindow$java_awt_Container(vwr.display), "javax.swing.JFrame") ? $I$(1).getWindow$java_awt_Container(vwr.display) : null, title, false]);
C$.$init$.apply(this);
this.vwr=vwr;
this.setResizable$Z(false);
this.console=vwr.getConsole$();
this.addWindowListener$java_awt_event_WindowListener(this);
this.$title=title;
this.imageMap=imageMap;
imageMap.put$TK$TV(title, this);
var wrapper=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
wrapper.setBackground$java_awt_Color(Clazz.new_($I$(4).c$$I$I$I,[255, 0, 0]));
this.canvas=Clazz.new_($I$(5), [this, null]);
wrapper.add$java_awt_Component$O(this.canvas, "Center");
var container=Clazz.new_($I$(2));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3)));
this.menubar=Clazz.new_($I$(6));
this.menubar.add$javax_swing_JMenu(p$1.createMenu.apply(this, []));
this.setJMenuBar$javax_swing_JMenuBar(this.menubar);
container.add$java_awt_Component$O(wrapper, "Center");
this.getContentPane$().add$java_awt_Component(container);
this.pack$();
this.setLocation$I$I(100, 100);
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'createMenu', function () {
var itemKeys=$I$(7).getTokens$S("saveas close");
this.vwr.getConsole$();
var menu=this.console.newJMenu$S("file");
for (var i=0; i < itemKeys.length; i++) {
var item=itemKeys[i];
var mi=p$1.createMenuItem$S.apply(this, [item]);
menu.add$javax_swing_JMenuItem(mi);
}
menu.setVisible$Z(true);
return menu;
}, p$1);

Clazz.newMeth(C$, 'createMenuItem$S', function (cmd) {
var mi=this.console.newJMenuItem$S(cmd);
mi.setActionCommand$S(cmd);
mi.addActionListener$java_awt_event_ActionListener(this);
mi.setVisible$Z(true);
return mi;
}, p$1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var cmd=e.getActionCommand$();
if (cmd.equals$O("close")) {
this.closeMe$();
} else if (cmd.equals$O("saveas")) {
p$1.saveAs.apply(this, []);
}});

Clazz.newMeth(C$, 'saveAs', function () {
(((P$.ImageDialog$2||
(function(){var C$=Clazz.newClass(P$, "ImageDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
})()
), Clazz.new_($I$(8).c$$Runnable, [this, null, ((P$.ImageDialog$1||
(function(){var C$=Clazz.newClass(P$, "ImageDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var params=Clazz.new_($I$(9));
var fname=this.b$['org.jmol.console.ImageDialog'].vwr.dialogAsk$S$S$java_util_Map("Save Image", "jmol.png", params);
if (fname == null ) return;
var type="PNG";
var pt=fname.lastIndexOf$S(".");
if (pt > 0) type=fname.substring$I(pt + 1).toUpperCase$();
params.put$TK$TV("fileName", fname);
params.put$TK$TV("type", type);
params.put$TK$TV("image", this.b$['org.jmol.console.ImageDialog'].image);
this.b$['org.jmol.console.ImageDialog'].vwr.showString$S$Z(this.b$['org.jmol.console.ImageDialog'].vwr.processWriteOrCapture$java_util_Map(params), false);
});
})()
), Clazz.new_(P$.ImageDialog$1.$init$, [this, null]))],P$.ImageDialog$2))).start$();
}, p$1);

Clazz.newMeth(C$, 'closeMe$', function () {
this.imageMap.remove$O(this.$title);
this.dispose$();
});

Clazz.newMeth(C$, 'setImage$O', function (oimage) {
if (oimage == null ) {
this.closeMe$();
return;
}this.image=oimage;
var w=this.image.getWidth$java_awt_image_ImageObserver(null);
var h=this.image.getHeight$java_awt_image_ImageObserver(null);
this.setTitle$S(this.$title + " [" + w + " x " + h + "]" );
var d=Clazz.new_($I$(10).c$$I$I,[w, h]);
this.canvas.setSize$java_awt_Dimension(d);
this.pack$();
this.repaint$();
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.closeMe$();
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});
;
(function(){var C$=Clazz.newClass(P$.ImageDialog, "ImageCanvas", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.this$0.image, 0, 0, null);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
