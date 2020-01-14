(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'StringBuffer','java.util.Collections','java.util.IdentityHashMap','java.util.HashMap','java.util.HashSet','Thread','sun.awt.SunToolkit','sun.awt.MostRecentThreadAppContext','sun.awt.MostRecentKeyValue','java.beans.PropertyChangeListener','java.beans.PropertyChangeSupport']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AppContext");
C$.EVENT_QUEUE_KEY=null;
C$.threadGroup2appContext=null;
C$.numAppContexts=0;
C$.mostRecentThreadAppContext=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EVENT_QUEUE_KEY=Clazz.new_($I$(1).c$$S,["EventQueue"]);
C$.threadGroup2appContext=$I$(2).synchronizedMap$java_util_Map(Clazz.new_($I$(3)));
C$.numAppContexts=0;
C$.mostRecentThreadAppContext=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
this.threadGroup=null;
this.changeSupport=null;
this.isDisposed=false;
this.contextClassLoader=null;
this.mostRecentKeyValue=null;
this.shadowMostRecentKeyValue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.table=Clazz.new_($I$(4));
this.changeSupport=null;
this.isDisposed=false;
this.mostRecentKeyValue=null;
this.shadowMostRecentKeyValue=null;
}, 1);

Clazz.newMeth(C$, 'getAppContexts$', function () {
return Clazz.new_($I$(5).c$$java_util_Collection,[C$.threadGroup2appContext.values$()]);
}, 1);

Clazz.newMeth(C$, 'isDisposed$', function () {
return this.isDisposed;
});

Clazz.newMeth(C$, 'c$$ThreadGroup', function (threadGroup) {
C$.$init$.apply(this);
C$.numAppContexts++;
this.threadGroup=threadGroup;
C$.threadGroup2appContext.put$TK$TV(threadGroup, this);
this.contextClassLoader=this ||null;
}, 1);

Clazz.newMeth(C$, 'getAppContext$', function () {
var currentThread=$I$(6).currentThread$();
var appContext=null;
var recent=C$.mostRecentThreadAppContext;
if ((recent != null ) && (recent.thread === currentThread ) ) {
appContext=recent.appContext;
} else {
var currentThreadGroup=currentThread.getThreadGroup$();
var threadGroup=currentThreadGroup;
appContext=C$.threadGroup2appContext.get$O(threadGroup);
while (appContext == null ){
threadGroup=threadGroup.getParent$();
if (threadGroup == null ) {
appContext=$I$(7).createNewAppContext$();
break;
}appContext=C$.threadGroup2appContext.get$O(threadGroup);
}
for (var tg=currentThreadGroup; tg !== threadGroup ; tg=tg.getParent$()) {
C$.threadGroup2appContext.put$TK$TV(tg, appContext);
}
C$.mostRecentThreadAppContext=Clazz.new_($I$(8).c$$Thread$sun_awt_AppContext,[currentThread, appContext]);
}return appContext;
}, 1);

Clazz.newMeth(C$, 'isMainContext$sun_awt_AppContext', function (ctx) {
return false;
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
});

Clazz.newMeth(C$, 'get$O', function (key) {
{
var recent=this.mostRecentKeyValue;
if ((recent != null ) && (recent.key === key ) ) {
return recent.value;
}var value=this.table.get$O(key);
if (this.mostRecentKeyValue == null ) {
this.mostRecentKeyValue=Clazz.new_($I$(9).c$$O$O,[key, value]);
this.shadowMostRecentKeyValue=Clazz.new_($I$(9).c$$O$O,[key, value]);
} else {
var auxKeyValue=this.mostRecentKeyValue;
this.shadowMostRecentKeyValue.setPair$O$O(key, value);
this.mostRecentKeyValue=this.shadowMostRecentKeyValue;
this.shadowMostRecentKeyValue=auxKeyValue;
}return value;
}});

Clazz.newMeth(C$, 'put$O$O', function (key, value) {
{
var recent=this.mostRecentKeyValue;
if ((recent != null ) && (recent.key === key ) ) recent.value=value;
return this.table.put$TK$TV(key, value);
}});

Clazz.newMeth(C$, 'remove$O', function (key) {
{
var recent=this.mostRecentKeyValue;
if ((recent != null ) && (recent.key === key ) ) recent.value=null;
return this.table.remove$O(key);
}});

Clazz.newMeth(C$, 'getThreadGroup$', function () {
return this.threadGroup;
});

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
return this.contextClassLoader;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[threadGroup=" + this.threadGroup.getName$() + "]" ;
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$', function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(10), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
if (listener == null ) {
return;
}if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(11).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
if (listener == null  || this.changeSupport == null  ) {
return;
}this.changeSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S', function (propertyName) {
if (this.changeSupport == null ) {
return Clazz.array($I$(10), [0]);
}return this.changeSupport.getPropertyChangeListeners$S(propertyName);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
