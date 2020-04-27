(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),I$=[[0,'java.util.Hashtable']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileNameExtensionFilter", null, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._exts=Clazz.new_($I$(1,1));
this._desc="";
},1);

C$.$fields$=[['S',['_desc'],'O',['_exts','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$S$S', function (desc, ext1) {
Clazz.super_(C$, this);
this._desc=desc;
this._exts.put$O$O(ext1, new Integer(0));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (desc, ext1, ext2) {
C$.c$$S$S.apply(this, [desc, ext1]);
this._exts.put$O$O(ext2, new Integer(1));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S', function (desc, ext1, ext2, ext3) {
C$.c$$S$S$S.apply(this, [desc, ext1, ext2]);
this._exts.put$O$O(ext3, new Integer(2));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$S', function (desc, ext1, ext2, ext3, ext4) {
C$.c$$S$S$S$S.apply(this, [desc, ext1, ext2, ext3]);
this._exts.put$O$O(ext4, new Integer(3));
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File', function (path) {
var name=path.getName$();
if (path.isDirectory$()) return true;
var index=name.lastIndexOf$S(".");
if (index != -1) {
var suffix=name.substring$I(index + 1);
if (this._exts.containsKey$O(suffix)) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this._desc;
});

Clazz.newMeth(C$, 'getExtensions$', function () {
var exts=Clazz.array(String, [this._exts.size$()]);
var k=this._exts.keys$();
var n=0;
while (k.hasMoreElements$()){
exts[n]=k.nextElement$();
n++;
}
return exts;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
