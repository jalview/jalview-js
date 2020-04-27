(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'com.stevesoft.pat.wrap.StringBufferWrap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
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
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
return this.s.indexOf$I(c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
