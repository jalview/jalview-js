(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),I$=[[0,'org.xml.sax.helpers.NewInstance']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParserFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeParser$',  function () {
var className=System.getProperty$S("org.xml.sax.parser");
if (className == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["No value for sax.parser property"]);
} else {
return C$.makeParser$S(className);
}}, 1);

Clazz.newMeth(C$, 'makeParser$S',  function (className) {
return $I$(1,"newInstance$ClassLoader$S",[$I$(1).getClassLoader$(), className]);
}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:01 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
