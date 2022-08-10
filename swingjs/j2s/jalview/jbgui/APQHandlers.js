(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[[0,'jalview.util.Platform','com.formdev.flatlaf.extras.FlatDesktop',['com.formdev.flatlaf.extras.FlatDesktop','.Action'],'jalview.bin.Cache','javax.swing.JFrame','javax.swing.JOptionPane','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "APQHandlers");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['setAbout','setPreferences','setQuit']]]

Clazz.newMeth(C$, 'setAPQHandlers$jalview_jbgui_GDesktop',  function (desktop) {
if ($I$(1).isJS$()) {
return false;
}if ($I$(2,"isSupported$com_formdev_flatlaf_extras_FlatDesktop_Action",[$I$(3).APP_ABOUT])) {
$I$(2,"setAboutHandler$Runnable",[((P$.APQHandlers$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "APQHandlers$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.desktop.aboutMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.APQHandlers$lambda1.$init$,[this, {desktop:desktop}]))]);
C$.setAbout=true;
}if ($I$(2,"isSupported$com_formdev_flatlaf_extras_FlatDesktop_Action",[$I$(3).APP_PREFERENCES])) {
$I$(2,"setPreferencesHandler$Runnable",[((P$.APQHandlers$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "APQHandlers$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.desktop.preferences_actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.APQHandlers$lambda2.$init$,[this, {desktop:desktop}]))]);
C$.setPreferences=true;
}if ($I$(2,"isSupported$com_formdev_flatlaf_extras_FlatDesktop_Action",[$I$(3).APP_QUIT_HANDLER])) {
$I$(2,"setQuitHandler$java_util_function_Consumer",[(P$.APQHandlers$lambda3$||(P$.APQHandlers$lambda3$=(((P$.APQHandlers$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "APQHandlers$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$com_formdev_flatlaf_extras_FlatDesktop_QuitResponse','accept$O'],  function (response) {
var confirmQuit=$I$(4).getDefault$S$Z("CONFIRM_KEYBOARD_QUIT", true);
var canQuit=!confirmQuit;
var n;
if (confirmQuit) {
var dialogParent=Clazz.new_($I$(5,1));
dialogParent.setAlwaysOnTop$Z(true);
n=$I$(6,"showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon",[dialogParent, $I$(7).getString$S("label.quit_jalview"), $I$(7).getString$S("action.quit"), 2, -1, null]);
dialogParent.setAlwaysOnTop$Z(false);
dialogParent.dispose$();
} else {
n=0;
}canQuit=(n == 0);
if (canQuit) {
response.performQuit$();
} else {
response.cancelQuit$();
}});
})()
), Clazz.new_(P$.APQHandlers$lambda3.$init$,[this, null])))))]);
C$.setQuit=true;
}return C$.setAbout || C$.setPreferences || C$.setQuit  ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.setAbout=false;
C$.setPreferences=false;
C$.setQuit=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
