(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "RangeElementsIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nextRange=null;
},1);

C$.$fields$=[['I',['last','current','next'],'O',['rangeIterator','java.util.Iterator','nextRange','int[]']]]

Clazz.newMeth(C$, 'c$$java_util_Iterator',  function (it) {
;C$.$init$.apply(this);
this.rangeIterator=it;
if (this.rangeIterator.hasNext$()) {
this.nextRange=this.rangeIterator.next$();
this.next=this.nextRange[0];
this.last=this.nextRange[1];
}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.rangeIterator.hasNext$() || this.next <= this.last ;
});

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}this.current=this.next;
++this.next;
p$1.checkNextRange.apply(this, []);
return Integer.valueOf$I(this.current);
});

Clazz.newMeth(C$, 'checkNextRange',  function () {
if (this.nextRange != null  && this.next > this.nextRange[1] ) {
if (this.rangeIterator.hasNext$()) {
this.nextRange=this.rangeIterator.next$();
this.next=this.nextRange[0];
this.last=this.nextRange[1];
} else {
this.nextRange=null;
}}}, p$1);

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
