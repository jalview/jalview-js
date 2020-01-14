(function(){var P$=Clazz.newPackage("sun.java2d.loops"),I$=[[0,'java.awt.Font','sun.java2d.loops.RenderCache','sun.java2d.loops.GraphicsPrimitiveMgr',['sun.java2d.loops.BlitBg','.General'],['sun.java2d.loops.BlitBg','.TraceBlitBg']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BlitBg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.java2d.loops.GraphicsPrimitive');
C$.$methodSignature=null;
C$.primTypeID=0;
C$.blitcache=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$methodSignature="BlitBg(...)".toString();
C$.primTypeID=P$.GraphicsPrimitive.makePrimTypeID$();
C$.blitcache=Clazz.new_($I$(2).c$$I,[20]);
{
$I$(3).registerGeneral$sun_java2d_loops_GraphicsPrimitive(Clazz.new_(C$.c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType,[null, null, null]));
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'locate$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType', function (srctype, comptype, dsttype) {
return $I$(3).locate$I$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType(C$.primTypeID, srctype, comptype, dsttype);
}, 1);

Clazz.newMeth(C$, 'getFromCache$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType', function (src, comp, dst) {
var o=C$.blitcache.get$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType(src, comp, dst);
if (o != null ) {
return o;
}var blit=C$.locate$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType(src, comp, dst);
if (blit == null ) {
System.out.println$S("blitbg loop not found for:");
System.out.println$S("src:  " + src);
System.out.println$S("comp: " + comp);
System.out.println$S("dst:  " + dst);
} else {
C$.blitcache.put$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType$O(src, comp, dst, blit);
}return blit;
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType', function (srctype, comptype, dsttype) {
C$.superclazz.c$$S$I$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this, [C$.$methodSignature, C$.primTypeID, srctype, comptype, dsttype]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$J$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType', function (pNativePrim, srctype, comptype, dsttype) {
C$.superclazz.c$$J$S$I$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this, [pNativePrim, C$.$methodSignature, C$.primTypeID, srctype, comptype, dsttype]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I', function (src, dst, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height) {
alert('native method must be replaced! Lsun/java2d/loops/BlitBg;.BlitBg(Lsun/java2d/SurfaceData;Lsun/java2d/SurfaceData;Ljava/awt/Composite;Lsun/java2d/pipe/Region;Ljava/awt/Color;IIIIII)V');
}
);

Clazz.newMeth(C$, 'makePrimitive$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType', function (srctype, comptype, dsttype) {
return Clazz.new_($I$(4).c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType,[srctype, comptype, dsttype]);
});

Clazz.newMeth(C$, 'traceWrap$', function () {
return Clazz.new_($I$(5).c$$sun_java2d_loops_BlitBg,[this]);
});
;
(function(){var C$=Clazz.newClass(P$.BlitBg, "General", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.java2d.loops.BlitBg');
C$.defaultFont=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.defaultFont=Clazz.new_($I$(1).c$$S$I$I,["Dialog", 0, 12]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$compositeType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType', function (srctype, comptype, dsttype) {
C$.superclazz.c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this, [srctype, comptype, dsttype]);
C$.$init$.apply(this);
this.$compositeType=comptype;
}, 1);

Clazz.newMeth(C$, 'BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I', function (srcData, dstData, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height) {
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.BlitBg, "TraceBlitBg", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.java2d.loops.BlitBg');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.target=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_BlitBg', function (target) {
C$.superclazz.c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this, [target.getSourceType$(), target.getCompositeType$(), target.getDestType$()]);
C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, 'traceWrap$', function () {
return this;
});

Clazz.newMeth(C$, 'BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I', function (src, dst, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height) {
P$.GraphicsPrimitive.tracePrimitive$O(this.target);
this.target.BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I(src, dst, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
