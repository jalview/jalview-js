(function(){var P$=Clazz.newPackage("org.json.simple.parser"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Yytoken");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=0;
this.value=null;
},1);

C$.$fields$=[['I',['type'],'O',['value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$I$O', function (type, value) {
;C$.$init$.apply(this);
this.type=type;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
switch (this.type) {
case 0:
sb.append$S("VALUE(").append$O(this.value).append$S(")");
break;
case 1:
sb.append$S("LEFT BRACE({)");
break;
case 2:
sb.append$S("RIGHT BRACE(})");
break;
case 3:
sb.append$S("LEFT SQUARE([)");
break;
case 4:
sb.append$S("RIGHT SQUARE(])");
break;
case 5:
sb.append$S("COMMA(,)");
break;
case 6:
sb.append$S("COLON(:)");
break;
case -1:
sb.append$S("END OF FILE");
break;
}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
