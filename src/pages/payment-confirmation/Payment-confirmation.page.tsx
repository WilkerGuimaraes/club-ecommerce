import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome,
} from 'react-icons/ai';

// Components
import { Header } from '../../components/header/Header';
import { CustomButtom } from '../../components/custom-buttom/Custom-buttom';

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent,
} from './Payment-confirmation.styles';

// Utilities
import { Colors } from '../../theme/theme.colors';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';

export const PaymentConfirmationPage = () => {
  const { clearProducts } = useContext(CartContext);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const status = searchParams.get('success');
  const isCanceled = searchParams.get('canceled') === 'true';

  useEffect(() => {
    if (status === 'true') {
      clearProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleGoToHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </p>
            </>
          )}

          <CustomButtom
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomeClick}
          >
            Ir para a Página Inicial.
          </CustomButtom>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  );
};
