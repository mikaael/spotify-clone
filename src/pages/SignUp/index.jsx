import spotifyLogo from "../../assets/spotify-logo.png"
import appleLogo from "../../assets/apple-logo.png"
import facebookLogo from "../../assets/facebook-logo.webp"
import googleLogo from "../../assets/google-logo.png"
import monthSelector from "../../assets/selector.svg"
import "./index.css";
import InputSpace from "./../../components/InputSpace";

function SignUp() {
  return (
    <div>
      <header>
        <a href="./index.html">
          <img
            src={spotifyLogo}
            id="logo"
            alt="Header Image"
          />
        </a>
      </header>
      <div className="signup">
        <h1>Inscreva-se grátis e comece a curtir.</h1>
        <div className="shortcut-login">
          <button className="google-sc" type="button">
            <img
              src={googleLogo}
              id="google"
              alt="Login with Google"
            />
          </button>
          <button className="facebook-sc" type="button">
            <img
              src={facebookLogo}
              id="facebok"
              alt="Login with Facebook"
            />
          </button>
          <button className="apple-sc" type="button">
            <img
              src={appleLogo}
              id="apple"
              alt="Login with Apple"
            />
          </button>
        </div>
        <div className="divider">
          <hr />
          <span>ou</span>
          <hr />
        </div>
        <form>
          <InputSpace
            label="Qual o seu e-mail?"
            type="email"
            id="email1"
            classe="e-mail"
            placeholder="Insira seu e-mail."
            telefone
          />

          <InputSpace
            label="Confirme seu e-mail"
            type="email"
            id="email2"
            classe="e-mail"
            placeholder="Insira o e-mail novamente."
          />

          <InputSpace
            label="Crie uma senha."
            type="password"
            id="password"
            classe="password"
            placeholder="Crie uma senha."
          />

          <InputSpace
            label="Como devemos chamar você?"
            type="text"
            id="text"
            classe="text"
            placeholder="Insira um nome de perfil."
            spaner
          />

          <div className="input-space">
            <label for="data">Qual a sua data de nascimento?</label>

            <div className="date-input">
              <div className="input-space dia">
                <label for="Dia">Dia</label>
                <input
                  type="number"
                  id="Dia"
                  name="dia"
                  placeholder="DD"
                  required
                />
              </div>

              <div className="input-space mes">
                <label for="Mês">Mês</label>
                <div className="month-select">
                  <select name="meses" id="mes">
                    <option value="" disabled selected>
                      Mês
                    </option>
                    <option value="0">janeiro</option>
                    <option value="1">fevereiro</option>
                    <option value="2">março</option>
                    <option value="3">abril</option>
                    <option value="4">maio</option>
                    <option value="5">junho</option>
                    <option value="6">julho</option>
                    <option value="7">agosto</option>
                    <option value="8">setembro</option>
                    <option value="9">outubro</option>
                    <option value="10">novembro</option>
                    <option value="11">dezembro</option>
                  </select>
                  <img src={monthSelector} alt="Seletor" />
                </div>
              </div>

              <div className="input-space ano">
                <label for="Ano">Ano</label>
                <input
                  type="number"
                  id="Ano"
                  name="ano"
                  placeholder="AAAA"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-space">
            <label for="gender">Qual o seu gênero?</label>
            <div className="input-gender">
              <div>
                <input
                  type="radio"
                  id="Masculino"
                  name="gender"
                  value="Masculino"
                />
                <label for="Masculino">Masculino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Feminino"
                  name="gender"
                  value="Feminino"
                />
                <label for="Feminino">Feminino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Não Binário"
                  name="gender"
                  value="Não Binário"
                />
                <label for="Não Binário">Não Binário</label>
              </div>
              <div>
                <input type="radio" id="Outros" name="gender" value="Outros" />
                <label for="Outros">Outros</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Prefiro não dizer"
                  name="gender"
                  value="Prefiro não dizer"
                />
                <label for="Prefiro não dizer">Prefiro não dizer</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div>
              <input type="checkbox" id="marketing" name="marketing" />
              <label for="marketing">
                Não quero receber mensagens de marketing do Spotify
              </label>
            </div>
            <div>
              <input type="checkbox" id="dados" name="dados" />
              <label for="dados">
                Compartilhar meus dados cadastrais com os provedores de conteúdo
                do Spotify para fins de marketing.
              </label>
            </div>
            <div>
              <input type="checkbox" id="termos" name="termos" />
              <label for="termos">
                Eu concordo com os
                <a href="">Termos e Condições de Uso do Spotify.</a>
              </label>
            </div>
          </div>

          <div className="priv-policy">
            <p>
              Para saber mais sobre como o Spotify coleta, utiliza, compartilha
              e protege seus dados pessoais, leia a
              <a href="#">Política de privacidade do Spotify.</a>
            </p>
          </div>

          <div className="submit-button">
            <input type="submit" value="Inscrever-se" />
          </div>

          <div className="form-group login">
            <p>
              Já tem uma conta? <a href="#">Faça login.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
