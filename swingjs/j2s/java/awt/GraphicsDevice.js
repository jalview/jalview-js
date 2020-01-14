(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.DisplayMode',['java.awt.GraphicsDevice','.WindowTranslucency']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GraphicsDevice", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fullScreenWindow=null;
this.windowedModeBounds=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBestConfiguration$O', function (gct) {
return this.getDefaultConfiguration$();
});

Clazz.newMeth(C$, 'isFullScreenSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'setFullScreenWindow$java_awt_Window', function (w) {
});

Clazz.newMeth(C$, 'getFullScreenWindow$', function () {
return null;
});

Clazz.newMeth(C$, 'isDisplayChangeSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'setDisplayMode$O', function (dm) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Cannot change display mode"]);
});

Clazz.newMeth(C$, 'getDisplayMode$', function () {
var gc=this.getDefaultConfiguration$();
var r=gc.getBounds$();
var cm=gc.getColorModel$();
return Clazz.new_($I$(1).c$$I$I$I$I,[r.width, r.height, cm.getPixelSize$(), 0]);
});

Clazz.newMeth(C$, 'getDisplayModes$', function () {
return Clazz.array($I$(1), -1, [this.getDisplayMode$()]);
});

Clazz.newMeth(C$, 'getAvailableAcceleratedMemory$', function () {
return -1;
});

Clazz.newMeth(C$, 'isWindowTranslucencySupported$java_awt_GraphicsDevice_WindowTranslucency', function (translucencyKind) {
switch (translucencyKind) {
case $I$(2).PERPIXEL_TRANSPARENT:
return C$.isWindowShapingSupported$();
case $I$(2).TRANSLUCENT:
return C$.isWindowOpacitySupported$();
case $I$(2).PERPIXEL_TRANSLUCENT:
return this.isWindowPerpixelTranslucencySupported$();
}
return false;
});

Clazz.newMeth(C$, 'isWindowShapingSupported$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'isWindowOpacitySupported$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'isWindowPerpixelTranslucencySupported$', function () {
return true;
});

Clazz.newMeth(C$, 'getTranslucencyCapableGC$', function () {
var defaultGC=this.getDefaultConfiguration$();
if (defaultGC.isTranslucencyCapable$()) {
return defaultGC;
}var configs=this.getConfigurations$();
for (var j=0; j < configs.length; j++) {
if (configs[j].isTranslucencyCapable$()) {
return configs[j];
}}
return null;
});
;
(function(){var C$=Clazz.newClass(P$.GraphicsDevice, "WindowTranslucency", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PERPIXEL_TRANSPARENT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "TRANSLUCENT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PERPIXEL_TRANSLUCENT", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
