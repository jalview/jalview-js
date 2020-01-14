(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSPanel", null, 'java.awt.Container');
C$.nameCounter=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nameCounter=0;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager', function (layout) {
Clazz.super_(C$, this,1);
this.setAppContext$();
this.setLayout$java_awt_LayoutManager(layout);
}, 1);

Clazz.newMeth(C$, 'canPaint$', function () {
return this.isContentPane;
});

Clazz.newMeth(C$, 'constructComponentName$', function () {
return "panel" + C$.nameCounter++;
});

Clazz.newMeth(C$, 'addNotify$', function () {
this.getOrCreatePeer$();
C$.superclazz.prototype.addNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'getOrCreatePeer$', function () {
return (this.ui == null  ? null : this.peer == null  ? (this.peer=this.getToolkit$().createPanel$java_awt_Panel(this)) : this.peer);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:23 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
