(function(){var P$=Clazz.newPackage("java.util.zip"),I$=[];
var C$=Clazz.newClass(P$, "InflaterInputStream", null, 'swingjs.jzlib.InflaterInputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inf=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_util_zip_Inflater$I', function ($in, inflater, size) {
C$.superclazz.c$$java_io_InputStream$swingjs_jzlib_Inflater$I$Z.apply(this, [$in, inflater, size, true]);
C$.$init$.apply(this);
this.inf=inflater;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
