(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "End", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['retIsEnd']]]

Clazz.newMeth(C$, 'c$$Z',  function (b) {
Clazz.super_(C$, this);
this.retIsEnd=b;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (this.retIsEnd && pt.mFlag && pos < pt.src.length$()  ) {
if (pt.src.charAt$I(pos) == "\n") {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}}if (pt.src.length$() == pos) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
} else if (pos < pt.src.length$()) {
pt.src.charAt$I(pos);
}return -1;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.retIsEnd) {
return "$";
} else {
return "\\Z";
}});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$Z,[this.retIsEnd]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
