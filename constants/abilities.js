const abilities = [
    {"name": "Stench", "url": "https://pokeapi.co/api/v2/ability/1/"}, {
        "name": "Drizzle",
        "url": "https://pokeapi.co/api/v2/ability/2/"
    }, {"name": "Speed boost", "url": "https://pokeapi.co/api/v2/ability/3/"}, {
        "name": "Battle armor",
        "url": 'https://pokeapi.co/api/v2/ability/4/'
    }, {"name": "Sturdy", "url": "https://pokeapi.co/api/v2/ability/5/"}, {
        "name": "Damp",
        "url": 'https://pokeapi.co/api/v2/ability/6/'
    }, {"name": "Limber", "url": "https://pokeapi.co/api/v2/ability/7/"}, {
        "name": "Sand veil",
        "url": "https://pokeapi.co/api/v2/ability/8/"
    }, {"name": "Static", "url": "https://pokeapi.co/api/v2/ability/9/"}, {
        "name": "Volt absorb",
        "url": "https://pokeapi.co/api/v2/ability/10/"
    }, {"name": "Water absorb", "url": "https://pokeapi.co/api/v2/ability/11/"}, {
        "name": "Oblivious",
        "url": "https://pokeapi.co/api/v2/ability/12/"
    }, {"name": "Cloud nine", "url": "https://pokeapi.co/api/v2/ability/13/"}, {
        "name": "Compound eyes",
        "url": "https://pokeapi.co/api/v2/ability/14/"
    }, {"name": "Insomnia", "url": "https://pokeapi.co/api/v2/ability/15/"}, {
        "name": "Color change",
        "url": "https://pokeapi.co/api/v2/ability/16/"
    }, {"name": "Immunity", "url": "https://pokeapi.co/api/v2/ability/17/"}, {
        "name": "Flash fire",
        "url": "https://pokeapi.co/api/v2/ability/18/"
    }, {"name": "Shield dust", "url": "https://pokeapi.co/api/v2/ability/19/"}, {
        "name": "Own tempo",
        "url": "https://pokeapi.co/api/v2/ability/20/"
    }, {"name": "Suction cups", "url": "https://pokeapi.co/api/v2/ability/21/"}, {
        "name": "Intimidate",
        "url": "https://pokeapi.co/api/v2/ability/22/"
    }, {"name": "Shadow tag", "url": "https://pokeapi.co/api/v2/ability/23/"}, {
        "name": "Rough skin",
        "url": "https://pokeapi.co/api/v2/ability/24/"
    }, {"name": "Wonder guard", "url": "https://pokeapi.co/api/v2/ability/25/"}, {
        "name": "Levitate",
        "url": "https://pokeapi.co/api/v2/ability/26/"
    }, {"name": "Effect spore", "url": "https://pokeapi.co/api/v2/ability/27/"}, {
        "name": "Synchronize",
        "url": "https://pokeapi.co/api/v2/ability/28/"
    }, {"name": "Clear body", "url": "https://pokeapi.co/api/v2/ability/29/"}, {
        "name": "Natural cure",
        "url": "https://pokeapi.co/api/v2/ability/30/"
    }, {"name": "Lightning rod", "url": "https://pokeapi.co/api/v2/ability/31/"}, {
        "name": "Serene grace",
        "url": "https://pokeapi.co/api/v2/ability/32/"
    }, {"name": "Swift swim", "url": "https://pokeapi.co/api/v2/ability/33/"}, {
        "name": "Chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
    }, {"name": "Illuminate", "url": "https://pokeapi.co/api/v2/ability/35/"}, {
        "name": "Trace",
        "url": "https://pokeapi.co/api/v2/ability/36/"
    }, {"name": "Huge power", "url": "https://pokeapi.co/api/v2/ability/37/"}, {
        "name": "Poison point",
        "url": "https://pokeapi.co/api/v2/ability/38/"
    }, {"name": "Inner focus", "url": "https://pokeapi.co/api/v2/ability/39/"}, {
        "name": "Magma armor",
        "url": "https://pokeapi.co/api/v2/ability/40/"
    }, {"name": "Water veil", "url": "https://pokeapi.co/api/v2/ability/41/"}, {
        "name": "Magnet pull",
        "url": "https://pokeapi.co/api/v2/ability/42/"
    }, {"name": "Soundproof", "url": "https://pokeapi.co/api/v2/ability/43/"}, {
        "name": "Rain dish",
        "url": "https://pokeapi.co/api/v2/ability/44/"
    }, {"name": "Sand stream", "url": "https://pokeapi.co/api/v2/ability/45/"}, {
        "name": "Pressure",
        "url": "https://pokeapi.co/api/v2/ability/46/"
    }, {"name": "Thick fat", "url": "https://pokeapi.co/api/v2/ability/47/"}, {
        "name": "Early bird",
        "url": "https://pokeapi.co/api/v2/ability/48/"
    }, {"name": "Flame body", "url": "https://pokeapi.co/api/v2/ability/49/"}, {
        "name": "Run away",
        "url": "https://pokeapi.co/api/v2/ability/50/"
    }, {"name": "Keen eye", "url": "https://pokeapi.co/api/v2/ability/51/"}, {
        "name": "Hyper cutter",
        "url": "https://pokeapi.co/api/v2/ability/52/"
    }, {"name": "Pickup", "url": "https://pokeapi.co/api/v2/ability/53/"}, {
        "name": "Truant",
        "url": "https://pokeapi.co/api/v2/ability/54/"
    }, {"name": "Hustle", "url": "https://pokeapi.co/api/v2/ability/55/"}, {
        "name": "Cute charm",
        "url": "https://pokeapi.co/api/v2/ability/56/"
    }, {"name": "Plus", "url": "https://pokeapi.co/api/v2/ability/57/"}, {
        "name": "Minus",
        "url": "https://pokeapi.co/api/v2/ability/58/"
    }, {"name": "Forecast", "url": "https://pokeapi.co/api/v2/ability/59/"}, {
        "name": "Sticky hold",
        "url": "https://pokeapi.co/api/v2/ability/60/"
    }, {"name": "Shed skin", "url": "https://pokeapi.co/api/v2/ability/61/"}, {
        "name": "Guts",
        "url": "https://pokeapi.co/api/v2/ability/62/"
    }, {"name": "Marvel scale", "url": "https://pokeapi.co/api/v2/ability/63/"}, {
        "name": "Liquid ooze",
        "url": "https://pokeapi.co/api/v2/ability/64/"
    }, {"name": "Overgrow", "url": "https://pokeapi.co/api/v2/ability/65/"}, {
        "name": "Blaze",
        "url": "https://pokeapi.co/api/v2/ability/66/"
    }, {"name": "Torrent", "url": "https://pokeapi.co/api/v2/ability/67/"}, {
        "name": "Swarm",
        "url": "https://pokeapi.co/api/v2/ability/68/"
    }, {"name": "Rock head", "url": "https://pokeapi.co/api/v2/ability/69/"}, {
        "name": "Drought",
        "url": "https://pokeapi.co/api/v2/ability/70/"
    }, {"name": "Arena trap", "url": "https://pokeapi.co/api/v2/ability/71/"}, {
        "name": "Vital spirit",
        "url": "https://pokeapi.co/api/v2/ability/72/"
    }, {"name": "White smoke", "url": "https://pokeapi.co/api/v2/ability/73/"}, {
        "name": "Pure power",
        "url": "https://pokeapi.co/api/v2/ability/74/"
    }, {"name": "Shell armor", "url": "https://pokeapi.co/api/v2/ability/75/"}, {
        "name": "Air lock",
        "url": "https://pokeapi.co/api/v2/ability/76/"
    }, {"name": "Tangled feet", "url": "https://pokeapi.co/api/v2/ability/77/"}, {
        "name": "Motor drive",
        "url": "https://pokeapi.co/api/v2/ability/78/"
    }, {"name": "Rivalry", "url": "https://pokeapi.co/api/v2/ability/79/"}, {
        "name": "Steadfast",
        "url": "https://pokeapi.co/api/v2/ability/80/"
    }, {"name": "Snow cloak", "url": "https://pokeapi.co/api/v2/ability/81/"}, {
        "name": "Gluttony",
        "url": "https://pokeapi.co/api/v2/ability/82/"
    }, {"name": "Anger point", "url": "https://pokeapi.co/api/v2/ability/83/"}, {
        "name": "Unburden",
        "url": "https://pokeapi.co/api/v2/ability/84/"
    }, {"name": "Heatproof", "url": "https://pokeapi.co/api/v2/ability/85/"}, {
        "name": "Simple",
        "url": "https://pokeapi.co/api/v2/ability/86/"
    }, {"name": "Dry skin", "url": "https://pokeapi.co/api/v2/ability/87/"}, {
        "name": "Download",
        "url": "https://pokeapi.co/api/v2/ability/88/"
    }, {"name": "Iron fist", "url": "https://pokeapi.co/api/v2/ability/89/"}, {
        "name": "Poison heal",
        "url": "https://pokeapi.co/api/v2/ability/90/"
    }, {"name": "Adaptability", "url": "https://pokeapi.co/api/v2/ability/91/"}, {
        "name": "Skill link",
        "url": "https://pokeapi.co/api/v2/ability/92/"
    }, {"name": "Hydration", "url": "https://pokeapi.co/api/v2/ability/93/"}, {
        "name": "Solar power",
        "url": "https://pokeapi.co/api/v2/ability/94/"
    }, {"name": "Quick feet", "url": "https://pokeapi.co/api/v2/ability/95/"}, {
        "name": "Normalize",
        "url": "https://pokeapi.co/api/v2/ability/96/"
    }, {"name": "Sniper", "url": "https://pokeapi.co/api/v2/ability/97/"}, {
        "name": "Magic guard",
        "url": "https://pokeapi.co/api/v2/ability/98/"
    }, {"name": "No guard", "url": "https://pokeapi.co/api/v2/ability/99/"}, {
        "name": "Stall",
        "url": "https://pokeapi.co/api/v2/ability/100/"
    }, {"name": "Technician", "url": "https://pokeapi.co/api/v2/ability/101/"}, {
        "name": "Leaf guard",
        "url": "https://pokeapi.co/api/v2/ability/102/"
    }, {"name": "Klutz", "url": "https://pokeapi.co/api/v2/ability/103/"}, {
        "name": "Mold breaker",
        "url": "https://pokeapi.co/api/v2/ability/104/"
    }, {"name": "Super luck", "url": "https://pokeapi.co/api/v2/ability/105/"}, {
        "name": "Aftermath",
        "url": "https://pokeapi.co/api/v2/ability/106/"
    }, {"name": "Anticipation", "url": "https://pokeapi.co/api/v2/ability/107/"}, {
        "name": "Forewarn",
        "url": "https://pokeapi.co/api/v2/ability/108/"
    }, {"name": "Unaware", "url": "https://pokeapi.co/api/v2/ability/109/"}, {
        "name": "Tinted lens",
        "url": "https://pokeapi.co/api/v2/ability/110/"
    }, {"name": "Filter", "url": "https://pokeapi.co/api/v2/ability/111/"}, {
        "name": "Slow start",
        "url": "https://pokeapi.co/api/v2/ability/112/"
    }, {"name": "Scrappy", "url": "https://pokeapi.co/api/v2/ability/113/"}, {
        "name": "Storm drain",
        "url": "https://pokeapi.co/api/v2/ability/114/"
    }, {"name": "Ice body", "url": "https://pokeapi.co/api/v2/ability/115/"}, {
        "name": "Solid rock",
        "url": "https://pokeapi.co/api/v2/ability/116/"
    }, {"name": "Snow warning", "url": "https://pokeapi.co/api/v2/ability/117/"}, {
        "name": "Honey gather",
        "url": "https://pokeapi.co/api/v2/ability/118/"
    }, {"name": "Frisk", "url": "https://pokeapi.co/api/v2/ability/119/"}, {
        "name": "Reckless",
        "url": "https://pokeapi.co/api/v2/ability/120/"
    }, {"name": "Multitype", "url": "https://pokeapi.co/api/v2/ability/121/"}, {
        "name": "Flower gift",
        "url": "https://pokeapi.co/api/v2/ability/122/"
    }, {"name": "Bad dreams", "url": "https://pokeapi.co/api/v2/ability/123/"}, {
        "name": "Pickpocket",
        "url": "https://pokeapi.co/api/v2/ability/124/"
    }, {"name": "Sheer force", "url": "https://pokeapi.co/api/v2/ability/125/"}, {
        "name": "Contrary",
        "url": "https://pokeapi.co/api/v2/ability/126/"
    }, {"name": "Unnerve", "url": "https://pokeapi.co/api/v2/ability/127/"}, {
        "name": "Defiant",
        "url": "https://pokeapi.co/api/v2/ability/128/"
    }, {"name": "Defeatist", "url": "https://pokeapi.co/api/v2/ability/129/"}, {
        "name": "Cursed body",
        "url": "https://pokeapi.co/api/v2/ability/130/"
    }, {"name": "Healer", "url": "https://pokeapi.co/api/v2/ability/131/"}, {
        "name": "Friend guard",
        "url": "https://pokeapi.co/api/v2/ability/132/"
    }, {"name": "Weak armor", "url": "https://pokeapi.co/api/v2/ability/133/"}, {
        "name": "Heavy metal",
        "url": "https://pokeapi.co/api/v2/ability/134/"
    }, {"name": "Light metal", "url": "https://pokeapi.co/api/v2/ability/135/"}, {
        "name": "Multiscale",
        "url": "https://pokeapi.co/api/v2/ability/136/"
    }, {"name": "Toxic boost", "url": "https://pokeapi.co/api/v2/ability/137/"}, {
        "name": "Flare boost",
        "url": "https://pokeapi.co/api/v2/ability/138/"
    }, {"name": "Harvest", "url": "https://pokeapi.co/api/v2/ability/139/"}, {
        "name": "Telepathy",
        "url": "https://pokeapi.co/api/v2/ability/140/"
    }, {"name": "Moody", "url": "https://pokeapi.co/api/v2/ability/141/"}, {
        "name": "Overcoat",
        "url": "https://pokeapi.co/api/v2/ability/142/"
    }, {"name": "Poison touch", "url": "https://pokeapi.co/api/v2/ability/143/"}, {
        "name": "Regenerator",
        "url": "https://pokeapi.co/api/v2/ability/144/"
    }, {"name": "Big pecks", "url": "https://pokeapi.co/api/v2/ability/145/"}, {
        "name": "Sand rush",
        "url": "https://pokeapi.co/api/v2/ability/146/"
    }, {"name": "Wonder skin", "url": "https://pokeapi.co/api/v2/ability/147/"}, {
        "name": "Analytic",
        "url": "https://pokeapi.co/api/v2/ability/148/"
    }, {"name": "Illusion", "url": "https://pokeapi.co/api/v2/ability/149/"}, {
        "name": "Imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
    }, {"name": "Infiltrator", "url": "https://pokeapi.co/api/v2/ability/151/"}, {
        "name": "Mummy",
        "url": "https://pokeapi.co/api/v2/ability/152/"
    }, {"name": "Moxie", "url": "https://pokeapi.co/api/v2/ability/153/"}, {
        "name": "Justified",
        "url": "https://pokeapi.co/api/v2/ability/154/"
    }, {"name": "Rattled", "url": "https://pokeapi.co/api/v2/ability/155/"}, {
        "name": "Magic bounce",
        "url": "https://pokeapi.co/api/v2/ability/156/"
    }, {"name": "Sap sipper", "url": "https://pokeapi.co/api/v2/ability/157/"}, {
        "name": "Prankster",
        "url": "https://pokeapi.co/api/v2/ability/158/"
    }, {"name": "Sand force", "url": "https://pokeapi.co/api/v2/ability/159/"}, {
        "name": "Iron barbs",
        "url": "https://pokeapi.co/api/v2/ability/160/"
    }, {"name": "Zen mode", "url": "https://pokeapi.co/api/v2/ability/161/"}, {
        "name": "Victory star",
        "url": "https://pokeapi.co/api/v2/ability/162/"
    }, {"name": "Turboblaze", "url": "https://pokeapi.co/api/v2/ability/163/"}, {
        "name": "Teravolt",
        "url": "https://pokeapi.co/api/v2/ability/164/"
    }, {"name": "Aroma veil", "url": "https://pokeapi.co/api/v2/ability/165/"}, {
        "name": "Flower veil",
        "url": "https://pokeapi.co/api/v2/ability/166/"
    }, {"name": "Cheek pouch", "url": "https://pokeapi.co/api/v2/ability/167/"}, {
        "name": "Protean",
        "url": "https://pokeapi.co/api/v2/ability/168/"
    }, {"name": "Fur coat", "url": "https://pokeapi.co/api/v2/ability/169/"}, {
        "name": "Magician",
        "url": "https://pokeapi.co/api/v2/ability/170/"
    }, {"name": "Bulletproof", "url": "https://pokeapi.co/api/v2/ability/171/"}, {
        "name": "Competitive",
        "url": "https://pokeapi.co/api/v2/ability/172/"
    }, {"name": "Strong jaw", "url": "https://pokeapi.co/api/v2/ability/173/"}, {
        "name": "Refrigerate",
        "url": "https://pokeapi.co/api/v2/ability/174/"
    }, {"name": "Sweet veil", "url": "https://pokeapi.co/api/v2/ability/175/"}, {
        "name": "Stance change",
        "url": "https://pokeapi.co/api/v2/ability/176/"
    }, {"name": "Gale wings", "url": "https://pokeapi.co/api/v2/ability/177/"}, {
        "name": "Mega launcher",
        "url": "https://pokeapi.co/api/v2/ability/178/"
    }, {"name": "Grass pelt", "url": "https://pokeapi.co/api/v2/ability/179/"}, {
        "name": "Symbiosis",
        "url": "https://pokeapi.co/api/v2/ability/180/"
    }, {"name": "Tough claws", "url": "https://pokeapi.co/api/v2/ability/181/"}, {
        "name": "Pixilate",
        "url": "https://pokeapi.co/api/v2/ability/182/"
    }, {"name": "Gooey", "url": "https://pokeapi.co/api/v2/ability/183/"}, {
        "name": "Aerilate",
        "url": "https://pokeapi.co/api/v2/ability/184/"
    }, {"name": "Parental bond", "url": "https://pokeapi.co/api/v2/ability/185/"}, {
        "name": "Dark aura",
        "url": "https://pokeapi.co/api/v2/ability/186/"
    }, {"name": "Fairy aura", "url": "https://pokeapi.co/api/v2/ability/187/"}, {
        "name": "Aura break",
        "url": "https://pokeapi.co/api/v2/ability/188/"
    }, {"name": "Primordial sea", "url": "https://pokeapi.co/api/v2/ability/189/"}, {
        "name": "Desolate land",
        "url": "https://pokeapi.co/api/v2/ability/190/"
    }, {"name": "Delta stream", "url": "https://pokeapi.co/api/v2/ability/191/"}, {
        "name": "Stamina",
        "url": "https://pokeapi.co/api/v2/ability/192/"
    }, {"name": "Wimp out", "url": "https://pokeapi.co/api/v2/ability/193/"}, {
        "name": "Emergency exit",
        "url": "https://pokeapi.co/api/v2/ability/194/"
    }, {"name": "Water compaction", "url": "https://pokeapi.co/api/v2/ability/195/"}, {
        "name": "Merciless",
        "url": "https://pokeapi.co/api/v2/ability/196/"
    }, {"name": "Shields down", "url": "https://pokeapi.co/api/v2/ability/197/"}, {
        "name": "Stakeout",
        "url": "https://pokeapi.co/api/v2/ability/198/"
    }, {"name": "Water bubble", "url": "https://pokeapi.co/api/v2/ability/199/"}, {
        "name": "Steelworker",
        "url": "https://pokeapi.co/api/v2/ability/200/"
    }, {"name": "Berserk", "url": "https://pokeapi.co/api/v2/ability/201/"}, {
        "name": "Slush rush",
        "url": "https://pokeapi.co/api/v2/ability/202/"
    }, {"name": "Long reach", "url": "https://pokeapi.co/api/v2/ability/203/"}, {
        "name": "Liquid voice",
        "url": "https://pokeapi.co/api/v2/ability/204/"
    }, {"name": "Triage", "url": "https://pokeapi.co/api/v2/ability/205/"}, {
        "name": "Galvanize",
        "url": "https://pokeapi.co/api/v2/ability/206/"
    }, {"name": "Surge surfer", "url": "https://pokeapi.co/api/v2/ability/207/"}, {
        "name": "Schooling",
        "url": "https://pokeapi.co/api/v2/ability/208/"
    }, {"name": "Disguise", "url": "https://pokeapi.co/api/v2/ability/209/"}, {
        "name": "Battle bond",
        "url": "https://pokeapi.co/api/v2/ability/210/"
    }, {"name": "Power construct", "url": "https://pokeapi.co/api/v2/ability/211/"}, {
        "name": "Corrosion",
        "url": "https://pokeapi.co/api/v2/ability/212/"
    }, {"name": "Comatose", "url": "https://pokeapi.co/api/v2/ability/213/"}, {
        "name": "Queenly majesty",
        "url": "https://pokeapi.co/api/v2/ability/214/"
    }, {"name": "Innards out", "url": "https://pokeapi.co/api/v2/ability/215/"}, {
        "name": "Dancer",
        "url": "https://pokeapi.co/api/v2/ability/216/"
    }, {"name": "Battery", "url": "https://pokeapi.co/api/v2/ability/217/"}, {
        "name": "Fluffy",
        "url": "https://pokeapi.co/api/v2/ability/218/"
    }, {"name": "Dazzling", "url": "https://pokeapi.co/api/v2/ability/219/"}, {
        "name": "Soul heart",
        "url": "https://pokeapi.co/api/v2/ability/220/"
    }, {"name": "Tangling hair", "url": "https://pokeapi.co/api/v2/ability/221/"}, {
        "name": "Receiver",
        "url": "https://pokeapi.co/api/v2/ability/222/"
    }, {"name": "Power of alchemy", "url": "https://pokeapi.co/api/v2/ability/223/"}, {
        "name": "Beast boost",
        "url": "https://pokeapi.co/api/v2/ability/224/"
    }, {"name": "Rks system", "url": "https://pokeapi.co/api/v2/ability/225/"}, {
        "name": "Electric surge",
        "url": "https://pokeapi.co/api/v2/ability/226/"
    }, {"name": "Psychic surge", "url": "https://pokeapi.co/api/v2/ability/227/"}, {
        "name": "Misty surge",
        "url": "https://pokeapi.co/api/v2/ability/228/"
    }, {"name": "Grassy surge", "url": "https://pokeapi.co/api/v2/ability/229/"}, {
        "name": "Full metal body",
        "url": "https://pokeapi.co/api/v2/ability/230/"
    }, {"name": "Shadow shield", "url": "https://pokeapi.co/api/v2/ability/231/"}, {
        "name": "Prism armor",
        "url": "https://pokeapi.co/api/v2/ability/232/"
    }, {"name": "Neuroforce", "url": "https://pokeapi.co/api/v2/ability/233/"}, {
        "name": "Intrepid sword",
        "url": "https://pokeapi.co/api/v2/ability/234/"
    }, {"name": "Dauntless shield", "url": "https://pokeapi.co/api/v2/ability/235/"}, {
        "name": "Libero",
        "url": "https://pokeapi.co/api/v2/ability/236/"
    }, {"name": "Ball fetch", "url": "https://pokeapi.co/api/v2/ability/237/"}, {
        "name": "Cotton down",
        "url": "https://pokeapi.co/api/v2/ability/238/"
    }, {"name": "Propeller tail", "url": "https://pokeapi.co/api/v2/ability/239/"}, {
        "name": "Mirror armor",
        "url": "https://pokeapi.co/api/v2/ability/240/"
    }, {"name": "Gulp missile", "url": "https://pokeapi.co/api/v2/ability/241/"}, {
        "name": "Stalwart",
        "url": "https://pokeapi.co/api/v2/ability/242/"
    }, {"name": "Steam engine", "url": "https://pokeapi.co/api/v2/ability/243/"}, {
        "name": "Punk rock",
        "url": "https://pokeapi.co/api/v2/ability/244/"
    }, {"name": "Sand spit", "url": "https://pokeapi.co/api/v2/ability/245/"}, {
        "name": "Ice scales",
        "url": "https://pokeapi.co/api/v2/ability/246/"
    }, {"name": "Ripen", "url": "https://pokeapi.co/api/v2/ability/247/"}, {
        "name": "Ice face",
        "url": "https://pokeapi.co/api/v2/ability/248/"
    }, {"name": "Power spot", "url": "https://pokeapi.co/api/v2/ability/249/"}, {
        "name": "Mimicry",
        "url": "https://pokeapi.co/api/v2/ability/250/"
    }, {"name": "Screen cleaner", "url": "https://pokeapi.co/api/v2/ability/251/"}, {
        "name": "Steely spirit",
        "url": "https://pokeapi.co/api/v2/ability/252/"
    }, {"name": "Perish body", "url": "https://pokeapi.co/api/v2/ability/253/"}, {
        "name": "Wandering spirit",
        "url": "https://pokeapi.co/api/v2/ability/254/"
    }, {"name": "Gorilla tactics", "url": "https://pokeapi.co/api/v2/ability/255/"}, {
        "name": "Neutralizing gas",
        "url": "https://pokeapi.co/api/v2/ability/256/"
    }, {"name": "Pastel veil", "url": "https://pokeapi.co/api/v2/ability/257/"}, {
        "name": "Hunger switch",
        "url": "https://pokeapi.co/api/v2/ability/258/"
    }, {"name": "Quick draw", "url": "https://pokeapi.co/api/v2/ability/259/"}, {
        "name": "Unseen fist",
        "url": "https://pokeapi.co/api/v2/ability/260/"
    }, {"name": "Curious medicine", "url": "https://pokeapi.co/api/v2/ability/261/"}, {
        "name": "Transistor",
        "url": "https://pokeapi.co/api/v2/ability/262/"
    }, {"name": "Dragons maw", "url": "https://pokeapi.co/api/v2/ability/263/"}, {
        "name": "Chilling neigh",
        "url": "https://pokeapi.co/api/v2/ability/264/"
    }, {"name": "Grim neigh", "url": "https://pokeapi.co/api/v2/ability/265/"}, {
        "name": "As one glastrier",
        "url": "https://pokeapi.co/api/v2/ability/266/"
    }, {"name": "As one spectrier", "url": "https://pokeapi.co/api/v2/ability/267/"}, {
        "name": "Mountaineer",
        "url": "https://pokeapi.co/api/v2/ability/10001/"
    }, {"name": "Wave rider", "url": "https://pokeapi.co/api/v2/ability/10002/"}, {
        "name": "Skater",
        "url": "https://pokeapi.co/api/v2/ability/10003/"
    }, {"name": "Thrust", "url": "https://pokeapi.co/api/v2/ability/10004/"}, {
        "name": "Perception",
        "url": "https://pokeapi.co/api/v2/ability/10005/"
    }, {"name": "Parry", "url": "https://pokeapi.co/api/v2/ability/10006/"}, {
        "name": "Instinct",
        "url": "https://pokeapi.co/api/v2/ability/10007/"
    }, {"name": "Dodge", "url": "https://pokeapi.co/api/v2/ability/10008/"}, {
        "name": "Jagged edge",
        "url": "https://pokeapi.co/api/v2/ability/10009/"
    }, {"name": "Frostbite", "url": "https://pokeapi.co/api/v2/ability/10010/"}, {
        "name": "Tenacity",
        "url": "https://pokeapi.co/api/v2/ability/10011/"
    }, {"name": "Pride", "url": "https://pokeapi.co/api/v2/ability/10012/"}, {
        "name": "Deep sleep",
        "url": "https://pokeapi.co/api/v2/ability/10013/"
    }, {"name": "Power nap", "url": "https://pokeapi.co/api/v2/ability/10014/"}, {
        "name": "Spirit",
        "url": "https://pokeapi.co/api/v2/ability/10015/"
    }, {"name": "Warm blanket", "url": "https://pokeapi.co/api/v2/ability/10016/"}, {
        "name": "Gulp",
        "url": "https://pokeapi.co/api/v2/ability/10017/"
    }, {"name": "Herbivore", "url": "https://pokeapi.co/api/v2/ability/10018/"}, {
        "name": "Sandpit",
        "url": "https://pokeapi.co/api/v2/ability/10019/"
    }, {"name": "Hot blooded", "url": "https://pokeapi.co/api/v2/ability/10020/"}, {
        "name": "Medic",
        "url": "https://pokeapi.co/api/v2/ability/10021/"
    }, {"name": "Life force", "url": "https://pokeapi.co/api/v2/ability/10022/"}, {
        "name": "Lunchbox",
        "url": "https://pokeapi.co/api/v2/ability/10023/"
    }, {"name": "Nurse", "url": "https://pokeapi.co/api/v2/ability/10024/"}, {
        "name": "Melee",
        "url": "https://pokeapi.co/api/v2/ability/10025/"
    }, {"name": "Sponge", "url": "https://pokeapi.co/api/v2/ability/10026/"}, {
        "name": "Bodyguard",
        "url": "https://pokeapi.co/api/v2/ability/10027/"
    }, {"name": "Hero", "url": "https://pokeapi.co/api/v2/ability/10028/"}, {
        "name": "Last bastion",
        "url": "https://pokeapi.co/api/v2/ability/10029/"
    }, {"name": "Stealth", "url": "https://pokeapi.co/api/v2/ability/10030/"}, {
        "name": "Vanguard",
        "url": "https://pokeapi.co/api/v2/ability/10031/"
    }, {"name": "Nomad", "url": "https://pokeapi.co/api/v2/ability/10032/"}, {
        "name": "Sequence",
        "url": "https://pokeapi.co/api/v2/ability/10033/"
    }, {"name": "Grass cloak", "url": "https://pokeapi.co/api/v2/ability/10034/"}, {
        "name": "Celebrate",
        "url": "https://pokeapi.co/api/v2/ability/10035/"
    }, {"name": "Lullaby", "url": "https://pokeapi.co/api/v2/ability/10036/"}, {
        "name": "Calming",
        "url": "https://pokeapi.co/api/v2/ability/10037/"
    }, {"name": "Daze", "url": "https://pokeapi.co/api/v2/ability/10038/"}, {
        "name": "Frighten",
        "url": "https://pokeapi.co/api/v2/ability/10039/"
    }, {"name": "Interference", "url": "https://pokeapi.co/api/v2/ability/10040/"}, {
        "name": "Mood maker",
        "url": "https://pokeapi.co/api/v2/ability/10041/"
    }, {"name": "Confidence", "url": "https://pokeapi.co/api/v2/ability/10042/"}, {
        "name": "Fortune",
        "url": "https://pokeapi.co/api/v2/ability/10043/"
    }, {"name": "Bonanza", "url": "https://pokeapi.co/api/v2/ability/10044/"}, {
        "name": "Explode",
        "url": "https://pokeapi.co/api/v2/ability/10045/"
    }, {"name": "Omnipotent", "url": "https://pokeapi.co/api/v2/ability/10046/"}, {
        "name": "Share",
        "url": "https://pokeapi.co/api/v2/ability/10047/"
    }, {"name": "Black hole", "url": "https://pokeapi.co/api/v2/ability/10048/"}, {
        "name": "Shadow dash",
        "url": "https://pokeapi.co/api/v2/ability/10049/"
    }, {"name": "Sprint", "url": "https://pokeapi.co/api/v2/ability/10050/"}, {
        "name": "Disgust",
        "url": "https://pokeapi.co/api/v2/ability/10051/"
    }, {"name": "High rise", "url": "https://pokeapi.co/api/v2/ability/10052/"}, {
        "name": "Climber",
        "url": "https://pokeapi.co/api/v2/ability/10053/"
    }, {"name": "Flame boost", "url": "https://pokeapi.co/api/v2/ability/10054/"}, {
        "name": "Aqua boost",
        "url": "https://pokeapi.co/api/v2/ability/10055/"
    }, {"name": "Run up", "url": "https://pokeapi.co/api/v2/ability/10056/"}, {
        "name": "Conqueror",
        "url": "https://pokeapi.co/api/v2/ability/10057/"
    }, {"name": "Shackle", "url": "https://pokeapi.co/api/v2/ability/10058/"}, {
        "name": "Decoy",
        "url": "https://pokeapi.co/api/v2/ability/10059/"
    }, {"name": "Shield", "url": "https://pokeapi.co/api/v2/ability/10060/"}]

export default abilities;
