(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'com.stevesoft.pat.wrap.StringBufferWrap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.s;
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
return this.s.charAt$I(i);
});

Clazz.newMeth(C$, 'length$', function () {
return this.s.length$();
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
return this.s.substring$I$I(i1, i2);
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.s;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
return this.s.indexOf$I(c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
