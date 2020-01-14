(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'java.util.regex.Pattern']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PatternMatcher", null, null, 'org.jmol.api.JmolPatternMatcher');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compile$S$Z','compile$'], function (sFind, isCaseInsensitive) {
return $I$(1).compile$S$I(sFind, isCaseInsensitive ? 2 : 0);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
