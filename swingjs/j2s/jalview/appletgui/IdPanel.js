(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'Thread','jalview.appletgui.IdCanvas','java.awt.BorderLayout','java.util.HashMap','jalview.urls.applet.AppletUrlProviderFactory','StringBuffer','jalview.appletgui.Tooltip',['jalview.appletgui.IdPanel','.ScrollThread'],'java.util.ArrayList','jalview.appletgui.APopupMenu','jalview.util.Platform','jalview.datamodel.SequenceGroup','jalview.appletgui.PaintRefresher']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Panel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);
C$.$classes$=[['ScrollThread',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrollThread=null;
this.lastid=-1;
this.mouseDragging=false;
this.urlProvider=null;
},1);

C$.$fields$=[['Z',['mouseDragging'],'I',['lastid'],'O',['idCanvas','jalview.appletgui.IdCanvas','av','jalview.viewmodel.AlignmentViewport','alignPanel','jalview.appletgui.AlignmentPanel','scrollThread','jalview.appletgui.IdPanel.ScrollThread','urlProvider','jalview.urls.api.UrlProviderI','tooltip','jalview.appletgui.Tooltip']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel',  function (viewport, parent) {
Clazz.super_(C$, this);
this.av=viewport;
this.alignPanel=parent;
this.idCanvas=Clazz.new_($I$(2,1).c$$jalview_appletgui_AlignViewport,[viewport]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.add$java_awt_Component$O(this.idCanvas, "Center");
this.idCanvas.addMouseListener$java_awt_event_MouseListener(this);
this.idCanvas.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
var label;
var url;
var urlList=Clazz.new_($I$(4,1));
if (viewport.applet != null ) {
for (var i=1; i < 10; i++) {
label=viewport.applet.getParameter$S("linkLabel_" + i);
url=viewport.applet.getParameter$S("linkURL_" + i);
if (label != null ) {
urlList.put$O$O(label, url);
}}
if (!urlList.isEmpty$()) {
var defaultUrl=viewport.applet.getParameter$S("linkLabel_1");
var factory=Clazz.new_($I$(5,1).c$$S$java_util_Map,[defaultUrl, urlList]);
this.urlProvider=factory.createUrlProvider$();
}}}, 1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var seq=this.alignPanel.seqPanel.findSeq$java_awt_event_MouseEvent(e);
var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
var tooltiptext=Clazz.new_($I$(6,1));
if (sequence == null ) {
return;
}if (sequence.getDescription$() != null ) {
tooltiptext.append$S(sequence.getDescription$());
tooltiptext.append$S("\n");
}for (var sf, $sf = sequence.getFeatures$().getNonPositionalFeatures$SA(Clazz.array(String, -1, [])).iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var nl=false;
if (sf.getFeatureGroup$() != null ) {
tooltiptext.append$S(sf.getFeatureGroup$());
nl=true;
}if (sf.getType$() != null ) {
tooltiptext.append$S(" ");
tooltiptext.append$S(sf.getType$());
nl=true;
}if (sf.getDescription$() != null ) {
tooltiptext.append$S(" ");
tooltiptext.append$S(sf.getDescription$());
nl=true;
}if (!Float.isNaN$F(sf.getScore$()) && sf.getScore$() != 0.0  ) {
tooltiptext.append$S(" Score = ");
tooltiptext.append$F(sf.getScore$());
nl=true;
}if (sf.getStatus$() != null  && sf.getStatus$().length$() > 0 ) {
tooltiptext.append$S(" (");
tooltiptext.append$S(sf.getStatus$());
tooltiptext.append$S(")");
nl=true;
}if (nl) {
tooltiptext.append$S("\n");
}}
if (tooltiptext.length$() == 0) {
if (this.tooltip != null ) {
this.tooltip.setVisible$Z(false);
}this.tooltip=null;
tooltiptext=null;
return;
}if (this.tooltip == null ) {
this.tooltip=Clazz.new_([sequence.getDisplayId$Z(true) + "\n" + tooltiptext.toString() , this.idCanvas],$I$(7,1).c$$S$java_awt_Component);
} else {
this.tooltip.setTip$S(sequence.getDisplayId$Z(true) + "\n" + tooltiptext.toString() );
}tooltiptext=null;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.mouseDragging=true;
var seq=Math.max(0, this.alignPanel.seqPanel.findSeq$java_awt_event_MouseEvent(e));
if (seq < this.lastid) {
this.selectSeqs$I$I(this.lastid - 1, seq);
} else if (seq > this.lastid) {
this.selectSeqs$I$I(this.lastid + 1, seq);
}this.lastid=seq;
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() < 2) {
return;
}var seq=this.alignPanel.seqPanel.findSeq$java_awt_event_MouseEvent(e);
var sq=this.av.getAlignment$().getSequenceAt$I(seq);
if (sq == null ) {
return;
}var id=sq.getName$();
if (this.urlProvider == null ) {
return;
}var url=this.urlProvider.getPrimaryUrl$S(id);
var target=this.urlProvider.getPrimaryTarget$S(id);
try {
this.alignPanel.alignFrame.showURL$S$S(url, target);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (this.scrollThread != null ) {
this.scrollThread.running=false;
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (this.av.getWrapAlignment$()) {
return;
}if (this.mouseDragging && e.getY$() < 0  && this.av.getRanges$().getStartSeq$() > 0 ) {
this.scrollThread=Clazz.new_($I$(8,1).c$$Z,[this, null, true]);
}if (this.mouseDragging && e.getY$() >= this.getSize$().height  && this.av.getAlignment$().getHeight$() > this.av.getRanges$().getEndSeq$() ) {
this.scrollThread=Clazz.new_($I$(8,1).c$$Z,[this, null, false]);
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() > 1) {
return;
}var y=e.getY$();
if (this.av.getWrapAlignment$()) {
y-=2 * this.av.getCharHeight$();
}var seq=this.alignPanel.seqPanel.findSeq$java_awt_event_MouseEvent(e);
if ((e.getModifiersEx$() & 4096) == 4096) {
var sq=this.av.getAlignment$().getSequenceAt$I(seq);
var nlinks;
if (this.urlProvider != null ) {
nlinks=this.urlProvider.getLinksForMenu$();
} else {
nlinks=Clazz.new_($I$(9,1));
}for (var sf, $sf = sq.getFeatures$().getNonPositionalFeatures$SA(Clazz.array(String, -1, [])).iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.links != null ) {
for (var link, $link = sf.links.iterator$(); $link.hasNext$()&&((link=($link.next$())),1);) {
nlinks.add$O(link);
}
}}
var popup=Clazz.new_($I$(10,1).c$$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List,[this.alignPanel, sq, nlinks]);
this.add$java_awt_PopupMenu(popup);
popup.show$java_awt_Component$I$I(this, e.getX$(), e.getY$());
return;
}if ((this.av.getSelectionGroup$() == null ) || ((!$I$(11).isControlDown$java_awt_event_MouseEvent(e) && !e.isShiftDown$() ) && this.av.getSelectionGroup$() != null  ) ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(12,1)));
this.av.getSelectionGroup$().setStartRes$I(0);
this.av.getSelectionGroup$().setEndRes$I(this.av.getAlignment$().getWidth$() - 1);
}if (e.isShiftDown$() && this.lastid != -1 ) {
this.selectSeqs$I$I(this.lastid, seq);
} else {
this.selectSeq$I(seq);
}this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'selectSeq$I',  function (seq) {
this.lastid=seq;
var pickedSeq=this.av.getAlignment$().getSequenceAt$I(seq);
this.av.getSelectionGroup$().addOrRemove$jalview_datamodel_SequenceI$Z(pickedSeq, true);
});

Clazz.newMeth(C$, 'selectSeqs$I$I',  function (start, end) {
this.lastid=start;
if (end >= this.av.getAlignment$().getHeight$()) {
end=this.av.getAlignment$().getHeight$() - 1;
}if (end < start) {
var tmp=start;
start=end;
end=tmp;
this.lastid=end;
}if (this.av.getSelectionGroup$() == null ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(12,1)));
}for (var i=start; i <= end; i++) {
this.av.getSelectionGroup$().addSequence$jalview_datamodel_SequenceI$Z(this.av.getAlignment$().getSequenceAt$I(i), i == end);
}
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (this.scrollThread != null ) {
this.scrollThread.running=false;
}if (this.av.getSelectionGroup$() != null ) {
this.av.getSelectionGroup$().recalcConservation$();
}this.mouseDragging=false;
$I$(13,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'highlightSearchResults$java_util_List',  function (list) {
this.idCanvas.setHighlighted$java_util_List(list);
if (list == null  || list.isEmpty$() ) {
return;
}var index=this.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(list.get$I(0));
if (this.av.getRanges$().getStartSeq$() > index || this.av.getRanges$().getEndSeq$() < index ) {
this.av.getRanges$().setStartSeq$I(index);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.IdPanel, "ScrollThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.running=false;
this.up=true;
},1);

C$.$fields$=[['Z',['running','up']]]

Clazz.newMeth(C$, 'c$$Z',  function (isUp) {
Clazz.super_(C$, this);
this.up=isUp;
this.start$();
}, 1);

Clazz.newMeth(C$, 'stopScrolling$',  function () {
this.running=false;
});

Clazz.newMeth(C$, 'run$',  function () {
this.running=true;
while (this.running){
if (this.b$['jalview.appletgui.IdPanel'].av.getRanges$().scrollUp$Z(this.up)) {
var seq=this.b$['jalview.appletgui.IdPanel'].av.getRanges$().getStartSeq$();
if (!this.up) {
seq=this.b$['jalview.appletgui.IdPanel'].av.getRanges$().getEndSeq$();
}if (seq < this.b$['jalview.appletgui.IdPanel'].lastid) {
this.b$['jalview.appletgui.IdPanel'].selectSeqs$I$I.apply(this.b$['jalview.appletgui.IdPanel'], [this.b$['jalview.appletgui.IdPanel'].lastid - 1, seq]);
} else if (seq > this.b$['jalview.appletgui.IdPanel'].lastid && seq < this.b$['jalview.appletgui.IdPanel'].av.getAlignment$().getHeight$() ) {
this.b$['jalview.appletgui.IdPanel'].selectSeqs$I$I.apply(this.b$['jalview.appletgui.IdPanel'], [this.b$['jalview.appletgui.IdPanel'].lastid + 1, seq]);
}this.b$['jalview.appletgui.IdPanel'].lastid=seq;
} else {
this.running=false;
}this.b$['jalview.appletgui.IdPanel'].alignPanel.paintAlignment$Z$Z(true, false);
try {
$I$(1).sleep$J(100);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
