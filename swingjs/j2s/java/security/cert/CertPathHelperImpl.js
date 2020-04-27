(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.provider.certpath.CertPathHelper']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertPathHelperImpl", null, 'sun.security.provider.certpath.CertPathHelper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'initialize$', function () {
if ($I$(1).instance == null ) {
$I$(1).instance=Clazz.new_(C$);
}}, 1);

Clazz.newMeth(C$, 'implSetPathToNames$java_security_cert_X509CertSelector$java_util_Set', function (sel, names) {
sel.setPathToNamesInternal$java_util_Set(names);
});

Clazz.newMeth(C$, 'implSetDateAndTime$java_security_cert_X509CRLSelector$java_util_Date$J', function (sel, date, skew) {
sel.setDateAndTime$java_util_Date$J(date, skew);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
