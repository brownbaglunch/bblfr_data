# Brown Bag Lunch baggers database

To add yourself as a speaker, send a pull request on `baggers.js` file.

## Speakers dataset

The `speakers` array contains the list of speakers ordered by their "join" date. It means
that you need to add yourself at the end of this list.

**Mandatory fields:**

* `since`: the current day, format `yyyy-MM-dd`
* `name`: your full name "First Last"
* `bio`: some words about you
* `picture`: a valid link to picture of yourself.
* `cities`: an array of cities you want to appear in. Any city in that list should exist in the [ending city list](#cities-dataset).
* `contacts`: [see below](#contacts)
* `sessions`: an array list of your sessions. [See below](#sessions)

**Optional fields:**

* `location`: A string which describes where you'd like to speak (might be replaced in the future)
* `websites`: [see below](#websites)

### Contacts

Contacts field can contain your contacts on:

* `twitter`: your twitter handle (without the `@`)
* `mail`: your email address

Example:

```js
{
  "twitter": "fsarradin",
  "mail": "fsarradin@gmail.com"
}
```

### Websites

A list of website objects following this pattern:

* `name`: The website "type". Please pick one of those: `Web`, `LinkedIn`, `AboutMe`, `Podcast`, `Book`, `GitHub`, `Google+`, `Slideshare`, `Hopwork`, `InfoQ`, `Viadeo`, `Speakerdeck`
* `url`: Link to the website

Note that you can have more than one website per type.

Example:

```
"websites": [
	{
	  "name": "Web",
	  "url": "http://link.to/site1"
	},
	{
	  "name": "Web",
	  "url": "http://link.to/site2"
	}
]
```

### Sessions

A session object must contain:

* `title`: the short title of your session
* `abstract`: the description of your session
* `tags`: an array of String
* `lang`: in which languages this session can be played (ISO 2 letters code like `fr`, `en`)

Example:

```js
{
  "title": "A Web Framework in Scala from Scratch in One Hour",
  "abstract": "(live coding - en/fr) Discover Scala through the development of an efficient small tested Web framework.",
  "tags": [
    "Java",
    "Scala",
    "Programmation fonctionnelle",
    "Scrum",
    "Agilité"
  ],
  "lang": [
    "fr"
  ]
}
```

## Cities dataset

The `cities` object contains one city object where the key is the city name.
The city object must define the following fields:

* `name`: The city name
* `ville_img`: The relative path to the city BBL logo. If you don't have any, you can use `img/villes/BBL.jpg`.
In the next future, this field won't be mandatory anymore.
* `lat`: Lattitude point for the city (might be the center of the city)
* `lng`: Longitude point for the city (might be the center of the city)

Example:

```js
"Nantes": {
  "name": "Nantes",
  "ville_img": "img/villes/BBL_Nantes.jpg",
  "lat": 47.219102,
  "lng": -1.551132
}
```

## A full speaker example

```js
{
  "since": "2013-02-09",
  "name": "François Sarradin",
  "bio": "Consultant Java/Scala/&#955; | Manager technique capitalisation chez Ippon Technologies",
  "picture": "https://fr.gravatar.com/userimage/14188452/66f640699084b5d57856723e7e20505c.jpg?size=200",
  "websites": [
    {
      "name": "Web",
      "url": "http://kerflyn.wordpress.com/"
    }
  ],
  "location": "Paris, Ouest parisien (+ Nantes), remote",
  "sessions": [
    {
      "title": "A Web Framework in Scala from Scratch in One Hour",
      "abstract": "(live coding - en/fr) Discover Scala through the development of an efficient small tested Web framework.",
      "tags": [
        "Java",
        "Scala",
        "Programmation fonctionnelle",
        "Scrum",
        "Agilité"
      ],
      "lang": [
        "fr"
      ]
    },
    {
      "title": "Kata : un type Option en Java",
      "abstract": "(live coding) Tests unitaires et refactoring pour un type Option en Java",
      "tags": [
        "Java",
        "Scala",
        "Programmation fonctionnelle",
        "Scrum",
        "Agilité"
      ],
      "lang": [
        "fr"
      ]
    },
    {
      "title": "Une alternative à AOP ?",
      "abstract": "(poney / live coding / présentation) Découvrez quelle alternative la programmation fonctionnelle propose face à AOP (session jouée à Devoxx FR 2013 sous le titre \"FlatMap Zat Shit\")",
      "tags": [
        "Java",
        "Scala",
        "Programmation fonctionnelle",
        "Scrum",
        "Agilité"
      ],
      "lang": [
        "fr"
      ]
    },
    {
      "title": "Scrum Under Pressure",
      "abstract": "Découvrez Scrum, sa mise en place et les pratiques annexes de l'agilité à travers un véritable retour d'expérience qui ne vous laissera pas indifférent.",
      "tags": [
        "Java",
        "Scala",
        "Programmation fonctionnelle",
        "Scrum",
        "Agilité"
      ],
      "lang": [
        "fr"
      ]
    }
  ],
  "cities": [
    "Paris"
  ],
  "contacts": {
    "twitter": "fsarradin",
    "mail": "fsarradin@gmail.com"
  }
}
```
