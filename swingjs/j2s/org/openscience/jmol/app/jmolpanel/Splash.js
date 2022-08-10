(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'java.awt.Color','org.jmol.i18n.GT','java.awt.Frame',['org.openscience.jmol.app.jmolpanel.Splash','.WindowListener'],'java.awt.Toolkit']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Splash", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Window', 'org.openscience.jmol.app.SplashInterface');
C$.$classes$=[['WindowListener',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.status=$I$(2).$$S("Loading...");
},1);

C$.$fields$=[['I',['imgWidth','imgHeight','textY','statusTop'],'S',['status'],'O',['splashImage','java.awt.Image']]
,['O',['BORDERCOLOR','java.awt.Color','+TEXTCOLOR']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$javax_swing_ImageIcon', function (parent, ii) {
;C$.superclazz.c$$java_awt_Frame.apply(this,[Clazz.new_($I$(3,1))]);C$.$init$.apply(this);
this.splashImage=ii.getImage$();
this.imgWidth=this.splashImage.getWidth$java_awt_image_ImageObserver(this);
this.imgHeight=this.splashImage.getHeight$java_awt_image_ImageObserver(this);
if (parent == null ) return;
this.showSplashScreen$();
parent.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(4,1),[this, null]));
}, 1);

Clazz.newMeth(C$, 'showSplashScreen$', function () {
var tk=$I$(5).getDefaultToolkit$();
var screenSize=tk.getScreenSize$();
this.setBackground$java_awt_Color(C$.BORDERCOLOR);
var w=this.imgWidth + (20);
var h=this.imgHeight + (20) + 10 ;
var x=((screenSize.width - w)/2|0);
var y=((screenSize.height - h)/2|0);
this.setBounds$I$I$I$I(x, y, w, h);
this.statusTop=10 + this.imgHeight;
this.textY=10 + 10 + this.imgHeight + 1 ;
this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(this.splashImage, 10, 10, this.imgWidth, this.imgHeight, this);
g.setColor$java_awt_Color(C$.BORDERCOLOR);
g.fillRect$I$I$I$I(10, this.statusTop, this.imgWidth, this.textY);
g.setColor$java_awt_Color(C$.TEXTCOLOR);
g.drawString$S$I$I(this.status, 10, this.textY);
});

Clazz.newMeth(C$, 'showStatus$S', function (message) {
if (message != null ) {
this.status=message;
var g=this.getGraphics$();
if (g == null ) {
return;
}g.setColor$java_awt_Color(C$.BORDERCOLOR);
g.fillRect$I$I$I$I(10, this.statusTop, this.imgWidth + 10, this.textY);
g.setColor$java_awt_Color(C$.TEXTCOLOR);
g.drawString$S$I$I(this.status, 10, this.textY);
}});

C$.$static$=function(){C$.$static$=0;
C$.BORDERCOLOR=$I$(1).blue;
C$.TEXTCOLOR=$I$(1).white;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Splash, "WindowListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (we) {
this.b$['java.awt.Window'].setVisible$Z.apply(this.b$['java.awt.Window'], [false]);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
