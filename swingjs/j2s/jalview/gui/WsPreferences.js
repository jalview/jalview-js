(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.awt.Dimension','java.awt.Color','jalview.util.MessageManager','jalview.ws.jws2.Jws2Discoverer','java.util.Vector',['jalview.gui.WsPreferences','.JabaWSStatusRenderer'],'jalview.ws.rest.RestClient','jalview.bin.Cache',['jalview.gui.WsPreferences','.WsUrlTableModel'],'jalview.gui.RestServiceEditorPane','jalview.ws.rest.RestServiceDescription','javax.swing.JTextField','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JOptionPane','jalview.gui.Desktop','java.net.URL','jalview.gui.JvOptionPane','Thread']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WsPreferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GWsPreferences');
C$.$classes$=[['JabaWSStatusRenderer',2],['WsUrlTableModel',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.updateAction=((P$.WsPreferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WsPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
(this.b$['jalview.gui.WsPreferences'].update=Long.$inc(this.b$['jalview.gui.WsPreferences'].update,1));
});
})()
), Clazz.new_(P$.WsPreferences$1.$init$,[this, null]));
this.update=0;
this.lastrefresh=0;
},1);

C$.$fields$=[['Z',['needWsMenuUpdate','oldJws1','oldJws2','oldIndexByHost','oldIndexByType','oldEnfin','oldWsWarning'],'J',['update','lastrefresh'],'O',['wsUrls','java.util.List','oldUrls','java.util.Vector','+rsbsUrls','+oldRsbsUrls','updateAction','java.awt.event.ActionListener']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
p$1.initFromPreferences.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initFromPreferences',  function () {
this.wsUrls=$I$(4).getDiscoverer$().getServiceUrls$();
if (!this.wsUrls.isEmpty$()) {
this.oldUrls=Clazz.new_($I$(5,1).c$$java_util_Collection,[this.wsUrls]);
} else {
this.oldUrls=null;
this.wsUrls=Clazz.new_($I$(5,1));
}this.wsList.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(Integer), Clazz.new_($I$(6,1),[this, null]));
this.wsList.setAutoResizeMode$I(4);
p$1.updateList.apply(this, []);
this.rsbsUrls=$I$(7).getRsbsDescriptions$();
if (this.rsbsUrls != null ) {
this.oldRsbsUrls=Clazz.new_($I$(5,1).c$$java_util_Collection,[this.rsbsUrls]);
} else {
this.oldRsbsUrls=null;
this.rsbsUrls=Clazz.new_($I$(5,1));
}p$1.updateRsbsList.apply(this, []);
this.enableEnfinServices.setSelected$Z(this.oldEnfin=$I$(8).getDefault$S$Z("SHOW_ENFIN_SERVICES", true));
this.enableEnfinServices.addActionListener$java_awt_event_ActionListener(this.updateAction);
this.enableJws2Services.setSelected$Z(this.oldJws2=$I$(8).getDefault$S$Z("SHOW_JWS2_SERVICES", true));
this.enableJws2Services.addActionListener$java_awt_event_ActionListener(this.updateAction);
this.indexByHost.setSelected$Z(this.oldIndexByHost=$I$(8).getDefault$S$Z("WSMENU_BYHOST", false));
this.indexByHost.addActionListener$java_awt_event_ActionListener(this.updateAction);
this.indexByType.setSelected$Z(this.oldIndexByType=$I$(8).getDefault$S$Z("WSMENU_BYTYPE", false));
this.indexByType.addActionListener$java_awt_event_ActionListener(this.updateAction);
this.displayWsWarning.setSelected$Z(this.oldWsWarning=$I$(8).getDefault$S$Z("SHOW_WSDISCOVERY_ERRORS", true));
}, p$1);

Clazz.newMeth(C$, 'updateList',  function () {
var tdat=Clazz.array(java.lang.Object, [this.wsUrls.size$(), 2]);
var r=0;
for (var url, $url = this.wsUrls.iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
var status=$I$(4).getDiscoverer$().getServerStatusFor$S(url);
tdat[r][1]=Integer.valueOf$I(status);
tdat[r++][0]=url;
}
this.wsList.setModel$javax_swing_table_TableModel(Clazz.new_($I$(9,1).c$$OAA,[this, null, tdat]));
this.wsList.getColumn$O($I$(3).getString$S("label.status")).setMinWidth$I(10);
}, p$1);

Clazz.newMeth(C$, 'updateRsbsList',  function () {
this.sbrsList.setListData$java_util_Vector(this.rsbsUrls);
}, p$1);

Clazz.newMeth(C$, 'updateServiceList',  function () {
$I$(4).getDiscoverer$().setServiceUrls$java_util_List(this.wsUrls);
}, p$1);

Clazz.newMeth(C$, 'updateRsbsServiceList',  function () {
$I$(7).setRsbsServices$java_util_Vector(this.rsbsUrls);
}, p$1);

Clazz.newMeth(C$, 'deleteWsUrl_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var sel=this.wsList.getSelectedRow$();
if (sel > -1) {
this.wsUrls.remove$I(sel);
(this.update=Long.$inc(this.update,1));
p$1.updateList.apply(this, []);
}});

Clazz.newMeth(C$, 'editWsUrl_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var sel=this.wsList.getSelectedRow$();
if (sel > -1) {
var url=p$1.editUrl$S$S.apply(this, [this.wsUrls.get$I(sel), $I$(3).getString$S("label.edit_jabaws_url")]);
if (url != null ) {
var present=this.wsUrls.indexOf$O(url);
if (present == -1) {
(this.update=Long.$inc(this.update,1));
this.wsUrls.set$I$O(sel, url);
p$1.updateList.apply(this, []);
} else {
if (present != sel) {
this.wsUrls.remove$I(sel);
p$1.updateList.apply(this, []);
}}}}});

Clazz.newMeth(C$, 'newSbrsUrl_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rse=Clazz.new_($I$(10,1));
rse.showDialog$S($I$(3).getString$S("label.add_new_sbrs_service"));
var rservice=rse.getEditedRestService$();
if (rservice != null  && !this.rsbsUrls.contains$O(rservice) ) {
this.rsbsUrls.add$O(rservice);
(this.update=Long.$inc(this.update,1));
p$1.updateRsbsList.apply(this, []);
}});

Clazz.newMeth(C$, 'editSbrsUrl_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var sel=this.sbrsList.getSelectedIndex$();
if (sel > -1) {
var rse=Clazz.new_([Clazz.new_([this.rsbsUrls.elementAt$I(sel)],$I$(11,1).c$$S)],$I$(10,1).c$$jalview_ws_rest_RestServiceDescription);
rse.showDialog$S($I$(3).getString$S("label.edit_sbrs_entry"));
var rservice=rse.getEditedRestService$();
if (rservice != null ) {
var present=this.rsbsUrls.indexOf$O(rservice);
if (present == -1) {
(this.update=Long.$inc(this.update,1));
this.rsbsUrls.setElementAt$O$I(rservice, sel);
p$1.updateRsbsList.apply(this, []);
} else {
if (present != sel) {
this.rsbsUrls.removeElementAt$I(sel);
(this.update=Long.$inc(this.update,1));
p$1.updateRsbsList.apply(this, []);
}}}}});

Clazz.newMeth(C$, 'updateWsMenuConfig$Z',  function (old) {
if (old) {
if (this.oldUrls !== this.wsUrls  || (this.wsUrls != null  && this.oldUrls != null   && !this.wsUrls.equals$O(this.oldUrls) ) ) {
(this.update=Long.$inc(this.update,1));
}this.wsUrls=(this.oldUrls == null ) ? null : Clazz.new_($I$(5,1).c$$java_util_Collection,[this.oldUrls]);
if (this.oldRsbsUrls !== this.rsbsUrls  || (this.rsbsUrls != null  && this.oldRsbsUrls != null   && !this.oldRsbsUrls.equals$O(this.rsbsUrls) ) ) {
(this.update=Long.$inc(this.update,1));
}this.oldRsbsUrls=(this.oldRsbsUrls == null ) ? null : Clazz.new_($I$(5,1).c$$java_util_Collection,[this.oldRsbsUrls]);
} else {
}$I$(8,"setProperty$S$S",["SHOW_ENFIN_SERVICES", Boolean.valueOf$Z(old ? this.oldEnfin : this.enableEnfinServices.isSelected$()).toString()]);
$I$(8,"setProperty$S$S",["SHOW_JWS2_SERVICES", Boolean.valueOf$Z(old ? this.oldJws2 : this.enableJws2Services.isSelected$()).toString()]);
$I$(8,"setProperty$S$S",["WSMENU_BYHOST", Boolean.valueOf$Z(old ? this.oldIndexByHost : this.indexByHost.isSelected$()).toString()]);
$I$(8,"setProperty$S$S",["WSMENU_BYTYPE", Boolean.valueOf$Z(old ? this.oldIndexByType : this.indexByType.isSelected$()).toString()]);
$I$(8,"setProperty$S$S",["SHOW_WSDISCOVERY_ERRORS", Boolean.valueOf$Z(old ? this.oldWsWarning : this.displayWsWarning.isSelected$()).toString()]);
p$1.updateServiceList.apply(this, []);
p$1.updateRsbsServiceList.apply(this, []);
});

Clazz.newMeth(C$, 'moveWsUrlDown_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p=this.wsList.getSelectedRow$();
if (p > -1 && p < this.wsUrls.size$() - 1 ) {
var t=this.wsUrls.get$I(p + 1);
this.wsUrls.set$I$O(p + 1, this.wsUrls.get$I(p));
this.wsUrls.set$I$O(p, t);
p$1.updateList.apply(this, []);
this.wsList.getSelectionModel$().setSelectionInterval$I$I(p + 1, p + 1);
(this.update=Long.$inc(this.update,1));
}});

Clazz.newMeth(C$, 'moveWsUrlUp_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p=this.wsList.getSelectedRow$();
if (p > 0) {
var t=this.wsUrls.get$I(p - 1);
this.wsUrls.set$I$O(p - 1, this.wsUrls.get$I(p));
this.wsUrls.set$I$O(p, t);
p$1.updateList.apply(this, []);
this.wsList.getSelectionModel$().setSelectionInterval$I$I(p - 1, p - 1);
(this.update=Long.$inc(this.update,1));
}});

Clazz.newMeth(C$, 'editUrl$S$S',  function (initUrl, title) {
var url=initUrl;
var foo=null;
if (url == null ) {
url="";
}var urltf=Clazz.new_($I$(12,1).c$$S$I,[url, 40]);
var panel=Clazz.new_([Clazz.new_($I$(14,1))],$I$(13,1).c$$java_awt_LayoutManager);
var pane12=Clazz.new_([Clazz.new_($I$(14,1))],$I$(13,1).c$$java_awt_LayoutManager);
pane12.add$java_awt_Component$O(Clazz.new_([$I$(3).getString$S("label.url:")],$I$(15,1).c$$S), "Center");
pane12.add$java_awt_Component$O(urltf, "East");
panel.add$java_awt_Component$O(pane12, "North");
var valid=false;
var resp=2;
while (!valid && (resp=$I$(16,"showInternalConfirmDialog$java_awt_Component$O$S$I",[$I$(17).desktop, panel, title, 2])) == 0 ){
try {
var tx=urltf.getText$().trim$();
while (tx.length$() > 0 && tx.lastIndexOf$I("/") == tx.length$() - 1 ){
tx=tx.substring$I$I(0, tx.length$() - 1);
}
foo=Clazz.new_($I$(18,1).c$$S,[tx]);
valid=true;
urltf.setText$S(tx);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
valid=false;
$I$(19,"showInternalMessageDialog$java_awt_Component$O",[$I$(17).desktop, $I$(3).getString$S("label.invalid_url")]);
} else {
throw e;
}
}
}
if (valid && resp == 0 ) {
var validate=$I$(19,"showInternalConfirmDialog$java_awt_Component$S$S$I",[$I$(17).desktop, $I$(3).getString$S("info.validate_jabaws_server"), $I$(3).getString$S("label.test_server"), 0]);
if (validate == 0) {
if ($I$(4).testServiceUrl$java_net_URL(foo)) {
return foo.toString();
} else {
var opt=$I$(16,"showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[$I$(17).desktop, "The Server  '" + foo.toString() + "' failed validation,\ndo you want to add it anyway? " , "Server Validation Failed", 0, 1, null, null, null]);
if (opt == 0) {
return foo.toString();
} else {
$I$(19,"showInternalMessageDialog$java_awt_Component$O",[$I$(17).desktop, $I$(3).getString$S("warn.server_didnt_pass_validation")]);
}}} else {
return foo.toString();
}}return initUrl;
}, p$1);

Clazz.newMeth(C$, 'newWsUrl_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url=p$1.editUrl$S$S.apply(this, [null, $I$(3).getString$S("label.add_jabaws_url")]);
if (url != null ) {
if (!this.wsUrls.contains$O(url)) {
var selind=this.wsList.getSelectedRow$();
if (selind > -1) {
this.wsUrls.add$I$O(selind, url);
} else {
this.wsUrls.add$O(url);
}(this.update=Long.$inc(this.update,1));
p$1.updateList.apply(this, []);
}}});

Clazz.newMeth(C$, 'refreshWs_actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_([((P$.WsPreferences$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "WsPreferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.WsPreferences'].lastrefresh=Long.$sub(this.b$['jalview.gui.WsPreferences'].update,1);
this.b$['jalview.gui.WsPreferences'].updateWsMenuConfig$Z.apply(this.b$['jalview.gui.WsPreferences'], [false]);
this.b$['jalview.gui.WsPreferences'].refreshWsMenu$Z.apply(this.b$['jalview.gui.WsPreferences'], [true]);
});
})()
), Clazz.new_(P$.WsPreferences$2.$init$,[this, null]))],$I$(20,1).c$$Runnable).start$();
});

Clazz.newMeth(C$, 'refreshWsMenu$Z',  function (showProgress) {
if (showProgress) {
Clazz.new_([((P$.WsPreferences$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "WsPreferences$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.WsPreferences'].progressBar.setVisible$Z(true);
this.b$['java.awt.Container'].validate$.apply(this.b$['java.awt.Container'], []);
this.b$['jalview.gui.WsPreferences'].progressBar.setIndeterminate$Z(true);
if (Long.$ne(this.b$['jalview.gui.WsPreferences'].lastrefresh,this.b$['jalview.gui.WsPreferences'].update )) {
this.b$['jalview.gui.WsPreferences'].lastrefresh=this.b$['jalview.gui.WsPreferences'].update;
$I$(17).instance.startServiceDiscovery$Z(true);
p$1.updateList.apply(this.b$['jalview.gui.WsPreferences'], []);
}this.b$['jalview.gui.WsPreferences'].progressBar.setIndeterminate$Z(false);
this.b$['jalview.gui.WsPreferences'].progressBar.setVisible$Z(false);
this.b$['java.awt.Container'].validate$.apply(this.b$['java.awt.Container'], []);
});
})()
), Clazz.new_(P$.WsPreferences$3.$init$,[this, null]))],$I$(20,1).c$$Runnable).start$();
} else {
Clazz.new_([((P$.WsPreferences$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "WsPreferences$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var ct=System.currentTimeMillis$();
$I$(17).instance.setProgressBar$S$J($I$(3).getString$S("status.refreshing_web_service_menus"), ct);
if (Long.$ne(this.b$['jalview.gui.WsPreferences'].lastrefresh,this.b$['jalview.gui.WsPreferences'].update )) {
this.b$['jalview.gui.WsPreferences'].lastrefresh=this.b$['jalview.gui.WsPreferences'].update;
$I$(17).instance.startServiceDiscovery$Z(true);
p$1.updateList.apply(this.b$['jalview.gui.WsPreferences'], []);
}$I$(17).instance.setProgressBar$S$J(null, ct);
});
})()
), Clazz.new_(P$.WsPreferences$4.$init$,[this, null]))],$I$(20,1).c$$Runnable).start$();
}});

Clazz.newMeth(C$, 'resetWs_actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(4).getDiscoverer$().setServiceUrls$java_util_List(null);
var nwsUrls=$I$(4).getDiscoverer$().getServiceUrls$();
if (!this.wsUrls.equals$O(nwsUrls)) {
(this.update=Long.$inc(this.update,1));
}this.wsUrls=nwsUrls;
p$1.updateList.apply(this, []);
this.updateAndRefreshWsMenuConfig$Z(true);
});

Clazz.newMeth(C$, 'ok_ActionPerformed$java_awt_event_ActionEvent',  function (e) {
this.updateAndRefreshWsMenuConfig$Z(false);
});

Clazz.newMeth(C$, 'updateAndRefreshWsMenuConfig$Z',  function (showProgressInDialog) {
Clazz.new_([((P$.WsPreferences$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "WsPreferences$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.WsPreferences'].updateWsMenuConfig$Z.apply(this.b$['jalview.gui.WsPreferences'], [false]);
this.b$['jalview.gui.WsPreferences'].refreshWsMenu$Z.apply(this.b$['jalview.gui.WsPreferences'], [this.$finals$.showProgressInDialog]);
});
})()
), Clazz.new_(P$.WsPreferences$5.$init$,[this, {showProgressInDialog:showProgressInDialog}]))],$I$(20,1).c$$Runnable).start$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.WsPreferences, "JabaWSStatusRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[10, 10]));
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (arg0, status, isSelected, hasFocus, row, column) {
var c;
var t= String.instantialize("");
switch ((status).intValue$()) {
case 1:
c=$I$(2).green;
break;
case 0:
c=$I$(2).lightGray;
break;
case -1:
c=$I$(2).red;
break;
default:
c=$I$(2).orange;
}
this.setBackground$java_awt_Color(c);
return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.WsPreferences, "WsUrlTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.columnNames=Clazz.array(String, -1, [$I$(3).getString$S("label.service_url"), $I$(3).getString$S("label.status")]);
},1);

C$.$fields$=[['O',['data','Object[][]','columnNames','String[]']]]

Clazz.newMeth(C$, 'c$$OAA',  function (tdat) {
Clazz.super_(C$, this);
this.data=tdat;
}, 1);

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
return this.columnNames[column];
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
if (this.data == null ) {
return 0;
}return this.data.length;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
return this.getValueAt$I$I(0, columnIndex).getClass$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
return this.data[rowIndex][columnIndex];
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
