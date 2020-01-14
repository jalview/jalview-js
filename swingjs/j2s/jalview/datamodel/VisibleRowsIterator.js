(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "VisibleRowsIterator", null, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.last=0;
this.current=0;
this.next=0;
this.hidden=null;
this.al=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_AlignmentI', function (firstrow, lastrow, alignment) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
