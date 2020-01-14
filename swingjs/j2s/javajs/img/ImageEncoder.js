(function(){var P$=Clazz.newPackage("javajs.img"),I$=[[0,'Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageEncoder", null, null, 'javajs.api.GenericImageEncoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.out=null;
this.width=0;
this.height=0;
this.quality=0;
this.date=null;
this.logging=false;
this.doClose=false;
this.pixels=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.width=-1;
this.height=-1;
this.quality=-1;
this.doClose=true;
}, 1);

Clazz.newMeth(C$, ['createImage$S$javajs_util_OC$java_util_Map','createImage$'], function (type, out, params) {
this.out=out;
this.logging=($I$(1).TRUE === params.get$O("logging") );
this.width=(params.get$O("imageWidth")).intValue$();
this.height=(params.get$O("imageHeight")).intValue$();
this.pixels=params.get$O("imagePixels");
this.date=params.get$O("date");
var q=params.get$O("quality");
this.quality=(q == null  ? -1 : q.intValue$());
this.setParams$java_util_Map(params);
this.generate$();
this.close$();
return this.doClose;
});

Clazz.newMeth(C$, 'putString$S', function (s) {
var b=s.getBytes$();
this.out.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'putByte$I', function (b) {
this.out.writeByteAsInt$I(b);
});

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
