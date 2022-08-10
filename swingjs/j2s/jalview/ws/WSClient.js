(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WSClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jobsRunning=0;
{
this.ServiceActions=Clazz.new_($I$(1,1));
this.ServiceActions.put$O$O("MsaWS", "Multiple Sequence Alignment");
this.ServiceActions.put$O$O("SecStrPred", "Secondary Structure Prediction");
}
},1);

C$.$fields$=[['I',['jobsRunning'],'S',['WebServiceName','WebServiceJobTitle','WebServiceReference','WsURL'],'O',['wsInfo','jalview.gui.WebserviceInfo','ServiceActions','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
