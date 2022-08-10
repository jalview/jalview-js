(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.util.Logger','org.jmol.util.Escape','org.jmol.script.SV','javajs.util.PT','javajs.util.AU','javajs.util.Lst','org.jmol.script.T','javajs.util.M3','java.util.Arrays','javajs.util.SB','javajs.util.BArray','javajs.util.Base64','javajs.util.BS','org.jmol.util.BSUtil','org.jmol.util.JmolMolecule','org.jmol.viewer.Viewer','org.jmol.viewer.FileManager','org.jmol.modelset.LabelToken','javajs.util.P3','org.jmol.api.Interface','org.jmol.util.C','org.jmol.util.Edge','org.jmol.viewer.JC','javajs.util.V3','org.jmol.viewer.binding.Binding','org.jmol.viewer.ActionManager','javajs.util.XmlUtil']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PropertyManager", null, null, 'org.jmol.api.JmolPropertyManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer','map','java.util.Map']]
,['O',['propertyTypes','String[]','+readableTypes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
for (var i=0, p=0; i < C$.propertyTypes.length; i+=3, p++) if (C$.propertyTypes[i].length$() > 0) this.map.put$O$O(C$.propertyTypes[i].toLowerCase$(), Integer.valueOf$I(p));

});

Clazz.newMeth(C$, 'getPropertyNumber$S', function (infoType) {
var n=this.map.get$O(infoType == null  ? "" : infoType.toLowerCase$());
return (n == null  ? -1 : n.intValue$());
});

Clazz.newMeth(C$, 'getDefaultPropertyParam$I', function (propID) {
return (propID < 0 ? "" : C$.propertyTypes[propID * 3 + 2]);
});

Clazz.newMeth(C$, 'checkPropertyParameter$S', function (name) {
var propID=this.getPropertyNumber$S(name);
var type=C$.getParamType$I(propID);
return (type.length$() > 0 && type != "<atom selection>" );
});

Clazz.newMeth(C$, 'getProperty$S$S$O', function (returnType, infoType, paramInfo) {
if (C$.propertyTypes.length != 141) $I$(2,"warn$S",["propertyTypes is not the right length: " + C$.propertyTypes.length + " != " + 141 ]);
var info;
if (infoType.indexOf$S(".") >= 0 || infoType.indexOf$S("[") >= 0 ) {
var args=p$1.getArguments$S.apply(this, [infoType]);
info=this.extractProperty$O$O$I$javajs_util_Lst$Z(p$1.getPropertyAsObject$S$O$S.apply(this, [args[0].asString$(), paramInfo, null]), args, 1, null, false);
} else {
info=p$1.getPropertyAsObject$S$O$S.apply(this, [infoType, paramInfo, returnType]);
}if (returnType == null ) return info;
var requestedReadable=returnType.equalsIgnoreCase$S("readable");
if (requestedReadable) returnType=(C$.isReadableAsString$S(infoType) ? "String" : "JSON");
if (returnType.equalsIgnoreCase$S("String")) return (info == null  ? "" : info.toString());
if (requestedReadable) return $I$(3).toReadable$S$O(infoType, info);
if (returnType.equalsIgnoreCase$S("JSON")) return $I$(4).safeJSON$S$O(infoType, info);
return info;
});

Clazz.newMeth(C$, 'getArguments$S', function (propertyName) {
var lc=propertyName.toLowerCase$();
var pt=-1;
if (propertyName.indexOf$I("\"") >= 0 || propertyName.indexOf$I("\'") >= 0 ) propertyName=p$1.fixSelectQuotes$S.apply(this, [propertyName]);
while ((pt=lc.indexOf$S$I("[select ", ++pt)) >= 0){
var pt2=lc.indexOf$S$I(" where ", pt);
var pt2b=lc.indexOf$S$I(" wherein ", pt);
if (pt2b > 0 && pt2b < pt2 ) pt2=pt2b;
var pt3=lc.lastIndexOf$S("]");
if (pt2 < 0 || pt2 > pt3 ) continue;
propertyName=propertyName.substring$I$I(0, pt + 1) + propertyName.substring$I$I(pt + 1, pt3).replace$C$C(".", "\u0001").replace$C$C("[", "\u0002").replace$C$C("]", "\u0003") + propertyName.substring$I(pt3) ;
}
propertyName=$I$(5,"rep$S$S$S",[$I$(5,"rep$S$S$S",[propertyName.replace$C$C("]", "\u0000").replace$C$C("[", "\u0000"), "..", "\u0004"]).replace$C$C(".", "\u0000").replace$C$C("\u0001", ".").replace$C$C("\u0002", "[").replace$C$C("\u0003", "]"), "\u0004", ".."]);
propertyName=$I$(5).rep$S$S$S(propertyName, "\u0000\u0000", "\u0000");
var names=$I$(5,"split$S$S",[$I$(5).trim$S$S(propertyName, "\u0000"), "\u0000"]);
var args=Clazz.array($I$(4), [names.length]);
for (var i=0, n; i < names.length; i++) args[i]=(names[i].startsWith$S("\'") || names[i].startsWith$S("\"")  ? $I$(4,"newS$S",[$I$(5).trim$S$S(names[i], "\'\"")]) : (n=$I$(5).parseInt$S(names[i])) == -2147483648 ? $I$(4).newS$S(names[i]) : $I$(4).newI$I(n));

return args;
}, p$1);

Clazz.newMeth(C$, 'fixSelectQuotes$S', function (propertyName) {
var a=propertyName.toCharArray$();
var inQuotes=false;
var inQuotes1=false;
var inQuotes2=false;
for (var i=a.length; --i >= 0; ) {
switch ((a[i]).$c()) {
case 39:
if (!inQuotes2) inQuotes=inQuotes1=!inQuotes;
break;
case 34:
if (!inQuotes1) inQuotes=inQuotes2=!inQuotes;
break;
case 46:
if (inQuotes) a[i]="\u0001";
break;
case 91:
if (inQuotes) a[i]="\u0002";
break;
case 93:
if (inQuotes) a[i]="\u0003";
break;
}
}
propertyName= String.instantialize(a);
return propertyName;
}, p$1);

Clazz.newMeth(C$, 'extractProperty$O$O$I$javajs_util_Lst$Z', function (prop, args, ptr, v2, isCompiled) {
if (ptr < 0) {
args=p$1.getArguments$S.apply(this, [args]);
ptr=0;
}if (ptr >= (args).length) return prop;
if (!isCompiled) args=p$1.compileSelect$org_jmol_script_SVA.apply(this, [args]);
var pt;
var arg=(args)[ptr++];
var property=$I$(4).oValue$O(prop);
switch (arg.tok) {
case 2:
pt=arg.intValue - 1;
if (Clazz.instanceOf(property, "javajs.util.Lst")) {
var v=property;
if (pt < 0) pt+=v.size$();
return (pt >= 0 && pt < v.size$()  ? this.extractProperty$O$O$I$javajs_util_Lst$Z(v.get$I(pt), args, ptr, null, true) : "");
}if (Clazz.instanceOf(property, "javajs.util.M3")) {
var m=property;
var f=Clazz.array(Float.TYPE, -2, [Clazz.array(Float.TYPE, -1, [m.m00, m.m01, m.m02]), Clazz.array(Float.TYPE, -1, [m.m10, m.m11, m.m12]), Clazz.array(Float.TYPE, -1, [m.m20, m.m21, m.m22])]);
if (pt < 0) pt+=3;
if (pt >= 0 && pt < 3 ) return this.extractProperty$O$O$I$javajs_util_Lst$Z(f, args, --ptr, null, true);
return "";
}if (Clazz.instanceOf(property, "javajs.util.M4")) {
var m=property;
var f=Clazz.array(Float.TYPE, -2, [Clazz.array(Float.TYPE, -1, [m.m00, m.m01, m.m02, m.m03]), Clazz.array(Float.TYPE, -1, [m.m10, m.m11, m.m12, m.m13]), Clazz.array(Float.TYPE, -1, [m.m20, m.m21, m.m22, m.m23]), Clazz.array(Float.TYPE, -1, [m.m30, m.m31, m.m32, m.m33])]);
if (pt < 0) pt+=4;
if (pt >= 0 && pt < 4 ) return this.extractProperty$O$O$I$javajs_util_Lst$Z(f, args, --ptr, null, true);
return "";
}if ($I$(6).isAI$O(property)) {
var ilist=property;
if (pt < 0) pt+=ilist.length;
if (pt >= 0 && pt < ilist.length ) return Integer.valueOf$I(ilist[pt]);
return "";
}if ($I$(6).isAD$O(property)) {
var dlist=property;
if (pt < 0) pt+=dlist.length;
if (pt >= 0 && pt < dlist.length ) return Double.valueOf$D(dlist[pt]);
return "";
}if ($I$(6).isAF$O(property)) {
var flist=property;
if (pt < 0) pt+=flist.length;
if (pt >= 0 && pt < flist.length ) return Float.valueOf$F(flist[pt]);
return "";
}if ($I$(6).isAII$O(property)) {
var iilist=property;
if (pt < 0) pt+=iilist.length;
if (pt >= 0 && pt < iilist.length ) return this.extractProperty$O$O$I$javajs_util_Lst$Z(iilist[pt], args, ptr, null, true);
return "";
}if ($I$(6).isAFF$O(property)) {
var fflist=property;
if (pt < 0) pt+=fflist.length;
if (pt >= 0 && pt < fflist.length ) return this.extractProperty$O$O$I$javajs_util_Lst$Z(fflist[pt], args, ptr, null, true);
return "";
}if ($I$(6).isAS$O(property)) {
var slist=property;
if (pt < 0) pt+=slist.length;
if (pt >= 0 && pt < slist.length ) return slist[pt];
return "";
}if (Clazz.instanceOf(property, Clazz.array(java.lang.Object, -1))) {
var olist=property;
if (pt < 0) pt+=olist.length;
if (pt >= 0 && pt < olist.length ) return olist[pt];
return "";
}break;
case 1275082245:
case 4:
if (Clazz.instanceOf(property, "java.util.Map")) {
var h=property;
var key;
var asMap=false;
var asArray=false;
var isCaseSensitive=false;
var keys=(arg.tok == 1275082245 ? (arg.value)[0] : null);
var whereArgs=null;
if (arg.tok == 1275082245) {
isCaseSensitive=true;
whereArgs=(arg.value)[1];
key=arg.myName;
asArray=(key.indexOf$S(";") >= 0);
if (key.contains$CharSequence("**")) {
var isAll=keys.size$() == 0;
var newKey="";
for (var e, $e = h.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var k=e.getKey$();
for (var i=(isAll ? 1 : keys.size$()); --i >= 0; ) {
if (!isAll && !$I$(5,"isLike$S$S",[k, keys.get$I(i)]) ) continue;
var o=e.getValue$();
var isList=false;
switch (Clazz.instanceOf(o, "org.jmol.script.SV") ? (o).tok : 0) {
case 7:
isList=true;
o=(o).getList$();
break;
case 6:
case 14:
o=(o).getMap$();
break;
default:
if (!(Clazz.instanceOf(o, "java.util.Map")) && !(isList=(Clazz.instanceOf(o, "javajs.util.Lst"))) ) o=null;
}
if (o != null ) {
if (isList) {
if (v2 == null ) v2=Clazz.new_($I$(7,1));
var olst=o;
for (var n=olst.size$(), j=0; j < n; j++) {
o=olst.get$I(j);
if (!(Clazz.instanceOf(o, "org.jmol.script.SV")) || (o=(o).getMap$()) == null  ) continue;
if (whereArgs == null  || this.vwr.checkSelect$java_util_Map$org_jmol_script_TA(o, whereArgs) ) v2.addLast$O(o);
}
return v2;
}if (whereArgs == null  || this.vwr.checkSelect$java_util_Map$org_jmol_script_TA(o, whereArgs) ) newKey += "," + k;
}}
}
if (newKey.length$() == 0) return Clazz.new_($I$(7,1));
key=newKey.substring$I(1);
asMap=!asArray;
keys=null;
} else if (whereArgs != null  && !this.vwr.checkSelect$java_util_Map$org_jmol_script_TA(property, whereArgs) ) return "";
} else {
key=arg.asString$();
if (key.equalsIgnoreCase$S("keys")) {
var lst=Clazz.new_($I$(7,1));
for (var k, $k = h.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) lst.addLast$O(k);

return this.extractProperty$O$O$I$javajs_util_Lst$Z(lst, args, ptr, null, true);
}}var havePunctuation=(asArray || key.indexOf$S(",") >= 0  || key.indexOf$S(";") >= 0 );
if (isCaseSensitive && !havePunctuation ) {
havePunctuation=true;
key += ",";
}var isWild=(asArray || key.startsWith$S("*") || key.endsWith$S("*") || havePunctuation  );
var wasV2=(v2 != null );
if (isWild) {
if (!wasV2) v2=Clazz.new_($I$(7,1));
if (!asArray && (keys == null  ? key.length$() == 1 : keys.size$() == 0) ) {
if (ptr == (args).length) {
if (!wasV2) return property;
v2.addLast$O(property);
return v2;
}return this.extractProperty$O$O$I$javajs_util_Lst$Z(property, args, ptr, v2, true);
}}if (key.contains$CharSequence("**")) key=$I$(5).rep$S$S$S(key, "**", "*");
if (isWild && !havePunctuation ) key += ",";
if (asMap || asArray || key.contains$CharSequence(",")  ) {
var mapNew=Clazz.new_($I$(1,1));
if (keys != null  && keys.size$() == 0 ) {
keys=null;
key="*";
}if (keys == null ) {
var tokens=$I$(5).split$S$S(key, ",");
for (var i=tokens.length; --i >= 0; ) C$.getMapSubset$java_util_Map$S$java_util_Map$javajs_util_Lst(h, tokens[i], mapNew, asArray ? v2 : null);

} else {
for (var i=keys.size$(); --i >= 0; ) C$.getMapSubset$java_util_Map$S$java_util_Map$javajs_util_Lst(h, keys.get$I(i), mapNew, asArray ? v2 : null);

}if (asMap && !wasV2 ) return mapNew;
if (ptr == (args).length) {
if (!asArray) {
if (!wasV2) return mapNew;
v2.addLast$O(mapNew);
}return v2;
}return this.extractProperty$O$O$I$javajs_util_Lst$Z(mapNew, args, ptr, (wasV2 ? v2 : null), true);
}key=p$1.checkMap$java_util_Map$S$Z$javajs_util_Lst$O$I$Z.apply(this, [h, key, isWild, v2, args, ptr, isCaseSensitive]);
return (key != null  && !isWild  ? this.extractProperty$O$O$I$javajs_util_Lst$Z(h.get$O(key), args, ptr, null, true) : !isWild ? "" : wasV2 ? v2 : v2);
}if (Clazz.instanceOf(property, "javajs.util.Lst")) {
var v=property;
if (v2 == null ) v2=Clazz.new_($I$(7,1));
ptr--;
for (pt=0; pt < v.size$(); pt++) {
var o=v.get$I(pt);
if (Clazz.instanceOf(o, "java.util.Map") || Clazz.instanceOf(o, "javajs.util.Lst") || (Clazz.instanceOf(o, "org.jmol.script.SV")) && ((o).getMap$() != null  || (o).getList$() != null  )   ) this.extractProperty$O$O$I$javajs_util_Lst$Z(o, args, ptr, v2, true);
}
return v2;
}break;
}
return prop;
});

Clazz.newMeth(C$, 'getMapSubset$java_util_Map$S$java_util_Map$javajs_util_Lst', function (h, key, h2, v2) {
if (key.startsWith$S("\"") || key.startsWith$S("\'") ) key=$I$(5).trim$S$S(key, "\"\'");
var val=h.get$O(key);
if (val != null ) {
if (v2 == null ) h2.put$O$O(key, val);
 else v2.addLast$O(val);
return;
}for (var e, $e = h.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var k=e.getKey$();
if ($I$(5).isLike$S$S(k, key)) {
if (v2 == null ) h2.put$O$O(k, e.getValue$());
 else v2.addLast$O(e.getValue$());
}}
}, 1);

Clazz.newMeth(C$, 'compileSelect$org_jmol_script_SVA', function (args) {
var argsNew=null;
for (var i=args.length; --i >= 0; ) {
if (args[i].tok == 4) {
var key=args[i].value;
var ucKey=key.toUpperCase$();
if (ucKey.startsWith$S("WHERE")) ucKey=(key="SELECT * " + key).toUpperCase$();
if (ucKey.startsWith$S("SELECT ")) {
if (argsNew == null ) argsNew=$I$(6).arrayCopyObject$O$I(args, args.length);
ucKey=(key=key.substring$I(6).trim$()).toUpperCase$();
if (ucKey.startsWith$S("WHERE ") || ucKey.startsWith$S("WHEREIN ") ) ucKey=(key="* " + key).toUpperCase$();
var pt=ucKey.indexOf$S(" WHEREIN ");
var ext=(pt < 0 ? "" : key.indexOf$S(";") >= 0 ? ";**" : ",**");
if (pt < 0) pt=ucKey.indexOf$S(" WHERE ");
var select=key.substring$I$I(0, pt < 0 ? key.length$() : pt).trim$();
if (select.startsWith$S("(") && select.endsWith$S(")") ) select=select.substring$I$I(1, select.length$() - 1) + ";";
if (pt < 0) {
argsNew[i]=$I$(4,"newV$I$O",[1275082245, Clazz.array(java.lang.Object, -1, [p$1.getKeys$S.apply(this, [select]), null])]);
argsNew[i].myName=select;
} else {
select += ext;
argsNew[i]=$I$(4,"newV$I$O",[1275082245, Clazz.array(java.lang.Object, -1, [p$1.getKeys$S.apply(this, [select]), this.vwr.compileExpr$S(key.substring$I(pt + 6 + ext.length$() ).trim$())])]);
argsNew[i].myName=select;
}}}}
return (argsNew == null  ? args : argsNew);
}, p$1);

Clazz.newMeth(C$, 'getKeys$S', function (select) {
var keys=Clazz.new_($I$(7,1));
select=$I$(5,"rep$S$S$S",[$I$(5).rep$S$S$S(select, "**", "*"), ";", ","]) + ",";
var pt0=0;
var pt1=-1;
while ((pt1=select.indexOf$S$I(",", pt1 + 1)) >= 0){
if (pt1 > pt0) {
var key=select.substring$I$I(pt0, pt1);
if (key.equals$O("*")) {
if (keys.size$() == 0) return keys;
continue;
}keys.addLast$O(key);
pt0=pt1 + 1;
}}
return keys;
}, p$1);

Clazz.newMeth(C$, 'checkMap$java_util_Map$S$Z$javajs_util_Lst$O$I$Z', function (h, key, isWild, v2, args, ptr, isCaseSensitive) {
var isOK=(v2 == null  && h.containsKey$O(key) );
if (!isOK) {
var hasSemi=key.contains$CharSequence(";");
var keys=(hasSemi ? $I$(5).split$S$S(key, ";") : null);
var lckey=(isWild && !isCaseSensitive  ? key.toLowerCase$() : null);
for (var k, $k = h.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
if (hasSemi) {
for (var i=keys.length; --i >= 0; key=null) {
key=keys[i];
if (key.length$() == 0) continue;
if (isCaseSensitive) {
if (!$I$(5).isLike$S$S(k, key)) continue;
break;
}lckey=(key.indexOf$S("*") >= 0 ? key.toLowerCase$() : null);
if (p$1.checkKey$S$S$S.apply(this, [k, key, lckey])) break;
}
if (key == null ) continue;
} else if (isCaseSensitive ? !$I$(5).isLike$S$S(k, key) : !p$1.checkKey$S$S$S.apply(this, [k, key, lckey])) continue;
if (v2 == null ) return k;
v2.addLast$O(this.extractProperty$O$O$I$javajs_util_Lst$Z(h.get$O(k), args, ptr, null, true));
if (!isWild && !hasSemi ) return null;
}
}return (isOK ? key : null);
}, p$1);

Clazz.newMeth(C$, 'checkKey$S$S$S', function (k, key, lckey) {
return k.equalsIgnoreCase$S(key) || lckey != null  && $I$(5,"isLike$S$S",[k.toLowerCase$(), lckey])  ;
}, p$1);

Clazz.newMeth(C$, 'getPropertyName$I', function (propID) {
return (propID < 0 ? "" : C$.propertyTypes[propID * 3]);
}, 1);

Clazz.newMeth(C$, 'getParamType$I', function (propID) {
return (propID < 0 ? "" : C$.propertyTypes[propID * 3 + 1]);
}, 1);

Clazz.newMeth(C$, 'isReadableAsString$S', function (infoType) {
for (var i=C$.readableTypes.length; --i >= 0; ) if (infoType.equalsIgnoreCase$S(C$.readableTypes[i])) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'getPropertyAsObject$S$O$S', function (infoType, paramInfo, returnType) {
if (infoType.equals$O("tokenList")) {
return $I$(8).getTokensLike$S(paramInfo);
}var myParam=null;
var pt=infoType.indexOf$S("#");
if (pt > 0) {
myParam=Clazz.array(java.lang.Object, -1, [infoType.substring$I(pt + 1), paramInfo]);
infoType=infoType.substring$I$I(0, pt);
}var id=this.getPropertyNumber$S(infoType);
var iHaveParameter=(myParam != null  || paramInfo != null  && paramInfo !== ""   );
if (myParam == null ) myParam=(iHaveParameter ? paramInfo : this.getDefaultPropertyParam$I(id));
switch (id) {
case 46:
return this.vwr.getModelkitProperty$O(myParam);
case 0:
return p$1.getAppletInfo.apply(this, []);
case 5:
return p$1.getAnimationInfo.apply(this, []);
case 14:
return this.getAllAtomInfo$javajs_util_BS(this.vwr.getAtomBitSet$O(myParam));
case 24:
return this.vwr.getAuxiliaryInfoForAtoms$O(myParam);
case 15:
return this.getAllBondInfo$O(myParam);
case 25:
return p$1.getBoundBoxInfo.apply(this, []);
case 10:
return this.vwr.tm.fixedRotationCenter;
case 16:
return this.getAllChainInfo$javajs_util_BS(this.vwr.getAtomBitSet$O(myParam));
case 37:
return this.vwr.getProperty$S$S$O("DATA_API", "consoleText", null);
case 26:
return this.vwr.getDataObj$S$javajs_util_BS$I(myParam.toString(), null, -1);
case 33:
return this.vwr.getErrorMessageUn$();
case 28:
return this.vwr.evaluateExpression$O(myParam.toString());
case 20:
return this.vwr.getModelExtract$O$Z$Z$S(myParam, true, false, "MOL");
case 32:
return C$.getFileInfo$O$S(this.vwr.getFileData$(), myParam.toString());
case 45:
return this.vwr.readCifData$S$S(myParam.toString(), null);
case 1:
return this.vwr.fm.getFullPathName$Z(false);
case 2:
return this.vwr.getFileHeader$();
case 4:
case 3:
return (iHaveParameter ? this.vwr.getFileAsString3$S$Z$S(myParam.toString(), true, null) : this.vwr.getCurrentFileAsString$S("prop"));
case 27:
var params=myParam.toString().toLowerCase$();
return p$1.getImage$S$Z.apply(this, [params, params.indexOf$S("g64") < 0 && params.indexOf$S("base64") < 0  && (returnType == null  || returnType.equalsIgnoreCase$S("java") ) ]);
case 35:
return this.vwr.getShapeProperty$I$S(24, "info");
case 36:
return this.vwr.getShapeProperty$I$S(24, "data");
case 40:
return this.vwr.getNMRCalculation$().getInfo$S(myParam.toString());
case 41:
return p$1.getVariables$S.apply(this, [myParam.toString()]);
case 21:
return this.vwr.getStatusChanged$S(myParam.toString());
case 22:
return this.vwr;
case 38:
return this.vwr.getJspecViewProperties$O(myParam);
case 7:
return this.getLigandInfo$O(this.vwr.getAtomBitSet$O(myParam));
case 9:
return p$1.getMeasurementInfo.apply(this, []);
case 29:
return this.vwr.getMenu$S(myParam.toString());
case 23:
return this.vwr.sm.messageQueue;
case 30:
return this.vwr.getMinimizationInfo$();
case 6:
return this.getModelInfo$O(this.vwr.getAtomBitSet$O(myParam));
case 18:
return this.getMoleculeInfo$O(this.vwr.getAtomBitSet$O(myParam));
case 34:
return p$1.getMouseInfo.apply(this, []);
case 11:
return this.vwr.tm.getOrientationInfo$();
case 31:
return this.vwr.ms.getPointGroupInfo$javajs_util_BS(this.vwr.getAtomBitSet$O(myParam));
case 17:
return p$1.getAllPolymerInfo$javajs_util_BS.apply(this, [this.vwr.getAtomBitSet$O(myParam)]);
case 39:
return this.vwr.getScriptQueueInfo$();
case 8:
return p$1.getShapeInfo.apply(this, []);
case 19:
return this.vwr.getStateInfo3$S$I$I(myParam.toString(), 0, 0);
case 12:
return $I$(9).newM3$javajs_util_M3(this.vwr.tm.matrixRotate);
case 42:
return p$1.getAnnotationInfo$O$I.apply(this, [myParam, 1073741925]);
case 43:
return p$1.getAnnotationInfo$O$I.apply(this, [myParam, 1073742189]);
case 44:
myParam=$I$(4).oValue$O(myParam);
var info=(Clazz.instanceOf(myParam, "java.util.Map") ? myParam : null);
return (info == null  ? null : this.vwr.sm.processService$java_util_Map(info));
}
var data=Clazz.array(String, [47]);
for (var i=0; i < 47; i++) {
var paramType=C$.getParamType$I(i);
var paramDefault=this.getDefaultPropertyParam$I(i);
var name=C$.getPropertyName$I(i);
data[i]=(name.length$() == 0 || name.charAt$I(0) == "X"  ? "" : name + (paramType !== ""  ? " " + C$.getParamType$I(i) + (paramDefault !== ""  ? " #default: " + this.getDefaultPropertyParam$I(i) : "")  : ""));
}
$I$(10).sort$OA(data);
var info=Clazz.new_($I$(11,1));
info.append$S("getProperty ERROR\n").append$S(infoType).append$S("?\nOptions include:\n");
for (var i=0; i < 47; i++) if (data[i].length$() > 0) info.append$S("\n getProperty ").append$S(data[i]);

return info.toString();
}, p$1);

Clazz.newMeth(C$, 'getImage$S$Z', function (params, asBytes) {
var height=-1;
var width=-1;
var pt;
if ((pt=params.indexOf$S("height=")) >= 0) height=$I$(5,"parseInt$S",[params.substring$I(pt + 7)]);
if ((pt=params.indexOf$S("width=")) >= 0) width=$I$(5,"parseInt$S",[params.substring$I(pt + 6)]);
if (width < 0 && height < 0 ) height=width=-1;
 else if (width < 0) width=height;
 else height=width;
var type="JPG";
if (params.indexOf$S("type=") >= 0) type=$I$(5,"getTokens$S",[$I$(5,"replaceWithCharacter$S$S$C",[params.substring$I(params.indexOf$S("type=") + 5), ";,", " "])])[0];
var errMsg=Clazz.array(String, [1]);
var bytes=this.vwr.getImageAsBytes$S$I$I$I$SA(type.toUpperCase$(), width, height, -1, errMsg);
return (errMsg[0] != null  ? errMsg[0] : asBytes ? Clazz.new_($I$(12,1).c$$BA,[bytes]) : $I$(13).getBase64$BA(bytes).toString());
}, p$1);

Clazz.newMeth(C$, 'getVariables$S', function (name) {
return (name.toLowerCase$().equals$O("all") ? this.vwr.g.getAllVariables$() : this.vwr.evaluateExpressionAsVariable$O(name));
}, p$1);

Clazz.newMeth(C$, 'getFileInfo$O$S', function (objHeader, type) {
var ht=Clazz.new_($I$(1,1));
if (objHeader == null ) return ht;
var haveType=(type != null  && type.length$() > 0 );
if (Clazz.instanceOf(objHeader, "java.util.Map")) {
return (haveType ? (objHeader).get$O(type) : objHeader);
}var lines=$I$(5).split$S$S(objHeader, "\n");
if (lines.length == 0 || lines[0].length$() < 6  || lines[0].charAt$I(6) != " "  || !lines[0].substring$I$I(0, 6).equals$O(lines[0].substring$I$I(0, 6).toUpperCase$()) ) {
ht.put$O$O("fileHeader", objHeader);
return ht;
}var keyLast="";
var sb=Clazz.new_($I$(11,1));
if (haveType) type=type.toUpperCase$();
var key="";
for (var i=0; i < lines.length; i++) {
var line=lines[i];
if (line.length$() < 12) continue;
key=line.substring$I$I(0, 6).trim$();
var cont=line.substring$I$I(7, 10).trim$();
if (key.equals$O("REMARK")) {
key += cont;
}if (!key.equals$O(keyLast)) {
if (haveType && keyLast.equals$O(type) ) return sb.toString();
if (!haveType) {
ht.put$O$O(keyLast, sb.toString());
sb=Clazz.new_($I$(11,1));
}keyLast=key;
}if (!haveType || key.equals$O(type) ) sb.append$S(line).appendC$C("\n");
}
if (!haveType) {
ht.put$O$O(keyLast, sb.toString());
}if (haveType) return (key.equals$O(type) ? sb.toString() : "");
return ht;
}, 1);

Clazz.newMeth(C$, 'getMoleculeInfo$O', function (atomExpression) {
var bsAtoms=this.vwr.getAtomBitSet$O(atomExpression);
var molecules=this.vwr.ms.getMolecules$();
var V=Clazz.new_($I$(7,1));
var bsTemp=Clazz.new_($I$(14,1));
for (var i=0; i < molecules.length; i++) {
bsTemp=$I$(15).copy$javajs_util_BS(bsAtoms);
var m=molecules[i];
bsTemp.and$javajs_util_BS(m.atomList);
if (bsTemp.length$() > 0) {
var info=Clazz.new_($I$(1,1));
info.put$O$O("mf", m.getMolecularFormula$Z$FA$Z(true, null, false));
info.put$O$O("number", Integer.valueOf$I(m.moleculeIndex + 1));
info.put$O$O("modelNumber", this.vwr.ms.getModelNumberDotted$I(m.modelIndex));
info.put$O$O("numberInModel", Integer.valueOf$I(m.indexInModel + 1));
info.put$O$O("nAtoms", Integer.valueOf$I(m.ac));
info.put$O$O("nElements", Integer.valueOf$I(m.nElements));
V.addLast$O(info);
}}
return V;
});

Clazz.newMeth(C$, 'getModelInfo$O', function (atomExpression) {
var bsModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(this.vwr.getAtomBitSet$O(atomExpression), false);
var m=this.vwr.ms;
var info=Clazz.new_($I$(1,1));
info.put$O$O("modelSetName", m.modelSetName);
info.put$O$O("modelIndex", Integer.valueOf$I(this.vwr.am.cmi));
info.put$O$O("modelCount", Integer.valueOf$I(m.mc));
info.put$O$O("isTainted", Boolean.valueOf$Z(m.tainted != null ));
info.put$O$O("canSkipLoad", Boolean.valueOf$Z(m.canSkipLoad));
info.put$O$O("modelSetHasVibrationVectors", Boolean.valueOf$Z(m.modelSetHasVibrationVectors$()));
if (m.modelSetProperties != null ) {
info.put$O$O("modelSetProperties", m.modelSetProperties);
}info.put$O$O("modelCountSelected", Integer.valueOf$I(bsModels.cardinality$()));
info.put$O$O("modelsSelected", bsModels);
var vModels=Clazz.new_($I$(7,1));
m.getMolecules$();
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
var model=Clazz.new_($I$(1,1));
model.put$O$O("_ipt", Integer.valueOf$I(i));
model.put$O$O("num", Integer.valueOf$I(m.getModelNumber$I(i)));
model.put$O$O("file_model", m.getModelNumberDotted$I(i));
model.put$O$O("name", m.getModelName$I(i));
var s=m.getModelTitle$I(i);
if (s != null ) model.put$O$O("title", s);
s=m.getModelFileName$I(i);
if (s != null ) model.put$O$O("file", s);
s=m.getInfo$I$S(i, "modelID");
if (s != null ) model.put$O$O("id", s);
model.put$O$O("vibrationVectors", Boolean.valueOf$Z(this.vwr.modelHasVibrationVectors$I(i)));
var mi=m.am[i];
model.put$O$O("atomCount", Integer.valueOf$I(mi.act));
model.put$O$O("bondCount", Integer.valueOf$I(mi.getBondCount$()));
model.put$O$O("groupCount", Integer.valueOf$I(mi.getGroupCount$()));
model.put$O$O("moleculeCount", Integer.valueOf$I(mi.moleculeCount));
if (mi.isBioModel) model.put$O$O("polymerCount", Integer.valueOf$I((mi).getBioPolymerCount$()));
model.put$O$O("chainCount", Integer.valueOf$I(m.getChainCountInModelWater$I$Z(i, true)));
if (mi.properties != null ) {
model.put$O$O("modelProperties", mi.properties);
}var energy=m.getInfo$I$S(i, "Energy");
if (energy != null ) {
model.put$O$O("energy", energy);
}model.put$O$O("atomCount", Integer.valueOf$I(mi.act));
vModels.addLast$O(model);
}
info.put$O$O("models", vModels);
return info;
});

Clazz.newMeth(C$, 'getLigandInfo$O', function (atomExpression) {
var bsAtoms=this.vwr.getAtomBitSet$O(atomExpression);
var bsSolvent=this.vwr.getAtomBitSet$O("solvent");
var info=Clazz.new_($I$(1,1));
var ligands=Clazz.new_($I$(7,1));
info.put$O$O("ligands", ligands);
var ms=this.vwr.ms;
var bsExclude=$I$(15).copyInvert$javajs_util_BS$I(bsAtoms, ms.ac);
bsExclude.or$javajs_util_BS(bsSolvent);
var atoms=ms.at;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) if (atoms[i].group.isProtein$() || atoms[i].group.isDna$() || atoms[i].group.isRna$()  ) atoms[i].group.setAtomBitsAndClear$javajs_util_BS$javajs_util_BS(bsExclude, bsAtoms);

var bsModelAtoms=Clazz.array($I$(14), [ms.mc]);
for (var i=ms.mc; --i >= 0; ) {
bsModelAtoms[i]=this.vwr.getModelUndeletedAtomsBitSet$I(i);
bsModelAtoms[i].andNot$javajs_util_BS(bsExclude);
}
var molList=$I$(16).getMolecules$org_jmol_util_NodeA$javajs_util_BSA$javajs_util_Lst$javajs_util_BS(atoms, bsModelAtoms, null, bsExclude);
for (var i=0; i < molList.length; i++) {
var bs=molList[i].atomList;
var ligand=Clazz.new_($I$(1,1));
ligands.addLast$O(ligand);
ligand.put$O$O("atoms", $I$(3).eBS$javajs_util_BS(bs));
var names="";
var sep="";
var lastGroup=null;
var iChainLast=0;
var sChainLast=null;
var reslist="";
var model="";
var resnolast=2147483647;
var resnofirst=2147483647;
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) {
var atom=atoms[j];
if (lastGroup === atom.group ) continue;
lastGroup=atom.group;
var resno=atom.getResno$();
var chain=atom.getChainID$();
if (resnolast != resno - 1) {
if (reslist.length$() != 0 && resnolast != resnofirst ) reslist += "-" + resnolast;
chain=-1;
resnofirst=resno;
}model="/" + ms.getModelNumberDotted$I(atom.mi);
if (iChainLast != 0 && chain != iChainLast ) reslist += ":" + sChainLast + model ;
if (chain == -1) reslist += " " + resno;
resnolast=resno;
iChainLast=atom.getChainID$();
sChainLast=atom.getChainIDStr$();
names += sep + atom.getGroup3$Z(false);
sep="-";
}
reslist += (resnofirst == resnolast ? "" : "-" + resnolast) + (iChainLast == 0 ? "" : ":" + sChainLast) + model ;
ligand.put$O$O("groupNames", names);
ligand.put$O$O("residueList", reslist.substring$I(1));
}
return info;
});

Clazz.newMeth(C$, 'getAtomData$S$S$Z', function (atomExpression, type, allTrajectories) {
if (!atomExpression.startsWith$S("{")) atomExpression="{" + atomExpression + "}" ;
var isUser=type.toLowerCase$().startsWith$S("user:");
var isProp=type.toLowerCase$().startsWith$S("property_");
if (allTrajectories && !isUser && !isProp  ) type=type.toUpperCase$();
var exp=(isProp ? "%{" + type + "}"  : isUser ? type.substring$I(5) : type.equals$O("xyzrn") ? "%-2e %8.3x %8.3y %8.3z %4.2[vdw] 1 [%n]%r.%a#%i" : type.equals$O("xyzvib") ? "%-2e %10.5x %10.5y %10.5z %10.5vx %10.5vy %10.5vz" : type.equals$O("pdb") ? "{selected and not hetero}.label(\"ATOM  %5i %-4a%1A%3.3n %1c%4R%1E   %8.3x%8.3y%8.3z%6.2Q%6.2b          %2e  \").lines+{selected and hetero}.label(\"HETATM%5i %-4a%1A%3.3n %1c%4R%1E   %8.3x%8.3y%8.3z%6.2Q%6.2b          %2e  \").lines" : type.equals$O("xyz") ? "%-2e %10.5x %10.5y %10.5z" : type.equals$O("cfi") ? "print '$CFI from Jmol" + $I$(17).getJmolVersion$() + "\n'+{selected}.count + ' ' + {selected}.bonds.count + '\n'   + {selected}.format('%10.0[atomno] %10.0[elemno] %10.4[xyz]')  + {selected}.bonds.format('%i1 %i2') + '\n' + {selected}.bonds.format('%ORDER')"  : null);
if (exp == null ) return this.getModelExtract$javajs_util_BS$Z$Z$S$Z(this.vwr.getAtomBitSet$O(atomExpression), false, false, type.toUpperCase$(), allTrajectories);
if (exp.startsWith$S("print")) {
if (!atomExpression.equals$O("selected")) exp=$I$(5,"rep$S$S$S",[exp, "selected", atomExpression.substring$I$I(1, atomExpression.length$() - 1)]);
return this.vwr.runScriptCautiously$S(exp);
}if (exp.indexOf$S("label") < 0) exp=atomExpression + ".label(\"" + exp + "\").lines" ;
 else if (!atomExpression.equals$O("selected")) exp=$I$(5,"rep$S$S$S",[exp, "selected", atomExpression.substring$I$I(1, atomExpression.length$() - 1)]);
return this.vwr.evaluateExpression$O(exp);
});

Clazz.newMeth(C$, 'getModelExtract$javajs_util_BS$Z$Z$S$Z', function (bs, doTransform, isModelKit, type, allTrajectories) {
if (type.equalsIgnoreCase$S("CIF")) return p$1.getModelCif$javajs_util_BS.apply(this, [bs]);
if (type.equalsIgnoreCase$S("QCJSON")) return p$1.getQCJSON$javajs_util_BS.apply(this, [bs]);
if (type.equalsIgnoreCase$S("CML")) return this.getModelCml$javajs_util_BS$I$Z$Z$Z(bs, 2147483647, true, doTransform, allTrajectories);
if (type.equals$O("PDB") || type.equals$O("PQR") ) return this.getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z$Z(bs, null, type.equals$O("PQR"), doTransform, allTrajectories);
var asV3000=type.equalsIgnoreCase$S("V3000");
var asSDF=type.equalsIgnoreCase$S("SDF");
var noAromatic=type.equalsIgnoreCase$S("MOL");
var asXYZVIB=(!doTransform && type.equalsIgnoreCase$S("XYZVIB") );
var asXYZRN=type.equalsIgnoreCase$S("XYZRN");
var isXYZ=type.toUpperCase$().startsWith$S("XYZ");
var asJSON=type.equalsIgnoreCase$S("JSON") || type.equalsIgnoreCase$S("CD") ;
var mol=Clazz.new_($I$(11,1));
var ms=this.vwr.ms;
var bsAtoms=$I$(15).copy$javajs_util_BS(bs);
var bsModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(bsAtoms, true);
if (!isXYZ && !asJSON ) {
var title=this.vwr.ms.getFrameTitle$I(bsModels.nextSetBit$I(0));
title=(title != null  ? title.replace$C$C("\n", " ") : isModelKit ? "Jmol Model Kit" : $I$(18,"fixDOSName$S",[this.vwr.fm.getFullPathName$Z(false)]));
if (title.length$() > 80) title=title.substring$I$I(0, 77) + "...";
mol.append$S(title);
var version=$I$(17).getJmolVersion$();
mol.append$S("\n__Jmol-").append$S(version.substring$I$I(0, 2));
var cMM;
var cDD;
var cYYYY;
var cHH;
var cmm;
{
var c = new Date(); cMM = c.getMonth(); cDD = c.getDate();
cYYYY = c.getFullYear(); cHH = c.getHours(); cmm = c.getMinutes();
}
$I$(5,"rightJustify$javajs_util_SB$S$S",[mol, "_00", "" + (1 + cMM)]);
$I$(5).rightJustify$javajs_util_SB$S$S(mol, "00", "" + cDD);
mol.append$S(("" + cYYYY).substring$I$I(2, 4));
$I$(5).rightJustify$javajs_util_SB$S$S(mol, "00", "" + cHH);
$I$(5).rightJustify$javajs_util_SB$S$S(mol, "00", "" + cmm);
mol.append$S("3D 1   1.00000     0.00000     0");
mol.append$S("\nJmol version ").append$S($I$(17).getJmolVersion$()).append$S(" EXTRACT: ").append$S($I$(3).eBS$javajs_util_BS(bs)).append$S("\n");
}var atoms=ms.at;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (doTransform && atoms[i].isDeleted$() ) bsAtoms.clear$I(i);

var bsBonds=C$.getCovalentBondsForAtoms$org_jmol_modelset_BondA$I$javajs_util_BS(ms.bo, ms.bondCount, bsAtoms);
if (!asXYZVIB && bsAtoms.isEmpty$() ) return "";
var isOK=true;
if (ms.trajectory != null  && !allTrajectories ) ms.trajectory.selectDisplayed$javajs_util_BS(bsModels);
var q=(doTransform ? this.vwr.tm.getRotationQ$() : null);
if (isXYZ) {
var tokensXYZ=$I$(19,"compile$org_jmol_viewer_Viewer$S$C$java_util_Map",[this.vwr, (asXYZRN ? "%-2e _XYZ_ %4.2[vdw] 1 [%n]%r.%a#%i\n" : "%-2e _XYZ_\n"), "\u0000", null]);
var tokensVib=(asXYZVIB ? $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "%-2e _XYZ_ %12.5vx %12.5vy %12.5vz\n", "\u0000", null) : null);
var ptTemp=Clazz.new_($I$(20,1));
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
var bsTemp=$I$(15).copy$javajs_util_BS(bsAtoms);
bsTemp.and$javajs_util_BS(ms.getModelAtomBitSetIncludingDeleted$I$Z(i, false));
if (bsTemp.isEmpty$()) continue;
mol.appendI$I(bsTemp.cardinality$()).appendC$C("\n");
var props=ms.am[i].properties;
mol.append$S("Model[" + (i + 1) + "]: " );
if (ms.frameTitles[i] != null  && ms.frameTitles[i].length$() > 0 ) {
mol.append$S(ms.frameTitles[i].replace$C$C("\n", " "));
} else if (props == null ) {
mol.append$S("Jmol " + $I$(17).getJmolVersion$());
} else {
var sb=Clazz.new_($I$(11,1));
var e=props.propertyNames$();
var path=null;
while (e.hasMoreElements$()){
var propertyName=e.nextElement$();
if (propertyName.equals$O(".PATH")) path=props.getProperty$S(propertyName);
 else sb.append$S(";").append$S(propertyName).append$S("=").append$S(props.getProperty$S(propertyName));
}
if (path != null ) sb.append$S(";PATH=").append$S(path);
path=sb.substring$I(sb.length$() > 0 ? 1 : 0);
mol.append$S(path.replace$C$C("\n", " "));
}mol.appendC$C("\n");
var o=Clazz.array(java.lang.Object, -1, [ptTemp]);
for (var j=bsTemp.nextSetBit$I(0); j >= 0; j=bsTemp.nextSetBit$I(j + 1)) {
var s=$I$(19,"formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3",[this.vwr, atoms[j], (asXYZVIB && ms.getVibration$I$Z(j, false) != null   ? tokensVib : tokensXYZ), "\u0000", null, ptTemp]);
C$.getPointTransf$I$org_jmol_modelset_ModelSet$org_jmol_modelset_Atom$javajs_util_Quat$javajs_util_P3(i, ms, atoms[j], q, ptTemp);
s=$I$(5,"rep$S$S$S",[s, "_XYZ_", $I$(5).sprintf$S$S$OA("%12.5p %12.5p %12.5p", "p", o)]);
mol.append$S(s);
}
}
} else {
var mw=($I$(21).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MolWriter", this.vwr, "write")).setViewer$org_jmol_viewer_Viewer(this.vwr);
if (asSDF) {
var header=mol.toString();
mol=Clazz.new_($I$(11,1));
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
mol.append$S(header);
var bsTemp=$I$(15).copy$javajs_util_BS(bsAtoms);
bsTemp.and$javajs_util_BS(ms.getModelAtomBitSetIncludingDeleted$I$Z(i, false));
bsBonds=C$.getCovalentBondsForAtoms$org_jmol_modelset_BondA$I$javajs_util_BS(ms.bo, ms.bondCount, bsTemp);
if (!(isOK=mw.addMolFile$I$javajs_util_SB$javajs_util_BS$javajs_util_BS$Z$Z$Z$javajs_util_Quat(i, mol, bsTemp, bsBonds, false, false, noAromatic, q))) break;
}
} else {
isOK=mw.addMolFile$I$javajs_util_SB$javajs_util_BS$javajs_util_BS$Z$Z$Z$javajs_util_Quat(-1, mol, bsAtoms, bsBonds, asV3000, asJSON, noAromatic, q);
}}return (isOK ? mol.toString() : "ERROR: Too many atoms or bonds -- use V3000 format.");
});

Clazz.newMeth(C$, 'getQCJSON$javajs_util_BS', function (bs) {
var writer=$I$(21).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.adapter.writers.QCJSONWriter", this.vwr, "script");
writer.set$org_jmol_viewer_Viewer$java_io_OutputStream(this.vwr, null);
writer.writeJSON$();
return writer.toString();
}, p$1);

Clazz.newMeth(C$, 'getModelCif$javajs_util_BS', function (bs) {
var sb=Clazz.new_($I$(11,1));
sb.append$S("# primitive CIF file created by Jmol " + $I$(17).getJmolVersion$() + "\ndata_primitive" );
var unitcell=this.vwr.ms.getUnitCellForAtom$I(bs.nextSetBit$I(0));
var params=(unitcell == null  ? Clazz.array(Float.TYPE, -1, [1, 1, 1, 90, 90, 90]) : unitcell.getUnitCellAsArray$Z(false));
sb.append$S("\n_cell_length_a ").appendF$F(params[0]);
sb.append$S("\n_cell_length_b ").appendF$F(params[1]);
sb.append$S("\n_cell_length_c ").appendF$F(params[2]);
sb.append$S("\n_cell_angle_alpha ").appendF$F(params[3]);
sb.append$S("\n_cell_angle_beta ").appendF$F(params[4]);
sb.append$S("\n_cell_angle_gamma ").appendF$F(params[5]);
sb.append$S("\n\n_symmetry_space_group_name_H-M \'P 1\'\nloop_\n_space_group_symop_operation_xyz\n\'x,y,z\'");
sb.append$S("\n\nloop_\n_atom_site_label\n_atom_site_fract_x\n_atom_site_fract_y\n_atom_site_fract_z\n");
var atoms=this.vwr.ms.at;
var p=Clazz.new_($I$(20,1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=atoms[i];
p.setT$javajs_util_T3(a);
if (unitcell != null ) unitcell.toFractional$javajs_util_T3$Z(p, false);
sb.append$S(a.getElementSymbol$()).append$S("\t").append$S($I$(5).formatF$F$I$I$Z$Z(p.x, 10, 5, true, false)).append$S("\t").append$S($I$(5).formatF$F$I$I$Z$Z(p.y, 10, 5, true, false)).append$S("\t").append$S($I$(5).formatF$F$I$I$Z$Z(p.z, 10, 5, true, false)).append$S("\n");
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getCovalentBondsForAtoms$org_jmol_modelset_BondA$I$javajs_util_BS', function (bonds, bondCount, bsAtoms) {
var bsBonds=Clazz.new_($I$(14,1));
for (var i=0; i < bondCount; i++) {
var bond=bonds[i];
if (bsAtoms.get$I(bond.atom1.i) && bsAtoms.get$I(bond.atom2.i) && bond.isCovalent$()  ) bsBonds.set$I(i);
}
return bsBonds;
}, 1);

Clazz.newMeth(C$, 'getPointTransf$I$org_jmol_modelset_ModelSet$org_jmol_modelset_Atom$javajs_util_Quat$javajs_util_P3', function (i, ms, a, q, pTemp) {
if (ms.isTrajectory$I(i >= 0 ? i : a.mi)) ms.trajectory.getFractional$org_jmol_modelset_Atom$javajs_util_P3(a, pTemp);
 else pTemp.setT$javajs_util_T3(a);
if (q != null ) q.transform2$javajs_util_T3$javajs_util_T3(pTemp, pTemp);
}, 1);

Clazz.newMeth(C$, 'getChimeInfo$I$javajs_util_BS', function (tok, bs) {
switch (tok) {
case 1073741982:
break;
case 1073741863:
return p$1.getBasePairInfo$javajs_util_BS.apply(this, [bs]);
default:
return p$1.getChimeInfoA$org_jmol_modelset_AtomA$I$javajs_util_BS.apply(this, [this.vwr.ms.at, tok, bs]);
}
var sb=Clazz.new_($I$(11,1));
this.vwr.getChimeMessenger$().getAllChimeInfo$javajs_util_SB(sb);
return sb.appendC$C("\n").toString().substring$I(1);
});

Clazz.newMeth(C$, 'getChimeInfoA$org_jmol_modelset_AtomA$I$javajs_util_BS', function (atoms, tok, bs) {
var info=Clazz.new_($I$(11,1));
info.append$S("\n");
var s="";
var clast=null;
var glast=null;
var modelLast=-1;
var n=0;
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=atoms[i];
switch (tok) {
default:
return "";
case 1113589787:
s=a.getInfo$();
break;
case 1140850689:
s="" + a.getAtomNumber$();
break;
case 1086324742:
s=a.getGroup3$Z(false);
break;
case 1086326788:
case 1073742120:
case 1086324744:
case 1086324743:
var id=a.getChainID$();
s=(id == 0 ? " " : a.getChainIDStr$());
if (id >= 300) s=$I$(5).esc$S(s);
switch (tok) {
case 1073742120:
s="[" + a.getGroup3$Z(false) + "]" + a.group.getSeqcodeString$() + ":" + s ;
break;
case 1086324744:
case 1086324743:
if (a.mi != modelLast) {
info.appendC$C("\n");
n=0;
modelLast=a.mi;
info.append$S("Model " + a.getModelNumber$());
glast=null;
clast=null;
}if (a.group.chain !== clast ) {
info.appendC$C("\n");
n=0;
clast=a.group.chain;
info.append$S("Chain " + s + ":\n" );
glast=null;
}var g=a.group;
if (g !== glast ) {
glast=g;
if (tok == 1086324743) {
info.append$S(a.getGroup1$C("?"));
} else {
if ((n++) % 5 == 0 && n > 1 ) info.appendC$C("\n");
$I$(5,"leftJustify$javajs_util_SB$S$S",[info, "          ", "[" + a.getGroup3$Z(false) + "]" + a.getResno$() + " " ]);
}}continue;
}
break;
}
if (info.indexOf$S("\n" + s + "\n" ) < 0) info.append$S(s).appendC$C("\n");
}
if (tok == 1086324744) info.appendC$C("\n");
return info.toString().substring$I(1);
}, p$1);

Clazz.newMeth(C$, 'getModelFileInfo$javajs_util_BS', function (frames) {
var ms=this.vwr.ms;
var sb=Clazz.new_($I$(11,1));
for (var i=0; i < ms.mc; ++i) {
if (frames != null  && !frames.get$I(i) ) continue;
var s="[\"" + ms.getModelNumberDotted$I(i) + "\"] = " ;
sb.append$S("\n\nfile").append$S(s).append$S($I$(5,"esc$S",[ms.getModelFileName$I(i)]));
var id=ms.getInfo$I$S(i, "modelID");
if (id != null ) sb.append$S("\nid").append$S(s).append$S($I$(5).esc$S(id));
sb.append$S("\ntitle").append$S(s).append$S($I$(5,"esc$S",[ms.getModelTitle$I(i)]));
sb.append$S("\nname").append$S(s).append$S($I$(5,"esc$S",[ms.getModelName$I(i)]));
sb.append$S("\ntype").append$S(s).append$S($I$(5,"esc$S",[ms.getModelFileType$I(i)]));
}
return sb.toString();
});

Clazz.newMeth(C$, 'getAllAtomInfo$javajs_util_BS', function (bs) {
var V=Clazz.new_($I$(7,1));
var ptTemp=Clazz.new_($I$(20,1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
V.addLast$O(p$1.getAtomInfoLong$I$javajs_util_P3.apply(this, [i, ptTemp]));
}
return V;
});

Clazz.newMeth(C$, 'getAtomInfoLong$I$javajs_util_P3', function (i, ptTemp) {
var ms=this.vwr.ms;
var atom=ms.at[i];
var info=Clazz.new_($I$(1,1));
ms.getAtomIdentityInfo$I$java_util_Map$javajs_util_P3(i, info, ptTemp);
info.put$O$O("element", ms.getElementName$I(i));
info.put$O$O("elemno", Integer.valueOf$I(ms.at[i].getElementNumber$()));
info.put$O$O("x", Float.valueOf$F(atom.x));
info.put$O$O("y", Float.valueOf$F(atom.y));
info.put$O$O("z", Float.valueOf$F(atom.z));
info.put$O$O("coord", $I$(20).newP$javajs_util_T3(atom));
if (ms.vibrations != null  && ms.vibrations[i] != null  ) ms.vibrations[i].getInfo$java_util_Map(info);
info.put$O$O("bondCount", Integer.valueOf$I(atom.getCovalentBondCount$()));
info.put$O$O("radius", Float.valueOf$F((atom.getRasMolRadius$() / 120.0)));
info.put$O$O("model", atom.getModelNumberForLabel$());
var shape=atom.atomPropertyString$org_jmol_viewer_Viewer$I(this.vwr, 1086324748);
if (shape != null ) info.put$O$O("shape", shape);
info.put$O$O("visible", Boolean.valueOf$Z(atom.checkVisible$()));
info.put$O$O("clickabilityFlags", Integer.valueOf$I(atom.clickabilityFlags));
info.put$O$O("visibilityFlags", Integer.valueOf$I(atom.shapeVisibilityFlags));
info.put$O$O("spacefill", Float.valueOf$F(atom.getRadius$()));
var strColor=$I$(3,"escapeColor$I",[this.vwr.gdata.getColorArgbOrGray$H(atom.colixAtom)]);
if (strColor != null ) info.put$O$O("color", strColor);
info.put$O$O("colix", Integer.valueOf$I(atom.colixAtom));
var isTranslucent=$I$(22).isColixTranslucent$H(atom.colixAtom);
if (isTranslucent) info.put$O$O("translucent", Boolean.valueOf$Z(isTranslucent));
info.put$O$O("formalCharge", Integer.valueOf$I(atom.getFormalCharge$()));
info.put$O$O("partialCharge", Float.valueOf$F(atom.getPartialCharge$()));
var d=atom.getSurfaceDistance100$() / 100.0;
if (d >= 0 ) info.put$O$O("surfaceDistance", Float.valueOf$F(d));
if (ms.am[atom.mi].isBioModel) {
info.put$O$O("resname", atom.getGroup3$Z(false));
var insCode=atom.group.getInsertionCode$();
var seqNum=atom.getResno$();
if (seqNum > 0) info.put$O$O("resno", Integer.valueOf$I(seqNum));
if (insCode.$c() != 0 ) info.put$O$O("insertionCode", "" + insCode);
info.put$O$O("name", ms.at[i].getAtomName$());
info.put$O$O("chain", atom.getChainIDStr$());
info.put$O$O("atomID", Integer.valueOf$I(atom.atomID));
info.put$O$O("groupID", Integer.valueOf$I(atom.group.groupID));
if (atom.altloc != "\u0000") info.put$O$O("altLocation", "" + atom.altloc);
info.put$O$O("structure", Integer.valueOf$I(atom.group.getProteinStructureType$().getId$()));
info.put$O$O("polymerLength", Integer.valueOf$I(atom.group.getBioPolymerLength$()));
info.put$O$O("occupancy", Integer.valueOf$I(atom.getOccupancy100$()));
var temp=atom.getBfactor100$();
info.put$O$O("temp", Integer.valueOf$I((temp/100|0)));
}return info;
}, p$1);

Clazz.newMeth(C$, 'getAllBondInfo$O', function (bsOrArray) {
var v=Clazz.new_($I$(7,1));
var ms=this.vwr.ms;
var bondCount=ms.bondCount;
var bonds=ms.bo;
var bs1;
if (Clazz.instanceOf(bsOrArray, "java.lang.String")) {
bsOrArray=this.vwr.getAtomBitSet$O(bsOrArray);
}var ptTemp=Clazz.new_($I$(20,1));
if (Clazz.instanceOf(bsOrArray, Clazz.array($I$(14), -1))) {
bs1=(bsOrArray)[0];
var bs2=(bsOrArray)[1];
for (var i=0; i < bondCount; i++) {
var ia=bonds[i].atom1.i;
var ib=bonds[i].atom2.i;
if (bs1.get$I(ia) && bs2.get$I(ib)  || bs2.get$I(ia) && bs1.get$I(ib)  ) v.addLast$O(p$1.getBondInfo$I$javajs_util_P3.apply(this, [i, ptTemp]));
}
} else if (Clazz.instanceOf(bsOrArray, "org.jmol.modelset.BondSet")) {
bs1=bsOrArray;
for (var i=bs1.nextSetBit$I(0); i >= 0 && i < bondCount ; i=bs1.nextSetBit$I(i + 1)) v.addLast$O(p$1.getBondInfo$I$javajs_util_P3.apply(this, [i, ptTemp]));

} else if (Clazz.instanceOf(bsOrArray, "javajs.util.BS")) {
bs1=bsOrArray;
var thisAtom=(bs1.cardinality$() == 1 ? bs1.nextSetBit$I(0) : -1);
for (var i=0; i < bondCount; i++) {
if (thisAtom >= 0 ? (bonds[i].atom1.i == thisAtom || bonds[i].atom2.i == thisAtom ) : bs1.get$I(bonds[i].atom1.i) && bs1.get$I(bonds[i].atom2.i) ) v.addLast$O(p$1.getBondInfo$I$javajs_util_P3.apply(this, [i, ptTemp]));
}
}return v;
});

Clazz.newMeth(C$, 'getBondInfo$I$javajs_util_P3', function (i, ptTemp) {
var bond=this.vwr.ms.bo[i];
var atom1=bond.atom1;
var atom2=bond.atom2;
var info=Clazz.new_($I$(1,1));
info.put$O$O("_bpt", Integer.valueOf$I(i));
var infoA=Clazz.new_($I$(1,1));
this.vwr.ms.getAtomIdentityInfo$I$java_util_Map$javajs_util_P3(atom1.i, infoA, ptTemp);
var infoB=Clazz.new_($I$(1,1));
this.vwr.ms.getAtomIdentityInfo$I$java_util_Map$javajs_util_P3(atom2.i, infoB, ptTemp);
info.put$O$O("atom1", infoA);
info.put$O$O("atom2", infoB);
info.put$O$O("jmol_order", "0x" + Integer.toHexString$I(bond.order));
info.put$O$O("order", Float.valueOf$S($I$(23).getBondOrderNumberFromOrder$I(bond.order)));
info.put$O$O("type", $I$(23).getBondOrderNameFromOrder$I(bond.order));
info.put$O$O("radius", Float.valueOf$F((bond.mad / 2000.0)));
info.put$O$O("length_Ang", Float.valueOf$F(atom1.distance$javajs_util_T3(atom2)));
info.put$O$O("visible", Boolean.valueOf$Z(bond.shapeVisibilityFlags != 0));
var strColor=$I$(3,"escapeColor$I",[this.vwr.gdata.getColorArgbOrGray$H(bond.colix)]);
if (strColor != null ) info.put$O$O("color", strColor);
info.put$O$O("colix", Integer.valueOf$I(bond.colix));
if ($I$(22).isColixTranslucent$H(bond.colix)) info.put$O$O("translucent", Boolean.TRUE);
return info;
}, p$1);

Clazz.newMeth(C$, 'getAllChainInfo$javajs_util_BS', function (bs) {
var finalInfo=Clazz.new_($I$(1,1));
var modelVector=Clazz.new_($I$(7,1));
var modelCount=this.vwr.ms.mc;
for (var i=0; i < modelCount; ++i) {
var modelInfo=Clazz.new_($I$(1,1));
var info=p$1.getChainInfo$I$javajs_util_BS.apply(this, [i, bs]);
if (info.size$() > 0) {
modelInfo.put$O$O("modelIndex", Integer.valueOf$I(i));
modelInfo.put$O$O("chains", info);
modelVector.addLast$O(modelInfo);
}}
finalInfo.put$O$O("models", modelVector);
return finalInfo;
});

Clazz.newMeth(C$, 'getChainInfo$I$javajs_util_BS', function (modelIndex, bs) {
var model=this.vwr.ms.am[modelIndex];
var nChains=model.getChainCount$Z(true);
var infoChains=Clazz.new_($I$(7,1));
var ptTemp=Clazz.new_($I$(20,1));
for (var i=0; i < nChains; i++) {
var chain=model.getChainAt$I(i);
var infoChain=Clazz.new_($I$(7,1));
var nGroups=chain.groupCount;
var arrayName=Clazz.new_($I$(1,1));
for (var igroup=0; igroup < nGroups; igroup++) {
var group=chain.groups[igroup];
if (bs.get$I(group.firstAtomIndex)) infoChain.addLast$O(group.getGroupInfo$I$javajs_util_P3(igroup, ptTemp));
}
if (!infoChain.isEmpty$()) {
arrayName.put$O$O("residues", infoChain);
infoChains.addLast$O(arrayName);
}}
return infoChains;
}, p$1);

Clazz.newMeth(C$, 'getAllPolymerInfo$javajs_util_BS', function (bs) {
var info=Clazz.new_($I$(1,1));
if (this.vwr.ms.bioModelset != null ) this.vwr.ms.bioModelset.getAllPolymerInfo$javajs_util_BS$java_util_Map(bs, info);
return info;
}, p$1);

Clazz.newMeth(C$, 'getBasePairInfo$javajs_util_BS', function (bs) {
var info=Clazz.new_($I$(11,1));
var vHBonds=Clazz.new_($I$(7,1));
this.vwr.ms.calcRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS(bs, bs, vHBonds, true, 1, false, null);
for (var i=vHBonds.size$(); --i >= 0; ) {
var b=vHBonds.get$I(i);
C$.getAtomResidueInfo$javajs_util_SB$org_jmol_modelset_Atom(info, b.atom1);
info.append$S(" - ");
C$.getAtomResidueInfo$javajs_util_SB$org_jmol_modelset_Atom(info, b.atom2);
info.append$S("\n");
}
return info.toString();
}, p$1);

Clazz.newMeth(C$, 'getAtomResidueInfo$javajs_util_SB$org_jmol_modelset_Atom', function (info, atom) {
info.append$S("[").append$S(atom.getGroup3$Z(false)).append$S("]").append$S(atom.group.getSeqcodeString$()).append$S(":");
var id=atom.getChainID$();
info.append$S(id == 0 ? " " : atom.getChainIDStr$());
}, 1);

Clazz.newMeth(C$, 'getAppletInfo', function () {
var info=Clazz.new_($I$(1,1));
info.put$O$O("htmlName", this.vwr.htmlName);
info.put$O$O("syncId", this.vwr.syncId);
info.put$O$O("fullName", this.vwr.fullName);
info.put$O$O("codeBase", "" + $I$(17).appletCodeBase);
if (this.vwr.isApplet) {
info.put$O$O("documentBase", $I$(17).appletDocumentBase);
info.put$O$O("registry", this.vwr.sm.getRegistryInfo$());
}info.put$O$O("version", $I$(24).version);
info.put$O$O("date", $I$(24).date);
info.put$O$O("javaVendor", $I$(17).strJavaVendor);
info.put$O$O("javaVersion", $I$(17).strJavaVersion + (!$I$(17).isJS ? "" : $I$(17).isWebGL ? "(WebGL)" : "(HTML5)"));
info.put$O$O("operatingSystem", $I$(17).strOSName);
return info;
}, p$1);

Clazz.newMeth(C$, 'getAnimationInfo', function () {
var am=this.vwr.am;
var info=Clazz.new_($I$(1,1));
info.put$O$O("firstModelIndex", Integer.valueOf$I(am.firstFrameIndex));
info.put$O$O("lastModelIndex", Integer.valueOf$I(am.lastFrameIndex));
info.put$O$O("animationDirection", Integer.valueOf$I(am.animationDirection));
info.put$O$O("currentDirection", Integer.valueOf$I(am.currentDirection));
info.put$O$O("displayModelIndex", Integer.valueOf$I(am.cmi));
if (am.animationFrames != null ) {
info.put$O$O("isMovie", Boolean.TRUE);
info.put$O$O("frames", $I$(3).eAI$IA(am.animationFrames));
info.put$O$O("currentAnimationFrame", Integer.valueOf$I(am.caf));
}info.put$O$O("displayModelNumber", this.vwr.getModelNumberDotted$I(am.cmi));
info.put$O$O("displayModelName", (am.cmi >= 0 ? this.vwr.getModelName$I(am.cmi) : ""));
info.put$O$O("animationFps", Integer.valueOf$I(am.animationFps));
info.put$O$O("animationReplayMode", $I$(8).nameOf$I(am.animationReplayMode));
info.put$O$O("firstFrameDelay", Float.valueOf$F(am.firstFrameDelay));
info.put$O$O("lastFrameDelay", Float.valueOf$F(am.lastFrameDelay));
info.put$O$O("animationOn", Boolean.valueOf$Z(am.animationOn));
info.put$O$O("animationPaused", Boolean.valueOf$Z(am.animationPaused));
return info;
}, p$1);

Clazz.newMeth(C$, 'getBoundBoxInfo', function () {
var pts=this.vwr.ms.getBoxInfo$javajs_util_BS$F(null, 1).getBoundBoxPoints$Z(true);
var info=Clazz.new_($I$(1,1));
info.put$O$O("center", $I$(20).newP$javajs_util_T3(pts[0]));
info.put$O$O("vector", $I$(25).newV$javajs_util_T3(pts[1]));
info.put$O$O("corner0", $I$(20).newP$javajs_util_T3(pts[2]));
info.put$O$O("corner1", $I$(20).newP$javajs_util_T3(pts[3]));
return info;
}, p$1);

Clazz.newMeth(C$, 'getShapeInfo', function () {
var info=Clazz.new_($I$(1,1));
var commands=Clazz.new_($I$(11,1));
var shapes=this.vwr.shm.shapes;
if (shapes != null ) for (var i=0; i < 37; ++i) {
var shape=shapes[i];
if (shape != null ) {
var shapeType=$I$(24).shapeClassBases[i];
var shapeDetail=shape.getShapeDetail$();
if (shapeDetail != null ) info.put$O$O(shapeType, shapeDetail);
}}
if (commands.length$() > 0) info.put$O$O("shapeCommands", commands.toString());
return info;
}, p$1);

Clazz.newMeth(C$, 'getAnnotationInfo$O$I', function (atomExpression, type) {
var bsAtoms=this.vwr.getAtomBitSet$O(atomExpression);
var iModel=this.vwr.ms.getModelBS$javajs_util_BS$Z(bsAtoms, false).nextSetBit$I(0);
if (iModel < 0) return null;
var modelinfo=this.vwr.ms.getModelAuxiliaryInfo$I(iModel);
var objAnn=modelinfo.get$O(type == 1073741925 ? "domains" : "validation");
if (objAnn == null  || objAnn.tok != 6 ) return null;
this.vwr.getAnnotationParser$Z(false).initializeAnnotation$org_jmol_script_SV$I$I(objAnn, type, iModel);
return objAnn.mapGet$S("_list");
}, p$1);

Clazz.newMeth(C$, 'getMeasurementInfo', function () {
return this.vwr.getShapeProperty$I$S(6, "info");
}, p$1);

Clazz.newMeth(C$, 'getMouseInfo', function () {
if (!this.vwr.haveDisplay) return null;
var info=Clazz.new_($I$(1,1));
var list=Clazz.new_($I$(7,1));
var am=this.vwr.acm;
for (var obj, $obj = am.b.getBindings$().values$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
if (Clazz.instanceOf(obj, "java.lang.Boolean")) continue;
if ($I$(6).isAI$O(obj)) {
var binding=obj;
obj=Clazz.array(String, -1, [$I$(26).getMouseActionName$I$Z(binding[0], false), $I$(27).getActionName$I(binding[1])]);
}list.addLast$O(obj);
}
info.put$O$O("bindings", list);
info.put$O$O("bindingName", am.b.name);
info.put$O$O("actionNames", $I$(27).actionNames);
info.put$O$O("actionInfo", $I$(27).actionInfo);
info.put$O$O("bindingInfo", $I$(5,"split$S$S",[am.getBindingInfo$S(null), "\n"]));
return info;
}, p$1);

Clazz.newMeth(C$, 'getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z$Z', function (bs, out, isPQR, doTransform, allTrajectories) {
if (this.vwr.ms.ac == 0 || bs.nextSetBit$I(0) < 0 ) return "";
if (out == null ) {
out=this.vwr.getOutputChannel$S$SA(null, null);
} else {
isPQR|=(out.getType$().indexOf$S("PQR") >= 0);
doTransform|=(out.getType$().indexOf$S("-coord true") >= 0);
}var atoms=this.vwr.ms.at;
var models=this.vwr.ms.am;
var occTemp="%6.2Q%6.2b          ";
if (isPQR) {
occTemp="%8.4P%7.4V       ";
var charge=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) charge += atoms[i].getPartialCharge$();

out.append$S("REMARK   1 PQR file generated by Jmol " + $I$(17).getJmolVersion$()).append$S("\nREMARK   1 " + "created " + (Clazz.new_(java.util.Date)) ).append$S("\nREMARK   1 Forcefield Used: unknown\nREMARK   1").append$S("\nREMARK   5").append$S("\nREMARK   6 Total charge on this protein: " + new Float(charge).toString() + " e\nREMARK   6\n" );
}var iModel=atoms[bs.nextSetBit$I(0)].mi;
var iModelLast=-1;
var lastAtomIndex=bs.length$() - 1;
var lastModelIndex=atoms[lastAtomIndex].mi;
var isMultipleModels=(iModel != lastModelIndex);
var bsModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(bs, true);
var nModels=bsModels.cardinality$();
var lines=Clazz.new_($I$(7,1));
var isMultipleBondPDB=models[iModel].isPdbWithMultipleBonds;
var uniqueAtomNumbers=false;
if (nModels > 1) {
var conectArray=null;
for (var nFiles=0, i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
var a=this.vwr.ms.getModelAuxiliaryInfo$I(i).get$O("PDB_CONECT_bonds");
if (a !== conectArray  || !this.vwr.ms.am[i].isBioModel ) {
conectArray=a;
if (nFiles++ > 0) {
uniqueAtomNumbers=true;
break;
}}}
}var tokens;
var ptTemp=Clazz.new_($I$(20,1));
var o=Clazz.array(java.lang.Object, -1, [ptTemp]);
var q=(doTransform ? this.vwr.tm.getRotationQ$() : null);
var map=Clazz.new_($I$(1,1));
var isBiomodel=false;
var firstAtomIndexNew=(uniqueAtomNumbers ? Clazz.array(Integer.TYPE, [nModels]) : null);
var modelPt=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=atoms[i];
isBiomodel=models[a.mi].isBioModel;
if (isMultipleModels && a.mi != iModelLast ) {
if (iModelLast != -1) {
modelPt=p$1.fixPDBFormat$javajs_util_Lst$java_util_Map$javajs_util_OC$IA$I.apply(this, [lines, map, out, firstAtomIndexNew, modelPt]);
out.append$S("ENDMDL\n");
}lines=Clazz.new_($I$(7,1));
iModel=iModelLast=a.mi;
out.append$S("MODEL     " + (iModelLast + 1) + "\n" );
}var sa=a.getAtomName$();
var leftJustify=(a.getElementSymbol$().length$() == 2 || sa.length$() >= 4  || $I$(5,"isDigit$C",[sa.charAt$I(0)]) );
var isHetero=a.isHetero$();
if (!isBiomodel) tokens=(leftJustify ? $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "HETATM%5.-5i %-4.4a%1AUNK %1c   1%1E   _XYZ_" + occTemp, "\u0000", null) : $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "HETATM%5.-5i  %-3.3a%1AUNK %1c   1%1E   _XYZ_" + occTemp, "\u0000", null));
 else if (isHetero) tokens=(leftJustify ? $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "HETATM%5.-5i %-4.4a%1A%3.3n %1c%4.-4R%1E   _XYZ_" + occTemp, "\u0000", null) : $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "HETATM%5.-5i  %-3.3a%1A%3.3n %1c%4.-4R%1E   _XYZ_" + occTemp, "\u0000", null));
 else tokens=(leftJustify ? $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "ATOM  %5.-5i %-4.4a%1A%3.3n %1c%4.-4R%1E   _XYZ_" + occTemp, "\u0000", null) : $I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "ATOM  %5.-5i  %-3.3a%1A%3.3n %1c%4.-4R%1E   _XYZ_" + occTemp, "\u0000", null));
var XX=a.getElementSymbolIso$Z(false).toUpperCase$();
XX=p$1.pdbKey$I.apply(this, [a.group.getBioPolymerIndexInModel$()]) + p$1.pdbKey$I.apply(this, [a.group.groupIndex]) + $I$(19).formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(this.vwr, a, tokens, "\u0000", null, ptTemp) + (XX.length$() == 1 ? " " + XX : XX.substring$I$I(0, 2)) + "  " ;
C$.getPointTransf$I$org_jmol_modelset_ModelSet$org_jmol_modelset_Atom$javajs_util_Quat$javajs_util_P3(-1, this.vwr.ms, a, q, ptTemp);
var xyz=$I$(5).sprintf$S$S$OA("%8.3p%8.3p%8.3p", "p", o);
if (xyz.length$() > 24) xyz=$I$(5).sprintf$S$S$OA("%8.2p%8.2p%8.2p", "p", o);
XX=$I$(5).rep$S$S$S(XX, "_XYZ_", xyz);
lines.addLast$O(XX);
}
p$1.fixPDBFormat$javajs_util_Lst$java_util_Map$javajs_util_OC$IA$I.apply(this, [lines, map, out, firstAtomIndexNew, modelPt]);
if (isMultipleModels) out.append$S("ENDMDL\n");
modelPt=-1;
iModelLast=-1;
var conectKey="" + (isMultipleModels ? modelPt : 0);
isBiomodel=false;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=atoms[i];
if (isMultipleModels && a.mi != iModelLast ) {
iModelLast=a.mi;
isBiomodel=models[iModelLast].isBioModel;
modelPt++;
}var isHetero=(!isBiomodel || a.isHetero$() );
var isCysS=!isHetero && (a.getElementNumber$() == 16) ;
if (isHetero || isMultipleBondPDB || isCysS  ) {
var bonds=a.bonds;
if (bonds != null ) for (var j=0; j < bonds.length; j++) {
var iThis=a.getAtomNumber$();
var a2=bonds[j].getOtherAtom$org_jmol_modelset_Atom(a);
if (!bs.get$I(a2.i)) continue;
var n=bonds[j].getCovalentOrder$();
if (n == 1 && (isMultipleBondPDB && !isHetero && !isCysS   || isCysS && a2.getElementNumber$() != 16  ) ) continue;
var iOther=a2.getAtomNumber$();
switch (n) {
case 2:
case 3:
if (iOther < iThis) continue;
case 1:
var inew=map.get$O(conectKey + "." + Integer.valueOf$I(iThis) );
var inew2=map.get$O(conectKey + "." + Integer.valueOf$I(iOther) );
if (inew == null  || inew2 == null  ) break;
out.append$S("CONECT").append$S($I$(5).formatStringS$S$S$S("%5s", "s", "" + inew));
var s=$I$(5).formatStringS$S$S$S("%5s", "s", "" + inew2);
for (var k=0; k < n; k++) out.append$S(s);

out.append$S("\n");
break;
}
}
}}
return out.toString();
});

Clazz.newMeth(C$, 'pdbKey$I', function (np) {
var xp=(np < 0 ? "~999" : "   " + np);
return xp.substring$I(xp.length$() - 4);
}, p$1);

Clazz.newMeth(C$, 'fixPDBFormat$javajs_util_Lst$java_util_Map$javajs_util_OC$IA$I', function (lines, map, out, firstAtomIndexNew, modelPt) {
lines.addLast$O("~999~999XXXXXX99999999999999999999~99~");
var alines=Clazz.array(String, [lines.size$()]);
lines.toArray$OA(alines);
$I$(10).sort$OA(alines);
lines.clear$();
for (var i=0, n=alines.length; i < n; i++) {
lines.addLast$O(alines[i]);
}
var lastPoly=null;
var lastLine=null;
var n=lines.size$();
var newAtomNumber=0;
var iBase=(firstAtomIndexNew == null  ? 0 : firstAtomIndexNew[modelPt]);
for (var i=0; i < n; i++) {
var s=lines.get$I(i);
var poly=s.substring$I$I(0, 4);
s=s.substring$I(8);
var isTerm=false;
var isLast=(s.indexOf$S("~99~") >= 0);
if (!poly.equals$O(lastPoly) || isLast ) {
if (lastPoly != null  && !lastPoly.equals$O("~999") ) {
isTerm=true;
s="TER   " + lastLine.substring$I$I(6, 11) + "      " + lastLine.substring$I$I(17, 27) ;
lines.add$I$O(i, poly + "~~~~" + s );
n++;
}lastPoly=poly;
}if (isLast && !isTerm ) break;
lastLine=s;
newAtomNumber=i + 1 + iBase ;
if (map != null  && !isTerm ) map.put$O$O("" + modelPt + "." + Integer.valueOf$I($I$(5,"parseInt$S",[s.substring$I$I(6, 11)])) , Integer.valueOf$I(newAtomNumber));
var si="     " + newAtomNumber;
out.append$S(s.substring$I$I(0, 6)).append$S(si.substring$I(si.length$() - 5)).append$S(s.substring$I(11)).append$S("\n");
}
if (firstAtomIndexNew != null  && ++modelPt < firstAtomIndexNew.length ) firstAtomIndexNew[modelPt]=newAtomNumber;
return modelPt;
}, p$1);

Clazz.newMeth(C$, 'getPdbData$I$S$javajs_util_BS$OA$javajs_util_OC$Z', function (modelIndex, type, bsSelected, parameters, out, addStructure) {
if (this.vwr.ms.isJmolDataFrameForModel$I(modelIndex)) modelIndex=this.vwr.ms.getJmolDataSourceFrame$I(modelIndex);
if (modelIndex < 0) return "";
var model=this.vwr.ms.am[modelIndex];
var isPDB=model.isBioModel;
if (parameters == null  && !isPDB ) return null;
if (out == null ) out=this.vwr.getOutputChannel$S$SA(null, null);
var pdbCONECT=Clazz.new_($I$(11,1));
var isDraw=(type.indexOf$S("draw") >= 0);
var bsAtoms=null;
var bsWritten=Clazz.new_($I$(14,1));
var ctype="\u0000";
var tokens=$I$(19).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, "ATOM  %-6i%4a%1A%3.-3n %1c%4R%1E   ", "\u0000", null);
if (parameters == null ) {
ctype=(type.length$() > 11 && type.indexOf$S("quaternion ") >= 0  ? type.charAt$I(11) : "R");
(model).getPdbData$S$C$Z$javajs_util_BS$javajs_util_OC$org_jmol_modelset_LabelTokenA$javajs_util_SB$javajs_util_BS(type, ctype, isDraw, bsSelected, out, tokens, pdbCONECT, bsWritten);
bsAtoms=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
} else {
bsAtoms=parameters[0];
var dataX=parameters[1];
var dataY=parameters[2];
var dataZ=parameters[3];
var haveY=(dataY != null );
var haveZ=(dataZ != null );
var minXYZ=parameters[4];
var maxXYZ=parameters[5];
var factors=parameters[6];
var center=parameters[7];
var format=parameters[8];
var properties=parameters[9];
var isPDBFormat=(factors != null  && format == null  );
var atoms=this.vwr.ms.at;
if (isPDBFormat) {
out.append$S("REMARK   6 Jmol PDB-encoded data: ").append$S(type).append$S("; ").append$S($I$(17).getJmolVersion$()).append$S("; ").append$S(this.vwr.apiPlatform.getDateFormat$S(null)).append$S("\n");
out.append$S("REMARK   6 Jmol data").append$S(" min = ").append$S($I$(3).eP$javajs_util_T3(minXYZ)).append$S(" max = ").append$S($I$(3).eP$javajs_util_T3(maxXYZ)).append$S(" unScaledXyz = xyz * ").append$S($I$(3).eP$javajs_util_T3(factors)).append$S(" + ").append$S($I$(3).eP$javajs_util_T3(center)).append$S(";\n");
var atomNames=null;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var name="" + atoms[i].getAtomName$();
if (atomNames != null  || name.length$() > 4 ) {
if (atomNames == null ) {
atomNames="";
i=-1;
continue;
}atomNames += " " + name;
}}
if (atomNames != null ) out.append$S("REMARK   6 Jmol atom names").append$S(atomNames).append$S("\n");
var resNames=null;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var name="" + atoms[i].getGroup3$Z(true);
if (resNames != null  || name.length$() > 3 ) {
if (resNames == null ) {
resNames="";
i=-1;
continue;
}resNames += " " + name;
}}
if (resNames != null ) out.append$S("REMARK   6 Jmol residue names").append$S(resNames).append$S("\n");
for (var i=0; i < properties.length; i++) if (properties[i] != null ) out.append$S("REMARK   6 Jmol property ").append$S(properties[i]).append$S(";\n");

}var strExtra="";
var atomLast=null;
var ptTemp=Clazz.new_($I$(20,1));
if (!isPDBFormat) {
if (format == null ) format="%-5i %-10s %-13.5f " + (haveZ ? "%-13.5f %-13.5f" : haveY ? "%-13.5f" : "");
format += "\n";
}for (var i=bsAtoms.nextSetBit$I(0), n=0; i >= 0; i=bsAtoms.nextSetBit$I(i + 1), n++) {
var x=dataX[n];
var y=(haveY ? dataY[n] : 0.0);
var z=(haveZ ? dataZ[n] : 0.0);
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) continue;
var a=atoms[i];
if (isPDBFormat) {
out.append$S($I$(19).formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(this.vwr, a, tokens, "\u0000", null, ptTemp));
if (isPDB) bsWritten.set$I(i);
out.append$S($I$(5,"sprintf$S$S$OA",["%-8.2f%-8.2f%-10.2f    %6.3f          %2s    %s\n", "ssF", Clazz.array(java.lang.Object, -1, [a.getElementSymbolIso$Z(false).toUpperCase$(), strExtra, Clazz.array(Float.TYPE, -1, [x, y, z, 0.0])])]));
if (atomLast != null  && atomLast.group.getBioPolymerIndexInModel$() == a.group.getBioPolymerIndexInModel$() ) pdbCONECT.append$S("CONECT").append$S($I$(5,"formatStringI$S$S$I",["%5i", "i", atomLast.getAtomNumber$()])).append$S($I$(5,"formatStringI$S$S$I",["%5i", "i", a.getAtomNumber$()])).appendC$C("\n");
} else if (haveZ) {
out.append$S($I$(5,"sprintf$S$S$OA",[format, "isF", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(a.getAtomNumber$()), a.getAtomName$(), Clazz.array(Float.TYPE, -1, [x, y, z])])]));
} else if (haveY) {
out.append$S($I$(5,"sprintf$S$S$OA",[format, "isF", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(a.getAtomNumber$()), a.getAtomName$(), Clazz.array(Float.TYPE, -1, [x, y])])]));
} else {
out.append$S($I$(5,"sprintf$S$S$OA",[format, "isF", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(a.getAtomNumber$()), a.getAtomName$(), Clazz.array(Float.TYPE, -1, [x])])]));
}atomLast=a;
}
}out.append$S(pdbCONECT.toString());
if (isDraw) return out.toString();
bsSelected.and$javajs_util_BS(bsAtoms);
if (isPDB && addStructure ) out.append$S("\n\n" + this.vwr.ms.getProteinStructureState$javajs_util_BS$I(bsWritten, ctype == "R" ? 4138 : 1073742086));
return out.toString();
});

Clazz.newMeth(C$, 'getModelCml$javajs_util_BS$I$Z$Z$Z', function (bs, atomsMax, addBonds, doTransform, allTrajectories) {
var sb=Clazz.new_($I$(11,1));
var nAtoms=bs.cardinality$();
if (nAtoms == 0) return "";
if ($I$(17).isJS) $I$(21).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.XmlUtil", this.vwr, "file");
$I$(28).openTag$javajs_util_SB$S(sb, "molecule");
$I$(28).openTag$javajs_util_SB$S(sb, "atomArray");
var bsAtoms=Clazz.new_($I$(14,1));
var atoms=this.vwr.ms.at;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (--atomsMax < 0) break;
var atom=atoms[i];
var name=atom.getAtomName$();
$I$(5).rep$S$S$S(name, "\"", "\'\'");
bsAtoms.set$I(atom.i);
$I$(28,"appendTag$javajs_util_SB$S$O",[sb, "atom/", Clazz.array(String, -1, ["id", "a" + (atom.i + 1), "title", atom.getAtomName$(), "elementType", atom.getElementSymbol$(), "x3", "" + new Float(atom.x).toString(), "y3", "" + new Float(atom.y).toString(), "z3", "" + new Float(atom.z).toString()])]);
}
$I$(28).closeTag$javajs_util_SB$S(sb, "atomArray");
if (addBonds) {
$I$(28).openTag$javajs_util_SB$S(sb, "bondArray");
var bondCount=this.vwr.ms.bondCount;
var bonds=this.vwr.ms.bo;
for (var i=0; i < bondCount; i++) {
var bond=bonds[i];
var a1=bond.atom1;
var a2=bond.atom2;
if (!bsAtoms.get$I(a1.i) || !bsAtoms.get$I(a2.i) ) continue;
var order=$I$(23).getCmlBondOrder$I(bond.order);
if (order == null ) continue;
$I$(28,"appendTag$javajs_util_SB$S$O",[sb, "bond/", Clazz.array(String, -1, ["atomRefs2", "a" + (bond.atom1.i + 1) + " a" + (bond.atom2.i + 1) , "order", order])]);
}
$I$(28).closeTag$javajs_util_SB$S(sb, "bondArray");
}$I$(28).closeTag$javajs_util_SB$S(sb, "molecule");
return sb.toString();
});

Clazz.newMeth(C$, 'fixJMEFormalCharges$javajs_util_BS$S', function (bsAtoms, jme) {
var haveCharges=false;
if (bsAtoms == null ) return jme;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var a=this.vwr.ms.at[i];
if (a.getFormalCharge$() != 0) {
haveCharges=true;
break;
}}
if (!haveCharges) return jme;
var map=this.vwr.getSmilesMatcher$().getMapForJME$S$org_jmol_modelset_AtomA$javajs_util_BS(jme, this.vwr.ms.at, bsAtoms);
if (map == null ) return jme;
var jmeMap=map[0];
var jmolMap=map[1];
var tokens=$I$(5).getTokens$S(jme);
var nAtoms=$I$(5).parseInt$S(tokens[0]);
var mapjj=Clazz.array(Integer.TYPE, [nAtoms]);
for (var i=jmeMap.length; --i >= 0; ) {
mapjj[jmeMap[i]]=jmolMap[i] + 1;
}
var ipt=0;
for (var pt=2; pt < tokens.length; pt+=3) {
var jmeAtom=tokens[pt];
if ($I$(5).parseInt$S(jmeAtom) != -2147483648) break;
jmeAtom=$I$(5).replaceAllCharacters$S$S$S(jmeAtom, "+-", "");
var a=this.vwr.ms.at[mapjj[ipt++] - 1];
var elem=a.getElementSymbol$();
if (!elem.equals$O(jmeAtom)) {
return jme;
}var charge=a.getFormalCharge$();
if (charge != 0) tokens[pt]=jmeAtom + (charge > 0 ? "+" : "-") + (Math.abs(charge) > 1 ? "" + Math.abs(charge) : "") ;
}
return $I$(5).join$SA$C$I(tokens, " ", 0);
});

C$.$static$=function(){C$.$static$=0;
C$.propertyTypes=Clazz.array(String, -1, ["appletInfo", "", "", "fileName", "", "", "fileHeader", "", "", "fileContents", "<pathname>", "", "fileContents", "", "", "animationInfo", "", "", "modelInfo", "<atom selection>", "{*}", "ligandInfo", "<atom selection>", "{*}", "shapeInfo", "", "", "measurementInfo", "", "", "centerInfo", "", "", "orientationInfo", "", "", "transformInfo", "", "", "", "", "", "atomInfo", "<atom selection>", "(visible)", "bondInfo", "<atom selection>", "(visible)", "chainInfo", "<atom selection>", "(visible)", "polymerInfo", "<atom selection>", "(visible)", "moleculeInfo", "<atom selection>", "(visible)", "stateInfo", "<state type>", "all", "extractModel", "<atom selection>", "(visible)", "jmolStatus", "statusNameList", "", "jmolViewer", "", "", "messageQueue", "", "", "auxiliaryInfo", "<atom selection>", "{*}", "boundBoxInfo", "", "", "dataInfo", "<data type>", "types", "image", "<width=www,height=hhh>", "", "evaluate", "<expression>", "", "menu", "<type>", "current", "minimizationInfo", "", "", "pointGroupInfo", "<atom selection>", "(visible)", "fileInfo", "<type>", "", "errorMessage", "", "", "mouseInfo", "", "", "isosurfaceInfo", "", "", "isosurfaceData", "", "", "consoleText", "", "", "JSpecView", "<key>", "", "scriptQueueInfo", "", "", "nmrInfo", "<elementSymbol> or \'all\' or \'shifts\'", "all", "variableInfo", "<name>", "all", "domainInfo", "<atom selection>", "{visible}", "validationInfo", "<atom selection>", "{visible}", "service", "<hashTable>", "", "CIFInfo", "<filename>", "", "modelkitInfo", "<key>", "data"]);
C$.readableTypes=Clazz.array(String, -1, ["", "stateinfo", "extractmodel", "filecontents", "fileheader", "image", "menu", "minimizationInfo"]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
