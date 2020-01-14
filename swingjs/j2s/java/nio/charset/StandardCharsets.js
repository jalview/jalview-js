(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[[0,'java.nio.charset.Charset','AssertionError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StandardCharsets");
C$.US_ASCII=null;
C$.ISO_8859_1=null;
C$.UTF_8=null;
C$.UTF_16BE=null;
C$.UTF_16LE=null;
C$.UTF_16=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.US_ASCII=$I$(1).forName$S("US-ASCII");
C$.ISO_8859_1=$I$(1).forName$S("ISO-8859-1");
C$.UTF_8=$I$(1).forName$S("UTF-8");
C$.UTF_16BE=$I$(1).forName$S("UTF-16BE");
C$.UTF_16LE=$I$(1).forName$S("UTF-16LE");
C$.UTF_16=$I$(1).forName$S("UTF-16");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
throw Clazz.new_($I$(2).c$$O,["No java.nio.charset.StandardCharsets instances for you!"]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
