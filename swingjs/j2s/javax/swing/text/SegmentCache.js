(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'javajs.util.Lst',['javax.swing.text.SegmentCache','.CachedSegment']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SegmentCache", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.sharedCache=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.segments=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSharedInstance$', function () {
if (C$.sharedCache == null ) C$.sharedCache=Clazz.new_(C$);
return C$.sharedCache;
}, 1);

Clazz.newMeth(C$, 'getSharedSegment$', function () {
return C$.getSharedInstance$().getSegment$();
}, 1);

Clazz.newMeth(C$, 'releaseSharedSegment$javax_swing_text_Segment', function (segment) {
C$.getSharedInstance$().releaseSegment$javax_swing_text_Segment(segment);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.segments=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getSegment$', function () {
{
var size=this.segments.size$();
if (size > 0) {
return this.segments.removeItemAt$I(size - 1);
}}return Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'releaseSegment$javax_swing_text_Segment', function (segment) {
if (Clazz.instanceOf(segment, "javax.swing.text.SegmentCache.CachedSegment")) {
{
segment.array=null;
segment.count=0;
this.segments.add$TE(segment);
}}});
;
(function(){var C$=Clazz.newClass(P$.SegmentCache, "CachedSegment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.Segment');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:25 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
