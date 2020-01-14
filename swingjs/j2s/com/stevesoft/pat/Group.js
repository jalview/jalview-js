(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Group", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.op='\0';
this.cl='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$C$C', function (opi, cli) {
Clazz.super_(C$, this,1);
this.op=opi;
this.cl=cli;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var i;
var count=1;
if (pos < pt.src.length$()) {
if (!this.Masked$I$com_stevesoft_pat_Pthings(pos, pt) && pt.src.charAt$I(pos) != this.op ) {
return -1;
}}for (i=pos + 1; i < pt.src.length$(); i++) {
var c=pt.src.charAt$I(i);
var b=!this.Masked$I$com_stevesoft_pat_Pthings(i, pt);
if (b && c == "\\" ) {
i++;
} else {
if (b && c == this.cl ) {
count--;
}if (count == 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(i + 1, pt);
}if (b && c == this.op ) {
count++;
}}}
return -1;
});

Clazz.newMeth(C$, 'toString', function () {
return "(?@" + this.op + this.cl + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1).c$$I,[2]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C$C,[this.op, this.cl]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
