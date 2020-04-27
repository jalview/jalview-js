(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'java.util.ArrayList','compbio.metadata.Option','java.util.HashSet','compbio.metadata.ValueConstrain','Error','jalview.util.MessageManager','compbio.metadata.Parameter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParameterUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'writeParameterSet$java_util_List$S', function (optSet, pseparator) {
var pset=Clazz.new_($I$(1,1));
for (var o, $o = optSet.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
pset.add$O(o.toCommand$S(pseparator));
}
return pset;
}, 1);

Clazz.newMeth(C$, 'processParameters$java_util_List$compbio_metadata_RunnerConfig$S', function (params, options, pseparator) {
var chosenOptions=Clazz.new_($I$(1,1));
for (var param, $param = params.iterator$(); $param.hasNext$()&&((param=($param.next$())),1);) {
var oname=null;
if (C$.isParameter$S$S(param, pseparator)) {
oname=C$.getParamName$S$S(param, pseparator);
} else {
oname=param;
}var o=options.getArgumentByOptionName$S(oname);
if (o == null ) {
System.out.println$S("WARN ignoring unsuppoted parameter: " + oname);
continue;
}if (Clazz.instanceOf(o, "compbio.metadata.Parameter")) {
o=C$.copyParameter$compbio_metadata_Parameter(o);
} else {
o=C$.copyOption$compbio_metadata_Option(o);
}{
try {
o.setDefaultValue$S(C$.isParameter$S$S(param, pseparator) ? C$.getParamValue$S$S(param, pseparator) : param);
} catch (e) {
if (Clazz.exceptionOf(e,"compbio.metadata.WrongParameterException")){
System.out.println$S("Problem setting value for the parameter: " + param);
e.printStackTrace$();
} else {
throw e;
}
}
}chosenOptions.add$O(o);
}
return chosenOptions;
}, 1);

Clazz.newMeth(C$, 'getParamName$S$S', function (fullName, pseparator) {
Clazz.assert(C$, this, function(){return C$.isParameter$S$S(fullName, pseparator)});
return fullName.substring$I$I(0, fullName.indexOf$S(pseparator));
}, 1);

Clazz.newMeth(C$, 'getParamValue$S$S', function (fullName, pseparator) {
Clazz.assert(C$, this, function(){return C$.isParameter$S$S(fullName, pseparator)});
return fullName.substring$I(fullName.indexOf$S(pseparator) + 1);
}, 1);

Clazz.newMeth(C$, 'isParameter$S$S', function (param, pseparator) {
return param.contains$CharSequence(pseparator);
}, 1);

Clazz.newMeth(C$, 'copyOption$compbio_metadata_Option', function (option) {
var copy=Clazz.new_([option.getName$(), option.getDescription$()],$I$(2,1).c$$S$S);
C$.setOptionFrom$compbio_metadata_Option$compbio_metadata_Option(copy, option);
return copy;
}, 1);

Clazz.newMeth(C$, 'setOptionFrom$compbio_metadata_Option$compbio_metadata_Option', function (copy, option) {
copy.setName$S(option.getName$());
copy.setDescription$S(option.getDescription$());
copy.setBasicURL$java_net_URL(option.getBasicURL$());
copy.setFurtherDetails$S(option.getFurtherDetails$());
copy.setRequired$Z(option.isRequired$());
var names=option.getOptionNames$();
if (names != null ) {
if (names.size$() == 1) {
var st=Clazz.new_($I$(3,1));
st.add$O(names.get$I(0));
copy.setOptionNames$java_util_Set(st);
} else {
copy.addOptionNames$SA(names.toArray$OA(Clazz.array(String, -1, [])));
}}try {
if (option.getDefaultValue$() != null ) {
copy.setDefaultValue$S(option.getDefaultValue$());
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'copyValueConstrain$compbio_metadata_ValueConstrain', function (vc) {
try {
var copy=Clazz.new_($I$(4,1));
if (vc.getMax$() != null ) {
copy.setMax$S(vc.getMax$().toString());
}if (vc.getMin$() != null ) {
copy.setMin$S(vc.getMin$().toString());
}if (vc.getType$() != null ) {
copy.setType$compbio_metadata_ValueConstrain_Type(vc.getType$());
}return copy;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
throw Clazz.new_([$I$(6).getString$S("error.implementation_error_couldnt_copy_value_constraint")],$I$(5,1).c$$S);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'copyParameter$compbio_metadata_Parameter', function (parameter) {
var copy=Clazz.new_([parameter.getName$(), parameter.getDescription$()],$I$(7,1).c$$S$S);
if (parameter.getValidValue$() != null ) {
copy.setValidValue$compbio_metadata_ValueConstrain(C$.copyValueConstrain$compbio_metadata_ValueConstrain(parameter.getValidValue$()));
}var pv=parameter.getPossibleValues$();
if (pv != null ) {
copy.addPossibleValues$SA(pv.toArray$OA(Clazz.array(String, -1, [])));
}C$.setOptionFrom$compbio_metadata_Option$compbio_metadata_Option(copy, parameter);
return copy;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
