(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SListener','swingjs.a2s.Util']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Frame", null, 'javax.swing.JFrame', 'swingjs.a2s.A2SContainer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getA2SListener$', function () {
return this.listener;
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (title) {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [title, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration', function (gc) {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [null, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_GraphicsConfiguration', function (title, gc) {
C$.superclazz.c$$S$java_awt_GraphicsConfiguration.apply(this, [title, gc]);
C$.$init$.apply(this);
this.listener=Clazz.new_($I$(1));
this.setDefaultCloseOperation$I(0);
$I$(2).setAWTWindowDefaults$java_awt_Component(this);
}, 1);

Clazz.newMeth(C$, 'remove$I', function (i) {
C$.superclazz.prototype.remove$I.apply(this, [i]);
});

Clazz.newMeth(C$, 'setMenuBar$java_awt_MenuBar', function (m) {
this.setJMenuBar$javax_swing_JMenuBar(m);
});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent', function (m) {
var mb=C$.superclazz.prototype.getJMenuBar$.apply(this, []);
if (mb != null ) mb.remove$java_awt_Component(m);
});

Clazz.newMeth(C$, 'unsetMenuBar$', function () {
this.setJMenuBar$javax_swing_JMenuBar(null);
});

Clazz.newMeth(C$, 'getMenubar$', function () {
return this.getJMenuBar$();
});

Clazz.newMeth(C$, 'addNotify$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.getOrCreatePeer$();
if (this.getMenubar$() != null ) {
this.getMenubar$().addNotify$();
}C$.superclazz.prototype.addNotify$.apply(this, []);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
