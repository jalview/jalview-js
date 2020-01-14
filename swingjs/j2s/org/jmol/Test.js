(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'java.awt.Dimension','org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.JmolViewer','javax.swing.JFrame',['org.jmol.Test','.AppCloser']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Test", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewer=null;
this.adapter=null;
this.currentSize=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
(Clazz.new_(C$)).viewer.loadInline$S("3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.adapter=Clazz.new_($I$(2));
this.viewer=$I$(3).allocateViewer$O$org_jmol_api_JmolAdapter(this, this.adapter);
var newFrame=Clazz.new_($I$(4));
newFrame.getContentPane$().add$java_awt_Component(this);
newFrame.setSize$I$I(300, 300);
newFrame.setVisible$Z(true);
newFrame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(5), [this, null]));
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
this.viewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
});
;
(function(){var C$=Clazz.newClass(P$.Test, "AppCloser", function(){
Clazz.newInstance(this, arguments[0],true,C$);
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
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
