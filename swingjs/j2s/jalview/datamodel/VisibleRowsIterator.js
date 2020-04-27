(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VisibleRowsIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['last','current','next'],'O',['hidden','jalview.datamodel.HiddenSequences','al','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_AlignmentI', function (firstrow, lastrow, alignment) {
;C$.$init$.apply(this);
this.al=alignment;
this.current=firstrow;
this.last=lastrow;
this.hidden=this.al.getHiddenSequences$();
while (this.last > this.current && this.hidden.isHidden$I(this.last) ){
this.last--;
}
this.current=firstrow;
while (this.current < this.last && this.hidden.isHidden$I(this.current) ){
this.current++;
}
this.next=this.current;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next <= this.last;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.next > this.last) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}this.current=this.next;
do {
this.next++;
} while (this.next <= this.last && this.hidden.isHidden$I(this.next) );
return new Integer(this.current);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
