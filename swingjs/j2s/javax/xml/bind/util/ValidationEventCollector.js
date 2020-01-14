(function(){var P$=Clazz.newPackage("javax.xml.bind.util"),I$=[[0,'java.util.ArrayList','javax.xml.bind.ValidationEvent','javax.xml.bind.util.Messages','InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ValidationEventCollector", null, null, 'javax.xml.bind.ValidationEventHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.events=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.events=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getEvents$', function () {
return this.events.toArray$TTA(Clazz.array($I$(2), [this.events.size$()]));
});

Clazz.newMeth(C$, 'reset$', function () {
this.events.clear$();
});

Clazz.newMeth(C$, 'hasEvents$', function () {
return !this.events.isEmpty$();
});

Clazz.newMeth(C$, ['handleEvent$javax_xml_bind_ValidationEvent','handleEvent$'], function (event) {
this.events.add$TE(event);
var retVal=true;
switch (event.getSeverity$()) {
case 0:
retVal=true;
break;
case 1:
retVal=true;
break;
case 2:
retVal=false;
break;
default:
C$._assert$Z$S(false, $I$(3).format$S$O("ValidationEventCollector.UnrecognizedSeverity", new Integer(event.getSeverity$())));
break;
}
return retVal;
});

Clazz.newMeth(C$, '_assert$Z$S', function (b, msg) {
if (!b) {
throw Clazz.new_($I$(4).c$$S,[msg]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
