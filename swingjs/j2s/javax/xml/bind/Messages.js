(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'java.util.ResourceBundle','java.text.MessageFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Messages");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'format$S', function (property) {
return C$.format$S$OA(property, null);
}, 1);

Clazz.newMeth(C$, 'format$S$O', function (property, arg1) {
return C$.format$S$OA(property, Clazz.array(java.lang.Object, -1, [arg1]));
}, 1);

Clazz.newMeth(C$, 'format$S$O$O', function (property, arg1, arg2) {
return C$.format$S$OA(property, Clazz.array(java.lang.Object, -1, [arg1, arg2]));
}, 1);

Clazz.newMeth(C$, 'format$S$O$O$O', function (property, arg1, arg2, arg3) {
return C$.format$S$OA(property, Clazz.array(java.lang.Object, -1, [arg1, arg2, arg3]));
}, 1);

Clazz.newMeth(C$, 'format$S$OA', function (property, args) {
var text=$I$(1).getBundle$S(Clazz.getClass(C$).getName$()).getString$S(property);
return $I$(2).format$S$OA(text, args);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
