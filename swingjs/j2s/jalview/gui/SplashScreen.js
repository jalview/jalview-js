(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Dimension','java.awt.Color','java.awt.Font','javax.swing.JPanel','java.awt.BorderLayout','java.awt.event.MouseAdapter','jalview.util.Platform','javax.swing.JLabel','java.awt.Toolkit','java.awt.MediaTracker','jalview.gui.Desktop','javax.swing.JInternalFrame','javax.swing.JLayeredPane','Thread']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SplashScreen", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['Runnable', 'javax.swing.event.HyperlinkListener']);
C$.$classes$=[['SplashImage',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$visible=true;
this.iconimg=Clazz.new_([Clazz.new_($I$(5,1))],$I$(4,1).c$$java_awt_LayoutManager);
this.transientDialog=false;
this.oldTextLength=-1;
this.closer=((P$.SplashScreen$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplashScreen$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if (this.b$['jalview.gui.SplashScreen'].transientDialog) {
try {
this.b$['jalview.gui.SplashScreen'].$visible=false;
this.b$['jalview.gui.SplashScreen'].closeSplash$.apply(this.b$['jalview.gui.SplashScreen'], []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.SplashScreen$1));
},1);

C$.$fields$=[['Z',['$visible','transientDialog'],'J',['oldTextLength'],'O',['iconimg','javax.swing.JPanel','splashText','java.awt.Component','iframe','javax.swing.JInternalFrame','image','java.awt.Image','closer','java.awt.event.MouseAdapter']]]

Clazz.newMeth(C$, 'c$$Z', function (isTransient) {
Clazz.super_(C$, this);
this.transientDialog=isTransient;
if ($I$(7).isJS$()) {
this.splashText=Clazz.new_($I$(8,1).c$$S,[""]);
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
var mt=Clazz.new_($I$(10,1).c$$java_awt_Component,[this]);
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
this.iframe=Clazz.new_($I$(12,1));
this.iframe.setFrameIcon$javax_swing_Icon(null);
this.iframe.setClosable$Z(true);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
this.iframe.setContentPane$java_awt_Container(this);
this.iframe.setLayer$Integer($I$(13).PALETTE_LAYER);
if ($I$(7).isJS$()) {
} else 
{}
this.add$java_awt_Component$O(this.splashText, "Center");
this.splashText.addMouseListener$java_awt_event_MouseListener(this.closer);
$I$(11).desktop.add$java_awt_Component(this.iframe);
this.refreshText$();
});

Clazz.newMeth(C$, 'refreshText$', function () {
var newtext=$I$(11).instance.getAboutMessage$();
if (this.oldTextLength != newtext.length$()) {
this.iframe.setVisible$Z(false);
this.oldTextLength=newtext.length$();
if ($I$(7).isJS$()) {
var text="<html><br><br><img src=\"swingjs/j2s/images/Jalview_Logo.png\"/><br>" + newtext + "</html>" ;
var ta=Clazz.new_($I$(8,1).c$$S,[text]);
ta.setOpaque$Z(true);
ta.setBackground$java_awt_Color($I$(2).white);
this.splashText=ta;
} else 
{}
this.splashText.addMouseListener$java_awt_event_MouseListener(this.closer);
this.splashText.setVisible$Z(true);
this.splashText.setSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[750, 375]));
this.add$java_awt_Component$O(this.splashText, "Center");
this.revalidate$();
this.iframe.setBounds$I$I$I$I((($I$(11).instance.getWidth$() - 750)/2|0), (($I$(11).instance.getHeight$() - 375)/2|0), 750, this.splashText.getHeight$() + this.iconimg.getHeight$());
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
if (this.transientDialog && (((System.currentTimeMillis$()/1000|0)) - startTime) > 5 ) {
this.$visible=false;
}if (this.$visible && this.refreshText$() ) {
this.iframe.repaint$();
}if (!this.transientDialog) {
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

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent', function (e) {
$I$(11).hyperlinkUpdate$javax_swing_event_HyperlinkEvent(e);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SplashScreen, "SplashImage", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image', function (todisplay) {
Clazz.super_(C$, this);
this.image=todisplay;
if (this.image != null ) {
this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.image.getWidth$java_awt_image_ImageObserver(this) + 8, this.image.getHeight$java_awt_image_ImageObserver(this)],$I$(1,1).c$$I$I));
}}, 1);

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return Clazz.new_([this.image.getWidth$java_awt_image_ImageObserver(this) + 8, this.image.getHeight$java_awt_image_ImageObserver(this)],$I$(1,1).c$$I$I);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(2).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setColor$java_awt_Color($I$(2).black);
g.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Verdana", 1, 17]));
if (this.image != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, ((this.getWidth$() - this.image.getWidth$java_awt_image_ImageObserver(this))/2|0), ((this.getHeight$() - this.image.getHeight$java_awt_image_ImageObserver(this))/2|0), this);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
