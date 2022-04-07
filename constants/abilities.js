const abilities = [
    {
        "name": "stench",
        "url": "https://pokeapi.co/api/v2/ability/1/"
    },
    {
        "name": "drizzle",
        "url": "https://pokeapi.co/api/v2/ability/2/"
    },
    {
        "name": "speed-boost",
        "url": "https://pokeapi.co/api/v2/ability/3/"
    },
    {
        "name": "battle-armor",
        "url": "https://pokeapi.co/api/v2/ability/4/"
    },
    {
        "name": "sturdy",
        "url": "https://pokeapi.co/api/v2/ability/5/"
    },
    {
        "name": "damp",
        "url": "https://pokeapi.co/api/v2/ability/6/"
    },
    {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
    },
    {
        "name": "sand-veil",
        "url": "https://pokeapi.co/api/v2/ability/8/"
    },
    {
        "name": "static",
        "url": "https://pokeapi.co/api/v2/ability/9/"
    },
    {
        "name": "volt-absorb",
        "url": "https://pokeapi.co/api/v2/ability/10/"
    },
    {
        "name": "water-absorb",
        "url": "https://pokeapi.co/api/v2/ability/11/"
    },
    {
        "name": "oblivious",
        "url": "https://pokeapi.co/api/v2/ability/12/"
    },
    {
        "name": "cloud-nine",
        "url": "https://pokeapi.co/api/v2/ability/13/"
    },
    {
        "name": "compound-eyes",
        "url": "https://pokeapi.co/api/v2/ability/14/"
    },
    {
        "name": "insomnia",
        "url": "https://pokeapi.co/api/v2/ability/15/"
    },
    {
        "name": "color-change",
        "url": "https://pokeapi.co/api/v2/ability/16/"
    },
    {
        "name": "immunity",
        "url": "https://pokeapi.co/api/v2/ability/17/"
    },
    {
        "name": "flash-fire",
        "url": "https://pokeapi.co/api/v2/ability/18/"
    },
    {
        "name": "shield-dust",
        "url": "https://pokeapi.co/api/v2/ability/19/"
    },
    {
        "name": "own-tempo",
        "url": "https://pokeapi.co/api/v2/ability/20/"
    },
    {
        "name": "suction-cups",
        "url": "https://pokeapi.co/api/v2/ability/21/"
    },
    {
        "name": "intimidate",
        "url": "https://pokeapi.co/api/v2/ability/22/"
    },
    {
        "name": "shadow-tag",
        "url": "https://pokeapi.co/api/v2/ability/23/"
    },
    {
        "name": "rough-skin",
        "url": "https://pokeapi.co/api/v2/ability/24/"
    },
    {
        "name": "wonder-guard",
        "url": "https://pokeapi.co/api/v2/ability/25/"
    },
    {
        "name": "levitate",
        "url": "https://pokeapi.co/api/v2/ability/26/"
    },
    {
        "name": "effect-spore",
        "url": "https://pokeapi.co/api/v2/ability/27/"
    },
    {
        "name": "synchronize",
        "url": "https://pokeapi.co/api/v2/ability/28/"
    },
    {
        "name": "clear-body",
        "url": "https://pokeapi.co/api/v2/ability/29/"
    },
    {
        "name": "natural-cure",
        "url": "https://pokeapi.co/api/v2/ability/30/"
    },
    {
        "name": "lightning-rod",
        "url": "https://pokeapi.co/api/v2/ability/31/"
    },
    {
        "name": "serene-grace",
        "url": "https://pokeapi.co/api/v2/ability/32/"
    },
    {
        "name": "swift-swim",
        "url": "https://pokeapi.co/api/v2/ability/33/"
    },
    {
        "name": "chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
    },
    {
        "name": "illuminate",
        "url": "https://pokeapi.co/api/v2/ability/35/"
    },
    {
        "name": "trace",
        "url": "https://pokeapi.co/api/v2/ability/36/"
    },
    {
        "name": "huge-power",
        "url": "https://pokeapi.co/api/v2/ability/37/"
    },
    {
        "name": "poison-point",
        "url": "https://pokeapi.co/api/v2/ability/38/"
    },
    {
        "name": "inner-focus",
        "url": "https://pokeapi.co/api/v2/ability/39/"
    },
    {
        "name": "magma-armor",
        "url": "https://pokeapi.co/api/v2/ability/40/"
    },
    {
        "name": "water-veil",
        "url": "https://pokeapi.co/api/v2/ability/41/"
    },
    {
        "name": "magnet-pull",
        "url": "https://pokeapi.co/api/v2/ability/42/"
    },
    {
        "name": "soundproof",
        "url": "https://pokeapi.co/api/v2/ability/43/"
    },
    {
        "name": "rain-dish",
        "url": "https://pokeapi.co/api/v2/ability/44/"
    },
    {
        "name": "sand-stream",
        "url": "https://pokeapi.co/api/v2/ability/45/"
    },
    {
        "name": "pressure",
        "url": "https://pokeapi.co/api/v2/ability/46/"
    },
    {
        "name": "thick-fat",
        "url": "https://pokeapi.co/api/v2/ability/47/"
    },
    {
        "name": "early-bird",
        "url": "https://pokeapi.co/api/v2/ability/48/"
    },
    {
        "name": "flame-body",
        "url": "https://pokeapi.co/api/v2/ability/49/"
    },
    {
        "name": "run-away",
        "url": "https://pokeapi.co/api/v2/ability/50/"
    },
    {
        "name": "keen-eye",
        "url": "https://pokeapi.co/api/v2/ability/51/"
    },
    {
        "name": "hyper-cutter",
        "url": "https://pokeapi.co/api/v2/ability/52/"
    },
    {
        "name": "pickup",
        "url": "https://pokeapi.co/api/v2/ability/53/"
    },
    {
        "name": "truant",
        "url": "https://pokeapi.co/api/v2/ability/54/"
    },
    {
        "name": "hustle",
        "url": "https://pokeapi.co/api/v2/ability/55/"
    },
    {
        "name": "cute-charm",
        "url": "https://pokeapi.co/api/v2/ability/56/"
    },
    {
        "name": "plus",
        "url": "https://pokeapi.co/api/v2/ability/57/"
    },
    {
        "name": "minus",
        "url": "https://pokeapi.co/api/v2/ability/58/"
    },
    {
        "name": "forecast",
        "url": "https://pokeapi.co/api/v2/ability/59/"
    },
    {
        "name": "sticky-hold",
        "url": "https://pokeapi.co/api/v2/ability/60/"
    },
    {
        "name": "shed-skin",
        "url": "https://pokeapi.co/api/v2/ability/61/"
    },
    {
        "name": "guts",
        "url": "https://pokeapi.co/api/v2/ability/62/"
    },
    {
        "name": "marvel-scale",
        "url": "https://pokeapi.co/api/v2/ability/63/"
    },
    {
        "name": "liquid-ooze",
        "url": "https://pokeapi.co/api/v2/ability/64/"
    },
    {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
    },
    {
        "name": "blaze",
        "url": "https://pokeapi.co/api/v2/ability/66/"
    },
    {
        "name": "torrent",
        "url": "https://pokeapi.co/api/v2/ability/67/"
    },
    {
        "name": "swarm",
        "url": "https://pokeapi.co/api/v2/ability/68/"
    },
    {
        "name": "rock-head",
        "url": "https://pokeapi.co/api/v2/ability/69/"
    },
    {
        "name": "drought",
        "url": "https://pokeapi.co/api/v2/ability/70/"
    },
    {
        "name": "arena-trap",
        "url": "https://pokeapi.co/api/v2/ability/71/"
    },
    {
        "name": "vital-spirit",
        "url": "https://pokeapi.co/api/v2/ability/72/"
    },
    {
        "name": "white-smoke",
        "url": "https://pokeapi.co/api/v2/ability/73/"
    },
    {
        "name": "pure-power",
        "url": "https://pokeapi.co/api/v2/ability/74/"
    },
    {
        "name": "shell-armor",
        "url": "https://pokeapi.co/api/v2/ability/75/"
    },
    {
        "name": "air-lock",
        "url": "https://pokeapi.co/api/v2/ability/76/"
    },
    {
        "name": "tangled-feet",
        "url": "https://pokeapi.co/api/v2/ability/77/"
    },
    {
        "name": "motor-drive",
        "url": "https://pokeapi.co/api/v2/ability/78/"
    },
    {
        "name": "rivalry",
        "url": "https://pokeapi.co/api/v2/ability/79/"
    },
    {
        "name": "steadfast",
        "url": "https://pokeapi.co/api/v2/ability/80/"
    },
    {
        "name": "snow-cloak",
        "url": "https://pokeapi.co/api/v2/ability/81/"
    },
    {
        "name": "gluttony",
        "url": "https://pokeapi.co/api/v2/ability/82/"
    },
    {
        "name": "anger-point",
        "url": "https://pokeapi.co/api/v2/ability/83/"
    },
    {
        "name": "unburden",
        "url": "https://pokeapi.co/api/v2/ability/84/"
    },
    {
        "name": "heatproof",
        "url": "https://pokeapi.co/api/v2/ability/85/"
    },
    {
        "name": "simple",
        "url": "https://pokeapi.co/api/v2/ability/86/"
    },
    {
        "name": "dry-skin",
        "url": "https://pokeapi.co/api/v2/ability/87/"
    },
    {
        "name": "download",
        "url": "https://pokeapi.co/api/v2/ability/88/"
    },
    {
        "name": "iron-fist",
        "url": "https://pokeapi.co/api/v2/ability/89/"
    },
    {
        "name": "poison-heal",
        "url": "https://pokeapi.co/api/v2/ability/90/"
    },
    {
        "name": "adaptability",
        "url": "https://pokeapi.co/api/v2/ability/91/"
    },
    {
        "name": "skill-link",
        "url": "https://pokeapi.co/api/v2/ability/92/"
    },
    {
        "name": "hydration",
        "url": "https://pokeapi.co/api/v2/ability/93/"
    },
    {
        "name": "solar-power",
        "url": "https://pokeapi.co/api/v2/ability/94/"
    },
    {
        "name": "quick-feet",
        "url": "https://pokeapi.co/api/v2/ability/95/"
    },
    {
        "name": "normalize",
        "url": "https://pokeapi.co/api/v2/ability/96/"
    },
    {
        "name": "sniper",
        "url": "https://pokeapi.co/api/v2/ability/97/"
    },
    {
        "name": "magic-guard",
        "url": "https://pokeapi.co/api/v2/ability/98/"
    },
    {
        "name": "no-guard",
        "url": "https://pokeapi.co/api/v2/ability/99/"
    },
    {
        "name": "stall",
        "url": "https://pokeapi.co/api/v2/ability/100/"
    },
    {
        "name": "technician",
        "url": "https://pokeapi.co/api/v2/ability/101/"
    },
    {
        "name": "leaf-guard",
        "url": "https://pokeapi.co/api/v2/ability/102/"
    },
    {
        "name": "klutz",
        "url": "https://pokeapi.co/api/v2/ability/103/"
    },
    {
        "name": "mold-breaker",
        "url": "https://pokeapi.co/api/v2/ability/104/"
    },
    {
        "name": "super-luck",
        "url": "https://pokeapi.co/api/v2/ability/105/"
    },
    {
        "name": "aftermath",
        "url": "https://pokeapi.co/api/v2/ability/106/"
    },
    {
        "name": "anticipation",
        "url": "https://pokeapi.co/api/v2/ability/107/"
    },
    {
        "name": "forewarn",
        "url": "https://pokeapi.co/api/v2/ability/108/"
    },
    {
        "name": "unaware",
        "url": "https://pokeapi.co/api/v2/ability/109/"
    },
    {
        "name": "tinted-lens",
        "url": "https://pokeapi.co/api/v2/ability/110/"
    },
    {
        "name": "filter",
        "url": "https://pokeapi.co/api/v2/ability/111/"
    },
    {
        "name": "slow-start",
        "url": "https://pokeapi.co/api/v2/ability/112/"
    },
    {
        "name": "scrappy",
        "url": "https://pokeapi.co/api/v2/ability/113/"
    },
    {
        "name": "storm-drain",
        "url": "https://pokeapi.co/api/v2/ability/114/"
    },
    {
        "name": "ice-body",
        "url": "https://pokeapi.co/api/v2/ability/115/"
    },
    {
        "name": "solid-rock",
        "url": "https://pokeapi.co/api/v2/ability/116/"
    },
    {
        "name": "snow-warning",
        "url": "https://pokeapi.co/api/v2/ability/117/"
    },
    {
        "name": "honey-gather",
        "url": "https://pokeapi.co/api/v2/ability/118/"
    },
    {
        "name": "frisk",
        "url": "https://pokeapi.co/api/v2/ability/119/"
    },
    {
        "name": "reckless",
        "url": "https://pokeapi.co/api/v2/ability/120/"
    },
    {
        "name": "multitype",
        "url": "https://pokeapi.co/api/v2/ability/121/"
    },
    {
        "name": "flower-gift",
        "url": "https://pokeapi.co/api/v2/ability/122/"
    },
    {
        "name": "bad-dreams",
        "url": "https://pokeapi.co/api/v2/ability/123/"
    },
    {
        "name": "pickpocket",
        "url": "https://pokeapi.co/api/v2/ability/124/"
    },
    {
        "name": "sheer-force",
        "url": "https://pokeapi.co/api/v2/ability/125/"
    },
    {
        "name": "contrary",
        "url": "https://pokeapi.co/api/v2/ability/126/"
    },
    {
        "name": "unnerve",
        "url": "https://pokeapi.co/api/v2/ability/127/"
    },
    {
        "name": "defiant",
        "url": "https://pokeapi.co/api/v2/ability/128/"
    },
    {
        "name": "defeatist",
        "url": "https://pokeapi.co/api/v2/ability/129/"
    },
    {
        "name": "cursed-body",
        "url": "https://pokeapi.co/api/v2/ability/130/"
    },
    {
        "name": "healer",
        "url": "https://pokeapi.co/api/v2/ability/131/"
    },
    {
        "name": "friend-guard",
        "url": "https://pokeapi.co/api/v2/ability/132/"
    },
    {
        "name": "weak-armor",
        "url": "https://pokeapi.co/api/v2/ability/133/"
    },
    {
        "name": "heavy-metal",
        "url": "https://pokeapi.co/api/v2/ability/134/"
    },
    {
        "name": "light-metal",
        "url": "https://pokeapi.co/api/v2/ability/135/"
    },
    {
        "name": "multiscale",
        "url": "https://pokeapi.co/api/v2/ability/136/"
    },
    {
        "name": "toxic-boost",
        "url": "https://pokeapi.co/api/v2/ability/137/"
    },
    {
        "name": "flare-boost",
        "url": "https://pokeapi.co/api/v2/ability/138/"
    },
    {
        "name": "harvest",
        "url": "https://pokeapi.co/api/v2/ability/139/"
    },
    {
        "name": "telepathy",
        "url": "https://pokeapi.co/api/v2/ability/140/"
    },
    {
        "name": "moody",
        "url": "https://pokeapi.co/api/v2/ability/141/"
    },
    {
        "name": "overcoat",
        "url": "https://pokeapi.co/api/v2/ability/142/"
    },
    {
        "name": "poison-touch",
        "url": "https://pokeapi.co/api/v2/ability/143/"
    },
    {
        "name": "regenerator",
        "url": "https://pokeapi.co/api/v2/ability/144/"
    },
    {
        "name": "big-pecks",
        "url": "https://pokeapi.co/api/v2/ability/145/"
    },
    {
        "name": "sand-rush",
        "url": "https://pokeapi.co/api/v2/ability/146/"
    },
    {
        "name": "wonder-skin",
        "url": "https://pokeapi.co/api/v2/ability/147/"
    },
    {
        "name": "analytic",
        "url": "https://pokeapi.co/api/v2/ability/148/"
    },
    {
        "name": "illusion",
        "url": "https://pokeapi.co/api/v2/ability/149/"
    },
    {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
    },
    {
        "name": "infiltrator",
        "url": "https://pokeapi.co/api/v2/ability/151/"
    },
    {
        "name": "mummy",
        "url": "https://pokeapi.co/api/v2/ability/152/"
    },
    {
        "name": "moxie",
        "url": "https://pokeapi.co/api/v2/ability/153/"
    },
    {
        "name": "justified",
        "url": "https://pokeapi.co/api/v2/ability/154/"
    },
    {
        "name": "rattled",
        "url": "https://pokeapi.co/api/v2/ability/155/"
    },
    {
        "name": "magic-bounce",
        "url": "https://pokeapi.co/api/v2/ability/156/"
    },
    {
        "name": "sap-sipper",
        "url": "https://pokeapi.co/api/v2/ability/157/"
    },
    {
        "name": "prankster",
        "url": "https://pokeapi.co/api/v2/ability/158/"
    },
    {
        "name": "sand-force",
        "url": "https://pokeapi.co/api/v2/ability/159/"
    },
    {
        "name": "iron-barbs",
        "url": "https://pokeapi.co/api/v2/ability/160/"
    },
    {
        "name": "zen-mode",
        "url": "https://pokeapi.co/api/v2/ability/161/"
    },
    {
        "name": "victory-star",
        "url": "https://pokeapi.co/api/v2/ability/162/"
    },
    {
        "name": "turboblaze",
        "url": "https://pokeapi.co/api/v2/ability/163/"
    },
    {
        "name": "teravolt",
        "url": "https://pokeapi.co/api/v2/ability/164/"
    },
    {
        "name": "aroma-veil",
        "url": "https://pokeapi.co/api/v2/ability/165/"
    },
    {
        "name": "flower-veil",
        "url": "https://pokeapi.co/api/v2/ability/166/"
    },
    {
        "name": "cheek-pouch",
        "url": "https://pokeapi.co/api/v2/ability/167/"
    },
    {
        "name": "protean",
        "url": "https://pokeapi.co/api/v2/ability/168/"
    },
    {
        "name": "fur-coat",
        "url": "https://pokeapi.co/api/v2/ability/169/"
    },
    {
        "name": "magician",
        "url": "https://pokeapi.co/api/v2/ability/170/"
    },
    {
        "name": "bulletproof",
        "url": "https://pokeapi.co/api/v2/ability/171/"
    },
    {
        "name": "competitive",
        "url": "https://pokeapi.co/api/v2/ability/172/"
    },
    {
        "name": "strong-jaw",
        "url": "https://pokeapi.co/api/v2/ability/173/"
    },
    {
        "name": "refrigerate",
        "url": "https://pokeapi.co/api/v2/ability/174/"
    },
    {
        "name": "sweet-veil",
        "url": "https://pokeapi.co/api/v2/ability/175/"
    },
    {
        "name": "stance-change",
        "url": "https://pokeapi.co/api/v2/ability/176/"
    },
    {
        "name": "gale-wings",
        "url": "https://pokeapi.co/api/v2/ability/177/"
    },
    {
        "name": "mega-launcher",
        "url": "https://pokeapi.co/api/v2/ability/178/"
    },
    {
        "name": "grass-pelt",
        "url": "https://pokeapi.co/api/v2/ability/179/"
    },
    {
        "name": "symbiosis",
        "url": "https://pokeapi.co/api/v2/ability/180/"
    },
    {
        "name": "tough-claws",
        "url": "https://pokeapi.co/api/v2/ability/181/"
    },
    {
        "name": "pixilate",
        "url": "https://pokeapi.co/api/v2/ability/182/"
    },
    {
        "name": "gooey",
        "url": "https://pokeapi.co/api/v2/ability/183/"
    },
    {
        "name": "aerilate",
        "url": "https://pokeapi.co/api/v2/ability/184/"
    },
    {
        "name": "parental-bond",
        "url": "https://pokeapi.co/api/v2/ability/185/"
    },
    {
        "name": "dark-aura",
        "url": "https://pokeapi.co/api/v2/ability/186/"
    },
    {
        "name": "fairy-aura",
        "url": "https://pokeapi.co/api/v2/ability/187/"
    },
    {
        "name": "aura-break",
        "url": "https://pokeapi.co/api/v2/ability/188/"
    },
    {
        "name": "primordial-sea",
        "url": "https://pokeapi.co/api/v2/ability/189/"
    },
    {
        "name": "desolate-land",
        "url": "https://pokeapi.co/api/v2/ability/190/"
    },
    {
        "name": "delta-stream",
        "url": "https://pokeapi.co/api/v2/ability/191/"
    },
    {
        "name": "stamina",
        "url": "https://pokeapi.co/api/v2/ability/192/"
    },
    {
        "name": "wimp-out",
        "url": "https://pokeapi.co/api/v2/ability/193/"
    },
    {
        "name": "emergency-exit",
        "url": "https://pokeapi.co/api/v2/ability/194/"
    },
    {
        "name": "water-compaction",
        "url": "https://pokeapi.co/api/v2/ability/195/"
    },
    {
        "name": "merciless",
        "url": "https://pokeapi.co/api/v2/ability/196/"
    },
    {
        "name": "shields-down",
        "url": "https://pokeapi.co/api/v2/ability/197/"
    },
    {
        "name": "stakeout",
        "url": "https://pokeapi.co/api/v2/ability/198/"
    },
    {
        "name": "water-bubble",
        "url": "https://pokeapi.co/api/v2/ability/199/"
    },
    {
        "name": "steelworker",
        "url": "https://pokeapi.co/api/v2/ability/200/"
    },
    {
        "name": "berserk",
        "url": "https://pokeapi.co/api/v2/ability/201/"
    },
    {
        "name": "slush-rush",
        "url": "https://pokeapi.co/api/v2/ability/202/"
    },
    {
        "name": "long-reach",
        "url": "https://pokeapi.co/api/v2/ability/203/"
    },
    {
        "name": "liquid-voice",
        "url": "https://pokeapi.co/api/v2/ability/204/"
    },
    {
        "name": "triage",
        "url": "https://pokeapi.co/api/v2/ability/205/"
    },
    {
        "name": "galvanize",
        "url": "https://pokeapi.co/api/v2/ability/206/"
    },
    {
        "name": "surge-surfer",
        "url": "https://pokeapi.co/api/v2/ability/207/"
    },
    {
        "name": "schooling",
        "url": "https://pokeapi.co/api/v2/ability/208/"
    },
    {
        "name": "disguise",
        "url": "https://pokeapi.co/api/v2/ability/209/"
    },
    {
        "name": "battle-bond",
        "url": "https://pokeapi.co/api/v2/ability/210/"
    },
    {
        "name": "power-construct",
        "url": "https://pokeapi.co/api/v2/ability/211/"
    },
    {
        "name": "corrosion",
        "url": "https://pokeapi.co/api/v2/ability/212/"
    },
    {
        "name": "comatose",
        "url": "https://pokeapi.co/api/v2/ability/213/"
    },
    {
        "name": "queenly-majesty",
        "url": "https://pokeapi.co/api/v2/ability/214/"
    },
    {
        "name": "innards-out",
        "url": "https://pokeapi.co/api/v2/ability/215/"
    },
    {
        "name": "dancer",
        "url": "https://pokeapi.co/api/v2/ability/216/"
    },
    {
        "name": "battery",
        "url": "https://pokeapi.co/api/v2/ability/217/"
    },
    {
        "name": "fluffy",
        "url": "https://pokeapi.co/api/v2/ability/218/"
    },
    {
        "name": "dazzling",
        "url": "https://pokeapi.co/api/v2/ability/219/"
    },
    {
        "name": "soul-heart",
        "url": "https://pokeapi.co/api/v2/ability/220/"
    },
    {
        "name": "tangling-hair",
        "url": "https://pokeapi.co/api/v2/ability/221/"
    },
    {
        "name": "receiver",
        "url": "https://pokeapi.co/api/v2/ability/222/"
    },
    {
        "name": "power-of-alchemy",
        "url": "https://pokeapi.co/api/v2/ability/223/"
    },
    {
        "name": "beast-boost",
        "url": "https://pokeapi.co/api/v2/ability/224/"
    },
    {
        "name": "rks-system",
        "url": "https://pokeapi.co/api/v2/ability/225/"
    },
    {
        "name": "electric-surge",
        "url": "https://pokeapi.co/api/v2/ability/226/"
    },
    {
        "name": "psychic-surge",
        "url": "https://pokeapi.co/api/v2/ability/227/"
    },
    {
        "name": "misty-surge",
        "url": "https://pokeapi.co/api/v2/ability/228/"
    },
    {
        "name": "grassy-surge",
        "url": "https://pokeapi.co/api/v2/ability/229/"
    },
    {
        "name": "full-metal-body",
        "url": "https://pokeapi.co/api/v2/ability/230/"
    },
    {
        "name": "shadow-shield",
        "url": "https://pokeapi.co/api/v2/ability/231/"
    },
    {
        "name": "prism-armor",
        "url": "https://pokeapi.co/api/v2/ability/232/"
    },
    {
        "name": "neuroforce",
        "url": "https://pokeapi.co/api/v2/ability/233/"
    },
    {
        "name": "intrepid-sword",
        "url": "https://pokeapi.co/api/v2/ability/234/"
    },
    {
        "name": "dauntless-shield",
        "url": "https://pokeapi.co/api/v2/ability/235/"
    },
    {
        "name": "libero",
        "url": "https://pokeapi.co/api/v2/ability/236/"
    },
    {
        "name": "ball-fetch",
        "url": "https://pokeapi.co/api/v2/ability/237/"
    },
    {
        "name": "cotton-down",
        "url": "https://pokeapi.co/api/v2/ability/238/"
    },
    {
        "name": "propeller-tail",
        "url": "https://pokeapi.co/api/v2/ability/239/"
    },
    {
        "name": "mirror-armor",
        "url": "https://pokeapi.co/api/v2/ability/240/"
    },
    {
        "name": "gulp-missile",
        "url": "https://pokeapi.co/api/v2/ability/241/"
    },
    {
        "name": "stalwart",
        "url": "https://pokeapi.co/api/v2/ability/242/"
    },
    {
        "name": "steam-engine",
        "url": "https://pokeapi.co/api/v2/ability/243/"
    },
    {
        "name": "punk-rock",
        "url": "https://pokeapi.co/api/v2/ability/244/"
    },
    {
        "name": "sand-spit",
        "url": "https://pokeapi.co/api/v2/ability/245/"
    },
    {
        "name": "ice-scales",
        "url": "https://pokeapi.co/api/v2/ability/246/"
    },
    {
        "name": "ripen",
        "url": "https://pokeapi.co/api/v2/ability/247/"
    },
    {
        "name": "ice-face",
        "url": "https://pokeapi.co/api/v2/ability/248/"
    },
    {
        "name": "power-spot",
        "url": "https://pokeapi.co/api/v2/ability/249/"
    },
    {
        "name": "mimicry",
        "url": "https://pokeapi.co/api/v2/ability/250/"
    },
    {
        "name": "screen-cleaner",
        "url": "https://pokeapi.co/api/v2/ability/251/"
    },
    {
        "name": "steely-spirit",
        "url": "https://pokeapi.co/api/v2/ability/252/"
    },
    {
        "name": "perish-body",
        "url": "https://pokeapi.co/api/v2/ability/253/"
    },
    {
        "name": "wandering-spirit",
        "url": "https://pokeapi.co/api/v2/ability/254/"
    },
    {
        "name": "gorilla-tactics",
        "url": "https://pokeapi.co/api/v2/ability/255/"
    },
    {
        "name": "neutralizing-gas",
        "url": "https://pokeapi.co/api/v2/ability/256/"
    },
    {
        "name": "pastel-veil",
        "url": "https://pokeapi.co/api/v2/ability/257/"
    },
    {
        "name": "hunger-switch",
        "url": "https://pokeapi.co/api/v2/ability/258/"
    },
    {
        "name": "quick-draw",
        "url": "https://pokeapi.co/api/v2/ability/259/"
    },
    {
        "name": "unseen-fist",
        "url": "https://pokeapi.co/api/v2/ability/260/"
    },
    {
        "name": "curious-medicine",
        "url": "https://pokeapi.co/api/v2/ability/261/"
    },
    {
        "name": "transistor",
        "url": "https://pokeapi.co/api/v2/ability/262/"
    },
    {
        "name": "dragons-maw",
        "url": "https://pokeapi.co/api/v2/ability/263/"
    },
    {
        "name": "chilling-neigh",
        "url": "https://pokeapi.co/api/v2/ability/264/"
    },
    {
        "name": "grim-neigh",
        "url": "https://pokeapi.co/api/v2/ability/265/"
    },
    {
        "name": "as-one-glastrier",
        "url": "https://pokeapi.co/api/v2/ability/266/"
    },
    {
        "name": "as-one-spectrier",
        "url": "https://pokeapi.co/api/v2/ability/267/"
    },
    {
        "name": "mountaineer",
        "url": "https://pokeapi.co/api/v2/ability/10001/"
    },
    {
        "name": "wave-rider",
        "url": "https://pokeapi.co/api/v2/ability/10002/"
    },
    {
        "name": "skater",
        "url": "https://pokeapi.co/api/v2/ability/10003/"
    },
    {
        "name": "thrust",
        "url": "https://pokeapi.co/api/v2/ability/10004/"
    },
    {
        "name": "perception",
        "url": "https://pokeapi.co/api/v2/ability/10005/"
    },
    {
        "name": "parry",
        "url": "https://pokeapi.co/api/v2/ability/10006/"
    },
    {
        "name": "instinct",
        "url": "https://pokeapi.co/api/v2/ability/10007/"
    },
    {
        "name": "dodge",
        "url": "https://pokeapi.co/api/v2/ability/10008/"
    },
    {
        "name": "jagged-edge",
        "url": "https://pokeapi.co/api/v2/ability/10009/"
    },
    {
        "name": "frostbite",
        "url": "https://pokeapi.co/api/v2/ability/10010/"
    },
    {
        "name": "tenacity",
        "url": "https://pokeapi.co/api/v2/ability/10011/"
    },
    {
        "name": "pride",
        "url": "https://pokeapi.co/api/v2/ability/10012/"
    },
    {
        "name": "deep-sleep",
        "url": "https://pokeapi.co/api/v2/ability/10013/"
    },
    {
        "name": "power-nap",
        "url": "https://pokeapi.co/api/v2/ability/10014/"
    },
    {
        "name": "spirit",
        "url": "https://pokeapi.co/api/v2/ability/10015/"
    },
    {
        "name": "warm-blanket",
        "url": "https://pokeapi.co/api/v2/ability/10016/"
    },
    {
        "name": "gulp",
        "url": "https://pokeapi.co/api/v2/ability/10017/"
    },
    {
        "name": "herbivore",
        "url": "https://pokeapi.co/api/v2/ability/10018/"
    },
    {
        "name": "sandpit",
        "url": "https://pokeapi.co/api/v2/ability/10019/"
    },
    {
        "name": "hot-blooded",
        "url": "https://pokeapi.co/api/v2/ability/10020/"
    },
    {
        "name": "medic",
        "url": "https://pokeapi.co/api/v2/ability/10021/"
    },
    {
        "name": "life-force",
        "url": "https://pokeapi.co/api/v2/ability/10022/"
    },
    {
        "name": "lunchbox",
        "url": "https://pokeapi.co/api/v2/ability/10023/"
    },
    {
        "name": "nurse",
        "url": "https://pokeapi.co/api/v2/ability/10024/"
    },
    {
        "name": "melee",
        "url": "https://pokeapi.co/api/v2/ability/10025/"
    },
    {
        "name": "sponge",
        "url": "https://pokeapi.co/api/v2/ability/10026/"
    },
    {
        "name": "bodyguard",
        "url": "https://pokeapi.co/api/v2/ability/10027/"
    },
    {
        "name": "hero",
        "url": "https://pokeapi.co/api/v2/ability/10028/"
    },
    {
        "name": "last-bastion",
        "url": "https://pokeapi.co/api/v2/ability/10029/"
    },
    {
        "name": "stealth",
        "url": "https://pokeapi.co/api/v2/ability/10030/"
    },
    {
        "name": "vanguard",
        "url": "https://pokeapi.co/api/v2/ability/10031/"
    },
    {
        "name": "nomad",
        "url": "https://pokeapi.co/api/v2/ability/10032/"
    },
    {
        "name": "sequence",
        "url": "https://pokeapi.co/api/v2/ability/10033/"
    },
    {
        "name": "grass-cloak",
        "url": "https://pokeapi.co/api/v2/ability/10034/"
    },
    {
        "name": "celebrate",
        "url": "https://pokeapi.co/api/v2/ability/10035/"
    },
    {
        "name": "lullaby",
        "url": "https://pokeapi.co/api/v2/ability/10036/"
    },
    {
        "name": "calming",
        "url": "https://pokeapi.co/api/v2/ability/10037/"
    },
    {
        "name": "daze",
        "url": "https://pokeapi.co/api/v2/ability/10038/"
    },
    {
        "name": "frighten",
        "url": "https://pokeapi.co/api/v2/ability/10039/"
    },
    {
        "name": "interference",
        "url": "https://pokeapi.co/api/v2/ability/10040/"
    },
    {
        "name": "mood-maker",
        "url": "https://pokeapi.co/api/v2/ability/10041/"
    },
    {
        "name": "confidence",
        "url": "https://pokeapi.co/api/v2/ability/10042/"
    },
    {
        "name": "fortune",
        "url": "https://pokeapi.co/api/v2/ability/10043/"
    },
    {
        "name": "bonanza",
        "url": "https://pokeapi.co/api/v2/ability/10044/"
    },
    {
        "name": "explode",
        "url": "https://pokeapi.co/api/v2/ability/10045/"
    },
    {
        "name": "omnipotent",
        "url": "https://pokeapi.co/api/v2/ability/10046/"
    },
    {
        "name": "share",
        "url": "https://pokeapi.co/api/v2/ability/10047/"
    },
    {
        "name": "black-hole",
        "url": "https://pokeapi.co/api/v2/ability/10048/"
    },
    {
        "name": "shadow-dash",
        "url": "https://pokeapi.co/api/v2/ability/10049/"
    },
    {
        "name": "sprint",
        "url": "https://pokeapi.co/api/v2/ability/10050/"
    },
    {
        "name": "disgust",
        "url": "https://pokeapi.co/api/v2/ability/10051/"
    },
    {
        "name": "high-rise",
        "url": "https://pokeapi.co/api/v2/ability/10052/"
    },
    {
        "name": "climber",
        "url": "https://pokeapi.co/api/v2/ability/10053/"
    },
    {
        "name": "flame-boost",
        "url": "https://pokeapi.co/api/v2/ability/10054/"
    },
    {
        "name": "aqua-boost",
        "url": "https://pokeapi.co/api/v2/ability/10055/"
    },
    {
        "name": "run-up",
        "url": "https://pokeapi.co/api/v2/ability/10056/"
    },
    {
        "name": "conqueror",
        "url": "https://pokeapi.co/api/v2/ability/10057/"
    },
    {
        "name": "shackle",
        "url": "https://pokeapi.co/api/v2/ability/10058/"
    },
    {
        "name": "decoy",
        "url": "https://pokeapi.co/api/v2/ability/10059/"
    },
    {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/ability/10060/"
    }
]

export default abilities;
