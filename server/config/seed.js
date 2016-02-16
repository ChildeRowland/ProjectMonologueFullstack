/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Monologue from '../api/monologue/monologue.model';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Monologue.find({}).removeAsync()
  .then(() => {
    Monologue.createAsync({
      playwright: 'William Shakespeare',
      title: 'Romeo and Juliet',
      character: 'Romeo',
      gender: "male",
      age: "young adult",
      body: "But soft! What light through yonder window breaks? \nIt is the East, and Juliet is the sun! \nArise, fair sun, and kill the envious moon, \nWho is already sick and pale with grief \nThat thou her maid art far more fair than she. \nBe not her maid, since she is envious. \nHer vestal livery is but sick and green, \nAnd none but fools do wear it. Cast it off. \nIt is my lady; O, it is my love! \nO that she knew she were! \nShe speaks, yet she says nothing. What of that? \nHer eye discourses; I will answer it. \nI am too bold; 'tis not to me she speaks. \nTwo of the fairest stars in all the heaven, \nHaving some business, do entreat her eyes \nTo twinkle in their spheres till they return. \nWhat if her eyes were there, they in her head? \nThe brightness of her cheek would shame those stars \nAs daylight doth a lamp; her eyes in heaven \nWould through the airy region stream so bright \nThat birds would sing and think it were not night. \nSee how she leans her cheek upon her hand! \nO that I were a glove upon that hand, \nThat I might touch that cheek!",
      chapter: {
        act: '1',
        scene: '1'
      },
      tags: ['classical', 'Shakespearean'],
      meta: {
        curated: false
        // date: { type: Date.now }
      }
    }, {
      playwright: 'William Shakespeare',
      title: "All's Well That Ends Well",
      character: 'Helena',
      gender: "female",
      age: "adult",
      body: "I confess \nHere on my knee before high heaven and you, \nThat before you, and next unto high heaven, \nI love your son. \nMy friends were poor but honest; so's my love. \nBe not offended, for it hurts not him \nThat he is loved of me. I follow him not \nBy any token of presumptuous suit, \nNor would I have him till I do deserve him; \nYet never know how that desert should be. \nI know I love in vain, strive against hope; \nYet in this captious and intensible sieve \nI still pour in the waters of my love \nAnd lack not to lose still. Thus, Indian-like, \nReligious in mine error, I adore \nThe sun that looks upon his worshipper \nBut knows of him no more. My dearest madam, \nLet not your hate encounter with my love, \nFor loving where you do; but if yourself, \nWhose agèd honor cites a virtuous youth, \nDid ever in so true a flame of liking, \nWish chastely and love dearly, that your Dian \nWas both herself and Love, O, then give pity \nTo her whose state is such that cannot choose \nBut lend and give where she is sure to lose; \nThat seeks not to find that her search implies, \nBut, riddle-like, lives sweetly where she dies.",
      chapter: {
        act: '1',
        scene: '1'
      },
      tags: ['classical', 'Shakespearean'],
      meta: {
        curated: false
        // date: { type: Date.now }
      }
    }, {
      playwright: 'Tennessee Williams',
      title: "The Glass Menagerie",
      character: 'Amanda Wingfield',
      gender: "female",
      age: "adult",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque massa, auctor eget purus nec, condimentum porttitor dolor. Pellentesque faucibus quam sed dapibus consectetur. Praesent ullamcorper maximus sapien sit amet sagittis. Praesent ac nunc eget lacus mattis gravida elementum quis massa. Cras blandit luctus sapien, vitae scelerisque urna aliquam eu. Aenean quis malesuada ipsum. Duis at lectus aliquet, elementum lectus at, interdum sapien. Etiam vitae eros pellentesque, aliquam sem in, pellentesque arcu. Etiam maximus velit turpis, et rutrum mi sollicitudin a.",
      chapter: {
        act: '1',
        scene: '1'
      },
      setting: ['St. Louis', 'Missouri', '1930s'],
      tags: ['depression', 'southern', 'mother'],
      meta: {
        curated: false
        // date: { type: Date.now }
      }
    }, {
      playwright: 'Tony Kushner',
      title: "Angels in America",
      character: 'Harper Amaty Pitt',
      gender: "female",
      age: "adult",
      body: 'People who are lonely, people left alone, sit talking nonsense to the air, imagining… beautiful systems dying, old fixed orders spiraling apart…\nWhen you look at the ozone layer, from outside, from a spaceship, it looks like a pale blue halo, a gentle, shimmering aureole encircling the atmosphere encircling the earth. Thirty miles above our heads, a thin layer of three-atom oxygen molecules, product of photosynthesis, which explains the fussy vegetable preference for visible light, its rejection of darker rays and emanations. Danger from without. It’s a kind of gift, from God, the crowning touch to the creation of the world; guardian angels, hands linked, make a spherical net, a blue-green nesting orb, a shell of safety for life itself. But everywhere, things are collapsing, lies surfacing, systems of defense giving way… This is why, Joe, this is why I shouldn’t be left alone.\nI’d like to go traveling. Leave you behind to worry. I’ll send postcards with strange stamps and tantalizing messages on the back. "Later maybe." "Nevermore…"',
      chapter: {
        act: '1',
        scene: '3'
      },
      setting: ['Harper\'s Apartment', 'Brooklyn', 'fall', '1985'],
      tags: ['drugs', 'God'],
      meta: {
        curated: false
        // date: { type: Date.now }
      }
    });
  });

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
