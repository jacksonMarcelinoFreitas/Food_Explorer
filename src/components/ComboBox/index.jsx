import { Container } from './style';

export function ComboBox({value, children, className, onChange, ...rest }) {
  return (
    <Container
      onChange={onChange}
      className={className}
      value={value}
      {...rest}
    >
      {children}
    </Container>
  );
}