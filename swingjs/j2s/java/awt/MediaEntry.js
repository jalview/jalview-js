(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
var C$=Clazz.newClass(P$, "MediaEntry");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tracker=null;
this.ID=0;
this.next=null;
this.status=0;
this.cancelled=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_MediaTracker$I', function (mt, id) {
C$.$init$.apply(this);
this.tracker=mt;
this.ID=id;
}, 1);

Clazz.newMeth(C$, 'insert$java_awt_MediaEntry$java_awt_MediaEntry', function (head, me) {
var cur=head;
var prev=null;
while (cur != null ){
if (cur.ID > me.ID) {
break;
}prev=cur;
cur=cur.next;
}
me.next=cur;
if (prev == null ) {
head=me;
} else {
prev.next=me;
}return head;
}, 1);

Clazz.newMeth(C$, 'getID$', function () {
return this.ID;
});

Clazz.newMeth(C$, 'cancel$', function () {
this.cancelled=true;
});

Clazz.newMeth(C$, 'getStatus$Z$Z', function (doLoad, doVerify) {
if (doLoad && ((this.status & 13) == 0) ) {
this.status=(this.status & ~2) | 1;
this.startLoad$();
}return this.status;
});

Clazz.newMeth(C$, 'setStatus$I', function (flag) {
{
this.status=flag;
}this.tracker.setDone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:23 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
