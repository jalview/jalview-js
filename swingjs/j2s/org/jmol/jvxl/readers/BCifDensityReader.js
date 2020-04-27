(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.AU','java.io.BufferedInputStream','java.io.ByteArrayInputStream','javajs.util.P3','javajs.util.MessagePackReader','javajs.util.BC','org.jmol.util.Logger','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BCifDensityReader", null, 'org.jmol.jvxl.readers.MapFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isDiff'],'F',['checkSum'],'I',['pt'],'O',['values','float[]','cifData','java.util.Map','+thisData']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getCifData$S$O', function (fileName, data) {
this.binarydoc=this.newBinaryDocument$();
if ($I$(1).isAB$O(data)) this.binarydoc.setStream$java_io_BufferedInputStream$Z(Clazz.new_([Clazz.new_($I$(3,1).c$$BA,[data])],$I$(2,1).c$$java_io_InputStream), true);
 else this.setStream$S$Z(fileName, true);
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readCifP3$S$javajs_util_P3', function (key, p3) {
if (p3 == null ) p3=Clazz.new_($I$(4,1));
var x=this.getCifFloat$S(key + "[0]");
if (Float.isNaN$F(x)) {
p3.x=NaN;
} else {
p3.x=x;
p3.y=this.getCifFloat$S(key + "[1]");
p3.z=this.getCifFloat$S(key + "[2]");
}return p3;
});

Clazz.newMeth(C$, 'getCifMap$S', function (type) {
if (this.cifData == null ) try {
this.cifData=(Clazz.new_($I$(5,1).c$$javajs_api_GenericBinaryDocumentReader$Z,[this.binarydoc, true])).readMap$();
System.out.println$S("BCifDensityReader BCIF encoder " + this.cifData.get$O("encoder") + " BCIF version " + this.cifData.get$O("version") );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("BCifDensityReader error " + e);
} else {
throw e;
}
}
var dataBlocks=this.cifData.get$O("dataBlocks");
for (var i=dataBlocks.length; --i >= 0; ) {
var map=dataBlocks[i];
if (type.equalsIgnoreCase$S(map.get$O("header").toString())) {
var categories=map.get$O("categories");
for (var j=categories.length; --j >= 0; ) {
var cat=categories[j];
var catName=cat.get$O("name");
var columns=cat.get$O("columns");
for (var k=columns.length; --k >= 0; ) {
var col=columns[k];
map.put$O$O(catName + "_" + col.get$O("name") , col.get$O("data"));
}
}
map.remove$O("categories");
return this.thisData=map;
}}
return null;
});

Clazz.newMeth(C$, 'getCifString$S', function (key) {
var map=this.thisData.get$O(key);
var data=map.get$O("data");
var encoding=(map.get$O("encoding"))[0];
var o=encoding.get$O("offsetEncoding");
return null;
});

Clazz.newMeth(C$, 'getCifFloat$S', function (key) {
var map=this.thisData.get$O(key);
var data=map.get$O("data");
var encoding=(((map.get$O("encoding"))[0]).get$O("type")).intValue$();
var f=NaN;
try {
switch (encoding) {
case 3:
f=$I$(6).bytesToInt$BA$I$Z(data, 0, false);
break;
case 33:
f=$I$(6).bytesToDoubleToFloat$BA$I$Z(data, 0, false);
break;
default:
System.out.println$S("BCDensityReader: Number encoding not recognized: " + encoding);
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return f;
});

Clazz.newMeth(C$, 'readCifFloats$S$FA', function (key, values) {
var map=this.thisData.get$O(key);
var data=map.get$O("data");
var encoding=(map.get$O("encoding"))[0];
var min=(encoding.get$O("min")).floatValue$();
var max=(encoding.get$O("max")).floatValue$();
var numSteps=(encoding.get$O("numSteps")).intValue$();
var kind=encoding.get$O("kind");
if ("IntervalQuantization".equals$O(kind)) {
var delta=(max - min) / (numSteps - 1);
for (var i=data.length; --i >= 0; ) {
values[i]=min + delta * ((data[i] + 256) % 256);
}
} else {
System.out.println$S("BCifDensityReader: value encoding type? " + kind);
}return values;
});

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.allowSigma=true;
this.init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
var o2=sg.getReaderData$();
var fileName=o2[0];
var data=o2[1];
this.isDiff=(fileName != null  && fileName.indexOf$S("&diff=1") >= 0  || Clazz.instanceOf(data, "java.lang.String") && (data).indexOf$S("#diff=1") >= 0  );
this.getCifData$S$O(fileName, data);
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.getCifMap$S(this.isDiff ? "FO-FC" : "2FO-FC");
var test=this.getCifString$S("_volume_data_3d_info_name");
this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_axis_order", this.p3);
var axis_order=this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_axis_order", null);
var fracOrigin=this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_origin", null);
var fracDimensions=this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_dimensions", null);
var sampleCounts=this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_sample_count", this.p3);
this.mapc=(axis_order.x|0) + 1;
this.mapr=(axis_order.y|0) + 1;
this.maps=(axis_order.z|0) + 1;
var crs2abc=Clazz.array(Integer.TYPE, [3]);
crs2abc[this.mapc - 1]=0;
crs2abc[this.mapr - 1]=1;
crs2abc[this.maps - 1]=2;
this.n0=(sampleCounts.x|0);
this.n1=(sampleCounts.y|0);
this.n2=(sampleCounts.z|0);
this.na=(p$1.getXYZ$javajs_util_P3$F.apply(this, [sampleCounts, crs2abc[0]])|0);
this.nb=(p$1.getXYZ$javajs_util_P3$F.apply(this, [sampleCounts, crs2abc[1]])|0);
this.nc=(p$1.getXYZ$javajs_util_P3$F.apply(this, [sampleCounts, crs2abc[2]])|0);
this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_spacegroup_cell_size", this.p3);
this.a=this.p3.x;
this.b=this.p3.y;
this.c=this.p3.z;
var fa=p$1.getXYZ$javajs_util_P3$F.apply(this, [fracDimensions, crs2abc[0]]);
var fb=p$1.getXYZ$javajs_util_P3$F.apply(this, [fracDimensions, crs2abc[1]]);
var fc=p$1.getXYZ$javajs_util_P3$F.apply(this, [fracDimensions, crs2abc[2]]);
this.xyzStart[this.xIndex=0]=p$1.getXYZ$javajs_util_P3$F.apply(this, [fracOrigin, crs2abc[0]]) * this.na / fa;
this.xyzStart[this.yIndex=1]=p$1.getXYZ$javajs_util_P3$F.apply(this, [fracOrigin, crs2abc[1]]) * this.nb / fb;
this.xyzStart[this.zIndex=2]=p$1.getXYZ$javajs_util_P3$F.apply(this, [fracOrigin, crs2abc[2]]) * this.nc / fc;
this.a *= fa;
this.b *= fb;
this.c *= fc;
this.readCifP3$S$javajs_util_P3("_volume_data_3d_info_spacegroup_cell_angles", this.p3);
this.alpha=this.p3.x;
this.beta=this.p3.y;
this.gamma=this.p3.z;
this.values=this.readCifFloats$S$FA("_volume_data_3d_values", Clazz.array(Float.TYPE, [this.na * this.nb * this.nc ]));
this.getVectorsAndOrigin$();
if (this.params.thePlane == null  && (this.params.cutoffAutomatic || !Float.isNaN$F(this.params.sigma) ) ) {
var sigma=(this.params.sigma < 0  || Float.isNaN$F(this.params.sigma)  ? 1 : this.params.sigma);
this.dmean=this.getCifFloat$S("_volume_data_3d_info_mean_sampled");
var rmsDeviation=this.getCifFloat$S("_volume_data_3d_info_sigma_sampled");
this.params.cutoff=rmsDeviation * sigma + this.dmean;
(function(a,f){return f.apply(null,a)})(["Cutoff set to (mean + rmsDeviation*" + new Float(sigma).toString() + " = " + new Float(this.params.cutoff).toString() + ")\n" ],$I$(7).info$S);
}this.jvxlFileHeaderBuffer=Clazz.new_($I$(8,1));
this.jvxlFileHeaderBuffer.append$S("CifDensity reader\n");
this.jvxlFileHeaderBuffer.append$S("see http://www.ebi.ac.uk/pdbe/densities/x-ray/1cbs/dbox/\n");
});

Clazz.newMeth(C$, 'getXYZ$javajs_util_P3$F', function (a, x) {
switch ((x|0)) {
case 0:
return a.x;
case 1:
return a.y;
case 2:
default:
return a.z;
}
}, p$1);

Clazz.newMeth(C$, 'nextVoxel$', function () {
var v=this.values[this.pt++];
this.checkSum += v;
return v;
});

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
this.pt+=nPoints;
});

Clazz.newMeth(C$, 'closeReader$', function () {
if (this.readerClosed) return;
System.out.println$S("CifDensityReader checkSum=" + new Float(this.checkSum).toString());
C$.superclazz.prototype.closeReader$.apply(this, []);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
