(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SListener','java.awt.FlowLayout','swingjs.JSUtil','java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Applet", null, 'javax.swing.JApplet', 'swingjs.a2s.A2SContainer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
C$.fixAWTPaint$java_awt_Component$Class(this, Clazz.getClass(C$));
this.listener=Clazz.new_($I$(1));
this.addMouseListener$java_awt_event_MouseListener(this.listener);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.listener);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2)));
(this.getContentPane$()).setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, 'fixAWTPaint$java_awt_Component$Class', function (c, cl) {
var f=$I$(3).getJ2SAlias$java_awt_Component$S(c, "paint$java_awt_Graphics");
if ($I$(3).isOverridden$O$Class(f, cl) && f.toString().indexOf$S("C$.superclazz.prototype.paint$java_awt_Graphics.apply(this") < 0 ) {

c.paint$java_awt_Graphics = function(g) { cl.$clazz$.prototype.paint$java_awt_Graphics.apply(c,[g]);
f.apply(c,[g]);
}
}}, 1);

Clazz.newMeth(C$, ['setBackground$java_awt_Color','setBackground'], function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
this.getContentPane$().setBackground$java_awt_Color(c);
});

Clazz.newMeth(C$, ['getA2SListener$','getA2SListener'], function () {
return this.listener;
});

Clazz.newMeth(C$, ['getCodeBase$','getCodeBase'], function () {
var codeBase=C$.superclazz.prototype.getCodeBase$.apply(this, []).toString();
if (codeBase.endsWith$S("/bin/")) {
var appletPath=this.getClass$().getName$();
codeBase += appletPath.substring$I$I(0, appletPath.lastIndexOf$S(".") + 1).replace$C$C(".", "/");
}try {
return Clazz.new_($I$(4).c$$S,[codeBase]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-18 23:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
