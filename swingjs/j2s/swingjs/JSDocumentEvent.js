(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSDocumentEvent", null, null, 'javax.swing.event.DocumentEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.off=0;
this.len=0;
this.type=null;
this.doc=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_JSAbstractDocument$I$I$javax_swing_event_DocumentEvent_EventType', function (doc, offs, len, eventType) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
