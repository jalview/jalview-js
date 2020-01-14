(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'java.net.URL','swingjs.api.Interface','java.awt.Dimension','javajs.util.Lst','java.awt.Insets','swingjs.JSThreadGroup','swingjs.JSAppletThread','Thread','sun.awt.SunToolkit','java.awt.Toolkit','swingjs.JSGraphicsConfiguration','sun.applet.AppletEventMulticaster','sun.applet.AppletEvent','javax.swing.JFrame','javax.swing.SwingUtilities','javax.imageio.ImageIO','swingjs.JSUtil','java.awt.Font','swingjs.JSFocusPeer','javajs.util.PT','swingjs.JSFrameViewer','java.util.ArrayList','swingjs.JSToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSAppletViewer", null, 'swingjs.JSFrameViewer', ['java.applet.AppletStub', 'java.applet.AppletContext']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
try {
$I$(1).setURLStreamHandlerFactory$java_net_URLStreamHandlerFactory($I$(2).getInstance$S$Z("javajs.util.AjaxURLStreamHandlerFactory", false));
} catch (e) {
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.maximumSize=0;
this.graphicsConfig=null;
this.threadGroup=null;
this.myThread=null;
this.haveFrames=false;
this.defaultAppletSize=null;
this.currentAppletSize=null;
this.nextStatus=0;
this.status=0;
this.listeners=null;
this.allWindows=null;
this.sharedOwnerFrame=null;
this.appContext=null;
this.timerQueue=null;
this.isResizable=false;
this.haveResizable=false;
this.addFrame=false;
this.jAppletFrame=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.maximumSize=2147483647;
this.haveFrames=false;
this.defaultAppletSize=Clazz.new_($I$(3).c$$I$I,[10, 10]);
this.currentAppletSize=Clazz.new_($I$(3).c$$I$I,[10, 10]);
this.status=0;
this.allWindows=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'addWindow$java_awt_Window', function (window) {
this.allWindows.removeObj$O(window);
this.allWindows.addLast$TV(window);
});

Clazz.newMeth(C$, 'c$$java_util_Hashtable', function (params) {
C$.superclazz.c$$java_util_Hashtable.apply(this, [params]);
C$.$init$.apply(this);
System.out.println$S("JSAppletViewer initializing2");
this.isApplet=true;
this.appletViewer=this;
p$1.setDisplayParams$java_util_Hashtable.apply(this, [params]);
}, 1);

Clazz.newMeth(C$, 'setDisplayParams$java_util_Hashtable', function (params) {
this.display=params.get$O("display");
var s="" + params.get$O("isResizable");
this.isResizable="true".equalsIgnoreCase$S(s);
this.haveResizable=(this.isResizable || "false".equalsIgnoreCase$S(s) );
this.addFrame="true".equalsIgnoreCase$S("" + params.get$O("addFrame"));
this.insets=Clazz.new_($I$(5).c$$I$I$I$I,[0, 0, 0, 0]);
this.threadGroup=Clazz.new_($I$(6).c$$S,[this.appletName]);
this.myThread=Clazz.new_($I$(7).c$$swingjs_JSAppletViewer$ThreadGroup$S,[this, this.threadGroup, this.appletName]);
$I$(8).thisThread=(this.myThread);
this.appContext=$I$(9).createNewAppContext$();
$I$(10).getDefaultToolkit$();
Clazz.new_($I$(11)).getDevice$();
}, p$1);

Clazz.newMeth(C$, 'start$', function () {
if (this.status == 0) this.myThread.start$();
 else this.showStatus$S("already started");
});

Clazz.newMeth(C$, 'addAppletListener$sun_applet_AppletListener', function (l) {
this.listeners=$I$(12).add$sun_applet_AppletListener$sun_applet_AppletListener(this.listeners, l);
});

Clazz.newMeth(C$, 'removeAppletListener$sun_applet_AppletListener', function (l) {
this.listeners=$I$(12).remove$sun_applet_AppletListener$sun_applet_AppletListener(this.listeners, l);
});

Clazz.newMeth(C$, 'dispatchAppletEvent$I$O', function (id, argument) {
if (this.listeners != null ) {
var evt=Clazz.new_($I$(13).c$$O$I$O,[this, id, argument]);
this.listeners.appletStateChanged$(evt);
}});

Clazz.newMeth(C$, 'isActive$', function () {
return true;
});

Clazz.newMeth(C$, 'appletResize$I$I', function (width, height) {
var currentSize=Clazz.new_($I$(3).c$$I$I,[this.currentAppletSize.width, this.currentAppletSize.height]);
this.currentAppletSize.width=width;
this.currentAppletSize.height=height;
this.applet.getRootPane$().setBounds$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
this.applet.getContentPane$().setBounds$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
this.applet.setBounds$I$I$I$I(0, 0, width, height);
(this.applet.getContentPane$()).revalidate$();
if (this.addFrame) {
this.jAppletFrame=Clazz.new_($I$(14).c$$S,["SwingJS Applet Viewer"]);
var pane=this.applet.getContentPane$();
this.jAppletFrame.setContentPane$java_awt_Container(pane);
this.applet.setVisible$Z(false);
this.jAppletFrame.pack$();
this.jAppletFrame.setDefaultCloseOperation$I(2);
}$I$(15).invokeLater$Runnable(((P$.JSAppletViewer$1||
(function(){var C$=Clazz.newClass(P$, "JSAppletViewer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['swingjs.JSAppletViewer'].applet.repaint$I$I$I$I(0, 0, this.b$['swingjs.JSAppletViewer'].getWidth$.apply(this.b$['swingjs.JSAppletViewer'], []), this.b$['swingjs.JSAppletViewer'].getHeight$.apply(this.b$['swingjs.JSAppletViewer'], []));
this.b$['swingjs.JSAppletViewer'].dispatchAppletEvent$I$O.apply(this.b$['swingjs.JSAppletViewer'], [51234, this.$finals$.currentSize]);
});
})()
), Clazz.new_(P$.JSAppletViewer$1.$init$, [this, {currentSize: currentSize}])));
});

Clazz.newMeth(C$, 'getDocumentBase$', function () {
try {
return Clazz.new_($I$(1).c$$S,[this.params.get$O("documentBase")]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getCodeBase$', function () {
try {
return Clazz.new_($I$(1).c$$S,[this.params.get$O("codePath")]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getParameter$S', function (name) {
var s=this.params.get$O(name);
System.out.println$S("get parameter: " + name + " = " + s );
return (s == null  ? null : "" + s);
});

Clazz.newMeth(C$, 'getAppletContext$', function () {
return this;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.html5Applet._getHeight();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.html5Applet._getWidth();
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I', function (x, y, width, height) {
this.applet.reshape$I$I$I$I(x, y, width, height);
this.currentAppletSize.width=width;
this.currentAppletSize.height=height;
});

Clazz.newMeth(C$, 'getImage$java_net_URL', function (url) {
try {
return $I$(16).read$java_net_URL(url);
} catch (t) {
return null;
}
});

Clazz.newMeth(C$, 'getApplet$S', function (name) {
var applet=null;
{
applet = SwingJS._applets[name]; applet && (applet = applet._applet);
}
return applet;
});

Clazz.newMeth(C$, 'getApplets$', function () {
return null;
});

Clazz.newMeth(C$, 'showDocument$java_net_URL', function (url) {
$I$(17).showWebPage$java_net_URL$O(url, null);
});

Clazz.newMeth(C$, 'showDocument$java_net_URL$S', function (url, target) {
$I$(17).showWebPage$java_net_URL$O(url, target);
});

Clazz.newMeth(C$, 'showStatus$S', function (status) {
$I$(17).log$S(status);
{
Clazz._LoaderProgressMonitor.showStatus(status, true);
}
});

Clazz.newMeth(C$, 'showAppletStatus$S', function (status) {
this.getAppletContext$().showStatus$S(this.htmlName + " " + status );
}, p$1);

Clazz.newMeth(C$, 'showAppletException$Throwable', function (t) {
{
this.showAppletStatus$S("error " + (t.getMessage ? t.getMessage$() : t));
if (t.printStackTrace$) t.printStackTrace$();
else System.out.println(t.stack);
}
}, p$1);

Clazz.newMeth(C$, 'run1$I', function (mode) {
System.out.println$S("JSAppletViewer thread run1 mode=" + mode + " status=" + this.nextStatus );
var ok=false;
switch (mode) {
case 0:
this.currentAppletSize.width=this.defaultAppletSize.width=this.getWidth$();
this.currentAppletSize.height=this.defaultAppletSize.height=this.getHeight$();
this.nextStatus=1;
ok=true;
break;
case 1:
switch (this.nextStatus) {
case 1:
if (this.status != 0) {
p$1.showAppletStatus$S.apply(this, ["notdisposed"]);
this.status=7;
break;
}System.out.println$S("JSAppletViewer runloader");
p$1.runLoader.apply(this, []);
this.nextStatus=(this.main == null  ? 2 : 76);
ok=true;
break;
case 2:
if (this.status != 1 && this.status != 5 ) {
p$1.showAppletStatus$S.apply(this, ["notloaded"]);
break;
}System.out.println$S("JSAppletViewer init");
this.applet.setFont$java_awt_Font(Clazz.new_($I$(18).c$$S$I$I,["Dialog", 0, 12]));
this.applet.resizeOriginal$I$I(this.defaultAppletSize.width, this.defaultAppletSize.height);
this.applet.init$();
this.applet.validate$();
this.status=2;
p$1.showAppletStatus$S.apply(this, ["initialized"]);
this.nextStatus=3;
ok=true;
break;
case 3:
if (this.status != 2 && this.status != 4 ) {
p$1.showAppletStatus$S.apply(this, ["notstarted"]);
this.status=7;
break;
}this.applet.getRootPane$().addNotify$();
System.out.println$S("JSAppletViewer start" + this.currentAppletSize);
this.applet.resizeOriginal$I$I(this.currentAppletSize.width, this.currentAppletSize.height);
this.applet.start$();
this.status=3;
p$1.showAppletStatus$S.apply(this, ["started"]);
this.nextStatus=35;
ok=true;
break;
case 35:
this.applet.getContentPane$().setBounds$java_awt_Rectangle(this.applet.getBounds$());
this.applet.setVisible$Z(true);
this.applet.validate$();
p$1.showAppletStatus$S.apply(this, ["ready"]);
$I$(17).readyCallback$S$S$java_awt_JSComponent$swingjs_JSAppletViewer(this.appletName, this.fullName, this.applet, this);
if (this.isResizable && !this.addFrame && this.resizer == null   ) {
this.resizer=($I$(17).getInstance$S("swingjs.plaf.Resizer")).set$swingjs_JSFrameViewer$javax_swing_RootPaneContainer(this, this.top);
if (this.resizer != null ) this.resizer.show$();
}$I$(19).setFocusLast$java_applet_JSApplet(this.applet);
this.applet.repaint$();
break;
case 4:
if (this.status == 3) {
this.status=4;
this.applet.setVisible$Z(false);
this.applet.stop$();
p$1.showAppletStatus$S.apply(this, ["stopped"]);
} else {
p$1.showAppletStatus$S.apply(this, ["notstopped"]);
this.status=7;
}break;
case 5:
if (this.status == 4 || this.status == 2 ) {
this.status=5;
this.applet.destroy$();
p$1.showAppletStatus$S.apply(this, ["destroyed"]);
} else {
p$1.showAppletStatus$S.apply(this, ["notdestroyed"]);
this.status=7;
}break;
case 75:
if (this.status == 5 || this.status == 1 ) {
p$1.showAppletStatus$S.apply(this, ["notdisposed"]);
this.status=7;
} else {
this.status=0;
this.applet=null;
p$1.showAppletStatus$S.apply(this, ["disposed"]);
}break;
case 76:
p$1.showAppletStatus$S.apply(this, ["running " + this.main]);
var args=this.params.get$O("args");
if (Clazz.instanceOf(args, "java.lang.String")) args=$I$(20).split$S$S(args, " ");
(this.applet).runMain$S$SA(this.main, args);
$I$(17).readyCallback$S$S$java_awt_JSComponent$swingjs_JSAppletViewer(this.appletName, this.fullName, this.applet, this);
break;
case 6:
break;
default:
System.out.println$S("unrecognized JSAppletViewer status: " + this.nextStatus);
break;
}
break;
default:
System.out.println$S("unrecognized JSAppletThread mode: " + mode);
break;
}
return (ok ? 1 : 2);
});

Clazz.newMeth(C$, 'runLoader', function () {
this.dispatchAppletEvent$I$O(51235, null);
this.status=1;
this.main=this.getParameter$S("main");
var code=(this.main == null  ? this.getParameter$S("code") : null);
try {
if (code == null  && this.main == null  ) {
System.err.println$S("runloader.err-- \"code\" or \"main\" must be specified.");
throw Clazz.new_(Clazz.load('InstantiationException').c$$S,["\"code\" or \"main\" must be specified."]);
}if (code == null ) code="swingjs.JSApplet";
 else if (code.indexOf$S(".") < 0) code="_." + code;
this.top=this.applet=$I$(17).getInstance$S(code);
if (this.applet == null ) {
System.out.println$S(code + " could not be launched");
this.status=7;
} else if (!(Clazz.instanceOf(this.applet, "javax.swing.JApplet"))) {
$I$(17).alert$O(code + " is not a JApplet!?");
this.status=7;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
this.status=7;
p$1.showAppletException$Throwable.apply(this, [e]);
return;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.status=7;
p$1.showAppletException$Throwable.apply(this, [e]);
return;
}
} else if (Clazz.exceptionOf(e$$,"ThreadDeath")){
var e = e$$;
{
this.status=7;
p$1.showAppletStatus$S.apply(this, ["death"]);
return;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
this.status=7;
p$1.showAppletException$Throwable.apply(this, [e]);
return;
}
} else {
throw e$$;
}
} finally {
this.dispatchAppletEvent$I$O(51236, null);
}
if (this.applet != null ) {
this.applet.setStub$java_applet_AppletStub(this);
this.applet.setVisible$Z(false);
this.applet.setDispatcher$();
p$1.showAppletStatus$S.apply(this, ["loaded"]);
}}, p$1);

Clazz.newMeth(C$, 'newFrameViewer$Z', function (forceNew) {
return (this.haveFrames || forceNew  ? Clazz.new_($I$(21)) : null);
});

Clazz.newMeth(C$, 'getTimerQueue$', function () {
return (this.timerQueue == null  ? (this.timerQueue=Clazz.new_($I$(22))) : this.timerQueue);
});

Clazz.newMeth(C$, 'exit$', function () {
for (var i=this.allWindows.size$(); --i >= 0; ) try {
this.allWindows.get$I(i).dispose$();
} catch (e) {
}

});

Clazz.newMeth(C$, 'getAudioClip$java_net_URL', function (url) {
return $I$(23).getAudioClip$java_net_URL(url);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-18 23:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
