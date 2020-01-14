(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','java.math.BigInteger','javax.swing.JLabel','javax.swing.JPanel','javax.swing.JButton','javax.swing.BorderFactory','java.awt.BorderLayout','fr.orsay.lri.varna.applications.NussinovDesignDemo','java.awt.Color','fr.orsay.lri.varna.models.rna.RNA','java.awt.Font',['fr.orsay.lri.varna.applications.NussinovDesignDemo','.InfoPanel'],'javax.swing.JComboBox','fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.VARNAPanel','java.awt.Dimension','javax.swing.DefaultComboBoxModel','java.awt.GridLayout','javax.swing.JSplitPane',['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],['fr.orsay.lri.varna.applications.NussinovDesignDemo','.Temporizer']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NussinovDesignDemo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['fr.orsay.lri.varna.interfaces.InterfaceVARNAListener', 'fr.orsay.lri.varna.interfaces.InterfaceVARNABasesListener', 'java.awt.event.ItemListener']);
C$.labelsFont=null;
C$._bases=null;
C$._basesComp=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.labelsFont=$I$(11).decode$S("Dialog-BOLD-25");
C$._bases=Clazz.array(String, -1, ["A", "C", "G", "U"]);
C$._basesComp=Clazz.array(String, -1, ["U", "G", "C", "A"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vpMaster=null;
this._vpTarget=null;
this._infos=null;
this._tools=null;
this._input=null;
this._seqPanel=null;
this._structPanel=null;
this._actions=null;
this._struct=null;
this._seq1=null;
this._structLabel=null;
this._seqLabel=null;
this._switchButton=null;
this._backgroundColor=null;
this._okColor=null;
this._koColor=null;
this._cache=null;
this._cacheStructs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._infos=Clazz.new_($I$(12), [this, null]);
this._tools=Clazz.new_($I$(4));
this._input=Clazz.new_($I$(4));
this._seqPanel=Clazz.new_($I$(4));
this._structPanel=Clazz.new_($I$(4));
this._actions=Clazz.new_($I$(3));
this._struct=Clazz.new_($I$(13));
this._seq1=Clazz.new_($I$(3));
this._structLabel=Clazz.new_($I$(3).c$$S,["Structure Cible"]);
this._seqLabel=Clazz.new_($I$(3).c$$S,["Sequence d\'ARN"]);
this._switchButton=Clazz.new_($I$(5).c$$S,["Reset"]);
this._backgroundColor=$I$(9).white;
this._okColor=$I$(9).decode$S("#E33729");
this._koColor=Clazz.new_($I$(9).c$$I$I$I,[250, 200, 200]);
this._cache="";
this._cacheStructs=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'createStyle$S', function (txt) {
var result=Clazz.new_($I$(14));
try {
result.assignParameters$S(txt);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionParameterError")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'applyTo$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_rna_ModelBaseStyle$IA', function (vp, mb, indices) {
for (var i=0; i < indices.length; i++) {
var m=vp.getRNA$().getBaseAt$I(indices[i]);
m.setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(mb);
if (m.getElementStructure$() != -1) {
vp.getRNA$().getBaseAt$I(m.getElementStructure$()).setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(mb);
}}
vp.repaint$();
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
try {
this._vpMaster=Clazz.new_($I$(15).c$$S$S,[this.getSeq$(), ""]);
this._vpTarget=Clazz.new_($I$(15));
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
this._vpMaster.errorDialog$Exception(e);
} else {
throw e;
}
}
this._vpMaster.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16).c$$I$I,[600, 600]));
this._vpTarget.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16).c$$I$I,[600, 600]));
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
var marginTools=250;
var textFieldsFont=$I$(11).decode$S("MonoSpaced-BOLD-16");
this._seq1.setFont$java_awt_Font(textFieldsFont.deriveFont$F(25.0));
this.setBackground$java_awt_Color(this._backgroundColor);
this._structLabel.setFont$java_awt_Font(C$.labelsFont.deriveFont$I(0));
var secstr=Clazz.array(String, -1, ["(((((((..)))))))", "(((())))(((())))", "(.((.((..).)).))", "((((((())))(((())(()))))))", "(((())))(((())))(((())))(((())))(((())))(((())))"]);
var cm=Clazz.new_($I$(17).c$$TEA,[secstr]);
this._struct.setModel$javax_swing_ComboBoxModel(cm);
this._struct.addActionListener$java_awt_event_ActionListener(((P$.NussinovDesignDemo$1||
(function(){var C$=Clazz.newClass(P$, "NussinovDesignDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
System.out.println$S(e.getActionCommand$());
this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo'].setTarget$S.apply(this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo'], [(e.getSource$()).getSelectedItem$().toString()]);
});
})()
), Clazz.new_(P$.NussinovDesignDemo$1.$init$, [this, null])));
this._struct.setFont$java_awt_Font(textFieldsFont);
this._struct.setEnabled$Z(true);
this._struct.setEditable$Z(true);
this._switchButton.addActionListener$java_awt_event_ActionListener(((P$.NussinovDesignDemo$2||
(function(){var C$=Clazz.newClass(P$, "NussinovDesignDemo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo'].setTarget$S.apply(this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo'], [this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo']._struct.getSelectedItem$().toString()]);
});
})()
), Clazz.new_(P$.NussinovDesignDemo$2.$init$, [this, null])));
this._seqPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this._seqPanel.add$java_awt_Component$O(this._seqLabel, "West");
this._seqPanel.add$java_awt_Component$O(this._seq1, "Center");
this._seqPanel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(5, 5, 5, 5));
this._structLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16).c$$I$I,[marginTools, 15]));
this._structLabel.setHorizontalTextPosition$I(2);
this._structPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this._structPanel.add$java_awt_Component$O(this._structLabel, "West");
this._structPanel.add$java_awt_Component$O(this._struct, "Center");
this._input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18).c$$I$I,[0, 1]));
this._input.add$java_awt_Component(this._structPanel);
var goPanel=Clazz.new_($I$(4));
goPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this._infos.setFont$java_awt_Font(C$.labelsFont);
C$.formatLabel$javax_swing_JLabel(this._seqLabel);
C$.formatLabel$javax_swing_JLabel(this._seq1);
this._tools.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this._tools.add$java_awt_Component$O(this._input, "Center");
this._tools.add$java_awt_Component$O(this._actions, "South");
this._tools.add$java_awt_Component$O(goPanel, "East");
this._tools.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(5, 5, 5, 5));
goPanel.add$java_awt_Component$O(this._switchButton, "Center");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
var VARNAs=Clazz.new_($I$(19).c$$I,[1]);
VARNAs.setBorder$javax_swing_border_Border($I$(6).createBevelBorder$I(0));
var mast2=Clazz.new_($I$(4));
mast2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
mast2.add$java_awt_Component$O(this._seqPanel, "North");
mast2.add$java_awt_Component$O(this._infos, "South");
var mast=Clazz.new_($I$(4));
mast.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
mast.add$java_awt_Component$O(this._vpMaster, "Center");
mast.add$java_awt_Component$O(mast2, "South");
VARNAs.add$java_awt_Component(mast);
VARNAs.add$java_awt_Component(this._vpTarget);
VARNAs.doLayout$();
VARNAs.setDividerSize$I(5);
this.getContentPane$().add$java_awt_Component$O(VARNAs, "Center");
this.getContentPane$().add$java_awt_Component$O(this._tools, "North");
this.setVisible$Z(true);
this._vpMaster.setBackground$java_awt_Color(this._backgroundColor);
this._vpMaster.addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener(this);
this._vpMaster.setTitle$S("Meilleur repliement - S\u00e9quence courante");
this._vpMaster.setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE($I$(20).SIMPLE);
this._vpMaster.getVARNAUI$().UIRadiate$();
this._vpMaster.setTitleFontSize$F(26.0);
this._vpMaster.setTitleFontStyle$I(0);
this._vpTarget.setBackground$java_awt_Color($I$(9).decode$S("#308099"));
this._vpTarget.setModifiable$Z(false);
this._vpTarget.setTitle$S("Repliement cible");
this._vpTarget.setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE($I$(20).SIMPLE);
this._vpTarget.setBackboneColor$java_awt_Color($I$(9).white);
this._vpTarget.setDefaultBPColor$java_awt_Color($I$(9).white);
this._vpTarget.setBaseNumbersColor$java_awt_Color($I$(9).white);
this._vpTarget.setBaseOutlineColor$java_awt_Color($I$(9).white);
this._vpTarget.setTitleColor$java_awt_Color($I$(9).white);
this._vpTarget.setTitleFontSize$F(26.0);
this._okColor=$I$(9).decode$S("#F39126");
this._koColor=Clazz.new_($I$(9).c$$I$I$I,[250, 200, 200]);
this._seqPanel.setBackground$java_awt_Color($I$(9).decode$S("#E33729"));
this._infos.setBackground$java_awt_Color($I$(9).decode$S("#E33729"));
this._vpMaster.addVARNABasesListener$fr_orsay_lri_varna_interfaces_InterfaceVARNABasesListener(this);
this.setTitle$S("F\u00eate de la science 2015 - Inria AMIB - Design d\'ARN");
this.setTarget$S(secstr[0]);
}, p$1);

Clazz.newMeth(C$, 'showSolution', function () {
var sols=this.getStructs$();
this._infos.setInfo$java_util_ArrayList$java_math_BigInteger(sols, this.count$S(this.getSeq$()));
if ((sols.size$() == 1) && (sols.get$I(0).equals$O(this._struct.getSelectedItem$().toString())) ) {
} else {
this._vpMaster.setTitle$S("Meilleur repliement - S\u00e9quence courante");
}}, p$1);

Clazz.newMeth(C$, 'setTarget$S', function (target) {
try {
this._vpTarget.drawRNA$S$S(String.format$S$OA("%" + target.length$() + "s" , [""]), target);
this._vpTarget.setBaseNumbersColor$java_awt_Color($I$(9).white);
this._vpTarget.setBaseOutlineColor$java_awt_Color($I$(9).white);
p$1.createDummySeq.apply(this, []);
p$1.showSolution.apply(this, []);
this.onStructureRedrawn$();
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'createDummySeq', function () {
var r=this._vpTarget.getRNA$();
var seq= String.instantialize();
for (var i=0; i < r.getSize$(); i++) {
seq += "A";
}
try {
var rn=Clazz.new_($I$(10));
rn.setRNA$S$S(seq, r.getStructDBN$());
for (var mbp, $mbp = r.getAllBPs$().iterator$(); $mbp.hasNext$()&&((mbp=($mbp.next$())),1);) {
rn.getBaseAt$I(mbp.getIndex5$()).setContent$S("A");
rn.getBaseAt$I(mbp.getIndex3$()).setContent$S("U");
}
this._vpMaster.drawRNA$fr_orsay_lri_varna_models_rna_RNA(rn);
this._vpMaster.repaint$();
this._seq1.setText$S(this._vpMaster.getRNA$().getSeq$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'getSeq$', function () {
return ("" + this._seq1.getText$()).toUpperCase$();
});

Clazz.newMeth(C$, 'canBasePairAll$C$C', function (a, b) {
return true;
}, p$1);

Clazz.newMeth(C$, 'canBasePairBasic$C$C', function (a, b) {
if ((a == "G") && (b == "C") ) return true;
if ((a == "C") && (b == "G") ) return true;
if ((a == "U") && (b == "A") ) return true;
if ((a == "A") && (b == "U") ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'basePairScoreBasic$C$C', function (a, b) {
if ((a == "G") && (b == "C") ) return 1.0;
if ((a == "C") && (b == "G") ) return 1.0;
if ((a == "U") && (b == "A") ) return 1.0;
if ((a == "A") && (b == "U") ) return 1.0;
return -Infinity;
}, p$1);

Clazz.newMeth(C$, 'canBasePairNussinov$C$C', function (a, b) {
if ((a == "G") && (b == "C") ) return true;
if ((a == "C") && (b == "G") ) return true;
if ((a == "U") && (b == "A") ) return true;
if ((a == "A") && (b == "U") ) return true;
if ((a == "U") && (b == "G") ) return true;
if ((a == "G") && (b == "U") ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'basePairScoreNussinov$C$C', function (a, b) {
if ((a == "G") && (b == "C") ) return 3.0;
if ((a == "C") && (b == "G") ) return 3.0;
if ((a == "U") && (b == "A") ) return 2.0;
if ((a == "A") && (b == "U") ) return 2.0;
if ((a == "U") && (b == "G") ) return 1.0;
if ((a == "G") && (b == "U") ) return 1.0;
return -Infinity;
}, p$1);

Clazz.newMeth(C$, 'canBasePairINRIA$C$C', function (a, b) {
if ((a == "U") && (b == "A") ) return true;
if ((a == "A") && (b == "U") ) return true;
if ((a == "G") && (b == "C") ) return true;
if ((a == "C") && (b == "G") ) return true;
if ((a == "A") && (b == "G") ) return true;
if ((a == "G") && (b == "A") ) return true;
if ((a == "U") && (b == "C") ) return true;
if ((a == "C") && (b == "U") ) return true;
if ((a == "A") && (b == "A") ) return true;
if ((a == "U") && (b == "U") ) return true;
if ((a == "U") && (b == "G") ) return true;
if ((a == "G") && (b == "U") ) return true;
if ((a == "A") && (b == "C") ) return true;
if ((a == "C") && (b == "A") ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'basePairScoreINRIA$C$C', function (a, b) {
if ((a == "U") && (b == "A") ) return 3;
if ((a == "A") && (b == "U") ) return 3;
if ((a == "G") && (b == "C") ) return 3;
if ((a == "C") && (b == "G") ) return 3;
if ((a == "A") && (b == "G") ) return 2;
if ((a == "G") && (b == "A") ) return 2;
if ((a == "U") && (b == "C") ) return 2;
if ((a == "C") && (b == "U") ) return 2;
if ((a == "A") && (b == "A") ) return 2;
if ((a == "U") && (b == "U") ) return 2;
if ((a == "U") && (b == "G") ) return 1;
if ((a == "G") && (b == "U") ) return 1;
if ((a == "A") && (b == "C") ) return 1;
if ((a == "C") && (b == "A") ) return 1;
return -Infinity;
}, p$1);

Clazz.newMeth(C$, 'canBasePair$C$C', function (a, b) {
return p$1.canBasePairBasic$C$C.apply(this, [a, b]);
}, p$1);

Clazz.newMeth(C$, 'basePairScore$C$C', function (a, b) {
return p$1.basePairScoreBasic$C$C.apply(this, [a, b]);
}, p$1);

Clazz.newMeth(C$, 'fillMatrix$S', function (seq) {
var n=seq.length$();
var tab=Clazz.array(Double.TYPE, [n, n]);
for (var m=1; m <= n; m++) {
for (var i=0; i < n - m + 1; i++) {
var j=i + m - 1;
tab[i][j]=0;
if (i < j) {
tab[i][j]=Math.max(tab[i][j], tab[i + 1][j]);
for (var k=i + 1; k <= j; k++) {
if (p$1.canBasePair$C$C.apply(this, [seq.charAt$I(i), seq.charAt$I(k)])) {
var fact1=0;
if (k > i + 1) {
fact1=tab[i + 1][k - 1];
}var fact2=0;
if (k < j) {
fact2=tab[k + 1][j];
}tab[i][j]=Math.max(tab[i][j], p$1.basePairScore$C$C.apply(this, [seq.charAt$I(i), seq.charAt$I(k)]) + fact1 + fact2 );
}}
}}
}
return tab;
});

Clazz.newMeth(C$, 'combine$D$java_util_ArrayList$java_util_ArrayList', function (bonus, part1, part2) {
var base=Clazz.new_($I$(1));
for (var d1, $d1 = part1.iterator$(); $d1.hasNext$()&&((d1=($d1.next$()).objectValue$()),1);) {
for (var d2, $d2 = part2.iterator$(); $d2.hasNext$()&&((d2=($d2.next$()).objectValue$()),1);) {
base.add$TE(new Double(bonus + d1 + d2 ));
}
}
return base;
}, 1);

Clazz.newMeth(C$, 'selectBests$java_util_ArrayList', function (base) {
var result=Clazz.new_($I$(1));
var best=-Infinity;
for (var val, $val = base.iterator$(); $val.hasNext$()&&((val=($val.next$()).objectValue$()),1);) {
best=Math.max(val, best);
}
for (var val, $val = base.iterator$(); $val.hasNext$()&&((val=($val.next$()).objectValue$()),1);) {
if (val == best ) result.add$TE(new Double(val));
}
return result;
}, 1);

Clazz.newMeth(C$, 'backtrack$DAA$S', function (tab, seq) {
return p$1.backtrack$DAA$S$I$I.apply(this, [tab, seq, 0, seq.length$() - 1]);
}, p$1);

Clazz.newMeth(C$, 'backtrack$DAA$S$I$I', function (tab, seq, i, j) {
var result=Clazz.new_($I$(1));
if (i < j) {
var indices=Clazz.new_($I$(1));
indices.add$TE(new Integer(-1));
for (var k=i + 1; k <= j; k++) {
indices.add$TE(new Integer(k));
}
for (var k, $k = indices.iterator$(); $k.hasNext$()&&((k=($k.next$()).intValue$()),1);) {
if (k == -1) {
if (tab[i][j] == tab[i + 1][j] ) {
for (var s, $s = p$1.backtrack$DAA$S$I$I.apply(this, [tab, seq, i + 1, j]).iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
result.add$TE("." + s);
}
}} else {
if (p$1.canBasePair$C$C.apply(this, [seq.charAt$I(i), seq.charAt$I(k)])) {
var fact1=0;
if (k > i + 1) {
fact1=tab[i + 1][k - 1];
}var fact2=0;
if (k < j) {
fact2=tab[k + 1][j];
}if (tab[i][j] == p$1.basePairScore$C$C.apply(this, [seq.charAt$I(i), seq.charAt$I(k)]) + fact1 + fact2  ) {
for (var s1, $s1 = p$1.backtrack$DAA$S$I$I.apply(this, [tab, seq, i + 1, k - 1]).iterator$(); $s1.hasNext$()&&((s1=($s1.next$())),1);) {
for (var s2, $s2 = p$1.backtrack$DAA$S$I$I.apply(this, [tab, seq, k + 1, j]).iterator$(); $s2.hasNext$()&&((s2=($s2.next$())),1);) {
result.add$TE("(" + s1 + ")" + s2 );
}
}
}}}}
} else if (i == j) {
result.add$TE(".");
} else {
result.add$TE("");
}return result;
}, p$1);

Clazz.newMeth(C$, 'count$S', function (seq) {
var n=seq.length$();
var tab=Clazz.array($I$(2), [n, n]);
for (var m=1; m <= n; m++) {
for (var i=0; i < n - m + 1; i++) {
var j=i + m - 1;
tab[i][j]=$I$(2).ZERO;
if (i < j) {
tab[i][j]=tab[i][j].add$java_math_BigInteger(tab[i + 1][j]);
for (var k=i + 1; k <= j; k++) {
if (p$1.canBasePair$C$C.apply(this, [seq.charAt$I(i), seq.charAt$I(k)])) {
var fact1=$I$(2).ONE;
if (k > i + 1) {
fact1=tab[i + 1][k - 1];
}var fact2=$I$(2).ONE;
if (k < j) {
fact2=tab[k + 1][j];
}tab[i][j]=tab[i][j].add$java_math_BigInteger(fact1.multiply$java_math_BigInteger(fact2));
}}
} else {
tab[i][j]=$I$(2).ONE;
}}
}
return tab[0][n - 1];
});

Clazz.newMeth(C$, 'getStructs$', function () {
var seq=this.getSeq$();
seq=seq.toUpperCase$();
if (!this._cache.equals$O(seq)) {
var mfe=this.fillMatrix$S(seq);
this._cacheStructs=p$1.backtrack$DAA$S.apply(this, [mfe, seq]);
this._cache=seq;
}return this._cacheStructs;
});

Clazz.newMeth(C$, 'get_varnaPanel$', function () {
return this._vpMaster;
});

Clazz.newMeth(C$, 'set_varnaPanel$fr_orsay_lri_varna_VARNAPanel', function (surface) {
this._vpMaster=surface;
});

Clazz.newMeth(C$, 'get_info$', function () {
return this._actions;
});

Clazz.newMeth(C$, 'set_info$javax_swing_JLabel', function (_info) {
this._actions=_info;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var d=Clazz.new_(C$);
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'onStructureRedrawn$', function () {
this._vpMaster.repaint$();
});

Clazz.newMeth(C$, 'onWarningEmitted$S', function (s) {
});

Clazz.newMeth(C$, 'onLoad$S', function (path) {
});

Clazz.newMeth(C$, 'onLoaded$', function () {
});

Clazz.newMeth(C$, 'onUINewStructure$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA', function (v, r) {
});

Clazz.newMeth(C$, ['onBaseClicked$fr_orsay_lri_varna_models_rna_ModeleBase$java_awt_event_MouseEvent','onBaseClicked$'], function (mb, e) {
var index=-1;
for (var i=0; i < C$._bases.length; i++) {
if (mb.getContent$().equalsIgnoreCase$S(C$._bases[i])) {
index=i;
}}
index=(index + 1) % C$._bases.length;
mb.setContent$S(C$._bases[index].toUpperCase$());
var partners=this._vpTarget.getRNA$().getAllPartners$I(mb.getIndex$());
if (partners.size$() != 0) {
var mbPartner=this._vpMaster.getRNA$().getBaseAt$I(partners.get$I(0).getIndex$());
mbPartner.setContent$S(C$._basesComp[index].toUpperCase$());
}this._vpMaster.repaint$();
this._seq1.setText$S(this._vpMaster.getRNA$().getSeq$());
Clazz.new_($I$(21).c$$S, [this, null, this._vpMaster.getRNA$().getSeq$()]).start$();
});

Clazz.newMeth(C$, 'onZoomLevelChanged$', function () {
});

Clazz.newMeth(C$, 'onTranslationChanged$', function () {
});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (arg0) {
System.out.println$();
});

Clazz.newMeth(C$, 'formatLabel$javax_swing_JLabel', function (j) {
j.setHorizontalTextPosition$I(2);
j.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16).c$$I$I,[250, 25]));
j.setFont$java_awt_Font(C$.labelsFont);
j.setForeground$java_awt_Color($I$(9).white);
}, 1);

Clazz.newMeth(C$, 'formatLabel$javax_swing_JTextArea', function (j) {
j.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16).c$$I$I,[250, 25]));
j.setFont$java_awt_Font(C$.labelsFont);
j.setForeground$java_awt_Color($I$(9).white);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.NussinovDesignDemo, "Temporizer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._seq=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (seq) {
Clazz.super_(C$, this,1);
this._seq=seq;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.sleep$J(1000);
if (this.this$0._vpMaster.getRNA$().getSeq$().equalsIgnoreCase$S(this._seq)) {
p$1.showSolution.apply(this.this$0, []);
}} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.NussinovDesignDemo, "InfoPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._sols=null;
this._nbFolds=null;
this._text=null;
this._subopts=null;
this._suboptBrowser=null;
this._suboptCount=null;
this._selectedIndex=0;
this.next=null;
this.previous=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._sols=Clazz.new_($I$(1));
this._nbFolds=$I$(2).ZERO;
this._text=Clazz.new_($I$(3).c$$S,[""]);
this._subopts=Clazz.new_($I$(3).c$$S,[""]);
this._suboptBrowser=Clazz.new_($I$(4));
this._suboptCount=Clazz.new_($I$(4));
this._selectedIndex=0;
this.next=Clazz.new_($I$(5).c$$S,[">"]);
this.previous=Clazz.new_($I$(5).c$$S,["<"]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(5, 5, 5, 5));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this.add$java_awt_Component$O(this._suboptBrowser, "South");
this.add$java_awt_Component$O(this._suboptCount, "North");
this.next.addActionListener$java_awt_event_ActionListener(((P$.NussinovDesignDemo$InfoPanel$1||
(function(){var C$=Clazz.newClass(P$, "NussinovDesignDemo$InfoPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
if (this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._sols.size$() > 0) {
this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel'].setSelectedIndex$I.apply(this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel'], [(this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._selectedIndex + 1) % this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._sols.size$()]);
}});
})()
), Clazz.new_(P$.NussinovDesignDemo$InfoPanel$1.$init$, [this, null])));
this.previous.addActionListener$java_awt_event_ActionListener(((P$.NussinovDesignDemo$InfoPanel$2||
(function(){var C$=Clazz.newClass(P$, "NussinovDesignDemo$InfoPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
if (this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._sols.size$() > 0) {
this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel'].setSelectedIndex$I.apply(this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel'], [(this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._selectedIndex + this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._sols.size$() - 1) % this.b$['fr.orsay.lri.varna.applications.NussinovDesignDemo.InfoPanel']._sols.size$()]);
}});
})()
), Clazz.new_(P$.NussinovDesignDemo$InfoPanel$2.$init$, [this, null])));
this.next.setEnabled$Z(false);
this.previous.setEnabled$Z(false);
var nbLab=Clazz.new_($I$(3).c$$S,["#Repliements"]);
$I$(8).formatLabel$javax_swing_JLabel(nbLab);
var cooptlab=Clazz.new_($I$(3).c$$S,["#Co-optimaux"]);
$I$(8).formatLabel$javax_swing_JLabel(cooptlab);
$I$(8).formatLabel$javax_swing_JLabel(this._text);
$I$(8).formatLabel$javax_swing_JLabel(this._subopts);
this._suboptCount.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this._suboptCount.add$java_awt_Component$O(nbLab, "West");
this._suboptCount.add$java_awt_Component$O(this._text, "Center");
this._suboptCount.setBackground$java_awt_Color($I$(9).decode$S("#E33729"));
var commands=Clazz.new_($I$(4));
commands.add$java_awt_Component(this.previous);
commands.add$java_awt_Component(this.next);
commands.setBackground$java_awt_Color($I$(9).decode$S("#E33729"));
var jp=Clazz.new_($I$(4));
jp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
jp.add$java_awt_Component$O(this._subopts, "West");
jp.add$java_awt_Component$O(commands, "Center");
jp.setBackground$java_awt_Color($I$(9).decode$S("#E33729"));
this._suboptBrowser.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this._suboptBrowser.add$java_awt_Component$O(cooptlab, "West");
this._suboptBrowser.add$java_awt_Component$O(jp, "Center");
this._suboptBrowser.setBackground$java_awt_Color($I$(9).decode$S("#E33729"));
}, 1);

Clazz.newMeth(C$, 'setSelectedIndex$I', function (i) {
this._selectedIndex=i;
var rfolded=Clazz.new_($I$(10));
try {
rfolded.setRNA$S$S(this.this$0.getSeq$.apply(this.this$0, []), this._sols.get$I(i));
var target=this.this$0._vpTarget.getRNA$();
for (var mb, $mb = rfolded.get_listeBases$().iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
var mbref=target.getBaseAt$I(mb.getIndex$());
if (mb.getElementStructure$() == mbref.getElementStructure$()) {
mb.getStyleBase$().setBaseInnerColor$java_awt_Color(this.this$0._okColor);
mb.getStyleBase$().setBaseNameColor$java_awt_Color($I$(9).white);
}}
for (var mb, $mb = target.get_listeBases$().iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
var mbref=rfolded.getBaseAt$I(mb.getIndex$());
if (mb.getElementStructure$() == mbref.getElementStructure$()) {
mb.getStyleBase$().setBaseInnerColor$java_awt_Color(this.this$0._okColor);
} else {
mb.getStyleBase$().setBaseInnerColor$java_awt_Color($I$(9).white);
}}
rfolded.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(this.this$0._vpMaster.getConfig$());
if ((this._sols.size$() == 1) && (target.getStructDBN$().equals$O(this._sols.get$I(0))) ) rfolded.setName$S("F\u00e9licitations !");
 else rfolded.setName$S("Repliement stable - " + (i + 1) + "/" + this._sols.size$() );
this.this$0._vpMaster.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(rfolded);
this.this$0._vpTarget.repaint$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
p$2.formatDescription.apply(this, []);
});

Clazz.newMeth(C$, 'setInfo$java_util_ArrayList$java_math_BigInteger', function (sols, nbFolds) {
this._sols=sols;
this._nbFolds=nbFolds;
p$2.formatDescription.apply(this, []);
this.setSelectedIndex$I(0);
});

Clazz.newMeth(C$, 'formatDescription', function () {
this._text.setText$S("" + this._nbFolds);
this._subopts.setText$S("" + this._sols.size$());
this.next.setEnabled$Z(this._sols.size$() > 1);
this.previous.setEnabled$Z(this._sols.size$() > 1);
}, p$2);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:41 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
