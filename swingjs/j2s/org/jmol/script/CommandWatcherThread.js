(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'Thread','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CommandWatcherThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.scriptManager=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, params) {
this.scriptManager=manager;
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "CommmandWatcherThread");
return 0;
});

Clazz.newMeth(C$, 'run$', function () {
$I$(1).currentThread$().setPriority$I(1);
while (!this.stopped){
try {
$I$(1).sleep$J(50);
if (!this.stopped) {
this.scriptManager.runScriptNow$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var ie = e$$;
{
$I$(2).warn$S("CommandWatcher InterruptedException! " + this);
break;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ie = e$$;
{
var s="script processing ERROR:\n\n" + ie.toString();
{

}
$I$(2).warn$S("CommandWatcher Exception! " + s);
break;
}
} else {
throw e$$;
}
}
}
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
