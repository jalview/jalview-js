(function(){var P$=Clazz.newPackage("jalview.ws.uimodel");
var C$=Clazz.newClass(P$, "AlignAnalysisUIText");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.serviceType=null;
this.client=null;
this.calcId=null;
this.AAconToggle=null;
this.AAconToggleTooltip=null;
this.AAeditSettings=null;
this.AAeditSettingsTooltip=null;
this.isNa=false;
this.isPr=false;
this.isAA=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getServiceType$', function () {
return this.serviceType;
});

Clazz.newMeth(C$, 'getCalcId$', function () {
return this.calcId;
});

Clazz.newMeth(C$, 'isNa$', function () {
return this.isNa;
});

Clazz.newMeth(C$, 'isPr$', function () {
return this.isPr;
});

Clazz.newMeth(C$, 'isAA$', function () {
return this.isAA;
});

Clazz.newMeth(C$, 'c$$S$Class$S$Z$Z$Z$S$S$S$S', function (serviceType, client, calcId, acceptNucl, acceptProt, acceptGaps, toggle, toggleTooltip, settings, settingsTooltip) {
C$.$init$.apply(this);
this.serviceType=serviceType;
this.calcId=calcId;
this.isNa=acceptNucl;
this.isPr=acceptProt;
this.isAA=acceptGaps;
this.client=client;
this.AAconToggle=toggle;
this.AAconToggleTooltip=toggleTooltip;
this.AAeditSettings=settings;
this.AAeditSettingsTooltip=settingsTooltip;
}, 1);

Clazz.newMeth(C$, 'getClient$', function () {
return this.client;
});

Clazz.newMeth(C$, 'setClient$Class', function (client) {
this.client=client;
});

Clazz.newMeth(C$, 'getAAconToggle$', function () {
return this.AAconToggle;
});

Clazz.newMeth(C$, 'setAAconToggle$S', function (aAconToggle) {
this.AAconToggle=aAconToggle;
});

Clazz.newMeth(C$, 'getAAconToggleTooltip$', function () {
return this.AAconToggleTooltip;
});

Clazz.newMeth(C$, 'setAAconToggleTooltip$S', function (aAconToggleTooltip) {
this.AAconToggleTooltip=aAconToggleTooltip;
});

Clazz.newMeth(C$, 'getAAeditSettings$', function () {
return this.AAeditSettings;
});

Clazz.newMeth(C$, 'setAAeditSettings$S', function (aAeditSettings) {
this.AAeditSettings=aAeditSettings;
});

Clazz.newMeth(C$, 'getAAeditSettingsTooltip$', function () {
return this.AAeditSettingsTooltip;
});

Clazz.newMeth(C$, 'setAAeditSettingsTooltip$S', function (aAeditSettingsTooltip) {
this.AAeditSettingsTooltip=aAeditSettingsTooltip;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
