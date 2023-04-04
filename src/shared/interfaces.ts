export type {
	Combinaison,
	SubCombinaison,
	mode
}

interface Combinaison {
	[base: string]: SubCombinaison
}

interface SubCombinaison {
	translate: string;
	past_simple: string;
	past_participle: string;
}

type mode = 'base' | 'translate' | 'past_simple' | 'past_participle' | '';
