(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Cache','java.io.BufferedReader','java.io.InputStreamReader','java.net.URL','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager','jalview.util.BrowserLauncher']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UserQuestionnaireCheck", null, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.url=null;
this.qid=null;
this.rid=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.url=null;
this.qid=null;
this.rid=null;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (url) {
C$.$init$.apply(this);
if (url.indexOf$S("questionnaire.pl") == -1) {
$I$(1).log.error$O("'" + url + "' is an Invalid URL for the checkForQuestionnaire() method.\n" + "This argument is only for questionnaires derived from jalview's questionnaire.pl cgi interface." );
} else {
this.url=url;
}}, 1);

Clazz.newMeth(C$, 'checkresponse$java_net_URL', function (qurl) {
$I$(1).log.debug$O("Checking Response for : " + qurl);
var prompt=false;
var br=Clazz.new_($I$(2).c$$java_io_Reader,[Clazz.new_($I$(3).c$$java_io_InputStream,[qurl.openStream$()])]);
var qresp;
while ((qresp=br.readLine$()) != null ){
if (qresp.indexOf$S("NOTYET:") == 0) {
prompt=true;
} else {
if (qresp.indexOf$S("QUESTIONNAIRE:") == 0) {
var p=qresp.indexOf$I$I(":", 14);
if (p > -1) {
this.rid=null;
this.qid=qresp.substring$I$I(14, p);
if (p < (qresp.length$() - 1)) {
this.rid=qresp.substring$I(p + 1);
prompt=true;
}}}}}
return prompt;
}, p$1);

Clazz.newMeth(C$, 'run$', function () {
if (this.url == null ) {
return;
}var prompt=false;
try {
var lastq=$I$(1).getProperty$S("QUESTIONNAIRE");
if (lastq == null ) {
prompt=p$1.checkresponse$java_net_URL.apply(this, [Clazz.new_($I$(4).c$$S,[this.url + (this.url.indexOf$I("?") > -1 ? "&" : "?") + "checkresponse=1" ])]);
} else {
var qurl=this.url + (this.url.indexOf$I("?") > -1 ? "&" : "?") + "checkresponse=1" ;
var qqid=lastq.indexOf$I(":") > -1 ? lastq.substring$I$I(0, lastq.indexOf$I(":")) : null;
if (qqid != null  && qqid != "null"  && qqid.length$() > 0 ) {
qurl += "&qid=" + qqid;
this.qid=qqid;
var qrid=lastq.substring$I(lastq.indexOf$I(":") + 1);
if (qrid != null  && !qrid.equals$O("null") ) {
this.rid=qrid;
qurl += "&rid=" + qrid;
}}prompt=p$1.checkresponse$java_net_URL.apply(this, [Clazz.new_($I$(4).c$$S,[qurl])]);
}if (this.qid != null  && this.rid != null  ) {
$I$(1).setProperty$S$S("QUESTIONNAIRE", this.qid + ":" + this.rid );
}if (prompt) {
var qurl=this.url + (this.url.indexOf$I("?") > -1 ? "&" : "?") + "qid=" + this.qid + "&rid=" + this.rid ;
$I$(1).log.info$O("Prompting user for questionnaire at " + qurl);
var reply=$I$(5).showInternalConfirmDialog$java_awt_Component$O$S$I$I($I$(6).desktop, $I$(7).getString$S("label.jalview_new_questionnaire"), $I$(7).getString$S("label.jalview_user_survey"), 0, 3);
if (reply == 0) {
$I$(1).log.debug$O("Opening " + qurl);
$I$(8).openURL$S(qurl);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).log.warn$O$Throwable("When trying to access questionnaire URL " + this.url, e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
