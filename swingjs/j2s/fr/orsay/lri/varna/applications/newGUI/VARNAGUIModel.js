(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.newGUI"),p$1={},I$=[[0,'java.awt.datatransfer.DataFlavor','java.util.Date','java.io.File','java.util.regex.Pattern','fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAGUIModel", null, null, 'Comparable');
C$.Flavor=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.Flavor=Clazz.new_($I$(1).c$$Class$S,[Clazz.getClass(C$), "VARNA Object"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._lastModified=null;
this._outOfSync=false;
this._r=null;
this._caption=null;
this._path=null;
this._folder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._outOfSync=false;
this._r=null;
this._caption="";
this._path="";
this._folder="";
}, 1);

Clazz.newMeth(C$, 'lastModif$S', function (path) {
return Clazz.new_($I$(2).c$$J,[Clazz.new_($I$(3).c$$S,[path]).lastModified$()]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (folder, path) {
C$.c$$S$S$java_util_Date.apply(this, [folder, path, C$.lastModif$S(path)]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_util_Date', function (folder, path, lastModified) {
C$.$init$.apply(this);
this._lastModified=lastModified;
this._outOfSync=false;
this._folder=folder;
this._path=path;
var s=path.split$S($I$(4).quote$S($I$(3).separator));
if (s.length > 0) this._caption=s[s.length - 1];
}, 1);

Clazz.newMeth(C$, 'hasChanged$', function () {
return this._outOfSync;
});

Clazz.newMeth(C$, 'checkForModifications$', function () {
if (!C$.lastModif$S(this._path).equals$O(this._lastModified) && !this._outOfSync ) {
this._outOfSync=true;
return true;
}return false;
});

Clazz.newMeth(C$, 'getRNA$', function () {
if (this._r == null ) {
try {
p$1.createRNA.apply(this, []);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
}return this._r;
});

Clazz.newMeth(C$, 'createRNA', function () {
var r=$I$(5).loadSecStr$S(this._path);
if (r.size$() > 0) {
this._r=r.iterator$().next$();
this._r.drawRNARadiate$();
} else {
throw Clazz.new_($I$(6).c$$S,["No valid RNA defined in this file."]);
}return this._r;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this._caption + (this._outOfSync ? "*" : "");
});

Clazz.newMeth(C$, 'getID$', function () {
return this.getRNA$().getID$();
});

Clazz.newMeth(C$, 'getCaption$', function () {
return this._caption;
});

Clazz.newMeth(C$, 'getFolder$', function () {
return this._folder;
});

Clazz.newMeth(C$, ['compareTo$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel','compareTo$','compareTo$TT'], function (o) {
return this._caption.compareTo$S(o._caption);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
