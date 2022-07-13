(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.io.IntKeyStringValueEntry','jalview.util.MessageManager','jalview.io.BackupFilesPresetEntry','java.util.HashMap','StringBuilder','java.util.StringTokenizer','jalview.bin.Console','jalview.bin.Cache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BackupFilesPresetEntry");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['reverse','keepAll','confirmDelete'],'I',['digits','rollMax'],'S',['suffix']]
,['O',['backupfilesPresetEntries','jalview.io.IntKeyStringValueEntry[]','backupfilesPresetEntryDescriptions','String[]','backupfilesPresetEntriesValues','java.util.Map']]]

Clazz.newMeth(C$, 'c$$S$I$Z$Z$I$Z',  function (suffix, digits, reverse, keepAll, rollMax, confirmDelete) {
;C$.$init$.apply(this);
this.suffix=suffix == null  ? "" : suffix;
this.digits=digits < 1 ? 1 : (digits > 6 ? 6 : digits);
this.reverse=reverse;
this.keepAll=keepAll;
this.rollMax=rollMax < 1 ? 1 : (rollMax > 999 ? 999 : rollMax);
this.confirmDelete=confirmDelete;
}, 1);

Clazz.newMeth(C$, 'equals$jalview_io_BackupFilesPresetEntry',  function (compare) {
return this.suffix.equals$O(compare.suffix) && this.digits == compare.digits  && this.reverse == compare.reverse   && this.keepAll == compare.keepAll   && this.rollMax == compare.rollMax  && this.confirmDelete == compare.confirmDelete  ;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(5,1));
sb.append$S(this.suffix);
sb.append$S("\t");
sb.append$I(this.digits);
sb.append$S("\t");
sb.append$Z(this.reverse);
sb.append$S("\t");
sb.append$Z(this.keepAll);
sb.append$S("\t");
sb.append$I(this.rollMax);
sb.append$S("\t");
sb.append$Z(this.confirmDelete);
return sb.toString();
});

Clazz.newMeth(C$, 'createBackupFilesPresetEntry$S',  function (line) {
if (line == null ) {
return null;
}var st=Clazz.new_($I$(6,1).c$$S$S,[line, "\t"]);
var suffix=null;
var digits=0;
var reverse=false;
var keepAll=false;
var rollMax=0;
var confirmDelete=false;
try {
suffix=st.nextToken$();
digits=(Integer.valueOf$S(st.nextToken$())).$c();
reverse=(Boolean.valueOf$S(st.nextToken$())).valueOf();
keepAll=(Boolean.valueOf$S(st.nextToken$())).valueOf();
rollMax=(Integer.valueOf$S(st.nextToken$())).$c();
confirmDelete=(Boolean.valueOf$S(st.nextToken$())).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(7).error$S("Error parsing backupfiles scheme '" + line + "'" );
} else {
throw e;
}
}
return Clazz.new_(C$.c$$S$I$Z$Z$I$Z,[suffix, digits, reverse, keepAll, rollMax, confirmDelete]);
}, 1);

Clazz.newMeth(C$, 'getSavedBackupEntry$',  function () {
var savedPresetString=$I$(8).getDefault$S$S("BACKUPFILES_SAVED", null);
var savedPreset=C$.createBackupFilesPresetEntry$S(savedPresetString);
if (savedPreset == null ) {
savedPreset=C$.backupfilesPresetEntriesValues.get$O(Integer.valueOf$I(1));
}return savedPreset;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.backupfilesPresetEntries=Clazz.array($I$(1), -1, [Clazz.new_([1, $I$(2).getString$S("label.default")],$I$(1,1).c$$I$S), Clazz.new_([2, $I$(2).getString$S("label.single_file")],$I$(1,1).c$$I$S), Clazz.new_([3, $I$(2).getString$S("label.keep_all_versions")],$I$(1,1).c$$I$S), Clazz.new_([4, $I$(2).getString$S("label.rolled_backups")],$I$(1,1).c$$I$S), Clazz.new_([0, $I$(2).getString$S("label.custom")],$I$(1,1).c$$I$S)]);
C$.backupfilesPresetEntryDescriptions=Clazz.array(String, -1, [$I$(2).getString$S("label.default_description"), $I$(2).getString$S("label.single_file_description"), $I$(2).getString$S("label.keep_all_versions_description"), $I$(2).getString$S("label.rolled_backups_description"), $I$(2).getString$S("label.custom_description")]);
C$.backupfilesPresetEntriesValues=((P$.BackupFilesPresetEntry$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BackupFilesPresetEntry$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.HashMap'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
this.put$O$O(Integer.valueOf$I(1), Clazz.new_($I$(3,1).c$$S$I$Z$Z$I$Z,[".bak%n", 3, false, false, 3, false]));
this.put$O$O(Integer.valueOf$I(2), Clazz.new_($I$(3,1).c$$S$I$Z$Z$I$Z,["~", 1, false, false, 1, false]));
this.put$O$O(Integer.valueOf$I(3), Clazz.new_($I$(3,1).c$$S$I$Z$Z$I$Z,[".v%n", 3, false, true, 10, true]));
this.put$O$O(Integer.valueOf$I(4), Clazz.new_($I$(3,1).c$$S$I$Z$Z$I$Z,["_bak.%n", 1, true, false, 9, false]));
this.put$O$O(Integer.valueOf$I(0), Clazz.new_($I$(3,1).c$$S$I$Z$Z$I$Z,["", 0, false, false, 0, false]));
}
},1);

C$.$fields$=[[]]
})()
), Clazz.new_($I$(4,1),[this, null],P$.BackupFilesPresetEntry$1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
