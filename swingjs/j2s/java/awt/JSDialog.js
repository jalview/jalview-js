(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.ArrayList','java.awt.Dialog',['java.awt.Dialog','.ModalityType'],'java.awt.Toolkit','java.awt.Window','java.awt.event.ComponentEvent',['java.awt.Dialog','.ModalExclusionType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSDialog", null, 'java.awt.Window');
C$.modalDialogs=null;
C$.$nameCounter=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.modalDialogs=Clazz.new_($I$(1));
C$.$nameCounter=0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.blockedWindows=null;
this.resizable=false;
this.undecorated=false;
this.initialized=false;
this.modal=false;
this.modalityType=null;
this.title=null;
this.modalFilter=null;
this.isInHide=false;
this.isInDispose=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.blockedWindows=Clazz.new_($I$(1));
this.resizable=true;
this.undecorated=false;
this.initialized=false;
this.isInHide=false;
this.isInDispose=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame', function (owner) {
C$.c$$java_awt_JSFrame$S$Z.apply(this, [owner, "", false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame', function (owner) {
C$.c$$java_awt_Frame$S$Z.apply(this, [owner, "", false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$Z', function (owner, modal) {
C$.c$$java_awt_JSFrame$S$Z.apply(this, [owner, "", modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$Z', function (owner, modal) {
C$.c$$java_awt_Frame$S$Z.apply(this, [owner, "", modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S', function (owner, title) {
C$.c$$java_awt_JSFrame$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S', function (owner, title) {
C$.c$$java_awt_Frame$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z', function (owner, title, modal) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z', function (owner, title, modal) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog', function (owner) {
C$.c$$java_awt_JSDialog$S$Z.apply(this, [owner, "", false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog', function (owner) {
C$.c$$java_awt_Dialog$S$Z.apply(this, [owner, "", false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S', function (owner, title) {
C$.c$$java_awt_JSDialog$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S', function (owner, title) {
C$.c$$java_awt_Dialog$S$Z.apply(this, [owner, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S$Z', function (owner, title, modal) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z', function (owner, title, modal) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window', function (owner) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, null, $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S', function (owner, title) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, $I$(3).MODELESS]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$java_awt_Dialog_ModalityType', function (owner, modalityType) {
C$.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, null, modalityType]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType', function (owner, title, modalityType) {
C$.superclazz.c$$java_awt_Window.apply(this, [owner]);
C$.$init$.apply(this);
if ((owner != null ) && !(Clazz.instanceOf(owner, "java.awt.JSFrame")) && !(Clazz.instanceOf(owner, "java.awt.JSDialog"))  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong parent window"]);
}this.title=title;
this.setModalityType$java_awt_Dialog_ModalityType(modalityType);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration', function (owner, title, modalityType, gc) {
C$.superclazz.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [owner, gc]);
C$.$init$.apply(this);
if ((owner != null ) && !(Clazz.instanceOf(owner, "java.awt.JSFrame")) && !(Clazz.instanceOf(owner, "java.awt.JSDialog"))  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["wrong owner window"]);
}this.title=title;
this.setModalityType$java_awt_Dialog_ModalityType(modalityType);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'constructComponentName$', function () {
return "dialog" + C$.$nameCounter++;
});

Clazz.newMeth(C$, 'addNotify$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.getOrCreatePeer$();
if (this.parent != null ) {
this.parent.addNotify$();
}C$.superclazz.prototype.addNotify$.apply(this, []);
}});

Clazz.newMeth(C$, 'getOrCreatePeer$', function () {
return (this.ui == null  ? null : this.peer == null  ? (this.peer=this.getToolkit$().createDialog$java_awt_Dialog(this)) : this.peer);
});

Clazz.newMeth(C$, 'isModal$', function () {
return this.isModal_NoClientCode$();
});

Clazz.newMeth(C$, 'isModal_NoClientCode$', function () {
return this.modalityType !== $I$(3).MODELESS ;
});

Clazz.newMeth(C$, 'setModal$Z', function (modal) {
this.modal=modal;
this.setModalityType$java_awt_Dialog_ModalityType(modal ? $I$(2).DEFAULT_MODALITY_TYPE : $I$(3).MODELESS);
});

Clazz.newMeth(C$, 'getModalityType$', function () {
return this.modalityType;
});

Clazz.newMeth(C$, 'setModalityType$java_awt_Dialog_ModalityType', function (type) {
if (type == null ) {
type=$I$(3).MODELESS;
}if (!$I$(4).getDefaultToolkit$().isModalityTypeSupported$java_awt_Dialog_ModalityType(type)) {
type=$I$(3).MODELESS;
}if (this.modalityType === type ) {
return;
}p$1.checkModalityPermission$java_awt_Dialog_ModalityType.apply(this, [type]);
this.modalityType=type;
this.modal=(this.modalityType !== $I$(3).MODELESS );
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (title) {
var oldTitle=this.title;
{
this.title=title;
var peer=this.peer;
if (peer != null ) {
peer.setTitle$S(title);
}}this.firePropertyChange$S$O$O("title", oldTitle, title);
});

Clazz.newMeth(C$, 'conditionalShow$java_awt_Component$Long', function (toFocus, time) {
var retval;
P$.Window.closeSplashScreen$();
if (this.ui != null  && (this.ui).isDisposed ) this.addNotify$();
this.validate$();
if (this.visible) {
this.toFront$();
retval=false;
} else {
retval=true;
C$.superclazz.prototype.show$.apply(this, []);
if (toFocus != null  && time != null   && this.isFocusable$()  && this.isEnabled$()  && !this.isModalBlocked$() ) {
}if (this.isModalBlocked$()) {
this.modalBlocker.toFront$();
}for (var i=0; i < this.ownedWindowList.size$(); i++) {
var child=this.ownedWindowList.elementAt$I(i);
if ((child != null ) && child.showWithParent ) {
child.show$();
child.showWithParent=false;
}}
$I$(5).updateChildFocusableWindowState$java_awt_Window(this);
this.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, this, this.parent, 4, $I$(4).enabledOnToolkit$J(32768));
if (this.componentListener != null  || (this.eventMask & 1) != 0  || $I$(4).enabledOnToolkit$J(1) ) {
var e=Clazz.new_($I$(6).c$$java_awt_Component$I,[this, 102]);
$I$(4).getEventQueue$().postEvent$java_awt_AWTEvent(e);
}}if (retval && (this.state & 1) == 0 ) {
this.postWindowEvent$I(200);
this.state|=1;
}return retval;
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'show$', function () {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["The dialog component has not been initialized properly"]);
}this.beforeFirstShow=false;
if (!this.isModal$()) {
p$1.conditionalShow$java_awt_Component$Long.apply(this, [null, null]);
} else {
p$1.conditionalShow$java_awt_Component$Long.apply(this, [null, null]);
}});

Clazz.newMeth(C$, 'modalityPushed$', function () {
});

Clazz.newMeth(C$, 'modalityPopped$', function () {
});

Clazz.newMeth(C$, 'interruptBlocking$', function () {
if (this.isModal$()) {
this.disposeImpl$();
} else if (this.windowClosingException != null ) {
this.windowClosingException.fillInStackTrace$();
this.windowClosingException.printStackTrace$();
this.windowClosingException=null;
}});

Clazz.newMeth(C$, 'hideAndDisposePreHandler', function () {
this.isInHide=true;
this.modalHide$();
if (this.modalFilter != null ) {
this.modalFilter.disable$();
}C$.modalDialogs.remove$O(this);
}, p$1);

Clazz.newMeth(C$, 'hideAndDisposeHandler', function () {
this.isInHide=false;
}, p$1);

Clazz.newMeth(C$, 'hide$', function () {
p$1.hideAndDisposePreHandler.apply(this, []);
C$.superclazz.prototype.hide$.apply(this, []);
if (!this.isInDispose) {
p$1.hideAndDisposeHandler.apply(this, []);
}});

Clazz.newMeth(C$, 'doDispose$', function () {
this.isInDispose=true;
C$.superclazz.prototype.doDispose$.apply(this, []);
p$1.hideAndDisposeHandler.apply(this, []);
this.isInDispose=false;
});

Clazz.newMeth(C$, 'toBack$', function () {
C$.superclazz.prototype.toBack$.apply(this, []);
});

Clazz.newMeth(C$, 'isResizable$', function () {
return this.resizable;
});

Clazz.newMeth(C$, 'setResizable$Z', function (resizable) {
var testvalid=false;
{
this.resizable=resizable;
var peer=this.peer;
if (peer != null ) {
peer.setResizable$Z(resizable);
testvalid=true;
}}if (testvalid) {
this.invalidateIfValid$();
}});

Clazz.newMeth(C$, 'setUndecorated$Z', function (undecorated) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (this.isDisplayable$()) {
throw Clazz.new_(Clazz.load('java.awt.IllegalComponentStateException').c$$S,["The dialog is displayable."]);
}this.undecorated=undecorated;
}});

Clazz.newMeth(C$, 'isUndecorated$', function () {
return this.undecorated;
});

Clazz.newMeth(C$, 'paramString$', function () {
var str=C$.superclazz.prototype.paramString$.apply(this, []) + "," + this.modalityType ;
if (this.title != null ) {
str += ",title=" + this.title;
}return str;
});

Clazz.newMeth(C$, 'modalShow$', function () {
});

Clazz.newMeth(C$, 'modalHide$', function () {
var save=Clazz.new_($I$(1));
var blockedWindowsCount=this.blockedWindows.size$();
for (var i=0; i < blockedWindowsCount; i++) {
var w=this.blockedWindows.get$I(0);
save.add$TE(w);
this.unblockWindow$java_awt_Window(w);
}
for (var i=0; i < blockedWindowsCount; i++) {
var w=save.get$I(i);
if ((Clazz.instanceOf(w, "java.awt.JSDialog")) && (w).isModal_NoClientCode$() ) {
var d=w;
d.modalShow$();
} else {
C$.checkShouldBeBlocked$java_awt_Window(w);
}}
});

Clazz.newMeth(C$, 'shouldBlock$java_awt_Window', function (w) {
if (!this.isVisible_NoClientCode$() || (!w.isVisible_NoClientCode$() && !w.isInShow ) || this.isInHide || (w === this ) || !this.isModal_NoClientCode$()  ) {
return false;
}if ((Clazz.instanceOf(w, "java.awt.JSDialog")) && (w).isInHide ) {
return false;
}var blockerToCheck=this;
while (blockerToCheck != null ){
var c=w;
while ((c != null ) && (c !== blockerToCheck ) ){
c=c.getParent_NoClientCode$();
}
if (c === blockerToCheck ) {
return false;
}blockerToCheck=blockerToCheck.getModalBlocker$();
}
switch (this.modalityType) {
case $I$(3).MODELESS:
return false;
case $I$(3).DOCUMENT_MODAL:
if (w.isModalExcluded$java_awt_Dialog_ModalExclusionType($I$(7).APPLICATION_EXCLUDE)) {
var c=this;
while ((c != null ) && (c !== w ) ){
c=c.getParent_NoClientCode$();
}
return c === w ;
} else {
return this.getDocumentRoot$() === w.getDocumentRoot$() ;
}case $I$(3).APPLICATION_MODAL:
return !w.isModalExcluded$java_awt_Dialog_ModalExclusionType($I$(7).APPLICATION_EXCLUDE) && (this.appContext === w.appContext ) ;
case $I$(3).TOOLKIT_MODAL:
return !w.isModalExcluded$java_awt_Dialog_ModalExclusionType($I$(7).TOOLKIT_EXCLUDE);
}
return false;
});

Clazz.newMeth(C$, 'blockWindow$java_awt_Window', function (w) {
if (!w.isModalBlocked$()) {
w.setModalBlocked$java_awt_JSDialog$Z$Z(this, true, true);
this.blockedWindows.add$TE(w);
}});

Clazz.newMeth(C$, 'blockWindows$java_util_List', function (toBlock) {
var dpeer=this.peer;
if (dpeer == null ) {
return;
}var it=toBlock.iterator$();
while (it.hasNext$()){
var w=it.next$();
if (!w.isModalBlocked$()) {
w.setModalBlocked$java_awt_JSDialog$Z$Z(this, true, false);
} else {
it.remove$();
}}
dpeer.blockWindows$java_util_List(toBlock);
this.blockedWindows.addAll$java_util_Collection(toBlock);
});

Clazz.newMeth(C$, 'unblockWindow$java_awt_Window', function (w) {
if (w.isModalBlocked$() && this.blockedWindows.contains$O(w) ) {
this.blockedWindows.remove$O(w);
w.setModalBlocked$java_awt_JSDialog$Z$Z(this, false, true);
}});

Clazz.newMeth(C$, 'checkShouldBeBlocked$java_awt_Window', function (w) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(w.getTreeLock$());
{
for (var i=0; i < C$.modalDialogs.size$(); i++) {
var modalDialog=C$.modalDialogs.get$I(i);
if (modalDialog.shouldBlock$java_awt_Window(w)) {
modalDialog.blockWindow$java_awt_Window(w);
break;
}}
}}, 1);

Clazz.newMeth(C$, 'checkModalityPermission$java_awt_Dialog_ModalityType', function (mt) {
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
