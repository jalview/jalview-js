(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'java.awt.JSComponent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SunGraphicsCallback", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'constrainGraphics$java_awt_Graphics$java_awt_Rectangle', function (g, bounds) {
g.clipRect$I$I$I$I(0, 0, bounds.width, bounds.height);
});

Clazz.newMeth(C$, 'runOneComponent$java_awt_Component$java_awt_Rectangle$java_awt_Graphics$java_awt_Shape$I', function (comp, bounds, g, clip, weightFlags) {
if (comp == null  || !comp.isVisible$() ) {
return;
}var lightweight=true;
if ((lightweight && (weightFlags & 2) == 0 ) || (!lightweight && (weightFlags & 1) == 0 ) ) {
return;
}if (bounds == null ) {
bounds=comp.getBounds$();
}if (clip == null  || clip.intersects$java_awt_geom_Rectangle2D(bounds) ) {
var cg=g.create$();
try {
cg.setFont$java_awt_Font(comp.getFont$());
cg.setColor$java_awt_Color(comp.getForeground$());
if (Clazz.instanceOf(cg, "java.awt.Graphics2D")) {
(cg).setBackground$java_awt_Color(comp.getBackground$());
} else if (Clazz.instanceOf(cg, "sun.awt.Graphics2Delegate")) {
(cg).setBackground$(comp.getBackground$());
}this.run$java_awt_Component$java_awt_Graphics(comp, cg);
} finally {
cg.dispose$();
}
}});

Clazz.newMeth(C$, 'runComponents$I$java_awt_ComponentA$java_awt_Graphics$I', function (n, comps, g, weightFlags) {
var ncomponents=comps.length;
var clip=g.getClip$();
for (var i=ncomponents - 1; i >= 0; i--) {
this.runOneComponent$java_awt_Component$java_awt_Rectangle$java_awt_Graphics$java_awt_Shape$I(comps[i], null, g, clip, weightFlags);
}
});
;
(function(){var C$=Clazz.newClass(P$.SunGraphicsCallback, "PaintHeavyweightComponentsCallback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.SunGraphicsCallback');
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'run$java_awt_Component$java_awt_Graphics', function (comp, cg) {
if (!comp.isLightweight$()) {
comp.paintAll$java_awt_Graphics(cg);
} else if (Clazz.instanceOf(comp, "java.awt.Container")) {
this.runComponents$I$java_awt_ComponentA$java_awt_Graphics$I((comp).getComponentCount$(), $I$(1).getChildArray$java_awt_Container(comp), cg, 3);
}});

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
