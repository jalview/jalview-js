(function(){var P$=Clazz.newPackage("org.jmol.thread"),p$1={},I$=[[0,'Thread','javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimeoutThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.triggered=true;
},1);

C$.$fields$=[['Z',['triggered'],'I',['status'],'S',['script']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$I$S', function (vwr, name, ms, script) {
Clazz.super_(C$, this);
this.setViewer$org_jmol_viewer_Viewer$S(vwr, name);
this.$name=name;
p$1.set$I$S.apply(this, [ms, script]);
}, 1);

Clazz.newMeth(C$, 'set$I$S', function (ms, script) {
this.sleepTime=ms;
if (script != null ) this.script=script;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return "timeout name=" + this.$name + " executions=" + this.status + " mSec=" + this.sleepTime + " secRemaining=" + new Float((this.targetTime - System.currentTimeMillis$()) / 1000.0).toString()  + " script=" + this.script;
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true){
switch (mode) {
case -1:
if (!this.isJS) $I$(1).currentThread$().setPriority$I(1);
this.targetTime=System.currentTimeMillis$() + Math.abs(this.sleepTime);
mode=0;
break;
case 0:
if (this.checkInterrupted$org_jmol_thread_JmolThread(null) || this.script == null   || this.script.length$() == 0 ) return;
if (!this.runSleep$I$I(26, 1)) return;
mode=1;
break;
case 1:
mode=(System.currentTimeMillis$() < this.targetTime ? 0 : 2);
break;
case 2:
this.currentTime=System.currentTimeMillis$();
if (this.vwr.timeouts.get$O(this.$name) == null ) return;
this.status++;
var continuing=(this.sleepTime < 0);
if (continuing) this.targetTime=System.currentTimeMillis$() + Math.abs(this.sleepTime);
 else this.vwr.timeouts.remove$O(this.$name);
if (this.triggered) {
this.triggered=false;
if (this.$name.equals$O("_SET_IN_MOTION_")) {
this.vwr.checkInMotion$I(2);
} else {
this.vwr.evalStringQuiet$S((continuing ? this.script + ";\ntimeout ID \"" + this.$name + "\";"  : this.script));
}}mode=(continuing ? 0 : -2);
break;
case -2:
this.vwr.timeouts.remove$O(this.$name);
return;
}
}
});

Clazz.newMeth(C$, 'clear$java_util_Map', function (timeouts) {
for (var o, $o = timeouts.values$().iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var t=o;
if (!t.script.equals$O("exitJmol")) t.interrupt$();
}
timeouts.clear$();
}, 1);

Clazz.newMeth(C$, 'setTimeout$org_jmol_viewer_Viewer$java_util_Map$S$I$S', function (vwr, timeouts, name, mSec, script) {
var t=timeouts.get$O(name);
if (mSec == 0) {
if (t != null ) {
t.interrupt$();
timeouts.remove$O(name);
}return;
}if (t != null ) {
p$1.set$I$S.apply(t, [mSec, script]);
return;
}t=Clazz.new_(C$.c$$org_jmol_viewer_Viewer$S$I$S,[vwr, name, mSec, script]);
timeouts.put$O$O(name, t);
t.start$();
}, 1);

Clazz.newMeth(C$, 'trigger$java_util_Map$S', function (timeouts, name) {
var t=timeouts.get$O(name);
if (t != null ) t.triggered=(t.sleepTime < 0);
}, 1);

Clazz.newMeth(C$, 'showTimeout$java_util_Map$S', function (timeouts, name) {
var sb=Clazz.new_($I$(2,1));
if (timeouts != null ) {
for (var o, $o = timeouts.values$().iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var t=o;
if (name == null  || t.$name.equalsIgnoreCase$S(name) ) sb.append$S(t.toString()).append$S("\n");
}
}return (sb.length$() > 0 ? sb.toString() : "<no timeouts set>");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
