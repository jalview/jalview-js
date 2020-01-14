(function(){var P$=Clazz.newPackage("javax.xml.bind.helpers"),p$1={},I$=[[0,'javax.xml.bind.helpers.Messages','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DefaultValidationEventHandler", null, null, 'javax.xml.bind.ValidationEventHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['handleEvent$javax_xml_bind_ValidationEvent','handleEvent$'], function (event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}var severity=null;
var retVal=false;
switch (event.getSeverity$()) {
case 0:
severity=$I$(1).format$S("DefaultValidationEventHandler.Warning");
retVal=true;
break;
case 1:
severity=$I$(1).format$S("DefaultValidationEventHandler.Error");
retVal=false;
break;
case 2:
severity=$I$(1).format$S("DefaultValidationEventHandler.FatalError");
retVal=false;
break;
default:
Clazz.assert(C$, this, function(){return false}, function(){return $I$(1).format$S$O("DefaultValidationEventHandler.UnrecognizedSeverity", new Integer(event.getSeverity$()))});
}
var location=p$1.getLocation$javax_xml_bind_ValidationEvent.apply(this, [event]);
System.out.println$S($I$(1).format$S$O$O$O("DefaultValidationEventHandler.SeverityMessage", severity, event.getMessage$(), location));
return retVal;
});

Clazz.newMeth(C$, 'getLocation$javax_xml_bind_ValidationEvent', function (event) {
var msg=Clazz.new_($I$(2));
var locator=event.getLocator$();
if (locator != null ) {
var url=locator.getURL$();
var obj=locator.getObject$();
var node=locator.getNode$();
var line=locator.getLineNumber$();
if (url != null  || line != -1 ) {
msg.append$S("line " + line);
if (url != null ) msg.append$S(" of " + url);
} else if (obj != null ) {
msg.append$S(" obj: " + obj.toString());
} else if (node != null ) {
msg.append$S(" node: " + node.toString());
}} else {
msg.append$S($I$(1).format$S("DefaultValidationEventHandler.LocationUnavailable"));
}return msg.toString();
}, p$1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
