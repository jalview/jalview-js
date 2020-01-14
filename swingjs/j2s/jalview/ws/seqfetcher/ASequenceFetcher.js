(function(){var P$=Clazz.newPackage("jalview.ws.seqfetcher"),I$=[[0,'jalview.bin.Cache','java.util.Vector','java.util.Hashtable','jalview.util.DBRefUtils','java.util.ArrayList','java.util.Stack','java.util.HashSet','StringBuffer','jalview.datamodel.DBRefEntry','jalview.datamodel.SequenceI','java.util.Collections','Error','jalview.util.MessageManager','jalview.ws.seqfetcher.DbSourceProxy']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ASequenceFetcher");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fetchableDbs=null;
this.proxyComparator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.proxyComparator=((P$.ASequenceFetcher$1||
(function(){var C$=Clazz.newClass(P$, "ASequenceFetcher$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_ws_seqfetcher_DbSourceProxy$jalview_ws_seqfetcher_DbSourceProxy','compare$','compare$TT$TT'], function (o1, o2) {
var compared=Integer.compare$I$I(o1.getTier$(), o2.getTier$());
if (compared == 0) {
var o1Name=o1.getDbName$();
var o2Name=o2.getDbName$();
if (o1Name != null  && o2Name != null  ) {
compared=o1Name.compareToIgnoreCase$S(o2Name);
}}return compared;
});
})()
), Clazz.new_(P$.ASequenceFetcher$1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'getSupportedDb$', function () {
if (this.fetchableDbs == null ) {
return null;
}var sf=this.fetchableDbs.keySet$().toArray$TTA(Clazz.array(String, [this.fetchableDbs.size$()]));
return sf;
});

Clazz.newMeth(C$, 'isFetchable$S', function (source) {
for (var db, $db = this.fetchableDbs.keySet$().iterator$(); $db.hasNext$()&&((db=($db.next$())),1);) {
if (source.equalsIgnoreCase$S(db)) {
return true;
}}
$I$(1).log.warn$O("isFetchable doesn't know about '" + source + "'" );
return false;
});

Clazz.newMeth(C$, 'getSequences$java_util_List$Z', function (refs, dna) {
var rseqs=Clazz.new_($I$(2));
var queries=Clazz.new_($I$(3));
for (var ref, $ref = refs.iterator$(); $ref.hasNext$()&&((ref=($ref.next$())),1);) {
var canonical=$I$(4).getCanonicalName$S(ref.getSource$());
if (!queries.containsKey$O(canonical)) {
queries.put$TK$TV(canonical, Clazz.new_($I$(5)));
}var qset=queries.get$O(canonical);
if (!qset.contains$O(ref.getAccessionId$())) {
qset.add$TE(ref.getAccessionId$());
}}
var e=queries.keys$();
while (e.hasMoreElements$()){
var query=null;
var db=null;
db=e.nextElement$();
query=queries.get$O(db);
if (!this.isFetchable$S(db)) {
this.reportStdError$S$java_util_List$Exception(db, query, Clazz.new_(Clazz.load('Exception').c$$S,["Don't know how to fetch from this database :" + db]));
continue;
}var queriesLeft=Clazz.new_($I$(6));
queriesLeft.addAll$java_util_Collection(query);
var proxies=this.getSourceProxy$S(db);
for (var fetcher, $fetcher = proxies.iterator$(); $fetcher.hasNext$()&&((fetcher=($fetcher.next$())),1);) {
var queriesMade=Clazz.new_($I$(5));
var queriesFound=Clazz.new_($I$(7));
try {
if (fetcher.isDnaCoding$() != dna ) {
continue;
}var doMultiple=fetcher.getMaximumQueryCount$() > 1;
while (!queriesLeft.isEmpty$()){
var qsb=Clazz.new_($I$(8));
do {
if (qsb.length$() > 0) {
qsb.append$S(fetcher.getAccessionSeparator$());
}var q=queriesLeft.pop$();
queriesMade.add$TE(q);
qsb.append$S(q);
} while (doMultiple && !queriesLeft.isEmpty$() );
var seqset=null;
try {
seqset=fetcher.getSequenceRecords$S(qsb.toString());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Failed to retrieve the following from " + db);
System.err.println$O(qsb);
ex.printStackTrace$java_io_PrintStream(System.err);
} else {
throw ex;
}
}
if (seqset != null ) {
var seqs=seqset.getSequencesArray$();
if (seqs != null ) {
for (var is=0; is < seqs.length; is++) {
rseqs.addElement$TE(seqs[is]);
var frefs=$I$(4).searchRefs$java_util_List$jalview_datamodel_DBRefEntry$I(seqs[is].getDBRefs$(), Clazz.new_($I$(9).c$$S$S$S,[db, null, null]), 15);
for (var dbr, $dbr = frefs.iterator$(); $dbr.hasNext$()&&((dbr=($dbr.next$())),1);) {
queriesFound.add$TE(dbr.getAccessionId$());
queriesMade.remove$O(dbr.getAccessionId$());
}
seqs[is]=null;
}
} else {
if (fetcher.getRawRecords$() != null ) {
System.out.println$S("# Retrieved from " + db + ":" + qsb.toString() );
var rrb=fetcher.getRawRecords$();
var hdr;
hdr="# " + db + ":" + qsb.toString() ;
System.out.println$S(hdr);
if (rrb != null ) {
System.out.println$O(rrb);
}System.out.println$S("# end of " + hdr);
}}}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.reportStdError$S$java_util_List$Exception(db, queriesMade, ex);
} else {
throw ex;
}
}
if (queriesMade.size$() > 0) {
System.out.println$S("# Adding " + queriesMade.size$() + " ids back to queries list for searching again (" + db + ")" );
queriesLeft.addAll$java_util_Collection(queriesMade);
}}
}
var result=null;
if (rseqs.size$() > 0) {
result=Clazz.array($I$(10), [rseqs.size$()]);
var si=0;
for (var s, $s = rseqs.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
result[si++]=s;
s.updatePDBIds$();
}
}return result;
});

Clazz.newMeth(C$, 'reportStdError$S$java_util_List$Exception', function (db, queriesMade, ex) {
System.err.println$S("Failed to retrieve the following references from " + db);
var n=0;
for (var qv, $qv = queriesMade.iterator$(); $qv.hasNext$()&&((qv=($qv.next$())),1);) {
System.err.print$S(" " + qv + ";" );
if (n++ > 10) {
System.err.println$();
n=0;
}}
System.err.println$();
ex.printStackTrace$();
});

Clazz.newMeth(C$, 'getSourceProxy$S', function (db) {
db=$I$(4).getCanonicalName$S(db);
var dblist=this.fetchableDbs.get$O(db);
if (dblist == null ) {
return Clazz.new_($I$(5));
}var dbs=Clazz.new_($I$(5).c$$java_util_Collection,[dblist.values$()]);
$I$(11).sort$java_util_List$java_util_Comparator(dbs, this.proxyComparator);
return dbs;
});

Clazz.newMeth(C$, 'addDBRefSourceImpl$Class', function (dbSourceProxy) {
var proxy=null;
try {
var proxyObj=dbSourceProxy.getConstructor$ClassA([]).newInstance$OA([]);
proxy=proxyObj;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
throw e;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
throw Clazz.new_($I$(12).c$$S$Throwable,[$I$(13).getString$S("error.dbrefsource_implementation_exception"), e]);
}
} else {
throw e$$;
}
}
this.addDbRefSourceImpl$jalview_ws_seqfetcher_DbSourceProxy(proxy);
});

Clazz.newMeth(C$, 'addDbRefSourceImpl$jalview_ws_seqfetcher_DbSourceProxy', function (proxy) {
if (proxy != null ) {
if (this.fetchableDbs == null ) {
this.fetchableDbs=Clazz.new_($I$(3));
}var slist=this.fetchableDbs.get$O(proxy.getDbSource$());
if (slist == null ) {
this.fetchableDbs.put$TK$TV(proxy.getDbSource$(), slist=Clazz.new_($I$(3)));
}slist.put$TK$TV(proxy.getDbName$(), proxy);
}});

Clazz.newMeth(C$, 'getDbInstances$Class', function (class1) {
if (!Clazz.getClass($I$(14),['getAccessionIdFromQuery$S','getAccessionSeparator$','getAccessionValidator$','getDbName$','getDbSource$','getDbVersion$','getDescription$','getFeatureColourScheme$','getMaximumQueryCount$','getRawRecords$','getSequenceRecords$S','getTestQuery$','getTier$','isAlignmentSource$','isDnaCoding$','isValidReference$S','queryInProgress$']).isAssignableFrom$Class(class1)) {
throw Clazz.new_($I$(12).c$$S,[$I$(13).formatMessage$S$SA("error.implementation_error_dbinstance_must_implement_interface", Clazz.array(String, -1, [class1.toString()]))]);
}if (this.fetchableDbs == null ) {
return null;
}var sources=null;
var src=Clazz.new_($I$(2));
var dbs=this.fetchableDbs.keys$();
while (dbs.hasMoreElements$()){
var dbn=dbs.nextElement$();
for (var dbp, $dbp = this.fetchableDbs.get$O(dbn).values$().iterator$(); $dbp.hasNext$()&&((dbp=($dbp.next$())),1);) {
if (class1.isAssignableFrom$Class(dbp.getClass$())) {
src.addElement$TE(dbn);
}}
}
if (src.size$() > 0) {
src.copyInto$OA(sources=Clazz.array(String, [src.size$()]));
}return sources;
});

Clazz.newMeth(C$, 'getDbSourceProxyInstances$Class', function (class1) {
var prlist=Clazz.new_($I$(5));
for (var fetchable, $fetchable = 0, $$fetchable = this.getSupportedDb$(); $fetchable<$$fetchable.length&&((fetchable=($$fetchable[$fetchable])),1);$fetchable++) {
for (var pr, $pr = this.getSourceProxy$S(fetchable).iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
if (class1.isInstance$O(pr)) {
prlist.add$TE(pr);
}}
}
if (prlist.size$() == 0) {
return null;
}return prlist.toArray$TTA(Clazz.array($I$(14), [0]));
});

Clazz.newMeth(C$, 'getFeatureColourScheme$S', function (source) {
for (var proxy, $proxy = this.getSourceProxy$S(source).iterator$(); $proxy.hasNext$()&&((proxy=($proxy.next$())),1);) {
var preferredColours=proxy.getFeatureColourScheme$();
if (preferredColours != null ) {
return preferredColours;
}}
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
