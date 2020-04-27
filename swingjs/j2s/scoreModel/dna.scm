ScoreMatrix DNA
#
# A DNA substitution matrix.
# This is an ad-hoc matrix which, in addition to penalising mutations between the common 
# nucleotides (ACGT), includes T/U equivalence in order to allow both DNA and/or RNA. 
# In addition, it encodes weak equivalence between R and Y with AG and CTU, respectively, 
# and N is allowed to match any other base weakly. 
# This matrix also includes I (Inosine) and X (Xanthine), but encodes them to weakly match
# any of (ACGTU), and unfavourably match each other.
#
# The first line declares a ScoreMatrix with the name DNA (shown in menus)
# Scores are not case sensitive, unless column(s) are provided for lower case characters
#
# Values may be integer or floating point, delimited by tab, space, comma or combinations
#
	 A	 C	 G	 T	 U	 I	 X	 R	 Y	 N	-
A	10	-8	-8	-8	-8	 1	 1	 1	-8	 1	1 
C	-8	10	-8	-8	-8	 1	 1	-8	 1	 1	1
G	-8	-8	10	-8	-8	 1	 1	 1	-8	 1	1
T	-8	-8	-8	10	10	 1	 1	-8	 1	 1	1
U	-8	-8	-8	10	10	 1	 1	-8	 1	 1	1
I	 1	 1	 1	 1	 1	10	 0	 0	 0	 1	1
X	 1	 1	 1	 1	 1	 0	10	 0	 0	 1	1
R	 1	-8	 1	-8	-8	 0	 0	10	-8	 1	1
Y	-8	 1	-8	 1	 1	 0	 0	-8	10	 1	1
N	 1	 1	 1	 1	 1	 1	 1	 1	 1	10	1
-	 1	 1	 1	 1	 1	 1	 1	 1	 1	 1	1
