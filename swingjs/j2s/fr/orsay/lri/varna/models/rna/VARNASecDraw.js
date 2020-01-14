(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),p$1={},p$2={},I$=[[0,'java.awt.geom.GeneralPath','java.util.ArrayList','fr.orsay.lri.varna.models.rna.VARNASecDraw','java.awt.geom.AffineTransform',['java.awt.geom.Point2D','.Double'],'java.util.Arrays','fr.orsay.lri.varna.models.rna.RNA','java.util.Random',['fr.orsay.lri.varna.models.rna.VARNASecDraw','.UnpairedPortion'],['fr.orsay.lri.varna.models.rna.VARNASecDraw','.RNATree'],['fr.orsay.lri.varna.models.rna.VARNASecDraw','.PairedPortion'],'java.awt.geom.Area',['fr.orsay.lri.varna.models.rna.VARNASecDraw','.HelixEmbedding']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNASecDraw", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$._vp=null;
C$._rnd=null;
C$.MAX_NUM_DIR=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._vp=null;
C$._rnd=Clazz.new_($I$(8));
C$.MAX_NUM_DIR=8;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._depth=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._depth=0;
}, 1);

Clazz.newMeth(C$, 'buildTree$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$fr_orsay_lri_varna_models_rna_RNA', function (i, j, parent, r) {
if (i >= j) {
parent.addPortion$fr_orsay_lri_varna_models_rna_VARNASecDraw_Portion(Clazz.new_($I$(9).c$$I$I, [this, null, i, j - i + 1]));
}if (r.get_listeBases$().get$I(i).getElementStructure$() == j) {
var i1=i;
var j1=j;
var over=false;
while ((i + 1 < r.get_listeBases$().size$()) && (j - 1 >= 0) && (i + 1 <= j - 1) && !over  ){
if (r.get_listeBases$().get$I(i).getElementStructure$() != j) {
over=true;
} else {
i++;
j--;
}}
var i2=i;
var j2=j;
var t=Clazz.new_($I$(10), [this, null]);
if (i < j - 1) p$2.buildTree$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$fr_orsay_lri_varna_models_rna_RNA.apply(this, [i2, j2, t, r]);
var p=Clazz.new_($I$(11).c$$I$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree, [this, null, i1, j1, i2 - i1, t]);
parent.addPortion$fr_orsay_lri_varna_models_rna_VARNASecDraw_Portion(p);
} else {
var k=i;
var l;
var start=k;
var len=0;
while (k <= j){
l=r.get_listeBases$().get$I(k).getElementStructure$();
if (l != -1) {
if (len > 0) {
parent.addPortion$fr_orsay_lri_varna_models_rna_VARNASecDraw_Portion(Clazz.new_($I$(9).c$$I$I, [this, null, start, len]));
}p$2.buildTree$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$fr_orsay_lri_varna_models_rna_RNA.apply(this, [k, l, parent, r]);
k=l + 1;
start=k;
len=0;
} else {
len++;
k++;
}}
if (len > 0) {
parent.addPortion$fr_orsay_lri_varna_models_rna_VARNASecDraw_Portion(Clazz.new_($I$(9).c$$I$I, [this, null, start, len]));
}}}, p$2);

Clazz.newMeth(C$, 'nextPlacement$IA', function (p) {
var i=p.length - 1;
var prev=C$.MAX_NUM_DIR;
var stop=false;
while ((i >= 0) && !stop ){
if (p[i] == prev - 1) {
prev=p[i];
i--;
} else {
stop=true;
}}
if (i < 0) throw Clazz.new_(Clazz.load('Exception').c$$S,["No more placement available"]);
p[i]++;
i++;
while (i < p.length){
p[i]=p[i - 1] + 1;
i++;
}
return p;
});

Clazz.newMeth(C$, 'drawTree$D$D$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$D$fr_orsay_lri_varna_models_rna_RNA', function (x0, y0, t, dir, r) {
var collision=true;
var x=x0;
var y=y0;
var numHelices=0;
var nbHel=1;
var nbUn=0;
var totCirc=$I$(7).BASE_PAIR_DISTANCE + $I$(7).LOOP_DISTANCE;
for (var i=0; i < t.getNumPortions$(); i++) {
var p=t.getPortion$I(i);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.PairedPortion")) {
totCirc += ($I$(7).BASE_PAIR_DISTANCE + $I$(7).LOOP_DISTANCE);
nbHel+=1;
} else {
totCirc += $I$(7).LOOP_DISTANCE * (p.getNumBases$());
nbUn+=p.getNumBases$() + 1;
}}
var radius=r.determineRadius$I$I$D(nbHel, nbUn, totCirc / (6.283185307179586));
for (var i=0; i < t.getNumPortions$(); i++) {
var p=t.getPortion$I(i);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.PairedPortion")) {
numHelices++;
}}
var placement=Clazz.array(Integer.TYPE, [numHelices]);
var inc=(C$.MAX_NUM_DIR) / (numHelices + 1);
var val=inc;
for (var i=0; i < numHelices; i++) {
placement[i]=(Math.round(val)|0);
val += inc;
}
System.out.println$();
var angleIncr=6.283185307179586 / C$.MAX_NUM_DIR;
while (collision){
x=x0 + radius * Math.cos(dir + 3.141592653589793);
y=y0 + radius * Math.sin(dir + 3.141592653589793);
var shapes=Clazz.new_($I$(2));
var curH=0;
for (var i=0; i < t.getNumPortions$(); i++) {
var p=t.getPortion$I(i);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.PairedPortion")) {
var ndir=dir + placement[curH] * angleIncr;
curH++;
var pp=p;
for (var j=0; j < pp._len; j++) {
var i1=pp._pos1 + j;
var i2=pp._pos2 - j;
var vx=Math.cos(ndir);
var vy=Math.sin(ndir);
var nx=x + (((j) * $I$(7).LOOP_DISTANCE + radius) * vx);
var ny=y + (((j) * $I$(7).LOOP_DISTANCE + radius) * vy);
r.get_listeBases$().get$I(i1).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[nx + $I$(7).BASE_PAIR_DISTANCE * vy / 2.0, ny - $I$(7).BASE_PAIR_DISTANCE * vx / 2.0]));
r.get_listeBases$().get$I(i2).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[nx - $I$(7).BASE_PAIR_DISTANCE * vy / 2.0, ny + $I$(7).BASE_PAIR_DISTANCE * vx / 2.0]));
}
var nx=x + (((pp._len - 1) * $I$(7).LOOP_DISTANCE + radius) * Math.cos(ndir));
var ny=y + (((pp._len - 1) * $I$(7).LOOP_DISTANCE + radius) * Math.sin(ndir));
this.drawTree$D$D$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$D$fr_orsay_lri_varna_models_rna_RNA(nx, ny, pp._r, ndir + 3.141592653589793, r);
shapes.add$TE(pp.getOutline$fr_orsay_lri_varna_models_rna_RNA(r));
} else if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.UnpairedPortion")) {
var up=p;
for (var j=0; j < up._len; j++) {
r.get_listeBases$().get$I(up._pos + j).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[x, y]));
}
}}
if (shapes.size$() > 0) {
collision=false;
for (var i=0; (i < shapes.size$()) && !collision ; i++) {
var a1=Clazz.new_($I$(12).c$$java_awt_Shape,[shapes.get$I(i)]);
for (var j=i + 1; (j < shapes.size$()) && !collision ; j++) {
var a2=Clazz.new_($I$(12).c$$java_awt_Shape,[shapes.get$I(j)]);
a1.intersect$java_awt_geom_Area(a2);
if (!a1.isEmpty$()) {
collision=true;
}}
}
if (collision) {
placement=this.nextPlacement$IA(placement);
}} else {
collision=false;
}}
});

Clazz.newMeth(C$, 'determineRadius$I$I$fr_orsay_lri_varna_models_rna_RNA', function (numHelices, numUnpaired, r) {
var circ=numHelices * $I$(7).BASE_PAIR_DISTANCE + (numHelices + numUnpaired) * $I$(7).LOOP_DISTANCE;
return circ / (6.283185307179586);
});

Clazz.newMeth(C$, 'predrawTree$D$D$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$D$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding$java_util_ArrayList', function (x0, y0, t, dir, r, parent, all) {
var x=x0;
var y=y0;
var numHelices=0;
var numUBases=0;
var totCirc=$I$(7).BASE_PAIR_DISTANCE + $I$(7).LOOP_DISTANCE;
for (var i=0; i < t.getNumPortions$(); i++) {
var p=t.getPortion$I(i);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.PairedPortion")) {
totCirc += ($I$(7).BASE_PAIR_DISTANCE + $I$(7).LOOP_DISTANCE);
numHelices++;
} else {
totCirc += $I$(7).LOOP_DISTANCE * (p.getNumBases$());
numUBases+=p.getNumBases$();
}}
var radius=this.determineRadius$I$I$fr_orsay_lri_varna_models_rna_RNA(numHelices + 1, numUBases, r);
var placement=Clazz.array(Integer.TYPE, [numHelices]);
var inc=(C$.MAX_NUM_DIR) / (numHelices + 1);
var val=inc;
for (var i=0; i < numHelices; i++) {
placement[i]=(Math.round(val)|0);
val += inc;
}
var angleIncr=6.283185307179586 / C$.MAX_NUM_DIR;
x=x0 + radius * Math.cos(dir + 3.141592653589793);
y=y0 + radius * Math.sin(dir + 3.141592653589793);
var curH=0;
for (var i=0; i < t.getNumPortions$(); i++) {
var p=t.getPortion$I(i);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.PairedPortion")) {
var ndir=dir + placement[curH] * angleIncr;
var pp=p;
for (var j=0; j < pp._len; j++) {
var i1=pp._pos1 + j;
var i2=pp._pos2 - j;
var vx=Math.cos(ndir);
var vy=Math.sin(ndir);
var nx=x + (((j) * $I$(7).LOOP_DISTANCE + radius) * vx);
var ny=y + (((j) * $I$(7).LOOP_DISTANCE + radius) * vy);
r.get_listeBases$().get$I(i1).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[nx + $I$(7).BASE_PAIR_DISTANCE * vy / 2.0, ny - $I$(7).BASE_PAIR_DISTANCE * vx / 2.0]));
r.get_listeBases$().get$I(i2).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[nx - $I$(7).BASE_PAIR_DISTANCE * vy / 2.0, ny + $I$(7).BASE_PAIR_DISTANCE * vx / 2.0]));
}
var nx=x + (((pp._len - 1) * $I$(7).LOOP_DISTANCE + radius) * Math.cos(ndir));
var ny=y + (((pp._len - 1) * $I$(7).LOOP_DISTANCE + radius) * Math.sin(ndir));
var nh=Clazz.new_($I$(13).c$$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_VARNASecDraw_PairedPortion$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding, [this, null, Clazz.new_($I$(5).c$$D$D,[x, y]), pp, r, parent]);
parent.addHelixEmbedding$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding$I(nh, placement[curH]);
all.add$TE(nh);
this.predrawTree$D$D$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$D$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding$java_util_ArrayList(nx, ny, pp._r, ndir + 3.141592653589793, r, nh, all);
curH++;
} else if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.UnpairedPortion")) {
var up=p;
for (var j=0; j < up._len; j++) {
r.get_listeBases$().get$I(up._pos + j).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[x, y]));
}
}}
});

Clazz.newMeth(C$, 'drawRNA$D$fr_orsay_lri_varna_models_rna_RNA', function (dirAngle, r) {
var t=Clazz.new_($I$(10), [this, null]);
p$2.buildTree$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$fr_orsay_lri_varna_models_rna_RNA.apply(this, [0, r.get_listeBases$().size$() - 1, t, r]);
System.out.println$O(t);
var all=Clazz.new_($I$(2));
var root=null;
try {
root=Clazz.new_($I$(13).c$$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_VARNASecDraw_PairedPortion$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding, [this, null, Clazz.new_($I$(5).c$$D$D,[0.0, 0.0]), Clazz.new_($I$(11).c$$I$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree, [this, null, 0, 0, 0, t]), r, null]);
this.predrawTree$D$D$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree$D$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding$java_util_ArrayList(0, 0, t, 0.0, r, root, all);
var steps=1000;
var prevbadness=1.7976931348623157E308;
while ((steps > 0) && (prevbadness > 0 ) ){
var chosen=all.get$I(C$._rnd.nextInt$I(all.size$()));
var delta=chosen.chooseNextMove$();
if (C$._vp != null ) {
var p=Clazz.new_($I$(1));
for (var i=0; i < all.size$(); i++) {
p.append$java_awt_Shape$Z(all.get$I(i).getShape$(), false);
}
r._debugShape=p;
C$._vp.paintImmediately$I$I$I$I(0, 0, C$._vp.getWidth$(), C$._vp.getHeight$());
}var badness=0.0;
for (var i=0; i < all.size$(); i++) {
var s1=all.get$I(i).getShape$();
for (var j=i + 1; j < all.size$(); j++) {
var s2=all.get$I(j).getShape$();
var a=Clazz.new_($I$(12).c$$java_awt_Shape,[s1]);
a.intersect$java_awt_geom_Area(Clazz.new_($I$(12).c$$java_awt_Shape,[s2]));
if (!a.isEmpty$()) {
badness++;
}}
}
if (badness - prevbadness > 0 ) {
chosen.cancelMove$I(delta);
} else {
prevbadness=badness;
}System.out.println$D(badness);
steps--;
}
if (root != null ) {
root.reflectCoordinates$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return t;
});
;
(function(){var C$=Clazz.newClass(P$.VARNASecDraw, "Portion", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNASecDraw, "UnpairedPortion", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['fr.orsay.lri.varna.models.rna.VARNASecDraw','.Portion']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._pos=0;
this._len=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (pos, len) {
Clazz.super_(C$, this,1);
this._len=len;
this._pos=pos;
}, 1);

Clazz.newMeth(C$, 'getBaseList$', function () {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
return "U[" + this._pos + "," + (this._pos + this._len - 1) + "]" ;
});

Clazz.newMeth(C$, 'getNumBases$', function () {
return this._len;
});

Clazz.newMeth(C$, 'getOutline$fr_orsay_lri_varna_models_rna_RNA', function (r) {
var gp=Clazz.new_($I$(1));
var l=r.get_listeBases$();
var p0=l.get$I(this._pos).getCoords$();
gp.moveTo$F$F(p0.x, p0.y);
for (var i=1; i < this._len; i++) {
var p=l.get$I(this._pos + i).getCoords$();
gp.lineTo$F$F(p.x, p.y);
}
return gp;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNASecDraw, "PairedPortion", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['fr.orsay.lri.varna.models.rna.VARNASecDraw','.Portion']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._pos1=0;
this._pos2=0;
this._len=0;
this._r=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$fr_orsay_lri_varna_models_rna_VARNASecDraw_RNATree', function (pos1, pos2, len, r) {
Clazz.super_(C$, this,1);
this._pos1=pos1;
this._pos2=pos2;
this._len=len;
this._r=r;
}, 1);

Clazz.newMeth(C$, 'getBaseList$', function () {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
return "H[" + this._pos1 + "," + (this._pos1 + this._len - 1) + "][" + (this._pos2 - this._len + 1) + "," + (this._pos2) + "]\n" + this._r.toString() ;
});

Clazz.newMeth(C$, 'getNumBases$', function () {
return 2 * this._len;
});

Clazz.newMeth(C$, 'getLocalOutline$fr_orsay_lri_varna_models_rna_RNA', function (r) {
var gp=Clazz.new_($I$(1));
if (this._len > 0) {
var l=r.get_listeBases$();
var p1=l.get$I(this._pos1).getCoords$();
var p2=l.get$I(this._pos1 + this._len - 1).getCoords$();
var p3=l.get$I(this._pos2 - this._len + 1).getCoords$();
var p4=l.get$I(this._pos2).getCoords$();
gp.moveTo$F$F(p1.x, p1.y);
gp.lineTo$F$F(p2.x, p2.y);
gp.lineTo$F$F(p3.x, p3.y);
gp.lineTo$F$F(p4.x, p4.y);
}return gp;
});

Clazz.newMeth(C$, 'getOutline$fr_orsay_lri_varna_models_rna_RNA', function (r) {
return this.getOutline$fr_orsay_lri_varna_models_rna_RNA$Z(r, false);
});

Clazz.newMeth(C$, 'getOutline$fr_orsay_lri_varna_models_rna_RNA$Z', function (r, local) {
var l=r.get_listeBases$();
var p1=l.get$I(this._pos1).getCoords$();
var p2=l.get$I(this._pos1 + this._len - 1).getCoords$();
var p3=l.get$I(this._pos2 - this._len + 1).getCoords$();
var p4=l.get$I(this._pos2).getCoords$();
var gp=Clazz.new_($I$(1));
gp.moveTo$F$F(p1.x, p1.y);
gp.lineTo$F$F(p2.x, p2.y);
if (!local) gp.append$java_awt_Shape$Z(this._r.getOutline$fr_orsay_lri_varna_models_rna_RNA(r), true);
gp.lineTo$F$F(p3.x, p3.y);
gp.lineTo$F$F(p4.x, p4.y);
return gp;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNASecDraw, "RNATree", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._portions=null;
this._numPairedPortions=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._portions=Clazz.new_($I$(2));
this._numPairedPortions=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addPortion$fr_orsay_lri_varna_models_rna_VARNASecDraw_Portion', function (p) {
this._portions.add$TE(p);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.PairedPortion")) {
this._numPairedPortions++;
}});

Clazz.newMeth(C$, 'getNumPortions$', function () {
return this._portions.size$();
});

Clazz.newMeth(C$, 'getPortion$I', function (i) {
return this._portions.get$I(i);
});

Clazz.newMeth(C$, 'toString', function () {
var result="";
this.this$0._depth++;
for (var i=0; i < this._portions.size$(); i++) {
result += String.format$S$OA("%1$#" + this.this$0._depth + "s" , [new Character(' ')]);
result += this._portions.get$I(i).toString();
if (i < this._portions.size$() - 1) result += "\n";
}
this.this$0._depth--;
return result;
});

Clazz.newMeth(C$, 'getOutline$fr_orsay_lri_varna_models_rna_RNA', function (r) {
var result=Clazz.new_($I$(1));
for (var i=0; i < this._portions.size$(); i++) {
result.append$java_awt_Shape$Z(this._portions.get$I(i).getOutline$fr_orsay_lri_varna_models_rna_RNA(r), true);
}
return result;
});
})()
;
(function(){var C$=Clazz.newClass(P$.VARNASecDraw, "HelixEmbedding", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._clip=null;
this._support=null;
this._children=null;
this._indices=null;
this._p=null;
this._r=null;
this._parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._children=Clazz.new_($I$(2));
this._indices=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_VARNASecDraw_PairedPortion$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding', function (support, p, r, parent) {
C$.$init$.apply(this);
this._support=support;
this._clip=p.getLocalOutline$fr_orsay_lri_varna_models_rna_RNA(r);
this._p=p;
this._r=r;
this._parent=parent;
}, 1);

Clazz.newMeth(C$, 'addHelixEmbedding$fr_orsay_lri_varna_models_rna_VARNASecDraw_HelixEmbedding$I', function (h, index) {
this._children.add$TE(h);
this._indices.add$TE(new Integer(index));
});

Clazz.newMeth(C$, 'getShape$', function () {
return this._clip;
});

Clazz.newMeth(C$, 'chooseNextMove$', function () {
var i=this._parent._children.indexOf$O(this);
var min;
var max;
if (this._parent._children.size$() < $I$(3).MAX_NUM_DIR - 1) {
if (this._parent._children.size$() == 1) {
min=1;
max=$I$(3).MAX_NUM_DIR - 1;
} else {
if (i == 0) {
min=1;
} else {
min=(this._parent._indices.get$I(i - 1)).intValue$() + 1;
}if (i == this._parent._children.size$() - 1) {
max=$I$(3).MAX_NUM_DIR - 1;
} else {
max=(this._parent._indices.get$I(i + 1)).intValue$() - 1;
}}var prevIndex=(this._parent._indices.get$I(i)).intValue$();
var newIndex=min + $I$(3)._rnd.nextInt$I(max + 1 - min);
var rot=((newIndex - prevIndex) * 3.141592653589793 * 2.0 ) / $I$(3).MAX_NUM_DIR;
this._parent._indices.set$I$TE(i, new Integer(newIndex));
this.rotate$D(rot);
return newIndex - prevIndex;
}return 0;
});

Clazz.newMeth(C$, 'cancelMove$I', function (delta) {
var i=this._parent._children.indexOf$O(this);
var prevIndex=(this._parent._indices.get$I(i)).intValue$();
var rot=((-delta) * 3.141592653589793 * 2.0 ) / $I$(3).MAX_NUM_DIR;
this._parent._indices.set$I$TE(i, new Integer(prevIndex - delta));
this.rotate$D(rot);
});

Clazz.newMeth(C$, 'rotate$D', function (angle) {
p$1.transform$java_awt_geom_AffineTransform.apply(this, [$I$(4).getRotateInstance$D$D$D(angle, this._support.x, this._support.y)]);
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform', function (a) {
this._clip.transform$java_awt_geom_AffineTransform(a);
var p=a.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this._support, null);
this._support.setLocation$D$D(p.getX$(), p.getY$());
for (var i=0; i < this._children.size$(); i++) {
p$1.transform$java_awt_geom_AffineTransform.apply(this._children.get$I(i), [a]);
}
}, p$1);

Clazz.newMeth(C$, 'reflectCoordinates$', function () {
var mbl=this._r.get_listeBases$();
if (this._p._len > 0) {
var pi=this._clip.getPathIterator$java_awt_geom_AffineTransform($I$(4).getRotateInstance$D(0.0));
var p=Clazz.new_($I$(2));
while (!pi.isDone$()){
var args=Clazz.array(Double.TYPE, [6]);
var type=pi.currentSegment$DA(args);
if ((type == 0) || (type == 1) ) {
var np=Clazz.new_($I$(5).c$$D$D,[args[0], args[1]]);
p.add$TE(np);
System.out.println$S($I$(6).toString$DA(args));
}pi.next$();
}
if (p.size$() < 4) {
return;
}var startLeft=p.get$I(0);
var endLeft=p.get$I(1);
var endRight=p.get$I(2);
var startRight=p.get$I(3);
var d=startLeft.distance$java_awt_geom_Point2D(endLeft);
var vx=endLeft.x - startLeft.x;
var vy=endLeft.y - startLeft.y;
var interval=0.0;
if (this._p._len > 1) {
vx /= d;
vy /= d;
interval=d / (this._p._len - 1);
System.out.println$S("DELTA: " + new Double(interval).toString() + " " + new Double($I$(7).LOOP_DISTANCE).toString() );
}for (var n=0; n < this._p._len; n++) {
var i=this._p._pos1 + n;
var j=this._p._pos2 - n;
var mbLeft=mbl.get$I(i);
mbLeft.setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[startLeft.x + n * vx * interval , startLeft.y + n * vy * interval ]));
var mbRight=mbl.get$I(j);
mbRight.setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[startRight.x + n * vx * interval , startRight.y + n * vy * interval ]));
}
}for (var i=0; i < this._children.size$(); i++) {
this._children.get$I(i).reflectCoordinates$();
}
if (this._children.size$() > 0) {
var center=this._children.get$I(0)._support;
for (var i=0; i < this._p._r.getNumPortions$(); i++) {
var p=this._p._r.getPortion$I(i);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.UnpairedPortion")) {
var up=p;
for (var j=0; j < up._len; j++) {
var n=up._pos + j;
var mbLeft=mbl.get$I(n);
mbLeft.setCoords$java_awt_geom_Point2D_Double(center);
}
}}
} else {
p$1.placeTerminalLoop$java_util_ArrayList$fr_orsay_lri_varna_models_rna_RNA.apply(this, [mbl, this._r]);
}});

Clazz.newMeth(C$, 'placeTerminalLoop$java_util_ArrayList$fr_orsay_lri_varna_models_rna_RNA', function (mbl, r) {
if ((this._children.size$() == 0) && (this._p._r.getNumPortions$() == 1) ) {
var p=this._p._r.getPortion$I(0);
if (Clazz.instanceOf(p, "fr.orsay.lri.varna.models.rna.VARNASecDraw.UnpairedPortion")) {
var up=p;
var rad=this.this$0.determineRadius$I$I$fr_orsay_lri_varna_models_rna_RNA.apply(this.this$0, [1, up.getNumBases$(), this._r]);
var a=this._p._pos1 + this._p._len - 1;
var b=this._p._pos2 - (this._p._len - 1);
var mbLeft=mbl.get$I(a);
var mbRight=mbl.get$I(b);
var pl=mbLeft.getCoords$();
var pr=mbRight.getCoords$();
var pm=Clazz.new_($I$(5).c$$D$D,[(pl.x + pr.x) / 2.0, (pl.y + pr.y) / 2.0]);
var vx=(pl.x - pr.x) / pl.distance$java_awt_geom_Point2D(pr);
var vy=(pl.y - pr.y) / pl.distance$java_awt_geom_Point2D(pr);
var vnx=-vy;
var vny=vx;
var pc=Clazz.new_($I$(5).c$$D$D,[pm.x + rad * vnx, pm.y + rad * vny]);
var circ=$I$(7).LOOP_DISTANCE * (1.0 + up.getNumBases$()) + $I$(7).BASE_PAIR_DISTANCE;
var incrLoop=3.141592653589793 * 2.0 * $I$(7).LOOP_DISTANCE  / circ;
var angle=3.141592653589793 * 2.0 * $I$(7).BASE_PAIR_DISTANCE  / (2.0 * circ);
for (var j=0; j < up._len; j++) {
var n=up._pos + j;
var mb=mbl.get$I(n);
angle += incrLoop;
var dx=-Math.cos(angle) * vnx + Math.sin(angle) * vx;
var dy=-Math.cos(angle) * vny + Math.sin(angle) * vy;
var pf=Clazz.new_($I$(5).c$$D$D,[pc.x + rad * dx, pc.y + rad * dy]);
mb.setCoords$java_awt_geom_Point2D_Double(pf);
}
}}}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return "Emb.Hel.: " + this._p.toString();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
