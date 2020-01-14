(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.HashMap','InternalError',['java.awt.RenderingHints','.SunKey'],['java.awt.RenderingHints','.Value'],['java.awt.RenderingHints','.LCDContrastKey'],'java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RenderingHints", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.Map', 'Cloneable']);
C$.KEY_RENDERING=null;
C$.VALUE_RENDER_SPEED=null;
C$.VALUE_RENDER_QUALITY=null;
C$.VALUE_RENDER_DEFAULT=null;
C$.KEY_ANTIALIASING=null;
C$.VALUE_ANTIALIAS_ON=null;
C$.VALUE_ANTIALIAS_OFF=null;
C$.VALUE_ANTIALIAS_DEFAULT=null;
C$.KEY_FRACTIONALMETRICS=null;
C$.VALUE_FRACTIONALMETRICS_ON=null;
C$.VALUE_FRACTIONALMETRICS_OFF=null;
C$.VALUE_FRACTIONALMETRICS_DEFAULT=null;
C$.KEY_DITHERING=null;
C$.VALUE_DITHER_ENABLE=null;
C$.VALUE_DITHER_DISABLE=null;
C$.VALUE_DITHER_DEFAULT=null;
C$.KEY_INTERPOLATION=null;
C$.VALUE_INTERPOLATION_NEAREST_NEIGHBOR=null;
C$.VALUE_INTERPOLATION_BILINEAR=null;
C$.VALUE_INTERPOLATION_BICUBIC=null;
C$.KEY_ALPHA_INTERPOLATION=null;
C$.VALUE_ALPHA_INTERPOLATION_SPEED=null;
C$.VALUE_ALPHA_INTERPOLATION_QUALITY=null;
C$.VALUE_ALPHA_INTERPOLATION_DEFAULT=null;
C$.KEY_COLOR_RENDERING=null;
C$.VALUE_COLOR_RENDER_SPEED=null;
C$.VALUE_COLOR_RENDER_QUALITY=null;
C$.VALUE_COLOR_RENDER_DEFAULT=null;
C$.KEY_STROKE_CONTROL=null;
C$.VALUE_STROKE_DEFAULT=null;
C$.VALUE_STROKE_NORMALIZE=null;
C$.VALUE_STROKE_PURE=null;
C$.KEY_TEXT_ANTIALIASING=null;
C$.VALUE_TEXT_ANTIALIAS_ON=null;
C$.VALUE_TEXT_ANTIALIAS_OFF=null;
C$.VALUE_TEXT_ANTIALIAS_DEFAULT=null;
C$.VALUE_TEXT_ANTIALIAS_GASP=null;
C$.VALUE_TEXT_ANTIALIAS_LCD_HRGB=null;
C$.VALUE_TEXT_ANTIALIAS_LCD_HBGR=null;
C$.VALUE_TEXT_ANTIALIAS_LCD_VRGB=null;
C$.VALUE_TEXT_ANTIALIAS_LCD_VBGR=null;
C$.KEY_TEXT_ANTIALIAS_LCD_CONTRAST=null;
C$.KEY_TEXT_LCD_CONTRAST=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.KEY_RENDERING=Clazz.new_($I$(3).c$$I$S,[0, "Global rendering quality key"]);
C$.VALUE_RENDER_SPEED=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_RENDERING, 1, "Fastest rendering methods"]);
C$.VALUE_RENDER_QUALITY=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_RENDERING, 2, "Highest quality rendering methods"]);
C$.VALUE_RENDER_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_RENDERING, 0, "Default rendering methods"]);
C$.KEY_ANTIALIASING=Clazz.new_($I$(3).c$$I$S,[1, "Global antialiasing enable key"]);
C$.VALUE_ANTIALIAS_ON=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_ANTIALIASING, 2, "Antialiased rendering mode"]);
C$.VALUE_ANTIALIAS_OFF=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_ANTIALIASING, 1, "Nonantialiased rendering mode"]);
C$.VALUE_ANTIALIAS_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_ANTIALIASING, 0, "Default antialiasing rendering mode"]);
C$.KEY_FRACTIONALMETRICS=Clazz.new_($I$(3).c$$I$S,[3, "Fractional metrics enable key"]);
C$.VALUE_FRACTIONALMETRICS_ON=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_FRACTIONALMETRICS, 2, "Fractional text metrics mode"]);
C$.VALUE_FRACTIONALMETRICS_OFF=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_FRACTIONALMETRICS, 1, "Integer text metrics mode"]);
C$.VALUE_FRACTIONALMETRICS_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_FRACTIONALMETRICS, 0, "Default fractional text metrics mode"]);
C$.KEY_DITHERING=Clazz.new_($I$(3).c$$I$S,[4, "Dithering quality key"]);
C$.VALUE_DITHER_ENABLE=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_DITHERING, 2, "Dithered rendering mode"]);
C$.VALUE_DITHER_DISABLE=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_DITHERING, 1, "Nondithered rendering mode"]);
C$.VALUE_DITHER_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_DITHERING, 0, "Default dithering mode"]);
C$.KEY_INTERPOLATION=Clazz.new_($I$(3).c$$I$S,[5, "Image interpolation method key"]);
C$.VALUE_INTERPOLATION_NEAREST_NEIGHBOR=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_INTERPOLATION, 0, "Nearest Neighbor image interpolation mode"]);
C$.VALUE_INTERPOLATION_BILINEAR=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_INTERPOLATION, 1, "Bilinear image interpolation mode"]);
C$.VALUE_INTERPOLATION_BICUBIC=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_INTERPOLATION, 2, "Bicubic image interpolation mode"]);
C$.KEY_ALPHA_INTERPOLATION=Clazz.new_($I$(3).c$$I$S,[6, "Alpha blending interpolation method key"]);
C$.VALUE_ALPHA_INTERPOLATION_SPEED=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_ALPHA_INTERPOLATION, 1, "Fastest alpha blending methods"]);
C$.VALUE_ALPHA_INTERPOLATION_QUALITY=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_ALPHA_INTERPOLATION, 2, "Highest quality alpha blending methods"]);
C$.VALUE_ALPHA_INTERPOLATION_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_ALPHA_INTERPOLATION, 0, "Default alpha blending methods"]);
C$.KEY_COLOR_RENDERING=Clazz.new_($I$(3).c$$I$S,[7, "Color rendering quality key"]);
C$.VALUE_COLOR_RENDER_SPEED=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_COLOR_RENDERING, 1, "Fastest color rendering mode"]);
C$.VALUE_COLOR_RENDER_QUALITY=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_COLOR_RENDERING, 2, "Highest quality color rendering mode"]);
C$.VALUE_COLOR_RENDER_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_COLOR_RENDERING, 0, "Default color rendering mode"]);
C$.KEY_STROKE_CONTROL=Clazz.new_($I$(3).c$$I$S,[8, "Stroke normalization control key"]);
C$.VALUE_STROKE_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_STROKE_CONTROL, 0, "Default stroke normalization"]);
C$.VALUE_STROKE_NORMALIZE=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_STROKE_CONTROL, 1, "Normalize strokes for consistent rendering"]);
C$.VALUE_STROKE_PURE=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_STROKE_CONTROL, 2, "Pure stroke conversion for accurate paths"]);
C$.KEY_TEXT_ANTIALIASING=Clazz.new_($I$(3).c$$I$S,[2, "Text-specific antialiasing enable key"]);
C$.VALUE_TEXT_ANTIALIAS_ON=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 2, "Antialiased text mode"]);
C$.VALUE_TEXT_ANTIALIAS_OFF=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 1, "Nonantialiased text mode"]);
C$.VALUE_TEXT_ANTIALIAS_DEFAULT=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 0, "Default antialiasing text mode"]);
C$.VALUE_TEXT_ANTIALIAS_GASP=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 3, "gasp antialiasing text mode"]);
C$.VALUE_TEXT_ANTIALIAS_LCD_HRGB=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 4, "LCD HRGB antialiasing text mode"]);
C$.VALUE_TEXT_ANTIALIAS_LCD_HBGR=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 5, "LCD HBGR antialiasing text mode"]);
C$.VALUE_TEXT_ANTIALIAS_LCD_VRGB=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 6, "LCD VRGB antialiasing text mode"]);
C$.VALUE_TEXT_ANTIALIAS_LCD_VBGR=Clazz.new_($I$(4).c$$java_awt_RenderingHints_SunKey$I$S,[C$.KEY_TEXT_ANTIALIASING, 7, "LCD VBGR antialiasing text mode"]);
C$.KEY_TEXT_ANTIALIAS_LCD_CONTRAST=Clazz.new_($I$(5).c$$I$S,[100, "Text-specific LCD contrast key"]);
C$.KEY_TEXT_LCD_CONTRAST=C$.KEY_TEXT_ANTIALIAS_LCD_CONTRAST;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hintmap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.hintmap=Clazz.new_($I$(1).c$$I,[7]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (init) {
C$.$init$.apply(this);
if (init != null ) {
this.hintmap.putAll$java_util_Map(init);
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_RenderingHints_Key$O', function (key, value) {
C$.$init$.apply(this);
if (key != null ) this.hintmap.put$TK$TV(key, value);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.hintmap.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.hintmap.isEmpty$();
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this.hintmap.containsKey$O(key);
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
return this.hintmap.containsValue$O(value);
});

Clazz.newMeth(C$, 'get$O', function (key) {
return this.hintmap.get$O(key);
});

Clazz.newMeth(C$, ['put$O$O','put$TK$TV'], function (key, value) {
if (!(key).isCompatibleValue$O(value)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[value + " incompatible with " + key ]);
}return this.hintmap.put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'add$java_awt_RenderingHints', function (hints) {
this.hintmap.putAll$java_util_Map(hints.hintmap);
});

Clazz.newMeth(C$, 'clear$', function () {
this.hintmap.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (key) {
return this.hintmap.remove$O(key);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
if (Clazz.getClass(C$).isInstance$O(m)) {
for (var entry, $entry = m.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) this.hintmap.put$TK$TV(entry.getKey$(), entry.getValue$());

} else {
for (var entry, $entry = m.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) this.put$O$O(entry.getKey$(), entry.getValue$());

}});

Clazz.newMeth(C$, 'keySet$', function () {
return this.hintmap.keySet$();
});

Clazz.newMeth(C$, 'values$', function () {
return this.hintmap.values$();
});

Clazz.newMeth(C$, 'entrySet$', function () {
return $I$(6).unmodifiableMap$java_util_Map(this.hintmap).entrySet$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "java.awt.RenderingHints")) {
return this.hintmap.equals$O((o).hintmap);
} else if (Clazz.instanceOf(o, "java.util.Map")) {
return this.hintmap.equals$O(o);
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.hintmap.hashCode$();
});

Clazz.newMeth(C$, 'clone$', function () {
var rh;
try {
rh=Clazz.clone(this);
if (this.hintmap != null ) {
rh.hintmap=this.hintmap.clone$();
}} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2));
} else {
throw e;
}
}
return rh;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.hintmap == null ) {
return this.getClass$().getName$() + "@" + Integer.toHexString$I(this.hashCode$()) + " (0 hints)" ;
}return this.hintmap.toString();
});
;
(function(){var C$=Clazz.newClass(P$.RenderingHints, "Key", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.identitymap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.identitymap=Clazz.new_($I$(1).c$$I,[17]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.privatekey=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getIdentity', function () {
return this.getClass$().getName$() + "@" + Integer.toHexString$I(System.identityHashCode$O(this.getClass$())) + ":" + Integer.toHexString$I(this.privatekey) ;
}, p$1);

Clazz.newMeth(C$, 'recordIdentity$java_awt_RenderingHints_Key', function (k) {
var identity=p$1.getIdentity.apply(k, []);
var otherref=C$.identitymap.get$O(identity);
if (otherref != null ) {
var otherkey=otherref;
if (otherkey != null  && otherkey.getClass$() === k.getClass$()  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[identity + " already registered"]);
}}C$.identitymap.put$TK$TV(identity, k);
}, p$1);

Clazz.newMeth(C$, 'c$$I', function (privatekey) {
C$.$init$.apply(this);
this.privatekey=privatekey;
p$1.recordIdentity$java_awt_RenderingHints_Key.apply(this, [this]);
}, 1);

Clazz.newMeth(C$, 'intKey$', function () {
return this.privatekey;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return this === o ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.RenderingHints, "SunKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.RenderingHints','.Key']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (privatekey, description) {
C$.superclazz.c$$I.apply(this, [privatekey]);
C$.$init$.apply(this);
this.description=description;
}, 1);

Clazz.newMeth(C$, 'getIndex$', function () {
return this.privatekey;
});

Clazz.newMeth(C$, 'toString', function () {
return this.description;
});

Clazz.newMeth(C$, 'isCompatibleValue$O', function (val) {
if (Clazz.instanceOf(val, "java.awt.RenderingHints.Value")) {
return (val).isCompatibleKey$java_awt_RenderingHints_SunKey(this);
}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.RenderingHints, "Value", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.ValueObjects=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ValueObjects=Clazz.array(C$, [9, 8]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myKey=null;
this.index=0;
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'register$java_awt_RenderingHints_SunKey$java_awt_RenderingHints_Value', function (key, value) {
var kindex=key.getIndex$();
var vindex=value.getIndex$();
if (C$.ValueObjects[kindex][vindex] != null ) {
throw Clazz.new_($I$(2).c$$S,["duplicate index: " + vindex]);
}C$.ValueObjects[kindex][vindex]=value;
}, 1);

Clazz.newMeth(C$, 'get$I$I', function (keyindex, valueindex) {
return C$.ValueObjects[keyindex][valueindex];
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_RenderingHints_SunKey$I$S', function (key, index, description) {
C$.$init$.apply(this);
this.myKey=key;
this.index=index;
this.description=description;
C$.register$java_awt_RenderingHints_SunKey$java_awt_RenderingHints_Value(key, this);
}, 1);

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'toString', function () {
return this.description;
});

Clazz.newMeth(C$, 'isCompatibleKey$java_awt_RenderingHints_SunKey', function (k) {
return this.myKey === k ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.description.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return this === o ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.RenderingHints, "LCDContrastKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.RenderingHints','.SunKey']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (privatekey, description) {
C$.superclazz.c$$I$S.apply(this, [privatekey, description]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isCompatibleValue$O', function (val) {
if (Clazz.instanceOf(val, "java.lang.Integer")) {
var ival=(val).intValue$();
return ival >= 100 && ival <= 250 ;
}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:25 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
