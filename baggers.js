// List of baggers...
var data = {
  speakers: [
    {
      since: '2012-11-05',
      name: 'David Gageot',
      bio:
        'Developer Advocate pour la Google Cloud Platform. Développeur passionné!',
      picture:
        'http://gravatar.com/avatar/f0887bf6175ba40dca795eb37883a8cf?s=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/dgageot',
        },
        {
          name: 'Blog',
          url: 'https://blog.javabien.net/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Transform your Legacy Application with Kubernetes and Istio',
          abstract:
            "Kubernetes is often used to run micro-services based applications. Istio's service mesh adds even more power and flexibility to those applications. But what about your Good Old Monolithic Legacy Application? Should you feel left alone if you're not cloud-native? I'm going to demonstrate how to leverage Kubernetes and Istio to enrich an existing application without touching a single line of its code. Because, you know, the original developers are long gone. Through lots of demos and zero slide, the attendees will learn to add Authentication, SSL Termination, Monitoring, Blue/Green Deployments, Canary builds, Fault tolerance...",
          tags: ['Docker', 'Kubernetes', 'Istio', 'DevOps', 'Cloud'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'dgageot',
        mail: 'david@gageot.net',
      },
    },
    {
      since: '2018-06-29',
      name: 'Benoit Fontaine',
      bio:
        'Après 15 années à jouer les couteaux suisses en société de service, Benoit intègre AXA en 2015 en tant que Technical Leader pour la tribu IARD Entreprise.',
      picture:
        'https://fr.gravatar.com/avatar/71b290a594201074c708a7d023b31ed6?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/Bogala',
        },
        {
          name: 'Website',
          url: 'http://benoitfontaine.net/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title:
            'vNext culture : manager sa dette technique et son obsolescence',
          abstract:
            'Dès lors que l’on se retrouve face à un projet vieillissant, voire même legacy, on se retrouve un peu comme Neo face à Morpheus : Soit on prend la pillule bleue, on ferme les yeux et on se contente de maintenir l’application, Soit on prend la pillule rouge et on part avec Alice au pays des merveilles. Voyons ensemble quelques astuces pour aider pillule rouge à mieux passer.',
          tags: ['technical', 'debt', 'dette', 'technique', 'obsolescence'],
          lang: ['fr'],
        },
        {
          title: 'De la bienveillance dans vos PR',
          abstract:
            'Lancer une Pull Request, c’est un peu se mettre à nu : on met à l’épreuve notre état d’esprit, nos capacités et notre savoir-faire. Même si c’est le meilleur moyen d’avoir du feedback rapidement sur son code, c’est aussi le mettre au jugement des autres. Nous y sommes ! Le jugement. Ce mot peut corrompre une méthode de travail efficace et la transformer en veritable procès ! Ne vous inquiétez pas, avec les bonnes méthodes, vous pourrez non seulmement vous prémunir de ce genre de derive mais aussi aider vos collègues à s’améliorer.',
          tags: [
            'bienveillance',
            'PR',
            'pull',
            'request',
            'estime',
            'soi',
            'open',
            'source',
            'guithub',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'benotfontaine',
        mail: 'benoit.fontaine@live.fr',
      },
    },
    {
      since: '2013-02-09',
      name: 'François Sarradin',
      bio:
        'Consultant Java/Scala/&#955; | Manager technique capitalisation chez Ippon Technologies',
      picture:
        'https://fr.gravatar.com/userimage/14188452/90d16f0a978342383d8c5b392238a010.jpg?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://kerflyn.wordpress.com/',
        },
      ],
      location: 'Paris, remote',
      sessions: [
        {
          title: 'Ce que vous devez savoir de la programmation fonctionnelle',
          abstract:
            "La programmation fonctionnelle est un paradigme qui est beaucoup plus ancien que vous ne le pensez et qui a eu des impacts assez importants dans le domaine du développement en général. Pourtant, ce n'est que très récemment que ce paradigme a commencé à émerger auprès des développeurs de tout bord. Je vous propose de découvrir ce qui définit la programmation fonctionnelle, les critiques qu'elle fait concernant le développement traditionnel et comment elle permet de répondre aux enjeux des projets les plus récents. Cette présentation s'adresse aussi bien à un public développeur ou non.",
          tags: ['Programmation fonctionnelle'],
          lang: ['fr'],
        },
        {
          title: 'A Web Framework in Scala from Scratch in One Hour',
          abstract:
            '(live coding) Discover Scala through the development of an efficient small tested Web framework.',
          tags: ['Scala', 'Programmation fonctionnelle'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Une alternative à AOP ?',
          abstract:
            '(poney / live coding / présentation) Découvrez quelle alternative la programmation fonctionnelle propose face à AOP (session jouée à Devoxx FR 2013 sous le titre "FlatMap Zat Shit")',
          tags: ['Java', 'Scala', 'Programmation fonctionnelle'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'fsarradin',
        mail: 'fsarradin@gmail.com',
      },
    },
    {
      since: '2013-02-09',
      name: 'Nathaniel Richand',
      bio: 'Coach agile indépendant - Entrepreneur',
      picture: 'img/baggers/photo_nathaniel.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.agilexperience.fr',
        },
        {
          name: 'Web',
          url: 'http://blog.xebia.fr/author/nrichand',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: "Parlons d'agilité",
          abstract:
            "Vous êtes en train de vous intéresser à l'agilité et vous souhaitez échanger sur le sujet? Je vous propose un mix de retour d'expérience et de discussion pour que vous puissiez bien comprendre les enjeux, l'intérêt mais également les prérequis.",
          tags: ['Agile'],
          lang: ['fr'],
        },
        {
          title: 'Agilité, un pas plus loin',
          abstract:
            "Vous avez mis en place Scrum ou Kanban (ou un mix maison) sur votre projet et vous commencer à stagner. Discutons ensemble des opportunités pour aller plus loin et franchir un nouveau cap pour sortir des produits d'exception!",
          tags: ['Agile'],
          lang: ['fr'],
        },
        {
          title: 'Plus de fun et de diversité dans vos rétrospectives',
          abstract:
            'Discussion sur comment bien animer une rétrospective et présentation de nombreux formats.',
          tags: ['Agile'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'nrichand',
        mail: 'nrichand@brownbaglunch.fr',
      },
    },
    {
      since: '2013-02-11',
      name: 'Mathilde Lemée',
      bio: 'Ingénieur R&amp;D - Terracotta',
      picture: 'img/baggers/photo_mathilde.jpeg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.java-freelance.fr/',
        },
      ],
      location: 'Paris, La Défense, Banlieue',
      sessions: [
        {
          title: 'Cache & BigData',
          abstract:
            'Différents sujets : Terracotta, ehcache, clustering, scalabilité, concepts avancés sur le cache ...',
          tags: ['Cache', 'Big Data', 'Test', 'Mobile', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Les tests',
          abstract:
            'Différents sujets : Selenium, FluentLenium, Mise en place de Selenium, Byteman ...',
          tags: ['Cache', 'Big Data', 'Test', 'Mobile', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Le mobile',
          abstract:
            "Premier pas avec Corona SDK, REX sur 6 mois de dev et de marketing d'applis mobile (http://www.aetys.fr)",
          tags: ['Cache', 'Big Data', 'Test', 'Mobile', 'Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'mathildelemee',
        mail: 'mathilde.lemee@yahoo.fr',
      },
    },
    {
      since: '2013-02-13',
      name: 'Romain Maton',
      bio: 'Consultant Java/Web/Agile - Freelance',
      picture:
        'https://lh4.googleusercontent.com/-VcEH4WuA6XE/ThmqIx4nf_I/AAAAAAAAAso/Az2a4TtTgmA/s800/avatar_rmat0n.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.web-tambouille.fr/',
        },
      ],
      location: 'La Défense et alentours uniquement',
      sessions: [
        {
          title: 'Tout ce que vous devez savoir sur Node.js',
          abstract:
            "Découvrez les bases de Node.js, son écosystème, ses atouts, ses faiblesses et tout ce que vous devez savoir du démarrage votre premier projet jusqu'à sa mise en ligne !",
          tags: ['JavaScript', 'NodeJS', 'Outils'],
          lang: ['fr'],
        },
        {
          title: 'Optimiser votre site Web sur mobile',
          abstract:
            "Nous regarderons l'évolution de ce marché mobile, les normes existantes, les bonnes pratiques de développement mobile ainsi que les outils et frameworks qui vous permettront de sublimer votre site web pour smartphone.",
          tags: ['JavaScript', 'NodeJS', 'Outils'],
          lang: ['fr'],
        },
        {
          title: '24 plugins chrono',
          abstract:
            'Pas de Jack Bauer dans cette session mais un développeur qui passe en revue 24 plugins pour <span style="text-decoration: line-through;">sauver le monde</span> booster votre IDE !',
          tags: ['JavaScript', 'NodeJS', 'Outils'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'rmat0n',
        mail: 'romain.maton@gmail.com',
      },
    },
    {
      since: '2013-02-15',
      name: 'Bernard Notarianni',
      bio: 'Créateur de logiciels et coach agile',
      picture: 'img/baggers/photo_bernard.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/notarianni/',
        },
      ],
      location: 'Paris, banlieue nord (St Denis..) ou ouest (La Défense...)',
      sessions: [
        {
          title: 'Agile...',
          abstract:
            "Comment passer à l'agile. Comment convaincre ses managers et/ou ses collègues. Créer un backlog, devenir product manager. Améliorer son projet agile existant. Créer une communauté de praticiens dans sa boite. Etc.",
          tags: ['Agile', 'Startup', 'Erlang', 'JavaScript'],
          lang: ['fr'],
        },
        {
          title: 'Startup...',
          abstract:
            "Retour d'expérience en tant que jeune co-créateur de startup qui s'est lancé depuis début 2012. Lean Startup, l'agile et le reste in real life.",
          tags: ['Agile', 'Startup', 'Erlang', 'JavaScript'],
          lang: ['fr'],
        },
        {
          title: 'Erlang...',
          abstract:
            "C'est quoi Erlang? Ca marche comment? Pourquoi je dois faire de l'Erlang?",
          tags: ['Agile', 'Startup', 'Erlang', 'JavaScript'],
          lang: ['fr'],
        },
        {
          title: 'Ember JS...',
          abstract: "Retour d'expérience, live coding, dojo...",
          tags: ['Agile', 'Startup', 'Erlang', 'JavaScript'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'notarianni',
        mail: 'bernard.notarianni@gmail.com',
      },
    },
    {
      since: '2013-02-15',
      name: 'Romain Linsolas',
      bio: 'Fullstack développeur web et nodejs. Tech lead - Société Générale',
      picture:
        'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/4/005/046/246/1b274c9.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://linsolas.github.com/',
        },
      ],
      location: 'La Défense et Paris',
      sessions: [
        {
          title:
            '10 méthodes pour rendre heureux les développeurs, la 7e va vous étonner ! (avec Cyril Lakech)',
          abstract:
            "Il est impératif d'attirer les meilleurs développeurs, mais également de savoir les garder au sein de son entreprise. Si cela est simple à dire, réussir à le faire correctement et à maintenir un tel contexte attractif n'est pas chose facile. Voici 10 choses qu'il convient de mettre en place chez vous pour rendre vos développeurs heureux.",
          tags: ['Développeur', 'Recrutement', 'Carrière'],
          lang: ['fr'],
        },
        {
          title: 'Du JavaScript propre ? Challenge Accepted!',
          abstract:
            "Ecrire du code JavaScript propre, c'est aujourd'hui possible. L'écosystème autour de ce langage a atteint une maturité suffisante pour se lancer dans le développement de larges applications basées sur ce langage. Cette présentation est un tour d'horizon de cet écosystème, pour que vous n'ayez plus peur de coder en JavaScript !",
          tags: ['JavaScript', 'Usine logicielle'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'romaintaz',
        mail: 'linsolas@gmail.com',
      },
    },
    {
      since: '2013-02-15',
      name: 'David Pilato',
      bio: 'Developer | Evangelist',
      picture:
        'http://www.gravatar.com/avatar/20049a614b7f6838dc87b4bc39c42079.png?s=200',
      websites: [
        {
          name: 'Web',
          url: 'http://david.pilato.fr/',
        },
      ],
      location: 'Régions francophones',
      sessions: [
        {
          title: 'Elasticsearch',
          abstract:
            "Vous utilisez encore des requêtes SQL pour faire des recherches ? Vos utilisateurs vous reprochent de ne pas pouvoir chercher sur toutes les rubriques ? Votre temps de réponse moyen est supérieur à la demi-seconde avec seulement quelques millions de documents ? Il vous faut 3 jours pour produire des statistiques sur vos données ? Vous rêvez d’offrir une recherche 'à la google' sur les données de votre SI ?<br/><br/>Ne cherchez plus ! Cette conférence est faite pour vous.<br/><br/>David présentera au cours de du BBL pourquoi et comment il est passé de la recherche SQL à Elasticsearch en détaillant les apports de ce moteur par rapport à une solution pure Lucene :<ul><li>Pourquoi Elasticsearch ?</li><li>L'indexation</li><li>La recherche</li><li>Les agrégations et le principe de navigation par facettes</li><li>La scalabilité horizontale</li><li>L'analyse et le mapping</li><li>La percolation</li><li>La communauté</li></ul>",
          tags: ['Elasticsearch'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'dadoonet',
        mail: 'david@pilato.fr',
      },
    },
    {
      since: '2013-02-17',
      name: 'Jean-louis Rigau',
      bio: 'Développeur Java, Cloud Addict',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.xebia.fr/author/jlrigau',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/jlrigau/',
        },
      ],
      location: 'La Défense et alentours',
      sessions: [
        {
          title: 'Continuous Deployment avec CloudBees',
          abstract:
            'Déployer une application dans le Cloud depuis un simple « git push », à travers la mise en oeuvre du modèle de Continuous Deployment sur les environnements DEV@Cloud et RUN@Cloud de CloudBees.',
          tags: ['Cloud', 'Usine logicielle'],
          lang: ['fr'],
        },
        {
          title: 'Blue/Green Deployment avec AWS Elastic Beanstalk',
          abstract:
            "Déployer simplement une application sur Amazon à l'aide d'Elastic BeanStalk, et mise en œuvre du principe de Blue-Green Deployment grâce à la fonctionnalité d’URL swapping.",
          tags: ['Cloud', 'Usine logicielle'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'jlrigau',
        mail: 'jeanlouis.rigau@gmail.com',
      },
    },
    {
      since: '2013-02-17',
      name: 'Yannick Grenzinger',
      bio:
        'Coach craft & flow @ beNext, Developper & Continuous Lifelong learner',
      picture:
        'https://fr.gravatar.com/userimage/45029487/b60c363784b0fd99398c74086b10d8b7.png?size=200',
      websites: [
        {
          name: 'About Me',
          url: 'http://about.me/yannick.grenzinger',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/yannickgrenzinger',
        },
      ],
      location: 'Paris et La Défense',
      sessions: [
        {
          title: 'Développer le bon produit avec le Lean Canvas',
          abstract:
            "A une époque où tout business peut être rapidement concurrencé par une startup, il faut savoir créer le bon produit. C’est la où les principes et les outils de Lean Startup (mais aussi Design Thinking ou encore de l'effectuation) viennent nous aider. Je propose une intro rapide et un atelier purement pratique autour de Lean Canvas que j'ai eu l'occasion de pratiquer de nombreuses fois en tant qu'Advisor Lean Startup",
          tags: ['produit', 'lean startup', 'lean canvas'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Apprendre à apprendre',
          abstract:
            'Apprendre est la compétence essentielle à connaître au 21ème siècle. Accro au MOOC (une trentaine de certifications en 2 ans) et développant un PersonalMBA, je vous propose de découvrir et discuter les moyens d’apprendre rapidement aussi bien au niveau personnel, de votre produit/startup et même de votre organisation.',
          tags: ['apprentissage', 'organisation', 'management'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Découvrir la spirale dynamique et des principes pour une organisation adaptée au 21ème siècle',
          abstract:
            "Nos organisations sont en train de vivre une crise existentielle majeure. Pour preuve, l'engouement pour le documentaire 'le bonheur au travail' ou le mouvement des 'entreprises libérées'. Mais plus que la libération de l'entreprise, l'important est de comprendre comment donner des bases solides à nos organisations. Pour ça, je me baserai sur la spirale dynamique, modèle d'évolution individuelle et collective, afin de mieux comprendre et mettre en place les différentes étapes d'une organisation efficace.",
          tags: ['organisation', 'management', 'agile'],
          lang: ['fr'],
        },
        {
          title:
            'Inspirez vous de la psychologie et du design pour améliorer votre code',
          abstract:
            'Le but est de présenter les grands principes du design (eux-même basés sur notre psychologie) pour améliorer votre code. Au passage, vous pouvez même apprendre à améliorer votre UI car ce sont les mêmes principes ;)',
          tags: ['design', 'ergonomie', 'code'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Du monolithe aux micro services depuis les tranchées.',
          abstract:
            'Le but de ce BBL est vous faire un retour d’expérience sur le passage d’une application monolithique à une architecture sous forme de micro-services. Quels sont les éléments de réflexion à mettre en place avant de se lancer? Quelles sont les difficultés? Les choix techniques possibles? Nous verrons aussi bien sur pourquoi et à quelle moment passer à une architecture micro-services car peut être n’est-ce pas finalement la «silver bullet» qu’on espère?',
          tags: ['monolithe', 'microservices'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Continuous Delivery & DevOps',
          abstract:
            'J’organise régulièrement des soirées autour du Continuous Delivery. C’est une pratique qu’il devient indispensable de maitriser face à la concurrence mais cette pratique demande un très bon niveau technique ainsi qu’un management moderne. Le but de ce BBL est de présenter comment mettre en place cette pratique et quels sont les éléments à considérer pour y arriver. Nous y parlerons de Continuous Integration,  Continuous Delivery, Continuous Deployment ou encore Devops',
          tags: ['continuous delivery', 'devops'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Software craftsmanship.',
          abstract:
            'Software craftsmanship? Encore un buzzword pour vendre des certifications? Mis en avant par des célébrités comme Robert Martin ou Sandro Mancuso, condensé dans un Manifeste, l’idée est de relever le niveau du développement professionnel de logiciels. Dans ce BBL, j’aimerais vous présenter les éléments théoriques et pratiques qui pourraient constituer cet artisanat logiciel ainsi que de réaliser un petit kata en démo ou ensemble (à définir avant le BBL). Je pourrais aussi vous parler de mon expérience de Coach Craft.',
          tags: ['code', 'qualité', 'clean code'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Principes de développement produit en flux et organisation apprenante.',
          abstract:
            'Dans l’armée, on dit parfois “Embrace the suck”, ce qui se traduit par “la situation est mauvaise, mais faites avec." Pour les développeurs de logiciels aussi, la situation est mauvaise : les délais ne tiennent pas, la feuille de route ne vaut rien et le management est perdu au siècle dernier. Notre problème est que notre domaine est complexe, le plus souvent incertain, voire condamné aux cygnes noirs. Dans ce BBL, je veux montrer qu’il est possible de vivre avec cette complexité en passant des méthodologies projets (ou SAFe) aux principes du flux de développement de produits et en créant des organisations apprenantes.',
          tags: ['lean', 'agile', 'flow', 'product management', 'organisation'],
          lang: ['fr', 'en'],
        },
        {
          title: 'De scrum au flux.',
          abstract:
            'Comment peut-on dépasser Scrum pour aller vers un flux de développement logiciel, en comprenant les principes associés et utilisant Kanban et la livraison continue.',
          tags: [
            'scrum',
            'lean',
            'agile',
            'flow',
            'product management',
            'organisation',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'ygrenzinger',
        mail: 'yannick.grenzinger@gmail.com',
      },
    },
    {
      since: '2013-02-20',
      name: 'Mathieu Gandin',
      bio: 'Développeur, Technical Leader @lesfurets.com',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://mgandin.github.io/',
        },
      ],
      location: 'Paris et La Défense',
      sessions: [
        {
          title: 'Travailler efficacement sur du code legacy',
          abstract:
            "C'est quoi le code legacy ? Comment commencer de le refactorer ? Quelles pratiques d'équipes peut-on mettre en place avec les développeurs pour nettoyer le code legacy ? Je vous propose d'apporter des réponses à ses sujets au cours de cette présentation illustrée avec du live-coding",
          tags: ['Code', 'Refactoring', 'Clojure', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Programmation et musique avec Clojure et Overtone',
          abstract:
            "Clojure est un langage de programmation fonctionnelle puissant, qui tourne sur la JVM et qui est très utile pour des traitements parallèles ou la manipulation d'un grand nombre de données. Overtone est un framework open source développé en Clojure, qui propose un environnement de composition musicale. Comment Clojure et Overtone fonctionnent-ils ensemble ? Comment rapidement programmer des instruments virtuels en utilisant la simplicité de Clojure ? Et surtout comment faire de la musique avec tout ça ? Ce live-coding est là pour répondre à ces questions.",
          tags: ['Code', 'Refactoring', 'Clojure', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Bonus : Groupe de lecture',
          abstract:
            "Si tu veux mettre en place un groupe de lecture pendant un brownbaglunch sur 'Clean Code' de Bob Martin et 'Quality Software Management' de Gerald Weinberg, je peux t'aider ...",
          tags: ['Code', 'Refactoring', 'Clojure', 'Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'm_gandin',
        mail: 'mathieu.gandin@gmail.com',
      },
    },
    {
      since: '2013-02-21',
      name: 'Nicolas Deverge',
      bio: 'Facilitateur agile et développeur - ekito',
      picture:
        'https://pbs.twimg.com/profile_images/480325709483634688/V_x_kwbK.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.ekito.fr/people?author_name=ndeverge',
        },
      ],
      location: 'Toulouse et agglomération',
      sessions: [
        {
          title: "Introduction à l'agilité",
          abstract:
            "Le pourquoi et le comment de l'agilité en quelques slides et petits ateliers.",
          tags: ['Agile', 'Code', 'Dojo'],
          lang: ['fr'],
        },
        {
          title: "Retour d'expérience et introduction au LeanStartup",
          abstract:
            "Retour d'expérience sur un projet personnel avec mise en oeuvre de l'approche LeanStartup.",
          tags: ['Agile', 'Code', 'Dojo'],
          lang: ['fr'],
        },
        {
          title: 'Et pourquoi pas un coding dojo ?',
          abstract: "Organisation d'un coding dojo chez vous en Scala ou Java.",
          tags: ['Agile', 'Code', 'Dojo'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'ndeverge',
        mail: 'ndeverge@gmail.com',
      },
    },
    {
      since: '2013-02-21',
      name: 'Sylvain Wallez',
      bio:
        'Architecte et développeur Java/Web/Scala freelance, startuper invétéré',
      picture: 'http://bluxte.net/archives/sylvain_wallez.png',
      websites: [
        {
          name: 'Web',
          url: 'http://bluxte.net',
        },
      ],
      location: 'Toulouse et environs, ailleurs selon les déplacements',
      sessions: [
        {
          title: 'War stories',
          abstract:
            'Anecdotes vécues sur des systèmes en production, ou "Heeeelp ! Ca se met à vibrer de partout quand on monte en régime !!!"',
          tags: ['NoSQL', 'MongoDB', 'Hardware'],
          lang: ['fr'],
        },
        {
          title: 'Hazelcast, le développement distribué facile',
          abstract:
            'Coordonner les activités dans un cluster peut sembler complexe. Hazelcast apporte des réponses simples à ces problèmes, pour une scalabilité horizontale sans peine.',
          tags: ['NoSQL', 'MongoDB', 'Hardware'],
          lang: ['fr'],
        },
        {
          title: "L'open source, la fondation Apache, comment ça marche ?",
          abstract:
            'Nous utilisons tous des produits open source. Introduction à la dynamique sociale des organisations open source, et de Apache en particulier dont je suis membre depuis 10 ans.',
          tags: ['NoSQL', 'MongoDB', 'Hardware'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à MongoDB',
          abstract:
            'MongoDB est parfois appelé "le MySQL du noSQL". Introduction aux principes de base : cas d\'application, modélisation des données, capacités de montée en charge.',
          tags: ['NoSQL', 'MongoDB', 'Hardware'],
          lang: ['fr'],
        },
        {
          title: 'Open Hardware : késako ?',
          abstract:
            "Arduino, imprimantes 3D, hacker spaces : le hardware fait sa révolution. Introduction à cette mouvance qui prend de l'ampleur",
          tags: ['NoSQL', 'MongoDB', 'Hardware'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'bluxte',
        mail: 'sylvain@bluxte.net',
      },
    },
    {
      since: '2013-02-24',
      name: 'Sylvain Abélard',
      bio: 'Problem Solver chez Faveod',
      picture: 'img/baggers/photo_sylvain.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.faveod.com',
        },
        {
          name: 'Web',
          url: 'http://maitre-du-monde.fr',
        },
      ],
      location: 'Paris + ce qui est accessible en transports',
      sessions: [
        {
          title: 'Ruby',
          abstract: 'Présentation de Ruby, de débutant à expert',
          tags: ['Ruby', 'Ruby on Rails', 'Architecture'],
          lang: ['fr'],
        },
        {
          title: 'Ruby on Rails',
          abstract: 'Présentation de Rails, de débutant à expert',
          tags: ['Ruby', 'Ruby on Rails', 'Architecture'],
          lang: ['fr'],
        },
        {
          title: 'Known Unknowns - ce qui risque de changer dans votre projet',
          abstract:
            "Tous les projets changent. De toutes les règles que l'on vous jure gravées dans le marbre, certaines vont changer : tôt ou tard, radicalement ou subtilement, induisant un effort minime ou majeur. Avec la pratique, on peut avoir une intuition pour mieux chiffrer et mieux trouver les points de friction et de changement probable. Parlons de cas concrets, les vôtres ou les miens, pour améliorer cette perception.",
          tags: ['Ruby', 'Ruby on Rails', 'Architecture'],
          lang: ['fr'],
        },
        {
          title: 'on demand',
          abstract:
            "Tout ce qui est relié à mon expertise : web, MVC, architecture logicielle, retours d'expérience...",
          tags: ['Ruby', 'Ruby on Rails', 'Architecture'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'abelar_s',
        mail: 'sylvain.abelard@gmail.com',
      },
    },
    {
      since: '2013-02-25',
      name: 'Julien Jakubowski',
      bio:
        "Consultant-codeur et développeur de développeurs chez OCTO Technology. Culture Code, Ch'ti JUG, Nord Agile, meetup Software Craftsmanship Lille.",
      picture:
        'http://s3.amazonaws.com/askbob/users/photos/70/preview/carree.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://chtijug.org/',
        },
        {
          name: 'Web',
          url: 'http://nord-agile.org/',
        },
        {
          name: 'Web',
          url: 'http://blog.octo.com/',
        },
      ],
      location: 'Métropole lilloise, région parisienne',
      sessions: [
        {
          title: "Les tests automatisés, ça n'est pas possible chez moi...",
          abstract: '...vraiment ? Et si on regardait ?',
          tags: [
            'JavaScript',
            'Java',
            'Spring',
            'Test',
            'Dojo',
            'Software Craftsmanship',
            'TDD',
            'BDD',
          ],
          lang: ['fr'],
        },
        {
          title: 'Coding dojo sur mesure',
          abstract:
            'Organiser un coding dojo chez vous, sur mesure. Langages Java, JavaScript, Ruby. Mise en pratique clean code, TDD, BDD...',
          tags: [
            'JavaScript',
            'Java',
            'Spring',
            'Test',
            'Dojo',
            'Software Craftsmanship',
            'TDD',
            'BDD',
          ],
          lang: ['fr'],
        },
        {
          title: 'Speed consulting sur la productivité des développements',
          abstract:
            "Comment être plus productif ? Avoir moins de bugs ? Que faire concrètement sur mon projet pour cela ? Même le temps d'un déj, on peut trouver quelques pistes.",
          tags: ['Test', 'Dojo', 'Software Craftsmanship', 'TDD', 'BDD'],
          lang: ['fr'],
        },
        {
          title: 'Sur le chemin de la qualité : en équipe et dès demain !',
          abstract:
            'Ça y est ! C’est décidé ! Vous allez construire des applications de meilleure qualité. Vous êtes convaincu(e) que, pour cela, certaines pratiques de développement sont fondamentales comme par exemple les revues de code ou les tests automatisés.\nMais vos collègues n’en font pas. Ou vous-même, vous avez essayé, mais sans en faire systématiquement. Parce que « c’est trop cher on n’a pas le temps », « ça ne marchera pas chez nous »...\nAprès ce BBL, quand vous reviendrez sur votre plateau projet, vous aurez des éléments à essayer tout de suite. Et peut-être de quoi élaborer un plan de bataille pour que vous et votre équipe soyez fiers de votre code et ainsi conquérir le monde ! ;-)',
          tags: ['Test', 'Dojo', 'Software Craftsmanship', 'TDD', 'BDD'],
          lang: ['fr'],
        },
        {
          title: 'Epic Legacy Code Challenge',
          abstract:
            "Vous venez d'être embauchés chez Paladin Inventories Company. Elle gagne beaucoup d'argent avec son logiciel. Mais le gobelin qui l'a écrit s'est fait dévorer par un dragon. Vous ne comprenez rien au code. Et bien sûr il n'y a pas de tests. Le problème : une horde de trolls se rue vers vous avec plein de nouvelles demandes pour ce logiciel, qui est maintenant le vôtre...\nCette situation vous dit quelquechose ?\nEt si on se mettait dans cette situation, en équipes et en compétition ? Qui sera alors l'équipe la plus à même de faire évoluer le code legacy, tout en continuant à gagner de l'argent ?\nVenez relever le challenge, avec votre env de dev favori et Node.js installé au préalable !",
          tags: [
            'Test',
            'Dojo',
            'Software Craftsmanship',
            'Serious game',
            'Fun',
          ],
          lang: ['fr'],
        },
        {
          title: 'Alliés contre les défauts (talk avec le WebCenter AXA)',
          abstract:
            'La pratique de la revue de code prévient énormément de défauts. Mais elle a aussi d’autres “effets kiss-cool”. C’est une pratique qui existe depuis une soixantaine d’années. Mais pourquoi est-elle si rarement rencontrée dans les DSI ? Sans doute parce qu’elle est méconnue, mais aussi parce qu’elle fait l’objet d’appréhensions. Faites-vous des revues de code chez vous ? Et sinon, pourquoi pas ? Peut-être pensez-vous que cela prend trop de temps, que c’est trop cher, qu’en jugeant le code on jugera l’auteur… Au Webcenter AXA, le code est revu systématiquement avant de partir en production. Cela porte ses fruits. Mais cela ne s’est pas fait sans accrocs. Venez découvrir un retour d’expérience.',
          tags: ['Test', 'Dojo', 'Software Craftsmanship', 'TDD', 'BDD'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille', 'Paris'],
      contacts: {
        twitter: 'jak78',
        mail: 'jja@octo.com',
      },
    },
    {
      since: '2013-02-25',
      name: 'Nicolas De Loof',
      bio: 'Developer Advocate chez CloudBees',
      picture: 'img/baggers/photo_NicolasDeLoof.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.loof.fr',
        },
        {
          name: 'Web',
          url: 'http://www.cloudbees.com',
        },
      ],
      location: 'Rennes et alentours, possibilités sur Paris',
      sessions: [
        {
          title: 'Jenkins X: toward a Cloud-native Jenkins',
          abstract:
            "L'architecture de Jenkins date de 10 ans. C'est ce qui a permis de construire un écosystème gigantesque et de couvrir les besoins de tout le monde avec une flexibilité extrême. En assurant la compatibilité ascendante, Jenkins s'interdit-il d'évoluer pour embracer les paradigmes modernes ? On pourrait le croire, sauf que ... Jenkins-X!",
          tags: ['Cloud', 'Jenkins', 'Kubernetes'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'ndeloof',
        mail: 'nicolas.deloof@gmail.com',
      },
    },
    {
      since: '2013-02-26',
      name: 'Cécile Especel',
      bio:
        "J’ai découvert les méthodes agiles en 2009 alors que j’étais développeuse. 10 ans plus tard, je suis toujours convaincue par ses vertus et j’ai évolué vers le coaching agile et la facilitation. Chez Knp Labs, j'accompagne, je soutiens, je motive nos Happy Awesome Developers et nos Supers Clients. Pour cela j'applique les principes du manifeste agile le plus possible et j'utilise les outils de l'intelligence collaborative.",
      picture:
        'http://www.cecile-especel.com/var/users/7831/avatar/8108/avatar_cp.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://knplabs.com/fr',
        },
        {
          name: 'Web',
          url: 'http://www.cecile-especel.com/',
        },
      ],
      location: 'Nantes et environs.',
      sessions: [
        {
          title: 'Introduction aux méthodes agiles',
          abstract:
            "L'agilité, vous en entendez beaucoup parler, mais concrètement, qu'est ce que c'est ?",
          tags: ['Agile', 'Serious Game'],
          lang: ['fr'],
        },
        {
          title: 'Lego4DevOps',
          abstract:
            "Lego4DevOps un est atelier de sensibilisation au DevOps. Il met en évidence de manière ludique les enjeux de cette approche. Il s'adresse à un public très large et ne nécessite aucunes connaissances techniques.",
          tags: ['Agile', 'Serious Game', 'DevOps'],
          lang: ['fr'],
        },
        {
          title: 'Des Lego, des bonnes pratiques et du fun !',
          abstract:
            "Expliquer les bonnes pratiques de code est compliqué. La compréhension étant une des clés pour changer l'état d'esprit, et les bonnes pratiques techniques un pré-requis pour créer du code de qualité, il est important de les expliquer. Je vous propose d'utiliser les Lego pour comprendre les mécanismes et les intérêts de la simplicité, de la refactorisation, de l'intégration continue et du code propre. D'après un atelier original de Mike Bowler et Bryan Beecham.",
          tags: ['Agile', 'Serious Game', 'tddlego'],
          lang: ['fr'],
        },
        {
          title:
            'Avant de faire du pair programming, faites du pair recruiting !',
          abstract:
            "Etre une équipe auto-organisée et pluri-disciplinaire implique une forte cohérence : il faut bien s'entendre, mais oser se dire les choses, il faut se compléter et se soutenir autant humainement que techniquement. Cette valeur forte de l'agilité est souvent mise à rude épreuve selon la manière dont sont constituées les équipes. Et à la base de la constitution des équipe, il y a l'embauche même des collègues. Dans ma boite, nous nous embauchons les un·e·s, les autres, du coup nous travaillons notre cohésion dès l'embauche et ça fonctionne ! On aime travailler ensemble et on se tire vers le haut. Dans cette conf, je vous propose de détailler notre process de recrutement pas si courant et pourtant plein de bon sens, en espérant qu'il fasse germer des idées pour que vous aussi, vous choisissiez vos futur·e·s collègues !",
          tags: ['Agile'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'Cecile_Especel',
        mail: 'cecile@especel.com',
      },
    },
    {
      since: '2013-02-26',
      name: 'Cécilia Bossard',
      bio:
        'Développeuse, agiliste convaincue et joueuse invétérée. Dev chez Code Lutin.',
      picture:
        'https://www.dropbox.com/s/jo8x92bany93i9v/Cecilia%20Bossard.jpg?dl=0',
      websites: [
        {
          name: 'Web',
          url: 'http://www.codelutin.com',
        },
      ],
      location: 'Nantes et environs.',
      sessions: [
        {
          title: 'GitFlow in Action',
          abstract:
            'Vous cherchez un modèle de gestion des branches pour Git facile et pratique à utiliser ? Vous souhaitez avoir un workflow simple et agile pour gérer vos versions ? Venez jeter un oeil à GitFlow ! Je vous présenterai ce workflow qui nous a permis de mieux organiser nos versions et de remplacer SVN par Git sans regret.',
          tags: ['Git'],
          lang: ['fr'],
        },
        {
          title: 'Code like a child',
          abstract:
            'La programmation visuelle, vous connaissez ? Nous utilisons régulièrement ces langages avec les enfants pour les initier à la programmation. Mais avez-vous déjà songé à les utiliser avec les non-dev ?',
          tags: ['Programmation visuelle'],
          lang: ['fr'],
        },
        {
          title: 'Introduction aux méthodes agiles',
          abstract:
            "L'agilité, vous en entendez beaucoup parler, mais concrètement, qu'est ce que c'est ?",
          tags: ['Agile'],
          lang: ['fr'],
        },
        {
          title: 'Et la diversité dans tout ça ?',
          abstract:
            "On entend beaucoup parler en ce moment du besoin d’avoir plus de femmes dans les métiers du numérique. Mais la diversité ne s’arrête pas là. Qu'est ce qu’on entend par diversité ? Qu'est ce que ça peut apporter à mon équipe ? Quelles sont les bonnes pratiques ? Nous tenterons de répondre à ces questions lors de cette présentation qui ne se veut pas moralisatrice, mais souhaite juste proposer des pistes de réflexions sur ce débat.",
          tags: ['Diversité', 'WomenInTech'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'ceciliaBossard',
        mail: 'cecilia.bossard@gmail.com',
      },
    },
    {
      since: '2013-02-26',
      name: 'Christophe Bégot',
      bio: 'Facilitateur Agile',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://timwi.com/',
        },
      ],
      location: 'Rennes et alentours, possibilités sur toute la Bretagne',
      sessions: [
        {
          title: 'Méthodes et pratiques Agiles',
          abstract:
            'Présentations et échanges pour une première approche ou un appronfondissement.',
          tags: ['Agile', 'Coaching'],
          lang: ['fr'],
        },
        {
          title: 'Rétrospective',
          abstract: 'Dérouler une rétrospective Agile avec votre équipe.',
          tags: ['Agile', 'Coaching'],
          lang: ['fr'],
        },
        {
          title: 'Coaching individuel',
          abstract: 'Présentation de la démarche et sessions de coaching.',
          tags: ['Agile', 'Coaching'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        mail: 'cbegot@gmail.com',
      },
    },
    {
      since: '2013-02-27',
      name: 'Cédric Exbrayat',
      bio:
        'Développe des trucs cools en Java et Javascript par passion et pour vivre. Leader du Lyon Java User Group, de la conférence Mix-it, et co-fondateur de la société Ninja Squad.',
      picture:
        'http://www.gravatar.com/avatar/0f0edb7904c4eea5f1b60fba0bf88537?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://hypedrivendev.wordpress.com/',
        },
        {
          name: 'Web',
          url: 'http://ninja-squad.fr/',
        },
        {
          name: 'Web',
          url: 'http://mix-it.fr',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Java 8 - découvrir les lambdas',
          abstract:
            "Les lambdas sont la fonctionnalité majeure de Java 8! Si vous voulez découvrir la programmation fonctionnelle, les nouvelles fonctions utilisables sur les collections et l'impact sur votre code de demain, ce talk est fait pour vous!",
          tags: ['Java', 'Lambda', 'AngularJS', 'JavaScript', 'Play', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'AngularJS - le framework javascript de demain',
          abstract:
            'Une plongée en douceur dans ce framework développé par Google et qui pourrait devenir le standard de demain.',
          tags: ['Java', 'Lambda', 'AngularJS', 'JavaScript', 'Play', 'Git'],
          lang: ['fr'],
        },
        {
          title: "Git - l'incontournable",
          abstract:
            'Introduction à Git et comment en tirer partie dans votre entreprise.',
          tags: ['Java', 'Lambda', 'AngularJS', 'JavaScript', 'Play', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'Play! Framework - fast web development',
          abstract:
            'Play! Framework fait aujourd’hui figure d’incontournable, utilisé aussi bien par des startups, des grands groupes et des géants du Web. Venez découvrir les concepts et la philosophie derrière ce fantastique outil, depuis les bases de la 1.2 jusqu’aux révolutions de la 2.1!',
          tags: ['Java', 'Lambda', 'AngularJS', 'JavaScript', 'Play', 'Git'],
          lang: ['fr'],
        },
        {
          title: "Apache Camel - un framework d'intégration ultralight",
          abstract:
            "Parce que l'on a toujours besoin de communiquer entre plusieurs applications, découvrez la puissance et la simplicité de Camel.",
          tags: ['Java', 'Lambda', 'AngularJS', 'JavaScript', 'Play', 'Git'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'cedric_exbrayat',
        mail: 'contact+bbl@ninja-squad.com',
      },
    },
    {
      since: '2013-03-01',
      name: 'Clément Delafargue',
      bio: 'λ dev @ Fretlink',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://cltdl.fr/me',
        },
        {
          name: 'Web',
          url: 'http://blog.clement.delafargue.name',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/cdelafargue',
        },
      ],
      location: 'Nantes et environs.',
      sessions: [
        {
          title: 'Designing apps for the cloud',
          abstract:
            'Patterns pour développer des applications cloud-ready (file storage, sessions, dbs, deployment)',
          tags: [
            'Scala',
            'NodeJS',
            'Programmation fonctionnelle',
            'IT automation',
          ],
          lang: ['fr'],
        },
        {
          title: 'FP patterns for scala beginners',
          abstract:
            'Patterns et bonne pratiques pour les débutants en scala qui veulent se mettre à la programmation fonctionnelle',
          tags: [
            'Scala',
            'NodeJS',
            'Programmation fonctionnelle',
            'IT automation',
          ],
          lang: ['fr'],
        },
        {
          title: "It's traverse!",
          abstract:
            'Découvrez la fonction qui se cache partout en programmation fonctionnelle',
          tags: ['JavaScript', 'Haskell', 'Programmation fonctionnelle'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'clementd',
        mail: 'clement+bbl@delafargue.name',
      },
    },
    {
      since: '2013-03-05',
      name: 'Geoffroy Couprie',
      bio:
        'Consultant freelance en développement web et sécurité, développeur mobile, hacker',
      picture:
        'http://1.gravatar.com/avatar/ed9901b9b80743c05aedf58b4f4926dd?s=256',
      websites: [
        {
          name: 'Web',
          url: 'http://geoffroycouprie.com',
        },
        {
          name: 'Web',
          url: 'http://unhandledexpression.com/',
        },
        {
          name: 'Web',
          url: 'http://pilotssh.com/',
        },
      ],
      location: 'Nantes et environs.',
      sessions: [
        {
          title: 'Le stockage des mots de passe',
          abstract:
            "Comment stocker des mots de passe de manière sécurisée? Quel impact sur l'application et les utilisateurs?",
          tags: ['Sécurité', 'Cryptographie', 'SSL', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à la cryptographie',
          abstract:
            "La cryptographie n'est pas qu'une science mathématique. C'est un outil pratique pour des problèmes de confiance, de confidentialité, etc.<br />Je vous présenterai les idées menant à la conception d'un protocole sécurisé, et comment je choisis un algorithme pour y répondre.",
          tags: ['Sécurité', 'Cryptographie', 'SSL', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Optimisation SSL',
          abstract:
            "SSL est probablement déployé sur vos serveurs, mais avez-vous pensé à renforcer sa configuration? A l'accélérer?<br />Je vous fournirai une série d'astuces et d'outils pour mieux sécuriser un serveur TLS et en obtenir une performance intéressante.",
          tags: ['Sécurité', 'Cryptographie', 'SSL', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Quick tips of Web Security',
          abstract:
            'Les navigateurs récents ont intégré des fonctionnalités utiles pour la sécurité des applications web, qui sont souvent faciles à mettre en place.<br />Présentation de quelques failles classiques, et comment les corriger facilement.',
          tags: ['Sécurité', 'Cryptographie', 'SSL', 'Performance'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'gcouprie',
        mail: 'contact@geoffroycouprie.com',
      },
    },
    {
      since: '2013-03-05',
      name: 'Vincent Heuschling',
      bio: "Fondateur d'Affini-Tech et expert BigData, NOSQL & Analytics",
      picture: 'img/baggers/photo_vhe.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.affini-tech.com',
        },
        {
          name: 'Web',
          url: 'http://blog.affini-tech.com',
        },
      ],
      location: 'Paris + Banlieue ouest',
      sessions: [
        {
          title: 'Hadoop et son écosystème',
          abstract:
            "Comprendre le fonctionnement d'Hadoop et de son écosystème, exemple simple de job Map/Reduce à l'appui",
          tags: ['Hadoop', 'NoSQL'],
          lang: ['fr'],
        },
        {
          title: 'Apache Spark',
          abstract:
            "Ce que Apache Spark change par rapport à Hadoop. Pourquoi l’utiliser ? Comment fonctionne-t-il ? le tout par des exemples de code simples et concrets. Au delà des modules ‘core’, explication et démonstrations des modules complémentaires : Spark MLLib pour faire du Machine Learning distribué, 'Spark Streaming' pour le traitement de flux sent temps réel, et ‘Spark GraphX’ pour traiter des données en Graphes.",
          tags: ['Hadoop', 'NoSQL'],
          lang: ['fr'],
        },
        {
          title: 'Google Cloud Platform',
          abstract:
            'Description et démonstrations des différentes briques de la Google Cloud Platform, ses particularités par rapport aux autres Cloud du marché. Pourquoi cette plateforme est un super accélérateur des projets Bigdata avec ses solutions uniques que sont ‘Bigquery’, Bigtable’, ‘Cloud storage’, ‘app engine’, ‘dataflow’, ‘compute engine’ pour facilement monter des clusters Hadoop & Spark',
          tags: ['Hadoop', 'NoSQL'],
          lang: ['fr'],
        },
        {
          title: 'Hadoop Pig',
          abstract:
            'Utiliser Pig pour construire des traitements sur Hadoop. Une alternative à Map/Reduce Java beaucoup plus simple et productive.',
          tags: ['Hadoop', 'NoSQL'],
          lang: ['fr'],
        },
        {
          title: 'Développement Hadoop avec Scalding',
          abstract:
            'Utiliser la bibliothèque Cascading avec Scala pour construire des jobs Map/Reduce avec toutes les capacités propres à Scala.',
          tags: ['Hadoop', 'NoSQL'],
          lang: ['fr'],
        },
        {
          title: 'Bases de données NOSQL',
          abstract:
            'Comprendre les différences entre Redis, Cassandra, HBase et MongoDB. Quelle base pour quel usage ?',
          tags: ['Hadoop', 'NoSQL'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'vhe74',
        mail: 'vhe@affini-tech.com',
      },
    },
    {
      since: '2013-03-11',
      name: 'Katia Aresti',
      bio: 'Principal Software Engineer - Red Hat',
      picture:
        'http://www.gravatar.com/avatar/04e3a46efd2e243319b1bf9f7ef316f7.png',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/karesti/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Découvrez Infinispan',
          abstract: "Découvrez Infinispan, une base de données en mémoire distribuée, open source. Idéale pour gérer divers cas d'usage, elle offre une grande scalabilité et des performances élevées, quel que soit le type d'application. Rejoignez-moi pour une introduction simple et claire à ses fonctionnalités et cas d'usage !",
          tags: [
            'Infinispan',
            'Cache',
            'Distributed',
            'InMemoryDatabase',
            'OpenSource',
            'Scalability',
            'Performance',
            'DataStorage',
            'Java',
            'NoSQL',
            'Clustering',
            'DataGrid',
            'Persistence',
            'Caching',
            'HighAvailability',
          ],
          lang: ['fr'],
        },
        {
          title: 'Découvrez Quarkus',
          abstract: "Découvrez Quarkus, un framework Java moderne et open source conçu pour des applications rapides et légères. Idéal pour les microservices, mais aussi pour les applications Java standards, il allie performance et simplicité. Rejoignez-moi pour une introduction claire et accessible à ses atouts et cas d'usage !",
          tags: [
            'Quarkus',
            'Java',
            'Microservices',
            'CloudNative',
            'GraalVM',
            'OpenSource',
            'DevTools',
            'JavaFramework',
            'QuarkusDev',
            'Serverless',
            'Reactive',
            'JavaEE',
            'Kubernetes'
          ],
          lang: ['fr'],
        },
        {
          title: "J'ai raté ma carrière. J'ai plus de 40 et je code encore",
          abstract:
            "Avec plus de 20 ans d'expérience et ma quarantaine passée, je n'ai jamais suivi la voie \"classique\" : devenir manager ou cheffe de projet. Ce n'était pas ce que je voulais. Dans cette conférence, je partagerai les leçons de mon parcours et des astuces pour vous aider à sortir de votre zone de confort et rester près du code.",
          tags: [
            'Developper',
            'Developpeuse',
            'Carrière',
            'Cheffe',
            'Dev',
            'Code',
            'Management',
            'Mentoring',
            'Leadership'
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'karesti',
        mail: 'katia.aresti@gmail.com',
      },
    },
    {
      since: '2013-03-29',
      name: 'Eric Lefevre-ardant',
      bio: 'Développeur chez Hyperlex',
      picture: 'img/baggers/photo_eric.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://ericlefevre.net/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: "Introduction à la Philosophie de l'intelligence artificielle",
          abstract:
            "Les machines peuvent-elles être intelligentes ? Que signifie être intelligent, pour une machine ? Dans cette présentation, nous explorerons les principes et les limitations du Test de Turing. Nous évoquerons également la Chambre chinoise, une expérience de pensée qui peut être vue comme une réponse à Turing. A l'issue de cette session, nous aurons une meilleure idée de ce qu'est l'intelligence artificielle dans son sens fort... et de sa faisabilité.",
          tags: ['intelligence artificielle'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Boucles Etranges : Etranges Boucles - avec Guillaume Tardif',
          abstract:
            "Une promenade décousue dans les limites du code source Java, à la manière de Douglas Hofstadter. Nous parlons de code, d'apparences trompeuses, d'art et de la vie.",
          tags: ['Java', 'Code'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'elefevre',
        mail: 'contact@ericlefevre.net',
      },
    },
    {
      since: '2013-04-10',
      name: 'Henri Tremblay',
      bio: 'Java Champion. Amateur de performance et de stratégie',
      picture:
        'http://gravatar.com/avatar/02b547234fa2cf147e85aa1b460f2f03?s=256',
      websites: [
        {
          name: 'Web',
          url: 'http://easymock.org',
        },
        {
          name: 'Web',
          url: 'http://objenesis.org',
        },
        {
          name: 'Web',
          url: 'http://blog.tremblay.pro',
        },
      ],
      location: 'Montréal et alentours',
      sessions: [
        {
          title: 'Lambda et génériques: Le cocktail explosif',
          abstract:
            "Tout ce qu'il faut savoir pour bien comprendre les génériques et surtout, comment s'en sortir avec les lambdas. Parce que les lambdas, c'est plein de génériques",
          tags: ['Java', 'Performance', 'Stratégie', 'Test'],
          lang: ['fr'],
        },
        {
          title: 'Université de la performance',
          abstract:
            'Mise en place de tests de performance, méthodologie et résolution de problèmes',
          tags: ['Java', 'Performance', 'Stratégie', 'Test'],
          lang: ['fr'],
        },
        {
          title: 'Discussion informelle',
          abstract:
            "Sur l'optimisation, EasyMock, les tests en général, les méandres de Java, le déploiement continu ou tout autre sujet qui vous passe par la tête",
          tags: ['Java', 'Performance', 'Stratégie', 'Test'],
          lang: ['fr'],
        },
      ],
      cities: ['Montréal'],
      contacts: {
        twitter: 'henri_tremblay',
        mail: 'henri@tremblay.pro',
      },
    },
    {
      since: '2013-04-30',
      name: 'Alfred Almendra',
      bio: 'Facilitateur et accompagnateur agile et lean',
      picture:
        'https://fr.gravatar.com/userimage/31482138/9a46acc84c01ac2a04e72849850fb7d3.jpg?size=250',
      websites: [
        {
          name: 'Web',
          url: 'http://atelierlogiciel.wordpress.com',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: "Découvrir l'agilité",
          abstract:
            'Les jeux de sensibilisation permettent de se familiariser avec les valeurs et les principes agiles.',
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: 'Créer de la valeur et innover',
          abstract:
            "Les ateliers UX et autres jeux sérieux sont un moyen efficace de créer de la valeur et d'innover. Ils permettent notamment d'obtenir un feedback rapide avant même de coder.",
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: 'Techniques de programmation',
          abstract:
            "Coder proprement c'est tester d'abord et remanier souvent. Il s'agit d'une introduction aux pratiques techniques de test, de programmation, de refactoring, et de conception émergente. Format : coding dojo en Java.",
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: 'Gestion de projet en mode agile',
          abstract:
            "Etre agile c'est avant tout un état d'esprit. Mais pour pratiquer concrètement l'agilité, il est intéressant de mettre en place quelques rituels, et de faire appel aux \"jeux qui font le travail\".",
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: 'Management, leadership : bienvenue au 21è siècle !',
          abstract:
            "Les individus ne sont pas des ressources ! Une nouvelle posture et de nouvelles pratiques permettent de soutenir la créativité et l'efficacité des équipes et des organisations agiles.",
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: "SLA : viser l'engagement de service",
          abstract:
            "L'industrialisation passe par l'automatisation, mais cela ne suffit pas. Quelques pratiques simples pour challenger votre organisation.",
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: 'Entreprendre en mode agile',
          abstract:
            'Présentation des techniques popularisées par le Lean Startup pour construire un modèle économique de façon empirique.',
          tags: [
            'Agile',
            'Expérience utilisateur',
            'Extreme Programming',
            'Scrum',
            'Kanban',
            'Serious Game',
            'Jeux agiles',
            'Lean Startup',
            'Visual Management',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'AlfredAlmendra',
        mail: 'alfred.almendra@gmail.com',
      },
    },
    {
      since: '2013-05-02',
      name: 'Cyrille Martraire',
      bio:
        'Développeur avec passion depuis 1999, Paris. Fondateur de la communauté Software Craftsmanship Paris, et Directeur Technique de la société Arolla',
      picture:
        'http://gravatar.com/avatar/51dec3feb906404b8564a3c31d1050f3.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.arolla.fr',
        },
        {
          name: 'Web',
          url: 'http://cyrille.martraire.com',
        },
      ],
      location: 'Paris, La Défense et à proximité',
      sessions: [
        {
          title: 'DDD Games',
          abstract:
            'Découvrez quelques points essentiels de Domain-Driven Design par la pratique sous forme de petits jeux sur papier.',
          tags: [
            'DDD',
            'BDD',
            'TDD',
            'Legacy Code',
            'FP-Style',
            'Clean Code',
            'Test',
          ],
          lang: ['fr'],
        },
        {
          title: 'Legacy Code : faire évoluer ou ré-écrire ?',
          abstract:
            "Comment livrer des fonctionnalités ambitieuses malgré le code existant sans aucun test ? Visite guidée au travers de retours d'expérience.",
          tags: [
            'DDD',
            'BDD',
            'TDD',
            'Legacy Code',
            'FP-Style',
            'Clean Code',
            'Test',
          ],
          lang: ['fr'],
        },
        {
          title: 'Domain-Driven Design dans un contexte legacy',
          abstract:
            "Un tour d'horizon d'aspects importants de DDD sous la forme d'un retour d'expérience dans le domaine de la finance",
          tags: [
            'DDD',
            'BDD',
            'TDD',
            'Legacy Code',
            'FP-Style',
            'Clean Code',
            'Test',
          ],
          lang: ['fr'],
        },
        {
          title: 'Votre sujet sur-mesure',
          abstract:
            "Atelier sur papier, en code autour d'un kata original, présentation ou retour d'expérience sur l'un des thèmes qui me passionnent: TDD, BDD, DDD, Legacy Code, Style FP",
          tags: [
            'DDD',
            'BDD',
            'TDD',
            'Legacy Code',
            'FP-Style',
            'Clean Code',
            'Test',
          ],
          lang: ['fr'],
        },
        {
          title: 'Extremist Programming - avec Eric Lefevre-Ardant',
          abstract:
            "Bien sûr, notre métier est sérieux ; le Software Craftmanship n'est-il pas avant tout le professionnalisme ? Bien sûr, le progrès vient d'articles scientifiques ardus et de nouveaux logiciels complexes. Mais vous ne rêvez pas parfois de repousser le cadre professionnel habituel ? D'aller plus loin et d'explorer ? De vous amuser avec du code jusqu'à ce que ça devienne n'importe quoi ? Dans cette session nous vous présenterons des expériences ésotériques, des jeux bizarres et des joyeux délires qui font réfléchir. Réfléchir ? D'habitude on n'a jamais le temps !",
          tags: [
            'DDD',
            'BDD',
            'TDD',
            'Legacy Code',
            'FP-Style',
            'Clean Code',
            'Test',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'cyriux',
        mail: 'cyrillemartraire@gmail.com',
      },
    },
    {
      since: '2013-05-02',
      name: 'Guillaume Tardif',
      bio: 'Consultant Java',
      picture: 'img/baggers/photo_guillaume.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://melodiousthunkcode.fr/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            'Boucles Etranges : Etranges Boucles - avec Eric Lefevre-Ardant',
          abstract:
            "Une promenade décousue dans les limites du code source Java, à la manière de Douglas Hofstadter. Nous parlons de code, d'apparences trompeuses, d'art et de la vie.",
          tags: ['MongoDB', 'Search', 'Big Data', 'Java', 'Code'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'gtardif',
        mail: 'guillaume.tardif@gmail.com',
      },
    },
    {
      since: '2013-05-03',
      name: 'Tugdual Grall',
      bio: 'Chief Technical Evangelist at MapR',
      picture:
        'https://en.gravatar.com/userimage/8542283/4fdcd1b7fa69ee477087e6bbcedf695e.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://tgrall.github.io/',
        },
      ],
      location: "Nantes, Paris, Rennes et toute l'Europe",
      sessions: [
        {
          title: 'Introduction au Big Data et NosQL',
          abstract:
            "Introduction au Big Data et NoSQL: pourquoi? comment?<br/>Durant cette présentation je vous propose de discuter les cas d'usages, technologies de facon interactive.",
          tags: ['Big Data', 'NoSQL', 'MapR', 'Streaming', 'Hadoop'],
          lang: ['fr'],
        },
        {
          title:
            'Fast Cars, Big Data: ou comment le streaming peut aider la formule 1',
          abstract:
            "Les voitures, et tout particulièrement les voitures de courses, génèrent énormément de données, qui doivent être capturées, stockées et traitées en temps réel avec l'aide de Kafka, Spark/Flink, NoSQL, et DFS",
          tags: [
            'Big Data',
            'NoSQL',
            'MapR',
            'Streaming',
            'Apache Kafka',
            'Apache Flink',
            'Apache Spark',
          ],
          lang: ['fr'],
        },
        {
          title: 'Stream Processing avec Apache Flink',
          abstract:
            "Presentation de l'architecture 'streaming first' et du projet Apache Flink",
          tags: [
            'Big Data',
            'NoSQL',
            'MapR',
            'Streaming',
            'Apache Kafka',
            'Apache Flink',
            'Apache Spark',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Nantes', 'Rennes'],
      contacts: {
        twitter: 'tgrall',
        mail: 'tugdual@gmail.com',
      },
    },
    {
      since: '2013-05-07',
      name: 'Xavier Nopre',
      bio:
        "Artisan développeur WEB full stack, fan d'agilité, de tests uniaires, de TDD, d'outils et méthodes pour le développement agile (pair programming, intégraion continue, automatisation, ...) (Indépendant)",
      picture: 'img/baggers/photo_xavier.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://xnopre.blogspot.fr/',
        },
      ],
      location: 'Grenoble',
      sessions: [
        {
          title: 'Tests unitaires et TDD : la théorie :',
          abstract:
            "Les tests unitaires sont indispensables pour faire du développement agile (itératif et incrémental), pour être sûr que le code fait ce qu'il faut, pour éviter les régressions, pour détecter au plus tôt les problèmes, pour diminuer les coûts, etc... Le TDD est la meilleure façon d'écrire les tests, notamment pour avoir du code testable et donc testé. Après un peu de théorie pour préciser tout cela, je vous montrerai par des exemples en live coding ce qu'est vraiment le TDD et que ce n'est pas si compliqué à mettre en oeuvre ! (Présentation & démos)",
          tags: ['Tests', 'Tests unitaires', 'TDD', 'Java', 'Agilité'],
          lang: ['fr'],
        },
        {
          title: 'Tests unitaires et TDD : la pratique :',
          abstract:
            "Je vous propose de venir animer un coding-dojo 'randori' pour mettre en pratique les rudiments du TDD sur des défis simples, et constater par vous même que cette pratique est indispensable mais pas impossible à mettre en oeuvre, à condition de savoir comment s'y mettre !",
          tags: ['Tests', 'Tests unitaires', 'TDD', 'Agilité', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Agilité & Scrum :',
          abstract:
            "Introduction aux valeurs et principes de base de l'agilité, et aux fondamentaux de Scrum : pourquoi l'agilité, quels intérêts, quand et où la mettre en place, comment s'y prendre, ...",
          tags: ['Agilité', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Ingénierie agile :',
          abstract:
            "Outils et méthodes pour les équipes de développement qui veulent réussir dans l'agilité (Présentation & discussions)",
          tags: [
            'Agilité',
            'Scrum',
            'Ingénierie agile',
            'Tests',
            'Tests unitaires',
            'TDD',
            'Usine logicielle',
            'Industrialisation',
          ],
          lang: ['fr'],
        },
        {
          title: 'Play Framework',
          abstract: 'Introduction à ce framework simple et efficace',
          tags: ['Java', 'Web', 'Play', 'Framework'],
          lang: ['fr'],
        },
        {
          title: 'Ansible',
          abstract:
            'Introduction à cet outil simple et efficace pour préparer vos machines',
          tags: ['Ansible', 'DevOps', 'Docker'],
          lang: ['fr'],
        },
        {
          title: 'Divers agilité ou développement Java-WEB',
          abstract:
            "Tous autres sujets tournant autour de l'agilité, ou du développement WEB en Java : contactez-moi et nous verrons sur quoi nous pourrons échanger !",
          tags: ['Développement', 'Agilité'],
          lang: ['fr'],
        },
      ],
      cities: ['Grenoble'],
      contacts: {
        twitter: 'xnopre',
        mail: 'xnopre@gmail.com',
      },
    },
    {
      since: '2013-05-08',
      name: 'Dimitri Baeli',
      bio:
        "CTO LesFurets.com, ex-Chien de berger agile, mais toujours l'ame d'un développeur à plus de 40 ans, joyeux testeur et sérieusement ops. Organisateur AgileTour/CodeursEnSeine à Rouen, Lean Kanban France à Paris",
      picture:
        'http://gravatar.com/avatar/7f73df517fdea1028d28f39980edf441.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.lesfurets.com',
        },
        {
          name: 'Web',
          url: 'http://www.leankanban.fr',
        },
        {
          name: 'Web',
          url: 'http://www.codeursenseine.com',
        },
      ],
      location: 'Paris, Défense, (Rouen)',
      sessions: [
        {
          title: 'Kanban pour les nuls',
          abstract:
            "REX sur les pratiques et l'organisation du Delivery chez LesFurets (Continuous Delivery, Kanban, Feature Branching, Software Factory, ...)",
          tags: ['Kanban', 'Agile', 'Continuous Delivery', 'DevOps', 'Git'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'dbaeli',
        mail: 'dbaeli@gmail.com',
      },
    },
    {
      since: '2013-05-15',
      name: 'Sébastien Cogneau',
      bio: 'Développeur',
      picture:
        'https://secure.gravatar.com/avatar/a36365a1874360981942f089d839d473?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
      location: 'Lyon',
      sessions: [
        {
          title: 'Boite à outil du développeur agile',
          abstract:
            "L'agilité prône un certain nombre de pratiques comme le pair programming, la revue de code et l'intégration continue. Je vous propose un tour d'horizon d'outils permettant de faciliter ces pratiques.",
          tags: ['Jenkins', 'Sonar', 'Gerrit', 'Git', 'Bash', 'RPM', 'Gradle'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Gradle',
          abstract:
            "Maven a amené énormément de bonnes idées pour créer son build, Gradle capitalise sur ces pratiques pour offrir une alternative à Maven. Dans cette session pas de Maven Bashing mais une introduction à l'utilisation de Gradle au quotidien.",
          tags: ['Jenkins', 'Sonar', 'Gerrit', 'Git', 'Bash', 'RPM', 'Gradle'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'SCogneau',
        mail: 'sebastien.cogneau@gmail.com',
      },
    },
    {
      since: '2013-05-15',
      name: 'Benjamin Moitié',
      bio: 'Coach Agile et Kanban chez Xebia',
      picture:
        'https://en.gravatar.com/userimage/49452226/05626824309fa84863021ac5224a86b3.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.xebia.fr/author/bmoitie',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: "Agile, qu'est ce que c'est?",
          abstract:
            "Présentation de l'agilité pour répondre à toutes vos interrogations",
          tags: ['Agile', 'Lean Startup', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Kanban et le management visuel',
          abstract:
            'Comment mettre en place du management visuel et Pourquoi? Une présentation des règles de base et des principes avec beaucoup d’images',
          tags: ['Agile', 'Lean Startup', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Penser un produit en mode Agile',
          abstract:
            "Du Lean Start Up, en passant par la création du backlog produit, un panorama de la création d'un produit en mode agile",
          tags: ['Agile', 'Lean Startup', 'Kanban'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'benjaminmoitie',
        mail: 'benjamin.moitie@gmail.com',
      },
    },
    {
      since: '2013-05-19',
      name: 'Emilien Pecoul',
      bio:
        'Développeur indépendant, évangéliste agile, développement Microsoft',
      picture:
        'http://www.gravatar.com/avatar/a3b567e54b0e3935c4b53cca2a835f1e.png?size=250',
      websites: [
        {
          name: 'Web',
          url: 'http://www.ouarzy.com/',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'TDD by example',
          abstract:
            'Introduction concrète au Test Driven Development, selon le livre de Kent Beck, adapté aux technos Microsoft (Méthodes, Utilisation de MSTests ou Nunit)',
          tags: [
            'Agile',
            'TDD',
            'Test',
            'BDD',
            '.NET',
            'Microsoft',
            'Clean Code',
            'CQRS',
            'ES',
          ],
          lang: ['fr'],
        },
        {
          title: 'Introduction au BDD',
          abstract:
            "Le Behavior Driven Development est le prolongement coté Spécification du TDD. Cette session vous montrera l'intérêt et la mise en oeuvre de cette méthode (Utilisation de SpecFlow)",
          tags: [
            'Agile',
            'TDD',
            'Test',
            'BDD',
            '.NET',
            'Microsoft',
            'Clean Code',
            'CQRS',
            'ES',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le DDD au quotidien',
          abstract:
            'Voyons ensemble des pratiques très concrète pour mieux appliquer les concepts du Domain Driven Design',
          tags: [
            'DDD',
            'Agile',
            'TDD',
            'Test',
            'BDD',
            '.NET',
            'Microsoft',
            'Clean Code',
            'CQRS',
            'ES',
          ],
          lang: ['fr'],
        },
        {
          title: 'Clean Code',
          abstract:
            "Avez vous déja pris le temps de décortiquer les pratiques du livre de l'Oncle Bob: Clean Code? Le temps d'un repas, regardons comment améliorer la qualité du code produit",
          tags: [
            'Agile',
            'TDD',
            'Test',
            'BDD',
            '.NET',
            'Microsoft',
            'Clean Code',
            'CQRS',
            'ES',
          ],
          lang: ['fr'],
        },
        {
          title: 'CQRS/ES from Scratch',
          abstract:
            'Un livecoding présentant une implémentation CQRS/ES en partant de rien, pour savoir comment débuter',
          tags: [
            'Agile',
            'TDD',
            'Test',
            'BDD',
            '.NET',
            'Microsoft',
            'Clean Code',
            'CQRS',
            'ES',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'ouarzy',
        mail: 'emilien@pecoul.fr',
      },
    },
    {
      since: '2013-05-27',
      name: 'Guillaume Lours',
      bio:
        'Développeur plateforme chez Saagie. Participation aux communautés @NormandyAgile, @LeanKanbanFr, @DevoxxFr, @CodeursEnSeine',
      picture:
        'http://www.gravatar.com/avatar/cb17294de56e44d18f1ab0dc966101a7.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.saagie.com',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: 'Kanban pour les nuls',
          abstract:
            'Découvrez Kanban et quelques principes fondamentaux du développement en flux tiré.',
          tags: ['Kanban', 'Agile', 'Java', 'Personal Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Personal Kanban, retrouvez votre efficacité',
          abstract:
            'Découvrez une technique de gestion de travail personnel basée sur du management visuel et la limite du travail en cours',
          tags: ['Kanban', 'Agile', 'Java', 'Personal Kanban'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen'],
      contacts: {
        twitter: 'glours',
        mail: 'g.lours@gmail.com',
      },
    },
    {
      since: '2013-05-29',
      name: 'Christophe Keromen',
      bio:
        'Facilitateur et accompagnateur agile et lean, co-organisateur Agile Tour Vannes',
      picture:
        'http://www.gravatar.com/avatar/2898ad2474ba25b87a9326585d3a234e.png',
      websites: [
        {
          name: 'Web',
          url: 'http://ckti.wordpress.com/',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/christophekeromen/',
        },
      ],
      location: 'Vannes et Morbihan, Ouest, Paris et au-delà…',
      sessions: [
        {
          title: 'Agilité à la carte',
          abstract:
            "Vous vous posez des questions sur un sujet lié à l'agilité ? Contactez-moi, on en parle ensemble pendant 1h",
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: "Présentation de l'agilité",
          abstract:
            "Que représente l'agilité en 2013 ? Quelles tendances ? Quels écueils pour quelles réussites ?.",
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: "Agilité hors de l'IT",
          abstract:
            "Présentation de l'agilité pour les non-informaticiens. Pourquoi s'y intéresser ? Quels bénéfices en attendre ? Comment s'y prendre ?",
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: "Des jeux pour apprendre, innover et s'améliorer",
          abstract:
            'Serious Games, Innovation Games, Agile Games. Comment ça se passe ? Ça sert à quoi ? Quand les utiliser ?',
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Manager agile',
          abstract:
            "Quelles relations avec l'équipe ? Pourquoi changer ? Quelles pratiques ? Quel positionnement ?",
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Kanban',
          abstract:
            'Au-delà de la représentation visuelle. Quels concepts ? Comment le mettre en oeuvre ?Comment le coupler à Scrum?',
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Product Owner',
          abstract:
            'Quelles sont les reponsabilités du responsable produit agile ? Comment estimer, planifier ?',
          tags: ['Agile', 'Lean', 'Kanban', 'Games', 'Management', 'Scrum'],
          lang: ['fr'],
        },
      ],
      cities: ['Vannes'],
      contacts: {
        twitter: 'ckeromen',
        mail: 'ckeromen@ckti.com',
      },
    },
    {
      since: '2013-06-03',
      name: 'Antonio Goncalves',
      bio: "Java, AI, Cloud, Microservices, Quarkus - Microsoft - Java Champion - Co-créateur de @vxdmicroservice @DevoxxFR @lescastcodeurs @ParisJUG",
      picture: 'http://agoncal.files.wordpress.com/2013/05/antonio2013square2562.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://antoniogoncalves.org/',
        },
        {
          name: 'Book',
          url: 'https://www.amazon.com/author/agoncal',
        },
      ],
      location: 'Paris intramuros... mais je veux bien faire un effort',
      sessions: [
        {
          title: 'LangChain4j: de Zéro a RAG Super Hero',
          abstract: "Plongez dans l'univers de LangChain4j et découvrez comment il révolutionne l'intégration de l'IA dans les applications Java.",
          tags: ['LangChain4j', 'AI', 'IA', 'Intelligence Artificielle', 'RAG'],
          lang: ['fr'],
        },
        {
          title: 'Quarkus',
          abstract: 'Microservices avec Quarkus: MicroProfile, Panache, GraalVM, ...',
          tags: ['Microservices', 'MicroProfile', 'Quarkus', 'GraalVM', 'Panache', 'Cloud',],
          lang: ['fr'],
        },
        {
          title: 'Microservices?',
          abstract: 'Microservices: architecture, patterns, terminologie...',
          tags: ['Microservices', 'DDD', 'REST', 'Circuit Breaker', 'Registry', 'Pros and Cons',],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'agoncal',
        mail: 'antonio.goncalves@gmail.com',
      },
    },
    {
      since: '2013-06-04',
      name: 'Thierry Leriche-dessirier',
      bio:
        "Consultant freelance, intervenant sur des projets Web JEE Agile, de l'architecture et/ou du développement",
      picture: 'http://icauda.com/img/thierry3.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://icauda.com',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Guava mon ami',
          abstract:
            'Guava est une bibliothèque open source créée et maintenue par les équipes de Google. Inspirée des outils internes du géant, Guava propose de nombreux mécanismes (programmation fonctionnelle) pour manipuler les collections, créer des caches customisés, faciliter la gestion de la concurrence et les IOs. Durée : 60 min.',
          tags: ['Java', 'Guava', 'Lombok'],
          lang: ['fr'],
        },
        {
          title: 'Lombok pour la paix',
          abstract:
            "Lombok et Lombok-pg sont des projets Open Source. Ils simplifient sensiblement l'écriture de code classique (builders, delegates, etc.) et des nombreuses méthodes purement techniques et indispensables (getters, setters, hashCode, equals, etc.) qui polluent nos objets. Nous verrons comment ils nous aident à écrire du code concis et de qualité, dans lequel on peut avoir confiance. Durée : 30 min.",
          tags: ['Java', 'Guava', 'Lombok'],
          lang: ['fr'],
        },
        {
          title: 'Les Tests en Trois Temps (3T)',
          abstract:
            "Les Test Driven Development (TDD) vous inspirent mais chacune de vos tentatives s'est soldée par un échec, pas tant sur des problématiques techniques que sur des questions d’organisation ? Découvrez les Tests en Trois Temps (3T), une méthodologie inspirée des TDD/BDD qui devrait vous réconcilier avec les tests. Durée : 30 min.",
          tags: ['Java', 'Guava', 'Lombok'],
          lang: ['fr'],
        },
        {
          title: 'Découvrez les profils DISC',
          abstract:
            'Il est parfois difficile de discuter avec ses collègues. On parle le même langage mais on a l’impression de ne pas se comprendre. C’est normal car on ne fonctionne pas tous pareil. Le DISC (Dominant, Influent, Stable et Consciencieux) est un outil de management qui permet d’établir le profil de ses interlocuteurs pour travailler et communiquer avec eux de manière plus efficace. Durée : 45 min.',
          tags: ['Java', 'Guava', 'Lombok'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'thierryleriche',
        mail: 'thierryler@gmail.com',
      },
    },
    {
      since: '2013-06-13',
      name: 'Laurent Tardif',
      bio: 'Devops, agiliste - Zenika',
      picture: 'img/baggers/photo_LaurentTardif.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://ouelcum.wordpress.com/',
        },
      ],
      location: 'Grenoble',
      sessions: [
        {
          title: 'Agilité, Scrum & Kanban:',
          abstract:
            "Introduction aux valeurs et principes de base de l'agilité, et aux fondamentaux de Scrum.<br/>- Présentation ou discussions.<br/>- Découverte ou approfondissements",
          tags: ['Agile', 'Scrum', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Devops: de GIT à Kubernetes en passant par Docker',
          abstract:
            'Introduction à Devops.<br/>- Présentation ou discussions.<br/>- Découverte ou approfondissements',
          tags: [
            'Docker',
            'Jenkins',
            'Monitoring',
            'Kubernetes',
            'Industrialisation',
          ],
          lang: ['fr'],
        },
        {
          title: 'Kubernetes:ou comment aller plus loin avec Docker',
          abstract: 'Présentation & discussions',
          tags: ['Kubernetes'],
          lang: ['fr'],
        },
        {
          title: 'Docker:',
          abstract: 'Présentation & discussions',
          tags: ['Docker'],
          lang: ['fr'],
        },
        {
          title: 'Kafka:',
          abstract: 'Présentation & discussions',
          tags: ['Docker'],
          lang: ['fr'],
        },
      ],
      cities: ['Grenoble'],
      contacts: {
        twitter: 'ouelcum',
        mail: 'laurent.tardif@zenika.com',
      },
    },
    {
      since: '2013-06-13',
      name: 'Antoine Vernois',
      bio:
        'Agile Software Craftsman, freelance. Fondateur de la communaute Software Craftsmanship Toulouse.',
      picture: 'https://blog.crafting-labs.fr/images/antoine-vernois.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://blog.crafting-labs.fr',
        },
      ],
      location: 'Toulouse et environs',
      sessions: [
        {
          title: 'Clean Code',
          abstract:
            "À quoi ça sert de faire du code propre ? Et puis c'est quoi d'abord ? Comment je m'y mets ? Live code inside.",
          tags: [
            'Agile',
            'Code',
            'Legacy Code',
            'TDD',
            'Test',
            'Clean Code',
            'Craftsmanship',
          ],
          lang: ['fr'],
        },
        {
          title: 'Test unitaire, Test After, Test First et TDD',
          abstract:
            'Une courte introduction aux tests unitaires et aux stratégies pour les écrire. Live code inside.',
          tags: [
            'Agile',
            'Code',
            'Legacy Code',
            'TDD',
            'Test',
            'Clean Code',
            'Craftsmanship',
          ],
          lang: ['fr'],
        },
        {
          title: 'Refactoring legacy code',
          abstract:
            'Quelques techniques pour refactorer du code legacy avec du couplage et des dépendances fortes. Session basée sur le kata TripService. Live code inside.',
          tags: [
            'Agile',
            'Code',
            'Legacy Code',
            'TDD',
            'Test',
            'Clean Code',
            'Craftsmanship',
          ],
          lang: ['fr'],
        },
        {
          title: 'Coding Dojo',
          abstract:
            "Une session où c'est vous qui pratiquez. Moi, je ne fais que poser des questions :). Comme c'est vous qui allez bosser, c'est vous qui choisissez le langage :) (max 10 personnes).",
          tags: [
            'Agile',
            'Code',
            'Legacy Code',
            'TDD',
            'Test',
            'Clean Code',
            'Craftsmanship',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'avernois',
        mail: 'antoine@crafting-labs.fr',
      },
    },
    {
      since: '2013-06-26',
      name: 'Baptiste Mathus',
      bio:
        'Hacker passionné tendance devops, committer OSS MojoHaus, Leader @ToulouseJUG, ptit rigolo',
      picture:
        'http://www.gravatar.com/avatar/5a9d8fda68538f0db77ebfc8a55db853.jpg?s=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/batmat',
        },
        {
          name: 'Web',
          url: 'http://batmat.net/',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/bmathus',
        },
      ],
      location: 'Toulouse et dans le coin',
      sessions: [
        {
          title: "Git, pourquoi c'est cool ?",
          abstract:
            "C'est quoi ce truc dont tout le monde parle ? Pourquoi on me dit que c'est mieux que Svn ? En quoi c'est mieux ? C'est quoi les défauts ou les trucs dont il faut se méfier ?",
          tags: ['Jenkins', 'Docker', 'Swarm', 'Git', 'Maven', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Git avancé',
          abstract:
            "Vous utilisez déjà Git, mais les commandes git rebase -i, git bisect ou ce qu'est un cherry-pick, ou triturer l'historique de vos commits vous inquiètent encore ? Vous aimeriez maîtriser bien plus que commit et push et arrêter le svn-like ? Cette session est pour vous. Note: cette session est ajustable à vos besoins/questions, suffit de demander :-).",
          tags: ['Jenkins', 'Docker', 'Swarm', 'Git', 'Maven', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Monter une forge Jenkins qui déboîte',
          abstract:
            "Dans cette session, je peux vous parler de notre histoire (de 0 à 1000 jobs et une vingtaine d'esclaves en un peu plus de 5 ans)... Les trucs à connaître (scripts [groovy], plugins comme le Job DSL Plugin...) pour gérer une telle infrastructure. Les trucs cools comme Docker/Docker Swarm/Ansible qu'on utilise pour s'adapter à l'échelle et à la charge... Bref, à la fois du retour d'expérience Jenkins pour de vrai et vous aider éventuellement à ne pas faire les mêmes erreurs que nous, et du cas d'utilisation concret Docker n'en veux-tu n'en voilà !",
          tags: ['Jenkins', 'Docker', 'Swarm', 'Git', 'Maven', 'Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'bmathus',
        mail: 'bmathus@gmail.com',
      },
    },
    {
      since: '2013-07-03',
      name: 'Matthieu Segret',
      bio:
        "Co-fondateur de Human Coders. Passionné par Ruby, Ruby on Rails, l'entrepreneuriat...",
      picture:
        'http://www.gravatar.com/avatar/1416faf6feeeff88c0d22164d6c9fb5c.jpg?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://matthieusegret.com',
        },
        {
          name: 'Web',
          url: 'http://humancoders.com',
        },
        {
          name: 'Web',
          url: 'http://formation.humancoders.com',
        },
      ],
      location: 'Paris et environs',
      sessions: [
        {
          title: 'Ruby',
          abstract: 'Introduction au langage de programmation Ruby',
          tags: [
            'Ruby',
            'Ruby on Rails',
            'Entrepreneuriat',
            'Recrutement',
            'Formation',
          ],
          lang: ['fr'],
        },
        {
          title: 'Ruby on Rails',
          abstract:
            'Présentation de Ruby on Rails, le framework web le plus connu du monde Ruby',
          tags: [
            'Ruby',
            'Ruby on Rails',
            'Entrepreneuriat',
            'Recrutement',
            'Formation',
          ],
          lang: ['fr'],
        },
        {
          title: 'Comment recruter un bon développeur ?',
          abstract:
            "Comment bien définir son besoin ? Quels moyens pour recruter son prochain développeur ? Comment bien rédiger une offre d'emploi ? Où la publier ? Comment donner envie aux développeurs de travailler dans sa société ? Comment améliorer sa marque employeur ?",
          tags: [
            'Ruby',
            'Ruby on Rails',
            'Entrepreneuriat',
            'Recrutement',
            'Formation',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'MatthieuSegret',
        mail: 'matthieu@humancoders.com',
      },
    },
    {
      since: '2013-07-09',
      name: 'Serge Stinckwich',
      bio: 'Enseignant-chercheur, développeur',
      picture:
        'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/2/000/011/381/16fa99c.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.doesnotunderstand.org/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Introduction à Pharo',
          abstract:
            'Découverte de Pharo, une implémentation ouverte de Smalltalk, le langage de programmation orienté objet, dynamiquement typé et réflexif. Introduction à la syntaxe et coding dojo en Pharo.',
          tags: ['Smalltalk', 'Programmation orientée objet', 'TDD', 'Test'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'SergeStinckwich',
        mail: 'Serge.Stinckwich@gmail.com',
      },
    },
    {
      since: '2013-07-11',
      name: 'Cédric Champeau',
      bio: 'Committer sur le langage Groovy, accessoirement geek',
      picture: 'https://dl.dropboxusercontent.com/u/20288797/minimoi2.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://jroller.com/melix',
        },
      ],
      location: 'Nantes et environs. Possibilités sur Paris.',
      sessions: [
        {
          title: 'Les androïdes rêvent-ils de Gradle ?',
          abstract:
            "Gradle est un système de build nouvelle génération pour la JVM combinant les avantages du scripting Ant et des conventions Maven grâce à un DSL (Domain Specific Language) élégant et extensible. Découverte de l'outil.",
          tags: ['Groovy', 'Gradle', 'Grails', 'JVM', 'Spock', 'Test'],
          lang: ['fr'],
        },
        {
          title: 'Spock, le testing nouvelle génération',
          abstract:
            "Spock est un framework de test inspiré du BDD (Behavior Driven Development) pour la JVM. Dôté d'une syntaxe élégante et lisible, il remplace avec brio vos vieillissants JUnit et TestNG...",
          tags: ['Groovy', 'Gradle', 'Grails', 'JVM', 'Spock', 'Test'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'CedricChampeau',
        mail: 'cedric.champeau@gmail.com',
      },
    },
    {
      since: '2013-09-06',
      name: 'Julien Muetton',
      bio: 'Developeur web passionné, freelance',
      picture: 'http://clermontech.org/images/speaker-images/themouette.jpeg',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/themouette',
        },
        {
          name: 'Web',
          url: 'http://clermontech.org',
        },
        {
          name: 'Web',
          url: 'http://muetton.me',
        },
      ],
      location: 'Clermont Ferrand et environs',
      sessions: [
        {
          title: 'GIT',
          abstract: "Une présentation de l'outil et des concepts associés.",
          tags: ['JavaScript', 'PHP', 'HTTP', 'REST', 'Test', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'Javascript 101',
          abstract:
            "Introduction rapide au javascript. Tout ce qu'il faut pour démarrer dans les meilleurs conditions.",
          tags: ['JavaScript', 'PHP', 'HTTP', 'REST', 'Test', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'HTTP and REST',
          abstract: 'Comment développer des api RESTful.',
          tags: ['JavaScript', 'PHP', 'HTTP', 'REST', 'Test', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'PHPUnit.',
          abstract:
            'Présentation de PHPUnit, les bonnes pratiques du test unitaire en PHP.',
          tags: ['JavaScript', 'PHP', 'HTTP', 'REST', 'Test', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'CasperJS',
          abstract:
            'CapserJS, ou comment tester efficacement vos interfaces web.',
          tags: ['JavaScript', 'PHP', 'HTTP', 'REST', 'Test', 'Git'],
          lang: ['fr'],
        },
      ],
      cities: ['Clermont-Ferrand'],
      contacts: {
        twitter: 'themouette',
        mail: 'julien@muetton.me',
      },
    },
    {
      since: '2013-09-07',
      name: 'Ronan Guilloux',
      lat: 47.219102,
      lng: -1.551132,
      bio:
        'Développeur, directeur technique en agence web, hacker souriant & enthousiaste',
      picture:
        'http://projects.ez.no/var/plain_site/storage/images/ezmailhide/team/leaders/ronan_guilloux/89962-3-eng-GB/ronan_guilloux_large.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/ronanguilloux',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/ronanguilloux',
        },
        {
          name: 'Web',
          url: 'http://arnolog.net/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Silex, micro-framewok PHP',
          abstract:
            'Découvrir Silex, un micro-framework PHP utilisant des composants de Symfony2. Idéal pour créer une API ou prototyper un proof-of-concept en MVC',
          tags: ['PHP', 'Silex', 'Raspberry Pi', 'Qualité', 'Méthodes', 'Fun'],
          lang: ['fr'],
        },
        {
          title: 'The fine art of deploying web apps online',
          abstract:
            "Dire adieu au FTP et automatiser simplement le déploiement, cela n'est pas réservée à de grosses entreprises : nous l'appliquerons ici à des projets web à petits budgets et courts délais, typiques d'une agence web. Nos objectifs : Mettre en prod' beaucoup plus souvent, rattraper rapidement une mise en ligne qui a planté, et mieux partager les connaissances et les responsabilités entre collègues.",
          tags: ['PHP', 'Silex', 'Raspberry Pi', 'Qualité', 'Méthodes', 'Fun'],
          lang: ['fr'],
        },
        {
          title: 'Vos premières aventures avec Raspberry Pi',
          abstract:
            'Un atelier pratique, avec plusieurs démos, pour découvrir de manière ludique le Raspberry Pi.',
          tags: ['PHP', 'Silex', 'Raspberry Pi', 'Qualité', 'Méthodes', 'Fun'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'arno_u_loginlux',
        mail: 'ronan.guilloux@gmail.com',
      },
    },
    {
      since: '2013-09-08',
      name: 'William Durand',
      bio: 'Lifelong learner. Open Source evangelist. Traveler. Triathlete.',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://williamdurand.fr',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/willdurand',
        },
        {
          name: 'Web',
          url: 'http://clermontech.org',
        },
      ],
      location: 'Clermont-Fd Area',
      sessions: [
        {
          title: 'Introduction à Docker',
          abstract:
            "Docker, qu'est-ce que c'est ? Pourquoi est-ce utile et terriblement intéressant ?",
          tags: [
            'PHP',
            'Symfony',
            'HTTP',
            'REST',
            'Test',
            'Git',
            'Puppet',
            'Docker',
            'Open Source',
          ],
          lang: ['fr'],
        },
        {
          title: 'REST APIs With Symfony: The Right Way',
          abstract:
            'Comment construire une API REST avec le framework PHP Symfony ?',
          tags: [
            'PHP',
            'Symfony',
            'HTTP',
            'REST',
            'Test',
            'Git',
            'Puppet',
            'Docker',
            'Open Source',
          ],
          lang: ['fr'],
        },
        {
          title: 'Git & GitHub & Open Source',
          abstract:
            'Présentation de Git et GitHub, plus une ouverture sur le monde Open Source.',
          tags: [
            'PHP',
            'Symfony',
            'HTTP',
            'REST',
            'Test',
            'Git',
            'Puppet',
            'Docker',
            'Open Source',
          ],
          lang: ['fr'],
        },
        {
          title: 'Open Source For Dummies',
          abstract:
            "Qu'est-ce que l'Open Source ? Comment fait-on pour y participer ? Mais surtout, pourquoi c'est bien pour votre entreprise.",
          tags: [
            'PHP',
            'Symfony',
            'HTTP',
            'REST',
            'Test',
            'Git',
            'Puppet',
            'Docker',
            'Open Source',
          ],
          lang: ['fr'],
        },
        {
          title: 'Oriented Object Programming',
          abstract:
            "Présentation de divers concepts de programmation orientée objet permettant d'améliorer son code, avec quelques aspects philosophiques tout de même.",
          tags: [
            'PHP',
            'Symfony',
            'HTTP',
            'REST',
            'Test',
            'Git',
            'Puppet',
            'Docker',
            'Open Source',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Clermont-Ferrand'],
      contacts: {
        twitter: 'couac',
        mail: 'will+bbl@drnd.me',
      },
    },
    {
      since: '2013-09-08',
      name: 'Xavier Seignard',
      bio: 'Dev JS front et back, bidouilleur',
      picture: 'http://drangies.fr/assets/images/me.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://www.linkedin.com/in/xavierseignard',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/xseignard',
        },
        {
          name: 'Web',
          url: 'http://drangies.fr/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Build, intégration continue et qualité pour le javascript',
          abstract:
            "Un tour d'horizon des outils de build pour le javascript et leur mise en place: grunt, bower, istanbul, etc., et même des Makefile!",
          tags: [
            'NodeJS',
            'JavaScript',
            'Grunt',
            'Bower',
            'Arduino',
            'Raspberry Pi',
          ],
          lang: ['fr'],
        },
        {
          title: 'Créer un objet connecté',
          abstract:
            "Un feu tricolore qui vous donne un feedback sur votre build? Un objet connecté à l'api twitter? Challenge accepted!",
          tags: [
            'NodeJS',
            'JavaScript',
            'Grunt',
            'Bower',
            'Arduino',
            'Raspberry Pi',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'xavier_seignard',
        mail: 'xavier.seignard@gmail.com',
      },
    },
    {
      since: '2013-09-13',
      name: 'Ameur Yannick',
      bio:
        'Product Owner, Facilitateur, Coach, Formateur Agile & Lean Startup ',
      picture: 'http://m.c.lnkd.licdn.com/media/p/1/005/012/1d8/0d5df68.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.agilenco.fr/',
        },
        {
          name: 'Web',
          url: 'http://yannick.ameur.free.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/yannickameur/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Lean Startup',
          abstract:
            "Je vous propose d'animer et de faciliter une séance Lean Business Model Canvas pour définir votre propjet.",
          tags: [
            'Agile',
            'Product Owner',
            'Scrum',
            'Coaching',
            'Formation',
            'Lean Startup',
            'Kanban',
          ],
          lang: ['fr'],
        },
        {
          title: 'Rétrospective',
          abstract:
            "Je vous propose d'animer et faciliter votre rétrospective sur un format d'une heure.",
          tags: [
            'Agile',
            'Product Owner',
            'Scrum',
            'Coaching',
            'Formation',
            'Lean Startup',
            'Kanban',
          ],
          lang: ['fr'],
        },
        {
          title: 'Serious Games',
          abstract:
            "Discuter d'un thème de votre choix sur l'agilité méthodologie ou technique. Attention brainstorming collectif animer par l'utilisation d'un sérious Game.",
          tags: [
            'Agile',
            'Product Owner',
            'Scrum',
            'Coaching',
            'Formation',
            'Lean Startup',
            'Kanban',
          ],
          lang: ['fr'],
        },
        {
          title: 'Coaching Personnel',
          abstract:
            "Envis d'être coaché ? Vous vous posez des questions sur vos projets professionnels et personnel, offrez vous une scéance de Coaching format 45mn.",
          tags: [
            'Agile',
            'Product Owner',
            'Scrum',
            'Coaching',
            'Formation',
            'Lean Startup',
            'Kanban',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'yannickAmeur',
        mail: 'yannick.ameur@gmail.com',
      },
    },
    {
      since: '2013-10-07',
      name: 'Matthieu Garde',
      bio:
        'Entrepreneur et pratiquant Lean Startup - Fondateur de Lean Startup France',
      picture: 'http://m.c.lnkd.licdn.com/media/p/1/000/2cb/114/006d029.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://matthieugarde.com',
        },
        {
          name: 'Web',
          url: 'http://leanstartupfrance.com',
        },
        {
          name: 'Web',
          url: 'http://www.meetup.com/Lean-Startup-User-Group/',
        },
      ],
      location: 'Paris, Banlieue, Compiègne',
      sessions: [
        {
          title: 'Lean Startup',
          abstract: 'Apprenez-en plus sur le mouvement poussé par Eric Ries',
          tags: [
            'Lean Startup',
            'Entrepreneuriat',
            'Customer Development',
            'Validation Board',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'Inventer et tester de nouveaux business models',
          abstract:
            'Comment identifier ses hypothèses, les prioriser, et les tester rapidement ?',
          tags: [
            'Lean Startup',
            'Entrepreneuriat',
            'Customer Development',
            'Validation Board',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'Comment faire de bonnes interviews clients ?',
          abstract:
            'Comment identifier ses clients, les observer, les interviewer et poser de bonnes questions ?',
          tags: [
            'Lean Startup',
            'Entrepreneuriat',
            'Customer Development',
            'Validation Board',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le Lean Canvas',
          abstract:
            'Comment documenter son idée et ses hypothèses sur une seule page A4',
          tags: [
            'Lean Startup',
            'Entrepreneuriat',
            'Customer Development',
            'Validation Board',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le Lean Startup en entreprise',
          abstract:
            "Vous n'êtes plus une startup, mais le Lean Startup peut tout de même vous servir !",
          tags: [
            'Lean Startup',
            'Entrepreneuriat',
            'Customer Development',
            'Validation Board',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'matthieugarde',
        mail: 'matthieu.garde@gmail.com',
      },
    },
    {
      since: '2013-10-08',
      name: 'Camille Roux',
      bio:
        'Coach en Lean Startup et Business Model • Directeur associé de Human Coders, centre de formation pour développeur',
      picture:
        'http://www.gravatar.com/avatar/29668d9eaaf486727a446f7d03c59f07.jpg?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://conseil.camilleroux.com/',
        },
        {
          name: 'Web',
          url: 'https://forum.pragmaticentrepreneurs.com/',
        },
        {
          name: 'Web',
          url: 'http://humancoders.com',
        },
      ],
      location: 'Montpellier',
      sessions: [
        {
          title: 'Lean Startup',
          abstract:
            'Découvrez cette approche pramagtique permettant de lancer des sociétés/produits/services en un temps record',
          tags: ['Entrepreneuriat', 'Lean Startup', 'Business Model'],
          lang: ['fr'],
        },
      ],
      cities: ['Montpellier', 'Paris'],
      contacts: {
        twitter: 'CamilleRoux',
        mail: 'contact@camilleroux.com',
      },
    },
    {
      since: '2013-10-17',
      name: 'Vincent Ferries',
      bio: 'Développeur Java mais pas que - genigraph',
      picture: 'img/baggers/photo_VincentFerries.png',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.genigraph.fr/author/vferries/',
        },
      ],
      location: 'Toulouse et agglomération',
      sessions: [
        {
          title: 'Introduction au développement Android',
          abstract:
            'Les fondamentaux du développement Android, comment ça marche dedans, les grands principes.',
          tags: ['JavaEE', 'Android', 'Dojo', 'Dart'],
          lang: ['fr'],
        },
        {
          title: "Qu'est-ce qui change dans Java EE 6 et 7",
          abstract:
            "Empêtrés dans des applications J2EE Struts depuis des années, redonnez vous espoir avec un live coding qui présente les grands aspects de Java EE 6 et 7 : CDI, REST, les websockets et j'en passe.",
          tags: ['JavaEE', 'Android', 'Dojo', 'Dart'],
          lang: ['fr'],
        },
        {
          title: 'Coding Dojo',
          abstract:
            "Coding Dojo pour voir ou revoir le TDD ensemble ou adapté à la découverte d'un langage : Java, python, ruby...",
          tags: ['JavaEE', 'Android', 'Dojo', 'Dart'],
          lang: ['fr'],
        },
        {
          title: 'Dart',
          abstract:
            'Les bases et principes du langage. Des petits exemples en prime !',
          tags: ['JavaEE', 'Android', 'Dojo', 'Dart'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'VincentFERRIES',
        mail: 'vincent.ferries@gmail.com',
      },
    },
    {
      since: '2013-10-30',
      name: 'Nicolas Martignole',
      bio:
        'Auteur du Touilleur Express, co-organisateur et fondateur de Devoxx France, chez Lunatech France depuis avril 2017',
      picture:
        'https://fr.gravatar.com/userimage/4295265/c50510bb451992bde6f3add1a10525dd.jpg?size=256',
      websites: [
        {
          name: 'Web',
          url: 'http://www.touilleur-express.fr',
        },
        {
          name: 'Web',
          url: 'http://www.lunatech.fr',
        },
        {
          name: 'Web',
          url: 'http://www.devoxx.fr/',
        },
      ],
      location: 'Paris intra-muros, Est Parisien et la Défense',
      sessions: [
        {
          title: 'Les clefs pour réussir ses présentations techniques',
          abstract:
            "Nous sommes tous amenés à effectuer des présentations techniques. Que ce soit lors d'une conférence comme Devoxx France, ou en comité. Apprenez quelques techniques de présentations, comment préparer son sujet pour le CFP, ce qu'il faut faire et les pièges à éviter.",
          tags: [
            'Présentation',
            'Startup',
            'Web',
            'Scala',
            'Programmation fonctionnelle',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'Redis, une base NoSQL simple et puissante',
          abstract:
            "Découvrez Redis, son modèle de programmation, sa simplicité et des cas d'usages, basé sur mon expérience à Zaptravel.",
          tags: [
            'Présentation',
            'Startup',
            'Web',
            'Scala',
            'Programmation fonctionnelle',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: "Scala, ce qu'il faut retenir",
          abstract:
            "Découvrez le langage Scala, cousin de Java. Basé sur mon expérience opérationnelle, je vous partagerai mon retour d'expérience. Comment se former, recruter et développer en Scala.",
          tags: [
            'Présentation',
            'Startup',
            'Web',
            'Scala',
            'Programmation fonctionnelle',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'Play2 et Scala',
          abstract:
            'Découverte du framework web Play2, basé sur mon travail chez Zaptravel depuis mai 2012.',
          tags: [
            'Présentation',
            'Startup',
            'Web',
            'Scala',
            'Programmation fonctionnelle',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
        {
          title: 'HTTP et architectures orientées Webs',
          abstract:
            'HTTP, HATEOAS, REST... (re)découvrez les bases du protocole HTTP et comment en tirer partie dans votre architecture logicielle.',
          tags: [
            'Présentation',
            'Startup',
            'Web',
            'Scala',
            'Programmation fonctionnelle',
            'Lean Canvas',
            'Running Lean',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'nmartignole',
        mail: 'nicolas@touilleur-express.fr',
      },
    },
    {
      since: '2013-10-31',
      name: 'Mathieu Bolla',
      bio:
        "Développeur efficient, passionné surtout par ce qui n'est pas informatique, pour tirer le meilleur parti du monde réel dans notre tout petit monde virtuel. En somme, un électronicien, photographe, forgeron, menuisier, qui fait du Java, parfois. Fondateur de GoAndCloud.it, parce que coder c'est bien, mais c'est mieux quand c'est les autres.",
      picture:
        'https://www.gravatar.com/avatar/4677084da23fd41e2d21561ec111a512?s=256',
      websites: [
        {
          name: 'Web',
          url: 'http://www.goandcloud.it',
        },
        {
          name: 'Web',
          url: 'http://www.mathieu-bolla.com',
        },
        {
          name: 'AboutMe',
          url: 'http://about.me/mathieubolla',
        },
      ],
      location:
        'Douai, mais aussi autour de Lille, voir Paris pour les plus sympas',
      sessions: [
        {
          title: 'AWS Java SDK: Prise en main',
          abstract:
            "Amazon Web Services sonne familier pour vous, mais vous n'y avez jamais mis les pieds? Ou bien la spécification de son modèle de signature vous a donné des boutons à la 10ème tentative? Ou bien encore, vous avez laissé fuiter vos credentials dans les méandres d'EC2 étant jeune? Venez vite découvrir l'AWS Java SDK, ou comment aborder Amazon Web Services sans quitter le confort de son Maven et de son IDE favori, sur un exemple d'application 'Internet scale'",
          tags: [
            'Java',
            'AWS',
            'Amazon',
            'Scalabilité',
            'Domotique',
            'Embarqué',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Thermoduino, le thermomètre Java FX / Arduino / Raspberry Pi qui ne fait pas le café',
          abstract:
            "Vous n'étiez pas aux conférences JavaFX / Raspberry Pi / Domotique de Devoxx France 2012? Moi, si. Petit résumé autour d'un cas pratique: Afficher la température (et la météo, et le reste) avec JavaFX sur un Raspberry Pi, et, tiens, un Arduino aussi, tant qu'on y est...",
          tags: [
            'Java',
            'AWS',
            'Amazon',
            'Scalabilité',
            'Domotique',
            'Embarqué',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'mathieubolla',
      },
    },
    {
      since: '2013-11-04',
      name: 'Jean-pierre Lerbscher',
      bio: 'Fondateur JavaPerf Consulting, expert performance & JEE',
      picture: 'http://www.jperf.com/images/jpl.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://jperf.wordpress.com',
        },
        {
          name: 'Web',
          url: 'http://www.jperf.com',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Performance',
          abstract: "Comment auditer la performance d'une application",
          tags: ['Performance', 'JEE', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Audit de performance',
          abstract:
            "Démarrer un audit de performance (comment s'organiser?, quels outils?, quelle méthodologie?)",
          tags: ['Performance', 'JEE', 'Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'jlerbsc',
        mail: 'jean-pierre.lerbscher@jperf.com',
      },
    },
    {
      since: '2013-11-09',
      name: 'Michaël Bitard',
      bio: 'Agile Developer',
      picture:
        'https://en.gravatar.com/userimage/31032000/ea9b56ad98a9475b4d8e0f107b3dc51e.png?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://michael.bitard.eu',
        },
      ],
      location: 'Toulouse et agglomération',
      sessions: [
        {
          title: 'Docker FTW',
          abstract:
            'Je vous propose de découvrir Docker, cet outil qui peut révolutionner vos mises en production autant que vos développements.',
          tags: [
            'Java',
            'Scrum',
            'Extreme Programming',
            'TDD',
            'Chroot',
            'Ansible',
            'IntelliJ',
          ],
          lang: ['fr'],
        },
        {
          title: 'Coding Dojo Java',
          abstract:
            "Je souhaite que l'on échange sur nos pratiques de développement et de tests lors d'un randori.<br />Nous définirons ensemble l'objectif du coding dojo, en fonction de vos attentes.",
          tags: [
            'Java',
            'Scrum',
            'Extreme Programming',
            'TDD',
            'Chroot',
            'Ansible',
            'IntelliJ',
          ],
          lang: ['fr'],
        },
        {
          title: 'Et si on codait son poste de travail?',
          abstract:
            "Vous ne vous êtes jamais dit que vous perdiez du temps à configurer votre poste de travail?<br /> Je peux vous faire découvrir comment automatiser l'installation de vos postes de dev (Linux). Au début du BBL je ferai une présentation des outils existants, par la suite nous essaierons ensemble d'aller aussi loin que possible dans l'automatisation de votre poste.",
          tags: [
            'Java',
            'Scrum',
            'Extreme Programming',
            'TDD',
            'Chroot',
            'Ansible',
            'IntelliJ',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'BitardMichael',
        mail: 'bitard.michael@gmail.com',
      },
    },
    {
      since: '2013-11-14',
      name: 'Laurent Meurisse',
      bio: "Coach Agile & Dévelopement produit pour l'entreprise & startup",
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://laurentmeurisse.wordpress.com/',
        },
        {
          name: 'Web',
          url: 'http://www.ekito.fr/people/?lang=fr/',
        },
      ],
      location: 'Toulouse, Paris, Lille',
      sessions: [
        {
          title: 'Startup : Lean Canvas de votre idée produit',
          abstract: 'Définir le bon produit avec le Lean Canvas',
          tags: ['Agile', 'Lean Startup', 'Impact Mapping'],
          lang: ['fr'],
        },
        {
          title: 'Startup: créer son MVP',
          abstract:
            'Créer un premier produit minimal pour mesurer la viabilité du Lean Canvas',
          tags: ['Agile', 'Lean Startup', 'Impact Mapping'],
          lang: ['fr'],
        },
        {
          title: 'Entreprise: Vision Produit avec Impact Mapping',
          abstract:
            'Au lieu de définir une backlog de fonctionnalités, définissez plutot vos objectifs, et déployez des impacts.',
          tags: ['Agile', 'Lean Startup', 'Impact Mapping'],
          lang: ['fr'],
        },
        {
          title: "Entreprise: Spécification par l'exemple",
          abstract:
            'Pour mieux travailler collaborativement, en spécifiant et testant les objectifs produits de manière agile',
          tags: ['Agile', 'Lean Startup', 'Impact Mapping'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'laurentmeurisse',
        mail: 'lmeurisse@ekito.fr',
      },
    },
    {
      since: '2013-11-16',
      name: 'Sébastien Bordes',
      bio: 'Java Developer',
      picture:
        'http://www.gravatar.com/avatar/70fedbe679de9066499f208e35b3bf1f.png?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.jrebirth.org',
        },
        {
          name: 'Web',
          url: 'http://www.jrebirth.org',
        },
      ],
      location: 'Toulouse et agglomération',
      sessions: [
        {
          title: 'JavaFX en long, en large et en travers',
          abstract: 'Démonstration des fonctionnalités de JavaFX 2.2.40.',
          tags: ['JavaFX', 'JRebirth', 'Usine logicielle', 'Eclipse'],
          lang: ['fr'],
        },
        {
          title: 'Codons une application JavaFX avec Eclipse',
          abstract: "Démonstration par l'exemple de l'API de JavaFX.",
          tags: ['JavaFX', 'JRebirth', 'Usine logicielle', 'Eclipse'],
          lang: ['fr'],
        },
        {
          title: 'JRebirth, pourquoi utiliser un cadriciel applicatif',
          abstract:
            'Tous les bienfaits de choisir JRebirth Application Framework pour votre application.',
          tags: ['JavaFX', 'JRebirth', 'Usine logicielle', 'Eclipse'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 's8bordes',
        mail: 'seb@jrebirth.org',
      },
    },
    {
      since: '2013-11-20',
      name: 'Stéphane Landelle',
      bio: 'Dev Scala/Java, créateur de Gatling et CTO de GatlingCorp',
      picture: 'img/baggers/photo_slandelle.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://gatling.io',
        },
      ],
      location: 'Paris et proche couronne',
      sessions: [
        {
          title: 'Gatling',
          abstract:
            'Découvrez Gatling, un outil qui vous permettra de monter des tests de charge à la fois performants, clairs et maintenables.',
          tags: ['Présentation', 'Gatling', 'Test', 'Stress', 'Load', 'Scala'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'slandelle',
        mail: 'slandelle@gatling.io',
      },
    },
    {
      since: '2013-11-24',
      name: 'Arnaud Tournier',
      bio: 'Archi/Dev Full stack, CEO Lte Consulting',
      picture:
        'http://www.gravatar.com/avatar/3d45b77cce96b722c721267b65f2fbb5.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.lteconsulting.fr',
        },
        {
          name: 'Web',
          url: 'http://gwt-france.blogspot.fr/',
        },
        {
          name: 'Web',
          url: 'http://lteconsulting.developpez.com/',
        },
      ],
      location: 'Toulouse et agglomération',
      sessions: [
        {
          title: 'GWT en général et en particulier',
          abstract:
            "Envie d'utiliser cet outil ? Besoin de formation ? Problèmes d'architecture, de performance ?",
          tags: [
            'GWT',
            'AppEngine',
            'Architecture',
            'Java',
            'Performance',
            'Client',
          ],
          lang: ['fr'],
        },
        {
          title:
            "Faciliter le développement d'applications Web Hors-ligne avec GWT",
          abstract:
            "APIs HTML5 pour l'offline, et problématiques associées. Le tout avec l'aide de GWT",
          tags: [
            'GWT',
            'AppEngine',
            'Architecture',
            'Java',
            'Performance',
            'Client',
          ],
          lang: ['fr'],
        },
        {
          title: "Retour d'expérience avec Google App Engine",
          abstract:
            "Envie de profiter de retours d'expérience sur App Engine pour des projets industriels ?",
          tags: [
            'GWT',
            'AppEngine',
            'Architecture',
            'Java',
            'Performance',
            'Client',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Architecture, performance, maintenabilité et satisfaction client',
          abstract:
            "Principes généraux sur tous ces points. Au delà du buzz agile, quelle est l'attitude à adopter pour travailler AVEC vos clients au jour le jour tout en conservant une vision à long terme pour le produit développé ?",
          tags: [
            'GWT',
            'AppEngine',
            'Architecture',
            'Java',
            'Performance',
            'Client',
          ],
          lang: ['fr'],
        },
        {
          title: 'Différences x86 / x64',
          abstract:
            "Petit tour des différences, notamment en ce qui concerne les piles d'appel et le mécanismes de gestion des exceptions. Exemple avec une bibliothèque maison de détournement d'appels...",
          tags: [
            'GWT',
            'AppEngine',
            'Architecture',
            'Java',
            'Performance',
            'Client',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'ltearno',
        mail: 'arnaud.tournier@lteconsulting.fr',
      },
    },
    {
      since: '2013-11-29',
      name: 'Horacio Gonzalez',
      bio:
        'Spaniard lost in Brittany, unconformist coder, Java craftsman, dreamer and all-around geek. Co-Founder of the FinistJUG and GDG Finistère',
      picture: 'img/baggers/photo_horacio.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://lostinbrittany.org/blog/',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/horaciogonzalez/',
        },
      ],
      location: 'La pointe de la Bretagne',
      sessions: [
        {
          title: 'AngularJS',
          abstract:
            'Le framework JavaScript dont tout le monde parle, dans cette présentation je vous montre pourquoi.',
          tags: ['Web', 'Java', 'Groovy', 'JavaScript', 'AngularJS', 'Dart'],
          lang: ['fr'],
        },
        {
          title: 'Pourquoi je ne code plus en Java',
          abstract:
            'Depuis que je me suis mis sériousement à Groovy, je ne code plus une ligne de Java. Dans cette présentation je vous montre comment Groovy peur changer la vie du développeur Java',
          tags: ['Web', 'Java', 'Groovy', 'JavaScript', 'AngularJS', 'Dart'],
          lang: ['fr'],
        },
        {
          title: "Les Web Components aujourd'hui",
          abstract:
            'Les Web Components débarquent. Un nouveau standard en cours d’élaboration au W3C, qui va permettre d’avoir une approche par composants au développement web. Dans cette présentation nous parlerons de ce standard en construction, de concepts comme ShadowDOM, Mutation Observers, custom elements, Model-Driven-View, Object.observe()… Nous parlerons aussi des implémentations actuelles, du projet Polymer de Google, des X-Tags de Mozilla et de comment avec AngularJS on peut déjà avoir un bon aperçu de ce que nous attend.',
          tags: ['Web', 'Java', 'Groovy', 'JavaScript', 'AngularJS', 'Dart'],
          lang: ['fr'],
        },
        {
          title: 'La forge du développeur JavaScript moderne',
          abstract:
            "En 2013 JavaScript est un langage prêt pour le défi et les exigences des entreprises, avec un écosystème évolué dans lequel il y a tous les composants nécessaires dans une forge logicielle d'entreprise : des frameworks complets gérant les couches de présentation, des outils de test, de la gestion de dépendances, des outils de build et même des serveurs d'applications. Dans cette présentation j'introduis l'écosystème JavaScript actuel, en me centrant sur une panoplie d'outils qui permettent d'organiser les développements : Yeoman, Bower, Karma, Uglify...",
          tags: ['Web', 'Java', 'Groovy', 'JavaScript', 'AngularJS', 'Dart'],
          lang: ['fr'],
        },
        {
          title: 'Dart, le nouveau langage de Google pour le web',
          abstract:
            "Dans la dernière Devoxx, Google a annoncé la sortie de la version 1.0 de leur nouveau langage pour le web, Dart. Derrière cette v1 il y a deux ans de développement dans lesquels des développeurs de tout le monde ont pu collaborer pour essayer de créer un langage structuré, facile d'apprentissage pour tout développeur quel que soit son background et surtout adapté au web d'aujourd'hui. Prenant les meilleures idées de Java, JavaScript et C#, Dart se veut ce que JavaScript aurait pu être s'il avait été développé aujourd'hui.",
          tags: ['Web', 'Java', 'Groovy', 'JavaScript', 'AngularJS', 'Dart'],
          lang: ['fr'],
        },
      ],
      cities: ['Brest'],
      contacts: {
        twitter: 'lostinbrittany',
        mail: 'horacio.gonzalez@gmail.com',
      },
    },
    {
      since: '2013-12-02',
      name: 'Raphaël Luta',
      bio:
        'Consultant technique indépendant, web et (big) data. Performance geek.',
      picture:
        'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/1/000/06e/358/0cab12d.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/raphaelluta/',
        },
        {
          name: 'Web',
          url: 'http://www.aptiwan.com',
        },
      ],
      location: 'Paris et proche couronne',
      sessions: [
        {
          title: 'Performance applicative: impact du réseau',
          abstract:
            "Pour des développeurs ou architectes, introduction au fonctionnement des réseaux et leur impact sur l'architecture et la performance des applications",
          tags: ['Web', 'Performance', 'Tuning', 'Apache', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: "Amélioration des performances d'un site web",
          abstract:
            'Présentation des principales contraintes limitant la performance actuelle du web, les outils de mesure et les bonnes pratiques générales à mettre en oeuvre',
          tags: ['Web', 'Performance', 'Tuning', 'Apache', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'HTTP Next Generation',
          abstract:
            'Présentation des nouveaux protocoles du Web: SPDY, HTTP/2.0, SSE... et leurs impacts sur les sites et applications existantes pour utiliser au mieux leurs capacités',
          tags: ['Web', 'Performance', 'Tuning', 'Apache', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'Mon mobile, le web et moi',
          abstract:
            'Les caractéristiques spécifiques du web mobile et des recommandations pour obtenir la meilleure expérience client',
          tags: ['Web', 'Performance', 'Tuning', 'Apache', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'Discussions informelles',
          abstract:
            'Autour des problèmes web: architecture infrastructure et applicative, performance, mesure et analyse des données',
          tags: ['Web', 'Performance', 'Tuning', 'Apache', 'Mobile'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'raphaelluta',
        mail: 'raphael.luta@aptiwan.com',
      },
    },
    {
      since: '2013-12-06',
      name: 'Loïc Knuchel',
      bio:
        'Développeur web full-stack (Scala, Angular, Ionic), entrepreneur (Cookers / SalooN) et organisateur des @HumanTalksParis et de workshops sur Ionic',
      picture:
        'https://gravatar.com/avatar/f755e6e8914df5cbaa74d30dd7de1ae2.png?size=256',
      websites: [
        {
          name: 'Web',
          url: 'http://loic.knuchel.org/',
        },
        {
          name: 'Web',
          url: 'http://loic.knuchel.org/blog/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/loicknuchel',
        },
      ],
      location: 'Paris et à proximité',
      sessions: [
        {
          title: 'Découvrir Ionic en codant une application de Chat',
          abstract:
            "Ionic Framework révolutionne le monde des applications mobile hybride. Je vous propose donc de vous faire découvrir ce framework et les outils qui vont avec via le live-code d'une application de chat.",
          tags: [
            'Scala',
            'AngularJS',
            'Ionic',
            'Cordova',
            'Mobile',
            'Web',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Ionic Framework',
          abstract:
            "Cette session est une présentation classique de Ionic framework. Après un rapide panorama généraliste sur le développement mobile, je vous présenterais Ionic. L'objectif étant de bien comprendre l'environnement technologique et les possibilités du framework.",
          tags: [
            'Scala',
            'AngularJS',
            'Ionic',
            'Cordova',
            'Mobile',
            'Web',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: "Ionic Framework, c'est aussi des outils !",
          abstract:
            "Lorsque l'on parle de Ionic, on évoque tout le temps les composants UI, le lien avec Angular voire avec Cordova. Mais Ionic c'est aussi un ensemble d'outils faits pour vous faciliter la vie ! Je vous propose donc un focus sur ces outils qui peuvent être utilisés pour n'importe quelle application cordova :)",
          tags: [
            'Scala',
            'AngularJS',
            'Ionic',
            'Cordova',
            'Mobile',
            'Web',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: "Anatomie d'un plugin Cordova",
          abstract:
            "Les applications Cordova (et donc Ionic) accèdent sans problème aux fonctionnalités natives grâce à un système de plugin. Tout le monde en parle mais peu de personnes ont vraiment regardé leur fonctionnement. L'objectif de cette session est de décortiquer le fonctionnement des plugins pour mieux les comprendre et pourquoi pas développer vos propres plugins !",
          tags: [
            'Scala',
            'AngularJS',
            'Ionic',
            'Cordova',
            'Mobile',
            'Web',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Attention aux pièges du mobile',
          abstract:
            "Une application Ionic est avant tout une application Angular ! Simple ! Seulement elle s'exécute sur un téléphone et les problématiques de performances arrivent alors très vite... Voici donc les problèmes les plus récurrents et comment les contourner; bref, un petit guide des bonnes pratiques Web et Angular sur mobile ;)",
          tags: [
            'Scala',
            'AngularJS',
            'Ionic',
            'Cordova',
            'Mobile',
            'Web',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Ionic sur commande',
          abstract:
            "Discussions informelles autour de Ionic, sujet autre que ceux proposés... N'hésitez pas à demander !",
          tags: [
            'Scala',
            'AngularJS',
            'Ionic',
            'Cordova',
            'Mobile',
            'Web',
            'NoSQL',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'loicknuchel',
        mail: 'loicknuchel@gmail.com',
      },
    },
    {
      since: '2013-12-12',
      name: 'Julien Fallet',
      bio: 'Agilitateur, éCoLibriste',
      picture:
        'https://fr.gravatar.com/userimage/37627617/5b0c894dfb86cd8c91df840773eed7c3.jpeg',
      websites: [
        {
          name: 'Web',
          url: 'https://jfallet.wordpress.com/',
        },
      ],
      location: 'Rennes et alentours, possibilités sur la Bretagne',
      sessions: [
        {
          title: 'Le développement logiciel avec les méthodes agiles',
          abstract:
            'Comprendre ce que les méthodes agiles souhaitent apporter au dévelopement logiciel (Equipe, Produit, Communication)',
          tags: ['Agile', 'Scrum', 'Kanban', 'Produit', 'Product Owner'],
          lang: ['fr'],
        },
        {
          title: 'Facilitation graphique',
          abstract:
            'Découvrir par la pratique les outils et techniques de facilitation graphique pour animer vos reflexions collective et partager clairemen une situation.',
          tags: ['Scribing', 'Sketchnote', 'Pensée visuelle'],
          lang: ['fr'],
        },
        {
          title: 'Vin et kanban',
          abstract:
            'Découvrir le Lean et le Kanban a travers le management de ma cave à vin, ou comment améliorer un produit ou un processus.',
          tags: ['Agile', 'Scrum', 'Kanban', 'Produit', 'Product Owner'],
          lang: ['fr'],
        },
        {
          title: 'Agile et UX',
          abstract:
            'Transposer les leçons du LeanStartup dans votre écosystème afin de créer un cadre facilitant la construction de prosuits innovants',
          tags: [
            'Stratégie produit',
            'User eXperience',
            'Design Thinking',
            'Agile',
            'DevOps',
          ],
          lang: ['fr'],
        },
        {
          title: "L'aventure intérieure",
          abstract:
            'Mieux appréhender, grace aux neurosciences et à la méditation, ce qui peut nous apparaître difficile dans le changement et identifier des pistes pour dépasser nos structures mentales et/ou émotionnelles.',
          tags: ['Neurosciences', 'Méditation', 'Agilité'],
          lang: ['fr'],
        },
        {
          title: 'Extreme Serious Game',
          abstract:
            "Le jeu et l'Entreprise : Une expérience pour questionner la place du jeu en entreprise",
          tags: ['Communication', 'Coopération', 'Stratégie'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        mail: 'jfallet.pro@gmail.com',
      },
    },
    {
      since: '2013-12-17',
      name: 'Guillaume Ehret',
      bio:
        'Développeur et architecte Java/Web, coach agile. Auteur du blog javamind-fr ',
      picture:
        'https://raw.github.com/javamind/partage/master/guillaumeehret.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://javamind-fr.blogspot.fr',
        },
      ],
      location: 'Saint Etienne, Lyon',
      sessions: [
        {
          title: 'Améliorer la qualité de ses tests unitaires',
          abstract:
            "Revue des différentes règles à appliquer pour améliorer la qualité de ses tests unitaires et faire qu'ils soient durables dans le temps.",
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Industrialiser la construction de ces projets avec Maven/jenkins',
          abstract:
            "Compiler, tester, packager, tester, déployer.... Sous forme de live coding nous pouvons voir comment gérer le cycle de vie de votre application à l'aide de Maven",
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
        {
          title: "L'agilité par la pratique",
          abstract:
            "Vous vous demandez comment démarrer un projet agile? Vous avez déjà pratiqué l'agilité au sein de votre structure mais vous rencontrez quelques problèmes? Je vous propose, avec retours d'expérience à l'appui, d'échanger avec vous sur ces sujets.",
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
        {
          title: 'Intégration continue avec Jenkins',
          abstract:
            "Qu'est ce que l'intégration continue ? présentation et utilisation de  Jenkins",
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
        {
          title: 'Angular JS concepts de base',
          abstract:
            'Voir les concepts de base du framework made in Google et démarer sa première application',
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
        {
          title: 'Angular JS level 2',
          abstract:
            "Vous voulez comprendre le fonctionnement du framework et l'utilisation des filters, controllers, directives, services.... ce BBL est pour vous....",
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Yeoman ou comment industrialiser le cycle de vie de ses applications JS',
          abstract:
            "Le web d'aujoud'hui se compile, des tests unitaires sont joués, les dépendances sont automatiquement récupérées sur le web... Soit vous le faites manuellement soit vous utilisez un outil comme Yeoman (yo, grunt et bower)",
          tags: [
            'Agilité',
            'Android',
            'Java',
            'Test',
            'Maven',
            'Jenkins',
            'AngularJS',
            'Yeoman',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Saint Etienne', 'Lyon'],
      contacts: {
        twitter: 'guillaumeehret',
        mail: 'guillaume.ehret.java@gmail.com',
      },
    },
    {
      since: '2013-12-17',
      name: 'Agnès Crépet',
      bio:
        "Java Champion et leader de deux Java User Groups : le Lyon JUG et Duchess France. Elle fait partie de l'équipe fondatrice de la conférence Mix-IT, mixant Java et Agilité! Elle est également co-fondatrice, avec trois autres développeurs passionnés, de la société Ninja Squad. Dans d'autres sphères, elle est présidente de l'association Avataria, organisatrice d'événements culturels et de FabLab !",
      picture:
        'http://www.duchess-france.org/wp-content/uploads/2013/12/Agnes-Crepet-17-199x300.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.lyonjug.org/',
        },
        {
          name: 'Web',
          url: 'http://www.duchess-france.org/',
        },
        {
          name: 'Web',
          url: 'http://ninja-squad.fr/',
        },
        {
          name: 'Web',
          url: 'http://www.avataria.org/',
        },
      ],
      location: 'Saint Etienne, Lyon',
      sessions: [
        {
          title: 'Introduction au Behaviour-Driven Development (BDD)',
          abstract:
            "L'enjeu de la présentation sera de vous démontrer l'intérêt de l'approche du BDD par la pratique, à travers des exemples d'implémentation avec l'outil open source Cucumber-JVM.",
          tags: [
            'Agilité',
            'Java',
            'Test',
            'Architecture',
            'BDD',
            'Software design',
          ],
          lang: ['fr'],
        },
        {
          title: 'Testons, Testons, Testons',
          abstract:
            "Je vous propose de voir avec vous quelles sont les bonnes pratiques de tests, qu'il s'agisse de tests unitaires ou d'intégration. Nous pouvons voir ensemble plusieurs outils facilitant l'écriture des tests. ",
          tags: [
            'Agilité',
            'Java',
            'Test',
            'Architecture',
            'BDD',
            'Software design',
          ],
          lang: ['fr'],
        },
        {
          title: "L'agilité par la pratique",
          abstract:
            "Vous vous demandez comment démarrer un projet agile? Vous avez déjà pratiqué l'agilité au sein de votre structure mais vous rencontrez quelques problèmes? Je vous propose, retours d'expérience à l'appui, d'échanger avec vous sur ces sujets.",
          tags: [
            'Agilité',
            'Java',
            'Test',
            'Architecture',
            'BDD',
            'Software design',
          ],
          lang: ['fr'],
        },
        {
          title: "Architectures contemporaines des systèmes d'information",
          abstract:
            "Une des grandes difficultés qui émerge dans la mise en place et la maintenance d'un système d'information est la communication entre services et applications. Cloisonnement des différents domaines métier, technologies hétérogènes rarement interopérables, redondance des données sont quelques pièges à éviter. L'objectif de la présentation est de voir quelles solutions d'intégration robustes et souples (SOA, ESB, MDM) permettent d'éviter ces écueils pour assurer la pérennité globale du SI.",
          tags: [
            'Agilité',
            'Java',
            'Test',
            'Architecture',
            'BDD',
            'Software design',
          ],
          lang: ['fr'],
        },
        {
          title: 'Il était une fois… les grands principes du Design !',
          abstract:
            'Il est toujours bon de rappeler quels sont les grands principes du Design à connaître aujourd’hui pour développer, notamment en langage objet. Parmi les ingrédients du menu : Open/Close Principle, Liskow Substitution Principle, Inversion de contrôle… Bon appétit !',
          tags: [
            'Agilité',
            'Java',
            'Test',
            'Architecture',
            'BDD',
            'Software design',
          ],
          lang: ['fr'],
        },
        {
          title: "L'apprentissage continue : les MOOC !",
          abstract:
            "Pamela Fox a marqué les esprits des participants de la conférence Mix-IT lors de la keynote finale de l'édition 2012. Elle a abordé le thème de l'éducation et des solutions innovantes en ingénierie pédagogique. Elle a notamment fait la promotion des MOOC ou « Massive open online course », puisqu’elle a travaillé chez Coursera et aujourd’hui chez Khan Academy, les plateformes leaders mondiales du domaine. Partons à la découverte de ces nouveaux outils qui mettent à disposition des milliers de cours en ligne en accès libre et gratuit, sur une multitude de sujets.",
          tags: [
            'Agilité',
            'Java',
            'Test',
            'Architecture',
            'BDD',
            'Software design',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Saint Etienne'],
      contacts: {
        twitter: 'agnes_crepet',
        mail: 'agnes@ninja-squad.com',
      },
    },
    {
      since: '2013-12-19',
      name: 'Christophe Grand',
      bio:
        "Clojuriste de la première heure (début 2008) et co-auteur de Clojure Programming (O'Reilly). Passionné par les API REST hypermedia. Dev indépendant et formateur au sein de LambdaNext.",
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://clj-me.cgrand.net/',
        },
        {
          name: 'Web',
          url: 'http://lambdanext.eu/',
        },
      ],
      location: 'Saint Etienne, Lyon',
      sessions: [
        {
          title: 'Introduction à la programmation orientée données.',
          abstract:
            'Le style de programmation proposé par Clojure est orienté données avant d\'être fonctionnel, et ça simplifie tout en autorisant des architectures "low ceremony". Débarassez-vous de vos idées reçues !',
          tags: [
            'Clojure',
            'FP-Style',
            'Programmation fonctionnelle',
            'Software design',
            'Hypermedia',
            'REST',
            'API',
          ],
          lang: ['fr'],
        },
        {
          title: "REST : l'incompris",
          abstract:
            "REST n'a jamais été à propos de la méthode HTTP à utiliser ou de l'art de définir une hiérarchies d'URLs. REST est une puissante technique d'intégration distribuée. Apprenez à refactorer votre SI avec une vraie API REST, c'est à dire une API hypermedia !",
          tags: [
            'Clojure',
            'FP-Style',
            'Programmation fonctionnelle',
            'Software design',
            'Hypermedia',
            'REST',
            'API',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Saint Etienne'],
      contacts: {
        twitter: 'cgrand',
        mail: 'christophe@cgrand.net',
      },
    },
    {
      since: '2014-01-09',
      name: 'Florent Pellet',
      bio: 'Software Craftsman Freelance. DDD Addict. Membre de DevLyon.',
      picture:
        'http://www.gravatar.com/userimage/92246787/0f806ff65e52d1704930182e4f6c2c3f?size=250',
      websites: [
        {
          name: 'Web',
          url: 'http://www.wittycoding.com/',
        },
        {
          name: 'Web',
          url: 'http://www.florentpellet.fr/',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Event Storming: comprendre le métier autrement',
          abstract:
            'Une méthode efficace et rapide pour explorer votre domaine métier simplement.',
          tags: [
            'DDD',
            'Domain Driven Design',
            'Event Sourcing',
            'CQRS',
            'Event Storming',
            'CodingDojo',
            'Knockout.js',
            'MVVM',
            'SignalR',
            'Asp.net',
            '.NET',
            'SPA',
            'Web',
          ],
          lang: ['fr'],
        },
        {
          title: 'DDD: Agilité par le code grâce à CQRS et EventSourcing',
          abstract:
            "Pas de bullshit, vous pourrez voir un exemple d'implémentation de CQRS et EventSourcing, sans framework et sans magie, en live coding.",
          tags: [
            'DDD',
            'Domain Driven Design',
            'Event Sourcing',
            'CQRS',
            'Event Storming',
            'CodingDojo',
            'Knockout.js',
            'MVVM',
            'SignalR',
            'Asp.net',
            '.NET',
            'SPA',
            'Web',
          ],
          lang: ['fr'],
        },
        {
          title: 'Coding Dojo à la demande',
          abstract:
            'Envie de découvrir des nouvelles méthodes de travail ou implémenter les coding dojos dans votre entreprise ? Je peux en animer un, sur un sujet à la demande (SOLID, TDD ...). Prévoir un ordinateur par groupe de 2 personnes.',
          tags: [
            'DDD',
            'Domain Driven Design',
            'Event Sourcing',
            'CQRS',
            'Event Storming',
            'CodingDojo',
            'Knockout.js',
            'MVVM',
            'SignalR',
            'Asp.net',
            '.NET',
            'SPA',
            'Web',
          ],
          lang: ['fr'],
        },
        {
          title: 'Real-time web en .NET avec SignalR',
          abstract:
            'Vous trouvez que réaliser une application web temps réel, comme Google Documents ou des jeux en ligne (y compris IE) c’est compliqué ? Alors invitez-moi pour vous faire découvrir cette fabuleuse library open source.',
          tags: [
            'DDD',
            'Domain Driven Design',
            'Event Sourcing',
            'CQRS',
            'Event Storming',
            'CodingDojo',
            'Knockout.js',
            'MVVM',
            'SignalR',
            'Asp.net',
            '.NET',
            'SPA',
            'Web',
          ],
          lang: ['fr'],
        },
        {
          title: "Knockout.js, ou la rencontre d'MVVM et du Web",
          abstract:
            "Découverte du Single Page Application avec Knockout.js. C’est l'occasion de découvrir des méthodes pour structurer vos applications Web, et améliorer l'expérience utilisateur de vos internautes, ainsi que la maintenabilité de votre application.",
          tags: [
            'DDD',
            'Domain Driven Design',
            'Event Sourcing',
            'CQRS',
            'Event Storming',
            'CodingDojo',
            'Knockout.js',
            'MVVM',
            'SignalR',
            'Asp.net',
            '.NET',
            'SPA',
            'Web',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'florentpellet',
        mail: 'florent.pellet+bbl@gmail.com',
      },
    },
    {
      since: '2014-01-11',
      name: 'Thomas Pierrain',
      bio:
        "Agile de père en fils depuis 1905... 'Pragmatic architect' travaillant sur des problématiques low latency pour une grosse banque depuis plus de 8 ans maintenant (après 7 années passées à apprendre mon métier les pieds dans le web). Créateur de la librairie open source .NET NFluent, je suis un insatiable geek communiquant qui adore coder et partager ma passion au sein de différentes équipes et communautés (ex: DDD Paris, Paris Software Craftsmanship & Alt.NET France).",
      picture:
        'https://fr.gravatar.com/userimage/42372930/c633abb2c2155a61e5c62a475185dcf6.png?size=200',
      websites: [
        {
          name: 'Web',
          url:
            'http://tpierrain.blogspot.fr/2013/04/the-pragmatic-architect.html',
        },
        {
          name: 'Web',
          url: 'http://www.n-fluent.net/',
        },
      ],
      location:
        "Paris, La Défense et à proximité (accepte aussi la Tour d'Argent)",
      sessions: [
        {
          title: 'As if you meant it',
          abstract:
            "Présentation de NFluent: l'outil .NET qu'il vous manquait pour booster le TDD dans votre équipe. Diapos et live coding inside.",
          tags: ['DDD', 'TDD', 'Fluent', '.NET', 'Test', 'Reactive'],
          lang: ['fr'],
        },
        {
          title: 'Haut débit et faible latence',
          abstract:
            'Programmation réactive: cas concret de conception via un système de trading électronique.',
          tags: ['DDD', 'TDD', 'Fluent', '.NET', 'Test', 'Reactive'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'tpierrain',
        mail: 'thomas@pierrain.net',
      },
    },
    {
      since: '2014-01-31',
      name: 'Philippe Prados',
      bio:
        'Architecte Senior, auteur de plus de 100 articles publiés dans GNU Linux Mag, conférencier à Devoxx, Paris JUG, PAUG, SSTIC, Solution Linux, GDG, DroidCon, etc.',
      picture:
        'http://www.prados.fr/_/rsrc/1351608832371/cv/MOI%20300x297.png?height=198&width=200',
      websites: [
        {
          name: 'Web',
          url: 'http://www.prados.fr',
        },
        {
          name: 'Google+',
          url: 'https://www.google.com/+PhilippePrados',
        },
        {
          name: 'Slideshare',
          url: 'http://fr.slideshare.net/pprados/presentations',
        },
        {
          name: 'LinkedIn',
          url: 'http://www.linkedin.com/in/pprados/fr',
        },
      ],
      location: 'Paris, Banlieue ouest',
      sessions: [
        {
          title: 'Architecture Android',
          abstract:
            "Comprendre comment est conçu le système d'exploitation mobile de Google. Qu'elles sont les faiblesses et avantages par rapport aux OS alternatifs. Cette conférence s'adresse à tous.",
          tags: ['Architecture', 'Scala', 'Java', 'Android', 'Securité'],
          lang: ['fr'],
        },
        {
          title: 'Montez une forteresse dans Android !',
          abstract:
            "Comment protéger un secret sous Android ? Comment le cacher dans les arcanes non publiques ? Comment distribuer en masse des certificats numériques client pour une authentification forte de votre intranet mobile ? Des réponses concrètes et techniques sur les arcanes de l'OS.",
          tags: ['Architecture', 'Scala', 'Java', 'Android', 'Securité'],
          lang: ['fr'],
        },
        {
          title: 'La mort prochaine du GC ?',
          abstract:
            'Des .signaux faibles : Fin de la loi de Moore en 2018. NECESSITE de l’algorithme G1.Ralentissement des programmes en 64 bits par rapport à 32 bits. De nouveaux frameworks pour gérer la mémoire hors heap. Émergence du Big-Data et du Database in Memory. Apple déprécie le GC d’Objective-C. Comment retarder l’échéance ? Les solutions alternatives ? Sélectionnez maintenant les technos de demain.',
          tags: ['Architecture', 'Scala', 'Java', 'Android', 'Securité'],
          lang: ['fr'],
        },
        {
          title:
            'Le secret de nouvelles architectures: Code Réactif et persistance versionnée.',
          abstract:
            "Comment améliorer les performances de votre SI pour encaisser la multiplication par 10 de vos hits, suite à la publication d'une API pour votre application mobile ? Comment améliorer les modèles actuels d'architecture ? Quels sont les nouveaux patterns de développement ? Pourquoi sont-il maintenant proposé par les langages et frameworks ? Comment les exploiter ? Comment gérer la concurrence, les bases de données avec plus d’efficacité ? Inspirons nous des meilleurs, remettons le développement à l'honneur.",
          tags: ['Architecture', 'Scala', 'Java', 'Android', 'Securité'],
          lang: ['fr'],
        },
        {
          title: 'Multithread sans thread',
          abstract:
            "Comment les langages de développement et les compilateurs évoluent pour intégrer l'approche réactive ? Quelles sont les techniques mises en place lors de la génération de codes ? Avec quel impact ? Que savoir pour en tirer parti ? Nous allons comparer les approches de différents langages : Java, Net, Javascript, Scala, Python, etc... Entre le code tel que je l'écris et le code que le compilateur produit, il y a un écart à maîtriser.",
          tags: ['Architecture', 'Scala', 'Java', 'Android', 'Securité'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'pprados',
        mail: 'brownbaglunch@prados',
      },
    },
    {
      since: '2014-01-31',
      name: 'Guillaume Bitaudeau',
      bio: 'Consultant Java / iOs / Cloud',
      picture: 'img/baggers/photo_gbi.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://gbitaudeau.fr',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/gbitaudeau/',
        },
        {
          name: 'Hopwork',
          url: 'http://hopwork.com/profile/52ea1dd64168100d16a15add',
        },
      ],
      location: 'Plaisir (78), je me déplace de Paris à Rambouillet',
      sessions: [
        {
          title: 'Introduction à iOs',
          abstract:
            'Envie de faire une application iOs, mais vous ne savez pas par quel bout commencer ? Gagnez tout simplement du temps grâce à un repas !',
          tags: ['Java', 'Agile', 'iOS', 'Spring', 'Cloud', 'Adobe AIR'],
          lang: ['fr'],
        },
        {
          title: 'Faire des transitions entre vues en iOs',
          abstract:
            'Découvrez comment depuis iOs 7.0, on peut faire rapidement de magnifiques transitions personnalisées pour un effet Waouh.',
          tags: ['Java', 'Agile', 'iOS', 'Spring', 'Cloud', 'Adobe AIR'],
          lang: ['fr'],
        },
        {
          title: 'Questions / réponses sur les achats intégrés en iOs',
          abstract:
            'Par exemple : comment partager des achats de type "consommables" avec iCloud ?',
          tags: ['Java', 'Agile', 'iOS', 'Spring', 'Cloud', 'Adobe AIR'],
          lang: ['fr'],
        },
        {
          title: 'Découvrez les mockups',
          abstract:
            'Avec Balsamiq Mockups, on verra comment un dessin remplace avantageusement des pages de spécifications !',
          tags: ['Java', 'Agile', 'iOS', 'Spring', 'Cloud', 'Adobe AIR'],
          lang: ['fr'],
        },
        {
          title: 'Discussions informelles',
          abstract:
            "Des retours d'expériences, discuter d'architecture, de cloud, de problèmes de performance, de  design, bref je suis ouvert à toute proposition parce que je sais qu'un point de vue extérieur ça fait du bien des fois :o)",
          tags: ['Java', 'Agile', 'iOS', 'Spring', 'Cloud', 'Adobe AIR'],
          lang: ['fr'],
        },
      ],
      cities: ['Versailles'],
      contacts: {
        twitter: 'gbitaudeau',
        mail: 'guillaume.bitaudeau@gmail.com',
      },
    },
    {
      since: '2014-02-12',
      name: 'Mathieu Parisot',
      bio: 'Développeur Java&Web indépendant',
      picture:
        'http://matparisot.fr/content/images/2014/12/matparisot_square_min.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://matparisot.fr/author/mathieu/',
        },
        {
          name: 'Web',
          url: 'http://matparisot.fr',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Découverte du nouveau JavaScript : ES2015/ES6',
          abstract:
            "La nouvelle version de JavaScript est maintenant validée, il est donc temps de découvrir ce que l'avenir proche nous réserve et comment le mettre en place dès maintenant dans vos projets. Au programme : classes, generators, promesses, destructuring, modules et plein de choses qui vont vous faciliter le quotidien.",
          tags: [
            'Responsive',
            'HTML5',
            'CSS3',
            'JavaScript',
            'babel',
            'postcss',
            'es6',
            'es2015',
          ],
          lang: ['fr'],
        },
        {
          title: 'Responsive Web Design',
          abstract:
            "3 présentations possibles : introduction au RWD, l'impact du RWD sur vos équipes projet et un tour d'horizon des techniques nécessaires à la réalisation d'un site.",
          tags: [
            'Responsive',
            'HTML5',
            'CSS3',
            'JavaScript',
            'babel',
            'postcss',
            'es6',
            'es2015',
          ],
          lang: ['fr'],
        },
        {
          title: 'Quoi de neuf dans le web ?',
          abstract:
            "Un tour d'horizon de toutes les nouveautés HTML5 et CSS3 pour découvrir des normes souvent méconnues (flexbox, webrtc, web components, css shapes, etc.)",
          tags: [
            'Responsive',
            'HTML5',
            'CSS3',
            'JavaScript',
            'babel',
            'postcss',
            'es6',
            'es2015',
          ],
          lang: ['fr'],
        },
        {
          title: 'Révolutionnez vos Layout avec CSS3',
          abstract:
            'Un focus sur les normes CSS3 permettant de faire des mises en page avancées : FlexBoxx, CSSGrid, CSSShape, CSS regions, columns, etc.',
          tags: [
            'Responsive',
            'HTML5',
            'CSS3',
            'JavaScript',
            'babel',
            'postcss',
            'es6',
            'es2015',
          ],
          lang: ['fr'],
        },
        {
          title: 'Développons dans le futur dès maintenant',
          abstract:
            'Découvrez comment utiliser les standards plus ou moins expérimentaux du web dès maintenant avec Babel, PostCss, des polyfill et webpack.',
          tags: [
            'Responsive',
            'HTML5',
            'CSS3',
            'JavaScript',
            'babel',
            'postcss',
            'es6',
            'es2015',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'matparisot',
        mail: 'mathieu.parisot+bbl@gmail.com',
      },
    },
    {
      since: '2014-02-14',
      name: 'Boris Schapira',
      bio: 'Strategic Consultant - Contentsquare',
      picture: '//avatars.schapira.dev/boris/2023-peep.png',
      websites: [
        {
          name: 'Web',
          url: 'https://boris.schapira.dev/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/borisschapira/',
        },
      ],
      location: 'Périgueux',
      sessions: [
        {
          title: 'Mon Site Web est un Restaurant',
          abstract:
            'MPA, SPA, statique, dynamique, cache, services tiers… tout ça est bien compliqué, et on s’y perd. Et si, à la place, on utilisait une métaphore filée pour bien comprendre l’état du Web aujourd’hui ?',
          tags: ['Web'],
          lang: ['fr'],
        },
        {
          title: 'Syndrôme d’imposture, l’arbre qui cache la forêt',
          abstract:
            "Si vous êtes comme moi, vous avez vu au fil des années de très nombreuses conférences sur le syndrome de l’imposteur qu'on décrit généralement comme un mélange d’anxiété et de manque de confiance en soi qui finit par vous donner l’impression que vous êtes illégitime dans votre travail. La détresse des personnes concernées est grande et il est très pertinent que nous y répondions au niveau individuel, en apportant de l'aide et du soutien. Mais est-ce qu'il ne serait pas intéressant de prendre un peu de recul, et d'analyser ce qui, au niveau collectif, favorise l'apparition de tels doutes ? Est-ce qu’il n’y aurait pas quelque chose de structurel et de culturel dans une telle prévalence de comportement, et comment pouvons-nous le corriger ? Dans cette intervention, je parlerai de psychologie, mais aussi (et surtout) de l'organisation de notre marché, de financement, de carrières, de formation initiale et continue, de rémunération, de culture et de diversité.",
          tags: ['Code du Travail', 'Formation Continue'],
          lang: ['fr'],
        },
        {
          title: 'La Performance Web, pourquoi et comment ?',
          abstract:
            "Avec le déplacement d'un certain nombre d'usages vers des périphérique nomades (téléphones, montres, appareils connectés), la fluidité d'utilisation devient une problématique critique. La performance Web est une des composantes de cette fluidité. Nous verrons ensemble comment l'optimiser. Ceci étant, suivant l’organisation et la culture de votre entreprise, conserver ce gain dans le temps peut être délicat et tenir davantage de la conduite du changement que de l’identification et l'implémentation d'optimisations.",
          tags: ['Gestion de projet', 'Performance Web'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'borisschapira',
        mail: 'boris@schapira.dev',
      },
    },
    {
      since: '2014-02-17',
      name: 'Cyril Gravelier',
      bio: 'Développeur/Concepteur web et mobile passionné',
      picture:
        'http://www.gravatar.com/avatar/2f9e679e419b245e05e6f7bf6606499a.png',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/magiccyil/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Introduction à Drupal',
          abstract:
            "Drupal c'est quoi ? Comment faire un site avec ce CMS ? Réalisation d'un site sans une ligne de code, simplement en utilisant le backoffice et des modules communautaires (Views, Webform, Panels, etc.)",
          tags: ['PHP', 'Drupal'],
          lang: ['fr'],
        },
        {
          title: "Drupal 8 qu'est ce qui change ?",
          abstract:
            "Quels sont les changements apportés par cette nouvelle version de Drupal, d'un point de vue fonctionnel, mais aussi pour le développement (faut-il connaitre Symfony pour faire du dev D8 ?)",
          tags: ['PHP', 'Drupal'],
          lang: ['fr'],
        },
        {
          title: 'Mon premier module Drupal',
          abstract:
            "Introduction au développement d'un module Drupal, en utilisant quelques hook.",
          tags: ['PHP', 'Drupal'],
          lang: ['fr'],
        },
        {
          title: "Création d'un theme Drupal",
          abstract:
            "Peut-on tout intégrer dans Drupal ? Quelles sont les bonnes pratiques pour la réalisation d'un theme Drupal ?",
          tags: ['PHP', 'Drupal'],
          lang: ['fr'],
        },
        {
          title: 'Drupal',
          abstract:
            'Après avoir rencontré de nombreuses problématiques avec Drupal, je peux aborder une grande variété de sujets autour de Drupal.',
          tags: ['PHP', 'Drupal'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'magiccyril',
        mail: 'cyril@18ruedivona.eu',
      },
    },
    {
      since: '2014-02-27',
      name: 'Duyhai Doan',
      bio:
        'Duy Hai est évangéliste technique pour Datastax, l’entreprise commerciale derrière Apache Cassandra. Il partage son temps entre donner des présentations/meetups/talks sur Cassandra, développer sur des projets open-source pour la communauté et aider les projets utilisant Cassandra. Avant Datastax, Duy Hai a été développeur freelance Java/Cassandra',
      picture:
        'http://www.gravatar.com/avatar/ffa96040bb4211cad1c66f385d8cb77b.png',
      websites: [
        {
          name: 'Web',
          url: 'http://achilles.archinnov.info',
        },
      ],
      location: 'Régions francophones',
      sessions: [
        {
          title: 'Introduction à Cassandra',
          abstract:
            'Vous avez entendu parler de <strong>Cassandra</strong>, vous avez toujours voulu vous y mettre sans jamais avoir eu le temps ni su comment démarrer ? Pendant cette session, nous allons découvrir <strong>Cassandra</strong> avec des petits exercices sympas et ludiques pour vous mettre la main à la pâte.',
          tags: ['Cassandra'],
          lang: ['fr'],
        },
        {
          title: 'La modélisation facile avec Cassandra',
          abstract:
            "L'un des aspects de <strong>Cassandra</strong> qui rebute pas mal de débutants, c'est la modélisation.<br/> Mais depuis l'introduction du language <strong>CQL3</strong>, c'est terminé. Dans cette session nous verrons comment modéliser efficacement vos données et vos tables en <strong>CQL3</strong>, les pièges à éviter, les bonnes pratiques et les astuces pour aller plus loin avec <strong>Cassandra</strong>",
          tags: ['Cassandra'],
          lang: ['fr'],
        },
        {
          title: 'Prototypage rapide en Cassandra avec Achilles',
          abstract:
            "Avec l'arrivée du language de requêtage <strong>CQL3</strong>, <strong>Cassandra</strong> a rendu son modèle de développement plus accessible aux développeurs.<br/><strong>Achilles</strong> pousse la logique de productivité plus loin en proposant un object mapper léger par dessus <strong>CQL3</strong> ainsi qu'une multitude d'outils pour rendre la vie du développeur plus simple: data mapping avancé, DSL pour les requêtes, JUnit rule pour démarrer un Cassandra embarqué de test, génération automatique du schéma, tracing des requêtes CQL3 dans les logs...<br/>Venez découvrir <strong>Achilles</strong> en action, nous ferons un petit prototype en full TDD en live avec <strong>Achilles</strong>",
          tags: ['Cassandra'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'doanduyhai',
        mail: 'doanduyhai@gmail.com',
      },
    },
    {
      since: '2014-03-28',
      name: 'Youri Bonnaffé',
      bio:
        'Développeur passionné, je m’attache particulièrement à être le plus productif possible. L’automatisation à travers les tests, le build, l’intégration continue et les livraisons m’intéresse particulièrement et je serais ravi de partager cette passion à travers des présentations, retours d’expériences et échanges.',
      picture:
        'http://www.gravatar.com/avatar/ae929ea94c27f7836e3c1cac2e961b2b.pn?size=200g',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/youribonnaffe',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/youribonnaffe',
        },
      ],
      location: 'Sophia-Antipolis',
      sessions: [
        {
          title: 'Gradle: un outil de build puissant',
          abstract:
            "Introduction à Gradle ou Retour d'expérience d'une migration de Ant vers Gradle (et pourquoi on a mis de côté Maven).",
          tags: ['Gradle', 'Groovy', 'Build', 'Automatisation'],
          lang: ['fr'],
        },
      ],
      cities: ['Sophia-Antipolis'],
      contacts: {
        twitter: 'youribm',
        mail: 'youribm@gmail.com',
      },
    },
    {
      since: '2014-03-29',
      name: 'Guillaume Collic',
      bio:
        "Développeur agiliste passionné. Impliqué dans plusieurs initiatives de l'ouest autour du code ou de l'agilité.",
      picture:
        'http://www.gravatar.com/avatar/bb477281f4de9e113b37d74c949d6ee5?s=512',
      websites: [
        {
          name: 'Web',
          url: 'http://guillaumecollic.com/',
        },
      ],
      location: 'Rennes, Nantes, Saint Malo, Vannes, ...',
      sessions: [
        {
          title: 'Intérêt de Git en entreprise',
          abstract:
            'On parle de plus en plus des gestionnaires de version « distribués » (DVCS), Git en particulier. Pourquoi cet engouement, en quoi sont-ils intéréssants en entreprise ?',
          tags: ['Agile', 'Kanban', 'ALM', 'Git', 'TDD', 'Coding Dojo'],
          lang: ['fr'],
        },
        {
          title: 'Introduction au TDD par la pratique',
          abstract:
            'Mis en pratique du TDD sur un petit exercice collectif, qui peut être isolé, ou le lancement de Coding Dojo réguliers. ',
          tags: ['Agile', 'Kanban', 'ALM', 'Git', 'TDD', 'Coding Dojo'],
          lang: ['fr'],
        },
        {
          title: "Tour d'horizon des méthodes agiles",
          abstract:
            "Pourquoi les méthodes agiles ? Que partagent-elles ? Approfondissement de 3 d'entre elles : Scrum, eXtreme Programming, et Kanban",
          tags: ['Agile', 'Kanban', 'ALM', 'Git', 'TDD', 'Coding Dojo'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'gcollic',
        mail: 'gcollic@gmail.com',
      },
    },
    {
      since: '2014-03-31',
      name: 'Maxime Bonnet',
      bio:
        "Coach Agile, j'accompagne des équipes de toutes tailles dans leur chemin vers l'agilité. Très joueur, je connais bien les Innovation Games ainsi que Lego Serious Play. Membre du réseau Happy Melly, j'aime partagé les pratiques de management 3.0 ",
      picture:
        'http://www.gravatar.com/avatar/03314fcc147b87324941c0c6329d444b.png',
      location: 'Lyon',
      sessions: [
        {
          title: 'Jeux sérieux avec Innovation Games',
          abstract:
            "Peut-on jouer en entreprise ? La réponse fût longtemps non, mais de nouveaux outils sont arrivés pour élargir les horizons, augmenter la créativité, permettre d'innover. Les jeux sérieux sont une réponse pertinente à la question puis créer autrement.",
          tags: [
            'Agilité',
            'Serious Game',
            'Developpement personnel',
            'Management 3.0',
            'Coaching',
          ],
          lang: ['fr'],
        },
        {
          title: 'Comprendre et Utiliser le MBTI',
          abstract:
            'Le Myers Briggs Type Indicator (MBTI) est un outils dans la palette des coachs, managers ou toutes personnes souhaitant comprendre ses relations aux autres. Simple et facilement utiliseable au quotidien, le MBTI permet de mieux comprendre et dialoguer avec ses interlocuteurs',
          tags: [
            'Agilité',
            'Serious Game',
            'Developpement personnel',
            'Management 3.0',
            'Coaching',
          ],
          lang: ['fr'],
        },
        {
          title: 'Utiliser Lego Serious Play pour animer votre Brainstorming',
          abstract:
            "Quand l'un des plus grands fabriquants de jouets décide d'utiliser sa production pour faciliter ses réunions, cela donne Lego Serious Play (http://www.seriousplay.com). Le jeu pour stimuler la créativité, ce n'est pas une idée nouvelle, mais LSP propose une dynamique très particulière basé sur le toucher et la manipulation. Les résultats sont étonnant et l'outil très puissant. Pour cette session je vous propose une mise en pratique rapide d'un atelier type de Lego Serious Play. (cette session est limité à 6 personnes)",
          tags: [
            'Agilité',
            'Serious Game',
            'Developpement personnel',
            'Management 3.0',
            'Coaching',
          ],
          lang: ['fr'],
        },
        {
          title: "J'upgrade mon style de management avec Management 3.0",
          abstract:
            "Au sein de nos organisations, la conception traditionnelle du management a montré ses limites. L'agilité pousse les managers vers de nouvelles fonctions de support plus que des fonctions de directions. De la délégation, aux remerciements, de l'organisation du travail au feedback, tour d'horizon de ces nouvelles pratiques.",
          tags: [
            'Agilité',
            'Serious Game',
            'Developpement personnel',
            'Management 3.0',
            'Coaching',
          ],
          lang: ['fr'],
        },
        {
          title: "J'anime une rétrospective productive",
          abstract:
            "La rétrospective est un exercice important dans la démarche agile, elle permet la mise en oeuvre de la boucle d'amélioration continue. Cette cérémonie est souvent mal comprise, mal animée, ce qui génère de la frustration pour l'équipe, des actions peu intéressante et un abandon à plus ou moins court terme. Cette session propose de revenir sur les bases de la facilitation et de faire un tour d'horizon de quelques serious games à mettre en oeuvre.",
          tags: [
            'Agilité',
            'Serious Game',
            'Developpement personnel',
            'Management 3.0',
            'Coaching',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'maximebonnet',
        mail: 'maxime@bonnet.tel',
      },
    },
    {
      since: '2014-04-04',
      name: 'Dridi Boukelmoune',
      bio: 'Développeur, formateur, Editor InfoQ FR et contributeur Fedora.',
      picture: 'https://avatars1.githubusercontent.com/u/891744',
      websites: [
        {
          name: 'Web',
          url: 'http://www.zenika.com/experts/Dridi_Boukelmoune.html',
        },
        {
          name: 'InfoQ',
          url: 'http://www.infoq.com/fr/author/Dridi-Boukelmoune',
        },
        {
          name: 'Web',
          url: 'https://admin.fedoraproject.org/pkgdb/users/packages/dridi',
        },
      ],
      location: 'Paris ou proche',
      sessions: [
        {
          title: 'Le tour de Varnish en 80 jours',
          abstract:
            "Dans cette présentation, nous allons littéralement faire le tour du monde pour découvrir Varnish. Architecture moderne et réactive, ce cache HTTP offre un DSL élégant pour la politique de cache, et un ensemble d'outils simples pour l'administrer.",
          tags: ['Varnish', 'Cache', 'HTTP', 'Performance'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'dboukelmoune',
        mail: 'dridi.boukelmoune@gmail.com',
      },
    },
    {
      since: '2014-04-05',
      name: 'Cyril Lakech',
      bio:
        "Développeur, Tech Leader, organisateur du Ch'ti JUG et de la conquête du monde par les développeurs!",
      picture:
        'https://s.gravatar.com/avatar/21843b4b8796bb4d73cbe48368eb5575?s=256',
      websites: [
        {
          name: 'Web',
          url: 'http://chtijug.org/',
        },
        {
          name: 'Web',
          url: 'https://blog.axawebcenter.fr/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title:
            '10 méthodes pour rendre heureux les développeurs, la 7e va vous étonner !',
          abstract:
            "Il est impératif d'attirer les meilleurs développeurs, mais également de savoir les garder au sein de son entreprise. Si cela est simple à dire, réussir à le faire correctement et à maintenir un tel contexte attractif n'est pas chose facile. Voici 10 choses qu'il convient de mettre en place chez vous pour rendre vos développeurs heureux.",
          tags: ['Développeur', 'Recrutement', 'Carrière'],
          lang: ['fr'],
        },
        {
          title: 'La technologie conduite par les communautés à l’échelle',
          abstract:
            'Les technologies pilotées par les communautés. Avec l’exemple de la DSI de 400+ développeurs chez AXA France organisée en communautés et dont j’ai à charge d’animer.',
          tags: ['Développeur', 'Technologie', 'Radar', 'Communauté'],
          lang: ['fr'],
        },
        {
          title: 'Un zeste de Nest pour réhausser le goût du back-end JS',
          abstract:
            'Nous connaissons tous un développeur frontend qui est devenu plus efficace grâce à des solutions comme Angular, Vue ou React. On connait également des développeurs backend qui développent de manière architecturée grâce à Spring Boot pour Java ou ASP.NET Core pour .NET Core. Et côté NodeJS ? 99% utilisent Express, qui est loin d’être un équivalent… Pourtant il existe NestJS qui propose des facilitant pour créer des APIs REST ou GraphQL au top! (avec @lauthieb)',
          tags: ['NodeJS', 'TypeScript', 'Angular', 'API'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'cyril_lakech',
        mail: 'cyril.lakech@gmail.com',
      },
    },
    {
      since: '2014-04-09',
      name: 'Grégoire Hubert',
      bio:
        'Utilisateur de PHP & Postgresql depuis le XXème siècle. Tour à tour consultant, développeur, formateur, auteur de Pomm, il crée PragmaFabrik en 2013 pour proposer son expertise autour de la base de données.',
      picture:
        'http://gravatar.com/avatar/f32f06ab7d033c171c5c0ea1e1c1c00e?s=200',
      websites: [
        {
          name: 'Web',
          url: 'http://www.pragmafabrik.fr',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/pub/gr%C3%A9goire-hubert/1b/333/32',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/chanmix51',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            'Utiliser la puissance de Postgresql dans vos développements PHP',
          abstract:
            'Comment utiliser les types, la messagerie asynchrone, le SQL de Postgres avec Pomm.',
          tags: ['PHP', 'PostgreSQL', 'Silex', 'Pomm', 'SQL'],
          lang: ['fr'],
        },
        {
          title: 'Le SQL de Postgres au service de votre métier',
          abstract:
            "Nous verrons ce qu'ont en commun SQL et les langages fonctionnels, pourquoi SQL avec plus de 30 ans d'expérience au service des développeurs est votre meilleur ami.",
          tags: ['PHP', 'PostgreSQL', 'Silex', 'Pomm', 'SQL'],
          lang: ['fr'],
        },
        {
          title: 'Silex : le µ-framework à tout faire',
          abstract:
            'Silex, un petit framework monté sur les épaules de Symony 2.',
          tags: ['PHP', 'PostgreSQL', 'Silex', 'Pomm', 'SQL'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Nantes'],
      contacts: {
        twitter: 'chanmix51',
        mail: 'gregoire.hubert@pragmafabrik.com',
      },
    },
    {
      since: '2014-04-16',
      name: 'Rodolphe Quiédeville',
      bio:
        'Artisan Logiciel Libre, contributeur Tsung, expert en performance des SI(G), contribue également aux données et aux outils OpenStreetMap.',
      picture:
        'http://www.gravatar.com/avatar/95a63eeb28d5e8237cfb8d6c75798ef1.png',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.rodolphe.quiedeville.org',
        },
        {
          name: 'LinkedIn',
          url: 'http://rodolphe.quiedeville.org/linkedin',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Tsung de 1 à 1 million',
          abstract:
            "Validez vos systèmes d'informations et restez serein face à la montée en charge ou l'effet Slashdot.",
          tags: ['Tsung', 'Test', 'Performance', 'SIG', 'OSM'],
          lang: ['fr'],
        },
        {
          title: 'Libérez aussi vos données géographiques',
          abstract:
            "OpenStreetMap est devenu aujourd'hui un acteur fiable tant sur la donnée géographique que le routage, découvrez comment l'intégrer facilement dans votre SI.",
          tags: ['Tsung', 'Test', 'Performance', 'SIG', 'OSM'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Lille'],
      contacts: {
        twitter: 'rodoq',
        mail: 'rodolphe@quiedeville.org',
      },
    },
    {
      since: '2014-04-20',
      name: 'Mathieu Hausherr',
      bio: 'Développeur mobile chez Virtuo',
      picture:
        'http://www.gravatar.com/avatar/ddc294f25a19a5c979deabbac498e020.png?size=256',
      websites: [
        {
          name: 'Web',
          url: 'http://www.mathieu-hausherr.com',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            "Mode offline : mon application mobile fonctionne au nieau -5 d'un parking",
          abstract:
            'Quelles sont les stratégies pour implémenter rapidement et efficacement un mode offline dans une app native.',
          tags: ['Mobile', 'iOS', 'Android'],
          lang: ['fr'],
        },
        {
          title: "Machine learning et identification d'images sur mobile",
          abstract:
            "Comment j'ai entrainé un modèle tensorflow sur un dataset de 14000 images pour détecter sur un mobile quelle partie d'une voiture est endomagé lors d'un état des lieux sur mobile",
          tags: ['Tensorflow', 'iOS', 'Android'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'mhausherr',
        mail: 'mhausherr@gmail.com',
      },
    },
    {
      since: '2014-04-20',
      name: 'Xavier Maurin',
      bio:
        'CEO de KStrategy, consultant UX (User eXperience), Co-Fondateur de UX Bordeaux',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.kstrategy.fr',
        },
        {
          name: 'Web',
          url: 'http://www.ux-bordeaux.com',
        },
        {
          name: 'Web',
          url: 'http://www.uxchallenges.com',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'UX et stratégies',
          abstract:
            "L'Expérience Utilisateur s'impose aujourd'hui comme une dimension clé des projets technologiques et d'innovation. J'interviens comme consultant auprès de grands groupes, ETI, PME et start-ups et les accompagne dans la mise en oeuvre d'une démarche UX adaptée à leur savoire-faire et leur culture. En m'appuyant sur cette expérience acquise, je pourrai introduire la thématique de l'UX, montrer les différentes méthodes et outils permettant d'intégrer efficacement l'UX au coeur de l'organisation et des process de conception.",
          tags: [
            'Expérience utilisateur',
            'Expérience client',
            'Design',
            'Conception',
            'Ergonomie',
          ],
          lang: ['fr'],
        },
        {
          title: 'UX Designer : un nouveau métier',
          abstract:
            "Plus que jamais, les attentes des clients sont focalisées sur leur expérience d’utilisateur. Les applications métier aujourd’hui ne peuvent plus se réduire à délivrer uniquement des fonctionnalités, aussi riches et complètes soient-elles. La forte adoption des nouveaux usages (interfaces tactiles, adoption croissante du cloud, etc.) oblige les éditeurs de logiciel à investir massivement dans la notion d’Expérience Utilisateur, sous peine de subir un abandon progressif des produits qui ont fait pourtant leur succès pendant de nombreuses années. Il devient alors indispensable d'intégrer l'UX au coeur de la conception produit et de positionner le profil 'UX Designer' dans les équipes. Je mettrai en lumière la réalité de ce métier aujourd'hui, à la croisée de différentes disciplines (conception d'interface, ergonomie, design, marketing) et m'attacherai à répondre aux questions suivantes  : Comment positionner ce nouveau métier dans l'entreprise ?  Quels sont les profils et formations existantes ? Comment intéragit-il avec les autres fonctions ? Quelles sont les conditions de réussite de son intégration ? Quels outils et méthodes utilise-t-il ? etc.",
          tags: [
            'Expérience utilisateur',
            'Expérience client',
            'Design',
            'Conception',
            'Ergonomie',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'k_strategy',
        mail: 'x.maurin@kstrategy.fr',
      },
    },
    {
      since: '2014-04-21',
      name: 'Cyrille Dupuydauby',
      bio:
        "Je vis l'informatique avec passion depuis plus de 30 ans; très expérimenté dans de nombreux domaines, j'ai concentré mes efforts récents sur les enjeux d'architectures parallèles/concurrentes, fort débit, faible latence et haute disponibilité qui jalonnent les SIs de la finance. Agiliste convaincu, la compréhension des enjeux métiers me sont au moins aussi important que la maîtrise technique. J'adore le partage des compétences, et je suis un ardent supporter du 'Pit Of Success'!",
      picture:
        'http://gravatar.com/avatar/43022845c143b75a94c7c4b855975ee3&size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://dupdob.wordpress.com/',
        },
        {
          name: 'Web',
          url: 'http://www.n-fluent.net/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/cyrille-dupuydauby-29885313',
        },
      ],
      location: 'Paris, La Défense et à proximité',
      sessions: [
        {
          title: 'As if you meant it',
          abstract:
            "Présentation de NFluent: l'outil .NET qu'il vous manquait pour booster le TDD dans votre équipe. Diapos et live coding inside.",
          tags: ['DDD', 'TDD', 'Fluent', '.NET', 'Test', 'NFluent'],
          lang: ['fr'],
        },
        {
          title: 'Haut débit et faible latence',
          abstract:
            'Programmation réactive: cas concret de conception via un système de trading électronique, le Pasta Pricer. Cette session interactive permet de découvrir et discuter des patterns fondamentaux de la programmation réactive.',
          tags: [
            'Reactive',
            'Finance',
            'Sequencer',
            'Conflation',
            'Performance',
          ],
          lang: ['fr'],
        },
        {
          title: 'Les clefs de la conduite du changement',
          abstract:
            "Présentation des fondamentaux de la conduite du changement. Ce BBL présente les principaux écueils qui font que 70% des transformations échouent et vous donne quelques techniques vous permettant d'améliorer les chances de réussites.",
          tags: ['changement', 'Transformation', 'RH'],
          lang: ['fr'],
        },
        {
          title: 'Le Craftsmanship par les Lego',
          abstract:
            'Cet atelier propose de découvrir le clean code, refactoring, dette technique, approche iérative grâces à des exerices de construction. Adaptée à tous les profils, cette session est un moyen formidable de sensibiliser des équipes, sponsors, métiers aux bénéfices du Craftsmanship.',
          tags: ['CleanCode', 'TDD', 'Iteratif', 'Refactoring'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'cyrdup',
        mail: 'dupdob@gmail.com',
      },
    },
    {
      since: '2014-04-22',
      name: 'Emmanuel Bonnet',
      bio:
        "Consultant BRMS /Business Automation @inukshuk.io, Chargé d'enseignement @UPS",
      picture:
        'http://www.gravatar.com/avatar/a89e9302b1b93ce1220079ed86ba0447.png?size=256',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bonnetemmanuel',
        },
        {
          name: 'Web',
          url: 'http://www.inukshuk.io',
        },
      ],
      location: 'Toulouse et environs, et Paris occasionnellement',
      sessions: [
        {
          title:
            'IA symbolique vs IA learning: les moteurs (règles, optim) ca sert vraiment encore aujourdhui ?',
          abstract:
            'On a ChatGPT : pourquoi avoir des utilisateurs finaux qui codent des règles métier en langage naturel ?',
          tags: [
            'IA symbolique',
            'IA learning',
            'Decision Management',
            'Moteurs de règles',
            'Business Rules',
            'Règles Métiers',
            'BRMS',
            'Low-Code',
            'ILOG',
            'DROOLS',
            'ODM',
            'JBOSS',
            'IBM',
            'JRULES',
          ],
          lang: ['fr'],
        },
        {
          title:
            'BRMS, Moteurs de règles, Business Rules : entrons dans les détails techniques sordides ... WHAT ELSE ?',
          abstract:
            'RETE, Salience, Refraction, pattern matching, les boucles folles, la langage naturel, les IF-THEN et WHAT ELSE ?',
          tags: [
            'Decision Management',
            'Moteurs de règles',
            'Business Rules',
            'Règles Métiers',
            'BRMS',
            'ILOG',
            'DROOLS',
            'ODM',
            'JBOSS',
            'IBM',
            'JRULES',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Comprendre Red Hat Drools et IBM ODM, principaux leaders du marché',
          abstract:
            "Comprendre les principaux composants d'un BRMS : édition, execution, intégration et architecture sur un cas concret (avec du vrai Live coding inside)",
          tags: [
            'Decision Management',
            'Moteurs de règles',
            'Business Rules',
            'Règles Métiers',
            'BRMS',
            'ODM',
            'DROOLS',
            'JBOSS',
            'IBM',
            'RED HAT',
            'Decision Manager Open Edition',
            'Operational Decision Manager',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse', 'Paris'],
      contacts: {
        twitter: 'ebonnet31',
        mail: 'emmanuel.bonnet@gmail.com',
      },
    },
    {
      since: '2014-04-25',
      name: 'Jean-françois Garreau',
      bio:
        'Directeur Ingeneering chez @Sfeir Nantes, GDE Web Technologies et Leader du @GDGNantes.',
      picture:
        'http://www.gravatar.com/avatar/5713f6958d5be53307b0a5ae717ba767.png?size=256',
      websites: [
        {
          name: 'Web',
          url: 'http://jef.binomed.fr',
        },
        {
          name: 'Web',
          url: 'http://jef.binomed.fr/binomed_docs',
        },
        {
          name: 'LinkedIn',
          url: 'http://lnkd.in/dSN8h9U',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/jefBinomed',
        },
      ],
      location: 'Nantes et environs',
      sessions: [
        {
          title:
            'Pourquoi les PWA sont la prochaine étape majeure du web et y passer dès aujourd’hui !',
          abstract:
            'Les PWA, vous connaissez ? Si ce n’est pas le cas, il est grand temps de s’y intéresser car cela représente le prochain marché du web de demain. Dans ce talk, nous reviendrons sur les concepts, des exemples concrets, comment ça marche et enfin pourquoi il est bon de partir sur des PWAs aujourd’hui',
          tags: ['PWA', 'Web'],
          lang: ['fr'],
        },
        {
          title: 'Démystifions les CSS Custom Properties',
          abstract:
            'Les CSS Variables, de leur vrai nom : Custom Properties, sont désormais supportées par tous les navigateurs modernes. Et pourtant, elles restent sous-utilisées ! Venez découvrir les fonctionnalités offertes par cette nouvelle spécification, ses avantages, ses limites et ainsi vous convertir à l’utilisation massive des variables dans vos projets web ! \nCe talk est donné en binôme avec Audrey Garreau ',
          tags: ['CSS', 'W3C'],
          lang: ['fr'],
        },
        {
          title: 'Le web Natif débarque',
          abstract:
            'Toujours dans la continuité du web manifesto visant à mettre à disposition plus d’API bas niveau sur le web. Le “projet FUGU” (non ce n’est pas le nouveau nom du Yaourt de Dan…) est le nom de code du projet permettant de mettre à disposition des APIs web qui complètent l’intégration avec l’OS (Explorateur de fichier, Accès aux contacts, Bluetooth, …).\n\nVenez dans cette session pour découvrir quelles APIs vous allez pouvoir utiliser demain dans vos applications web.',
          tags: ['HTML5', 'Web', 'Fugu'],
          lang: ['fr'],
        },
        {
          title: 'Faisons de la magie grâce à Houdini CSS',
          abstract:
            'La dernière spec de layout CSS vient tout juste de sortir et elle correspond exactement à votre besoin et va permettre de simplifier énormément votre travail quotidien. Seul hic, vous devez supporter tous ces navigateurs qui n’ont pas encore implémentés cette feature ! \n\nComment faire ? Un polyfill javascript ? Ca risque de plomber un peu les performances de votre projet. Ah si seulement de vrais polyfills css existaient !\n\nEt bien c’est un peu la version TL;DR; de Houdini CSS. Venez à ce talk pour voir ce que l’avenir du CSS nous réserve et comment cette spec va nous changer la vie !',
          tags: ['CSS', 'HTML5', 'Web'],
          lang: ['fr'],
        },
        {
          title: 'Explorons les stratégies de cache offertes sur les PWA',
          abstract:
            "Quand on parle de PWA, il est question de Service Workers, c'est un fait. Etant donné que ce dernier nous permet de servir des fichiers hors-ligne, il est donc pertinent de se pencher sur les mécanismes de mises en cache proposés par ce dernier.\nA travers cette session, nous vous proposons de balayer les différentes et plus connues stratégies de mises en cache d'une PWA. Nous tâcherons pour chacune de ces stratégies de vous proposer un exemple d'implémentation.\nNous mettrons aussi le nez dans workbox qui pourra vous aider dans la mise en place de ces dernières.\nLes stratégies explorées seront les suivantes :\n* Cache-Only\n* Network-Only\n* Cache-First\n* Network-First\n* Cache-Then-Network\n* Stale-While-Revalidate\n* Generic-Fallback",
          tags: ['PWA', 'ServiceWorker'],
          lang: ['fr'],
        },
        {
          title: "J'ai organisé un atelier pour les enfants",
          abstract:
            "Les Devoxx4Kids, vous connaissez ? Mais si vous savez, ces ateliers pour faire découvrir la programmation aux plus petits ? Je vais vous faire un petit retour d'expérience sur les choix que nous avons fait à Nantes et pourquoi nous les avons fait. Comment avons nous choisit le programme ? Combien de temps doit durer les ateliers ? .... \n Enfin je ferais une démo de scratch pour que vous puissiez expérimenter cet outils avec vos enfants",
          tags: ['Enfants', 'Découverte', 'Devoxx4Kids'],
          lang: ['fr'],
        },
        {
          title: 'JS in CSS: Yes we can 🤔',
          abstract:
            'Alors que tout le monde parle de CSS in JS et si on regardait comment faire du JS in CSS ? Car oui c’est possible ! Est-ce une bonne idée ? Je n’en suis pas convaincu mais pourquoi ne viendrez pas vous détendre sur cette session à la fois technique et fun.\n“Because we can” n’est ce pas ce qui nous motive dans certains de nos développements 😉',
          tags: ['JS', 'CSS'],
          lang: ['fr'],
        },
        {
          title: 'Cursus Speaker',
          abstract:
            "Je croise souvent des sociétés et des personnes qui souhaiteraient passer le pas et devenir speaker, se mettre en avant pour partager leurs connaissances, leurs expériences. Mais bien souvent, personne ne sait par où commencer ni comment s'y prendre... Je vous propose donc de venir faire 4 ateliers de 1h30/2h pour y remédier. Au programme : \n 1. Comment Trouver son sujet \n 2. Comment Postuler ? Préparer ses Slides ? \n 3. Comment gérer sa carrière de speaker ? \n 4. Exercice pratique.",
          tags: ['Conseils', 'Tech Talks'],
          lang: ['fr'],
        },
        {
          title: 'Comment gérer sa culture tech',
          abstract:
            'Vous vous demandez comment créer un environnement stimulant pour vos équipes techniques ? Sans prétendre avoir la solution parfaite, nous vous proposons de partager des bonnes pratiques et solutions que vous pourrez mettre en oeuvre pour animer vos équipes techniques. Nous évoquerons aussi la nécessité de travailler sa communication autour de ces actions pour que la culture soit visible et pertinente.',
          tags: ['Conseils', 'Tech Talks'],
          lang: ['fr'],
        },
        {
          title: '🧑‍🎨 L’art de bien rater sa conférence 🥱',
          abstract:
            'Vous vous êtes toujours demandé comment rater à coup sûr une présentation devant vos collègues ou votre comité de direction. Et bien, ne cherchez plus, venez dans ce talk pour découvrir comment être un·e orateur·rice exécrable.\nEntre mauvaises pratiques et erreurs de présentation, vous verrez comment transformer un mauvais jeux de slides en une présentation percutente et captivante. Le tout en s’amusant grâce à une légère dose d’autodérision 🫠…',
          tags: ['Conseils', 'Tech Talks'],
          lang: ['fr']
        },
        {
          title: 'J’ai beaucoup de taf 😱 mais je gère 😎',
          abstract:
            'On court toujours après le temps, dans notre vie perso, dans notre vie pro. Et si on essayait d’être plus productif non pas pour produire plus (enfin si un peu 😇) mais plutôt pour regagner du temps dans sa vie perso et arrêter de se sentir tous les jours surchargés.\nC’est ce que je vous propose à travers cette session qui revient sur ce que j’ai pu mettre en place dans mon organisation au quotidien et comment je m’y suis pris.',
          tags: ['Conseils', 'Tech Talks'],
          lang: ['fr']
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'jefBinomed',
        mail: 'jean.francois.garreau@gmail.com',
      },
    },
    {
      since: '2014-05-04',
      name: 'Paul Chavard',
      bio:
        'Développeur Frontend / API chez CapitaineTrain. Contributeur sur le projet EmberJS',
      picture:
        'https://secure.gravatar.com/avatar/fb11d632ffe3f707da14aea540e4bd4f?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://www.capitainetrain.com/',
        },
        {
          name: 'Web',
          url: 'http://emberjs.com',
        },
      ],
      location: 'Paris, proche banlieue et La Défense',
      sessions: [
        {
          title: 'Introduction à EmberJS',
          abstract:
            'Présentation du framework EmberJS et des enjeux d\'une application riche en JavaScript. Nous allons essayer de répondre à des questions courantes : "J\'ai vraiment besoin d\'une app ? Un site web ne suffit pas ?", "J\'ai vraiment besoin d\'un framework ?", "Comment tester mon app ?".',
          tags: ['EmberJS', 'JavaScript'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'tchak13',
        mail: 'paul@chavard.net',
      },
    },
    {
      since: '2014-05-06',
      name: 'Xavier Mouton-dubosc',
      bio:
        'Développeur web, tripatouilleur de standards, autodidacte et engagé',
      picture: 'http://dascritch.com/images/NightShot.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://dascritch.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/dascritch',
        },
      ],
      location: 'Toulouse et sa banlieue',
      sessions: [
        {
          title: 'Chiffrer ses communications et ses ordinateurs',
          abstract:
            'Quelles sont les missions du chiffrement, et ses utilités quotidiennes. Démonstration avec les e-mails signés et signatures de clés',
          tags: ['Vie privée', 'Sécurité', 'Chiffrement', 'Ethique'],
          lang: ['fr'],
        },
        {
          title: 'Surveillance globale et espionnage économique',
          abstract:
            'Mythes et réalités sur les programmes étatiques de surveillance globale et compétition économique',
          tags: ['Vie privée', 'Sécurité', 'Chiffrement', 'Ethique'],
          lang: ['fr'],
        },
        {
          title: "L'histoire de la cryptographie",
          abstract:
            "Comment les outils de cryptographie furent forgés et comment sont-ils passés d'un usage militaire à un usage civil.",
          tags: ['Vie privée', 'Sécurité', 'Chiffrement', 'Ethique'],
          lang: ['fr'],
        },
        {
          title: 'Politique de sécurité et de respect de vie privée',
          abstract:
            'Comment gérer les données personnelles stockées par votre application et les bonnes pratiques pour éviter les catastrophes techniques et juridiques',
          tags: ['Vie privée', 'Sécurité', 'Chiffrement', 'Ethique'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'dascritch',
        mail: 'xaviermd@gmail.com',
      },
    },
    {
      since: '2014-05-07',
      name: 'Franck Debane',
      bio:
        "Consultant CTO et coach lean startup. Intervenant/Formateur sur l'innovation, le lean startup et le marketing digital. Papa x2",
      picture:
        'http://media.licdn.com/mpr/mpr/shrink_200_200/p/1/000/02a/0ce/0dac097.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://debane.org/franck',
        },
        {
          name: 'Web',
          url: 'http://netelio.com',
        },
      ],
      location: 'Paris et environs',
      sessions: [
        {
          title: 'Decouverte du Lean Startup',
          abstract:
            'Comprendre les principes de bases du lean startup et leur importance. Quels sont les implications pour les entreprises déjà établie. Comprendre les étapes pour appliquer le lean startup dans votre entreprise.',
          tags: [
            'Lean Startup',
            'Innovation',
            'Product Strategy',
            'Product Management',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'fdebane',
        mail: 'fdebane@gmail.com',
      },
    },
    {
      since: '2014-05-09',
      name: 'Jérôme Heissler',
      bio:
        'Founder PerfectPost • Tech Entrepreneur • Architect AWS • Serverless, Typescript & Browser Extension • Passionate about Continuous Delivery, Infrastructure Automation, and all things Devops.',
      picture:
        'https://gravatar.com/userimage/41602360/57ac8a31a8714082663a324faeff3d6a.jpeg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jeromeheissler',
        },
        {
          name: 'Web',
          url: 'https://perfectpost.social',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/jeromeheissler',
        },
      ],
      location: 'Tours',
      sessions: [],
      cities: ['Tours'],
      contacts: {
        twitter: 'jeromeheissler',
      },
    },
    {
      since: '2014-05-09',
      name: 'Cedric Gatay',
      bio: 'Code-Trooper, code quality obsessed. Startup adventurer',
      picture:
        'http://www.gravatar.com/avatar/9600dc1bda25e979e656559914e00021.png?s=240',
      websites: [
        {
          name: 'Web',
          url: 'http://bloggure.info',
        },
        {
          name: 'Web',
          url: 'http://code-troopers.com',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/cedricgatay',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/CedricGatay',
        },
      ],
      location: 'Tours',
      sessions: [
        {
          title: "Astuces d'utilisation de Maven",
          abstract:
            "Apache Maven est un outil omniprésent, apprenez quelques astuces pour vous permettre de moins le détester (voir même l'apprécier)",
          tags: ['Intégration continue', 'Maven', 'Java', 'Git', 'MongoDB'],
          lang: ['fr'],
        },
        {
          title: 'Exporter une API depuis un site web',
          abstract:
            "Nous vivons dans le monde des API, malheureusement, tous les sites webs ne l'ont pas compris et n'exposent pas des points d'accès pour permettre aux développeurs de construire des services riches au dessus de leur source de données. Nous verrons comment nous pouvons assez simplement procéder pour extraire une API depuis un site web.",
          tags: ['Intégration continue', 'Maven', 'Java', 'Git', 'MongoDB'],
          lang: ['fr'],
        },
        {
          title: "Construction d'un système de statistiques avec MongoDB",
          abstract:
            "Retour d'expérience sur la construction d'un système de restitutions statistiques à l'aide de MongoDB.",
          tags: ['Intégration continue', 'Maven', 'Java', 'Git', 'MongoDB'],
          lang: ['fr'],
        },
        {
          title:
            "Retour d'expérience sur la plateforme de test mise en place pour SRMvision",
          abstract:
            "Pour permettre de tester facilement différentes versions de l'application, SRMvision utilise Vagrant + Puppet pour générer à la volée des machines de test, apprenez comment faire de même...",
          tags: ['Intégration continue', 'Maven', 'Java', 'Git', 'MongoDB'],
          lang: ['fr'],
        },
        {
          title: 'Git, moi aussi !',
          abstract:
            "Présentation sur ce qu'est Git et comment en bénéficier au quotidien sur votre poste de développeur en attendant qu'il soit autorisé par votre hierarchie.",
          tags: ['Intégration continue', 'Maven', 'Java', 'Git', 'MongoDB'],
          lang: ['fr'],
        },
      ],
      cities: ['Tours'],
      contacts: {
        twitter: 'Cedric_Gatay',
        mail: 'cedric@gatay.fr',
      },
    },
    {
      since: '2014-05-10',
      name: 'Frédéric Cabestre',
      bio:
        'Architecte logiciel, peut-être. Développeur, assurément. Inclassable curieux à large spectre, sans aucun doute. Mais surtout passeur qui aime faire partager ses rares «Eurêka !».',
      picture: 'img/baggers/fcabestre.png',
      location: 'Ô, Toulouse !',
      sessions: [
        {
          title: 'SSL du sol au plafond',
          abstract:
            "Pour beaucoup SSL est un petit cadenas dans un navigateur. Que se cache-t-il derrière ? De l'assemblage cryptographique à la gestion des certificats.",
          tags: ['SSL', 'Akka', 'Acteurs', 'JVM', 'Scala', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Des acteurs en concurrence',
          abstract:
            "Pourquoi un concept vieux de 40 ans refait-il surface aujourd'hui ? Qu'est-ce qui en fait la force ? Où sont ses faiblesses ? Avec de vraies rasades de «Akka» pour accompagner le plat.",
          tags: ['SSL', 'Akka', 'Acteurs', 'JVM', 'Scala', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Comment la JVM ramasse-t-elle ses miettes ?',
          abstract:
            'La JVM propose à ses invités la récupération automatique de la mémoire. Quelles sont ses stratégies ? Comment les contrôler et les observer en action ?',
          tags: ['SSL', 'Akka', 'Acteurs', 'JVM', 'Scala', 'Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'fcabestre',
        mail: 'frederic.cabestre@free.fr',
      },
    },
    {
      since: '2014-05-12',
      name: 'Jean-Philippe Bempel',
      bio:
        "Développeur passionné par les performances, les runtimes (JVM, CLR) et adepte de Mechanical Sympathy, Jean-Philippe Bempel a plus de 8 ans d'expérience dans les systèmes de trading low latency. Maintenant il apporte son expertise sur la JVM chez Criteo afin d'optimiser les resources sur des clusters d'applications de plusieurs milliers de noeuds.",
      picture:
        'https://pbs.twimg.com/profile_images/1019190216995811328/YARM51Fl_400x400.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://jpbempel.blogspot.com',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/jeanphilippebempel',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Low Latency & Mechanical Sympathy : écueils et solutions',
          abstract:
            "Une application de connexion aux marchés financiers requiert une performance accrue. Le traitement des ordres se mesure en centaines de microsecondes, parfois moins. A partir du moment où l'on descend sous la barre de la milliseconde, on entre dans un domaine où la connaissance du matériel (CPU) et des sous-systèmes mémoire devient prépondérante : Il est nécessaire d'être en harmonie avec le matériel (Mechanical Sympathy). Quels sont les plus gros problèmes pour optimiser un traitement inférieur à la milliseconde ? Cette présentation donnera les clés pour répondre à cette question et un retour d'expérience sur l'application de ces optimisations.",
          tags: [
            'Mechanical sympathy',
            'CPU',
            'JVM',
            'Low latency',
            'Performance',
          ],
          lang: ['fr'],
        },
        {
          title: 'OutOfMemoryError : Quel est le coût des objets en Java',
          abstract:
            "A Ullink, nos Heaps sont habituellement plutôt large (jusqu'à 256 Go) et nous gérons un large volume de données. Mais nous avons observé que la majorité de l'espace occupé dans la Heap ne l'est pas par les données business mais par les structures ! Dans cette présentation il sera montré quel est le coût des objets, quels sont les suspects idéals dans nos structures de données habituelles (Lists, Maps, Strings) et ce que nous pouvons faire pour réduire l'empreinte mémoire.",
          tags: ['JVM', 'GC', 'Mémoire', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Programmation Lock-Free : les techniques des pros',
          abstract:
            "La scalabilité des applications est une préoccupation importante. Beaucoup de pertes en scalabilité proviennent de code contenant des locks qui produisent une importante contention en cas de forte charge. Dans cette présentation nous allons aborder différentes techniques (striping, copy-on-write, ring buffer, spinning, ...) qui vont nous permettre de réduire cette contention ou d'obtenir un code sans lock. Nous expliquerons aussi les concepts de Compare-And-Swap et de barrières mémoires.",
          tags: ['CPU', 'JIT', 'JVM', 'Lock-free', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Coding & Performance : un parcours initiatique',
          abstract:
            "Lorsque l'on entre dans le domaine de la performance, un non-initié peut se retrouver perdu parmi les règles empiriques (rule of thumbs), les grand O, les benchmarks et autres optimisations prématurées. Cette présentation propose d'aider le développeur à acquérir les connaissances et l'expérience nécessaire pour affronter les défis permanents que posent l'élaboration et la maintenance d'une application performante.",
          tags: ['JVM', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Le guide de dépannage de la JVM',
          abstract:
            'Votre application Java/Scala/autres en production ne répond plus ! Que faire pour diagnostiquer le problème ? Un thread bloqué ? le CPU à 100% ? le GC part en vrille ? Une OutOfMemoryError ? Par où commencer ? Cette présentation vous donnera les outils et la méthodologie pour être capable de gérer cette situation. Vous verrez les informations et métriques fournis par la JVM ainsi que la bonne façon de les interpréter.',
          tags: ['JVM', 'GC', 'Metriques', 'Diagnostic', 'Performance'],
          lang: ['fr'],
        },
        {
          title: "CLR-JVM différences d'implémentation",
          abstract:
            "Chez Criteo, nous utilisons à la fois la .NET CLR et la JVM. A première vue il semble que ces 2 runtimes sont similaires: du byte code, un JIT, un GC, ... Mais en fait il y a des différences dans l'implementation et dans la vision des applications ciblées et leurs besoins. Nous verrons les avantages et inconvénients des différences de ces 2 runtimes.",
          tags: ['JVM', 'CLR', 'JIT', 'GC', 'Performance'],
          lang: ['fr'],
        },
        {
          title: 'Comprendre les GC à faible latence de la JVM',
          abstract:
            "Depuis quelques années, le monde du GC sur la JVM évolue. Une nouvelle catégorie de GC émerge: Les GC à faible latence (low latency). Shenandoah est mis à disposition par Red Hat, Oracle a mis en open Source ZGC dans l'OpenJDK depuis le JDK 11 et Azul C4 est toujours là. Comme les GC 'classiques' sont plutôt bien compris maintenant, cette présentation s'attardera sur les arcanes des plus récents. Nous allons expliquer le concurrent marking (tri-color marking), la Load Value Barrier de C4, les Brooks pointers de Shenandoah et le multi-mapping de ZGC. Enfin, comment choisir son GC à faible latence ?",
          tags: ['JVM', 'GC', 'Shenandoah', 'Azul C4', 'Z GC', 'Performance'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'jpbempel',
        mail: 'jp.bempel@criteo.com',
      },
    },
    {
      since: '2014-05-16',
      name: 'Nicolas Ledez',
      bio:
        "Sysadmin depuis quelques années. Fainéant donc développeur (Ruby, Python, 'bash', etc.). Donc forcement 'DevOps",
      picture:
        'http://www.gravatar.com/avatar/8bd808086fe0e2a647c96a96fd0b995e.png?s=512',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.ledez.net',
        },
      ],
      location:
        'Rennes et alentours. Mais aussi ailleurs si tu payes le déplacement :)',
      sessions: [
        {
          title: "Dev(\\)Ops ? l'after Agile ?",
          tags: ['Cloud', 'DevOps', 'Ruby', 'Chef', 'TDD'],
          lang: ['fr'],
        },
        {
          title: 'Y sont pas cher mes tests !',
          tags: ['Cloud', 'DevOps', 'Ruby', 'Chef', 'TDD'],
          lang: ['fr'],
        },
        {
          title: 'Introduction au Cloud',
          tags: ['Cloud', 'DevOps', 'Ruby', 'Chef', 'TDD'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'nledez',
        mail: 'brownbaglunch-hes1u@ledez.net',
      },
    },
    {
      since: '2014-05-21',
      name: 'Loic Dachary',
      bio: 'Artisan Logiciel Libre, contributeur Ceph',
      picture:
        'http://www.gravatar.com/avatar/131beae824c4866ed6ae995c7fc9bd58.png',
      websites: [
        {
          name: 'Web',
          url: 'http://dachary.org',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Ceph : le futur du stockage est libre',
          abstract:
            "Ceph est une plateforme libre de stockage distribué. Les objectifs principaux de Ceph sont d'être complètement distribué sans point unique de défaillance, extensible jusqu'à l'exabyte et librement disponible. Les données sont répliquées permettant au système d'être tolérant aux pannes.",
          tags: ['Ceph', 'Stockage', 'Cloud', 'OpenStack'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        mail: 'loic@dachary.org',
      },
    },
    {
      since: '2014-05-23',
      name: 'Grégory Paul',
      bio:
        'Développeur (JS, Node) passionné par les technos web, l’Open Source et la sécurité informatique',
      picture:
        'https://secure.gravatar.com/avatar/faee0283f5c65152a680f4dc9b524b32?size=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/paulgreg/',
        },
        {
          name: 'Web',
          url: 'https://paulgreg.me/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'HTTP',
          abstract:
            'Présentation du protocole HTTP, ces entêtes et méthodes, les cookies et mécanismes tels que CORS, la négociation de contenu, le cache, les requêtes conditionnelles, etc',
          tags: ['HTTPS', 'Web'],
          lang: ['fr'],
        },
        {
          title: 'HTTPS n’aura plus de secret pour vous',
          abstract:
            'Je vous propose, à travers cette présentation, de vous démontrer l’intérêt de passer à HTTPS, de détailler l’établissement d’une connexion sécurisée, d’expliquer les failles de sécurité ayant défrayé les journaux et de vous présenter l’écosystème autour de HTTPS. A l’issue de cette présentation, les acronymes tels que TLS, MITM, CA, RSA, PFS, HSTS, CSP, BEAST, CRIME, BREACH et bien d’autres n’auront plus de secrets pour vous.',
          tags: ['HTTPS', 'SSL', 'TLS', 'sécurité', 'Web'],
          lang: ['fr'],
        },
        {
          title: 'Bitcoin et monnaie cryptographique',
          abstract:
            'Session présentant les principes techniques derrière Bitcoin et autres monnaies cryptographiques.',
          tags: ['Bitcoin'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'paulgreg',
        mail: 'bbl@paulgreg.me',
      },
    },
    {
      since: '2014-05-23',
      name: 'Dimitri Fontaine',
      bio:
        'Free Software Hacker, PostgreSQL Major Contributor, auteur de El-Get (Emacs) et pgloader.',
      picture: 'img/baggers/photo_dim.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://tapoueh.org',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/dimitri',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/dimitrifontaine',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'SQL avancé avec PostgreSQL',
          abstract:
            'Changer de point de vue sur le SQL quand on est développeur.',
          tags: [
            'PostgreSQL',
            'pgloader',
            'Emacs',
            'Emacs Lisp',
            'Common Lisp',
          ],
          lang: ['fr'],
        },
        {
          title: 'Architectures PostgreSQL',
          abstract:
            'Quelles sont les solutions classiques en terme de déploiement PostgreSQL à hautes disponibilité.',
          tags: [
            'PostgreSQL',
            'pgloader',
            'Emacs',
            'Emacs Lisp',
            'Common Lisp',
          ],
          lang: ['fr'],
        },
        {
          title: 'Quelques extensions PostgreSQL',
          abstract:
            "Présentation détaillée de cas d'usages avancés resolus avec des extensions PostgreSQL.",
          tags: [
            'PostgreSQL',
            'pgloader',
            'Emacs',
            'Emacs Lisp',
            'Common Lisp',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le chargement de données avec PostgreSQL et pgloader',
          abstract:
            "Une présentation détaillée des capacités de l'outil pgloader en terme de chargement de données.",
          tags: [
            'PostgreSQL',
            'pgloader',
            'Emacs',
            'Emacs Lisp',
            'Common Lisp',
          ],
          lang: ['fr'],
        },
        {
          title: 'Emacs',
          abstract:
            'Découvrir et appronfindir un environnement de travail complet, y compris la programmation Emacs Lisp.',
          tags: [
            'PostgreSQL',
            'pgloader',
            'Emacs',
            'Emacs Lisp',
            'Common Lisp',
          ],
          lang: ['fr'],
        },
        {
          title: 'Common Lisp',
          abstract:
            "Présentation d'un language de programmation résolument moderne, impératif, objet et fonctionnel.",
          tags: [
            'PostgreSQL',
            'pgloader',
            'Emacs',
            'Emacs Lisp',
            'Common Lisp',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'tapoueh',
        mail: 'dim@tapoueh.org',
      },
    },
    {
      since: '2014-05-29',
      name: 'Manuel Raynaud',
      bio: 'Backend dev @wisembly and PHP addict',
      picture:
        'http://gravatar.com/avatar/7305d40aa63e426c31decc0b4bd4225f?s=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/lunika',
        },
        {
          name: 'Web',
          url: 'http://clermontech.org',
        },
        {
          name: 'Web',
          url: 'http://raynaud.io',
        },
      ],
      location: 'Clermont Ferrand et Paris',
      sessions: [
        {
          title: 'Thelia, la solution ecommerce libre',
          abstract: 'Présentation de la solution ecommerce Thelia',
          tags: ['PHP', 'Symfony2', 'e-commerce', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'Composants symfony',
          abstract:
            'introduction aux composants HttpKernel, HttpFoundation ou encore EventDispatcher et DependencyInjection',
          tags: ['PHP', 'Symfony2', 'e-commerce', 'Git'],
          lang: ['fr'],
        },
        {
          title: 'industrialisation de php',
          abstract:
            'Abandonnez le PHP à papa et modernisez vos méthodes de travail autour de php',
          tags: ['PHP', 'Symfony2', 'e-commerce', 'Git'],
          lang: ['fr'],
        },
      ],
      cities: ['Clermont-Ferrand', 'Paris'],
      contacts: {
        twitter: 'manuraynaud',
        mail: 'manu@raynaud.io',
      },
    },
    {
      since: '2014-06-01',
      name: 'Damien Thouvenin',
      bio:
        "Vieux développeur passé du coté entrepreneur de la force, j'ai créé ma boite en 2004, interviens comme coach agile et continue de coder le week-end tout en explorant les formes alternatives au management hiérarchique",
      picture:
        'https://pbs.twimg.com/profile_images/378800000400466333/f815139c75e19c3d0737b3d922756160_400x400.jpeg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.blogdepatron.fr',
        },
        {
          name: 'Web',
          url: 'http://www.clt-services.com',
        },
        {
          name: 'Web',
          url: 'http://www.conference-agile.fr',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/dthouvenin/fr',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/dthouvenin',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Il est frais, il est beau mon backlog',
          abstract:
            'Présentation des idées, concepts, outils et pratiques que je trouve les plus utiles pour construire et rafiner son backlog.',
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
        {
          title: "Entre le marteau et l'enclume de l'agilité, le manager",
          abstract:
            "L'équipe agile ne vit pas sur une île déserte et celui (celle) qui subit les plus fortes contraintes c'est le manager, à la frontière avec le reste de l'organisation. Discussion autour du rôle et des outils du manager d'équipes agiles.",
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Jamais en retard, jamais stressé : gérer son temps efficacement',
          abstract:
            "Une bonne gestion du temps c'est 2 jours de formation et deux ans d'exercices mais en 1 heure on peut déjà faire un tour rapide de 10 astuces pour ne plus subir son emploi du temps et regagner en qualité de vie.",
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Le lean-startup, un modèle pour réduire les risques des projets entrepreneuriaux',
          abstract:
            "L'entrepreneur c'est celui qui croit assez fort à son projet pour se lancer contre les pronostics et les opinions courantes. Cette présentation du Lean Startup s'adresse d'abord aux dirigeants, aux financiers, aux managers... à tous ceux qui lancent, financent, sponsorisent, décident de nouveaux projets.",
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
        {
          title: 'Faire monter le niveau',
          abstract:
            "*Raising the bar* c'est l'ambition du mouvement 'Software Craftsmanship'. Dans la pratique, comment faire ? Si je suis manager ou Team leader, comment faire monter le niveau technique de mon équipe, comment enclencher une dynamique d'apprentissage, que mettre en place pour faciliter l'amélioration ?",
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
        {
          title: 'Découvir la sociocratie',
          abstract:
            "La sociocratie est un mode de distribution du pouvoir dans les organisations humaines qui vise à empêcher que le pouvoir ne devienne une force d'oppression. En une heure on voit ce qu'est la sociocratie et on l'expérimente à petite échelle en prenant une décision sociocratiquement.",
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Pourquoi la hiérarchie est en échec et quelles sont les alternatives',
          abstract:
            "De plus en plus d'entreprises mettent en doute l'efficacité du management hiérarchique traditionnel (la pyramide). Je vous propose d'explorer pourquoi ça coince et quelles sont les autres options.",
          tags: [
            'Agilité',
            'Management',
            'Leadership',
            'RH',
            'Product Owner',
            'Craftsmanship',
            'Entreprise agile',
            'Sociocratie',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'cltservices',
        mail: 'd.thouvenin@clt-services.com',
      },
    },
    {
      since: '2014-06-06',
      name: 'Thomas Arnaud',
      bio: 'Développeur Java, expert performance applicative.',
      picture:
        'http://www.gravatar.com/avatar/36656f02d742ed98c85c8c80a83fbb41.png?s=200',
      websites: [
        {
          name: 'Web',
          url: 'http://www.level5.fr/',
        },
        {
          name: 'Web',
          url: 'https://www.nudge-apm.com/',
        },
      ],
      location: 'Clermont Ferrand et environs',
      sessions: [
        {
          title: 'Cassandra',
          abstract:
            "Découvrez l'une des principales bases NoSQL du marché. Nous évoquerons les spécificités, le fonctionnement et le requêtage avec CQL3.",
          tags: [
            'Java',
            'Performance',
            'Calcul distrubué',
            'Hadoop',
            'Storm',
            'Cassandra',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Storm',
          abstract:
            "Faire du calcul distribué de manière robuste, scalable et tout ça en temps réel c'est maintenant possible. Architecture, design de topologies, implémentation ... découvrez Storm.",
          tags: [
            'Java',
            'Performance',
            'Calcul distrubué',
            'Hadoop',
            'Storm',
            'Cassandra',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Hadoop : Introduction',
          abstract:
            'Hadoop permet de travailler sur des petaoctets de données en des temps records grâce à son architecture distribuée. Découvrez comment cela fonctionne. Au programme : Architecture, HDFS, Map/Reduce ...',
          tags: [
            'Java',
            'Performance',
            'Calcul distrubué',
            'Hadoop',
            'Storm',
            'Cassandra',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Hadoop: Programmation de jobs',
          abstract:
            'Un aperçu des principales techniques de programmation de jobs Hadoop : Java Map/Reduce, Hive, Pig.',
          tags: [
            'Java',
            'Performance',
            'Calcul distrubué',
            'Hadoop',
            'Storm',
            'Cassandra',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Tests de charge',
          abstract:
            "Métrologie, scénarisation, plan de charge, nous aborderons tous les aspects de l'élaboration d'un test de charge à l'aide de Jmeter.",
          tags: [
            'Java',
            'Performance',
            'Calcul distrubué',
            'Hadoop',
            'Storm',
            'Cassandra',
            'NoSQL',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Clermont-Ferrand'],
      contacts: {
        twitter: 'level5_c',
        mail: 'thomas.arnaud@level5.fr',
      },
    },
    {
      since: '2014-06-07',
      name: 'Laurent Paoletti',
      bio:
        "Développeur indépendant Python/Django, artisan du web depuis maintenant quelques années. Comme tout passioné, j'aime apprendre, discuter de mon métier et partager mon expérience, en organisant ou en participant à différents évènements.",
      picture: 'img/baggers/laurent_paoletti.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.providenz.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/laurentpaoletti',
        },
      ],
      location: 'Toulon et environs',
      sessions: [
        {
          title: 'Performance web',
          abstract:
            "Améliorer les performances de vos applicatifs web en front et backend. Outils d'évaluation et de tests de montée en charge",
          tags: ['Python', 'Performance', 'Web'],
          lang: ['fr'],
        },
        {
          title:
            'Et si votre prochain développement était plus propre et robuste ? Une introduction à Django',
          abstract:
            "Marre des développements lourds, du code spaghetti et inmaintenable ? Laissez-moi vous parler de Django, le framework web utilisé par Instagram, Pinterest, Libération, Autolib, Mozilla et bien d'autres.",
          tags: ['Python', 'Performance', 'Web'],
          lang: ['fr'],
        },
        {
          title: 'Pourquoi passent-ils à python ?',
          abstract:
            "Web, informatique scientifique, traitement de données, administration de serveur, l'adoption de python s'est considérablement accélérée dans de nombreux secteurs, des startups aux banques d'affaires en passant par les centres de recherche scientifique. Une visite rapide de l'écosystème python pour évaluer son intérêt et ses défauts.",
          tags: ['Python', 'Performance', 'Web'],
          lang: ['fr'],
        },
        {
          title: 'La trousse à outil du développement web moderne',
          abstract:
            'En 10 ans le paysage du développement web a été complètement chamboulé. Arrivée du mobile, adoption massive de git, recours aux méthodes agiles, essor de javascript, intégration continue, cloud... On fait le point, un buzzword à la fois, et on cause bonnes pratiques. ',
          tags: ['Python', 'Performance', 'Web'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulon'],
      contacts: {
        twitter: 'providenz',
        mail: 'lp@providenz.fr',
      },
    },
    {
      since: '2014-06-08',
      bio:
        'Architecte logiciel, mais Développeur avant tout ;). Javaiste de coeur mais ouvert à tout ou presque',
      name: 'Olivier Etienne',
      picture: 'img/baggers/oetienne.png',
      location: 'Toulouse',
      sessions: [
        {
          title: 'Des framboises et des tests',
          abstract:
            "Comment utiliser un raspberry pi pour faire des tests automatiques sur la TV d'un grand opérateur téléphonique. Ou comment utiliser un raspberry pi pour faire un bridge IP-InfraRouge et ainsi passer d'une télécommande à Selenium.",
          tags: [
            'HTTP',
            'Java',
            'Orange',
            'Raspberry Pi',
            'Java',
            'PHP',
            'Test',
            'Automatisation',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'olivier_etienne',
        mail: 'olivier.etienne@gmail.com',
      },
    },
    {
      since: '2014-06-12',
      name: 'Augustin De Laveaucoupet',
      bio:
        'Freelance Lead Développeur Symfony2, Statupeur et amateur de Raspberry.',
      picture:
        'http://www.gravatar.com/avatar/1374695123503482a838cf9fc9701b21.png?s=200',
      websites: [
        {
          name: 'Web',
          url: 'http://www.atc-it.fr/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/augustinmerle',
        },
      ],
      location: 'Le Mans / Paris',
      sessions: [
        {
          title: 'Docker sur votre poste de dev comme en Prod',
          abstract: 'Decouverte de Docker à travers une approche kubernetes.',
          tags: [
            'Symfony2',
            'Performance',
            'DevOps',
            'Behat',
            'Docker',
            'Scrum',
            'kubernetes',
            'Apple',
            'Debian',
            'Proxmox',
          ],
          lang: ['fr'],
        },
        {
          title: 'Behat',
          abstract:
            'Devenez un testeur Behat et coller au plus près des specs de votre clients. Simple mais powerfull.',
          tags: [
            'Symfony2',
            'Performance',
            'DevOps',
            'Behat',
            'Vagrant',
            'Scrum',
            'Chef',
            'Apple',
            'Debian',
            'Proxmox',
          ],
          lang: ['fr'],
        },
        {
          title: 'Outils et methodo pour des mises en prod sans sueur',
          abstract:
            "Si vous faite moins de une MEP par semaine, ou que elle prend plus de deux heures alors vous risquer d'aprendre des choses... ",
          tags: [
            'Symfony2',
            'Performance',
            'DevOps',
            'Behat',
            'Docker',
            'Scrum',
            'Capistrano',
            'Apple',
            'Debian',
            'Proxmox',
          ],
          lang: ['fr'],
        },
        {
          title: 'Discussions libre sur la qualité Logiciel',
          abstract:
            "On parlera des outils d'audit de code généraliste et orientés symfony.",
          tags: [
            'Symfony2',
            'Performance',
            'DevOps',
            'Behat',
            'Docker',
            'Scrum',
            'Chef',
            'Apple',
            'Debian',
            'Proxmox',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Le Mans', 'Paris'],
      contacts: {
        twitter: 'augustinmerle',
        mail: 'augustin@laveaucoupet.fr',
      },
    },
    {
      since: '2014-06-17',
      name: 'Xavier Carpentier',
      bio:
        'Full stack web & mobile apps developer. Xavier est développeur depuis 7 ans et il est maintenant indépendant dans les domaines du web et du mobile. C’est un adepte des frameworks conventionnés (Play Scala et Ruby On Rails) ainsi que des innovations côté client comme les nouveaux frameworks MVC JavaScript du type AngularJS. Bref, il se passionne pour tout ce qui gravite autour du vaste monde de la toile et par conséquent pour le style d’architecture Rest.',
      picture:
        'https://fr.gravatar.com/userimage/14646520/4f4940b2bdbc85918a045429e92fc118.jpg?size=250',
      websites: [
        {
          name: 'Web',
          url: 'http://xaviercarpentier.com/',
        },
        {
          name: 'Web',
          url: 'http://blog.xavier-carpentier.com/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/xcarpentier',
        },
      ],
      location: 'Strasbourg',
      sessions: [
        {
          title: '#ReSTFul, really ?',
          abstract:
            'Tout le monde dit faire ou vouloir faire une architecture de type Rest, mais que cela implique-t-il vraiment ? Où vous situez-vous sur le “Richardson Maturity Model” ? Votre API est à la fois Hypermedia et JSON, really ? Si ce sont des questions qui vous taraudent l’esprit et même vous empêchent de dormir, alors venez écouter ce talk pour avoir des pistes de réflexions, des échanges et peut-être des réponses, qui sait ?',
          tags: ['REST', 'API', 'HTTP'],
          lang: ['fr'],
        },
      ],
      cities: ['Strasbourg', 'Paris'],
      contacts: {
        twitter: 'xcapetir',
        mail: 'contact@xavier-carpentier.com',
      },
    },
    {
      since: '2014-07-10',
      name: 'Johan Martinsson',
      bio:
        "Passionné par le code et le travail bien fait, Johan en tant que développeur montre par l'exemple comment produire du bon code et livrer de manière fiable, dans une harmonie totale avec le métier. Il a une attirance non négligeable pour les problèmes concrets du quotidien, c'est sans doute pourquoi il s'intéresse tant au legacy.",
      picture:
        'http://www.gravatar.com/avatar/3771a70b46d12cb049e7be561ae69116.png',
      websites: [
        {
          name: 'Web',
          url: 'http://martinsson-johan.blogspot.fr/',
        },
        {
          name: 'Web',
          url: 'http://www.changit.fr/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/martinsson/',
        },
      ],
      location: 'Grenoble',
      sessions: [
        {
          title: 'La valeur du bon code pour les non-devs',
          abstract:
            "La valeur métier du bon code est difficile à appréhender, même parfois pour les développeurs. Comment pouvons-nous espérer qu'on nous demande d'en faire? Dans ce démo je rend compréhensible aux non techniques la valeur que leur apporte un code en bon état. Dans ce démo il parait aussi comme une évidence que pour passer d'un mauvaise état à un bon état il n'est pas tellement une question d'allouer du temps sur le moment, mais d'avoir de l'entrainement.",
          tags: [
            'Legacy Code',
            'Test',
            'TDD',
            'Extreme Programming',
            'ApprovalTests',
            'Refactoring',
            'Live Coding',
            'Agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Refactorer legacy - même pas peur',
          abstract:
            "Pour refactorer du legacy on aimerait avoir des tests, mais ils sont tellement difficiles/longs à écrire. De plus on a choix cornélien entre tests haut niveau avec un feedback lent et les tests unitaires qui vont trop adhérer au code et ne pas permettre certains refactorings. Une alternative est d'écrire des tets temporaires taillés pour le refactoring. Le fait qu'ils soient temporaires rend l'écriture extremement rapide.... Pas de Hello World, la démo se fera sur un exemple avec plusieurs dépendances non testables. Du vrai quoi!",
          tags: [
            'Legacy Code',
            'Test',
            'TDD',
            'Extreme Programming',
            'ApprovalTests',
            'Refactoring',
            'Live Coding',
            'Agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Développeurs anonymes',
          abstract:
            "Démo de refactoring. Introduire de l'objet efficacement dans un legacy infame.",
          tags: [
            'Legacy Code',
            'Test',
            'TDD',
            'Extreme Programming',
            'ApprovalTests',
            'Refactoring',
            'Live Coding',
            'Agile',
          ],
          lang: ['fr'],
        },
        {
          title: "La pyramide des tests - d'oú sort il?",
          abstract:
            "Mike Cohn a dit qu'il fallait beacoup de tests bas niveau et peu de tests haut niveau. Quand est-ce que c'est vrai? Quand dois-je penser à apprendre à faire des tests 'unitaires' pour ne pas écrouler ma productivité avec une maintenance lourde des tests haut niveau? Une analyse basé sur deux expéreinces diamétralement opposées.",
          tags: [
            'Legacy Code',
            'Test',
            'TDD',
            'Extreme Programming',
            'ApprovalTests',
            'Refactoring',
            'Live Coding',
            'Agile',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Grenoble'],
      contacts: {
        twitter: 'johan_alps',
        mail: 'martinsson.johan@gmail.com',
      },
    },
    {
      since: '2014-07-23',
      name: 'Pierre Baillet',
      bio:
        'Principal Engineer at Sonos • Mauvais plaisantin mais bon vivant • ',
      picture:
        'https://www.gravatar.com/userimage/7364231/abcb8f5931db676141afd368fb844cc2.jpg?size=250',
      websites: [
        {
          name: 'Web',
          url: 'http://oct.zoy.org',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/octplane/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/octplane',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Datadog pour les nuls',
          abstract:
            "Fort de mon expérience chez Datadog, je vous propose de découvrir Datadog et ce que ce SaaS peut vous apporter en terme d'observabilité et de monitoring.",
          tags: ['Datadog', 'Monitoring', 'Observabilité'],
          lang: ['fr'],
        },
        {
          title: 'Le Chaos Engineering pour les nuls',
          abstract:
            "Vos services sont les plus robustes du monde ? Êtes vous prêt à passer à la vitesse supérieure ? Découvrez le Chaos Engineering, fils fou et prodige des SRE et de l'armée de 12 singes.",
          tags: ['Chaos', 'Monitoring', 'Robustness', 'Reliability'],
          lang: ['fr'],
        },
        {
          title: 'Des fossés et des trolls',
          abstract:
            'What is ze devops ? Concept nébuleux ou révolution industrielle ? Comment combler le fossé entre les développeurs et les opérationnels (avec autre choses que des trolls).',
          tags: ['Git', 'Deployment', 'DevOps', 'Intégration continue'],
          lang: ['fr'],
        },
        {
          title: 'Git pour les nuls',
          abstract:
            'Débutant en SCM ou vétérans de SVN, le contrôle de source est quelque chose qui est cher à votre coeur. Passez à la vitesse supérieure avec Git, le système de contrôle de source décentralisé très déroutant au premier abord. Initiez-vous avec moi, en jouant avec git, son workflow et ses autres joyeusetés. Ne perdez plus de source, jamais !',
          tags: ['Git', 'Deployment', 'DevOps', 'Intégration continue'],
          lang: ['fr'],
        },
        {
          title: 'Les Applications 12 factors',
          abstract:
            'Après les 12 points du manifeste Agile, découvrez le 12-factors pour les Applications. Apprenez à développer des applications compatibles avec vos infras et vos ops, et élargissez votre talent !',
          tags: ['Git', 'Deployment', 'DevOps', 'Intégration continue'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'octplane',
        mail: 'pierre@baillet.name',
      },
    },
    {
      since: '2014-07-28',
      name: 'Pierre Marquis',
      bio: 'Agiliste, Développeur Python',
      picture:
        'https://media-exp1.licdn.com/dms/image/C5603AQEYHTSORNrQ9g/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=pejmtKDPIQwMQKfbA975mKeFxZ5tx8TBWSwdNYxAJYo',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/pub/pierre-marquis/27/573/752',
        },
      ],
      location: 'Rennes et alentours',
      sessions: [
        {
          title: 'Transformation agile',
          abstract:
            'Comment bien démarrer? Comprendre les enjeux? Comment amener le changement dans son équipe, dans son entreprise?',
          tags: ['Agile', 'Scrum', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: "Retour d'expérience Agile chez Mappy, Nokia, Efficity",
          abstract:
            "Je propose de partager mon expérience de scrum master scrum/kanban au sein de différentes entreprises. Comment s'est passé le passage à la méthode agile? Comment amener l'agile dans son équipe ou plus globalement dans son entreprise? Les avantages de l'agile dans une équipe back, contraintes de l'agile et problèmes rencontrés?",
          tags: ['Agile', 'Scrum', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Agilité: passer à la vitesse supérieure',
          abstract:
            "Lorsque l'on travaille en agile depuis un certain temps, on peut avoir de bonnes bases sans nécessairement ressentir les avantages. Le but est de faire un état des lieux et de transmettre quelques clés pour réussir à passer un cap et ressentir pleinement les bénéfices qu'apportent cette méthode.",
          tags: ['Agile', 'Scrum', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: "Management d'équipe technique",
          abstract:
            "Je propose de partager quelques outils et expériences du management d'équipe technique",
          tags: ['Management', 'CTO'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'PierMarquis',
        mail: 'pier.marquis@gmail.com',
      },
    },
    {
      since: '2014-10-12',
      name: 'Tomasz Jaskula',
      bio:
        "L'artisan du beau code, fondateur et organisateur de DDD Paris et F# Paris, je m'intéresse à la mise en place des solutions qui permettent de donner un avantage compétitif à l'entreprise. Cela passe par Domain Driven Design, la programmation fonctionnelle avec F#, CQRS et Event Sourcing...J'aime surtout partager mon expérience de 15 ans avec les teams d'entreprise qui veulent progresser et avec divers communautés de développement.",
      picture:
        'http://1.gravatar.com/userimage/12224826/df20a86f93b56052b5a8cfb469ada07b?size=333',
      websites: [
        {
          name: 'Web',
          url: 'http://www.codedistillers.com/tja/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/pub/thomas-jaskula/3/282/16b',
        },
      ],
      location: 'Paris, La Défense et à proximité',
      sessions: [
        {
          title: 'Renforcez votre code métier en adaptant F#',
          abstract:
            "Live coding F# d'un cas métier simple qui est destiné aux développeurs débutants en programmation fonctionnelle et F#. Le but est de montrer une approche de développement incrémentale et de donner les bases de la syntaxe et du paradigme fonctionnel. Il s'agit de démontrer que F# est un langage adapté au développement de tout type d'applications et le fait d'adopter le paradigme fonctionnel fait que le code est plus lisible, moins apte aux bugs et surtout plus robuste.",
          tags: [
            'F#',
            'DDD',
            'Programmation fonctionnelle',
            'CQRS',
            'Event Sourcing',
            'ES',
            'Architecture',
            '.NET',
          ],
          lang: ['fr'],
        },
        {
          title: 'Recettes CQRS, pour bien cuisiner son architecture',
          abstract:
            'Le pattern architectural CQRS est très simple à comprendre mais peut devenir très vite compliqué à mettre en œuvre. Si on y ajoute un zeste de Domain Driven Design, une pincée d’Event Sourcing et qu’on agrémente le tout avec différents bus de messaging, des queues et de l’infrastructure, notre plat gastronomique peut vite devenir une bouillie indigeste. Comme bien souvent, tout est question de mesure et de bonnes proportions (définies en fonction de vos contraintes fonctionnelles et techniques). Si vous ne savez pas si CQRS est fait pour votre besoin, ou tout simplement si vous ne savez pas par où commencer, je vous propose de découvrir quelques recettes de grand-mère tels que:  ingrédients d’un bon domaine CQRS, Domain Driven Design or not, concurrency, event sourcing, read models, master-details views, task based UIs, event sourcing, integration, event versionning.',
          tags: [
            'F#',
            'DDD',
            'Programmation fonctionnelle',
            'CQRS',
            'Event Sourcing',
            'ES',
            'Architecture',
            '.NET',
          ],
          lang: ['fr'],
        },
        {
          title: 'Sujet F# sur mesure',
          abstract: 'Demandez-moi ce que vous voulez à ce sujet.',
          tags: [
            'F#',
            'DDD',
            'Programmation fonctionnelle',
            'CQRS',
            'Event Sourcing',
            'ES',
            'Architecture',
            '.NET',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'tjaskula',
        mail: 'tjaskula@composeitsoft.com',
      },
    },
    {
      since: '2014-10-17',
      name: 'Damien Cavaillès',
      bio:
        "Développeur Mobile, passionné par les nouveaux usages de la mobilité et des objets connectés ainsi que par la créativité des Makers. J'organise le Startup Weekend Lille Maker Edition. Je suis également Facilitateur de Startup Weekend !",
      picture:
        'https://pbs.twimg.com/profile_images/597738159196098561/yrRIHSZT.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://medium.com/@thedamfr',
        },
        {
          name: 'Web',
          url: 'http://lille.up.co',
        },
      ],
      location: 'Lille, Paris',
      sessions: [
        {
          title: 'BLE : De la mobilité aux objets connectés',
          abstract:
            "Le Bluetooth Low Energy est le protocole qui relie le mobile et les objets connectés. Basé sur le Bluetooth, il est supporté par la majorité des mobiles récents (même le 4S !), c'est l'interface favorite des objets connectés. iBeacon et Android Wear sont deux exemples de solutions basées sur le BLE. Une sessions courte pour bien cerner comment fonctionne le BLE, comment le prendre en main (parce que c'est facile), et en comprendre les enjeux",
          tags: ['Android', 'iOS', 'IoT', 'Maker', 'Embarqué'],
          lang: ['fr'],
        },
        {
          title: "Android Wear : Ceci n'est pas une montre !",
          abstract:
            "Android Wear, c'est l'extension d'Android qui va changer notre style de vie. Un retour d'experience et un petit tour des bonnes pratiques en terme d'UX pour bien cerner le produit. Les concepts généraux de l'API et une mise en pratique simple en utilisant Teleport. Petite démo à la clef !",
          tags: ['Android', 'iOS', 'IoT', 'Maker', 'Embarqué'],
          lang: ['fr'],
        },
        {
          title: 'Dev to Maker',
          abstract:
            '"Si tu as déjà scotché un stylo cassé pour continuer à écrire, tu es un Maker !". Présentation du courant des makers et de l\'open-source hardware. Petite démo Arduino, parce que c\'est vraiment tout simple à faire marcher ! Les Devs sont tous des makers, à vous de vous lancer !',
          tags: ['Android', 'iOS', 'IoT', 'Maker', 'Embarqué'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille', 'Paris'],
      contacts: {
        twitter: 'thedamfr',
      },
    },
    {
      since: '2014-11-02',
      name: 'Leonardo Noleto',
      bio:
        "Data Scientist Freelance et business geek. J'utilise l'informatique et les données pour rendre la vie des utilisateurs plus facile et confortable (et la mienne d'abord, il faut bien tester avant non ?). Mes passions: Machine Learning, Java/Python/R, Vélo en libre service, les TEDx et les startups.",
      picture: 'img/baggers/leonardo-noleto-avatar.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/pub/leonardo-noleto/63/70b/820',
        },
      ],
      location: 'Toulouse et Agglomération. Ailleurs selon déplacements',
      sessions: [
        {
          title: 'Transformez vos logs en insights avec ELK',
          abstract:
            "Les logs sont une mine d’informations. Cependant, les transformer en métriques faciles à comprendre peut s'avérer une tâche ardue : chaque application a une structure de log différente, elles sont souvent décentralisées, les formats de timestamp sont divers et variés et les analyser nécessite souvent une expertise technique.  Avec la stack ELK -  ElasticSearch, Logstash et Kibana,  je vous montrerai que faire parler vos logs n'est plus qu'un jeu d'enfant !",
          tags: [
            'Machine learning',
            'Data Mining',
            'Kibana',
            'Big Data',
            'Valorisation données',
            'Métriques Business',
            'NoSQL',
          ],
          lang: ['fr'],
        },
        {
          title: 'Anomaly Detection (a.k.a outlier detection)',
          abstract:
            'Vous aimez jouer au détective ? Résoudre des affaires mystérieuses ? Cette présentation est faite pour vous : repérez les données inhabituelles, attrapez les fraudes, découvrez les intrus ! Je vous ferai un tour d’horizon des concepts et techniques pour détecter des anomalies dans un jeux de données. Des méthodes statistiques au machine learning nous allons voir quelques algorithmes et use cases. Alors, élémentaire, mon cher Watson ?',
          tags: [
            'Machine learning',
            'Data Mining',
            'Kibana',
            'Big Data',
            'Valorisation données',
            'Métriques Business',
            'NoSQL',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'leonardo_noleto',
      },
    },
    {
      since: '2014-11-07',
      name: 'Jean-baptiste Dusseaut',
      bio: "eXtreme Programmer, co-fondateur d'Arpinum",
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://arpinum.fr',
        },
      ],
      location: 'Bordeaux, centre ville ou proximité Tramway',
      sessions: [
        {
          title: 'Coding Dojo',
          abstract:
            "Comment apprendre à devenir de meilleurs développeurs ou développeuses si nous ne prenons jamais le temps d'apprendre ? Le but d'un coding dojo est de créer en environnement d'apprentissage ou nous pouvons sans vergogne nous entrainer au TDD et autres pratiques cabalistiques sans peur de l'échec.",
          tags: ['TDD', 'Extreme Programming', 'Agilité', 'Agile', 'Code'],
          lang: ['fr'],
        },
        {
          title: 'Introduction au Test Driven Development',
          abstract:
            "Vous avez peut être entendu dire que le TDD est une pratique magique qui va résoudre tous vos problèmes. Oui mais en attentant, le concept vous parrez un peu fumeux et vous ne voyez pas très bien comment ça marche. Le but ici est de faire une session de live coding démontrant le béaba de l'approche.",
          tags: ['TDD', 'Extreme Programming', 'Agilité', 'Agile', 'Code'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'bodysplash',
        mail: 'jbdusseaut@arpinum.fr',
      },
    },
    {
      since: '2014-11-25',
      name: 'Timothée Chevrier',
      bio:
        "Agiliste passionné avant tout. Scrum master, chef de projet, un peu développeur... Je suis un optimiste passioné par l'apprentissage collectif. Je m'intéresse aux sujets tournant autour de l'agilité bien sûr mais plus largement des mouvements proches : l'entreprise libérée, le leadership, le coaching, l'intelligence collective, le bien être au travail, le management 3.0, etc... ",
      picture:
        'https://fr.gravatar.com/userimage/41876697/9b8e38d7e6ae9ff3bdce48c510ad822c.jpg?size=200',
      websites: [],
      location: 'Rennes et grand ouest pourquoi pas',
      sessions: [
        {
          title: 'Après les user stories, les team stories',
          abstract:
            "Session d'1H réalisée à l'agile tour Brest. Il s'agit d'un retour d'expérience sur un passage de 3 ans en tant que Scrum master dans une équipe. J'y parle estimations, rétrospectives, management visuel, auto organisation. Et j'ai quelques bonus en tête (spécifications par les tests d'acceptances, etc...)",
          tags: [
            'Agile',
            'Scrum',
            'Auto-organisation',
            'Serious Game',
            'Rétrospectives',
            'Echanges',
          ],
          lang: ['fr'],
        },
        {
          title: "Animation d'ateliers et/ou de jeux",
          abstract:
            "A travers l'exercice de rétrospective proposer par la méthode Scrum, j'ai eu l'occasion d'animer un grand nombre d'ateliers dans des buts variés. Je me propose donc comme facilitateur de vos ateliers pour découvrir comment se réunir différement.",
          tags: [
            'Agile',
            'Scrum',
            'Auto-organisation',
            'Serious Game',
            'Rétrospectives',
            'Echanges',
          ],
          lang: ['fr'],
        },
        {
          title: "L'agilité c'est quoi ?",
          abstract:
            "Vous avez entendu parlé d'agilité et le sujet vous intéresse. Je vous propose de partager ma vision de ce qu'elle est, et de construire ensemble ce qu'elle pourrait être pour vous.",
          tags: [
            'Agile',
            'Scrum',
            'Auto-organisation',
            'Serious Game',
            'Rétrospectives',
            'Echanges',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'msieur_tim',
        mail: 'tchevrier@gmail.com',
      },
    },
    {
      since: '2014-11-28',
      name: 'Christophe Labouisse',
      bio:
        'Développeur Java Freelance qui aime mettre les mains dans le moteur. ',
      picture:
        'http://www.gravatar.com/avatar/5a9a33e6c0397ed112a7c955728f3a1f.png?s=240',
      websites: [
        {
          name: 'Web',
          url: 'http://www.labouisse.com',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/clabouisse/',
        },
        {
          name: 'Viadeo',
          url: 'http://www.viadeo.com/profile/00224q6ti6d57zay/',
        },
        {
          name: 'Hopwork',
          url: 'https://www.hopwork.com/profile/51d057032a07e9483ddedfc7',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Introduction à Docker',
          abstract:
            "Qu'est-ce que Docker ? Qu'est-ce que l'utilisation de Docker peut m'apporter concrètement ? Pour répondre à ces questions et à d'autres, une présentation de Docker avec des morceaux de livecoding dedans.",
          tags: ['Git', 'Docker'],
          lang: ['fr'],
        },
        {
          title: 'Git pour les nuls et les autres',
          abstract:
            "Présentation de Git, des différences par rapport à d'autres systèmes tels que Subversion, de son écosystème.",
          tags: ['Git', 'Docker'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'XtlCnslt',
      },
    },
    {
      since: '2015-01-27',
      name: 'Cédric Bodin',
      bio:
        "Coach agile, formateur et facilitateur chez <a href='http://www.orange-business.com/fr/applications-for-business/' target='_blank'>Orange Applications for Business</a>, j’essaye d’aider les individus et les organisations à re-devenir agiles.<br/>Je suis donc tout naturellement membre de l'association <a href='http://www.agilenantes.org/' target='_blank'>Agile Nantes</a> et co-organisateur de la conférence Agile Tour à Nantes.<br/>Et question sandwich, mes 3 ingrédients “HUMmm” sont HUManisme, HUMilité et HUMour :)",
      picture:
        'http://cedricbodin.files.wordpress.com/2013/03/cedric-bodin.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/cedricbodin/',
        },
        {
          name: 'Web',
          url: 'http://cedricbodin.net/',
        },
      ],
      location: 'Nantes (et à distance)',
      sessions: [
        {
          title: "Le pourquoi du pourquoi de l'agilité",
          abstract:
            "POURQUOI se lancer dans l'agilité?<br/>Réponse-type: des projets qui échouent, des individus désengagés, des organisations dysfonctionnelles, etc.<br/>Mais alors POURQUOI ces symptômes émergent-ils? (d'où ce titre: “Le POURQUOI du POURQUOI de l'agilité”)<br/>Et bien, à travers plusieurs grilles de lecture (historique, culturelle, anthropologique, psychologique...) <a href='https://prezi.com/41eol2a8bops/le-pourquoi-du-pourquoi-de-lagilite/' target='_blank'>nous irons à la racine</a> pour voir en quoi l'agilité avait/a/aura du sens.",
          tags: [
            'Agile',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Lean Startup',
            'Serious Game',
            'Musique',
            'Marathon',
          ],
          lang: ['fr'],
        },
        {
          title: 'Au secours, ma bibliothèque iTu*** me parle d’agilité',
          abstract:
            "Je souffre depuis peu d’un étrange syndrome: celui du “mélomanagiliste”.<br/>Est-ce grave docteur? Non, ça signifie juste qu’en réécoutant la musique de ma bibliothèque iTu*** je découvre que c’est dingue: Daft Punk, Stupeflip, The Strokes, John Williams, etc. <a href='http://cedricbodin.net/tag/melomanagiliste/' target='_blank'>Ils parlent tous d’agilité!</a><br/>Alors pour vous prouver que mon esprit n’est pas si malade, toutes les minutes nous écouterons un extrait d’un artiste différent, puis je vous montrerai en quoi il parle manifestement d’agilité.<br/>Et si par malheur vous n’appreniez rien, vous aurez au moins passé un moment “Simple & Funky” comme l’agilité :)",
          tags: [
            'Agile',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Lean Startup',
            'Serious Game',
            'Musique',
            'Marathon',
          ],
          lang: ['fr'],
        },
        {
          title: 'Petits Pecha Kucha entre amis',
          abstract:
            "L'idée est simple : vous me préparez plusieurs <a href='http://fr.wikipedia.org/wiki/Pecha_Kucha' target='_blank'>Pecha Kuchas</a> autour de l'agilité, que je ne découvrirai que le jour J. Et après chaque Pecha Kucha, nous échangerons ensemble sur ce qui viendra d'être présenté. De grands moments d'improvisation en perspective !",
          tags: [
            'Agile',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Lean Startup',
            'Serious Game',
            'Musique',
            'Marathon',
          ],
          lang: ['fr'],
        },
        {
          title: 'Bref, je suis coach agile :)',
          abstract:
            "N'hésitez pas à me contacter pour que nous discutions ensemble de tout sujet autour de l'agilité (la facilitation des temps collectifs, le coaching d'équipe, les transformations d'organisation, Scrum, Kanban, Lean Startup, Serious Games, la musique, les marathons, etc.)",
          tags: [
            'Agile',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Lean Startup',
            'Serious Game',
            'Musique',
            'Marathon',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'cedricbodin',
        mail: 'contact@cedricbodin.net',
      },
    },
    {
      since: '2015-01-28',
      name: 'Romain Couturier',
      bio: 'Coach agile et facilitateur graphique',
      picture:
        'http://www.gravatar.com/avatar/918e67363e4361447d7a01c11da8a767.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.terredagile.com',
        },
        {
          name: 'Web',
          url: 'http://talondagile.fr',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title:
            'Libérez vos idées et partez à la découverte de la facilitation graphique',
          abstract:
            "S'initier aux techniques de base de la facilitation graphique des interactions de groupe et découvrir comment la pensée visuelle une dynamique interactive et innovante dans les réunions.",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Kanban pour tous',
          abstract:
            'Pour toutes celles et ceux qui entendent parler de Kanban ou qui découvrent, je vous propose une compilation de retours d’expériences de mise en place de Kanban dans plusieurs environnements dont certains n’ont rien à voir avec l’agilité.',
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: "Introduction à l'Agilité",
          abstract:
            "Découverte de l'Agilité à travers le Manifeste Agile et les principales méthodes Agiles existantes pour faire le bon choix pour son équipe",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Créer  le bon produit avec le lean Caneva',
          abstract:
            "Pour ceux qui ne veulent plus faire à l'instinct le tri dans les idées pour leur produit, cette conférence vous présente le Lean Canvas et la démarche pour construire le bon produit, quel que soit votre domaine d'activité..",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Enseignement et Agilité',
          abstract:
            "Retour d'expériences sur l'enseignement de l'Agilité dans les universités ... en mode Agile bien sûr.",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: "Valeur ajoutée, c'est quoi au fait ?",
          abstract:
            'Cette session vous propose simplement d’explorer ce concept de valeur, les techniques possibles pour vous aider à valoriser vos exigences métier dans un contexte agile ... ou non ?',
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: "Il était une fois la vie d'un Product Owner",
          abstract:
            "C'est l'histoire d'un Product Owner qui découvre et apprend son rôle dans une startup pendant 9 mois. Entre joies et peines, les surprises seront nombreuses sur le chemin de la gestion de produit.",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Scrum, comment tomber dans le panneau',
          abstract:
            "Tour d'horizon des mythes et légendes communément admis autour de la méthode Scrum et qui peuvent mettre à mal votre Agilité.",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Transition agile et accompagnement au changement',
          abstract:
            "Je vous propose un premier cadre de réflexion sur la transition organisationnelle nécessaire au déploiement de l'agilité.",
          tags: [
            'Coaching',
            'Agile',
            'Facilitation graphique',
            'Scrum',
            'Kanban',
            'Facilitation',
            'Jeux agiles',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'romaincouturier',
        mail: 'romain.couturier@terredagile.com',
      },
    },
    {
      since: '2015-02-04',
      name: 'Maxime Sanglan-charlier',
      bio:
        '20 ans dans l\'informatique et pas une ride (ou presque). Curieux de nature, je suis toujours à la recherche de tout ce qui peut nous rendre plus efficients en tant qu\'individu, en équipe ou au sein d\'une organisation. Je co-organise la conférence <a href="http://ncrafts.io" target="_blank">Newcrafts</a> et suis co-fondateur du groupe <a target="_blank" href="https://www.meetup.com/fr-FR/nantes-software-crafters-Nantes/">Software Crafters Nantes</a><br /><br /><strong style="color:goldenrod">Tous mes ateliers ainsi que mes présentations, sont réalisables en ligne !</strong>',
      picture: 'img/baggers/photo_maxime_s.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://onehundredacorns.com/',
        },
      ],
      location: 'En ligne, Nantes et alentours',
      sessions: [
        {
          title: 'Présentation du Domain Driven Design',
          abstract:
            "Le livre référence d'Eric Evans sur le Domain Driven Design a été publié il y a plus de 15 déjà ! Le DDD n'a de cesse depuis de gagner en popularité, mais il est toujours assez compliqué d'y voir clair lorsque l'on commence à s'y intéresser ! Dans cette présentation je vous expliquerai ce qu'est (et ce que n'est pas) le DDD et en quoi cette démarche est bénéfique sur bon nombre de projets.",
          tags: ['Domain Driven Design', 'DDD'],
          lang: ['fr'],
        },
        {
          title: 'Atelier Event Storming',
          abstract:
            "Un atelier pour découvrir cette technique collaborative qui vise à modéliser votre métier tout en réunissant ceux qui savent ce qu'il faut réaliser et ceux qui savent comment le faire. Mise en application en live sur votre propre métier.",
          tags: ['EventStorming', 'Ubiquitous Language', 'Workshop', 'DDD'],
          lang: ['fr'],
        },
        {
          title: 'Atelier Architecture: C4 Model',
          abstract:
            "Un atelier de sketching de vos systèmes d'après le modèle C4 de Simon Brown. En mode collaboratif, avec un max d'efficacité, venez vous réapproprier votre architecture et découvrir comment partager une même vision au sein de son équipe de développement.",
          tags: ['Workshop', 'Architecture', 'C4'],
          lang: ['fr'],
        },
        {
          title: 'Coding Dojo',
          abstract:
            "Vous aimeriez organiser un Coding Dojo en interne mais vous ne savez pas comment vous y prendre ? Vous aimeriez découvrir la pratique de manière fun et ludique ? Ou vous êtes simplement à court d'idées pour le suivant ? Contactez-moi et on va arranger ça !",
          tags: ['Workshop', 'Dojo', 'Coding Dojo'],
          lang: ['fr'],
        },
        {
          title: 'Présentation du Mob Programming',
          abstract:
            "Le Mob Programming consiste à regrouper une équipe entière dans une pièce équipée d'un seul poste de travail pour tout le monde. Cette pratique vous promet entre autres une productivité accrue alors qu'une seule personne à la fois ne peut toucher le clavier ! Promesses tenues ?",
          tags: ['Mob Programming'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: '__MaxS__',
        mail: 'm.sanglan.charlier@gmail.com',
      },
    },
    {
      since: '2015-02-08',
      name: 'Julien Roy',
      bio: 'Architecte Java chez Ekino',
      picture:
        'http://www.gravatar.com/avatar/858275282cf240a0dd280a13fbd0f942?s=256',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/vanroy?tab=repositories',
        },
        {
          name: 'Web',
          url: 'http://www.ekino.com/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Spring Boot, améliorer votre productivité en 1 heure',
          abstract:
            "Découvrez les arcanes interne de Spring Boot et comment utiliser le framework pour augmenter votre productivité. Cette session débutera par 15 minutes de présentation suivi de 45 minutes de live coding. Je développerai une application Web constituée d'une WebService, d'une UI, d'un stockage MongoDB et d'outillages de production. Je terminerai par le déploiement de l'application dans le cloud.",
          tags: ['Code', 'Java', 'Spring', 'Spring Boot', 'Productivité'],
          lang: ['fr'],
        },
        {
          title: 'Spring Data : Une API, quinze possibilités',
          abstract:
            'Vous avez besoin d’intégrer une nouveau type de stockage ( Elasticsearch, Cassandra, Redis, Neo4j ) dans votre application mais l’apprentissage d’une nouvelle API vous fait hésiter ? Spring Data est fait pour vous ! Grâce à Spring Data, vous avez à disposition une interface unique pour communiquer avec tous vos backends. Venez découvrir comment faire un stream de données depuis Postgresql, faire des agrégations avec Elasticsearch, enregistrer des documents dans MongoDB, le tout en quelques lignes de code et sans efforts. Cette session se termine en détaillant les nouveautés apportées par la version 2.0 autour de la programmation réactive.',
          tags: ['Code', 'Java', 'Spring', 'Spring Boot', 'Productivité'],
          lang: ['fr'],
        },
        {
          title: "Se lancer dans l'aventure microservices avec Spring Cloud",
          abstract:
            "Vous êtes convaincus par l’architecture microservices et vous souhaitez vous lancer dans l'aventure. Durant cette session, nous expliquons comment démarrer concrètement,  quelles sont les nouvelles problématiques que soulève cette architecture et comment les résoudre. Nous détaillons à travers une application de démonstration qui implémente les concepts de Service Discovery, Circuit Breaker, Routing et Client Side Load Balancing l'utilisation de la libraire Spring Cloud Netflix (Eureka, Hystrix, Ribbon , ...). Nous survolerons aussi les différentes alternatives développées par les autres géants du Web tels que HashiCorp et Airbnb.",
          tags: ['Code', 'Java', 'Spring', 'Spring Boot', 'Productivité'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'vanr0y',
        mail: 'roy@ekino.com',
      },
    },
    {
      since: '2015-02-10',
      name: 'Boris Feld',
      bio:
        'Développeur Python multi-casquettes passionné par les architectures web, la mise en production de Machine Learning, la culture DevOps et la qualité',
      picture:
        'http://www.gravatar.com/avatar/410e3353165c33043ab69be7fc366428.jpg?s=256',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/lothiraldan/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Ils sont beaux mes tests',
          abstract:
            "Faire des tests c'est bien, faire de bons/beaux tests automatisés c'est mieux, des conseils tout droit venus des tranchées",
          tags: ['Python', 'Test'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'lothiraldan',
        mail: 'lothiraldan@gmail.com',
      },
    },
    {
      since: '2015-02-26',
      name: 'Thomas Zilliox',
      bio:
        'Développeur web indépendant, spécialisé dans la mise en place de bonnes pratiques CSS & JavaScript.',
      picture:
        'http://www.gravatar.com/avatar/ce82bc828376d978362c1e905b8ea32c?s=256',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/thomaszilliox',
        },
        {
          name: 'Web',
          url: 'http://tzi.fr',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/tzi/',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Organiser son code JavaScript',
          abstract:
            'Des modèles clé-en-main pour écrire du JavaScript modulaire, avec et sans jQuery.',
          tags: ['CSS', 'BEM', 'Sass', 'Less', 'JavaScript', 'PHP'],
          lang: ['fr'],
        },
        {
          title: 'Des CSS explicites grâce à BEM',
          abstract:
            'Des astuces pour mettre en place BEM et profiter de tous ses avantages.',
          tags: ['CSS', 'BEM', 'Sass', 'Less', 'JavaScript', 'PHP'],
          lang: ['fr'],
        },
        {
          title: 'Combien vous coûte vraiment le support IE7',
          abstract:
            "Une méthode pour évaluer le coût de support d'un ancien navigateur, et partager cette vision avec un décideur non-technique.",
          tags: ['CSS', 'BEM', 'Sass', 'Less', 'JavaScript', 'PHP'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'iamtzi',
        mail: 'hello@tzi.fr',
      },
    },
    {
      since: '2015-03-09',
      name: 'Sébastien Brochet',
      bio:
        "Mi-Dev, mi-Ops, ITSM Consultant @ Microsoft, j'aide les entreprises à améliorer leurs processus",
      picture:
        'https://s.gravatar.com/avatar/9080bb346b547fd66c136e4f11d9cfaf?s=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/sebbrochet/',
        },
        {
          name: 'Web',
          url: 'http://blog.sebbrochet.com',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/sebastienbrochet',
        },
      ],
      location: 'Paris et RP',
      sessions: [
        {
          title: 'Introduction aux pratiques DevOps',
          abstract:
            "Ou comment mieux aligner les Dev et les Ops pour répondre aux besoins Métiers. Le DevOps, c'est le prolongement de l'Agilité aux Ops, je vous propose un panorama des pratiques pour y arriver dans de bonnes conditions !",
          tags: ['DevOps', 'Azure', 'VSTS'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'sebbrochet',
        mail: 'contact@sebbrochet.com',
      },
    },
    {
      since: '2015-04-01',
      name: 'Thomas Gratier',
      bio:
        "Passionné de cartographie, d'OpenData et de Web. Consultant SIG/cartographie/géomatique indépendant spécialisé dans les outils OpenSource géospatiaux.",
      picture:
        'http://webgeodatavore.net/theme/images/logos/logo_webgeodatavore.png',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/thomasgratier/',
        },
        {
          name: 'Web',
          url: 'http://webgeodatavore.net/articles.html',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/thomasg77/',
        },
      ],
      location: 'Nantes et alentours',
      sessions: [
        {
          title:
            'Faire des cartes en ligne: quelles solutions pour quel(s) besoin(s)?',
          abstract:
            "Une revue d'une infrastructure classqieu pour créer des cartes en ligne puis un aperçu des outils clients et serveurs pour ce besoin.",
          tags: [
            'Cartographie',
            'SIG',
            'JavaScript',
            'Git',
            'Python',
            'OpenStreetMap',
            'OSM',
            'OpenData',
            'Documentation',
          ],
          lang: ['fr'],
        },
        {
          title:
            'OpenData et OpenStreetMap: comment les exploiter, comment contribuer?',
          abstract:
            "Historique de l'OpenData, revue des opportunités et limites du phénomène, usages potentiels.",
          tags: [
            'Cartographie',
            'SIG',
            'JavaScript',
            'Git',
            'Python',
            'OpenStreetMap',
            'OSM',
            'OpenData',
            'Documentation',
          ],
          lang: ['fr'],
        },
        {
          title: "Utiliser l'écosystème Github",
          abstract:
            "Github, c'est une infrastructure basée sur Git facilitant la collaboration par le code mais quels sont les autres usages possible? Une petite revue des usages potentiels.",
          tags: [
            'Cartographie',
            'SIG',
            'JavaScript',
            'Git',
            'Python',
            'OpenStreetMap',
            'OSM',
            'OpenData',
            'Documentation',
          ],
          lang: ['fr'],
        },
        {
          title: 'Les outils pour créer de la documentation utilisateur',
          abstract:
            "Il existe de nombreux outils pour documenter du code mais par où commencer pour produire sa documentation? Nous nous proposons de vous donner quelques pistes avec Sphinx, Gitbook et d'autres encore.",
          tags: [
            'Cartographie',
            'SIG',
            'JavaScript',
            'Git',
            'Python',
            'OpenStreetMap',
            'OSM',
            'OpenData',
            'Documentation',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'thomasg77',
        mail: 'contact@webgeodatavore.com',
      },
    },
    {
      since: '2018-30-09',
      name: 'Romain Tournoux',
      bio: 'Consultant transformation ',
      websites: [
        {
          name: 'Web',
          url: 'https://www.linkedin.com/in/romain-tournoux-a316539/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Transformation : le partenariat IT/Métiers',
          abstract: 'Bonnes pratiques et pièges à éviter.',
          tags: ['transformation', 'dsi', 'métier', 'rex', 'Agilité'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        mail: 'rtournoux@aneo.fr',
      },
    },
    {
      since: '2015-04-08',
      name: 'Cédric Lombardot',
      bio:
        'Développeur Web Full Stack - AngularJS - Mobile IonicFramework - Symfony - Lean Startup & Entrepreneur',
      picture:
        'https://cloudinary-a.akamaihd.net/hopwork/image/upload/t_bigprofile/h0w8ma1bqz9eqotrbcoi.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://donkeycode.com',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/cedriclombardot/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/pub/cédric-lombardot/23/110/217',
        },
      ],
      location: 'Paris et RP',
      sessions: [
        {
          title: 'Introduction au LeanStartup',
          abstract:
            'Comprenez que signifie démarrez une entreprise en applicant à la lettre le modèle lean. Et comment peut on appliquer certains de ces principes en entreprise',
          tags: [
            'Symfony',
            'AngularJS',
            'PHP',
            'Agile',
            'Sass',
            'jQuery',
            'Git',
            'Apache',
            'Cucumber',
            'Cordova',
            'Capistrano',
            'Symfony2',
            'Ionic',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Ionicframework : Ma première application',
          abstract:
            'Affranchissons nous des problèmes du développement hybride sur mobile',
          tags: [
            'Symfony',
            'AngularJS',
            'PHP',
            'Agile',
            'Sass',
            'jQuery',
            'Git',
            'Apache',
            'Cucumber',
            'Cordova',
            'Capistrano',
            'Symfony2',
            'Ionic',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Symfony2 : Admingenerator',
          abstract:
            'Présentation du bundle symfony2admingenerator/GeneratorBundle - ou comment créer une admin en 20 minutes',
          tags: [
            'Symfony',
            'AngularJS',
            'PHP',
            'Agile',
            'Sass',
            'jQuery',
            'Git',
            'Apache',
            'Cucumber',
            'Cordova',
            'Capistrano',
            'Symfony2',
            'Ionic',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'cedriclombardot',
        mail: 'cedric@donkeycode.com',
      },
    },
    {
      since: '2015-04-14',
      name: 'Gilles Debunne',
      bio:
        'Freelance Full Stack spécialisé UX - Desktop, Web, Mobile - Lean Startup & Entrepreneur',
      picture:
        'https://cloudinary-a.akamaihd.net/hopwork/image/upload/t_bigprofile/etn9it6jsyy2cqaiwbll.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://gillesdebunne.github.io/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/GillesDebunne',
        },
        {
          name: 'Hopwork',
          url: 'https://www.hopwork.com/profile/gillesdebunne',
        },
      ],
      location: 'Toulouse et télé-travail',
      sessions: [
        {
          title: "Introduction à l'interface sur mobile",
          abstract:
            "Les spécificités de l'interface et de l'interaction sur mobile",
          tags: [
            'Expérience utilisateur',
            'UI',
            'Mobile',
            'Cocos2D',
            'AngularJS',
            'Ionic',
            'Git',
            'Agile',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: "8 millions de téléchargements sur l'app store",
          abstract:
            "L'aventure de ma première et unique application iOS. Qui a bêtement cartonné",
          tags: [
            'Expérience utilisateur',
            'UI',
            'Mobile',
            'Cocos2D',
            'AngularJS',
            'Ionic',
            'Git',
            'Agile',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: "Angular : Tour d'horizon ou discussion approfondie",
          abstract:
            'Choississez votre sujet, du plus général à la discussion sur un point de détail',
          tags: [
            'Expérience utilisateur',
            'UI',
            'Mobile',
            'Cocos2D',
            'AngularJS',
            'Ionic',
            'Git',
            'Agile',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
        {
          title: 'Ionic : du mobile en HTML ?',
          abstract: 'Le développement hybride sur mobile est-il viable ?',
          tags: [
            'Expérience utilisateur',
            'UI',
            'Mobile',
            'Cocos2D',
            'AngularJS',
            'Ionic',
            'Git',
            'Agile',
            'Lean Startup',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'gdebunne',
        mail: 'gilles.debunne@gmail.com',
      },
    },
    {
      since: '2015-05-11',
      name: 'Adrien Joly',
      bio:
        "Ingénieur logiciel passionné et polyvalent. Co-créateur du podcast \"le SAV de la Tech\". Précédemment: Consultant SHODO / Tech Coach spécialisé en rénovation de code hérité (legacy) + pratiques craft et DevOps, Tech Lead chez Algolia, formateur, développeur freelance et organisateur de hackathons. News: <a href='https://adrienjoly.com/now'>adrienjoly.com/now</a>. Sujets: <a href='https://adrienjoly.com/talks'>adrienjoly.com/talks</a>.",
      picture: 'http://adrienjoly.com/img/photo.jpg',
      websites: [
        {
          name: 'Bluesky',
          url: 'https://bsky.app/profile/adrienjoly.com',
        },
        {
          name: 'X / Twitter',
          url: 'https://twitter.com/adrienjoly',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/adrienjoly/',
        },
        {
          name: 'Web',
          url: 'https://adrienjoly.com/',
        },
      ],
      location: 'Montreuil / Paris',
      sessions: [
        {
          title: "Détecter les bugs JS depuis son IDE: TSDoc et autres recettes pratiques",
          abstract:
            'Oops, notre code JavaScript plante en production à cause d’une variable, d’un paramètre ou d’une propriété undefined ! Saviez-vous qu’en maîtrisant l’art du type checking on pouvait non seulement réduire le besoin en tests, et qu’il n’y a même pas besoin de migrer toute sa codebase en TypeScript pour en bénéficier ? Voyons ensemble quelques erreurs typiques et comment les détecter avant qu’elles n’atteignent la prod !',
          tags: ['Code Legacy', 'JavaScript', 'Bugs'],
          lang: ['fr'],
        },
        {
          title: "Code legacy: les clés pour s'en sortir !",
          abstract:
            'Quand on travaille sur du code hérité, il est rarement envisageable de tout réécrire. Outre les nombreux problèmes qui peuvent en découler, il est crucial de proposer un plan réaliste et de convaincre les parties prenantes. En s’appuyant sur une expérience de projet réussie, nous allons voir ensemble les clés pour remédier à cette situation pénible pour les dévs et risquée pour l’entreprise.',
          tags: ['Code Legacy', 'Tech Leadership', 'Planification'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'adrienjoly',
        mail: 'contact@adrienjoly.com',
      },
    },
    {
      since: '2015-05-13',
      name: 'Florence Chabanois',
      bio: 'Agiliste : product owner et encore un peu développeur',
      picture: '',
      websites: [
        {
          name: 'Web',
          url: 'http://devsnotebook.fr',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Cheap user testing',
          abstract:
            "Avec le cheap user testing, armez-vous pour lancer des tests utilisateurs dans votre entreprise dès demain, même avec peu de moyens, même avec peu de temps, même sans développement. Bien que les premiers tests soient douloureux, ils ont permis de fluidifier le parcours des utilisateurs et d'augmenter nos rendements (jusque +35%).",
          tags: ['Produit', 'Lean Startup', 'Team'],
          lang: ['fr'],
        },
        {
          title: 'REX Lean Startup sur un site pour jeunes mamans',
          abstract:
            "Retour d'expérience sur un projet inspiré du lean startup. Le projet a 2 ans tout rond, 45K visites par mois et génère ~200 € par mois. On est très loin de Apple, par contre vous verrez que ce type de projet est à la portée de tout le monde et que c'est une super expérience.",
          tags: ['Produit', 'Lean Startup', 'Team'],
          lang: ['fr'],
        },
        {
          title: "Mais pourquoi y m'écoute pas ?",
          abstract:
            "Je vous propose de vous donner quelques pistes pour écouter efficacement et baillonner votre 'Moi-je'. Nous aborderons également certains aspects du modèle DISC pour comprendre pourquoi nous n'entendons pas tous de la même façon et verrons comment y remédier. http://2013.conference-agile.fr/sessions/mais-pourquoi-y-mecoute-pas.html",
          tags: ['Produit', 'Lean Startup', 'Team'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'fchabanois',
        mail: 'flocha2000-bbl@yahoo.fr',
      },
    },
    {
      since: '2015-05-21',
      name: 'Vincent Daviet',
      bio: 'Coach et Formateur en Agilité',
      picture:
        'https://www.gravatar.com/userimage/47384013/2c0dbef602396d93de9ed73849805cc3?size=240',
      websites: [
        {
          name: 'Web',
          url: 'https://babagile.wordpress.com',
        },
        {
          name: 'Web',
          url: 'https://blog.zenika.com',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: "Découverte de l'agilité",
          abstract:
            "Découvrez comment vous pouvez devenir plus agile, à travers un atelier concret et non technique. Fondamentaux d'une transition agile : collaboration, découpage du besoin, valeur métier, définition des priorités, planification agile, approche itérative et incrémentale.",
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title: 'Boostez vos réunions',
          abstract:
            "Découvrez et expérimentez de nouvelles techniques innovantes pour améliorer la productivité et le cadre de travail de vos réunions : devenez un facilitateur d'excellence !",
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title: 'Découverte de la facilitation graphique',
          abstract:
            'Initiez-vous à cette nouvelle technique de facilitation de réunion. Aucun pré-requis, ré-utilisable dans une multitude de contextes.',
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title:
            "Externalisation d'un projet agile : retour d'expérience et réflexions",
          abstract:
            "Présentation condensée d'une externalisation agile réussie avec ses diffcultés, ses trucs et astuces, son cheminement, les différents points de vue client/agence/équipe de développement. ",
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title: 'Libérer mon entreprise : comment faire ?',
          abstract:
            "Retour d'expérience et poursuite des réflexions grâce à des techniques de coaching, de facilitation, et un canevas sur-mesure.",
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title: 'Libérer les collaborateurs avec le délégation poker',
          abstract:
            'Expérimentez 1 outil puissant du manager agile (issus de Management 3.0 de Jurgen Apello) sur des cas concrets. Nous travaillerons sur les différents niveaux de la délégation (Delegation Poker) et de ses impacts.',
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title: 'Collaborer... et si on improvisait ',
          abstract:
            'Expérimentons des petits jeux simples issus du théâtre d’improvisation, et accessibles à tous. Nous redécouvrons ainsi les mécanismes d’une collaboration efficace : écoute, confiance, adaptation, esprit d’équipe, but commun.',
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Concevoir un événement / séminaire pour petit comité ou large groupe ',
          abstract:
            "Réflexion à l'aide d'un canevas éprouvé et de mes expériences d'organisations d'événements intra-entreprise ou publics.",
          tags: [
            'Coaching',
            'Facilitation',
            'Facilitation graphique',
            'Agile',
            'Scrum',
            'Kanban',
            'Innovation Games',
            'Jeux Agiles',
            'Externalisation',
            'Improvisation',
            'Team Building',
            'Entreprise libérée',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'vincentdaviet',
        mail: 'vincent.daviet.pro@gmail.com',
      },
    },
    {
      since: '2015-05-21',
      name: 'Eric Meallier',
      bio: 'Expert Java JEE. Agiliste et Devops jedi',
      picture: 'https://static.meallier.fr/logo.svg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/ericmeallier',
        },
      ],
      location: 'Avignon, Aix-en-Provence, Montpellier, Orange',
      sessions: [
        {
          title: 'Docker, encore un buzzword ou réel concept ?',
          abstract:
            "Vous vous demandez qui ce petit nouveau qui fait tant parler de lui ? alors n'attendez plus: demandez le guide ! Au cours de la session, j'expliquerai les nouveaux et anciens concepts mais surtout les nouveaux outils et ce qu'il peuvent apporter tant aux développeurs, qu'aux gestionnaires d'infra. Efficacité, simplicité, productivité.",
          tags: ['Java', 'JBoss', 'Docker', 'Devops', 'J2EE', 'Agilite'],
          lang: ['fr'],
        },
        {
          title: 'Le DevOps, encore une histoire de collaboration entre équipe',
          abstract:
            'Au delà de la volonté de fluidifier les livraisons pour réduire du time to market, le DevOps garde une dimension collaborative importante, obligeant des équipes aux fonctionnements différents à collaborer',
          tags: [
            'agilite',
            'operation',
            'developpement',
            'devops',
            'exploitation',
            'observabilite',
          ],
          lang: ['fr'],
        },
        {
          title: "L'outillage du devops expert",
          abstract:
            'Le DevOps par la pratique avec une présentation des outils disponibles et les bonnes pratiques associées',
          tags: [
            'agilite',
            'operation',
            'developpement',
            'devops',
            'observabilite',
            'ansible',
            'vagrant',
            'terraform',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Avignon', 'Nimes', 'Lyon', 'Montpellier', 'Aix-en-Provence'],
      contacts: {
        twitter: 'ericmeallier',
        mail: 'eric@meallier.fr',
      },
    },
    {
      since: '2015-05-29',
      name: 'Sébastien Pesme-cansar',
      bio:
        "Consultant Mobilité & Chef de projets Digital, j'interviens dans la conception et la réalisation d'applications Web, Mobile & Objets connectés.",
      picture: 'img/baggers/photo_spc.jpg',
      websites: [
        {
          name: 'Viadeo',
          url: 'http://goo.gl/gQ7N4O',
        },
        {
          name: 'Web',
          url: 'https://goo.gl/zeHwll',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Tendances des Applications Mobiles (Android & iOS)',
          abstract:
            "Les tendances en terme de mobilité, d'approche, de technologies, d'interfaces, de fonctionnalités. Des conseils sur vos applications mobiles existantes. Des astuces sur ce qu'il faut faire et ne pas faire.",
          tags: [
            'Android',
            'iOS',
            'Objets connectés',
            'IoT',
            'HealthKit',
            'Google Fit',
          ],
          lang: ['fr'],
        },
        {
          title: 'Initiation aux Objets Connectés',
          abstract:
            "Vous entendez parler des objets connectés, mais vous ne savez pas quel côté l'aborder. Les termes Wifi, BLE vous sont familiers, mais vous ne voyez pas le rapport avec Big Data, Plateforme, Lora, SigFox, ZigBee, HealthKit, HomeKit & Google Fit. Une petite session de présentation vous permettra de démarrer plus rapidement.",
          tags: [
            'Android',
            'iOS',
            'Objets connectés',
            'IoT',
            'HealthKit',
            'Google Fit',
          ],
          lang: ['fr'],
        },
        {
          title: 'Ateliers Objets Connectés',
          abstract:
            "Une initiation n'est pas nécessaire ? Vous souhaitez rentrer dans le vif du sujet. Discutons d'un plan concret. Quelles fonctionnalités ? Quelles technologies ? Sur quel timing ?",
          tags: [
            'Android',
            'iOS',
            'Objets connectés',
            'IoT',
            'HealthKit',
            'Google Fit',
          ],
          lang: ['fr'],
        },
        {
          title: 'HealthKit & Google Fit',
          abstract:
            'Présentation détaillée des solutions HealthKit & Google Fit. Les avantages et inconvénients des 2 plateformes, leurs contraintes, les évolutions à suivre. Et pourquoi il faut y aller.',
          tags: [
            'Android',
            'iOS',
            'Objets connectés',
            'IoT',
            'HealthKit',
            'Google Fit',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'iguane39',
        mail: 'sebastien@pesme.net',
      },
    },
    {
      since: '2015-06-17',
      name: 'David Martin',
      bio: 'Directeur du Pôle Conseil et Consultant Java',
      picture:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMMAAAAJDYxMmUwOGU4LTYwMjktNDMxYi1hOWVmLWQxODdkNDI3Njk1Yg.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.ippon.fr/author/dmartin',
        },
      ],
      location: 'Nantes, Paris',
      sessions: [
        {
          title: 'API Web : Best pratices',
          abstract:
            "(présentation) Un projet d'API Web ? Autant partir sur de bonnes bases !",
          tags: ['Java', 'API Web', 'REST'],
          lang: ['fr'],
        },
        {
          title: 'Hypermedia API',
          abstract:
            "(présentation) Découvrez et comprenez l'intérêt de cette contrainte du style d'architecture REST dans vos API Web",
          tags: ['Java', 'API Web', 'REST'],
          lang: ['fr'],
        },
        {
          title: 'API Web et Cache',
          abstract:
            "(présentation) La performance de vos API Web ne tient peut être qu'à un usage pertinent du cache. Comprenez quand et comment en tirer profit.",
          tags: ['Java', 'API Web', 'REST'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes', 'Rennes', 'Paris'],
      contacts: {
        twitter: '_dmartin_',
        mail: 'dmartin.pro@gmail.com',
      },
    },
    {
      since: '2015-06-18',
      name: 'Jean-françois Le Foll',
      bio: 'Développeur passionné et Scrum master',
      picture: 'https://jefflefoll.github.io/images/small_jeff_lefoll.jpg',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/jefflefoll',
        },
        {
          name: 'Web',
          url: 'https://jefflefoll.github.io',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/jefflefoll',
        },
      ],
      location: 'Brest',
      sessions: [
        {
          title: 'Introduction au TDD',
          abstract:
            "Présentation de 45min-1hr permettant de découvrir le Test Driven Development. Présentation rapide suivie d'une démonstration de live coding car le TDD est avant tout une pratique de développement qui s’apprend par la pratique.",
          tags: [
            'Développement',
            'Java',
            'TDD',
            'Agile',
            'Scrum',
            'Serious Games',
            'Meddlers',
            'XP',
          ],
          lang: ['fr'],
        },
        {
          title: 'Jouons avec votre organisation',
          abstract:
            'Grâce au Meddlers de Jurgen Appelo (Management 3.0). Ce serious game va vous permettre de modéliser votre structure organisationnelle et de vous servir de cette modélisation comme base pour réfléchir à des améliorations. Présentation faite la 1ère fois au ScrumWine 13.5.',
          tags: [
            'Développement',
            'Java',
            'TDD',
            'Agile',
            'Scrum',
            'Serious Games',
            'Meddlers',
            'XP',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Brest'],
      contacts: {
        twitter: 'jefflefoll',
        mail: 'jeff.lefoll@outlook.fr',
      },
    },
    {
      since: '2015-07-13',
      name: 'Nicolas Muller',
      bio:
        "Développeur Java / Go / Docker depuis bientôt 15 ans dans le monde du BTP JEE/Spring. JugLeader du @MarsJUG, Membre du @LabAixbidouille, passionné par la bidouille et surtout travaillant chez @TreeptikTeam en tant qu'associé / CTO sur www.cloudUnit.fr, le PaaS Java.",
      picture:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/0fe/013/03d214d.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/mullernicolas',
        },
        {
          name: 'Web',
          url: 'http://treeptik.fr/language/fr/blog/',
        },
      ],
      location: 'Aix-Marseille (et à distance)',
      sessions: [
        {
          title: 'Docker : des containers de la cale au pont !',
          abstract:
            "Je vous propose de vous faire voyager et découvrir le monde merveilleux de la logistique et du transport du XXI siècle : les containers sous Docker et son écosystème (machine, swarm, compose). Speaker à Devoxx 2014 sur ce thème et dans des JUG, je serai à nouveau heureux de vous présenter ce nouveau mode de virtualisation légère tout en vous faisant un retour d'expérience sur différents projets. Nous l'utilisons depuis la version 0.3 alors qu'on atteint la 1.7. Docker est le buzzword de 2014 et le sera encore en 2016 !",
          tags: [
            'Docker',
            'consul.io',
            'golang',
            'Cloud',
            'PaaS',
            'InfluxDB',
            'Influx',
            'Time-series',
            'analytics',
          ],
          lang: ['fr'],
        },
        {
          title:
            'InfluxDB, la base de données chronologique, opensource autonome',
          abstract:
            "Après l'émergence des bases NOSQL de ces dernières années, voici une nouvelle espèce : la base de données chronologiques, parfaite pour accueillir les données de métrologie. Dans cette session, vous découvrirez cet outil autonome écrit en GO et doté d'un SQL-Like avec un support HTTP natif. Une live-session vous présentera comment l'interfacer avec votre langage préféré Java dans une application JEE ou Spring. Que ce soient pour vos logs ou des évènements métiers, InfluxDB pourrait bien devenir votre backend préféré pour vos métriques. Session présentée à Devoxx2015 et au RivieraDev2015 à Nice.",
          tags: [
            'Docker',
            'consul.io',
            'golang',
            'Cloud',
            'PaaS',
            'InfluxDB',
            'Influx',
            'Time-series',
            'analytics',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Aix-en-Provence'],
      contacts: {
        twitter: 'zepouet',
        mail: 'n.muller@treeptik.fr',
      },
    },
    {
      since: '2015-07-23',
      name: 'Jérôme Mainaud',
      bio:
        "Architecte logiciel, je travaille dans l'équipe R&D de Zeenea, éditeur d'un catalogue de données.",
      picture:
        'https://fr.gravatar.com/avatar/4f9deaec42efccd26cb9af839b3afde2.jpg?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.ippon.fr/author/jmainaud/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/jxerome',
        },
      ],
      location: 'Paris, Sud parisien',
      sessions: [
        {
          title: 'Introduction à Apache Cassandra',
          abstract:
            "Initiation au fonctionnement de Cassandra, cette présentation a pour vocation de présenterer au développeur ou à l'administrateur novice les concepts et le fonctionnement d'une des plus importantes bases NoSQL actuelles.",
          tags: ['Cassandra'],
          lang: ['fr'],
        },
        {
          title: "Elasticsearch: De l'importance du mapping",
          abstract:
            "Exemples de recherches exécutées en direct pour comprendre qu'avec Elasticsearch la définition d'un mapping c'est pas obligatoire, mais seulement indispensable.",
          tags: ['Elasticsearch'],
          lang: ['fr'],
        },
        {
          title: 'Elasticsearch, au fait, comment ça marche ?',
          abstract:
            'Voyage pour découvrir les notions mises en œuvre dans un moteur de recherche comme Elasticsearch.',
          tags: ['Elasticsearch'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'jxerome',
        mail: 'jmainaud@zeenea.com',
      },
    },
    {
      since: '2015-07-29',
      name: 'Vincent Lainé',
      bio:
        "Architecte .NET, développeur et curieux de nature, j'ai de plus en plus la tête dans le cloud et sur mon mobile",
      picture: '',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/phenixdotnet',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/vlaine',
        },
      ],
      location: 'Rennes',
      sessions: [
        {
          title: 'Architecture Cloud sur Azure en C#',
          abstract:
            "Vous souhaitez migrer sur le cloud Azure mais vous ne savez pas comment ? Vous avez déjà fait le saut et vous souhaitez discuter de l'architecture mise en place ? Au cours de cette session nous pourrons discuter des différents composants disponible sur Azure et de leurs forces et faiblesses ainsi que les patterns d'architecture associés",
          tags: [
            'Développement',
            '.NET',
            'C#',
            'Agile',
            'Scrum',
            'Cloud',
            'Azure',
            'Windows Phone',
            'Xamarin',
            'Visual Studio Online',
            'TFS',
          ],
          lang: ['fr'],
        },
        {
          title: 'Développer en C# pour le cloud',
          abstract:
            'Découvrez (ou redécouvrez) les différents design pattern associés au développement sur le cloud.',
          tags: [
            'Développement',
            '.NET',
            'C#',
            'Agile',
            'Scrum',
            'Cloud',
            'Azure',
            'Windows Phone',
            'Xamarin',
            'Visual Studio Online',
            'TFS',
          ],
          lang: ['fr'],
        },
        {
          title: "L'agile supporté par Visual Studio Online / TFS 2015",
          abstract:
            "Un tours d'horizon des possibilités offertes par VSo/TFS 2015 pour supporter votre process agile",
          tags: [
            'Développement',
            '.NET',
            'C#',
            'Agile',
            'Scrum',
            'Cloud',
            'Azure',
            'Windows Phone',
            'Xamarin',
            'Visual Studio Online',
            'TFS',
          ],
          lang: ['fr'],
        },
        {
          title: 'Développer des applications mobile avec Xamarin',
          abstract:
            'Initiation au développement cross-plateform avec Xamarin en C#',
          tags: [
            'Développement',
            '.NET',
            'C#',
            'Agile',
            'Scrum',
            'Cloud',
            'Azure',
            'Windows Phone',
            'Xamarin',
            'Visual Studio Online',
            'TFS',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: '',
        mail: 'phenixdotnet@gmail.com',
      },
    },
    {
      since: '2015-08-12',
      name: 'Stéphane Schildknecht',
      bio:
        "Spécialiste des bases de données et de PostgreSQL depuis plus de 15 ans. Membre fondateur et premier président de PostgreSQLFr. Dirigeant de Loxodata, société d'expertise autour de PostgreSQL.",
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/sasjob',
        },
        {
          name: 'Web',
          url: 'http://www.loxodata.com',
        },
      ],
      location: 'Vesoul, Paris',
      sessions: [
        {
          title: 'PostgreSQL : Reprenons le contrôle de nos données',
          abstract:
            "À l'heure où les utilisateurs de solutions propriétaires se sentent de plus en plus pris en otage, pourquoi ne pas se tourner vers la base de données libre de référence ? Nous verrons les avantages de cette solution  Non seulement en terme d'ouverture, mais également en termes de fonctionnalités.",
          tags: [
            'PostgreSQL',
            'Postgres',
            'Haute-disponibilité',
            'Database',
            'Bases de données',
          ],
          lang: ['fr'],
        },
        {
          title: 'PostgreSQL : La haute-disponibilité, oui, mais comment ?',
          abstract:
            "La haute-disponibilité est devenue un mantra. Mais qu'entendons-nous par là ? Et lorsque ce terme a été défini, comment peut-on l'obtenir. Nous verrons ensemble quelles architecures peuvent être construites pour garantir la disponibilité des données des bases PostgreSQL.",
          tags: [
            'PostgreSQL',
            'Postgres',
            'Haute-disponibilité',
            'Database',
            'Bases de données',
          ],
          lang: ['fr'],
        },
        {
          title: 'PostgreSQL : Les différents type de réplication',
          abstract:
            "Nous passerons en revue les différentes possibilités de répliquer les données avec PostgreSQL. Solutions internes ou externes, qu'est-ce qui les différencie ?",
          tags: [
            'PostgreSQL',
            'Postgres',
            'Haute-disponibilité',
            'Database',
            'Bases de données',
          ],
          lang: ['fr'],
        },
        {
          title:
            "Slony-ctl : Simplifier l'administration d'une réplication PostgreSQL",
          abstract:
            "Nous verrons comment Slony-ctl simplifie l'administration d'une réplication PostgreSQL obtenue à l'aide de Slony.",
          tags: [
            'PostgreSQL',
            'Postgres',
            'Haute-disponibilité',
            'Database',
            'Bases de données',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Vesoul', 'Besançon', 'Belfort', 'Mulhouse', 'Nancy'],
      contacts: {
        twitter: 'saschild',
        mail: 's.schildknecht@loxodata.com',
      },
    },
    {
      since: '2015-08-28',
      name: 'Cédric Longo',
      bio:
        "Anciennement devops dans le domaine du Jeu vidéo, nouvellement créateur d'entreprise. Mention spéciale au développement en Java",
      picture:
        'https://lh6.googleusercontent.com/-uIJAnywy0hM/VOjcAR_EWSI/AAAAAAAAHGE/PkZUYbadokc/w820-h819-no/RD071.jpg',
      websites: [
        {
          name: 'Google+',
          url: 'https://plus.google.com/+CédricLongo',
        },
      ],
      location: 'Montpellier',
      sessions: [
        {
          title: 'Java 8, chez les inuits',
          abstract:
            "Alors que les sorties des nouvelles versions de Java reprennent un ryhtme régulier, certains n'ont pas encore regardé les nouveautés de Java 8, pourtant jugé comme l'une (pour ne pas dire LA) des plus importantes mises à jour de Java. Cette présentation propose de rattraper le retard par un tour d'horizon des nouveautés apportées au travers d'exemples et se termine en proposant de continuer à explorer ces nouveautés par l'intermédiaire d'un exercise proposé de mise en application.",
          tags: ['Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Montpellier'],
      contacts: {
        twitter: 'u2032',
        mail: 'cedric.longo@gmail.com',
      },
    },
    {
      since: '2015-09-24',
      name: 'Gregory Estrade',
      bio:
        "Directeur R&D de Lyra-Network, software & hardware hacker, reverse-engineer, philosophe agile auto-proclamé. Ou Disruptive Innovation Lead Strategist, Instant Expert in Everything, ça dépend. Membre de l'association Silicium de préservation du patrimoine micro-informatique.",
      picture: 'http://torlus.github.io/hat_pro.png',
      websites: [
        {
          name: 'Web',
          url: 'http://lvt.tl/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Torlus',
        },
        {
          name: 'Web',
          url: 'http://www.silicium.org/',
        },
      ],
      location: 'Toulouse',
      sessions: [
        {
          title: 'Les nouveaux enjeux du paiement.',
          abstract:
            "Etat de l'art, sécurité, les moyens de paiement et leur avenir, les enjeux du click-and-mortar, SEPA, marketplaces.",
          tags: [
            'Software development',
            'Hardware hacking',
            'Optimisation',
            'Telecom & Réseau',
            'FPGA',
            'Philosophie',
            'Agilité',
          ],
          lang: ['fr'],
        },
        {
          title: 'IoT, software & hardware hacking, FPGA.',
          abstract:
            "Vous aimez bricoler, prototyper? Moi aussi. Invitez-moi pour de l'aide ou du conseil sur un sujet de votre choix.",
          tags: [
            'Software development',
            'Hardware hacking',
            'Optimisation',
            'Telecom & Réseau',
            'FPGA',
            'Philosophie',
            'Agilité',
          ],
          lang: ['fr'],
        },
        {
          title: "Café philosophique, agilité, histoire de l'informatique.",
          abstract:
            "Ayant eu depuis 30 ans les mains sur un clavier (En commençant sur un TRS-80) et étant membre de l'association Silicium, je vous propose de deviser autour de tout ce qui fait l'actualité, et qui tend à montrer que quoi qu'on fasse, l'histoire vient souvent à se répéter.",
          tags: [
            'Software development',
            'Hardware hacking',
            'Optimisation',
            'Telecom & Réseau',
            'FPGA',
            'Philosophie',
            'Agilité',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'Torlus',
        mail: 'gregory.estrade@gmail.com',
      },
    },
    {
      since: '2015-10-23',
      name: 'Stéphane Lagraulet',
      bio:
        "Architecte Java chez Ippon Technologies Bordeaux, Stéphane est le référent du pôle conseil pour la région Sud Ouest. Il intervient sur des missions de conseil, de conception ou de développement. Ses domaines de prédilection sont : les applications Java, l'architecture de micro services, les bases de données NoSQL comme MongoDB et les moteurs de recherche basés sur Lucene (SolR / Elasticsearch).",
      picture:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/251/2cc/3efae7d.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.ippon.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/stephanlagraulet',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Vers une architecture de microservices',
          abstract:
            "Comment l'architecture de microservices est en train de s'imposer. Retour d'expérience sur la mise en place d'une architecture autour des technologies Spring Boot / Zookeeper.",
          tags: ['SolR', 'MicroServices'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'stephlag',
        mail: 'slagraulet@ippon.fr',
      },
    },
    {
      since: '2015-10-29',
      name: 'Gilles Dehaudt',
      bio: 'Admin Sys Linux Lillois. Dockerise et ansibelise à tours de bras.',
      picture:
        'https://s.gravatar.com/avatar/b10c22e79d3f4f4996d6352e3e6002d8?s=80',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/pub/gilles-dehaudt/19/a96/1b7',
        },
      ],
      location: 'Région lilloise',
      sessions: [
        {
          title: "Docker en production, retour d'expérience",
          abstract:
            "Docker, on en a tous entendu parler. Beaucoup s'y sont mis ou ont envie de s'y mettre. Mais qui est allé jusqu'en production avec ? Thibault Duchateau et moi-même vous proposons, au-travers de cette présentation plutôt orientée organisation que technique, un retour d'expérience sur la mise en place de Docker chez un grand nom du e-commerce français.",
          tags: ['Linux', 'Système', 'Docker'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'tonton1728',
        mail: 'tonton1728@gmail.com',
      },
    },
    {
      since: '2015-10-29',
      name: 'Faten Habachi',
      bio:
        'UX Design Manager chez Ippon Technologies, Designer Web et Mobile depuis plus de 10 ans, Ergonome, UX Designer',
      picture: 'http://fatenhabachi.com/images/fatenhabachi.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/fatenhabachi',
        },
        {
          name: 'Web',
          url: 'http://ippon.fr',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Introduction au Design Thinking et approche UX',
          abstract:
            "Comprendre l'approche Design Thinking et le jargon lié aux activités UX",
          tags: [
            'UX',
            'UX Designer',
            'Ergonomie',
            'User interface',
            'Personas',
            'Design Thinking',
          ],
          lang: ['fr'],
        },
        {
          title: "L'empathie dans une approche UX",
          abstract: "Savoir créer une carte de l'empathie dans une approche UX",
          tags: [
            'UX',
            'UX Designer',
            'Ergonomie',
            'User interface',
            'Personas',
            'Design Thinking',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'fatenh',
        mail: 'faten.habachi@gmail.com',
      },
    },
    {
      since: '2015-10-29',
      name: 'Thibault Duchateau',
      bio:
        "Développeur passionné par l'écosystème Java, le Web, l'Open Source et tout ce qui gravite autour de la mouvance DevOps. Lead dev sur le projet Dandelion.",
      picture:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/24e/0b5/330eaba.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://dandelion.github.io/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/tduchateau',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/tduchateau',
        },
      ],
      location: 'Région lilloise',
      sessions: [
        {
          title: "Docker en production, retour d'expérience",
          abstract:
            "Docker, on en a tous entendu parler. Beaucoup s'y sont mis ou ont envie de s'y mettre. Mais qui est allé jusqu'en production avec ? Gilles Dehaudt et moi-même vous proposons, au-travers de cette présentation plutôt orientée organisation que technique, un retour d'expérience sur la mise en place de Docker chez un grand nom du e-commerce français.",
          tags: ['Java', 'Web', 'Docker', 'Industrialisation', 'DevOps'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'tduchateau',
        mail: 'thibault.duchateau@gmail.com',
      },
    },
    {
      since: '2015-11-08',
      name: 'Sun Tan',
      bio:
        'Sun is a Senior Software Engineer and a Java developer with 15 years experience, currently working at Red Hat. Sun is involved in the Eclipse Che project from the very beginning as a core contributor. He recently joined the JKube project team. Sun has the community in his heart and is devoted to open source. He has been contributing to open source softwares while working for companies like Nuxeo, Serli and now Red Hat. Today, his adventure continues in sharing his source code, promoting great talks and speakers at his local Paris Java User Group, coding with Eclipse Che and enjoying his new hobby: brewing beer in his kitchen.',
      picture: 'https://avatars3.githubusercontent.com/u/650571?v=3&s=460',
      websites: [
        {
          name: 'Web',
          url: 'https://blog.sunix.org',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/sunix',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Java dans Kubernetes pour les nuls',
          abstract:
            "Kubernetes, ca à l'air vraiment sympa, pour le scaling, la reproductibilité et tout et tout ... tout le monde en parle, et en plus c'est hype ! Alors, c'est le moment de passer dans le cloud et de migrer nos applications Java vers Kubernetes !<br/>Oui mais ... sauf que ... il y'a trop de fichiers YAML à maintenir et nous detestons le YAML ! Et en plus de maintenir l'application Java, il faut <ul><li>écrire et maintenir des Dockerfiles</li><li>écrire et maintenir plein de fichiers YAML</li><li>configurer et gérer la CI/CD pour le déploiement</li><li>etc.</li></ul>Oui pendant ce talk nous allons souffrir 👿 ... mais je vais vous tenir par la main et vous guider. Et c'est promis, vous sortirez de ce talk en sachant migrer vos applications Java dans Kubernetes en seulement 5 lignes de XML 🤣 avec le projet JKube",
          tags: [
            'Kubernetes',
            'Java',
            'Openshift',
            'Docker',
            'Podman',
            'Container',
            'Cloud',
            'DevOps',
          ],
          lang: ['fr'],
        },
        {
          title: 'Kubernetes CRD en action ... avec Java !',
          abstract:
            "Knative, Tekton, Istio, etc. Ce sont tous des extensions à Kubernetes, y ajoutant de nouvelles fonctionnalités que l'on peut installer et désinstaller. Toutes ces extensions utilisent des CRD. Qu'est ce qu'un CRD ? C'est l'acronyme de CustomResourceDefinition. Les CRDs sont utilisés dans la plupart des operators dans Kubernetes. Durant ce talk, je vais vous présenter les Operators dans Kubernetes, les CRDs et quelques bases de Kubernetes. Mais surtout nous apprendrons à étendre Kubernetes avec le langage de programmation Java. Nous utiliserons le fabric8/kubernetes-client qui est le client Java le plus complet pour interagir avec Kubernetes. Nous utiliserons également le Java Operator SDK. Venez et rejoingner moi pour cette session demo-driven et apprendre les Kubernetes CRDs en action avec Java.",
          tags: ['Kubernetes', 'Java', 'Operator', 'Cloud', 'CRD', 'DevOps'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: '__sunix_',
        mail: 'sunix@sunix.org',
      },
    },
    {
      since: '2015-11-19',
      name: 'Rachid Zarouali',
      bio:
        "Responsable SI, Manager et Architecture passionné de l'opensource, toujours en quête de nouveaux challenges ",
      picture:
        'https://media.licdn.com/mpr/mpr/shrink_100_100/p/7/000/22e/134/21fe338.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/rachidzarouali',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/xinity',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: "Docker: decouverte et retour d'experience",
          abstract:
            "Je vous invite à decouvrir par une rapide introduction et au travers de cas concrêts d'utilisations (environnements de developpements windows, plateforme de production orientée démo ...), sans buzzword, sans charabia, tout simplement, que vous soyez dev ou ops",
          tags: ['Docker', 'Monitoring', 'grafana', 'supervision', 'Linux'],
          lang: ['fr'],
        },
        {
          title: 'Monitoring et Alerting opensource',
          abstract:
            "Si vous pensez qu'une solution de monitoring est forcement payante et/ou en mode SaaS ? Je vous propose de vous prouver le contraire ou comment via des outils opensource simple, puissants et ouverts, vous pouvez adresser vos problématiques de qualité de service. ",
          tags: ['Docker', 'Monitoring', 'grafana', 'supervision', 'Linux'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'xinity',
        mail: 'rzarouali+bbl@gmail.com',
      },
    },
    {
      since: '2015-11-25',
      name: 'Simone Civetta',
      bio:
        "Simone est développeur Objective-C et Swift chez Xebia. Depuis 2010, il a réalisé de nombreuses applications B2B et B2C pour iPhone, iPad et Apple Watch. Pionnier de Swift, à partir de fin 2014, il utilise uniquement le nouveau langage Apple dans l'intégralité de ses développements mobiles.",
      picture:
        'https://s3.amazonaws.com/civetta-works/works/personal/profile.png',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.xebia.fr',
        },
        {
          name: 'Web',
          url: 'http://viteinfinite.com',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/viteinfinite',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Swift dans la vraie vie',
          abstract:
            "Au cours de \"Swift dans la vraie vie\" vous assisterez à un retour d'expérience concernant l'utilisation du dernier langage d'Apple - maintenant Open Source - dans deux projets mobiles utilisés en production par quelques milliers d'utilisateurs.\nÀ travers une analyse des points de force et faiblesse de ce langage, vous comprendrez pourquoi il n'est pas trop osé de commencer tout de suite à développer votre prochaine application iOS en Swift.",
          tags: ['iOS', 'Swift', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'Tests et couverture de code pour Swift',
          abstract:
            'Une des annonces de la WWDC 2015 qui nous a le plus surpris intéressés a été, sans doute, le support de métriques de couverture de code en Swift. Grâce à ce BBL vous pourrez comprendre les différences de fonctionnalités par rapport au passé et comment intégrer ce KPI dans votre travail quotidien.',
          tags: ['iOS', 'Swift', 'Mobile'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'viteinfinite',
        mail: 'scivetta+bbl@xebia.fr',
      },
    },
    {
      since: '2015-11-26',
      name: 'Fabien Mirault',
      bio:
        "Développeur iOS depuis 6 ans, Fabien a eu l'occasion de réaliser de nombreuses missions innovantes disposant d'une forte audience. Initialiement développeur AS3 (Flash / AIR), il reste curieux de tout ce qui se fait dans le milieu du mobile pour toujours chercher à en tirer des enseignements pour les projets futurs.",
      picture:
        'http://training.xebia.fr/wp-content/uploads/2016/07/fabienmirault-200x200.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.xebia.fr',
        },
        {
          name: 'Web',
          url: 'http://fabienmirault.fr',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Swift dans la vraie vie',
          abstract:
            "Au cours de \"Swift dans la vraie vie\" vous assisterez à un retour d'expérience concernant l'utilisation du dernier langage d'Apple - maintenant Open Source - dans deux projets mobiles utilisés en production par quelques milliers d'utilisateurs.\nÀ travers une analyse des points de force et faiblesse de ce langage, vous comprendrez pourquoi il n'est pas trop osé de commencer tout de suite à développer votre prochaine application iOS en Swift.",
          tags: ['iOS', 'Swift', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'Le futur de la télévision : les applications !',
          abstract:
            "Les applications natives sont partout autour de nous, sur nos smartphones, tablettes, et depuis peu sur nos télévisions. Le nombre d'applications, et les communautés qui les propulsent, ne cessent de croitre. Les utilisateurs eux aussi suivent le mouvement, à la recherche d'expériences innovantes, en complément de celles vécues sur leurs autres terminaux. En prenant pour exemple le développement de l'application Xebia TV, nous reviendrons donc sur les intérêts et enjeux du développement TVOS et Android TV. Nous aborderons les quelques obstacles liés à la jeunesse de ces langages, et mettrons en lumière toutes les possibilités offertes par ces plateformes.",
          tags: ['tvOS', 'Android TV', 'Objective-C', 'Swift'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'magici1',
        mail: 'fmirault+bbl@xebia.fr',
      },
    },
    {
      since: '2015-12-09',
      name: 'Fabrice Sznajderman',
      bio: 'Développeur Java / Scala / Web @ Zenika',
      picture:
        'http://1.gravatar.com/avatar/efa687ad8e28474372463d31cbe80c2f?size=200',
      websites: [
        {
          name: 'Web',
          url: 'https://thecoderwriter.wordpress.com/',
        },
      ],
      location: 'Paris, Ouest parisien, la Défense',
      sessions: [
        {
          title: "Scala de 0 à l'infini",
          abstract:
            'Cette présentation a pour objectif de poser les bases du language Scala et de monter graduellement dans les tours pour aborder des fonctionnalités plus avancées du languages. Après cette présentation, les termes implicit, monade, fonction partielle, pattern matching et closure ne devrait plus avoir de secret pour vous. Le seul pré-requis est de connaitre un language de programmation.',
          tags: ['Java', 'Scala', 'Programmation fonctionnelle', 'sbt'],
          lang: ['fr'],
        },
        {
          title: 'SBT et pourquoi pas?',
          abstract:
            "SBT est un outil de build mais pas que,l'idée de cette présentation est de mettre en avant ce que SBT peut apporter en plus dans le quotidien du développeur comparé aux outils reconnus tel que maven. Nous parlerons ici de son utilisation au sein de projets Java même s'il s'est développé conjointement avec le language Scala. Durant cette présentation, nous verrons les fonctionnalités clefs qui pourront influencer vos choix sur vos projets présents ou futurs.",
          tags: ['Java', 'Scala', 'Programmation fonctionnelle', 'sbt'],
          lang: ['fr'],
        },
        {
          title: 'Lagom, Architecture microservices réactive',
          abstract:
            "Connaissez-vous Lagom ? Le framework de microservice réactif. L'objectif de ce framework est de mettre en place une architecture autour des micro-services facilement, de manière asynchrone et basée sur l'approche CQRS et Event sourcing. Durant cette présentation, nous découvrirons la philosophie et les concepts clefs du framework. Nous verrons également les technologies, les librairies et l'architecture sur lesquels il repose. Nous verrons enfin la simplicité avec laquelle on peut implémenter et démarrer un ensemble de microservice au travers d’un exemple les mains dans le code.",
          tags: ['Java', 'Scala', 'Programmation fonctionnelle', 'sbt'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'fsznajderman',
        mail: 'fabszn@gmail.com',
      },
    },
    {
      since: '2015-12-23',
      name: 'Emmanuel Demey',
      bio:
        'Consultant et Formateur Web - Directeur Technique de Zenika Lille, Google Developer Expert Web Technologies',
      picture:
        'https://pbs.twimg.com/profile_images/799175687097688064/Y2TWhwYL.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://gillespie59.github.io/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title:
            'Angular2, ou comment faciliter la migration de votre application AngularJS',
          abstract:
            "BBL permettant de présenter les nouvelles fonctionnalités d'Angular2. A la fin de cette session, vous connaîtrez comment faciliter la migration de votre application AngularJS existante, en implémentant tout d'abord les bonnes pratiques reconnues par la communauté, puis en migrant composant par composant l'ensemble de votre application",
          tags: ['AngularJS', 'Angular', 'TypeScript'],
          lang: ['fr'],
        },
        {
          title: "Il n'y a pas que React et Angular dans la vie, voici VueJS",
          abstract:
            'A travers ce BBL, je ferai un livecoding permettant de présenter les différents concepts de la librairie VueJS',
          tags: ['AngularJS', 'Angular', 'React', 'JavaScript', 'VueJS'],
          lang: ['fr'],
        },
        {
          title: 'Les progressive webapp, à quoi ça sert ? ',
          abstract:
            'A travers ce BBL, nous allons rendre une application existante compatible avec les standards derrière le terme Progressive Webapp',
          tags: ['JavaScript', 'PWA', 'Offline', 'Mobile', 'ServiceWorker'],
          lang: ['fr'],
        },
        {
          title: 'Développez votre prochaine application Web avec Firebase ',
          abstract:
            "L'offre Firebase proposée par Google est une galaxie. Et malheureusement nous n'aurons pas le temps de tout aborder. Nous allons principalement aborder les produits permettant des stocker des donneées (FireStore), pour gérer l'authentification, pour héberger vos SPA utilisant votre framework JavaScript de prédilection ou encore les Cloud Functions. Si vous avez toujours eu envie de développer une nouvelle application Web, mans sans trop se soucier de la partie back ou encore de la base de données, Firebase peut être la réponse à vos besoins. ",
          tags: ['JavaScript', 'GCP', 'Firebase'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'EmmanuelDemey',
        mail: 'emmanuel.demey@zenika.com',
      },
    },
    {
      since: '2018-08-30',
      name: 'Sébastien Descamps',
      bio: 'Consultant et Formateur - Directeur Technique de Zenika Bordeaux',
      picture:
        'https://en.gravatar.com/userimage/24590165/88760e57f007fead91f17535e822da93.jpg?size=200',
      location: 'Bordeaux',
      sessions: [
        {
          title: 'L’héritage en Go',
          abstract:
            "Le Go est un langage que l'on aime ou que l'on déteste. Est-ce un langage objet ? ou pas ? L'objectif de cette présentation est de revenir sur une notion présente dans les langages objets : l'héritage. Nous verrons ensemble ce que propose Go dans ce domaine.",
          tags: ['Go'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'seb_express',
        mail: 'sebastien.descamps@gmail.com',
      },
    },
    {
      since: '2015-12-24',
      name: 'Youen Chéné',
      bio:
        'CTO @ Creative Data / Saagie, activiste @normandyjug @codeursenseine @devoxx4kidsfr',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.youenchene.fr/',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: 'Le Big Data pour les Javaistes et le reste d’entre nous',
          abstract:
            'Le Big Data, c’est pour nombre d’entre vous c’est une pile de buzz words sur des slides. Pourtant le big data c’est en place chez les startups depuis longtemps et cela fonctionnait même avant que Spark envahisse les sujets de conférences.Pendant une heure, on fera un tour d’horizon des différentes technologies (pas forcément à la mode) qui vous permettront de profiter des avantages des outils du Big Data. Pour chaque technologie, on verra les points principaux et surtout un exemple avec du code. Au programme : hdfs, impala, spark, scoop, R etc…',
          tags: ['Big Data', 'Hadoop', 'Impala', 'Spark'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Rouen'],
      contacts: {
        twitter: 'youen_chene',
        mail: 'youen.chene@gadz.org',
      },
    },
    {
      since: '2016-01-10',
      name: 'Fabien Arrault',
      bio: 'Architecte JavaEE chez Ippon Technologies',
      picture: 'https://dl.dropboxusercontent.com/u/29509621/farrault.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.ippon.fr/author/Fabien_ARRAULT/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/fabien-arrault-b52b324',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Spring Boot : on ouvre le capot et on démonte tout !',
          abstract:
            "Spring Boot facilite grandement la mise en place d'une application utilisant l'écosystème Spring. Oui mais voilà son usage se rapproche souvent de la magie : ça marche, mais difficile de savoir comment... Lorsqu'il s'agit de tuner un peu de la configuration, de la débugguer, on se retrouve potentiellement devant un mur... Le but de cette conférence est de rentrer dans les mécanismes internes de Spring Boot, essentiels pour qui veut pouvoir maîtriser entièrement la bête. On parlera de @Bean et de @Configuration bien sûr, mais aussi de @Conditional, d'@AutoConfiguration et de @ConfigurationProperties",
          tags: ['Spring', 'Spring Boot'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'farrault',
        mail: 'farrault@ippon.fr',
      },
    },
    {
      since: '2016-01-21',
      name: 'Karol Chmist',
      bio:
        'Independent Functional Software Developer. Après plusieurs années de développement Java, j’ai découvert la programmation fonctionnelle. Je suis convaincu qu’appliquer les bases mathématiques au code est la meilleure façon d’obtenir un résultat robuste et sûr. Au quotidien, je travaille avec Scala, mais je poursuis mes recherches sur d’autres langages (Haskell, SML, Nix, Idris).',
      picture:
        'http://www.gravatar.com/avatar/757cdab5633c1935bb37b24b1fe2729f?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://www.chmist.com',
        },
        {
          name: 'Web',
          url: 'https://blog.chmist.com',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Introduction à la Programmation fonctionnelle avec Scala',
          abstract:
            'Première approche de la Programmation fonctionnelle et de Scala. Nous aborderons les concepts de base (Composition, Immutabilité, Transparence référentielle) et les différences par rapport à la programmation impérative et orientée objet.',
          tags: [
            'Functional Programming',
            'Programmation fonctionnelle',
            'Scala',
            'Haskell',
            'SML',
            'Idris',
            'Nix',
            'Monad',
            'Lenses',
          ],
          lang: ['fr'],
        },
        {
          title: 'Théorie des catégories pour les programmeurs',
          abstract:
            "En étudiant la programmation fonctionnelle, on rencontre des concepts issus de la théorie des catégories. Découvrons-les, avec des exemples simples et pratiques en Scala. Nous démystifierons les notions de monoïdes, foncteurs, monades et bien d'autres, lors d’un parcours informel. Enfin, nous verrons comment elles nous permettent de progresser en programmation fonctionnelle. ",
          tags: [
            'Functional Programming',
            'Programmation fonctionnelle',
            'Scala',
            'Haskell',
            'SML',
            'Idris',
            'Nix',
            'Monad',
            'Lenses',
          ],
          lang: ['fr'],
        },
        {
          title: 'Parcours sur des monades',
          abstract:
            'Monade est une structure très répandue et s’avère particulièrement utile dans la programmation fonctionnelle. Détaillons ensemble son rôle, à travers des exemple en code (Option, List, Future, Either, etc.). Puis, créons notre propre monade et appliquons des transformations.',
          tags: [
            'Functional Programming',
            'Programmation fonctionnelle',
            'Scala',
            'Haskell',
            'SML',
            'Idris',
            'Nix',
            'Monad',
            'Lenses',
          ],
          lang: ['fr'],
        },
        {
          title: 'Voyons plus clairement avec les lentilles',
          abstract:
            "Manipuler les données immuables peut devenir rapidement pénible. Heureusement nous avons des outils purement fonctionnels pour nous aider : les lentilles, les prismes, etc. Découvrons ensemble les cas d'utilisation avec Scala et Monocle.",
          tags: [
            'Functional Programming',
            'Programmation fonctionnelle',
            'Scala',
            'Haskell',
            'SML',
            'Idris',
            'Nix',
            'Monad',
            'Lenses',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon', 'Saint Etienne'],
      contacts: {
        twitter: 'karolchmist',
        mail: 'karolchmist+bbl@gmail.com',
      },
    },
    {
      since: '2016-01-31',
      name: 'Eric Siber',
      bio:
        "Agile Java Craftsman - Creative Ecosystem Organizer. Intéressé également par la gestion des talents, le leadership, le bonheur au travail, ainsi que des mouvements comme la sociocratie, l'holacratie, l'entreprise libérée.",
      picture: 'img/baggers/photo_esiber.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/siber',
        },
        {
          name: 'Web',
          url: 'https://eric.siber.fr',
        },
        {
          name: 'Slideshare',
          url: 'http://fr.slideshare.net/ericsiber/',
        },
      ],
      location: 'Paris et alentours',
      sessions: [
        {
          title:
            "Si t'es toujours pas dév à 40 ans ... il n'est pas trop tard !",
          abstract:
            "Retour d'expérience, sous l'angle du formateur, sur un dispositif de reconversion professionnelle vers le métier de développeur Java ayant été mené d'octobre 2016 à juin 2017 par Simplon pour la DSI de Pôle Emploi.",
          tags: ['Agile', 'Formation', 'Java', 'Craftsmanship'],
          lang: ['fr'],
        },
        {
          title: "L'écosystème agile",
          abstract:
            "Un tour d’horizon à 360° de ce qu'on peut associer à l'agilité et aux mouvements agiles. Pour débutants ou faux débutants sur le sujet, voire ceux qui veulent élargir leur vision.",
          tags: ['Agile', 'Craftsmanship', 'Formation', 'RSE', 'Yammer'],
          lang: ['fr'],
        },
        {
          title: 'La relecture de code : avant tout des pratiques !',
          abstract:
            "Cette session vise à sensibiliser les participants à la problématique de relecture de code. Souvent ce sont les outils qui font le buzz, reléguant les pratiques et leur adoption au second plan. Loin des effets whaou de la démo d'un outil, je souhaite vous sensibiliser au pourquoi et comment, tout en illustrant par des pratiques : de la plus élémentaire à la plus tendance.",
          tags: ['Agile', 'Craftsmanship', 'Formation', 'RSE', 'Yammer'],
          lang: ['fr'],
        },
        {
          title: "De la culture de l'apprentissage à l'organisation apprenante",
          abstract:
            "La formation est en ébullition : la formation traditionnelle est mise à mal par de nouveaux canaux d’apprentissages. Etudions ces canaux qui amènent des bénéfices immédiats, et voyons comment les intégrer dans le quotidien de l'entreprise.",
          tags: ['Agile', 'Craftsmanship', 'Formation', 'RSE', 'Yammer'],
          lang: ['fr'],
        },
        {
          title: "Réseaux sociaux d'entreprise : l'exemple de Yammer",
          abstract:
            "Une présentation des fonctionnalités des réseaux sociaux d'entreprise à travers l’exemple de Yammer et du réseau VISEO / Novedia que j'ai initié en 2010 pour apporter une dimension sociale et collaborative dans l'entreprise.",
          tags: ['Agile', 'Craftsmanship', 'Formation', 'RSE', 'Yammer'],
          lang: ['fr'],
        },
        {
          title: 'Libérez vos talents',
          abstract:
            "A travers cette présentation, je souhaite vous partager mon périple dans une transformation bottom up d'organisation vers plus de leadership, de liberté, et de joie dans le travail. Ce retour d'expérience est complété par un coup de projecteur sur diverses initiatives attribuables à d'autres sociétés françaises.",
          tags: [
            'Agile',
            'Leadership',
            'Management',
            'Change Management',
            'Talent Management',
            'Confiance',
            'RSE',
            'Yammer',
          ],
          lang: ['fr'],
        },
        {
          title: 'Personal Kanban depuis les tranchées',
          abstract:
            'Partage de mon expérience de la mise en oeuvre du Personal Kanban dans différents environnements (toujours avec le même support – à savoir Trello), de l’évolution de la pratique, et de mes réflexions sur le sujet.',
          tags: [
            'Développement personnel',
            'Agile',
            'Kanban',
            'Management Visuel',
            'Personal Kanban',
            'Trello',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'esiber',
        mail: 'eric.siber@gmail.com',
      },
    },
    {
      since: '2016-02-08',
      name: 'Stanislas Chollet',
      bio:
        'Fullstack software developer at Dailymotion. Passionate about functional programming, performance and happiness at work.',
      picture: 'https://avatars2.githubusercontent.com/u/158689?v=3&s=460',
      websites: [
        {
          name: 'Web',
          url: 'http://stanislaschollet.com',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/tsunammis',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/stanislaschollet',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'GraphQL, the new age of API ?',
          abstract:
            'Bring more liberties to your Frontend developers with GraphQL.',
          tags: ['Scalability', 'GraphQL', 'Happiness at work'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Orléans'],
      contacts: {
        twitter: 'tsunammis',
        mail: 'stanislas.chollet@gmail.com',
      },
    },
    {
      since: '2016-02-10',
      name: 'Pierre Leresteux',
      bio:
        'Développeur / Coach Agile @ Creative Data / Saagie, activiste @codeursenseine @devoxx4kidsfr',
      picture:
        'https://secure.gravatar.com/avatar/8f43dd546e83248e7763ad3b38b893b4?size=200',
      websites: [],
      location: 'Rouen',
      sessions: [
        {
          title:
            'Docker au quotidien : améliorons la vie des développeurs avec des conteneurs',
          abstract:
            'Docker par-ci, docker par-là … Le phénomène Docker prend de plus en plus de poids dans notre écosystème. Je vous montrerai que Docker n’est pas fait que pour déployer des applications en production. Pour aider au développement, pour valider des architectures, pour tester des scripts de déploiement, tout peut être prétexte à utiliser Docker et à créer des conteneurs. On découvrira les principes de base de Docker (qu’est-ce qu’une image ? quelle est la différence avec un conteneur ? quelles sont les commandes utiles ?), puis à l’aide de cas concrets (et vécus !) on vera comment utiliser Docker pour développer plus facilement. On parlera ensuite des outils complémentaires permettant d’automatiser et de faciliter l’utilisation de Docker',
          tags: ['Docker'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen'],
      contacts: {
        twitter: 'pierreleresteux',
        mail: 'pierre.leresteux@gmail.com',
      },
    },
    {
      since: '2016-02-27',
      name: 'Frederic Rivain',
      bio:
        "CTO at Dashlane. Active speaker in conferences. Blog Writing. Mentorship. Core contributor in the Tech Community. Happy to come talk about topics such as organization (how we run product and engineering teams), leadership (scaling teams), , security (from threat modelling, to confidential computing, post quantum) and digital identity in general and what's happening in the industry (passkeys, SSO...). Below are just a few examples of talks",
      picture:
        'https://secure.gravatar.com/avatar/d20f256700e1666bc32d5904c8225e13?size=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.dashlane.com/blog/author/frederic-rivain',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/fredericrivain',
        },
      ],
      location: 'Paris, New York',
      sessions: [
        {
          title: 'Continuous Learning',
          abstract:
            "De l'importance de mettre en place une culture de l'apprentissage continu, théorie et exemples concrets",
          tags: ['Management', 'Agile', 'Continuous Learning'],
          lang: ['fr'],
        },
        {
          title: 'From feature factory to Mission teams with OKR',
          abstract:
            "Où on parle d'organisation des équipes, de feature teams, de missions ou comment avoir une orientation business appuyée sur une gestion des objectifs via les OKR",
          tags: ['Management', 'Agile', 'OKR'],
          lang: ['fr'],
        },
        {
          title: 'Scaling Engineering Teams',
          abstract: 'Tips and tricks pour croître sainement',
          tags: ['Management', 'Scale', 'Organization'],
          lang: ['fr'],
        },
        {
          title: 'Our approach to security',
          abstract: 'Comment nous pensons la sécurité chez Dashlane',
          tags: ['Security', 'Privacy', 'Threat', 'Risk'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'FredericRivain',
        mail: 'frederic@dashlane.com',
      },
    },
    {
      since: '2016-03-14',
      name: 'Benoît Simard',
      bio:
        "Benoît Simard est un développeur spécialisé en logiciel libre, Java & data. En dehors de son goût pour le café et la data (en particulier l'open data), Benoît est un graph-addict travaillant comme consultant technique chez Neo4j.",
      picture:
        'http://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/benoit-simard-120x160.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.bsimard.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/logisima',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Introduction aux bases de données graphes avec Neo4j',
          abstract:
            'Venez découvrir les concepts des bases de données graphes et plus particulièrement de Neo4j. Nous verrons en quoi ce nouveau type de base peut répondre à vos problématiques technique et/ou fonctionnelles.',
          tags: ['Neo4j', 'Graph', 'Database'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Nantes'],
      contacts: {
        twitter: 'logisima',
        mail: 'benoit.simard@neotechnology.com',
      },
    },
    {
      since: '2016-03-22',
      name: 'Antoine Pezé',
      bio:
        "UX Designer chez Atecna, je vous propose des talks centrés sur l'intégration de l'UX dans vos équipes. Agilité et Lean sont donc au programme",
      picture: 'http://antoinepeze.com/images/antoine-peze.png',
      websites: [
        {
          name: 'Web',
          url: 'http://antoinepeze.com',
        },
        {
          name: 'Slideshare',
          url: 'http://fr.slideshare.net/AntoinePez',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/antoinepeze',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            'Ecoute active et émotions, la force des interviews exploratoires',
          abstract:
            "Qu'est-ce que l'écoute active et en quoi peut-elle aider mes équipes à construire des produits vraiment pertinents ?",
          tags: [
            'UX',
            'design thinking',
            'ecoute active',
            'emotion',
            'interview',
            'experience map',
          ],
          lang: ['fr'],
        },
        {
          title: 'Hackathon, 3 jours chez les bricoleurs',
          abstract:
            "Découvrez une face cachée des hackathons : les hackathons en entreprise. Venez comprendre la force d'un profil d'UX designer dans ce type d'expérience.",
          tags: [
            'UX',
            'hackathon',
            'Sprint',
            'hackathon',
            'tests utilisateurs',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le Design Thinking au service de votre innovation !',
          abstract:
            "1. Commencer par l'humain, 2. Designer pour réfléchir. Voici les 2 préceptes du Design Thinking. Comment cette méthode peut-elle servir l'innovation ?",
          tags: ['UX', 'innovation', 'design', 'design thinking', 'interview'],
          lang: ['fr'],
        },
        {
          title: 'Le Design Sprint, cette méthodo coup de point pour avancer',
          abstract:
            'Découvrez le Design Sprint, cette nouvelle méthodologie, inspirée par Google Ventures, qui permet de concrétiser et de tester en 5 jours une idée.',
          tags: [
            'UX',
            'tests utilisateurs',
            'Sprint',
            'design sprint',
            'interview',
          ],
          lang: ['fr'],
        },
        {
          title: 'Lean UX : Dérisquer la situation le plus tôt possible',
          abstract:
            'A travers des Retours d’Expérience, nous aborderons cette méthodologie basée sur le triptyque “Think”, “Make”, “Check”. Qu’est-ce que le Lean UX ? Qu’apporte cette méthodologie dans la création d’un produit ?',
          tags: ['UX', 'lean UX', 'lean startup', 'methodo', 'rex'],
          lang: ['fr'],
        },
        {
          title: 'Tests utilisateurs - Tips and tricks',
          abstract:
            'Vous voulez tout savoir sur les tests utilisateurs ? Je suis votre homme !',
          tags: ['UX', 'tests utilisateurs', 'ecoute', 'méthodo', 'interview'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Lille'],
      contacts: {
        twitter: 'antoinepeze',
        mail: 'antoine.peze+bbl@gmail.com',
      },
    },
    {
      since: '2016-04-20',
      name: 'Xavier F. Gouchet',
      bio:
        "Staff Engineer chez Datadog, expert Android, musicophile, passionné par l'architecture, les tests, l'algorithmique et les outils qui simplifient la vie du développeur",
      picture:
        'https://www.gravatar.com/avatar/2ecfc308b3401b0b9aa298f791044af1?s=512',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/xgouchet',
        },
        {
          name: 'Github',
          url: 'https://github.com/xgouchet',
        },
        {
          name: 'Youtube',
          url:
            'https://www.youtube.com/playlist?list=PLrZvYNw-9QDYyCXFktHjfAzukKpI6ZXZw',
        },
      ],
      location: 'Paris, Chartres, Le Mans, ...',
      sessions: [
        {
          title: 'Les code reviews zen (général)',
          abstract:
            'Les code reviews font parties de ces bonnes pratiques qui, si elles sont mal encadrées, peuvent devenir un poison pour une équipe. Je vous propose de détailler les bonnes et mauvaises pratiques autour des code reviews, et de voir quelques conseils pour limiter les frictions qui en résultent.',
          tags: ['Code review', 'team', 'git'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Mutation Testing (Java/Kotlin/Android)',
          abstract:
            "Avoir des tests, c'est bien. Avoir de bons tests, c'est mieux ! Cette presentation va répondre à la question : Comment mesurer les tests unitaires autrement qu'avec la couverture de code ?",
          tags: ['Tests', 'Coverage', 'Mutation', 'Android', 'Java', 'Kotlin'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Property Based Testing (Java/Kotlin/Android)',
          abstract:
            "Avoir des tests, c'est bien. Avoir de bons tests, c'est mieux ! Mais lorsque vos tests utilisent des données statiques, vous ne testez qu'un scope restreint, et vous risquez de passer à côté de situations problématiques.",
          tags: ['Tests', 'Coverage', 'Mutation', 'Android', 'Java', 'Kotlin'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Architecture Mobile Offline First (Android/Kotlin)',
          abstract:
            'Malgré les avancées en terme de couverture réseau, de nombreux utilisateurs se retrouve sans accès à Internet. Comment architecturer son application mobile pour fournir une expérience utilisateur optimale même en offline ?',
          tags: ['Network', 'Offline', 'Android', 'Java', 'Kotlin'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Comment Gradle peut simplifier votre vie (Gradle/Android/Kotlin)',
          abstract:
            "Tout développeur Android et beaucoup de développeurs Java connaissent Gradle. Cependant les fichiers de configuration deviennent souvent complexes, compliqués à lire (et à maintenir). Cette présentation expose différentes bonnes pratiques liées à l'utilisation de Gradle dans un projet Kotlin, Java ou Android.",
          tags: ['Build', 'Android', 'Java', 'Kotlin', 'Gradle'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Démystifier la pyramide de tests (général)',
          abstract:
            'Depuis 2010, le concept de pyramide de tests donne une vision pragmatique des tests, vision mal comprise, et qui a peu évolué depuis. Cette présentation revisite et redéfinit la pyramide de test dans une approche moderne et scalable.',
          tags: ['Tests', 'pyramide', 'Android', 'Java', 'Kotlin', 'Gradle'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Devenir un Staff Engineer dans le Mobile (Carrière)',
          abstract:
            'Le titre de Staff Engineer est apparu dans de grandes entreprises pour désigner les ingénieur·e·s dépassant le niveau Senior, mais il reste encore un peu flou pour beaucoup. Cette présentation, basée sur ma propre expérience, présente des pistes pour les seniors en quête de progression de carrière.',
          tags: ['Tests', 'pyramide', 'Android', 'Java', 'Kotlin', 'Gradle'],
          lang: ['fr', 'en'],
        },
      ],
      cities: [
        'Paris',
        'Chartres',
        'Le Mans',
        'Rouen',
        'Caen',
        'Orléans',
        'Versailles',
      ],
      contacts: {
        twitter: 'xgouchet',
        mail: 'brownbaglunch@xgouchet.fr',
      },
    },
    {
      since: '2016-05-03',
      name: 'Gaël Prudhomme',
      bio:
        'Directeur Technique chez Alfa-safety, Boosteur AWS, va vous faire aimer le cloud',
      picture:
        'http://www.gravatar.com/avatar/88e825193cba7c1b64f6c1debeda061f?s=256',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gaelprud',
        },
        {
          name: 'Web',
          url: 'https://www.alfa-safety.fr',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Premier pas de géant sur AWS',
          abstract:
            "Après une courte présentation, on foncera vers une mise en route concrète d'un site web à la sauce Cloud",
          tags: ['AWS', 'DevOps', 'SysOps', 'Cloud'],
          lang: ['fr'],
        },
        {
          title: 'Sécurité sur AWS',
          abstract:
            "Le Cloud public n'est pas un espace public ouvert au public, je vous présenterais comment recréer votre fort Knox à moindre cout sur AWS",
          tags: ['AWS', 'DevOps', 'SysOps', 'Cloud'],
          lang: ['fr'],
        },
        {
          title: 'Mais pourquoi AWS séduit ?',
          abstract:
            "On naviguera via les grandes tendances web/devops/startup sur les usages d'AWS, scalabilité, elasticité, securité, serverless etc... ",
          tags: ['AWS', 'DevOps', 'SysOps', 'Cloud'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'mr_Prud',
        mail: 'gael+bbl@alfa-safety.fr',
      },
    },
    {
      since: '2016-05-27',
      name: 'Fabien Lamarque',
      bio:
        "TechLead de 33 ans, intéressé par le clean code, l'agile, l'algorithmique et les outils qui simplifient la vie du développeur",
      picture:
        'https://media-exp1.licdn.com/dms/image/C5603AQHMXDrCWoR9SA/profile-displayphoto-shrink_200_200/0/1578653950738?e=1668038400&v=beta&t=Zr5kVYzDZ2CP6wENkCgLjitqJA4DshTThXdjMy0xZ5A',
      websites: [
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/fabienlamarque',
        },
        {
          name: 'blog',
          url: 'https://blog.lamarque.tech',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Gilded-Rose-Inn, comment refactorer un code legacy',
          abstract:
            "L'auberge de Gilded-Rose est situé au cœur de Hurlevent, et propose aux voyageurs de tout Azeroth (le monde de Warcraft) des objets rares et des mets délicats.\n Le but de ce kata est d'entreprendre un refactoring afin d'apporter sereinement des évolutions à ce code legacy",
          tags: ['Java', 'Clean Code', 'Refactoring', 'Legacy'],
          lang: ['fr'],
        },
        {
          title: 'Revues de code, quoi regarder, quels pièges éviter ?',
          abstract:
            'La pratique de la revue de code se démocratise. Que vous la découvriez ou que vous la pratiquiez depuis des années, échangeons sur les bonnes pratiques, les pièges et les différentes techniques que vous pouvez utiliser pour pratiquer vos revues de code.',
          tags: [
            'Code Review',
            'Agile',
            'XP',
            'Software Craftsmanship',
            'team',
          ],
        },
        {
          title: 'Introduction à git',
          abstract:
            "Atelier d'apprentissage de git. On commence par une brève introduction aux principes, puis on s'essaie à un atelier pratique pour apprendre les commandes basiques.",
          tags: ['git', 'introduction', 'hands-on'],
        },
        {
          title: 'Git dans une architecture microservice',
          abstract:
            "Ton système d'information se transforme rapidement en microservices, peut-être même est-il déjà dans le cloud. Pour que cette transition soit une pull aux œufs d'or, et ne vire pas au commit de répétition en se plantant magistralement… Viens voir comment git peut t'aider, ou au contraire te freiner dans ce changement d'organisation, et éviter de scier la branche sur laquelle tu es assis.",
          tags: ['git', 'microservice'],
        },
        {
          title: 'Animation de coding-dojo',
          abstract:
            "Atelier de code en groupe, pour s'entrainer aux bonnes pratiques, faire des exercices, retrouver le plaisir du code",
          tags: ['equipe', 'craftsmanship'],
        },
        {
          title: 'Live Coding de Space Invaders',
          abstract:
            "Aujourd'hui c'est Back to Basics ! Je vais vous montrer comment coder le jeu mythique Space Invaders à partir de zéro, sans framework, sans librairie, sans typescript, en 45 minutes !\n" +
            "Du javascript à la papa, deux lignes de Html et c'est parti !",
          tags: ['Javascript', 'livecoding'],
        },
      ],

      cities: ['Bordeaux'],
      contacts: {
        twitter: 'Fabinout',
        mail: 'fabien+bbl@lamarque.tech',
        websites: [
          {
            name: 'blog',
            url: 'https://blog.lamarque.tech',
          },
          {
            name: 'GitHub',
            url: 'https://github.com/Fabinout/',
          },
        ],
      },
    },
    {
      since: '2016-06-02',
      name: 'Kevin Davin',
      bio:
        "Touche à tout, donc Full-stack dev et même Ops, agile addict et adepte de la qualité. Orga du JUG Toulousain et d'AngularToulouse",
      picture:
        'https://www.gravatar.com/avatar/477389c44ffb21d82a4e05dd46f8aaa2?s=200',
      websites: [
        {
          name: 'LinkedIn',
          url: 'publichttps://fr.linkedin.com/in/kevin-davin-a8668a11',
        },
        {
          name: 'GitHub',
          url: 'http://github.com/davinkevin/',
        },
      ],
      location: 'Toulouse',
      sessions: [
        {
          title: 'Introduction à Angular2',
          abstract:
            'Introduction aux concepts et changements dans Angular2, vu par un développeur AngularJS',
          tags: ['Javascript', 'Angular2', 'TypeScript'],
          lang: ['fr'],
        },
        {
          title:
            "Codez de l'Angular1 aujourd'hui avec les technos de demain...",
          abstract:
            "Utilisez la puissance de l'ES2015 et + pour faire du code Angular1 de très haute qualité, testing inclus !",
          tags: ['Javascript', 'AngularJS', 'test', 'TDD', 'agile'],
          lang: ['fr'],
        },
        {
          title: "Démarrer un projet Angular2 avec l'AngularCLI aujourd'hui !",
          abstract:
            "Pourquoi vous embêter avec tout l'environnement Javscript alors que la CLI est faîtes pour vous aider à démarrer... voir même plus ! Vous ne la quitterez plus jamais ;)",
          tags: [
            'Javascript',
            'Angular',
            'Angular2',
            'test',
            'deploy',
            'TDD',
            'agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Programmation fonctionnelle avec JavaSlang',
          abstract:
            'Vous êtes sur Java 8 et vous trouvez que les nouveautés auraient pû être meilleurs, découvrez le projet JavaSlang apportant un nouveau niveau de programmation fonctionnelle en Java !',
          tags: ['Java', 'JavaSlang', 'Java 8', 'test', 'TDD', 'agile'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'davinkevin',
        mail: 'davin.kevin+bbl@gmail.com',
      },
    },
    {
      since: '2016-06-14',
      name: 'Marc Dugué',
      bio: 'Directeur de projet et facilitateur graphique',
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'https://twitter.com/Marc_DUGUE',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/marcdugue',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Facilitation graphique et initiation aux Sketchnote',
          abstract:
            "Présentation de ce qu'est la facilitation graphique et initiation au vocabulaire graphique de base et à l'intérêt des sketchnotes. ",
          tags: ['Sketchnote', 'Scribing', 'Facilitation graphique'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: '@Marc_DUGUE',
        mail: 'marc.dugue@gmail.com',
      },
    },
    {
      since: '2016-06-15',
      name: 'Benjamin Lacroix',
      bio:
        "Développeur Agile chez Xebia j'ai eu l'occasion d'intervenir sur des applications web, back et Android dans de nombreux environnements fonctionnels et technologiques. J'essaie de tirer parti de ces expériences diverses pour apporter une vision différente",
      picture:
        'https://www.gravatar.com/avatar/63d261113651caa0dc887445c61ea48a?s=200',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.xebia.fr/category/mobilite',
        },
        {
          name: 'Github',
          url: 'https://github.com/blacroix',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Kotlin intro & live coding',
          abstract:
            "Kotlin, langage développé et maintenu par Jetbrains est arrivé sur Android. Ce BBL propose un tour d'horizon du langage ainsi qu'une démonstration live coding pour développer une application exploitant les capteurs du téléphone. En conclusion, nous échangerons sur l'intérêt du langage et de sa viabilité en production.",
          tags: ['Java', 'Android', 'Kotlin', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'Comment tester (vraiment) une application Android ?',
          abstract:
            "Talk donné à la Droidcon Paris 2015 ; A partir d'une feuille blanche (Android), découvrez quelles stratégies de tests mettre en place pour garantir le bon fonctionnement, la résilience et la maintenabilité de l'application. Nous commencerons par un bref rappel de ce qu'est un test, puis nous plongerons dans une session live coding. A la fin de cette présentation, le TDD (oui, sur Android), les tests d'intégrations et les rapports associés n'auront plus de secret pour vous.",
          tags: ['Java', 'Android', 'Mobile', 'Qualité', 'Tests'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'benjlacroix',
        mail: 'blacroix@xebia.fr',
      },
    },
    {
      since: '2016-06-15',
      name: 'Adrien Lecharpentier',
      bio:
        "Software Engineer chez CloudBees, je travaille sur Jenkins OSS et les plugins pour améliorer leur qualité. Membre de la communauté Jenkins depuis 2009, j'ai travaillé sur de nombreux plugins et sujets (Java 11, JCasC, UI/UX).",
      picture:
        'https://www.gravatar.com/avatar/8254814a3136a30724cd428841f8e155?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://alecharp.fr',
        },
        {
          name: 'Github',
          url: 'https://github.com/alecharp',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Jenkins Pipeline 101',
          abstract:
            "Jenkins Pipeline est l'une des plus grosse addition à l'écosystème Jenkins, mais comment s'en sert-on? Avec un live code d'un Pipeline, on voit les mots clé de base et voir plus loin avec Pipeline-as-Code.",
          tags: ['Jenkins', 'Pipeline'],
          lang: ['fr'],
        },
        {
          title: 'Jenkins 2.0',
          abstract:
            "En Avril 2016, Jenkins a connu sa première release majeure depuis sa création. Mais est-ce juste un changement de numéro? Que contient cette version? On voit les différentes additions à Jenkins dans cette version mais aussi ce que l'on peut attendre de son avenir.",
          tags: ['Jenkins'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'alecharp',
        mail: 'me+bbl@alecharp.fr',
      },
    },
    {
      since: '2016-06-16',
      name: 'Qian Jin',
      bio:
        'Pythonista, Android app builder, IoT enthusiast, currently hacking things at Xebia',
      picture:
        'https://en.gravatar.com/userimage/100014788/0d3ac047c5fbce195a5f079c2c69d8e5?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://potatobon.com/',
        },
        {
          name: 'Github',
          url: 'https://github.com/jinqian',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/qian-jin-3951501b',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Build your own connected thermometer',
          abstract:
            'Mini hacking session aims at setting up an IoT system using Raspberry Pi and temperature / humidity sensor, along with the chosen cloud service.',
          tags: ['IoT', 'mqtt', 'Raspberry Pi'],
          lang: ['fr', 'en'],
        },
        {
          title: 'The Physical Web: the future of IoT',
          abstract:
            'The Physical Web uses beacons to broadcast URLs that any nearby device can pick. With this concept, The Physical Web bridges the physical world and the virtual world by bringing services to people.',
          tags: ['Beacon', 'Mobile', 'IoT', 'Physical Web'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Get ready for Android Wear 2.0',
          abstract:
            'With standalone apps, Complications API, messaging and other new features, Android Wear 2.0 will take Android smart watch apps to the next level. You definitely want to be ready for it.',
          tags: ['Android', 'Android Wear', 'Mobile', 'Wearable'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'bonbonking',
        mail: 'qjin@xebia.fr',
      },
    },
    {
      since: '2016-06-17',
      name: 'Shoun Ichida',
      bio:
        'Développeur Java/Angular | Agiliste et Craftsman au sein de VISEO Technologies',
      picture: 'https://avatars1.githubusercontent.com/u/1797860',
      websites: [],
      location: 'Paris',
      sessions: [
        {
          title: 'Réaliser une bonne recette grâce au concombre',
          abstract:
            "Les méthodologies de développement type 'tests first' sont en plein essor : TDD, ATDD, BDD... À travers ce meetup, je vous propose de mettre en pratique un exemple de Behavior Driven Development avec Cucumber Java. Cette démonstration nous permettra de constater que de bonnes pratiques de développement permettent d'améliorer la qualité des livrables avec un effort modéré.",
          tags: ['Java', 'Cucumber', 'BDD', 'Agilité'],
          lang: ['fr'],
        },
        {
          title: 'Comment optimiser mon WIP ?',
          abstract:
            "Vous souhaitez améliorer délai et qualité dans vos projets ? Vous avez mis en place une méthodologie Agile mais malgré tout vous n'êtes pas satisfait de la productivité de votre équipe ? Je vous propose à travers un serious game de comprendre les conséquences du facteur WIP afin de mieux le maîtriser et comprendre son impact sur vos projets.",
          tags: ['Kanban', 'WIP', 'Serious game', 'Agilité'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'ishoun',
        mail: 'shoun@ichida.fr',
      },
    },
    {
      since: '2016-07-18',
      name: 'Guillaume Allain',
      bio:
        "Associé chez Lucca, je suis product owner chez Lucca  depuis 2007. J'ai pu vivre le passage d'un éditeur Saas de 4 à 200 collaborateurs et participer à la structuration de l'organisation à chaque étape de la croissance.",
      picture:
        'https://secure.gravatar.com/avatar/4bd61d872d5e2596c631a4f1d3041451?size=256',
      websites: [
        {
          name: 'Lucca',
          url: 'https://www.lucca.fr/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            'Tools :  Comment construire un SI uniquement avec des outils en ligne',
          abstract:
            'Salesforce, Slack, Trello, Zendesk, Jira, Scrumdo, Teamwork, Captain train: les outils Saas envahissent notre vie professionnelle. Pourquoi est-ce inévitable ? Comment être efficace ? Comment les faire communiquer ensemble ? ',
          tags: ['Trello', 'Saas', 'SI', 'Tooling', 'Slack'],
          lang: ['fr'],
        },
        {
          title: "Cycle d'amélioration continue / objectifs / évaluations",
          abstract:
            "Retour d'expérience sur le suivi des objectifs collectifs et individuels chez Lucca (éditeur Saas 50 personnes) Partage du cycle d'amélioration continue à 3 niveaux (entreprise, équipe, individuel) permettant de fixer de façon trimestrielle les priorités de chaque collaborateur.",
          tags: [
            'Objectifs',
            'LeanStartup',
            "Retour d'expérience",
            'Evaluation',
          ],
          lang: ['fr'],
        },
        {
          title: 'Mise en place de Scrum dans une startup',
          abstract:
            "On parle souvent de Scrum pour rendre plus agile des procédures rigides. J'ai mis scrum en place chez Lucca pour scruturer notre équipe de R&D qui n'avait aucune procédure. Si votre équipe de R&D augmente et que vous avez besoin de vous structurer pour rester efficace. Je vous partagerai les étapes que l'on a utilisées chez Lucca pour mettre en place Scrum.",
          tags: ['Scrum', 'Startup', "Retour d'expérience"],
          lang: ['fr'],
        },
        {
          title: 'Organiser un Startup Weekend interne',
          abstract:
            "Vous avez envie de montrer à vos équipes qu'elles peuvent résoudre des grosses problématiques en moins de 48h ? Je vous donnerai toutes les clés pour organiser un Startup Weekend en interne.",
          tags: [
            'StartupWeekend',
            'LeanStartup',
            "Retour d'expérience",
            'Get Things Done (in team)',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'gallain',
        mail: 'guillaume@llain.fr',
      },
    },
    {
      since: '2016-07-18',
      name: 'Frédéric Pot',
      bio:
        'Co-fondateur de Lucca en 2002, je suis le Product Owner de la solution Figgo utilisée par 115 000 salariés de 900 sociétés à travers 30 pays. Je serai ravi de vous partager mon expérience sur les 15 dernières années autour de l’évolution dans la gestion d’un logiciel RH.',
      picture:
        'https://avatars1.githubusercontent.com/u/2751422?v=3&u=93aa7a0037a926090eb975aaf590840a069f6a44&s=140',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/frederic-pot-96777b1',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            '16 ans de gestion produit, les hauts et les bas condensés en 20 minutes',
          abstract:
            'De la naissance du POC à la solution SaaS utilisée par 120 000 salariés, je vous raconterai les étapes clés en vous donnant quelques pistes sur les écueils à éviter. L’histoire vraie et toujours d’actualité d’un logiciel partagée par son Product Owner.',
          tags: ['POC', 'Saas', 'scalabilité', 'RH', 'Product Owner'],
          lang: ['fr'],
        },
        {
          title: '3 axes pour l’engagement au travail racontés en 20 minutes',
          abstract:
            'Le désengagement des collaborateurs est un sujet d’inquiétude dans de nombreuses entreprises. Cependant, le management ne peut pas décréter l’engagement des équipes. Vous pouvez être moteur en travaillant autour de 3 axes : le recrutement des équipes, la transparence et le team building. Pas de blabla juste des exemples concrets mis en place chez Lucca.',
          tags: [
            'engagement',
            'team building',
            'recrutement',
            'transparence',
            'management',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'fpot',
        mail: 'fpot@lucca.fr',
      },
    },
    {
      since: '2013-02-17',
      name: 'Frédéric Menou',
      bio: 'CTO FretLink',
      picture:
        'https://secure.gravatar.com/avatar/252ef00042fda3ab4cf67a36b956fa33?size=200',
      websites: [
        {
          name: 'about.me',
          url: 'http://about.me/ptitfred',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Haskell pour les noobs',
          abstract:
            "1 heure pour apprendre un nouveau langage, c'est court. Et quand il s'agit d'un langage aussi particulier qu'Haskell, ça devient sportif ! Mais qu'à cela ne tienne, tentons le coup ! Commençons par étudier un cas topique : le parsing de fichiers texte.",
          tags: ['Haskell', 'Programmation fonctionnelle'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'ptit_fred',
        mail: 'frederic.menou@gmail.com',
      },
    },
    {
      since: '2016-08-17',
      name: 'Quentin Ambard',
      bio: 'Developer big data, Java, Scala, Machine Learning',
      picture:
        'https://en.gravatar.com/userimage/5355706/f1d4dca3b11cb230b97facd2c8d093be.jpg?size=300',
      location: 'Paris, proche banlieue et La Défense',
      sessions: [
        {
          title: 'Intro au Machine Learning pour devs',
          abstract:
            "1 heure pour parcourir les algos stars du machine learning. Pas de code, les grands concepts accompagnés d'un peu de maths. Au programme : regression linéaire, classification (regression logistique/svm/tree), réseau de neurones, deep learning.",
          tags: ['Machine Learning', 'Réseau de neurones', 'Deep Learning'],
          lang: ['fr'],
        },
        {
          title: 'JVM & Garbage Collection tuning',
          abstract:
            "G1, CMS, Shenandoah, ou Zing ? Heap size à 8GB ou 31GB? pointers compressés ? Region size ? Quel temps de pause maximum ? Débit ou Latence ... Un vrai gain est-il à espérer ? Quels sont les paramètres ayant le plus d'impact ? Après un bref recapitulatif des differents GC, vous nous verrons l'effet des paramètres de la JVM sur Cassandra, une base de donnée à faible latence.",
          tags: ['JVM', 'GC', 'Tuning'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'qambard',
        mail: 'quentin.ambard@gmail.com',
      },
    },
    {
      since: '2016-09-10',
      name: 'Bruno Heridet',
      bio: 'Codeur',
      picture:
        'http://www.gravatar.com/avatar/1de6337421c1eac0227c88502b275952?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://delapouite.com',
        },
      ],
      sessions: [
        {
          title: 'vim / neovim',
          abstract:
            "Armés de nos 10 doigts, nous essaierons de comprendre pourquoi cet éditeur préhistorique n'est toujours ni éclipsé, ni sublimé, ni atomisé.",
          tags: ['vim', 'Outils'],
          lang: ['fr'],
        },
        {
          title: 'Window managers & keyboards',
          abstract:
            "Stop à la souris ! Mort à l'Azerty ! Durant cette session nous tenterons d'optimiser la façon dont nous rangeons nos fênetres et tapotons sur nos claviers.",
          tags: ['Outils'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon', 'Nantes'],
      contacts: {
        twitter: 'delapouite',
        mail: 'delapouite@gmail.com',
      },
    },
    {
      since: '2016-09-19',
      name: 'Jordane Grenat',
      bio:
        'Développeur JavaScript / Java | Fan de veille technologique et Craftsman chez VISEO Technologies',
      picture:
        'http://image.noelshack.com/fichiers/2016/44/1478037566-13769637-10155147885584768-4943264862180673598-n.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://laveilleuse.io',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Mettez votre JavaScript à jour !',
          abstract:
            "Après des années sans évolution pour JavaScript, l'arrivée d'ES2015 a apporté de nombreux outils qui facilitent considérablement la vie du développeur. Avec une nouvelle version tous les ans, il peut maintenant être compliqué de suivre les nouveautés et de comprendre comment utiliser tous ces nouveaux outils. Dans ce BBL, je vous propose un cours de rattrapage sur tous ces changements et sur les évolutions à venir !",
          tags: ['JavaScript', 'ES6', 'ES2015'],
          lang: ['fr'],
        },
        {
          title: "Oubliez les migraines, faites de l'asynchrone... synchrone !",
          abstract:
            "Tout développeur JavaScript – même celui qui n'ose pas se l'avouer – a subi un jour le callback hell à cause de l'asynchrone. Aujourd'hui, de nouveaux outils du langage nous permettent de gérer bien plus élégamment nos appels asynchrones, à tel point qu'on en vient à faire de l'asynchrone... synchrone !\nJe vous propose de découvrir cela au travers d'un live coding en partant de la code base cauchemardesque héritée du stagiaire débutant le JavaScript ; si cela ne vous évoque rien, vous faites parti d'une minorité miraculée ! Nous utiliserons les promesses, les générateurs, les coroutines et les fonctions asynchrones pour l'améliorer progressivement, en notant au passage les pièges auxquels il ne faut pas succomber...",
          tags: ['JavaScript', 'asynchrone', 'callback'],
          lang: ['fr'],
        },
        {
          title: 'Reprenez le contrôle de votre historique Git !',
          abstract:
            "De tous les systèmes de gestion de version utilisés actuellement, Git est sans conteste le plus populaire. Il offre des outils très performants pour gérer son historique que je vous propose de découvrir.\nNous verrons dans un premier temps les différences entre des merges et des rebases et leurs cas d'utilisation, avant de voir comment nettoyer son historique Git et la valeur que cela peut apporter à une équipe.",
          tags: ['Git', 'merge', 'rebase', 'historique'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'JoGrenat',
        mail: 'jordan.grenat+bbl@gmail.com',
      },
    },
    {
      since: '2016-09-22',
      name: 'Guillaume Mouron',
      bio:
        "Ingénieur DevOps et Responsable de la production chez Lucca, éditeur de logiciels SaaS de gestion RH. Avant, ça j'ai travaillé 7 ans aux Pays-Bas à Keygene, entreprise de biotechnologies. Je suis full-stack mais avec une préférence pour le backend, notamment en C#.",
      picture: 'https://avatars3.githubusercontent.com/u/950148?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
        {
          name: 'Web',
          url: 'http://www.gmo-web.info/',
        },
        {
          name: 'Web',
          url: 'https://gmouron.github.io/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/gmouron',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/GMouron',
        },
      ],
      location: 'Lyon, Nantes',
      sessions: [
        {
          title: 'Construire un moteur de règles en C# en 1h chrono',
          abstract:
            "À travers une session de live coding, je vais vous montrer qu'il est possible de créer un petit moteur de règles en C# en moins d'1h grâce aux Expression Trees.",
          tags: [
            'Live coding',
            'C#',
            'Expression trees',
            "Arbres d'expression",
            'Rule engine',
            'Moteur de règles',
            '.NET',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Lyon', 'Nantes'],
      contacts: {
        twitter: 'GMouron',
        mail: 'gmouron@lucca.fr',
      },
    },
    {
      since: '2016-09-27',
      name: 'Mélanie Foucher',
      bio: 'Ux designer chez Lucca',
      picture: 'http://fr.gravatar.com/melouleloup',
      location: 'Nantes',
      sessions: [
        {
          title: 'Comment captiver votre public en montrant moins mais mieux ?',
          abstract:
            'Qu’il soit l’heure du déjeuner ou de la digestion assurez-vous que votre public suivra à la fois vos slides et votre propos.',
          tags: ['Design', 'Présentation'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'mfoucher@lucca.fr',
      },
    },
    {
      since: '2016-09-29',
      name: 'François-Xavier Thomassin',
      bio: 'Ingénieur R&D chez Lucca, éditeur de logiciels SaaS de gestion RH.',
      picture: 'https://avatars2.githubusercontent.com/u/5735635?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/thomaf',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: "Tester c'est douter !",
          abstract:
            'Incontournables, les tests sont souvent les grands absents dans le code des entreprises. Je vous propose quelques pistes pour initier la culture du test chez vous avec des exemples concrets.',
          tags: ['Tests', 'Unit test', 'Quality', 'TDD', 'BDD', 'Mock'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'fx@lucca.fr',
      },
    },
    {
      since: '2016-09-29',
      name: 'Florian Verger',
      bio: 'Ingénieur R&D chez Lucca, éditeur de logiciels SaaS de gestion RH.',
      picture:
        'https://secure.gravatar.com/avatar/a896cbaf08bb15196c309e8055e0b814?size=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/florian-verger-156a8a67',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: "Réécrivez l'histoire avec git",
          abstract:
            "Présentation sur des cas concrets afin de garder un historique git propre et lisible. Fini le commit 'fix de fix'",
          tags: ['git', 'sourcetree'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'Florian_Verger',
        mail: 'fverger@lucca.fr',
      },
    },
    {
      since: '2016-10-03',
      name: 'Benoît Belz',
      bio: 'Ingénieur R&D chez Lucca, éditeur de logiciels SaaS de gestion RH.',
      picture:
        'http://secure.gravatar.com/userimage/111133732/8fe655abb8ebc0bcf90d9c431e7763ff.png',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/benoit-belz-95846270',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Initiation à Protobuf',
          abstract:
            "La version 3 du moteur de sérialisation développé par Google est sortie cet été. Je vous propose un petit tour d'horizon des nouvelles possibilités qu'il offre.",
          tags: ['protobuf'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'bbelz@lucca.fr',
      },
    },
    {
      since: '2016-10-04',
      name: 'Alex Carpentieri',
      bio: 'Ingénieur R&D chez Lucca, éditeur de logiciels SaaS de gestion RH.',
      picture:
        'https://secure.gravatar.com/avatar/58f2522ae863d49748f891dcaa34e7d1',
      cities: ['Nantes'],
      contacts: {
        mail: 'acarpentieri@lucca.fr',
        twitter: 'alexcarpe',
      },
      sessions: [
        {
          title: 'Pizza Robot Expert',
          abstract:
            "Introduction aux systèmes experts à travers la decouverte de CLIPS (http://www.clipsrules.net/) et la création d'un robot à pizza.",
          tags: ['CLIPS', 'Expert System', 'Pizza'],
          lang: ['fr', 'en', 'it'],
        },
      ],
    },
    {
      since: '2016-10-06',
      name: 'Francois Wauquier',
      bio: 'Developpeur, Scrum Master, Artisan du SI',
      picture:
        'https://www.gravatar.com/avatar/f2e8cfc6c2f76441b3b8c110fcb12b23?s=256',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/francoiswauquier',
        },
        {
          name: 'Blog',
          url: 'http://wokier.blogspot.fr/',
        },
      ],
      contacts: {
        mail: 'wokier@gmail.com',
        twitter: 'wokier',
      },
      location: 'Paris',
      sessions: [
        {
          title: 'Introduction agilité',
          abstract:
            "Vous démarrez ou voulez démarrer l'agilité en 2016. Il n'est pas trop tard. Je vous propose intro et discussions",
          tags: ['Agile', 'Scrum', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Cross communication entre applications web',
          abstract:
            "Connaitre les limites du navigateur, et s'en rapprocher pour offrir une meilleure experience à vos utilisateurs",
          tags: ['Web', 'JavaScript', 'Ergonomie'],
          lang: ['fr'],
        },
        {
          title: 'GWT',
          abstract: 'Dévelopement Full Stack, client et serveur avec java 8',
          tags: ['Web', 'Open Source'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Versailles', 'Lille'],
    },
    {
      since: '2016-10-12',
      name: 'Julien Sebrien',
      bio: 'CTO Geneticio, Developpeur',
      picture:
        'https://cloudinary-a.akamaihd.net/hopwork/image/upload/w_360,h_340,c_thumb,g_auto/nmsr9gkp89ch0dz7cyzt.jpg',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/julien-sebrien-878218a',
        },
        {
          name: 'Blog',
          url: 'https://genetic.io/fr/blog/',
        },
      ],
      contacts: {
        mail: 'julien.sebrien@genetic.io',
        twitter: 'jsebrien',
      },
      location: 'Paris',
      sessions: [
        {
          title: 'Introduction aux algorithmes génétiques',
          abstract:
            "Présentation des algorithmes génétiques, appartenant à la famille des algorithmes évolutionnistes, et de cas d'études pédagogiques (tobeornottobe, smart rockets).",
          tags: [
            'algorithmes génétiques',
            'intelligence artificielle',
            'évolution',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
    },
    {
      since: '2016-10-26',
      name: 'Yoann Buch',
      bio: 'Co-fondateur de Flow (http://findtheflow.io), Développeur',
      picture:
        'https://www.gravatar.com/avatar/e600f3739070d957a1393e02c935bacc?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://findtheflow.io',
        },
        {
          name: 'Linkedin',
          url: 'https://fr.linkedin.com/in/yoannbuch',
        },
      ],
      contacts: {
        mail: 'yoann.buch@gmail.com',
        twitter: 'YoannBuch',
      },
      location: 'Paris, Lyon',
      sessions: [
        {
          title: 'Comprendre rapidement une application legacy',
          abstract:
            'Que le but soit de débugger, refactorer, migrer ou encore étendre une application il faut nécessairement comprendre comment elle fonctionne. Et ce n’est pas gagné, surtout si on ne connaît pas bien le code, la documentation n’est pas à jour et les experts sont partis. Pour s’en sortir on a recours à nos outils de toujours : la lecture de code, l’ajout de print/log, le debugger ou encore le profiler. Malheureusement ils ne répondent pas à toutes nos questions de manière efficace. C’est pour aller aux delà de leurs limites que Flow (http://findtheflow.io) a été créé. Il aide les développeurs à comprendre plus rapidement la structure et le comportement de leurs applications Java en leur permettant d’explorer visuellement les exécutions. Ce BBL sera animé par Yoann Buch et Yiquan Zhou tous les deux créateurs de Flow. Il s’adresse aux développeurs Java mais aussi, plus généralement, à tous ceux qui veulent mieux comprendre leurs applications.',
          tags: ['Code Legacy', 'Legacy', 'Agile', 'Java', 'Craftmanship'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Lyon'],
    },
    {
      since: '2016-11-20',
      name: 'Jean-Baptiste Beuzelin',
      bio:
        "Ingénieur R&D chez Lucca, je m'occupe de développer une solution interne de gestion de parc client et de facturation.",
      picture: 'http://www.lucca.fr/img/equipe/jbeuzelin.png',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/jbbeuzelin',
        },
      ],
      location: 'Paris, Nantes',
      sessions: [
        {
          title:
            'Comment développer un outil qui permet de rendre vos collaborateurs plus efficaces.',
          abstract:
            "Vous souhaitez simplifier la vie de vos collaborateurs en automatisant leurs processus, en offrant de nouveaux outils afin qu’ils puissent rester autonome ?<br />Je vous offre alors mon retour d'expérience sur 3 ans de développement d'un outil de gestion de parc client et de facturation qui aide notre société Lucca à offrir les meilleurs services possibles.",
          tags: ['Saas', 'SI', 'Tooling'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Nantes'],
      contacts: {
        twitter: 'JB_Beuzelin',
        mail: 'jbbeuzelin@gmail.com',
      },
    },
    {
      since: '2016-12-15',
      name: 'Igor Laborie',
      bio: 'Développeur passionné, je suis expert Java et Web chez MonkeyPatch',
      picture: 'https://ilaborie.org/images/947f7969.me.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://ilaborie.org',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/igor-laborie-080ab78',
        },
        {
          name: 'Blog',
          url: 'http://www.monkeypatch.io/blog/',
        },
      ],
      contacts: {
        mail: 'igor@monkeypatch.io',
        twitter: 'ilaborie',
      },
      location: 'Toulouse',
      sessions: [
        {
          title: 'Micorservices & Feign',
          abstract:
            'Petite intro sur les microservices, avant de présenter le client REST Java : Feign. Beaucoup de live coding, avec beaucoup de Java 8, un peu de CircuitBreaker, du RxJava, ...',
          tags: ['REST', 'HTTP', 'Feign', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'JavaScript pour les développeurs Java',
          abstract:
            'Pourquoi JavaScript est un langage difficile à appréhender pour les développeur(es) Java. On en profitera pour voir les bases de NodeJS, et les apports intéressants de ES2015.',
          tags: ['JavaScript', 'ES6', 'NodeJS'],
          lang: ['fr'],
        },
        {
          title: 'Les nouveautés de Java 8',
          abstract:
            "Tour d'horizon des nouveautés apportées par cette version majeure de Java",
          tags: ['Java'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
    },
    {
      since: '2017-01-01',
      name: 'Harrich Sandirassegarane',
      bio:
        "Ingénieur R&D chez Lucca, éditeur de logiciel SaaS de gestion RH. Je m'occupe principalement de développer Figgo, le logiciel de pose des congés. Avant ça, J'ai passé 9 ans à améliorer la vie des généalogistes avec Geneanet.",
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'https://www.lucca.fr',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: "Réécrivez l'histoire avec git",
          abstract:
            'Les commandes git (rebase, push --force, ...) vous font peur ? Nous allons voir ensemble les différentes possibilités offertes par git pour le faire tout simplement.',
          tags: ['git', 'rebase', 'push'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'harrich@lucca.fr',
      },
    },
    {
      since: '2017-01-02',
      name: 'Mickael Metesreau',
      bio: 'Développeur .NET et F# addict',
      picture:
        'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/c/0/8/c/highres_261349292.jpeg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.metesreau.com',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mickaelmetesreau',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/MiKaDoO',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/mikadoo',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Actor model et Akka.NET',
          abstract:
            'Introduction au modèle Acteur et à la création de système distribué avec Akka.NET',
          tags: ['.NET', 'Akka', 'Actor', 'Model'],
          lang: ['fr'],
        },
        {
          title: 'Fear the ponies!!!',
          abstract:
            "Les poneys viennent de forger une alliance secrète pour conquérir le monde. Vous n'avez plus que quelques heures pour déjouer le complot en (re)découvrant quelques basiques de la cryptographie.",
          tags: ['Code', 'Dojo', 'Cryptographie'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'MiKaDo_O',
        mail: 'mickael.metesreau@gmail.com',
      },
    },
    {
      since: '2017-01-15',
      name: 'Rap2h',
      bio: 'Editeur de code procédural',
      picture:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdYAAAAJDVhMmI5NWNkLTE1MjgtNDhhNC04ZGI4LTVhNDA5MDViYjk5MA.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://raph.site',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rap2hpoutre',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Startups',
          abstract:
            "Je peux vous raconter mes échecs en startup. Après avoir construit une architecture discutable chez ornikar et mis fin à plusieurs périodes d'essais, je suis aujourd'hui CTO sur un produit que je ne comprends pas.",
          tags: ['fail'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'raphaelht@gmail.com',
        twitter: 'rap2h',
      },
    },
    {
      since: '2017-01-16',
      name: 'Frédéric Camblor',
      bio:
        'Java & Frontend Web dev, Créateur de la conférence BDX I/O, Commiter RestX, travaille pour 4SH France',
      picture:
        'https://pbs.twimg.com/profile_images/378800000759015070/cb819fce4817052c11c7983fe932d210.png',
      websites: [
        {
          name: 'Web',
          url: 'https://fcamblor.wordpress.com/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/fcamblor/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'TypeScript : dès lundi sur votre App Legacy',
          abstract:
            "Avez-vous déjà développé une <strong>App Front</strong> de 5K+ lignes de  JS ? Ne vous êtes-vous jamais senti perdu lorsque vous êtes revenus sur votre propre code sans connaître la structure et les méthodes des objets que vous manipuliez ?.. Et ne parlons même pas du code écrit par vos collègues !<br/><br/><strong>TypeScript (TS) et son typage statique</strong> peut vous aider à passer moins de temps à debugger dans votre browser en codant de manière <strong>type-safe</strong> !<br/>Et bonne nouvelle : vous n'avez pas besoin de démarrer un projet from scratch sous Angular 2 pour commencer à l'utiliser !<br/><br/>Ce talk sera <strong>100% livecoding</strong> et montrera une mise en place <strong>progressive de TypeScript</strong> sur <strong>un projet legacy écrit en JS</strong>.<br/><br/>Nous verrons :<br/><ul><li>Comment mettre en place la <strong>compilation TS</strong> en tâche de fond sur le projet, faire cohabiter les fichiers TS avec les fichiers JS ainsi que comprendre le code généré</li><li> L'interopérabilité avec les librairies JS non écrites en TS via l'outillage <strong>typings</strong></li><li> Enfin, nous migrerons du code JS en TS pour identifier les bienfaits apportés par le langage : types (classes/interfaces), modules, closures, immutabilité, paramètres optionnels, union types, complétion, doc implicite</li></ul>",
          tags: ['Typescript', 'Typings', 'Transpiler', 'Languages'],
          lang: ['fr'],
        },
        {
          title: 'Back to Basics : Ne perdez plus votre Temps avec les Dates',
          abstract:
            "<p><strong>La gestion du Temps</strong> sur une application client/serveur peut sembler simple de prime abord, mais se révélera beaucoup plus complexe au fur et à mesure des usages : timezones multiples, heures récurrentes, heure d'été/d'hiver, traitements cron, leap seconds sont des exemples parmi tant d'autres.<br>Saviez-vous même que la Commission Européenne envisage d'abolir le passage en heure d'hiver ? <strong>Quels impacts cela aurait sur nos applications ?</strong></p><p><strong>Mon objectif</strong> : qu'à partir de lundi prochain, vous vous posiez les bonnes questions à chaque fois que vous travaillerez sur une date ou une heure dans vos applications.</p><p>Pour cela, <strong>reprenons les bases du Temps</strong> en informatique : composantes d'une date, norme ISO 8601, Timezones et IANA.</p><p>Une fois ces bases posées, nous verrons, au travers d'un certain nombre de <strong>cas d'utilisation issus de la vraie vie</strong>, les bonnes questions qu'il convient de se poser pour mettre le doigt sur les complexités d'implémentation et éviter de tomber dans une faille spatio-temporelle lors du prochain changement d'heure.</p><p>Ce talk est accessible à tous et ne se focalisera pas sur un langage / une API en particulier : <strong>les concepts prévaudront sur le code</strong>.</p>",
          tags: [
            'Back to basics',
            'Date',
            'Time',
            'Timestamps',
            'Timezones',
            'IANA',
            'Bonnes pratiques',
            'UTC',
            'Temps Atomique International',
            'NTP',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'fcamblor',
        mail: 'fcamblor@gmail.com',
      },
    },
    {
      since: '2023-01-04',
      name: 'Arnaud Langlade',
      bio:
        "Je suis ingénieur logiciel en freelance. Je suis un grand fan d'ateliers comme l’event storming ou l’example mapping car comprendre le problème que j'essaie de résoudre est essentiel pour moi. J'aime tout ce qui se termine par *DD (DDD, BDD et TDD), ces outils et toutes les valeurs d'eXtreme Programming m'aident à développer des applications depuis pas mal d’années.",
      picture:
        'https://s.gravatar.com/avatar/3566a0bf63ad474de1e2d8c35c5d76a1?s=300',
      websites: [
        {
          name: 'Web',
          url: 'https://arnolanglade.github.io',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/arnolanglade',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/arnolanglade',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/arnolanglade/',
        },
      ],
      location: 'En ligne, Bayonne et alentours',
      sessions: [
        {
          title:
            'Example Mapping: expliquer facilement les attentes du métier à vos équipes',
          abstract:
            "Pendant pas mal d'années, j’ai préparé les sujets à venir avec de longs et ennuyeux groomings. Il était très compliqué de rester concentré jusqu’à la fin. Une réunion trop longue ne favorise pas le partage et l’alignement des équipes sur ce qui est attendu. N’oublions pas que c’est l’incompréhension des développeurs qui part en production comme le disait Alberto Brandolini. Durant cette présentation, je vais vous parler d’un atelier appelé “Example Mapping”. Cet atelier vous permettra facilement de communiquer les besoins et de construire votre backlog en équipe.",
          tags: ['bdd', 'example-mapping', 'atelier'],
          lang: ['fr'],
        },
        {
          title: 'Tests unitaires: essentiels et compliqués à la fois',
          abstract:
            "Je me souviens lorsque j’ai commencé à développer que je pouvais coder pendant des heures sans exécuter mon code. La suite était moins marrante, je passais des heures à le débugger. J’ai découvert les tests par la suite et j’ai rapidement compris les avantages qu’ils apportaient. Cependant, ça n’a pas été facile d’écrire mes premiers tests. On peut commettre beaucoup d'erreurs qui les rendent difficiles à écrire et à maintenir. Je souhaite vous présenter ce que j’ai appris durant ces dernières années afin de faciliter l’écriture de vos tests.",
          tags: ['unit-test', 'POO'],
          lang: ['fr'],
        },
      ],
      cities: ['Bayonne', 'Biarritz'],
      contacts: {
        twitter: 'arnolanglade',
        mail: 'arnaud.langlade@gmail.com',
      },
    },
    {
      since: '2017-01-23',
      name: 'Audrey Neveu',
      bio: 'Developer Relations chez Streamdata.io',
      picture:
        'https://en.gravatar.com/userimage/16120898/e33321cc6561b59d677018cb03813802.jpg',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/aneveu/',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: "Le Streaming d'API : pourquoi ? comment ?",
          abstract:
            "Nous savons que l’animation est essentielle pour l'interaction avec nos utilisateurs. Mais aujourd'hui l'interactivité ne peut plus se résumer à l’UX. Twitter, Waze, Slack … toutes les applications à succès utilisent le temps réel pour rendre leurs utilisateurs addicts.<br/>Mais comment faire pour transformer votre API statique en un flux de données temps-réel ? Du pull ? Du push ? Des Webhooks? Vous connaissez sûrement les Web-Sockets, mais avez vous déjà entendu parler de Server-Sent Events ? Dans ce talk nous comparerons ces technologies pour comprendre dans quel cas elles s'appliquent le mieux avant de voir comment on peut aller encore plus loin en réduisant la quantité de données échangées. Et bien sûr, nous en aurons la preuve par l'exemple avec le live coding d'une application mobile donnant la position de la Station Spatiale Internationale en moins de dix minutes !",
          tags: ['Temps-réel', 'Server-Sent Event', 'Streaming', 'API'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Rouen', 'Paris'],
      contacts: {
        twitter: 'Audrey_Neveu',
        mail: 'audrey.neveu@streamdata.io',
      },
    },
    {
      since: '2017-02-10',
      name: 'François Liot',
      bio:
        'Expert Java JEE, Devops jedi, Open Source evangelist, et Offshore programming',
      picture: 'https://www.wareld.com/public/photo.jpg',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/fliot',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/francois-liot-6523b66',
        },
      ],
      location: 'Saint-Jean-de-Luz',
      sessions: [
        {
          title: 'SOA libre et efficace',
          abstract:
            "Apache Servicemix, Apache Activemq, Apache Camel, Hawtio, en architecture OSGI et microservices, parce que l'on a toujours besoin de communiquer entre plusieurs applications, découvrez la puissance et la simplicité de Servicemix.",
          tags: [
            'API',
            'Agile',
            'Asynchrone',
            'Continuous Delivery',
            'DevOps',
            'Industrialisation',
            'Ingénierie agile',
            'Intégration',
            'Java',
            'Maven',
            'Micro-Services',
            'Open Source',
            'Ops',
            'Outils',
            'Stratégie',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Crawling',
          abstract:
            'Outlis de crawling, mémoire/stockage/reprise des éléments déjà crawlés, difficultés javascript/DOM, Selenium, Webdriver, PhantomJS, Nutch...',
          tags: [
            'Agile',
            'Architecture',
            'Asynchrone',
            'Automatisation',
            'Big Data',
            'Cloud',
            'Continuous Delivery',
            'Data Mining',
            'Elasticsearch',
            'Intégration',
            'Monitoring',
            'NoSQL',
            'Nutch',
            'Open Source',
            'SolR',
            'supervision',
            'Watir',
            'Webdriver',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Appropriation de données, parsing, formatting',
          abstract:
            "Aller chercher, parser, reconnaitre, stocker, restituer, utiliser le web comme une immense base de données formatée ouverte c'est maintenant possible. Présentation des outils Nutch, Parsing en XPatch, Solr, ElasticSearch, Kibana, Cassandra...",
          tags: [
            'Agile',
            'Asynchrone',
            'Big Data',
            'Data Mining',
            'Elasticsearch',
            'Ingénierie agile',
            'Kibana',
            'KPI',
            'Machine learning',
            'NoSQL',
            'Nutch',
            'Open Source',
            'Scalabilité',
            'SolR',
            'Webdriver',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Introduction aux Big Data avec Hadoop',
          abstract:
            'Hadoop permet de travailler sur des petaoctets de données en des temps records grâce à son architecture distribuée. Découvrez comment cela fonctionne. Au programme : Architecture, HDFS, Map/Reduce, Impala, Scoop, Spark et pourquoi pas R :-)',
          tags: [
            'Architecture',
            'Big Data',
            'Data Mining',
            'Hadoop',
            'HDFS',
            'Impala',
            'Java',
            'NoSQL',
            'Open Source',
            'Scalabilité',
            'SolR',
            'Spark',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Git & GitHub & Open Source',
          abstract:
            "Présentation de Git, des différences par rapport à d'autres systèmes tels que Subversion, de son écosystème.",
          tags: [
            'Agile',
            'Automatisation',
            'Build',
            'Continuous Delivery',
            'Git',
            'Industrialisation',
            'Ingénierie agile',
            'IT automation',
            'Java',
            'Jenkins',
            'Maven',
            'Open Source',
            'Stratégie',
            'TDD',
            'Test',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Devops et Integration Continue',
          abstract:
            "Outils et méthodes pour les équipes de développement qui veulent réussir opérationnellement dans l'agilité.",
          tags: [
            'Agile',
            'Architecture',
            'Automatisation',
            'Build',
            'Cloud',
            'Continuous Delivery',
            'DevOps',
            'Docker',
            'Git',
            'Industrialisation',
            'Ingénierie agile',
            'Jenkins',
            'KPI',
            'Open Source',
            'Ops',
            'Outils',
            'TDD',
            'Test',
            'Tests unitaires',
            'Usine logicielle',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: "Les tests automatisés, ça n'est pas possible chez moi...",
          abstract: '...vraiment ? Et si on regardait ?',
          tags: [
            'Agile',
            'Automatisation',
            'Build',
            'Continuous Delivery',
            'Ingénierie agile',
            'Outils',
            'TDD',
            'Test',
            'Tests unitaires',
            'Usine logicielle',
            'Watir',
            'Webdriver',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: "Virtualisation d'accord, mais après",
          abstract:
            "VMWare, OpenStack, AWS, Google Cloud Platform, Azure, Heroku, VirtualBox, Hyper-V, OVH Cloud, Docker et Vagrant... Au delà du <a href='https://www.cloudorado.com/cloud_server_comparison.jsp' target='_blank'>coût facial</a>  je vous présente mes retours d'expérience en terme de prix final, qualité de service, complexité de scalabilité et exploitation en production.",
          tags: [
            'Agile',
            'Amazon',
            'Architecture',
            'Automatisation',
            'AWS',
            'Azure',
            'Cloud',
            'Continuous Delivery',
            'DevOps',
            'Docker',
            'Git',
            'Ingénierie agile',
            'IT automation',
            'Monitoring',
            'Ops',
            'Outils',
            'Performance',
            'Scalabilité',
            'Sécurité',
            'Stratégie',
            'supervision',
            'Usine logicielle',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Monitoring et Alerting opensource',
          abstract:
            "Si vous pensez qu'une solution de monitoring est forcement payante et/ou en mode SaaS ? Je vous propose de vous prouver le contraire ou comment via des outils opensource simple, puissants et ouverts, vous pouvez adresser vos problématiques de qualité de service.",
          tags: [
            'Architecture',
            'Asynchrone',
            'Automatisation',
            'Cloud',
            'Elasticsearch',
            'Ingénierie agile',
            'IT automation',
            'Kibana',
            'KPI',
            'Métrique',
            'Monitoring',
            'Open Source',
            'Outils',
            'Performance',
            'Scalabilité',
            'supervision',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title:
            'Opensource pour les administrations et les collectivités locales',
          abstract:
            "En France, au Royaume Uni, aux Etats Unis et partout dans l’Union Européenne, les gouvernements ont formulé des recommandations favorables à l’usage de logiciels open source dans leurs administrations. Le choix de systèmes d'information et l'interoperabilité de ceux-ci, sont la trâme future de notre bien commun numérique national. Maintenant comment on fait ;-) ?",
          tags: [
            'Architecture',
            'Asynchrone',
            'Automatisation',
            'Build',
            'Cloud',
            'Continuous Delivery',
            'Cryptographie',
            'DevOps',
            'Git',
            'Industrialisation',
            'Ingénierie agile',
            'Intégration',
            'IT automation',
            'Micro-Services',
            'MicroServices',
            'Outils',
            'Sécurité',
            'Stratégie',
            'Usine logicielle',
          ],
          lang: ['fr', 'en', 'es'],
        },
        {
          title: 'Offshore programming',
          abstract:
            "20 années d'expérience en Offshore programming (Biélorussie, Ukraine, Egypte, Chine, Inde, Maroc, Colombie, Sri Lanka....). Le pays et la langue importent beaucoup moins que la démarche, les outils de suivi, et l'adéquation entre votre niveau d'industrialisation informatique et le processus que vous allez mettre en place !",
          tags: [
            'Agile',
            'Architecture',
            'Automatisation',
            'Build',
            'Continuous Delivery',
            'DevOps',
            'Industrialisation',
            'Intégration',
            'IT automation',
            'Open Source',
            'Ops',
            'Outils',
            'Performance',
            'Scalabilité',
            'Sécurité',
            'Stratégie',
            'supervision',
            'TDD',
            'Test',
            'Tests unitaires',
            'Usine logicielle',
          ],
          lang: ['fr', 'en', 'es'],
        },
      ],
      cities: [
        'Bayonne',
        'Biarritz',
        'Saint-Jean-de-Luz',
        'Bordeaux',
        'Paris',
        'San Sebastian',
      ],
      contacts: {
        mail: 'francois@liot.org',
      },
    },
    {
      since: '2017-03-02',
      name: 'Jean-Baptiste Cazaux',
      bio: 'Développeur full stack Java/JS, Formateur JS',
      picture: 'https://avatars2.githubusercontent.com/u/576429?v=3&s=460',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/jbcazaux/',
        },
        {
          name: 'Web',
          url: 'http://codox.fr/cv/',
        },
        {
          name: 'Web',
          url: 'http://codox.fr/react-ts-bbl',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'ReactJS avec Typescript2 et ES6',
          abstract:
            "Vue d'ensemble de React avec le langage typé Typescript. Exemples, best practices, et comparaisons avec Angular",
          tags: ['React', 'Typescript', 'ES6', 'Angular'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'jbcazaux',
        mail: 'jbcazaux@gmail.com',
      },
    },
    {
      since: '2017-03-06',
      name: 'Alvin Berthelot',
      bio: 'Indépendant, expert Web et mobile',
      picture: 'http://alvin.berthelot.rocks/img/alvin_round_200.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.webyousoon.com',
        },
        {
          name: 'AboutMe',
          url: 'http://alvin.berthelot.rocks/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/alvinberthelot',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/alvinberthelot',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/alvin-berthelot-4400b0ba/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'La programmation fonctionnelle (en JavaScript) pour les nuls',
          abstract:
            "Découvrir les concepts de base de la programmation fonctionnelle avec JavaScript et comprendre quel est l'intérêt de ce paradigme de programmation.",
          tags: ['JavaScript', 'Programmation fonctionnelle'],
          lang: ['fr'],
        },
        {
          title: 'Sass, pratique tout de suite',
          abstract:
            'Sass est devenu en peu de temps le pré-processeur CSS le plus populaire. Vous ne l’utilisez pas encore ?! Plus pour longtemps, car cet atelier vous apprendra à utiliser Sass, de manière progressive, pour tirer pleinement profit de ses possibilités.',
          tags: ['Atelier', 'Sass', 'CSS', 'Pré-processeur'],
          lang: ['fr'],
        },
        {
          title: "Let's sketch together",
          abstract:
            "Un véritable atelier de collaboration entre les différents profils (métiers, développeurs, graphistes, ergonomes) participant à l'élaboration d'un produit numérique.",
          tags: ['Atelier', 'Agile', 'Collaboration', 'Sketching', 'UX'],
          lang: ['fr'],
        },
        {
          title: 'Lego4Scrum',
          abstract:
            "L'atelier de référence pour vous sensibiliser à une approche Agile / Scrum, le tout avec des Lego.",
          tags: ['Atelier', 'Agile', 'Scrum', 'Collaboration', 'Lego'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'alvinberthelot',
        mail: 'alvin.berthelot+bblunch@webyousoon.com',
      },
    },
    {
      since: '2017-01-01',
      name: 'Riadh MNASRI',
      bio: 'Architecte/Développeur Java/Kotlin, Freelance',
      picture:
        'https://en.gravatar.com/userimage/30308348/1d1bb814c3ac6720c07845a1c57cb2ca.jpg?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://www.riadh-mnasri.com',
        },
      ],
      location: 'Paris, remote',
      sessions: [
        {
          title: 'Architectures microservices',
          abstract:
            'Tout ce que vous avez toujours voulu savoir sur les architectures microservices sans jamais oser le demander',
          tags: ['architectures', 'microservices', 'patterns'],
          lang: ['fr', 'en'],
        },
        {
          title: "Un tour d'horizon des fonctionnalités clé du langage Kotlin ",
          abstract:
            'Une session de présentation des fonctionnalités clé de Kotlin avec Live Coding',
          tags: ['Java', 'Kotlin'],
          lang: ['fr'],
        },
        {
          title: 'Initiation Docker',
          abstract:
            "Une sécance d'initiation à Docker du concept à la pratique",
          tags: ['Docker', 'Container'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Kafka par la pratique',
          abstract:
            "Les concepts et des cas concrets d'utilisation dans des projets d'entreprise",
          tags: ['Kafka', 'Spring'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'riadhmnasri',
        mail: 'riadh.mnasri@gmail.com',
      },
    },
    {
      since: '2017-03-14',
      name: 'Nicolas Steinmetz',
      bio: 'Architecte Web & DevOps, CérénIT',
      picture: 'https://nicolas.steinmetz.fr/public/ns_240x160.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://www.cerenit.fr/',
        },
        {
          name: 'Web',
          url: 'https://nicolas.steinmetz.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/nicolassteinmetz/',
        },
        {
          name: 'HopWork',
          url: 'https://www.hopwork.fr/profile/nicolassteinmetz',
        },
      ],
      location: 'Ouest parisien (proche Versailles) , remote',
      sessions: [
        {
          title: 'Introduction à la plateforme Docker',
          abstract:
            "Introduction et présentation interactive sur Docker et son écosystème (docker-compose, docker swarm, docker machine, registry, etc) pour permettre de mieux appréhender l'intérêt des containers.",
          tags: ['docker', 'container', 'devops', 'administration système'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Ansible',
          abstract:
            "Introduction et présentation interactive sur Ansible et retour d'expérience sur l'utilisation d'Ansible sur de nombreux projets",
          tags: [
            'automatisation',
            'industrialisation',
            'ansible',
            'devops',
            'administration système',
          ],
          lang: ['fr'],
        },
        {
          title: 'TICK-tac, collecter et exploiter vos données temporelles',
          abstract:
            "Introduction et présentation interactive de la plateforme TICK (Telegraf, InfluxDB, Chronograf, Kapacitor) et de Grafana pour vous permettre de collecter et exploiter facilement des données temporelles (monitoring, etc) sous la forme de graphs, tableaux, dashboards et d'interagir avec celles-ci.",
          tags: [
            'tick',
            'telegraf',
            'influxdb',
            'chronograf',
            'kapacitor',
            'grafana',
            'time series',
            'données temporelles',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le Reverse Proxy - ce majordome à votre service',
          abstract:
            'Le Reverse Proxy est un composant souvent mal aimé ou ignoré des développeurs. Pourtant, il peut être utile dans de nombreux cas. Je vous propose de revoir ces cas ensemble.',
          tags: [
            'proxy',
            'apache',
            'nginx',
            'traefik',
            'devops',
            'web',
            'reverse proxy',
            'administration système',
            'sécurité',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Versailles', 'Saint-Quentin-En-Yvelines'],
      contacts: {
        twitter: '_CerenIT',
        mail: 'contact@cerenit.fr',
      },
    },
    {
      since: '2017-03-21',
      name: 'Guillaume Wallet',
      bio:
        "Software Craftsman, agiliste et développeur passioné, Ch'ti JUG zealot, clean code addict, zythophile",
      picture:
        'https://s.gravatar.com/avatar/af22c5952fd5e43d12016def954cf503?s=216',
      cities: ['Lille'],
      contacts: {
        twitter: 'GuillaumeWallet',
        mail: 'wallet.guillaume+bblfr@gmail.com',
      },
      sessions: [
        {
          title:
            "Le code source c'est comme les toilettes: c'est bien quand ça marche, c'est mieux quand c'est propre!",
          abstract:
            "Parce qu'une base de code sait nous retourner le respect qu'on lui montre, voyons comment lui témoigner un peu plus notre amour ... <3",
          tags: ['Clean Code', 'Refactoring', 'Design Patterns'],
          lang: ['fr'],
        },
        {
          title: 'Ça ne coûte pas plus cher de bien tester!',
          abstract:
            'Il y a peut-être un juste milieu entre: 0. ne rien tester du tout et 1. tout tester pour rien ?',
          tags: [
            'JUnit',
            'JBehave',
            'Serenity BDD',
            'T.D.D.',
            'B.D.D.',
            'Tests Unitaires',
            "Tests d'Integration",
            'Tests End to End',
          ],
          lang: ['fr'],
        },
      ],
      location: 'Lille',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/gwallet',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/guillaumewallet/',
        },
        {
          name: 'Web',
          url: 'http://walletguillaume.blogspot.fr/',
        },
      ],
    },
    {
      since: '2017-04-06',
      name: 'Arnaud Bailly',
      bio: 'Couteau suisse du code',
      picture: 'http://drcode.io/images/arnaud_hero_white.png',
      cities: [
        'Nantes',
        'Rennes',
        'Bordeaux',
        'Tours',
        'Vannes',
        'Paris',
        'Lille',
      ],
      contacts: {
        twitter: 'dr_c0d3',
        mail: 'arnaud@drcode.io',
      },
      sessions: [
        {
          title: 'Coding Dojo',
          abstract:
            "Mettre en place un 'coding dojo' c'est très simple, cela demande uniquement un peu de temps, de bonne volonté et surtout beaucoup de bienveillance et de curiosité.",
          tags: ['Clean Code', 'TDD', 'XP'],
          lang: ['fr', 'en'],
        },
        {
          title: 'TDD à tous les étages',
          abstract:
            "TDD != tests unitaires. Comment appliquer le cycle du TDD (red-green-refactor) à toutes les étapes du développement et à différents niveaux de granularité, des tests unitaires aux tests d'acceptation et de performance.",
          tags: ['Tests', 'TDD', 'XP', 'CI'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Haskell pour les nuls',
          abstract:
            "La programmation fonctionnelle, c'est hype, c'est cool, ça groove... mais ça fait peur, surtout en Haskell, un langage réputé pour les matheux. Je vous propose de découvrir ce langage fascinant et le monde merveilleux des types par la pratique.",
          tags: ['FP', 'Haskell', 'Type Driven Development'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Event Sourcing, Functionally',
          abstract:
            "L'Event Sourcing est une technique de modélisation et de stockage des données puissante et extrêmement flexible. Comment la mettre en oeuvre en pratique et comment elle entre en résonnance avec les principes de la programmation fonctionnelle, là est la question!",
          tags: ['FP', 'EventSourcing', 'DDD'],
          lang: ['fr', 'en'],
        },
      ],
      location: 'Nantes',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/abailly',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/arnaudbailly/',
        },
        {
          name: 'Web',
          url: 'http://abailly.github.io/',
        },
        {
          name: 'Web',
          url: 'http://drcode.io/',
        },
      ],
    },
    {
      since: '2017-04-09',
      name: 'Jean Bisutti',
      bio: 'Consultant Zenika',
      picture:
        'https://pbs.twimg.com/profile_images/606213307507351552/IJcDzWZo.jpg',
      websites: [],
      location: 'Paris',
      sessions: [
        {
          title:
            'Eliminez rapidement des bottlenecks de performance avec QuickPerf',
          abstract:
            "Supposons que vous développiez une application : comment détecter rapidement la présence d'importants bottlenecks ? Comment savoir rapidement que le code nouvellement écrit va générer de multiples requêtes SQL ? Des N+1 selects ? Comment se rendre compte rapidement que notre application va consommer énormément de mémoire ? Dans ce BBL, nous allons montrer comment QuickPerf peut nous aider à répondre à ces questions.",
          tags: [
            'Performance',
            'Test',
            'Java',
            'JVM',
            'Hibernate',
            'SQL',
            'Spring',
            ' Spring Boot',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'jean_bisutti',
        mail: 'jean.bisutti@gmail.com',
      },
    },
    {
      since: '2017-04-21',
      name: 'Julien Tanguy',
      bio: 'Développeur backend/frontend - SFEIR Nantes',
      picture:
        'https://pbs.twimg.com/profile_images/711247904661499907/NyupMTjB_400x400.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://jtanguy.me',
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'jutanguy',
        mail: 'julien.tanguy@jhome.fr',
      },
      sessions: [
        {
          title: "Introduction à l'EventSourcing",
          abstract:
            "L'event sourcing nous offre une façon différente de stocker la donnée: au lieu de stocker l'état de notre application à un instant t, on stocke les différents évènements, les faits passés. À partir de ces événements, il nous est possible de reconstruire n'importe quel état à n'importe quel instant, ce qui nous offre une grande flexibilité pour réorganiser notre application, voire même de corriger des bugs a posteriori.",
          tags: ['EventSourcing', 'Architecture'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Webpack',
          abstract:
            'Webpack est un packager qui vous permet de gérer tout votre arbre de dépendances JS/(S)CSS/Images/Json, idéal pour les frameworks javascript frontend.',
          tags: ['JavaScript', 'Webpack'],
          lang: ['fr'],
        },
        {
          title: 'Débugger sa configuration Webpack',
          abstract:
            "Le nouveau plugin webpack que vous venez d'installer vient de tout casser ? Vous n'arrivez pas à mettre à mettre à jour webpack ? Nous verrons ensemble comment comprendre une configuration webpack et se donner des outils pour l'améliorer.",
          tags: ['JavaScript', 'Webpack'],
          lang: ['fr'],
        },
        {
          title: 'Débuter en React/Redux',
          abstract:
            'Quels sont les concepts clés derrière React/Redux ? Comment débuter un nouveau projet? Comment architecturer de plus grosses applications ?',
          tags: ['JavaScript', 'React', 'Redux', 'Programmation fonctionnelle'],
          lang: ['fr'],
        },
        {
          title: 'Créer des applications frontend en Elm',
          abstract:
            'Elm (elm-lang.org) est un language de programmation pour créer des applications web facile à prendre en main. Compilé en JS, il peut être embarqué dans de nombreuses applications et sites web.',
          tags: ['Elm', 'Programmation fonctionnelle'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2017-05-01',
      name: 'Vincent Spiewak',
      bio: 'Innovation Energyzer @ DailyBrain',
      picture:
        'https://www.gravatar.com/avatar/9a7fcd04ab29f4aa26d57fa7f208f908?s=250',
      cities: ['Paris'],
      contacts: {
        twitter: 'vspiewak',
        mail: 'vspiewak+bbl@dailybrain.fr',
      },
      location: 'Paris et alentours',
      websites: [
        {
          name: 'Web',
          url: 'http://dailybrain.fr',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vincentspiewak/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/vspiewak',
        },
        {
          name: 'Hopwork',
          url: 'https://www.hopwork.fr/profile/vincentspiewak',
        },
      ],
      sessions: [
        {
          title: 'Continuous Delivery avec GoCD',
          abstract:
            'Présentation de GoCD, outil remplaçant avantageusement ce bon vieux Jenkins :D',
          tags: ['Agile', 'Lean Startup', 'Continuous Delivery', 'DevOps'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2017-05-03',
      name: 'Olivier Philippot',
      bio: 'Consultant eco-conception logicielle; |CTO chez Greenspector',
      picture: 'https://avatars0.githubusercontent.com/u/28344074?v=3&s=460',
      websites: [
        {
          name: 'Web',
          url: 'https://greenspector.com/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            'Comment être un développeur ethique et green ? Dilemne entre la course technologique et mon impact sur la société.',
          abstract:
            "Le logiciel est partout. Il est clair que le logiciel a un impact réel sur le monde... Nous, développeurs sommes les architectes du monde virtuel au service du réel. Nos actions ont un effet bien réel. Bénéfique mais aussi néfaste. Exclusion sociale, impact environnemental, obsolescence sont des effets bien réel de nos logiciels. Mais avons nous le choix face au demandes de nos utilisateurs et clients et aux contraintes associées (planning, sécurité...) Et bien oui, c'est le choix qui est fait par de nombreuses sociétés et développeurs : bénévolat comme code for America, Eco-conception de logiciel publique... Etre développeur ethique et green est possibles, nous verrons concretement comme faire cela au jour le jour.",
          tags: ['Green', 'Eco-conception', 'Ethique'],
          lang: ['fr'],
        },
        {
          title:
            "Iotception : Mesure de l'énergie d'Android Things sur Raspberry avec Arduino",
          abstract:
            "(introduction / live coding / présentation) Découvrez l'IoT avec cette session qui mèle hardware, DIY et logiciel avec l'angle green. Session jouée à Breizhcamp, Android Maker",
          tags: ['IoT', 'Android Things', 'Green', 'Raspberry'],
          lang: ['fr'],
        },
        {
          title:
            "Mesurez votre consommation d'énergie sur Android et sur HTML5",
          abstract:
            "L'autonomie est un critère important pour les utilisateurs mobiles mais aussi pour l'iOT. Mais elle est très rarement mesurée par les développeurs d'application ou même de site web ou d'application. On ne découvre des problèmes que trop tard (ou jamais). Les plateformes actuelles fournissent cependant des API permettant de récupérer des données. Android, HTML5... En 5 mn, vous pouvez avoir une donnée d'énergie. Je vous expliquerai comment utiliser ces API, comment utiliser et interpréter les données, et les utiliser dans vos tests.",
          tags: ['Android', 'HTML5', 'Green', 'Energie'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Nantes', 'Rennes'],
      contacts: {
        twitter: 'simplygreenit',
        mail: 'ophilippot@greenspector.com',
      },
    },
    {
      since: '2017-05-19',
      name: 'Charles Bouttaz',
      bio:
        'Developer, Agile & Software Craftsmanship advocate. Co-organisateur du LyonJUG et de la conférence MiXiT.',
      picture:
        'https://www.gravatar.com/avatar/bd0f602050b2f95901199d3a3789eb56?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://charles-bouttaz.com',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Tests unitaires et TDD',
          abstract:
            'Vous aimeriez tester votre code mais vous ne savez pas par ou commencer ? Introduction en douceur à la démarche avec tous les outils (JVM) nécessaires.',
          tags: ['TDD', 'Test', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Coding Dojo',
          abstract:
            'Vous avez envie de découvrir ou d’approfondir des techniques de codes mais vous manquez de temps ? Un coding dojo c’est l’occasion de progresser en groupe et par la pratique. Je peux animer les sujets suivants : TDD, refactoring, clean code, SOLID, design patterns',
          tags: ['Dojo', 'Refactoring', 'Clean Code'],
          lang: ['fr'],
        },
        {
          title: 'Le versionning avec Git',
          abstract:
            'Au choix en fonction du niveau : Introduction à Git - les concepts. Git avancé - les trucs et astuces qui changent tout. Git sous le capot - fonctionnement interne de Git.',
          tags: ['Git'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'CharlesBouttaz',
        mail: 'c.bouttaz+bbl@gmail.com',
      },
    },
    {
      since: '2017-05-19',
      name: 'Sébastien Friess',
      bio: 'Développeur, formateur, team leader et vélotafeur 🚴 - SFEIR',
      picture:
        'https://en.gravatar.com/userimage/61906989/1de60a01c2a5061f2538aadc2eea8b71.jpg?size=200',
      websites: [
        {
          name: 'Web',
          url: 'https://frenchgo.fr',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/sebastienfr',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/sebastienfr',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title:
            'Microservice, comment peler le monolith et en faire de bonnes frites',
          abstract:
            'Les monoliths ont la vie de plus en plus dure, les microservices deviennent une réalité mais à quoi faut-il faire attention pour aborder ce virage architectural ?',
          tags: ['Microservice', 'Architecture', 'Monolith'],
          lang: ['fr'],
        },
        {
          title: "Voyage au coeur de Go, ou le périple d'un nouveau langage",
          abstract:
            "Retour d'expérience d'une année de microservices Golang en production, comment démarrer, Go ses forces et ses faiblesses",
          tags: ['Go', 'Golang', 'REX', 'Google'],
          lang: ['fr'],
        },
        {
          title: 'Live coding, servir du HTTP en Go',
          abstract:
            "Session de live coding d'un serveur web HTTP et HTTP/2 push en Go avec les API natives du langage",
          tags: ['Go', 'Golang', 'HTTP', 'HTTP/2', 'HTTPS', 'push'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille', 'Paris', 'Strasbourg'],
      contacts: {
        twitter: 'sebastienfriess',
        mail: 'sebastienfr@gmail.com',
      },
    },
    {
      since: '2017-06-04',
      name: 'Philippe Charrière',
      bio:
        'Tech evangelist, Resp. Commercial 🙀, Développeur, ex Chef de projet, ex Manager, ...  - CLEVER-CLOUD',
      picture:
        'https://www.clever-cloud.com//images/team/philippe-charriere.jpg?size=200',
      websites: [
        {
          name: 'Blog',
          url: 'http://k33g.github.io/all.html',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/phcharriere/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/k33g',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Microservices, choisir le bon cheval: Vert.X',
          abstract:
            "Il n'y a pas encore de standard 🤔, mais il faut être prêt. Vert.X ❤️ permet de construire des solutions 'plateform agnostic' et vous offre quelques helpers sympathiques (Discovery, Circuit Breaker,...). Cette session est l'occasion de voir comment initialiser le code des composants d'une architecture microservices en Vert.x (mais pas que 😉)",
          tags: [
            'Microservices',
            'Architecture',
            'Patterns',
            'JavaScript',
            'Scala',
            'Java',
          ],
          lang: ['fr'],
        },
        {
          title: 'Programmation Fonctionnelle en JavaScript',
          abstract:
            "Le JavaScript est fonctionnel probablement depuis le début, mais c'est aussi un très bon langage pour s'initier à d'autres concepts comme les Functors, les Monades, les Unions Types ... ou en mode Vanilla ou avec Monet (un petit framework fonctionnel simple et très pratique) et d'autres. Cette session est l'occasion de démystifier certains concepts, de voir pourquoi ils sont utiles... A la fin vous pourriez vouloir faire du Scala 😜",
          tags: ['Programmation Fonctionnelle', 'JavaScript', 'Scala'],
          lang: ['fr'],
        },
        {
          title: "CI, CD ??? Finalement ce n'est pas dur",
          abstract:
            "Intégration continue, déploiement continu (et d'autres termes) sont des concepts que j'ai utilisé longtemps sans savoir les mettre réellement en oeuvre: j'étais chef de projet 😉 donc c'était l'équipe qui faisait le boulot que j'avais vendu au client 🕺. Mes dernières expériences professionnelles m'ont obligé à le faire moi-même, et finalement j'ai aimé ❤️. Sans être LE spécialiste du domaine, cette session me permet de présenter quelques éléments pour s'y mettre en douceur. Cette session est plutôt pour ceux qui ne se sente pas à l'aise avec le sujet. Nous parlerons de GitHub, Jenkins, et d'autres outils plus ou moins incontournables de nos jour (et un exemple simple de mise en oeuvre reproductible chez vous), mais on ne parlera pas que technique.",
          tags: [
            'Intégration Continue',
            'Déploiement Continue',
            'Jenkins',
            'GitHub',
            'GitLab',
            'Git',
            'DEVOPS',
            'ChatOps',
            'Workflow',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Utilisez votre DVCS comme un Intranet (pour autre chose que du code)',
          abstract:
            "Un an chez GitHub, ça marque 😉 et j'ai découvert que finalement un DVCS (distributed version control system), on peut l'utiliser pour autre chose que du code, et en plus on n'est pas obligé d'être développeur: c'est bon aussi pour les RH (onboarding), les commerciaux 😱 (préparer une réponse à plusieurs), ... Et c'est un super outil collaboratif, de veille, de partage d'informations (gain de temps), de documentation ... de rangement aussi: je suis devenu tellement addict que j'en ai un qui tourne en local pour mes docs, snippets, sides projects, ... L'utiliser comme ceci c'est aussi un moyen doux pour apprendre à s'en servir et en montrer l'intérêt aux populations non techniques.",
          tags: [
            'DVCS',
            'Gestion de configuration',
            'Git',
            'RH',
            'GitHub',
            'GitLab',
            'Commerciaux',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon', 'Grenoble', 'Nantes', 'Paris'],
      contacts: {
        twitter: '@k33g_org',
        mail: 'ph.charriere@gmail.com',
      },
    },
    {
      since: '2017-06-06',
      name: 'Christophe Furmaniak',
      bio: 'Consultant Architecture et Culture DevOps chez Zenika',
      picture:
        'https://722.kalaari.net/wp-content/uploads/2017/06/Zenika-16-cropped-400x400.png',
      websites: [
        {
          name: 'Web',
          url: 'https://722.kalaari.net/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title:
            'Rancher, le (petit) orchestrateur docker qui vous veut du bien',
          abstract:
            'Les orchestrateurs comme Kubernetes ou Mesos peuvent faire peur de part leur potentielle complexité à être mis en oeuvre et intégrés dans une infrastructure existante. Nous découvrirons ensemble Rancher, un autre orchestrateur, plus facile à intégrer, mais tout aussi puissant.',
          tags: ['Docker', 'Rancher', 'Orchestrateur'],
          lang: ['fr'],
        },
        {
          title:
            'Orchestration de conteneurs : DC/OS Mesos, Kubernetes ou Swarm?',
          abstract:
            'Cette présentation propose de démystifier la notion d’orchestration de conteneurs et d’en comparer quelques uns parmi les plus (re)connus: Mesos, Kubernetes et Swarm.',
          tags: [
            'Docker',
            'Orchestrateur',
            'Mesos',
            'DC/OS',
            'Kubernetes',
            'Swarm',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Containers et configuration: des promesses au concret avec git et confd',
          abstract:
            'Docker (et le principe des conteneurs en général) est fortement lié à la promesse d’une image unique qui peut tourner partout et que le même artféfact peut être utilisé sur n’importe quel environnement “runtime” (du poste de développement jusqu’en production!) sans avoir à reconstruire une image à chaque fois. Mais comment atteindre cet objectif de manière pratique et efficace tout en étant capable de conserver l’historique de la configuration de vos applications sur les différents environnements?',
          tags: ['Docker', 'configuration', 'git', 'confd'],
          lang: ['fr'],
        },
        {
          title: "Docker en prod? Bonnes pratiques et points d'attention",
          abstract:
            "Utiliser des containers Docker en prod, c'est top...si vous n'oubliez pas qu'il faudra prendre en compte de nouvelles contraintes. Parlons-en.",
          tags: ['Docker', 'Production'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'cfurmaniak',
        mail: 'christophe.furmaniak@zenika.com',
      },
    },
    {
      since: '2017-05-25',
      name: 'Romain Tartière',
      bio: 'FreeBSD / Hacker / Sysadmin / FLOSS / BOFH / Vie privée',
      picture:
        'https://www.gravatar.com/avatar/3e8420016e2c1f4c6e7d8f526f96baeb?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://romain.blogreen.org/',
        },
        {
          name: 'Web',
          url: 'https://mamot.fr/@smortex',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/smortex',
        },
        {
          name: 'Web',
          url: 'https://www.openhub.net/accounts/smortex',
        },
      ],
      location: 'Faaa',
      sessions: [
        {
          title: 'FreeBSD',
          abstract:
            "Mais qui sont ces infâme BSDistes ?  Pourquoi diable utilisent-ils un système dérivé du mamouth préhistorique des années 70 qu'est UNIX alors que bon, Linux, c'est moderne… Non ? Tout public (barbu·e·s… psychologiquement si pas physiquement).",
          tags: ['FreeBSD', 'UNIX', 'POSIX'],
          lang: ['fr'],
        },
        {
          title: "Tester, c'est douter !",
          abstract:
            "Personellement, je doute souvent… donc je teste tout ce qui peut l'être…  Des fois, c'est simple…  Mais parfois, c'est plus compliqué (vous avez déjà fait des tests unitaires en C ?).  Cette conférence s'adresse à des développeureuses déprimé·e·s par la maintenance de code défraîchi d'une application monolithique et qui aspirent à une réduction de sa dette techniqe.",
          tags: ['TDD', 'BDD', 'Ruby', 'RSpec', 'Cucumber'],
          lang: ['fr'],
        },
        {
          title: 'Puppet / Marionette Collective',
          abstract:
            "Qu'est-ce-que l'Infrastructure as Code peut apport à votre organisation ?  L'homogénéisation de la configuration de vos machines ?  La facilité du redéploiement de vos services ?  La rapidité du déploiement des mises à jour de sécurité d'OpenSSL ?  Cette conférence à comme objectif de vous présenter Puppet et Marionette Collective pour que vous puissiez identifier les briques qui vous intéresseront, vous donner quelques pointeurs pour bien débuter et mettre en avant quelques points de vigilance. Public: celles et ceux qui gèrent plus de 3 machines.",
          tags: ['Puppet', 'Marionette Collective'],
          lang: ['fr'],
        },
        {
          title: 'Démystification des Infrastructures à Clés Publiques (PKI)',
          abstract:
            "« Les PKI c'est peut-être évident pour vous, mais ça ne l'est pas pour tout le monde. », c'est en substance ce que m'a dit le responsable d'une société agréé pour l'hébergement de données de santé quand je lui faisais remarquer quelques difficultés de compréhension avec ses équipes techniques…  Pourtant, la complexité des infrastructure à clés publiques ne vient pas des technologies utilisées, mais plutôt de l'empilement des concepts qui y sont associés.  Bref, quand on a compris quel rôle joue chaque brique, tout s'assemble comme par magie et devient très digeste.  Remise à niveau.  Tout public qui manipule des certificats (développeurs et sysadmins).",
          tags: ['Cryptographie', 'Sécurité', 'PKI', 'SSL', 'X.509'],
          lang: ['fr'],
        },
      ],
      cities: ['Faaa', 'Papeete'],
      contacts: {
        mail: 'romain+bbl@blogreen.org',
      },
    },
    {
      since: '2017-06-15',
      name: 'Eve Vinclair-Berkemeier',
      bio: 'People Manager & Coach Agile',
      picture: 'img/baggers/photo_eve_vinclair.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.knplabs.com/',
        },
      ],
      location: 'Caen, remote',
      sessions: [
        {
          title: 'Découvrir la gestion de projet agile avec Scrum et Kanban',
          abstract:
            'Petite présentation théorique des méthodes agiles et surtout, discuter et échanger autour de vos expériences sur vos projets !',
          tags: ['Scrum', 'Kanban', 'Gestion de projet agile'],
          lang: ['fr'],
        },
        {
          title: 'Le Sprint 0',
          abstract:
            'Pour les confirmés en gestion de projet agile : préparer un Sprint 0 en utilisant le BDD',
          tags: ['Gestion de projet agile', 'BDD'],
          lang: ['fr'],
        },
        {
          title: 'Happiness au travail - aussi en remote',
          abstract:
            'Présentation du Happiness Management chez KNPLabs. Je vais vous montrer ma petite boîte à outils de happiness management pour des équipes sur place et en remote.',
          tags: ['Management 3.0', 'Happiness', 'Remote', 'TeamBuilding'],
          lang: ['fr'],
        },
      ],
      cities: ['Caen'],
      contacts: {
        twitter: '@Evey_Online',
        mail: 'eve.vinclair@knplabs.com',
      },
    },
    {
      since: '2017-06-16',
      name: 'Grégory Weinbach',
      bio:
        'CTO, senior developer, software architect, Domain Driven Designer, modelling addict',
      picture:
        'http://www.gravatar.com/avatar/ba2153e6f9d0b36cc822d59f6c7355a9?s=200',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gweinbach/',
        },
        {
          name: 'Slideshare',
          url: 'https://fr.slideshare.net/gweinbach',
        },
      ],
      location: 'Paris, Ouest parisien',
      sessions: [
        {
          title: 'UX : le Poids des Mots...',
          abstract:
            "L'expérience utilisateur est un problème trop sérieux pour le confier à des graphistes ! Une bonne (ou une mauvaise) ergonomie ne se détermine pas en conception : à ce moment, il est déjà bien trop tard.<br/>L'UX, c'est d'abord une affaire de mots : de bonnes (ou de mauvaises !) questions posées aux utilisateurs et des réponses formulées avec précision.<br/>Où l'on apprend qu'une User Story (ou un Cas d'Utilisation) mal intitulée peut mutliplier par quatre le nombre d'écrans et qu'entre un &ldquo;un&rdquo; et un &ldquo;mon&rdquo;, il y a trois clicks de souris... et que même une démarche agile peinera à rectifier ce qui se décide dès la Vision projet.",
          tags: ['UX', 'Design', 'Agile', 'DDD', 'Domain Driven Design'],
          lang: ['fr'],
        },
        {
          title: "Il n'y a pas de bon modèle métier",
          abstract:
            "On vous le répète : une application répond bien aux besoins de ses utilisateurs si elle reflète bien leur métier. Les approches du développement centrées sur l'Utilisateur sont d'ailleurs faites pour ça : le DDD d'Eric Evans concentre ses efforts sur la modélisation du &ldquo;Coeur du Domaine&rdquo;.<br/>En pratique, comment faire un &ldquo;bon&rdquo; Modèle Métier ?<br/>Traditionnellement, on dit qu'il faut représenter au mieux la réalité de ce métier : faire &ldquo;coller&rdquo; le code au plus près du monde réel pour garantir l'adéquation au besoin.<br/>Malheureusement, cette approche naïve est mauvaise ! Pourquoi ? Parce qu'un logiciel ne représente pas le monde réel, il informatise des services rendus.<br/>Parce qu'un Modèle de Domaine n'est pas un Modèle du Métier, c'est un modèle de conception répondant à des exigences de codage.<br/>Et je vous montrerai, à partir d'exemples, pourquoi il ne doit pas être construit en observant le monde réel mais à partir des besoins de présentation ou de services.",
          tags: ['Modèle', 'Bounded Context', 'DDD', 'Domain Driven Design'],
          lang: ['fr'],
        },
        {
          title: 'Lean Enterprise Architecture',
          abstract:
            "Les équipes d’architecture d'entreprise accouchent souvent de monstres prométhéens dont la destinée est de garnir d'énormes armoires (virtuelles).<br/>La clé de l'adoption de l'architecture d'entreprise par les équipes opérationnelles est évidemment son utilité : il faut rendre l'architecture d'entreprise la plus « lean » possible, c'est-à-dire la concentrer sur la valeur ajoutée.<br/>Nous verrons que si cela passe souvent par une simplification des frameworks, c'est d'abord dans le travail quotidien du modélisateur que réside la solution : se concentrer sur l'objectif de chaque modèle, sur l'intention de chaque diagramme, revenir au sens derrière chaque élément de modélisation et apprendre quand ne pas modéliser.",
          tags: [
            'Modélisation',
            'Lean',
            'Enterprise Architecture',
            "Architecture d'Entreprise",
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Versailles', 'Saint-Quentin-En-Yvelines'],
      contacts: {
        twitter: 'gweinbach',
        mail: 'gweinbach@ezoky.com',
      },
    },
    {
      since: '2017-06-20',
      name: 'Adrien Pessu',
      bio: 'Développeur, geek, etc',
      picture:
        'https://adrien.pessu.net/author/admin/avatar_hu68adafc281e32380a65db568a64c57fe_43076_250x250_fill_q90_lanczos_center.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://adrien.pessu.net/',
        },
        {
          name: 'Web',
          url: 'https://github.com/adrienpessu/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/adrien-pessu/',
        },
      ],
      location: 'Nantes et environs.',
      sessions: [
        {
          title: "DevSecOps, j'ai mis de la sécurité dans mon DevOps",
          abstract:
            "Cela fait une dizaine d'années que nous essayons d'appliquer les principes du DevOps pour livrer plus vite en production. Sur le chemin de l'unification des devs et des ops, la sécurité est encore un frein. Alors faut-il ignorer la sécurité et attendre la fuite de données ou bien agir maintenant, s'organiser, et automatiser. Le DevSecOps nous promet d'intégrer la sécurité dans nos pipelines CI / CD mais aussi dans notre processus de développement pour que la sécurité fasse partie intégrante de notre culture et ne soit pas un goulot d'étranglement.",
          tags: ['DevSecOps', 'DevOps', 'Security'],
          lang: ['fr'],
        },
        {
          title: 'CORS, XSS, CSRF, SQL injection #BackToTheBasics',
          abstract:
            'Pas besoin d’être RSSI ou DevOpsSec pour se soucier de sécurité. Que l’on soit développeur back ou front, la sécurité est l’affaire de tous. Pourtant, on la confie souvent aveuglement à nos frameworks. Mais alors comment vérifier la sécurité de nos données et de nos utilisateurs. A travers quelques démos, nous allons voir les failles les plus basiques et pourtant les plus répandus : CORS, XSS, CSRF et SQL injection.',
          tags: ['CORS', 'XSS', 'CSRF', 'SQL Injection', 'Sécurité', 'DevSec'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'adrienpessu',
        mail: 'adrien@pessu.net',
      },
    },
    {
      since: '2017-06-26',
      name: 'David DE CARVALHO',
      bio:
        "Technical Leader et Ingénieur Développeur 'touche-à-tout' depuis une dizaine d'années (13 ans). @PagesJaunes (depuis 7 ans)",
      picture: 'img/baggers/unknown.png',
      websites: [
        {
          name: 'Web',
          url: 'http://www.pagesjaunes.fr/',
        },
        {
          name: 'Viadeo',
          url: 'http://www.viadeo.com/p/002typxcger1kb8',
        },
      ],
      location: 'Rennes et environs',
      sessions: [
        {
          title:
            "Retour d'EXperience PagesJaunes : les transactions dans une architecture microservices",
          abstract:
            'Comment sécuriser les transactions dans une architecture distribuée (microservices) sans que cela coûte un bras ? Découvrons ensemble comment chez PagesJaunes nous avons mis en place une architecture distribuée basée sur l’asynchronisme et la reprise de données automatique.',
          tags: [
            'Java',
            'REST',
            'Microservices',
            'RabbitMQ',
            'MOM',
            'Message-Oriented-Middleware',
            'Cassandra',
            'Asynchrone',
            'Assynchronisme',
            'Architecture',
          ],
          lang: ['fr'],
        },
        {
          title: "Pimentez votre 'carto' avec du temps réel",
          abstract:
            "Le temps réel : c'est facile et rapide avec le protocole ServerSentEvent - (NodeJS, RabbitMQ, protocole SSE). Partez d’une base Node, saupoudrez d’un peu de RabbitMQ, puis ajoutez du SSE et vous obtiendrez une belle carte interactive temps réel. Session en live-coding.",
          tags: [
            'SSE',
            'ServerSentEvent',
            'Node',
            'NodeJS',
            'RabbitMQ',
            'MOM',
            'Message-Oriented-Middleware',
            'Asynchrone',
            'Assynchronisme',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'dedece35',
        mail: 'ddecarvalho@pagesjaunes.fr',
      },
    },
    {
      since: '2017-06-30',
      name: 'Yannick DALBIN',
      bio:
        "Développeur passionné par le web depuis tout petit, aujourd'hui co-foundateur d'HashtagTrophy, formateur et co-fondateur de Startup Marseille - premier espace de co-living dédié aux Startups sur Marseille.",
      picture:
        'https://fr.gravatar.com/userimage/27284879/f77fd2b6d51b61605576721be9a8dc47.jpeg?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://hashtagtrophy.com',
        },
        {
          name: 'Web',
          url: 'https://yannickdalbin.com',
        },
        {
          name: 'Web',
          url: 'https://startupmarseille.com',
        },
        {
          name: 'Web',
          url: 'https://youtube.com/yannickdalbin',
        },
        {
          name: 'Web',
          url: 'https://twitter.com/yannickda',
        },
        {
          name: 'Web',
          url: 'https://facebook.com/yannickdalbin',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/yannickda',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/yannickda',
        },
      ],
      location: 'Marseille et environs',
      sessions: [
        {
          title: 'Présentation de React.js',
          abstract:
            "React.js tout le monde en parle et ce n'est pas pour rien ! Cette librairie bouscule les codes de développement pour le frontend et rend le dév passionant en plus d'être très rapide. Je vous propose de faire un tour d'horizon afin d'en savoir plus.",
          tags: ['Javascript', 'React.js', 'Librairie', 'Vue', 'Component'],
          lang: ['fr'],
        },
        {
          title: 'ES6',
          abstract:
            "Réaliser un projet Javascript sans ES6 parraît aujourd'hui impensable ! Je vous propose de découvrir les nouveautés du langage et vous allez vite voir que son utilisation est indispensable !",
          tags: ['Javascript', 'ES6'],
          lang: ['fr'],
        },
        {
          title: 'Webpack',
          abstract:
            "Souvent considéré comme compliqué à prendre en main, webpack semble tout de même s'imposer comme outils de développement. Je vous propose de faire un tour d'horizon de cet outils magique qui va changer votre façon de gérer les assets",
          tags: ['Javascript', 'Webpack'],
          lang: ['fr'],
        },
      ],
      cities: ['Marseille'],
      contacts: {
        twitter: 'yannickda',
        mail: 'yannick@idvive.com',
      },
    },
    {
      bio:
        'Développeur Craftsman passionné - Tech Lead/Scrum Master chez Ogury.',
      cities: ['Paris'],
      contacts: {
        mail: 'david.caramelo83@gmail.com',
        twitter: 'David_Caramelo',
      },
      location: 'Paris',
      name: 'David Caramelo',
      picture:
        'http://fr.gravatar.com/avatar/422304dc5c24f5b91234052347770cb7?size=400',
      sessions: [
        {
          abstract:
            "Ogury est la plateforme de data mobile qui permet d’accéder aux données comportementales des profils de plus de 400 millions de mobinautes répartis dans plus de 120 pays. Monter une stack haute fréquence n’est pas facile, David et Carles vous parleront de leur retour d'expérience. Durant cette présentation, Carles et David vous propose de revivre avec eux l’évolution de l’architecture d’Ogury. D’un POC monolite à une architecture micro-service orienté perf, constituée des 700 instances chez AWS.",
          lang: ['fr'],
          tags: [
            'AWS',
            'Architecture',
            'Optimisation',
            'Evolution',
            'Big Data',
          ],
          title:
            "Optimisations et Performances d'un POC en prod @ plusieurs milliards de requêtes",
        },
      ],
      since: '2017-07-06',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/dcaramelo',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/david-caramelo-1691b21a/',
        },
      ],
    },
    {
      bio:
        'Développeur Craftsman passionné - Lead Platform Engineer chez Symphony',
      cities: ['Nice', 'Sophia-Antipolis'],
      contacts: {
        mail: 'jpasseron@gmail.com',
        twitter: 'jeremp',
      },
      location: 'Nice',
      name: 'Jeremy Passeron',
      picture:
        'https://www.gravatar.com/avatar/60c25d9d63a09faa99ea6a5f34dc3356?size=200',
      sessions: [
        {
          abstract:
            "Plus de 15 ans après la révolution du Manifeste Agile, de nombreux projets informatiques continuent d'échouer, pourquoi ? Venez découvrir le mouvement Software Craftsmanship qui tente d'en identifier les causes et d'y apporter des solutions.",
          lang: ['fr'],
          tags: ['Code Legacy', 'Legacy', 'Agile', 'TDD', 'Craftmanship'],
          title: 'Software Craftsmanship : Make programming great again',
        },
      ],
      since: '2017-07-07',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/jeremp',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jeremypasseron/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/jeremp',
        },
      ],
    },
    {
      since: '2017-07-19',
      name: 'Nicolas Joseph',
      bio: 'Developpeur PHP',
      picture: 'https://nicolas.joseph.pro/avatar',
      websites: [
        {
          name: 'Web',
          url: 'https://sanpi.homecomputing.fr',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/sanpii',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/sanpii',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Vos premiers pas avec Rust',
          abstract:
            "Langage le plus apprécié par les <a href='https://insights.stackoverflow.com/survey/2017#most-loved-dreaded-and-wanted'>utilisateurs de stackoverflow</a> pour la seconde année, rust a profondément amélioré mon quotidien de développeur/bidouilleur. Malheureusement sa courbe d’apprentissage peut en rebuter plus d’un·e, je vous propose donc de passer ces premiers instants difficiles ensemble.",
          tags: ['Rust'],
          lang: ['fr'],
        },
        {
          title: 'Autre chose ?',
          abstract:
            "N’hésitez pas à piocher dans les <a href='https://github.com/sanpii/slides/releases'>sujets dont j’ai déjà parlés</a>.",
          tags: ['Behat', 'Embarqué', 'PHP', 'Symfony'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'sanpi_',
        mail: 'nicolas+bbl@joseph.pro',
      },
    },
    {
      since: '2017-07-28',
      name: 'Sylvain Monteillet',
      bio: 'Développeur agile',
      picture:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/076/26d/3830312.jpg',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/smonteillet',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/sylvain-monteillet-52403aa0/',
        },
      ],
      location: 'Toulouse',
      sessions: [
        {
          title: 'Collaborer avec Git',
          abstract:
            'Dans cette présentation, nous allons aborder des outils mis à disposition par git nous permettant de gérer nos commits ainsi que ceux des gens avec qui on collabore. Nous parlerons de merge, de rebase et de cherry-pick illustrés au travers de 2 modèles de branching: le trunk based development et feature branch.',
          tags: ['Git'],
          lang: ['fr'],
        },
        {
          title: 'Réorganiser vos commits avec Git rebase interactive',
          abstract:
            'Dans cette démo, nous allons prendre un historique de commits locaux un peu bancal et le refaçonner pour lui donner tout son sens.',
          tags: ['Git'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        twitter: 'smonteillet',
        mail: 'sylvain.monteillet@gmail.com',
      },
    },
    {
      since: '2017-10-01',
      name: 'Charles Sabourdin',
      bio: 'Consultant Architecture/DevOps chez Ippon Technologies',
      picture: 'https://pbs.twimg.com/media/C9MsXMRWAAALBZr.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://kanedafromparis.github.io/',
        },
      ],
      location: 'Paris, remote',
      sessions: [
        {
          title: 'Introduction a openshift',
          abstract:
            "Il s'agit d'une presentation de l'outils openshift et d'un certain nombre de ces concepts",
          tags: ['Openshift', 'kubernetes', 'Docker', 'DevOps'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Java dans docker',
          abstract:
            'Pourquoi quand vous demandez à mettre en production java dans docker, on vous fait la grimace ? Pourquoi vos container crashent si souvent et pourquoi vos node swapent-ils autant ? Partageons ensemble nos découvertes et réflexions sur java dans docker.',
          tags: ['Openshift', 'kubernetes', 'Docker', 'DevOps', 'java', 'JVM'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Premiers pas avec Docker',
          abstract:
            'Il s’agit dans un premier temps de présenter Docker, ses cas d’usage et quelques bonnes pratiques d’utilisation. Le but est de présenter Docker, son mode de fonctionnement et son écosystème. Ce qu’il peut apporter et les pièges à éviter',
          tags: ['Openshift', 'kubernetes', 'Docker', 'DevOps', 'Securité'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'kanedafromparis',
        mail: 'kanedafromparis@gmail.com',
      },
    },
    {
      since: '2017-08-29',
      name: 'Julien Danjou',
      bio: 'Ingénieur logiciel Open Source.',
      picture:
        'https://julien.danjou.info/content/images/2018/03/jdanjou-logo-round-1.png',
      websites: [
        {
          name: 'Web & blog',
          url: 'https://julien.danjou.info',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/jd',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/juliendanjou',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Produire des applications Python scalable',
          abstract:
            "Présentation et discussion autour des méthodes et des outils qui permettent d'écrire des applications Python qui sont scalable à grande échelle.",
          tags: ['Python', 'Performance', 'Scale'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Automatiser votre workflow GitHub avec Mergify',
          abstract:
            "Présentation de Mergify, un service d'automatisation des pull requests GitHub.",
          tags: ['Git', 'GitHub'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'juldanjou',
        mail: 'julien+bbl@danjou.info',
      },
    },
    {
      since: '2017-09-28',
      name: 'Amrouche Hamza',
      bio: 'Lead Dev @ Les-Tilleuls.coop | Core Member API-Platform',
      picture:
        'https://les-tilleuls.coop/client/a46ea2d55c88fdb3d284dae09ff0d984.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://github.com/Simperfit',
        },
      ],
      location: 'Amiens, Lille, remote',
      sessions: [
        {
          title: 'Api-Platform, fast web APIs',
          abstract:
            "Un petit workshop autour d'API-Platform, lancement du projet jusqu'au concept d'api hypermedia",
          tags: ['API', 'PHP'],
          lang: ['fr'],
        },
        {
          title:
            "Déploiement continu d'application API-centric avec Kubernetes",
          abstract:
            'Savez-vous ce qu’est un POD ? Souhaitez-vous utiliser votre Dockerfile en production facilement ?, Oubliez les pertes de temps et d’énergie dûs aux processus de déploiement complexes. Aujourd’hui, avec Docker et Kubernetes, vous pouvez consacrer votre temps à des choses plus intéressantes et productives. En pratiquant l’intégration continue à partir du Dockerfile à la production, voyons comment déployer des applications API-centric sur Kubernetes en prenant exemple sur la démo d’API Platform.',
          tags: ['PHP', 'Kubernetes', 'Docker', 'DevOps'],
          lang: ['fr'],
        },
      ],
      cities: ['Amiens', 'Lille'],
      contacts: {
        twitter: 'cDaed',
        mail: 'hamza@les-tilleuls.coop',
      },
    },
    {
      since: '2017-09-28',
      name: 'Haja Rambelontsalama',
      bio:
        "Ingénieur Architecte et Coach technique, agiliste de coeur, crafteur d'esprit, le partage de passions est ce qui m'anime.",
      picture:
        'http://gravatar.com/avatar/a3378480b86e303c3fdb639a4bca6312?s=512',
      websites: [
        {
          name: 'Web',
          url: 'http://hrambelo.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/hrambelo/',
        },
      ],
      location: 'Rennes, Nantes, Saint Malo, Vannes, ...',
      sessions: [
        {
          title:
            'Mon équipe se focalise sur la valeur métier ... grâce au code',
          abstract:
            "S'adressant à tous les professionnels du numérique, avec ou sans background technique, cette conférence fait le tour de plusieurs pratiques d'utilisation du code pour les différentes parties de la création de produit numérique depuis les spécifications fonctionnelles ou la documentation jusqu'à l'infrastructure.",
          tags: [
            'Agile',
            'DevOps',
            'ALM',
            'Cloud',
            'Infra as Code',
            'Doc as Code',
            'Conf as Code',
            'Spec as Code',
            'Pipeline as Code',
            'Craftsmanship',
            'Software Craftsmanship',
            'TDD',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Retour vers le passé|futur avec Git',
          abstract:
            'Retour sur les forces et killer features de Git, possiblité de faire un coding dojo. ',
          tags: ['Agile', 'VCS', 'DVCS', 'Git', 'Coding Dojo'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Lego4DevOps',
          abstract:
            "Sensibilisation à l'intérêt du DevOps à travers un jeu Lego visant à reconcilier développeurs et opérationnels.",
          tags: ['Agile', 'DevOps', 'ALM', 'Atelier'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        twitter: 'hrambelo',
        mail: 'bensmania@gmail.com',
      },
    },
    {
      since: '2017-09-29',
      name: 'Clément Danjou',
      bio: 'Front-end Consultant, Javascript developer',
      picture:
        'https://www.gravatar.com/avatar/7c78e70c64fe464a708c465cdbcc5432?s=200',
      websites: [
        {
          name: 'Web & blog',
          url: 'https://clement.danjou.io',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/birdy-',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/clementdanjou',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: "Migration d'AngularJS vers React",
          abstract:
            "Dans cette présentation, j'explique les différentes étapes nécessaires pour pouvoir migrer une application AngularJS vers React de façon itérative.",
          tags: ['React', 'AngularJS', 'Javascript'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Internationalisation du front-end',
          abstract:
            "De l'outil de traduction aux librairies JS en passant par l'intégration continue, je présente un workflow qui permet de fluidifier l'internationalisation d'une plateforme et éviter quelques écueils.",
          tags: ['Internationalisation', 'i18n', 'Front-end'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'cledanjou',
        mail: 'clement@danjou.io',
      },
    },
    {
      since: '2017-10-11',
      name: 'Romain Touzé',
      bio: 'Développeur fullstack',
      picture:
        'https://s3-eu-west-1.amazonaws.com/rtodev.tech/img/avatar_tourne.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://rtodev.tech',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rtouze',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/rtouze',
        },
      ],
      location: 'Brest',
      sessions: [
        {
          title: "Domain Driven Design (en moins d'une heure)",
          abstract:
            'Le Domain Driven Design (DDD) est une méthodologie de conception formalisée par Eric Evans. Cette présentation en donne les principaux concepts historiques et leurs adaptations aux architectures modernes.',
          tags: ['Domain Driven Design', 'DDD', 'Conception', 'Méthodologie'],
          lang: ['fr'],
        },
        {
          title: 'Un éditeur de texte, pourquoi pas Vim',
          abstract:
            "Le choix d'un éditeur de texte pour un développeur appelle souvent de débats passionnés. C'est une bonne chose. De mon côté, je vous parlerai de ce bon vieux Vim que je ne quitte plus depuis une dizaine d'années.",
          tags: ['Vim', 'Éditeur'],
          lang: ['fr'],
        },
        {
          title: 'Redécouvrez Python',
          abstract:
            'Python est un langage de programmation controversé. Il comporte pourtant un tas de qualités ! Les principales sont exposées dans cette présentation.',
          tags: ['Python'],
          lang: ['fr'],
        },
      ],
      cities: ['Brest'],
      contacts: {
        twitter: 'romaintouze',
        mail: 'contact@rtodev.tech',
      },
    },
    {
      since: '2017-10-13',
      name: 'Florian Beaufumé',
      bio: 'Architecte logiciel, expert Java, freelance',
      picture: 'https://avatars2.githubusercontent.com/u/25341695',
      cities: ['Toulouse'],
      contacts: {
        twitter: 'fbeaufume',
        mail: 'fbeaufume@gmail.com',
      },
      sessions: [
        {
          title: 'Programmation concurrente en Java',
          abstract:
            "Présentation du modèle de concurrence de Java ainsi que de ses API principales: Thread, volatile, Executor, fork/join, StampedLock, CompletableFuture et autres n'auront plus de secrets",
          tags: ['Java', 'Concurrence'],
          lang: ['fr'],
        },
        {
          title: 'Programmation réactive avec Spring 5 et Reactor',
          abstract:
            'Pour supporter une charge élevée ou améliorer la robustesse de son backend, la programmation réactive peut aider. Nous allons la présenter et montrer sa mise en oeuvre concrète avec Spring 5 et la librairie Reactor',
          tags: ['Programmation réactive', 'Spring', 'Reactor', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'WebSocket avec Java EE 7',
          abstract:
            "Présentation de WebSocket, protocole de communication orienté temps réel pour le web, ainsi que son API dans Java EE 7, avec retour d'expérience de développement d'une application",
          tags: ['WebSocket', 'Java EE', 'Java'],
          lang: ['fr'],
        },
      ],
      location: 'Toulouse et proximité',
      websites: [
        {
          name: 'Web',
          url: 'https://www.adeliosys.fr/',
        },
        {
          name: 'SlideShare',
          url: 'https://www.slideshare.net/fbeaufume/presentations',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/fbeaufume/',
        },
      ],
    },
    {
      since: '2017-10-19',
      name: 'Clément Héliou',
      bio:
        'Pragmatism Driven Developer passionate about xDD, clean architectures and code quality. Enthusiastic defender of knowledge sharing and human skills.',
      picture:
        'https://pbs.twimg.com/profile_images/865131946908635139/hONda4V3_400x400.jpg',
      cities: ['Paris'],
      contacts: {
        twitter: 'c_heliou',
        mail: 'cheliou@xebia.fr',
      },
      sessions: [
        {
          title: '9 things that will make your ES/CQRS journey painful',
          abstract:
            "Les 9 pièges a éviter lorsque l'on démarre une implémentation ES/CQRS. Parce que de prime abord ça parait simple et qu'en fait, beaucoup se font assez mal en essayant ! On abordera : Domain-Driven Design (dont les Bounded Contexts), Event Storming, Eventual Consistency, versioning d'évènements, problématiques des systèmes distribués, Process Managers & Sagas.",
          tags: [
            'EventSourcing',
            'CQRS',
            'DDD',
            'EventStorming',
            'ProcessManager',
          ],
          lang: ['fr'],
        },
        {
          title: 'Boost your BDD practice with the Example Mapping',
          abstract:
            "Une présentation formelle agrémentée d'un atelier pour découvrir par la pratique l'essence du BDD et comment structurer efficacement l'exploration de votre métier. Ludique, collaboratif et ouvert à tous les profils, qu'ils soient techs ou non.",
          tags: ['ExampleMapping', 'BDD', 'DDD'],
          lang: ['fr'],
        },
      ],
      location: 'Paris, La Défense',
      websites: [
        {
          name: 'Web',
          url: 'http://blog.xebia.fr/author/cheliou',
        },
      ],
    },
    {
      since: '2017-10-26',
      name: 'Hadrien Mens-Pellen',
      bio:
        "Artisan logiciel chez Arolla. Développeur java depuis 2010. J'adore le clean code, TDD, agile... et m'amuser en codant !",
      picture: 'https://hadrienmp.fr/images/Profil.webp',
      cities: ['Nantes', 'Remote'],
      contacts: {
        twitter: 'hadrienmp',
        mail: 'pro@hadrienmp.fr',
      },
      sessions: [
        {
          title:
            'Vivez les principes XP dans une démo en mob programming et TDD en 1 heure chrono !',
          abstract:
            "Vous allez coder un logiciel révolutionnaire, tous ensemble, en TDD, en appliquant les principes de l'Extreme Programming. À la fin de cette session : vous saurez écrire de bons tests unitaires anti régressions ; vous connaitrez les principes XP originaux ; vous vous serez amusés (fingers crossed ) !",
          tags: [
            'TDD',
            'XP',
            'Mob Programming',
            'Extreme Programming',
            'Agile',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Mob Programming RPG',
          abstract:
            "Apprenons ensemble à travers un jeu de rôle à mieux travailler ensemble à plusieurs. Nous ferons un exercice simplissime de code comme prétexte à ce jeu. À la fin de la session : vous connaitrez les rôles majeurs d'un mob ; vous aurez amélioré votre manière de communiquer ; et peut-être battu le record du monde de points dans ce RPG ?",
          tags: ['Mob Programming'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Dojo',
          abstract:
            "Le dojo de programmation est un endroit pour travailler nos compétences ensemble. Le programme : on choisit un petit exercice de programmation, de simple à difficile ; on le code en TDD (si vous ne connaissez pas c'est le bon endroit). C'est une excellente manière de progresser tout en apprenant à connaître vos collègues !",
          tags: [
            'Dojo',
            'TDD',
            'eXtreme Programming',
            'Pair Programming',
            'Mob Programming',
          ],
          lang: ['fr', 'en'],
        },
      ],
      location: 'Nantes',
      websites: [
        {
          name: 'Web',
          url: 'https://hadrienmp.fr',
        },
      ],
    },
    {
      since: '2017-10-26',
      name: 'Rémi Koci',
      bio: 'Agiliste passionné chez Inöweeno',
      picture:
        'https://lh3.googleusercontent.com/pw/ABLVV84iytG5lnElHOd-h34vD239OX_vdHsbAcJld8dd-q5xllcYXWmIYP4bk8ZlwcyF_7XD_Q2IX7hniGNz8Lz1oDs49nQLO9bgfpgfxfg4E3GJA4SdQJ4DdpefKcldPfT9ZNjMjNJatx2kQ5I9EG_4wKGFHw=w1340-h1340-s-no-gm',
      cities: ['Nantes', 'Paris', 'Remote'],
      contacts: {
        twitter: 'remikoci',
        mail: 'remikoci@gmail.com',
      },
      sessions: [
        {
          title:
            'Lego4Scrum : découvrez les concepts d’un projet SCRUM en jouant aux LEGO® !',
          abstract:
            "S’adressant à tout public, Lego4Scrum est un jeu d'apprentissage permettant d'expérimenter le fonctionnement de la méthode agile SCRUM dans un cas pratique. Ainsi, il donne l’occasion de découvrir la philosophie et les processus indus par la méthode et de se construire en développant vos compétences en travail d’équipe.",
          tags: [
            'Agile',
            'Scrum',
            'Serious Game',
            'Team Building',
            'Lego',
            'initiation',
            'agilité',
          ],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Développer une culture de la gagne, l’exemple des Brooklyn Nets !',
          abstract:
            "Conférence sur la transformation managériale d'une équipe de NBA. J'y parle de culture, approche collaborative et responsabilisation pour montrer comment l'équipe a su se reconstruire en insufflant une nouvelle vision du top management jusqu'aux opérationnels (les joueurs). Article écrit sur le sujet : https://www.aneo.eu/blog/developper-culture-gagne-brooklyn-nets",
          tags: [
            'Management',
            'Culuture',
            'Vision',
            'Responsabilisation',
            'Motivation',
            'Innovation managériale',
          ],
          lang: ['fr', 'en'],
        },
      ],
      location: 'Nantes',
      websites: [
        {
          name: 'Web',
          url:
            'https://www.aneo.eu/blog/developper-culture-gagne-brooklyn-nets',
        },
      ],
    },
    {
      since: '2017-10-30',
      name: 'Vincent Massol',
      bio:
        "Développeur Open source jour et nuit, payé par XWiki SAS pour travailler sur le logiciel éponyme... Aime l'ingénierie logicielle et notamment le build, tests, et qualité de code.",
      picture:
        'https://gravatar.com/avatar/0b17060fd5b56172e81e4bfbbcb438e0?&s=128',
      cities: ['Paris'],
      contacts: {
        twitter: 'vmassol',
        mail: 'vincent@massol.net',
      },
      sessions: [
        {
          title: "Creating your own project's quality dashboard",
          abstract:
            'Live demo of using XWiki to create your own custom quality dashboard to aggregate various metrics from different sites (Jenkins, SonarQube, JIRA, GitHub). Store the metrics locally to draw history graphs of the metrics and implement some custom actions, for example send some alert email when some combined metric thresholds have been crossed.',
          tags: [
            'Quality',
            'Metrics',
            'Dashboard',
            'Jenkins',
            'SonarQube',
            'JIRA',
            'GitHub',
            'XWiki',
            'Web Application',
          ],
          lang: ['fr', 'en'],
        },
      ],
      location: "Paris, Lamorlaye, Chantilly, Gouvieux, Val d'Oise",
      websites: [
        {
          name: 'Web',
          url: 'http://massol.net',
        },
        {
          name: 'AboutMe',
          url: 'https://about.me/vmassol',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vmassol/',
        },
      ],
    },
    {
      since: '2017-11-06',
      name: 'Alexander Dejanovski',
      bio:
        'Consultant Cassandra chez The Last Pickle et co-animateur du podcast Big Data Hebdo',
      picture:
        'http://thelastpickle.com/assets/img/staff/alex-dejanovski-tn.png',
      cities: ['Paris'],
      contacts: {
        twitter: 'alexanderDeja',
        mail: 'alex@thelastpickle.com',
      },
      sessions: [
        {
          title: 'Apache Cassandra pour les ops (et aussi pour les devs)',
          abstract:
            "Opérer une base Apache Cassandra, comme tout système distribué, représente un challenge pour tout ops/dba habitué aux bases relationnelles. A programme de cette présentation : quels outils utiliser, quelle métriques monitorer, quels leviers activer, comment tuner le garbage collector et surtout comment réagir en cas d'incident.",
          tags: ['Cassandra', 'nosql', 'ops'],
          lang: ['fr'],
        },
        {
          title: 'Apache Cassandra pour les devs (et aussi pour les ops)',
          abstract:
            "Apache Cassandra, ça a (souvent) la couleur d'une base SQL, ça a (parfois) le goût d'une base SQL mais ce n'est pas une base SQL. Dans cette présentation nous verrons comment développer sur Apache Cassandra avec CCM et le driver Java Datastax : load balancing policies, rety policies, niveaux de cohérence, speculative retries, requêtes asynchrones et plus encore. Tour d'horizon de ce qu'il faut savoir pour bien développer vos applications Apache Cassandra et des pièges à éviter.",
          tags: ['Cassandra', 'nosql', 'dev', 'java'],
          lang: ['fr'],
        },
        {
          title:
            'Apache Cassandra : Opérations, cohérence et failover en multi datacenter',
          abstract:
            "Le support natif d'Apache Cassandra pour le multi DC peut largement simplifier la mise en place d'architectures multi sites, mais amène également son lot de challenges opérationnels. Nous verrons dans cette présentation quels sont les principaux cas d'usage de la réplication multi DC, comment créer un nouveau DC, comment décommissionner un DC complet et l'impact du multi DC tant pour les devs que pour les ops. ",
          tags: ['Cassandra', 'nosql'],
          lang: ['fr'],
        },
        {
          title: 'Apache Cassandra : les réparations dans la vraie vie',
          abstract:
            "La réparation est une opération de maintenance nécessaire pour garder un cluster en bonne cohérence et remettre à niveau les noeuds ayant subit un arrêt ou perdu des données. Elle a cependant subit au fil des versions de profondes modifications pour essayer de la rendre plus rapide, qui apportent cependant leur lot de challenges. Nous verrons dans cette présentation comment fonctionne la réparation, comment elle a évolué et quelles sont les bonnes pratiques associées. Je présenterai également Reaper, l'outil open source de référence pour planifier, exécuter et monitorer les réparations sur tous vos clusters.",
          tags: ['Cassandra', 'nosql'],
          lang: ['fr'],
        },
        {
          title: 'Apache Cassandra : guide de survie en production',
          abstract:
            "Tour d'horizon des problèmes principaux rencontrés en production avec Apache Cassandra. Des problèmes de modélisation aux mauvais choix de stratégie de compaction en passant par des configurations par défaut non adaptées, nous verrons comment opérer une prod saine et sereine avec quelques conseils simples et applicables de suite. ",
          tags: ['Cassandra', 'nosql', 'production'],
          lang: ['fr'],
        },
      ],
      location: 'Paris',
      websites: [
        {
          name: 'Web',
          url: 'http://thelastpickle.com/blog/',
        },
        {
          name: 'Web',
          url: 'http://www.bigdatahebdo.com/',
        },
        {
          name: 'SlideShare',
          url: 'https://www.slideshare.net/AlexanderDEJANOVSKI/presentations',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/alexander-dejanovski-2a9912a/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/adejanovski',
        },
      ],
    },
    {
      since: '2017-11-24',
      name: 'Cyrille Hemidy',
      bio: 'Cloud Software Architect chez Cadre de Vie',
      picture:
        'http://pbs.twimg.com/profile_images/899909859763773440/boLLAjZn_400x400.jpg',
      cities: ['Lyon'],
      contacts: {
        mail: 'cyrille.hemidy+bbl@gmail.com',
      },
      sessions: [
        {
          title:
            'Apprendre à lire : la bonne méthode pour résoudre un problème',
          abstract:
            'Bien souvent un bug simple est délicat à trouver. Vous appelez un collègue et en 2 secondes il trouve la solution. Ce talk décallé vous montre comment réapprendre à lire pour résoudre vos problèmes.',
          tags: [
            'Dev',
            'Debug',
            'lecture',
            'log',
            'problème',
            'chezmoiçamarche',
          ],
          lang: ['fr'],
        },
        {
          title: 'Découvrir le langage Go',
          abstract:
            'Découverte du langage Go, le langage de prédilection pour le cloud, ses atouts et ses faiblesses.',
          tags: ['Cloud', 'Go', 'Golang', 'Google'],
          lang: ['fr'],
        },
        {
          title: 'Découvrir Firebase ',
          abstract:
            'Découverte de Firebase, un produit indispensable pour le développement mobile.',
          tags: ['Cloud', 'Firebase', 'Google', 'Mobile'],
          lang: ['fr'],
        },
        {
          title: 'Découvrir Google Cloud Platform',
          abstract:
            'Découvrir les différents produits et service de  Google Cloud Platform, les usages et ses particularités. Une comparaison avec les solutions existantes sur les autres Cloud providers',
          tags: [
            'Cloud',
            'Architecture',
            'GCP',
            'Gooogle',
            'Google CLoud',
            'Kubernetes',
          ],
          lang: ['fr'],
        },
        {
          title: 'Découvrir gRPC et Protocol Buffers une alternative à REST',
          abstract:
            'gRPC est un Framework RPC basé sur HTTP/2 très efficace pour développer des Microservices. Le format de sérialisation des données est basé sur Protocol Buffers. Les avantages sont multiples : latence réduite, streaming, compression des headers, multiplexage, reduction de la consommation CPU et des échanges réseau, ...',
          tags: [
            'Architecture',
            'Grpc',
            'Http2',
            'Protocol Buffers',
            'Protobuf',
            'Microservices',
          ],
          lang: ['fr'],
        },
      ],
      location: 'Lyon et environs',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/cyrillehemidy/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/chemidy',
        },
      ],
    },
    {
      since: '2017-12-01',
      name: 'Sébastien Fauvel',
      bio: 'Développeur un jour, développeur toujours.',
      picture:
        'http://1.gravatar.com/avatar/9ab929de00e5eab550c22cf5a32d8d46?size=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/sfauvel',
        },
        {
          name: 'Web',
          url: 'https://lego4devops.github.io/',
        },
        {
          name: 'Web',
          url: 'https://catestdrale.github.io/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Living documentation as test',
          abstract:
            "Maintenir la documentation sur un projet est un vrai challenge. J'explore depuis quelques temps la production d'une Living Documentation validant l'application et se substituant aux tests. Je propose de vous décrire le concept, soit à travers une présentation, soit en animant un coding dojo, soit en travaillant directement sur votre application.",
          tags: ['Documentation', 'Test', 'Dojo'],
          lang: ['fr'],
        },
        {
          title: 'Lego4Devops',
          abstract:
            'Atelier mettant en évidence les problèmes de communication entre les développeurs et les opérationnels que le mouvement DevOps vise à améliorer pour la réussite des projets. Pas de code. Durée 1h15',
          tags: ['SeriousGame', 'DevOps', 'Lego'],
          lang: ['fr'],
        },
        {
          title: 'caTesTdrale: Les tests, freins ou accélerateur ?',
          abstract:
            "Atelier ludique illustrant ce que vivent les équipes de développement sur un projet avec et sans tests. Il permet d'introduire la discussion autour de la pertinence des tests automatisés sur un projet. Pas de code. Durée: 30mn",
          tags: ['SeriousGame', 'Test'],
          lang: ['fr'],
        },
        {
          title: 'Pratique du pair programming',
          abstract:
            "Pratique emblématique de l'extreme programming, le pair programming c'est deux personnes pour une machine. Quels avantages peut on en tirer ? Venez expérimentez sur un exercice à la portée de tous et faire vos propres conclusions. Pas de code. Durée: 45mn",
          tags: ['SeriousGame', 'Extreme Programming'],
          lang: ['fr'],
        },
        {
          title: 'Coding dojo / Kata',
          abstract:
            'Animation de coding dojo, format randori ou kata, Thèmes TDD, BDD, refactoring, langage au choix (Java, Python, PHP, Haskell, Javascript, Cobol, Assembleur, ...)',
          tags: ['Java', 'Craftsmanship', 'CleanCode'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'sebfauvel',
        mail: 'sfauvel+bbl@gmail.com',
      },
    },
    {
      since: '2017-12-13',
      name: 'Olivier Laurendeau',
      bio:
        'Dev PHP avec des touches de Bash, Javascript, Ruby, Python, Go | Engineering manager @LaFourchette',
      picture:
        'https://fr.gravatar.com/userimage/38460289/d8e2f5d19f461b084de7079576bb3dfa?size=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/olaurendeau',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Tooling @LaFourchette',
          abstract:
            "Durée ~30 min, tour d'horizon des outils que nous utilisons à LaFourchette dans notre process de développement / déploiement. Liste non exhaustive : Jenkins, Github, Gitlab, Rancher, Capistrano, Samson, Twgit, Scrutinizer, Sonar, ...",
          tags: ['Tooling', 'DevOps'],
          lang: ['fr', 'en'],
        },
        {
          title: 'RabbitMQ @LaFourchette',
          abstract: 'Durée ~20 min, notre usage de RabbitMQ @LaFourchette',
          tags: ['RabbitMQ', 'Queue messaging'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Atelier découverte de RabbitMQ',
          abstract:
            "Durée ~1h30, découvrir différents cas d'usage de RabbitMQ à travers un Atelier, la base de code est en PHP https://github.com/olaurendeau/rabbitmq-workshop",
          tags: ['Workshop', 'RabbitMQ', 'Queue messaging'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Nantes', 'Paris'],
      contacts: {
        mail: 'o.laurendeau+bbl@gmail.com',
      },
    },
    {
      since: '2017-12-14',
      name: 'Nastasia Saby',
      bio:
        'Dev membre AFUP et membre du Software Craftmanship Lyon, fan de Big Data et de Software Craftsmanship',
      picture:
        'https://secure.gravatar.com/avatar/f1e09bf0b41e5559ff4623401378a1f8?size=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/NastasiaSaby',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Sensibilisation au Software Craftsmanship',
          abstract:
            'Le Software Craftsmanship est un terme qui semble parfois receler plein de mystères et de concepts complexes. Pourtant, il s’agit là simplement d’un mouvement qui a pour ambition de nous aider à créer des produits dont nous soyons fiers. Je vous propose de comprendre et découvrir ce que nous pouvons tirer de celui-ci. Durée : 50mn',
          tags: ['Software Craftsmanship'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        twitter: 'saby_nastasia',
        mail: 'nastasia.saby@gmail.com',
      },
    },
    {
      since: '2017-11-29',
      name: 'Aurélien Loyer',
      bio:
        "Consultant et Formateur Web chez Zenika depuis novembre 2015. Je me suis spécialisé dans le domaine du Web, JavaScript, AngularJS, Angular, Vue.Js, Node.js ... Fan d'IOT durant mes heures perdues, je suis toujours à l'affût des dernières nouveautés Web !",
      picture: 'https://avatars0.githubusercontent.com/u/3717296?s=460',
      websites: [
        {
          name: 'Web',
          url: 'http://aurelien-loyer.fr/',
        },
        {
          name: 'Github',
          url: 'https://github.com/T3kstiil3',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Vue.js, le nouveau framework à la mode !',
          abstract:
            "Durant ce BBL je vous démontrerai comment ce framework poussé par l'open-source peut détrôner les deux grands frameworks, React et Angular, développés par les géants du Web",
          tags: ['AngularJS', 'Angular', 'React', 'JavaScript', 'Vue.js'],
          lang: ['fr'],
        },
        {
          title:
            'Attention ! Ne mets pas cette clé: tu risques de te faire hacker très fort !',
          abstract:
            'On nous demande souvent notre clé usb ou chargeur de téléphone. Mais ne faudrait-il pas se méfier de ces banals objets ? Pendant ce court moment nous allons vous montrer comment vous pouvez exécuter du code rapidement sur un ordinateur depuis “une simple clé usb” et ainsi pousser la réflexion sur les possibilités de “cette astuce” mais aussi les dangers de celle-ci. (Co-Speaker: Nathan Damie)',
          tags: ['BAD USB', 'DIY', 'Arduino', 'Hacking', 'Sécurité'],
          lang: ['fr'],
        },
        {
          title: 'Créons notre première API avec NestJS',
          abstract:
            "Depuis le temps que vous allez à des conférences, vous avez sûrement participé à des codelabs JavaScript essentiellement sur vos framework frontend. Depuis peu, un nouveau framework sort du lot, et c’est un framework backend : NestJS. Simple à prendre en main, respectant les principes d'Angular et sa facilité d'utilisation, NestJS sera réconcilier les “insatisfaits” de Node, Express et ses plugins grâce aux principes de Controllers, Providers, Modules, ou encore Middlewares qui vous aideront à organiser votre projet.",
          tags: ['Node.js', 'NestJS', 'Angular', 'Express'],
          lang: ['fr'],
        },
        {
          title:
            'Visual testing - Ou comment détecter les changements au pixel près dans votre application',
          abstract:
            "Avec le nombre d'applications grandissantes il devient important de se démarquer ! Pour sortir du lot ? Un design parfait et qui sort du commun ! Néanmoins cela demande beaucoup de travail et de ”surveillance” lors des développements pour ne rien “casser” visuellement. Aujourd'hui je vais vous parler de visual testing et comment détecter au pixel près des changements graphiques sur votre application/site pour ne plus avoir de surprise lors de vos mises en production 🎉. Au programme : Jest, Storybook, Cypress, & co... N'oubliez pas votre loupe 🔍🕵🏼‍♀️🕵️‍♂️ pour ne rater aucune erreur !",
          tags: ['Node.js', 'NestJS', 'Angular', 'Express'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'AurelienLoyer',
        mail: 'aurelien.loyer@zenika.com',
      },
    },
    {
      since: '2017-12-21',
      name: 'Nicolas Verinaud',
      bio: '👨‍💻 Artisan Logiciel chez Ryfacto',
      picture:
        'https://secure.gravatar.com/avatar/582353edcee4fb4edbe224310bebe4b8?size=200',
      websites: [
        {
          name: 'Web',
          url: 'http://ryfacto.fr',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/nicolas-verinaud-7829881a/',
        },
        {
          name: 'Github',
          url: 'https://github.com/nverinaud',
        },
        {
          name: 'Slideshare',
          url: 'https://www.slideshare.net/nverinaud/',
        },
        {
          name: 'Hopwork',
          url: 'https://www.malt.fr/profile/nicolasverinaud',
        },
      ],
      location: 'Strasbourg',
      sessions: [
        {
          title: 'Du Code & Des Humains',
          abstract:
            "Venez découvrir la rétrospective, non sans humour, de mon évolution dans la création de logiciels de 2009 à 2017. Je parle de mes débuts avec SCRUM, de la réécriture d'une application mobile un nombre honteux de fois, de l'apprentissage de Clean Code et de l'Extreme Programming. Je tire les leçons de ces huit années et tente de répondre à ces deux questions : le•a développeur•se est-il•elle une espèce à part, incapable de communiquer avec les gens \"normaux\" ? L'entropie est-elle une fatalité conduisant inévitablement à la réécriture ?",
          tags: [
            'Software Craftsmanship',
            'Professionnalisme',
            'Agile',
            'TDD',
            'Scrum',
            'Extreme Programming',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Strasbourg'],
      contacts: {
        twitter: 'nverinaud',
        mail: 'nicolas.verinaud@ryfacto.fr',
      },
    },
    {
      since: '2017-12-28',
      name: 'Nathan Damie',
      bio:
        "Consultant et Formateur Web chez Zenika Lille depuis novembre 2016. Javascript lover & Beer Evangelist. J'aime aussi suivre de près les évolutions de la plateforme web et les frameworks géniaux qui s'y développent.",
      picture:
        'https://s.gravatar.com/avatar/09aec3477a937ad618eaeb77fd2eb337?s=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/NathanDM',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: "Polymer, les webcomponents c'est maintenant",
          abstract:
            "Qu'est ce que les composants Web? Pourquoi sont-ils géniaux? Toutes les réponses dans cet présentation.",
          tags: ['Polymer', 'Webcomponents', 'PWA', 'JavaScript'],
          lang: ['fr'],
        },
        {
          title: 'Qualité des développements',
          abstract:
            'Ce BBL s’adresse à tous les acteurs du développement logiciel (QA, PO, Devs, Archis, …​) L’objectif pour nous est de vous parler de pratiques d’équipe (développements, product management) et vous raconter comment nous les mettons en oeuvre dans un environnement agile. Discutons-en et essayons d’identifier ensemble des actions concrètes pour transformer dès maintenant votre manière de développer du logiciel. (Co-Speaker: Jonathan Duberville)',
          tags: ['qualité', 'QA', 'Devs', 'PO', 'Archis'],
          lang: ['fr'],
        },
        {
          title:
            'Attention ! Ne mets pas cette clé: tu risques de te faire hacker très fort !',
          abstract:
            'On nous demande souvent notre clé usb ou chargeur de téléphone. Mais ne faudrait-il pas se méfier de ces banals objets ? Pendant ce court moment nous allons vous montrer comment vous pouvez exécuter du code rapidement sur un ordinateur depuis “une simple clé usb” et ainsi pousser la réflexion sur les possibilités de “cette astuce” mais aussi les dangers de celle-ci. (Co-Speaker: Aurelien Loyer)',
          tags: ['BAD USB', 'DIY', 'Arduino', 'Hacking', 'Sécurité'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: '@Nathan_damie',
        mail: 'nathan.damie@zenika.com',
      },
    },
    {
      since: '2018-01-01',
      name: 'Guillaume Drouet',
      bio: 'Consultant et Formateur chez Zenika Lille.',
      picture:
        'https://fr.gravatar.com/userimage/132699423/77557f4bfae552f20c1281d1c96ec8eb.jpg?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/gdrouet',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Tirez le meilleur de vos APIs avec GraphQL',
          abstract:
            "Au cours de ce BBL, nous verrons ce qu'est GraphQL et ce que cette spécification peut apporter de plus à vos APIs. Nous nous attarderons sur les patterns d'architecture, une démo montrant les fonctionnalités et on se risquera même à un comparatif avec REST.",
          tags: ['GraphQL', 'API', 'BFF', 'NodeJS', 'Apollo'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'GuiDrouet',
        mail: 'guidrouet@gmail.com',
      },
    },
    {
      since: '2018-01-16',
      name: 'Romain Sertelon',
      bio:
        "Développeur @nuxeo, je suis un touche à tout curieux et passionné. Je code du front (plateforme web), du backend (µService, Java), et j'aime aussi m'occuper d'architecture, infrastructure et production.",
      picture:
        'https://en.gravatar.com/userimage/16692893/6718018abb363a49d66a6266dc2d9765.jpg?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/rsertelon',
        },
        {
          name: 'Web',
          url: 'https://romain.sertelon.fr/tech',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Simplifez infrastructure et process DevOps grâce à Habitat',
          abstract:
            'Je vous propose une présentation/discussion autour de Habitat.sh. nouvelle solution de Chef, Habitat est un nouveau moyen de déployer les applications qui est adapté à la fois aux devs et aux ops, tout en simplifiant leurs interactions. Il automatise vos applications (configuration/update) sans les changer, permet de mettre en place de déploiement continu et enfin améliore leur sécurité grâce à un dépôt de packages intelligent.',
          tags: [
            'Habitat',
            'DevOps',
            'Automation',
            'Cloud',
            'Continuous Deployment',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'rsertelon',
        mail: 'romain@sertelon.fr',
      },
    },
    {
      since: '2018-01-19',
      name: 'Mikaël Létang',
      bio: 'Développeur passionné chez Atamaï',
      picture:
        'https://pbs.twimg.com/profile_images/625645296723345408/vALM64V3_400x400.png',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mikaelletang/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Accélérer la mise en prod',
          abstract:
            "Comment raccourcir le délai entre l'expression d'un besoin et l'utilisation en production du code correspondant, tout en s'assurant de sa qualité ? Présentation d'un ensemble de stratégies et de techniques pour réduire la durée du pipeline",
          tags: [
            'Continuous Delivery',
            'Automation',
            'Trunk Based Development',
            'Feature Toggling',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Faire du DDD tactique avec Symfony',
          abstract:
            'Comment organiser son code pour suivre les bonnes pratiques du DDD dans Symfony',
          tags: ['DDD', 'Symfony', 'PHP'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'mikael_letang',
        mail: 'mikael.letang@gmail.com',
      },
    },
    {
      since: '2018-01-25',
      name: 'Olivier Wulveryck',
      bio: 'Consultant chez OCTO Technology.',
      picture:
        'https://s3.amazonaws.com/askbob/users/photos/914/big/me_dublin.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://blog.owulveryck.info/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/olivierwulveryck/',
        },
      ],
      location: 'Métropole lilloise',
      sessions: [
        {
          title:
            'Tensorflow, Gorgonia, DeepLearning... La vision du machine learning par un imp-Ops-teur',
          abstract:
            "Le DeepLearning fait naitre des idées folles dans les têtes de beaucoup. Mais les applications vont au delà de l'analyse marketing et de la computer vision. Je vous propose de vous présenter comment j'ai commencé à m'intéresser au machine learning. Des concepts de base à l'implémentation d'un réseau de neurone from scratch en Go.",
          tags: ['Machine Learning', 'RNN', 'Go'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'owulveryck',
        mail: 'olwu@octo.com',
      },
    },
    {
      since: '2018-02-07',
      name: 'Yvan Phélizot',
      bio: 'Craftsman chez Arolla.',
      picture:
        'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAN6AAAAJDFkNTNjZDA5LThlZTAtNGVlNS1hMWU4LTFjMWRlMzJhMjEyZg.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://cotonne.github.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/yvanphelizot',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Apprendre à développer avec des Legos',
          abstract:
            "Et si on mettait à la même table développeur, chef de projet, métier, testeurs ... et que l'on arrivait à comprendre enfin l'importance des tests unitaire? Il s'agit de la session Lego de Gargoyles Software (http://www.gargoylesoftware.com/ex/lego_tdd)",
          tags: ['TDD', 'Clean Code', 'Craftsmanship'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Lego4DevOps',
          abstract:
            "Dev et Ops, vous n'arrivez pas à vous comprendre? Il est temps que ça change avec une session faite pour ça : Lego4DevOps. Atelier créé par Lego4DevOps de Sébastien Fauvel, Cécile Especel et Didier Drouin (https://lego4devops.github.io/) ",
          tags: ['DevOps', 'Clean Code', 'Craftsmanship'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Lego4Security',
          abstract:
            "Vous aimez la sécurité? Non? Mais vous aimez les legos? Ah! Cette session permet de discuter sécurité en s'amusant! Basé sur Decisions & Disruptions (https://sites.google.com/view/decisions-disruptions/)",
          tags: ['Sécurité', 'Craftsmanship'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Crafting Secure Software',
          abstract:
            "Le hands-on pour les développeurs qui n'ont pas le temps pour la sécurité! Avec un logiciel de qualité, il est possible d'avoir plus de sécurité",
          tags: ['Sécurité', 'Clean Code', 'Craftsmanship'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'yoda044',
        mail: 'yvan.phelizot@arolla.fr',
      },
    },
    {
      since: '2018-02-22',
      name: 'Ronan Amicel',
      bio:
        'Développeur à large spectre, artisan logiciel, coach technique, expert Python',
      picture:
        'https://www.gravatar.com/avatar/b06b5d4777e2734feb91298062539ec8?s=300',
      websites: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/amicel',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ronanamicel/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/ronnix/',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/ronnix',
        },
        {
          name: 'Hopwork',
          url: 'https://www.malt.fr/profile/ronanamicel',
        },
      ],
      location: 'Amiens, Paris',
      sessions: [
        {
          title: 'Codons ensemble',
          abstract:
            "Prenons un moment pour coder ensemble. Prenons un petit exercice (kata) pour nous exercer sur certaines pratiques, comme TDD ou Clean Code, dans un format bienveillant et sans enjeu autre que celui d'apprendre.",
          tags: [
            'Dojo',
            'Code',
            'Test',
            'Software Craftsmanship',
            'XP',
            'TDD',
            'Clean Code',
          ],
          lang: ['fr'],
        },
        {
          title: 'Techniques de test en Python',
          abstract:
            'Conseils, trucs, astuces et outils pour tester son code Python.',
          tags: ['Python', 'Test', 'TDD'],
          lang: ['fr'],
        },
      ],
      cities: ['Amiens', 'Paris'],
      contacts: {
        twitter: 'amicel',
        mail: 'ronan@pocketsensei.net',
      },
    },
    {
      since: '2018-02-22',
      name: 'Benjamin Marguin',
      bio: 'Développeur front-end, intégrateur, formateur Git.',
      picture: 'https://avatars3.githubusercontent.com/u/1846633',
      location: 'Toulouse',
      cities: ['Toulouse'],
      contacts: {
        twitter: 'mab_',
        mail: 'brownbaglunch.fr@ma-b.com',
      },
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/benjamin-marguin',
        },
      ],
      sessions: [
        {
          title: 'Qu’est-ce qu’un bon commit ?',
          abstract:
            'Vous utilisez Git seul ou en équipe, en débutant ou déjà depuis un bon moment, mais vous vous dites que vos commits pourraient être "mieux" (message, description, contenu, liens avec les forges) ? Parlons-en !',
          tags: ['Git'],
          lang: ['fr'],
        },
        {
          title: 'Git au quotidien',
          abstract:
            'Ni une présentation ni une conférence, mais une proposition de prendre un peu de recul et de discuter ensemble de votre utilisation de Git et de vos éventuelles problématiques.',
          tags: ['Git', 'Gitlab', 'Github'],
          lang: ['fr'],
        },
        {
          title:
            'Signer numériquement ses commits ou ses tags, pourquoi et comment ?',
          abstract:
            'Au sein d’un dépôt Git, l’identification des auteurs n’est qu’indicative. Les données de base d’un commit ne permettent pas d’authentifier son auteur. Git offre néanmoins la possibilité, grâce aux signatures GPG d’ajouter cette information fiable aux commits et aux tags. Pourquoi faire, comment faire ? Si vous voulez qu’on en parle, faites moi signe !',
          tags: ['Git', 'GPG', 'Chiffrement'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-03-06',
      name: 'Claire Zuliani',
      bio:
        "Outilleuse de projets à la croisée du numérique et des humains. Venue du monde associatif et culturel et reconvertie dans le développement web, je conseille aujourd'hui les structures engagées et développe des outils (surtout en ruby et javascript). J'accompagne aussi sur un plan humain en amont et durant les projets : facilitation, intelligence collective, user experience...",
      picture:
        'https://d33wubrfki0l68.cloudfront.net/dddd2605dce105601dcba9587f14633175792c58/82039/assets/images/avatar.png',
      location: 'Epinal',
      cities: ['Epinal', 'Nancy', 'Metz'],
      contacts: {
        twitter: 'ZooletteDesBois',
        mail: 'clairezuliani@gmail.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://www.clairezuliani.com',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/clairezed',
        },
      ],
      sessions: [
        {
          title: 'Je veux utiliser du numérique pour coopérer',
          abstract:
            "Vous avez un projet impliquant plein d'acteurs différents, vous vous dites que le numérique pourrait vous filer un coup de main mais ne savez pas par quel bout le prendre. Discutons ensemble de vos usages, des outils existants et de comment le numérique s'insère dans une stratégie plus globale de coopération.",
          tags: ['Outils', 'Coopération', 'Stratégie'],
          lang: ['fr'],
        },
        {
          title:
            'Comment avoir une utilisation du numérique plus éthique et/ou durable dans ma structure ?',
          abstract:
            "Marre de communiquer exclusivement par facebook ? Curieux de connaître ce qui existe à côté de Google ? Discutons de vos cas pratiques et de vos états d'âme, et faisons le tour des alternatives existantes.",
          tags: ['Open Data', 'Open Source', 'Statique'],
          lang: ['fr'],
        },
        {
          title:
            "Un site léger et sûr qui a tout d'un grand avec les générateurs de sites statiques",
          abstract:
            "A côté des CMS traditionnels (wordpress, etc), existent des sites tout légers, sûrs, et qui peuvent couvrir simplement un grand nombre de vos besoins : les sites statiques. Besoin d'un site vitrine, d'un blog, voire même un site e-commerce ? Un site statique peut être la bonne solution, voire plus encore ! Découvrons ensemble comment ça marche et ce qu'on peut en faire.",
          tags: ['Jekyll', 'Static Site Generator', 'JAMStack', 'HeadLess CMS'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-03-15',
      name: 'Florian Ferbach',
      bio:
        "Facilitateur chez marmelab, co-organisateur des apéros agiles Nancy, enseignant à l'IUT Charlemagne, sidepreneur à mes heures perdues. Mon métier ? J'essaye de “pimper” la collaboration humaine et de “tuner” l’innovation à l’aide de l’agilité et du lean startup pour que les produits qu’on construit délivrent le maximum de valeur.",
      picture:
        'https://s.gravatar.com/avatar/81430cde0877c0c602e7af07a2df1924?s=150',
      location: 'Nancy',
      cities: ['Nancy'],
      contacts: {
        twitter: 'fferbach',
        mail: 'florian.ferbach@gmail.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://www.marmelab.com/blog',
        },
      ],
      sessions: [
        {
          title: 'Initiation aux valeurs agiles',
          abstract:
            "Qu'est-ce que l'agilité ? Mais surtout... qu'est-ce que n'est pas l'agilité ? A quoi ça sert et pourquoi ça fonctionne ?",
          tags: ['Agilité'],
          lang: ['fr'],
        },
        {
          title: 'Initiation au Lean Startup',
          abstract:
            "Le lean startup n'est pas utile qu'aux startups mais à toute société cherchant à innover dans un contexte très incertain. Quelles sont les bases et pourquoi ça fonctionne ?",
          tags: ['Lean Startup'],
          lang: ['fr'],
        },
        {
          title: "Scrum c'est quoi ?",
          abstract:
            "Quelles sont les bases de Scrum et pourquoi c'est déjà un bon départ ?",
          tags: ['Agilité', 'Scrum'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-03-22',
      name: 'Etienne Coutaud',
      bio:
        'Devops Engineer | Kubernetes Certified Administrator | Automation addict | OCTO Technology',
      picture: 'https://goo.gl/jcJoWs',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/EtienneCoutaud/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/etiennecoutaud/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Introduction à Docker',
          abstract:
            'Comment fonctionne docker ?, Quel usage au quotidien ? Découvrons ensemble le champs des possibles aux travers de démos live',
          tags: ['container', 'docker'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Kubernetes',
          abstract:
            "Docker seul en production ne suffit pas, le rôle de l'orchestrateur est d'assurer le déploiement des conteneurs sur un cluster. Explorons les briques de bases de Kubernetes pour déployer une application complète.",
          tags: ['kubernetes', 'container', 'orchestration', 'cncf'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Ansible',
          abstract:
            "Comment décrire mon infrastructure sous forme de code ?, Ansible permet d'automatiser et d'industrialiser de l'infrastructure. Decouvrez comment déployer sans effort une stack complète sur des serveurs en écrivant du code",
          tags: ['infrastructure as code', 'ansible', 'ssh', 'idempotence'],
          lang: ['fr'],
        },
        {
          title: '12 factors Kubernetes',
          abstract:
            '12 régles de bases et bonnes pratiques à avoir en tête avant de se lancer sur kubernetes',
          tags: [
            '12 factors',
            'kubernetes',
            'container',
            'bonnes pratiques',
            'cncf',
          ],
          lang: ['fr'],
        },
        {
          title: 'Etendre Kubernetes avec les operators et les CRDs',
          abstract:
            "Dans un usage avancé de Kubernetes on peut avoir le besoin d'étendre son comportement pour l'adapter à différents cas d'usages. Venez découvrir comment étendre Kubernetes et comment implémenter des opérateurs se basant sur des CRDs",
          tags: ['kubernetes', 'operator', 'extensions', 'go', 'cncf'],
          lang: ['fr'],
        },
        {
          title: 'Faire du fullstack monitoring avec Prometheus',
          abstract:
            "Une infrastructure non monitorée est une plateforme non maitrisée, Reprenez le contrôle de l'infrastructure avec Prometheus et sa solution de monitoring cloud native",
          tags: ['monitoring', 'prometheus', 'fullstack', 'cncf'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'etiennecoutaud',
        mail: 'e.coutaud@gmail.com',
      },
    },
    {
      since: '2018-03-23',
      name: 'Marine Corbelin Laporte',
      bio:
        "Chef de projet 3D/VR/AR freelance. Je suis spécialisée dans la gestion de projet en réalité virtuelle et augmentée. Que vous souhaitiez simplement découvrir les usages de ces technologies ou approfondir l'aspect technique, je suis là pour vous accompagner.",
      picture:
        'https://pbs.twimg.com/profile_images/851152816429203456/cNAdBzYr_400x400.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://teapotmc.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/marine-corbelin-a03bb023/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Tour d’horizon des usages de la VR et de l’AR',
          abstract:
            "La VR et l'AR sont aujourd'hui en pleine explosion. Quels sont les usages de ces technologies? Comment vont-elles impacter notre futur?",
          tags: ['VR', 'AR'],
          lang: ['fr'],
        },
        {
          title: 'Comment gérer un projet VR/AR/ vidéo 360 ?',
          abstract:
            'Vous vous lancez dans un projet VR/ AR ou vidéo 360°: Voici les bonnes pratiques pour commencer du bon pied.',
          tags: ['3D', 'VR', 'AR'],
          lang: ['fr'],
        },
        {
          title: 'La VR dans Unity/ Unreal Engine 4',
          abstract:
            'Quels sont les outils disponibles dans Unity et Unreal pour créer un projet VR',
          tags: ['VR', 'Unity', 'Unreal'],
          lang: ['fr'],
        },
        {
          title: 'Les contraintes de la modélisation 3D pour du temps réel',
          abstract:
            'Les bonnes pratiques et les outils pour créer du contenu pour vos applications VR et AR',
          tags: ['3D', 'VR', 'AR'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'nanakola',
        mail: 'marine.teapotmc@gmail.com',
      },
    },
    {
      since: '2018-03-27',
      name: 'Yoan Thirion',
      bio:
        "Coach agile et “software craftsman” chez <a href='https://agilepartner.net/' target='_blank'>Agile Partner</a>; je suis bercé par le développement logiciels depuis une quinzaine d’années. Je suis passionné d’agilité depuis ma première lecture du manifeste et suis intimement convaincu que la seule manière de travailler est en considérant les gens comme des êtres à part entières et non plus comme des “ressources”. Mon aspiration personnelle est d’aider un maximum d’équipes à délivrer dans les meilleures conditions possibles des logiciels opérationnels et “well crafted”.",
      picture:
        'https://www.gravatar.com/avatar/9489b8d6f2dbdc3e7d26b8702143b86e?s=250',
      location: 'Luxembourg',
      cities: ['Metz', 'Luxembourg'],
      contacts: {
        twitter: 'yot88',
        mail: 'yoan.thirion@gmail.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://agilepartner.net/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/yoanthirion/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/ythirion',
        },
      ],
      sessions: [
        {
          title: 'DevOps awareness',
          abstract:
            'Exercice de “Learning by doing” permettant de comprendre ce qu’est DevOps et quelles sont les problématiques que cela adresse.',
          tags: ['DevOps', 'Agile'],
          lang: ['fr'],
        },
        {
          title: 'Qu’est-ce qu’un “software craftsman” ?',
          abstract:
            'On voit souvent ce terme revenir lors de conférences et dans la littérature du coup lors de cette session nous reviendrons sur les pratiques principales qui lui sont liées :  XP (refactoring, pair/mob programming…), continuous everything (integration, improvement, learning)',
          tags: ['Craftsmanship', 'XP', 'Agile'],
          lang: ['fr'],
        },
        {
          title: 'Culture of learning',
          abstract:
            'Découvrez des méthodes et des outils permettant de créer une culture de l’apprentissage et de l’amélioration continue au coeur de votre entreprise.',
          tags: ['Continuous learning', 'Continuous improvement', 'Agile'],
          lang: ['fr'],
        },
        {
          title: 'Comprendre le manifeste agile',
          abstract:
            "Vous vous êtes déjà demandé ce qu'était l'agilité ? d'où cela venait ? et comment mettre en pratiques ces valeurs et principes ? invitez moi ;-)",
          tags: ['Agilité'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-04-06',
      name: 'Philippe Bourgau',
      bio:
        "Coach XP à Murex. J'aide les équipes de dev à devenir durablement productives, en adaptant eXtreme Programming à leur context",
      picture:
        'http://www.gravatar.com/avatar/686399bd630ecc9381e4dfec8720816e?s=250',
      websites: [
        {
          name: 'Web',
          url: 'http://philippe.bourgau.net/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/philippe-bourgau-607a928/',
        },
        {
          name: 'AboutMe',
          url: 'http://philippe.bourgau.net/about-me/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/philou',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            'L’alchimie du BDD : changer votre code de plomb en or. Ou comment livrer de plus en plus de valeur.',
          abstract:
            "Vous êtes un véritable craftsman ! Tout se passe bien jusqu'au jour où, au détour d'une conversation, vous comprenez quelque chose de plus profond sur votre domaine métier ... Comment BDD débloque ces ‘refactoring breakthrough’ ? Comment transformer cette opportunité ? Qu’y gagne t’on exactement ?",
          tags: ['BDD', 'DDD', 'Refactoring'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'pbourgau',
        mail: 'philippe.bourgau@gmail.com',
      },
    },
    {
      since: '2018-04-12',
      name: 'Gilles Barbier',
      bio: 'CEO cofondateur Zenaton. Ex. Directeur à The Family',
      picture: 'https://avatars2.githubusercontent.com/u/134669',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gillesbarbier/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/gillesbarbier',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/geomagilles',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            "Comment coder des process business ou marketing aussi sophistiqués qu'Amazon ou Uber avec une équipe technique réduite",
          abstract:
            "Gérer des états, configurer et surveiller des crons, multiplier les requêtes en base de données, tout ça n'est pas votre passion ? Venez voir comment coder des process business ou marketing en pure code, en quelques minutes, en utilisant Zenaton",
          tags: [
            'Zenaton',
            'process',
            'agile',
            'workflow',
            'task',
            'asynchronous',
            'queue',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'gillesbarbier',
        mail: 'gilles@zenaton.com',
      },
    },
    {
      since: '2018-04-12',
      name: 'Louis Cibot',
      bio: 'CTO cofondateur Zenaton',
      picture:
        'https://pbs.twimg.com/profile_images/972155320071008264/kUbo6jMW_400x400.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://louiscibot.com',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/louiscibot/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/louiscibot',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/ciboulette',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            "Comment coder des process business ou marketing aussi sophistiqués qu'Amazon ou Uber avec une équipe technique réduite",
          abstract:
            "Gérer des états, configurer et surveiller des crons, multiplier les requêtes en base de données, tout ça n'est pas votre passion ? Venez voir comment coder des process business ou marketing en pure code, en quelques minutes, en utilisant Zenaton",
          tags: [
            'Zenaton',
            'process',
            'agile',
            'workflow',
            'task',
            'asynchronous',
            'queue',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'louiscibot',
        mail: 'louis@zenaton.com',
      },
    },
    {
      since: '2018-04-27',
      name: 'Clément Poissonnier',
      bio: 'Software Craftsman @ INEAT',
      picture:
        'https://fr.gravatar.com/userimage/37635203/825f66895424aa318429a239631cbb84.png?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/cpoissonnier',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Fly to the moon with Postman',
          abstract:
            "Tu utilises Postman, mais tu dupliques tes requêtes pour pouvoir tester ton environnement local et l’environnement d’intégration ? Tu pestes quand tu dois regénérer ton token JWT et le copier/coller toutes les 30 secondes parce que sa durée de vie est trop courte ? Je peux t'apporter des éléments de réponse pour mieux utiliser Postman, un outil souvent mal utilisé.",
          tags: ['Postman'],
          lang: ['fr'],
        },
        {
          title: 'Sensibilisation au software craftsmanship',
          abstract:
            "Découvre ce qu'est le Software Craftsmanship, clean code, le refactoring et la dette technique en manipulant des Legos ! Lego permet de s'abstraire du langage de programmation pour se concentrer sur les concepts, et permet de faire participer des personnes qui ne développent pas (managers, commerciaux, RH, ...).",
          tags: [
            'Lego',
            'Software Craftsmanship',
            'TDD',
            'Clean code',
            'Refactoring',
            'Dette technique',
            'Pair-programming',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'cpoissonnier',
        mail: 'clement.poissonnier@gmail.com',
      },
    },
    {
      since: '2018-05-17',
      name: 'Alexis Janvier',
      bio:
        'Développeur depuis 2004, chez Marmelab depuis 2014, en télétravail à Caen depuis 2016.',
      picture:
        'https://pbs.twimg.com/profile_images/547088902385700864/l7UMrYDT_400x400.jpeg',
      websites: [
        {
          name: 'Web',
          url: 'http://alexisjanvier.net',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/alexis-janvier-90a605a',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/alexisjanvier',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/alexisjanvier',
        },
      ],
      location: 'Caen',
      sessions: [
        {
          title: 'Le télétravail',
          abstract:
            'Cela fait maintenant deux ans que je suis en télétravail à plein temps, me permettant d’en faire un bilan : quels sont les problèmes logistiques, comment réussir l’organisation de ses journées et trouver le difficile équilibre entre vie personnelle et vie professionnelle. Se sent-on seul ? Netflix est-il une drogue ? Si votre entreprise envisage de mettre en place du télétravail, je suis disponible pour venir vous parler de ce bilan, ou tout simplement tenter de répondre aux questions que vous vous posez sur ce mode d’organisation.',
          tags: ['remote', 'teletravail', 'agile', 'team'],
          lang: ['fr'],
        },
        {
          title: 'Découverte de docker',
          abstract:
            'Je rencontre souvent des développeurs souhaitant utiliser Docker, mais sans trop savoir finalement ce que c’est ni par quel bout commencer à l’utiliser. Je vous propose de vous faire découvrir les bases de Dockers et voir comment intégrer dans votre worflow de développement cet outil que j’utilise maintenant au quotidien.',
          tags: ['docker', 'docker-compose', 'devops'],
          lang: ['fr'],
        },
        {
          title: 'Lancer et maintenir un projet open-source',
          abstract:
            'L’open-source est selon moi l’une des grandes idées du siècle ! Sans être un grand contributeur, j’ai eu l’occasion de maintenir des petits projets, mais aussi de contribuer à des idées plus ambitieuses. Je vous propose donc de venir vous présenter les bonnes bases permettant de lancer un projet open-source, et de voir les avantages et les contraintes que cela peu induire.',
          tags: ['open-source'],
          lang: ['fr'],
        },
        {
          title: 'Les tests en Javascript',
          abstract:
            'Si « Le bon sens est la chose la mieux partagée », l’utilisation des tests n’est pas toujours la chose la mieux partagée par tous les développeurs. Et pourtant, ne pas les utiliser, c’est se passer d’un outil fondamental dans la production d’un code bien écrit et pérenne, le genre de code permettant d’être serein avec sa production. Je vous propose donc de vous présenter les briques de bases permettant de mettre en place des tests sur un projet en javascript (tests unitaires, fonctionnelles, end-to-end, intégration continue, …).',
          tags: ['javascript', 'tests', 'jest', 'cypress'],
          lang: ['fr'],
        },
        {
          title: 'La revue de code',
          abstract:
            'Après presque 15 ans de développement, j’affirme que la revue de code est la ciment d’une équipe de développement. Sans code review, rien de solide ne peut être réellement contruit. Je vous propose donc de venir vous présenter les bienfaits de la mise en place d’une revue de code systèmatique, mais aussi les méfaits d’une revue de code malveillante.',
          tags: ['git', 'github', 'team'],
          lang: ['fr'],
        },
      ],
      cities: ['Caen'],
      contacts: {
        twitter: 'alexisjanvier',
        mail: 'contact@alexisjanvier.net',
      },
    },
    {
      since: '2018-06-01',
      name: 'Julien Pauli',
      bio: 'System and Web architect at SensioLabs',
      picture: 'https://avatars2.githubusercontent.com/u/72415?s=460&v=4',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/jpauli',
        },
        {
          name: 'Blog',
          url: 'http://blog.jpauli.tech/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title:
            'Tuez votre Box – Reprenez le contrôle de votre réseau, chez vous',
          abstract:
            'Cette conférence va montrer comment monter chez soi une infra digne d’une petite entreprise. Quelques idées : Infra dual-stack IPV4/IPV6 puis, VLANs pour isoler son traffic (IOT notamment), règles de firewall poussées, mais aussi création d’un Internet en VPN, routage dynamique avec BGP/OSPF, multi homing (multiples FAI) avec équilibrage de charge, et bien plus encore. Reprenez le contrôle en gardant vos données chez vous et en montant votre infra en mode DIY. En théorie, vous devriez être motivé à jeter votre Box Internet à la fin de la présentation.',
          tags: ['Boxes', 'Router', 'DIY', 'Mikrotik', 'IPV6'],
          lang: ['fr'],
        },
        {
          title:
            'MultiHoming at home – Utilisations de plusieurs FAI en même temps, chez soi',
          abstract:
            "Découvrez les possibilités offertes par le multihoming, chez vous. Abonnez vous à plus d'un fournisseur d'accès Internet (FAI) et passez à la vraie vitesse supérieure. Nous verrons comment faire passer plusieurs réseaux Wifi (invité / perso) sur différentes portes de sortie isolées, comment monter un fail-over, comment découper ses flux par types et les faire sortir ou entrer par la bonne porte. Nous parlerons aussi de l'interconnectivité des FAIs, pas égaux entre eux, et comment profiter d'un Internet le moins saturé possible, selon les besoins.",
          tags: ['Boxes', 'Router', 'DIY', 'Mikrotik', 'FAI'],
          lang: ['fr'],
        },
        {
          title: 'Les fondamentaux de la cryptographie',
          abstract:
            "Cette présentation va montrer la base commune derrière tout processus cryptographique informatique. Nous parlerons du chiffrement de Vernam, appliqué dans la machine Enigma à l'époque , pour l'appliquer au domaine de l'informatique. Nous verrons une implémentation précise de la notion de chiffrement : le chiffrement par flot et les registres à décalage. Ces structures sont derrière la notion d'aléatoire en informatique. Le but est que tout le monde comprenne bien techniquement, comment fonctionne la base de tous les algorithmes de cryptographie du monde, sans pour autant entrer dans des formules mathématiques incompréhensibles. Nous coderons une machine de chiffrement par flot, pas à pas, en PHP puis sous forme d'extension PHP (en C). Les (vieux) algorithmes RC4 et A51 seront analysés puis implémentés pas à pas à titre d'exemple dans des classes PHP.",
          tags: ['cryptographie', 'xor', 'php', 'vernam', 'lfsr'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'julienpauli',
        mail: 'julien.pauli@gmail.com',
      },
    },
    {
      since: '2018-06-15',
      name: 'Julien Topçu',
      bio: 'Software Craftsman, évangeliste, coach @ Egencia & Owasp member',
      picture:
        'https://www.gravatar.com/avatar/610f3914d9b392b389657823719f09dd',
      websites: [
        {
          name: 'Web',
          url: 'https://beyondxscratch.wordpress.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/julien-top%C3%A7u/',
        },
      ],
      location: 'Paris La Défense',
      sessions: [
        {
          title: 'KanBan #noEstimates & Extreme Programming',
          abstract: 'Boostez votre création de valeur',
          tags: ['KanBan', 'XP', '#noEstimates', 'Agilité'],
          lang: ['fr'],
        },
        {
          title: "L'Architecture Hexagonale",
          abstract:
            'Découvrez comment découpler votre code métier de la technique pour rendre vos applications plus évolutives et pérennes',
          tags: ['Architecture', 'Domain Driven Design'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'JulienTopcu',
        mail: 'julien.topcu@gmail.com',
      },
    },
    {
      since: '2018-07-27',
      name: 'Stephane Vanacker',
      bio:
        "Robotic maker, R&D Agile Manager, @ Cegedim Insurance Solutions. +15 ans d'experience professionnelle en développement et management d'equipes chez des éditeurs de logiciels",
      picture:
        'https://secure.gravatar.com/avatar/42b0d0d650595caf785709ecd56768d1',
      cities: ['Toulouse'],
      contacts: {
        twitter: 'svanacker',
        mail: 'svanacker@gmail.com',
      },
      location: 'Toulouse',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/st%C3%A9phane-vanacker-4611765/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/svanacker',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/svanacker',
        },
      ],
      sessions: [
        {
          title: 'Réussir un projet en Microservices',
          abstract:
            "Pourquoi et comment mener un projet en microservices, Méthodologies d'organisation des équipes (loi de Conway inversée), retours d'expérience (bonnes pratiques) sur un projet avec 30 personnes en microservices depuis 2 ans, Liste de Patterns techniques utiles (Ex: Infrastructure As Code, CQRS, Idempotence, Pets vs Cattle, Correlation ID, Feature Flipping, Blue Green Deployment, Canary release ...",
          tags: [
            'Architecture',
            'Microservices',
            'Cloud',
            'Docker',
            'DevOps',
            'Scrum',
            'Tests',
          ],
          lang: ['fr', 'en'],
        },
      ],
    },
    {
      since: '2018-08-03',
      name: 'Xavier Blanc',
      bio:
        "Développeur (et accessoirement Professeur à l'Université de Bordeaux), toujours curieux des nouvelles approches de programmation (Clean Code, Craftmanship, DDD, BDD, Dette Technique, etc.).",
      picture: 'https://avatars3.githubusercontent.com/u/10332041?s=460&v=4',
      cities: ['Bordeaux', 'Paris'],
      contacts: {
        mail: 'xavier.blanc@u-bordeaux.fr',
      },
      websites: [
        {
          name: 'Web',
          url: 'http://www.labri.fr/perso/xblanc/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/xblanc33',
        },
        {
          name: 'Web',
          url: 'https://www.youtube.com/channel/UCx35YRVHVBU_D6OBG-dqQRA',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Clean Code, coder proprement.',
          abstract:
            'Le Clean Code (R.C. Martin) est un magnifique livre qui rassemble toutes les pratiques pour écrire du code lisible. Cette présentation présente les pratiques fondamentales et explique le rôle des linter.',
          tags: ['Java', 'Clean Code'],
          lang: ['fr'],
        },
        {
          title: 'Gamification pour la Dette Technique et les Tests',
          abstract:
            "Les bonnes pratiques qui permettent de faire baisser la dette technique (règle du boy scout) ou augmenter les tests (test first) ne sont pas toujours respectées. Nous avons mis en place une approche qui exploite la Gamification pour améliorer l'engagement dans ces pratiques. Cet exposé présente les résultats que nous avons obtenus.",
          tags: ['Gamification', 'Dette Technique'],
          lang: ['fr'],
        },
        {
          title: "L'objet en mode Clean Code et DDD",
          abstract:
            "Après plusieurs années à programmer en Java, je découvre encore pleins de belles constructions qui solutionnent bons nombres de mes problèmes. Cet exposé présente la programmation objet comme vous ne l'avez jamais vu, et fait la part belle au Clean Code et au DDD.",
          tags: ['Java', 'Clean Code', 'DDD'],
          lang: ['fr'],
        },
        {
          title:
            'Framework JS pour crawler le web (et aussi faire les tests E2E',
          abstract:
            'Crawler le web ou effectuer des tests E2E cela vous intéresse ? Vous avez entenu parler de puppeteer ? De finger printing ? Vous voulez voir une archi gros bras ? Ce talk est fait pour vous.',
          tags: ['JS', 'Web', 'Crawling', 'finger printing'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-08-03',
      name: 'Arthur Magne',
      bio: 'Software Craftsman, CTO & co-founder @ ProMyze.',
      picture:
        'https://secure.gravatar.com/avatar/81bc7a35930c4ab2ae9400ff8a325206?size=400',
      cities: ['Bordeaux'],
      contacts: {
        mail: 'arthur.magne@promyze.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://promyze.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/arthur-magne-2b81aa81/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Le Software Craftsmanship en contexte industriel.',
          abstract:
            "Dans des contextes où seuls les apports fonctionnels sont valorisés (\"ce que le client voit\"), le mouvement du Software Craftsmanship et ses valeurs, qui prônent l'amélioration continue du projet, peuvent être souvent misent de côté au détriment de la qualité. Dans un premier temps je présenterai l'histoire de ce mouvement. Je ferai un focus sur ses valeurs liées directement au code (architecture, tests, clean code) et montrerai comment les mesurer. Enfin je parlerai de ce qui est au coeur du développement : l'humain. Il représente l'unique facteur clé de réussite d'une démarche de qualité (animation, communication, échanges, engagement des développeurs, accompagnement de la part du management, etc.)",
          tags: [
            'Software Craftsmanship',
            'Clean Code',
            'Dette technique',
            'Tests',
            'Communication',
          ],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-09-21',
      name: 'Constantin Guay',
      bio:
        'Team Facilitator, Impediment Remover, Scrum Master. Writer of blog const.fr (in French and English) and Author on Scrum Life, the biggest Youtube channel about Agility in French',
      picture:
        'https://const.fr/wp-content/uploads/2019/02/photo_cg_2019_square_p.jpg',
      cities: ['Paris', 'Versailles'],
      contacts: {
        twitter: 'cog_g',
        mail: 'constantin.guay@gmail.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://const.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/constantinguay/',
        },
        {
          name: 'Scrum Life Youtube Channel',
          url: 'https://www.youtube.com/c/ScrumLife',
        },
      ],
      location: 'Paris, Ouest parisien, remote',
      sessions: [
        {
          title: "Passer au sprint d'une semaine",
          abstract:
            "Difficultés, bénéfices, emploi du temps. Qu'est-ce que ça peut vous apporter de passer au Sprint d'Une Semaine ?",
          tags: ['Agile', 'Scrum', 'Coaching', 'Sprint'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'La gestion du backlog et la planification tout en restant agile',
          abstract:
            "On a parfois l'impression d'avoir deux injonctions contradictoires : être agile en étant réactif, tout en étant prévisible pour planifier à long terme (la fameuse roadmap), débloquer des budgets et rassurer les managers et investisseurs. Cela paraît antinomique et pourtant, il y a des façons de faire ! Parlons-en.",
          tags: ['Agile', 'Scrum', 'Coaching', 'Sprint', 'Planning', 'Roadmap'],
          lang: ['fr', 'en'],
        },
        {
          title: 'IMPACT : Comment prendre des décision quand on est PO ?',
          abstract:
            'Comment choisir la bonne priorisation ? Quels sont les outils du PO pour choisir les fonctionnalités ayant le plus de valeur, les utilisateurs à inviter, les tâches techniques à intégrer au backlog ? Je vous propose des outils clairs pour les PO de tout niveau',
          tags: [
            'Agile',
            'Scrum',
            'Produit',
            'Valeur',
            'Priorisation',
            'Product Owner',
            'PO',
          ],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Dark Agile : Le Scrum Master "chronomètre" est un danger pour l\'équipe',
          abstract:
            "Pourquoi le Scrum Master ne peut pas être un dev, un PO ou tout autre rôle que celui de Scrum Master? À quoi ça sert vraiment un Scrum Master ? Juste à inculquer Scrum à l'équipe ? Et ensuite, que fait-il ? C'est une mission temporaire ?",
          tags: ['Agile', 'Scrum', 'Coaching', 'Dark Agile'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Management : Une équipe agile demande une nouvelle approche',
          abstract:
            "Comment faire pour manager une équipe agile ? L'agilité vient en contradiction avec les méthodes traditionnelles, pour se rapprocher plus des valeurs de Deming. Comment, quand on est manager, doit-on se comporter lorsqu'on travaille avec une équipe agile ?",
          tags: ['Agile', 'Scrum', 'Coaching', 'Management'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Comment rater ses communautés de pratiques',
          abstract:
            "Une des clés de l'efficacité d'un modèle à l'échelle est la capacité des équipes à communiquer et à avancer dans le même sens. Quelles sont les erreurs à faire (et donc à éviter) pour ne pas construire des communautés de pratiques de façon pérenne ?",
          tags: [
            'Agile',
            'Scrum',
            'Coaching',
            'Management',
            'Dépendance',
            'Collaboration',
            'Equipes',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Example Mapping : Atelier',
          abstract:
            "L'example Mapping est un atelier permettant de facilité le découpage des US et d'en sortir le maximum de valeur, tout en limitant le gâchis en ne faisant pas des choses inutiles pour le client ou l'utilisateur",
          tags: [
            'Agile',
            'Scrum',
            'Produit',
            'Valeur',
            'Priorisation',
            'Product Owner',
            'PO',
            'Atelier',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'User Story Mapping : Atelier',
          abstract:
            "Le meilleur moyen de comprendre le besoin du client c'est en étudiant son workflow et en en tirant des hypothèses sur son besoin",
          tags: [
            'Agile',
            'Scrum',
            'Produit',
            'Valeur',
            'Priorisation',
            'Product Owner',
            'PO',
            'Atelier',
          ],
          lang: ['fr', 'en'],
        },
        {
          title:
            "Architecture : Comment on concoit dans une équipe agile ? Quelle est la place de l'architecte technique ?",
          abstract:
            "Que ce soit le design graphique, le design technique (architecture), la conception émergente est une des clés de l'agilité. Préparer des maquettes, un socle technique ou faire une phase de cadrage technique est souvent une preuve de manque d'agilité, alors, on fait comment pour des produits très complexe ?",
          tags: [
            'Agile',
            'Scrum',
            'Produit',
            'Valeur',
            'Priorisation',
            'Architecture',
            'Sprint 0',
            'Cadrage',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: "Sprint 0 : et si on s'en passait ?",
          abstract:
            "Que ce soit le design graphique, le design technique (architecture), la conception émergente est une des clés de l'agilité. Préparer des maquettes, un socle technique ou faire une phase de cadrage technique est souvent une preuve de manque d'agilité, alors, on fait comment pour des produits très complexe ?",
          tags: [
            'Agile',
            'Scrum',
            'Produit',
            'Valeur',
            'Priorisation',
            'Architecture',
            'Sprint 0',
            'Cadrage',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Management 3.0 : Comprendre les motivateurs de votre équipe',
          abstract:
            "Une explication et mes astuces pour animer un atelier de Moving Motivator, l'exercice venant du Management 3.0 pour comprendre comment impliquer votre équipe.",
          tags: ['Agile', 'Scrum', 'Equipe', 'Management 3.0', 'Management'],
          lang: ['fr', 'en'],
        },
        {
          title: "Peut-on se passer des estimations ? Comment s'y prendre ?",
          abstract:
            'Une entrée en matière sur le mouvement NoEstimate, plus mes astuces et conseils pour le mettre en place chez vous, que ce soit avec une nouvelle équipe ou sur une équipe qui fonctionne déjà tout en répondant aux besoins de roadmap et budget.',
          tags: [
            'Agile',
            'Scrum',
            'Equipe',
            'Management',
            'Estimation',
            'Roadmap',
            'Budget',
          ],
          lang: ['fr', 'en'],
        },
      ],
    },
    {
      since: '2018-09-26',
      name: 'Laurent Thiebault',
      bio:
        'Software Engineer. Music & Tech lover. eat(); sleep(); code(); repeat();',
      picture:
        'https://avatars0.githubusercontent.com/u/9600228?u=5b0165bb1fecfd2f29b022229de06be07912b0e8&v=4',
      cities: ['Lille'],
      contacts: {
        twitter: 'lauthieb',
        mail: 'thiebault.laurent@gmail.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://lauthieb.github.io',
        },
        {
          name: 'Github',
          url: 'https://github.com/lauthieb',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/lauthieb/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: "Plongez dans l'univers des chatbots avec Recast.ai",
          abstract:
            'Vous entendez de plus en plus parler de chatbots ? Vous avez envie de savoir comment en construire un facilement ? Alors ce talk est fait pour vous ! Venez découvrir Recast.ai, une plateforme #madeInFrance pour développer des chatbots performants dans une interface intuitive !',
          tags: ['Chatbots', 'Recast', 'NLP', 'Intents', 'AI'],
          lang: ['fr'],
        },
        {
          title: 'Monte le son sur ton desktop avec Electron !',
          abstract:
            "Ah ces clients lourds... Nous les avons appréciés il fut un temps... Venez découvrir comment Electron nous permet de créer des applications desktop performantes avec les langages du web que nous maitrisons déjà au travers d'un live coding d'une songbox !",
          tags: ['Electron', 'Desktop', 'Live coding'],
          lang: ['fr'],
        },
        {
          title: 'Vanilla.js #backToBasics',
          abstract:
            'Angular, React, Vue.js... Et j’en passe ! Tout cela est bien, mais revenons un peu aux bases : JavaScript. À travers ce talk, vous allez découvrir ou approfondir vos connaissances sur ce beau langage à travers une séance 100% Live Coding. Variable scope, hoisting, closures, prototypes, syntatic sugar, promise, async & await... Amusement assuré !',
          tags: ['VanillaJS', 'JavaScript', 'Front', 'Basics'],
          lang: ['fr'],
        },
        {
          title: 'Un zeste de Nest pour réhausser le goût du back-end JS',
          abstract:
            'Nous connaissons tous un développeur frontend qui est devenu plus efficace grâce à des solutions comme Angular, Vue ou React. On connait également des développeurs backend qui développent de manière architecturée grâce à Spring Boot pour Java ou ASP.NET Core pour .NET Core. Et côté NodeJS ? 99% utilisent Express, qui est loin d’être un équivalent… Pourtant il existe NestJS qui propose des facilitant pour créer des APIs REST ou GraphQL au top! (avec @cyril_lakech)',
          tags: ['NodeJS', 'NestJS', 'TypeScript', 'Angular', 'API'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-09-26',
      name: 'Kevin Biger',
      bio:
        'Consultant @ Palo-IT, Co-fondateur des meetups Blockchains&Société et GraphDataBase Nantes',
      picture: 'https://avatars3.githubusercontent.com/u/1651744?s=460&v=4',
      cities: ['Nantes'],
      contacts: {
        twitter: 'kevin_biger',
        mail: 'kevin.biger@gmail.com',
      },
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/kbiger',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/kevinbiger/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Introduction aux blockchains',
          abstract:
            "Il s'agit de vous présenter les concepts de la blockchain et ses applications concrètes, présentes et futures. Le contenu peut bien entendu être adapté au public.",
          tags: ['Blockchain', 'Smart contracts', 'DLT'],
          lang: ['fr'],
        },
        {
          title: 'Découvrir les bases NoSQL orientées graphes avec Neo4j',
          abstract:
            'Découvrons ensemble les bases de données NoSQL orientées graphes et notamment Neo4j.',
          tags: ['Neo4j', 'NoSQL', 'Graph'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-09-26',
      name: 'Domhnall Campbell',
      bio:
        'Traduction, développement, tests, automatisation.. Ce touche à tout profite aujourd’hui à la tribu IARD Entreprise Axa France.',
      picture:
        'https://fr.gravatar.com/userimage/145366385/b8c3f5beb543715b232e63e4fc9c7193.jpg?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/CampbellGit',
        },
        {
          name: 'Website',
          url: 'http://domcampbell.com/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'De la bienveillance dans vos PR',
          abstract:
            'Lancer une Pull Request, c’est un peu se mettre à nu : on met à l’épreuve notre état d’esprit, nos capacités et notre savoir-faire. Même si c’est le meilleur moyen d’avoir du feedback rapidement sur son code, c’est aussi le mettre au jugement des autres. Nous y sommes ! Le jugement. Ce mot peut corrompre une méthode de travail efficace et la transformer en veritable procès ! Ne vous inquiétez pas, avec les bonnes méthodes, vous pourrez non seulmement vous prémunir de ce genre de derive mais aussi aider vos collègues à s’améliorer.',
          tags: [
            'bienveillance',
            'PR',
            'pull',
            'request',
            'estime',
            'soi',
            'open',
            'source',
            'guithub',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'BigupCampbell',
        mail: 'domhnallcampbell@gmail.com',
      },
    },
    {
      since: '2018-10-01',
      name: 'Guillaume Lagorce - GUL',
      bio:
        "Développeur Senior Freelance, j'aime apporter expérience et bonnes pratiques dans les équipes que j'intègre, toujours au service de l'utilisateur final",
      picture: 'https://avatars0.githubusercontent.com/u/2989532?s=460&v=4',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/HEYGUL',
        },
        {
          name: 'Website',
          url: 'http://hey-gul.com/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'La pyramide des tests',
          abstract:
            "Il est souvent admis que la qualité logicielle passe par les tests et leur automatisation.\nMais... c'est quoi un test ? Est-ce qu'il n'existe qu'un seul type de test ? Tout doit-il être testé ? Et d'ailleurs, qu'est-ce que \"tout\" ?\nSi vous vous êtes déjà senti \"coincé\", bloqué dans un refacto ou dans l'ajout d'une nouvelle feature à cause de l'absence voire de la présence de tests, ce talk est pour vous.\n\nEn m'appuyant sur les différentes typologies de tests, de retours d'expérience et en exposant les coûts VS les gains des tests, je montrerai que la pyramide des tests représente le dernier tombeau de vos bugs !",
          tags: [''],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        mail: 'guillaume@hey-gul.com',
      },
    },
    {
      since: '2018-10-03',
      name: 'Gérald Quintana',
      bio:
        "Big, fast, smart... peu importe les qualificatifs, je m'intéresse à la data, à son  traitement et son stockage. Je fait partie de l'équipe LyonJUG et MixTeen",
      picture: 'https://avatars1.githubusercontent.com/u/755587?s=460&v=4',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/gquintana',
        },
        {
          name: 'Website',
          url: 'https://gquintana.github.io/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/gerald_quintana',
        },
      ],
      location: 'Lyon',
      sessions: [
        {
          title: 'Apache Kafka: Introduction',
          abstract:
            "Message broker, event log, data streaming: pourquoi utiliser Kafka? Nous découvrirons les concepts de cet outil connu pour ses performances et sa scalabilité. J'aborderai les problématiques de dév (producer, consumer...) et d'ops (scaling, monitoring...), ainsi que l'écosystème Kafka",
          tags: ['kafka'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon', 'Saint Etienne'],
      contacts: {
        twitter: 'gerald_quintana',
        mail: 'gerald.quintana+bbl@gmail.com',
      },
    },
    {
      since: '2018-10-08',
      name: 'Emmanuel Longeau',
      bio:
        'Dev @ SFEIR, Javaiste, Dév fonctionnel dans mon garage, papa, gentil troll',
      picture:
        'https://fr.gravatar.com/userimage/145975626/d25697338c9c32d58700fac3c95a0666.jpg?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/elongeau',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/elongeau',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Fun with Function',
          abstract:
            'La programmation fonctionnelle revient sur le devant de la scène depuis quelques années. Au delà des buzzwords venez découvrir les bases de la programmation fonctionnelle : que peut on bien faire avec juste des fonctions ?',
          tags: ['haskell', 'functional programming'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'elongeau',
        mail: 'emmanuel.longeau+bbl@gmail.com',
      },
    },
    {
      since: '2018-10-05',
      name: 'Rew Islam',
      bio: 'Working to bring passwordless technologies to Dashlane',
      picture:
        'https://d38muu3h4xeqr1.cloudfront.net/website/static/FEM-WN-JOB1-1105/images/pictures/rew-islam@2x.png',
      websites: [
        {
          name: 'Website',
          url: 'https://www.dashlane.com',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/rewislam',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Learn about passkeys and the FIDO Alliance',
          abstract:
            'The world will be moving to passkeys, find out what it is all about!',
          tags: ['passkeys', 'fidoalliance', 'webauthn'],
          lang: ['en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'rewislam',
        mail: 'rew.islam@dashlane.com',
      },
    },
    {
      since: '2018-10-10',
      name: 'Guillaume Maron',
      bio: 'Building Dashlane and its Engineering team since 2009',
      picture:
        'https://www.gravatar.com/avatar/c4149d8bd585c5f4a07cb6ee05898012?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.dashlane.com',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Scaling your engineering team',
          abstract:
            'Challenges faced while scaling an engineering team from 0 to 40 people. Recruiting, changing the organisation, managing technical debt.',
          tags: [
            'scaling',
            'engineering team',
            'recruiting',
            'scrum',
            'feature teams',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Involve your engineering team in the recruitment process',
          abstract:
            "How to involve your engineering team in the recruitment process to better evaluate candidate, improve your candidate's experience, and improve your ability to close candidates. - https://fr.slideshare.net/GuillaumeMaron/involve-your-engineering-team-in-the-recruitment-proces",
          tags: ['engineering team', 'recruiting'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        mail: 'guillaume.maron@gmail.com',
      },
    },
    {
      since: '2018-11-05',
      name: 'Loïc Mathieu',
      bio: 'Consultant et formateur chez Zenika Lille',
      picture:
        'https://pbs.twimg.com/profile_images/1055114256247676928/wnb-1EtJ_400x400.jpg',
      websites: [
        {
          name: 'Web',
          url: 'http://www.loicmathieu.fr',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Mes premiers pas en Deeplearling',
          abstract:
            "Mes premiers pas en Deeplearning, ou comment j'ai réalisé une application de recherche de produits avec Keras et Tensorflow sans trop savoir comment ça marchais. Présentation des principes du deeplearning, utilisation de la librairies de Keras, les premiers écueils et comment je les ai franchit.",
          tags: ['deeplearning', 'keras', 'tensorflow', 'python'],
          lang: ['fr'],
        },
        {
          title: 'De Java 8 à Java 11',
          abstract:
            'Encore sous Java 8 et un peu débordé sur les changements des nouvelles versions en terme de gouvernance, cycle de vie et fonctionalités? Pas de panique, je vais vous expliquer tout ça et revenir avec vous sur les principales nouveautés du languages Java à destination des dévelopeurs.',
          tags: ['java', 'java9', 'java10', 'java11'],
          lang: ['fr'],
        },
        {
          title: 'Inside the JVM : GC and JIT',
          abstract:
            "Je peux venir vous parler au choix du Garbage Collector ou du Just In Time Compiler de Java. Ces deux sujets sont compréhensible par tous, et même si les exemples sont basés sur la JVM, ils s'appliquent à tous les languages qui sont garbage collectés / avec un JIT",
          tags: ['java', 'jvm', 'gc', 'jit'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Apache Kafka',
          abstract:
            'Une introduction à Apache Kafka : principes, stream processing, Kafka Stream, Kafka Connect, KSQL',
          tags: ['java', 'kafka', 'streamprocessing'],
          lang: ['fr'],
        },
        {
          title: 'Développer une API Cloud Ready avec Quarkus',
          abstract:
            "Quarkus est un nouveau framework de développement de microservice en Java. A sa sortie il a suscité pas mal de buzz. Il a été pensé pour le développement de microservice à déployer dans le Cloud. On définit souvent les applications Cloud Ready celons les principes des 12 Factors Apps (https://12factor.net/), ou quand elles sont appliquées à Kubernetes, Cloud Native Container Apps (https://www.redhat.com/en/resources/cloud-native-container-design-whitepaper). Dans ce talks, après avoir rapidement présenté Quarkus et ses principes, j'entamerais une scéance de live coding qui vous exposera les principales étapes pour développer une application Cloud Native avec Quarkus.",
          tags: ['java', 'kafka', 'streamprocessing'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'loicmathieu',
        mail: 'loikeseke@gmail.com',
      },
    },
    {
      since: '2018-11-05',
      name: 'Arnaud COURTY',
      bio:
        'Chercheur en sécurité, ma mission principale est d’évangéliser les entreprises pour une prise en compte des problématiques de sécurité dès les premières phases de conception. Je travaille sur des audits offensifs internes et externes ou encore sur des évaluations du niveau de sécurité de systèmes embarqués en amont de leur industrialisation (systèmes IVI ou autre système industriel et grand public). Depuis les prémices de l’IoT, je me suis spécialisé dans la recherche de vulnérabilité des objets connectés, mais aussi dans la sensibilisation des concepteurs, des développeurs et des intégrateurs de solutions. Je profite des conférences et groupes de travail pour militer pour un monde des objets connectés moins vulnérables.',
      picture: 'http://vulcainreo.com/me.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/arnaud-courty/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/vulcainreo',
        },
      ],
      location: 'Toulouse',
      sessions: [
        {
          title: 'Web - Top 10 OWASP - réalité ou intox ?',
          abstract:
            "Malgré l'augmentation du niveau de sécurité des frameworks de développement, les injections, fuites d'information et les possibilités de déplacements horizontaux et verticaux sont nombreux. Durant une heure, nous comprendrons que ces vulnérabilités sont communément rencontrées et nous apprendrons à nous en protéger avec des moyens simples et efficaces. Cette présentation s'adresse tant aux développeurs, qu'aux chefs de projet et aux responsables sécurité. Compte tenu des contraintes sanitaires, cette présentation interactive peut se faire en visio conférence (ex.: zoom, jitsi, skype ou teams) ou bien physiquement avec le respect des gestes barrières.",
          tags: ['CyberSecurity', 'OWASP Web'],
          lang: ['fr', 'en'],
        },
        {
          title: 'IoT - Top 10 OWASP - réalité ou intox ?',
          abstract:
            "Cette présentation sera l'occasion de faire une rétrospective des vulnérabilités les plus rencontrées au cours des audits de sécurité IoT. En effet, depuis les systèmes industriels aux produits du grand public, de nombreux concepts de sécurité sont similaires mais souvent mal implémentés. Depuis un système industriel autonome auquel une adresse IP lui a été ajouté, à la TV/poupée connectée qui espionne un ménage à son insu, toute problématique de sécurité prend rapidement une nouvelle dimension dès que l'objet est disponible sur le marché et connecté à un cloud. L'objectif de cette présentation et de fournir aux concepteurs, développeurs et intégrateurs de solution IoT, un aperçu des réflexes sécurité nécessaires afin d'inclure les bonnes pratiques de sécurité dès l'expression du besoin. Compte tenu des contraintes sanitaires, cette présentation interactive peut se faire en visio conférence (ex.: zoom, jitsi, skype ou teams) ou bien physiquement avec le respect des gestes barrières.",
          tags: ['CyberSecurity', 'IoT', 'OWASP IoT'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Toulouse', 'Paris', 'La Rochelle'],
      contacts: {
        twitter: 'vulcainreo',
        mail: 'conf@vulcainreo.com',
      },
    },
    {
      since: '2018-11-17',
      name: 'Sylvain MAUCOURT',
      bio:
        "Leader Technique depuis plusieurs années, je prends plaisir à accompagner des équipes techniques qui s'épanouissent autour de grandes valeurs.",
      picture: 'https://avatars2.githubusercontent.com/u/2259101?s=460&v=4',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/sylvainmaucourt/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/sylvek',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Kafka 101',
          abstract:
            "Tour du propriétaire, présentation des grandes fonctionnalités, les subtilités des paritions, c'est quoi KStream? etc.",
          tags: ['Kafka'],
          lang: ['fr'],
        },
        {
          title: 'Comment créer une (feature) team qui déchire',
          abstract:
            "Je présenterai un REX sur ce qui a permis aux équipes que j'ai eu la chance de cotoyer, de relever les défits les plus fou.",
          tags: [
            'Agile',
            'Autonomie',
            'Just Culture',
            'Post Mortem',
            'Chaos Engineering',
            'GameDay',
            'Leader',
            'Anti Fragile Pattern',
            'SRE',
            '12 Factor',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'sylv3k',
        mail: 'smaucourt@gmail.com',
      },
    },
    {
      since: '2018-11-22',
      name: 'Patrik Cyvoct',
      bio:
        'Cloud Architect | Passioné de Linux, du Cloud, de Docker, de Kubernetes, toussa toussa.',
      picture: 'https://static.ptrk.io/patrik.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://blog.ptrk.io',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/patrik-cyvoct',
        },
        {
          name: 'AboutMe',
          url: 'https://resume.ptrk.io',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Sh4d1',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'LinuxKit 101',
          abstract:
            "Vous n'avez jamais entendu parler de LinuxKit ? Ça vous dit vaguement quelque chose ? Ce BBL présentera ce qu'est LinuxKit, à quoi ça sert, et comment s'en servir.",
          tags: [
            'LinuxKit',
            'Linux',
            'Docker',
            'Containers',
            'Immutable',
            'Infrastructure',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'PatrikCyvoct',
        mail: 'patrik@ptrk.io',
      },
    },
    {
      since: '2018-11-23',
      name: 'Paul SOUCHE',
      bio: 'Développeur front end',
      picture:
        'https://s.gravatar.com/avatar/ab3062b8853bdaa9bbe46fe09acb7ba7?s=80',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/paul-souche-48431586/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/paulsouche',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Scale your codebase with TypeScript',
          abstract: 'Pourquoi vous devriez commencer à envisager TypeScript',
          tags: ['TypeScript'],
          lang: ['fr', 'en'],
        },
        {
          title: 'lerna + yarn + TypeScript monorepos FTW',
          abstract: 'Comment organiser sa codebase front dans un monorepo',
          tags: ['lerna', 'yarn', 'TypeScript', 'Monorepo'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'paulsouche',
        mail: 'paul.souche@gmail.com',
      },
    },
    {
      since: '2018-11-29',
      name: 'Michael BONFILS',
      bio: "Developpeur Backend, de l' embarqué au stockage object gros volume",
      picture:
        'http://gravatar.com/avatar/3f4a46418b5ab851bd38301ecc6c8110?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.openio.io',
        },
        {
          name: 'Blog',
          url: 'https://blog.openio.io',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bonfilsmichael/',
        },
        {
          name: 'GitHub',
          url: 'http://github.com/murlock/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Comment héberger son cloud privé compatible AWS S3',
          abstract:
            'Avec un cluster Raspberry Pi3, de serveur chez un hébergeur ou de votre propre data center, apprenez à déployer & configurer vos outils sur votre propre instance S3',
          tags: ['cloud', 's3', 'raspberry', 'private'],
          lang: ['fr'],
        },
        {
          title: 'Sauvegarder ses données bigdata',
          abstract:
            'Sauvegardez vos datalakes efficacement dans une solution stockage objet',
          tags: ['hadoop', 's3', 'java', 'cloud', 'private'],
          lang: ['fr'],
        },
        {
          title: 'Customiser votre passerelle Swift/S3',
          abstract:
            'A travers quelquex exemples, nous verrons comment ajouter des plugins à la passerelle Swift/S3, tel que enrichir les meta données',
          tags: ['openstack', 'swift', 's3', 'cloud', 'python'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'tyrion94',
        mail: 'bonfils.michael@gmail.com',
      },
    },
    {
      since: '2018-12-14',
      name: 'Quentin LEREBOURS',
      bio:
        'Développeur full-stack passionné @BearStudio, pour apporter de la valeur aux entrepreneurs',
      picture:
        'https://lh5.googleusercontent.com/-BO6pCTEZS0c/AAAAAAAAAAI/AAAAAAAAAA4/I0rcyN8skhk/photo.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/quentin-lerebours',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/qlerebours',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title:
            'Créez votre propre application conversationnelle pour Google Home',
          abstract:
            'Apprenez à développer une application interactive pour Google Home avec Actions on Google et Dialogflow.',
          tags: ['GoogleHome', 'Actions on Google', 'Dialogflow', 'Firebase'],
          lang: ['fr'],
        },
        {
          title:
            'Développez une application mobile IoT avec ReactNative en Bluetooth Low Energy',
          abstract:
            "Créer une application mobile qui communique avec des objets connectés vous paraît complexe ? Je vous propose d'éclaircir tout ça en moins d'une heure !",
          tags: ['React Native', 'IoT', 'BLE', 'GATT'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen', 'Paris'],
      contacts: {
        twitter: 'qlerebours_',
        mail: 'quentin.lerebours@gmail.com',
      },
    },
    {
      since: '2018-12-29',
      name: 'Benedetta pastore',
      bio:
        "Lead User Researcher chez Ippon, passionée par l'innovation au service de l'humain.",
      picture:
        'https://media.licdn.com/dms/image/C5603AQE0oDZtxlVTag/profile-displayphoto-shrink_800_800/0?e=1551312000&v=beta&t=YmisceRDGqr3A3c5j2D7cGvT4HKIvaaJKRs3Tsv6E_E',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/benedettapastore/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Intégrer la démarche centrée Utilisateur dans le produit',
          abstract:
            "La démarche User Centric est aujourd'hui au coeur des problematiques des entreprises. Comment utiliser la User Research pour détecter les vrais utilisateurs et leurs besoins ? Pouvons nous donner du sens, améliorer le ROI et suivre la performance grâce au design ? Autant de questions auxquelles nous allons répondre ensemble.",
          tags: [
            'expérience client',
            'co-construction',
            'UX',
            'UX strat',
            'usear research',
            'design thinking',
            'customer centric',
          ],
          lang: ['fr', 'it'],
        },
        {
          title: 'Facilitation à l’innovation',
          abstract:
            'Tout le monde peut avoir des idées innovantes, mais la vraie réussite consiste à identifier les obstacles et les transformer en opportunités. Le facilitateur est une figure qui peut vous guider et aider à cadrer la phase de conception et de création afin de concrétiser les idées, les tester auprès des utilisateurs et réussir à apporter de la valeur grâce à l’amélioration continue.',
          tags: [
            'innovation',
            'innovation game',
            'facilitation',
            'expérience client',
            'co-construction',
            'UX strat',
            'design thinking',
            'customer centric',
          ],
          lang: ['fr', 'it'],
        },
      ],
      cities: ['Paris', 'Bordeaux', 'Lyon', 'Nantes', 'Lille', 'Toulouse'],
      contacts: {
        twitter: 'begepas',
        mail: 'benedetta.pastore@gmail.com',
      },
    },
    {
      since: '2019-01-03',
      name: 'Cedrick Lunven',
      bio:
        'Developer Advocate chez DataStax, créateur de FF4j, contributeur JHispter',
      picture: 'https://avatars3.githubusercontent.com/u/726536?v=3&s=466',
      location: 'Paris, proche banlieue et La Défense',
      sessions: [
        {
          title: 'Intro à FF4J, Proposition de Feature Toggle pour Java',
          abstract:
            "Le feature toggle, ou la capacité à activer ou désactiver des fonctionnalités à chaud, est souvent associée à une astuce de développement au service du Continuous Delivery. On peut pousser du code en production qui n'est pas complètement finalisé et introduire de la dette technique... mais il peut être tellement plus utile !!!!! Après quelques cas d'usages très concrets, je vous propose de détailler les capacités du framework FF4J, les choix d'implémentation, les références en production, les killers features ainsi que les prochaines évolutions.",
          tags: ['Feature Toggle', 'ff4j'],
          lang: ['fr'],
        },
        {
          title:
            "Cas d'usages et implémentation des APIS en Java avec REST, gRPC ou GraphQL",
          abstract:
            "Il existe une grande variété de patterns pour accéder à vos bases de données en fonction des cas d’usage et des technologies utilisées : simple CRUD, streaming, asynchrone, réactif, fonctions… Chez DataStax, au travers de l'implémentation d'application de references comme Killrvideo](killrvideo.github.io) nous avons eu l’opportunité de tester la meme API en REST, gRPC et GraphQL avec Java (SpringBoot 2). Je vous propose un tour d’horizon des 3 solutions, les points forts, les points faibles, les details d’implementation au travers d'une demo et code reviews.",
          tags: ['API', 'GraphQL', 'REST', 'gRPC'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'clunven',
        mail: 'cedrick.lunven@gmail.com',
      },
    },
    {
      since: '2019-02-03',
      name: 'Quentin ADAM',
      bio: 'CEO chez Clever Cloud',
      picture: 'https://i.imgur.com/YdzlEj0.jpg',
      location: 'Nantes/Paris',
      sessions: [
        {
          title: "C'est quoi Clever Cloud et comment ça marche ?",
          abstract:
            "Une rapide demo de Clever Cloud et de pourquoi on l'a construit et comment. L'idée est de découvrir le fonctionnement de l'outil afin d'envisager si ça peut être utile et rendre les devs plus efficaces et heureux. En fonction du temps, une explication de comment ça marche est possible.",
          tags: ['cloud computing', 'PaaS', 'devops'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Why postgres SQL deserve noSQL fan respect',
          abstract:
            'Postgres SQL is a plain old SQL DB. Very powerful and very consistent, in some case, project needs an ACID database, but schemaless… With JSON support, postgres is a very interesting tool to provide ACID and some very interesting function (time management, localisation function and data types…) and the schemaless noSQL point of view with json and indexed json. This talk show some great usage and some insigth to build some great application with postgres.',
          tags: ['postgres', 'SQL', 'database', 'nosql'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Immutability: from code to infrastructure, the way of scalability',
          abstract:
            'The all functional programming world, Docker, Clever Cloud, micro service architecture, logs append only DB… All of this rely on the immutability at some point: infrastructure immutability, data immutability, append only. This is the way we now build some of the best scalable applications and infrastructure. The talk is made to understand why Immutability rules the scalability and why it’s important.',
          tags: ['functional programing', 'code', 'devops', 'cloud'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Containers, VMs, Processes… Isolation, performances, I/O… How all of these technologies work and compare to each other? Deep dive and learn about your Operating System.',
          abstract:
            'Everybody is now using virtualization, containers are all the rage today, and microkernels start to gain traction… But how is all this working? How did these solutions come to be? What are the differences between containers and virtual machines? Where and why should you use docker, runc, rocket, kvm, xen, virtualbox, includeOS, rancherOS? This talk is a full session providing understanding on how these technologies work, how they compare to each other, and lot’s of demo to understand differences and fundamental concept on isolation. So, let’s look under the hood, and understand how your system works (hint: it’s not magic). And yes, it will be understandable even if you are not an OPS or an expert. That’s precisely the point.',
          tags: ['devops', 'container', 'docker', 'linux', 'virtualization'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Comment ça marche systemd déjà ? ',
          abstract:
            'Après la grande guerre initd et systemd, il est clair que maintenant systemd s’est imposé. Pourquoi ? Quels sont les intérêts ? Est ce difficile de faire un fichier de configuration systemd ? Comment ça marche ? Comment écrire un fichier de conf ? Comment gérer des CRONs avec ?',
          tags: ['devops', 'linux', 'systemd'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Scala Implicits: pour faire des APIs simples, des DSL ou de la magie noire, ça marche comment ?',
          abstract:
            'C’est quoi un implicit ? Pourquoi ça existe dans le langage ? Le lien au DSL (au fait c’est quoi un DSL) ? Construire une API en les utilisant… Ce talk est un 101 des implicits dans le scala.',
          tags: ['scala'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Monitoring the unknown, 1000*100 series a day',
          abstract:
            'How to monitor unknown third party code? One of the hardest challenges we face running Clever Cloud, apart from the impressive scale we face with hundreds of new applications per week, is the monitoring of unknown tech stacks. The first goal of rebuilding the monitoring platform was to accommodate the immutable infrastructure pattern that generates lots of ephemeral hosts every minute. The traditional approach is to focus on VMs or hosts, not applications. We needed to shift this into an approach of auto-discovery of metrics to monitor, allowing third party code to publish new items. This talk explains our journey in building Clever Cloud Metrics stack, heavily based on Warp10 (Kafka/Hadoop/Storm based) to deliver developer efficiency and trustability to our clients applications.',
          tags: [
            'warp10',
            'kafka',
            'hadoop',
            'observability',
            'monitoring',
            'devops',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Any other talk?',
          abstract:
            'Yes, sure, read here https://evman.clever-cloud.com/public/user/9',
          tags: [],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris', 'Nantes'],
      contacts: {
        twitter: 'waxzce',
        mail: 'quentin.adam@clever-cloud.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'http://www.waxzce.org',
        },
        {
          name: 'LinkedIn',
          url: 'http://fr.linkedin.com/in/waxzce',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/waxzce',
        },
      ],
    },
    {
      since: '2019-01-10',
      name: 'Maritza Abreo',
      bio:
        'UXDesigner #HeadofDesign @IpponTechnologies #Humanist in Tech #speaker #changemaker #sprintMaster. Adepte des méthodologies : LeanStartup, Design Sprint, Design Thinking',
      picture: 'img/baggers/photo_maritza_abreo.png',
      location: 'Paris, proche banlieue et La Défense',
      sessions: [
        {
          title: 'Atelier Lean Startup',
          abstract:
            "“Learn, Build, Mesure”. En session Lean, on identifie ses utilisateurs, on pense “customer benefit” et on va les chercher “vite”, si nécessaire dans la rue, pour tester les hypothèses les plus risquées. L'identification du succès est très importante dans cet exercice car c’est ce succès qui va piloter toutes les décisions qui seront prises pour le pivotement des produits.",
          tags: ['Lean startup', 'Agile', 'UX'],
          lang: ['fr'],
        },
        {
          title: 'Atelier Design Thinking',
          abstract:
            'Le Design thinking permet de concrétiser ce processus de co-création : il regroupe des collaborateurs pour mutuellement s’inspirer, définir des problèmes, générer des solutions, prototyper, et tester.',
          tags: ['Design thinking', 'UX'],
          lang: ['fr'],
        },
        {
          title: 'UX Strategy = Business Strategy + UX Design',
          abstract:
            'Comment positionner une Strategy prenant en compte les besoins utilisateurs et le besoins business ?',
          tags: ['UX'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'MaritzaAbreo',
        mail: 'maritzabreo@gmail.com',
      },
    },
    {
      since: '2019-02-05',
      name: 'Baptiste Lecocq',
      bio:
        'Consultant craft chez OCTO Nord. Je maîtrise principalement les langages et frameworks du monde Javascript. Je suis également impliqué dans un certain nombre de méthodes liées à l’agilité et au software craftmanship pour faire grandir les équipes que j’accompagne.',
      picture: 'https://static.tiste.io/me.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://tiste.io',
        },
        {
          name: 'Github',
          url: 'https://github.com/tiste',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: 'Le Scrum est une fenêtre (ou bien un mur)',
          abstract:
            "Après de longs mois d'application de \"Scrum by the book\" dans une feature team de 5 personnes, tout est très bien maîtrisé. Un peu trop ? Le cadre du Scrum s'est dressé comme un mur devant nous. Quelques semaines plus tard, nous avions assisté à une évolution des mentalités et des rituels. Nous sommes devenus une équipe plus Agile qu'hier, et en constante évolution. Vous voulez aussi utiliser Scrum comme une fenêtre vers l'Agilité ?",
          tags: ['Scrum', 'Culture', 'Agile', 'REX'],
          lang: ['fr'],
        },
        {
          title: 'git-101',
          abstract:
            'Présentation des concepts de base de git, et de son utilisation en local, en remote, et en panic.',
          tags: ['git'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'tiste',
        mail: 'baptiste.lecocq@gmail.com',
      },
    },
    {
      since: '2019-02-12',
      name: 'Hubert SABLONNIÈRE',
      bio: 'Développeur Web chez Clever Cloud',
      picture: 'https://www.hsablonniere.com/theme/img/hsablonniere.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://www.hsablonniere.com/',
        },
        {
          name: 'Github',
          url: 'https://github.com/hsablonniere',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: '#BackToBasics : Les cookies HTTP',
          abstract:
            'Les cookies HTTP sont partout ! Pas une journée sans qu’un site nous demande “d’accepter les cookies”. Rares sont les projets Web qui ne les utilisent pas et pourtant leur fonctionnement nous échappe trop souvent.\n\nOn confond les règles auxquelles ils sont soumis au sein des navigateurs. On fait des amalgames avec les sessions côté serveur. Ces petits trous dans le gigantesque éventail de connaissances du développeur moderne ont parfois des impacts non négligeables sur la sécurité de nos applications et sur la préservation de notre vie privée en tant qu’utilisateur du Web.\n\nAu menu de cette session, je vous propose de (re)découvrir les cookies HTTP par l’exemple et la pratique. Nous reviendrons sur leurs origines et nous verrons en détails leur fonctionnement. Enfin, nous aborderons les aspects les plus récents dans le domaine (SameSite, cookie prefix...). Ce talk sera plus généralement l’occasion de parler de sécurité, de tracking et de vie privée.',
          tags: ['Web', 'Sécurité', 'Cookies', 'Auth'],
          lang: ['fr'],
        },
        {
          title: "D'autres sujets ?",
          abstract:
            'Pourquoi pas, vous pouvez les retrouver ici et là :\n\nhttps://www.youtube.com/playlist?list=PLTBioAEvUEj0oFF2v71IPvu8iFBQYYNEt\nhttps://vimeo.com/album/4407825',
          tags: [],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Lille', 'Paris', 'Nantes'],
      contacts: {
        twitter: 'hsablonniere',
        mail: 'hubert.sablonniere+bbl@gmail.com',
      },
    },
    {
      since: '2019-02-27',
      name: 'Xavier MARIN',
      bio: 'Core développeur chez SenX.io',
      picture: 'https://blog.senx.io/wp-content/uploads/2018/10/IMG_8993.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://www.giwi.fr/',
        },
        {
          name: 'Web',
          url: 'https://www.warp10.io/',
        },
        {
          name: 'Github',
          url: 'https://github.com/giwi',
        },
      ],
      location: 'Brest',
      sessions: [
        {
          title: 'Warp 10 - advanced Time Series Platform',
          abstract:
            "Vous connaissiez les bases relationnelles, orientées document, voire même graphe. A chaque problème son outil. Warp 10 est une plateforme Open Source de stockage et un moteur d'analyse de Time Series ou la géolocalisation a une place de choix. Scalable à l'infini, ce plateforme offre WarpScript, un langage d'analyse de Time Series robuste et versatile. Je vous présenterai Warp 10 dans les grandes lignes et quelques cas d'usage illustrant la modélisation de Time series et l'analyse data flow.",
          tags: ['Time series', 'Big Data', 'Databases', 'Warp 10'],
          lang: ['fr'],
        },
        {
          title: "D'autres sujets ?",
          abstract:
            'Tout ce qui gravite autour de Warp 10 : https://blog.senx.io',
          tags: ['Time series', 'Big Data', 'Databases', 'Warp 10'],
          lang: ['fr'],
        },
      ],
      cities: ['Brest', 'Rennes', 'Lyon', 'Paris', 'Nantes'],
      contacts: {
        twitter: 'xavmarin',
        mail: 'marin.xavier+bbl@gmail.com',
      },
    },
    {
      since: '2019-03-21',
      name: 'Romain Prignon',
      bio:
        'Développeur Full Stack évoluant dans la sphère Lyonnaise depuis 6ans',
      picture:
        'http://www.gravatar.com/avatar/f38eb007b831b5300be45271ef29520e',
      websites: [
        {
          name: 'Web',
          url: 'https://romainprignon.github.io/resume/resume.flat.html',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/romain-prignon',
        },
      ],
      sessions: [
        {
          title: 'Améliorons ensemble votre Architecture Web',
          abstract:
            "Retrouvons nous le temps d'un déjeuner pour parler d'une de vos problématiques d'architecture. Nous pourrons échanger sur des problématiques en Symfony ou encore en react/nodejs. Je vous proposerais des solutions basées sur mes expériences",
          tags: ['Architecture', 'PHP', 'JavaScript', 'NodeJS', 'Symfony'],
          lang: ['fr'],
        },
        {
          title: 'Améliorons ensemble votre Infra',
          abstract:
            "Retrouvons nous le temps d'un déjeuner pour parler d'une de vos problématiques d'infrastructure. Si vous souhaitez passer sur une infrastructure de type conteneur. Ou encore, si vous rencontrez des problèmes avec votre infra docker en place. Je vous proposerais des solutions basées sur mes expériences",
          tags: ['Docker', 'Swarm'],
          lang: ['fr'],
        },
        {
          title:
            "Améliorons ensemble vos méthodologies d'ingénierie logicielle",
          abstract:
            "Retrouvons nous le temps d'un déjeuner pour parler de vos problématiques d'industrialisation et qualité. Si vous souhaitez monter en compétences sur un workflow git, mettre en place des tests automatisés, ou industrialisé vos déploiements, je vous proposerais des solutions basées sur mes expériences",
          tags: ['Qualité', 'Méthodes', 'Git', 'Industrialisation'],
          lang: ['fr'],
        },
      ],
      cities: ['Lyon'],
      contacts: {
        mail: 'pro.rprignon@gmail.com',
      },
    },
    {
      since: '2019-03-22',
      name: 'Lénaïc Couëllan',
      bio: 'Développeur web chez KNP Labs',
      picture:
        'https://fr.gravatar.com/userimage/47983780/a4c521b4d00829a0e63eb5642d0ccec6.png?size=200',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://fr.linkedin.com/in/lénaïc-couëllan-736861a4',
        },
      ],
      location: 'Caen',
      sessions: [
        {
          title: 'Le Behavior-driven development',
          abstract: 'Introduction au BDD avec Behat',
          tags: ['BDD', 'Test', 'TDD'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Caen'],
      contacts: {
        twitter: 'lcouellan',
        mail: 'lenaic.couellan@knplabs.com',
      },
    },
    {
      since: '2019-03-22',
      name: 'Gaël Reyrol',
      bio: 'Développeur Fullstack et DevOps chez Dans Ma Culotte',
      picture: 'https://avatars3.githubusercontent.com/u/498465?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://gaelreyrol.com',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gaelreyrol',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/gaelreyrol',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/zevran',
        },
      ],
      location: 'Caen',
      sessions: [
        {
          title: 'La culture DevOps',
          abstract:
            "Le DevOps est à la mode, c'est incontestable ! Mais comment s'y retrouver dans la diversité des technologies, des méthodes et surtout comment intégrer cette culture dans son équipe ? Je n' ai pas toutes les clés mais je peux apporter des réponses en tant que développeur DevOps.",
          tags: ['devops', 'ci', 'cd', 'team'],
          lang: ['fr'],
        },
        {
          title: 'Cloud & Cie',
          abstract:
            "Devant la multitude des offres disponibles, leurs spécificités, la difficulté de se projeter dans un univers qui évolue constamment, s'engager dans cette voie est certes une avancée mais est souvent vu comme une plongée dans l'inconnu. Mon expérience dans ce domaine peut vous apporter quelques lumières pour vous aidez à mieux comprendre les problématiques et aiguiller vos choix.",
          tags: [
            'devops',
            'sysadmin',
            'cloud',
            'aws',
            'googlecloud',
            'azure',
            'ovh',
            'scaleway',
            'clevercloud',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Caen'],
      contacts: {
        twitter: 'gaelreyrol',
        mail: 'me@gaelreyrol.com',
      },
    },
    {
      since: '2019-03-26',
      name: 'Christopher Maneu',
      bio: 'Ingénieur Cloud / Developer Advocate @ Microsoft R&D',
      picture:
        'http://gravatar.com/avatar/f6c06223e3759e7b9c93bdb58fc241f5?s=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/cmaneu',
        },
        {
          name: 'Blog',
          url: 'https://www.maneu.fr/',
        },
      ],
      location: 'Paris, Ile de France',
      sessions: [
        {
          title: 'Ecoutez vos utilisateurs, de 1 à 10 Millions',
          abstract:
            "We all know user-centered design is fundamental for a product's success. Among everything you should do, gathering feedback from your users is one of the crucial pieces to inform your product and technical decisions. But how to do it? At the end of the session, you'll have several techniques to collect that feedback, but also to integrate it into your development workflow. These techniques will come from my own experience at companies of various stages: from small shops (4-5 devs) to Deezer and now Azure engineering team. ",
          tags: ['DevOps', 'Agilité', 'Cloud'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Comment être un linuxien heureux sous Windows ?',
          abstract:
            "Quand on est linuxien, on l'aime notre distrib, on la bichonne, on va installer notre font préférée, et s'installer pleins de plugins oh my zsh. Ca c'est la belle vie !  Et puis un matin, on change de boulot, on arrive plein d'envie, jusqu'à entendre ces quelques mots qui changent tout : 'Voici ton PC, ah et on est tous sous Windows, c'est la politique de l'IT et c'est obligatoire'.  Heureusement que nous sommes en 2019 et que Microsoft a changé !  Voyons ensemble comment installer un vrai noyau linux dans Windows, se créer un environnement de travail cool avec Docker et Visual Studio Code et bénéficier du meilleur de Linux, sous Windows. ",
          tags: ['Linux', 'Windows', 'OpenSource'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Comment ne pas noyer son premier projet IoT?',
          abstract:
            "Je suis développeur, mais aussi plongeur. Tout ca me cause plein de tracas, mais aussi plein d'idées. Découvrez comment j'ai tenté de résoudre ces problèmes en créant des objets IoT connectés, sans fer à souder et sans me noyer :)",
          tags: ['IoT', 'Cloud', 'OpenSource', 'ML', 'Plongée'],
          lang: ['fr', 'en'],
        },
        {
          title: "Beaucoup d'autres sujets !",
          abstract:
            "Si vous cherchez un talk sur Azure orienté développeur, j'ai probablement quelque chose pour vous. N'hésitez pas à me contacter ",
          tags: ['DevOps', 'Agilité', 'Opensource', 'Azure', 'Microsoft'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris', 'Bordeaux', 'Toulouse', 'Marseille', 'Lyon'],
      contacts: {
        twitter: 'cmaneu',
        mail: 'hello@maneu.net',
      },
    },
    {
      since: '2019-04-16',
      name: 'Romain Laurent',
      bio:
        'Architecte Web, formateur JavaScript/Node/React, développeur full stack et nouveau software craftsman',
      picture:
        'https://secure.gravatar.com/avatar/5aaaecf4c870c833121f034df92b7586?s=400',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/caedes',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/romainlaurent/',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Introduction à React',
          abstract:
            'Créer des composants web simples rapidement, Créer une première Single Page App avec ReactJS, Appréhender CodeSandbox à travers un TP orienté e-commerce.',
          tags: ['React', 'JavaScript'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Redux',
          abstract:
            "Mise en place de Redux au sein d'une application React existante.",
          tags: ['React', 'Redux', 'JavaScript'],
          lang: ['fr'],
        },
        {
          title: 'Scalable Folder Structure in a React/Redux Application',
          abstract:
            'Je serai prêt à animer cette session à partir de juin 2019.',
          tags: ['React', 'JavaScript', 'Redux', 'DDD'],
          lang: ['fr'],
        },
        {
          title:
            'Comment animer un entretien technique front ? Comment obtenir le plein potentiel des développeurs ?',
          abstract:
            "Cette session tend à représenter l'ensemble des questions types lors d'un entretien d'embauche front React. Il reflète quelques années d'expérience dans ce domaine, avec ses succès et ses échecs.",
          tags: ['Développeur', 'Recrutement', 'Front', 'React', 'JavaScript'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'caedes',
      },
    },
    {
      since: '2019-04-16',
      name: 'Jean-Philippe Baconnais',
      bio: 'Consultant chez Zenika Nantes',
      picture: 'https://s.gravatar.com/avatar/5d2655822def2e889a17ff94e95309e3',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/jeanphibaconnais',
        },
        {
          name: 'GitLab',
          url: 'https://gitlab.com/jeanphi-baconnais',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            "[Quicky] - Faire de l'agilité dans les équipes agiles, c'est possible !",
          abstract:
            "L'agilité dans les équipes de développement ne laisse généralement pas beaucoup de temps à l'innovation. L'idée de ce talk est de vous présenter comment nous avons réussi dans notre équipe de dév à prendre du temps pour faire de l'innovation, ce qu'on y fait et quels en sont les bénéfices.",
          tags: ['Agilité', 'Dev', 'Innovation'],
          lang: ['fr'],
        },
        {
          title: '[Quicky] - Entamer une migration Kotlin dans une DSI Java',
          abstract:
            "Au sein de la DSI de Pôle emploi, les infrastructures black end sont depuis une dizaine d’années faites en Java et le choix des langages n’est pas (encore) déterminé par les équipes de développement. Kotlin utilisant la JVM, il est désormais possible d’intégrer du Kotlin dans des projets java. Dans ce REX je vous présenterai la manière dont nous avons pu entamer l'intégration du Kotlin dans nos composants black end Java, les problématiques rencontrées, mais aussi les opportunités qui s'ouvrent à nous pour la suite.",
          tags: ['Dev', 'Java', 'Kotlin'],
          lang: ['fr'],
        },
        {
          title: 'GitlabCI : Make CI/CD (with Gitlab CI) hype again ?',
          abstract:
            "Vous vous prenez la tête pour faire de l'intégration continue ? En plus ça tombe mal vos OPS ne sont pas dispos ? Gitlab met en place depuis quelques années des fonctionnalités permettant de gérer des pipelines de déploiement dans le même outil de gestion de sources. Nous ne travaillons pas pour Gitlab (nous n’avons aucune action promis ^^), et nous ne voulons pas remplacer les OPS mais nous allons vous montrer comment Gitlab Ci peut vous permettre de gérer vos pipelines directement dans votre gestionnaire de conf préféré sans rien installer et en quelques minutes. Nous vous montrerons aussi comment pousser un peu plus Gitlab Ci dans ses retranchements et en tirer le meilleur.",
          tags: ['Dev', 'CICD', 'Gitlab'],
          lang: ['fr'],
        },
        {
          title: 'Le développement dès le plus jeune âge',
          abstract:
            "Depuis ma sortie d'école, je fais du développement. Mais il existe beaucoup d'actions et d'évènements autour du développement pour les enfants notamment via le Devoxx4Kids. Je vous raconterai comment s'est déroulée une session à laquelle j'ai participé et vous découvrirez comment vos enfants pourront vous impressionner avec leurs premiers développements !",
          tags: ['Dev', 'kids'],
          lang: ['fr'],
        },
        {
          title: 'GitLab 💚 Kubernetes',
          abstract:
            'Déployez-vous sur Kubernetes des applications dont le code source est stocké sur GitLab ? Quel outil vous permet de faire ce déploiement ? Savez-vous que GitLab peut aussi le faire? GitLab est une plateforme comprenant beaucoup d’outils facilitant la démarche Devops. Cette palette va de la conception de votre application à sa livraison en production. L’intégration d’outils, tels que Kubernetes, permet aux équipes de déployer et de monitorer votre application sans pour autant quitter GitLab. Durant ce talk, nous vous présenterons comment cette intégration GitLab / Kubernetes est possible et la manière d’en profiter au maximum sans jamais se connecter à votre cluster.',
          tags: ['Dev', 'Kubernetes', 'DevOps', 'GitLab'],
          lang: ['fr'],
        },
        {
          title:
            'Qui a dit qu’il fallait avoir un JDK sur son poste pour développer une application Java ? Prenez votre IDE Cloud GitPod et le tour est joué 💪',
          abstract:
            'Quand on arrive sur des projets, la configuration de votre poste est une étape obligatoire : avoir la bonne version du JDK, de Maven ou de librairies. Le tout avec quelques Mo / Go qui s’accumulent sur votre disque dur. Avec l’arrivée des IDE Cloud tels que GitPod, la configuration nécessaire sur un projet est mutualisée sur le cloud et cette étape qui pouvait devenir une réelle galère n’est plus qu’un lointain souvenir ! Après vous avoir présenté en quelques mots GitPod, je vous ferai une démonstration de ce qui est possible pour un dev Java.',
          tags: ['Dev', 'GitPod'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'JPhi_Baconnais',
        mail: 'jeanphilippe.baconnais@gmail.com',
      },
    },
    {
      since: '2019-04-19',
      name: 'Sahbi Ktifa',
      bio:
        "Développeur FullStack & Lead Vue.js de la core team JHipster, j'adore découvrir de nouvelles choses, que ce soit des nouvelles technos ou bien de nouveaux pays ! Heureux papa de deux enfants, j'adore le sport, les jeux vidéos et bien manger !",
      picture: 'https://github.com/sahbi-ktifa.png',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/sahbi-ktifa',
        },
      ],
      location: 'Thoiry, près du zoo',
      sessions: [
        {
          title: "Du néant à l'espace, moins d'une heure pour aller en prod",
          abstract:
            "La NASA a besoin de nous, après le live youtube en continu depuis l'ISS, l'agence spatiale américaine veut proposer aux utilisateurs de situer exactement l'ISS en temps réel. Et cela doit être en production ce soir ! Nous avons donc moins d'une heure pour créér l'application et déployer dans le cloud. Etes-vous prêts ?",
          tags: ['JHipster', 'Dev', 'Vue.js', 'Heroku', 'Java'],
          lang: ['fr', 'en'],
        },
        {
          title:
            "[Quicky] - Angular, React, Vue.js, ne peut-il vraiment en rester qu'un ?",
          abstract:
            'Depuis plusieurs années, la guerre des frameworks front-end fait rage. Prenons ensemble des nouvelles du front en comparant ces 3 frameworks dans 3 applications similaires toutes générées avec JHipster (https://www.jhipster.tech/). Étudions les spécificités de chacun de ces frameworks JavaScript, les différents paradigmes qu’ils proposent, leurs outils de build et de tests. Profitons-en pour comparer leurs performances dans leur version optimisée pour la production.',
          tags: ['JHipster', 'Dev', 'Angular', 'React', 'Vue.js'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'SahbiKtifa',
        mail: 'sahbi.ktifa@gmail.com',
      },
    },
    {
      since: '2019-04-20',
      name: 'Fabien Grellier',
      bio:
        "Mise en place d'agilité à l'échelle et de pratiques DevOps en tant que CTO PagesJaunes.fr, puis chez Ouest-France",
      picture:
        'https://media.licdn.com/dms/image/C4D03AQFYw_-F2gSwlg/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=Doqc2flLGqxUlCWNzWEGpALQ7HGa2kBqTbiVu1Cqn2Q',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/fabiengrellier/',
        },
      ],
      location: 'Rennes',
      sessions: [
        {
          title: '10 Leviers pour rendre son SI Agile, durable et étendu',
          abstract:
            "Lorsqu’on cherche à industrialiser son système d’informations,  et réussir son passage à l'échelle, il est essentiel de le faire à 10 niveaux : Vision, Architecture, Organisation, Budget, Delivery, Recette, Documentation, Infrastructure, Pilotage, Management. En effet, chacun de ces niveaux a des impacts sur l’autre, et ne pas avoir une vision d’ensemble risque d’avoir des conséquences négatives pour la réussite de l’industrialisation.",
          tags: [
            "Agile à l'echelle",
            'DevOps',
            'TransformationDigitale',
            'Management',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes', 'Nantes'],
      contacts: {
        twitter: 'FabGrellier',
        mail: 'fabien.grellier@gmail.com',
      },
    },
    {
      since: '2019-05-25',
      name: 'Frédéric Combes',
      bio: 'CTO chez BOTdesign depuis Janvier 2022',
      picture: 'https://blog.ght1pc9kc.fr/img/bio-marthym.webp',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/combesfrederic/',
        },
      ],
      location: 'Toulouse',
      websites: [
        {
          name: 'ght1pc9kc',
          url: 'https://blog.ght1pc9kc.fr/',
        },
      ],
      sessions: [
        {
          title: 'Git c’est facile !',
          abstract:
            'Principal outil du développeur, git est souvent utilisé mais pas toujours maitrisé. Que se passe t’il derrière les commandes que l’on utilise tous les jours ? Nous verrons les concepts de base de Git qui permettrons de comprendre ce qu’il se passe sous le capot et les astuces qui optimiseront votre quotidien de développeur.',
          tags: ['git', 'devtools', 'version'],
          lang: ['fr'],
        },
        {
          title: 'Programmation Réactive avec Reactor',
          abstract:
            'Introduction à la programmation réactive au travers d’une des ses implémentations Java, Reactor',
          tags: ['spring', 'reactor', 'java', 'webflux'],
          lang: ['fr'],
        },
        {
          title: 'Architecture Hexagonale',
          abstract:
            'Très à la mode en ce moment, l’architecture hexagonale c’est quoi ? Quand et comment peut on l’utiliser ?',
          tags: ['architecture', 'hexagonale', 'java', 'spring'],
          lang: ['fr'],
        },
        {
          title: 'Rénovation d’un monolithe legacy - REX',
          abstract:
            'Retour d’expérience sur la transformation d’un monolithe legacy en une application moderne en architechture exagonale. Comment amorcer le virage, comment ne pas tout casser ? Comment découper en étapes cohérentes ? Je vous présenterais ce qui a été fait sur gros site de e-Commerce.',
          tags: ['architecture', 'hexagonale', 'java', 'spring', 'legacy'],
          lang: ['fr'],
        },
      ],
      cities: ['Toulouse'],
      contacts: {
        mail: 'fcombes.bbl@ght1pc9kc.fr',
      },
    },
    {
      since: '2019-06-04',
      name: 'Maxime Bréhin',
      bio:
        'Ingénieur R&D @ Delicious Insights, formateur Git, JS, React, Redux. J’essaye de vous donner de bonnes pratiques et des nouveautés techniques en Git et dév front.',
      picture:
        'https://secure.gravatar.com/avatar/42ee5cd1395bf807e2aced719a331cb2',
      websites: [
        {
          name: 'Web',
          url: 'https://delicious-insights.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/maxime-brehin-0061724/',
        },
      ],
      location: 'Paris',
      sessions: [
        {
          title: 'Git reset, le mal compris',
          abstract: 'Découvrez la puissance cachée de la commande `git reset`',
          tags: ['Git', 'VCS', 'Gestion de source', 'Process'],
          lang: ['fr'],
        },
        {
          title: 'Git hooks : automatisons la qualité à fond les ballons',
          abstract:
            'Trucs et astuces pour améliorer la qualité de vos commits avant et après le partage',
          tags: ['Git', 'Automatisation', 'Qualité', 'Workflow'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'mbrehin',
        mail: 'maxime@delicious-insights.com',
      },
    },
    {
      since: '2019-06-24',
      name: 'Renan Decamps',
      bio:
        "Développeur Front @ BearStudio -- Continuellement à la recherche du meilleur framework JavaScript, j'aime tester toutes les nouvelles technos du moment. je rend fonctionnel l'ensemble des maquettes produites afin de donner vie à vos projets les plus fous !",
      picture: 'https://gravatar.com/avatar/a9864e9b341567213872b78f3e7bc4c1',
      websites: [
        { name: 'Web', url: 'https://renandecamps.com' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/decampsrenan/' },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: 'React vs. Angular',
          abstract:
            'J’espère pouvoir à travers cette conf apporter un peu de lumière sur les pours et les contres de ces deux excellents outils pour construire vos applications web !',
          tags: ['javascript', 'react', 'angular', 'web', 'front'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen'],
      contacts: {
        twitter: 'decampsrenan',
        mail: 'renan@bearstudio.fr',
      },
    },
    {
      since: '2019-07-22',
      name: 'Nicolas Torion',
      bio: 'Développeur Full-Stack @ BearStudio',
      picture:
        'https://pbs.twimg.com/profile_images/1102599280513220608/Dgncv0EI_400x400.png',
      websites: [{ name: 'Twitter', url: 'https://twitter.com/NicoTotor' }],
      sessions: [
        {
          title:
            'REACT NATIVE : REACT POUR DÉVELOPPER DES APPLICATIONS NATIVES ANDROID ET IOS',
          abstract:
            "React s’est imposé depuis plusieurs années comme une référence dans le développement d’applications web dynamiques. Après le web, le projet Open-Source s’est étendu en 2015 au mobile avec React Native et avec pour objectif de simplifier le développement d’applications mobiles natives Android et iOS et de permettre aux développeurs d’avoir un unique projet fonctionnel sur les deux plateformes. Au BearStudio, nos clients ont souvent pour besoin de lancer une première version de leur produit sur le marché avec de fortes contraintes de temps et de budget. Dans ce contexte, React Native a rapidement trouvé sa place dans nos solutions technologiques pour répondre à ces besoins. Et nous avons ainsi pu développer 4 applications mobiles en l'espace d'une année avec cette technologie. Ce talk sera donc un retour d'expérience sur React Native et présentera tout ce qu'il faut connaitre pour démarrer un projet React Native :",
          tags: ['React Native', 'Android', 'iOS'],
          lang: ['fr'],
        },
      ],
      location: 'Rouen',
      cities: ['Rouen'],
      contacts: {
        twitter: 'NicoTotor',
        mail: 'nicolas.torion@bearstudio.fr',
      },
    },
    {
      since: '2019-07-22',
      name: 'Philippe Chevreul',
      bio:
        "UX/UI Designer - Développeur Front @ BearStudio -- Designer et Developpeur en devenir, j'aime concevoir et créer des interfaces fonctionnelles pour des utilisateurs !",
      picture:
        'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/17760227_1613741305320428_2908477432045572687_n.jpg?_nc_cat=103&_nc_oc=AQlZtWOA4xRvETEVbOo8IfB8Ty9WRgnBkCRuB4R6WfHKfxSQHiRid2pukY4b1aT_-X4&_nc_ht=scontent-cdt1-1.xx&oh=66f48ff05b9673e63ec4da68477dddc2&oe=5DABB05E',
      websites: [
        { name: 'Web', url: 'https://philippechevreul.fr' },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/philippe-chevreul-64302212b/',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: 'Le bon sens au service de vos utilisateurs',
          abstract:
            "Dans cette session, nous verrons comment mettre l'utilisateur au centre de votre solution, avec quelques règles de bon sens pour vos interfaces",
          tags: ['ergonomie', 'ux', 'ui', 'web'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen'],
      contacts: {
        twitter: 'philcvrl',
        mail: 'tic@bearstudio.fr',
      },
    },
    {
      since: '2015-03-10',
      name: 'Xavier Pigeon',
      bio:
        'Expert Méthode & Qualité (Freelance) | auteur de GearsOfTesting.org | développeur de TestAsYouThink.org',
      picture:
        'https://gravatar.com/userimage/29545108/d3a9e2ed3d93ef53aff440e053e0faed.jpeg',
      websites: [
        {
          name: 'AboutMe',
          url: 'https://xavierpigeon.com/',
        },
        {
          name: 'Web',
          url: 'https://chrysocode.io/',
        },
        {
          name: 'Web',
          url: 'https://gearsoftesting.org/',
        },
        {
          name: 'Web',
          url: 'https://testasyouthink.org/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/xavierpigeon',
        },
        {
          name: 'Blog',
          url: 'https://blog.xavierpigeon.com/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/xapn/',
        },
      ],
      location: 'Paris, remote',
      sessions: [
        {
          title: 'Une Lettre pour un Diamant',
          abstract:
            '(live coding / présentation) Résolution de kata avec Test-Driven Development. En savoir plus sur https://xavierpigeon.com/conferences.html.',
          tags: [
            'TDD',
            'Transformation Priority Premise',
            'Clean Code',
            'TDDflow',
            'Java',
            'JUnit',
            'TestAsYouThink Core',
            'Programmation orientée objet',
            'Développements Agiles',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Cartes Maîtresses de la Qualité : une stratégie contre le chaos logiciel',
          abstract:
            '(présentation) Une nouvelle approche systémique des tests pour améliorer la qualité des livrables par petites touches dès demain. En savoir plus sur https://xavierpigeon.com/conferences.html.',
          tags: [
            'Stratégie',
            'Tests',
            'Shift Left Testing',
            'Software Craftsmanship',
            'Agilité',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Diviser pour régner sur les tests : une classification pour les gouverner tous',
          abstract:
            "(présentation) Etat de l'art en stratégies de test agile à travers un nouveau référentiel typologique structuré et hiérarchisé. En savoir plus sur https://xavierpigeon.com/conferences.html.",
          tags: ['Stratégie', 'Tests', 'Typologie', 'Taxonomie', 'Agilité'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'XEngineer',
        mail: 'contact@chrysocode.io',
      },
    },
    {
      since: '2019-07-03',
      name: 'Samy Boucherit',
      bio: 'Blockchain Developer | Palo-IT',
      picture: 'https://i.imgur.com/rabw5jl.png',
      websites: [
        {
          name: 'Web',
          url: 'https://www.palo-it.com/',
        },
        {
          name: 'LinkedIn',
          url:
            'https://www.linkedin.com/in/samy-boucherit-884960157/?originalSubdomain=fr',
        },
      ],
      location: 'Paris + suburbs + Nantes  + Toulouse + Nancy + remote',
      sessions: [
        {
          title: 'Technical and practical initiation to Blockchain technology',
          abstract:
            "(en/fr) Discover how Blockchains work, what it's good for, and what you can't/shouldn't do with this new disruptive technology",
          tags: [
            'Blockchain',
            'Bitcoin',
            'Ethereum',
            'Solidity',
            'Remote',
            'Cryptocurrency',
            'Cryptomonnaies',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris', 'Nancy', 'Toulouse', 'Nantes'],
      contacts: {
        mail: 'sboucherit@palo-it.com',
      },
    },
    {
      since: '2019-07-03',
      name: 'Arthur Micoulet',
      bio: 'Head of Blockchain @ Palo IT',
      picture:
        'https://secure.gravatar.com/avatar/a75f71136c6a28d4e2342fd76141dbd5',
      websites: [
        {
          name: 'Web',
          url: 'https://www.palo-it.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/arthur-micoulet-16a11a35/',
        },
      ],
      location: 'Paris + suburbs + Nantes  + Toulouse + Nancy + remote',
      sessions: [
        {
          title: 'Introduction aux technologies Blockchains',
          abstract:
            'Introduction aux différents concepts de la technologie Blockchain et ses cas d’usages actuels et futurs. Le contenu peut être ajusté aux besoins du public (Finance, Industrie, Media…)',
          tags: [
            'Blockchain',
            'Bitcoin',
            'Ethereum',
            'Solidity',
            'Cryptocurrency',
            'Cryptomonnaies',
            'Remote',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris', 'Nancy', 'Toulouse', 'Nantes'],
      contacts: {
        mail: 'amicoulet@palo-it.com',
      },
    },
    {
      since: '2019-07-03',
      name: 'Leonard Lys',
      bio: 'Blockchain consultant and PhD candidate @Palo IT',
      picture: 'https://i.imgur.com/PjN9fEm.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://www.palo-it.com/',
        },
        {
          name: 'LinkedIn',
          url:
            'https://www.linkedin.com/in/leonard-lys-0033a486/?originalSubdomain=fr',
        },
      ],
      location: 'Paris + suburbs + Nantes  + Toulouse + Nancy + remote',
      sessions: [
        {
          title: 'Introduction aux technologies Blockchains',
          abstract:
            'Introduction aux différents concepts de la technologie Blockchain et ses cas d’usages actuels et futurs. Le contenu peut être ajusté aux besoins du public (Finance, Industrie, Media…)',
          tags: [
            'Blockchain',
            'Bitcoin',
            'Ethereum',
            'Solidity',
            'Remote',
            'Cryptocurrency',
            'Cryptomonnaies',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris', 'Nancy', 'Toulouse', 'Nantes'],
      contacts: {
        mail: 'llys@palo-it.com',
      },
    },
    {
      since: '2019-09-02',
      name: 'Nelson Dionisi',
      bio: 'Lead Developer @Mirakl',
      picture: 'https://avatars1.githubusercontent.com/u/12200878?s=460&v=4',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/ndionisi',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/nelson-dionisi-84a00472',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Montée de version sans interruption',
          abstract:
            "De plus en plus d'éditeurs logiciels fournissent leurs solutions en SaaS, et tendent à déployer leurs applications en Continuous Delivery. Pour cela, les contraintes business impliquent souvent de pouvoir déployer un nouvelle version applicative sans interruption de service. Les techniques classiques de Rolling Update permettent de réaliser une montée de version sans interruption de service assez facilement. La complexité intervient lorsque l'on gère une base de données relationnelle, et que l'on souhaite faire évoluer son schéma, le tout, toujours sans interruption de service. Depuis 3 ans, au sein de Mirakl, nous avons mis en place un système de montée de version sans interruption de service avec une base relationnelle. Ce talk est un retour d'expérience présentant les mécanismes que nous avons mis en place pour réaliser ces montées de version sans interruption. Il se concentre sur la partie applicative, et les problématiques engendrées par un tel process. Le but est d'être le plus concret possible, avec des exemples de 'la vraie vie', notamment quelques astuces pour réaliser ses migrations sans douleur avec des frameworks comme Hibernate ou jOOQ. Les exemples sont donnés en Java avec une base de données PostgreSQL, mais les principes s'appliquent à n'importe quel language et à la plupart des bases de données relationnelles.",
          tags: ['Deployment', 'Database', 'Continous Delivery', 'Java'],
          lang: ['fr'],
        },
        {
          title: 'Ce que les développeurs doivent savoir sur les index',
          abstract:
            "Les développeurs sont très souvent amenés à écrire des requêtes SQL pour communiquer avec des bases de données relationnelles. Pour les cas simples, connaître la syntaxe et le principe du SQL est amplement suffisant. Par contre, quand la volumétrie augmente et que les performances sont importantes, la question des index se pose rapidement. Bien souvent, on demande aux DBA de nous aider à indexer correctement nos tables car l'on considère que créer les index et comprendre leur fonctionnement est un travail de DBA. C'est faux ! Les développeurs connaissent le métiers des applications sur lesquelles ils travaillent, et ce sont eux les mieux placés pour comprendre quelles données doivent être indexées et comment. Ce talk présente les principes de base des index, leur fonctionnement, et comment les utiliser de manière efficace en fonction des cas d'utilisation. Il n'a pas pour but de rentrer dans un niveau de détail extrêmement pointu sur les mécanismes internes des SGBD, puisqu'il existe des DBA pour ça ! Par contre, il donne un tour d'horizon sur les notions importantes à avoir en tête en tant que développeur pour écrire des requêtes performantes et scalables. En plus de la théorie, le but est de montrer des exemples concrets d'utilisation. Pour ces exemples, nous utiliserons PostgreSQL, mais la grande majorité des concepts s'applique à la plupart des SGBD relationnels.",
          tags: ['Database', 'PostgreSQL', 'Performance'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux', 'Paris'],
      contacts: {
        mail: 'ndionisi@mirakl.com',
      },
    },
    {
      since: '2019-08-02',
      name: 'David Endico',
      bio:
        "UI/UX Designer, Graphiste et Développeur Front, David est passionné de conceptualisation et conception d'interfaces. Ses armes ? Le combo papier-crayon, Sketch et la Suite Adobe ainsi que toute la puissance des langages Front et leurs frameworks !",
      picture:
        'https://pbs.twimg.com/profile_images/696987947522990080/md67ySS9_400x400.png',
      websites: [
        {
          name: 'Website',
          url: 'https://www.bearstudio.fr/',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: "Les bases de l'ergonomie pour tous",
          abstract:
            'Vous voulez faire plaisir à vos utilisateurs ?\n' +
            "De la théorie de la Gestatl au rôle des performances, en passant par l'importance du feedback, venez (re)découvrir les règles essentielles de conception, d'amélioration et d'utilisation de vos interfaces web !",
          tags: ['UI', 'UX', 'design', 'ergonomie'],
          lang: ['fr'],
        },
        {
          title: 'Du bon usage d’une charte graphique',
          abstract:
            "Créer une charte graphique ? Rien de plus facile ! Un petit coup de Times New Roman, du rouge pour faire plaisir à ma femme... Au pire, le petit neveu connait Photoshop, non ? Malgré son apparente simplicité, créer une charte graphique ne s'improvise pas. Qu'est-ce qu'une bonne charte graphique ? De quoi est-elle composée et quels sont les pièges à éviter ? Autant de mystères que nous allons ensemble élucider, pour le bien de votre identité !",
          tags: ['branding', 'design', 'graphisme', 'charte', 'graphique'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen', 'Paris'],
      contacts: {
        twitter: 'davidendico',
        mail: 'david@bearstudio.fr',
      },
    },
    {
      since: '2019-07-16',
      name: 'Florian Kauder',
      bio:
        "Co-Fondateur et Directeur Technique de KBDev - Spécialiste du JS - J'adore les peluches",
      picture:
        'https://pbs.twimg.com/profile_images/1007642192293318658/vikrDvbZ_400x400.jpg',
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'aamulumi',
        mail: 'florian@kbdev.io',
      },
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/floriankauder/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/aamulumi',
        },
      ],
      sessions: [
        {
          title: "Je n'ai jamais rien compris à Redux, donc je vais le recoder",
          abstract:
            "Ola Voyageur·e !\n\nSi le temps vous le permet, je m'en vais vous conter les aventures du sieur Abramov et de sa monture Redux.\nEn ayant cotoyé l'écurie React, votre seule rencontre avec cet équidé ne put être qu'un dédale de mésaventures.\nMais soit, votre serviteur à l'esprit perverti s'est entêté à découvrir le secret de ces engrenages.\nPar la création, je m'en vais allumer la lanterne de vos pensées.\nMensonge, baliverne, tromperie, magie noire,\nRencontrez moi dans la salle du village,\nEt découvrez mes humbles secrets.",
          tags: [
            'Redux',
            'React.js',
            'Javascript',
            'Architecture',
            'Patterns',
            'Coding Live',
            'Front-end',
          ],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2018-01-01',
      name: 'Francois-Guillaume Ribreau',
      bio: 'Full Stack CTO, Startup Advisor, Consultant, Hacker, Maker',
      picture:
        'https://media.licdn.com/dms/image/C4D03AQFYw_-F2gSwlg/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=Doqc2flLGqxUlCWNzWEGpALQ7HGa2kBqTbiVu1Cqn2Q',
      websites: [
        {
          name: 'Website',
          url: 'https://fgribreau.com/',
        },
        {
          name: 'Book',
          url: 'https://getnobullshit.com/',
        },
        {
          name: 'Website',
          url: 'https://image-charts.com/',
        },
        {
          name: 'Website',
          url: 'https://redsmin.com/',
        },
        {
          name: 'Website',
          url: 'https://cloud-iam.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/francoisguillaumeribreau/',
        },
      ],
      location: 'Rennes',
      sessions: [
        {
          title:
            '⛳️ Votre API passe-t-elle les 70 points du contrôle technique ? ',
          abstract:
            'Nous savons tous développer une API mais avons-nous bien intégré toutes les problématiques?\n' +
            '\n' +
            "Son aspect organisationnel et humain, sa gouvernance, ses contraintes business et d'opérabilité (SLA, SLO, SLI), son release management, ses méthodes de requêtage, sa sécurité (ses performances, sa mise à l'échelle), ses différents types de test, sa documentation, son versioning (compatibilité, changelog), son monitoring — et bien plus encore — de cette API une fois en production ?\n" +
            '\n' +
            "Durant ce talk, c'est plus de 70 points d'attentions rarement évoqué que je vous propose d'aborder, à la lumière de retours d'expériences provenant de tech-leader comme Uber, Stripe, Facebook et Google mais aussi d'entreprise française de la petite startup à la PME.\n",
          tags: ['API', 'Scalability', 'Architecture', 'Security'],
          lang: ['fr'],
        },
        {
          title:
            'Choisir entre une API RPC, SOAP, REST, GraphQL? Et si le problème était ailleurs ?',
          abstract:
            "Pourquoi le choix entre RPC/SOAP/REST/GraphQL n'est peut-être qu'un sujet de surface qui cache un problème bien plus profond.",
          tags: ['History', 'APIs', 'REST API', 'SOAP', 'RPC', 'GraphQL'],
          lang: ['fr'],
        },
        {
          title:
            'Adieu micro-frontends et head-less CMS bonjour Block Management Platform',
          abstract:
            "Comment imaginer et implémenter une plateforme from-scratch au sein d'un groupe média ? Quelle philosophie ? Quels principes ? Quelle architecture choisir ? Comment assurer la scalabilité des développements interne comme externe ?",
          tags: ['Platform', 'Scalability', 'Organization'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes', 'Nantes'],
      contacts: {
        twitter: 'FGRibreau',
        mail: 'bblfr_data@fgribreau.com',
      },
    },
    {
      since: '2019-08-02',
      name: 'Rudy Baer',
      bio:
        "Responsable technique et stimulateur de projets expérimenté, Rudy a finalement choisi de vivre l'aventure d'entrepreneur. C'est en souhaitant accompagner les startupers et proposer davantage qu'un simple studio de développement qu'il a fondé le BearStudio.",
      picture:
        'https://www.bearstudio.fr/user/themes/bearstudio/dist/assets/app/img/rudy-baer-md.jpg',
      websites: [
        {
          name: 'Website',
          url: 'https://www.bearstudio.fr/',
        },
      ],
      location: 'Rouen',
      sessions: [
        {
          title: 'Les outils numériques de l’entrepreneur',
          abstract:
            "Est ce que vous vous êtes déjà posé la question de votre efficacité au quotidien ? Vous êtes en recherche d'outils pour discuter, envoyer, lister, programmer... Sur vos différents périphériques... simple à utiliser. Et bien ça existe, il sont accessible et avec une bonne pratique d'usage, nous allons vous présenter un panel pour répondre aux besoins pour gérer un projet, une équipe, une entreprise,....",
          tags: [
            'entreprendre',
            'entrepreneur',
            'startup',
            'startuper',
            'projet',
            'numérique',
          ],
          lang: ['fr'],
        },
        {
          title: 'Décrypter la technique pour lancer son projet numérique',
          abstract:
            "Vous souhaitez lancer votre startup ? Vous avez un projet numérique innovant ? Problème, vous n'avez aucune connaissance technique... ou pire, vous avez installé un site wordpress une fois dans votre vie et vous êtes persuadé que le développement informatique c'est simple et gratuit... Le but de cette conférence est de vulgariser les notions et le jargon à connaitre (dev front, api, back, cloud, bigdata...). Vous donner un aperçu réel du marché (salaire d'un developpeur, coût de production...) #nobullshit Enfin nous donnerons quelques préconisations pour éviter certains pièges.",
          tags: [
            'entreprendre',
            'entrepreneur',
            'startup',
            'startuper',
            'projet',
            'numérique',
          ],
          lang: ['fr'],
        },
        {
          title: "L'UX Designer, le meilleur ami du startuper !",
          abstract:
            " \"L'UX Design\" on en entend souvent parler sans forcément savoir ce que c'est ou en réduisant ça à l'aspect graphique... Après avoir défini quelques notions théoriques et les points importants à avoir en tête, je vous expliquerai dans cette conférence pourquoi l'UX Designer est un atout pour les CTO, les développeurs, le marketing, vos utilisateurs et donc pour votre business !",
          tags: ['UI', 'UX', 'startup', 'startuper', 'design', 'ergonomie'],
          lang: ['fr'],
        },
      ],
      cities: ['Rouen', 'Paris'],
      contacts: {
        twitter: 'rudybaer',
        mail: 'rudy@bearstudio.fr',
      },
    },
    {
      since: '2019-10-28',
      name: 'Ilan Zerath',
      bio: 'Craftsman - Full Stack Engineer @ beNext.',
      picture:
        'https://pbs.twimg.com/profile_images/1081844752084017152/sCswQBbg_400x400.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ilan-zerath-50752371/',
        },
      ],
      location: 'Paris et alentours',
      sessions: [
        {
          title:
            'Une grande architecture comporte de grandes responsabilités - Clean Architecture - VIPER (version iOS)',
          abstract:
            "Comme vous le savez, chaque développeur est une sorte de super-héros de son application. Il garantit qu'il est évolutif, facilement testable et maintenable. Nous allons passer ensemble par une approche d'architecture qui nous permet d'avoir une application robuste.",
          tags: ['clean architecture', 'solid', 'architecture', 'ios'],
          lang: ['fr'],
        },
        {
          title:
            'Jenkins Pipeline - Un ami qui vous veut du bien. (version iOS)',
          abstract:
            "C'est un gars bien. Il est toujours là pour aider. Il est peut-être en retrait dans ton équipe ou bien tu l'as aperçu chez d'autres, et tu aimerais le connaître davantage. Il a plusieurs casquettes mais il est hyper cool pour de la CI / CD.",
          tags: [
            'code',
            'qualité',
            'ci',
            'cd',
            'integration continue',
            'deploiement continue',
            'jenkins',
            'pipeline',
            'ios',
          ],
          lang: ['fr'],
        },
        {
          title: 'Les bonnes pratiques pour faire des tests unitaires',
          abstract:
            "Nous allons voir ensemble certaines principes de base tel que l'injection de dépendance, S.O.L.I.D... Afin de réaliser des tests unitaires",
          tags: [
            'code',
            'qualité',
            'solid',
            'tests',
            'tests unitaires',
            'injection de dépendance',
            'ios',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'IlanBenhamou',
      },
    },
    {
      since: '2019-10-31',
      name: 'Olivier Durgeau',
      bio:
        "Intégrateur Logiciel depuis plus de 10 ans chez des grands comptes, je cultive une passion pour tout le cycle de développement logiciel. Les outils de gestion de projets permettent de suivre et de documenter les évolutions du logiciel. J'ai découvert le Ruby On Rails en me passionnant pour un de ces outils et je développe maintenant mes projets avec ce framework.",
      picture:
        'https://www.gravatar.com/avatar/4847e688fa553955d1c0b8e7764a7be9?s=200',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/olivier-durgeau-04b141b4',
        },
      ],
      location: 'Le Mans, Paris',
      sessions: [
        {
          title:
            'Pourquoi on devrait tous avoir un outil de ticketing chez soi ?',
          abstract:
            "Les outils de ticketing sont très utilisés pour suivre le développement du logiciel, mais ils peuvent aussi être utilisés pour suivre n'importe quel type  de projet. Redmine est une application web de gestion de projet complète, configurable et extensible.  Il est le concurrent de Jira en opensource. Nous allons voir ensemble les principales fonctionnalités de Redmine et comment il peut être utilisé dans différents cas d'usages.",
          tags: ['redmine', 'ruby on rails'],
          lang: ['fr'],
        },
      ],
      cities: ['Le Mans', 'Paris'],
      contacts: {
        mail: 'olivier@odevsystem.com',
      },
    },
    {
      since: '2019-11-25',
      name: 'Clément Bichel',
      bio: "Coach agile indépendant | cultivateur d'esprits agiles",
      picture:
        'https://pbs.twimg.com/profile_images/1090679366374305793/60Izz_T2_400x400.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/clementbichel/',
        },
        {
          name: 'Web',
          url: 'https://www.clementbichel.fr',
        },
      ],
      location: 'Bordeaux',
      sessions: [
        {
          title: 'Agilité',
          abstract:
            "Qu'est-ce que l'agilité ? Quels sont ses valeurs, ses principes ? Quelles sont les méthodes agiles les plus connues ?",
          tags: [
            'Agilité',
            'Méthodes agiles',
            'Coach agile',
            'Scrum',
            'Kanban',
            'Management 3.0',
          ],
          lang: ['fr'],
        },
        {
          title: 'Delegation Poker',
          abstract:
            "Le Delegation Poker incite les équipes à discuter des leurs responsabilités et permet de clarifier certaines situations dans lesquelles la délégation est floue. De plus, ce jeu aide les responsables d'équipe à mieux connaitre leur l'équipe et à identifier les axes pour la faire grandir. Je vous propose d'essayer le jeu sur un cas concret après vous avoir expliqué son fonctionnement.",
          tags: [
            'Management 3.0',
            'Agilité',
            'Méthodes agiles',
            'Serious game',
            'Coach agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Moving Motivators',
          abstract:
            "Les Moving Motivators permettent d'engager des discussions sur ce qui motive réellement les personnes. Ce jeu présente dix axes de motivation intrinsèque qui sont à interpréter et à classer en fonction des ses préférences. Ces cartes classées et leur interprétation servent de base à une discussion qui permet de mieux connaitre les personnes, leurs attentes et leurs envies. Je vous propose d'essayer le jeu après vous avoir expliqué son fonctionnement.",
          tags: [
            'Management 3.0',
            'Agilité',
            'Méthodes agiles',
            'Serious game',
            'Coach agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Scrum',
          abstract:
            'Un cadre de travail (framework) au sein duquel les acteurs peuvent aborder des problèmes complexes et adaptatifs, en livrant de manière efficace et créative des produits de la plus grande valeur possible.',
          tags: ['Scrum', 'Agilité', 'Méthodes agiles', 'Coach agile'],
          lang: ['fr'],
        },
        {
          title: 'Liberating structures',
          abstract:
            'Les liberating structures permettent de modifier considérablement notre manière d’établir le dialogue et d’interagir à tous les niveaux des organisations.',
          tags: [
            'Liberating structures',
            'Agilité',
            'Méthodes agiles',
            'Coach agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Le framework SAFe',
          abstract:
            'Tout ce que vous avez toujours voulu savoir sur le framework que tout le monde aime détester.',
          tags: ['SAFe', 'Agilité', 'Méthodes agiles', 'Coach agile'],
          lang: ['fr'],
        },
        {
          title: 'Kanban',
          abstract:
            "Qu'est-ce que Kanban ? Quels sont les principes et les pratiques de la méthode Kanban pour l'organisation du travail ?",
          tags: ['Kanban', 'Agilité', 'Méthodes agiles', 'Coach agile'],
          lang: ['fr'],
        },
      ],
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'clementbichel',
        mail: 'clement.bichel@gmail.com',
      },
    },
    {
      since: '2019-11-25',
      name: 'Johan Bonneau',
      bio:
        'Facilitateur, Scrum Master, formateur, développeur... bref tout ce qui rime en -eur. Invitez-moi et discutons ! (actuellement chez Zenika)',
      picture: 'http://www.johanbonneau.com/assets/img/johan_bonneau.jpg',
      cities: ['Nantes'],
      contacts: {
        twitter: 'JohanBonneau',
        mail: 'johan@johanbonneau.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'http://www.johanbonneau.com/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/johanbonneau/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Zenigata/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Martine est manager agile.',
          abstract:
            "Où l'on parle de management plus ou moins moderne avec des retours d'expérience.",
          tags: ['Agile', 'Coaching', 'Management'],
          lang: ['fr'],
        },
        {
          title: "Le framework SAFe en moins d'une heure.",
          abstract:
            "Pour saisir l'essentiel du framework SAFe en mode conférence ou échanges.",
          tags: ['Agile', 'SAFe'],
          lang: ['fr'],
        },
        {
          title: 'La sociocratie.',
          abstract:
            'Explications de ce mode de gouvernance et mise en pratique de la prise de décision par consentement.',
          tags: ['Agile', 'Coaching', 'Management'],
          lang: ['fr'],
        },
        {
          title: "Kanban pour l'informatique.",
          abstract: 'Avec un vrai simulateur dedans !',
          tags: ['Agile', 'Kanban'],
          lang: ['fr'],
        },
        {
          title: 'Scrum',
          abstract: "Expliquer Scrum en moins d'une heure.",
          tags: ['Agile', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Le prêt, le fini, et le BBL.',
          abstract:
            'Parlons de définition du prêt, du fini, et du presque fini dans un contexte Scrum ou non.',
          tags: ['Agile', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: "L'estimation agile.",
          abstract:
            "Tour d'horizon des pratiques d'estimation relative. Explications et mise en situation.",
          tags: ['Agile', 'Scrum'],
          lang: ['fr'],
        },
        {
          title: 'Introduction à Git.',
          abstract: "Il n'est jamais trop tard pour s'y mettre.",
          tags: ['Git'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2019-12-23',
      name: 'François Delbrayelle',
      bio:
        'Développeur / Tech Lead chez Ippon Technologies. Contributeur à JHipster. Orienté surtout back (Spring, Quarkus, Kafka, ...) mais également front (Angular, Vue.js notamment). Formateur et facilitateur !',
      picture: 'https://www.francois-delbrayelle.fr/images/fdelbrayelle.jpg',
      cities: ['Lille'],
      contacts: {
        twitter: 'fdelbrayelle',
        mail: 'fdelbrayelle@ippon.fr',
      },
      websites: [
        {
          name: 'Web',
          url: 'http://www.francois-delbrayelle.fr/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/fdelbrayelle/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/fdelbrayelle',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: "L'après Java 8, les nouveautés depuis Java 9",
          abstract:
            "Les nouveautés après Java 8 : qu'apportent les dernières versions 9, 10, 11, 12... ?",
          tags: ['Développement', 'Java'],
          lang: ['fr'],
        },
        {
          title: "JHipster, générateur d'applications web modernes",
          abstract:
            'Utiliser JHipster pour générer des applications monolithiques ou micro-services',
          tags: ['Java', 'JHipster', 'Front', 'Back', 'Microservices'],
          lang: ['fr'],
        },
        {
          title: 'Vue.js, une alternative à Angular et React',
          abstract: 'Découvrir Vue.js en alternative à Angular et React',
          tags: ['Front', 'Vue', 'JavaScript', 'TypeScript'],
          lang: ['fr'],
        },
        {
          title: 'Kubernetes, pour orchestrer nos containers',
          abstract:
            'Découvrir Kubernetes et son utilité pour gérer les containers',
          tags: ['Kubernetes', 'Docker', 'DevOps'],
          lang: ['fr'],
        },
        {
          title: "Micronaut et Quarkus : l'avenir du monde Java ?",
          abstract:
            "En quoi Micronaut et Quarkus représentent potentiellement l'avenir de Java",
          tags: ['Java', 'Micronaut', 'Quarkus'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2019-01-03',
      name: 'Mathieu Laude',
      bio:
        "Responsable outils et usine logicielle (CI/CD) chez Kosmos. Curieux, passionné, fainéant (donc j'automatise tout !). Développeur Java/Spring dans l'âme !",
      picture:
        'https://pbs.twimg.com/profile_images/1213079443205500928/MJw5Wxr7_400x400.jpg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mathieulaude/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Jenkinsfile : WTF ?',
          abstract:
            "Plongée dans les concepts et notions cachées derrière le Jenkinsfile, ou comment faire du Jenkins as Code sans passer par l'usine à clic et l'enfer des plugins !",
          tags: [
            'Pipeline',
            'Jenkins',
            'Jenkinsfile',
            'Git',
            'Docker',
            'DevOps',
            'Automation',
            'Continous',
            'Deployment',
            'Integration',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'mathieulaude+bbl@gmail.com',
      },
    },
    {
      since: '2019-01-30',
      name: 'Yohan Lasorsa',
      bio:
        'Fullstack Developer & Cloud Advocate @ Microsoft.<br>Code artist, OSS maintainer, psytrance producer, wake&snow.board lover.<br>#opensource #javascript #mobile #ux #cloud',
      picture: 'https://avatars2.githubusercontent.com/u/593151?s=460&v=4',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/sinedied/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/yohanlasorsa',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/sinedied',
        },
        {
          name: 'Web',
          url: 'https://dev.to/sinedied/',
        },
      ],
      location: 'Grenoble',
      sessions: [
        {
          title: 'Les Progressive Web Apps, au dela du buzzword',
          abstract:
            'Les PWA c’est cool, tout le monde en parle, mais en fait c’est quoi vraiment? Pourquoi ca devrait m’intéresser? Comment ca marche? A travers ce talk et beaucoup de questions, découvrons les grands principes d’une PWA d’un point de vue technique et philosophique, et son utilité dans la construction d’un Web plus juste et équitable.',
          tags: [
            'PWA',
            'Mobile',
            'JavaScript',
            'Performance',
            'Service Worker',
            'Developpement',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: "La révolution dans vos apps, c'est la gestion de l'état",
          abstract:
            "Une révolution (presque) silencieuse est en cours dans le domaine des webapps, et pourtant nous sommes nombreux à passer à coté. Redux, VueX, NgRx, ces noms vous disent surement quelque chose? Découvrez pourquoi changer la gestion de l'état dans vos app va révolutionner votre manière de développer!",
          tags: [
            'Frontend',
            'Redux',
            'State management',
            'JavaScript',
            'Developpement',
          ],
          lang: ['fr', 'en'],
        },
        {
          title:
            'Un environnement de dev propre et qui marche à tous les coups',
          abstract:
            "Vous n'avez jamais rêvé de pouvoir cloisonner parfaitement l'environnement de chaque projet? Et de pouvoir le partager facilement, pour ne rien avoir à faire lorsqu'un nouvel arrivant débarque sur votre projet? C'est maintenant possible avec l'extension Remote Development de Visual Studio Code! Venez découvrir comment tout ca fonctionne en live, et tout ca en gardant ma machine propre :)",
          tags: [
            'VS Code',
            'Outillage',
            'Docker',
            'Onboarding',
            'Developpement',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Devenez un héros des GitHub Actions',
          abstract:
            "GitHub Actions, c'est le nouveau système de worflow intégré à GitHub pour automatiser tous vos projets, CI/CD mais pas que! Et en plus, ca ne coute rien pour les projets open source, c'est le moment de s'y mettre non? Plutot qu'un long discours, rien ne vaut une belle démo live pour découvrir tout cela!",
          tags: ['CI/CD', 'GitHub', 'Automatisation', 'Open source'],
          lang: ['fr', 'en'],
        },
        {
          title: "La gestion de l'état pour Angular avec NGXS",
          abstract:
            "Comment gérer efficacement l'état de son Application Angular? Chaque framework à aujourd'hui sa librairie de référence pour la gestion de l'état: Redux pour React, VueX pour VueJS... et pour Angular? NGRX? Non, on doit pouvoir faire mieux quand même? Découvrez NGXS, la meilleure manière de gérer son état avec Angular sans se faire des noeuds au cerveau!",
          tags: [
            'Angular',
            'State Management',
            'NGXS',
            'Frontend',
            'Architecture',
            'Developpement',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: "Oups, j'ai mis du TypeScript dans mon appli Node.js!",
          abstract:
            'Et si on faisait une petite appli Node.js, from scratch... en TypeScript? A travers un live coding, nous allons voir ensemble que rajouter du TypeScript à une application Node.js se fait avec très peu de contraintes, avec pour bénéfices tout ce qui découle de TypeScript...',
          tags: ['Node.js', 'TypeScript', 'Live coding', 'Developpement'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Comment devenir un contributeur Open Source ?',
          abstract:
            "Nous utilisons des produits Open Source au quotidien, parfois même sans le savoir. Nos jobs actuels, parfois même nos business entiers s'appuient sur du code Open Source. En tant que développeurs et utilisateurs, c'est notre responsabilité de faire vivre ces projets indispensables que nous consommons en permanence, mais comment ? Venez plonger au cœur de cet écosystème et découvrir que ce n'est pas aussi compliqué qu'on l'imagine de contribuer et avoir un impact conséquent sur vos projets favoris. C'est aussi dans votre meilleur intérêt de devenir contributeur, pas seulement parce qu'on adhère à la philosophie mais parce que c'est aussi un excellent moyen de booster votre carrière !",
          tags: ['Open source', 'Communauté', 'Soft skills', 'Developpement'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Découvrez NestJS, le framework Node.js qui monte!',
          abstract:
            "Encore un nouveau framework JS, vous n'en avez pas marre sérieux ? Ah on me dit dans l'oreillette que NestJS s'appuie sur tout ce qui a dejà fait ses preuves dans la communauté JS, et a repackagé le tout avec une API d'une efficacité redoutable : TypeScript, Express ou Fastify, Open API, microservices, GraphQL, CLI... Une fois que vous l'aurez essayé, vous ne voudrez plus vous en passer !!",
          tags: [
            'NestJS',
            'Node.js',
            'Backend',
            'Framework',
            'TypeScript',
            'Developpement',
          ],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Grenoble'],
      contacts: {
        twitter: 'sinedied',
        mail: 'yohan.lasorsa+bbl@gmail.com',
      },
    },
    {
      since: '2020-01-31',
      name: 'Maxime BLANC',
      bio:
        "Avec 8 ans d'expérience de développement à mon actif, j'ai eu l'opportunité de me lancer en tant que Scrum Master. J'ai aujourd'hui fait du sujet de l'agilité une passion, et j'ai à coeur de partager celle-ci.",
      picture:
        'https://media-exp1.licdn.com/dms/image/C5603AQFljwUdK0NKDA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=DI5rQUFX5i9ai3hu_NeEKzLdLE90sEc06oLT8gQRECE',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/maxime-blanc/',
        },
      ],
      location: 'Montpellier et sa périphérie',
      sessions: [
        {
          title: "Découvrir Scrum et l'agilité, de manière ludique.",
          abstract:
            "Scrum, Agilité, Kanban, ces mots sont encore abstraits pour vous aujourd'hui ? Je vous invite au travers d'ateliers, à découvrir ce qui se cache derrière tout cela, et pourquoi cela pourrait vous permettre d'améliorer votre quotidien. Tout le monde est invité, cela ne s'adresse pas qu'aux seuls développeurs. L'agilité s'adresse de manière globale à l'entreprise. Alors, commercial, chef de projet, directeur technique, technicien support, ..., cette session est ouverte à tous.",
          tags: ['scrum', 'agilite', 'kanban'],
          lang: ['fr'],
        },
      ],
      cities: ['Montpellier'],
      contacts: {
        mail: 'b.maxime.c@gmail.com',
      },
    },
    {
      since: '2020-02-24',
      name: 'Mael MOREL',
      bio:
        "Mael a développé pendant 7 ans des logiciels dans la sécurité, le Cloud, la banque ou des Start-ups, ce qui l’a convaincu que la réussite d'un produit dépend pour beaucoup de l'organisation du travail. Il accompagne donc depuis 4 ans les équipes techniques IT, managériales et métier de grands groupes tels qu’ING ou Enedis avec la culture Agile. Facilitateur, Product Owner et formateur, il pratique notamment Kanban, le Lean Startup, Scrum, l’agilité à l’échelle ou la gestion de conflits.",
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFUf-SeETCowg/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=Md-bkYfu-XmV79DPaI3uBZVM3SsSaPZZFGb52sS-ZS8',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mael-morel-a08b3882/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            'La bataille des 3 armées, ou comment faire les 3/4 avec la moitié',
          abstract:
            "On vous dit que l'agilité c'est très bien mais qu'il faut respecter rigoureusement le planning et que tout est urgent ? Pour répondre, rien de tel qu'une démonstration chiffrée! Dans la nôtre il y aura des armures, des batailles et des statistiques. Préparez-vous, la bataille des trois armées va commencer...",
          tags: ['agilite', 'scrum', 'produit'],
          lang: ['fr'],
        },
        {
          title: 'Kanban!',
          abstract:
            "Jouer sur le flux de travail est souvent contre intuitif. Que se passe-t-il lorsqu'on ajoute un testeur ou qu'on limite le métier à 2 demandes par semaine? Testons quelques scénarios grace à un simulateur, et voyons sur quels mécanismes jouer pour réduire les périodes de crunch, améliorer le Time To Market et démontrer que rajouter 3 développeurs ne fera pas nécessairement sortir une feature plus vite!",
          tags: ['kanban'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'mael.morel@zenika.com',
      },
    },
    {
      since: '2020-02-26',
      name: 'Thomas Tourlourat',
      bio: 'Lead-dev chez Copines de Voyage, ex @Konbini, ex @Freelance',
      picture:
        'https://pbs.twimg.com/profile_images/714783052052971520/WaNkikC9_400x400.jpg',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/armetiz',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/armetiz',
        },
        {
          name: 'Hopwork',
          url: 'https://www.malt.fr/profile/thomastourlourat',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/tourlourat/',
        },
      ],
      location: "Les Sables-d'Olonne",
      sessions: [
        {
          title: 'Découvrir EventSourcing / CQRS',
          abstract:
            'Quels sont les enjeux de cette architecture: les raisons, les problématiques et les avantages.',
          tags: ['CQRS', 'EventSourcing', 'Architecture', 'Cloud'],
          lang: ['fr'],
        },
      ],
      cities: ["Les Sables-d'Olonne", 'La Roche-sur-Yon'],
      contacts: {
        twitter: 'armetiz',
        mail: 'thomas@tourlourat.com',
      },
    },
    {
      since: '2020-06-25',
      name: 'Victor Sabatier',
      bio: 'Développeur web et mobile indépendant. Indie Hacker.',
      picture:
        'https://digital-grenoble.com/wp-content/uploads/2017/03/Victor-Sabatier-1.jpg',
      websites: [
        {
          name: 'Web',
          url: 'https://reactivic.com',
        },
      ],
      location: 'Grenoble',
      sessions: [
        {
          title: 'De git à la blockchain',
          abstract:
            'Mon talk préféré. J essaye de faire des liens entre Git et la blockchain, ce qui permet à un public de développeurs de découvrir la blokchain à travers un outil utilisé au quotidien.',
          tags: ['git', 'blockchain', 'fun'],
          lang: ['fr'],
        },
      ],
      cities: ['Grenoble'],
      contacts: {
        mail: 'victor@reactivic.com',
      },
    },
    {
      since: '2020-07-20',
      name: 'Anne-Lise Agoyé',
      bio: 'Facilitatrice & formatrice Agile',
      picture: 'http://1.gravatar.com/avatar/ea9ebb2e0f991a8656aeabed7b341aa8',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/anne-lise-agoye-9746a833/',
        },
      ],
      location: 'Nantes, Vendée',
      sessions: [
        {
          title: 'Atelier découverte LEGO® SERIOUS PLAY®',
          abstract:
            "Au cours d'un atelier d'une heure, je vous propose de découvrir la méthode LEGO® SERIOUS PLAY®. Cette méthode stimule la réflexion, la communication et la collaboration des équipes par la manipulation de briques LEGO®",
          tags: [
            'LEGO® SERIOUS PLAY®',
            'Intelligence collective',
            'Serious Game',
          ],
          lang: ['fr'],
        },
        {
          title: 'Atelier découverte Liberating Structures!',
          abstract:
            'Je vous propose de découvrir 3 formats pour animer différemment vos réunions. Collaboration, engagement, créativité, 100% des participants seront acteurs de vos réunions.',
          tags: ['Intelligence collective', 'Agilité'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes', 'La Roche-sur-Yon'],
      contacts: {
        mail: 'alagoye@gmail.com',
        twitter: 'alagoye',
      },
    },
    {
      since: '2020-09-04',
      name: 'Delphine Raymond',
      bio:
        "Product Owner & Product Manager depuis plus de 7 ans, je travaille chez Lucca et j'ai créé le meetup Product People Nantes, devenu LPCx Nantes, une communauté de PO/PM pour les amoureux de la création de produits numériques à Nantes.",
      picture:
        'https://secure.gravatar.com/avatar/ddbeaab3b87a434071ddc6bfb5af89a8?size=256',
      websites: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/Delphine_Ray',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/delphineraymond/',
        },
        {
          name: 'Web',
          url: 'https://www.lucca.fr/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title: 'Boîte à outils du Product Owner / Product Manager',
          abstract:
            'Vous souhaitez découvrir la boîte à outils du PO / PM pour construire la vision de votre produit, sa roadmap, identifier vos personas ou les jobs-to-be-done, définir le MVP de votre produit, créer et prioriser un backlog de fonctionnalités, définir une story map, rédiger une user story ou une job story, les estimer...',
          tags: ['Product Owner', 'Product Manager', 'Agile'],
          lang: ['fr'],
        },
        {
          title: 'Innovation games',
          abstract:
            "Vous souhaitez découvrir des innovation games ou en animer pour imaginer un produit avec Product Box, prioriser ses fonctionnalités avec Buy a feature ou partager une vision sur les facteurs clés du succès et les causes potentielles d'échec avec Speed boat.",
          tags: ['Innovation game', 'Facilitation', 'Serious game', 'Agile'],
          lang: ['fr'],
        },
        {
          title: 'Formats de rétrospectives',
          abstract:
            "Vous souhaitez mettre en place des rétrospectives ou les dynamiser en changeant leur format, découvrez différents formats de rétrospectives comme le Speed Boat ou la Timeline pour des rétrospectives sur une longue période, la rétrospective Tweet my sprint ou les plus classiques comme le 4L, l'étoile de mer, le start/stop/continue ou même en inventer selon vos besoins.",
          tags: [
            'Innovation game',
            'Facilitation',
            'Serious game',
            'Scrum',
            'Agile',
          ],
          lang: ['fr'],
        },
        {
          title: 'Event Storming',
          abstract:
            "Vous souhaitez découvrir un atelier d'Event Storming ou en animer un pour partager sur le métier de votre produit ou d'une nouvelle fonctionnalité en équipe, afin d'avoir tous la même compréhension du métier et parler le même lanagage.",
          tags: ['Event Storming', 'Workshop', 'Facilitation', 'Agile', 'DDD'],
          lang: ['fr'],
        },
        {
          title: 'Créer une communauté ou un meetup',
          abstract:
            "Vous souhaitez crééer une communauté ou un meetup, vous ne savez pas par quoi commencer, comment le lancer, comment l'animer... Je vous raconterai comment j'ai créé le meetup Product People Nantes / LPCx Nantes.",
          tags: ['Communauté', 'Meetup', "Retour d'expérience"],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'Delphine_Ray',
        mail: 'delphine.raymond@gmail.com',
      },
    },
    {
      since: '2021-02-05',
      name: 'Natacha Fourmy-Mangin',
      bio: 'Scrum Master et Ambassadrice Younup',
      picture:
        'https://drive.google.com/file/d/1Ha_f2du1DRuZpNbxkBKFeQjjLf0m0lBU/view?usp=sharing',
      cities: ['Nantes'],
      contacts: {
        twitter: 'nfourmymangin',
        mail: 'fourmy.natacha@gmail.com',
      },
      sessions: [
        {
          title: 'Cauchemar en Agile',
          abstract:
            'Voyagez avec moi au sein d’une équipe Scrum. Parcourons ensemble les pratiques utilisées par celle-ci en pensant appliquer correctement Scrum. Et finalement, revoyons les bases de Scrum pour l’aider à utiliser au mieux cette méthode.',
          tags: ['Scrum', 'Agilité', 'Agile'],
          lang: ['fr'],
        },
      ],
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/natacha-fourmy-mangin/',
        },
      ],
    },
    {
      since: '2021-03-16',
      name: 'Fabien Hiegel',
      bio: 'Juste un Dev',
      picture:
        'https://www.gravatar.com/avatar/41dcae3b47a5744a926bb22d17f6804a?s=200',
      cities: ['Nantes'],
      contacts: {
        twitter: 'fhiegel',
        mail: 'fabien.hiegel@gmail.com',
      },
      sessions: [
        {
          title: 'Tests unitaires ? Pourquoi faire ?',
          abstract:
            "Venez (re)découvrir l'intérêt des tests unitaires ! Parfois, les tests unitaires sont mis de côtés pour des raisons de temps et/ou de budget. Lors de cet atelier, nous allons construire une application, dans deux contextes différents. Le langage utilisé : 2 jeux de 52 cartes à jouer!",
          tags: ['Serious game', 'Test', '🌶'],
          lang: ['fr'],
        },
        {
          title: 'Pair Programming : Pair-Practice sans coder',
          abstract:
            "Sur le principe, je sais ce qu'est le Pair-Programming, et j'essaie d'en faire. Mais comment aller plus loin ? Cet exercice donne une idée de ce qu'est le Pair-Programming, et pose des question pour prendre du recul sur notre manière de pratiquer.",
          tags: ['Serious game', 'Pair-Programming', '🌶'],
          lang: ['fr'],
        },
        {
          title:
            'Xtrem Reading - Venez lire autrement, en cultivant votre intelligence collective.',
          abstract:
            'Vous avez des livres qui prennent la poussière ? Vous avez vraiment envie de les lire mais vous ne trouvez pas le temps ? Cet atelier est fait pour vous ! Venez apprendre à lire en groupe et explorez 2 livres en 1 heure.',
          tags: ['Atelier', 'Intelligence collective', '🌶'],
          lang: ['fr'],
        },
        {
          title:
            'Xtrem Tech Watch - Explorez ensemble les sujets qui vous animent.',
          abstract:
            "Vous cherchez à organiser votre veille d'équipe ? Venez découvrir et de dégrossir les sujets de veille qui motivent votre équipe.",
          tags: ['Atelier', 'Intelligence collective', 'Veille', '🌶'],
          lang: ['fr'],
        },
      ],
      websites: [
        {
          name: 'Web',
          url: 'https://fhiegel.github.io',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/fhiegel',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/fabien-hiegel-874416b5',
        },
      ],
    },
    {
      since: '2021-04-14',
      name: 'Geoffrey Graveaud',
      bio: 'Consultant Devops, passionné du domaine informatique',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQE66hlp0YItFg/profile-displayphoto-shrink_800_800/0/1572017655686?e=1623888000&v=beta&t=oazW2XaSCVotoq1aHIKQsqR_9y3EX9T-yn1ArKJAkd0',
      cities: ['Bordeaux'],
      contacts: {
        twitter: 'GraveaudG',
        mail: 'geoffrey.graveaud@zenika.com',
      },
      sessions: [
        {
          title: 'A la découverte d Accelerate (La science derrière DevOps)',
          abstract:
            "Comment être plus productif et qualitatif ou bien rentable et stable ? Faire des choix stratégiques pour son SI et son business n'est jamais évident dans un marché fortement concurrentiel. Il faut pouvoir définir la meilleure façon d'utiliser l'informatique au service de l'entreprise. Accelerate (la science derrière DevOps) est une recherche de 4 ans qui a défini les pratiques informatiques pour améliorer sa performance organisationnelle: productivité, rentabilité et être plus concurrentiel sur le marché. La force d'Accelerate est que c'est applicable à toutes les entreprises (note inscrite dans la recherche) et aide aux choix stratégiques dans son entreprise. A travers cet atelier, vous comprendrez l'idée générale d'accelerate, quelques mécanismes et les résultats qu'Accelerate prédit.",
          tags: ['Workshop', 'DevOps', 'Lean', 'Agilité'],
          lang: ['fr'],
        },
      ],
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/geoffrey-graveaud-033319b0/',
        },
      ],
    },
    {
      since: '2021-06-25',
      name: 'Alexandre Dergham',
      bio: 'Développeur fullstack @ Ineat',
      picture:
        'https://media-exp1.licdn.com/dms/image/C5603AQHF_GNkl4GMvQ/profile-displayphoto-shrink_400_400/0/1517619627364?e=1639008000&v=beta&t=T7rfgooS1Yo923cZ_Tc2MxtxzHaTIuw45OtNdw4ziIA',
      cities: ['Lille'],
      location: 'Lille, remote',
      contacts: {
        twitter: 'alxdergham',
        mail: 'adergham@ineat.fr',
      },
      sessions: [
        {
          title: "Evolution technique d'un projet de jeu vidéo",
          abstract:
            "Comment concilier ma veille techno et ma passion du jeu vidéo? Au cours de ce BBL je vais vous parler d'un jeu vidéo que j'ai développé ces dernières années et qui me sert de support à ma veille techno. Venez découvrir les choix techniques que j'ai faits et leurs évolutions pour passer d’un legacy onPremise vers un déploiement Cloud. Ce talk est destiné à tous ceux qui sont intéressés par les technologies web, l'architecture et la conception d'un projet de jeu vidéo.",
          tags: [
            'Cloud',
            'Angular',
            'React',
            'VueJS',
            'GCP',
            'Google',
            'Google CLoud',
            'Firebase',
            'Quarkus',
            'Jeu vidéo',
          ],
          lang: ['fr'],
        },
        {
          title:
            "Quand Scala rencontre Google Cloud Run et Firestore. REX d'une amitié qui fonctionne.",
          abstract:
            "Laissez-moi vous présenter un retour d'expérience sur l'intégration d'une application Scala dans Google Cloud Run avec un accès à Firestore. Vous y verrez les facilités mais aussi les pièges qui peuvent se cacher dans ce chantier ainsi que mon ressenti sur cette combinaison de technologies. Si vous avez besoin de deployer une API sous Google Cloud Platform avec des accès à Firebase et si ce sujet vous fait poser des questions existentielles, ce talk est fait pour vous.",
          tags: [
            'Cloud',
            'GCP',
            'Cloud Run',
            'Scala',
            'Firebase',
            'Firestore',
            'REX',
          ],
          lang: ['fr'],
        },
      ],
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/alexandredergham',
        },
      ],
    },
    {
      since: '2022-04-28',
      name: 'Vincent Dubois',
      bio:
        'Développeur web depuis plus de 20 ans, je travaille actuellement chez Primobox, un éditeur de logiciels SaaS de dématérialisation des processus RH. Mes domaines de prédilection sont le Domain Driven Design et les architectures logicielles.',
      picture:
        'https://fr.gravatar.com/userimage/7083739/e289e7a4313d70ab7d1a3ccaaf785551.png?size=200',
      cities: ['Bordeaux'],
      location: 'Bordeaux, remote',
      contacts: {
        twitter: 'vdubois',
        mail: 'v.dubois@primobox.com',
      },
      sessions: [
        {
          title: "Qu'est ce que le Domain-Driven Design ?",
          abstract:
            "Vous avez déjà entendu parler de DDD ? Si oui, vous savez sûrement déjà que c'est la jungle pour s'y retrouver dans toutes les ressources disponibles sur le sujet. Cela peut prendre des mois voire des années pour en comprendre correctement toutes les subtilités.\nNous vous proposons de vous présenter d'une manière simple le sujet afin de vous prouver que ce n'est pas si compliqué que ça. D'ailleurs, on utilise cette méthodologie au quotidien chez Primobox. Alors, curieux d'en s'avoir plus ?",
          tags: ['DDD', 'Domain Driven Design', 'Conception', 'Métier'],
          lang: ['fr'],
        },
      ],
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vincent-dubois-5463b08b/',
        },
      ],
    },
    {
      since: '2022-04-25',
      name: 'Julien Gavard',
      bio:
        'Senior software engineer / DDD Lead chez Primobox, éditeur de logiciels SaaS de dématérialisation des processus RH.',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQGoBc0VcH1__Q/profile-displayphoto-shrink_800_800/0/1614413589375?e=1656547200&v=beta&t=uKE72iuoLexuC4kSieKk-UGi5s5AZKAm3K0_heVxPm4',
      cities: ['Bordeaux'],
      location: 'Bordeaux, remote',
      contacts: {
        mail: 'j.gavard@primobox.com',
      },
      sessions: [
        {
          title: "Qu'est ce que le Domain-Driven Design ?",
          abstract:
            "Vous avez déjà entendu parler de DDD ? Si oui, vous savez sûrement déjà que c'est la jungle pour s'y retrouver dans toutes les ressources disponibles sur le sujet. Cela peut prendre des mois voire des années pour en comprendre correctement toutes les subtilités.\nNous vous proposons de vous présenter d'une manière simple le sujet afin de vous prouver que ce n'est pas si compliqué que ça. D'ailleurs, on utilise cette méthodologie au quotidien chez Primobox. Alors, curieux d'en s'avoir plus ?",
          tags: ['DDD', 'Domain Driven Design', 'Conception', 'Métier'],
          lang: ['fr'],
        },
      ],
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/julien-gavard-974654120/',
        },
      ],
    },
    {
      since: '2022-07-22',
      name: 'Robin Caroff',
      bio:
        'Android and iOS developer - Technical Lead chez Resonantes - Lead GDG Nanes Android',
      picture: 'https://s.gravatar.com/avatar/7352e4e763e3b54ac7a91f013dc7c709',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/RobinCaroff',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/robincaroff/',
        },
        {
          name: 'Speakerdeck',
          url: 'https://speakerdeck.com/robincaroff/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            "[Quicky] - App-Elles - Exemple de tech for good à l'heure du confinement",
          abstract:
            'Le premier confinement que nous avons connu en 2020 a été soudain et brutal. Dans les secteurs privés comme publics, l’activité a souvent été affectée et diminuée voire parfois stoppée. Les impacts sur le système de santé et sur les entreprises a plusieurs fois été cité mais ce ne sont pas les seuls domaines. L’activité des travailleurs sociaux par exemple a été fortement impactée et les personnes qui étaient suivies par ces travailleurs se sont parfois trouvées plus isolées que jamais.<br/><br/>Dans ce contexte, les solutions numériques été beaucoup plus utilisées qu’en temps normal afin de prendre le relai, ou de permettre à certaines activités de se poursuivre.<br/><br/>Avec ce talk, je propose un retour d’expérience sur l’activité et le développement continu de l’application mobile <strong>App-Elles</strong> durant cette période. App-Elles (https://app-elles.fr) a pour but de répondre aux principaux besoins d’assistance et de soutien des victimes et des témoins confrontés à une situation de violence.<br/><br/>A travers cet exemple, je souhaite montrer en quoi les technologies mobiles ont une vocation Tech For Good et plus que jamais une réelle utilité.',
          tags: ['TechForGood', 'Dev', 'Innovation', ' Social'],
          lang: ['fr'],
        },
        {
          title: '[Quicky] - From Dagger to Dagger Hilt',
          abstract:
            "During the 2019's Android Dev Summit conference, Google announced that it would stop the development of Dagger-Android and officially recommended to use pure Dagger 2 instead. Few times after those announces Dagger-Hilt was announced and presented as &#34;a standard way to incorporate Dagger dependency injection into an Android application.&#34; On the 5th of May 2021 Dagger Hilt 1.0.0 was released.<br/><br/>I recently took the decision to give it a go as Dagger 2 is a powerful but yet difficult tool to understand and setup and did not really want to change the setup it already took me time to master.<br/><br/>I started using Hilt in a small internal app, a simple tool without the scope of an important production app. Once confident that Hilt would improve our production app I started the refactoring of the dependency injection code to follow Dagger-Hilt's template.<br/><br/><strong>With this talk I'd like to share my experience with Dagger-Hilt with two integration examples:</strong><br/><ul><li>From scratch in a new project</li><li>Refactoring of an important project already using Dagger 2</li><li>I will discuss pros and cons of Dagger-Hilt and what does it brings to the table.</li></ul>",
          tags: ['Dev', 'Android', 'DependencyInjection', 'Kotlin'],
          lang: ['fr', 'en'],
        },
        {
          title:
            'À la découverte du développement mobile, sans les maux de tête',
          abstract:
            "<strong>Talk proposé en duo avec Cyril Hue</strong><br/>Vous êtes un développeur souhaitant explorer les possibilités offertes par le développement mobile, mais vous êtes confronté à diverses incertitudes :<ul><li>Comment déployer son code sur un téléphone ?</li><li>Comment distribuer son application sur un magasin ?</li><li>Combien ça coûte ?</li><li>Combien de temps ça prend ?</li><li>etc.</li></ul>Au cours de ce talk, nous vous présenterons le parcours de Cyril, développeur web s’étant lancé dans le développement d’une application mobile. Nous partagerons, entre autres, les problématiques qu'il a rencontré et les solutions qu'il a utilisées pour les résoudre. Avec l'aide de Robin, expert en développement mobile, nous aborderons les bonnes pratiques et des astuces pour développer, déployer et maintenir une application mobile.<br/><br/>Ce talk est destiné à tous les curieux intéressés par cet écosystème particulier.",
          tags: ['Android', 'iOS', 'Mobile', 'Dev', 'Discovery'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'RobinCaroff',
        mail: 'robin.caroff@gmail.com',
      },
    },
    {
      since: '2022-07-22',
      name: 'Marc Bouvier',
      bio:
        "Coach Technique pratiquant la methode \"Samman Technical Coaching\". J'accompagne vos équipes afin qu'elles s'approprient leurs pratiques et les améliorent de façon continue. J'interviens également en Java, DevOps et Frontend.",
      picture:
        'https://secure.gravatar.com/avatar/b51dd47b8f28ba2993f92b3366efa593?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/marc-bouvier/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/profileofmarcbouvier/',
        },
        {
          name: 'Web',
          url: 'https://baldir.fr/',
        },
      ],
      location: 'Strasbourg, remote',
      sessions: [
        {
          title: 'Docker sur le poste du développeur',
          abstract:
            'Vous avez entendu parler de Docker, vous avez été formé dessus mais vous ne savez pas à quoi ça pourrait servir dans votre quotidien de développeur? Dans cette présentation je vous présenterai des cas d’utilisation concrets, des exemples / démos de certains de ces usages.',
          tags: ['Docker', 'Outillage', 'Onboarding', 'Developpement'],
          lang: ['fr'],
        },
      ],
      cities: ['Strasbourg'],
      contacts: {
        twitter: 'marcbouvier_',
        mail: 'm.bouvier.dev@gmail.com',
      },
    },
    {
      since: '2022-10-12',
      name: 'Gabriel Pichot',
      bio:
        "Formateur et Développeur Web (React, TypeScript, NodeJS, NoCode & Low Code). CTO Consultant. CTO @CraftValue. \n\nJ'accompagne vos équipes techniques afin qu'elles soient plus efficaces avec les outils qu'elles utilisent déjà aujourd'hui.",
      picture:
        'https://fr.gravatar.com/userimage/227009654/fdcf0bc93ceb80a75be1fc36201fec36.png?size=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/gpichot/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gabrielpichot/',
        },
        {
          name: 'Web',
          url: 'https://www.gabrielpichot.fr/',
        },
        {
          name: 'Web',
          url: 'https://www.craftvalue.io/',
        },
      ],
      location: 'Paris',
      cities: [
        'Paris',
        'Bordeaux',
        'Lille',
        'Montpellier',
        'Nantes',
        'Rennes',
        'Strasbourg',
      ],
      sessions: [
        {
          title: 'React: sujet au choix',
          abstract:
            'Parmi les sujets possibles : Hooks React, Performance, API Context, State Management, React Query, Redux, MobX, Testing.',
          tags: ['React', 'TypeScript', 'React Query', 'Mobx', 'JavaScript'],
          lang: ['fr', 'en'],
        },
        {
          title: "Tour d'horizon et Initiation au No Code",
          abstract:
            'Initiation au No Code, présentation des outils et des possibilités.',
          tags: ['Airtable', 'Tally', 'Make', 'Integromat', 'Strapi'],
          lang: ['fr', 'en'],
        },
        {
          title: 'React Query: exploiter une API JSON en 5 minutes',
          abstract:
            'Booster votre productivité avec React Query (TanStack Query), une librairie pour gérer les appels API.',
          tags: ['React', 'TypeScript', 'React Query', 'JavaScript'],
          lang: ['fr', 'en'],
        },
      ],
      contacts: {
        twitter: 'gabrielpichot',
        mail: 'gabriel@craftvalue.io',
      },
    },
    {
      since: '2022-12-16',
      name: 'Gurvan Henry',
      bio: 'Développeur web et mobile | Freelance passioné ',
      picture:
        'https://s.gravatar.com/avatar/9a4ff1ce22ad3b6c2e7d38b5a2ab0a41?s=200',
      websites: [
        {
          name: 'Web',
          url: 'https://www.gurvanhenry.com',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gurvanhenry',
        },
      ],
      location: 'Quimper, Finistère sud',
      sessions: [
        {
          title:
            'Discussion technique - front : React react-native / back : serveur node ou BaaS',
          abstract:
            "Basé sur mon expérience on peut échanger sur les technologies et pratiques que j'utilise pour dévellopper des applications.",
          tags: [
            'JavaScript',
            'React',
            'react-native',
            'Test',
            'Git',
            'CI/CD',
            'DevOps',
          ],
          lang: ['fr'],
        },
        {
          title: 'Sujet ouvert en fonction de vos intérêts',
          abstract:
            "J'aime échanger sur beaucoup de sujets autout du dev. Proposez moi ! 🐵",
          tags: [
            "organisation d'équipe",
            'usage utilisateur',
            'qualité de code',
            '...',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Brest', 'Vannes'],
      contacts: {
        mail: 'gurvan@hojopa.com',
      },
    },
    {
      since: '2022-11-22',
      name: 'Laurent Doguin',
      bio:
        "Developer Relations @ Couchbase | J'écris en Java et je documente en AsciiDoc professionellement depuis 2007. Anciennement Nuxeo, Clever Cloud.",
      picture:
        'https://en.gravatar.com/userimage/69245795/4be43c5350499c00d4dbc6b2dd7e0597.png?size=200',
      websites: [
        {
          name: 'GitHub',
          url: 'https://github.com/ldoguin/',
        },
      ],
      location: 'Paris, remote',
      sessions: [
        {
          title: 'A la découverte de Couchbase',
          abstract:
            'Je vous propose de découvrir Couchbase, la base de donnée NoSQL qui aime le SQL.',
          tags: [
            'Couchbase',
            'NoSQL',
            'Cache',
            'SQL',
            'JSON',
            'Search',
            'Reactive',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Apprendre la Programmation Réactive avec les Base de Données',
          abstract:
            "Je vous propose de découvrir la programmation réactive en Java. Nous verrons quelles raisons font de la programmation réactive un excellent paradigme pour accéder à une base de donnée, et verrons quelques patterns d'écriture et de lecture, de requêtes qui réussissent ou échouent, et comment gérer les erreurs",
          tags: ['Reactor', 'Java', 'RxJava', 'Mutiny', 'BDD', 'Reactive'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Paris'],
      contacts: {
        twitter: 'ldoguin',
        mail: 'laurent.doguin@couchbase.com',
      },
    },
    {
      since: '2023-04-06',
      name: 'Alizée Gottardo',
      bio:
        "Software Developer & Business Analyst. L'approche que je privilégie : explorer et modéliser le domaine métier pour concevoir des produits qui ont du sens. J'adore échanger autour du Domain Driven Design et de l'éco-conception.",
      picture:
        'https://en.gravatar.com/userimage/73573562/d450ac63ef86c12c106c63042c02c3ce.png?size=200',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/alizeegottardo/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            "De la conception à l'implémentation : un atelier pour faciliter la collaboration entre designers et développeur·euse·s",
          abstract:
            "Je vous propose un atelier co-animé avec un.e designer pour identifier les problématiques de collaboration que vous rencontrez au sein de votre équipe de designers et développeur·euse·s. Nous vous aiderons à trouver des pistes de solutions en vous partageant notre retour d'expérience.",
          tags: ['Design', 'Développement', 'Collaboration'],
          lang: ['fr'],
        },
        {
          title: 'Pourquoi mettre en place une équipe Platform Engineering ?',
          abstract:
            "Avec le passage à l'ère Full Cycle, les développeur·euse·s ont maintenant à leur charge l'entièreté du cycle de développement : concevoir, développer, tester, déployer, opérer et maintenir. Le rôle d'une équipe Platform Engineering est de venir supporter les équipes produit pour leur permettre de rester concentrées sur le domaine métier.",
          tags: ['Développement', 'Platform Engineering', 'Full Cycle'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'alizee.gottardo.pro@gmail.com',
      },
    },
    {
      since: '2023-02-20',
      name: 'Cyril Hue',
      bio:
        'Développeur Front & Amoureux ❤️ de rétrogaming, comics, et autres collections.',
      picture: 'https://avatars.githubusercontent.com/u/15615569',
      cities: ['Nantes'],
      contacts: {
        twitter: 'cy_hue',
        mail: 'cy.hue80@gmail.com',
      },
      websites: [
        {
          name: 'Web',
          url: 'https://horsty.fr',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Horsty80',
        },
      ],
      sessions: [
        {
          title:
            'À la découverte du développement mobile, sans les maux de tête',
          abstract:
            "<strong>Talk proposé en duo avec Robin Caroff</strong><br/>Vous êtes un développeur souhaitant explorer les possibilités offertes par le développement mobile, mais vous êtes confronté à diverses incertitudes :<ul><li>Comment déployer son code sur un téléphone ?</li><li>Comment distribuer son application sur un magasin ?</li><li>Combien ça coûte ?</li><li>Combien de temps ça prend ?</li><li>etc.</li></ul>Au cours de ce talk, nous vous présenterons le parcours de Cyril, développeur web s’étant lancé dans le développement d’une application mobile. Nous partagerons, entre autres, les problématiques qu'il a rencontré et les solutions qu'il a utilisées pour les résoudre. Avec l'aide de Robin, expert en développement mobile, nous aborderons les bonnes pratiques et des astuces pour développer, déployer et maintenir une application mobile.<br/><br/>Ce talk est destiné à tous les curieux intéressés par cet écosystème particulier.",
          tags: ['Android', 'iOS', 'Mobile', 'Dev', 'Discovery'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2022-12-06',
      name: 'Stéphane Lang',
      bio:
        'Passionné par les bases de données distribuées relationnelles et noSQL | Ingénieur solutions chez Couchbase',
      picture:
        'https://secure.gravatar.com/avatar/f2c7c409a480e8a5e7891220826315f1?size=200',
      location: 'Paris, Lille, remote',
      sessions: [
        {
          title: 'Introduction à Couchbase et aux bases de données NoSQL',
          abstract:
            "Le NoSQL, pour quelles applications, quels cas d'usage? Couchbase est une plateforme de données multi-services, deployable partout jusque sur mobiles. Elle combine à la fois performances, requêtes SQL, recherche full-text et plus encore pour rationnalier l'écosystème de solutions des entreprises. Tour d'horizon de l'architecture et des possibilités de Couchbase, la base NoSQL qui aime le SQL",
          tags: ['NoSQL', 'Couchbase', 'Base de données', 'JSON'],
          lang: ['fr'],
        },
        {
          title: 'Applications mobiles déconnectées',
          abstract:
            "Les applications mobiles doivent fournir une expérience utilisateur flexible, riche et sans accroc quelle que soit la couverture réseau. Couchbase propose une base de données NoSQL embarquée disponible offline qui se synchronise automatiquement. C'est la solution de référence pour les plus grands acteurs de toutes les industries",
          tags: ['mobile', 'offline', 'Base de données', 'JSON', 'SQLite'],
          lang: ['fr'],
        },
        {
          title:
            "Bases de données distribuées - Faire le bon choix d'architecture et de cohérence",
          abstract:
            "Les bases de données distribuées deviennent une nécessité. Mais chaque techno vient avec ses choix d'architectures et de gestion de la cohérence. Ces choix sont structurant et ils impactent les applications. C'est pourquoi ils doivent être évalués attentivement. Dans cette session d'introduction, nous abordons les concepts qui entrent en jeu et les points d'attention liés aux architecture des bases de données relationnelles et NoSQL les plus populaires",
          tags: ['architecture', 'base de données', 'consistency', 'noSQL'],
          lang: ['fr'],
        },
      ],
      cities: ['Paris', 'Lille', 'Nantes', 'Lyon', 'Bordeaux'],
      contacts: {
        mail: 'steph.lang.fr@gmail.com',
      },
    },
    {
      since: '2023-04-27',
      name: 'Cécile Staehle',
      bio:
        "Je suis associée coopératrice de la SCOP Troopers, en charge du Développement RH (culture d'entreprise et gouvernance, santé et sécurité, recrutement et onboarding, marque employeur, formation, etc.). Je porte et développe des projets au service de l'épanouissement des Troopers, dans des conditions de travail respectueuses, bienveillantes et inclusives. Notre entreprise est une agence spécialisée dans la création et refonte de sites web et applications métier complexes. Nous pratiquons l'autogestion et fonctionnons en gouvernance partagée et participative, nous militons pour une tech au service du bien commun, équitable et respectueuse de chacune et chacun, nous défendons le numérique responsable aussi bien dans nos métiers que dans nos engagements sociaux.",
      picture: 'https://strapi.troopers.agency/uploads/cecile_9ee7f62fb0.jpeg',
      websites: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/cécile-staehle/',
        },
        {
          name: 'Web',
          url: 'https://troopers.coop',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            'Management participatif : mieux décider ensemble grâce aux outils de la sociocratie',
          abstract:
            "Lorsqu'il s'agit de prendre des décisions ou faire des choix stratégiques, on confie cette responsabilité aux managers, aux N+1, voire aux dirigeant·es. Mais avez-vous déjà pensé à impliquer l'ensemble de l'équipe ? Mais à plusieurs, ce n’est pas  simple d’atteindre le consensus. Savez-vous que ce n’est pas le seul mode de décision possible ? Ensemble, nous découvrirons la décision par consentement à l’aide d’une mise en situation concrète.",
          tags: [
            'sociocratie',
            'organisation',
            'décision',
            'gouvernance',
            'consentement',
          ],
          lang: ['fr'],
        },
        {
          title:
            'Pyramide, cercles, vertical : ceci n’est pas un cours de géométrie',
          abstract:
            'Dans cet atelier de découverte, nous ferons un état des lieux rapide du management en entreprise et, grâce à une expérimentation ludique, nous aborderons le sujet de la gouvernance partagée et participative, comment cela fonctionne, quelles transformations cela implique.',
          tags: [
            'management',
            'organisation',
            'gouvernance',
            'autogestion',
            'sociocratie',
          ],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'cecile@troopers.email',
      },
    },
    {
      since: '2023-04-28',
      name: 'Julien Wittouck',
      bio:
        'freelance solution & software architect 🏗️ - containers 🐋 & linux 🐧 💙 - teacher & trainer 🎓 @univ-lille.fr - associate 🫱‍🫲 @ekite',
      picture:
        'https://secure.gravatar.com/avatar/98ffafe30da35001213aca8704533532?s=200',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/juwit',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/julien-wittouck/',
        },
        {
          name: 'Web',
          url: 'https://juwit.github.io/',
        },
      ],
      location: 'Lille',
      sessions: [
        {
          title: "Spring Boot & Containers - Do's & Don'ts",
          abstract:
            "Bien que Docker soit facile d'utilisation, construire une image reste un exercice compliqué. Optimisation, layers, et sécurité nécessitent de s'abstraire des Dockerfile basiques qu'on peut trouver sur internet. Dans ce BBL, nous verrons comment bien packager une application Spring Boot dans une image Docker/OCI. Nous allons parcourir les bonnes pratiques préconisées par Spring, les pièges à éviter, comment bien écrire un Dockerfile pour optimiser la construction et l'image finale pour une exécution dans Kubernetes et nous verrons aussi des moyens alternatifs de construction d'images Spring Boot et l'outillage d'analyse à ajouter à votre toolbox.",
          tags: ['Spring Boot', 'Docker', 'Kubernetes', 'DevOps'],
          lang: ['fr'],
        },
      ],
      cities: ['Lille'],
      contacts: {
        twitter: 'codekaio',
        mail: 'julien@codeka.io',
      },
    },
    {
      since: '2023-05-09',
      name: 'Paula Breton',
      bio:
        'Designer UI/UX. Mon but, créer des interfaces super intuitives et rassurantes. Mon truc, mélanger mes compétences techniques et mon imagination pour concevoir des designs créatifs qui ont un impact positif sur les utilisateurs.',
      picture:
        'https://fr.gravatar.com/userimage/233847729/2830b975e80e13783ab1ae36ad228aeb.png?size=200',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/paulabreton/',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            "De la conception à l'implémentation : un atelier pour faciliter la collaboration entre designers et développeur·euse·s",
          abstract:
            "Je vous propose un atelier co-animé avec un.e développeur·euse pour identifier les problématiques de collaboration que vous rencontrez au sein de votre équipe de designers et développeur·euse·s. Nous vous aiderons à trouver des pistes de solutions en vous partageant notre retour d'expérience.",
          tags: ['Design', 'Développement', 'Collaboration'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'pbreton.designer@gmail.com',
      },
    },
    {
      since: '2023-05-09',
      name: 'Marie Desnos',
      bio: 'Designer UI/UX',
      picture:
        'https://2.gravatar.com/avatar/3eeaf0de749bb0fdfeceb15e444d2f69?size=256',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/marie-desnos-37a00b5a',
        },
      ],
      location: 'Nantes',
      sessions: [
        {
          title:
            "De la conception à l'implémentation : un atelier pour faciliter la collaboration entre designers et développeur·euse·s",
          abstract:
            "Je vous propose un atelier co-animé avec un.e développeur·euse pour identifier les problématiques de collaboration que vous rencontrez au sein de votre équipe de designers et développeur·euse·s. Nous vous aiderons à trouver des pistes de solutions en vous partageant notre retour d'expérience.",
          tags: ['Design', 'Développement', 'Collaboration'],
          lang: ['fr'],
        },
        {
          title: 'Prototype : Échouer tôt pour réussir vite',
          abstract:
            'Je vous propose de parler des différents types et niveaux de prototypes (utilisateurs, techniques, etc) et de démontrer les nombreux avantages du prototypage avec des exemples et vous inciter à mettre en place des prototypes dans vos projets à travers des conseils concrets.',
          tags: ['Design', 'Prototype', 'Projet de développement'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'mdesnos@gmail.com',
      },
    },
    {
      since: '2023-06-26',
      name: 'Fabien Brunet',
      bio:
        'Front-end Architect at Allianz Technology. Full stack developer, passionate about new technologies, I have decided to move towards Java and Node applications development. I turn to service delivery as technical referent, focusing on java development technical expertise, human relationships and contacts.',
      picture: 'https://avatars.githubusercontent.com/u/29751338?v=4',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/fbrunet/',
        },
        {
          name: 'Website',
          url: 'https://fabien-brunet.fr/',
        },
      ],
      location: 'Rennes, Nantes et Paris',
      sessions: [
        {
          title:
            'Comment nous avons implementé les Micro-Frontends chez Allianz',
          abstract:
            "Je vous propose un retour d'expérience autour des Micro-Frontends que nous avons implémentés chez Allianz Technology. Durant ce talk, je vous montrerai et décrirai notre cheminement de simple SPA aux Micro-Frontends : l'existant, les multi et mono repos, sécurité et Micro-Frontend, nos points de blocage et difficultés, nos réussites et conclusions",
          tags: ['Frontend', 'Développement', 'Architecture'],
          lang: ['fr'],
        },
        {
          title: 'Eco-responsabilité et développement chez Allianz',
          abstract:
            "Depuis 3 ans, un groupe de travail collabore autour du sujet de l'empreinte carbone chez Allianz et les usages pour la réduire. Fort et fière de sa communauté de développeurs, le GreenIT progresse dans l'écosystème d'Allianz. Durant ce talk, je vous montrerai et décrirai notre cheminement de ces 3 ans : avancées, points de blocage, difficultés et réussites.",
          tags: ['Frontend', 'Développement', 'Sustainable'],
          lang: ['fr'],
        },
      ],
      cities: ['Rennes'],
      contacts: {
        mail: 'dev@linktogo.fr',
      },
    },
    {
      since: '2023-09-19',
      name: 'Vincent Beauvivre',
      bio:
        'Backend technology specialist, with focus on APIs, understanding app needs and turn it into code, interoperability…',
      picture:
        'https://slash.troopers.coop/_next/image?url=https%3A%2F%2Fstrapi.troopers.agency%2Fuploads%2FVincent_c0094c0e5b.webp&w=640&q=100',
      websites: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/vincent-beauvivre-2a506121/',
        },
        {
          name: 'Website',
          url: 'https://troopers.agency/',
        },
      ],
      location: 'Nantes et périphérie',
      sessions: [
        {
          title: 'Voyage d’une appli legacy vers le DDD − Domain Driven Design',
          abstract:
            'Je vous propose une étude de cas fictive mais pratique, pour transformer une application réalisée avec CakePhp dans un code moderne, réutilisable et maintenable.',
          tags: ['Backend', 'Architecture', 'DDD'],
          lang: ['fr', 'en'],
        },
        {
          title: 'Because I’m API',
          abstract:
            'Un aperçu du monde fantastique des API et pourquoi API-Platform est la solution qui respecte le mieux les normes et usages de la terre du milieu.',
          tags: ['Backend', 'Architecture', 'Api'],
          lang: ['fr', 'en'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        mail: 'vincent@troopers.email',
      },
    },
    {
      since: '2023-09-19',
      name: 'Paul Andrieux',
      bio:
        "Fondateur de l'agence Troopers, je suis développeur de formation. Intéressé par les sujets DevOps et les formes alternatives de management, notamment l'auto-gestion. ",
      picture:
        'https://0.gravatar.com/avatar/f408278b6ffa94351c033f9e006847f2b57ff04cdc15e7239db3fb9592369d55?size=200',
      websites: [
        {
          name: 'Web',
          url: 'https://troopers.coop/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/paulandrieux/',
        },
      ],
      location: 'Nantes, quartier de la Madeleine',
      sessions: [
        {
          title:
            'Mettre en oeuvre une pratique d’intégration continue, GitLab à la rescousse',
          abstract:
            "Vous voulez améliorer la qualité de votre code tout en accélérant la livraison de nouvelles fonctionnalités ? GitLab peut pour vous aider. Dans ce BBL, on va explorer ensemble les étapes à suivre pour intégrer GitLab dans votre processus de développement. On va parler d'automatisation de tests, de déploiements, et de collaboration en équipe. En bref, on va vous donner les premières pistes de mise en place une pratique d'intégration continue efficace !",
          tags: ['CI', 'DevOps', 'Qualité logicielle'],
          lang: ['fr'],
        },
      ],
      cities: ['Nantes'],
      contacts: {
        twitter: 'paulandrieux',
        mail: 'paul@troopers.email',
      },
    },
    {
      since: '2023-10-28',
      name: 'Lou-Théo LAURENT',
      bio:
        "Développeur curieux, touche à pas mal de choses. J'adore les événements que ce soit en tant que participant ou organisateur. La qualité me tient à coeur, je progresse pour l'améliorer.",
      picture:
        'https://media.licdn.com/dms/image/C4D03AQGhAgP_RVN3Fg/profile-displayphoto-shrink_400_400/0/1561902693360?e=1703721600&v=beta&t=cUyKHv0xiEM6TVVERY3FGgQ-WOCctfobQ0ZUZ_X1nqU',
      location: 'Strasbourg et environs',
      cities: ['Strasbourg'],
      contacts: { mail: 'laurent.lt@sfeir.com' },
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/lou-theo/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/lou-theo-laurent/',
        },
        {
          name: 'Web',
          url: 'https://www.sfeir.dev/author/loutheo-laurent/',
        },
      ],
      sessions: [
        {
          title: 'La réactivité dans Angular, comment ça fonctionne ?',
          abstract:
            "Vous qui utilisez Angular au quotidien, avez-vous déjà eu la curiosité de savoir comment le framework fonctionne ? Comment votre composant sait-il qu'il doit se rafraichir ? Quelles sont les possibilités pour optimiser notre application ? Que nous réserve le futur ?",
          tags: ['JavaScript', 'TypeScript', 'Angular'],
          lang: ['fr'],
        },
        {
          title: 'Quel futur pour Angular ? (vu de 2023-2024)',
          abstract:
            'Angular a manifesté des changements impressionnants depuis quelques versions et cela n’est rien face à ce qu’il y a dans les cartons ! En plus des Signals, le phénomène qui va révolutionner la détection de changement dans Angular, nous discuterons également du futur système de contrôle des flux (le remplaçant des ngIf & co) envisagé pour la partie template. Accrochez-vous, vous risquez d’être choqué !',
          tags: ['JavaScript', 'TypeScript', 'Angular'],
          lang: ['fr'],
        },
      ],
    },
    {
      since: '2023-11-16',
      name: 'Thomas VERHOKEN',
      bio: 'Développeur éclectique et polyglotte.',
      picture: 'https://avatars.githubusercontent.com/u/3036052',
      cities: ['Lille'],
      contacts: {
        twitter: 'tverhoken',
        mail: 'thomas.verhoken@gmail.com',
      },
      sessions: [
        {
          title: 'Mutation testing - Tester vos test ?!?',
          abstract:
            'En tant que développeur.se professionnel.le, vous êtes amené.e.s à tester ce que vous produisez. Mais êtes-vous certain.e.s de la fiabilité des tests que vous écrivez ? Pour vérifier cela, devons-nous aller jusqu’à tester les tests que l’on écrit ?!? Cela serait fastidieux. Et bien voyons ensemble comment faire cela, mais de façon automatisée, au travers de « mutation testing ». Ensemble, voyons en quoi consiste cette pratique et ce qu’elle peut apporter à vos projets ou à vous mêmes.',
          tags: ['Tests', 'T.D.D'],
          lang: ['fr'],
        },
      ],
      location: 'Lille',
      websites: [
        {
          name: 'Github',
          url: 'https://github.com/tverhoken',
        },
      ],
    },
    {
      since: '2024-02-22',
      name: 'Guillaume Wolf',
      bio: "Pour réduire l'empreinte environnementale du numérique",
      picture: 'https://avatars.githubusercontent.com/u/1233106',
      cities: ['Nantes'],
      contacts: {
        twitter: 'geeyom',
        mail: 'geeyom12@gmail.com',
      },
      location: 'Nantes',
      websites: [
        {
          name: 'Web',
          url: 'https://simbios.fr',
        },
        {
          name: 'Github',
          url: 'https://github.com/guillaumew',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/guillaumewolf/',
        },
      ],
      sessions: [
        {
          title:
            "30 minutes pour réduire l'empreinte encironnementale d'un site",
          abstract:
            'A chaque fois que je regarde sous le capot d’une page web, je vois toujours (ou presque) les mêmes défauts… Dans cette présentation, je vais vous montrer un réel site statique. Je vais vous montrer rapidement le code (HTML, CSS, javascript) ainsi que son score environnemental : l’éco-index. Puis par une série de petites optimisations rapides, nous allons améliorer l’éco-index et donc l’empreinte environnementale du site. Il n’y a là rien de bien compliqué, mais en quelques minutes on va drastiquement améliorer sa performance. Malgré son côté technique, cette présentation reste très accessible pour toute personne travaillant dans le numérique.',
          tags: [
            'Live Coding',
            'Green',
            'Eco-conception',
            'HTML',
            'CSS',
            'Javascript',
          ],
          lang: ['fr', 'en'],
        },
        {
          title: 'Sensibilisation impact environnemental numérique',
          abstract:
            "Cette présentation interactive d'une heure permettra de comprendre l'impact environnemental du numérique. Les objectifs savoir en quoi le numérique déteriore l'environnement et quels sont les ordres de grandeurs.",
          tags: ['Quiz', 'Environnement', 'Green'],
          lang: ['fr'],
        },
      ],
    },
  ],
  cities: {
    'Aix-en-Provence': {
      name: 'Aix-en-Provence',
      ville_img: 'img/villes/BBL_Aix-en-provence.png',
      lat: 43.529742,
      lng: 5.447427,
    },
    Amiens: {
      name: 'Amiens',
      ville_img: 'img/villes/BBL.jpg',
      lat: 49.8985408,
      lng: 2.2145978,
    },
    Avignon: {
      name: 'Avignon',
      ville_img: 'img/villes/BBL_Avignon.jpg',
      lat: 43.941557,
      lng: 4.8332525,
    },
    Bayonne: {
      name: 'Bayonne',
      ville_img: 'img/villes/BBL_Bayonne.png',
      lat: 43.4843941,
      lng: -1.4961697,
    },
    Belfort: {
      name: 'Belfort',
      ville_img: 'img/villes/BBL_Belfort.png',
      lat: 47.6456257,
      lng: 6.8060504,
    },
    Besançon: {
      name: 'Besançon',
      ville_img: 'img/villes/BBL_Besancon.png',
      lat: 47.2601941,
      lng: 5.9420574,
    },
    Biarritz: {
      name: 'Biarritz',
      ville_img: 'img/villes/BBL_Biarritz.png',
      lat: 43.4709797,
      lng: -1.573345,
    },
    Bordeaux: {
      name: 'Bordeaux',
      ville_img: 'img/villes/BBL_Bordeaux.jpg',
      lat: 44.837789,
      lng: -0.57918,
    },
    Brest: {
      name: 'Brest',
      ville_img: 'img/villes/BBL_Brest.jpg',
      lat: 48.390394,
      lng: -4.486076,
    },
    Caen: {
      name: 'Caen',
      ville_img: 'img/villes/BBL_Caen.jpg',
      lat: 49.1846,
      lng: -0.3723,
    },
    Chartres: {
      name: 'Chartres',
      ville_img: 'img/villes/BBL_Chartres.png',
      lat: 48.4469,
      lng: 1.4892,
    },
    'Clermont-Ferrand': {
      name: 'Clermont-Ferrand',
      ville_img: 'img/villes/BBL_Clermont.jpg',
      lat: 45.78333,
      lng: 3.08333,
    },
    Epinal: {
      name: 'Epinal',
      ville_img: 'img/villes/BBL_Epinal.jpg',
      lat: 48.1221,
      lng: 6.8912,
    },
    Faaa: {
      name: "Faa'a",
      ville_img: 'img/villes/BBL.jpg',
      lat: -17.551,
      lng: -149.5974,
    },
    Grenoble: {
      name: 'Grenoble',
      ville_img: 'img/villes/BBL_Grenoble.jpg',
      lat: 45.183,
      lng: 5.717,
    },
    'Le Mans': {
      name: 'Le Mans',
      ville_img: 'img/villes/BBL_leMans.jpg',
      lat: 47.995084,
      lng: 0.188359,
    },
    'La Rochelle': {
      name: 'La Rochelle',
      ville_img: 'img/villes/BBL.jpg',
      lat: 46.158163,
      lng: -1.153645,
    },
    "Les Sables-d'Olonne": {
      name: "Les Sables-d'Olonne",
      ville_img: 'img/villes/BBL.jpg',
      lat: 46.5002031,
      lng: -1.7924568,
    },
    Lille: {
      name: 'Lille',
      ville_img: 'img/villes/BBL_Lille.jpg',
      lat: 50.637222,
      lng: 3.063333,
    },
    Lyon: {
      name: 'Lyon',
      ville_img: 'img/villes/BBL_Lyon.jpg',
      lat: 45.764043,
      lng: 4.835659,
    },
    Luxembourg: {
      name: 'Luxembourg',
      ville_img: 'img/villes/BBL_Luxembourg.png',
      lat: 49.61167,
      lng: 6.13,
    },
    Marseille: {
      name: 'Marseille',
      ville_img: 'img/villes/BBL.jpg',
      lat: 43.3,
      lng: 5.4,
    },
    Metz: {
      name: 'Metz',
      ville_img: 'img/villes/BBL_Metz.png',
      lat: 49.133333,
      lng: 6.166667,
    },
    Montpellier: {
      name: 'Montpellier',
      ville_img: 'img/villes/BBL_Montpellier.jpg',
      lat: 43.610769,
      lng: 3.876716,
    },
    Montréal: {
      name: 'Montréal',
      ville_img: 'img/villes/BBL_Montreal.jpg',
      lat: 45.501689,
      lng: -73.567256,
    },
    Mulhouse: {
      name: 'Mulhouse',
      ville_img: 'img/villes/BBL_Mulhouse.png',
      lat: 47.7526806,
      lng: 7.2905194,
    },
    Nancy: {
      name: 'Nancy',
      ville_img: 'img/villes/BBL_Nancy.png',
      lat: 48.6880796,
      lng: 6.1558845,
    },
    Nantes: {
      name: 'Nantes',
      ville_img: 'img/villes/BBL_Nantes.jpg',
      lat: 47.219102,
      lng: -1.551132,
    },
    Nice: {
      name: 'Nice',
      ville_img: 'img/villes/BBL_Sophia.png',
      lat: 43.695719,
      lng: 7.264419,
    },
    Orléans: {
      name: 'Orléans',
      ville_img: 'img/villes/BBL_Orleans.png',
      lat: 47.8733945,
      lng: 1.8419975,
    },
    Papeete: {
      name: 'Papeete',
      ville_img: 'img/villes/BBL.jpg',
      lat: -17.535,
      lng: -149.5696,
    },
    Paris: {
      name: 'Paris',
      ville_img: 'img/villes/BBL_Paris.jpg',
      lat: 48.856614,
      lng: 2.352222,
    },
    Rennes: {
      name: 'Rennes',
      ville_img: 'img/villes/BBL_BZH.jpg',
      lat: 48.0686257,
      lng: -1.7253652,
    },
    Rouen: {
      name: 'Rouen',
      ville_img: 'img/villes/BBL_Rouen.jpg',
      lat: 49.4431,
      lng: 1.0993,
    },
    'Saint Etienne': {
      name: 'Saint Etienne',
      ville_img: 'img/villes/BBL_SaintEtienne.jpg',
      lat: 45.439695,
      lng: 4.387178,
    },
    'Saint-Jean-de-Luz': {
      name: 'Saint-Jean-de-Luz',
      ville_img: 'img/villes/BBL_Saint-Jean-De-Luz.png',
      lat: 43.3933872,
      lng: -1.6514175,
    },
    'San Sebastian': {
      name: 'San Sebastian',
      ville_img: 'img/villes/BBL_San-Sebastian.png',
      lat: 43.3072913,
      lng: -1.9914354,
    },
    'Sophia-Antipolis': {
      name: 'Sophia-Antipolis',
      ville_img: 'img/villes/BBL_Sophia.png',
      lat: 43.616354,
      lng: 7.055222,
    },
    'Saint-Quentin-En-Yvelines': {
      name: 'Saint-Quentin-En-Yvelines',
      ville_img: 'img/villes/BBL_SaintQuentin.png',
      lat: 48.77186,
      lng: 2.01891,
    },
    Strasbourg: {
      name: 'Strasbourg',
      ville_img: 'img/villes/BBL_Strasbourg.png',
      lat: 48.583148,
      lng: 7.747882,
    },
    Toulon: {
      name: 'Toulon',
      ville_img: 'img/villes/BBL_Toulon.jpg',
      lat: 43.117,
      lng: 5.9333,
    },
    Toulouse: {
      name: 'Toulouse',
      ville_img: 'img/villes/BBL_Toulouse.jpg',
      lat: 43.604652,
      lng: 1.444209,
    },
    Tours: {
      name: 'Tours',
      ville_img: 'img/villes/BBL_Tours.jpg',
      lat: 47.396651,
      lng: 0.694286,
    },
    Vannes: {
      name: 'Vannes',
      ville_img: 'img/villes/BBL_BZH.jpg',
      lat: 47.658236,
      lng: -2.760847,
    },
    Versailles: {
      name: 'Versailles',
      ville_img: 'img/villes/BBL_Versailles.jpg',
      lat: 48.801408,
      lng: 2.130122,
    },
    Vesoul: {
      name: 'Vesoul',
      ville_img: 'img/villes/BBL_Vesoul.png',
      lat: 47.6323072,
      lng: 6.1347321,
    },
  },
};
