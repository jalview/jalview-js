(function(){var P$=Clazz.newPackage("java.nio"),I$=[];
var C$=Clazz.newClass(P$, "CharBufferSpliterator", null, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buffer=null;
this.index=0;
this.limit=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_CharBuffer', function (buffer) {
C$.c$$java_nio_CharBuffer$I$I.apply(this, [buffer, buffer.position$(), buffer.limit$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_CharBuffer$I$I', function (buffer, origin, limit) {
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return origin <= limit});
this.buffer=buffer;
this.index=(origin <= limit) ? origin : limit;
this.limit=limit;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var lo=this.index;
var mid=(lo + this.limit) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_nio_CharBuffer$I$I,[this.buffer, lo, this.index=mid]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var cb=this.buffer;
var i=this.index;
var hi=this.limit;
this.index=hi;
while (i < hi){
action.accept$(cb.getUnchecked$I(i++).$c());
}
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.limit ) {
action.accept$(this.buffer.getUnchecked$I(this.index++).$c());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.limit - this.index);
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 16464;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
