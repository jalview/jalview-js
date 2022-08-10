(function(){var P$=Clazz.newPackage("jalview.ws.jws2.jabaws2"),I$=[[0,'java.util.HashMap','compbio.ws.client.Services','jalview.ws.jws2.AAConClient','jalview.ws.jws2.RNAalifoldClient','java.util.HashSet','jalview.ws.jws2.jabaws2.Jws2Instance']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Jws2InstanceFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['aaConGUI','java.util.HashMap','ignoreGUI','java.util.HashSet']]]

Clazz.newMeth(C$, 'category_rewrite$S',  function (cat_name) {
return (cat_name != null  && cat_name.equals$O("Prediction") ) ? "Secondary Structure Prediction" : cat_name;
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
if (C$.aaConGUI == null ) {
C$.aaConGUI=Clazz.new_($I$(1,1));
C$.aaConGUI.put$O$O($I$(2).AAConWS.toString(), $I$(3).getAlignAnalysisUITest$());
C$.aaConGUI.put$O$O($I$(2).RNAalifoldWS.toString(), $I$(4).getAlignAnalysisUITest$());
C$.ignoreGUI=Clazz.new_($I$(5,1));
}}, 1);

Clazz.newMeth(C$, 'ignoreService$S',  function (serviceType) {
C$.init$();
return (C$.ignoreGUI.contains$O(serviceType.toString()));
}, 1);

Clazz.newMeth(C$, 'newJws2Instance$S$S$S$S$compbio_data_msa_JABAService',  function (jwsservers, serviceType, name, description, service) {
C$.init$();
var svc=Clazz.new_([jwsservers, serviceType, C$.category_rewrite$S(name), description, service],$I$(6,1).c$$S$S$S$S$compbio_data_msa_JABAService);
svc.aaui=C$.aaConGUI.get$O(serviceType.toString());
return svc;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
