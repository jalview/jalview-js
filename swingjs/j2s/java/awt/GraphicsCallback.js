(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GraphicsCallback", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.awt.SunGraphicsCallback');
C$.$classes$=[['PaintCallback',24],['PaintAllCallback',24],['PaintHeavyweightComponentsCallback',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GraphicsCallback, "PaintCallback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.GraphicsCallback');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','java.awt.GraphicsCallback.PaintCallback']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'run$java_awt_Component$java_awt_Graphics',  function (comp, cg) {
comp.paint$java_awt_Graphics(cg);
});

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GraphicsCallback, "PaintAllCallback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.GraphicsCallback');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','java.awt.GraphicsCallback.PaintAllCallback']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'run$java_awt_Component$java_awt_Graphics',  function (comp, cg) {
comp.paintAll$java_awt_Graphics(cg);
});

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GraphicsCallback, "PaintHeavyweightComponentsCallback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.GraphicsCallback');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','java.awt.GraphicsCallback.PaintHeavyweightComponentsCallback']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'run$java_awt_Component$java_awt_Graphics',  function (comp, cg) {
if (comp.isLightweight$()) {
comp.paintHeavyweightComponents$java_awt_Graphics(cg);
} else {
comp.paintAll$java_awt_Graphics(cg);
}});

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
