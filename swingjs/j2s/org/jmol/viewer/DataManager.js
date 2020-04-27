(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.util.Parser','javajs.util.AU','org.jmol.util.Logger','javajs.util.PT','javajs.util.BS','org.jmol.script.T','org.jmol.util.BSUtil','javajs.util.SB','org.jmol.util.Elements','org.jmol.c.VDW','org.jmol.util.Escape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataManager", null, null, 'org.jmol.api.JmolDataManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataValues=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['dataValues','java.util.Map','vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
return this;
});

Clazz.newMeth(C$, 'clear$', function () {
this.dataValues.clear$();
});

Clazz.newMeth(C$, 'setData$S$OA$I$I$I$I$I$I', function (type, data, arrayCount, actualAtomCount, matchField, matchFieldColumnCount, field, fieldColumnCount) {
if (type == null ) {
this.clear$();
return;
}type=type.toLowerCase$();
if (type.equals$O("element_vdw")) {
var stringData=(data[1]).trim$();
if (stringData.length$() == 0) {
this.vwr.userVdwMars=null;
this.vwr.userVdws=null;
this.vwr.bsUserVdws=null;
return;
}if (this.vwr.bsUserVdws == null ) this.vwr.setUserVdw$org_jmol_c_VDW(this.vwr.defaultVdw);
$I$(2).parseFloatArrayFromMatchAndField$S$javajs_util_BS$I$I$IA$I$I$FA$I(stringData, this.vwr.bsUserVdws, 1, 0, data[2], 2, 0, this.vwr.userVdws, 1);
for (var i=this.vwr.userVdws.length; --i >= 0; ) this.vwr.userVdwMars[i]=(Math.floor(this.vwr.userVdws[i] * 1000)|0);

return;
}var depth=p$1.getType$OA.apply(this, [data]);
var val=data[1];
if (depth == -1) data[3]=Integer.valueOf$I(depth=(Clazz.instanceOf(val, "java.lang.String") ? 0 : $I$(3).isAF$O(val) ? 1 : $I$(3).isAFF$O(val) ? 2 : $I$(3).isAFFF$O(val) ? 3 : -1));
if (data[2] != null  && arrayCount > 0 ) {
var createNew=(matchField != 0 || field != -2147483648 && field != 2147483647  );
var oldData=this.dataValues.get$O(type);
var bs;
var f=(oldData == null  || createNew  ? Clazz.array(Float.TYPE, [actualAtomCount]) : (function(a,f){return f.apply(null,a)})([(oldData[1]), actualAtomCount],$I$(3).ensureLengthA$FA$I));
if (depth == -1) {
$I$(4).error$S("Cannot determine data type for " + val);
return;
}var stringData=(depth == 0 ? val : null);
var floatData=(depth == 1 ? val : null);
var strData=null;
if (field == -2147483648 && (strData=$I$(5).getTokens$S(stringData)).length > 1 ) field=0;
if (field == -2147483648) {
bs=data[2];
C$.setSelectedFloats$F$javajs_util_BS$FA($I$(5).parseFloat$S(stringData), bs, f);
} else if (field == 0 || field == 2147483647 ) {
bs=data[2];
if (floatData != null ) {
var n=floatData.length;
if (n == bs.cardinality$()) {
for (var i=bs.nextSetBit$I(0), pt=0; i >= 0; i=bs.nextSetBit$I(i + 1), pt++) f[i]=floatData[pt];

} else {
for (var i=bs.nextSetBit$I(0); i >= 0 && i < n ; i=bs.nextSetBit$I(i + 1)) f[i]=floatData[i];

}} else {
(function(a,f){return f.apply(null,a)})([strData == null  ? $I$(5).getTokens$S(stringData) : strData, bs, f],$I$(2).parseFloatArrayBsData$SA$javajs_util_BS$FA);
}} else if (matchField <= 0) {
bs=data[2];
$I$(2).parseFloatArrayFromMatchAndField$S$javajs_util_BS$I$I$IA$I$I$FA$I(stringData, bs, 0, 0, null, field, fieldColumnCount, f, 1);
} else {
var iData=data[2];
$I$(2).parseFloatArrayFromMatchAndField$S$javajs_util_BS$I$I$IA$I$I$FA$I(stringData, null, matchField, matchFieldColumnCount, iData, field, fieldColumnCount, f, 1);
bs=Clazz.new_($I$(6,1));
for (var i=iData.length; --i >= 0; ) if (iData[i] >= 0) bs.set$I(iData[i]);

}if (oldData != null  && Clazz.instanceOf(oldData[2], "javajs.util.BS")  && !createNew ) bs.or$javajs_util_BS((oldData[2]));
data[3]=Integer.valueOf$I(1);
data[2]=bs;
data[1]=f;
if (type.indexOf$S("property_atom.") == 0) {
var tok=(function(a,f){return f.apply(null,a)})([type=type.substring$I(14)],$I$(7).getSettableTokFromString$S);
if (tok == 0) {
$I$(4).error$S("Unknown atom property: " + type);
return;
}var nValues=bs.cardinality$();
var fValues=Clazz.array(Float.TYPE, [nValues]);
for (var n=0, i=bs.nextSetBit$I(0); n < nValues; i=bs.nextSetBit$I(i + 1)) fValues[n++]=f[i];

this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tok, 0, 0, null, fValues, null);
return;
}}this.dataValues.put$O$O(type, data);
});

Clazz.newMeth(C$, 'getType$OA', function (data) {
return (data[3]).intValue$();
}, p$1);

Clazz.newMeth(C$, 'setSelectedFloats$F$javajs_util_BS$FA', function (f, bs, data) {
var isAll=(bs == null );
var i0=(isAll ? 0 : bs.nextSetBit$I(0));
for (var i=i0; i >= 0 && i < data.length ; i=(isAll ? i + 1 : bs.nextSetBit$I(i + 1))) data[i]=f;

}, 1);

Clazz.newMeth(C$, 'getData$S$javajs_util_BS$I', function (label, bsSelected, dataType) {
if (this.dataValues.size$() == 0 || label == null  ) return null;
label=label.toLowerCase$();
switch (dataType) {
case -1:
case -2:
if (!label.equals$O("types")) return this.dataValues.get$O(label);
var info=Clazz.array(String, [2]);
info[0]="types";
info[1]="";
var nv=0;
for (var name, $name = this.dataValues.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) info[1] += (nv++ > 0 ? "\n" : "") + name;

return info;
default:
var data=this.dataValues.get$O(label);
if (data == null  || p$1.getType$OA.apply(this, [data]) != dataType ) return null;
if (bsSelected == null ) return data[1];
var f=data[1];
var fnew=Clazz.array(Float.TYPE, [bsSelected.cardinality$()]);
for (var i=0, n=f.length, p=bsSelected.nextSetBit$I(0); p >= 0 && i < n ; p=bsSelected.nextSetBit$I(p + 1)) fnew[i++]=f[p];

return fnew;
}
});

Clazz.newMeth(C$, 'deleteModelAtoms$I$I$javajs_util_BS', function (firstAtomIndex, nAtoms, bsDeleted) {
if (this.dataValues.size$() == 0) return;
for (var name, $name = this.dataValues.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (name.indexOf$S("property_") == 0) {
var obj=this.dataValues.get$O(name);
$I$(8).deleteBits$javajs_util_BS$javajs_util_BS(obj[2], bsDeleted);
obj[1]=$I$(3).deleteElements$O$I$I(obj[1], firstAtomIndex, nAtoms);
}}
});

Clazz.newMeth(C$, 'getDefaultVdwNameOrData$org_jmol_c_VDW$javajs_util_BS', function (type, bs) {
var sb=Clazz.new_($I$(9,1));
sb.append$S(type.getVdwLabel$()).append$S("\n");
var isAll=(bs == null );
var i0=(isAll ? 1 : bs.nextSetBit$I(0));
var i1=(isAll ? $I$(10).elementNumberMax : bs.length$());
for (var i=i0; i < i1 && i >= 0 ; i=(isAll ? i + 1 : bs.nextSetBit$I(i + 1))) sb.appendI$I(i).appendC$C("\t").appendF$F(type === $I$(11).USER  ? this.vwr.userVdws[i] : $I$(10).getVanderwaalsMar$I$org_jmol_c_VDW(i, type) / 1000.0).appendC$C("\t").append$S($I$(10).elementSymbolFromNumber$I(i)).appendC$C("\n");

return (bs == null  ? sb.toString() : "\n  DATA \"element_vdw\"\n" + sb.append$S("  end \"element_vdw\";\n\n").toString());
});

Clazz.newMeth(C$, 'getDataState$org_jmol_viewer_JmolStateCreator$javajs_util_SB', function (sc, sb) {
if (this.dataValues.size$() == 0) return false;
var haveData=false;
for (var name, $name = this.dataValues.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (name.indexOf$S("property_") == 0) {
var obj=this.dataValues.get$O(name);
if (obj.length > 4 && !(obj[4]).booleanValue$() ) continue;
haveData=true;
var data=obj[1];
if (data != null  && p$1.getType$OA.apply(this, [obj]) == 1 ) {
sc.getAtomicPropertyStateBuffer$javajs_util_SB$I$javajs_util_BS$S$FA(sb, 17, obj[2], name, data);
sb.append$S("\n");
} else {
sb.append$S("\n").append$S($I$(12).encapsulateData$S$O$I(name, data, -1));
}continue;
}var type=(name.indexOf$S("data2d") == 0 ? 2 : name.indexOf$S("data3d") == 0 ? 3 : -1);
if (type == -1) continue;
var obj=this.dataValues.get$O(name);
var data=obj[1];
if (data != null  && p$1.getType$OA.apply(this, [obj]) == type ) {
haveData=true;
sb.append$S("\n").append$S($I$(12).encapsulateData$S$O$I(name, data, type));
}}
return haveData;
});

Clazz.newMeth(C$, 'createFileData$S', function (strModel) {
var o=Clazz.array(java.lang.Object, [4]);
o[0]="model";
o[1]=strModel;
o[3]=Integer.valueOf$I(0);
return o;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
