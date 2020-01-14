(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Consumer");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'andThen$java_util_function_Consumer', function (after) {
$I$(1).requireNonNull$TT(after);
return ((P$.Consumer$lambda1||
(function(){var C$=Clazz.newClass(P$, "Consumer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (t) {
this.accept$(t);
this.$finals$.after.accept$(t);
});
})()
), Clazz.new_(P$.Consumer$lambda1.$init$, [this, {after: after}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
