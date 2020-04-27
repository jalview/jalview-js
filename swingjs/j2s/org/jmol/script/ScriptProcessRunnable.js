(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptProcessRunnable", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parallelProcessor','org.jmol.script.ScriptParallelProcessor','process','org.jmol.script.ScriptProcess','processLock','java.lang.Object','shapeManager','org.jmol.viewer.ShapeManager']]]

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptParallelProcessor$org_jmol_script_ScriptProcess$O$org_jmol_viewer_ShapeManager', function (parallelProcessor, process, lock, shapeManager) {
;C$.$init$.apply(this);
this.parallelProcessor=parallelProcessor;
this.process=process;
this.processLock=lock;
this.shapeManager=shapeManager;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
if (this.parallelProcessor.error == null ) {
if ($I$(1).debugging) (function(a,f){return f.apply(null,a)})(["Running process " + this.process.processName + " " + this.process.context.pc + " - " + (this.process.context.pcEnd - 1) ],$I$(1).debug$S);
this.parallelProcessor.eval$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager(this.process.context, this.shapeManager);
if ($I$(1).debugging) $I$(1).debug$S("Process " + this.process.processName + " complete" );
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.parallelProcessor.clearShapeManager$Error(er);
}
} else {
throw e$$;
}
} finally {
{
--this.parallelProcessor.counter;
this.processLock.notifyAll$();
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
