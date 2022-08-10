(function(){var P$=Clazz.newPackage("org.stackoverflowusers.file"),p$1={},I$=[[0,'java.io.FileInputStream','java.util.Locale','java.io.ByteArrayOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WindowsShortcut");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isDirectory','isLocal'],'S',['real_file']]]

Clazz.newMeth(C$, 'isPotentialValidLink$java_io_File',  function (file) {
var minimum_length=100;
var fis=Clazz.new_($I$(1,1).c$$java_io_File,[file]);
var isPotentiallyValid=false;
try {
isPotentiallyValid=file.isFile$() && file.getName$().toLowerCase$java_util_Locale($I$(2).ROOT).endsWith$S(".lnk") && fis.available$() >= 100   && C$.isMagicPresent$BA(C$.getBytes$java_io_InputStream$Integer(fis, Integer.valueOf$I(32))) ;
} finally {
fis.close$();
}
return isPotentiallyValid;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
;C$.$init$.apply(this);
var $in=Clazz.new_($I$(1,1).c$$java_io_File,[file]);
try {
p$1.parseLink$BA.apply(this, [C$.getBytes$java_io_InputStream($in)]);
} finally {
$in.close$();
}
}, 1);

Clazz.newMeth(C$, 'getRealFilename$',  function () {
return this.real_file;
});

Clazz.newMeth(C$, 'isLocal$',  function () {
return this.isLocal;
});

Clazz.newMeth(C$, 'isDirectory$',  function () {
return this.isDirectory;
});

Clazz.newMeth(C$, 'getBytes$java_io_InputStream',  function ($in) {
return C$.getBytes$java_io_InputStream$Integer($in, null);
}, 1);

Clazz.newMeth(C$, 'getBytes$java_io_InputStream$Integer',  function ($in, max) {
var bout=Clazz.new_($I$(3,1));
var buff=Clazz.array(Byte.TYPE, [256]);
while (max == null  || (max).$c() > 0  ){
var n=$in.read$BA(buff);
if (n == -1) {
break;
}bout.write$BA$I$I(buff, 0, n);
if (max != null ) max=Integer.valueOf$I((max).valueOf()-(n));
}
$in.close$();
return bout.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'isMagicPresent$BA',  function (link) {
var magic=76;
var magic_offset=0;
return link.length >= 32 && C$.bytesToDword$BA$I(link, 0) == 76 ;
}, 1);

Clazz.newMeth(C$, 'parseLink$BA',  function (link) {
try {
if (!C$.isMagicPresent$BA(link)) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Invalid shortcut; magic is missing", 0]);
var flags=link[20];
var file_atts_offset=24;
var file_atts=link[24];
var is_dir_mask=16;
if ((file_atts & is_dir_mask) > 0) {
this.isDirectory=true;
} else {
this.isDirectory=false;
}var shell_offset=76;
var has_shell_mask=1;
var shell_len=0;
if ((flags & 1) > 0) {
shell_len=C$.bytesToWord$BA$I(link, 76) + 2;
}var file_start=76 + shell_len;
var file_location_info_flag_offset_offset=8;
var file_location_info_flag=link[file_start + 8];
this.isLocal=(file_location_info_flag & 2) == 0;
var basename_offset_offset=16;
var networkVolumeTable_offset_offset=20;
var finalname_offset_offset=24;
var finalname_offset=link[file_start + 24] + file_start;
var finalname=C$.getNullDelimitedString$BA$I(link, finalname_offset);
if (this.isLocal) {
var basename_offset=link[file_start + 16] + file_start;
var basename=C$.getNullDelimitedString$BA$I(link, basename_offset);
this.real_file=basename + finalname;
} else {
var networkVolumeTable_offset=link[file_start + 20] + file_start;
var shareName_offset_offset=8;
var shareName_offset=link[networkVolumeTable_offset + shareName_offset_offset] + networkVolumeTable_offset;
var shareName=C$.getNullDelimitedString$BA$I(link, shareName_offset);
this.real_file=shareName + "\\" + finalname ;
}} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Could not be parsed, probably not a valid WindowsShortcut", 0]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getNullDelimitedString$BA$I',  function (bytes, off) {
var len=0;
while (true){
if (bytes[off + len] == 0) {
break;
}++len;
}
return  String.instantialize(bytes, off, len);
}, 1);

Clazz.newMeth(C$, 'bytesToWord$BA$I',  function (bytes, off) {
return ((bytes[off + 1] & 255) << 8) | (bytes[off] & 255);
}, 1);

Clazz.newMeth(C$, 'bytesToDword$BA$I',  function (bytes, off) {
return (C$.bytesToWord$BA$I(bytes, off + 2) << 16) | C$.bytesToWord$BA$I(bytes, off);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
