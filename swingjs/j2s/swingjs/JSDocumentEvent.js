(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSDocumentEvent", null, null, 'javax.swing.event.DocumentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['off','len'],'O',['type','javax.swing.event.DocumentEvent.EventType','doc','swingjs.JSAbstractDocument']]]

Clazz.newMeth(C$, 'c$$swingjs_JSAbstractDocument$I$I$javax_swing_event_DocumentEvent_EventType', function (doc, offs, len, eventType) {
;C$.$init$.apply(this);
this.off=offs;
this.len=len;
this.type=eventType;
this.doc=doc;
}, 1);

Clazz.newMeth(C$, 'getOffset$', function () {
return this.off;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.len;
});

Clazz.newMeth(C$, 'getDocument$', function () {
return this.doc;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getChange$javax_swing_text_Element', function (elem) {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-27 13:55:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
