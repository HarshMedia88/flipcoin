import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 50px;
    background-color: ${({ bg }) => bg || '#5B8E7D'};
    color: ${({ color }) => color || '#fff'};
    &:hover {
        opacity: 0.9;
        transfrom: scale(0.98);
    }
    `