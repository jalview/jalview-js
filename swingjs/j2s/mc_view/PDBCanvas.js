(function(){var P$=Clazz.newPackage("mc_view"),I$=[[0,'java.awt.Font','StringBuffer','java.awt.Color','jalview.io.DataSourceType','jalview.analysis.AlignSeq','java.io.PrintStream','java.awt.Dimension','java.awt.event.KeyAdapter','javax.swing.ToolTipManager','java.util.Vector','java.awt.RenderingHints','jalview.gui.SequenceRenderer','jalview.gui.FeatureRenderer','jalview.renderer.seqfeatures.FeatureColourFinder','mc_view.Zsort','mc_view.MCMatrix']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDBCanvas", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'jalview.structure.StructureListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
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
this.$font=Clazz.new_($I$(1,1).c$$S$I$I,["Helvetica", 0, 10]);
this.mappingDetails=Clazz.new_($I$(2,1));
this.pdbAction=false;
this.seqColoursReady=false;
this.backgroundColour=$I$(3).black;
this.foundchain=-1;
this.resetLastRes=Clazz.new_($I$(2,1));
this.eval=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['redrawneeded','bysequence','depthcue','wire','bymolecule','zbuffer','dragging','pdbAction','seqColoursReady'],'F',['maxwidth','scale'],'I',['omx','mx','omy','my','bsize','xstart','xend','ystart','yend','xmid','ymid','foundchain'],'S',['inStr','inType','errorMessage','lastMessage'],'O',['pdb','jalview.io.StructureFile','pdbentry','jalview.datamodel.PDBEntry','img','java.awt.Image','ig','java.awt.Graphics','prefsize','java.awt.Dimension','centre','float[]','+$width','$font','java.awt.Font','seqcanvas','jalview.gui.SeqCanvas','sequence','jalview.datamodel.SequenceI[]','mappingDetails','StringBuffer','mainchain','mc_view.PDBChain','highlightRes','java.util.Vector','fr','jalview.renderer.seqfeatures.FeatureRenderer','backgroundColour','java.awt.Color','ap','jalview.gui.AlignmentPanel','ssm','jalview.structure.StructureSelectionManager','visiblebonds','java.util.Vector','zsort','mc_view.Zsort','highlightBond1','mc_view.Bond','+highlightBond2','resetLastRes','StringBuffer','+eval']]]

Clazz.newMeth(C$, 'init$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel$jalview_io_DataSourceType', function (pdbentry, seq, chains, ap, protocol) {
this.ap=ap;
this.pdbentry=pdbentry;
this.sequence=seq;
this.ssm=ap.av.getStructureSelectionManager$();
try {
this.pdb=this.ssm.setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, chains, pdbentry.getFile$(), protocol, ap.alignFrame);
if (protocol.equals$O($I$(4).PASTE)) {
pdbentry.setFile$S("INLINE" + this.pdb.getId$());
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return;
} else {
throw ex;
}
}
if (this.pdb == null ) {
this.errorMessage="Error loading file: " + pdbentry.getId$();
return;
}pdbentry.setId$S(this.pdb.getId$());
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
var as=Clazz.new_([sequence, this.pdb.getChains$().elementAt$I(i).sequence, "pep"],$I$(5,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S);
as.calcScoreMatrix$();
as.traceAlignment$();
var ps=((P$.PDBCanvas$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PDBCanvas$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PrintStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'print$S', function (x) {
this.b$['mc_view.PDBCanvas'].mappingDetails.append$S(x);
});

Clazz.newMeth(C$, 'println$', function () {
this.b$['mc_view.PDBCanvas'].mappingDetails.append$S("\n");
});
})()
), Clazz.new_($I$(6,1).c$$java_io_OutputStream,[this, null, System.out],P$.PDBCanvas$1));
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
this.prefsize=Clazz.new_([this.getSize$().width, this.getSize$().height],$I$(7,1).c$$I$I);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addKeyListener$java_awt_event_KeyListener(((P$.PDBCanvas$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PDBCanvas$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
this.keyPressed$java_awt_event_KeyEvent(evt);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.PDBCanvas$2)));
this.findCentre$();
this.findWidth$();
this.setupBonds$();
this.scale=this.findScale$();
$I$(9).sharedInstance$().registerComponent$javax_swing_JComponent(this);
$I$(9).sharedInstance$().setInitialDelay$I(0);
$I$(9).sharedInstance$().setDismissDelay$I(10000);
});

Clazz.newMeth(C$, 'setupBonds$', function () {
this.seqColoursReady=false;
this.visiblebonds=Clazz.new_($I$(10,1));
for (var chain, $chain = this.pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (chain.isVisible) {
for (var bond, $bond = chain.bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
this.visiblebonds.addElement$O(bond);
}
}}
this.updateSeqColours$();
this.seqColoursReady=true;
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'findWidth$', function () {
var max=Clazz.array(Float.TYPE, [3]);
var min=Clazz.array(Float.TYPE, [3]);
max[0]=-1.0E30;
max[1]=-1.0E30;
max[2]=-1.0E30;
min[0]=1.0E30;
min[1]=1.0E30;
min[2]=1.0E30;
for (var chain, $chain = this.pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (chain.isVisible) {
for (var tmp, $tmp = chain.bonds.iterator$(); $tmp.hasNext$()&&((tmp=($tmp.next$())),1);) {
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

Clazz.newMeth(C$, 'findScale$', function () {
var dim;
var width;
var height;
if (this.getWidth$() != 0) {
width=this.getWidth$();
height=this.getHeight$();
} else {
width=this.prefsize.width;
height=this.prefsize.height;
}if (width < height) {
dim=width;
} else {
dim=height;
}return (dim / (1.5 * this.maxwidth));
});

Clazz.newMeth(C$, 'findCentre$', function () {
var xtot=0;
var ytot=0;
var ztot=0;
var bsize=0;
for (var chain, $chain = this.pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (chain.isVisible) {
bsize+=chain.bonds.size$();
for (var bond, $bond = chain.bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
xtot=xtot + bond.start[0] + bond.end[0] ;
ytot=ytot + bond.start[1] + bond.end[1] ;
ztot=ztot + bond.start[2] + bond.end[2] ;
}
}}
this.centre[0]=xtot / (2 * bsize);
this.centre[1]=ytot / (2 * bsize);
this.centre[2]=ztot / (2 * bsize);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
if (!this.seqColoursReady || this.errorMessage != null  ) {
g.setColor$java_awt_Color($I$(3).black);
g.setFont$java_awt_Font(Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I(this.errorMessage == null  ? "Retrieving PDB data...." : this.errorMessage, 20, (this.getHeight$()/2|0));
return;
}if ((this.img == null ) || (this.prefsize.width != this.getWidth$()) || (this.prefsize.height != this.getHeight$())  ) {
this.prefsize.width=this.getWidth$();
this.prefsize.height=this.getHeight$();
this.scale=this.findScale$();
this.img=this.createImage$I$I(this.prefsize.width, this.prefsize.height);
this.ig=this.img.getGraphics$();
var ig2=this.ig;
ig2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(11).KEY_ANTIALIASING, $I$(11).VALUE_ANTIALIAS_ON);
this.redrawneeded=true;
}if (this.redrawneeded) {
this.drawAll$java_awt_Graphics$I$I(this.ig, this.prefsize.width, this.prefsize.height);
this.redrawneeded=false;
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
this.pdbAction=false;
});

Clazz.newMeth(C$, 'drawAll$java_awt_Graphics$I$I', function (g, width, height) {
g.setColor$java_awt_Color(this.backgroundColour);
g.fillRect$I$I$I$I(0, 0, width, height);
this.drawScene$java_awt_Graphics(g);
this.drawLabels$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'updateSeqColours$', function () {
if (this.pdbAction) {
return;
}this.colourBySequence$();
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'colourBySequence$', function () {
var sr=Clazz.new_($I$(12,1).c$$jalview_api_AlignViewportI,[this.ap.av]);
var mapping=this.ssm.getMapping$S(this.pdbentry.getFile$());
var showFeatures=false;
if (this.ap.av.isShowSequenceFeatures$()) {
if (this.fr == null ) {
this.fr=Clazz.new_($I$(13,1).c$$jalview_gui_AlignmentPanel,[this.ap]);
}this.fr.transferSettings$jalview_api_FeatureRenderer(this.ap.alignFrame.getFeatureRenderer$());
showFeatures=true;
}var finder=Clazz.new_($I$(14,1).c$$jalview_api_FeatureRenderer,[this.fr]);
var chain;
if (this.bysequence && this.pdb != null  ) {
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
chain=this.pdb.getChains$().elementAt$I(ii);
for (var i=0; i < chain.bonds.size$(); i++) {
var tmp=chain.bonds.elementAt$I(i);
tmp.startCol=$I$(3).lightGray;
tmp.endCol=$I$(3).lightGray;
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

Clazz.newMeth(C$, 'drawScene$java_awt_Graphics', function (g) {
if (this.zbuffer) {
if (this.zsort == null ) {
this.zsort=Clazz.new_($I$(15,1));
}this.zsort.sort$java_util_Vector(this.visiblebonds);
}var tmpBond=null;
for (var i=0; i < this.visiblebonds.size$(); i++) {
tmpBond=this.visiblebonds.elementAt$I(i);
this.xstart=((((tmpBond.start[0] - this.centre[0]) * this.scale) + ((this.getWidth$()/2|0)))|0);
this.ystart=((((this.centre[1] - tmpBond.start[1]) * this.scale) + ((this.getHeight$()/2|0)))|0);
this.xend=((((tmpBond.end[0] - this.centre[0]) * this.scale) + ((this.getWidth$()/2|0)))|0);
this.yend=((((this.centre[1] - tmpBond.end[1]) * this.scale) + ((this.getHeight$()/2|0)))|0);
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
g.setColor$java_awt_Color($I$(3).green.darker$().darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
} else if (tmpBond.start[2] < (this.centre[2] + (this.maxwidth / 6)) ) {
g.setColor$java_awt_Color($I$(3).green.darker$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
} else {
g.setColor$java_awt_Color($I$(3).green);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
}} else if (!this.depthcue && !this.bymolecule ) {
g.setColor$java_awt_Color(tmpBond.startCol);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
g.setColor$java_awt_Color(tmpBond.endCol);
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
} else {
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xend, this.yend);
}if (this.highlightBond1 != null  && this.highlightBond1 === tmpBond  ) {
g.setColor$java_awt_Color(tmpBond.endCol.brighter$().brighter$().brighter$().brighter$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xmid, this.ymid, this.xend, this.yend);
}if (this.highlightBond2 != null  && this.highlightBond2 === tmpBond  ) {
g.setColor$java_awt_Color(tmpBond.startCol.brighter$().brighter$().brighter$().brighter$());
this.drawLine$java_awt_Graphics$I$I$I$I(g, this.xstart, this.ystart, this.xmid, this.ymid);
}}
});

Clazz.newMeth(C$, 'drawLine$java_awt_Graphics$I$I$I$I', function (g, x1, y1, x2, y2) {
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

Clazz.newMeth(C$, 'minimumsize$', function () {
return this.prefsize;
});

Clazz.newMeth(C$, 'preferredsize$', function () {
return this.prefsize;
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 38) {
this.scale=(this.scale * 1.1);
this.redrawneeded=true;
this.repaint$();
} else if (evt.getKeyCode$() == 40) {
this.scale=(this.scale * 0.9);
this.redrawneeded=true;
this.repaint$();
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
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
this.highlightRes.remove$O(atomString);
} else {
this.highlightRes.add$O(atomString);
}}}}}this.mx=e.getX$();
this.my=e.getY$();
this.omx=this.mx;
this.omy=this.my;
this.dragging=false;
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
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
this.setToolTipText$S(chain.id + ":" + fatom.resNumber + " " + fatom.resName );
} else {
this.mouseOverStructure$I$S(-1, chain != null  ? chain.id : null);
this.setToolTipText$S(null);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var x=evt.getX$();
var y=evt.getY$();
this.mx=x;
this.my=y;
var objmat=Clazz.new_($I$(16,1).c$$I$I,[3, 3]);
objmat.setIdentity$();
if ((evt.getModifiers$() & 4) != 0) {
objmat.rotatez$F(((this.mx - this.omx)));
} else {
objmat.rotatex$F(((this.my - this.omy)));
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

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.dragging=false;
return;
});

Clazz.newMeth(C$, 'drawLabels$java_awt_Graphics', function (g) {
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

Clazz.newMeth(C$, 'labelAtom$java_awt_Graphics$mc_view_Bond$I', function (g, b, n) {
g.setFont$java_awt_Font(this.$font);
g.setColor$java_awt_Color($I$(3).red);
if (n == 1) {
var xstart=((((b.start[0] - this.centre[0]) * this.scale) + ((this.getWidth$()/2|0)))|0);
var ystart=((((this.centre[1] - b.start[1]) * this.scale) + ((this.getHeight$()/2|0)))|0);
g.drawString$S$I$I(b.at1.resName + "-" + b.at1.resNumber , xstart, ystart);
}if (n == 2) {
var xstart=((((b.end[0] - this.centre[0]) * this.scale) + ((this.getWidth$()/2|0)))|0);
var ystart=((((this.centre[1] - b.end[1]) * this.scale) + ((this.getHeight$()/2|0)))|0);
g.drawString$S$I$I(b.at2.resName + "-" + b.at2.resNumber , xstart, ystart);
}});

Clazz.newMeth(C$, 'findAtom$I$I', function (x, y) {
var fatom=null;
this.foundchain=-1;
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
var chain=this.pdb.getChains$().elementAt$I(ii);
var truex;
var tmpBond=null;
if (chain.isVisible) {
for (var bond, $bond = chain.bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
tmpBond=bond;
truex=((((tmpBond.start[0] - this.centre[0]) * this.scale) + ((this.getWidth$()/2|0)))|0);
if (Math.abs(truex - x) <= 2) {
var truey=((((this.centre[1] - tmpBond.start[1]) * this.scale) + ((this.getHeight$()/2|0)))|0);
if (Math.abs(truey - y) <= 2) {
fatom=tmpBond.at1;
this.foundchain=ii;
break;
}}}
truex=((((tmpBond.end[0] - this.centre[0]) * this.scale) + ((this.getWidth$()/2|0)))|0);
if (Math.abs(truex - x) <= 2) {
var truey=((((tmpBond.end[1] - this.centre[1]) * this.scale) + ((this.getHeight$()/2|0)))|0);
if (Math.abs(truey - y) <= 2) {
fatom=tmpBond.at2;
this.foundchain=ii;
break;
}}}if (fatom != null ) {
chain=this.pdb.getChains$().elementAt$I(this.foundchain);
}}
return fatom;
});

Clazz.newMeth(C$, 'highlightRes$I', function (ii) {
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

Clazz.newMeth(C$, 'setAllchainsVisible$Z', function (b) {
for (var ii=0; ii < this.pdb.getChains$().size$(); ii++) {
var chain=this.pdb.getChains$().elementAt$I(ii);
chain.isVisible=b;
}
this.mainchain.isVisible=true;
this.findCentre$();
this.setupBonds$();
});

Clazz.newMeth(C$, 'getStructureFiles$', function () {
return Clazz.array(String, -1, [this.pdbentry.getFile$()]);
});

Clazz.newMeth(C$, 'mouseOverStructure$I$S', function (pdbResNum, chain) {
if (this.lastMessage == null  || !this.lastMessage.equals$O(pdbResNum + chain) ) {
this.ssm.mouseOverStructure$I$S$S(pdbResNum, chain, this.pdbentry.getFile$());
}this.lastMessage=pdbResNum + chain;
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List', function (atoms) {
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

Clazz.newMeth(C$, 'highlightAtom$I', function (atomIndex) {
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

Clazz.newMeth(C$, 'getColour$I$I$S$S', function (atomIndex, pdbResNum, chain, pdbfile) {
return $I$(3).white;
});

Clazz.newMeth(C$, 'updateColours$O', function (source) {
this.colourBySequence$();
this.redrawneeded=true;
this.repaint$();
});

Clazz.newMeth(C$, 'releaseReferences$O', function (svl) {
});

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI', function (seq) {
if (this.sequence != null ) {
for (var s, $s = 0, $$s = this.sequence; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s === seq ) {
return true;
}}
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
