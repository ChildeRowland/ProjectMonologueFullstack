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
      title: 'The Merchant of Venice',
      character: 'Launcelot',
      gender: "male",
      age: "adult",
      body: "Certainly my conscience will serve me to run from this Jew my master. The fiend is at mine elbow and tempts me, saying to me, 'Gobbo, Launcelot Gobbo, good Launcelot,' or 'good Gobbo,' or 'good Launcelot Gobbo -- use your legs, take the start, run away.' My conscience says, 'No. Take heed, honest Launcelot; take heed, honest Gobbo,' or as aforesaid, 'honest Launcelot Gobbo -- do not run; scorn running with thy heels.' Well, the most courageous fiend bids me pack. 'Fia!' says the fiend; 'away!' says the fiend. 'For the heavens, rouse up a brave mind,' says the fiend, 'and run.' Well, my conscience hanging about the neck of my heart says very wisely to me, 'My honest friend Launcelot, being an honest man's son' -- or rather 'an honest woman's son,' for indeed my father did something smack, something grow to; he had a kind of taste -- Well, my conscience says, 'Launcelot, budge not.' 'Budge,' says the fiend. 'Budge not,' says my conscience. 'Conscience,' say I, 'you counsel well.' 'Fiend,' say I, 'you counsel well.' To be ruled by my conscience, I should stay with the Jew my master who, God bless the mark, is a kind of devil; and to run away from the Jew, I should be ruled by the fiend who, saving your reverence, is the devil himself. Certainly the Jew is the very devil incarnation; And in my conscience, my conscience is but a kind of hard conscience to offer to counsel me to stay with the Jew. The fiend gives the more friendly counsel. I will run, fiend; my heels are at your commandment; I will run.",
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
      body: "I confess",
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
