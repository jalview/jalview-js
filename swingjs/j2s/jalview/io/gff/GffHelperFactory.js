(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.io.gff.ExonerateHelper','jalview.io.gff.InterProScanHelper','jalview.io.gff.Gff3Helper','jalview.io.gff.Gff2Helper']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GffHelperFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getHelper$SA',  function (gff) {
if (gff == null  || gff.length < 6 ) {
return null;
}var result=null;
if ($I$(1).recognises$SA(gff)) {
result=Clazz.new_($I$(1,1));
} else if ($I$(2).recognises$SA(gff)) {
result=Clazz.new_($I$(2,1));
} else if (C$.looksLikeGff3$SA(gff)) {
result=Clazz.new_($I$(3,1));
} else {
result=Clazz.new_($I$(4,1));
}return result;
}, 1);

Clazz.newMeth(C$, 'looksLikeGff3$SA',  function (gff) {
if (gff.length >= 9) {
var attributes=gff[8].trim$();
var pos1=attributes.indexOf$I(";");
var pos2=attributes.indexOf$I("=");
if (pos2 != -1 && (pos1 == -1 || pos2 < pos1 ) ) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
