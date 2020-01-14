(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.PT','org.jmol.util.Escape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Txt");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'formatText$org_jmol_api_JmolViewer$S', function (vwr, text0) {
var i;
if ((i=text0.indexOf$S("@{")) < 0 && (i=text0.indexOf$S("%{")) < 0 ) return text0;
var text=text0;
var isEscaped=(text.indexOf$S("\\") >= 0);
if (isEscaped) {
text=$I$(1).rep$S$S$S(text, "\\%", "\u0001");
text=$I$(1).rep$S$S$S(text, "\\@", "\u0002");
isEscaped=!text.equals$O(text0);
}text=$I$(1).rep$S$S$S(text, "%{", "@{");
var name;
while ((i=text.indexOf$S("@{")) >= 0){
i++;
var i0=i + 1;
var len=text.length$();
var nP=1;
var chFirst="\u0000";
var chLast="\u0000";
while (nP > 0 && ++i < len ){
var ch=text.charAt$I(i);
if (chFirst != "\u0000") {
if (chLast == "\\") {
ch="\u0000";
} else if (ch == chFirst) {
chFirst="\u0000";
}chLast=ch;
continue;
}switch (ch.$c()) {
case 39:
case 34:
chFirst=ch;
break;
case 123:
nP++;
break;
case 125:
nP--;
break;
}
}
if (i >= len) return text;
name=text.substring$I$I(i0, i);
if (name.length$() == 0) return text;
var v=vwr.evaluateExpression$O(name);
if (Clazz.instanceOf(v, "javajs.util.P3")) v=$I$(2).eP$javajs_util_T3(v);
text=text.substring$I$I(0, i0 - 2) + v.toString() + text.substring$I(i + 1) ;
}
if (isEscaped) {
text=$I$(1).rep$S$S$S(text, "\u0002", "@");
text=$I$(1).rep$S$S$S(text, "\u0001", "%");
}return text;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
