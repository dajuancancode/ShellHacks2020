import React from 'react'
import { object, reach, string } from 'yup'
import { validPhoneNumber, validDate, validPDF, validEmail } from '../Util/validation'
import SectionForm from '../Common/SectionForm'
import schools from '../../config/schools.json'
import majors from '../../config/majors.json'
import './styles.sass'

const SignUpForm = props => {
  const sections = [
    {
      title: 'Personal Information',
      className: 'personalInfo',
      inputs: [
        {
          name: 'firstName',
          label: 'First Name',
          placeholder: 'First Name',
          type: 'text',
          id: 'firstName',
          className: ['input', 'firstName'].join(' ')
        },
        {
          name: 'lastName',
          label: 'Last Name',
          placeholder: 'Last Name',
          type: 'text',
          id: 'lastName',
          className: ['input', 'lastName'].join(' ')
        },
        {
          name: 'email',
          label: 'School Email Address',
          placeholder: 'School Email Address',
          type: 'email',
          id: 'email',
          className: ['input', 'email'].join(' ')
        },
        {
          name: 'firstName',
          label: 'First Name',
          placeholder: 'First Name',
          type: 'text',
          id: 'firstName',
          className: ['input', 'firstName'].join(' ')
        },
        {
          name: 'lastName',
          label: 'Last Name',
          placeholder: 'Last Name',
          type: 'text',
          id: 'lastName',
          className: ['input', 'lastName'].join(' ')
        },
        {
          name: 'email',
          label: 'School Email Address',
          placeholder: 'School Email Address',
          type: 'email',
          id: 'email',
          className: ['input', 'email'].join(' ')
        },
        {
          name: 'dob',
          label: 'Date of Birth',
          placeholder: 'MM/DD/YYYY',
          type: 'date',
          id: 'dob',
          className: ['input', 'dob'].join(' ')
        },
        {
          name: 'address',
          label: 'Address',
          placeholder: 'Street ',
          type: 'text',
          id: 'street',
          className: 'input'
        },
        {
          name: 'address2',
          label: 'Address 2 (optional)',
          placeholder: 'Apt ',
          type: 'text',
          id: 'apt',
          className: 'input'
        },
        {
          name: 'city',
          label: 'City',
          placeholder: 'Miami',
          type: 'text',
          id: 'city',
          className: 'input'
        },
        {
          name: 'state',
          label: 'State',
          placeholder: 'FL ',
          type: 'text',
          id: 'state',
          className: 'input'
        },
        {
          name: 'zip',
          label: 'Zip',
          placeholder: '33189 ',
          type: 'text',
          id: 'zip',
          className: 'input'
        },
        {
          name: 'country',
          label: 'Country',
          placeholder: 'Country ',
          type: 'text',
          id: 'country',
          className: 'input'
        },
        {
          name: 'gender',
          label: 'Gender',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'gender',
          className: ['searchable-dropdown', 'gender'].join(' '),
          choices: [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
            { value: 'Prefer not to answer', label: 'Prefer not to answer' }
          ]
        },
        {
          name: 'race',
          label: 'Race / Ethnicity',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'race',
          className: ['searchable-dropdown', 'race'].join(' '),
          choices: [
            {
              value: 'American Indian or Alaska Native',
              label: 'American Indian or Alaska Native'
            },
            { value: 'Asian / Pacific Islander', label: 'Asian / Pacific Islander' },
            { value: 'Black or African American', label: 'Black or African American' },
            { value: 'Hispanic or Latinx', label: 'Hispanic or Latinx' },
            { value: 'Native Hawaiian or Pacific Islander', label: 'Asian / Pacific Islander' },
            { value: 'White / Caucasian', label: 'White / Caucasian' },
            { value: 'Multi Racial', label: 'Multi Racial' },
            { value: 'Other', label: 'Other' },
            { value: 'Prefer not to answer', label: 'Prefer not to answer' }
          ]
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number',
          placeholder: '305-867-5309',
          type: 'phone',
          id: 'phoneNumber',
          className: ['input', 'phoneNumber'].join(' ')
        },
        {
          name: 'state',
          label: 'State (if applicable)',
          placeholder: 'CA, FL, NY, AZ, etc.',
          type: 'text',
          id: 'state',
          className: ['input', 'state'].join(' ')
        },
        {
          name: 'country',
          label: 'Country',
          placeholder: 'Country Name',
          type: 'text',
          id: 'country',
          className: ['input', 'country'].join(' ')
        }
      ]
    },
    {
      title: 'School Information',
      className: 'schoolInfo',
      inputs: [
        {
          name: 'schoolName',
          label: 'School Name',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'schoolName',
          className: ['searchable-dropdown', 'schoolName'].join(' '),
          choices: schools
        },
        {
          name: 'major',
          label: 'Major',
          placeholder: 'Select One',
          type: 'searchable-dropdown',
          id: 'major',
          className: ['searchable-dropdown', 'major'].join(' '),
          choices: majors
        },
        {
          name: 'levelOfStudy',
          label: 'Class Standing',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'levelOfStudy',
          className: ['searchable-dropdown', 'levelOfStudy'].join(' '),
          choices: [
            { value: 'Freshman', label: 'Freshman' },
            { value: 'Sophmore', label: 'Sophmore' },
            { value: 'Junior', label: 'Junior' },
            { value: 'Senior', label: 'Senior' },
            { value: 'Masters', label: 'Masters' },
            { value: 'Ph.D', label: 'Ph.D' },
            { value: 'BootCamp Student', label: 'BootCamp Student' },
            { value: 'Recent Graduate', label: 'Recent Graduate' }
          ]
        },
        {
          name: 'graduationYear',
          label: 'Graduation Year',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'graduationYear',
          className: ['searchable-dropdown', 'graduationYear'].join(' '),
          choices: [
            { value: '2019', label: '2019' },
            { value: '2020', label: '2020' },
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2026', placehlabelolder: '2026' }
          ]
        }
      ]
    },
    {
      title: 'Professional Information',
      className: 'professionalInfo',
      inputs: [
        {
          name: 'role',
          label: 'Which role best describes you?',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'role',
          className: ['searchable-dropdown', 'role'].join(' '),
          choices: [
            { value: 'Artist', label: 'Artist' },
            { value: 'Back-end Developer', label: 'Back-end Developer' },
            { value: 'Data Scientist', label: 'Data Scientist' },
            { value: 'Entrepreneur', label: 'Entrepreneur' },
            { value: 'Front-end Developer', label: 'Front-end Developer' },
            { value: 'Full-stack Developer', label: 'Full-stack Developer' },
            { value: 'Game Developer', label: 'Game Developer' },
            { value: 'Musician', label: 'Musician' },
            { value: 'Mobile Developer', label: 'Mobile Developer' },
            { value: 'UI/UX Designer', label: 'UI/UX Designer' },
            { value: 'Web Developer', label: 'Web Developer' },
            { value: 'Other', label: 'Other' }
          ]
        },
        {
          name: 'linkedIn',
          label: 'LinkedIn',
          placeholder: 'https://www.linkedin.com/cool-guy',
          type: 'text',
          id: 'linkedIn',
          className: ['input', 'linkedIn'].join(' ')
        },
        {
          name: 'resume',
          label: 'resume',
          placeholder: '',
          type: 'file',
          id: 'resume',
          className: ['file', 'resume'].join(' ')
        },
        {
          name: 'github',
          label: 'GitHub',
          placeholder: 'https://www.github.com/cool-guy',
          type: 'text',
          id: 'github',
          className: ['input', 'github'].join(' ')
        },
        {
          name: 'website',
          label: 'Website',
          placeholder: 'https://www.coolguy.com',
          type: 'text',
          id: 'website',
          className: ['input', 'website'].join(' ')
        }
      ]
    },
    {
      title: 'Additional Information',
      className: 'additionalInfo',
      inputs: [
        {
          name: 'attendedShellHacks',
          label: 'Have you attended Shellhacks before?',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'attendedShellHacks',
          className: ['searchable-dropdown', 'attendedShellHacks'].join(' '),
          choices: [
            { label: 'Shellacks 2017', value: 'Shellacks 2017' },
            { label: 'Shellacks 2018', value: 'Shellacks 2018' },
            { label: 'Shellacks 2019', value: 'Shellacks 2019' },
            { label: 'This is my first time!', value: 'First Time' }
          ]
        },
        {
          name: 'howDidYouHear',
          label: 'How did you hear about us?',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'howDidYouHear',
          className: ['searchable-dropdown', 'howDidYouHear'].join(' '),
          choices: [
            {
              value: 'Email',
              label: 'Email'
            },
            {
              value: 'Website',
              label: 'Website'
            },
            {
              value: 'Friends',
              label: 'Friends'
            },
            {
              value: 'Professor',
              label: 'Professor'
            },
            {
              value: 'Instagram',
              label: 'Instagram'
            },
            {
              value: 'Facebook',
              label: 'Facebook'
            },
            {
              value: 'LinkedIn',
              label: 'LinkedIn'
            },
            {
              value: 'Twitter',
              label: 'Twitter'
            },
            {
              value: 'Other',
              label: 'Other'
            }
          ]
        }
      ]
    }
  ]

  const schema = object().shape({
    dob: validDate().required(),
    address: string().required(),
    address2: string(),
    city: string().required(),
    state: string().required(),
    zip: string().required(),
    country: string().required(),
    gender: string().required(),
    race: string().required(),
    phoneNumber: validPhoneNumber(),
    schoolName: string().required(),
    major: string().required(),
    levelOfStudy: string().required(),
    graduationYear: string().required(),
    role: string().required(),
    linkedIn: string(),
    github: string(),
    website: string(),
    attendedShellHacks: string().required(),
    howDidYouHear: string().required(),
    resume: validPDF().required()
  })

  const validation = values => {}

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors ? err.errors[0] : err[0]
      })

  const fieldValidation = {
    dob: async d => await validateHelper(d, 'dob'),
    address: async s => await validateHelper(s, 'address'),
    address2: async s => await validateHelper(s, 'address2'),
    city: async s => await validateHelper(s, 'city'),
    state: async s => await validateHelper(s, 'state'),
    zip: async s => await validateHelper(s, 'zip'),
    country: async s => await validateHelper(s, 'country'),
    gender: async s => await validateHelper(s, 'gender'),
    race: async s => await validateHelper(s, 'race'),
    phoneNumber: async s => await validateHelper(s, 'phoneNumber'),
    schoolName: async s => await validateHelper(s, 'schoolName'),
    major: async s => await validateHelper(s, 'major'),
    levelOfStudy: async s => await validateHelper(s, 'levelOfStudy'),
    graduationYear: async s => await validateHelper(s, 'graduationYear'),
    role: async s => await validateHelper(s, 'role'),
    linkedIn: async s => await validateHelper(s, 'linkedIn'),
    github: async s => await validateHelper(s, 'github'),
    website: async s => await validateHelper(s, 'website'),
    attendedShellHacks: async s => await validateHelper(s, 'attendedShellHacks'),
    howDidYouHear: async s => await validateHelper(s, 'howDidYouHear'),
    resume: async s => await validateHelper(s, 'resume')
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    gender: '',
    race: '',
    phoneNumber: '',
    state: '',
    country: '',
    schoolName: '',
    major: '',
    levelOfStudy: '',
    graduationYear: '',
    role: '',
    linkedin: '',
    github: '',
    website: '',
    attendedShellHacks: '',
    howDidYouHear: '',
    resume: null
  }

  const onSubmit = values => {
    console.log(values)
    props.handleSubmit(values)
  }

  return (
    <SectionForm
      validation={validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
      sections={sections}
      buttonText={'Submit'}
      className="ApplicationForm"
      fieldValidation={fieldValidation}
      store={props}
    />
  )
}

export default SignUpForm
