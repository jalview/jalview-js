(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'org.jmol.api.Interface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IsoMepReader", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initIMR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'initIMR$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.type="Mep";
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.setup2$();
this.doAddHydrogens=false;
this.getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4(this.params.bsSelected, this.doAddHydrogens, true, false, false, false, false, this.params.mep_marginAngstroms, null);
this.setHeader$S$S("MEP", "");
this.setRanges$F$I$F(this.params.mep_ptsPerAngstrom, this.params.mep_gridMax, 0);
});

Clazz.newMeth(C$, 'generateCube$', function () {
this.newVoxelDataCube$();
var m=$I$(1).getOption$S$org_jmol_viewer_Viewer$S("quantum." + this.type + "Calculation" , this.sg.atomDataServer, "file");
m.calculate$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_P3A$org_jmol_modelset_AtomA$FA$I(this.volumeData, this.bsMySelected, this.atomData.xyz, this.atomData.atoms, this.params.theProperty, this.params.mep_calcType);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
