(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'java.awt.Dimension','org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.JmolViewer','javax.swing.JFrame',['org.jmol.Test2','.AppCloser']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test2", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['AppCloser',20]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['viewer','org.jmol.api.JmolViewer','adapter','org.jmol.api.JmolAdapter','currentSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$.c$$S,["3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n"]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.adapter=Clazz.new_($I$(2,1));
this.viewer=$I$(3).allocateViewer$O$org_jmol_api_JmolAdapter(this, this.adapter);
var newFrame=Clazz.new_($I$(4,1));
newFrame.getContentPane$().add$java_awt_Component(this);
newFrame.setSize$I$I(300, 300);
newFrame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (model) {
Clazz.super_(C$, this);
this.adapter=Clazz.new_($I$(2,1));
this.viewer=$I$(3).allocateViewer$O$org_jmol_api_JmolAdapter(this, this.adapter);
var newFrame=Clazz.new_($I$(4,1));
newFrame.getContentPane$().add$java_awt_Component(this);
newFrame.setSize$I$I(300, 300);
newFrame.setVisible$Z(true);
newFrame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(5,1),[this, null]));
this.viewer.loadInline$S(model);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
this.viewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Test2, "AppCloser", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
System.exit$I(0);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
