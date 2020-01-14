(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "CigarCigar", null, 'jalview.datamodel.CigarSimple');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.refCigar=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SeqCigar', function (cigar) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.refCigar=cigar;
}, 1);

Clazz.newMeth(C$, 'getSequenceString$C', function (GapChar) {
if (this.length == 0) {
return "";
}var refString=this.refCigar.getSequenceString$C(GapChar);
if (refString != null ) {
return (this.length == 0) ? "" : this.getSequenceAndDeletions$S$C(refString, GapChar)[0];
} else {
return null;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
