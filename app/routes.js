const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Radio Route
router.post('/cmg-app/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['over-18']
  if (over18 === 'false') {
    res.redirect('under')
  } else {
    res.redirect('over')
  }
});



//Normal route with continue 
router.post('/cmg-app/checkbox-1', function (req, res) {
  res.redirect('checkbox-1')
});

// checkbox route
router.post('/cmg-app/checkbox-handler', function (req, res) {
  let wasteMaterial = req.session.data['waste']
  if (wasteMaterial == 'carcasses') {
    res.redirect('under');
  } else if (wasteMaterial == 'mines') {
    res.redirect('over');
  } else if (wasteMaterial == 'farm') {
    res.redirect('dropdown');
  }
  else if (wasteMaterial === 'farm' && wasteMaterial === 'mines') {
    res.redirect('boolean');
  }
  else {
    res.redirect('checkbox-1');
  }
});



//All routes for CMG Applications below this line


//Normal route with continue - URN number input 
router.post('/cmg-app/urn-number-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/declaration')
});



// both parents live in uk boulean
router.post('/cmg-app/sprint-1/live-in-uk-answer', function (req, res) {

  let liveInUk = req.session.data['live-in-uk']
  if (liveInUk === 'Yes') {
    res.redirect('/cmg-app/sprint_1/about_applicant/applicants_name')
  } else {
    res.redirect('/cmg-app/sprint_1/about_applicant/both_parents_registered_to_uk')
  }
});


// both parents registered in uk boulean
router.post('/cmg-app/sprint-1/registered-in-uk-answer', function (req, res) {

  let registeredInUk = req.session.data['registered-in-uk']
  if (registeredInUk === 'Yes') {
    res.redirect('/cmg-app/sprint_1/about_applicant/applicants_name')
  } else {
    res.redirect('/cmg-app/sprint_1/dropout')
  }
});

//Normal route with continue - Applicants Name 
router.post('/cmg-app/about-applicant/applicant-name-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_applicant/applicants_date_of_birth')
});

//Normal route with continue - Applicants DOB 
router.post('/cmg-app/about-applicant/applicant-date-of-birth-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_applicant/applicants_national_insurance_number')
});

//Normal route with continue - Applicants NINO 
router.post('/cmg-app/about-applicant/applicant-national-insurance-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_applicant/applicants_address')
});

//Normal route with continue - Applicants address 
router.post('/cmg-app/about-applicant/applicant-address-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_applicant/applicants_contact_details')
});

//Normal route with continue - Applicants contact details 
router.post('/cmg-app/about-applicant/applicant-contact-details-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/sms_setup')
});

// Opt in to SMS -  boulean
router.post('/cmg-app/sprint-1/sms-handler', function (req, res) {

  let smsOpt = req.session.data['sms-opt']
  if (smsOpt === 'Yes') {
    res.redirect('/cmg-app/sprint_1/existing_case/do_you_have_an_existing_child_maintenance_case')
  } else {
    res.redirect('/cmg-app/sprint_1/existing_case/do_you_have_an_existing_child_maintenance_case')
  }
});

// Do you have an existing case -  boulean
router.post('/cmg-app/sprint-1/existing-case/existing-case-handler', function (req, res) {

  let existingCase = req.session.data['existing-case']
  if (existingCase === 'Yes') {
    res.redirect('/cmg-app/sprint_1/existing_case/enter_child_maintenance_case_number')
  } else {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/how_many_children')
  }
});

//Normal route with continue - Existing case number 
router.post('/cmg-app/existing-case/existing-case-number-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_qualifying_child/how_many_children')
});

// How many children -  boulean
router.post('/cmg-app/qualifying-child/how-many-children-handler', function (req, res) {
  let existingCase = req.session.data['existing-case'];
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/child_name')
});

//Normal route with continue - Childs name
router.post('/cmg-app/qualifying-child/child-name-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_qualifying_child/child_date_of_birth')
});

//Normal route with continue - Childs date of birth
router.post('/cmg-app/qualifying-child/child-date-of-birth-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_qualifying_child/child_over_16')
});

// Is the child over 16 -  boulean
router.post('/cmg-app/qualifying-child/child-over-16-handler', function (req, res) {

  let over16 = req.session.data['over-16']
  if (over16 === 'Yes') {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/child_benefit_payment_for_qualifying_child')
  } else {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/court_order_in_place')
  }
});

// Child benefit in payment -  boulean
router.post('/cmg-app/qualifying-child/child-benefit-payment-handler', function (req, res) {

  let childBenefitPayment = req.session.data['child-benefit-payment']
  if (childBenefitPayment === 'Yes') {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/court_order_in_place')
  } else {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/child_aged_between_16_20')
  }
});

// Child aged between 16 to 20 -  boulean
router.post('/cmg-app/qualifying-child/child-16-to-20-handler', function (req, res) {

  let child16To20 = req.session.data['child-16-to-20']
  if (child16To20 === 'Yes') {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/court_order_in_place')
  } else {
    res.redirect('/cmg-app/sprint_1/dropout')
  }
});

// Court order -  boulean
router.post('/cmg-app/qualifying-child/court-order-handler', function (req, res) {

  let courtOrder = req.session.data['court-order']
  if (courtOrder === 'Yes') {
    res.redirect('/cmg-app/sprint_1/about_qualifying_child/court_order_under_12_months')
  } else {
    res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_name')
  }
});

// Court order under 12 months -  boulean
router.post('/cmg-app/qualifying-child/court-order-12-mths-handler', function (req, res) {

  let courtOrder12Mths = req.session.data['court-order-12-mths']
  if (courtOrder12Mths === 'Yes') {
    res.redirect('/cmg-app/sprint_1/dropout')
  } else {
    res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_name')
  }
});

//Normal route with continue - Other parents name
router.post('/cmg-app/about_other_parent/other-parents-name-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_date_of_birth')
});

//Normal route with continue - Other parents date of birth
router.post('/cmg-app/about-other-parent/other-parent-date-of-birth-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_national_insurance_number')
});

//Normal route with continue - Other parents NINO
router.post('/cmg-app/about-other-parent/other-parent-national-insurance-number-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_address')
});

//Normal route with continue - Other parents address
router.post('/cmg-app/about-other-parent/other-parent-address-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_contact_details')
});

//Normal route with continue - Other parents contact details
router.post('/cmg-app/about-other-parent/other-parent-contact-details-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_employment_details')
});

//Normal route with continue - Other parents contact details
router.post('/cmg-app/about-other-parent/other-parent-employment-details-handler', function (req, res) {
  res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_on_birth_certificate')
});

// Other parent on birth certificate -  boulean
router.post('/cmg-app/about-other-parent/other-parent-on-birth-certificate-handler', function (req, res) {
  let otherParentOnBirthCertificate = req.session.data['other-parent-on-birth-certificate'];
    res.redirect('/cmg-app/sprint_1/about_other_parent/other_parent_shared_care')
});

// Other parent shared care -  boulean
router.post('/cmg-app/about-other-parent/other-parent-shared-care-handler', function (req, res) {
  let otherParentSharedCare = req.session.data['other-parent-shared-care'];
    res.redirect('/cmg-app/sprint_1/service_choice/choose_service')
});

module.exports = router
