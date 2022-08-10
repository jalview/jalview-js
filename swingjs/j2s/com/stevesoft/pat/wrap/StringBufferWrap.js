(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.StringWrap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringBufferWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['sb','StringBuffer']]]

Clazz.newMeth(C$, 'append$C',  function (c) {
this.sb.append$C(c);
});

Clazz.newMeth(C$, 'append$S',  function (s) {
this.sb.append$S(s);
});

Clazz.newMeth(C$, 'length$',  function () {
return this.sb.length$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.sb.toString();
});

Clazz.newMeth(C$, 'toStringLike$',  function () {
return Clazz.new_([this.sb.toString()],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'unwrap$',  function () {
return this.sb;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
