(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Backup", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bk']]]

Clazz.newMeth(C$, 'c$$I',  function (ii) {
Clazz.super_(C$, this);
this.bk=ii;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "(?" + (this.bk < 0 ? ">" + (-this.bk) : "<" + this.bk) + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pos < this.bk) {
return -1;
}return this.nextMatch$I$com_stevesoft_pat_Pthings(pos - this.bk, pt);
});

Clazz.newMeth(C$, 'minChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[-this.bk]);
});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[-this.bk]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$I,[this.bk]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
