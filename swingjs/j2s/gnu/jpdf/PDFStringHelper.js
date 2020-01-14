(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFStringHelper");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makePDFString$S', function (s) {
if (s.indexOf$S("(") > -1) s=C$.replace$S$S$S(s, "(", "\\(");
if (s.indexOf$S(")") > -1) s=C$.replace$S$S$S(s, ")", "\\)");
return "(" + s + ")" ;
}, 1);

Clazz.newMeth(C$, 'replace$S$S$S', function (source, removeThis, replaceWith) {
var b=Clazz.new_($I$(1));
var p=0;
var c=0;
while (c > -1){
if ((c=source.indexOf$S$I(removeThis, p)) > -1) {
b.append$S(source.substring$I$I(p, c));
b.append$S(replaceWith);
p=c + 1;
}}
if (p < source.length$()) b.append$S(source.substring$I(p));
return b.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
