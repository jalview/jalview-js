(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TextString", null, 'javajs.util.P3i', 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['argb','bgargb'],'S',['text'],'O',['font','org.jmol.util.Font']]]

Clazz.newMeth(C$, 'setText$S$org_jmol_util_Font$I$I$I$I$I', function (text, font, argb, bgargb, x, y, z) {
this.text=text;
this.font=font;
this.argb=argb;
this.bgargb=bgargb;
this.x=x;
this.y=y;
this.z=z;
});

Clazz.newMeth(C$, ['compare$org_jmol_g3d_TextString$org_jmol_g3d_TextString','compare$O$O'], function (a, b) {
return (a == null  || b == null   ? 0 : a.z > b.z ? -1 : a.z < b.z ? 1 : 0);
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + " " + this.text ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
