(function(){var P$=Clazz.newPackage("java.applet"),I$=[[0,'java.net.URL','javax.swing.RepaintManager','sun.applet.AppletAudioClip','java.util.Locale']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSApplet", null, 'java.awt.JSPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.temporaryLostComponent=null;
this.stub=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'isFocusableWindow$', function () {
return true;
});

Clazz.newMeth(C$, 'getModalBlocker$', function () {
return null;
});

Clazz.newMeth(C$, 'addWindowListener$java_awt_event_WindowListener', function (w) {
});

Clazz.newMeth(C$, 'addOwnedWindow$java_awt_Window', function (w) {
});

Clazz.newMeth(C$, 'removeOwnedWindow$java_awt_Window', function (weakWindow) {
});

Clazz.newMeth(C$, 'getTemporaryLostComponent$', function () {
return this.temporaryLostComponent;
});

Clazz.newMeth(C$, 'setTemporaryLostComponent$java_awt_Component', function (component) {
var previousComp=this.temporaryLostComponent;
if (component == null  || component.canBeFocusOwner$() ) {
this.temporaryLostComponent=component;
} else {
this.temporaryLostComponent=null;
}return previousComp;
});

Clazz.newMeth(C$, 'setStub$java_applet_AppletStub', function (stub) {
this.stub=stub;
});

Clazz.newMeth(C$, 'isActive$', function () {
if (this.stub != null ) {
return this.stub.isActive$();
} else {
return false;
}});

Clazz.newMeth(C$, 'getDocumentBase$', function () {
return this.stub.getDocumentBase$();
});

Clazz.newMeth(C$, 'getCodeBase$', function () {
if (this.stub != null ) return this.stub.getCodeBase$();
var path=this.getClass$().getName$().replace$CharSequence$CharSequence(".", "/");
try {
return Clazz.new_($I$(1).c$$S,["http://./" + path.substring$I$I(0, path.lastIndexOf$S("/") + 1)]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getParameter$S', function (name) {
return this.stub.getParameter$S(name);
});

Clazz.newMeth(C$, 'getAppletContext$', function () {
return this.stub.getAppletContext$();
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b) this.repaint$();
});

Clazz.newMeth(C$, 'resize$I$I', function (width, height) {
if (this.stub == null ) this.resizeOriginal$I$I(width, height);
});

Clazz.newMeth(C$, 'resizeHTML$I$I', function (width, height) {
if (this.appletViewer != null ) {
this.appletViewer.html5Applet._resizeApplet(Clazz.array(Integer.TYPE, -1, [width, height]));
if (this.stub != null ) {
var root=(this).getRootPane$();
root.invalidate$();
(root.getUI$()).setPainted$O(null);
root._isBackgroundPainted=false;
$I$(2).currentManager$java_awt_Component(this).addInvalidComponent$javax_swing_JComponent(root);
}}});

Clazz.newMeth(C$, 'resizeOriginal$I$I', function (width, height) {
var d=this.size$();
if ((d.width != width) || (d.height != height) ) {
C$.superclazz.prototype.resize$I$I.apply(this, [width, height]);
if (this.stub != null ) {
this.stub.appletResize$I$I(width, height);
}}});

Clazz.newMeth(C$, 'resize$java_awt_Dimension', function (d) {
this.resize$I$I(d.width, d.height);
});

Clazz.newMeth(C$, 'showStatus$S', function (msg) {
this.getAppletContext$().showStatus$S(msg);
});

Clazz.newMeth(C$, 'getImage$java_net_URL', function (url) {
return this.getAppletContext$().getImage$java_net_URL(url);
});

Clazz.newMeth(C$, 'getImage$java_net_URL$S', function (url, name) {
try {
return this.getImage$java_net_URL(Clazz.new_($I$(1).c$$java_net_URL$S,[url, name]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'newAudioClip$java_net_URL', function (url) {
return Clazz.new_($I$(3).c$$java_net_URL,[url]);
}, 1);

Clazz.newMeth(C$, 'getAudioClip$java_net_URL', function (url) {
return this.getAppletContext$().getAudioClip$java_net_URL(url);
});

Clazz.newMeth(C$, 'getAudioClip$java_net_URL$S', function (url, name) {
try {
return this.getAudioClip$java_net_URL(Clazz.new_($I$(1).c$$java_net_URL$S,[url, name]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getAppletInfo$', function () {
return null;
});

Clazz.newMeth(C$, 'getLocale$', function () {
var locale=C$.superclazz.prototype.getLocale$.apply(this, []);
if (locale == null ) {
return $I$(4).getDefault$();
}return locale;
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return null;
});

Clazz.newMeth(C$, 'play$java_net_URL', function (url) {
var clip=this.getAudioClip$java_net_URL(url);
if (clip != null ) {
clip.play$();
}});

Clazz.newMeth(C$, 'play$java_net_URL$S', function (url, name) {
var clip=this.getAudioClip$java_net_URL$S(url, name);
if (clip != null ) {
clip.play$();
}});

Clazz.newMeth(C$, 'init$', function () {
});

Clazz.newMeth(C$, 'start$', function () {
});

Clazz.newMeth(C$, 'stop$', function () {
});

Clazz.newMeth(C$, 'destroy$', function () {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-18 23:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
