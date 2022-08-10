(function(){var P$=Clazz.newPackage("mc_view"),I$=[[0,'mc_view.MCMatrix','java.awt.Font','StringBuffer','jalview.structure.StructureSelectionManager','jalview.io.DataSourceType','jalview.analysis.AlignSeq','java.io.PrintStream','java.awt.Dimension','java.awt.event.KeyAdapter','java.util.Vector','java.awt.Color','jalview.util.MessageManager','jalview.appletgui.SequenceRenderer','jalview.appletgui.FeatureRenderer','jalview.renderer.seqfeatures.FeatureColourFinder','mc_view.Zsort']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppletPDBCanvas", null, 'java.awt.Panel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'jalview.structure.StructureListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.idmat=Clazz.new_($I$(1,1).c$$I$I,[3, 3]);
this.objmat=Clazz.new_($I$(1,1).c$$I$I,[3, 3]);
this.redrawneeded=true;
this.omx=0;
this.mx=0;
this.omy=0;
this.my=0;
this.centre=Clazz.array(Float.TYPE, [3]);
this.$width=Clazz.array(Float.TYPE, [3]);
this.bysequence=true;
this.depthcue=true;
this.wire=false;
this.bymolecule=false;
this.zbuffer=true;
this.$font=Clazz.new_($I$(2,1).c$$S$I$I,["Helvetica", 0, 10]);
this.mappingDetails=Clazz.new_($I$(3,1));
this.appletToolTip=null;
this.pdbAction=false;
this.errorLoading=false;
this.seqColoursReady=false;
this.foundchain=-1;
this.resetLastRes=Clazz.new_($I$(3,1));
this.eval=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['redrawneeded','bysequence','depthcue','wire','bymolecule','zbuffer','dragging','pdbAction','errorLoading','seqColoursReady'],'F',['maxwidth','scale'],'I',['omx','mx','omy','my','bsize','xstart','xend','ystart','yend','xmid','ymid','toolx','tooly','foundchain'],'S',['inStr','inType','appletToolTip','lastMessage'],'O',['idmat','mc_view.MCMatrix','+objmat','pdb','jalview.io.StructureFile','pdbentry','jalview.datamodel.PDBEntry','img','java.awt.Image','ig','java.awt.Graphics','prefsize','java.awt.Dimension','centre','float[]','+$width','$font','java.awt.Font','sequence','jalview.datamodel.SequenceI[]','mappingDetails','StringBuffer','mainchain','mc_view.PDBChain','highlightRes','java.util.Vector','highlightBond1','mc_view.Bond','+highlightBond2','fr','jalview.appletgui.FeatureRenderer','ap','jalview.appletgui.AlignmentPanel','ssm','jalview.structure.StructureSelectionManager','visiblebonds','java.util.Vector','zsort','mc_view.Zsort','resetLastRes','StringBuffer','+eval']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType',  function (pdbentry, seq, chains, ap, protocol) {
Clazz.super_(C$, this);
this.ap=ap;
this.pdbentry=pdbentry;
this.sequence=seq;
this.ssm=$I$(4).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(ap.av.applet);
try {
this.pdb=this.ssm.setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, chains, pdbentry.getFile$(), protocol, null);
if (protocol === $I$(5).PASTE ) {
pdbentry.setFile$S("INLINE" + this.pdb.getId$());
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return;
} else {
throw ex;
}
}
pdbentry.setId$S(this.pdb.getId$());
this.ssm.addStructureViewerListener$O(this);
this.colourBySequence$();
var max=-10;
var maxchain=-1;
var pdbstart=0;
var pdbend=0;
var seqstart=0;
var seqend=0;
var sequence=seq[0];
for (var i=0; i < this.pdb.getChains$().size$(); i++) {
this.mappingDetails.append$S("\n\nPDB Sequence is :\nSequence = " + this.pdb.getChains$().elementAt$I(i).sequence.getSequenceAsString$());
this.mappingDetails.append$S("\nNo of residues = " + this.pdb.getChains$().elementAt$I(i).residues.size$() + "\n\n" );
var as=Clazz.new_([sequence, this.pdb.getChains$().elementAt$I(i).sequence, this.pdb.getChains$().elementAt$I(i).isNa ? "dna" : "pep"],$I$(6,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S);
as.calcScoreMatrix$();
as.traceAlignment$();
var ps=((P$.AppletPDBCanvas$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppletPDBCanvas$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PrintStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'print$S',  function (x) {
this.b$['mc_view.AppletPDBCanvas'].mappingDetails.append$S(x);
});

Clazz.newMeth(C$, 'println$',  function () {
this.b$['mc_view.AppletPDBCanvas'].mappingDetails.append$S("\n");
});
})()
), Clazz.new_($I$(7,1).c$$java_io_OutputStream,[this, null, System.out],P$.AppletPDBCanvas$1));
as.printAlignment$java_io_PrintStream(ps);
if (as.maxscore > max ) {
max=as.maxscore;
maxchain=i;
pdbstart=as.seq2start;
pdbend=as.seq2end;
seqstart=as.seq1start + sequence.getStart$() - 1;
seqend=as.seq1end + sequence.getEnd$() - 1;
}this.mappingDetails.append$S("\nPDB start/end " + pdbstart + " " + pdbend );
this.mappingDetails.append$S("\nSEQ start/end " + seqstart + " " + seqend );
}
this.mainchain=this.pdb.getChains$().elementAt$I(maxchain);
this.mainchain.pdbstart=pdbstart;
this.mainchain.pdbend=pdbend;
this.mainchain.seqstart=seqstart;
this.mainchain.seqend=seqend;
this.mainchain.isVisible=true;
this.pdb=this.pdb;
this.prefsize=Clazz.new_([this.getSize$().width, this.getSize$().height],$I$(8,1).c$$I$I);
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
if (i != j) {
this.idmat.addElement$I$I$F(i, j, 0);
this.objmat.addElement$I$I$F(i, j, 0);
} else {
this.idmat.addElement$I$I$F(i, j, 1);
this.objmat.addElement$I$I$F(i, j, 1);
}}
}
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addKeyListener$java_awt_event_KeyListener(((P$.AppletPDBCanvas$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppletPDBCanvas$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (evt) {
this.b$['mc_view.AppletPDBCanvas'].doKeyPressed$java_awt_event_KeyEvent.apply(this.b$['mc_view.AppletPDBCanvas'], [evt]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.AppletPDBCanvas$2)));
this.findCentre$();
this.findWidth$();
this.setupBonds$();
this.scale=this.findScale$();
}, 1);

Clazz.newMeth(C$, 'setupBonds$',  function () {
this.seqColoursReady=false;
this.visiblebonds=Clazz.new_($I$(10,1));
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
if (this.pdb.getChains$().elementAt$I(ii).isVisible) {
var tmp=this.pdb.getChains$().elementAt$I(ii).bonds;
for (var i=0; i < tmp.size$(); i++) {
this.visiblebonds.addElement$O(tmp.elementAt$I(i));
}
}}
this.seqColoursReady=true;
this.colourBySequence$();
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'findWidth$',  function () {
var max=Clazz.array(Float.TYPE, [3]);
var min=Clazz.array(Float.TYPE, [3]);
max[0]=-1.0E30;
max[1]=-1.0E30;
max[2]=-1.0E30;
min[0]=1.0E30;
min[1]=1.0E30;
min[2]=1.0E30;
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
if (this.pdb.getChains$().elementAt$I(ii).isVisible) {
var bonds=this.pdb.getChains$().elementAt$I(ii).bonds;
for (var tmp, $tmp = bonds.iterator$(); $tmp.hasNext$()&&((tmp=($tmp.next$())),1);) {
if (tmp.start[0] >= max[0] ) {
max[0]=tmp.start[0];
}if (tmp.start[1] >= max[1] ) {
max[1]=tmp.start[1];
}if (tmp.start[2] >= max[2] ) {
max[2]=tmp.start[2];
}if (tmp.start[0] <= min[0] ) {
min[0]=tmp.start[0];
}if (tmp.start[1] <= min[1] ) {
min[1]=tmp.start[1];
}if (tmp.start[2] <= min[2] ) {
min[2]=tmp.start[2];
}if (tmp.end[0] >= max[0] ) {
max[0]=tmp.end[0];
}if (tmp.end[1] >= max[1] ) {
max[1]=tmp.end[1];
}if (tmp.end[2] >= max[2] ) {
max[2]=tmp.end[2];
}if (tmp.end[0] <= min[0] ) {
min[0]=tmp.end[0];
}if (tmp.end[1] <= min[1] ) {
min[1]=tmp.end[1];
}if (tmp.end[2] <= min[2] ) {
min[2]=tmp.end[2];
}}
}}
this.$width[0]=Math.abs(max[0] - min[0]);
this.$width[1]=Math.abs(max[1] - min[1]);
this.$width[2]=Math.abs(max[2] - min[2]);
this.maxwidth=this.$width[0];
if (this.$width[1] > this.$width[0] ) {
this.maxwidth=this.$width[1];
}if (this.$width[2] > this.$width[1] ) {
this.maxwidth=this.$width[2];
}});

Clazz.newMeth(C$, 'findScale$',  function () {
var dim;
var width;
var height;
if (this.getSize$().width != 0) {
width=this.getSize$().width;
height=this.getSize$().height;
} else {
width=this.prefsize.width;
height=this.prefsize.height;
}if (width < height) {
dim=width;
} else {
dim=height;
}return (dim / (1.5 * this.maxwidth));
});

Clazz.newMeth(C$, 'findCentre$',  function () {
var xtot=0;
var ytot=0;
var ztot=0;
var bsize=0;
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
if (this.pdb.getChains$().elementAt$I(ii).isVisible) {
var bonds=this.pdb.getChains$().elementAt$I(ii).bonds;
bsize+=bonds.size$();
for (var b, $b = bonds.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
xtot=xtot + b.start[0] + b.end[0] ;
ytot=ytot + b.start[1] + b.end[1] ;
ztot=ztot + b.start[2] + b.end[2] ;
}
}}
this.centre[0]=xtot / (2 * bsize);
this.centre[1]=ytot / (2 * bsize);
this.centre[2]=ztot / (2 * bsize);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.errorLoading) {
g.setColor$java_awt_Color($I$(11).white);
g.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
g.setColor$java_awt_Color($I$(11).black);
g.setFont$java_awt_Font(Clazz.new_($I$(2,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(12).getString$S("label.error_loading_pdb_data"), 50, (this.getSize$().height/2|0));
return;
}if (!this.seqColoursReady) {
g.setColor$java_awt_Color($I$(11).black);
g.setFont$java_awt_Font(Clazz.new_($I$(2,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(12).getString$S("label.fetching_pdb_data"), 50, (this.getSize$().height/2|0));
return;
}if ((this.img == null ) || (this.prefsize.width != this.getSize$().width) || (this.prefsize.height != this.getSize$().height)  ) {
try {
this.prefsize.width=this.getSize$().width;
this.prefsize.height=this.getSize$().height;
this.scale=this.findScale$();
this.img=this.createImage$I$I(this.prefsize.width, this.prefsize.height);
this.ig=this.img.getGraphics$();
this.redrawneeded=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}if (this.redrawneeded) {
this.drawAll$java_awt_Graphics$I$I(this.ig, this.prefsize.width, this.prefsize.height);
this.redrawneeded=false;
}if (this.appletToolTip != null ) {
this.ig.setColor$java_awt_Color($I$(11).red);
this.ig.drawString$S$I$I(this.appletToolTip, this.toolx, this.tooly);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
this.pdbAction=false;
});

Clazz.newMeth(C$, 'drawAll$java_awt_Graphics$I$I',  function (g, width, height) {
this.ig.setColor$java_awt_Color($I$(11).black);
this.ig.fillRect$I$I$I$I(0, 0, width, height);
this.drawScene$java_awt_Graphics(this.ig);
this.drawLabels$java_awt_Graphics(this.ig);
});

Clazz.newMeth(C$, 'setColours$jalview_schemes_ColourSchemeI',  function (cs) {
this.bysequence=false;
this.pdb.setColours$jalview_schemes_ColourSchemeI(cs);
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'colourBySequence$',  function () {
var sr=Clazz.new_($I$(13,1).c$$jalview_appletgui_AlignViewport,[this.ap.av]);
var mapping=this.ssm.getMapping$S(this.pdbentry.getFile$());
var showFeatures=false;
if (this.ap.av.isShowSequenceFeatures$()) {
if (this.fr == null ) {
this.fr=Clazz.new_($I$(14,1).c$$jalview_viewmodel_AlignmentViewport,[this.ap.av]);
}this.fr.transferSettings$jalview_api_FeatureRenderer(this.ap.getFeatureRenderer$());
showFeatures=true;
}var finder=Clazz.new_($I$(15,1).c$$jalview_api_FeatureRenderer,[this.fr]);
var chain;
if (this.bysequence && this.pdb != null  ) {
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
chain=this.pdb.getChains$().elementAt$I(ii);
for (var i=0; i < chain.bonds.size$(); i++) {
var tmp=chain.bonds.elementAt$I(i);
tmp.startCol=$I$(11).lightGray;
tmp.endCol=$I$(11).lightGray;
if (chain !== this.mainchain ) {
continue;
}for (var s=0; s < this.sequence.length; s++) {
for (var m=0; m < mapping.length; m++) {
if (mapping[m].getSequence$() === this.sequence[s] ) {
var pos=mapping[m].getSeqPos$I(tmp.at1.resNumber) - 1;
if (pos > 0) {
pos=this.sequence[s].findIndex$I(pos);
tmp.startCol=sr.getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(this.sequence[s], pos, finder);
}pos=mapping[m].getSeqPos$I(tmp.at2.resNumber) - 1;
if (pos > 0) {
pos=this.sequence[s].findIndex$I(pos);
tmp.endCol=sr.getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(this.sequence[s], pos, finder);
}}}
}
}
}
}});

Clazz.newMeth(C$, 'drawScene$java_awt_Graphics',  function (g) {
if (this.zbuffer) {
if (this.zsort == null ) {
this.zsort=Clazz.new_($I$(16,1));
}this.zsort.sort$java_util_Vector(this.visiblebonds);
}var tmpBond=null;
for (var i=0; i < this.visiblebonds.size$(); i++) {
tmpBond=this.visiblebonds.elementAt$I(i);
this.xstart=((((tmpBond.start[0] - this.centre[0]) * this.scale) + ((this.getSize$().width/2|0)))|0);
this.ystart=((((this.centre[1] - tmpBond.start[1]) * this.scale) + ((this.getSize$().height/2|0)))|0);
this.xend=((((tmpBond.end[0] - this.centre[0]) * this.scale) + ((this.getSize$().width/2|0)))|0);
this.yend=((((this.centre[1] - tmpBond.end[1]) * this.scale) + ((this.getSize$().height/2|0)))|0);
this.xmid=((this.xend + this.xstart)/2|0);
this.ymid=((this.yend + this.ystart)/2|0);
if (this.depthcue && !this.bymolecule ) {
if (tmpBond.start[2] < (this.centre[2] - (this.maxwidth / 6)) ) {
g.setColor$java_awt_Color(tmpBond.startCol.darker$().darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
g.setColor$java_awt_Color(tmpBond.endCol.darker$().darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
} else if (tmpBond.start[2] < (this.centre[2] + (this.maxwidth / 6)) ) {
g.setColor$java_awt_Color(tmpBond.startCol.darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
g.setColor$java_awt_Color(tmpBond.endCol.darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
} else {
g.setColor$java_awt_Color(tmpBond.startCol);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
g.setColor$java_awt_Color(tmpBond.endCol);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
}} else if (this.depthcue && this.bymolecule ) {
if (tmpBond.start[2] < (this.centre[2] - (this.maxwidth / 6)) ) {
g.setColor$java_awt_Color($I$(11).green.darker$().darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
} else if (tmpBond.start[2] < (this.centre[2] + (this.maxwidth / 6)) ) {
g.setColor$java_awt_Color($I$(11).green.darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
} else {
g.setColor$java_awt_Color($I$(11).green);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
}} else if (!this.depthcue && !this.bymolecule ) {
g.setColor$java_awt_Color(tmpBond.startCol);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
g.setColor$java_awt_Color(tmpBond.endCol);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
} else {
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
}if (this.highlightBond1 != null  && this.highlightBond1 === tmpBond  ) {
g.setColor$java_awt_Color($I$(11).white);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
}if (this.highlightBond2 != null  && this.highlightBond2 === tmpBond  ) {
g.setColor$java_awt_Color($I$(11).white);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
}}
});

Clazz.newMeth(C$, 'drawLine$java_awt_Graphics$I$I$I$I',  function (g, x1, y1, x2, y2) {
if (!this.wire) {
if ((Math.abs(y2 - y1) / Math.abs(x2 - x1)) < 0.5 ) {
g.drawLine$I$I$I$I(x1, y1, x2, y2);
g.drawLine$I$I$I$I(x1 + 1, y1 + 1, x2 + 1, y2 + 1);
g.drawLine$I$I$I$I(x1, y1 - 1, x2, y2 - 1);
} else {
g.setColor$java_awt_Color(g.getColor$().brighter$());
g.drawLine$I$I$I$I(x1, y1, x2, y2);
g.drawLine$I$I$I$I(x1 + 1, y1, x2 + 1, y2);
g.drawLine$I$I$I$I(x1 - 1, y1, x2 - 1, y2);
}} else {
g.drawLine$I$I$I$I(x1, y1, x2, y2);
}});

Clazz.newMeth(C$, 'minimumsize$',  function () {
return this.prefsize;
});

Clazz.newMeth(C$, 'preferredsize$',  function () {
return this.prefsize;
});

Clazz.newMeth(C$, 'doKeyPressed$java_awt_event_KeyEvent',  function (evt) {
if (evt.getKeyCode$() == 38) {
this.scale=(this.scale * 1.1);
this.redrawneeded=true;
this.repaint$();
} else if (evt.getKeyCode$() == 40) {
this.scale=(this.scale * 0.9);
this.redrawneeded=true;
this.repaint$();
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.pdbAction=true;
var fatom=this.findAtom$I$I(e.getX$(), e.getY$());
if (fatom != null ) {
fatom.isSelected=!fatom.isSelected;
this.redrawneeded=true;
this.repaint$();
if (this.foundchain != -1) {
var chain=this.pdb.getChains$().elementAt$I(this.foundchain);
if (chain === this.mainchain ) {
if (fatom.alignmentMapping != -1) {
if (this.highlightRes == null ) {
this.highlightRes=Clazz.new_($I$(10,1));
}var atomString=Integer.toString$I(fatom.alignmentMapping);
if (this.highlightRes.contains$O(atomString)) {
this.highlightRes.removeElement$O(atomString);
} else {
this.highlightRes.addElement$O(atomString);
}}}}}this.mx=e.getX$();
this.my=e.getY$();
this.omx=this.mx;
this.omy=this.my;
this.dragging=false;
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.pdbAction=true;
if (this.highlightBond1 != null ) {
this.highlightBond1.at2.isSelected=false;
this.highlightBond2.at1.isSelected=false;
this.highlightBond1=null;
this.highlightBond2=null;
}var fatom=this.findAtom$I$I(e.getX$(), e.getY$());
var chain=null;
if (this.foundchain != -1) {
chain=this.pdb.getChains$().elementAt$I(this.foundchain);
if (chain === this.mainchain ) {
this.mouseOverStructure$I$S(fatom.resNumber, chain.id);
}}if (fatom != null ) {
this.toolx=e.getX$();
this.tooly=e.getY$();
this.appletToolTip=chain.id + ":" + fatom.resNumber + " " + fatom.resName ;
this.redrawneeded=true;
this.repaint$();
} else {
this.mouseOverStructure$I$S(-1, chain != null  ? chain.id : null);
this.appletToolTip=null;
this.redrawneeded=true;
this.repaint$();
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (evt) {
var x=evt.getX$();
var y=evt.getY$();
this.mx=x;
this.my=y;
var objmat=Clazz.new_($I$(1,1).c$$I$I,[3, 3]);
objmat.setIdentity$();
if ((evt.getModifiers$() & 4) != 0) {
objmat.rotatez$F(((this.mx - this.omx)));
} else {
objmat.rotatex$F(((this.omy - this.my)));
objmat.rotatey$F(((this.omx - this.mx)));
}for (var chain, $chain = this.pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
for (var tmpBond, $tmpBond = chain.bonds.iterator$(); $tmpBond.hasNext$()&&((tmpBond=($tmpBond.next$())),1);) {
tmpBond.translate$F$F$F(-this.centre[0], -this.centre[1], -this.centre[2]);
tmpBond.start=objmat.vectorMultiply$FA(tmpBond.start);
tmpBond.end=objmat.vectorMultiply$FA(tmpBond.end);
tmpBond.translate$F$F$F(this.centre[0], this.centre[1], this.centre[2]);
}
}
objmat=null;
this.omx=this.mx;
this.omy=this.my;
this.dragging=true;
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
this.dragging=false;
return;
});

Clazz.newMeth(C$, 'drawLabels$java_awt_Graphics',  function (g) {
for (var chain, $chain = this.pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (chain.isVisible) {
for (var tmpBond, $tmpBond = chain.bonds.iterator$(); $tmpBond.hasNext$()&&((tmpBond=($tmpBond.next$())),1);) {
if (tmpBond.at1.isSelected) {
this.labelAtom$java_awt_Graphics$mc_view_Bond$I(g, tmpBond, 1);
}if (tmpBond.at2.isSelected) {
this.labelAtom$java_awt_Graphics$mc_view_Bond$I(g, tmpBond, 2);
}}
}}
});

Clazz.newMeth(C$, 'labelAtom$java_awt_Graphics$mc_view_Bond$I',  function (g, b, n) {
g.setFont$java_awt_Font(this.$font);
if (n == 1) {
var xstart=((((b.start[0] - this.centre[0]) * this.scale) + ((this.getSize$().width/2|0)))|0);
var ystart=((((this.centre[1] - b.start[1]) * this.scale) + ((this.getSize$().height/2|0)))|0);
g.setColor$java_awt_Color($I$(11).red);
g.drawString$S$I$I(b.at1.resName + "-" + b.at1.resNumber , xstart, ystart);
}if (n == 2) {
var xstart=((((b.end[0] - this.centre[0]) * this.scale) + ((this.getSize$().width/2|0)))|0);
var ystart=((((this.centre[1] - b.end[1]) * this.scale) + ((this.getSize$().height/2|0)))|0);
g.setColor$java_awt_Color($I$(11).red);
g.drawString$S$I$I(b.at2.resName + "-" + b.at2.resNumber , xstart, ystart);
}});

Clazz.newMeth(C$, 'findAtom$I$I',  function (x, y) {
var fatom=null;
this.foundchain=-1;
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
var chain=this.pdb.getChains$().elementAt$I(ii);
var truex;
var tmpBond=null;
if (chain.isVisible) {
var bonds=this.pdb.getChains$().elementAt$I(ii).bonds;
for (var i=0; i < bonds.size$(); i++) {
tmpBond=bonds.elementAt$I(i);
truex=((((tmpBond.start[0] - this.centre[0]) * this.scale) + ((this.getSize$().width/2|0)))|0);
if (Math.abs(truex - x) <= 2) {
var truey=((((this.centre[1] - tmpBond.start[1]) * this.scale) + ((this.getSize$().height/2|0)))|0);
if (Math.abs(truey - y) <= 2) {
fatom=tmpBond.at1;
this.foundchain=ii;
break;
}}}
truex=((((tmpBond.end[0] - this.centre[0]) * this.scale) + ((this.getSize$().width/2|0)))|0);
if (Math.abs(truex - x) <= 2) {
var truey=((((tmpBond.end[1] - this.centre[1]) * this.scale) + ((this.getSize$().height/2|0)))|0);
if (Math.abs(truey - y) <= 2) {
fatom=tmpBond.at2;
this.foundchain=ii;
break;
}}}if (fatom != null ) {
chain=this.pdb.getChains$().elementAt$I(this.foundchain);
}}
return fatom;
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'highlightRes$I',  function (ii) {
if (!this.seqColoursReady) {
return;
}if (this.highlightRes != null  && this.highlightRes.contains$O((ii - 1) + "") ) {
return;
}var index=-1;
var tmpBond;
for (index=0; index < this.mainchain.bonds.size$(); index++) {
tmpBond=this.mainchain.bonds.elementAt$I(index);
if (tmpBond.at1.alignmentMapping == ii - 1) {
if (this.highlightBond1 != null ) {
this.highlightBond1.at2.isSelected=false;
}if (this.highlightBond2 != null ) {
this.highlightBond2.at1.isSelected=false;
}this.highlightBond1=null;
this.highlightBond2=null;
if (index > 0) {
this.highlightBond1=this.mainchain.bonds.elementAt$I(index - 1);
this.highlightBond1.at2.isSelected=true;
}if (index != this.mainchain.bonds.size$()) {
this.highlightBond2=this.mainchain.bonds.elementAt$I(index);
this.highlightBond2.at1.isSelected=true;
}break;
}}
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'setAllchainsVisible$Z',  function (b) {
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
var chain=this.pdb.getChains$().elementAt$I(ii);
chain.isVisible=b;
}
this.mainchain.isVisible=true;
this.findCentre$();
this.setupBonds$();
});

Clazz.newMeth(C$, 'getStructureFiles$',  function () {
return Clazz.array(String, -1, [this.pdbentry.getFile$()]);
});

Clazz.newMeth(C$, 'mouseOverStructure$I$S',  function (pdbResNum, chain) {
if (this.lastMessage == null  || !this.lastMessage.equals$O(pdbResNum + chain) ) {
this.ssm.mouseOverStructure$I$S$S(pdbResNum, chain, this.pdbentry.getFile$());
}this.lastMessage=pdbResNum + chain;
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List',  function (atoms) {
if (!this.seqColoursReady) {
return;
}for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var atomIndex=atom.getAtomIndex$();
if (this.highlightRes != null  && this.highlightRes.contains$O((atomIndex - 1) + "") ) {
continue;
}this.highlightAtom$I(atomIndex);
}
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'highlightAtom$I',  function (atomIndex) {
var index=-1;
var tmpBond;
for (index=0; index < this.mainchain.bonds.size$(); index++) {
tmpBond=this.mainchain.bonds.elementAt$I(index);
if (tmpBond.at1.atomIndex == atomIndex) {
if (this.highlightBond1 != null ) {
this.highlightBond1.at2.isSelected=false;
}if (this.highlightBond2 != null ) {
this.highlightBond2.at1.isSelected=false;
}this.highlightBond1=null;
this.highlightBond2=null;
if (index > 0) {
this.highlightBond1=this.mainchain.bonds.elementAt$I(index - 1);
this.highlightBond1.at2.isSelected=true;
}if (index != this.mainchain.bonds.size$()) {
this.highlightBond2=this.mainchain.bonds.elementAt$I(index);
this.highlightBond2.at1.isSelected=true;
}break;
}}
});

Clazz.newMeth(C$, 'getColour$I$I$S$S',  function (atomIndex, pdbResNum, chain, pdbfile) {
return $I$(11).white;
});

Clazz.newMeth(C$, 'updateColours$O',  function (source) {
this.colourBySequence$();
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'releaseReferences$O',  function (svl) {
});

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI',  function (seq) {
if (this.sequence != null ) {
for (var s, $s = 0, $$s = this.sequence; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s === seq ) {
return true;
}}
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
