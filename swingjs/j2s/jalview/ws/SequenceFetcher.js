(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'jalview.ext.ensembl.EnsemblGene','jalview.ws.dbsources.EmblSource','jalview.ws.dbsources.EmblCdsSource','jalview.ws.dbsources.Uniprot','jalview.ws.dbsources.Pdb','jalview.ws.dbsources.PfamFull','jalview.ws.dbsources.PfamSeed','jalview.ws.dbsources.RfamSeed','java.util.ArrayList','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceFetcher", null, 'jalview.ws.seqfetcher.ASequenceFetcher');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(1)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(2)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(3)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(4)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(5)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(6)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(7)));
this.addDBRefSourceImpl$Class(Clazz.getClass($I$(8)));
}, 1);

Clazz.newMeth(C$, 'getNonAlignmentSources$',  function () {
var srcs=this.getSupportedDb$();
var src=Clazz.new_($I$(9,1));
for (var i=0; i < srcs.length; i++) {
var accept=true;
for (var dbs, $dbs = this.getSourceProxy$S(srcs[i]).iterator$(); $dbs.hasNext$()&&((dbs=($dbs.next$())),1);) {
if (dbs.isAlignmentSource$()) {
accept=false;
break;
}}
if (accept) {
src.add$O(srcs[i]);
}}
$I$(10).sort$java_util_List$java_util_Comparator(src, String.CASE_INSENSITIVE_ORDER);
return src.toArray$OA(Clazz.array(String, [src.size$()]));
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
