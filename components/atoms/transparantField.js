import styled from "styled-components";

export const TransparantField = ({
  className,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <Style className={className}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Style>
  );
};
const Style = styled.div`
input{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    transition: 0.2s;
    color: white;
    padding-left: 20px;
    background: rgba(255, 255, 255, 0.26);
    border-radius: 10px;
    ::placeholder {
        color: white;
        opacity: 1; /* Firefox */
    }
}
`;
