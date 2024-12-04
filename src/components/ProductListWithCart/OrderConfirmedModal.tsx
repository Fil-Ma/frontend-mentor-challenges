import styled from "styled-components";

const OrderConfirmedModal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: VoidFunction;
  children: React.ReactNode;
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};

export default OrderConfirmedModal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 320px;
  border: none;
  margin: 0;
`;
