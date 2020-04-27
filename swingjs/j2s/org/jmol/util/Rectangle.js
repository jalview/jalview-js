(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Rectangle");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['x','y','width','height']]]

Clazz.newMeth(C$, 'contains$I$I', function (X, Y) {
return (X >= this.x && Y >= this.y  && X - this.x < this.width  && Y - this.y < this.height );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
