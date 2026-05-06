import styled from 'styled-components';

// Main container
export const Wrapper = styled.div`
  max-width: 900px;
  margin: 16px auto;
  padding: 16px;
  border-radius: 8px;
  background: var(--surface);

  @media (max-width: 900px) {
    margin: 16px 8px;
  }
`;

// Product information section
export const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
  letter-spacing: -0.03em;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const InfoBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: var(--accent-light);
  transition: all 0.15s;

  &:hover {
    background: var(--accent);
    color: white;
  }
`;

export const PriceInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoBar = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ProductName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const RefRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

// Navigation controls
export const NavArrow = styled.button<{ $side: 'left' | 'right'; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  ${p => p.$side === 'left' ? 'left: -25px;' : 'right: -25px;'}
  transform: translateY(-50%);

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${p => {
    if (p.$side === 'left') return '1px solid var(--border) none 1px solid var(--border) 1px solid var(--border)';
    return 'none 1px solid var(--border) 1px solid var(--border) none';
  }};
  background: var(--surface);
  color: ${p => p.disabled ? 'var(--text-muted)' : 'var(--text-secondary)'};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, color 0.15s;

  &:hover:not(:disabled) {
    background: var(--border);
    color: var(--text-primary);
  }

  @media (max-width: 800px) {
    width: 35px;
    height: 35px;

    ${p => p.$side === 'left' ? 'left: -15px;' : 'right: -15px;'}
  }
`;

// Badges and metadata
export const Ref = styled.span`
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);

  @media (max-width: 800px) {
    font-size: 11px;
  }
`;

export const TypeBadge = styled.span<{ $isNacional: boolean }>`
  font-size: 12px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 99px;
  background: ${p => p.$isNacional ? 'var(--nacional-light)' : 'var(--importado-light)'};
  color: ${p => p.$isNacional ? 'var(--nacional)' : 'var(--importado)'};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const DeliveryBadge = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 99px;
  background: #fef3c7;
  color: #92400e;
  letter-spacing: 0.02em;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const RefColor = styled.div<{ color: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  padding: 4px;
  border: 2px solid var(--border);
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

// Image gallery section
export const ImageArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  background: var(--surface-2);
`;

export const MainImage = styled.img`
  width: 400px;
  max-height: 550px;
  object-fit: contain;

  @media (max-width: 800px) {
    width: 80%;
    gap: 16px;
  }
`;

export const Counter = styled.p`
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-muted);
  text-align: center;
  margin: 12px 0 0;
`;

// Thumbnail gallery
export const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ThumbButton = styled.button<{ $active: boolean }>`
  display: flex;
  overflow: hidden;
  padding: 0;
  border: 2px solid ${({ $active }) =>
    $active ? 'var(--accent)' : 'var(--surface-2)'};
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: var(--accent);
  }
`;

export const Thumb = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
`;
