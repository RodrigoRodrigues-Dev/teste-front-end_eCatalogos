import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  padding: 14px 20px;
  border-top: 1px solid var(--border);
  box-shadow: 0 -4px 16px rgba(0,0,0,0.06);
  background: var(--surface);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TotalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
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

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: var(--border);
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100%;
    height: 1px;
    margin: 12px 0;
  }
`;
