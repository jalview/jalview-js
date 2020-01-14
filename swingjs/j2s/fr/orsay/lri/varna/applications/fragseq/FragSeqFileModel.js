(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),p$1={},I$=[[0,'java.util.Random','java.util.ArrayList','java.util.Date','java.io.File','java.util.regex.Pattern','fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel','fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel','fr.orsay.lri.varna.factories.RNAFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FragSeqFileModel", null, null, 'Comparable');
C$._rnd=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._rnd=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._models=null;
this._lastModified=null;
this._outOfSync=false;
this._caption=null;
this._path=null;
this._folder=null;
this._cached=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._models=Clazz.new_($I$(2));
this._outOfSync=false;
this._caption="";
this._path="";
this._folder="";
this._cached=false;
}, 1);

Clazz.newMeth(C$, 'lastModif$S', function (path) {
return Clazz.new_($I$(3).c$$J,[Clazz.new_($I$(4).c$$S,[path]).lastModified$()]);
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
var s=path.split$S($I$(5).quote$S($I$(4).separator));
if (s.length > 0) this._caption=s[s.length - 1];
}, 1);

Clazz.newMeth(C$, 'load$', function () {
var rnas=null;
try {
rnas=p$1.createRNAs.apply(this, []);
for (var r, $r = rnas.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
this.addModel$fr_orsay_lri_varna_applications_fragseq_FragSeqModel(Clazz.new_($I$(6).c$$fr_orsay_lri_varna_models_rna_RNA,[r]));
var nb=C$._rnd.nextInt$I(5);
for (var i=0; i < nb; i++) {
var data=Clazz.new_($I$(7).c$$S$S,[r.getID$(), "" + i + "-" + r.getID$() ]);
$I$(7).addRandomAnnotations$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel(r, data);
this.addModel$fr_orsay_lri_varna_applications_fragseq_FragSeqModel(data);
}
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
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
this._cached=true;
});

Clazz.newMeth(C$, 'hasChanged$', function () {
return this._outOfSync;
});

Clazz.newMeth(C$, 'checkForModifications$', function () {
if (!C$.lastModif$S(this._path).equals$O(this._lastModified) && !this._outOfSync ) {
this._outOfSync=true;
return true;
}return false;
});

Clazz.newMeth(C$, 'toString', function () {
return this._caption + (this._outOfSync ? "*" : "");
});

Clazz.newMeth(C$, 'getCaption$', function () {
return this._caption;
});

Clazz.newMeth(C$, 'getFolder$', function () {
return this._folder;
});

Clazz.newMeth(C$, 'getPath$', function () {
return this._path;
});

Clazz.newMeth(C$, ['compareTo$fr_orsay_lri_varna_applications_fragseq_FragSeqFileModel','compareTo$','compareTo$TT'], function (o) {
return this._caption.compareTo$S(o._caption);
});

Clazz.newMeth(C$, 'getModels$', function () {
if (!this._cached) {
this.load$();
}return this._models;
});

Clazz.newMeth(C$, 'addModel$fr_orsay_lri_varna_applications_fragseq_FragSeqModel', function (f) {
this._models.add$TE(f);
});

Clazz.newMeth(C$, 'createRNAs', function () {
var r=$I$(8).loadSecStr$S(this._path);
for (var r2, $r2 = r.iterator$(); $r2.hasNext$()&&((r2=($r2.next$())),1);) {
r2.drawRNARadiate$();
}
return Clazz.new_($I$(2).c$$java_util_Collection,[r]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
