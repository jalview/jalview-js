(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,'java.net.URL','Error','jalview.util.MessageManager','jalview.ws.jws2.ParameterUtils']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabaOption", null, null, 'jalview.ws.params.OptionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['opt','compbio.metadata.Option']]]

Clazz.newMeth(C$, 'c$$compbio_metadata_Option', function (rg) {
;C$.$init$.apply(this);
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
return Clazz.new_([this.opt.getBasicURL$().toExternalForm$() + "/" + this.opt.getFurtherDetails$() ],$I$(1,1).c$$S);
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
throw Clazz.new_([$I$(3).getString$S("error.implementation_error_cannot_set_jaba_option")],$I$(2,1).c$$S);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
