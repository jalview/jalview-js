(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'org.openscience.jmol.app.janocchio.Nmr','org.openscience.jmol.app.janocchio.NmrPlugin','javax.swing.JOptionPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NmrPlugin", null, null, 'org.openscience.jmol.app.JmolPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['started'],'S',['jmolUnits'],'O',['nmrApp','org.openscience.jmol.app.janocchio.Nmr','jmolAppViewer','org.jmol.viewer.Viewer']]
,['S',['notification']]]

Clazz.newMeth(C$, 'start$javax_swing_JFrame$org_jmol_viewer_Viewer$java_util_Map', function (frame, vwr, jmolOptions) {
this.jmolAppViewer=vwr;
p$1.startApp.apply(this, []);
});

Clazz.newMeth(C$, 'startApp', function () {
this.jmolUnits=this.jmolAppViewer.evaluateExpression$O("measurementUnits");
this.nmrApp=Clazz.new_([Clazz.array(String, -1, ["--Plugin", "-g" + this.jmolAppViewer.getScreenWidth$() + "x" + this.jmolAppViewer.getScreenHeight$() ]), this],$I$(1,1).c$$SA$org_openscience_jmol_app_janocchio_NmrPlugin);
this.nmrApp.mainFrame.addWindowListener$java_awt_event_WindowListener(((P$.NmrPlugin$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NmrPlugin$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.WindowListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
if ($I$(2).notification != null ) {
$I$(3,"showMessageDialog$java_awt_Component$O",[this.b$['org.openscience.jmol.app.janocchio.NmrPlugin'].nmrApp.mainFrame, $I$(2).notification]);
this.b$['org.openscience.jmol.app.janocchio.NmrPlugin'].nmrApp.nmrPanel.coupleTable.setCHequation$S("none");
}$I$(2).notification=null;
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.NmrPlugin'].transferStateToJmol$.apply(this.b$['org.openscience.jmol.app.janocchio.NmrPlugin'], []);
this.b$['org.openscience.jmol.app.janocchio.NmrPlugin'].nmrApp=null;
this.b$['org.openscience.jmol.app.janocchio.NmrPlugin'].started=false;
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});
})()
), Clazz.new_(P$.NmrPlugin$1.$init$,[this, null])));
this.started=true;
}, p$1);

Clazz.newMeth(C$, 'transferStateFromJmol', function () {
var state=this.jmolAppViewer.getStateInfo$();
this.nmrApp.nmrPanel.vwr.script$S(state);
this.jmolAppViewer.script$S("select none;set measurementUnits HZ");
}, p$1);

Clazz.newMeth(C$, 'transferStateToJmol$', function () {
this.jmolAppViewer.script$S(this.nmrApp.nmrPanel.vwr.getStateInfo$());
this.jmolAppViewer.script$S("select off none;set measurementUnits " + this.jmolUnits);
});

Clazz.newMeth(C$, 'destroy$', function () {
try {
this.nmrApp.nmrPanel.frame.dispose$();
} catch (t) {
}
this.started=false;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return "0.1.0";
});

Clazz.newMeth(C$, 'getName$', function () {
return "Janocchio";
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
if (!b) {
this.transferStateToJmol$();
}if (this.started) {
p$1.transferStateFromJmol.apply(this, []);
this.nmrApp.nmrPanel.frame.setVisible$Z(b);
}});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
});

Clazz.newMeth(C$, 'getMenuIcon$', function () {
return null;
});

Clazz.newMeth(C$, 'getMenuText$', function () {
return "Janocchio NMR";
});

Clazz.newMeth(C$, 'isStarted$', function () {
return this.started;
});

Clazz.newMeth(C$, 'getWebSite$', function () {
return "http://janocchio.sourceforge.net/index.html";
});

C$.$static$=function(){C$.$static$=0;
C$.notification="The Janocchio plugin is experimental; it has not been fully tested. Double-click and drag to create measurements in Hz.";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
