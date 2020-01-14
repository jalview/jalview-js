(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptProcessRunnable", null, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parallelProcessor=null;
this.process=null;
this.processLock=null;
this.shapeManager=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptParallelProcessor$org_jmol_script_ScriptProcess$O$org_jmol_viewer_ShapeManager', function (parallelProcessor, process, lock, shapeManager) {
C$.$init$.apply(this);
this.parallelProcessor=parallelProcessor;
this.process=process;
this.processLock=lock;
this.shapeManager=shapeManager;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
if (this.parallelProcessor.error == null ) {
if ($I$(1).debugging) $I$(1).debug$S("Running process " + this.process.processName + " " + this.process.context.pc + " - " + (this.process.context.pcEnd - 1) );
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
