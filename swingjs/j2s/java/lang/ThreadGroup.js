(function(){var P$=java.lang,p$1={},I$=[[0,'Thread','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ThreadGroup", null, null, [['Thread','Thread.UncaughtExceptionHandler']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parent=null;
this.name=null;
this.maxPriority=0;
this.destroyed=false;
this.daemon=false;
this.vmAllowSuspension=false;
this.nUnstartedThreads=0;
this.nthreads=0;
this.threads=null;
this.ngroups=0;
this.groups=null;
this.html5Applet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.maxPriority=10;
this.nUnstartedThreads=0;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$ThreadGroup$S.apply(this, [$I$(1).currentThread$().getThreadGroup$(), name]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$S', function (parent, name) {
C$.$init$.apply(this);
this.name=name;
this.parent=parent;
if (parent != null ) {
this.maxPriority=parent.maxPriority;
this.daemon=parent.daemon;
this.vmAllowSuspension=parent.vmAllowSuspension;
p$1.add$ThreadGroup.apply(parent, [this]);
}}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getParent$', function () {
if (this.parent != null ) this.parent.checkAccess$();
return this.parent;
});

Clazz.newMeth(C$, 'getMaxPriority$', function () {
return this.maxPriority;
});

Clazz.newMeth(C$, 'isDaemon$', function () {
return this.daemon;
});

Clazz.newMeth(C$, 'isDestroyed$', function () {
return this.destroyed;
});

Clazz.newMeth(C$, 'setDaemon$Z', function (daemon) {
this.checkAccess$();
this.daemon=daemon;
});

Clazz.newMeth(C$, 'setMaxPriority$I', function (pri) {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
if (pri < 1 || pri > 10 ) {
return;
}this.maxPriority=(this.parent != null ) ? Math.min(pri, this.parent.maxPriority) : pri;
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
groupsSnapshot[i].setMaxPriority$I(pri);
}
});

Clazz.newMeth(C$, 'parentOf$ThreadGroup', function (g) {
for (; g != null ; g=g.parent) {
if (g === this ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'checkAccess$', function () {
});

Clazz.newMeth(C$, 'activeCount$', function () {
var result;
var ngroupsSnapshot;
var groupsSnapshot;
{
if (this.destroyed) {
return 0;
}result=this.nthreads;
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
result+=groupsSnapshot[i].activeCount$();
}
return result;
});

Clazz.newMeth(C$, 'enumerate$ThreadA', function (list) {
this.checkAccess$();
return p$1.enumerate$ThreadA$I$Z.apply(this, [list, 0, true]);
});

Clazz.newMeth(C$, 'enumerate$ThreadA$Z', function (list, recurse) {
this.checkAccess$();
return p$1.enumerate$ThreadA$I$Z.apply(this, [list, 0, recurse]);
});

Clazz.newMeth(C$, 'enumerate$ThreadA$I$Z', function (list, n, recurse) {
var ngroupsSnapshot=0;
var groupsSnapshot=null;
{
if (this.destroyed) {
return 0;
}var nt=this.nthreads;
if (nt > list.length - n) {
nt=list.length - n;
}for (var i=0; i < nt; i++) {
if (this.threads[i].isAlive$()) {
list[n++]=this.threads[i];
}}
if (recurse) {
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}}if (recurse) {
for (var i=0; i < ngroupsSnapshot; i++) {
n=p$1.enumerate$ThreadA$I$Z.apply(groupsSnapshot[i], [list, n, true]);
}
}return n;
}, p$1);

Clazz.newMeth(C$, 'activeGroupCount$', function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
if (this.destroyed) {
return 0;
}ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}var n=ngroupsSnapshot;
for (var i=0; i < ngroupsSnapshot; i++) {
n+=groupsSnapshot[i].activeGroupCount$();
}
return n;
});

Clazz.newMeth(C$, 'enumerate$ThreadGroupA', function (list) {
this.checkAccess$();
return p$1.enumerate$ThreadGroupA$I$Z.apply(this, [list, 0, true]);
});

Clazz.newMeth(C$, 'enumerate$ThreadGroupA$Z', function (list, recurse) {
this.checkAccess$();
return p$1.enumerate$ThreadGroupA$I$Z.apply(this, [list, 0, recurse]);
});

Clazz.newMeth(C$, 'enumerate$ThreadGroupA$I$Z', function (list, n, recurse) {
var ngroupsSnapshot=0;
var groupsSnapshot=null;
{
if (this.destroyed) {
return 0;
}var ng=this.ngroups;
if (ng > list.length - n) {
ng=list.length - n;
}if (ng > 0) {
System.arraycopy$O$I$O$I$I(this.groups, 0, list, n, ng);
n+=ng;
}if (recurse) {
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}}if (recurse) {
for (var i=0; i < ngroupsSnapshot; i++) {
n=p$1.enumerate$ThreadGroupA$I$Z.apply(groupsSnapshot[i], [list, n, true]);
}
}return n;
}, p$1);

Clazz.newMeth(C$, 'stop$', function () {
if (p$1.stopOrSuspend$Z.apply(this, [false])) $I$(1).currentThread$().stop$();
});

Clazz.newMeth(C$, 'interrupt$', function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
for (var i=0; i < this.nthreads; i++) {
this.threads[i].interrupt$();
}
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
groupsSnapshot[i].interrupt$();
}
});

Clazz.newMeth(C$, 'suspend$', function () {
if (p$1.stopOrSuspend$Z.apply(this, [true])) $I$(1).currentThread$().suspend$();
});

Clazz.newMeth(C$, 'stopOrSuspend$Z', function (suspend) {
var suicide=false;
var us=$I$(1).currentThread$();
var ngroupsSnapshot;
var groupsSnapshot=null;
{
this.checkAccess$();
for (var i=0; i < this.nthreads; i++) {
if (this.threads[i] === us ) suicide=true;
 else if (suspend) this.threads[i].suspend$();
 else this.threads[i].stop$();
}
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
}}for (var i=0; i < ngroupsSnapshot; i++) suicide=p$1.stopOrSuspend$Z.apply(groupsSnapshot[i], [suspend]) || suicide ;

return suicide;
}, p$1);

Clazz.newMeth(C$, 'resume$', function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
for (var i=0; i < this.nthreads; i++) {
this.threads[i].resume$();
}
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
groupsSnapshot[i].resume$();
}
});

Clazz.newMeth(C$, 'destroy$', function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
if (this.destroyed || (this.nthreads > 0) ) {
throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
}ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$TTA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}if (this.parent != null ) {
this.destroyed=true;
this.ngroups=0;
this.groups=null;
this.nthreads=0;
this.threads=null;
}}for (var i=0; i < ngroupsSnapshot; i+=1) {
groupsSnapshot[i].destroy$();
}
if (this.parent != null ) {
p$1.remove$ThreadGroup.apply(this.parent, [this]);
}});

Clazz.newMeth(C$, 'add$ThreadGroup', function (g) {
{
if (this.destroyed) {
throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
}if (this.groups == null ) {
this.groups=Clazz.array(C$, [4]);
} else if (this.ngroups == this.groups.length) {
this.groups=$I$(2).copyOf$TTA$I(this.groups, this.ngroups * 2);
}this.groups[this.ngroups]=g;
this.ngroups++;
}}, p$1);

Clazz.newMeth(C$, 'remove$ThreadGroup', function (g) {
{
if (this.destroyed) {
return;
}for (var i=0; i < this.ngroups; i++) {
if (this.groups[i] === g ) {
this.ngroups-=1;
System.arraycopy$O$I$O$I$I(this.groups, i + 1, this.groups, i, this.ngroups - i);
this.groups[this.ngroups]=null;
break;
}}
if (this.nthreads == 0) {
this.notifyAll$();
}if (this.daemon && (this.nthreads == 0) && (this.nUnstartedThreads == 0) && (this.ngroups == 0)  ) {
this.destroy$();
}}}, p$1);

Clazz.newMeth(C$, 'addUnstarted$', function () {
{
if (this.destroyed) {
throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
}this.nUnstartedThreads++;
}});

Clazz.newMeth(C$, 'add$Thread', function (t) {
{
if (this.destroyed) {
throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
}if (this.threads == null ) {
this.threads=Clazz.array($I$(1), [4]);
} else if (this.nthreads == this.threads.length) {
this.threads=$I$(2).copyOf$TTA$I(this.threads, this.nthreads * 2);
}this.threads[this.nthreads]=t;
this.nthreads++;
this.nUnstartedThreads--;
}});

Clazz.newMeth(C$, 'remove$Thread', function (t) {
{
if (this.destroyed) {
return;
}for (var i=0; i < this.nthreads; i++) {
if (this.threads[i] === t ) {
System.arraycopy$O$I$O$I$I(this.threads, i + 1, this.threads, i, --this.nthreads - i);
this.threads[this.nthreads]=null;
break;
}}
if (this.nthreads == 0) {
this.notifyAll$();
}if (this.daemon && (this.nthreads == 0) && (this.nUnstartedThreads == 0) && (this.ngroups == 0)  ) {
this.destroy$();
}}});

Clazz.newMeth(C$, ['uncaughtException$Thread$Throwable','uncaughtException$'], function (t, e) {
if (this.parent != null ) {
this.parent.uncaughtException$Thread$Throwable(t, e);
} else {
var ueh=$I$(1).getDefaultUncaughtExceptionHandler$();
if (ueh != null ) {
ueh.uncaughtException$(t, e);
} else if (!(Clazz.instanceOf(e, "java.lang.ThreadDeath"))) {
System.err.print$S("Exception in thread \"" + t.getName$() + "\" " );
e.printStackTrace$java_io_PrintStream(System.err);
}}});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[name=" + this.getName$() + ",maxpri=" + this.maxPriority + ",html5Applet=" + this.html5Applet + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
