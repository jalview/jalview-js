(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Desktop','jalview.util.Platform','java.awt.desktop.AboutHandler','java.awt.desktop.PreferencesHandler','java.awt.desktop.QuitHandler','jalview.bin.Cache','javax.swing.JOptionPane','jalview.util.MessageManager','java.awt.desktop.QuitStrategy']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "APQHandlers");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['setAPQHandlers']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAPQHandlers$jalview_gui_Desktop', function (jalviewDesktop) {
if (!C$.setAPQHandlers) {
var desktopClass=Clazz.getClass($I$(1));
var hdesktop=$I$(1).getDesktop$();
try {
var specversion=new Float(Float.parseFloat$S(System.getProperty$S("java.specification.version")));
if ((specversion).valueOf() >= 9 ) {
if ($I$(2).isAMacAndNotJS$()) {
if (desktopClass.getDeclaredMethod$S$ClassA("setAboutHandler", Clazz.array(Class, -1, [Clazz.getClass($I$(3),['handleAbout$java_awt_desktop_AboutEvent'])])) != null ) {
hdesktop.setAboutHandler$java_awt_desktop_AboutHandler(((P$.APQHandlers$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "APQHandlers$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.desktop.AboutHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'handleAbout$java_awt_desktop_AboutEvent', function (e) {
this.$finals$.jalviewDesktop.aboutMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.APQHandlers$1.$init$,[this, {jalviewDesktop:jalviewDesktop}])));
}if (desktopClass.getDeclaredMethod$S$ClassA("setPreferencesHandler", Clazz.array(Class, -1, [Clazz.getClass($I$(4),['handlePreferences$java_awt_desktop_PreferencesEvent'])])) != null ) {
hdesktop.setPreferencesHandler$java_awt_desktop_PreferencesHandler(((P$.APQHandlers$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "APQHandlers$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.desktop.PreferencesHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'handlePreferences$java_awt_desktop_PreferencesEvent', function (e) {
this.$finals$.jalviewDesktop.preferences_actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.APQHandlers$2.$init$,[this, {jalviewDesktop:jalviewDesktop}])));
}if (desktopClass.getDeclaredMethod$S$ClassA("setQuitHandler", Clazz.array(Class, -1, [Clazz.getClass($I$(5),['handleQuitRequestWith$java_awt_desktop_QuitEvent$java_awt_desktop_QuitResponse'])])) != null ) {
hdesktop.setQuitHandler$java_awt_desktop_QuitHandler(((P$.APQHandlers$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "APQHandlers$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.desktop.QuitHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'handleQuitRequestWith$java_awt_desktop_QuitEvent$java_awt_desktop_QuitResponse', function (e, r) {
var confirmQuit=$I$(6).getDefault$S$Z("CONFIRM_KEYBOARD_QUIT", true);
var n;
if (confirmQuit) {
n=$I$(7,"showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon",[null, $I$(8).getString$S("label.quit_jalview"), $I$(8).getString$S("action.quit"), 2, -1, null]);
} else {
n=0;
}if (n == 0) {
System.out.println$S("Shortcut Quit confirmed by user");
this.$finals$.jalviewDesktop.quit$();
r.performQuit$();
} else {
r.cancelQuit$();
System.out.println$S("Shortcut Quit cancelled by user");
}});
})()
), Clazz.new_(P$.APQHandlers$3.$init$,[this, {jalviewDesktop:jalviewDesktop}])));
hdesktop.setQuitStrategy$java_awt_desktop_QuitStrategy($I$(9).CLOSE_ALL_WINDOWS);
}}C$.setAPQHandlers=true;
} else {
System.out.println$S("Not going to try setting APQ Handlers as java.spec.version is " + specversion.toString());
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.out.println$S("Exception when looking for About, Preferences, Quit Handlers");
}
} else {
var t = e$$;
{
System.out.println$S("Throwable when looking for About, Preferences, Quit Handlers");
}
}
}
}return C$.setAPQHandlers;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.setAPQHandlers=false;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
