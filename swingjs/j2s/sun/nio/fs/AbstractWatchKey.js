(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,['sun.nio.fs.AbstractWatchKey','.Event'],'java.nio.file.StandardWatchEventKinds',['sun.nio.fs.AbstractWatchKey','.State'],'java.util.ArrayList','java.util.HashMap','java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractWatchKey", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.nio.file.WatchKey');
C$.OVERFLOW_EVENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OVERFLOW_EVENT=Clazz.new_($I$(1).c$$java_nio_file_WatchEvent_Kind$TT,[$I$(2).OVERFLOW, null]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.watcher=null;
this.dir=null;
this.state=null;
this.events=null;
this.lastModifyEvents=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$sun_nio_fs_AbstractWatchService', function (dir, watcher) {
C$.$init$.apply(this);
this.watcher=watcher;
this.dir=dir;
this.state=$I$(3).READY;
this.events=Clazz.new_($I$(4));
this.lastModifyEvents=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'watcher$', function () {
return this.watcher;
});

Clazz.newMeth(C$, 'watchable$', function () {
return this.dir;
});

Clazz.newMeth(C$, 'signal$', function () {
{
if (this.state === $I$(3).READY ) {
this.state=$I$(3).SIGNALLED;
this.watcher.enqueueKey$java_nio_file_WatchKey(this);
}}});

Clazz.newMeth(C$, 'signalEvent$java_nio_file_WatchEvent_Kind$O', function (kind, context) {
var isModify=(kind === $I$(2).ENTRY_MODIFY );
{
var size=this.events.size$();
if (size > 0) {
var prev=this.events.get$I(size - 1);
if ((prev.kind$() === $I$(2).OVERFLOW ) || ((kind === prev.kind$()  && $I$(6).equals$O$O(context, prev.context$()) )) ) {
(prev).increment$();
return;
}if (!this.lastModifyEvents.isEmpty$()) {
if (isModify) {
var ev=this.lastModifyEvents.get$O(context);
if (ev != null ) {
Clazz.assert(C$, this, function(){return ev.kind$() === $I$(2).ENTRY_MODIFY });
(ev).increment$();
return;
}} else {
this.lastModifyEvents.remove$O(context);
}}if (size >= 512) {
kind=$I$(2).OVERFLOW;
isModify=false;
context=null;
}}var ev=Clazz.new_($I$(1).c$$java_nio_file_WatchEvent_Kind$TT,[kind, context]);
if (isModify) {
this.lastModifyEvents.put$TK$TV(context, ev);
} else if (kind === $I$(2).OVERFLOW ) {
this.events.clear$();
this.lastModifyEvents.clear$();
}this.events.add$TE(ev);
this.signal$();
}});

Clazz.newMeth(C$, 'pollEvents$', function () {
{
var result=this.events;
this.events=Clazz.new_($I$(4));
this.lastModifyEvents.clear$();
return result;
}});

Clazz.newMeth(C$, 'reset$', function () {
{
if (this.state === $I$(3).SIGNALLED  && this.isValid$() ) {
if (this.events.isEmpty$()) {
this.state=$I$(3).READY;
} else {
this.watcher.enqueueKey$java_nio_file_WatchKey(this);
}}return this.isValid$();
}});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.AbstractWatchKey, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "READY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SIGNALLED", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.AbstractWatchKey, "Event", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.nio.file.WatchEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.kind=null;
this.context=null;
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_nio_file_WatchEvent_Kind$TT'], function (type, context) {
C$.$init$.apply(this);
this.kind=type;
this.context=context;
this.count=1;
}, 1);

Clazz.newMeth(C$, 'kind$', function () {
return this.kind;
});

Clazz.newMeth(C$, 'context$', function () {
return this.context;
});

Clazz.newMeth(C$, 'count$', function () {
return this.count;
});

Clazz.newMeth(C$, 'increment$', function () {
this.count++;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
