var bio = {
  name: 'David Villarreal',
  role: 'Software Engineer',

  contacts: {
    mobile: '+52 1 3316047044',
    email: 'steadypathapp@gmail.com',
    github: 'Phaze1D',
    location: 'Zapopan, Jalisco, Mexico'
  },

  welcomeMessage: `Thanks for visiting my Interactive Resume. My name is David Villarreal and I'm a Software Engineer`,

  skills: [
    'Frontend',
    'Backend',
    'Databases'
  ],

  biopic: 'images/fry.jpg',
  display: bioDisplay
}

var education = {

  schools: [
    {
      name: 'Santa Monica College',
      location: 'Santa Monica,  CA,  USA',
      degree: 'Dropout',
      majors: ['Computer Science'],
      dates: 'Nov 29, 2011 - July 02, 2014',
      url: 'https://www.smc.edu'
    },
  ],

  onlineCourses: [
    {
      title: 'Introduction to Algorithms',
      school: 'MIT',
      dates: 'July 28, 2013 - August 25, 2013',
      url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/'
    },
    {
      title: 'Mathematics for Computer Science',
      school: 'MIT',
      dates: 'August 01, 2012 - September 25, 2012',
      url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/'
    },
    {
      title: 'Artificial Intelligence',
      school: 'MIT',
      dates: 'November 01, 2016 - Jan 15, 2017',
      url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/'
    },
    {
      title: 'Introduction to Machine Learning',
      school: 'Udacity',
      dates: 'Jan 15, 2017 - Feb 01, 2017',
      url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
    },
    {
      title: 'Full Stack Web Developer Nanodegree',
      school: 'Udacity',
      dates: 'Feb 15, 2017 - In Progress',
      url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
    },
    {
      title: 'Front-End Web Developer Nanodegree',
      school: 'Udacity',
      dates: 'Feb 15, 2017 - In Progress',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ],

  display: educationDisplay
}


var work = {

  jobs: [
    {
      employer: 'Vida Flor',
      title: 'Fullstack Engineer',
      location: 'Zapopan ,Jalisco ,Mexico',
      dates: 'Nov 2014 - Dec 2016',
      url: 'https://bellezaorganica.com.mx/',
      description: `Vida Flor is an organic beauty company that first hire me to help them build a ecommerce website.
                After finishing the website they ask me if I could stay full time. I manage their database and
                created a Point of Sales system to help them with organize all there sells and inventory. I also used
                Micorsoft Access to create reports about sells and product inventory.`
    }
  ],

  display: workDisplay
}


var  projects = {

  projects: [
    {
      title: "Devrag",
      dates:  "May 08, 2015 - Mar 12, 2016",
      description: `Devrag was going to be a website that allowed all types of software developers to find the
                tools that they needed more easily. It would have accomplished this by allowing creators to tag there tools
                with a specific technology that it was for and then developers would search by tag (Kind of like what
                Github just created).`,
      url: "https://github.com/Phaze1D/Devrag",
      images: [ 'images/dev169-medium.jpg' ]
    },
    {
      title: "Belleza Organica",
      dates:  "Aug 28, 2015 - Nov 29, 2016",
      description:`This is a e-commerce website that I built for a client using a PHP framework call Laravel. It also has a
                custom built backoffice where the client can easily manage the site and view reports and graphs. I use alot of
                AWS products like Elasticbean Stalk, Route53, Workmail and a couple more to manage all the backend.` ,
      url: "https://bellezaorganica.com.mx/",
      images: [ 'images/bell169-medium.jpg' ]
    },
    {
      title: "Farmage Backend",
      dates:  "Apr 7, 2016 - Oct 19, 2016",
      description: `This is a MeteorJS Concept App for all types of agriculture business call Farmage. It is met to organize all of the
                data that a agriculture business has into a much more manageable structure. All of the backend works but the frontend
                is just a simple black and white mockup.`,
      url: "https://github.com/Phaze1D/Farmage-Concept",
      images: [ 'images/fb169-medium.jpg' ]
    },
    {
      title: "Farmage Frontend",
      dates:  "Oct 25, 2016 - Not Finished",
      description: `This is the frontend for Farmage Web App. I follow the Material Design Guidelines
                to the best of my abilties. Splitting the app into 2 different projects made it much more maintainable and cleaner. I am hoping to
                create the mobile version of the app with React Native`,
      url: "https://github.com/Phaze1D/Farmage_Frontend",
      images: [ 'images/ff169-medium.jpg' ]
    },
    {
      title: "Movie Review Project",
      dates:  "Feb 15, 2017 - Feb 17, 2017",
      description: `A Udacity Project from there Fullstack Nanodegree Course. This is a simple python web app that renders a html template of
                a couple of my favorite movies and shows you their youtube trailers when you click on them. `,
      url: "https://github.com/Phaze1D/Udacity-Fullstack-Projects/tree/master/MovieTrailerWebsite",
      images: [ 'images/mo169-medium.jpg' ]
    },
    {
      title: "Portfolio",
      dates:  "Feb 19, 2017 - Feb 22, 2017",
      description: `My Portfolio Website which is also part of the Udacity Nanodegree Fullstack and Frontend Courses. I made this with pure
                Javascript and Handlebars to keep my HTML DRY. Surprisingly, I can up with the design even though I do not consider myself a UI Designer`,
      url: "https://github.com/Phaze1D/Portfolio",
      images: [ 'images/po169-medium.jpg' ]
    },
    {
      title: "Rising Fall Android",
      dates:  "Aug 26, 2014 - Jan 3, 2015",
      description: `This was the first Android game that I published. It is a simple 2D game where you have to rearrange balls of the same
                color together and eliminate them before the hit the top. It's kind of like a mix between Candy Crush and Tetris. I used a game engine
                called LibGDX which is written in Java and I used some of the Android SDK for app purchases.`,
      url: "https://play.google.com/store/apps/details?id=com.Phaze1D.RisingFallAndroidV2.android",
      images: [ 'images/rf169-medium.jpg' ]
    },
    {
      title: "Rising Fall IOS",
      dates:  "Aug 21, 2014 - Jan 3, 2015",
      description: `This is the IOS version of Rising Fall built with Apple's Native 2D game called SpriteKit, written in Objective C. This was
                the first IOS game that I published on the App Store. I came up with the idea when I was in college and I decided to start the Project
                during my summer break. `,
      url: "https://itunes.apple.com/us/app/rising-fall/id904055570?mt=8",
      images: [ 'images/rf169-medium.jpg' ]
    },
    {
      title: "Eschew Cocos2d-X",
      dates:  "Mar 3, 2015 - Mar 30, 2015",
      description: `This was a small litte game I made to learn some C++. I used a game engine called Cocos2d-X which is written in C++. The
                game is just a simple game where the user has to avoid the color boxs by moving the circle around. It gets harder and harder the longer
                you play it.`,
      url: "https://itunes.apple.com/us/app/eschew/id980786957?mt=8",
      images: [ 'images/es169-medium.jpg' ]
    }
  ],
  display: projectsDisplay
}


$('#mapDiv').append(googleMap)
