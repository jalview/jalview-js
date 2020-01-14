(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.MediaEntry','java.awt.ImageMediaEntry']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MediaTracker", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.target=null;
this.head=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component', function (comp) {
C$.$init$.apply(this);
this.target=comp;
}, 1);

Clazz.newMeth(C$, 'addImage$java_awt_Image$I', function (image, id) {
this.addImage$java_awt_Image$I$I$I(image, id, -1, -1);
});

Clazz.newMeth(C$, 'addImage$java_awt_Image$I$I$I', function (image, id, w, h) {
this.head=$I$(1).insert$java_awt_MediaEntry$java_awt_MediaEntry(this.head, Clazz.new_($I$(2).c$$java_awt_MediaTracker$java_awt_Image$I$I$I,[this, image, id, w, h]));
});

Clazz.newMeth(C$, 'checkAll$', function () {
return p$1.checkAll$Z$Z.apply(this, [false, true]);
});

Clazz.newMeth(C$, 'checkAll$Z', function (load) {
return p$1.checkAll$Z$Z.apply(this, [load, true]);
});

Clazz.newMeth(C$, 'checkAll$Z$Z', function (load, verify) {
var cur=this.head;
var done=true;
while (cur != null ){
if ((cur.getStatus$Z$Z(load, verify) & 14) == 0) {
done=false;
}cur=cur.next;
}
return done;
}, p$1);

Clazz.newMeth(C$, 'isErrorAny$', function () {
return false;
});

Clazz.newMeth(C$, 'getErrorsAny$', function () {
return null;
});

Clazz.newMeth(C$, 'waitForAll$', function () {
return;
});

Clazz.newMeth(C$, 'waitForAll$J', function (ms) {
return true;
});

Clazz.newMeth(C$, 'statusAll$Z', function (load) {
return 8;
});

Clazz.newMeth(C$, 'checkID$I', function (id) {
return true;
});

Clazz.newMeth(C$, 'checkID$I$Z', function (id, load) {
return true;
});

Clazz.newMeth(C$, 'isErrorID$I', function (id) {
return false;
});

Clazz.newMeth(C$, 'getErrorsID$I', function (id) {
return null;
});

Clazz.newMeth(C$, 'waitForID$I', function (id) {
return;
});

Clazz.newMeth(C$, 'waitForID$I$J', function (id, ms) {
return true;
});

Clazz.newMeth(C$, 'statusID$I$Z', function (id, load) {
return 8;
});

Clazz.newMeth(C$, 'removeImage$java_awt_Image', function (image) {
});

Clazz.newMeth(C$, 'removeImage$java_awt_Image$I', function (image, id) {
});

Clazz.newMeth(C$, 'removeImage$java_awt_Image$I$I$I', function (image, id, width, height) {
var cur=this.head;
var prev=null;
while (cur != null ){
var next=cur.next;
if (cur.getID$() == id && Clazz.instanceOf(cur, "java.awt.ImageMediaEntry")  && (cur).matches$java_awt_Image$I$I(image, width, height) ) {
if (prev == null ) {
this.head=next;
} else {
prev.next=next;
}cur.cancel$();
} else {
prev=cur;
}cur=next;
}
});

Clazz.newMeth(C$, 'setDone$', function () {
return;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:23 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
