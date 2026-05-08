import styled from 'styled-components';

// Main container
export const Wrapper = styled.div`
  padding: 5px 20px 0px 20px;
  background: var(--surface);
`;

// Price display
export const Price = styled.span`
  color: rgb(112, 151, 170);
  font-family: Roboto;
  font-size: 2.2vh;
  font-style: normal;
  font-weight: 900;
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
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--accent);
    color: white;
  }
`;

export const InfoBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ProductDetailsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ProductName = styled.h3`
    color: rgb(112, 151, 170);
    font-family: Roboto;
    font-size: 2.1vh;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`;

export const Ref = styled.span`
  position: absolute;
  right: 50%;
  transform: translateX(50%);

  font-family: Roboto;
  font-size: 2vh;
  font-style: normal;
  font-weight: 400;
  color: rgb(0, 26, 30);
`;

// Product type badge
export const TypeBadge = styled.span<{ $isNacional: boolean }>`
  position: absolute;
  z-index: 999;
  right: 8%;
  top: 10px;
  background-color: rgba(0, 0, 0, 0.733);
  padding: 7px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
`;

// Navigation arrows
export const NavArrow = styled.button<{ $side: 'left' | 'right'; disabled?: boolean }>`
  position: absolute;
  z-index: 999;
  top: 50%;
  ${p => p.$side === 'left' ? 'left: 18px;' : 'right: 18px;'}
  transform: translateY(1030%);

  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: ${p => {
    if (p.$side === 'left') return '1px solid var(--border) none 1px solid var(--border) 1px solid var(--border)';
    return 'none 1px solid var(--border) 1px solid var(--border) none';
  }};
  background: #7097aa;
  color: ${p => p.disabled ? 'var(--text-secondary)' : '#fff'};
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

// Image gallery section
export const ImageArea = styled.div`
  position: relative;
  background: var(--surface-2);
  border-bottom: 3px solid rgb(112, 151, 170);
  overflow: hidden;
`;

export const ImageGalleryScroll = styled.div`
  position: relative;
  display: flex;
  transition: left 0.3s ease;
`

export const MainImage = styled.img`
  width: 100%;
  max-height: 733px;
  object-fit: contain;
  padding: 0 32px;

  @media (max-width: 800px) {
    width: 80%;
    gap: 16px;
  }
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
  width: 44px;
  height: 44px;
  object-fit: cover;
  cursor: pointer;
`;
