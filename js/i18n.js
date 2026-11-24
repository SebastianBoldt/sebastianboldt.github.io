// Embedded translations from locales/en.json and locales/de.json.
(function () {
    const SUPPORTED = ['de', 'en'];
    const STORAGE_KEY = 'lang';
    const LOCALES = {
    "en": {
        "meta": {
            "title": "Sebastian Boldt - Mobile Application Engineer",
            "privacyTitle": "Privacy Policy - Sebastian Boldt"
        },
        "nav": {
            "expertise": "Expertise",
            "work": "Work",
            "testimonials": "Testimonials",
            "projects": "Projects",
            "blog": "Blog",
            "contact": "Contact",
            "menuLabel": "Menu",
            "languageLabel": "Language"
        },
        "hero": {
            "eyebrow": "iOS Engineer since 2012",
            "title": "Mobile Application Engineer<br /><span class=\"text-gradient\">from Hamburg.</span>",
            "bio": "I have been building native iOS apps for more than 10 years. I have shipped several apps and contributed to multiple open source projects. I work on every step of development, from the idea and prototyping through UX, UI and accessibility to implementation, continuous integration and deployment.",
            "tagline": "Design · Code · Tooling"
        },
        "coreSkills": {
            "label": "Core Skills",
            "swift": "Swift & SwiftUI / Objective-C & UIKit",
            "apple": "Deep knowledge of the Apple ecosystem",
            "pointFree": "Point-Free Ecosystem (TCA, SQLiteData, Sharing etc.)",
            "architecture": "Software Architecture",
            "uxui": "UX & UI",
            "agentic": "Agentic Coding"
        },
        "expertise": {
            "label": "What I Do",
            "heading": "Clean architecture, modular design, <span class=\"text-gradient\">maintainability.</span>",
            "intro": "I build iOS apps with a focus on these principles.",
            "architectureTitle": "Architecture & Modularity",
            "architectureBody": "I have worked with MVVM, VIPER and more traditional patterns. Today I mostly use The Composable Architecture (TCA) and the Point‑Free ecosystem, a Redux-style approach. With Swift Package Manager I draw clear boundaries between modules, so features stay reusable and easy to slice out. Whatever the pattern, I inject dependencies explicitly so the code stays testable and easy to change.",
            "frameworksTitle": "Framework Knowledge",
            "frameworksBody": "I work with SwiftUI every day and have a lot of UIKit experience from large projects. I have also worked with AudioKit, StoreKit, CloudKit, WidgetKit, MapKit, Core Data and the iOS Accessibility APIs. When a legacy codebase needs maintaining or extending, I work in Objective-C too.",
            "teamTitle": "Team Collaboration & Mentoring",
            "teamBody": "I have mentored developers and given talks on iOS topics. I have worked in large international teams with mono-repo and multi-repo setups, and in smaller local teams. I have automated builds and releases with Xcode Cloud, Bitrise and Jenkins.",
            "agenticTitle": "Agentic Coding",
            "agenticBody": "I use AI coding tools like Claude Code, Cursor and Codex, together with Skills and MCP servers, to develop faster. My years of native iOS experience help me keep the \"slop layer\" out and keep AI-generated code maintainable."
        },
        "work": {
            "label": "Work",
            "heading": "<span class=\"text-gradient\">Where I've worked.</span>",
            "present": "Present",
            "years35": "~3.5 yrs",
            "years65": "~6.5 yrs",
            "year1": "~1 yr",
            "educationTitle": "Education",
            "educationDegree": "Master's & Bachelor's in Multimedia Engineering, Hochschule Wismar",
            "educationDetails": "Microprocessor technology, image processing, computer graphics, audio, system programming, networking, application development."
        },
        "testimonials": {
            "label": "What others say",
            "heading": "What others <span class=\"text-gradient\">say.</span>",
            "footnote": "More feedback from colleagues will be added here over time."
        },
        "projects": {
            "label": "Projects",
            "heading": "Apps I've built <span class=\"text-gradient\">in my spare time.</span>",
            "intro": "HabitBe, Pianoo, Gio+, and more.",
            "habitbeTagline": "The habit tracker for minimalists.",
            "active": "Active",
            "habitbeDesc": "A simple weekly habit tracker without extra features. Built with TCA, Core Data, CloudKit and SwiftUI.",
            "pianooTagline": "Chords. Scales. Progressions.",
            "pianooDesc": "A music theory app for chords, scales and progressions, made for writing songs and practicing.",
            "gioTagline": "Measure your range of motion.",
            "comingSoon": "Coming soon",
            "gioDesc": "Gio+ uses the camera to measure how far your elbow, knee or shoulder bends and straightens, and tracks your recovery over time. Built with TCA, SQLiteData, Vision, WidgetKit, App Intents and SwiftUI.",
            "moreTitle": "More projects",
            "jellyDesc": "Open-source library for animated view controller transitions in UIKit.",
            "openSource": "Open Source",
            "soundrocketDesc": "My first App Store release (2015), a SoundCloud client I discontinued after SoundCloud shut down its public API. The project is private now.",
            "inactive": "Inactive"
        },
        "blog": {
            "label": "Blog",
            "heading": "Articles on <span class=\"text-gradient\">iOS development.</span>",
            "intro": "I haven't written new posts recently because I've been building apps instead.",
            "more": "More:"
        },
        "cta": {
            "heading": "Get <span class=\"text-gradient\">in touch</span>",
            "body": "If you want to talk about iOS development or my projects, send me a message.",
            "button": "Contact me"
        },
        "footer": {
            "tagline": "Mobile Application Engineer since 2012",
            "privacy": "Privacy",
            "home": "Home"
        }
    },
    "de": {
        "meta": {
            "title": "Sebastian Boldt - Mobile Application Engineer",
            "privacyTitle": "Datenschutz - Sebastian Boldt"
        },
        "nav": {
            "expertise": "Expertise",
            "work": "Beruf",
            "testimonials": "Referenzen",
            "projects": "Projekte",
            "blog": "Blog",
            "contact": "Kontakt",
            "menuLabel": "Menü",
            "languageLabel": "Sprache"
        },
        "hero": {
            "eyebrow": "iOS Engineer seit 2012",
            "title": "Mobile Application Engineer<br /><span class=\"text-gradient\">aus Hamburg.</span>",
            "bio": "Seit über 10 Jahren entwickle ich native iOS-Apps. Ich habe mehrere Apps veröffentlicht und zu mehreren Open-Source-Projekten beigetragen. Ich übernehme jeden Schritt der Entwicklung, von der Idee und dem Prototyping über UX, UI und Barrierefreiheit bis zu Implementierung, Continuous Integration und Deployment.",
            "tagline": "Design · Code · Tooling"
        },
        "coreSkills": {
            "label": "Kernkompetenzen",
            "swift": "Swift & SwiftUI / Objective-C & UIKit",
            "apple": "Tiefes Wissen im Apple-Ökosystem",
            "pointFree": "Point-Free Ecosystem (TCA, SQLiteData, Sharing etc.)",
            "architecture": "Software-Architektur",
            "uxui": "UX & UI",
            "agentic": "Agentic Coding"
        },
        "expertise": {
            "label": "Was ich mache",
            "heading": "Saubere Architektur, modulares Design, <span class=\"text-gradient\">Wartbarkeit.</span>",
            "intro": "Nach diesen Prinzipien entwickle ich iOS-Apps.",
            "architectureTitle": "Architektur & Modularität",
            "architectureBody": "Ich habe mit MVVM, VIPER und klassischeren Mustern gearbeitet. Heute nutze ich vor allem The Composable Architecture (TCA) und das Point‑Free-Ökosystem, also einen Redux-ähnlichen Ansatz. Mit dem Swift Package Manager ziehe ich klare Grenzen zwischen Modulen, damit Features wiederverwendbar bleiben und sich leicht herauslösen lassen. Unabhängig vom Muster injiziere ich Abhängigkeiten explizit, damit der Code testbar und leicht änderbar bleibt.",
            "frameworksTitle": "Framework-Kenntnisse",
            "frameworksBody": "Ich arbeite täglich mit SwiftUI und habe viel Erfahrung mit UIKit aus großen Projekten. Außerdem habe ich mit AudioKit, StoreKit, CloudKit, WidgetKit, MapKit, Core Data und den iOS Accessibility APIs gearbeitet. Wenn eine Legacy-Codebasis gepflegt oder erweitert werden muss, arbeite ich auch in Objective-C.",
            "teamTitle": "Teamarbeit & Mentoring",
            "teamBody": "Ich habe Entwickler als Mentor begleitet und Vorträge zu iOS-Themen gehalten. Ich habe in großen internationalen Teams mit Mono- und Multi-Repo-Setups gearbeitet und in kleineren lokalen Teams. Builds und Releases habe ich mit Xcode Cloud, Bitrise und Jenkins automatisiert.",
            "agenticTitle": "Agentic Coding",
            "agenticBody": "Ich nutze KI-Coding-Tools wie Claude Code, Cursor und Codex zusammen mit Skills und MCP-Servern, um schneller zu entwickeln. Meine langjährige native iOS-Erfahrung hilft mir, den „Slop-Layer“ fernzuhalten und KI-generierten Code wartbar zu halten."
        },
        "work": {
            "label": "Beruf",
            "heading": "<span class=\"text-gradient\">Wo ich gearbeitet habe.</span>",
            "present": "Heute",
            "years35": "~3,5 J.",
            "years65": "~6,5 J.",
            "year1": "~1 J.",
            "educationTitle": "Ausbildung",
            "educationDegree": "Master & Bachelor Multimedia Engineering, Hochschule Wismar",
            "educationDetails": "Mikroprozessortechnik, Bildverarbeitung, Computergrafik, Audio, Systemprogrammierung, Netzwerke, Anwendungsentwicklung."
        },
        "testimonials": {
            "label": "Was andere sagen",
            "heading": "Was andere <span class=\"text-gradient\">sagen.</span>",
            "footnote": "Weitere Rückmeldungen von Kolleginnen und Kollegen werden hier nach und nach ergänzt."
        },
        "projects": {
            "label": "Projekte",
            "heading": "Apps, die ich <span class=\"text-gradient\">in meiner Freizeit</span> gebaut habe.",
            "intro": "HabitBe, Pianoo, Gio+ und mehr.",
            "habitbeTagline": "Der Habit Tracker für Minimalisten.",
            "active": "Aktiv",
            "habitbeDesc": "Ein einfacher wöchentlicher Habit Tracker ohne Zusatzfunktionen. Gebaut mit TCA, Core Data, CloudKit und SwiftUI.",
            "pianooTagline": "Akkorde. Tonleitern. Progressionen.",
            "pianooDesc": "Eine Musiktheorie-App für Akkorde, Tonleitern und Progressionen, gedacht fürs Songwriting und Üben.",
            "gioTagline": "Miss deine Beweglichkeit.",
            "comingSoon": "Demnächst",
            "gioDesc": "Gio+ misst mit der Kamera, wie weit sich Ellbogen, Knie oder Schulter beugen und strecken lassen, und zeigt deinen Fortschritt in der Reha. Gebaut mit TCA, SQLiteData, Vision, WidgetKit, App Intents und SwiftUI.",
            "moreTitle": "Weitere Projekte",
            "jellyDesc": "Open-Source-Bibliothek für animierte View-Controller-Transitions in UIKit.",
            "openSource": "Open Source",
            "soundrocketDesc": "Mein erster App-Store-Release (2015), ein SoundCloud-Client, den ich eingestellt habe, nachdem SoundCloud die öffentliche API abgeschaltet hatte. Das Projekt ist inzwischen privat.",
            "inactive": "Inaktiv"
        },
        "blog": {
            "label": "Blog",
            "heading": "Artikel über <span class=\"text-gradient\">iOS-Entwicklung.</span>",
            "intro": "Neue Beiträge habe ich in letzter Zeit nicht geschrieben, weil ich stattdessen Apps gebaut habe.",
            "more": "Mehr:"
        },
        "cta": {
            "heading": "Kontakt <span class=\"text-gradient\">aufnehmen</span>",
            "body": "Wenn Sie über iOS-Entwicklung oder meine Projekte sprechen möchten, schreiben Sie mir.",
            "button": "Kontakt aufnehmen"
        },
        "footer": {
            "tagline": "Mobile Application Engineer seit 2012",
            "privacy": "Datenschutz",
            "home": "Startseite"
        }
    }
};

    function get(obj, path) {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }

    function detectLocale() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (SUPPORTED.includes(stored)) return stored;
        } catch (_) {}

        const languages = navigator.languages?.length
            ? navigator.languages
            : [navigator.language];

        for (const lang of languages) {
            if (lang && lang.toLowerCase().startsWith('de')) return 'de';
        }
        return 'en';
    }

    function updateSwitchUI(lang) {
        document.querySelectorAll('[data-lang]').forEach((btn) => {
            const active = btn.dataset.lang === lang;
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
            btn.classList.toggle('lang-btn-active', active);
        });
    }

    function applyTranslations(data, lang) {
        document.documentElement.lang = lang;

        const isPrivacyPage = document.body.dataset.page === 'privacy';
        document.title = isPrivacyPage ? data.meta.privacyTitle : data.meta.title;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const value = get(data, el.dataset.i18n);
            if (value != null) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const value = get(data, el.dataset.i18nHtml);
            if (value != null) el.innerHTML = value;
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            el.dataset.i18nAttr.split(';').forEach((pair) => {
                const [attr, key] = pair.split(':').map((s) => s.trim());
                const value = get(data, key);
                if (value != null) el.setAttribute(attr, value);
            });
        });

        updateSwitchUI(lang);
    }

    function setLocale(lang) {
        if (!SUPPORTED.includes(lang)) return;
        const data = LOCALES[lang];
        if (!data) return;
        applyTranslations(data, lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    }

    document.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-lang]');
        if (!btn) return;
        event.preventDefault();
        setLocale(btn.dataset.lang);
    });

    setLocale(detectLocale());
})();
