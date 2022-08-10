(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Group", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['op','cl']]]

Clazz.newMeth(C$, 'c$$C$C',  function (opi, cli) {
Clazz.super_(C$, this);
this.op=opi;
this.cl=cli;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
var i;
var count=1;
if (pos < pt.src.length$()) {
if (!this.Masked$I$com_stevesoft_pat_Pthings(pos, pt) && pt.src.charAt$I(pos) != this.op ) {
return -1;
}}for (i=pos + 1; i < pt.src.length$(); i++) {
var c=pt.src.charAt$I(i);
var b=!this.Masked$I$com_stevesoft_pat_Pthings(i, pt);
if (b && c == "\\" ) {
++i;
} else {
if (b && c == this.cl ) {
--count;
}if (count == 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(i + 1, pt);
}if (b && c == this.op ) {
++count;
}}}
return -1;
});

Clazz.newMeth(C$, 'toString',  function () {
return "(?@" + this.op + this.cl + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'minChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[2]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$C$C,[this.op, this.cl]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
