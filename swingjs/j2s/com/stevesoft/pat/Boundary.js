(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Boundary", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString',  function () {
return "\\b" + this.nextString$();
});

Clazz.newMeth(C$, 'isAChar$C',  function (c) {
if (c >= "a" && c <= "z" ) {
return true;
}if (c >= "A" && c <= "Z" ) {
return true;
}if (c >= "0" && c <= "9" ) {
return true;
}if (c == "_") {
return true;
}return false;
});

Clazz.newMeth(C$, 'matchLeft$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pos <= 0) {
return true;
}if (this.isAChar$C(pt.src.charAt$I(pos)) && this.isAChar$C(pt.src.charAt$I(pos - 1)) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'matchRight$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pos < 0) {
return false;
}if (pos + 1 >= pt.src.length$()) {
return true;
}if (this.isAChar$C(pt.src.charAt$I(pos)) && this.isAChar$C(pt.src.charAt$I(pos + 1)) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (this.matchRight$I$com_stevesoft_pat_Pthings(pos - 1, pt) || this.matchLeft$I$com_stevesoft_pat_Pthings(pos, pt) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}return -1;
});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
