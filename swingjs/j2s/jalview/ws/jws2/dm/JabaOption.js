(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,'java.net.URL','jalview.util.MessageManager','jalview.ws.jws2.ParameterUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabaOption", null, null, 'jalview.ws.params.OptionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['opt','compbio.metadata.Option']]]

Clazz.newMeth(C$, 'c$$compbio_metadata_Option',  function (rg) {
;C$.$init$.apply(this);
this.opt=rg;
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return this.opt.getDefaultValue$();
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.opt.getName$();
});

Clazz.newMeth(C$, 'getFurtherDetails$',  function () {
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

Clazz.newMeth(C$, 'isRequired$',  function () {
return this.opt.isRequired$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.opt.getDescription$();
});

Clazz.newMeth(C$, 'getPossibleValues$',  function () {
return this.opt.getPossibleValues$();
});

Clazz.newMeth(C$, 'setValue$S',  function (selectedItem) {
try {
this.opt.setDefaultValue$S(selectedItem);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2,"formatMessage$S$SA",["error.invalid_value_for_option", Clazz.array(String, -1, [selectedItem, this.opt.getName$()])])]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'copy$',  function () {
return Clazz.new_(C$.c$$compbio_metadata_Option,[$I$(3).copyOption$compbio_metadata_Option(this.opt)]);
});

Clazz.newMeth(C$, 'getOption$',  function () {
return this.opt;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
