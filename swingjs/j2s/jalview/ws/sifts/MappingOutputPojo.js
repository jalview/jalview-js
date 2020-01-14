(function(){var P$=Clazz.newPackage("jalview.ws.sifts"),I$=[];
var C$=Clazz.newClass(P$, "MappingOutputPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seqName=null;
this.seqResidue=null;
this.seqStart=0;
this.seqEnd=0;
this.strName=null;
this.strResidue=null;
this.strStart=0;
this.strEnd=0;
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSeqName$', function () {
return this.seqName;
});

Clazz.newMeth(C$, 'setSeqName$S', function (seqName) {
this.seqName=(seqName.length$() > 30) ? seqName.substring$I$I(0, 30) : seqName;
});

Clazz.newMeth(C$, 'getSeqResidue$', function () {
return this.seqResidue;
});

Clazz.newMeth(C$, 'setSeqResidue$S', function (seqResidue) {
this.seqResidue=seqResidue;
});

Clazz.newMeth(C$, 'getSeqStart$', function () {
return this.seqStart;
});

Clazz.newMeth(C$, 'setSeqStart$I', function (seqStart) {
this.seqStart=seqStart;
});

Clazz.newMeth(C$, 'getSeqEnd$', function () {
return this.seqEnd;
});

Clazz.newMeth(C$, 'setSeqEnd$I', function (seqEnd) {
this.seqEnd=seqEnd;
});

Clazz.newMeth(C$, 'getStrName$', function () {
return this.strName;
});

Clazz.newMeth(C$, 'setStrName$S', function (strName) {
this.strName=(strName.length$() > 30) ? strName.substring$I$I(0, 30) : strName;
});

Clazz.newMeth(C$, 'getStrResidue$', function () {
return this.strResidue;
});

Clazz.newMeth(C$, 'setStrResidue$S', function (strResidue) {
this.strResidue=strResidue;
});

Clazz.newMeth(C$, 'getStrStart$', function () {
return this.strStart;
});

Clazz.newMeth(C$, 'setStrStart$I', function (strStart) {
this.strStart=strStart;
});

Clazz.newMeth(C$, 'getStrEnd$', function () {
return this.strEnd;
});

Clazz.newMeth(C$, 'setStrEnd$I', function (strEnd) {
this.strEnd=strEnd;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
