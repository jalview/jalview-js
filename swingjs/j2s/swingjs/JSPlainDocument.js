(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'StringBuffer','javax.swing.event.EventListenerList','javax.swing.event.DocumentListener',['swingjs.JSPlainDocument','.DocEvent'],['javax.swing.event.DocumentEvent','.EventType']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSPlainDocument", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.swing.text.Document');
C$.$classes$=[['DocEvent',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myText=Clazz.new_($I$(1,1));
this.achar=Clazz.array(Character.TYPE, [0]);
this.listenerList=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['myText','StringBuffer','achar','char[]','listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLength$', function () {
return this.myText.length$();
});

Clazz.newMeth(C$, 'addDocumentListener$javax_swing_event_DocumentListener', function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(3),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']), listener);
});

Clazz.newMeth(C$, 'removeDocumentListener$javax_swing_event_DocumentListener', function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(3),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']), listener);
});

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_event_UndoableEditListener', function (listener) {
System.out.println$O(listener);
});

Clazz.newMeth(C$, 'removeUndoableEditListener$javax_swing_event_UndoableEditListener', function (listener) {
System.out.println$O(listener);
});

Clazz.newMeth(C$, 'getProperty$O', function (key) {
return null;
});

Clazz.newMeth(C$, 'putProperty$O$O', function (key, value) {
});

Clazz.newMeth(C$, 'remove$I$I', function (offs, len) {
if (len <= 0) return;
if (offs < 0 || (offs + len) > this.getLength$() ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid remove", this.getLength$() + 1]);
}this.myText.replace$I$I$S(offs, len, "");
var chng=Clazz.new_([this, null, offs, len, $I$(5).REMOVE],$I$(4,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
this.fireRemoveUpdate$javax_swing_event_DocumentEvent(chng);
});

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet', function (offset, str, a) {
if ((str == null ) || (str.length$() == 0) ) {
return;
}this.myText.insert$I$S(offset, str);
var e=Clazz.new_([this, null, offset, str.length$(), $I$(5).INSERT],$I$(4,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
this.fireInsertUpdate$javax_swing_event_DocumentEvent(e);
});

Clazz.newMeth(C$, 'getText$I$I', function (offset, length) {
return this.myText.substring$I$I(offset, offset + length);
});

Clazz.newMeth(C$, 'getText$I$I$javax_swing_text_Segment', function (offset, length, txt) {
return;
});

Clazz.newMeth(C$, 'getStartPosition$', function () {
return null;
});

Clazz.newMeth(C$, 'getEndPosition$', function () {
return null;
});

Clazz.newMeth(C$, 'createPosition$I', function (offs) {
return null;
});

Clazz.newMeth(C$, 'getRootElements$', function () {
return null;
});

Clazz.newMeth(C$, 'getDefaultRootElement$', function () {
return null;
});

Clazz.newMeth(C$, 'render$Runnable', function (r) {
});

Clazz.newMeth(C$, 'fireInsertUpdate$javax_swing_event_DocumentEvent', function (e) {
try {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).insertUpdate$javax_swing_event_DocumentEvent(e);
}}
} finally {
}
});

Clazz.newMeth(C$, 'fireRemoveUpdate$javax_swing_event_DocumentEvent', function (e) {
try {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).removeUpdate$javax_swing_event_DocumentEvent(e);
}}
} finally {
}
});

Clazz.newMeth(C$, 'getListeners$Class', function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSPlainDocument, "DocEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.DocumentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','length'],'O',['type','javax.swing.event.DocumentEvent.EventType']]]

Clazz.newMeth(C$, 'c$$I$I$javax_swing_event_DocumentEvent_EventType', function (offset, length, type) {
;C$.$init$.apply(this);
this.type=type;
this.offset=offset;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'getDocument$', function () {
return this.this$0;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getChange$javax_swing_text_Element', function (elem) {
return null;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-27 17:26:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
