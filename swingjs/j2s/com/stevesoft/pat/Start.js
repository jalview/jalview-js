(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Start", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['retIsStart']]]

Clazz.newMeth(C$, 'c$$Z',  function (b) {
Clazz.super_(C$, this);
this.retIsStart=b;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (this.retIsStart && pt.mFlag && pos > 0   && pt.src.charAt$I(pos - 1) == "\n" ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}if (pos == 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}return -1;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.retIsStart) {
return "^" + this.nextString$();
} else {
return "\\A" + this.nextString$();
}});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$Z,[this.retIsStart]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
