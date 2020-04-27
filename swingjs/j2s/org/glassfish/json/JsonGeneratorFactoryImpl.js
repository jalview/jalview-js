(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'org.glassfish.json.JsonProviderImpl','java.util.HashMap','java.util.Collections','org.glassfish.json.JsonPrettyGeneratorImpl','org.glassfish.json.JsonGeneratorImpl']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonGeneratorFactoryImpl", null, null, 'javax.json.stream.JsonGeneratorFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['prettyPrinting'],'O',['config','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Map', function (config) {
;C$.$init$.apply(this);
this.prettyPrinting=config != null  && $I$(1).isPrettyPrintingEnabled$java_util_Map(config) ;
var providerConfig=Clazz.new_($I$(2,1));
if (this.prettyPrinting) {
providerConfig.put$O$O("javax.json.stream.JsonGenerator.prettyPrinting", new Boolean(true));
}this.config=$I$(3).unmodifiableMap$java_util_Map(providerConfig);
}, 1);

Clazz.newMeth(C$, 'createGenerator$java_io_Writer', function (writer) {
return this.prettyPrinting ? Clazz.new_($I$(4,1).c$$java_io_Writer,[writer]) : Clazz.new_($I$(5,1).c$$java_io_Writer,[writer]);
});

Clazz.newMeth(C$, 'createGenerator$java_io_OutputStream', function (out) {
return this.prettyPrinting ? Clazz.new_($I$(4,1).c$$java_io_OutputStream,[out]) : Clazz.new_($I$(5,1).c$$java_io_OutputStream,[out]);
});

Clazz.newMeth(C$, 'createGenerator$java_io_OutputStream$java_nio_charset_Charset', function (out, charset) {
return this.prettyPrinting ? Clazz.new_($I$(4,1).c$$java_io_OutputStream$java_nio_charset_Charset,[out, charset]) : Clazz.new_($I$(5,1).c$$java_io_OutputStream$java_nio_charset_Charset,[out, charset]);
});

Clazz.newMeth(C$, 'getConfigInUse$', function () {
return this.config;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
