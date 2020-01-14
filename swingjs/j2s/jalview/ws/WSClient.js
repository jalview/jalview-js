(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WSClient");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.WebServiceName=null;
this.WebServiceJobTitle=null;
this.WebServiceReference=null;
this.WsURL=null;
this.wsInfo=null;
this.jobsRunning=0;
this.ServiceActions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.jobsRunning=0;
{
this.ServiceActions=Clazz.new_($I$(1));
this.ServiceActions.put$TK$TV("MsaWS", "Multiple Sequence Alignment");
this.ServiceActions.put$TK$TV("SecStrPred", "Secondary Structure Prediction");
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
