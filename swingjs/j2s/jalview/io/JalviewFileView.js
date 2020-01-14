(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.util.HashMap','jalview.io.FileFormats','jalview.io.BackupFilenameParts','jalview.util.MessageManager','javax.swing.ImageIcon']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewFileView", null, 'javax.swing.filechooser.FileView');
C$.extensions=null;
C$.icons=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'loadExtensions', function () {
C$.extensions=Clazz.new_($I$(1));
for (var ff, $ff = $I$(2).getInstance$().getFormats$().iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var desc=ff.getName$() + " file";
var exts=ff.getExtensions$();
for (var ext, $ext = 0, $$ext = exts.split$S(","); $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
ext=ext.trim$().toLowerCase$();
C$.extensions.put$TK$TV(ext, desc + ("jar".equals$O(ext) ? " (old)" : ""));
}
}
}, p$1);

Clazz.newMeth(C$, 'getTypeDescription$java_io_File', function (f) {
var extension=C$.getExtension$java_io_File(f);
var type=p$1.getDescriptionForExtension$S.apply(this, [extension]);
if (extension != null ) {
if (C$.extensions.containsKey$O(extension)) {
type=C$.extensions.get$O(extension).toString();
}}return type;
});

Clazz.newMeth(C$, 'getDescriptionForExtension$S', function (extension) {
{
if (C$.extensions == null ) {
p$1.loadExtensions.apply(this, []);
}}return C$.extensions.get$O(extension);
}, p$1);

Clazz.newMeth(C$, 'getIcon$java_io_File', function (f) {
var extension=C$.getExtension$java_io_File(f);
var icon=null;
var type=p$1.getDescriptionForExtension$S.apply(this, [extension]);
if (type == null ) {
var it=C$.extensions.keySet$().iterator$();
 EXTENSION : while (it.hasNext$()){
var ext=it.next$();
if (!f.getName$().contains$CharSequence(ext)) {
continue EXTENSION;
}var bfp=$I$(3).currentBackupFilenameParts$S$S$Z(f.getName$(), ext, true);
if (bfp.isBackupFile$()) {
extension=ext;
type=p$1.getDescriptionForExtension$S.apply(this, [extension]) + $I$(4).getString$S("label.backup");
break;
}}
}if (type != null ) {
icon=this.getImageIcon$S("/images/file.png");
}return icon;
});

Clazz.newMeth(C$, 'getExtension$java_io_File', function (f) {
var ext=null;
var s=f.getName$();
var i=s.lastIndexOf$I(".");
if ((i > 0) && (i < (s.length$() - 1)) ) {
ext=s.substring$I(i + 1).toLowerCase$();
}return ext;
}, 1);

Clazz.newMeth(C$, 'getImageIcon$S', function (filePath) {
{
if (C$.icons == null ) {
C$.icons=Clazz.new_($I$(1));
}if (!C$.icons.containsKey$O(filePath)) {
var icon=null;
var imgURL=Clazz.getClass(C$).getResource$S(filePath);
if (imgURL != null ) {
icon=Clazz.new_($I$(5).c$$java_net_URL,[imgURL]);
} else {
System.err.println$S("JalviewFileView.createImageIcon: Couldn't find file: " + filePath);
}C$.icons.put$TK$TV(filePath, icon);
}}return C$.icons.get$O(filePath);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
