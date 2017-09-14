![Main game area](docs/images/civitas3-min.jpg)

Description
===========

Civitas is an empire-building game written in Javascript with the help of the jQuery library.

Features
========

- Over 35 types of buildings, each intertwined in the chain of production.
- Custom climate zone, each with specific buildings.
- Global market, player can trade goods with other settlements.
- Army! Navy! Soldiers! Ships!
- Fame system that allows your city to level up via trades, conquers and special buildings.
- Prestige system that affects diplomacy.
- Each city in the game world is linked via a influence system that needs to be maintained for diplomacy to work.
- Random events that can change your diplomacy status with the other cities, give you coins or
random resources.
- Espionage, subvert cities, destroy buildings, sabotage.
- Ranking screen, where cities get ranked according to their status in the world.
- Declare war, propose alliances and pacts, ask other settlements to join your city, propose cease fire.

![Battles](docs/images/civitas17-min.jpg)

Missing
=======

- (IN PROGRESS) Battles!
- (IN PROGRESS) Heroes, unique classes and items, attributes.
- (NOT STARTED) Server component, no actual data is saved externally, only in your browser's localStorage.
- (IN PROGRESS) Jailer component that assures game data integrity (no cheating).
- (NOT STARTED) Any player interaction since no data is transmitted to the server component.
- (IN PROGRESS) Artificial Intelligence (AI) for computer-controlled cities.
- And many others. Stay tuned though.

Screenshots
===========

[Intro game](docs/images/civitas1-min.jpg)

[Main game area](docs/images/civitas3-min.jpg)

[Buildings screen](docs/images/civitas6-min.jpg)

[Storage space](docs/images/civitas7-min.jpg)

[Game Menu](docs/images/civitas2-min.jpg)

[World Map](docs/images/civitas15-min.jpg)

[Tavern, heroes and their items](docs/images/civitas4-min.jpg)

[Various buildings, costs, prerequisites](docs/images/civitas5-min.jpg)

[World Market trades](docs/images/civitas8-min.jpg)

[City Council](docs/images/civitas9-min.jpg)

[Diplomacy](docs/images/civitas11-min.jpg), [caravans](docs/images/civitas12-min.jpg), [spies](docs/images/civitas13-min.jpg), [armies and war](docs/images/civitas14-min.jpg)

[Battles](docs/images/civitas16-min.jpg), [more battles](docs/images/civitas17-min.jpg)

![Tavern, heroes and their items](docs/images/civitas4-min.jpg)

Playing
=======

In development, Civitas is using several assets that are copyrighted by Bluebyte, so I cannot redistribute them with the game. You can find a link to the said assets [in this issue](https://github.com/sizeofcat/civitas/issues/31#issuecomment-323738685). All the other game resources are freely distributed under the MIT license, same as the code.


## 1. With Docker

	$ docker build -t civitas .

	$ docker run --name civitas-dev -d -p 10082:80 civitas

And point your browser to `http://localhost:10082`.

## 2. Local

Choose an archive format from the Releases section, download and uncompress it. Point your browser to `index.html`, you don't need a game server to play.

Releases
========

- bleeding edge version - [.zip](https://github.com/sizeofcat/civitas/archive/master.zip) [.tar.gz](https://github.com/sizeofcat/civitas/archive/master.tar.gz)
- 0.2 (April 30, 2017) - [.zip](https://github.com/sizeofcat/civitas/archive/v0.2.zip) [.tar.gz](https://github.com/sizeofcat/civitas/archive/v0.2.tar.gz)
- 0.1 (January 20, 2017) - [.zip](https://github.com/sizeofcat/civitas/archive/v0.1.zip) [.tar.gz](https://github.com/sizeofcat/civitas/archive/v0.1.tar.gz)

License
=======

Civitas is written by sizeof(cat) <sizeofcat AT riseup DOT net> and distributed under the [MIT license](LICENSE).

Contributing
============

Pull requests are always welcome!

I am always thrilled to receive pull requests, and do my best to process them as fast as possible. Not sure if that typo is worth a pull request? Do it! I will probably appreciate it.

If your pull request is not accepted on the first try, don't be discouraged! If there's a problem with the implementation, hopefully you received feedback on what to improve.

Always sign your commits and make sure you read the [coding style](CODING-STYLE.md).

![World Map and City Council](docs/images/civitas10-min.jpg)

Source code
===========

Civitas is written using Javascript, has ~15000 lines of code, ~250Kb minified and can be [downloaded from GitHub.com](https://github.com/sizeofcat/civitas/archive/master.zip) or by using git to clone the repository:

`git clone git@github.com/sizeofcat/civitas.git`

Dependencies
============

- [jQuery 3.2.1](https://jquery.com/)
- [jQuery UI 1.11.2](https://jqueryui.com/)
- [jQuery Tipsy 1.0.0a](https://github.com/jaz303/tipsy)
- [jQuery scrollTo 1.4.14](https://github.com/flesler/jquery.scrollTo)
- [CryptoJS 3.1.9](https://github.com/brix/crypto-js)

Thanks
======

The `music/track1.mp3` song is named 'Glandula Pinealis' by Shatifax.