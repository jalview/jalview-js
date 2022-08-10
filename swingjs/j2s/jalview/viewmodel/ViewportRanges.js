(function(){var P$=Clazz.newPackage("jalview.viewmodel"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ViewportRanges", null, 'jalview.viewmodel.ViewportProperties');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wrappedMode=false;
},1);

C$.$fields$=[['Z',['wrappedMode'],'I',['startRes','endRes','startSeq','endSeq'],'O',['al','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI',  function (alignment) {
Clazz.super_(C$, this);
this.startRes=0;
this.endRes=alignment.getWidth$() - 1;
this.startSeq=0;
this.endSeq=alignment.getHeight$() - 1;
this.al=alignment;
}, 1);

Clazz.newMeth(C$, 'getAbsoluteAlignmentWidth$',  function () {
return this.al.getWidth$();
});

Clazz.newMeth(C$, 'getAbsoluteAlignmentHeight$',  function () {
return this.al.getHeight$() + this.al.getHiddenSequences$().getSize$();
});

Clazz.newMeth(C$, 'getVisibleAlignmentWidth$',  function () {
return this.al.getVisibleWidth$();
});

Clazz.newMeth(C$, 'getVisibleAlignmentHeight$',  function () {
return this.al.getHeight$();
});

Clazz.newMeth(C$, 'setStartRes$I',  function (res) {
var width=this.getViewportWidth$();
this.setStartEndRes$I$I(res, res + width - 1);
});

Clazz.newMeth(C$, 'setStartEndRes$I$I',  function (start, end) {
var oldvalues=p$1.updateStartEndRes$I$I.apply(this, [start, end]);
var oldstartres=oldvalues[0];
var oldendres=oldvalues[1];
this.changeSupport.firePropertyChange$S$I$I("startres", oldstartres, this.startRes);
if (oldstartres == this.startRes) {
this.changeSupport.firePropertyChange$S$I$I("endres", oldendres, this.endRes);
}});

Clazz.newMeth(C$, 'updateStartEndRes$I$I',  function (start, end) {
var oldstartres=this.startRes;
var lastColumn=this.getVisibleAlignmentWidth$() - 1;
if (!this.wrappedMode && (start > lastColumn) ) {
this.startRes=Math.max(lastColumn, 0);
} else if (start < 0) {
this.startRes=0;
} else {
this.startRes=start;
}var oldendres=this.endRes;
if (end < 0) {
this.endRes=0;
} else if (!this.wrappedMode && (end > lastColumn) ) {
this.endRes=Math.max(lastColumn, 0);
} else {
this.endRes=end;
}return Clazz.array(Integer.TYPE, -1, [oldstartres, oldendres]);
}, p$1);

Clazz.newMeth(C$, 'setStartSeq$I',  function (seq) {
var startseq=seq;
var height=this.getViewportHeight$();
if (startseq + height - 1 > this.getVisibleAlignmentHeight$() - 1) {
startseq=this.getVisibleAlignmentHeight$() - height;
}this.setStartEndSeq$I$I(startseq, startseq + height - 1);
});

Clazz.newMeth(C$, 'setStartEndSeq$I$I',  function (start, end) {
var oldvalues=p$1.updateStartEndSeq$I$I.apply(this, [start, end]);
var oldstartseq=oldvalues[0];
var oldendseq=oldvalues[1];
this.changeSupport.firePropertyChange$S$I$I("startseq", oldstartseq, this.startSeq);
if (oldstartseq == this.startSeq) {
this.changeSupport.firePropertyChange$S$I$I("endseq", oldendseq, this.endSeq);
}});

Clazz.newMeth(C$, 'updateStartEndSeq$I$I',  function (start, end) {
var oldstartseq=this.startSeq;
var visibleHeight=this.getVisibleAlignmentHeight$();
if (start > visibleHeight - 1) {
this.startSeq=Math.max(visibleHeight - 1, 0);
} else if (start < 0) {
this.startSeq=0;
} else {
this.startSeq=start;
}var oldendseq=this.endSeq;
if (end >= visibleHeight) {
this.endSeq=Math.max(visibleHeight - 1, 0);
} else if (end < 0) {
this.endSeq=0;
} else {
this.endSeq=end;
}return Clazz.array(Integer.TYPE, -1, [oldstartseq, oldendseq]);
}, p$1);

Clazz.newMeth(C$, 'setEndSeq$I',  function (seq) {
this.setStartEndSeq$I$I(Math.max(0, seq + 1 - this.getViewportHeight$()), seq);
});

Clazz.newMeth(C$, 'setStartResAndSeq$I$I',  function (res, seq) {
var width=this.getViewportWidth$();
var oldresvalues=p$1.updateStartEndRes$I$I.apply(this, [res, res + width - 1]);
var startseq=seq;
var height=this.getViewportHeight$();
if (startseq + height - 1 > this.getVisibleAlignmentHeight$() - 1) {
startseq=this.getVisibleAlignmentHeight$() - height;
}var oldseqvalues=p$1.updateStartEndSeq$I$I.apply(this, [startseq, startseq + height - 1]);
var old=Clazz.array(Integer.TYPE, -1, [oldresvalues[0], oldseqvalues[0]]);
var newresseq=Clazz.array(Integer.TYPE, -1, [this.startRes, this.startSeq]);
this.changeSupport.firePropertyChange$S$O$O("startresandseq", old, newresseq);
});

Clazz.newMeth(C$, 'getStartRes$',  function () {
return this.startRes;
});

Clazz.newMeth(C$, 'getEndRes$',  function () {
return this.endRes;
});

Clazz.newMeth(C$, 'getStartSeq$',  function () {
return this.startSeq;
});

Clazz.newMeth(C$, 'getEndSeq$',  function () {
return this.endSeq;
});

Clazz.newMeth(C$, 'setViewportWidth$I',  function (w) {
this.setStartEndRes$I$I(this.startRes, this.startRes + w - 1);
});

Clazz.newMeth(C$, 'setViewportHeight$I',  function (h) {
this.setStartEndSeq$I$I(this.startSeq, this.startSeq + h - 1);
});

Clazz.newMeth(C$, 'setViewportStartAndWidth$I$I',  function (start, w) {
var vpstart=start;
if (vpstart < 0) {
vpstart=0;
}if (!this.wrappedMode) {
if ((w <= this.getVisibleAlignmentWidth$()) && (vpstart + w - 1 > this.getVisibleAlignmentWidth$() - 1) ) {
vpstart=this.getVisibleAlignmentWidth$() - w;
}}this.setStartEndRes$I$I(vpstart, vpstart + w - 1);
});

Clazz.newMeth(C$, 'setViewportStartAndHeight$I$I',  function (start, h) {
var vpstart=start;
var visHeight=this.getVisibleAlignmentHeight$();
if (vpstart < 0) {
vpstart=0;
} else if (h <= visHeight && vpstart + h > visHeight ) {
vpstart=visHeight - h;
}this.setStartEndSeq$I$I(vpstart, vpstart + h - 1);
});

Clazz.newMeth(C$, 'getViewportWidth$',  function () {
return (this.endRes - this.startRes + 1);
});

Clazz.newMeth(C$, 'getViewportHeight$',  function () {
return (this.endSeq - this.startSeq + 1);
});

Clazz.newMeth(C$, 'scrollUp$Z',  function (up) {
if (up) {
if (this.wrappedMode) {
this.pageUp$();
} else {
if (this.startSeq < 1) {
return false;
}this.setStartSeq$I(this.startSeq - 1);
}} else {
if (this.wrappedMode) {
this.pageDown$();
} else {
if (this.endSeq >= this.getVisibleAlignmentHeight$() - 1) {
return false;
}this.setStartSeq$I(this.startSeq + 1);
}}return true;
});

Clazz.newMeth(C$, 'scrollRight$Z',  function (right) {
if (!right) {
if (this.startRes < 1) {
return false;
}this.setStartRes$I(this.startRes - 1);
} else {
if (this.endRes >= this.getVisibleAlignmentWidth$() - 1) {
return false;
}this.setStartRes$I(this.startRes + 1);
}return true;
});

Clazz.newMeth(C$, 'scrollToWrappedVisible$I',  function (res) {
var newStartRes=p$1.calcWrappedStartResidue$I.apply(this, [res]);
if (newStartRes == this.startRes) {
return false;
}this.setStartRes$I(newStartRes);
return true;
});

Clazz.newMeth(C$, 'calcWrappedStartResidue$I',  function (res) {
var oldStartRes=this.startRes;
var width=this.getViewportWidth$();
var up=res < oldStartRes;
var widthsToScroll=Math.abs(((res - oldStartRes)/width|0));
if (up) {
++widthsToScroll;
}var residuesToScroll=width * widthsToScroll;
var newStartRes=up ? oldStartRes - residuesToScroll : oldStartRes + residuesToScroll;
if (newStartRes < 0) {
newStartRes=0;
}return newStartRes;
}, p$1);

Clazz.newMeth(C$, 'scrollToVisible$I$I',  function (x, y) {
while (y < this.startSeq){
this.scrollUp$Z(true);
}
while (y > this.endSeq){
this.scrollUp$Z(false);
}
var hidden=this.al.getHiddenColumns$();
while (x < hidden.visibleToAbsoluteColumn$I(this.startRes)){
if (!this.scrollRight$Z(false)) {
break;
}}
while (x > hidden.visibleToAbsoluteColumn$I(this.endRes)){
if (!this.scrollRight$Z(true)) {
break;
}}
});

Clazz.newMeth(C$, 'setViewportLocation$I$I',  function (x, y) {
var changedLocation=false;
var visX=this.al.getHiddenColumns$().absoluteToVisibleColumn$I(x);
var visY=this.al.getHiddenSequences$().findIndexWithoutHiddenSeqs$I(y);
if (this.startRes > visX || visX > this.endRes  || this.startSeq > visY && visY > this.endSeq  ) {
var old=Clazz.array(Integer.TYPE, -1, [this.startRes, this.startSeq]);
var newresseq;
if (this.wrappedMode) {
var newstartres=p$1.calcWrappedStartResidue$I.apply(this, [visX]);
this.setStartRes$I(newstartres);
newresseq=Clazz.array(Integer.TYPE, -1, [this.startRes, this.startSeq]);
} else {
var newstartres=visX;
var width=this.getViewportWidth$();
if (newstartres + width - 1 > this.getVisibleAlignmentWidth$() - 1) {
newstartres=this.getVisibleAlignmentWidth$() - width;
}p$1.updateStartEndRes$I$I.apply(this, [newstartres, newstartres + width - 1]);
var newstartseq=visY;
var height=this.getViewportHeight$();
if (newstartseq + height - 1 > this.getVisibleAlignmentHeight$() - 1) {
newstartseq=this.getVisibleAlignmentHeight$() - height;
}p$1.updateStartEndSeq$I$I.apply(this, [newstartseq, newstartseq + height - 1]);
newresseq=Clazz.array(Integer.TYPE, -1, [this.startRes, this.startSeq]);
}changedLocation=true;
this.changeSupport.firePropertyChange$S$O$O("move_viewport", old, newresseq);
}return changedLocation;
});

Clazz.newMeth(C$, 'pageUp$',  function () {
if (this.wrappedMode) {
this.setStartRes$I(Math.max(0, this.getStartRes$() - this.getViewportWidth$()));
} else {
this.setViewportStartAndHeight$I$I(this.startSeq - (this.endSeq - this.startSeq), this.getViewportHeight$());
}});

Clazz.newMeth(C$, 'pageDown$',  function () {
if (this.wrappedMode) {
var newStart=this.getStartRes$() + Math.max(this.getViewportHeight$(), this.getViewportWidth$());
if (newStart < this.getVisibleAlignmentWidth$()) {
this.setStartRes$I(newStart);
}} else {
this.setViewportStartAndHeight$I$I(this.endSeq, this.getViewportHeight$());
}});

Clazz.newMeth(C$, 'setWrappedMode$Z',  function (wrapped) {
this.wrappedMode=wrapped;
});

Clazz.newMeth(C$, 'isWrappedMode$',  function () {
return this.wrappedMode;
});

Clazz.newMeth(C$, 'getWrappedScrollPosition$I',  function (topLeftColumn) {
var w=this.getViewportWidth$();
var scroll=(topLeftColumn/w|0);
scroll+=topLeftColumn % w > 0 ? 1 : 0;
return scroll;
});

Clazz.newMeth(C$, 'getWrappedMaxScroll$I',  function (topLeftColumn) {
var scrollPosition=this.getWrappedScrollPosition$I(topLeftColumn);
var columnsRemaining=this.getVisibleAlignmentWidth$() - topLeftColumn;
var width=this.getViewportWidth$();
var widthsRemaining=(columnsRemaining/width|0) + (columnsRemaining % width > 0 ? 1 : 0) - 1;
var maxScroll=scrollPosition + widthsRemaining;
return maxScroll;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
