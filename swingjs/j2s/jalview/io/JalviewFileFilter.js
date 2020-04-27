(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.Hashtable','java.util.StringTokenizer','jalview.io.BackupFilenameParts','java.util.LinkedHashMap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewFileFilter", null, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filters=null;
this.description="no description";
this.fullDescription="full description";
this.useExtensionsInDescription=true;
this.parentJFC=null;
},1);

C$.$fields$=[['Z',['useExtensionsInDescription'],'S',['description','fullDescription'],'O',['filters','java.util.Map','parentJFC','jalview.io.JalviewFileChooser']]
,['O',['suffixHash','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$S$S', function (extension, description) {
Clazz.super_(C$, this);
var st=Clazz.new_($I$(2,1).c$$S$S,[extension, ","]);
while (st.hasMoreElements$()){
this.addExtension$S(st.nextToken$().trim$());
}
this.setDescription$S(description);
}, 1);

Clazz.newMeth(C$, 'c$$SA', function (filts) {
C$.c$$SA$S.apply(this, [filts, null]);
}, 1);

Clazz.newMeth(C$, 'c$$SA$S', function (filts, description) {
Clazz.super_(C$, this);
for (var i=0; i < filts.length; i++) {
this.addExtension$S(filts[i]);
}
if (description != null ) {
this.setDescription$S(description);
}}, 1);

Clazz.newMeth(C$, 'getAcceptableExtension$', function () {
return this.filters.keySet$().iterator$().next$().toString();
});

Clazz.newMeth(C$, 'accept$java_io_File', function (f) {
if (f != null ) {
var extension=this.getExtension$java_io_File(f);
if (f.isDirectory$()) {
return true;
}if ((extension != null ) && (this.filters.get$O(extension) != null ) ) {
return true;
}}if (this.parentJFC != null  && this.parentJFC.includeBackupFiles ) {
var it=this.filters.keySet$().iterator$();
 EXTENSION : while (it.hasNext$()){
var ext=it.next$();
if (!f.getName$().contains$CharSequence(ext)) {
continue EXTENSION;
}var bfp=$I$(3,"currentBackupFilenameParts$S$S$Z",[f.getName$(), ext, true]);
if (bfp.isBackupFile$()) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'getExtension$java_io_File', function (f) {
if (f != null ) {
var filename=f.getName$();
var i=filename.lastIndexOf$I(".");
if ((i > 0) && (i < (filename.length$() - 1)) ) {
return filename.substring$I(i + 1).toLowerCase$();
};}return "";
});

Clazz.newMeth(C$, 'addExtension$S', function (extension) {
if (this.filters == null ) {
this.filters=Clazz.new_($I$(4,1).c$$I,[5]);
}this.filters.put$O$O(extension.toLowerCase$(), this);
this.fullDescription=null;
});

Clazz.newMeth(C$, 'getDescription$', function () {
if (this.fullDescription == null ) {
if ((this.description == null ) || this.isExtensionListInDescription$() ) {
this.fullDescription=(this.description == null ) ? "(" : (this.description + " (");
var extensions=this.filters.keySet$().iterator$();
if (extensions != null ) {
this.fullDescription += ("." + extensions.next$());
while (extensions.hasNext$()){
this.fullDescription += (", " + extensions.next$());
}
}this.fullDescription += ")";
} else {
this.fullDescription=this.description;
}}return this.fullDescription;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
this.fullDescription=null;
});

Clazz.newMeth(C$, 'setExtensionListInDescription$Z', function (b) {
this.useExtensionsInDescription=b;
this.fullDescription=null;
});

Clazz.newMeth(C$, 'isExtensionListInDescription$', function () {
return this.useExtensionsInDescription;
});

Clazz.newMeth(C$, 'setParentJFC$jalview_io_JalviewFileChooser', function (p) {
this.parentJFC=p;
});

C$.$static$=function(){C$.$static$=0;
C$.suffixHash=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
