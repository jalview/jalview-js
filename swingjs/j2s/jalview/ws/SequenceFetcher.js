(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'jalview.ext.ensembl.EnsemblGene','jalview.ws.dbsources.EmblSource','jalview.ws.dbsources.EmblCdsSource','jalview.ws.dbsources.Uniprot','jalview.ws.dbsources.Pdb','jalview.ws.dbsources.PfamFull','jalview.ws.dbsources.PfamSeed','jalview.ws.dbsources.RfamSeed','java.util.ArrayList','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceFetcher", null, 'jalview.ws.seqfetcher.ASequenceFetcher');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(1)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(2)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(3)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(4)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(5)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(6)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(7)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(8)));
}, 1);

Clazz.newMeth(C$, 'getNonAlignmentSources$', function () {
var srcs=this.getSupportedDb$();
var src=Clazz.new_($I$(9));
for (var i=0; i < srcs.length; i++) {
var accept=true;
for (var dbs, $dbs = this.getSourceProxy$S(srcs[i]).iterator$(); $dbs.hasNext$()&&((dbs=($dbs.next$())),1);) {
if (dbs.isAlignmentSource$()) {
accept=false;
break;
}}
if (accept) {
src.add$TE(srcs[i]);
}}
$I$(10).sort$java_util_List$java_util_Comparator(src, String.CASE_INSENSITIVE_ORDER);
return src.toArray$TTA(Clazz.array(String, [src.size$()]));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
