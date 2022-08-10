(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),p$1={},I$=[[0,'java.util.Random','java.util.ArrayList','java.util.Date','java.io.File','java.util.regex.Pattern','fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel','fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel','fr.orsay.lri.varna.factories.RNAFactory']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FragSeqFileModel", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._models=Clazz.new_($I$(2,1));
this._outOfSync=false;
this._caption="";
this._path="";
this._folder="";
this._cached=false;
},1);

C$.$fields$=[['Z',['_outOfSync','_cached'],'S',['_caption','_path','_folder'],'O',['_models','java.util.ArrayList','_lastModified','java.util.Date']]
,['O',['_rnd','java.util.Random']]]

Clazz.newMeth(C$, 'lastModif$S', function (path) {
return Clazz.new_([Clazz.new_($I$(4,1).c$$S,[path]).lastModified$()],$I$(3,1).c$$J);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (folder, path) {
C$.c$$S$S$java_util_Date.apply(this, [folder, path, C$.lastModif$S(path)]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_util_Date', function (folder, path, lastModified) {
;C$.$init$.apply(this);
this._lastModified=lastModified;
this._outOfSync=false;
this._folder=folder;
this._path=path;
var s=path.split$S($I$(5,"quote$S",[$I$(4).separator]));
if (s.length > 0) this._caption=s[s.length - 1];
}, 1);

Clazz.newMeth(C$, 'load$', function () {
var rnas=null;
try {
rnas=p$1.createRNAs.apply(this, []);
for (var r, $r = rnas.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
this.addModel$fr_orsay_lri_varna_applications_fragseq_FragSeqModel(Clazz.new_($I$(6,1).c$$fr_orsay_lri_varna_models_rna_RNA,[r]));
var nb=C$._rnd.nextInt$I(5);
for (var i=0; i < nb; i++) {
var data=Clazz.new_([r.getID$(), "" + i + "-" + r.getID$() ],$I$(7,1).c$$S$S);
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

Clazz.newMeth(C$, ['compareTo$fr_orsay_lri_varna_applications_fragseq_FragSeqFileModel','compareTo$O'], function (o) {
return this._caption.compareTo$S(o._caption);
});

Clazz.newMeth(C$, 'getModels$', function () {
if (!this._cached) {
this.load$();
}return this._models;
});

Clazz.newMeth(C$, 'addModel$fr_orsay_lri_varna_applications_fragseq_FragSeqModel', function (f) {
this._models.add$O(f);
});

Clazz.newMeth(C$, 'createRNAs', function () {
var r=$I$(8).loadSecStr$S(this._path);
for (var r2, $r2 = r.iterator$(); $r2.hasNext$()&&((r2=($r2.next$())),1);) {
r2.drawRNARadiate$();
}
return Clazz.new_($I$(2,1).c$$java_util_Collection,[r]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$._rnd=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
