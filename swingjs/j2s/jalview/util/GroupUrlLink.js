(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'jalview.util.QuickSort','com.stevesoft.pat.Regex','java.util.Hashtable','Error','jalview.util.MessageManager','StringBuffer','jalview.util.Platform',['jalview.util.GroupUrlLink','.UrlStringTooLongException']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GroupUrlLink", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.tokens=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
if (C$.tokens == null ) {
C$.tokens=Clazz.array(String, -1, ["SEQUENCEIDS", "SEQUENCES", "DATASETID"]);
}};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.url_prefix=null;
this.target=null;
this.label=null;
this.url_suffix=null;
this.separators=null;
this.regexReplace=null;
this.invalidMessage=null;
this.segs=null;
this.mtch=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.invalidMessage=null;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (link) {
C$.$init$.apply(this);
var sep=link.indexOf$S("|");
this.segs=Clazz.array(Integer.TYPE, [C$.tokens.length]);
var ntoks=0;
for (var i=0; i < this.segs.length; i++) {
if ((this.segs[i]=link.indexOf$S("$" + C$.tokens[i])) > -1) {
ntoks++;
}}
if (ntoks == 0) {
this.invalidMessage="Group URL string must contain at least one of ";
for (var i=0; i < this.segs.length; i++) {
this.invalidMessage += " '$" + C$.tokens[i] + "[=/regex=/]$'" ;
}
return;
}var ptok=Clazz.array(Integer.TYPE, [ntoks + 1]);
var tmtch=Clazz.array(String, [ntoks + 1]);
this.mtch=Clazz.array(String, [ntoks]);
for (var i=0, t=0; i < this.segs.length; i++) {
if (this.segs[i] > -1) {
ptok[t]=this.segs[i];
tmtch[t++]=C$.tokens[i];
}}
ptok[ntoks]=link.length$();
tmtch[ntoks]="$$$$$$$$$";
$I$(1).sort$IA$OA(ptok, tmtch);
for (var i=0; i < ntoks; i++) {
this.mtch[i]=tmtch[i];
}
var p=sep;
do {
sep=p;
p=link.indexOf$S$I("|", sep + 1);
} while (p > sep && p < ptok[0] );
this.label=link.substring$I$I(0, sep);
if (this.label.indexOf$S("|") > -1) {
this.target=this.label.substring$I$I(0, this.label.indexOf$S("|"));
} else if (this.label.indexOf$S(" ") > 2) {
this.target=this.label.substring$I$I(0, this.label.indexOf$S(" "));
} else {
this.target=this.label;
}this.url_prefix=link.substring$I$I(sep + 1, ptok[0]);
this.url_suffix=Clazz.array(String, [this.mtch.length]);
this.regexReplace=Clazz.array(String, [this.mtch.length]);
for (var pass=0; pass < this.mtch.length; pass++) {
var mlength=3 + this.mtch[pass].length$();
if (link.indexOf$S("$" + this.mtch[pass] + "=/" ) == ptok[pass] && (p=link.indexOf$S$I("/=$", ptok[pass] + mlength)) > ptok[pass] + mlength ) {
if (ptok[pass + 1] < p + 3) {
this.invalidMessage="Token regexes cannot contain other regexes (did you terminate the $" + this.mtch[pass] + " regex with a '/=$' ?" ;
return;
}this.url_suffix[pass]=link.substring$I$I(p + 3, ptok[pass + 1]);
this.regexReplace[pass]=link.substring$I$I(ptok[pass] + mlength, p);
try {
var rg=$I$(2).perlCode$S("/" + this.regexReplace[pass] + "/" );
if (rg == null ) {
this.invalidMessage="Invalid Regular Expression : '" + this.regexReplace[pass] + "'\n" ;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.invalidMessage="Invalid Regular Expression : '" + this.regexReplace[pass] + "'\n" ;
} else {
throw e;
}
}
} else {
this.regexReplace[pass]=null;
if ((p=link.indexOf$S("$" + this.mtch[pass] + "$" )) == ptok[pass]) {
this.url_suffix[pass]=link.substring$I$I(p + this.mtch[pass].length$() + 2 , ptok[pass + 1]);
} else {
this.invalidMessage="Warning: invalid regex structure (after '" + this.mtch[0] + "') for URL link : " + link ;
}}}
var pass=0;
this.separators=Clazz.array(String, [this.url_suffix.length]);
var suffices=this.url_suffix[this.url_suffix.length - 1];
var lastsep=",";
while ((p=suffices.indexOf$I("|")) > -1){
this.separators[pass]=suffices.substring$I(p + 1);
if (pass == 0) {
this.url_suffix[this.url_suffix.length - 1]=suffices.substring$I$I(0, p);
} else {
lastsep=(this.separators[pass - 1]=this.separators[pass - 1].substring$I$I(0, p));
}suffices=this.separators[pass];
pass++;
}
if (pass > 0) {
lastsep=this.separators[pass - 1];
}while (pass < this.separators.length){
this.separators[pass++]=lastsep;
}
}, 1);

Clazz.newMeth(C$, 'getUrl_suffix$', function () {
return this.url_suffix[this.url_suffix.length - 1];
});

Clazz.newMeth(C$, 'getUrl_prefix$', function () {
return this.url_prefix;
});

Clazz.newMeth(C$, 'getTarget$', function () {
return this.target;
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'getIDRegexReplace$', function () {
return p$1._replaceFor$S.apply(this, [C$.tokens[0]]);
});

Clazz.newMeth(C$, '_replaceFor$S', function (token) {
for (var i=0; i < this.mtch.length; i++) {
if (this.segs[i] > -1 && this.mtch[i].equals$O(token) ) {
return this.regexReplace[i];
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'getSeqRegexReplace$', function () {
return p$1._replaceFor$S.apply(this, [C$.tokens[1]]);
});

Clazz.newMeth(C$, 'getInvalidMessage$', function () {
return this.invalidMessage;
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.invalidMessage == null ;
});

Clazz.newMeth(C$, 'makeUrls$SA$SA$S$Z', function (idstrings, seqstrings, dsstring, onlyIfMatches) {
var rstrings=p$1.replacementArgs$SA$SA$S.apply(this, [idstrings, seqstrings, dsstring]);
return this.makeUrls$java_util_Hashtable$Z(rstrings, onlyIfMatches);
});

Clazz.newMeth(C$, 'replacementArgs$SA$SA$S', function (idstrings, seqstrings, dsstring) {
var rstrings=Clazz.new_($I$(3));
rstrings.put$TK$TV(C$.tokens[0], idstrings);
rstrings.put$TK$TV(C$.tokens[1], seqstrings);
rstrings.put$TK$TV(C$.tokens[2], Clazz.array(String, -1, [dsstring]));
if (idstrings.length != seqstrings.length) {
throw Clazz.new_($I$(4).c$$S,[$I$(5).getString$S("error.idstring_seqstrings_only_one_per_sequence")]);
}return rstrings;
}, p$1);

Clazz.newMeth(C$, 'makeUrls$java_util_Hashtable$Z', function (repstrings, onlyIfMatches) {
return this.makeUrlsIf$Z$java_util_Hashtable$Z(true, repstrings, onlyIfMatches);
});

Clazz.newMeth(C$, 'makeUrlStubs$SA$SA$S$Z', function (ids, seqstr, string, b) {
var rstrings=p$1.replacementArgs$SA$SA$S.apply(this, [ids, seqstr, string]);
var stubs=this.makeUrlsIf$Z$java_util_Hashtable$Z(false, rstrings, b);
if (stubs != null ) {
return Clazz.array(java.lang.Object, -1, [stubs[0], stubs[1], rstrings, Clazz.array(Boolean.TYPE, -1, [b])]);
}return null;
});

Clazz.newMeth(C$, 'constructFrom$OA', function (stubs) {
var results=this.makeUrlsIf$Z$java_util_Hashtable$Z(true, stubs[2], (stubs[3])[0]);
return (results[3])[0];
});

Clazz.newMeth(C$, 'makeUrlsIf$Z$java_util_Hashtable$Z', function (createFullUrl, repstrings, onlyIfMatches) {
var pass=0;
var idseq=Clazz.array(String, [this.mtch.length, null]);
var mins=0;
var maxs=0;
for (var i=0; i < this.mtch.length; i++) {
idseq[i]=repstrings.get$O(this.mtch[i]);
if (idseq[i].length >= 1) {
if (mins == 0 && idseq[i].length == 1 ) {
mins=1;
}if (maxs < 2) {
maxs=idseq[i].length;
} else {
if (maxs != idseq[i].length) {
throw Clazz.new_($I$(4).c$$S,[$I$(5).formatMessage$S$SA("error.cannot_have_mixed_length_replacement_vectors", Clazz.array(String, -1, [(this.mtch[i]), Integer.valueOf$I(idseq[i].length).toString(), Integer.valueOf$I(maxs).toString()]))]);
}}} else {
throw Clazz.new_($I$(4).c$$S,[$I$(5).getString$S("error.cannot_have_zero_length_vector_replacement_strings")]);
}}
var matched=Clazz.array($I$(6), [idseq.length]);
var rgxs=Clazz.array($I$(2), [matched.length]);
for (pass=0; pass < matched.length; pass++) {
matched[pass]=Clazz.new_($I$(6));
if (this.regexReplace[pass] != null ) {
rgxs[pass]=$I$(2).perlCode$S("/" + this.regexReplace[pass] + "/" );
} else {
rgxs[pass]=null;
}}
var urllength=this.url_prefix.length$();
for (pass=0; pass < matched.length; pass++) {
urllength+=this.url_suffix[pass].length$();
}
var thismatched=Clazz.array(Boolean.TYPE, [maxs]);
var seqsmatched=0;
for (var sq=0; sq < maxs; sq++) {
thismatched[sq]=false;
var thematches=Clazz.array($I$(6), [rgxs.length]);
for (pass=0; pass < rgxs.length; pass++) {
thematches[pass]=Clazz.new_($I$(6));
if (idseq[pass].length <= sq) {
continue;
}if (rgxs[pass] != null ) {
var rg=rgxs[pass];
var rematchat=0;
while (rg.searchFrom$S$I(idseq[pass][sq], rematchat)){
rematchat=rg.matchedTo$();
thismatched[sq]|=true;
urllength+=rg.charsMatched$();
if ((urllength + 32) > $I$(7).getMaxCommandLineLength$()) {
throw Clazz.new_($I$(8).c$$I, [this, null, urllength]);
}if (!createFullUrl) {
continue;
}var ns=rg.numSubs$();
if (ns == 0) {
thematches[pass].append$S(rg.stringMatched$());
} else {
var subs=Clazz.new_($I$(6));
var s=0;
while (s <= ns){
if (s + 1 <= ns && rg.matchedTo$I(s) > -1  && rg.matchedTo$I(s + 1) > -1  && rg.matchedTo$I(s + 1) < rg.matchedTo$I(s) ) {
var r=s + 1;
var rmtch=Clazz.new_($I$(6));
while (r <= ns && rg.matchedTo$I(r) <= rg.matchedTo$I(s) ){
if (rg.matchedFrom$I(r) > -1) {
rmtch.append$S(rg.stringMatched$I(r));
}r++;
}
if (rmtch.length$() > 0) {
subs.append$StringBuffer(rmtch);
}s=r;
} else {
if (rg.matchedFrom$I(s) > -1) {
subs.append$S(rg.stringMatched$I(s));
}s++;
}}
thematches[pass].append$StringBuffer(subs);
}}
} else {
if (!onlyIfMatches) {
thismatched[sq]|=true;
urllength+=idseq[pass][sq].length$();
if (createFullUrl) {
thematches[pass]=Clazz.new_($I$(6).c$$S,[idseq[pass][sq]]);
}}}}
if (thismatched[sq]) {
if (createFullUrl) {
for (pass=0; pass < matched.length; pass++) {
if (idseq[pass].length > 1 && matched[pass].length$() > 0 ) {
matched[pass].append$S(this.separators[pass]);
}matched[pass].append$StringBuffer(thematches[pass]);
}
}seqsmatched++;
}}
if (seqsmatched == 0 || (createFullUrl && matched[0].length$() == 0 ) ) {
return null;
}if ((urllength + 32) > $I$(7).getMaxCommandLineLength$()) {
throw Clazz.new_($I$(8).c$$I, [this, null, urllength]);
}if (!createFullUrl) {
return Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [seqsmatched]), thismatched]);
}var submiturl=Clazz.new_($I$(6));
submiturl.append$S(this.url_prefix);
for (pass=0; pass < matched.length; pass++) {
submiturl.append$StringBuffer(matched[pass]);
if (this.url_suffix[pass] != null ) {
submiturl.append$S(this.url_suffix[pass]);
}}
return Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [seqsmatched]), thismatched, matched, Clazz.array(String, -1, [submiturl.toString()])]);
});

Clazz.newMeth(C$, 'getNumberInvolved$OA', function (urlstub) {
return (urlstub[0])[0];
});

Clazz.newMeth(C$, 'getGroupURLType$', function () {
var r=0;
for (var pass=0; pass < C$.tokens.length; pass++) {
for (var i=0; i < this.mtch.length; i++) {
if (this.mtch[i].equals$O(C$.tokens[pass])) {
r+=1 << pass;
}}
}
return r;
});

Clazz.newMeth(C$, 'toString', function () {
var result=Clazz.new_($I$(6));
result.append$S(this.label + "|" + this.url_prefix );
var r;
for (r=0; r < this.url_suffix.length; r++) {
result.append$S("$");
result.append$S(this.mtch[r]);
if (this.regexReplace[r] != null ) {
result.append$S("=/");
result.append$S(this.regexReplace[r]);
result.append$S("/=");
}result.append$S("$");
result.append$S(this.url_suffix[r]);
}
for (r=0; r < this.separators.length; r++) {
result.append$S("|");
result.append$S(this.separators[r]);
}
return result.toString();
});

Clazz.newMeth(C$, 'testUrls$jalview_util_GroupUrlLink$SAA$OA', function (ul, idstring, url) {
if (url == null ) {
System.out.println$S("Created NO urls.");
} else {
System.out.println$S("Created a url from " + (url[0])[0] + "out of " + idstring[0].length + " sequences." );
System.out.println$S("Sequences that did not match:");
for (var sq=0; sq < idstring[0].length; sq++) {
if (!(url[1])[sq]) {
System.out.println$S("Seq " + sq + ": " + idstring[0][sq] + "\t: " + idstring[1][sq] );
}}
System.out.println$S("Sequences that DID match:");
for (var sq=0; sq < idstring[0].length; sq++) {
if ((url[1])[sq]) {
System.out.println$S("Seq " + sq + ": " + idstring[0][sq] + "\t: " + idstring[1][sq] );
}}
System.out.println$S("The generated URL:");
System.out.println$S((url[3])[0]);
}}, 1);

Clazz.newMeth(C$, 'formStrings$jalview_datamodel_SequenceIA', function (seqs) {
var idset=Clazz.array(String, [2, seqs.length]);
for (var i=0; i < seqs.length; i++) {
idset[0][i]=seqs[i].getName$();
idset[1][i]=seqs[i].getSequenceAsString$();
}
return idset;
}, 1);

Clazz.newMeth(C$, 'setLabel$S', function (newlabel) {
this.label=newlabel;
});
;
(function(){var C$=Clazz.newClass(P$.GroupUrlLink, "UrlStringTooLongException", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.urlLength=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (lng) {
Clazz.super_(C$, this,1);
this.urlLength=lng;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "Generated url is estimated to be too long (" + this.urlLength + ")" ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
