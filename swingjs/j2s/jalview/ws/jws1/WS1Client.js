(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),I$=[[0,'jalview.gui.WebserviceInfo','Error','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WS1Client", null, 'jalview.ws.WSClient', 'jalview.ws.WSMenuEntryProviderI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.serviceHandle=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.serviceHandle=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setWebService$ext_vamsas_ServiceHandle', function (sh) {
return this.setWebService$ext_vamsas_ServiceHandle$Z(sh, false);
});

Clazz.newMeth(C$, 'setWebService$ext_vamsas_ServiceHandle$Z', function (sh, headless) {
this.WebServiceName=sh.getName$();
if (this.ServiceActions.containsKey$O(sh.getAbstractName$())) {
this.WebServiceJobTitle=sh.getName$();
} else {
this.WebServiceJobTitle=sh.getAbstractName$() + " using " + sh.getName$() ;
}this.WebServiceReference=sh.getDescription$();
this.WsURL=sh.getEndpointURL$();
var wsInfo=null;
if (!headless) {
wsInfo=Clazz.new_($I$(1).c$$S$S$Z,[this.WebServiceJobTitle, this.WebServiceReference, true]);
}return wsInfo;
});

Clazz.newMeth(C$, ['attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame','attachWSMenuEntry$'], function (wsmenu, alignFrame) {
if (this.serviceHandle == null ) {
throw Clazz.new_($I$(2).c$$S,[$I$(3).getString$S("error.implementation_error_cannot_attach_ws_menu_entry")]);
}this.attachWSMenuEntry$javax_swing_JMenu$ext_vamsas_ServiceHandle$jalview_gui_AlignFrame(wsmenu, this.serviceHandle, alignFrame);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
