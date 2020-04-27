(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FastMulti", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
this.step=-1;
},1);

C$.$fields$=[['Z',['matchFewest'],'I',['step'],'O',['fewestMatches','com.stevesoft.pat.patInt','+mostMatches']]]

Clazz.newMeth(C$, 'minChars$', function () {
return this.sub.countMinChars$().mul$com_stevesoft_pat_patInt(this.fewestMatches);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.sub.countMaxChars$().mul$com_stevesoft_pat_patInt(this.mostMatches);
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (a, b, p) {
Clazz.super_(C$, this);
if (p == null ) {
$I$(1).endItAll$S("Null length pattern followed by *, +, or other Multi.");
}this.fewestMatches=a;
this.mostMatches=b;
this.sub=p;
this.step=p.countMinChars$().intValue$();
this.sub.setParent$com_stevesoft_pat_Pattern(null);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.sub.toString() + "{" + this.fewestMatches + "," + this.mostMatches + "}" + (this.matchFewest ? "?" : "") + "(?# <= fast multi)" + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var m=-1;
var i=pos;
var endstr=pt.src.length$() - this.step;
var matches=Clazz.new_($I$(2,1).c$$I,[0]);
if (this.matchFewest) {
if (this.fewestMatches.lessEq$com_stevesoft_pat_patInt(matches)) {
var ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}while (i >= 0 && i <= endstr ){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
matches.inc$();
if (this.fewestMatches.lessEq$com_stevesoft_pat_patInt(matches)) {
var ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}if (matches.equals$com_stevesoft_pat_patInt(this.mostMatches)) {
return -1;
}}}
return -1;
}var nMatches=0;
while (this.fewestMatches.intValue$() > nMatches){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
nMatches++;
} else {
return -1;
}}
m=i;
if (this.mostMatches.finite$()) {
while (nMatches < this.mostMatches.intValue$()){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
} else {
while (true){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
}while (m >= pos){
var r=this.nextMatch$I$com_stevesoft_pat_Pthings(m, pt);
if (r >= 0) {
return r;
}m-=this.step;
nMatches--;
if (nMatches < this.fewestMatches.intValue$()) {
return -1;
}}
return -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var fm=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.fewestMatches, this.mostMatches, this.sub.clone$java_util_Hashtable(h)]);
fm.matchFewest=this.matchFewest;
return fm;
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
