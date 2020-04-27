(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'com.stevesoft.pat.Regex','java.util.Vector','java.util.Arrays','jalview.util.DBRefUtils','java.util.Collections']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlLink");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dynamic=false;
this.usesDBaccession=false;
this.invalidMessage=null;
},1);

C$.$fields$=[['Z',['dynamic','usesDBaccession'],'S',['urlSuffix','urlPrefix','target','label','dbname','regexReplace','invalidMessage']]
,['O',['LINK_COMPARATOR','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$S', function (link) {
;C$.$init$.apply(this);
var sep=link.indexOf$S("|");
var psqid=link.indexOf$S("$DB_ACCESSION");
var nsqid=link.indexOf$S("$SEQUENCE_ID");
if (psqid > -1) {
this.dynamic=true;
this.usesDBaccession=true;
sep=this.parseLabel$I$I$S(sep, psqid, link);
var endOfRegex=this.parseUrl$S$S$I$I(link, "DB_ACCESSION", psqid, sep);
this.parseTarget$S$I$I(link, sep, endOfRegex);
} else if (nsqid > -1) {
this.dynamic=true;
sep=this.parseLabel$I$I$S(sep, nsqid, link);
var endOfRegex=this.parseUrl$S$S$I$I(link, "SEQUENCE_ID", nsqid, sep);
this.parseTarget$S$I$I(link, sep, endOfRegex);
} else {
this.label=link.substring$I$I(0, sep).trim$();
var lastsep=link.lastIndexOf$S("|");
if (lastsep != sep) {
this.urlPrefix=link.substring$I$I(sep + 1, lastsep).trim$();
this.target=link.substring$I(lastsep + 1).trim$();
} else {
this.urlPrefix=link.substring$I(sep + 1).trim$();
this.target=this.label;
}this.regexReplace=null;
this.urlSuffix=null;
}this.label=this.label.trim$();
this.target=this.target.trim$();
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (name, url, desc) {
C$.c$$S.apply(this, [name + "|" + url + "|" + desc ]);
}, 1);

Clazz.newMeth(C$, 'getUrlSuffix$', function () {
return this.urlSuffix;
});

Clazz.newMeth(C$, 'getUrlPrefix$', function () {
return this.urlPrefix;
});

Clazz.newMeth(C$, 'getTarget$', function () {
return this.target;
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'getUrlWithToken$', function () {
var $var=(this.usesDBaccession ? "DB_ACCESSION" : "SEQUENCE_ID");
return this.urlPrefix + (this.dynamic ? ("$" + $var + ((this.regexReplace != null ) ? "=" + this.regexReplace + "=" + "$"  : "$") ) : "") + ((this.urlSuffix == null ) ? "" : this.urlSuffix) ;
});

Clazz.newMeth(C$, 'getRegexReplace$', function () {
return this.regexReplace;
});

Clazz.newMeth(C$, 'getInvalidMessage$', function () {
return this.invalidMessage;
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.invalidMessage == null ;
});

Clazz.newMeth(C$, 'isDynamic$', function () {
return this.dynamic;
});

Clazz.newMeth(C$, 'usesDBAccession$', function () {
return this.usesDBaccession;
});

Clazz.newMeth(C$, 'setLabel$S', function (newlabel) {
this.label=newlabel;
});

Clazz.newMeth(C$, 'setTarget$S', function (desc) {
this.target=desc;
});

Clazz.newMeth(C$, 'makeUrls$S$Z', function (idstring, onlyIfMatches) {
if (this.dynamic) {
if (this.regexReplace != null ) {
var rg=$I$(1).perlCode$S("/" + this.regexReplace + "/" );
if (rg.search$S(idstring)) {
var ns=rg.numSubs$();
if (ns == 0) {
return Clazz.array(String, -1, [rg.stringMatched$(), this.urlPrefix + rg.stringMatched$() + this.urlSuffix ]);
} else {
for (var s=0; s <= rg.numSubs$(); s++) {
System.err.println$S("Sub " + s + " : " + rg.matchedFrom$I(s) + " : " + rg.matchedTo$I(s) + " : '" + rg.stringMatched$I(s) + "'" );
}
var subs=Clazz.new_($I$(2,1));
var s=0;
while (s <= ns){
if (s + 1 <= ns && rg.matchedTo$I(s) > -1  && rg.matchedTo$I(s + 1) > -1  && rg.matchedTo$I(s + 1) < rg.matchedTo$I(s) ) {
var r=s + 1;
var mtch="";
while (r <= ns && rg.matchedTo$I(r) <= rg.matchedTo$I(s) ){
if (rg.matchedFrom$I(r) > -1) {
mtch += rg.stringMatched$I(r);
}r++;
}
if (mtch.length$() > 0) {
subs.addElement$O(mtch);
subs.addElement$O(this.urlPrefix + mtch + this.urlSuffix );
}s=r;
} else {
if (rg.matchedFrom$I(s) > -1) {
subs.addElement$O(rg.stringMatched$I(s));
subs.addElement$O(this.urlPrefix + rg.stringMatched$I(s) + this.urlSuffix );
}s++;
}}
var res=Clazz.array(String, [subs.size$()]);
for (var r=0, rs=subs.size$(); r < rs; r++) {
res[r]=subs.elementAt$I(r);
}
subs.removeAllElements$();
return res;
}}if (onlyIfMatches) {
return null;
}}if (idstring.indexOf$S("|") > -1) {
idstring=idstring.substring$I(idstring.lastIndexOf$S("|") + 1);
}return Clazz.array(String, -1, [idstring, this.urlPrefix + idstring + this.urlSuffix ]);
} else {
return Clazz.array(String, -1, ["", this.urlPrefix]);
}});

Clazz.newMeth(C$, 'toString', function () {
return this.label + "|" + this.getUrlWithToken$() ;
});

Clazz.newMeth(C$, 'toStringWithTarget$', function () {
return this.label + "|" + this.getUrlWithToken$() + "|" + this.target ;
});

Clazz.newMeth(C$, 'parseLabel$I$I$S', function (firstSep, psqid, link) {
var p=firstSep;
var sep=firstSep;
do {
sep=p;
p=link.indexOf$S$I("|", sep + 1);
} while (p > sep && p < psqid );
this.label=link.substring$I$I(0, sep);
return sep;
});

Clazz.newMeth(C$, 'parseTarget$S$I$I', function (link, sep, endOfRegex) {
var lastsep=link.lastIndexOf$S("|");
if ((lastsep != sep) && (lastsep > endOfRegex) ) {
this.target=link.substring$I(lastsep + 1).trim$();
} else {
this.target=this.label;
}if (this.target.indexOf$S("|") > -1) {
this.target=this.target.substring$I$I(0, this.target.indexOf$S("|"));
} else if (this.target.indexOf$S(" ") > 2) {
this.target=this.target.substring$I$I(0, this.target.indexOf$S(" "));
}});

Clazz.newMeth(C$, 'parseUrl$S$S$I$I', function (link, varName, sqidPos, sep) {
this.urlPrefix=link.substring$I$I(sep + 1, sqidPos).trim$();
var startDelimiter="$" + varName + "=/" ;
var endDelimiter="/=$";
var startLength=startDelimiter.length$();
var p=link.indexOf$S$I(endDelimiter, sqidPos + startLength);
if (link.indexOf$S(startDelimiter) == sqidPos && (p > sqidPos + startLength) ) {
this.urlSuffix=link.substring$I(p + endDelimiter.length$());
this.regexReplace=link.substring$I$I(sqidPos + startLength, p);
try {
var rg=$I$(1).perlCode$S("/" + this.regexReplace + "/" );
if (rg == null ) {
this.invalidMessage="Invalid Regular Expression : '" + this.regexReplace + "'\n" ;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.invalidMessage="Invalid Regular Expression : '" + this.regexReplace + "'\n" ;
} else {
throw e;
}
}
} else {
this.regexReplace=null;
if (link.indexOf$S("$" + varName + "$" ) == sqidPos) {
var lastsep=link.lastIndexOf$S("|");
if (lastsep < sqidPos + startLength - 1) {
lastsep=link.length$();
}this.urlSuffix=link.substring$I$I(sqidPos + startLength - 1, lastsep).trim$();
this.regexReplace=null;
} else {
this.invalidMessage="Warning: invalid regex structure for URL link : " + link;
}}return p;
});

Clazz.newMeth(C$, 'createLinksFromSeq$jalview_datamodel_SequenceI$java_util_Map', function (seq, linkset) {
if (seq != null  && this.dynamic ) {
this.createDynamicLinks$jalview_datamodel_SequenceI$java_util_Map(seq, linkset);
} else {
this.createStaticLink$java_util_Map(linkset);
}});

Clazz.newMeth(C$, 'createStaticLink$java_util_Map', function (linkset) {
if (!linkset.containsKey$O(this.label + "|" + this.getUrlPrefix$() )) {
linkset.put$O$O(this.label + "|" + this.getUrlPrefix$() , $I$(3,"asList$OA",[[this.target, this.label, null, this.getUrlPrefix$()]]));
}});

Clazz.newMeth(C$, 'createDynamicLinks$jalview_datamodel_SequenceI$java_util_Map', function (seq, linkset) {
var id=seq.getName$();
var descr=seq.getDescription$();
if (descr != null  && descr.length$() < 1 ) {
descr=null;
}if (this.usesDBAccession$()) {
var dbr=$I$(4,"selectRefs$java_util_List$SA",[seq.getDBRefs$(), Clazz.array(String, -1, [this.target])]);
if (dbr != null ) {
for (var r=0, nd=dbr.size$(); r < nd; r++) {
this.createBareURLLink$S$Boolean$java_util_Map(dbr.get$I(r).getAccessionId$(), new Boolean(true), linkset);
}
}} else if (!this.usesDBAccession$() && id != null  ) {
this.createBareURLLink$S$Boolean$java_util_Map(id, new Boolean(false), linkset);
}if (descr != null  && this.getRegexReplace$() != null  ) {
this.createBareURLLink$S$Boolean$java_util_Map(descr, new Boolean(false), linkset);
}});

Clazz.newMeth(C$, 'createBareURLLink$S$Boolean$java_util_Map', function (id, combineLabel, linkset) {
var urls=this.makeUrls$S$Z(id, true);
if (urls != null ) {
for (var u=0; u < urls.length; u+=2) {
if (!linkset.containsKey$O(urls[u] + "|" + urls[u + 1] )) {
var thisLabel=this.label;
if ((combineLabel).valueOf()) {
thisLabel=this.label + "|" + urls[u] ;
}linkset.put$O$O(urls[u] + "|" + urls[u + 1] , $I$(3).asList$OA([this.target, thisLabel, urls[u], urls[u + 1]]));
}}
}});

Clazz.newMeth(C$, 'sort$java_util_List', function (nlinks) {
$I$(5).sort$java_util_List$java_util_Comparator(nlinks, C$.LINK_COMPARATOR);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.LINK_COMPARATOR=((P$.UrlLink$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UrlLink$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'], function (link1, link2) {
if (link1 == null  || link2 == null  ) {
return 0;
}if (link1.contains$CharSequence("$SEQUENCE_ID$") && link2.contains$CharSequence("$DB_ACCESSION$") ) {
return -1;
}if (link2.contains$CharSequence("$SEQUENCE_ID$") && link1.contains$CharSequence("$DB_ACCESSION$") ) {
return 1;
}return String.CASE_INSENSITIVE_ORDER.compare$O$O(link1, link2);
});
})()
), Clazz.new_(P$.UrlLink$1.$init$,[this, null]));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
