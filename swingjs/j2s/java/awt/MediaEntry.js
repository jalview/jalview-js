(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MediaEntry");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['cancelled'],'I',['ID','status'],'O',['tracker','java.awt.MediaTracker','next','java.awt.MediaEntry']]]

Clazz.newMeth(C$, 'c$$java_awt_MediaTracker$I', function (mt, id) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
