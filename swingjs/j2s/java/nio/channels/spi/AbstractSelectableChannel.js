(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),p$1={},I$=[[0,'Thread','java.nio.channels.SelectionKey']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractSelectableChannel", null, 'java.nio.channels.SelectableChannel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.provider=null;
this.keys=null;
this.keyCount=0;
this.keyLock=null;
this.regLock=null;
this.blocking=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.keys=null;
this.keyCount=0;
this.keyLock= Clazz.new_();
this.regLock= Clazz.new_();
this.blocking=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
Clazz.super_(C$, this,1);
this.provider=provider;
}, 1);

Clazz.newMeth(C$, 'provider$', function () {
return this.provider;
});

Clazz.newMeth(C$, 'addKey$java_nio_channels_SelectionKey', function (k) {
Clazz.assert(C$, this, function(){return $I$(1).holdsLock$O(this.keyLock)});
var i=0;
if ((this.keys != null ) && (this.keyCount < this.keys.length) ) {
for (i=0; i < this.keys.length; i++) if (this.keys[i] == null ) break;

} else if (this.keys == null ) {
this.keys=Clazz.array($I$(2), [3]);
} else {
var n=this.keys.length * 2;
var ks=Clazz.array($I$(2), [n]);
for (i=0; i < this.keys.length; i++) ks[i]=this.keys[i];

this.keys=ks;
i=this.keyCount;
}this.keys[i]=k;
this.keyCount++;
}, p$1);

Clazz.newMeth(C$, 'findKey$java_nio_channels_Selector', function (sel) {
{
if (this.keys == null ) return null;
for (var i=0; i < this.keys.length; i++) if ((this.keys[i] != null ) && (this.keys[i].selector$() === sel ) ) return this.keys[i];

return null;
}}, p$1);

Clazz.newMeth(C$, 'removeKey$java_nio_channels_SelectionKey', function (k) {
{
for (var i=0; i < this.keys.length; i++) if (this.keys[i] === k ) {
this.keys[i]=null;
this.keyCount--;
}
(k).invalidate$();
}});

Clazz.newMeth(C$, 'haveValidKeys', function () {
{
if (this.keyCount == 0) return false;
for (var i=0; i < this.keys.length; i++) {
if ((this.keys[i] != null ) && this.keys[i].isValid$() ) return true;
}
return false;
}}, p$1);

Clazz.newMeth(C$, 'isRegistered$', function () {
{
return this.keyCount != 0;
}});

Clazz.newMeth(C$, 'keyFor$java_nio_channels_Selector', function (sel) {
return p$1.findKey$java_nio_channels_Selector.apply(this, [sel]);
});

Clazz.newMeth(C$, 'register$java_nio_channels_Selector$I$O', function (sel, ops, att) {
{
if (!this.isOpen$()) throw Clazz.new_(Clazz.load('java.nio.channels.ClosedChannelException'));
if ((ops & ~this.validOps$()) != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (this.blocking) throw Clazz.new_(Clazz.load('java.nio.channels.IllegalBlockingModeException'));
var k=p$1.findKey$java_nio_channels_Selector.apply(this, [sel]);
if (k != null ) {
k.interestOps$I(ops);
k.attach$O(att);
}if (k == null ) {
{
if (!this.isOpen$()) throw Clazz.new_(Clazz.load('java.nio.channels.ClosedChannelException'));
k=(sel).register$java_nio_channels_spi_AbstractSelectableChannel$I$O(this, ops, att);
p$1.addKey$java_nio_channels_SelectionKey.apply(this, [k]);
}}return k;
}});

Clazz.newMeth(C$, 'implCloseChannel$', function () {
this.implCloseSelectableChannel$();
{
var count=(this.keys == null ) ? 0 : this.keys.length;
for (var i=0; i < count; i++) {
var k=this.keys[i];
if (k != null ) k.cancel$();
}
}});

Clazz.newMeth(C$, 'isBlocking$', function () {
{
return this.blocking;
}});

Clazz.newMeth(C$, 'blockingLock$', function () {
return this.regLock;
});

Clazz.newMeth(C$, 'configureBlocking$Z', function (block) {
{
if (!this.isOpen$()) throw Clazz.new_(Clazz.load('java.nio.channels.ClosedChannelException'));
if (this.blocking == block ) return this;
if (block && p$1.haveValidKeys.apply(this, []) ) throw Clazz.new_(Clazz.load('java.nio.channels.IllegalBlockingModeException'));
this.implConfigureBlocking$Z(block);
this.blocking=block;
}return this;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
