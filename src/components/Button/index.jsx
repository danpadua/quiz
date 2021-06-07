import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonBase = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
      opacity: .5;
  }

  &:disabled {
      background-color: #979797;
      cursor: not-allowed;
  }
`

ButtonBase.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
}

export default function Button({ ...props }) {
  return <ButtonBase {...props} />
}
