(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PartialBuffer", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowOverRun=true;
this.overRun=false;
},1);

C$.$fields$=[['Z',['allowOverRun','overRun'],'I',['off'],'O',['sb','StringBuffer']]]

Clazz.newMeth(C$, 'c$$StringBuffer',  function (sb) {
;C$.$init$.apply(this);
this.sb=sb;
}, 1);

Clazz.newMeth(C$, 'charAt$I',  function (n) {
n+=this.off;
if (n == this.sb.length$()) {
this.overRun=true;
return String.fromCharCode(0);
}return this.sb.charAt$I(n);
});

Clazz.newMeth(C$, 'length$',  function () {
return this.allowOverRun ? this.sb.length$() + 1 : this.sb.length$();
});

Clazz.newMeth(C$, 'indexOf$C',  function (c) {
for (var i=0; i < this.sb.length$(); i++) {
if (this.sb.charAt$I(i) == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'unwrap$',  function () {
return this.sb;
});

Clazz.newMeth(C$, 'substring$I$I',  function (i1, i2) {
var sb=Clazz.new_($I$(1,1).c$$I,[i2 - i1]);
for (var i=i1; i < i2; i++) {
sb.append$C(this.charAt$I(i));
}
return sb.toString();
});

Clazz.newMeth(C$, 'newStringBufferLike$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
