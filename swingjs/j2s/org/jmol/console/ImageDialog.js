(function(){var P$=Clazz.newPackage("org.jmol.console"),p$1={},I$=[[0,'java.awt.Color','org.jmol.awt.Platform','javax.swing.JPanel','java.awt.BorderLayout',['org.jmol.console.ImageDialog','.ImageCanvas'],'javax.swing.JMenuBar','javajs.util.PT','Thread','java.util.Hashtable','java.awt.image.BufferedImage','java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', ['org.jmol.api.GenericImageDialog', 'java.awt.event.WindowListener', 'java.awt.event.ActionListener']);
C$.$classes$=[['ImageCanvas',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$title'],'O',['menubar','javax.swing.JMenuBar','image','java.awt.Image','vwr','org.jmol.viewer.Viewer','canvas','org.jmol.console.ImageDialog.ImageCanvas','imageMap','java.util.Map','console','org.jmol.api.JmolAppConsoleInterface']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$java_util_Map', function (vwr, title, imageMap) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[Clazz.instanceOf($I$(2).getWindow$java_awt_Container(vwr.display), "javax.swing.JFrame") ? $I$(2).getWindow$java_awt_Container(vwr.display) : null, title, false]);C$.$init$.apply(this);
this.vwr=vwr;
this.setResizable$Z(false);
this.console=vwr.getConsole$();
this.addWindowListener$java_awt_event_WindowListener(this);
this.$title=title;
this.imageMap=imageMap;
imageMap.put$O$O(title, this);
var wrapper=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
wrapper.setBackground$java_awt_Color(Clazz.new_($I$(1,1).c$$I$I$I,[255, 0, 0]));
this.canvas=Clazz.new_($I$(5,1),[this, null]);
wrapper.add$java_awt_Component$O(this.canvas, "Center");
var container=Clazz.new_($I$(3,1));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
this.menubar=Clazz.new_($I$(6,1));
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

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var cmd=e.getActionCommand$();
if (cmd.equals$O("close")) {
this.closeMe$();
} else if (cmd.equals$O("saveas")) {
p$1.saveAs.apply(this, []);
}});

Clazz.newMeth(C$, 'saveAs', function () {
(((P$.ImageDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
})()
), Clazz.new_([this, null, ((P$.ImageDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var params=Clazz.new_($I$(9,1));
var fname=this.b$['org.jmol.console.ImageDialog'].vwr.dialogAsk$S$S$java_util_Map("Save Image", "jmol.png", params);
if (fname == null ) return;
var type="PNG";
var pt=fname.lastIndexOf$S(".");
if (pt > 0) type=fname.substring$I(pt + 1).toUpperCase$();
params.put$O$O("fileName", fname);
params.put$O$O("type", type);
params.put$O$O("image", this.b$['org.jmol.console.ImageDialog'].image);
this.b$['org.jmol.console.ImageDialog'].vwr.showString$S$Z(this.b$['org.jmol.console.ImageDialog'].vwr.processWriteOrCapture$java_util_Map(params), false);
});
})()
), Clazz.new_(P$.ImageDialog$1.$init$,[this, null]))],$I$(8,1).c$$Runnable,P$.ImageDialog$2))).start$();
}, p$1);

Clazz.newMeth(C$, 'closeMe$', function () {
this.imageMap.remove$O(this.$title);
this.dispose$();
});

Clazz.newMeth(C$, 'setImage$O', function (oimage) {
if (oimage == null ) {
this.closeMe$();
return;
}var w=(oimage).getWidth$java_awt_image_ImageObserver(null);
var h=(oimage).getHeight$java_awt_image_ImageObserver(null);
this.image=Clazz.new_($I$(10,1).c$$I$I$I,[w, h, 1]);
var g=this.image.getGraphics$();
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, w, h);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(oimage, 0, 0, null);
g.dispose$();
this.setTitle$S(this.$title + " [" + w + " x " + h + "]" );
var d=Clazz.new_($I$(11,1).c$$I$I,[w, h]);
this.canvas.setPreferredSize$java_awt_Dimension(d);
this.setBackground$java_awt_Color($I$(1).WHITE);
this.getContentPane$().setBackground$java_awt_Color($I$(1).WHITE);
this.pack$();
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
(function(){/*c*/var C$=Clazz.newClass(P$.ImageDialog, "ImageCanvas", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
System.out.println$S(this.b$['org.jmol.console.ImageDialog'].image.getClass$().getName$());
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, this.b$['org.jmol.console.ImageDialog'].image.getWidth$java_awt_image_ImageObserver(null), this.b$['org.jmol.console.ImageDialog'].image.getHeight$java_awt_image_ImageObserver(null));
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.b$['org.jmol.console.ImageDialog'].image, 0, 0, null);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
