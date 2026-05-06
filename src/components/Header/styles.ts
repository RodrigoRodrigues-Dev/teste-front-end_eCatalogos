import styled from "styled-components";

export const Wrapper = styled.header`
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 52px;
`;

export const CategoryBar = styled.nav`
  margin: 0 auto;
  width: 500px;

  display: flex;
  justify-content: space-between;
  gap: 0;
  padding: 0 20px;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 600px) {
    width: auto;
    overflow-x: scroll;
  }
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconBtn = styled.button<{ disabled?: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  color: ${p => p.disabled ? 'var(--text-muted)' : 'var(--text-secondary)'};
  transition: background 0.15s, color 0.15s;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};

  &:hover:not(:disabled) {
    background: var(--surface-2);
    color: var(--text-primary);
  }
`;

export const AppName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FuncBtn = styled.button<{ disabled?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: var(--radius);
  font-weight: 700;
  font-size: 13px;
  color: ${p => p.disabled ? 'var(--text-muted)' : 'var(--text-secondary)'};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: var(--surface-2);
  }
`;

export const CategoryTab = styled.button<{ $active: boolean }>`
  padding: 10px 16px;
  font-size: 13px;
  font-weight: ${p => p.$active ? '600' : '400'};
  color: ${p => p.$active ? 'var(--accent)' : 'var(--text-secondary)'};
  border-bottom: 2px solid ${p => p.$active ? 'var(--accent)' : 'transparent'};
  white-space: nowrap;
  transition: all 0.15s;
  border-radius: 0;

  &:hover {
    color: var(--text-primary);
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: var(--border);
  margin-bottom: 8px;
`
