import React from 'react'
import {object,reach,string} from 'yup'
import { validPhoneNumber, validDate,validPDF} from '../Util/validation'
import SectionForm from '../Common/SectionForm'
import schools from '../../config/schools.json'
import majors from '../../config/majors.json'
import dietaryRestrictions from '../../config/dietaryRestrictions.json'
import './styles.sass'


const SignUpForm = (props)=>{
  const sections = [
    {
      title: 'Personal Information',
      inputs:[
        {
          name: 'dob',
          label: 'Date of Birth',
          placeholder: '09/20/1999',
          type: "text",
          id: "dob",
          className: "input",
        },
        {
          name: 'gender',
          label: 'Gender',
          placeholder: 'Select one',
          type: "dropdown",
          id: "gender",
          className: "dropdown",
          choices: [
            {value:'Male',label:'Male'},
            {value:"Female",label:"Female"},
            {value:"Other",label:"Other"},
            {value:"Prefer not to answer",label:"Prefer not to answer"}
          ]
        },
        {
          name: 'race',
          label: 'Race / Ethnicity',
          placeholder: 'Select one',
          type: "dropdown",
          id: "race",
          className: "dropdown",
          choices: [
            {value:'American Indian or Alaskan Native',label:'American Indian or Alaskan Native'},
            {value:"Asian / Pacific Islander",label:"Asian / Pacific Islander"},
            {value:"Hispanic or Latinx",label:"Hispanic or Latinx"},
            {value:"White / Caucasian",label:"White / Caucasian"},
            {value:"Other",label:"Other"},
            {value:"Prefer not to answer",label:"Prefer not to answer"}
          ]
        },
        {
          name: 'phoneNumber',
          label: 'phoneNumber',
          placeholder: '305-867-5309',
          type: "phone",
          id: "phoneNumber",
          className: "input",
        },
      ]
    },
    {
      title: 'School Information',
      inputs: [
        {
          name: 'schoolName',
          label: 'School Name',
          placeholder: 'Select one',
          type: "searchable-dropdown",
          id: "schoolName",
          className: "searchable-dropdown",
          choices: schools
        },
        {
          name: 'major',
          label: 'Major',
          placeholder: 'Select One',
          type: "dropdown",
          id: "major",
          className: "dropdown",
          choices: majors
        },
        {
          name: 'levelOfStudy',
          label: 'level Of Study',
          placeholder: 'Select one',
          type: "dropdown",
          id: "levelOfStudy",
          className: "dropdown",
          choices: [
            { value: 'BootCamp Student', label: 'BootCamp Student' },
            { value: 'Freshman', label: 'Freshman' },
            { value: 'Sophmore', label: 'Sophmore' },
            { value: 'Junior', label: 'Junior' },
            { value: 'Senior', label: 'Senior' },
            { value: 'Recent Graduate', label: 'Recent Graduate' },
            { value: 'Masters', label: 'Masters' },
            { value: 'Ph.D', placehlabelolder: 'Ph.D' },
          ]
        },
        {
          name: 'graduationYear',
          label: 'Graduation Year',
          placeholder: 'Select one',
          type: "dropdown",
          id: "graduationYear",
          className: "dropdown",
          choices: [
            { value: '2019', label: '2019' },
            { value: '2020', label: '2020' },
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2026', placehlabelolder: '2026' },
          ]
        },
      ]
    },
    {
      title: 'Professional Information',
      inputs: [
        {
          name: 'role',
          label: 'Which role best describes you?',
          placeholder: 'Select one',
          type: "dropdown",
          id: "role",
          className: "dropdown",
          choices: [
            { value: 'Artist', label: 'Artist' },
            { value: 'Backe-end Developer', label: 'Backe-end Developer' },
            { value: 'Data Scientist', label: 'Data Scientist' },
            { value: 'Entrepreneur', label: 'Entrepreneur' },
            { value: 'Front-end Developer', label: 'Front-end Developer' },
            { value: 'Full-stack Developer', label: 'Full-stack Developer' },
            { value: 'Game Developer', label: 'Game Developer' },
            { value: 'Musician', label: 'Musician' },
            { value: 'Mobile Developer', label: 'Mobile Developer' },
            { value: 'UI/UX Designer', label: 'UI/UX Designer' },
            { value: 'Web Developer', label: 'Web Developer' },
            { value: 'Other', label: 'Other' },

          ]
        },
        {
          name: 'linkedIn',
          label: 'LinkedIn',
          placeholder: 'https://www.linkedin.com/cool-guy',
          type: "text",
          id: "linkedIn",
          className: "input",
        },
        {
          name: 'github',
          label: 'GitHub',
          placeholder: 'https://www.github.com/cool-guy',
          type: "text",
          id: "github",
          className: "input",
        },
        {
          name: 'website',
          label: 'website',
          placeholder: 'https://www.coolguy.com',
          type: "text",
          id: "website",
          className: "input",
        },
      ]
    },
    {
      title: 'Additional Information',
      inputs: [
        {
          name: 'dietaryRestrictions',
          label: 'Any dietary restrictions',
          placeholder: 'Select one',
          type: "dropdown",
          id: "dietaryResctrictions",
          className: "dropdown",
          choices: dietaryRestrictions
        },
        {
          name: 'travelReinbursement',
          label: 'Need travel reinbursement?',
          placeholder: 'Select one',
          type: "dropdown",
          id: "travelReinbursement",
          className: "dropdown",
          choices: [
            { label: 'Yes', value: true },
            { label: 'No', value: false }
          ]
        },
        {
          name: 'attendedShellHacks',
          label: 'have yout attended Shellhacks before?',
          placeholder: 'Select one',
          type: "dropdown",
          id: "travelReinbursement",
          className: "dropdown",
          choices: [
            { label: 'Shellacks 2017', value: 'Shellacks 2017' },
            { label: 'Shellacks 2018', value: 'Shellacks 2018' },
            { label: 'Shellacks 2019', value: 'Shellacks 2019' },
          ]
        },
        {
          name: 'howDidYouHear',
          label: 'How did you hear about us?',
          placeholder: 'Select one',
          type: "dropdown",
          id: "howDidYouHear",
          className: "dropdown",
          choices: [
            {
              "value": "Email",
              "label": "Email"
            },
            {
              "value": "Website",
              "label": "Website"
            },
            {
              "value": "Friends",
              "label": "Friends"
            },
            {
              "value": "Professor",
              "label": "Professor"
            },
            {
              "value": "Instagram",
              "label": "Instagram"
            },
            {
              "value": "Facebook",
              "label": "Facebook"
            },
            {
              "value": "LinkedIn",
              "label": "LinkedIn"
            },
            {
              "value": "Twitter",
              "label": "Twitter"
            },
            {
              "value": "Other",
              "label": "Other"
            }
          ]
        },
        {
          name: 'resume',
          label: 'resume',
          placeholder: '',
          type: "file",
          id: "resume",
          className: "file",
        },
      ]
    }
  ]


  const schema = object().shape({
    dob: validDate().required(),
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
    dietaryRestrictions: string().required(),
    travelReinbursement: string().required(),
    attendedShellHacks: string().required(),
    howDidYouHear: string().required(),
    resume: validPDF()
  })

  const validation = (values) => {
    
  }

  const validateHelper = async (value,path)=>
    reach(schema,path).validate(value)
    .then(()=>null)
      .catch((err) => {
     return err.errors ? err.errors[0] : err[0]
    })
  
  const fieldValidation = {
    dob: async (d) => await validateHelper(d,'dob'),
    gender: async (s)=> await validateHelper(s,'gender'),
    race: async (s)=> await validateHelper(s,'race'),
    phoneNumber: async (s) => await validateHelper(s, 'phoneNumber'),
    schoolName: async (s) => await validateHelper(s, 'schoolName'),
    major: async (s) => await validateHelper(s, 'major'),
    levelOfStudy: async (s) => await validateHelper(s, 'levelOfStudy'),
    graduationYear: async (s) => await validateHelper(s, 'graduationYear'),
    role: async (s) => await validateHelper(s, 'role'),
    linkedIn:async (s) => await validateHelper(s, 'linkedIn'),
    github:async (s) => await validateHelper(s, 'github'),
    website: async (s) => await validateHelper(s, 'website'),
    dietaryRestrictions: async (s) => await validateHelper(s, 'dietaryRestrictions'),
    travelReinbursement: async (s) => await validateHelper(s, 'travelReinbursement'),
    attendedShellHacks: async (s) => await validateHelper(s, 'attendedShellHacks'),
    howDidYouHear: async (s) => await validateHelper(s, 'howDidYouHear'),
    resume: async (s) => await validateHelper(s, 'resume'),
  }

  const initialValues = {
    dob: '',
    gender: '',
    race: '',
    phoneNumber: '',
    schoolName: '',
    major: '',
    levelOfStudy: '',
    graduationYear: '',
    role: '',
    linkedin: '',
    github: '',
    website: '',
    dietaryRestrictions: '',
    travelReinbursement: '',
    attendedShellHacks: '',
    howDidYouHear: '',
    resume: null,
  }

  const onSubmit = (values) => {
    props.handleSubmit(values)
  }
  
  const returnBtn= ()=>(
    <button onClick={props.handleReturn} className="ApplicationForm__return-btn">
      Return
    </button>
  )

  return (
    <SectionForm
      validation={validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
      sections={sections}
      buttonText={"Submit"}
      className="ApplicationForm"
      fieldValidation={fieldValidation}
      Component={returnBtn}
      store={props}
    />
  )
}

export default SignUpForm