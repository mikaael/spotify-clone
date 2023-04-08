import { Link } from "react-router-dom";

import { DetailsQuestion } from "./DetailsQuestion";

export function FAQ() {
  return (
    <section className="bg-zinc-800">
      <div className="max-w-2xl text-white mx-auto px-4 pt-8 pb-14">
        <h2 className="text-2xl font-bold mb-14">Ajuda rápida</h2>

        <ul>
          <li className="flex flex-col gap-10">
            <DetailsQuestion question="Não consigo redefinir a senhar">
              <div>
                <h4>Endereço de e-mail antigo?</h4>
                <p>
                  Você precisa ter acesso ao endereço de e-mail cadastrado na
                  sua conta do Spotify para abrir o link de redefinição de senha
                  que nós enviamos.
                </p>
                <p>Caso você não tenha acesso, estas são algumas opções:</p>
                <ul>
                  <li>Recupere o acesso ao endereço de e-mail, se possível.</li>
                  <li>
                    <Link to="/signup" className="option-link">
                      Crie uma nova conta
                    </Link>{" "}
                    e comece do zero.
                  </li>
                </ul>
              </div>

              <div>
                <h4>Nenhuma conta associada ao endereço de e-mail?</h4>
                <p>
                  Tente inserir qualquer outro endereço de e-mail que você possa
                  ter usado para criar uma conta.
                </p>
                <p>
                  <span>Observação:</span> existem várias maneiras de se
                  inscrever: usando um e-mail, um número de telefone, o
                  Facebook, a Apple ou o Google. Tente fazer login usando essas
                  opções para localizar sua conta.
                </p>
                <p>
                  Se você acha que o e-mail foi alterado sem sua permissão,
                  consulte{" "}
                  <Link to="" className="option-link">
                    Acha que sua conta foi invadida?
                  </Link>
                </p>
              </div>

              <div>
                <h4>Não recebeu o e-mail de redefinição de senha?</h4>
                <p>
                  Verifique as pastas de spam/lixo eletrônico ou qualquer outra
                  pasta filtrada.
                </p>
                <p>
                  Se você não tiver acesso ao seu endereço de e-mail, consulte
                  “Endereço de e-mail antigo?”.
                </p>
              </div>

              <div>
                <h4>O link para redefinição de senha não funciona?</h4>
                <p>
                  Redefina a senha novamente, mas desta vez abra o link do
                  e-mail em uma janela anônima/privada do navegador.
                </p>
                <Link
                  to="https://accounts.spotify.com/pt-BR/password-reset/"
                  className="option-link"
                >
                  Redefinir sua senha
                </Link>
              </div>

              <div>
                <h4>Muitas solicitações?</h4>
                <p>Tente de novo mais tarde ou use um dispositivo diferente.</p>
              </div>
            </DetailsQuestion>
            <DetailsQuestion question="Não lembro minhas informações de login">
              <div>
                <p>
                  Se você não se lembrar da sua senha, use a página de
                  redefinição de senha.
                </p>
                <p>
                  Se não se lembrar do seu e-mail ou nome de usuário, acesse a
                  página de redefinição de senha e insira os endereços de e-mail
                  que você pode ter usado para criar uma conta. Quando o
                  endereço registrado no Spotify for inserido, aparecerá uma
                  mensagem dizendo que o e-mail de redefinição de senha foi
                  enviado.
                </p>
                <p>
                  Observação: existem várias maneiras de se inscrever: usando um
                  e-mail, um número de telefone, o Facebook, a Apple ou o
                  Google. Tente fazer login usando essas opções para localizar
                  sua conta.
                </p>

                <Link
                  className="option-link"
                  to="https://accounts.spotify.com/pt-BR/password-reset"
                >
                  Redefinir sua senha
                </Link>
              </div>
            </DetailsQuestion>
            <DetailsQuestion question="Ajuda para entrar com o Facebook">
              <div>
                <p>
                  Para entrar no Spotify com sua conta do Facebook, use essa
                  rede social na inscrição ou faça a vinculação.
                </p>
                <p>
                  Também é possível exibir a foto e o nome do seu perfil do
                  Facebook no app e encontrar seus amigos no Spotify com
                  facilidade.
                </p>
                <Link
                  className="option-link"
                  to="https://www.spotify.com/br-pt/signup"
                >
                  Cadastre-se com o Facebook
                </Link>
              </div>

              <div>
                <h4>Vincular a conta do Spotify ao Facebook</h4>
                <p>
                  <span>Observação:</span> você só pode conectar sua conta do
                  Spotify ao Facebook usando o app para computador.
                </p>
                <ol type="1">
                  <li>
                    <p className="inline-flex">
                      No app para computador, clique em V para baixo e selecione
                      Configurações.
                    </p>
                  </li>
                  <li>
                    Em Redes sociais, clique em
                    <span className="transformetouppercase">
                      conectar ao Facebook
                    </span>
                    .
                  </li>
                  <li>
                    Insira suas credenciais do Facebook e clique em Entrar.
                  </li>
                </ol>
                <Link
                  className="option-link"
                  to="https://www.spotify.com/br-pt/download/windows/"
                >
                  Baixe o app para computador
                </Link>
              </div>

              <div>
                <h4>Não consegue entrar com o Facebook?</h4>
                <p>
                  Crie uma senha do Spotify para entrar usando seu endereço de
                  e-mail.
                </p>
                <ol type="1">
                  <li>
                    Acesse o nosso{" "}
                    <Link
                      className="option-link"
                      to="https://accounts.spotify.com/pt-BR/password-reset"
                    >
                      formulário de redefinição de senha.
                    </Link>
                  </li>
                  <li>Insira seu endereço de e-mail do Facebook.</li>
                  <li>
                    Procure na sua caixa de entrada por um e-mail nosso de
                    redefinição de senha.
                  </li>
                </ol>
                <p>
                  Assim, você não terá que usar o botão do Facebook para entrar.
                  Em vez disso, você poderá inserir o endereço de e-mail
                  cadastrado na sua conta do Facebook e a senha recém-criada.
                </p>
                <Link
                  className="option-link"
                  to="https://www.spotify.com/password-reset/"
                >
                  Crie uma senha do Spotify
                </Link>
                <p>
                  Se isso não funcionar,{" "}
                  <Link
                    className="option-link"
                    to="https://support.spotify.com/br-pt/article/change-password/"
                  >
                    clique aqui para receber ajuda.
                  </Link>
                </p>
              </div>

              <div>
                <h4>Desconectar do Facebook</h4>
                <p>
                  <span>Observação:</span> se você se inscreveu com o Facebook,
                  não é possível se desconectar dele. Você pode encerrar a conta
                  e se inscrever com outra opção de login. Por exemplo, seu
                  endereço de e-mail.
                </p>
                <p>
                  No app para computador, acesse “Preferências” V para baixo e
                  clique em{" "}
                  <span className="uppercase">desconectar do Facebook.</span>
                </p>
                <p>
                  Não é possível desconectar do Facebook pelo app para
                  dispositivos móveis.
                </p>
              </div>
            </DetailsQuestion>
            <DetailsQuestion question="Formas de pagamento">
              <div>
                <p>Você pode pagar pelo Spotify Premium de muitas maneiras:</p>
                <ul>
                  <li>Cartão de crédito/débito</li>
                  <li>Cartões pré-pagos</li>
                  <li>PayPal</li>
                  <li>Vales-presente</li>
                  <li>Pagamento móvel</li>
                  <li>Plano pré-pago</li>
                </ul>
                <p>
                  <span> Observação:</span> os métodos variam de acordo com o
                  país ou região.
                </p>
                <p>
                  Para ver as formas de pagamento disponíveis no seu país,
                  acesse{" "}
                  <Link className="option-link" to="/">
                    www.spotify.com/premium
                  </Link>{" "}
                  e avance até a página de pagamento. Você não receberá nenhuma
                  cobrança até enviar os dados de pagamento.
                </p>
              </div>
            </DetailsQuestion>
            <DetailsQuestion question="Assine ou entre num plano Premium Família">
              <div>
                <h4>Premium Família</h4>
                <p>
                  O Premium Família é um plano com desconto para até 6 pessoas
                  que moram juntas.
                </p>
                <p>Nota: não é possível mudar o administrador do plano.</p>
                <Link
                  className="option-link"
                  to="https://support.spotify.com/br-pt/article/start-or-join-family-plan/"
                >
                  Para saber mais sobre os planos Premium Família
                </Link>
              </div>
            </DetailsQuestion>
          </li>
        </ul>
      </div>
    </section>
  );
}
