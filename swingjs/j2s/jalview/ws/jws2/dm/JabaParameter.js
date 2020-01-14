(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,'jalview.ws.jws2.dm.JabaValueConstrain','jalview.ws.jws2.ParameterUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JabaParameter", null, 'jalview.ws.jws2.dm.JabaOption', 'jalview.ws.params.ParameterI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$compbio_metadata_Parameter', function (rg) {
C$.superclazz.c$$compbio_metadata_Option.apply(this, [rg]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValidValue$', function () {
var vc=(this.opt).getValidValue$();
if (vc == null ) {
return null;
} else {
return Clazz.new_($I$(1).c$$compbio_metadata_ValueConstrain,[vc]);
}});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$compbio_metadata_Parameter,[$I$(2).copyParameter$compbio_metadata_Parameter(this.opt)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
