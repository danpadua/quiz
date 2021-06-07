import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputBase = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 1.5rem;
`

InputBase.defaultProps = {
  value: '',
}

InputBase.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </>
  )
}
