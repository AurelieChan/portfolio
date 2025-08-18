export const languages = {

  'en': {
    // =============================================================== Home - EN
    "nb1": "Home",
    "nb2": "Projects",
    "nb3": "About me",
    "nb4": "Contact",
    "dev": "Full stack developer",
    "des": "with a creative edge.",

    // =========================================================== Projects - EN
    "pro-title": "Projects",
    "pro-intro": "Click on the projects below to see more details.",

    "btn1": "See site",
    "btn2": "See video",
    "btn3": "See code",

    // Vortext
    "qa0": "VortexT",
    "qa1": "This question-and-answer website began as my final project for the CS50W online course from Harvard University. I created the prototype in late 2022 and have been developing it ever since, with the first beta version going online in February 2024.",
    "qa2": "The site features a search engine, a profile page, in-app notifications, a private messaging section, and a bookmarking system.",
    "qa3": "This is the first project where I have utilized <mark>ReactJS</mark> for the frontend and <mark>Django REST Framework</mark> for the backend. The database is <mark>PostgreSQL</mark>, and the styling is entirely done with <mark>CSS</mark>. <mark>Cloudflare</mark> is used as the CDN, and images are stored on <mark>Backblaze</mark>.",

    // Professional website
    "pro0": "Pro-file",
    "pro1": "This is the second website I ever launched, in early 2023.",
    "pro2": "I created this website from scratch using <mark>HTML</mark>, <mark>CSS</mark> for styling and most of the animations such as the twinkling and shooting stars, <mark>Vanilla Javascript</mark>, and <mark>PHP</mark> to handle the contact form.",
    "pro3": "I tried to reproduce the view of the sky from a southern perspective, respecting the positioning of the constellations and the moon.",

    // Retrofun
    "ret0": "Retrofun Games",
    "ret1": "This is the very first website I created, as a final project, six months after I started learning programming. It was completed in December 2020 and has been online since January 2021.",
    "ret2": "For this project, I used <mark>HTML</mark> and <mark>CSS</mark>. I wrote the games in <mark>Vanilla Javascript</mark>. I used <mark>Affinity Designer</mark> to create the memory game cards and <mark>Audacity</mark> for the sound effects. I used <mark>Flask</mark> as a backend microframework in <mark>Python</mark>. It processes data submitted via <mark>JSON</mark> to a <mark>SQLite</mark> database. I created dictionaries in <mark>Python</mark> to make this website dynamically trilingual.",

    // Portfolio
    "por0": "My Portfolio",
    "por1": "This is the third website I published, in 2023.",
    "por2": "On this project I used <mark>HTML</mark>, <mark>CSS</mark>, <mark>Vanilla Javascript</mark>, <mark>ThreeJS</mark> to create the 3D animation, and <mark>PHP</mark> to handle the contact form. I built <mark>JSON dictionaries</mark> to make the site dynamically trilingual.",
    "por3": "This is my very first website using <mark>ThreeJS</mark>. I really had fun with this library and I am planning to explore it further. The concept was to create an immersive experience, similar to the aesthetics of video games.",
    
    // Social Media
    "sm0": "Social Media",
    "sm1": "This project was part of the online CS50W course offered by Harvard University and was submitted in 2022.",
    "sm2": "The requirement was to design a Twitter-like social network website that allows users to create and edit posts, follow other users, and “like” posts.",
    "sm3": "The implementation had to be done using <mark>Python</mark> with <mark>Django</mark> as the backend framework, <mark>JavaScript</mark> on the frontend, <mark>HTML</mark>, and <mark>CSS</mark>.",
    "sm4": "For the visual aspect of the website, I decided to be creative and got inspired by the atmosphere of Berlin nightlife.",

    // Mail box
    "mb0": "Mail Box",
    "mb1": "This project was part of the online CS50W course offered by Harvard University and was submitted in 2022.",
    "mb2": "The requirement was to design a frontend for an email client that makes API calls to send, receive, and update emails, using the API provided by the application.",
    "mb3": "This single-page-app had to be completed using <mark>JavaScript</mark>, <mark>HTML</mark>, and <mark>CSS</mark>. <mark>Django</mark>, a <mark>Python-based framework</mark>, is used for the backend.",

    // Auction website
    "auc0": "Auction Site",
    "auc1": "This project was part of the online CS50W course offered by Harvard University and was submitted in 2021.",
    "auc2": "The assignment was to complete the implementation of an eBay-like e-commerce auction site that allows users to post auction listings, place bids, comment, and add listings to a “watchlist”.",
    "auc3": "The site was built using <mark>Django</mark>, a <mark>Python-based framework</mark>, <mark>HTML</mark> and <mark>CSS</mark>. I decided to go with a 70's look.",

    // Wiki beer
    "wb0": "Wiki Beer",
    "wb1": "This project was part of the online CS50W course offered by Harvard University and was submitted in 2021.",
    "wb2": "The assignment was to complete the implementation of a Wikipedia-like online encyclopedia.",
    "wb3": "This was the very first project where I used <mark>Django</mark> as the backend framework, created a basic search engine, and explored <mark>Markdown</mark> syntax. The rest of the website was built using <mark>HTML</mark> and <mark>CSS</mark>.",

    // ================================= Accessibility + Video descriptions - EN
    "aria-close": "Close this project and return to the Projects section",
    "aria-next": "View the next project",
    "aria-prev": "View the previous project",
    "aria-back-to-nav": "Back to the main navigation",

    "vid-vortext": "This illustrative video shows navigation through the app, including the home page, settings, private messages, notifications, and the user profile. VortexT also features a search engine, bookmarks, the ability to save drafts, and an index of all categories. The site is designed to be fully accessible.",
    "vid-profile": "This illustrative video shows navigation through the site. All content is on a single page, and clicking items in the navigation bar automatically scrolls between sections. The background represents a southern night sky, with twinkling stars and occasional shooting stars.",
    "vid-retrofun": "This illustrative video shows the three games I built: a memory game where you match pairs of cards, a single‑player Pong‑inspired game with four paddles that catch as many balls as possible, and a logic game where you clear all colored tiles. Tiles can be cleared only when adjacent to another of the same color, and clearing larger groups yields more points.",
    "vid-portfolio": "This illustrative video shows my portfolio website, the one you are viewing now, including the rotating full moon visible on the home page.",
    "vid-social": "This illustrative video shows key features: following users, liking and commenting on posts, and viewing a feed of followed users. You can also publish your own posts, see them on a dedicated page, and choose between classic pagination and infinite scrolling.",
    "vid-mail": "This illustrative video shows how to view your inbox, mark emails as read or unread, archive and reply to messages. You can also delete emails, view sent mail, and switch the visual theme. I created three themes inspired by personal photographs taken in Babelsberg Park, Potsdam.",
    "vid-auction": "This illustrative video shows how to browse products by category, place bids, and comment on listings. You can also view all active listings, create a new listing, add items to a watchlist, and review auctions you have won.",
    "vid-wiki": "This illustrative video shows how to navigate the site from the home page and use the search engine. You can also create your own wiki entries, edit them, and open random pages. This wiki was created around the theme of German beers.",
    
    // ============================================================== About - EN
    "abo-title": "About me",

    "abo1": "Hello, my name is Aurélie Chan. I am French, and I have lived in Finland for 10 years and in Canada for 7 years. Now, I am permanently settled in Potsdam, Germany.",
    "abo2": "After several years working as a forklift operator and then as an IT technician, I decided it was time for a change and dove into the world of programming. I also hold a college diploma in Visual Arts and New Technologies, which has always kept me connected to creativity and digital tools.",
    "abo3": "During and after my training, I had the chance to build several <mark>full-stack</mark> projects working with a variety of <mark>JavaScript</mark> and <mark>Python</mark> libraries and frameworks like <mark>jQuery</mark>, <mark>ReactJS</mark>, <mark>ThreeJS</mark>, <mark>Django</mark>, <mark>Django REST Framework</mark>, and <mark>Flask</mark>.",
    "abo4": "Thanks to those projects and my professional experience, I’ve built strong skills in <mark>SQL databases</mark>, including <mark>PostgreSQL</mark>, <mark>Microsoft SQL Server</mark>, and <mark>SQLite</mark>.",
    "abo5": "What I enjoy most is creating original, user-friendly, and interactive websites, coded entirely from scratch using pure <mark>HTML</mark>, <mark>CSS</mark>, and pure <mark>JavaScript</mark>. I’m also continuously developing my personal social network project, <a href='https://vortext.eu/' target='_blank' class='vtx-link'>VortexT</a>, regularly adding new features. A mobile version is currently in the works!",
    "abo6": "To learn more about me and my projects, please visit the links below:",

    // ============================================================ Contact - EN
    "con-title": "Contact",

    "errorName": "Please enter your name.",
    "errorEmail": "Please enter your email address.",
    "errorMessage": "Your message is empty."
  },


  'de': {
    // =============================================================== Home - DE
    "nb1": "Startseite",
    "nb2": "Projekte",
    "nb3": "Über mich",
    "nb4": "Kontakt",
    "dev": "Full-Stack-Entwicklerin",
    "des": "mit einer kreativen Note.",

    // =========================================================== Projects - DE
    "pro-title": "Projekte",
    "pro-intro": "Klicken Sie auf die Projekte unten, um weitere Details zu sehen.",

    "btn1": "Siehe Website",
    "btn2": "Siehe Video",
    "btn3": "Siehe Code",

    // VortexT
    "qa0": "VortexT",
    "qa1": "Diese Frage-und-Antwort-Website entstand ursprünglich als Abschlussprojekt für den Onlinekurs CS50W der Harvard University. Ich habe den Prototyp Ende 2022 erstellt und entwickle ihn seitdem kontinuierlich weiter. Die erste Beta-Version wurde im Februar 2024 veröffentlicht.",
    "qa2": "Die Website umfasst unter anderem eine Suchmaschine, eine Profilseite, In-App-Benachrichtigungen, einen privaten Nachrichtenbereich und ein Lesezeichen-System.",
    "qa3": "Dies ist das erste Projekt, bei dem ich <mark>ReactJS</mark> für das Frontend und das <mark>Django REST Framework</mark> für das Backend verwendet habe. Die Datenbank ist <mark>PostgreSQL</mark>, und das Styling erfolgt vollständig mit <mark>CSS</mark>. <mark>Cloudflare</mark> wird als CDN verwendet, und die Bilder werden auf <mark>Backblaze</mark> gespeichert.",

    // Professional website
    "pro0": "Pro-fil",
    "pro1": "Das ist die zweite Website, die ich online gestellt habe, Anfang 2023.",
    "pro2": "Ich habe diese Website von Grund auf neu erstellt und dabei <mark>HTML</mark>, <mark>CSS</mark> für das Styling und die meisten Animationen wie das Funkeln und die Sternschnuppen, <mark>Vanilla Javascript</mark> und <mark>PHP</mark> für das Kontaktformular verwendet.",
    "pro3": "Ich habe versucht, die Himmelsansicht aus einer australischen Perspektive zu reproduzieren und dabei die Positionierung der Sternbilder und des Mondes zu beachten.",

    // Retrofun
    "ret0": "Retrofun-Spiele",
    "ret1": "Das ist die allererste Website, die ich erstellt habe, als Abschlussprojekt, sechs Monate nachdem ich mit dem Programmieren begonnen hatte. Sie wurde im Dezember 2020 fertiggestellt und ist seit Januar 2021 online.",
    "ret2": "Bei diesem Projekt habe ich <mark>HTML</mark> und <mark>CSS</mark> verwendet. Die Spiele habe ich in <mark>Vanilla Javascript</mark> geschrieben. Ich habe <mark>Affinity Designer</mark> verwendet, um die Karten des Memory-Spiels zu erstellen und <mark>Audacity</mark> für die Soundeffekte. Ich habe <mark>Flask</mark> als Backend-Mikroframework in <mark>Python</mark> verwendet. Es verarbeitet Daten, die mittels <mark>JSON</mark> an eine <mark>SQLite</mark>-Datenbank übermittelt werden. Ich habe <mark>Python</mark>-Wörterbücher erstellt, um diese Website dynamisch dreisprachig zu machen.",

    // Portfolio
    "por0": "Mein Portfolio",
    "por1": "Das ist die dritte Website, die ich veröffentlicht habe, im Jahr 2023.",
    "por2": "Bei diesem Projekt habe ich <mark>HTML</mark>, <mark>CSS</mark>, <mark>Vanilla Javascript</mark>, <mark>ThreeJS</mark> zur Erstellung der 3D-Animation und <mark>PHP</mark> für das Kontaktformular verwendet. Ich habe <mark>JSON</mark>-Wörterbücher erstellt, um die Website dynamisch dreisprachig zu machen.",
    "por3": "Dies ist meine allererste Website, die <mark>ThreeJS</mark> verwendet. Ich hatte viel Spaß mit dieser Bibliothek und plane, sie weiter zu erforschen. Das Konzept bestand darin, ein immersives Erlebnis zu schaffen, ähnlich der Ästhetik von Videospielen.",
    
    // Social Media
    "sm0": "Soziale Medien",
    "sm1": "Dieses Projekt war Teil des Onlinekurses CS50W der Harvard University und wurde 2022 eingereicht.",
    "sm2": "Die Anforderung bestand darin, eine Twitter-ähnliche Website für ein soziales Netzwerk zu entwerfen, die es den Benutzern ermöglicht, Beiträge zu erstellen und zu bearbeiten, anderen Benutzern zu folgen und Beiträge zu „liken“.",
    "sm3": "Die Implementierung musste unter Verwendung von <mark>Python</mark> mit <mark>Django</mark> als Backend-Framework, <mark>JavaScript</mark> im Frontend, <mark>HTML</mark> und <mark>CSS</mark> durchgeführt werden.",
    "sm4": "Für den visuellen Aspekt habe ich mich von der Atmosphäre des Berliner Nachtlebens inspirieren lassen.",

    // Mail box
    "mb0": "Mailbox",
    "mb1": "Dieses Projekt war Teil des Onlinekurses CS50W der Harvard University und wurde 2022 eingereicht.",
    "mb2": "Die Anforderung bestand darin, ein Frontend für einen E-Mail-Client zu entwerfen, der API-Aufrufe zum Senden, Empfangen und Aktualisieren von E-Mails durchführt und dabei die von der Anwendung bereitgestellte API nutzt.",
    "mb3": "Diese einseitige Anwendung musste mit <mark>JavaScript</mark>, <mark>HTML</mark> und <mark>CSS</mark> erstellt werden. Für das Backend wird <mark>Django</mark> verwendet, ein auf <mark>Python</mark> basierendes Framework.",

    // Auction website
    "auc0": "Auktionsseite",
    "auc1": "Dieses Projekt war Teil des Onlinekurses CS50W der Harvard University und wurde 2021 eingereicht.",
    "auc2": "Die Aufgabe bestand darin, eine eBay-ähnliche E-Commerce-Auktionsseite zu implementieren, die es den Benutzern ermöglicht, Auktionsangebote einzustellen, Gebote abzugeben, zu kommentieren und Angebote zu einer „Beobachtungsliste“ hinzuzufügen.",
    "auc3": "Die Seite wurde mit <mark>Django</mark>, einem auf <mark>Python</mark> basierenden Framework, <mark>HTML</mark> und <mark>CSS</mark> erstellt. Ich habe mich für einen 70er-Jahre-Look entschieden.",

    // Wiki beer
    "wb0": "Wiki Bier",
    "wb1": "Dieses Projekt war Teil des Onlinekurses CS50W der Harvard University und wurde 2021 eingereicht.",
    "wb2": "Die Aufgabe bestand darin, die Implementierung einer Wikipedia-ähnlichen Online-Enzyklopädie abzuschließen.",
    "wb3": "Dies war das allererste Projekt, bei dem ich <mark>Django</mark> als Backend-Framework verwendet, eine einfache Suchmaschine erstellt und die <mark>Markdown-Syntax</mark> erkundet habe. Der Rest der Website wurde mit <mark>HTML</mark> und <mark>CSS</mark> erstellt.",

    // ====================================== Barrierefreiheit + Videobeschreibungen - DE
    "aria-close": "Dieses Projekt schließen und zum Bereich „Projekte“ zurückkehren",
    "aria-next": "Nächstes Projekt anzeigen",
    "aria-prev": "Vorheriges Projekt anzeigen",
    "aria-back-to-nav": "Zur Hauptnavigation zurückkehren",

    "vid-vortext": "Dieses illustrative Video zeigt die Navigation durch die App, einschließlich Startseite, Einstellungen, privaten Nachrichten, Benachrichtigungen und Benutzerprofil. VortexT bietet außerdem eine Suchfunktion, Lesezeichen, das Speichern von Entwürfen und ein Kategorienverzeichnis. Die Website ist auf vollständige Barrierefreiheit ausgelegt.",
    "vid-profile": "Dieses illustrative Video zeigt die Navigation durch die Website. Der gesamte Inhalt befindet sich auf einer einzigen Seite; ein Klick auf die Elemente der Navigationsleiste scrollt automatisch zwischen den Abschnitten. Der Hintergrund zeigt einen südlichen Nachthimmel mit funkelnden Sternen und gelegentlichen Sternschnuppen.",
    "vid-retrofun": "Dieses illustrative Video zeigt drei von mir erstellte Spiele: ein Memory-Spiel zum Finden gleicher Kartenpaare, ein Pong‑ähnliches Einzelspieler‑Spiel mit vier Schlägern zum Fangen möglichst vieler Bälle sowie ein Logikspiel, bei dem alle farbigen Kacheln entfernt werden müssen—Kacheln können nur entfernt werden, wenn sie an eine gleichfarbige Kachel angrenzen; größere Gruppen bringen mehr Punkte.",
    "vid-portfolio": "Dieses illustrative Video zeigt meine Portfolio‑Website, die Sie gerade betrachten, einschließlich des sich drehenden Vollmondes auf der Startseite.",
    "vid-social": "Dieses illustrative Video zeigt zentrale Funktionen: anderen Nutzern folgen, Beiträge liken und kommentieren sowie den Feed der gefolgten Nutzer ansehen. Eigene Beiträge können veröffentlicht, auf einer eigenen Seite angezeigt und wahlweise mit klassischer Paginierung oder Endlos‑Scrollen betrachtet werden.",
    "vid-mail": "Dieses illustrative Video zeigt, wie man den Posteingang anzeigt, E‑Mails als gelesen oder ungelesen markiert, archiviert und beantwortet. Außerdem kann man E‑Mails löschen, gesendete Nachrichten ansehen und das visuelle Design ändern. Ich habe drei Designs auf Basis eigener Fotos aus dem Park Babelsberg in Potsdam erstellt.",
    "vid-auction": "Dieses illustrative Video zeigt, wie man Produkte nach Kategorien durchsucht, Gebote abgibt und Einträge kommentiert. Außerdem kann man alle aktiven Angebote ansehen, neue Einträge erstellen, Artikel zur Beobachtungsliste hinzufügen und die gewonnenen Auktionen einsehen.",
    "vid-wiki": "Dieses illustrative Video zeigt die Navigation von der Startseite aus und die Nutzung der Suchfunktion. Man kann eigene Wiki‑Einträge erstellen, bearbeiten und zufällige Seiten öffnen. Dieses Wiki behandelt das Thema deutsche Biere.",

    // ============================================================== About - DE
    "abo-title": "Über mich",

    "abo1": "Hallo, mein Name ist Aurélie Chan. Ich bin Französin und habe 10 Jahre in Finnland und 7 Jahre in Kanada gelebt. Jetzt bin ich dauerhaft in Potsdam, Deutschland, sesshaft.",
    "abo2": "Nach mehreren Jahren als <mark>Gabelstaplerfahrerin</mark> und später als <mark>IT-Technikerin</mark> habe ich beschlossen, einen neuen Weg einzuschlagen und mich der <mark>Programmierung</mark> zu widmen. Ich habe außerdem ein Hochschuldiplom in <mark>Bildender Kunst</mark> und <mark>Neuen Technologien</mark>, das mir stets den Bezug zu Kreativität und digitalen Werkzeugen ermöglicht hat.",
    "abo3": "Während und nach meiner Ausbildung konnte ich mehrere <mark>Full-Stack-Projekte</mark> umsetzen und mit verschiedenen <mark>JavaScript</mark>- und <mark>Python</mark>-Bibliotheken und Frameworks wie <mark>jQuery</mark>, <mark>ReactJS</mark>, <mark>ThreeJS</mark>, <mark>Django</mark>, <mark>Django REST Framework</mark> und <mark>Flask</mark> arbeiten.",
    "abo4": "Durch diese Projekte und meine Berufserfahrung habe ich fundierte Kenntnisse in <mark>SQL-Datenbanken</mark> erworben, darunter <mark>PostgreSQL</mark>, <mark>Microsoft SQL Server</mark> und <mark>SQLite</mark>.",
    "abo5": "Am meisten Freude bereitet mir das Erstellen von <mark>originellen</mark>, <mark>benutzerfreundlichen</mark> und <mark>interaktiven</mark> Websites, die ich komplett von Grund auf mit <mark>HTML</mark>, <mark>CSS</mark> und <mark>JavaScript</mark> programmiere. Ich arbeite auch kontinuierlich an meinem persönlichen sozialen Netzwerk <a href='https://vortext.eu/' target='_blank' class='vtx-link'>VortexT</a> weiter und erweitere es regelmäßig um neue Funktionen. Eine mobile Version ist derzeit in Entwicklung!",
    "abo6": "Um mehr über mich und meine Projekte zu erfahren, besuchen Sie bitte die unten stehenden Links:",

    // ============================================================ Contact - DE
    "con-title": "Kontakt",

    "errorName": "Bitte geben Sie Ihren Namen ein.",
    "errorEmail": "Bitte geben Sie Ihre E-Mail-Adresse ein.",
    "errorMessage": "Ihre Nachricht ist leer."
  },


  'fr': {
    // =============================================================== Home - FR
    "nb1": "Accueil",
    "nb2": "Projets",
    "nb3": "À propos",
    "nb4": "Contact",
    "dev": "Développeuse full stack",
    "des": "avec une touche créative.",

    // =========================================================== Projects - FR
    "pro-title": "Projets",
    "pro-intro": "Cliquez sur les projets ci-dessous pour plus de détails.",

    "btn1": "Voir le site",
    "btn2": "Voir la vidéo",
    "btn3": "Voir le code",

    // VortexT
    "qa0": "VortexT",
    "qa1": "Ce site de questions-réponses a commencé comme projet final dans le cadre du cours CS50W en ligne proposé par l’Université Harvard. J’ai créé le prototype à la fin de l’année 2022 et je continue de le développer depuis. La première version bêta a été mise en ligne en février 2024.",
    "qa2": "Le site comprend notamment un moteur de recherche, une page de profil, des notifications in-app, une section de messages privés et un système de marque-pages.",
    "qa3": "C'est le premier projet où j'utilise <mark>Reactjs</mark> pour le frontend et <mark>Django REST Framework</mark> pour le backend. La base de donnée est <mark>PostgreSQL</mark> et le style est entièrement créé avec <mark>CSS</mark>. J'utilise <mark>Cloudflare</mark> comme CDN et les images sont stockées sur <mark>Backblaze</mark>.",

    // Professional website
    "pro0": "Pro-fil",
    "pro1": "C’est le deuxième site web que j’ai mis en ligne, au début de l’année 2023.",
    "pro2": "J'ai créé ce site web à partir de zéro, en utilisant <mark>HTML</mark>, <mark>CSS</mark> pour le style et la plupart des animations telles que les étoiles scintillantes et filantes, <mark>Vanilla Javascript</mark>, et <mark>PHP</mark> pour gérer le formulaire de contact.",
    "pro3": "J'ai essayé de reproduire la vue du ciel d'un point de vue austral, en respectant le positionnement des constellations et de la lune.",

    // Retrofun
    "ret0": "Jeux Retrofun",
    "ret1": "C’est le tout premier site web que j’ai créé, en tant que projet final, six mois après avoir commencé à apprendre la programmation. Il a été terminé en décembre 2020 et est en ligne depuis janvier 2021.",
    "ret2": "Pour ce projet, j'ai utilisé <mark>HTML</mark> et <mark>CSS</mark>. J'ai écrit les jeux en <mark>Javascript Vanilla</mark>. J'ai utilisé <mark>Affinity Designer</mark> pour créer les cartes du jeu de mémoire et <mark>Audacity</mark> pour les effets sonores. J'ai utilisé <mark>Flask</mark> comme microframework backend en <mark>Python</mark>. Il gère les données communiquées par <mark>JSON</mark> à une base de données <mark>SQLite</mark>. J'ai créé des dictionnaires en <mark>Python</mark> pour rendre ce site web dynamiquement trilingue.",

    // Portfolio
    "por0": "Mon portfolio",
    "por1": "C’est le troisième site web que j’ai publié, en 2023.",
    "por2": "Pour ce projet, j'ai utilisé <mark>HTML</mark>, <mark>CSS</mark>, <mark>Vanilla Javascript</mark>, <mark>ThreeJS</mark> pour créer l'animation 3D, et <mark>PHP</mark> pour gérer le formulaire de contact. J'ai construit des dictionnaires <mark>JSON</mark> pour rendre le site dynamiquement trilingue.",
    "por3": "Il s'agit de mon tout premier site web utilisant <mark>ThreeJS</mark>. Je me suis vraiment amusée avec cette bibliothèque et j'ai l'intention de l'explorer davantage. Le concept était de donner une expérience immersive, similaire à l'esthétisme des jeux vidéo.",
    
    // Social Media
    "sm0": "Médias sociaux",
    "sm1": "Ce projet a été réalisé dans le cadre du cours CS50W en ligne de l’Université Harvard, et soumis en 2022.",
    "sm2": "Il s'agissait de concevoir un site web de réseau social de type Twitter qui permette aux utilisateurs de créer et d'éditer des messages, de suivre d'autres utilisateurs et d’« aimer » des messages.",
    "sm2": "L'implémentation devait être faite en utilisant <mark>Python</mark> avec <mark>Django</mark> comme framework backend, <mark>JavaScript</mark> dans le frontend, <mark>HTML</mark>, et <mark>CSS</mark>.",
    "sm3": "Pour l'aspect visuel du site, j'ai décidé d'être créative et de m'inspirer de la vie nocturne berlinoise.",

    // Mail box
    "mb0": "Boîte courriel",
    "mb1": "Ce projet a été réalisé dans le cadre du cours CS50W en ligne de l’Université Harvard, et soumis en 2022.",
    "mb2": "L'exigence était de concevoir un front-end pour un client de messagerie qui fait des appels API pour envoyer, recevoir et mettre à jour des courriels, en utilisant l'API fournie par l'application.",
    "mb3": "Cette application d'une seule page devait être réalisée en utilisant <mark>JavaScript</mark>, <mark>HTML</mark> et <mark>CSS</mark>. Le backend utilise <mark>Django</mark>, un framework basé sur <mark>Python</mark>.",

    // Auction website
    "auc0": "Enchères en ligne",
    "auc1": "Ce projet a été réalisé dans le cadre du cours CS50W en ligne de l’Université Harvard, et soumis en 2021.",
    "auc2": "L'exigence était de compléter l'implémentation d'un site de vente aux enchères de type eBay qui permet aux utilisateurs d'afficher des listes d'enchères, de placer des offres, de commenter, et d'avoir une « liste de suivi ».",
    "auc3": "Ce site a été créé à l'aide de <mark>Django</mark>, un framework basé sur <mark>Python</mark>, de <mark>HTML</mark> et de <mark>CSS</mark>. J'ai opté pour un look des années 70.",

    // Wiki beer
    "wb0": "Wiki bières",
    "wb1": "Ce projet a été réalisé dans le cadre du cours CS50W en ligne de l’Université Harvard, et soumis en 2021.",
    "wb2": "L'exigence était de compléter l'implémentation d'une encyclopédie en ligne de type Wikipedia.",
    "wb3": "C'est le tout premier projet pour lequel j'ai utilisé <mark>Django</mark> comme framework backend, créé un moteur de recherche basique et exploré la syntaxe <mark>Markdown</mark>. Le reste du site a été construit en <mark>HTML</mark> et <mark>CSS</mark>.",

    // ================================= Accessibilité + Descriptions vidéo - FR
    "aria-close": "Fermer ce projet et revenir à la section Projets",
    "aria-next": "Voir le projet suivant",
    "aria-prev": "Voir le projet précédent",
    "aria-back-to-nav": "Revenir à la navigation principale",

    "vid-vortext": "Cette vidéo illustrative montre la navigation dans l’application : page d’accueil, paramètres, messagerie privée, notifications et page de profil. VortexT propose aussi un moteur de recherche, un système de marque‑pages, l’enregistrement de brouillons et un index des catégories. Le site est conçu pour être entièrement accessible.",
    "vid-profile": "Cette vidéo illustrative montre la navigation sur le site. Tout le contenu se trouve sur une seule page et cliquer sur les éléments de la barre de navigation fait défiler automatiquement les sections. L’arrière‑plan représente un ciel nocturne austral avec des étoiles scintillantes et, parfois, une étoile filante.",
    "vid-retrofun": "Cette vidéo illustrative montre les trois jeux que j’ai créés : un jeu de mémoire où il faut associer des paires de cartes, un jeu inspiré de Pong adapté pour un seul joueur avec quatre raquettes pour attraper un maximum de balles, et un jeu de logique où il faut éliminer toutes les cases colorées—on ne peut supprimer des cases que lorsqu’elles sont adjacentes à une autre de même couleur, et de grands groupes rapportent plus de points.",
    "vid-portfolio": "Cette vidéo illustrative montre mon site portfolio, celui que vous consultez actuellement, avec la pleine lune en rotation visible sur la page d’accueil.",
    "vid-social": "Cette vidéo illustrative montre différentes fonctionnalités : suivre un utilisateur, aimer et commenter des publications, et consulter le fil des personnes suivies. On peut aussi publier ses propres messages, les retrouver sur une page dédiée, et choisir entre une pagination classique et un défilement infini.",
    "vid-mail": "Cette vidéo illustrative montre comment afficher la liste des courriels, les marquer comme lus ou non lus, les archiver et répondre. Il est également possible de supprimer des courriels, de voir les messages envoyés et de changer de thème visuel. J’ai créé trois thèmes inspirés de photos personnelles prises au parc de Babelsberg, à Potsdam.",
    "vid-auction": "Cette vidéo illustrative montre comment rechercher des produits par catégorie, enchérir et commenter un article. On peut aussi voir la liste de tous les articles en vente, créer une annonce, ajouter un article à une liste de surveillance et consulter les enchères remportées.",
    "vid-wiki": "Cette vidéo illustrative montre comment naviguer à partir de la page d’accueil et utiliser le moteur de recherche. On peut aussi créer sa propre entrée, la modifier et afficher des pages au hasard. J’ai créé ce wiki sur le thème des bières allemandes.",
    
    // ============================================================== About - FR
    "abo-title": "À propos de moi",

    "abo1": "Bonjour, je m'appelle Aurélie Chan. Je suis française, j'ai vécu 10 ans en Finlande et 7 ans au Canada. Désormais, je suis définitivement installée à Potsdam, en Allemagne.",
    "abo2": "Après plusieurs années comme <mark>cariste-manutentionnaire</mark>, puis comme <mark>technicienne informatique</mark>, j’ai ressenti le besoin de changement et me suis tournée vers la <mark>programmation</mark>. Je suis également titulaire d’un diplôme collégial en <mark>Arts visuels</mark> et <mark>Nouvelles technologies</mark>, ce qui m’a toujours permis de garder un lien avec la créativité et les outils numériques.",
    "abo3": "Pendant et après ma formation, j’ai eu l’opportunité de développer plusieurs projets <mark>full-stack</mark> en travaillant avec diverses bibliothèques et frameworks <mark>JavaScript</mark> et <mark>Python</mark> comme <mark>jQuery</mark>, <mark>ReactJS</mark>, <mark>ThreeJS</mark>, <mark>Django</mark>, <mark>Django REST Framework</mark> et <mark>Flask</mark>.",
    "abo4": "Ces projets, ainsi que mon expérience professionnelle, m’ont permis d’acquérir de solides compétences en <mark>bases de données SQL</mark>, notamment <mark>PostgreSQL</mark>, <mark>Microsoft SQL Server</mark> et <mark>SQLite</mark>.",
    "abo5": "Ce que j’aime par-dessus tout, c’est créer des sites web <mark>originaux</mark>, <mark>conviviaux</mark> et <mark>interactifs</mark>, entièrement codés à la main avec du <mark>HTML</mark>, du <mark>CSS</mark> et du <mark>JavaScript</mark> pur. Je développe aussi continuellement mon réseau social personnel, <a href='https://vortext.eu/' target='_blank' class='vtx-link'>VortexT</a>, en y ajoutant régulièrement de nouvelles fonctionnalités. Une version mobile est actuellement en cours de développement !",
    "abo6": "Pour en savoir plus sur moi et mes projets, visitez les liens ci-dessous :",

    // ============================================================ Contact - FR
    "con-title": "Contact",

    "errorName": "Veuillez entrer votre nom.",
    "errorEmail": "Veuillez entrer votre adresse e-mail.",
    "errorMessage": "Votre message est vide."
  }
}


// Translate placeholder of the contact form
export function contactPlaceholder(lang) {
  if (lang === 'en') {
    document.getElementsByName('name')[0].placeholder='Name';
    document.getElementsByName('company')[0].placeholder='Company (optional)';
    document.getElementsByName('email')[0].placeholder='E-mail Address';
    document.getElementsByName('message')[0].placeholder='Your message';
    document.getElementById('submit').value='Send';
  }

  if (lang === 'de') {
    document.getElementsByName('name')[0].placeholder='Name';
    document.getElementsByName('company')[0].placeholder='Unternehmen (fakultativ)';
    document.getElementsByName('email')[0].placeholder='E-Mail Adresse';
    document.getElementsByName('message')[0].placeholder='Ihre Nachricht';
    document.getElementById('submit').value='Senden';
  }

  if (lang === 'fr') {
    document.getElementsByName('name')[0].placeholder='Nom';
    document.getElementsByName('company')[0].placeholder='Société (facultatif)';
    document.getElementsByName('email')[0].placeholder='Votre adresse e-mail';
    document.getElementsByName('message')[0].placeholder='Votre message';
    document.getElementById('submit').value='Envoyer';
  }
}
