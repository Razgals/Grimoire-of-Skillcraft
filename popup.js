// Level experience chart
const levelXP = [
  0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, // Levels 1-10
  1358, 1584, 1833, 2107, 2411, 2746, 3115, 3523, 3973, 4470, // Levels 11-20
  5018, 5624, 6291, 7028, 7842, 8740, 9730, 10824, 12031, 13363, // Levels 21-30
  14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408, 33648, 37224, // Levels 31-40
  41171, 45529, 50339, 55649, 61512, 67983, 75127, 82951, 91571, 101032, // Levels 41-50
  111945, 123660, 135594, 150872, 166636, 184040, 203254, 224466, 247886, 273742, // Levels 51-60
  302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032, 668051, 737627, // Levels 61-70
  814445, 899257, 992795, 1096278, 1210421, 1336443, 1475581, 1629200, 1798808, 1986068, // Levels 71-80
  2192818, 2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385576, 4842295, 5346322, // Levels 81-90
  5902831, 6517253, 7195629, 7944614, 8771558, 9684577, 10692629, 11805606, 13034431 // Levels 91-99
];

// Skill actions/items data
const skillsData = {
  woodcutting: [
    { name: "Regular Tree", xp: 25, levelRequired: 1 },
    { name: "Oak", xp: 37.5, levelRequired: 15 },
    { name: "Willow", xp: 67.5, levelRequired: 30 },
    { name: "Maple", xp: 100, levelRequired: 45 },
    { name: "Hollow", xp: 82.5, levelRequired: 45 },
    { name: "Yew", xp: 175, levelRequired: 60 },
    { name: "Magic", xp: 250, levelRequired: 75 }
  ],
  thievingPickpocketing: [
    { name: "Man or Woman", xp: 8, levelRequired: 1 },
    { name: "Farmer", xp: 14.5, levelRequired: 10 },
    { name: "Digsite Workman", xp: 10.6, levelRequired: 25 },
    { name: "Warrior", xp: 26, levelRequired: 25 },
    { name: "Rogue", xp: 35.5, levelRequired: 32 },
    { name: "Guard", xp: 46.75, levelRequired: 40 },
    { name: "Fremennik", xp: 65, levelRequired: 45 },
    { name: "Knight", xp: 84.5, levelRequired: 55 },
    { name: "Watchman", xp: 137.5, levelRequired: 65 },
    { name: "Paladin", xp: 152, levelRequired: 70 },
    { name: "Gnome", xp: 198, levelRequired: 75 },
    { name: "Hero", xp: 273.5, levelRequired: 80 }
  ],
  thievingStalls: [
    { name: "Baker's Stall", xp: 16, levelRequired: 5 },
    { name: "Tea Stall", xp: 16, levelRequired: 5 },
    { name: "Silk Stall", xp: 24, levelRequired: 20 },
    { name: "Fur Stall", xp: 36, levelRequired: 35 },
    { name: "Fish Stall", xp: 42, levelRequired: 42 },
    { name: "Silver Stall", xp: 54, levelRequired: 50 },
    { name: "Spice Stall", xp: 81, levelRequired: 65 },
    { name: "Gem Stall", xp: 16, levelRequired: 75 }
  ],
  smithingBronze: [
    { name: "Dagger", xp: 12.5, levelRequired: 1, bars: 1 },
    { name: "Axe", xp: 12.5, levelRequired: 1, bars: 1 },
    { name: "Medium Helmet", xp: 12.5, levelRequired: 3, bars: 1 },
    { name: "Bronze Wire", xp: 12.5, levelRequired: 4, bars: 1 },
    { name: "10 Dart Tips", xp: 12.5, levelRequired: 4, bars: 1 },
    { name: "Scimitar", xp: 25, levelRequired: 5, bars: 2 },
    { name: "Long Sword", xp: 25, levelRequired: 6, bars: 2 },
    { name: "Full Helmet", xp: 25, levelRequired: 7, bars: 2 }, /* Fixed typo "Komisji" to 25 */
    { name: "5 Throwing Knives", xp: 12.5, levelRequired: 7, bars: 1 },
    { name: "Square Shield", xp: 25, levelRequired: 8, bars: 2 },
    { name: "Warhammer", xp: 37.5, levelRequired: 9, bars: 3 },
    { name: "Battle Axe", xp: 37.5, levelRequired: 10, bars: 3 },
    { name: "Chain Body", xp: 37.5, levelRequired: 11, bars: 3 },
    { name: "Kite Shield", xp: 37.5, levelRequired: 12, bars: 3 },
    { name: "2-Handed Sword", xp: 37.5, levelRequired: 14, bars: 3 },
    { name: "Plate Skirt", xp: 37.5, levelRequired: 16, bars: 3 },
    { name: "Plate Legs", xp: 37.5, levelRequired: 16, bars: 3 },
    { name: "Plate Body", xp: 62.5, levelRequired: 18, bars: 5 }
  ],
  smithingIron: [
    { name: "Dagger", xp: 25, levelRequired: 15, bars: 1 },
    { name: "Axe", xp: 25, levelRequired: 16, bars: 1 },
    { name: "Medium Helmet", xp: 25, levelRequired: 18, bars: 1 },
    { name: "Sword", xp: 25, levelRequired: 19, bars: 1 },
    { name: "10 Dart Tips", xp: 25, levelRequired: 19, bars: 1 },
    { name: "Scimitar", xp: 50, levelRequired: 20, bars: 2 },
    { name: "Long Sword", xp: 50, levelRequired: 21, bars: 2 },
    { name: "Full Helmet", xp: 50, levelRequired: 22, bars: 2 },
    { name: "5 Throwing Knives", xp: 25, levelRequired: 22, bars: 1 },
    { name: "Square Shield", xp: 50, levelRequired: 23, bars: 2 },
    { name: "Warhammer", xp: 75, levelRequired: 24, bars: 3 },
    { name: "Battle Axe", xp: 75, levelRequired: 25, bars: 3 },
    { name: "Chain Body", xp: 75, levelRequired: 26, bars: 3 },
    { name: "Kite Shield", xp: 75, levelRequired: 27, bars: 3 },
    { name: "2-Handed Sword", xp: 75, levelRequired: 29, bars: 3 },
    { name: "Plate Skirt", xp: 75, levelRequired: 31, bars: 3 },
    { name: "Plate Legs", xp: 75, levelRequired: 31, bars: 3 },
    { name: "Plate Body", xp: 125, levelRequired: 33, bars: 5 }
  ],
  smithingSteel: [
    { name: "Dagger", xp: 37.5, levelRequired: 30, bars: 1 },
    { name: "Axe", xp: 37.5, levelRequired: 31, bars: 1 },
    { name: "Medium Helmet", xp: 37.5, levelRequired: 33, bars: 1 },
    { name: "Sword", xp: 37.5, levelRequired: 34, bars: 1 },
    { name: "10 Dart Tips", xp: 37.5, levelRequired: 34, bars: 1 },
    { name: "Scimitar", xp: 75, levelRequired: 35, bars: 2 },
    { name: "Long Sword", xp: 75, levelRequired: 36, bars: 2 },
    { name: "Full Helmet", xp: 75, levelRequired: 37, bars: 2 },
    { name: "5 Throwing Knives", xp: 37.5, levelRequired: 37, bars: 1 },
    { name: "Square Shield", xp: 75, levelRequired: 38, bars: 2 },
    { name: "Warhammer", xp: 112.5, levelRequired: 39, bars: 3 },
    { name: "Battle Axe", xp: 112.5, levelRequired: 40, bars: 3 },
    { name: "Chain Body", xp: 112.5, levelRequired: 41, bars: 3 },
    { name: "Kite Shield", xp: 112.5, levelRequired: 42, bars: 3 },
    { name: "2-Handed Sword", xp: 112.5, levelRequired: 44, bars: 3 },
    { name: "Plate Skirt", xp: 112.5, levelRequired: 46, bars: 3 },
    { name: "Plate Legs", xp: 112.5, levelRequired: 46, bars: 3 },
    { name: "Plate Body", xp: 187.5, levelRequired: 48, bars: 5 }
  ],
  smithingMithril: [
    { name: "Dagger", xp: 50, levelRequired: 50, bars: 1 },
    { name: "Axe", xp: 50, levelRequired: 51, bars: 1 },
    { name: "Medium Helmet", xp: 50, levelRequired: 53, bars: 1 },
    { name: "Sword", xp: 50, levelRequired: 54, bars: 1 },
    { name: "10 Dart Tips", xp: 50, levelRequired: 54, bars: 1 },
    { name: "Scimitar", xp: 100, levelRequired: 55, bars: 2 },
    { name: "Long Sword", xp: 100, levelRequired: 56, bars: 2 },
    { name: "Full Helmet", xp: 100, levelRequired: 57, bars: 2 },
    { name: "5 Throwing Knives", xp: 50, levelRequired: 57, bars: 1 },
    { name: "Square Shield", xp: 100, levelRequired: 58, bars: 2 },
    { name: "Warhammer", xp: 150, levelRequired: 59, bars: 3 },
    { name: "Battle Axe", xp: 150, levelRequired: 60, bars: 3 },
    { name: "Chain Body", xp: 150, levelRequired: 61, bars: 3 },
    { name: "Kite Shield", xp: 150, levelRequired: 62, bars: 3 },
    { name: "2-Handed Sword", xp: 150, levelRequired: 64, bars: 3 },
    { name: "Plate Skirt", xp: 150, levelRequired: 66, bars: 3 },
    { name: "Plate Legs", xp: 150, levelRequired: 66, bars: 3 },
    { name: "Plate Body", xp: 250, levelRequired: 68, bars: 5 }
  ],
  smithingAdamantite: [
    { name: "Dagger", xp: 62.5, levelRequired: 70, bars: 1 },
    { name: "Axe", xp: 62.5, levelRequired: 71, bars: 1 },
    { name: "Medium Helmet", xp: 62.5, levelRequired: 73, bars: 1 },
    { name: "Sword", xp: 62.5, levelRequired: 74, bars: 1 },
    { name: "10 Dart Tips", xp: 62.5, levelRequired: 74, bars: 1 },
    { name: "Scimitar", xp: 125, levelRequired: 75, bars: 2 },
    { name: "Long Sword", xp: 125, levelRequired: 76, bars: 2 },
    { name: "Full Helmet", xp: 125, levelRequired: 77, bars: 2 },
    { name: "5 Throwing Knives", xp: 62.5, levelRequired: 77, bars: 1 },
    { name: "Square Shield", xp: 125, levelRequired: 78, bars: 2 },
    { name: "Warhammer", xp: 187.5, levelRequired: 79, bars: 3 },
    { name: "Battle Axe", xp: 187.5, levelRequired: 80, bars: 3 },
    { name: "Chain Body", xp: 187.5, levelRequired: 81, bars: 3 },
    { name: "Kite Shield", xp: 187.5, levelRequired: 82, bars: 3 },
    { name: "2-Handed Sword", xp: 187.5, levelRequired: 84, bars: 3 },
    { name: "Plate Skirt", xp: 187.5, levelRequired: 86, bars: 3 },
    { name: "Plate Legs", xp: 187.5, levelRequired: 86, bars: 3 },
    { name: "Plate Body", xp: 312.5, levelRequired: 88, bars: 5 }
  ],
  smithingRune: [
    { name: "Dagger", xp: 75, levelRequired: 85, bars: 1 },
    { name: "Axe", xp: 75, levelRequired: 86, bars: 1 },
    { name: "Medium Helmet", xp: 75, levelRequired: 88, bars: 1 },
    { name: "Sword", xp: 75, levelRequired: 89, bars: 1 },
    { name: "10 Dart Tips", xp: 75, levelRequired: 89, bars: 1 },
    { name: "Scimitar", xp: 150, levelRequired: 90, bars: 2 },
    { name: "Long Sword", xp: 150, levelRequired: 91, bars: 2 },
    { name: "Full Helmet", xp: 150, levelRequired: 92, bars: 2 },
    { name: "5 Throwing Knives", xp: 75, levelRequired: 92, bars: 1 },
    { name: "Square Shield", xp: 150, levelRequired: 93, bars: 2 },
    { name: "Warhammer", xp: 225, levelRequired: 94, bars: 3 },
    { name: "Battle Axe", xp: 225, levelRequired: 95, bars: 3 },
    { name: "Chain Body", xp: 225, levelRequired: 96, bars: 3 },
    { name: "Kite Shield", xp: 225, levelRequired: 97, bars: 3 },
    { name: "2-Handed Sword", xp: 225, levelRequired: 99, bars: 3 },
    { name: "Plate Skirt", xp: 225, levelRequired: 99, bars: 3 },
    { name: "Plate Legs", xp: 225, levelRequired: 99, bars: 3 },
    { name: "Plate Body", xp: 375, levelRequired: 99, bars: 5 }
  ],
  smelting: [
    { name: "Bronze Bar", xp: 6.25, levelRequired: 1 },
    { name: "Iron Bar", xp: 12.5, levelRequired: 15 },
    { name: "Silver Bar", xp: 13.75, levelRequired: 20 },
    { name: "Steel Bar", xp: 17.5, levelRequired: 30 },
    { name: "Gold Bar", xp: 22.5, levelRequired: 40 },
    { name: "Mithril Bar", xp: 30, levelRequired: 50 },
    { name: "Adamantite Bar", xp: 37.5, levelRequired: 70 },
    { name: "Rune Bar", xp: 50, levelRequired: 85 }
  ],
  prayer: [
    { name: "Wolf Bones", xp: 4.4, levelRequired: 1 },
    { name: "Bones", xp: 4.5, levelRequired: 1 },
    { name: "Bat Bones", xp: 5.25, levelRequired: 1 },
    { name: "Big Bones", xp: 15, levelRequired: 1 },
    { name: "Baby Dragon Bones", xp: 30, levelRequired: 1 },
    { name: "Dragon Bones", xp: 72, levelRequired: 1 }
  ],
  mining: [
    { name: "Clay", xp: 5, levelRequired: 1 },
    { name: "Copper", xp: 17.5, levelRequired: 1 },
    { name: "Tin", xp: 17.5, levelRequired: 1 },
    { name: "Blurite", xp: 17, levelRequired: 10 },
    { name: "Iron", xp: 35, levelRequired: 15 },
    { name: "Silver", xp: 40, levelRequired: 20 },
    { name: "Coal", xp: 50, levelRequired: 30 },
    { name: "Gold", xp: 65, levelRequired: 40 },
    { name: "Mithril", xp: 80, levelRequired: 55 },
    { name: "Adamantite", xp: 95, levelRequired: 70 },
    { name: "Rune", xp: 125, levelRequired: 85 }
  ],
  herbloreCleaning: [
    { name: "Guam Leaf", xp: 2.5, levelRequired: 3 },
    { name: "Marrentill", xp: 3.75, levelRequired: 5 },
    { name: "Tarromin", xp: 5, levelRequired: 10 },
    { name: "Harralander", xp: 6, levelRequired: 20 },
    { name: "Ranarr Weed", xp: 8, levelRequired: 25 },
    { name: "Irit Leaf", xp: 8.8, levelRequired: 40 },
    { name: "Avantoe", xp: 10, levelRequired: 48 },
    { name: "Kwuarm", xp: 11.25, levelRequired: 54 },
    { name: "Cadantine", xp: 12.5, levelRequired: 65 },
    { name: "Lantadyme", xp: 13, levelRequired: 67 },
    { name: "Dwarf Weed", xp: 13.75, levelRequired: 70 },
    { name: "Torstol", xp: 15, levelRequired: 76 }
  ],
  herblorePotions: [
    { name: "Attack Potion", xp: 25, levelRequired: 3 },
    { name: "Anti-Poison", xp: 37.5, levelRequired: 5 },
    { name: "Strength Potion", xp: 50, levelRequired: 12 },
    { name: "Stat Restore", xp: 62.5, levelRequired: 22 },
    { name: "Energy Potion", xp: 67.5, levelRequired: 26 },
    { name: "Defense Potion", xp: 75, levelRequired: 30 },
    { name: "Agility Potion", xp: 80, levelRequired: 34 },
    { name: "Restore Potion", xp: 87.5, levelRequired: 38 },
    { name: "Super Attack", xp: 100, levelRequired: 45 },
    { name: "Super Anti-Poison", xp: 107.5, levelRequired: 48 },
    { name: "Fishing Potion", xp: 111.5, levelRequired: 50 },
    { name: "Super Energy", xp: 116, levelRequired: 52 },
    { name: "Super Strength", xp: 125, levelRequired: 55 },
    { name: "Weapon Poison", xp: 137.5, levelRequired: 60 },
    { name: "Super Restore", xp: 142, levelRequired: 63 },
    { name: "Super Defense", xp: 150, levelRequired: 66 },
    { name: "Anti-Firebreath", xp: 158, levelRequired: 69 },
    { name: "Ranging Potion", xp: 166, levelRequired: 72 },
    { name: "Magic Potion", xp: 172.5, levelRequired: 76 },
    { name: "Zamorak Potion", xp: 175, levelRequired: 78 }
  ],
  fletchingArrows: [
    { name: "Bronze Arrows", xp: 39.5, levelRequired: 1 },
    { name: "Iron Arrows", xp: 57.5, levelRequired: 15 },
    { name: "Steel Arrows", xp: 95, levelRequired: 30 },
    { name: "Mithril Arrows", xp: 132.5, levelRequired: 45 },
    { name: "Adamantite Arrows", xp: 163, levelRequired: 60 },
    { name: "Rune Arrows", xp: 225, levelRequired: 75 }
  ],
  fletchingBows: [
    { name: "Short Bow", xp: 10, levelRequired: 5 },
    { name: "Long Bow", xp: 20, levelRequired: 10 },
    { name: "Oak Short Bow", xp: 33.5, levelRequired: 20 },
    { name: "Oak Long Bow", xp: 50, levelRequired: 25 },
    { name: "Willow Short Bow", xp: 66.5, levelRequired: 35 },
    { name: "Willow Long Bow", xp: 83, levelRequired: 40 },
    { name: "Maple Short Bow", xp: 100, levelRequired: 50 },
    { name: "Maple Long Bow", xp: 116.5, levelRequired: 55 },
    { name: "Yew Short Bow", xp: 133, levelRequired: 65 },
    { name: "Yew Long Bow", xp: 150, levelRequired: 70 },
    { name: "Magic Short Bow", xp: 166.5, levelRequired: 80 },
    { name: "Magic Long Bow", xp: 183, levelRequired: 85 }
  ],
  fletchingDarts: [
    { name: "Bronze Darts", xp: 18, levelRequired: 1 },
    { name: "Iron Darts", xp: 32, levelRequired: 22 },
    { name: "Steel Darts", xp: 75, levelRequired: 37 },
    { name: "Mithril Darts", xp: 112, levelRequired: 52 },
    { name: "Adamantite Darts", xp: 150, levelRequired: 67 },
    { name: "Rune Darts", xp: 188, levelRequired: 81 }
  ],
  fletchingBolts: [
    { name: "Opal Bolts", xp: 6, levelRequired: 17 },
    { name: "Pearl Bolts", xp: 12.5, levelRequired: 34 },
    { name: "Barbed Bolts", xp: 95, levelRequired: 51 }
  ],
  fishing: [
    { name: "Shrimp", xp: 10, levelRequired: 1 },
    { name: "Karambwanji", xp: 10, levelRequired: 5 },
    { name: "Sardine", xp: 20, levelRequired: 5 },
    { name: "Herring", xp: 30, levelRequired: 10 },
    { name: "Anchovies", xp: 40, levelRequired: 15 },
    { name: "Mackerel", xp: 20, levelRequired: 16 },
    { name: "Trout", xp: 50, levelRequired: 20 },
    { name: "Cod", xp: 45, levelRequired: 23 },
    { name: "Pike", xp: 60, levelRequired: 25 },
    { name: "Slimy Eel", xp: 65, levelRequired: 28 },
    { name: "Salmon", xp: 70, levelRequired: 30 },
    { name: "Tuna", xp: 80, levelRequired: 35 },
    { name: "Lobster", xp: 90, levelRequired: 40 },
    { name: "Bass", xp: 100, levelRequired: 46 },
    { name: "Swordfish", xp: 100, levelRequired: 50 },
    { name: "Lava Eel", xp: 60, levelRequired: 53 },
    { name: "Karambwan", xp: 105, levelRequired: 65 },
    { name: "Shark", xp: 110, levelRequired: 76 },
    { name: "Sea Turtle", xp: 105, levelRequired: 78 },
    { name: "Manta Ray", xp: 115, levelRequired: 80 }
  ],
  firemaking: [
    { name: "Regular Logs", xp: 40, levelRequired: 1 },
    { name: "Oak Logs", xp: 60, levelRequired: 15 },
    { name: "Willow Logs", xp: 90, levelRequired: 30 },
    { name: "Maple Logs", xp: 135, levelRequired: 45 },
    { name: "Yew Logs", xp: 202.5, levelRequired: 60 },
    { name: "Magic Logs", xp: 303.75, levelRequired: 75 }
  ],
  craftingPottery: [
    { name: "Pot", xp: 13, levelRequired: 1 },
    { name: "Pie Dish", xp: 25, levelRequired: 7 },
    { name: "Bowl", xp: 33, levelRequired: 8 }
  ],
  craftingLeather: [
    { name: "Gloves", xp: 13.5, levelRequired: 1 },
    { name: "Boots", xp: 16.25, levelRequired: 7 },
    { name: "Cowl", xp: 18.5, levelRequired: 9 },
    { name: "Vambraces", xp: 22, levelRequired: 11 },
    { name: "Leather Body", xp: 25, levelRequired: 14 },
    { name: "Chaps", xp: 27, levelRequired: 18 },
    { name: "Hard Leather Body", xp: 35, levelRequired: 28 },
    { name: "Coif", xp: 37, levelRequired: 38 },
    { name: "Studded Leather Body", xp: 65, levelRequired: 41 },
    { name: "Studded Leather Chaps", xp: 69, levelRequired: 44 }
  ],
  craftingGems: [
    { name: "Opal", xp: 0, levelRequired: 1 }, // Placeholder XP
    { name: "Jade", xp: 0, levelRequired: 13 }, // Placeholder XP
    { name: "Red Topaz", xp: 0, levelRequired: 16 }, // Placeholder XP
    { name: "Sapphire", xp: 50, levelRequired: 20 },
    { name: "Emerald", xp: 67.5, levelRequired: 27 },
    { name: "Ruby", xp: 85, levelRequired: 34 },
    { name: "Diamond", xp: 107.5, levelRequired: 43 },
    { name: "Dragonstone", xp: 127.5, levelRequired: 55 }
  ],
  craftingRings: [
    { name: "Gold Ring", xp: 15, levelRequired: 5 },
    { name: "Sapphire Ring", xp: 40, levelRequired: 20 },
    { name: "Emerald Ring", xp: 55, levelRequired: 27 },
    { name: "Ruby Ring", xp: 70, levelRequired: 34 },
    { name: "Diamond Ring", xp: 85, levelRequired: 43 },
    { name: "Dragonstone Ring", xp: 0, levelRequired: 55 } // Placeholder XP
  ],
  craftingNecklaces: [
    { name: "Gold Necklace", xp: 20, levelRequired: 8 },
    { name: "Sapphire Necklace", xp: 50, levelRequired: 22 },
    { name: "Emerald Necklace", xp: 60, levelRequired: 29 },
    { name: "Ruby Necklace", xp: 75, levelRequired: 40 },
    { name: "Diamond Necklace", xp: 90, levelRequired: 56 },
    { name: "Dragonstone Necklace", xp: 0, levelRequired: 72 } // Placeholder XP
  ],
  craftingAmulets: [
    { name: "Gold Amulet", xp: 30, levelRequired: 8 },
    { name: "Sapphire Amulet", xp: 65, levelRequired: 24 },
    { name: "Emerald Amulet", xp: 70, levelRequired: 31 },
    { name: "Ruby Amulet", xp: 85, levelRequired: 50 },
    { name: "Diamond Amulet", xp: 100, levelRequired: 70 },
    { name: "Dragonstone Amulet", xp: 150, levelRequired: 80 }
  ],
  craftingSilver: [
    { name: "Holy Symbol", xp: 50, levelRequired: 16 },
    { name: "Unholy Symbol", xp: 50, levelRequired: 17 },
    { name: "Silver Sickle", xp: 50, levelRequired: 18 }
  ],
  cooking: [
    { name: "Meat", xp: 30, levelRequired: 1 },
    { name: "Shrimps", xp: 30, levelRequired: 1 },
    { name: "Karambwanji", xp: 30, levelRequired: 1 },
    { name: "Ugthanki Meat", xp: 40, levelRequired: 1 },
    { name: "Bread", xp: 40, levelRequired: 1 },
    { name: "Sardine", xp: 40, levelRequired: 1 },
    { name: "Herring", xp: 50, levelRequired: 5 },
    { name: "Redberry Pie", xp: 78, levelRequired: 10 },
    { name: "Mackerel", xp: 60, levelRequired: 10 },
    { name: "Thin Snail", xp: 65, levelRequired: 12 },
    { name: "Trout", xp: 70, levelRequired: 15 },
    { name: "Anchovies", xp: 30, levelRequired: 15 },
    { name: "Lean Snail", xp: 75, levelRequired: 17 },
    { name: "Cod", xp: 75, levelRequired: 18 },
    { name: "Meat Pie", xp: 104, levelRequired: 20 },
    { name: "Fat Snail", xp: 85, levelRequired: 22 },
    { name: "Pike", xp: 80, levelRequired: 20 },
    { name: "Stew", xp: 117, levelRequired: 25 },
    { name: "Salmon", xp: 90, levelRequired: 25 },
    { name: "Slimy Eel", xp: 95, levelRequired: 28 },
    { name: "Chompy Bird", xp: 100, levelRequired: 30 },
    { name: "Apple Pie", xp: 130, levelRequired: 30 },
    { name: "Tuna", xp: 100, levelRequired: 30 },
    { name: "Pizza", xp: 143, levelRequired: 35 },
    { name: "Wine", xp: 110, levelRequired: 35 },
    { name: "Cake", xp: 180, levelRequired: 40 },
    { name: "Lobster", xp: 120, levelRequired: 40 },
    { name: "Bass", xp: 130, levelRequired: 43 },
    { name: "Meat Pizza", xp: 169, levelRequired: 45 },
    { name: "Swordfish", xp: 140, levelRequired: 45 },
    { name: "Chocolate Cake", xp: 210, levelRequired: 50 },
    { name: "Lava Eel", xp: 140, levelRequired: 53 },
    { name: "Anchovy Pizza", xp: 182, levelRequired: 55 },
    { name: "Ugthanki Kebab", xp: 120, levelRequired: 58 },
    { name: "Curry", xp: 221, levelRequired: 60 },
    { name: "Karambwan", xp: 190, levelRequired: 60 },
    { name: "Pineapple Pizza", xp: 195, levelRequired: 65 },
    { name: "Shark", xp: 210, levelRequired: 80 },
    { name: "Sea Turtle", xp: 212, levelRequired: 82 },
    { name: "Manta Ray", xp: 216, levelRequired: 91 }
  ]
};

// Function to calculate the player's level based on XP
function calculateLevelFromXP(xp) {
  let level = 1;
  for (let i = 0; i < levelXP.length; i++) {
    if (xp >= levelXP[i]) {
      level = i + 1;
    } else {
      break;
    }
  }
  return Math.min(level, 99); // Cap at level 99
}

// Function to calculate XP needed between levels
function getXPGap(currentXP, desiredLevel) {
  if (desiredLevel > 99 || desiredLevel < 1) {
    return 0;
  }
  const currentLevel = calculateLevelFromXP(currentXP);
  if (desiredLevel <= currentLevel) {
    return 0;
  }
  return levelXP[desiredLevel - 1] - currentXP;
}

// Function to calculate actions needed
function calculateActionsNeeded(xpGap, actionXP) {
  return Math.ceil(xpGap / actionXP);
}

// Function to update the UI with results
function updateResults(skill, currentXP, desiredLevel) {
  const currentLevel = calculateLevelFromXP(currentXP);
  const xpGap = getXPGap(currentXP, desiredLevel);
  const xpNeededElement = document.getElementById("xpNeeded");
  const itemsBody = document.getElementById("itemsBody");
  const currentLevelDisplay = document.getElementById("currentLevelDisplay");

  // Update the current level display
  currentLevelDisplay.textContent = `Current Level: ${currentLevel} (based on ${currentXP.toLocaleString()} XP)`;

  if (xpGap <= 0) {
    xpNeededElement.textContent = "Invalid levels or no XP needed.";
    itemsBody.innerHTML = "";
    return;
  }

  xpNeededElement.textContent = `XP Needed: ${xpGap.toLocaleString()}`;
  itemsBody.innerHTML = "";

  const actions = skillsData[skill];
  actions.forEach(action => {
    const actionsNeeded = calculateActionsNeeded(xpGap, action.xp);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${action.name}</td>
      <td>${action.xp}</td>
      <td>${action.levelRequired}</td>
      <td>${actionsNeeded.toLocaleString()}</td>
    `;
    itemsBody.appendChild(row);
  });
}

// Event listener for the calculate button
document.getElementById("calculateButton").addEventListener("click", () => {
  const skill = document.getElementById("skillSelect").value;
  const currentXP = parseInt(document.getElementById("currentXP").value, 10);
  const desiredLevel = parseInt(document.getElementById("desiredLevel").value, 10);
  updateResults(skill, currentXP, desiredLevel);
});

// Initial calculation on page load
document.addEventListener("DOMContentLoaded", () => {
  const skill = document.getElementById("skillSelect").value;
  const currentXP = parseInt(document.getElementById("currentXP").value, 10);
  const desiredLevel = parseInt(document.getElementById("desiredLevel").value, 10);
  updateResults(skill, currentXP, desiredLevel);
});

// Update results when skill changes
document.getElementById("skillSelect").addEventListener("change", () => {
  const skill = document.getElementById("skillSelect").value;
  const currentXP = parseInt(document.getElementById("currentXP").value, 10);
  const desiredLevel = parseInt(document.getElementById("desiredLevel").value, 10);
  updateResults(skill, currentXP, desiredLevel);
});

// Update the current level display when XP changes
document.getElementById("currentXP").addEventListener("input", () => {
  const skill = document.getElementById("skillSelect").value;
  const currentXP = parseInt(document.getElementById("currentXP").value, 10);
  const desiredLevel = parseInt(document.getElementById("desiredLevel").value, 10);
  updateResults(skill, currentXP, desiredLevel);
});