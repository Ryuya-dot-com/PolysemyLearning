// 学習データ
let experimentData = {
    participantInfo: {},
    pretestRecall: [],
    pretestRecognition: [],
    posttestRecall: [],
    posttestRecognition: [],
    learningLog: [],
    startTime: null,
    endTime: null
};

// 語彙データ
const vocabularyData = [
    // 多義語
    {type: 'polysemous', word: 'body', knownMeaning: '体、身体', targetMeaning: '組織、団体', definition: '共通の目的を持って集まった人々の集まり', category: 'polysemous'},
    {type: 'polysemous', word: 'point', knownMeaning: '点、得点', targetMeaning: '目的、要点', definition: '何かを行う理由や目標となるもの', category: 'polysemous'},
    {type: 'polysemous', word: 'key', knownMeaning: '鍵', targetMeaning: 'キー、ボタン', definition: 'コンピューターや楽器などの押して操作する部分', category: 'polysemous'},
    {type: 'polysemous', word: 'nail', knownMeaning: '爪', targetMeaning: '釘', definition: '木材などを接合するために打ち込む金属の棒', category: 'polysemous'},
    {type: 'polysemous', word: 'board', knownMeaning: '板', targetMeaning: '食事、賄い', definition: '宿泊施設などで提供される食事サービス', category: 'polysemous'},
    {type: 'polysemous', word: 'chair', knownMeaning: '椅子', targetMeaning: '議長、委員長', definition: '会議や組織の責任者として進行を担当する人', category: 'polysemous'},
    {type: 'polysemous', word: 'game', knownMeaning: 'ゲーム、試合', targetMeaning: '獲物', definition: '狩猟やスポーツの対象となる動物', category: 'polysemous'},
    {type: 'polysemous', word: 'nut', knownMeaning: 'ナッツ、木の実', targetMeaning: 'ナット（金具）', definition: 'ボルトと組み合わせて使う穴の開いた金属部品', category: 'polysemous'},
    {type: 'polysemous', word: 'paper', knownMeaning: '紙', targetMeaning: '試験、論文', definition: '評価や研究のために書かれた文書', category: 'polysemous'},
    {type: 'polysemous', word: 'head', knownMeaning: '頭', targetMeaning: '責任者、長', definition: '組織やグループの最高責任者', category: 'polysemous'},
    
    // 同音異義語
    {type: 'homonymous', word: 'bank', knownMeaning: '銀行', targetMeaning: '土手、堤防', definition: '川や湖の水際にある土盛りや斜面', category: 'homonymous'},
    {type: 'homonymous', word: 'flat', knownMeaning: 'アパート', targetMeaning: 'パンク', definition: 'タイヤに穴が開いて空気が抜けた状態', category: 'homonymous'},
    {type: 'homonymous', word: 'pen', knownMeaning: 'ペン', targetMeaning: '囲い、檻', definition: '動物を閉じ込めておく小さな囲い', category: 'homonymous'},
    {type: 'homonymous', word: 'ball', knownMeaning: 'ボール', targetMeaning: '舞踏会', definition: '正装して踊りを楽しむ大規模なパーティー', category: 'homonymous'},
    {type: 'homonymous', word: 'match', knownMeaning: '試合', targetMeaning: 'マッチ棒', definition: '火をつけるために使う細い木の棒', category: 'homonymous'},
    {type: 'homonymous', word: 'story', knownMeaning: '物語', targetMeaning: '階', definition: '建物の床面から次の床面までの高さの単位', category: 'homonymous'},
    {type: 'homonymous', word: 'toast', knownMeaning: 'トースト', targetMeaning: '乾杯', definition: '飲み物と共に良い願いや祝福の気持ちを表現すること', category: 'homonymous'},
    {type: 'homonymous', word: 'band', knownMeaning: ' (音楽の) バンド', targetMeaning: '帯、バンド（細長いもの）', definition: '細く平たい輪状の材料', category: 'homonymous'},
    {type: 'homonymous', word: 'ear', knownMeaning: '耳', targetMeaning: '穂', definition: '穀物の実がついている部分', category: 'homonymous'},
    {type: 'homonymous', word: 'jam', knownMeaning: 'ジャム', targetMeaning: '渋滞', definition: '車や人が多くて動けない状況', category: 'homonymous'},
    
    // 未知語
    {type: 'primary', word: 'flesh', targetMeaning: '肉', definition: '動物の体の柔らかい組織', category: 'primary'},
    {type: 'primary', word: 'hutch', targetMeaning: '小屋（ウサギなどの）', definition: 'ウサギなどの小動物を飼うための箱型の小屋', category: 'primary'},
    {type: 'primary', word: 'dash', targetMeaning: '少量、ひとつまみ', definition: '調理で加える少しの量', category: 'primary'},
    {type: 'primary', word: 'knot', targetMeaning: '結び目、ノット', definition: 'ロープや紐を結んで作る固定部分', category: 'primary'},
    {type: 'primary', word: 'cub', targetMeaning: '子ども', definition: 'ライオンやクマなどの若い動物', category: 'primary'},
    {type: 'primary', word: 'ivy', targetMeaning: 'ツタ', definition: '壁や木に這って成長する常緑植物', category: 'primary'},
    {type: 'primary', word: 'lever', targetMeaning: 'レバー', definition: '機械や装置を操作するための棒状の取っ手', category: 'primary'},
    {type: 'primary', word: 'rake', targetMeaning: '熊手 (くまで)', definition: '落ち葉や土をかき集める長い柄の付いた庭園用具', category: 'primary'},
    {type: 'primary', word: 'lard', targetMeaning: 'ラード', definition: '豚の脂肪から作られた白い料理用油脂', category: 'primary'},
    {type: 'primary', word: 'rag', targetMeaning: 'ぼろ布', definition: '古くなって破れた布切れ', category: 'primary'}
];

// 分析対象外の10語（論文通り）
const fillerWords = [
    {word: 'hat', meaning: '帽子', category: 'filler'},
    {word: 'room', meaning: '部屋', category: 'filler'},
    {word: 'eye', meaning: '目', category: 'filler'},
    {word: 'shoes', meaning: '靴', category: 'filler'},
    {word: 'dog', meaning: '犬', category: 'filler'},
    {word: 'blue', meaning: '青', category: 'filler'},
    {word: 'water', meaning: '水', category: 'filler'},
    {word: 'apple', meaning: 'りんご', category: 'filler'},
    {word: 'teacher', meaning: '先生', category: 'filler'},
    {word: 'book', meaning: '本', category: 'filler'}
];

// 全テスト語彙（目標語彙30 + フィラー10）
const allTestWords = [...vocabularyData, ...fillerWords];

// 認識テスト用の選択肢（論文の基準に従って作成）
const recognitionChoices = {
    // 多義語
    'body': ['組織、団体', '釘', 'マッチ棒', '健康', 'わからない'],
    'point': ['目的、要点', '土手、堤防', '乾杯', '矢印', 'わからない'],
    'key': ['キー、ボタン', 'パンク', '穂', '扉', 'わからない'],
    'nail': ['釘', '囲い、檻', '舞踏会', '指', 'わからない'],
    'board': ['食事、賄い', 'マッチ棒', '階', '材木', 'わからない'],
    'chair': ['議長、委員長', '獲物', '帯、バンド（細長いもの）', '家具', 'わからない'],
    'game': ['獲物', 'ナット（金具）', '渋滞', '遊び', 'わからない'],
    'nut': ['ナット（金具）', '試験、論文', '肉', '食べ物', 'わからない'],
    'paper': ['試験、論文', '責任者、長', '小屋（ウサギなどの）', '新聞', 'わからない'],
    'head': ['責任者、長', '少量、ひとつまみ', '結び目、ノット', '脳', 'わからない'],
    
    // 同音異義語
    'bank': ['土手、堤防', '組織、団体', '目的、要点', '金融機関', 'わからない'],
    'flat': ['パンク', 'キー、ボタン', '釘', '住居', 'わからない'],
    'pen': ['囲い、檻', '食事、賄い', '議長、委員長', '文房具', 'わからない'],
    'ball': ['舞踏会', '獲物', 'ナット（金具）', '球技', 'わからない'],
    'match': ['マッチ棒', '試験、論文', '責任者、長', '競技', 'わからない'],
    'story': ['階', '子ども', 'ツタ', '物語', 'わからない'],
    'toast': ['乾杯', 'レバー', '熊手 (くまで)', 'パン', 'わからない'],
    'band': ['帯、バンド（細長いもの）', 'ラード', 'ぼろ布', '音楽', 'わからない'],
    'ear': ['穂', '土手、堤防', 'パンク', '聴覚', 'わからない'],
    'jam': ['渋滞', '囲い、檻', '舞踏会', '保存食', 'わからない'],
    
    // 未知語
    'flesh': ['肉', 'マッチ棒', '階', '皮膚', 'わからない'],
    'hutch': ['小屋（ウサギなどの）', '乾杯', '帯、バンド（細長いもの）', '小屋', 'わからない'],
    'dash': ['少量、ひとつまみ', '穂', '渋滞', '短距離走', 'わからない'],
    'knot': ['結び目、ノット', '組織、団体', '目的、要点', '速度単位', 'わからない'],
    'cub': ['子ども', 'キー、ボタン', '釘', '動物', 'わからない'],
    'ivy': ['ツタ', '食事、賄い', '議長、委員長', '植物', 'わからない'],
    'lever': ['レバー', '獲物', 'ナット（金具）', '操作具', 'わからない'],
    'rake': ['熊手 (くまで)', '試験、論文', '責任者、長', '道具', 'わからない'],
    'lard': ['ラード', '土手、堤防', 'パンク', '油脂', 'わからない'],
    'rag': ['ぼろ布', '囲い、檻', '舞踏会', '布', 'わからない'],
    
    // フィラー語（既知の意味をテスト）
    'hat': ['帽子', '組織、団体', '目的、要点', '衣類', 'わからない'],
    'room': ['部屋', 'キー、ボタン', '釘', '空間', 'わからない'],
    'eye': ['目', '食事、賄い', '議長、委員長', '視覚', 'わからない'],
    'shoes': ['靴', '獲物', 'ナット（金具）', '履物', 'わからない'],
    'dog': ['犬', '試験、論文', '責任者、長', '動物', 'わからない'],
    'blue': ['青', '土手、堤防', 'パンク', '色', 'わからない'],
    'water': ['水', '囲い、檻', '舞踏会', '液体', 'わからない'],
    'apple': ['りんご', 'マッチ棒', '階', '果物', 'わからない'],
    'teacher': ['先生', '乾杯', '帯、バンド（細長いもの）', '職業', 'わからない'],
    'book': ['本', '穂', '渋滞', '読み物', 'わからない']
};

// テスト制御変数
let currentTestType = '';
let currentQuestionIndex = 0;
let testWords = [];
let shuffledVocab = [];
let currentCardIndex = 0;
let learningTimer = null;
let retrievalTimer = null;
let fillerTimer = null;
let learningStartTime = null;
let retrievalStartTime = null;
let fillerStartTime = null;
let totalFlips = 0;
let totalShuffles = 0;
let currentLearningPhase = 'learning'; // 'learning', 'retrieval', 'filler'
let retrievalWords = [];
let currentRetrievalIndex = 0;

function startExperiment() {
    const name = document.getElementById('participant-name').value.trim();
    const studentId = document.getElementById('student-id').value.trim();
    
    if (!name || !studentId) {
        alert('お名前と学籍番号を入力してください。');
        return;
    }
    
    experimentData.participantInfo = {
        name: name,
        studentId: studentId,
        startTime: new Date().toISOString()
    };
    
    experimentData.startTime = Date.now();
    
    showScreen('pretest-intro');
}

function startPretest() {
    currentTestType = 'pretest';
    testWords = [...allTestWords].sort(() => Math.random() - 0.5); // ランダム化（40語）
    currentQuestionIndex = 0;
    showRecallTest();
}

function showRecallTest() {
    showScreen('recall-test');
    if (currentTestType === 'pretest') {
        document.getElementById('recall-title').textContent = '📝 事前テスト';
    } else {
        document.getElementById('recall-title').textContent = '📝 事後テスト';
    }
    updateRecallQuestion();
}

function updateRecallQuestion() {
    if (currentQuestionIndex >= testWords.length) {
        startRecognitionTest();
        return;
    }
    
    const word = testWords[currentQuestionIndex];
    document.getElementById('recall-word').textContent = word.word;
    document.getElementById('recall-answer').value = '';
    document.getElementById('recall-other').value = '';
    
    const progress = ((currentQuestionIndex + 1) / testWords.length) * 100;
    document.getElementById('recall-progress').style.width = progress + '%';
}

function nextRecallQuestion() {
    const word = testWords[currentQuestionIndex];
    const answer = document.getElementById('recall-answer').value.trim();
    const other = document.getElementById('recall-other').value.trim();
    
    const response = {
        word: word.word,
        type: word.type || word.category,
        category: word.category,
        mainAnswer: answer,
        otherAnswer: other,
        timestamp: Date.now(),
        responseTime: Date.now() - (experimentData.startTime || Date.now())
    };
    
    if (currentTestType === 'pretest') {
        experimentData.pretestRecall.push(response);
    } else {
        experimentData.posttestRecall.push(response);
    }
    
    currentQuestionIndex++;
    updateRecallQuestion();
}

function startRecognitionTest() {
    showScreen('recognition-test');
    if (currentTestType === 'pretest') {
        document.getElementById('recognition-title').textContent = '🎯 事前テスト';
    } else {
        document.getElementById('recognition-title').textContent = '🎯 事後テスト';
    }
    currentQuestionIndex = 0;
    updateRecognitionQuestion();
}

function updateRecognitionQuestion() {
    if (currentQuestionIndex >= testWords.length) {
        if (currentTestType === 'pretest') {
            showScreen('learning-intro');
        } else {
            showResults();
        }
        return;
    }
    
    const word = testWords[currentQuestionIndex];
    document.getElementById('recognition-word').textContent = word.word;
    
    // 選択肢をランダム化（「わからない」は固定）
    const allChoices = [...recognitionChoices[word.word]];
    const iDontKnow = allChoices.pop(); // 「わからない」を取り出す
    const otherChoices = allChoices.sort(() => Math.random() - 0.5); // 他の4つをシャッフル
    const finalChoices = [...otherChoices, iDontKnow]; // 「わからない」を最後に固定
    
    const choicesHtml = finalChoices.map((choice, index) => 
        `<label class="choice-option">
            <input type="radio" name="recognition-choice" value="${choice}">
            ${String.fromCharCode(97 + index)}) ${choice}
        </label>`
    ).join('');
    
    document.getElementById('recognition-choices').innerHTML = choicesHtml;
    
    // 選択肢のランダム化をログに記録
    experimentData.learningLog.push({
        action: 'recognition_choices_randomized',
        timestamp: Date.now(),
        word: word.word,
        originalOrder: recognitionChoices[word.word],
        shuffledOrder: finalChoices,
        testType: currentTestType,
        note: 'わからない_fixed_at_position_e'
    });
    
    const progress = ((currentQuestionIndex + 1) / testWords.length) * 100;
    document.getElementById('recognition-progress').style.width = progress + '%';
}

function nextRecognitionQuestion() {
    const selectedChoice = document.querySelector('input[name="recognition-choice"]:checked');
    
    if (!selectedChoice) {
        alert('選択肢を選んでください。');
        return;
    }
    
    const word = testWords[currentQuestionIndex];
    const response = {
        word: word.word,
        type: word.type || word.category,
        category: word.category,
        choice: selectedChoice.value,
        timestamp: Date.now(),
        responseTime: Date.now() - (experimentData.startTime || Date.now())
    };
    
    if (currentTestType === 'pretest') {
        experimentData.pretestRecognition.push(response);
    } else {
        experimentData.posttestRecognition.push(response);
    }
    
    currentQuestionIndex++;
    updateRecognitionQuestion();
}

function startLearning() {
    showScreen('learning-session');
    shuffledVocab = [...vocabularyData].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    totalFlips = 0;
    totalShuffles = 0;
    learningStartTime = Date.now();
    
    updateCard();
    startLearningTimer();
    
    // 学習セッション開始をログ
    experimentData.learningLog.push({
        action: 'learning_started',
        timestamp: Date.now(),
        totalCards: shuffledVocab.length
    });
}

function updateCard() {
    if (shuffledVocab.length === 0) return;
    
    const word = shuffledVocab[currentCardIndex];
    document.getElementById('card-word').textContent = word.word;
    
    let meaningText = word.targetMeaning;
    if (word.definition) {
        meaningText += `\n\n${word.definition}`;
    }
    if (word.knownMeaning) {
        meaningText += `\n\n（既知の意味：${word.knownMeaning}）`;
    }
    document.getElementById('card-meaning').innerHTML = meaningText.replace(/\n/g, '<br>');
    
    document.getElementById('current-card').textContent = currentCardIndex + 1;
    document.getElementById('total-cards').textContent = shuffledVocab.length;
    document.getElementById('flip-count').textContent = totalFlips;
    document.getElementById('shuffle-count').textContent = totalShuffles;
    
    // カードを表面に戻す
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    
    totalFlips++;
    document.getElementById('flip-count').textContent = totalFlips;
    
    // カードめくりをログ
    experimentData.learningLog.push({
        action: 'card_flipped',
        timestamp: Date.now(),
        cardIndex: currentCardIndex,
        word: shuffledVocab[currentCardIndex].word,
        flipped: flashcard.classList.contains('flipped')
    });
}

function nextCard() {
    if (currentCardIndex < shuffledVocab.length - 1) {
        currentCardIndex++;
        updateCard();
        
        experimentData.learningLog.push({
            action: 'next_card',
            timestamp: Date.now(),
            newCardIndex: currentCardIndex,
            word: shuffledVocab[currentCardIndex].word
        });
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
        
        experimentData.learningLog.push({
            action: 'previous_card',
            timestamp: Date.now(),
            newCardIndex: currentCardIndex,
            word: shuffledVocab[currentCardIndex].word
        });
    }
}

function shuffleCards() {
    shuffledVocab = [...shuffledVocab].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    totalShuffles++;
    updateCard();
    
    experimentData.learningLog.push({
        action: 'cards_shuffled',
        timestamp: Date.now(),
        shuffleCount: totalShuffles,
        newOrder: shuffledVocab.map(w => w.word)
    });
}

function startLearningTimer() {
    let timeLeft = 15 * 60; // 15分
    
    learningTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('learning-timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(learningTimer);
            endLearning();
        }
        
        timeLeft--;
    }, 1000);
}

function endLearning() {
    document.getElementById('learning-complete').classList.remove('hidden');
    
    experimentData.learningLog.push({
        action: 'learning_ended',
        timestamp: Date.now(),
        totalTime: Date.now() - learningStartTime,
        totalFlips: totalFlips,
        totalShuffles: totalShuffles
    });
}

function startPosttest() {
    currentTestType = 'posttest';
    testWords = [...allTestWords].sort(() => Math.random() - 0.5); // 再ランダム化（40語）
    currentQuestionIndex = 0;
    showRecallTest();
}

function showResults() {
    experimentData.endTime = Date.now();
    
    // 結果サマリーを表示
    const totalLearningTime = Math.round((Date.now() - learningStartTime) / 60000);
    document.getElementById('learning-time-result').textContent = totalLearningTime;
    document.getElementById('total-flips-result').textContent = totalFlips;
    document.getElementById('total-shuffles-result').textContent = totalShuffles;
    
    showScreen('results');
}

function downloadResults() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `vocabulary_experiment_${experimentData.participantInfo.studentId}_${timestamp}.csv`;
    
    let csv = 'Type,Data\n';
    csv += `"Participant Info","${JSON.stringify(experimentData.participantInfo).replace(/"/g, '""')}"\n`;
    csv += `"Pretest Recall","${JSON.stringify(experimentData.pretestRecall).replace(/"/g, '""')}"\n`;
    csv += `"Pretest Recognition","${JSON.stringify(experimentData.pretestRecognition).replace(/"/g, '""')}"\n`;
    csv += `"Posttest Recall","${JSON.stringify(experimentData.posttestRecall).replace(/"/g, '""')}"\n`;
    csv += `"Posttest Recognition","${JSON.stringify(experimentData.posttestRecognition).replace(/"/g, '""')}"\n`;
    csv += `"Learning Log","${JSON.stringify(experimentData.learningLog).replace(/"/g, '""')}"\n`;
    csv += `"Experiment Duration","${experimentData.endTime - experimentData.startTime}"\n`;
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

function showScreen(screenId) {
    const screens = ['participant-info', 'pretest-intro', 'recall-test', 'recognition-test', 
                   'learning-intro', 'learning-session', 'retrieval-session', 'filler-task', 'results'];
    
    screens.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    
    document.getElementById(screenId).classList.remove('hidden');
}

// ページ離脱防止
window.addEventListener('beforeunload', function(e) {
    if (experimentData.startTime && !experimentData.endTime) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// 未実装の関数（元コードに不完全な部分があったため、基本的な実装を追加）
function showRetrievalAnswer() {
    // 復習フェーズでの答え表示機能（元コードに不完全な実装があったため）
    const answerDiv = document.getElementById('retrieval-answer');
    const nextBtn = document.getElementById('next-retrieval-btn');
    const showBtn = document.getElementById('show-answer-btn');
    
    if (answerDiv && nextBtn && showBtn) {
        answerDiv.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        showBtn.classList.add('hidden');
    }
}

function nextRetrievalWord() {
    // 復習フェーズでの次の単語への移動機能（元コードに不完全な実装があったため）
    currentRetrievalIndex++;
    if (currentRetrievalIndex >= vocabularyData.length) {
        // 復習完了の処理
        const retrievalComplete = document.getElementById('retrieval-complete');
        if (retrievalComplete) {
            retrievalComplete.classList.remove('hidden');
        }
        return;
    }
    
    // 次の単語を表示
    const word = vocabularyData[currentRetrievalIndex];
    const retrievalWord = document.getElementById('retrieval-word');
    const answerDiv = document.getElementById('retrieval-answer');
    const nextBtn = document.getElementById('next-retrieval-btn');
    const showBtn = document.getElementById('show-answer-btn');
    
    if (retrievalWord) retrievalWord.textContent = word.word;
    if (answerDiv) answerDiv.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    if (showBtn) showBtn.classList.remove('hidden');
}

function startFillerTask() {
    // フィラータスクの開始機能（元コードに不完全な実装があったため）
    showScreen('filler-task');
    fillerStartTime = Date.now();
    startFillerTimer();
}

function startFillerTimer() {
    let timeLeft = 10 * 60; // 10分
    
    fillerTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const timerElement = document.getElementById('filler-timer');
        if (timerElement) {
            timerElement.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (timeLeft <= 0) {
            clearInterval(fillerTimer);
            endFillerTask();
        }
        
        timeLeft--;
    }, 1000);
}

function endFillerTask() {
    const fillerComplete = document.getElementById('filler-complete');
    if (fillerComplete) {
        fillerComplete.classList.remove('hidden');
    }
    
    experimentData.learningLog.push({
        action: 'filler_task_ended',
        timestamp: Date.now(),
        totalTime: Date.now() - fillerStartTime
    });
}