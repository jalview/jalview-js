(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Dimension','java.awt.Color','java.awt.Font','javax.swing.JPanel','java.awt.BorderLayout','java.awt.event.MouseAdapter','jalview.util.Platform','javax.swing.JLabel','java.awt.Toolkit','java.awt.MediaTracker','jalview.gui.Desktop','javax.swing.JInternalFrame','javax.swing.JLayeredPane','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SplashScreen", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['Runnable', 'javax.swing.event.HyperlinkListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$visible=false;
this.iconimg=null;
this.authlist=null;
this.iframe=null;
this.image=null;
this.fontSize=0;
this.yoffset=0;
this.interactiveDialog=false;
this.closer=null;
this.oldtext=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$visible=true;
this.iconimg=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(5))]);
this.fontSize=11;
this.yoffset=30;
this.interactiveDialog=false;
this.closer=((P$.SplashScreen$1||
(function(){var C$=Clazz.newClass(P$, "SplashScreen$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
try {
if (!this.b$['jalview.gui.SplashScreen'].interactiveDialog) {
this.b$['jalview.gui.SplashScreen'].$visible=false;
this.b$['jalview.gui.SplashScreen'].closeSplash$.apply(this.b$['jalview.gui.SplashScreen'], []);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_($I$(6), [this, null],P$.SplashScreen$1));
this.oldtext=-1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (interactive) {
Clazz.super_(C$, this,1);
this.interactiveDialog=interactive;
if ($I$(7).isJS$()) {
this.authlist=Clazz.new_($I$(8).c$$S,[""]);
this.run$();
} else {

{}
}}, 1);

Clazz.newMeth(C$, 'initSplashScreenWindow$', function () {
this.addMouseListener$java_awt_event_MouseListener(this.closer);
try {
var url=this.getClass$().getResource$S("/images/Jalview_Logo.png");
var urllogo=this.getClass$().getResource$S("/images/Jalview_Logo_small.png");
if (!$I$(7).isJS$() && url != null  ) {
this.image=$I$(9).getDefaultToolkit$().createImage$java_net_URL(url);
var logo=$I$(9).getDefaultToolkit$().createImage$java_net_URL(urllogo);
var mt=Clazz.new_($I$(10).c$$java_awt_Component,[this]);
mt.addImage$java_awt_Image$I(this.image, 0);
mt.addImage$java_awt_Image$I(logo, 1);
do {
try {
mt.waitForAll$();
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
if (mt.isErrorAny$()) {
System.err.println$S("Error when loading images!");
}} while (!mt.checkAll$());
$I$(11).instance.setIconImage$java_awt_Image(logo);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.iframe=Clazz.new_($I$(12));
this.iframe.setFrameIcon$javax_swing_Icon(null);
this.iframe.setClosable$Z(this.interactiveDialog);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5)));
this.iframe.setContentPane$java_awt_Container(this);
this.iframe.setLayer$Integer($I$(13).PALETTE_LAYER);
if ($I$(7).isJS$()) {
} else 
{}
this.add$java_awt_Component$O(this.authlist, "Center");
this.authlist.addMouseListener$java_awt_event_MouseListener(this.closer);
$I$(11).desktop.add$java_awt_Component(this.iframe);
this.refreshText$();
});

Clazz.newMeth(C$, 'refreshText$', function () {
var newtext=$I$(11).instance.getAboutMessage$Z(true).toString();
if (this.oldtext != newtext.length$()) {
this.iframe.setVisible$Z(false);
this.oldtext=newtext.length$();
if ($I$(7).isJS$()) {
this.authlist=Clazz.new_($I$(8).c$$S,["<html><br/><br/><img src=\"swingjs/j2s/images/Jalview_Logo.png\"/><br/>" + newtext]);
(this.authlist).setOpaque$Z(true);
(this.authlist).setBackground$java_awt_Color($I$(2).white);
} else 
{}
this.authlist.addMouseListener$java_awt_event_MouseListener(this.closer);
this.authlist.setVisible$Z(true);
this.authlist.setSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[750, 375]));
this.add$java_awt_Component$O(this.authlist, "Center");
this.revalidate$();
this.iframe.setBounds$I$I$I$I((($I$(11).instance.getWidth$() - 750)/2|0), (($I$(11).instance.getHeight$() - 375)/2|0), 750, this.authlist.getHeight$() + this.iconimg.getHeight$());
this.iframe.validate$();
this.iframe.setVisible$Z(true);
return true;
}return false;
});

Clazz.newMeth(C$, 'run$', function () {
this.initSplashScreenWindow$();
var startTime=(System.currentTimeMillis$()/1000|0);
while (this.$visible){
this.iframe.repaint$();
try {
$I$(14).sleep$J(500);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (!this.interactiveDialog && (((System.currentTimeMillis$()/1000|0)) - startTime) > 5 ) {
this.$visible=false;
}if (this.$visible && this.refreshText$() ) {
this.iframe.repaint$();
}if (this.interactiveDialog) {
return;
}}
this.closeSplash$();
$I$(11).instance.startDialogQueue$();
});

Clazz.newMeth(C$, 'closeSplash$', function () {
try {
this.iframe.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, ['hyperlinkUpdate$javax_swing_event_HyperlinkEvent','hyperlinkUpdate$'], function (e) {
$I$(11).hyperlinkUpdate$javax_swing_event_HyperlinkEvent(e);
});
;
(function(){var C$=Clazz.newClass(P$.SplashScreen, "SplashImage", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image', function (todisplay) {
Clazz.super_(C$, this,1);
this.image=todisplay;
if (this.image != null ) {
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[this.image.getWidth$java_awt_image_ImageObserver(this) + 8, this.image.getHeight$java_awt_image_ImageObserver(this)]));
}}, 1);

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return Clazz.new_($I$(1).c$$I$I,[this.image.getWidth$java_awt_image_ImageObserver(this) + 8, this.image.getHeight$java_awt_image_ImageObserver(this)]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(2).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setColor$java_awt_Color($I$(2).black);
g.setFont$java_awt_Font(Clazz.new_($I$(3).c$$S$I$I,["Verdana", 1, this.this$0.fontSize + 6]));
if (this.image != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, ((this.getWidth$() - this.image.getWidth$java_awt_image_ImageObserver(this))/2|0), ((this.getHeight$() - this.image.getHeight$java_awt_image_ImageObserver(this))/2|0), this);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
