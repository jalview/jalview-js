(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,['compbio.metadata.ValueConstrain','.Type'],['jalview.ws.params.ValueConstrainI','.ValueType'],'Error','jalview.util.MessageManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabaValueConstrain", null, null, 'jalview.ws.params.ValueConstrainI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vc=null;
},1);

C$.$fields$=[['O',['vc','compbio.metadata.ValueConstrain']]]

Clazz.newMeth(C$, 'c$$compbio_metadata_ValueConstrain', function (vc) {
;C$.$init$.apply(this);
this.vc=vc;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
if (this.vc.getType$() === $I$(1).Float ) {
return $I$(2).Float;
}if (this.vc.getType$() === $I$(1).Integer ) {
return $I$(2).Integer;
}throw Clazz.new_([$I$(4,"formatMessage$S$SA",["error.implementation_error_valuetype_doesnt_support_jabaws_type", Clazz.array(String, -1, [this.vc.toString()])])],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.vc.getMax$();
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.vc.getMin$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
