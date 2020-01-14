(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.oneChar','com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Range", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lo='\0';
this.hi='\0';
this.altlo='\0';
this.althi='\0';
this.printBrackets=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.printBrackets=false;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var s=P$.Pattern.protect$S$S$C("" + this.lo, "[]{}(),$,-\"^.", "\\") + "-" + P$.Pattern.protect$S$S$C("" + this.hi, "[]{}(),$,-\"^.", "\\") ;
if (!this.printBrackets) {
return s;
}return "[" + s + "]" ;
});

Clazz.newMeth(C$, 'c$$C$C', function (loi, hii) {
Clazz.super_(C$, this,1);
this.lo=loi;
this.hi=hii;
var o=null;
if (this.lo >= this.hi) {
$I$(1).endItAll$S("Badly formed []'s : " + this.lo + " >= " + this.hi );
}o=Clazz.new_($I$(2).c$$C,[this.lo]);
this.altlo=o.altc;
o=Clazz.new_($I$(2).c$$C,[this.hi]);
this.althi=o.altc;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos >= pt.src.length$()) {
return -1;
}if (this.Masked$I$com_stevesoft_pat_Pthings(pos, pt)) {
return -1;
}var c=pt.src.charAt$I(pos);
if (this.lo <= c && c <= this.hi  || (pt.ignoreCase && (this.altlo <= c && c <= this.althi ) ) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(3).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(3).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
