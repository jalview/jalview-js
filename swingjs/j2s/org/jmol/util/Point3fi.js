(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Point3fi", null, 'javajs.util.P3', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mi=($s$[0] = -1, $s$[0]);
this.sD=($s$[0] = -1, $s$[0]);
},1);

C$.$fields$=[['I',['i','sX','sY','sZ'],'H',['mi','sD']]]

Clazz.newMeth(C$, 'copy$', function () {
try {
return this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
