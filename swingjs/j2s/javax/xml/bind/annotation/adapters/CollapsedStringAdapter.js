(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation.adapters"),I$=[[0,'StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CollapsedStringAdapter", null, 'javax.xml.bind.annotation.adapters.XmlAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['unmarshal$S','unmarshal$TValueType'], function (text) {
if (text == null ) return null;
var len=text.length$();
var s=0;
while (s < len){
if (C$.isWhiteSpace$C(text.charAt$I(s))) break;
s++;
}
if (s == len) return text;
var result=Clazz.new_($I$(1).c$$I,[len]);
if (s != 0) {
for (var i=0; i < s; i++) result.append$C(text.charAt$I(i));

result.append$C(" ");
}var inStripMode=true;
for (var i=s + 1; i < len; i++) {
var ch=text.charAt$I(i);
var b=C$.isWhiteSpace$C(ch);
if (inStripMode && b ) continue;
inStripMode=b;
if (inStripMode) result.append$C(" ");
 else result.append$C(ch);
}
len=result.length$();
if (len > 0 && result.charAt$I(len - 1) == " " ) result.setLength$I(len - 1);
return result.toString();
});

Clazz.newMeth(C$, ['marshal$S','marshal$TBoundType'], function (s) {
return s;
});

Clazz.newMeth(C$, 'isWhiteSpace$C', function (ch) {
if (ch.$c() > 32 ) return false;
return ch.$c() == 9  || ch.$c() == 10   || ch.$c() == 13   || ch.$c() == 32  ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
