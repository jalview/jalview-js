(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
var C$=Clazz.newClass(P$, "ExceptionUnmatchedClosingParentheses", null, 'java.text.ParseException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (s, errorOffset) {
C$.superclazz.c$$S$I.apply(this, [s, errorOffset]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (errorOffset) {
C$.superclazz.c$$S$I.apply(this, ["", errorOffset]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
return "Unbalanced parentheses expression, cannot resolve secondary structure.\n" + "Bad secondary structure (DBN format):Unmatched closing parentheses ')' at " + this.getErrorOffset$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
