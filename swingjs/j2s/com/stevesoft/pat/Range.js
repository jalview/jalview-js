(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Pattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.oneChar','com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Range", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.printBrackets=false;
},1);

C$.$fields$=[['Z',['printBrackets'],'C',['lo','hi','altlo','althi']]]

Clazz.newMeth(C$, 'toString',  function () {
var s=$I$(1,"protect$S$S$C",["" + this.lo, "[]{}(),$,-\"^.", "\\"]) + "-" + $I$(1,"protect$S$S$C",["" + this.hi, "[]{}(),$,-\"^.", "\\"]) ;
if (!this.printBrackets) {
return s;
}return "[" + s + "]" ;
});

Clazz.newMeth(C$, 'c$$C$C',  function (loi, hii) {
Clazz.super_(C$, this);
this.lo=loi;
this.hi=hii;
var o=null;
if (this.lo >= this.hi) {
$I$(2,"endItAll$S",["Badly formed []'s : " + this.lo + " >= " + this.hi ]);
}o=Clazz.new_($I$(3,1).c$$C,[this.lo]);
this.altlo=o.altc;
o=Clazz.new_($I$(3,1).c$$C,[this.hi]);
this.althi=o.altc;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pos >= pt.src.length$()) {
return -1;
}if (this.Masked$I$com_stevesoft_pat_Pthings(pos, pt)) {
return -1;
}var c=pt.src.charAt$I(pos);
if (this.lo <= c && c <= this.hi  || (pt.ignoreCase && (this.altlo <= c && c <= this.althi ) ) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$',  function () {
return Clazz.new_($I$(4,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(4,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
try {
var r=Clazz.new_(C$.c$$C$C,[this.lo, this.hi]);
r.printBrackets=this.printBrackets;
return r;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
