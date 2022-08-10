(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.done=false;
},1);

C$.$fields$=[['Z',['done'],'I',['pos','epos'],'O',['sb','StringBuffer','next','com.stevesoft.pat.RBuffer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$StringBuffer',  function (sb) {
;C$.$init$.apply(this);
this.sb=sb;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "sb=" + this.sb.toString().replace$C$C("\n", " ") + " pos=" + this.pos + " epos=" + this.epos + " sb.length()=" + this.sb.length$() + "\n" + this.sp$I(this.pos + 3) + "^" + this.sp$I(this.epos - this.pos - 1 ) + "^" ;
});

Clazz.newMeth(C$, 'sp$I',  function (n) {
if (n <= 0) {
return "";
}var sb=Clazz.new_($I$(1,1).c$$I,[n]);
for (var i=0; i < n; i++) {
sb.append$C(" ");
}
return sb.toString();
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
