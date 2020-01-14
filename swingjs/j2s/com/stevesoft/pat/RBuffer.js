(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RBuffer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.done=false;
this.sb=null;
this.pos=0;
this.epos=0;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.done=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$StringBuffer', function (sb) {
C$.$init$.apply(this);
this.sb=sb;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "sb=" + this.sb.toString().replace$C$C("\n", " ") + " pos=" + this.pos + " epos=" + this.epos + " sb.length()=" + this.sb.length$() + "\n" + this.sp$I(this.pos + 3) + "^" + this.sp$I(this.epos - this.pos - 1 ) + "^" ;
});

Clazz.newMeth(C$, 'sp$I', function (n) {
if (n <= 0) {
return "";
}var sb=Clazz.new_($I$(1).c$$I,[n]);
for (var i=0; i < n; i++) {
sb.append$C(" ");
}
return sb.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
