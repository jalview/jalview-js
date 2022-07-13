(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex','java.io.File','java.util.StringTokenizer','java.util.Vector','com.stevesoft.pat.StrPos','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileRegex", null, 'com.stevesoft.pat.Regex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirflag=0;
},1);

C$.$fields$=[['I',['dirflag']]
,['O',['root','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.dirflag=0;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.dirflag=0;
}, 1);

Clazz.newMeth(C$, 'compile$S',  function (s) {
var npat=C$.toFileRegex$S(s);
C$.superclazz.prototype.compile$S.apply(this, [npat]);
if ($I$(2).separatorChar == "\\") {
this.ignoreCase=true;
}});

Clazz.newMeth(C$, 'accept$java_io_File$S',  function (dir, s) {
if (this.dirflag != 0) {
var f=Clazz.new_($I$(2,1).c$$S,[s]);
if (f.isDirectory$() && this.dirflag == 2 ) {
return false;
}if (!f.isDirectory$() && this.dirflag == 1 ) {
return false;
}}return this.matchAt$S$I(s, 0);
});

Clazz.newMeth(C$, 'list$S',  function (f) {
return C$.list$S$I(f, 0);
}, 1);

Clazz.newMeth(C$, 'list$S$I',  function (f, df) {
var st=Clazz.new_([f, $I$(2).pathSeparator],$I$(3,1).c$$S$S);
var v=Clazz.new_($I$(4,1));
while (st.hasMoreTokens$()){
var path=st.nextToken$();
C$.list1$S$java_util_Vector$I$Z(path, v, df, true);
}
var sa=Clazz.array(String, [v.size$()]);
v.copyInto$OA(sa);
return sa;
}, 1);

Clazz.newMeth(C$, 'list1$S$java_util_Vector$I$Z',  function (path, v, df, rec) {
if (C$.root.matchAt$S$I(path, 0)) {
v.addElement$O(path + ".");
return;
}var f=Clazz.new_($I$(2,1).c$$S,[path]);
if (f.getParent$() != null  && rec ) {
var v2=Clazz.new_($I$(4,1));
C$.list1$S$java_util_Vector$I$Z(f.getParent$(), v2, 1, true);
for (var i=0; i < v2.size$(); i++) {
var path2=(v2.elementAt$I(i)) + $I$(2).separator + f.getName$() ;
C$.list1$S$java_util_Vector$I$Z(path2, v, df, false);
}
} else {
var base=Clazz.new_($I$(2,1).c$$S,[path]);
var dir_s=base.getParent$();
if (dir_s == null ) {
dir_s=".";
}var dir=Clazz.new_($I$(2,1).c$$S,[dir_s]);
var fr=Clazz.new_(C$.c$$S,[base.getName$()]);
if (fr.isLiteral$()) {
v.addElement$O(dir_s + $I$(2).separator + base.getName$() );
return;
}fr.dirflag=df;
var sa=dir.list$java_io_FilenameFilter(fr);
if (sa == null ) {
return;
}for (var i=0; i < sa.length; i++) {
v.addElement$O(dir_s + $I$(2).separator + sa[i] );
}
}}, 1);

Clazz.newMeth(C$, 'toFileRegex$S',  function (s) {
var sp=Clazz.new_($I$(5,1).c$$S$I,[s, 0]);
var sb=Clazz.new_($I$(6,1));
if (sp.incMatch$S("{?e=")) {
var e=sp.thisChar$();
sp.inc$();
if (sp.incMatch$S("}")) {
sb.append$S("(?e=" + e + ")^" );
} else {
sb.append$S("^(?e=");
}sp.esc=e;
}var ParenLvl=0;
while (!sp.eos$()){
if ($I$(2).separatorChar == "\\") {
if (sp.escaped$()) {
sb.append$S("\\\\");
}sp.dontMatch=false;
}if (sp.incMatch$S("?")) {
sb.append$S(".");
} else if (sp.incMatch$S(".")) {
sb.append$C(sp.esc);
sb.append$C(".");
} else if (sp.incMatch$S("{??")) {
sb.append$S("(??");
++ParenLvl;
} else if (sp.incMatch$S("{?!")) {
sb.append$S("(?!");
++ParenLvl;
} else if (sp.incMatch$S("{?=")) {
sb.append$S("(?=");
++ParenLvl;
} else if (sp.incMatch$S("{")) {
sb.append$S("(?:");
++ParenLvl;
} else if (sp.incMatch$S("}")) {
sb.append$C(")");
--ParenLvl;
} else if (ParenLvl != 0 && sp.incMatch$S(",") ) {
sb.append$C("|");
} else if (sp.incMatch$S("*")) {
sb.append$S(".*");
} else {
sb.append$C(sp.thisChar$());
sp.inc$();
}}
sb.append$S("$");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'isLiteral$',  function () {
var x=this.thePattern;
while (x != null  && !(Clazz.instanceOf(x, "com.stevesoft.pat.End")) ){
if (Clazz.instanceOf(x, "com.stevesoft.pat.oneChar")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Skipped")) {
;} else {
return false;
}x=x.next;
}
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.root=Clazz.new_([$I$(2).separatorChar == "/" ? "/$" : "(?:.:|)\\\\$"],$I$(1,1).c$$S);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
