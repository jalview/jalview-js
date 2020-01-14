(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,['compbio.metadata.ValueConstrain','.Type'],['jalview.ws.params.ValueConstrainI','.ValueType'],'Error','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JabaValueConstrain", null, null, 'jalview.ws.params.ValueConstrainI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vc=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vc=null;
}, 1);

Clazz.newMeth(C$, 'c$$compbio_metadata_ValueConstrain', function (vc) {
C$.$init$.apply(this);
this.vc=vc;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
if (this.vc.getType$() === $I$(1).Float ) {
return $I$(2).Float;
}if (this.vc.getType$() === $I$(1).Integer ) {
return $I$(2).Integer;
}throw Clazz.new_($I$(3).c$$S,[$I$(4).formatMessage$S$SA("error.implementation_error_valuetype_doesnt_support_jabaws_type", Clazz.array(String, -1, [this.vc.toString()]))]);
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.vc.getMax$();
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.vc.getMin$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
