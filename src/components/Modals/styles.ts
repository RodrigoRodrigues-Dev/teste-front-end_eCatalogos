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

export const EmptyMsg = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
  padding: 24px;
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
