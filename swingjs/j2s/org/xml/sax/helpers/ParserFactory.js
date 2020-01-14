(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),I$=[[0,'org.xml.sax.helpers.NewInstance']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ParserFactory");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeParser$', function () {
var className=System.getProperty$S("org.xml.sax.parser");
if (className == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["No value for sax.parser property"]);
} else {
return C$.makeParser$S(className);
}}, 1);

Clazz.newMeth(C$, 'makeParser$S', function (className) {
return $I$(1).newInstance$ClassLoader$S($I$(1).getClassLoader$(), className);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
