(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "BackMatch", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (id) {
Clazz.super_(C$, this,1);
this.id=id;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "\\" + (this.id) + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, p) {
var i1=p.marks[this.id];
var i2=p.marks[this.id + p.nMarks];
var imax=i2 - i1;
if (i1 < 0 || imax < 0  || pos + imax > p.src.length$() ) {
return -1;
}var ns=p.src.length$() - pos;
if (imax < ns) {
ns=imax;
}for (var i=0; i < ns; i++) {
if (p.src.charAt$I(i + i1) != p.src.charAt$I(pos + i)) {
return -1;
}}
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + imax, p);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$I,[this.id]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
