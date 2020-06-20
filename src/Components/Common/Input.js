import React from 'react'
import { Field } from 'formik'
import Select, { createFilter } from 'react-select'
import { FixedSizeList as List } from 'react-window'
import cx from 'classnames'

const Input = props => {
  switch (props.type) {
    case 'date':
      return <DateInputWrapper {...props} />
    case 'dropdown':
      return <DropDown {...props} />
    case 'searchable-dropdown':
      return <SearchableDropDown {...props} />
    case 'file':
      return <FileInputWrapper {...props} />
    case 'display':
      return <DisplayInput {...props} />
    default:
      return <TextInput {...props} />
  }
}

const TextInput = ({
  name,
  value,
  label,
  placeholder,
  className,
  type,
  id,
  validate,
  disabled = false
}) => {
  const TextInputClasses = cx('TextInput', {
    [className]: className
  })
  return (
    <div className={TextInputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        autoComplete="on"
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        {...(validate ? { validate } : {})}
        disabled={disabled}
      />
    </div>
  )
}

const DisplayInput = ({ name, value, label, className }) => {
  const TextInputClasses = cx('TextInput', {
    [className]: className
  })
  return (
    <div className={TextInputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <input value={value} disabled={true} />
    </div>
  )
}

const DropDown = ({ name, label, placeholder, className, id, validate, choices }) => {
  const TextInputClasses = cx('TextInput', {
    [className]: className
  })
  return (
    <div className={TextInputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as="select" name={name} id={id} {...(validate ? { validate } : {})}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {choices.map(choice => (
          <option key={choice.label} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </Field>
      {errors && touched && <p className={errorsClass}>{errors}</p>}
    </div>
  )
}

export default Input

const height = 50

class MenuList extends React.Component {
  render() {
    const { options, children, maxHeight, getValue } = this.props
    const [value] = getValue()
    const initialOffset = options.indexOf(value) * height

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    )
  }
}

const SelectField = ({ choices, field, form, validate }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '2px solid #0AD2DF',
      background: 'transparent',
      borderRadius: '6px',
      padding: '3px',
      fontWeight: 500,
      color: '#000',
      '&:hover': {
        border: '2px solid #0AD2DF'
      }
    }),
    option: (base, state) => ({
      ...base,
      color: '#000'
    }),
    singleValue: (base, state) => ({
      ...base,
      color: '#fff'
    })
  }

  return (
    <Select
      styles={customStyles}
      filterOption={createFilter({ ignoreAccents: false })}
      components={{ MenuList }}
      options={choices}
      value={choices ? choices.find(choice => choice.value === field.value) : ''}
      onChange={option => {
        form.setFieldValue(field.name, option.value)
      }}
      onBlur={field.onBlur}
    />
  )
}

const SearchableDropDown = props => {
  const TextInputClasses = cx('TextInput', {
    [props.className]: props.className
  })

  return (
    <div className={TextInputClasses}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <Field component={SelectField} {...props} />
      {props.errors && props.touched && <p className={props.errorsClass}>{props.errors}</p>}
    </div>
  )
}

const FileInput = ({ field, form, ...props }) => {
  console.log('field stuff', props)
  return (
    <input
      type="file"
      name={field.name}
      id={field.id}
      // eslint-disable-next-line prettier/prettier
        onChange={async event => {
        const file = await event.currentTarget.files[0]
        form.setFieldValue(field.name, file)
        form.validateField(field.name)
      }}
    />
  )
}

const FileInputWrapper = props => {
  const TextInputClasses = cx('FileInput', {
    [props.className]: props.className
  })

  return (
    <div className={TextInputClasses}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <Field component={FileInput} {...props} />
    </div>
  )
}

const DateInput = ({ field, form, placeholder, ...props }) => {
  return (
    <input
      {...props}
      type="date"
      name={field.name}
      id={field.id}
      placeholder={placeholder}
      onChange={async e => {
        form.setFieldValue(field.name, e.currentTarget.value)
        form.validateField(field.name)
      }}
    />
  )
}

const DateInputWrapper = props => {
  const TextInputClasses = cx('DateInput', {
    [props.className]: props.className
  })

  console.log('field validation props', props)

  return (
    <div className={TextInputClasses}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <Field component={DateInput} {...props} />
    </div>
  )
}
