(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'java.util.Hashtable','org.jmol.util.Logger','Boolean','javajs.util.Lst','java.util.Arrays','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "T");
C$.astrType=null;
C$.tokenSpaceBeforeSquare=null;
C$.tokenOn=null;
C$.tokenOff=null;
C$.tokenAll=null;
C$.tokenIf=null;
C$.tokenAnd=null;
C$.tokenAndSpec=null;
C$.tokenOr=null;
C$.tokenAndFALSE=null;
C$.tokenOrTRUE=null;
C$.tokenOpIf=null;
C$.tokenComma=null;
C$.tokenDefineString=null;
C$.tokenPlus=null;
C$.tokenMinus=null;
C$.tokenMul3=null;
C$.tokenTimes=null;
C$.tokenDivide=null;
C$.tokenLeftParen=null;
C$.tokenRightParen=null;
C$.tokenArraySquare=null;
C$.tokenArrayOpen=null;
C$.tokenArrayClose=null;
C$.tokenLeftBrace=null;
C$.tokenExpressionBegin=null;
C$.tokenExpressionEnd=null;
C$.tokenConnected=null;
C$.tokenCoordinateBegin=null;
C$.tokenRightBrace=null;
C$.tokenCoordinateEnd=null;
C$.tokenColon=null;
C$.tokenSetCmd=null;
C$.tokenSet=null;
C$.tokenSetArray=null;
C$.tokenSetProperty=null;
C$.tokenSetVar=null;
C$.tokenEquals=null;
C$.tokenScript=null;
C$.tokenSwitch=null;
C$.tokenMap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$.astrType="nada identifier integer decimal string inscode hash array point point4 bitset matrix3f matrix4f array hash bytearray keyword".split$S(" ");
};
C$.tokenSpaceBeforeSquare=C$.o$I$O(1073742195, " ");
C$.tokenOn=C$.tv$I$I$O(1073742335, 1, "on");
C$.tokenOff=C$.tv$I$I$O(1073742334, 0, "off");
C$.tokenAll=C$.o$I$O(1073742327, "all");
C$.tokenIf=C$.o$I$O(134320649, "if");
C$.tokenAnd=C$.o$I$O(268435552, "and");
C$.tokenAndSpec=C$.o$I$O(268435584, "");
C$.tokenOr=C$.o$I$O(268435536, "or");
C$.tokenAndFALSE=C$.o$I$O(268435552, "and");
C$.tokenOrTRUE=C$.o$I$O(268435536, "or");
C$.tokenOpIf=C$.o$I$O(805306401, "?");
C$.tokenComma=C$.o$I$O(268435504, ",");
C$.tokenDefineString=C$.tv$I$I$O(12290, 4, "@");
C$.tokenPlus=C$.o$I$O(268435617, "+");
C$.tokenMinus=C$.o$I$O(268435616, "-");
C$.tokenMul3=C$.o$I$O(1275068930, "mul3");
C$.tokenTimes=C$.o$I$O(268435633, "*");
C$.tokenDivide=C$.o$I$O(268435632, "/");
C$.tokenLeftParen=C$.o$I$O(268435472, "(");
C$.tokenRightParen=C$.o$I$O(268435473, ")");
C$.tokenArraySquare=C$.o$I$O(1275068418, "[");
C$.tokenArrayOpen=C$.o$I$O(268435520, "[");
C$.tokenArrayClose=C$.o$I$O(268435521, "]");
C$.tokenLeftBrace=C$.o$I$O(1073742332, "{");
C$.tokenExpressionBegin=C$.o$I$O(1073742325, "expressionBegin");
C$.tokenExpressionEnd=C$.o$I$O(1073742326, "expressionEnd");
C$.tokenConnected=C$.o$I$O(134217736, "connected");
C$.tokenCoordinateBegin=C$.o$I$O(1073742332, "{");
C$.tokenRightBrace=C$.o$I$O(1073742338, "}");
C$.tokenCoordinateEnd=C$.tokenRightBrace;
C$.tokenColon=C$.o$I$O(268435490, ":");
C$.tokenSetCmd=C$.o$I$O(36867, "set");
C$.tokenSet=C$.tv$I$I$O(36867, "=".$c(), "");
C$.tokenSetArray=C$.tv$I$I$O(36867, "[".$c(), "");
C$.tokenSetProperty=C$.tv$I$I$O(36867, ".".$c(), "");
C$.tokenSetVar=C$.tv$I$I$O(36868, "=".$c(), "var");
C$.tokenEquals=C$.o$I$O(268435860, "=");
C$.tokenScript=C$.o$I$O(134222850, "script");
C$.tokenSwitch=C$.o$I$O(102410, "switch");
C$.tokenMap=Clazz.new_($I$(1));
{
var arrayPairs=Clazz.array(java.lang.Object, -1, ["(", C$.tokenLeftParen, ")", C$.tokenRightParen, "and", C$.tokenAnd, "&", null, "&&", null, "or", C$.tokenOr, "|", null, "||", null, "?", C$.tokenOpIf, ",", C$.tokenComma, "=", C$.tokenEquals, "==", null, ":", C$.tokenColon, "+", C$.tokenPlus, "-", C$.tokenMinus, "*", C$.tokenTimes, "/", C$.tokenDivide, "script", C$.tokenScript, "source", null, "set", C$.tokenSetCmd, "switch", C$.tokenSwitch, "all", C$.tokenAll, "off", C$.tokenOff, "false", null, "on", C$.tokenOn, "true", null]);
var tokenThis;
var tokenLast=null;
var sTok;
var lcase;
var n=arrayPairs.length - 1;
for (var i=0; i < n; i+=2) {
sTok=arrayPairs[i];
lcase=sTok.toLowerCase$();
tokenThis=arrayPairs[i + 1];
if (tokenThis == null ) tokenThis=tokenLast;
 else if (tokenThis.value == null ) tokenThis.value=sTok;
C$.tokenMap.put$TK$TV(lcase, tokenThis);
tokenLast=tokenThis;
}
arrayPairs=null;
var sTokens=Clazz.array(String, -1, ["+=", "-=", "*=", "/=", "\\=", "&=", "|=", "not", "!", "xor", "tog", "<", "<=", ">=", ">", "!=", "<>", "LIKE", "within", ".", "..", "[", "]", "{", "}", "$", "%", ";", "++", "--", "**", "\\", "animation", "anim", "assign", "axes", "backbone", "background", "bind", "bondorder", "boundbox", "boundingBox", "break", "calculate", "capture", "cartoon", "cartoons", "case", "catch", "cd", "center", "centre", "centerat", "cgo", "color", "colour", "compare", "configuration", "conformation", "config", "connect", "console", "contact", "contacts", "continue", "data", "default", "define", "@", "delay", "delete", "density", "depth", "dipole", "dipoles", "display", "dot", "dots", "draw", "echo", "ellipsoid", "ellipsoids", "else", "elseif", "end", "endif", "exit", "eval", "file", "files", "font", "for", "format", "frame", "frames", "frank", "function", "functions", "geosurface", "getProperty", "goto", "halo", "halos", "helix", "helixalpha", "helix310", "helixpi", "hbond", "hbonds", "help", "hide", "history", "hover", "if", "in", "initialize", "invertSelected", "isosurface", "javascript", "label", "labels", "lcaoCartoon", "lcaoCartoons", "load", "log", "loop", "measure", "measures", "monitor", "monitors", "meshribbon", "meshribbons", "message", "minimize", "minimization", "mo", "model", "models", "modulation", "move", "moveTo", "mutate", "navigate", "navigation", "nbo", "origin", "out", "parallel", "pause", "wait", "plot", "plot3d", "pmesh", "polygon", "polyhedra", "polyhedron", "print", "process", "prompt", "quaternion", "quaternions", "quit", "ramachandran", "rama", "refresh", "reset", "unset", "restore", "restrict", "return", "ribbon", "ribbons", "rocket", "rockets", "rotate", "rotateSelected", "save", "select", "selectionHalos", "selectionHalo", "showSelections", "sheet", "show", "slab", "spacefill", "cpk", "spin", "ssbond", "ssbonds", "star", "stars", "step", "steps", "stereo", "strand", "strands", "structure", "_structure", "strucNo", "struts", "strut", "subset", "subsystem", "synchronize", "sync", "trace", "translate", "translateSelected", "try", "unbind", "unitcell", "var", "vector", "vectors", "vibration", "while", "wireframe", "write", "zap", "zoom", "zoomTo", "atom", "atoms", "axisangle", "basepair", "basepairs", "orientation", "orientations", "pdbheader", "polymer", "polymers", "residue", "residues", "rotation", "row", "sequence", "seqcode", "shape", "state", "symbol", "symmetry", "spaceGroup", "transform", "translation", "url", "_", "abs", "absolute", "acos", "add", "adpmax", "adpmin", "align", "altloc", "altlocs", "ambientOcclusion", "amino", "angle", "array", "as", "atomID", "_atomID", "_a", "atomIndex", "atomName", "atomno", "atomType", "atomX", "atomY", "atomZ", "average", "babel", "babel21", "back", "backlit", "backshell", "balls", "baseModel", "best", "beta", "bin", "bondCount", "bonded", "bottom", "branch", "brillouin", "bzone", "wignerSeitz", "cache", "carbohydrate", "cell", "chain", "chains", "chainNo", "chemicalShift", "cs", "clash", "clear", "clickable", "clipboard", "connected", "context", "constraint", "contourLines", "coord", "coordinates", "coords", "cos", "cross", "covalentRadius", "covalent", "direction", "displacement", "displayed", "distance", "div", "DNA", "domains", "dotted", "DSSP", "DSSR", "element", "elemno", "_e", "error", "exportScale", "fill", "find", "fixedTemperature", "forcefield", "formalCharge", "charge", "eta", "front", "frontlit", "frontOnly", "fullylit", "fx", "fy", "fz", "fxyz", "fux", "fuy", "fuz", "fuxyz", "group", "groups", "group1", "groupID", "_groupID", "_g", "groupIndex", "hidden", "highlight", "hkl", "hydrophobicity", "hydrophobic", "hydro", "id", "identify", "ident", "image", "info", "infoFontSize", "inline", "insertion", "insertions", "intramolecular", "intra", "intermolecular", "inter", "bondingRadius", "ionicRadius", "ionic", "isAromatic", "Jmol", "JSON", "join", "keys", "last", "left", "length", "lines", "list", "magneticShielding", "ms", "mass", "max", "mep", "mesh", "middle", "min", "mlp", "mode", "modify", "modifyOrCreate", "modt", "modt1", "modt2", "modt3", "modx", "mody", "modz", "modo", "modxyz", "molecule", "molecules", "modelIndex", "monomer", "morph", "movie", "mouse", "mul", "mul3", "nboCharges", "nci", "next", "noDelay", "noDots", "noFill", "noMesh", "none", "null", "inherit", "normal", "noBackshell", "noContourLines", "notFrontOnly", "noTriangles", "now", "nucleic", "occupancy", "omega", "only", "opaque", "options", "partialCharge", "phi", "pivot", "plane", "planar", "play", "playRev", "point", "points", "pointGroup", "polymerLength", "pop", "previous", "prev", "probe", "property", "properties", "protein", "psi", "purine", "push", "PyMOL", "pyrimidine", "random", "range", "rasmol", "replace", "resno", "resume", "rewind", "reverse", "right", "rmsd", "RNA", "rna3d", "rock", "rubberband", "saSurface", "saved", "scale", "scene", "search", "smarts", "selected", "seqid", "shapely", "sidechain", "sin", "site", "size", "smiles", "substructure", "solid", "sort", "specialPosition", "sqrt", "split", "starWidth", "starScale", "stddev", "straightness", "structureId", "supercell", "sub", "sum", "sum2", "surface", "surfaceDistance", "symop", "sx", "sy", "sz", "sxyz", "temperature", "relativeTemperature", "tensor", "theta", "thisModel", "ticks", "top", "torsion", "trajectory", "trajectories", "translucent", "transparent", "triangles", "trim", "type", "ux", "uy", "uz", "uxyz", "user", "valence", "vanderWaals", "vdw", "vdwRadius", "visible", "volume", "vx", "vy", "vz", "vxyz", "xyz", "w", "x", "y", "z", "addHydrogens", "allConnected", "angstroms", "anisotropy", "append", "arc", "area", "aromatic", "arrow", "async", "audio", "auto", "axis", "barb", "binary", "blockData", "cancel", "cap", "cavity", "centroid", "check", "chemical", "circle", "collapsed", "col", "colorScheme", "command", "commands", "contour", "contours", "corners", "count", "criterion", "create", "crossed", "curve", "cutoff", "cylinder", "diameter", "discrete", "distanceFactor", "downsample", "drawing", "dynamicMeasurements", "eccentricity", "ed", "edges", "edgesOnly", "energy", "exitJmol", "faceCenterOffset", "filter", "first", "fixed", "fix", "flat", "fps", "from", "frontEdges", "full", "fullPlane", "functionXY", "functionXYZ", "gridPoints", "hiddenLinesDashed", "homo", "ignore", "InChI", "InChIKey", "increment", "insideout", "interior", "intersection", "intersect", "internal", "lattice", "line", "lineData", "link", "lobe", "lonePair", "lp", "lumo", "macro", "manifest", "mapProperty", "map", "maxSet", "menu", "minSet", "modelBased", "molecular", "mrc", "msms", "name", "nmr", "noCross", "noDebug", "noEdges", "noHead", "noLoad", "noPlane", "object", "obj", "offset", "offsetSide", "once", "orbital", "atomicOrbital", "packed", "palindrome", "parameters", "path", "pdb", "period", "periodic", "perpendicular", "perp", "phase", "planarParam", "pocket", "pointsPerAngstrom", "radical", "rad", "reference", "remove", "resolution", "reverseColor", "rotate45", "selection", "sigma", "sign", "silent", "sphere", "squared", "stdInChI", "stdInChIKey", "stop", "title", "titleFormat", "to", "validation", "value", "variable", "variables", "vertices", "width", "wigner", "backgroundModel", "celShading", "celShadingPower", "debug", "debugHigh", "defaultLattice", "measurements", "measurement", "scale3D", "toggleLabel", "userColorScheme", "throw", "timeout", "timeouts", "window", "animationMode", "appletProxy", "atomTypes", "axesColor", "axis1Color", "axis2Color", "axis3Color", "backgroundColor", "bondmode", "boundBoxColor", "boundingBoxColor", "chirality", "cipRule", "currentLocalPath", "dataSeparator", "defaultAngleLabel", "defaultColorScheme", "defaultColors", "defaultDirectory", "defaultDistanceLabel", "defaultDropScript", "defaultLabelPDB", "defaultLabelXYZ", "defaultLoadFilter", "defaultLoadScript", "defaults", "defaultTorsionLabel", "defaultVDW", "drawFontSize", "eds", "edsDiff", "energyUnits", "fileCacheDirectory", "fontsize", "helpPath", "hoverLabel", "language", "loadFormat", "loadLigandFormat", "logFile", "measurementUnits", "nihResolverFormat", "nmrPredictFormat", "nmrUrlFormat", "pathForAllFiles", "picking", "pickingStyle", "pickLabel", "platformSpeed", "propertyColorScheme", "quaternionFrame", "smilesUrlFormat", "smiles2dImageFormat", "unitCellColor", "axesOffset", "axisOffset", "axesScale", "axisScale", "bondTolerance", "cameraDepth", "defaultDrawArrowScale", "defaultTranslucent", "dipoleScale", "ellipsoidAxisDiameter", "gestureSwipeFactor", "hbondsAngleMinimum", "hbondsDistanceMaximum", "hoverDelay", "loadAtomDataTolerance", "minBondDistance", "minimizationCriterion", "modulationScale", "mouseDragFactor", "mouseWheelFactor", "navFPS", "navigationDepth", "navigationSlab", "navigationSpeed", "navX", "navY", "navZ", "particleRadius", "pointGroupDistanceTolerance", "pointGroupLinearTolerance", "radius", "rotationRadius", "scaleAngstromsPerInch", "sheetSmoothing", "slabRange", "solventProbeRadius", "spinFPS", "spinX", "spinY", "spinZ", "stereoDegrees", "strutDefaultRadius", "strutLengthMaximum", "vectorScale", "vectorsCentered", "vectorSymmetry", "vectorTrail", "vibrationPeriod", "vibrationScale", "visualRange", "ambientPercent", "ambient", "animationFps", "axesMode", "bondRadiusMilliAngstroms", "bondingVersion", "delayMaximumMs", "diffusePercent", "diffuse", "dotDensity", "dotScale", "ellipsoidDotCount", "helixStep", "hermiteLevel", "historyLevel", "lighting", "logLevel", "meshScale", "minimizationSteps", "minPixelSelRadius", "percentVdwAtom", "perspectiveModel", "phongExponent", "pickingSpinRate", "propertyAtomNumberField", "propertyAtomNumberColumnCount", "propertyDataColumnCount", "propertyDataField", "repaintWaitMs", "ribbonAspectRatio", "contextDepthMax", "scriptReportingLevel", "showScript", "smallMoleculeMaxAtoms", "specular", "specularExponent", "specularPercent", "specPercent", "specularPower", "specpower", "strandCount", "strandCountForMeshRibbon", "strandCountForStrands", "strutSpacing", "zDepth", "zSlab", "zshadePower", "allowEmbeddedScripts", "allowGestures", "allowKeyStrokes", "allowModelKit", "allowMoveAtoms", "allowMultiTouch", "allowRotateSelected", "antialiasDisplay", "antialiasImages", "antialiasTranslucent", "appendNew", "applySymmetryToBonds", "atomPicking", "allowAudio", "autobond", "autoFPS", "autoplayMovie", "axesMolecular", "axesOrientationRasmol", "axesUnitCell", "axesWindow", "bondModeOr", "bondPicking", "bonds", "bond", "cartoonBaseEdges", "cartoonBlocks", "cartoonBlockHeight", "cartoonsFancy", "cartoonFancy", "cartoonLadders", "cartoonRibose", "cartoonRockets", "cartoonSteps", "chainCaseSensitive", "cipRule6Full", "colorRasmol", "debugScript", "defaultStructureDssp", "disablePopupMenu", "displayCellParameters", "showUnitcellInfo", "dotsSelectedOnly", "dotSurface", "dragSelected", "drawHover", "drawPicking", "dsspCalculateHydrogenAlways", "ellipsoidArcs", "ellipsoidArrows", "ellipsoidAxes", "ellipsoidBall", "ellipsoidDots", "ellipsoidFill", "fileCaching", "fontCaching", "fontScaling", "forceAutoBond", "fractionalRelative", "greyscaleRendering", "hbondsBackbone", "hbondsRasmol", "hbondsSolid", "hetero", "hideNameInPopup", "hideNavigationPoint", "hideNotSelected", "highResolution", "hydrogen", "hydrogens", "imageState", "isKiosk", "isosurfaceKey", "isosurfacePropertySmoothing", "isosurfacePropertySmoothingPower", "jmolInJSpecView", "justifyMeasurements", "languageTranslation", "leadAtom", "leadAtoms", "legacyAutoBonding", "legacyHAddition", "legacyJavaFloat", "logCommands", "logGestures", "measureAllModels", "measurementLabels", "measurementNumbers", "messageStyleChime", "minimizationRefresh", "minimizationSilent", "modelkitMode", "modulateOccupancy", "monitorEnergy", "multiplebondbananas", "multipleBondRadiusFactor", "multipleBondSpacing", "multiProcessor", "navigateSurface", "navigationMode", "navigationPeriodic", "partialDots", "pdbAddHydrogens", "pdbGetHeader", "pdbSequential", "perspectiveDepth", "preserveState", "rangeSelected", "redoMove", "refreshing", "ribbonBorder", "rocketBarrels", "saveProteinStructureState", "scriptQueue", "selectAllModels", "selectHetero", "selectHydrogen", "showAxes", "showBoundBox", "showBoundingBox", "showFrank", "showHiddenSelectionHalos", "showHydrogens", "showKeyStrokes", "showMeasurements", "showModulationVectors", "showMultipleBonds", "showNavigationPointAlways", "showTiming", "showUnitcell", "showUnitcellDetails", "slabByAtom", "slabByMolecule", "slabEnabled", "smartAromatic", "solvent", "solventProbe", "ssBondsBackbone", "statusReporting", "strutsMultiple", "syncMouse", "syncScript", "testFlag1", "testFlag2", "testFlag3", "testFlag4", "traceAlpha", "twistedSheets", "undo", "undoMove", "useMinimizationThread", "useNumberLocalization", "waitForMoveTo", "windowCentered", "wireframeRotation", "zeroBasedXyzRasmol", "zoomEnabled", "zoomHeight", "zoomLarge", "zShade"]);
var iTokens=Clazz.array(Integer.TYPE, -1, [268435666, -1, -1, -1, -1, -1, -1, 268435568, -1, 268435537, 268435538, 268435859, 268435858, 268435857, 268435856, 268435861, -1, 268435862, 134217759, 1073742336, 1073742337, 268435520, 268435521, 1073742332, 1073742338, 1073742330, 268435634, 1073742339, 268435650, 268435649, 268435651, 268435635, 4097, -1, 4098, 1611272194, 1114249217, 1610616835, 4100, 4101, 1678381065, -1, 102407, 4102, 4103, 1112152066, -1, 102411, 102412, 20488, 12289, -1, 4105, 135174, 1765808134, -1, 134221831, 1094717448, -1, -1, 4106, 528395, 134353926, -1, 102408, 134221834, 102413, 12290, -1, 528397, 12291, 1073741914, 554176526, 135175, -1, 1610625028, 1275069444, 1112150019, 135176, 537022465, 1112150020, -1, 364547, 102402, 102409, 364548, 266255, 134218759, 1228935687, -1, 4114, 134320648, 1287653388, 4115, -1, 1611272202, 134320141, -1, 1112150021, 1275072526, 20500, 1112152070, -1, 136314895, 2097159, 2097160, 2097162, 1613238294, -1, 20482, 12294, 1610616855, 544771, 134320649, 1275068432, 266265, 4122, 135180, 134238732, 1825200146, -1, 135182, -1, 134222849, 36869, 528411, 1745489939, -1, -1, -1, 1112152071, -1, 20485, 4126, -1, 1073877010, 1094717454, -1, 1275072532, 4128, 4129, 4130, 4131, -1, 1073877011, 1073742078, 1073742079, 102436, 20487, -1, 4133, 135190, 135188, 1073742106, 1275203608, -1, 36865, 102439, 134256131, 134221850, -1, 266281, 4138, -1, 266284, 4141, -1, 4142, 12295, 36866, 1112152073, -1, 1112152074, -1, 528432, 4145, 4146, 1275082245, 1611141171, -1, -1, 2097184, 134222350, 554176565, 1112152075, -1, 1611141175, 1611141176, -1, 1112152076, -1, 266298, -1, 528443, 1649022989, -1, 1639976963, -1, 1094713367, 659482, -1, 2109448, 1094713368, 4156, -1, 1112152078, 4160, 4162, 364558, 4164, 1814695966, 36868, 135198, -1, 4166, 102406, 659488, 134221856, 12297, 4168, 4170, 1140850689, -1, 134217731, 1073741863, -1, 1073742077, -1, 1073742088, 1094713362, -1, 1073742120, -1, 1073742132, 1275068935, 1086324744, 1086324747, 1086324748, 1073742158, 1086326798, 1088421903, 1073742152, 1073742176, 1073742178, 1073742184, 1275068449, 134218250, 1073741826, 134218242, 1275069441, 1111490561, 1111490562, 1073741832, 1086324739, -1, 553648129, 2097154, 134217729, 1275068418, 1073741848, 1094713346, -1, -1, 1094713347, 1086326786, 1094715393, 1086326785, 1111492609, 1111492610, 1111492611, 96, 1073741856, 1073741857, 1073741858, 1073741861, 1073741862, 1073741859, 2097200, 1073741864, 1073741865, 1275068420, 1228931587, 2097155, 1073741871, 1073742328, 1073741872, -1, -1, 134221829, 2097188, 1094713349, 1086326788, -1, 1094713351, 1111490563, -1, 1073741881, 1073741882, 2097190, 1073741884, 134217736, 14, 1073741894, 1073741898, 1073742329, -1, -1, 134218245, 1275069442, 1111490564, -1, 1073741918, 1073741922, 2097192, 1275069443, 1275068928, 2097156, 1073741925, 1073741926, 1073741915, 1111490587, 1086326789, 1094715402, 1094713353, 1073741936, 570425358, 1073741938, 1275068427, 1073741946, 545259561, 1631586315, -1, 1111490565, 1073741954, 1073741958, 1073741960, 1073741964, 1111492612, 1111492613, 1111492614, 1145047051, 1111492615, 1111492616, 1111492617, 1145047053, 1086324742, -1, 1086324743, 1094713356, -1, -1, 1094713357, 2097194, 536870920, 134219265, 1113589786, -1, -1, 1073741974, 1086324745, -1, 4120, 1073741982, 553648148, 1073741984, 1086324746, -1, 1073741989, -1, 1073741990, -1, 1111492618, -1, -1, 1073742331, 1073741991, 1073741992, 1275069446, 1140850706, 1073741993, 1073741996, 1140850691, 1140850692, 1073742001, 1111490566, -1, 1111490567, 64, 1073742016, 1073742018, 1073742019, 32, 1073742022, 1073742024, 1073742025, 1073742026, 1111490580, -1, 1111490581, 1111490582, 1111490583, 1111490584, 1111490585, 1111490586, 1145045008, 1094713360, -1, 1094713359, 1094713361, 1073742029, 1073742031, 1073742030, 1275068929, 1275068930, 603979891, 1073742036, 1073742037, 603979892, 1073742042, 1073742046, 1073742052, 1073742333, -1, -1, 1073742056, 1073742057, 1073742039, 1073742058, 1073742060, 134217749, 2097166, 1128269825, 1111490568, 1073742072, 1073742074, 1073742075, 1111492619, 1111490569, 1140850707, 134217750, -1, 1073742096, 1073742098, 134217751, -1, 134217762, 1094713363, 1275334681, 1073742108, -1, 1073742109, 1715472409, -1, 2097168, 1111490570, 2097170, 1275335685, 1073742110, 2097172, 134219268, 1073742114, 1073742116, 1275068443, 1094715412, 4143, 1073742125, 1140850693, 1073742126, 1073742127, 2097174, 1073742128, 1073742129, 1073742134, 1073742135, 1073742136, 1073742138, 1073742139, 134218756, -1, 1113589787, 1094713365, 1073742144, 2097178, 134218244, 1094713366, 1140850694, 134218757, 1237320707, 1073742150, 1275068444, 2097196, 134218246, 1275069447, 570425403, -1, 192, 1111490574, 1086324749, 1073742163, 1275068931, 128, 160, 2097180, 1111490575, 1296041986, 1111490571, 1111490572, 1111490573, 1145047052, 1111492620, -1, 1275068445, 1111490576, 2097182, 1073742164, 1073742172, 1073742174, 536870926, -1, 603979967, -1, 1073742182, 1275068932, 1140850696, 1111490577, 1111490578, 1111490579, 1145045006, 1073742186, 1094715417, 1648363544, -1, -1, 2097198, 1312817669, 1111492626, 1111492627, 1111492628, 1145047055, 1145047050, 1140850705, 1111492629, 1111492630, 1111492631, 1073741828, 1073741834, 1073741836, 1073741837, 1073741839, 1073741840, 1073741842, 1075838996, 1073741846, 1073741849, 1073741851, 1073741852, 1073741854, 1073741860, 1073741866, 1073741868, 1073741874, 1073741875, 1073741876, 1094713350, 1073741878, 1073741879, 1073741880, 1073741886, 1275068934, 1073741888, 1073741890, 1073741892, 1073741896, 1073741900, 1073741902, 1275068425, 1073741905, 1073741904, 1073741906, 1073741908, 1073741910, 1073741912, 1073741917, 1073741920, 1073741924, 1073741928, 1073741929, 603979835, 1073741931, 1073741932, 1073741933, 1073741934, 1073741935, 266256, 1073741937, 1073741940, 1073741942, 12293, -1, 1073741948, 1073741950, 1073741952, 1073741956, 1073741961, 1073741962, 1073741966, 1073741968, 1073741970, 603979856, 1073741973, 1073741976, 1073741977, 1073741978, 1073741981, 1073741985, 1073741986, 134217763, -1, 1073741988, 1073741994, 1073741998, 1073742000, 1073741999, 1073742002, 1073742004, 1073742006, 1073742008, 4124, 1073742010, 4125, -1, 1073742014, 1073742015, 1073742020, 1073742027, 1073742028, 1073742032, 1073742033, 1073742034, 1073742038, 1073742040, 1073742041, 1073742044, 1073742048, 1073742050, 1073742054, 1073742064, 1073742062, 1073742066, 1073742068, 1073742070, 1073742076, 1073741850, 1073742080, 1073742082, 1073742083, 1073742084, 1073742086, 1073742090, -1, 1073742092, -1, 1073742094, 1073742099, 1073742100, 1073742104, 1073742112, 1073742111, 1073742118, 1073742119, 1073742122, 1073742124, 1073742130, 1073742140, 1073742146, 1073742147, 1073742148, 1073742154, 1073742156, 1073742159, 1073742160, 1073742162, 1073742166, 1073742168, 1073742170, 1073742189, 1073742188, 1073742190, 1073742192, 1073742194, 1073742196, 1073742197, 536870914, 603979821, 553648137, 536870916, 536870917, 536870918, 537006096, -1, 1610612740, 1610612741, 536870930, 36870, 536875070, -1, 536870932, 545259521, 545259522, 545259524, 545259526, 545259528, 545259530, 545259532, 545259534, 1610612737, 545259536, -1, 1086324752, 1086324753, 545259538, 545259540, 545259542, 545259545, -1, 545259546, 545259547, 545259548, 545259543, 545259544, 545259549, 545259550, 545259552, 545259554, 545259555, 570425356, 545259556, 545259557, 545259559, 545259560, 1610612738, 545259562, 545259563, 545259564, 545259565, 545259566, 545259567, 545259568, 545259570, 545259569, 545259571, 545259572, 545259573, 545259574, 545259576, 553648158, 545259578, 545259580, 545259582, 545259584, 545259586, 570425345, -1, 570425346, -1, 570425348, 570425350, 570425352, 570425354, 570425355, 570425357, 570425359, 570425360, 570425361, 570425362, 570425363, 570425364, 570425365, 570425366, 570425367, 570425368, 570425371, 570425372, 570425373, 570425374, 570425376, 570425378, 570425380, 570425381, 570425382, 570425384, 1665140738, 570425388, 570425390, 570425392, 570425393, 570425394, 570425396, 570425398, 570425400, 570425402, 570425404, 570425406, 570425408, 1648361473, 603979972, 603979973, 553648185, 570425412, 570425414, 570425416, 553648130, -1, 553648132, 553648134, 553648136, 553648138, 553648140, 553648141, -1, 553648142, 553648143, 553648144, 553648145, 553648146, 553648147, 1073741995, 553648150, 553648151, 553648152, 553648153, 553648154, 553648155, 553648156, 553648157, 553648159, 553648160, 553648162, 553648164, 553648165, 553648166, 553648167, 553648168, 536870922, 553648170, 536870924, 553648172, 553648174, -1, 553648176, -1, 553648178, 553648180, 553648182, 553648184, 553648186, 553648188, 553648190, 603979778, 603979780, 603979781, 603979782, 603979783, 603979784, 603979785, 603979786, 603979788, 603979790, 603979792, 603979794, 603979796, 603979797, 603979798, 603979800, 603979802, 603979804, 603979806, 603979808, 603979809, 603979812, 603979814, 1677721602, -1, 603979816, 603979810, 570425347, 603979817, -1, 603979818, 603979819, 603979820, 603979811, 603979822, 603979823, 603979824, 603979825, 603979826, 603979827, 603979828, -1, 603979829, 603979830, 603979831, 603979832, 603979833, 603979834, 603979836, 603979837, 603979838, 603979839, 603979840, 603979841, 603979842, 603979844, 603979845, 603979846, 603979848, 603979850, 603979852, 603979853, 603979854, 1612709894, 603979858, 603979860, 603979862, 603979864, 1612709900, -1, 603979865, 603979866, 603979867, 603979868, 553648149, 603979869, 603979871, 603979872, 2097165, -1, 603979873, 603979874, 603979875, 603979876, 603979877, 603979878, 603979879, 1610612739, 603979880, 603979881, 603979882, 603979883, 603979884, 603979885, 603979886, 570425369, 570425370, 603979887, 603979888, 603979889, 603979890, 603979893, 603979894, 603979895, 603979896, 603979897, 603979898, 603979899, 4139, 603979900, 603979901, 603979902, 603979903, 603979904, 603979906, 603979908, 603979910, 603979914, 603979916, -1, 603979918, 603979920, 603979922, 603979924, 603979926, 603979927, 603979928, 603979930, 603979934, 603979936, 603979937, 603979939, 603979940, 603979942, 603979944, 1612709912, 603979948, 603979952, 603979954, 603979955, 603979956, 603979958, 603979960, 603979962, 603979964, 603979965, 603979966, 603979968, 536870928, 4165, 603979970, 603979971, 603979975, 603979976, 603979977, 603979978, 603979980, 603979982, 603979983, 603979984]);
if (sTokens.length != iTokens.length) {
$I$(2).error$S("sTokens.length (" + sTokens.length + ") != iTokens.length! (" + iTokens.length + ")" );
System.exit$I(1);
}n=sTokens.length;
for (var i=0; i < n; i++) {
sTok=sTokens[i];
lcase=sTok.toLowerCase$();
var t=iTokens[i];
tokenThis=tokenLast=(t == -1 ? tokenLast : C$.o$I$O(t, sTok));
if (C$.tokenMap.get$O(lcase) != null ) $I$(2).error$S("duplicate token definition:" + lcase);
C$.tokenMap.put$TK$TV(lcase, tokenThis);
}
sTokens=null;
iTokens=null;
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tok=0;
this.value=null;
this.intValue=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.intValue=2147483647;
}, 1);

Clazz.newMeth(C$, 't$I', function (tok) {
var token=Clazz.new_(C$);
token.tok=tok;
return token;
}, 1);

Clazz.newMeth(C$, 'tv$I$I$O', function (tok, intValue, value) {
var token=C$.t$I(tok);
token.intValue=intValue;
token.value=value;
return token;
}, 1);

Clazz.newMeth(C$, 'o$I$O', function (tok, value) {
var token=C$.t$I(tok);
token.value=value;
return token;
}, 1);

Clazz.newMeth(C$, 'n$I$I', function (tok, intValue) {
var token=C$.t$I(tok);
token.intValue=intValue;
return token;
}, 1);

Clazz.newMeth(C$, 'i$I', function (intValue) {
var token=C$.t$I(2);
token.intValue=intValue;
return token;
}, 1);

Clazz.newMeth(C$, 'tokAttr$I$I', function (a, b) {
return (a & b) == (b & b);
}, 1);

Clazz.newMeth(C$, 'tokAttrOr$I$I$I', function (a, b1, b2) {
return (a & b1) == (b1 & b1) || (a & b2) == (b2 & b2) ;
}, 1);

Clazz.newMeth(C$, 'getPrecedence$I', function (tokOperator) {
return ((tokOperator >> 4) & 15);
}, 1);

Clazz.newMeth(C$, 'getMaxMathParams$I', function (tokCommand) {
return ((tokCommand >> 9) & 3);
}, 1);

Clazz.newMeth(C$, 'addToken$S$org_jmol_script_T', function (ident, token) {
C$.tokenMap.put$TK$TV(ident, token);
}, 1);

Clazz.newMeth(C$, 'getTokenFromName$S', function (name) {
return C$.tokenMap.get$O(name);
}, 1);

Clazz.newMeth(C$, 'getTokFromName$S', function (name) {
var token=C$.getTokenFromName$S(name.toLowerCase$());
return (token == null  ? 0 : token.tok);
}, 1);

Clazz.newMeth(C$, 'nameOf$I', function (tok) {
for (var token, $token = C$.tokenMap.values$().iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
if (token.tok == tok) return "" + token.value;
}
return "0x" + Integer.toHexString$I(tok);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.toString2$();
});

Clazz.newMeth(C$, 'toString2$', function () {
return "Token[" + C$.astrType[this.tok < 16 ? this.tok : 16] + "(" + (this.tok % (512)) + "/0x" + Integer.toHexString$I(this.tok) + ")" + ((this.intValue == 2147483647) ? "" : " intValue=" + this.intValue + "(0x" + Integer.toHexString$I(this.intValue) + ")" ) + ((this.value == null ) ? "" : Clazz.instanceOf(this.value, "java.lang.String") ? " value=\"" + this.value + "\""  : " value=" + this.value) + "]" ;
});

Clazz.newMeth(C$, 'getCommandSet$S', function (strBegin) {
var cmds="";
var htSet=Clazz.new_($I$(1));
var nCmds=0;
var s=(strBegin == null  || strBegin.length$() == 0  ? null : strBegin.toLowerCase$());
var isMultiCharacter=(s != null  && s.length$() > 1 );
for (var entry, $entry = C$.tokenMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
var token=entry.getValue$();
if ((token.tok & 4096) != 0 && (s == null  || name.indexOf$S(s) == 0 )  && (isMultiCharacter || (token.value).equals$O(name) ) ) htSet.put$TK$TV(name, $I$(3).TRUE);
}
for (var entry, $entry = htSet.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
if (name.charAt$I(name.length$() - 1) != "s" || !htSet.containsKey$O(name.substring$I$I(0, name.length$() - 1)) ) cmds += (nCmds++ == 0 ? "" : ";") + name;
}
return cmds;
}, 1);

Clazz.newMeth(C$, 'getAtomPropertiesLike$S', function (type) {
type=type.toLowerCase$();
var v=Clazz.new_($I$(4));
var isAll=(type.length$() == 0);
for (var entry, $entry = C$.tokenMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
if (name.charAt$I(0) == "_") continue;
var token=entry.getValue$();
if (C$.tokAttr$I$I(token.tok, 1077936128) && (isAll || name.toLowerCase$().startsWith$S(type) ) ) {
if (isAll || !(token.value).toLowerCase$().startsWith$S(type) ) token=C$.o$I$O(token.tok, name);
v.addLast$TV(token);
}}
return (v.size$() == 0 ? null : v);
}, 1);

Clazz.newMeth(C$, 'getTokensLike$S', function (type) {
var attr=(type.equals$O("setparam") ? 536870912 : type.equals$O("misc") ? 1073741824 : type.equals$O("mathfunc") ? 134217728 : 4096);
var notattr=(attr == 536870912 ? 1610612736 : 0);
var v=Clazz.new_($I$(4));
for (var entry, $entry = C$.tokenMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
var token=entry.getValue$();
if (C$.tokAttr$I$I(token.tok, attr) && (notattr == 0 || !C$.tokAttr$I$I(token.tok, notattr) ) ) v.addLast$TV(name);
}
var a=v.toArray$TTA(Clazz.array(String, [v.size$()]));
$I$(5).sort$OA(a);
return a;
}, 1);

Clazz.newMeth(C$, 'getSettableTokFromString$S', function (s) {
var tok=C$.getTokFromName$S(s);
return (tok != 0 && C$.tokAttr$I$I(tok, 2048)  && !C$.tokAttr$I$I(tok, 1140850688)  ? tok : 0);
}, 1);

Clazz.newMeth(C$, 'completeCommand$java_util_Map$Z$Z$S$I', function (map, isSet, asCommand, str, n) {
if (map == null ) map=C$.tokenMap;
 else asCommand=false;
var v=Clazz.new_($I$(4));
str=str.toLowerCase$();
for (var name, $name = map.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (!name.startsWith$S(str)) continue;
var tok=C$.getTokFromName$S(name);
if (asCommand ? C$.tokAttr$I$I(tok, 4096) : isSet ? C$.tokAttr$I$I(tok, 536870912) && !C$.tokAttr$I$I(tok, 1610612736)  : true) v.addLast$TV(name);
}
return $I$(6).sortedItem$javajs_util_Lst$I(v, n);
}, 1);

Clazz.newMeth(C$, 'getParamType$I', function (tok) {
if (!C$.tokAttr$I$I(tok, 536870912)) return 0;
return tok & 662700032;
}, 1);

Clazz.newMeth(C$, 'getTokensType$java_util_Map$I', function (map, attr) {
for (var e, $e = C$.tokenMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var t=e.getValue$();
if (C$.tokAttr$I$I(t.tok, attr)) map.put$TK$TV(e.getKey$(), e.getValue$());
}
}, 1);

Clazz.newMeth(C$, 'isIDcmd$I', function (cmdtok) {
switch (cmdtok) {
case 135180:
case 135176:
case 135174:
case 135188:
case 134353926:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.jmol.script.T"))) return false;
var t=o;
if (this.tok == t.tok) return (t.intValue == this.intValue && (this.tok == 2 || t.value.equals$O(this.value) ) );
switch (this.tok) {
case 2:
return (t.tok == 3 && (t.value).floatValue$() == this.intValue  );
case 3:
return (t.tok == 2 && (this.value).floatValue$() == t.intValue  );
default:
return false;
}
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
