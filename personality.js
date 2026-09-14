/*
 * DARE STACKS - PERSONALITY CHECK
 * 25 Question Personality Snapshot
 */

(function () {
    "use strict";

    // ==========================================
    // QUESTIONS
    // ==========================================

    const questions = [
        // Social Energy
        ["After a busy week, I feel energized by spending time with other people.", "social", false],
        ["I am comfortable starting a conversation with someone I have just met.", "social", false],
        ["At a party, I enjoy meeting many different people.", "social", false],
        ["I prefer thinking quietly before speaking in a group.", "social", true],
        ["I would rather have a deep conversation with one person than chat with a large group.", "social", true],

        // Openness
        ["I enjoy trying new things even when I don't know what to expect.", "openness", false],
        ["I like exploring unusual ideas, hobbies, or viewpoints.", "openness", false],
        ["I often imagine different ways a situation could turn out.", "openness", false],
        ["I usually prefer familiar routines over experimenting with something new.", "openness", true],
        ["I enjoy creative activities such as music, art, writing, or design.", "openness", false],

        // Conscientiousness
        ["I make plans and usually follow through on them.", "conscientiousness", false],
        ["I keep track of important tasks instead of leaving them until the last minute.", "conscientiousness", false],
        ["When I start a project, I like finishing it properly.", "conscientiousness", false],
        ["I often act first and think about the consequences later.", "conscientiousness", true],
        ["I keep my things and responsibilities reasonably organized.", "conscientiousness", false],

        // Agreeableness
        ["I try to understand how other people feel before judging them.", "agreeableness", false],
        ["I am willing to compromise when it helps keep peace in a group.", "agreeableness", false],
        ["People can usually rely on me when they need help.", "agreeableness", false],
        ["I enjoy friendly competition, even when I really want to win.", "agreeableness", true],
        ["I usually give people the benefit of the doubt.", "agreeableness", false],

        // Emotional Stability
        ["I stay calm when plans suddenly change.", "stability", false],
        ["I can recover fairly quickly after something embarrassing or disappointing happens.", "stability", false],
        ["When I have a lot to do, I can usually keep my emotions under control.", "stability", false],
        ["I worry about small problems more than I would like to.", "stability", true],
        ["I can usually make decisions without overthinking them for too long.", "stability", false]
    ];

    const answers = [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
    ];

    let current = 0;
    let userAnswers = new Array(questions.length).fill(null);


    // ==========================================
    // CSS
    // ==========================================

    const style = document.createElement("style");

    style.textContent = `
        .personality-screen {
            min-height: 100%;
            width: 100%;
        }

        .personality-intro,
        .personality-test,
        .personality-result {
            width: min(760px, calc(100% - 30px));
            margin: 0 auto;
        }

        .personality-intro {
            text-align: center;
            padding: 30px 0 70px;
        }

        .personality-icon,
        .personality-result-icon {
            font-size: 4.5rem;
            margin-bottom: 10px;
        }

        .personality-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin: 25px 0;
        }

        .personality-info span {
            background: #191919;
            border: 1px solid rgba(255,255,255,.1);
            padding: 10px 15px;
            border-radius: 30px;
            color: #ddd;
            font-size: .85rem;
        }

        .personality-description {
            max-width: 620px;
            margin: 25px auto;
            color: var(--text-secondary, #aaa);
            line-height: 1.6;
        }

        .personality-warning {
            max-width: 620px;
            margin: 20px auto;
            color: var(--text-secondary, #999);
            font-size: .8rem;
            line-height: 1.5;
        }

        .personality-start,
        .personality-next {
            border: none;
            background: #fff;
            color: #000;
            padding: 14px 24px;
            border-radius: 30px;
            font: inherit;
            font-weight: 700;
            cursor: pointer;
            transition: transform .2s, opacity .2s;
        }

        .personality-start:hover,
        .personality-next:hover:not(:disabled) {
            transform: translateY(-2px);
        }

        .personality-next:disabled {
            opacity: .35;
            cursor: not-allowed;
        }

        .personality-progress-header {
            display: flex;
            justify-content: space-between;
            color: var(--text-secondary, #aaa);
            font-size: .85rem;
            margin-bottom: 8px;
        }

        .personality-progress {
            height: 8px;
            width: 100%;
            background: #252525;
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 20px;
        }

        .personality-progress > div {
            height: 100%;
            background: var(--card-green, #7bd88f);
            border-radius: 20px;
            transition: width .3s ease;
        }

        .personality-question-card {
            background: var(--card-white, #fff);
            color: #000;
            border-radius: 28px;
            padding: 30px;
            box-shadow: 0 15px 40px rgba(0,0,0,.35);
        }

        .personality-question-number {
            width: 44px;
            height: 44px;
            background: #000;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .personality-question-card h2 {
            font-size: clamp(1.3rem, 3vw, 2rem);
            line-height: 1.4;
            margin-bottom: 25px;
        }

        .personality-options {
            display: grid;
            gap: 10px;
        }

        .personality-option {
            width: 100%;
            border: 2px solid #ddd;
            background: #fff;
            color: #111;
            border-radius: 15px;
            padding: 15px;
            display: flex;
            align-items: center;
            gap: 12px;
            text-align: left;
            font: inherit;
            cursor: pointer;
            transition: .2s;
        }

        .personality-option:hover {
            background: #f3f3f3;
            transform: translateX(3px);
        }

        .personality-option.selected {
            border-color: #000;
            background: #eee;
            font-weight: 700;
        }

        .personality-radio {
            width: 18px;
            height: 18px;
            border: 2px solid #777;
            border-radius: 50%;
            flex-shrink: 0;
        }

        .personality-option.selected .personality-radio {
            border: 5px solid #000;
        }

        .personality-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin-top: 25px;
        }

        .personality-result {
            text-align: center;
            padding: 20px 0 70px;
        }

        .personality-result h1 {
            font-size: clamp(3rem, 9vw, 5.5rem);
            margin: 10px 0;
        }

        .personality-social-description {
            color: #bbb;
            max-width: 620px;
            margin: auto;
            line-height: 1.6;
        }

        .personality-strongest {
            margin: 25px 0;
            color: #bbb;
        }

        .personality-strongest strong {
            color: #fff;
        }

        .personality-traits {
            display: grid;
            gap: 12px;
            text-align: left;
        }

        .personality-trait {
            background: #181818;
            border: 1px solid rgba(255,255,255,.08);
            border-radius: 18px;
            padding: 18px;
        }

        .personality-trait-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
        }

        .personality-trait-bar {
            height: 9px;
            background: #303030;
            border-radius: 20px;
            overflow: hidden;
        }

        .personality-trait-bar > div {
            height: 100%;
            background: var(--card-green, #7bd88f);
            border-radius: 20px;
            transition: width .7s ease;
        }

        .personality-trait-description {
            color: #999;
            font-size: .83rem;
            line-height: 1.45;
            margin-top: 9px;
        }

        .personality-result-actions {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 30px;
        }

        @media (max-width: 600px) {

            .personality-intro,
            .personality-test,
            .personality-result {
                width: calc(100% - 20px);
            }

            .personality-question-card {
                padding: 22px;
            }

            .personality-navigation {
                flex-direction: column;
            }

            .personality-navigation button {
                width: 100%;
            }

            .personality-info {
                flex-direction: column;
            }
        }
    `;

    document.head.appendChild(style);


    // ==========================================
    // APP CONTAINER
    // ==========================================

    function getApp() {

        return window.appElement ||
               document.getElementById("app");

    }


    // ==========================================
    // INTRO SCREEN
    // ==========================================

    window.renderPersonalityIntro = function () {

        current = 0;

        userAnswers =
            new Array(questions.length).fill(null);

        const app = getApp();

        if (!app) {

            alert(
                "Dare Stacks app container was not found."
            );

            return;
        }

        app.innerHTML = `

            <div class="screen active personality-screen">

                <div class="back-btn-container">

                    <button
                        class="btn-back"
                        onclick="renderHomeScreen()">

                        ↩ Back

                    </button>

                </div>


                <div class="personality-intro">

                    <div class="personality-icon">
                        🧠
                    </div>


                    <h1 class="selection-title">
                        Personality Check
                    </h1>


                    <p class="selection-subtitle">

                        Discover your social style and
                        personality traits through
                        25 quick questions.

                    </p>


                    <div class="personality-info">

                        <span>
                            ⏱️ 3–5 minutes
                        </span>

                        <span>
                            🧠 25 questions
                        </span>

                        <span>
                            ✨ No right answers
                        </span>

                    </div>


                    <div class="personality-description">

                        <p>

                            Answer honestly based on how
                            you normally behave. At the end,
                            you'll get a fun personality snapshot.

                        </p>

                    </div>


                    <p class="personality-warning">

                        This is a fun self-reflection tool
                        and is not a psychological diagnosis.

                    </p>


                    <button
                        class="personality-start"
                        onclick="startPersonalityTest()">

                        Start Personality Test →

                    </button>

                </div>

            </div>
        `;
    };


    // ==========================================
    // START TEST
    // ==========================================

    window.startPersonalityTest = function () {

        current = 0;

        userAnswers =
            new Array(questions.length).fill(null);

        renderQuestion();

    };


    // ==========================================
    // QUESTION SCREEN
    // ==========================================

    function renderQuestion() {

        const app = getApp();

        const q =
            questions[current];

        const selected =
            userAnswers[current];

        const progress =
            Math.round(
                (current / questions.length) * 100
            );


        app.innerHTML = `

            <div class="screen active personality-screen">

                <div class="back-btn-container">

                    <button
                        class="btn-back"
                        onclick="renderPersonalityIntro()">

                        ↩ Restart

                    </button>

                </div>


                <div class="personality-test">


                    <div class="personality-progress-header">

                        <span>

                            Question
                            ${current + 1}
                            of
                            ${questions.length}

                        </span>

                        <span>
                            ${progress}%
                        </span>

                    </div>


                    <div class="personality-progress">

                        <div
                            style="width:${progress}%">
                        </div>

                    </div>


                    <div class="personality-question-card">


                        <div class="personality-question-number">

                            Q${current + 1}

                        </div>


                        <h2>
                            ${escapeHtml(q[0])}
                        </h2>


                        <div class="personality-options">

                            ${answers.map(
                                (answer, i) => `

                                <button

                                    class="
                                        personality-option
                                        ${selected === i + 1
                                            ? "selected"
                                            : ""}
                                    "

                                    onclick="
                                        selectPersonalityAnswer(
                                            ${i + 1}
                                        )
                                    ">

                                    <span
                                        class="personality-radio">
                                    </span>

                                    <span>
                                        ${answer}
                                    </span>

                                </button>

                            `
                            ).join("")}

                        </div>


                        <div class="personality-navigation">


                            <button
                                class="btn-back"
                                onclick="
                                    previousPersonalityQuestion()
                                "

                                ${current === 0
                                    ? "disabled"
                                    : ""}>

                                ← Previous

                            </button>


                            <button
                                class="personality-next"
                                onclick="
                                    nextPersonalityQuestion()
                                "

                                ${selected === null
                                    ? "disabled"
                                    : ""}>

                                ${
                                    current ===
                                    questions.length - 1

                                    ? "See My Result ✨"

                                    : "Next →"
                                }

                            </button>


                        </div>


                    </div>

                </div>

            </div>
        `;
    }


    // ==========================================
    // SELECT ANSWER
    // ==========================================

    window.selectPersonalityAnswer = function (value) {

        userAnswers[current] = value;

        renderQuestion();

    };


    // ==========================================
    // PREVIOUS QUESTION
    // ==========================================

    window.previousPersonalityQuestion = function () {

        if (current > 0) {

            current--;

            renderQuestion();

        }

    };


    // ==========================================
    // NEXT QUESTION
    // ==========================================

    window.nextPersonalityQuestion = function () {

        if (userAnswers[current] === null) {

            return;

        }


        if (current < questions.length - 1) {

            current++;

            renderQuestion();

        } else {

            renderResult();

        }

    };


    // ==========================================
    // CALCULATE SCORES
    // ==========================================

    function calculateScores() {

        const scores = {

            social: [],
            openness: [],
            conscientiousness: [],
            agreeableness: [],
            stability: []

        };


        questions.forEach(
            (q, i) => {

                let value =
                    userAnswers[i];


                if (q[2]) {

                    value =
                        6 - value;

                }


                scores[q[1]].push(value);

            }
        );


        const result = {};


        Object.keys(scores).forEach(
            trait => {

                const total =
                    scores[trait].reduce(
                        (a, b) => a + b,
                        0
                    );


                const average =
                    total /
                    scores[trait].length;


                result[trait] =
                    Math.round(
                        ((average - 1) / 4) * 100
                    );

            }
        );


        return result;

    }


    // ==========================================
    // RESULT SCREEN
    // ==========================================

    function renderResult() {

        const app = getApp();

        const scores =
            calculateScores();


        let socialType;


        if (scores.social >= 65) {

            socialType =
                "Extrovert";

        } else if (scores.social <= 35) {

            socialType =
                "Introvert";

        } else {

            socialType =
                "Ambivert";

        }


        let socialDescription;


        if (socialType === "Extrovert") {

            socialDescription =
                "You tend to gain energy from social interaction, conversations and being around people.";

        } else if (socialType === "Introvert") {

            socialDescription =
                "You tend to recharge through quiet time and often prefer smaller, deeper interactions.";

        } else {

            socialDescription =
                "You can enjoy social situations while also appreciating personal space and quiet time.";

        }


        const traits = [

            {
                name: "Social Energy",
                icon: "👥",
                score: scores.social,
                description:
                    socialType === "Extrovert"

                    ? "You tend to enjoy interaction and social activity."

                    : socialType === "Introvert"

                    ? "You tend to recharge through quiet time."

                    : "You can enjoy people while also valuing personal space."
            },


            {
                name: "Openness",
                icon: "🌈",
                score: scores.openness,
                description:
                    scores.openness >= 65

                    ? "You tend to be curious, imaginative and open to new experiences."

                    : "You often appreciate familiar, practical and proven approaches."
            },


            {
                name: "Conscientiousness",
                icon: "🎯",
                score: scores.conscientiousness,
                description:
                    scores.conscientiousness >= 65

                    ? "You tend to be organized, responsible and goal-focused."

                    : "You may prefer flexibility and spontaneity over strict structure."
            },


            {
                name: "Agreeableness",
                icon: "🤝",
                score: scores.agreeableness,
                description:
                    scores.agreeableness >= 65

                    ? "You tend to be cooperative, empathetic and considerate."

                    : "You may be more direct, competitive and independent."
            },


            {
                name: "Emotional Steadiness",
                icon: "🧘",
                score: scores.stability,
                description:
                    scores.stability >= 65

                    ? "You generally stay composed and recover well from setbacks."

                    : "You may experience stress strongly and need time to process it."
            }

        ];


        const strongest =
            [...traits].sort(
                (a, b) => b.score - a.score
            )[0];


        app.innerHTML = `

            <div class="screen active personality-screen">


                <div class="back-btn-container">

                    <button
                        class="btn-back"
                        onclick="renderHomeScreen()">

                        ↩ Home

                    </button>

                </div>


                <div class="personality-result">


                    <div class="personality-result-icon">
                        ✨
                    </div>


                    <p class="result-kicker">

                        YOUR PERSONALITY SNAPSHOT

                    </p>


                    <h1>
                        ${socialType}
                    </h1>


                    <p class="personality-social-description">

                        ${socialDescription}

                    </p>


                    <p class="personality-strongest">

                        Your strongest measured trait is

                        <strong>

                            ${strongest.icon}
                            ${strongest.name}

                        </strong>

                    </p>


                    <div class="personality-traits">


                        ${traits.map(
                            trait => `

                            <div class="personality-trait">


                                <div
                                    class="personality-trait-top">

                                    <span>

                                        ${trait.icon}
                                        ${trait.name}

                                    </span>


                                    <strong>

                                        ${trait.score}%

                                    </strong>

                                </div>


                                <div
                                    class="personality-trait-bar">

                                    <div
                                        style="
                                            width:${trait.score}%
                                        ">
                                    </div>

                                </div>


                                <div
                                    class="
                                        personality-trait-description
                                    ">

                                    ${trait.description}

                                </div>


                            </div>

                        `
                        ).join("")}


                    </div>


                    <div
                        class="personality-result-actions">


                        <button
                            class="personality-start"
                            onclick="
                                startPersonalityTest()
                            ">

                            🔄 Retake Test

                        </button>


                        <button
                            class="btn-back"
                            onclick="
                                renderHomeScreen()
                            ">

                            Back to Dare Stacks

                        </button>


                    </div>


                    <p class="personality-warning">

                        This result is for fun and
                        self-reflection. It is not a
                        psychological diagnosis.

                    </p>


                </div>

            </div>
        `;
    }


    // ==========================================
    // HTML ESCAPE
    // ==========================================

    function escapeHtml(value) {

        return String(value)

            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

})();
