import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2px 16px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  z-index: 100;
  border-bottom: 1px solid rgb(112, 151, 170);
`;

export const HomeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgb(255, 255, 255);
  background-color: rgb(112, 151, 170);
  font-size: 14px;
  border-radius: 9999px;
  border: 1px solid black;
  width: 25px;
  height: 25px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  transform: rotate(0deg);
`

export const ProductIndex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  vertical-align: middle;

  border-radius: 50%;
  border: 1px solid black;
  background-color: rgb(112, 151, 170);
  color: white;
  aspect-ratio: 1 / 1;
`

export const CatName = styled.p`
  color: rgb(112, 151, 170);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 52px;
`;

export const CategoryBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  width: auto;
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  transition: background 0.15s, color 0.15s;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

