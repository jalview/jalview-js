(function(){var P$=Clazz.newPackage("org.jmol.adapter.writers"),p$1={},I$=[[0,'javajs.util.PT','java.util.Hashtable','java.util.Date','org.qcschema.QCSchemaUnits',['org.jmol.adapter.writers.QCJSONWriter','.SparseArray'],'javajs.util.P3','javajs.util.DF','Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QCJSONWriter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.util.JSONWriter');
C$.$classes$=[['SparseArray',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.moBases=Clazz.new_($I$(2,1));
this.htBasisMap=Clazz.new_($I$(2,1));
this.basisID=0;
},1);

C$.$fields$=[['Z',['filterMOs'],'I',['basisID'],'O',['+moBases','+htBasisMap','vwr','org.jmol.viewer.Viewer','shells','javajs.util.Lst','dfCoefMaps','int[][]']]
,['O',['integrationKeyMap','java.util.Map']]]

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer$java_io_OutputStream', function (viewer, os) {
this.vwr=viewer;
this.setWriteNullAsString$Z(false);
this.setStream$java_io_OutputStream(os);
});

Clazz.newMeth(C$, 'toString', function () {
return (this.oc == null  ? "{}" : this.oc.toString());
});

Clazz.newMeth(C$, 'writeJSON$', function () {
this.openSchema$();
this.writeMagic$();
this.oc.append$S(",\n");
this.writeSchemaMetadata$();
this.writeJobs$();
this.closeSchema$();
});

Clazz.newMeth(C$, 'writeSchemaMetadata$', function () {
this.mapOpen$();
this.mapAddKeyValue$S$O$S("__jmol_created", Clazz.new_($I$(3,1)), ",\n");
this.mapAddKeyValue$S$O$S("__jmol_source", this.vwr.getP$S("_modelFile"), "");
this.mapClose$();
});

Clazz.newMeth(C$, 'openSchema$', function () {
this.arrayOpen$Z(false);
});

Clazz.newMeth(C$, 'writeMagic$', function () {
this.writeString$S($I$(4).version);
});

Clazz.newMeth(C$, 'closeSchema$', function () {
this.oc.append$S("\n");
this.arrayClose$Z(false);
this.closeStream$();
});

Clazz.newMeth(C$, 'writeJobs$', function () {
this.writeJob$I(1);
});

Clazz.newMeth(C$, 'writeJob$I', function (iJob) {
this.append$S(",\n");
this.mapOpen$();
{
this.mapAddKeyValue$S$O$S("__jmol_block", "Job " + iJob, ",\n");
this.writeJobMetadata$();
this.writeModels$();
this.writeMOBases$();
}this.mapClose$();
});

Clazz.newMeth(C$, 'writeJobMetadata$', function () {
this.mapAddKey$S("metadata");
this.mapOpen$();
{
this.mapAddMapAllExcept$S$java_util_Map$S("__jmol_info", this.vwr.getModelSetAuxiliaryInfo$(), ";group3Counts;properties;group3Lists;models;unitCellParams;");
}this.mapClose$();
});

Clazz.newMeth(C$, 'writeModels$', function () {
var nModels=this.vwr.ms.mc;
this.oc.append$S(",\n");
this.mapAddKey$S("steps");
this.arrayOpen$Z(true);
{
this.oc.append$S("\n");
for (var i=0; i < nModels; ) {
if (i > 0) this.append$S(",\n");
i=this.writeModel$I(i);
}
}this.arrayClose$Z(true);
});

Clazz.newMeth(C$, 'writeModel$I', function (modelIndex) {
var nextModel=modelIndex + 1;
this.append$S("");
this.mapOpen$();
{
this.mapAddKeyValue$S$O$S("__jmol_block", "Model " + (modelIndex + 1), ",\n");
this.writeTopology$I(modelIndex);
if (p$1.isVibration$I.apply(this, [modelIndex])) {
this.oc.append$S(",\n");
nextModel=this.writeVibrations$I(modelIndex);
}if (p$1.haveMOData$I.apply(this, [modelIndex])) {
this.oc.append$S(",\n");
p$1.writeMOData$I.apply(this, [modelIndex]);
}this.oc.append$S(",\n");
this.writeModelMetadata$I(modelIndex);
}this.mapClose$();
this.oc.append$S("\n");
return nextModel;
});

Clazz.newMeth(C$, 'writeTopology$I', function (modelIndex) {
this.mapAddKey$S("topology");
this.mapOpen$();
{
this.writeAtoms$I(modelIndex);
this.writeBonds$I(modelIndex);
}this.mapClose$();
});

Clazz.newMeth(C$, 'getProperty$I$S', function (modelIndex, key) {
var props=(modelIndex >= this.vwr.ms.am.length ? null : this.vwr.ms.am[modelIndex].auxiliaryInfo.get$O("modelProperties"));
return (props == null  ? null : props.get$O(key));
});

Clazz.newMeth(C$, 'isVibration$I', function (modelIndex) {
return (this.vwr.ms.getLastVibrationVector$I$I(modelIndex, 0) >= 0);
}, p$1);

Clazz.newMeth(C$, 'writeModelMetadata$I', function (modelIndex) {
this.mapAddKey$S("metadata");
this.mapOpen$();
{
this.mapAddMapAllExcept$S$java_util_Map$S("__jmol_info", this.vwr.ms.am[modelIndex].auxiliaryInfo, ";.PATH;PATH;fileName;moData;unitCellParams;");
}this.mapClose$();
});

Clazz.newMeth(C$, 'writeAtoms$I', function (modelIndex) {
var symbols=Clazz.new_($I$(5,1).c$$S,[this, null, "_RLE_"]);
var numbers=Clazz.new_($I$(5,1).c$$S,[this, null, "_RLE_"]);
var charges=Clazz.new_($I$(5,1).c$$S,[this, null, "_RLE_"]);
var names=Clazz.new_($I$(5,1).c$$S,[this, null, "_RLE_"]);
var types=Clazz.new_($I$(5,1).c$$S,[this, null, "_RLE_"]);
this.mapAddKey$S("atoms");
this.mapOpen$();
{
var unitCell=this.vwr.ms.getUnitCell$I(modelIndex);
var isFractional=(unitCell != null  && !unitCell.isBio$() );
if (isFractional) {
var params=unitCell.getUnitCellAsArray$Z(false);
p$1.writePrefix_Units$S$S.apply(this, ["unit_cell", "angstroms"]);
this.mapAddKeyValue$S$O$S("unit_cell", params, ",\n");
}p$1.writePrefix_Units$S$S.apply(this, ["coords", isFractional ? "fractional" : "angstroms"]);
this.mapAddKey$S("coords");
this.arrayOpen$Z(true);
{
this.oc.append$S("\n");
var bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
var last=bs.length$() - 1;
var pt=Clazz.new_($I$(6,1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=this.vwr.ms.at[i];
this.append$S("");
pt.setT$javajs_util_T3(a);
if (isFractional) unitCell.toFractional$javajs_util_T3$Z(pt, false);
this.oc.append$S(p$1.formatNumber$F.apply(this, [pt.x])).append$S(",\t").append$S(p$1.formatNumber$F.apply(this, [pt.y])).append$S(",\t").append$S(p$1.formatNumber$F.apply(this, [pt.z])).append$S(i < last ? ",\n" : "\n");
symbols.add$S((function(a,f){return f.apply(null,a)})([a.getElementSymbol$()],$I$(1).esc$S));
numbers.add$S("" + a.getElementNumber$());
charges.add$S("" + new Float(a.getPartialCharge$()).toString());
var name=a.getAtomName$();
names.add$S(name);
var type=a.getAtomType$();
types.add$S(type.equals$O(name) ? null : type);
}
}this.arrayClose$Z(true);
this.oc.append$S(",\n");
if (charges.isNumericAndNonZero$()) {
this.mapAddKeyValueRaw$S$O$S("charge", charges, ",\n");
}if (types.hasValues$()) {
this.mapAddKeyValueRaw$S$O$S("types", types, ",\n");
}this.mapAddKeyValueRaw$S$O$S("symbol", symbols, ",\n");
this.mapAddKeyValueRaw$S$O$S("atom_number", numbers, "\n");
}this.mapClose$();
});

Clazz.newMeth(C$, 'formatNumber$F', function (x) {
return (x < 0  ? "" : " ") + $I$(7).formatDecimal$F$I(x, -6);
}, p$1);

Clazz.newMeth(C$, 'writePrefix_Units$S$S', function (prefix, units) {
this.mapAddKeyValueRaw$S$O$S(prefix + "_units", $I$(4).getUnitsJSON$S$Z(units, false), ",\n");
}, p$1);

Clazz.newMeth(C$, 'writeBonds$I', function (modelIndex) {
});

Clazz.newMeth(C$, 'writeVibrations$I', function (modelIndex) {
this.mapAddKey$S("vibrations");
this.arrayOpen$Z(true);
{
this.oc.append$S("\n");
var sep=null;
var ivib=0;
modelIndex--;
while (p$1.isVibration$I.apply(this, [++modelIndex])){
if (sep != null ) this.oc.append$S(sep);
sep=",\n";
this.append$S("");
this.mapOpen$();
{
this.mapAddKeyValue$S$O$S("__jmol_block", "Vibration " + (++ivib), ",\n");
var value=this.getProperty$I$S(modelIndex, "FreqValue");
var freq=this.getProperty$I$S(modelIndex, "Frequency");
var intensity=this.getProperty$I$S(modelIndex, "IRIntensity");
var tokens;
if (value == null ) {
System.out.println$S("model " + modelIndex + " has no _M.properties.FreqValue" );
}if (freq == null ) {
System.out.println$S("model " + modelIndex + " has no _M.properties.Frequency" );
} else {
tokens=$I$(1).split$S$S(freq, " ");
if (tokens.length == 1) {
System.out.println$S("model " + modelIndex + " has no frequency units" );
}p$1.writeMapKeyValueUnits$S$O$S.apply(this, ["frequency", value, tokens[1]]);
}if (intensity != null ) {
tokens=$I$(1).split$S$S(intensity, " ");
p$1.writeMapKeyValueUnits$S$O$S.apply(this, ["ir_intensity", tokens[0], tokens[1]]);
}var label=this.getProperty$I$S(modelIndex, "FrequencyLabel");
if (label != null ) this.mapAddKeyValue$S$O$S("label", label, ",\n");
this.mapAddKey$S("vectors");
this.arrayOpen$Z(true);
{
this.oc.append$S("\n");
var bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
var last=bs.length$() - 1;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=this.vwr.ms.at[i];
var v=a.getVibrationVector$();
this.append$S("");
this.oc.append$S(p$1.formatNumber$F.apply(this, [v.x])).append$S(",\t").append$S(p$1.formatNumber$F.apply(this, [v.y])).append$S(",\t").append$S(p$1.formatNumber$F.apply(this, [v.z])).append$S(i < last ? ",\n" : "\n");
}
}this.arrayClose$Z(true);
}this.append$S("");
this.mapClose$();
}
}this.oc.append$S("\n");
this.arrayClose$Z(true);
return modelIndex;
});

Clazz.newMeth(C$, 'writeMapKeyValueUnits$S$O$S', function (key, value, units) {
this.mapAddKeyValueRaw$S$O$S(key, "{\"value\":" + value + ",\"units\":" + $I$(4).getUnitsJSON$S$Z(units, false) + "}" , ",\n");
}, p$1);

Clazz.newMeth(C$, 'haveMOData$I', function (modelIndex) {
return (p$1.getAuxiliaryData$I$S.apply(this, [modelIndex, "moData"]) != null );
}, p$1);

Clazz.newMeth(C$, 'getAuxiliaryData$I$S', function (modelIndex, key) {
return this.vwr.ms.am[modelIndex].auxiliaryInfo.get$O(key);
}, p$1);

Clazz.newMeth(C$, 'writeMOData$I', function (modelIndex) {
var moData=p$1.getAuxiliaryData$I$S.apply(this, [modelIndex, "moData"]);
var moDataJSON=Clazz.new_($I$(2,1));
moDataJSON.put$O$O("orbitals", moData.get$O("mos"));
var units=moData.get$O("EnergyUnits");
if (units == null ) units="?";
moDataJSON.put$O$O("orbitals_energy_units", $I$(4).getUnitsJSON$S$Z(units, true));
moDataJSON.put$O$O("__jmol_normalized", (function(a,f){return f.apply(null,a)})([moData.get$O("isNormalized") === $I$(8).TRUE ],$I$(8).valueOf$Z));
var type=moData.get$O("calculationType");
moDataJSON.put$O$O("__jmol_calculation_type", type == null  ? "?" : type);
p$1.setDFCoord$java_util_Map.apply(this, [moData]);
moDataJSON.put$O$O("basis_id", p$1.addBasis$java_util_Map.apply(this, [moData]));
this.filterMOs=true;
this.setModifyKeys$java_util_Map(C$.fixIntegration$());
this.mapAddKeyValue$S$O$S("molecular_orbitals", moDataJSON, "\n");
this.setModifyKeys$java_util_Map(null);
this.filterMOs=false;
this.append$S("");
}, p$1);

Clazz.newMeth(C$, 'fixIntegration$', function () {
if (C$.integrationKeyMap == null ) {
C$.integrationKeyMap=Clazz.new_($I$(2,1));
C$.integrationKeyMap.put$O$O("integration", "__jmol_integration");
}return C$.integrationKeyMap;
}, 1);

Clazz.newMeth(C$, 'getAndCheckValue$java_util_Map$S', function (map, key) {
if (this.filterMOs) {
if (key.equals$O("dfCoefMaps")) return null;
if (key.equals$O("symmetry")) return (map.get$O(key)).replace$C$C("_", " ").trim$();
if (key.equals$O("coefficients") && this.dfCoefMaps != null  ) {
return p$1.fixCoefficients$DA.apply(this, [map.get$O(key)]);
}}return map.get$O(key);
});

Clazz.newMeth(C$, 'fixCoefficients$DA', function (coeffs) {
var c=Clazz.array(Double.TYPE, [coeffs.length]);
for (var i=0, n=this.shells.size$(); i < n; i++) {
var shell=this.shells.get$I(i);
var type=shell[1];
var map=this.dfCoefMaps[type];
for (var j=0, coefPtr=0; j < map.length; j++, coefPtr++) c[coefPtr + j]=coeffs[coefPtr + map[j]];

}
return c;
}, p$1);

Clazz.newMeth(C$, 'setDFCoord$java_util_Map', function (moData) {
this.dfCoefMaps=moData.get$O("dfCoefMaps");
if (this.dfCoefMaps != null ) {
var haveMap=false;
for (var i=0; !haveMap && i < this.dfCoefMaps.length ; i++) {
var m=this.dfCoefMaps[i];
for (var j=0; j < m.length; j++) if (m[j] != 0) {
haveMap=true;
break;
}
}
if (!haveMap) this.dfCoefMaps=null;
}}, p$1);

Clazz.newMeth(C$, 'addBasis$java_util_Map', function (moData) {
var hash=1;
var gaussians=moData.get$O("gaussians");
if (gaussians != null ) {
hash^=gaussians.hashCode$();
}this.shells=moData.get$O("shells");
if (this.shells != null ) {
hash^=this.shells.hashCode$();
}var slaters=moData.get$O("slaters");
if (slaters != null ) {
hash^=slaters.hashCode$();
}var strHash="" + hash;
var key=this.htBasisMap.get$O(strHash);
if (key == null ) {
this.htBasisMap.put$O$O(strHash, key="MOBASIS_" + ++this.basisID);
var map=Clazz.new_($I$(2,1));
if (gaussians != null ) map.put$O$O("gaussians", gaussians);
if (this.shells != null ) {
map.put$O$O("shells", this.shells);
}if (slaters != null ) map.put$O$O("slaters", slaters);
this.moBases.put$O$O(key, map);
}return key;
}, p$1);

Clazz.newMeth(C$, 'writeMOBases$', function () {
if (this.moBases.isEmpty$()) return;
this.oc.append$S(",\n");
this.mapAddKey$S("mo_bases");
this.mapOpen$();
{
var sep=null;
for (var key, $key = this.moBases.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.startsWith$S("!")) continue;
this.append$S(sep);
this.mapAddKeyValue$S$O$S(key, this.moBases.get$O(key), "\n");
sep=",\n";
}
}this.mapClose$();
this.moBases.clear$();
});

Clazz.newMeth(C$, 'writeObject$O', function (o) {
if (Clazz.instanceOf(o, "org.jmol.quantum.SlaterData")) {
this.oc.append$S(o.toString());
} else {
C$.superclazz.prototype.writeObject$O.apply(this, [o]);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.QCJSONWriter, "SparseArray", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.util.SB');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.repeatCount=0;
this.elementCount=0;
this.lastElement=null;
this.sep="";
},1);

C$.$fields$=[['Z',['isRLE'],'I',['repeatCount','elementCount'],'S',['lastElement','sep','type']]]

Clazz.newMeth(C$, 'c$$S', function (type) {
Clazz.super_(C$, this);
this.type=type;
this.isRLE=(type.equals$O("_RLE_"));
}, 1);

Clazz.newMeth(C$, 'add$S', function (element) {
if (element == null ) element="null";
if (!this.isRLE) {
this.append$S(this.sep);
this.append$S(element);
this.sep=",";
return;
}if (this.repeatCount > 0 && !element.equals$O(this.lastElement) ) {
this.append$S(this.sep);
this.appendI$I(this.repeatCount);
this.sep=",";
this.append$S(this.sep);
this.append$S(this.lastElement);
this.repeatCount=0;
}this.lastElement=element;
this.repeatCount++;
this.elementCount++;
});

Clazz.newMeth(C$, 'lastElement$', function () {
return this.lastElement;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return (this.elementCount == 0);
});

Clazz.newMeth(C$, 'allNaN$', function () {
return (this.allSame$() && $I$(1).parseFloat$S(this.lastElement) == NaN  );
});

Clazz.newMeth(C$, 'allNull$', function () {
return (this.allSame$() && this.lastElement.equals$O("null") );
});

Clazz.newMeth(C$, 'allEmptyString$', function () {
return (this.allSame$() && this.lastElement.equals$O("") );
});

Clazz.newMeth(C$, 'allSame$', function () {
return (!this.isEmpty$() && this.elementCount == this.repeatCount );
});

Clazz.newMeth(C$, 'allZero$', function () {
return (this.allSame$() && $I$(1).parseFloat$S(this.lastElement) != NaN  );
});

Clazz.newMeth(C$, 'hasValues$', function () {
return (!this.allSame$() || !this.allNull$() && !this.allEmptyString$()  );
});

Clazz.newMeth(C$, 'isNumericAndNonZero$', function () {
return (this.allSame$() && !this.allNaN$() && !this.allZero$()  );
});

Clazz.newMeth(C$, 'toString', function () {
var s=C$.superclazz.prototype.toString.apply(this, []);
return (s.length$() == 0 ? "[]" : "[\"" + this.type + "\"," + s + (this.repeatCount > 0 ? this.sep + this.repeatCount + "," + this.lastElement  : "") + "]" );
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
