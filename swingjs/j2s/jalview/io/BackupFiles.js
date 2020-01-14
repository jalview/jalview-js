(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.text.SimpleDateFormat','java.util.ArrayList','java.io.File','jalview.bin.Cache','jalview.util.Platform','jalview.io.BackupFilenameFilter','jalview.io.BackupFilenameParts','StringBuilder','jalview.util.MessageManager','jalview.gui.JvOptionPane','jalview.gui.Desktop','java.util.HashMap','java.util.TreeMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BackupFiles");
C$.enabled=false;
C$.confirmDelete=false;
C$.sdf=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sdf=Clazz.new_($I$(1).c$$S,["yyyy-MM-dd HH:mm:ss"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.file=null;
this.suffix=null;
this.noMax=false;
this.max=0;
this.digits=0;
this.reverseOrder=false;
this.tempFile=null;
this.tempFileWriteSuccess=false;
this.deleteFiles=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.deleteFiles=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (filename) {
C$.c$$java_io_File.apply(this, [Clazz.new_($I$(3).c$$S,[filename])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.c$$java_io_File$S$Z$I$I$Z.apply(this, [file, ".bak%n", false, 3, 3, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S$Z$I$I$Z', function (file, defaultSuffix, defaultNoMax, defaultMax, defaultDigits, defaultReverseOrder) {
C$.$init$.apply(this);
C$.classInit$();
this.file=file;
this.suffix=$I$(4).getDefault$S$S("BACKUPFILES_SUFFIX", defaultSuffix);
this.noMax=$I$(4).getDefault$S$Z("BACKUPFILES_NO_MAX", defaultNoMax);
this.max=$I$(4).getDefault$S$I("BACKUPFILES_ROLL_MAX", defaultMax);
this.digits=$I$(4).getDefault$S$I("BACKUPFILES_SUFFIX_DIGITS", defaultDigits);
this.reverseOrder=$I$(4).getDefault$S$Z("BACKUPFILES_REVERSE_ORDER", defaultReverseOrder);
var temp=null;
try {
if (file != null ) {
var tempfilename=file.getName$();
var tempdir=file.getParentFile$();
temp=$I$(3).createTempFile$S$S$java_io_File(tempfilename, ".tmp_newfile", tempdir);
} else {
temp=$I$(3).createTempFile$S$S("jalview_temp_file_BACKUPFILES", ".tmp");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
System.out.println$S("Could not create temp file to save into (IOException)");
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.out.println$S("Exception ctreating temp file for saving");
}
} else {
throw e$$;
}
}
this.setTempFile$java_io_File(temp);
}, 1);

Clazz.newMeth(C$, 'classInit$', function () {
C$.setEnabled$Z($I$(4).getDefault$S$Z("BACKUPFILES_ENABLED", !$I$(5).isJS$()));
C$.setConfirmDelete$Z($I$(4).getDefault$S$Z("BACKUPFILES_CONFIRM_DELETE_OLD", true));
}, 1);

Clazz.newMeth(C$, 'setEnabled$Z', function (flag) {
C$.enabled=flag;
}, 1);

Clazz.newMeth(C$, 'getEnabled$', function () {
C$.classInit$();
return C$.enabled;
}, 1);

Clazz.newMeth(C$, 'setConfirmDelete$Z', function (flag) {
C$.confirmDelete=flag;
}, 1);

Clazz.newMeth(C$, 'getConfirmDelete$', function () {
C$.classInit$();
return C$.confirmDelete;
}, 1);

Clazz.newMeth(C$, 'setTempFile$java_io_File', function (temp) {
this.tempFile=temp;
});

Clazz.newMeth(C$, 'getTempFile$', function () {
return this.tempFile;
});

Clazz.newMeth(C$, 'getTempFilePath$', function () {
var path=null;
try {
path=this.getTempFile$().getCanonicalPath$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("IOException when getting Canonical Path of temp file '" + this.getTempFile$().getName$() + "'" );
} else {
throw e;
}
}
return path;
});

Clazz.newMeth(C$, 'setWriteSuccess$Z', function (flag) {
var old=this.tempFileWriteSuccess;
this.tempFileWriteSuccess=flag;
return old;
});

Clazz.newMeth(C$, 'getWriteSuccess$', function () {
return this.tempFileWriteSuccess;
});

Clazz.newMeth(C$, 'renameTempFile$', function () {
return this.tempFile.renameTo$java_io_File(this.file);
});

Clazz.newMeth(C$, 'rollBackupFiles$', function () {
return this.rollBackupFiles$Z(true);
});

Clazz.newMeth(C$, 'rollBackupFiles$Z', function (tidyUp) {
if ((!this.file.exists$()) || (!C$.enabled) || this.max < 0   || this.suffix == null   || this.suffix.length$() == 0 ) {
return true;
}var dir="";
var dirFile;
try {
dirFile=this.file.getParentFile$();
dir=dirFile.getCanonicalPath$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Could not get canonical path for file '" + this.file + "'" );
return false;
} else {
throw e;
}
}
var filename=this.file.getName$();
var basename=filename;
var ret=true;
this.deleteFiles.clear$();
var bff=Clazz.new_($I$(6).c$$S$S$I,[basename, this.suffix, this.digits]);
var backupFiles=dirFile.listFiles$java_io_FilenameFilter(bff);
var nextIndexNum=0;
if (backupFiles.length == 0) {
nextIndexNum=1;
} else {
var bfTreeMap=p$1.sortBackupFilesAsTreeMap$java_io_FileA$S.apply(this, [backupFiles, basename]);
if (this.reverseOrder) {
var tempMax=this.noMax ? -1 : this.max;
for (var i=1; tempMax < 0 || i <= this.max ; i++) {
if (!bfTreeMap.containsKey$O(new Integer(i))) {
tempMax=i;
}}
var previousFile=null;
var fileToBeDeleted=null;
for (var n=tempMax; n > 0; n--) {
var backupfilename=dir + $I$(3).separatorChar + $I$(7).getBackupFilename$I$S$S$I(n, basename, this.suffix, this.digits) ;
var backupfile_n=Clazz.new_($I$(3).c$$S,[backupfilename]);
if (!backupfile_n.exists$()) {
previousFile=backupfile_n;
fileToBeDeleted=null;
continue;
}if (fileToBeDeleted != null ) {
var replacementFile=backupfile_n;
var fileToBeDeletedLMT=fileToBeDeleted.lastModified$();
var replacementFileLMT=replacementFile.lastModified$();
try {
var oldestTempFile=C$.nextTempFile$S$java_io_File(fileToBeDeleted.getName$(), dirFile);
if (fileToBeDeletedLMT > replacementFileLMT) {
var fileToBeDeletedLMTString=C$.sdf.format$O(new Long(fileToBeDeletedLMT));
var replacementFileLMTString=C$.sdf.format$O(new Long(replacementFileLMT));
System.out.println$S("WARNING! I am set to delete backupfile " + fileToBeDeleted.getName$() + " has modification time " + fileToBeDeletedLMTString + " which is newer than its replacement " + replacementFile.getName$() + " with modification time " + replacementFileLMTString );
var $delete=C$.confirmNewerDeleteFile$java_io_File$java_io_File$Z(fileToBeDeleted, replacementFile, true);
if ($delete) {
fileToBeDeleted.delete$();
} else {
fileToBeDeleted.renameTo$java_io_File(oldestTempFile);
}} else {
fileToBeDeleted.renameTo$java_io_File(oldestTempFile);
p$1.addDeleteFile$java_io_File.apply(this, [oldestTempFile]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error occurred, probably making new temp file for '" + fileToBeDeleted.getName$() + "'" );
e.printStackTrace$();
} else {
throw e;
}
}
fileToBeDeleted=null;
}if (!this.noMax && n == tempMax  && backupfile_n.exists$() ) {
fileToBeDeleted=backupfile_n;
} else {
if (previousFile != null ) {
ret=ret && backupfile_n.renameTo$java_io_File(previousFile) ;
}}previousFile=backupfile_n;
}
nextIndexNum=1;
} else {
bfTreeMap.values$().toArray$TTA(backupFiles);
if ((!this.noMax) && bfTreeMap.size$() >= this.max ) {
var numToDelete=bfTreeMap.size$() - this.max + 1;
var replacementFile=numToDelete < backupFiles.length ? backupFiles[numToDelete] : null;
for (var i=0; i < numToDelete; i++) {
var fileToBeDeleted=backupFiles[i];
var $delete=true;
var newer=false;
if (replacementFile != null ) {
var fileToBeDeletedLMT=fileToBeDeleted.lastModified$();
var replacementFileLMT=replacementFile != null  ? replacementFile.lastModified$() : 9223372036854775807;
if (fileToBeDeletedLMT > replacementFileLMT) {
var fileToBeDeletedLMTString=C$.sdf.format$O(new Long(fileToBeDeletedLMT));
var replacementFileLMTString=C$.sdf.format$O(new Long(replacementFileLMT));
System.out.println$S("WARNING! I am set to delete backupfile '" + fileToBeDeleted.getName$() + "' has modification time " + fileToBeDeletedLMTString + " which is newer than the oldest backupfile being kept '" + replacementFile.getName$() + "' with modification time " + replacementFileLMTString );
$delete=C$.confirmNewerDeleteFile$java_io_File$java_io_File$Z(fileToBeDeleted, replacementFile, false);
if ($delete) {
fileToBeDeleted.delete$();
$delete=false;
} else {
}}}if ($delete) {
p$1.addDeleteFile$java_io_File.apply(this, [fileToBeDeleted]);
}}
}nextIndexNum=(bfTreeMap.lastKey$()).intValue$() + 1;
}}var latestBackupFilename=dir + $I$(3).separatorChar + $I$(7).getBackupFilename$I$S$S$I(nextIndexNum, basename, this.suffix, this.digits) ;
ret|=this.file.renameTo$java_io_File(Clazz.new_($I$(3).c$$S,[latestBackupFilename]));
if (tidyUp) {
p$1.tidyUpFiles.apply(this, []);
}return ret;
});

Clazz.newMeth(C$, 'nextTempFile$S$java_io_File', function (filename, dirFile) {
var temp=null;
 COUNT : for (var i=1; i < 1000; i++) {
var trythis=Clazz.new_($I$(3).c$$java_io_File$S,[dirFile, filename + '~' + Integer.toString$I(i) ]);
if (!trythis.exists$()) {
temp=trythis;
break COUNT;
}}
if (temp == null ) {
temp=$I$(3).createTempFile$S$S$java_io_File(filename, ".tmp", dirFile);
}return temp;
}, 1);

Clazz.newMeth(C$, 'tidyUpFiles', function () {
p$1.deleteOldFiles.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'confirmNewerDeleteFile$java_io_File$java_io_File$Z', function (fileToBeDeleted, replacementFile, replace) {
var messageSB=Clazz.new_($I$(8));
var ftbd=fileToBeDeleted;
var ftbdLMT=C$.sdf.format$O(new Long(ftbd.lastModified$()));
var ftbdSize=Long.toString$J(ftbd.length$());
var rf=replacementFile;
var rfLMT=C$.sdf.format$O(new Long(rf.lastModified$()));
var rfSize=Long.toString$J(rf.length$());
var confirmButton=1;
if (replace) {
var saveFile=null;
try {
saveFile=C$.nextTempFile$S$java_io_File(ftbd.getName$(), ftbd.getParentFile$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error when confirming to keep backup file newer than other backup files.");
e.printStackTrace$();
} else {
throw e;
}
}
messageSB.append$S($I$(9).formatMessage$S$SA("label.newerdelete_replacement_line", Clazz.array(String, -1, [ftbd.getName$(), rf.getName$(), ftbdLMT, rfLMT, ftbdSize, rfSize])));
messageSB.append$S("\n\n");
messageSB.append$S($I$(9).formatMessage$S$SA("label.confirm_deletion_or_rename", Clazz.array(String, -1, [ftbd.getName$(), saveFile.getName$()])));
var options=Clazz.array(String, -1, [$I$(9).getString$S("label.delete"), $I$(9).getString$S("label.rename")]);
confirmButton=$I$(10).showOptionDialog$java_awt_Component$S$S$I$I$javax_swing_Icon$OA$O($I$(11).desktop, messageSB.toString(), $I$(9).getString$S("label.backupfiles_confirm_delete"), 0, 2, null, options, options[0]);
} else {
messageSB.append$S($I$(9).formatMessage$S$SA("label.newerdelete_line", Clazz.array(String, -1, [ftbd.getName$(), rf.getName$(), ftbdLMT, rfLMT, ftbdSize, rfSize])));
messageSB.append$S("\n\n");
messageSB.append$S($I$(9).formatMessage$S$SA("label.confirm_deletion", Clazz.array(String, -1, [ftbd.getName$()])));
var options=Clazz.array(String, -1, [$I$(9).getString$S("label.delete"), $I$(9).getString$S("label.keep")]);
confirmButton=$I$(10).showOptionDialog$java_awt_Component$S$S$I$I$javax_swing_Icon$OA$O($I$(11).desktop, messageSB.toString(), $I$(9).getString$S("label.backupfiles_confirm_delete"), 0, 2, null, options, options[0]);
}return (confirmButton == 0);
}, 1);

Clazz.newMeth(C$, 'deleteOldFiles', function () {
if (this.deleteFiles != null  && !this.deleteFiles.isEmpty$() ) {
var doDelete=false;
var messageSB=null;
if (C$.confirmDelete && this.deleteFiles.size$() > 0 ) {
messageSB=Clazz.new_($I$(8));
messageSB.append$S($I$(9).getString$S("label.backupfiles_confirm_delete_old_files"));
for (var i=0; i < this.deleteFiles.size$(); i++) {
var df=this.deleteFiles.get$I(i);
messageSB.append$S("\n");
messageSB.append$S(df.getName$());
messageSB.append$S(" ");
messageSB.append$S($I$(9).formatMessage$S$SA("label.file_info", Clazz.array(String, -1, [C$.sdf.format$O(new Long(df.lastModified$())), Long.toString$J(df.length$())])));
}
var confirmButton=$I$(10).showConfirmDialog$java_awt_Component$O$S$I$I($I$(11).desktop, messageSB.toString(), $I$(9).getString$S("label.backupfiles_confirm_delete"), 0, 2);
doDelete=(confirmButton == 0);
} else {
doDelete=true;
}if (doDelete) {
for (var i=0; i < this.deleteFiles.size$(); i++) {
var fileToDelete=this.deleteFiles.get$I(i);
fileToDelete.delete$();
System.out.println$S("DELETING '" + fileToDelete.getName$() + "'" );
}
}}this.deleteFiles.clear$();
}, p$1);

Clazz.newMeth(C$, 'sortBackupFilesAsTreeMap$java_io_FileA$S', function (backupFiles, basename) {
var bfHashMap=Clazz.new_($I$(12));
for (var i=0; i < backupFiles.length; i++) {
var f=backupFiles[i];
var bfp=Clazz.new_($I$(7).c$$java_io_File$S$S$I,[f, basename, this.suffix, this.digits]);
bfHashMap.put$TK$TV(new Integer(bfp.indexNum$()), f);
}
var bfTreeMap=Clazz.new_($I$(13));
bfTreeMap.putAll$java_util_Map(bfHashMap);
return bfTreeMap;
}, p$1);

Clazz.newMeth(C$, 'rollBackupsAndRenameTempFile$', function () {
var write=this.getWriteSuccess$();
var roll=false;
var rename=false;
if (write) {
roll=this.rollBackupFiles$Z(false);
rename=this.renameTempFile$();
}var okay=roll && rename ;
if (!okay) {
var messageSB=Clazz.new_($I$(8));
messageSB.append$S($I$(9).getString$S("label.backupfiles_confirm_save_file_backupfiles_roll_wrong"));
if (rename) {
if (messageSB.length$() > 0) {
messageSB.append$S("\n");
}messageSB.append$S($I$(9).getString$S("label.backupfiles_confirm_save_new_saved_file_ok"));
} else {
if (messageSB.length$() > 0) {
messageSB.append$S("\n");
}messageSB.append$S($I$(9).getString$S("label.backupfiles_confirm_save_new_saved_file_not_ok"));
}var confirmButton=$I$(10).showConfirmDialog$java_awt_Component$O$S$I$I($I$(11).desktop, messageSB.toString(), $I$(9).getString$S("label.backupfiles_confirm_save_file"), 0, 2);
okay=confirmButton == 0;
}if (okay) {
p$1.tidyUpFiles.apply(this, []);
}return rename;
});

Clazz.newMeth(C$, 'getBackupFilesAsTreeMap$S$S$I', function (fileName, suffix, digits) {
var backupFiles=null;
var file=Clazz.new_($I$(3).c$$S,[fileName]);
var dirFile;
try {
dirFile=file.getParentFile$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Could not get canonical path for file '" + file + "'" );
return Clazz.new_($I$(13));
} else {
throw e;
}
}
var filename=file.getName$();
var basename=filename;
var bff=Clazz.new_($I$(6).c$$S$S$I,[basename, suffix, digits]);
backupFiles=dirFile.listFiles$java_io_FilenameFilter(bff);
var bfHashMap=Clazz.new_($I$(12));
for (var i=0; i < backupFiles.length; i++) {
var f=backupFiles[i];
var bfp=Clazz.new_($I$(7).c$$java_io_File$S$S$I,[f, basename, suffix, digits]);
bfHashMap.put$TK$TV(new Integer(bfp.indexNum$()), f);
}
var bfTreeMap=Clazz.new_($I$(13));
bfTreeMap.putAll$java_util_Map(bfHashMap);
return bfTreeMap;
}, 1);

Clazz.newMeth(C$, 'addDeleteFile$java_io_File', function (fileToBeDeleted) {
var ret=false;
var pos=this.deleteFiles.indexOf$O(fileToBeDeleted);
if (pos > -1) {
return true;
} else {
this.deleteFiles.add$TE(fileToBeDeleted);
}return ret;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
