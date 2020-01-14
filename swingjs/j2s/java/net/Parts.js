(function(){var P$=Clazz.newPackage("java.net"),I$=[];
var C$=Clazz.newClass(P$, "Parts");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.path=null;
this.query=null;
this.ref=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (file) {
C$.$init$.apply(this);
var ind=file.indexOf$I("#");
this.ref=ind < 0 ? null : file.substring$I(ind + 1);
file=ind < 0 ? file : file.substring$I$I(0, ind);
var q=file.lastIndexOf$I("?");
if (q != -1) {
this.query=file.substring$I(q + 1);
this.path=file.substring$I$I(0, q);
} else {
this.path=file;
}}, 1);

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'getQuery$', function () {
return this.query;
});

Clazz.newMeth(C$, 'getRef$', function () {
return this.ref;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
