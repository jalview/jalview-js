(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'java.awt.Dimension','org.jmol.api.JmolViewer','org.jmol.adapter.smarter.SmarterJmolAdapter','javax.swing.JFrame',['org.jmol.Integration','.ApplicationCloser'],['org.jmol.Integration','.JmolPanel'],'javax.swing.JPanel','java.awt.BorderLayout','org.openscience.jmol.app.jmolpanel.console.AppConsole','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Integration", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ApplicationCloser',8],['JmolPanel',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA', function (argv) {
var frame=Clazz.new_($I$(4,1).c$$S,["Hello"]);
frame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(5,1)));
frame.setSize$I$I(410, 700);
var contentPane=frame.getContentPane$();
var jmolPanel=Clazz.new_($I$(6,1));
jmolPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[400, 400]));
var panel=Clazz.new_($I$(7,1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
panel.add$java_awt_Component(jmolPanel);
var panel2=Clazz.new_($I$(7,1));
panel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
panel2.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[400, 300]));
var console=Clazz.new_($I$(9,1).c$$org_jmol_api_JmolViewer$java_awt_Container$S,[jmolPanel.viewer, panel2, "History State Clear"]);
jmolPanel.viewer.setJmolCallbackListener$org_jmol_api_JmolCallbackListener(console);
panel.add$S$java_awt_Component("South", panel2);
contentPane.add$java_awt_Component(panel);
frame.setVisible$Z(true);
var strError=jmolPanel.viewer.openFile$S("http://chemapps.stolaf.edu/jmol/docs/examples-11/data/caffeine.xyz");
if (strError == null ) jmolPanel.viewer.evalString$S("delay; move 360 0 0 0 0 0 0 0 4;");
 else $I$(10).error$S(strError);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Integration, "ApplicationCloser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
System.exit$I(0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Integration, "JmolPanel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['viewer','org.jmol.api.JmolViewer','currentSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.viewer=(function(a,f){return f.apply(null,a)})([this, Clazz.new_($I$(3,1)), null, null, null, null, null],$I$(2).allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
this.viewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
