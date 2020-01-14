(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamShape','java.util.stream.Tripwire']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "TerminalOp");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'inputShape$', function () {
return $I$(1).REFERENCE;
});

Clazz.newMeth(C$, 'getOpFlags$', function () {
return 0;
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} triggering TerminalOp.evaluateParallel serial default");
return this.evaluateSequential$(helper, spliterator);
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
