(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HTTPTokener", null, 'org.json.JSONTokener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S.apply(this, [string]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'nextToken$', function () {
var c;
var q;
var sb=Clazz.new_($I$(1));
do {
c=this.next$();
} while (Character.isWhitespace$C(c));
if (c == "\"" || c == "\'" ) {
q=c;
for (; ; ) {
c=this.next$();
if (c < " ") {
throw this.syntaxError$S("Unterminated string.");
}if (c == q) {
return sb.toString();
}sb.append$C(c);
}
}for (; ; ) {
if (c.$c() == 0  || Character.isWhitespace$C(c) ) {
return sb.toString();
}sb.append$C(c);
c=this.next$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
