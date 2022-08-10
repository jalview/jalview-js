(function(){var P$=Clazz.newPackage("org.jmol.atomdata"),I$=[[0,['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RadiusData", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['EnumType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.factorType=$I$(1).ABSOLUTE;
this.vdwType=$I$(2).AUTO;
this.value=NaN;
this.valueExtended=0;
},1);

C$.$fields$=[['F',['value','valueExtended'],'S',['info'],'O',['factorType','org.jmol.atomdata.RadiusData.EnumType','vdwType','org.jmol.c.VDW','values','float[]']]]

Clazz.newMeth(C$, 'c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW', function (values, value, factorType, vdwType) {
;C$.$init$.apply(this);
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
var sb=Clazz.new_($I$(3,1));
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
(function(){/*e*/var C$=Clazz.newClass(P$.RadiusData, "EnumType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ABSOLUTE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OFFSET", 1, []);
Clazz.newEnumConst($vals, C$.c$, "FACTOR", 2, []);
Clazz.newEnumConst($vals, C$.c$, "SCREEN", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
