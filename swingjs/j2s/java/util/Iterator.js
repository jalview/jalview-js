(function(){var P$=java.util,I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Iterator");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["remove"]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$O(action);
while (this.hasNext$())action.accept$O(this.next$());

});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
