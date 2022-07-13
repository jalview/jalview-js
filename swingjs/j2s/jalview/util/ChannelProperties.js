(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.HashMap','java.util.Properties','java.util.ArrayList','java.util.Arrays','javax.swing.ImageIcon','java.io.File','java.io.FileInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChannelProperties");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['channelProps','java.util.Properties','+defaultProps','imageMap','java.util.Map','+urlMap','iconList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'loadProps$java_io_File',  function (dir) {
var channelPropsFile=Clazz.new_($I$(6,1).c$$java_io_File$S,[dir, "channel.props"]);
if (channelPropsFile.exists$()) {
try {
var is=Clazz.new_($I$(7,1).c$$java_io_File,[channelPropsFile]);
C$.channelProps.load$java_io_InputStream(is);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
System.err.println$S(e.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
System.err.println$S(e.getMessage$());
}
} else {
throw e$$;
}
}
}}, 1);

Clazz.newMeth(C$, 'channelProps$',  function () {
return C$.channelProps;
}, 1);

Clazz.newMeth(C$, 'imageMap$',  function () {
return C$.imageMap;
}, 1);

Clazz.newMeth(C$, 'urlMap$',  function () {
return C$.urlMap;
}, 1);

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
return C$.getProperty$S$S$Z(key, null, true);
}, 1);

Clazz.newMeth(C$, 'getProperty$S$S',  function (key, defaultVal) {
return C$.getProperty$S$S$Z(key, defaultVal, false);
}, 1);

Clazz.newMeth(C$, 'getProperty$S$S$Z',  function (key, defaultVal, useClassDefaultProps) {
if (C$.channelProps$() != null ) {
if (C$.channelProps$().containsKey$O(key)) {
return C$.channelProps$().getProperty$S$S(key, useClassDefaultProps ? C$.defaultProps.getProperty$S(key) : defaultVal);
} else {
System.err.println$S("Failed to get channel property '" + key + "'" );
}}return null;
}, 1);

Clazz.newMeth(C$, 'getImage$S',  function (key) {
return C$.getImage$S$java_awt_Image$Z(key, null, true);
}, 1);

Clazz.newMeth(C$, 'getImage$S$java_awt_Image',  function (key, defaultImg) {
return C$.getImage$S$java_awt_Image$Z(key, defaultImg, false);
}, 1);

Clazz.newMeth(C$, 'getImage$S$java_awt_Image$Z',  function (key, defaultImg, useClassDefaultImage) {
var img=null;
if (C$.imageMap$().containsKey$O(key)) {
img=C$.imageMap$().get$O(key);
}if (img == null ) {
var path=C$.getProperty$S$S$Z(key, null, useClassDefaultImage);
if (path == null ) {
return useClassDefaultImage ? null : defaultImg;
}var imageURL=Clazz.getClass(C$).getResource$S(path);
var imgIcon=imageURL == null  ? null : Clazz.new_($I$(5,1).c$$java_net_URL,[imageURL]);
img=imgIcon == null  ? null : imgIcon.getImage$();
if (img == null ) {
System.err.println$S("Failed to load channel image " + key + "=" + path );
if (!useClassDefaultImage) {
return defaultImg;
}} else {
C$.imageMap$().put$O$O(key, img);
C$.urlMap.put$O$O(key, imageURL);
}}return img;
}, 1);

Clazz.newMeth(C$, 'getImageURL$S',  function (key) {
if (C$.getImage$S(key) != null ) {
if (C$.urlMap$().containsKey$O(key)) {
return C$.urlMap$().getOrDefault$O$O(key, null);
}System.err.println$S("Do not use getImageURL(key) before using getImage(key...)");
}return null;
}, 1);

Clazz.newMeth(C$, 'getIconList$',  function () {
return C$.iconList;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.imageMap=Clazz.new_($I$(1,1));
C$.urlMap=Clazz.new_($I$(1,1));
{
C$.defaultProps=Clazz.new_($I$(2,1));
C$.defaultProps.put$O$O("app_name", "Jalview");
C$.defaultProps.put$O$O("banner", "/default_images/jalview_banner.png");
C$.defaultProps.put$O$O("logo.16", "/default_images/jalview_logo-16.png");
C$.defaultProps.put$O$O("logo.32", "/default_images/jalview_logo-32.png");
C$.defaultProps.put$O$O("logo.38", "/default_images/jalview_logo-38.png");
C$.defaultProps.put$O$O("logo.48", "/default_images/jalview_logo-48.png");
C$.defaultProps.put$O$O("logo.64", "/default_images/jalview_logo-64.png");
C$.defaultProps.put$O$O("logo.128", "/default_images/jalview_logo-128.png");
C$.defaultProps.put$O$O("logo.256", "/default_images/jalview_logo-256.png");
C$.defaultProps.put$O$O("logo.512", "/default_images/jalview_logo-512.png");
C$.defaultProps.put$O$O("rotatable_logo.48", "/default_images/rotatable_jalview_logo-38.png");
C$.defaultProps.put$O$O("bg_logo.28", "/default_images/barton_group-28.png");
C$.defaultProps.put$O$O("bg_logo.30", "/default_images/barton_group-30.png");
C$.defaultProps.put$O$O("bg_logo.32", "/default_images/barton_group-32.png");
C$.defaultProps.put$O$O("uod_banner.28", "/default_images/UoD_banner-28.png");
C$.defaultProps.put$O$O("uod_banner.30", "/default_images/UoD_banner-30.png");
C$.defaultProps.put$O$O("uod_banner.32", "/default_images/UoD_banner-32.png");
C$.defaultProps.put$O$O("default_appbase", "https://www.jalview.org/getdown/release/1.8");
C$.defaultProps.put$O$O("preferences.filename", ".jalview_properties");
C$.defaultProps.put$O$O("channel", "none");
var tryChannelProps=Clazz.new_($I$(2,1));
var channelPropsURL=Clazz.getClass(C$).getResource$S("/channel.props");
if (channelPropsURL == null ) {
System.err.println$S("Failed to find '/" + "channel.props" + "' file at '" + (channelPropsURL == null  ? "null" : channelPropsURL.toString()) + "'. Using class defaultProps." );
tryChannelProps=C$.defaultProps;
} else {
try {
var channelPropsIS=channelPropsURL.openStream$();
tryChannelProps.load$java_io_InputStream(channelPropsIS);
channelPropsIS.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.getMessage$());
} else {
throw e;
}
}
}C$.channelProps=tryChannelProps;
C$.iconList=Clazz.new_($I$(3,1));
var sizes=$I$(4,"asList$OA",[Clazz.array(String, -1, ["16", "32", "48", "64", "128", "256", "512"])]);
for (var size, $size = sizes.iterator$(); $size.hasNext$()&&((size=($size.next$())),1);) {
var logo=null;
logo=C$.getImage$S$java_awt_Image$Z("logo." + size, null, false);
if (logo != null ) {
C$.iconList.add$O(logo);
}}
if (C$.iconList.size$() == 0) {
for (var size, $size = sizes.iterator$(); $size.hasNext$()&&((size=($size.next$())),1);) {
var logo=null;
var path=C$.defaultProps.getProperty$S("logo." + size);
var imageURL=Clazz.getClass(C$).getResource$S(path);
var imgIcon=imageURL == null  ? null : Clazz.new_($I$(5,1).c$$java_net_URL,[imageURL]);
logo=imgIcon == null  ? null : imgIcon.getImage$();
if (logo != null ) {
C$.iconList.add$O(logo);
}}
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
