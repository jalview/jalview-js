(function(){var P$=Clazz.newPackage("org.jmol.modelkit"),I$=[[0,'org.jmol.i18n.GT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModelKitPopupResourceBundle", null, 'org.jmol.popup.PopupResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['menuContents','String[][]','+structureContents']]]

Clazz.newMeth(C$, 'c$$S$java_util_Properties', function (menuStructure, menuText) {
;C$.superclazz.c$$S$java_util_Properties.apply(this,[menuStructure, menuText]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMenuName$', function () {
return "modelkitMenu";
});

Clazz.newMeth(C$, 'buildStructure$S', function (menuStructure) {
this.addItems$SAA(C$.menuContents);
this.addItems$SAA(C$.structureContents);
if (menuStructure != null ) this.setStructure$S$org_jmol_api_Translator(menuStructure, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'getWordContents$', function () {
var wasTranslating=$I$(1).setDoTranslate$Z(true);
var words=Clazz.array(String, -1, ["atomMenu", "<atoms.png>", "moreAtomMenu", "<dotdotdot.png>", "bondMenu", "<bonds.png>", "optionsMenu", "<dotdotdot.png>", "operator", "(no operator selected)", "xtalMenu", "<xtal.png>", "xtalModePersistMenu", "mode", "xtalSelPersistMenu", "select atom or position", "xtalSelOpPersistMenu", "select operator", "xtalOp!PersistMenu", "from list...", "xtalSymmetryPersistMenu", "symmetry", "xtalOptionsPersistMenu", "more options...", "xtalPackingPersistMenu", "packing", "mkshowSymopInfoCB", "show symmetry operator info", "mkaddHydrogensCB", "add hydrogens on new atoms", "mkclicktosetelementCB", "allow clicking to set atom element", "mkselop_byop", "from list", "mkselop_addOffset", "add/remove lattice offset", "mkselop_atom2", "to second atom", "mksel_atom", "select atom", "mksel_position", "select position", "mkmode_molecular", $I$(1).$$S("disabled"), "mkmode_view", $I$(1).$$S("View"), "mkmode_edit", $I$(1).$$S("Edit"), "mksymmetry_none", $I$(1).$$S("do not apply"), "mksymmetry_retainLocal", $I$(1).$$S("retain local"), "mksymmetry_applyLocal", $I$(1).$$S("apply local"), "mksymmetry_applyFull", $I$(1).$$S("apply full"), "mkunitcell_extend", $I$(1).$$S("extend cell"), "mkunitcell_packed", $I$(1).$$S("pack cell"), "mkasymmetricUnit", $I$(1).$$S("asymmetric unit"), "mkallAtoms", $I$(1).$$S("all atoms"), "new", $I$(1).$$S("new"), "undo", (function(a,f){return f.apply(null,a)})(["undo (CTRL-Z)"],$I$(1).$$S), "redo", (function(a,f){return f.apply(null,a)})(["redo (CTRL-Y)"],$I$(1).$$S), "center", $I$(1).$$S("center"), "addh", $I$(1).$$S("add hydrogens"), "minimize", $I$(1).$$S("minimize"), "hmin", $I$(1).$$S("fix hydrogens and minimize"), "clearQPersist", $I$(1).$$S("clear"), "SIGNEDsaveFile", $I$(1).$$S("save file"), "SIGNEDsaveState", $I$(1).$$S("save state"), "invertStereoP!RD", $I$(1).$$S("invert ring stereochemistry"), "assignAtom_XP!RD", $I$(1).$$S("delete atom"), "assignAtom_XxP!RD", $I$(1).$$S("drag to bond"), "dragAtomP!RD", $I$(1).$$S("drag atom"), "dragMinimizeP!RD", (function(a,f){return f.apply(null,a)})(["drag atom (and minimize)"],$I$(1).$$S), "dragMoleculeP!RD", (function(a,f){return f.apply(null,a)})(["drag molecule (ALT to rotate)"],$I$(1).$$S), "dragMinimizeMoleculeP!RD", (function(a,f){return f.apply(null,a)})(["drag and minimize molecule (docking)"],$I$(1).$$S), "assignAtom_CP!RD", "C", "assignAtom_HP!RD", "H", "assignAtom_NP!RD", "N", "assignAtom_OP!RD", "O", "assignAtom_FP!RD", "F", "assignAtom_ClP!RD", "Cl", "assignAtom_BrP!RD", "Br", "_??P!RD", "??", "assignAtom_plP!RD", $I$(1).$$S("increase charge"), "assignAtom_miP!RD", $I$(1).$$S("decrease charge"), "assignBond_0P!RD", $I$(1).$$S("delete bond"), "assignBond_1P!RD", $I$(1).$$S("single"), "assignBond_2P!RD", $I$(1).$$S("double"), "assignBond_3P!RD", $I$(1).$$S("triple"), "assignBond_pP!RD", $I$(1).$$S("increase order"), "assignBond_mP!RD", $I$(1).$$S("decrease order"), "rotateBondP!RD", $I$(1).$$S("rotate bond"), "exit!Persist", $I$(1).$$S("exit modelkit mode")]);
$I$(1).setDoTranslate$Z(wasTranslating);
return words;
});

Clazz.newMeth(C$, 'getMenuAsText$S', function (title) {
return this.getStuctureAsText$S$SAA$SAA(title, C$.menuContents, C$.structureContents);
});

C$.$static$=function(){C$.$static$=0;
C$.menuContents=Clazz.array(String, -2, [Clazz.array(String, -1, ["modelkitMenu", "atomMenu bondMenu xtalMenu optionsMenu"]), Clazz.array(String, -1, ["optionsMenu", "new center addh minimize hmin  - undo redo - SIGNEDsaveFile SIGNEDsaveState exit!Persist"]), Clazz.array(String, -1, ["atomMenu", "assignAtom_XP!RD assignAtom_XxP!RD dragAtomP!RD dragMinimizeP!RD dragMoleculeP!RD dragMinimizeMoleculeP!RD invertStereoP!RD - assignAtom_CP!RD assignAtom_HP!RD assignAtom_NP!RD assignAtom_OP!RD assignAtom_FP!RD assignAtom_ClP!RD assignAtom_BrP!RD _??P!RD _??P!RD _??P!RD moreAtomMenu - assignAtom_plP!RD assignAtom_miP!RD"]), Clazz.array(String, -1, ["moreAtomMenu", "clearQPersist - _??P!RD _??P!RD _??P!RD _??P!RD _??P!RD _??P!RD "]), Clazz.array(String, -1, ["bondMenu", "assignBond_0P!RD assignBond_1P!RD assignBond_2P!RD assignBond_3P!RD assignBond_pP!RD assignBond_mP!RD rotateBondP!RD"]), Clazz.array(String, -1, ["xtalMenu", "xtalModePersistMenu xtalSelPersistMenu xtalSelOpPersistMenu operator xtalSymmetryPersistMenu xtalPackingPersistMenu xtalOptionsPersistMenu"]), Clazz.array(String, -1, ["xtalModePersistMenu", "mkmode_molecular mkmode_view mkmode_edit"]), Clazz.array(String, -1, ["xtalSelPersistMenu", "mksel_atom mksel_position"]), Clazz.array(String, -1, ["xtalSelOpPersistMenu", "xtalOp!PersistMenu mkselop_addOffset mkselop_atom2"]), Clazz.array(String, -1, ["xtalSymmetryPersistMenu", "mksymmetry_none mksymmetry_retainLocal mksymmetry_applyLocal mksymmetry_applyFull"]), Clazz.array(String, -1, ["xtalPackingPersistMenu", "mkunitcell_packed mkunitcell_extend"]), Clazz.array(String, -1, ["xtalOptionsPersistMenu", "mkshowSymopInfoCB mkclicktosetelementCB mkaddHydrogensCB"])]);
C$.structureContents=Clazz.array(String, -2, [Clazz.array(String, -1, ["new", "zap"]), Clazz.array(String, -1, ["center", "zoomto 0 {visible} 0/1.5"]), Clazz.array(String, -1, ["addh", "calculate hydrogens {model=_lastframe}"]), Clazz.array(String, -1, ["minimize", "minimize"]), Clazz.array(String, -1, ["hmin", "delete hydrogens and model=_lastframe; minimize addhydrogens"]), Clazz.array(String, -1, ["SIGNEDsaveFile", "select visible;write COORD \'?jmol.mol\'"]), Clazz.array(String, -1, ["SIGNEDsaveState", "write \'?jmol.jpg\'"]), Clazz.array(String, -1, ["clearQ", "clearQ"]), Clazz.array(String, -1, ["undo", "!UNDO"]), Clazz.array(String, -1, ["redo", "!REDO"]), Clazz.array(String, -1, ["operator", ""]), Clazz.array(String, -1, ["exit!Persist", "set modelkitMode false"])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
