(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Couple");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['first','<T>','second','<U>']]]

Clazz.newMeth(C$, 'c$$O$O', function (a, b) {
;C$.$init$.apply(this);
this.first=a;
this.second=b;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (c) {
if (!(Clazz.instanceOf(c, "fr.orsay.lri.varna.applications.templateEditor.Couple"))) {
return false;
}var cc=c;
return (cc.first.equals$O(this.first) && (cc.second.equals$O(this.second)) );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return 1000003 * this.first.hashCode$() + this.second.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return "(" + this.first + "," + this.second + ")" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
