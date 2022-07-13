(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'javajs.util.Lst','java.util.concurrent.Executors','org.jmol.util.Logger','org.jmol.viewer.Viewer','org.jmol.viewer.ShapeManager','org.jmol.script.ScriptProcess','org.jmol.script.ScriptProcessRunnable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScriptParallelProcessor", null, 'org.jmol.script.ScriptFunction', 'org.jmol.api.JmolParallelProcessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
this.error=null;
this.lock= Clazz.new_();
this.processes=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['counter'],'O',['vwr','org.jmol.viewer.Viewer','error','Error','lock','java.lang.Object','processes','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getExecutor$', function () {
return $I$(2).newCachedThreadPool$();
});

Clazz.newMeth(C$, 'runAllProcesses$org_jmol_viewer_Viewer', function (vwr) {
if (this.processes.size$() == 0) return;
this.vwr=vwr;
var inParallel=!vwr.isParallel$() && vwr.setParallel$Z(true) ;
var vShapeManagers=Clazz.new_($I$(1,1));
this.error=null;
this.counter=0;
if ($I$(3).debugging) $I$(3,"debug$S",["running " + this.processes.size$() + " processes on " + $I$(4).nProcessors + " processesors inParallel=" + inParallel ]);
this.counter=this.processes.size$();
for (var i=this.processes.size$(); --i >= 0; ) {
var sm=null;
if (inParallel) {
sm=Clazz.new_($I$(5,1).c$$org_jmol_viewer_Viewer,[vwr]);
sm.setParallel$();
vShapeManagers.addLast$O(sm);
}p$1.runProcess$org_jmol_script_ScriptProcess$org_jmol_viewer_ShapeManager.apply(this, [this.processes.removeItemAt$I(0), sm]);
}
{
while (this.counter > 0){
try {
this.lock.wait$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
if (this.error != null ) throw this.error;
}
}this.mergeResults$javajs_util_Lst(vShapeManagers);
vwr.setParallel$Z(false);
});

Clazz.newMeth(C$, 'mergeResults$javajs_util_Lst', function (vShapeManagers) {
try {
for (var i=0; i < vShapeManagers.size$(); i++) p$1.mergeShapes$org_jmol_viewer_ShapeManager.apply(this, [vShapeManagers.get$I(i)]);

} catch (e) {
if (Clazz.exceptionOf(e,"Error")){
throw e;
} else {
throw e;
}
} finally {
this.counter=-1;
vShapeManagers=null;
}
});

Clazz.newMeth(C$, 'mergeShapes$org_jmol_viewer_ShapeManager', function (shapeManager) {
var newShapes=shapeManager.shapes;
if (newShapes == null ) return;
if (this.vwr.shm.shapes == null ) this.vwr.shm.shapes=newShapes;
 else for (var i=0; i < newShapes.length; ++i) if (newShapes[i] != null  && Clazz.instanceOf(newShapes[i], "org.jmol.shape.MeshCollection") ) {
if (this.vwr.shm.shapes[i] == null ) this.vwr.shm.loadShape$I(i);
(this.vwr.shm.shapes[i]).merge$org_jmol_shape_MeshCollection(newShapes[i]);
}
}, p$1);

Clazz.newMeth(C$, 'clearShapeManager$Error', function (er) {
{
this.error=er;
this.notifyAll$();
}});

Clazz.newMeth(C$, 'addProcess$S$org_jmol_script_ScriptContext', function (name, context) {
this.processes.addLast$O(Clazz.new_($I$(6,1).c$$S$org_jmol_script_ScriptContext,[name, context]));
});

Clazz.newMeth(C$, 'runProcess$org_jmol_script_ScriptProcess$org_jmol_viewer_ShapeManager', function (process, shapeManager) {
var r=Clazz.new_($I$(7,1).c$$org_jmol_script_ScriptParallelProcessor$org_jmol_script_ScriptProcess$O$org_jmol_viewer_ShapeManager,[this, process, this.lock, shapeManager]);
var exec=(shapeManager == null  ? null : p$1.getMyExecutor.apply(this, []));
if (exec != null ) {
exec.execute$Runnable(r);
} else {
r.run$();
}}, p$1);

Clazz.newMeth(C$, 'eval$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager', function (context, shapeManager) {
this.vwr.evalParallel$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager(context, shapeManager);
});

Clazz.newMeth(C$, 'getMyExecutor', function () {
if (this.vwr.executor != null  || $I$(4).nProcessors < 2 ) return this.vwr.executor;
try {
this.vwr.executor=this.getExecutor$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.vwr.executor=null;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.vwr.executor=null;
}
} else {
throw e$$;
}
}
if (this.vwr.executor == null ) $I$(3).error$S("parallel processing is not available");
return this.vwr.executor;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
