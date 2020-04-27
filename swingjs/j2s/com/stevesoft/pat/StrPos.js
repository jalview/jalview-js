(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInf','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StrPos");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.esc="\\";
},1);

C$.$fields$=[['Z',['dontMatch','eos'],'C',['esc','c'],'I',['pos'],'S',['s']]]

Clazz.newMeth(C$, 'pos$', function () {
return this.pos;
});

Clazz.newMeth(C$, 'thisChar$', function () {
return this.c;
});

Clazz.newMeth(C$, 'eos$', function () {
return this.eos;
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_StrPos', function (sp) {
;C$.$init$.apply(this);
this.dup$com_stevesoft_pat_StrPos(sp);
}, 1);

Clazz.newMeth(C$, 'dup$com_stevesoft_pat_StrPos', function (sp) {
this.s=sp.s;
this.pos=sp.pos;
this.c=sp.c;
this.dontMatch=sp.dontMatch;
this.eos=sp.eos;
});

Clazz.newMeth(C$, 'c$$S$I', function (s, pos) {
;C$.$init$.apply(this);
this.s=s;
this.pos=pos - 1;
this.inc$();
}, 1);

Clazz.newMeth(C$, 'inc$', function () {
this.pos++;
if (this.pos >= this.s.length$()) {
this.eos=true;
return this;
}this.eos=false;
this.c=this.s.charAt$I(this.pos);
if (this.c == this.esc && this.pos + 1 < this.s.length$() ) {
this.pos++;
this.c=this.s.charAt$I(this.pos);
if (this.c != this.esc) {
this.dontMatch=true;
} else {
this.dontMatch=false;
}} else {
this.dontMatch=false;
}return this;
});

Clazz.newMeth(C$, 'match$C', function (ch) {
if (this.dontMatch || this.eos ) {
return false;
}return this.c == ch;
});

Clazz.newMeth(C$, 'escMatch$C', function (ch) {
if (!this.dontMatch || this.eos ) {
return false;
}return this.c == ch;
});

Clazz.newMeth(C$, 'escaped$', function () {
return this.dontMatch;
});

Clazz.newMeth(C$, 'incMatch$S', function (st) {
var sp=Clazz.new_(C$.c$$com_stevesoft_pat_StrPos,[this]);
var i;
for (i=0; i < st.length$(); i++) {
if (!sp.match$C(st.charAt$I(i))) {
return false;
}sp.inc$();
}
this.dup$com_stevesoft_pat_StrPos(sp);
return true;
});

Clazz.newMeth(C$, 'getPatInt$', function () {
if (this.incMatch$S("inf")) {
return Clazz.new_($I$(1,1));
}var i;
var cnt=0;
var sp=Clazz.new_(C$.c$$com_stevesoft_pat_StrPos,[this]);
for (i=0; !sp.eos && sp.c >= "0"  && sp.c <= "9" ; i++) {
cnt=10 * cnt + sp.c.$c() - 48;
sp.inc$();
}
if (i == 0) {
return null;
}this.dup$com_stevesoft_pat_StrPos(sp);
return Clazz.new_($I$(2,1).c$$I,[cnt]);
});

Clazz.newMeth(C$, 'getString$', function () {
return this.s;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
