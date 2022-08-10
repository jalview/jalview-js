(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.text.SimpleDateFormat','java.util.ArrayList','java.io.File','jalview.io.BackupFilesPresetEntry','jalview.bin.Console','jalview.bin.Cache','jalview.util.Platform','jalview.io.BackupFilenameFilter','jalview.io.BackupFilenameParts','StringBuilder','jalview.util.MessageManager','jalview.gui.JvOptionPane','jalview.gui.Desktop','java.util.HashMap','java.util.TreeMap','java.nio.file.Paths','java.nio.file.Files','java.nio.file.CopyOption','java.nio.file.StandardCopyOption']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BackupFiles");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.deleteFiles=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['noMax','reverseOrder','tempFileWriteSuccess'],'I',['max','digits'],'S',['suffix'],'O',['file','java.io.File','+tempFile','deleteFiles','java.util.ArrayList']]
,['Z',['enabled','confirmDelete'],'O',['sdf','java.text.SimpleDateFormat']]]

Clazz.newMeth(C$, 'c$$S',  function (filename) {
C$.c$$java_io_File.apply(this, [Clazz.new_($I$(3,1).c$$S,[filename])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
;C$.$init$.apply(this);
C$.classInit$();
this.file=file;
var bfpe=$I$(4).getSavedBackupEntry$();
this.suffix=bfpe.suffix;
this.noMax=bfpe.keepAll;
this.max=bfpe.rollMax;
this.digits=bfpe.digits;
this.reverseOrder=bfpe.reverse;
var temp=null;
try {
if (file != null ) {
var tempfilename=file.getName$();
var tempdir=file.getParentFile$();
$I$(5,"trace$S",["BACKUPFILES [file!=null] attempting to create temp file for " + tempfilename + " in dir " + tempdir ]);
temp=$I$(3).createTempFile$S$S$java_io_File(tempfilename, ".tmp_newfile", tempdir);
$I$(5,"debug$S",["BACKUPFILES using temp file " + temp.getAbsolutePath$()]);
} else {
$I$(5,"trace$S",["BACKUPFILES [file==null] attempting to create default temp file jalview_temp_file_BACKUPFILES with extension .tmp"]);
temp=$I$(3).createTempFile$S$S("jalview_temp_file_BACKUPFILES", ".tmp");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
$I$(5,"error$S",["Could not create temp file to save to (IOException)"]);
$I$(5,"error$S",[e.getMessage$()]);
$I$(5,"debug$S",[$I$(6).getStackTraceString$Throwable(e)]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(5).error$S("Exception creating temp file for saving");
$I$(5,"debug$S",[$I$(6).getStackTraceString$Throwable(e)]);
}
} else {
throw e$$;
}
}
this.setTempFile$java_io_File(temp);
}, 1);

Clazz.newMeth(C$, 'classInit$',  function () {
$I$(5).initLogger$();
$I$(5).trace$S("BACKUPFILES classInit");
var e=$I$(6,"getDefault$S$Z",["BACKUPFILES_ENABLED", !$I$(7).isJS$()]);
C$.setEnabled$Z(e);
$I$(5,"trace$S",["BACKUPFILES " + (e ? "enabled" : "disabled")]);
var bfpe=$I$(4).getSavedBackupEntry$();
$I$(5,"trace$S",["BACKUPFILES preset scheme " + bfpe.toString()]);
C$.setConfirmDelete$Z(bfpe.confirmDelete);
$I$(5).trace$S("BACKUPFILES confirm delete " + bfpe.confirmDelete);
}, 1);

Clazz.newMeth(C$, 'setEnabled$Z',  function (flag) {
C$.enabled=flag;
}, 1);

Clazz.newMeth(C$, 'getEnabled$',  function () {
C$.classInit$();
return C$.enabled;
}, 1);

Clazz.newMeth(C$, 'setConfirmDelete$Z',  function (flag) {
C$.confirmDelete=flag;
}, 1);

Clazz.newMeth(C$, 'getConfirmDelete$',  function () {
C$.classInit$();
return C$.confirmDelete;
}, 1);

Clazz.newMeth(C$, 'setTempFile$java_io_File',  function (temp) {
this.tempFile=temp;
});

Clazz.newMeth(C$, 'getTempFile$',  function () {
return this.tempFile;
});

Clazz.newMeth(C$, 'getTempFilePath$',  function () {
var path=null;
try {
path=this.getTempFile$().getCanonicalPath$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(5,"error$S",["IOException when getting Canonical Path of temp file '" + this.getTempFile$().getName$() + "'" ]);
$I$(5,"debug$S",[$I$(6).getStackTraceString$Throwable(e)]);
} else {
throw e;
}
}
return path;
});

Clazz.newMeth(C$, 'setWriteSuccess$Z',  function (flag) {
var old=this.tempFileWriteSuccess;
this.tempFileWriteSuccess=flag;
return old;
});

Clazz.newMeth(C$, 'getWriteSuccess$',  function () {
return this.tempFileWriteSuccess;
});

Clazz.newMeth(C$, 'renameTempFile$',  function () {
return C$.moveFileToFile$java_io_File$java_io_File(this.tempFile, this.file);
});

Clazz.newMeth(C$, 'rollBackupFiles$',  function () {
return this.rollBackupFiles$Z(true);
});

Clazz.newMeth(C$, 'rollBackupFiles$Z',  function (tidyUp) {
if ((!this.file.exists$()) || (!C$.enabled) || this.max < 0   || this.suffix == null   || this.suffix.length$() == 0 ) {
$I$(5,"debug$S",["BACKUPFILES rollBackupFiles nothing to do., filename: " + (this.file != null  ? this.file.getName$() : "null") + ", " + "file exists: " + this.file.exists$() + ", " + "enabled: " + C$.enabled + ", " + "max: " + this.max + ", " + "suffix: '" + this.suffix + "'" ]);
return true;
}$I$(5).trace$S("BACKUPFILES rollBackupFiles starting");
var dir="";
var dirFile;
try {
dirFile=this.file.getParentFile$();
dir=dirFile.getCanonicalPath$();
$I$(5).trace$S("BACKUPFILES dir: " + dir);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("Could not get canonical path for file '" + this.file + "'" );
$I$(5,"error$S",[e.getMessage$()]);
$I$(5,"debug$S",[$I$(6).getStackTraceString$Throwable(e)]);
return false;
} else {
throw e;
}
}
var filename=this.file.getName$();
var basename=filename;
$I$(5).trace$S("BACKUPFILES filename is " + filename);
var ret=true;
this.deleteFiles.clear$();
var bff=Clazz.new_($I$(8,1).c$$S$S$I,[basename, this.suffix, this.digits]);
var backupFiles=dirFile.listFiles$java_io_FilenameFilter(bff);
var nextIndexNum=0;
$I$(5).trace$S("BACKUPFILES backupFiles.length: " + backupFiles.length);
if (backupFiles.length == 0) {
$I$(5).trace$S("BACKUPFILES no existing backup files, setting index to 1");
nextIndexNum=1;
} else {
var bfTreeMap=p$1.sortBackupFilesAsTreeMap$java_io_FileA$S.apply(this, [backupFiles, basename]);
if (this.reverseOrder) {
$I$(5).trace$S("BACKUPFILES rolling files in reverse order");
var tempMax=this.noMax ? -1 : this.max;
for (var i=1; tempMax < 0 || i <= this.max ; i++) {
if (!bfTreeMap.containsKey$O(Integer.valueOf$I(i))) {
tempMax=i;
}}
var previousFile=null;
var fileToBeDeleted=null;
for (var n=tempMax; n > 0; n--) {
var backupfilename=dir + $I$(3).separatorChar + $I$(9).getBackupFilename$I$S$S$I(n, basename, this.suffix, this.digits) ;
var backupfile_n=Clazz.new_($I$(3,1).c$$S,[backupfilename]);
if (!backupfile_n.exists$()) {
previousFile=backupfile_n;
fileToBeDeleted=null;
$I$(5).trace$S("BACKUPFILES No oldest file to delete");
continue;
}if (fileToBeDeleted != null ) {
var replacementFile=backupfile_n;
var fileToBeDeletedLMT=fileToBeDeleted.lastModified$();
var replacementFileLMT=replacementFile.lastModified$();
$I$(5,"trace$S",["BACKUPFILES fileToBeDeleted is " + fileToBeDeleted.getAbsolutePath$()]);
$I$(5,"trace$S",["BACKUPFILES replacementFile is " + backupfile_n.getAbsolutePath$()]);
try {
var oldestTempFile=C$.nextTempFile$S$java_io_File(fileToBeDeleted.getName$(), dirFile);
if (Long.$gt(fileToBeDeletedLMT,replacementFileLMT )) {
var fileToBeDeletedLMTString=C$.sdf.format$O(Long.valueOf$J(fileToBeDeletedLMT));
var replacementFileLMTString=C$.sdf.format$O(Long.valueOf$J(replacementFileLMT));
$I$(5,"warn$S",["WARNING! I am set to delete backupfile " + fileToBeDeleted.getName$() + " has modification time " + fileToBeDeletedLMTString + " which is newer than its replacement " + replacementFile.getName$() + " with modification time " + replacementFileLMTString ]);
var $delete=C$.confirmNewerDeleteFile$java_io_File$java_io_File$Z(fileToBeDeleted, replacementFile, true);
$I$(5,"trace$S",["BACKUPFILES " + ($delete ? "confirmed" : "not") + " deleting file " + fileToBeDeleted.getAbsolutePath$() + " which is newer than " + replacementFile.getAbsolutePath$() ]);
if ($delete) {
fileToBeDeleted.delete$();
} else {
$I$(5,"debug$S",["BACKUPFILES moving " + fileToBeDeleted.getAbsolutePath$() + " to " + oldestTempFile.getAbsolutePath$() ]);
C$.moveFileToFile$java_io_File$java_io_File(fileToBeDeleted, oldestTempFile);
}} else {
$I$(5,"debug$S",["BACKUPFILES going to move " + fileToBeDeleted.getAbsolutePath$() + " to " + oldestTempFile.getAbsolutePath$() ]);
C$.moveFileToFile$java_io_File$java_io_File(fileToBeDeleted, oldestTempFile);
p$1.addDeleteFile$java_io_File.apply(this, [oldestTempFile]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5,"error$S",["Error occurred, probably making new temp file for '" + fileToBeDeleted.getName$() + "'" ]);
$I$(5,"error$S",[$I$(6).getStackTraceString$Throwable(e)]);
} else {
throw e;
}
}
fileToBeDeleted=null;
}if (!this.noMax && n == tempMax  && backupfile_n.exists$() ) {
fileToBeDeleted=backupfile_n;
} else {
if (previousFile != null ) {
ret=!!(ret & C$.moveFileToFile$java_io_File$java_io_File(backupfile_n, previousFile));
}}previousFile=backupfile_n;
}
nextIndexNum=1;
} else {
bfTreeMap.values$().toArray$OA(backupFiles);
var bfsb=Clazz.new_($I$(10,1));
for (var i=0; i < backupFiles.length; i++) {
if (bfsb.length$() > 0) {
bfsb.append$S(", ");
}bfsb.append$S(backupFiles[i].getName$());
}
$I$(5,"trace$S",["BACKUPFILES backupFiles: " + bfsb.toString()]);
if ((!this.noMax) && bfTreeMap.size$() >= this.max ) {
$I$(5,"trace$S",["BACKUPFILES noMax: " + this.noMax + ", " + "max: " + this.max + ", " + "bfTreeMap.size(): " + bfTreeMap.size$() ]);
var numToDelete=this.suffix.indexOf$S("%n") > -1 ? bfTreeMap.size$() - this.max + 1 : 0;
$I$(5).trace$S("BACKUPFILES numToDelete: " + numToDelete);
var replacementFile=numToDelete < backupFiles.length ? backupFiles[numToDelete] : null;
for (var i=0; i < numToDelete; i++) {
var fileToBeDeleted=backupFiles[i];
var $delete=true;
$I$(5).trace$S("BACKUPFILES fileToBeDeleted: " + fileToBeDeleted);
var newer=false;
if (replacementFile != null ) {
var fileToBeDeletedLMT=fileToBeDeleted.lastModified$();
var replacementFileLMT=replacementFile != null  ? replacementFile.lastModified$() : [16777215,549755813887,1];
if (Long.$gt(fileToBeDeletedLMT,replacementFileLMT )) {
var fileToBeDeletedLMTString=C$.sdf.format$O(Long.valueOf$J(fileToBeDeletedLMT));
var replacementFileLMTString=C$.sdf.format$O(Long.valueOf$J(replacementFileLMT));
$I$(5,"warn$S",["WARNING! I am set to delete backupfile '" + fileToBeDeleted.getName$() + "' has modification time " + fileToBeDeletedLMTString + " which is newer than the oldest backupfile being kept '" + replacementFile.getName$() + "' with modification time " + replacementFileLMTString ]);
$delete=C$.confirmNewerDeleteFile$java_io_File$java_io_File$Z(fileToBeDeleted, replacementFile, false);
if ($delete) {
fileToBeDeleted.delete$();
$I$(5).debug$S("BACKUPFILES deleting fileToBeDeleted: " + fileToBeDeleted);
$delete=false;
} else {
$I$(5).debug$S("BACKUPFILES keeping fileToBeDeleted: " + fileToBeDeleted);
}}}if ($delete) {
p$1.addDeleteFile$java_io_File.apply(this, [fileToBeDeleted]);
$I$(5,"debug$S",["BACKUPFILES addDeleteFile(fileToBeDeleted): " + fileToBeDeleted]);
}}
}nextIndexNum=((bfTreeMap.lastKey$()).$c() + 1)|0;
}}var latestBackupFilename=dir + $I$(3).separatorChar + $I$(9).getBackupFilename$I$S$S$I(nextIndexNum, basename, this.suffix, this.digits) ;
$I$(5).trace$S("BACKUPFILES Moving old file [" + this.file + "] to latestBackupFilename [" + latestBackupFilename + "]" );
ret=!!(ret & C$.moveFileToFile$java_io_File$java_io_File(this.file, Clazz.new_($I$(3,1).c$$S,[latestBackupFilename])));
$I$(5,"debug$S",["BACKUPFILES moving " + this.file + " to " + latestBackupFilename + " was " + (ret ? "" : "NOT ") + "successful" ]);
if (tidyUp) {
$I$(5).debug$S("BACKUPFILES tidying up files");
p$1.tidyUpFiles.apply(this, []);
}return ret;
});

Clazz.newMeth(C$, 'nextTempFile$S$java_io_File',  function (filename, dirFile) {
var temp=null;
 COUNT : for (var i=1; i < 1000; i++) {
var trythis=Clazz.new_([dirFile, filename + '~' + Integer.toString$I(i) ],$I$(3,1).c$$java_io_File$S);
if (!trythis.exists$()) {
temp=trythis;
break COUNT;
}}
if (temp == null ) {
temp=$I$(3).createTempFile$S$S$java_io_File(filename, ".tmp", dirFile);
}return temp;
}, 1);

Clazz.newMeth(C$, 'tidyUpFiles',  function () {
p$1.deleteOldFiles.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'confirmNewerDeleteFile$java_io_File$java_io_File$Z',  function (fileToBeDeleted, replacementFile, replace) {
var messageSB=Clazz.new_($I$(10,1));
var ftbd=fileToBeDeleted;
var ftbdLMT=C$.sdf.format$O(Long.valueOf$J(ftbd.lastModified$()));
var ftbdSize=Long.toString$J(ftbd.length$());
var rf=replacementFile;
var rfLMT=C$.sdf.format$O(Long.valueOf$J(rf.lastModified$()));
var rfSize=Long.toString$J(rf.length$());
var confirmButton=1;
if (replace) {
var saveFile=null;
try {
saveFile=C$.nextTempFile$S$java_io_File(ftbd.getName$(), ftbd.getParentFile$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("Error when confirming to keep backup file newer than other backup files.");
e.printStackTrace$();
} else {
throw e;
}
}
messageSB.append$S($I$(11,"formatMessage$S$SA",["label.newerdelete_replacement_line", Clazz.array(String, -1, [ftbd.getName$(), rf.getName$(), ftbdLMT, rfLMT, ftbdSize, rfSize])]));
messageSB.append$S("\n\n");
messageSB.append$S($I$(11,"formatMessage$S$SA",["label.confirm_deletion_or_rename", Clazz.array(String, -1, [ftbd.getName$(), saveFile.getName$()])]));
var options=Clazz.array(String, -1, [$I$(11).getString$S("label.delete"), $I$(11).getString$S("label.rename")]);
confirmButton=$I$(7).isHeadless$() ? 0 : $I$(12,"showOptionDialog$java_awt_Component$S$S$I$I$javax_swing_Icon$OA$O",[$I$(13).desktop, messageSB.toString(), $I$(11).getString$S("label.backupfiles_confirm_delete"), 0, 2, null, options, options[0]]);
} else {
messageSB.append$S($I$(11,"formatMessage$S$SA",["label.newerdelete_line", Clazz.array(String, -1, [ftbd.getName$(), rf.getName$(), ftbdLMT, rfLMT, ftbdSize, rfSize])]));
messageSB.append$S("\n\n");
messageSB.append$S($I$(11,"formatMessage$S$SA",["label.confirm_deletion", Clazz.array(String, -1, [ftbd.getName$()])]));
var options=Clazz.array(String, -1, [$I$(11).getString$S("label.delete"), $I$(11).getString$S("label.keep")]);
confirmButton=$I$(7).isHeadless$() ? 0 : $I$(12,"showOptionDialog$java_awt_Component$S$S$I$I$javax_swing_Icon$OA$O",[$I$(13).desktop, messageSB.toString(), $I$(11).getString$S("label.backupfiles_confirm_delete"), 0, 2, null, options, options[0]]);
}return (confirmButton == 0);
}, 1);

Clazz.newMeth(C$, 'deleteOldFiles',  function () {
if (this.deleteFiles != null  && !this.deleteFiles.isEmpty$() ) {
var doDelete=false;
var messageSB=null;
if (C$.confirmDelete && this.deleteFiles.size$() > 0 ) {
messageSB=Clazz.new_($I$(10,1));
messageSB.append$S($I$(11).getString$S("label.backupfiles_confirm_delete_old_files"));
for (var i=0; i < this.deleteFiles.size$(); i++) {
var df=this.deleteFiles.get$I(i);
messageSB.append$S("\n");
messageSB.append$S(df.getName$());
messageSB.append$S(" ");
messageSB.append$S($I$(11,"formatMessage$S$SA",["label.file_info", Clazz.array(String, -1, [C$.sdf.format$O(Long.valueOf$J(df.lastModified$())), Long.toString$J(df.length$())])]));
}
var confirmButton=$I$(7).isHeadless$() ? 0 : $I$(12,"showConfirmDialog$java_awt_Component$O$S$I$I",[$I$(13).desktop, messageSB.toString(), $I$(11).getString$S("label.backupfiles_confirm_delete"), 0, 2]);
doDelete=(confirmButton == 0);
} else {
doDelete=true;
}if (doDelete) {
for (var i=0; i < this.deleteFiles.size$(); i++) {
var fileToDelete=this.deleteFiles.get$I(i);
$I$(5).trace$S("BACKUPFILES about to delete fileToDelete:" + fileToDelete);
fileToDelete.delete$();
$I$(5,"warn$S",["deleted '" + fileToDelete.getName$() + "'" ]);
}
}}this.deleteFiles.clear$();
}, p$1);

Clazz.newMeth(C$, 'sortBackupFilesAsTreeMap$java_io_FileA$S',  function (backupFiles, basename) {
var bfHashMap=Clazz.new_($I$(14,1));
for (var i=0; i < backupFiles.length; i++) {
var f=backupFiles[i];
var bfp=Clazz.new_($I$(9,1).c$$java_io_File$S$S$I,[f, basename, this.suffix, this.digits]);
bfHashMap.put$O$O(Integer.valueOf$I(bfp.indexNum$()), f);
}
var bfTreeMap=Clazz.new_($I$(15,1));
bfTreeMap.putAll$java_util_Map(bfHashMap);
return bfTreeMap;
}, p$1);

Clazz.newMeth(C$, 'rollBackupsAndRenameTempFile$',  function () {
var write=this.getWriteSuccess$();
var roll=false;
var rename=false;
if (write) {
roll=this.rollBackupFiles$Z(false);
rename=this.renameTempFile$();
}var okay=roll && rename ;
if (!okay) {
var messageSB=Clazz.new_($I$(10,1));
messageSB.append$S($I$(11).getString$S("label.backupfiles_confirm_save_file_backupfiles_roll_wrong"));
if (rename) {
if (messageSB.length$() > 0) {
messageSB.append$S("\n");
}messageSB.append$S($I$(11).getString$S("label.backupfiles_confirm_save_new_saved_file_ok"));
} else {
if (messageSB.length$() > 0) {
messageSB.append$S("\n");
}messageSB.append$S($I$(11).getString$S("label.backupfiles_confirm_save_new_saved_file_not_ok"));
}if (messageSB.length$() > 0) {
messageSB.append$S("\n");
}messageSB.append$S($I$(11).getString$S("label.continue_operation"));
var confirmButton=$I$(7).isHeadless$() ? 0 : $I$(12,"showConfirmDialog$java_awt_Component$O$S$I$I",[$I$(13).desktop, messageSB.toString(), $I$(11).getString$S("label.backupfiles_confirm_save_file"), 0, 2]);
okay=confirmButton == 0;
}if (okay) {
p$1.tidyUpFiles.apply(this, []);
}return rename;
});

Clazz.newMeth(C$, 'getBackupFilesAsTreeMap$S$S$I',  function (fileName, suffix, digits) {
var backupFiles=null;
var file=Clazz.new_($I$(3,1).c$$S,[fileName]);
var dirFile;
try {
dirFile=file.getParentFile$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("Could not get canonical path for file '" + file + "'" );
return Clazz.new_($I$(15,1));
} else {
throw e;
}
}
var filename=file.getName$();
var basename=filename;
var bff=Clazz.new_($I$(8,1).c$$S$S$I,[basename, suffix, digits]);
backupFiles=dirFile.listFiles$java_io_FilenameFilter(bff);
var bfHashMap=Clazz.new_($I$(14,1));
for (var i=0; i < backupFiles.length; i++) {
var f=backupFiles[i];
var bfp=Clazz.new_($I$(9,1).c$$java_io_File$S$S$I,[f, basename, suffix, digits]);
bfHashMap.put$O$O(Integer.valueOf$I(bfp.indexNum$()), f);
}
var bfTreeMap=Clazz.new_($I$(15,1));
bfTreeMap.putAll$java_util_Map(bfHashMap);
return bfTreeMap;
}, 1);

Clazz.newMeth(C$, 'addDeleteFile$java_io_File',  function (fileToBeDeleted) {
var ret=false;
var pos=this.deleteFiles.indexOf$O(fileToBeDeleted);
if (pos > -1) {
$I$(5,"debug$S",["BACKUPFILES not adding file " + fileToBeDeleted.getAbsolutePath$() + " to the delete list (already at index" + pos + ")" ]);
return true;
} else {
$I$(5,"debug$S",["BACKUPFILES adding file " + fileToBeDeleted.getAbsolutePath$() + " to the delete list" ]);
this.deleteFiles.add$O(fileToBeDeleted);
}return ret;
}, p$1);

Clazz.newMeth(C$, 'moveFileToFile$java_io_File$java_io_File',  function (oldFile, newFile) {
$I$(5).initLogger$();
var ret=false;
var oldPath=$I$(16,"get$S$SA",[oldFile.getAbsolutePath$(), Clazz.array(String, -1, [])]);
var newPath=$I$(16,"get$S$SA",[newFile.getAbsolutePath$(), Clazz.array(String, -1, [])]);
try {
$I$(5,"trace$S",["BACKUPFILES deleting " + newFile.getAbsolutePath$()]);
newFile.delete$();
$I$(5,"trace$S",["BACKUPFILES moving " + oldFile.getAbsolutePath$() + " to " + newFile.getAbsolutePath$() ]);
$I$(17,"move$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA",[oldPath, newPath, Clazz.array($I$(18), -1, [$I$(19).REPLACE_EXISTING])]);
ret=true;
$I$(5).trace$S("BACKUPFILES move seems to have succeeded");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
$I$(5,"warn$S",["Could not move file '" + oldPath.toString() + "' to '" + newPath.toString() + "'" ]);
$I$(5,"error$S",[e.getMessage$()]);
$I$(5,"debug$S",[$I$(6).getStackTraceString$Throwable(e)]);
ret=false;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(5,"error$S",[e.getMessage$()]);
$I$(5,"debug$S",[$I$(6).getStackTraceString$Throwable(e)]);
ret=false;
}
} else {
throw e$$;
}
}
return ret;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.sdf=Clazz.new_($I$(1,1).c$$S,["yyyy-MM-dd HH:mm:ss"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
