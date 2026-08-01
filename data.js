const streamerDares = [
    {
        title: "Pack 1 - Easy",
        color: "bg-green",
        dares: [
            "Speak like a movie trailer narrator for 10 minutes.",
            "Let chat choose your next in-game character name.",
            "Read every message in a dramatic voice for 5 minutes.",
            "Compliment every new viewer.",
            "Dance for 30 seconds.",
            "Talk without saying \"I\" for 5 minutes.",
            "Only whisper for 3 minutes.",
            "Pretend your keyboard is broken.",
            "Use only one hand for 5 minutes.",
            "End every sentence with \"Trust me.\"",
            "Do a 10-second staring contest with the camera.",
            "Pretend to be an airline pilot for 3 minutes.",
            "Only reply to chat with emojis for the next 2 minutes.",
            "Give a passionate review of your mousepad.",
            "Hum your favorite song until someone in chat guesses it.",
            "Read your last 5 text messages out loud (if safe).",
            "Pretend you are doing a makeup tutorial for 1 minute.",
            "Play while balancing something safe on your head.",
            "Refer to yourself in the third person for 3 minutes.",
            "Use a fake mustache or drawn-on mustache for the next game.",
            "Sing your in-game callouts instead of speaking them.",
            "Compliment every single enemy you see.",
            "Talk like a pirate for 2 minutes.",
            "Do a dramatic sigh every time you miss a shot.",
            "Act like you are casting a magic spell when you attack."
        ]
    },
    {
        title: "Pack 2 - Medium",
        color: "bg-blue",
        dares: [
            "Let chat pick your next weapon/loadout.",
            "Wear your headset backwards.",
            "Sing every answer for 3 minutes.",
            "Play with inverted controls for one round.",
            "Act like a robot until you win.",
            "Explain the game like you're teaching a 5-year-old.",
            "Talk in slow motion.",
            "Fake an interview with yourself.",
            "Narrate everything you're doing.",
            "Use a fake accent for 10 minutes.",
            "Play the next round with your mouse in your non-dominant hand.",
            "Pretend you are a medieval knight narrating your quest.",
            "Give your in-game weapon a name and talk to it.",
            "Explain your game strategy using only food metaphors.",
            "Wear a funny hat or put something silly on your head.",
            "Let chat pick a word you have to say every 30 seconds.",
            "Pretend you are a secret agent on a stealth mission.",
            "Answer a random trivia question from chat before you can reload.",
            "Hold your breath every time you are in a gunfight.",
            "Narrate your game as if it's a dramatic anime.",
            "Pretend to be an angry chef reviewing the game.",
            "Give a random viewer a shoutout and make up a backstory for them.",
            "Only move forward and backward, no strafing for 1 minute.",
            "Do an evil villain laugh every time you score a point.",
            "Pretend you are incredibly terrified of the game environment."
        ]
    },
    {
        title: "Pack 3 - Hard",
        color: "bg-yellow",
        dares: [
            "Let chat rename your stream title.",
            "No laughing for 5 minutes.",
            "Every death = 5 pushups.",
            "Every win = victory dance.",
            "Only communicate with sound effects.",
            "Stream standing up for one game.",
            "Let chat mute your microphone randomly.",
            "Act like the game is a horror movie.",
            "Pretend you're a famous commentator.",
            "Thank your chair after every round.",
            "No speaking English for 5 minutes.",
            "Drop your weapon and run away from the first enemy you see.",
            "Let chat pick your background music for the next match.",
            "Do 10 jumping jacks for every time you heal or use an item.",
            "Pretend to be a telemarketer trying to sell the game to chat.",
            "No jumping or sprinting for 3 minutes.",
            "Let chat write a tweet for you (must be safe).",
            "Do 5 sit-ups for every round you lose.",
            "Play with your monitor upside down (if possible) or tilted.",
            "Only use your sidearm/pistol for an entire match.",
            "Speak in a completely monotone voice for 5 minutes.",
            "Pretend your character is extremely exhausted and out of breath.",
            "Thank a random object on your desk every time you win.",
            "Only look at the ceiling of the map for 30 seconds.",
            "Do not use any healing items for one game."
        ]
    },
    {
        title: "Pack 4 - Chaos",
        color: "bg-green",
        dares: [
            "Roast yourself for one minute.",
            "Compliment your opponents.",
            "Call yourself \"The Legend.\"",
            "Randomly clap every minute.",
            "Pretend you're lagging.",
            "Speak like Shakespeare.",
            "Narrate in sports commentary style.",
            "Let chat decide your sensitivity.",
            "Play with one eye closed.",
            "Say \"Skill issue\" after every mistake.",
            "Narrate your game like a nature documentary.",
            "Change your game language to a random one for one round.",
            "Spin in your chair 3 times every time you get a kill.",
            "Pretend you are highly suspicious of every player in the game.",
            "Sing the chorus of a pop song dramatically.",
            "Sing the alphabet backwards while in an intense fight.",
            "Pretend you forgot how to play the game and ask chat for help.",
            "Act like your character is hopelessly in love with the enemy.",
            "Yell 'Parkour!' every time you jump.",
            "Do a 360 spin before every shot you take.",
            "Pretend to be a weather reporter during the match.",
            "Change your sensitivity to maximum for 2 minutes.",
            "Speak only in haikus for the next 3 minutes.",
            "Pretend you are in a Broadway musical.",
            "Act like a grumpy old man complaining about modern games."
        ]
    },
    {
        title: "Pack 5 - Impossible",
        color: "bg-blue",
        dares: [
            "Finish a game without jumping.",
            "No looking at the minimap.",
            "Only crouch-walk for 2 minutes.",
            "Use your weakest weapon.",
            "Don't reload manually.",
            "Play with no HUD.",
            "No sprinting.",
            "Let chat pick your challenge.",
            "Survive one round without attacking.",
            "Do a dramatic victory speech after losing.",
            "Play blindfolded for 30 seconds.",
            "Only use melee attacks for one entire round.",
            "Do a 2-minute plank while playing.",
            "Play with minimum screen brightness.",
            "Let chat dictate every single movement command you make for 1 minute.",
            "Play with your mousepad completely backwards.",
            "Close your eyes for 10 seconds during every firefight.",
            "Do not use any armor or shields for the whole game.",
            "Let chat command you when to shoot.",
            "Play with your hands crossed over each other.",
            "Only walk backwards for the entire round.",
            "Do a wall sit for 2 minutes while playing.",
            "Unbind your reload key for one match.",
            "Pretend you are playing a racing game.",
            "Let chat write your victory speech."
        ]
    }
];

const friendsDares = [
    {
        title: "Easy",
        color: "bg-green",
        dares: [
            "Tell your funniest childhood story.",
            "Dance for 30 seconds.",
            "Do your best celebrity impression.",
            "Speak in rhyme for 2 minutes.",
            "Laugh like a villain.",
            "Pretend to be a news reporter.",
            "Hop on one foot for 20 seconds.",
            "Compliment everyone.",
            "Sing Happy Birthday dramatically.",
            "Walk like a model.",
            "Give a dramatic reading of a random text message.",
            "Pretend you are a statue and don't move for 1 minute.",
            "Speak with a fake British accent for 3 minutes.",
            "High five every person in the room.",
            "Try to juggle 3 small objects.",
            "Try to lick your elbow for 10 seconds.",
            "Do your best baby crying impression.",
            "Speak without moving your lips for 1 minute.",
            "Give the person to your left a compliment.",
            "Do a cartwheel (or attempt one safely).",
            "Pretend to ride a horse around the room.",
            "Talk like a robot for the next 2 minutes.",
            "Hold a staring contest with the person across from you.",
            "Pretend to play an invisible guitar.",
            "Make the ugliest face you can make."
        ]
    },
    {
        title: "Medium",
        color: "bg-blue",
        dares: [
            "Swap seats with someone.",
            "Let someone style your hair.",
            "Balance a book on your head.",
            "Act like a chicken.",
            "Pretend the floor is lava.",
            "Freeze for one minute.",
            "Speak only in questions.",
            "Tell a joke until someone laughs.",
            "Copy the person next to you.",
            "Do your best movie scene.",
            "Let someone else write a status on your social media.",
            "Do your best animal impression and let the group guess.",
            "Talk in a high-pitched voice for the next 3 rounds.",
            "Sing everything you say for the next 2 minutes.",
            "Balance a spoon on your nose for 10 seconds.",
            "Let the group give you a funny nickname for the rest of the game.",
            "Speak in an entirely made-up language for 1 minute.",
            "Do 10 burpees right now.",
            "Pretend you are a fashion model on a runway.",
            "Let someone draw a mustache on you with a washable marker.",
            "Sing a nursery rhyme but in a scary voice.",
            "Try to touch your toes and hold it for 20 seconds.",
            "Act like a monkey for 30 seconds.",
            "Let the person to your right restyle your hair.",
            "Talk with your tongue sticking out for 1 minute."
        ]
    },
    {
        title: "Hard",
        color: "bg-yellow",
        dares: [
            "Eat a spoon of ketchup.",
            "Wear socks on your hands.",
            "Let everyone rename you.",
            "Mimic another player.",
            "Do 20 squats.",
            "Act like a cat.",
            "Speak in an alien language.",
            "Pretend you're invisible.",
            "Walk backwards for one minute.",
            "Narrate everyone else's actions.",
            "Let the person to your left draw something on your arm with a pen.",
            "Eat a raw slice of onion.",
            "Do 15 pushups right now.",
            "Call a random contact and sing them a song.",
            "Let the group tickle you for 10 seconds.",
            "Let someone mix two non-alcoholic drinks and drink it.",
            "Hold an ice cube in your hand until it melts.",
            "Let the group post a harmless prank status on your phone.",
            "Wear your clothes inside out for the next 3 rounds.",
            "Do 30 jumping jacks.",
            "Pretend to be an alien studying human behavior.",
            "Let the group tickle you for 15 seconds.",
            "Eat a plain slice of bread as fast as you can.",
            "Speak only in whispers for the next 5 rounds.",
            "Act out a movie scene without talking until someone guesses it."
        ]
    },
    {
        title: "Chaos",
        color: "bg-green",
        dares: [
            "Swap shirts (if everyone agrees).",
            "Dance with no music.",
            "Act like a zombie.",
            "Laugh for 30 seconds without stopping.",
            "Pretend to cry dramatically.",
            "Tell an embarrassing story.",
            "Wear sunglasses indoors.",
            "Walk like a penguin.",
            "Do your best evil laugh.",
            "Speak like a pirate.",
            "Switch socks with someone else for the rest of the game.",
            "Speak only in movie quotes for 5 minutes.",
            "Pretend to be a dog and fetch something.",
            "Let the group mix three safe kitchen liquids for you to drink.",
            "Act out a famous meme perfectly.",
            "Let the group choose an embarrassing alarm sound for your phone.",
            "Sing everything you say for the rest of the game.",
            "Pretend you are an angry customer at a restaurant.",
            "Let someone blindfold you and feed you a safe snack.",
            "Walk like a crab for 1 minute.",
            "Speak in the third person for the rest of the game.",
            "Do a dramatic interpretive dance.",
            "Act like you are freezing cold for 2 minutes.",
            "Let the group choose a word you can't say for the rest of the game.",
            "Pretend to be a superhero with a terrible superpower."
        ]
    },
    {
        title: "Extreme",
        color: "bg-blue",
        dares: [
            "Let the group choose your phone wallpaper for a day.",
            "Let someone send an emoji from your phone.",
            "Hold a funny pose for 2 minutes.",
            "Eat something blindfolded (safe foods only).",
            "Imitate everyone's laugh.",
            "Speak only in song lyrics.",
            "Wear a funny accessory until the game ends.",
            "Let the winner assign your next dare.",
            "Take a silly group selfie.",
            "Create a victory speech for the loser.",
            "Let the group give you a new crazy hairstyle.",
            "Send a funny selfie to a coworker or friend.",
            "Eat a spoonful of hot sauce.",
            "Let someone post a silly photo of you.",
            "Give your phone to the person on your right for 2 minutes.",
            "Let the group text a random contact a harmless but confusing message.",
            "Eat a raw piece of garlic.",
            "Let someone draw a unibrow on you.",
            "Hold a plank position for as long as you can.",
            "Drink a glass of water with salt in it.",
            "Let the group wrap you in toilet paper like a mummy.",
            "Take a bite of a raw lemon without making a face.",
            "Let the person to your right send a harmless tweet from your account.",
            "Wear a blindfold for the next 3 rounds.",
            "Eat a spoonful of mustard."
        ]
    }
];

const privacyPolicy = `
    <h3>1. Introduction</h3>
    <p>Welcome to Dare Stacks! We create fun, interactive party games designed for friends and live streamers worldwide. Your privacy matters to us, which is why we have kept our privacy policy short, simple, and completely transparent. By using our website and interacting with our gameplay loops, you agree to the terms outlined below.</p>
    
    <h3>2. Information We Collect (Or Don't!)</h3>
    <p>No User Accounts: We do not require you to create an account, log in, or provide any personal data like your name, email address, or phone number to play Dare Stacks.</p>
    <p>Gameplay Data: All pack selections and dare completions happen locally in your web browser session. We do not track, store, or save your individual dare results on external permanent servers.</p>
    <p>Cookies & Local Storage: We use minor local browser storage solely to keep track of your active session (like remembering if you are on Dare 3 out of 10) so your game functions smoothly if you refresh or navigate the site.</p>
    
    <h3>3. Third-Party Advertisements & Global Data Transfers</h3>
    <p>To keep Dare Stacks 100% free for everyone, we display horizontal leaderboard advertisements at the base of our layout. These third-party ad networks (such as Google AdSense) may use cookies or basic non-personal device identifiers to serve relevant ads based on your general web browsing habits. Because this website is accessible worldwide, these third-party ad networks may process non-personal data across global servers. They do not have access to any personal data from our site, as we do not collect any.</p>
    
    <h3>4. International Privacy Rights (GDPR, CCPA, & DPDP)</h3>
    <p>EU/UK Users (GDPR): Since we do not collect personal data, we do not engage in the tracking, processing, or profiling of European citizens.</p>
    <p>US Users (CCPA/CPRA): We do not sell, rent, or share your personal information with third parties, because we do not collect any personal information to begin with.</p>
    <p>Indian Users (DPDP Act): We process all local session data based entirely on your voluntary consent to interact with our gameplay layout.</p>
    
    <h3>5. Children's Privacy</h3>
    <p>Dare Stacks is intended for a general audience. Because we do not collect, store, or share any personal identifiable information from any user, our platform is fully compliant with standard international digital privacy regulations (including COPPA and GDPR frameworks).</p>
    
    <h3>6. Future Support & Community</h3>
    <p>Dare Packs is currently in its vibrant, initial launch phase! We are entirely focused on perfecting our endless pack rollers and delivering the ultimate dare experience for you and your friends. Because we are a lean indie creator building this in real-time, our dedicated contact portal and community channels are currently under construction. We will be launching full player support and feedback systems in the coming months. Until then, deal your cards, challenge your friends, and stay tuned for major updates!</p>
`;
