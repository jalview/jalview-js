(function(){var P$=Clazz.newPackage("org.apache.harmony.luni.util"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MsgHelp");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'format$S$OA', function (format, args) {
var answer=Clazz.new_($I$(1,1).c$$I,[format.length$() + (args.length * 20)]);
var argStrings=Clazz.array(String, [args.length]);
for (var i=0; i < args.length; ++i) {
if (args[i] == null ) argStrings[i]="<null>";
 else argStrings[i]=args[i].toString();
}
var lastI=0;
for (var i=format.indexOf$I$I("{", 0); i >= 0; i=format.indexOf$I$I("{", lastI)) {
if (i != 0 && format.charAt$I(i - 1) == "\\" ) {
if (i != 1) answer.append$S(format.substring$I$I(lastI, i - 1));
answer.append$C("{");
lastI=i + 1;
} else {
if (i > format.length$() - 3) {
answer.append$S(format.substring$I$I(lastI, format.length$()));
lastI=format.length$();
} else {
var argnum=($b$[0] = ((format.charCodeAt$I(i + 1)) - 48), $b$[0]);
if (argnum < 0 || format.charAt$I(i + 2) != "}" ) {
answer.append$S(format.substring$I$I(lastI, i + 1));
lastI=i + 1;
} else {
answer.append$S(format.substring$I$I(lastI, i));
if (argnum >= argStrings.length) answer.append$S("<missing argument>");
 else answer.append$S(argStrings[argnum]);
lastI=i + 3;
}}}}
if (lastI < format.length$()) answer.append$S(format.substring$I$I(lastI, format.length$()));
return answer.toString();
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.8-v2');//Created 2020-02-19 10:51:31 Java2ScriptVisitor version 3.2.8-v2 net.sf.j2s.core.jar version 3.2.8-v2
