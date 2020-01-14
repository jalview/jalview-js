(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[];
var C$=Clazz.newClass(P$, "TextString", null, 'javajs.util.P3i', 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.text=null;
this.font=null;
this.argb=0;
this.bgargb=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setText$S$javajs_awt_Font$I$I$I$I$I', function (text, font, argb, bgargb, x, y, z) {
this.text=text;
this.font=font;
this.argb=argb;
this.bgargb=bgargb;
this.x=x;
this.y=y;
this.z=z;
});

Clazz.newMeth(C$, ['compare$org_jmol_g3d_TextString$org_jmol_g3d_TextString','compare$','compare$TT$TT'], function (a, b) {
return (a == null  || b == null   ? 0 : a.z > b.z ? -1 : a.z < b.z ? 1 : 0);
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + " " + this.text ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
