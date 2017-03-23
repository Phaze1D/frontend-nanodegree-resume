

function bioDisplay(){
  var formattedHeaderName = HTMLheaderName.replace("%data%", this.name)
  var formattedHeaderRole = HTMLheaderRole.replace("%data%", this.role)
  $('#header').prepend(formattedHeaderName + formattedHeaderRole)


  var formattedMobile   = HTMLmobile.replace("%data%", this.contacts.mobile)
  var formattedEmail    = HTMLemail.replace("%data%", this.contacts.email)
  var formattedGithub   = HTMLgithub.replace("%data%", this.contacts.github)
  var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location)
  $('#topContacts').append(
    formattedMobile +
    formattedEmail  +
    formattedGithub +
    formattedLocation
  )

  var formattedBioPic     = HTMLbioPic.replace("%data%", this.biopic)
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage)
  $('#header').append(formattedBioPic + formattedWelcomeMsg)

  $('#header').append(HTMLskillsStart)

  this.skills.forEach( function(skill){
    var formattedSkills = HTMLskills.replace('%data%', skill)
    $('#skills').append(formattedSkills)
  })
}


function workDisplay(){
  this.jobs.forEach(function(job){
    $('#workExperience').append(HTMLworkStart)

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url)
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title)
    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates)
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location)
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description)

    $('#workExperience .work-entry:last').append(
      formattedWorkEmployer +
      formattedWorkTitle +
      formattedWorkDates +
      formattedWorkLocation +
      formattedWorkDescription
    )

  })
}

function projectsDisplay(){
  this.projects.forEach(function(project){
    $('#projects').append(HTMLprojectStart)

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url)
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates)
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description)
    var formattedProjectImage = ''
    project.images.forEach(function(image){ formattedProjectImage += HTMLprojectImage.replace("%data%", image) })

    $('#projects .project-entry:last').append(
      formattedProjectTitle +
      formattedProjectDates +
      formattedProjectDescription +
      formattedProjectImage
    )

  })
}

function educationDisplay(){
  this.schools.forEach(schoolDisplay)
  $('#education').append(HTMLonlineClasses)
  this.onlineCourses.forEach(onlineDisplay)
}

function schoolDisplay(school) {
  $('#education').append(HTMLschoolStart)

  var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url)
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree)
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates)
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location)
  var formattedSchoolMajor = ''
  school.majors.forEach(function(major){ formattedSchoolMajor += HTMLschoolMajor.replace("%data%", major) })

  $('#education .education-entry:last').append(
    formattedSchoolName +
    formattedSchoolDegree +
    formattedSchoolDates +
    formattedSchoolLocation +
    formattedSchoolMajor
  )

}

function onlineDisplay(course) {

  $('#education').append(HTMLschoolStart)
  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url)
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school)
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates)
  var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace('#', course.url)

  $('#education .education-entry:last').append(
    formattedOnlineTitle +
    formattedOnlineSchool +
    formattedOnlineDates +
    formattedOnlineURL
  )
}
