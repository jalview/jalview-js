(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LIFOQueueEnumerator", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['queue','sun.misc.Queue','cursor','sun.misc.QueueElement']]]

Clazz.newMeth(C$, 'c$$sun_misc_Queue',  function (q) {
;C$.$init$.apply(this);
this.queue=q;
this.cursor=q.head;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return (this.cursor != null );
});

Clazz.newMeth(C$, 'nextElement$',  function () {
{
if (this.cursor != null ) {
var result=this.cursor;
this.cursor=this.cursor.next;
return result.obj;
}}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["LIFOQueueEnumerator"]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:06 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
