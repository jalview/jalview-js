(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.util.HashMap','jalview.io.FileFormats','java.util.Locale','jalview.io.BackupFilenameParts','jalview.util.MessageManager','javax.swing.ImageIcon']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewFileView", null, 'javax.swing.filechooser.FileView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['extensions','java.util.Map','+icons']]]

Clazz.newMeth(C$, 'loadExtensions',  function () {
C$.extensions=Clazz.new_($I$(1,1));
for (var ff, $ff = $I$(2).getInstance$().getFormats$().iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var desc=ff.getName$() + " file";
var exts=ff.getExtensions$();
for (var ext, $ext = 0, $$ext = exts.split$S(","); $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
ext=ext.trim$().toLowerCase$java_util_Locale($I$(3).ROOT);
C$.extensions.put$O$O(ext, desc + ("jar".equals$O(ext) ? " (old)" : ""));
}
}
}, p$1);

Clazz.newMeth(C$, 'getTypeDescription$java_io_File',  function (f) {
var extension=C$.getExtension$java_io_File(f);
var type=p$1.getDescriptionForExtension$S.apply(this, [extension]);
if (extension != null ) {
if (C$.extensions.containsKey$O(extension)) {
type=C$.extensions.get$O(extension).toString();
}}return type;
});

Clazz.newMeth(C$, 'getDescriptionForExtension$S',  function (extension) {
{
if (C$.extensions == null ) {
p$1.loadExtensions.apply(this, []);
}}return C$.extensions.get$O(extension);
}, p$1);

Clazz.newMeth(C$, 'getIcon$java_io_File',  function (f) {
var extension=C$.getExtension$java_io_File(f);
var icon=null;
var type=p$1.getDescriptionForExtension$S.apply(this, [extension]);
if (type == null ) {
var it=C$.extensions.keySet$().iterator$();
 EXTENSION : while (it.hasNext$()){
var ext=it.next$();
if (!f.getName$().contains$CharSequence(ext)) {
continue EXTENSION;
}var bfp=$I$(4,"currentBackupFilenameParts$S$S$Z",[f.getName$(), ext, true]);
if (bfp.isBackupFile$()) {
extension=ext;
type=p$1.getDescriptionForExtension$S.apply(this, [extension]) + $I$(5).getString$S("label.backup");
break;
}}
}if (type != null ) {
icon=this.getImageIcon$S("/images/file.png");
}return icon;
});

Clazz.newMeth(C$, 'getExtension$java_io_File',  function (f) {
var ext=null;
var s=f.getName$();
var i=s.lastIndexOf$I(".");
if ((i > 0) && (i < (s.length$() - 1)) ) {
ext=s.substring$I(i + 1).toLowerCase$java_util_Locale($I$(3).ROOT);
}return ext;
}, 1);

Clazz.newMeth(C$, 'getImageIcon$S',  function (filePath) {
{
if (C$.icons == null ) {
C$.icons=Clazz.new_($I$(1,1));
}if (!C$.icons.containsKey$O(filePath)) {
var icon=null;
var imgURL=Clazz.getClass(C$).getResource$S(filePath);
if (imgURL != null ) {
icon=Clazz.new_($I$(6,1).c$$java_net_URL,[imgURL]);
} else {
System.err.println$S("JalviewFileView.createImageIcon: Couldn't find file: " + filePath);
}C$.icons.put$O$O(filePath, icon);
}}return C$.icons.get$O(filePath);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
