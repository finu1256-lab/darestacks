import json
import random

# Base components for Streamer Mode
s_easy_actions = [
    "Speak like a movie trailer narrator", "Read every message in a dramatic voice", 
    "Compliment every new viewer", "Talk without saying 'I'", "Only whisper", 
    "Pretend your keyboard is broken", "Use only one hand", "End every sentence with 'Trust me'",
    "Do a staring contest with the camera", "Pretend to be an airline pilot", 
    "Reply to chat with emojis", "Give a passionate review of your mousepad", 
    "Hum your favorite song", "Read your last text message", "Pretend you're doing a makeup tutorial",
    "Refer to yourself in the third person", "Talk like a pirate", "Do a dramatic sigh every time you miss",
    "Act like you are casting a magic spell", "Sing your in-game callouts", "Talk like a news anchor",
    "Pretend you are hosting a cooking show", "Only use your non-dominant hand for the mouse",
    "Commentate on your own gameplay like an esports caster", "Give random shoutouts to chatters",
    "Act surprised by everything that happens in the game"
]

s_easy_durations = ["for 5 minutes", "for 10 minutes", "for 3 minutes", "for 2 minutes", "for the next round", "for 30 seconds", "until you win", "for 1 minute"]

s_med_actions = [
    "Let chat pick your next weapon", "Wear your headset backwards", "Sing every answer", 
    "Play with inverted controls", "Act like a robot", "Explain the game to a 5-year-old", 
    "Talk in slow motion", "Fake an interview with yourself", "Narrate everything you're doing", 
    "Use a fake accent", "Pretend you are a medieval knight", "Give your weapon a name", 
    "Explain strategy using food metaphors", "Wear a funny hat", "Let chat pick a word you must say",
    "Pretend you are a secret agent", "Answer a trivia question before reloading", "Hold your breath during gunfights",
    "Narrate your game like an anime", "Pretend to be an angry chef", "Do an evil laugh when you score",
    "Pretend you are terrified of the game", "Talk like a surfer dude", "Pretend you are in a library",
    "Act like you are completely out of breath"
]

s_hard_actions = [
    "Let chat rename your stream", "No laughing", "Every death = 5 pushups", "Every win = victory dance", 
    "Only communicate with sound effects", "Stream standing up", "Let chat mute your mic randomly", 
    "Act like the game is a horror movie", "Thank your chair after every round", "No speaking English", 
    "Drop your weapon", "Let chat pick background music", "Do 10 jumping jacks", "Pretend to be a telemarketer",
    "No jumping or sprinting", "Let chat write a tweet for you", "Do 5 sit-ups per loss", "Play with monitor tilted",
    "Only use your pistol", "Speak in a monotone voice", "Thank a random object when you win", 
    "Only look at the ceiling for 30 seconds", "No healing items for one game", "Pretend you are crying",
    "Apologize to every enemy you shoot"
]

s_chaos_actions = [
    "Roast yourself", "Compliment opponents", "Call yourself 'The Legend'", "Randomly clap", 
    "Pretend you're lagging", "Speak like Shakespeare", "Let chat decide sensitivity", "Play with one eye closed", 
    "Say 'Skill issue'", "Narrate like a nature documentary", "Change game language", "Spin in chair 3 times", 
    "Act highly suspicious", "Sing a pop song chorus", "Sing the alphabet backwards", 
    "Pretend you forgot how to play", "Act in love with the enemy", "Yell 'Parkour!'", "Do a 360 spin", 
    "Pretend to be a weather reporter", "Max sensitivity", "Speak only in haikus", "Act like a grumpy old man",
    "Bark like a dog when you see an enemy", "Meow every time you reload"
]

s_impossible_actions = [
    "Finish a game without jumping", "No looking at minimap", "Only crouch-walk", "Use weakest weapon", 
    "Don't reload manually", "Play with no HUD", "No sprinting", "Let chat pick your challenge", 
    "Survive without attacking", "Do a dramatic victory speech", "Play blindfolded", "Only use melee", 
    "Do a 2-minute plank", "Minimum screen brightness", "Let chat dictate movement", "Mousepad backwards",
    "Close eyes during firefight", "No armor/shields", "Let chat command when to shoot", "Hands crossed",
    "Only walk backwards", "Do a wall sit", "Unbind reload key", "Pretend you're racing",
    "Play with your keyboard upside down"
]

# Base components for Friends Mode
f_easy_actions = [
    "Tell your funniest childhood story", "Dance", "Do a celebrity impression", "Speak in rhyme", 
    "Laugh like a villain", "Pretend to be a news reporter", "Hop on one foot", "Compliment everyone", 
    "Sing Happy Birthday", "Walk like a model", "Read a text message", "Pretend you are a statue", 
    "Fake British accent", "High five everyone", "Juggle 3 objects", "Lick your elbow", "Baby crying impression",
    "Speak without moving lips", "Do a cartwheel", "Pretend to ride a horse", "Talk like a robot",
    "Hold a staring contest", "Play an invisible guitar", "Make an ugly face", "Act like you are swimming"
]

f_med_actions = [
    "Swap seats", "Let someone style your hair", "Balance a book on your head", "Act like a chicken", 
    "Pretend the floor is lava", "Freeze", "Speak only in questions", "Tell a joke", "Copy the person next to you", 
    "Do a movie scene", "Let someone write your status", "Animal impression", "High-pitched voice", 
    "Sing everything you say", "Balance a spoon on your nose", "Get a funny nickname", "Made-up language",
    "Do 10 burpees", "Fashion model walk", "Draw a mustache", "Sing a scary nursery rhyme", "Touch your toes",
    "Act like a monkey", "Let someone restyle your hair", "Talk with tongue sticking out"
]

f_hard_actions = [
    "Eat a spoon of ketchup", "Wear socks on hands", "Let everyone rename you", "Mimic another player", 
    "Do 20 squats", "Act like a cat", "Alien language", "Pretend you're invisible", "Walk backwards", 
    "Narrate others", "Draw on your arm", "Eat a raw onion slice", "Do 15 pushups", "Call a random contact",
    "Let the group tickle you", "Drink a mixed concoction", "Hold an ice cube", "Post a prank status",
    "Clothes inside out", "Do 30 jumping jacks", "Pretend to be an alien", "Eat plain bread fast",
    "Speak only in whispers", "Act out a movie silently", "Let someone draw on your face with lipstick"
]

f_chaos_actions = [
    "Swap shirts", "Dance with no music", "Act like a zombie", "Laugh without stopping", "Fake cry", 
    "Embarrassing story", "Wear sunglasses indoors", "Walk like a penguin", "Evil laugh", "Speak like a pirate",
    "Switch socks", "Movie quotes only", "Pretend to be a dog", "Drink safe kitchen liquids", "Act out a meme",
    "Embarrassing alarm sound", "Sing everything", "Angry customer", "Blindfolded feeding", "Walk like a crab",
    "Third person", "Interpretive dance", "Act freezing cold", "Banned word", "Terrible superhero"
]

f_extreme_actions = [
    "Group chooses wallpaper", "Emoji from your phone", "Funny pose", "Eat blindfolded", "Imitate laughs", 
    "Song lyrics only", "Funny accessory", "Winner assigns dare", "Silly selfie", "Victory speech for loser",
    "Crazy hairstyle", "Funny selfie to friend", "Spoonful of hot sauce", "Post silly photo", "Give phone away",
    "Confusing text message", "Raw garlic", "Draw unibrow", "Hold plank", "Drink salt water", 
    "Toilet paper mummy", "Bite raw lemon", "Harmless tweet", "Wear blindfold", "Spoonful of mustard"
]

# Base components for Truth or Dare Mode
t_easy_truths = [
    "What is your biggest fear?", "Who was your first crush?", "What is the most embarrassing thing in your room?",
    "Have you ever lied to get out of trouble?", "What is a secret you kept from your parents?",
    "What is the most awkward text you've ever sent?", "Have you ever blamed a fart on someone else?",
    "What is your weirdest habit?", "What is the most childish thing you still do?", "Who is your favorite person here?",
    "What is your worst habit?", "What is your most embarrassing moment?", "Have you ever cheated on a test?",
    "What is the longest you've gone without showering?", "What is your biggest regret?",
    "What is the most embarrassing music you listen to?", "Have you ever stolen anything?",
    "What is the biggest lie you've ever told?", "Have you ever peed in a pool?", "What is your strangest phobia?"
]

t_med_truths = [
    "Have you ever read someone else's text messages?", "What is the most trouble you've ever been in?",
    "Who is the last person you stalked on social media?", "What is the most embarrassing thing you've bought?",
    "Have you ever practiced kissing in a mirror?", "What is the weirdest dream you've ever had?",
    "Who do you have a secret crush on?", "What is the most embarrassing photo of you?",
    "Have you ever been caught in a lie?", "What is a rumor you spread?", "What is your most embarrassing nickname?",
    "Have you ever lied about your age?", "What is the worst date you've ever been on?",
    "Have you ever fake-cried to get something?", "What is the most embarrassing thing you've searched on Google?"
]

t_hard_truths = [
    "What is the meanest thing you've ever done to someone?", "Have you ever stolen from a friend?",
    "What is a secret you swore you would never tell?", "Who in this room do you find the most attractive?",
    "Have you ever been fired from a job?", "What is the most illegal thing you've ever done?",
    "What is the biggest mistake you've ever made?", "Have you ever ruined a surprise party?",
    "What is the worst thing you've ever said to someone?", "Have you ever ghosted someone?",
    "What is the most embarrassing thing you've done for love?", "Have you ever snooped through someone's room?",
    "What is the biggest lie you are telling right now?", "Have you ever broken something and blamed someone else?"
]

def generate_tod_dares(truths, actions, count=100):
    tod_dares = set()
    while len(tod_dares) < count:
        truth = random.choice(truths)
        dare = random.choice(actions)
        tod_dares.add(f"TRUTH: {truth}<br><br>DARE: {dare}.")
    return list(tod_dares)

def generate_dares(actions, durations, count=100):
    dares = set()
    while len(dares) < count:
        action = random.choice(actions)
        dur = random.choice(durations) if durations else ""
        if random.random() > 0.5 and dur:
            dare = f"{action} {dur}."
        else:
            dare = f"{action}."
        
        # Add some random variations to make them unique
        modifiers = ["", " (No cheating!)", " (Chat watches closely)", " (Make it convincing)", " (Give it 100%)", " (Be dramatic)"]
        if random.random() > 0.7:
            dare = dare.replace(".", random.choice(modifiers) + ".")
            
        dares.add(dare)
    return list(dares)

streamer_data = [
    ("Pack 1 - Easy", "bg-green", generate_dares(s_easy_actions, s_easy_durations)),
    ("Pack 2 - Medium", "bg-blue", generate_dares(s_med_actions, s_easy_durations)),
    ("Pack 3 - Hard", "bg-yellow", generate_dares(s_hard_actions, s_easy_durations)),
    ("Pack 4 - Chaos", "bg-green", generate_dares(s_chaos_actions, s_easy_durations)),
    ("Pack 5 - Impossible", "bg-blue", generate_dares(s_impossible_actions, ["for 1 round", "for 5 minutes", "until you die"]))
]

friends_data = [
    ("Easy", "bg-green", generate_dares(f_easy_actions, ["for 1 minute", "for 30 seconds", "for 2 minutes"])),
    ("Medium", "bg-blue", generate_dares(f_med_actions, ["for 1 minute", "for 3 rounds", "for 2 minutes"])),
    ("Hard", "bg-yellow", generate_dares(f_hard_actions, ["for 1 minute", "for 3 rounds", "until next turn"])),
    ("Chaos", "bg-green", generate_dares(f_chaos_actions, ["for 1 minute", "for 5 rounds", "for the rest of the game"])),
    ("Extreme", "bg-blue", generate_dares(f_extreme_actions, ["for 1 minute", "for 2 rounds", "until the game ends"]))
]

tod_data = [
    ("Easy", "bg-green", generate_tod_dares(t_easy_truths, f_easy_actions)),
    ("Medium", "bg-blue", generate_tod_dares(t_med_truths, f_med_actions)),
    ("Hard", "bg-yellow", generate_tod_dares(t_hard_truths, f_hard_actions)),
    ("Chaos", "bg-green", generate_tod_dares(t_med_truths, f_chaos_actions)),
    ("Extreme", "bg-blue", generate_tod_dares(t_hard_truths, f_extreme_actions))
]

w_easy = [
    "speak in rhymes", "sing what you say", "sweat maple syrup", "have spaghetti for hair",
    "wear wet socks forever", "wear shoes two sizes too small", "have an itchy nose", 
    "have a watery eye", "eat a raw potato", "eat a whole lemon", "whisper everything", 
    "shout everything", "walk backwards everywhere", "run everywhere", "lose the ability to read",
    "lose the ability to speak", "have a unibrow", "have no eyebrows", "smell like onions", 
    "smell like garlic", "have a tail", "have horns", "be completely bald", "be completely hairy",
    "hop everywhere", "crawl everywhere"
]

w_med = [
    "drop your phone in a toilet", "text your boss an inappropriate joke", "wear clothes inside out for a year",
    "wear clothes backwards for a year", "feel like you have to sneeze constantly", "feel like you have to hiccup constantly",
    "eat a spoonful of mustard", "eat a spoonful of mayonnaise", "give up your smartphone",
    "give up your computer", "listen to the same song forever", "never hear music again",
    "sleep on the floor", "sleep standing up", "drink spoiled milk", "eat moldy cheese",
    "always be 10 minutes late", "always be 20 minutes early", "run a mile when you cry", "do 50 pushups when you laugh",
    "only be able to use a fork", "only be able to use a spoon", "like an ex's old photo accidentally", "send a screenshot to the wrong person"
]

w_hard = [
    "have your browsing history published", "have your text messages published", "eat a live spider",
    "eat a dead cockroach", "fight a bear", "fight a shark", "lose all your money",
    "lose all your memories", "live in a haunted house", "live in a rat-infested house",
    "wear a clown suit every day", "wear a chicken suit every day", "drink water from a puddle",
    "eat gum from under a desk", "say 'I love you' to your boss", "say 'I love you' to a stranger",
    "walk barefoot on hot coals", "walk barefoot on glass", "have your teeth fall out", "have your hair fall out",
    "be stuck in an elevator with your ex", "be stuck in an elevator with your enemy", "eat a bowl of worms", "eat a bowl of crickets"
]

w_chaos = [
    "scream every time you see a dog", "cry every time you see a cat", "swap bodies with your pet",
    "swap bodies with your worst enemy", "have fingers for toes", "have toes for fingers",
    "dance every time you hear music", "sing every time someone speaks to you", "be chased by angry bees",
    "be chased by wild dogs", "eat a raw onion like an apple", "eat a stick of butter",
    "have a horn on your forehead", "have a tail you can't control", "speak in a baby voice forever",
    "speak in an old man voice forever", "lick a public toilet seat", "lick a public trash can",
    "be constantly covered in glitter", "be constantly sticky", "wear wet socks every day", "wear a wet shirt every day",
    "always smell like garbage", "always smell like wet dog"
]

w_extreme = [
    "tell your biggest secret to everyone", "have everyone tell you their secret",
    "be stranded on a desert island alone", "be stranded with someone you hate",
    "amputate your own arm", "amputate your own leg",
    "be blind", "be deaf", "have no arms", "have no legs",
    "eat human flesh", "eat animal feces", "be possessed by a demon", "be abducted by aliens",
    "live in a prison", "live in a mental asylum", "kill an innocent person", "let ten guilty people go free",
    "lose the ability to love", "lose the ability to be loved", "have a constant migraine", "have a constant toothache",
    "be burned alive", "be buried alive"
]

def generate_wyr(pool, punishments, count=100):
    dares = set()
    while len(dares) < count:
        a, b = random.sample(pool, 2)
        punishment = random.choice(punishments)
        dares.add(f"Would you rather {a}, OR {b}?<br><br><strong style='color:#d32f2f;'>PUNISHMENT IF YOU REFUSE:</strong> {punishment}.")
    return list(dares)

wyr_data = [
    ("Easy", "bg-green", generate_wyr(w_easy, f_easy_actions)),
    ("Medium", "bg-blue", generate_wyr(w_med, f_med_actions)),
    ("Hard", "bg-yellow", generate_wyr(w_hard, f_hard_actions)),
    ("Chaos", "bg-green", generate_wyr(w_chaos, f_chaos_actions)),
    ("Extreme", "bg-blue", generate_wyr(w_extreme, f_extreme_actions))
]

def format_pack(mode_data):
    packs = []
    for title, color, dares in mode_data:
        dares_str = ',\n            '.join([f'"{d}"' for d in dares])
        pack = f"""    {{
        title: "{title}",
        color: "{color}",
        dares: [
            {dares_str}
        ]
    }}"""
        packs.append(pack)
    return ",\n".join(packs)

js_content = f"""const streamerDares = [
{format_pack(streamer_data)}
];

const friendsDares = [
{format_pack(friends_data)}
];

const truthOrDareDares = [
{format_pack(tod_data)}
];

const wouldYouRatherDares = [
{format_pack(wyr_data)}
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
"""

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Generated data.js with 2000 dares (100 per pack across 4 modes).")
