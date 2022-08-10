(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Console','java.io.BufferedReader','java.io.InputStreamReader','jalview.bin.Cache','java.net.URL','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager','jalview.util.BrowserLauncher']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UserQuestionnaireCheck", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.url=null;
this.qid=null;
this.rid=null;
},1);

C$.$fields$=[['S',['url','qid','rid']]]

Clazz.newMeth(C$, 'c$$S',  function (url) {
;C$.$init$.apply(this);
if (url.indexOf$S("questionnaire.pl") == -1) {
$I$(1,"error$S",["'" + url + "' is an Invalid URL for the checkForQuestionnaire() method.\n" + "This argument is only for questionnaires derived from jalview's questionnaire.pl cgi interface." ]);
} else {
this.url=url;
}}, 1);

Clazz.newMeth(C$, 'checkresponse$java_net_URL',  function (qurl) {
$I$(1).debug$S("Checking Response for : " + qurl);
var prompt=false;
var br=Clazz.new_([Clazz.new_([qurl.openStream$()],$I$(3,1).c$$java_io_InputStream)],$I$(2,1).c$$java_io_Reader);
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

Clazz.newMeth(C$, 'run$',  function () {
if (this.url == null ) {
return;
}var prompt=false;
try {
var lastq=$I$(4).getProperty$S("QUESTIONNAIRE");
if (lastq == null ) {
prompt=p$1.checkresponse$java_net_URL.apply(this, [Clazz.new_([this.url + (this.url.indexOf$I("?") > -1 ? "&" : "?") + "checkresponse=1" ],$I$(5,1).c$$S)]);
} else {
var qurl=this.url + (this.url.indexOf$I("?") > -1 ? "&" : "?") + "checkresponse=1" ;
var qqid=lastq.indexOf$I(":") > -1 ? lastq.substring$I$I(0, lastq.indexOf$I(":")) : null;
if (qqid != null  && qqid !== "null"   && qqid.length$() > 0 ) {
qurl+="&qid=" + qqid;
this.qid=qqid;
var qrid=lastq.substring$I(lastq.indexOf$I(":") + 1);
if (qrid != null  && !qrid.equals$O("null") ) {
this.rid=qrid;
qurl+="&rid=" + qrid;
}}prompt=p$1.checkresponse$java_net_URL.apply(this, [Clazz.new_($I$(5,1).c$$S,[qurl])]);
}if (this.qid != null  && this.rid != null  ) {
$I$(4).setProperty$S$S("QUESTIONNAIRE", this.qid + ":" + this.rid );
}if (prompt) {
var qurl=this.url + (this.url.indexOf$I("?") > -1 ? "&" : "?") + "qid=" + this.qid + "&rid=" + this.rid ;
$I$(1).info$S("Prompting user for questionnaire at " + qurl);
var reply=$I$(6,"showInternalConfirmDialog$java_awt_Component$O$S$I$I",[$I$(7).desktop, $I$(8).getString$S("label.jalview_new_questionnaire"), $I$(8).getString$S("label.jalview_user_survey"), 0, 3]);
if (reply == 0) {
$I$(1).debug$S("Opening " + qurl);
$I$(9).openURL$S(qurl);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).warn$S$Throwable("When trying to access questionnaire URL " + this.url, e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
