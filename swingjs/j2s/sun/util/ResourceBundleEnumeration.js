(function(){var P$=Clazz.newPackage("sun.util"),I$=[];
var C$=Clazz.newClass(P$, "ResourceBundleEnumeration", null, null, 'java.util.Enumeration');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.set=null;
this.iterator=null;
this.enumeration=null;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set$java_util_Enumeration', function (set, enumeration) {
C$.$init$.apply(this);
this.set=set;
this.iterator=set.iterator$();
this.enumeration=enumeration;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
if (this.next == null ) {
if (this.iterator.hasNext$()) {
this.next=this.iterator.next$();
} else if (this.enumeration != null ) {
while (this.next == null  && this.enumeration.hasMoreElements$() ){
this.next=this.enumeration.nextElement$();
if (this.set.contains$O(this.next)) {
this.next=null;
}}
}}return this.next != null ;
});

Clazz.newMeth(C$, 'nextElement$', function () {
if (this.hasMoreElements$()) {
var result=this.next;
this.next=null;
return result;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
