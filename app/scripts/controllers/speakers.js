'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('SpeakersCtrl', function ($scope, blurbService) {

    // make dependencies avilable to DOM
    $scope.blurb = blurbService;

    // spotlight effects
    $scope.filterClass = '';
    $scope.filterSpeakers = {
      byRole: function (role) {
        $scope.filterClass = 'filter-' + role;
      },
      resetRole: function () {
        $scope.filterClass = '';
      },
      byElement: function (event) {
        $scope.filterClass = 'filter-all';
        angular.element(event.currentTarget).addClass('selected');
      },
      resetElement: function (event) {
        $scope.filterClass = '';
        angular.element(event.currentTarget).removeClass('selected');
      }
    };

    $scope.speakers = [
      {
        name: 'Ali Zahid',
        title: 'Co-founder & COO, Vanhawks',
        twitter: 'https://twitter.com/alizhd',
        facebook: '',
        linkedin: '',
        link: 'https://www.vanhawks.com/',
        role: 'workshop',
        img: 'images/speakers/Ali-Zahid.jpg',
        blurb: ''
      },
      // {
      //   name: 'Aron Solomon',
      //   title: '',
      //   twitter: '',
      //   facebook: '',
      //   linkedin: '',
      //   link: '',
      //   role: 'tba',
      //   img: 'images/speakers/Aron-Solomon.png',
      //   blurb: ''
      // },
      // {
      //   name: 'Harvir Bansal',
      //   title: '',
      //   twitter: '',
      //   facebook: '',
      //   linkedin: '',
      //   link: '',
      //   role: 'tba',
      //   img: 'images/speakers/Harvir-Bansal.jpg',
      //   blurb: ''
      // },
      {
        name: 'Jean Luc David',
        title: 'API & Development Consultant, TouchTunes',
        twitter: 'https://twitter.com/jldavid',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Jean-Luc-David.jpg',
        blurb: '<p>Jean-Luc is a senior software developer & technology executive, specializing in web, mobile, and wearable technologies such as Google Glass. He’s a team player, having worked at both small startups and large corporations such as Microsoft and Yellow Pages Group Canada.</p>' +
          '<p>Jean-Luc\'s work has been featured on TechCrunch, Engadget, CNN, BetaKit, TechVibes, Wired, Mashable, New York Observer, MSN, Facebook\'s Official Blog, CTV News, CBC News, and the Montreal Gazette. He\'s been a speaker at events around the world, and has written five technical books and dozens of articles for Wiley Publishing, CNET, TechRepublic, and Builder.com.</p>'
      },
      {
        name: 'Joseph Wilson',
        title: 'Senior Strategist, Education - MaRS',
        twitter: 'https://twitter.com/joeatmars',
        facebook: '',
        linkedin: '',
        link: 'http://www.josephwilson.ca/',
        role: 'panelist',
        img: 'images/speakers/Joseph-Wilson.jpg',
        blurb: '<p>Joseph is currently working as an Education Advisor at  MaRS Discovery District, working with education technology entrepreneurs. He developed the Entrepreneur’s Toolkit Workshop Series, and consults on a wide range of educational programming.</p>' +
          '<p>He writes on topics of science, culture and city issues for NOW Magazine, the Globe and Mail, Spacing and Yonge Street. He has edited two books and written many academic papers in astronomy, education, entrepreneurship and innovation strategies. He has also appeared on CityTV, the Space Network, CBC, CTV and Talk TV.</p>'
      },
      {
        name: 'Kathryn Buczko',
        title: 'Account Executive, Twitter',
        twitter: 'https://twitter.com/kathrynbuczko',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'panelist',
        img: 'images/speakers/Kathryn-Buczko.jpg',
        blurb: ''
      },
      {
        name: 'Macy Kuang',
        title: '',
        twitter: 'https://twitter.com/macykuang',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Macy-Kuang.jpg',
        blurb: '<p>Macy Kuang is the Founder of Miaomiao Games. She is on the organizing committee for AndroidTO, the annual Android conference, organizer of the first Canadian Google Glass Hackathon, and a regular contributor to the Google Developer Group. Macy participated in the Google Glass Foundry in New York in February 2013 and is now a Google Glass Pioneer, working with developer versions of the hardware and associated APIs.</p>'
      },
      // {
      //   name: 'Marcus Daniels',
      //   title: '',
      //   twitter: '',
      //   facebook: '',
      //   linkedin: '',
      //   link: '',
      //   role: 'tba',
      //   img: 'images/speakers/Marcus-Daniels.jpg',
      //   blurb: ''
      // },
      {
        name: 'Mark Zimmerman',
        title: 'Senior Advisor & CIO, MaRS Discovery District',
        twitter: 'https://twitter.com/markzim',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Mark-Zimmerman.jpg',
        blurb: '<p>Mark Zimmerman has been working in the information and communication technology industry for more than 15 years. He’s worked with some of the biggest companies in the industry, but he’s also worked with very early stage start-ups—so he knows what it’s like to be in an entrepreneur’s shoes. Mark uses his experience to help MaRS clients in the areas of B2B enterprise software and SaaS business models as well as security and privacy.</p>' +
          '<p><em>“I love new ideas—they get me excited every morning and keep me going throughout the day. At MaRS, I get to see new ideas grow, evolve, change shape and, eventually, become real businesses. It’s a fascinating place to be.”<em></p>'
      },
      {
        name: 'Michael Hyatt',
        title: 'Executive Chairman and Co-Founder, Bluecat Networks, Dragon’s Den',
        twitter: 'https://twitter.com/mhyattbluecat',
        facebook: '',
        linkedin: '',
        link: 'http://www.cbc.ca/dragonsden/nextgenden',
        role: 'keynote',
        img: 'images/speakers/Michael-Hyatt.png',
        blurb: '<p>Michael Hyatt is the Executive Chairman and Co-Founder of Bluecat. He is a weekly business commentator on CBC News Network and one of the new "Dragons" on CBC\'s Next Gen Den - Dragon\'s Den. Michael is also a member of the G7 Team at University of Toronto\'s Creative Destruction Lab and on the CEO Board of Advisors at Georgian Partners. Michael also co-founded Dyadem, a highly successful software company that was acquired by IHS (NYSE: IHS). He is also a finalist in Ernst & Young\'s Entrepreneur of the Year Award, a recipient of the Top 40 Under 40™ Award and Chairs his families\' charitable foundation.</p>'
      },
      {
        name: 'Sarah Stockdale',
        title: 'Growth, Tilt',
        twitter: 'https://twitter.com/skstock',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Sarah-Stockdale.jpg',
        blurb: ''
      },
      {
        name: 'Tom Emrich',
        title: 'WeAreWearables',
        twitter: 'https://twitter.com/tomemrich',
        facebook: '',
        linkedin: '',
        link: 'http://www.wearewearables.com/',
        role: 'keynote',
        img: 'images/speakers/Tom-Emrich.jpg',
        blurb: '<p>As a writer, consultant and community builder, Tom Emrich uses his passion for new technologies to act as a catalyst to bring on the future. He founded We Are Wearables, an organization that rallies the tech community together to learn, discuss and celebrate the wearable tech space in order to foster adoption and facilitate innovation. We Are Wearables currently has chapters in Toronto and Chicago. Tom writes regularly about wearables and other emerging technologies for MobileSyrup, BetaKit and Designers of Things. He also works with startups, and large organizations as an advisor and consultant offering assistance on product development, marketing and organizational strategy.</p>'
      }
    ];

  });
