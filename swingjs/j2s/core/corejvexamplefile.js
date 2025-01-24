(function(Clazz,Clazz_setTVer,Clazz_toLong,Clazz_incrAN,Clazz_array,Clazz_assert,Clazz_clone,Clazz_exceptionOf,Clazz_forName,Clazz_getClass,Clazz_instanceOf,Clazz_load,Clazz_new_,Clazz_newClass,Clazz_newEnumConst,Clazz_newInstance,Clazz_newInterface,Clazz_newMeth,Clazz_newPackage,Clazz_super_){(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform','jalview.util.ShortcutKeyMaskExWrapper11','jalview.util.ShortcutKeyMaskExWrapper8']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShortcutKeyMaskExWrapper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['F',['modern'],'I',['SHIFT_DOWN_MASK','ALT_DOWN_MASK'],'O',['specversion','Float','wrapper','jalview.util.ShortcutKeyMaskExWrapperI']]]

Clazz.newMeth(C$, 'getMenuShortcutKeyMaskEx$',  function () {
return C$.wrapper.getMenuShortcutKeyMaskEx$();
}, 1);

Clazz.newMeth(C$, 'getModifiersEx$java_awt_event_MouseEvent',  function (e) {
return C$.wrapper.getModifiersEx$java_awt_event_MouseEvent(e);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.specversion=Float.valueOf$F($I$(1).isJS$() ? (Float.valueOf$F(8)).valueOf() : Float.parseFloat$S(System.getProperty$S("java.specification.version")));
C$.modern=11;
if ((C$.specversion).$c() >= C$.modern ) {
C$.wrapper=Clazz.new_($I$(2,1));
C$.SHIFT_DOWN_MASK=$I$(2).SHIFT_DOWN_MASK;
C$.ALT_DOWN_MASK=$I$(2).ALT_DOWN_MASK;
} else {
C$.wrapper=Clazz.new_($I$(3,1));
C$.SHIFT_DOWN_MASK=$I$(3).SHIFT_DOWN_MASK;
C$.ALT_DOWN_MASK=$I$(3).ALT_DOWN_MASK;
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShortcutKeyMaskExWrapper8", null, null, 'jalview.util.ShortcutKeyMaskExWrapperI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['SHIFT_DOWN_MASK','ALT_DOWN_MASK']]]

Clazz.newMeth(C$, 'getMenuShortcutKeyMaskEx$',  function () {
try {
if (!$I$(1).isHeadless$()) {
return $I$(2).getDefaultToolkit$().getMenuShortcutKeyMask$();
}} catch (t) {
}
return 0;
});

Clazz.newMeth(C$, 'getModifiersEx$java_awt_event_MouseEvent',  function (e) {
return e.getModifiers$();
});

C$.$static$=function(){C$.$static$=0;
{
C$.SHIFT_DOWN_MASK=1;
C$.ALT_DOWN_MASK=8;
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HttpUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isValidUrl$S',  function (url) {
var is=null;
try {
is=Clazz.new_($I$(1,1).c$$S,[url]).openStream$();
if (is != null ) {
return true;
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
return false;
} else {
throw x;
}
} finally {
if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return false;
}, 1);

Clazz.newMeth(C$, 'startsWithHttpOrHttps$S',  function (file) {
return file.startsWith$S("http://") || file.startsWith$S("https://") ;
}, 1);

Clazz.newMeth(C$, 'checkUrlAvailable$java_net_URL$I',  function (url, readTimeout) {
var connection=url.openConnection$();
connection.setRequestMethod$S("HEAD");
connection.setDoInput$Z(true);
connection.setUseCaches$Z(false);
connection.setConnectTimeout$I(300);
connection.setReadTimeout$I(readTimeout);
return connection.getResponseCode$() == 200;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntRangeComparator", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['forwards']]
,['O',['ASCENDING','java.util.Comparator','+DESCENDING']]]

Clazz.newMeth(C$, 'c$$Z',  function (forward) {
;C$.$init$.apply(this);
this.forwards=forward;
}, 1);

Clazz.newMeth(C$, ['compare$IA$IA','compare$O$O'],  function (o1, o2) {
var compared=Integer.compare$I$I(o1[0], o2[0]);
return this.forwards ? compared : -compared;
});

C$.$static$=function(){C$.$static$=0;
C$.ASCENDING=Clazz.new_(C$.c$$Z,[true]);
C$.DESCENDING=Clazz.new_(C$.c$$Z,[false]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform','org.json.JSONObject']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'arrayToStringList$java_util_List',  function (jsonArray) {
var n;
if (jsonArray == null  || (n=jsonArray.size$()) == 0 ) {
return null;
}{
return jsonArray.elementData.slice(0, n).join(",");
}
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader',  function (r) {
return $I$(1).parseJSON$java_io_Reader(r);
}, 1);

Clazz.newMeth(C$, 'parse$S',  function (json) {
return $I$(1).parseJSON$S(json);
}, 1);

Clazz.newMeth(C$, 'stringify$O',  function (obj) {
return Clazz.new_($I$(2,1).c$$O,[obj]).toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
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
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "ShortcutKeyMaskExWrapperI");

C$.$fields$=[[]
,['I',['SHIFT_DOWN_MASK','ALT_DOWN_MASK']]]

C$.$static$=function(){C$.$static$=0;
C$.SHIFT_DOWN_MASK=0;
C$.ALT_DOWN_MASK=0;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.awt.Taskbar',['java.awt.Taskbar','.Feature'],'jalview.util.ChannelProperties']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewTaskbar");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setTaskbar$jalview_bin_Jalview',  function (jalview) {
if ($I$(1).isTaskbarSupported$()) {
var tb=$I$(1).getTaskbar$();
if (tb.isSupported$java_awt_Taskbar_Feature($I$(2).ICON_IMAGE)) {
var image=$I$(3).getImage$S("logo.512");
if (image != null ) {
tb.setIconImage$java_awt_Image(image);
} else {
System.out.println$S("Unable to setIconImage()");
}}}}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FilterOption");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['addSeparatorAfter'],'S',['name','value','view'],'O',['querySource','jalview.gui.structurechooser.StructureChooserQuerySource']]]

Clazz.newMeth(C$, 'c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource',  function (name, value, view, addSeparatorAfter, structureChooserQuerySource) {
;C$.$init$.apply(this);
this.name=name;
this.value=value;
this.view=view;
this.querySource=structureChooserQuerySource;
this.addSeparatorAfter=addSeparatorAfter;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getView$',  function () {
return this.view;
});

Clazz.newMeth(C$, 'setView$S',  function (view) {
this.view=view;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'isAddSeparatorAfter$',  function () {
return this.addSeparatorAfter;
});

Clazz.newMeth(C$, 'setAddSeparatorAfter$Z',  function (addSeparatorAfter) {
this.addSeparatorAfter=addSeparatorAfter;
});

Clazz.newMeth(C$, 'getQuerySource$',  function () {
return this.querySource;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "jalview.jbgui.FilterOption")) {
var o=obj;
return o.name.equals$O(this.name) && o.querySource === this.querySource   && o.value.equals$O(this.value)  && o.view == this.view ;
} else {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
}});

Clazz.newMeth(C$, 'hashCode$',  function () {
return ("" + this.name + ":" + this.value ).hashCode$() + (this.view != null  ? this.view.hashCode$() : 0) + (this.querySource != null  ? this.querySource.hashCode$() : 0) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:46 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JTextArea','javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JPanel','javax.swing.JButton','jalview.gui.JvSwingUtils','jalview.util.MessageManager','javax.swing.KeyStroke','jalview.util.ShortcutKeyMaskExWrapper','java.awt.Font','java.awt.event.MouseAdapter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer", null, 'javax.swing.JInternalFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textarea=Clazz.new_($I$(1,1));
this.scrollPane=Clazz.new_($I$(2,1));
this.borderLayout1=Clazz.new_($I$(3,1));
this.editMenubar=Clazz.new_($I$(4,1));
this.editMenu=Clazz.new_($I$(5,1));
this.copyItem=Clazz.new_($I$(6,1));
this.pasteMenu=Clazz.new_($I$(6,1));
this.borderLayout2=Clazz.new_($I$(3,1));
this.inputButtonPanel=Clazz.new_($I$(7,1));
this.ok=Clazz.new_($I$(8,1));
this.cancel=Clazz.new_($I$(8,1));
this.selectAll=Clazz.new_($I$(6,1));
this.jMenu1=Clazz.new_($I$(5,1));
this.save=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['O',['textarea','javax.swing.JTextArea','scrollPane','javax.swing.JScrollPane','borderLayout1','java.awt.BorderLayout','editMenubar','javax.swing.JMenuBar','editMenu','javax.swing.JMenu','copyItem','javax.swing.JMenuItem','+pasteMenu','borderLayout2','java.awt.BorderLayout','inputButtonPanel','javax.swing.JPanel','ok','javax.swing.JButton','+cancel','selectAll','javax.swing.JMenuItem','jMenu1','javax.swing.JMenu','save','javax.swing.JMenuItem']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
this.setJMenuBar$javax_swing_JMenuBar(this.editMenubar);
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.scrollPane.setBorder$javax_swing_border_Border(null);
this.ok.setFont$java_awt_Font($I$(9).getLabelFont$());
this.ok.setText$S($I$(10).getString$S("label.new_window"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].ok_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$1.$init$,[this, null])));
this.cancel.setText$S($I$(10).getString$S("action.close"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$2.$init$,[this, null])));
this.textarea.setBorder$javax_swing_border_Border(null);
this.selectAll.setText$S($I$(10).getString$S("action.select_all"));
this.selectAll.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[65, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.selectAll.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].selectAll_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$3.$init$,[this, null])));
this.jMenu1.setText$S($I$(10).getString$S("action.file"));
this.save.setText$S($I$(10).getString$S("action.save"));
this.save.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[83, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.save.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].save_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$4.$init$,[this, null])));
this.copyItem.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[67, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.pasteMenu.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[86, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.editMenubar.add$javax_swing_JMenu(this.jMenu1);
this.editMenubar.add$javax_swing_JMenu(this.editMenu);
this.textarea.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Monospaced", 0, 12]));
this.textarea.addMouseListener$java_awt_event_MouseListener(((P$.GCutAndPasteTransfer$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].textarea_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].textarea_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.GCutAndPasteTransfer$5)));
this.editMenu.setText$S($I$(10).getString$S("action.edit"));
this.pasteMenu.setText$S($I$(10).getString$S("action.paste"));
this.pasteMenu.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].pasteMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$6.$init$,[this, null])));
this.copyItem.setText$S($I$(10).getString$S("action.copy"));
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].copyItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$7.$init$,[this, null])));
this.getContentPane$().setLayout$java_awt_LayoutManager(this.borderLayout2);
this.scrollPane.setBorder$javax_swing_border_Border(null);
this.scrollPane.getViewport$().add$java_awt_Component$O(this.textarea, null);
this.editMenu.add$javax_swing_JMenuItem(this.selectAll);
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.editMenu.add$javax_swing_JMenuItem(this.pasteMenu);
this.getContentPane$().add$java_awt_Component$O(this.scrollPane, "Center");
this.inputButtonPanel.add$java_awt_Component(this.ok);
this.inputButtonPanel.add$java_awt_Component(this.cancel);
this.jMenu1.add$javax_swing_JMenuItem(this.save);
}, p$1);

Clazz.newMeth(C$, 'textarea_mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'copyItem_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'pasteMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'selectAll_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.textarea.selectAll$();
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:46 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.HashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "Species", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['modelOrganism']]
,['O',['modelOrganisms','java.util.Set']]]

Clazz.newMeth(C$, 'c$$Z',  function (model) {
;C$.$init$.apply(this);
this.modelOrganism=model;
}, 1);

Clazz.newMeth(C$, 'isModelOrganism$',  function () {
return this.modelOrganism;
});

Clazz.newMeth(C$, 'getModelOrganisms$',  function () {
return C$.modelOrganisms;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z, "human", 0, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "mouse", 1, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "s_cerevisiae", 2, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "cow", 3, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "pig", 4, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "rattus_norvegicus", 5, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "celegans", 6, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "sheep", 7, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "horse", 8, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "gorilla", 9, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "rabbit", 10, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "gibbon", 11, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "dog", 12, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "orangutan", 13, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "xenopus_tropicalis", 14, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "chimpanzee", 15, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "cat", 16, [false]);
Clazz.newEnumConst($vals, C$.c$$Z, "zebrafish", 17, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "chicken", 18, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "drosophila_melanogaster", 19, [true]);
C$.modelOrganisms=Clazz.new_($I$(1,1));
{
for (var s, $s = 0, $$s = C$.values$(); $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s.isModelOrganism$()) {
C$.modelOrganisms.add$O(s);
}}
};
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),p$1={},I$=[[0,['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],'java.util.ArrayList','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.util.JSONUtils','jalview.datamodel.SequenceFeature','StringBuffer','java.net.URL']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblFeatures", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.featuresWanted=Clazz.array($I$(1), -1, [$I$(1).cds, $I$(1).exon, $I$(1).variation]);
},1);

C$.$fields$=[['O',['featuresWanted','jalview.ext.ensembl.EnsemblSequenceFetcher.EnsemblFeatureType[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return "ENSEMBL (features)";
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (query) {
var queries=Clazz.new_($I$(2,1));
queries.add$O(query);
var seq=p$1.parseFeaturesJson$java_util_List.apply(this, [queries]);
if (seq == null ) return null;
return Clazz.new_([Clazz.array($I$(4), -1, [seq])],$I$(3,1).c$$jalview_datamodel_SequenceIA);
});

Clazz.newMeth(C$, 'parseFeaturesJson$java_util_List',  function (queries) {
var seq=Clazz.new_($I$(5,1).c$$S$S,["Dummy", ""]);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(null, queries, -1, 2, null);
if (rvals == null ) {
return null;
}while (rvals.hasNext$()){
try {
var obj=rvals.next$();
var type=obj.get$O("feature_type").toString();
var start=Integer.parseInt$S(obj.get$O("start").toString());
var end=Integer.parseInt$S(obj.get$O("end").toString());
var source=obj.get$O("source").toString();
var strand=obj.get$O("strand").toString();
var phase=obj.get$O("phase");
var alleles=$I$(6,"arrayToStringList$java_util_List",[obj.get$O("alleles")]);
var clinSig=$I$(6,"arrayToStringList$java_util_List",[obj.get$O("clinical_significance")]);
if ("variation".equals$O(type)) {
type="sequence_variant";
} else if ("CDS".equalsIgnoreCase$S((type))) {
type="CDS";
}var desc=this.getFirstNotNull$java_util_Map$SA(obj, Clazz.array(String, -1, ["alleles", "external_name", "id"]));
var sf=Clazz.new_($I$(7,1).c$$S$S$I$I$S,[type, desc, start, end, source]);
sf.setStrand$S("1".equals$O(strand) ? "+" : "-");
if (phase != null ) {
sf.setPhase$S(phase.toString());
}this.setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S(sf, obj, "id");
this.setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S(sf, obj, "Parent");
this.setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S(sf, obj, "consequence_type");
sf.setValue$S$O("alleles", alleles);
sf.setValue$S$O("clinical_significance", clinSig);
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
} catch (t) {
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return seq;
}, p$1);

Clazz.newMeth(C$, 'getFirstNotNull$java_util_Map$SA',  function (obj, keys) {
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
var val=obj.get$O(key);
if (val != null ) {
var s=Clazz.instanceOf(val, "java.util.List") ? $I$(6).arrayToStringList$java_util_List(val) : val.toString();
if (!s.isEmpty$()) {
return s;
}}}
return null;
});

Clazz.newMeth(C$, 'setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S',  function (sf, obj, key) {
var object=obj.get$O(key);
if (object != null ) {
sf.setValue$S$O(key, object.toString());
}});

Clazz.newMeth(C$, 'getUrl$java_util_List',  function (ids) {
var urlstring=Clazz.new_($I$(8,1).c$$I,[128]);
urlstring.append$S(this.getDomain$()).append$S("/overlap/id/").append$S(ids.get$I(0));
urlstring.append$S("?content-type=" + this.getResponseMimeType$());
urlstring.append$S("&").append$S("object_type").append$S("=").append$S("Gene");
for (var feature, $feature = 0, $$feature = this.featuresWanted; $feature<$$feature.length&&((feature=($$feature[$feature])),1);$feature++) {
urlstring.append$S("&feature=").append$S(feature.name$());
}
return Clazz.new_([urlstring.toString()],$I$(9,1).c$$S);
});

Clazz.newMeth(C$, 'useGetRequest$',  function () {
return true;
});

Clazz.newMeth(C$, 'getRequestMimeType$',  function () {
return "application/json";
});

Clazz.newMeth(C$, 'getResponseMimeType$',  function () {
return "application/json";
});

Clazz.newMeth(C$, 'getSequenceRecords$S$jalview_ext_ensembl_EnsemblSequenceFetcher_EnsemblFeatureTypeA',  function (accId, features) {
this.featuresWanted=features;
return this.getSequenceRecords$S(accId);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.net.URL','java.util.Arrays','java.util.Collections','jalview.datamodel.Mapping','jalview.util.MapList','jalview.datamodel.GeneLocus','jalview.bin.Console']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblLookup", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return "ENSEMBL";
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return null;
});

Clazz.newMeth(C$, 'getUrl$java_util_List',  function (ids) {
var identifier=ids.get$I(0);
return this.getUrl$S$S(identifier, null);
});

Clazz.newMeth(C$, 'getUrl$S$S',  function (identifier, objectType) {
var url=this.getDomain$() + "/lookup/id/" + identifier + "?content-type=application/json" ;
if (objectType != null ) {
url+="&" + "object_type" + "=" + objectType ;
}try {
return Clazz.new_($I$(1,1).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'useGetRequest$',  function () {
return true;
});

Clazz.newMeth(C$, 'getGeneId$S',  function (identifier) {
return this.getGeneId$S$S(identifier, null);
});

Clazz.newMeth(C$, 'getGeneId$S$S',  function (identifier, objectType) {
return this.parseGeneId$java_util_Map(this.getResult$S$S(identifier, objectType));
});

Clazz.newMeth(C$, 'parseGeneId$java_util_Map',  function (val) {
if (val == null ) {
return null;
}var geneId=null;
var type=val.get$O("object_type").toString();
if ("Gene".equalsIgnoreCase$S(type)) {
geneId=val.get$O("id").toString();
} else if ("Transcript".equalsIgnoreCase$S(type)) {
geneId=val.get$O("Parent").toString();
} else if ("Translation".equalsIgnoreCase$S(type)) {
var transcriptId=val.get$O("Parent").toString();
geneId=this.getGeneId$S$S(transcriptId, "Transcript");
}return geneId;
});

Clazz.newMeth(C$, 'getSpecies$S',  function (identifier) {
var species=null;
var json=this.getResult$S$S(identifier, null);
if (json != null ) {
var o=json.get$O("species");
if (o != null ) {
species=o.toString();
}}return species;
});

Clazz.newMeth(C$, 'getResult$S$S',  function (identifier, objectType) {
var ids=$I$(2,"asList$OA",[Clazz.array(String, -1, [identifier])]);
try {
return this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S$S(identifier, objectType), ids, -1, 1, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
System.err.println$S("Error parsing " + identifier + " lookup response " + e.getMessage$() );
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getGeneLoci$S',  function (geneId) {
return this.parseGeneLoci$java_util_Map(this.getResult$S$S(geneId, "Gene"));
});

Clazz.newMeth(C$, 'parseGeneLoci$java_util_Map',  function (json) {
if (json == null ) {
return null;
}try {
var species=json.get$O("species").toString();
var assembly=json.get$O("assembly_name").toString();
var chromosome=json.get$O("seq_region_name").toString();
var strand=json.get$O("strand").toString();
var start=Integer.parseInt$S(json.get$O("start").toString());
var end=Integer.parseInt$S(json.get$O("end").toString());
var fromEnd=end - start + 1;
var reverseStrand="-1".equals$O(strand);
var toStart=reverseStrand ? end : start;
var toEnd=reverseStrand ? start : end;
var fromRange=$I$(3,"singletonList$O",[Clazz.array(Integer.TYPE, -1, [1, fromEnd])]);
var toRange=$I$(3,"singletonList$O",[Clazz.array(Integer.TYPE, -1, [toStart, toEnd])]);
var map=Clazz.new_([Clazz.new_($I$(5,1).c$$java_util_List$java_util_List$I$I,[fromRange, toRange, 1, 1])],$I$(4,1).c$$jalview_util_MapList);
return Clazz.new_([species == null  ? "" : species, assembly, chromosome, map],$I$(6,1).c$$S$S$S$jalview_datamodel_Mapping);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException") || Clazz.exceptionOf(e,"NumberFormatException")){
$I$(7,"error$S",["Error looking up gene loci: " + e.getMessage$()]);
e.printStackTrace$();
} else {
throw e;
}
}
return null;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'StringBuilder','java.net.URL','java.util.ArrayList','jalview.ext.ensembl.Species']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblSymbol", null, 'jalview.ext.ensembl.EnsemblXref');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (domain, dbName, dbVersion) {
;C$.superclazz.c$$S$S$S.apply(this,[domain, dbName, dbVersion]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUrl$S$jalview_ext_ensembl_Species$SA',  function (id, species, type) {
var sb=Clazz.new_($I$(1,1));
sb.append$S(this.getDomain$()).append$S("/xrefs/symbol/").append$S(species.toString()).append$S("/").append$S(id).append$S("?content-type=application/json");
for (var t, $t = 0, $$t = type; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
sb.append$S("&object_type=").append$S(t);
}
try {
var url=sb.toString();
return Clazz.new_($I$(2,1).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getGeneIds$S',  function (identifier) {
var result=Clazz.new_($I$(3,1));
var ids=Clazz.new_($I$(3,1));
ids.add$O(identifier);
var queries=identifier.split$S(this.getAccessionSeparator$());
try {
for (var query, $query = 0, $$query = queries; $query<$$query.length&&((query=($$query[$query])),1);$query++) {
for (var taxon, $taxon = $I$(4).getModelOrganisms$().iterator$(); $taxon.hasNext$()&&((taxon=($taxon.next$())),1);) {
var geneId=null;
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S$jalview_ext_ensembl_Species$SA(query, taxon, Clazz.array(String, -1, ["gene"])), ids, -1, 2, null);
if (rvals == null ) continue;
while (rvals.hasNext$()){
var val=rvals.next$();
var id=val.get$O("id").toString();
var type=val.get$O("type").toString();
if (id != null  && "gene".equals$O(type) ) {
geneId=id;
break;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
} else {
throw e;
}
}
if (geneId != null  && !result.contains$O(geneId) ) {
result.add$O(geneId);
}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.ArrayList','jalview.util.DBRefUtils','jalview.datamodel.DBRefEntry','java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblXref", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dbName="ENSEMBL (xref)";
this.xrefVersion="ENSEMBL:0";
},1);

C$.$fields$=[['S',['dbName','xrefVersion']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (d, dbSource, version) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
this.dbName=dbSource;
this.xrefVersion=dbSource + ":" + version ;
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return this.dbName;
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return null;
});

Clazz.newMeth(C$, 'getUrl$java_util_List',  function (ids) {
return this.getUrl$S(ids.get$I(0));
});

Clazz.newMeth(C$, 'useGetRequest$',  function () {
return true;
});

Clazz.newMeth(C$, 'getCrossReferences$S',  function (identifier) {
var result=Clazz.new_($I$(1,1));
var ids=Clazz.new_($I$(1,1));
ids.add$O(identifier);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S(identifier), ids, -1, 2, null);
while (rvals.hasNext$()){
var val=rvals.next$();
var db=val.get$O("dbname").toString();
var id=val.get$O("primary_id").toString();
if (db != null  && id != null   && !"GO".equals$O(db) ) {
db=$I$(2).getCanonicalName$S(db);
var dbref=Clazz.new_([db, this.getXRefVersion$(), id],$I$(3,1).c$$S$S$S);
result.add$O(dbref);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'getXRefVersion$',  function () {
return this.xrefVersion;
});

Clazz.newMeth(C$, 'getUrl$S',  function (identifier) {
var url=this.getDomain$() + "/xrefs/id/" + identifier + "?content-type=application/json" + "&all_levels=1" ;
try {
return Clazz.new_($I$(4,1).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.io.gff"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceOntologyLite", null, null, 'jalview.io.gff.SequenceOntologyI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.TERMS=Clazz.array(String, -2, [Clazz.array(String, -1, ["gene", "gene"]), Clazz.array(String, -1, ["ncRNA_gene", "gene"]), Clazz.array(String, -1, ["snRNA_gene", "gene"]), Clazz.array(String, -1, ["miRNA_gene", "gene"]), Clazz.array(String, -1, ["lincRNA_gene", "gene"]), Clazz.array(String, -1, ["rRNA_gene", "gene"]), Clazz.array(String, -1, ["transcript", "transcript"]), Clazz.array(String, -1, ["mature_transcript", "transcript"]), Clazz.array(String, -1, ["processed_transcript", "transcript"]), Clazz.array(String, -1, ["aberrant_processed_transcript", "transcript"]), Clazz.array(String, -1, ["ncRNA", "transcript"]), Clazz.array(String, -1, ["snRNA", "transcript"]), Clazz.array(String, -1, ["miRNA", "transcript"]), Clazz.array(String, -1, ["lincRNA", "transcript"]), Clazz.array(String, -1, ["lnc_RNA", "transcript"]), Clazz.array(String, -1, ["rRNA", "transcript"]), Clazz.array(String, -1, ["mRNA", "transcript"]), Clazz.array(String, -1, ["sequence_variant", "sequence_variant"]), Clazz.array(String, -1, ["structural_variant", "sequence_variant"]), Clazz.array(String, -1, ["feature_variant", "sequence_variant"]), Clazz.array(String, -1, ["gene_variant", "sequence_variant"]), Clazz.array(String, -1, ["transcript_variant", "sequence_variant"]), Clazz.array(String, -1, ["NMD_transcript_variant", "sequence_variant"]), Clazz.array(String, -1, ["missense_variant", "sequence_variant"]), Clazz.array(String, -1, ["synonymous_variant", "sequence_variant"]), Clazz.array(String, -1, ["frameshift_variant", "sequence_variant"]), Clazz.array(String, -1, ["5_prime_UTR_variant", "sequence_variant"]), Clazz.array(String, -1, ["3_prime_UTR_variant", "sequence_variant"]), Clazz.array(String, -1, ["stop_gained", "sequence_variant"]), Clazz.array(String, -1, ["stop_lost", "sequence_variant"]), Clazz.array(String, -1, ["inframe_deletion", "sequence_variant"]), Clazz.array(String, -1, ["inframe_insertion", "sequence_variant"]), Clazz.array(String, -1, ["splice_region_variant", "sequence_variant"]), Clazz.array(String, -1, ["exon", "exon"]), Clazz.array(String, -1, ["coding_exon", "exon"]), Clazz.array(String, -1, ["CDS", "CDS"]), Clazz.array(String, -1, ["CDS_predicted", "CDS"]), Clazz.array(String, -1, ["protein_match", "protein_match"]), Clazz.array(String, -1, ["nucleotide_match", "nucleotide_match"]), Clazz.array(String, -1, ["cDNA_match", "nucleotide_match"]), Clazz.array(String, -1, ["polypeptide", "polypeptide"])]);
},1);

C$.$fields$=[['O',['TERMS','String[][]','parents','java.util.Map','termsFound','java.util.List','+termsNotFound']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.termsFound=Clazz.new_($I$(1,1));
this.termsNotFound=Clazz.new_($I$(1,1));
p$1.loadStaticData.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'loadStaticData',  function () {
this.parents=Clazz.new_($I$(2,1));
for (var pair, $pair = 0, $$pair = this.TERMS; $pair<$$pair.length&&((pair=($$pair[$pair])),1);$pair++) {
var p=this.parents.get$O(pair[0]);
if (p == null ) {
p=Clazz.new_($I$(1,1));
this.parents.put$O$O(pair[0], p);
}p.add$O(pair[1]);
}
}, p$1);

Clazz.newMeth(C$, 'isA$S$S',  function (child, parent) {
if (child == null  || parent == null  ) {
return false;
}if (child.equals$O(parent)) {
p$1.termFound$S.apply(this, [child]);
return true;
}var p=this.parents.get$O(child);
if (p == null ) {
p$1.termNotFound$S.apply(this, [child]);
return false;
}p$1.termFound$S.apply(this, [child]);
if (p.contains$O(parent)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'termFound$S',  function (term) {
if (!this.termsFound.contains$O(term)) {
{
this.termsFound.add$O(term);
}}}, p$1);

Clazz.newMeth(C$, 'termNotFound$S',  function (term) {
{
if (!this.termsNotFound.contains$O(term)) {
this.termsNotFound.add$O(term);
}}}, p$1);

Clazz.newMeth(C$, 'termsFound$',  function () {
{
$I$(3).sort$java_util_List$java_util_Comparator(this.termsFound, String.CASE_INSENSITIVE_ORDER);
return this.termsFound;
}});

Clazz.newMeth(C$, 'termsNotFound$',  function () {
{
$I$(3).sort$java_util_List$java_util_Comparator(this.termsNotFound, String.CASE_INSENSITIVE_ORDER);
return this.termsNotFound;
}});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:46 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "SequenceOntologyI");
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:46 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.io.gff.SequenceOntologyLite']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceOntologyFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','jalview.io.gff.SequenceOntologyI']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_($I$(1,1));
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'setInstance$jalview_io_gff_SequenceOntologyI',  function (so) {
C$.instance=so;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:46 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['text'],'O',['dbReference','java.util.List','+evidence']]]

Clazz.newMeth(C$, 'getText$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'setText$S',  function (value) {
this.text=value;
});

Clazz.newMeth(C$, 'getDbReference$',  function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1,1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.ReactionType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="reactionType" propOrder={"text"  "dbReference"  } ']],
  [['text','String',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InteractantType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id','label','intactId']]]

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S',  function (value) {
this.label=value;
});

Clazz.newMeth(C$, 'getIntactId$',  function () {
return this.intactId;
});

Clazz.newMeth(C$, 'setIntactId$S',  function (value) {
this.intactId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.InteractantType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="interactantType" propOrder={"id"  "label"  } ']],
  [['intactId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="intactId" required="true" ']],
  [['id','String'],['@XmlElement']],
  [['label','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MoleculeType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value','id']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.MoleculeType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="moleculeType" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['id','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.fts.api"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "StructureFTSRestClientI");
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.fts.service.threedbeacons"),p$1={},I$=[[0,'jalview.util.Platform','jalview.javascript.web.Client','jalview.javascript.web.ClientResponse','java.util.Map','jalview.fts.core.FTSRestClient','jalview.util.MessageManager','jalview.fts.core.FTSRestResponse','jalview.util.JSONUtils','java.util.ArrayList','jalview.fts.service.threedbeacons.TDB_FTSData',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TDBeaconsFTSRestClient", null, 'jalview.fts.core.FTSRestClient', 'jalview.fts.api.StructureFTSRestClientI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['allDefaultDisplayedStructureDataColumns','java.util.Collection']]
,['S',['TDB_PROD_API','TDB_DEV_API','DEFAULT_THREEDBEACONS_DOMAIN'],'O',['instance','jalview.fts.api.FTSRestClientI']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'executeRequest$jalview_fts_core_FTSRestRequest',  function (tdbRestRequest) {
try {
var query=tdbRestRequest.getSearchTerm$();
var client;
var clientResponseClass;
if ($I$(1).isJS$()) {
client=Clazz.new_($I$(2,1));
clientResponseClass=Clazz.getClass($I$(3));
} else 
{}
var webResource;
webResource=client.resource$S(C$.DEFAULT_THREEDBEACONS_DOMAIN + query);
var uri=webResource.getURI$();
System.out.println$S(uri.toString());
var clientResponse;
if (this.isMocked$()) {
clientResponse=null;
} else {
clientResponse=webResource.accept$SA(Clazz.array(String, -1, ["application/json"])).get$Class(clientResponseClass);
}var jsonObj=null;
var responseString=null;
var responseStatus=this.isMocked$() ? (this.mockQueries.containsKey$O(query) ? 200 : 404) : clientResponse.getStatus$();
switch (responseStatus) {
case 200:
if ($I$(1).isJS$()) {
jsonObj=clientResponse.getEntity$Class(Clazz.getClass($I$(4),['clear$','compute$O$java_util_function_BiFunction','computeIfAbsent$O$java_util_function_Function','computeIfPresent$O$java_util_function_BiFunction','containsKey$O','containsValue$O','copyOf$java_util_Map','entry$O$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$O','hashCode$','isEmpty$','keySet$','merge$O$O$java_util_function_BiFunction','of$','of$O$O','of$O$O$O$O','of$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','ofEntries$java_util_Map_EntryA','put$O$O','putAll$java_util_Map','putIfAbsent$O$O','remove$O','remove$O$O','replace$O$O','replace$O$O$O','replaceAll$java_util_function_BiFunction','size$','values$']));
} else {
responseString=this.isMocked$() ? this.mockQueries.get$O(query) : clientResponse.getEntity$Class(Clazz.getClass(String));
}break;
case 400:
throw Clazz.new_(Clazz.load('Exception').c$$S,[p$1.parseJsonExceptionString$S.apply(this, [responseString])]);
case 404:
return p$1.emptyTDBeaconsJsonResponse.apply(this, []);
default:
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(5).getMessageByHTTPStatusCode$I$S(responseStatus, "3DBeacons")]);
}
return C$.parseTDBeaconsJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest(responseString, jsonObj, tdbRestRequest);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var exceptionMsg=e.getMessage$();
if (exceptionMsg != null ) {
if (exceptionMsg.contains$CharSequence("SocketException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(6).getString$S("exception.unable_to_detect_internet_connection")]);
} else if (exceptionMsg.contains$CharSequence("UnknownHostException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(6,"formatMessage$S$OA",["exception.fts_server_unreachable", Clazz.array(java.lang.Object, -1, ["3DB Hub"])])]);
}}throw e;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'emptyTDBeaconsJsonResponse',  function () {
return null;
}, p$1);

Clazz.newMeth(C$, 'setSearchTerm$S',  function (term) {
return term;
});

Clazz.newMeth(C$, 'parseTDBeaconsJsonResponse$S$jalview_fts_core_FTSRestRequest',  function (tdbJsonResponseString, tdbRestRequest) {
return C$.parseTDBeaconsJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest(tdbJsonResponseString, null, tdbRestRequest);
}, 1);

Clazz.newMeth(C$, 'parseTDBeaconsJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest',  function (tdbJsonResponseString, jsonObj, tdbRestRequest) {
var searchResult=Clazz.new_($I$(7,1));
var result=null;
try {
if (jsonObj == null ) {
jsonObj=$I$(8).parse$S(tdbJsonResponseString);
}var uniprot_entry=jsonObj.get$O("uniprot_entry");
var structures=jsonObj.get$O("structures");
result=Clazz.new_($I$(9,1));
var numFound=0;
for (var strucIter=structures.iterator$(); strucIter.hasNext$(); ) {
var structure=strucIter.next$();
result.add$O(C$.getFTSData$java_util_Map$jalview_fts_core_FTSRestRequest(structure, tdbRestRequest));
++numFound;
}
searchResult.setNumberOfItemsFound$I(numFound);
searchResult.setSearchSummary$java_util_Collection(result);
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
e.printStackTrace$();
} else {
throw e;
}
}
return searchResult;
}, 1);

Clazz.newMeth(C$, 'getFTSData$java_util_Map$jalview_fts_core_FTSRestRequest',  function (tdbJsonStructure, tdbRequest) {
var primaryKey=null;
var summaryRowData;
var associatedSequence;
var displayFields=tdbRequest.getWantedFields$();
var associatedSeq=tdbRequest.getAssociatedSequence$();
var colCounter=0;
summaryRowData=Clazz.array(java.lang.Object, [(associatedSeq != null ) ? displayFields.size$() + 1 : displayFields.size$()]);
if (associatedSeq != null ) {
associatedSequence=associatedSeq;
summaryRowData[0]=associatedSequence;
colCounter=1;
}for (var field, $field = displayFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
var fieldData=(tdbJsonStructure.get$O(field.getCode$()) == null ) ? " " : tdbJsonStructure.get$O(field.getCode$()).toString();
if (field.isPrimaryKeyColumn$()) {
primaryKey=fieldData;
summaryRowData[colCounter++]=primaryKey;
} else if (fieldData == null  || fieldData.trim$().isEmpty$() ) {
summaryRowData[colCounter++]=null;
} else {
try {
summaryRowData[colCounter++]=(field.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) ? Integer.valueOf$S(fieldData) : (field.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) ? Double.valueOf$S(fieldData) : fieldData;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("offending value:" + fieldData + fieldData );
} else {
throw e;
}
}
}}
var primaryKey1=primaryKey;
var summaryRowData1=summaryRowData;
return Clazz.new_($I$(10,1).c$$S$java_util_Map$OA,[primaryKey, tdbJsonStructure, summaryRowData1]);
}, 1);

Clazz.newMeth(C$, 'parseJsonExceptionString$S',  function (jsonErrorString) {
return null;
}, p$1);

Clazz.newMeth(C$, 'getColumnDataConfigFileName$',  function () {
return "/fts/tdbeacons_data_columns.txt";
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getAllDefaultDisplayedStructureDataColumns$',  function () {
if (this.allDefaultDisplayedStructureDataColumns == null  || this.allDefaultDisplayedStructureDataColumns.isEmpty$() ) {
this.allDefaultDisplayedStructureDataColumns=Clazz.new_($I$(9,1));
this.allDefaultDisplayedStructureDataColumns.addAll$java_util_Collection(C$.superclazz.prototype.getAllDefaultDisplayedFTSDataColumns$.apply(this, []));
}return this.allDefaultDisplayedStructureDataColumns;
});

Clazz.newMeth(C$, 'getPreferencesColumnsFor$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource',  function (source) {
var columnNames=null;
switch (source) {
case $I$(11).SEARCH_SUMMARY:
columnNames=Clazz.array(String, -1, ["", "Display", "Group"]);
break;
case $I$(11).STRUCTURE_CHOOSER:
columnNames=Clazz.array(String, -1, ["", "Display", "Group"]);
break;
case $I$(11).PREFERENCES:
columnNames=Clazz.array(String, -1, ["3DB Beacons Field", "Show in search summary", "Show in structure summary"]);
break;
default:
break;
}
return columnNames;
});

C$.$static$=function(){C$.$static$=0;
C$.TDB_PROD_API="https://www.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/api/uniprot/summary/";
C$.TDB_DEV_API="https://wwwdev.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/api/uniprot/summary/";
C$.DEFAULT_THREEDBEACONS_DOMAIN=C$.TDB_PROD_API;
C$.instance=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.HashMap','jalview.util.Platform','javax.swing.JOptionPane','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JvOptionPane", null, 'javax.swing.JOptionPane', ['jalview.util.dialogrunner.DialogRunnerI', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.callbacks=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['parentComponent','java.awt.Component','callbacks','java.util.Map','ourOptions','java.util.List']]
,['Z',['interactiveMode'],'O',['mockResponse','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (parent) {
Clazz.super_(C$, this);
this.parentComponent=$I$(2).isJS$() ? this : parent;
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O',  function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showConfirmDialog$java_awt_Component$O(parentComponent, message) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, optionType) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
default:
case 0:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I(parentComponent, message, title, optionType);
}
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I',  function (parentComponent, message, title, optionType, messageType) {
return C$.isInteractiveMode$() ? $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I(parentComponent, message, title, optionType, messageType) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon',  function (parentComponent, message, title, optionType, messageType, icon) {
return C$.isInteractiveMode$() ? $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon(parentComponent, message, title, optionType, messageType, icon) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O',  function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showInternalConfirmDialog$java_awt_Component$O(parentComponent, message) : ((C$.getMockResponse$()).valueOf()|0);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$S$S$I',  function (parentComponent, message, title, optionType) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
case 0:
default:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I(parentComponent, message, title, optionType);
}
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I$I',  function (parentComponent, message, title, optionType, messageType) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
case 0:
default:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I(parentComponent, message, title, optionType, messageType);
}
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon',  function (parentComponent, message, title, optionType, messageType, icon) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}switch (optionType) {
case 1:
case 0:
default:
case 2:
return $I$(3).showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon(parentComponent, message, title, optionType, messageType, icon);
}
}, 1);

Clazz.newMeth(C$, 'showOptionDialog$java_awt_Component$S$S$I$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, optionType, messageType, icon, options, initialValue) {
if (!C$.isInteractiveMode$()) {
return ((C$.getMockResponse$()).valueOf()|0);
}return $I$(3).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(parentComponent, message, title, optionType, messageType, icon, options, initialValue);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$S',  function (parentComponent, message) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O(parentComponent, message);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$S$S$I',  function (parentComponent, message, title, messageType) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[parentComponent, C$.getPrefix$I(messageType) + message, title, messageType]);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$S$S$I$javax_swing_Icon',  function (parentComponent, message, title, messageType, icon) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon(parentComponent, message, title, messageType, icon);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$O',  function (parentComponent, message) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O(parentComponent, message);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$S$S$I',  function (parentComponent, message, title, messageType) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[parentComponent, C$.getPrefix$I(messageType) + message, title, messageType]);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon',  function (parentComponent, message, title, messageType, icon) {
if (!C$.isInteractiveMode$()) {
C$.outputMessage$O(message);
return;
}$I$(3).showMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon(parentComponent, message, title, messageType, icon);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$O',  function (message) {
if (!C$.isInteractiveMode$()) {
return C$.getMockResponse$().toString();
}return $I$(3).showInputDialog$O(message);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$S$S',  function (message, initialSelectionValue) {
if (!C$.isInteractiveMode$()) {
return C$.getMockResponse$().toString();
}return $I$(3).showInputDialog$O$O(message, initialSelectionValue);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$O$O',  function (message, initialSelectionValue) {
if (!C$.isInteractiveMode$()) {
return C$.getMockResponse$().toString();
}return $I$(3).showInputDialog$O$O(message, initialSelectionValue);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S',  function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O(parentComponent, message) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S$S',  function (parentComponent, message, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$O(parentComponent, message, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$O',  function (parentComponent, message, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$O(parentComponent, message, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S$S$I',  function (parentComponent, message, title, messageType) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$S$I(parentComponent, message, title, messageType) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$S',  function (parentComponent, message) {
return C$.isInteractiveMode$() ? $I$(3).showInternalInputDialog$java_awt_Component$O(parentComponent, message) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$S$S$I',  function (parentComponent, message, title, messageType) {
return C$.isInteractiveMode$() ? $I$(3,"showInternalInputDialog$java_awt_Component$O$S$I",[parentComponent, C$.getPrefix$I(messageType) + message, title, messageType]) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$S$S$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) {
return C$.isInteractiveMode$() ? $I$(3).showInternalInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) : C$.getMockResponse$().toString();
}, 1);

Clazz.newMeth(C$, 'outputMessage$O',  function (message) {
System.out.println$S(">>> JOption Message : " + message.toString());
}, 1);

Clazz.newMeth(C$, 'getMockResponse$',  function () {
return C$.mockResponse;
}, 1);

Clazz.newMeth(C$, 'setMockResponse$O',  function (mockOption) {
C$.mockResponse=mockOption;
}, 1);

Clazz.newMeth(C$, 'resetMock$',  function () {
C$.setMockResponse$O(Integer.valueOf$I(2));
C$.setInteractiveMode$Z(true);
}, 1);

Clazz.newMeth(C$, 'isInteractiveMode$',  function () {
return C$.interactiveMode;
}, 1);

Clazz.newMeth(C$, 'setInteractiveMode$Z',  function (interactive) {
C$.interactiveMode=interactive;
}, 1);

Clazz.newMeth(C$, 'getPrefix$I',  function (messageType) {
var prefix="";
if ($I$(2).isJS$()) {
switch (messageType) {
case 2:
prefix="WARNING! ";
break;
case 0:
prefix="ERROR! ";
break;
default:
prefix="Note: ";
}
}return prefix;
}, 1);

Clazz.newMeth(C$, 'newOptionDialog$java_awt_Component',  function (parentComponent) {
return Clazz.new_(C$.c$$java_awt_Component,[parentComponent]);
}, 1);

Clazz.newMeth(C$, 'showDialog$S$S$I$I$javax_swing_Icon$OA$O',  function (message, title, optionType, messageType, icon, options, initialValue) {
if (!C$.isInteractiveMode$()) {
this.handleResponse$O(C$.getMockResponse$());
}this.ourOptions=$I$(4).asList$OA(options);
var response=$I$(3).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(this.parentComponent, message, title, optionType, messageType, icon, options, initialValue);
if (!$I$(2).isJS$()) 
{}
});

Clazz.newMeth(C$, 'showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S',  function (mainPanel, title, yesNoCancelOption, questionMessage, icon, options, initresponse) {
if (!C$.isInteractiveMode$()) {
this.handleResponse$O(C$.getMockResponse$());
}this.ourOptions=$I$(4).asList$OA(options);
var response;
if (this.parentComponent !== this ) {
response=$I$(3).showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(this.parentComponent, mainPanel, title, yesNoCancelOption, questionMessage, icon, options, initresponse);
} else {
response=$I$(3).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(this.parentComponent, mainPanel, title, yesNoCancelOption, questionMessage, icon, options, initresponse);
}if (!$I$(2).isJS$()) 
{}
});

Clazz.newMeth(C$, 'setResponseHandler$O$Runnable',  function (response, action) {
this.callbacks.put$O$O(response, action);
return this;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var newValue=evt.getNewValue$();
var ourOption=this.ourOptions.indexOf$O(newValue);
if (ourOption >= 0) {
this.handleResponse$O(Integer.valueOf$I(ourOption));
} else {
this.handleResponse$O(newValue);
}});

Clazz.newMeth(C$, 'handleResponse$O',  function (response) {
if (response != null  && !response.equals$O(response) ) {
return;
}var action=this.callbacks.get$O(response);
if (action != null ) {
action.run$();
this.parentComponent.requestFocus$();
}});

C$.$static$=function(){C$.$static$=0;
C$.mockResponse=Integer.valueOf$I(2);
C$.interactiveMode=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Dimension','jalview.gui.SplashScreen','java.awt.Font','java.awt.Color','javax.swing.JPanel','java.awt.BorderLayout','java.awt.event.MouseAdapter','jalview.util.Platform','javax.swing.JLabel','jalview.util.ChannelProperties','java.awt.MediaTracker','jalview.gui.Desktop','javax.swing.JInternalFrame','javax.swing.JLayeredPane','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SplashScreen", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['Runnable', 'javax.swing.event.HyperlinkListener']);
C$.$classes$=[['SplashImage',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$visible=true;
this.iconimg=Clazz.new_([Clazz.new_($I$(6,1))],$I$(5,1).c$$java_awt_LayoutManager);
this.transientDialog=false;
this.oldTextLength=-1;
this.closer=((P$.SplashScreen$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SplashScreen$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
if (this.b$['jalview.gui.SplashScreen'].transientDialog) {
try {
this.b$['jalview.gui.SplashScreen'].$visible=false;
this.b$['jalview.gui.SplashScreen'].closeSplash$.apply(this.b$['jalview.gui.SplashScreen'], []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}});
})()
), Clazz.new_($I$(7,1),[this, null],P$.SplashScreen$1));
},1);

C$.$fields$=[['Z',['$visible','transientDialog'],'J',['oldTextLength'],'O',['iconimg','javax.swing.JPanel','splashText','java.awt.Component','iframe','javax.swing.JInternalFrame','image','java.awt.Image','closer','java.awt.event.MouseAdapter']]
,['I',['logoSize'],'O',['bg','java.awt.Color','+fg','$font','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$Z',  function (isTransient) {
Clazz.super_(C$, this);
this.transientDialog=isTransient;
if ($I$(8).isJS$()) {
this.splashText=Clazz.new_($I$(9,1).c$$S,[""]);
this.run$();
} else {

{}
}}, 1);

Clazz.newMeth(C$, 'initSplashScreenWindow$',  function () {
this.addMouseListener$java_awt_event_MouseListener(this.closer);
try {
if (!$I$(8).isJS$()) {
this.image=$I$(10).getImage$S("banner");
var logo=$I$(10).getImage$S("logo.48");
var mt=Clazz.new_($I$(11,1).c$$java_awt_Component,[this]);
if (this.image != null ) {
mt.addImage$java_awt_Image$I(this.image, 0);
}if (logo != null ) {
mt.addImage$java_awt_Image$I(logo, 1);
}do {
try {
mt.waitForAll$();
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
if (mt.isErrorAny$()) {
System.err.println$S("Error when loading images!");
}} while (!mt.checkAll$());
$I$(12).instance.setIconImages$java_util_List($I$(10).getIconList$());
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.setBackground$java_awt_Color(C$.bg);
this.setForeground$java_awt_Color(C$.fg);
this.setFont$java_awt_Font(C$.$font);
this.iframe=Clazz.new_($I$(13,1));
this.iframe.setFrameIcon$javax_swing_Icon(null);
this.iframe.setClosable$Z(true);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this.iframe.setContentPane$java_awt_Container(this);
this.iframe.setLayer$Integer($I$(14).PALETTE_LAYER);
this.iframe.setBackground$java_awt_Color(C$.bg);
this.iframe.setForeground$java_awt_Color(C$.fg);
this.iframe.setFont$java_awt_Font(C$.$font);
if ($I$(8).isJS$()) {
} else 
{}
this.add$java_awt_Component$O(this.splashText, "Center");
this.splashText.addMouseListener$java_awt_event_MouseListener(this.closer);
$I$(12).desktop.add$java_awt_Component(this.iframe);
this.refreshText$();
});

Clazz.newMeth(C$, 'refreshText$',  function () {
var newtext=$I$(12).instance.getAboutMessage$();
if (Long.$ne(this.oldTextLength,newtext.length$() )) {
this.iframe.setVisible$Z(false);
this.oldTextLength=newtext.length$();
if ($I$(8).isJS$()) {
var text="<html><br><img src=\"" + $I$(10).getImageURL$S("banner") + "\"/>" + newtext + "<br></html>" ;
var ta=Clazz.new_($I$(9,1).c$$S,[text]);
ta.setOpaque$Z(true);
ta.setBackground$java_awt_Color($I$(4).white);
this.splashText=ta;
} else 
{}
this.splashText.addMouseListener$java_awt_event_MouseListener(this.closer);
this.splashText.setVisible$Z(true);
this.splashText.setSize$java_awt_Dimension(Clazz.new_([750, 425 + C$.logoSize + ($I$(8).isJS$() ? 40 : 0) ],$I$(1,1).c$$I$I));
this.splashText.setBackground$java_awt_Color(C$.bg);
this.splashText.setForeground$java_awt_Color(C$.fg);
this.splashText.setFont$java_awt_Font(C$.$font);
this.add$java_awt_Component$O(this.splashText, "Center");
this.revalidate$();
var width=Math.max(this.splashText.getWidth$(), this.iconimg.getWidth$());
var height=this.splashText.getHeight$() + this.iconimg.getHeight$();
this.iframe.setBounds$I$I$I$I(Math.max(0, (($I$(12).instance.getWidth$() - width)/2|0)), Math.max(0, (($I$(12).instance.getHeight$() - height)/2|0)), width, height);
this.iframe.validate$();
this.iframe.setVisible$Z(true);
return true;
}return false;
});

Clazz.newMeth(C$, 'run$',  function () {
this.initSplashScreenWindow$();
var startTime=Long.$div(System.currentTimeMillis$(),1000);
while (this.$visible){
this.iframe.repaint$();
try {
$I$(15).sleep$J(500);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (this.transientDialog && Long.$gt((Long.$sub((Long.$div(System.currentTimeMillis$(),1000)),startTime)),5 ) ) {
this.$visible=false;
}if (this.$visible && this.refreshText$() ) {
this.iframe.repaint$();
}if (!this.transientDialog) {
return;
}}
this.closeSplash$();
$I$(12).instance.startDialogQueue$();
});

Clazz.newMeth(C$, 'closeSplash$',  function () {
try {
this.iframe.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
$I$(12).hyperlinkUpdate$javax_swing_event_HyperlinkEvent(e);
});

C$.$static$=function(){C$.$static$=0;
C$.bg=$I$(4).WHITE;
C$.fg=$I$(4).BLACK;
C$.$font=Clazz.new_($I$(3,1).c$$S$I$I,["SansSerif", 0, 11]);
C$.logoSize=32;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SplashScreen, "SplashImage", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (todisplay) {
Clazz.super_(C$, this);
this.image=todisplay;
if (this.image != null ) {
this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.image.getWidth$java_awt_image_ImageObserver(this) + 8, this.image.getHeight$java_awt_image_ImageObserver(this)],$I$(1,1).c$$I$I));
}}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return Clazz.new_([this.image.getWidth$java_awt_image_ImageObserver(this) + 8, this.image.getHeight$java_awt_image_ImageObserver(this)],$I$(1,1).c$$I$I);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(2).bg);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setColor$java_awt_Color($I$(2).fg);
g.setFont$java_awt_Font(Clazz.new_([$I$(2).$font.getFontName$(), 1, 17],$I$(3,1).c$$S$I$I));
if (this.image != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, ((this.getWidth$() - this.image.getWidth$java_awt_image_ImageObserver(this))/2|0), ((this.getHeight$() - this.image.getHeight$java_awt_image_ImageObserver(this))/2|0), this);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),I$=[[0,'jalview.gui.structurechooser.PDBStructureChooserQuerySource','jalview.gui.structurechooser.ThreeDBStructureChooserQuerySource','java.util.Objects','java.util.Locale','jalview.fts.core.FTSRestResponse']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureChooserQuerySource");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['docFieldPrefs','jalview.fts.core.FTSDataColumnPreferences']]
,['I',['MAX_QLENGTH']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPDBfts$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getTDBfts$',  function () {
return Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'getDocFieldPrefs$',  function () {
return this.docFieldPrefs;
});

Clazz.newMeth(C$, 'setDocFieldPrefs$jalview_fts_core_FTSDataColumnPreferences',  function (docFieldPrefs) {
this.docFieldPrefs=docFieldPrefs;
});

Clazz.newMeth(C$, 'getInitialFieldPreferences$',  function () {
return this.docFieldPrefs;
});

Clazz.newMeth(C$, 'sanitizeSeqName$S',  function (seqName) {
$I$(3).requireNonNull$O(seqName);
return seqName.replaceAll$S$S("\\[\\d*\\]", "").replaceAll$S$S("[^\\dA-Za-z|_]", "").replaceAll$S$S("\\s+", "+");
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S',  function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$java_util_Locale($I$(4).ROOT);
for (var ignoredEntry, $ignoredEntry = 0, $$ignoredEntry = ignoreList.split$S(","); $ignoredEntry<$$ignoredEntry.length&&((ignoredEntry=($$ignoredEntry[$ignoredEntry])),1);$ignoredEntry++) {
if (seqName.contains$CharSequence(ignoredEntry)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDBRefId$jalview_datamodel_DBRefEntry',  function (dbRef) {
var ref=dbRef.getAccessionId$().replaceAll$S$S("GO:", "");
return ref;
}, 1);

Clazz.newMeth(C$, 'getFindEntry$S$java_util_Vector',  function (id, pdbEntries) {
$I$(3).requireNonNull$O(id);
$I$(3).requireNonNull$O(pdbEntries);
var foundEntry=null;
for (var entry, $entry = pdbEntries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getId$().equalsIgnoreCase$S(id)) {
return entry;
}}
return foundEntry;
}, 1);

Clazz.newMeth(C$, 'getTableModel$java_util_Collection',  function (discoveredStructuresSet) {
return $I$(5,"getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection",[this.getLastFTSRequest$(), discoveredStructuresSet]);
});

Clazz.newMeth(C$, 'getQuerySourceFor$jalview_datamodel_SequenceIA',  function (selectedSeqs) {
var tdbSource=Clazz.new_($I$(2,1));
var hasUniprot=false;
var hasCanonical=false;
var hasNA=false;
var hasProtein=false;
var protWithoutUni=0;
var protWithoutCanon=0;
for (var seq, $seq = 0, $$seq = selectedSeqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
hasNA=!!(hasNA|(!seq.isProtein$()));
hasProtein=!!(hasProtein|(seq.isProtein$()));
if (seq.isProtein$()) {
var refsAvailable=$I$(2,"checkUniprotRefs$java_util_List",[seq.getDBRefs$()]);
if (refsAvailable > -2) {
if (refsAvailable > -1) {
hasCanonical=true;
} else {
++protWithoutCanon;
}hasUniprot=true;
} else {
++protWithoutUni;
}}}
if (hasProtein && hasCanonical && !hasNA && protWithoutCanon == 0   && protWithoutUni == 0 ) {
return tdbSource;
}return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'updateAvailableFilterOptions$S$java_util_List$java_util_Collection',  function (VIEWS_FILTER, xtantOptions, lastFTSData) {
});

C$.$static$=function(){C$.$static$=0;
C$.MAX_QLENGTH=7820;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),p$1={},I$=[[0,'java.util.LinkedHashSet','jalview.fts.service.threedbeacons.TDBeaconsFTSRestClient','jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'java.util.Locale','jalview.gui.structurechooser.PDBStructureChooserQuerySource','jalview.fts.core.FTSRestRequest','jalview.jbgui.FilterOption','jalview.gui.structurechooser.TDBResultAnalyser','jalview.fts.core.FTSRestResponse','jalview.datamodel.PDBEntry','java.util.Arrays','jalview.gui.structurechooser.StructureChooserQuerySource',['jalview.datamodel.PDBEntry','.Type'],'jalview.bin.Console','java.util.ArrayList','java.util.HashSet','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThreeDBStructureChooserQuerySource", null, 'jalview.gui.structurechooser.StructureChooserQuerySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tdBeaconsFilters=null;
this.defaultFilters=null;
this.pdbQuerySource=null;
},1);

C$.$fields$=[['O',['tdBeaconsFilters','java.util.Set','+defaultFilters','lastTdbRequest','jalview.fts.core.FTSRestRequest','tdbRestClient','jalview.fts.api.FTSRestClientI','lastPdbRequest','jalview.fts.core.FTSRestRequest','pdbQuerySource','jalview.gui.structurechooser.PDBStructureChooserQuerySource']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.defaultFilters=Clazz.new_($I$(1,1));
this.defaultFilters.add$O("3d_beacons_coverage");
this.defaultFilters.add$O("3d_beacons_first_best_coverage");
this.tdbRestClient=$I$(2).getInstance$();
this.docFieldPrefs=Clazz.new_([$I$(4).STRUCTURE_CHOOSER, $I$(2).getInstance$()],$I$(3,1).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI);
}, 1);

Clazz.newMeth(C$, 'buildQuery$jalview_datamodel_SequenceI',  function (seq) {
var refs=seq.getDBRefs$();
var ib=C$.checkUniprotRefs$java_util_List(refs);
if (ib > -1) {
return C$.getDBRefId$jalview_datamodel_DBRefEntry(refs.get$I(ib));
}return null;
});

Clazz.newMeth(C$, 'checkUniprotRefs$java_util_List',  function (refs) {
var hasUniprot=false;
if (refs != null  && refs.size$() != 0 ) {
for (var ib=0, nb=refs.size$(); ib < nb; ib++) {
var dbRef=refs.get$I(ib);
if (dbRef.getSource$().equalsIgnoreCase$S("UNIPROT")) {
hasUniprot=true;
if (dbRef.isCanonical$()) {
return ib;
}}}
}return hasUniprot ? -1 : -2;
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S',  function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$java_util_Locale($I$(5).ROOT);
for (var ignoredEntry, $ignoredEntry = 0, $$ignoredEntry = ignoreList.split$S(","); $ignoredEntry<$$ignoredEntry.length&&((ignoredEntry=($$ignoredEntry[$ignoredEntry])),1);$ignoredEntry++) {
if (seqName.contains$CharSequence(ignoredEntry)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDBRefId$jalview_datamodel_DBRefEntry',  function (dbRef) {
var ref=dbRef.getAccessionId$().replaceAll$S$S("GO:", "");
return ref;
}, 1);

Clazz.newMeth(C$, 'fetchStructuresMetaData$jalview_datamodel_SequenceI$java_util_Collection$jalview_jbgui_FilterOption$Z',  function (seq, wantedFields, selectedFilterOpt, b) {
var resultList;
if (selectedFilterOpt != null  && p$1.tdBeaconsFilter$S.apply(this, [selectedFilterOpt.getValue$()]) ) {
var tdbRequest=p$1.getTDBeaconsRequest$jalview_datamodel_SequenceI$java_util_Collection.apply(this, [seq, wantedFields]);
resultList=this.tdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(tdbRequest);
this.lastTdbRequest=tdbRequest;
if (resultList != null ) {
var pdbResponse=this.fetchStructuresMetaDataFor$jalview_gui_structurechooser_PDBStructureChooserQuerySource$jalview_fts_core_FTSRestResponse(p$1.getPDBQuerySource.apply(this, []), resultList);
resultList=this.joinResponses$jalview_fts_core_FTSRestResponse$java_util_List(resultList, pdbResponse);
}return resultList;
}resultList=p$1.getPDBQuerySource.apply(this, []).fetchStructuresMetaData$jalview_datamodel_SequenceI$java_util_Collection$jalview_jbgui_FilterOption$Z(seq, wantedFields, selectedFilterOpt, b);
this.lastTdbRequest=p$1.getPDBQuerySource.apply(this, []).lastPdbRequest;
this.lastPdbRequest=this.lastTdbRequest;
return resultList;
});

Clazz.newMeth(C$, 'getPDBQuerySource',  function () {
if (this.pdbQuerySource == null ) {
this.pdbQuerySource=Clazz.new_($I$(6,1));
}return this.pdbQuerySource;
}, p$1);

Clazz.newMeth(C$, 'getTDBeaconsRequest$jalview_datamodel_SequenceI$java_util_Collection',  function (seq, wantedFields) {
var pdbRequest=Clazz.new_($I$(7,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
var query=this.buildQuery$jalview_datamodel_SequenceI(seq);
if (query == null ) {
return null;
}pdbRequest.setSearchTerm$S(query + ".json");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
return pdbRequest;
}, p$1);

Clazz.newMeth(C$, 'getAvailableFilterOptions$S',  function (VIEWS_FILTER) {
var filters=p$1.getPDBQuerySource.apply(this, []).getAvailableFilterOptions$S(VIEWS_FILTER);
this.tdBeaconsFilters=Clazz.new_($I$(1,1));
this.tdBeaconsFilters.addAll$java_util_Collection(this.defaultFilters);
filters.add$I$O(0, Clazz.new_($I$(8,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource,["Best 3D-Beacons Coverage", "3d_beacons_first_best_coverage", VIEWS_FILTER, false, this]));
filters.add$I$O(1, Clazz.new_($I$(8,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource,["Multiple 3D-Beacons Coverage", "3d_beacons_coverage", VIEWS_FILTER, true, this]));
return filters;
});

Clazz.newMeth(C$, 'updateAvailableFilterOptions$S$java_util_List$java_util_Collection',  function (VIEWS_FILTER, xtantOptions, tdbEntries) {
if (tdbEntries != null  && this.lastTdbRequest != null  ) {
var hasPDBe=false;
for (var _row, $_row = tdbEntries.iterator$(); $_row.hasNext$()&&((_row=($_row.next$())),1);) {
var row=_row;
var provider=row.getProvider$();
var providerOpt=Clazz.new_($I$(8,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource,["3DB Provider - " + provider, "only_" + provider, VIEWS_FILTER, false, this]);
if (!xtantOptions.contains$O(providerOpt)) {
xtantOptions.add$I$O(1, providerOpt);
this.tdBeaconsFilters.add$O("only_" + provider);
if ("PDBe".equalsIgnoreCase$S(provider)) {
hasPDBe=true;
}}}
if (!hasPDBe) {
var op=0;
while (op < xtantOptions.size$()){
var filter=xtantOptions.get$I(op);
if (Clazz.instanceOf(filter.getQuerySource$(), "jalview.gui.structurechooser.PDBStructureChooserQuerySource")) {
xtantOptions.remove$I(op);
} else {
++op;
}}
}}});

Clazz.newMeth(C$, 'tdBeaconsFilter$S',  function (fieldToFilterBy) {
return this.tdBeaconsFilters != null  && this.tdBeaconsFilters.contains$O(fieldToFilterBy) ;
}, p$1);

Clazz.newMeth(C$, 'remove_prefix$S',  function (fieldToFilterBy) {
if (this.tdBeaconsFilters != null  && this.tdBeaconsFilters.contains$O(fieldToFilterBy)  && !this.defaultFilters.contains$O(fieldToFilterBy) ) {
return fieldToFilterBy.substring$I("only_".length$());
} else {
return null;
}}, p$1);

Clazz.newMeth(C$, 'needsRefetch$jalview_jbgui_FilterOption',  function (selectedFilterOpt) {
return selectedFilterOpt == null  || !p$1.tdBeaconsFilter$S.apply(this, [selectedFilterOpt.getValue$()]) && this.lastPdbRequest !== this.lastTdbRequest   ;
});

Clazz.newMeth(C$, 'selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z',  function (seq, collectedResults, wantedFields, fieldToFilterBy, b) {
if (fieldToFilterBy != null  && p$1.tdBeaconsFilter$S.apply(this, [fieldToFilterBy]) ) {
var analyser=Clazz.new_([seq, collectedResults, this.lastTdbRequest, fieldToFilterBy, p$1.remove_prefix$S.apply(this, [fieldToFilterBy])],$I$(9,1).c$$jalview_datamodel_SequenceI$java_util_Collection$jalview_fts_core_FTSRestRequest$S$S);
var resultList=Clazz.new_($I$(10,1));
var filteredResponse=analyser.getFilteredResponse$();
var selectedStructures=analyser.selectStructures$java_util_List(filteredResponse);
resultList.setNumberOfItemsFound$I(selectedStructures.size$());
resultList.setSearchSummary$java_util_Collection(selectedStructures);
return resultList;
}return p$1.getPDBQuerySource.apply(this, []).selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z(seq, collectedResults, wantedFields, fieldToFilterBy, b);
});

Clazz.newMeth(C$, 'collectSelectedRows$javax_swing_JTable$IA$java_util_List',  function (restable, selectedRows, selectedSeqsToView) {
var refSeqColIndex=restable.getColumn$O("Ref Sequence").getModelIndex$();
var pdbEntriesToView=Clazz.array($I$(11), [selectedRows.length]);
var count=0;
var idColumnIndex=restable.getColumn$O("Model id").getModelIndex$();
var urlColumnIndex=restable.getColumn$O("Url").getModelIndex$();
var typeColumnIndex=restable.getColumn$O("Provider").getModelIndex$();
var humanUrl=restable.getColumn$O("Page URL").getModelIndex$();
var modelformat=restable.getColumn$O("Model Format").getModelIndex$();
var up_start_idx=restable.getColumn$O("Uniprot Start").getModelIndex$();
var up_end_idx=restable.getColumn$O("Uniprot End").getModelIndex$();
var i=0;
var sellist=Clazz.array(Integer, [selectedRows.length]);
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=new Integer($$row[$row])),1);$row++) {
sellist[i++]=row;
}
$I$(12,"sort$OA$java_util_Comparator",[sellist, ((P$.ThreeDBStructureChooserQuerySource$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThreeDBStructureChooserQuerySource$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$O$O'],  function (o1, o2) {
var o1_xt=(((this.$finals$.restable.getValueAt$I$I((o1).$c(), this.$finals$.up_end_idx)).$c()) - (this.$finals$.restable.getValueAt$I$I((o1).$c(), this.$finals$.up_start_idx)).$c())|0;
var o2_xt=(((this.$finals$.restable.getValueAt$I$I((o2).$c(), this.$finals$.up_end_idx)).$c()) - (this.$finals$.restable.getValueAt$I$I((o2).$c(), this.$finals$.up_start_idx)).$c())|0;
return o2_xt - o1_xt;
});
})()
), Clazz.new_(P$.ThreeDBStructureChooserQuerySource$1.$init$,[this, {restable:restable,up_end_idx:up_end_idx,up_start_idx:up_start_idx}]))]);
for (var row, $row = 0, $$row = sellist; $row<$$row.length&&((row=($$row[$row]).intValue$()),1);$row++) {
var pdbIdStr=restable.getValueAt$I$I(row, idColumnIndex).toString();
var urlStr=restable.getValueAt$I$I(row, urlColumnIndex).toString();
var typeColumn=restable.getValueAt$I$I(row, typeColumnIndex).toString();
var modelPage=humanUrl < 1 ? null : restable.getValueAt$I$I(row, humanUrl);
var strucFormat=restable.getValueAt$I$I(row, modelformat).toString();
var selectedSeq=restable.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$O(selectedSeq);
var pdbEntry=selectedSeq.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=$I$(13,"getFindEntry$S$java_util_Vector",[pdbIdStr, selectedSeq.getAllPDBEntries$()]);
}if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(11,1));
pdbEntry.setId$S(pdbIdStr);
pdbEntry.setAuthoritative$Z(true);
try {
pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(14).valueOf$S(strucFormat));
} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
$I$(15).warn$S("Unknown filetype for 3D Beacons Model from: " + strucFormat + " - " + pdbIdStr + " - " + modelPage );
} else {
throw q;
}
}
if (!"PDBe".equalsIgnoreCase$S(typeColumn)) {
pdbEntry.setRetrievalUrl$S(urlStr);
}pdbEntry.setProvider$S(typeColumn);
pdbEntry.setProviderPage$S(modelPage);
selectedSeq.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}pdbEntriesToView[count++]=pdbEntry;
}
return pdbEntriesToView;
});

Clazz.newMeth(C$, 'getLastFTSRequest$',  function () {
return this.lastTdbRequest;
});

Clazz.newMeth(C$, 'buildPDBFTSQueryFor$jalview_fts_core_FTSRestResponse',  function (upResponse) {
var ftsQueries=Clazz.new_($I$(16,1));
var pdbIds=Clazz.new_($I$(17,1));
var idx_modelId=this.getLastFTSRequest$().getFieldIndex$S("Model id");
var idx_provider=this.getLastFTSRequest$().getFieldIndex$S("Provider");
for (var row, $row = upResponse.getSearchSummary$().iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
var id=row.getSummaryData$()[idx_modelId];
var provider=row.getSummaryData$()[idx_provider];
if ("PDBe".equalsIgnoreCase$S(provider)) {
pdbIds.add$O(id);
}}
var sb=Clazz.new_($I$(18,1));
for (var pdbId, $pdbId = pdbIds.iterator$(); $pdbId.hasNext$()&&((pdbId=($pdbId.next$())),1);) {
if (sb.length$() > 2500) {
ftsQueries.add$O(sb.toString());
sb.setLength$I(0);
}if (sb.length$() > 0) {
sb.append$S(" OR ");
}sb.append$S(pdbId);
}
if (sb.length$() > 0) {
ftsQueries.add$O(sb.toString());
}return ftsQueries;
});

Clazz.newMeth(C$, 'fetchStructuresMetaDataFor$jalview_gui_structurechooser_PDBStructureChooserQuerySource$jalview_fts_core_FTSRestResponse',  function (pdbquery, upResponse) {
var pdb_Queries=this.buildPDBFTSQueryFor$jalview_fts_core_FTSRestResponse(upResponse);
if (pdb_Queries.size$() == 0) {
return null;
}var results=Clazz.new_($I$(16,1));
for (var pdb_Query, $pdb_Query = pdb_Queries.iterator$(); $pdb_Query.hasNext$()&&((pdb_Query=($pdb_Query.next$())),1);) {
var resultList;
var pdbRequest=Clazz.new_($I$(7,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setWantedFields$java_util_Collection(pdbquery.getDocFieldPrefs$().getStructureSummaryFields$());
pdbRequest.setSearchTerm$S(pdb_Query + ")");
try {
resultList=pdbquery.executePDBFTSRestRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
results.add$O(resultList);
this.lastPdbRequest=pdbRequest;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(15).error$S$Throwable("PDBFTSQuery failed", ex);
} else {
throw ex;
}
}
}
return results;
});

Clazz.newMeth(C$, 'joinResponses$jalview_fts_core_FTSRestResponse$java_util_List',  function (upResponse, pdbResponses) {
var hasPdbResp=this.lastPdbRequest != null ;
var idx_provider=this.getLastFTSRequest$().getFieldIndex$S("Provider");
var idx_modelId=this.getLastFTSRequest$().getFieldIndex$S("Model id");
var pdbIdx=hasPdbResp ? this.lastPdbRequest.getFieldIndex$S("PDB Id") : -1;
var pdbTitle_idx=hasPdbResp ? this.lastPdbRequest.getFieldIndex$S("Title") : -1;
var tdbTitle_idx=this.getLastFTSRequest$().getFieldIndex$S("Title");
for (var row, $row = upResponse.getSearchSummary$().iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
var id=row.getSummaryData$()[idx_modelId];
var provider=row.getSummaryData$()[idx_provider];
if ("PDBe".equalsIgnoreCase$S(provider)) {
if (!hasPdbResp) {
System.out.println$S("Warning: seems like we couldn\'t get to the PDBe search interface.");
} else {
for (var pdbResponse, $pdbResponse = pdbResponses.iterator$(); $pdbResponse.hasNext$()&&((pdbResponse=($pdbResponse.next$())),1);) {
for (var pdbrow, $pdbrow = pdbResponse.getSearchSummary$().iterator$(); $pdbrow.hasNext$()&&((pdbrow=($pdbrow.next$())),1);) {
var pdbid=pdbrow.getSummaryData$()[pdbIdx];
if (id.equalsIgnoreCase$S(pdbid)) {
row.getSummaryData$()[tdbTitle_idx]=pdbrow.getSummaryData$()[pdbTitle_idx];
}}
}
}} else {
row.getSummaryData$()[tdbTitle_idx]="Model from TDB";
}}
return upResponse;
});

Clazz.newMeth(C$, 'getFTSDataFor$javax_swing_JTable$I$java_util_Collection',  function (restable, selectedRow, discoveredStructuresSet) {
var idColumnIndex=restable.getColumn$O("Model id").getModelIndex$();
var modelId=restable.getValueAt$I$I(selectedRow, idColumnIndex);
for (var row, $row = discoveredStructuresSet.iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
if (Clazz.instanceOf(row, "jalview.fts.service.threedbeacons.TDB_FTSData") && (row).getModelId$().equals$O(modelId) ) {
return (row);
}}
return null;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),p$1={},I$=[[0,'java.util.Arrays','java.util.Locale','java.util.ArrayList','java.util.Collections','jalview.gui.structurechooser.TDBResultAnalyser','java.util.BitSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TDBResultAnalyser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filter=null;
this.sourceFilter=null;
},1);

C$.$fields$=[['I',['idx_ups','idx_upe','idx_mcat','idx_mqual','idx_resol','idx_mprov'],'S',['filter','sourceFilter'],'O',['seq','jalview.datamodel.SequenceI','collectedResults','java.util.Collection','lastTdbRequest','jalview.fts.core.FTSRestRequest']]
,['O',['EXP_CATEGORIES','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$java_util_Collection$jalview_fts_core_FTSRestRequest$S$S',  function (seq, collectedResults, lastTdbRequest, fieldToFilterBy, string) {
;C$.$init$.apply(this);
this.seq=seq;
this.collectedResults=collectedResults;
this.lastTdbRequest=lastTdbRequest;
this.filter=fieldToFilterBy;
this.sourceFilter=string;
this.idx_ups=lastTdbRequest.getFieldIndex$S("Uniprot Start");
this.idx_upe=lastTdbRequest.getFieldIndex$S("Uniprot End");
this.idx_mcat=lastTdbRequest.getFieldIndex$S("Model Category");
this.idx_mprov=lastTdbRequest.getFieldIndex$S("Provider");
this.idx_mqual=lastTdbRequest.getFieldIndex$S("Confidence");
this.idx_resol=lastTdbRequest.getFieldIndex$S("Resolution");
}, 1);

Clazz.newMeth(C$, 'scoreCategory$S',  function (cat) {
if (cat == null ) {
return 0;
}var upper_cat=cat.toUpperCase$java_util_Locale($I$(2).ROOT);
var idx=C$.EXP_CATEGORIES.indexOf$O(upper_cat);
if (idx == -1) {
System.out.println$S("Unknown category: '" + cat + "'" );
C$.EXP_CATEGORIES.add$O(upper_cat);
idx=C$.EXP_CATEGORIES.size$() - 1;
}return -C$.EXP_CATEGORIES.size$() - idx;
});

Clazz.newMeth(C$, 'getFilteredResponse$',  function () {
var filteredResponse=Clazz.new_($I$(3,1));
for (var row, $row = this.collectedResults.iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
if (row.getSummaryData$() != null  && row.getSummaryData$()[this.idx_ups] != null  ) {
var up_s=(row.getSummaryData$()[this.idx_ups]).$c();
var up_e=(row.getSummaryData$()[this.idx_upe]).$c();
var provider=row.getSummaryData$()[this.idx_mprov];
var mcat=row.getSummaryData$()[this.idx_mcat];
var scorecat=this.scoreCategory$S(mcat);
if (this.sourceFilter == null  || this.sourceFilter.equals$O(provider) ) {
if (this.seq === row.getSummaryData$()[0]  && up_e > this.seq.getStart$()  && up_s < this.seq.getEnd$() ) {
filteredResponse.add$O(row);
}}}}
$I$(4,"sort$java_util_List$java_util_Comparator",[filteredResponse, ((P$.TDBResultAnalyser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDBResultAnalyser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSData$jalview_fts_api_FTSData','compare$O$O'],  function (o1, o2) {
var o1data=o1.getSummaryData$();
var o2data=o2.getSummaryData$();
var o1_s=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c();
var o1_e=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c();
var o1_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
var o1_prov=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mprov]).toUpperCase$java_util_Locale($I$(2).ROOT);
var o2_s=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c();
var o2_e=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c();
var o2_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
var o2_prov=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mprov]).toUpperCase$java_util_Locale($I$(2).ROOT);
if (o1_cat == o2_cat) {
if (o1_s == o2_s) {
var o1_xtent=o1_e - o1_s;
var o2_xtent=o2_e - o2_s;
if (o1_xtent == o2_xtent) {
if (o1_cat == this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [$I$(5).EXP_CATEGORIES.get$I(0)])) {
if (o1_prov.equals$O(o2_prov)) {
if ("PDBE".equals$O(o1_prov)) {
if (p$1.eitherNull$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol, o1data, o2data])) {
return p$1.nonNullFirst$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol, o1data, o2data]);
}var o1_res=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol]).valueOf();
var o2_res=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol]).valueOf();
return (o2_res < o1_res ) ? 1 : (o2_res == o1_res ) ? 0 : -1;
} else {
return 0;
}} else {
return "PDBE".equals$O(o1_prov) ? -1 : "PDBE".equals$O(o2_prov) ? 1 : 0;
}} else {
if (p$1.eitherNull$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual, o1data, o2data])) {
return p$1.nonNullFirst$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual, o1data, o2data]);
}var o1_mq=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual]).valueOf();
var o2_mq=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual]).valueOf();
return (o2_mq < o1_mq ) ? 1 : (o2_mq == o1_mq ) ? 0 : -1;
}} else {
return o1_xtent - o2_xtent;
}} else {
return o1_s - o2_s;
}} else {
return o2_cat - o1_cat;
}});

Clazz.newMeth(C$, 'nonNullFirst$I$OA$OA',  function (idx_resol, o1data, o2data) {
return o1data[idx_resol] === o2data[idx_resol]  ? 0 : o1data[idx_resol] != null  ? -1 : 1;
}, p$1);

Clazz.newMeth(C$, 'eitherNull$I$OA$OA',  function (idx_resol, o1data, o2data) {
return (o1data[idx_resol] == null  || o2data[idx_resol] == null  );
}, p$1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});
})()
), Clazz.new_(P$.TDBResultAnalyser$1.$init$,[this, null]))]);
return filteredResponse;
});

Clazz.newMeth(C$, 'selectStructures$java_util_List',  function (filteredStructures) {
var selected=Clazz.new_($I$(3,1));
var cover=Clazz.new_($I$(6,1));
cover.set$I$I(this.seq.getStart$(), this.seq.getEnd$());
for (var structure, $structure = filteredStructures.iterator$(); $structure.hasNext$()&&((structure=($structure.next$())),1);) {
var odata=structure.getSummaryData$();
var o1_s=(odata[this.idx_ups]).$c();
var o1_e=(odata[this.idx_upe]).$c();
var o1_cat=this.scoreCategory$S(odata[this.idx_mcat]);
var scover=Clazz.new_($I$(6,1));
scover.set$I$I(o1_s, o1_e);
scover.and$java_util_BitSet(cover);
if (scover.cardinality$() > 4) {
selected.add$O(structure);
cover.andNot$java_util_BitSet(scover);
}}
if (selected.size$() == 0) {
return selected;
}$I$(4,"sort$java_util_List$java_util_Comparator",[selected, ((P$.TDBResultAnalyser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDBResultAnalyser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSData$jalview_fts_api_FTSData','compare$O$O'],  function (o1, o2) {
var o1data=o1.getSummaryData$();
var o2data=o2.getSummaryData$();
var o1_xt=(((o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c()) - ((o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c()))|0;
var o1_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
var o2_xt=(((o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c() - (o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c())|0);
var o2_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
return o2_xt - o1_xt;
});
})()
), Clazz.new_(P$.TDBResultAnalyser$2.$init$,[this, null]))]);
if (this.filter.equals$O("3d_beacons_first_best_coverage")) {
return selected.subList$I$I(0, 1);
}return selected;
});

C$.$static$=function(){C$.$static$=0;
C$.EXP_CATEGORIES=$I$(1,"asList$OA",[Clazz.array(String, -1, ["EXPERIMENTALLY DETERMINED", "DEEP-LEARNING", "TEMPLATE-BASED", "AB-INITIO", "CONFORMATIONAL ENSEMBLE"])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),I$=[[0,'jalview.fts.service.pdb.PDBFTSRestClient','jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'StringBuilder','java.util.LinkedHashSet','java.util.HashSet','java.util.Locale','java.util.Objects','jalview.fts.core.FTSRestRequest','java.util.ArrayList','jalview.jbgui.FilterOption','jalview.util.MessageManager','jalview.datamodel.PDBEntry','jalview.gui.structurechooser.StructureChooserQuerySource',['jalview.datamodel.PDBEntry','.Type']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDBStructureChooserQuerySource", null, 'jalview.gui.structurechooser.StructureChooserQuerySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastPdbRequest','jalview.fts.core.FTSRestRequest','pdbRestClient','jalview.fts.api.FTSRestClientI']]
,['I',['$MAX_QLENGTH']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.pdbRestClient=$I$(1).getInstance$();
this.docFieldPrefs=Clazz.new_([$I$(3).STRUCTURE_CHOOSER, $I$(1).getInstance$()],$I$(2,1).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI);
}, 1);

Clazz.newMeth(C$, 'buildQuery$jalview_datamodel_SequenceI',  function (seq) {
var isPDBRefsFound=false;
var isUniProtRefsFound=false;
var queryBuilder=Clazz.new_($I$(4,1));
var seqRefs=Clazz.new_($I$(5,1));
var pdbids=Clazz.new_($I$(6,1));
if (seq.getAllPDBEntries$() != null  && queryBuilder.length$() < C$.$MAX_QLENGTH ) {
for (var entry, $entry = seq.getAllPDBEntries$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (C$.isValidSeqName$S(entry.getId$())) {
var id=entry.getId$().toLowerCase$java_util_Locale($I$(7).ROOT);
queryBuilder.append$S("pdb_id:").append$S(id).append$S(" OR ");
isPDBRefsFound=true;
pdbids.add$O(id);
}}
}var refs=seq.getDBRefs$();
if (refs != null  && refs.size$() != 0 ) {
for (var ib=0, nb=refs.size$(); ib < nb; ib++) {
var dbRef=refs.get$I(ib);
if (C$.isValidSeqName$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)) && queryBuilder.length$() < C$.$MAX_QLENGTH ) {
if (dbRef.getSource$().equalsIgnoreCase$S("UNIPROT")) {
queryBuilder.append$S("uniprot_accession:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)).append$S(" OR ");
queryBuilder.append$S("uniprot_id:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)).append$S(" OR ");
isUniProtRefsFound=true;
} else if (dbRef.getSource$().equalsIgnoreCase$S("PDB")) {
var id=C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef).toLowerCase$java_util_Locale($I$(7).ROOT);
if (!pdbids.contains$O(id)) {
queryBuilder.append$S("pdb_id:").append$S(id).append$S(" OR ");
isPDBRefsFound=true;
pdbids.add$O(id);
}} else {
seqRefs.add$O(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef));
}}}
}if (!isPDBRefsFound && !isUniProtRefsFound ) {
var seqName=seq.getName$();
seqName=C$.sanitizeSeqName$S(seqName);
var names=seqName.toLowerCase$java_util_Locale($I$(7).ROOT).split$S("\\|");
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
name.trim$();
if (C$.isValidSeqName$S(name)) {
seqRefs.add$O(name);
}}
for (var seqRef, $seqRef = seqRefs.iterator$(); $seqRef.hasNext$()&&((seqRef=($seqRef.next$())),1);) {
queryBuilder.append$S("text:").append$S(seqRef).append$S(" OR ");
}
}var endIndex=queryBuilder.lastIndexOf$S(" OR ");
if (queryBuilder.toString().length$() < 6) {
return null;
}var query=queryBuilder.toString().substring$I$I(0, endIndex);
return query;
});

Clazz.newMeth(C$, 'sanitizeSeqName$S',  function (seqName) {
$I$(8).requireNonNull$O(seqName);
return seqName.replaceAll$S$S("\\[\\d*\\]", "").replaceAll$S$S("[^\\dA-Za-z|_]", "").replaceAll$S$S("\\s+", "+");
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S',  function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$java_util_Locale($I$(7).ROOT);
for (var ignoredEntry, $ignoredEntry = 0, $$ignoredEntry = ignoreList.split$S(","); $ignoredEntry<$$ignoredEntry.length&&((ignoredEntry=($$ignoredEntry[$ignoredEntry])),1);$ignoredEntry++) {
if (seqName.contains$CharSequence(ignoredEntry)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDBRefId$jalview_datamodel_DBRefEntry',  function (dbRef) {
var ref=dbRef.getAccessionId$().replaceAll$S$S("GO:", "");
return ref;
}, 1);

Clazz.newMeth(C$, 'fetchStructuresMetaData$jalview_datamodel_SequenceI$java_util_Collection$jalview_jbgui_FilterOption$Z',  function (seq, wantedFields, selectedFilterOpt, b) {
var resultList;
var pdbRequest=Clazz.new_($I$(9,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setFieldToSortBy$S$Z(selectedFilterOpt.getValue$(), b);
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setSearchTerm$S(this.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
resultList=this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
this.lastPdbRequest=pdbRequest;
return resultList;
});

Clazz.newMeth(C$, 'getAvailableFilterOptions$S',  function (VIEWS_FILTER) {
var filters=Clazz.new_($I$(10,1));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.best_quality"), "overall_quality", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.best_resolution"), "resolution", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.most_protein_chain"), "number_of_protein_chains", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.most_bound_molecules"), "number_of_bound_molecules", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.most_polymer_residues"), "number_of_polymer_residues", VIEWS_FILTER, true, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
return filters;
});

Clazz.newMeth(C$, 'needsRefetch$jalview_jbgui_FilterOption',  function (selectedFilterOpt) {
return false;
});

Clazz.newMeth(C$, 'selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z',  function (seq, collectedResults, wantedFields, fieldToFilterBy, b) {
var resultList;
var pdbRequest=Clazz.new_($I$(9,1));
if (fieldToFilterBy.equalsIgnoreCase$S("uniprot_coverage")) {
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setSearchTerm$S(this.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
pdbRequest.setFacet$Z(true);
pdbRequest.setFacetPivot$S(fieldToFilterBy + ",entry_entity");
pdbRequest.setFacetPivotMinCount$I(1);
} else {
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setFieldToSortBy$S$Z(fieldToFilterBy, b);
pdbRequest.setSearchTerm$S(this.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
}resultList=this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
this.lastPdbRequest=pdbRequest;
return resultList;
});

Clazz.newMeth(C$, 'collectSelectedRows$javax_swing_JTable$IA$java_util_List',  function (restable, selectedRows, selectedSeqsToView) {
var refSeqColIndex=restable.getColumn$O("Ref Sequence").getModelIndex$();
var pdbEntriesToView=Clazz.array($I$(13), [selectedRows.length]);
var count=0;
var idColumnIndex=-1;
var fromTDB=true;
idColumnIndex=restable.getColumn$O("PDB Id").getModelIndex$();
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
var pdbIdStr=restable.getValueAt$I$I(row, idColumnIndex).toString();
var selectedSeq=restable.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$O(selectedSeq);
var pdbEntry=selectedSeq.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=$I$(14,"getFindEntry$S$java_util_Vector",[pdbIdStr, selectedSeq.getAllPDBEntries$()]);
}if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(13,1));
pdbEntry.setId$S(pdbIdStr);
pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(15).MMCIF);
selectedSeq.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}pdbEntriesToView[count++]=pdbEntry;
}
return pdbEntriesToView;
});

Clazz.newMeth(C$, 'getLastFTSRequest$',  function () {
return this.lastPdbRequest;
});

Clazz.newMeth(C$, 'executePDBFTSRestRequest$jalview_fts_core_FTSRestRequest',  function (pdbRequest) {
return this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
});

C$.$static$=function(){C$.$static$=0;
C$.$MAX_QLENGTH=7820;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.SwingUtilities','jalview.util.MessageManager','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.PrintWriter','java.io.FileWriter','java.awt.Toolkit','java.awt.datatransfer.StringSelection','java.awt.datatransfer.DataFlavor','jalview.io.IdentifyFile','jalview.io.DataSourceType','jalview.bin.Jalview','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.io.AppletFormatAdapter','jalview.io.FormatAdapter','jalview.gui.AlignFrame','jalview.json.binding.biojson.v1.ColourSchemeMapper','javax.swing.JPopupMenu','javax.swing.JMenuItem']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer", null, 'jalview.jbgui.GCutAndPasteTransfer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.source=null;
},1);

C$.$fields$=[['O',['alignpanel','jalview.api.AlignmentViewPanel','viewport','jalview.api.AlignViewportI','source','jalview.io.AlignmentFileReaderI']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
$I$(1,"invokeLater$Runnable",[((P$.CutAndPasteTransfer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.CutAndPasteTransfer'].textarea.requestFocus$();
});
})()
), Clazz.new_(P$.CutAndPasteTransfer$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'setForInput$jalview_api_AlignmentViewPanel',  function (viewpanel) {
this.alignpanel=viewpanel;
if (this.alignpanel != null ) {
this.viewport=this.alignpanel.getAlignViewport$();
}if (this.viewport != null ) {
this.ok.setText$S($I$(2).getString$S("action.add"));
}this.getContentPane$().add$java_awt_Component$O(this.inputButtonPanel, "South");
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.textarea.getText$();
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
this.textarea.setText$S(text);
});

Clazz.newMeth(C$, 'appendText$S',  function (text) {
this.textarea.append$S(text);
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=Clazz.new_([$I$(4).getProperty$S("LAST_DIRECTORY")],$I$(3,1).c$$S);
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(5,1)));
chooser.setDialogTitle$S($I$(2).getString$S("label.save_text_to_file"));
chooser.setToolTipText$S($I$(2).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
try {
var out=Clazz.new_([Clazz.new_([chooser.getSelectedFile$()],$I$(7,1).c$$java_io_File)],$I$(6,1).c$$java_io_Writer);
out.print$S(this.getText$());
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'copyItem_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.textarea.getSelectedText$();
var c=$I$(8).getDefaultToolkit$().getSystemClipboard$();
c.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(Clazz.new_([this.textarea.getSelectedText$()],$I$(9,1).c$$S), null);
});

Clazz.newMeth(C$, 'pasteMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=$I$(8).getDefaultToolkit$().getSystemClipboard$();
var contents=c.getContents$O(this);
if (contents == null ) {
return;
}try {
this.textarea.append$S(contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(10).stringFlavor));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var text=this.getText$();
if (text.trim$().length$() < 1) {
return;
}var format=null;
try {
format=Clazz.new_($I$(11,1)).identify$S$jalview_io_DataSourceType(text, $I$(12).PASTE);
} catch (e1) {
if (Clazz.exceptionOf(e1,"jalview.io.FileFormatException")){
} else {
throw e1;
}
}
if (format == null ) {
System.err.println$S($I$(2).getString$S("label.couldnt_read_data"));
if (!$I$(13).isHeadlessMode$()) {
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(15).desktop, $I$(16).getSupportedFormats$(), $I$(2).getString$S("label.couldnt_read_data"), 2]);
}return;
}var al=null;
try {
var fa=Clazz.new_($I$(17,1).c$$jalview_api_AlignmentViewPanel,[this.alignpanel]);
al=fa.readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(this.getText$(), $I$(12).PASTE, format);
this.source=fa.getAlignFile$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(15).desktop, $I$(2,"formatMessage$S$SA",["label.couldnt_read_pasted_text", Clazz.array(String, -1, [ex.toString()])]), $I$(2).getString$S("label.error_parsing_text"), 2]);
} else {
throw ex;
}
}
if (al != null  && al.hasValidSequence$() ) {
var title=$I$(2,"formatMessage$S$SA",["label.input_cut_paste_params", Clazz.array(String, -1, [format.getName$()])]);
var proxyColourScheme=this.source.getFeatureColourScheme$();
if (this.viewport != null  && this.viewport.getAlignment$() != null  ) {
(this.viewport).addAlignment$jalview_datamodel_AlignmentI$S(al, title);
this.viewport.applyFeaturesStyle$jalview_api_FeatureSettingsModelI(proxyColourScheme);
} else {
var af;
if (Clazz.instanceOf(this.source, "jalview.api.ComplexAlignFile")) {
var hidden=(this.source).getHiddenColumns$();
var hiddenSeqs=(this.source).getHiddenSequences$();
var showSeqFeatures=(this.source).isShowSeqFeatures$();
var colourSchemeName=(this.source).getGlobalColourScheme$();
var fd=(this.source).getDisplayedFeatures$();
af=Clazz.new_($I$(18,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$I$I,[al, hiddenSeqs, hidden, 700, 500]);
af.getViewport$().setShowSequenceFeatures$Z(showSeqFeatures);
af.getViewport$().setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fd);
af.setMenusForViewport$();
var cs=$I$(19).getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI(colourSchemeName, al);
if (cs != null ) {
af.changeColour$jalview_schemes_ColourSchemeI(cs);
}} else {
af=Clazz.new_($I$(18,1).c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
if (Clazz.instanceOf(this.source, "jalview.api.FeaturesSourceI")) {
af.getViewport$().setShowSequenceFeatures$Z(true);
}}if (proxyColourScheme != null ) {
af.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(proxyColourScheme);
}af.currentFileFormat=format;
$I$(15).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, title, 700, 500);
af.setStatus$S($I$(2).getString$S("label.successfully_pasted_alignment_file"));
try {
af.setMaximum$Z($I$(4).getDefault$S$Z("SHOW_FULLSCREEN", false));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}} else {
System.err.println$S($I$(2).getString$S("label.couldnt_read_data"));
if (!$I$(13).isHeadlessMode$()) {
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(15).desktop, $I$(16).getSupportedFormats$(), $I$(2).getString$S("label.couldnt_read_data"), 2]);
}}});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
this.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'textarea_mousePressed$java_awt_event_MouseEvent',  function (e) {
if (e.isPopupTrigger$()) {
var popup=Clazz.new_([$I$(2).getString$S("action.edit")],$I$(20,1).c$$S);
var item=Clazz.new_([$I$(2).getString$S("action.copy")],$I$(21,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.CutAndPasteTransfer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.CutAndPasteTransfer'].copyItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.CutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.CutAndPasteTransfer$2.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(2).getString$S("action.paste")],$I$(21,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.CutAndPasteTransfer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.CutAndPasteTransfer'].pasteMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.CutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.CutAndPasteTransfer$3.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this, e.getX$() + 10, e.getY$() + this.textarea.getY$() + 40 );
}});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.ArrayList','jalview.util.MessageManager','jalview.analysis.CrossRef','jalview.ws.SequenceFetcher','jalview.analysis.AlignmentUtils','jalview.bin.Cache','jalview.gui.AlignFrame','jalview.gui.Desktop','jalview.gui.SplitFrame','jalview.gui.OOMWarning','jalview.bin.Console','java.util.HashMap','jalview.ext.ensembl.EnsemblInfo','jalview.util.DBRefUtils','jalview.ext.ensembl.EnsemblMap','jalview.util.MappingUtils','jalview.gui.JvOptionPane','jalview.structure.StructureSelectionManager','jalview.datamodel.SequenceI','jalview.datamodel.Alignment']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CrossRefAction", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xrefViews=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['_odna'],'S',['source'],'O',['alignFrame','jalview.gui.AlignFrame','sel','jalview.datamodel.SequenceI[]','xrefViews','java.util.List']]]

Clazz.newMeth(C$, 'getXrefViews$',  function () {
return this.xrefViews;
});

Clazz.newMeth(C$, 'run$',  function () {
var sttime=System.currentTimeMillis$();
this.alignFrame.setProgressBar$S$J($I$(2,"formatMessage$S$OA",["status.searching_for_sequences_from", Clazz.array(java.lang.Object, -1, [this.source])]), sttime);
try {
var alignment=this.alignFrame.getViewport$().getAlignment$();
var dataset=alignment.getDataset$() == null  ? alignment : alignment.getDataset$();
var dna=alignment.isNucleotide$();
if (this._odna != dna ) {
System.err.println$S("Conflict: showProducts for alignment originally thought to be " + (this._odna ? "DNA" : "Protein") + " now searching for " + (dna ? "DNA" : "Protein") + " Context." );
}var xrefs=Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI,[this.sel, dataset]).findXrefSequences$S$Z(this.source, dna);
if (xrefs == null ) {
return;
}C$.findGeneLoci$java_util_List(xrefs.getSequences$());
var featureColourScheme=Clazz.new_($I$(4,1)).getFeatureColourScheme$S(this.source);
if (dna && $I$(5).looksLikeEnsembl$jalview_datamodel_AlignmentI(alignment) ) {
featureColourScheme=Clazz.new_($I$(4,1)).getFeatureColourScheme$S("ENSEMBL");
}var xrefsAlignment=this.makeCrossReferencesAlignment$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(dataset, xrefs);
if (!dna) {
xrefsAlignment=$I$(5,"makeCdsAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA",[xrefsAlignment.getSequencesArray$(), dataset, this.sel]);
xrefsAlignment.alignAs$jalview_datamodel_AlignmentI(alignment);
}var copyAlignment=null;
if ($I$(6).getDefault$S$Z("ENABLE_SPLIT_FRAME", true)) {
copyAlignment=this.copyAlignmentForSplitFrame$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(alignment, dataset, dna, xrefs, xrefsAlignment);
if (copyAlignment == null ) {
return;
}}var newFrame=Clazz.new_($I$(7,1).c$$jalview_datamodel_AlignmentI$I$I,[xrefsAlignment, 700, 500]);
if ($I$(6).getDefault$S$Z("HIDE_INTRONS", true)) {
newFrame.hideFeatureColumns$S$Z("exon", false);
}var newtitle=String.format$S$OA("%s %s %s", Clazz.array(java.lang.Object, -1, [dna ? $I$(2).getString$S("label.proteins") : $I$(2).getString$S("label.nucleotides"), $I$(2).getString$S("label.for"), this.alignFrame.getTitle$()]));
newFrame.setTitle$S(newtitle);
if (copyAlignment == null ) {
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(newFrame, newtitle, 700, 500);
this.xrefViews.add$O(newFrame.alignPanel);
return;
}var copyThis=Clazz.new_($I$(7,1).c$$jalview_datamodel_AlignmentI$I$I,[copyAlignment, 700, 500]);
copyThis.setTitle$S(this.alignFrame.getTitle$());
var showSequenceFeatures=this.alignFrame.getViewport$().isShowSequenceFeatures$();
newFrame.setShowSeqFeatures$Z(showSequenceFeatures);
copyThis.setShowSeqFeatures$Z(showSequenceFeatures);
var myFeatureStyling=this.alignFrame.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
var fr1=newFrame.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
fr1.transferSettings$jalview_api_FeatureRenderer(myFeatureStyling);
fr1.findAllFeatures$Z(true);
var fr2=copyThis.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
fr2.transferSettings$jalview_api_FeatureRenderer(myFeatureStyling);
fr2.findAllFeatures$Z(true);
newFrame.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(featureColourScheme);
copyThis.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(featureColourScheme);
for (var origpanel, $origpanel = this.alignFrame.getAlignPanels$().iterator$(); $origpanel.hasNext$()&&((origpanel=($origpanel.next$())),1);) {
origpanel.getAlignViewport$().mergeFeaturesStyle$jalview_api_FeatureSettingsModelI(featureColourScheme);
}
var sf=Clazz.new_($I$(9,1).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame,[dna ? copyThis : newFrame, dna ? newFrame : copyThis]);
newFrame.setVisible$Z(true);
copyThis.setVisible$Z(true);
var linkedTitle=$I$(2).getString$S("label.linked_view_title");
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(sf, linkedTitle, -1, -1);
sf.adjustInitialLayout$();
this.xrefViews.add$O(dna ? copyThis.alignPanel : newFrame.alignPanel);
this.xrefViews.add$O(!dna ? copyThis.alignPanel : newFrame.alignPanel);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
Clazz.new_($I$(10,1).c$$S$OutOfMemoryError,["whilst fetching crossreferences", e]);
}
} else {
var e = e$$;
{
$I$(11).error$S$Throwable("Error when finding crossreferences", e);
}
}
} finally {
this.alignFrame.setProgressBar$S$J($I$(2,"formatMessage$S$OA",["status.finished_searching_for_sequences_from", Clazz.array(java.lang.Object, -1, [this.source])]), sttime);
}
});

Clazz.newMeth(C$, 'findGeneLoci$java_util_List',  function (sequences) {
var retrievedLoci=Clazz.new_($I$(12,1));
for (var seq, $seq = sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
C$.findGeneLoci$jalview_datamodel_SequenceI$java_util_Map(seq, retrievedLoci);
}
}, 1);

Clazz.newMeth(C$, 'findGeneLoci$jalview_datamodel_SequenceI$java_util_Map',  function (seq, retrievedLoci) {
if (seq == null  || seq.isProtein$()  || seq.getGeneLoci$() != null   || seq.getDBRefs$() == null  ) {
return;
}var ensemblDivisions=Clazz.new_($I$(13,1)).getDivisions$();
var divisionsArray=ensemblDivisions.toArray$OA(Clazz.array(String, [ensemblDivisions.size$()]));
var seqRefs=seq.getDBRefs$();
var directEnsemblRefs=$I$(14).selectRefs$java_util_List$SA(seqRefs, divisionsArray);
if (directEnsemblRefs != null ) {
for (var ensemblRef, $ensemblRef = directEnsemblRefs.iterator$(); $ensemblRef.hasNext$()&&((ensemblRef=($ensemblRef.next$())),1);) {
if (C$.fetchGeneLoci$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_Map(seq, ensemblRef, retrievedLoci)) {
return;
}}
}for (var dbref, $dbref = seq.getDBRefs$().iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
if (dbref.getMap$() != null  && dbref.getMap$().getTo$() != null  ) {
var dbrefs=dbref.getMap$().getTo$().getDBRefs$();
var indirectEnsemblRefs=$I$(14).selectRefs$java_util_List$SA(dbrefs, divisionsArray);
if (indirectEnsemblRefs != null ) {
for (var ensemblRef, $ensemblRef = indirectEnsemblRefs.iterator$(); $ensemblRef.hasNext$()&&((ensemblRef=($ensemblRef.next$())),1);) {
if (C$.fetchGeneLoci$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_Map(seq, ensemblRef, retrievedLoci)) {
return;
}}
}}}
}, 1);

Clazz.newMeth(C$, 'fetchGeneLoci$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_Map',  function (seq, dbref, retrievedLoci) {
var accession=dbref.getAccessionId$();
var division=dbref.getSource$();
if (accession.startsWith$S("ENSP")) {
return false;
}var mapper=Clazz.new_($I$(15,1));
var geneLoci=mapper.getCdsMapping$S$S$I$I(division, accession, 1, seq.getLength$());
if (geneLoci != null ) {
var map=geneLoci.getMapping$();
var mappedFromLength=$I$(16,"getLength$java_util_List",[map.getFromRanges$()]);
if (mappedFromLength == seq.getLength$()) {
seq.setGeneLoci$S$S$S$jalview_util_MapList(geneLoci.getSpeciesId$(), geneLoci.getAssemblyId$(), geneLoci.getChromosomeId$(), map);
retrievedLoci.put$O$O(dbref, geneLoci);
return true;
}}geneLoci=mapper.getCdnaMapping$S$S$I$I(division, accession, 1, seq.getLength$());
if (geneLoci != null ) {
var map=geneLoci.getMapping$();
var mappedFromLength=$I$(16,"getLength$java_util_List",[map.getFromRanges$()]);
if (mappedFromLength == seq.getLength$()) {
seq.setGeneLoci$S$S$S$jalview_util_MapList(geneLoci.getSpeciesId$(), geneLoci.getAssemblyId$(), geneLoci.getChromosomeId$(), map);
retrievedLoci.put$O$O(dbref, geneLoci);
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'copyAlignmentForSplitFrame$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (alignment, dataset, dna, xrefs, xrefsAlignment) {
var copyAlignment;
var copyAlignmentIsAligned=false;
if (dna) {
copyAlignment=$I$(5,"makeCdsAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA",[this.sel, dataset, xrefsAlignment.getSequencesArray$()]);
if (copyAlignment.getHeight$() == 0) {
$I$(17,"showMessageDialog$java_awt_Component$S$S$I",[this.alignFrame, $I$(2).getString$S("label.cant_map_cds"), $I$(2).getString$S("label.operation_failed"), 0]);
System.err.println$S("Failed to make CDS alignment");
return null;
}if ("ENSEMBL".equalsIgnoreCase$S(this.source) || $I$(5).looksLikeEnsembl$jalview_datamodel_AlignmentI(alignment) ) {
copyAlignment.alignAs$jalview_datamodel_AlignmentI(alignment);
copyAlignmentIsAligned=true;
}} else {
copyAlignment=$I$(5,"makeCopyAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI",[this.sel, xrefs.getSequencesArray$(), dataset]);
}copyAlignment.setGapCharacter$C(this.alignFrame.viewport.getGapCharacter$());
var ssm=$I$(18,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(8).instance]);
ssm.registerMappings$java_util_List(dataset.getCodonFrames$());
if (copyAlignment.getHeight$() <= 0) {
System.err.println$S("No Sequences generated for xRef type " + this.source);
return null;
}if (dna && copyAlignmentIsAligned ) {
xrefsAlignment.alignAs$jalview_datamodel_AlignmentI(copyAlignment);
} else {
if (dna && "ENSEMBL".equalsIgnoreCase$S(this.source) ) {
copyAlignment.alignAs$jalview_datamodel_AlignmentI(xrefsAlignment);
}}return copyAlignment;
});

Clazz.newMeth(C$, 'makeCrossReferencesAlignment$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (dataset, seqs) {
var sprods=Clazz.array($I$(19), [seqs.getHeight$()]);
for (var s=0; s < sprods.length; s++) {
sprods[s]=(seqs.getSequenceAt$I(s)).deriveSequence$();
if (dataset.getSequences$() == null  || !dataset.getSequences$().contains$O(sprods[s].getDatasetSequence$()) ) {
dataset.addSequence$jalview_datamodel_SequenceI(sprods[s].getDatasetSequence$());
}sprods[s].updatePDBIds$();
}
var al=Clazz.new_($I$(20,1).c$$jalview_datamodel_SequenceIA,[sprods]);
al.setDataset$jalview_datamodel_AlignmentI(dataset);
return al;
});

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame$jalview_datamodel_SequenceIA$Z$S',  function (af, seqs, fromDna, dbSource) {
;C$.$init$.apply(this);
this.alignFrame=af;
this.sel=seqs;
this._odna=fromDna;
this.source=dbSource;
}, 1);

Clazz.newMeth(C$, 'getHandlerFor$jalview_datamodel_SequenceIA$Z$S$jalview_gui_AlignFrame',  function (sel, fromDna, source, alignFrame) {
return Clazz.new_(C$.c$$jalview_gui_AlignFrame$jalview_datamodel_SequenceIA$Z$S,[alignFrame, sel, fromDna, source]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.ArrayList','jalview.datamodel.Mapping',['jalview.datamodel.AlignedCodonFrame','.SequenceToSequenceMapping'],'jalview.datamodel.SequenceI','jalview.util.MapList','jalview.util.MappingUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignedCodonFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SequenceToSequenceMapping',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mappings','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.mappings=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList',  function (dnaseq, aaseq, map) {
this.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S(dnaseq, aaseq, map, null);
});

Clazz.newMeth(C$, 'addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S',  function (dnaseq, aaseq, map, mapFromId) {
var fromSeq=(dnaseq.getDatasetSequence$() == null ) ? dnaseq : dnaseq.getDatasetSequence$();
var toSeq=(aaseq.getDatasetSequence$() == null ) ? aaseq : aaseq.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === fromSeq  && ssm.mapping.to === toSeq  ) {
ssm.mapping.map.addMapList$jalview_util_MapList(map);
return;
}}
var mp=Clazz.new_($I$(2,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[toSeq, map]);
mp.setMappedFromId$S(mapFromId);
this.mappings.add$O(Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_Mapping,[this, null, fromSeq, mp]));
});

Clazz.newMeth(C$, 'getdnaSeqs$',  function () {
var seqs=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
seqs.add$O(ssm.fromSeq);
}
return seqs.toArray$OA(Clazz.array($I$(4), [seqs.size$()]));
});

Clazz.newMeth(C$, 'getAaSeqs$',  function () {
var seqs=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
seqs.add$O(ssm.mapping.to);
}
return seqs.toArray$OA(Clazz.array($I$(4), [seqs.size$()]));
});

Clazz.newMeth(C$, 'getdnaToProt$',  function () {
var maps=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
maps.add$O(ssm.mapping.map);
}
return maps.toArray$OA(Clazz.array($I$(5), [maps.size$()]));
});

Clazz.newMeth(C$, 'getProtMappings$',  function () {
var maps=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
maps.add$O(ssm.mapping);
}
return maps.toArray$OA(Clazz.array($I$(2), [maps.size$()]));
});

Clazz.newMeth(C$, 'getMappingForSequence$jalview_datamodel_SequenceI',  function (seq) {
var seqDs=seq.getDatasetSequence$();
seqDs=seqDs != null  ? seqDs : seq;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seqDs  || ssm.mapping.to === seqDs  ) {
return ssm.mapping;
}}
return null;
});

Clazz.newMeth(C$, 'getAaForDnaSeq$jalview_datamodel_SequenceI',  function (dnaSeqRef) {
var dnads=dnaSeqRef.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === dnaSeqRef  || ssm.fromSeq === dnads  ) {
return ssm.mapping.to;
}}
return null;
});

Clazz.newMeth(C$, 'getDnaForAaSeq$jalview_datamodel_SequenceI',  function (aaSeqRef) {
var aads=aaSeqRef.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.mapping.to === aaSeqRef  || ssm.mapping.to === aads  ) {
return ssm.fromSeq;
}}
return null;
});

Clazz.newMeth(C$, 'involvesSequence$jalview_datamodel_SequenceI',  function (seq) {
return this.getAaForDnaSeq$jalview_datamodel_SequenceI(seq) != null  || this.getDnaForAaSeq$jalview_datamodel_SequenceI(seq) != null  ;
});

Clazz.newMeth(C$, 'markMappedRegion$jalview_datamodel_SequenceI$I$jalview_datamodel_SearchResultsI',  function (seq, index, results) {
var ds=seq.getDatasetSequence$();
if (ds == null ) {
ds=seq;
}for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.covers$jalview_datamodel_SequenceI$Z$Z(seq, true, true)) {
ssm.markMappedRegion$jalview_datamodel_SequenceI$I$jalview_datamodel_SearchResultsI(ds, index, results);
}}
});

Clazz.newMeth(C$, 'findAlignedSequence$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI',  function (seq, al) {
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seq  || ssm.fromSeq === seq.getDatasetSequence$()  ) {
for (var sourceAligned, $sourceAligned = al.getSequences$().iterator$(); $sourceAligned.hasNext$()&&((sourceAligned=($sourceAligned.next$())),1);) {
if (ssm.mapping.to === sourceAligned.getDatasetSequence$()  || ssm.mapping.to === sourceAligned  ) {
return sourceAligned;
}}
}}
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.mapping.to === seq  || ssm.mapping.to === seq.getDatasetSequence$()  ) {
for (var sourceAligned, $sourceAligned = al.getSequences$().iterator$(); $sourceAligned.hasNext$()&&((sourceAligned=($sourceAligned.next$())),1);) {
if (ssm.fromSeq === sourceAligned.getDatasetSequence$() ) {
return sourceAligned;
}}
}}
return null;
});

Clazz.newMeth(C$, 'getMappedRegion$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I',  function (target, query, queryPos) {
var targetDs=target.getDatasetSequence$() == null  ? target : target.getDatasetSequence$();
var queryDs=query.getDatasetSequence$() == null  ? query : query.getDatasetSequence$();
if (targetDs == null  || queryDs == null  ) {
return null;
}for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === targetDs  && ssm.mapping.to === queryDs  ) {
var codon=ssm.mapping.map.locateInFrom$I$I(queryPos, queryPos);
if (codon != null ) {
return codon;
}} else if (ssm.fromSeq === queryDs  && ssm.mapping.to === targetDs  ) {
var codon=ssm.mapping.map.locateInTo$I$I(queryPos, queryPos);
if (codon != null ) {
return codon;
}}}
return null;
});

Clazz.newMeth(C$, 'getMappedCodons$jalview_datamodel_SequenceI$I',  function (protein, aaPos) {
var ml=null;
var dnaSeq=null;
var result=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.mapping.to === protein  && ssm.mapping.getMap$().getFromRatio$() == 3 ) {
ml=ssm.mapping.map;
dnaSeq=ssm.fromSeq;
var codonPos=ml.locateInFrom$I$I(aaPos, aaPos);
if (codonPos == null ) {
return null;
}codonPos=$I$(6).flattenRanges$IA(codonPos);
var start=dnaSeq.getStart$();
var c1=dnaSeq.getCharAt$I(codonPos[0] - start);
var c2=dnaSeq.getCharAt$I(codonPos[1] - start);
var c3=dnaSeq.getCharAt$I(codonPos[2] - start);
result.add$O(Clazz.array(Character.TYPE, -1, [c1, c2, c3]));
}}
return result.isEmpty$() ? null : result;
});

Clazz.newMeth(C$, 'getMappingsFromSequence$jalview_datamodel_SequenceI',  function (seq) {
var result=Clazz.new_($I$(1,1));
var related=Clazz.new_($I$(1,1));
var seqDs=seq.getDatasetSequence$();
seqDs=seqDs != null  ? seqDs : seq;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
var mapping=ssm.mapping;
if (ssm.fromSeq === seqDs ) {
if (!related.contains$O(mapping.to)) {
result.add$O(mapping);
related.add$O(mapping.to);
}}}
return result;
});

Clazz.newMeth(C$, 'isRealisableWith$jalview_datamodel_SequenceI',  function (seq) {
return this.realiseWith$jalview_datamodel_SequenceI$Z(seq, false) > 0;
});

Clazz.newMeth(C$, 'realiseWith$jalview_datamodel_SequenceI',  function (seq) {
return this.realiseWith$jalview_datamodel_SequenceI$Z(seq, true);
});

Clazz.newMeth(C$, 'realiseWith$jalview_datamodel_SequenceI$Z',  function (seq, doUpdate) {
var ds=seq.getDatasetSequence$() != null  ? seq.getDatasetSequence$() : seq;
var count=0;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
var dna=ssm.fromSeq;
if (Clazz.instanceOf(dna, "jalview.datamodel.SequenceDummy") && dna.getName$().equals$O(ds.getName$()) ) {
var mapping=ssm.mapping;
var mapStart=mapping.getMap$().getFromLowest$();
var mapEnd=mapping.getMap$().getFromHighest$();
var mappable=C$.couldRealiseSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I(dna, ds, mapStart, mapEnd);
if (mappable) {
++count;
if (doUpdate) {
ds.setSequenceFeatures$java_util_List(dna.getSequenceFeatures$());
ssm.fromSeq=ds;
System.out.println$S("Realised mapped sequence " + ds.getName$());
}}}var mapping=ssm.mapping;
var prot=mapping.getTo$();
var mapStart=mapping.getMap$().getToLowest$();
var mapEnd=mapping.getMap$().getToHighest$();
var mappable=C$.couldRealiseSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I(prot, ds, mapStart, mapEnd);
if (mappable) {
++count;
if (doUpdate) {
ds.setSequenceFeatures$java_util_List(dna.getSequenceFeatures$());
ssm.mapping.setTo$jalview_datamodel_SequenceI(ds);
}}}
return count;
});

Clazz.newMeth(C$, 'couldRealiseSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I',  function (existing, replacement, mapStart, mapEnd) {
if (Clazz.instanceOf(existing, "jalview.datamodel.SequenceDummy") && !(Clazz.instanceOf(replacement, "jalview.datamodel.SequenceDummy")) && existing.getName$().equals$O(replacement.getName$())  ) {
var start=replacement.getStart$();
var end=replacement.getEnd$();
var mappingOverlapsSequence=(mapStart >= start && mapStart <= end ) || (mapEnd >= start && mapEnd <= end ) ;
if (mappingOverlapsSequence) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'updateToDataset$jalview_datamodel_SequenceI',  function (seq) {
if (seq == null  || seq.getDatasetSequence$() == null  ) {
return;
}var ds=seq.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seq ) {
ssm.fromSeq=ds;
}if (ssm.mapping.to === seq ) {
ssm.mapping.to=ds;
}}
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.mappings.isEmpty$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.mappings == null  ? "null" : this.mappings.toString();
});

Clazz.newMeth(C$, 'getMappingBetween$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (fromSeq, toSeq) {
var dssFrom=fromSeq.getDatasetSequence$() == null  ? fromSeq : fromSeq.getDatasetSequence$();
var dssTo=toSeq.getDatasetSequence$() == null  ? toSeq : toSeq.getDatasetSequence$();
for (var mapping, $mapping = this.mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var from=mapping.fromSeq;
var to=mapping.mapping.to;
if ((from === dssFrom  && to === dssTo  ) || (from === dssTo  && to === dssFrom  ) ) {
return mapping.mapping;
}}
return null;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.mappings.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.AlignedCodonFrame"))) {
return false;
}return this.mappings.equals$O((obj).mappings);
});

Clazz.newMeth(C$, 'getMappings$',  function () {
return this.mappings;
});

Clazz.newMeth(C$, 'getCoveringMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (seq1, seq2) {
for (var mapping, $mapping = this.mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
if (mapping.covers$jalview_datamodel_SequenceI(seq2) && mapping.covers$jalview_datamodel_SequenceI(seq1) ) {
return mapping;
}}
return null;
});

Clazz.newMeth(C$, 'getCoveringCodonMapping$jalview_datamodel_SequenceI',  function (seq) {
for (var mapping, $mapping = this.mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
if (mapping.getMapping$().getMap$().isTripletMap$() && mapping.covers$jalview_datamodel_SequenceI(seq) ) {
if (mapping.fromSeq === seq  && mapping.covers$jalview_datamodel_SequenceI(mapping.getMapping$().getTo$()) ) {
return mapping;
} else if (mapping.getMapping$().getTo$() === seq  && mapping.covers$jalview_datamodel_SequenceI(mapping.fromSeq) ) {
return mapping;
}}}
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlignedCodonFrame, "SequenceToSequenceMapping", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fromSeq','jalview.datamodel.SequenceI','mapping','jalview.datamodel.Mapping']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_Mapping',  function (from, map) {
;C$.$init$.apply(this);
this.fromSeq=from;
this.mapping=map;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return String.format$S$OA("From %s %s", Clazz.array(java.lang.Object, -1, [this.fromSeq.getName$(), this.mapping.toString()]));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.fromSeq == null  ? 0 : this.fromSeq.hashCode$() * 31) + this.mapping.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.AlignedCodonFrame.SequenceToSequenceMapping"))) {
return false;
}var that=obj;
if (this.mapping == null ) {
return that.mapping == null ;
}return (this.fromSeq === that.fromSeq  || (this.fromSeq != null  && that.fromSeq != null   && this.fromSeq.getDatasetSequence$() != null   && this.fromSeq.getDatasetSequence$() === that.fromSeq.getDatasetSequence$()  ) ) && this.mapping.equals$O(that.mapping) ;
});

Clazz.newMeth(C$, 'getFromSeq$',  function () {
return this.fromSeq;
});

Clazz.newMeth(C$, 'getMapping$',  function () {
return this.mapping;
});

Clazz.newMeth(C$, 'covers$jalview_datamodel_SequenceI',  function (seq) {
return this.covers$jalview_datamodel_SequenceI$Z$Z(seq, false, false);
});

Clazz.newMeth(C$, 'covers$jalview_datamodel_SequenceI$Z$Z',  function (seq, localCover, either) {
var mappedRanges=null;
var otherRanges=null;
var mapList=this.mapping.getMap$();
var mstart=seq.getStart$();
var mend=seq.getEnd$();
var ostart;
var oend;
;if (this.fromSeq === seq  || this.fromSeq === seq.getDatasetSequence$()  ) {
if (localCover && this.fromSeq !== seq  ) {
mstart=this.fromSeq.getStart$();
mend=this.fromSeq.getEnd$();
}mappedRanges=mapList.getFromRanges$();
otherRanges=mapList.getToRanges$();
ostart=this.mapping.to.getStart$();
oend=this.mapping.to.getEnd$();
} else if (this.mapping.to === seq  || this.mapping.to === seq.getDatasetSequence$()  ) {
if (localCover && this.mapping.to !== seq  ) {
mstart=this.mapping.to.getStart$();
mend=this.mapping.to.getEnd$();
}mappedRanges=mapList.getToRanges$();
otherRanges=mapList.getFromRanges$();
ostart=this.fromSeq.getStart$();
oend=this.fromSeq.getEnd$();
} else {
return false;
}var length=p$1.countRange$java_util_List$I$I.apply(this, [mappedRanges, mstart, mend]);
if (length != -1) {
if (length + 3 >= (mend - mstart + 1)) {
return true;
}}if (either) {
length=p$1.countRange$java_util_List$I$I.apply(this, [otherRanges, ostart, oend]);
if (length != -1) {
if (length + 1 >= (oend - ostart + 1)) {
return true;
}}}return false;
});

Clazz.newMeth(C$, 'countRange$java_util_List$I$I',  function (mappedRanges, mstart, mend) {
var length=0;
for (var range, $range = mappedRanges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var from=Math.min(range[0], range[1]);
var to=Math.max(range[0], range[1]);
if (from < mstart || to > mend ) {
return -1;
}length+=(to - from + 1);
}
return length;
}, p$1);

Clazz.newMeth(C$, 'markMappedRegion$jalview_datamodel_SequenceI$I$jalview_datamodel_SearchResultsI',  function (seq, pos, sr) {
var codon=null;
var mappedSeq=null;
var ds=seq.getDatasetSequence$();
if (ds == null ) {
ds=seq;
}if (this.fromSeq === seq  || this.fromSeq === ds  ) {
codon=this.mapping.map.locateInTo$I$I(pos, pos);
mappedSeq=this.mapping.to;
} else if (this.mapping.to === seq  || this.mapping.to === ds  ) {
codon=this.mapping.map.locateInFrom$I$I(pos, pos);
mappedSeq=this.fromSeq;
}if (codon != null ) {
for (var i=0; i < codon.length; i+=2) {
sr.addResult$jalview_datamodel_SequenceI$I$I(mappedSeq, codon[i], codon[i + 1]);
}
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "StructureCommandsI", function(){
});
C$.$classes$=[['AtomSpecType',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructureCommandsI, "AtomSpecType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "RESIDUE_ONLY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ALPHA", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PHOSPHATE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.structure"),p$1={},I$=[[0,'jalview.structure.AtomSpecModel','StringBuilder','java.util.ArrayList','jalview.structure.StructureCommand',['jalview.structure.StructureCommandsI','.AtomSpecType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureCommandsBase", null, null, 'jalview.structure.StructureCommandsI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getCommandSeparator$',  function () {
return ";";
});

Clazz.newMeth(C$, 'getModelStartNo$',  function () {
return 0;
});

Clazz.newMeth(C$, 'addAtomSpecRange$java_util_Map$O$S$I$I$S',  function (map, value, model, startPos, endPos, chain) {
var atomSpec=map.get$O(value);
if (atomSpec == null ) {
atomSpec=Clazz.new_($I$(1,1));
map.put$O$O(value, atomSpec);
}atomSpec.addRange$S$I$I$S(model, startPos, endPos, chain);
}, 1);

Clazz.newMeth(C$, 'makeAttributeName$S',  function (featureType) {
var sb=Clazz.new_($I$(2,1));
if (featureType != null ) {
for (var c, $c = 0, $$c = featureType.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
sb.append$C(Character.isLetterOrDigit$C(c) ? c : "_");
}
}var attName="jv_" + sb.toString();
return attName;
});

Clazz.newMeth(C$, 'colourBySequence$java_util_Map',  function (colourMap) {
var commands=Clazz.new_($I$(3,1));
var sb=Clazz.new_([colourMap.size$() * 20],$I$(2,1).c$$I);
var first=true;
for (var key, $key = colourMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var colour=key;
var colourData=colourMap.get$O(colour);
var command=this.getColourCommand$jalview_structure_AtomSpecModel$java_awt_Color(colourData, colour);
if (!first) {
sb.append$S(this.getCommandSeparator$());
}first=false;
sb.append$S(command.getCommand$());
}
commands.add$O(Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(4,1).c$$S$SA));
return commands;
});

Clazz.newMeth(C$, 'getColourCommand$jalview_structure_AtomSpecModel$java_awt_Color',  function (atomSpecModel, colour) {
var atomSpec=this.getAtomSpec$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(atomSpecModel, $I$(5).RESIDUE_ONLY);
return this.colourResidues$S$java_awt_Color(atomSpec, colour);
});

Clazz.newMeth(C$, 'colourByResidues$java_util_Map',  function (colours) {
var commands=Clazz.new_($I$(3,1));
for (var entry, $entry = colours.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
commands.add$O(p$1.colourResidue$S$java_awt_Color.apply(this, [entry.getKey$(), entry.getValue$()]));
}
return commands;
});

Clazz.newMeth(C$, 'colourResidue$S$java_awt_Color',  function (resName, col) {
var atomSpec=this.getResidueSpec$S(resName);
return this.colourResidues$S$java_awt_Color(atomSpec, col);
}, p$1);

Clazz.newMeth(C$, 'appendRange$StringBuilder$I$I$S$Z$Z',  function (sb, start, end, chain, firstPositionForModel, isChimeraX) {
if (!firstPositionForModel) {
sb.append$S(",");
}if (end == start) {
sb.append$I(start);
} else {
sb.append$I(start).append$S("-").append$I(end);
}if (!isChimeraX) {
sb.append$S(".");
if (!" ".equals$O(chain)) {
sb.append$S(chain);
}}});

Clazz.newMeth(C$, 'setAttributes$java_util_Map',  function (featureValues) {
return null;
});

Clazz.newMeth(C$, 'startNotifications$S',  function (uri) {
return null;
});

Clazz.newMeth(C$, 'stopNotifications$',  function () {
return null;
});

Clazz.newMeth(C$, 'getSelectedResidues$',  function () {
return null;
});

Clazz.newMeth(C$, 'listResidueAttributes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getResidueAttributes$S',  function (attName) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "StructureCommandI");
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[[0,'java.util.TreeMap','java.util.BitSet','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomSpecModel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['atomSpec','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.atomSpec=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addRange$S$I$I$S',  function (model, startPos, endPos, chain) {
var modelData=this.atomSpec.get$O(model);
if (modelData == null ) {
this.atomSpec.put$O$O(model, modelData=Clazz.new_($I$(1,1)));
}var chainData=modelData.get$O(chain);
if (chainData == null ) {
chainData=Clazz.new_($I$(2,1));
modelData.put$O$O(chain, chainData);
}chainData.set$I$I(startPos, endPos + 1);
});

Clazz.newMeth(C$, 'getModels$',  function () {
return this.atomSpec.keySet$();
});

Clazz.newMeth(C$, 'getModelCount$',  function () {
return this.atomSpec.size$();
});

Clazz.newMeth(C$, 'getChains$S',  function (model) {
return this.atomSpec.containsKey$O(model) ? this.atomSpec.get$O(model).keySet$() : null;
});

Clazz.newMeth(C$, 'getRanges$S$S',  function (model, chain) {
var ranges=Clazz.new_($I$(3,1));
if (this.atomSpec.containsKey$O(model)) {
var bs=this.atomSpec.get$O(model).get$O(chain);
var start=0;
if (bs != null ) {
start=bs.nextSetBit$I(start);
var end=0;
while (start != -1){
end=bs.nextClearBit$I(start);
ranges.add$O(Clazz.array(Integer.TYPE, -1, [start, end - 1]));
start=bs.nextSetBit$I(end);
}
}}return ranges;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[[0,'java.util.ArrayList','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureCommand", null, null, 'jalview.structure.StructureCommandI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['command'],'O',['parameters','java.util.List']]]

Clazz.newMeth(C$, 'c$$S$SA',  function (cmd, params) {
;C$.$init$.apply(this);
this.command=cmd;
if (params != null ) {
for (var p, $p = 0, $$p = params; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
this.addParameter$S(p);
}
}}, 1);

Clazz.newMeth(C$, 'addParameter$S',  function (param) {
if (this.parameters == null ) {
this.parameters=Clazz.new_($I$(1,1));
}this.parameters.add$O(param);
});

Clazz.newMeth(C$, 'getCommand$',  function () {
return this.command;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return this.parameters;
});

Clazz.newMeth(C$, 'hasParameters$',  function () {
return this.parameters != null  && !this.parameters.isEmpty$() ;
});

Clazz.newMeth(C$, 'toString',  function () {
if (!this.hasParameters$()) {
return this.command;
}var sb=Clazz.new_($I$(2,1).c$$I,[32]);
sb.append$S(this.command).append$S("(");
var first=true;
for (var p, $p = this.parameters.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (!first) {
sb.append$S(",");
}first=false;
sb.append$S(p);
}
sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=this.command.hashCode$();
if (this.parameters != null ) {
for (var p, $p = this.parameters.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
h=h * 37 + p.hashCode$();
}
}return h;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.structure.StructureCommand")) ) {
return false;
}var sc=obj;
if (!this.command.equals$O(sc.command)) {
return false;
}if (this.parameters == null  || sc.parameters == null  ) {
return (this.parameters == null ) && (sc.parameters == null ) ;
}var j=this.parameters.size$();
if (j != sc.parameters.size$()) {
return false;
}for (var i=0; i < j; i++) {
if (!this.parameters.get$I(i).equals$O(sc.parameters.get$I(i))) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ws.utils"),I$=[[0,'java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.net.URL','java.nio.channels.Channels','java.io.FileOutputStream','java.nio.file.Paths','java.nio.file.CopyOption','java.nio.file.StandardCopyOption','jalview.util.Platform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlDownloadClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'download$S$S',  function (urlstring, outfile) {
var fos=null;
var rbc=null;
var temp=null;
try {
temp=$I$(1,"createTempFile$S$S$java_nio_file_attribute_FileAttributeA",[".jalview_", ".tmp", Clazz.array($I$(2), -1, [])]);
var url=Clazz.new_($I$(3,1).c$$S,[urlstring]);
rbc=$I$(4,"newChannel$java_io_InputStream",[url.openStream$()]);
fos=Clazz.new_([temp.toString()],$I$(5,1).c$$S);
fos.getChannel$().transferFrom$java_nio_channels_ReadableByteChannel$J$J(rbc, 0, [16777215,549755813887,1]);
$I$(1,"copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA",[temp, $I$(6,"get$S$SA",[outfile, Clazz.array(String, -1, [])]), Clazz.array($I$(7), -1, [$I$(8).REPLACE_EXISTING])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw e;
} else {
throw e;
}
} finally {
try {
if (fos != null ) {
fos.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Exception while closing download file output stream: " + e.getMessage$());
} else {
throw e;
}
}
try {
if (rbc != null ) {
rbc.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Exception while closing download channel: " + e.getMessage$());
} else {
throw e;
}
}
try {
if (temp != null ) {
$I$(1).deleteIfExists$java_nio_file_Path(temp);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Exception while deleting download temp file: " + e.getMessage$());
} else {
throw e;
}
}
}
}, 1);

Clazz.newMeth(C$, 'download$S$java_io_File',  function (urlstring, tempFile) {
if (!$I$(9).setFileBytes$java_io_File$S(tempFile, urlstring)) {
C$.download$S$S(urlstring, tempFile.toString());
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'com.stevesoft.pat.Regex','java.io.File','jalview.ws.utils.UrlDownloadClient','jalview.util.MessageManager','jalview.io.FileFormat','jalview.io.FormatAdapter','jalview.io.DataSourceType','java.util.ArrayList','jalview.datamodel.DBRefEntry','jalview.datamodel.SequenceFeature','jalview.io.PDBFeatureSettings']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EBIAlfaFold", null, 'jalview.ws.dbsources.EbiFileRetrievedProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
var validator=Clazz.new_(["(AF-[A-Z]+[0-9]+[A-Z0-9]+-F1)"],$I$(1,1).c$$S);
validator.setIgnoreCase$Z(true);
return validator;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return "ALPHAFOLD";
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return "1";
});

Clazz.newMeth(C$, 'getAlphaFoldCifDownloadUrl$S',  function (id) {
return "https://alphafold.ebi.ac.uk/files/" + id + "-model_v1.cif" ;
}, 1);

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return this.getSequenceRecords$S$S(queries, null);
});

Clazz.newMeth(C$, 'getSequenceRecords$S$S',  function (queries, retrievalUrl) {
var pdbAlignment=null;
var chain=null;
var id=null;
if (queries.indexOf$S(":") > -1) {
chain=queries.substring$I(queries.indexOf$S(":") + 1);
id=queries.substring$I$I(0, queries.indexOf$S(":"));
} else {
id=queries;
}if (!this.isValidReference$S(id)) {
System.err.println$S("(AFClient) Ignoring invalid pdb query: '" + id + "'" );
this.stopQuery$();
return null;
}var alphaFoldCif=C$.getAlphaFoldCifDownloadUrl$S(id);
if (retrievalUrl != null ) {
alphaFoldCif=retrievalUrl;
}try {
var tmpFile=$I$(2).createTempFile$S$S(id, ".cif");
$I$(3).download$S$java_io_File(alphaFoldCif, tmpFile);
this.file=tmpFile.getAbsolutePath$();
if (this.file == null ) {
return null;
}pdbAlignment=C$.importDownloadedStructureFromUrl$S$java_io_File$S$S$S$S(alphaFoldCif, tmpFile, id, chain, this.getDbSource$(), this.getDbVersion$());
if (pdbAlignment == null  || pdbAlignment.getHeight$() < 1 ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(4,"formatMessage$S$SA",["exception.no_pdb_records_for_chain", Clazz.array(String, -1, [id, ((chain == null ) ? "\' \'" : chain)])])]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.stopQuery$();
throw (ex);
} else {
throw ex;
}
}
return pdbAlignment;
});

Clazz.newMeth(C$, 'importDownloadedStructureFromUrl$S$java_io_File$S$S$S$S',  function (alphaFoldCif, tmpFile, id, chain, dbSource, dbVersion) {
var file=tmpFile.getAbsolutePath$();
var fileFormat=$I$(5).MMCif;
var pdbAlignment=Clazz.new_($I$(6,1)).readFile$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI(tmpFile, $I$(7).FILE, fileFormat);
if (pdbAlignment != null ) {
var toremove=Clazz.new_($I$(8,1));
for (var pdbcs, $pdbcs = pdbAlignment.getSequences$().iterator$(); $pdbcs.hasNext$()&&((pdbcs=($pdbcs.next$())),1);) {
var chid=null;
for (var pid, $pid = pdbcs.getAllPDBEntries$().iterator$(); $pid.hasNext$()&&((pid=($pid.next$())),1);) {
if (pid.getFile$() == file) {
chid=pid.getChainCode$();
}}
if (chain == null  || (chid != null  && (chid.equals$O(chain) || chid.trim$().equals$O(chain.trim$()) || (chain.trim$().length$() == 0 && chid.equals$O("_") )  ) ) ) {
pdbcs.setName$S(id + "|" + pdbcs.getName$() );
if (dbSource != null ) {
var dbentry=Clazz.new_([dbSource, dbVersion, (chid == null  ? id : id + chid)],$I$(9,1).c$$S$S$S);
pdbcs.addDBRef$jalview_datamodel_DBRefEntry(dbentry);
var allsf=pdbcs.getFeatures$().getAllFeatures$SA(Clazz.array(String, -1, []));
var newsf=Clazz.new_($I$(8,1));
if (allsf != null  && allsf.size$() > 0 ) {
for (var f, $f = allsf.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (file.equals$O(f.getFeatureGroup$())) {
f=Clazz.new_($I$(10,1).c$$jalview_datamodel_SequenceFeature$S$I$I$S$F,[f, f.type, f.begin, f.end, id, f.score]);
}newsf.add$O(f);
}
pdbcs.setSequenceFeatures$java_util_List(newsf);
}}} else {
toremove.add$O(pdbcs);
}}
for (var pdbcs, $pdbcs = toremove.iterator$(); $pdbcs.hasNext$()&&((pdbcs=($pdbcs.next$())),1);) {
pdbAlignment.deleteSequence$jalview_datamodel_SequenceI(pdbcs);
if (pdbcs.getAnnotation$() != null ) {
for (var aa, $aa = 0, $$aa = pdbcs.getAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
pdbAlignment.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
}}
}return pdbAlignment;
}, 1);

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
var r=this.getAccessionValidator$();
return r.search$S(accession.trim$());
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "1QIP";
});

Clazz.newMeth(C$, 'getDbName$',  function () {
return "PDB";
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$',  function () {
return Clazz.new_($I$(11,1));
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),p$1={},I$=[[0,'com.stevesoft.pat.Regex','jalview.ws.ebi.EBIFetchClient','java.util.Locale','jalview.io.FileParse','jalview.io.DataSourceType','jalview.io.EmblFlatFile','jalview.datamodel.Alignment','jalview.bin.Console']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmblFlatfileSource", null, 'jalview.ws.dbsources.EbiFileRetrievedProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ACCESSION_REGEX','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return "0";
});

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
return C$.ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
if (accession == null  || accession.length$() < 2 ) {
return false;
}return this.getAccessionValidator$().search$S(accession);
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return null;
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getEmblSequenceRecords$S$S',  function (dbName, query) {
this.startQuery$();
var dbFetch=Clazz.new_($I$(2,1));
var reply;
try {
reply=dbFetch.fetchDataAsFile$S$S$S(dbName.toLowerCase$java_util_Locale($I$(3).ROOT) + ":" + query.trim$() , null, "gz");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.stopQuery$();
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,[String.format$S$OA("EBI EMBL retrieval failed for %s:%s", Clazz.array(java.lang.Object, -1, [dbName.toLowerCase$java_util_Locale($I$(3).ROOT), query.trim$()])), e]);
} else {
throw e;
}
}
return p$1.getEmblSequenceRecords$S$S$java_io_File.apply(this, [dbName, query, reply]);
});

Clazz.newMeth(C$, 'getEmblSequenceRecords$S$S$java_io_File',  function (dbName, query, reply) {
var al=null;
if (reply != null  && reply.exists$() ) {
this.file=reply.getAbsolutePath$();
var fp=Clazz.new_([this.file, $I$(5).FILE],$I$(4,1).c$$O$jalview_io_DataSourceType);
var emblParser=Clazz.new_([fp, this.getDbSource$()],$I$(6,1).c$$jalview_io_FileParse$S);
var seqs=emblParser.getSeqsAsArray$();
if (seqs.length > 0) {
al=Clazz.new_($I$(7,1).c$$jalview_datamodel_SequenceIA,[seqs]);
}if (al == null ) {
$I$(8).error$S("No record found for '" + dbName + ":" + query + "'" );
}}this.stopQuery$();
return al;
}, p$1);

Clazz.newMeth(C$, 'isDnaCoding$',  function () {
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.ACCESSION_REGEX=Clazz.new_($I$(1,1).c$$S,["^[A-Z]+[0-9]+"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'jalview.ws.SequenceFetcher']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceFetcherFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','jalview.ws.SequenceFetcher']]]

Clazz.newMeth(C$, 'getSequenceFetcher$',  function () {
return C$.instance == null  ? Clazz.new_($I$(1,1)) : C$.instance;
}, 1);

Clazz.newMeth(C$, 'setSequenceFetcher$jalview_ws_SequenceFetcher',  function (sf) {
C$.instance=sf;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:47 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("org.json.simple.parser"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParseException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['errorType','position'],'O',['unexpectedObject','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$I',  function (errorType) {
C$.c$$I$I$O.apply(this, [-1, errorType, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$O',  function (errorType, unexpectedObject) {
C$.c$$I$I$O.apply(this, [-1, errorType, unexpectedObject]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$O',  function (position, errorType, unexpectedObject) {
Clazz.super_(C$, this);
this.position=position;
this.errorType=errorType;
this.unexpectedObject=unexpectedObject;
}, 1);

Clazz.newMeth(C$, 'getErrorType$',  function () {
return this.errorType;
});

Clazz.newMeth(C$, 'setErrorType$I',  function (errorType) {
this.errorType=errorType;
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$I',  function (position) {
this.position=position;
});

Clazz.newMeth(C$, 'getUnexpectedObject$',  function () {
return this.unexpectedObject;
});

Clazz.newMeth(C$, 'setUnexpectedObject$O',  function (unexpectedObject) {
this.unexpectedObject=unexpectedObject;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
var sb=Clazz.new_($I$(1,1));
switch (this.errorType) {
case 0:
sb.append$S("Unexpected character (").append$O(this.unexpectedObject).append$S(") at position ").append$I(this.position).append$S(".");
break;
case 1:
sb.append$S("Unexpected token ").append$O(this.unexpectedObject).append$S(" at position ").append$I(this.position).append$S(".");
break;
case 2:
sb.append$S("Unexpected exception at position ").append$I(this.position).append$S(": ").append$O(this.unexpectedObject);
break;
default:
sb.append$S("Unkown error at position ").append$I(this.position).append$S(".");
break;
}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("swingjs.api"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "JSUtilI");
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Start", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['retIsStart']]]

Clazz.newMeth(C$, 'c$$Z',  function (b) {
Clazz.super_(C$, this);
this.retIsStart=b;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (this.retIsStart && pt.mFlag && pos > 0   && pt.src.charAt$I(pos - 1) == "\n" ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}if (pos == 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}return -1;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.retIsStart) {
return "^" + this.nextString$();
} else {
return "\\A" + this.nextString$();
}});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$Z,[this.retIsStart]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Boundary", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString',  function () {
return "\\b" + this.nextString$();
});

Clazz.newMeth(C$, 'isAChar$C',  function (c) {
if (c >= "a" && c <= "z" ) {
return true;
}if (c >= "A" && c <= "Z" ) {
return true;
}if (c >= "0" && c <= "9" ) {
return true;
}if (c == "_") {
return true;
}return false;
});

Clazz.newMeth(C$, 'matchLeft$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pos <= 0) {
return true;
}if (this.isAChar$C(pt.src.charAt$I(pos)) && this.isAChar$C(pt.src.charAt$I(pos - 1)) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'matchRight$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pos < 0) {
return false;
}if (pos + 1 >= pt.src.length$()) {
return true;
}if (this.isAChar$C(pt.src.charAt$I(pos)) && this.isAChar$C(pt.src.charAt$I(pos + 1)) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (this.matchRight$I$com_stevesoft_pat_Pthings(pos - 1, pt) || this.matchLeft$I$com_stevesoft_pat_Pthings(pos, pt) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}return -1;
});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2025-01-24 11:21:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
})(Clazz,Clazz.setTVer,Clazz.toLong,Clazz.incrAN,Clazz.array,Clazz.assert,Clazz.clone,Clazz.exceptionOf,Clazz.forName,Clazz.getClass,Clazz.instanceOf,Clazz.load,Clazz.new_,Clazz.newClass,Clazz.newEnumConst,Clazz.newInstance,Clazz.newInterface,Clazz.newMeth,Clazz.newPackage,Clazz.super_);
