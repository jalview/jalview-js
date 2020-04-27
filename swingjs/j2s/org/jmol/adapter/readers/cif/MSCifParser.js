(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'javajs.util.M3','javajs.util.PT','org.jmol.adapter.readers.cif.Cif2DataParser','javajs.util.Matrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MSCifParser", null, 'org.jmol.adapter.readers.cif.MSRdr');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['field'],'O',['comSSMat','javajs.util.M3']]
,['O',['modulationFields','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'processEntry$', function () {
var cr=this.cr;
if (cr.key.equals$O("_cell_commen_t_section_1")) {
this.isCommensurate=true;
this.commensurateSection1=cr.parseIntStr$S(cr.data);
}if (cr.key.startsWith$S("_cell_commen_supercell_matrix")) {
this.isCommensurate=true;
if (this.comSSMat == null ) this.comSSMat=$I$(1).newM3$javajs_util_M3(null);
var tokens=$I$(2).split$S$S(cr.key, "_");
var r=cr.parseIntStr$S(tokens[tokens.length - 2]);
var c=cr.parseIntStr$S(tokens[tokens.length - 1]);
if (r > 0 && c > 0 ) this.comSSMat.setElement$I$I$F(r - 1, c - 1, cr.parseFloatStr$S(cr.data));
}});

Clazz.newMeth(C$, 'processLoopBlock$', function () {
var cr=this.cr;
var key=cr.key;
if (key.equals$O("_cell_subsystem_code")) return p$1.processSubsystemLoopBlock.apply(this, []);
if (!key.startsWith$S("_cell_wave") && !key.contains$CharSequence("fourier") && !key.contains$CharSequence("legendre") && !key.contains$CharSequence("_special_func")  ) {
if (key.contains$CharSequence("crenel_ortho")) cr.appendLoadNote$S("WARNING: Orthogonalized non-Legendre functions not supported.\nThe following block has been ignored. Use Legendre functions instead.\n\n" + cr.parser.skipLoop$Z(true) + "=================================\n" );
return 0;
}if (cr.asc.iSet < 0) cr.asc.newAtomSet$();
cr.parseLoopParametersFor$S$SA("_atom_site", C$.modulationFields);
var tok;
while (cr.parser.getData$()){
var ignore=false;
var type_id=null;
var atomLabel=null;
var axis=null;
var pt=Clazz.array(Double.TYPE, -1, [NaN, NaN, NaN]);
var q=null;
var c=NaN;
var w=NaN;
var fid=null;
var n=cr.parser.getColumnCount$();
for (var i=0; i < n; ++i) {
switch (tok=p$1.fieldProperty$org_jmol_adapter_readers_cif_CifReader$I.apply(this, [cr, i])) {
case 1:
cr.haveCellWaveVector=true;
case 0:
case 41:
case 42:
case 43:
pt[0]=pt[1]=pt[2]=0;
case 14:
case 26:
case 51:
case 36:
case 44:
case 45:
case 46:
switch (tok) {
case 1:
type_id="W_";
break;
case 0:
type_id="F_";
fid=this.field;
break;
case 41:
case 42:
case 43:
fid="?" + this.field;
pt[2]=1;
continue;
case 44:
case 45:
case 46:
atomLabel=axis="*";
case 14:
case 26:
case 51:
case 36:
type_id=Character.toUpperCase$C(C$.modulationFields[tok].charAt$I(11)) + "_";
break;
}
type_id += this.field;
break;
case 47:
type_id="J_O";
pt[0]=pt[2]=1;
axis="0";
atomLabel=this.field;
break;
case 31:
type_id="O_0";
axis="0";
atomLabel=this.field;
break;
case 19:
type_id="D_S";
axis="0";
atomLabel=this.field;
break;
case 56:
type_id="M_T";
axis="0";
atomLabel=this.field;
break;
case 62:
type_id="D_L";
atomLabel=this.field;
break;
case 66:
type_id="U_L";
atomLabel=this.field;
break;
case 70:
type_id="O_L";
atomLabel=this.field;
break;
case 12:
case 25:
case 49:
case 34:
atomLabel=this.field;
break;
case 13:
case 50:
case 63:
axis=this.field;
if (this.modAxes != null  && this.modAxes.indexOf$S(axis.toUpperCase$()) < 0 ) ignore=true;
break;
case 67:
case 35:
axis=this.field.toUpperCase$();
break;
case 8:
q=$I$(3).getArrayFromStringList$S$I(this.field, this.modDim);
break;
default:
var f=cr.parseFloatStr$S(this.field);
switch (tok) {
case 65:
case 72:
case 69:
pt[0]=f;
if (f != 0 ) pt[2]=0;
break;
case 28:
case 32:
case 16:
case 53:
case 38:
case 78:
case 74:
case 76:
pt[2]=0;
case 2:
case 5:
case 20:
case 57:
pt[0]=f;
break;
case 9:
if (q == null ) q=Clazz.array(Double.TYPE, [this.modDim]);
q[0]=f;
break;
case 10:
if (q == null ) q=Clazz.array(Double.TYPE, [this.modDim]);
q[1]=f;
break;
case 11:
if (q == null ) q=Clazz.array(Double.TYPE, [this.modDim]);
q[2]=f;
break;
case 17:
case 29:
case 54:
case 39:
pt[0]=f;
pt[2]=1;
break;
case 71:
case 75:
case 27:
axis="0";
case 64:
case 68:
case 3:
case 6:
case 18:
case 30:
case 55:
case 40:
case 33:
case 21:
case 58:
case 48:
case 15:
case 52:
case 37:
case 73:
case 77:
pt[1]=f;
break;
case 4:
case 7:
case 22:
case 59:
pt[2]=f;
break;
case 23:
case 60:
c=f;
break;
case 24:
case 61:
w=f;
break;
}
break;
}
}
if (ignore || type_id == null  && q == null    || atomLabel != null  && !atomLabel.equals$O("*")  && cr.rejectAtomName$S(atomLabel)  ) continue;
var ok=true;
if (q != null ) {
for (var j=0, nzero=q.length; j < q.length; j++) if (Double.isNaN$D(q[j]) || q[j] > 1.0E100   || q[j] == 0  && --nzero == 0  ) {
ok=false;
}
if (!ok) continue;
p$1.addMod$S$S$DA.apply(this, ["F_coefs_", fid, q]);
pt[0]=NaN;
}for (var j=0, nzero=pt.length; j < pt.length; j++) if (Double.isNaN$D(pt[j]) || pt[j] > 1.0E100   || pt[j] == 0  && --nzero == 0  ) {
ok=false;
break;
}
if (!ok) continue;
switch ((type_id.charCodeAt$I(0))) {
case 67:
case 68:
case 79:
case 77:
case 85:
case 74:
if (atomLabel == null  || axis == null  ) continue;
if (type_id.equals$O("D_S") || type_id.equals$O("M_T") ) {
if (Double.isNaN$D(c) || Double.isNaN$D(w) ) continue;
if (pt[0] != 0 ) p$1.addMod$S$S$DA.apply(this, [type_id + "#x;" + atomLabel , fid, Clazz.array(Double.TYPE, -1, [c, w, pt[0]])]);
if (pt[1] != 0 ) p$1.addMod$S$S$DA.apply(this, [type_id + "#y;" + atomLabel , fid, Clazz.array(Double.TYPE, -1, [c, w, pt[1]])]);
if (pt[2] != 0 ) p$1.addMod$S$S$DA.apply(this, [type_id + "#z;" + atomLabel , fid, Clazz.array(Double.TYPE, -1, [c, w, pt[2]])]);
continue;
}if (type_id.indexOf$S("_L") == 1) {
if (type_id.startsWith$S("U")) type_id += (pt[1]|0);
 else axis += (pt[1]|0);
}type_id += "#" + axis + ";" + atomLabel ;
break;
}
p$1.addMod$S$S$DA.apply(this, [type_id, fid, pt]);
}
return 1;
});

Clazz.newMeth(C$, 'addMod$S$S$DA', function (id, fid, params) {
if (fid != null ) id += fid;
this.addModulation$java_util_Map$S$DA$I(null, id, params, -1);
}, p$1);

Clazz.newMeth(C$, 'processSubsystemLoopBlock', function () {
var cr=this.cr;
cr.parseLoopParameters$SA(null);
while (cr.parser.getData$()){
p$1.fieldProperty$org_jmol_adapter_readers_cif_CifReader$I.apply(this, [cr, 0]);
var id=this.field;
this.addSubsystem$S$javajs_util_Matrix(id, p$1.getSparseMatrix$org_jmol_adapter_readers_cif_CifReader$S$I$I.apply(this, [cr, "_w_", 1, 3 + this.modDim]));
}
return 1;
}, p$1);

Clazz.newMeth(C$, 'getSparseMatrix$org_jmol_adapter_readers_cif_CifReader$S$I$I', function (cr, term, i, dim) {
var m=Clazz.new_($I$(4,1).c$$DAA$I$I,[null, dim, dim]);
var a=m.getArray$();
var key;
var p;
var n=cr.parser.getColumnCount$();
for (; i < n; ++i) {
if ((p=p$1.fieldProperty$org_jmol_adapter_readers_cif_CifReader$I.apply(this, [cr, i])) < 0 || !(key=cr.parser.getColumnName$I(p)).contains$CharSequence(term) ) continue;
var tokens=$I$(2).split$S$S(key, "_");
var r=cr.parseIntStr$S(tokens[tokens.length - 2]);
var c=cr.parseIntStr$S(tokens[tokens.length - 1]);
if (r > 0 && c > 0 ) a[r - 1][c - 1]=cr.parseFloatStr$S(this.field);
}
return m;
}, p$1);

Clazz.newMeth(C$, 'fieldProperty$org_jmol_adapter_readers_cif_CifReader$I', function (cr, i) {
return ((this.field=cr.parser.getColumnData$I(i)).length$() > 0 && this.field.charAt$I(0) != "\u0000"  ? cr.col2key[i] : -1);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.modulationFields=Clazz.array(String, -1, ["*_fourier_wave_vector_seq_id", "_cell_wave_vector_seq_id", "_cell_wave_vector_x", "_cell_wave_vector_y", "_cell_wave_vector_z", "*_fourier_wave_vector_x", "*_fourier_wave_vector_y", "*_fourier_wave_vector_z", "*_fourier_wave_vector_q_coeff", "*_fourier_wave_vector_q1_coeff", "*_fourier_wave_vector_q2_coeff", "*_fourier_wave_vector_q3_coeff", "*_displace_fourier_atom_site_label", "*_displace_fourier_axis", "*_displace_fourier_wave_vector_seq_id", "*_displace_fourier_param_cos", "*_displace_fourier_param_sin", "*_displace_fourier_param_modulus", "*_displace_fourier_param_phase", "*_displace_special_func_atom_site_label", "*_displace_special_func_sawtooth_ax", "*_displace_special_func_sawtooth_ay", "*_displace_special_func_sawtooth_az", "*_displace_special_func_sawtooth_c", "*_displace_special_func_sawtooth_w", "*_occ_fourier_atom_site_label", "*_occ_fourier_wave_vector_seq_id", "*_occ_fourier_param_cos", "*_occ_fourier_param_sin", "*_occ_fourier_param_modulus", "*_occ_fourier_param_phase", "*_occ_special_func_atom_site_label", "*_occ_special_func_crenel_c", "*_occ_special_func_crenel_w", "*_u_fourier_atom_site_label", "*_u_fourier_tens_elem", "*_u_fourier_wave_vector_seq_id", "*_u_fourier_param_cos", "*_u_fourier_param_sin", "*_u_fourier_param_modulus", "*_u_fourier_param_phase", "*_displace_fourier_id", "*_occ_fourier_id", "*_u_fourier_id", "*_displace_fourier_param_id", "*_occ_fourier_param_id", "*_u_fourier_param_id", "*_occ_fourier_absolute_site_label", "*_occ_fourier_absolute", "*_moment_fourier_atom_site_label", "*_moment_fourier_axis", "*_moment_fourier_wave_vector_seq_id", "*_moment_fourier_param_cos", "*_moment_fourier_param_sin", "*_moment_fourier_param_modulus", "*_moment_fourier_param_phase", "*_moment_special_func_atom_site_label", "*_moment_special_func_sawtooth_ax", "*_moment_special_func_sawtooth_ay", "*_moment_special_func_sawtooth_az", "*_moment_special_func_sawtooth_c", "*_moment_special_func_sawtooth_w", "*_displace_legendre_atom_site_label", "*_displace_legendre_axis", "*_displace_legendre_param_order", "*_displace_legendre_param_coeff", "*_u_legendre_atom_site_label", "*_u_legendre_tens_elem", "*_u_legendre_param_order", "*_u_legendre_param_coeff", "*_occ_legendre_atom_site_label", "*_occ_legendre_param_order", "*_occ_legendre_param_coeff", "*_displace_fourier_cos", "*_displace_fourier_sin", "*_occ_fourier_cos", "*_occ_fourier_sin", "*_u_fourier_cos", "*_u_fourier_sin"]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
