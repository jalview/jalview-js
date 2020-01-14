(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.factories"),I$=[[0,'java.util.ArrayList','java.util.Hashtable','fr.orsay.lri.varna.factories.RNAFactory','java.util.Collections','fr.orsay.lri.varna.models.rna.RNA']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNAAlignment");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._lst=null;
this._index=null;
this._accession=null;
this._secStr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._lst=Clazz.new_($I$(1));
this._index=Clazz.new_($I$(2));
this._accession=Clazz.new_($I$(2));
this._secStr="";
}, 1);

Clazz.newMeth(C$, 'addSequence$S$S', function (id, s) {
if (!this._index.containsKey$O(id)) {
this._index.put$TK$TV(id, new Integer(this._lst.size$()));
this._lst.add$TE(s);
}this._lst.set$I$TE((this._index.get$O(id)).intValue$(), s);
});

Clazz.newMeth(C$, 'setSecStr$S', function (s) {
this._secStr=s;
});

Clazz.newMeth(C$, 'setAccession$S$S', function (id, AC) {
this._accession.put$TK$TV(id, AC);
});

Clazz.newMeth(C$, 'getRNAs$', function () {
var result=Clazz.new_($I$(1));
var str=$I$(3).parseSecStr$S(this._secStr);
var ids=Clazz.new_($I$(1).c$$java_util_Collection,[this._index.keySet$()]);
$I$(4).sort$java_util_List$java_util_Comparator(ids, ((P$.RNAAlignment$1||
(function(){var C$=Clazz.newClass(P$, "RNAAlignment$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$S$S','compare$','compare$TT$TT'], function (o1, o2) {
return o1.compareToIgnoreCase$S(o2);
});
})()
), Clazz.new_(P$.RNAAlignment$1.$init$, [this, null])));
for (var id, $id = ids.iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var n=(this._index.get$O(id)).intValue$();
var seq=this._lst.get$I(n);
if (seq.length$() != str.length) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
var nseq="";
var nstr="";
for (var i=0; i < seq.length$(); i++) {
var c=seq.charAt$I(i);
var j=str[i];
if (!(c == "." || c == ":"  || c == "-" )) {
nseq += c;
if (j == -1) {
nstr += ".";
} else {
var cp=seq.charAt$I(j).$c();
if (cp == 46  || cp == 58   || cp == 45  ) {
nstr += ".";
} else {
nstr += this._secStr.charAt$I(i);
}}}}
var r=Clazz.new_($I$(5));
try {
r.setRNA$S$S(nseq, nstr);
r.setName$S(id);
if (this._accession.containsKey$O(id)) {
r.setID$S(this._accession.get$O(id));
} else {
r.setID$S(id);
}result.add$TE(r);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
e.printStackTrace$();
} else {
throw e;
}
}
}
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
