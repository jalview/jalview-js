(function(){var P$=Clazz.newPackage("javax.xml.bind.helpers"),I$=[[0,'javax.xml.bind.helpers.Messages','java.text.MessageFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ValidationEventImpl", null, null, 'javax.xml.bind.ValidationEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.severity=0;
this.message=null;
this.linkedException=null;
this.locator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S$javax_xml_bind_ValidationEventLocator', function (_severity, _message, _locator) {
C$.c$$I$S$javax_xml_bind_ValidationEventLocator$Throwable.apply(this, [_severity, _message, _locator, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$javax_xml_bind_ValidationEventLocator$Throwable', function (_severity, _message, _locator, _linkedException) {
C$.$init$.apply(this);
this.setSeverity$I(_severity);
this.message=_message;
this.locator=_locator;
this.linkedException=_linkedException;
}, 1);

Clazz.newMeth(C$, 'getSeverity$', function () {
return this.severity;
});

Clazz.newMeth(C$, 'setSeverity$I', function (_severity) {
if (_severity != 0 && _severity != 1  && _severity != 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).format$S("ValidationEventImpl.IllegalSeverity")]);
}this.severity=_severity;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return this.message;
});

Clazz.newMeth(C$, 'setMessage$S', function (_message) {
this.message=_message;
});

Clazz.newMeth(C$, 'getLinkedException$', function () {
return this.linkedException;
});

Clazz.newMeth(C$, 'setLinkedException$Throwable', function (_linkedException) {
this.linkedException=_linkedException;
});

Clazz.newMeth(C$, 'getLocator$', function () {
return this.locator;
});

Clazz.newMeth(C$, 'setLocator$javax_xml_bind_ValidationEventLocator', function (_locator) {
this.locator=_locator;
});

Clazz.newMeth(C$, 'toString', function () {
var s;
switch (this.getSeverity$()) {
case 0:
s="WARNING";
break;
case 1:
s="ERROR";
break;
case 2:
s="FATAL_ERROR";
break;
default:
s=String.valueOf$I(this.getSeverity$());
break;
}
return $I$(2).format$S$OA("[severity={0},message={1},locator={2}]", Clazz.array(java.lang.Object, -1, [s, this.getMessage$(), this.getLocator$()]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
