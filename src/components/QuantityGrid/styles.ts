import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 16px auto;

  background: var(--surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-sm);

  @media (max-width: 900px) {
    margin: 16px 8px;
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 80px 80px 1fr;
  padding: 8px 16px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
`;

export const ColLabel = styled.span<{ $center?: boolean; $right?: boolean }>`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-align: ${p => p.$right ? 'right' : p.$center ? 'center' : 'left'};
`;

export const GridRow = styled.div<{ $hasValue: boolean }>`
  display: grid;
  grid-template-columns: 60px 1fr 80px 80px 1fr;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  align-items: center;
  background: ${p => p.$hasValue ? 'var(--accent-light)' : 'transparent'};
  transition: background 0.15s;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SizeCell = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
`;

export const StockCell = styled.span<{ $center?: boolean }>`
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-secondary);
  text-align: ${p => p.$center ? 'center' : 'left'};
`;

export const MultiCell = styled.span<{ $center?: boolean }>`
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-muted);
  text-align: center;
`;

export const QtyCell = styled.div`
  display: flex;
  justify-content: center;
`;

export const QtyInput = styled.input<{ $hasValue: boolean }>`
  width: 60px;
  height: 32px;
  text-align: center;
  border: 1.5px solid ${p => p.$hasValue ? 'var(--accent)' : 'var(--border-strong)'};
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-family: var(--font-mono);
  font-weight: 500;
  color: var(--text-primary);
  background: var(--surface);
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
  }

  &::placeholder {
    color: var(--text-muted);
    font-weight: 400;
  }
`;

export const SubtotalCell = styled.span<{ $right?: boolean; $hasValue: boolean }>`
  font-size: 12px;
  font-family: var(--font-mono);
  font-weight: ${p => p.$hasValue ? '600' : '400'};
  color: ${p => p.$hasValue ? 'var(--accent)' : 'var(--text-muted)'};
  text-align: ${p => p.$right ? 'right' : 'left'};
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--surface-2);
  border-top: 2px solid var(--border);
`;

export const TotalLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const TotalValues = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TotalQty = styled.span`
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-muted);
`;

export const TotalValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
`;
