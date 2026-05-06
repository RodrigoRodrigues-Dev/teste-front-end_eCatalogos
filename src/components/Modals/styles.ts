import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const Modal = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
`;

export const ModalTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
`;

export const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  &:hover { background: var(--surface-2); }
`;

export const SearchInput = styled.input`
  margin: 16px;
  padding: 10px 14px;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius);
  font-size: 14px;
  color: var(--text-primary);
  background: var(--surface-2);
  &:focus { border-color: var(--accent); }
`;

export const ResultList = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 0 8px 8px;
`;

export const EmptyMsg = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
  padding: 24px;
`;

export const ResultItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
  border-radius: var(--radius);
  text-align: left;
  transition: background 0.15s;
  &:hover { background: var(--surface-2); }
`;

export const ColorDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${p => p.color};
  border: 1.5px solid rgba(0,0,0,0.1);
  flex-shrink: 0;
`;

export const ResultInfo = styled.div`
  flex: 1;
`;

export const ResultName = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
`;

export const ResultRef = styled.div`
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--text-muted);
  margin-top: 2px;
`;

export const ResultPrice = styled.div`
  font-size: 13px;
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--accent);
`;

export const InfoGrid = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--border);
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const InfoKey = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  width: 120px;
  flex-shrink: 0;
`;

export const InfoVal = styled.span`
  font-size: 13px;
  color: var(--text-primary);
`;

export const SkuTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  overflow-y: auto;

  th {
    padding: 8px 16px;
    text-align: left;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-size: 10px;
    background: var(--surface-2);
    border-top: 1px solid var(--border);
  }

  td {
    padding: 10px 16px;
    border-top: 1px solid var(--border);
    font-family: var(--font-mono);
    color: var(--text-secondary);
  }
`;
