(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'Thread','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CommandWatcherThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['scriptManager','org.jmol.script.ScriptManager']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
