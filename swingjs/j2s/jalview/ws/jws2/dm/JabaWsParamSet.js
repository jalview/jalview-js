(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),p$1={},I$=[[0,'java.util.ArrayList','Error','jalview.util.MessageManager','jalview.ws.jws2.JabaParamStore']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabaWsParamSet", null, null, 'jalview.ws.params.WsParamSetI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modifiable=true;
},1);

C$.$fields$=[['Z',['modifiable'],'S',['name','description','applicableUrls','sourceFile'],'O',['jabaArguments','java.util.List']]]

Clazz.newMeth(C$, 'c$$S$S$java_util_List',  function (storeSetName, descr, jobParams) {
;C$.$init$.apply(this);
if (jobParams.size$() > 0) {
if (Clazz.instanceOf(jobParams.get$I(0), "compbio.metadata.Option")) {
this.jabaArguments=Clazz.new_($I$(1,1));
this.jabaArguments.addAll$java_util_Collection(jobParams);
} else {
if (!p$1.allJaba$java_util_List.apply(this, [jobParams])) {
throw Clazz.new_([$I$(3).getString$S("error.cannot_create_jabaws_param_set")],$I$(2,1).c$$S);
} else {
this.jabaArguments=$I$(4).getJabafromJwsArgs$java_util_List(jobParams);
}}}this.name=storeSetName;
this.description=descr;
this.sourceFile=null;
this.applicableUrls=null;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'allJaba$java_util_List',  function (jobParams) {
var allJaba=true;
for (var jp, $jp = jobParams.iterator$(); $jp.hasNext$()&&((jp=($jp.next$())),1);) {
if (Clazz.instanceOf(jp, "jalview.ws.jws2.dm.JabaParameter") || Clazz.instanceOf(jp, "jalview.ws.jws2.dm.JabaOption") ) {
allJaba=!!(allJaba&(true));
} else {
allJaba=false;
break;
}}
return allJaba;
}, p$1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'setApplicableUrls$SA',  function (applicableUrls) {
this.applicableUrls=applicableUrls;
});

Clazz.newMeth(C$, 'setModifiable$Z',  function (modifiable) {
this.modifiable=modifiable;
});

Clazz.newMeth(C$, 'getApplicableUrls$',  function () {
return this.applicableUrls;
});

Clazz.newMeth(C$, 'getSourceFile$',  function () {
return this.sourceFile;
});

Clazz.newMeth(C$, 'setSourceFile$S',  function (newfile) {
this.sourceFile=newfile;
});

Clazz.newMeth(C$, 'isModifiable$',  function () {
return this.modifiable;
});

Clazz.newMeth(C$, 'getArguments$',  function () {
return $I$(4).getJwsArgsfromJaba$java_util_List(this.jabaArguments);
});

Clazz.newMeth(C$, 'setArguments$java_util_List',  function (args) {
if (!p$1.allJaba$java_util_List.apply(this, [args])) {
throw Clazz.new_([$I$(3).getString$S("error.cannot_set_arguments_to_jabaws_param_set")],$I$(2,1).c$$S);
}this.jabaArguments=Clazz.new_($I$(1,1));
for (var rg, $rg = args.iterator$(); $rg.hasNext$()&&((rg=($rg.next$())),1);) {
this.jabaArguments.add$O((rg).opt);
}
});

Clazz.newMeth(C$, 'getjabaArguments$',  function () {
return this.jabaArguments;
});

Clazz.newMeth(C$, 'setjabaArguments$java_util_List',  function (args) {
this.jabaArguments=args;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
