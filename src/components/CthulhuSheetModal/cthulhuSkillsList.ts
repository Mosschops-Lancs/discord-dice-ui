const cthulhuSkillsList = [
	{ name: 'Accounting', id: 'accounting' },
	{ name: 'Anthropology', id: 'anthropology' },
	{ name: 'Appraise', id: 'appraise' },
	{ name: 'Archaeology', id: 'archaeology' },
	{ name: 'Art/Craft', id: 'art_craft' },
	{ name: 'Charm', id: 'charm' },
	{ name: 'Climb', id: 'climb' },
	{ name: 'Credit Rating', id: 'credit_rating' },
	{ name: 'Cthulhu Mythos', id: 'cthulhu_mythos' },
	{ name: 'Disguise', id: 'disguise' },
	{ name: 'Dodge', id: 'dodge' },
	{ name: 'Drive Auto', id: 'drive_auto' },
	{ name: 'Electrical Repair', id: 'electrical_repair' },
	{ name: 'Fast Talk', id: 'fast_talk' },
	{ name: 'Fighting (Brawl)', id: 'fighting_brawl' },
	{ name: 'Firearms (Handgun)', id: 'firearms_handgun' },
	{ name: 'Firearms (Rifle/Shotgun)', id: 'firearms_rifle_shotgun' },
	{ name: 'First Aid', id: 'first_aid' },
	{ name: 'Heavy Weapons', id: 'heavy_weapons' },
	{ name: 'History', id: 'history' },
	{ name: 'Intimidate', id: 'intimidate' },
	{ name: 'Jump', id: 'jump' },
	{ name: 'Language (Own)', id: 'language_own' },
	{ name: 'Law', id: 'law' },
	{ name: 'Library Use', id: 'library_use' },
	{ name: 'Listen', id: 'listen' },
	{ name: 'Locksmith', id: 'locksmith' },
	{ name: 'Mechanical Repair', id: 'mechanical_repair' },
	{ name: 'Medicine', id: 'medicine' },
	{ name: 'Natural World', id: 'natural_world' },
	{ name: 'Navigate', id: 'navigate' },
	{ name: 'Occult', id: 'occult' },
	{ name: 'Op. Heavy Machinery', id: 'operate_heavy_machinery' },
	{ name: 'Persuade', id: 'persuade' },
	{ name: 'Pilot', id: 'pilot' },
	{ name: 'Psychology', id: 'psychology' },
	{ name: 'Psychoanalysis', id: 'psychoanalysis' },
	{ name: 'Ride', id: 'ride' },
	{ name: 'Science', id: 'science' },
	{ name: 'Sleight of Hand', id: 'sleight_of_hand' },
	{ name: 'Spot Hidden', id: 'spot_hidden' },
	{ name: 'Stealth', id: 'stealth' },
	{ name: 'Swim', id: 'swim' },
	{ name: 'Throw', id: 'throw' },
	{ name: 'Track', id: 'track' },
];

export interface SkillType {
	name: string;
	id: string;
}

export function getSkillById(id: string) {
	return cthulhuSkillsList.find((item) => item.id === id);
}

export default cthulhuSkillsList;
