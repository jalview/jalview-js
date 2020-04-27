(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.CharArrayBufferWrap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharArrayWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ca','char[]']]]

Clazz.newMeth(C$, 'getCharArray$', function () {
return this.ca;
});

Clazz.newMeth(C$, 'c$$CA', function (ca) {
;C$.$init$.apply(this);
this.ca=ca;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize(this.ca);
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
return this.ca[i];
});

Clazz.newMeth(C$, 'length$', function () {
return this.ca.length;
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
var sb=Clazz.new_($I$(1,1));
for (var i=i1; i < i2; i++) {
sb.append$C(this.ca[i]);
}
return sb.toString();
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.ca;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
for (var i=0; i < this.ca.length; i++) {
if (this.ca[i] == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
