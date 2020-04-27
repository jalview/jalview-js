(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.factories"),I$=[[0,'java.util.ArrayList','java.util.Hashtable','fr.orsay.lri.varna.factories.RNAFactory','java.util.Collections','fr.orsay.lri.varna.models.rna.RNA']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNAAlignment");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._lst=Clazz.new_($I$(1,1));
this._index=Clazz.new_($I$(2,1));
this._accession=Clazz.new_($I$(2,1));
this._secStr="";
},1);

C$.$fields$=[['S',['_secStr'],'O',['_lst','java.util.ArrayList','_index','java.util.Hashtable','+_accession']]]

Clazz.newMeth(C$, 'addSequence$S$S', function (id, s) {
if (!this._index.containsKey$O(id)) {
this._index.put$O$O(id, new Integer(this._lst.size$()));
this._lst.add$O(s);
}this._lst.set$I$O((this._index.get$O(id)).valueOf(), s);
});

Clazz.newMeth(C$, 'setSecStr$S', function (s) {
this._secStr=s;
});

Clazz.newMeth(C$, 'setAccession$S$S', function (id, AC) {
this._accession.put$O$O(id, AC);
});

Clazz.newMeth(C$, 'getRNAs$', function () {
var result=Clazz.new_($I$(1,1));
var str=$I$(3).parseSecStr$S(this._secStr);
var ids=Clazz.new_([this._index.keySet$()],$I$(1,1).c$$java_util_Collection);
$I$(4,"sort$java_util_List$java_util_Comparator",[ids, ((P$.RNAAlignment$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RNAAlignment$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'], function (o1, o2) {
return o1.compareToIgnoreCase$S(o2);
});
})()
), Clazz.new_(P$.RNAAlignment$1.$init$,[this, null]))]);
for (var id, $id = ids.iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var n=(this._index.get$O(id)).valueOf();
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
var r=Clazz.new_($I$(5,1));
try {
r.setRNA$S$S(nseq, nstr);
r.setName$S(id);
if (this._accession.containsKey$O(id)) {
r.setID$S(this._accession.get$O(id));
} else {
r.setID$S(id);
}result.add$O(r);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
