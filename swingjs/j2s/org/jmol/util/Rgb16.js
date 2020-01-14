(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Rgb16");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.r=0;
this.g=0;
this.b=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newI$I', function (argb) {
var c=Clazz.new_(C$);
c.setInt$I(argb);
return c;
}, 1);

Clazz.newMeth(C$, 'setInt$I', function (a) {
this.r=((a >> 8) & 65280) | 128;
this.g=((a) & 65280) | 128;
this.b=((a << 8) & 65280) | 128;
});

Clazz.newMeth(C$, 'setRgb$org_jmol_util_Rgb16', function (a) {
this.r=a.r;
this.g=a.g;
this.b=a.b;
});

Clazz.newMeth(C$, 'diffDiv$org_jmol_util_Rgb16$org_jmol_util_Rgb16$I', function (a, b, divisor) {
this.r=((a.r - b.r)/divisor|0);
this.g=((a.g - b.g)/divisor|0);
this.b=((a.b - b.b)/divisor|0);
});

Clazz.newMeth(C$, 'setAndIncrement$org_jmol_util_Rgb16$org_jmol_util_Rgb16', function (base, inc) {
this.r=base.r;
base.r+=inc.r;
this.g=base.g;
base.g+=inc.g;
this.b=base.b;
base.b+=inc.b;
});

Clazz.newMeth(C$, 'getArgb$', function () {
return (-16777216 | ((this.r << 8) & 16711680) | (this.g & 65280) | (this.b >> 8) );
});

Clazz.newMeth(C$, 'toString', function () {
return Clazz.new_($I$(1)).append$S("Rgb16(").appendI$I(this.r).appendC$C(",").appendI$I(this.g).appendC$C(",").appendI$I(this.b).append$S(" -> ").appendI$I((this.r >> 8) & 255).appendC$C(",").appendI$I((this.g >> 8) & 255).appendC$C(",").appendI$I((this.b >> 8) & 255).appendC$C(")").toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
