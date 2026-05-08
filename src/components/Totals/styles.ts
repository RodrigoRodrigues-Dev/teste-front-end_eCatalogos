import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
  border-top: 1px solid var(--border);
  background: var(--surface);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TotalItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Dot = styled.div<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => p.$color};
  flex-shrink: 0;
`;

export const Label = styled.span`
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
`;

export const Amount = styled.span<{ $color: string; $large?: boolean }>`
  font-family: var(--font-mono);
  font-size: ${p => p.$large ? '16px' : '14px'};
  font-weight: 700;
  color: ${p => p.$color};
`;

export const QuantitySelector = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(239, 239, 238);
  border-radius: 35px;
  align-items: center;

  font-size: 22px;
  font-weight: 700;
`

export const QuantitySelectorBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  border-radius: 50%;

  font-size: 28px;
  font-weight: 600;

  background-color: rgb(112, 151, 170);
  color: white;
`
