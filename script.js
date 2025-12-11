const gameContainer = document.getElementById('game-container');

// --- GAME DATA ---

// 1. Basic Elements (Common HS Level)
const basicElementsData = [
    { symbol: 'H', name: '水素' }, { symbol: 'He', name: 'ヘリウム' },
    { symbol: 'Li', name: 'リチウム' }, { symbol: 'Be', name: 'ベリリウム' },
    { symbol: 'B', name: 'ホウ素' }, { symbol: 'C', name: '炭素' },
    { symbol: 'N', name: '窒素' }, { symbol: 'O', name: '酸素' },
    { symbol: 'F', name: 'フッ素' }, { symbol: 'Ne', name: 'ネオン' },
    { symbol: 'Na', name: 'ナトリウム' }, { symbol: 'Mg', name: 'マグネシウム' },
    { symbol: 'Al', name: 'アルミニウム' }, { symbol: 'Si', name: 'ケイ素' },
    { symbol: 'P', name: 'リン' }, { symbol: 'S', name: '硫黄' },
    { symbol: 'Cl', name: '塩素' }, { symbol: 'Ar', name: 'アルゴン' },
    { symbol: 'K', name: 'カリウム' }, { symbol: 'Ca', name: 'カルシウム' },
    { symbol: 'Fe', name: '鉄' }, { symbol: 'Cu', name: '銅' },
    { symbol: 'Zn', name: '亜鉛' }, { symbol: 'Ag', name: '銀' },
    { symbol: 'Au', name: '金' }, { symbol: 'Hg', name: '水銀' },
    { symbol: 'Pb', name: '鉛' }, { symbol: 'Pt', name: '白金' }
];

// 2. ALL 118 ELEMENTS (Master Mode)
// Compressed format to save space, but contains all 118
const allElementsData = [
    {n:1,s:'H',j:'水素'},{n:2,s:'He',j:'ヘリウム'},{n:3,s:'Li',j:'リチウム'},{n:4,s:'Be',j:'ベリリウム'},
    {n:5,s:'B',j:'ホウ素'},{n:6,s:'C',j:'炭素'},{n:7,s:'N',j:'窒素'},{n:8,s:'O',j:'酸素'},
    {n:9,s:'F',j:'フッ素'},{n:10,s:'Ne',j:'ネオン'},{n:11,s:'Na',j:'ナトリウム'},{n:12,s:'Mg',j:'マグネシウム'},
    {n:13,s:'Al',j:'アルミニウム'},{n:14,s:'Si',j:'ケイ素'},{n:15,s:'P',j:'リン'},{n:16,s:'S',j:'硫黄'},
    {n:17,s:'Cl',j:'塩素'},{n:18,s:'Ar',j:'アルゴン'},{n:19,s:'K',j:'カリウム'},{n:20,s:'Ca',j:'カルシウム'},
    {n:21,s:'Sc',j:'スカンジウム'},{n:22,s:'Ti',j:'チタン'},{n:23,s:'V',j:'バナジウム'},{n:24,s:'Cr',j:'クロム'},
    {n:25,s:'Mn',j:'マンガン'},{n:26,s:'Fe',j:'鉄'},{n:27,s:'Co',j:'コバルト'},{n:28,s:'Ni',j:'ニッケル'},
    {n:29,s:'Cu',j:'銅'},{n:30,s:'Zn',j:'亜鉛'},{n:31,s:'Ga',j:'ガリウム'},{n:32,s:'Ge',j:'ゲルマニウム'},
    {n:33,s:'As',j:'ヒ素'},{n:34,s:'Se',j:'セレン'},{n:35,s:'Br',j:'臭素'},{n:36,s:'Kr',j:'クリプトン'},
    {n:37,s:'Rb',j:'ルビジウム'},{n:38,s:'Sr',j:'ストロンチウム'},{n:39,s:'Y',j:'イットリウム'},{n:40,s:'Zr',j:'ジルコニウム'},
    {n:41,s:'Nb',j:'ニオブ'},{n:42,s:'Mo',j:'モリブデン'},{n:43,s:'Tc',j:'テクネチウム'},{n:44,s:'Ru',j:'ルテニウム'},
    {n:45,s:'Rh',j:'ロジウム'},{n:46,s:'Pd',j:'パラジウム'},{n:47,s:'Ag',j:'銀'},{n:48,s:'Cd',j:'カドミウム'},
    {n:49,s:'In',j:'インジウム'},{n:50,s:'Sn',j:'スズ'},{n:51,s:'Sb',j:'アンチモン'},{n:52,s:'Te',j:'テルル'},
    {n:53,s:'I',j:'ヨウ素'},{n:54,s:'Xe',j:'キセノン'},{n:55,s:'Cs',j:'セシウム'},{n:56,s:'Ba',j:'バリウム'},
    {n:57,s:'La',j:'ランタン'},{n:58,s:'Ce',j:'セリウム'},{n:59,s:'Pr',j:'プラセオジム'},{n:60,s:'Nd',j:'ネオジム'},
    {n:61,s:'Pm',j:'プロメチウム'},{n:62,s:'Sm',j:'サマリウム'},{n:63,s:'Eu',j:'ユウロピウム'},{n:64,s:'Gd',j:'ガドリニウム'},
    {n:65,s:'Tb',j:'テルビウム'},{n:66,s:'Dy',j:'ジスプロシウム'},{n:67,s:'Ho',j:'ホルミウム'},{n:68,s:'Er',j:'エルビウム'},
    {n:69,s:'Tm',j:'ツリウム'},{n:70,s:'Yb',j:'イッテルビウム'},{n:71,s:'Lu',j:'ルテチウム'},{n:72,s:'Hf',j:'ハフニウム'},
    {n:73,s:'Ta',j:'タンタル'},{n:74,s:'W',j:'タングステン'},{n:75,s:'Re',j:'レニウム'},{n:76,s:'Os',j:'オスミウム'},
    {n:77,s:'Ir',j:'イリジウム'},{n:78,s:'Pt',j:'白金'},{n:79,s:'Au',j:'金'},{n:80,s:'Hg',j:'水銀'},
    {n:81,s:'Tl',j:'タリウム'},{n:82,s:'Pb',j:'鉛'},{n:83,s:'Bi',j:'ビスマス'},{n:84,s:'Po',j:'ポロニウム'},
    {n:85,s:'At',j:'アスタチン'},{n:86,s:'Rn',j:'ラドン'},{n:87,s:'Fr',j:'フランシウム'},{n:88,s:'Ra',j:'ラジウム'},
    {n:89,s:'Ac',j:'アクチニウム'},{n:90,s:'Th',j:'トリウム'},{n:91,s:'Pa',j:'プロトアクチニウム'},{n:92,s:'U',j:'ウラン'},
    {n:93,s:'Np',j:'ネプツニウム'},{n:94,s:'Pu',j:'プルトニウム'},{n:95,s:'Am',j:'アメリシウム'},{n:96,s:'Cm',j:'キュリウム'},
    {n:97,s:'Bk',j:'バークリウム'},{n:98,s:'Cf',j:'カリホルニウム'},{n:99,s:'Es',j:'アインスタイニウム'},{n:100,s:'Fm',j:'フェルミウム'},
    {n:101,s:'Md',j:'メンデレビウム'},{n:102,s:'No',j:'ノーベリウム'},{n:103,s:'Lr',j:'ローレンシウム'},{n:104,s:'Rf',j:'ラザホージウム'},
    {n:105,s:'Db',j:'ドブニウム'},{n:106,s:'Sg',j:'シーボーギウム'},{n:107,s:'Bh',j:'ボーリウム'},{n:108,s:'Hs',j:'ハッシウム'},
    {n:109,s:'Mt',j:'マイトネリウム'},{n:110,s:'Ds',j:'ダームスタチウム'},{n:111,s:'Rg',j:'レントゲニウム'},{n:112,s:'Cn',j:'コペルニシウム'},
    {n:113,s:'Nh',j:'ニホニウム'},{n:114,s:'Fl',j:'フレロビウム'},{n:115,s:'Mc',j:'モスコビウム'},{n:116,s:'Lv',j:'リバモリウム'},
    {n:117,s:'Ts',j:'テネシン'},{n:118,s:'Og',j:'オガネソン'}
];

// 3. Equation Balancing Data
const equationsData = [
    { 
        parts: ['<input type="number" id="c1"> H₂', '+', '<input type="number" id="c2"> O₂', '→', '<input type="number" id="c3"> H₂O'], 
        answer: [2, 1, 2],
        desc: '水の生成'
    },
    { 
        parts: ['<input type="number" id="c1"> N₂', '+', '<input type="number" id="c2"> H₂', '→', '<input type="number" id="c3"> NH₃'], 
        answer: [1, 3, 2],
        desc: 'アンモニアの生成 (ハーバー・ボッシュ法)'
    },
    { 
        parts: ['<input type="number" id="c1"> Cu', '+', '<input type="number" id="c2"> O₂', '→', '<input type="number" id="c3"> CuO'], 
        answer: [2, 1, 2],
        desc: '銅の酸化'
    },
    { 
        parts: ['<input type="number" id="c1"> CH₄', '+', '<input type="number" id="c2"> O₂', '→', '<input type="number" id="c3"> CO₂', '+', '<input type="number" id="c4"> H₂O'], 
        answer: [1, 2, 1, 2],
        desc: 'メタンの燃焼'
    }
];

// 4. pH Data
const phData = [
    { name: 'レモン汁', type: 'acid', label: '酸性' },
    { name: '石けん水', type: 'base', label: 'アルカリ性' },
    { name: '食塩水', type: 'neutral', label: '中性' },
    { name: '炭酸飲料', type: 'acid', label: '酸性' },
    { name: 'アンモニア水', type: 'base', label: 'アルカリ性' },
    { name: '胃液', type: 'acid', label: '酸性' },
    { name: '重曹 (水溶液)', type: 'base', label: 'アルカリ性' },
    { name: '純水', type: 'neutral', label: '中性' },
    { name: '酢 (酢酸)', type: 'acid', label: '酸性' },
    { name: '水酸化ナトリウム水溶液', type: 'base', label: 'アルカリ性' }
];


// --- NAVIGATION FUNCTIONS ---

function showHome() {
    gameContainer.innerHTML = `
        <div class="hero">
            <h1>化学の世界へようこそ！</h1>
            <p>高校化学の基礎からマニアックな元素まで。</p>
            <div class="menu-grid">
                <div class="menu-card" onclick="loadGame('elements')">
                    <h2>🔥 基礎元素クイズ</h2>
                    <p>高校化学で必須の基本20個+α！</p>
                </div>
                <div class="menu-card special-card" onclick="loadGame('master')">
                    <h2>💀 周期表マスター</h2>
                    <p>水素からオガネソンまで全118元素に挑戦！</p>
                </div>
                <div class="menu-card" onclick="loadGame('equations')">
                    <h2>⚖️ 化学反応式パズル</h2>
                    <p>係数を合わせて反応式を完成させよう。</p>
                </div>
                <div class="menu-card" onclick="loadGame('ph')">
                    <h2>🍋 酸性 vs アルカリ性</h2>
                    <p>身近な液体を仕分けしよう。</p>
                </div>
            </div>
        </div>
    `;
}

function loadGame(gameType) {
    if (gameType === 'elements') startElementsGame(basicElementsData, '基礎元素クイズ');
    if (gameType === 'master') startElementsGame(allElementsData, '周期表マスター118');
    if (gameType === 'equations') startEquationsGame();
    if (gameType === 'ph') startPhGame();
}


// --- GAME 1 & 2: ELEMENTS QUIZ ENGINE ---
// Refactored to handle both Basic and Master modes

function startElementsGame(dataset, title) {
    let score = 0;
    let questionCount = 0;
    const maxQuestions = 10; // Increased to 10 for better gameplay

    function nextQuestion() {
        if (questionCount >= maxQuestions) {
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>${title} 結果</h2>
                    <p class="question-box">${score} / ${maxQuestions} 正解</p>
                    <p>${score === 10 ? '全問正解！素晴らしい！' : 'お疲れ様でした。'}</p>
                    <button class="game-btn" onclick="loadGame('${title === '基礎元素クイズ' ? 'elements' : 'master'}')">もう一度</button>
                    <button class="game-btn" onclick="showHome()">ホーム</button>
                </div>
            `;
            return;
        }

        // Pick random element
        const currentEl = dataset[Math.floor(Math.random() * dataset.length)];
        
        // Pick 3 wrong answers
        let options = [currentEl.name || currentEl.j]; // Handle .name or .j (Japanese) key
        while (options.length < 4) {
            let randomEl = dataset[Math.floor(Math.random() * dataset.length)];
            let name = randomEl.name || randomEl.j;
            if (!options.includes(name)) options.push(name);
        }
        options.sort(() => Math.random() - 0.5); // Shuffle

        // For Master mode, show Atomic Number to help hint
        const atomicNumDisplay = currentEl.n ? `<div class="atomic-number">原子番号 ${currentEl.n}</div>` : '';

        gameContainer.innerHTML = `
            <div class="game-area">
                <h2>${title} (${questionCount + 1}/${maxQuestions})</h2>
                ${atomicNumDisplay}
                <div class="question-box">${currentEl.symbol || currentEl.s}</div>
                <p>この記号の元素名は？</p>
                <div class="options-grid" id="options-area"></div>
                <div class="feedback" id="feedback"></div>
            </div>
        `;

        const optionsArea = document.getElementById('options-area');
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.innerText = opt;
            // Handle differences in data keys (Basic uses .name, Master uses .j)
            const correctName = currentEl.name || currentEl.j;
            btn.onclick = () => checkAnswer(opt, correctName);
            optionsArea.appendChild(btn);
        });
    }

    function checkAnswer(selected, correct) {
        const feedback = document.getElementById('feedback');
        if (selected === correct) {
            score++;
            feedback.style.color = 'var(--correct)';
            feedback.innerText = '正解！ ⭕';
        } else {
            feedback.style.color = 'var(--wrong)';
            feedback.innerText = `不正解... 答え: ${correct}`;
        }
        questionCount++;
        setTimeout(nextQuestion, 1500);
    }

    nextQuestion();
}


// --- GAME 3: EQUATION BALANCER ---

function startEquationsGame() {
    let currentEqIndex = 0;

    function renderEquation() {
        if (currentEqIndex >= equationsData.length) {
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>全問クリア！</h2>
                    <p>化学反応式の達人ですね。</p>
                    <button class="game-btn" onclick="startEquationsGame()">もう一度やる</button>
                    <button class="game-btn" onclick="showHome()">ホームに戻る</button>
                </div>
            `;
            return;
        }

        const eq = equationsData[currentEqIndex];
        
        gameContainer.innerHTML = `
            <div class="game-area">
                <h2>化学反応式パズル</h2>
                <p>${eq.desc}</p>
                <div class="equation-display">
                    ${eq.parts.join(' ')}
                </div>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">係数が1の場合は「1」を入力してね。</p>
                <button class="game-btn" onclick="checkEquation()">答える</button>
                <div class="feedback" id="eq-feedback"></div>
            </div>
        `;
    }

    window.checkEquation = function() {
        const eq = equationsData[currentEqIndex];
        // Gather all inputs dynamically
        const inputs = [];
        for(let i=1; i<=eq.answer.length; i++) {
            const el = document.getElementById(`c${i}`);
            if(el) inputs.push(parseInt(el.value) || 0);
        }

        const feedback = document.getElementById('eq-feedback');

        // Check if arrays match
        const isCorrect = JSON.stringify(inputs) === JSON.stringify(eq.answer);

        if (isCorrect) {
            feedback.style.color = 'var(--correct)';
            feedback.innerText = '素晴らしい！正解です。';
            currentEqIndex++;
            setTimeout(renderEquation, 1500);
        } else {
            feedback.style.color = 'var(--wrong)';
            feedback.innerText = '数が合いません。もう一度！';
        }
    };

    renderEquation();
}


// --- GAME 4: pH SORTING ---

function startPhGame() {
    let score = 0;
    let count = 0;
    const maxQ = 5;

    function nextPhQ() {
        if (count >= maxQ) {
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>結果発表</h2>
                    <p class="question-box">${score} / ${maxQ} 正解</p>
                    <button class="game-btn" onclick="startPhGame()">もう一度</button>
                    <button class="game-btn" onclick="showHome()">ホーム</button>
                </div>
            `;
            return;
        }

        const q = phData[Math.floor(Math.random() * phData.length)];

        gameContainer.innerHTML = `
            <div class="game-area">
                <h2>酸・塩基仕分け (${count + 1}/${maxQ})</h2>
                <div class="question-box">${q.name}</div>
                <p>これはどれ？</p>
                <div class="options-grid" style="grid-template-columns: 1fr 1fr 1fr;">
                    <button class="game-btn" style="background:#E74C3C" onclick="checkPh('acid', '${q.type}')">酸性</button>
                    <button class="game-btn" style="background:#2ECC71" onclick="checkPh('neutral', '${q.type}')">中性</button>
                    <button class="game-btn" style="background:#3498DB" onclick="checkPh('base', '${q.type}')">アルカリ性</button>
                </div>
                <div class="feedback" id="ph-feedback"></div>
            </div>
        `;
    }

    window.checkPh = function(guess, answer) {
        const feedback = document.getElementById('ph-feedback');
        if (guess === answer) {
            score++;
            feedback.style.color = 'var(--correct)';
            feedback.innerText = '正解！';
        } else {
            feedback.style.color = 'var(--wrong)';
            let ansText = answer === 'acid' ? '酸性' : answer === 'base' ? 'アルカリ性' : '中性';
            feedback.innerText = `間違い！正解は ${ansText}`;
        }
        count++;
        setTimeout(nextPhQ, 1500);
    }

    nextPhQ();
}

// Initialize
showHome();
