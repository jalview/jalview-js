(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'Thread','java.awt.image.BufferedImage','java.awt.Color','java.awt.Font','jalview.util.MessageManager','javax.swing.text.html.StyleSheet','javax.swing.JScrollPane','javax.swing.JEditorPane','javax.swing.JTextArea','java.util.Vector','javax.swing.JTabbedPane','javax.swing.JInternalFrame','jalview.gui.Desktop','jalview.gui.ProgressBar','java.awt.Toolkit','java.awt.MediaTracker',['jalview.gui.WebserviceInfo','.AnimatedPanel'],'javax.swing.event.InternalFrameAdapter','Error','javax.swing.SwingUtilities','jalview.gui.JvOptionPane','java.awt.GridLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WebserviceInfo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GWebserviceInfo', ['javax.swing.event.HyperlinkListener', 'jalview.gui.IProgressIndicator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.currentStatus=0;
this.image=null;
this.angle=0;
this.title=null;
this.thisService=null;
this.serviceIsCancellable=false;
this.frame=null;
this.progressBar=null;
this.subjobs=null;
this.jobPanes=null;
this.serviceCanMergeResults=false;
this.viewResultsImmediatly=false;
this.renderAsHtml=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentStatus=0;
this.angle=0;
this.title="";
this.subjobs=null;
this.jobPanes=null;
this.serviceCanMergeResults=false;
this.viewResultsImmediatly=true;
this.renderAsHtml=false;
}, 1);

Clazz.newMeth(C$, 'setVisible$Z', function (aFlag) {
C$.superclazz.prototype.setVisible$Z.apply(this, [aFlag]);
this.frame.setVisible$Z(aFlag);
});

Clazz.newMeth(C$, 'isViewResultsImmediatly$', function () {
return this.viewResultsImmediatly;
});

Clazz.newMeth(C$, 'setViewResultsImmediatly$Z', function (viewResultsImmediatly) {
this.viewResultsImmediatly=viewResultsImmediatly;
});

Clazz.newMeth(C$, 'getStyleSheet$javax_swing_text_html_HTMLEditorKit', function (editorKit) {
var myStyleSheet=Clazz.new_($I$(6));
myStyleSheet.addStyleSheet$javax_swing_text_html_StyleSheet(editorKit.getStyleSheet$());
editorKit.setStyleSheet$javax_swing_text_html_StyleSheet(myStyleSheet);
return myStyleSheet;
}, p$1);

Clazz.newMeth(C$, 'addJobPane$', function () {
var jobpane=Clazz.new_($I$(7));
var _progressText;
if (this.renderAsHtml) {
var progressText=Clazz.new_($I$(8).c$$S$S,["text/html", ""]);
progressText.addHyperlinkListener$javax_swing_event_HyperlinkListener(this);
_progressText=progressText;
progressText.setEditable$Z(false);
progressText.setText$S("<html><h1>WS Job</h1></html>");
} else {
var progressText=Clazz.new_($I$(9));
_progressText=progressText;
progressText.setFont$java_awt_Font(Clazz.new_($I$(4).c$$S$I$I,["Verdana", 0, 10]));
progressText.setBorder$javax_swing_border_Border(null);
progressText.setEditable$Z(false);
progressText.setText$S("WS Job");
progressText.setLineWrap$Z(true);
progressText.setWrapStyleWord$Z(true);
}jobpane.setName$S("JobPane");
jobpane.getViewport$().add$java_awt_Component$O(_progressText, null);
jobpane.setBorder$javax_swing_border_Border(null);
if (this.jobPanes == null ) {
this.jobPanes=Clazz.new_($I$(10));
}var newpane=this.jobPanes.size$();
this.jobPanes.add$TE(jobpane);
if (newpane == 0) {
this.add$java_awt_Component$O(jobpane, "Center");
} else {
if (newpane == 1) {
var firstpane;
this.remove$java_awt_Component(firstpane=this.jobPanes.get$I(0));
this.subjobs=Clazz.new_($I$(11));
this.add$java_awt_Component$O(this.subjobs, "Center");
this.subjobs.add$java_awt_Component(firstpane);
this.subjobs.setTitleAt$I$S(0, firstpane.getName$());
}this.subjobs.add$java_awt_Component(jobpane);
}return newpane;
});

Clazz.newMeth(C$, 'c$$S$S$Z', function (title, info, makeVisible) {
Clazz.super_(C$, this,1);
this.init$S$S$I$I$Z(title, info, 520, 500, makeVisible);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I$Z', function (title, info, width, height, makeVisible) {
Clazz.super_(C$, this,1);
this.init$S$S$I$I$Z(title, info, width, height, makeVisible);
}, 1);

Clazz.newMeth(C$, 'getthisService$', function () {
return this.thisService;
});

Clazz.newMeth(C$, 'setthisService$jalview_ws_WSClientI', function (newservice) {
this.thisService=newservice;
this.serviceIsCancellable=newservice.isCancellable$();
this.frame.setClosable$Z(!this.serviceIsCancellable);
this.serviceCanMergeResults=newservice.canMergeResults$();
p$1.rebuildButtonPanel.apply(this, []);
});

Clazz.newMeth(C$, 'rebuildButtonPanel', function () {
if (this.buttonPanel != null ) {
this.buttonPanel.removeAll$();
if (this.serviceIsCancellable) {
this.buttonPanel.add$java_awt_Component(this.cancel);
this.frame.setClosable$Z(false);
} else {
this.frame.setClosable$Z(true);
}}}, p$1);

Clazz.newMeth(C$, 'init$S$S$I$I$Z', function (title, info, width, height, makeVisible) {
this.frame=Clazz.new_($I$(12));
this.frame.setContentPane$java_awt_Container(this);
$I$(13).addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I(this.frame, title, makeVisible, width, height);
this.frame.setClosable$Z(false);
this.progressBar=Clazz.new_($I$(14).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]);
this.title=title;
this.setInfoText$S(info);
var url=this.getClass$().getResource$S("/images/Jalview_Logo_small.png");
this.image=$I$(15).getDefaultToolkit$().createImage$java_net_URL(url);
var mt=Clazz.new_($I$(16).c$$java_awt_Component,[this]);
mt.addImage$java_awt_Image$I(this.image, 0);
try {
mt.waitForID$I(0);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var ap=Clazz.new_($I$(17), [this, null]);
this.titlePanel.add$java_awt_Component$O(ap, "Center");
var thread=Clazz.new_($I$(1).c$$Runnable,[ap]);
thread.start$();
var thisinfo=this;
this.frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.WebserviceInfo$1||
(function(){var C$=Clazz.newClass(P$, "WebserviceInfo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
var service=this.$finals$.thisinfo.getthisService$();
if (service != null  && service.isCancellable$() ) {
service.cancelJob$();
}});
})()
), Clazz.new_($I$(18), [this, {thisinfo: thisinfo}],P$.WebserviceInfo$1)));
this.frame.validate$();
});

Clazz.newMeth(C$, 'setStatus$I', function (status) {
this.currentStatus=status;
});

Clazz.newMeth(C$, 'setStatus$I$I', function (jobpane, status) {
if (jobpane < 0 || jobpane >= this.jobPanes.size$() ) {
throw Clazz.new_($I$(19).c$$S,[$I$(5).formatMessage$S$SA("error.setstatus_called_non_existent_job_pane", Clazz.array(String, -1, [Integer.valueOf$I(jobpane).toString()]))]);
}switch (status) {
case 0:
this.setProgressName$S$I(jobpane + " - QUEUED", jobpane);
break;
case 1:
this.setProgressName$S$I(jobpane + " - RUNNING", jobpane);
break;
case 2:
this.setProgressName$S$I(jobpane + " - FINISHED", jobpane);
break;
case 3:
this.setProgressName$S$I(jobpane + " - CANCELLED", jobpane);
break;
case 4:
this.setProgressName$S$I(jobpane + " - BROKEN", jobpane);
break;
case 5:
this.setProgressName$S$I(jobpane + " - ALERT", jobpane);
break;
default:
this.setProgressName$S$I(jobpane + " - UNKNOWN STATE", jobpane);
}
});

Clazz.newMeth(C$, 'getInfoText$', function () {
return this.infoText.getText$();
});

Clazz.newMeth(C$, 'setInfoText$S', function (text) {
this.infoText.setText$S(text);
});

Clazz.newMeth(C$, 'appendInfoText$S', function (text) {
this.infoText.append$S(text);
});

Clazz.newMeth(C$, 'getProgressText$I', function (which) {
if (this.jobPanes == null ) {
this.addJobPane$();
}if (this.renderAsHtml) {
return ((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).getText$();
} else {
return ((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).getText$();
}});

Clazz.newMeth(C$, 'setProgressText$I$S', function (which, text) {
if (this.jobPanes == null ) {
this.addJobPane$();
}if (this.renderAsHtml) {
((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).setText$S(p$1.ensureHtmlTagged$S.apply(this, [text]));
} else {
((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).setText$S(text);
}});

Clazz.newMeth(C$, 'getHtmlFragment$S$Z$Z', function (text, leaveFirst, leaveLast) {
if (text == null ) {
return null;
}var lowertxt=text.toLowerCase$();
var htmlpos=leaveFirst ? -1 : lowertxt.indexOf$S("<body");
var htmlend=leaveLast ? -1 : lowertxt.indexOf$S("</body");
var htmlpose=lowertxt.indexOf$S$I(">", htmlpos);
var htmlende=lowertxt.indexOf$S$I(">", htmlend);
if (htmlend == -1 && htmlpos == -1 ) {
return text;
}if (htmlend > -1) {
return text.substring$I$I((htmlpos == -1 ? 0 : htmlpose + 1), htmlend);
}return text.substring$I(htmlpos == -1 ? 0 : htmlpose + 1);
}, p$1);

Clazz.newMeth(C$, 'ensureHtmlTagged$S', function (text) {
if (text == null ) {
return "";
}var lowertxt=text.toLowerCase$();
var htmlpos=lowertxt.indexOf$S("<body");
var htmlend=lowertxt.indexOf$S("</body");
var doctype=lowertxt.indexOf$S("<!doctype");
var xmltype=lowertxt.indexOf$S("<?xml");
if (htmlend == -1) {
text=text + "</body></html>";
}if (htmlpos > -1) {
if ((doctype > -1 && htmlpos > doctype ) || (xmltype > -1 && htmlpos > xmltype ) ) {
text="<html><head></head><body>\n" + text.substring$I(htmlpos - 1);
}} else {
text="<html><head></head><body>\n" + text;
}if (text.indexOf$S("<meta") > -1) {
System.err.println$S("HTML COntent: \n" + text + "<< END HTML CONTENT\n" );
}return text;
}, p$1);

Clazz.newMeth(C$, 'appendProgressText$I$S', function (which, text) {
if (this.jobPanes == null ) {
this.addJobPane$();
}if (this.renderAsHtml) {
var txt=p$1.getHtmlFragment$S$Z$Z.apply(this, [((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).getText$(), true, false]);
((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).setText$S(p$1.ensureHtmlTagged$S.apply(this, [txt + p$1.getHtmlFragment$S$Z$Z.apply(this, [text, false, true])]));
} else {
((this.jobPanes.get$I(which)).getViewport$().getComponent$I(0)).append$S(text);
}});

Clazz.newMeth(C$, 'setProgressText$S', function (text) {
this.setProgressText$I$S(0, text);
});

Clazz.newMeth(C$, 'appendProgressText$S', function (text) {
this.appendProgressText$I$S(0, text);
});

Clazz.newMeth(C$, 'getProgressText$', function () {
return this.getProgressText$I(0);
});

Clazz.newMeth(C$, 'getProgressName$I', function (which) {
if (this.jobPanes == null ) {
this.addJobPane$();
}if (this.subjobs != null ) {
return this.subjobs.getTitleAt$I(which);
} else {
return (this.jobPanes.get$I(which)).getViewport$().getComponent$I(0).getName$();
}});

Clazz.newMeth(C$, 'setProgressName$S$I', function (name, which) {
if (this.subjobs != null ) {
this.subjobs.setTitleAt$I$S(which, name);
this.subjobs.revalidate$();
this.subjobs.repaint$();
}var c=this.jobPanes.get$I(which);
c.getViewport$().getComponent$I(0).setName$S(name);
c.repaint$();
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (!this.serviceIsCancellable) {
this.warnUser$S$S($I$(5).getString$S("warn.job_cannot_be_cancelled_close_window"), $I$(5).getString$S("action.cancel_job"));
} else {
this.thisService.cancelJob$();
}this.frame.setClosable$Z(true);
});

Clazz.newMeth(C$, 'warnUser$S$S', function (message, title) {
$I$(20).invokeLater$Runnable(((P$.WebserviceInfo$2||
(function(){var C$=Clazz.newClass(P$, "WebserviceInfo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(21).showInternalMessageDialog$java_awt_Component$S$S$I($I$(13).desktop, this.$finals$.message, this.$finals$.title, 2);
});
})()
), Clazz.new_(P$.WebserviceInfo$2.$init$, [this, {message: message, title: title}])));
});

Clazz.newMeth(C$, 'setResultsReady$', function () {
this.frame.setClosable$Z(true);
this.buttonPanel.remove$java_awt_Component(this.cancel);
this.buttonPanel.add$java_awt_Component(this.showResultsNewFrame);
if (this.serviceCanMergeResults) {
this.buttonPanel.add$java_awt_Component(this.mergeResults);
this.buttonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22).c$$I$I$I$I,[2, 1, 5, 5]));
}this.buttonPanel.validate$();
this.validate$();
if (this.viewResultsImmediatly) {
this.showResultsNewFrame.doClick$();
}});

Clazz.newMeth(C$, 'setFinishedNoResults$', function () {
this.frame.setClosable$Z(true);
this.buttonPanel.remove$java_awt_Component(this.cancel);
this.buttonPanel.validate$();
this.validate$();
});

Clazz.newMeth(C$, 'setRenderAsHtml$Z', function (b) {
this.renderAsHtml=b;
});

Clazz.newMeth(C$, ['hyperlinkUpdate$javax_swing_event_HyperlinkEvent','hyperlinkUpdate$'], function (e) {
$I$(13).hyperlinkUpdate$javax_swing_event_HyperlinkEvent(e);
});

Clazz.newMeth(C$, 'setProgressBar$S$J', function (message, id) {
this.progressBar.setProgressBar$S$J(message, id);
});

Clazz.newMeth(C$, 'registerHandler$J$jalview_gui_IProgressIndicatorHandler', function (id, handler) {
this.progressBar.registerHandler$J$jalview_gui_IProgressIndicatorHandler(id, handler);
});

Clazz.newMeth(C$, 'operationInProgress$', function () {
return this.progressBar.operationInProgress$();
});
;
(function(){var C$=Clazz.newClass(P$.WebserviceInfo, "AnimatedPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.startTime=0;
this.offscreen=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.startTime=0;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.startTime=System.currentTimeMillis$();
while (this.this$0.currentStatus < 2){
try {
$I$(1).sleep$J(50);
var units=(((System.currentTimeMillis$() - this.startTime) / 10.0)|0);
this.this$0.angle+=units;
this.this$0.angle%=360;
this.startTime=System.currentTimeMillis$();
if (this.this$0.currentStatus >= 2) {
this.this$0.angle=0;
}this.repaint$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
this.this$0.cancel.setEnabled$Z(false);
});

Clazz.newMeth(C$, 'drawPanel$', function () {
if (this.offscreen == null  || this.offscreen.getWidth$java_awt_image_ImageObserver(this) != this.getWidth$()  || this.offscreen.getHeight$java_awt_image_ImageObserver(this) != this.getHeight$() ) {
this.offscreen=Clazz.new_($I$(2).c$$I$I$I,[this.getWidth$(), this.getHeight$(), 2]);
}var g=this.offscreen.getGraphics$();
g.setColor$java_awt_Color($I$(3).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setFont$java_awt_Font(Clazz.new_($I$(4).c$$S$I$I,["Arial", 1, 12]));
g.setColor$java_awt_Color($I$(3).black);
switch (this.this$0.currentStatus) {
case 0:
g.drawString$S$I$I(this.this$0.title.concat$S(" - ").concat$S($I$(5).getString$S("label.state_queueing")), 60, 30);
break;
case 1:
g.drawString$S$I$I(this.this$0.title.concat$S(" - ").concat$S($I$(5).getString$S("label.state_running")), 60, 30);
break;
case 2:
g.drawString$S$I$I(this.this$0.title.concat$S(" - ").concat$S($I$(5).getString$S("label.state_completed")), 60, 30);
break;
case 3:
g.drawString$S$I$I(this.this$0.title.concat$S(" - ").concat$S($I$(5).getString$S("label.state_job_cancelled")), 60, 30);
break;
case 4:
g.drawString$S$I$I(this.this$0.title.concat$S(" - ").concat$S($I$(5).getString$S("label.state_job_error")), 60, 30);
break;
case 5:
g.drawString$S$I$I(this.this$0.title.concat$S(" - ").concat$S($I$(5).getString$S("label.server_error_try_later")), 60, 30);
break;
}
if (this.this$0.image != null ) {
var x=(this.this$0.image.getWidth$java_awt_image_ImageObserver(this)/2|0);
var y=(this.this$0.image.getHeight$java_awt_image_ImageObserver(this)/2|0);
g.rotate$D$D$D(Math.toRadians(this.this$0.angle), 10 + x, 10 + y);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.this$0.image, 10, 10, this);
g.rotate$D$D$D(-Math.toRadians(this.this$0.angle), 10 + x, 10 + y);
}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g1) {
this.drawPanel$();
g1.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offscreen, 0, 0, this);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
