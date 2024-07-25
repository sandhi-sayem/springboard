## Tasks 📋

## Basic Tasks

## 1. **List All Films**: Retrieve the titles of all films available in SWAPI.

## Query

```GraphQl
query Films {
  allFilms {
    films {
      title
    }
  }
}
```

## Response

```JSON
{
  "data": {
    "allFilms": {
      "films": [
        {
          "title": "A New Hope"
        },
        {
          "title": "The Empire Strikes Back"
        },
        {
          "title": "Return of the Jedi"
        },
        {
          "title": "The Phantom Menace"
        },
        {
          "title": "Attack of the Clones"
        },
        {
          "title": "Revenge of the Sith"
        }
      ]
    }
  }
}
```

## 2. ** Fetch a Specific Character **: Get the name of a specific character using their unique ID.

## Query

```GraphQl
query Person($personId: ID) {
  person(id: $personId) {
    name
  }
}
```

## Variable

```JSON
{
  "personId": "cGVvcGxlOjUx"
}
```

## Response

```JSON
{
  "data": {
    "person": {
      "name": "Mace Windu"
    }
  }
}
```

## 3. **Explore Planets**: Get the names of the first 5 planets in the Star Wars universe.

## Query

```GraphQl
query Planets($first: Int) {
  allPlanets(first: $first) {
    planets {
      name
    }
  }
}
```

## Variables

```JSON
{
  "first": 5
}
```

## Response

```JSON
{
  "data": {
    "allPlanets": {
      "planets": [
        {
          "name": "Tatooine"
        },
        {
          "name": "Alderaan"
        },
        {
          "name": "Yavin IV"
        },
        {
          "name": "Hoth"
        },
        {
          "name": "Dagobah"
        }
      ]
    }
  }
}
```

## 4. ** Starships Information **: Fetch names and models of 3 starships.

## Query

```GraphQl
query AllStarships($first: Int) {
  allStarships(first: $first) {
    starships {
      name
      model
    }
  }
}
```

## Variables

```JSON
{
  "first": 3
}
```

## Response

```JSON
{
  "data": {
    "allStarships": {
      "starships": [
        {
          "name": "CR90 corvette",
          "model": "CR90 corvette"
        },
        {
          "name": "Star Destroyer",
          "model": "Imperial I-class Star Destroyer"
        },
        {
          "name": "Sentinel-class landing craft",
          "model": "Sentinel-class landing craft"
        }
      ]
    }
  }
}
```

## Intermediate Tasks

## 1. ** Character and Their Starships **: For each of the first 5 characters, list the names of starships they've piloted.

## Query

```GraphQl
query AllPeople($first: Int) {
  allPeople(first: $first) {
    people {
      name
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}
```

## Variables

```JSON
{
  "first": 5
}
```

## Response

```JSON
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "starshipConnection": {
            "starships": [
              {
                "name": "X-wing"
              },
              {
                "name": "Imperial shuttle"
              }
            ]
          }
        },
        {
          "name": "C-3PO",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "R2-D2",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "Darth Vader",
          "starshipConnection": {
            "starships": [
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "name": "Leia Organa",
          "starshipConnection": {
            "starships": []
          }
        }
      ]
    }
  }
}
```

## 2. ** Species and Their Languages **: Retrieve names and languages of 5 species.

## Query

```GraphQl
query AllSpecies($first: Int) {
  allSpecies(first: $first) {
    species {
      name
      language
    }
  }
}
```

## Variables

```JSON
{
  "first": 5
}
```

## Response

```JSON
{
  "data": {
    "allSpecies": {
      "species": [
        {
          "name": "Human",
          "language": "Galactic Basic"
        },
        {
          "name": "Droid",
          "language": "n/a"
        },
        {
          "name": "Wookie",
          "language": "Shyriiwook"
        },
        {
          "name": "Rodian",
          "language": "Galatic Basic"
        },
        {
          "name": "Hutt",
          "language": "Huttese"
        }
      ]
    }
  }
}
```

## 3. ** Planets and Their Climates **: Query for the names and climates of 5 planets.

## Query

```GraphQl
query AllPlanets($first: Int) {
  allPlanets(first: $first) {
    planets {
      name
      climates
    }
  }
}
```

## Variables

```JSON
{
  "first": 5
}
```

## Response

```JSON
{
  "data": {
    "allPlanets": {
      "planets": [
        {
          "name": "Tatooine",
          "climates": [
            "arid"
          ]
        },
        {
          "name": "Alderaan",
          "climates": [
            "temperate"
          ]
        },
        {
          "name": "Yavin IV",
          "climates": [
            "temperate",
            "tropical"
          ]
        },
        {
          "name": "Hoth",
          "climates": [
            "frozen"
          ]
        },
        {
          "name": "Dagobah",
          "climates": [
            "murky"
          ]
        }
      ]
    }
  }
}
```

## 4. ** Vehicles and Their Costs **: Get names and cost in credits for 3 vehicles.

## Query

```GraphQl
query AllVehicles($first: Int) {
  allVehicles(first: $first) {
    vehicles {
      name
      costInCredits
    }
  }
}
```

## Variables

```JSON
{
"first": 3
}
```

## Response

```JSON
{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Sand Crawler",
          "costInCredits": 150000
        },
        {
          "name": "T-16 skyhopper",
          "costInCredits": 14500
        },
        {
          "name": "X-34 landspeeder",
          "costInCredits": 10550
        }
      ]
    }
  }
}
```

## Advanced Tasks

## 1. ** Characters in a Specific Film **: List all characters appearing in a given film by ID.

## Query

```GraphQl
query Film($filmId: ID) {
  film(id: $filmId) {
    title
    characterConnection {
      characters {
        name
      }
    }
  }
}
```

## Variables

```JSON
{
  "filmId": "ZmlsbXM6MQ=="
}
```

## Response

```JSON
{
  "data": {
    "film": {
      "title": "A New Hope",
      "characterConnection": {
        "characters": [
          {
            "name": "Luke Skywalker"
          },
          {
            "name": "C-3PO"
          },
          {
            "name": "R2-D2"
          },
          {
            "name": "Darth Vader"
          },
          {
            "name": "Leia Organa"
          },
          {
            "name": "Owen Lars"
          },
          {
            "name": "Beru Whitesun lars"
          },
          {
            "name": "R5-D4"
          },
          {
            "name": "Biggs Darklighter"
          },
          {
            "name": "Obi-Wan Kenobi"
          },
          {
            "name": "Wilhuff Tarkin"
          },
          {
            "name": "Chewbacca"
          },
          {
            "name": "Han Solo"
          },
          {
            "name": "Greedo"
          },
          {
            "name": "Jabba Desilijic Tiure"
          },
          {
            "name": "Wedge Antilles"
          },
          {
            "name": "Jek Tono Porkins"
          },
          {
            "name": "Raymus Antilles"
          }
        ]
      }
    }
  }
}
```

## 2. ** Multi - Film Characters **: Find characters that appear in more than one film.

## Query

```GraphQl
query People {
  allPeople {
    people {
      name
      filmConnection {
        totalCount
      }
    }
  }
}
```

## Variables

## Response

```JSON
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "C-3PO",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "R2-D2",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "Darth Vader",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Leia Organa",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Owen Lars",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Beru Whitesun lars",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "R5-D4",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Biggs Darklighter",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Obi-Wan Kenobi",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "Anakin Skywalker",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Wilhuff Tarkin",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Chewbacca",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Han Solo",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Greedo",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Jabba Desilijic Tiure",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Wedge Antilles",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Jek Tono Porkins",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Yoda",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Palpatine",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Boba Fett",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "IG-88",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Bossk",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Lando Calrissian",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Lobot",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ackbar",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Mon Mothma",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Arvel Crynyd",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Wicket Systri Warrick",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Nien Nunb",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Qui-Gon Jinn",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Nute Gunray",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Finis Valorum",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Padmé Amidala",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Jar Jar Binks",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Roos Tarpals",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Rugor Nass",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ric Olié",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Watto",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Sebulba",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Quarsh Panaka",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Shmi Skywalker",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Darth Maul",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Bib Fortuna",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ayla Secura",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Ratts Tyerel",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dud Bolt",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Gasgano",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ben Quadinaros",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Mace Windu",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Ki-Adi-Mundi",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Kit Fisto",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Eeth Koth",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Adi Gallia",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Saesee Tiin",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Yarael Poof",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Plo Koon",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Mas Amedda",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Gregar Typho",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Cordé",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Cliegg Lars",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Poggle the Lesser",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Luminara Unduli",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Barriss Offee",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dormé",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dooku",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Bail Prestor Organa",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Jango Fett",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Zam Wesell",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dexter Jettster",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Lama Su",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Taun We",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Jocasta Nu",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "R4-P17",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Wat Tambor",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "San Hill",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Shaak Ti",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Grievous",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Tarfful",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Raymus Antilles",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Sly Moore",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Tion Medon",
          "filmConnection": {
            "totalCount": 1
          }
        }
      ]
    }
  }
}
```

## 3. ** Aggregate Film Statistics **: Calculate the total number of characters across all films.

## Query

```GraphQl
query AllPeople {
  allPeople {
    totalCount
  }
}
```

## Variables

## Response

```JSON
{
  "data": {
    "allPeople": {
      "totalCount": 82
    }
  }
}
```

## Complex Tasks

## 1. ** Full Character Profiles **: Compile a full profile for a given character, including their films, starships, and homeworld.

## Query

```GraphQl
query Person($personId: ID) {
  person(id: $personId) {
    name
    birthYear
    gender
    homeworld {
      name
    }
    species {
      name
    }
    filmConnection {
      films {
        title
      }
    }
    starshipConnection {
      starships {
        name
        model
      }
    }
    vehicleConnection {
      vehicles {
        name
        model
      }
    }
  }
}
```

## Variables

```JSON
{
  "personId": "cGVvcGxlOjUx"
}
```

## Response

```JSON
{
  "data": {
    "person": {
      "name": "Mace Windu",
      "birthYear": "72BBY",
      "gender": "male",
      "homeworld": {
        "name": "Haruun Kal"
      },
      "species": null,
      "filmConnection": {
        "films": [
          {
            "title": "The Phantom Menace"
          },
          {
            "title": "Attack of the Clones"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      },
      "starshipConnection": {
        "starships": []
      },
      "vehicleConnection": {
        "vehicles": []
      }
    }
  }
}
```

## 2. ** Link Characters with Their Planets **: Query the first 5 characters, including the name and population of their homeworld.

## Query

```GraphQl
query AllPeople($first: Int) {
  allPeople(first: $first) {
    people {
      name
      homeworld {
        name
        population
      }
    }
  }
}
```

## Variables

```JSON
{
  "first": 5
}
```

## Response

```JSON
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "C-3PO",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "R2-D2",
          "homeworld": {
            "name": "Naboo",
            "population": 4500000000
          }
        },
        {
          "name": "Darth Vader",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "Leia Organa",
          "homeworld": {
            "name": "Alderaan",
            "population": 2000000000
          }
        }
      ]
    }
  }
}
```

## 3. ** Vehicles, Their Pilots, and Pilots' Species**: For the first 3 vehicles, list their names, pilots, and the species of those pilots.

## Query

```GraphQl
query AllVehicles($first: Int) {
  allVehicles(first: $first) {
    vehicles {
      name
      model
      pilotConnection {
        pilots {
          name
          species {
            name
          }
        }
      }
    }
  }
}
```

## Variables

```JSON
{
  "first": 3
}
```

## Response

```JSON
{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Sand Crawler",
          "model": "Digger Crawler",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "T-16 skyhopper",
          "model": "T-16 skyhopper",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "X-34 landspeeder",
          "model": "X-34 landspeeder",
          "pilotConnection": {
            "pilots": []
          }
        }
      ]
    }
  }
}
```

## 4. ** Films and Their Associated Entities **: For the first 3 films, list all related characters, planets, and starships.

## Query

```GraphQl
query AllFilms($first: Int) {
  allFilms(first: $first) {
    films {
      title
      releaseDate
      characterConnection {
        characters {
          name
        }
      }
      planetConnection {
        planets {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}
```

## Variables

```JSON
{
  "first": 3
}
```

## Response

```JSON
{
  "data": {
    "allFilms": {
      "films": [
        {
          "title": "A New Hope",
          "releaseDate": "1977-05-25",
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Owen Lars"
              },
              {
                "name": "Beru Whitesun lars"
              },
              {
                "name": "R5-D4"
              },
              {
                "name": "Biggs Darklighter"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Wilhuff Tarkin"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Greedo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Jek Tono Porkins"
              },
              {
                "name": "Raymus Antilles"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Alderaan"
              },
              {
                "name": "Yavin IV"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Sentinel-class landing craft"
              },
              {
                "name": "Death Star"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "title": "The Empire Strikes Back",
          "releaseDate": "1980-05-17",
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "IG-88"
              },
              {
                "name": "Bossk"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Lobot"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Hoth"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Bespin"
              },
              {
                "name": "Ord Mantell"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Slave 1"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              }
            ]
          }
        },
        {
          "title": "Return of the Jedi",
          "releaseDate": "1983-05-25",
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Ackbar"
              },
              {
                "name": "Mon Mothma"
              },
              {
                "name": "Arvel Crynyd"
              },
              {
                "name": "Wicket Systri Warrick"
              },
              {
                "name": "Nien Nunb"
              },
              {
                "name": "Bib Fortuna"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Endor"
              },
              {
                "name": "Naboo"
              },
              {
                "name": "Coruscant"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              },
              {
                "name": "Calamari Cruiser"
              },
              {
                "name": "A-wing"
              },
              {
                "name": "B-wing"
              }
            ]
          }
        }
      ]
    }
  }
}
```
