(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),I$=[[0,'java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileNameExtensionFilter", null, 'javax.swing.filechooser.FileFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._exts=null;
this._desc=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._exts=Clazz.new_($I$(1));
this._desc="";
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (desc, ext1) {
Clazz.super_(C$, this,1);
this._desc=desc;
this._exts.put$TK$TV(ext1, new Integer(0));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (desc, ext1, ext2) {
C$.c$$S$S.apply(this, [desc, ext1]);
this._exts.put$TK$TV(ext2, new Integer(1));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S', function (desc, ext1, ext2, ext3) {
C$.c$$S$S$S.apply(this, [desc, ext1, ext2]);
this._exts.put$TK$TV(ext3, new Integer(2));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$S', function (desc, ext1, ext2, ext3, ext4) {
C$.c$$S$S$S$S.apply(this, [desc, ext1, ext2, ext3]);
this._exts.put$TK$TV(ext4, new Integer(3));
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
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:41 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
