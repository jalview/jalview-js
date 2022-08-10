(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.ChannelProperties','java.io.File','java.util.Properties','java.io.FileInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['userPreferences','java.util.Properties']]]

Clazz.newMeth(C$, 'loadChannelProps$java_io_File',  function (dir) {
$I$(1).loadProps$java_io_File(dir);
}, 1);

Clazz.newMeth(C$, 'getUserPreference$S',  function (key) {
if (C$.userPreferences == null ) {
var channelPrefsFilename=$I$(1).getProperty$S("preferences.filename");
if (channelPrefsFilename == null ) {
return null;
}var propertiesFile=Clazz.new_([System.getProperty$S("user.home"), channelPrefsFilename],$I$(2,1).c$$S$S);
if (!propertiesFile.exists$()) {
return null;
}try {
C$.userPreferences=Clazz.new_($I$(3,1));
C$.userPreferences.load$java_io_InputStream(Clazz.new_($I$(4,1).c$$java_io_File,[propertiesFile]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
System.err.println$S(e.getMessage$());
return null;
}
} else {
throw e$$;
}
}
}return C$.userPreferences.getProperty$S(key);
}, 1);

Clazz.newMeth(C$, 'getBooleanUserPreference$S',  function (key) {
return Boolean.parseBoolean$S(C$.getUserPreference$S(key));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.userPreferences=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
