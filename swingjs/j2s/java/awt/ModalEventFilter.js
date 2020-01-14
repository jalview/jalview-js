(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.Dialog','.ModalExclusionType'],['java.awt.EventFilter','.FilterAction'],['java.awt.Dialog','.ModalityType'],['java.awt.ModalEventFilter','.DocumentModalEventFilter'],['java.awt.ModalEventFilter','.ApplicationModalEventFilter'],['java.awt.ModalEventFilter','.ToolkitModalEventFilter']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModalEventFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.awt.EventFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modalDialog=null;
this.disabled=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog', function (modalDialog) {
C$.$init$.apply(this);
this.modalDialog=modalDialog;
this.disabled=false;
}, 1);

Clazz.newMeth(C$, 'getModalDialog$', function () {
return this.modalDialog;
});

Clazz.newMeth(C$, ['acceptEvent$java_awt_AWTEvent','acceptEvent$'], function (event) {
if (this.disabled || !this.modalDialog.isVisible$() ) {
return $I$(2).ACCEPT;
}var eventID=event.getID$();
if ((eventID >= 500 && eventID <= 507 ) || (eventID >= 1001 && eventID <= 1001 ) || eventID == 201  ) {
var o=event.getSource$();
if (Clazz.instanceOf(o, "sun.awt.ModalExclude")) {
} else if (Clazz.instanceOf(o, "java.awt.Component")) {
var c=o;
while ((c != null ) && !(Clazz.instanceOf(c, "java.awt.Window")) ){
c=c.getParent_NoClientCode$();
}
if (c != null ) {
return this.acceptWindow$java_awt_Window(c);
}}}return $I$(2).ACCEPT;
});

Clazz.newMeth(C$, 'disable$', function () {
this.disabled=true;
});

Clazz.newMeth(C$, 'compareTo$java_awt_ModalEventFilter', function (another) {
var anotherDialog=another.getModalDialog$();
var c=this.modalDialog;
while (c != null ){
if (c === anotherDialog ) {
return 1;
}c=c.getParent_NoClientCode$();
}
c=anotherDialog;
while (c != null ){
if (c === this.modalDialog ) {
return -1;
}c=c.getParent_NoClientCode$();
}
var blocker=(this.modalDialog).getModalBlocker$();
while (blocker != null ){
if (blocker === anotherDialog ) {
return -1;
}blocker=blocker.getModalBlocker$();
}
blocker=anotherDialog.getModalBlocker$();
while (blocker != null ){
if (blocker === this.modalDialog ) {
return 1;
}blocker=blocker.getModalBlocker$();
}
return this.modalDialog.getModalityType$().compareTo$TE(anotherDialog.getModalityType$());
});

Clazz.newMeth(C$, 'createFilterForDialog$java_awt_Dialog', function (modalDialog) {
switch (modalDialog.getModalityType$()) {
case $I$(3).DOCUMENT_MODAL:
return Clazz.new_($I$(4).c$$java_awt_Dialog,[modalDialog]);
case $I$(3).APPLICATION_MODAL:
return Clazz.new_($I$(5).c$$java_awt_Dialog,[modalDialog]);
case $I$(3).TOOLKIT_MODAL:
return Clazz.new_($I$(6).c$$java_awt_Dialog,[modalDialog]);
}
return null;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ModalEventFilter, "ToolkitModalEventFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.ModalEventFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.appContext=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog', function (modalDialog) {
C$.superclazz.c$$java_awt_Dialog.apply(this, [modalDialog]);
C$.$init$.apply(this);
this.appContext=modalDialog.appContext;
}, 1);

Clazz.newMeth(C$, 'acceptWindow$java_awt_Window', function (w) {
if (w.isModalExcluded$java_awt_Dialog_ModalExclusionType($I$(1).TOOLKIT_EXCLUDE)) {
return $I$(2).ACCEPT;
}if (w.appContext !== this.appContext ) {
return $I$(2).REJECT;
}while (w != null ){
if (w === this.modalDialog ) {
return $I$(2).ACCEPT_IMMEDIATELY;
}w=w.getOwner$();
}
return $I$(2).REJECT;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ModalEventFilter, "ApplicationModalEventFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.ModalEventFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.appContext=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog', function (modalDialog) {
C$.superclazz.c$$java_awt_Dialog.apply(this, [modalDialog]);
C$.$init$.apply(this);
this.appContext=modalDialog.appContext;
}, 1);

Clazz.newMeth(C$, 'acceptWindow$java_awt_Window', function (w) {
if (w.isModalExcluded$java_awt_Dialog_ModalExclusionType($I$(1).APPLICATION_EXCLUDE)) {
return $I$(2).ACCEPT;
}if (w.appContext === this.appContext ) {
while (w != null ){
if (w === this.modalDialog ) {
return $I$(2).ACCEPT_IMMEDIATELY;
}w=w.getOwner$();
}
return $I$(2).REJECT;
}return $I$(2).ACCEPT;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ModalEventFilter, "DocumentModalEventFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.ModalEventFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.documentRoot=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog', function (modalDialog) {
C$.superclazz.c$$java_awt_Dialog.apply(this, [modalDialog]);
C$.$init$.apply(this);
this.documentRoot=modalDialog.getDocumentRoot$();
}, 1);

Clazz.newMeth(C$, 'acceptWindow$java_awt_Window', function (w) {
if (w.isModalExcluded$java_awt_Dialog_ModalExclusionType($I$(1).APPLICATION_EXCLUDE)) {
var w1=this.modalDialog.getOwner$();
while (w1 != null ){
if (w1 === w ) {
return $I$(2).REJECT;
}w1=w1.getOwner$();
}
return $I$(2).ACCEPT;
}while (w != null ){
if (w === this.modalDialog ) {
return $I$(2).ACCEPT_IMMEDIATELY;
}if (w === this.documentRoot ) {
return $I$(2).REJECT;
}w=w.getOwner$();
}
return $I$(2).ACCEPT;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:24 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
