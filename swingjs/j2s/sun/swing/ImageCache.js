(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'java.util.LinkedList',['sun.swing.ImageCache','.Entry']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageCache", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.maxCount=0;
this.entries=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (maxCount) {
C$.$init$.apply(this);
this.maxCount=maxCount;
this.entries=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'setMaxCount$I', function (maxCount) {
this.maxCount=maxCount;
});

Clazz.newMeth(C$, 'flush$', function () {
this.entries.clear$();
});

Clazz.newMeth(C$, 'getEntry$O$java_awt_GraphicsConfiguration$I$I$OA', function (key, config, w, h, args) {
var entry;
var iter=this.entries.listIterator$();
while (iter.hasNext$()){
var ref=iter.next$();
entry=ref;
if (entry == null ) {
iter.remove$();
} else if (entry.equals$java_awt_GraphicsConfiguration$I$I$OA(config, w, h, args)) {
iter.remove$();
this.entries.addFirst$TE(ref);
return entry;
}}
entry=Clazz.new_($I$(2).c$$java_awt_GraphicsConfiguration$I$I$OA,[config, w, h, args]);
if (this.entries.size$() >= this.maxCount) {
this.entries.removeLast$();
}this.entries.addFirst$TE(entry);
return entry;
}, p$1);

Clazz.newMeth(C$, 'getImage$O$java_awt_GraphicsConfiguration$I$I$OA', function (key, config, w, h, args) {
var entry=p$1.getEntry$O$java_awt_GraphicsConfiguration$I$I$OA.apply(this, [key, config, w, h, args]);
return entry.getImage$();
});

Clazz.newMeth(C$, 'setImage$O$java_awt_GraphicsConfiguration$I$I$OA$java_awt_Image', function (key, config, w, h, args, image) {
var entry=p$1.getEntry$O$java_awt_GraphicsConfiguration$I$I$OA.apply(this, [key, config, w, h, args]);
entry.setImage$java_awt_Image(image);
});
;
(function(){var C$=Clazz.newClass(P$.ImageCache, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.config=null;
this.w=0;
this.h=0;
this.args=null;
this.image=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration$I$I$OA', function (config, w, h, args) {
C$.$init$.apply(this);
this.config=config;
this.args=args;
this.w=w;
this.h=h;
}, 1);

Clazz.newMeth(C$, 'setImage$java_awt_Image', function (image) {
this.image=image;
});

Clazz.newMeth(C$, 'getImage$', function () {
return this.image;
});

Clazz.newMeth(C$, 'toString', function () {
var value=C$.superclazz.prototype.toString.apply(this, []) + "[ graphicsConfig=" + this.config + ", image=" + this.image + ", w=" + this.w + ", h=" + this.h ;
if (this.args != null ) {
for (var counter=0; counter < this.args.length; counter++) {
value += ", " + this.args[counter];
}
}value += "]";
return value;
});

Clazz.newMeth(C$, 'equals$java_awt_GraphicsConfiguration$I$I$OA', function (config, w, h, args) {
if (this.w == w && this.h == h  && ((this.config != null  && this.config.equals$O(config) ) || (this.config == null  && config == null  ) ) ) {
if (this.args == null  && args == null  ) {
return true;
}if (this.args != null  && args != null   && this.args.length == args.length ) {
for (var counter=args.length - 1; counter >= 0; counter--) {
var a1=this.args[counter];
var a2=args[counter];
if ((a1 == null  && a2 != null  ) || (a1 != null  && !a1.equals$O(a2) ) ) {
return false;
}}
return true;
}}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
