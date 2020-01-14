(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,'java.net.URL','Error','jalview.util.MessageManager','jalview.ws.jws2.ParameterUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JabaOption", null, null, 'jalview.ws.params.OptionI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.opt=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$compbio_metadata_Option', function (rg) {
C$.$init$.apply(this);
this.opt=rg;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.opt.getDefaultValue$();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.opt.getName$();
});

Clazz.newMeth(C$, 'getFurtherDetails$', function () {
try {
return Clazz.new_($I$(1).c$$S,[this.opt.getBasicURL$().toExternalForm$() + "/" + this.opt.getFurtherDetails$() ]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NullPointerException")){
var q = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var q = e$$;
{
}
} else {
throw e$$;
}
}
return null;
});

Clazz.newMeth(C$, 'isRequired$', function () {
return this.opt.isRequired$();
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.opt.getDescription$();
});

Clazz.newMeth(C$, 'getPossibleValues$', function () {
return this.opt.getPossibleValues$();
});

Clazz.newMeth(C$, 'setValue$S', function (selectedItem) {
try {
this.opt.setDefaultValue$S(selectedItem);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
throw Clazz.new_($I$(2).c$$S,[$I$(3).getString$S("error.implementation_error_cannot_set_jaba_option")]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$compbio_metadata_Option,[$I$(4).copyOption$compbio_metadata_Option(this.opt)]);
});

Clazz.newMeth(C$, 'getOption$', function () {
return this.opt;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
