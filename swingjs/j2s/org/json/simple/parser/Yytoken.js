(function(){var P$=Clazz.newPackage("org.json.simple.parser"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Yytoken");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=0;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.type=0;
this.value=null;
}, 1);

Clazz.newMeth(C$, 'c$$I$O', function (type, value) {
C$.$init$.apply(this);
this.type=type;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
