(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'org.jmol.script.SV','java.util.Hashtable','javajs.util.PT','org.jmol.util.Logger','javajs.util.Lst']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MMCifValidationParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['asResidues'],'O',['reader','org.jmol.adapter.smarter.AtomSetCollectionReader','resMap','java.util.Map','+atomMap']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_adapter_smarter_AtomSetCollectionReader', function (reader) {
this.reader=reader;
this.asResidues=reader.checkFilterKey$S("ASRES");
return this;
});

Clazz.newMeth(C$, 'finalizeValidations$org_jmol_viewer_Viewer$java_util_Map', function (vwr, modelMap) {
var map=this.reader.dssr;
if (map != null ) return vwr.getAnnotationParser$Z(true).fixDSSRJSONMap$java_util_Map(map);
p$1.mapAtomResIDs$java_util_Map.apply(this, [modelMap]);
var svMap=this.reader.validation;
var retProps=this.reader.vwr.getAnnotationParser$Z(false).catalogValidations$org_jmol_viewer_Viewer$org_jmol_script_SV$IA$java_util_Map$java_util_Map$java_util_Map(this.reader.vwr, svMap, p$1.getModelAtomIndices.apply(this, []), this.resMap, (this.asResidues ? null : this.atomMap), modelMap);
var note=(retProps == null  || retProps.size$() == 0  ? null : p$1.setProperties$javajs_util_Lst.apply(this, [retProps]));
svMap.mapPut$S$org_jmol_script_SV("_note", $I$(1).newS$S(note));
return note;
});

Clazz.newMeth(C$, 'finalizeRna3d$java_util_Map', function (modelMap) {
p$1.mapAtomResIDs$java_util_Map.apply(this, [modelMap]);
var svMap=p$1.getRna3dMap$S.apply(this, [this.reader.addedData]);
var note=this.reader.vwr.getAnnotationParser$Z(false).catalogStructureUnits$org_jmol_viewer_Viewer$org_jmol_script_SV$IA$java_util_Map$O$java_util_Map(this.reader.vwr, svMap, p$1.getModelAtomIndices.apply(this, []), this.resMap, null, modelMap);
svMap.mapPut$S$org_jmol_script_SV("_note", $I$(1).newS$S(note));
for (var i=this.reader.asc.atomSetCount; --i >= 0; ) {
var info=this.reader.asc.getAtomSetAuxiliaryInfo$I(i);
info.put$O$O("rna3d", svMap);
}
return note;
});

Clazz.newMeth(C$, 'getRna3dMap$S', function (addedData) {
var map=Clazz.new_($I$(2,1));
var next=Clazz.array(Integer.TYPE, [1]);
var id="";
while ((id=$I$(3).getQuotedStringNext$S$IA(addedData, next)).length$() > 0){
var units=$I$(3).getQuotedStringNext$S$IA(addedData, next);
var type="?";
switch ((id.charCodeAt$I(0))) {
case 72:
type="hairpinLoops";
break;
case 73:
type="internalLoops";
break;
case 74:
type="junctions";
break;
default:
$I$(4).error$S("MMCif could not read: " + id + " " + units );
continue;
}
var list=map.get$O(type);
if (list == null ) map.put$O$O(type, list=Clazz.new_($I$(5,1)));
var m=Clazz.new_($I$(2,1));
m.put$O$O("index", Integer.valueOf$I((function(a,f){return f.apply(null,a)})([id.substring$I(id.lastIndexOf$S("_") + 1)],$I$(3).parseInt$S)));
m.put$O$O("units", units);
list.addLast$O(m);
}
return $I$(1).getVariableMap$java_util_Map(map);
}, p$1);

Clazz.newMeth(C$, 'mapAtomResIDs$java_util_Map', function (modelMap) {
var atoms=this.reader.asc.atoms;
this.resMap=Clazz.new_($I$(2,1));
this.atomMap=Clazz.new_($I$(2,1));
var iresLast=-1;
var resLast=null;
var smodel="" + modelMap.get$O("_0");
for (var i=0, model=1, i0=0, n=this.reader.asc.getAtomSetAtomCount$I(0); i < n; i++) {
var a=atoms[i];
var ires=a.sequenceNumber;
var res=smodel + "_" + a.chainID + "_" + ires + "_" + (a.insertionCode == "\u0000" ? "" : "" + a.insertionCode) ;
var atom=res + "_" + a.atomName.toUpperCase$() + "_" + (a.altLoc == "\u0000" ? "" : "" + Character.toLowerCase$C(a.altLoc)) ;
var ia=Integer.valueOf$I(i - i0);
if (ires != iresLast) {
iresLast=ires;
if (resLast != null ) resLast[1]=i - i0;
this.resMap.put$O$O(res, resLast=Clazz.array(Integer.TYPE, -1, [i - i0, n]));
}this.atomMap.put$O$O(atom, ia);
if (i == n - 1) {
i0+=n;
n=this.reader.asc.getAtomSetAtomCount$I(model++);
}}
}, p$1);

Clazz.newMeth(C$, 'getModelAtomIndices', function () {
var indices=Clazz.array(Integer.TYPE, [this.reader.asc.atomSetCount + 1]);
for (var m=indices.length - 1; --m >= 0; ) indices[m]=this.reader.baseAtomIndex + this.reader.asc.getAtomSetAtomIndex$I(m);

indices[indices.length - 1]=this.reader.asc.ac;
return indices;
}, p$1);

Clazz.newMeth(C$, 'setProperties$javajs_util_Lst', function (propList) {
var note="Validations loaded:";
for (var i=0, n=propList.size$(); i < n; ) {
var key=propList.get$I(i++);
var f=propList.get$I(i++);
var model=(propList.get$I(i++)).intValue$();
var isGroup=(propList.get$I(i++)).booleanValue$();
var count=0;
var max=0;
var reslast=-1;
var i0=this.reader.asc.getAtomSetAtomIndex$I(model);
for (var j=f.length; --j >= 0; ) if (f[j] != 0 ) {
if (isGroup) {
var res=this.reader.asc.atoms[i0 + j].sequenceNumber;
if (res != reslast) {
reslast=res;
count++;
}} else {
count++;
}max=Math.max(f[j], max);
}
note += "\n  property_" + key + " (" + (isGroup ? "residues: " : "atoms: ") + count + (max == 1  ? "" : ", max: " + new Float((((max * 100)|0)) / 100.0).toString()) + ")" ;
this.reader.asc.setAtomProperties$S$O$I$Z(key, f, model, isGroup);
}
return note;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
