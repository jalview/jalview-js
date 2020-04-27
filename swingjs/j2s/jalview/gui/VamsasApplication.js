(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'uk.ac.vamsas.client.simpleclient.SimpleClientFactory','Error','jalview.util.MessageManager','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.bin.Cache','uk.ac.vamsas.client.ClientHandle','Thread','jalview.io.VamsasAppDatastore','java.util.IdentityHashMap','java.util.Hashtable','uk.ac.vamsas.objects.core.Entry','java.util.Date','jalview.structure.StructureSelectionManager','jalview.datamodel.Alignment','jalview.datamodel.Sequence','jalview.datamodel.SequenceGroup','uk.ac.vamsas.objects.utils.Range','jalview.datamodel.ColumnSelection','uk.ac.vamsas.client.picking.MouseOverMessage','uk.ac.vamsas.client.picking.SelectionMessage','uk.ac.vamsas.objects.core.Input','uk.ac.vamsas.objects.core.Pos','uk.ac.vamsas.objects.core.Seg']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VamsasApplication", null, null, ['jalview.structure.SelectionSource', 'jalview.structure.VamsasSource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vclient=null;
this.app=null;
this.user=null;
this.jdesktop=null;
this.inInitialUpdate=true;
this.promptUser=true;
this.firstUpdate=false;
this.jv2vobj=null;
this.vobj2jv=null;
this.alRedoState=null;
this.errorsDuringUpdate=false;
this.errorsDuringAppUpdate=false;
this.joinedSession=false;
this.picker=null;
},1);

C$.$fields$=[['Z',['inInitialUpdate','promptUser','firstUpdate','errorsDuringUpdate','errorsDuringAppUpdate','joinedSession'],'O',['vclient','uk.ac.vamsas.client.IClient','app','uk.ac.vamsas.client.ClientHandle','user','uk.ac.vamsas.client.UserHandle','jdesktop','jalview.gui.Desktop','jv2vobj','java.util.IdentityHashMap','vobj2jv','java.util.Hashtable','+alRedoState','+_backup_vobj2jv','_backup_jv2vobj','java.util.IdentityHashMap','picker','jalview.structure.VamsasListener','selecter','jalview.structure.SelectionListener']]]

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop$java_io_File$S', function (jdesktop, sessionPath, sessionName) {
;C$.$init$.apply(this);
this.jdesktop=jdesktop;
p$1.initClientSession$S$java_io_File$S.apply(this, [null, sessionPath, sessionName]);
}, 1);

Clazz.newMeth(C$, 'getClientFactory$', function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop', function (jdesktop) {
;C$.$init$.apply(this);
this.jdesktop=jdesktop;
p$1.initClientSession$S$java_io_File.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop$S', function (jdesktop, sessionUrl) {
;C$.$init$.apply(this);
this.jdesktop=jdesktop;
p$1.initClientSession$S$java_io_File.apply(this, [sessionUrl, null]);
}, 1);

Clazz.newMeth(C$, 'getSessionList$', function () {
return C$.getClientFactory$().getCurrentSessions$();
}, 1);

Clazz.newMeth(C$, 'initClientSession$S$java_io_File', function (sess, vamsasDocument) {
p$1.initClientSession$S$java_io_File$S.apply(this, [sess, vamsasDocument, null]);
}, p$1);

Clazz.newMeth(C$, 'initClientSession$S$java_io_File$S', function (sess, vamsasDocument, newDocSessionName) {
try {
this.app=p$1.getJalviewHandle.apply(this, []);
var clientfactory=C$.getClientFactory$();
if (vamsasDocument != null ) {
if (sess != null ) {
throw Clazz.new_([$I$(3).getString$S("error.implementation_error_cannot_import_vamsas_doc")],$I$(2,1).c$$S);
}try {
if (newDocSessionName != null ) {
this.vclient=clientfactory.openAsNewSessionIClient$uk_ac_vamsas_client_ClientHandle$java_io_File$S(this.app, vamsasDocument, newDocSessionName);
} else {
this.vclient=clientfactory.openAsNewSessionIClient$uk_ac_vamsas_client_ClientHandle$java_io_File(this.app, vamsasDocument);
}} catch (e) {
if (Clazz.exceptionOf(e,"uk.ac.vamsas.client.InvalidSessionDocumentException")){
$I$(4,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(5).desktop, $I$(3).getString$S("label.vamsas_doc_couldnt_be_opened_as_new_session"), $I$(3).getString$S("label.vamsas_document_import_failed"), 0]);
} else {
throw e;
}
}
} else {
if (sess == null ) {
this.vclient=clientfactory.getNewSessionIClient$uk_ac_vamsas_client_ClientHandle(this.app);
} else {
this.vclient=clientfactory.getIClient$uk_ac_vamsas_client_ClientHandle$S(this.app, sess);
}}p$1.setVclientConfig.apply(this, []);
this.user=this.vclient.getUserHandle$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Couldn\'t instantiate vamsas client !", e);
return false;
} else {
throw e;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'setVclientConfig', function () {
if (this.vclient == null ) {
return;
}try {
if (Clazz.instanceOf(this.vclient, "uk.ac.vamsas.client.simpleclient.SimpleClient")) {
var cfg=(this.vclient).getSimpleClientConfig$();
cfg._validatemergedroots=false;
cfg._validateupdatedroots=true;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
$I$(6).log.warn$O$Throwable("Probable SERIOUS VAMSAS client incompatibility - carrying on regardless", e);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(6).log.warn$O$Throwable("Probable VAMSAS client incompatibility - carrying on regardless", e);
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'getJalviewHandle', function () {
return Clazz.new_(["jalview.bin.Jalview", $I$(6).getProperty$S("VERSION")],$I$(7,1).c$$S$S);
}, p$1);

Clazz.newMeth(C$, 'inSession$', function () {
return (this.vclient != null );
});

Clazz.newMeth(C$, 'initial_update$', function () {
if (!this.inSession$()) {
throw Clazz.new_([$I$(3).getString$S("error.implementation_error_vamsas_operation_not_init")],$I$(2,1).c$$S);
}p$1.addDocumentUpdateHandler.apply(this, []);
p$1.addStoreDocumentHandler.apply(this, []);
p$1.startSession.apply(this, []);
this.inInitialUpdate=true;
$I$(6).log.debug$O("Jalview loading the Vamsas Session for the first time.");
this.dealWithDocumentUpdate$Z(false);
this.inInitialUpdate=false;
$I$(6).log.debug$O("... finished update for the first time.");
});

Clazz.newMeth(C$, 'updateJalviewGui$', function () {
var frames=this.jdesktop.getAllFrames$();
if (frames == null ) {
return;
}try {
for (var i=frames.length - 1; i > -1; i--) {
if (Clazz.instanceOf(frames[i], "jalview.gui.AlignFrame")) {
var af=frames[i];
af.alignPanel.alignmentChanged$();
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.warn$O$Throwable("Exception whilst refreshing jalview windows after a vamsas document update.", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'push_update$', function () {
var udthread=Clazz.new_([((P$.VamsasApplication$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasApplication$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
$I$(6).log.info$O("Jalview updating to the Vamsas Session.");
this.b$['jalview.gui.VamsasApplication'].dealWithDocumentUpdate$Z.apply(this.b$['jalview.gui.VamsasApplication'], [true]);
$I$(6).log.info$O("Jalview finished updating to the Vamsas Session.");
});
})()
), Clazz.new_(P$.VamsasApplication$1.$init$,[this, null]))],$I$(8,1).c$$Runnable);
udthread.start$();
});

Clazz.newMeth(C$, 'end_session$', function () {
this.end_session$Z(true);
});

Clazz.newMeth(C$, 'end_session$Z', function (promptUser) {
if (!this.inSession$()) {
throw Clazz.new_([$I$(3).getString$S("error.jalview_no_connected_vamsas_session")],$I$(2,1).c$$S);
}$I$(6).log.info$O("Jalview disconnecting from the Vamsas Session.");
try {
if (this.joinedSession) {
var ourprompt=this.promptUser;
this.promptUser=promptUser;
this.vclient.finalizeClient$();
$I$(6).log.info$O("Jalview has left the session.");
this.promptUser=ourprompt;
} else {
$I$(6).log.warn$O("JV Client leaving a session that\'s its not joined yet.");
}this.joinedSession=false;
this.vclient=null;
this.app=null;
this.user=null;
this.jv2vobj=null;
this.vobj2jv=null;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Vamsas Session finalization threw exceptions!", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'updateJalview$uk_ac_vamsas_client_IClientDocument', function (cdoc) {
$I$(6).log.debug$O("Jalview updating from sesion document ..");
p$1.ensureJvVamsas.apply(this, []);
var vds=Clazz.new_([cdoc, this.vobj2jv, this.jv2vobj, p$1.baseProvEntry.apply(this, []), this.alRedoState],$I$(9,1).c$$uk_ac_vamsas_client_IClientDocument$java_util_Hashtable$java_util_IdentityHashMap$uk_ac_vamsas_objects_core_Entry$java_util_Hashtable);
try {
vds.updateToJalview$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Failed to update Jalview from vamsas document.", e);
} else {
throw e;
}
}
try {
if (this.firstUpdate) {
vds.updateJalviewFromAppdata$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Exception when updating Jalview settings from Appdata.", e);
} else {
throw e;
}
}
$I$(6).log.debug$O(".. finished updating from sesion document.");
});

Clazz.newMeth(C$, 'ensureJvVamsas', function () {
if (this.jv2vobj == null ) {
this.jv2vobj=Clazz.new_($I$(10,1));
this.vobj2jv=Clazz.new_($I$(11,1));
this.alRedoState=Clazz.new_($I$(11,1));
this.firstUpdate=true;
}}, p$1);

Clazz.newMeth(C$, 'updateVamsasDocument$uk_ac_vamsas_client_IClientDocument', function (doc) {
var storedviews=0;
p$1.ensureJvVamsas.apply(this, []);
this.errorsDuringUpdate=false;
this.errorsDuringAppUpdate=false;
this.backup_objectMapping$();
var vds=Clazz.new_([doc, this.vobj2jv, this.jv2vobj, p$1.baseProvEntry.apply(this, []), this.alRedoState],$I$(9,1).c$$uk_ac_vamsas_client_IClientDocument$java_util_Hashtable$java_util_IdentityHashMap$uk_ac_vamsas_objects_core_Entry$java_util_Hashtable);
var frames=$I$(5).desktop.getAllFrames$();
if (frames == null ) {
return 0;
}var skipList=Clazz.new_($I$(11,1));
var viewset=Clazz.new_($I$(11,1));
try {
for (var i=frames.length - 1; i > -1; i--) {
if (Clazz.instanceOf(frames[i], "jalview.gui.AlignFrame")) {
var af=frames[i];
if (!viewset.containsKey$O(af.getViewport$().getSequenceSetId$())) {
var stored=false;
try {
stored=vds.storeVAMSAS$jalview_gui_AlignViewport$S(af.getViewport$(), af.getTitle$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.errorsDuringUpdate=true;
$I$(6).log.error$O$Throwable("Exception synchronizing " + af.getTitle$() + " " + (af.getViewport$().getViewName$() == null  ? "" : " view " + af.getViewport$().getViewName$()) + " to document." , e);
stored=false;
} else {
throw e;
}
}
if (!stored) {
skipList.put$O$O(af.getViewport$().getSequenceSetId$(), af);
} else {
storedviews++;
viewset.put$O$O(af.getViewport$().getSequenceSetId$(), af);
}}}}
var aframes=viewset.values$().iterator$();
while (aframes.hasNext$()){
var af=aframes.next$();
vds.storeSequenceMappings$jalview_viewmodel_AlignmentViewport$S(af.getViewport$(), af.getTitle$());
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Exception synchronizing Views to Document :", e);
this.errorsDuringUpdate=true;
} else {
throw e;
}
}
try {
if (viewset.size$() > 0) {
vds.setSkipList$java_util_Hashtable(skipList);
vds.updateJalviewClientAppdata$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Client Appdata Write exception", e);
this.errorsDuringAppUpdate=true;
} else {
throw e;
}
}
vds.clearSkipList$();
return storedviews;
});

Clazz.newMeth(C$, 'baseProvEntry', function () {
var pentry=Clazz.new_($I$(12,1));
pentry.setUser$S(this.user.getFullName$());
pentry.setApp$S(this.app.getClientUrn$());
pentry.setDate$java_util_Date(Clazz.new_($I$(13,1)));
pentry.setAction$S("created");
return pentry;
}, p$1);

Clazz.newMeth(C$, 'dealWithDocumentUpdate$Z', function (fromJalview) {
var storedviews=0;
$I$(6).log.debug$O("Updating jalview from changed vamsas document.");
this.disableGui$Z(true);
try {
var time=System.currentTimeMillis$();
var cdoc=this.vclient.getClientDocument$();
if ($I$(6).log.isDebugEnabled$()) {
$I$(6).log.debug$O("Time taken to get ClientDocument = " + (System.currentTimeMillis$() - time));
time=System.currentTimeMillis$();
}if (fromJalview) {
storedviews+=this.updateVamsasDocument$uk_ac_vamsas_client_IClientDocument(cdoc);
if ($I$(6).log.isDebugEnabled$()) {
$I$(6).log.debug$O("Time taken to update Vamsas Document from jalview\t= " + (System.currentTimeMillis$() - time));
time=System.currentTimeMillis$();
}cdoc.setVamsasRoots$uk_ac_vamsas_objects_core_VAMSASA(cdoc.getVamsasRoots$());
if ($I$(6).log.isDebugEnabled$()) {
$I$(6).log.debug$O("Time taken to set Document Roots\t\t= " + (System.currentTimeMillis$() - time));
time=System.currentTimeMillis$();
}} else {
this.updateJalview$uk_ac_vamsas_client_IClientDocument(cdoc);
if ($I$(6).log.isDebugEnabled$()) {
$I$(6).log.debug$O("Time taken to update Jalview from vamsas document Roots\t= " + (System.currentTimeMillis$() - time));
time=System.currentTimeMillis$();
}}this.vclient.updateDocument$uk_ac_vamsas_client_IClientDocument(cdoc);
if ($I$(6).log.isDebugEnabled$()) {
$I$(6).log.debug$O("Time taken to update Session Document\t= " + (System.currentTimeMillis$() - time));
time=System.currentTimeMillis$();
}cdoc=null;
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
System.err.println$S("Exception whilst updating :");
ee.printStackTrace$java_io_PrintStream(System.err);
this.recover_objectMappingBackup$();
storedviews=0;
} else {
throw ee;
}
}
$I$(6).log.debug$O("Finished updating from document change.");
this.disableGui$Z(false);
return storedviews;
});

Clazz.newMeth(C$, 'addDocumentUpdateHandler', function () {
var client=this;
this.vclient.addDocumentUpdateHandler$java_beans_PropertyChangeListener(((P$.VamsasApplication$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasApplication$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
$I$(6).log.debug$O("Dealing with document update event.");
this.$finals$.client.dealWithDocumentUpdate$Z(false);
$I$(6).log.debug$O("finished dealing with event.");
});
})()
), Clazz.new_(P$.VamsasApplication$2.$init$,[this, {client:client}])));
$I$(6).log.debug$O("Added Jalview handler for vamsas document updates.");
}, p$1);

Clazz.newMeth(C$, 'addStoreDocumentHandler', function () {
var client=this;
this.vclient.addVorbaEventHandler$S$java_beans_PropertyChangeListener("uk.ac.vamas.client.DocumentRequestToCloseEvent", ((P$.VamsasApplication$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasApplication$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
if (this.$finals$.client.promptUser) {
$I$(6).log.debug$O("Asking user if the vamsas session should be stored.");
var reply=$I$(4,"showInternalConfirmDialog$java_awt_Component$O$S$I$I",[$I$(5).desktop, "The current VAMSAS session has unsaved data - do you want to save it ?", "VAMSAS Session Shutdown", 0, 3]);
if (reply == 0) {
$I$(6).log.debug$O("Prompting for vamsas store filename.");
$I$(5).instance.vamsasSave_actionPerformed$java_awt_event_ActionEvent(null);
$I$(6).log.debug$O("Finished attempt at storing document.");
}$I$(6).log.debug$O("finished dealing with REQUESTTOCLOSE event.");
} else {
$I$(6).log.debug$O("Ignoring store document request (promptUser==false)");
}});
})()
), Clazz.new_(P$.VamsasApplication$3.$init$,[this, {client:client}])));
$I$(6).log.debug$O("Added Jalview handler for vamsas document updates.");
}, p$1);

Clazz.newMeth(C$, 'disableGui$Z', function (b) {
});

Clazz.newMeth(C$, 'backup_objectMapping$', function () {
this._backup_vobj2jv=Clazz.new_($I$(11,1).c$$java_util_Map,[this.vobj2jv]);
this._backup_jv2vobj=Clazz.new_($I$(10,1).c$$java_util_Map,[this.jv2vobj]);
});

Clazz.newMeth(C$, 'recover_objectMappingBackup$', function () {
if (this._backup_vobj2jv == null ) {
if (this.inInitialUpdate) {
return;
}throw Clazz.new_([$I$(3).getString$S("error.implementation_error_cannot_recover_vamsas_object_mappings")],$I$(2,1).c$$S);
}this.jv2vobj.clear$();
var el=this._backup_jv2vobj.entrySet$().iterator$();
while (el.hasNext$()){
var mp=el.next$();
this.jv2vobj.put$O$O(mp.getKey$(), mp.getValue$());
}
el=this._backup_vobj2jv.entrySet$().iterator$();
while (el.hasNext$()){
var mp=el.next$();
this.vobj2jv.put$O$O(mp.getKey$(), mp.getValue$());
}
});

Clazz.newMeth(C$, 'startSession', function () {
if (this.inSession$()) {
try {
this.vclient.joinSession$();
this.joinedSession=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Failed to join vamsas session.", e);
this.vclient=null;
} else {
throw e;
}
}
try {
var pm=this.vclient.getPickManager$();
var ssm=$I$(14,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(5).instance]);
var me=this;
pm.registerMessageHandler$uk_ac_vamsas_client_picking_IMessageHandler(((P$.VamsasApplication$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasApplication$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'uk.ac.vamsas.client.picking.IMessageHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.last=null;
},1);

C$.$fields$=[['S',['last']]]

Clazz.newMeth(C$, 'handleMessage$uk_ac_vamsas_client_picking_Message', function (message) {
if (this.b$['jalview.gui.VamsasApplication'].vobj2jv == null ) {
return;
}if (Clazz.instanceOf(message, "uk.ac.vamsas.client.picking.MouseOverMessage")) {
var mm=message;
var mstring=mm.getVorbaID$() + " " + mm.getPosition$() ;
if (this.last != null  && mstring.equals$O(this.last) ) {
return;
}var jvobj=this.b$['jalview.gui.VamsasApplication'].vobj2jv.get$O(mm.getVorbaID$());
if (jvobj != null  && Clazz.instanceOf(jvobj, "jalview.datamodel.SequenceI") ) {
this.last=mstring;
this.$finals$.ssm.mouseOverVamsasSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource(jvobj, mm.getPosition$(), this.$finals$.me);
}}if (Clazz.instanceOf(message, "uk.ac.vamsas.client.picking.SelectionMessage")) {
var sm=message;
sm.validate$();
System.err.println$S("Received\n" + sm.getRawMessage$());
var jvobjs=sm.getVorbaIDs$() == null  ? null : Clazz.array(java.lang.Object, [sm.getVorbaIDs$().length]);
if (jvobjs == null ) {
this.$finals$.ssm.sendSelection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(null, null, null, this.$finals$.me);
return;
}var type=null;
var send=true;
for (var o=0; o < jvobjs.length; o++) {
jvobjs[o]=this.b$['jalview.gui.VamsasApplication'].vobj2jv.get$O(sm.getVorbaIDs$()[o]);
if (jvobjs[o] == null ) {
continue;
}if (type == null ) {
type=jvobjs[o].getClass$();
};if (type !== jvobjs[o].getClass$() ) {
send=false;
}}
var jselection=null;
var colsel=null;
if (type === Clazz.getClass($I$(15)) ) {
if (jvobjs.length == 1) {
send=true;
}}if (type === Clazz.getClass($I$(16)) ) {
var seq;
var aligned=(jvobjs[0]).getDatasetSequence$() != null ;
var maxWidth=0;
if (aligned) {
jselection=Clazz.new_($I$(17,1));
jselection.addSequence$jalview_datamodel_SequenceI$Z(seq=jvobjs[0], false);
maxWidth=seq.getLength$();
}for (var c=1; aligned && jvobjs.length > 1  && c < jvobjs.length ; c++) {
if ((jvobjs[c]).getDatasetSequence$() == null ) {
aligned=false;
continue;
} else {
jselection.addSequence$jalview_datamodel_SequenceI$Z(seq=jvobjs[c], false);
if (maxWidth < seq.getLength$()) {
maxWidth=seq.getLength$();
}}}
if (!aligned) {
jselection=null;
if (jvobjs.length == 1) {
}} else {
jselection.setStartRes$I(0);
jselection.setEndRes$I(maxWidth);
if (sm.getRanges$() != null ) {
var prange=$I$(18,"getBounds$uk_ac_vamsas_objects_core_RangeType",[sm.getRanges$()]);
jselection.setStartRes$I(prange[0] - 1);
jselection.setEndRes$I(prange[1] - 1);
prange=$I$(18,"getIntervals$uk_ac_vamsas_objects_core_RangeType",[sm.getRanges$()]);
colsel=Clazz.new_($I$(19,1));
for (var p=0; p < prange.length; p+=2) {
var d=(prange[p] <= prange[p + 1]) ? 1 : -1;
var l=(d < 0) ? 1 : 0;
var u=(d > 0) ? 1 : 0;
if (jselection.getStartRes$() > 0 && prange[p + l] == jselection.getStartRes$() ) {
jselection.setStartRes$I(prange[p + l] - 1);
}if (jselection.getEndRes$() <= maxWidth && prange[p + u] == (jselection.getEndRes$() + 2) ) {
jselection.setEndRes$I(prange[p + u] - 1);
}for (var sr=prange[p], er=prange[p + 1], de=er + d; sr != de; sr+=d) {
colsel.addElement$I(sr - 1);
}
}
}send=true;
}}if (send) {
this.$finals$.ssm.sendSelection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(jselection, colsel, null, this.$finals$.me);
}for (var c=0; c < jvobjs.length; c++) {
jvobjs[c]=null;
}
;jvobjs=null;
return;
}});
})()
), Clazz.new_(P$.VamsasApplication$4.$init$,[this, {ssm:ssm,me:me}])));
this.picker=((P$.VamsasApplication$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasApplication$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.structure.VamsasListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.last=null;
this.i=-1;
},1);

C$.$fields$=[['I',['i'],'O',['last','jalview.datamodel.SequenceI']]]

Clazz.newMeth(C$, 'mouseOverSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource', function (seq, index, source) {
if (this.b$['jalview.gui.VamsasApplication'].jv2vobj == null ) {
return;
}if (seq !== this.last  || this.i != index ) {
var v=this.b$['jalview.gui.VamsasApplication'].jv2vobj.get$O(seq);
if (v != null ) {
this.last=seq;
this.i=index;
var message=Clazz.new_([v.getId$(), index],$I$(20,1).c$$S$I);
this.$finals$.pm.sendMessage$uk_ac_vamsas_client_picking_Message(message);
}}});
})()
), Clazz.new_(P$.VamsasApplication$5.$init$,[this, {pm:pm}]));
this.selecter=((P$.VamsasApplication$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasApplication$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.structure.SelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource', function (seqsel, colsel, hidden, source) {
if (this.b$['jalview.gui.VamsasApplication'].vobj2jv == null ) {
$I$(6).log.warn$O("Selection listener still active for dead session.");
return;
}if (source !== this.$finals$.me ) {
var visal=null;
if (Clazz.instanceOf(source, "jalview.gui.AlignViewport")) {
visal=(source).getAlignment$();
}var sm=null;
if ((seqsel == null  || seqsel.getSize$() == 0 ) && (colsel == null  || colsel.getSelected$() == null   || colsel.getSelected$().size$() == 0 ) ) {
if (Clazz.instanceOf(source, "jalview.gui.AlignViewport")) {
sm=Clazz.new_(["jalview", Clazz.array(String, -1, [(source).getSequenceSetId$()]), null, true],$I$(21,1).c$$S$SA$uk_ac_vamsas_objects_core_RangeType$Z);
} else {
sm=Clazz.new_($I$(21,1).c$$S$SA$uk_ac_vamsas_objects_core_RangeType$Z,["jalview", null, null, true]);
}} else {
var vobj=Clazz.array(String, [seqsel.getSize$()]);
var o=0;
for (var sel, $sel = seqsel.getSequences$java_util_Map(null).iterator$(); $sel.hasNext$()&&((sel=($sel.next$())),1);) {
var v=this.b$['jalview.gui.VamsasApplication'].jv2vobj.get$O(sel);
if (v != null ) {
vobj[o++]=v.toString();
}}
if (o < vobj.length) {
var t=vobj;
vobj=Clazz.array(String, [o]);
System.arraycopy$O$I$O$I$I(t, 0, vobj, 0, o);
t=null;
}var range=null;
if (seqsel != null  && colsel != null  ) {
range=Clazz.new_($I$(22,1));
if (colsel.getSelected$() != null  && colsel.getSelected$().size$() > 0  && visal != null   && seqsel.getSize$() == visal.getHeight$() ) {
for (var ival, $ival = colsel.getSelected$().iterator$(); $ival.hasNext$()&&((ival=($ival.next$())),1);) {
var p=Clazz.new_($I$(23,1));
p.setI$I(ival.intValue$() + 1);
range.addPos$uk_ac_vamsas_objects_core_Pos(p);
}
} else {
var intervals=hidden.getVisContigsIterator$I$I$Z(seqsel.getStartRes$(), seqsel.getEndRes$() + 1, false);
while (intervals.hasNext$()){
var region=intervals.next$();
var s=Clazz.new_($I$(24,1));
s.setStart$I(region[0] + 1);
s.setEnd$I(region[1] + 1);
s.setInclusive$Z(true);
range.addSeg$uk_ac_vamsas_objects_core_Seg(s);
}
}}if (vobj.length > 0) {
sm=Clazz.new_($I$(21,1).c$$S$SA$uk_ac_vamsas_objects_core_RangeType,["jalview", vobj, range]);
} else {
sm=null;
}}if (sm != null ) {
sm.validate$();
$I$(6).log.debug$O("Selection Message\n" + sm.getRawMessage$());
this.$finals$.pm.sendMessage$uk_ac_vamsas_client_picking_Message(sm);
}}});
})()
), Clazz.new_(P$.VamsasApplication$6.$init$,[this, {pm:pm,me:me}]));
ssm.addStructureViewerListener$O(this.picker);
ssm.addSelectionListener$jalview_structure_SelectionListener(this.selecter);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).log.error$O$Throwable("Failed to init Vamsas Picking", e);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'getCurrentSession$', function () {
if (this.vclient != null ) {
return (this.vclient.getSessionUrn$());
}return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
