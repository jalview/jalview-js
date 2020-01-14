(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.awt.Color','jalview.util.Comparison','jalview.schemes.JalviewColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PIDColourScheme", null, 'jalview.schemes.ResidueColourScheme');
C$.pidColours=null;
C$.thresholds=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.pidColours=Clazz.array($I$(1), -1, [Clazz.new_($I$(1).c$$I$I$I,[100, 100, 255]), Clazz.new_($I$(1).c$$I$I$I,[153, 153, 255]), Clazz.new_($I$(1).c$$I$I$I,[204, 204, 255])]);
C$.thresholds=Clazz.array(Float.TYPE, -1, [80, 60, 40]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.group=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI$S$F', function (c, j, seq, consensusResidue, pid) {
if ("a" <= c && c <= "z" ) {
c = String.fromCharCode(c.$c()- (32));
}if (consensusResidue == null  || $I$(2).isGap$C(c) ) {
return $I$(1).white;
}var colour=$I$(1).white;
var matchesConsensus=consensusResidue.contains$CharSequence(String.valueOf$C(c));
if (matchesConsensus) {
for (var i=0; i < C$.thresholds.length; i++) {
if (pid > C$.thresholds[i] ) {
colour=C$.pidColours[i];
break;
}}
}return colour;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return $I$(3).PID.toString();
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'isSimple$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
