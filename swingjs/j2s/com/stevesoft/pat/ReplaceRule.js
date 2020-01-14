(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Hashtable','com.stevesoft.pat.RuleHolder','com.stevesoft.pat.Regex','com.stevesoft.pat.StringRule','com.stevesoft.pat.BackRefRule','com.stevesoft.pat.CodeRule','com.stevesoft.pat.AmpersandRule','com.stevesoft.pat.LeftRule','com.stevesoft.pat.RightRule','com.stevesoft.pat.WantMoreTextReplaceRule','com.stevesoft.pat.PopRule','com.stevesoft.pat.PushRule','com.stevesoft.pat.ChangeRule','com.stevesoft.pat.Ctrl','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ReplaceRule");
C$.getvar=null;
C$.defs=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.getvar=null;
C$.defs=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next=null;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
this.name=this.getClass$().getName$();
}, 1);

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_($I$(2).c$$com_stevesoft_pat_ReplaceRule,[this]);
});

Clazz.newMeth(C$, 'clone$', function () {
var x=this.clone1$();
var xsav=x;
var y=this;
while (y.next != null ){
x.next=y.next.clone1$();
x.name=y.name;
x=x.next;
y=y.next;
}
return xsav;
});

Clazz.newMeth(C$, 'add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule', function (head, adding) {
if (head == null ) {
return head=adding;
}head.addRule$com_stevesoft_pat_ReplaceRule(adding);
return head;
}, 1);

Clazz.newMeth(C$, 'add$com_stevesoft_pat_ReplaceRule', function (adding) {
return C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(this, adding);
});

Clazz.newMeth(C$, 'addRule$com_stevesoft_pat_ReplaceRule', function (r) {
if (this.next == null ) {
this.next=r;
} else {
this.next.addRule$com_stevesoft_pat_ReplaceRule(r);
}});

Clazz.newMeth(C$, 'getv$', function () {
if (C$.getvar != null ) {
return C$.getvar.clone$();
}C$.getvar=Clazz.new_($I$(3).c$$S,["(?:\\\\(\\d+)|\\$(?:(\\d+)|(\\w+)|([&\'`])|\\{(?:(\\d+)|([^\n}\\\\]+))})|\\\\([nrbtaef])|\\\\c([\u0000-\uffff])|\\\\x([A-Fa-f0-9]{2})|\\\\([\u0000-\uffff]))"]);
C$.getvar.optimize$();
return C$.getvar;
}, 1);

Clazz.newMeth(C$, 'perlCode$S', function (s) {
try {
var mf=0;
var mt=0;
var gv=C$.getv$();
var head=null;
var tmp=null;
while (gv.searchFrom$S$I(s, mt)){
var off=$I$(3).BackRefOffset - 1;
mf=gv.matchedFrom$();
if (mf > mt) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,[s.substring$I$I(mt, mf)]));
}var $var=null;
if (($var=gv.stringMatched$I(1 + off)) != null  || ($var=gv.stringMatched$I(2 + off)) != null   || ($var=gv.stringMatched$I(5 + off)) != null  ) {
var d=0;
for (var i=0; i < $var.length$(); i++) {
d=8 * d + (($var.charCodeAt$I(i)) - 48);
}
if ($var.length$() == 1) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(5).c$$I,[d]));
} else {
head=Clazz.new_($I$(4).c$$S,["" + String.fromCharCode(d)]);
}} else if (($var=gv.stringMatched$I(10 + off)) != null ) {
if ("QELlUu".indexOf$S($var) >= 0) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(6).c$$C,[$var.charAt$I(0)]));
} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,[$var]));
}} else if (($var=gv.stringMatched$I(3 + off)) != null  || ($var=gv.stringMatched$I(4 + off)) != null   || ($var=gv.stringMatched$I(6 + off)) != null  ) {
var arg="";
var pc;
if ((pc=$var.indexOf$I(":")) > 0) {
arg=$var.substring$I(pc + 1);
$var=$var.substring$I$I(0, pc);
}if ($var.equals$O("&") || $var.equals$O("MATCH") ) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(7)));
} else if ($var.equals$O("`") || $var.equals$O("PREMATCH") ) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(8)));
} else if ($var.equals$O("\'") || $var.equals$O("POSTMATCH") ) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(9)));
} else if ($var.equals$O("WANT_MORE_TEXT")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(10)));
} else if ($var.equals$O("POP")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(11)));
} else if ($var.startsWith$S("+") && (tmp=C$.defs.get$O($var.substring$I(1))) != null  ) {
if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Regex")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(12).c$$S$com_stevesoft_pat_Regex,[$var.substring$I(1), tmp]));
} else if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Transformer")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(12).c$$S$com_stevesoft_pat_Transformer,[$var.substring$I(1), tmp]));
} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["${" + $var + "}" ]));
}} else if ($var.startsWith$S("=") && (tmp=C$.defs.get$O($var.substring$I(1))) != null  ) {
if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Regex")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(13).c$$S$com_stevesoft_pat_Regex,[$var.substring$I(1), tmp]));
} else if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Transformer")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(13).c$$S$com_stevesoft_pat_Transformer,[$var.substring$I(1), tmp]));
} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["${" + $var + "}" ]));
}} else if ((tmp=C$.defs.get$O($var)) != null ) {
if (Clazz.instanceOf(tmp, "com.stevesoft.pat.ReplaceRule")) {
var alt=(tmp).arg$S(arg);
if (alt == null ) {
alt=(tmp);
}head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, (alt.clone$()));
}} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["${" + $var + "}" ]));
}} else if (($var=gv.stringMatched$I(7 + off)) != null ) {
var c=$var.charAt$I(0);
if (c == "n") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\n"]));
} else if (c == "t") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\t"]));
} else if (c == "r") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\r"]));
} else if (c == "b") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\r"]));
} else if (c == "a") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\u0007"]));
} else if (c == "e") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\u001b"]));
} else if (c == "f") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["\f"]));
}} else if (($var=gv.stringMatched$I(8 + off)) != null ) {
var c=$var.charAt$I(0);
if (c.$c() < $I$(14).cmap.length ) {
c=$I$(14).cmap[c.$c()];
}head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["" + c]));
} else if (($var=gv.stringMatched$I(9 + off)) != null ) {
var d=16 * C$.getHexDigit$C($var.charAt$I(0)) + C$.getHexDigit$C($var.charAt$I(1));
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,["" + String.fromCharCode(d)]));
}mt=gv.matchedTo$();
}
if (mt <= s.length$()) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4).c$$S,[s.substring$I(mt)]));
}return head;
} finally {
}
}, 1);

Clazz.newMeth(C$, 'isDefined$S', function (s) {
return C$.defs.get$O(s) != null ;
}, 1);

Clazz.newMeth(C$, 'define$S$com_stevesoft_pat_Regex', function (s, r) {
C$.defs.put$TK$TV(s, r);
}, 1);

Clazz.newMeth(C$, 'define$S$com_stevesoft_pat_ReplaceRule', function (s, r) {
C$.defs.put$TK$TV(s, r);
r.name=s;
}, 1);

Clazz.newMeth(C$, 'define$S$com_stevesoft_pat_Transformer', function (s, t) {
C$.defs.put$TK$TV(s, t);
}, 1);

Clazz.newMeth(C$, 'undefine$S', function (s) {
C$.defs.remove$O(s);
}, 1);

Clazz.newMeth(C$, 'toString1$', function () {
return "${" + this.name + "}" ;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(15));
sb.append$S(this.toString1$());
var rr=this.next;
while (rr != null ){
sb.append$S(rr.toString1$());
rr=rr.next;
}
return sb.toString();
});

Clazz.newMeth(C$, 'arg$S', function (s) {
return null;
});

Clazz.newMeth(C$, 'getHexDigit$C', function (c) {
if (c >= "0" && c <= "9" ) {
return c.$c() - 48;
}if (c >= "a" && c <= "f" ) {
return c.$c() - 97 + 10;
}return c.$c() - 65 + 10;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
