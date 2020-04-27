(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.HashMap','jalview.util.Platform','javax.swing.JOptionPane','java.util.Arrays']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JvOptionPane", null, 'javax.swing.JOptionPane', ['jalview.util.dialogrunner.DialogRunnerI', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.callbacks=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['parentComponent','java.awt.Component','callbacks','java.util.Map','ourOptions','java.util.List']]
,['Z',['interactiveMode'],'O',['mockResponse','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_awt_Component', function (parent) {
Clazz.super_(C$, this);
this.parentComponent=$I$(2).isJS$() ? this : parent;
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O', function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showConfirmDialog$java_awt_Component$O(parentComponent, message) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I', function (parentComponent, message, title, optionType) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
default:
case 0:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I(parentComponent, message, title, optionType);
}
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I', function (parentComponent, message, title, optionType, messageType) {
return C$.isInteractiveMode$() ? $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I(parentComponent, message, title, optionType, messageType) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon', function (parentComponent, message, title, optionType, messageType, icon) {
return C$.isInteractiveMode$() ? $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon(parentComponent, message, title, optionType, messageType, icon) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O', function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showInternalConfirmDialog$java_awt_Component$O(parentComponent, message) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$S$S$I', function (parentComponent, message, title, optionType) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
case 0:
default:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I(parentComponent, message, title, optionType);
}
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I$I', function (parentComponent, message, title, optionType, messageType) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
case 0:
default:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I(parentComponent, message, title, optionType, messageType);
}
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon', function (parentComponent, message, title, optionType, messageType, icon) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
case 0:
default:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon(parentComponent, message, title, optionType, messageType, icon);
}
}, 1);

Clazz.newMeth(C$, 'showOptionDialog$java_awt_Component$S$S$I$I$javax_swing_Icon$OA$O', function (parentComponent, message, title, optionType, messageType, icon, options, initialValue) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}return $I$(3).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(parentComponent, message, title, optionType, messageType, icon, options, initialValue);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$S', function (parentComponent, message) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O(parentComponent, message);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$S$S$I', function (parentComponent, message, title, messageType) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[parentComponent, C$.getPrefix$I(messageType) + message, title, messageType]);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$S$S$I$javax_swing_Icon', function (parentComponent, message, title, messageType, icon) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon(parentComponent, message, title, messageType, icon);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$O', function (parentComponent, message) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O(parentComponent, message);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$S$S$I', function (parentComponent, message, title, messageType) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[parentComponent, C$.getPrefix$I(messageType) + message, title, messageType]);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon', function (parentComponent, message, title, messageType, icon) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon(parentComponent, message, title, messageType, icon);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$O', function (message) {
if (!C$.isInteractiveMode$()) {
return C$.getMockResponse$().toString();
}return $I$(3).showInputDialog$O(message);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$S$S', function (message, initialSelectionValue) {
if (!C$.isInteractiveMode$()) {
return C$.getMockResponse$().toString();
}return $I$(3).showInputDialog$O$O(message, initialSelectionValue);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$O$O', function (message, initialSelectionValue) {
if (!C$.isInteractiveMode$()) {
return C$.getMockResponse$().toString();
}return $I$(3).showInputDialog$O$O(message, initialSelectionValue);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S', function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O(parentComponent, message) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S$S', function (parentComponent, message, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$O(parentComponent, message, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$O', function (parentComponent, message, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$O(parentComponent, message, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S$S$I', function (parentComponent, message, title, messageType) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$S$I(parentComponent, message, title, messageType) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O', function (parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$S', function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showInternalInputDialog$java_awt_Component$O(parentComponent, message) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$S$S$I', function (parentComponent, message, title, messageType) {
return C$.isInteractiveMode$() ? $I$(3,"showInternalInputDialog$java_awt_Component$O$S$I",[parentComponent, C$.getPrefix$I(messageType) + message, title, messageType]) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$S$S$I$javax_swing_Icon$OA$O', function (parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInternalInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'outputMessage$O', function (message) {
System.out.println$S(">>> JOption Message : " + message.toString());
}, 1);

Clazz.newMeth(C$, 'getMockResponse$', function () {
return C$.mockResponse;
}, 1);

Clazz.newMeth(C$, 'setMockResponse$O', function (mockOption) {
C$.mockResponse=mockOption;
}, 1);

Clazz.newMeth(C$, 'resetMock$', function () {
C$.setMockResponse$O(new Integer(2));
C$.setInteractiveMode$Z(true);
}, 1);

Clazz.newMeth(C$, 'isInteractiveMode$', function () {
return C$.interactiveMode;
}, 1);

Clazz.newMeth(C$, 'setInteractiveMode$Z', function (interactive) {
C$.interactiveMode=interactive;
}, 1);

Clazz.newMeth(C$, 'getPrefix$I', function (messageType) {
var prefix="";
if ($I$(2).isJS$()) {
switch (messageType) {
case 2:
prefix="WARNING! ";
break;
case 0:
prefix="ERROR! ";
break;
default:
prefix="Note: ";
}
}return prefix;
}, 1);

Clazz.newMeth(C$, 'newOptionDialog$java_awt_Component', function (parentComponent) {
return Clazz.new_(C$.c$$java_awt_Component,[parentComponent]);
}, 1);

Clazz.newMeth(C$, 'showDialog$S$S$I$I$javax_swing_Icon$OA$O', function (message, title, optionType, messageType, icon, options, initialValue) {
if (!C$.isInteractiveMode$()) {
this.handleResponse$O(C$.getMockResponse$());
}this.ourOptions=$I$(4).asList$OA(options);
var response=$I$(3).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(this.parentComponent, message, title, optionType, messageType, icon, options, initialValue);
if (!$I$(2).isJS$()) 
{}
});

Clazz.newMeth(C$, 'showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S', function (mainPanel, title, yesNoCancelOption, questionMessage, icon, options, initresponse) {
if (!C$.isInteractiveMode$()) {
this.handleResponse$O(C$.getMockResponse$());
}this.ourOptions=$I$(4).asList$OA(options);
var response;
if (this.parentComponent !== this ) {
response=$I$(3).showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(this.parentComponent, mainPanel, title, yesNoCancelOption, questionMessage, icon, options, initresponse);
} else {
response=$I$(3).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(this.parentComponent, mainPanel, title, yesNoCancelOption, questionMessage, icon, options, initresponse);
}if (!$I$(2).isJS$()) 
{}
});

Clazz.newMeth(C$, 'setResponseHandler$O$Runnable', function (response, action) {
this.callbacks.put$O$O(response, action);
return this;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
var newValue=evt.getNewValue$();
var ourOption=this.ourOptions.indexOf$O(newValue);
if (ourOption >= 0) {
this.handleResponse$O(new Integer(ourOption));
} else {
this.handleResponse$O(newValue);
}});

Clazz.newMeth(C$, 'handleResponse$O', function (response) {
if (response != null  && !response.equals$O(response) ) {
return;
}var action=this.callbacks.get$O(response);
if (action != null ) {
action.run$();
}});

C$.$static$=function(){C$.$static$=0;
C$.mockResponse=new Integer(2);
C$.interactiveMode=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
