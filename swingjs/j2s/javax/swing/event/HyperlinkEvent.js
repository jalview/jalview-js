(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "HyperlinkEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.u=null;
this.desc=null;
this.sourceElement=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL', function (source, type, u) {
C$.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S.apply(this, [source, type, u, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S', function (source, type, u, desc) {
C$.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element.apply(this, [source, type, u, desc, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element', function (source, type, u, desc, sourceElement) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
this.type=type;
this.u=u;
this.desc=desc;
this.sourceElement=sourceElement;
}, 1);

Clazz.newMeth(C$, 'getEventType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.desc;
});

Clazz.newMeth(C$, 'getURL$', function () {
return this.u;
});

Clazz.newMeth(C$, 'getSourceElement$', function () {
return this.sourceElement;
});
;
(function(){var C$=Clazz.newClass(P$.HyperlinkEvent, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.ENTERED=null;
C$.EXITED=null;
C$.ACTIVATED=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ENTERED=Clazz.new_(C$.c$$S,["ENTERED"]);
C$.EXITED=Clazz.new_(C$.c$$S,["EXITED"]);
C$.ACTIVATED=Clazz.new_(C$.c$$S,["ACTIVATED"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.typeString=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.typeString=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.typeString;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
