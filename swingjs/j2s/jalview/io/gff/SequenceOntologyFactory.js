(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.io.gff.SequenceOntologyLite']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceOntologyFactory");
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_($I$(1));
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'setInstance$jalview_io_gff_SequenceOntologyI', function (so) {
C$.instance=so;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
