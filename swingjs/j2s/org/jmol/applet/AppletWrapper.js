(function(){var P$=Clazz.newPackage("org.jmol.applet"),p$1={},I$=[[0,'java.awt.Color','org.jmol.util.Logger','org.jmol.applet.WrappedAppletLoader','org.jmol.applet.ClassPreloader','java.awt.Toolkit','java.awt.MediaTracker','java.awt.Font','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AppletWrapper", null, 'javax.swing.JApplet');
C$.MINIMUM_ELAPSED_SECONDS=0;
C$.fontFace=null;
C$.fontSizeDivisor=0;
C$.colorNames=null;
C$.colors=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MINIMUM_ELAPSED_SECONDS=1;
C$.fontFace="sansserif";
C$.fontSizeDivisor=18;
C$.colorNames=Clazz.array(String, -1, ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"]);
C$.colors=Clazz.array($I$(1), -1, [$I$(1).cyan, $I$(1).black, $I$(1).blue, $I$(1).magenta, $I$(1).gray, Clazz.new_($I$(1).c$$I$I$I,[0, 128, 0]), $I$(1).green, Clazz.new_($I$(1).c$$I$I$I,[128, 0, 0]), Clazz.new_($I$(1).c$$I$I$I,[0, 0, 128]), Clazz.new_($I$(1).c$$I$I$I,[128, 128, 0]), Clazz.new_($I$(1).c$$I$I$I,[128, 0, 128]), $I$(1).red, $I$(1).lightGray, Clazz.new_($I$(1).c$$I$I$I,[0, 128, 128]), $I$(1).white, $I$(1).yellow]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.wrappedApplet=null;
this.preloadImageName=null;
this.preloadTextMessage=null;
this.previousClassName=null;
this.preloadThreadCount=0;
this.preloadClassNames=null;
this.preloadClassIndex=0;
this.isSigned=false;
this.needToCompleteInitialization=false;
this.preloadImageReadyForDisplay=false;
this.preloadImagePainted=false;
this.bgcolor=null;
this.textColor=null;
this.preloadImage=null;
this.mediaTracker=null;
this.startTime=0;
this.clockX=0;
this.clockBaseline=0;
this.clockWidth=0;
this.fontSize=0;
this.$font=null;
this.fontMetrics=null;
this.fontAscent=0;
this.fontHeight=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
try {
(this.wrappedApplet).destroy$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.wrappedApplet=null;
C$.superclazz.prototype.destroy$.apply(this, []);
});

Clazz.newMeth(C$, 'c$$S$I$SA', function (preloadImageName, preloadThreadCount, preloadClassNames) {
Clazz.super_(C$, this,1);
this.preloadImageName=preloadImageName;
this.preloadTextMessage="Loading Jmol applet ...";
this.preloadThreadCount=preloadThreadCount;
this.preloadClassNames=preloadClassNames;
this.needToCompleteInitialization=true;
this.isSigned=false;
try {
var imagePath="" + (this.getClass$().getClassLoader$().getResource$S(preloadImageName));
this.isSigned=(imagePath.indexOf$S("Signed") >= 0);
System.out.println$S("appletwrapper isSigned = " + this.isSigned);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).error$S("isSigned false: " + e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, ['isSigned$','isSigned'], function () {
System.out.println$S("appletwrapper2 isSigned = " + this.isSigned);
return this.isSigned;
});

Clazz.newMeth(C$, ['getAppletInfo$','getAppletInfo'], function () {
return (this.wrappedApplet != null  ? (this.wrappedApplet).getAppletInfo$() : null);
});

Clazz.newMeth(C$, ['init$','init'], function () {
this.startTime=System.currentTimeMillis$();
Clazz.new_($I$(3).c$$javax_swing_JApplet$Z,[this, this.isSigned]).start$();
for (var i=this.preloadThreadCount; --i >= 0; ) Clazz.new_($I$(4).c$$org_jmol_applet_AppletWrapper,[this]).start$();

});

Clazz.newMeth(C$, ['update$java_awt_Graphics','update'], function (g) {
if (this.wrappedApplet != null ) {
this.mediaTracker=null;
this.preloadImage=null;
this.fontMetrics=null;
this.wrappedApplet.update$java_awt_Graphics(g);
return;
}var dim=this.getSize$();
if (this.needToCompleteInitialization) p$1.completeInitialization$java_awt_Graphics$java_awt_Dimension.apply(this, [g, dim]);
g.setColor$java_awt_Color(this.bgcolor);
g.fillRect$I$I$I$I(0, 0, dim.width, dim.height);
g.setColor$java_awt_Color(this.textColor);
var imageBottom=0;
if (!this.preloadImageReadyForDisplay && this.mediaTracker != null  ) this.preloadImageReadyForDisplay=this.mediaTracker.checkID$I$Z(0, true);
if (this.preloadImageReadyForDisplay) {
var imageHeight=this.preloadImage.getHeight$java_awt_image_ImageObserver(null);
if (imageHeight > 0) {
if (10 + imageHeight + this.fontHeight  <= dim.height) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.preloadImage, 10, 10, null);
this.preloadImagePainted=true;
imageBottom=10 + imageHeight;
}}}var elapsedTime=((System.currentTimeMillis$() - this.startTime)/1000|0);
if (elapsedTime >= C$.MINIMUM_ELAPSED_SECONDS) {
var messageBaseline=imageBottom + this.fontAscent;
if (messageBaseline < (dim.height/2|0)) messageBaseline=(dim.height/2|0);
 else if (messageBaseline >= dim.height) messageBaseline=dim.height - 1;
g.setFont$java_awt_Font(this.$font);
g.drawString$S$I$I(this.preloadTextMessage, 10, messageBaseline);
var clockText="  " + elapsedTime + " seconds" ;
this.clockWidth=this.fontMetrics.stringWidth$S(clockText);
this.clockX=dim.width - this.clockWidth - 5 ;
if (this.clockX < 0) this.clockX=0;
this.clockBaseline=dim.height - 5;
if ($I$(2).debugging) $I$(2).debug$S(clockText);
g.drawString$S$I$I(clockText, this.clockX, this.clockBaseline);
}});

Clazz.newMeth(C$, ['paint$java_awt_Graphics','paint'], function (g) {
if (this.wrappedApplet != null ) {
this.wrappedApplet.paint$java_awt_Graphics(g);
return;
}this.update$java_awt_Graphics(g);
});

Clazz.newMeth(C$, ['handleEvent$java_awt_Event','handleEvent'], function (e) {
if (this.wrappedApplet != null ) return (this.wrappedApplet).handleEvent$java_awt_Event(e);
return false;
});

Clazz.newMeth(C$, ['getNextPreloadClassName$','getNextPreloadClassName'], function () {
if (this.preloadClassNames == null  || this.preloadClassIndex == this.preloadClassNames.length ) return null;
var className=this.preloadClassNames[this.preloadClassIndex++];
if (className.charAt$I(0) == ".") {
var lastDot=this.previousClassName.lastIndexOf$I(".");
var previousPackageName=this.previousClassName.substring$I$I(0, lastDot);
className=previousPackageName + className;
}return this.previousClassName=className;
});

Clazz.newMeth(C$, 'repaintClock$', function () {
if (!this.preloadImagePainted || this.clockBaseline == 0 ) this.repaint$();
 else this.repaint$I$I$I$I(this.clockX, this.clockBaseline - this.fontAscent, this.clockWidth, this.fontHeight);
});

Clazz.newMeth(C$, 'completeInitialization$java_awt_Graphics$java_awt_Dimension', function (g, dim) {
this.needToCompleteInitialization=false;
try {
if ($I$(2).debugging) {
$I$(2).debug$S("loadImage:" + this.preloadImageName);
}var urlImage=this.getClass$().getClassLoader$().getResource$S(this.preloadImageName);
$I$(2).info$S("urlImage=" + urlImage);
if (urlImage != null ) {
this.preloadImage=$I$(5).getDefaultToolkit$().getImage$java_net_URL(urlImage);
if ($I$(2).debugging) {
$I$(2).debug$S("successfully loaded " + this.preloadImageName);
$I$(2).debug$S("preloadImage=" + this.preloadImage);
}this.mediaTracker=Clazz.new_($I$(6).c$$java_awt_Component,[this]);
this.mediaTracker.addImage$java_awt_Image$I(this.preloadImage, 0);
this.mediaTracker.checkID$I$Z(0, true);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).error$S("getImage failed: " + e);
} else {
throw e;
}
}
var bgcolorName=this.getParameter$S("boxbgcolor");
if (bgcolorName == null ) bgcolorName=this.getParameter$S("bgcolor");
this.bgcolor=p$1.getColorFromName$S.apply(this, [bgcolorName]);
this.textColor=p$1.getContrastingBlackOrWhite$java_awt_Color.apply(this, [this.bgcolor]);
this.fontSize=(dim.height/C$.fontSizeDivisor|0);
if (this.fontSize < 7) this.fontSize=7;
if (this.fontSize > 30) this.fontSize=30;
while (true){
this.$font=Clazz.new_($I$(7).c$$S$I$I,[C$.fontFace, 0, this.fontSize]);
this.fontMetrics=g.getFontMetrics$java_awt_Font(this.$font);
if (this.fontMetrics.stringWidth$S(this.preloadTextMessage) + 10 < dim.width) break;
if (this.fontSize < 8) break;
this.fontSize-=2;
}
this.fontHeight=this.fontMetrics.getHeight$();
this.fontAscent=this.fontMetrics.getAscent$();
return this.isSigned;
}, p$1);

Clazz.newMeth(C$, 'getColorFromName$S', function (strColor) {
if (strColor != null ) {
if (strColor.length$() == 7 && strColor.charAt$I(0) == "#" ) {
try {
var red=$I$(8).parseIntRadix$S$I(strColor.substring$I$I(1, 3), 16);
var grn=$I$(8).parseIntRadix$S$I(strColor.substring$I$I(3, 5), 16);
var blu=$I$(8).parseIntRadix$S$I(strColor.substring$I$I(5, 7), 16);
return Clazz.new_($I$(1).c$$I$I$I,[red, grn, blu]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
} else {
strColor=strColor.toLowerCase$().intern$();
for (var i=C$.colorNames.length; --i >= 0; ) if (strColor == C$.colorNames[i]) return C$.colors[i];

}}return $I$(1).black;
}, p$1);

Clazz.newMeth(C$, 'getContrastingBlackOrWhite$java_awt_Color', function (color) {
var argb=color.getRGB$();
var grayscale=(((2989 * (argb >> 16) & 255) + (5870 * (argb >> 8) & 255) + (1140 * (argb & 255)) + 500 )/1000|0);
return grayscale < 128 ? $I$(1).white : $I$(1).black;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
