(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.CharArrayBufferWrap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CharArrayWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ca=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCharArray$', function () {
return this.ca;
});

Clazz.newMeth(C$, 'c$$CA', function (ca) {
C$.$init$.apply(this);
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
var sb=Clazz.new_($I$(1));
for (var i=i1; i < i2; i++) {
sb.append$C(this.ca[i]);
}
return sb.toString();
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.ca;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(2));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
