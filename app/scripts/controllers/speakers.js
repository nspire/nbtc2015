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
        name: 'Sarah Stockdale',
        title: 'Growth - Tilt',
        twitter: 'https://twitter.com/skstock',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Sarah-Stockdale.jpg',
        blurb: '<p>Sarah is the Growth Manager for Tilt Canada, responsible for overseeing all growth efforts for Tilt’s international expansion to Canada. Before joining Tilt, Sarah was one of the first Growth Marketers at Wave, a Canadian venture backed startup.</p>' + '<p>Sarah is also the co-founder  of PageNerd (in beta); a tool that helps marketers create beautiful design. She is also the Director of Speakers for TEDxDistilleryDistrictWomen, and a Nuance Leadership professional speaker. Sarah is passionate about technology, and creating safe spaces for women in STEM.</p>'
      },
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
      {
        name: 'Jean Luc David',
        title: 'API & Development Consultant, TouchTunes',
        twitter: 'https://twitter.com/jldavid',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'panelist',
        img: 'images/speakers/Jean-Luc-David.jpg',
        blurb: '<p>Jean-Luc is a senior software developer & technology executive, specializing in web, mobile, and wearable technologies such as Google Glass. He’s a team player, having worked at both small startups and large corporations such as Microsoft and Yellow Pages Group Canada.</p>' +
          '<p>Jean-Luc\'s work has been featured on TechCrunch, Engadget, CNN, BetaKit, TechVibes, Wired, Mashable, New York Observer, MSN, Facebook\'s Official Blog, CTV News, CBC News, and the Montreal Gazette. He\'s been a speaker at events around the world, and has written five technical books and dozens of articles for Wiley Publishing, CNET, TechRepublic, and Builder.com.</p>'
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
        name: 'Tom Emrich',
        title: 'WeAreWearables',
        twitter: 'https://twitter.com/tomemrich',
        facebook: '',
        linkedin: '',
        link: 'http://www.wearewearables.com/',
        role: 'keynote',
        img: 'images/speakers/Tom-Emrich.jpg',
        blurb: '<p>As a writer, consultant and community builder, Tom Emrich uses his passion for new technologies to act as a catalyst to bring on the future. He founded We Are Wearables, an organization that rallies the tech community together to learn, discuss and celebrate the wearable tech space in order to foster adoption and facilitate innovation.  We Are Wearables currently has chapters in Toronto and Chicago. Tom writes regularly about wearables and other emerging technologies for MobileSyrup, BetaKit and Designers of Things. He also works with startups, and large organizations as an advisor and consultant offering assistance on product development, marketing and organizational strategy.</p>'
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
        name: 'Daniel Rodic',
        title: 'Co-Founder & Head of Network Growth - Exact Media',
        twitter: 'https://twitter.com/danielrodic',
        facebook: '',
        linkedin: 'https://www.linkedin.com/in/danielrodic',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Daniel-Rodic.jpg',
        blurb: '<p>Daniel Rodic is the Co-Founder of Exact Media, his third company in the marketing and advertising industry. Exact Media\'s mission is to help people experience the world\'s greatest brands in the moments that matter. World-class brands owned by companies like Procter & Gamble, L\'Oréal, Unilever and Johnson & Johnson use Exact Media\'s Smart Sampling platform, to deliver their products to consumers in their home, alongside a contextually relevant online purchase.</p>' +
          '<p>Prior to starting Exact Media, Daniel was Managing Director of Luxe Box, which was one of the largest eCommerce subscription services in Canada. During his tenure, it was the targeted sampling solution of choice for prestige brands owned by L\'Oréal, Estée Lauder, LVMH, Coty and Procter & Gamble. Daniel\'s first company, DineWithMe, was a mobile marketing solution for restaurants, which was funded by The Next 36, a program backed by some of the wealthiest entrepreneurs and business leaders in North America.</p>' +
          '<p>In his talk, "Building Relationships by Adding Value", Daniel will bust the myth that just because you are young and inexperienced, doesn\'t mean you cannot add value to others who are more senior, experienced or successful in their careers. He will share his thoughts and some tools on how you as a young person can add value to others, helping you unlock new career or business opportunities by simply being helpful to everyone you meet.'
      },
      {
        name: 'Kim Warburton',
        title: 'Vice President Communications & Public Affairs - GE Canada',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'keynote',
        img: 'images/speakers/Kim-Warburton.jpg',
        blurb: '<p>Kim Warburton is Vice President Communications and Public Affairs, GE Canada and a member of the National Executive Team.  In this role she has oversight for the company’s brand, communications, public affairs and community investment.   Most recently, Kim has led the company’s “Shaping Economic Growth in Canada’s Remote Communities”, initiative including national roundtables, a business survey and final report. Kim has over 20 years of experience in public affairs, communications and government relations.  Prior to joining GE Canada, she was Director, Government Relations and Community Economic Development at Bell Canada.  Kim worked in the media industry for 10-years including marketing, communications and public affairs positions with Viacom Outdoor in Toronto.  She also worked with the government of Ontario, where she held progressively responsible positions in a number of Ministries with a focus on urban and regional planning, skilled trades and the environment.</p>' +
          '<p>An active volunteer, Kim’s community leadership includes: Past Chair of the Trillium Health Centre Foundation and current Board and Executive Committee member, Chair of the Mississauga Economic Development Advisory Committee, and Director of Actua, a national charitable program delivering science and technology programs to youth including Aboriginal outreach.</p>'
      },
      {
        name: 'Sarah Prevette',
        title: 'Co-Founder & Managing Partner - BrandProject',
        twitter: 'https://twitter.com/SarahPrevette',
        facebook: '',
        linkedin: 'https://www.linkedin.com/in/sarahprevette',
        link: 'http://sarahprevette.com',
        role: 'keynote',
        img: 'images/speakers/Sarah-Prevette.jpg',
        blurb: '<p>SARAH PREVETTE has a long history of innovative product development. A serial entrepreneur, she was the founder of well-known online properties Sprouter and BetaKit (both of which were acquired) and the co-founder of BrandProject LP – an investment firm that invests in and works with early-stage startups. Inc Magazine named her one of North America’s top entrepreneurs and Canadian Business declared her one of the country’s top 20 “power elite.” She is an active board member of several growing companies and a passionate advocate for meaningful innovation.</p>'
      },
      {
        name: 'Avi Pollock',
        title: 'Vice President Innovation & Strategic Planning - RBC',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Avi-Pollock.jpg',
        blurb: '<p>Avi Pollock has more than 20 years of experience as both an entrepreneur and intrapreneur.  He is considered an enterprise innovation and change leader with strong business and technology acumen. He has a strong track record of successfully building early-stage companies and implementing transformational initiatives in large, complex, multi-stakeholder organizations.</p>' +
          '<p>As RBC\’s Vice President, Innovation and Strategic Planning, Avi leads a team of 30 and is the lead strategist for RBC\’s global Technology and Operations (T&O) organization.  He also spearheaded the creation and rollout of RBC\’s enterprise social network - branded RBC Connect. His Applied Innovation team has an enterprise-wide mandate to stimulate innovative activity by identifying and validating emerging technologies and opportunities that have the potential to drive client value and differentiate RBC from its competitors.' +
          '<p>Prior to joining RBC, Avi held executive roles in sales, business operations, and acquisition strategy to technology companies in start-up and growth phases. He previously held the position of EVP, Professional Services for a TSX-listed technology company.</p>' +
          '<p>Avi is a frequent speaker and interview guest on topics including: Building an innovative culture, Creating a social enterprise, Mobile commerce, and The Future of the CIO</p>' +
          '<p>He is also active in charitable and community causes, including: Hillel of Greater Toronto, JDRF, Public Service Advisory Board for Canada\'s Networks of Centres of Excellence, RBC\'s Social Finance initiative</p>' +
          '<p>Avi has a Bachelors Degree in Political Science from University of Western Ontario, is a graduate of the joint LLB-MBA program at York University\'s Osgoode Hall Law School and Schulich School of Business. Avi resides in Toronto, Canada with his wife and two sons.</p>'
      },
      {
        name: 'Thea Earl',
        title: 'Business Development Manager - Shopify',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Thea-Earle.jpg',
        blurb: '<p>Thea is a Business Development manager at Shopify, aligning key technology partners in the software as service space. Since joining Shopify two years ago, Thea has been involved with multiple referral and reseller partnerships spanning North America, the UK, and Asia Pacific. In her spare time she enjoys running along the canal in downtown Ottawa, which is partially fuelled by her love of chocolate.</p>'
      },
      {
        name: 'Michael Katchen',
        title: 'Founder & CEO of Wealthsimple',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Michael-Katchen.png',
        blurb: '<p>Michael Katchen is the founder and CEO of Wealthsimple, Canada\’s fastest growing online investment manager. His vision is to make smart, simple investing accessible to every Canadian, regardless of age or net worth. Michael is an entrepreneur with a passion for investing. Previously, he led marketing at 1000memories, a Silicon Valley-based startup that was acquired by Ancestry.com in 2012. He returned to Toronto in 2013 to work alongside the best minds in the investment industry to launch Wealthsimple. He won his first investment challenge at 12 years old and consulted for financial institutions with McKinsey & Company when he graduated university. He was recently listed as an "Industry Mover" by the Financial Post and one of the 500 people that will define the next 12 months by Askmen.</p>'
      },
      {
        name: 'David Rose',
        title: 'Associate Director Graduate Programs, Conrad Business, Entrepreneurship & Technology Centre',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/DavidRose.jpg',
        blurb: '<p>David Rose is the Associate Director Graduate Programs at the University of Waterloo’s Conrad Business, Entrepreneurship & Technology Centre where he also teaches undergraduate courses on commercialization and entrepreneurship. Prior to joining Conrad in 2014 he was a Lecturer in the School of Business & Economics at Wilfrid Laurier University, teaching a variety of marketing and strategy courses. Prior to his university career, David was an entrepreneur and a marketing professional in multiple industries.  Since 2006, he has also worked on his own technology start-up, Listen Corporation. He has a BMath from University of Waterloo and an MBA from Wilfrid Laurier University.</p>'
      },
      {
        name: 'Karin Schmidlin',
        title: 'Manager, Virtual Incubation Program - Conrad Business, Entrepreneurship and Technology Center',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/KarinSchmidlin.jpg',
        blurb: '<p>Karin Schmidlin is the manager of the virtual incubation program at the University of Waterloo\'s Conrad Business, Entrepreneurship and Technology Center. She also teaches User Experience (UX) and Applied Leadership at Waterloo’s digital media campus in Stratford. She is a voracious reader, is passionate about teaching and pretty much runs on black coffee.</p>'
      },
      {
        name: 'Margaret Cichosz',
        title: 'Co-founder & CEO, Apartmint',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/MargaretCichosz.jpg',
        blurb: '<p>Margaret Cichosz graduated from the University of Waterloo with an undergraduate degree in Political Science and Business Co-op and a Master of Business, Entrepreneurship and Technology. Margaret has experience in management, business development and sales, and has been working in the tech industry for the last 5 years. She previously co-founded a tech startup, raised angel funding and went on to co-found and become the CEO of Apartmint, Canada’s newest housing platform.</p>'
      },
      {
        name: 'Harvir Bansal',
        title: 'Associate Professor - Conrad Business, Entrepreneurship and Technology Center',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/Harvir-Bansal.jpg',
        blurb: '<p>Harvir Bansal is an Associate Professor at the Conrad Business, Entrepreneurship and Technology Centre where he teaches Marketing Management and Marketing Strategies for New Technology-based Ventures. He holds a PhD in Marketing and Operations Research from Queen’s University. Harvir also is the Chief Research Officer and Executive VP, Analytics at b3Intelligence.</p>'
      },
      {
        name: 'Ashna Mankotia',
        title: 'UX Research Assistant - Conrad Business, Entrepreneurship and Technology Center',
        twitter: '',
        facebook: '',
        linkedin: '',
        link: '',
        role: 'workshop',
        img: 'images/speakers/AshnaMankotia.jpg',
        blurb: '<p>Ashna Mankotia is the UX Research Assistant at Conrad’s virtual incubation program. She is a Global Business and Digital Arts student at the University of Waterloo’s digital media campus in Stratford, passionate about design, marketing and project management in tech spaces. Ashna has worked at the Conrad Centre for a little over a year and loves being in the centre of Waterloo’s growing innovation bubble. One day she hopes to visit every country in the world.</p>'
      }
    ];

  });
