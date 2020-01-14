(function(){var P$=Clazz.newPackage("org.jmol.modelkit"),I$=[[0,'org.jmol.i18n.GT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModelKitPopupResourceBundle", null, 'org.jmol.popup.PopupResource');
C$.menuContents=null;
C$.structureContents=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.menuContents=Clazz.array(String, -2, [Clazz.array(String, -1, ["modelkitMenu", "atomMenu bondMenu optionsMenu"]), Clazz.array(String, -1, ["optionsMenu", "new center addh minimize hmin  - undo redo - SIGNEDsaveFile SIGNEDsaveState exit"]), Clazz.array(String, -1, ["atomMenu", "assignAtom_XP!CB assignAtom_XxP!CB dragAtomP!CB dragMinimizeP!CB dragMoleculeP!CB dragMinimizeMoleculeP!CB invertStereoP!CB - assignAtom_CP!CB assignAtom_HP!CB assignAtom_NP!CB assignAtom_OP!CB assignAtom_FP!CB assignAtom_ClP!CB assignAtom_BrP!CB _??P!CB _??P!CB _??P!CB moreAtomMenu - assignAtom_PlP!CB assignAtom_MiP!CB"]), Clazz.array(String, -1, ["moreAtomMenu", "clearQ - _??P!CB _??P!CB _??P!CB _??P!CB _??P!CB _??P!CB "]), Clazz.array(String, -1, ["bondMenu", "assignBond_0P!CB assignBond_1P!CB assignBond_2P!CB assignBond_3P!CB - assignBond_pP!CB assignBond_mP!CB - rotateBondP!CB"])]);
C$.structureContents=Clazz.array(String, -2, [Clazz.array(String, -1, ["new", "zap"]), Clazz.array(String, -1, ["center", "zoomto 0 {visible} 0/1.5"]), Clazz.array(String, -1, ["addh", "calculate hydrogens {model=_lastframe}"]), Clazz.array(String, -1, ["minimize", "minimize"]), Clazz.array(String, -1, ["hmin", "delete hydrogens and model=_lastframe; minimize addhydrogens"]), Clazz.array(String, -1, ["SIGNEDsaveFile", "select visible;write COORD \'?jmol.mol\'"]), Clazz.array(String, -1, ["SIGNEDsaveState", "write \'?jmol.jpg\'"]), Clazz.array(String, -1, ["clearQ", "clearQ"]), Clazz.array(String, -1, ["undo", "!UNDO"]), Clazz.array(String, -1, ["redo", "!REDO"]), Clazz.array(String, -1, ["exit", "set modelkitMode false"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Properties', function (menuStructure, menuText) {
C$.superclazz.c$$S$java_util_Properties.apply(this, [menuStructure, menuText]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMenuName$', function () {
return "modelkitMenu";
});

Clazz.newMeth(C$, 'buildStructure$S', function (menuStructure) {
this.addItems$SAA(C$.menuContents);
this.addItems$SAA(C$.structureContents);
if (menuStructure != null ) this.setStructure$S$org_jmol_api_Translator(menuStructure, Clazz.new_($I$(1)));
});

Clazz.newMeth(C$, 'getWordContents$', function () {
var wasTranslating=$I$(1).setDoTranslate$Z(true);
var words=Clazz.array(String, -1, ["atomMenu", "<atoms.png>", "moreAtomMenu", "<dotdotdot.png>", "bondMenu", "<bonds.png>", "optionsMenu", "<dotdotdot.png>", "new", $I$(1).$$S("new"), "undo", $I$(1).$$S("undo (CTRL-Z)"), "redo", $I$(1).$$S("redo (CTRL-Y)"), "center", $I$(1).$$S("center"), "addh", $I$(1).$$S("add hydrogens"), "minimize", $I$(1).$$S("minimize"), "hmin", $I$(1).$$S("fix hydrogens and minimize"), "clearQ", $I$(1).$$S("clear"), "SIGNEDsaveFile", $I$(1).$$S("save file"), "SIGNEDsaveState", $I$(1).$$S("save state"), "invertStereoP!CB", $I$(1).$$S("invert ring stereochemistry"), "assignAtom_XP!CB", $I$(1).$$S("delete atom"), "assignAtom_XxP!CB", $I$(1).$$S("drag to bond"), "dragAtomP!CB", $I$(1).$$S("drag atom"), "dragMinimizeP!CB", $I$(1).$$S("drag atom (and minimize)"), "dragMoleculeP!CB", $I$(1).$$S("drag molecule (ALT to rotate)"), "dragMinimizeMoleculeP!CB", $I$(1).$$S("drag and minimize molecule (docking)"), "assignAtom_CP!CB", "C", "assignAtom_HP!CB", "H", "assignAtom_NP!CB", "N", "assignAtom_OP!CB", "O", "assignAtom_FP!CB", "F", "assignAtom_ClP!CB", "Cl", "assignAtom_BrP!CB", "Br", "_??P!CB", "??", "assignAtom_PlP!CB", $I$(1).$$S("increase charge"), "assignAtom_MiP!CB", $I$(1).$$S("decrease charge"), "assignBond_0P!CB", $I$(1).$$S("delete bond"), "assignBond_1P!CB", $I$(1).$$S("single"), "assignBond_2P!CB", $I$(1).$$S("double"), "assignBond_3P!CB", $I$(1).$$S("triple"), "assignBond_pP!CB", $I$(1).$$S("increase order"), "assignBond_mP!CB", $I$(1).$$S("decrease order"), "rotateBondP!CB", $I$(1).$$S("rotate bond (SHIFT-DRAG)"), "exit", $I$(1).$$S("exit modelkit mode")]);
$I$(1).setDoTranslate$Z(wasTranslating);
return words;
});

Clazz.newMeth(C$, 'getMenuAsText$S', function (title) {
return this.getStuctureAsText$S$SAA$SAA(title, C$.menuContents, C$.structureContents);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
