$(function () {
    /* ==========================================
       Translation Dictionary (CORS-Free / Offline)
       ========================================== */
    const uiTranslations = {
        ja: {
            "rac.home": "ホーム",
            "rac.copyright": "Copyright 2045 RAC. All rights reserved.",
            "rac.back_to_home": "ポータルに戻る",
            "rac.status.active": "データベース接続: 正常",
            "rac.title": "RAC",
            "rac.subtitle": "この世界に存在する生物、現象をまとめたアーカイブサイトです。",
            "rac.theme.label": "テーマ",

            "rac.object.000.title": "000 -- 問い",
            "rac.object.000.desc": "すべての現象の直前に現れる、存在の開始条件。",

            "rac.object.001.title": "001 -- モバジュウ",
            "rac.object.001.desc": "モバイルバッテリーに擬態し、接続機器から電力を吸い取る寄生生物。",

            "rac.object.002.title": "002 -- トモガサ",
            "rac.object.002.desc": "感情寄生型擬態生物。友達になりたかった傘。",

            "rac.object.003.title": "003 -- サミシイシ",
            "rac.object.003.desc": "鉱物系生物。寂しそうな石ころ。",

            "rac.object.004.title": "004 -- ナリソコネルフ",
            "rac.object.004.desc": "擬態失敗生物。ウォーウルフになりきれなかったウォーウルフ。",

            "rac.object.005.title": "005 -- バスタブス",
            "rac.object.005.desc": "交通擬態生物。バスのフリをするバスタブ。",

            "rac.object.006.title": "006 -- クウキ",
            "rac.object.006.desc": "周囲の空気に擬態する生命体。自我の希薄化特徴あり。",

            "rac.object.007.title": "007 -- フリドア",
            "rac.object.007.desc": "認識干渉型建築擬態。開いているふりをするドア。",

            "rac.object.008.title": "008 -- ナリヒト",
            "rac.object.008.desc": "擬人化擬態生物。存在感のない人間になりたい何か。",

            "rac.object.009.title": "009 -- 手.png",
            "rac.object.009.desc": "自己拡散型概念生命体。無限の連鎖と自己の拡散。",

            "rac.object.010.title": "010 -- アノキシャ",
            "rac.object.010.desc": "帰還模倣型遊具擬態生命体。おもちゃの汽車。",

            "rac.object.011.title": "011 -- ワスレグルミ",
            "rac.object.011.desc": "記憶依存型自律繊維生命体。忘れられたぬいぐるみ。",

            "rac.object.012.title": "012 -- 三単現のSVO",
            "rac.object.012.desc": "言語残響型構文生命体。古代英語の破片。",

            "rac.object.013.title": "013 -- 壁を走るな",
            "rac.object.013.desc": "重力規律干渉型指示概念。垂直方向への規律。",

            "rac.object.014.title": "014 -- たんぼのなかの田中さん",
            "rac.object.014.desc": "局所存在固定型人物現象。たんぼのなかにいる田中さん。",

            "rac.object.infinity.title": "Infinity -- シンボル",
            "rac.object.infinity.desc": "原型情報集合体。全ての生物の元となるもの。"
        },
        en: {
            "rac.home": "Home",
            "rac.copyright": "Copyright 2045 RAC. All rights reserved.",
            "rac.back_to_home": "Back to Portal",
            "rac.status.active": "Database Connection: Stable",
            "rac.title": "RAC",
            "rac.subtitle": "An archive site documenting anomalous creatures and phenomena in this world.",
            "rac.theme.label": "Theme",

            "rac.object.000.title": "000 -- Question",
            "rac.object.000.desc": "The starting condition for existence, appearing just before all phenomena.",

            "rac.object.001.title": "001 -- Mobaju",
            "rac.object.001.desc": "A parasitic lifeform mimicking a mobile battery, absorbing electricity.",

            "rac.object.002.title": "002 -- Tomogasa",
            "rac.object.002.desc": "Emotion-parasitic mimicry lifeform. An umbrella that wanted to be a friend.",

            "rac.object.003.title": "003 -- Samisiisi",
            "rac.object.003.desc": "Mineral lifeform. A lonely-looking pebble.",

            "rac.object.004.title": "004 -- Narisokonerufu",
            "rac.object.004.desc": "Mimicry-failed creature. A werewolf that couldn't quite become a werewolf.",

            "rac.object.005.title": "005 -- Basutabusu",
            "rac.object.005.desc": "Transit mimicry creature. A bathtub pretending to be a bus.",

            "rac.object.006.title": "006 -- Kuuki",
            "rac.object.006.desc": "Mimicry lifeform blending into the air. Prone to ego dilution.",

            "rac.object.007.title": "007 -- Furidoa",
            "rac.object.007.desc": "Cognitive interference architectural mimicry. A door pretending to be open.",

            "rac.object.008.title": "008 -- Narihito",
            "rac.object.008.desc": "Anthropomorphic mimicry creature. Something that wants to be an inconspicuous human.",

            "rac.object.009.title": "009 -- Te.png",
            "rac.object.009.desc": "Self-spreading conceptual lifeform. Infinite chain and diffusion of self.",

            "rac.object.010.title": "010 -- Anokisha",
            "rac.object.010.desc": "Return-mimicking toy mimicry lifeform. A toy train.",

            "rac.object.011.title": "011 -- Wasuregurumi",
            "rac.object.011.desc": "Memory-dependent autonomous fibrous lifeform. The forgotten stuffed animal.",

            "rac.object.012.title": "012 -- Singular SVO",
            "rac.object.012.desc": "Linguistic reverberation syntax lifeform. Fragments of ancient English.",

            "rac.object.013.title": "013 -- Do Not Run on Wall",
            "rac.object.013.desc": "Gravitational discipline interference instruction concept. Discipline towards vertical direction.",

            "rac.object.014.title": "014 -- Tanaka-san in the Rice Paddy",
            "rac.object.014.desc": "Locally-fixed humanoid phenomenon. Tanaka-san, who is in the rice paddy.",

            "rac.object.infinity.title": "Infinity -- Symbol",
            "rac.object.infinity.desc": "Archetypal information aggregate. The source of all lifeforms."
        },
        eo: {
            "rac.home": "Hejmo",
            "rac.copyright": "Kopirajto 2045 RAC. Ĉiuj rajtoj rezervitaj.",
            "rac.back_to_home": "Reen al Portalo",
            "rac.status.active": "Datumbaza Konekto: Stabila",
            "rac.title": "RAC",
            "rac.subtitle": "Arkiva retejo dokumentanta anomalajn kreitaĵojn kaj fenomenojn en ĉi tiu mondo.",
            "rac.theme.label": "Etoso",

            "rac.object.000.title": "000 -- Demando",
            "rac.object.000.desc": "La komenca kondiĉo de ekzisto, aperanta ĵus antaŭ ĉiuj fenomenoj.",

            "rac.object.001.title": "001 -- Mobaĵu",
            "rac.object.001.desc": "Parazita vivformo kiu imitas poŝtelefonan kuirilaron kaj sorbas elektron.",

            "rac.object.002.title": "002 -- Tomogaŝa",
            "rac.object.002.desc": "Emoci-parazita mimika vivulo. Ombrelo kiu volis fariĝi amiko.",

            "rac.object.003.title": "003 -- Samisiisi",
            "rac.object.003.desc": "Minerala vivformo. Soleca ŝtoneto.",

            "rac.object.004.title": "004 -- Narisokonerufu",
            "rac.object.004.desc": "Malsukcesa mimika kreitaĵo. Lupo-homo kiu ne tute povis fariĝi lupo-homo.",

            "rac.object.005.title": "005 -- Basutabusu",
            "rac.object.005.desc": "Trafika mimika kreitaĵo. Banujo kiu ŝajnigas esti buso.",

            "rac.object.006.title": "006 -- Kuki",
            "rac.object.006.desc": "Vivformo imitanta la ĉirkaŭan aeron. Eblas egoa diluo.",

            "rac.object.007.title": "007 -- Furidoa",
            "rac.object.007.desc": "Kogna interfera arkitektura mimiko. Pordo kiu ŝajnigas esti malfermita.",

            "rac.object.008.title": "008 -- Narihito",
            "rac.object.008.desc": "Homforma mimika vivulo. Io kio volas esti nevidebla homo.",

            "rac.object.009.title": "009 -- Mano.png",
            "rac.object.009.desc": "Mem-disvastiĝanta koncepta vivformo. Senfina ĉeno kaj difuzo de la memo.",

            "rac.object.010.title": "010 -- Anokiŝa",
            "rac.object.010.desc": "Reen-imita ludila mimika vivformo. Ludila trajno.",

            "rac.object.011.title": "011 -- Vasuregurumi",
            "rac.object.011.desc": "Memor-dependa sendependa fibra vivformo. Forgesita ludbesto.",

            "rac.object.012.title": "012 -- Trisingulara SVO",
            "rac.object.012.desc": "Lingva resonanca sintaksa vivformo. Fragmentoj de la antikva angla lingvo.",

            "rac.object.013.title": "013 -- Ne Kuru sur Muro",
            "rac.object.013.desc": "Gravita disciplina interfera instrukcia koncepto. Disciplino al vertikala direkto.",

            "rac.object.014.title": "014 -- Tanaka-san en la Ricejo",
            "rac.object.014.desc": "Loke fiksita homoida fenomeno. Tanaka-san, kiu estas en la ricejo.",

            "rac.object.infinity.title": "Infinity -- Simbolo",
            "rac.object.infinity.desc": "Praforma informa agregato. La fonto de ĉiuj vivuloj."
        }
    };

    /* ==========================================
       Native State / Configuration
       ========================================== */
    const isSubPage = window.location.pathname.includes('/objects/');
    const homePath = isSubPage ? '../index.html' : './index.html';

    // Default Configuration
    let currentTheme = localStorage.getItem('rac-theme') || 'light'; // Default is Light Mode
    let currentLang = localStorage.getItem('rac-lang') || detectBrowserLang();

    function detectBrowserLang() {
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('en')) return 'en';
        if (browserLang.startsWith('eo')) return 'eo';
        return 'ja'; // Fallback
    }

    /* ==========================================
       Apply Theme & Language
       ========================================== */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            $('#rac-theme-btn').html('<i class="fas fa-sun"></i>');
        } else {
            document.body.classList.remove('dark-mode');
            $('#rac-theme-btn').html('<i class="fas fa-moon"></i>');
        }
        localStorage.setItem('rac-theme', theme);
    }

    function applyLanguage(lang) {
        // 1. Fixed UI Translations
        $('[data-lang-key]').each(function () {
            const key = $(this).attr('data-lang-key');
            if (uiTranslations[lang] && uiTranslations[lang][key]) {
                $(this).html(uiTranslations[lang][key]);
            }
        });

        // 2. Inline Markdown Render
        const markdownEl = document.getElementById(`markdown-${lang}`) || document.getElementById('markdown-ja');
        if (markdownEl && document.getElementById('content')) {
            const rawMarkdown = markdownEl.textContent;
            const htmlContent = marked.parse(rawMarkdown);
            document.getElementById('content').innerHTML = htmlContent;
        }

        currentLang = lang;
        localStorage.setItem('rac-lang', lang);
        $('#rac-lang-sel').val(lang);
    }

    /* ==========================================
       Inject Layout (Header & Footer)
       ========================================== */
    $('body').prepend(`
        <header class="rac-header">
            <div class="rac-header-inner">
                <a href="${homePath}" class="rac-logo-link">
                    <h1 class="rac-logo">RAC</h1>
                </a>
                <nav class="rac-nav-container">
                    <div class="rac-menu-controls">
                        <!-- Theme Toggle Button -->
                        <button id="rac-theme-btn" class="rac-menu-btn" title="Toggle Theme">
                            <i class="fas fa-moon"></i>
                        </button>
                        <!-- Language Select Dropdown -->
                        <div class="rac-lang-wrapper">
                            <i class="fas fa-globe select-icon"></i>
                            <select id="rac-lang-sel" class="rac-lang-select">
                                <option value="ja">日本語</option>
                                <option value="en">English</option>
                                <option value="eo">Esperanto</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    `).append(`
        <footer class="rac-footer">
            <div class="rac-footer-inner">
                <p data-lang-key="rac.copyright">rac.copyright</p>
                <div class="rac-status">
                    <span class="status-indicator"></span>
                    <span data-lang-key="rac.status.active">rac.status.active</span>
                </div>
            </div>
        </footer>
    `);

    /* ==========================================
       Bind Menu Control Events
       ========================================== */
    $('#rac-theme-btn').on('click', function (e) {
        e.preventDefault();
        currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

    $('#rac-lang-sel').on('change', function () {
        applyLanguage($(this).val());
    });

    /* ==========================================
       Initialization
       ========================================== */
    applyTheme(currentTheme);
    applyLanguage(currentLang);
});
