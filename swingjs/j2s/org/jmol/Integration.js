(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'java.awt.Dimension','org.jmol.api.JmolViewer','org.jmol.adapter.smarter.SmarterJmolAdapter','javax.swing.JFrame',['org.jmol.Integration','.ApplicationCloser'],['org.jmol.Integration','.JmolPanel'],'javax.swing.JPanel','java.awt.BorderLayout','org.openscience.jmol.app.jmolpanel.console.AppConsole','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Integration", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (argv) {
var frame=Clazz.new_($I$(4).c$$S,["Hello"]);
frame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(5)));
frame.setSize$I$I(410, 700);
var contentPane=frame.getContentPane$();
var jmolPanel=Clazz.new_($I$(6));
jmolPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[400, 400]));
var panel=Clazz.new_($I$(7));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8)));
panel.add$java_awt_Component(jmolPanel);
var panel2=Clazz.new_($I$(7));
panel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8)));
panel2.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[400, 300]));
var console=Clazz.new_($I$(9).c$$org_jmol_api_JmolViewer$java_awt_Container$S,[jmolPanel.viewer, panel2, "History State Clear"]);
jmolPanel.viewer.setJmolCallbackListener$org_jmol_api_JmolCallbackListener(console);
panel.add$S$java_awt_Component("South", panel2);
contentPane.add$java_awt_Component(panel);
frame.setVisible$Z(true);
var strError=jmolPanel.viewer.openFile$S("http://chemapps.stolaf.edu/jmol/docs/examples-11/data/caffeine.xyz");
if (strError == null ) jmolPanel.viewer.evalString$S("delay; move 360 0 0 0 0 0 0 0 4;");
 else $I$(10).error$S(strError);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Integration, "ApplicationCloser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
System.exit$I(0);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Integration, "JmolPanel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewer=null;
this.currentSize=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.viewer=$I$(2).allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener(this, Clazz.new_($I$(3)), null, null, null, null, null);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
this.viewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
