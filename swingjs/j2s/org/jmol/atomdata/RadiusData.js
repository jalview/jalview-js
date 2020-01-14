(function(){var P$=Clazz.newPackage("org.jmol.atomdata"),I$=[[0,['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RadiusData", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.info=null;
this.factorType=null;
this.vdwType=null;
this.value=0;
this.valueExtended=0;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.factorType=$I$(1).ABSOLUTE;
this.vdwType=$I$(2).AUTO;
this.value=NaN;
this.valueExtended=0;
}, 1);

Clazz.newMeth(C$, 'c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW', function (values, value, factorType, vdwType) {
C$.$init$.apply(this);
if (values != null ) {
this.values=values;
this.value=2147483647;
return;
}if (factorType == null ) return;
this.factorType=factorType;
this.value=value;
if (vdwType != null ) this.vdwType=vdwType;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
if (Float.isNaN$F(this.value)) return "";
var sb=Clazz.new_($I$(3));
switch (this.factorType) {
case $I$(1).ABSOLUTE:
sb.appendF$F(this.value);
break;
case $I$(1).OFFSET:
sb.append$S(this.value > 0  ? "+" : "").appendF$F(this.value);
break;
case $I$(1).FACTOR:
sb.appendI$I(((this.value * 100)|0)).append$S("%");
if (this.vdwType !== $I$(2).AUTO ) sb.append$S(this.vdwType.getVdwLabel$());
break;
case $I$(1).SCREEN:
sb.appendI$I((this.value|0));
}
return sb.toString();
});
;
(function(){var C$=Clazz.newClass(P$.RadiusData, "EnumType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ABSOLUTE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OFFSET", 1, []);
Clazz.newEnumConst($vals, C$.c$, "FACTOR", 2, []);
Clazz.newEnumConst($vals, C$.c$, "SCREEN", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
