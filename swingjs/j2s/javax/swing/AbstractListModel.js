(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.event.ListDataListener','javax.swing.event.ListDataEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractListModel", null, null, 'javax.swing.ListModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'addListDataListener$javax_swing_event_ListDataListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(2),['contentsChanged$javax_swing_event_ListDataEvent','intervalAdded$javax_swing_event_ListDataEvent','intervalRemoved$javax_swing_event_ListDataEvent']), l);
});

Clazz.newMeth(C$, 'removeListDataListener$javax_swing_event_ListDataListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(2),['contentsChanged$javax_swing_event_ListDataEvent','intervalAdded$javax_swing_event_ListDataEvent','intervalRemoved$javax_swing_event_ListDataEvent']), l);
});

Clazz.newMeth(C$, 'getListDataListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(2),['contentsChanged$javax_swing_event_ListDataEvent','intervalAdded$javax_swing_event_ListDataEvent','intervalRemoved$javax_swing_event_ListDataEvent']));
});

Clazz.newMeth(C$, 'fireContentsChanged$O$I$I',  function (source, index0, index1) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['contentsChanged$javax_swing_event_ListDataEvent','intervalAdded$javax_swing_event_ListDataEvent','intervalRemoved$javax_swing_event_ListDataEvent']) ) {
if (e == null ) {
e=Clazz.new_($I$(3,1).c$$O$I$I$I,[source, 0, index0, index1]);
}(listeners[i + 1]).contentsChanged$javax_swing_event_ListDataEvent(e);
}}
});

Clazz.newMeth(C$, 'fireIntervalAdded$O$I$I',  function (source, index0, index1) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['contentsChanged$javax_swing_event_ListDataEvent','intervalAdded$javax_swing_event_ListDataEvent','intervalRemoved$javax_swing_event_ListDataEvent']) ) {
if (e == null ) {
e=Clazz.new_($I$(3,1).c$$O$I$I$I,[source, 1, index0, index1]);
}(listeners[i + 1]).intervalAdded$javax_swing_event_ListDataEvent(e);
}}
});

Clazz.newMeth(C$, 'fireIntervalRemoved$O$I$I',  function (source, index0, index1) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['contentsChanged$javax_swing_event_ListDataEvent','intervalAdded$javax_swing_event_ListDataEvent','intervalRemoved$javax_swing_event_ListDataEvent']) ) {
if (e == null ) {
e=Clazz.new_($I$(3,1).c$$O$I$I$I,[source, 2, index0, index1]);
}(listeners[i + 1]).intervalRemoved$javax_swing_event_ListDataEvent(e);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
