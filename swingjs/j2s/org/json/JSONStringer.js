(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'java.io.StringWriter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSONStringer", null, 'org.json.JSONWriter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$Appendable.apply(this, [Clazz.new_($I$(1))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.mode == "d" ? this.writer.toString() : null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
