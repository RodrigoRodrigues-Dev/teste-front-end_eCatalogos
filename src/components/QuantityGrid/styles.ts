import styled from 'styled-components';

export const Container = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  padding: 8px 80px;
  overflow: hidden;

  @media (max-width: 900px) {
    margin: 16px 8px;
  }
`;

export const SizesRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const SizeCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuantityBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 8px;
  border-radius: 5px;
  border: 1px solid #fff;
  background: rgb(111, 151, 171);
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 2vh;
  font-weight: 900;
`;

export const SummaryCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SummaryLabel = styled.span`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  font-weight: 600;
  margin-right: 5px;
`;

export const Divider = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: #000;
`;
