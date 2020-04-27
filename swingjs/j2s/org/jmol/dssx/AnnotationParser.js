(function(){var P$=Clazz.newPackage("org.jmol.dssx"),p$1={},I$=[[0,'org.jmol.script.SV','javajs.util.Lst','javajs.util.PT','javajs.util.BS','org.jmol.util.Logger','javajs.util.AU','Boolean','java.util.Hashtable','javajs.util.SB','org.jmol.modelsetbio.BioResolver','org.jmol.modelset.Group','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnnotationParser", null, null, 'org.jmol.api.JmolAnnotationParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['pdbAtomForH','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAnnotationKVPairs$org_jmol_script_SV$S$S$javajs_util_SB$S$Z$Z$I', function (a, match, dotPath, sb, pre, showDetail, isMappingOnly, type) {
var map=a.getMap$();
if (map == null  || map.isEmpty$() ) return;
if (map.containsKey$O("_map")) map=map.get$O("_map").getMap$();
var detailKey=p$1.getDataKey$I.apply(this, [type]);
if (showDetail && map.containsKey$O(detailKey) ) {
if (match == null  || dotPath.indexOf$S(match) >= 0 ) sb.append$S(map.get$O(detailKey).asString$()).append$S("\n");
return;
}for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
if (key.equals$O(detailKey)) continue;
if (key.equals$O("metadata")) sb.append$S("\n");
var val=e.getValue$();
if (val.tok == 6) {
if (type == 1073742189 && !showDetail ) {
sb.append$S(key).append$S("\n");
} else {
p$1.getAnnotationKVPairs$org_jmol_script_SV$S$S$javajs_util_SB$S$Z$Z$I.apply(this, [val, match, (dotPath.length$() == 0 ? "" : dotPath + ".") + key, sb, (pre.length$() == 0 ? "" : pre + "\t") + key, showDetail, isMappingOnly, type]);
}} else {
var s=val.asString$();
if (match == null  || s.indexOf$S(match) >= 0  || pre.indexOf$S(match) >= 0  || key.indexOf$S(match) >= 0  || dotPath.indexOf$S(match) >= 0 ) {
if (showDetail && isMappingOnly ) continue;
if (pre.length$() > 0) sb.append$S(pre).append$S("\t");
sb.append$S(key).append$S("=");
sb.append$S(s).append$S("\n");
}}}
}, p$1);

Clazz.newMeth(C$, 'getDataKey$I', function (type) {
switch (type) {
case 1073741925:
return "mappings";
case 1073742189:
return "outliers";
}
return null;
}, p$1);

Clazz.newMeth(C$, 'catalogStructureUnits$org_jmol_viewer_Viewer$org_jmol_script_SV$IA$java_util_Map$O$java_util_Map', function (viewer, map0, modelAtomIndices, resMap, object, modelMap) {
var note="Use within(rna3d, TYPE) where TYPE is one of: ";
var data=map0.getMap$();
if (data == null ) return null;
try {
map0.mapPut$S$org_jmol_script_SV("_map", $I$(1).newV$I$O(6, data));
var list=Clazz.new_($I$(2,1));
var set=data.entrySet$();
var sv;
var map;
for (var e, $e = set.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
sv=e.getValue$();
var structures=sv.getList$();
if (structures != null ) {
var key=e.getKey$();
note += "\"" + key + "\" " ;
var svPath=$I$(1).newS$S(key);
for (var j=structures.size$(); --j >= 0; ) {
var struc=structures.get$I(j);
map=struc.getMap$();
sv=map.get$O("units");
map.put$O$O("_isres", $I$(1).vT);
var units=(sv == null  || sv.tok == 7  ? sv.getList$() : sv.tok == 4 ? Clazz.new_($I$(2,1)) : null);
if (units != null ) {
if (sv.tok == 4) {
var svl=(function(a,f){return f.apply(null,a)})([sv.asString$(), ","],$I$(3).split$S$S);
for (var i=svl.length; --i >= 0; ) units.addLast$O((function(a,f){return f.apply(null,a)})([svl[i].trim$()],$I$(1).newS$S));

}if (units.size$() > 0) {
var bsAtoms=Clazz.new_($I$(4,1));
map.put$O$O("_atoms", $I$(1).getVariable$O(bsAtoms));
map.put$O$O("_path", svPath);
list.addLast$O(struc);
for (var k=units.size$(); --k >= 0; ) {
p$1.catalogUnit$org_jmol_viewer_Viewer$FAA$S$F$javajs_util_BS$IA$java_util_Map$java_util_Map$java_util_Map.apply(this, [viewer, null, units.get$I(k).asString$(), 0, bsAtoms, modelAtomIndices, resMap, null, modelMap]);
}
}}}
}}
map0.mapPut$S$org_jmol_script_SV("_list", $I$(1).newV$I$O(7, list));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).info$S(e + " while cataloging structures");
return null;
} else {
throw e;
}
}
return note;
});

Clazz.newMeth(C$, 'catalogValidations$org_jmol_viewer_Viewer$org_jmol_script_SV$IA$java_util_Map$java_util_Map$java_util_Map', function (viewer, map0, modelAtomIndices, resMap, atomMap, modelMap) {
var data=map0.getMap$();
if (data == null ) return null;
var retProperties=Clazz.new_($I$(2,1));
var nModels=modelAtomIndices.length - 1;
try {
data=p$1.getMainItem$java_util_Map.apply(this, [data]).getMap$();
map0.mapPut$S$org_jmol_script_SV("_map", $I$(1).newV$I$O(6, data));
var list=Clazz.new_($I$(2,1));
map0.mapPut$S$org_jmol_script_SV("_list", $I$(1).newV$I$O(7, list));
var set=data.entrySet$();
var sv;
var map;
for (var e, $e = set.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var floats=$I$(6).newFloat2$I(nModels);
for (var m=nModels; --m >= 0; ) floats[m]=Clazz.array(Float.TYPE, [modelAtomIndices[m + 1] - modelAtomIndices[m]]);

sv=e.getValue$();
var outliers=sv.getList$();
if (outliers == null ) {
map=sv.getMap$();
if (map != null  && (sv=map.get$O("outliers")) != null  ) outliers=sv.getList$();
}if (outliers != null ) {
var hasUnit=false;
var key=e.getKey$();
var svPath=$I$(1).newS$S(key);
var isRes=false;
for (var j=outliers.size$(); --j >= 0; ) {
var out=outliers.get$I(j);
map=out.getMap$();
sv=map.get$O("units");
var svv=map.get$O("value");
var val=(svv == null  ? 1 : $I$(1).fValue$org_jmol_script_T(svv));
var units=(val == 0  || sv == null   || sv.tok == 7  ? sv.getList$() : sv.tok == 4 ? Clazz.new_($I$(2,1)) : null);
if (units != null ) {
if (sv.tok == 4) {
var svl=(function(a,f){return f.apply(null,a)})([sv.asString$(), ","],$I$(3).split$S$S);
for (var i=svl.length; --i >= 0; ) units.addLast$O((function(a,f){return f.apply(null,a)})([svl[i].trim$()],$I$(1).newS$S));

}if (units.size$() > 0) {
var bsAtoms=Clazz.new_($I$(4,1));
map.put$O$O("_atoms", $I$(1).getVariable$O(bsAtoms));
map.put$O$O("_path", svPath);
hasUnit=true;
list.addLast$O(out);
for (var k=units.size$(); --k >= 0; ) {
var ret=p$1.catalogUnit$org_jmol_viewer_Viewer$FAA$S$F$javajs_util_BS$IA$java_util_Map$java_util_Map$java_util_Map.apply(this, [viewer, floats, units.get$I(k).asString$(), val, bsAtoms, modelAtomIndices, resMap, atomMap, modelMap]);
if (ret) map.put$O$O("_isres", $I$(1).vT);
isRes|=ret;
}
}}}
if (hasUnit) {
for (var m=nModels; --m >= 0; ) if (floats[m] != null ) {
retProperties.addLast$O(key);
retProperties.addLast$O(floats[m]);
retProperties.addLast$O(Integer.valueOf$I(m));
retProperties.addLast$O($I$(7).valueOf$Z(isRes));
}
}}}
return retProperties;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).info$S(e + " while cataloging validations");
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getMainItem$java_util_Map', function (data) {
for (var e, $e = data.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
if (!key.contains$CharSequence("metadata")) return e.getValue$();
}
return null;
}, p$1);

Clazz.newMeth(C$, 'initializeAnnotation$org_jmol_script_SV$I$I', function (objAnn, type, modelIndex) {
var map=objAnn.getMap$();
var _list=map.get$O("_list");
if (_list != null ) return _list.getList$();
var dataKey=p$1.getDataKey$I.apply(this, [type]);
var main=p$1.getMainItem$java_util_Map.apply(this, [map]);
map.put$O$O("_map", main);
var noSingles=true;
var _cat=Clazz.new_($I$(8,1));
map.put$O$O("_cat", $I$(1).newV$I$O(6, _cat));
var list=Clazz.new_($I$(2,1));
map.put$O$O("_list", _list=$I$(1).newV$I$O(7, list));
for (var e, $e = main.getMap$().entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var _dbName=e.getKey$();
var _dbMap=e.getValue$();
_cat.putAll$java_util_Map(_dbMap.getMap$());
for (var e2, $e2 = _dbMap.getMap$().entrySet$().iterator$(); $e2.hasNext$()&&((e2=($e2.next$())),1);) {
var _domainName=e2.getKey$();
var _domainMap=e2.getValue$();
var _domainList=_domainMap.mapGet$S(dataKey);
var _mapList=_domainList.getList$();
for (var i=_mapList.size$(); --i >= 0; ) {
var mapping=_mapList.get$I(i);
list.addLast$O(mapping);
var mmap=mapping.getMap$();
var _chain=mmap.get$O("chain_id");
var start=mmap.get$O("start");
var end=mmap.get$O("end");
var res1=0;
var res2=0;
var rescode="modelIndex=" + modelIndex + "&chain='" + _chain.value + "'" ;
if (start != null  && end != null  ) {
res1=start.mapGet$S("residue_number").intValue;
res2=end.mapGet$S("residue_number").intValue;
rescode += "&seqid>=" + res1 + "&seqid<=" + res2 ;
} else {
res2=1;
rescode += "&seqid>0";
}var _atoms=(noSingles && res1 >= res2  ? (function(a,f){return f.apply(null,a)})([Clazz.new_($I$(4,1))],$I$(1).getVariable$O) : _cat.get$O(rescode));
if (_atoms == null ) _cat.put$O$O(rescode, _atoms=$I$(1).newS$S(rescode));
mmap.put$O$O("_atoms", _atoms);
mmap.put$O$O("_path", $I$(1).newS$S(_dbName + "." + _domainName ));
mmap.put$O$O("domain", _domainMap);
}
}
}
return list;
});

Clazz.newMeth(C$, 'findAnnotationAtoms$org_jmol_viewer_Viewer$S$javajs_util_Lst$S$javajs_util_BS', function (vwr, name, _list, key, bs) {
if (_list == null ) return;
System.out.println$S("Checking " + name + " for " + key );
var data=vwr.extractProperty$O$O$I(_list, "[" + key + "]" , -1);
var list=null;
if (Clazz.instanceOf(data, "javajs.util.Lst")) {
list=data;
} else if (Clazz.instanceOf(data, "org.jmol.script.SV")) {
list=(data).getList$();
}if (list == null ) return;
for (var i=0, n=list.size$(); i < n; i++) {
var o=list.get$I(i);
var mapping=(Clazz.instanceOf(o, "org.jmol.script.SV") ? (o).getMap$() : o);
if (mapping == null ) return;
bs.or$javajs_util_BS(p$1.setAnnotationAtoms$org_jmol_viewer_Viewer$java_util_Map$I.apply(this, [vwr, mapping, i]));
}
}, p$1);

Clazz.newMeth(C$, 'setAnnotationAtoms$org_jmol_viewer_Viewer$java_util_Map$I', function (vwr, mapping, i) {
var _atoms=mapping.get$O("_atoms");
if (_atoms.tok != 10) {
var bs2=vwr.getAtomBitSet$O(_atoms.value);
if (i >= 0) (function(a,f){return f.apply(null,a)})(["#" + (i + 1) + " found " + bs2.cardinality$() + " atoms for " + _atoms.value ],$I$(5).info$S);
_atoms.tok=10;
_atoms.value=bs2;
}return _atoms.value;
}, p$1);

Clazz.newMeth(C$, 'catalogUnit$org_jmol_viewer_Viewer$FAA$S$F$javajs_util_BS$IA$java_util_Map$java_util_Map$java_util_Map', function (viewer, vals, unitID, val, bsAtoms, modelAtomIndices, resMap, atomMap, modelMap) {
var s=(function(a,f){return f.apply(null,a)})([unitID + (vals == null  ? "||||" : "|||"), "|"],$I$(3).split$S$S);
if (s.length < 8 || s[1].length$() == 0  || s[2].length$() == 0  || s[3].length$() == 0  || s[4].length$() == 0 ) return false;
var sm=(s[1].length$() == 0 ? "1" : s[1]);
var m=(modelMap == null  ? $I$(3).parseInt$S(sm) - 1 : -1);
var im=(m >= 0 ? null : modelMap.get$O(sm));
if (im != null ) m=im.intValue$();
if (m >= modelAtomIndices.length) return false;
var res=s[1] + "_" + viewer.getChainID$S$Z(s[2], true) + "_" + s[4] + "_" + s[7].toLowerCase$() ;
var i0=modelAtomIndices[m];
var isRes=(atomMap == null  || s[5].length$() == 0 );
if (isRes) {
var a2=resMap.get$O(res);
if (a2 != null ) for (var j=a2[1], j0=a2[0]; --j >= j0; ) {
bsAtoms.set$I(i0 + j);
if (vals != null ) vals[m][j] += Math.abs(val);
}
} else {
if (s[5].charAt$I(0) == "H") s[5]=this.getAttachedAtomForPDBH$S$S(s[3], s[5]);
var atom=res + "_" + s[5] + "_" + s[6].toLowerCase$() ;
var ia=atomMap.get$O(atom);
if (ia != null ) {
var j=ia.intValue$();
bsAtoms.set$I(i0 + j);
if (vals != null ) vals[m][j] += Math.abs(val);
}}return isRes;
}, p$1);

Clazz.newMeth(C$, 'getAtomBits$org_jmol_viewer_Viewer$S$O$java_util_Map$I$I$javajs_util_BS', function (vwr, key, dbObj, annotationCache, type, modelIndex, bsModel) {
if (dbObj == null ) return Clazz.new_($I$(4,1));
var doCache=!key.contains$CharSequence("NOCACHE");
if (!doCache) {
key=$I$(3).rep$S$S$S(key, "NOCACHE", "").trim$();
}var bs=(doCache ? annotationCache.get$O(key) : null);
if (bs != null ) return bs;
bs=Clazz.new_($I$(4,1));
if (doCache) annotationCache.put$O$O(key, bs);
try {
var list=this.initializeAnnotation$org_jmol_script_SV$I$I(dbObj, type, modelIndex);
var pt=key.toLowerCase$().indexOf$S(" where ");
var path=(function(a,f){return f.apply(null,a)})([(pt < 0 ? key : key.substring$I$I(0, pt)), " ", ""],$I$(3).rep$S$S$S);
var newKey=(pt < 0 ? "" : key.substring$I(pt + 7).trim$());
if (path.indexOf$S(".") < 0) {
path=" _path like '" + path + "*'" ;
} else {
path=" _path='" + path + "'" ;
}newKey="select * where " + (pt < 0 ? path : "(" + newKey + ") and (" + path + ")" );
$I$(5).info$S("looking for " + newKey);
p$1.findAnnotationAtoms$org_jmol_viewer_Viewer$S$javajs_util_Lst$S$javajs_util_BS.apply(this, [vwr, path, list, newKey, bs]);
bs.and$javajs_util_BS(bsModel);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString() + " in AnnotationParser");
bs.clearAll$();
} else {
throw e;
}
}
return bs;
});

Clazz.newMeth(C$, 'getAtomValidation$org_jmol_viewer_Viewer$S$org_jmol_modelset_Atom', function (vwr, type, atom) {
var i=0;
var n=0;
var l=null;
var map=null;
var list=null;
try {
var ia=atom.i;
l=Clazz.new_($I$(2,1));
list=(vwr.ms.getModelAuxiliaryInfo$I(atom.mi).get$O("validation")).mapGet$S("_list").getList$();
for (i=0, n=list.size$(); i < n; i++) {
map=list.get$I(i).getMap$();
if (map.get$O("_path").value.equals$O(type) && (map.get$O("_atoms").value).get$I(ia) ) {
var v=map.get$O("value");
l.addLast$O(v.tok == 3 ? v.value : Float.valueOf$F(v.asFloat$()));
}}
return l;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getAnnotationInfo$org_jmol_viewer_Viewer$org_jmol_script_SV$S$I$I', function (vwr, a, match, type, modelIndex) {
var sb=Clazz.new_($I$(9,1));
if ("".equals$O(match)) match=null;
var isDetail=(match != null  && (match.equals$O("all") || match.endsWith$S(" all") ) );
if (isDetail) {
var _list=this.initializeAnnotation$org_jmol_script_SV$I$I(a, type, modelIndex);
for (var i=_list.size$(); --i >= 0; ) p$1.setAnnotationAtoms$org_jmol_viewer_Viewer$java_util_Map$I.apply(this, [vwr, _list.get$I(i).getMap$(), -1]);

match=match.substring$I$I(0, Math.max(0, match.length$() - 4)).trim$();
}if ("".equals$O(match)) match=null;
if (type == 1073742189 && !isDetail  && match == null  ) return a.mapGet$S("_note").asString$();
var isMappingOnly=(match != null  && match.indexOf$S(".") >= 0  && match.indexOf$S(".*") < 0 );
match=$I$(3).rep$S$S$S(match, "*", "");
try {
p$1.getAnnotationKVPairs$org_jmol_script_SV$S$S$javajs_util_SB$S$Z$Z$I.apply(this, [a, match, "", sb, "", isDetail, isMappingOnly, type]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
{
System.out.println(e);
}
} else {
throw e;
}
}
return sb.toString();
});

Clazz.newMeth(C$, 'getAttachedAtomForPDBH$S$S', function (group3, name) {
if (name.charAt$I(0) == "H") {
if (C$.pdbAtomForH == null ) {
C$.pdbAtomForH=Clazz.new_($I$(8,1));
p$1.assignPDBH$S$S.apply(this, ["", "N H H1 H2 H3 CB HB2 HB3 CD HD2 HD3 CG HG2 HG3 C2\' H2\'\' H2\' C5\' H5\'\' H5\' OXT HXT"]);
for (var i=$I$(10).pdbBondInfo.length; --i >= 1; ) {
p$1.assignPDBH$S$S.apply(this, [$I$(11).group3Names[i], $I$(10).pdbBondInfo[i]]);
}
}var a=C$.pdbAtomForH.get$O(name);
if (a == null ) a=C$.pdbAtomForH.get$O(group3 + name);
if (a != null ) return a;
}return name;
});

Clazz.newMeth(C$, 'assignPDBH$S$S', function (group3, sNames) {
var names=(function(a,f){return f.apply(null,a)})([$I$(3).rep$S$S$S(sNames, "@", " ")],$I$(3).getTokens$S);
var a=null;
for (var i=0, n=names.length; i < n; i++) {
var s=names[i];
if (s.charAt$I(0) != "H") {
a=s;
continue;
}s=group3 + s;
if (s.indexOf$S("?") >= 0) {
s=s.substring$I$I(0, s.length$() - 1);
C$.pdbAtomForH.put$O$O(s + "1", a);
C$.pdbAtomForH.put$O$O(s + "2", a);
C$.pdbAtomForH.put$O$O(s + "3", a);
} else {
C$.pdbAtomForH.put$O$O(s, a);
}}
}, p$1);

Clazz.newMeth(C$, 'fixAtoms$I$org_jmol_script_SV$javajs_util_BS$I$I', function (modelIndex, dbObj, bsAddedMask, type, margin) {
var _list=this.initializeAnnotation$org_jmol_script_SV$I$I(dbObj, type, modelIndex);
for (var i=_list.size$(); --i >= 0; ) {
var m=_list.get$I(i).getMap$();
var _atoms=m.get$O("_atoms");
if (_atoms != null  && _atoms.tok == 10 ) (function(a,f){return f.apply(null,a)})([_atoms.value, bsAddedMask, _list.get$I(i).mapGet$S("_isres") != null , (_atoms.value).length$() + margin],$I$(12).shiftBits$javajs_util_BS$javajs_util_BS$Z$I);
}
});

Clazz.newMeth(C$, 'getBasePairs$org_jmol_viewer_Viewer$I', function (vwr, modelIndex) {
});

Clazz.newMeth(C$, 'calculateDSSRStructure$org_jmol_viewer_Viewer$javajs_util_BS', function (vwr, bsAtoms) {
return null;
});

Clazz.newMeth(C$, 'fixDSSRJSONMap$java_util_Map', function (map) {
return null;
});

Clazz.newMeth(C$, 'getHBonds$org_jmol_modelset_ModelSet$I$javajs_util_Lst$Z', function (ms, modelIndex, vHBonds, doReport) {
return null;
});

Clazz.newMeth(C$, 'getAtomicDSSRData$org_jmol_modelset_ModelSet$I$FA$S', function (ms, modelIndex, dssrData, dataType) {
});

Clazz.newMeth(C$, 'setGroup1$org_jmol_modelset_ModelSet$I', function (ms, modelIndex) {
});

Clazz.newMeth(C$, 'getDSSRFrame$java_util_Map', function (dssrNT) {
return null;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
