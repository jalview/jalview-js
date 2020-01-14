(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'java.util.ArrayList','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.svid=null;
this.seqs=null;
this.alignAnnotation=null;
this.seqGroups=null;
this.seqFeatures=null;
this.colourScheme=null;
this.appSettings=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.svid="1.0";
this.seqs=Clazz.new_($I$(1));
this.alignAnnotation=Clazz.new_($I$(1));
this.seqGroups=Clazz.new_($I$(1));
this.seqFeatures=Clazz.new_($I$(1));
this.appSettings=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSeqs$', function () {
return this.seqs;
});

Clazz.newMeth(C$, 'setSeqs$java_util_ArrayList', function (seqs) {
this.seqs=seqs;
});

Clazz.newMeth(C$, 'getAppSettings$', function () {
return this.appSettings;
});

Clazz.newMeth(C$, 'setAppSettings$java_util_Map', function (appSettings) {
this.appSettings=appSettings;
});

Clazz.newMeth(C$, 'getAlignAnnotation$', function () {
return this.alignAnnotation;
});

Clazz.newMeth(C$, 'setAlignAnnotation$java_util_List', function (alignAnnotation) {
this.alignAnnotation=alignAnnotation;
});

Clazz.newMeth(C$, 'getSeqGroups$', function () {
return this.seqGroups;
});

Clazz.newMeth(C$, 'setSeqGroups$java_util_List', function (seqGroups) {
this.seqGroups=seqGroups;
});

Clazz.newMeth(C$, 'getSeqFeatures$', function () {
return this.seqFeatures;
});

Clazz.newMeth(C$, 'setSeqFeatures$java_util_List', function (seqFeatures) {
this.seqFeatures=seqFeatures;
});

Clazz.newMeth(C$, 'getSvid$', function () {
return this.svid;
});

Clazz.newMeth(C$, 'setGlobalColorScheme$S', function (globalColorScheme) {
this.appSettings.put$TK$TV("globalColorScheme", globalColorScheme);
});

Clazz.newMeth(C$, 'getColourScheme$', function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S', function (colourScheme) {
this.colourScheme=colourScheme;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
