(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer','com.stevesoft.pat.PartialBuffer','com.stevesoft.pat.wrap.WriterWrap','com.stevesoft.pat.StringBufferLike','java.io.StringWriter','com.stevesoft.pat.Regex']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RegexWriter", null, 'java.io.Writer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.repr=null;
this.w=null;
this.ww=null;
this.sb=null;
this.wrap=null;
this.pos=0;
this.epos=0;
this.interval=0;
this.bufferSize=0;
this.EOLchar='\0';
this.max_lines=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1));
this.wrap=Clazz.new_($I$(2).c$$StringBuffer,[this.sb]);
this.interval=128;
this.bufferSize=2048;
this.EOLchar="\n";
this.max_lines=2;
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer$java_io_Writer', function (t, w) {
Clazz.super_(C$, this,1);
this.w=w;
this.ww=Clazz.new_($I$(3).c$$java_io_Writer,[w]);
this.repr=t.getReplacer$();
this.repr.setBuffer$com_stevesoft_pat_StringBufferLike(Clazz.new_($I$(4).c$$com_stevesoft_pat_BasicStringBufferLike,[this.ww]));
this.repr.setSource$com_stevesoft_pat_StringLike(this.wrap);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex$java_io_Writer', function (r, w) {
Clazz.super_(C$, this,1);
this.w=w;
this.ww=Clazz.new_($I$(3).c$$java_io_Writer,[w]);
this.repr=r.getReplacer$();
this.repr.setBuffer$com_stevesoft_pat_StringBufferLike(Clazz.new_($I$(4).c$$com_stevesoft_pat_BasicStringBufferLike,[this.ww]));
this.repr.setSource$com_stevesoft_pat_StringLike(this.wrap);
}, 1);

Clazz.newMeth(C$, 'getEOLchar$', function () {
return this.EOLchar;
});

Clazz.newMeth(C$, 'setEOLchar$C', function (c) {
this.EOLchar=c;
});

Clazz.newMeth(C$, 'getMaxLines$', function () {
return this.max_lines;
});

Clazz.newMeth(C$, 'setMaxLines$I', function (ml) {
this.max_lines=ml;
});

Clazz.newMeth(C$, 'write$', function () {
var rex=this.repr.getRegex$();
var eposOld=this.epos;
if (rex.matchAt$com_stevesoft_pat_StringLike$I(this.wrap, this.epos) && !this.wrap.overRun ) {
while (this.pos < this.epos){
this.w.write$I(this.sb.charAt$I(this.pos++).$c());
}
var to=rex.matchedTo$();
this.repr.setPos$I(to);
this.repr.apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule(rex, rex.getReplaceRule$());
this.epos=this.pos=to;
if (this.epos == eposOld && this.epos < this.sb.length$() ) {
this.epos++;
}} else if (!this.wrap.overRun && this.epos < this.sb.length$() ) {
this.epos++;
}while (this.pos < this.epos){
this.w.write$I(this.sb.charAt$I(this.pos++).$c());
}
if (this.epos == this.sb.length$()) {
this.sb.setLength$I(1);
this.pos=this.epos=1;
} else if (this.pos > this.bufferSize) {
for (var i=this.bufferSize; i < this.sb.length$(); i++) {
this.sb.setCharAt$I$C(i - this.bufferSize, this.sb.charAt$I(i));
}
this.pos-=this.bufferSize;
this.epos-=this.bufferSize;
this.sb.setLength$I(this.sb.length$() - this.bufferSize);
}});

Clazz.newMeth(C$, 'write$CA$I$I', function (ca, b, n) {
var m=b + n;
for (var i=b; i < m; i++) {
this.sb.append$C(ca[i]);
if (this.sb.length$() % this.interval == this.interval - 1) {
this.wrap.overRun=false;
while (this.epos + this.interval < this.sb.length$() && !this.wrap.overRun ){
this.write$();
}
}}
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'close$', function () {
this.wrap.allowOverRun=false;
this.wrap.overRun=false;
while (this.epos < this.sb.length$()){
this.write$();
}
this.write$();
this.w.close$();
});

Clazz.newMeth(C$, 'length$', function () {
return this.sb.length$();
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
return this.sb.charAt$I(i);
});

Clazz.newMeth(C$, 'setInterval$I', function (i) {
this.interval=i;
});

Clazz.newMeth(C$, 'getInterval$', function () {
return this.interval;
});

Clazz.newMeth(C$, 'getBufferSize$', function () {
return this.bufferSize;
});

Clazz.newMeth(C$, 'setBufferSize$I', function (i) {
this.bufferSize=i;
});

Clazz.newMeth(C$, 'test$S$S$I', function (re, inp, n) {
var sw=Clazz.new_($I$(5));
var rex=$I$(6).perlCode$S(re);
var res1=rex.replaceAll$S(inp);
var rw=Clazz.new_(C$.c$$com_stevesoft_pat_Regex$java_io_Writer,[rex, sw]);
for (var i=0; i < inp.length$(); i++) {
rw.write$I(inp.charAt$I(i).$c());
}
rw.close$();
var res2=sw.toString();
if (!res1.equals$O(res2)) {
System.out.println$S("nmax=" + n);
System.out.println$S("re=" + re);
System.out.println$S("inp=" + inp);
System.out.println$S("res1=" + res1);
System.out.println$S("res2=" + res2);
System.exit$I(255);
}}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
for (var n=1; n <= 1; n++) {
C$.test$S$S$I("s/x/y/", "-----x123456789", n);
C$.test$S$S$I("s/x/y/", "x123456789", n);
C$.test$S$S$I("s/x/y/", "-----x", n);
C$.test$S$S$I("s/x.*?x/y/", ".xx..x..x...x...x....x....x", n);
C$.test$S$S$I("s/x.*x/[$&]/", "--x........x--xx", n);
C$.test$S$S$I("s/x.*x/[$&]/", "--x........x------", n);
C$.test$S$S$I("s/.$/a/m", "bb\nbbb\nbbbb\nbbbbb\nbbbbbb\nbbbbbbbbbbbb", n);
C$.test$S$S$I("s/.$/a/", "123", n);
C$.test$S$S$I("s/.$/a/", "bb\nbbb\nbbbb\nbbbbb\nbbbbbb\nbb", n);
C$.test$S$S$I("s/^./a/", "bb\nbbb\nbbbb\nbbbbb\nbbbbbb\nbb", n);
C$.test$S$S$I("s/$/a/", "bbb", n);
C$.test$S$S$I("s/^/a/", "bbb", n);
C$.test$S$S$I("s/^/a/", "", n);
C$.test$S$S$I("s{.*}{N}", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", n);
C$.test$S$S$I("s/.{0,7}/y/", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", n);
C$.test$S$S$I("s/x/$&/", "xxx", n);
}
System.out.println$S("Success!!!");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
