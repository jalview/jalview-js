(function(){var P$=Clazz.newPackage("jalview.ws.jws2.jabaws2"),I$=[[0,'java.util.HashMap','compbio.ws.client.Services','jalview.ws.jws2.AAConClient','jalview.ws.jws2.RNAalifoldClient','java.util.HashSet','jalview.ws.jws2.jabaws2.Jws2Instance']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jws2InstanceFactory");
C$.aaConGUI=null;
C$.ignoreGUI=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'category_rewrite$S', function (cat_name) {
return (cat_name != null  && cat_name.equals$O("Prediction") ) ? "Secondary Structure Prediction" : cat_name;
}, 1);

Clazz.newMeth(C$, 'init$', function () {
if (C$.aaConGUI == null ) {
C$.aaConGUI=Clazz.new_($I$(1));
C$.aaConGUI.put$TK$TV($I$(2).AAConWS.toString(), $I$(3).getAlignAnalysisUITest$());
C$.aaConGUI.put$TK$TV($I$(2).RNAalifoldWS.toString(), $I$(4).getAlignAnalysisUITest$());
C$.ignoreGUI=Clazz.new_($I$(5));
}}, 1);

Clazz.newMeth(C$, 'ignoreService$S', function (serviceType) {
C$.init$();
return (C$.ignoreGUI.contains$O(serviceType.toString()));
}, 1);

Clazz.newMeth(C$, 'newJws2Instance$S$S$S$S$compbio_data_msa_JABAService', function (jwsservers, serviceType, name, description, service) {
C$.init$();
var svc=Clazz.new_($I$(6).c$$S$S$S$S$compbio_data_msa_JABAService,[jwsservers, serviceType, C$.category_rewrite$S(name), description, service]);
svc.aaui=C$.aaConGUI.get$O(serviceType.toString());
return svc;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
