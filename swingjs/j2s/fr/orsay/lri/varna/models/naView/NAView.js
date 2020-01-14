(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.naView"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.naView.Loop','fr.orsay.lri.varna.models.naView.Radloop','java.util.ArrayList','fr.orsay.lri.varna.models.naView.Base','fr.orsay.lri.varna.models.naView.Region','fr.orsay.lri.varna.models.naView.Connection','fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NAView");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ANUM=0;
this.MAXITER=0;
this.bases=null;
this.nbase=0;
this.nregion=0;
this.loop_count=0;
this.root=null;
this.loops=null;
this.regions=null;
this.rlphead=null;
this.lencut=0;
this.RADIUS_REDUCTION_FACTOR=0;
this.debug=false;
this.angleinc=0;
this._h=0;
this._listeVARNAListener=null;
this.noIterationFailureYet=false;
this.HELIX_FACTOR=0;
this.BACKBONE_DISTANCE=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ANUM=9999.0;
this.MAXITER=500;
this.root=Clazz.new_($I$(1));
this.rlphead=Clazz.new_($I$(2));
this.lencut=0.8;
this.RADIUS_REDUCTION_FACTOR=1.4;
this.debug=false;
this._listeVARNAListener=Clazz.new_($I$(3));
this.noIterationFailureYet=true;
this.HELIX_FACTOR=0.6;
this.BACKBONE_DISTANCE=27;
}, 1);

Clazz.newMeth(C$, 'naview_xy_coordinates$java_util_ArrayList$java_util_ArrayList$java_util_ArrayList', function (pair_table2, x, y) {
if (this.debug) System.out.println$S("naview_xy_coordinates");
if (pair_table2.size$() == 0) return 0;
var i;
var pair_table=Clazz.new_($I$(3).c$$I,[pair_table2.size$() + 1]);
pair_table.add$TE(new Integer(pair_table2.size$()));
for (var j=0; j < pair_table2.size$(); j++) {
pair_table.add$TE(new Integer((pair_table2.get$I(j)).shortValue$() + 1));
}
if (this.debug) {
p$1.infoStructure$java_util_ArrayList.apply(this, [pair_table]);
}this.nbase=(pair_table.get$I(0)).intValue$();
this.bases=Clazz.new_($I$(3).c$$I,[this.nbase + 1]);
for (var index=0; index < this.bases.size$(); index++) {
this.bases.add$TE(Clazz.new_($I$(4)));
}
this.regions=Clazz.new_($I$(3));
for (var index=0; index < this.nbase + 1; index++) {
this.regions.add$TE(Clazz.new_($I$(5)));
}
p$1.read_in_bases$java_util_ArrayList.apply(this, [pair_table]);
if (this.debug) p$1.infoBasesMate.apply(this, []);
this.rlphead=null;
p$1.find_regions.apply(this, []);
if (this.debug) p$1.infoRegions.apply(this, []);
this.loop_count=0;
this.loops=Clazz.new_($I$(3).c$$I,[this.nbase + 1]);
for (var index=0; index < this.nbase + 1; index++) {
this.loops.add$TE(Clazz.new_($I$(1)));
}
p$1.construct_loop$I.apply(this, [0]);
if (this.debug) p$1.infoBasesExtracted.apply(this, []);
p$1.find_central_loop.apply(this, []);
if (this.debug) p$1.infoRoot.apply(this, []);
if (this.debug) p$1.dump_loops.apply(this, []);
p$1.traverse_loop$fr_orsay_lri_varna_models_naView_Loop$fr_orsay_lri_varna_models_naView_Connection.apply(this, [this.root, null]);
for (i=0; i < this.nbase; i++) {
x.add$TE(new Double(100 + this.BACKBONE_DISTANCE * this.bases.get$I(i + 1).getX$()));
y.add$TE(new Double(100 + this.BACKBONE_DISTANCE * this.bases.get$I(i + 1).getY$()));
}
return this.nbase;
});

Clazz.newMeth(C$, 'infoStructure$java_util_ArrayList', function (pair_table) {
System.out.println$S("structure:");
for (var j=0; j < pair_table.size$(); j++) {
System.out.print$S("#" + j + ":" + pair_table.get$I(j) + "\t" );
if (j % 10 == 0) System.out.println$();
}
System.out.println$();
}, p$1);

Clazz.newMeth(C$, 'infoBasesMate', function () {
System.out.println$S("Bases mate:");
for (var index=0; index < this.bases.size$(); index++) {
System.out.print$S("#" + index + ":" + this.bases.get$I(index).getMate$() + "\t" );
if (index % 10 == 0) System.out.println$();
}
System.out.println$();
}, p$1);

Clazz.newMeth(C$, 'infoRegions', function () {
System.out.println$S("regions:");
for (var index=0; index < this.regions.size$(); index++) {
System.out.print$S("(" + this.regions.get$I(index).getStart1$() + "," + this.regions.get$I(index).getStart2$() + ";" + this.regions.get$I(index).getEnd1$() + "," + this.regions.get$I(index).getEnd2$() + ")\t\t" );
if (index % 5 == 0) System.out.println$();
}
System.out.println$();
}, p$1);

Clazz.newMeth(C$, 'infoBasesExtracted', function () {
System.out.println$S("Bases extracted:");
for (var index=0; index < this.bases.size$(); index++) {
System.out.print$S("i=" + index + ":" + this.bases.get$I(index).isExtracted$() + "\t" );
if (index % 5 == 0) System.out.println$();
}
System.out.println$();
}, p$1);

Clazz.newMeth(C$, 'infoRoot', function () {
System.out.println$S("root" + this.root.getNconnection$() + ";" + this.root.getNumber$() );
System.out.println$S("\troot : ");
System.out.println$S("\tdepth=" + this.root.getDepth$());
System.out.println$S("\tmark=" + this.root.isMark$());
System.out.println$S("\tnumber=" + this.root.getNumber$());
System.out.println$S("\tradius=" + new Double(this.root.getRadius$()).toString());
System.out.println$S("\tx=" + new Double(this.root.getX$()).toString());
System.out.println$S("\ty=" + new Double(this.root.getY$()).toString());
System.out.println$S("\tnconnection=" + this.root.getNconnection$());
}, p$1);

Clazz.newMeth(C$, 'read_in_bases$java_util_ArrayList', function (pair_table) {
if (this.debug) System.out.println$S("read_in_bases");
var i;
var npairs;
this.bases.add$TE(Clazz.new_($I$(4)));
this.bases.get$I(0).setMate$I(0);
this.bases.get$I(0).setExtracted$Z(false);
this.bases.get$I(0).setX$D(9999.0);
this.bases.get$I(0).setY$D(9999.0);
for (npairs=0, i=1; i <= this.nbase; i++) {
this.bases.add$TE(Clazz.new_($I$(4)));
this.bases.get$I(i).setExtracted$Z(false);
this.bases.get$I(i).setX$D(9999.0);
this.bases.get$I(i).setY$D(9999.0);
this.bases.get$I(i).setMate$I((pair_table.get$I(i)).intValue$());
if (((pair_table.get$I(i)).intValue$()|0) > i) npairs++;
}
if (npairs == 0) {
this.bases.get$I(1).setMate$I(this.nbase);
this.bases.get$I(this.nbase).setMate$I(1);
}}, p$1);

Clazz.newMeth(C$, 'find_regions', function () {
if (this.debug) System.out.println$S("find_regions");
var i;
var mate;
var nb1;
nb1=this.nbase + 1;
var mark=Clazz.new_($I$(3).c$$I,[nb1]);
for (i=0; i < nb1; i++) mark.add$TE(new Boolean(false));

this.nregion=0;
for (i=0; i <= this.nbase; i++) {
if ((mate=this.bases.get$I(i).getMate$()) != 0 && !(mark.get$I(i)).booleanValue$() ) {
this.regions.get$I(this.nregion).setStart1$I(i);
this.regions.get$I(this.nregion).setEnd2$I(mate);
mark.set$I$TE(i, new Boolean(true));
mark.set$I$TE(mate, new Boolean(true));
this.bases.get$I(i).setRegion$fr_orsay_lri_varna_models_naView_Region(this.regions.get$I(this.nregion));
this.bases.get$I(mate).setRegion$fr_orsay_lri_varna_models_naView_Region(this.regions.get$I(this.nregion));
for (i++, mate--; i < mate && this.bases.get$I(i).getMate$() == mate ; i++, mate--) {
mark.set$I$TE(mate, new Boolean(true));
mark.set$I$TE(i, new Boolean(true));
this.bases.get$I(i).setRegion$fr_orsay_lri_varna_models_naView_Region(this.regions.get$I(this.nregion));
this.bases.get$I(mate).setRegion$fr_orsay_lri_varna_models_naView_Region(this.regions.get$I(this.nregion));
}
this.regions.get$I(this.nregion).setEnd1$I(--i);
this.regions.get$I(this.nregion).setStart2$I(mate + 1);
if (this.debug) {
if (this.nregion == 0) System.out.printf$S$OA("\nRegions are:\n", []);
System.out.printf$S$OA("Region %d is %d-%d and %d-%d with gap of %d.\n", [new Integer(this.nregion + 1), new Integer(this.regions.get$I(this.nregion).getStart1$()), new Integer(this.regions.get$I(this.nregion).getEnd1$()), new Integer(this.regions.get$I(this.nregion).getStart2$()), new Integer(this.regions.get$I(this.nregion).getEnd2$()), new Integer(this.regions.get$I(this.nregion).getStart2$() - this.regions.get$I(this.nregion).getEnd1$() + 1)]);
}this.nregion++;
}}
}, p$1);

Clazz.newMeth(C$, 'construct_loop$I', function (ibase) {
if (this.debug) System.out.println$S("construct_loop");
var i;
var mate;
var retloop=Clazz.new_($I$(1));
var lp=Clazz.new_($I$(1));
var cp=Clazz.new_($I$(6));
var rp=Clazz.new_($I$(5));
var rlp=Clazz.new_($I$(2));
retloop=this.loops.get$I(this.loop_count++);
retloop.setNconnection$I(0);
retloop.setDepth$I(0);
retloop.setNumber$I(this.loop_count);
retloop.setRadius$D(0.0);
for (rlp=this.rlphead; rlp != null ; rlp=rlp.getNext$()) if (rlp.getLoopnumber$() == this.loop_count) retloop.setRadius$D(rlp.getRadius$());

i=ibase;
do {
if ((mate=this.bases.get$I(i).getMate$()) != 0) {
rp=this.bases.get$I(i).getRegion$();
if (!this.bases.get$I(rp.getStart1$()).isExtracted$()) {
if (i == rp.getStart1$()) {
this.bases.get$I(rp.getStart1$()).setExtracted$Z(true);
this.bases.get$I(rp.getEnd1$()).setExtracted$Z(true);
this.bases.get$I(rp.getStart2$()).setExtracted$Z(true);
this.bases.get$I(rp.getEnd2$()).setExtracted$Z(true);
lp=p$1.construct_loop$I.apply(this, [rp.getEnd1$() < this.nbase ? rp.getEnd1$() + 1 : 0]);
} else if (i == rp.getStart2$()) {
this.bases.get$I(rp.getStart2$()).setExtracted$Z(true);
this.bases.get$I(rp.getEnd2$()).setExtracted$Z(true);
this.bases.get$I(rp.getStart1$()).setExtracted$Z(true);
this.bases.get$I(rp.getEnd1$()).setExtracted$Z(true);
lp=p$1.construct_loop$I.apply(this, [rp.getEnd2$() < this.nbase ? rp.getEnd2$() + 1 : 0]);
} else {
throw Clazz.new_($I$(7).c$$S,["naview:Error detected in construct_loop. i = " + i + " not found in region table.\n" ]);
}retloop.setNconnection$I(retloop.getNconnection$() + 1);
cp=Clazz.new_($I$(6));
retloop.setConnection$I$fr_orsay_lri_varna_models_naView_Connection(retloop.getNconnection$() - 1, cp);
retloop.setConnection$I$fr_orsay_lri_varna_models_naView_Connection(retloop.getNconnection$(), null);
cp.setLoop$fr_orsay_lri_varna_models_naView_Loop(lp);
cp.setRegion$fr_orsay_lri_varna_models_naView_Region(rp);
if (i == rp.getStart1$()) {
cp.setStart$I(rp.getStart1$());
cp.setEnd$I(rp.getEnd2$());
} else {
cp.setStart$I(rp.getStart2$());
cp.setEnd$I(rp.getEnd1$());
}cp.setExtruded$Z(false);
cp.setBroken$Z(false);
lp.setNconnection$I(lp.getNconnection$() + 1);
cp=Clazz.new_($I$(6));
lp.setConnection$I$fr_orsay_lri_varna_models_naView_Connection(lp.getNconnection$() - 1, cp);
lp.setConnection$I$fr_orsay_lri_varna_models_naView_Connection(lp.getNconnection$(), null);
cp.setLoop$fr_orsay_lri_varna_models_naView_Loop(retloop);
cp.setRegion$fr_orsay_lri_varna_models_naView_Region(rp);
if (i == rp.getStart1$()) {
cp.setStart$I(rp.getStart2$());
cp.setEnd$I(rp.getEnd1$());
} else {
cp.setStart$I(rp.getStart1$());
cp.setEnd$I(rp.getEnd2$());
}cp.setExtruded$Z(false);
cp.setBroken$Z(false);
}i=mate;
}if (++i > this.nbase) i=0;
} while (i != ibase);
return retloop;
}, p$1);

Clazz.newMeth(C$, 'dump_loops', function () {
System.out.println$S("dump_loops");
var il;
var ilp;
var irp;
var lp;
var cp;
System.out.printf$S$OA("\nRoot loop is #%d\n", [new Integer(this.loops.indexOf$O(this.root) + 1)]);
for (il=0; il < this.loop_count; il++) {
lp=this.loops.get$I(il);
System.out.printf$S$OA("Loop %d has %d connections:\n", [new Integer(il + 1), new Integer(lp.getNconnection$())]);
for (var i=0; (cp=lp.getConnection$I(i)) != null ; i++) {
ilp=(this.loops.indexOf$O(cp.getLoop$())) + 1;
irp=(this.regions.indexOf$O(cp.getRegion$())) + 1;
System.out.printf$S$OA("  Loop %d Region %d (%d-%d)\n", [new Integer(ilp), new Integer(irp), new Integer(cp.getStart$()), new Integer(cp.getEnd$())]);
}
}
}, p$1);

Clazz.newMeth(C$, 'find_central_loop', function () {
if (this.debug) System.out.println$S("find_central_loop");
var lp=Clazz.new_($I$(1));
var maxconn;
var maxdepth;
var i;
p$1.determine_depths.apply(this, []);
maxconn=0;
maxdepth=-1;
for (i=0; i < this.loop_count; i++) {
lp=this.loops.get$I(i);
if (lp.getNconnection$() > maxconn) {
maxdepth=lp.getDepth$();
maxconn=lp.getNconnection$();
this.root=lp;
} else if (lp.getDepth$() > maxdepth && lp.getNconnection$() == maxconn ) {
maxdepth=lp.getDepth$();
this.root=lp;
}}
}, p$1);

Clazz.newMeth(C$, 'determine_depths', function () {
if (this.debug) System.out.println$S("determine_depths");
var lp=Clazz.new_($I$(1));
var i;
var j;
for (i=0; i < this.loop_count; i++) {
lp=this.loops.get$I(i);
for (j=0; j < this.loop_count; j++) this.loops.get$I(j).setMark$Z(false);

lp.setDepth$I(p$1.depth$fr_orsay_lri_varna_models_naView_Loop.apply(this, [lp]));
}
}, p$1);

Clazz.newMeth(C$, 'depth$fr_orsay_lri_varna_models_naView_Loop', function (lp) {
if (this.debug) System.out.println$S("depth");
var count;
var ret;
var d;
if (lp.getNconnection$() <= 1) return 0;
if (lp.isMark$()) return -1;
lp.setMark$Z(true);
count=0;
ret=0;
for (var i=0; lp.getConnection$I(i) != null ; i++) {
d=p$1.depth$fr_orsay_lri_varna_models_naView_Loop.apply(this, [lp.getConnection$I(i).getLoop$()]);
if (d >= 0) {
if (++count == 1) ret=d;
 else if (ret > d) ret=d;
}}
lp.setMark$Z(false);
return ret + 1;
}, p$1);

Clazz.newMeth(C$, 'traverse_loop$fr_orsay_lri_varna_models_naView_Loop$fr_orsay_lri_varna_models_naView_Connection', function (lp, anchor_connection) {
if (this.debug) System.out.println$S("  traverse_loop");
var xs;
var ys;
var xe;
var ye;
var xn;
var yn;
var angleinc;
var r;
var radius;
var xc;
var yc;
var xo;
var yo;
var astart;
var aend;
var a;
var cp;
var cpnext;
var acp;
var cpprev;
var i;
var j;
var n;
var ic;
var da;
var maxang;
var count;
var icstart;
var icend;
var icmiddle;
var icroot;
var done;
var done_all_connections;
var rooted;
var sign;
var midx;
var midy;
var nrx;
var nry;
var mx;
var my;
var vx;
var vy;
var dotmv;
var nmidx;
var nmidy;
var icstart1;
var icup;
var icdown;
var icnext;
var direction;
var dan;
var dx;
var dy;
var rr;
var cpx;
var cpy;
var cpnextx;
var cpnexty;
var cnx;
var cny;
var rcn;
var rc;
var lnx;
var lny;
var rl;
var ac;
var acn;
var sx;
var sy;
var dcp;
var imaxloop=0;
angleinc=6.283185307179586 / (this.nbase + 1);
acp=null;
icroot=-1;
var indice=0;
for (ic=0; (cp=lp.getConnection$I(indice)) != null ; indice++, ic++) {
xs=-Math.sin(angleinc * cp.getStart$());
ys=Math.cos(angleinc * cp.getStart$());
xe=-Math.sin(angleinc * cp.getEnd$());
ye=Math.cos(angleinc * cp.getEnd$());
xn=ye - ys;
yn=xs - xe;
r=Math.sqrt(xn * xn + yn * yn);
cp.setXrad$D(xn / r);
cp.setYrad$D(yn / r);
cp.setAngle$D(Math.atan2(yn, xn));
if (cp.getAngle$() < 0.0 ) cp.setAngle$D(cp.getAngle$() + 6.283185307179586);
if (anchor_connection != null  && anchor_connection.getRegion$() === cp.getRegion$()  ) {
acp=cp;
icroot=ic;
}}
 set_radius : while (true){
p$1.determine_radius$fr_orsay_lri_varna_models_naView_Loop$D.apply(this, [lp, this.lencut]);
radius=lp.getRadius$() / 1.4;
if (anchor_connection == null ) xc=yc=0.0;
 else {
xo=(this.bases.get$I(acp.getStart$()).getX$() + this.bases.get$I(acp.getEnd$()).getX$()) / 2.0;
yo=(this.bases.get$I(acp.getStart$()).getY$() + this.bases.get$I(acp.getEnd$()).getY$()) / 2.0;
xc=xo - radius * acp.getXrad$();
yc=yo - radius * acp.getYrad$();
}if (icroot == -1) icstart=0;
 else icstart=icroot;
cp=lp.getConnection$I(icstart);
count=0;
if (this.debug) {
System.out.printf$S$OA("Now processing loop %d\n", [new Integer(lp.getNumber$())]);
System.out.println$S("  " + lp);
}done=false;
do {
j=icstart - 1;
if (j < 0) j=lp.getNconnection$() - 1;
cpprev=lp.getConnection$I(j);
if (!p$1.connected_connection$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection.apply(this, [cpprev, cp])) {
done=true;
} else {
icstart=j;
cp=cpprev;
}if (++count > lp.getNconnection$()) {
maxang=-1.0;
for (ic=0; ic < lp.getNconnection$(); ic++) {
j=ic + 1;
if (j >= lp.getNconnection$()) j=0;
cp=lp.getConnection$I(ic);
cpnext=lp.getConnection$I(j);
ac=cpnext.getAngle$() - cp.getAngle$();
if (ac < 0.0 ) ac += 6.283185307179586;
if (ac > maxang ) {
maxang=ac;
imaxloop=ic;
}}
icend=imaxloop;
icstart=imaxloop + 1;
if (icstart >= lp.getNconnection$()) icstart=0;
cp=lp.getConnection$I(icend);
cp.setBroken$Z(true);
done=true;
}} while (!done);
done_all_connections=false;
icstart1=icstart;
if (this.debug) System.out.printf$S$OA("  Icstart1 = %d\n", [new Integer(icstart1)]);
while (!done_all_connections){
count=0;
done=false;
icend=icstart;
rooted=false;
while (!done){
cp=lp.getConnection$I(icend);
if (icend == icroot) rooted=true;
j=icend + 1;
if (j >= lp.getNconnection$()) {
j=0;
}cpnext=lp.getConnection$I(j);
if (p$1.connected_connection$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection.apply(this, [cp, cpnext])) {
if (++count >= lp.getNconnection$()) break;
icend=j;
} else {
done=true;
}}
icmiddle=p$1.find_ic_middle$I$I$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Loop.apply(this, [icstart, icend, anchor_connection, acp, lp]);
ic=icup=icdown=icmiddle;
if (this.debug) System.out.printf$S$OA("  IC start = %d  middle = %d  end = %d\n", [new Integer(icstart), new Integer(icmiddle), new Integer(icend)]);
done=false;
direction=0;
while (!done){
if (direction < 0) {
ic=icup;
} else if (direction == 0) {
ic=icmiddle;
} else {
ic=icdown;
}if (ic >= 0) {
cp=lp.getConnection$I(ic);
if (anchor_connection == null  || acp !== cp  ) {
if (direction == 0) {
astart=cp.getAngle$() - Math.asin(1.0 / 2.0 / radius );
aend=cp.getAngle$() + Math.asin(1.0 / 2.0 / radius );
this.bases.get$I(cp.getStart$()).setX$D(xc + radius * Math.cos(astart));
this.bases.get$I(cp.getStart$()).setY$D(yc + radius * Math.sin(astart));
this.bases.get$I(cp.getEnd$()).setX$D(xc + radius * Math.cos(aend));
this.bases.get$I(cp.getEnd$()).setY$D(yc + radius * Math.sin(aend));
} else if (direction < 0) {
j=ic + 1;
if (j >= lp.getNconnection$()) j=0;
cp=lp.getConnection$I(ic);
cpnext=lp.getConnection$I(j);
cpx=cp.getXrad$();
cpy=cp.getYrad$();
ac=(cp.getAngle$() + cpnext.getAngle$()) / 2.0;
if (cp.getAngle$() > cpnext.getAngle$() ) ac -= 3.141592653589793;
cnx=Math.cos(ac);
cny=Math.sin(ac);
lnx=cny;
lny=-cnx;
da=cpnext.getAngle$() - cp.getAngle$();
if (da < 0.0 ) da += 6.283185307179586;
if (cp.isExtruded$()) {
if (da <= 1.5707963267948966 ) rl=2.0;
 else rl=1.5;
} else {
rl=1.0;
}this.bases.get$I(cp.getEnd$()).setX$D(this.bases.get$I(cpnext.getStart$()).getX$() + rl * lnx);
this.bases.get$I(cp.getEnd$()).setY$D(this.bases.get$I(cpnext.getStart$()).getY$() + rl * lny);
this.bases.get$I(cp.getStart$()).setX$D(this.bases.get$I(cp.getEnd$()).getX$() + cpy);
this.bases.get$I(cp.getStart$()).setY$D(this.bases.get$I(cp.getEnd$()).getY$() - cpx);
} else {
j=ic - 1;
if (j < 0) j=lp.getNconnection$() - 1;
cp=lp.getConnection$I(j);
cpnext=lp.getConnection$I(ic);
cpnextx=cpnext.getXrad$();
cpnexty=cpnext.getYrad$();
ac=(cp.getAngle$() + cpnext.getAngle$()) / 2.0;
if (cp.getAngle$() > cpnext.getAngle$() ) ac -= 3.141592653589793;
cnx=Math.cos(ac);
cny=Math.sin(ac);
lnx=-cny;
lny=cnx;
da=cpnext.getAngle$() - cp.getAngle$();
if (da < 0.0 ) da += 6.283185307179586;
if (cp.isExtruded$()) {
if (da <= 1.5707963267948966 ) rl=2.0;
 else rl=1.5;
} else {
rl=1.0;
}this.bases.get$I(cpnext.getStart$()).setX$D(this.bases.get$I(cp.getEnd$()).getX$() + rl * lnx);
this.bases.get$I(cpnext.getStart$()).setY$D(this.bases.get$I(cp.getEnd$()).getY$() + rl * lny);
this.bases.get$I(cpnext.getEnd$()).setX$D(this.bases.get$I(cpnext.getStart$()).getX$() - cpnexty);
this.bases.get$I(cpnext.getEnd$()).setY$D(this.bases.get$I(cpnext.getStart$()).getY$() + cpnextx);
}}}if (direction < 0) {
if (icdown == icend) {
icdown=-1;
} else if (icdown >= 0) {
if (++icdown >= lp.getNconnection$()) {
icdown=0;
}}direction=1;
} else {
if (icup == icstart) icup=-1;
 else if (icup >= 0) {
if (--icup < 0) {
icup=lp.getNconnection$() - 1;
}}direction=-1;
}done=icup == -1 && icdown == -1 ;
}
icnext=icend + 1;
if (icnext >= lp.getNconnection$()) icnext=0;
if (icend != icstart && (!(icstart == icstart1 && icnext == icstart1 )) ) {
cp=lp.getConnection$I(icstart);
cpnext=lp.getConnection$I(icend);
dx=this.bases.get$I(cpnext.getEnd$()).getX$() - this.bases.get$I(cp.getStart$()).getX$();
dy=this.bases.get$I(cpnext.getEnd$()).getY$() - this.bases.get$I(cp.getStart$()).getY$();
midx=this.bases.get$I(cp.getStart$()).getX$() + dx / 2.0;
midy=this.bases.get$I(cp.getStart$()).getY$() + dy / 2.0;
rr=Math.sqrt(dx * dx + dy * dy);
mx=dx / rr;
my=dy / rr;
vx=xc - midx;
vy=yc - midy;
rr=Math.sqrt(dx * dx + dy * dy);
vx /= rr;
vy /= rr;
dotmv=vx * mx + vy * my;
nrx=dotmv * mx - vx;
nry=dotmv * my - vy;
rr=Math.sqrt(nrx * nrx + nry * nry);
nrx /= rr;
nry /= rr;
dx=this.bases.get$I(cp.getStart$()).getX$() - xc;
dy=this.bases.get$I(cp.getStart$()).getY$() - yc;
ac=Math.atan2(dy, dx);
if (ac < 0.0 ) ac += 6.283185307179586;
dx=this.bases.get$I(cpnext.getEnd$()).getX$() - xc;
dy=this.bases.get$I(cpnext.getEnd$()).getY$() - yc;
acn=Math.atan2(dy, dx);
if (acn < 0.0 ) acn += 6.283185307179586;
if (acn < ac ) acn += 6.283185307179586;
if (acn - ac > 3.141592653589793 ) sign=-1;
 else sign=1;
nmidx=xc + sign * radius * nrx ;
nmidy=yc + sign * radius * nry ;
if (rooted) {
xc -= nmidx - midx;
yc -= nmidy - midy;
} else {
for (ic=icstart; ; ) {
cp=lp.getConnection$I(ic);
i=cp.getStart$();
this.bases.get$I(i).setX$D(this.bases.get$I(i).getX$() + nmidx - midx);
this.bases.get$I(i).setY$D(this.bases.get$I(i).getY$() + nmidy - midy);
i=cp.getEnd$();
this.bases.get$I(i).setX$D(this.bases.get$I(i).getX$() + nmidx - midx);
this.bases.get$I(i).setY$D(this.bases.get$I(i).getY$() + nmidy - midy);
if (ic == icend) break;
if (++ic >= lp.getNconnection$()) ic=0;
}
}}icstart=icnext;
done_all_connections=icstart == icstart1;
}
for (ic=0; ic < lp.getNconnection$(); ic++) {
cp=lp.getConnection$I(ic);
j=ic + 1;
if (j >= lp.getNconnection$()) j=0;
cpnext=lp.getConnection$I(j);
dx=this.bases.get$I(cp.getEnd$()).getX$() - xc;
dy=this.bases.get$I(cp.getEnd$()).getY$() - yc;
rc=Math.sqrt(dx * dx + dy * dy);
ac=Math.atan2(dy, dx);
if (ac < 0.0 ) ac += 6.283185307179586;
dx=this.bases.get$I(cpnext.getStart$()).getX$() - xc;
dy=this.bases.get$I(cpnext.getStart$()).getY$() - yc;
rcn=Math.sqrt(dx * dx + dy * dy);
acn=Math.atan2(dy, dx);
if (acn < 0.0 ) acn += 6.283185307179586;
if (acn < ac ) acn += 6.283185307179586;
dan=acn - ac;
dcp=cpnext.getAngle$() - cp.getAngle$();
if (dcp <= 0.0 ) dcp += 6.283185307179586;
if (Math.abs(dan - dcp) > 3.141592653589793 ) {
if (cp.isExtruded$()) {
this.warningEmition$S("Warning from traverse_loop. Loop " + lp.getNumber$() + " has crossed regions\n" );
} else if ((cpnext.getStart$() - cp.getEnd$()) != 1) {
cp.setExtruded$Z(true);
continue set_radius;
}}if (cp.isExtruded$()) {
p$1.construct_extruded_segment$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection.apply(this, [cp, cpnext]);
} else {
n=cpnext.getStart$() - cp.getEnd$();
if (n < 0) n+=this.nbase + 1;
angleinc=dan / n;
for (j=1; j < n; j++) {
i=cp.getEnd$() + j;
if (i > this.nbase) i-=this.nbase + 1;
a=ac + j * angleinc;
rr=rc + (rcn - rc) * (a - ac) / dan;
this.bases.get$I(i).setX$D(xc + rr * Math.cos(a));
this.bases.get$I(i).setY$D(yc + rr * Math.sin(a));
}
}}
break;
}
for (ic=0; ic < lp.getNconnection$(); ic++) {
if (icroot != ic) {
cp=lp.getConnection$I(ic);
p$1.generate_region$fr_orsay_lri_varna_models_naView_Connection.apply(this, [cp]);
p$1.traverse_loop$fr_orsay_lri_varna_models_naView_Loop$fr_orsay_lri_varna_models_naView_Connection.apply(this, [cp.getLoop$(), cp]);
}}
n=0;
sx=0.0;
sy=0.0;
for (ic=0; ic < lp.getNconnection$(); ic++) {
j=ic + 1;
if (j >= lp.getNconnection$()) j=0;
cp=lp.getConnection$I(ic);
cpnext=lp.getConnection$I(j);
n+=2;
sx += this.bases.get$I(cp.getStart$()).getX$() + this.bases.get$I(cp.getEnd$()).getX$();
sy += this.bases.get$I(cp.getStart$()).getY$() + this.bases.get$I(cp.getEnd$()).getY$();
if (!cp.isExtruded$()) {
for (j=cp.getEnd$() + 1; j != cpnext.getStart$(); j++) {
if (j > this.nbase) j-=this.nbase + 1;
n++;
sx += this.bases.get$I(j).getX$();
sy += this.bases.get$I(j).getY$();
}
}}
lp.setX$D(sx / n);
lp.setY$D(sy / n);
}, p$1);

Clazz.newMeth(C$, 'determine_radius$fr_orsay_lri_varna_models_naView_Loop$D', function (lp, lencut) {
if (this.debug) System.out.println$S("  Determine_radius");
var mindit;
var ci;
var dt;
var sumn;
var sumd;
var radius;
var dit;
var i;
var j;
var end;
var start;
var imindit=0;
var cp=Clazz.new_($I$(6));
var cpnext=Clazz.new_($I$(6));
var rt2_2=0.7071068;
do {
mindit=1.0E10;
for (sumd=0.0, sumn=0.0, i=0; i < lp.getNconnection$(); i++) {
cp=lp.getConnection$I(i);
j=i + 1;
if (j >= lp.getNconnection$()) j=0;
cpnext=lp.getConnection$I(j);
end=cp.getEnd$();
start=cpnext.getStart$();
if (start < end) start+=this.nbase + 1;
dt=cpnext.getAngle$() - cp.getAngle$();
if (dt <= 0.0 ) dt += 6.283185307179586;
if (!cp.isExtruded$()) ci=start - end;
 else {
if (dt <= 1.5707963267948966 ) ci=2.0;
 else ci=1.5;
}sumn += dt * (1.0 / ci + 1.0);
sumd += dt * dt / ci;
dit=dt / ci;
if (dit < mindit  && !cp.isExtruded$()  && ci > 1.0  ) {
mindit=dit;
imindit=i;
}}
radius=sumn / sumd;
if (radius < rt2_2 ) radius=rt2_2;
if (mindit * radius < lencut ) {
lp.getConnection$I(imindit).setExtruded$Z(true);
}} while (mindit * radius < lencut );
if (lp.getRadius$() > 0.0 ) radius=lp.getRadius$();
 else lp.setRadius$D(radius);
}, p$1);

Clazz.newMeth(C$, 'connected_connection$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection', function (cp, cpnext) {
if (this.debug) System.out.println$S("  Connected_connection");
if (cp.isExtruded$()) {
return true;
} else if (cp.getEnd$() + 1 == cpnext.getStart$()) {
return true;
} else {
return false;
}}, p$1);

Clazz.newMeth(C$, 'find_ic_middle$I$I$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Loop', function (icstart, icend, anchor_connection, acp, lp) {
if (this.debug) System.out.println$S("  Find_ic_middle");
var count;
var ret;
var ic;
var i;
var done;
count=0;
ret=-1;
ic=icstart;
done=false;
while (!done){
if (count++ > lp.getNconnection$() * 2) {
throw Clazz.new_($I$(7).c$$S,["Infinite loop detected in find_ic_middle"]);
}if (anchor_connection != null  && lp.getConnection$I(ic) === acp  ) {
ret=ic;
}done=ic == icend;
if (++ic >= lp.getNconnection$()) {
ic=0;
}}
if (ret == -1) {
for (i=1, ic=icstart; i < ((count + 1)/2|0); i++) {
if (++ic >= lp.getNconnection$()) ic=0;
}
ret=ic;
}return ret;
}, p$1);

Clazz.newMeth(C$, 'generate_region$fr_orsay_lri_varna_models_naView_Connection', function (cp) {
if (this.debug) System.out.println$S("  Generate_region");
var l;
var start;
var end;
var i;
var mate;
var rp;
rp=cp.getRegion$();
l=0;
if (cp.getStart$() == rp.getStart1$()) {
start=rp.getStart1$();
end=rp.getEnd1$();
} else {
start=rp.getStart2$();
end=rp.getEnd2$();
}if (this.bases.get$I(cp.getStart$()).getX$() > 9899.0  || this.bases.get$I(cp.getEnd$()).getX$() > 9899.0  ) {
throw Clazz.new_($I$(7).c$$S,["Bad region passed to generate_region. Coordinates not defined."]);
}for (i=start + 1; i <= end; i++) {
l++;
this.bases.get$I(i).setX$D(this.bases.get$I(cp.getStart$()).getX$() + this.HELIX_FACTOR * l * cp.getXrad$() );
this.bases.get$I(i).setY$D(this.bases.get$I(cp.getStart$()).getY$() + this.HELIX_FACTOR * l * cp.getYrad$() );
mate=this.bases.get$I(i).getMate$();
this.bases.get$I(mate).setX$D(this.bases.get$I(cp.getEnd$()).getX$() + this.HELIX_FACTOR * l * cp.getXrad$() );
this.bases.get$I(mate).setY$D(this.bases.get$I(cp.getEnd$()).getY$() + this.HELIX_FACTOR * l * cp.getYrad$() );
}
}, p$1);

Clazz.newMeth(C$, 'construct_circle_segment$I$I', function (start, end) {
if (this.debug) System.out.println$S("  Construct_circle_segment");
var dx;
var dy;
var rr;
var midx;
var midy;
var xn;
var yn;
var nrx;
var nry;
var mx;
var my;
var a;
var l;
var j;
var i;
dx=this.bases.get$I(end).getX$() - this.bases.get$I(start).getX$();
dy=this.bases.get$I(end).getY$() - this.bases.get$I(start).getY$();
rr=Math.sqrt(dx * dx + dy * dy);
l=end - start;
if (l < 0) l+=this.nbase + 1;
if (rr >= l ) {
dx /= rr;
dy /= rr;
for (j=1; j < l; j++) {
i=start + j;
if (i > this.nbase) i-=this.nbase + 1;
this.bases.get$I(i).setX$D(this.bases.get$I(start).getX$() + dx * j / l);
this.bases.get$I(i).setY$D(this.bases.get$I(start).getY$() + dy * j / l);
}
} else {
p$1.find_center_for_arc$D$D.apply(this, [(l - 1), rr]);
dx /= rr;
dy /= rr;
midx=this.bases.get$I(start).getX$() + dx * rr / 2.0;
midy=this.bases.get$I(start).getY$() + dy * rr / 2.0;
xn=dy;
yn=-dx;
nrx=midx + this._h * xn;
nry=midy + this._h * yn;
mx=this.bases.get$I(start).getX$() - nrx;
my=this.bases.get$I(start).getY$() - nry;
rr=Math.sqrt(mx * mx + my * my);
a=Math.atan2(my, mx);
for (j=1; j < l; j++) {
i=start + j;
if (i > this.nbase) i-=this.nbase + 1;
this.bases.get$I(i).setX$D(nrx + rr * Math.cos(a + j * this.angleinc));
this.bases.get$I(i).setY$D(nry + rr * Math.sin(a + j * this.angleinc));
}
}}, p$1);

Clazz.newMeth(C$, 'construct_extruded_segment$fr_orsay_lri_varna_models_naView_Connection$fr_orsay_lri_varna_models_naView_Connection', function (cp, cpnext) {
if (this.debug) System.out.println$S("  Construct_extruded_segment");
var astart;
var aend1;
var aend2;
var aave;
var dx;
var dy;
var a1;
var a2;
var ac;
var rr;
var da;
var dac;
var start;
var end;
var n;
var nstart;
var nend;
var collision;
astart=cp.getAngle$();
aend2=aend1=cpnext.getAngle$();
if (aend2 < astart ) aend2 += 6.283185307179586;
aave=(astart + aend2) / 2.0;
start=cp.getEnd$();
end=cpnext.getStart$();
n=end - start;
if (n < 0) n+=this.nbase + 1;
da=cpnext.getAngle$() - cp.getAngle$();
if (da < 0.0 ) {
da += 6.283185307179586;
}if (n == 2) p$1.construct_circle_segment$I$I.apply(this, [start, end]);
 else {
dx=this.bases.get$I(end).getX$() - this.bases.get$I(start).getX$();
dy=this.bases.get$I(end).getY$() - this.bases.get$I(start).getY$();
rr=Math.sqrt(dx * dx + dy * dy);
dx /= rr;
dy /= rr;
if (rr >= 1.5  && da <= 1.5707963267948966  ) {
nstart=start + 1;
if (nstart > this.nbase) nstart-=this.nbase + 1;
nend=end - 1;
if (nend < 0) nend+=this.nbase + 1;
this.bases.get$I(nstart).setX$D(this.bases.get$I(start).getX$() + 0.5 * dx);
this.bases.get$I(nstart).setY$D(this.bases.get$I(start).getY$() + 0.5 * dy);
this.bases.get$I(nend).setX$D(this.bases.get$I(end).getX$() - 0.5 * dx);
this.bases.get$I(nend).setY$D(this.bases.get$I(end).getY$() - 0.5 * dy);
start=nstart;
end=nend;
}do {
collision=false;
p$1.construct_circle_segment$I$I.apply(this, [start, end]);
nstart=start + 1;
if (nstart > this.nbase) nstart-=this.nbase + 1;
dx=this.bases.get$I(nstart).getX$() - this.bases.get$I(start).getX$();
dy=this.bases.get$I(nstart).getY$() - this.bases.get$I(start).getY$();
a1=Math.atan2(dy, dx);
if (a1 < 0.0 ) a1 += 6.283185307179586;
dac=a1 - astart;
if (dac < 0.0 ) dac += 6.283185307179586;
if (dac > 3.141592653589793 ) collision=true;
nend=end - 1;
if (nend < 0) nend+=this.nbase + 1;
dx=this.bases.get$I(nend).getX$() - this.bases.get$I(end).getX$();
dy=this.bases.get$I(nend).getY$() - this.bases.get$I(end).getY$();
a2=Math.atan2(dy, dx);
if (a2 < 0.0 ) a2 += 6.283185307179586;
dac=aend1 - a2;
if (dac < 0.0 ) dac += 6.283185307179586;
if (dac > 3.141592653589793 ) collision=true;
if (collision) {
ac=p$1.minf2$D$D.apply(this, [aave, astart + 0.5]);
this.bases.get$I(nstart).setX$D(this.bases.get$I(start).getX$() + Math.cos(ac));
this.bases.get$I(nstart).setY$D(this.bases.get$I(start).getY$() + Math.sin(ac));
start=nstart;
ac=p$1.maxf2$D$D.apply(this, [aave, aend2 - 0.5]);
this.bases.get$I(nend).setX$D(this.bases.get$I(end).getX$() + Math.cos(ac));
this.bases.get$I(nend).setY$D(this.bases.get$I(end).getY$() + Math.sin(ac));
end=nend;
n-=2;
}} while (collision && n > 1 );
}}, p$1);

Clazz.newMeth(C$, 'find_center_for_arc$D$D', function (n, b) {
if (this.debug) System.out.println$S("  Find_center_for_arc");
var h;
var hhi;
var hlow;
var r;
var disc;
var theta;
var e;
var phi;
var iter;
hhi=(n + 1.0) / 3.141592653589793;
hlow=-hhi - b / (n + 1.000001 - b);
if (b < 1 ) hlow=0;
iter=0;
do {
h=(hhi + hlow) / 2.0;
r=Math.sqrt(h * h + b * b / 4.0);
disc=1.0 - 0.5 / (r * r);
if (Math.abs(disc) > 1.0 ) {
throw Clazz.new_($I$(7).c$$S,["Unexpected large magnitude discriminant = " + new Double(disc).toString() + " " + new Double(r).toString() ]);
}theta=Math.acos(disc);
phi=Math.acos(h / r);
e=theta * (n + 1) + 2 * phi - 6.283185307179586;
if (e > 0.0 ) {
hlow=h;
} else {
hhi=h;
}} while (Math.abs(e) > 1.0E-4  && ++iter < 500 );
if (iter >= 500) {
if (this.noIterationFailureYet) {
this.warningEmition$S("Iteration failed in find_center_for_arc");
this.noIterationFailureYet=false;
}h=0.0;
theta=0.0;
}this._h=h;
this.angleinc=theta;
}, p$1);

Clazz.newMeth(C$, 'minf2$D$D', function (x1, x2) {
return ((x1) < (x2) ) ? (x1) : (x2);
}, p$1);

Clazz.newMeth(C$, 'maxf2$D$D', function (x1, x2) {
return ((x1) > (x2) ) ? (x1) : (x2);
}, p$1);

Clazz.newMeth(C$, 'warningEmition$S', function (warningMessage) {
throw (Clazz.new_($I$(7).c$$S,[warningMessage]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
