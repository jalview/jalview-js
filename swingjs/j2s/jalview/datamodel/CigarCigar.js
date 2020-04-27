(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CigarCigar", null, 'jalview.datamodel.CigarSimple');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['refCigar','jalview.datamodel.SeqCigar']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SeqCigar', function (cigar) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
