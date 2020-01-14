(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.io.StringReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringDataReader", null, 'javajs.util.DataReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (data) {
C$.superclazz.c$$java_io_Reader.apply(this, [Clazz.new_($I$(1).c$$S,[data])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setData$O', function (data) {
return Clazz.new_(C$.c$$S,[data]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
