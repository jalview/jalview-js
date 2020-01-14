(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[];
var C$=Clazz.newClass(P$, "AbstractSelectionKey", null, 'java.nio.channels.SelectionKey');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.valid=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.valid=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'isValid$', function () {
return this.valid;
});

Clazz.newMeth(C$, 'invalidate$', function () {
this.valid=false;
});

Clazz.newMeth(C$, 'cancel$', function () {
{
if (this.valid) {
this.valid=false;
(this.selector$()).cancel$java_nio_channels_SelectionKey(this);
}}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
