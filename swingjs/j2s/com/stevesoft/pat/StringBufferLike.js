(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringBufferLike", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mode="E";
this.altMode=" ";
},1);

C$.$fields$=[['C',['mode','altMode'],'O',['sbl','com.stevesoft.pat.BasicStringBufferLike']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_BasicStringBufferLike', function (sbl) {
;C$.$init$.apply(this);
this.sbl=sbl;
}, 1);

Clazz.newMeth(C$, 'toStringLike$', function () {
return this.sbl.toStringLike$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.sbl.toString();
});

Clazz.newMeth(C$, 'append$C', function (c) {
switch (this.mode.$c()) {
case 117:
this.mode=this.altMode;
this.altMode=" ";
case 85:
this.sbl.append$C($I$(1).toUpperCase$C(c));
break;
case 108:
this.mode=this.altMode;
this.altMode=" ";
case 76:
this.sbl.append$C($I$(1).toLowerCase$C(c));
break;
case 81:
if ((c >= "a" && c <= "z" ) || (c >= "A" && c <= "Z" ) || (c >= "0" && c <= "9" )  ) {
;} else {
this.sbl.append$C("\\");
}default:
this.sbl.append$C(c);
break;
}
});

Clazz.newMeth(C$, 'append$S', function (s) {
for (var i=0; i < s.length$(); i++) {
this.append$C(s.charAt$I(i));
}
});

Clazz.newMeth(C$, 'setMode$C', function (c) {
if (c == "u" || c == "l" ) {
if (this.altMode == " ") {
this.altMode=this.mode;
}}this.mode=c;
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sbl.unwrap$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
