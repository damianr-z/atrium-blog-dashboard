import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: var(--fs-12);
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: var(--fs-14);
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: var(--fs-16);
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--c-white-100);
    background-color: var(--c-green-600);
    &:hover {
      background-color: var(--c-green-700);
    }
  `,
  secondary: css`
    color: var(--c-white-100);
    background: var(--c-blue-600);

    &:hover {
      background-color: var(--c-blue-700);
    }
  `,
  danger: css`
    color: var(--c-red-100);
    background-color: var(--c-red-700);

    &:hover {
      background-color: var(--c-red-800);
    }
  `,
};

const Button = styled.button`
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
};

export default Button;
