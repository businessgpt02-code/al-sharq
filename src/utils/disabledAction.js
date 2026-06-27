export const disabledActionProps = {
  onClick: (event) => event.preventDefault(),
  'aria-disabled': 'true',
  tabIndex: -1,
};

export const disabledActionClassName = 'cursor-default opacity-60';
