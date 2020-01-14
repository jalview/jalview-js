(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.T3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "T4", null, 'javajs.util.T3');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.w=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'set4$F$F$F$F', function (x, y, z, w) {
this.x=x;
this.y=y;
this.z=z;
this.w=w;
});

Clazz.newMeth(C$, 'scale4$F', function (s) {
this.scale$F(s);
this.w *= s;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(1).floatToIntBits$F(this.x) ^ $I$(1).floatToIntBits$F(this.y) ^ $I$(1).floatToIntBits$F(this.z) ^ $I$(1).floatToIntBits$F(this.w) ;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.T4"))) return false;
var t=o;
return (this.x == t.x  && this.y == t.y   && this.z == t.z   && this.w == t.w  );
});

Clazz.newMeth(C$, 'toString', function () {
return "(" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + ", " + new Float(this.z).toString() + ", " + new Float(this.w).toString() + ")" ;
});

Clazz.newMeth(C$, 'toJSON$', function () {
return "[" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + ", " + new Float(this.z).toString() + ", " + new Float(this.w).toString() + "]" ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
