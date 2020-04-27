(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BackMatch", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id']]]

Clazz.newMeth(C$, 'c$$I', function (id) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
