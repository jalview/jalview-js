(function(){var P$=java.util,I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Iterator");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["remove"]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.next$());

});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
