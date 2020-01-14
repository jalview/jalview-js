(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'sun.nio.cs.StandardCharsets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSCharSet");
C$.aliases=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'lookupName$S', function (charsetName) {
if (C$.aliases == null ) {
var sep=";";
var sets=$I$(1).SWINGJS_ALIASES;
C$.aliases=Clazz.array(String, [sets.length, 2]);
for (var i=sets.length; --i >= 0; ) C$.aliases[i]=Clazz.array(String, -1, [sets[i][0], (sep + (
sets[i].join(";") +
sep)).toLowerCase$()]);

}var key=";" + charsetName.toLowerCase$() + ";" ;
for (var i=0, n=C$.aliases.length; i < n; i++) {
if (C$.aliases[i][1].indexOf$S(key) >= 0) {
return C$.aliases[i][0];
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
